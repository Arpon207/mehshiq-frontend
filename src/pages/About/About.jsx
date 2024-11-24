import "./about.css";
import bag1 from "../../assets/bags/bag1.jpg";
import bag2 from "../../assets/bags/bag2.jpg";
import bag3 from "../../assets/bags/bag3.jpg";
import bag4 from "../../assets/bags/bag4.jpg";
import WhatWeOffer from "../../components/Home/WhatWeOffer/WhatWeOffer";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const About = () => {
  const swiper = useSwiper();
  return (
    <div className="aboutPage">
      <div className="cartPage-header">
        <div>
          <h1>About Us</h1>
          <p>Home &gt; About Us</p>
        </div>
      </div>
      <div className="about-greetings">
        <div className="about-images">
          <img src={bag1} alt="" />
          <img src={bag2} alt="" />
          <img src={bag3} alt="" />
          <img src={bag4} alt="" />
        </div>
        <div className="greetings">
          <h3>Welcome to Mehshiq</h3>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              voluptas distinctio delectus, aspernatur laudantium corrupti iure
              totam modi nesciunt minus laborum perspiciatis consequuntur
              quaerat deleniti nam! Ab quod blanditiis eaque voluptate at cum,
              in animi a laudantium, quis officiis praesentium maxime
              perferendis minus quisquam. Dignissimos ea cupiditate laborum
              recusandae aperiam.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              voluptas distinctio delectus, aspernatur laudantium corrupti iure
              totam modi nesciunt minus laborum perspiciatis consequuntur
              quaerat deleniti nam! Ab quod blanditiis eaque voluptate at cum,
              in animi a laudantium, quis officiis praesentium maxime
              perferendis minus quisquam. Dignissimos ea cupiditate laborum
              recusandae aperiam.
            </p>
          </div>
        </div>
      </div>
      <WhatWeOffer />
      <div className="clientReviews">
        <h3>Beautiful words from our clients</h3>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".clientReviewNextElBtn",
            prevEl: ".clientReviewPrevElBtn",
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          // breakpoints={{
          //   668: {
          //     slidesPerView: 3,
          //   },
          //   992: {
          //     slidesPerView: 4,
          //   },
          //   1550: {
          //     slidesPerView: 5,
          //     spaceBetween: 30,
          //   },
          // }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((number, i) => (
            <SwiperSlide>
              <div className="review">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
                  alt=""
                />
                <div>
                  <strong>John Doe</strong>
                  <p>31 Dec, 2024</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam saepe laudantium ut dolores earum, nemo dolor magni
                    minima laborum amet.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="clientReviewSliderNavigation">
          <button
            className="clientReviewPrevElBtn"
            onClick={() => swiper.slidePrev()}
          >
            <GrFormPreviousLink />
          </button>
          <button
            className="clientReviewNextElBtn"
            onClick={() => swiper.slideNext()}
          >
            <GrFormNextLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
