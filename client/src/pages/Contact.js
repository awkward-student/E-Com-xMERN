import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact-Shopista"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contact us"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 mb-4 text-white text-center">
            CONTACT US
          </h1>
          <p className="text-justify mt-2">
            Have any query or issue about any product feel free to call anytime.
            We are available 24x7.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.support@shopista.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 207 4360017
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
