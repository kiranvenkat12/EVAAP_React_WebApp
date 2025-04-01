import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginform.css';


const API_URL = "https://v1.nocodeapi.com/sandeephst/google_sheets/YqqUgyAwUTXXdPEp";
const tabId = "Sheet1";

const LoginForm = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [role, setRole] = useState("");


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const searchUrl = `${API_URL}/search?tabId=${tabId}&searchKey=email&searchValue=${encodeURIComponent(formData.email)}`;
      const response = await fetch(searchUrl);
      const result = await response.json();

      if (result && result.length > 0) {
        const user = result[0];
        if (user.email.trim() === formData.email && user.password.trim() === formData.password) {
          // alert("Login successful!");
          setFormData({ username: "", email: "", password: "" });
          window.alert(`WELCOME LOGIN SUCCESFULLY! FINISH THE VERIFICATION FORM`);
        navigate("/Verificationpage");
        } else {
          alert("Invalid email or password.");
        }
      } else {
        alert("User not found.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }

    try {
      const searchUrl = `${API_URL}/search?tabId=${tabId}&searchKey=email&searchValue=${encodeURIComponent(formData.email)}`;
      const searchResponse = await fetch(searchUrl);
      const searchResult = await searchResponse.json();

      if (searchResult.length > 0) {
        alert("User already exists!");
        return;
      }

      const response = await fetch(`${API_URL}?tabId=${tabId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([[role, formData.username, formData.email, formData.password]])
      });

      if (response.ok) {
        alert("registration successful");
        setFormData({ username: "", email: "", password: "" });
        setRole("");

        window.location.href = "./Verificationpage"

      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration.");
    }
  };

  const showLogin = () => {
    setActiveTab("login");
    setRole("");

  };

  const showRegister = () => {
    setActiveTab("register");
    setRole("");
  };

  const showForm = () => setRole("employer");
  const showUserForm = () => setRole("employee");
  const showUserForm1 = () => setRole("admin");

  const goBack = () => setRole("");




  return (
    <>
      
    
      <div className="container">
        <div className="tabs">
          <button className={`tab-btn ${activeTab === "login" ? "active" : ""}`} onClick={showLogin}>
            Login
          </button>
          <button className={`tab-btn ${activeTab === "register" ? "active" : ""}`} onClick={showRegister}>
            Signup
          </button>
   
      {/* User Registration Form */}
      </div>


        {activeTab === "login" && (
          <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Login</button>
              <div className='forget'>Forget password ?</div>
              <div className='login-h1'>----continue with----</div>
            </form>
          </div>
        )}

        {activeTab === "register" && !role && (
          <div className="form-container">
            <h2>Signup</h2>
            <button className="role-btn" onClick={showForm}> Are you Employer</button>
            <button className="role-btn" onClick={showUserForm}>Employee</button>
            <button className="role-btn" onClick={showUserForm1}>Admin</button>
            <div className='title1'><li>If you are a Employer click on the "Are you a Employer" button</li></div>
            <div className='title2'><li>If you are a Employee click on the "Employee" button</li></div>
            <div className='title3'><li>If you are a Admin click on "Admin"</li></div>
          </div>
        )}

        {(role === "employer" || role === "employee" || role === "admin") && (
          <div className="form-container">
            <h2>{role === "employer" ? "employer" : role === "admin" ? "admin" : "employee"} Signup</h2>
            <form onSubmit={handleRegister}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Signup</button>
            </form>
            <button className="role-btn" onClick={goBack}>Back</button>
          </div>
        )}
      </div>

    </>
  );
};

export default LoginForm;
