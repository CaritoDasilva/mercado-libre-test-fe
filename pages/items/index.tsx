// import { useRouter } from 'next/router';
// import React, { useState, useEffect } from 'react';
// import { Col } from 'react-bootstrap';
// import Layout from '../../components/Layout';
// import Product from '../../components/Product';
// import { IProduct } from '../../interfaces';
// import styles from '../../styles/index.module.scss'
// import ProductsService from '../api/products.service';

// interface IItemsProps {
//     search: string;
// }

// const Items = (props: IItemsProps) => {
//     const router = useRouter()
//     const [categories, setCategories] = useState<string[]>([]);
//     const productService: ProductsService = new ProductsService()
//     const [products, setProducts] = useState<IProduct[]>([])
//     const [search, setSearch] = useState<string>('');
//     // const [id, setId] = useState<string>('')



//     useEffect(() => {
//         getSearchFromRouter()
//         getProductsFromService()
//     }, [router.query])

//     const getSearchFromRouter = () => setSearch(String(router.query.search));


//     const getProductsFromService = async () => {
//         try {
//             const results = await productService.getProducts(props.search)
//             if (results) {
//                 console.log("🚀 ~ file: index.tsx ~ line 19 ~ getProductsFromService ~ results", results)
//                 setCategories(results.products?.categories);
//                 setProducts(results.products?.items);
//                 router.push({ pathname: `/items?search=${search}` })
//                 return results;
//             }

//         }
//         catch (error) {
//             throw error;
//         }
//     }

//     return (
// <Layout title="Home | Mercado Libre" categories={categories} setSearch={setSearch}>
//     <div >
//         <Col md={{ span: 10, offset: 1 }} className={styles.homeContainer}>
//             {products?.map(product => {
//                 return (
//                     <div key={product.id} className={styles.productContainer}>

//                         <Product product={product} />
//                     </div>
//                 )
//             })}
//         </Col>

//     </div>
// </Layout>
//     )
// }

// export default Items;

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
    const search: string = router.query.search;
    console.log("🚀 ~ file: index.tsx ~ line 75 ~ ItemsDashboard ~ router", router.query)

    useEffect(() => {
        if (search) getProductsFromService()
    }, [search])

    const getProductsFromService = async () => {
        try {
            const results = await productService.getProducts(search)
            if (results) {
                console.log("🚀 ~ file: index.tsx ~ line 19 ~ getProductsFromService ~ results", results)
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