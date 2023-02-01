import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyB-wHfMc4SWdqeYK_0qV9mfMIxZQ7rIdpI",
   authDomain: "tesla-ecommerce-b0b5c.firebaseapp.com",
   projectId: "tesla-ecommerce-b0b5c",
   storageBucket: "tesla-ecommerce-b0b5c.appspot.com",
   messagingSenderId: "780927779267",
   appId: "1:780927779267:web:00e32cfb536fe8cb087d76",
   measurementId: "G-3FRFJ8T58D"
};

export const provider = new GoogleAuthProvider();

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);
