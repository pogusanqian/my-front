// action相当于是业务层
import { INCREMENT, DECREMENT } from './constant';

export const createIncrementAction = data => ({ type: INCREMENT, data });
export const createDecrementAction = data => ({ type: DECREMENT, data });
