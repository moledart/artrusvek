import React, { useState, useEffect } from "react";
//Redux
import { useSelector } from "react-redux";
import { selectUser } from "../reducers/userSlice";
//Firebase
import { auth } from "../firebase-config";
//Components
import Login from "./Login";
import AdminAside from "../components/AdminAside";
import AdminTableData from "../components/AdminTableData";
//Framer
import { motion } from "framer-motion";
import { PageAnimation } from "../components/PageAnimation";

const Admin = () => {
  //User and logout
  const user = useSelector(selectUser);
  const handleLogout = () => {
    auth.signOut();
  };

  const [selectedData, setSelectedData] = useState([]);

  return (
    <motion.main variants={PageAnimation} initial="hidden" animate="show" exit="exit">
      {user ? (
        <section className="admin_section">
          <div className="section_header">
            <h1>Добрый день, {user.name}!</h1>
            <button onClick={handleLogout} className="logout">
              Выйти
            </button>
          </div>
          <div className="cms_content">
            <AdminAside selectedData={selectedData} setSelectedData={setSelectedData} />
            <AdminTableData
              selectedData={selectedData}
              setSelectedData={setSelectedData}
            />
          </div>
        </section>
      ) : (
        <Login />
      )}
    </motion.main>
  );
};

export default Admin;
