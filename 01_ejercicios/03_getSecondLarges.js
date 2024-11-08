function getSecondLarges(nums) {
    let larges = -Infinity;
    let secondLarges = -Infinity;

    for (let i = 0; i < nums.length - 1; i++) {
        max = nums[i] > nums[i + 1] ? nums[i] : nums[i + 1];
        if (max > larges) {
            secondLarges = larges;
            larges = max;
        }
    }
    secondLarges = secondLarges == -Infinity ? larges : secondLarges;
    return secondLarges;
}

const nums = [-1, 323, 30, 400, -53];
const secondLarges = getSecondLarges(nums);
console.log(secondLarges);


const nums2 = [5, 5, 5, 5, 5];
const secondLarges2 = getSecondLarges(nums2);
console.log(secondLarges2); 