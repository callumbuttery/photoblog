import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Nav/Navbar";
import { BlogList } from "./Pages/Blog/BlogList";
import { Home } from "./Pages/Home";
import { SingleBlog } from "./Pages/Blog/SingleBlog";
import { About } from "./Pages/About";

function App() {
	return (
		<>
			<div className="w-2/4 mx-auto m-10 ">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/blog" element={<BlogList />}></Route>
						<Route path="/blogDetails/:id" element={<SingleBlog />}></Route>
						<Route path="/about" element={<About />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
