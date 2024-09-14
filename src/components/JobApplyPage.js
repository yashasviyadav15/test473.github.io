import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  name: yup.string().required('Name is required'),
  phone: yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  address: yup.string().required('Address is required'),
  dob: yup.date().required('Date of Birth is required'),
});

const JobApplyPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    // Send form data to email here
  };

  return (
    <div className="job-apply-page">
      <h1>Job Application</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="email" placeholder="Email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Name" {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Phone Number" {...register('phone')} />
          <p>{errors.phone?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Address" {...register('address')} />
          <p>{errors.address?.message}</p>
        </div>
        <div>
          <input type="date" {...register('dob')} />
          <p>{errors.dob?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobApplyPage;
