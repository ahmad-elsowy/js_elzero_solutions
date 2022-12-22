function createSelectBox(startYear, endYear) {
  console.log(`<select>`);
  let j = startYear;
  for (let i = 0; i < endYear - startYear; i++) {
    console.log(`  <option value="${j}">${j++}</option>`);
  }
  console.log(`</select>`);
}
createSelectBox(2000, 2021);

// <select>
//   <option value="2000">2000</option>
// </select>
