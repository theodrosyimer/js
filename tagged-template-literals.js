/* eslint-disable no-use-before-define */

// function custom(strings, ...values) {
//   console.log(strings, values)
//   return values.reduce(
//     (finalString, value, index) =>
//       `${finalString}${value}${strings[index + 1]}`,
//     strings[0]
//   )
// }

// const firstName = 'Theo'
// const hobby = 'programming'

// console.log(custom`My name is ${firstName} and i love ${hobby}`)

/* Usage Example */

// tagging strings
const language = 'fr'
const user = {
  name: 'Theodros Yimer',
  birthday: new Date(1982, 0, 12),
}
const translated = translate`
  <div>
    ${'t.hello'} ${user.name}, ${'t.yourBirthdayIs'} ${user.birthday}
  </div>
`

console.log('translated:', translated)


/* Implementations */

function translate(literalStrings, ...interpolations) {
  const translations = getTranslations(language)

  return interpolations.reduce((fullString, interpolation, index) => {
    if (interpolation.toString().startsWith('t.')) {
      interpolation = translations?.[interpolation.slice(2)]
    }
    return `${fullString}${interpolation}${literalStrings[index + 1]}`
  }, literalStrings[0])
}

function getTranslations(lang) {
  if (lang === 'en') {
    return {
      hello: 'Hello',
      yourBirthdayIs: 'your birthday is',
    }
  }
  if (lang === 'fr') {
    return {
      hello: 'Bonjour',
      yourBirthdayIs: 'ton anniversaire est le',
    }
  }
}

export {}
