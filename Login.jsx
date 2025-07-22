import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side - Images */}
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <div className="grid grid-cols-2 gap-4 p-6">
          <img src="/image1.jpg" alt="Image 1" className="rounded-lg shadow-lg w-40 h-40 object-cover" />
          <img src="/image2.jpg" alt="Image 2" className="rounded-lg shadow-lg w-40 h-40 object-cover" />
          <img src="/image3.jpg" alt="Image 3" className="rounded-lg shadow-lg w-40 h-40 object-cover" />
          <img src="/image4.jpg" alt="Image 4" className="rounded-lg shadow-lg w-40 h-40 object-cover" />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account? <button className="text-blue-500" onClick={() => navigate("/signup")}>Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
