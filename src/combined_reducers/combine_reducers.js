
import { combineReducers } from "redux";

import * as account_reducers from './../reducers/account_reducers'
import * as package_reducers from './../reducers/packages_reducers'

export const all_reducers = combineReducers(
    {...account_reducers, ...package_reducers}
    )