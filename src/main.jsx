import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductModalProvider } from "./context/ProductModalContext.jsx";
import { RatingModalProvider } from "./context/RatingModalContext.jsx";
import { AddCardModalProvider } from "./context/AddCardModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductModalProvider>
    <RatingModalProvider>
      <AddCardModalProvider>
        <App />
      </AddCardModalProvider>
    </RatingModalProvider>
  </ProductModalProvider>
);
//API Docs = https://app.swaggerhub.com/apis-docs/YoussefAbdelhamid/Wizzy-Mart/1.0.0