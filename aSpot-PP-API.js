//aSpot software  ||  API for PP

updatelogs = {
  aSpotPP: '0.0',
  aSpotPPTpManager: '0.0',
  aSpotPPAPI: '0.0',
  aSpotPPMap: '0.0'
};


function updateAll(){
  
}
function updateCheckPP(){
  try{
    var out = java.io.ByteArrayOutputStream();
    var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/ISM_V0.8_update_checker.txt")).getEntity().writeTo(out);
    out.close();
    if(String(out.toString())==updatelogs.aSpotPP){
      newMsg("aSpot-PP.js is up to date. "+String(out.toString()), "§a");
    }else{ newMsg("[aSpot-API] [UPDATER] Updating aSpot-PP.js", "§e"); }
  }catch(e){ newMsg("[aSpot-API] [ERROR] Please connect to the internet to receive updates", "§4"); }
}

function updateCheckPPTpManager(){
  try{
    var out = java.io.ByteArrayOutputStream();
    var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/ISM_V0.8_update_checker.txt")).getEntity().writeTo(out);
    out.close();
    if(String(out.toString())==updatelogs.aSpotPPTpManager){
      newMsg("aSpot-PP-TpManager.js is up to date. "+String(out.toString()),"§a");
    }else{ newMsg("[aSpot-API] [UPDATER] Updating aSpot-PP-TpManager.js", "§e"); }
  }catch(e){ newMsg("[aSpot-API] [ERROR] Please connect to the internet to receive updates", "§4"); }
}

function updateCheckPPAPI(){
  try{
    var out = java.io.ByteArrayOutputStream();
    var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/ISM_V0.8_update_checker.txt")).getEntity().writeTo(out);
    out.close();
    if(String(out.toString())==updateLogs.aSpotPPAPI){
      newMsg("aSpot-PP-API.js is up to date. "+String(out.toString()), "§a");
    }else{ newMsg("[aSpot-API] [UPDATER] Updating aSpot-PP-API.js", "§e"); }
  }catch(e){ newMsg("[aSpot-API] [ERROR] Please connect to the internet to receive updates", "§4"); }
}


function newMsg(msg, color){
  clientMessage(color+msg)
}
