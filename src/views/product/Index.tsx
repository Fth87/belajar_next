import styles from './product.module.scss';
type productType = {
  id: string;
  name: string;
  price: number;
  categories: string;
  image: string;
};

const ProductView = ({ products }: { products: productType[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product page</h1>
      <div className={styles.product__content}>
        {products.length > 0 ? (
          <>
            {products.map((product: productType) => (
              <div key={product.id} className={styles.product__content__item}>
                <div className={styles.product__content__item__image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className={styles.product__content__item__name}>{product.name}</h4>
                <p className={styles.product__content__item__category}>{product.categories}</p>
                <p className={styles.product__content__item__price}>
                  {product.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </p>
              </div>
            ))}
          </>
        ) : (
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image} />
            <div className={styles.product__content__skeleton__name} />
            <div className={styles.product__content__skeleton__category} />
            <div className={styles.product__content__skeleton__price} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
