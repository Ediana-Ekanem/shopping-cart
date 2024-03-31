import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleCount = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;

    setCart([...tempArr]);
  };

  return (
    <>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Amazon handleCount={handleCount} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      <div className="relative top-0 ">
        {warning && (
          <div className="bg-red-600 text-white p-4 rounded-lg shadow-md z-20">
            <h1> Item is already added to your cart</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
