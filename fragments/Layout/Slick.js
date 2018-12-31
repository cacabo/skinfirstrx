import { BLUE, DARK_BLUE, SHADE } from '../../constants/colors'

export default () => (
  <style jsx global>{`
    .slick-dots {
      width: calc(100% - 72px);
      margin: 0 36px;
    }

    .slick-arrow {
      color: ${BLUE};
      opacity: 1;
      width: 36px;
      height: 36px;
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      transition: all 0.2s ease;
    }

    .slick-prev {
      transform: translate(0px, -48px);
    }

    .slick-next {
      transform: translate(50px, -48px);
    }

    .slick-prev::before,
    .slick-next::before {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: ${BLUE};
      display: block;
      opacity: 1;
      z-index: 1299;
      color: white;
      font-weight: bold;
      font-size: 18px;
      line-height: 28px;
      box-shadow: 0px 2px 4px ${SHADE};
      transition: all 0.2s ease;
    }

    .slick-prev::before {
      content: "<";
    }

    .slick-next::before {
      content: ">";
    }

    .slick-next:hover::before,
    .slick-prev:hover::before {
      background: ${DARK_BLUE};
      transform: scale(1.125, 1.125);
    }
  `}
</style>)
