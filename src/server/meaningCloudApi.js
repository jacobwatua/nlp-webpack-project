const sendData = async function (url) {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("Error:", error);
  }
};

module.exports = {sendData}
