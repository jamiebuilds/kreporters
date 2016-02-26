/* @flow */

import type { Stdout } from "../types.js";

let readline = require("readline");

export function clearLine(stdout: Stdout) {
  readline.clearLine(stdout, 0);
  readline.cursorTo(stdout, 0);
}
