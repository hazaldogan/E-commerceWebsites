import { useForm } from "react-hook-form";
import axiosWithAuth from "../../api/axiosWithAuth";

export default function CartForm({ setShowModalCard }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      card_no: "",
      expire_month: "",
      expire_year: "",
      name_on_card: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (card) => {
    axiosWithAuth()
      .post("user/card", card)
      .then((res) => {
        console.log("response");
      })
      .catch((err) => {
        console.log(err);
      });
    setShowModalCard(false);
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
