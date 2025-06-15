import React from "react";

const UseCasesComponent = ({ 
  title, 
  useCases,
  className = ""
}) => {
  return (
    <div className={`mb-12 ${className}`}>
      {title && <h3 className="text-xl md:text-2xl font-semibold text-secondary-900 mb-6 text-center">{title}</h3>}
      
      <div className="space-y-6">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-50 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-lg">{index + 1}</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">Challenge</h4>
                <p className="mb-4">{useCase.challenge}</p>
                <h4 className="text-lg font-semibold text-primary mb-2">DG FutureTech Solution</h4>
                <p>{useCase.solution}</p>
                {useCase.additionalInfo && (
                  <>
                    <h4 className="text-lg font-semibold text-primary mb-2">Additional Information</h4>
                    <p>{useCase.additionalInfo}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCasesComponent; 