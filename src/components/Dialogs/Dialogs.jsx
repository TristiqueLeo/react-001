import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


let dialogsData = [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 47, name: 'Three' },
    { id: 4, name: 'Four' },
    { id: 5, name: 'Five' },
    { id: 6, name: 'Six' },
]

let dialogsElements = dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you' },
    { id: 3, message: 'Not Bad' },
    { id: 4, message: 'Not Bad' },
    { id: 5, message: 'Hi' }
]

let messagesElements = messages
    .map(messages => <Message message={messages.message} />)

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;