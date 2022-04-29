
// on fait l'operation de deux nombre;
var number1 = '';
var number2 = '';
var equal_click = false;
var operation = '+';
var click_op = false;
var click_puissance = false;
var puissance;
var set_puissance = false;


// fonction de verification de nombre decimal
function is_decimal() {
    var value = String(document.forme.screen.value);
    if (value.includes('.')) {
        return true;
    } else {
        document.forme.screen.value += '.';
    }
}

// Fonction effacer l'écran
function clear_screen() {
    number1 = '';
    number2 = '';
    document.forme.screen.value = 0;
    equal_click = false;
    click_op = false;
    click_puissance = false;
    set_puissance = false;
}


// Afficher a les chiffre a l'écran 
function set_screen( $value){
    var screen_value = document.forme.screen.value;
    if ( (screen_value != 0 || String(screen_value).length > 1) && String(screen_value).length < 16 && !click_op ) {
        document.forme.screen.value = document.forme.screen.value + $value;
    }
     else if(screen_value == 0) {
        document.forme.screen.value = $value;
    }
    else {
        document.forme.screen.value = document.forme.screen.value;
    }
    
    if (click_op) {
        document.forme.screen.value = $value;
        click_op = false;
    }
}


// Fonction pour choisir l'operation
function set_operation($op) {
    $value = parseFloat(document.forme.screen.value);
    equal_click = false;
    switch ($op) {
        case '+/-':
            document.forme.screen.value = -1 * $value;
            break;
        case '÷':
            number1 += String($value) + '/';
            operation = '/';
            click_op = true;
            break;
        case 'x':
            number1 += String($value) + '*';
            operation = '*';
            click_op = true;
            break;
        case '+':
            number1 += String($value) + '+';
            operation = '+';
            click_op = true;
            break;
        case '-':
            number1 += String($value) + '-';
            operation = '-';
            click_op = true;
            break;
        default:
            break;
    }
}


// Fonction pour afficher le resultat
function equal() {
    if (!equal_click) {
        number2 = String(document.forme.screen.value);
        $opera = number1 + number2;
        equal_click = true;
    } else {
        number1 = String(document.forme.screen.value);
        $opera = number1 + operation + number2;
        number1 = '';
    }
    document.forme.screen.value = eval($opera) ;
    click_op = true;
    
    // A REFAIRE 29-04-22
    // if (click_puissance) {
    //     alert(number1);
    //     alert(number2);
    //     if (set_puissance) {
    //         number2 = document.forme.screen.value;
    //         set_puissance = true;
    //     }
    //     switch (puissance) {
    //         case 'EE':
    //             document.forme.screen.value = expo10(number1,number2);
    //             number1 = expo10(number1,number2);
    //             break;
    //         case 'yˣ':
    //             document.forme.screen.value = Math.pow(parseFloat(number1), parseFloat(number2));
    //             break;
    //         case 'ˣ√y':
    //             document.forme.screen.value = Math.pow(parseFloat(number1), (1 / parseFloat(number2)));
    //             break;
    //         default:
    //             break;
    //     }
    // }
}

// Fonctions mathematiques

function math_fct($fct) {
    click_op = true;
    switch ($fct) {
        case '1/x':
            if (parseFloat(document.forme.screen.value)==0) {
                document.forme.screen.value = 'Error';
            } else {
                document.forme.screen.value = 1 / parseFloat(document.forme.screen.value);
            }
            break;
        case 'X²':
            document.forme.screen.value = Math.pow(parseFloat(document.forme.screen.value), 2);
            break;
        case 'X³':
            document.forme.screen.value = Math.pow(parseFloat(document.forme.screen.value), 3);
            break;
        case 'X!':
            document.forme.screen.value = factorielle(parseFloat(document.forme.screen.value));
            break;
        case '√':
            document.forme.screen.value = Math.sqrt(parseFloat(document.forme.screen.value));
            break;
        case 'log':
            document.forme.screen.value = Math.log10(parseFloat(document.forme.screen.value));
            break;
        case 'sin':
            document.forme.screen.value = Math.sin(parseFloat(document.forme.screen.value));
            break;
        case 'cos':
            document.forme.screen.value = Math.cos(parseFloat(document.forme.screen.value));
            break;
        case 'tan':
            document.forme.screen.value = Math.tan(parseFloat(document.forme.screen.value));
            break;
        case 'ln':
            document.forme.screen.value = Math.log(parseFloat(document.forme.screen.value));
            break;
        case 'sinh':
            document.forme.screen.value = Math.sinh(parseFloat(document.forme.screen.value));
            break;
        case 'cosh':
            document.forme.screen.value = Math.cosh(parseFloat(document.forme.screen.value));
            break;
        case 'tanh':
            document.forme.screen.value = Math.tanh(parseFloat(document.forme.screen.value));
            break;
        case '∏':
            document.forme.screen.value = Math.PI;
            break;
        case 'rnd':
            document.forme.screen.value = Math.random();
            break;
        case '%':
            document.forme.screen.value = parseFloat(document.forme.screen.value) / 100;
            break;
        case 'eX':
            document.forme.screen.value = Math.exp(parseFloat(document.forme.screen.value));
            break;
        default:
            break;
    }
}

// Definition de la fonction factorielle
function factorielle($value) {
    var facto = 1;
    if ($value == 0) {
        return 1;
    } else {
        for (let i = 1; i <= $value; i++) {
            facto *= i;
        }
        return facto;
    }
}

// Definition de la fonction pour les puissance niéme
function fct_puissance(pst){
    if (!click_puissance) {
        number1 = document.forme.screen.value;
        click_puissance = true;
    }
    click_op = true;
    puissance = pst;
}

// Fonction puissance de 10
function expo10(base, expo){
    return parseFloat(base) * Math.pow(10,parseFloat(expo));
}
