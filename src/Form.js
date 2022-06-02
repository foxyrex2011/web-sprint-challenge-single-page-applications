import react from 'react';

export default function Form (props) {
    const { values, update, disabled, errors, red, submit } = props

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        errors(name, valueToUse);
        update(name, valueToUse);
    }

    return (
        <div>
            <form id="pizza-form" onSubmit={submit}>
                <div>
                    <button disabled={disabled}>submit</button>
                    <label> Name&nbsp;
                        <input
                            type="text"
                            name="name"
                            id="name-input"
                            onChange={onChange}
                            value={values.name}
                        />
                    </label>
                </div>

                <div>
                    <label> Size&nbsp;
                        <select name="size" id="size-dropdown" onChange={onChange} value={values.size}>
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
                            value={values.topping1}
                        />
                    </label>

                    <label> Sausage
                        <input
                            name="topping2"
                            type="checkbox"
                            onChange={onChange}
                            value={values.topping2}
                        />
                    </label>

                    <label> Pineapple
                        <input
                            name="topping3"
                            type="checkbox"
                            onChange={onChange}
                            value={values.topping3}
                        />
                    </label>

                    <label> Tomato
                        <input
                            name="topping4"
                            type="checkbox"
                            onChange={onChange}
                            value={values.topping4}
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
                            value={values.special}
                        />
                    </label>
                </div>
                <div>{red.name}</div>
            </form>
        </div>
    )
}