import React, {FC, ReactNode} from 'react';
import styles from './AcceptButton.module.scss'
interface props{
    children?:string | ReactNode;
    onClick: () => void;
    background?:string
}
const AcceptButton:FC<props> = ({children,background, onClick}) => {
    return (
        <button className={styles.button} style={{background: background ? background : ''}} onClick={onClick}>{children ? children : 'готово'}</button>
    );
};

export default AcceptButton;