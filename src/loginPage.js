import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      serialNumber: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be 6 characters or longer').required('Required'),
      serialNumber: Yup.string().matches(/^[A-Za-z0-9]+$/, 'Invalid serial number').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to <span style="background: linear-gradient(90deg, #f7ff00, #db36a4); 
           -webkit-background-clip: text; 
           color: transparent>NextBarCode</span></h2>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
          </div>

          {/* <div>
            <input
              type="text"
              name="serialNumber"
              placeholder="Enter Serial Number"
              value={formik.values.serialNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.serialNumber && formik.errors.serialNumber ? <p>{formik.errors.serialNumber}</p> : null}
          </div> */}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
