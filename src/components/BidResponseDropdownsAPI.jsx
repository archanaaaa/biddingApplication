import config from "../config.json";

export async function Industry() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  await fetch(config["baseHost"] + "/masterdata/industry", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

export function Vertical() {
  var vertical;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(config["baseHost"] + "/masterdata/vertical", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      //   result.forEach((element) => {
      //     vertical.push(element.value);
      //   });
      vertical = result;
    })
    .catch((error) => console.log("error", error));
  return vertical;
}

export function BidType() {
  var bidtype = [];
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(config["baseHost"] + "/masterdata/bidtype", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      // result.forEach(element => {
      //     bidtype.push(element.value);
      // });
      bidtype = result;
    })
    .catch((error) => console.log("error", error));
  return bidtype;
}

export function ProjectType() {
  var projectType = [];
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(config["baseHost"] + "/masterdata/projecttype", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      result.forEach((element) => {
        projectType.push(element.value);
      });
      //projectType = result;
    })
    .catch((error) => console.log("error", error));
  return projectType;
}

export function Region() {
  var region = [];
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(config["baseHost"] + "/masterdata/region", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      result.forEach((element) => {
        region.push(element.value);
      });
      //region = result;
    })
    .catch((error) => console.log("error", error));
  return region;
}

export function Technologies() {
  var technologies = [];
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(config["baseHost"] + "/masterdata/technologies", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      result.forEach((element) => {
        technologies.push(element.value);
      });
      //technologies = result;
    })
    .catch((error) => console.log("error", error));
  //console.log(technologies)
  return technologies;
}
