import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import MyApp from "./pages/Home/index";

export default function App() {
  return (
    <Router>
      <Switch>
        <MyApp />
      </Switch>
    </Router>
  );
}
