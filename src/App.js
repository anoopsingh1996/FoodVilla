/**
        Header
           -Logo
           -Nav Items (Right Side)
           -Cart
        Body
            -Search Bar
            -RestauntList
               -Image
               -Name
               -Rating
               -Cusines
        Footer
           -Links
           - Copyright
**/

 import React from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./components/Header";
 import Body from "./components/Body";
 import Footer from "./components/Footer";

 const AppLayout = () =>{
   return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
   )
 };
 

 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 
 //passing a react element inside the root
 
 //async defer
 root.render(<AppLayout />);