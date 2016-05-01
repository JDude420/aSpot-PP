// 68 63
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var runS = [false];
var active = true;
var slots = [];
function newLevel(){
  newMsg("aSpot-PP.js Loaded", "§a");
  newMsg("aSpot-PP.js Searching for API (aSpot-PP-API.js)","§e");
  newMsg("TIP: if you download the API first then it will automatically download the rest when you do /update (checks the updates (duhr))","§7§o");
  APIcheck();
  try{
    var line, string = "";
    var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftworlds/" + Level.getWorldDir() + "/", "storage.dat");
    if(!file.exists()) return;
    var buffer = new java.io.BufferedReader(new java.io.FileReader(file));
    while((line = buffer.readLine()) != null) {
      var t = line + java.lang.System.getProperty("line.seperator");
      string += t.substring(0, t.length - 4);
      var t2 = line;
      if((line = buffer.readLine()) != null) string += "\n";
      line = t2;
    }
    var loadL = string.split("|");
    for(var i in loadL) {
        var slotData = loadL[i].split("-");
        if(slotData.length < 1) continue;
        slots[i] = [slotData[0], slotData[1]];
    }
  }catch(e){ newMsg("Error: Could not get data!")
}
function leaveGame(){
  slots=[];
}
function switchBack(just) {
    function saveChest() {
        var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftworlds/" + Level.getWorldDir() + "/", "storage.dat");
        file.createNewFile();
        var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(file));
        var string = "";
        for(var i in slots) if(slots[i][0] !== undefined && slots[i][1] !== undefined && slots[i][2] !== undefined) string += slots[i][0].toString() + "~" + slots[i][1].toString() + "~" + slots[i][2].toString() + "|";
        outWrite.append(string);
        outWrite.close();
    }
    if(just) {
        saveChest();
        return;
    }
    switchback = 0;
    for(var i = 0; i < 40; i++) {
        slots[i] = [levels[i]];
        Level.setChestSlot(chestX, chestY, chestZ, i, 0, 0, 0);
    }function switchBack(just) {
    function saveChest() {
        var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftworlds/" + Level.getWorldDir() + "/", "storage.dat");
        file.createNewFile();
        var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(file));
        var string = "";
        for(var i in slots) if(slots[i][0] !== undefined && slots[i][1] !== undefined && slots[i][2] !== undefined) string += slots[i][0].toString() + "~" + slots[i][1].toString() + "~" + slots[i][2].toString() + "|";
        outWrite.append(string);
        outWrite.close();
    }
    if(just) {
        saveChest();
        return;
    }
    switchback = 0;
    for(var i = 0; i < 40; i++) {
        slots[i] = [levels[i]];
        Level.setChestSlot(chestX, chestY, chestZ, i, 0, 0, 0);
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
  if(runS[0]==true){
    Entity.addEffect(Player.getEntity(), MobEffect.jump, 20, 1, false, true);
  }
}
function useItem(x, y, z, i, b, s){
  if(stxt("[start]", 1)){
    runS[0]==true;
  }
}
function stxt(text, line){
  return Level.getSignText(x, y, z, line) == text;
}
function newMsg(msg, color/*optional*/){
clientMessage(color+msg);
}
