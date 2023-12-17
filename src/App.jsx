import AppRouters from "./routes/AppRouters";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppRouters />
    </Router>
  );
}

export default App;
