// import React from 'react'
// import ClientDatatable from './Datatable'
// import { useNavigate } from 'react-router'

// const BlogPost = () => {
//   const navigate=useNavigate()
//   return (
//     <div div className='m-5 p-5'>
//     <div className='my-5 rounded text-2xl font-bold'>BlogPost</div>
//     <div className='my-5 rounded text-lg text-end'><button className='border-2 py-1 rounded-md  px-3 hover:bg-PrimaryColor hover:text-white  border-PrimaryColor text-PrimaryColor' onClick={()=>navigate('/BlogPost/addclient')}>add Customer</button></div>
//     <div className='my-5'>
//     <ClientDatatable/>  
//     </div>
//     </div>
//   )
// }

// export default BlogPost


import React from 'react';
import { useNavigate } from 'react-router';
import BlogCard from './BlogCard';

const BlogPost = () => {
  const navigate = useNavigate();
  
  return (
    <div className='m-5 p-5'>
      <div className='flex justify-between items-center mb-5 pb-3 border-b-2'>
        <div className=' text-2xl font-bold bg-PrimaryColor text-black rounded-full py-1 px-20'>Blog</div>
        <button 
          className='border-2 py-1 rounded-md px-3 hover:bg-PrimaryColor hover:text-black border-PrimaryColor text-PrimaryColor'
          onClick={() => navigate('/blog/blogpost')}
        >
          Add Blog
        </button>
      </div>
      <div className='my-5'>
        <BlogCard/>  
      </div>
    </div>
  );
};

export default BlogPost;
