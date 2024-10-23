import "./skeletonCard.css";

interface SkeletonCardProps {
  count: number;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ count }) => {
  return (
    <>
      {count === 1 ? (
        <div className="skeletonCard">
          <div className="skeletonCard__img animated"></div>
          <div className="skeletonCard__text">
            <div className="skeletonCard__top">
              <div className="skeletonCard__title animated"></div>
              <div className="skeletonCard__price animated"></div>
            </div>
            <div className="skeletonCard__item">
              <h2 className="skeletonCard__subtitle">Product description</h2>
              <p className="skeletonCard__description animated"></p>
            </div>
            <div className="skeletonCard__item">
              <h2 className="skeletonCard__subtitle">Dimensions</h2>
              <dl className="skeletonCard__chars animated"></dl>
            </div>
            <div className="skeletonCard__item">
              <h2 className="skeletonCard__subtitle">Quantity</h2>
              <div className="stepper animated"></div>
            </div>
            <div className="skeletonCard__buttons">
              <div className="btn1 animated"></div>
              <div className="btn2 animated"></div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
