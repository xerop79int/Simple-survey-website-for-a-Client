import { message } from "antd";

export const Success = (messages) => {
    message.success({
        content: messages,
        duration: 1,
        style: {
            position: 'fixed',
            top: '15vh', 
            right: '100px'
        }
    });
}
export const Error = (messages) => {
    message.error({
        content: messages,
        duration: 1,
        style: {
            position: 'fixed',
            top: '15vh',
            right: '100px'
        }
    });
}
export const Warning = (messages) => {
    message.warning({
        content: messages,
        duration: 1,
        style: {
            position: 'fixed',
            top: '15vh',
            right: '100px'
        }
    });
}
