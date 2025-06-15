import React from 'react';
import './UseCase.css';

const UseCase = ({ scenario, solutions }) => {
  return (
    <div className="use-case">
      <div className="scenario">
        <h3>Scenario:</h3>
        <p>{scenario}</p>
      </div>
      <div className="solutions">
        <h3>DG FutureTech's Solution:</h3>
        <ul>
          {solutions.map((solution, index) => (
            <li key={index}>{solution}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseCase;