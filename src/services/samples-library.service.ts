import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SamplesLibraryService {

    public buffers = [];
    constructor(private _audioContext: AudioContext) {
        this.loadSounds('../../assets/wav/bigkick1.wav'); // hit
        this.loadSounds('../../assets/wav/newSnapSnare.wav');
        this.loadSounds('../../assets/wav/HAT2alfa.wav');
        this.loadSounds('../../assets/wav/a_1d.wav');
        this.loadSounds('../../assets/wav/MD4_CouldntBeEasier.wav');
        this.loadSounds('../../assets/wav/frperc.wav');
        this.loadSounds('../../assets/wav/xcrash.wav');
    }

    private loadSounds(path: string): void {
        const request = new XMLHttpRequest();
        request.open('GET', path, true);
        request.responseType = 'arraybuffer';
        const context = this._audioContext;
        request.onload = () => {
            context.decodeAudioData(
                request.response,
                buffer => {
                    if (!buffer) {
                        alert('error decoding file data: ' + path);
                        return;
                    }
                    // @ts-ignore*/
                    this.buffers.push(buffer);
                },
                error => {
                    console.error('decodeAudioData error', error);
                }

            );
        };
        request.onerror = () => {
            alert('BufferLoader: XHR error');
        };
        request.send();
    }
}
