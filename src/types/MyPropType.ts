export type MyPropType =
  | {
      data: {
        nonImg: false;
        bgImg: string;
        images: string[];
        url: string;
        time: string;
        title: string;
        text: string;
        imgLeft?: boolean;
      };
    }
  | {
      data: {
        nonImg: true;
        bgImg: string;
        time: string;
        text: string;
      };
    };

export type MyDataPropType = MyPropType["data"];
