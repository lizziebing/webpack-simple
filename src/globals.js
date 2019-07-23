//使用 exports-loader，将一个全局变量作为一个普通的模块来导出。例如，为了将 file 导出为 file 以及将 helpers.parse 导出为 parse
var file = 'blah.txt';
var helpers = {
  test: function() { console.log('test something'); },
  parse: function() { console.log('parse something'); }
}