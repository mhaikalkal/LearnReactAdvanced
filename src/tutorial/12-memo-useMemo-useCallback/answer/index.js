import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  console.count("calculateMostExpensive function called");
  // reduce( function(total, currentValue), initialValue )
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // kita berada di dalam component Index
  // jika salah satu value berubah, semua dalam component index akan rerender.
  // untuk menghindari itu kita gunakan useCallback() di salah satu function yg punya value terpisah
  // cart, count merupakan value yang beda dan tidak berpapasan satu sama lain. (gapunya hubungan apa2)
  // useCallback( function(), [dependencyValue] )
  // kenapa kita tambahkan [cart] sebagai dependency?
  // function yang dibalut oleh useCallback akan ke trigger ketika value dari dependency berubah.
  // kalau kita gak pakai dependency, ketika value count berubah, cart akan ikut ke rerender.
  // padahal harusnya count berubah, cart enggak ikut berubah dan rerender vice versa.
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  // nge memorize value dari sebuah function.
  // akan re run, ketika value dependency berubah.
  // console.count("calculateMostExpensive function called");
  // ketika value count/cart berubah, si fungsi rerun.
  // maka kita kasi useMemo dan dependency untuk menghindari rerun
  const mostExpensive = useMemo(() => calculateMostExpensive(products), [products]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>Cart : {cart}</h1>
      <h2>${mostExpensive}</h2>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

// setiap kita klik button `click me`. kita setCount + 1,
// yang mana useState itu nge trigger rerender.
// Yang jadi masalah, component / data yang gak berubah tetep ke rerender.
// yang mana makan memory, dan gak efisien karena harusnya yg di render yang berubah doang.
// cara mengatasi hal itu dengan menggunakan React.memo().
// yang mana kita tinggal nge wrap sebuah component.
// jadi si React.memo() ini nge memorize component yg di wrap nya.
// kalau berubah maka dia ikut ke rerender.
// kalau enggak ada yg berubah, dia akan stay gak ikut ke rerender.
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("List called");
  });

  return (
    <section className="products">
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>;
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("single item called");
  });

  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button className="btn" onClick={addToCart}>
        Add to Cart
      </button>
    </article>
  );
};
export default Index;
