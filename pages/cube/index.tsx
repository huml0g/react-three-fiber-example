import React from "react";
import Cube from "@/components/cube/Cube";
import CubeMove from "@/components/cube/CubeMove";

const Index: React.FC = () => {
    return (
        <main>
            <div>
                <Cube/>
            </div>
            <div>
                <CubeMove/>
            </div>
        </main>
    )
}

export default Index;