import React, {Component} from 'react';
import MatrixMenu from './MatrixMenu';
import MatrixMultiplicationField from './MatrixMultiplicationField';
import { Grid, Row } from 'react-bootstrap';
import Matrix from '../matrix/Matrix';

export default class MatrixCalculator extends Component {
    constructor(props) {
        super(props);
        const [aMatrix, bMatrix] = [new Matrix(3, 3), new Matrix(3, 3)];
        this.state = { aMatrix: aMatrix, bMatrix: bMatrix, cMatrix: aMatrix.multiply(bMatrix) };
    }

    onChangeMatrix(matrixName, value, i, j) {
        if (!/^(()|10|[0-9])$/.test(value)) return;
        this.state[matrixName].setCellValue(value ? ~~value : undefined, i, j);
        this.setState({[matrixName] : this.state[matrixName]});
    }

    onMultiply() {
        this.setState({cMatrix: this.state.aMatrix.multiply(this.state.bMatrix)});
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row className="show-grid full-height-row">
                    <MatrixMenu a={this.state.aMatrix} b={this.state.bMatrix} onMultiply={this.onMultiply.bind(this)} />
                    <MatrixMultiplicationField a={this.state.aMatrix}
                                               b={this.state.bMatrix}
                                               c={this.state.cMatrix} onChange={this.onChangeMatrix.bind(this)} />
                </Row>
            </Grid>
        );
    }
}