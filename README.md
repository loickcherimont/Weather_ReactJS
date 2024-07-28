# WeatherApp_ReactJS

![Preview](/github/preview.png)


## :information_source: About  

Weather app upkept using the famous front-end Javascript library: ReactJS.
The target of this project was usage of API with ReactJS.


## :wrench: Tools
- ReactJS 18.2.0 (From Node.js)
- Tailwindcss 3.3.2
- [Open Weather](https://openweathermap.org/)


## :warning: Prerequisites
You need an **API key** from [Open Weather Map](https://openweathermap.org/) website.  

Enter your **API key** here in `/src/components/FilterBar.jsx`

```js
// INDICATION : /!\ Delete API key before pushing /!\
const YOUR_API_KEY = 'ENTER_YOUR_API_KEY_HERE';
```


## :inbox_tray: Setup for contributions

1. Open a terminal and run these commands :

```bash
git clone git@github:loickcherimont/Weather_ReactJS.git
cd Weather_ReactJS
```

2. Retrieve all dependencies and fix possibles bugs :

```bash
npm i
npm audit fix
```

3. Launch the project

```bash
npm run dev
```

4. Here you are on the main page

![Main Page](/github/mainpage.png)


### :thinking: How does it run ?

1. Write a **city name** on the search bar

![Search bar demo](/github/searchbar_demo.png)

2. Click on `Enter` button on the keyboard or :mag_right: with your mouse.  

You are going to get weather informations about the target place. 

![Saint-Nazaire's weather (FRANCE)](/github/stnazaire_weather.png)

> :information_source: For not valid entry, there is an error message!


## :rocket: Features
- Replace the white background
- Display a more specific error message
- *BACK-END: Secure the app using Golang/Node*


## :key: License

Made by Loick Cherimont  

Under MIT License  


Last edited on: 2024-07-28
