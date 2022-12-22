let msg = prompt("Print Number From – To", "Example: 5-20");
if (msg !== null) {
  let msgAr = msg.split("-");

  console.log(msgAr);
  let sortedMsg = msgAr.sort((a, b) => a - b);
  console.log(sortedMsg);

  for (let i = +sortedMsg[0]; i <= +sortedMsg[1]; i++) {
    console.log(i);
  }
} else {
  location.reload();
}

