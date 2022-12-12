function checkSet(arrToBeSet, checkValue) {
    const set = new Set(arrToBeSet);

    const hasElement = set.has(checkValue);
    const howBig = set.size;

    return [hasElement, howBig];

}

console.log(checkSet([4, 5, 6], 3));