/**
 * Created by Marco on 18/03/2018.
 */

var actualYear=2014;

function trovaSostituto(inner,pos){
    var lengthSostituto=0;
    for(i=pos;inner[i]!='\"';i++){
        lengthSostituto++;
    }
    return inner.substr(pos,lengthSostituto);
}

function replaceWithId(inner,posDaSostituire,posSostituto){
    var sostituto=trovaSostituto(inner,posSostituto);
    inner=inner.substr(0,posDaSostituire)+document.getElementById(sostituto).value+inner.substr(posDaSostituire+1,inner.length-(posDaSostituire+1));
    return inner;
}

function setInner(inner){
	var i;
	for(i=0;i<inner.length-(4);i++){
	    if(inner.substr(i,5)=="value"){
	        //console.log("Ho trovato un value, mi trovo a posizione ");
	        //console.log(i);
	        //console.log("Carattere");
	        //console.log(inner[i]);
	        i+=7; //sposto il contatore sullo 0 - OD - Old comment
            //console.log("Ora guardo il valore dopo lo spostamento, should 0");
            //console.log(i);
            //console.log(inner[i]);
            //console.log("I+7, valore e valore associato.");
            //console.log(i+7);
            //console.log(inner[i+7]);
            inner=replaceWithId(inner,i,i+7);
        }
    }
    return inner;
}

function aggiungiColonna(){
    var i;
    actualYear--;
    var temp; //cambiarci nome asap

    //Descrizione - FUNZIONA
    temp=document.getElementById('descrizione').innerHTML;
    temp=setInner(temp);
    document.getElementById('descrizione').innerHTML=temp+"<th>"+actualYear+"</th>";

    //PA
    temp=document.getElementById('PA').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA-"+actualYear+"\"> </td>";

    //PA.A
    temp=document.getElementById('PA.A').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.A').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.A-"+actualYear+"\" onkeyup=\"calculatePA("+actualYear+")\"> </td>";

    //PA.A1
    temp=document.getElementById('PA.A1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.A1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.A1-"+actualYear+"\" onkeyup=\"calculatePAA("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.A2
    temp=document.getElementById('PA.A2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.A2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.A2-"+actualYear+"\" onkeyup=\"calculatePAA("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B
    temp=document.getElementById('PA.B').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B-"+actualYear+"\" onkeyup=\"calculatePA("+actualYear+")\"> </td>";

    //PA.B1
    temp=document.getElementById('PA.B1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B1-"+actualYear+"\" onkeyup=\"calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B11
    temp=document.getElementById('PA.B11').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B11').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B11-"+actualYear+"\" onkeyup=\"calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B11a
    temp=document.getElementById('PA.B11a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B11a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B11a-"+actualYear+"\" onkeyup=\"calculatePAB11("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B11b
    temp=document.getElementById('PA.B11b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B11b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B11b-"+actualYear+"\" onkeyup=\"calculatePAB11("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B11c
    temp=document.getElementById('PA.B11c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B11c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B11c-"+actualYear+"\" onkeyup=\"calculatePAB11("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B12
    temp=document.getElementById('PA.B12').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B12').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B12-"+actualYear+"\" onkeyup=\"calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B12a
    temp=document.getElementById('PA.B12a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B12a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B12a-"+actualYear+"\" onkeyup=\"calculatePAB12("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B12b
    temp=document.getElementById('PA.B12b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B12b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B12b-"+actualYear+"\" onkeyup=\"calculatePAB12("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B12c
    temp=document.getElementById('PA.B12c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B12c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B12c-"+actualYear+"\" onkeyup=\"calculatePAB12("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B13
    temp=document.getElementById('PA.B13').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B13').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B13-"+actualYear+"\" onkeyup=\"calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B13a
    temp=document.getElementById('PA.B13a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B13a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B13a-"+actualYear+"\" onkeyup=\"calculatePAB13("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B13b
    temp=document.getElementById('PA.B13b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B13b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B13b-"+actualYear+"\" onkeyup=\"calculatePAB13("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B13c
    temp=document.getElementById('PA.B13c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B13c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B13c-"+actualYear+"\" onkeyup=\"calculatePAB13("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B14
    temp=document.getElementById('PA.B14').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B14').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B14-"+actualYear+"\" onkeyup=\"calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B14a
    temp=document.getElementById('PA.B14a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B14a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B14a-"+actualYear+"\" onkeyup=\"calculatePAB14("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B14b
    temp=document.getElementById('PA.B14b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B14b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B14b-"+actualYear+"\" onkeyup=\"calculatePAB14("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B14c
    temp=document.getElementById('PA.B14c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B14c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B14c-"+actualYear+"\" onkeyup=\"calculatePAB14("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B18
    temp=document.getElementById('PA.B18').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B18').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B18-"+actualYear+"\" onkeyup=\"calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B15
    temp=document.getElementById('PA.B15').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B15').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B15-"+actualYear+"\" onkeyup=\"calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B15a
    temp=document.getElementById('PA.B15a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B15a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B15a-"+actualYear+"\" onkeyup=\"calculatePAB15("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B15b
    temp=document.getElementById('PA.B15b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B15b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B15b-"+actualYear+"\" onkeyup=\"calculatePAB15("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B15c
    temp=document.getElementById('PA.B15c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B15c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B15c-"+actualYear+"\" onkeyup=\"calculatePAB15("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B16
    temp=document.getElementById('PA.B16').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B16').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B16-"+actualYear+"\" onkeyup=\"calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B17
    temp=document.getElementById('PA.B17').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B17').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B17-"+actualYear+"\" onkeyup=\"calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B17a
    temp=document.getElementById('PA.B17a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B17a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B17a-"+actualYear+"\" onkeyup=\"calculatePAB17("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B17b
    temp=document.getElementById('PA.B17b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B17b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B17b-"+actualYear+"\" onkeyup=\"calculatePAB17("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //PA.B17c
    temp=document.getElementById('PA.B17c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B17c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B17c-"+actualYear+"\" onkeyup=\"calculatePAB17("+actualYear+"),calculatePAB1("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B2-"+actualYear+"\" onkeyup=\"calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B21').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B21').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B21-"+actualYear+"\" onkeyup=\"calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B21a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B21a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B21a-"+actualYear+"\" onkeyup=\"calculatePAB21("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B21b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B21b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B21b-"+actualYear+"\" onkeyup=\"calculatePAB21("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B21c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B21c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B21c-"+actualYear+"\" onkeyup=\"calculatePAB21("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B22').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B22').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B22-"+actualYear+"\" onkeyup=\"calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B22a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B22a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B22a-"+actualYear+"\" onkeyup=\"calculatePAB22("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B22b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B22b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B22b-"+actualYear+"\" onkeyup=\"calculatePAB22("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B22c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B22c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B22c-"+actualYear+"\" onkeyup=\"calculatePAB22("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B23').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B23').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B23-"+actualYear+"\" onkeyup=\"calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B23a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B23a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B23a-"+actualYear+"\" onkeyup=\"calculatePAB23("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B23b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B23b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B23b-"+actualYear+"\" onkeyup=\"calculatePAB23("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B23c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B23c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B23c-"+actualYear+"\" onkeyup=\"calculatePAB23("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B24').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B24').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B24-"+actualYear+"\" onkeyup=\"calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B24a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B24a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B24a-"+actualYear+"\" onkeyup=\"calculatePAB24("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B24b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B24b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B24b-"+actualYear+"\" onkeyup=\"calculatePAB24("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B24c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B24c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B24c-"+actualYear+"\" onkeyup=\"calculatePAB24("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B25').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B25').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B25-"+actualYear+"\" onkeyup=\"calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B26').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B26').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B26-"+actualYear+"\" onkeyup=\"calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B26a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B26a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B26a-"+actualYear+"\" onkeyup=\"calculatePAB26("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B26b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B26b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B26b-"+actualYear+"\" onkeyup=\"calculatePAB26("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B26c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B26c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B26c-"+actualYear+"\" onkeyup=\"calculatePAB26("+actualYear+"),calculatePAB2("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B3').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B3').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B3-"+actualYear+"\" onkeyup=\"calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B31').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B31').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B31-"+actualYear+"\" onkeyup=\"calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B31a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B31a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B31a-"+actualYear+"\" onkeyup=\"calculatePAB31("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B31b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B31b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B31b-"+actualYear+"\" onkeyup=\"calculatePAB31("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B31c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B31c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B31c-"+actualYear+"\" onkeyup=\"calculatePAB31("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B31d').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B31d').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B31d-"+actualYear+"\" onkeyup=\"calculatePAB31("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32-"+actualYear+"\" onkeyup=\"calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32a-"+actualYear+"\" onkeyup=\"calculatePAB32("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32a1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32a1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32a1-"+actualYear+"\" onkeyup=\"calculatePAB32a("+actualYear+"),calculatePAB32("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32a2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32a2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32a2-"+actualYear+"\" onkeyup=\"calculatePAB32a("+actualYear+"),calculatePAB32("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32b-"+actualYear+"\" onkeyup=\"calculatePAB32("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32b1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32b1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32b1-"+actualYear+"\" onkeyup=\"calculatePAB32b("+actualYear+"),calculatePAB32("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32b2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32b2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32b2-"+actualYear+"\" onkeyup=\"calculatePAB32b("+actualYear+"),calculatePAB32("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32c').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32c').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32c-"+actualYear+"\" onkeyup=\"calculatePAB32("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32c1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32c1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32c1-"+actualYear+"\" onkeyup=\"calculatePAB32c("+actualYear+"),calculatePAB32("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32c2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32c2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32c2-"+actualYear+"\" onkeyup=\"calculatePAB32c("+actualYear+"),calculatePAB32("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32d').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32d').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32d-"+actualYear+"\" onkeyup=\"calculatePAB32("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32d1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32d1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32d1-"+actualYear+"\" onkeyup=\"calculatePAB32d("+actualYear+"),calculatePAB32("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B32d2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B32d2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B32d2-"+actualYear+"\" onkeyup=\"calculatePAB32d("+actualYear+"),calculatePAB32("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B33').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B33').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B33-"+actualYear+"\" onkeyup=\"calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B34').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B34').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B34-"+actualYear+"\" onkeyup=\"calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B34a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B34a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B34a-"+actualYear+"\" onkeyup=\"calculatePAB34("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.B34b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.B34b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.B34b-"+actualYear+"\" onkeyup=\"calculatePAB34("+actualYear+"),calculatePAB3("+actualYear+"),calculatePAB("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C-"+actualYear+"\" onkeyup=\"calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C1-"+actualYear+"\" onkeyup=\"calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C11').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C11').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C11-"+actualYear+"\" onkeyup=\"calculatePAC1("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C12').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C12').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C12-"+actualYear+"\" onkeyup=\"calculatePAC1("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C13').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C13').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C13-"+actualYear+"\" onkeyup=\"calculatePAC1("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C14').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C14').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C14-"+actualYear+"\" onkeyup=\"calculatePAC1("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C15').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C15').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C15-"+actualYear+"\" onkeyup=\"calculatePAC1("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C2-"+actualYear+"\" onkeyup=\"calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C21').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C21').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C21-"+actualYear+"\" onkeyup=\"calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C21a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C21a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C21a-"+actualYear+"\" onkeyup=\"calculatePAC21("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C21b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C21b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C21b-"+actualYear+"\" onkeyup=\"calculatePAC21("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C22').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C22').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C22-"+actualYear+"\" onkeyup=\"calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C22a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C22a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C22a-"+actualYear+"\" onkeyup=\"calculatePAC22("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C22b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C22b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C22b-"+actualYear+"\" onkeyup=\"calculatePAC22("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C23').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C23').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C23-"+actualYear+"\" onkeyup=\"calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C23a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C23a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C23a-"+actualYear+"\" onkeyup=\"calculatePAC23("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C23b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C23b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C23b-"+actualYear+"\" onkeyup=\"calculatePAC23("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C24').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C24').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C24-"+actualYear+"\" onkeyup=\"calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C24a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C24a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C24a-"+actualYear+"\" onkeyup=\"calculatePAC24("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C24b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C24b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C24b-"+actualYear+"\" onkeyup=\"calculatePAC24("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C2B').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C2B').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C2B-"+actualYear+"\" onkeyup=\"calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C2Ba').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C2Ba').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C2Ba-"+actualYear+"\" onkeyup=\"calculatePAC2B("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C2Bb').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C2Bb').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C2Bb-"+actualYear+"\" onkeyup=\"calculatePAC2B("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C2T').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C2T').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C2T-"+actualYear+"\" onkeyup=\"calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C2Ta').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C2Ta').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C2Ta-"+actualYear+"\" onkeyup=\"calculatePAC2T("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C2Tb').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C2Tb').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C2Tb-"+actualYear+"\" onkeyup=\"calculatePAC2T("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C25').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C25').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C25-"+actualYear+"\" onkeyup=\"calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C25a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C25a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C25a-"+actualYear+"\" onkeyup=\"calculatePAC25("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    temp=document.getElementById('PA.C25b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C25b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C25b-"+actualYear+"\" onkeyup=\"calculatePAC25("+actualYear+"),calculatePAC2("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"> </td>";

    //lavoro di daniele: da riga 111 a riga 187
