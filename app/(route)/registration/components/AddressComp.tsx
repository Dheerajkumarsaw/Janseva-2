"use client";
import Dropdown from "@/app/components/Dropdown";
import React, { useState } from "react";

interface AddressCompType {
  parentsFormData: ParentsFormDataType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedBranchId: number | null;
  setSelectedBranchId: React.Dispatch<React.SetStateAction<number | null>>;
}
const AddressComp = ({
  selectedBranchId,
  setSelectedBranchId,
  parentsFormData,
  handleChange,
}: AddressCompType) => {
  return (
    <>
      {/* Address */}
      <div className="flex flex-col py-5 pl-10 gap-5 max-md:p-2">
        {/* Branch */}
        <div className="mb-4">
          <label className="block font-medium" htmlFor="Branch">
            Choose Branch <span className="font-bold text-red-400">*</span>
          </label>
          <Dropdown
            selectedBranchId={selectedBranchId}
            setSelectedBranchId={setSelectedBranchId}
          />
        </div>
        <div className="border w-full"/>
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-5 w-full">
          {/* Street */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="street">
              Address <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="House no:, Block no:, Street no:, etc. "
              className="border rounded p-2 w-full"
              type="text"
              name="street"
              id="street"
              value={parentsFormData.street}
              onChange={handleChange}
            />
          </div>

          {/* State */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="state">
              State <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="state"
              className="border rounded p-2 w-full"
              type="text"
              name="state"
              id="state"
              value={parentsFormData.state}
              onChange={handleChange}
            />
          </div>

          {/* district */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="district">
              District <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="district"
              className="border rounded p-2 w-full"
              type="text"
              name="district"
              id="district"
              value={parentsFormData.district}
              onChange={handleChange}
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="city">
              City <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="city"
              className="border rounded p-2 w-full"
              type="text"
              name="city"
              id="city"
              value={parentsFormData.city}
              onChange={handleChange}
            />
          </div>

          {/* area */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="area">
              Area <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="area"
              className="border rounded p-2 w-full"
              type="text"
              name="area"
              id="area"
              value={parentsFormData.area}
              onChange={handleChange}
            />
          </div>

          {/* pincode */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="pincode">
              Pincode <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="pincode"
              className="border rounded p-2 w-full"
              type="number"
              name="pincode"
              id="city"
              value={parentsFormData.pincode}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressComp;
