const initialState = {};

export default (state = initialState, action) => {

    let stateCopy = {...state};

    switch (action.type) {
        case "CHECK": {
            console.log('hello');
            break;
        }

        default: {
            return stateCopy;
        }
    }

    return stateCopy;
};

export const addItem = item => {
};

export const removeItem = item => {
};
export const editItem = item => {
};
