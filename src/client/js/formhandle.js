import { postData, getMeaning } from "./meaningAPi.js";

async function handleSubmit(event) {
  event.preventDefault();
  let formText = document.getElementById("article").value;
  postData("/article", { article: formText }).then(() => {
    getMeaning("/article/meaning").then((res) => {
      if (res.status.msg !== "OK") {
        alert("Missing required parameter(s): txt, url, or doc");
      } else {
        const root = document.querySelector("#root");
        const {
          agreement,
          confidence,
          irony,
          subjectivity,
          sentence_list,
        } = res;
        root.innerHTML =
          `<p><b>Results</b></p>` +
          `<p>Agreement: in ${agreement.toLowerCase()}</p>` +
          `<p>Confidence: ${confidence} %</p>` +
          `<p>Irony: ${irony.toLowerCase()}</p>` +
          `<p>Subjectivity: ${subjectivity.toLowerCase()}</p>` +
          `<p><b>Article</b>:<br><hr> ${sentence_list[0].text}`;
      }
    });
  });
}

export { handleSubmit };
