if ("canParse" in URL) {
  console.log("Test valid absolute URL")
  let url = "https://developer.mozilla.org/"
  let result = URL.canParse(url)
  console.log(` URL.canParse("${url}"): ${result}`)

  console.log("\nTest relative URL with no base URL")
  url = "/en-US/docs"
  result = URL.canParse(url)
  console.log(` URL.canParse("${url}"): ${result}`)

  console.log("\nTest relative URL with valid base URL")
  let baseUrl = "https://developer.mozilla.org/"
  result = URL.canParse(url, baseUrl)
  console.log(` URL.canParse("${url}","${baseUrl}"): ${result}`)
} else {
  console.log("Can't validated passed url because of URL.canParse() being not supported")
}
