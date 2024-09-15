import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'
import Loader from './Loader'; // Import the Loader component
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object().shape({
  serialNumber: yup.string().required('Serial Number is required'),
});
const SerialNumberPage = () => {
  // const { register, handleSubmit } = useForm();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit =async (data) => {
    setLoading(true);
emailjs.send("service_5sqh7xc",'template_p1j11us',{
message:JSON.stringify(data, null, 2),
    },
    '6s4qy7AKhJQ_js512'
  ).then((res)=>{
setLoading(false);
alert('Serial Number Verified successfully!');
    navigate('/loginPage')
  }).catch((error)=>{
    console.log("rer")
  })
  };

  return (
    <div className="serial-number-page">
      <h1>Submit Serial Number</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="Serial Number" {...register('serialNumber')} />
          <p>{errors.serialNumber?.message}</p>
        </div>
        <button type="submit">
        {loading ? <Loader /> : 'Submit'}
          </button>
      </form>
    </div>
  );
};

export default SerialNumberPage;
