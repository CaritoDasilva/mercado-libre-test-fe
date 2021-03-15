import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { IProduct } from '../../interfaces'
import ProductsService from '../api/products.service'
import styles from '../../styles/index.module.scss'
import Product from '../../components/Product'
import { Col } from 'react-bootstrap'

const ItemsDashboard = () => {
    const router = useRouter()
    const [categories, setCategories] = useState<string[]>([]);
    const productService: ProductsService = new ProductsService()
    const [products, setProducts] = useState<IProduct[]>([])
    const search: string = String(router.query.search);

    useEffect(() => {
        if (search) getProductsFromService()
    }, [search])

    const getProductsFromService = async () => {
        try {
            const results = await productService.getProducts(search)
            if (results) {
                setCategories(results.products?.categories);
                setProducts(results.products?.items);
                return results;
            }

        }
        catch (error) {
            throw error;
        }
    }


    return (
        <Layout title="Home | Mercado Libre" categories={categories}>
            <div>
                <Col md={{ span: 10, offset: 1 }} className={styles.homeContainer}>
                    {products?.map(product => {
                        return (
                            <div key={product.id} className={styles.productContainer}>

                                <Product product={product} />
                            </div>
                        )
                    })}
                </Col>
            </div>
        </Layout>
    )
}

export default ItemsDashboard;