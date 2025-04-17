// src/Login.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault(); // prevents page reload
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', {
        username,
        password,
      });
      const data = res.data;
      console.log('Login successful!', data);
      alert('Login successful!');

      localStorage.setItem('token', data.accessToken);
      if(data.user=='banker'){
        navigate('/dashboard');
      }else{
        navigate('/home')
      }

      
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Login failed');
      } else {
        setError('Something went wrong');
      }
      console.error('Login error:', err);
    }finally{
      setLoading(false)
    }
    
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

           {/* Error Message */}
           {error && (
            <div className="text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
            >
              {loading ? 'Logging in...' : 'Sign In'}
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
