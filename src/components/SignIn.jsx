import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      // Here you would add your authentication logic
      // await signInWithEmailAndPassword(email, password);

      console.log("Sign in with:", email, password, rememberMe);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Clear form or redirect user after successful login
    } catch (err) {
      setError("Invalid email or password");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError("");

      // Here you would add Google sign in logic
      // await signInWithGoogle();

      console.log("Sign in with Google");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect user after successful login
    } catch (err) {
      setError("Failed to sign in with Google");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#272727]/90 text-white p-4">
      <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-lg bg-[#1a1a1a]">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-400">Sign in to your account</p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-100/10 rounded-md">
            {error}
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="flex items-center justify-center w-full px-4 py-3 space-x-2 text-white transition-colors duration-300 border border-gray-600 rounded-md hover:bg-white/10"
          >
            <FcGoogle className="text-[#26C72D]" />
            <span>{isLoading ? "Please wait..." : "Sign in with Google"}</span>
          </button>

          <div className="flex items-center mt-6">
            <div className="flex-1 h-px bg-gray-600"></div>
            <p className="px-3 text-sm text-gray-400">or sign in with email</p>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          <form onSubmit={handleSignIn} className="mt-6 space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-10 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26C72D] focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <button
                  type="button"
                  className="text-sm text-[#26C72D] hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-10 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26C72D] focus:border-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400" />
                  ) : (
                    <FaEye className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 border-gray-600 rounded text-[#26C72D] focus:ring-[#26C72D]"
              />
              <label htmlFor="remember-me" className="block ml-2 text-sm">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center w-full px-4 py-3 text-white transition-colors duration-300 rounded-md bg-[#26C72D] hover:bg-[#1fa825] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26C72D]"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>

        <p className="mt-4 text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-[#26C72D] hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
