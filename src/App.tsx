import React, { useState } from 'react';
import { User, Github, Home, Info } from 'lucide-react';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');
  
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const tabs = [
    { name: 'Home', icon: Home },
    { name: 'Github', icon: Github },
    { name: 'About Us', icon: Info }
  ];

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', loginData);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', signupData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-sm border-b border-yellow-400/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <User className="h-8 w-8 text-yellow-400" />
              <span className="text-white text-xl font-bold">PegasusPages</span>
            </div>
            
            {/* Navigation Links */}
            <div className="flex space-x-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                
                if (tab.name === 'Github') {
                  return (
                    <a
                      key={tab.name}
                      href="https://github.com/ContactManagerCOP4331"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 text-white hover:bg-white/10 hover:text-yellow-400"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tab.name}</span>
                    </a>
                  );
                }
                
                return (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === tab.name
                        ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/25'
                        : 'text-white hover:bg-white/10 hover:text-yellow-400'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-6">
        <div className="w-full max-w-md">
          {/* Auth Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-1">
              <div className="bg-black rounded-xl p-6">
                <h1 className="text-2xl font-bold text-center text-white mb-2">
                  Welcome Back
                </h1>
                <p className="text-center text-gray-400 text-sm">
                  {isLogin ? 'Sign in to your account' : 'Create your new account'}
                </p>
              </div>
            </div>

            {/* Toggle Buttons */}
            <div className="p-6 pb-0">
              <div className="flex bg-black/30 rounded-xl p-1 mb-6">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    isLogin
                      ? 'bg-yellow-400 text-black shadow-lg transform scale-105'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Log In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    !isLogin
                      ? 'bg-yellow-400 text-black shadow-lg transform scale-105'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Forms */}
            <div className="px-6 pb-6">
              <div className="relative overflow-hidden">
                {/* Login Form */}
                <div className={`transition-all duration-500 ease-in-out ${
                  isLogin ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute inset-0'
                }`}>
                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        value={loginData.username}
                        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                        className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-200"
                        placeholder="Enter your username"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-200"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:from-yellow-300 hover:to-yellow-400 focus:ring-4 focus:ring-yellow-400/50 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-yellow-400/25"
                    >
                      Sign In
                    </button>
                  </form>
                </div>

                {/* Signup Form */}
                <div className={`transition-all duration-500 ease-in-out ${
                  !isLogin ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0'
                }`}>
                  <form onSubmit={handleSignupSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={signupData.firstName}
                          onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                          className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-200"
                          placeholder="First name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={signupData.lastName}
                          onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                          className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-200"
                          placeholder="Last name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={signupData.email}
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-200"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-200"
                        placeholder="Create a password"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:from-yellow-300 hover:to-yellow-400 focus:ring-4 focus:ring-yellow-400/50 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-yellow-400/25"
                    >
                      Create Account
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Secure authentication powered by modern web standards
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;