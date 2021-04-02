
const actionPlan = [
    {
        _id: "1234",
        activity_Headline: "Test 1",
        description: "",
        assigned_Group: "RFP",
        assigned_Individual: "test",
        target_date: "30-09-2020",
        business_vertical: 2.5,
        status: "On Hold",
    },
    {
        _id: "1235",
        activity_Headline: "Test 2",
        description: 5,
        assigned_Group: "RFP",
        assigned_Individual: "test",
        target_date: "30-09-2020",
        business_vertical: 2.5,
        status: "Active",
    },
    {
        _id: "1236",
        activity_Headline: "Test 3",
        description: "",
        assigned_Group: "RFP",
        assigned_Individual: "test",
        target_date: "30-09-2020",
        business_vertical: 3.5,
        status: "Active",
    },
    {
        _id: "1237",
        activity_Headline: "Test 4",
        description: "",
        assigned_Group: "RFP",
        assigned_Individual: "test",
        target_date: "30-09-2020",
        business_vertical: 3.5,
        status: "Canceled",
    },
    {
        _id: "1238",
        activity_Headline: "Test 5",
        description: 4,
        assigned_Group: "RFP",
        assigned_Individual: "test",
        target_date: "30-09-2020",
        business_vertical: 3.5,
        status: "On Hold",
    },
    {
        _id: "1239",
        activity_Headline: "Test 6",
        description: 6,
        assigned_Group: "RFP",
        assigned_Individual: "test",
        target_date: "30-09-2020",
        business_vertical: 3.5,
        status: "Canceled",
    },
    {
        _id: "1240",
        activity_Headline: "Test 7",
        description: 2,
        assigned_Group: "RFP",
        assigned_Individual: "test",
        target_date: "30-09-2020",
        business_vertical: 4.5,
        status: "Active",
    },
    {
        _id: "1241",
        activity_Headline: "Test 8",
        description: 1,
        assigned_Group: "RFP",
        assigned_Individual: "test",
        target_date: "30-09-2020",
        business_vertical: 3.5,
        status: "On Hold",
    },
    {
        _id: "1242",
        activity_Headline: "Test 9",
        description: 0,
        assigned_Group: "RFP",
        assigned_Individual: "test",
        target_date: "30-09-2020",
        business_vertical: 3.5,
        status: "Canceled",
    },
];

export function getActionPlans() {
    return actionPlan;
}
export function getActionPlan(id) {
    return actionPlan.find((m) => m._id === id);
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
