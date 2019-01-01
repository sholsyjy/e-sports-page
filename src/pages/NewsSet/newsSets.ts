const newsSets = [
  {
    news: [],
    video: []
  },
  {
    news: [
      {
        time: "2017/12/26",
        title: "LPL春季赛分组出炉 东西部实力均衡",
        url: "http://lol.qq.com/news/detail.shtml?docid=11420007383744618449"
      },
      {
        time: "2017/12/27",
        title: "LPL春季赛解析：史上最均衡分组",
        url: "http://lol.qq.com/news/detail.shtml?docid=17031843277734560841"
      },
      {
        time: "2018/01/09",
        title: "2018LPL春季赛：游戏即将开始",
        url: "http://lol.qq.com/news/detail.shtml?docid=16023954127535784075"
      },
      {
        time: "2018/01/12",
        title: "一张图看清LPL春季赛战队变化",
        url: "http://lol.qq.com/news/detail.shtml?docid=14447344936354036010"
      },
      {
        time: "2018/03/30",
        title: "LPL春季赛季后赛赛程安排公布",
        url: "http://lol.qq.com/news/detail.shtml?docid=9736977897868249965"
      },
      {
        time: "2018/04/07",
        title: "2018LPL春季赛季后赛名单出炉",
        url: "http://lol.qq.com/news/detail.shtml?docid=5801607556873623536"
      },
      {
        time: "2018/04/10",
        title: "LPL春季赛季后赛看点：新秀搅局豪强对决！",
        url: "http://lol.qq.com/news/detail.shtml?docid=8457218199585911393"
      },
      {
        time: "2018/04/30",
        title: "LPL春季赛决赛：RNG3：1战胜EDG夺冠",
        url: "http://lol.qq.com/news/detail.shtml?docid=8051760618167153341"
      }
    ],
    video: [
      {
        title: "2018LPL春季赛抽签仪式",
        url: "https://v.qq.com/x/page/q0524yz8al4.html?start=2"
      },
      {
        title: "2018LPL春季赛抽签仪式媒体采访",
        url: "https://v.qq.com/x/page/j0524ecz06z.html?start=4"
      },
      {
        title: "18LPL春季赛主宣传片：游戏开始！",
        url:
          "https://v.qq.com/x/cover/9pa0y87gzc9ffi9/w0533l0baly.html?start=43"
      },
      {
        title: "2018LPL春季赛：新年谱写新序章",
        url: "https://v.qq.com/x/page/b0556ny49eb.html?start=32"
      },
      {
        title: "2018LPL春季赛总决赛RNG vs EDG回放",
        url: "https://v.qq.com/x/cover/jo5jkfld84x2ik1.html"
      }
    ]
  },
  {
    news: [
      {
        time: "2018/03/28",
        title: "2018季中冠军赛即将来临 赛制更新14个赛区队伍出战",
        url: "http://lol.qq.com/news/detail.shtml?docid=13365385433596257078"
      },
      {
        time: "2018/04/26",
        title: "2018季中冠军赛入围赛赛程公布",
        url: "http://lol.qq.com/news/detail.shtml?docid=6217377469147886826"
      },
      {
        time: "2018/04/28",
        title: "2018季中冠军赛赛事概览",
        url: "http://lol.qq.com/news/detail.shtml?docid=1222283558429332569"
      },
      {
        time: "2018/05/03",
        title: "5月3日19点2018季中冠军赛正式开赛",
        url: "http://lol.qq.com/news/detail.shtml?docid=13901948919885983907"
      },
      {
        time: "2018/05/16",
        title: "一图看懂季中冠军赛小组赛战况",
        url: "http://lol.qq.com/news/detail.shtml?docid=1996104708029733902"
      },
      {
        time: "2018/05/18",
        title: "季中冠军赛RNG和FNC半决赛预告！",
        url: "http://lol.qq.com/news/detail.shtml?docid=2672492148033724769"
      },
      {
        time: "2018/05/20",
        title: "RNG成就传奇 登顶季中冠军赛！",
        url: "http://lol.qq.com/news/detail.shtml?docid=11193347490720706036"
      }
    ],
    video: [
      {
        title: "2018英雄联盟季中冠军赛宣传片：成就传奇！",
        url: "https://v.qq.com/x/cover/rsuo34nxqn5jj1s/r06380p7mfi.html"
      },
      {
        title: "2018季中冠军赛入围赛阶段开场预告",
        url: "https://v.qq.com/x/page/t06439ltpdj.html"
      },
      {
        title: "冠军之路：恭喜RNG勇夺MSI冠军！",
        url: "https://v.qq.com/x/cover/57n0nlxy8yxvphy/k06601t0pdp.html"
      },
      {
        title: "赛事解析：季中冠军赛总决赛！",
        url: "https://v.qq.com/x/page/c0666853vdq.html"
      }
    ]
  },
  {
    news: [
      {
        time: "2018/04/23",
        title: "2018洲际系列赛亚洲对抗赛：7月大连战火重燃",
        url: "http://lol.qq.com/news/detail.shtml?docid=136382264393560782"
      },
      {
        time: "2018/06/26",
        title: "洲际赛赛程公布 RNG首战对阵",
        url: "http://lol.qq.com/news/detail.shtml?docid=6501344727916093892"
      },
      {
        time: "2018/06/29",
        title: "洲际赛亚洲对抗赛出征选手名单公布",
        url: "http://lol.qq.com/news/detail.shtml?docid=17801391023071183645"
      },
      {
        time: "2018/06/29",
        title: "2018洲际系列赛赛事概览",
        url: "http://lol.qq.com/news/detail.shtml?docid=14552188106154845898"
      },
      {
        time: "2018/07/03",
        title: "洲际系列赛卫冕冠军北上大连 RNG首战能否擒狼",
        url: "http://lol.qq.com/news/detail.shtml?docid=229419391966265"
      },
      {
        time: "2018/07/06",
        title: "洲际赛次日：LPL全胜头名晋级冠军战",
        url: "http://lol.qq.com/news/detail.shtml?docid=3725806560284913896"
      },
      {
        time: "2018/07/07",
        title: "洲际赛半决赛：LCK总决赛会师",
        url: "http://lol.qq.com/news/detail.shtml?docid=7772953317061335523"
      },
      {
        time: "2018/07/09",
        title: "惊心动魄接力赛 LPL蝉联洲际赛冠军",
        url: "http://lol.qq.com/news/detail.shtml?docid=13074597150051732184"
      }
    ],
    video: [
      {
        title: "2018洲际系列赛：当燃不让",
        url: "https://v.qq.com/x/cover/1wmm97jp3h6y6s2/u0707h6w623.html"
      },
      {
        title: "2018洲际系列赛主题曲",
        url: "https://v.qq.com/x/cover/1wmm97jp3h6y6s2/c0708zxadkk.html"
      },
      {
        title: "2018洲际赛 LPL队伍出征宣传视频",
        url: "https://v.qq.com/x/cover/1wmm97jp3h6y6s2/y0709awpbv8.html"
      },
      {
        title: "2018洲际赛LPL战队高光时刻",
        url: "https://v.qq.com/x/page/s0716wiznnn.html"
      },
      {
        title: "LPL洲际赛夺冠赛后群访：我们是冠军！",
        url: "https://v.qq.com/x/page/y0715hoin67.html"
      }
    ]
  },
  {
    news: [
      {
        time: "2018/06/12",
        title: "2018雅加达-巨港亚运会英雄联盟中国代表队名单公布",
        url: "http://lol.qq.com/news/detail.shtml?docid=15933417448737158690"
      },
      {
        time: "2018/06/22",
        title: "2018雅加达巨港亚运会出线队伍名单公布",
        url: "http://lol.qq.com/news/detail.shtml?docid=16363602267224910392"
      },
      {
        time: "2018/08/09",
        title: "亚运会英雄联盟项目比赛时间公布",
        url: "http://lol.qq.com/news/detail.shtml?docid=17005925685532348892"
      },
      {
        time: "2018/08/23",
        title: "第十八届亚运会电竞表演赛中国团队行前培训暨动员大会在深圳举行",
        url: "http://lol.qq.com/news/detail.shtml?docid=2083188748818613105"
      },
      {
        time: "2018/08/28",
        title: "亚运会首日战报：中国团队成功挺进半决赛",
        url: "http://lol.qq.com/news/detail.shtml?docid=15574109273368654481"
      },
      {
        time: "2018/08/28",
        title: "亚运会次日战报 一波三折中国队晋级决赛",
        url: "http://lol.qq.com/news/detail.shtml?docid=6046476210316374582"
      },
      {
        time: "2018/08/29",
        title: "恭喜中国队3：1击败韩国 勇获亚运会LOL表演赛冠军！",
        url: "http://lol.qq.com/news/detail.shtml?docid=367544956360337257"
      },
      {
        time: "2018/08/30",
        title: "电竞获广泛认可 2022成亚运会正式项目！",
        url: "http://lol.qq.com/news/detail.shtml?docid=4180617218040405164"
      }
    ],
    video: [
      {
        title: "英雄联盟LPL亚运会应援单曲《虎啸龙吟》震撼发布",
        url: "https://v.qq.com/x/page/f0698l4qfht.html"
      },
      {
        title: "LOL亚运会夺冠颁奖升国旗视频",
        url: "https://v.qq.com/x/page/c0770no1o37.html"
      },
      {
        title: "联盟英雄秀：亚运会LOL中国队精彩操作集锦",
        url: "https://v.qq.com/x/page/n0780167iyt.html"
      },
      {
        title: "LOL亚运会纪录片-A Little Big Step",
        url: "https://v.qq.com/x/page/n07038y732h.html"
      },
      {
        title: "Uzi上央视啦！CCTV13报道亚运会的电竞国家队",
        url: "https://v.qq.com/x/page/a07470o3atg.html"
      }
    ]
  },
  {
    news: [
      {
        time: "2018/09/10",
        title: "2018全球总决赛晋级情况总汇",
        url: "http://lol.qq.com/news/detail.shtml?docid=6606549391847977891"
      },
      {
        time: "2018/09/18",
        title: "2018全球总决赛：抽签仪式指南",
        url: "http://lol.qq.com/news/detail.shtml?docid=8513449941524720961"
      },
      {
        time: "2018/09/24",
        title: "2018全球总决赛分组形势分析",
        url: "http://lol.qq.com/news/detail.shtml?docid=7154097196461562256"
      },
      {
        time: "2018/09/26",
        title: "全球总决赛24队首发阵容公布",
        url: "http://lol.qq.com/news/detail.shtml?docid=7423097640111823046"
      },
      {
        time: "2018/09/28",
        title: "2018全球总决赛入围赛赛程",
        url: "http://lol.qq.com/news/detail.shtml?docid=9591470469480514060"
      },
      {
        time: "2018/10/31",
        title: "2018全球总决赛：决赛指南",
        url: "http://lol.qq.com/news/detail.shtml?docid=7631649280851562647"
      },
      {
        time: "2018/11/04",
        title: "LPL首位总决赛MVP选手：Ning！",
        url: "http://lol.qq.com/news/detail.shtml?docid=2411969779413050547"
      }
    ],
    video: [
      {
        title: "英雄联盟《Rise》（2018英雄联盟全球总决赛主题曲）",
        url: "https://v.qq.com/x/cover/dxxftgwporcl1j5/q0027094bj7.html"
      },
      {
        title: "2018英雄联盟S8全球总决赛决赛完整开幕式视频",
        url: "https://v.qq.com/x/page/t07817912an.html"
      },
      {
        title: "三分钟回顾iG零封FNC LPL赛区首夺总决赛冠军",
        url: "https://v.qq.com/x/cover/bneqyj4z1zjr0u9/j0028yq1rrr.html"
      },
      {
        title: "S8决赛赛后群访IG",
        url: "https://v.qq.com/x/cover/sqkmq6gfchz2jgi/d0028b21u3u.html"
      }
    ]
  }
];

export default newsSets;
