const pipe =
  (...fns) =>
  args =>
    fns.reduce((result, fn) => fn(result), args)

const convertDateTimeToLocale =
  options =>
  (lang = 'fr') =>
  date =>
    new Intl.DateTimeFormat(lang, {
      ...options,
    }).format(date)

// const setDateTimeOptions = options => convertDateTimeToLocale(options)
const setDateTimeLanguage = fn => lang => fn(lang)

export const app = pipe(convertDateTimeToLocale, setDateTimeLanguage)

//
//
const d = new Date(1982, 0, 12, 13, 24)
const e = new Date('1985-1-29')
const f = new Date('1986, 5, 17')
const g = new Date('1954,7,23')
const h = new Date('1984,11,01')

const LANG_FR = 'fr'

const dateOptions = {
  dateStyle: 'full',
  timeStyle: 'short',
  // year: 'numeric',
  // weekday: 'long',
  // month: 'long',
  // day: 'numeric',
}

const setDateTimeToLocale = app(dateOptions)

const getFrenchDateTime = setDateTimeToLocale(LANG_FR)

getFrenchDateTime(d) /*?*/

//
const setWeekdayToLocale = app({ weekday: 'long' })

const getDayOfBirthFromDateInFrench = setWeekdayToLocale(LANG_FR)

getDayOfBirthFromDateInFrench(h) /*?*/
