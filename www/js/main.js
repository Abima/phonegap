function onBodyLoad(){
    $(document).addEventListener('deviceready',onDeviceReady,false); //El evento deviceready es similar o lo mismo que el evento ready de una página web
}

function onDeviceReady(){
    $('#resultado').html('Phonegap esta en marcha');   
    
    var verAcelerometro = navigator.watchAcceleration(onInfo,onError,{frequency:2000}); //Ayuda a ver en un determinado tiempo el acelerometro
    
    navigator.accelerometer.clear(verAcelerometro); //Parar el acelerometro
}
/*

function onInfo(evento){ //Nos proporciona el evento de accelerometro
    $('#resultado').html(
        'Aceleración en X: ' + evento.x + '<br>',
        'Aceleración en Y: ' + evento.y + '<br>',
        'Aceleración en Z: ' + evento.z + '<br>',
        'TienpoEjecucion: ' + evento.timestamp
    );
}

function onError(){
    alert('No tienes Acelerometro');   
}


function notificaciones(){
    $('#resultado2').html('Area de Notificaciones');   
    
    $('#b_alerta').bind('tap'function(){
        navigator.notification.alert('Esto es una Lerta',alertCallback,'Cierrame');
    });
    
    $('#b_confirmacion').bind('tap',function(){
        navigator.notification.confirm('Esto es una confirmación',confirmCallback,'Confirmación',['si','No']);
    });
    
    $('#b_prompt').bind('tap',function(){
        navigator.notification.prompt('Esto es un prompt',promptCallback,'Prompt',['si','cancelar'],'Tu veras...');
    });
    
    $('#b_ruido').bind('tap',function(){
        navigator.notification.beep(2);
        navigator.notification.vibrate(1000);   
    });
    
}

function alertCallback(){
    $('#resultado2').append('La alerta se ha cerrado');   
}

function confirmCallback(buttomIndex){
    $('#resultado2').append('Ha habido una confirmación y han pulsado el boton' + buttomIndex + '<br>');   
}

function prompt(buttomIndex, input){
    $('#resultado2').append('Ha habido un prompt y han pulsado el boton' + buttomIndex + ' y han escrito' + input + '<br>');   
}







*/
