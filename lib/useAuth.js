import { useState } from "react";

export function useAuth() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    document.cookie = "userToken=exampleToken";
    // setIsLoggedIn(true);
  }

  function logout() {
    document.cookie = "userToken=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // setIsLoggedIn(false);
  }

  const isLoggedIn = (() => {
    if (typeof window === "object") {
      const userCookie = document.cookie
        .split("; ")
        ?.find((row) => row.startsWith("userToken="))
        ?.split("=")[1];

      if (userCookie && userCookie.length > 0) {
        return true;
      }
    }
    return false;
  })();

  return { login, logout, isLoggedIn };
}
