import React from 'react';
import { Carousel } from 'react-bootstrap';

function Carouselmain() {
  return (
    <Carousel fade style={{ margin: '4% auto', width: '80%' }}>
      {/* <Carousel.Item>
    <img
      className=" d-block w-100"
      src="https://images.pexels.com/photos/1269790/pexels-photo-1269790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500?v=161316?text=First slide&bg=373940"
      alt=""    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/842948/pexels-photo-842948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?text=Second slide&bg=282c34"
      alt=""    />


  </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://images.pexels.com/photos/3588043/pexels-photo-3588043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940?text=Third slide&bg=20232a"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselmain;
