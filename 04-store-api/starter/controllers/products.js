const Product = require('../models/product')

const getAllProducts = async (req,res)=>{
    const products = await Product.find(req.query)
    res.status(200).json({products, nbHits: products.length })
}


const getAllProductsStatic = async (req,res)=>{
    const product = await Product.find({company:'ikea'})
    res.status(200).json({product, nbHits: product.length })
}

module.exports = {
  getAllProductsStatic,
  getAllProducts 
}