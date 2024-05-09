// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Knowmedici } from './Knowmedici.jsx';
// import { Knowsymp } from './Knowsymp.jsx';

// const Self = () => {
//   const nav = useNavigate();

//   const handlesymp = () => {
//     nav('/Knowsymp');
//   };

//   const handlemedi = () => {
//     nav('/Knowmedici');
//   };

//   return (
//     <div>
//       <button onClick={handlesymp}>Symptoms</button>
//       <button onClick={handlemedi}>Medicines</button>
//     </div>
//   );
// };

// export default Self;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Self = () => {
  const nav = useNavigate();

  const handlesymp = () => {
    nav('/Knowsymp');
  };

  const handlemedi = () => {
    nav('/Knowmedici');
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handlesymp}>Symptoms</button>
      <button style={styles.button} onClick={handlemedi}>Medicines</button>
    </div>
  );
};

export default Self;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

