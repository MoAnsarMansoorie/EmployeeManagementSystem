import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 p-20 border-emerald-500 rounded-lg">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col justify-center items-center"
        >
          <input
            required
            className="text-white outline-none bg-transparent border-2 rounded-full border-emerald-400 text-xl py-3 px-3 font-medium placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="text-white outline-none bg-transparent border-2 rounded-full border-emerald-400 text-xl py-3 px-3 m-2 font-medium placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="text-white outline-none border-none border-2 rounded-full bg-emerald-400 text-xl py-2 px-24 m-2 placeholder:text-white">
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
