import PropTypes from "prop-types"

export default function myMap(arr, func) {
    if (!func) {
      throw new Error("Function is not defined");
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(func(arr[i]));
    }
    return result;
}


