function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, Kenneth!</h1>
      <h2>Today is {currDate.toLocaleDateString()} and the time is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;