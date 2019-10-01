  // Q1.READ ALL THE INSTRUCTIONS CAREFULLY
  // Select all the list items on the page and convert to array (array from)
  


  // Filter for only the elements that contain the word 'Flexbox' hint use textContent (filter method)

  // map down to a list of time strings Hint look up dataset mdn and think 'time'... you will need to create a new variable called filtered 

  // map to an array of seconds, 
  /* .map(timeCode => {
    const parts = timeCode.split(':').ENTER SOME CODE HERE);
    //console.log(parts); 
    return SOME CODE GOES HERE
}) */

 

 const dataArray = [ document.getElementsByTagName("li")];

 

 const filtered = dataArray.textContent;
 dataArray.textContent = 'Flexbox';
 console.log(filtered);


  // reduce to get total....This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!


  //How to chain them, don't use ; at the end of a line. const filtered = array method
  //.array method
  //.array method
  //etc.
  



  //Q2
  //Given this array: `[3,62,234,7,23,74,23,76,92]`, use the array filter method and an arrow function to create an array of the numbers greater than `70`
  //const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]