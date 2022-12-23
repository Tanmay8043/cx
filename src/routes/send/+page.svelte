<script>
    import {browser} from "$app/environment"
let Peer;
var conn;

if (browser) {
  usePeer();
}

async function usePeer() {
  const mod = await import("peerjs");
  Peer = mod.default;
  // blah

}

const sendFile=(event)=>{
    

}
</script>


<input type="file" accept="image/*" on:change={(event)=>{
    const peer = new Peer('sender', { host: 'localhost', port: 5173, path: '/' })

conn = peer.connect('receiver')
    const file = event.target.files[0]
    const reader = new FileReader();
        reader.onloadend = () => {
            conn.send({
      file: reader.result,
      filename: file.name,
      filetype: file.type
    })            // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
        };
        reader.readAsDataURL(file);

}}>