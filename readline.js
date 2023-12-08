import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const readLineInterface = readline.createInterface({ input, output })

const survey = {
  name: 'What is your name?',
  age: 'What is your age?',
  job: 'What is your job?',
}

const objectToMap = object => Object.entries(object)
const mapToObject = map => Object.fromEntries(map)

/**
 *
 */
const surveyReducer = async (answers, [propertyName, currentQuestion]) => {
  Array.isArray(answers)

  console.log(propertyName, currentQuestion) /*?*/
  return [
    ...answers,
    [propertyName, await readLineInterface.question(`\n${currentQuestion}\t`)],
  ]
}
const getAnswersFromSurvey = async surveyObject => {
  const surveyAnswersMap = objectToMap(surveyObject).reduce(surveyReducer, [])
  readLineInterface.close()
  return surveyAnswersMap
}

console.log('\nSurvey Answers', await getAnswersFromSurvey(survey))
