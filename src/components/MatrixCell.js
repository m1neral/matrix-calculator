import React, {Component} from 'react';

export default class MatrixCell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <input className="matrix-cell" type="text" placeholder={this.props.index} />;
    }
}

MatrixCell.propTypes = {
  index: React.PropTypes.string.isRequired
};