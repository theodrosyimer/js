const p = new Promise((res, _rej) => {
  res(1)
})

const p2 = () => console.log('No')
if (p.then) {
  console.log('Yes')
}
if (!p2.then) {
  console.log('No')
}
