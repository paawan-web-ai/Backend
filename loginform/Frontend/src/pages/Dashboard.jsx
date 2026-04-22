import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12">
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome to Your Dashboard!
              </h1>
              <p className="text-blue-100 text-lg">
                You're successfully logged in
              </p>
            </div>

            <div className="px-8 py-12">
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Your Profile
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 w-32">Username:</span>
                    <span className="text-gray-800 font-medium">{user?.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 w-32">Email:</span>
                    <span className="text-gray-800 font-medium">{user?.email}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
                  <p className="text-green-100">Access your personalized content</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
                  <p className="text-yellow-100">Manage your settings</p>
                </div>
                <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
                  <p className="text-red-100">View your activity</p>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
