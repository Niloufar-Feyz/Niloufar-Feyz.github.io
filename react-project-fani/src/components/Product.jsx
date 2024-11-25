import './Product.css';
  


function Product ({title,price,delivery,image,discount,badge}){
    const finalPrice = discount ? (price - discount).toFixed(2) : price;

    return(
        <div className="view">          
          {badge && <p className="badge">{badge}</p>}
            <img src={image} alt='Product Image'/>
    <h2 className='title'>{title}</h2>
    <p className={discount ? 'discount' : 'price'}>${finalPrice} </p>
    {discount && <p className="original-price">${price}</p>}
       <p className='delivery'>{delivery}</p>
       </div>
);
}

export default Product;