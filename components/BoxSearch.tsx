import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup, Navbar, Col } from 'react-bootstrap';
import styles from '../styles/BoxSearch.module.scss';
import { Props } from './Layout';


const BoxSearch = () => {
    const [query, setQuery] = useState<string>('')
    console.log("🚀 ~ file: BoxSearch.tsx ~ line 9 ~ BoxSearch ~ query", query)



    return (
        <div className={styles.boxSearchContainer}>
            <Navbar className="justify-content-center">
                <Col md={{ span: 10, offset: 1 }} >
                    <Form inline>
                        <Col md={1} className={styles.iconContainer}>
                            <img src="/logo.png" alt="" />
                        </Col>
                        <Col md={9}>
                            <InputGroup >
                                <FormControl
                                    placeholder="Nunca dejes de buscar"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className={styles.searchBoxInput}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <InputGroup.Append>
                                    <Link href={`/items/?search=[${query}]`} as={`/items/?search=${query}`}>
                                        <Button variant="link" size="sm" className={styles.searchBtn}><img src="/search-icon.png" alt="" /></Button>
                                    </Link>


                                </InputGroup.Append>
                            </InputGroup>

                        </Col>
                    </Form>
                </Col>
            </Navbar>
        </div>
    )
}

export default BoxSearch;