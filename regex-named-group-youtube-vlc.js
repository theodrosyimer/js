const data = `1. Basic data types
 ⌨️ (0:02:26) Basic Types
 ⌨️ (0:19:17) Let Bindings
 ⌨️ (0:25:05) Conditionals
 ⌨️ (0:29:33) Functions
 ⌨️ (0:40:50) Recursions
 ⌨️ (0:49:36) Operators

2. Basic data structures
 ⌨️ (0:50:03) Let Bindings
 ⌨️ (1:03:21) Tuples
 ⌨️ (1:15:26) Records
 ⌨️ (1:34:28) Arrays
 ⌨️ (1:48:55) Equalities

3. Advanced data structures
 ⌨️ (1:54:26) Varient Types
 ⌨️ (2:16:50) Polymorphic Varients
 ⌨️ (2:36:28) List

4. Higher-order functions
 ⌨️ (2:57:01) Functional Expressions
 ⌨️ (3:05:55) First-Class Functions
 ⌨️ (3:23:28) Partial Application
 ⌨️ (3:41:58) Labeled Parameters
 ⌨️ (4:00:23) Map
 ⌨️ (4:11:43) Fold
 ⌨️ (4:28:17) Pipe Operator

5. Imperative features
 ⌨️ (4:44:58) Unit
 ⌨️ (4:54:55) Exceptions
 ⌨️ (5:10:15) Iterations
 ⌨️ (5:16:53) Mutations
 ⌨️ (5:25:01) References`

// data.split('\n')//?

const re = /(?<timestamp>\d{1,2}:\d{2}:\d{2})\)\s(?<title>.+)/g

const matches = line => {
  if (line !== null) {
    return re.exec(line)
    // result.groups.title
  }
}

const getMatchesFrom = arrStr => arrStr.split('\n').map(matches)
getMatchesFrom(data) /*?*/

export {}
