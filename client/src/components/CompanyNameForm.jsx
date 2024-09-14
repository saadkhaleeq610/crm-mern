import React, { useState } from 'react';

const CompanyNameForm = () => {
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = () => {
    if (companyName) {
      alert(`Your company name is: ${companyName}`);
      // Handle the submit action here (e.g., save the company name, navigate to the next page)
    } else {
      alert('Please enter the company name.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-6">Enter Your Company Name</h1>
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-gray-700"
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CompanyNameForm;
