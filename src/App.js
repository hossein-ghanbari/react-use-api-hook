import UseApi from "./hooks/UseApi";

function App() {
  const [response, responseError, loading] = UseApi("https://jsonplaceholder.typicode.com/posts/1", "get");
  console.log("response", response);
  console.log("responseError", responseError);
  console.log("loading", loading);

  return <div className="App">react hook for fetch data</div>;
}

export default App;
