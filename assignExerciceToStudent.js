// * Only works when `exercices.length > students.length`
// ? Make it more robust?
const EXERCICES_COUNT = 51

const STUDENTS = [
  'Mouss',
  'Juan',
  'Sihem',
  'Abu',
  'Miriam',
  'Warda',
  'Corneille',
  'Salim',
  'Martins',
  'Mohamed',
  'Theo',
  'Patrick',
  'Yann',
  'Kylian',
  'Kenzo',
  'Alex',
  'Aymerick',
  'Jeffny',
  'Eva',
  'Luis',
  'Magilan',
  'Adel',
]

function assignExerciceToStudent(students, ExercicesCount) {
  const studentsList = students
  // eslint-disable-next-line no-param-reassign
  students = null
  const exercices = [...Array(ExercicesCount)].map((_e, i) => i)

  return () => {
    if (studentsList.length === 1) {
      const exerciceIndex = Math.max(Math.floor(Math.random() * exercices.length), 1)

      console.log(`${studentsList[0]}: Exercice ${exercices[exerciceIndex]}`)

      exercices.splice(exerciceIndex, 1)
      studentsList.splice(0, 1)
      console.log(
        `Elèves restant:\t${studentsList.length}\nExercices restant:\t${exercices.length}`
      )

      console.log('Tous les élèves sont passés')
      if (exercices) {
        console.log(`Les exercices non assignés sont : ${JSON.stringify(exercices)}`)
      }
      return
    }
    const exerciceIndex = Math.max(Math.floor(Math.random() * exercices.length), 1)
    const studentIndex = Math.max(Math.floor(Math.random() * studentsList.length), 1)

    console.log(`${studentsList[studentIndex]} --> Exercice ${exercices[exerciceIndex]}`)

    exercices.splice(exerciceIndex, 1)
    studentsList.splice(studentIndex, 1)
    console.log(
      `Elèves restant:\t${studentsList.length}\nExercices restant:\t${exercices.length}\n`
    )
  }
}

const rollTheDice = assignExerciceToStudent(STUDENTS, EXERCICES_COUNT) // ?

rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
rollTheDice()
