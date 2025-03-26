import React, { useState } from "react";
import { request } from "../../helpers/axios_helper";

interface LoginFormProps {
  onLogin: (e: React.FormEvent, login: string, password: string) => void;
  onRegister: (
    e: React.FormEvent,
    firstName: string,
    lastName: string,
    login: string,
    password: string
  ) => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    login: "",
    password: "",
  });

  const onChangeHandler = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(e, formData.login, formData.password);
  };

  const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRegister(
      e,
      formData.firstName,
      formData.lastName,
      formData.login,
      formData.password
    );
  };

  return (
    <div className="bg-gray-950 h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl lg:text-5xl font-semibold text-white mb-6">
        Precious Metals Tracker
      </h1>

      <div className="bg-gray-800 p-10 rounded-xl w-11/12 lg:w-[26rem]">
        <div className="flex justify-between mb-6">
          <button
            className="w-1/2 py-2 text-center"
            style={{
              borderBottom:
                activeTab === "login" ? "2px solid #00CED1" : "none",
              color: activeTab === "login" ? "white" : "#9CA3AF",
            }}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>

          <button
            className="w-1/2 py-2 text-center"
            style={{
              borderBottom:
                activeTab === "register" ? "2px solid #00CED1" : "none",
              color: activeTab === "register" ? "white" : "#9CA3AF",
            }}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {activeTab === "login" ? (
          <form onSubmit={onSubmitLogin}>
            <div className="mb-4">
              <label className="block pb-1 text-white" htmlFor="login">
                Username
              </label>
              <input
                className="w-full px-2 py-2 bg-transparent border-white border-[1px] rounded text-white"
                name="login"
                type="text"
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block pb-1 text-white" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-2 py-2 bg-transparent border-white border-[1px] rounded text-white"
                name="password"
                type="password"
                onChange={onChangeHandler}
                required
              />
            </div>
            <button className="w-full bg-darkturqoise text-white py-2 rounded hover:bg-gray-700 duration-200">
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={onSubmitRegister}>
            <div className="mb-4">
              <label className="block pb-1 text-white" htmlFor="firstName">
                First Name
              </label>
              <input
                className="w-full px-2 py-2 bg-transparent border-white border-[1px] rounded text-white"
                name="firstName"
                type="text"
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block pb-1 text-white" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="w-full px-2 py-2 bg-transparent border-white border-[1px] rounded text-white"
                name="lastName"
                type="text"
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block pb-1 text-white" htmlFor="login">
                Username
              </label>
              <input
                className="w-full px-2 py-2 bg-transparent border-white border-[1px] rounded text-white"
                name="login"
                type="text"
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block pb-1 text-white" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-2 py-2 bg-transparent border-white border-[1px] rounded text-white"
                name="password"
                type="password"
                onChange={onChangeHandler}
                required
              />
            </div>
            <button className="w-full bg-darkturqoise text-white py-2 rounded hover:bg-gray-700 duration-200">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
