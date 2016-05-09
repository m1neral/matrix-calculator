import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import MatrixView from './MatrixView';

export default class MatrixMultiplicationField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col className="matrix-multiplication-field" xs={9} md={9}>
                <Row className="show-grid">
                    <Col className="multiplied-matrix" xs={6} md={6}>
                        1
                    </Col>
                    <Col className="multiplied-matrix" xs={6} md={6}>2</Col>
                </Row>
                <Row className="show-grid">
                    <Col className="result-matrix" xs={6} md={6}>3</Col>
                </Row>
            </Col>
        );
    }
}