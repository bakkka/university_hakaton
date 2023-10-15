import React, {FC} from 'react';
import styles from './SchedulePage.module.scss'
import picture from '../../images/TestPicture.png'
import Container from "../Container/Container";
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const SchedulePage:FC = () => {
    return (
                <Container>
                    <div className={styles.schedule}>
                        <div className={styles.block}>
                            <div className={styles.block_info}>
                                <p className={styles.block_info_time}>Понедельник, 9 октября </p>
                                <p className={styles.block_info_amount}>2 пары, с 11:40 по 15:10</p>
                            </div>
                            <div className={styles.block_content}>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.och}>Лек</div>
                                </div>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>13:40</p>
                                        <p className={styles.time_end}>15:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.dist}>Лек</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.block_info}>
                                <p className={styles.block_info_time}>Вторник, 9 октября </p>
                                <p className={styles.block_info_amount}>2 пары, с 11:40 по 15:10</p>
                            </div>
                            <div className={styles.block_content}>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.och}>Лек</div>
                                </div>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.dist}>Лек</div>
                                </div>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.dist}>Лек</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.block_info}>
                                <p className={styles.block_info_time}>Среда, 9 октября </p>
                                <p className={styles.block_info_amount}>2 пары, с 11:40 по 15:10</p>
                            </div>
                            <div className={styles.block_content}>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.och}>Лек</div>
                                </div>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.och}>Лек</div>
                                </div>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.dist}>Лек</div>
                                </div>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.och}>Лек</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.block_info}>
                                <p className={styles.block_info_time}>Четверг, 9 октября </p>
                                <p className={styles.block_info_amount}>2 пары, с 11:40 по 15:10</p>
                            </div>
                            <div className={styles.block_content}>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.och}>Лек</div>
                                </div>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.dist}>Лек</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.block_info}>
                                <p className={styles.block_info_time}>Пятница, 9 октября </p>
                                <p className={styles.block_info_amount}>2 пары, с 11:40 по 15:10</p>
                            </div>
                            <div className={styles.block_content}>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.och}>Лек</div>
                                </div>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.dist}>Лек</div>
                                </div>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.dist}>Лек</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.block_info}>
                                <p className={styles.block_info_time}>Суббота, 9 октября </p>
                                <p className={styles.block_info_amount}>2 пары, с 11:40 по 15:10</p>
                            </div>
                            <div className={styles.block_content}>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.och}>Лек</div>
                                </div>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.dist}>Лек</div>
                                </div>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.dist}>Лек</div>
                                </div>
                                <div className={styles.lesson}>
                                    <div className={styles.time}>
                                        <p className={styles.time_start}>11:40</p>
                                        <p className={styles.time_end}>13:10</p>
                                    </div>
                                    <div className={styles.main}>
                                        <p className={styles.main_name}>Машинное обучение</p>
                                        <p className={styles.main_teacher}>Орлов Александр Владимирович, 1337</p>
                                    </div>
                                    <div className={styles.dist}>Лек</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.legend}>
                        <div className={styles.legend_block}>
                            <div className={styles.och}>Лек</div> - очное
                        </div>
                        <div className={styles.legend_block}>
                            <div className={styles.dist}>Лек</div> - дистанционное
                        </div>
                    </div>
                </Container>
    );
};

export default SchedulePage;