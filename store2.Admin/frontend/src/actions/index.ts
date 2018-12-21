export const TEST_INCREMENT = 'TEST_INCREMENT';
export type TEST_INCREMENT = typeof TEST_INCREMENT;

export interface TestIncrementAction {
    type: TEST_INCREMENT;
    count: number;
}

export const TEST_DECREMENT = 'TEST_DECREMENT';
export type TEST_DECREMENT = typeof TEST_DECREMENT;

export interface TestDecrementAction {
    type: TEST_DECREMENT;
    count: number;
}

export type Action = TestIncrementAction | TestDecrementAction;