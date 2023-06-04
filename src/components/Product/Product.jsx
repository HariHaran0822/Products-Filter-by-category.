import "../Product/Product.css";

function Product(props) {
  console.log(props);
  return (
    <>
      <div key={props.item.id} className="Card">
        <div className="img-con">
          <img src={props.item.img} alt="image" className="img" />
        </div>

        <h3>{props.item.title}</h3>

        <h5>MRP: {props.item.price}</h5>
      </div>
    </>
  );
}

export default Product;
