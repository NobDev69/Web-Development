const href = document.getElementById('href');
const hostName = document.getElementById('hostname');
const pathName = document.getElementById('path');
const protoCol = document.getElementById('protocol');
const port = document.getElementById('port');

href.innerHTML = 'Windows Href: ' + location.href;
hostName.innerHTML = 'Windows Hostname: ' + location.hostname;
pathName.innerHTML = 'Windows Pathname: ' + location.pathname;
protoCol.innerHTML = 'Windows Protocol: ' + location.protocol;
port.innerHTML = 'Windows port: ' + location.port;

function loadw3s(){
    location.assign('https://www.w3schools.com/js/js_window_location.asp')
}
