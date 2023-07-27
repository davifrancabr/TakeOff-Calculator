import { Link, Routes, Route } from "react-router-dom";
import TakeoffPerformanceCalculator from "./pages/TakeoffPerformanceCalculator";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<TakeoffPerformanceCalculator />} />
      </Routes>
    </>
  );
}

export default App;
