// import React from 'react';

// const Saw = ({ data }) => {
//   console.log(data); // Check if data is received correctly
  
//   const handlePrint = () => {
//     window.print(); // Print the form
//   };

//   return (
//     <div>
//       {/* Render 'data.symptoms' */}
//       <p>{data && data.symptoms}</p>
//       {/* Print button */}
//       <button onClick={handlePrint}>Print</button>
//     </div>
//   );
// };

// export default Saw;
import React from 'react';
import { useLocation } from 'react-router-dom';
const Saw = () => {
  // console.log(data); // Check if data is received correctly
  const location = useLocation();
  const handlePrint = () => {
    window.print(); // Print the form
  };

  return (
    <div style={styles.container}>
      {/* Render 'data.symptoms' */}
      <p style={styles.symptoms}>{location.state.id && location.state.id.symptoms}</p>
      {/* Print button */}
      <button style={styles.button} onClick={handlePrint}>Print</button>
    </div>
  );
};

export default Saw;

const styles = {
  container: {
    textAlign: 'center',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '80%',
  },
  symptoms: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
