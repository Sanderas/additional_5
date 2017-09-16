module.exports = function check(str, bracketsConfig) {
  var str1="";
  var str2="";
  var str3="";
  while (str.search(/1{2}/)!=-1 || str.search(/2{2}/)!=-1 || str.search(/3{2}/)!=-1 || str.search(/4{2}/)!=-1 || str.search(/5{2}/)!=-1 || str.search(/6{2}/)!=-1 || str.search(/7{2}/)!=-1 || str.search(/8{2}/)!=-1 || str.search(/9{2}/)!=-1 ||  str.indexOf("()")!=-1 || str.indexOf("[]")!=-1 || str.indexOf("{}")!=-1 || str.indexOf("||")!=-1 ) {
    
       str=str.replace("[]", "");
       
           str=str.replace("()", "");
       
           str=str.replace("{}", "");
       
           str=str.replace("||", "");
 
           str=str.replace(/1{2}/, ""); 
           str=str.replace(/2{2}/, "");
           str=str.replace(/3{2}/, ""); 
           str=str.replace(/4{2}/, ""); 
           str=str.replace(/5{2}/, ""); 
           str=str.replace(/6{2}/, "");
           str=str.replace(/7{2}/, "");
           str=str.replace(/8{2}/, "");
           str=str.replace(/9{2}/, "");
           
  }
    
  if (str=="") return true;
  if (str!="") {
      for (var i=0; i<bracketsConfig.length; i++) {
         for (var j=0; j<bracketsConfig[i].length; j++) {
            str1=str1+bracketsConfig[i][j];
         }   
      }
     
      while (str1.search(/1{2}/)!=-1 || str1.search(/2{2}/)!=-1 || str1.search(/3{2}/)!=-1 || str1.search(/4{2}/)!=-1 || str1.search(/5{2}/)!=-1 || str1.search(/6{2}/)!=-1 || str1.search(/7{2}/)!=-1 || str1.search(/8{2}/)!=-1 || str1.search(/9{2}/)!=-1 ||  str1.indexOf("()")!=-1 || str1.indexOf("[]")!=-1 || str1.indexOf("{}")!=-1 || str1.indexOf("||")!=-1 ) {
    
       str1=str1.replace("[]", "");
       
           str1=str1.replace("()", "");
       
           str1=str1.replace("{}", "");
       
           str1=str1.replace("||", "");
 
           str1=str1.replace(/1{2}/, ""); 
           str1=str1.replace(/2{2}/, "");
           str1=str1.replace(/3{2}/, ""); 
           str1=str1.replace(/4{2}/, ""); 
           str1=str1.replace(/5{2}/, ""); 
           str1=str1.replace(/6{2}/, "");
           str1=str1.replace(/7{2}/, "");
           str1=str1.replace(/8{2}/, "");
           str1=str1.replace(/9{2}/, "");
           
      }
      if (str1=="") return false;
      str3=str;
      if (str1!="") {
          for (var i=0; i<str.length; i++) {
              str2=str.charAt(i);
              if (str1.indexOf(str2)!=-1) {
                  str3=str3.replace(str2, "");
              }
          }
      if (str3=="") return true;
      else return false;
      }     
  }
}
