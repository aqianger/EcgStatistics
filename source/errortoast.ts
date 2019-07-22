declare let bootoast:any;
 function errortoast(msg:string){
    console.log("error---------------" + msg);
    bootoast({ 
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