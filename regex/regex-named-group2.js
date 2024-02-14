/* eslint-disable no-unused-vars */
// @ts-ignore
const str1 = '/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin'
const re1 =
  /(?<bin>(\/bin:?|\/usr\/local\/bin):?(\/usr\/bin):?(\/usr\/local\/bin:?|\/bin):?)(?<sbin>(\/sbin:?|\/usr\/local\/sbin):?(\/usr\/sbin):?(\/usr\/local\/sbin:?|\/sbin):?)/g

// eslint-disable-next-line prefer-regex-literals
const re2 = new RegExp(
  /(?<bin>(\/bin:?|\/usr\/local\/bin):?(\/usr\/bin):?(\/usr\/local\/bin:?|\/bin):?)(?<sbin>(\/sbin:?|\/usr\/local\/sbin):?(\/usr\/sbin):?(\/usr\/local\/sbin:?|\/sbin):?)/,
  'g'
)

// Using `.matchAll` method with literal notation
// @ts-ignore
const matches2 = [...str1.matchAll(re1)][0] /*?*/
const { bin: bin2, sbin: sbin2 } = matches2.groups /*?*/

// Using `.matchAll` method with constructor function
// @ts-ignore
const matches4 = [...str1.matchAll(re2)][0] /*?*/
const { bin: bin4, sbin: sbin4 } = matches4.groups /*?*/

// Using `.exec`method with literal notation
const matches1 = re1.exec(str1) /*?*/
const { bin: bin1, sbin: sbin1 } = matches1.groups /*?*/

// Using `.exec`method with constructor function
const matches3 = re2.exec(str1) /*?*/
const { bin: bin3, sbin: sbin3 } = matches3.groups /*?*/

export {}
