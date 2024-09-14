import React, { useState } from 'react';
import CompanyNameForm from './CompanyNameForm'; // Form for entering company name
import ExistingCompaniesList from './ExistingCompaniesList'; // List of existing companies

const CompanyOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showCompanyNameForm, setShowCompanyNameForm] = useState(false);
  const [showExistingCompaniesList, setShowExistingCompaniesList] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleContinue = () => {
    if (selectedOption === 'I have my own company I want to manage') {
      setShowCompanyNameForm(true); // Show the company name form
    } else if (selectedOption === 'I want to join some existing company') {
      setShowExistingCompaniesList(true); // Show the existing companies list
    } else {
      alert('Please select an option before continuing.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {!showCompanyNameForm && !showExistingCompaniesList ? (
        <>
          <h1 className="text-2xl font-semibold mb-6">Select an Option</h1>
          <div className="w-full max-w-md">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="ownCompany"
                value="I have my own company I want to manage"
                checked={selectedOption === 'I have my own company I want to manage'}
                onChange={handleOptionChange}
                className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="ownCompany" className="text-gray-700">
                I have my own company I want to manage
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="joinCompany"
                value="I want to join some existing company"
                checked={selectedOption === 'I want to join some existing company'}
                onChange={handleOptionChange}
                className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="joinCompany" className="text-gray-700">
                I want to join some existing company
              </label>
            </div>
            <button
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </>
      ) : showCompanyNameForm ? (
        <CompanyNameForm />
      ) : (
        <ExistingCompaniesList />
      )}
    </div>
  );
};

export default CompanyOptions;
