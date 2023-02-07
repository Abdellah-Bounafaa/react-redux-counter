import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
export const Login = () => {
  const [nav, setNav] = useState(false);
  if (nav) {
    return <Navigate to={"counter"} />;
  }
  return (
    <div className="login-button">
      <motion.button
        onClick={() => setNav(true)}
        className="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Login
      </motion.button>
    </div>
  );
};
