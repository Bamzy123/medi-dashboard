import React from 'react';

const diagnostics = [
  {
    problem: 'Hypertension',
    description: 'Chronic high blood pressure',
    status: 'Under Observation',
  },

  {
    problem: 'Type 2 Diabetes',
    description: 'Insulin resistance and elevated blood sugar',
    status: 'Cured',
  },
  
  {
    problem: 'Asthma',
    description: 'Recurrent episodes of bronchial constriction',
    status: 'Inactive',
  },
  {
    problem: 'Chronic Kidney Disease',
    description: 'Decreased kidney function over time',
    status: 'Under Treatment',
  },
];

const DiagnosticList = () => {
  return (
    <div className="diagnostic-container">
      <h2>Diagnostic List</h2>
      <div className="diagnostic-table-wrapper">
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((item, index) => (
              <tr key={index}>
                <td>{item.problem}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;