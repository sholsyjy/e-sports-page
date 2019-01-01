import * as React from "react";
import { Row, Col } from "antd";
import styles from "./NewsSet.module.scss";
import bgImg5 from "../../images/bg-5.jpg";
import logo from "../../images/lol-logo.png";
import newsSets from "./newsSets";
import { Link } from "react-router-dom";

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
        <Col span={4}>
          <Link to="/">
            <img src={logo} width="50%" />
          </Link>
        </Col>
        <Col span={24}>
          <h1>
            {setIndex === "1"
              ? "LPL春季赛"
              : setIndex === "2"
              ? "英雄联盟季中冠军赛"
              : setIndex === "3"
              ? "英雄联盟洲际系列赛"
              : setIndex === "4"
              ? "亚洲运动会"
              : setIndex === "5"
              ? "英雄联盟全球总决赛"
              : ""}
          </h1>
        </Col>
        <Col span={12}>
          <h2>新闻回顾</h2>
          {newsSets[Number(setIndex)].news.map((news, index) => (
            <div key={index} style={{ margin: "2% 0" }}>
              <a href={news.url} target="_blank">
                <span>{news.title + " "}</span>
              </a>
              <span>({news.time})</span>
            </div>
          ))}
        </Col>
        <Col span={12}>
          <h2>视频回顾</h2>
          {newsSets[Number(setIndex)].video.map((video, index) => (
            <div key={index} style={{ margin: "2% 0" }}>
              <a href={video.url} target="_blank">
                <span>{video.title}</span>
              </a>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default NewsSet;
