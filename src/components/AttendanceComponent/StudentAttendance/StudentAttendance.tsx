import React, {FC, useState} from 'react';
import styles from "./StudentAttendance.module.scss";
import ProgressComponent from "../../ProgressComponent/ProgressComponent";
import GreenStatus from "../../Statuses/GreenStatus";
import RedStatus from "../../Statuses/RedStatus";

const StudentAttendance:FC = () => {
    return (
        <div className={styles.content}>
            <div className={styles.progress}>
                <ProgressComponent type={"attendance"} maxHeight={680}></ProgressComponent>
            </div>
            <div className={styles.attendance}>
                <div className={styles.attendance_content}>
                    <div className={styles.header_block}>
                        <p>Дата</p>
                        <p>Статус</p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.date}>20/10/23</p>
                        <GreenStatus>присутствовал</GreenStatus>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.date}>20/10/23</p>
                        <RedStatus>отсутствовал</RedStatus>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.date}>20/10/23</p>
                        <GreenStatus>присутствовал</GreenStatus>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.date}>20/10/23</p>
                        <RedStatus>отсутствовал</RedStatus>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.date}>20/10/23</p>
                        <GreenStatus>присутствовал</GreenStatus>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.date}>20/10/23</p>
                        <RedStatus>отсутствовал</RedStatus>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.date}>20/10/23</p>
                        <GreenStatus>присутствовал</GreenStatus>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.date}>20/10/23</p>
                        <GreenStatus>присутствовал</GreenStatus>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StudentAttendance;