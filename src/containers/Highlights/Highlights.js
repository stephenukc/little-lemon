import "./highlights.css";
import { Special } from "../../components/index.js";
import greekSalad from "../../assets/greek salad.jpg";
import lemonSalad from "../../assets/lemon dessert.jpg";
import bruchetta from "../../assets/bruchetta.svg";

const content = [
  {
    imageUrl: greekSalad,
    title: "Greek Salad",
    rate: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    imageUrl: bruchetta,
    title: "Bruchetta",
    rate: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    imageUrl: lemonSalad,
    title: "Lemon Salad",
    rate: 12.99,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Highlights = () => {
  return (
    <div className="lemon__highlights section__padding">
      <div className="lemon__highlights-head">
        <h1>This weeks specials</h1>
        <button className="lemon-btn" style={{ height: "55px" }}>
          Online Menu
        </button>
      </div>
      <div className="lemon__highlights-specials">
        {content.map((items, index) => (
          <Special
            key={index}
            image={items.imageUrl}
            rate={items.rate}
            description={items.description}
            name={items.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
