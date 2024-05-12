import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDropzone } from 'react-dropzone';
import Select from 'react-select';

const AddBooks = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    assignmentTitle: '',
    assignmentDate: '',
    assignmentType: '',
    semester: '',
    image: null,
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, assignmentType: selectedOption });
  };

  const handleImageDrop = (acceptedFiles) => {
    setFormData({ ...formData, image: acceptedFiles[0] });
  };

  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('assignmentTitle', formData.assignmentTitle);
      formDataToSend.append('assignmentDate', formData.assignmentDate);
      formDataToSend.append('assignmentType', formData.assignmentType.value);
      formDataToSend.append('semester', formData.semester);
      formDataToSend.append('image', formData.image);
      formDataToSend.append('description', formData.description);

      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      await axios.post('YOUR_API_ENDPOINT', formDataToSend);

      toast.success('Assignment added successfully');
      navigate(-1); // Navigate back to the previous page after successful submission
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to add assignment. Please try again.');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: handleImageDrop,
  });

  // Options for education fields
  const options = [
    { value: 'BSCS', label: 'BSCS' },
    { value: 'BS Zoology', label: 'BS Zoology' },
    // Add more options as needed
  ];

  return (
    <div className='m-5 p-5 bg-gray-50 rounded-2xl'>
      <div className='my-5 rounded flex justify-start items-center'>
        <button className='group' onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className='my-5'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='assignmentTitle'>Book Title</label>
              <input
                type='text'
                name='assignmentTitle'
                value={formData.assignmentTitle}
                onChange={handleChange}
                className='ring-1 w-full shadow ring-gray-200 rounded-lg focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-4 mt-2'
                placeholder='Assignment Title'
                required
              />
            </div>
            <div>
              <label htmlFor='assignmentDate'>Book Date</label>
              <input
                type='date'
                name='assignmentDate'
                value={formData.assignmentDate}
                onChange={handleChange}
                className='ring-1 w-full shadow ring-gray-200 rounded-lg focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-4 mt-2'
                required
              />
            </div>
            <div>
              <label htmlFor='assignmentType'>Book Type</label>
              <Select
                value={formData.assignmentType}
                onChange={handleSelectChange}
                options={options}
                className='ring-1 w-full shadow ring-gray-200 rounded-lg focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-4 mt-2'
                placeholder='Select Assignment Type'
                required
              />
            </div>
            <div>
              <label htmlFor='semester'>Semester</label>
              <input
                type='text'
                name='semester'
                value={formData.semester}
                onChange={handleChange}
                className='ring-1 w-full shadow ring-gray-200 rounded-lg focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-4 mt-2'
                placeholder='Semester'
                required
              />
            </div>
            <div className='col-span-2'>
              <label htmlFor='image'>Image</label>
              <div
                {...getRootProps()}
                className='dropzone border-dashed border-2 border-gray-300 rounded-lg p-4 cursor-pointer'
              >
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </div>
            <div className='col-span-2'>
              <label htmlFor='description'>Description</label>
              <ReactQuill
                value={formData.description}
                onChange={handleDescriptionChange}
                theme='snow'
                className='w-full h-64'
              />
            </div>
          </div>
          <div className='mt-20 flex justify-end'>
            <button
              type='submit'
              className='py-2 px-16 text-2xl border-2 border-transparent bg-PrimaryColor rounded-lg text-white hover:bg-white hover:border-2 hover:border-PrimaryColor hover:text-PrimaryColor'
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddBooks;
