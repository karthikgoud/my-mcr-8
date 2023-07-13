import { Route, Routes } from "react-router-dom";
import "./App.css";
import MeetListing from "./pages/MeetListing/MeetListing";
import EventDetails from "./pages/EventDetails/EventDetails";

function App() {
  return (
    <div className="App-header">
      <Routes>
        <Route path="/" element={<MeetListing />}></Route>
        <Route path="/event/:id" element={<EventDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
