/* @flow */

import type { Stdout } from "../types.js";
import { clearLine } from "./util.js";

export default class Spinner {
  constructor(stdout: Stdout = process.stderr) {
    this.current = 0;
    this.stdout  = stdout;
    this.delay   = 60;
    this.chars   = Spinner.spinners[28].split("");
    this.text    = "";
    this.id      = null;
  }

  stdout: Stdout;
  current: number;
  delay: number;
  chars: Array<string>;
  text: string;
  id: ?number;

  static spinners: Array<string> = [
    "|/-\\",
    "⠂-–—–-",
    "◐◓◑◒",
    "◴◷◶◵",
    "◰◳◲◱",
    "▖▘▝▗",
    "■□▪▫",
    "▌▀▐▄",
    "▉▊▋▌▍▎▏▎▍▌▋▊▉",
    "▁▃▄▅▆▇█▇▆▅▄▃",
    "←↖↑↗→↘↓↙",
    "┤┘┴└├┌┬┐",
    "◢◣◤◥",
    ".oO°Oo.",
    ".oO@*",
    "🌍🌎🌏",
    "◡◡ ⊙⊙ ◠◠",
    "☱☲☴",
    "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏",
    "⠋⠙⠚⠞⠖⠦⠴⠲⠳⠓",
    "⠄⠆⠇⠋⠙⠸⠰⠠⠰⠸⠙⠋⠇⠆",
    "⠋⠙⠚⠒⠂⠂⠒⠲⠴⠦⠖⠒⠐⠐⠒⠓⠋",
    "⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠴⠲⠒⠂⠂⠒⠚⠙⠉⠁",
    "⠈⠉⠋⠓⠒⠐⠐⠒⠖⠦⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈",
    "⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈",
    "⢄⢂⢁⡁⡈⡐⡠",
    "⢹⢺⢼⣸⣇⡧⡗⡏",
    "⣾⣽⣻⢿⡿⣟⣯⣷",
    "⠁⠂⠄⡀⢀⠠⠐⠈"
  ];

  setText(text: string) {
    this.text = text;
  }

  start() {
    this.current = 0;
    this.render();
  }

  render() {
    if (this.id) {
      clearTimeout(this.id);
    }

    let msg = `${this.chars[this.current]} ${this.text}`;
    clearLine(this.stdout);
    this.stdout.write(msg);
    this.current = ++this.current % this.chars.length;
    this.id = setTimeout(() => this.render(), this.delay);
  }

  stop() {
    if (this.id) {
      clearTimeout(this.id);
      this.id = null;
    }

    clearLine(this.stdout);
  }
}
