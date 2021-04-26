/// <reference lib="webworker" />
addEventListener('message', ({ data }) => {
  postMessage(accurateTimer(data.callback, data.timeInterval, data.errorCallback));

});
function accurateTimer(callback: any, timeInterval: number, errorCallback: any) {
  let speed = timeInterval;
  let expected: any;
  let timeout: any;
  let start = () => {
    expected = Date.now() + speed;
    timeout = setTimeout(round, speed)
    console.log('started');
  }
  let accurateStop = () => {
    clearTimeout(timeout);
    console.log('started');
  }
  let round = () => {
    let drift = Date.now() - expected;
    if (drift > speed) {
      if (errorCallback) {
        errorCallback();
      }
    }
    callback();
    expected += speed;
    timeout = setTimeout(round, speed - drift);
  }
}
