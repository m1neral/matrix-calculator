import expect from 'expect';
import assert from 'assert';
import Matrix from '../matrix/Matrix';

describe("multiply matrix same size", () => {
    it("should get multiplied matrix", () => {
        const a = new Matrix(undefined, "[[1,2,3],[4,5,6],[7,8,9]]");
        const b = new Matrix(undefined, "[[9,8,7],[6,5,4],[3,2,1]]");
        const c = new Matrix(undefined, "[[30,24,18],[84,69,54],[138,114,90]]");
        expect(a.multiply(b)).toEqual(c);
    });
});

describe("multiply matrix of zeros", () => {
    it("should get multiplied zero matrix", () => {
        const a = new Matrix(undefined, "[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]");
        const b = new Matrix(undefined, "[[0,0,0,0],[0,0,0,0],[0,0,0,0]]");
        const c = new Matrix(undefined, "[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]");
        expect(a.multiply(b)).toEqual(c);
    });
});

describe("multiply empty matrix", () => {
    it("should get multiplied empty matrix", () => {
        const a = new Matrix(undefined, "[[null, null],[null, null]]");
        const b = new Matrix(undefined, "[[null, null],[null, null]]");
        const c = new Matrix({ rowsCount: 2, colsCount: 2 });
        expect(a.multiply(b)).toEqual(c);
    });
});

describe("multiply empty matrix", () => {
    it("should get matrix empty 4x8 matrix", () => {
        const a = new Matrix({ rowsCount: 4, colsCount: 10 });
        const b = new Matrix({ rowsCount: 10, colsCount: 8 });
        const c = new Matrix({ rowsCount: 4, colsCount: 8 });
        expect(a.multiply(b)).toEqual(c);
    });
});

describe("multiply incorrect size matrix", () => {
    it("should get undefined", () => {
        const a = new Matrix({ rowsCount: 1, colsCount: 2 });
        const b = new Matrix({ rowsCount: 3, colsCount: 4 });
        expect(a.multiply(b)).toEqual(undefined);
    });
});

describe("add row to matrix", () => {
    it("should get matrix size 3x2", () => {
        const a = new Matrix(undefined, "[[2,2],[2,null]]");
        a.addRow();
        expect(a).toEqual(new Matrix(undefined, "[[2,2],[2,null],[null,null]]"));
    });
});

describe("add row to matrix", () => {
    it("should get matrix size 2x3", () => {
        const a = new Matrix(undefined, "[[2,2],[2,null]]");
        a.addCol();
        expect(a).toEqual(new Matrix(undefined, "[[2,2,null],[2,null,null]]"));
    });
});

describe("remove row from matrix", () => {
    it("should get matrix size 2x3", () => {
        const a = new Matrix(undefined, "[[2,2,2],[2,null,3],[1,1,1]]");
        a.removeRow();
        expect(a).toEqual(new Matrix(undefined, "[[2,2,2],[2,null,3]]"));
    });
});

describe("remove column from matrix", () => {
    it("should get matrix size 3x2", () => {
        const a = new Matrix(undefined, "[[2,2,2],[2,null,3],[1,1,1]]");
        a.removeCol();
        expect(a).toEqual(new Matrix(undefined, "[[2,2],[2,null],[1,1]]"));
    });
});