import { BiX } from "react-icons/bi";

export default function FormModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`w-full max-w-[400px] border border-white h-[330px] rounded-lg bg-black bg-opacity-80 text-white p-4 transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Create Project</h1>
          <button onClick={() => setIsOpen(false)}>
            <BiX
              size={25}
              className="hover:text-red-500 hover:cursor-pointer transform hover:rotate-90 transition-all duration-300"
            />
          </button>
        </div>

        <p className="text-[13px] text-gray-500">
          Deploy your project in one-click
        </p>

        <form className="mt-4">
          <div className="flex flex-col">
            <label className="font-bold">Project Name</label>
            <input
              type="text"
              className="w-full p-2 rounded-md text-black"
              placeholder="Project Name"
              onChange={((e) => e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Description</label>
            <textarea
              className="w-full p-2 rounded-md text-black"
              placeholder="Project Description"
              onChange={((e) => e.target.value)}
            />
          </div>
          <button className="mt-4 p-4 w-full rounded-lg bg-black text-white font-bold hover:bg-white hover:text-black transition-all duration-300">
            Deploy
          </button>
        </form>
      </div>
    </div>
  );
}
