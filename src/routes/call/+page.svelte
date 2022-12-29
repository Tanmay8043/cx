<script>
  import { browser } from "$app/environment";
  let Peer;

  if (browser) {
    usePeer();
  }

  async function usePeer() {
    const mod = await import("peerjs");
    Peer = mod.default;
    // blah
    peer = new Peer();
    peer.on("open", (id) => {
      youid = id;
      console.log(id);
    });

    peer.on("error", (id) => {
      console.log("error id " + id);
    });
    peer.on("connection", (conn) => {
      // console.log("message....");
      console.log("someone connected");
      conn.on("open", function () {
        console.log("conn open");
      });
      conn.on("data", function (data) {
        console.log(data);
      });
    });

    // HANDLE CONNECTTION
      peer.on("call",async(call)=>{
        // open webcam
      await navigator.mediaDevices.getUserMedia({
        video:true,
        audio:true
      }).then((stream)=>{
        call.answer(stream)
        call.on("stream",renderYouwebcam)
        videocurrent.srcObject = stream
        videocurrent.play()
      }).catch(err=>console.log("err msg" + err))
    })
  }

  const encode = (input) => {
    const keyStr =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let output = "";
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;

    while (i < input.length) {
      chr1 = input[i++];
      chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index
      chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output +=
        keyStr.charAt(enc1) +
        keyStr.charAt(enc2) +
        keyStr.charAt(enc3) +
        keyStr.charAt(enc4);
    }
    return output;
  };

  const sendFile = (event) => {};

  let renderYouwebcam = (stream) => {
    console.log(stream);
    videoEl.srcObject = stream;
    videoEl.play();
  };
  var peer;
  let codeid = "";
  let videocurrent;
  let videoEl;
  let youid = "";
</script>

<div>
  you id cam = {youid}
  <br />
  code : <input type="" bind:value={codeid} name="" />
  <!-- BUTTON CONNECT TO FRIEND -->
  <button
    on:click={async () => {
      var conn = peer.connect(codeid);
      conn.on("data", (data) => {
        console.log("new data " + data);
      });
      conn.on("open", function () {
        conn.send("hi");
      });
      // OPEN YOU WEBAM
      await navigator.mediaDevices.getUserMedia({
        video:true,
        audio:true
      }).then(stream=>{
        let call = peer.call(codeid,stream)
        videocurrent.srcObject = stream
        videocurrent.play()
        call.on("stream",renderYouwebcam)
      }).catch(err=>console.log("have error " + err))
      document.getElementById("end").classList.remove("hidden");
    }}
  >
    connect</button
  >

  <button
    class="hidden"
    id="end"
    on:click={async () => {
      peer.disconnect();
    }}>END CALL</button
  >

  <!-- VIDEO YOU FRIEND TAG HTML -->
  <video bind:this={videoEl} width="400" height="400" autoplay="true">
    <track kind="captions" src="" />
  </video>
  <br />

  <!-- YOU FACE CAM HERE -->
  <video bind:this={videocurrent} width="400" height="400" autoplay="true">
    <track kind="captions" src="" />
  </video>
</div>

<button
  on:click={() => {
    var conn = peer.connect(codeid);
    conn.send("Hello!");
  }}>send</button
>
