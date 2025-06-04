import { Routes, Route } from "react-router-dom";
import Layout from "../src/Components/Layout/Layout";
import Home from "../src/Pages/HomePage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
