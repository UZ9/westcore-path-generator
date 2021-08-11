import { useRef, useState } from "react";
import { button, Leva, LevaPanel, useControls } from "leva";
import { useUiLevaStore } from "../stores/UILevaStore";
import * as THREE from "three";
import { useNodeStore } from "../stores/NodeStore";


export default function UI() {
    const importButton = useRef();
    const waypointButton = useRef();

    const nodes = useNodeStore(state => state.nodes);
    const addNode = useNodeStore(state => state.addNode);

    const store = useUiLevaStore(state => state.currentNodeStore)
    const toggleFieldElements = useUiLevaStore(state => state.toggleFieldElements);

    const toggleMarkerMode = useUiLevaStore(state => state.toggleMarkerMode);
    const toggleRobotVisualization = useUiLevaStore(state => state.toggleRobotVisualization);

    const [buttonSelected, setButtonSelected] = useState(false);

    const { importString } = useControls(
        {
            hideGameElements: {
                value: false,
                onChange: () => { toggleFieldElements(); }
            },
            showRobotVisualization: {
                value: false,
                onChange: () => { toggleRobotVisualization(); }
            },
            importString: "Import String Goes Here"
        }
    )

    /**
     * Imports a list of waypoints from a JSON string 
     * @param importString The JSON string to import from
     */
    let importProject = (importString) => {
        const parsedNodes = JSON.parse(importString);

        for (const index in parsedNodes) {
            // Change serialized position to be a THREE.Vector3
            let node = parsedNodes[index];

            node.position = new THREE.Vector3(node.position.x, node.position.y, node.position.z);

            addNode(parsedNodes[index]);
        }
    }

    /**
     * Exports a list of waypoints 
     * @returns A JSON string containing the waypoint data
     */
    let exportProject = () => {
        console.log(JSON.stringify(nodes));
        return JSON.stringify(nodes);
    }

    return (
        <div style={{ position: "absolute", right: "1em", top: "1em" }} className="panel">
            <div className={"leva-c-kWgxhW leva-c-kWgxhW-bSMcqW-fill-true leva-c-kWgxhW-nNfbl-hideTitleBar-true"}>
                <div className={"leva-c-hBtFDW"}>
                    <div className={"leva-c-dmsJDs leva-c-dmsJDs-lpvxwm-toggled-true leva-c-dmsJDs-hXSjjU-isRoot-true"}>
                        <div className={"leva-c-bduird"}>
                            <button
                                ref={importButton}
                                onClick={() => { importProject(importString) }}
                                style={{ color: "#ededed", backgroundColor: ("#007bff") }}
                                className={"leva-c-fOioiK"}>{"Import Project"}
                            </button>
                            <button
                                ref={importButton}
                                onClick={() => { exportProject() }}
                                style={{ color: "#ededed", backgroundColor: ("#007bff") }}
                                className={"leva-c-fOioiK"}>{"Export Project"}
                            </button>
                            <div /><div /><div />
                            <button
                                ref={waypointButton}
                                onClick={() => { setButtonSelected(!buttonSelected); toggleMarkerMode(); }}
                                style={{ color: "#ededed", backgroundColor: (buttonSelected ? "#ff003c" : "#007bff") }}
                                className={"leva-c-fOioiK"}>{buttonSelected ? "Exit Waypoint Creation" : "Enter Waypoint Creation"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <LevaPanel store={store} fill flat titleBar={false} />
            <Leva fill flat titleBar={false} style={{ position: "absolute" }} />

        </div>
    )
}