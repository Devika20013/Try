// import axios from "axios";
// import React, { useState} from "react";
// import { useNavigate } from "react-router-dom";
// import Login from "./Login.jsx";

// const Signup= () => {
//    const [name,setName]=useState()
//    const [email,setEmail]=useState()
//    const [phone,setPhone]=useState()
//    const [password,setPassword]=useState()
//    const nav =useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:3001/register',{name,email,phone,password})
//     .then(result=>{console.log(result)
//       nav('/Login')})
//     .catch(err=>console.log(err))
    
//   };

//   return (
//     <div>
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input 
//             type="text" 
//             id="name" 
//             name="name" 
//             onChange={(e)=>setName(e.target.value)}
//             required 
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input 
//             type="email" 
//             id="email" 
//             name="email" 
//             onChange={(e)=>setEmail(e.target.value)}
//             required 
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input 
//             type="password" 
//             id="password" 
//             name="password" 
//             onChange={(e)=>setPassword(e.target.value)}
//             required 
//           />
//         </div>
//         <div>
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input 
//             type="tel" 
//             id="phoneNumber" 
//             name="phoneNumber" 
//             onChange={(e)=>setPhone(e.target.value)} 
//             required 
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login.jsx";
const baseurl = "https://avi-g9gp.onrender.com";
const PORT=3001;
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("${baseurl}:${PORT}/register", { name, email, phone, password })
      .then((result) => {
        console.log(result);
        nav("/Login");
      })
      .catch((err) => console.log(err));
  };
  const handlelogin=()=>{
      nav("/Login");
  }

  return (
    <div style={styles.container}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="phoneNumber" style={styles.label}>
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Register
        </button>
        <p>if already have account</p>
        <button type="log" style={styles.button} onClick={handlelogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Signup;

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};
