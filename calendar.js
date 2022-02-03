const startYear = 2021
const monthRange = [-14, 20]
const firstMonth = 11

const classNameForGoal = goal =>
  (goal.type == "girlMonth") ? ["girl-month-complete", "girl-month-planned"] :
  (goal.type == "guyMonth") ? ["guy-month-complete", "guy-month-planned"] :
  (goal.type == "break") ? ["break-complete", "break-planned"] :
  (goal.type == "bobs") ? ["bobs-complete", "bobs-planned"] : [null, null]

const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "long" })
const now = new Date()

const monthTemplate = document.getElementById("month-template").content
const dayTemplate = document.getElementById("day-template").content

const generateMonths = () => {
  const main = document.getElementById("main")

  let year = startYear

  for (let month = monthRange[0]; month <= monthRange[1]; month++) {
    let monthStart = new Date(year, month - 1, 1)
    let monthName = monthFormatter.format(monthStart)

    let monthDiv = monthTemplate.cloneNode(true)
    let monthNameHeader = monthDiv.querySelector("h3")
    monthNameHeader.textContent = monthName
    generateDays(monthStart.getFullYear(), monthStart.getMonth() + 1,
      monthDiv.querySelector("ol"))

    if (monthStart.getMonth() == 0) {
      monthNameHeader.textContent += " " + monthStart.getFullYear()
    }

    if (month < firstMonth) {
      console.log(monthDiv)
      monthDiv.querySelector(".month").className += " before"
    }

    main.appendChild(monthDiv)
  }
}

const generateDays = (year, month, monthDiv) => {
  const numberOfDays = new Date(year, month, 0).getDate()
  
  let row = 1
  for (let day = 1; day <= numberOfDays; day++) {
    const column = new Date(year, month - 1, day).getDay() + 1
    if (column == 1 && day != 1) row++
    
    let dayDiv = dayTemplate.cloneNode(true)
    let dayCell = dayDiv.querySelector("li")
    dayCell.id = `day-${year}-${month}-${day}`
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

      let [yr, mo, dy] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
      let dayDiv = document.getElementById(`day-${yr}-${mo}-${dy}`)
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

  notes.forEach(note => {
    const [year, month, day] = note.date
    let dayDiv = document.getElementById(`day-${year}-${month}-${day}`)
    if (!dayDiv) {
      return
    }
    dayDiv.className += " note"

    tippy(dayDiv, {
      content: note.text,
      theme: "f1nn",
      allowHTML: true,
      interactive: true,
    })
  })

  streams.forEach(stream => {
    const [year, month, day] = stream.date
    let dayDiv = document.getElementById(`day-${year}-${month}-${day}`)
    if (!dayDiv) {
      return
    }
    dayDiv.className += " stream"

    let div = document.createElement("div")

    let date = new Date(Date.UTC(year, month - 1, day))
    let dateStr = date.toLocaleString("en-US", { timeZone: "UTC", month: "long", day: "numeric", year: "numeric" })
    let content
    if (stream.vod || stream.vod === null) {
      content = `
        ${dateStr} stream:
        <br><b>${stream.title}</b>`
      if (typeof stream.vod === "string") {
        content += `<br><a href="${stream.vod}">${!!stream.vod.match(/twitch/) ? "Twitch" : "YouTube"} VOD</a>`
      } else if (stream.vod === null) {
        content += `<br><i>No VOD available.</i>`
      } else {
        const numVods = stream.vod.length
        stream.vod.forEach((link, i) => {
          content += `<br><a href="${link}">${!!link.match(/twitch/) ? "Twitch" : "YouTube"} VOD (${i + 1}/${numVods})</a>`
        })
      }
    } else {
      content = `Stream scheduled:<br><i>${stream.title}</i>`
    }

    div.innerHTML = content
    twemoji.parse(div)

    tippy(dayDiv, {
      content: div.innerHTML,
      theme: "f1nn",
      allowHTML: true,
      interactive: true,
    })
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
    (currentGoal.type == "guyMonth") ? "Guy Month" :
    (currentGoal.type == "break") ? "YouTube Break" :
    (currentGoal.type == "bobs") ? "Bobs Month" : ""
}
