function fetchingModels () {
  return {
    type: 'FETCHING_MODELS'
  }
}

function fetchingModelsSuccess(models) {
  return {
    type: 'FETCHING_MODELS_SUCCESS',
    payload: models
  }
}

function fetchingModelsError() {
  return {
    type: 'FETCHING_MODELS_ERROR',
    payload: 'Info not available'
  }
}

export function selectModel (modelId) {
  return function(dispatch) {
    dispatch({
      type: 'SELECT_MODEL',
      payload: modelId
    });
    dispatch(getPlans(modelId))
    dispatch(getDescriptions(modelId))
  }

}

export function getModels () {
  const url = 'http://xxxxxxxxxxx'
  return function(dispatch) {
    dispatch(fetchingModels());
    return fetch(url).then((response) => {
      return response.json()
    }).then((value) => {
      dispatch(fetchingModelsSuccess(value))
    }).catch((error) => {
      dispatch(fetchingModelsError())
    })
  }
}

function fetchingPlans () {
  return {
    type: 'FETCHING_PLANS'
  }
}

function fetchingPlansSuccess(plans) {
  return {
    type: 'FETCHING_PLANS_SUCCESS',
    payload: plans
  }
}

function fetchingPlansError() {
  return {
    type: 'FETCHING_PLANS_ERROR',
    payload: 'Info not available'
  }
}

function updatePlan (planId) {
  return {
    type: 'SELECT_PLAN',
    payload: planId
  }
}

export function selectPlan (modelId, planId) {
  const url = 'http://xxxxxxxxxxx'+modelId+'/'+planId
  return function(dispatch) {
    dispatch(updatePlan(planId))
    return fetch(url).then((response) => {
      // console.log(response.json());
      return response.json()
    }).then((value) => {
      console.log("v:",value)
      dispatch(fetchingTimesSuccess(value))
    }).catch((error) => {
      dispatch(fetchingTimesError())
    })
  }
}

function fetchingDescriptions () {
  return {
    type: 'FETCHING_DESCRIPTCIONS'
  }
}

function fetchingDescriptionsSuccess(descriptions) {
  return {
    type: 'FETCHING_DESCRIPTCIONS_SUCCESS',
    payload: descriptions
  }
}

function fetchingDescriptionsError() {
  return {
    type: 'FETCHING_DESCRIPTCIONS_ERROR',
    payload: 'Info not available'
  }
}

export function selectDescription (descriptionId, price) {
  return {
    type:'SELECT_DESCRIPTION',
    payload: {
      descriptionId,
      price
    }
  }
}



export function getPlans (modelId){
  const url = 'http://xxxxxxxxxxx' + modelId
  return function(dispatch) {
    dispatch(fetchingPlans());
    return fetch(url).then((response) => {
      return response.json()
    }).then((value) => {
      dispatch(fetchingPlansSuccess(value))
    }).catch((error) => {
      dispatch(fetchingPlansError())
    })
  }
}

export function getDescriptions (modelId){
  const url = 'http://xxxxxxxxxxx' + modelId
  return function(dispatch) {
    dispatch(fetchingDescriptions());
    return fetch(url).then((response) => {
      return response.json()
    }).then((value) => {
      dispatch(fetchingDescriptionsSuccess(value))
    }).catch((error) => {
      dispatch(fetchingDescriptionsError())
    })
  }
}

function fetchingTimes () {
  return {
    type: 'FETCHING_TIMES'
  }
}

function fetchingTimesSuccess(times) {
  return {
    type: 'FETCHING_TIMES_SUCCESS',
    payload: times
  }
}

function fetchingTimesError () {
  console.log('hubo un error')
  return {
    type: 'FETCHING_TIMES_ERROR',
    payload: 'Info not available'
  }
}

function updateTimeAndFee(time, rate) {
  return {
    type: 'SELECT_TIME_RATE',
    payload: {
      time,
      rate
    }
  }
}

export function getAmount (rate, planId, modelId) {
  const url = 'http://xxxxxxxxxxx' + rate.time + '/' + planId + '/' + modelId
  return function(dispatch) {
    dispatch(updateTimeAndFee(rate.time, rate.value))
    dispatch(fetchingAmount())
    return fetch(url).then((response) => {
      return response.json()
    }).then((value) => {
      dispatch(fetchingAmountSuccess(value))
    }).catch((error) => {
      dispatch(fetchingAmountError())
    })
  }
}

function fetchingAmount () {
  return {
    type: 'FETCHING_AMOUNT'
  }
}

function fetchingAmountSuccess (amount) {
  return {
    type: 'FETCHING_AMOUNT_SUCCESS',
    payload: amount
  }
}

function fetchingAmountError () {
  return {
    type: 'FETCHING_AMOUNT_ERROR',
    payload: 'Info not available'
  }
}

export function selectPriceFinance (price) {
  return {
    type: 'SELECT_PRICE_FINANCE',
    payload: price
  }
}

export function getTotal (modelId, planId, descriptionId, time, price, rate, price_finance) {
  const url = 'http://xxxxxxxxxxx'

  return function(dispatch) {
    dispatch(fetchingTotal())
    return fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
    model: modelId,
    plan: planId,
    vehicle: descriptionId,
    time: time,
    price: price,
    ratename: rate,
    price_finance: price_finance
    })
  }).then((response) => {
      return response.json()
    }).then((value) => {
      console.log("value: ", value)
      dispatch(fetchingTotalSuccess(value))
    }).catch((error) => {
      dispatch(fetchingTotalError())
    })
  }
}

function fetchingTotal() {
  return {
    type: 'FETCHING_TOTAL'
  }
}

function fetchingTotalSuccess (results) {
  return {
    type: 'FETCHING_TOTAL_SUCCESS',
    payload: results
  }
}

function fetchingTotalError () {
  return {
    type: 'FETCHING_TOTAL_ERROR',
    payload: 'Info not available'
  }
}
