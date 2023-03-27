const init = () => {
  // add an event listener to the form, inputForm
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    console.log(input.value);

    // fetch("http://localhost:3000/movies")
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // replace original Title and Summary with data retrieved from server
        // work inside the second '.then' of our fetch request
        // first access the DOM and store the two elements in js.
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");
        // OR we could add id attributes to the h4 and p tags directly.
        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
