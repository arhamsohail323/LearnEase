import React, { useState } from 'react';
import ClientDatatable from '../clients/Datatable';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import SearchInput from 'react-search-input';

const Assignment = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { value: 'BSCS', label: 'BSCS' },
    { value: 'BS Zoology', label: 'BS Zoology' },
    // Add more categories as needed
  ];

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className='m-5 p-5'>
      <div className='flex justify-between items-center mb-5 pb-3 border-b-2'>
        <div className='rounded text-2xl font-bold'>Assignments Outline</div>
        <div className='flex items-center'>
          <div className='relative mr-3'>
            <SearchInput
              className='py-2 pl-8 pr-3 outline-none rounded-full border-2 border-gray-300 focus:outline-none focus:border-PrimaryColor'
              onChange={handleSearchChange}
              placeholder='Search...'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 19l-6-6M5 12h14'
              />
            </svg>
          </div>
          <Select
            className='w-48'
            value={selectedCategory}
            onChange={handleCategoryChange}
            options={categories}
            placeholder='Select Category'
          />
          <button 
            className='ml-3 border-2 py-1 rounded-md px-3 hover:bg-PrimaryColor hover:text-white border-PrimaryColor text-PrimaryColor'
            onClick={() => navigate('/resources/assignments/addassignments')}
          >
            Add Assignment
          </button>
        </div>
      </div>
      <div className='my-5'>
        <ClientDatatable searchTerm={searchTerm} selectedCategory={selectedCategory} />  
      </div>
    </div>
  );
};

export default Assignment;
