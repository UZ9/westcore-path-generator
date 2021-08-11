import { OrbitControls } from "@react-three/drei"
import { useNodeStore } from '../stores/NodeStore'

export default function CameraContainer() {
    // We want to disable the orbital controls if the user is currently dragging a node
    const dragging = useNodeStore(state => state.nodeCurrentlyDragging);
    
    return (
        <>
            {<OrbitControls enabled={!dragging} />}
        </>
    )
}