import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/react-bootstrap.scss";
import "./styles/style.scss";
import "./styles/custom-bootstrap.scss";
import "./styles/style-component.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
reportWebVitals();
