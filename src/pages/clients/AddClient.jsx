import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDropzone } from 'react-dropzone';

const AddClient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    twitter: '',
    linkedin: '',
    fb: '',
    image: null,
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      formDataToSend.append('name', formData.name);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('image', formData.image);
      formDataToSend.append('description', formData.description);

      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      await axios.post('YOUR_API_ENDPOINT', formDataToSend);

      toast.success('Client added successfully');
      navigate(-1); // Navigate back to the previous page after successful submission
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to add client. Please try again.');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: handleImageDrop,
  });

  return (
    <div className='m-5 p-5 bg-gray-50 rounded-2xl'>
      <div className='my-5 rounded flex justify-start items-center'>
        <button className='group' onClick={() => navigate(-1)}>
          Back
        </button>
        {/* <h1 className='text-2xl ml-2'>New Client</h1> */}
      </div>
      <div className='my-5'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='name'>Career Consultant Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='ring-1 w-full shadow ring-gray-200 rounded-lg focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-4 mt-2'
                placeholder='Muhammad usman'
                required
              />
            </div>
            <div>
              <label htmlFor='address'>Address</label>
              <input
                type='text'
                name='address'
                value={formData.address}
                onChange={handleChange}
                className='ring-1 w-full shadow ring-gray-200 rounded-lg focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-4 mt-2'
                placeholder='Sadiqabad'
                required
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='ring-1 w-full shadow ring-gray-200 rounded-lg focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-4 mt-2'
                placeholder='abc@gmail.com'
                required
              />
            </div>
            <div>
              <label htmlFor='phone'>Phone</label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='ring-1 w-full shadow ring-gray-200 rounded-lg focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-4 mt-2'
                placeholder='+92-303-3899077'
                required
              />
            </div>


            <div>
              <label htmlFor='linkedin'>LinkedIn Link</label>
              <input
                type='text'
                name='linkedin'
                value={formData.linkedin}
                onChange={handleChange}
                className='ring-1 w-full shadow ring-gray-200 rounded-lg focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-4 mt-2'
                placeholder='Enter LinkedIn Link'
                required
              />
            </div>

            
            <div>
              <label htmlFor='twitter'>Twitter</label>
              <input
                type='text'
                name='twitter'
                value={formData.twitter}
                onChange={handleChange}
                className='ring-1 w-full shadow ring-gray-200 rounded-lg focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-4 mt-2'
                placeholder='Enter Twitter Link'
                required
              />
            </div>

            
            <div>
              <label htmlFor='fb'>FaceBook</label>
              <input
                type='text'
                name='fb'
                value={formData.fb}
                onChange={handleChange}
                className='ring-1 w-full shadow ring-gray-200 rounded-lg focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-4 mt-2'
                placeholder='Enter FaceBook Link'
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
          <div className='mt-10 sm:mt-20 flex justify-end'>
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

export default AddClient;
