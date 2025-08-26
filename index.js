// axios
//   .get("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE:", res);
//   })
//   .cathc((err) => {
//     console.log("ERROR:", err);
//   });

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
    console.log(res.data);
  } catch (err) {
    console.log("ERROR:", err);
  }
};

getStarWarsPerson(5);
