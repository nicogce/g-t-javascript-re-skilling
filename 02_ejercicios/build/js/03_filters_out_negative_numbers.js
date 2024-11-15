"use strict";
let filterNegativeNums = (nums) => {
    let filterNums = [];
    nums.forEach(num => {
        if (num < 0) {
            filterNums.push(num);
        }
    });
    return filterNums;
};
const nums = [-1, 23, 0, 0 - 321, 42, -2];
console.log(filterNegativeNums(nums));
