const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const wooConfig = require('./wooConfig');

const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const WooCommerce = new WooCommerceRestApi({
    url: wooConfig.siteUrl,
    consumerKey: wooConfig.consumerKey,
    consumerSecret: wooConfig.consumerSecret,
    wpAPI: true, 
    version: 'wc/v3'
});

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();




app.prepare()
.then(()=>{
    const server = express();

    server.get('/getProducts',(req,response)=>{
        WooCommerce.getAsync("products", {
            per_page: 20, // 20 products per page
          })
            .then((response) => {
              // Successful request
              console.log("Response Status:", response.status);
              console.log("Response Headers:", response.headers);
              console.log("Response Data:", response.data);
              console.log("Total of pages:", response.headers['x-wp-totalpages']);
              console.log("Total of items:", response.headers['x-wp-total']);
            })
            .catch((error) => {
              // Invalid request, for 4xx and 5xx statuses
              console.log("Response Status:", error.response.status);
              console.log("Response Headers:", error.response.headers);
              console.log("Response Data:", error.response.data);
            })
            .finally(() => {
              // Always executed.
            });
    });
    
    server.get("*",(req,res) =>{
        return handle(req,res)
    });

    server.listen( port, err => {
        if ( err ){
            throw err;
        }
        console.log(`Ready on ${port}`);
    });
})
.catch(ex=>{
    console.error(ex.stack);
    process.exit(1);
});