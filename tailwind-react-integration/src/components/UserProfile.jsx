// src/components/UserProfile.jsx  

function UserProfile() {  
  return (  
    <div className="bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">  
      <img   
        src="https://via.placeholder.com/150"   
        alt="User"   
        className="rounded-full w-24 md:w-36 h-24 md:h-36 mx-auto"  
      />  
      <h1 className="text-lg md:text-xl text-blue-800 my-4">جون دو</h1>  
      <p className="text-sm md:text-base text-gray-600">  
        مطور في شركة مثال. يحب كتابة الكود واستكشاف تقنيات جديدة.  
      </p>  
    </div>  
  );  
}  

export default UserProfile;  
