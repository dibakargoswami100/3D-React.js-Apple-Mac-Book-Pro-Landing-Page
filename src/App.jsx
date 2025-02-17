import React from 'react'
import { Canvas } from "@react-three/fiber"
import "./style.css"
import { Environment, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (
    <div className="relative w-full h-screen ">
      {/* nav */}
      <div className='navbar line flex gap-5 pb-3 pt-10 absolute top-0 left-1/3 -transalte-x-1/2 '>
           {["iphone" , "ios" , "services" , "ipads" , "mac","products","support","store","contact","about"].map((e) => (
            <a href='' className='text-white font-[500] text-sm capitalize'>{e}</a>
            ))}
      </div>
      {/* Text Section */}
      <div className="absolute text-white top-20 left-1/2 -translate-x-1/2 font-helvetica">
        <h3 className=" masked text-7xl tracking-tighter font-bold">macbook pro.</h3>
        <h5 >Oh so pro !</h5>
        <p className=" w-5/4">Experience the power, speed, and innovation like never before. <br />
        </p>
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
        ]} />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
