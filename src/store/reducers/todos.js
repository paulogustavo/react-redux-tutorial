const INITIAL_STATE = [
    { id: 1, text: 'Assistir React!' },
    { id: 2, text: 'Aprender React!' },
    { id: 3, text: 'Endender React!' }
]

export default function todos(state = INITIAL_STATE, action){
    switch(action.type){
        default:
            return state;
    }
}