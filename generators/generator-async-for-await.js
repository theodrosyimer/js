/* eslint-disable no-unused-vars */
/* eslint-disable no-await-in-loop */
/*
Create a async generator
Example from: [Kyle Simpson - JavaScript: The Recent Parts (backup footage) - (Youtube)](https://www.youtube.com/watch?v=SLlIErbqhus)
*/
async function* fetchURLS(urls) {
  for (const url of urls) {
    const resp = await fetch(url)

    if (!resp.ok) {
      yield undefined
    }
    const text = await resp.text()

    yield text.toUpperCase()
  }
}

/*
Consume the async generator without `for await`
*/
// async function main(favoriteSites) {
//   const it = fetchURLS(favoriteSites)

//   while (true) {
//     const res = await it.next()
//     if (res.done) break
//     const text = res.value

//     console.log(text)
//   }
// }

// Consume the async generator with `for await`
async function main(favoriteSites) {
  for await (const text of fetchURLS(favoriteSites)) {
    console.log(text)
  }
}
