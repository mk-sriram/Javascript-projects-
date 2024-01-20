const process = require("process"); 
const apikey = process.env.WEATHER_APP_API; 


//retriving the elements from the document page
const locButton = document.querySelector('.loc-button'); 
const todayInfo = document.querySelector('.today-info');
const todayWeatherIcon = document.querySelector('.today-weather i')
const  todayTemp = document.querySelector('weather-temp'); 
const daysList = document.querySelector('.days-list');



//Mapping of weather condition codes to icon class names ( dpending on the response from API )

const weatherIconMap = {
    '01d': 'sun',
    '01n': 'moon',
    '02d': 'sun',
    '02n': 'moon',
    '03d': 'cloud',
    '03n': 'cloud',
    '04d': 'cloud',
    '04n': 'cloud',
    '09d': 'cloud-rain',
    '09n': 'cloud-rain',
    '10d': 'cloud-rain',
    '10n': 'cloud-rain',
    '11d': 'cloud-lightning',
    '11n': 'cloud-lightning',
    '13d': 'cloud-snow',
    '13n': 'cloud-snow',
    '50d': 'water',
    '50n': 'water'
};