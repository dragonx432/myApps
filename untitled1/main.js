function fun1() {
    var rtl=document.getElementById('rtl').value;
    var rtr=document.getElementById('rtr').value;
    var rbr=document.getElementById('rbr').value;
    var rbl=document.getElementById('rbl').value;
    var ttl=document.getElementById('ttl').value;
    var ttr=document.getElementById('ttr').value;
    var tbr=document.getElementById('tbr').value;
    var tbl=document.getElementById('tbl').value;

    var block = document.getElementById('block');

    ttl.text=rtl;
    ttr.text=rtr;
    tbr.text=rbr;
    tbl.text=rbl;

    block.style.borderRadius=rtl+'px ' +rtr +'px '+rbr +'px '+rbl+'px ';
}