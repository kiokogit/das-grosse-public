
import { combineReducers } from "redux";

import * as account_reducers from './../reducers/account_reducers'

export const all_reducers = combineReducers(
    account_reducers,
    )