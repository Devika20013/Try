
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Knowmedici from './Knowmedici.jsx';
// const Symptoms = ({email}) => {
//   const [symptoms, setSymptoms] = useState("");
//   const [medicines, setMedicines] = useState("");
//   // const [email, setEmail] = useState("");
//   const nav = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3001/symptoms", { email, symptoms, medicines })
//       .then((result) => {
//         console.log(result);
//         nav("/Self");
//       })
//       .catch((err) => console.log(err));
//   };
//   const already=()=>{
//      nav('/Knowmedici')
//   }

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Enter Symptoms</h2>
//       <form onSubmit={handleSubmit}>
//         {/* <div style={styles.formGroup}>
//           <label htmlFor="email" style={styles.label}>
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             onChange={(e) => setEmail(e.target.value)}
//             style={styles.input}
//             required
//           />
//         </div> */}
//         <div style={styles.formGroup}>
//           <label htmlFor="symptoms" style={styles.label}>
//             Symptoms:
//           </label>
//           <textarea
//             id="symptoms"
//             name="symptoms"
//             onChange={(e) => setSymptoms(e.target.value)}
//             style={styles.textarea}
//             required
//           ></textarea>
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="medicine" style={styles.label}>
//             Medicine:
//           </label>
//           <textarea
//             id="medicine"
//             name="medicine"
//             onChange={(e) => setMedicines(e.target.value)}
//             style={styles.textarea}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" style={styles.button}>
//           Submit
//         </button>
//       </form>
//       <button onClick={already}>view previous Medicines</button>
//     </div>
//   );
// };

// export default Symptoms;

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "0 auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     backgroundColor: "#f9f9f9",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   formGroup: {
//     marginBottom: "15px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//     fontWeight: "bold",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   textarea: {
//     width: "100%",
//     height: "100px",
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     border: "none",
//     borderRadius: "5px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     cursor: "pointer",
//   },
// };

// Symptoms.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Symptoms = () => { // Receive props
  const location = useLocation();
  const  email  =location.state.email; // Destructure props to get email
  const [symptoms, setSymptoms] = useState("");
  const [medicines, setMedicines] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/symptoms", { email, symptoms, medicines })
      .then((result) => {
        console.log(result);
        nav("/Self");
      })
      .catch((err) => console.log(err));
  };

  const already = () => {
    nav('/Knowmedici');
  }

  return (
    <div>
      <h2>Enter Symptoms</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Symptoms:</label>
          <textarea
            name="symptoms"
            onChange={(e) => setSymptoms(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Medicine:</label>
          <textarea
            name="medicine"
            onChange={(e) => setMedicines(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={already}>View Previous Medicines</button>
    </div>
  );
};

export default Symptoms;
