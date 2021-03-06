const getFormattedTime = (time) => {
  const hm = time.slice(0, time.length - 2)
  const dn = time.slice(time.length - 2)
  return `${hm} ${dn}`
}

const getTimeline = async () => {
  const days = [
    { date: 'Feb, 1', path: 'week1/feb1.json' },
    { date: 'Feb, 2', path: 'week1/feb2.json' },
    { date: 'Feb, 3', path: 'week1/feb3.json' },
    { date: 'Feb, 4', path: 'week1/feb4.json' },
    { date: 'Feb, 5', path: 'week1/feb5.json' },
    { date: 'Feb, 6', path: 'week1/feb6.json' },
    { date: 'Feb, 7', path: 'week1/feb7.json' },
    { date: 'Feb, 8', path: 'week2/feb8.json' },
    { date: 'Feb, 9', path: 'week2/feb9.json' },
    { date: 'Feb, 10', path: 'week2/feb10.json' },
    { date: 'Feb, 11', path: 'week2/feb11.json' },
    { date: 'Feb, 12', path: 'week2/feb12.json' },
    { date: 'Feb, 13', path: 'week2/feb13.json' },
    { date: 'Feb, 14', path: 'week2/feb14.json' },
    { date: 'Feb, 15', path: 'week3/feb15.json' },
    { date: 'Feb, 16', path: 'week3/feb16.json' },
    { date: 'Feb, 17', path: 'week3/feb17.json' },
    { date: 'Feb, 18', path: 'week3/feb18.json' },
    { date: 'Feb, 19', path: 'week3/feb19.json' },
    { date: 'Feb, 20', path: 'week3/feb20.json' },
    { date: 'Feb, 21', path: 'week3/feb21.json' },
    { date: 'Feb, 22', path: 'week4/feb22.json' },
    { date: 'Feb, 23', path: 'week4/feb23.json' },
    { date: 'Feb, 24', path: 'week4/feb24.json' },
    { date: 'Feb, 25', path: 'week4/feb25.json' },
    { date: 'Feb, 26', path: 'week4/feb26.json' },
    { date: 'Feb, 27', path: 'week4/feb27.json' },
    { date: 'Feb, 28', path: 'week4/feb28.json' },
  ].map(async (d) => {
    const details = await fetch(d.path).then((r) => r.json())
    details.data = details.data.map((d) => ({
      ...d,
      time: getFormattedTime(d.time),
    }))
    return {
      ...d,
      details,
    }
  })

  const timeline = await Promise.all(days)

  return timeline
}

export default getTimeline
