/* @flow */
/* global stream$Writable */
/* global stream$Readable */
/* global tty$ReadStream */
/* global tty$WriteStream */

export type Stdout = stream$Writable | tty$WriteStream;
export type Stdin = stream$Readable | tty$ReadStream;
export type Package = {
  name: string,
  version: string
};
