import React from 'react'
import logo from  '../../assets/images/logo.png'
import { useNavigate } from 'react-router'
const AddInvoice = () => {
    const navigate=useNavigate();
  return (
    <div div className='m-5 p-5 bg-gray-50 rounded-2xl '>
    <div className='my-5 rounded flex justify-start items-center '>
        <button className='group' onClick={()=>navigate(-1)}>
        <svg class="w-6 h-6 group-hover:text-PrimaryColor text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
  </svg>
        </button><h1 className='text-2xl ml-2'>
        New Invoice
        </h1>
        </div>  
    <div className='my-5'>
        <div className="flex justify-between border-b-2 border-dashed p-5">
            <div className='flex flex-col'>
                <img className='w-72 mb-2' src={logo} alt="" />
                <div className='flex justify-end my-2 items-center'>
                <label htmlFor="">Address</label>
                <input className='ring-1 w-52  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='i.e ab 123, Sadiqabad, Pakistan' type="text" name='address' />
                </div>
                <div className='flex justify-end items-center'>
                <label htmlFor="zip_code">Zip Code</label>
                <input className='ring-1 w-52  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='i.e 64350' type="text" name='zip_code' />
                </div>
            </div>
            <div className=''>
                <div className='flex my-2 justify-end'>
                    <label htmlFor="invoice_no">Invoice:</label>
                    <input className='ring-1 w-80 shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' type="text" name="invoice_no" id="invoice_no" placeholder='#0000' />
                </div>
                <div className='flex my-2 justify-end'>
                    <label htmlFor="Email">Email:</label>
                    <input className='ring-1 w-80 shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' type="text" name="Email" id="Email" placeholder='abc@gmail.com' />
                </div>
                <div className='flex my-2 justify-end'>
                    <label htmlFor="Phone">Phone:</label>
                    <input className='ring-1 w-80 shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' type="text" name="Phone" id="Phone" placeholder='+92-303-3899077' />
                </div>
                <div className='flex my-2 items-center justify-end'>
                    <label htmlFor="Web">Web:</label>
                    <input className='ring-1 w-80 shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='www.abc.com' type="text" name="Web" id="Web" />
                </div>
                
            </div>
        </div>
        <div className='flex flex-row my-5 justify-between'>
            <div className=''>
                <h1 className='text-2xl'>
                    Invoice
                </h1>
                <div className='flex justify-end my-5 items-center'>
                <label htmlFor="">Invoice title</label>
                <input className='ring-1 w-52  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='i.e Invoice-X developement' type="text" name='title' />
                </div>
                <div className='flex justify-end my-5 items-center'>
                <label htmlFor="">Invoice Status</label>
                <select id="countries" class="ring-1 w-52 ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2 block  ">
  <option value="paid">paid</option>
  <option value="unpaid">unpaid</option>
</select>
                </div>

            </div>
            <div className='flex justify-between'>
                <div>
                    <label htmlFor=""> Data issued:</label>
                    <input className='ring-1 w-56 ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='www.abc.com' type="date" name="Web" id="Web" />

                    
                </div>
                <div className='mx-5'>
                    <label htmlFor=""> Data due:</label>
                    <input className='ring-1 w-56 ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='www.abc.com' type="date" name="Web" id="Web" />

                </div>
              

            </div>

        </div>
        <div className='flex flex-row my-5 justify-between'>
            <div className='ml-10 '>
                <h1 className='text-2xl font-semibold'>
                    From
                </h1>
                <div className='flex justify-end my-5 items-center'>
                <label htmlFor="">Name</label>
                <input className='ring-1 w-80  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='Muhammad Furqan' type="text" name='name' />
                </div>
                <div className='flex justify-end my-5 items-center'>
                <label htmlFor="">Address</label>
                <input className='ring-1 w-80  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='Sadiqabad' type="text" name='address' />
                </div>
                <div className='flex justify-end my-5 items-center'>
                <label htmlFor="">Email</label>
                <input className='ring-1 w-80  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='abc@gmail.com' type="email" name='email'   />
                </div>
                <div className='flex justify-end my-5 items-center'>
                <label htmlFor="">phone</label>
                <input className='ring-1 w-80  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='+92-303-3899077' type="tel" name='title' />
                </div>
            </div>
            <div className='mr-5 '>
                <h1 className='text-2xl font-semibold'>
                   Bill To
                </h1>
                <div className='flex justify-end my-5 items-center'>
                <label htmlFor="">Name</label>
                <input className='ring-1 w-80  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='Muhammad Furqan' type="text" name='name' />
                </div>
                <div className='flex justify-end my-5 items-center'>
                <label htmlFor="">Address</label>
                <input className='ring-1 w-80  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='Sadiqabad' type="text" name='address' />
                </div>
                <div className='flex justify-end my-5 items-center'>
                <label htmlFor="">Email</label>
                <input className='ring-1 w-80  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='abc@gmail.com' type="email" name='email'   />
                </div>
                <div className='flex justify-end my-5 items-center'>
                <label htmlFor="">phone</label>
                <input className='ring-1 w-80  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='+92-303-3899077' type="tel" name='title' />
                </div>
            </div>
        </div>

        <div className='my-5 w-full border-b-2 border-dashed'>
        <table className=" w-full">
  <thead className='bg-SecondaryColor text-white'>
    <tr className='text-left'>
      <th className='pl-2'>Service</th>
      <th className='pl-2'  >Description</th>
      <th className='pl-2'>Qty</th>
      <th className='pl-2'>Price</th>
    </tr>
  </thead>
  <tbody className=''>
    <tr className=''>
    <td className='w-[30%] px-2'>
        <input className='mt-2 ring-1 w-full shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ' placeholder='i.e UI Design' type="text" name="Web" id="Web" />
</td>
<td  className='w-[30%] px-2' >
        <input className='mt-2 ring-1 w-full shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1' placeholder='i.e E-Wallet Screens' type="text" name="desc" id="desc" />
</td>
<td className='w-[10%] px-2' >
        <input className='mt-2 ring-1 w-full shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1' placeholder='0' type="number" name="qty" id="qty" />
</td>
<td  className='w-[30%] px-2'>
        <input className='mt-2 ring-1 w-full shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1' placeholder='$0' type="number" name="price" id="price" />
</td>
    </tr>   
  </tbody>
 
</table>
<div className='w-full flex justify-end my-5 '>
    <button className='py-2 px-5 border-2 border-transparent bg-PrimaryColor w-50 rounded-lg text-white hover:bg-white hover:border-2 hover:border-PrimaryColor hover:text-PrimaryColor'> Add More</button>
  </div>
        </div>

        <div className='my-5 w-full flex justify-between'>
            <div>
            <h1 className='text-gray-400'>
                All payments are in USD, All Fee  is upto buyer
            </h1>
    <button className='py-2 px-5 border-2 border-transparent my-5 mr-2 bg-SecondaryColor w-50 rounded-lg text-white hover:bg-white hover:border-2 hover:border-SecondaryColor hover:text-SecondaryColor'>Print</button>
    <button className='py-2 px-5 border-2 border-transparent bg-PrimaryColor w-50 rounded-lg text-white hover:bg-white hover:border-2 hover:border-PrimaryColor hover:text-PrimaryColor'>Save</button>

            
            </div>
            
            <div>
            <div className='flex my-2 items-center justify-end text-lg'>
                    <label htmlFor="Web" className='text-gray-500' >Subtotal: </label>
                    <h1 className='font-semibold ml-2'>$0</h1>
                </div>
                <div className='flex my-2 items-center justify-end text-lg  '>
                    <label htmlFor="Web" className='text-gray-500'>Tax:</label>
                    <input className='ring-1 w-14 shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 ml-2' placeholder='10%' type="text" name="Web" id="Web" />
                </div> 
                <div className='flex my-2 items-center justify-end text-lg'>
                    <label htmlFor="Web" className='text-gray-500' >Total: </label>
                    <h1 className='font-semibold ml-2'>$0</h1>
                </div>
                
            </div>

        </div>
      
      
    </div>
    </div>
  )
}

export default AddInvoice