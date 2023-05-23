import Carousel from 'react-bootstrap/Carousel';

function CarouselEx() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="media/homeimg.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Empowering Farmers to Grow Smarter,not Harder</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="media/homeimg1.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Farm with Confidence,Reap with Pride</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="media/homeimg2.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Connecting Farmers,Cultivating Success</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselEx;