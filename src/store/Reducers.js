import { combineReducers } from 'redux';
import userReducer from './UserReducer'
//import { persistStore, persistReducer } from 'redux-persist'
//import AsyncStorage from '@react-native-community/async-storage';

export default combineReducers({
    user: userReducer
})

/*
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const configureStore = () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}

export default configureStore
*/