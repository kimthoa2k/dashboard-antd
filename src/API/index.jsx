export const getUsers = async () => {
  const res = await fetch("https://dummyjson.com/users");
  return await res.json();
  // return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  //   res.json()
  // );
};

export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return await res.json();
};
