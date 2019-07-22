 function errortoast(msg:string){
    console.log("error---------------" + msg);
    window.bootoast.toast({ 
        message: msg, 
        type: 'danger', 
        position:'right-bottom', 
        timeout:2 
      });
	//mui.toast(msg);
	/*mui.alert(msg);*/
	throw {
		msg: msg
	};

};
export default errortoast;