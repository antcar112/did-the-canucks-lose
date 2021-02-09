import { useEffect, useState } from 'react'

const URL = 'https://statsapi.web.nhl.com/api/v1/teams/23?expand=team.schedule.previous'

export const useLoss = () => {
  const [loading, setLoading] = useState(true)
  const [won, setWon] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL)
      const body = await res.json()
      const { away, home } = body.teams[0].previousGameSchedule.dates[0].games[0].teams
      const vanIsAway = away.team.id === 23
      const winnerIsAway = away.score > home.score
      setWon((vanIsAway && winnerIsAway) || (!vanIsAway && !winnerIsAway))
      setLoading(false)
    }
    fetchData()
  }, [])

  return { won, loading }
}
