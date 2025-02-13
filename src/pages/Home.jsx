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
          <Product 
            id="3"
            title="Oster DiamondForce Nonstick XL 5 Quart Digital Air Fryer, 8 Functions with Digital Touchscreen Stainless Steel"
            price={99.87}
            rating={5}
            image="https://m.media-amazon.com/images/I/714UdUx-p9L._AC_SX679_.jpg"
          />
          <Product 
            id="4"
            title="HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin & Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0040nr, Snowflake White)"
            price={169.35}
            rating={5}
            image="https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SX425_.jpg"
          />
        </div>
        <div className="home-product-row">
          <Product
            id="5"
            title="Smart Kids Watch with Fitness Tracker No Phone/APP Needed,19 Sport Mode,1.5" 
            price={34.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61lZmmNHNjL._AC_SY355_.jpg"
          />
          <Product
            id="6"
            title="Stanley Quencher H2.0 Tumbler with Handle & Straw 30 oz | Twist On 3-Way Lid | Cupholder Compatible for Travel | Insulated Stainless Steel Cup | BPA-Free | Peony"
            price={11.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/61WM1xukklL._AC_SY879_.jpg"
          />
          <Product
            id="7"
            title="LIANYU Dinnerware Sets for 4, 12 Piece Plates and Bowls Dish Set, Stoneware Dishware Dinner Ware for Kitchen Dining, Microwave & Dishwasher Safe, Emerald Green"
            price={29.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71+jKKto7uL._AC_SX679_.jpg"
          />
          <Product
            id="8"
            title="Mckanti 8 Pcs Drink Coasters with Holder, Minimalist Cotton Woven 4 Colors Absorbent Coaster Set for Home Decor Tabletop Protection Suitable for Kinds of Cups, 4.3 Inches.(NO.2)"
            price={8.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81D9ybwtAEL._AC_SX569_.jpg"
          />
        </div>
        <div className="home-product-row">
          <Product
            id="9"
            title="Decorative Bathroom Organizer, Corner Shower Caddy with Adhesive Mount, No Drill Shower Shelf, Rustproof Bathroom Shelf & Shower Rack, Space-Saving Bathroom Caddy with Hooks for Inside Shower Storage"
            price={24.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51jRBMjjAnL._AC_SX569_PIbundle-2,TopRight,0,0_SH20_.jpg"
          />
          <Product
            id="10"
            title="Candle Warmer Lamp, Valentine's Gifts for Her Him, Candle Warmer with Timer and Dimmer, Electric Wax Melt with 2 Bulbs, Housewarming Gifts New Home Room Decor"
            price={22.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71zrI4PfV7L._AC_SX569_.jpg"
          />
          <Product
            id="11"
            title="VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C, Retinol, Collagen, Turmeric - Original Japanese Complex Infused with Hyaluronic Acid, Vitamin E, Shea Butter, Castile Olive Oil (2 Pack)"
            price={11.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51iMh82b5UL._AC_UL320_.jpg"
          />
          <Product
            id="12"
            title="The Face Shop At Home Aesthetics Vegan Collagen Face Mask, Korean Glass Skin Care, Original & Vita-Toning Sheet Mask, Anti-aging Vitamin Hydrogel Face Sheet Mask for Firming, Elasticity, Moisturizing"
            price={13.30}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Lq3-pexLL._SX522_.jpg"
          />
        </div>
      </div>
    </main>
  )
}
