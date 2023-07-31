import UserList from "./component/UserList";
import EditUser from "./component/EditUser";
import AddUser from "./component/AddUser";
import ReadUser from "./component/ReadUser";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="add" element={<AddUser />} />
      <Route path="edit/:id" element={<EditUser />} />
      <Route path="read/:id" element={<ReadUser />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
