import {
  getCities,
  getDistrictsByCityCode,
  getNeighbourhoodsByCityCodeAndDistrict,
} from "turkey-neighbourhoods";
import { useDispatch } from "react-redux";
import { addAdress } from "../store/actions/shopCartActions";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import axiosWithAuth from "../api/axiosWithAuth";

export default function AddressForm(props) {
  const { setShowModal } = props;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      title: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
    mode: "onBlur",
  });

  const [cities, setCities] = useState(getCities());
  const [city, setCity] = useState();
  const [districts, setDistricts] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);

  const selectCity = (e) => {
    const selectedCity = cities.find((c) => c.name === e.target.value);
    setCity(selectedCity);
    setDistricts(getDistrictsByCityCode(selectedCity.code));
  };

  const selectDistrict = (e) => {
    const selectedDistrict = districts.find((d) => d === e.target.value);
    setNeighborhoods(
      getNeighbourhoodsByCityCodeAndDistrict(city.code, selectedDistrict)
    );
  };

  const onSubmit = (address) => {
    axiosWithAuth()
      .post("user/address", address)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setShowModal(false);
  };

  return (
    <form
      className="flex flex-col gap-2 p-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          htmlFor="title"
          className=" text-sm font-bold text-gray-700 tracking-wide"
        >
          Address Title
        </label>
        <input
          id="title"
          className=" bg-white w-full text-base p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Enter your address title"
          {...register("title", {
            required: { value: true, message: "Address title is required" },
            minLength: {
              value: 2,
              message: "You must enter at least 3 characters",
            },
            maxLength: {
              value: 35,
              message: "You can enter up to 35 characters.",
            },
          })}
        />
        {errors["title"] && (
          <p
            role="alert"
            className=" mt-1 text-sm font-bold text-red-600 tracking-wide"
          >
            {errors["title"]?.message}
          </p>
        )}
      </div>
      <div className="flex items-center gap-[10%]">
        <div className="w-1/2">
          <label
            htmlFor="name"
            className=" text-sm font-bold text-gray-700 tracking-wide"
          >
            Name
          </label>
          <input
            id="name"
            className="bg-white w-full text-base p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Enter your first name"
            {...register("name", {
              required: { value: true, message: "Name is required" },
              minLength: {
                value: 3,
                message: "You must enter at least 3 characters",
              },
              maxLength: {
                value: 35,
                message: "You can enter up to 35 characters.",
              },
            })}
          />
          {errors["name"] && (
            <p
              role="alert"
              className=" mt-1 text-sm font-bold text-red-600 tracking-wide"
            >
              {errors["name"]?.message}
            </p>
          )}
        </div>
        <div className="w-1/2">
          <label
            htmlFor="surname"
            className=" text-sm font-bold text-gray-700 tracking-wide"
          >
            Surname
          </label>
          <input
            id="surname"
            className="bg-white w-full text-base p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Enter your full name"
            {...register("surname", {
              required: { value: true, message: "Surname is required" },
              minLength: {
                value: 3,
                message: "You must enter at least 3 characters",
              },
              maxLength: {
                value: 35,
                message: "You can enter up to 35 characters.",
              },
            })}
          />
          {errors["surname"] && (
            <p
              role="alert"
              className=" mt-1 text-sm font-bold text-red-600 tracking-wide"
            >
              {errors["surname"]?.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-[10%]">
        <div className="w-1/2">
          <label
            htmlFor="phone"
            className=" text-sm font-bold text-gray-700 tracking-wide"
          >
            Phone
          </label>
          <input
            id="phone"
            className="bg-white w-full text-base p-2 border border-gray-300 rounded-md"
            type="tel"
            placeholder="+90XXXXXXXXXX"
            {...register("phone", {
              required: { value: true, message: "Store phone is required" },
              pattern: {
                value: /^((\+|00)90|0)?\s?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors["phone"] && (
            <p
              role="alert"
              className="mt-1 text-sm font-bold text-red-600 tracking-wide"
            >
              {errors["phone"]?.message}
            </p>
          )}
        </div>
        <div className="flex w-1/2 flex-col justify-center">
          <label className=" text-sm font-bold text-gray-700 tracking-wide">
            City
          </label>
          <select
            required
            className="bg-white w-full text-base p-2 border border-gray-300 rounded-md"
            {...register("city", {
              required: { value: true, message: "City is required" },
            })}
            onChange={selectCity}
          >
            <option
              disabled
              selected
              className="text-sm font-semibold text-gray-700 tracking-wide"
            >
              Select a city
            </option>
            {cities?.map((city) => (
              <option
                key={city.code}
                value={city.name}
                className="text-sm text-gray-700 tracking-wide"
              >
                {city.name}
              </option>
            ))}
          </select>
          {errors["city"] && (
            <p
              role="alert"
              className="mt-1 text-sm font-bold text-red-600 tracking-wide"
            >
              {errors["city"]?.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-[10%]">
        <div className="flex w-1/2 flex-col justify-center">
          <label className=" text-sm font-bold text-gray-700 tracking-wide">
            District
          </label>
          <select
            className="bg-white w-full text-base p-2 border border-gray-300 rounded-md"
            {...register("district", {
              required: { value: true, message: "District is required" },
            })}
            onChange={selectDistrict}
          >
            {" "}
            <option
              disabled
              selected
              className="text-sm font-semibold text-gray-700 tracking-wide"
            >
              Select a district
            </option>
            {districts?.map((district, idx) => (
              <option
                key={idx}
                value={district}
                className="text-sm text-gray-700 tracking-wide"
              >
                {district}
              </option>
            ))}
          </select>
          {errors["district"] && (
            <p
              role="alert"
              className="mt-1 text-sm font-bold text-red-600 tracking-wide"
            >
              {errors["district"]?.message}
            </p>
          )}
        </div>
        <div className="flex w-1/2 flex-col justify-center">
          <label className=" text-sm font-bold text-gray-700 tracking-wide">
            Neighborhood
          </label>
          <select
            className="bg-white w-full text-base p-2 border border-gray-300 rounded-md"
            {...register("neighborhood", {
              required: { value: true, message: "Neighborhood is required" },
            })}
          >
            {" "}
            <option
              disabled
              selected
              className="text-sm font-semibold text-gray-700 tracking-wide"
            >
              Select a neighborhood
            </option>
            {neighborhoods?.map((neighborhood, idx) => (
              <option
                key={idx}
                value={neighborhood}
                className="text-sm text-gray-700 tracking-wide"
              >
                {neighborhood}
              </option>
            ))}
          </select>
          {errors["neighborhood"] && (
            <p
              role="alert"
              className="mt-1 text-sm font-bold text-red-600 tracking-wide"
            >
              {errors["neighborhood"]?.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="address"
          className=" text-sm font-bold text-gray-700 tracking-wide"
        >
          Address Detail
        </label>
        <textarea
          id="address"
          className="min-h-20 bg-white w-full text-base p-2 border border-gray-300 rounded-md"
          type="textarea"
          placeholder="Enter your address detail"
          {...register("address", {
            required: { value: true, message: "Address detail is required" },
            minLength: {
              value: 3,
              message: "You must enter at least 3 characters",
            },
            maxLength: {
              value: 150,
              message: "You can enter up to 150 characters.",
            },
          })}
        />
        {errors["address"] && (
          <p
            role="alert"
            className="mt-1 text-sm font-bold text-red-600 tracking-wide"
          >
            {errors["address"]?.message}
          </p>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={!isValid}
          className="bg-slate-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          Add
        </button>
      </div>
    </form>
  );
}
