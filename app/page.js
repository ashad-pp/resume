import { Input } from "postcss";
import React from "react";

const page = () => {
  return (
    <div className="w-full  bg-slate-600">
      <h1 className="text-center text-4xl font-bold text-white">
        Personal Information
      </h1>
      <div className="grid grid-cols-4 gap-3 mt-4 ">
        <div className="mb-1">
          <label className="block py-3" htmlFor="name">
            Your Name:
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
          />
        </div>
        <div className="mb-1">
          <label className="block py-3" htmlFor="name">
            Your C/O:
          </label>
          <input
            type="text"
            placeholder="Enter Your C/O"
            className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
          />
        </div>
        <div className="mb-1">
          <label className="block py-3" htmlFor="name">
            Your Email:
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
          />
        </div>
        <div className="mb-1">
          <label className="block py-3" htmlFor="name">
            Your Phone:
          </label>
          <input
            type="number"
            placeholder="Enter Your Phone"
            className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
          />
        </div>
        <div className="mb-1">
          <label className="block py-3" htmlFor="name">
            Your DOB:
          </label>
          <input
            type="date"
            placeholder="Enter Your DOB"
            className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
          />
        </div>
        <div className="mb-1">
          <label className="block py-3" htmlFor="name">
            Your Profile:
          </label>
          <input
            type="file"
            placeholder=""
            className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
          />
        </div>
        <div className="mb-1">
          <label className="block py-3" htmlFor="name">
            Your Name:
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
          />
        </div>
        <div className="mb-1">
          <label className="block py-3" htmlFor="name">
            About Yourself:
          </label>
          <input
            type="text"
            placeholder="Enter About Yourself"
            className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
          />
        </div>
                  
      </div>

      <div className="w-screen bg-slate-600 m-4">
        <h1 className="text-center text-4xl font-bold text-white">
          Educational Information
        </h1>
        <h3 className="text-center text-2xl font-bold text-white">
          HSLC(Matriculation/10th)
        </h3>
        <div className="grid grid-cols-4 gap-3 mt-4 ">
          <div className="mb-1">
            <label className="block py-3" htmlFor="name">
              Institute Name:
            </label>
            <input
              type="text"
              placeholder="Enter Your institute Name"
              className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
            />
          </div>
          <div className="mb-1">
            <label className="block py-3" htmlFor="name">
              Percentage:
            </label>
            <input
              type="text"
              placeholder="Enter Your percentage"
              className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
            />
          </div>
          <div className="mb-1">
            <label className="block py-3" htmlFor="name">
              Year:
            </label>
            <input
              type="email"
              placeholder="Enter Your Passout year"
              className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
            />
          </div>
          <div className="mb-1">
            <label className="block py-3" htmlFor="name">
              Board Name:
            </label>
            <input
              type="number"
              placeholder="Enter Your board name"
              className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
            />
          </div>
          <div className="">
            <h4 className=" text-xl font-bold text-white">
              HS(Higher Secondary/12th)
            </h4>
            <label className="block" htmlFor=" name">
              Institute Name :
            </label>
            <input
              type="Name"
              placeholder="Institute name"
              className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
            />
          </div>
          <div className="mb-1">
            <label className="block py-3" htmlFor="name">
              Percentage:
            </label>
            <input
              type="name"
              placeholder="Enter your percentage"
              className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
            />
          </div>
          <div className="mb-1">
            <label className="block py-3" htmlFor="name">
              Year:
            </label>
            <input
              type="text"
              placeholder="Enter Your passout year"
              className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
            />
          </div>
          <div className="mb-1">
            <label className="block py-3" htmlFor="name">
              Board Name:
            </label>
            <input
              type="text"
              placeholder="Enter your board name"
              className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
            />
          </div>
          <div className="w-screen bg-slate-600 m-4">
            <h1 className="text-center text-4xl font-bold text-white">
              Graduation
            </h1>
            <div className="grid grid-cols-4 gap-3 mt-4 ">
              <div className="mb-1">
                <label className="block py-3" htmlFor="name">
                  Institute Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your institute Name"
                  className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
                />
              </div>
              <div className="mb-1">
                <label className="block py-3" htmlFor="name">
                  CGPA:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your CGPA"
                  className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
                />
              </div>
              <div className="mb-1">
                <label className="block py-3" htmlFor="name">
                  Year:
                </label>
                <input
                  type="email"
                  placeholder="Enter Your passout year"
                  className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
                />
              </div>
              <div className="mb-1">
                <label className="block py-3" htmlFor="name">
                  University name:
                </label>
                <input
                  type="number"
                  placeholder="Enter Your University name"
                  className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
                />
              </div>
              <div className="mb-1">
                <h3 className=" text-white mb-0"> Others</h3>
                <label className="block py-3" htmlFor="name">
                  Institute Name:
                </label>
                <input
                  type="name"
                  placeholder="Enter Your Institute name"
                  className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
                />
              </div>
              <div className="mb-1">
                <label className="block py-3" htmlFor="name">
                  Year:
                </label>
                <input
                  type=""
                  placeholder="Enter your course name"
                  className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
                />
              </div>
              <div className="mb-1">
                <label className="block py-3" htmlFor="name">
                  Year:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your passout year"
                  className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700"
                />
              </div>
              {/* <div className="mb-1">
        <label className='block py-3' htmlFor="name">About Yourself:</label>
        <input type="text" placeholder="Enter About Yourself" className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700" />
    </div> */}
                        
            </div>
          </div>
                    
        </div>
      </div>
      <div className="w-screen bg-slate-600 m-4">
      <h1 className="text-center text-4xl font-bold text-white">Personal Information</h1>
    <div className="grid grid-cols-4 gap-3 mt-4 ">
    <div className="mb-1">
        <label className='block py-3' htmlFor="name">Your Name:</label>
        <input type="text" placeholder="Enter Your Name" className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700" />
    </div>
    <div className="mb-1">
        <label className='block py-3' htmlFor="name">Your C/O:</label>
        <input type="text" placeholder="Enter Your C/O" className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700" />
    </div>
    <div className="mb-1">
        <label className='block py-3' htmlFor="name">Your Email:</label>
        <input type="email" placeholder="Enter Your Email" className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700" />
    </div>
    <div className="mb-1">
        <label className='block py-3' htmlFor="name">Your Phone:</label>
        <input type="number" placeholder="Enter Your Phone" className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700" />
    </div>
    <div className="mb-1">
        <label className='block py-3' htmlFor="name">Your DOB:</label>
        <input type="date" placeholder="Enter Your DOB" className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700" />
    </div>
    <div className="mb-1">
        <label className='block py-3' htmlFor="name">Your Profile:</label>
        <input type="file" placeholder="" className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700" />
    </div>
    <div className="mb-1">
        <label className='block py-3' htmlFor="name">Your Address:</label>
        <input type="text" placeholder="Enter Your Address" className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700" />
    </div>
    <div className="mb-1">
        <label className='block py-3' htmlFor="name">About Yourself:</label>
        <input type="text" placeholder="Enter About Yourself" className="p-2 outline-none border border-gray-500 w-full rounded-lg bg-zinc-700" />
    </div>
          </div>
</div>
    </div>
    
  );
};
export default page;
