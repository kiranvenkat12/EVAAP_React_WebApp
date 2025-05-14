import { useState } from 'react';
import './loginForm.css';
import { useNavigate } from 'react-router-dom';


const API_URL = "http://localhost:8080/employee/register"; 
const LOGIN_API_URL = "http://localhost:8080/employee/login";

const LoginFrom = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      console.log("Login data:", loginData); 
      const response = await fetch(LOGIN_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      console.log("Login data:", loginData)
      if (response.ok) {
        console.log(response.ok)
        const data = await response.text();
        console.log("Login data:", loginData)
        alert(`WELCOME ,${loginData.email} , LOGIN SUCCESSFUL! FINISH THE VERIFICATION FORM`);
        navigate("/registrationpage");
      } else {
        const errorMessage = await response.text();
        alert(`Login failed: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }

    const registerData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        alert("Registration successful!");
        setFormData({email: "", password: "" });
        setRole("");
      } else {
        const errorMessage = await response.text();
        alert(`Registration failed: ${errorMessage}`);
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

  const showForm = () => setRole("Employer");
  const showUserForm = () => setRole("Employee");
  const showUserForm1 = () => setRole("Admin");

  const goBack = () => setRole("");

  return (
    <>
      <div className="container">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
            onClick={showLogin}
          >
            Login
          </button>
          <button
            className={`tab-btn ${activeTab === "register" ? "active" : ""}`}
            onClick={showRegister}
          >
            Signup
          </button>
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
              <div className="forget">Forgot password?</div>
              <div className="login-h1">----continue with----</div>
            </form>
          </div>
        )}

        {activeTab === "register" && !role && (
          <div className="form-container">
            <h2>Signup</h2>
            <button className="role-btn" onClick={showForm}>
              Are you an Employer?
            </button>
            <button className="role-btn" onClick={showUserForm}>
              Employee
            </button>
            <button className="role-btn" onClick={showUserForm1}>
              Admin
            </button>
            <div className="title1">
              <li>If you are an Employer, click on the "Are you an Employer?" button</li>
            </div>
            <div className="title2">
              <li>If you are an Employee, click on the "Employee" button</li>
            </div>
            <div className="title3">
              <li>If you are an Admin, click on "Admin"</li>
            </div>
          </div>
        )}

        {(role === "Employer" || role === "Employee" || role === "Admin") && (
          <div className="form-container">
            <h2>{role === "Employer" ? "Employer" : role === "Admin" ? "Admin" : "Employee"} Signup</h2>
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

export default LoginFrom;
