"use client";
import React, { useEffect, useState } from "react";
import FatherForm from "./FatherForm";
import MotherForm from "./MotherForm";
import AddressComp from "./AddressComp";
import StudentFormComp from "./StudentFormComp";
// Remember : The IDProof also have multiple options like Aadhar, PAN, etc.

export const StudentForm = () => {
  // export const StudentForm = () => {
  const [selectStudentFormOptions, setSelectStudentFormOptions] = useState<
    "Father" | "Mother" | "Address" | "Student" | "Payment" | null
  >(null);

  const [parentsFormData, setParentsFormData] = useState<ParentsFormDataType>({
    father_full_name: "",
    father_phone_no: "",
    father_blood_group: "",
    father_email: "",
    father_aadhar_front: "",
    father_aadhar_back: "",
    father_voter_front: "",
    father_voter_back: "",
    father_optional_front: "",
    father_optional_back: "",

    mother_full_name: "",
    mother_phone_no: "",
    mother_blood_group: "",
    mother_email: "",
    mother_aadhar_front: "",
    mother_aadhar_back: "",
    mother_voter_front: "",
    mother_voter_back: "",
    mother_optional_front: "",
    mother_optional_back: "",

    branch_id: 0,
    street: "",
    state: "",
    city: "",
    district: "",
    area: "",
    pincode: "",
    country: "India",
  });

  // Branch Id fetching from AddressForm component
  const [selectedBranchId, setSelectedBranchId] = useState<number | null>(null);
  // Handle change function
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (selectedBranchId) {
      setParentsFormData({ ...parentsFormData, branch_id: selectedBranchId });
    }
    setParentsFormData({ ...parentsFormData, [name]: value });
  };

  const [student, setStudent] = useState<studentFormDataType>({
    first_name: "",
    middle_name: "",
    last_name: "",
    phone_no: "",
    email: "",
    subject: "",
    blood_group: "",
    aadhar_front: "",
    aadhar_back: "",
    school_id: "",
    DOB: "",
    sex: "",
    profile_image: "",
    // todo need to decide user_id for it

    password: "",
    parent_id: "",
  });

  const [studentArray, setStudentArray] = useState<(typeof student)[]>([]);

  const handleChangeStudent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setStudentArray([
      ...studentArray,
      { ...student, [e.target.name]: e.target.value },
    ]);
  };

  return (
    <form method="POST">
      {/* Student Form */}
      <div className="flex flex-col h-full w-full">
        <span className="text-2xl text-center font-bold">Parents & Student Form</span>
        <div className="border w-full mt-5" />
        <div className="flex">
          {/* Left Sidebar buttons for student Form */}
          <div className="flex flex-col pt-5 items-start w-fit max-md:w-1/4 border-r ">
            <button
              onClick={() => setSelectStudentFormOptions("Father")}
              type="button"
              className={` p-5 max-md:px-2 text-start text-lg font-bold ${
                selectStudentFormOptions === "Father" && "text-blue-600"
              }`}
            >{`Father's Details`}</button>
            <button
              onClick={() => setSelectStudentFormOptions("Mother")}
              type="button"
              className={` p-5 max-md:px-2 border-t text-start text-lg font-bold ${
                selectStudentFormOptions === "Mother" && "text-blue-600"
              }`}
            >{`Mother's Details`}</button>
            <button
              onClick={() => setSelectStudentFormOptions("Address")}
              type="button"
              className={` p-5 max-md:px-2 border-t text-start text-lg font-bold ${
                selectStudentFormOptions === "Address" && "text-blue-600"
              }`}
            >{`Address Details`}</button>
            <button
              onClick={() => setSelectStudentFormOptions("Student")}
              type="button"
              className={` p-5 max-md:px-2 border-t border-b text-start text-lg font-bold ${
                selectStudentFormOptions === "Student" && "text-blue-600"
              }`}
            >{`Student Details`}</button>

            <button
              onClick={() => setSelectStudentFormOptions("Payment")}
              type="button"
              className={` p-5 max-md:px-2  text-start text-lg font-bold ${
                selectStudentFormOptions === "Payment" && "text-blue-600"
              }`}
            >{`Payment`}</button>
          </div>

          {/* Right Side Form */}
          <div className="flex-1">
            {selectStudentFormOptions === "Father" && (
              <FatherForm
                parentsFormData={parentsFormData}
                handleChange={handleChange}
              />
            )}
            {selectStudentFormOptions === "Mother" && (
              <MotherForm
                parentsFormData={parentsFormData}
                handleChange={handleChange}
              />
            )}
            {selectStudentFormOptions === "Address" && (
              <AddressComp
                parentsFormData={parentsFormData}
                handleChange={handleChange}
                selectedBranchId={selectedBranchId}
                setSelectedBranchId={setSelectedBranchId}
              />
            )}
            {selectStudentFormOptions === "Student" && (
              <StudentFormComp
                studentFormData={student}
                handleChangeStudent={handleChangeStudent}
              />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
