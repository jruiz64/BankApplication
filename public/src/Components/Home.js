import React from 'react';
import UserContext from './UserContext';
import Card from './Card';
import bank from './images/bank.png';

function Home(){
    const ctx = React.useContext(UserContext);  
    return (
        <Card
        bgcolor="secondary"
        txtcolor="white"
        header="BadBank"
        title="Welcome to Bad Bank"
        text="Give us all your money!"
        body={(<img src={bank} className="img-fluid" alt="Responsive image"/>)}
      />    
    );  
  }
  export default Home;