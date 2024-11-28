const symmetricDifferenceNumbers = (nums1: number[], nums2: number[]): number[] => {
    let filteredItems = nums1.filter(x => !nums1.includes(x))
        .concat(nums2.filter(x => !nums1.includes(x)));
    return filteredItems;
}

export { symmetricDifferenceNumbers }