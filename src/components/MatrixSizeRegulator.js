import React, {Component} from 'react';
import { ButtonToolbar, Button, Radio, Glyphicon, FormGroup } from 'react-bootstrap';
import { limitMatrixSize as LIMIT_SIZE } from '../settings/MatrixSettings';

export default class MatrixSizeRegulator extends Component {
    constructor(props) {
        super(props);
    }

    isDisabled(action) {
        if (!this.props.selectedMatrix) return true;
        switch(action) {
            case "addRow":
                return this.props.selectedMatrix.getRowsCount() >= LIMIT_SIZE.max;
            case "removeRow":
                return this.props.selectedMatrix.getRowsCount() <= LIMIT_SIZE.min;
            case "addCol":
                return this.props.selectedMatrix.getColsCount() >= LIMIT_SIZE.max;
            case "removeCol":
                return this.props.selectedMatrix.getColsCount() <= LIMIT_SIZE.min;
        }

    }

    render() {
        return(
            <div className="matrix-size-regulator">
                <FormGroup onChange={event => this.props.onSelect(event.target.value)}>
                    <Radio inline name="optradio" value="aMatrix">Матрица A</Radio>
                    <Radio inline name="optradio" value="bMatrix">Матрица B</Radio>
                </FormGroup>
                <ButtonToolbar className="size-reg-button-toolbar">
                    <Button disabled={this.isDisabled("addRow")}
                            onClick={() => this.props.onChangeSize("addRow")}><Glyphicon glyph="plus" /> Добавить</Button>
                    <Button disabled={this.isDisabled("removeRow")}
                            onClick={() => this.props.onChangeSize("removeRow")}><Glyphicon glyph="minus" /> Удалить</Button>
                    <div className="size-reg-label">строку</div>
                </ButtonToolbar>
                <ButtonToolbar className="size-reg-button-toolbar">
                    <Button disabled={this.isDisabled("addCol")}
                            onClick={() => this.props.onChangeSize("addCol")}><Glyphicon glyph="plus" /> Добавить</Button>
                    <Button disabled={this.isDisabled("removeCol")}
                            onClick={() => this.props.onChangeSize("removeCol")}><Glyphicon glyph="minus" /> Удалить</Button>
                    <div className="size-reg-label">столбец</div>
                </ButtonToolbar>
            </div>
        );
    }
}

MatrixSizeRegulator.propTypes = {
    onSelect: React.PropTypes.func,
    selectedMatrix:  React.PropTypes.shape({
        store: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)),
        getRowsCount: React.PropTypes.func,
        getColsCount: React.PropTypes.func
    }),
    onChangeSize: React.PropTypes.func
};