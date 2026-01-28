import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invitation from "@/views/Invitation.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:type/:slug" element={<Invitation />} />
        <Route
          path="/"
          element={<h1 className="text-white">Invitaciones digitales</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
