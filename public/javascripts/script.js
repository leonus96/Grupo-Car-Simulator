var score = 0;
var resolving = 0;


/*Chronometer*/
var chronometer;
function load() {
    var counter_s = 0;
    var counter_m = 40;
    s = document.getElementById('seconds');
    m = document.getElementById('minutes');
    chronometer =  window.setInterval(()=>{
        if(counter_s == 0){
            if(counter_m == 0){
                check(true);
                return;
            }
            counter_m--;
            if(counter_m <= 9)
                m.innerHTML = '0' + counter_m;
            else
                m.innerHTML = counter_m + '';
            counter_s = 59;
        }
        if(counter_s <= 9)
            s.innerHTML = '0' + counter_s;
        else
            s.innerHTML = counter_s + '';
        counter_s--;
    }, 1000);
}

function stop() {
    clearInterval(chronometer);
    check();
}


/* Check */
function check(time=false) {
    var corrects = Array.apply(null, Array(40)).map(Number.prototype.valueOf,0);
    for(var i = 0; i<40; i++){
        if(document.querySelector('input[name="question' + i + '"]:checked')){
            resolving++;
            var q_name = document.querySelector('input[name="question' + i + '"]:checked').id;
            var q_alternative = q_name.substring(0, 1);
            var q_number = q_name.substring(1, 3);
            if(questionData[q_number].response == q_alternative){
                score++;
                corrects[i] = 1;
            }
        }
    }
    if(resolving != 40 && !time){
        if(confirm(
            'Existen preguntas las cuales no ha seleccionado, por favor revisar y resolver las preguntas.\n' +
            'Preguntas sin resolver: ' + (40 - resolving) + '\n' +
            'Preguntas resueltas: ' + resolving + '\n' +
            '¿Corregir de todas formas  ?',
        ) == false){
            return;
        }
    }

    var form = document.createElement("form");
    var element1 = document.createElement("input");

    form.method = "POST";
    form.action = "/simulador/check";

    element1.value=score;
    element1.name="score";
    form.appendChild(element1);

    document.body.appendChild(form);

    form.submit();
}
document.querySelector('.btn-check').addEventListener("click", stop);
load();
