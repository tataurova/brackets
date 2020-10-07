module.exports = function check(str, bracketsConfig) {
    let pairs = [];
    bracketsConfig.forEach((item) => {
        pairs.push(item.join(``));
    })

    while (pairs.some(pair => str.includes(pair))) {
        bracketsConfig.forEach((arr) => {
            let pairForDelete = arr.join(``);
            while (str.includes(pairForDelete)) {
                str = str.replace(pairForDelete, ``);
            }
        });
    }

    return str.length === 0;
}
