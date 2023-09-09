import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Layout from "../components/Layout";
import Index from "../screens";
import Invite from "../screens/invite";
import Join from "../screens/join";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<Index />} /> */}
        <Route path="/" element={<Join />} />
        {/* <Route path="/invite" element={<Invite />} /> */}
        {/* <Route path="/join" element={<Join />} /> */}
      </Route>
    </Routes>
  );
};
