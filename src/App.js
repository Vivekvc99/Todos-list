import './App.css';
import Header from "./myComponents/Header"
import Todos from "./myComponents/Todos"
import Footer from "./myComponents/Footer"
function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "get some milk"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "get shoes",
    },
    {
      sno: 3,
      title: "Go to uni ",
      desc: "plese get books "
    },
  ]
  return (
    <>
      <Header title="This is Navbar" searchBar={false} />
      <Todos todos={todos} />
      <Footer />

    </>
  );
}



export default App;
