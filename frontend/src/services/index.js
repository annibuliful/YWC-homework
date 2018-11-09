import axios from 'axios'

const getAllEvents = async () => {
  const { data } = await axios.get(
    'https://calendar.thaiprogrammer.org/calendar.json'
  )
  return data
}

export default getAllEvents
