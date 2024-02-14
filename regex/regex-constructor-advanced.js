/* eslint-disable no-unused-vars */
const r = (() => {
  // @ts-ignore
  const sourceText = document
    .querySelector('div[ng-init]')
    .getAttribute('ng-init')
  if (sourceText == null) {
    return { error: 'Not found' }
  }
  const searchPattern = '"title":s"(.*)(?:",s"url")'
  const regex = new RegExp(searchPattern, 'gim')
  const replacePattern = '$1'
  const replacedText = sourceText.replace(regex, replacePattern)
})()
