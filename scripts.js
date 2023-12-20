// Отримати мову користувача
const userLanguage = navigator.language.split('-')[0];
console.log(userLanguage)

// // Завантажити JSON файл
// fetch('content.json')
// .then(response => response.json())
// .then(data => {
//     // Отримати текст для відповідної мови
//     const content = data[userLanguage] || data.en; // За замовчуванням англійська

//     // Вставити текст в елементи на сторінці
//     document.getElementById('main-text').innerText = content['main-text'];
//     document.getElementById('second-text').innerText = content['second-text'];
// })
// .catch(error => console.error('Error loading content:', error));

    
// Dots animation
function showDots(selector, start_time) {
        const mainHeading = document.querySelectorAll(selector)[0];
        const samps = mainHeading.getElementsByTagName('samp');
        var count = 0;

    setTimeout(() => {
        const intervalId = setInterval(() => {
            samps[count].classList.add('norm-dot')

            count += 1
            
            if (count === 3) {
                clearInterval(intervalId);
            }
        }, 300);
    }, start_time);
}

showDots('.main-text', 350)
showDots('.second-text', 1700)


// On click for whole buttons
function add_on_click(button_name, url) {
    var downloadButton = document.getElementById(button_name);
    
    downloadButton.addEventListener("click", function () {
        window.location.href = url;
    });
}

add_on_click("download-button", "https://discord.com/")
add_on_click("tutorial-button", "https://discord.com/")


// Lang window
function smal_window(buttonName, windowName) {
    let button = document.getElementById(buttonName)
    let wind = document.getElementById(windowName)
    
    button.addEventListener('mouseenter', function () {
        wind.style.display = 'block';
    });

    wind.addEventListener('mouseenter', function () {
        wind.style.display = 'block';
    });

    wind.addEventListener('mouseleave', function () {
        wind.style.display = 'none';
    });
}

smal_window('lang', 'lang-wind')
smal_window('theme', 'theme-wind')


// Themes
function themes() {
    let themeButton = document.getElementById('theme')
    
    themeButton.addEventListener('click', function () {
        console.log('Change Theme')
    })
}

themes()