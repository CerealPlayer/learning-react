import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const productId = params.productId;
  return (
    <section>
      <h1>{productId}</h1>
    </section>
  );
};

export default ProductDetails;