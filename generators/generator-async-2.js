/* eslint-disable no-await-in-loop */
/* eslint-disable no-unused-vars */

import { fileURLToPath } from 'url'

/* eslint-disable no-promise-executor-return */
function delay(ms) {
  return new Promise(resolve => {
  setTimeout(resolve, ms)
})}

async function* interval(ms) {
  while (true) {
    await delay(ms)
    yield Date.now()
  }
}

async function loopInterval(ms) {
  for await (const time of interval(ms)) {
    console.log(time)
  }
}

async function main(ms) {
  try {
    await loopInterval(ms)
  } catch (error) {
    console.log(error)
  } finally {
    // use to clean/close up any pending stuffs
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const time = process.argv[2] ?? 1000
  main(time)
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      // use to clean/close up any pending stuffs
    })
}
