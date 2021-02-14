
const axios = require('axios').default

const baseNHLApi = 'https://statsapi.web.nhl.com'
const teamListApi = '/api/v1/teams'
const seasonStatsApi = '/stats?stats=statsSingleSeason&season=20192020' // TODO Change to appropriate year

const initializeMongoDB = async () => {
  // Get Teams List
  const getTeamsList = async () => {
    return await axios.get(`${baseNHLApi}${teamListApi}`).then(res => {
      return res.data.teams
    })
  }

  const getTeamRoster = async (team) => {
    return await axios.get(`${baseNHLApi}${team.link}/roster`).then(res => {
      console.log('Roster', res.data.roster)
    })
  }

  const teamsList = await getTeamsList()

  console.log('The Teams List', teamsList[0])

  console.log(await getTeamRoster(teamsList[0]))
}

initializeMongoDB()