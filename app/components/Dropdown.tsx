"use client";
import { useState, useEffect } from "react";
import State from "@/app/assets/State.json";
import axios from "axios";

interface State {
  state: string;
  districts: string[];
}

type DropdownProps = {
  selectedBranchId: number | null;
  setSelectedBranchId: React.Dispatch<React.SetStateAction<number | null>>;
};
const Dropdown = ({ selectedBranchId, setSelectedBranchId }: DropdownProps) => {
  const states: State[] = State.states;
  const [branchData, setBranchData] = useState<
    { BranchId: number; BranchName: string }[]
  >([]);

  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedBranch, setSelectedBranch] = useState<string>("");

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
    setSelectedDistrict("");
    setSelectedBranch("");
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDistrict(event.target.value);
    setSelectedBranch("");
  };

  const handleBranchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBranch(event.target.value);

    const findBranchId = branchData.find(
      (branch) => branch.BranchName === event.target.value
    );
    if (findBranchId) {
      setSelectedBranchId(findBranchId.BranchId);
    }
  };

  // Push the state and district to the backend and get the branch data from there
  useEffect(() => {
    setBranchData([]);
    if (selectedDistrict) {
      axios
        .get(
          `http://localhost:5000/branch?state=${selectedState}&dist=${selectedDistrict}`
        )
        .then((res) => {
          setBranchData((branchData) => [...branchData, ...res.data]);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedDistrict]);

  return (
    <div className="flex max-xl:flex-col gap-5 ml-10">
      <select
        className="w-[250px] rounded-md border px-3 py-2 text-lg font-semibold"
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

      {/* districts */}
      <div>
        <select
          className="w-[250px] rounded-md border px-3 py-2 text-lg font-semibold"
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
          className="w-[250px] rounded-md border px-3 py-2 text-lg font-semibold"
          name="districtDropdown"
          id="districtDropdown"
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
