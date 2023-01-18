class Product {
  constructor(id, name, image, quantity, address, coords) {
    this.id = id.toString();
    this.name = name;
    this.image = image;
    this.quantity = quantity;
    this.address = address;
    this.coords = coords;
  }
}

export default Product;
