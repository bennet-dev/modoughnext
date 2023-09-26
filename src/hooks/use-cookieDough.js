import React, { useState } from "react";
import cookieDough from "../constants/cookie-dough";

function useCookieDough() {
  const [cookieArray, setCookieArray] = useState(cookieDough);

  return { cookieArray };
}

export default useCookieDough;
