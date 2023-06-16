import { handleSubmit } from "../src/client/js/formhandle.js";
import { postData, getMeaning } from "../src/client/js/meaningAPi.js";



/**
 * @description Test suite for the handleSubmit function.
 *
 * describe("handleSubmit", () => {}
 * @description Set up the initial DOM structure before each test.
*/




describe("handleSubmit", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="root"></div>
      <form id="form">
        <input type="text" id="article" value="Test article" />
        <button type="submit" id="submit">Submit</button>
      </form>
    `;
  });

  test("it should prevent form submission, call APIs, and update the DOM", async () => {

    const responseObject = {
      agreement: "Agreement",
      confidence: 80,
      irony: "Irony",
      subjectivity: "Subjectivity",
      sentence_list: {
        text: "Sample sentence",
      },
    };


    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(responseObject),
      })
    );

    const event = { preventDefault: jest.fn() };
    await handleSubmit(event);


  });
});

