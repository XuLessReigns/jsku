var strOper = {
    add:function(str1,str2){
        var rowArr = str1.split("|");
        var isAdd = true;
        for(var i = 0; i < rowArr.length; i++){
            var colArr1 = rowArr[i].split("#");
            if(colArr1[0] == str2.split("#")[0]){
                //对id1所在的行中的列进行数量更新
                isAdd = false;
                colArr1[4] = parseInt(colArr1[4]) + parseInt(str2.split("#")[4]);
                rowArr[i] = colArr1.join("#");
                break;
            }
        }
        if(isAdd){
            rowArr.push(str2);
        }
        return rowArr.join("|");
    },
    get:function(str){
        var newArr = [];
        var row = str == "" ? [] : str.split("|");
        for(var i = 0; i < row.length; i++){
            var colArr = row[i].split("#");
            var obj = {id:colArr[0],name:colArr[1],img:colArr[2],price:colArr[3],count:colArr[4]};
            newArr.push(obj);
        }
        return newArr;
    },
    del:function(str,id){
        var newArr = [];
        var row = str.split("|");
        for(var i = 0; i < row.length; i++){
            var colArr = row[i].split("#");
            if(colArr[0] != id){
                newArr.push(colArr.join("#"));
            }
        }
        return newArr.join("|");
    },
    counter:function(str,id,type){
        var rowArr = str.split("|");
        for(var i = 0; i < rowArr.length; i++){
            var colArr = rowArr[i].split("#");
            if(colArr[0] == id){
                if(type === true)
                    colArr[4] = parseInt(colArr[4]) + 1;
                else if(type === false)
                    colArr[4] = parseInt(colArr[4]) - 1;
                rowArr[i] = colArr.join("#");
                break;
            }
        }
        return rowArr.join("|");
    }
};
