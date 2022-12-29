<svelte:head>
    <!-- recommended -->
<script src="https://www.WebRTC-Experiment.com/RecordRTC.js"></script>

<!-- use 5.6.2 or any other version on cdnjs -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/RecordRTC/5.6.2/RecordRTC.js"></script>

<!-- NPM i.e. "npm install recordrtc" -->
<script src="node_modules/recordrtc/RecordRTC.js"></script>
</svelte:head>


<script>
    let recorder, stream;
    const startREC=async ()=>{
        stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
        window.localStream = stream;
        document.querySelector("video").srcObject = stream;
        // document.querySelector("audio").srcObject = stream;
        recorder= new RecordRTCPromisesHandler(stream, {
            type: 'video'
        });
        recorder.startRecording();
    }

    const stopREC=async()=>{
        await recorder.stopRecording();
        localStream.getVideoTracks()[0].stop();
        localStream.getAudioTracks()[0].stop();
        let blob = await recorder.getBlob();
        invokeSaveAsDialog(blob);
    }
</script>
<p>Record your video</p>
<video class="w-80 h-80" autoplay playsinline muted></video>
<button on:click={startREC} class="border-2 m-2 px-2 py-1 rounded-lg">Click to RECORD</button>

<button on:click={stopREC} class="border-2 m-2 px-2 py-1 rounded-lg">Stop</button>


<hr/>