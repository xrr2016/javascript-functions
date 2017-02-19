;
((window, document) => {
    const W = window
    const D = document
    //Ajax类
    class Ajax {
        constructor(options) {
            this.options = options || {}
            this.options.data = options.data || {}
            !!options.jsonp ? this.jsonp(this.options) : this.json(this.options)
        }
        json(options) {
            options.type = (options.type || 'GET').toUpperCase()
            options.data = this.formatData(options.data)
            const request = new XMLHttpRequest()
            request.onload = function() {
                let data = null
                let type = request.getResponseHeader('Content-type')
                if (request.status >= 200 && request.status < 400) {
                    //请求成功
                    if (type.indexOf('xml') !== -1 && request.responseXML) {
                        data = request.responseXML
                    } else if (type === 'application/son') {
                        data = JSON.parse(request.responseText)
                    } else {
                        data = request.responseText
                    }!!options.success && options.success(data)
                } else {
                    // 请求失败
                    !!options.error && options.error(request.status)
                }
            }
            request.onerror = function() {
                !!options.error && options.error(request.status)
            }
            if (request.type === 'GET') {
                request.open(options.type, options.url + '?' + options.data, true)
                request.send()
            } else {
                request.open(options.type, options.url, true)
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8')
                request.send(options.data)
            }
        }
        jsonp(options){}
        formatData(data) {
            let arr = []
            for (let key in data) {
                arr.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            }
            arr.push(`t=${Date.now()}`)
            return arr.join('&')
        }
    }

    function ajax(options) {
        return new Ajax(options)
    }
    W.Ajax = Ajax
    W.ajax = ajax
})(window, document)
