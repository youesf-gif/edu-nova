import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AuthVisualPanel from "../components/AuthVisualPanel";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [submitError, setSubmitError] = useState("");
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  // States to track input focus (used for green icons)
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  // Form inputs state
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Form error messages state
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  // States to add active/click button animations
  const [isSubmitPressed, setIsSubmitPressed] = useState(false);
  const [isGooglePressed, setIsGooglePressed] = useState(false);
  const [isGithubPressed, setIsGithubPressed] = useState(false);

  // Focus the email field when the page loads
  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
      setEmailFocused(true);
    }
  }, []);

  // Update input state and clear error messages when user starts typing
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));

    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: ""
      }));
    }
  };

  // Validate the form inputs
  const validateForm = () => {
    const newErrors = {};

    // Check email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Email must be valid.";
      }
    }

    // Check password
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitError("");
    
    const isValid = validateForm();
    if (isValid) {
      const result = login(formData.email, formData.password);
      if (result.success) {
        navigate("/dashboard");
      } else {
        setSubmitError(result.error);
      }
    } else {
      // Focus the first invalid field
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        if (emailInputRef.current) {
          emailInputRef.current.focus();
        }
      } else if (!formData.password || formData.password.length < 8) {
        if (passwordInputRef.current) {
          passwordInputRef.current.focus();
        }
      }
    }
  };

  return (
    <>
      <Navbar minimal={true} />
      
      <main className="flex-grow-1 d-flex flex-column flex-md-row register-main-container">
        
        {/* Left Side: Visual / Branding */}
        <AuthVisualPanel />

        {/* Right Side: Login Form */}
        <div className="w-100 w-md-50 p-gutter p-md-12 p-lg-24 bg-surface register-right-panel">
          <div className="w-100 min-h-100 d-flex flex-column align-items-center">
            <div className="w-100 max-w-md space-y-8 my-auto">
              {/* Header */}
              <div className="space-y-2">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-0">Welcome Back</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-0">
                  Don't have an account?{" "}
                  <Link className="text-secondary font-bold hover:underline" to="/register">
                    Sign up here
                  </Link>
                </p>
              </div>
              {/* Login Form */}
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                {submitError && (
                  <div className="alert alert-danger font-label-md py-3 rounded-lg border-0 m-0" style={{ backgroundColor: "#ffdad6", color: "#ba1a1a" }}>
                    {submitError}
                  </div>
                )}
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="email">
                    Email Address
                  </label>
                  <div className="position-relative">
                    <span 
                      className="material-symbols-outlined position-absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]"
                      style={{ color: emailFocused ? "#006a61" : "#75777d" }}
                    >
                      mail
                    </span>
                    <input 
                      ref={emailInputRef}
                      className={`w-100 pl-10 pr-4 py-3 bg-white border rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline/50 transition-all form-input-focus ${errors.email ? "is-invalid border-danger" : "border-outline-variant"}`} 
                      id="email" 
                      placeholder="name@company.com" 
                      type="email" 
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setEmailFocused(true)}
                      onBlur={() => setEmailFocused(false)}
                    />
                  </div>
                  {errors.email && (
                    <div className="invalid-feedback d-block mt-1">{errors.email}</div>
                  )}
                </div>
                {/* Password */}
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="password">
                    Password
                  </label>
                  <div className="position-relative">
                    <span 
                      className="material-symbols-outlined position-absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]"
                      style={{ color: passwordFocused ? "#006a61" : "#75777d" }}
                    >
                      lock
                    </span>
                    <input 
                      ref={passwordInputRef}
                      className={`w-100 pl-10 pr-10 py-3 bg-white border rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline/50 transition-all form-input-focus ${errors.password ? "is-invalid border-danger" : "border-outline-variant"}`} 
                      id="password" 
                      placeholder="••••••••" 
                      type={showPassword ? "text" : "password"} 
                      autoComplete="current-password"
                      value={formData.password}
                      onChange={handleChange}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                    />
                    <button
                      type="button"
                      className="password-toggle-btn"
                      onClick={() => setShowPassword(prev => !prev)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <span className="material-symbols-outlined password-toggle-icon text-[20px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                  {errors.password && (
                    <div className="invalid-feedback d-block mt-1">{errors.password}</div>
                  )}
                </div>
                {/* Options: Remember Me & Forgot Password */}
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <input 
                      className="w-5 h-5 rounded border-outline-variant cursor-pointer accent-secondary" 
                      id="remember" 
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <label className="font-label-md text-label-md text-on-surface-variant mb-0 cursor-pointer" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <a className="font-label-md text-secondary font-bold hover:underline text-decoration-none" href="#">
                    Forgot Password?
                  </a>
                </div>
                {/* Submit Button */}
                <button 
                  className={`w-100 py-4 bg-secondary text-on-primary rounded-xl font-bold text-body-lg shadow-md hover:bg-on-secondary-container active-scale-98 transition-all d-flex align-items-center justify-content-center gap-2 ${isSubmitPressed ? "scale-95" : ""}`}
                  type="submit"
                  onMouseDown={() => setIsSubmitPressed(true)}
                  onMouseUp={() => setIsSubmitPressed(false)}
                  onMouseLeave={() => setIsSubmitPressed(false)}
                >
                  Login
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </form>
              {/* Social Login Alternative */}
              <div className="position-relative py-4">
                <div className="position-absolute top-50 start-0 w-100 translate-middle-y d-flex align-items-center">
                  <div className="w-100 border-top border-outline-variant"></div>
                </div>
                <div className="position-relative d-flex justify-content-center text-label-sm text-uppercase">
                  <span className="bg-surface px-4 text-outline">Or login with</span>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-6">
                  <button 
                    className={`btn d-flex align-items-center justify-content-center gap-2 px-4 py-3 border border-outline-variant rounded-lg hover-bg-surface-container-low transition-colors font-label-md text-on-surface w-100 ${isGooglePressed ? "scale-95" : ""}`}
                    onMouseDown={() => setIsGooglePressed(true)}
                    onMouseUp={() => setIsGooglePressed(false)}
                    onMouseLeave={() => setIsGooglePressed(false)}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" width="20" height="20">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                    </svg>
                    Google
                  </button>
                </div>
                <div className="col-6">
                  <button 
                    className={`btn d-flex align-items-center justify-content-center gap-2 px-4 py-3 border border-outline-variant rounded-lg hover-bg-surface-container-low transition-colors font-label-md text-on-surface w-100 ${isGithubPressed ? "scale-95" : ""}`}
                    onMouseDown={() => setIsGithubPressed(true)}
                    onMouseUp={() => setIsGithubPressed(false)}
                    onMouseLeave={() => setIsGithubPressed(false)}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
                    </svg>
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
