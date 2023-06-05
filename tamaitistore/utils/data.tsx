export interface IData {
  name: string;
  slug: string;
  gender: string;
  variants: { colors: string[]; image: string }[];
  description: string[];
  date: Date;
  countInStock: number;
  price: number;
}
// amount needs to be added within each variant
export const Data: IData[] = [
  {
    name: "R303 Set",
    slug: "set-303",
    gender: "boy",
    variants: [{ colors: ["green"], image: "/images/set303_green.jpg" }],
    description: ["Has all shown", "Blue Shirt"],
    countInStock: 5,
    price: 39.99,
    date: new Date(2023, 1, 1),
  },
  {
    name: "R306 Set",
    slug: "set-306",
    gender: "girl",
    variants: [
      {
        colors: ["pink", "red"],
        image: "/images/set306_red_pink.jpg",
      },
      { colors: ["blue"], image: "/images/set306_blue.jpg" },
    ],
    description: ["Has all shown"],
    countInStock: 5,
    price: 69.99,
    date: new Date(2023, 2, 15),
  },
  {
    name: "R308 Set",
    slug: "set-308",
    gender: "boy",
    variants: [{ colors: ["green"], image: "/images/set308_green.jpg" }],
    description: ["Has all shown"],
    countInStock: 5,
    price: 59.99,
    date: new Date(2023, 1, 18),
  },
  {
    name: "R85 Set",
    slug: "set-85",
    gender: "girl",
    variants: [{ colors: ["white"], image: "/images/set85_white.jpg" }],

    description: ["Has all shown"],
    countInStock: 5,
    price: 49.99,
    date: new Date(2023, 4, 27),
  },
  {
    name: "R71 Set",
    slug: "set-71",
    gender: "girl",
    variants: [{ colors: ["white"], image: "/images/set71_white.jpg" }],
    description: ["Has all shown"],
    countInStock: 5,
    price: 69.99,
    date: new Date(2023, 1, 25),
  },
  {
    name: "Set 307",
    slug: "set-307",
    gender: "girl",
    variants: [{ colors: ["orange"], image: "/images/set307_orange.jpg" }],
    description: ["Has all shown"],
    countInStock: 5,
    price: 69.99,
    date: new Date(2023, 3, 14),
  },
  {
    name: "Set 290",
    slug: "set-290",
    gender: "boy",
    variants: [{ colors: ["blue"], image: "/images/set290_blue.jpg" }],
    description: ["Has all shown", "Blue Shirt"],
    countInStock: 5,
    price: 49.99,
    date: new Date(2023, 3, 14),
  },
  {
    name: "Set 314",
    slug: "set-314",
    gender: "boy",
    variants: [{ colors: ["red"], image: "/images/set314_red.jpg" }],
    description: ["Has all shown", "Blue Shirt"],
    countInStock: 5,
    price: 49.99,
    date: new Date(2023, 4, 14),
  },
];
