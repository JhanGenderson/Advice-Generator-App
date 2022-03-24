const URL_API = "https://api.adviceslip.com/advice";
const rootContainer = document.getElementById("root");
const btnSubmit = document.getElementById("btn");

btnSubmit.addEventListener("click", () => {
  rootContainer.innerHTML = "";
  fetchAdvice();
});
const fetchAdvice = () => {
  fetch(URL_API)
    .then((res) => res.json())
    .then((data) => setAdvice(data))
    .catch((err) => console.log(err));
};

const setAdvice = (data) => {
  //   console.log(data);
  const adviceData = {
    id: data.slip.id,
    advice: data.slip.advice,
  };

  let idAdvice = document.createElement("span");
  idAdvice.innerHTML = `ADVICE # ${adviceData.id}`;
  rootContainer.appendChild(idAdvice);

  let adviceMssg = document.createElement("p");
  adviceMssg.innerHTML = `» ${adviceData.advice} «`;
  rootContainer.appendChild(adviceMssg);

  let imgDivider = document.createElement("img");
  imgDivider.setAttribute("src", "./images/pattern-divider-desktop.svg");
  rootContainer.appendChild(imgDivider);
};
