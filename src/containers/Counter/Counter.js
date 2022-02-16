import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreators from "../../store/actions/index";
import "./Counter.css";

class Counter extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractCounter(5)}
        />
        <hr />
        <button
          className="btn"
          onClick={() => this.props.onStoreResult(this.props.ctr)}
        >
          Store Result
        </button>
        <p
          style={{
            fontSize: "1vh",
            color: "grey",
            cursor: "default",
            margin: "0.5vh",
          }}
        >
          click the stored result to remove it
        </p>
        <ul className="num_stored_ul">
          {this.props.storedResults.map((strResult) => (
            <li
              className="num_stored_li"
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: (num) => dispatch(actionCreators.add(num)),
    onSubtractCounter: (num) => dispatch(actionCreators.subtract(num)),
    onStoreResult: (ctr) => dispatch(actionCreators.storeResult(ctr)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
