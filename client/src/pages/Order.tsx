import {  useQuery } from "@apollo/client";
import { GET_ORDERS} from "../query/query";

export default function Home() {
    const { loading, error, data } = useQuery(GET_ORDERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  

  return (
    <div className="flex justify-center items-center h-[600px]">
       <div>
    <h1 className="font-bold"> Your Orders</h1>
    {data.orders.map((order:any) => (
      <div key={order._id}>
        <h3>Order ID: {order._id}</h3>
        <p>Quantity: {order.quantity}</p>
        <p>Status: {order.status}</p>
        <hr />
      </div>
    ))}
  </div>
     
    </div>
  );
}
