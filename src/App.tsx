import "./App.css";
import AuthProvider from "./hooks/useAuthContext";
import TodoProvider from "./hooks/useTodoContext";
import Routers from "./routers/Router";

function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <div className="App">
          <Routers />
        </div>
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;
