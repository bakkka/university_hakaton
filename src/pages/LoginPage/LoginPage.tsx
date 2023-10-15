import React, {FC} from 'react';
import styles from './LoginPage.module.scss'
const LoginPage:FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.article}>Авторизация</p>
            <div className={styles.block}>
                <p className={styles.block_article}>Почта</p>
                <input placeholder={'mail@mail.ru'}/>
            </div>
            <div className={styles.block}>
                <p className={styles.block_article}>Пароль</p>
                <input type={'password'} placeholder={'******'}/>
            </div>
            <button>Войти</button>
        </div>
    );
};

export default LoginPage;