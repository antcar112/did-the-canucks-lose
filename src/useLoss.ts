import { useEffect, useState } from 'react'

const URL = 'https://statsapi.web.nhl.com/api/v1/teams/23?expand=team.schedule.previous'

export const useLoss = () => {
  const [loading, setLoading] = useState(true)
  const [won, setWon] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL)
      const body = await res.json()
      const { away, home } = body.teams[0].previousGameSchedule.dates[0].games[0].teams
      const vanIsAway = away.team.id === 23 ? true : false
      const winnerIsAway = away.score > home.score ? true : false
      const vanIsWinner = (vanIsAway && winnerIsAway) || (!vanIsAway && !winnerIsAway)
      setWon(vanIsWinner)
      setLoading(false)
    }
    fetchData()
  }, [])

  return { won, loading }
}
