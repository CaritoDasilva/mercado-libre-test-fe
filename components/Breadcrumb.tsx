import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Props } from './Layout';
import styles from '../styles/Breadcrumb.module.scss';

const BreadcrumpComponent = (props?: Props) => {

    return (
        <Breadcrumb className={styles.breadcrumContainer}>
            {props?.categories?.map((cat, i) => (
                <Breadcrumb.Item key={i} href="#" className={styles.bItem}>{cat}</Breadcrumb.Item>

            ))}

        </Breadcrumb>

    )
}

export default BreadcrumpComponent;