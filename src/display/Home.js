import React, { useEffect, useState } from "react";
import ResponsiveNavbar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/foodData", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();
        setFoodData(data[1]);

        setFoodItem(data[0]);
      } catch (error) {
        console.error("Error fetching food data:", error.message);
      }
    };

    fetchFoodData();
  }, []);

  return (
    <>
      <div>
        <ResponsiveNavbar />
      </div>
      <div>
        <div>
          <div>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
              style={{ objectFit: "contain !important" }}
            >
              <div className="carousel-inner" id="carousel">
                <div className="carousel-caption " style={{ zIndex: 10 }}>
                  <div className="d-flex justify-content-center">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                    {/* <button
                    className="btn btn-outline-success bg-success text-white"
                    type="submit"
                  >
                    Search
                  </button> */}
                  </div>
                </div>
                <div
                  className="carousel-item active"
                  style={{ filter: "brightness(50%)" }}
                >
                  <img
                    src="https://th.bing.com/th/id/OIP.naEpuF9k7LB0PYghldofMgHaE7?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    className="d-block w-100"
                    alt="..."
                    style={{
                      height: "600px",
                      width: "300px",
                      objectFit: "fill",
                    }}
                  />
                </div>
                <div
                  className="carousel-item"
                  style={{ filter: "brightness(50%)" }}
                >
                  <img
                    src="https://th.bing.com/th?id=OIP.n-x0aGScXztEGuUuN356nQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    className="d-block w-100"
                    alt="..."
                    style={{
                      height: "600px",
                      width: "300px",
                      objectFit: "fill",
                    }}
                  />
                </div>
                <div
                  className="carousel-item"
                  style={{ filter: "brightness(50%)" }}
                >
                  <img
                    src="https://th.bing.com/th/id/OIP.5Y5raluYpKz7mR_JTcuxMgHaES?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    className="d-block w-100"
                    alt="..."
                    style={{
                      height: "600px",
                      width: "300px",
                      objectFit: "fill",
                    }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-3">
        {foodData.length > 0
          ? foodData.map((data) => {
              return (
                <div key={data._id}>
                  <div className="fs-2 m-3">{data.CategoryName}</div>
                  <hr />
                  <div className="row">
                    {foodItem.length > 0
                      ? foodItem
                          .filter(
                            (item) =>
                              item.CategoryName === data.CategoryName &&
                              item.name
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase())
                          )
                          .map((filterItems) => {
                            return (
                              <div
                                key={filterItems._id}
                                className="col-12 col-md-6 col-lg-3"
                              >
                                <Card
                                  foodName={filterItems.name}
                                  item={filterItems}
                                  options={filterItems.options[0]}
                                  ImgSrc={filterItems.img}
                                ></Card>
                              </div>
                            );
                          })
                      : ""}
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Card></Card>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export const userEmail = localStorage.getItem("userEmail");
