// question 1
const itemsObject1 = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

let newItem1 = itemsObject1.map((obj) => {
  obj.quantity *= 2;
  obj.price *= 2;
  return obj;
});
console.log(newItem1);

const itemsObject2 = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
let newItem2 = itemsObject2.filter((obj) => {
  return obj.quantity > 2 && obj.price > 300;
});
console.log(newItem2);

run();
function run() {
  let res = 0;
  for (let i = 0; i < itemsObject2.length; i++) {
    res += itemsObject2[i].price * itemsObject2[i].quantity;
  }
  console.log(res);
}
let res = 0;
itemsObject2.forEach((a) => {
  res += a.price * a.quantity;
});
console.log(res);

// Question 2
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

let expectedReturnString = string
  .replace(/[\-]/g, " ")
  .replace(/ +/g, " ")
  .toLowerCase();
console.log(expectedReturnString);

// question 3

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

let expectedReturnArray = [...first, ...second];
expectedReturnArray.forEach((e) => {
  if (e.name === undefined) {
    e.name = "null";
  } else if (e.role === undefined) {
    e.role = "null";
  }
});
expectedReturnArray.sort((a, b) => a.uuid - b.uuid);
console.log(expectedReturnArray);
