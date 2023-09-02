import React, { useState } from "react";
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

const VolunteerFormReducer = (state: FormStateType, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
};

const VolunteerForm = () => {
  const [state, dispatch] = React.useReducer(
    VolunteerFormReducer,
    initialState
  );
  const [selectedIdProof, setSelectedIdProof] = useState("Select One");

  const handleIdProofChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedIdProof(event.target.value);
  };

  // To manage Blood group
  const handleBloodGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: `${formType}BloodGroup`,
      payload: e.target.value,
    });
  };

  // To manage sex
  const [selectedSex, setSelectedSex] = useState("Select One");
  const handleSexChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSex(e.target.value);
    dispatch({
      type: "UPDATE_FIELD",
      field: `${formType}Sex`,
      payload: e.target.value,
    });
  };

  // To manage branch
  const [selectedBranchId, setSelectedBranchId] = useState<number | null>(null);

  const printData = () => {
    console.log("VolunteerFirstName: ", state.VolunteerFirstName);
    console.log("VolunteerLastName: ", state.VolunteerLastName);
    console.log("VolunteerPhoneNo: ", state.VolunteerPhoneNo);
    console.log("VolunteerBloodGroup: ", state.VolunteerBloodGroup);
    console.log("VolunteerDOB: ", state.VolunteerDOB);
    console.log("VolunteerSex: ", state.VolunteerSex);
    console.log("VolunteerEmail: ", state.VolunteerEmail);
    console.log("VolunteerPassword: ", state.VolunteerPassword);
    console.log("VolunteerBranchId: ", selectedBranchId);
    console.log("VolunteerProfileCardFront: ", state.VolunteerProfileCardFront);
    console.log("VolunteerAdharCardFront: ", state.VolunteerAadharCardFront);
    console.log("VolunteerAdharCardBack: ", state.VolunteerAadharCardBack);
    console.log("VolunteerVoterCardFront: ", state.VolunteerVoterCardFront);
    console.log("VolunteerVoterCardBack: ", state.VolunteerVoterCardBack);
    console.log("VolunteerPanCardFront: ", state.VolunteerPanCardFront);
    console.log(
      "VolunteerPassportCardFront: ",
      state.VolunteerPassportCardFront
    );
    console.log("VolunteerDrivingCardFront: ", state.VolunteerDrivingCardFront);
    console.log("VolunteerDrivingCardBack: ", state.VolunteerDrivingCardBack);
    console.log(
      "VolunteerAddress: ",
      state.VolunteerAddressStreet,
      state.VolunteerAddressCity,
      state.VolunteerAddressDistrict,
      state.VolunteerAddressState,
      state.VolunteerAddressPincode
    );
  };

  const sendVolunteerData = () => {
    // validate that all the fields are filled
    if (
      state.VolunteerFirstName === "" ||
      state.VolunteerLastName === "" ||
      state.VolunteerPhoneNo === "" ||
      state.VolunteerBloodGroup === "Select One" ||
      state.VolunteerDOB === "" ||
      state.VolunteerSex === "Select One" ||
      state.VolunteerEmail === "" ||
      state.VolunteerBloodGroup === "Select One" ||
      state.VolunteerSex === "Select One" ||
      state.VolunteerProfileCardFront === null ||
      state.VolunteerAadharCardFront === null ||
      state.VolunteerAadharCardBack === null ||
      state.VolunteerVoterCardFront === null ||
      state.VolunteerVoterCardBack === null ||
      state.VolunteerPanCardFront === null
    ) {
      alert("Please fill all the fields");
    } else {
      // hit the api to the backend using axios
      console.log("Volunteers form is done ");
    }
  };
  const formType = "Volunteer";
  return (
    <form method="POST">
      <span className="text-2xl font-bold">Volunteer Form</span>
      <div className="border w-full mt-5" />
      <div className="flex flex-col gap-5 p-10">
        {/* Name */}
        <div className="flex gap-10">
          <Name
            isRequired={true}
            formType={formType}
            state={state}
            dispatch={dispatch}
          />
        </div>

        <div className="flex gap-10">
          <PhoneNo
            formType={formType}
            state={state}
            dispatch={dispatch}
            isRequired={true}
          />
        </div>

        {/* Email */}
        <div className="flex gap-10">
          <Email
            formType={formType}
            state={state}
            dispatch={dispatch}
            isRequired={true}
          />
        </div>

        {/* Password */}
        <div className="flex gap-10">
          <Password
            formType={formType}
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
            name={`${formType}BloodGroup`}
            id="BloodGroup"
            required
            value={state[`${formType}BloodGroup`]}
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
        <div className="flex mt-10 gap-5">
          <span className="text-base w-32 font-semibold">{`Your Address:`}</span>
          <AddressFormDetails
            formType={formType}
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

export default VolunteerForm;
