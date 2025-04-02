import { useState } from 'react';
import './loginForm.css';

const API_URL = "http://localhost:8080/api/evaap_login"; 

const LoginFrom = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: ""
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
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        window.alert(`WELCOME LOGIN SUCCESSFUL!`);
        
      } else {
        alert(result.message || "Invalid email or password.");
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

    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          role,
          email: formData.email,
          password: formData.password
        })
      });

      const result = await response.json();

      if (response.ok) {
        alert("Registration successful");
        setFormData({ email: "", password: "" });
        setRole("");
      } else {
        alert(result.message || "An error occurred during registration.");
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
                name="user_email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="user_password"
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
