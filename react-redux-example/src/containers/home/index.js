import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  showQuestion,
  hideQuestion
} from '../../modules/counter'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
    </p>

    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>

    <p><button onClick={props.showQuestion}>Open the related question</button></p> <p><button onClick={props.hideQuestion}>Close the related question</button></p>
    {props.relatedQ ? <p>{props.relatedQ}</p> : null}
  </div>
)

const mapStateToProps = state => ({
  relatedQ :state.counter.relatedQ,
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us'),
  showQuestion,
  hideQuestion,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
