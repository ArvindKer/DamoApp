import { ADD_INPUT_TEXT_IN_HISTORY, DELETE_DATA_IN_HISTORY} from '../../action/types';

const INITIAL_STATE = {
    history_data: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_INPUT_TEXT_IN_HISTORY:
            var newState = {};
            state = {
                ...state
            }
            var state_history_data = state.history_data
            var history_dict = {}
            history_dict.input_data = action.payload.txt_entered

            state_history_data.push(history_dict)
            newState = {
                ...state,
                history_data: state_history_data
            };
            return newState;
        case DELETE_DATA_IN_HISTORY:

            var newState = {};
            var state_history_data = []
            state = {
                ...state
            }
            newState = {
                ...state,
                history_data: state_history_data
            };

            return newState;
        default:
            return state
    }
};
