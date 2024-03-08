// export const seasonTable = (clubs) => {
  // let gTable = clubs.sort((a,b) => (b.goals - b.goals_against) - (a.goals - a.goals_against))
  // let table = gTable.sort((a,b) => b.points - a.points)
  // return table
//}

// sort for points -> goal diff -> goals
export const seasonTable = (clubs) => {
  return clubs.sort((a, b) => (b.points - a.points) || ((b.goals - b.goals_against) - (a.goals - a.goals_against))) || (b.goals - a.goals)
}
