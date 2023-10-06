import React from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import AdminMenu from "../../components/Layout/AdminMenu";

const ShowUsers = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Admin - View Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">Users</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShowUsers;
