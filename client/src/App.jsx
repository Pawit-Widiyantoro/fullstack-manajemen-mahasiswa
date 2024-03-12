import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";
import UserList from "./Pages/UserList";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/add" element={<AddUser/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
