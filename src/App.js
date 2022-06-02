import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Form from "./Form";
import * as yup from "yup";
import schema from "./formSchema";
import axios from "axios";

const initialFormValues = {
  name: '', 
  size: '', 
  topping1: false, 
  topping2: false, 
  topping3: false, 
  topping4: false, 
  special: '' 
}

const App = () => {
  const [pizza, setPizza] = useState(initialFormValues);
  const [errors, setErrors] = useState({ name: '', size: '', topping1: '', topping2: '', topping3: '', topping4: '', special: '' });
  const [disabled, setDisabled] = useState(true);
  
  const forErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const updateForm = (inputName, inputValue) => {
    setPizza({...pizza, [inputName]: inputValue });
  }

  const submitForm = (e) => {
    e.preventDefault()
    const newPizza = { name: pizza.name.trim(), size: pizza.size, topping1: pizza.topping1, topping2: pizza.topping2, topping3: pizza.topping3, topping4: pizza.topping4, special: pizza.special }
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(res => {
      })
      .catch(err => {
        console.error(err.data)
      })
  }

  useEffect(() => {
    schema.isValid(pizza).then(valid => setDisabled(!!valid))
  }, [pizza])

  return (
    <div className = "App">
      <nav>
        <h1>Lambda Eats</h1>
        <div className = "nav-links">
          <Link to="/" >Home</Link>
          <Link to="/pizza" id="order-pizza">Pizza?</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">
          <Form 
            values={pizza}
            update={updateForm}
            submit={submitForm}
            disabled={disabled}
            errors={forErrors}
            red={errors}
          />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
};
export default App;
