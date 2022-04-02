import { useEffect, useReducer } from 'react';

const initialState = ({ initialValue }) => ({
	sincronise: true,
	loading: true,
	error: false,
	item: initialValue
});

const actionTypes = {
	error: 'ERROR',
	success: 'SUCCESS',
	save: 'SAVE',
	sincronize: 'SINCRONIZE'
};

const reduerObject = (state, payload) => ({
	[actionTypes.error]: {
		...state,
		error: true
	},
	[actionTypes.success]: {
		...state,
		error: false,
		loading: false,
		sincronise: true,
		item: payload
	},
	[actionTypes.sincronize]: {
		...state,
		sincronise: false,
		loading: true
	},
	[actionTypes.save]: {
		...state,
		item: payload
	}
});

const reducer = (state, action) => {
	return reduerObject(state, action.payload)[action.type] || state;
};

function useLocalStorage(itemName, initialValue) {
	const [ state, dispatch ] = useReducer(reducer, initialState({ initialValue }));

	const { sincronise, loading, error, item } = state;
	/*const [ sincronise, setSincronise ] = useState(true);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);
	const [ item, setItem ] = useState(initialValue); */

	//ACTION CREATORS

	const onError = (error) => {
		dispatch({ type: actionTypes.error, payload: error });
	};

	const onSuccess = (item) => {
		dispatch({ type: actionTypes.success, payload: item });
	};

	const onSave = (item) => {
		dispatch({ type: actionTypes.save, payload: item });
	};

	const onSincronize = () => {
		dispatch({ type: actionTypes.sincronize });
	};

	useEffect(
		() => {
			try {
				setTimeout(() => {
					const localStorageItem = localStorage.getItem(itemName);
					let parsedItem;

					if (!localStorageItem) {
						localStorage.setItem(itemName, JSON.stringify(initialValue));
						parsedItem = initialValue;
					} else {
						parsedItem = JSON.parse(localStorageItem);
					}
					onSuccess(parsedItem);
				}, 3000);
			} catch (error) {
				onError(error);
				//setError(error);
			}
		},
		[ initialValue, itemName, sincronise ]
	);

	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			onSave(newItem);
		} catch (error) {
			onError(error);
		}
	};

	const sincronised = () => {
		onSincronize();
	};

	return { item, saveItem, loading, error, sincronised };
}

export { useLocalStorage };
