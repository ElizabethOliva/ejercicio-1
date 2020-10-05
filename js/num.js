function calcular(){
    var v1 = document.getElementById('1').value;
    v1=parseInt(v1);

    var v2 = document.getElementById('2').value;
    v2=parseInt(v2);

    var v3 = document.getElementById('3').value;
    v3=parseInt(v3);

    var v4 = document.getElementById('4').value;
    v4=parseInt(v4);

    var v5 = document.getElementById('5').value;
    v5=parseInt(v5);

   var v=[v1,v2,v3,v4,v5];
   var ma=null;

   for (var i=0; i<v.length; i++){
       if (ma<v[i]){
           ma=v[i];
       }
   }
   document.getElementById('spMA').innerHTML=ma;

   var me=20000000000000;
   for (var i=0; i<5; i++){
       if(me>v[i]) {
           me=v[i]
   }
}
document.getElementById('spME').innerHTML=me;
}
