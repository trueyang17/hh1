/* vim: set et sw=4 ts=4 sts=4 fdm=marker ff=unix fenc=utf8 nobomb: */

/**
 * filename.js
 *
 * @author xiaoqiang
 * @mail   qiang0902@126.com
 * @date
 */

var userData = Folder.userData;//Folder.commonFiles;// 
//var extensionDir = userData + '/Adobe/CEP/extensions';
var appVersion = app.version.split('.')[0];
var dir = (parseInt(appVersion) == 14)? 'CEPServiceManager4' : 'CEP';
var extensionDir = userData + '/Adobe/'+ dir +'/extensions';
var folder = new Folder(extensionDir);
if (folder.exists) {
    folder.execute();
} else {
    alert('directory ' + extensionDir +' not exists! ');
}
