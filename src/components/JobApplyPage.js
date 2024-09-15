import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from 'emailjs-com'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  name: yup.string().required('Name is required'),
  phone: yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  address: yup.string().required('Address is required'),
  dob: yup.date().required('Date of Birth is required'),
  qualification:yup.string().required('Qualifcation is required'),
  fathername:yup.string().required('Father Name is required'),
});

const JobApplyPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
emailjs.send("service_5sqh7xc",'template_2cq5v3r',{
to_name:data.name,
message:JSON.stringify(data, null, 2),
    },
    '6s4qy7AKhJQ_js512'
  ).then((res)=>{
setLoading(false);
alert('Application submitted successfully!');
    navigate('/loginPage')
  }).catch((error)=>{
    console.log("rer")
  })
// setLoading(true);
    
//     try {
//       // Simulate API call (replace this with your actual API call)
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       alert('Application submitted successfully!');
//       navigate('/loginPage')
//     } catch (error) {
//       console.error(error);
//       alert('Something went wrong!');
//     } finally {
//       setLoading(false);
//     }
  };

  return (
    <div className="job-apply-page">
      <h1>Job Application</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

      <div>
          <input type="text" placeholder="Name" {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Phone Number" {...register('phone')} />
          <p>{errors.phone?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Alternate Phone Number" 
          // {...register('alternatephone')} 
          />
          {/* <p>{errors.alternatephone?.message}</p> */}
        </div>
        <div>
          <input type="email" placeholder="Email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
       
        <div>
          <input type="text" placeholder="Father Name" {...register('fathername')} />
          <p>{errors.fathername?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Address" {...register('address')} />
          <p>{errors.address?.message}</p>
        </div>
        <div>
          <input type="date" {...register('dob')} />
          <p>{errors.dob?.message?"Date of birth is required":""}</p>
        </div>
      <div>
        <select {...register('qualification')}>
    <option value="">Select Qualification</option>
    <option value="highschool">High School</option>
    <option value="inter">Intermediate</option>
    <option value="graduate">Graduate</option>
  </select>
  <p>{errors.qualification?.message}</p>
</div>
        <button type="submit" disabled={loading}>
        {loading ? <Loader /> : 'Submit'}
          </button>
      </form>
    </div>
  );
};

export default JobApplyPage;
