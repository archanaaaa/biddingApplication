import _ from "lodash"

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();

    //_.slice(items,startIndex) // slice the array from start index => lodash function
    //_.take(items , pageSize) // takes the number of rows required to display in table = >lodash function
}