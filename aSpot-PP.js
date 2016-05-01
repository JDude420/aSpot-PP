// 68 63
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var active = true;
function newLevel(){
newMsg("aSpot-PP.js Loaded", "§a");
newMsg("aSpot-PP.js Searching for API (aSpot-PP-API.js)","§e");
newMsg("TIP: if you download the API first then it will automatically download the rest when you do /update (checks the updates (duhr))","§7§o");
APIcheck();
}
function APIcheck(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try {
var APIfile = new java.io.File(android.os.Environment.getExternalStorageDirectory()+"/Downloads/", "aSpot-PP-API");
if(APIfile.isFile()){
active = true;
newMsg("Connected to API","§a");
}else{ active = false;
newMsg("Cannot find API. Use /apihelp to diagnose any problems.","§b"); }
}catch(e){ newMsg("ERROR: Could not check API","§4"); }
}}));
}
function procCmd(cmnd){
var cmd = cmnd.split(" ");
if(cmd=="apihelp") {
newMsg("Solution 1 : Make sure that your aSpot-PP-API.js is in the download folder","§b");
newMsg("Solution 2 : Make sure that you haven't changed the name of the file or got a differently named file, rename it back to aSpot-PP-API.js","§b");
}
}
function modTick(){
Entity.addEffect(Player.getEntity(), MobEffect.nightVision, 20, 1, false, true);
}
function newMsg(msg, color/*optional*/){
clientMessage(color+msg);
}