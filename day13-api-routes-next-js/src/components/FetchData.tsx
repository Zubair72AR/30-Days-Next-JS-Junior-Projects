"use client";
import handler from "../app/api/data";

import { useEffect, useState } from "react";

interface Data {
  message: string;
}

const FetchData = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/../app/api/data"); // Ensure this is the correct path

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: Data = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default FetchData;
