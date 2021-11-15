const setCookie = (tokenInput) => {
    let plusFifteen = new Date();
    plusFifteen.setTime(plusFifteen.getTime()+15*60*1000);
    document.cookie = `token=${tokenInput}; expires=${plusFifteen.toUTCString()}`;
    
}



export default setCookie;