import {createStore} from 'redux';
// الغرض من هذا الملف اني اعمل Reducer
const initialState = {value :0,showCounter:true}
const counterReducer = (state = initialState,action) => {
    if (action.type === 'incrase'){
        return {...state ,value:state.value +action.payload};

    }
    if(action.type === 'decrase'){
        return {...state ,value:state.value -action.payload};

    }
    if(action.type === 'toggleCounter'){
        return {...state,showCounter:!state.showCounter};

    }


return state;
};
const store = createStore(counterReducer);
export default store;
