import React, {FC} from 'react';
import styles from './StatusesComponent.module.scss'

interface props{
    children: string
}
const BlueStatus:FC<props> = ({children}) => {
    return (
        <div className={styles.status}>
            <div className={styles.blue}></div>
            <p>{children}</p>
        </div>
    );
};

export default BlueStatus;