//PA.C3
    temp=document.getElementById('PA.C3').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C3').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C3-"+actualYear+"\" onkeyup=\"calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.C31
    temp=document.getElementById('PA.C31').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C31').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C31-"+actualYear+"\" onkeyup=\"calculatePAC3("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.C32
    temp=document.getElementById('PA.C32').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C32').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C32-"+actualYear+"\" onkeyup=\"calculatePAC3("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.C33
    temp=document.getElementById('PA.C33').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C33').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C33-"+actualYear+"\" onkeyup=\"calculatePAC3("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.C34
    temp=document.getElementById('PA.C34').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C34').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C34-"+actualYear+"\" onkeyup=\"calculatePAC3("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.C35
    temp=document.getElementById('PA.C35').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C35').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C35-"+actualYear+"\" onkeyup=\"calculatePAC3("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.C35a
    temp=document.getElementById('PA.C35a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C35a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C35a-"+actualYear+"\" onkeyup=\"calculatePAC35("+actualYear+"),calculatePAC3("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.C35b
    temp=document.getElementById('PA.C35b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C35b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C35b-"+actualYear+"\" onkeyup=\"calculatePAC35("+actualYear+"),calculatePAC3("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.C36
    temp=document.getElementById('PA.C36').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C36').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C36-"+actualYear+"\" onkeyup=\"calculatePAC3("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.C4
    temp=document.getElementById('PA.C4').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C4').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C4-"+actualYear+"\" onkeyup=\"calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.C41
    temp=document.getElementById('PA.C41').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C41').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C41-"+actualYear+"\" onkeyup=\"calculatePAC4("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.C42
    temp=document.getElementById('PA.C42').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C42').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C42-"+actualYear+"\" onkeyup=\"calculatePAC4("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.C43
    temp=document.getElementById('PA.C43').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.C43').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.C43-"+actualYear+"\" onkeyup=\"calculatePAC4("+actualYear+"),calculatePAC("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.D
    temp=document.getElementById('PA.D').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.D').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.D-"+actualYear+"\" onkeyup=\"calculatePA("+actualYear+")\"></td>";
//PA.D1
    temp=document.getElementById('PA.D1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.D1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.D1-"+actualYear+"\" onkeyup=\"calculatePAD("+actualYear+"),calculatePA("+actualYear+")\"></td>";
//PA.D2
    temp=document.getElementById('PA.D2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PA.D2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PA.D2-"+actualYear+"\" onkeyup=\"calculatePAD("+actualYear+"),calculatePA("+actualYear+")\"></td>";
    //PP
    temp=document.getElementById('PP').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A-"+actualYear+"\"></td>";
//PP.A
    temp=document.getElementById('PP.A').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A-"+actualYear+"\" onkeyup=\"calculatePP("+actualYear+")\"></td>";
//PP.A1
    temp=document.getElementById('PP.A1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A1-"+actualYear+"\" onkeyup=\"calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A2
    temp=document.getElementById('PP.A2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A2-"+actualYear+"\" onkeyup=\"calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A3
    temp=document.getElementById('PP.A3').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A3').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A3-"+actualYear+"\" onkeyup=\"calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A4
    temp=document.getElementById('PP.A4').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A4').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A4-"+actualYear+"\" onkeyup=\"calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A5
    temp=document.getElementById('PP.A5').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A5').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A5-"+actualYear+"\" onkeyup=\"calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A6
    temp=document.getElementById('PP.A6').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A6').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A6-"+actualYear+"\" onkeyup=\"calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7
    temp=document.getElementById('PP.A7').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7-"+actualYear+"\" onkeyup=\"calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7a
    temp=document.getElementById('PP.A7a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7a-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7n
    temp=document.getElementById('PP.A7n').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7n').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7n-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7o
    temp=document.getElementById('PP.A7o').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7o').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7o-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7p
    temp=document.getElementById('PP.A7p').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7p').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7p-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7q
    temp=document.getElementById('PP.A7q').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7q').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7q-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7r
    temp=document.getElementById('PP.A7r').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7r').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7r-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7s
    temp=document.getElementById('PP.A7s').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7s').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7s-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7b
    temp=document.getElementById('PP.A7b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7b-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7t
    temp=document.getElementById('PP.A7t').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7t').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7t-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7u
    temp=document.getElementById('PP.A7u').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7u').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7u-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7v
    temp=document.getElementById('PP.A7v').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7v').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7v-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7w
    temp=document.getElementById('PP.A7w').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7w').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7w-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7j
    temp=document.getElementById('PP.A7j').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7j').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7j-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7j1
    temp=document.getElementById('PP.A7j1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7j1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7j1-"+actualYear+"\" onkeyup=\"calculatePPA7j("+actualYear+"),calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7j2
    temp=document.getElementById('PP.A7j2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7j2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7j2-"+actualYear+"\" onkeyup=\"calculatePPA7j("+actualYear+"),calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7l
    temp=document.getElementById('PP.A7l').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7l').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7l-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A7m
    temp=document.getElementById('PP.A7m').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A7m').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A7m-"+actualYear+"\" onkeyup=\"calculatePPA7("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A8
    temp=document.getElementById('PP.A8').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A8').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A8-"+actualYear+"\" onkeyup=\"calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A9
    temp=document.getElementById('PP.A9').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A9').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A9-"+actualYear+"\" onkeyup=\"calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A9a
    temp=document.getElementById('PP.A9a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A9a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A9a-"+actualYear+"\" onkeyup=\"calculatePPA9("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.A9b
    temp=document.getElementById('PP.A9b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.A9b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.A9b-"+actualYear+"\" onkeyup=\"calculatePPA9("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.AA
    temp=document.getElementById('PP.AA').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.AA').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.AA-"+actualYear+"\" onkeyup=\"calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.AA1
    temp=document.getElementById('PP.AA1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.AA1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.AA1-"+actualYear+"\" onkeyup=\"calculatePPAA("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.AA2
    temp=document.getElementById('PP.AA2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.AA2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.AA2-"+actualYear+"\" onkeyup=\"calculatePPAA("+actualYear+"),calculatePPA("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.B
    temp=document.getElementById('PP.B').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.B').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.B-"+actualYear+"\" onkeyup=\"calculatePP("+actualYear+")\"></td>";
//PP.B1
    temp=document.getElementById('PP.B1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.B1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.B1-"+actualYear+"\" onkeyup=\"calculatePPB("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.B2
    temp=document.getElementById('PP.B2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.B2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.B2-"+actualYear+"\" onkeyup=\"calculatePPB("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.B3
    temp=document.getElementById('PP.B3').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.B3').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.B3-"+actualYear+"\" onkeyup=\"calculatePPB("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.B4
    temp=document.getElementById('PP.B4').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.B4').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.B4-"+actualYear+"\" onkeyup=\"calculatePPB("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.C
    temp=document.getElementById('PP.C').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.C').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.C-"+actualYear+"\" onkeyup=\"calculatePP("+actualYear+")\"></td>";
//PP.D
    temp=document.getElementById('PP.D').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D-"+actualYear+"\" onkeyup=\"calculatePP("+actualYear+")\"></td>";
//PP.D1
    temp=document.getElementById('PP.D1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D1-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D1a
    temp=document.getElementById('PP.D1a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D1a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D1a-"+actualYear+"\" onkeyup=\"calculatePPD1("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D1b
    temp=document.getElementById('PP.D1b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D1b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D1b-"+actualYear+"\" onkeyup=\"calculatePPD1("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D2
    temp=document.getElementById('PP.D2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D2-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D2a
    temp=document.getElementById('PP.D2a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D2a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D2a-"+actualYear+"\" onkeyup=\"calculatePPD2("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D2b
    temp=document.getElementById('PP.D2b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D2b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D2b-"+actualYear+"\" onkeyup=\"calculatePPD2("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D3
    temp=document.getElementById('PP.D3').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D3').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D3-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D3a
    temp=document.getElementById('PP.D3a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D3a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D3a-"+actualYear+"\" onkeyup=\"calculatePPD3("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D3b
    temp=document.getElementById('PP.D3b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D3b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D3b-"+actualYear+"\" onkeyup=\"calculatePPD3("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D4
    temp=document.getElementById('PP.D4').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D4').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D4-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D4a
    temp=document.getElementById('PP.D4a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D4a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D4a-"+actualYear+"\" onkeyup=\"calculatePPD4("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D4b
    temp=document.getElementById('PP.D4b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D4b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D4b-"+actualYear+"\" onkeyup=\"calculatePPD4("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D5
    temp=document.getElementById('PP.D5').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D5').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D5-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D5a
    temp=document.getElementById('PP.D5a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D5a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D5a-"+actualYear+"\" onkeyup=\"calculatePPD5("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D5b
    temp=document.getElementById('PP.D5b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D5b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D5b-"+actualYear+"\" onkeyup=\"calculatePPD5("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D6
    temp=document.getElementById('PP.D6').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D6').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D6-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D6a
    temp=document.getElementById('PP.D6a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D6a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D6a-"+actualYear+"\" onkeyup=\"calculatePPD6("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D6b
    temp=document.getElementById('PP.D6b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D6b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D6b-"+actualYear+"\" onkeyup=\"calculatePPD6("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D7
    temp=document.getElementById('PP.D7').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D7').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D7-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D7a
    temp=document.getElementById('PP.D7a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D7a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D7a-"+actualYear+"\" onkeyup=\"calculatePPD7("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";
//PP.D7b
    temp=document.getElementById('PP.D7b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D7b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D7b-"+actualYear+"\" onkeyup=\"calculatePPD7("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"></td>";

    //lavoro angelo:da riga 188 a 262 (Controllare il nome delle funzioni che calcolano E=E,E=B,E=F dalla riga 258)

//riga 191
    temp=document.getElementById('PP.D8').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D8').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D8-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 192
    temp=document.getElementById('PP.D8a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D8a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D8a-"+actualYear+"\" onkeyup=\"calculatePPD8("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 193
    temp=document.getElementById('PP.D8b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D8b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D8b-"+actualYear+"\" onkeyup=\"calculatePPD8("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

//riga 194
    temp=document.getElementById('PP.D9').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D9').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D9-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 195
    temp=document.getElementById('PP.D9a').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D9a').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D9a-"+actualYear+"\" onkeyup=\"calculatePPD9("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 196
    temp=document.getElementById('PP.D9b').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.D9b').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.D9b-"+actualYear+"\" onkeyup=\"calculatePPD9("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

//riga 197
    temp=document.getElementById('PP.DA').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.DA').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.DA-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 198
    temp=document.getElementById('PP.DAa').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.DAa').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.DAa-"+actualYear+"\" onkeyup=\"calculatePPDA("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 199
    temp=document.getElementById('PP.DAb').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.DAb').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.DAb-"+actualYear+"\" onkeyup=\"calculatePPDA("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

//riga 200
    temp=document.getElementById('PP.DB').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.DB').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.DB-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 201
    temp=document.getElementById('PP.DBa').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.DBa').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.DBa-"+actualYear+"\" onkeyup=\"calculatePPDB("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 202
    temp=document.getElementById('PP.DBb').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.DBb').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.DBb-"+actualYear+"\" onkeyup=\"calculatePPDB("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

//riga 203
    temp=document.getElementById('PP.DC').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.DC').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.DC-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 204
    temp=document.getElementById('PP.DCa').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.DCa').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.DCa-"+actualYear+"\" onkeyup=\"calculatePPDC("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 205
    temp=document.getElementById('PP.DCb').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.DCb').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.DCb-"+actualYear+"\" onkeyup=\"calculatePPDC("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

//riga 206
    temp=document.getElementById('PP.DD').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.DD').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.DD-"+actualYear+"\" onkeyup=\"calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 207
    temp=document.getElementById('PP.DDa').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.DDa').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.DDa-"+actualYear+"\" onkeyup=\"calculatePPDD("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 208
    temp=document.getElementById('PP.DDb').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.DDb').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.DDb-"+actualYear+"\" onkeyup=\"calculatePPDD("+actualYear+"),calculatePPD("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

//riga 209
    temp=document.getElementById('PP.E').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.E').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.E-"+actualYear+"\" onkeyup=\"calculatePP("+actualYear+")\"> </td>";

    //riga 210
    temp=document.getElementById('PP.E1').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.E1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.E1-"+actualYear+"\" onkeyup=\"calculatePPE("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

    //riga 211
    temp=document.getElementById('PP.E2').innerHTML;
    temp=setInner(temp);
    document.getElementById('PP.E2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"PP.E2-"+actualYear+"\" onkeyup=\"calculatePPE("+actualYear+"),calculatePP("+actualYear+")\"> </td>";

//riga 248 CONTO ECONOMICO(da controllare)
    temp=document.getElementById('E').innerHTML;
    temp=setInner(temp);
    document.getElementById('E').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E-"+actualYear+"\" </td>";

    //riga 249
    temp=document.getElementById('E.A').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.A').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.A-"+actualYear+"\" onkeyup=\"calculateML("+actualYear+"),calculateE("+actualYear+")\"> </td>";

    //riga 250
    temp=document.getElementById('E.A1').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.A1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.A1-"+actualYear+"\" onkeyup=\"calculateEA("+actualYear+"),calculateE("+actualYear+")\"> </td>";

    //riga 251
    temp=document.getElementById('E.A2').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.A2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.A2-"+actualYear+"\" onkeyup=\"calculateEA("+actualYear+"),calculateE("+actualYear+")\"> </td>";

    //riga 252
    temp=document.getElementById('E.A3').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.A3').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.A3-"+actualYear+"\" onkeyup=\"calculateEA("+actualYear+"),calculateE("+actualYear+")\"> </td>";

    //riga 253
    temp=document.getElementById('E.A4').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.A4').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.A4-"+actualYear+"\" onkeyup=\"calculateEA("+actualYear+"),calculateE("+actualYear+")\"> </td>";

    //riga 254
    temp=document.getElementById('E.A5').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.A5').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.A5-"+actualYear+"\" onkeyup=\"calculateEA("+actualYear+"),calculateE("+actualYear+")\"> </td>";

    //riga 255
    temp=document.getElementById('E.A51').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.A51').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.A51-"+actualYear+"\" onkeyup=\"calculateEA5("+actualYear+"),calculateEA("+actualYear+"),calculateE("+actualYear+")\"> </td>";

    //riga 256
    temp=document.getElementById('E.A52').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.A52').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.A52-"+actualYear+"\" onkeyup=\"calculateEA5("+actualYear+"),calculateEA("+actualYear+"),calculateE("+actualYear+")\"> </td>";

    //riga 257
    temp=document.getElementById('E.B').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.B-"+actualYear+"\" onkeyup=\"calculateE("+actualYear+")\"> </td>";

    //riga 258
    temp=document.getElementById('E.B1').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B1').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.B1-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateML("+actualYear+"),calculateEBITDA("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE("+actualYear+")\"> </td>";

    //riga 259
    temp=document.getElementById('ML').innerHTML;
    temp=setInner(temp);
    document.getElementById('ML').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"ML-"+actualYear+"\" onkeyup=\"calculateEBITDA("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE("+actualYear+")\"> </td>";

    //riga 260
    temp=document.getElementById('E.B2').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B2').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.B2-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateML("+actualYear+"),calculateEBITDA("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE("+actualYear+")\"> </td>";

    //riga 261
    temp=document.getElementById('E.B3').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B3').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.B3-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateML("+actualYear+"),calculateEBITDA("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE("+actualYear+")\"> </td>";

    //E.B4
    temp=document.getElementById('E.B4').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B4').innerHTML=temp+"<td><input type=\"text\" value=\"0\" id=\"E.B4-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateEBITDA("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B41
    temp=document.getElementById('E.B41').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B41').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B41-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateEB4("+actualYear+"),calculateEBITDA("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B42
    temp=document.getElementById('E.B42').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B42').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B42-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateEB4("+actualYear+"),calculateEBITDA("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B43
    temp=document.getElementById('E.B43').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B43').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B43-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateEB4("+actualYear+"),calculateEBITDA("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B44
    temp=document.getElementById('E.B44').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B44').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B44-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateEB4("+actualYear+"),calculateEBITDA("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B45
    temp=document.getElementById('E.B45').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B45').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B45-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateEB4("+actualYear+"),calculateEBITDA("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//EBITIDA


    //E.B5
    temp=document.getElementById('E.B5').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B5').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B5-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B51
    temp=document.getElementById('E.B51').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B51').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B51-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateEB5("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B52
    temp=document.getElementById('E.B52').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B52').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B52-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateEB5("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B53
    temp=document.getElementById('E.B53').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B53').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B53-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateEB5("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B54
    temp=document.getElementById('E.B54').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B54').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B54-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateEB5("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B6
    temp=document.getElementById('E.B6').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B6').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B6-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B7
    temp=document.getElementById('E.B7').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B7').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B7-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B8
    temp=document.getElementById('E.B8').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B8').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B8-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.B9
    temp=document.getElementById('E.B9').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.B9').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.B9-"+actualYear+"\" onkeyup=\"calculateEB("+actualYear+"),calculateE=B("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C1
    temp=document.getElementById('E.C1').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C1').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C1-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C11
    temp=document.getElementById('E.C11').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C11').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C11-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC1("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C12
    temp=document.getElementById('E.C12').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C12').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C12-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC1("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C13
    temp=document.getElementById('E.C13').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C13').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C13-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC1("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C2
    temp=document.getElementById('E.C2').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C2').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C2-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C21
    temp=document.getElementById('E.C21').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C21').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C21-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC2("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C211
    temp=document.getElementById('E.C211').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C211').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C211-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC2("+actualYear+"),calculateEC21("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C212
    temp=document.getElementById('E.C212').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C212').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C212-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC2("+actualYear+"),calculateEC21("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>"
//E.C213
    temp=document.getElementById('E.C213').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C213').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C213-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC2("+actualYear+"),calculateEC21("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C215
    temp=document.getElementById('E.C215').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C215').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C215-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC2("+actualYear+"),calculateEC21("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C22
    temp=document.getElementById('E.C22').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C22').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C22-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC2("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C23
    temp=document.getElementById('E.C23').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C23').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C23-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC2("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C24
    temp=document.getElementById('E.C24').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C24').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C24-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC2("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C241
    temp=document.getElementById('E.C241').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C241').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C241-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC2("+actualYear+"),calculateEC24("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C245
    temp=document.getElementById('E.C245').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C245').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C241-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC2("+actualYear+"),calculateEC24("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C242
    temp=document.getElementById('E.C242').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C242').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C242-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC2("+actualYear+"),calculateEC24("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C244
    temp=document.getElementById('E.C244').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C244').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C244-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC2("+actualYear+"),calculateEC24("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C3
    temp=document.getElementById('E.C3').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C3').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C3-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C31
    temp=document.getElementById('E.C31').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C31').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C31-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC3("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C32
    temp=document.getElementById('E.C32').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C32').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C32-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC3("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C33
    temp=document.getElementById('E.C33').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C33').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C33-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC3("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C35
    temp=document.getElementById('E.C35').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C35').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C35-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateEC3("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C4
    temp=document.getElementById('E.C4').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C4').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C4-"+actualYear+"\" onkeyup=\"calculateEC("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D1
    temp=document.getElementById('E.D1').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D1').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D1-"+actualYear+"\" onkeyup=\"calculateED("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D11
    temp=document.getElementById('E.D11').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D11').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D11-"+actualYear+"\" onkeyup=\"calculateED("+actualYear+"),calculateED1("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D111
    temp=document.getElementById('E.D111').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D111').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D111-"+actualYear+"\" onkeyup=\"calculateED("+actualYear+"),calculateED1("+actualYear+"),calculateED11("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D112
    temp=document.getElementById('E.D112').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D112').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D112-"+actualYear+"\" onkeyup=\"calculateED("+actualYear+"),calculateED1("+actualYear+"),calculateED11("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D12
    temp=document.getElementById('E.D12').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D12').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D12-"+actualYear+"\" onkeyup=\"calculateED("+actualYear+"),calculateED1("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D13
    temp=document.getElementById('E.D13').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D13').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D13-"+actualYear+"\" onkeyup=\"calculateED("+actualYear+"),calculateED1("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D2
    temp=document.getElementById('E.D2').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D2').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D2-"+actualYear+"\" onkeyup=\"calculateED("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D21
    temp=document.getElementById('E.D21').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D21').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D21-"+actualYear+"\" onkeyup=\"calculateED("+actualYear+"),calculateED2("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D211
    temp=document.getElementById('E.D211').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D211').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D211-"+actualYear+"\" onkeyup=\"calculateED("+actualYear+"),calculateED2("+actualYear+"),calculateED21("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D212
    temp=document.getElementById('E.D212').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D212').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D212-"+actualYear+"\" onkeyup=\"calculateED("+actualYear+"),calculateED2("+actualYear+"),calculateED21("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D22
    temp=document.getElementById('E.D22').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D22').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D22-"+actualYear+"\" onkeyup=\"calculateED("+actualYear+"),calculateED2("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D23
    temp=document.getElementById('E.D23').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D23').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D23-"+actualYear+"\" onkeyup=\"calculateED("+actualYear+"),calculateED2("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.E1
    temp=document.getElementById('E.E1').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.E1').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.E1-"+actualYear+"\" onkeyup=\"calculateEE("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.E11
    temp=document.getElementById('E.E11').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.E11').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.E11-"+actualYear+"\" onkeyup=\"calculateEE("+actualYear+"),calculateEE1("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.E12
    temp=document.getElementById('E.E12').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.E12').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.E12-"+actualYear+"\" onkeyup=\"calculateEE("+actualYear+"),calculateEE1("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.E121
    temp=document.getElementById('E.E121').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.E121').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.E111-"+actualYear+"\" onkeyup=\"calculateEE("+actualYear+"),calculateEE1("+actualYear+"),calculateEE12("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.E122
    temp=document.getElementById('E.E122').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.E122').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.E122-"+actualYear+"\" onkeyup=\"calculateEE("+actualYear+"),calculateEE1("+actualYear+"),calculateEE12("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.E2
    temp=document.getElementById('E.E2').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.E2').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.E2-"+actualYear+"\" onkeyup=\"calculateEE("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.E21
    temp=document.getElementById('E.E21').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.E21').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.E21-"+actualYear+"\" onkeyup=\"calculateEE("+actualYear+"),calculateEE2("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.E22
    temp=document.getElementById('E.E22').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.E22').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.E22-"+actualYear+"\" onkeyup=\"calculateEE("+actualYear+"),calculateEE2("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.E23
    temp=document.getElementById('E.E23').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.E23').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.E23-"+actualYear+"\" onkeyup=\"calculateEE("+actualYear+"),calculateEE2("+actualYear+"),calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E=B
//    temp=document.getElementById('E=B').innerHTML;
//    temp=setInner(temp);
//    document.getElementById('E=B').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E=B-"+actualYear+"\" onkeyup=\"calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.C
    temp=document.getElementById('E.C').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.C').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.C-"+actualYear+"\" onkeyup=\"calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.D
    temp=document.getElementById('E.D').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.D').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.D-"+actualYear+"\" onkeyup=\"calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.E
    temp=document.getElementById('E.E').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.E').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.E-"+actualYear+"\" onkeyup=\"calculateE=E("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
    //E.F1
    temp=document.getElementById('E.F1').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.F1').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.F1-"+actualYear+"\" onkeyup=\"calculateEF("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.F2
    temp=document.getElementById('E.F2').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.F2').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.F2-"+actualYear+"\" onkeyup=\"calculateEF("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.F3
    temp=document.getElementById('E.F3').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.F3').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.F3-"+actualYear+"\" onkeyup=\"calculateEF("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.F4
    temp=document.getElementById('E.F4').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.F4').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.F4-"+actualYear+"\" onkeyup=\"calculateEF("+actualYear+"),calculateE=F("+actualYear+"),calculateE=H("+actualYear+")\"> </td>";
//E.G
    temp=document.getElementById('E.G').innerHTML;
    temp=setInner(temp);
    document.getElementById('E.G').innerHTML=temp+"<td> <input type=\"text\" value=\"0\" id=\"E.G-"+actualYear+"\" onkeyup=\"calculateE=H("+actualYear+")\"> </td>";
}

function calculatePA(anno){
    var PAAString=document.getElementById('PA.A-'+anno).value;
    var PABString=document.getElementById('PA.B-'+anno).value;
    var PACString=document.getElementById('PA.C-'+anno).value;
    var PADString=document.getElementById('PA.D-'+anno).value;
    var PAA=parseFloat(PAAString);
    var PAB=parseFloat(PABString);
    var PAC=parseFloat(PACString);
    var PAD=parseFloat(PADString);
    if(isNaN(PAA)){
        PAA=0;
    }
    if(isNaN(PAB)){
        PAB=0;
    }
    if(isNaN(PAC)){
        PAC=0;
    }
    if(isNaN(PAD)){
        PAD=0;
    }
    somma=PAA+PAB+PAC+PAD;
    document.getElementById('PA-'+anno).value=somma;
}

function calculatePAA(anno){
    var PAA1String=document.getElementById('PA.A1-'+anno).value;
    var PAA2String=document.getElementById('PA.A2-'+anno).value;
    var PAA1=parseFloat(PAA1String);
    var PAA2=parseFloat(PAA2String);
    var somma;
    console.log(PAA1);
    console.log(PAA2);
    if(isNaN(PAA1)){
        PAA1=0;
    }
    if(isNaN(PAA2)){
        PAA2=0;
    }
    somma=PAA1+PAA2;
    document.getElementById('PA.A-'+anno).value=somma;
}

function calculatePAB(anno){
    var PAB1String=document.getElementById('PA.B1-'+anno).value;
    var PAB2String=document.getElementById('PA.B2-'+anno).value;
    var PAB3String=document.getElementById('PA.B3-'+anno).value;
    var PAB1=parseFloat(PAB1String);
    var PAB2=parseFloat(PAB2String);
    var PAB3=parseFloat(PAB3String);
    var somma;
    if(isNaN(PAB1)){
        PAB1=0;
    }
    if(isNaN(PAB2)){
        PAB2=0;
    }
    if(isNaN(PAB3)){
        PAB3=0;
    }
    somma=PAB1+PAB2+PAB3;
    document.getElementById("PA.B-"+anno).value=somma;
}

function calculatePAB1(anno){
    var PAB11String=document.getElementById('PA.B11-'+anno).value;
    var PAB12String=document.getElementById('PA.B12-'+anno).value;
    var PAB13String=document.getElementById('PA.B13-'+anno).value;
    var PAB14String=document.getElementById('PA.B14-'+anno).value;
    var PAB15String=document.getElementById('PA.B15-'+anno).value;
    var PAB16String=document.getElementById('PA.B16-'+anno).value;
    var PAB17String=document.getElementById('PA.B17-'+anno).value;
    var PAB11=parseFloat(PAB11String);
    var PAB12=parseFloat(PAB12String);
    var PAB13=parseFloat(PAB13String);
    var PAB14=parseFloat(PAB14String);
    var PAB15=parseFloat(PAB15String);
    var PAB16=parseFloat(PAB16String);
    var PAB17=parseFloat(PAB17String);
    var somma;
    if(isNaN(PAB11)){
        PAB11=0;
    }
    if(isNaN(PAB12)){
        PAB12=0;
    }
    if(isNaN(PAB13)){
        PAB13=0;
    }
    if(isNaN(PAB14)){
        PAB14=0;
    }
    if(isNaN(PAB15)){
        PAB15=0;
    }
    if(isNaN(PAB16)){
        PAB16=0;
    }
    if(isNaN(PAB17)){
        PAB17=0;
    }
    somma=PAB11+PAB12+PAB13+PAB14+PAB15+PAB16+PAB17;
    document.getElementById('PA.B1-'+anno).value=somma;
}

function calculatePAB11(anno){
    var PAB11aString=document.getElementById('PA.B11a-'+anno).value;
    var PAB11bString=document.getElementById('PA.B11b-'+anno).value;
    var PAB11cString=document.getElementById('PA.B11c-'+anno).value;
    var PAB11a=parseFloat(PAB11aString);
    var PAB11b=parseFloat(PAB11bString);
    var PAB11c=parseFloat(PAB11cString);
    var risultato;
    if(isNaN(PAB11a)){
        PAB11a=0;
    }
    if(isNaN(PAB11b)){
        PAB11b=0;
    }
    if(isNaN(PAB11c)){
        PAB11c=0;
    }
    risultato=PAB11a-PAB11b-PAB11c;
    document.getElementById('PA.B11-'+anno).value=risultato;
}

function calculatePAB12(anno){
    var PAB12aString=document.getElementById('PA.B12a-'+anno).value;
    var PAB12bString=document.getElementById('PA.B12b-'+anno).value;
    var PAB12cString=document.getElementById('PA.B12c-'+anno).value;
    var PAB12a=parseFloat(PAB12aString);
    var PAB12b=parseFloat(PAB12bString);
    var PAB12c=parseFloat(PAB12cString);
    var risultato;
    if(isNaN(PAB12a)){
        PAB12a=0;
    }
    if(isNaN(PAB12b)){
        PAB12b=0;
    }
    if(isNaN(PAB12c)){
        PAB12c=0;
    }
    risultato=PAB12a-PAB12b-PAB12c;
    document.getElementById('PA.B12-'+anno).value=risultato;
}

function calculatePAB13(anno){
    var PAB13aString=document.getElementById('PA.B13a-'+anno).value;
    var PAB13bString=document.getElementById('PA.B13b-'+anno).value;
    var PAB13cString=document.getElementById('PA.B13c-'+anno).value;
    var PAB13a=parseFloat(PAB13aString);
    var PAB13b=parseFloat(PAB13bString);
    var PAB13c=parseFloat(PAB13cString);
    var risultato;
    if(isNaN(PAB13a)){
        PAB13a=0;
    }
    if(isNaN(PAB13b)){
        PAB13b=0;
    }
    if(isNaN(PAB13c)){
        PAB13c=0;
    }
    risultato=PAB13a-PAB13b-PAB13c;
    document.getElementById('PA.B13-'+anno).value=risultato;
}

function calculatePAB14(anno){
    var PAB14aString=document.getElementById('PA.B14a-'+anno).value;
    var PAB14bString=document.getElementById('PA.B14b-'+anno).value;
    var PAB14cString=document.getElementById('PA.B14c-'+anno).value;
    var PAB14a=parseFloat(PAB14aString);
    var PAB14b=parseFloat(PAB14bString);
    var PAB14c=parseFloat(PAB14cString);
    var risultato;
    if(isNaN(PAB14a)){
        PAB14a=0;
    }
    if(isNaN(PAB14b)){
        PAB14b=0;
    }
    if(isNaN(PAB14c)){
        PAB14c=0;
    }
    risultato=PAB14a-PAB14b-PAB14c;
    document.getElementById('PA.B14-'+anno).value=risultato;
}

function calculatePAB15(anno){
    var PAB15aString=document.getElementById('PA.B15a-'+anno).value;
    var PAB15bString=document.getElementById('PA.B15b-'+anno).value;
    var PAB15cString=document.getElementById('PA.B15c-'+anno).value;
    var PAB15a=parseFloat(PAB15aString);
    var PAB15b=parseFloat(PAB15bString);
    var PAB15c=parseFloat(PAB15cString);
    var risultato;
    if(isNaN(PAB15a)){
        PAB15a=0;
    }
    if(isNaN(PAB15b)){
        PAB15b=0;
    }
    if(isNaN(PAB15c)){
        PAB15c=0;
    }
    risultato=PAB15a-PAB15b-PAB15c;
    document.getElementById('PA.B15-'+anno).value=risultato;
}

function calculatePAB17(anno){
    var PAB17aString=document.getElementById('PA.B17a-'+anno).value;
    var PAB17bString=document.getElementById('PA.B17b-'+anno).value;
    var PAB17cString=document.getElementById('PA.B17c-'+anno).value;
    var PAB17a=parseFloat(PAB17aString);
    var PAB17b=parseFloat(PAB17bString);
    var PAB17c=parseFloat(PAB17cString);
    var risultato;
    if(isNaN(PAB17a)){
        PAB17a=0;
    }
    if(isNaN(PAB17b)){
        PAB17b=0;
    }
    if(isNaN(PAB17c)){
        PAB17c=0;
    }
    risultato=PAB17a-PAB17b-PAB17c;
    document.getElementById('PA.B17-'+anno).value=risultato;
}

//Materiali da riga 42 a riga 58
function calculatePAB2(anno){           //funzione materiali
    var PAB21String=document.getElementById('PA.B21-'+anno).value;
    var PAB22String=document.getElementById('PA.B22-'+anno).value;
    var PAB23String=document.getElementById('PA.B23-'+anno).value;
    var PAB24String=document.getElementById('PA.B24-'+anno).value;
    var PAB25String=document.getElementById('PA.B25-'+anno).value;
    var PAB26String=document.getElementById('PA.B26-'+anno).value;
    var PAB21=parseInt(PAB21String);
    var PAB22=parseInt(PAB22String);
    var PAB23=parseInt(PAB23String);
    var PAB24=parseInt(PAB24String);
    var PAB25=parseInt(PAB25String);
    var PAB26=parseInt(PAB26String);
    var somma;
    if(isNaN(PAB21)){
        PAB21=0;
    }
    if(isNaN(PAB22)){
        PAB22=0;
    }
    if(isNaN(PAB23)){
        PAB23=0;
    }
    if(isNaN(PAB24)){
        PAB24=0;
    }
    if(isNaN(PAB25)){
        PAB25=0;
    }
    if(isNaN(PAB26)){
        PAB26=0;
    }
    somma=PAB21+PAB22+PAB23+PAB24+PAB25+PAB26;
    document.getElementById('PA.B2-'+anno).value=somma;
}

function calculatePAB21(anno){
    var PAB21aString=document.getElementById('PA.B21a-'+anno).value;
    var PAB21bString=document.getElementById('PA.B21b-'+anno).value;
    var PAB21cString=document.getElementById('PA.B21c-'+anno).value;
    var PAB21a=parseInt(PAB21aString);
    var PAB21b=parseInt(PAB21bString);
    var PAB21c=parseInt(PAB21cString);
    var somma;
    if(isNaN(PAB21a)){
        PAB21a=0;
    }
    if(isNaN(PAB21b)){
        PAB21b=0;
    }
    if(isNaN(PAB21c)){
        PAB21c=0;
    }
    somma=PAB21a-PAB21b-PAB21c;
    document.getElementById('PA.B21-'+anno).value=somma;
}

function calculatePAB22(anno){
    var PAB22aString=document.getElementById('PA.B22a-'+anno).value;
    var PAB22bString=document.getElementById('PA.B22b-'+anno).value;
    var PAB22cString=document.getElementById('PA.B22c-'+anno).value;
    var PAB22a=parseInt(PAB22aString);
    var PAB22b=parseInt(PAB22bString);
    var PAB22c=parseInt(PAB22cString);
    var somma;
    if(isNaN(PAB22a)){
        PAB22a=0;
    }
    if(isNaN(PAB22b)){
        PAB22b=0;
    }
    if(isNaN(PAB22c)){
        PAB22c=0;
    }
    somma=PAB22a-PAB22b-PAB22c;
    document.getElementById('PA.B22-'+anno).value=somma;
}

function calculatePAB23(anno){
    var PAB23aString=document.getElementById('PA.B23a-'+anno).value;
    var PAB23bString=document.getElementById('PA.B23b-'+anno).value;
    var PAB23cString=document.getElementById('PA.B23c-'+anno).value;
    var PAB23a=parseInt(PAB23aString);
    var PAB23b=parseInt(PAB23bString);
    var PAB23c=parseInt(PAB23cString);
    var somma;
    if(isNaN(PAB23a)){
        PAB23a=0;
    }
    if(isNaN(PAB23b)){
        PAB23b=0;
    }
    if(isNaN(PAB23c)){
        PAB23c=0;
    }
    somma=PAB23a-PAB23b-PAB23c;
    document.getElementById('PA.B23-'+anno).value=somma;
}

function calculatePAB24(anno){
    var PAB24aString=document.getElementById('PA.B24a-'+anno).value;
    var PAB24bString=document.getElementById('PA.B24b-'+anno).value;
    var PAB24cString=document.getElementById('PA.B24c-'+anno).value;
    var PAB24a=parseInt(PAB24aString);
    var PAB24b=parseInt(PAB24bString);
    var PAB24c=parseInt(PAB24cString);
    var somma;
    if(isNaN(PAB24a)){
        PAB24a=0;
    }
    if(isNaN(PAB24b)){
        PAB24b=0;
    }
    if(isNaN(PAB24c)){
        PAB24c=0;
    }
    somma=PAB24a-PAB24b-PAB24c;
    document.getElementById('PA.B24-'+anno).value=somma;
}

function calculatePAB25(anno){
    document.getElementById('PA.B25-'+anno).value=PAB25;
}

function calculatePAB26(anno){
    var PAB26aString=document.getElementById('PA.B26a-'+anno).value;
    var PAB26bString=document.getElementById('PA.B26b-'+anno).value;
    var PAB26cString=document.getElementById('PA.B26c-'+anno).value;
    var PAB26a=parseInt(PAB26aString);
    var PAB26b=parseInt(PAB26bString);
    var PAB26c=parseInt(PAB26cString);
    var somma;
    if(isNaN(PAB26a)){
        PAB26a=0;
    }
    if(isNaN(PAB26b)){
        PAB26b=0;
    }
    if(isNaN(PAB26c)){
        PAB26c=0;
    }
    somma=PAB26a-PAB26b-PAB26c;
    document.getElementById('PA.B26-'+anno).value=somma;
}


//Finanziarie
function calculatePAB3(anno){           //funzione finanziarie
    var PAB31String=document.getElementById('PA.B31-'+anno).value;
    var PAB32String=document.getElementById('PA.B32-'+anno).value;
    var PAB33String=document.getElementById('PA.B33-'+anno).value;
    var PAB34String=document.getElementById('PA.B34-'+anno).value;
    var PAB31=parseInt(PAB31String);
    var PAB32=parseInt(PAB32String);
    var PAB33=parseInt(PAB33String);
    var PAB34=parseInt(PAB34String);
    var somma;
    if(isNaN(PAB31)){
        PAB31=0;
    }
    if(isNaN(PAB32)){
        PAB32=0;
    }
    if(isNaN(PAB33)){
        PAB33=0;
    }
    if(isNaN(PAB34)){
        PAB34=0;
    }
    somma=PAB31+PAB32+PAB33+PAB34;
    document.getElementById('PA.B3-'+anno).value=somma;
}

function calculatePAB31(anno){
    var PAB31aString=document.getElementById('PA.B31a-'+anno).value;
    var PAB31bString=document.getElementById('PA.B31b-'+anno).value;
    var PAB31cString=document.getElementById('PA.B31c-'+anno).value;
    var PAB31dString=document.getElementById('PA.B31d-'+anno).value;
    var PAB31a=parseInt(PAB31aString);
    var PAB31b=parseInt(PAB31bString);
    var PAB31c=parseInt(PAB31cString);
    var PAB31d=parseInt(PAB31dString);
    var somma;
    if(isNaN(PAB31a)){
        PAB31a=0;
    }
    if(isNaN(PAB31b)){
        PAB31b=0;
    }
    if(isNaN(PAB31c)){
        PAB31c=0;
    }
    if(isNaN(PAB31d)){
        PAB31d=0;
    }
    somma=PAB31a+PAB31b+PAB31c+PAB31d;
    document.getElementById('PA.B31-'+anno).value=somma;
}

function calculatePAB32(anno){
    var PAB32aString=document.getElementById('PA.B32a-'+anno).value;
    var PAB32bString=document.getElementById('PA.B32b-'+anno).value;
    var PAB32cString=document.getElementById('PA.B32c-'+anno).value;
    var PAB32dString=document.getElementById('PA.B32d-'+anno).value;
    var PAB32a=parseInt(PAB32aString);
    var PAB32b=parseInt(PAB32bString);
    var PAB32c=parseInt(PAB32cString);
    var PAB32d=parseInt(PAB32dString);
    var somma;
    if(isNaN(PAB32a)){
        PAB32a=0;
    }
    if(isNaN(PAB32b)){
        PAB32b=0;
    }
    if(isNaN(PAB32c)){
        PAB32c=0;
    }
    if(isNaN(PAB32d)){
        PAB32d=0;
    }
    somma=PAB32a+PAB32b+PAB32c+PAB32d;
    document.getElementById('PA.B32-'+anno).value=somma;
}

function calculatePAB32a(anno){
    var PAB32a1String=document.getElementById('PA.B32a1-'+anno).value;
    var PAB32a2String=document.getElementById('PA.B32a2-'+anno).value;
    var PAB32a1=parseInt(PAB32a1String);
    var PAB32a2=parseInt(PAB32a2String);
    var somma;
    if(isNaN(PAB32a1)){
        PAB32a1=0;
    }
    if(isNaN(PAB32a2)){
        PAB32a2=0;
    }
    somma=PAB32a1+PAB32a2;
    document.getElementById('PA.B32a-'+anno).value=somma;
}

function calculatePAB32b(anno){
    var PAB32b1String=document.getElementById('PA.B32b1-'+anno).value;
    var PAB32b2String=document.getElementById('PA.B32b2-'+anno).value;
    var PAB32b1=parseInt(PAB32b1String);
    var PAB32b2=parseInt(PAB32b2String);
    var somma;
    if(isNaN(PAB32b1)){
        PAB32b1=0;
    }
    if(isNaN(PAB32b2)){
        PAB32b2=0;
    }
    somma=PAB32b1+PAB32b2;
    document.getElementById('PA.B32b-'+anno).value=somma;
}

function calculatePAB32c(anno){
    var PAB32c1String=document.getElementById('PA.B32c1-'+anno).value;
    var PAB32c2String=document.getElementById('PA.B32c2-'+anno).value;
    var PAB32c1=parseInt(PAB32c1String);
    var PAB32c2=parseInt(PAB32c2String);
    var somma;
    if(isNaN(PAB32c1)){
        PAB32c1=0;
    }
    if(isNaN(PAB32c2)){
        PAB32c2=0;
    }
    somma=PAB32c1+PAB32c2;
    document.getElementById('PA.B32c-'+anno).value=somma;
}

function calculatePAB32d(anno){
    var PAB32d1String=document.getElementById('PA.B32d1-'+anno).value;
    var PAB32d2String=document.getElementById('PA.B32d2-'+anno).value;
    var PAB32d1=parseInt(PAB32d1String);
    var PAB32d2=parseInt(PAB32d2String);
    var somma;
    if(isNaN(PAB32d1)){
        PAB32d1=0;
    }
    if(isNaN(PAB32d2)){
        PAB32d2=0;
    }
    somma=PAB32d1+PAB32d2;
    document.getElementById('PA.B32d-'+anno).value=somma;
}

function calculatePAB33(anno){
    document.getElementById('PA.B33-'+anno).value=PAB33;
}

function calculatePAB34(anno){
    var PAB34aString=document.getElementById('PA.B34a-'+anno).value;
    var PAB34bString=document.getElementById('PA.B34b-'+anno).value;
    var PAB34a=parseInt(PAB34aString);
    var PAB34b=parseInt(PAB34bString);
    var somma;
    if(isNaN(PAB34a)){
        PAB34a=0;
    }
    if(isNaN(PAB34b)){
        PAB34b=0;
    }
    somma=PAB34a+PAB34b;
    document.getElementById('PA.B34-'+anno).value=somma;
}


//Attivo circolante
function calculatePAC(anno){           //funzione attivo circolante
    var PAC1String=document.getElementById('PA.C1-'+anno).value;
    var PAC2String=document.getElementById('PA.C2-'+anno).value;
    var PAC3String=document.getElementById('PA.C3-'+anno).value;
    var PAC4String=document.getElementById('PA.C4-'+anno).value;
    var PAC1=parseInt(PAC1String);
    var PAC2=parseInt(PAC2String);
    var PAC3=parseInt(PAC3String);
    var PAC4=parseInt(PAC4String);
    var somma;
    if(isNaN(PAC1)){
        PAC1=0;
    }
    if(isNaN(PAC2)){
        PAC2=0;
    }
    if(isNaN(PAC3)){
        PAC3=0;
    }
    if(isNaN(PAC4)){
        PAC4=0;
    }
    somma=PAC1+PAC2+PAC3+PAC4;
    document.getElementById('PA.C-'+anno).value=somma;
}

//Rimanenze
function calculatePAC1(anno){          //funzione rimanenze
    var PAC11String=document.getElementById('PA.C11-'+anno).value;
    var PAC12String=document.getElementById('PA.C12-'+anno).value;
    var PAC13String=document.getElementById('PA.C13-'+anno).value;
    var PAC14String=document.getElementById('PA.C14-'+anno).value;
    var PAC15String=document.getElementById('PA.C15-'+anno).value;
    var PAC11=parseInt(PAC11String);
    var PAC12=parseInt(PAC12String);
    var PAC13=parseInt(PAC13String);
    var PAC14=parseInt(PAC14String);
    var PAC15=parseInt(PAC15String);
    var somma;
    if(isNaN(PAC11)){
        PAC11=0;
    }
    if(isNaN(PAC12)){
        PAC12=0;
    }
    if(isNaN(PAC13)){
        PAC13=0;
    }
    if(isNaN(PAC14)){
        PAC14=0;
    }
    if(isNaN(PAC15)){
        PAC15=0;
    }
    somma=PAC11+PAC12+PAC13+PAC14+PAC15;
    document.getElementById('PA.C1-'+anno).value=somma;
}

function calculatePAC11(anno){
    document.getElementById('PA.C11-'+anno).value=PAC11;
}

function calculatePAC12(anno){
    document.getElementById('PA.C12-'+anno).value=PAC12;
}

function calculatePAC13(anno){
    document.getElementById('PA.C13-'+anno).value=PAC13;
}

function calculatePAC14(anno){
    document.getElementById('PA.C14-'+anno).value=PAC14;
}

function calculatePAC15(anno){
    document.getElementById('PA.C15-'+anno).value=PAC15;
}

//Crediti
function calculatePAC2(anno){          //funzione crediti
    var PAC21String=document.getElementById('PA.C21-'+anno).value;
    var PAC22String=document.getElementById('PA.C22-'+anno).value;
    var PAC23String=document.getElementById('PA.C23-'+anno).value;
    var PAC24String=document.getElementById('PA.C24-'+anno).value;
    var PAC2BString=document.getElementById('PA.C2B-'+anno).value;
    var PAC2TString=document.getElementById('PA.C2T-'+anno).value;
    var PAC25String=document.getElementById('PA.C25-'+anno).value;
    var PAC21=parseInt(PAC21String);
    var PAC22=parseInt(PAC22String);
    var PAC23=parseInt(PAC23String);
    var PAC24=parseInt(PAC24String);
    var PAC2B=parseInt(PAC2BString);
    var PAC2T=parseInt(PAC2TString);
    var PAC25=parseInt(PAC25String);
    var somma;
    if(isNaN(PAC21)){
        PAC21=0;
    }
    if(isNaN(PAC22)){
        PAC22=0;
    }
    if(isNaN(PAC23)){
        PAC23=0;
    }
    if(isNaN(PAC24)){
        PAC24=0;
    }
    if(isNaN(PAC2B)){
        PAC2B=0;
    }
    if(isNaN(PAC2T)){
        PAC2T=0;
    }
    if(isNaN(PAC25)){
        PAC25=0;
    }
    somma=PAC21+PAC22+PAC23+PAC24+PAC2B+PAC2T+PAC25;
    document.getElementById('PA.C2-'+anno).value=somma;
}

function calculatePAC21(anno){
    var PAC21aString=document.getElementById('PA.C21a-'+anno).value;
    var PAC21bString=document.getElementById('PA.C21b-'+anno).value;
    var PAC21a=parseInt(PAC21aString);
    var PAC21b=parseInt(PAC21bString);
    var somma;
    if(isNaN(PAC21a)){
        PAC21a=0;
    }
    if(isNaN(PAC21b)){
        PAC21b=0;
    }
    somma=PAC21a+PAC21b;
    document.getElementById('PA.C21-'+anno).value=somma;
}

function calculatePAC22(anno){
    var PAC22aString=document.getElementById('PA.C22a-'+anno).value;
    var PAC22bString=document.getElementById('PA.C22b-'+anno).value;
    var PAC22a=parseInt(PAC22aString);
    var PAC22b=parseInt(PAC22bString);
    var somma;
    if(isNaN(PAC22a)){
        PAC22a=0;
    }
    if(isNaN(PAC22b)){
        PAC22b=0;
    }
    somma=PAC22a+PAC22b;
    document.getElementById('PA.C22-'+anno).value=somma;
}

function calculatePAC23(anno){
    var PAC23aString=document.getElementById('PA.C23a-'+anno).value;
    var PAC23bString=document.getElementById('PA.C23b-'+anno).value;
    var PAC23a=parseInt(PAC23aString);
    var PAC23b=parseInt(PAC23bString);
    var somma;
    if(isNaN(PAC23a)){
        PAC23a=0;
    }
    if(isNaN(PAC23b)){
        PAC23b=0;
    }
    somma=PAC23a+PAC23b;
    document.getElementById('PA.C23-'+anno).value=somma;
}

function calculatePAC24(anno){
    var PAC24aString=document.getElementById('PA.C24a-'+anno).value;
    var PAC24bString=document.getElementById('PA.C24b-'+anno).value;
    var PAC24a=parseInt(PAC24aString);
    var PAC24b=parseInt(PAC24bString);
    var somma;
    if(isNaN(PAC24a)){
        PAC24a=0;
    }
    if(isNaN(PAC24b)){
        PAC24b=0;
    }
    somma=PAC24a+PAC24b;
    document.getElementById('PA.C24-'+anno).value=somma;
}

function calculatePAC2B(anno){
    var PAC2BaString=document.getElementById('PA.C2Ba-'+anno).value;
    var PAC2BbString=document.getElementById('PA.C2Bb-'+anno).value;
    var PAC2Ba=parseInt(PAC2BaString);
    var PAC2Bb=parseInt(PAC2BbString);
    var somma;
    if(isNaN(PAC2Ba)){
        PAC2Ba=0;
    }
    if(isNaN(PAC2Bb)){
        PAC2Bb=0;
    }
    somma=PAC2Ba+PAC2Bb;
    document.getElementById('PA.C2B-'+anno).value=somma;
}

function calculatePAC2T(anno){
    var PAC2TaString=document.getElementById('PA.C2Ta-'+anno).value;
    var PAC2TbString=document.getElementById('PA.C2Tb-'+anno).value;
    var PAC2Ta=parseInt(PAC2TaString);
    var PAC2Tb=parseInt(PAC2TbString);
    var somma;
    if(isNaN(PAC2Ta)){
        PAC2Ta=0;
    }
    if(isNaN(PAC2Tb)){
        PAC2Tb=0;
    }
    somma=PAC2Ta+PAC2Tb;
    document.getElementById('PA.C2T-'+anno).value=somma;
}

function calculatePAC25(anno){
    var PAC25aString=document.getElementById('PA.C25a-'+anno).value;
    var PAC25bString=document.getElementById('PA.C25b-'+anno).value;
    var PAC25a=parseInt(PAC25aString);
    var PAC25b=parseInt(PAC25bString);
    var somma;
    if(isNaN(PAC25a)){
        PAC25a=0;
    }
    if(isNaN(PAC25b)){
        PAC25b=0;
    }
    somma=PAC25a+PAC25b;
    document.getElementById('PA.C25-'+anno).value=somma;
}

//lavoro di daniele: da riga 111 a riga 187
//riga 111
function calculatePAC3(anno) {
    var PAC31String=document.getElementById('PA.C31-'+anno).value;
    var PAC32String=document.getElementById('PA.C32-'+anno).value;
    var PAC33String=document.getElementById('PA.C33-'+anno).value;
    var PAC34String=document.getElementById('PA.C34-'+anno).value;
    var PAC35String=document.getElementById('PA.C35-'+anno).value;
    var PAC36String=document.getElementById('PA.C36-'+anno).value;
    var PAC31=parseFloat(PAC31String);
    var PAC32=parseFloat(PAC32String);
    var PAC33=parseFloat(PAC33String);
    var PAC34=parseFloat(PAC34String);
    var PAC35=parseFloat(PAC35String);
    var PAC36=parseFloat(PAC36String);
    var somma;
    if(isNaN(PAC31)) {
        PAC31=0;
    }
    if(isNaN(PAC32)) {
        PAC32=0;
    }
    if(isNaN(PAC33)) {
        PAC33=0;
    }
    if(isNaN(PAC34)) {
        PAC34=0;
    }
    if(isNaN(PAC35)) {
        PAC35=0;
    }
    if(isNaN(PAC36)) {
        PAC36=0;
    }
    somma=PAC31+PAC32+PAC33+PAC34+PAC35+PAC36;
    document.getElementById('PA.C3-'+anno).value=somma;
}
//riga 116
function calculatePAC35(anno) {
    var PAC35aString=document.getElementById('PA.C35a-'+anno).value;
    var PAC35bString=document.getElementById('PA.C35b-'+anno).value;
    var PAC35a=parseFloat(PAC35aString);
    var PAC35b=parseFloat(PAC35bString);
    var somma;
    if(isNaN(PAC35a)) {
        PAC35a=0;
    }
    if(isNaN(PAC35b)) {
        PAC35b=0;
    }
    somma=PAC35a+PAC35b;
    document.getElementById('PA.C35-'+anno).value=somma;
}
//riga 120
function calculatePAC4(anno) {
    var PAC41String=document.getElementById('PA.C41-'+anno).value;
    var PAC42String=document.getElementById('PA.C42-'+anno).value;
    var PAC43String=document.getElementById('PA.C43-'+anno).value;
    var PAC41=parseFloat(PAC41);
    var PAC42=parseFloat(PAC42);
    var PAC43=parseFloat(PAC43);
    var somma;
    if(isNaN(PAC41)) {
        PAC41=0;
    }
    if(isNaN(PAC42)) {
        PAC42=0;
    }
    if(isNaN(PAC43)) {
        PAC43=0;
    }
    somma=PAC41+PAC42+PAC43;
    document.getElementById('PA.C4').value=somma;
}
//riga 124
function calculatePAD(anno) {
    var PAD1String=document.getElementById('PA.D1-'+anno).value;
    var PAD2String=document.getElementById('PA.D2-'+anno).value;
    var PAD1=parseFloat(PAD1);
    var PAD2=parseFloat(PAD2);
    var somma;
    if(isNaN(PAD1)) {
        PAD1=0;
    }
    if(isNaN(PAD2)) {
        PAD2=0;
    }
    somma=PAD1+PAD2;
    document.getElementById('PA.D-'+anno).value=somma;
}
//riga 128
function calculatePPA(anno) {
    var PPA1String=document.getElementById('PP.A1-'+anno).value;
    var PPA2String=document.getElementById('PP.A2-'+anno).value;
    var PPA3String=document.getElementById('PP.A3-'+anno).value;
    var PPA4String=document.getElementById('PP.A4-'+anno).value;
    var PPA5String=document.getElementById('PP.A5-'+anno).value;
    var PPA6String=document.getElementById('PP.A6-'+anno).value;
    var PPA7String=document.getElementById('PP.A7-'+anno).value;
    var PPA8String=document.getElementById('PP.A8-'+anno).value;
    var PPA9String=document.getElementById('PP.A9-'+anno).value;
    var PPAAString=document.getElementById('PP.AA-'+anno).value;
    var PPA1=parseFloat(PPA1String);
    var PPA2=parseFloat(PPA2String);
    var PPA3=parseFloat(PPA3String);
    var PPA4=parseFloat(PPA4String);
    var PPA5=parseFloat(PPA5String);
    var PPA6=parseFloat(PPA6String);
    var PPA7=parseFloat(PPA7String);
    var PPA8=parseFloat(PPA8String);
    var PPA9=parseFloat(PPA9String);
    var PPAA=parseFloat(PPAAString);
    var somma;
    if(isNaN(PPA1)) {
        PPA1=0;
    }
    if(isNaN(PPA2)) {
        PPA2=0;
    }
    if(isNaN(PPA3)) {
        PPA3=0;
    }
    if(isNaN(PPA4)) {
        PPA4=0;
    }
    if(isNaN(PPA5)) {
        PPA5=0;
    }
    if(isNaN(PPA6)) {
        PPA6=0;
    }
    if(isNaN(PPA7)) {
        PPA7=0;
    }
    if(isNaN(PPA8)) {
        PPA8=0;
    }
    if(isNaN(PPA9)) {
        PPA9=0;
    }
    if(isNaN(PPAA)) {
        PPAA=0;
    }
    somma=PPA1+PPA2+PPA3+PPA4+PPA5+PPA6+PPA7+PPA8+PPA9+PPAA;
    document.getElementById('PP.A-'+anno).value=somma;
}
//riga 135
function calculatePPA7(anno) {
    var PPA7aString=document.getElementById('PP.A7a-'+anno).value;
    var PPA7nString=document.getElementById('PP.A7n-'+anno).value;
    var PPA7oString=document.getElementById('PP.A7o-'+anno).value;
    var PPA7pString=document.getElementById('PP.A7p-'+anno).value;
    var PPA7qString=document.getElementById('PP.A7q-'+anno).value;
    var PPA7rString=document.getElementById('PP.A7r-'+anno).value;
    var PPA7sString=document.getElementById('PP.A7s-'+anno).value;
    var PPA7bString=document.getElementById('PP.A7b-'+anno).value;
    var PPA7tString=document.getElementById('PP.A7t-'+anno).value;
    var PPA7uString=document.getElementById('PP.A7u-'+anno).value;
    var PPA7vString=document.getElementById('PP.A7v-'+anno).value;
    var PPA7wString=document.getElementById('PP.A7w-'+anno).value;
    var PPA7jString=document.getElementById('PP.A7j-'+anno).value;
    var PPA7lString=document.getElementById('PP.A7l-'+anno).value;
    var PPA7mString=document.getElementById('PP.A7m-'+anno).value;
    var PPA7a=parseFloat(PPA7aString);
    var PPA7n=parseFloat(PPA7nString);
    var PPA7o=parseFloat(PPA7oString);
    var PPA7p=parseFloat(PPA7pString);
    var PPA7q=parseFloat(PPA7qString);
    var PPA7r=parseFloat(PPA7rString);
    var PPA7s=parseFloat(PPA7sString);
    var PPA7b=parseFloat(PPA7bString);
    var PPA7t=parseFloat(PPA7tString);
    var PPA7u=parseFloat(PPA7uString);
    var PPA7v=parseFloat(PPA7vString);
    var PPA7w=parseFloat(PPA7wString);
    var PPA7j=parseFloat(PPA7jString);
    var PPA7l=parseFloat(PPA7lString);
    var PPA7m=parseFloat(PPA7mString);
    if(isNaN(PPA7a)) {
        PPA7a=0;
    }
    if(isNaN(PPA7n)) {
        PPA7n=0;
    }
    if(isNaN(PPA7o)) {
        PPA7o=0;
    }
    if(isNaN(PPA7p)) {
        PPA7p=0;
    }
    if(isNaN(PPA7q)) {
        PPA7q=0;
    }
    if(isNaN(PPA7r)) {
        PPA7r=0;
    }
    if(isNaN(PPA7s)) {
        PPA7s=0;
    }
    if(isNaN(PPA7b)) {
        PPA7b=0;
    }
    if(isNaN(PPA7t)) {
        PPA7t=0;
    }
    if(isNaN(PPA7u)) {
        PPA7u=0;
    }
    if(isNaN(PPA7v)) {
        PPA7v=0;
    }
    if(isNaN(PPA7w)) {
        PPA7w=0;
    }
    if(isNaN(PPA7j)) {
        PPA7j=0;
    }
    if(isNaN(PPA7l)) {
        PPA7l=0;
    }
    if(isNaN(PPA7m)) {
        PPA7m=0;
    }
    somma=PPA7a+PPA7n+PPA7o+PPA7p+PPA7q+PPA7r+PPA7s+PPA7b+PPA7t+PPA7u+PPA7v+PPA7w+PPA7j+PPA7l+PPA7m;
    document.getElementById('PP.A7-'+anno).value=somma;
}
//riga 148
function calculatePPA7j(anno) {
    var PPA7j1String=document.getElementById('PP.A7j1-'+anno).value;
    var PPA7j2String=document.getElementById('PP.A7j2-'+anno).value;
    var PPA7j1=parseFloat(PPA7j1String);
    var PPA7j2=parseFloat(PPA7j2String);
    var somma;
    if(isNaN(PPA7j1)) {
        PPA7j1=0;
    }
    if(isNaN(PPA7j2)) {
        PPA7j2=0;
    }
    somma=PPA7j1+PPA7j2;
    document.getElementById('PP.A7j-'+anno).value=somma;
}
//riga 154
function calculatePPA9(anno) {
    var PPA9aString=document.getElementById('PP.A9a-'+anno).value;
    var PPA9bString=document.getElementById('PP.A9b-'+anno).value;
    var PPA9a=parseFloat(PPA9aString);
    var PPA9b=parseFloat(PPA9bString);
    var somma;
    if(isNaN(PPA9a)) {
        PPA9a=0;
    }
    if(isNaN(PPA9b)) {
        PPA9b=0;
    }
    somma=PPA9a+PPA9b;
    document.getElementById('PP.A9-'+anno).value=somma;
}
//riga 157
function calculatePPAA(anno) {
    var PPAA1String=document.getElementById('PP.AA1-'+anno);
    var PPAA2String=document.getElementById('PP.AA2-'+anno);
    var PPAA1=parseFloat(PPAA1String);
    var PPAA2=parseFloat(PPAA2String);
    var somma;
    if(isNaN(PPAA1)) {
        PPAA1=0;
    }
    if(isNaN(PPAA2)) {
        PPAA2=0;
    }
    somma=PPAA1+PPAA2;
    document.getElementById('PP.AA-'+anno).value=somma;
}
//riga 160
function calculatePPB(anno) {
    var PPB1String=document.getElementById('PP.B1-'+anno).value;
    var PPB2String=document.getElementById('PP.B2-'+anno).value;
    var PPB3String=document.getElementById('PP.B3-'+anno).value;
    var PPB4String=document.getElementById('PP.B4-'+anno).value;
    var PPB1=parseFloat(PPB1String);
    var PPB2=parseFloat(PPB2String);
    var PPB3=parseFloat(PPB3String);
    var PPB4=parseFloat(PPB4String);
    var somma;
    if(isNaN(PPB1)) {
        PPB1=0;
    }
    if(isNaN(PPB2)) {
        PPB2=0;
    }
    if(isNaN(PPB3)) {
        PPB3=0;
    }
    if(isNaN(PPB4)) {
        PPB4=0;
    }
    somma=PPB1+PPB2+PPB3+PPB4;
    document.getElementById('PP.B-'+anno).value=somma;
}
//riga 165
function calculatePPC(anno) {
    var PPCString=document.getElementById('PP.C-'+anno);
    var PPC=parseFloat(PPCString);
    if (isNaN(PPC)) {
        PPC=0;
    }
    document.getElementById('PP.C-'+anno).value=PPC;
}
//riga 166
function calculatePPD(anno) {
    var PPD1String=document.getElementById('PP.D1-'+anno).value;
    var PPD2String=document.getElementById('PP.D2-'+anno).value;
    var PPD3String=document.getElementById('PP.D3-'+anno).value;
    var PPD4String=document.getElementById('PP.D4-'+anno).value;
    var PPD5String=document.getElementById('PP.D5-'+anno).value;
    var PPD6String=document.getElementById('PP.D6-'+anno).value;
    var PPD7String=document.getElementById('PP.D7-'+anno).value;
    var PPD8String=document.getElementById('PP.D8-'+anno).value;
    var PPD9String=document.getElementById('PP.D9-'+anno).value;
    var PPD10String=document.getElementById('PP.D10-'+anno).value;
    var PPD11String=document.getElementById('PP.D11-'+anno).value;
    var PPD12String=document.getElementById('PP.D12-'+anno).value;
    var PPD13String=document.getElementById('PP.D13-'+anno).value;
    var PPD14String=document.getElementById('PP.D14-'+anno).value;
    var PPD1=parseFloat(PPD1String);
    var PPD2=parseFloat(PPD2String);
    var PPD3=parseFloat(PPD3String);
    var PPD4=parseFloat(PPD4String);
    var PPD5=parseFloat(PPD5String);
    var PPD6=parseFloat(PPD6String);
    var PPD7=parseFloat(PPD7String);
    var PPD8=parseFloat(PPD8String);
    var PPD9=parseFloat(PPD9String);
    var PPD10=parseFloat(PPD10String);
    var PPD11=parseFloat(PPD11String);
    var PPD12=parseFloat(PPD12String);
    var PPD13=parseFloat(PPD13String);
    var PPD14=parseFloat(PPD14String);
    var somma;
    if(isNaN(PPD1)) {
        PPD1=0;
    }
    if(isNaN(PPD2)) {
        PPD2=0;
    }
    if(isNaN(PPD3)) {
        PPD3=0;
    }
    if(isNaN(PPD4)) {
        PPD4=0;
    }
    if(isNaN(PPD5)) {
        PPD5=0;
    }
    if(isNaN(PPD6)) {
        PPD6=0;
    }
    if(isNaN(PPD7)) {
        PPD7=0;
    }
    if(isNaN(PPD8)) {
        PPD8=0;
    }
    if(isNaN(PPD9)) {
        PPD9=0;
    }
    if(isNaN(PPD10)) {
        PPD10=0;
    }
    if(isNaN(PPD11)) {
        PPD11=0;
    }
    if(isNaN(PPD12)) {
        PPD12=0;
    }
    if(isNaN(PPD13)) {
        PPD13=0;
    }
    if(isNaN(PPD14)) {
        PPD14=0;
    }
    somma=PPD1+PPD2+PPD3+PPD4+PPD5+PPD6+PPD7+PPD8+PPD9+PPD10+PPD11+PPD12+PPD13+PPD14;
    document.getElementById('PP.D-'+anno).value=somma;

}
//riga 167
function calculatePPD1(anno) {
    var PPD1aString=document.getElementById('PP.D1a-'+anno).value;
    var PPD1bString=document.getElementById('PP.D1b-'+anno).value;
    var PPD1a=parseFloat(PPD1aString);
    var PPD1b=parseFloat(PPD1bString);
    var somma;
    if(isNaN(PPD1a)) {
        PPD1a=0;
    }
    if(isNaN(PPD1b)) {
        PPD1b=0;
    }
    somma=PPD1a+PPD1b;
    document.getElementById('PP.D1-'+anno).value=somma;
}
//riga 170
function calculatePPD2(anno) {
    var PPD2aString=document.getElementById('PP.D2a-'+anno).value;
    var PPD2bString=document.getElementById('PP.D2b-'+anno).value;
    var PPD2a=parseFloat(PPD2aString);
    var PPD2b=parseFloat(PPD2bString);
    var somma;
    if(isNaN(PPD2a)) {
        PPD2a=0;
    }
    if(isNaN(PPD2b)) {
        PPD2b=0;
    }
    somma=PPD2a+PPD2b;
    document.getElementById('PP.D2-'+anno).value=somma;
}
//riga 173
function calculatePPDF(anno) {
    var PPDFaString=document.getElementById('PP.DFa-'+anno).value;
    var PPDFbString=document.getElementById('PP.DFb-'+anno).value;
    var PPDFa=parseFloat(PPDFaString);
    var PPDFb=parseFloat(PPDFbString);
    var somma;
    if(isNaN(PPDFa)) {
        PPDFa=0;
    }
    if(isNaN(PPDFb)) {
        PPDFb=0;
    }
    somma=PPDFa+PPDFb;
    document.getElementById('PP.DF-'+anno).value=somma;
}
//riga 176
function calculatePPD3(anno) {
    var PPD3aString=document.getElementById('PP.D3a-'+anno).value;
    var PPD3bString=document.getElementById('PP.D3b-'+anno).value;
    var PPD3a=parseFloat(PPD3aString);
    var PPD3b=parseFloat(PPD3bString);
    var somma;
    if(isNaN(PPD3a)) {
        PPD3a=0;
    }
    if(isNaN(PPD3b)) {
        PPD3b=0;
    }
    somma=PPD3a+PPD3b;
    document.getElementById('PP.D3-'+anno).value=somma;
}
//riga 179
function calculatePPD4(anno) {
    var PPD4aString=document.getElementById('PP.D4a-'+anno).value;
    var PPD4bString=document.getElementById('PP.D4b-'+anno).value;
    var PPD4a=parseFloat(PPD4aString);
    var PPD4b=parseFloat(PPD4bString);
    var somma;
    if(isNaN(PPD4a)) {
        PPD4a=0;
    }
    if(isNaN(PPD4b)) {
        PPD4b=0;
    }
    somma=PPD4a+PPD4b;
    document.getElementById('PP.D4-'+anno).value=somma;
}
//riga 182
function calculatePPD5(anno) {
    var PPD5aString=document.getElementById('PP.D5a-'+anno).value;
    var PPD5bString=document.getElementById('PP.D5b-'+anno).value;
    var PPD5a=parseFloat(PPD5aString);
    var PPD5b=parseFloat(PPD5bString);
    var somma;
    if(isNaN(PPD5a)) {
        PPD5a=0;
    }
    if(isNaN(PPD5b)) {
        PPD5b=0;
    }
    somma=PPD5a+PPD5b;
    document.getElementById('PP.D5-'+anno).value=somma;
}
//riga 185
function calculatePPD6(anno) {
    var PPD6aString=document.getElementById('PP.D6a-'+anno).value;
    var PPD6bString=document.getElementById('PP.D6b-'+anno).value;
    var PPD6a=parseFloat(PPD6aString);
    var PPD6b=parseFloat(PPD6bString);
    var somma;
    if(isNaN(PPD6a)) {
        PPD6a=0;
    }
    if(isNaN(PPD6b)) {
        PPD6b=0;
    }
    somma=PPD6a+PPD6b;
    document.getElementById('PP.D6-'+anno).value=somma;
}

//lavoro angelo:da riga 188 a 262

//riga 188
function calculatePPD7(anno){
    var PPD7aString=document.getElementById('PP.D7a-'+anno).value;
    var PPD7bString=document.getElementById('PP.D7b-'+anno).value;
    var PPD7a=parseFloat(PPD7aString);
    var PPD7b=parseFloat(PPD7bString);
    var somma;
    console.log(PPD7a);
    console.log(PPD7b);
    if(isNaN(PPD7a)){
        PPD7a=0;
    }
    if(isNaN(PPD7b)){
        PPD7b=0;
    }
    somma=PPD7a+PPD7b;
    document.getElementById('PP.D7-'+anno).value=somma;
}
//riga 191
function calculatePPD8(anno){
    var PPD8aString=document.getElementById('PP.D8a-'+anno).value;
    var PPD8bString=document.getElementById('PP.D8b-'+anno).value;
    var PPD8a=parseFloat(PPD8aString);
    var PPD8b=parseFloat(PPD8bString);
    var somma;
    console.log(PPD8a);
    console.log(PPD8b);
    if(isNaN(PPD8a)){
        PPD8a=0;
    }
    if(isNaN(PPD8b)){
        PPD8b=0;
    }
    somma=PPD8a+PPD8b;
    document.getElementById('PP.D8-'+anno).value=somma;
}
//riga 194
function calculatePPD9(anno){
    var PPD9aString=document.getElementById('PP.D9a-'+anno).value;
    var PPD9bString=document.getElementById('PP.D9b-'+anno).value;
    var PPD9a=parseFloat(PPD9aString);
    var PPD9b=parseFloat(PPD9bString);
    var somma;
    console.log(PPD9a);
    console.log(PPD9b);
    if(isNaN(PPD9a)){
        PPD9a=0;
    }
    if(isNaN(PPD9b)){
        PPD9b=0;
    }
    somma=PPD9a+PPD9b;
    document.getElementById('PP.D9-'+anno).value=somma;
}
//riga 197
function calculatePPDA(anno){
    var PPDAaString=document.getElementById('PP.DAa-'+anno).value;
    var PPDAbString=document.getElementById('PP.DAb-'+anno).value;
    var PPDAa=parseFloat(PPDAaString);
    var PPDAb=parseFloat(PPDAbString);
    var somma;
    console.log(PPDAa);
    console.log(PPDAb);
    if(isNaN(PPDAa)){
        PPDAa=0;
    }
    if(isNaN(PPDAb)){
        PPDAb=0;
    }
    somma=PPDAa+PPDAb;
    document.getElementById('PP.DA-'+anno).value=somma;
}
//riga 200
function calculatePPDB(anno){
    var PPDBaString=document.getElementById('PP.DBa-'+anno).value;
    var PPDBbString=document.getElementById('PP.DBb-'+anno).value;
    var PPDBa=parseFloat(PPDBaString);
    var PPDBb=parseFloat(PPDBbString);
    var somma;
    console.log(PPDBa);
    console.log(PPDBb);
    if(isNaN(PPDBa)){
        PPDBa=0;
    }
    if(isNaN(PPDBb)){
        PPDBb=0;
    }
    somma=PPDBa+PPDBb;
    document.getElementById('PP.DB-'+anno).value=somma;
}
//riga 203
function calculatePPDC(anno){
    var PPDCaString=document.getElementById('PP.DCa-'+anno).value;
    var PPDCbString=document.getElementById('PP.DCb-'+anno).value;
    var PPDCa=parseFloat(PPDCaString);
    var PPDCb=parseFloat(PPDCbString);
    var somma;
    console.log(PPDCa);
    console.log(PPDCb);
    if(isNaN(PPDCa)){
        PPDCa=0;
    }
    if(isNaN(PPDCb)){
        PPDCb=0;
    }
    somma=PPDCa+PPDCb;
    document.getElementById('PP.DC-'+anno).value=somma;
}
//riga 206
function calculatePPDD(anno){
    var PPDDaString=document.getElementById('PP.DDa-'+anno).value;
    var PPDDbString=document.getElementById('PP.DDb-'+anno).value;
    var PPDDa=parseFloat(PPDDaString);
    var PPDDb=parseFloat(PPDDbString);
    var somma;
    console.log(PPDDa);
    console.log(PPDDb);
    if(isNaN(PPDDa)){
        PPDDa=0;
    }
    if(isNaN(PPDDb)){
        PPDDb=0;
    }
    somma=PPDDa+PPDDb;
    document.getElementById('PP.DD-'+anno).value=somma;
}
//riga 209
function calculatePPE(anno){
    var PPE1String=document.getElementById('PP.E1-'+anno).value;
    var PPE2String=document.getElementById('PP.E2-'+anno).value;
    var PPE1=parseFloat(PPE1String);
    var PPE2=parseFloat(PPE2String);
    var somma;
    console.log(PPE1);
    console.log(PPE2);
    if(isNaN(PPE1)){
        PPE1=0;
    }
    if(isNaN(PPE2)){
        PPE2=0;
    }
    somma=PPE1+PPE2;
    document.getElementById('PP.E-'+anno).value=somma;
}
//riga 248 CONTO ECONOMICO(da controllare)
function calculateE(anno){
    var EAString=document.getElementById('E.A-'+anno).value;
    var EBString=document.getElementById('E.B-'+anno).value;
    var ECString=document.getElementById('E.C-'+anno).value;
    var EDString=document.getElementById('E.D-'+anno).value;
    var EEString=document.getElementById('E.E-'+anno).value;
    var EFString=document.getElementById('E.F-'+anno).value;
    var EGString=document.getElementById('E.G-'+anno).value;
    var EHString=document.getElementById('E.H-'+anno).value;
    var EIString=document.getElementById('E.I-'+anno).value;
    var EA=parseFloat(EAString);
    var EB=parseFloat(EBString);
    var EC=parseFloat(ECString);
    var ED=parseFloat(EDString);
    var EE=parseFloat(EEString);
    var EF=parseFloat(EFString);
    var EG=parseFloat(EGString);
    var EH=parseFloat(EHString);
    var EI=parseFloat(EIString);
    var ContoEconomico;
    console.log(EA);
    console.log(EB);
    console.log(EC);
    console.log(ED);
    console.log(EE);
    console.log(EF);
    console.log(EG);
    console.log(EH);
    console.log(EI);
    if(isNaN(EA)){
        EA=0;
    }
    if(isNaN(EB)){
        EB=0;
    }
    if(isNaN(EC)){
        EC=0;
    }
    if(isNaN(ED)){
        ED=0;
    }
    if(isNaN(EE)){
        EE=0;
    }
    if(isNaN(EF)){
        EF=0;
    }
    if(isNaN(EG)){
        EG=0;
    }
    if(isNaN(EH)){
        EH=0;
    }
    if(isNaN(EI)){
        EI=0;
    }
    ContoEconomico=EA+EB+EC+ED+E5+EF+EG+EH+EI;
    document.getElementById('E-'+anno).value=ContoEconomico;
}
//riga 249
function calculateEA(anno){
    var EA1String=document.getElementById('E.A1-'+anno).value;
    var EA2String=document.getElementById('E.A2-'+anno).value;
    var EA3String=document.getElementById('E.A3-'+anno).value;
    var EA4String=document.getElementById('E.A4-'+anno).value;
    var EA5String=document.getElementById('E.A5-'+anno).value;
    var EA1=parseFloat(EA1String);
    var EA2=parseFloat(EA2String);
    var EA3=parseFloat(EA3String);
    var EA4=parseFloat(EA4String);
    var EA5=parseFloat(EA5String);
    var somma;
    console.log(EA1);
    console.log(EA2);
    console.log(EA3);
    console.log(EA4);
    console.log(EA5);
    if(isNaN(EA1)){
        EA1=0;
    }
    if(isNaN(EA2)){
        EA2=0;
    }
    if(isNaN(EA3)){
        EA3=0;
    }
    if(isNaN(EA4)){
        EA4=0;
    }
    if(isNaN(EA5)){
        EA5=0;
    }
    somma=EA1+EA2+EA3+EA4+EA5;
    document.getElementById('E.A-'+anno).value=somma;
}
//riga 254
function calculateEA5(anno){
    var EA51String=document.getElementById('E.A51-'+anno).value;
    var EA52String=document.getElementById('E.A52-'+anno).value;
    var EA51=parseFloat(EA51String);
    var EA52=parseFloat(EA52String);
    var somma;
    console.log(EA51);
    console.log(EA52);
    if(isNaN(EA51)){
        EA51=0;
    }
    if(isNaN(EA52)){
        EA52=0;
    }
    somma=EA51+EA52;
    document.getElementById('E.A5-'+anno).value=somma;
}
//riga 257
function calculateEB(anno){
    var EB1String=document.getElementById('E.B1-'+anno).value;
    var EB2String=document.getElementById('E.B2-'+anno).value;
    var EB3String=document.getElementById('E.B3-'+anno).value;
    var EB4String=document.getElementById('E.B4-'+anno).value;
    var EB5String=document.getElementById('E.B5-'+anno).value;
    var EB6String=document.getElementById('E.B6-'+anno).value;
    var EB7String=document.getElementById('E.B7-'+anno).value;
    var EB8String=document.getElementById('E.B8-'+anno).value;
    var EB9String=document.getElementById('E.B9-'+anno).value;
    var EB1=parseFloat(EB1String);
    var EB2=parseFloat(EB2String);
    var EB3=parseFloat(EB3String);
    var EB4=parseFloat(EB4String);
    var EB5=parseFloat(EB5String);
    var EB6=parseFloat(EB6String);
    var EB7=parseFloat(EB7String);
    var EB8=parseFloat(EB8String);
    var EB9=parseFloat(EB9String);
    var somma;
    console.log(EB1);
    console.log(EB2);
    console.log(EB3);
    console.log(EB4);
    console.log(EB5);
    console.log(EB6);
    console.log(EB7);
    console.log(EB8);
    console.log(EB9);
    if(isNaN(EB1)){
        EB1=0;
    }
    if(isNaN(EB2)){
        EB2=0;
    }
    if(isNaN(EB3)){
        EB3=0;
    }
    if(isNaN(EB4)){
        EB4=0;
    }
    if(isNaN(EB5)){
        EB5=0;
    }
    if(isNaN(EB6)){
        EB6=0;
    }
    if(isNaN(EB7)){
        EB7=0;
    }
    if(isNaN(EB8)){
        EB8=0;
    }
    if(isNaN(EB9)){
        EB9=0;
    }
    somma=EB1+EB2+EB3+EB4+EB5+EB6+EB7+EB8+EB9;
    document.getElementById('E.B-'+anno).value=somma;
}
//riga 259
function calculateML(anno){
    var EAString=document.getElementById('E.A-'+anno).value;
    var EB1String=document.getElementById('E.B1-'+anno).value;
    var EA=parseFloat(EAString);
    var EB1=parseFloat(EB1String);
    var differenza;
    console.log(EA);
    console.log(EB1);
    if(isNaN(EA)){
        EA=0;
    }
    if(isNaN(EB1)){
        EB1=0;
    }
    differenza=EA-EB1;
    document.getElementById('ML-'+anno).value=differenza;
}
//riga 254
function calculateEA5(anno){
    var EA51String=document.getElementById('E.A51-'+anno).value;
    var EA52String=document.getElementById('E.A52-'+anno).value;
    var EA51=parseFloat(EA51String);
    var EA52=parseFloat(EA52String);
    var somma;
    console.log(EA51);
    console.log(EA52);
    if(isNaN(EA51)){
        EA51=0;
    }
    if(isNaN(EA52)){
        EA52=0;
    }
    somma=EA51+EA52;
    document.getElementById('E.A5-'+anno).value=somma;
}
//riga 262
function calculateEB4(anno) {
    var EB41String = document.getElementById('E.B41-' + anno).value;
    var EB42String = document.getElementById('E.B42-' + anno).value;
    var EB43String = document.getElementById('E.B43-' + anno).value;
    var EB44String = document.getElementById('E.B44-' + anno).value;
    var EB45String = document.getElementById('E.B45-' + anno).value;
    var EB41 = parseFloat(EB41String);
    var EB42 = parseFloat(EB42String);
    var EB43 = parseFloat(EB43String);
    var EB44 = parseFloat(EB44String);
    var EB45 = parseFloat(EB45String);
    var somma;
    console.log(EB41);
    console.log(EB42);
    console.log(EB43);
    console.log(EB44);
    console.log(EB45);
    if (isNaN(EB41)) {
        EB41 = 0;
    }
    if (isNaN(EB42)) {
        EB42 = 0;
    }
    if (isNaN(EB43)) {
        EB43 = 0;
    }
    if (isNaN(EB44)) {
        EB44 = 0;
    }
    if (isNaN(EB45)) {
        EB45 = 0;
    }
    somma = EB41 + EB42 + EB43 + EB44 + EB45;
    document.getElementById('E.B4-' + anno).value = somma;
}

function calculateEB4(anno){
    var EB41String=document.getElementById('E.B41-'+anno).value;
    var EB42String=document.getElementById('E.B42-'+anno).value;
    var EB43String=document.getElementById('E.B43-'+anno).value;
    var EB44String=document.getElementById('E.B44-'+anno).value;
    var EB45String=document.getElementById('E.B45-'+anno).value;
    var EB41=parseFloat(EB41String);
    var EB42=parseFloat(EB42String);
    var EB43=parseFloat(EB43String);
    var EB44=parseFloat(EB44String);
    var EB45=parseFloat(EB45String);
    var valore;
    if(isNaN(EB41)){
        EB41=0;
    }
    if(isNaN(EB42)){
        EB42=0;
    }
    if(isNaN(EB43)){
        EB43=0;
    }
    if(isNaN(EB44)){
        EB44=0;
    }
    if(isNaN(EB45)){
        EB45=0;
    }
    valore=EB41+EB42+EB43+EB44+EB45;
    document.getElementById('E.B4-'+anno).value=valore;
}

function calculateEBITDA(anno){
    var MLString=document.getElementById('ML-'+anno).value;
    var EB2String=document.getElementById('E.B2-'+anno).value;
    var EB3String=document.getElementById('E.B3-'+anno).value;
    var EB4String=document.getElementById('E.B4-'+anno).value;
    var EB41=parseFloat(MLString);
    var EB42=parseFloat(EB2String);
    var EB43=parseFloat(EB3String);
    var EB44=parseFloat(EB4String);
    var valore;
    if(isNaN(ML)){
        ML=0;
    }
    if(isNaN(EB2)){
        EB2=0;
    }
    if(isNaN(EB3)){
        EB3=0;
    }
    if(isNaN(EB4)){
        EB4=0;
    }
    valore=ML-EB2+EB3+EB4;
    document.getElementById('EBITDA-'+anno).value=valore;
}

function calculateEB5(anno){
    var EB51String=document.getElementById('E.B51-'+anno).value;
    var EB52String=document.getElementById('E.B52-'+anno).value;
    var EB53String=document.getElementById('E.B53-'+anno).value;
    var EB54String=document.getElementById('E.B54-'+anno).value;
    var EB51=parseFloat(EB51String);
    var EB52=parseFloat(EB52String);
    var EB53=parseFloat(EB53String);
    var EB54=parseFloat(EB54String);
    var valore;
    if(isNaN(EB51)){
        EB51=0;
    }
    if(isNaN(EB52)){
        EB52=0;
    }
    if(isNaN(EB53)){
        EB53=0;
    }
    if(isNaN(EB54)){
        EB54=0;
    }
    valore=EB51+EB52+EB53+EB54;
    document.getElementById('E.B5-'+anno).value=valore;
}
/*function calculateE=B (anno) {
    var EAString=document.getElementById('E.A-'+anno).value;
    var EBString=document.getElementById('E.B-'+anno).value;
    var EA=parseFloat(EAString);
    var EB=parseFloat(EBString);
    var valore;
    if(isNaN(EA)){
        EA=0;
    }
    if(isNaN(EB)){
        EB=0;
    }
    valore=EA-EB;
    document.getElementById('E=B-'+anno).value=valore;
}*/
function calculateEC(anno){
    var EC1String=document.getElementById('E.C1-'+anno).value;
    var EC2String=document.getElementById('E.C2-'+anno).value;
    var EC3String=document.getElementById('E.C3-'+anno).value;
    var EC4String=document.getElementById('E.C4-'+anno).value;
    var EC1=parseFloat(EC1String);
    var EC2=parseFloat(EC2String);
    var EC3=parseFloat(EC3String);
    var EC4=parseFloat(EC4String);
    var valore;
    if(isNaN(EC1)){
        EC1=0;
    }
    if(isNaN(EC2)){
        EC2=0;
    }
    if(isNaN(EC3)){
        EC3=0;
    }
    if(isNaN(EC4)){
        EC4=0;
    }
    valore=EC1+EC2-EC3-EC4;
    document.getElementById('E.C-'+anno).value=valore;
}
function calculateEC1(anno){
    var EC11String=document.getElementById('E.C11-'+anno).value;
    var EC12String=document.getElementById('E.C12-'+anno).value;
    var EC13String=document.getElementById('E.C13-'+anno).value;
    var EC11=parseFloat(EC11String);
    var EC12=parseFloat(EC12String);
    var EC13=parseFloat(EC13String);
    var valore;
    if(isNaN(EC11)){
        EC11=0;
    }
    if(isNaN(EC12)){
        EC12=0;
    }
    if(isNaN(EC13)){
        EC13=0;
    }
    valore=EC11+EC12+EC13;
    document.getElementById('E.C1-'+anno).value=valore;
}
function calculateEC2(anno){
    var EC21String=document.getElementById('E.C21-'+anno).value;
    var EC22String=document.getElementById('E.C22-'+anno).value;
    var EC23String=document.getElementById('E.C23-'+anno).value;
    var EC24String=document.getElementById('E.C24-'+anno).value;
    var EC21=parseFloat(EC21String);
    var EC22=parseFloat(EC22String);
    var EC23=parseFloat(EC23String);
    var EC24=parseFloat(EC24String);
    var valore;
    if(isNaN(EC21)){
        EC21=0;
    }
    if(isNaN(EC22)){
        EC22=0;
    }
    if(isNaN(EC23)){
        EC23=0;
    }
    if(isNaN(EC24)){
        EC24=0;
    }
    valore=EC21+EC22+EC23+EC24;
    document.getElementById('E.C2-'+anno).value=valore;
}
function calculateEC21(anno){
    var EC211String=document.getElementById('E.C211-'+anno).value;
    var EC212String=document.getElementById('E.C212-'+anno).value;
    var EC213String=document.getElementById('E.C213-'+anno).value;
    var EC215String=document.getElementById('E.C215-'+anno).value;
    var EC211=parseFloat(EC211String);
    var EC212=parseFloat(EC212String);
    var EC213=parseFloat(EC213String);
    var EC215=parseFloat(EC215String);
    var valore;
    if(isNaN(EC211)){
        EC211=0;
    }
    if(isNaN(EC212)){
        EC212=0;
    }
    if(isNaN(EC213)){
        EC213=0;
    }
    if(isNaN(EC215)){
        EC215=0;
    }
    valore=EC211+EC212+EC213+EC215;
    document.getElementById('E.C21-'+anno).value=valore;
}
function calculateEC24(anno){
    var EC241String=document.getElementById('E.C241-'+anno).value;
    var EC245String=document.getElementById('E.C245-'+anno).value;
    var EC242String=document.getElementById('E.C242-'+anno).value;
    var EC244String=document.getElementById('E.C244-'+anno).value;
    var EC241=parseFloat(EC241String);
    var EC245=parseFloat(EC245String);
    var EC242=parseFloat(EC242String);
    var EC244=parseFloat(EC244String);
    var valore;
    if(isNaN(EC241)){
        EC241=0;
    }
    if(isNaN(EC245)){
        EC245=0;
    }
    if(isNaN(EC242)){
        EC242=0;
    }
    if(isNaN(EC244)){
        EC244=0;
    }
    valore=EC241+EC245+EC242+EC244;
    document.getElementById('E.C24-'+anno).value=valore;
}
function calculateEC3(anno){
    var EC31String=document.getElementById('E.C31-'+anno).value;
    var EC32String=document.getElementById('E.C32-'+anno).value;
    var EC33String=document.getElementById('E.C33-'+anno).value;
    var EC35String=document.getElementById('E.C35-'+anno).value;
    var EC31=parseFloat(EC31String);
    var EC32=parseFloat(EC32String);
    var EC33=parseFloat(EC33String);
    var EC35=parseFloat(EC35String);
    var valore;
    if(isNaN(EC31)){
        EC31=0;
    }
    if(isNaN(EC32)){
        EC32=0;
    }
    if(isNaN(EC33)){
        EC33=0;
    }
    if(isNaN(EC35)){
        EC35=0;
    }
    valore=EC31+EC32+EC33+EC35;
    document.getElementById('E.C3-'+anno).value=valore;
}
function calculateED(anno){
    var ED1String=document.getElementById('E.D1-'+anno).value;
    var ED2String=document.getElementById('E.D2-'+anno).value;
    var ED1=parseFloat(ED1String);
    var ED2=parseFloat(ED2String);
    var valore;
    if(isNaN(ED1)){
        ED1=0;
    }
    if(isNaN(ED2)){
        ED2=0;
    }
    valore=ED1-ED2;
    document.getElementById('E.D-'+anno).value=valore;
}
function calculateED1(anno){
    var ED11String=document.getElementById('E.D11-'+anno).value;
    var ED12String=document.getElementById('E.D12-'+anno).value;
    var ED13String=document.getElementById('E.D13-'+anno).value;
    var ED11=parseFloat(ED11String);
    var ED12=parseFloat(ED12String);
    var ED13=parseFloat(ED13String);
    var valore;
    if(isNaN(ED11)){
        ED11=0;
    }
    if(isNaN(ED12)){
        ED12=0;
    }
    if(isNaN(ED13)){
        ED13=0;
    }
    valore=ED11+ED12+ED13;
    document.getElementById('E.D1-'+anno).value=valore;
}
function calculateEE(anno){
    var EE1String=document.getElementById('E.E1-'+anno).value;
    var EE2String=document.getElementById('E.E2-'+anno).value;
    var EE1=parseFloat(EE1String);
    var EE2=parseFloat(EE2String);
    var valore;
    if(isNaN(EE1)){
        EE1=0;
    }
    if(isNaN(EE2)){
        EE2=0;
    }
    valore=EE1-EE2;
    document.getElementById('E.E-'+anno).value=valore;
}
function calculateEE1(anno){
    var EE11String=document.getElementById('E.E11-'+anno).value;
    var EE12String=document.getElementById('E.E12-'+anno).value;
    var EE11=parseFloat(EE11String);
    var EE12=parseFloat(EE12String);
    var valore;
    if(isNaN(EE11)){
        EE11=0;
    }
    if(isNaN(EE12)){
        EE12=0;
    }
    valore=EE11+EE12;
    document.getElementById('E.E1-'+anno).value=valore;
}
function calculateEE12(anno){
    var EE121String=document.getElementById('E.E121-'+anno).value;
    var EE122String=document.getElementById('E.E122-'+anno).value;
    var EE121=parseFloat(EE121String);
    var EE122=parseFloat(EE122String);
    var valore;
    if(isNaN(EE121)){
        EE121=0;
    }
    if(isNaN(EE122)){
        EE122=0;
    }
    valore=EE121+EE122;
    document.getElementById('E.E12-'+anno).value=valore;
}
function calculateEE2(anno){
    var EE21String=document.getElementById('E.E21-'+anno).value;
    var EE22String=document.getElementById('E.E22-'+anno).value;
    var EE23String=document.getElementById('E.E23-'+anno).value;
    var EE21=parseFloat(EE21String);
    var EE22=parseFloat(EE22String);
    var EE23=parseFloat(EE23String);
    var valore;
    if(isNaN(EE21)){
        EE21=0;
    }
    if(isNaN(EE22)){
        EE22=0;
    }
    if(isNaN(EE23)){
        EE23=0;
    }
    valore=EE21+EE22+EE23;
    document.getElementById('E.E2-'+anno).value=valore;
}
function calculateEE(anno){
    var EEString=document.getElementById('E.E-'+anno).value;
    var EDString=document.getElementById('E.D-'+anno).value;
    var ECString=document.getElementById('E.C-'+anno).value;
    var EBString=document.getElementById('E=B-'+anno).value;
    var EE=parseFloat(EEString);
    var ED=parseFloat(EDString);
    var EC=parseFloat(ECString);
    var EB=parseFloat(EBString);
    var valore;
    if(isNaN(EE)){
        EE=0;
    }
    if(isNaN(ED)){
        ED=0;
    }
    if(isNaN(EC)){
        EC=0;
    }
    if(isNaN(EB)){
        EB=0;
    }
    valore=EE+ED+EC+EB;
    document.getElementById('E=E-'+anno).value=valore;
}
function calculateEF(anno){
    var EF1String=document.getElementById('E.F1-'+anno).value;
    var EF2String=document.getElementById('E.F2-'+anno).value;
    var EF3String=document.getElementById('E.F3-'+anno).value;
    var EF4String=document.getElementById('E.F4-'+anno).value;
    var EF1=parseFloat(EF1String);
    var EF2=parseFloat(EF2String);
    var EF3=parseFloat(EF3String);
    var EF4=parseFloat(EF4String);
    var valore;
    if(isNaN(EF1)){
        EF1=0;
    }
    if(isNaN(EF2)){
        EF2=0;
    }
    if(isNaN(EF3)){
        EF3=0;
    }
    if(isNaN(EF4)){
        EF4=0;
    }
    valore=EF1+EF2+EF3+EF4;
    document.getElementById('E.F-'+anno).value=valore;
}
/*function calculateE=F(anno){
    var EEString=document.getElementById('E=E-'+anno).value;
    var EFString=document.getElementById('E.F-'+anno).value;
    var EE=parseFloat(EEString);
    var EF=parseFloat(EFString);
    var valore;
    if(isNaN(EE)){
        EE=0;
    }
    if(isNaN(EF)){
        EF=0;
    }
    valore=EE+EF;
    document.getElementById('E.E12-'+anno).value=valore;
}*/