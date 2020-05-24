import * as R from 'ramda'

export default text => R.isEmpty(text.replace(/\s/g, ''))
