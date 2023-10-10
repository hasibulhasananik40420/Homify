/* eslint-disable react/prop-types */

import { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';

const FaqSection = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      {faqData.map((faq, index) => (
        <div key={faq._id} className="mb-5">
          <motion.div
            className="bg-[#3E348F] lg:h-[60px] md:h-[60px] h-auto py-1 md:py-0 lg:py-0 2xl:py-0 flex justify-between items-center cursor-pointer px-8"
            onClick={() => toggleQuestion(index)}
            initial={{ backgroundColor: '#3E348F' }}
            animate={{
              backgroundColor: activeIndex === index ? '#F90' : '#3E348F',
              borderBottomLeftRadius: activeIndex === index ? 0 : '15px',
              borderBottomRightRadius: activeIndex === index ? 0 : '15px',
            }}
            whileHover={{ backgroundColor: '#5650A2' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              borderTop: '1px solid #3E348F',
              borderLeft: '1px solid #3E348F',
              borderRight: '1px solid #3E348F',
              boxShadow: '0px 4px 4px 0px rgba(221, 220, 220, 0.30)',
            }}
          >
            <h3 className="text-white text-[20px] font-Lato font-normal">{faq.question}</h3>
            <RiAddFill
              className={`w-6 h-6 text-white transition-transform ${
                activeIndex === index ? 'transform rotate-45' : ''
              }`}
            />
          </motion.div>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                key="answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  borderTop: '1px solid #878383',
                  borderBottom: '1px solid #878383',
                  background: '#FFF',
                }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="mt-2 text-[16px] text-[#141414] font-Lato font-normal leading-8 px-8"
                >
                  {faq.answar}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;



