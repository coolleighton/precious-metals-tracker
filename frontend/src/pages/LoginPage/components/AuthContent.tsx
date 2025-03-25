import React, { useState, useEffect } from "react";
import { request } from "../../../helpers/axios_helper";

const AuthContent: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  console.log(data);

  useEffect(() => {
    request<string[]>("GET", "/messages")
      .then((response) => {
        console.log("API Response:", response);
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  return (
    <div className="flex flex-row w-full justify-center items-center h-[80vh]">
      <div className="bg-gray-800 p-10 w-64 flex flex-col justify-center items-center rounded-xl">
        {data.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default AuthContent;
