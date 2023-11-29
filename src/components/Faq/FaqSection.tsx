import React, { useState } from 'react';
import ArrowDown from './icons/ArrowDown';
import Heading from './Heading';
import { faqItems } from './data';

const FaqSection = () => {
  const [clickHeading, setClickHeading] = useState<boolean[]>([]);

  const toggleClick = (index: number) => {
    const updatedClickHeading = [...clickHeading];
    updatedClickHeading[index] = !clickHeading[index];
    setClickHeading(updatedClickHeading);
  };

  return (
    <>
      {faqItems.map((item, index) => (
        <div
          onClick={() => toggleClick(index)}
          key={index}
          className={`border-b border-gray-300 py-6 flex flex-col cursor-pointer relative`}
        >
          <div className="flex items-center justify-between gap-x-2">
            <Heading text={item.question} />
            <ArrowDown />
          </div>
          <p className={`text-xs md:text-sm lg:text-base transition-all duration-300 ${clickHeading[index] ? 'pt-6 static visible' : 'invisible absolute opacity-0'
            }`}>
            {item.answer}
          </p>
        </div>
      ))}
    </>
  );
};

export default FaqSection;
