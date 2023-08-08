import "./App.css";
import FormComponent from "./component/FormComponent";

function App() {
  const userId = 123;
  return (
    <div>
      <FormComponent userId={userId} />
    </div>
  );
}

export default App;
