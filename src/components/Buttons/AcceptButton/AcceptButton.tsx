import React, {FC, ReactNode} from 'react';
import styles from './AcceptButton.module.scss'
interface props{
    children?:string | ReactNode;
    onClick: () => void;
    background?:string
    height?:number
}
const AcceptButton:FC<props> = ({children,background,height, onClick}) => {
    return (
        <button className={styles.button} style={{background: background ? background : '', height:height}} onClick={onClick}>{children ? children : 'готово'}</button>
    );
};

export default AcceptButton;