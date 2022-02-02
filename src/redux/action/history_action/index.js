import { ADD_INPUT_TEXT_IN_HISTORY, DELETE_DATA_IN_HISTORY} from '../types';

export const AddToHistory = history => {
  return {
    type: ADD_INPUT_TEXT_IN_HISTORY,
    payload: history
  }
}

export const DeleteAllHistory = history => {
  return {
    type: DELETE_DATA_IN_HISTORY,
    payload: history
  }
}