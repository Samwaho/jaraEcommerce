"use server";
export const getAccessToken = async () => {
  try {
    const tokenResponse = await fetch(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
          ).toString("base64")}`,
        },
        next: { revalidate: 3000 },
      }
    );
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;
    return accessToken;
  } catch (error) {
    console.log("🚀 ~ getAccessToken ~ error:", error);
    return error;
  }
};

export const registerUrls = async () => {
  try {
    const access_token = await getAccessToken();
    const requestBody = {
      ShortCode: process.env.C2B_SHORTCODE,
      ResponseType: "Complete", // or 'Cancelled'
      ConfirmationURL: "http://192.168.0.100:3000/api/daraja/c2b/confirmation",
      ValidationURL: "http://192.168.0.100:3000/api/daraja/c2b/validation",
    };
    const response = await fetch(
      "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(requestBody),
      }
    );

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log("🚀 ~ registerUrls ~ error:", error);
  }
};

export const initiateC2BTransaction = async () => {
  try {
    const access_token = await getAccessToken();
    const requestBody = {
      ShortCode: process.env.C2B_SHORTCODE,
      CommandID: "CustomerPayBillOnline",
      Amount: "100",
      Msisdn: "254746373618", // Customer phone number
      BillRefNumber: "12345678", // Unique bill reference number
    };

    // Make a POST request to initiate the transaction
    const response = await fetch(
      "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(requestBody),
      }
    );

    // Parse response
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log("🚀 ~ initiateC2BTransaction ~ error:", error);
  }
};

