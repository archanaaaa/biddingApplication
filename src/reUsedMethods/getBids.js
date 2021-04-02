import config from "../config.json";

export default {
    async getBids() {
        var responseList;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: "GET",
            headers: myHeaders,
        };
        try {
            await fetch(config["baseHost"] + "/bids", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if (result !== null) {

                        responseList = result;
                    } else {
                    }
                })
                .catch((error) => {
                    console.log("Fetching Bid List failed error", error);
                    responseList = "isError";
                });
        } catch (err) {
            console.log(err);
            responseList = "isError";
        }
        return responseList;
    },

};
