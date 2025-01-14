import  { useState } from 'react';

const Account = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call)
    console.log(formData);
    alert("Changes Saved (Simulated)"); // Just for demo
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-md"> {/* Added background, rounded corners, shadow */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Account</h2> {/* Darker text color */}

      <form onSubmit={handleSubmit} className="space-y-4"> {/* Added spacing between form elements */}
        <div>
          <h3 className="text-lg font-medium mb-2 text-gray-700">Account Details</h3> {/* Darker text color */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Responsive grid */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>
          <label htmlFor="displayName" className="block text-sm font-medium text-gray-600 mt-4">Display Name *</label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            required
          />
          <p className="text-sm text-gray-500 mt-1">This will be how your name will be displayed in the account section and in reviews</p>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mt-4">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 text-gray-700">Password</h3> {/* Darker text color */}
          <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-600">Old Password</label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          />
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600 mt-4">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          />
          <label htmlFor="repeatNewPassword" className="block text-sm font-medium text-gray-600 mt-4">Repeat New Password</label>
          <input
            type="password"
            id="repeatNewPassword"
            name="repeatNewPassword"
            value={formData.repeatNewPassword}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save changes
        </button>
      </form>
    </div>
  );
};

export default Account;