/* eslint-disable no-unused-vars */
import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'

await pipeline(
  // createReadStream('lowercase.txt'),
  process.stdin,
  async function* (source, { signal }) {
    source.setEncoding('utf8') // Work with strings rather than `Buffer`s.
    for await (const chunk of source) {
      yield chunk.toUpperCase()
    }
  },
  // createWriteStream('uppercase.txt'),
  process.stdout,
)
