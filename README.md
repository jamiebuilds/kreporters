# kreporters

A library to make pretty reporters.

## Usage

```sh
$ npm install kreporters
```

### ConsoleReporter

Output pretty color printed console messages.

```javascript
var reporters = require("kreporters");
var reporter = new reporters.ConsoleReporter;
```

### JSONReporter

Output JSON formatted messages delimitered with a newline.

```javascript
var reporters = require("kreporters");
var reporter = new reporters.JSONReporter;
```

### NoopReporter

Output nothing. Useful for mocking and silent mode.

```javascript
var reporters = require("kreporters");
var reporter = new reporters.NoopReporter;
```

### BufferReporter

Push all actions/messages to a buffer.

```javascript
var reporters = require("kreporters");
var reporter = new reporters.BufferReporter;
reporter.getBuffer();
```

## API

### reporter.getTotalTime(): number

Get the amount of milliseconds that have elapsed since reporter creation and the current
time.

### reporter.step(current: number, total: number, message: string, emoji?: string): void

### reporter.error(message: string): void

Log an error message.

### reporter.info(message: string): void

Log an information message.

### reporter.warn(message: string): void

Log a warning message.

### reporter.success(message: string): void

Log a success message.

### reporter.log(message: string): void

Log an arbitrary message.

### reporter.command(command: string): void

Log a shell command.

### reporter.header(command: string, pkg: { name: string, version: string }): void

Output a banner, used at the start of a program.

### reporter.footer(showPeakMemory?: boolean): void

Output a footer showing the total time since the reporter was created.

### reporter.activity(): { tick: (name: string) => void, end: () => void }

Create a spinner showing activity.

### reporter.progress(total: number): () => void

Create a progress bar.

### reporter.question(question: string): Promise<boolean>

### reporter.select(header: string, question: string, options: Array<string>): Promise<string>
