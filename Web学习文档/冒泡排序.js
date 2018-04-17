let arr=[11111,888888,222222,222,666,1];
let temp;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }  
}
console.log(arr);