import { useState } from 'react';

export const inputPlaceholder = "Digite um novo item";

const List = () => {
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        setItems(items.concat([newItem]));
        setNewItem('');
        e.preventDefault();
    };

    return (
        <div>
            <h2>Lista</h2>
            <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <form onSubmit={handleSubmit} data-testid='form'>
                <div>
                    <input
                        type="text"
                        value={newItem}
                        onChange={(e) => { setNewItem(e.target.value) }}
                        id="newItem"
                        placeholder={inputPlaceholder} />
                </div>
                <input type="submit" value="Adicionar" />
            </form>
        </div>
    );
};

export default List;