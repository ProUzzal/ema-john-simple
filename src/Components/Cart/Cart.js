import React from "react";

const Cart = (props) => {
  const cartNumber = props.cart;
  // let total=0;
  // for (let i = 0; i < cartNumber.length; i++) {
  //     const product = cartNumber[i];
  //     total=total+product.price;
  // }

  const total = cartNumber.reduce((tot, pd) => tot + pd.price, 0); //In here, at first have to pass two parameter one is keeping variable and another will the uniq items. then in the function , have to count both keeping variable and uniq element of the pd. and last parameter is initialize value.
  console.log(total);
  let shipping=0;

  if (total>20) {
      console.log(shipping)
    shipping=0;     
  }
else if(total>10){
    shipping=2.10;
}
else if(total>0){
    shipping=3.2;
}
const tax=total/10;
const grandTotal=Number((total+shipping+tax)).toFixed(2);
const formatNumber=(num)=>{
    const prec=num.toFixed(2);
    return prec;
}



  return (
    <div>
      <h4>Order Summery</h4>

      <p>Items ordered:{cartNumber.length}</p>
      <p>Product Price: {formatNumber(total)}</p>
      <p>Shipping fee:{shipping}</p>
      
  <p>Tax: {tax}</p>
  
  <h5>Total Prices: {grandTotal}</h5>
    

    </div>
  );
};

export default Cart;
