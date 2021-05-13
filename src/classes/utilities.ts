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
    static  getInstrumentColor(instrumentType: string) {
    switch (instrumentType) {
      case 'SYNTH': break;
      case 'SAMPLER':
        return 'rgba(90, 90, 200, 0.4)';
      case 'MONOOSC':
        return 'rgba(90, 200, 90, 0.4)';
      case 'DOUBLEOOSC':
        return 'rgba(200, 90, 90, 0.4)';
      case 'NEWSYNTH':
        return 'rgba(100, 200, 200, 0.4)';
      default: return 'rgba(200, 200, 200, 0.4)'; break;
    }
    return null;
  }
  
    
}