import { Carousel } from 'react-bootstrap';

const Slideshow = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <picture>
          <source
            media='(max-width: 414px)'
            srcSet='https://res.cloudinary.com/dfgridmvn/image/upload/w_414/v1627641552/dotch-food-v2/grab-a-bite-5.webp 2x, https://res.cloudinary.com/dfgridmvn/image/upload/v1627641552/dotch-food-v2/grab-a-bite-5.webp 4x'
            type='image/webp'
          />
          <source
            media='(min-width: 415px)'
            srcSet='https://res.cloudinary.com/dfgridmvn/image/upload/v1627641552/dotch-food-v2/grab-a-bite-5.webp'
            type='image/webp'
          />
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/dfgridmvn/image/upload/v1627641552/dotch-food-v2/grab-a-bite-5.png'
            alt='Grab a Bite 幸福提食'
          />
        </picture>
        <Carousel.Caption>
          <h3>Grab a Bite 幸福提食</h3>
          <p>
            小小不到九坪的三角窗，我們採半開放式空間，座位不多不少就十個，但卻可以為您帶來意想不到的美好滋味。
            我們以天然的食材，給予客人最健康的享受，來迎接每一個早晨。
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
