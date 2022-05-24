import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = (products) => {
  const { name, image, price } = products;

  // cara keduanya kita pake short citcuit
  // jika image ada && isinya ada image.url.
  // maka return image.url
  const Iurl = image && image.url;

  return (
    <article className="product">
      <img src={Iurl || defaultImage} alt={name || "Product"} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};

// gak semua data memiliki property yg sama, misal :
// data 1 : id, name, img_url, price
// data 2 : id, name, price
// nah kalau kita panggil / iterasi object tsb, akan ada error karena data 2 gada img_url

// nama component . propTypes
// memberi tahu bahwa property tsb required
// jadi kalau ada data yg gada prop tsb, akan memunculkan error di console.
Product.propTypes = {
  image: PropTypes.object.isRequired, // data API-nya img: {url: 'blabla'}, maka image isinya object == Proptypes.object
  name: PropTypes.string.isRequired, // name :: string
  price: PropTypes.number.isRequired, // price :: number
};

// Cara pertama
// cara mengatasinya? kita bisa assign default utk setiap prop nya. in case ada prop yg missing dr datanya
Product.defaultProps = {
  name: "Product",
  price: 3.99,
  image: defaultImage,
};

export default Product;
