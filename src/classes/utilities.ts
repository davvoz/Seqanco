export class Utilities {
    static getRandomInt(maxValue: number, minValue: number): number {
        return Math.floor(Math.random() * (maxValue - 0)) + minValue;
    }
    static makeid(length: number): string {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
}