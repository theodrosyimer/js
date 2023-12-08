/*
> Fetch API is capable to take an abort signal so we can cancel the request
[(20:06)](https://www.youtube.com/watch?v=ypPRdtjGooc&list=PLNYkxOF6rcIDjlCx1PcphPpmf43aKOAdF&index=24&t=20m06s)
*/
const controller = new AbortController()
const { signal } = controller

const downloadBtn = document.querySelector('.download')
const abortBtn = document.querySelector('.abort')

downloadBtn.addEventListener('click', fetchVideo)

abortBtn.addEventListener('click', function () {
  controller.abort()
  console.log('Download aborted')
})

function fetchVideo() {
  // ...
  fetch(url, { signal })
    .then(function (response) {
      // ...
    })
    .catch(function (e) {
      reports.textContent = `Download error: ${e.message}`
    })
}
