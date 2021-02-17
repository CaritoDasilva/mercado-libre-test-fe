import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router'
import ProductsService from '../api/products.service';
import styles from '../../styles/Items.module.scss'
import { Col, Row, Button } from 'react-bootstrap';
import { ICategories, IProduct } from '../../interfaces';

const ItemsDetail = () => {
    const router = useRouter()
    const [id, setId] = useState<string>('')
    const productService: ProductsService = new ProductsService()
    const [productDetail, setProductDetail] = useState<IProduct>()
    const [categories, setCategories] = useState<string[]>([])
    console.log("🚀 ~ file: [id].tsx ~ line 7 ~ Items ~ id", id)

    useEffect(() => {
        getIdFromRouter()
    }, [router.query])

    useEffect(() => {
        if (id) getProductDetailFromService()
    }, [id])

    const getProductDetailFromService = async () => {
        try {
            const product = await productService.getProductDetail(id);
            if (product) {
                console.log("🚀 ~ file: [id].tsx ~ line 25 ~ getProductDetailFromService ~ product", product?.product?.item)
                setProductDetail(product?.product?.item)
                const categories = await productService.getCategory(product.product?.item?.category_id)
                if (categories) {
                    const categorieNames = categories.path_from_root.map((cat: ICategories) => cat.name)
                    setCategories(categorieNames)
                    console.log("🚀 ~ file: [id].tsx ~ line 29 ~ getProductDetailFromService ~ categories", categories)

                }
                return product;
            }

        }
        catch (error) {
            throw error;
        }
    }

    const getIdFromRouter = () => setId(String(router.query.id));

    return (
        <Layout categories={categories} titleTag={productDetail?.title} descriptionTag={`Cómpralo en Mercado Libre a ${productDetail?.price?.currency}$ ${productDetail?.price?.amount} - Paga en cuotas sin interés - Envío a todo el país. Encuentra más productos de ${categories[0]}.`} pictureTag={productDetail?.picture}>

            <Col md={{ span: 10, offset: 1 }} className={styles.homeContainer}>
                <Row>
                    <Col md={8} className={styles.pictureProduct}>
                        <img src={productDetail?.picture} alt="" />

                    </Col>
                    <Col md={3}>
                        <div className={styles.producDetailContainer}>
                            <p>{productDetail?.condition} - {productDetail?.sold_quantity} vendidos</p>
                            <h2>{productDetail?.title}</h2>
                            <h1>$ {productDetail?.price?.amount}</h1>
                            <Button className={styles.btnBuy} variant="primary">Comprar</Button>
                        </div>
                    </Col>


                </Row>

                <Col md={8} className={styles.productDescriptionContainer}>
                    <h1>Descripción del Producto:</h1>
                    <p>{productDetail?.description}</p>
                </Col>
            </Col>

        </Layout>
    )
}

export default ItemsDetail;
