let st = "Elzero Web School";

if ( st.match(/W/gi).toString().toLocaleLowerCase() === "w") {
    console.log("Good");
  }

  //-----------------
  if (typeof st.length !== "string") {
    console.log("very Good");
  }

  //--------------------

  if (typeof st.length === "number") {
    console.log("v.Good");
  }

  //-----------------
  if (st.substring(0,6).repeat(2) === "ElzeroElzero") {
    console.log("bad");
  }