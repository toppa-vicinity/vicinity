import { ChatRowProp, User } from "../components/ChatRow";

const users: User[] = [
  {
    id: "1",
    name: "Cat",
    imageURL:
      "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-superJumbo.jpg?quality=75&auto=webp",
  },
  {
    id: "2",
    name: "Dog",
    imageURL:
      "https://png.pngtree.com/png-clipart/20190705/original/pngtree-hand-painted-elements-of-tiger-and-beast-png-image_4228714.jpg",
  },
  {
    id: "3",
    name: "Girafffffeeeee",
    imageURL:
      "https://png.pngtree.com/png-clipart/20190705/original/pngtree-hand-painted-elements-of-ferocious-beasts-king-of-forests-png-image_4186081.jpg",
  },
  {
    id: "4",
    name: "Elephant",
    imageURL:
      "https://png.pngtree.com/png-clipart/20190705/original/pngtree-hand-painted-elements-of-mercedes-benz-horse-riding-png-image_4186205.jpg",
  },
  {
    id: "5",
    name: "User1",
    imageURL:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-meng-pet-small-shiba-inu-animal-design-paintedcartoonanimalcute-petpuppyshiba-inu-png-image_4041421.jpg",
  },
  {
    id: "6",
    name: "User2",
    imageURL:
      "https://png.pngtree.com/png-clipart/20190925/original/pngtree-hand-drawn-cartoon-squirrel-love-balloon-element-png-image_4961865.jpg",
  },
  {
    id: "7",
    name: "User3",
    imageURL:
      "https://png.pngtree.com/png-clipart/20190906/original/pngtree-hand-painted-color-animal-deer-elements-png-image_4572627.jpg",
  },
  {
    id: "8",
    name: "User4",
    imageURL:
      "https://png.pngtree.com/png-clipart/20190520/original/pngtree-hand-painted-flamingo-elements-with-green-plants-png-image_4263277.jpg",
  },
  {
    id: "9",
    name: "User5",
    imageURL:
      "https://png.pngtree.com/png-clipart/20190925/original/pngtree-purple-bear-colorful-head-elements-png-image_4871257.jpg",
  },
  {
    id: "10",
    name: "User6",
    imageURL:
      "https://png.pngtree.com/png-clipart/20190705/original/pngtree-cute-white-cat-hand-painted-elements-png-image_4228650.jpg",
  },
];
export const mockData: ChatRowProp[] = [];
users.forEach((element) => {
  mockData.push({
    id: element.id,
    user: element,
    recentMsg: {
      id: element.id,
      content: `I am ${element.name}!!!!! hello there !!!! !!!!!!! !!!!!!! !!!!! !!!!!! !!!!!!!`,
      createdAt: new Date("July 20, 69 00:20:18"),
    },
  });
});