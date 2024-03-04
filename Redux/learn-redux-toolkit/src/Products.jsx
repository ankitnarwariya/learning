import ProductCard from './components/ProductCard'

const Products = () => {
    let productData = [
        {
            id: 1,
            productName: 'Wireless Bluetooth Headphones',
            categoryName: 'Electronics',
            sku: '89765432',
            description: 'Immerse yourself in rich, high-quality sound with these wireless Bluetooth headphones. Perfect for music lovers on the go.',
            imageSrc: 'https://via.placeholder.com/300',
            stock: 25
          },
          {
            id: 2,
            productName: 'Leather Messenger Bag',
            categoryName: 'Fashion',
            sku: '73628901',
            description: 'Stay stylish and organized with this genuine leather messenger bag. Ideal for work or casual outings.',
            imageSrc: 'https://via.placeholder.com/300',
            stock: 24
          },
          {
            id: 3,
            productName: 'Smart LED TV - 55"',
            categoryName: 'Electronics',
            sku: '55019876',
            description: 'Experience stunning clarity and vibrant colors with this smart LED TV. Enjoy your favorite shows and movies in high definition.',
            imageSrc: 'https://via.placeholder.com/300',
            stock: 65
          },
          {
            id: 4,
            productName: 'Organic Green Tea',
            categoryName: 'Food & Beverages',
            sku: '23456789',
            description: 'Refresh and revitalize with this premium organic green tea. Packed with antioxidants for a healthy lifestyle.',
            imageSrc: 'https://via.placeholder.com/300',
            stock: 5
          },
          {
            id: 5,
            productName: 'Professional DSLR Camera',
            categoryName: 'Electronics',
            sku: '98765432',
            description: 'Capture life’s moments with precision using this professional-grade DSLR camera. Perfect for photographers of all levels.',
            imageSrc: 'https://via.placeholder.com/300',
            stock: 28
          },
          {
            id: 6,
            productName: 'Modern Glass Coffee Table',
            categoryName: 'Furniture',
            sku: '12345678',
            description: 'Elevate your living space with this sleek and contemporary glass coffee table. Adds a touch of elegance to any room.',
            imageSrc: 'https://via.placeholder.com/300',
            stock: 32
          },
      ];

  return (
    <div className='flex flex-wrap justify-center'>
        {
            productData.map((product) => (
        
                <ProductCard 
                key={product.id} 
                productName = {product.productName}
                categoryName = {product.categoryName}
                sku = {product.sku}
                description = {product.description}
                image = {product.imageSrc}
                stock = {product.stock}
                />
            
                ))
        }
    </div>
  )
}

export default Products