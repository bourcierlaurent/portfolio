export const RatingStars = ({ level }: { level: number }) => {
	const randomString = Math.random().toString(36).substring(2, 15);
	return (
		<div className="rating rating-md rating-half">
			<input type="radio" name={`rating-${randomString}`} className="rating-hidden" disabled />
			{Array.from({ length: 10 }, (_, i) => {
				const isHalf = i % 2 === 0;
				const isChecked = level >= (i + 1) / 2;
				return (
					<input
						key={i}
						type="radio"
						className={`mask mask-star ${
							isHalf ? "mask-half-1" : "mask-half-2"
						} bg-orange-500 cursor-default`}
						name={`rating-${randomString}`}
						checked={isChecked}
						disabled
					/>
				);
			})}
		</div>
	);
};
