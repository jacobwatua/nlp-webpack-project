export const postData = async function (url='', data={}) {
  console.log(data);
  const response = await fetch(url, {
    method : "POST",
    credentials : "same-origin",
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  }
  catch (err) {
    console.log("Error", err);
  }
}


export const getMeaning = async function (baseUrl) {
  const response = await fetch(baseUrl);
  try {
      const newData = await response.json()
      return newData;
  }
  catch (err) {
      console.log("Error ", err);
  }
}

