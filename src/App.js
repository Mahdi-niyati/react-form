import Sign from "./components/Sign";
import Login from "./components/Login";
import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/signin"  element={<Sign />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
