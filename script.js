const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`
    image2.src = `img/undraw_feeling_proud_${color}.svg`
    image3.src = `img/undraw_conceptual_idea_${color}.svg`
}

function toggleLightDarkMode(mode) {
    nav.style.backgroundColor = mode === 'dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'
    textBox.style.backgroundColor = mode === 'dark' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)'
    toggleIcon.children[0].textContent = mode === 'dark' ? 'Dark Mode' : 'Light Mode'
    mode === 'dark' ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    mode === 'dark' ? imageMode('dark') : imageMode('light')
}

function switchMode(event) {
    //console.log(event.target.checked); // see target->checked:true or false

    if (event.target.checked) {
        //document.documentElement returns the highest level of the html element, which is usually 'html'
        //setAttribute('key', 'value')
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        toggleLightDarkMode('dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        toggleLightDarkMode('light')
    }
}

toggleSwitch.addEventListener('change', switchMode)

// Get localStorage status and keep it when refresh the page:
const currentTheme = localStorage.getItem('theme')
    // The first time there is no theme yet until checked:
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true
        toggleLightDarkMode('dark')
    }
}