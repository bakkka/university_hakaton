import React, {FC} from 'react';
import styles from "./TopicTypes.module.scss";
import {ITask} from "../../../types/CoursesResponse";

interface props {
    data:ITask
    onClick: () => void;
}
const TestType:FC<props> = ({data}) => {
    return (
        <div className={styles.block}>
            <div className={styles.header}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.5858 2.58579C11.2107 2.96086 11 3.46957 11 4V5C11 5.26522 10.8946 5.51957 10.7071 5.70711C10.5196 5.89464 10.2652 6 10 6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7V10C6 10.2652 5.89464 10.5196 5.70711 10.7071C5.51957 10.8946 5.26522 11 5 11H4C3.46957 11 2.96086 11.2107 2.58579 11.5858C2.21071 11.9609 2 12.4696 2 13C2 13.5304 2.21071 14.0391 2.58579 14.4142C2.96086 14.7893 3.46957 15 4 15H5C5.26522 15 5.51957 15.1054 5.70711 15.2929C5.89464 15.4804 6 15.7348 6 16V19C6 19.2652 6.10536 19.5196 6.29289 19.7071C6.48043 19.8946 6.73478 20 7 20H10C10.2652 20 10.5196 19.8946 10.7071 19.7071C10.8946 19.5196 11 19.2652 11 19V18C11 17.4696 11.2107 16.9609 11.5858 16.5858C11.9609 16.2107 12.4696 16 13 16C13.5304 16 14.0391 16.2107 14.4142 16.5858C14.7893 16.9609 15 17.4696 15 18V19C15 19.2652 15.1054 19.5196 15.2929 19.7071C15.4804 19.8946 15.7348 20 16 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V16C20 15.7348 19.8946 15.4804 19.7071 15.2929C19.5196 15.1054 19.2652 15 19 15H18C17.4696 15 16.9609 14.7893 16.5858 14.4142C16.2107 14.0391 16 13.5304 16 13C16 12.4696 16.2107 11.9609 16.5858 11.5858C16.9609 11.2107 17.4696 11 18 11H19C19.2652 11 19.5196 10.8946 19.7071 10.7071C19.8946 10.5196 20 10.2652 20 10V7C20 6.73478 19.8946 6.48043 19.7071 6.29289C19.5196 6.10536 19.2652 6 19 6H16C15.7348 6 15.4804 5.89464 15.2929 5.70711C15.1054 5.51957 15 5.26522 15 5V4C15 3.46957 14.7893 2.96086 14.4142 2.58579C14.0391 2.21071 13.5304 2 13 2C12.4696 2 11.9609 2.21071 11.5858 2.58579Z" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>{data.title}</p>
            </div>
            <div className={styles.information}>
                <div className={styles.information_block}>
                    <p className={styles.block_article}>Открыт с :</p>
                    <p className={styles.block_deadline}>{`${data.openedAt.hour}:${data.openedAt.minute}`}</p>
                </div>
                <div className={styles.information_block}>
                    <p className={styles.block_article}>Срок сдачи :</p>
                    <p className={styles.block_deadline}>{`${data.closedAt.hour}:${data.closedAt.minute}`}</p>
                </div>
            </div>
        </div>
    );
};

export default TestType;