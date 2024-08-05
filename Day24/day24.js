api_key = 'ee2c3f0c8434eeb1477d404839acf343'
city = 'London'

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`)
const weatherDap = async () => {
    await fetch(`https://history.openweathermap.org/data/2.5/aggregated/day?lat=35&lon=139&month=2&day=2&appid=${api_key}`)
.then((result) => {
    const data = result.json();
    console.log(data);
}).catch((err) => {
    console.log(err);
});
}