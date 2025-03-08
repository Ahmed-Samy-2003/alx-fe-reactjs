import React from 'react';  

const Contact = () => {  
  return (  
    <div>  
      <h1>Contact Us</h1>  
      <p>This is the contact page.</p>  
      {/* يمكنك إضافة المزيد من المحتوى أو نموذج الاتصال هنا */}  
    </div>  
  );  
};  

export default Contact;  
import React, { useState } from 'react';  

const Contact = () => {  
  // تعريف الحالة  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    message: ''  
  });  

  // دالة التعامل مع التغييرات في النموذج  
  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData({  
      ...formData,  
      [name]: value  
    });  
  };  

  // دالة التعامل مع تقديم النموذج  
  const handleSubmit = (e) => {  
    e.preventDefault();  
    // يمكنك التحقق من البيانات المرسلة هنا  
    console.log('Form submitted:', formData);  
    // يمكنك أيضًا إرسال البيانات إلى خادم أو خدمة هنا  
    alert('Message sent!');  
    setFormData({ name: '', email: '', message: '' }); // إعادة تعيين النموذج  
  };  

  return (  
    <div>  
      <h1>Contact Us</h1>  
      <form onSubmit={handleSubmit}>  
        <div>  
          <label htmlFor="name">Name:</label>  
          <input  
            type="text"  
            id="name"  
            name="name"  
            value={formData.name}  
            onChange={handleChange}  
            required  
          />  
        </div>  
        <div>  
          <label htmlFor="email">Email:</label>  
          <input  
            type="email"  
            id="email"  
            name="email"  
            value={formData.email}  
            onChange={handleChange}  
            required  
          />  
        </div>  
        <div>  
          <label htmlFor="message">Message:</label>  
          <textarea  
            id="message"  
            name="message"  
            value={formData.message}  
            onChange={handleChange}  
            required  
          />  
        </div>  
        <button type="submit">Send Message</button> {/* زر لإرسال النموذج */}  
      </form>  
    </div>  
  );  
};  

export default Contact;  
