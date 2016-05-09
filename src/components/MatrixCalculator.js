import React, {Component} from 'react';
import Matrix from '../matrix/Matrix';
import MatrixMenu from './MatrixMenu';
import MatrixMultiplicationField from './MatrixMultiplicationField';
import { Grid, Row } from 'react-bootstrap';

export default class MatrixCalculator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row className="show-grid full-height-row">
                    <MatrixMenu />
                    <MatrixMultiplicationField />
                </Row>
            </Grid>
        );
    }
}
