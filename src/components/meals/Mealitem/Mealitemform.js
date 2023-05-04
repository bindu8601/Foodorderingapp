import { useRef, useState } from "react";
import { Input } from "../../UI/Input";
import "../meals.css";

export const Mealitemform = (props) => {
  const [amountIsvalid, setAmountisValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountisValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
          }}
        />
        <button className="addbtn"> ADD</button>
        {!amountIsvalid && <p>Please enter a valid amount (1-5).</p>}
      </form>
    </div>
  );
};
