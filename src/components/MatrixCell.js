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
                      onChange={!this.props.readOnly ? event => this.props.onChange(event.target.value) : null}
                      onFocus={!this.props.readOnly ? () => this.props.onFocusChange(true) : null}
                      onBlur={!this.props.readOnly ? () => this.props.onFocusChange(false) : null}/>;
    }
}

MatrixCell.propTypes = {
    readOnly: React.PropTypes.bool,
    i: React.PropTypes.number.isRequired,
    j: React.PropTypes.number.isRequired,
    value: React.PropTypes.number,
    onChange: React.PropTypes.func,
    onFocusChange: React.PropTypes.func
};