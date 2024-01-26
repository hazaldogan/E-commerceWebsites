import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { rolesSuccess } from "../store/actions/globalActions";
import { signUp } from "../store/actions/userActions";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  const [formData, setFormData] = useState({});
  const roles = useSelector((state) => state.globalReducer.roles);
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedRole = watch("role");
  const confPass = watch("password");

  useEffect(() => {
    dispatch(rolesSuccess());
  }, []);

  const onSubmit = (data) => {
    if (data.role == "store") {
      setFormData({
        name: data.fullName,
        email: data.email,
        password: data.password,
        role_id: 1,
        store: {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.storeTax,
          bank_account: data.storeBank,
        },
      });
    } else {
      setFormData({
        name: data.fullName,
        email: data.email,
        password: data.password,
        role_id: data.role === "customer" ? 2 : 0,
      });
    }
  };

  useEffect(() => {
    console.log(formData);
    if (Object.keys(formData).length > 0) {
      dispatch(signUp(formData, history));
    }
  }, [formData]);

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center py-10">
        <div className="justify-center w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="text-start p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: {
                      value: true,
                      message: "Full name is required!",
                    },
                    minLength: {
                      value: 3,
                      message: "You must enter at least 3 characters!",
                    },
                  })}
                />
                {errors.fullName && (
                  <p role="alert" className="text-sm text-red-500">
                    *{errors.fullName.message}
                  </p>
                )}
              </div>
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
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-]).+$/,
                      message:
                        "Password needs to be min 8 character including numbers, lower case, upper case and special chars!",
                    },
                  })}
                />
                {errors.password && (
                  <p role="alert" className="text-sm text-red-500">
                    *{errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Please enter your confirm password!",
                    validate: (fieldValue) => {
                      return (
                        confPass === fieldValue || "Password does not match!"
                      );
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <p role="alert" className="text-sm text-red-500">
                    *{errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="role"
                >
                  Role
                </label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  id="role"
                  {...register("role")}
                >
                  <option selected value="customer">
                    Customer
                  </option>
                  {roles.map((role) => {
                    if (role.code !== "customer")
                      return (
                        <option value={role.code}>
                          {role.code[0].toUpperCase() + role.code.slice(1)}
                        </option>
                      );
                  })}
                </select>
              </div>
              {selectedRole === "store" && (
                <>
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900"
                      htmlFor="storeName"
                    >
                      Store Name
                    </label>
                    <input
                      id="storeName"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Store Name"
                      {...register("storeName", {
                        required: {
                          value: true,
                          message: "Store name is required!",
                        },
                        minLength: {
                          value: 3,
                          message:
                            "Store name should be at least 3 characters long!",
                        },
                      })}
                    />
                    {errors.storeName && (
                      <p role="alert" className="text-sm text-red-500">
                        *{errors.storeName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900"
                      htmlFor="storePhone"
                    >
                      Store Phone
                    </label>
                    <input
                      id="storePhone"
                      type="tel"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Store Phone"
                      {...register("storePhone", {
                        required: {
                          value: true,
                          message: "Store phone is required!",
                        },
                      })}
                    />
                    {errors.storePhone && (
                      <p role="alert" className="text-sm text-red-500">
                        *{errors.storePhone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900"
                      htmlFor="storeTax"
                    >
                      Store Tax ID
                    </label>
                    <input
                      id="storeTax"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="TXXXXVXXXXXX"
                      {...register("storeTax", {
                        required: {
                          value: true,
                          message: "Store tax number is required!",
                        },
                        pattern: {
                          value: /^T\d{4}V\d{6}$/,
                          message: "Please enter valid tax ID!",
                        },
                      })}
                    />
                    {errors.storeTax && (
                      <p role="alert" className="text-sm text-red-500">
                        *{errors.storeTax.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900"
                      htmlFor="storeBank"
                    >
                      Store Bank Account
                    </label>
                    <input
                      id="storeBank"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Store Bank Account"
                      {...register("storeBank", {
                        required: {
                          value: true,
                          message: "Store IBAN is required!",
                        },
                        pattern: {
                          value:
                            /^TR\d{2}\s?(\d{4}\s?){1}(\d{1})(\d{3}\s?)(\d{4}\s?){3}(\d{2})\s?$/,
                          message: "Please enter valid IBAN!",
                        },
                      })}
                    />
                    {errors.storeBank && (
                      <p role="alert" className="text-sm text-red-500">
                        *{errors.storeBank.message}
                      </p>
                    )}
                  </div>
                </>
              )}

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
