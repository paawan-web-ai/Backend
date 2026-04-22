import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-800 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-8">
              Welcome to MyApp
            </h1>
            <p className="text-xl text-purple-200 mb-12">
              Your all-in-one platform for managing your digital life
            </p>
            <div className="flex justify-center gap-6">
              <Link
                to="/login"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 transition"
              >
                Register
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Fast & Secure
                </h3>
                <p className="text-purple-200">
                  Built with modern security practices
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Easy to Use
                </h3>
                <p className="text-purple-200">
                  Intuitive interface for everyone
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Private
                </h3>
                <p className="text-purple-200">
                  Your data stays with you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
