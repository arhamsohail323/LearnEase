import React from 'react'
import DataTable from 'react-data-table-component';
import DummyData from '../../components/DummyData';
import avatar from '../../assets/images/avatar.png'
import { useNavigate } from 'react-router';
const InvoicesDatatable = () => {
    const navigate=useNavigate();
    const columns = [
        {
            name: 'Number',
            selector: row => row.id,
        },
        {
            name: 'Date',
            selector: row => row.date,
        },

        {
            name: 'Customer',
            selector: row => <div className='flex gap-2 items-center'><img className='w-10' src={avatar} alt="" /> <h1 className=''>{row.name}</h1></div>,
        },
        {
            name: 'Status',
            selector: row => <div className={`px-2 text-center w-24 ${row.status==="paid"&&"border-green-600 text-green-600"||"border-red-600 text-red-600"} py-1 border-2 rounded  font-semibold`}> {row.status}</div> 
        },
        {
            name: 'Amount',
            selector: row => row.amount,
        },
        {
            name: 'Action',
            selector:row=> <button className='p-1 border-2 rounded-md hover:border-PrimaryColor group' onClick={()=>navigate('/invoices/invoicedetails')}><svg class="w-6 h-6 text-gray-300 group-hover:text-PrimaryColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h0m6 0h0m6 0h0"/>
          </svg></button>
        }
    ];
  return (  
 <DataTable
        
			columns={columns}
			data={DummyData}
            pagination
		/>
  )
}
export default InvoicesDatatable

