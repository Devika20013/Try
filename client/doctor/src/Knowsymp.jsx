// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Saw from './Saw.jsx';
// const Knowsymp = () => {
//   const [email, setEmail] = useState('');
//   const [data, setData] = useState(null);
//   const nav = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:3001/need', { email })
//       .then(result => {
//         if (result.data.length === 0) { // Check if no patient was found
//           console.log('Patient not found');
//           setData(null); // Clear the data state
//         } else {
//           setData(result.data[0]); // Set the first patient found
//           console.log(`Patient data:`, result.data[0]); 
//           nav('/Saw');// Log the patient data
//         }
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <button type='submit'>Submit</button>
//       {/* Conditionally render symptoms data */}
//       {/* {data && <p>{data.symptoms}</p>} */}
//     </form>
//   );
// };

// export default Knowsymp;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Saw from './Saw.jsx';
const baseurl = "https://avi-g9gp.onrender.com";
const PORT = 3001; 
const Knowsymp = () => {
  const [email, setEmail] = useState('');
  const [data, setData] = useState(null);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('${baseurl}:${PORT}/need', { email })
      .then(result => {
        if (result.data.length === 0) {
          console.log('Patient not found');
          setData(null);
        } else {
          setData(result.data[0]);
          console.log(`Patient data:`, result.data[0]);
          nav('/Saw',{state:{id:result.data[0]}});
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div>
        <label htmlFor="email" style={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
      </div>
      <button type='submit' style={styles.button}>Submit</button>
    </form>
  );
};

export default Knowsymp;

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '15px',
  },
  button: {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};
