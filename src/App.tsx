import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import TopSellers from "./components/TopSellers";
import PopularBlogs from "./components/PopularBlogs";
import { FilterProvider } from "./components/FilterContext";


function App() {
  return (
    <Router>
      <FilterProvider> {/* <--- Wrap your entire app content with the provider */}
        <div className="flex h-screen">
          <Sidebar />
          <div className="rounded w-full  flex justify-between flex-wrap">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
            <div>
              <TopSellers />
              <PopularBlogs />
            </div>
          </div>
        </div>
      </FilterProvider> {/* <--- Closing tag for the provider */}

    </Router>
  );
}

export default App;
