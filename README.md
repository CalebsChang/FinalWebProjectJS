## NAME OF APP: STARGAZING FOR EVERYONE
## PURPOSE:
* This is a space app, that the user will input which planet that they want to see during the night sky (or morning). From the user's input the app will calculate the TIME OF DAY(MORNING/NIGHT), THE PlANET, MONTH, and DAYS that the planet will be avaliable for them during the year 2024.
* From whatever the month and planet the user puts in the app, the app will output the days of that month that the planet will appear. As well as calculate the remaining amount of days that the user has left for the planet to appear (user-input of the days will occur eventually). 

## WEBSITE THAT I AM GETTING THE APPEARANCE OF THE PLANETS:  https://www.space.com/planet-guide-solar-system-2024 
## GLOBAL VARIABLES:
* userPlanet (String): Hold the planet of whichever the user want to look at.
* setTime (Boolean): Will be set TRUE if time of the day is night, FALSE if time of day is morning
* userMonth (String): Hold the month that the user's put in.
* mDay (Number): Holds the day of the month

## DECISION MAKING PROCESS
* If the month, time of day, and planet are true then the planet will appear that night, if the data is false then the app will tell the user the next time the planet will appear or will appear in the morning depending on the planet.

* EX1. For the planet Mercury: 
* IF the userMonth=March setTime=true userPlanet=Mercury. Then the app will display the days that Mercury will appear in the Evening/night during the month of March. 
* IF the userMonth=March, setTime=false, userPlanet=Mercury. Then the app will display the days that Mercury will appear in the morning/day during the month of March
* IF the userMonth=October, setTime=true, userPlanet=Mercury. Then the app will tell the user that Mercury doesn't appear in the month of October.
* It will also calculate and display how many days left you are able to see the planet that the user put in the app.