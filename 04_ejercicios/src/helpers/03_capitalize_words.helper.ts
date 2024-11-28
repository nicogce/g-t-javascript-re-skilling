const capitalizeWords = (str: string): string => {
    const strCapitalized = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return strCapitalized;
}

export { capitalizeWords }