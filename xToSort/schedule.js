const shuffleClubs = (clubs) => {
  // Create a shallow copy of the original array
  const shuffledClubs = clubs.slice();

  // Apply the Fisher-Yates shuffle algorithm to the copy
  for (let i = shuffledClubs.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the elements at indices i and j
    const temp = shuffledClubs[i];
    shuffledClubs[i] = shuffledClubs[j];
    shuffledClubs[j] = temp;
  }
  return shuffledClubs;
}


export const createSchedule = (clubs) => {
  const numClubs = clubs.length;
  const numMatchdays = 2 * (numClubs - 1); // Two halves

  const shuffledClubs = shuffleClubs(clubs)

  // Initialize the schedule[]
  const schedule = Array.from({ length: numMatchdays }, () => []);

  // Generate first half of the schedule using a modified round-robin algorithm
  for (let day = 0; day < numClubs - 1; day++) {
    for (let i = 0; i < numClubs / 2; i++) {
      const homeClub = shuffledClubs[i].initials;
      const awayClub = shuffledClubs[numClubs - 1 - i].initials;
      if (day % 2 === 1) {
        schedule[day].push({ "homeClub": awayClub, "awayClub": homeClub, "homeGoals": 0, "awayGoals": 0, "homePoints": 0, "awayPoints": 0 });
      } else {
        schedule[day].push({ "homeClub": homeClub, "awayClub": awayClub, "homeGoals": 0, "awayGoals": 0, "homePoints": 0, "awayPoints": 0 });
      }
    }

    // Rotate the clubs
    const temp = shuffledClubs[1];
    for (let i = 1; i < numClubs - 1; i++) {
        shuffledClubs[i] = shuffledClubs[i + 1];
    }
      shuffledClubs[numClubs - 1] = temp;
  }

  // Generate second half of the schedule by switching home/away
  for (let day = 0; day < numClubs - 1; day++) {
    for (let match of schedule[day]) {
      schedule[day + numClubs - 1].push({ "homeClub": match.awayClub, "awayClub": match.homeClub, "homeGoals": 0, "awayGoals": 0, "homePoints": 0, "awayPoints": 0  });
    }
  }

  return schedule
}