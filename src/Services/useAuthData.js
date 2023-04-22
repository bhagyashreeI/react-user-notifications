import React,{ useState,useEffect } from "react";

function useAuthData(ustatus,utype,utoken) {
  const [data, setData] = useState(
    {
        utoken:null,
        utype:null,
        authenticated:false
    }
  );

  const setAuthData = (ustatus,utype,utoken) => {
    console.log("ggg",utoken);
    localStorage.setItem("authenticated", ustatus);
    localStorage.setItem("utoken", utoken);
    localStorage.setItem("utype", utype);
    setData({...data,utype:utype,utoken:utoken,authenticated:true})
  }
  const getAuthData = () => {
    return { 'utype':localStorage.getItem('utype'),
    'utoken':localStorage.getItem('utoken'),
    'authenticated':localStorage.getItem('authenticated')
  }
  
       
    
    // setData({utype:localStorage.getItem('utype'),utoken:localStorage.getItem('utoken'),
    // authenticated:localStorage.getItem('authenticated')})
  }
  useEffect(() => {
  }, [data.utype]);

  return ({data,setAuthData,getAuthData});
}

export default useAuthData;
