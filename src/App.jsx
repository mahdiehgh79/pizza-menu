import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menue />
      <Footer />
    </div>
  );
}

const Menue = () => {
  return (
    <main className="menu">
      <h1>OUR MENUE</h1>
      <Pizaa
        name="Pizza Spinaci"
        insides="tomato"
        image="pizzas/spinaci.jpg"
        price={55}
      />
      <Pizaa
        name="Pizza Salamino"
        insides="tomato onion"
        image="pizzas/salamino.jpg"
        price={12}
      />
    </main>
  );
};

const Pizaa = ({ name, image, insides, price }) => {
  return (
    <div className="pizza">
      <img src={image} />
      <div>
        <h3>{name}</h3>
        <p>{insides}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <h1>hello welcome here</h1>
    </div>
  );
};

const Footer = () => {
  const Hour = new Date().getHours();
  const openhour = 19;
  const closehour = 22;
  const warn = Hour >= openhour && Hour <= closehour;
  console.log(warn);
  // if (Hour >= openhour && Hour <= closehour) {
  //   alert("we open");
  // } else {
  //   alert("we close");
  // }
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}footer is here ...{" "}
    </footer>
  );
};

export default App;
