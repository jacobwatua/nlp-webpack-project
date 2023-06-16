import { postData, getMeaning } from "./articleChecker.js";

function hasOnlyOneProperty(obj) {
  return Object.keys(obj).length === 1;
}

function displayErrorMessage() {
  const err = document.querySelector(".error");
  err.style.display = "block";
  setTimeout(() => {
    err.style.display = "none";
  }, 2000);
}

async function handleSubmit(event) {
  event.preventDefault();
  let formText = document.getElementById("article").value;
  postData("/article", { article: formText }).then(() => {
    getMeaning("/article/meaning").then((res) => {
      if (hasOnlyOneProperty(res)) {
        displayErrorMessage();
      } else {
        const root = document.querySelector("#root");
        const {
          confidence,
          subjectivity,
          sentence_list,
        } = res;
        const scoreTag = sentence_list[0].score_tag;
        const polarity = getPolarity(scoreTag);

        root.innerHTML =
          `<p><b>Results</b></p>` +
          `<p>Confidence: ${confidence} %</p>` +
          `<p>Subjectivity: ${subjectivity.toLowerCase()}</p>` +
          `<p>Polarity: ${polarity}</p>` +
          `<p><b>Article</b>:<br><hr> ${sentence_list[0].text}... </p>`;
      }
    });
  });
}

function getPolarity(scoreTag) {
  if (scoreTag === "P") {
    return "Positive";
  } else if (scoreTag === "N") {
    return "Negative";
  } else {
    return "Neutral";
  }
}

export { handleSubmit };
