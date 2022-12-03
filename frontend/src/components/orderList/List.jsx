import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getOrderApi } from "../../services/userApi/apiCall";
import Moment from "react-moment";
const List = () => {
  const [orderList, setOrderList] = useState([]);
  const fetchOrderList = async () => {
    const data = await getOrderApi(localStorage.getItem("user"));
    setOrderList(data.order);
  };
  useEffect(() => {
    fetchOrderList();
  }, []);
  return (
    <>
      <div className="flex flex-col my-5 px-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-black border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      number
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Order At
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderList.map((order, id) => {
                    return (
                      <>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {id + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {order.number}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <ul>
                              {order.product.map((product) => {
                                return (
                                  <>
                                    <li className="font-bold">{product.title}</li>
                                    <br></br>
                                  </>
                                );
                              }, [])}
                            </ul>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <Moment format="YYYY/MM/DD">
                              {order.createdAt}
                            </Moment>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
