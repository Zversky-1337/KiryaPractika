function getStreetName(object) {
  const address = object.address?.street?.name;
  return address;
}

let user = {
  name: "John",
  address: {
    city: "New York",
    street: {
      name: "Broadway",
      number: 123,
    },
  },
};

let user2 = {
  name: "Pete",
  // адрес отсутствует
};

alert(getStreetName(user)); // должно вывести "Broadway"
alert(getStreetName(user2)); // должно вывести undefined
