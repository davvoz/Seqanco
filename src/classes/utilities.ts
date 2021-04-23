export class Utilities {
    static getRandomInt(maxValue: number, minValue: number): number {
        return Math.floor(Math.random() * (maxValue - 0)) + minValue;
    }
}