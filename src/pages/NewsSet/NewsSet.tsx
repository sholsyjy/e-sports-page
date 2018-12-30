import * as React from "react";
import { match } from "react-router";
import { Row, Col } from "antd";
import styles from "./NewsSet.module.scss";
import bgImg5 from "../../images/bg-5.jpg";

const NewsSet: React.FC<{ setIndex: string }> = props => {
  const { setIndex } = props;
  return (
    <div
      className={styles.NewsSet}
      style={{
        backgroundImage: "url(" + bgImg5 + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      }}
    >
      <Row
        style={{
          backgroundImage: "linear-gradient(160deg,#000,transparent,#000,#000)",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
      >
        <Col span={24}>
          <h1>{setIndex}</h1>
        </Col>
        <Col span={12}>
          <p>left</p>
        </Col>
        <Col span={12}>
          <p>right</p>
        </Col>
      </Row>
    </div>
  );
};

export default NewsSet;
