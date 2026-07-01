import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";

const DetailsPage = () => {
  const { id } = useParams();

  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getSingleFood = async () => {
    try {
      const response = await axios.get(
        `https://food-backend-5r9i.onrender.com/api/food/get-single/${id}`
      );

      setFood(response.data.food);
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleFood();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen py-12 px-5">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Image */}

          <div className="p-6">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>

          {/* Right Content */}

          <div className="flex flex-col justify-center p-8">

            <div className="flex items-center gap-2 mb-4">
              <Star
                className="text-yellow-500 fill-yellow-500"
                size={20}
              />
              <span className="font-medium text-gray-600">
                Best Seller
              </span>
            </div>

            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              {food.name}
            </h1>

            <div className="flex items-center gap-5 mb-6">

              <h2 className="text-4xl font-bold text-red-600">
                ₹{food.discountPrice}
              </h2>

              <span className="text-2xl text-gray-400 line-through">
                ₹{food.actualPrice}
              </span>

            </div>

            <p className="text-gray-600 leading-8 text-lg mb-8">
              {food.description}
            </p>

            {/* Features */}

            <div className="grid grid-cols-2 gap-5 mb-10">

              <div className="bg-gray-100 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800">
                  Fresh Ingredients
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  Premium quality vegetables & spices.
                </p>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800">
                  Fast Delivery
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  Delivered hot & fresh within minutes.
                </p>
              </div>

            </div>

            <button
              onClick={() => navigate("/order")}
              className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 transition text-white py-4 rounded-xl font-semibold text-lg shadow-lg"
            >
              <ShoppingCart size={22} />
              Order Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DetailsPage;