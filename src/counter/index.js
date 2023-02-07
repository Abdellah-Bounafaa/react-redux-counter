import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  decreaseCounter,
  increaseCounter,
  reset,
} from "../rtk/slices/counter-slice";

export const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);
  const dispatch = useDispatch();
  const [navLogin, setNavLogin] = useState(false);
  if (navLogin) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="counter-card">
        <h1>Counter</h1>
        <p>{counter}</p>
        <div className="btns">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => dispatch(increaseCounter(1))}
          >
            Increase
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => dispatch(decreaseCounter(1))}
          >
            Decrease
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => dispatch(reset())}
          >
            Reset
          </motion.button>
        </div>{" "}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="logout"
          onClick={() => setNavLogin(true)}
        >
          Log Out
        </motion.button>
      </div>
    </>
  );
};
