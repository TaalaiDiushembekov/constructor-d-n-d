import React, {useRef} from 'react';
import {Rnd} from "react-rnd";
import useDraggable from "../Draggable2";

const DraggableCard = ({children, deleteCard, file}) => {
    const cardRef = useRef(null)
    useDraggable(cardRef)
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "dashed 1px #ddd",

        width: "100%",
        height: "100%"
    };

    return (
            <>
                <div>
                    <div className="main">
                        <div className="hidden">

                        </div>

                    </div>
                    <div className="card" ref={cardRef}>
                        { children }

                    </div>
                </div>
                <div key={file.name}>
                    <div className="addPhoto">
                        <Rnd
                            style={style}
                            bounds=".leftPanel"
                            default={{
                                x: 0,
                                y: 0,
                                width:250,
                                height: 300
                            }}
                        >
                            <img
                                style={style} src={file.preview}  alt="preview"/>
                        </Rnd>
                    </div>
                </div>
                <button onClick={() => deleteCard(file.id)}
                >Delete Card</button>

            </>
    );
};

export default DraggableCard;
