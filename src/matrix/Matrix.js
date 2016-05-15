import { limitMatrixSize as LIMIT_SIZE } from '../settings/MatrixSettings';

export default class Matrix {
    constructor({ rowsCount = LIMIT_SIZE.min, colsCount = LIMIT_SIZE.min } = {}, data) {
        this.store = [];

        if (data) {
            data = JSON.parse(data);
            [rowsCount, colsCount] = [data.length, data[0].length];
        }

        for (let i = 0; i < rowsCount; i++) {
            this.store[i] = [];
            for (let j = 0; j < colsCount; j++) {
                this.store[i][j] = data ? data[i][j] == null ? undefined : data[i][j] : undefined;
            }
        }
    }

    getRowsCount() {
        return this.store.length;
    }

    getColsCount() {
        return this.store[0].length;
    }

    getSize() {
        return [this.getRowsCount(), this.getColsCount()];
    }

    getCellValue(i, j) {
        return this.store[i][j] == null ? undefined : this.store[i][j];
    }

    setCellValue(value, i, j) {
        this.store[i][j] = value;
    }

    getPureMatrix(serialized = false) {
        return serialized ? JSON.stringify(this.store) : this.store;
    }

    addRow() {
        const [rowsCount, colsCount] = this.getSize();
        this.store[rowsCount] = [];
        for (let j = 0; j < colsCount; j++) {
            this.store[rowsCount][j] = undefined;
        }
    }

    removeRow() {
        this.store.pop();
    }

    addCol() {
        const [rowsCount, colsCount] = this.getSize();
        for (let i = 0; i < rowsCount; i++) {
            this.store[i][colsCount] = undefined;
        }
    }

    removeCol() {
        for (let i = 0; i < this.getRowsCount(); i++) {
            this.store[i].pop();
        }
    }

    clear() {
        return new Matrix({ rowsCount: this.getRowsCount(), colsCount: this.getColsCount() });
    }

    canMultiply(b) {
        return this.getColsCount() == b.getRowsCount();
    }

    multiply(b) {
        const [aRowsCount, aColsCount] = this.getSize();
        const [bRowsCount, bColsCount] = b.getSize();

        if (aColsCount !== bRowsCount) return;

        let c = new Matrix({ rowsCount: aRowsCount, colsCount: bColsCount });

        for (let k = 0; k < bColsCount; k++) {
            for (let i = 0; i < aRowsCount; i++) {
                let t = 0;
                for (var j = 0; j < bRowsCount; j++) t += this.getCellValue(i, j) * b.getCellValue(j, k);
                c.setCellValue(isNaN(t) ? undefined : t, i, k);
            }
        }

        return c;
    }
}
