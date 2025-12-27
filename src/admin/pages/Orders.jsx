import { useEffect, useState } from "react";
import api from "../../api/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders")
       .then(res => setOrders(res.data))
       .catch(err => console.error(err));
  }, []);

  return (
    <>
      <div className="admin-header">
        <h1>Orders</h1>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Items</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Address</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>
                {order.items.map(item => (
                  <div key={item.productId?._id}>
                    {item.name} x {item.qty}
                  </div>
                ))}
              </td>
              <td>Rs. {order.totalAmount}</td>
              <td>{order.paymentMethod}</td>
              <td>{order.status}</td>
              <td>{order.address}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Orders;
