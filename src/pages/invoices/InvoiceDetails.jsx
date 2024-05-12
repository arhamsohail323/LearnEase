import React from 'react'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router'
const InvoiceDetails = () => {
    const navigate=useNavigate()
  return (
    <div  className='m-5 p-10 bg-gray-50 rounded-2xl '>
    <div className=' rounded flex justify-between items-center '>
        <div className='flex'>
        <button className='group' onClick={()=>navigate(-1)}>
        <svg class="w-6 h-6 group-hover:text-PrimaryColor text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
  </svg>
        </button><h1 className='text-2xl ml-2'>
        Invoice Details
        </h1>
        </div>
      

    <button className='py-2 px-5 border-2 border-transparent my-5 mr-2 bg-SecondaryColor w-50 rounded-lg text-white hover:bg-white hover:border-2 hover:border-SecondaryColor hover:text-SecondaryColor' onClick={() => window.print()}>Print</button>

        </div>  
    <div id='invoice-details' className='my-5 mx-5'>
        <div className="flex justify-between border-b-2 border-dashed ">
            <div className='flex flex-col'>
                <img className='w-32     mb-2' src={logo} alt="" />
                <div className='  my-2 '>
                <h1 className='text-lg text-gray-400'>Address</h1>
                <h1 className='w-2/3 font-semibold' >999 Cherry St, Mountainside, State, 01234</h1>
                <h1 className='font-semibold'>zip: <span>64350</span></h1>
                </div>
               
            </div>
            <div className=''>
                <div className='flex flex-col my-2 justify-end'>
                    <h1 className='text-base text-gray-400'>Invoice: <span className='text-gray-900'># ACD123Z</span></h1>
                    <h1 className='text-base text-gray-400'>Email: <span className='text-gray-900'>furqan31304@gmail.com</span></h1>
                    <h1 className='text-base text-gray-400'>Phone: <span className='text-gray-900'>+92 303 3899077</span></h1>
                    <h1 className='text-base text-gray-400'>Web: <span className='text-gray-900'>www.invoicex.com</span></h1>
                </div>
               
                
            </div>
        </div>
        <div className='flex flex-row my-5 justify-between'>
            <div className=''>
                <h1 className='text-2xl'>
                    Invoice
                </h1>
                <h1 className='text-gray-400 my-5'>Web Application design & developement</h1>
                <h1 className=' w-1/2 bg-green-100 my-2 border-2 text-center text-green-500 font-semibold border-green-500 py-1 px-2 rounded'>Paid</h1>
              

            </div>
            <div className='flex justify-between'>

                    <h1 className='mx-5 text-gray-400'> Data issued: <span className='text-gray-900 font-semibold'>12/10/2023</span></h1>
                 
                    <h1 className='mx-5 text-gray-400' >  Data issued: <span className='text-gray-900 font-semibold'>12/10/2023</span></h1>
                
              

            </div>

        </div>
        <div className='flex flex-row my-5 justify-between'>
            <div className='ml-10 '>
                <h1 className='text-2xl font-semibold text-gray-500 '>
                    From
                </h1>
                <div className='my-2'>
                <h1 className='text-xl font-semibold'>Muhammad Furqan</h1>
                <p className='mt-1'>999 Cherry St, Mountainside, State, 01234</p>
                <p className='mt-1'>furqan31304@gmail.com</p>
                <p className='mt-1'>+92-303-3899077</p>
                </div>
               
            </div>
            <div className='mr-20 '>
                <h1 className='text-2xl font-semibold text-gray-500 '>
                   Bill to
                </h1>
                <div className='my-2'>
                <h1 className='text-xl font-semibold'>Muhammad Shahzaib</h1>
                <p className='mt-1'>999 Cherry St, Mountainside, State, 01234</p>
                <p className='mt-1'>furqan31304@gmail.com</p>
                <p className='mt-1'>+92-303-3899077</p>
                </div>
               
            </div>
        </div>

        <div className='my-5 w-full'>
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
    <tr className='border-b-2 '>
        <td className='pl-2 py-2 '>
            Wire Framing
        </td>
        <td className='pl-2 py-2 '>
            Create Wire Frames for web application
        </td>
        <td className='pl-2 py-2 '>
            10
        </td>
         <td className='pl-2 py-2  '>
         $100
         </td>
    </tr> 
    <tr className='border-b-2 '>
    <td className='pl-2 py-2 '>
        User Interface Design
    </td>
    <td className='pl-2 py-2 '>
        Design UI elements for mobile app
    </td>
    <td className='pl-2 py-2 '>
        8
    </td>
    <td className='pl-2 py-2  '>
        $120
    </td>
</tr>

<tr className='border-b-2 '>
    <td className='pl-2 py-2 '>
        Backend Development
    </td>
    <td className='pl-2 py-2 '>
        Develop RESTful APIs
    </td>
    <td className='pl-2 py-2 '>
        20
    </td>
    <td className='pl-2 py-2  '>
        $250
    </td>
</tr>

<tr className='border-b-2 '>
    <td className='pl-2 py-2 '>
        Database Setup
    </td>
    <td className='pl-2 py-2 '>
        Configure database schema
    </td>
    <td className='pl-2 py-2 '>
        5
    </td>
    <td className='pl-2 py-2  '>
        $80
    </td>
</tr>


    
  </tbody>
 
</table>

        </div>

        <div className='my-5 w-full flex justify-end'>
            <div>
            <div className='flex my-2 items-center justify-end text-lg'>
                    <label htmlFor="Web" className='text-gray-500' >Subtotal: </label>
                    <h1 className='font-semibold ml-2'>$650</h1>
                </div>
                <div className='flex my-2 items-center justify-end text-lg'>
                    <label htmlFor="Web" className='text-gray-500' >Tax </label>
                    <h1 className='font-semibold ml-2'>10%</h1>
                </div> 
                <div className='flex my-2 items-center justify-end text-lg'>
                    <label htmlFor="Web" className='text-gray-500' >Total: </label>
                    <h1 className='font-semibold ml-2'>$715</h1>
                </div>
                
            </div>

        </div>
      
      
    </div>
    </div>
  )
}

export default InvoiceDetails