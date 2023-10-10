import React, { useState } from "react";
import { BiSolidDownArrow, BiSearch } from "react-icons/bi";
import { Listbox } from "@headlessui/react";

const SellTab = () => {
  const locations = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
  ];

  const propertyType = [
    { id: 1, name: "Apartment" },
    { id: 2, name: "House" },
    { id: 3, name: "Condo" },
  ];

  const propertyCategory = [
    { id: 1, name: "Residential" },
    { id: 2, name: "Commercial" },
    { id: 3, name: "Industrial" },
    { id: 4, name: "Land" },
  ];
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [selectedCategory, setSelectedCategory] = useState(propertyCategory[0]);
  const [selectedPropertyType, setSelectedPropertyType] = useState(
    propertyType[0]
  );
  const handleLocationChange = (newLocation) => {
    setSelectedLocation(newLocation);
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handlePropertyTypeChange = (newPropertyType) => {
    setSelectedPropertyType(newPropertyType);
  };

  return (
    <div className="bg-white lg:h-[156px] h-auto 2xl:w-[1440px] lg:w-[1200px] w-full rounded-lg relative ">
      <div className="lg:flex gap-7 items-center 2xl:ml-[84px] lg:ml-[50px] md:ml-0 lg:h-[156px] h-auto">
        {/* Location */}
        <div>
          <h1 className="text-black text-[20px] font-Teko font-medium leading-8 tracking-[2px] uppercase">
            Search Location
          </h1>
          <Listbox
            as="div"
            className="2xl:w-[340px] lg:w-[280px] w-full h-[60px] rounded-lg"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            {({ open }) => (
              <div>
                <Listbox.Button
                  className="2xl:w-[340px] lg:w-[280px] w-full h-[60px] rounded-lg flex justify-between items-center px-[40px] cursor-pointer text-[#263238] text-[14px] font-Lato font-normal leading-8  uppercase"
                  style={{ border: "1px solid rgba(162, 160, 160, 0.60)" }}
                >
                  {selectedLocation.name}
                  <BiSolidDownArrow className={`text-[#375E97] text-2xl`} />
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-2 py-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg 2xl:w-[340px] lg:w-[280px]  ">
                  {locations.map((location) => (
                    <Listbox.Option key={location.id} value={location}>
                      {({ active, selected }) => (
                        <li
                          className={`${
                            active
                              ? "bg-[#375E97] text-white"
                              : "text-[#263238]"
                          } cursor-pointer select-none relative py-2 px-[40px]`}
                        >
                          {location.name}
                          
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            )}
          </Listbox>
        </div>

        {/* Category */}
        <div>
          <h1 className="text-black text-[20px] font-Teko font-medium leading-8 tracking-[2px] uppercase">
            Category
          </h1>

          <Listbox
            as="div"
            className="2xl:w-[340px] lg:w-[280px] w-full h-[60px] rounded-lg"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {({ open }) => (
              <>
                <Listbox.Button
                  className="2xl:w-[340px] lg:w-[280px] w-full h-[60px] rounded-lg flex justify-between items-center px-[40px] cursor-pointer text-[#263238] text-[14px] font-Lato font-normal leading-8  uppercase"
                  style={{ border: "1px solid rgba(162, 160, 160, 0.60)" }}
                >
                  {selectedCategory.name}
                  <BiSolidDownArrow className={`text-[#375E97] text-2xl`} />
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-2 py-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg 2xl:w-[340px] lg:w-[280px]  ">
                  {propertyCategory.map((category) => (
                    <Listbox.Option key={category.id} value={category}>
                      {({ active, selected }) => (
                        <li
                          className={`${
                            active
                              ? "bg-[#375E97] text-white"
                              : "text-[#263238]"
                          } cursor-pointer select-none relative py-2 px-[40px]`}
                        >
                          {category.name}
                          
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </>
            )}
          </Listbox>
        </div>

        {/* Property Type */}
        <div>
          <h1 className="text-black text-[20px] font-Teko font-medium leading-8 tracking-[2px] uppercase">
            Property Type
          </h1>

          <Listbox
            as="div"
            className="2xl:w-[340px] lg:w-[280px] w-full h-[60px] rounded-lg"
            value={selectedPropertyType}
            onChange={handlePropertyTypeChange}
          >
            {({ open }) => (
              <>
                <Listbox.Button
                  className="2xl:w-[340px] lg:w-[280px] w-full h-[60px] rounded-lg flex justify-between items-center px-[40px] cursor-pointer text-[#263238] text-[14px] font-Lato font-normal leading-8  uppercase"
                  style={{ border: "1px solid rgba(162, 160, 160, 0.60)" }}
                >
                  {selectedPropertyType.name}
                  <BiSolidDownArrow className={`text-[#375E97] text-2xl`} />
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-2 py-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg 2xl:w-[340px] lg:w-[280px]  ">
                  {propertyType.map((type) => (
                    <Listbox.Option key={type.id} value={type}>
                      {({ active, selected }) => (
                        <li
                          className={`${
                            active
                              ? "bg-[#375E97] text-white"
                              : "text-[#263238]"
                          } cursor-pointer select-none relative py-2 px-[40px]`}
                        >
                          {type.name}
                          
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </>
            )}
          </Listbox>
        </div>
      </div>

      {/* Search bar */}
      <div className="bg-secondaryColor rounded-lg w-[198px] h-[149px] flex justify-center items-center gap-2 absolute right-[3px] top-[3px] cursor-pointer">
        <BiSearch className="text-white text-2xl" />
        <p className="text-white text-[20px] font-Lato font-normal">Search</p>
      </div>
    </div>
  );
};

export default SellTab;
