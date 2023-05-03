// import logo from './logo.svg';
import './App.css';
import Page1 from './main_page';
import Page2 from './page2';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route >
          <Route index element={<Page1 />} />
          <Route path="page_temp" element={<Page2 />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
