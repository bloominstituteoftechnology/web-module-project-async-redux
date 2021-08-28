import axios from 'axios';

export const DICTIONARY_CALL = 'Dictionary call'
export const DICTIONARY_INFO = 'Dictionary info'

export const dictionaryCall = dispatch => {
	axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/<word>').then(
		res => {
			const dictionaryData = res.data
			dispatch(dictionaryInfo(dictionaryData))
		}
	)

}
export const dictionaryInfo = (dictionary) => {
	return({ type: DICTIONARY_INFO, payload: dictionary})
}