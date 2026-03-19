export const tournamentTally = (input) => {
  const teams = {};

  const getTeam = (name) => {
    if (!teams[name]) {
      teams[name] = {
        name,
        mp: 0,
        w: 0,
        d: 0,
        l: 0,
        p: 0,
      };
    }
    return teams[name];
  };

  if (input.trim() !== '') {
    const lines = input.trim().split('\n');

    for (const line of lines) {
      const [team1Name, team2Name, result] = line.split(';');

      const team1 = getTeam(team1Name);
      const team2 = getTeam(team2Name);

      team1.mp++;
      team2.mp++;

      if (result === 'win') {
        team1.w++;
        team1.p += 3;

        team2.l++;
      } else if (result === 'loss') {
        team2.w++;
        team2.p += 3;

        team1.l++;
      } else if (result === 'draw') {
        team1.d++;
        team2.d++;

        team1.p++;
        team2.p++;
      }
    }
  }

  // Convert to array
  const sortedTeams = Object.values(teams);

  // Sort: points desc, then name asc
  sortedTeams.sort((a, b) => {
    if (b.p !== a.p) {
      return b.p - a.p;
    }
    return a.name.localeCompare(b.name);
  });

  // Format output
  const header = 'Team                           | MP |  W |  D |  L |  P';
  const rows = sortedTeams.map(team => {
    return `${team.name.padEnd(31)}| ${team.mp.toString().padStart(2)} | ${team.w.toString().padStart(2)} | ${team.d.toString().padStart(2)} | ${team.l.toString().padStart(2)} | ${team.p.toString().padStart(2)}`;
  });

  return [header, ...rows].join('\n');
};