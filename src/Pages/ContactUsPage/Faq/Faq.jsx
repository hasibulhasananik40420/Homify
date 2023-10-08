import FaqSection from "./FaqSection ";
import faqImage from "../../../assets/Contact-us-image/faq.png";
import { Zoom } from "react-reveal";
const Faq = () => {
  const faqData = [
    {
      _id: 1,
      question: "  Why do I need a real estate agent?",
      answar:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod facere maxime placeat possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluptates",
    },
    {
      _id: 2,
      question: "How much commission do you charge?",
      answar:
        "EASY eran is absolutely free to join and we intend on keeping it that way gendi optio cumque nihil impedit quo minus id quod facere maxime placeat possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus officiis debitis aut rerum necessitatibus",
    },
    {
      _id: 3,
      question: "How do I know what I can spend on a home purchase? ",
      answar:
        "You’ll receive your payment instantly once you request your earnings and have set your payment method. If we have any difficulties with your payment we will email you with the email you’ve provided to us. difficulties with your payment we will email you with the email you’ve provided to us. ",
    },
    {
      _id: 4,
      question: "How do I know what to list my house for?",
      answar:
        "Advertisers pay us to get traffic that you help us acquire by sharing with your friends & families. Revenue generated from us goes back to our affiliates. We love and appreciate our affiliates you help us acquire by sharing with your friends & families. Revenue generated from us goes back to our affiliates. We love and appreciate our affiliates.",
    },
    {
      _id: 5,
      question: "What is the selling/buying process like?",
      answar:
        "Our address can be found on the contact us page. We’re a company located out of the Netherlands.We’re a company located out of the Netherlands.We’re a company located out of the Netherlands.We’re a company located out of the Netherlands.",
    },
    {
      _id: 6,
      question: "What is the selling/buying process like?",
      answar:
        "Advertisers pay EASY EARN to reach users like you. Revenue generated from us goes back to our members. We love and appreciate our members so sign up now.evenue generated from us goes back to our members. We love and appreciate our members so sign up now.",
    },
    {
      _id: 7,
      question: "What is the selling/buying process like?",
      answar:
        "Have suggestions on how we could help you monetize your social media account better with new tools? Contact your manager and suggest a feature you believe would help. you monetize your social media account better with new tools? Contact your manager and suggest a feature you believe would help.",
    },
  ];

  return (
    <div className="2xl:py-32 lg:py-[100px] md:py-[80px] py-16">
      <h2 className="text-[#3E348F] lg:text-[56px] md:text-[56px] text-[32px] font-Teko font-bold mb-20 lg:w-[790px] w-full">
        Frequently Asked Question (F.A.Q)
      </h2>
      <div className=" lg:flex gap-20">
        <div className=" overflow-hidden lg:w-[663px] w-full">
          <div className="">
            <FaqSection faqData={faqData} />
          </div>
        </div>
        <Zoom>
          <div className="lg:w-[653px] lg:h-[593px] md:w-full w-full mt-10 md:mt-10 lg:mt-0 ">
            <img
              className="lg:w-[653px] lg:h-[593px] md:w-[600px] md:mx-auto w-full "
              src={faqImage}
              alt=""
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Faq;
