import React from 'react';
import { useRef, useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './Form.css'

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState("");
    const handleChange = useCallback((event) => {
        setValue(event.target.value);
    }, []);
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value) {
            onSubmit(value);
        }
        setValue("");
        inputRef.current.focus();
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* обновили форму с помощью mui, так же добавили автофокус в  TextareaAutosize*/}
            <div className="messages_form">
                <TextareaAutosize
                    className="message_text"
                    ref={inputRef}
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Сообщение"
                    value={value}
                    onChange={handleChange}

                    style={{ width: 200 }}
                />


                {/* <textarea className="message_text" value={value} onChange={handleChange} placeholder="Сообщение" rows="3"></textarea> */}
                {/* <input className="message_btn" type="submit" value="Отправить" /> */}
                <Button className="message_btn" variant="contained" type="submit" value="">Отправить</Button>
            </div>
        </form>
    )


}