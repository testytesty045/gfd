import React, { useEffect } from 'react';
import { getServiceById } from './services';
// import HeroBanner from '../components/HeroBanner';
import styles from './managedservices.module.css';
import heroImage from "../../assets/images/hero.png";
import ServicesBanner from '../../components/ServicesBanner';

const ManagedITServices = () => {
  // Get service data
  const service = getServiceById('managed-it');

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      {/* <HeroBanner
        title="Managed IT Services"
        subtitle={service.headerText}
        buttonText="Learn More"
        buttonLink="#overview"
        backgroundImage={service.imageUrl}
        height="lg"
      /> */}
       <ServicesBanner
  title="Managed IT Services"
  heroImage={heroImage}
  compactMode={true}
  caseStudyDescription="24x7 Network Operations Center for Monitoring & Support To Ensure Maximum Network Uptime"
/>

      {/* Overview Section */}
      <section id="overview" className={styles.section + ' ' + styles['bg-white']}>
        <div className={styles['container-custom']}>
          <div className={styles['max-w-3xl'] + ' ' + styles['mx-auto'] + ' ' + styles['text-center'] + ' ' + styles['mb-12'] + ' ' + styles['animate-fadeIn']}>
            <div className={styles['inline-block'] + ' ' + styles['text-primary'] + ' ' + styles['text-sm'] + ' ' + styles['font-semibold'] + ' ' + styles['bg-primary-50'] + ' ' + styles['px-3'] + ' ' + styles['py-1'] + ' ' + styles['rounded-full'] + ' ' + styles['mb-3']}>Focus on Your Business</div>
            <h2 className={styles['text-secondary-900'] + ' ' + styles['mb-4']}>We'll Handle Your IT!</h2>
            <p className={styles['text-neutral-600'] + ' ' + styles['text-lg']}>
              At DG FutureTech, we provide comprehensive Managed IT solutions in Thunder Bay
              so you can forget about IT headaches and focus on what truly matters—growing your
              business.
            </p>
          </div>

          <div className={`${styles['bg-white']} ${styles['rounded-xl']} ${styles['shadow-subtle']} ${styles['p-8']} ${styles['mb-12']} ${styles['animate-slideUp']}`}>
            <p className={`${styles['text-lg']} ${styles['mb-4']}`}>
              As a <span className={styles['font-semibold']}>proactive IT outsourcing partner</span>, we don't just manage your technology—we help
              optimize it. Our team suggests meaningful process improvements, shares industry best
              practices, and helps you align IT with your business goals to drive 
              <span className={styles['font-semibold']}> better efficiency, security, and value</span>.
            </p>
            <p className={`${styles['text-lg']}`}>
              With our <span className={styles['font-semibold']}>flexible Managed Services model</span>, you get IT support tailored to your needs:
            </p>
            <div className={`${styles['mt-6']} ${styles['space-y-4']}`}>
              {service.features.map((feature, index) => (
                <div key={index} className={`${styles['flex']} ${styles['items-start']} ${styles['gap-3']} ${styles['animate-slideInLeft']} ${styles['animate-delay-200']}`}>
                  <div className={`${styles['text-primary']} ${styles['flex-shrink-0']} ${styles['mt-1']}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`${styles['font-semibold']} ${styles['text-secondary-900']}`}>{feature.title}</h3>
                    <p className={styles['text-neutral-600']}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className={`${styles['mt-6']} ${styles['text-lg']}`}>
              From <span className={styles['font-semibold']}>proactive monitoring and network support</span> to on-demand IT assistance, DG
              FutureTech ensures your systems run smoothly—so you can focus on 
              <span className={styles['font-semibold']}> business growth with total peace of mind</span>.
            </p>
            <div className={`${styles['mt-6']} ${styles['flex']} ${styles['items-center']}`}>
              <div className={`${styles['text-primary']} ${styles['mr-2']}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <p className={`${styles['font-semibold']} ${styles['text-lg']}`}>Ready for stress-free IT? Contact us today!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles['benefits-section']}>
        <div className={styles['container-custom']}>
          <div className={styles['benefits-header']}>
            <div className={styles['benefits-label']}>Key Advantages</div>
            <h2 className={styles['benefits-title']}>What Are the Benefits of a Managed Service Provider?</h2>
            <p className={styles['benefits-description']}>
              Partnering with a managed service provider delivers significant advantages for your business.
            </p>
          </div>

          <div className={styles['benefits-grid']}>
            <div className={`${styles['benefit-card']} ${styles['animate-slideUp']}`}>
              <div className={styles['benefit-icon']}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['icon-dollar']}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                  <line x1="12" y1="6" x2="12" y2="8"></line>
                  <line x1="12" y1="16" x2="12" y2="18"></line>
                </svg>
              </div>
              <h3 className={styles['benefit-card-title']}>Lower IT Costs</h3>
              <p className={styles['benefit-card-description']}>
                With today's global shortage of skilled IT workers, hiring and retaining in-house talent can be expensive. Switching to managed IT services is often easier and can dramatically reduce IT expenses.
              </p>
            </div>
            
            <div className={`${styles['benefit-card']} ${styles['animate-slideUp']} ${styles['animate-delay-100']}`}>
              <div className={styles['benefit-icon']}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['icon-efficiency']}>
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
                </svg>
              </div>
              <h3 className={styles['benefit-card-title']}>Operational Efficiency</h3>
              <p className={styles['benefit-card-description']}>
                As your organization grows, in-house IT teams can quickly become overwhelmed. Outsourcing IT services ensures your business maximizes performance, efficiency, and reliability from your technology infrastructure.
              </p>
            </div>
            
            <div className={`${styles['benefit-card']} ${styles['animate-slideUp']} ${styles['animate-delay-100']}`}>
              <div className={styles['benefit-icon']}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['icon-resource']}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className={styles['benefit-card-title']}>Better Resource Allocation</h3>
              <p className={styles['benefit-card-description']}>
                A managed service provider gives you access to advanced IT expertise, allowing you to optimize your in-house resources and drive greater value across your organization.
              </p>
            </div>
            
            <div className={`${styles['benefit-card']} ${styles['animate-slideUp']} ${styles['animate-delay-200']}`}>
              <div className={styles['benefit-icon']}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['icon-technology']}>
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <line x1="8" y1="10" x2="16" y2="10"></line>
                  <line x1="8" y1="14" x2="16" y2="14"></line>
                </svg>
              </div>
              <h3 className={styles['benefit-card-title']}>Up-to-date Technology</h3>
              <p className={styles['benefit-card-description']}>
                System failures can cost small businesses anywhere from $82K to $256K per incident. A managed IT service provider helps keep your technology secure, reliable, and operating at peak efficiency.
              </p>
            </div>
            
            <div className={`${styles['benefit-card']} ${styles['animate-slideUp']} ${styles['animate-delay-200']}`}>
              <div className={styles['benefit-icon']}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['icon-growth']}>
                  <path d="M21 7v13H3V4h13"></path>
                  <path d="M16 2h6v6"></path>
                  <path d="M22 2L12 12"></path>
                </svg>
              </div>
              <h3 className={styles['benefit-card-title']}>Growth Opportunities</h3>
              <p className={styles['benefit-card-description']}>
                Delegating complex technology decisions to a trusted IT services provider enables you to concentrate on core competencies and seize growth opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={styles['use-cases-section']}>
        <div className={styles['container-custom']}>
          <div className={styles['use-cases-header']}>
            <div className={styles['use-cases-label']}>Real World Examples</div>
            <h2 className={styles['use-cases-title']}>Use Cases</h2>
            <p className={styles['use-cases-description']}>
              See how our managed IT services have helped businesses overcome their challenges.
            </p>
          </div>

          <div className={styles['use-cases-grid']}>
            <div className={`${styles['use-case-card']} ${styles['animate-slideUp']}`}>
              <div className={styles['use-case-header']}>
                <h3 className={styles['use-case-title']}>The Challenge</h3>
                <p className={styles['use-case-problem']}>
                  A growing law firm with 20 employees struggles with frequent IT downtime, slow computers, and lack of cybersecurity measures. They have no dedicated IT team, and handling technical issues disrupts productivity.
                </p>
              </div>
              <div className={styles['use-case-body']}>
                <h3 className={styles['use-case-solution-title']}>DG FutureTech's Solution</h3>
                <ul className={styles['use-case-solution-list']}>
                  <li className={styles['use-case-solution-item']}>
                    <div className={styles['use-case-solution-icon']}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14l3 3 6-6"></path>
                      </svg>
                    </div>
                    <p className={styles['use-case-solution-text']}>Implemented 24/7 IT support to resolve technical issues quickly</p>
                  </li>
                  <li className={styles['use-case-solution-item']}>
                    <div className={styles['use-case-solution-icon']}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14l3 3 6-6"></path>
                      </svg>
                    </div>
                    <p className={styles['use-case-solution-text']}>Deployed cybersecurity solutions to protect against data breaches</p>
                  </li>
                  <li className={styles['use-case-solution-item']}>
                    <div className={styles['use-case-solution-icon']}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14l3 3 6-6"></path>
                      </svg>
                    </div>
                    <p className={styles['use-case-solution-text']}>Setup routine system maintenance to prevent slowdowns and crashes</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`${styles['use-case-card']} ${styles['animate-slideUp']} ${styles['animate-delay-100']}`}>
              <div className={styles['use-case-header']}>
                <h3 className={styles['use-case-title']}>The Challenge</h3>
                <p className={styles['use-case-problem']}>
                  A business using outdated on-premise servers for inventory management, leading to slow data processing and frequent crashes during peak sales periods.
                </p>
              </div>
              <div className={styles['use-case-body']}>
                <h3 className={styles['use-case-solution-title']}>DG FutureTech's Solution</h3>
                <ul className={styles['use-case-solution-list']}>
                  <li className={styles['use-case-solution-item']}>
                    <div className={styles['use-case-solution-icon']}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14l3 3 6-6"></path>
                      </svg>
                    </div>
                    <p className={styles['use-case-solution-text']}>Migrated the inventory system to a Azure cloud platform</p>
                  </li>
                  <li className={styles['use-case-solution-item']}>
                    <div className={styles['use-case-solution-icon']}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14l3 3 6-6"></path>
                      </svg>
                    </div>
                    <p className={styles['use-case-solution-text']}>Implemented real-time data syncing for better stock management</p>
                  </li>
                  <li className={styles['use-case-solution-item']}>
                    <div className={styles['use-case-solution-icon']}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14l3 3 6-6"></path>
                      </svg>
                    </div>
                    <p className={styles['use-case-solution-text']}>Set up automated backups to prevent data loss</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Boxes Section */}
      <section className={`${styles.section} ${styles['bg-primary-50']}`}>
        <div className={styles['container-custom']}>
          <div className={styles['max-w-3xl'] + ' ' + styles['mx-auto'] + ' ' + styles['text-center'] + ' ' + styles['mb-12'] + ' ' + styles['animate-fadeIn']}>
            <div className={styles['inline-block'] + ' ' + styles['text-primary'] + ' ' + styles['text-sm'] + ' ' + styles['font-semibold'] + ' ' + styles['bg-white'] + ' ' + styles['px-3'] + ' ' + styles['py-1'] + ' ' + styles['rounded-full'] + ' ' + styles['mb-3']}>Frequently Asked Questions</div>
            <h2 className={styles['text-secondary-900'] + ' ' + styles['mb-4']}>Understanding Managed IT Services</h2>
            <p className={styles['text-neutral-600'] + ' ' + styles['text-lg']}>
              Get answers to common questions about managed IT services.
            </p>
          </div>

          <div className={styles['grid'] + ' ' + styles['grid-cols-1'] + ' ' + styles['lg-grid-cols-2'] + ' ' + styles['gap-6']}>
            <div className={`${styles['bg-white']} ${styles['p-6']} ${styles['rounded-xl']} ${styles['shadow-subtle']} ${styles['animate-slideUp']}`}>
              <h3 className={styles['text-xl'] + ' ' + styles['font-semibold'] + ' ' + styles['text-secondary-900'] + ' ' + styles['mb-4']}>What Are Managed IT Services?</h3>
              <p className={styles['text-neutral-600'] + ' ' + styles['mb-4']}>
                Managed IT services involve outsourcing IT tasks and management to expert third-party providers, helping businesses streamline operations and reduce costs. This model ensures efficient, secure, and proactive IT support without the burden of in-house management.
              </p>
              <p className={styles['text-neutral-600']}>
                At DG FutureTech, we offer a comprehensive range of managed services, including IT support, cybersecurity, cloud migration, hosting, application development, unified communications, and more tailored to meet your business needs.
              </p>
            </div>

            <div className={`${styles['bg-white']} ${styles['p-6']} ${styles['rounded-xl']} ${styles['shadow-subtle']} ${styles['animate-slideUp']} ${styles['animate-delay-100']}`}>
              <h3 className={styles['text-xl'] + ' ' + styles['font-semibold'] + ' ' + styles['text-secondary-900'] + ' ' + styles['mb-4']}>What Is a Managed IT Service Provider?</h3>
              <p className={styles['text-neutral-600'] + ' ' + styles['mb-4']}>
                A Managed Service Provider (MSP) is an IT company that oversees and manages an organization's technology, systems, and overall IT needs.
              </p>
              <p className={styles['text-neutral-600'] + ' ' + styles['mb-4']}>
                Managed IT solutions can be tailored to fit your business—whether it's fully outsourcing your IT, engaging in a one-time consulting project, or opting for a co-managed IT agreement that supports your in-house team.
              </p>
              <p className={styles['text-neutral-600']}>
                At DG FutureTech, we offer competitive, flat-rate pricing with a monthly subscription model, including unlimited remote support from our U.S.-based help desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className={styles['principles-section']}>
        <div className={styles['container-custom']}>
          <h2 className={styles['principles-section-title']}>What sets DG FutureTech apart?</h2>
          
          <div className={styles['principles-grid']}>
            <div className={`${styles['principle-item']} ${styles['animate-fadeIn']}`}>
              <h3>Strategic Vision</h3>
              <p>
                We provide more than just IT – we offer a strategic partnership,
                leveraging technology to drive your business forward with a
                focus on user-centric solutions.
              </p>
            </div>
            <div className={`${styles['principle-item']} ${styles['animate-fadeIn']} ${styles['animate-delay-100']}`}>
              <h3>Talented Team</h3>
              <p>
                Our world-class team, fueled by a passion for growth and
                continuous learning, delivers exceptional results.
              </p>
            </div>
            <div className={`${styles['principle-item']} ${styles['animate-fadeIn']} ${styles['animate-delay-200']}`}>
              <h3>Social Impact</h3>
              <p>
                We are dedicated to creating positive change through community
                investment, career development, and support for global
                organizations.
              </p>
            </div>
            <div className={`${styles['principle-item']} ${styles['animate-fadeIn']} ${styles['animate-delay-200']}`}>
              <h3>People-Centric Approach</h3>
              <p>
                At our core, we grow people and their businesses, focusing on
                long-term success and partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Services Section */}
      <section className={styles['comit-more-services-section']}>
        <div className={styles['comit-container-inner']}>
          <h2 className={`${styles['comit-section-title']} ${styles['comit-text-center']}`}>
            More IT Services offered by DG FutureTech
          </h2>

          <div className={styles['comit-services-grid']}>
            <div className={`${styles['comit-service-card']} ${styles['animate-slideUp']}`}>
              <div className={styles['comit-service-icon'] + ' ' + styles['comit-network-icon']}></div>
              <h3 className={styles['comit-service-title']}>Network Assessments</h3>
              <p className={styles['comit-service-text']}>
                We evaluate your current state environment and determine if
                there are any vulnerabilities or ways we can save you money
              </p>
            </div>

            <div className={`${styles['comit-service-card']} ${styles['animate-slideUp']} ${styles['animate-delay-100']}`}>
              <div className={styles['comit-service-icon'] + ' ' + styles['comit-server-icon']}></div>
              <h3 className={styles['comit-service-title']}>Network Services</h3>
              <p className={styles['comit-service-text']}>
                We offer a full Managed Services model which allows you to
                bundle specific services for a low fixed monthly cost
              </p>
            </div>

            <div className={`${styles['comit-service-card']} ${styles['animate-slideUp']} ${styles['animate-delay-200']}`}>
              <div className={styles['comit-service-icon'] + ' ' + styles['comit-cloud-icon']}></div>
              <h3 className={styles['comit-service-title']}>Cloud Solutions</h3>
              <p className={styles['comit-service-text']}>
                Finding the right solutions for you. We utilize the cloud to
                help your organization to achieve the best solutions
              </p>
            </div>

            <div className={`${styles['comit-service-card']} ${styles['animate-slideUp']}`}>
              <div className={styles['comit-service-icon'] + ' ' + styles['comit-device-icon']}></div>
              <h3 className={styles['comit-service-title']}>
                Desktop and Server Support
              </h3>
              <p className={styles['comit-service-text']}>
                We take care of the day to day, week to week, and month to
                month of your systems, which provides you more time to help
                your customers
              </p>
            </div>

            <div className={`${styles['comit-service-card']} ${styles['animate-slideUp']} ${styles['animate-delay-100']}`}>
              <div className={styles['comit-service-icon'] + ' ' + styles['comit-database-icon']}></div>
              <h3 className={styles['comit-service-title']}>Business Continuity</h3>
              <p className={styles['comit-service-text']}>
                Online Backup and restoration. We believe in having your data
                saved in case something unspeakable happens.
              </p>
            </div>

            <div className={`${styles['comit-service-card']} ${styles['animate-slideUp']} ${styles['animate-delay-200']}`}>
              <div className={styles['comit-service-icon'] + ' ' + styles['comit-security-icon']}></div>
              <h3 className={styles['comit-service-title']}>Cyber Security</h3>
              <p className={styles['comit-service-text']}>
                From Anti-virus software to firewalls. We utilize a variety of
                software and hardware to keep your business safe and running
                smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

 
    

    
     
    </div>
  );
};

export default ManagedITServices;

