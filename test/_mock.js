let Stdin = require("mock-stdin").stdin.Class;
let { Writable } = require("stream");

export default function (Reporter: Function, interceptor: Function) {
  return async function (callback) {
    let data = {
      stderr: "",
      stdout: ""
    };

    let buildStream = (key) => {
      let stream = new Writable;
      stream.columns = 1000;
      stream.write = (msg) => {
        stream.emit("data", msg);
        data[key] += msg;
      };
      return stream;
    };

    let opts = {
      stdin: new Stdin,
      stdout: buildStream("stdout"),
      stderr: buildStream("stderr"),
      emoji: true
    };

    let reporter = new Reporter(opts);

    reporter.peakMemory = 0;
    reporter.isTTY = true;
    reporter.getTotalTime = () => 0;

    await callback(reporter, opts);
    reporter.close();

    for (let key in data) {
      data[key] = data[key].trim();
    }

    return interceptor(data, reporter);
  };
}
