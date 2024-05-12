import React from 'react'
import DashCard from '../../components/DashCard'
import DashBarChart from '../../components/BarChart'
import DashDatatable from './Datatable'
const Dashboard = () => {
  return (
    <div div className='m-5 p-5'>
      <div className='my-5 rounded text-2xl font-bold bg-PrimaryColor text-white ps-2 py-1 w-36 ' style={{cursor:'pointer'}}>Dashboard</div>
      <div className='flex w-full gap-4'>
        <div className='card grid grid-flow-row  w-1/2 gap-3'>
          <div className='flex gap-2 w-full'>
            <DashCard color="#72d4ad" label="All Consultant"  value="10" />
            <DashCard color="#587ad9" label="Active User"  value="20" />

          </div>
          <div className='flex gap-2 w-full'>
            <DashCard color="#fd6b69" label="Teachers"  value="50" />
            <DashCard color="#fa69fd" label="Course"  value="25" />
          </div>
        </div>
        <div className=' bg-cardbg  w-1/2 rounded-2xl bottom-0'>
          {/* <h1>Weak to Weak Performance</h1> */}
          <DashBarChart />
        </div>
      </div>
      <div className='my-5'>
        <DashDatatable />
      </div>
    </div>

  )
}

export default Dashboard