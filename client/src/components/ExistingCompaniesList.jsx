import React, { useState } from 'react';

const ExistingCompaniesList = () => {
  const [selectedCompany, setSelectedCompany] = useState('');

  const companies = [
    'Tech Innovators Inc.',
    'Global Solutions Ltd.',
    'Creative Minds Co.',
    'Future Vision Group',
    'NextGen Enterprises'
  ]; // This array should ideally come from an API or database

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  const handleSubmit = () => {
    if (selectedCompany) {
      alert(`You selected: ${selectedCompany}`);
      // Handle the join action here (e.g., send data to backend or navigate to another page)
    } else {
      alert('Please select a company before continuing.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-6">Select a Company to Join</h1>
      <div className="w-full max-w-md">
        {companies.map((company, index) => (
          <div
            key={index}
            className={`p-4 mb-4 border rounded cursor-pointer ${selectedCompany === company ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => handleCompanySelect(company)}
          >
            {company}
          </div>
        ))}
        <button
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          onClick={handleSubmit}
        >
          Join Company
        </button>
      </div>
    </div>
  );
};

export default ExistingCompaniesList;
