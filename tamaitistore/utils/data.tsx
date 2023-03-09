export interface IData{
  name: string;
  slug: string;
  gender: string;
  image: string;
  description: string;
  countInStock: number;
}
export const Data: IData[] = [ 
    {
      name: "Set 303",
      slug: "set-303",
      gender: "boy",
      image: "/images/set303.jpg",
      description: "Has all shown",
      countInStock: 5,
    },
    {
      name: "Set 306",
      slug: "set-306",
      gender: "girl",
      image: "/images/set306.jpg",
      description: "Has all shown",
      countInStock: 5,
    }
  ]


