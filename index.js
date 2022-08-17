console.log('hi')

// <script async>
// fetch('https://ipapi.co/country/')
//     .then(function(response) {
//         response.text().then(txt => {
//             let easter = ['AE', 'BH', 'CY', 'EG', 'IR', 'IQ', 'IL', 'JO', 'KW', 'LB', 'OM', 'QA','SA', 'SY', 'TR', 'YE', 'DZ', 'EH', 'LY', 'MA', 'SD', 'TN', 'SS', 'IN', 'PK'];
//             if (easter.includes(txt)) {
//                 (function f() { var widget_key = '2484172bec46f0d949814f774e384e09'; window.leadCM = { widget_key: widget_key, }; var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true; em.src = 'https://app.convolo.ai/js/icallback.js?v=' + Math.random() + '&key=' + widget_key + '&uri=' + encodeURIComponent(window.location.href); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s); })();
//             } else {
//                 (function f() { var widget_key = "7ec27fa6d3df639b2075532161c17917"; window.leadCM = { widget_key: widget_key, }; var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true; em.src = 'https://app.leadconnect.cc/js/icallback.js?v=' + Math.random() + '&key=' + widget_key + '&uri=' + encodeURIComponent(window.location.href); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s); })();
//             }
//             let form_field_country_code = document.getElementById('country_code');
//             if (form_field_country_code) {
//                 form_field_country_code.value = txt
//             } else {
//                 console.log('can not send country_code')
//             }
//         });
//     })
//     .catch(function(error) {
//         (function f() { var widget_key = "7ec27fa6d3df639b2075532161c17917"; window.leadCM = { widget_key: widget_key, }; var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true; em.src = 'https://app.leadconnect.cc/js/icallback.js?v=' + Math.random() + '&key=' + widget_key + '&uri=' + encodeURIComponent(window.location.href); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s); })();
//     });
// </script>
//
// <script async>
//     fetch('https://ipapi.co/country_calling_code/')
//     .then(function(response) {
//     response.text().then(code => {
//         console.log(code)
//         const field = document.getElementById("field-number-phone")
//         if (field) {
//             field.value = code;
//         } else {
//             console.log('no phone field')
//         }
//     })
//         .catch(function(error) {
//             console.log(error);
//         });
// })
// </script>



let widgetComponent;
let interval;
let input;
let aNode;
let phoneField
let countryField

function intervalCheck () {
    interval = setInterval(() => {
        console.log(widgetComponent)
        if (widgetComponent && input) {
            widgetComponent = document.getElementsByClassName('iti__flag');
            input = document.getElementById('widgetModal-field-tooltip')
            aNode = widgetComponent[0];
            phoneField = document.getElementById("field-number-phone")
            if (phoneField && aNode && aNode.classList[1]) {
                phoneField.value = aNode.classList[1].slice(5);
            } else {
                console.log('no phone field')
            }
            countryField = document.getElementById('country_code');
            if (countryField && input && input.value) {
                countryField.value = input.value
            } else {
                console.log('can not send country_code')
            }
            clearInterval(interval)
        } else {
            widgetComponent = document.getElementsByClassName('iti__flag');
            input = document.getElementById('widgetModal-field-tooltip')
        }

    }, 1000)
}

intervalCheck()

// var endpoint = 'http://ip-api.com/json/?fields=status,message,countryCode';
//
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var response = JSON.parse(this.responseText);
//         if(response.status !== 'success') {
//             console.log('query failed: ' + response.message);
//             return
//         }
//         // Redirect
//         if(response.countryCode == "US") {
//             window.location.replace("https://google.com/");
//         }
//         if(response.countryCode == "CA") {
//             window.location.replace("https://google.ca/");
//         }
//     }
// };
// xhr.open('GET', endpoint, true);
// xhr.send();
//
//
// // content-security-policy: frame-ancestors self *.zendesk.com;
//
//
//
//
// // An example script for finding out the distance from the user to multiple points
//
// // Coordinates and name
// var coords = [
//     {lat: 40.7127837, lon: -74.0059413, name: 'New York, NY'},
//     {lat: 34.0522342, lon: -118.2436849, name: 'Los Angeles, CA'},
//     {lat: 37.3382082, lon: -121.8863286, name: 'San Jose, CA'},
//     {lat: 41.8781136, lon: -87.6297982, name: 'Chicago, IL'},
//     {lat: 47.6062095, lon: -122.3320708, name: 'Seattle, WA'},
// ];
//
// // ip-api endpoint URL
// // see http://ip-api.com/docs/api:json for documentation
// var endpoint = 'http://ip-api.com/json/?fields=status,message,lat,lon';
//
// function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
//     var R = 6371; // Radius of the earth in km
//     var dLat = deg2rad(lat2-lat1);  // deg2rad below
//     var dLon = deg2rad(lon2-lon1);
//     var a =
//         Math.sin(dLat/2) * Math.sin(dLat/2) +
//         Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//         Math.sin(dLon/2) * Math.sin(dLon/2);
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//     var d = R * c; // Distance in km
//     return d;
// }
//
// function deg2rad(deg) {
//     return deg * (Math.PI/180)
// }
//
// // var xhr = new XMLHttpRequest();
// // xhr.onreadystatechange = function() {
// //     if(this.readyState == 4 && this.status == 200) {
// //         var response = JSON.parse(this.responseText);
// //         if(response.status !== 'success') {
// //             console.log('query failed: ' + response.message);
// //             return
// //         }
// //         // Distance in kilometers for each coordinate
// //         for(var i = 0; i < coords.length; i++) {
// //             var diff = getDistanceFromLatLonInKm(coords[i].lat, coords[i].lon, response.lat, response.lon);
// //             console.log('distance to ' + coords[i].name + ': ' + diff + 'km');
// //         }
// //     }
// // };
// // xhr.open('GET', endpoint, true);
// // xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://api.ipstack.com/134.201.250.155?access_key=20419e55b925dccd82a0e3cdbcbdbfc4", true);
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4) {
//         // WARNING! Might be evaluating an evil script!
//         var resp = eval("(" + xhr.responseText + ")");
//         console.log(xhr.responseText)
//     }
//     console.log(xhr.responseText)
// }
// xhr.send();
//
//
//
//
//


// var y = document.getElementById('test');
// const intlTelInput = intlTelInput(y,{preferredCountries: ['SE', 'NO', 'AE', 'RU']});
//
// y.value = `+${intlTelInput.selectedCountryData.dialCode} `;
