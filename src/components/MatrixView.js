import React, {Component} from 'react';
import MatrixCell from './MatrixCell';

export default class MatrixView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MatrixCell index="1" />
        );
    }
}

MatrixView.propTypes = {
  matrix:  React.PropTypes.shape({
      store: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number))
  })
};