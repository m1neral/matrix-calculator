import React, {Component} from 'react';
import MatrixCell from './MatrixCell';

export default class MatrixView extends Component {
    constructor(props) {
        super(props);
    }

    createMatrixTable() {
        return this.props.matrix.getPureMatrix().map((row,i) =>
            <tr key={i}>{row.map((el,j) => <td key={j}>
                <MatrixCell i={i} j={j} matrix={this.props.matrix} onFocusChange={(isFocused) =>  this.props.onFocusChange(isFocused)}
                            onChange={(value) => this.props.onChange(value, i, j)}
                            value={this.props.matrix.getCellValue(i, j)} readOnly={this.props.readOnly}/></td>)}
            </tr>);
    }

    render() {
        return (
            <table className="matrix-view-table">
                <tbody>
                    {this.createMatrixTable()}
                </tbody>
            </table>
        );
    }
}

MatrixView.propTypes = {
    matrix:  React.PropTypes.shape({
        getPureMatrix: React.PropTypes.func,
        getCellValue: React.PropTypes.func
    }),
    readOnly: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    onFocusChange: React.PropTypes.func
};