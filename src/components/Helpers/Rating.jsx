import Icon from '../Icon/Icon';

const ReviewRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div style={{ display: 'flex' }}>
      {[...Array(totalStars)].map((_, index) => {
        const isFilled = index < rating;
        const color = isFilled ? 'var(--color-yellow)' : 'var(--color-gray-lighter)';

        return <Icon key={index} iconName="star" width={16} height={16} color={color} />;
      })}
    </div>
  );
};

export default ReviewRating;
