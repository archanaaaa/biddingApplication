
const fakeReview = [
    {
        _id: "1234",
        comment: "This is Test Comment 1",
        category: "Category123",
        reference: "RFP",
        raised_by: "user 3",
        target_date: "31-09-2020",
        status: "On Hold",
    },
    {
        _id: "1235",
        comment: "This is Test Comment 3",
        category: "Category1234",
        reference: "RFP",
        raised_by: "admin",
        target_date: "28-09-2020",
        status: "Active",
    },
    {
        _id: "1236",
        comment: "This is Test Comment 3",
        category: "Test",
        reference: "RFP",
        raised_by: "test",
        target_date: "01-10-2020",
        status: "Active",
    },
    {
        _id: "1237",
        comment: "This is Test Comment 4",
        category: "Sample",
        reference: "RFP",
        raised_by: "user 1",
        target_date: "30-09-2020",
        status: "Canceled",
    },
    {
        _id: "1238",
        comment: "This is Test Comment 5",
        category: "test123",
        reference: "RFP",
        raised_by: "admim",
        target_date: "29-09-2020",
        status: "On Hold",
    },
    {
        _id: "1239",
        comment: "This is Test Comment 6",
        category: "Category123",
        reference: "RFP",
        raised_by: "test",
        target_date: "30-09-2020",
        status: "Canceled",
    },

];

export function getReviews() {
    return fakeReview;
}
export function getReview(id) {
    return fakeReview.find((m) => m._id === id);
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
