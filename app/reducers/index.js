const initialState = {
  models: [],
  model_selected: '1',
  loadingPlans: false,
  plans: [],
  plan_selected: '',
  loadingDesciprtions: false,
  descriptions: [],
  description_selected: '',
  price:'',
  minimumFee: '',
  maximumFee: '',
  times: '',
  time_selected: '',
  rate_selected:'',
  max_amount: {},
  price_selected: '',
  results: {}
}

export default function counterApp(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'FETCHING_MODELS':
      return {
        ...state,
        loadingModels: true
      }
    case 'FETCHING_MODELS_SUCCESS':
      return {
        ...state,
        loadingModels: false,
        models: payload
      }
    case 'FETCHING_MODELS_ERROR':
      return {
        ...state,
        loadingModels: false,
        error: payload
      }
    case 'SELECT_MODEL':
      return {
        ...state,
        model_selected: payload
      }
    case 'FETCHING_PLANS':
      return {
        ...state,
        loadingPlans: true
      }
    case 'FETCHING_PLANS_SUCCESS':
      return {
        ...state,
        loadingPlans: false,
        plans: payload
      }
    case 'FETCHING_PLANS_ERROR':
      return {
        ...state,
        loadingPlans: false,
        error: payload
      }
    case 'SELECT_PLAN':
      return {
        ...state,
        plan_selected: payload
      }
    case 'FETCHING_DESCRIPTCIONS':
      return {
        ...state,
        loadingDesciprtions: true
      }
    case 'FETCHING_DESCRIPTCIONS_SUCCESS':
      return {
        ...state,
        loadingDesciprtions: false,
        descriptions: payload
      }
    case 'FETCHING_DESCRIPTCIONS_ERROR':
      return {
        ...state,
        loadingDesciprtions: false,
        error: payload
      }
    case 'SELECT_DESCRIPTION':
      return {
        ...state,
        description_selected: payload.descriptionId,
        price: "$"+payload.price
      }
    case 'FETCHING_TIMES':
      return {
        ...state,
        loadingTimes: true
      }
    case 'FETCHING_TIMES_SUCCESS':
      return {
        ...state,
        loadingTimes: false,
        times: payload
      }
    case 'FETCHING_TIMES_ERROR':
      return {
        ...state,
        loadingTimes: false,
        error: payload
      }
    case 'SELECT_TIME_RATE':
     return {
       ...state,
       time_selected: payload.time,
       rate_selected: payload.rate
     }
    case 'FETCHING_AMOUNT':
      return {
        ...state,
        loadingAmount: true
      }
    case 'FETCHING_AMOUNT_SUCCESS':
      return {
        ...state,
        loadingAmount: false,
        max_amount: payload
      }
    case 'SELECT_PRICE_FINANCE':
      return {
        ...state,
        price_selected: payload
      }
    case 'FETCHING_TOTAL':
      return {
        ...state,
        loadingTotal: true
      }
    case 'FETCHING_TOTAL_SUCCESS':
      return {
        ...state,
        loadingTotal: false,
        results: payload
      }
    case 'FETCHING_TOTAL_ERROR':
      return {
        ...state,
        loadingTotal: false,
        error: payload
      }
    default:
      return state
  }

}
