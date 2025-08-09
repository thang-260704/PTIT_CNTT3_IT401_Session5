(() => {
    function check(input: number | string): string {
        if (typeof input === "string") {
            return `${input.length} ky tu`;
        }
        return input % 2 === 0 ? `Day la so chan` : `Day la so le`;
    }
})();