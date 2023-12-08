import { strict as assert } from 'node:assert'

/**
 *
 * @param {string} text
 */
export const slugify = text => {
  const textToEdit = text
  const maxLength = 70

  if (typeof textToEdit !== 'string') {
    throw new Error(
      `Input of type 'string' was expected but received an input of type '${typeof textToEdit}'`
    )
  }

  if (textToEdit.length > maxLength) {
    return `The text's length limit has been reached, please retry with less than ${maxLength} characters (received ${textToEdit.length}).`
  }

  return textToEdit
    .trim()
    .toLowerCase()
    .replace(/[^\s\w]|_/g, '')
    .split(' ')
    .filter(x => x)
    .join('-')
}

slugify('  @Th=is# []a{} %t:es^t,; \'-_fo|r" /a&< (s+)l>ugifi*ed! ~stri`ng?.') // ?

slugify('@Th=is# []a{} %t:es^t,; \'-_fo|r" /a&< (s+)l>ugifi*ed! ~stri`ng? gfgd hfh.') // ?

slugify('This a test for a slugified string and more.') // ?

// // @ts-expect-error
// slugify(42) // ?

assert.equal(
  slugify('This a test for a slugified string and more.'),
  'this-a-test-for-a-slugified-string-and-more'
)
assert.equal(
  slugify('  @Th=is# []a{} %t:es^t,; \'-_fo|r" /a&< (s+)l>ugifi*ed! ~stri`ng?.'),
  'this-a-test-for-a-slugified-string'
)
assert.equal(
  slugify('@Th=is# []a{} %t:es^t,; \'-_fo|r" /a&< (s+)l>ugifi*ed! ~stri`ng?.'),
  'this-a-test-for-a-slugified-string'
)

assert.notEqual(
  slugify('@Th=is# []a{} %t:es^t,; \'-_fo|r" /a&< (s+)l>ugifi*ed! ~stri`ng? gfgd hfh.'),
  'this-a-test-for-a-slugified-string',
  "The text's length limit has been reached"
)
