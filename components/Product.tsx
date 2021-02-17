import Link from 'next/link';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IProduct } from '../interfaces';
import styles from '../styles/Product.module.scss';

interface IProductProps {
    product?: IProduct;
}
const Product = ({ product }: IProductProps) => {

    return (
        <div className={styles.linkContainer}>
            <Link href={{ pathname: '/items/[id]', query: { id: product?.id } }} as={`/items/${product?.id}`}>
                <Row>
                    <Col md={2}>
                        <img className={styles.productPicture} src={product?.picture} alt="" />
                    </Col>
                    <Col md={6}>
                        <Row className="justify-content-betwwen">
                            <Col>
                                <h1 className={styles.priceText}>$ {product?.price?.amount}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <h2 className={styles.titleText}>{product?.title}</h2>
                            </Col>

                        </Row>
                    </Col>
                    <Col>
                        <p className={styles.pCity}>{product?.city}</p>
                    </Col>
                </Row>
            </Link>

        </div>
    )
}

export default Product;