import React, { useState } from 'react'
import { add } from '../../assets'
import PlanCard from './PlanCard'
import SubscriptionDialogBox from './SubscriptionDialogBox';

 const subscriptionPlans=[
        {
            id:1,
            name:"Lite Plan",
            monthlyPrice:8.9,
            yearlyPrice:80,
            description:"DISCOUNT"
        },
         {
            id:2,
            name:"Premium Plan",
            monthlyPrice:12.9,
            yearlyPrice:120,
              description:"DISCOUNT"
        },

         {
            id:3,
            name:"Diabetes Prevention Program",
            monthlyPrice:29.9,
            yearlyPrice:180,
              description:"DISCOUNT"
        }

    ]
function SubscriptionPlan() {
    const [subscriptionPlan, setPlan] = useState(subscriptionPlans);
const [dialogOpen, setDialogOpen] = useState(false);
const [editData, setEditData] = useState(null);

const handleDelete = (id) => {
  setPlan(subscriptionPlan.filter((plan) => plan.id !== id));
};
// Add new plan
const handleAdd = () => {
  setEditData(null); // clear form
  setDialogOpen(true);
};

// Edit plan
const handleEdit = (plan) => {
  setEditData(plan); // send data to dialog
  setDialogOpen(true);
};

// Save (works for both add & edit)
const handleSave = (data) => {
  if (editData) {
    // update existing
    setPlan(subscriptionPlan.map((p) => (p.id === editData.id ? { ...p, ...data } : p)));
  } else {
    // add new
    setPlan([...subscriptionPlan, { ...data, id: Date.now() }]);
  }
};

  return (
    <>
    <div className='bg-[#FFFFFF] py-4 px-7 mt-4 shadow-sm shadow-[#00000026] rounded-[10px]'>
         <div className="flex flex-col lg:flex-row justify-between items-start gap-2 mb-4">
        <h2 className="text-xl font-[IBM_Plex_Sans] text-[#050F24] font-medium text-[#000000] text-nowrap">
         Our Subscription Plans
        </h2>
         <button
          onClick={handleAdd}
          className="cusror-pointer flex items-center gap-2 gradient-bg text-[#FFFFFF] cursor-pointer font-medium text-[12.8px] p-2 lg:p-3 rounded-sm"
        >
            <img src={add} alt="Add Icon" />
            
         Add Subscription
        </button>
      </div>
      <div className='flex flex-col gap-3'>
        {subscriptionPlan.map((plan)=>{
            return (<PlanCard key={plan.id} plan={plan} handleDelete={handleDelete} handleEdit={handleEdit}/>)
        })}

      </div>
    </div>
            {dialogOpen && (
  <SubscriptionDialogBox
    onClose={() => setDialogOpen(false)}
    onSave={handleSave}
    initialData={editData}
    mode={editData ? "edit" : "add"}
  />
)}

    </>
    
  )
}

export default SubscriptionPlan
