import { button, Leva, LevaPanel, useControls } from "leva";
import React from "react";
import { useEffect, useRef } from "react";

export default function UIManager(props) {
    const [[selection, store], setSelection] = React.useState([-1, null]);
    const [buttonSelected, setButtonSelected] = React.useState(false);
    const stateRef = useRef();

    stateRef.current = { props };

    let setNodeSelection = (node) => {
        stateRef.current.props.uiRenderer.setSelected(node);

        setSelection(node);

        return
    }

    let createNode = (pos) => {
        stateRef.current.props.uiRenderer.createNode(pos);
    }

    let addNodes = (...nodes) => {
        stateRef.current.props.uiRenderer.addNodes(...nodes);
    }

    let importProject = (importString) => {
        const nodes = JSON.parse(importString);

        addNodes(...nodes);
    }

    let exportProject = () => {
        const nodes = stateRef.current.props.uiRenderer.getNodes();

        console.log(JSON.stringify(nodes));
        return JSON.stringify(nodes);
    }

    useEffect(() => {
        props.uiRef.current = createNode;

        if (stateRef.current.props.uiRenderer !== null) {


            if (stateRef.current.props.uiRenderer.state.uiManager !== null && stateRef.current.props.uiRenderer.state.uiManager !== undefined) return;

            stateRef.current.props.uiRenderer.setUiManager({ selection, setNodeSelection });
        }

        return () => {
            props.uiRef.current = null;
        }


    }, [props.uiRenderer, props.uiRef, selection])

    // This is absolutely cursed but is needed for the automatic css injection
    const {importString} = useControls(
        {
            importString: "Import String Goes Here",
            "Remove All Markers": button(() => { })
        }
    )

    const waypointButton = useRef();
    const importButton = useRef();

    return (
        <div style={{ position: "absolute", right: "1em", top: "1em" }} className="panel">
            <div className={"leva-c-kWgxhW leva-c-kWgxhW-bSMcqW-fill-true leva-c-kWgxhW-nNfbl-hideTitleBar-true"}>
                <div className={"leva-c-hBtFDW"}>
                    <div className={"leva-c-dmsJDs leva-c-dmsJDs-lpvxwm-toggled-true leva-c-dmsJDs-hXSjjU-isRoot-true"}>
                        <div className={"leva-c-bduird"}>
                            <button
                                ref={importButton}
                                onClick={() => { importProject(importString)}}
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
                                onClick={() => { setButtonSelected(!buttonSelected); stateRef.current.props.uiRenderer.toggleCreationMode() }}
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
    );
}