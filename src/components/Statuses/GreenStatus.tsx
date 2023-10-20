import React, {FC} from 'react';
import styles from './StatusesComponent.module.scss'

interface props{
    children: string
}
const GreenStatus:FC<props> = ({children}) => {
    return (
        <div className={styles.status}>
            <div className={styles.green}></div>
            <p>{children}</p>
        </div>
    );
};

export default GreenStatus;