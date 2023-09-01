"use client";
import { Dispatch, useEffect } from "react";
type formType =
  // "Father" |
  // "Mother" |
  // "Student" |
  // "Volunteer"|
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
  useEffect(() => {
    console.log(formType);
    console.log(state[`${formType}Address`].Street)
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5 p-10">
        <div className="flex flex-col  gap-5">
          {/* Add */}
          <div className="flex gap-14 ">
            <span className="text-lg font-semibold">{`Add:`}</span>
            <input
              className="outline-none border-b-2 w-[30vw] border-slate-200"
              type="text"
              name="Add"
              placeholder="House No, Street Name/No, Landmark, etc."
              required
              value={state[`${formType}Address`].Street}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: `${formType}Address.Street`,
                  payload: e.target.value,
                })
              }
            />
          </div>

          {/* State */}
          {/* <div className="flex gap-12">
            <span className="text-lg font-semibold">{`State:`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="text"
              name="State"
              placeholder="State"
              required
              value={state[`${formType}Address`].State}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: `${formType}Address.State`,
                  payload: e.target.value,
                })
              }
            />
          </div> */}

          {/* District */}
          {/* <div className="flex gap-10">
            <span className="text-lg font-semibold">{`District`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="text"
              name="district"
              placeholder="District"
              required
              value={state[`${formType}Address`].District}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: `${formType}Address.District`,
                  payload: e.target.value,
                })
              }
            />
          </div> */}

          {/* City */}
          {/* <div className="flex gap-16">
            <span className="text-lg font-semibold">{`City`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="text"
              name="City"
              placeholder="City"
              required
              value={state[`${formType}Address`].City}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: `${formType}Address.City`,
                  payload: e.target.value,
                })
              }
            />
          </div> */}

          {/* Area */}
          {/* <div className="flex gap-16">
            <span className="text-lg font-semibold">{`Area`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="text"
              name="Area"
              placeholder="Area"
              required
              value={state[`${formType}Address`].Area}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: `${formType}Address.Area`,
                  payload: e.target.value,
                })
              }
            />
          </div> */}

          {/* Pincode */}
          {/* <div className="flex gap-9">
            <span className="text-lg font-semibold">{`Pincode`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="number"
              name={`${formType}Pincode`}
              placeholder="Pincode"
              required
              value={state[`${formType}Address`].Pincode}
              onChange={(e) =>
                dispatch({
                  type: "UPDATED_FIELD",
                  field: `${formType}Address.Pincode`,
                  payload: e.target.value,
                })
              }
            />
          </div> */}
        </div>

        {/* <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-full px-10 py-2"
          >
            Submit
          </button>
        </div> */}
      </div>
    </>
  );
};
