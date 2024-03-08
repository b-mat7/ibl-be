export const dice = (range) => Math.round(Math.random()*range)


export const matchCalc = (match) => {
  // get clubs from DB, use (club.strength +/* morale, etc...)
  let homeGoals = homeClub.strength_current + dice(6)
  let awayGoals = awayClub.strength_current + dice(6)
  let homePoints = 0, awayPoints = 0

  if(homeGoals > awayGoals) {
    homePoints = 3
    awayPoints = 0
  } else if(homeGoals < awayGoals ) {
    homePoints = 0
    awayPoints = 3
  } else {
    homePoints = 1
    awayPoints = 1
  }

  // oder ändere/update das match{} selbst
  return {
    "homeClub": homeClub.initials,
    "awayClub": awayClub.initials,
    "homeGoals": homeGoals,
    "awayGoals": awayGoals,
    "homePoints": homePoints,
    "awayPoints": awayPoints
  }
}


// bekommt matchDay[{match1}, ...] mit allen matches
export const matchDayCalc = () => {
  let matchDayResults = []
  for(let i = 0 ; i < matchDay.length ; i++ ) {
  // for all matches: call matchCalc() and fill match{}
  // push match{} to matchDayResults[] 
  }
}

// bekommt matchDayResults[]
export const matchDay = () => {
  for(let i=0 ; i < matchDayResults.length ; i++) {
    //... update club{}s ...
  }
}