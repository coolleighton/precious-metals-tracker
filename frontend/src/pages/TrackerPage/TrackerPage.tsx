import { useState } from "react";
import exampleMetals from "../../exampleMetals.json";
import MetalsList from "./components/MetalsList";
import MetalsListHeader from "./components/MetalsListHeader";

function TrackerPage() {
  const [metals, setMetals] = useState(exampleMetals);

  return (
    <div className="flex flex-row w-full justify-center items-center">
      <div className=" bg-gray-900 p-10 rounded-3xl my-10 w-[94%]">
        <MetalsListHeader
          metals={metals}
          setMetals={setMetals}
        ></MetalsListHeader>

        <MetalsList metals={metals} setMetals={setMetals}></MetalsList>
      </div>
    </div>
  );
}

export default TrackerPage;
