import React, {Component} from 'react';
import MatrixMenu from './MatrixMenu';
import MatrixMultiplicationField from './MatrixMultiplicationField';
import { Grid, Row } from 'react-bootstrap';
import Matrix from '../matrix/Matrix';
import { initialMatrixSize as INIT_SIZE } from '../settings/MatrixSettings';

export default class MatrixCalculator extends Component {
    constructor(props) {
        super(props);
        const [aMatrix, bMatrix] = [new Matrix({ rowsCount: INIT_SIZE.aRowsCount, colsCount: INIT_SIZE.aColsCount }),
            new Matrix({ rowsCount: INIT_SIZE.bRowsCount, colsCount: INIT_SIZE.bColsCount })];
        this.state = {
            aMatrix: aMatrix,
            bMatrix: bMatrix,
            cMatrix: aMatrix.multiply(bMatrix),
            selectedMatrix: null,
            cellEditing: false
        };
    }

    onChangeMatrix(matrixName, value, i, j) {
        if (!/^(()|10|[0-9])$/.test(value)) return;
        this.state[matrixName].setCellValue(value ? ~~value : undefined, i, j);
        this.setState({
            [matrixName]: this.state[matrixName],
            cMatrix: this.state.cMatrix ? this.state.cMatrix.clear() : null
        });
    }

    multiply() {
        this.setState({ cMatrix: this.state.aMatrix.multiply(this.state.bMatrix) });
    }

    clear() {
        const [aRowsCount, aColsCount] = this.state.aMatrix.getSize();
        const [bRowsCount, bColsCount] = this.state.bMatrix.getSize();
        const [aMatrix, bMatrix] = [new Matrix({ rowsCount: aRowsCount, colsCount: aColsCount }),
            new Matrix({ rowsCount: bRowsCount, colsCount: bColsCount })];
        this.setState({ aMatrix: aMatrix, bMatrix: bMatrix, cMatrix: aMatrix.multiply(bMatrix) });
    }

    swap() {
        this.setState({
            aMatrix: this.state.bMatrix,
            bMatrix: this.state.aMatrix,
            cMatrix: this.state.bMatrix.canMultiply(this.state.aMatrix) ?
                new Matrix({ rowsCount: this.state.bMatrix.getRowsCount(), colsCount: this.state.aMatrix.getColsCount() }) : null
        });
    }

    selectMatrix(matrixName) {
        this.setState({ selectedMatrix: matrixName })
    }

    changeSizeMatrix(action) {
        switch(action) {
            case "addRow":
                this.state[this.state.selectedMatrix].addRow();
                break;
            case "removeRow":
                this.state[this.state.selectedMatrix].removeRow();
                break;
            case "addCol":
                this.state[this.state.selectedMatrix].addCol();
                break;
            case "removeCol":
                this.state[this.state.selectedMatrix].removeCol();
        }

        this.setState({
            [this.state.selectedMatrix]: this.state[this.state.selectedMatrix],
            cMatrix: this.state.aMatrix.canMultiply(this.state.bMatrix) ?
                new Matrix({ rowsCount: this.state.aMatrix.getRowsCount(), colsCount: this.state.bMatrix.getColsCount() }) : null
        });
    }

    onFocusChange(isFocused) {
        this.setState({ cellEditing: isFocused });
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row className="show-grid full-height-row">
                    <MatrixMenu a={this.state.aMatrix} b={this.state.bMatrix} c={this.state.cMatrix}
                                cellEditing={this.state.cellEditing}
                                selectedMatrix={this.state[this.state.selectedMatrix]}
                                onMultiply={this.multiply.bind(this)}
                                onClear={this.clear.bind(this)}
                                onSwap={this.swap.bind(this)}
                                onSelect={this.selectMatrix.bind(this)}
                                onChangeSize={this.changeSizeMatrix.bind(this)}/>
                    <MatrixMultiplicationField a={this.state.aMatrix} b={this.state.bMatrix} c={this.state.cMatrix}
                                               onChange={this.onChangeMatrix.bind(this)}
                                               onFocusChange={this.onFocusChange.bind(this)} />
                </Row>
            </Grid>
        );
    }
}