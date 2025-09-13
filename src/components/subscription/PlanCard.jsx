import React from 'react'
import { editBtn, deleteBtn } from '../../assets'

function PlanCard({ plan, handleDelete, handleEdit }) {
  return (
    <div className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-between items-start lg:items-center bg-[#FFFFFF] shadow-sm shadow-[#00000026] rounded-[10px] lg:h-[80px] h-full py-2 lg:py-0 px-8'>
      
      <h2 className='text-[#050F24] font-semibold w-full lg:w-[20%] lg:text-nowrap'>
        {plan.name}
      </h2>

      <div className='flex flex-row lg:flex-col justify-center items-center gap-2 lg:gap-0 font-[Poppins] font-normal'>
        <h3 className='text-[#050F24] text-sm'>Monthly</h3>
        <h4 className='text-[#6F757E] text-xs'>${plan.monthlyPrice}</h4>
      </div>

      <div className='flex flex-row lg:flex-col justify-center items-center gap-2 lg:gap-0 font-[Poppins] font-normal'>
        <h3 className='text-[#050F24] text-sm'>Yearly</h3>
        <h4 className='text-[#6F757E] text-xs'>${plan.yearlyPrice}</h4>
      </div>

      <div className='flex items-center gap-6'>
        {/* EDIT BUTTON */}
        <img
          src={editBtn}
          alt="Edit Icon"
          className='cursor-pointer'
          onClick={() => handleEdit(plan)}
        />

        {/* DELETE BUTTON */}
        <img
          src={deleteBtn}
          alt="Delete Icon"
          className='cursor-pointer'
          onClick={() => handleDelete(plan.id)}
        />
      </div>
    </div>
  )
}

export default PlanCard
