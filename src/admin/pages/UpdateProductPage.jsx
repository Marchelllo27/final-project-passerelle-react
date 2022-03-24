import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BackDropSpinner from "../../shared/UIElements/BackDropSpinner";
import UpdateProductComponent from "../components/UpdateProductComponent";
//For Update
import sendHttpRequest from "../../utils/sendHttpRequest";

const UpdateProductPage = () => {
  const [loadedProductData, setLoadedProductData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id, product } = useParams();

  // FETCH CURRENT USER DATA TO FULFILL INPUTS
  useEffect(() => {
    setIsLoading(true);
    const fetchProduct = async () => {
      const response = await sendHttpRequest(
        `${process.env.REACT_APP_URL_API}/products/${product}/${id}`
      );
      setIsLoading(false);

      response.nutrients.forEach(obj => {
        response[obj.name] = obj.quantity;
      });
      delete response.nutrients;

      setLoadedProductData({
        ...response,
        product: product,
      });
    };

    fetchProduct().catch(err => {
      setIsLoading(false);
      alert(err.message);
    });
  }, [product, id]);

  console.log(loadedProductData);

  return (
    <>
      {isLoading && <BackDropSpinner />}
      {loadedProductData && (
        <UpdateProductComponent preloadedValues={loadedProductData} />
      )}
    </>
  );
};

export default UpdateProductPage;
