import client from '../components/ApolloClient'
import gql from 'graphql-tag'

const PRODUCTS_QUERY = gql`query{
    products(first: 20) {
      nodes {
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
      }
    }
  }`;


/**
 * Shop
 * 
 * @param {*} props 
 * @returns 
 */


const Shop = (props) => {
  const { products } = props
  return (
    <div className="shop">
      <h1>Shop</h1>
      <hr />
      <div className="products">
        {products.map((product) => (
          <div className="product">
            <img width="420" height="420" src={product.image.sourceUrl} alt="" />
            <p> {product.name} </p>
            <p className="price">{product.price}</p>
          </div>
        )
        )}
      </div>
    </div>

  );
}

Shop.getInitialProps = async () => {
  const result = await client.query({
    query: PRODUCTS_QUERY
  });
  return {
    products: result.data.products.nodes
  }
};


export default Shop;