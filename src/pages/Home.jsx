import ImageCarousel from '../components/ImageCarousel';
import Product from '../components/Product';
import '../styles/Home.css';

export default function Home() {
  return (
    <main className="home">
      <div className="home-image-carousel">
        <ImageCarousel />
      </div>
      <div className="home-products">
        <div className="home-product-row">
          <Product 
            id="1"
            title="Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac, PlayStation, & Xbox -1-Year Rescue Service (STGX2000400)"
            price={79.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41KH-bTKcKL._AC_SL1000_.jpg"
          />
          <Product 
            id="2"
            title="BAGSMART Toiletry Bag Travel Bag with Hanging Hook, Water-resistant Makeup Cosmetic Bag Travel Organizer for Accessories, Shampoo, Full-size Container, Toiletries (Black, Medium)"
            price={31.90}
            rating={4}
            image="https://m.media-amazon.com/images/I/61gMY7ZvcrL._AC_UL320_.jpg"
          />
        </div>
        <div className="home-product-row">
          <Product
            id="3"
            title="Smart Kids Watch with Fitness Tracker No Phone/APP Needed,19 Sport Mode,1.5" 
            price={34.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61lZmmNHNjL._AC_SY355_.jpg"
          />
          <Product
            id="4"
            title="Stanley Quencher H2.0 Tumbler with Handle & Straw 30 oz | Twist On 3-Way Lid | Cupholder Compatible for Travel | Insulated Stainless Steel Cup | BPA-Free | Peony"
            price={11.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/61WM1xukklL._AC_SY879_.jpg"
          />
          <Product
            id="5"
            title="LIANYU Dinnerware Sets for 4, 12 Piece Plates and Bowls Dish Set, Stoneware Dishware Dinner Ware for Kitchen Dining, Microwave & Dishwasher Safe, Emerald Green"
            price={29.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71+jKKto7uL._AC_SX679_.jpg"
          />
        </div>
        <div className="home-product-row">
          <Product
            id="6"
            title="Decorative Bathroom Organizer, Corner Shower Caddy with Adhesive Mount, No Drill Shower Shelf, Rustproof Bathroom Shelf & Shower Rack, Space-Saving Bathroom Caddy with Hooks for Inside Shower Storage"
            price={24.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51jRBMjjAnL._AC_SX569_PIbundle-2,TopRight,0,0_SH20_.jpg"
          />
          <Product
            id="6"
            title="Candle Warmer Lamp, Valentine's Gifts for Her Him, Candle Warmer with Timer and Dimmer, Electric Wax Melt with 2 Bulbs, Housewarming Gifts New Home Room Decor"
            price={24.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71zrI4PfV7L._AC_SX569_.jpg"
          />
        </div>
      </div>
    </main>
  )
}
