import React, {Component} from 'react';

export default class MatrixCell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <input className="matrix-cell" type="text"
                      readOnly={this.props.readOnly}
                      placeholder={`${this.props.i + 1}.${this.props.j + 1}`}
                      value={this.props.value !== undefined ? this.props.value : ""}
                      onChange={event => this.props.onChange(event.target.value)}/>;
    }
}

MatrixCell.propTypes = {
    readOnly: React.PropTypes.bool,
    i: React.PropTypes.number.isRequired,
    j: React.PropTypes.number.isRequired,
    value: React.PropTypes.number,
    onChange: React.PropTypes.func
};