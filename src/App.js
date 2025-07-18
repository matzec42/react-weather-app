import Header from "./components/Header";
import Main from "./components/Main";
import './styles/components/App.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss'

function App() {
  const dark = false;

  return (
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
