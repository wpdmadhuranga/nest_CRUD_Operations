import axios from "axios";
import React, { useState, useNavigate } from "react";
import { Navigate } from "react-router-dom";

export const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    phonenumber: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("api/auth/register", formData);
      alert("Registered Succesfully");
      Navigate("/home");
    } catch (error) {
      const message = error.response?.data?.message || "Registration failed.";
      alert(message);
      console.log("Register Error :", message);
    }
  };
  return (
    <div className="min-h-screen flex justify-center item-center bg-blue-100 ">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-6 text-black ">User Form</h1>

        <form
          className="flex flex-col item-center space-y-5"
          onSubmit={handleSubmit}
        >
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ml-16">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900 text-left"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Dinusha"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
              <lable
                htmlFor="Email"
                className="block text-sm/6 font-medium text-gray-900 text-left"
              >
                Email
              </lable>
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                <input
                  id="username"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="Dinusha@gmail.com"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
              <lable
                htmlFor="Address"
                className="block text-sm/6 font-medium text-gray-900 text-left"
              >
                Address
              </lable>
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                <input
                  id="address"
                  type="text"
                  name="address"
                  onChange={handleChange}
                  placeholder="Kegalle, SriLanka"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
              <lable
                htmlFor="Phone Number"
                className="block text-sm/6 font-medium text-gray-900 text-left"
              >
                Phone Number
              </lable>
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                <input
                  id="phonenumber"
                  type="text"
                  name="phoneNumber"
                  onChange={handleChange}
                  placeholder="(+94) XXXXXXXX"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-24 text-black bg-green-100 rounded-2xl hover:bg-blue-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
