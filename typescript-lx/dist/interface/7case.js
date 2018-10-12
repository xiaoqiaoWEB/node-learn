function http(options) {
    var opt = Object.assign({
        method: 'get',
        url: '',
        isAsync: true
    }, options);
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(opt.method, opt.url, opt.isAsync);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            resolve(data);
        };
        xhr.onerror = function () {
            reject({
                code: xhr.response.code,
                message: '出错了'
            });
        };
        xhr.send();
    });
}
http({
    method: 'get',
    url: '....',
    isAsync: true
}).then(function (rs) {
    rs.code;
});
// @Controller
// class IndexController {
//     index() {
//     }
//     @router('/')
//     @method('get')
//     main() {
//     }
// }
