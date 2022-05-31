const { response } = require("express");
const express = require("express");
const app = express();
const port = 3004;

app.set("views", "./views");
app.set("view engine", "pug");
app.set("weather", "./weather");
// app.set("london", "./london");
app.use(express.static("public"));
app.use(express.static("views"));

// /current.json

app.get("/", (req, res) => {
  res.render("weather");
});

app.post("/", (req, res) => {
  res.send("");
});
//api.weatherapi.com/v1/current.json?key=18f9122497f94f61809174851222505&q=louisville&aqi=no

// app.get("/london", (req, res) => {
//   res.send({
//     location: {
//       name: "London",
//       region: "City of London, Greater London",
//       country: "United Kingdom",
//       lat: 51.52,
//       lon: -0.11,
//       tz_id: "Europe/London",
//       localtime_epoch: 1653501371,
//       localtime: "2022-05-25 18:56",
//     },
//     current: {
//       last_updated_epoch: 1653500700,
//       last_updated: "2022-05-25 18:45",
//       temp_c: 18.0,
//       temp_f: 64.4,
//       is_day: 1,
//       condition: {
//         text: "Partly cloudy",
//         icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
//         code: 1003,
//       },
//       wind: {
//         wind_mph: 18.6,
//         wind_kph: 29.9,
//         wind_degree: 260,
//         wind_dir: "W",
//         pressure_mb: 1014.0,
//         pressure_in: 29.94,
//         precip_mm: 0.0,
//         precip_in: 0.0,
//         humidity: 56,
//         cloud: 25,
//         feelslike_c: 18.0,
//         feelslike_f: 64.4,
//         vis_km: 10.0,
//         vis_miles: 6.0,
//         uv: 5.0,
//         gust_mph: 15.0,
//         gust_kph: 24.1,
//       },
//     },
//   });
// });

// app.get("/louisville", (req, res) => {
//   res.send({
//     location: {
//       name: "Louisville",
//       region: "Kentucky",
//       country: "United States of America",
//       lat: 38.25,
//       lon: -85.76,
//       tz_id: "America/Kentucky/Louisville",
//       localtime_epoch: 1653501831,
//       localtime: "2022-05-25 14:03",
//     },
//     current: {
//       last_updated_epoch: 1653500700,
//       last_updated: "2022-05-25 13:45",
//       temp_c: 28.3,
//       temp_f: 82.9,
//       is_day: 1,
//       condition: {
//         text: "Partly cloudy",
//         icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
//         code: 1003,
//       },
//       wind: {
//         wind_mph: 12.5,
//         wind_kph: 20.2,
//         wind_degree: 160,
//         wind_dir: "SSE",
//         pressure_mb: 1016.0,
//         pressure_in: 29.99,
//         precip_mm: 0.2,
//         precip_in: 0.01,
//         humidity: 63,
//         cloud: 75,
//         feelslike_c: 33.9,
//         feelslike_f: 93.0,
//         vis_km: 16.0,
//         vis_miles: 9.0,
//         uv: 5.0,
//         gust_mph: 14.3,
//         gust_kph: 23.0,
//       },
//     },
//   });
// });

http: app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});

// post.route;
// values;
