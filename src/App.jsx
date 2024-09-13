import "./App.css";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


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
        <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizaa
            name={pizza.name}
            insides={pizza.ingredients}
            image={pizza.photoName}
            price={pizza.price}
            key={pizza.name}
          />
        ))}
      </ul>
      
{/*       <Pizaa
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
      /> */}
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
