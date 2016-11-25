const ADD_COUNTRY = 'ADD_COUNTRY'
const INCREASE_COUNTRY_COUNT = 'INCREASE_COUNTRY_COUNT'

function addCountry(country)  {
  return {
    type: ADD_COUNTRY,
    country,
  }
}

function increaseCountCount(country) {
  return {
    type: INCREASE_COUNTRY_COUNT,
    country
  }
}

// thunk
export function addCountryToState (country) {
  return function (dispatch) {
    dispatch(addCountry(country))
  }
}


const initialState = {
  lastUpdated: 0,
  isFetching: true,
  error: '',
  countries: {},
}

export default function countries (state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTRY :
      return {
        ...state,
        isFetching: false,
        countries: action.country
      }
    default :
      return state
  }
}
