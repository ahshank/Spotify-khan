import "./Product.css";

function Product({zees,price}) {
  let jiji = { backgroundColor : price > 3000 ?  "yellow" : " pink"};
    return (
      <div className="Product" style={jiji}>
        <h3>i want to buy : {zees}</h3>
        <h4>i have to pay : {price}</h4>
        {price > 5000 && <p>discount of 10%</p>}
      </div>  
    );
}


export default Product;


