import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex max-sm:w-[100vw] w-[450px] h-fit flex-col gap-3 justify-center ">
      <Skeleton className="w-[450px] max-sm:w-[120vw] h-[270px] rounded-md" />
      <div className="flex justify-center items-center ">
        <Skeleton className="w-[270px] h-[25px] max-sm:w-[50vw] rounded-full" />
      </div>
      <Skeleton className="w-[300px] h-[20px] max-sm:w-[110vw] rounded-full" />
      <Skeleton className="w-[400px] h-[20px] max-sm:w-[110vw] rounded-full" />
      <Skeleton className="w-full max-sm:w-[110vw] h-[17px] rounded-full" />
      <Skeleton className="w-full max-sm:w-[85vw] h-[17px] rounded-full" />
      <Skeleton className="w-full max-sm:w-[110vw] h-[17px] rounded-full" />
      <Skeleton className="w-full max-sm:w-[85vw] h-[17px] rounded-full" />
      <Skeleton className="w-full max-sm:w-[110vw] h-[17px] rounded-full" />
    </div>
  );
};

export default Loading;
