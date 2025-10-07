const btn = document.getElementById("ThemeSwitcher")

const theme = document.getElementById('Theme-link')

btn.addEventListener('click', function(){
    if(theme.getAttribute("href") == 'LightTheme.css'){
        theme.href = 'DarkTheme.css'
    } else {
        theme.href = 'LightTheme.css'
    }
})

const btnBurger = document.getElementById('burger-switch-theme');

btnBurger.addEventListener('click', function(){
    if(theme.getAttribute("href") == 'LightTheme.css'){
        theme.href = 'DarkTheme.css'
    } else {
        theme.href = 'LightTheme.css'
    }
})