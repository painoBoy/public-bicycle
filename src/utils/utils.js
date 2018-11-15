export default {
    formateDate(time){
    
        if(!time) return '';
        let date = new Date(time);
        let m    = date.getMinutes();
        let s    = date.getSeconds();
        let h    = date.getHours()
        m = m <10 ?'0'+ m : m;
        s = s <10 ?'0'+ s : s;
        h = h <12 ?'0'+ h : h;

        return date.getFullYear() +'-'+(date.getMonth()+1)+'-'+date.getDate() + ' '+h+':'+m+':'+s; 
    },
    pagination(data,callback){
        return {
            onChange:(current)=>{
                callback(current)
            },
            current:data.result.page,
            pageSize:data.result.page_size,
            total: data.result.total_count,
            showTotal:()=>{
                return `共${data.result.total_count}条`
            },
            showQuickJumper:true
        }
    },
}