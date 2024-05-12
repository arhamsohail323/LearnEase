import React from 'react'
import InvoicesDatatable from './Datatable'
import { useNavigate } from 'react-router'

const Invoices = () => {
  const navigate=useNavigate()
  return (
    <div div className='m-5 p-5'>
    <div className='my-5 rounded text-2xl font-bold'>Invoices</div>
    <div className='my-5 rounded text-lg text-end'><button className='border-2 py-1 rounded-md  px-3 hover:bg-PrimaryColor hover:text-white  border-PrimaryColor text-PrimaryColor' onClick={()=>navigate('/invoices/addinvoice')}>add Invoice</button></div>
    <div className='my-5'>
    <InvoicesDatatable/>  
    </div>
    </div>
  )
}

export default Invoices