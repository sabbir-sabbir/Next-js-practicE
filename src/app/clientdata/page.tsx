"use client";
import { useEffect, useState } from "react";
import LoadingAnim from "./load";
export default function ClientData() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState("");

  // useEffect
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const userData = await response.json();
        setData(userData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoad(false);
      }
    }
    getUser();
  }, []);

  if (load) {
    return <LoadingAnim />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="w-full h-auto py-5 px-12 ">
        <div className="text-center text-orange-500 p-3 bg-gray-300">
          <h2 className="font-semibold text-2xl">Client User Data</h2>
        </div>
        {data.map((item, idx)=> {
             return (
                <div key={idx} className="border-b border-gray-200 py-4">
                  <div className="flex justify-between">
                    <div>ID: {item.id}</div>
                    <div>Name: {item.name}</div>
                  </div>
                  <div>Email: {item.email}</div>
                  <div>Address: {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</div>
                  <div>Phone: {item.phone}</div>
                  <div>Website: {item.website}</div>
                </div>
             )
        })

        }
      </div>
    </>
  );
}
