import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Row, Col, Carousel } from "antd";
import { MyPropType } from "../../types/MyPropType";

const SingleRow: React.FC<MyPropType> = props => {
  const { data } = props;

  return (
    <div
      style={{
        backgroundImage: "url(" + data.bgImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      }}
    >
      {!data.nonImg ? (
        <Row
          style={{
            backgroundImage:
              "linear-gradient(160deg,#000,transparent,#000,#000)",
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        >
          {!data.imgLeft && (
            <Col span={12}>
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeout">
                <h1>{data.time}</h1>
                <a href={data.url}>
                  <h1>{data.title}</h1>
                </a>
                <span>{data.text}</span>
                <Link to={"/news-set" + data.index}>
                  <span>
                    <br />
                    <br />
                    更多>>>
                  </span>
                </Link>
              </ScrollAnimation>
            </Col>
          )}
          <Col span={12}>
            <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
              <Carousel autoplay>
                {data.images.map((image, index) => (
                  <img src={image} key={index} />
                ))}
              </Carousel>
            </ScrollAnimation>
          </Col>
          {data.imgLeft && (
            <Col span={12}>
              <ScrollAnimation
                initiallyVisible
                animateIn="fadeIn"
                animateOut="fadeout"
              />
              <h1>{data.time}</h1>
              <a href={data.url}>
                <h1>{data.title}</h1>
              </a>
              <span>{data.text}</span>
              <Link to={"/news-set" + data.index}>
                <span>
                  <br />
                  <br />
                  更多>>>
                </span>
              </Link>
            </Col>
          )}
        </Row>
      ) : (
        <Row
          style={{
            backgroundImage:
              "linear-gradient(160deg,#000,transparent,#000,#000)",
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        >
          <Col span={24}>
            <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
              <h2>{data.time}</h2>
              <h1>{data.text}</h1>
            </ScrollAnimation>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default SingleRow;
