//Add transition class DOM and remove after 500ms
let trans = () => {
    document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 500)
}

var isClicked;

//Detect if browser prefers dark or light mode
//Set isClicked according to preference

const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")
if (isDarkTheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark')
        document.getElementById("icon").src="icon_dark.png";
        var isClicked = 1;
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        document.getElementById("icon").src="icon.png";
        var isClicked = 0;
}

//Toggle theme and icon by clicking the icon

var toggleImage = document.querySelector('input[name=theme]')
    toggleImage.addEventListener('click', function(){
    if(isClicked == 0) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        document.getElementById("icon").src="icon_dark.png";
        isClicked = !isClicked;
        
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        document.getElementById("icon").src="icon.png";
        isClicked = !isClicked;
        }
    })

