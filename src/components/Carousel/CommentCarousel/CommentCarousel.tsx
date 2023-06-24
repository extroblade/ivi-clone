import React, { FC } from 'react';
import NextArrow from '@/components/Carousel/Arrows/NextArrow';
import PrevArrow from '@/components/Carousel/Arrows/PrevArrow';
import Slider from 'react-slick';
import { IComment } from '@/types/types';
import CommentCard from '@/components/Comment/CommentCard/CommentCard';
import Loader from '@/components/Loader/Loader';

interface ICommentCarousel {
  comments: IComment[];
}

const CommentCarousel: FC<ICommentCarousel> = ({ comments }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    draggable: true,
    lazyLoad: 'progressive',
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div style={{ marginBottom: '40px' }}>
      {comments ? (
        <Slider {...settings}>
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        </Slider>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CommentCarousel;
