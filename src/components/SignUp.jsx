import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validatePassword = () => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must include at least one uppercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must include at least one number";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return "Password must include at least one special character (!@#$%^&*)";
    }
    return null;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    const passwordError = validatePassword();
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!agreeToTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      // Here you would add your registration logic
      // await createUserWithEmailAndPassword(email, password);
      // await updateProfile({ displayName: name });

      console.log("Sign up with:", name, email, password);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Clear form or redirect user after successful registration
    } catch (err) {
      setError("Failed to create account");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setIsLoading(true);
      setError("");

      // Here you would add Google sign up logic
      // await signUpWithGoogle();

      console.log("Sign up with Google");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect user after successful registration
    } catch (err) {
      setError("Failed to sign up with Google");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#272727]/90 text-white p-4">
      <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-lg bg-[#1a1a1a]">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Create an account
          </h1>
          <p className="mt-2 text-sm text-gray-400">Sign up to get started</p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-100/10 rounded-md">
            {error}
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            className="flex items-center justify-center w-full px-4 py-3 space-x-2 text-white transition-colors duration-300 border border-gray-600 rounded-md hover:bg-white/10"
          >
            <FcGoogle className="text-[#26C72D]" />
            <span>{isLoading ? "Please wait..." : "Sign up with Google"}</span>
          </button>

          <div className="flex items-center mt-6">
            <div className="flex-1 h-px bg-gray-600"></div>
            <p className="px-3 text-sm text-gray-400">or register with email</p>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          <form onSubmit={handleSignUp} className="mt-6 space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={handleNameChange}
                  className="w-full px-10 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26C72D] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
            </div>

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
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
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
              <p className="text-xs text-gray-400">
                Password must be at least 8 characters with uppercase, number,
                and special character
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirm-password" className="text-sm font-medium">
                Confirm password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="w-full px-10 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26C72D] focus:border-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="text-gray-400" />
                  ) : (
                    <FaEye className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
                className="w-4 h-4 mt-1 border-gray-600 rounded text-[#26C72D] focus:ring-[#26C72D]"
              />
              <label
                htmlFor="terms"
                className="block ml-2 text-sm text-gray-300"
              >
                I agree to the{" "}
                <a href="#" className="text-[#26C72D] hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#26C72D] hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center w-full px-4 py-3 text-white transition-colors duration-300 rounded-md bg-[#26C72D] hover:bg-[#1fa825] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26C72D]"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </button>
          </form>
        </div>

        <p className="mt-4 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-medium text-[#26C72D] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

// import { useState } from 'react';
// import { Eye, EyeOff, Mail, Lock, LogIn, UserPlus, ArrowRight, AlertCircle, ChevronLeft } from 'lucide-react';

// // Main component that controls which page is shown
// const AuthSystem = () => {
//   const [currentPage, setCurrentPage] = useState('signin'); // 'signin' or 'signup'

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       {currentPage === 'signin' ? (
//         <SignInPage onSwitchToSignUp={() => setCurrentPage('signup')} />
//       ) : (
//         <SignUpPage onSwitchToSignIn={() => setCurrentPage('signin')} />
//       )}
//     </div>
//   );
// };

// // Sign In Page Component
// const SignInPage = ({ onSwitchToSignUp }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     // Simple validation
//     if (!email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     // Here you would normally connect to an authentication service
//     console.log('Logging in with:', { email, password });
//   };

//   const handleGoogleSignIn = () => {
//     // Here you would connect to Google authentication
//     console.log('Signing in with Google');
//   };

//   return (
//     <div className="w-full max-w-md p-8 space-y-8 rounded-xl bg-[#272727]/90 shadow-2xl">
//       {/* Logo and Title */}
//       <div className="text-center">
//         <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-[#26C72D]/20 flex items-center justify-center">
//           <LogIn className="h-8 w-8 text-[#26C72D]" />
//         </div>
//         <h2 className="mt-6 text-3xl font-bold text-white">
//           Welcome back
//         </h2>
//         <p className="mt-2 text-sm text-gray-300">
//           Don't have an account?{" "}
//           <button
//             onClick={onSwitchToSignUp}
//             className="font-medium text-[#26C72D] hover:text-[#26C72D]/80 transition-colors"
//           >
//             Sign up
//           </button>
//         </p>
//       </div>

//       {/* Error message */}
//       {error && (
//         <div className="p-3 rounded-md bg-red-500/20 flex items-center gap-2 text-red-300">
//           <AlertCircle className="h-5 w-5" />
//           <span>{error}</span>
//         </div>
//       )}

//       {/* Google Sign In */}
//       <button
//         onClick={handleGoogleSignIn}
//         className="group relative w-full flex justify-center py-3 px-4 border border-gray-600 rounded-lg text-white hover:bg-gray-700/60 transition-colors"
//       >
//         <span className="flex items-center">
//           <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//             <path
//               fill="currentColor"
//               d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//               fill="#4285F4"
//             />
//             <path
//               fill="currentColor"
//               d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//               fill="#34A853"
//             />
//             <path
//               fill="currentColor"
//               d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//               fill="#FBBC05"
//             />
//             <path
//               fill="currentColor"
//               d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//               fill="#EA4335"
//             />
//           </svg>
//           Sign in with Google
//         </span>
//       </button>

//       <div className="relative">
//         <div className="absolute inset-0 flex items-center">
//           <div className="w-full border-t border-gray-600"></div>
//         </div>
//         <div className="relative flex justify-center text-sm">
//           <span className="px-2 text-gray-400 bg-[#272727]/90">Or continue with</span>
//         </div>
//       </div>

//       {/* Form */}
//       <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//         <div className="space-y-4">
//           {/* Email Input */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-300">
//               Email address
//             </label>
//             <div className="mt-1 relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Mail className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#26C72D] focus:border-transparent"
//                 placeholder="you@example.com"
//               />
//             </div>
//           </div>

//           {/* Password Input */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-300">
//               Password
//             </label>
//             <div className="mt-1 relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 autoComplete="current-password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full pl-10 pr-10 py-3 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#26C72D] focus:border-transparent"
//                 placeholder="••••••••"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="text-gray-400 hover:text-white focus:outline-none"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5" />
//                   ) : (
//                     <Eye className="h-5 w-5" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Forgot Password */}
//         <div className="flex items-center justify-end">
//           <div className="text-sm">
//             <a href="#" className="font-medium text-[#26C72D] hover:text-[#26C72D]/80 transition-colors">
//               Forgot your password?
//             </a>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button
//             type="submit"
//             className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-[#26C72D] hover:bg-[#26C72D]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26C72D] font-medium transition-colors"
//           >
//             <span className="flex items-center">
//               Sign in <ArrowRight className="ml-2 h-5 w-5" />
//             </span>
//           </button>
//         </div>
//       </form>

//       {/* Terms of Service */}
//       <p className="mt-6 text-xs text-center text-gray-400">
//         By signing in, you agree to our{" "}
//         <a href="#" className="text-[#26C72D] hover:underline">
//           Terms of Service
//         </a>{" "}
//         and{" "}
//         <a href="#" className="text-[#26C72D] hover:underline">
//           Privacy Policy
//         </a>
//         .
//       </p>
//     </div>
//   );
// };

// // Sign Up Page Component
// const SignUpPage = ({ onSwitchToSignIn }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     // Simple validation
//     if (!email || !password || !confirmPassword || !fullName) {
//       setError('Please fill in all fields');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // Here you would normally connect to an authentication service
//     console.log('Signing up with:', { email, password, fullName });
//   };

//   const handleGoogleSignUp = () => {
//     // Here you would connect to Google authentication for sign up
//     console.log('Signing up with Google');
//   };

//   return (
//     <div className="w-full max-w-md p-8 space-y-8 rounded-xl bg-[#272727]/90 shadow-2xl">
//       {/* Back Button */}
//       <div className="flex items-center">
//         <button
//           onClick={onSwitchToSignIn}
//           className="flex items-center text-gray-300 hover:text-white transition-colors"
//         >
//           <ChevronLeft className="h-5 w-5 mr-1" />
//           <span>Back to login</span>
//         </button>
//       </div>

//       {/* Logo and Title */}
//       <div className="text-center">
//         <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-[#26C72D]/20 flex items-center justify-center">
//           <UserPlus className="h-8 w-8 text-[#26C72D]" />
//         </div>
//         <h2 className="mt-6 text-3xl font-bold text-white">
//           Create an account
//         </h2>
//         <p className="mt-2 text-sm text-gray-300">
//           Already have an account?{" "}
//           <button
//             onClick={onSwitchToSignIn}
//             className="font-medium text-[#26C72D] hover:text-[#26C72D]/80 transition-colors"
//           >
//             Sign in
//           </button>
//         </p>
//       </div>

//       {/* Error message */}
//       {error && (
//         <div className="p-3 rounded-md bg-red-500/20 flex items-center gap-2 text-red-300">
//           <AlertCircle className="h-5 w-5" />
//           <span>{error}</span>
//         </div>
//       )}

//       {/* Google Sign Up */}
//       <button
//         onClick={handleGoogleSignUp}
//         className="group relative w-full flex justify-center py-3 px-4 border border-gray-600 rounded-lg text-white hover:bg-gray-700/60 transition-colors"
//       >
//         <span className="flex items-center">
//           <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//             <path
//               fill="currentColor"
//               d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//               fill="#4285F4"
//             />
//             <path
//               fill="currentColor"
//               d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//               fill="#34A853"
//             />
//             <path
//               fill="currentColor"
//               d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//               fill="#FBBC05"
//             />
//             <path
//               fill="currentColor"
//               d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//               fill="#EA4335"
//             />
//           </svg>
//           Sign up with Google
//         </span>
//       </button>

//       <div className="relative">
//         <div className="absolute inset-0 flex items-center">
//           <div className="w-full border-t border-gray-600"></div>
//         </div>
//         <div className="relative flex justify-center text-sm">
//           <span className="px-2 text-gray-400 bg-[#272727]/90">Or continue with</span>
//         </div>
//       </div>

//       {/* Form */}
//       <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//         <div className="space-y-4">
//           {/* Full Name Input */}
//           <div>
//             <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
//               Full name
//             </label>
//             <div className="mt-1 relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//               </div>
//               <input
//                 id="fullName"
//                 name="fullName"
//                 type="text"
//                 autoComplete="name"
//                 required
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#26C72D] focus:border-transparent"
//                 placeholder="John Doe"
//               />
//             </div>
//           </div>

//           {/* Email Input */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-300">
//               Email address
//             </label>
//             <div className="mt-1 relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Mail className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#26C72D] focus:border-transparent"
//                 placeholder="you@example.com"
//               />
//             </div>
//           </div>

//           {/* Password Input */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-300">
//               Password
//             </label>
//             <div className="mt-1 relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 autoComplete="new-password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full pl-10 pr-10 py-3 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#26C72D] focus:border-transparent"
//                 placeholder="••••••••"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="text-gray-400 hover:text-white focus:outline-none"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5" />
//                   ) : (
//                     <Eye className="h-5 w-5" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Confirm Password Input */}
//           <div>
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
//               Confirm Password
//             </label>
//             <div className="mt-1 relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type={showPassword ? "text" : "password"}
//                 required
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#26C72D] focus:border-transparent"
//                 placeholder="••••••••"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button
//             type="submit"
//             className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-[#26C72D] hover:bg-[#26C72D]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26C72D] font-medium transition-colors"
//           >
//             <span className="flex items-center">
//               Create account <UserPlus className="ml-2 h-5 w-5" />
//             </span>
//           </button>
//         </div>
//       </form>

//       {/* Terms of Service */}
//       <p className="mt-6 text-xs text-center text-gray-400">
//         By signing up, you agree to our{" "}
//         <a href="#" className="text-[#26C72D] hover:underline">
//           Terms of Service
//         </a>{" "}
//         and{" "}
//         <a href="#" className="text-[#26C72D] hover:underline">
//           Privacy Policy
//         </a>
//         .
//       </p>
//     </div>
//   );
// };

// export default AuthSystem;
