function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Home"
      title="Give us all your money!"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}