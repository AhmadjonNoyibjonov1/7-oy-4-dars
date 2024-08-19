import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data.data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-8 mb-10">
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        
          <img
            src={product.attributes.image}
            alt={product.attributes.title}
            className="w-96 h-96 object-cover rounded-lg lg:w-1/2 flex mx-auto"
          />
        
        <div className="w-1/2">
          <h2 className="capitalize text-3xl font-bold">{product.attributes.title}</h2>
          <p className="text-xl text-neutral-content font-bold mt-2">{product.attributes.company}</p>
          <p className="mt-3 text-xl">${(product.attributes.price) / 100}</p>
          <p className="mt-6 leading-8">{product.attributes.description}</p>
          <div className="mt-6">
            <span className="text-md font-medium tracking-wider capitalize">Colors:</span>
            <div className="mt-2">
              {product.attributes.colors.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className="badge w-6 h-6 mr-2 border-2 border-secondary"
                ></div>
              ))}
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <span className="mr-4">Amount:</span>
            <select className="border rounded p-2">
              {[...Array(10).keys()].map(i => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-10">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
