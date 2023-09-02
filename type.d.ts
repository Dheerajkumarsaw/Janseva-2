type FormStateType = {
  // Father Details
  // FatherFirstName: string;
  // FatherMiddleName: string;
  // FatherLastName: string;
  // FatherPhoneNo: string;
  // FatherEmail: string;
  // FatherPassword: string;
  // FatherBloodGroup: string;
  // FatherAdharCardFront: File | null;
  // FatherAdharCardBack: File | null;
  // FatherVoterCardFront: File | null;
  // FatherVoterCardBack: File | null;
  // FatherPanCardFront?: File | null;
  // FatherPassportCardFront?: File | null;
  // FatherDrivingCardFront?: File | null;
  // FatherDrivingCardBack?: File | null;
  // FatherAddress: AddressType;

  // Mother Details
  // MotherFirstName: string;
  // MotherMiddleName: string;
  // MotherLastName: string;
  // MotherPhoneNo: string;
  // MotherEmail: string;
  // MotherBloodGroup: string;
  // MotherAdharCardFront: File | null;
  // MotherAdharCardBack: File | null;
  // MotherVoterCardFront: File | null;
  // MotherVoterCardBack: File | null;
  // MotherOptionalCardFront: File | null;
  // MotherOptionalCardBack?: File | null;

  // Student Details
  // StudentFirstName: string;
  // StudentMiddleName: string;
  // StudentLastName: string;
  // StudentPhoneNo?: string;
  // StudentEmail?: string;
  // StudentBloodGroup: string;
  // StudentAdharCardFront: string;
  // StudentAdharCardBack: string;
  // StudentSchoolIdCardFront: string;

  // Address Details
  // Add: string;
  // Area: string;
  // State: string;
  // District: string;
  // City: string;
  // Pincode: string;

  // Payment Details
  // PaymentAmount: string;
  // PaymentStatus: string;

  // Teacher Details
  TeacherFirstName: string;
  TeacherMiddleName: string;
  TeacherLastName: string;
  TeacherPhoneNo: string;
  TeacherEmail: string;
  TeacherPassword: string;
  TeacherBranchId: string;
  TeacherDOB: string;
  TeacherBloodGroup: string;
  TeacherSex: string;
  TeacherProfileCardFront: File | null;
  TeacherAadharCardFront: File | null;
  TeacherAadharCardBack: File | null;
  TeacherVoterCardFront: File | null;
  TeacherVoterCardBack: File | null;
  TeacherPanCardFront: File | null;
  TeacherPassportCardFront?: File | null;
  TeacherDrivingCardFront?: File | null;
  TeacherDrivingCardBack?: File | null;
  TeacherAddressStreet: string;
  TeacherAddressArea: string;
  TeacherAddressState: string;
  TeacherAddressDistrict: string;
  TeacherAddressCity: string;
  TeacherAddressPincode: number;
  TeacherAddressCountry: string;

  // Volunteer Details
  VolunteerFirstName: string;
  VolunteerMiddleName: string;
  VolunteerLastName: string;
  VolunteerPhoneNo: string;
  VolunteerEmail: string;
  VolunteerPassword: string;
  VolunteerBranchId: string;
  VolunteerDOB: string;
  VolunteerBloodGroup: string;
  VolunteerSex: string;
  VolunteerProfileCardFront: File | null;
  VolunteerAadharCardFront: File | null;
  VolunteerAadharCardBack: File | null;
  VolunteerVoterCardFront: File | null;
  VolunteerVoterCardBack: File | null;
  VolunteerPanCardFront: File | null;
  VolunteerPassportCardFront?: File | null;
  VolunteerDrivingCardFront?: File | null;
  VolunteerDrivingCardBack?: File | null;
  VolunteerAddressStreet: string;
  VolunteerAddressArea: string;
  VolunteerAddressState: string;
  VolunteerAddressDistrict: string;
  VolunteerAddressCity: string;
  VolunteerAddressPincode: number;
  VolunteerAddressCountry: string;
};

type FormAction = {
  type: string;
  field: string;
  payload: any; // Replace 'any' with the appropriate type
};

type AddressType = {
  Street: string;
  Area: string;
  State: string;
  District: string;
  City: string;
  Pincode: number;
  Country: string;
};

// ------------------------------

interface RequestBody {
  first_name: string;
  middle_name: string;
  last_name: string;
  phone_no: string;
  blood_group: string;
  DOB: string;
  sex: string;
  email: string;
  password: string;
  branch_id: number | null;
  profile_image: File;
  aadhar_front: File;
  aadhar_back: File;
  voter_front: File;
  voter_back: File;
  pan_card: File;
  optional_front?: File | null;
  optional_back?: File | null;

  street: string;
  city: string;
  state: string;
  district: string;
  area: string;
  pincode: number;
  country: string;
}
