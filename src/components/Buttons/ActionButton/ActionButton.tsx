import React, {FC} from 'react';
import styles from './ActionButton.module.scss'
interface props {
    onClick: () => void;
}
const ActionButton:FC<props> = ({onClick}) => {
    return (
        <div onClick={onClick} className={styles.content}>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="plus">
                    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5C10.7586 5 11.0066 5.10536 11.1894 5.29289C11.3723 5.48043 11.475 5.73478 11.475 6V9H14.4C14.6586 9 14.9066 9.10536 15.0894 9.29289C15.2723 9.48043 15.375 9.73478 15.375 10C15.375 10.2652 15.2723 10.5196 15.0894 10.7071C14.9066 10.8946 14.6586 11 14.4 11H11.475V14C11.475 14.2652 11.3723 14.5196 11.1894 14.7071C11.0066 14.8946 10.7586 15 10.5 15C10.2414 15 9.99342 14.8946 9.81057 14.7071C9.62772 14.5196 9.525 14.2652 9.525 14V11H6.6C6.34141 11 6.09342 10.8946 5.91057 10.7071C5.72772 10.5196 5.625 10.2652 5.625 10C5.625 9.73478 5.72772 9.48043 5.91057 9.29289C6.09342 9.10536 6.34141 9 6.6 9H9.525V6C9.525 5.73478 9.62772 5.48043 9.81057 5.29289C9.99342 5.10536 10.2414 5 10.5 5Z" fill="white"/>
                </g>
            </svg>
        </div>
    );
};

export default ActionButton;