import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleAmountChange = (index, newAmount) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index ? { ...item, amount: newAmount } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="align-element py-20">
      {cartItems.length === 0 ? (
        <div className=" border-b border-base-300 pb-5 w-[1200px] mx-auto">
          <h1 className="text-3xl font-medium tracking-wider capitalize ml-56">Your cart is empty</h1>
        </div>
      ) : (
        <>
          <div className="border-b border-base-300 pb-5">
            <h2 className="text-3xl font-medium tracking-wider capitalize">
              Shopping cart
            </h2>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {cartItems.map((item, index) => (
              <div key={index} className="flex gap-4 border-b pb-4 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex gap-4">
                  <div>
                    <h3 className="text-xl font-bold capitalize">{item.title}</h3>
                    <p className="text-neutral-content">{item.color}</p>
                    <p className="text-xl">${item.price / 100}</p>
                  </div>
                  <div>
                    <p>
                      Amount:
                      <select
                        value={item.amount}
                        onChange={(e) =>
                          handleAmountChange(index, parseInt(e.target.value))
                        }
                        className="ml-2 border rounded px-2"
                      >
                        {[...Array(10).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                    </p>
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="mt-2 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
