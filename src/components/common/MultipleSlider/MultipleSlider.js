import React from 'react';
import Slider from "react-slick";
import styles from './MultipleSlider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={styles.slickArrowNext}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={styles.slickArrowPrev}
            onClick={onClick}
        />
    );
}
class MultipleSlider extends React.Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 850,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 580,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div className={styles.slider}>
                <Slider {...settings}>
                    {this.props.elements}
                </Slider>
            </div>
        );
    }
}

export default MultipleSlider;