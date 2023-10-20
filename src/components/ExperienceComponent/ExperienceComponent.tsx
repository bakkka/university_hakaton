import React, {FC} from 'react';
import styles from './ExperienceComponent.module.scss'
interface props{
    type?:'student' | 'commission'
}
const ExperienceComponent:FC<props> = ({type}) => {
    return (
        <div className={styles.experience}>
            <div className={styles.experience_content}>
                <div className={styles.experience_block}>
                    <p className={styles.block_name}>Место работы номер 1</p>
                    <p className={styles.block_content}>Секрет достижения большего успеха заключается в наличии многочисленных источников комфорта и поддержки, во многом похожих на коллекцию подушек. Иными словами, мне потребовалось...</p>
                </div>
                <div className={styles.experience_block}>
                    <p className={styles.block_name}>Место работы номер 1</p>
                    <p className={styles.block_content}>Секрет достижения большего успеха заключается в наличии многочисленных источников комфорта и поддержки, во многом похожих на коллекцию подушек. Иными словами, мне потребовалось...</p>
                </div>
                <div className={styles.experience_block}>
                    <p className={styles.block_name}>Место работы номер 1</p>
                    <p className={styles.block_content}>Секрет достижения большего успеха заключается в наличии многочисленных источников комфорта и поддержки, во многом похожих на коллекцию подушек. Иными словами, мне потребовалось...</p>
                </div>
                {type === 'commission' ? (
                    <div className={styles.other}>
                            <div className={styles.other_block}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="office-building">
                                    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V16C16.2652 16 16.5196 16.1054 16.7071 16.2929C16.8946 16.4804 17 16.7348 17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H13C12.7348 18 12.4804 17.8946 12.2929 17.7071C12.1054 17.5196 12 17.2652 12 17V15C12 14.7348 11.8946 14.4804 11.7071 14.2929C11.5196 14.1054 11.2652 14 11 14H9C8.73478 14 8.48043 14.1054 8.29289 14.2929C8.10536 14.4804 8 14.7348 8 15V17C8 17.2652 7.89464 17.5196 7.70711 17.7071C7.51957 17.8946 7.26522 18 7 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16V4ZM7 5H9V7H7V5ZM9 9H7V11H9V9ZM11 5H13V7H11V5ZM13 9H11V11H13V9Z" fill="#90A4AE"/>
                                </g>
                            </svg>
                            <p>Отделение херни</p>
                        </div>
                            <div className={styles.other_block}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="phone">
                                        <path id="Vector" d="M2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H5.153C5.38971 2.00011 5.6187 2.08418 5.79924 2.23726C5.97979 2.39034 6.10018 2.6025 6.139 2.836L6.879 7.271C6.91436 7.48222 6.88097 7.69921 6.78376 7.89003C6.68655 8.08085 6.53065 8.23543 6.339 8.331L4.791 9.104C5.34611 10.4797 6.17283 11.7293 7.22178 12.7782C8.27072 13.8272 9.52035 14.6539 10.896 15.209L11.67 13.661C11.7655 13.4695 11.9199 13.3138 12.1106 13.2166C12.3012 13.1194 12.5179 13.0859 12.729 13.121L17.164 13.861C17.3975 13.8998 17.6097 14.0202 17.7627 14.2008C17.9158 14.3813 17.9999 14.6103 18 14.847V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H15C7.82 18 2 12.18 2 5V3Z" fill="#90A4AE"/>
                                    </g>
                                </svg>
                                <p>+7 (987) 818 78 78</p>
                            </div>
                            <div className={styles.other_block}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="inbox">
                                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17H15C15.5304 17 16.0391 16.7893 16.4142 16.4142C16.7893 16.0391 17 15.5304 17 15V5C17 4.46957 16.7893 3.96086 16.4142 3.58579C16.0391 3.21071 15.5304 3 15 3H5ZM5 5H15V12H13L12 14H8L7 12H5V5Z" fill="#90A4AE"/>
                                    </g>
                                </svg>
                                <p>bf2042help@mail.com</p>
                            </div>
                            <div className={styles.other_block}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M8 2.5C7.73478 2.5 7.48043 2.60536 7.29289 2.79289C7.10536 2.98043 7 3.23478 7 3.5C7 3.76522 7.10536 4.01957 7.29289 4.20711C7.48043 4.39464 7.73478 4.5 8 4.5H10C10.2652 4.5 10.5196 4.39464 10.7071 4.20711C10.8946 4.01957 11 3.76522 11 3.5C11 3.23478 10.8946 2.98043 10.7071 2.79289C10.5196 2.60536 10.2652 2.5 10 2.5H8Z" fill="#90A4AE"/>
                                    <path d="M3 5.5C3 4.96957 3.21071 4.46086 3.58579 4.08579C3.96086 3.71071 4.46957 3.5 5 3.5C5 4.29565 5.31607 5.05871 5.87868 5.62132C6.44129 6.18393 7.20435 6.5 8 6.5H10C10.7956 6.5 11.5587 6.18393 12.1213 5.62132C12.6839 5.05871 13 4.29565 13 3.5C13.5304 3.5 14.0391 3.71071 14.4142 4.08579C14.7893 4.46086 15 4.96957 15 5.5V11.5H10.414L11.707 10.207C11.8892 10.0184 11.99 9.7658 11.9877 9.5036C11.9854 9.2414 11.8802 8.99059 11.6948 8.80518C11.5094 8.61977 11.2586 8.5146 10.9964 8.51233C10.7342 8.51005 10.4816 8.61084 10.293 8.793L7.293 11.793C7.10553 11.9805 7.00021 12.2348 7.00021 12.5C7.00021 12.7652 7.10553 13.0195 7.293 13.207L10.293 16.207C10.4816 16.3892 10.7342 16.49 10.9964 16.4877C11.2586 16.4854 11.5094 16.3802 11.6948 16.1948C11.8802 16.0094 11.9854 15.7586 11.9877 15.4964C11.99 15.2342 11.8892 14.9816 11.707 14.793L10.414 13.5H15V16.5C15 17.0304 14.7893 17.5391 14.4142 17.9142C14.0391 18.2893 13.5304 18.5 13 18.5H5C4.46957 18.5 3.96086 18.2893 3.58579 17.9142C3.21071 17.5391 3 17.0304 3 16.5V5.5ZM15 11.5H17C17.2652 11.5 17.5196 11.6054 17.7071 11.7929C17.8946 11.9804 18 12.2348 18 12.5C18 12.7652 17.8946 13.0196 17.7071 13.2071C17.5196 13.3946 17.2652 13.5 17 13.5H15V11.5Z" fill="#90A4AE"/>
                                </svg>
                            <p>18/10/2023</p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ExperienceComponent;