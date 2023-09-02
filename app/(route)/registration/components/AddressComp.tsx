"use client";
import { Dispatch, useEffect } from "react";
type formType =
  // "Father" |
  // "Mother" |
  // "Student" |
  "Volunteer"|
  "Teacher";

type AddressFormDetailsProps = {
  formType: formType;
  state: FormStateType;
  dispatch: Dispatch<FormAction>;
};
export const AddressFormDetails = ({
  formType,
  state,
  dispatch,
}: AddressFormDetailsProps) => {
  return (
    <>
      <div className="flex flex-col gap-5 pb-10">
        <div className="flex flex-col gap-5">
          {/* Add */}
          <div className="flex gap-14 ">
            <span className="text-lg font-semibold">{`Add:`}</span>
            <input
              className="outline-none border-b-2 w-[30vw] border-slate-200"
              type="text"
              name="Add"
              placeholder="House No, Street Name/No, Landmark, etc."
              required
              value={state[`${formType}AddressStreet`]}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: `${formType}AddressStreet`,
                  payload: e.target.value,
                })
              }
            />
          </div>

          {/* State */}
          <div className="flex gap-12">
            <span className="text-lg font-semibold">{`State:`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="text"
              name="State"
              placeholder="State"
              required
              value={state[`${formType}AddressState`]}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: `${formType}AddressState`,
                  payload: e.target.value,
                })
              }
            />
          </div>

          {/* District */}
          <div className="flex gap-10">
            <span className="text-lg font-semibold">{`District`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="text"
              name="district"
              placeholder="District"
              required
              value={state[`${formType}AddressDistrict`]}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: `${formType}AddressDistrict`,
                  payload: e.target.value,
                })
              }
            />
          </div>

          {/* City */}
          <div className="flex gap-16">
            <span className="text-lg font-semibold">{`City`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="text"
              name="City"
              placeholder="City"
              required
              value={state[`${formType}AddressCity`]}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: `${formType}AddressCity`,
                  payload: e.target.value,
                })
              }
            />
          </div>

          {/* Area */}
          <div className="flex gap-16">
            <span className="text-lg font-semibold">{`Area`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="text"
              name="Area"
              placeholder="Area"
              required
              value={state[`${formType}AddressArea`]}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: `${formType}AddressArea`,
                  payload: e.target.value,
                })
              }
            />
          </div>

          {/* Pincode */}
          <div className="flex gap-10">
            <span className="text-lg font-semibold">{`Pincode`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="number"
              name={`${formType}AddressPincode`}
              placeholder="Pincode"
              required
              value={state[`${formType}AddressPincode`]}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: `${formType}AddressPincode`,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
