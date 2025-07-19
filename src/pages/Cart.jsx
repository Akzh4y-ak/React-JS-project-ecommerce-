// src/pages/Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../rtk/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#f5f9fd] p-6 flex flex-col lg:flex-row gap-8 ">
      {/* Cart Items Section */}
      <div className="flex-1 space-y-6 mt-5">
        {cartItems.length === 0 ? (
          <div className="bg-white text-700 rounded-xl shadow p-6 text-lg font-medium mt-20 text-[#0e305e]">
            No items are add in Cart
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow-md relative"
            >
              {/* Remove Button at Top Right */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="absolute top-2 right-2 text-black-500 text-2xl font-bold hover:text-red-600"
                title="Remove item"
              >
                ×
              </button>

              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-4">
                  <img
                    src={item.imgUrl}
                    alt={item.productName}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.productName}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      ${item.price} × {item.quantity} ={" "}
                      <span className="font-semibold text-black">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-10">
                  <button
                    onClick={() => {
                      if (item.quantity <= 1) {
                        dispatch(removeFromCart(item.id));
                      } else {
                        dispatch(decreaseQty(item.id));
                      }
                    }}
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded text-lg font-semibold"
                  >
                    −
                  </button>

                  <span className="text-lg font-medium">{item.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded text-lg font-semibold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Summary Section */}
      <div className="bg-white p-6 rounded-xl w-full lg:w-[300px] shadow-md h-fit mt-18">
        <h2 className="text-lg text-[#0e305e] font-semibold mb-4 border-b pb-2">Cart Summary</h2>
        <p className="text-gray-600">
          Total Price:
          <span className="text-[#0e305e] font-bold ml-2">${total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}
