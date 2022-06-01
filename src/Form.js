import React, { useState, useEffect } from 'react';

export default function Form () {
    const [form, setForm] = useState({ 
        name: '', 
        size: '', 
        topping1: false, 
        topping2: false, 
        topping3: false, 
        topping4: false, 
        special: '' 
    });

    const onChange = evt => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value,
        });
      };

    return (
        <div>
            <form id="pizza-form">
                <div>
                    <label> Name&nbsp;
                        <input
                            type="text"
                            name="name"
                            id="name-input"
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div>
                    <label> Size&nbsp;
                        <select
                            name="size"
                            id="size-dropdown"
                            onChange={onChange}
                        >
                            <option value="">- Select an option -</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label> Pepperoni
                        <input
                            name="topping1"
                            type="checkbox"
                            onChange={onChange}
                        />
                    </label>

                    <label> Sausage
                        <input
                            name="topping2"
                            type="checkbox"
                            onChange={onChange}
                        />
                    </label>

                    <label> Pineapple
                        <input
                            name="topping3"
                            type="checkbox"
                            onChange={onChange}
                        />
                    </label>

                    <label> Tomato
                        <input
                            name="topping4"
                            type="checkbox"
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div>
                    <label> Special Instructions&nbsp;
                        <input
                            type="text"
                            name="special"
                            id="special-text"
                            onChange={onChange}
                        />
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}