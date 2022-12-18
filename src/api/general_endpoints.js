import {API} from "./api_settings";

// get all packages
export const get_all_packages_url = () => API.get('packages/all')

// search for related packages
export const search_related_packages = (search_value) => API.get(`/packages?name=${search_value}`)

// get detailed view of a package
export const get_package_details = (package_id) => API.get(`packages?${package_id}`)

