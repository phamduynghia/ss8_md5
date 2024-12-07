import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../apis/instant";
import { Button } from "antd";

export default function ProductDetail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({
    product_detail_id: id,
    quantity: 1,
  });
  const navigate = useNavigate();

  const addToCart = async () => {
    try {
      const response = await baseUrl.post(
        "api.myService.com/v1/users/cart/add",
        productDetail
      );
      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getProductDetail = async () => {
      try {
        if (id) {
          const response = await baseUrl.get(
            `api.myService.com/v1/products/${id}`
          );
        }
      } catch (error) {}
    };
    getProductDetail();
  }, [id]);
  return (
    <div>
      <Button onClick={addToCart} type="primary">
        Add to cart
      </Button>
    </div>
  );
}
