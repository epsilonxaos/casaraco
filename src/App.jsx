import { AnimatePresence } from "framer-motion";

import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
// import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes, useLocation } from "react-router-dom";

import "./font/fonts.css";
import "./css/index.css";

export default function App() {
	const location = useLocation();

	// if (false) return <Loading />;

	return (
		<>
			<Header />
			<AnimatePresence mode="wait">
				<ScrollToTop />

				<main>
					<Routes location={location} key={location.pathname}>
						<Route
							index
							element={
								<PageTransition>
									<Home />
								</PageTransition>
							}
						/>

						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</main>
			</AnimatePresence>

			<Footer />
		</>
	);
}
