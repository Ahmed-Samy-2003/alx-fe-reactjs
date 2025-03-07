// formikForm.js  

import React from 'react';  
import { Formik, Form, Field, ErrorMessage } from 'formik';  
import * as Yup from 'yup';  

const RegistrationForm = () => {  
  // Validation schema using Yup  
  const validationSchema = Yup.object().shape({  
    username: Yup.string()  
      .min(3, 'Username must be at least 3 characters')  
      .max(15, 'Username must not exceed 15 characters')  
      .required('Username is required'),  
    email: Yup.string()  
      .email('Invalid email format')  
      .required('Email is required'),  
    password: Yup.string()  
      .min(6, 'Password must be at least 6 characters')  
      .required('Password is required'),  
  });  

  const handleSubmit = (values, { setSubmitting }) => {  
    console.log('Form data', values);  
    // You can handle the form submission here (e.g., call an API).  
    setSubmitting(false);  
  };  

  return (  
    <Formik  
      initialValues={{ username: '', email: '', password: '' }}  
      validationSchema={validationSchema}  
      onSubmit={handleSubmit}  
    >  
      {({ isSubmitting }) => (  
        <Form>  
          <div>  
            <label htmlFor="username">Username</label>  
            <Field type="text" name="username" />  
            <ErrorMessage name="username" component="div" className="error" />  
          </div>  

          <div>  
            <label htmlFor="email">Email</label>  
            <Field type="email" name="email" />  
            <ErrorMessage name="email" component="div" className="error" />  
          </div>  

          <div>  
            <label htmlFor="password">Password</label>  
            <Field type="password" name="password" />  
            <ErrorMessage name="password" component="div" className="error" />  
          </div>  

          <button type="submit" disabled={isSubmitting}>  
            Register  
          </button>  
        </Form>  
      )}  
    </Formik>  
  );  
};  

export default RegistrationForm;  
