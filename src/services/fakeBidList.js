
const bids = [
  {
    _id: "1234",
    name: "Test 1",
    owner: "Dell",
    type: "RFP",
    target_date: "22-01-2020",
    status: "In Progress",
  },
  {
    _id: "1235",
    name: "Test 2",
    owner: "HCL",
    type: "RFI",
    target_date: "",

  },
  {
    _id: "1236",
    name: "Test 3",
    owner: "",
    type: "RFP",
    target_date: "18-05-2020",
    status: "In Progress",
  },
  {
    _id: "1237",
    name: "Test 4",
    owner: "",
    type: "RFI",
    target_date: "",
  },
  {
    _id: "1238",
    name: "Test 5",
    owner: "ABC",
    type: "RFI",
    target_date: "22-05-2020",
    status: "In Progress",
  },
  {
    _id: "1239",
    name: "Test 6",
    owner: "GOOGLE",
    type: "RFP",
    target_date: "",
  },
  {
    _id: "1240",
    name: "Test 7",
    owner: "AWS",
    type: "RFP",
    target_date: "",

  },
  {
    _id: "1241",
    name: "Test 8",
    owner: "",
    type: "RFI",
    target_date: "22-07-2020",
    status: "In Progress",
  },
  {
    _id: "1242",
    name: "Test 9",
    owner: "",
    type: "RFP",
    target_date: "",
  },
];

export function getBids() {
  return bids;
}

export function getBid(id) {
  return bids.find((m) => m._id === id);
}

// export function saveBid(movie) {
//   let movieInDb = bids.find((m) => m._id === movie._id) || {};
//   movieInDb.name = movie.name;
//   movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now();
//     bids.push(movieInDb);
//   }

//   return movieInDb;
// }

// export function deleteMovie(id) {
//   let movieInDb = bids.find((m) => m._id === id);
//   bids.splice(bids.indexOf(movieInDb), 1);
//   return movieInDb;
// }
