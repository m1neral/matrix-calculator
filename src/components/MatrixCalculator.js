import React, {Component} from 'react';
import MatrixMenu from './MatrixMenu';
import MatrixMultiplicationField from './MatrixMultiplicationField';
import { Grid, Row } from 'react-bootstrap';
import Matrix from '../matrix/Matrix';

export default class MatrixCalculator extends Component {
    constructor(props) {
        super(props);
        this.createMatrices(true);
    }

    createMatrices(withStateInitialize = false) {
        if (withStateInitialize) {
            const [aMatrix, bMatrix] = [new Matrix(6, 3), new Matrix(3, 4)];
            this.state = { aMatrix: aMatrix, bMatrix: bMatrix, cMatrix: aMatrix.multiply(bMatrix) };
        } else {
            const [aRowsCount, aColsCount] = this.state.aMatrix.getSize();
            const [bRowsCount, bColsCount] = this.state.bMatrix.getSize();
            const [aMatrix, bMatrix] = [new Matrix(aRowsCount, aColsCount), new Matrix(bRowsCount, bColsCount)];
            this.setState({
                aMatrix: new Matrix(aRowsCount, aColsCount),
                bMatrix: new Matrix(bRowsCount, bColsCount),
                cMatrix: aMatrix.multiply(bMatrix)
            });
        }

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
        this.createMatrices();
    }

    swap() {
        this.setState({
            aMatrix: this.state.bMatrix,
            bMatrix: this.state.aMatrix,
            cMatrix: this.state.bMatrix.canMultiply(this.state.aMatrix) ?
                new Matrix(this.state.bMatrix.getRowsCount(), this.state.aMatrix.getColsCount()) : null
        });
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row className="show-grid full-height-row">
                    <MatrixMenu a={this.state.aMatrix} b={this.state.bMatrix}
                                onMultiply={this.multiply.bind(this)}
                                onClear={this.clear.bind(this)}
                                onSwap={this.swap.bind(this)}/>
                    <MatrixMultiplicationField a={this.state.aMatrix}
                                               b={this.state.bMatrix}
                                               c={this.state.cMatrix} onChange={this.onChangeMatrix.bind(this)} />
                </Row>
            </Grid>
        );
    }
}