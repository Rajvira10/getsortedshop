import { client } from '../../components/ApolloClient'
import gql from 'graphql-tag'
import { withRouter } from 'next/router'


const Product = withRouter( props  =>{
    console.log(props)
    return(
        <div>Product</div>
    )
});

Product.getInitialProps = async function( context ){
    
    let { query: { slug } } = context;
    const id = slug? parseInt( slug.split( '-' ).pop()) : context.query.id;

    const PRODUCT_QUERY = gql` query Product( $id: Int ! ){
        productBy( Id: $id ) {
            id
            averageRating
            slug
            description
            image {
                uri
                title
                srcSet
                sourceUrl
            }
            name
            ... on SimpleProduct {
            price
            id
        }
    }`

    const result = await client.query(({
        query: PRODUCT_QUERY,
        variables: { id }
    }));
    return {
        product: res.data.productBy
    }
}

export default Product;