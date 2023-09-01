import React, { useEffect, useState } from "react";
import {
  BloodGroup,
  Email,
  FrontBackImage,
  Name,
  Password,
  PhoneNo,
} from "./FormComp";
import { initialState } from "./InitialState";
import ImageUploadForm from "./ImageUploadForm";
import Dropdown from "@/app/components/Dropdown";
import { AddressFormDetails } from "./AddressComp";

const TeacherFormReducer = (state: FormStateType, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
};

const TeacherForm = () => {
  const [state, dispatch] = React.useReducer(TeacherFormReducer, initialState);
  const [selectedIdProof, setSelectedIdProof] = useState("Select One");

  const handleIdProofChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedIdProof(event.target.value);
  };

  // To manage Blood group
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("Select One");
  const handleBloodGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBloodGroup(e.target.value);

    dispatch({
      type: "UPDATE_FIELD",
      field: `TeacherBloodGroup`,
      payload: e.target.value,
    });
  };

  // To manage sex
  const [selectedSex, setSelectedSex] = useState("Select One");
  const handleSexChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSex(e.target.value);
    dispatch({
      type: "UPDATE_FIELD",
      field: `TeacherSex`,
      payload: e.target.value,
    });
  };

  // To manage branch
  const [selectedBranchId, setSelectedBranchId] = useState<number | null>(null);

  const printData = () => {
    console.log("TeacherFirstName: ", state.TeacherFirstName);
    console.log("TeacherLastName: ", state.TeacherLastName);
    console.log("TeacherPhoneNo: ", state.TeacherPhoneNo);
    console.log("TeacherBloodGroup: ", state.TeacherBloodGroup);
    console.log("TeacherDOB: ", state.TeacherDOB);
    console.log("TeacherSex: ", state.TeacherSex);
    console.log("TeacherEmail: ", state.TeacherEmail);
    console.log("TeacherPassword: ", state.TeacherPassword);
    console.log("TeacherBranchId: ", selectedBranchId);
    console.log("TeacherProfileCardFront: ", state.TeacherProfileCardFront);
    console.log("TeacherAdharCardFront: ", state.TeacherAadharCardFront);
    console.log("TeacherAdharCardBack: ", state.TeacherAadharCardBack);
    console.log("TeacherVoterCardFront: ", state.TeacherVoterCardFront);
    console.log("TeacherVoterCardBack: ", state.TeacherVoterCardBack);
    console.log("TeacherPanCardFront: ", state.TeacherPanCardFront);
    console.log("TeacherPassportCardFront: ", state.TeacherPassportCardFront);
    console.log("TeacherDrivingCardFront: ", state.TeacherDrivingCardFront);
    console.log("TeacherDrivingCardBack: ", state.TeacherDrivingCardBack);
    console.log("TeacherAddress: ", state.TeacherAddress);
  };

  const sendTeacherData = () => {
    // validate that all the fields are filled
    if (
      state.TeacherFirstName === "" ||
      state.TeacherLastName === "" ||
      state.TeacherPhoneNo === "" ||
      state.TeacherBloodGroup === "Select One" ||
      state.TeacherDOB === "" ||
      state.TeacherSex === "Select One" ||
      state.TeacherEmail === "" ||
      state.TeacherBloodGroup === "Select One" ||
      state.TeacherSex === "Select One" ||
      state.TeacherProfileCardFront === null ||
      state.TeacherAadharCardFront === null ||
      state.TeacherAadharCardBack === null ||
      state.TeacherVoterCardFront === null ||
      state.TeacherVoterCardBack === null ||
      state.TeacherPanCardFront === null
    ) {
      alert("Please fill all the fields");
    } else {
      // hit the api to the backend using axios
      console.log("Teachers form is dane ");
    }
  };
  return (
    <form method="POST">
      <span className="text-2xl font-bold">Teacher Form</span>
      <div className="border w-full mt-5" />
      <div className="flex flex-col gap-5 p-10">
        {/* Name */}
        <div className="flex gap-10">
          <Name
            isRequired={true}
            formType="Teacher"
            state={state}
            dispatch={dispatch}
          />
        </div>

        <div className="flex gap-10">
          <PhoneNo
            formType="Teacher"
            state={state}
            dispatch={dispatch}
            isRequired={true}
          />
        </div>

        {/* Email */}
        <div className="flex gap-10">
          <Email
            formType="Teacher"
            state={state}
            dispatch={dispatch}
            isRequired={true}
          />
        </div>

        {/* Password */}
        <div className="flex gap-10">
          <Password
            formType="Teacher"
            state={state}
            dispatch={dispatch}
            isRequired={true}
          />
        </div>

        {/* Blood Group */}
        <div className="flex gap-9">
          <span className="text-base font-semibold">Blood Group:</span>
          <select
            className="outline-none font-semibold border-b-2 border-slate-200"
            name="TeacherBloodGroup"
            id="BloodGroup"
            required
            value={state.TeacherBloodGroup}
            onChange={(e) => handleBloodGroupChange(e)}
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

        {/* DOB */}
        <div className="flex gap-10">
          <span className="text-base font-semibold">DOB: </span>
          <input
            type="date"
            className="outline-none font-semibold border-b-2 border-slate-200"
            name="TeacherDOB"
            id="DOB"
            required
            value={state.TeacherDOB}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: `TeacherDOB`,
                payload: e.target.value,
              })
            }
          />
        </div>

        {/* Sex Group */}
        <div className="flex gap-9">
          <span className="text-base font-semibold">Sex: </span>
          <select
            className="outline-none font-semibold border-b-2 border-slate-200"
            name="TeacherBloodGroup"
            id="BloodGroup"
            required
            value={state.TeacherSex}
            onChange={(e) => handleSexChange(e)}
          >
            <option value="Select One">Select One</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        {/* Choose Branch */}
        <div className="flex items-center gap-5 my-5">
          <span className="text-base font-semibold">Chose Your Branch</span>
          <Dropdown
            selectedBranchId={selectedBranchId}
            setSelectedBranchId={setSelectedBranchId}
          />
        </div>

        {/* Profile Photo */}
        <div className="flex gap-10 items-center">
          <span className="text-base font-semibold">Profile Photo: </span>
          <ImageUploadForm
            formType={"Teacher"}
            cardType={"Profile"}
            PositionType={"Front"}
            state={state}
            dispatch={dispatch}
          />
        </div>

        {/* Id Proof */}
        <div className="flex gap-1">
          <span className="text-base w-32 font-semibold">{`ID Proof:`}</span>
          <div className="flex  flex-wrap gap-6">
            <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
              <FrontBackImage
                cardType={"Aadhar"}
                formType={"Teacher"}
                state={state}
                dispatch={dispatch}
                isRequired={true}
              />
            </div>

            <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
              <FrontBackImage
                cardType={"Voter"}
                formType={"Teacher"}
                state={state}
                dispatch={dispatch}
                isRequired={true}
              />
            </div>
            <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
              <div className="flex gap-10 items-center">
                <span className="text-base font-bold">PanCard</span>
                <ImageUploadForm
                  formType={"Teacher"}
                  cardType={"Pan"}
                  PositionType={"Front"}
                  state={state}
                  dispatch={dispatch}
                />
              </div>
            </div>

            <div className="flex gap-6 items-center ">
              <select
                className="outline-none font-semibold border-b-2 border-slate-200"
                name="IdProof"
                id="IdProof"
                value={selectedIdProof}
                onChange={handleIdProofChange}
              >
                <option value="Select One">Select One</option>
                <option value="Driving License">Driving License</option>
                <option value="Passport">Passport</option>
              </select>
              {selectedIdProof === "Driving License" ? (
                <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
                  <FrontBackImage
                    cardType={"Driving"}
                    formType={"Teacher"}
                    state={state}
                    dispatch={dispatch}
                    isRequired={true}
                  />
                </div>
              ) : selectedIdProof === "Select One" ? (
                "(optional)"
              ) : (
                <>
                  <ImageUploadForm
                    formType={"Teacher"}
                    cardType={"Passport"}
                    PositionType={"Front"}
                    state={state}
                    dispatch={dispatch}
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-5">
          <AddressFormDetails
            formType="Teacher"
            state={state}
            dispatch={dispatch}
          />
        </div>
      </div>

      <div className="flex gap-10"></div>

      <div className="flex justify-center">
        <button
          onClick={printData}
          className="bg-blue-600 text-white rounded-full px-10 py-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TeacherForm;
