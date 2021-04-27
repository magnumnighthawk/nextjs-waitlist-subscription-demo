export default async function handler(req, res) {
  if (req.method === "POST") {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { emailAddress, mobileNumber } = req.body;

    if (emailAddress && mobileNumber) {
      // For testing purposes any email that includes "alreadysubscribed@" will return an error
      if (emailAddress.includes("alreadysubscribed@")) {
        return res.status(400).json({
          status: "error",
          message: "You have already been added to the waiting list"
        });
      }
      return res.status(200).json({
        status: "success"
      });
    } else {
      return res.status(400).json({
        status: "error",
        message: "Email and mobile number must be provided"
      });
    }
  } else {
    return res.status(404).json({});
  }
}
