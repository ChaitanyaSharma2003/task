let webcamStream = null;

function startCamera() {
    if (webcamStream) {
        const tracks = webcamStream.getTracks();
        tracks.forEach((track) => track.start());
        
    }
}

