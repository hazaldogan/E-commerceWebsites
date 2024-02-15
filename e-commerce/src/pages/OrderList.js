import { useEffect, useState } from "react";
import axiosWithAuth from "../api/axiosWithAuth";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/order")
      .then((res) => {
        console.log(res);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const newOrders = orders.reverse();
  return (
    <div className="m-20 flex flex-col gap-4">
      <div className="mx-20 font-bold text-start">
        My Orders({orders.length} order)
      </div>
      {newOrders.map((item, i) => (
        <div className="mx-20 mt-2 shadow-md rounded-md flex items-center justify-around text-center gap-3 bg-gray-300">
          <p className="py-2 m-0">{orders.length - i}.</p>
          <p className="py-2 m-0">
            <span className="font-bold">Order No: </span>
            {item.id}
          </p>
          <p className="py-2 m-0">
            <span className="font-bold">Order Date: </span>
            {item.order_date
              .slice(0, 10)
              .replaceAll("-", "/")
              .split("/")
              .reverse()
              .toString()
              .replaceAll(",", "/")}
          </p>
          <p className="py-2 m-0">
            <span className="font-bold">Order Price: </span>
            {item.price}
          </p>
        </div>
      ))}
    </div>
  );
}
