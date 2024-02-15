import { useForm } from "react-hook-form";
import axiosWithAuth from "../../api/axiosWithAuth";
import { useEffect, useState } from "react";

export default function CartUpdateForm({ setUpdateCardModal, item }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });
  const [formData, setFormData] = useState({});
  console.log(item);
  useEffect(() => {
    axiosWithAuth()
      .put("user/card", formData)
      .then((res) => {
        console.log("response");
      })
      .catch((err) => {
        console.log(err);
      });
    setUpdateCardModal(false);
  }, [formData]);

  const onSubmit = (data) => {
    setFormData({
      id: item.id,
      card_no: data.card_no,
      expire_month: data.expire_month,
      expire_year: data.expire_year,
      name_on_card: data.name_on_card,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 p-10"
    >
      <div>
        <label
          htmlFor="card_no"
          className=" text-sm font-bold text-gray-700 tracking-wide"
        >
          Card No
        </label>
        <input
          id="card_no"
          value={item.card_no}
          className=" bg-white w-full text-base p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Enter your card no"
          {...register("card_no")}
        />
        <div className="mt-3">
          <div className="flex gap-2">
            <div>
              <label
                htmlFor="expire_month"
                className=" text-sm font-bold text-gray-700 tracking-wide"
              >
                Expire Month
              </label>
              <input
                id="expire_month"
                value={item.expire_month}
                className=" bg-white w-full text-base p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="MM"
                {...register("expire_month")}
              />
            </div>
            <div>
              <label
                htmlFor="expire_year"
                className=" text-sm font-bold text-gray-700 tracking-wide"
              >
                Expire Year
              </label>
              <input
                id="expire_year"
                value={item.expire_year}
                className=" bg-white w-full text-base p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="YYYY"
                {...register("expire_year")}
              />
            </div>
          </div>
          <div className="mt-3">
            <label
              htmlFor="name_on_card"
              className=" text-sm font-bold text-gray-700 tracking-wide"
            >
              Name On Card
            </label>
            <input
              id="name_on_card"
              value={item.name_on_card}
              className=" bg-white w-full text-base p-2 border border-gray-300 rounded-md"
              type="text"
              {...register("name_on_card")}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className="bg-slate-600 text-white px-4 py-2 rounded-lg text-sm"
      >
        Add
      </button>
    </form>
  );
}
