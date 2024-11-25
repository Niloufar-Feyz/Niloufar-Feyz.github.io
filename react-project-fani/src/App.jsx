import React from 'react';

import Product from "./components/Product.jsx";
import NavBar from './components/NavBar.jsx';

const title1 = "iPhone"; 
const price1 = 299.99;
 const delivery1 = "Free Delivery"; 
 const image1="./public/iphone.jpeg";
 const badge1 = "Black Friday";
 
 const title2 = "Bag"; 
 const price2 =199.99;
  const delivery2 = "Express Delivery";
  const image2="./public/bag.jpg";
  const discount2= 50;
  const badge2 = "";
   
  const title3 = "Pen";
    const price3 =2.99;
 const delivery3 = "Standard Delivery"
 const image3="./public/pen.jpg";
 const badge3 = "";

 const title4 = "Book"; 
 const price4 =69.99;
  const delivery4 = "Express Delivery";
  const image4="./public/book.jpg";
  const discount4= 30;
  const badge4 = "";

  const title5 = "Dress"; 
 const price5 =399.99;
  const delivery5 = "Standard Delivery";
  const image5="./public/dress.jpg";
  const discount5= 10;
  const badge5 = "Black Friday"

  const title6 = "Coat"; 
 const price6 =599.99;
  const delivery6 = "Express Delivery";
  const image6="./public/coat.jpg";
  const badge6 = "Black Friday";
  

  const title7 = "Boots"; 
 const price7 =799.99;
  const delivery7 = "Free Delivery";
  const image7="./public/boots.jpg";
  const discount7= 40;
  const badge7 = "Black Friday";

  const title8 = "Shirt"; 
 const price8 =99.99;
  const delivery8 = "Free Delivery";
  const image8="./public/shirt.jpg";
  const badge8 = "";
  


function App (){
  return(
    <>
    <NavBar/>
    <section className=" row">
    <Product title={title1} price={price1} delivery={delivery1} image={image1} badge={badge1}/>
    <Product  title={title2} price={price2} delivery={delivery2} image={image2} discount={discount2}/>
     <Product title={title3} price={price3} delivery={delivery3} image={image3} />
     <Product  title={title4} price={price4} delivery={delivery4} image={image4} discount={discount4}/>
     <Product  title={title5} price={price5} delivery={delivery5} image={image5} discount={discount5} badge={badge5}/>
     <Product  title={title6} price={price6} delivery={delivery6} image={image6} />
     <Product  title={title7} price={price7} delivery={delivery7} image={image7} discount={discount7} badge={badge7}/>
     <Product  title={title8} price={price8} delivery={delivery8} image={image8} />

  </section>
  </>
  )
  

}

export default App;