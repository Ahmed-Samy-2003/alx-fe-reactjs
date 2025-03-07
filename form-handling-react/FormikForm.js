// src/components/FormikForm.js  
import React from 'react';  
import { Formik, Form, Field, ErrorMessage } from 'formik';  
import * as Yup from 'yup';  

const validationSchema = Yup.object().shape({  
    username: Yup.string().required('Username is required'),  
    email: Yup.string().email('Invalid email').required('Email is required'),  
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),  
});  

const FormikForm = () => {  
    const handleSubmit = (values, { resetForm }) => {  
        // Simulate a successful form submission  
        console.log('User Registered:', values);  
        resetForm();  
    };  

    return (  
        <Formik  
            initialValues={{  
                username: '',  
                email: '',  
                password: '',  
            }}  
            validationSchema={validationSchema}  
            onSubmit={handleSubmit}  
        >  
            {() => (  
                <Form>  
                    <div>  
                        <label htmlFor="username">Username:</label>  
                        <Field type="text" id="username" name="username" />  
                        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />  
                    </div>  
                    <div>  
                        <label htmlFor="email">Email:</label>  
                        <Field type="email" id="email" name="email" />  
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />  
                    </div>  
                    <div>  
                        <label htmlFor="password">Password:</label>  
                        <Field type="password" id="password" name="password" />  
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />  
                    </div>  
                    <button type="submit">Register</button>  
                </Form>  
            )}  
        </Formik>  
    );  
};  

export default FormikForm;  
