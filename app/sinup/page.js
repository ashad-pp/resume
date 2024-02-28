import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen bg-red-700 flex justify-center items-center">
      <div className="w-[400px] h-[500px] bg-zinc-600 rounded-lg">
        <h1 className="font-bold text-center text-3xl mt-6 text-white">
          Signup Form
        </h1>
        <div className="">
          <label htmlFor="Name" className="font-bold p-4">
            Name
          </label>
          <input type="text" className=" p-2 rounded-xl m-2" />
        </div>
        <div>
          <button className="text-lg font-bold bg-red-500 w-full rounded-xl p-1">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
