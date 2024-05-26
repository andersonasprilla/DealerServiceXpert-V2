import { useState } from "react";
import { Input } from "@material-tailwind/react";

const CustomerName = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleInput = (e) => {
        const inputValue = e.target.value.replace(/[^A-Za-z\s]/g, '');
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
                label="Customer Name"
                pattern="[A-Za-z\s]*"
                title="Please enter only letters"
                value={value}
                error={error}
                onInput={handleInput}
                onBlur={handleBlur}
            />
        </div>
    );
}

export default CustomerName;
