<svelte:head>
<script src="https://www.WebRTC-Experiment.com/RecordRTC.js"></script>
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

    const screenShare=async ()=>{
        var screen = await navigator.mediaDevices.getDisplayMedia({video: true});
        document.querySelector("video").srcObject = screen;
    }
</script>
<div class="p-4">
    <p class="text-xl font-bold">Record your video</p>
    <video class="w-2/5 mx-auto bg-gray-400" autoplay playsinline muted></video>
    <button on:click={startREC} class="border-2 m-2 px-2 py-1 rounded-lg">Click to RECORD</button>

    <button on:click={stopREC} class="border-2 m-2 px-2 py-1 rounded-lg">Stop</button>

    <br/>
    <hr/>


    <p class="text-xl font-bold">Share your Screen</p>

    <button class="border-2 rounded px-2 py-1 m-2" on:click={screenShare}>Share Screen</button>
    <video class="w-3/5 mx-auto bg-gray-400" autoplay playsinline muted></video>
</div>