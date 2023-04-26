const Product = require("../models/productModel");
const { getPostData } = require("../utils");

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (e) {
    console.log(e);
  }
}

async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-type": "application/json" });
      res.end(JSON.stringify({ message: " Product not found" }));
    } else {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (e) {
    console.log(e);
  }
}
async function createProduct(req, res) {
  try {
    const body = await getPostData(req);
    const { title, description, price } = JSON.parse(body);
    const product = {
      title,
      description,
      price,
    };
    const newProduct = await Product.create(product);
    res.writeHead(201, { "Content-type": "application/json" });
    return res.end(JSON.stringify(newProduct));
  } catch (e) {
    console.log(e);
  }
}

async function updateProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-type": "application/json" });
      res.end(JSON.stringify({ message: " Product not found" }));
    } else {
      const body = await getPostData(req);
      const { title, description, price } = JSON.parse(body);
      const productData = {
        title: title || product.title,
        description: description || product.description,
        price: price || product.price,
      };
      const updProduct = await Product.update(id, productData);
      res.writeHead(200, { "Content-type": "application/json" });
      return res.end(JSON.stringify(updProduct));
    }
  } catch (e) {
    console.log(e);
  }
}
async function deleteProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-type": "application/json" });
      res.end(JSON.stringify({ message: " Product not found" }));
    } else {
      await Product.remove(id);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify({ message: "product has been removed" }));
    }
  } catch (e) {
    console.log(e);
  }
}
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
