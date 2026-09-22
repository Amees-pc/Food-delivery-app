import React from "react";
import chickenBiryaniImg from "../../assets/chickenBiryani.png";
import gulabJamunImg from "../../assets/gulab-jamun.png";
import butterChickenImg from "../../assets/butter-chicken.png";

const Menu = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <main className="w-full mx-8 my-8 ">
        <h3 className="text-4xl font-bold ">Menu Management</h3>
        <p className="text-gray-600 mt-1">
          Add, edit or remove food items from your menu
        </p>

        <div className="flex gap-5 mt-6">
          <input
            type="text"
            placeholder="Search menu items..."
            className="bg-white w-80 px-5 py-3 border border-gray-300 rounded-lg outline-none text-sm"
          />

          <button className="bg-red-500 text-white px-7 py-3 rounded-lg text-sm hover:bg-red-600">
            Search
          </button>
        </div>

        <div className="flex w-full ml-2 mr-40 mt-10">
          <table className="table w-330 border rounded-2xl shadow-lg border-gray-200">
            <thead className=" rounded-2xl bg-gray-200">
              <tr>
                <th className=" px-3 py-3">#</th>
                <th className=" px-3 py-3">Image</th>
                <th className="px-3 ml-5 flex justify-start py-3">item</th>
                <th className="px-3  py-3">Category</th>
                <th className="px-3  py-3">Price</th>
                <th className="px-3  py-3">Avalablity</th>
                <th className="px-3  py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" text-center px-4 py-3">1</td>
                <td className=" text-center  px-4 py-3">
                  <img
                    src={chickenBiryaniImg}
                    alt=""
                    className="object-cover rounded-lg h-20 mx-auto w-20"
                  />
                </td>
                <td className="  px-3 py-3">
                  Chicken Biryani{" "}
                  <p className="text-xs mt-2 text-gray-500">
                    Aromatic basmati rice with tender <br /> chikcken and spices
                  </p>
                </td>
                <td className="text-center px-3 py-3">
                  {" "}
                  <span className=" my-5 px-4 py-2 h-7 w-20 text-red-700 font-bold rounded-xl bg-red-200">
                    Main Course
                  </span>
                </td>

                <td className="text-center  px-3 py-3">$2.00</td>
                <td className="text-center  px-3 py-3">Available</td>
                <td className="text-center  px-3 py-3">5</td>
              </tr>

              <tr>
                <td className=" text-center px-4 py-3">2</td>
                <td className=" text-center  px-4 py-3">
                  <img
                    src={butterChickenImg}
                    alt=""
                    className="object-cover rounded-lg h-20 mx-auto w-20"
                  />
                </td>
                <td className="  px-3 py-3">
                  Butter Chicken
                  <p className="text-xs mt-1 text-gray-500">
                    Soft and juicy, served warm{" "}
                  </p>
                </td>
                <td className="text-center px-3 py-3">
                  {" "}
                  <span className=" my-5 px-4 py-2 h-7 w-20 text-red-700 font-bold rounded-xl bg-red-200">
                    Main course
                  </span>
                </td>

                <td className="text-center  px-3 py-3">$2.00</td>
                <td className="text-center  px-3 py-3">Available</td>
                <td className="text-center  px-3 py-3">5</td>
              </tr>
              <tr>
                <td className=" text-center px-4 py-3">3</td>
                <td className=" text-center  px-4 py-3">
                  <img
                    src={gulabJamunImg}
                    alt=""
                    className="object-cover rounded-lg h-20 mx-auto w-20"
                  />
                </td>
                <td className="  px-3 py-3">
                  Gulab Jamun
                  <p className="text-xs mt-1 text-gray-500">
                    Soft and juicy, served warm{" "}
                  </p>
                </td>
                <td className="text-center px-3 py-3">
                  {" "}
                  <span className=" my-5 px-4 py-2 h-7 w-20 text-purple-700 font-bold rounded-xl bg-purple-200">
                    Desserts
                  </span>
                </td>

                <td className="text-center  px-3 py-3">$2.00</td>
                <td className="text-center  px-3 py-3">Available</td>
                <td className="text-center  px-3 py-3">5</td>
              </tr>
            </tbody>
          </table>

          <form className="w-150 border px-5 mx-10 mr-20 rounded-2xl shadow-lg border-gray-200">
            <h2 className="text-2xl my-5">Add New Menu Items</h2>
            <div className="">
              <label htmlFor="">
                Item Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="eg. Chicken Biryani"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 mt-1  text-sm outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                type="text"
                rows={3}
                placeholder="Enter the short description of the item"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 mt-1  text-sm outline-none"
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Menu;
