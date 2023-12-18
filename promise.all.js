// source: "Theo should use Effect" video on youtube
let EXECUTION_COUNT = 0

/**
 * @param {number} ms
 * @param {boolean} logger
 */
async function waitFor(ms, { logger = false, name } = {}) {
  return new Promise(resolve => {
    setTimeout(
      resolve(
        logger
          ? console.log(
              `${name ? `\`${name}()\`: ` : ''}Promise ${
                EXECUTION_COUNT != null ? `${++EXECUTION_COUNT} ` : ''
              }executed in ${(ms / 1000).toFixed(3)}s`,
            )
          : undefined,
      ),
      ms,
    )
  })
}

async function WORK(i) {
  if (i === 4) {
    throw new Error('WORK: 4 sucks!')
  }

  await waitFor(i, { logger: true, name: this.name })
  console.log('`WORK()`: resolved:', i)

  return i ** 2
}

async function MAIN() {
  try {
    console.log('`MAIN()`: running...\n')
    const promises = Array(10)
      .fill(0)
      .map((_, i) => WORK.call({ name: 'WORK' }, i))

    const results = await Promise.all(promises)

    console.log('\n`MAIN()`: Results:', results)
  } catch (error) {
    console.log('\n`MAIN()`: Failed for reason:', error.message)
    return error
  }
}

MAIN()
