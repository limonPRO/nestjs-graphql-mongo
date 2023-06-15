import { useMutation, useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../query/query";
import { CREATE_ORDER } from "../mutation/mutation";
import { useNavigate } from "react-router-dom";



interface DataType {
  id: React.Key;
   name:string
  price: string;
}
export default function Home() {
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data)
  const [createOrderMutation] = useMutation(CREATE_ORDER, {
    onCompleted: () => {
      navigate("/orders");
     console.log("done")
    },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>Something Went Wrong</p>;
  

  return (
    <div className="flex justify-center">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        
      <>
      {data.products.length > 0 ? (
        <div className='row mt-4'>
          {data.products.map((product:any) => (
            <ul key={product._id}>
              {/* <li>{product.id}</li> */}
              <li>{product.name}</li>
             
              <button className="p-4 bg-black text-white" onClick={() =>
            createOrderMutation({
              variables: {
                productId: product._id,
                quantity: 1, // Set the desired quantity
              },
            })
          }>make order</button>
            </ul>
          ))}
        </div>
      ) : (
        <p>No Products</p>
      )}
    </>
      </div>
    </div>
  );
}
