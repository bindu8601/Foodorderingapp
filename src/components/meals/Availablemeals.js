import { Card } from "../UI/Card";
import { MealItem } from "./Mealitem/Mealitem";
import "./meals.css";
const DUMMYMEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "finest fish and veggies",
    price: 22.99,
    img: "https://img.freepik.com/free-photo/side-view-mix-sushi-rolls-tray-with-ginger-wasabi_141793-14242.jpg",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty",
    price: 16.5,
    img: "https://therecipecritic.com/wp-content/uploads/2020/10/pork-schnitzel-recipe-3.jpg",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    img: "https://carlsbadcravings.com/wp-content/uploads/2020/05/BBQ-Burger-v8.jpg",
  },
  {
    id: "m4",
    name: "Pizza",
    description: "Spicy chicken double cheese pizza",
    price: 22.99,
    img: "https://media.istockphoto.com/id/835271096/photo/slice-of-pizza-cheese-crust-seafood-topping-sauce-with-bell-pepper-vegetables-delicious-tasty.jpg?s=612x612&w=0&k=20&c=Fh7GHdiX3RQKfAbOSQR3fxgPI_UUFCuFhtpBvTaoHUM=",
  },
];
export const AvailableMeals = () => {
  const mealslist = DUMMYMEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.img}
    />
  ));
  return (
    <section className="availablemeals">
      <Card>
        <ul style={{ listStyle: "none" }}>{mealslist}</ul>
      </Card>
    </section>
  );
};
