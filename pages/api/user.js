// pages/api/user.js

import { parse as parseCookies } from "cookie";
import faker from "faker";

const loggedInUsers = {
  exampleToken: {
    emailAddress: faker.internet.email(),
    mobileNumber: faker.phone.phoneNumberFormat()
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const cookies = parseCookies(req.headers.cookie);
    const userData = loggedInUsers[cookies.userToken];

    if (userData) {
      return res.status(200).json(userData);
    } else {
      return res.status(400).json({
        status: "error",
        message: "Requires authentication"
      });
    }
  } else {
    return res.status(404).json({});
  }
}
