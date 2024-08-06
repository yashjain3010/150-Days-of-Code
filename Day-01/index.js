const obj = {
  obj1: {
    id: 1,
    hello: "World",
  },
  obj2: {
    id: 2,
    hello: "World",
  },
  obj3: {
    id: 4,
    hello: "World",
  },
};

const mylist = Object.values(obj).map(x => x.id);
console.log(mylist);