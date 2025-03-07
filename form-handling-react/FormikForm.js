// src/formikForm.js  
import React from 'react';  
import { Formik, Form, Field, ErrorMessage } from 'formik';  
import * as Yup from 'yup';  

const RegistrationForm = () => {  
  const validationSchema = Yup.object({  
    username: Yup.string()  
      .min(3, 'Username must be at least 3 characters')  
      .max(15, 'Username must not exceed 15 characters')  
      .required('Required'),  
    email: Yup.string()  
      .email('Invalid email format')  
      .required('Required'),  
    password: Yup.string()  
      .min(6, 'Password must be at least 6 characters')  
      .required('Required'),  
  });  

  const handleSubmit = async (values, { setSubmitting }) => {  
    console.log('Submitted values:', values);  
    // Mock API call simulation  
    // await fetch('https://api.example.com/register', {  
    //   method: 'POST',  
    //   headers: {  
    //     'Content-Type': 'application/json',  
    //   },  
    //   body: JSON.stringify(values),  
    // });  
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
            <label htmlFor="username">Username:</label>  
            <Field type="text" name="username" />  
            <ErrorMessage name="username" component="div" className="error" />  
          </div>  
          <div>  
            <label htmlFor="email">Email:</label>  
            <Field type="email" name="email" />  
            <ErrorMessage name="email" component="div" className="error" />  
          </div>  
          <div>  
            <label htmlFor="password">Password:</label>  
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
