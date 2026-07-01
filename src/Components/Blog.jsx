import "./Blog.css";

import img1 from "../assets/blog.1.png";
import img2 from "../assets/blog.2.png";
import img3 from "../assets/blog.3.png";
import img4 from "../assets/blog.4.png";
import img5 from "../assets/blog.5.png";
import img6 from "../assets/blog.6.png";
import img7 from "../assets/blog.7.png";
import img8 from "../assets/blog.8.png";
import img9 from "../assets/blog.9.png";
import img10 from "../assets/blog.10.png";
import img11 from "../assets/blog.11.png";
import img12 from "../assets/blog.12.png";

function Blog() {
  const blogs = [
    {
      image: img1,
      title: "How to prepare a delicious gluten free sushi",
    },
    {
      image: img2,
      title: "Exclusive baking lessons from the pastry king",
    },
    {
      image: img3,
      title: "How to prepare the perfect fries in an air fryer",
    },
    {
      image: img4,
      title: "How to prepare delicious chicken tenders",
    },
    {
      image: img5,
      title: "5 great cooking gadgets you can buy to save time",
    },
    {
      image: img6,
      title: "The secret tips & tricks to prepare a perfect burger",
    },
    {
      image: img7,
      title: "7 delicious cheesecake recipes you can prepare",
    },
    {
      image: img8,
      title: "5 great pizza restaurants you should visit this city",
    },
    {
      image: img9,
      title: "5 great cooking gadgets you can buy to save time",
    },
    {
      image: img10,
      title: "How to prepare a delicious gluten free sushi",
    },
    {
      image: img11,
      title: "Top 20 simple and quick desserts for kids",
    },
    {
      image: img12,
      title: "Top 20 simple and quick desserts for kids",
    },
  ];

  return (
    <section className="blog">
      <div className="blog-header">
        <h1>Our Blog & Articles</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need
          <br />
          to change to create a truly happens.
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <span>January 3, 2023</span>
              <h3>{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;