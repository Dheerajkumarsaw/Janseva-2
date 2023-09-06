import React, { useState } from "react";
import Dropdown from "@/app/components/Dropdown";
import Image from "next/image";

const BeneficiaryForm = () => {
  const [BeneficiaryFormData, setBeneficiaryFormData] = useState({
    type: "Beneficiary",
    first_name: "",
    middle_name: "",
    last_name: "",
    phone_no: 0,
    email: "",
    password: "",
    DOB: "",
    sex: "",
    blood_group: "",
    profile_image: "",
    aadhar_front: "",
    aadhar_back: "",
    voter_front: "",
    voter_back: "",
    pan_card: "",
    optional_front: "",
    optional_back: "",
    fees: "",
    subject: "",
    branch_id: null,
    street: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    area: "",
    district: "",
  });
  const [selectedIdProof, setSelectedIdProof] = useState("Select One");

  const handleIdProofChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedIdProof(event.target.value);
  };

  const [selectedBranchId, setSelectedBranchId] = useState<number | null>(null);

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
  };

  // Data sending to backend
  const sendBeneficiaryData = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("From Data: ", BeneficiaryFormData);
  };
  // Handle change function
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBeneficiaryFormData({ ...BeneficiaryFormData, [name]: value });
  };

  return (
    <>
      <form method="POST">
        <div className="flex flex-col h-full w-full">
          <span className="text-2xl text-center  w-full font-bold">
            Beneficiary Form
          </span>
          <div className="border w-full mt-5" />
          <div className="flex flex-col gap-5 p-10 max-md:p-2 ">
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
                  value={BeneficiaryFormData.first_name}
                  onChange={handleChange}
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
                  value={BeneficiaryFormData.middle_name}
                  onChange={handleChange}
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
                  value={BeneficiaryFormData.last_name}
                  onChange={handleChange}
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
                  value={BeneficiaryFormData.email}
                  onChange={handleChange}
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
                  value={BeneficiaryFormData.password}
                  onChange={handleChange}
                />
              </div>

              {/* Phone number */}
              <div className="mb-4">
                <label className="block font-medium" htmlFor="Phone">
                  Phone No: <span className="font-bold text-red-400">*</span>
                </label>
                <input
                  placeholder="Phone No:"
                  className="border rounded p-2 w-full"
                  type="text"
                  name="phone_no"
                  id="Phone"
                  value={BeneficiaryFormData.phone_no}
                  onChange={handleChange}
                />
              </div>

              {/* Profile Photo */}
              <div className="mb-4">
                <label className="block font-medium" htmlFor="Profile">
                  Profile Photo{" "}
                  <span className="font-bold text-red-400">*</span>
                </label>
                <div className="flex items-center">
                  <input
                    className="border rounded p-2 w-full"
                    type="file"
                    accept=".jpg,.jpeg"
                    value={BeneficiaryFormData.profile_image}
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
                  Date of Birth{" "}
                  <span className="font-bold text-red-400">*</span>
                </label>
                <input
                  type="date"
                  className="border rounded p-2 w-full"
                  name="DOB"
                  id="DOB"
                  required
                  value={BeneficiaryFormData.DOB}
                  onChange={handleChange}
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
                  value={BeneficiaryFormData.blood_group}
                  onChange={handleChange}
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
                  value={BeneficiaryFormData.sex}
                  onChange={handleChange}
                >
                  <option value="Select One">Select One</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

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
                      value={BeneficiaryFormData.profile_image}
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
                      value={BeneficiaryFormData.profile_image}
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

            {/* Voter Id Proof */}
            <div className="flex w-full max-lg:border p-2 rounded-lg max-md:flex-col max-md:items-start items-center">
              <span className="text-xl w-1/3 font-bold">
                Voter Card <span className="font-bold text-red-400">*</span>
              </span>
              <div className="grid grid-cols-2 max-lg:grid-cols-1 flex-1 gap-5">
                <div className="mb-4">
                  <label className="block font-medium" htmlFor="VoterFront">
                    Front <span className="font-bold text-red-400">*</span>
                  </label>
                  <div className="flex items-center">
                    <input
                      className="border rounded p-2 w-full"
                      type="file"
                      accept=".jpg,.jpeg"
                      value={BeneficiaryFormData.profile_image}
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
                  <label className="block font-medium" htmlFor="VoterBack">
                    Back <span className="font-bold text-red-400">*</span>
                  </label>
                  <div className="flex items-center">
                    <input
                      className="border rounded p-2 w-full"
                      type="file"
                      accept=".jpg,.jpeg"
                      value={BeneficiaryFormData.profile_image}
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

            {/* Pan Id Proof */}
            <div className="flex w-full max-md:flex-col max-lg:border p-2 rounded-lg max-md:items-start items-center">
              <span className="text-xl w-1/3 font-bold">
                Pan Card <span className="font-bold text-red-400">*</span>
              </span>
              <div className="grid grid-cols-2 max-lg:grid-cols-1 flex-1 gap-5">
                <div className="mb-4">
                  <label className="block font-medium" htmlFor="PanFront">
                    Front <span className="font-bold text-red-400">*</span>
                  </label>
                  <div className="flex items-center">
                    <input
                      className="border rounded p-2 w-full"
                      type="file"
                      accept=".jpg,.jpeg"
                      value={BeneficiaryFormData.profile_image}
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
                {/* Empty Div */}
                <div className="w-full mx-lg:hidden" />
              </div>
            </div>

            {/* Optional Id Proof */}
            <div className="flex w-full gap-5 max-md:flex-col max-lg:border p-2 rounded-lg max-md:items-start items-center">
              <select
                className="w-1/3 border max-md:w-fit text-xl font-bold rounded p-2"
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
                <div className="grid grid-cols-2 max-lg:grid-cols-1 flex-1 gap-5">
                  <div className="mb-4">
                    <label className="block font-medium" htmlFor="Password">
                      Front <span className="font-bold text-red-400">*</span>
                    </label>
                    <div className="flex items-center">
                      <input
                        className="border rounded p-2 w-full"
                        type="file"
                        accept=".jpg,.jpeg"
                        value={BeneficiaryFormData.profile_image}
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
                    <label className="block font-medium" htmlFor="Password">
                      Back <span className="font-bold text-red-400">*</span>
                    </label>
                    <div className="flex items-center">
                      <input
                        className="border rounded p-2 w-full"
                        type="file"
                        accept=".jpg,.jpeg"
                        value={BeneficiaryFormData.profile_image}
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
              ) : selectedIdProof === "Select One" ? (
                "(optional)"
              ) : (
                <>
                  <div className="mb-4">
                    <label className="block font-medium" htmlFor="Password">
                      Front <span className="font-bold text-red-400">*</span>
                    </label>
                    <div className="flex items-center">
                      <input
                        className="border rounded p-2 w-full"
                        type="file"
                        accept=".jpg,.jpeg"
                        value={BeneficiaryFormData.profile_image}
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
                </>
              )}
            </div>

            <div className="border w-full mt-5" />

            {/* Address */}
            <div className="flex flex-col mt-5 gap-5">
              <span className="text-xl w-32 font-bold">{`Your Address:`}</span>
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
                    value={BeneficiaryFormData.street}
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
                    value={BeneficiaryFormData.state}
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
                    id="city"
                    value={BeneficiaryFormData.district}
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
                    value={BeneficiaryFormData.city}
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
                    value={BeneficiaryFormData.area}
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
                    value={BeneficiaryFormData.pincode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex gap-10"></div> */}

          <div className="flex justify-center">
            <button
              type="submit"
              onClick={(e) => sendBeneficiaryData(e)}
              className="bg-blue-600 text-white rounded-full px-10 py-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BeneficiaryForm;
