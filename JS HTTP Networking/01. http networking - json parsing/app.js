// async function fetchData() {
//   let res = await fetch("data.json");
//   let resObj = await res.json();
//   console.log(resObj);
// }

// fetchData();

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
