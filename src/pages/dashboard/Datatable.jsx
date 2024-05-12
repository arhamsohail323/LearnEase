import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import DummyData from '../../components/DummyData';
import avatar from '../../assets/images/avatar.png'
const DashDatatable = () => {
  const columns = [
    {
      name: 'User Id',
      selector: row => row.id,
    },
    {
      name: 'Date',
      selector: row => row.date,
    },

    {
      name: 'Career Consultant',
      selector: row => <div className='flex gap-2 items-center'><img className='w-10' src={avatar} alt="" /> <h1 className=''>{row.name}</h1></div>,
    },
    {
      name: 'Status',
      selector: row => <div className={`px-2 text-center w-24 ${row.status === "Success" && "border-green-600 text-green-600" || "border-red-600 text-red-600"} py-1 border-2 rounded  font-semibold`}> {row.status}</div>
    },
    {
      name: 'Time',
      selector: row => row.amount,
    },
    {
      name: 'Action',
      selector: row => <> <button className='p-1 border-2 rounded-md hover:border-PrimaryColor group me-5'>Edit</button><button className='p-1 border-2 rounded-md text-white bg-PrimaryColor group'>Delete</button> </>
    }
  ];

  return (
    <>
    <p className='font-bold ms-3 bg-PrimaryColor w-36 text-center text-white py-2  rounded-full '>Meeting Details</p>
    <DataTable
      // title="Meeting Details" 
      columns={columns}
      data={DummyData}
      pagination
    />
    </>
  )
}
export default DashDatatable
