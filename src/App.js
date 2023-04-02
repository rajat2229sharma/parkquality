import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
