import * as React from "react";
import styles from "./App.module.scss";
import "animate.css";
import logo from "../images/lol-logo.png";
import bgImg1 from "../images/bg-1.jpg";
import chunjisai1 from "../images/chunjisai/1.jpg";
import chunjisai2 from "../images/chunjisai/2.jpg";
import chunjisai3 from "../images/chunjisai/3.jpg";
import chunjisai4 from "../images/chunjisai/4.jpg";
import jizhongsai1 from "../images/jizhongsai/1.jpg";
import jizhongsai2 from "../images/jizhongsai/2.jpg";
import jizhongsai3 from "../images/jizhongsai/3.jpg";
import jizhongsai4 from "../images/jizhongsai/4.jpg";
import zhoujisai1 from "../images/zhoujisai/1.jpeg";
import zhoujisai2 from "../images/zhoujisai/2.jpg";
import zhoujisai3 from "../images/zhoujisai/3.jpg";
import zhoujisai4 from "../images/zhoujisai/4.jpg";
import yayunhui1 from "../images/yayunhui/1.jpg";
import yayunhui2 from "../images/yayunhui/2.jpg";
import yayunhui3 from "../images/yayunhui/3.jpg";
import yayunhui4 from "../images/yayunhui/4.jpg";
import zongjuesai1 from "../images/zongjuesai/1.jpg";
import zongjuesai2 from "../images/zongjuesai/2.jpg";
import zongjuesai3 from "../images/zongjuesai/3.jpg";
import zongjuesai4 from "../images/zongjuesai/4.jpeg";

import SingleRow from "../components/SingleRow";
import { MyDataPropType } from "../types/MyPropType";

const App = () => {
  const data: MyDataPropType[] = [
    {
      nonImg: true,
      bgImg: bgImg1,
      time: "2012",
      text:
        "中国首次加入英雄联盟各种世界级大型比赛，中国WE战队拿到了中国英雄联盟的第一个世界级冠军——IPL5冠军。"
    },
    {
      nonImg: true,
      bgImg: bgImg1,
      time: "2017",
      text:
        "英雄联盟全球总决赛第一次全程在中国举办，引起了国内的巨大关注，但中国战队未能晋级总决赛成为了无数观众的遗憾。"
    },
    {
      nonImg: true,
      bgImg: bgImg1,
      time: "2018",
      text: "中国英雄联盟电竞史上的巅峰一年——"
    },
    {
      nonImg: false,
      bgImg: bgImg1,
      images: [chunjisai1, chunjisai2, chunjisai3, chunjisai4],
      url: "http://lol.qq.com/news/detail.shtml?docid=8051760618167153341",
      time: "2018年1月",
      title: "LPL春季赛",
      text:
        "LPL是英雄联盟职业联赛的简称(League of Legends Pro League)，是中国大陆最高级别的英雄联盟职业比赛。2018年春季赛中，LPL战队从十二支扩充为十四支，这十四支战队分别是RNG战队、IG战队、SNG战队、JDG战队、LGD战队、RW战队、TOP战队、EDG战队、OMG战队、WE战队、BLG战队、Snake战队、VG战队和FPX战队。在总决赛中，RNG3: 1战胜EDG，成功拿下冠军。"
    },
    {
      nonImg: false,
      bgImg: bgImg1,
      images: [jizhongsai1, jizhongsai2, jizhongsai3, jizhongsai4],
      url: "http://lol.qq.com/news/detail.shtml?docid=13253526962773288039",
      time: "2018年5月",
      title: "英雄联盟季中冠军赛",
      text:
        "季中冠军赛（Mid-Season Invitational）是英雄联盟当中最重要的国际赛事之一，每个赛区春季赛的季后赛冠军才能获邀参赛。2018英雄联盟季中冠军赛于5月在德国柏林与法国巴黎举行，共14支战队参加。5月20日，MSI季中冠军赛总决赛圆满落幕，RNG以3- 1战胜KZ战队，首夺世界赛冠军。"
    },
    {
      nonImg: false,
      bgImg: bgImg1,
      images: [zhoujisai1, zhoujisai2, zhoujisai3, zhoujisai4],
      url: "http://lol.qq.com/news/detail.shtml?docid=74730627019948",
      time: "2018年7月",
      title: "英雄联盟洲际系列赛",
      text:
        "洲际系列赛是由一系列地区对抗赛组成的国际赛事，其中来自13个赛区的队伍将分为5个不同的对抗赛，争夺地区最强赛区的荣誉。2018年的英雄联盟洲际系列赛在7月2日至7月8日一周内进行。亚洲对抗赛中，卫冕冠军中国LPL以3- 2战胜韩国LCK。"
    },
    {
      nonImg: false,
      bgImg: bgImg1,
      images: [yayunhui1, yayunhui2, yayunhui3, yayunhui4],
      url: "http://lol.qq.com/news/detail.shtml?docid=3369738788303843962",
      time: "2018年8月",
      title: "亚洲运动会",
      text:
        "2018年5月14日，亚洲奥林匹克理事会正式对外公布2018年亚洲运动会将有六项电子竞技运动作为正式表演项目，这是电子竞技项目在亚运会中的首次亮相，英雄联盟当选为其中之一。8月29日，在英雄联盟决赛中，中国代表队以3: 1的战绩击败了韩国，获得金牌。"
    },
    {
      nonImg: false,
      bgImg: bgImg1,
      images: [zongjuesai1, zongjuesai2, zongjuesai3, zongjuesai4],
      url: "http://game.people.com.cn/n1/2018/1103/c40130-30380262.html",
      time: "2018年11月",
      title: "英雄联盟全球总决赛",
      text:
        "英雄联盟全球总决赛（ World Championship）是英雄联盟中一年一度的最为盛大的比赛，是所有英雄联盟比赛项目中最高荣誉、最高含金量、最高竞技水平、最高知名度的比赛。2018英雄联盟全球总决赛于11月在韩国举办，共24支队伍参加。11月3日，LPL赛区战队IG 3: 0战胜了来自欧洲LCS赛区的FNC战队获得了本次全球总决赛冠军，这是全球总决赛历史上首个由LPL赛区获得的冠军。"
    }
  ];
  return (
    <div className={styles.App}>
      {data.map(data => (
        <SingleRow data={data as any} key={data.time} />
      ))}
    </div>
  );
};

export default App;
