import { useEffect } from "react";
import axiosWithAuth from "../api/axiosWithAuth";

export default function OrderList() {
  useEffect(() => {
    axiosWithAuth()
      .get("/order")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
}
