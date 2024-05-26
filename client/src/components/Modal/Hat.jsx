import { useState } from "react";
import { Input } from "@material-tailwind/react";

const Hat = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleInput = (e) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
        setValue(inputValue);
        setError(inputValue === '');
    };

    const handleBlur = () => {
        if (value === '') {
            setError(true);
        }
    };

    return (     
        <div className="w-full max-w-xs">
            <Input
                className="focus:ring-transparent"
                label="Hat"
                type="text"
                pattern="\d{4}"
                maxLength="4"
                value={value}
                error={error}
                onInput={handleInput}
                onBlur={handleBlur}
            />
        </div>
    )
}

export default Hat;
