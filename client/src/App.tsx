import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="*"
            element={
              <h2 className="display_size text-2xl font-bold h-60 py-5">
                Couldn't find a page.
              </h2>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
