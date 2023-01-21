class Product {
  constructor(id, name, image, quantity, address, coords, category, description) {
    this.id = id.toString();
    this.name = name;
    this.image = image;
    this.quantity = quantity;
    this.address = address;
    this.coords = coords;
    this.category = category;
    this.description = description;
  }
}

export default Product;
