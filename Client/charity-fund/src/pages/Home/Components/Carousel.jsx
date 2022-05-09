import React from 'react';
import { Carousel} from 'react-bootstrap'

function Carouselmain() {
    return(
        <Carousel fade  style={{margin: "5% auto", width: '80%'}}>
  <Carousel.Item>
    <img
      className=" d-block w-100"
      src="https://cdnuploads.aa.com.tr/uploads/Contents/2022/02/24/thumbs_b_c_959d5129d732e198c474bb46ea5516c7.jpg?v=161316?text=First slide&bg=373940"
      // alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3 style={{textAlign: "center"}}>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/9955097/pexels-photo-9955097.jpeg?auto=compress&cs=tinysrgb&h=650&w=940/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3 style={{textAlign: "center"}}>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://images.pexels.com/photos/8735106/pexels-photo-8735106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3 style={{textAlign: "center"}}>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Carouselmain;