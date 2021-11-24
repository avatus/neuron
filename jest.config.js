module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testPathIgnorePatterns: ['node_modules'],
    reporters: ['default', 'jest-github-actions-reporter'],
    testLocationInResults: true,
};
