import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
} from "lucide-react";

const AddFoodPage = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [actualPrice, setActualPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");

  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      return alert("Please select an image");
    }

    const formData = new FormData();

    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("actualPrice", actualPrice);
    formData.append("discountPrice", discountPrice);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8800/api/food/create-food",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);

      // Reset Form
      setImage(null);
      setPreview("");
      setName("");
      setDescription("");
      setActualPrice("");
      setDiscountPrice("");

      // Redirect
      navigate("/admin/food");
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" min-h-screen py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl border border-gray-200 shadow-sm">

        {/* Header */}
        <div className="border-b px-6 py-5">
          <h2 className="text-xl font-semibold text-slate-800">
            Add Food
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Create a new food item
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Image */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Food Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="w-full border rounded-lg p-2.5"
                required
              />

              {preview && (
                <img
                  src={preview}
                  alt=""
                  className="w-20 h-20 mt-3 rounded-lg object-cover border"
                />
              )}
            </div>

            {/* Food Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Food Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Chicken Burger"
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>

              <textarea
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Food Description"
                className="w-full border rounded-lg p-2.5 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Actual Price */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Actual Price
              </label>

              <input
                type="number"
                value={actualPrice}
                onChange={(e) => setActualPrice(e.target.value)}
                placeholder="₹499"
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Discount Price */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Discount Price
              </label>

              <input
                type="number"
                value={discountPrice}
                onChange={(e) => setDiscountPrice(e.target.value)}
                placeholder="₹399"
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

          </div>

          {/* Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-medium"
            >
              {loading ? "Creating..." : "Create Food"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddFoodPage;