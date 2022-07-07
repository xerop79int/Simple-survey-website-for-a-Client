import React, { useState } from 'react'
import {
    useRecordWebcam,
    CAMERA_STATUS
} from "react-record-webcam";
const OPTIONS = {
    filename: "test-filename",
    fileType: "mp4",
    width: 1920,
    height: 1080
};

export const VideComponent = ({ videoFunction }) => {
    const recordWebcam = useRecordWebcam(OPTIONS);
    const saveAnswer = async () => {
        const blob = await recordWebcam.getRecording();
        if (blob && blob.size) {
            videoFunction(blob);
        }
    };

    return (
        <div>
            <div style={{ width: "265px", border: "1px solid #dadada", height: "200px" }}>
                <video
                    ref={recordWebcam.webcamRef}
                    style={{
                        display: `${recordWebcam.status === CAMERA_STATUS.OPEN ||
                            recordWebcam.status === CAMERA_STATUS.RECORDING
                            ? "block"
                            : "none"
                            }`, width: "265px"
                    }}
                    autoPlay
                    muted
                />
                <video
                    ref={recordWebcam.previewRef}
                    style={{
                        display: `${recordWebcam.status === CAMERA_STATUS.PREVIEW ? "block" : "none"
                            }`, width: "265px"
                    }}
                    controls
                />
            </div>

            {/* <img src={video} alt="" style={{width: "265px"}}/> */}
            <div class="videocontrolbtns" style={{ marginBottom: "20px" }}>
                <button
                    // disabled={
                    //     recordWebcam.status === CAMERA_STATUS.CLOSED ||
                    //     recordWebcam.status === CAMERA_STATUS.RECORDING ||
                    //     recordWebcam.status === CAMERA_STATUS.PREVIEW
                    // }
                    onClick={recordWebcam.open}
                >Open Camera</button>
                <button
                    // disabled={
                    //     recordWebcam.status === CAMERA_STATUS.CLOSED ||
                    //     recordWebcam.status === CAMERA_STATUS.RECORDING ||
                    //     recordWebcam.status === CAMERA_STATUS.PREVIEW
                    // }
                    onClick={recordWebcam.start}
                >Record</button>
                <button
                    // disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
                    onClick={recordWebcam.stop}
                >Stop</button>
                <button
                    // disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
                    onClick={recordWebcam.retake}
                >Retake</button>
            </div>
        </div>
    )
}
