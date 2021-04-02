export function getErrorClasses(result) {
    let classes = "";
    classes +=
        result === "Failed"
            ? "alert alert-danger"
            : "";

    return classes;
}
export function getErrorMessage(responseResult) {
    let errMessage = "";
    errMessage +=
        responseResult["result"] === "Failed"
            ? "Oops : " + responseResult["message"]
            : "";

    return errMessage;
}
