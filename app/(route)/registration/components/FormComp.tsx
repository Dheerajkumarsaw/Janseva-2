import { Dispatch, useState } from "react";
import ImageUploadForm from "./ImageUploadForm";
/* eslint-disable @next/next/no-img-element */
type formType =
  // "Father" |
  // "Mother" |
  // "Student" |
  "Volunteer"|
  "Teacher";
type CardType =
  | "Aadhar"
  | "Voter"
  | "SchoolId"
  | "Pan"
  | "Passport"
  | "Driving"
  | "Profile";
interface FormCompProps {
  cardType?: CardType;
  formType: formType;
  isRequired: boolean;
  state: FormStateType;
  dispatch: Dispatch<FormAction>;
}
export const Name = ({
  formType,
  isRequired,
  state,
  dispatch,
}: FormCompProps) => {
  return (
    <>
      <span className="text-base font-semibold">{`Name:`}</span>
      {/* First Name */}
      <input
        className="outline-none border-b-2 border-slate-200"
        type="text"
        name={`${formType}FirstName`}
        placeholder="First Name"
        value={state[`${formType}FirstName`]}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: `${formType}FirstName`,
            payload: e.target.value,
          })
        }
        required={isRequired}
      />
      {/* <Middle Name */}
      <input
        className="outline-none border-b-2 border-slate-200"
        type="text"
        name={`${formType}MiddleName`}
        placeholder="Middle Name"
        value={state[`${formType}MiddleName`]}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: `${formType}MiddleName`,
            payload: e.target.value,
          })
        }
        required={isRequired}
      />
      <input
        className="outline-none border-b-2 border-slate-200"
        type="text"
        name={`${formType}LastName`}
        placeholder="Last Name"
        value={state[`${formType}LastName`]}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: `${formType}LastName`,
            payload: e.target.value,
          })
        }
        required={isRequired}
      />
    </>
  );
};
// ----------------------------------------------------------------------
export const PhoneNo = ({
  formType,
  isRequired,
  state,
  dispatch,
}: FormCompProps) => {
  return (
    <>
      {/* Phone no. */}
      <div className="flex gap-3">
        <span className="text-lg font-semibold">{`Phone:`}</span>
        <input
          className="redborder w-[30vw] border-b-2 border-slate-200"
          type="tel"
          name="FatherPhoneNo"
          pattern="[6-9]{1}[0-9]{9}"
          placeholder="phone no."
          required={isRequired}
          value={state[`${formType}PhoneNo`]}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: `${formType}PhoneNo`,
              payload: e.target.value,
            })
          }
        />
      </div>
      {/* Alt phone number */}
      {/* <div className="flex gap-9">
        <span className="text-base font-semibold">{`Alt Phone:`}</span>
        <input
          className="outline-none border-b-2 border-slate-200"
          type="number"
          name="Father Alt PhoneNo"
          placeholder="000-000-0000"
          required
        />
      </div> */}
    </>
  );
};
// ---------------------------------------------
export const BloodGroup = ({
  formType,
  isRequired,
  state,
  dispatch,
}: FormCompProps) => {
  return (
    <>
      <span className="text-base font-semibold">{`Blood Group:`}</span>
      <input
        className="outline-none border-b-2 border-slate-200"
        type="text"
        name="FatherPhoneNo"
        required={isRequired}
        placeholder="Your Blood Group"
        value={state[`${formType}BloodGroup`]}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: `${formType}BloodGroup`,
            payload: e.target.value,
          })
        }
      />
      <abbr title="Help us match you with donors when urgent needs arise.">
        <img src="/info.svg" alt="Info" width={20} />
      </abbr>
    </>
  );
};
// ---------------------------------------------
export const Email = ({
  formType,
  isRequired,
  state,
  dispatch,
}: FormCompProps) => {
  return (
    <>
      <span className="text-base font-semibold">{`Email:`}</span>
      <input
        className="outline-none border-b-2 border-slate-200"
        type="email"
        name="FatherEmail"
        placeholder="Example@gmail.com"
        required={isRequired}
        value={state[`${formType}Email`]}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: `${formType}Email`,
            payload: e.target.value,
          })
        }
      />
    </>
  );
};
// ---------------------------------------------------
export const Password = ({
  formType,
  isRequired,
  state,
  dispatch,
}: FormCompProps) => {
  return (
    <>
      <span className="text-base font-semibold">{`Password:`}</span>
      <input
        className="outline-none border-b-2 border-slate-200"
        type="password"
        name={`${formType}Password`}
        placeholder="Password"
        required={isRequired}
        value={state[`${formType}Password`]}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: `${formType}Password`,
            payload: e.target.value,
          })
        }
      />
    </>
  );
};
// ---------------------------------------------

