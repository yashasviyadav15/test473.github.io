import React from 'react';
import { useForm } from 'react-hook-form';

const SerialNumberPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    // Send serial number to email here
  };

  return (
    <div className="serial-number-page">
      <h1>Submit Serial Number</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="Serial Number" {...register('serialNumber')} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SerialNumberPage;
