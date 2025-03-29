import React from "react";

type AlertDialogProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function AlertDialog({ isOpen, setIsOpen }: AlertDialogProps) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out 
        ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <div
        className={`w-full max-w-[600px] border border-white h-[200px] bg-black rounded-[8px] p-5 transform transition-all duration-300 ease-in-out 
          ${isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
        
      >
        <div>
          <h1 className="font-bold text-[20px] text-slate-100">
            Are You Really Sure About This?
          </h1>
          <p className="text-slate-500">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </div>
        <div className="flex mt-4 gap-2 justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white border border-gray-400 px-4 py-1 rounded-[8px] hover:bg-slate-500 transition-all duration-300"
          >
            Cancel
          </button>
          <button className="bg-white px-4 py-1 rounded-[8px] hover:bg-black hover:text-white transition-all duration-300 hover:border-white border">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
