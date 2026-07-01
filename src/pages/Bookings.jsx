import axios from "axios";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // =======================
  // Get All Bookings
  // =======================
  const getBookings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/api/table/get-all"
      );

      console.log(response.data);

      if (response.data.success) {
        setBookings(response.data.bookings || []);
      } else {
        setBookings([]);
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  // =======================
  // Delete Booking
  // =======================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `http://localhost:8800/api/table/delete/${id}`,
        {
          withCredentials: true,
        }
      );

      alert(response.data.message);

      setBookings((prev) =>
        prev.filter((booking) => booking._id !== id)
      );
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Booking Management
        </h1>

        <p className="text-sm text-gray-500">
          Manage all table bookings
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Phone</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Time</th>
                <th className="px-6 py-4 text-left">Persons</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-8"
                  >
                    Loading...
                  </td>
                </tr>
              ) : bookings.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-8 text-gray-500"
                  >
                    No Bookings Found
                  </td>
                </tr>
              ) : (
                bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium">
                      {booking.name}
                    </td>

                    <td className="px-6 py-4">
                      {booking.phone}
                    </td>

                    <td className="px-6 py-4">
                      {booking.date}
                    </td>

                    <td className="px-6 py-4">
                      {booking.time}
                    </td>

                    <td className="px-6 py-4">
                      {booking.person}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() =>
                          handleDelete(booking._id)
                        }
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t bg-gray-50">
          <p className="text-sm text-gray-600">
            Total Bookings :{" "}
            <span className="font-semibold">
              {bookings.length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bookings;