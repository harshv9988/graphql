let users = [
  {
    id: "1",
    name: "temp1",
    email: "temp1@gmail.com",
    age: 23,
  },
  {
    id: "2",
    name: "temp2",
    email: "temp2@gmail.com",
  },
  {
    id: "3",
    name: "temp3",
    email: "temp3@gmail.com",
  },
];

//Demo post data

let posts = [
  {
    id: "1",
    title: "day",
    body: "day day",
    published: true,
    author: "1",
  },
  {
    id: "2",
    title: "week",
    body: "blah blh",
    published: true,
    author: "1",
  },
  {
    id: "3",
    title: "week",
    body: "blah blh",
    published: true,
    author: "2",
  },
  {
    id: "4",
    title: "month",
    body: "blah",
    published: false,
    author: "3",
  },
];

//comment demo data

let comments = [
  {
    id: "101",
    text: "comment 1",
    author: "1",
    post: "1",
  },
  {
    id: "102",
    text: "comment 2",
    author: "2",
    post: "1",
  },
  {
    id: "103",
    text: "comment 3",
    author: "2",
    post: "2",
  },
  {
    id: "104",
    text: "comment 4",
    author: "3",
    post: "3",
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
