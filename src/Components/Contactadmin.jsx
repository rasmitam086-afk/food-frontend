import { useEffect, useState } from "react";
import axios from "axios";

function Contactadmin() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all contacts
  const getAllContacts = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:8800/api/contact/get-all"
      );

      setContacts(response.data.data || []);
    } catch (error) {
      console.log("Get Contacts Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete contact
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8800/api/contact/delete/${id}`
      );

      alert("Contact deleted successfully");

      // Refresh list after delete
      getAllContacts();
    } catch (error) {
      console.log("Delete Contact Error:", error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Contact Messages
        </h1>
        <p className="text-gray-500 mt-1">
          Manage all customer contact messages
        </p>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Message</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="p-6 text-center">
                  Loading...
                </td>
              </tr>
            ) : contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact._id} className="border-b">
                  <td className="p-4">{contact.name}</td>
                  <td className="p-4">{contact.email}</td>
                  <td className="p-4">{contact.subject}</td>
                  <td className="p-4">{contact.message}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="p-6 text-center text-gray-500"
                >
                  No contact messages found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contactadmin;