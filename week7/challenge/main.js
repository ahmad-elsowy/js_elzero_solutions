let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<hr>`);
let adminCounter = 1;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  } else {
    document.write(
      `<div>The Admin For Team ${adminCounter++} Is ${myAdmins[i]}</div>`
    );
  }
  let k = 0;
  document.write(`<br>`);
  document.write(`<div>Team Members:</div>`);
  document.write(`<br>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0] === myEmployees[j][0]) {
      document.write(` <div>- ${++k} ${myEmployees[j]}</div>`);
      document.write(`<br>`);
    } else {
      continue;
    }
  }
  document.write(`<hr>`);
}
