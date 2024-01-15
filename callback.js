let value=1;

function func(){
    value=2;
}

console.log("without callback->", value);

doSomething(() => {
    value = 3;
  });


func1(()=>{
    value = 4;
    }
    //console.log("Callback executed");
);

console.log("Using callback->", value);