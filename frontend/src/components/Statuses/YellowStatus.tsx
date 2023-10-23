import React, {FC} from 'react';
import styles from './StatusesComponent.module.scss'

interface props{
    children: string
}
const YellowStatus:FC<props> = ({children}) => {
    return (
        <div className={styles.status}>
            <div className={styles.yellow}></div>
            <p>{children}</p>
        </div>
    );
};

export default YellowStatus;