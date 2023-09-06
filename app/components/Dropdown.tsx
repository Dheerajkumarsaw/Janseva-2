"use client";
import { useState, useEffect } from "react";
import State from "@/app/assets/State.json";
import axios from "axios";

interface State {
  state: string;
  districts: string[];
}

type DropdownProps = {
  setGetNational?: React.Dispatch<React.SetStateAction<boolean>>;
  setGetState?: React.Dispatch<React.SetStateAction<boolean>>;
  setGetDistrict?: React.Dispatch<React.SetStateAction<boolean>>;
  setGetBranch?: React.Dispatch<React.SetStateAction<boolean>>;
  selectedBranchId: number | null;
  setSelectedBranchId: React.Dispatch<React.SetStateAction<number | null>>;
};
const Dropdown = ({
  setGetNational,
  setGetDistrict,
  setGetState,
  setGetBranch,
  selectedBranchId,
  setSelectedBranchId,
}: DropdownProps) => {
  const states: State[] = State.states;
  const [branchData, setBranchData] = useState<
    { BranchId: number; BranchName: string }[]
  >([]);

  const BranchDummyData = [
    {
      BranchId: 1,
      BranchName: "Bijwasan",
    },
    {
      BranchId: 2,
      BranchName: "Chhawala",
    },
    {
      BranchId: 3,
      BranchName: "Dwarka",
    },
    {
      BranchId: 4,
      BranchName: "Janakpuri",
    },
    {
      BranchId: 5,
      BranchName: "Vasant Kunj",
    },
    {
      BranchId: 6,
      BranchName: "Rohini",
    },
    {
      BranchId: 7,
      BranchName: "Pitampura",
    },
    {
      BranchId: 8,
      BranchName: "Nehru Place",
    },
    {
      BranchId: 9,
      BranchName: "Saket",
    },
    {
      BranchId: 10,
      BranchName: "Lajpat Nagar",
    },
  ];

  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedBranch, setSelectedBranch] = useState<string>("");

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
    setSelectedDistrict("");
    setSelectedBranch("");
    setGetNational && setGetNational(false);
    setGetState && setGetState(true);
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDistrict(event.target.value);
    setSelectedBranch("");
    setGetState && setGetState(false);
    setGetDistrict && setGetDistrict(true);
  };

  const handleBranchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBranch(event.target.value);
    setGetDistrict && setGetDistrict(false);
    setGetBranch && setGetBranch(true);

    const findBranchId = branchData.find(
      (branch) => branch.BranchName === event.target.value
    );
    if (findBranchId) {
      setSelectedBranchId(findBranchId.BranchId);
    }
  };

  // Push the state and district to the backend and get the branch data from there
  useEffect(() => {
    if (selectedState && selectedDistrict) {
      setBranchData(BranchDummyData);
    }

    // setBranchData([]);
    // if (selectedDistrict) {
    //   axios
    //     .get(
    //       `http://localhost:5000/branch?state=${selectedState}&dist=${selectedDistrict}`
    //     )
    //     .then((res) => {
    //       setBranchData((branchData) => [...branchData, ...res.data]);
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDistrict, selectedState]);

  return (
    <div className="grid grid-cols-3 gap-5 w-full max-md:grid-cols-1">
      <div>
        <select
          className="border rounded p-2 w-full"
          name="stateDropdown"
          id="stateDropdown"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.state} value={state.state}>
              {state.state}
            </option>
          ))}
        </select>
      </div>

      {/* districts */}
      <div>
        <select
          className="border rounded p-2 w-full"
          name="districtDropdown"
          id="districtDropdown"
          value={selectedDistrict}
          onChange={handleDistrictChange}
        >
          <option value="">Select District</option>
          {selectedState &&
            states
              .find((state) => state.state === selectedState)
              ?.districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
        </select>
      </div>

      {/* Branch */}
      <div>
        <select
          className="border rounded p-2 w-full"
          name="BranchDropdown"
          id="BranchDropdown"
          value={selectedBranch}
          onChange={handleBranchChange}
        >
          <option value="">Select Branch</option>
          {selectedDistrict &&
            branchData &&
            branchData.map((branch) => (
              <option key={branch.BranchId} value={branch.BranchName}>
                {branch.BranchName}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
