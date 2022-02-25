import React, { useState } from 'react';
import { FaCalendarCheck } from "react-icons/fa";

const TodoInput = ({ addItem }) => {
    const [text, setText] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if(text.length > 0) {
            addItem({
                id: Date.now(),
                text,
                completed: false,
                importance: false,
            });
            
            setText('');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="card text-center mb-2">
                <div className="card-header">
                    <h4 className="text-capitalize ">To do List</h4>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <FaCalendarCheck />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="오늘 할 일"
                            aria-label="오늘 할 일"
                            aria-describedby="basic-addon1"
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button 
                            className="btn btn-secondary"
                            type="submit"
                        >추가</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default TodoInput;