import "./App.css";
import AuthProvider from "./hooks/useAuthContext";
import Routers from "./routers/Router";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routers />
      </div>
    </AuthProvider>
  );
}

export default App;
