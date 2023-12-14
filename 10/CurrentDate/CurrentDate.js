/* 
Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

const currentDate = () => {
  const date = new Date()
  const currentD = `Today is : ${date}`
  const time = date.getTime()
  const localTimeString = date.toLocaleTimeString('EN-EU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
  const currentTime = `Current time is : ${localTimeString}`
  const message = currentD + currentTime

  return message
}

currentDate()
