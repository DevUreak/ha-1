
import Images from '../data/images'; // 제공되는 이미지를 이용하세요
import Thumbnail from '../component/Thumbnail';
import { useState } from 'react';
import images from '../data/images';

function Gallery() {
  // console.log(images) // npm start를 통해 앱을 열어, 개발자 콘솔을 통해 이미지 목록을 확인할 수 있습니다

  const [imgIndex, setimgIndex] = useState(images[0]);

  const handleClick = (image) => {
    // TIP: parameter로 이미지가 전달되어야 하며, 이벤트 객체는 쓰지 않습니다
    //console.log((image.id-1));
    setimgIndex(image);
    //setimgIndex(image.id-1);
  
  };

  return (
    <div>
      <h2>전체 목록</h2>
      <div id='list' className='flex'>
          {
          
          Images.map((img) => (
              <a onClick={() => handleClick(img)} key={img.id}>
                <Thumbnail source={img.src} alt={img.alt} />
              </a>
          ))
            
          }
        
      </div>

      <div>
        {/* TODO: 아래 하드코딩된 내용 대신에, 목록 선택에 따른 이미지를 표시하세요 */}
        <h2>{ imgIndex.alt}</h2>
        <img src={imgIndex.src} id='current-image' alt={imgIndex.alt} />
        
      </div>
    </div>
  );
}

export default Gallery;
