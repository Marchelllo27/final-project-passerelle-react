import React from "react";
import { useParams } from "react-router-dom";

const UpdateProductPage = props => {
  const { id } = useParams();
  return <p>Update Product with id: {id}</p>;
};

export default UpdateProductPage;
