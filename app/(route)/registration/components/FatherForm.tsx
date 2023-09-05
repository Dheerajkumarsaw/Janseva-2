import Image from "next/image";
import React, { useState } from "react";

type FatherFormTypes = {
  parentsFormData: ParentsFormDataType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const FatherForm = ({ parentsFormData, handleChange }: FatherFormTypes) => {
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
    handleChange(event);
  };

  // Optional Id Proof selection logic
  const [selectedIdProof, setSelectedIdProof] = useState("Select One");
  const handleIdProofChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedIdProof(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-5 py-5 pl-10 max-md:p-2 ">
        {/* Name / email-pass / DOB-Blood-Sex */}
        <div className="grid grid-cols-3 gap-5 w-full max-md:grid-cols-1 max-lg:grid-cols-2">
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Full Name">
              Full Name <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="Full Name"
              className="border rounded p-2 w-full"
              type="text"
              name="father_full_name"
              id="Full Name"
              value={parentsFormData.father_full_name}
              onChange={handleChange}
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
              type="number"
              name="father_phone_no"
              id="Phone"
              value={parentsFormData.father_phone_no}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Email">
              Email <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="example@gamil.com"
              className="border rounded p-2 w-full"
              type="email"
              name="father_email"
              id="Email"
              value={parentsFormData.father_email}
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
              name="father_blood_group"
              id="Blood"
              required
              value={parentsFormData.father_blood_group}
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

          <div className="w-full max-md:hidden" />
          <div className="w-full max-lg:hidden" />
        </div>

        {/* Adhar Id Proof */}
        <div className="flex flex-col w-full">
          <div className="flex  w-full max-md:flex-col max-lg:border p-2 rounded-lg max-md:items-start items-center">
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
                    name="father_aadhar_front"
                    value={parentsFormData.father_aadhar_front}
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
                    name="father_aadhar_back"
                    value={parentsFormData.father_aadhar_back}
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
                    name="father_voter_front"
                    value={parentsFormData.father_voter_front}
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
                    name="father_voter_back"
                    value={parentsFormData.father_voter_back}
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
              <option value="Pan ">Pan card</option>
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
                      name="father_optional_front"
                      value={parentsFormData.father_optional_front}
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
                      name="father_optional_back"
                      value={parentsFormData.father_optional_back}
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
            ) : selectedIdProof === "Pan" ? (
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
                        name="father_optional_front"
                        value={parentsFormData.father_optional_front}
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
                      name="father_optional_front"
                      value={parentsFormData.father_optional_front}
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
        </div>
      </div>
    </>
  );
};

export default FatherForm;
