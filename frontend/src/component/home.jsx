import React from "react";
import { Link } from "react-router-dom";
import { UserCard } from "./UserCard";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-blue-100 p-6">
        <div className="text-center mb-8">
          <Link
            className="w-24 p-2 bg-blue-400 text-black rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            to="/form "
          >
            Create new User
          </Link>
        </div>
        <UserCard />
      </div>
    </>
  );
};
export default Home;
