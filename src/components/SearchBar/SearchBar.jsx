import { Tab } from "@headlessui/react";
import { useState } from "react";
import SellTab from "./SellTab";
import BuyTab from "./BuyTab";

const SearchBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <div className="mt-16">
        <div className="flex gap-4 justify-center">
          <Tab.List>
            {["Buy", "Sell"].map((tabText, index) => (
              <Tab key={index}>
                <button
                  className={`${
                    selectedIndex === index
                      ? "e text-black bg-white"
                      : " bg-[#3E348F] text-white"
                  }  text-[20px] font-Lato font-medium leading-8 tracking-[2px] uppercase w-[186px] h-[70px]`}
                >
                  {tabText}
                </button>
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <BuyTab/>
          </Tab.Panel>
          <Tab.Panel>
            <SellTab/>
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default SearchBar;
