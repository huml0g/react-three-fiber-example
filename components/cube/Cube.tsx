import { Canvas } from "@react-three/fiber";
import React from "react";

const Cube: React.FC = () => {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="#e91e63"/>
        </mesh>
    )
}

const Basic: React.FC = () => {
    return (
        <Canvas camera={{ position: [1, 1, 3] }}>
            <Cube />
        </Canvas>
    )
}

export default Basic;