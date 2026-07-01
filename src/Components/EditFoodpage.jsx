import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditFoodPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [actualPrice, setActualPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");

  const [loading, setLoading] = useState(false);

  // Get Single Food
  const getSingleFood = async () => {
    try {
      const response = await axios.get(
        `https://food-backend-5r9i.onrender.com/api/food/get-single/${id}`
      );

      const food = response.data.food;

      setName(food.name);
      setDescription(food.description);
      setActualPrice(food.actualPrice);
      setDiscountPrice(food.discountPrice);

      setPreview(food.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleFood();
  }, []);


  // Image Preview
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Update Food
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("actualPrice", actualPrice);
      formData.append("discountPrice", discountPrice);

      if (image) {
        formData.append("image", image);
      }

      // Debug
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      const response = await axios.put(
        `https://food-backend-5r9i.onrender.com/api/food/update/${id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);
      navigate("/admin/food");
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow border">

        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold">
            Edit Food
          </h2>
        </div>

        <form
          onSubmit={handleUpdate}
          className="p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Image */}
            <div>
              <label className="block mb-2 font-medium">
                Food Image
              </label>

              <input
                type="file"
                onChange={handleImage}
                className="w-full border rounded-lg p-2"
              />

              {preview && (
                <img
                  src={preview}
                  alt=""
                  className="w-24 h-24 rounded-lg object-cover mt-3 border"
                />
              )}
            </div>

            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">
                Food Name
              </label>

              <input
                type="text"
                className="w-full border rounded-lg p-2"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 font-medium">
                Description
              </label>

              <textarea
                rows="3"
                className="w-full border rounded-lg p-2"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              />
            </div>

            {/* Actual Price */}
            <div>
              <label className="block mb-2 font-medium">
                Actual Price
              </label>

              <input
                type="number"
                className="w-full border rounded-lg p-2"
                value={actualPrice}
                onChange={(e) =>
                  setActualPrice(e.target.value)
                }
              />
            </div>

            {/* Discount Price */}
            <div>
              <label className="block mb-2 font-medium">
                Discount Price
              </label>

              <input
                type="number"
                className="w-full border rounded-lg p-2"
                value={discountPrice}
                onChange={(e) =>
                  setDiscountPrice(e.target.value)
                }
              />
            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            {loading ? "Updating..." : "Update Food"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default EditFoodPage;                            