import ngrok from "ngrok"
(async function() {
  const url = await ngrok.connect(4000);
  console.log(url)
})();