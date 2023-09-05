import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import RazorpayButton from "@/components/razorpaybutton";
import axios from "axios";
const Form = () => {
  const [donationAmt, setDonationAmt] = useState(0);
  const [donationFormData, setDonationFormData] = useState({
    fullName: "",
    phone_no: "",
    donationAmt: 0,
    userEmail: "",
    DOB: "",
    sex: "",
    panCard: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "donationAmt") {
      setDonationAmt(parseInt(value));
      console.log(donationAmt);
    }
    if (name === "fullName" || name === "phone_no" || name === "userEmail") {
      setIsDisabled(false);
    }
    setDonationFormData({ ...donationFormData, [name]: value });
  };
  return (
    <div className="container mx-auto p-8">
      <form className="">
        {" "}
        {/* add onsubmit using props */}
        <h2 className="max-md:text-center text-4xl font-semibold mb-4">
          Make a Donation
        </h2>
        <div className="bg-white rounded shadow-md p-6 grid max-md:grid-cols-1 grid-cols-3 gap-5 w-full">
          {/* Full Name Field */}
          <div className="mb-4">
            <label htmlFor="full_name" className="block font-medium">
              Full Name <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="text"
              id="full_name"
              name="fullName"
              className="border rounded p-2 w-full"
              placeholder="Amit Grewal"
              required
              maxLength={10}
              value={donationFormData.fullName}
              onChange={handleChange}
            />
          </div>
          {/* Phone Number Field */}
          <div className="mb-4">
            <label htmlFor="phone_no" className="block font-medium">
              Phone Number <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="number"
              id="phone_no"
              name="phone_no"
              className="border rounded p-2 w-full"
              placeholder="000-000-0000"
              required
              value={donationFormData.phone_no}
              pattern="[6-9]{1}[0-9]{9}"
              onChange={handleChange}
            />
          </div>
          {/* Amount Field */}
          <div className="mb-4">
            <label htmlFor="amount" className="block font-medium">
              Donation Amount
            </label>
            <input
              type="number"
              id="amount"
              name="donationAmt"
              className="border rounded p-2 w-full"
              placeholder="Enter amount"
              value={donationFormData.donationAmt}
              onChange={handleChange}
            />
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">
              Email <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="userEmail"
              className="border rounded p-2 w-full"
              placeholder="rsmefoundation88@gmail.com"
              required
              value={donationFormData.userEmail}
              onChange={handleChange}
            />
          </div>
          {/* DOB Field */}
          <div className="mb-4">
            <label htmlFor="DOB" className="block font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="DOB"
              name="DOB"
              className="border rounded p-2 w-full"
              value={donationFormData.DOB}
              onChange={handleChange}
            />
          </div>
          {/* Sex Field */}
          <div className="mb-4">
            <label htmlFor="sex" className="block font-medium">
              Sex
            </label>
            <select
              id="sex"
              name="sex"
              className="border rounded p-2 w-full"
              value={donationFormData.sex}
              onChange={handleChange}
            >
              <option value="">----Select----</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          {/* PAN Card Field */}
          <div className="mb-4">
            <label htmlFor="pan_card" className="block font-medium">
              PAN Card {/* <span className="font-bold text-red-400">*</span> */}
            </label>
            <input
              type="string"
              id="pan_card"
              name="panCard"
              className="border rounded p-2 w-full"
              placeholder="ABCDE1234F"
              // required
              value={donationFormData.panCard}
              onChange={handleChange}
            />
          </div>
          {/* Street Field */}
          <div className="mb-4">
            <label htmlFor="street" className="block font-medium">
              Street
            </label>
            <input
              type="text"
              id="street"
              name="street"
              className="border rounded p-2 w-full"
              placeholder="1234 Main Street"
              value={donationFormData.street}
              onChange={handleChange}
            />
          </div>
          {/* sadasdf */}
          {/* City Field */}
          <div className="mb-4">
            <label htmlFor="city" className="block font-medium">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="border rounded p-2 w-full"
              placeholder="City"
              value={donationFormData.city}
              onChange={handleChange}
            />
          </div>
          {/* State Field */}
          <div className="mb-4">
            <label htmlFor="state" className="block font-medium">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="border rounded p-2 w-full"
              placeholder="State"
              value={donationFormData.state}
              onChange={handleChange}
            />
          </div>
          {/* Country Field */}
          <div className="mb-4">
            <label htmlFor="country" className="block font-medium">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="border rounded p-2 w-full"
              placeholder="Country"
              value={donationFormData.country}
              onChange={handleChange}
            />
          </div>
          {/* Pincode Field */}
          <div className="mb-4">
            <label htmlFor="pincode" className="block font-medium">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="border rounded p-2 w-full"
              placeholder="110061"
              value={donationFormData.pincode}
              onChange={handleChange}
            />
          </div>
          {/* Submit Button */}
          <RazorpayButton temp={isDisabled} amount={donationAmt} />
        </div>
      </form>
    </div>
  );
};
export default Form;