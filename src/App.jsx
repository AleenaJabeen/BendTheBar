import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Promo from "./pages/PromoCodes";
import AccessControl from "./pages/AccessControl";
import KisiDoor from "./pages/KisiDoor";
import Subscription from "./pages/Subscription";
import ScrollToTop from "./layout/ScrollToTop";
function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="promo-codes" element={<Promo />} />
             <Route path="access-control" element={<AccessControl />} />
             <Route path="kisi-door" element={<KisiDoor />} />
              <Route path="subscription" element={<Subscription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
