import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PageTitle from '../components/PageTitle';

// import styles from './styles/home.module.css';
import blogStyles from "../components/styles/blogSection.module.css";

import Services from "../components/individual/Services.js";
import ITServices from "../components/individual/ITServices.js";
import Client from "../components/individual/Client.js";
import Homehero from "../components/individual/Home/Homehero.js";
import ITServicesComponent from "../components/individual/Home/ITServicesComponent.js";
import Stats from "../components/individual/Home/Stats.js";
import ScrollTriggeredContactForm from "../components/ScrollTriggeredContactForm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const getBlogsPerPage = () => {
    if (windowWidth <= 480) return 1;
    if (windowWidth <= 992) return 2;
    return 3;
  };

  const blogsPerPage = getBlogsPerPage();

  useEffect(() => {
    fetch("/data/blogData.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });

    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      setCurrentBlogIndex(0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  const handleViewAll = () => {
    navigate("/blogs");
  };

  const handlePrevious = () => {
    if (currentBlogIndex > 0) {
      setCurrentBlogIndex(currentBlogIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentBlogIndex < blogs.length - blogsPerPage) {
      setCurrentBlogIndex(currentBlogIndex + 1);
    }
  };

  const slideTransform = `translateX(-${currentBlogIndex * (100 / blogsPerPage)}%)`;

  return (
    <>
      <PageTitle 
        title="Home" 
        description="Your Digital Transfomation Partner-Leading provider of managed IT services, security solutions, and technology consulting for businesses."
      />
      <div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <Homehero />
          <Stats />
        </div>

        <div>
          <Services />
        </div> 
        <div>
          <ITServices />
        </div>
        <div>
          <Client />
        </div>
        <div>
          <ITServicesComponent />
        </div>
        <section className={blogStyles.customBlogSection}>
          <h2 className={blogStyles.blogSectionTitle}>
            Latest <span>Blogs</span>
          </h2>

          <div className={blogStyles.blogSectionWrapper}>
            {/* Blog navigation buttons */}
            <button
              className={`${blogStyles.blogNavButton} ${blogStyles.prevButton}`}
              onClick={handlePrevious}
              disabled={currentBlogIndex === 0}
              aria-label="Previous blogs"
            >
              <FaChevronLeft />
            </button>

            <div className={blogStyles.blogCardsOuterContainer}>
              <div
                className={blogStyles.blogCardsContainer}
                style={{
                  transform: slideTransform,
                  transition: "transform 0.5s ease",
                }}
              >
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className={blogStyles.blogCardWrapper}
                    onClick={() => handleBlogClick(blog.id)}
                  >
                    <div className={blogStyles.blogCard}>
                      <div className={blogStyles.cardImage}>
                        <img src={blog.imgSrc} alt={blog.title} />
                      </div>
                      <div className={blogStyles.cardContent}>
                        <h3>{blog.title}</h3>
                        <div className={blogStyles.buttonContainer}>
                          <button className={blogStyles.readMoreBtn}>
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className={`${blogStyles.blogNavButton} ${blogStyles.nextButton}`}
              onClick={handleNext}
              disabled={currentBlogIndex >= blogs.length - blogsPerPage}
              aria-label="Next blogs"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className={blogStyles.allBlogsCta}>
            <button onClick={handleViewAll} className={blogStyles.viewAllBtn}>
              View All Blogs
            </button>
          </div>
        </section>

        <ScrollTriggeredContactForm />
      </div>
    </>
  );
};
export default Home;
