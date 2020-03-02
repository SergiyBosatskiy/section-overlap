const overlap = require('./main');

const data = [
    { min: 0, max: 3 },
    { min: 4, max: 6 },
    { min: 7, max: 15 },
    { min: 16, max: 25 },
    { min: 50, max: 75 },
    { min: 100, max: 200 },
    { min: 80, max: 95 },
    { min: 300, max: 500 },
    { min: 30, max: 35 },
    { min: 27, max: 27 },
    { min: 1000, max: 2000 },
]

describe('Section Overlap', () => {
    test('should be define', () => {
        expect(overlap).toBeDefined();
        expect(overlap).toBeInstanceOf(Function);
    });

    test('zero number', () => {
        expect(overlap(data, 0, 0)).toBe(false);
    });

    test('overlapping bad', () => {
        expect(overlap(data, 0, 2)).toBe(false);
        expect(overlap(data, 0, 3)).toBe(false);
        expect(overlap(data, 3, 4)).toBe(false);
        expect(overlap(data, 3, 6)).toBe(false);
        expect(overlap(data, 6, 6)).toBe(false);
        expect(overlap(data, 6, 14)).toBe(false);
        expect(overlap(data, 17, 24)).toBe(false);
        expect(overlap(data, 17, 25)).toBe(false);
        expect(overlap(data, 17, 30)).toBe(false);
        expect(overlap(data, 100, 200)).toBe(false);
        expect(overlap(data, 100, 100)).toBe(false);
        expect(overlap(data, 100, 150)).toBe(false);
        expect(overlap(data, 27, 150)).toBe(false);
        expect(overlap(data, 27, 27)).toBe(false);
        expect(overlap(data, 27, 28)).toBe(false);
        expect(overlap(data, 80, 81)).toBe(false);
        expect(overlap(data, 80, 90)).toBe(false);
        expect(overlap(data, 26, 27)).toBe(false);
        expect(overlap(data, 400, 400)).toBe(false);
        expect(overlap(data, 400, 401)).toBe(false);
        expect(overlap(data, 410, 481)).toBe(false);
        expect(overlap(data, 450, 471)).toBe(false);
        expect(overlap(data, 29, 30)).toBe(false);
        expect(overlap(data, 29, 500)).toBe(false);
        expect(overlap(data, 60, 400)).toBe(false);
        expect(overlap(data, 60, 70)).toBe(false);
    });

    test('overlapping valid', () => {
        expect(overlap(data, 28, 29)).toBe(true);
        expect(overlap(data, 28, 28)).toBe(true);
        expect(overlap(data, 36, 36)).toBe(true);
        expect(overlap(data, 96, 99)).toBe(true);
        expect(overlap(data, 2001, 9999)).toBe(true);
        expect(overlap(data, 77, 79)).toBe(true);
        expect(overlap(data, 77, 78)).toBe(true);
        expect(overlap(data, 29, 29)).toBe(true);
        expect(overlap(data, 501, 999)).toBe(true);
        expect(overlap(data, 250, 270)).toBe(true);
    });

    test('function not mutable array argument', () => {
        const clone = [...data];
        overlap(clone, 1, 2);
        overlap(clone, 0, 4);
        overlap(clone, 200, 300);
        expect(clone).toEqual(data);
    })
})