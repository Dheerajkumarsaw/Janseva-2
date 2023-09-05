"use client";
import Image from "next/image";
import React, { useState } from "react";
type StudentFormCompType = {
  studentFormData: studentFormDataType;
  handleChangeStudent: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};
const StudentFormComp = ({
  studentFormData,
  handleChangeStudent,
}: StudentFormCompType) => {
  // handleImage
  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    undefined
  );
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    if (imageFile) {
      setPreviewUrl(URL.createObjectURL(imageFile));
    }
    handleChangeStudent(event);
  };
  return (
    <>
      <div className="flex flex-col gap-5 py-5 pl-10 max-md:p-2 ">
        {/* Name / email-pass / DOB-Blood-Sex */}
        <div className="grid grid-cols-3 gap-5 w-full max-md:grid-cols-1 max-lg:grid-cols-2">
          <div className="mb-4">
            <label className="block font-medium" htmlFor="FirstName">
              FirstName <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="First Name"
              className="border rounded p-2 w-full"
              type="text"
              name="first_name"
              id="FirstName"
              value={studentFormData.first_name}
              onChange={handleChangeStudent}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium" htmlFor="MiddleName">
              MiddleName <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="Middle Name"
              className="border rounded p-2 w-full"
              type="text"
              name="middle_name"
              id="MiddleName"
              value={studentFormData.middle_name}
              onChange={handleChangeStudent}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium" htmlFor="LastName">
              LastName <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="Last Name"
              className="border rounded p-2 w-full"
              type="text"
              name="last_name"
              id="LastName"
              value={studentFormData.last_name}
              onChange={handleChangeStudent}
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Email">
              Email <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="Email"
              className="border rounded p-2 w-full"
              type="email"
              name="email"
              id="Email"
              value={studentFormData.email}
              onChange={handleChangeStudent}
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Password">
              Password <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="Password"
              className="border rounded p-2 w-full"
              type="password"
              name="password"
              id="Password"
              value={studentFormData.password}
              onChange={handleChangeStudent}
            />
          </div>

          {/* Phone number */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Phone">
              Phone No: <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="000-000-0000"
              className="border rounded p-2 w-full"
              type="text"
              name="phone_no"
              id="Phone"
              value={studentFormData.phone_no}
              onChange={handleChangeStudent}
            />
          </div>

          {/* Profile Photo */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Profile">
              Profile Photo <span className="font-bold text-red-400">*</span>
            </label>
            <div className="flex items-center">
              <input
                className="border rounded p-2 w-full"
                type="file"
                accept=".jpg,.jpeg"
                value={studentFormData.profile_image}
                onChange={handleImageChange}
              />
              {previewUrl && (
                <Image
                  src={previewUrl}
                  alt="Preview"
                  width={1000}
                  height={1000}
                  className="w-12 -ml-16"
                />
              )}
            </div>
          </div>

          <div className="w-full max-md:hidden" />
          <div className="w-full max-lg:hidden" />

          {/* DOB */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="DOB">
              Date of Birth <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="date"
              className="border rounded p-2 w-full"
              name="DOB"
              id="DOB"
              required
              value={studentFormData.DOB}
              onChange={handleChangeStudent}
            />
          </div>

          {/* Blood Group */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Blood">
              Blood Group <span className="font-bold text-red-400">*</span>
            </label>
            <select
              className="border rounded p-2 w-full"
              name="blood_group"
              id="Blood"
              required
              value={studentFormData.blood_group}
              onChange={handleChangeStudent}
            >
              <option value="Select One">Select One</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Sex Group */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Sex">
              Sex Group <span className="font-bold text-red-400">*</span>
            </label>
            <select
              className="border rounded p-2 w-full"
              name="sex"
              id="Sex"
              required
              value={studentFormData.sex}
              onChange={handleChangeStudent}
            >
              <option value="Select One">Select One</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>

        <div className="border w-full mt-5" />

        {/* Adhar Id Proof */}
        <div className="flex w-full max-md:flex-col max-lg:border p-2 rounded-lg max-md:items-start items-center">
          <span className="text-xl w-1/3 font-bold">
            Adhar Card <span className="font-bold text-red-400">*</span>
          </span>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 flex-1 gap-5">
            <div className="mb-4">
              <label className="block font-medium" htmlFor="AadharFront">
                Front <span className="font-bold text-red-400">*</span>
              </label>
              <div className="flex items-center">
                <input
                  className="border rounded p-2 w-full"
                  type="file"
                  accept=".jpg,.jpeg"
                  name="aadhar_front"
                  value={studentFormData.aadhar_front}
                  onChange={handleImageChange}
                />
                {previewUrl && (
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    width={1000}
                    height={1000}
                    className="w-12 -ml-16"
                  />
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium" htmlFor="AadharBack">
                Back <span className="font-bold text-red-400">*</span>
              </label>
              <div className="flex items-center">
                <input
                  className="border rounded p-2 w-full"
                  type="file"
                  accept=".jpg,.jpeg"
                  name="aadhar_back"
                  value={studentFormData.aadhar_back}
                  onChange={handleImageChange}
                />
                {previewUrl && (
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    width={1000}
                    height={1000}
                    className="w-12 -ml-16"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* School Id Proof */}
        <div className="flex w-full max-lg:border p-2 rounded-lg max-md:flex-col max-md:items-start items-center">
          <span className="text-xl w-1/3 font-bold">
            School Card <span className="font-bold text-red-400">*</span>
          </span>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 flex-1 gap-5">
            <div className="mb-4">
              <label className="block font-medium" htmlFor="SchoolFront">
                Front <span className="font-bold text-red-400">*</span>
              </label>
              <div className="flex items-center">
                <input
                  className="border rounded p-2 w-full"
                  type="file"
                  accept=".jpg,.jpeg"
                  name="School_front"
                  value={studentFormData.school_id}
                  onChange={handleImageChange}
                />
                {previewUrl && (
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    width={1000}
                    height={1000}
                    className="w-12 -ml-16"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentFormComp;
