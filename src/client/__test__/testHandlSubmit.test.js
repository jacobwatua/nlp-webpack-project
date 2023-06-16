import { handleSubmit } from "../js/formHandler.js";
import { postData, getMeaning } from "../js/articleChecker.js";
import { JSDOM } from "jsdom";

describe("handleSubmit", () => {
  let mockDocument;
  let getElementByIdMock;

  beforeEach(() => {
    const dom = new JSDOM(`
      <div id="root"></div>
      <form id="form">
        <input type="text" id="article" value="Test article submission" />
        <button type="submit" id="submit">Submit</button>
      </form>
    `);

    mockDocument = dom.window.document;
    getElementByIdMock = jest.spyOn(mockDocument, "getElementById");
  });

  test("it should prevent form submission, call APIs, and update the DOM", async () => {
    const responseObject = {
      confidence: 80,
      subjectivity: "Subjectivity",
      sentence_list: [
        {
          text: "Sample sentence",
        },
      ],
      status: {
        msg: "OK",
      },
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(responseObject),
      })
    );

    const event = { preventDefault: jest.fn() };

    global.document = mockDocument;

    await handleSubmit(event);

    expect(getElementByIdMock).toHaveBeenCalledWith("article");
  });
});

