import {
  getAccessToken,
  initiateC2BTransaction,
  registerUrls,
} from "@/app/api/daraja/actions";
import React from "react";

const page = async () => {
  const access_token = await initiateC2BTransaction();
  console.log("🚀 ~ page ~ access_token:", access_token);
  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default page;
