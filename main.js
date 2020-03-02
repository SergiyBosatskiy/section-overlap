function sectionOverlap (arr, min, max) {
    let result = true;
    const cloneIntervals = [...arr];
    cloneIntervals.push({ min, max });
    cloneIntervals.forEach(a => {
        cloneIntervals.forEach(b => {
            if (a !== b) {
                if (a.min <= b.max && b.min <= a.max) {
                    result = false;
                }
            }
        })
    })
    return result;
};

module.exports = sectionOverlap;
