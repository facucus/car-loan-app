import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Slider, Select, Button, Results, Advice } from 'components'
import { getModels, selectModel, getPlans,selectPlan,
  getDescriptions, selectDescription, getAmount, selectPriceFinance, getTotal } from '../actions'
import styles from './sharedStyles.css'

class SimpleContainer extends Component {
  static get propTypes() {
    return {
      models: PropTypes.array.isRequired,
      model_selected: PropTypes.string.isRequired,
      loadingPlans: PropTypes.bool.isRequired,
      plans: PropTypes.array.isRequired,
      plan_selected: PropTypes.string.isRequired,
      loadingDesciprtions: PropTypes.bool.isRequired,
      descriptions: PropTypes.array.isRequired,
      description_selected: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      times: PropTypes.array.isRequired,
      time_selected: PropTypes.obj.isRequired,
      max_amount: PropTypes.obj.isRequired,
      rate_selected: PropTypes.string.isRequired,
      price_selected: PropTypes.string.isRequired,
      results: PropTypes.obj.isRequired,
      onGetPlans: PropTypes.func.isRequired,
      onSelectPlan: PropTypes.func.isRequired,
      onGetDescriptions: PropTypes.func.isRequired,
      onSelectDescription: PropTypes.func.isRequired,
      onGetTotal: PropTypes.func.isRequired
    }
  }

  componentDidMount () {
    this.props.onGetModels()
    this.props.onGetPlans(this.props.model_selected)
    this.props.onGetDescriptions(this.props.model_selected)
  }

  handleOnSelectModel (e) {
    this.props.onSelectModel(e.target.value)
  }

  handleOnSelectPlan (e) {
    this.props.onSelectPlan(this.props.model_selected, e.target.value)
  }

  handleOnSelectDescription (e) {
    const data = e.target.value.split('-')
    this.props.onSelectDescription(data[0], data[1])
  }

  handleRatesSlider (e) {
    const { times, onGetAmount, plan_selected, model_selected } = this.props
    const rate = times.filter((time) => time.time === e.target.value)
    onGetAmount(rate[0], plan_selected, model_selected)

  }
  handleAmountSlider (e) {
    this.props.onSelectPriceFinance(e.target.value)
  }
  handleGetTotal () {
    const { onGetTotal, model_selected, plan_selected, description_selected, time_selected, price, rate_selected, price_selected} = this.props
    onGetTotal(model_selected, plan_selected, description_selected, time_selected, price, rate_selected, price_selected)
  }
  render() {
    const { models, plans, descriptions, times } = this.props
    const optionsModels = models.map((model) => {
      return <option key={model.id} value={model.id}>{model.name}</option>
    })
    const optionsPlans = plans.map((plan) => {
      return <option key={plan.id} value={plan.id}>{plan.name}</option>
    })
    const optionsDescriptions = descriptions.map((description) => {
      return <option key={description.id} value={`${description.id}-${description.price}`}>{description.description}</option>
    })

    let minFee
    let maxFee
    if(times.length) {
      minFee = times[0].time
      maxFee = times.length > 0 ? times[times.length-1].time : minFee
    } else {
      minFee = 0
      maxFee = 0
    }


    console.log(this.props)
    return(
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={'col-xs-10 col-xs-offset-1'}>
            <h1 className={styles.title}>Get your new Volkswagen!</h1>
            <p className={styles.paragraph}>Through our virtual assistant, you will be able to know the fees of your financing.</p>
          </div>
        </div>
        <div className={'row'}>
          <div className={'col-xs-10 col-xs-offset-1'}>
            <Select
              onAction={this.handleOnSelectModel.bind(this)}
              options={optionsModels}/>
            <Select
              onAction={this.handleOnSelectPlan.bind(this)}
              options={optionsPlans}>
              <option>Select a plan</option>
            </Select>
            <Select
              onAction={this.handleOnSelectDescription.bind(this)}
              options={optionsDescriptions}>
              <option>Select one version</option>
            </Select>
          </div>
        </div>
        <div className={'row'}>
          <div className={'col-xs-10 col-xs-offset-1'}>
            <div className={'col-xs-12 col-sm-8'}>
              <Slider
                label={'Deadline'}
                result={`${this.props.time_selected} months`}
                onChangeSlide={this.handleRatesSlider.bind(this)}
                minVal={minFee}
                maxVal={maxFee}
                steps={12}/>
              <Slider
                label={'Amount to be financed'}
                result={`$${this.props.price_selected}`}
                onChangeSlide={this.handleAmountSlider.bind(this)}
                minVal={10000}
                maxVal={this.props.max_amount.data}
                steps={10000}/>
            </div>
            <Results results={this.props.results}/>
          </div>
        </div>
        <div className={'row'}>
          <div className={'col-xs-10 col-xs-offset-1'}>
            <Advice title={'Suggested price'} text={this.props.price}/>
            <Advice title={'Rate'} text={this.props.rate_selected}/>
          </div>
        </div>
        <div className={'row'}>
            <Button
              onAction={this.handleGetTotal.bind(this)}
              text={'SEND'}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    models: state.models,
    model_selected: state.model_selected,
    loadingPlans: state.loadingPlans,
    plans: state.plans,
    plan_selected: state.plan_selected,
    loadingDesciprtions: state.loadingDesciprtions,
    descriptions: state.descriptions,
    description_selected: state.description_selected,
    price: state.price,
    times: state.times,
    time_selected: state.time_selected,
    max_amount: state.max_amount,
    rate_selected: state.rate_selected,
    price_selected: state.price_selected,
    results: state.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetModels: () => {
      dispatch(getModels())
    },
    onSelectModel: (modelId) => {
      dispatch(selectModel(modelId))
    },
    onGetPlans: (modelId) => {
      dispatch(getPlans(modelId));
    },
    onSelectPlan: (modelId, planId) => {
      dispatch(selectPlan(modelId, planId))
    },
    onGetDescriptions: (modelId) => {
      dispatch(getDescriptions(modelId))
    },
    onSelectDescription: (descriptionId, price) => {
      dispatch(selectDescription(descriptionId, price))
    },
    onGetAmount: (rate, planId, modelId) => {
      dispatch(getAmount(rate, planId, modelId))
    },
    onSelectPriceFinance: (price) => {
      dispatch(selectPriceFinance(price))
    },
    onGetTotal: (modelId, planId, descriptionId, time, price, rate, price_finance) => {
      dispatch(getTotal(modelId, planId, descriptionId, time, price, rate, price_finance))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleContainer)
