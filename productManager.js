let products = [];


const addProduct = (title, description, price, thumbnail, code, stock) => {
  const newProduct = {
    id: products.length + 1,
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
  };

  if (Object.values(newProduct).includes(undefined)) {
    console.log("All entries are required");
    return;
  }

  const productFoundWithRepeatedCode = products.find((product) => product.code === code);
  if (productFoundWithRepeatedCode) {
    console.log(`${code} already exists.`);
    return;
  }

  products.push(newProduct);
};

const getProducts = () => {
  console.log(products);
  return products;
};

const getProductById = (id) => {
  const product = products.find( product => product.id === id);
  if(!product) {
    console.log(`${id} not Found`);
    return;
  }

  console.log(product);
  return product;
};


/// Testing

addProduct("Coca-Cola", "refresco carbonatado", 1.50, "coca_cola.jpg", "001", 100);
addProduct("Pepsi", "refresco de cola", 1.25, "pepsi.jpg", "002", 80);
addProduct("Sprite", "refresco de lima limón", 1.00, "sprite.jpg", "003", 120);

// getProducts();

getProductById(1);
getProductById(4);