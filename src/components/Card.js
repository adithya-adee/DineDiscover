import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart, useDispatchCart } from "./ContextReducer";

export default function Carde(props) {
  const { foodName, item, ImgSrc, options } = props;
  const dispatch = useDispatchCart();
  let data = useCart();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(options ? Object.keys(options)[0] : "");

  useEffect(() => {
    if (options) {
      setSize(Object.keys(options)[0]);
    }
  }, [options]);

  if (!item) {
    return null;
  }

  let finalPrice =
    qty * (options && options[size] ? parseInt(options[size]) : item.price);

  const handleAddToCart = async () => {
    if (qty && size) {
      await dispatch({
        type: "ADD",
        id: item._id,
        name: foodName,
        price: finalPrice,
        qty: qty,
        size: size,
        img: ImgSrc,
      });
      // console.log(item);
      // await console.log(item._id);
    }
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={ImgSrc} style={{ maxHeight: "190px" }} />
      <Card.Body>
        <Card.Title>{foodName}</Card.Title>
        <div className="container w-100">
          <select
            className="m-2 h-200 bg-success rounded"
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value))}
          >
            {Array.from(Array(6), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            className="m-2 bg-success rounded"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            {options &&
              Object.keys(options).map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
          </select>
          <div className="d-inline fs-5 m-2">Rs.{finalPrice}</div>
        </div>
        <hr />

        <Button
          className="btn btn-success justify-center mx-2"
          onClick={handleAddToCart}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
