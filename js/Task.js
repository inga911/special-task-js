export class Task {
    /**
 *
 * @param {number} fromYear year from
 * @param {number} toYear year to
 */
    constructor(fromYear, toYear) {
        this.fromYear = fromYear;
        this.toYear = toYear;
    }
    reverseNumber(c) {
        const digits = String(c).split('').map(Number).reverse().join('');
        return digits;
    }

    findYear() {
        const formattedYears = [];

        for (let k = this.fromYear; k <= this.toYear; k++) {
            if (k >= 1000 && k <= 9999) {
                const firstPart = k % 100;
                const secondPart = Math.floor(k / 100);
                if (this.reverseNumber(firstPart) <= 12) {
                    const formattedYear = `${k}-${this.reverseNumber(firstPart)}-${this.reverseNumber(secondPart)}`;
                    formattedYears.push(formattedYear);
                }
            }
        }

        return formattedYears;
    }

}