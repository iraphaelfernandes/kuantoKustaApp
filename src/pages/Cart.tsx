import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import CartProductCard from "../components/CartProductCard";

export default function Cart() {


  const [loading, setLoading] = useState<Boolean>(false);
  const cartItems: any[] = useSelector((state: any) => state.user.cart);
  const [subtotals, setSubtotals] = useState<number[]>(Array(cartItems.length).fill(0))
  const totalValuePurchase: number = subtotals.reduce((a, b) => a + b, 0);

 

  const updateSubtotal = (index: number, value: number) => {

    const newSubtotals = [...subtotals];

    newSubtotals[index] = value;
    console.log( 'newSubtotals',newSubtotals)
    setSubtotals(newSubtotals);
  }

  console.log('subtotals',subtotals)

  
  console.log('totalValuePurchase->',totalValuePurchase)
  console.log('subtotals->',subtotals)

  useEffect(() => {
    setLoading(!loading);
  }, []);
 console.log('-> Cart Items',cartItems)
  return (
    <>
      <div className={loading ? "" : "hidden"}>
        <div className="h-400 bg-orange-300">
          <div className="py-12 xs:py-0">
            <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl sm:mb-45">
              <div className="md:flex ">
                <div className="w-full p-4 px-5 py-5">
                  <div className="md:grid md:grid-cols-3 gap-2 ">
                    <div className="col-span-2 p-5">
                      <h1 className="text-xl font-medium ">Shopping Cart</h1>
                      <div
                        className="overflow-y-auto"
                        style={{ height: "45vh", marginTop: "2vh" }}
                      >
                        {cartItems.map((product: any, index: number) => {
                          return (
                            <CartProductCard
                              key={index}
                              productName={product.title}
                              productImage={product.image}
                              productID={product.id}
                              quantity={1}
                              productPrice={product.price}
                              updateSubtotal={updateSubtotal.bind(null, index)}
                              />
                          );
                        })}
                      </div>
                      <div className="flex justify-between items-center mt-6 pt-6 border-t">
                        <Link to="/">
                          <div className="flex items-center">
                            {" "}
                            <img src="https://img.icons8.com/material-sharp/24/000000/chevron-left.png" />
                            <span className="text-md font-medium text-logogreen">
                              Continue Shopping
                            </span>{" "}
                          </div>
                        </Link>
                        <div className="flex justify-center items-end">
                          {" "}
                          <span className="text-sm font-medium text-gray-600 mr-1">
                            Subtotal:
                          </span>{" "}
                          <span className="text-lg font-bold text-gray-600">
                            {" "}
                            ${(totalValuePurchase).toFixed(2)}
                          </span>{" "}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={loading ? "hidden" : "h-500"}>
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "90vh" }}
        >
          <div className="flex">
            <div className="h-5 w-5 bg-logogreen rounded-full mr-1 animate-bounce"></div>
            <div className="h-5 w-5 bg-logogreen rounded-full mr-1 animate-bounce200"></div>
            <div className="h-5 w-5 bg-logogreen rounded-full animate-bounce400"></div>
          </div>
          <h1 className="text-2xl">Loading...</h1>
        </div>
      </div>
    </>
  );
}