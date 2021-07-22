import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { Routes } from "./routes";
import store from "./store";

const App = () => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
