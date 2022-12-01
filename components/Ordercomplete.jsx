import React from "react";
import Link from "next/link";

import { FaRegHandshake } from "react-icons/fa";
import { useStateContext } from "../context/StateContext";

const Ordercomplete = () => {
  const { setShowCart } = useStateContext();

  return (
    <div>
      <div className="empty-cart">
        <FaRegHandshake size={150} />
        <h3>Thank you for shopping with us...</h3>
        <Link href="/">
          <button
            type="button"
            onClick={() => setShowCart(false)}
            className="btn"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Ordercomplete;
