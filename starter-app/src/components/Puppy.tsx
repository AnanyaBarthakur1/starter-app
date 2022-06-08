import React, {useState} from 'react'
import { setEmitFlags } from 'typescript';
import puppy1 from './images/puppy_1.jpg'
import puppy2 from './images/puppy_2.jpg'
import puppy3 from './images/puppy_3.jpg'
import './styles.css'

interface pupImages{
    id: number,
    path: string,
}

const images: pupImages[] = [{id:0, path: puppy1}, 
    {id:1,path: puppy2},
     {id:2, path: puppy3}];

function Puppy() {
    const [img_curr, setImg] = useState<pupImages>(images[0]);

    function changePicture(){
        const nextIndex = img_curr.id + 1
        if (nextIndex < 3 && nextIndex >-1) {
            setImg(images[nextIndex])
        }
        else{
            setImg(images[0])
        }
    }

    return (
        <div className = 'puppy'>
            <p> Basic Puppy Picture Changer </p>
            <button className='puppy_button' onClick={changePicture} >
                Click to change puppy
            </button>
            <div>
            <img  src={img_curr.path} />
            </div>
        </div>
    );
}

export default Puppy;