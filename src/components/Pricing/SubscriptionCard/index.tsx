import React from 'react'
import RequirementBox from '../RequirementBox'
import Button from '../../Common/Button'
import { ROUTES } from '../../../constant/route';
import { useNavigate } from 'react-router';

interface Requirement {
  text: string;
  checkBg: string;
}

interface propsTypes {
  subscriptionsImg: string;
  levels: string;
  levelsTextColor: string;
  price: string;
  priceTextColor: string;
  startedTextColor: string;
  subscriptionsDivBackground: string;
  diamondBackground: string;
  buttonStyling: string;
  requirementTextColor: string;
  requirements: Requirement[];
}

const SubscriptionCard = ({
  subscriptionsImg,
  levels,
  levelsTextColor,
  price,
  priceTextColor,
  startedTextColor,
  subscriptionsDivBackground,
  diamondBackground,
  buttonStyling,
  requirementTextColor,
  requirements,
}: propsTypes) => {
  const navigate = useNavigate()
  return (
    <div className={`w-full rounded-3xl relative overflow-hidden pb-16 lg:pb-5 ${subscriptionsDivBackground} flex flex-col justify-between`}>
      <div className={`absolute right-0 -translate-y-5 translate-x-5 h-32 w-32 md:h-36 md:w-36 rounded-full flex items-center justify-center ${diamondBackground}`}>
        <img className="w-3/6" src={subscriptionsImg} alt="Subscription" />
      </div>
      <div className="pl-5 xl:pl-10 pt-16 mb-12 lg:mb-8">
        <h1 className={`font-bold text-3xl mb-9 ${levelsTextColor}`}>{levels}</h1>
        <div className="flex flex-col gap-7">
          <h2 className={`text-4xl font-bold ${priceTextColor}`}>{price} <span className="text-xl font-medium">/mo</span></h2>
          <h3 className={`font-bold text-xl text-mainTextColor ${startedTextColor}`}>Everything in starter</h3>
          <div className="flex flex-col gap-4">
            {requirements.map((requirement, index) => (
              <RequirementBox
                key={index}
                textColor={requirementTextColor}
                text={requirement.text}
                checkBg={requirement.checkBg}
              />
            ))}
          </div>
        </div>
      </div>
      <div onClick={() => navigate(ROUTES.SIGN_UP)} className="w-full flex justify-center px-5">
        <Button padding='py-3 lg:py-4 px-9' className={`${buttonStyling} text-base lg:text-xl w-full lg:w-auto flex justify-center`} text='Get Started' icon="" />
      </div>
    </div>
  )
}

export default SubscriptionCard
