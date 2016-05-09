export default class Matrix {
    constructor(rowsCount, colsCount) {
        this.store = [];
        for (let i = 0; i < rowsCount; i++) {
            this.store[i] = [];
            for (let j = 0; j < colsCount; j++) {
                this.store[i][j] = undefined;
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
        return this.store[i][j];
    }

    setCellValue(value, i, j) {
        this.store[i][j] = value;
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

    multiply(b) {
        const [aRowsCount, aColsCount] = this.getSize();
        const [bRowsCount, bColsCount] = b.getSize();

        if (aColsCount !== bRowsCount) return;

        let c = new Matrix(aRowsCount, bColsCount);

        for (let k = 0; k < bColsCount; k++) {
            for (let i = 0; i < aRowsCount; i++) {
                let t = 0;
                for (var j = 0; j < bRowsCount; j++) t += this.getCellValue(i, j) * b.getCellValue(j, k);
                c.setCellValue(t, i, k);
            }
        }

        return c;
    }
}
