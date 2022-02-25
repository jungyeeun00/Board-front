import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [items, setItems] = useState([]);

    const removeItem = (id) => {
        setItems(items.filter(item => {
            return item.id !== id;
        }));
    };

    const addItem = (item) => {
        setItems([
            ...items,
            item
        ]);
    };

    const doneItem = (id) => {
        setItems(
            items.map(item =>
                item.id === id ? { ...item, completed: !item.completed } : item,
            ),
        );
    };

    const importantItem = (id) => {
        setItems(
            items.map(item =>
                item.id === id ? { ...item, importance: !item.importance } : item,
            ),
        );
    }

    const clearList = () => {
		setItems([
        ]);
	}

    const renderItems = items.length ? items.map(item => {
        return (
            <TodoItem
                item={item}
                key={item.id}
                removeItem={removeItem}
                doneItem={doneItem}
                importantItem={importantItem}
            />
        );
    }) : '';

    return (
        <>
            <TodoInput
                addItem={addItem}
            />
            {renderItems}
            <div class="d-grid gap-2 col-3 mx-auto">
                <button class="btn btn-danger" type="button" onClick={() => clearList()}>모두 삭제</button>
            </div>
        </>
    );
};

export default TodoList;