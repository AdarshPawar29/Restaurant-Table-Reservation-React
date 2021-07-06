import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Alert from "./components/layout/Alert";
import store from "./store";
import OrderForm from "./components/layout/OrderForm";
const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Alert />
        <OrderForm />
      </div>
    </Provider>
  );
};

export default App;
