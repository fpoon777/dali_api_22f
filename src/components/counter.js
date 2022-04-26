import React from 'react';
import { connect } from 'react-redux';

// this can be dumb/function or smart/class component - connect works with either
function Counter(props) {
  return (
    <div>
      Current Count: {props.count}
    </div>
  );
}

// connects particular parts of redux state to this components props
// map is more like connect, connect the state to props to pass it to the child.
const mapStateToProps = (state) => (
  {
    count: state.count,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, null)(Counter);
