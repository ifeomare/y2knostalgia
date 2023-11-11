import "../styles/shopping.css";
import React, { useState } from "react"; //Step 1: import useState
import Product from "../src/components/product.jsx";
//https://i0.wp.com/alexusrenee.com/wp-content/uploads/sites/8/2019/04/Beyonce-Homecoming-The-Live-Album-Cover.jpg?ssl=1

const Shopping = () => {
  const [products] = useState([
    {
      img:
        "https://th.bing.com/th/id/OIP.khSBpwbt1AKdHEREMB-uCQHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7",
      artist: "Destiny's Child",
      album: "The Writing's On The Wall",
      price: "$10.99"
    },
    {
      img:
        "https://th.bing.com/th/id/OIP.zDXX5Zkm56mw5WANTQoyTAHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",
      artist: "Usher",
      album: "Confessions (Expanded Edition)",
      price: "$10.99"
    },
    {
      img:
        "https://th.bing.com/th/id/R.0490f1714c67943be2faa7d2e5db19db?rik=RcJBGIaCSUtzBw&riu=http%3a%2f%2fwww.lyrics.by%2f__media%2fjay_sean%2fa2009a1-all-1500px.jpg&ehk=h84zUlJb5olfUYRjOYfFHeYY%2fd9QXzWUHMvZTc6Ju9M%3d&risl=&pid=ImgRaw&r=0",
      artist: "Jay Sean",
      album: "All or Nothing",
      price: "$10.99"
    },
    {
      img:
        "https://th.bing.com/th/id/OIP.LY_2xVKWJRKdm406TKiCRgHaHd?w=200&h=202&c=7&r=0&o=5&pid=1.7",
      artist: "TLC",
      album: "Fanmail",
      price: "$10.99"
    },
    {
      img:
        "https://th.bing.com/th/id/OIP.NJgaYjZyYwdIIT7K6ZcEFwHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7",
      artist: "Jennifer Lopez",
      album: "J.Lo",
      price: "$10.99"
    },
    {
      img:
        "https://th.bing.com/th/id/OIP.madF9TJ2ShKYG-bGn6lTEwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",
      artist: "Ashanti",
      album: "Ashanti",
      price: "$10.99"
    },
    {
      img:
        "https://th.bing.com/th/id/OIP.gnmL4dCX1iUwqRVvPGHIoQHaHc?w=169&h=180&c=7&r=0&o=5&pid=1.7",
      artist: "Jagged Edge",
      album: "J.E. Heartbreak",
      price: "$10.99"
    },
    {
      img:
        "https://th.bing.com/th/id/R.3b739546e751be04cbb998201fb5daa5?rik=hQE%2bH6VEK4Qhaw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-WqjqqVIqYXI%2fTvXPUTc4tAI%2fAAAAAAAAAnA%2fJ8Wa3Ara7q8%2fw1200-h630-p-k-no-nu%2fNe-Yo%2b%2525E2%252580%252593%2bYear%2bOf%2bThe%2bGentleman.jpg&ehk=IlkU8iAe7ZAmV1okwWp4dw7gVTIkbOlZ%2fn6n7k8LyG8%3d&risl=&pid=ImgRaw&r=0",
      artist: "Ne-Yo",
      album: "Year of the Gentleman",
      price: "$10.99"
    },
    {
      img:
        "https://i.pinimg.com/474x/5a/65/00/5a650062049f361b70d85fe2170959c8--ciara-goodies-music-album-covers.jpg",
      artist: "Ciara",
      album: "Goodies",
      price: "$10.99"
    }
  ]);

  return (
    <>
      <section className="shopping">
        <h1 id="section">R & B</h1>
        <div className="products">
          {products.map((product) => (
            <Product {...product} key={product.album} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Shopping;
