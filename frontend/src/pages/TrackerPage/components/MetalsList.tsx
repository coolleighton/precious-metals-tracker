type Metal = {
  itemName: string;
  weight: number;
  metalType: string;
  purchaseDate: string;
  purchasePrice: number;
};

type MetalsListProps = {
  metals: Metal[];
  setMetals: React.Dispatch<React.SetStateAction<Metal[]>>;
};

function MetalsList({ metals, setMetals }: MetalsListProps) {
  const removeMetal = (indexToRemove: number) => {
    setMetals((prevMetals) =>
      prevMetals.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="mx-auto">
      <div className="p-2 rounded-lg grid grid-cols-13 gap-2 font-bold">
        <span>Item Name</span>
        <span>Weight (g)</span>
        <span>Metal Type</span>
        <span>Date Purchased</span>
        <span>Purchase Price (£)</span>
        <span>Purchase Spot Price (£)</span>
        <span>Current Spot Price (£)</span>
        <span>Spot Price Increase (%)</span>
        <span>Spot Price Profit (£)</span>
        <span>Premium Paid (£)</span>
        <span>Current Value with Premium (£)</span>
        <span>Total Profit (£)</span>
      </div>

      <div>
        {metals.map((metal, index) => (
          <div
            key={index}
            className="p-4 border-t-2 grid grid-cols-13 gap-2 mt-4 h-full"
          >
            <span>{metal.itemName}</span>
            <span>{metal.weight}g</span>
            <span>{metal.metalType}</span>
            <span>{metal.purchaseDate}</span>
            <span>£{metal.purchasePrice}</span>
            <span>£50</span>
            <span>£50</span>
            <span>£50</span>
            <span>£50</span>
            <span>£50</span>
            <span>£50</span>
            <span className="text-green-600">£50</span>
            <button
              onClick={() => removeMetal(index)}
              className="border-2 text-white px-2 py-1 h-full rounded-md hover:brightness-50 duration-150 cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MetalsList;
