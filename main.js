function get_para1(){
    var inputs =[];
    for (var i = 1; i < 6; i++){
    inputs.push(document.getElementById("para_1_input_" + i).value);
    }
    document.getElementById("para_1_text").innerHTML = inputs.join(" ");
    console.log(inputs);
}
function get_para2(){
    var inputs_2 = [];
    for (var c = 1; c < 6; c++){
        inputs_2.push(document.getElementById("para_2_input_" + c).value);
    }
    document.getElementById("para_2_text").innerHTML = inputs_2.join(" ");
    console.log(inputs_2);
}