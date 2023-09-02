"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

import MenuItem from "./menuItem";
import { ContextAccess } from "../ContextAccess";
import { Switch } from "@/components/ui/switch";

const UserMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const { toggleLang } = ContextAccess();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-4">
        <div className="flex items-center mr-2">
          <Switch onClick={() => toggleLang()} />
          <h1 className="text-sm md:text-[1.1rem] font-semibold">
            &nbsp; हिंदी
          </h1>
        </div>
        <div onClick={toggleOpen} className="">
          <AiOutlineMenu />
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            max-lg:w-50 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                label="Donate"
                onClick={() => {
                  router.push("/Donation");
                  setIsOpen(false);
                }}
              />
              <MenuItem
                label="Our Members"
                onClick={() => {
                  router.push("/members");
                  setIsOpen(false);
                }}
              />
              <MenuItem
                label="Registration"
                onClick={() => {
                  router.push("/registration");
                  setIsOpen(false);
                }}
              />
              <MenuItem
                label="Events"
                onClick={() => {
                  router.push("/Events");
                  setIsOpen(false);
                }}
              />
              <MenuItem
                label="About us"
                onClick={() => {
                  router.push("/Aboutus");
                  setIsOpen(false);
                }}
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
