import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

// import Icon from '../../shared/icon';
import './style/todo.scss';

const Todo = ({ todoList }) => {
  const [todoCheckBox, setTodoCheckBox] = useState(
    todoList.map(({ done }) => done)
  );

  const handleTodoClick = i => {
    setTodoCheckBox(
      todoCheckBox.map((done, index) => (i === index ? !done : done))
    );
  };

  const renderTodoItem = (todo, i) => (
    <TodoItem
      key={i}
      {...todo}
      checked={todoCheckBox[i]}
      handleTodoClick={() => handleTodoClick(i)}
    />
  );

  return <div className=" wrap-content">{todoList.map(renderTodoItem)}</div>;
};

const TodoItem = memo(({ checked, handleTodoClick, text }) => {
  return (
    <div className="todo__item">
      <input type="checkbox" onChange={handleTodoClick} checked={checked} />
      <span className={`todo__text ${checked ? 'todo__text--done' : ''}`}>
        {text}
      </span>
    </div>
  );
});

Todo.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool,
      text: PropTypes.string,
      when: PropTypes.string
    })
  )
};

export default Todo;
