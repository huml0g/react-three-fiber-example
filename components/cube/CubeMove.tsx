import React, { useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

const Cube: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>();

    // useFrame: @react-three/fiber에서 제공하는 훅으로, Three.js의 렌더링 루프에 대한 업데이트를 수행할 때 사용
    // 컴포넌트 내부에서 사용되며, 매 프레임마다 실행
    // 이를 통해 애니메이션을 만들거나 오브젝트의 변형을 업데이트
    // 콜백 함수를 인자로 받으며, 해당 콜백 함수는 매 프레임마다 호출
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    // 1. mesh는 Three.js에서 3D 객체를 나타내는 클래스
    // 3D 객체는 기하학적 모델(geometry)과 재질(material)을 결합하여 만들어지는데
    // 이러한 기하학적 모델과 재질을 함께 묶어주는 역할을 수행하는 것
    // 2. boxBufferGeometry: Three.js에서 3D 박스 형태의 기하학적 모델을 생성하는 데 사용되는 클래스
    // 이 클래스는 박스의 가로, 세로, 높이 등의 크기를 인자로 받아 3D 박스 모델의 기하학적 형태를 정의
    // 이 모델은 버퍼 기반의 점들로 구성되어 효율적인 렌더링을 지원
    // 3. meshBasicMaterial: Three.js에서 3D 객체의 재질을 나타내는 클래스
    // 이 재질은 3D 객체를 단색 또는 텍스처 없이 간단한 색으로 렌더링
    // meshBasicMaterial은 색상 속성을 지정하여 3D 객체의 모든 면에 동일한 색을 적용 가능
    // 예를 들어, color 속성을 사용하여 16진수 색상 코드를 지정 가능
    return (
        <mesh ref={meshRef}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={0x00ff00} />
        </mesh>
    );
};

const Scene: React.FC = () => {
    const { scene } = useThree();

    // useRef: React에서 참조할 수 있는 변수를 생성하는 훅
    // 해당 변수는 컴포넌트의 생명주기 동안 유지되며, 값이 변경되어도 컴포넌트가 다시 렌더링되지 않음.
    // 생성한 변수를 통해 DOM 요소나 다른 객체를 참조하거나, 컴포넌트 내에서 상태를 유지
    // .current 프로퍼티를 통해 접근 가능.
    const cubeRef = useRef<THREE.Mesh>();

    useFrame(() => {
        if (cubeRef.current) {
            cubeRef.current.rotation.x += 0.01;
            cubeRef.current.rotation.y += 0.01;
        }

        if (cubeRef.current && scene) {
            scene.add(cubeRef.current);
        }
    });

    return null;
};

const CubeExample: React.FC = () => {
    return (
        <Canvas>
            <Cube />
            <Scene />
        </Canvas>
    );
};

export default CubeExample;