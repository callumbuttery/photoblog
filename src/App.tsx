import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Nav/Navbar";
import { BlogList } from "./Pages/Blog/BlogList/BlogList";
import { SingleBlog } from "./Pages/Blog/SingleBlog/SingleBlog";

function App() {
	return (
		<>
			<div className="w-3/4 mx-auto my-5">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<BlogList />}></Route>
						<Route path="/Blog" element={<SingleBlog />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
