let browserPrefersDark = false

const updateColorScheme = () => {
  const shouldUseDarkTheme =
    window.localStorage.getItem("theme") == "dark" || browserPrefersDark
  document.body.className = shouldUseDarkTheme ? "theme-dark" : "theme-light"
}

const changeThemeOverride = () => {
  if (!window.localStorage.getItem("theme")) {
    window.localStorage.setItem("theme", browserPrefersDark ? "dark" : "light")
  } else {
    window.localStorage.setItem("theme",
      window.localStorage.getItem("theme") == "dark" ? "light" : "dark")
  }
}

window.matchMedia("(prefers-color-scheme: dark)").addListener(query => {
  browserPrefersDark = query.matches
  updateColorScheme()
})

window.onload = updateColorScheme()

document.getElementById("icon").addEventListener("click", () => {
  changeThemeOverride()
  updateColorScheme()
})
