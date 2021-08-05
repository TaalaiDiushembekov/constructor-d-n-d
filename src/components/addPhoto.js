import React, { useState} from 'react';
import {useDropzone} from "react-dropzone";

import {Rnd} from "react-rnd";

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "dashed 1px #ddd",
    width: "100%",
    height: "100%"
};

const AddPhoto = () => {
    const [files, setFiles] = useState([])
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
              [...files, ...acceptedFiles.map((file) => Object.assign(file, {
                  preview: URL.createObjectURL(file),
                  id: 1
              }))]
            )
        }
    })

    return (
        <div>
            <div className="plusPhoto" {...getRootProps()}>
                <p>+ фото</p>
                <input {...getInputProps()}/>

            </div>
            <div>
                { files.map((file) =>{
                    return(


                  <div key={file.name}>
                    <div className="addPhoto">
                       <Rnd
                       style={style}

                       default={{
                       x: 0,
                       y: 0,
                       width:250,
                       height: 300
                   }}
                       >
                        <img style={style} src={file.preview}  alt="preview"/>
                      </Rnd>
                     </div>
                   </div>


                    )
                })}
            </div>
        </div>
    );
};

export default AddPhoto;
