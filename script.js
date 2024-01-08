copyInfo = (elementId) => {
  let info = document.getElementById(elementId).innerText;
  navigator.clipboard
    .writeText(info)
    .then(() => {
      console.log("Success");
    })
    .catch((err) => {
      console.error("Error in copying text: ", err);
    });
};
