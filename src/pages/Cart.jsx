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
    <div className="min-h-screen bg-[#f5f9fd] p-6 flex flex-col lg:flex-row gap-8">
      {/* Cart Items Section */}
      <div className="flex-1 space-y-6">
        {cartItems.length === 0 ? (
          <div className="bg-white text-gray-700 rounded-xl shadow p-6 text-lg font-medium">
            No items are add in Cart
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl flex items-center justify-between shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.imgUrl}
                  alt={item.productName}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.productName}</h3>
                  <p className="text-gray-600 mt-1">
                    ${item.price} × {item.quantity} ={" "}
                    <span className="font-semibold text-black">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
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

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 text-2xl font-bold ml-4"
                  title="Remove item"
                >
                  ×
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Summary Section */}
      <div className="bg-white p-6 rounded-xl w-full lg:w-[300px] shadow-md h-fit">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Cart Summary</h2>
        <p className="text-gray-600">
          Total Price:
          <span className="text-black font-bold ml-2">${total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}
