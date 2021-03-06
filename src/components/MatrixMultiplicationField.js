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
                        <MatrixView matrix={this.props.a} onFocusChange={(isFocused) =>  this.props.onFocusChange(isFocused)}
                                    onChange={(value, i, j) => this.props.onChange("aMatrix", value, i, j)}/>
                        <div className="matrix-name-label">A</div>
                    </Col>
                    <Col className="multiplied-matrix" xs={6} md={6}>
                        <MatrixView matrix={this.props.b} onFocusChange={(isFocused) =>  this.props.onFocusChange(isFocused)}
                                    onChange={(value, i, j) => this.props.onChange("bMatrix", value, i, j)}/>
                        <div className="matrix-name-label">B</div>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col className="result-matrix" xs={6} md={6}>
                        {this.props.c ? <MatrixView matrix={this.props.c} readOnly={true}/> : null}
                        {this.props.c ? <div className="matrix-name-label">C</div> : null}
                    </Col>
                </Row>
            </Col>
        );
    }
}

MatrixMultiplicationField.propTypes = {
    onChange: React.PropTypes.func,
    a: React.PropTypes.shape({ store: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)) }),
    b: React.PropTypes.shape({ store: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)) }),
    c: React.PropTypes.shape({ store: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)) }),
    onFocusChange: React.PropTypes.func
};