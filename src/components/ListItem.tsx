import React from "react";
import "./listitem.css";

const ListItem = () => {
  return (
    <>
      <div className="item-card">
        <img
          className="item-image"
          src="src/assets/sweater.png"
          alt="Knitted Sweater"
        ></img>
        <div className="item-text">
          <div className="item-header">Knitted Sweater (Size M)</div>
          <div className="item-summary">
            {
              "The $65 green knitted sweater effortlessly combines style and comfort. Its vibrant hue adds a refreshing touch, making it a versatile and affordable wardrobe essential. Crafted with quality knit fabric, this chic piece promises both warmth and fashion-forward appeal."
            }
          </div>
          <a href="https://www.weekday.com/en/men/knitwear/men-knitwear-sweaters/product.cypher-oversized-sweater-green.1200894005.html">
            Buy for Arvin
          </a>
        </div>
      </div>

      <div className="item-card">
        <img
          className="item-image"
          src="src/assets/shoes.png"
          alt="Shoes"
        ></img>
        <div className="item-text">
          <div className="item-header">Shoes (Size 12)</div>
          <div className="item-summary">
            {
              "Priced at $100, these green shoes redefine cool with their stylish design. The vibrant color adds a bold statement to any outfit, making them a trendy and versatile choice. Crafted with attention to detail, these shoes not only offer a fashionable look but also ensure comfort and durability. Elevate your footwear game with this cool pair that strikes the perfect balance between style and affordability."
            }
          </div>
          <a href="https://www.adidas.com/us/gazelle-shoes/GY7338.html">
            Buy for Arvin
          </a>
        </div>
      </div>

      <div className="item-card">
        <img
          className="item-image"
          src="src/assets/cologne.png"
          alt="Cologne"
        ></img>
        <div className="item-text">
          <div className="item-header">Cologne</div>
          <div className="item-summary">
            {
              "For $75, the cologne variety pack offers a curated selection of scents that redefine your fragrance experience. This value-packed collection combines quality and affordability, providing a diverse range of captivating aromas. Each fragrance within the pack is carefully chosen to suit various occasions, allowing you to effortlessly switch up your signature scent. With this variety pack, you can explore different olfactory notes, making it an excellent investment for those seeking versatility and style in their grooming routine."
            }
          </div>
          <a href="https://www.kohls.com/product/prd-6480666/sephora-favorites-cologne-sampler-set-with-redeemable-voucher.jsp">
            Buy for Arvin
          </a>
        </div>
      </div>

      <div className="item-card">
        <img
          className="item-image"
          src="src/assets/chains.png"
          alt="Chains"
        ></img>
        <div className="item-text">
          <div className="item-header">
            Chains Chain Length (20") Bracelet Length (19cm)
          </div>
          <div className="item-summary">
            {
              "The $70 gold chain or bracelet set is a stylish and affordable accessory that adds a touch of elegance to your ensemble. This set strikes the perfect balance between fashion and value, providing versatile options to complement various looks. Crafted with attention to detail, the pieces showcase a timeless and sophisticated design. Elevate your style with this affordable yet chic gold set, a must-have for those seeking a classy and budget-friendly accessory."
            }
          </div>
          <a href="https://masion.co/collections/chains-1/products/gold-rope-chain-bundle-save-20">
            Buy for Arvin
          </a>
        </div>
      </div>

      <div className="item-card">
        <img
          className="item-image"
          src="src/assets/shorts.png"
          alt="Muay Thai Shorts"
        ></img>
        <div className="item-text">
          <div className="item-header">Muay Thai Shorts (Size L)</div>
          <div className="item-summary">
            {
              "Priced at $60, these Muay Thai shorts combine affordability with high-quality performance gear. Designed for comfort and functionality, they boast a durable yet lightweight fabric ideal for intense training sessions. The shorts not only provide excellent mobility but also showcase a stylish and authentic Muay Thai aesthetic. At $60, they offer a budget-friendly option without compromising on the essential features needed for a satisfying and stylish training experience in the world of Muay Thai."
            }
          </div>
          <a href="https://www.fairtex.com/muay-thai-shorts-bs1713-tribal.html">
            Buy for Arvin
          </a>
        </div>
      </div>
    </>
  );
};

export default ListItem;
