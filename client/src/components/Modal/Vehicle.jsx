import { useState } from "react";
import { Input } from "@material-tailwind/react";

const Vehicle = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
        setError(inputValue === '');
    };

    const handleBlur = () => {
        if (value === '') {
            setError(true);
        }
    };

    return (
        <div>
            <Input
                type="text"
                className="focus:ring-transparent"
                label="Vehicle"
                value={value}
                error={error}
                onInput={handleInput}
                onBlur={handleBlur}
            />
        </div>
    );
}

export default Vehicle;
