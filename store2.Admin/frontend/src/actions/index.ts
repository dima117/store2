export const TEST_INCREMENT = 'TEST_INCREMENT';
export type TEST_INCREMENT = typeof TEST_INCREMENT;

export interface TestIncrementAction {
    type: TEST_INCREMENT;
    count: number;
}

export function increment(count: number): TestIncrementAction {
    return {
        type: TEST_INCREMENT,
        count: count
    };
}

export const TEST_DECREMENT = 'TEST_DECREMENT';
export type TEST_DECREMENT = typeof TEST_DECREMENT;

export interface TestDecrementAction {
    type: TEST_DECREMENT;
    count: number;
}

export function decrement(count: number): TestDecrementAction {
    return {
        type: TEST_DECREMENT,
        count: count
    };
}

export const TEST_REQUEST = 'TEST_REQUEST';
export type TEST_REQUEST = typeof TEST_REQUEST;

export interface TestRequestAction {
    type: TEST_REQUEST;
}

export function testRequest(): TestRequestAction {
    return {
        type: TEST_REQUEST
    };
}
export const TEST_RESPONSE = 'TEST_RESPONSE';
export type TEST_RESPONSE = typeof TEST_RESPONSE;

export interface TestResponseAction {
    type: TEST_RESPONSE;
}

export function testResponse(): TestResponseAction {
    return {
        type: TEST_RESPONSE
    };
}

export type Action = 
    TestIncrementAction | 
    TestDecrementAction | 
    TestRequestAction | 
    TestResponseAction;