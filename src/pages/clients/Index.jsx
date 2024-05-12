// import React from 'react'
// import ClientDatatable from './Datatable'
// import { useNavigate } from 'react-router'

// const Clients = () => {
//   const navigate=useNavigate()
//   return (
//     <div div className='m-5 p-5'>
//     <div className='my-5 rounded text-2xl font-bold'>Clients</div>
//     <div className='my-5 rounded text-lg text-end'><button className='border-2 py-1 rounded-md  px-3 hover:bg-PrimaryColor hover:text-white  border-PrimaryColor text-PrimaryColor' onClick={()=>navigate('/clients/addclient')}>add Customer</button></div>
//     <div className='my-5'>
//     <ClientDatatable/>  
//     </div>
//     </div>
//   )
// }

// export default Clients


import React from 'react';
import ClientDatatable from './Datatable';
import { useNavigate } from 'react-router';

const Clients = () => {
  const navigate = useNavigate();
  
  return (
    <div className='m-5 p-5'>
      <div className='flex justify-between items-center mb-5 pb-3 border-b-2'>
        <div className='rounded text-2xl font-bold'>Career Consultant</div>
        <button 
          className='border-2 py-1 rounded-md px-3 hover:bg-PrimaryColor hover:text-white border-PrimaryColor text-PrimaryColor'
          onClick={() => navigate('/clients/addclient')}
        >
          Add Consultant
        </button>
      </div>
      <div className='my-5'>
        <ClientDatatable/>  
      </div>
    </div>
  );
};

export default Clients;
