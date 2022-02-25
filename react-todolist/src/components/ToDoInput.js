import React, { useState } from 'react';

const ToDoInput = ({ addItem }) => {
    const [toDoItem, setToDoItem] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            addItem({
                id: Date.now(),
                item: toDoItem,
            });

            setToDoItem('');
        } 
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <InputField 
                    type="text"
                    value={toDoItem}
                    placeholder="할 일을 입력해주세요"
                    onChange={e => setToDoItem(e.target.value)}
                />
                <button type="submit">추가</button>
            </form>
        </div>
    );

};


export default ToDoInput;