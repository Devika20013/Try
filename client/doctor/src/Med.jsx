// import React from 'react';

// const Med = ({ data }) => {
//   console.log(data); // Check if data is received correctly
  
//   const handlePrint = () => {
//     window.print(); // Print the form
//   };

//   return (
//     <div>
//       {/* Render 'data.symptoms' */}
//       <p>{data && data.medicines}</p>
//       {/* Print button */}
//       <button onClick={handlePrint}>Print</button>
//     </div>
//   );
// };

// export default Med;
import React from 'react';

const Med = ({ data }) => {
  console.log(data); // Check if data is received correctly
  
  const handlePrint = () => {
    window.print(); // Print the form
  };

  return (
    <div style={styles.container}>
      {/* Render 'data.medicines' */}
      <p style={styles.medicines}>{data && data.medicines}</p>
      {/* Print button */}
      <button style={styles.button} onClick={handlePrint}>Print</button>
    </div>
  );
};

export default Med;

const styles = {
  container: {
    textAlign: 'center',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '80%',
  },
  medicines: {
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
