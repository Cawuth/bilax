COSTANTI
PP:122,
PPA:123,
PPA1:124,
PPA2:125,
PPA3:126,
PPA4:127,
PPA5:128,
PPA6:129,
PPA7:130,
PPA7A:131,
PPA7N:132,
PPA7O:133,
PPA7P:134,
PPA7Q:135,
PPA7R:136,
PPA7S:137,
PPA7B:138,
PPA7T:139,
PPA7U:140,
PPA7V:141,
PPA7W:142,
PPA7J:143,
PPA7J1:144,
PPA7J2:145,
PPA7L:146,
PPA7M:147

MASTER
case 'PP':
	this.startPP(anno);
	break;
case 'PP.A':
	this.startPPA(anno);
	break;
case 'PP.A1':
	this.startPPA1(anno);
	break;
case 'PP.A2':
	this.startPPA2(anno);
	break;
case 'PP.A3':
	this.startPPA3(anno);
	break;
case 'PP.A4':
	this.startPPA4(anno);
	break;
case 'PP.A5':
	this.startPPA5(anno);
	break;
case 'PP.A6':
	this.startPPA6(anno);
	break;
case 'PP.A7':
	this.startPPA7(anno);
	break;
case 'PP.A7a':
	this.startPPA7A(anno);
	break;
case 'PP.A7n':
	this.startPPA7N(anno);
	break;
case 'PP.A7o':
	this.startPPA7O(anno);
	break;
case 'PP.A7p':
	this.startPPA7P(anno);
	break;
case 'PP.A7q':
	this.startPPA7Q(anno);
	break;
case 'PP.A7r':
	this.startPPA7R(anno);
	break;
case 'PP.A7s':
	this.startPPA7S(anno);
	break;
case 'PP.A7b':
	this.startPPA7B(anno);
	break;
case 'PP.A7t':
	this.startPPA7T(anno);
	break;
case 'PP.A7u':
	this.startPPA7U(anno);
	break;
case 'PP.A7v':
	this.startPPA7V(anno);
	break;
case 'PP.A7w':
	this.startPPA7W(anno);
	break;
case 'PP.A7j':
	this.startPPA7J(anno);
	break;
case 'PP.A7j1':
	this.startPPA7J1(anno);
	break;
case 'PP.A7j2':
	this.startPPA7J2(anno);
	break;
case 'PP.A7l':
	this.startPPA7L(anno);
	break;
case 'PP.A7m':
	this.startPPA7M(anno);
	break;




FUNZIONI START
startPP(anno){
},
startPPA(anno){
	this.calculatePP(anno);
},
startPPA1(anno){
	this.calculatePPA(anno);
},
startPPA2(anno){
	this.calculatePPA(anno);
},
startPPA3(anno){
	this.calculatePPA(anno);
},
startPPA4(anno){
	this.calculatePPA(anno);
},
startPPA5(anno){
	this.calculatePPA(anno);
},
startPPA6(anno){
	this.calculatePPA(anno);
},
startPPA7(anno){
	this.calculatePPA(anno);
},
startPPA7A(anno){
	this.calculatePPA7(anno);
},
startPPA7N(anno){
	this.calculatePPA7(anno);
},
startPPA7O(anno){
	this.calculatePPA7(anno);
},
startPPA7P(anno){
	this.calculatePPA7(anno);
},
startPPA7Q(anno){
	this.calculatePPA7(anno);
},
startPPA7R(anno){
	this.calculatePPA7(anno);
},
startPPA7S(anno){
	this.calculatePPA7(anno);
},
startPPA7B(anno){
	this.calculatePPA7(anno);
},
startPPA7T(anno){
	this.calculatePPA7(anno);
},
startPPA7U(anno){
	this.calculatePPA7(anno);
},
startPPA7V(anno){
	this.calculatePPA7(anno);
},
startPPA7W(anno){
	this.calculatePPA7(anno);
},
startPPA7J(anno){
	this.calculatePPA7(anno)
},
startPPA7J1(anno){
	this.calculatePPA7J(anno);
},
startPPA7J2(anno){
	this.calculatePPA7J(anno);
},
startPPA7L(anno){
	this.calculatePPA7(anno);
},
startPPa7M(anno){
	this.calculatePPA7(anno);
}


FUNZIONI CALCULATE
calculatePP(anno){
	let index_anno=2019-parseInt(anno);
	this.row[this.PP].values[index_anno].value=this.row[this.PPA].values[index_anno].value+this.row[this.PPB].values[index_anno].value+this.row[this.PPC].values[index_anno].value+this.row[this.PPC].values[index_anno].value+this.row[this.PPD].values[index_anno].value+this.row[this.PPE].values[index_anno].value;
	this.startPP(anno);
},
calculatePPA(anno){
	let index_anno=2019-parseInt(anno);
	this.row[this.PPA].values[index_anno].value=this.row[this.PPA1].values[index_anno].value+this.row[this.PPA2].values[index_anno].value+this.row[this.PPA3].values[index_anno].value+this.row[this.PPA4].values[index_anno].value+this.row[this.PPA5].values[index_anno].value+this.row[this.PPA6].values[index_anno].value+this.row[this.PPA7].values[index_anno].value+this.row[this.PPA8].values[index_anno].value+this.row[this.PPA9].values[index_anno].value+this.row[this.PPAA].values[index_anno].value;
	this.startPPA(anno);
},
calculatePPA7(anno){
	let index_anno=2019-parseInt(anno);
	this.row[this.PPA7].values[index_anno].value=this.row[this.PPA7A].values[index_anno].value+this.row[this.PPA7N].values[index_anno].value+this.row[this.PPA7O].values[index_anno].value+this.row[this.PPA7P].values[index_anno].value+this.row[this.PPA7Q].values[index_anno].value+this.row[this.PPA7R].values[index_anno].value+this.row[this.PPA7S].values[index_anno].value+this.row[this.PPA7B].values[index_anno].value+this.row[this.PPA7T].values[index_anno].value+this.row[this.PPA7U].values[index_anno].value+this.row[this.PPA7V].values[index_anno].value+this.row[this.PPA7W].values[index_anno].value+this.row[this.PPA7J].values[index_anno].value+this.row[this.PPA7L].values[index_anno].value+this.row[this.PPA7M].values[index_anno].value;
	this.startPPA7(anno);
},
calculatePPA7J(anno){
	let index_anno=2019-parseInt(anno);
	this.row[this.PPA7J].values[index_anno].value=this.row[this.PPA7J1].values[index_anno].value+this.row[this.PPA7J2].values[index_anno].value;
	this.startPPA7J(anno);
}