import React from 'react';
import { DashboardIcon,PromoCodes,ActiveUsers,InactiveUsers } from '../../assets';
import FeatureCard from './FeatureCard';

function Features() {
  const features=[
    {
      id:1,
      name:"Total Users",
      icon:DashboardIcon,
      number:635,
      percentage:2.17
    },
     {
       id:2,
      name:"Active Users",
      icon:ActiveUsers,
      number:123,
      percentage:4.399
    },
     {
      id:3,
      name:"Inactive Users",
      icon:InactiveUsers,
      number:23,
      percentage:-7.9
    },
     {
      id:4,
      name:"Expired Promo User",
      icon:PromoCodes,
      number:23,
      percentage:-7.9
    }
  ]
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-2  grid-cols-1 gap-4'>
      {features.map((feature)=>{
        return (<FeatureCard key={feature.id} feature={feature}/>);
      })}

      
    </div>
  )
}

export default Features;
