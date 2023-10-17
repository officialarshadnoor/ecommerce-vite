import {LiaShippingFastSolid,LiaMoneyBillAltSolid,LiaGiftSolid} from 'react-icons/lia';
import FeatureCard from './FeatureCard';

import {FiPhoneCall} from 'react-icons/fi';

const data = [
    {
        title:"Free Shipping",
        icon:<LiaShippingFastSolid/>
    },
    {
        title:"Best Price Guarantee",
        icon:<LiaMoneyBillAltSolid/>
    },
    {
        title:"Free Curbside Pickup",
        icon:<LiaGiftSolid/>
    },
    {
        title:"Support 24/7",
        icon:<FiPhoneCall/>
    },
]

const FeatureSection = () => {
  return (
    <div className="container pt-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
{
    data.map( (el) => (
        <FeatureCard key={el.title}
        title={el.title}
        icon={el.icon}
        />
    ))
}
        </div>
    </div>
  )
}

export default FeatureSection