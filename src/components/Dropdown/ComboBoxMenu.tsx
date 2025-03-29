import { useState, useEffect } from "react";

export default function DropDownMenu({ isOpen }: { isOpen: boolean }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStack, setSelectedStack] = useState<string | null>(null);
  const [stack, setStack] = useState<{ id: number; name: string }[]>([]);

  // Simulated data (you can replace this with an API call)
  useEffect(() => {
    setStack([
      { id: 1, name: "React" },
      { id: 2, name: "Angular" },
      { id: 3, name: "Vue" },
      { id: 4, name: "Next.js" },
      { id: 5, name: "Svelte" },
    ]);
  }, []);

  // Filtered stack based on search input
  const filteredStack = searchTerm
    ? stack.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : stack; // Show all if no search input

  return (
    <div
      className={`relative h-[310px] bg-black text-white border border-black w-[230px] mt-2 p-4 flex flex-col  rounded-md shadow-green-600 shadow-md transition-all duration-300 transform ${
        isOpen
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
      }`}
    >
      <h1 className="mb-2">Pick Your Stack</h1>
      <div className="relative">
        {/* Search Input */}
        <input
          type="search"
          className="w-full border border-gray-400 p-1 rounded-md text-white bg-black"
          placeholder="Search..."
          value={selectedStack || searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setSelectedStack(null);
          }}
        />

        {/* Dropdown List: Shows All Items First, Filters on Search */}
        <ul className="absolute left-0 mt-2 w-full  z-10">
          {filteredStack.length > 0 ? (
            filteredStack.map((item) => (
              <li
                key={item.id}
                className="p-2 hover:bg-gray-200 cursor-pointer hover:text-black rounded-md"
                onClick={() => {
                  setSelectedStack(item.name);
                  setSearchTerm(""); // Reset input
                }}
              >
                {item.name}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No Results Found</li>
          )}
        </ul>
      </div>
    </div>
  );
}
