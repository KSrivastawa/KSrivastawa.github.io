//For getting the calendar data
new GitHubCalendar(".calendar", "KSrivastawa", { responsive: true });

//For Changing the texts inside the changingRoles Div
let changingRolesTextIndex = 0;
const changingRolesText = [
  "I am a Designer",
  "I am a Problem Solver",
  "I am a Continuos Learner",
  "I am a Full Stack Developer",
];

setInterval(() => {
  if (changingRolesTextIndex >= changingRolesText.length) {
    changingRolesTextIndex = 0;
  }
  changingRoles(changingRolesTextIndex++);
}, 2000);

function changingRoles(changingRolesTextIndex) {
  if (changingRolesTextIndex < changingRolesText.length) {
    let changingRolesDiv = document.getElementById("changingRoles");
    changingRolesDiv.innerHTML = `<h2>${changingRolesText[changingRolesTextIndex]}</h2>`;
    changingRolesTextIndex += 1;
  }
}

doucment.getElementById("rSume").addEventListner( "click", ()=>{
  window.open( "https://drive.google.com/file/d/1m4lWQIFOsShE-Y_seN37_ge6VgXWIQ3E/view" , "_blank" )  
} );


