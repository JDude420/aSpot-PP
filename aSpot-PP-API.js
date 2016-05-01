//aSpot software  ||  API for PP

updatelogs = {
  aSpotPP: '0.0',
  aSpotPPTpManager: '0.0',
  aSpotPPAPI: '0.0',
  aSpotPPMap: '0.0'
};

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActitvity.get();

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
  }catch(e){ newMsg("[aSpot-API] [ERROR] Please connect to the internet to receive updates", "§4"); updatePP(); }
}

function updatePP(){
  var ru  = new java.lang.Runnable({ run: function() {
    try{
      var u = new java.net.URL("https://raw.githubusercontent.com/JDude420/aSpot-PP/master/aSpot-PP.js");
      var c = u.openConnection();
      c.setRequestMethod("GET");
      c.setDoOutput(true);
      c.connect();
      c.getContentLength();
      var input = c.getInputStream();
      var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
      var bytesRead = 0;
      while((bytesRead = input.read(contents)) != -1) {
        newScript += new java.lang.String(contents, 0, bytesRead);
      }
      var patchesFolder = ctx.getDir("modscripts", 0);
      var scriptFile = new java.io.File(patchesFolder, "aSpot-PP.js");
      var printWriter = new java.io.PrintWriter(scriptFile);
      printWriter.write(newScript);
      printWriter.flush();
			printWriter.close();
			try{
			  net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, false);
			  net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, true);
			  newMsg("[aSpot-API] [UPDATER] Update complete!", "§a");
			}catch(e){ }
			
    }catch(e){ }
}});
}


function newMsg(msg, color){
  clientMessage(color+msg)
}
