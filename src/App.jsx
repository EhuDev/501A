import { Routes, Route } from "react-router-dom";
import "@fontsource/tektur";

import MainPage from "./pages/MainPage";
import ClassListPage from "./pages/ClassListPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/classlist" element={<ClassListPage />} />
      </Routes>
    </>
  );
}

export default App;
