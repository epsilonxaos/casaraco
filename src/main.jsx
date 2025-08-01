import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/*" element={<App />} />
		</Routes>
	</BrowserRouter>
);
