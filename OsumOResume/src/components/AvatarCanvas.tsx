import {OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const Avatar = () => {
  const avatar = useGLTF("/myavatar.glb");
  const {actions} = useAnimations(avatar.animations , avatar.scene)
  console.log(actions)

// useEffect(() => {
// })
  return (
    <group> 
      <primitive object={avatar.scene} />
    </group>  
  );
};


const AvatarCanvas = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5}/>
        <pointLight position={[1, 1, 1]} />
        <OrbitControls />
        <Avatar />
    </Canvas>
    </>
  );
};

export default AvatarCanvas