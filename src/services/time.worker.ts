//ty to https://www.youtube.com/watch?v=x8PBWobv6NY&t=2774s

const ctx: Worker = self as any;
let start: any;
let accurateStop: any;
let round: any;
let timeout: any;
let expected = 0;

ctx.addEventListener('message', (e) => {
    let speed = e.data.speed;
    let command = e.data.command;

    accurateTimer( speed, console.log('error'));
    if (command === 'start') {
        start();
    } else if(command === 'stop'){
        accurateStop();
    }
})

function accurateTimer( timeInterval: number,errorCallback: any) {
    let speed = timeInterval;

    start = () => {
        expected = Date.now() + speed;
        timeout = setTimeout(round, speed)
        console.log('started');
    }

    accurateStop = () => {
        clearTimeout(timeout);
    }

    round = () => {
        let drift = Date.now() - expected;
        if (drift > speed) {
            if (errorCallback) {
                errorCallback();
            }
        }
        //callback();
        ctx.postMessage({ message: 'tick' });
        expected += speed;
        timeout = setTimeout(round, speed - drift);
    }
   
}

