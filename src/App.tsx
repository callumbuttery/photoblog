import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Nav/Navbar";
import { BlogList } from "./Pages/Blog/BlogList";
import { Home } from "./Pages/Home";
import { SingleBlog } from "./Pages/Blog/SingleBlog";

function App() {
	return (
		<>
			<div className="w-3/4 mx-auto my-5">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/blog" element={<BlogList />}></Route>
						<Route path="/blogDetails/:id" element={<SingleBlog />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
