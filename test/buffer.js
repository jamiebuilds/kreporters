import BufferReporter from "../src/buffer.js";
import build from "./_mock.js";

let test = require("ava");

let getBuff = build(BufferReporter, (data, reporter) => reporter.getBuffer());

test("BufferReporter.finished", async (t) => {
  t.same(await getBuff((r) => r.footer()), [{
    type: "finished",
    data: 0
  }]);
});

test("BufferReporter.step", async (t) => {
  t.same(await getBuff((r) => r.step(1, 5, "foobar")), [{
    type: "step",
    data: {
      current: 1,
      total: 5,
      message: "foobar"
    }
  }]);
});

test("BufferReporter.log", async (t) => {
  t.same(await getBuff((r) =>   r.log("foobar")), [{
    type: "log",
    data: "foobar"
  }]);
});

test("BufferReporter.success", async (t) => {
  t.same(await getBuff((r) => r.success("foobar")), [{
    type: "success",
    data: "foobar"
  }]);
});

test("BufferReporter.error", async (t) => {
  t.same(await getBuff((r) => r.error("foobar")), [{
    type: "error",
    data: "foobar"
  }]);
});

test("BufferReporter.info", async (t) => {
  t.same(await getBuff((r) => r.info("foobar")), [{
    type: "info",
    data: "foobar"
  }]);
});

test("BufferReporter.command", async (t) => {
  t.same(await getBuff((r) => r.command("foobar")), [{
    type: "command",
    data: "foobar"
  }]);
});

test("BufferReporter.warn", async (t) => {
  t.same(await getBuff((r) => r.warn("foobar")), [{
    type: "warning",
    data: "foobar"
  }]);
});
