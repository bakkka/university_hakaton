import React, {FC} from 'react';
import styles from './StatusesComponent.module.scss'

interface props{
    children: string
}
const RedStatus:FC<props> = ({children}) => {
    return (
        <div className={styles.status}>
            <div className={styles.red}></div>
            <p>{children}</p>
        </div>
    );
};

export default RedStatus;