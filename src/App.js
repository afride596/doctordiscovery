import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Specialization from "./components/Specialization";

function App() {
  return (
    <div className="bg-[#f7fee7]  h-[100vh] w-[100vw]">
      <Header />
      <SearchForm />
      <Specialization />
    </div>
  );
}

export default App;
