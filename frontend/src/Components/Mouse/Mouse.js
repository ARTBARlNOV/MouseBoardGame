import './Mouse.css';

import mouseIMG from './assets/mouse3.png';

function Mouse({ mousePosition }) {
  return (
    <img
      src={mouseIMG}
      className="mouse-icon"
      onMouseMove={(e) => e.stopPropagation()}
      style={{
        transform: `translate(${mousePosition.x - 1030}px, ${mousePosition.y - 500}px)`,
        transition: '0.2s',
      }}
      alt="Mouse-IMG"
    />
  );
}

export default Mouse;
