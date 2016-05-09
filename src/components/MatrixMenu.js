import React, {Component} from 'react';
import { Col, Button, Radio, Glyphicon, FormGroup } from 'react-bootstrap';

export default class MatrixMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col className="matrix-menu" xs={3} md={3}>
                <Button bsStyle="success" onClick={alert} block>Умножить матрицы</Button>
                <Button bsSize="small" block><Glyphicon glyph="remove" /> Очистить матрицы</Button>
                <Button bsSize="small" block><Glyphicon glyph="sort" /> Поменять матрицы местами</Button>
                <FormGroup>
                    <Radio inline name="optradio">Матрица A</Radio>
                    <Radio inline name="optradio">Матрица B</Radio>
                </FormGroup>
            </Col>
        );
    }
}
