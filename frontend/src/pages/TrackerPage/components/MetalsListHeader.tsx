import React, { Dispatch, SetStateAction } from "react";
import { useState } from "react";

type Metal = {
  itemName: string;
  weight: number;
  metalType: string;
  purchaseDate: string;
  purchasePrice: number;
};

type MetalsListHeaderProps = {
  metals: Metal[];
  setMetals: Dispatch<SetStateAction<Metal[]>>;
};

function MetalsListHeader({ metals, setMetals }: MetalsListHeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMetal, setNewMetal] = useState({
    itemName: "",
    weight: "",
    metalType: "",
    purchaseDate: "",
    purchasePrice: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewMetal({ ...newMetal, [e.target.name]: e.target.value });
  };

  const [errorMessage, setErrorMessage] = useState("");

  const openMetalModal = () => {
    setErrorMessage("");
    setIsModalOpen(true);
  };

  const addMetal = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !newMetal.itemName ||
      !newMetal.weight ||
      !newMetal.metalType ||
      !newMetal.purchaseDate ||
      !newMetal.purchasePrice
    ) {
      setErrorMessage("Please fill in all fields before submitting!");
      return;
    }

    setMetals([
      ...metals,
      {
        ...newMetal,
        weight: parseFloat(newMetal.weight),
        purchasePrice: parseFloat(newMetal.purchasePrice),
      },
    ]);

    setIsModalOpen(false);

    setNewMetal({
      itemName: "",
      weight: "",
      metalType: "",
      purchaseDate: "",
      purchasePrice: "",
    });
  };

  return (
    <div>
      <div className="flex flex-row pb-4 justify-between items-center border-b-2">
        <div className="flex flex-row">
          <h1 className="text-5xl pr-4">Tracker Page</h1>
          <button
            onClick={openMetalModal}
            className="border-2 text-white px-4 py-2 rounded-xl hover:brightness-50 duration-150 cursor-pointer"
          >
            Add New Metal
          </button>
        </div>
        <h1 className="text-3xl pb-4">
          Current price (g) - Gold: £81.37 - Silver: £0.70
        </h1>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black flex items-center justify-center">
          <form
            onSubmit={addMetal}
            className=" p-6 rounded-lg shadow-lg w-96 bg-gray-900"
          >
            <h2 className="text-xl font-bold mb-4">Add Metal</h2>
            <p className="text-red-700 pb-4">{errorMessage}</p>
            <input
              type="text"
              name="itemName"
              placeholder="Item Name"
              value={newMetal.itemName}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (g)"
              value={newMetal.weight}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <select
              name="metalType"
              value={newMetal.metalType}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2 bg-gray-900"
              required
            >
              <option value="">Select Metal Type</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
            </select>
            <input
              type="date"
              name="purchaseDate"
              value={newMetal.purchaseDate}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="number"
              name="purchasePrice"
              placeholder="Purchase Price (£)"
              value={newMetal.purchasePrice}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />

            <div className="flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:brightness-150 duration-150 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={addMetal}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:brightness-150 duration-150 cursor-pointer"
              >
                Add Metal
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default MetalsListHeader;
