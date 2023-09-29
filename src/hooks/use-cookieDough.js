import React, { useState } from "react";
import cookieDough from "../constants/cookie-dough";
import { DISCOUNT_TABLE } from "@/constants/discount-table";

function useCookieDough() {
  const [cookieArray, setCookieArray] = useState(cookieDough);

  const getCookieDough = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cookieDough);
      }, 1000);
    });
  };

  const getPrice = (dozens, basePrice) => {
    // TODO: find the max discount rate.
    // TODO: If the "dozens" is not found in the DISCOUNT_TABLE, use the max discount rate

    const discountRate = DISCOUNT_TABLE[dozens];

    return price * (1 - discountRate);
  };

  return { getCookieDough, getPrice };
}

export default useCookieDough;
