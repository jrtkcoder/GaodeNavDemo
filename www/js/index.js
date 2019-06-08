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
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		
        console.log('>>>>>>>>>>>>>>>>>Geolocation.getCurrentPosition:');
		var successCallback = function(result){
			console.log('>>>>>>>>>>>>>>>>>successCallback:');
			console.log(result);
			console.log('>>>>>>>>>>>>>>>>>Navigation.navigation:');
			//let start = {lat:28.227416, lng: 112.881383};
			let start = {lat:result.latitude, lng: result.longitude};
			let end = {lat:28.214546, lng: 112.892288};
			Navigation.navigation(start, end, 1);
		};
		var errorCallback = function(result){
			console.log('>>>>>>>>>>>>>>>>>errorCallback:');
			console.log(result);
		};
		GeolocationPlugin.getCurrentPosition(successCallback, errorCallback);
        
    }
};

app.initialize();