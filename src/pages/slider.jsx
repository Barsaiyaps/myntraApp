import React, { useState } from "react";
import "./SlidingWindow.css";

const SlidingWindow = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex == items.length - 1) {
      setCurrentIndex(0)
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (currentIndex == 0) {
      setCurrentIndex(items.length - 1)
    }
  };

  return (
    <div className="sliding-window" >
      <button onClick={prevSlide} >
        Prev
      </button>

      <div className="slider-container">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {items.map((item, index) => (
            <div className="slide" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextSlide} >
        Next
      </button>
    </div>
  );
}


function Slider() {
  const items = [
    <div style={{ height: "auto" }}><img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg" /></div>,
    <div style={{ height: "auto" }}><img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"></img></div>,
    <div style={{ height: "auto" }}><img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"></img></div>
  ];

  return (
    <div>
      <SlidingWindow items={items} />
    </div>
  );
}

export default Slider;



