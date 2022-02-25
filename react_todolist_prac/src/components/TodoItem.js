import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { FaRegSquare, FaRegCheckSquare, FaStar, FaRegStar } from "react-icons/fa";

const TodoItem = ({ item, removeItem, doneItem, importantItem }) => {
    return (
        <li className="list-group-item d-flex justify-content-between my-4">
            <h6 
                className={`mt-1 mb-1 align-middle ${item.completed ? 'completed-item' : ''}`} 
                id={`${item.importance ? 'important-item' : ''}`}
            >
                {item.text}
            </h6>
            <div className="todo-icon">
                <span 
                    className={`mx-2 ${item.importance ? 'text-warning' : 'text-secondary'}`}
                    onClick={() => importantItem(item.id)}
                >
                    {item.importance ? <FaStar /> : <FaRegStar />}
                </span>
                <span
                    className={`mx-2 ${item.completed ? 'text-success' : 'text-secondary'}`}
                    onClick={() => doneItem(item.id)}
                >
                    {item.completed ? <FaRegCheckSquare /> : <FaRegSquare />}
                </span>
                <span className="mx-2 text-danger" onClick={() => removeItem(item.id)}>
                    <FaTrashAlt />
                </span>
            </div>
        </li>
    );
};

export default TodoItem;