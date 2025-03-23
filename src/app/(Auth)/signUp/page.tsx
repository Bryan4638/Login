"use client"
import React, { useState } from "react";
import { useSideBarStore } from "../../store/useSideBarStore";
import { Input } from "../../components/ui/Input";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { Divider } from "../../components/ui/Divider";
import useToastStore from "../../store/useToastStore";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {isSidebarOpen} = useSideBarStore()

  const {showToast} = useToastStore()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("success", "User successfully registered", "Success!")
    console.log({ email, password, agreedToTerms });
  };

  return (
    <main className="flex-grow flex justify-center items-center py-2 px-5">
      <div
        className={`flex-1 transition-transform duration-300 ease-in-out w-full max-w-md  min-w-xs shadow-2xl dark:shadow-[0_0_20px_20px_rgba(46,46,46,0.3)]  rounded-3xl ${
          isSidebarOpen ? "translate-x-80" : "translate-x-0"
        }`}
      >
        <div className=" bg-white rounded-3xl dark:shadow-inner dark:shadow-neutral-700 p-8 pb-3 dark:bg-neutral-800">
          <h2 className="text-lg font-semibold text-center mb-3">Sign Up</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-7 text-xs">
            Choose a convenient method of registration
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              icon={
                <Mail
                  className="dark:text-gray-400 text-neutral-600"
                  size={18}
                />
              }
              type="email"
              placeholder="Enter your email or phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              icon={
                <Lock
                  className="text-neutral-600 dark:text-gray-500"
                  size={18}
                />
              }
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              endIcon={
                <button
                  type="button"
                  name="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-neutral-800 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />

            <div className="flex items-center justify-center pb-2 pt-3">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-3.5 w-3.5 text-orange-500 focus:ring-orange-400 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 accent-orange-500"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                />
              </div>
              <div className="ml-2 text-xs">
                <label
                  htmlFor="terms"
                  className="text-gray-700 dark:text-gray-300 text-xs"
                >
                  I agree with{" "}
                  <Link
                    href="/terms"
                    className="font-bold text-gray-900 dark:text-gray-200 hover:underline"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-bold text-gray-900 dark:text-gray-200 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>

            <button
              type="submit"
              name="submit"
              className="w-full py-1.5 px-4 h-10 bg-orange-600 hover:bg-orange-500 dark:bg-orange-700 dark:hover:bg-orange-600 shadow-inner shadow-[#f75b19] text-white font-medium rounded-full text-sm transition-colors duration-200"
            >
              Sign Up
            </button>
          </form>

          <Divider text="OR" className="my-2" />

          <div className="space-y-2 mb-5">
            <button
              type="button"
              name="google"
              className="w-full px-4 py-3 text-gray-800 dark:text-gray-200 font-medium rounded-full text-xs flex items-center justify-center gap-2 bg-neutral-200 dark:bg-[#2b2b2b] border-t-2 dark:border-neutral-700"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_28_1979)">
                  <path
                    d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_1979">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Continue with Google
            </button>

            <button
              type="button"
              name="facebook"
              className="w-full px-4 py-3 text-gray-800 dark:text-gray-200 font-medium rounded-full text-xs flex items-center justify-center gap-2 bg-neutral-200 dark:bg-[#2b2b2b] border-t-2 dark:border-neutral-700"
            >
              <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continue with Facebook
            </button>
          </div>

          <p className="text-center bottom-0 text-xs text-gray-600 dark:text-gray-400 my-6">
            Already have an account?{" "}
            <Link
              href="/signIn"
              className="font-bold text-gray-900 dark:text-white hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;
