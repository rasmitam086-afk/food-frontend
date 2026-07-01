import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-5">

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 120,
        }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 text-center"
      >
        {/* Animated Icon */}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: "spring",
          }}
          className="flex justify-center"
        >
          <div className="relative">

            <motion.div
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.5, 0.2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full bg-green-300"
            />

            <CheckCircle2
              size={90}
              className="relative text-green-600 fill-green-100"
            />

          </div>
        </motion.div>

        {/* Text */}

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold text-gray-800 mt-8"
        >
          Order Successful!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-500 mt-4 leading-7"
        >
          Thank you for your order.
          <br />
          Your delicious food is being prepared.
        </motion.p>

        {/* Status */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4"
        >
          <p className="text-green-700 font-semibold">
            Estimated Delivery
          </p>

          <h2 className="text-2xl font-bold text-green-600 mt-2">
            25 - 30 Minutes
          </h2>
        </motion.div>

        {/* Button */}

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => navigate("/menu")}
          className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition"
        >
          <ArrowLeft size={20} />
          Go Back
        </motion.button>

      </motion.div>
    </div>
  );
};

export default Order;