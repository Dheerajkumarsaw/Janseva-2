"use client";
import { Button } from "@/components/ui/button";
import { Description } from "@radix-ui/react-dialog";
import axios from "axios";

import { useState } from "react";
/* import React, { useState } from "react";
 */

const page = () => {
  const [fullName, setFullName] = useState<string>("");
  const [phone_no, setNumber] = useState<number | undefined>();
  const [userEmail, setUserEmail] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:5000/reporters",
      {
        full_name: fullName,
        phone_no: String(phone_no),
        email: userEmail,
        description: textArea,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*", // Replace with your allowed origin(s)
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json",
          // Add any other CORS headers you need
        },
      }
    );

    console.log(response.data.message);
    console.log(response.data);
    // BranchDummyData = response.data;
    // setBranchLoading(false);
    // } catch (error) {
    //   if (error.response) {
    //     // The request was made, but the server responded with an error status code
    //     console.error("Server responded with error:", error.response.status);
    //     console.error("Error data:", error.response.data);
    //   } else if (error.request) {
    //     // The request was made, but no response was received (network error)
    //     console.error("No response received from the server:", error.request);
    //   } else {
    //     // Something else happened while setting up the request (client-side error)
    //     console.error("Error while setting up the request:", error.message);
    //   }
    //   console.error("Error:", error);
    //   // Handle errors here and setBranchLoading(false) if needed
    // }
  };

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <form onSubmit={handleSubmit} className="flex justify-center mt-[8vh]">
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
              name="full_name"
              className="border rounded p-2 w-full"
              placeholder="Mukesh"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
              value={phone_no}
              onChange={(e) => setNumber(e.target.valueAsNumber)}
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
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
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
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
