import { useState } from "react";
import Image from "../node_modules/react-bootstrap/esm/Image";
import { useIsRTL } from "../node_modules/react-bootstrap/esm/ThemeProvider";
import Draggable from "../node_modules/react-draggable/build/cjs/Draggable";
export default function ImageComponentPage() {
    const defaultImages = [...Array(10)].map((f,index)=>{
        return {id:"image_"+index, x:Math.random()*200, y:Math.random()*300}
    })
    const [images, setImages]=useState(defaultImages);

    const popImage = (currentId) => {
        console.log(currentId);
        setImages((prevImages)=>{
            const a = prevImages.filter(item =>item.id!=currentId);
            const b = prevImages.filter(item =>item.id == currentId);
            return a.concat(b);
        });
    }

    //TODO 写真位置の保存、選択したもののz-indexを上昇させ、ほかtの要素のz-indexをさげるコードをどう実現するかしらべる。
    return (<>
        <h1>test</h1>
        {images.map((image,index)=>
            <Draggable
                defaultPosition={{x: image.x, y:image.y}}>
                <Image src="dummy_300x300.png" 
                    thumbnail 
                    style={{ zIndex: index, position: 'absolute', top: image.y+'px', left: image.x+'px'}}
                    onClick={()=>{popImage(image.id)}}/>
            </Draggable>
        )}
        <style>{`
            img {
                user-drag: none;
                -webkit-user-drag: none;
                -moz-user-select: none;
             }
        `}</style>
    </>);
}