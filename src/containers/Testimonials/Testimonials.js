import { Review } from "../../components";
import "./testimonials.css";

const reviews = [
  {
    stars: 4,
    name: "Joshua",
    totalReviews: 16,
    review: "Decadent, delicious dessert - the perfect ending to a fantastic meal.",
  },
  {
    stars: 5,
    name: "Sasha",
    totalReviews: 10,
    review: "The pasta dish was flavorful and hearty, and the portion size was generous.",
  },
  {
    stars: 4,
    name: "Robin",
    totalReviews: 9,
    review: "The sushi was fresh and flavorful, and the presentation was beautiful.",
  },
  {
    stars: 3,
    name: "Natasha",
    totalReviews: 14,
    review: "The pizza was delicious, with just the right amount of cheese and amazing toppings.",
  },
];

const Testimonials = () => {
  return (
    <div className="lemon__testimonials section__padding">
      <div className="lemon__testimonials-heading">
        <h1>Valuable Customer Reviews</h1>
      </div>
      <div className="lemon__testimonials-reviews">
        {reviews.map((items, index) => (
          <Review key={items.name + index} stars={items.stars} name={items.name} totalReviews={items.totalReviews} review={items.review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
