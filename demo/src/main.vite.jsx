import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import { App } from "./todo/app";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";

// Entrée dédiée à Vite : identique à index.js mais en .jsx, car Vite exige
// que le script référencé dans index.html ait une extension .jsx/.tsx pour
// transformer le JSX à temps (l'analyse d'imports passe avant la transpilation).
createRoot(document.getElementById("root")).render(
    <HashRouter>
        <Routes>
            <Route path="*" element={<App />} />
        </Routes>
    </HashRouter>
);
