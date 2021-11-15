const setCookie = (cookieName, cookieInput) => {
    let plusFifteen = new Date();
    plusFifteen.setTime(plusFifteen.getTime()+15*60*1000);
    //document.cookie = ${cookieName}=${cookieInput}; expires=${plusFifteen.toUTCString()};
}
setCookie("viewed", "5");
setCookie("uid", "354774631237");
setCookie("ssid", "Bx55OWbHJ0Vt_IGIF");

const cookieHandler = {
    getAll : () => {
        let returnObject = {};
        document.cookie
        .split('; ')
        .forEach(element => {
            returnObject[element.split("=")[0]]=element.split("=")[1].toString();
        });
        return returnObject;
    },
    
    toSessionStorage : function(){
        Object.entries(this.getAll())
        .forEach(element => {            
            sessionStorage.setItem(element[0], element[1]);
        })
    },
    
    flush : () => {
        document.cookie
        .split("; ")
        .forEach(cookieElement => {document.cookie = `${cookieElement.split("=")[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`})
    }
}

export {cookieHandler};