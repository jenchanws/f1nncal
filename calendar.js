const monthRange = [5, 12]

const classNameForGoal = goal =>
  (goal.type == "girlMonth") ? ["girl-month-complete", "girl-month-planned"] :
  (goal.type == "break") ? ["break-complete", "break-planned"] :
  (goal.type == "bobs") ? ["bobs-complete", "bobs-planned"] : [null, null]

const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "long" })
const now = new Date()

const monthTemplate = document.getElementById("month-template").content
const dayTemplate = document.getElementById("day-template").content

const generateMonths = () => {
  const main = document.getElementById("main")

  for (let month = monthRange[0]; month <= monthRange[1]; month++) {
    let monthStart = new Date(now.getFullYear(), month - 1, 1)
    let monthName = monthFormatter.format(monthStart)

    let monthDiv = monthTemplate.cloneNode(true)
    let monthNameHeader = monthDiv.querySelector("h3")
    monthNameHeader.textContent = monthName
    generateDays(month, monthDiv.querySelector("ol"))

    if (monthStart.getDay() >= 2)
      monthNameHeader.style = "margin-top: 60px; margin-bottom: -60px"
    main.appendChild(monthDiv)
  }
}

const generateDays = (month, monthDiv) => {
  const numberOfDays = new Date(now.getFullYear(), month, 0).getDate()
  
  let row = 1
  for (let day = 1; day <= numberOfDays; day++) {
    const column = new Date(now.getFullYear(), month - 1, day).getDay() + 1
    if (column == 1 && day != 1) row++
    
    let dayDiv = dayTemplate.cloneNode(true)
    let dayCell = dayDiv.querySelector("li")
    dayCell.id = `day-${month}-${day}`
    dayCell.className += ` day-${day} row-${row} col-${column}`
    dayCell.textContent = day

    if (day == numberOfDays)
      dayCell.className += ` day-last`
    if (day + 7 > numberOfDays)  // last 7 days of the month
      dayCell.className += ` row-last`

    monthDiv.appendChild(dayDiv)
  }
}

const populateCalendar = () => {
  let currentGoal = undefined

  goals.forEach(goal => {
    const [year, month, day] = goal.from
    const goalStart = new Date(year, month - 1, day)
    
    for (let d = 0; d < goal.days; d++) {
      const date = new Date(year, month - 1, day + d)

      let [mo, dy] = [date.getMonth() + 1, date.getDate()]
      let dayDiv = document.getElementById(`day-${mo}-${dy}`)
      let [completeClassName, plannedClassName] = classNameForGoal(goal)
      dayDiv.className += " " +
        ((date < now) ? completeClassName : plannedClassName)

      if (now.getFullYear() == date.getFullYear() &&
          now.getMonth() == date.getMonth() &&
          now.getDate() == date.getDate()) {
        currentGoal = goal
      }
    }
  })

  if (!currentGoal) {
    let currentDiv = document.querySelector(".current")
    currentDiv.parentNode.removeChild(currentDiv)
    return
  }

  let currentDiv = document.getElementById("current")
  const [className, _] = classNameForGoal(currentGoal)
  currentDiv.className = className
  currentDiv.textContent =
    (currentGoal.type == "girlMonth") ? "Girl Month" :
    (currentGoal.type == "break") ? "YouTube Break" :
    (currentGoal.type == "bobs") ? "Bobs Month" : ""
}
