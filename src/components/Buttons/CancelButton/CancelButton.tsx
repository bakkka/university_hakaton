import React, {FC, ReactNode} from 'react';
import styles from './CancelButton.module.scss'

interface props{
    children?:string | ReactNode;
    onClick: () => void;
    background?:string
}
const CancelButton:FC<props> = ({children,background, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>{children ? children : 'отмена'}</button>
    );
};

export default CancelButton;