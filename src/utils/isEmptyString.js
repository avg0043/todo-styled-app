import * as R from 'ramda'

const isEmptyString = text => R.isEmpty(text.replace(/\s/g, ''))

export default isEmptyString
