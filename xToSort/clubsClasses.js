export let clubs = []

const clubsData = [
  {
    "name": "FC Bayern München",
    "initials": "FCB",
    "strength_init": 2,
    "morale_init": 1,
  },
  {
    "name": "Borussia Dortmund",
    "initials": "BVB",
    "strength_init": 1,
    "morale_init": 1,
  },
  {
    "name": "SC Freiburg",
    "initials": "SCF",
    "strength_init": 1,
    "morale_init": 1,
  },
  {
    "name": "SV Werder Bremen",
    "initials": "SVW",
    "strength_init": 0,
    "morale_init": 1,
  }
]


class Club {
  constructor(name, initials, strength_init, morale_init) {
    this.name = name,
    this.initials = initials,
    this.strength_init = strength_init,
    this.strength_curr = strength_init,
    this.morale_init = morale_init,
    this.morale_curr = morale_init
  }

  updateStrength(val) {
    this.strength_curr = this.strength_curr + val
  }

  printStrength() {
    console.log(this.strength_curr)
  }

  updateMorale(val) {
    this.morale_curr = this.morale_curr + val
  }
}


const createClubs = (clubsData) => {
  for (let i = 0 ; i < 4 ; i++) {
    let club = new Club(clubsData[i].name, clubsData[i].initials, clubsData[i].strength_init, clubsData[i].morale_init)
    clubs.push(club)
  }
}


createClubs(clubsData)




