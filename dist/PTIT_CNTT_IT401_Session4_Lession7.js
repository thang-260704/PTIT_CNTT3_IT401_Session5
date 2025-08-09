"use strict";
(() => {
    function processInput(input) {
        if (typeof input === "string") {
            const isNumeric = !isNaN(Number(input));
            if (isNumeric) {
                return Number(input) * Number(input);
            }
            const letters = input.match(/[a-zA-Z]/g);
            return letters ? `${letters.length} ky tu chu cai` : "0 ky tu chu cai";
        }
        else if (typeof input === "number") {
            if (input < 2 || !Number.isInteger(input)) {
                return `Khong phai la so nguyen to`;
            }
            for (let i = 2; i <= Math.sqrt(input); i++) {
                if (input % i === 0) {
                    return `Khong phai la so nguyen to`;
                }
            }
            return `Day la so nguyen to`;
        }
        else {
            return input === true ? `Gia tri la true - dang tien hanh xu ly` : `Gia tri la false - dung xu ly`;
        }
    }
})();
