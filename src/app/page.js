"use client"
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const x = 101; // Static minimum value
  const y = 140; // Static maximum value

  const [number, setNumber] = useState(0);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * (y - x + 1)) + x; // Random number between x and y
    setNumber(random);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="text-center">
        <motion.h1
          className="text-6xl font-bold text-white mb-8 tracking-widest"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CAKE
        </motion.h1>
        <motion.p
          className="text-4xl font-bold text-white mb-8 tracking-widest"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Came As King for Everyone
        </motion.p>
        <motion.div
          className="text-9xl font-extrabold text-yellow-300 drop-shadow-md"
          key={number}
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {number}
        </motion.div>
        <motion.button
          className="mt-8 px-6 py-3 bg-white text-purple-700 font-semibold text-xl rounded-full shadow-lg hover:bg-purple-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={generateRandomNumber}
        >
          Generate
        </motion.button>
      </div>
    </div>
  );
}
