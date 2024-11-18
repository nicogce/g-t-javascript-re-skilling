type filterNums = (arrayNums: number[]) => number[];

const filterNegativeNums: filterNums = (nums) => {
    let filterNums: number[] = [];
    nums.forEach(num => {
        if (num < 0) {
            filterNums.push(num);
        }
    });

    return filterNums;
}

const filterPositiveNums: filterNums = (nums) => {
    let filterNums: number[] = [];
    nums.forEach(num => {
        if (num >= 0) {
            filterNums.push(num);
        }
    });

    return filterNums;
}

const nums: number[] = [-1, 23, 0, 0 -321, 42, -2];
console.log(filterNegativeNums(nums));
