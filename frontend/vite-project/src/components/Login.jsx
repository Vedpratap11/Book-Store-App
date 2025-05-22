import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm} from "react-hook-form"

const Login = () => {
  const [message, setMessage] = useState("");

  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const handleGoogleSignIn = () => {
    
  }

  return (
    <div className="text-white h-[calc(100vh-120px)] px-36">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-full max-w-sm mx-auto bg-amber-300 text-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Please login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>
            {message && (
              <p className="text-red-500 text-xs italic mb-3">{message}</p>
            )}
            <div>
              <button className="bg-slate-700 px-3 py-2 rounded text-white hover:bg-green-700 font-bold focus:outline">
                Login
              </button>
            </div>
          </form>
          <p className="align-baseline font-medium mt-4 text-sm">
            Don't have an account? Please{" "}
            <Link className="text-cyan-600" to="/register">
              Register
            </Link>{" "}
          </p>
          {/*google sign in */}
          <div className="mt-4">
            <button className="bg-blue-900 text-white py-2 px-3 rounded w-full flex flex-wrap items-center justify-center font-bold">
              <FaGoogle className="mr-2"/> Sign in with google
            </button>
          </div>
          <p className="mt-5 text-center text-gray-700 text-xs">&copy; 2025 Book Store. All rights reserved </p>
        </div>
      </div>
    </div>
  );
};


export default Login;
