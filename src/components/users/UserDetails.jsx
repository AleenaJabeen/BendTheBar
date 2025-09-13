import React from 'react'
import MealPlan from './MealPlan'
import WorkoutPlan from './WorkoutPlan'
import ProgressChart from './ProgressChart'
import ActivityChart from './ActivityChart'
import MonthlyProgress from './MonthlyProgress'
import UserProfile from './UserProfile'

function UserDetails({user}) {
  return (
    <>
          <h2 className='w-full font-[Poppins] text-[#000000] text-2xl font-semibold mb-2'>User Details</h2>

    <div className='w-full flex xl:flex-row flex-col items-end gap-2'>
      <div className='xl:w-[60%] w-full'>
      <UserProfile user={user}/>
      <MealPlan/>
      <WorkoutPlan/>
      </div>
      <div className='w-full xl:w-[38%]'>
      <ProgressChart/>
      <ActivityChart/>
      <MonthlyProgress progress={user.progress}/>
      </div>
    </div>
    </>
  )
}

export default UserDetails
