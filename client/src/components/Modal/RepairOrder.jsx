import { useState } from "react";
import { Input } from "@material-tailwind/react";

const RepairOrder = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleInput = (e) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
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
                label="Repair Order"
                pattern="\d{6}"
                maxLength="6"
                value={value}
                error={error}
                onInput={handleInput}
                onBlur={handleBlur}
            />
        </div>
    );
}

export default RepairOrder;
