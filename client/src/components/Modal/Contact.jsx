import formatPhoneNumber from '../helper/formatPhoneNumber';
import { useState } from 'react';
import { Input } from "@material-tailwind/react";

const Contact = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        const input = e.target.value;
        // Remove all non-numeric characters
        const cleaned = input.replace(/\D/g, '');
        
        if (cleaned.length <= 10) {
            const formattedInput = formatPhoneNumber(cleaned);
            setPhoneNumber(formattedInput);
            setError(cleaned === '');
        }
    };

    const handleBlur = () => {
        if (phoneNumber === '') {
            setError(true);
        }
    };

    return (
        <div>
            <Input
                type="text"
                value={phoneNumber}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className="focus:ring-transparent"
                label="Contact"
                error={error}
            />
        </div>
    );
}

export default Contact;
