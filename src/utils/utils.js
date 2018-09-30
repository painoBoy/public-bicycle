export default {
    formateDate(time){
    
        if(!time) return '';
        let date = new Date(time);
        let m    = date.getMinutes();
        let s    = date.getSeconds();
        m = m <10 ?'0'+ m : m;
        s = s <10 ?'0'+ s : s;
        return date.getFullYear() +'-'+(date.getMonth()+1)+'-'+date.getDate() + ' '+date.getHours()+':'+m+':'+s; 
    }
}