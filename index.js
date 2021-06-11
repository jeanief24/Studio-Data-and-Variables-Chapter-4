// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let fuelTempCelsius = -225
let fuelLevel = "100%"
let weatherStatus = "clear"

// Write code to generate the LC04 report here:
//Launch+Checklist//
console.log ("LAUNCH CHECKLIST")
console.log ("---------------------------------")
console.log ("Date " + date)
console.log ("Time" + time)
console.log ("---------------------------------")
console.log (ASTRONAUT INFO)
console.log ("---------------------------------")

console.log (astronautCount)
console.log (astronautStatus)
console.log ("---------------------------------")


console.log (fuelTempCelsius)
console.log (fuelLevel)
console.log (crewMassKg)
console.log (fuelMassKg)
console.log (shuttleMassKg)
console.log (totalMassKg)

console.log (weatherStatus)
console.log ("Launch Checklist ") 
console.log ("Date " + date + " Time " + time)
console.log ("Astronaut Info " + "count " +astronautCount + " status " + astronautStatus)
console.log ("Fuel Data " + fuelTempCelsius + " " + fuelLevel)
console.log ("Mass Data/ Crew mass " + crewMassKg)
console.log ("Fuel Mass " + fuelMassKg)
console.log ("Shuttle Mass " + shuttleMassKg)
console.log ("Total Mass" + totalMassKg)
console.log ("Flight Plan")
console.log ("Weather " + weatherStatus)
console.log ("Overall Status")
console.log ("Clear for takeoff:  YES")


// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.