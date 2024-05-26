import { useState } from "react";
import { Checkbox } from "@material-tailwind/react";

const Priority = ({ value, onChange }) => {
    return (
        <div>
            <Checkbox 
                label="Waiter" 
                checked={value}
                onChange={e => onChange({ target: { value: e.target.checked } })}
            />
        </div>
    );
}

export default Priority;
