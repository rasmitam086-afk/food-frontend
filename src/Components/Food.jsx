import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Food = () => {

  const [foodData, setFoodData] = useState([]);

  const getAllData = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/food/get-all-food")
      setFoodData(response.data.foods)
    } catch (error) {
      console.log(error.message);
    }
  }


  useEffect(() => {
    getAllData()
  }, [])

  console.log(foodData);
  const navigate=useNavigate();
  const HandelDelete = async (id) => {

    try {
      const response = await axios.delete(`http://localhost:8800/api/food/delete/${id}`, {
        withCredentials: true
      })
      alert(response.data.message);
      getAllData();
    } catch (error) {
      console.log(error.message || error);
    }
  }






  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Food Management
          </h1>
          <p className="text-sm text-gray-500">
            Manage all food items
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-medium"onClick={()=> navigate("/admin/add-food")}>
          Add Food
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Image
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Description
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Actual Price
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Discount Price
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {foodData.map((food) => (
                <tr
                  key={food._id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-14 h-14 rounded-md object-cover"
                    />
                  </td>

                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {food.name}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {food.description}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    ₹{food.actualPrice}
                  </td>

                  <td className="px-6 py-4 text-sm text-green-600 font-medium">
                    ₹{food.discountPrice}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button className="px-3 py-1.5 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white"onClick={( )=> navigate(`/admin/edit/${food._id}`)}>
                        Edit
                      </button>

                      <button className="px-3 py-1.5 text-sm border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white"onClick={() => HandelDelete(food._id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t bg-gray-50 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Total Foods: {foodData.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Food;