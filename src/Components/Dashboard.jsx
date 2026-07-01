import axios from "axios";
import { useEffect, useState } from "react";
import {
  UtensilsCrossed,
  CalendarCheck,
  MessageSquare,
} from "lucide-react";

const Dashboard = () => {
  const [totalFoods, setTotalFoods] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  const [totalContacts, setTotalContacts] = useState(0);
  const [loading, setLoading] = useState(true);

  const getDashboardData = async () => {
    try {
      setLoading(true);

      const [foodRes, bookingRes, contactRes] = await Promise.all([
        axios.get("http://localhost:8800/api/food/get-all-food"),
        axios.get("http://localhost:8800/api/table/get-all"),
        axios.get("http://localhost:8800/api/contact/get-all"),
      ]);

      setTotalFoods(foodRes.data.foods?.length || 0);
      setTotalBookings(bookingRes.data.bookings?.length || 0);
      setTotalContacts(contactRes.data.data?.length || 0);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome to Restaurant Admin Panel
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Food Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">
                Total Food Products
              </p>

              <h2 className="text-4xl font-bold text-gray-800 mt-2">
                {loading ? "..." : totalFoods}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <UtensilsCrossed className="text-blue-600" size={32} />
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">
                Total Table Bookings
              </p>

              <h2 className="text-4xl font-bold text-gray-800 mt-2">
                {loading ? "..." : totalBookings}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CalendarCheck className="text-green-600" size={32} />
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">
                Total Contact Messages
              </p>

              <h2 className="text-4xl font-bold text-gray-800 mt-2">
                {loading ? "..." : totalContacts}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
              <MessageSquare className="text-purple-600" size={32} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;