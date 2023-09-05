"use client";
import { Button } from "@/components/ui/button";
import { Description } from "@radix-ui/react-dialog";
import axios from "axios";
import { useState } from "react";
/* import React, { useState } from "react";
 */
const Report = () => {
  const [reportFormData, setreportFormData] = useState({
    fullName: "",
    phone_no: "",
    userEmail: "",
    textArea: "",
  });
  const handleSubmit = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setreportFormData({ ...reportFormData, [name]: value });
  };
  // Data sending to backend
  const sendReportData = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("From Data: ", reportFormData);
  };
  return (
    <div className="container mx-auto p-4 sm:p-8">
      <form className="flex justify-center mt-[8vh]">
        <div className="bg-white max-md:w-96 rounded shadow-md p-4 sm:p-6 grid grid-cols-1 gap-4 sm:gap-6 sm:w-2/3">
          <h2 className="text-2xl sm:text-4xl font-semibold mb-4">
            Raise an Issue
          </h2>
          {/* Full Name Field */}
          <div className="mb-2 sm:mb-4">
            <label htmlFor="full_name" className="block font-medium">
              Full Name <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="string"
              id="full_name"
              name="fullName"
              className="border rounded p-2 w-full"
              placeholder="Mukesh"
              value={reportFormData.fullName}
              required
              onChange={handleSubmit}
            />
          </div>
          {/* Phone Number Field */}
          <div className="mb-2 sm:mb-4">
            <label htmlFor="phone_no" className="block font-medium">
              Phone Number <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="tel"
              id="phone_no"
              name="phone_no"
              className="border rounded p-2 w-full"
              placeholder="000-000-0000"
              required
              value={reportFormData.phone_no}
              onChange={handleSubmit}
            />
          </div>
          {/* Email Field */}
          <div className="mb-2 sm:mb-4">
            <label htmlFor="email" className="block font-medium">
              Email <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded p-2 w-full"
              placeholder="JohnDoe@gmail.com"
              value={reportFormData.userEmail}
              required
              onChange={handleSubmit}
            />
          </div>
          {/* TextArea */}
          <div className="mb-2 sm:mb-4">
            <label
              htmlFor="message"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Write Your Complaint
            </label>
            <textarea
              id="message"
              rows={5}
              className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Describe your complaint within 250 words"
              value={reportFormData.textArea}
              required
              onChange={handleSubmit}
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={sendReportData}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Report;
