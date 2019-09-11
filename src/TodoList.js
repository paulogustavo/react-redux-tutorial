import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TodoList = ({todos, addTodo}) => {
    return (
        <>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
            </ul>
            <button onClick={() => addTodo('New Todo Added')}>Adicionar Todo</button>
        </>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
    })).isRequired,
};

const mapStateToProps = state => ({
    todos: state.todos
});
 
const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch({type: 'ADD_TODO', payload:{ text: text}})
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);