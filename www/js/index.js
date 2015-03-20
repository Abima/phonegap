/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function onBodyLoad(){
    document.addEventListener('deviceready',onDeviceReady,false); //El evento deviceready es similar o lo mismo que el evento ready de una página web
}

function onDeviceReady(){
    $('#resultado').html('Phonegap esta en marcha');   
    
    var verAcelerometro = navigator.watchAcceleration(onInfo,onError,{frequency:2000}); //Ayuda a ver en un determinado tiempo el acelerometro
    
    navigator.accelerometer.clear(verAcelerometro); //Parar el acelerometro
}

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







