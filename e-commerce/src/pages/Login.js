import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/userActions";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  const dispatch = useDispatch();
  const history = useHistory();
  const [token, setToken] = useLocalStorage("token", "");

  const onSubmit = (data) => {
    dispatch(login(data, history, setToken));
  };

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center py-10">
        <div className="justify-center w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="text-start p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Login
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Email"
                  {...register("email", {
                    required: "Please enter your email!",
                    pattern: {
                      value:
                        /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email address!",
                    },
                  })}
                />
                {errors.email && (
                  <p role="alert" className="text-sm text-red-500">
                    *{errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Password"
                  {...register("password", {
                    required: "Please enter your password!",
                    min: 8,
                  })}
                />
                {errors.password && (
                  <p role="alert" className="text-sm text-red-500">
                    *{errors.password.message}
                  </p>
                )}
              </div>

              <button
                className="w-full text-white bg-sky-500 font-bold hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={!isValid}
                type="submit"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
