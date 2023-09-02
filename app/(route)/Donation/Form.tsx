import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import RazorpayButton from "@/components/razorpaybutton";
import axios from "axios";
const Form = () => {
  const [fullName, setFullName] = useState<string>("");
  const [number, setNumber] = useState<number>();
  const [donationAmt, setDonationAmt] = useState<number>(0);
  const [userEmail, setUserEmail] = useState<string>("");
  const [DOB, setDOB] = useState<string>("");
  console.log(DOB);
  const [sex, setSex] = useState<string>("");
  const [panCard, setPanCard] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/doners",
      {
        //backend     frontend
        full_name: fullName,
        phone_number: String(number),
        amount: String(donationAmt),
        email: userEmail,
        DOB: String(DOB),
        sex: sex,
        pan_card: panCard,
        street: street,
        city: city,
        state: state,
        country: country,
        pincode: pincode,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*", // Replace with your allowed origin(s)
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data.message);
    console.log(response.data);
  };
  return (
    <div className="container mx-auto p-8">
      <form onSubmit={handleSubmit} className="">
        {" "}
        {/* add onsubmit using props */}
        <h2 className="text-4xl font-semibold mb-4">Make a Donation</h2>
        <div className="bg-white rounded shadow-md p-6 grid grid-cols-3 gap-5 w-full max-sm:flex max-sm:flex-col">
          {/* Full Name Field */}
          <div className="mb-4">
            <label htmlFor="full_name" className="block font-medium">
              Full Name <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              className="border rounded p-2 w-full"
              placeholder="Amit Grewal"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
              value={number}
              pattern="[6-9]{1}[0-9]{9}"
              onChange={(e) => setNumber(e.target.valueAsNumber)}
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
              name="amount"
              className="border rounded p-2 w-full"
              placeholder="Enter amount"
              value={donationAmt}
              onChange={(e) => setDonationAmt(e.target.valueAsNumber)}
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
              name="email"
              className="border rounded p-2 w-full"
              placeholder="jansevaa31@gmail.com"
              required
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
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
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
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
              /*  value={sex} */
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="">----Select----</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
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
              name="pan_card"
              className="border rounded p-2 w-full"
              placeholder="ABCDE1234F"
              // required
              value={panCard}
              onChange={(e) => setPanCard(e.target.value)}
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
              value={street}
              onChange={(e) => setStreet(e.target.value)}
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
              value={state}
              onChange={(e) => setState(e.target.value)}
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
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <RazorpayButton amount={donationAmt} />
        </div>
      </form>
    </div>
  );
};
export default Form;
