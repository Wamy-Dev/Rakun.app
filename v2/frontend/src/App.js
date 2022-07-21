import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './pages/main'
export default function App() {
  return (
      <Router>
          <div>
            {/*A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.*/}
            <Routes>
              <Route path="/"  element={<Main />} />
            </Routes>
          </div>
      </Router>
  );
}
