import React from 'react';

const Notfound = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>Incorrect details</p>
    </div>
  );
};

export default Notfound;

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  text: {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#ff0000',
  },
};
