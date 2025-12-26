import { useSwiper } from 'swiper/react';

const SlidePrevButton = ({...props}) => {
  const swiper = useSwiper();

  return (
    <button {...props} onClick={() => swiper.slidePrev()} className='prev group not-disabled:hover:bg-gold/25 not-disabled:active:bg-gold/25 transition-colors size-10 bg-white ring  ring-gold/25 hover:ring-gold active:ring-gold  rounded-full flex justify-center items-center cursor-pointer  disabled:ring-gray-200'>
        <svg
            className='group-disabled:scale-[1] group-hover:scale-[1.4] group-active:scale-[1.4] group-disabled:stroke-gray-300 stroke-gold transition-transform'
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
        >
            <polyline points="15 18 9 12 15 6" />
        </svg>
    </button>
          
  );
}

export default SlidePrevButton