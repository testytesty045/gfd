import React from 'react';

const PhaseCard = ({ title, activities, deliverables }) => (
  <div className="bg-white rounded-xl shadow-card p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-security-blue mb-4 bg-security-blue text-white p-3 rounded-lg">
      {title}
    </h3>
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-medium mb-3">Activities:</h4>
        <ul className="space-y-2">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{activity}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-medium mb-3">Deliverables:</h4>
        <ul className="space-y-2">
          {deliverables.map((deliverable, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const VAPTServices = () => {
  return (
    <section className="bg-gradient-to-b from-white to-security-blue-light py-16 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-security-blue mb-4">
            Comprehensive Security Testing
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our VAPT services help you identify and remediate security vulnerabilities before
            malicious actors can exploit them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-security-blue mb-4">Vulnerability Assessment</h2>
            <p className="text-gray-600">
              A systematic review of security weaknesses in your systems and applications. This process identifies and quantifies vulnerabilities in your environment, providing a prioritized list for remediation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-security-blue mb-4">Penetration Testing</h2>
            <p className="text-gray-600">
              An authorized simulated attack on your systems to identify exploitable vulnerabilities. This hands-on approach reveals how attackers might chain together multiple vulnerabilities to compromise your systems.
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-xl p-8 mb-16 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-security-blue mb-6">Why VAPT Matters:</h2>
          <ul className="space-y-4">
            {[
              'The average cost of a data breach reached $4.45 million in 2023',
              'Regulatory frameworks increasingly require regular security testing',
              'Proactive identification of vulnerabilities prevents expensive security incidents',
              'Regular testing helps maintain customer trust and protect your brand reputation'
            ].map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent-red mr-3 flex-shrink-0">•</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-security-blue text-center mb-8">Our VAPT Approach</h2>
          
          <PhaseCard
            title="Phase 1: Reconnaissance & Planning"
            activities={[
              'Define scope and objectives',
              'Gather information about target systems',
              'Network and domain discovery',
              'Establish testing protocols'
            ]}
            deliverables={[
              'Detailed project plan',
              'Scope document',
              'Initial asset inventory'
            ]}
          />

          <PhaseCard
            title="Phase 2: Vulnerability Assessment"
            activities={[
              'Automated scanning with multiple tools',
              'Manual verification of findings',
              'Vulnerability validation',
              'Risk assessment and prioritization'
            ]}
            deliverables={[
              'Comprehensive vulnerability report',
              'Prioritized list of vulnerabilities',
              'Risk assessment matrix'
            ]}
          />

          <PhaseCard
            title="Phase 3: Penetration Testing"
            activities={[
              'Exploit identified vulnerabilities',
              'Privilege escalation attempts',
              'Network lateral movement',
              'Data exfiltration testing',
              'Persistence testing'
            ]}
            deliverables={[
              'Detailed penetration testing report',
              'Attack path documentation',
              'Evidence of successful exploitation',
              'Business impact assessment'
            ]}
          />

          <PhaseCard
            title="Phase 4: Reporting & Remediation"
            activities={[
              'Compile comprehensive findings',
              'Develop detailed remediation strategies',
              'Executive presentation of findings',
              'Remediation assistance (if requested)'
            ]}
            deliverables={[
              'Executive summary',
              'Technical report with all findings',
              'Detailed remediation roadmap',
              'Recommendations for security improvements'
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default VAPTServices; 