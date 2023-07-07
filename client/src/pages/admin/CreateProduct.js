import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const CreateProduct = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Admin - Create new product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">create prod</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;