"use client";
import React, { useState } from "react";
// import { StudentForm } from "./StudentForm";
import TeacherForm from "./TeacherForm";
import VolunteerForm from "./VolunteerForm";

const MainComp = () => {
  const [selectFormType, setSelectFormType] = useState<
    "Teacher" | "Student" | "Volunteer" | null
  >(null);
  return (
    <div className="w-2/3 mt-8 ">
      <div className="flex gap-3 max- justify-around py-2">
        <button
          type="button"
          className={`text-lg border w-[20vw] rounded-full font-bold ${
            selectFormType === "Teacher" && "text-blue-600"
          }`}
          onClick={() => setSelectFormType("Teacher")}
        >
          Teacher
        </button>
        <button
          type="button"
          className={`text-lg border w-[20vw] rounded-full font-bold ${
            selectFormType === "Student" && "text-blue-600"
          }`}
          onClick={() => setSelectFormType("Student")}
        >
          Student
        </button>
        <button
          type="button"
          className={`text-lg border w-[20vw] rounded-full font-bold ${
            selectFormType === "Volunteer" && "text-blue-600"
          }`}
          onClick={() => setSelectFormType("Volunteer")}
        >
          Volunteer
        </button>
      </div>
      <div className="max-md:w-[90vw] max-md:-ml-12 border mb-10 rounded-3xl mt-10 p-5">
        {/* {selectFormType === "Student" && <StudentForm />} */}
        {selectFormType === "Teacher" && <TeacherForm />}
        {selectFormType === "Volunteer" && <VolunteerForm />}
      </div>
    </div>
  );
};

export default MainComp;
