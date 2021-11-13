const person = {
  name: "Jack ",
  age: 23,
  gfName: "ema watson",
  address: "Dhanmondi",
  phone: "0123444",
  friends: ["taufiq", "tazwar", "ridu"],
};
const { phone, gfName, age, job, friends } = person;

// const { phone } = person;
// const phone = person.phone;

console.log(gfName, phone, age, job, friends);
console.log(gfName, phone, age, job, friends);

//Another way

// const friendsArray = ["Sakib khan", "amir khan", "salman khan", "srk"];
// const [firstFriend, nextFriend, ...restFriends] = friendsArray;
// console.log(restFriends);
