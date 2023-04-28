const COHORT_NAME = '2301-FTB-ET-WEB-FT'

const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const returned = await fetch(`${BASE_URL}/posts`)

