import React, {Component} from 'react';
import MatrixSizeRegulator from './MatrixSizeRegulator';
import { Col, Button, Glyphicon } from 'react-bootstrap';
import { multiplyErrorText as MULTIPLY_ERROR_TXT } from '../settings/MatrixSettings';

export default class MatrixMenu extends Component {
    constructor(props) {
        super(props);
    }

    setMenuClassName() {
        // TODO: use https://github.com/JedWatson/classnames
        let className = "matrix-menu";
        if (!this.props.c) className += " multiply-error";
        if (this.props.cellEditing) className += " cell-editing";
        return className;
    }

    render() {
        return (
            <Col className={this.setMenuClassName()} xs={3} md={3}>
                <Button className="btn-multiply" bsStyle="success" disabled={!(this.props.a.canMultiply(this.props.b))}
                        onClick={this.props.onMultiply} block>Умножить матрицы</Button>
                <Button bsSize="small" onClick={this.props.onClear} block><Glyphicon glyph="remove" /> Очистить матрицы</Button>
                <Button bsSize="small" onClick={this.props.onSwap} block><Glyphicon glyph="sort" /> Поменять матрицы местами</Button>
                <MatrixSizeRegulator selectedMatrix={this.props.selectedMatrix}
                                     onSelect={(matrixName) => this.props.onSelect(matrixName)}
                                     onChangeSize={(action) => this.props.onChangeSize(action)}/>
                {this.props.c ? null : <div className="notification-text">{MULTIPLY_ERROR_TXT}</div>}
            </Col>
        );
    }
}

MatrixMenu.propTypes = {
    a: React.PropTypes.shape({
        canMultiply: React.PropTypes.func
    }),
    b: React.PropTypes.shape({ store: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)) }),
    c: React.PropTypes.shape({ store: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)) }),
    selectedMatrix: React.PropTypes.shape({ store: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)) }),
    onSelect: React.PropTypes.func,
    onMultiply: React.PropTypes.func,
    onClear: React.PropTypes.func,
    onSwap: React.PropTypes.func,
    onChangeSize: React.PropTypes.func,
    cellEditing: React.PropTypes.bool
};
