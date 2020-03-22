module.exports =
    class DepthCalculator {
        calculateDepth(arr) {
            if (Array.isArray(arr)) {
                let level = 1 + Math.max(0, ...arr.map(t => this.calculateDepth(t)))
                return level;
            } else { return 0; }
        }
    };
