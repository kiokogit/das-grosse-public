
import { combineReducers } from "redux";
import * as alerts_reducers from "../reducers/error_handler_reducers";

import * as account_reducers from './../reducers/account_reducers'
import * as package_reducers from './../reducers/packages_reducers'

export const all_reducers = combineReducers(
    {...account_reducers, ...package_reducers, ...alerts_reducers}
    )