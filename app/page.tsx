"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full">
      <div className=" border-blue-500 ">
        <div className="bg-red-200 w-full">this is header</div>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-200 h-64 w-full"
      >
        open
      </button>
      <div className="bg-blue-200 h-64">next part</div>{" "}
      <div className="bg-blue-200 h-64">next part</div>
      <div className="bg-red-200 h-64">next part</div>
      <div className="bg-blue-200 h-64">next part</div>
      <div className="bg-red-500 w-full ">this bottom part</div>
      {open && (
        <div className="w-[30%] bg-red-500 fixed right-0 top-0 h-full">
          sidebar
        </div>
      )}
    </div>
  );
}
