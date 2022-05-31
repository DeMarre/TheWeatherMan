window.onload = function example() {
  fetch("http://localhost:3004/weather")
    .then((response) => {
      return response.json();
    })
    .then(() => {
      console.log();
      // city or location? //
      data.location.current.condition.wind.forEach((london) => {
        let location = document.createElement("");
        let current = document.createElement("");
        let condition = document.createElement("");
        let wind = document.createElement("");
        location.innerHtml = london.location;
        current.innerHTML = london.current;
      });
    });
};
