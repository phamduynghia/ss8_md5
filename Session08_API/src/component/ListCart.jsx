import React, { useEffect } from "react";
import { baseUrl } from "../apis/instant";

export default function ListCart() {
  useEffect(() => {
    const getListCart = async () => {
      try {
        const response = await baseUrl.get(
          "api.myService.com/v1/users/cart/list"
        );
        if (response) {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getListCart();
  }, []);
  return <div>ListCart</div>;
}
