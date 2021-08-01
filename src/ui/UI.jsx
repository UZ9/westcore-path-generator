import { useRef, useState } from "react";
import { button, Leva, LevaPanel, useControls } from "leva";
import { useUiLevaStore } from "../stores/UILevaStore";
import { useNodeStore } from "../stores/NodeStore";


export default function UIButton(props) {
    const importButton = useRef();
    const waypointButton = useRef();

    const nodes = useNodeStore(state => state.nodes);
    const addNode = useNodeStore(state => state.addNode);

    const store = useUiLevaStore(state => state.currentNodeStore)

    const toggleMarkerMode = useUiLevaStore(state => state.toggleMarkerMode);

    const [buttonSelected, setButtonSelected] = useState(false);

    const {importString} = useControls(
        {
            importString: "Import String Goes Here"
        }
    )

    let importProject = (importString) => {
        const parsedNodes = JSON.parse(importString);

        for (const index in parsedNodes) {
            addNode(parsedNodes[index]);
        }
    }
    

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