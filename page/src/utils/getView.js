export default ()=>{
    let userViewss=JSON.parse(sessionStorage.getItem("userInfo"));
    if(userViewss){
        return userViewss.userViews
    }else{
        return []
    }
   
}