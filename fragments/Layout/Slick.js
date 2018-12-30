import { BLUE, DARK_BLUE } from '../../constants/colors'

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
    }

    .slick-prev::before {
      content: "<";
    }

    .slick-next::before {
      content: ">";
    }

    .slick-next::before:hover,
    .slick-prev::before:hover {
      background: ${DARK_BLUE};
    }
  `}
</style>)
