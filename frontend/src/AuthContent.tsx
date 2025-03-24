import React, { useState, useEffect } from "react";
import { request } from "./helpers/axios_helper";

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
    <div>
      {/* {data.map((line, index) => (
        <p key={index}>{line}</p>
      ))} */}
      hello
    </div>
  );
};

export default AuthContent;
