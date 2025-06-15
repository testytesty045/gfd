import React from 'react';
import ServicesBanner from '../components/ServicesBanner';
import { successStories, storyPageContent } from '../data/services';
import { Link } from 'react-router-dom';

const SuccessStories = () => {
  // Get content from centralized storyPageContent
  const { pageTitle, bannerTitle, bannerImage, sectionTitle, sectionDescription, headings, successAchieved, ctaSectionTitle, ctaSectionDescription, ctaButtonText, heroContent } = storyPageContent;

  return (
    <div>
      <ServicesBanner 
        title={bannerTitle}
        heroImage={bannerImage}
      />
      
      <section className="py-12 bg-slate-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold text-secondary-900 mb-4">{sectionTitle}</h2>
            <p className="text-neutral-600 text-lg">
              {sectionDescription}
            </p>
          </div>
          
          <div className="space-y-12">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden animate-fadeIn">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="inline-flex items-center rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-semibold mb-2">
                        {story.industry}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-800">{story.title}</h3>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <Link to={`/success-story-${story.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                        <span className="font-medium mr-2">View Details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-md p-6">
                    <h4 className="text-blue-700 font-semibold mb-2">{headings.clientBackground}</h4>
                    <p className="text-gray-600">{story.clientBackground}</p>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <Link 
                      to={`/success-story-${story.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Read Full Case Study
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">{ctaSectionTitle}</h2>
            <p className="text-white/90 text-lg mb-8">
              {ctaSectionDescription}
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 transition duration-300"
            >
              {ctaButtonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories; 