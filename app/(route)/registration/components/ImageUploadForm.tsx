/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useState } from "react";
type ImageUploadFormProps = {
  formType: "Father" | "Mother" | "Student" | "Teacher" | "Volunteer";
  cardType:
    | "Aadhar"
    | "Voter"
    | "SchoolId"
    | "Pan"
    | "Passport"
    | "Driving"
    | "Profile";
  PositionType: "Front" | "Back";
};
const ImageUploadForm = ({
  formType,
  cardType,
  PositionType,
}: ImageUploadFormProps) => {
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

  return (
    <>
      <div className="flex items-center">
        <input
          className="border rounded p-2 w-full"
          type="file"
          accept=".jpg,.jpeg"
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
    </>
  );
};

export default ImageUploadForm;
