const axios = require('axios').default

const initializeMongoDB = async () => {
  // Get Teams List
  const getTeamsList = async () => {
    return await axios.get('https://statsapi.web.nhl.com/api/v1/teams').then(res => {
      return res.data.teams
    })
  }

  const teamsList = await getTeamsList()

  console.log('The Teams List', teamsList)
}

initializeMongoDB()