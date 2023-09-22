import "./App.css";
import AppRoutes from "./AppRoutes";
import MiniDrawer from "./components/Drawer";

function App() {
  return (
    <div className="">
      <MiniDrawer children={<AppRoutes />} />
    </div>
  );
}

export default App;
