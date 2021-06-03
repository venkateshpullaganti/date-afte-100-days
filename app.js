const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const dateTime = new Date();

  const dateAfter100Days = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100
  );

  let day = dateAfter100Days.getDate();
  let month = dateAfter100Days.getMonth() + 1;

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  const formattedDate = `${day}/${month}/${dateAfter100Days.getFullYear()}`;

  response.send(formattedDate);
});
app.listen(3000);

module.exports = app;
