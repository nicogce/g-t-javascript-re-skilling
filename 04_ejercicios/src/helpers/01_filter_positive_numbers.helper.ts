const filterPositiveNumbers = (nums: number []): number[] => {
    const filteredItems: number[] = nums.filter((num) => {
        return num >= 0;
    });
    return filteredItems;
}

export {filterPositiveNumbers}