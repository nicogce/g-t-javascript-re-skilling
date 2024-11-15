let filterNegativeNums = (nums: Array<number>) => {
    let filterNums: Array<number> = [];
    nums.forEach(num => {
        if (num < 0) {
            filterNums.push(num);
        }
    });

    return filterNums;
}

const nums: Array<number> = [-1, 23, 0, 0 -321, 42, -2];
console.log(filterNegativeNums(nums));
