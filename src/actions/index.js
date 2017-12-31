export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = (state) => {
    return {
        type: INCREMENT,
        payload: state
    }
}

export const decrement = (state) => {
    return {
        type: DECREMENT,
        payload: state
    }
}