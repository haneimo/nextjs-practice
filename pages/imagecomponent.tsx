import Image from "../node_modules/react-bootstrap/esm/Image";
import Draggable from "../node_modules/react-draggable/build/cjs/Draggable";

export default function ImageComponentPage() {
    return (<>
        <h1>test</h1>
        {[...Array(10)].map(()=>
            <Draggable>
                <Image src="dummy_300x300.png" thumbnail/>
            </Draggable>
        )}
    </>);
}

//img {
//	user-drag: none;
//	-webkit-user-drag: none;
//	-moz-user-select: none;
//}