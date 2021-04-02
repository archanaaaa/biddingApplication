export function setCookie(cname, cvalue, hours) {
  let d = new Date();
  d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

export function checkCookie() {
  let user = getCookie("token");
  if (user !== "") {
    console.log("checking user : " + user);
    return user;
  } else {
    return null;
  }
}

export function setBidId(cname, cvalue, hours) {
  let d = new Date();
  d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export function setBidName(cname, cvalue, hours) {
  let d = new Date();
  d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export function setBidOwner(cname, cvalue, hours) {
  let d = new Date();
  d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export function setClientName(cname, cvalue, hours) {
  let d = new Date();
  d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export function setExpectedDate(cname, cvalue, hours) {
  let d = new Date();
  d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getBidId() {
  let cname = "BidId"
  //  console.log(document.cookie)
  let name = cname + "=";
  let ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      //  console.log(c.substring(name.length, c.length))
      return c.substring(name.length, c.length);

    }
  }
  return "";
}

export function getBidName() {
  let cname = "BidName"
    //console.log(document.cookie)
  let name = cname + "=";
  let ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
        //console.log(c.substring(name.length, c.length))
      return c.substring(name.length, c.length);

    }
  }
  return "";
}

export function getBidOwner() {
  let cname = "BidOwner"
    //console.log(document.cookie)
  let name = cname + "=";
  let ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
       //console.log(c.substring(name.length, c.length))
      return c.substring(name.length, c.length);

    }
  }
  return "";
}

export function getClientName() {
  let cname = "ClientName"
    //console.log(document.cookie)
  let name = cname + "=";
  let ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
        //console.log(c.substring(name.length, c.length))
      return c.substring(name.length, c.length);

    }
  }
  return "";
}
export function getExpectedDate() {
  let cname = "ExpectedDate"
    //console.log(document.cookie)
  let name = cname + "=";
  let ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      //  console.log(c.substring(name.length, c.length))
      return c.substring(name.length, c.length);

    }
  }
  return "";
}


export function checkBidCookie() {
  let bidId = getCookie("BidID");
  if (bidId !== "") {
    //  console.log("checking Bid Id : " + bidId);
    return bidId;
  } else {
    return null;
  }
}


