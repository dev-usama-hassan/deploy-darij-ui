import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EditPromoCode = () => {
    const navigate = useNavigate();
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState([]);

    const handleLanguageChange = (event) => {
      const selectedValue = event.target.value;
  
      setSelectedLanguages((prevLanguages) => {
        return prevLanguages.includes(selectedValue)
          ? prevLanguages.filter((lang) => lang !== selectedValue)
          : [...prevLanguages, selectedValue];
      });
    };

    const handlePlanChange = (event) => {
      const selectedValue = event.target.value;
  
      setSelectedPlan((prevPlan) => {
        return prevPlan.includes(selectedValue)
          ? prevPlan.filter((plan) => plan !== selectedValue)
          : [...prevPlan, selectedValue];
      });
    };

    return (
      <section className='h-screen overflow-y-auto overflow-x-hidden custom-scrollbar'>
        <div className='w-full h-fit bg-white border border-[#E1E5E8] rounded-[30px]'>
            {/* header */}
            <h2 className='font-inter text-2xl font-semibold leading-9 text-left text-black pt-7 pl-7'>Edit</h2>

            {/* promo code fields */}
            <div className="flex flex-col md:gap-7 w-auto mt-7 mx-7">
  {/* First Row */}
  <div className="flex flex-col md:flex-row md:justify-between gap-4">
    {/* Promo Code */}
    <div className="w-full md:w-[calc(50%-16px)]">
      <label
        htmlFor="code"
        className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
      >
        Promo Code<span className="text-red-500 ml-1">*</span>
      </label>
      <input
        id="code"
        placeholder="Enter Promo Code"
        className="mt-2 w-full h-[44px] bg-white text-black placeholder:text-[#D0D5DD] border border-[#D0D5DD] rounded-[8px] py-[12px] pl-[14px] focus:outline-none font-[400] text-[16px] leading-[24px]"
        required
        autoComplete="off"
        maxlength="50"
      />
    </div>

    {/* Subscription Plan */}
    <div className="w-full md:w-[calc(50%-16px)]">
      <label
        htmlFor="subscription"
        className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
      >
        Subscription Plan<span className="text-red-500 ml-1">*</span>
      </label>
      <select
        id="subscription"
        className="mt-2 w-full h-[44px] bg-white text-black placeholder:text-[#D0D5DD] border border-[#D0D5DD] rounded-[8px] pl-[14px] focus:outline-none font-[400] text-[16px] leading-[24px]"
        value={selectedPlan}
        onChange={handlePlanChange}
      >
        <option value="Lifetime">Lifetime</option>
        <option value="Yearly">Yearly</option>
        <option value="Monthly">Monthly</option>
        <option value="Weekly">Weekly</option>
      </select>
      <div className="mt-2 text-[16px] text-green-700">
         {selectedPlan.join(", ")}
      </div>
    </div>
    
  </div>

  {/* Second Row */}
  <div className="flex flex-col md:flex-row md:justify-between gap-4 my-7">
    {/* Applicable Language */}
    <div className="w-full md:w-[calc(50%-16px)]">
      <label
        htmlFor="language"
        className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
      >
        Applicable Language<span className="text-red-500 ml-1">*</span>
      </label>
      <select
        id="language"
        className="mt-2 w-full h-[44px] bg-white text-black placeholder:text-[#D0D5DD] border border-[#D0D5DD] rounded-[8px] pl-[14px] focus:outline-none font-[400] text-[16px] leading-[24px]" 
        value={selectedLanguages}
        onChange={handleLanguageChange}
      >
        <option value="Moroco">Moroco</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Algerian">Algerian</option>
      </select>
      <div className="mt-2 text-[16px] text-green-700">
         {selectedLanguages.join(", ")}
      </div>
    </div>

    {/* Expiry Date */}
    <div className="w-full md:w-[calc(50%-16px)]">
      <label
        htmlFor="date"
        className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
      >
        Expiry Date<span className="text-red-500 ml-1">*</span>
      </label>
      <input
        id="date"
        type="date"
        className="date mt-2 w-full h-[44px] bg-white text-black placeholder:text-[#D0D5DD] border border-[#D0D5DD] rounded-[8px] py-[12px] pl-[14px] focus:outline-none font-[400] text-[16px] leading-[24px]"
        required
        autoComplete="off"
        maxlength="50"
      />
    </div>
  </div>

  {/* Third Row */}
  <div className="flex flex-col md:flex-row md:justify-between gap-4">
    {/* Promo Code Discount */}
    <div className="w-full md:w-[calc(50%-16px)]">
      <label
        htmlFor="promoDiscount"
        className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
      >
        Promo Code Discount<span className="text-red-500 ml-1">*</span>
      </label>
      <input
        id="promoDiscount"
        placeholder="Provide Discount"
        className="mt-2 w-full h-[44px] bg-white text-black placeholder:text-[#D0D5DD] border border-[#D0D5DD] rounded-[8px] py-[12px] pl-[14px] focus:outline-none font-[400] text-[16px] leading-[24px]"
        required
        autoComplete="off"
        maxlength="50"
      />
    </div>

    {/* Usage Limit */}
    <div className="w-full md:w-[calc(50%-16px)]">
      <label
        htmlFor="usageLimit"
        className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
      >
        Usage Limit<span className="text-red-500 ml-1">*</span>
      </label>
      <input
        type='number'
        placeholder='Enter User Limit'
        id="usageLimit"
        className="mt-2 w-full h-[44px] bg-white text-black placeholder:text-[#D0D5DD] border border-[#D0D5DD] rounded-[8px] pl-[14px] focus:outline-none font-[400] text-[16px] leading-[24px]"
        maxlength="50"
      />
    </div>
  </div>
</div>


        {/* Buttons */}
        <div className="flex justify-end mt-14 pb-6">
                <button
                    onClick={() => navigate('/promo-code', {replace: true})}
                    className="w-[210px] h-[44px] rounded-[100px] border border-[#000000] py-2 px-4 font-inter font-[600] text-[16px] leading-6"
                >
                    Cancel
                </button>
                <button
                    className="w-[210px] h-[44px] rounded-[100px] bg-[#FFC600] mx-5 mr-5 py-2 px-4 font-inter font-[600] text-[16px] leading-6" onClick={()=> alert("Functionality will be added soon")}
                >
                    Save Changes
                </button>
            </div>
        </div>
        <div className='mb-24'></div>
        </section>
    )
}

export default EditPromoCode