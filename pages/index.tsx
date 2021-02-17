import React from 'react';
// import Link from 'next/link'
import Layout from '../components/Layout'
// import ProductsService from './api/products.service'
// import { IProduct } from '../interfaces';
// import Product from '../components/Product';
// import styles from '../styles/index.module.scss'
// import { Col } from 'react-bootstrap';
// import { useRouter } from 'next/router'


const IndexPage = () => {
  // const router = useRouter()
  // const [categories, setCategories] = useState<string[]>([]);
  // const productService: ProductsService = new ProductsService()
  // const [isSearching, setIsSearching] = useState<boolean>(false)
  // const [search, setSearch] = useState<string>('');
  // const [products, setProducts] = useState<IProduct[]>([])
  // useEffect(() => {
  //   console.log("🚀 ~ file: index.tsx ~ line 13 ~ IndexPage ~ search", search)
  //   if (search !== '' && isSearching) getProductsFromService()
  // }, [isSearching, search])

  // useEffect(() => {

  //   console.log("🚀 ~ file: index.tsx ~ line 21 ~ IndexPage ~ products", products)
  // }, [products])

  // const getProductsFromService = async () => {
  //   try {
  //     setIsSearching(false)
  //     const results = await productService.getProducts(search)
  //     if (results) {
  //       console.log("🚀 ~ file: index.tsx ~ line 19 ~ getProductsFromService ~ results", results)
  //       setCategories(results.products?.categories);
  //       setProducts(results.products?.items);
  //       router.push({ pathname: `/items/search` })
  //       return results;
  //     }

  //   }
  //   catch (error) {
  //     throw error;
  //   }
  // }

  return (
    <Layout title="Home | Mercado Libre">
      {/* <div >
        <Col md={{ span: 10, offset: 1 }} className={styles.homeContainer}>
          {products?.map(product => {
            return (
              <div key={product.id} className={styles.productContainer}>

                <Product product={product} />
              </div>
            )
          })}
        </Col>

      </div> */}
    </Layout>
  )
}

export default IndexPage
