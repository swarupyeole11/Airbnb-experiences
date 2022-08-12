import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "../src/data"

const items = data.map((ele)=>
{
  return <Card  key={ele.id} item={ele}/>
})

function App() {
  return (

    <>
      <Navbar/>
       <Hero />
       <section className="flex gap-5 overflow-x-auto flex-nowrap scroll-smooth ">
       {items}
       </section>
       
    </>
      
  );
}

export default App;
