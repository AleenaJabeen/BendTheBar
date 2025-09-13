import React from 'react'
import SubscriptionPlan from '../components/subscription/SubscriptionPlan'
import Payment from '../components/subscription/Payment'

function Subscription() {
  return (
    <div>
       <h2 className="text-2xl font-semibold text-[#000000] text-nowrap">
         Subscription
        </h2>
        <SubscriptionPlan/>
        <Payment/>
      
    </div>
  )
}

export default Subscription
