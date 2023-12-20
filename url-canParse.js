if ('canParse' in URL) {
  console.log('Test valid absolute URL')
  let url = 'https://developer.mozilla.org/'
  console.log(` URL.canParse("${url}"): ${URL.canParse(url)}`)

  console.log('\nTest relative URL with no base URL')
  url = '/en-US/docs'
  console.log(` URL.canParse("${url}"): ${URL.canParse(url)}`)

  console.log('\nTest relative URL with valid base URL')
  console.log(
    ` URL.canParse("${url}","${baseUrl}"): ${URL.canParse(
      url,
      'https://developer.mozilla.org/',
    )}`,
  )
} else {
  console.log(
    "Can't validated passed url because of URL.canParse() being not supported",
  )
}
