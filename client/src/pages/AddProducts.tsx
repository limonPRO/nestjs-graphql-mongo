import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT } from '../mutation/mutation';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [createProduct] = useMutation(CREATE_PRODUCT, {
    onCompleted: () => {
      console.log("Product created successfully!");
       // Replace "/orders" with the appropriate route for your order page
    },
    onError: (error) => {
      console.error("Error creating product:", error);
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct({ variables: { name} });
      console.log("Product creation request sent");
      setName('');
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className='flex items-center justify-center h-[400px]'>
      <form onSubmit={onSubmit} className='bg-gray-100 p-4 rounded-md mt-4'>
        <div className='mb-4'>
          <label htmlFor='name' className='mr-2'>
            Name
          </label>
          <input
            type='text'
            className='border border-gray-300 rounded-md p-2'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
