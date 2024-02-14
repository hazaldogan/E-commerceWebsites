import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser, faMobile } from "@fortawesome/free-solid-svg-icons";
import axiosWithAuth from "../api/axiosWithAuth";
import AddressForm from "../components/AddressForm";
import { useForm } from "react-hook-form";

export default function Order() {
  const { cart } = useSelector((store) => store.shopCartReducer);
  const history = useHistory();
  const [toggle, setToggle] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalCart, setShowModalCart] = useState(false);
  const [cards, setCards] = useState([]);
  const [updateCartModal, setUpdateCartModal] = useState(false);
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

  let total = cart
    .reduce((sum, item) => {
      return item.checked
        ? sum + item.count * item.product.price.toFixed(2)
        : sum.toFixed(2);
    }, 0)
    .toFixed(2);
  const cargo = 39.99;

  useEffect(() => {
    axiosWithAuth()
      .get("user/address")
      .then((res) => {
        setAddresses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosWithAuth()
      .get("user/card")
      .then((res) => {
        console.log(res);
        setCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (card) => {
    console.log("post data", card);
    axiosWithAuth()
      .post("user/card", card)
      .then((res) => {
        console.log("response", res);
      })
      .catch((err) => {
        console.log(err);
      });
    setShowModalCart(false);
  };

  return (
    <div className="m-10 flex justify-center items-start gap-4">
      <div role="tablist" className="tabs tabs-lifted w-full p-10">
        <a
          role="tab"
          className={toggle ? "tab tab-active font-bold" : "tab font-bold"}
          onClick={() => setToggle(true)}
        >
          Address Informations
        </a>
        <a
          role="tab"
          className={!toggle ? "tab tab-active font-bold" : "tab font-bold"}
          onClick={() => setToggle(false)}
        >
          Payment Choose
        </a>
        {toggle && (
          <div>
            <p className="border rounded-md my-4 text-xs text-start p-2 text-sky-700 font-bold">
              To shop with a corporate invoice, uncheck "Send My Invoice to the
              Same Address" and select your registered Corporate Invoice address
              as the invoice address.
            </p>
            <div className="border rounded-md p-4">
              <p className="font-bold text-start">Delivery Address</p>
              <div className="flex flex-wrap gap-3 flex-col">
                <div className="border rounded-md bg-gray-300 p-4">
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="lg"
                    className="text-sky-700 cursor-pointer"
                    onClick={() => setShowModal(true)}
                  />
                  {showModal && (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <AddressForm setShowModal={setShowModal} />
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  )}
                  <p className="text-sm">Add New Address</p>
                </div>
                {addresses.map((item) => (
                  <div className="border rounded-md bg-gray-300 p-4 flex flex-col">
                    <div className="flex justify-between">
                      <input name="address" type="radio" />
                      <a htmlFor="#" className="text-xs">
                        Edit
                      </a>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <div className="flex mt-3 gap-1">
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="text-sky-700"
                          />
                          <p className="text-xs">{`${item.name} ${item.surname}`}</p>
                        </div>
                        <div className="flex mt-3 gap-1">
                          <FontAwesomeIcon
                            icon={faMobile}
                            size="sm"
                            className="text-sky-700"
                          />
                          <p className="text-xs">{item.phone}</p>
                        </div>
                      </div>
                      <div className="text-sm text-start">{`${item.district} / ${item.city}`}</div>
                      <div className="text-sm text-start">{item.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {!toggle && (
          <div className=" m-4 flex-wrap">
            <div className="flex justify-between">
              <p className="font-bold">Card Informations</p>
              <p
                className="cursor-pointer underline text-sm"
                onClick={() => setShowModalCart(true)}
              >
                Pay With Another Card
              </p>
            </div>
            {showModalCart && (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            )}

            {cards.map((item) => (
              <div className="border rounded-md bg-gray-300 p-4 flex flex-col w-[50%] mb-2">
                <div className="flex justify-between">
                  <div>
                    <input name="card" type="radio" />
                    <label htmlFor="card">{item.name_on_card}</label>
                  </div>
                  <p className="text-xs cursor-pointer underline">Edit</p>
                </div>
                <div className=" flex flex-col items-start mt-2 ml-2">
                  <p>{item.card_no}</p>
                  <p>{`${item.expire_month}/${item.expire_year}`}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center items-start text-start gap-3 w-[25%] mt-10">
        <button
          className="border bg-sky-400 rounded-md text-white p-2 w-full"
          onClick={() => history.push("/order")}
        >
          Confirm Cart
        </button>
        <div className="shadow-md rounded-md p-3 w-full">
          <p className="font-bold text-gray-500">Order Summary</p>
          <div className=" flex justify-between">
            <p className="text-xs text-gray-500">Total Product</p>
            <p className="font-bold text-sm text-gray-500">{total}</p>
          </div>
          <div className=" flex justify-between">
            <p className="text-xs text-gray-500">Cargo</p>
            <p className="font-bold text-sm text-gray-500">{cargo}</p>
          </div>
          {total > 300 ? (
            <div className=" flex justify-between">
              <p className="w-[50%]  text-xs text-gray-500">
                Free shipping for your purchases of 300 or more
              </p>
              <p className="font-bold text-sm text-red-400">-39.99</p>
            </div>
          ) : (
            ""
          )}
          <hr />
          <div className=" flex justify-between">
            <p className="text-xs text-gray-500">Total</p>
            <p className="font-bold text-sm text-gray-500">
              {total < 300
                ? parseFloat(Number(total) + Number(cargo)).toFixed(2)
                : total}
            </p>
          </div>
        </div>
        <button
          className="border bg-sky-400 rounded-md text-white p-2 w-full"
          onClick={() => history.push("/order")}
        >
          Confirm Cart
        </button>
      </div>
    </div>
  );
}
