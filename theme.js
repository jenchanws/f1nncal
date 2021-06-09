let trans = () => {
    document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 500)
}

var isClicked = 0;
var checkbox = document.querySelector('input[name=theme]')
    checkbox.addEventListener('click', function(){
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