// export const IdProf = ({ formType, state, dispatch }: FormCompProps) => {
//   const [selectedIdProof, setSelectedIdProof] = useState("Select One");
//   const handleIdProofChange = (event: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setSelectedIdProof(event.target.value);
//   };
//   return (
//     <>
//       <span className="text-lg font-semibold">{`ID Proof:`}</span>
//       <div className="flex flex-col gap-5">
//         {(formType === "Father" ||
//           formType === "Mother" ||
//           formType === "Teacher" ||
//           formType === "Volunteer") && (
//           <>
//             <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
//               <FrontBackImage
//                 cardType={"Adhar"}
//                 formType={formType}
//                 state={state}
//                 dispatch={dispatch}
//               />
//             </div>
//             <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
//               <FrontBackImage
//                 cardType={"Voter"}
//                 formType={formType}
//                 state={state}
//                 dispatch={dispatch}
//               />
//             </div>
//             <div className="flex gap-6 items-center ">
//               <select
//                 className="outline-none font-semibold border-b-2 border-slate-200"
//                 name="IdProof"
//                 id="IdProof"
//                 value={selectedIdProof}
//                 onChange={handleIdProofChange}
//               >
//                 <option value="Select One">Select One</option>
//                 <option value="PanCard">Pan Card</option>
//                 <option value="Driving License">Driving License</option>
//                 <option value="Passport">Passport</option>
//               </select>
//               {selectedIdProof === "Driving" ? (
//                 <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
//                   <FrontBackImage
//                     cardType={"Driving"}
//                     formType={formType}
//                     state={state}
//                     dispatch={dispatch}
//                   />
//                 </div>
//               ) : selectedIdProof === "Select One" ? (
//                 ""
//               ) : (
//                 <>
//                   <ImageUploadForm
//                     formType={formType}
//                     cardType={"Passport"}
//                     PositionType={"Front"}
//                     state={state}
//                     dispatch={dispatch}
//                   />
//                 </>
//               )}
//             </div>
//           </>
//         )}
//         {formType === "Student" && (
//           <>
//             <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
//               <FrontBackImage
//                 cardType={"Adhar"}
//                 formType={formType}
//                 state={state}
//                 dispatch={dispatch}
//               />
//             </div>
//             <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
//               <span className="font-semibold text-lg ">{"School Id"} Card</span>
//               <div className="ml-28">
//                 <ImageUploadForm
//                   formType={formType}
//                   cardType={"SchoolId"}
//                   PositionType={"Front"}
//                   state={state}
//                   dispatch={dispatch}
//                 />
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// };
//  ---------------------------------------------
export const FrontBackImage = ({
  cardType,
  formType,
  state,
  dispatch,
}: FormCompProps) => {
  return (
    <>
      {cardType === "Driving" ? (
        ""
      ) : (
        <span className="text-base font-semibold ">{cardType} Card</span>
      )}
      <div className="flex flex-col gap-5 ml-10">
        <div className="flex gap-10">
          <span className="font-semibold text-lg">Front</span>
          <ImageUploadForm
            formType={formType}
            cardType={cardType!}
            PositionType={"Front"}
            state={state}
            dispatch={dispatch}
          />
        </div>
        <div className="flex gap-10">
          <span className="font-semibold text-lg">Back</span>
          <ImageUploadForm
            formType={formType}
            cardType={cardType!}
            PositionType={"Back"}
            state={state}
            dispatch={dispatch}
          />
        </div>
      </div>
    </>
  );
};
