const noop = () => {};//ничего не делай

const NO_PARAMS = {};//пустые объекты по умолчанию
const NO_HEADERS = {};

function request({
    method = 'GET',
    url,
    params = NO_PARAMS,
    headers = NO_HEADERS,
    body,
    responseType = 'json',
    requestType = 'json',
    checkStatusInResponse = false,
    onSuccess = noop,
    onError = noop,
}) {//запрос за данными в user.json
    const req = new XMLHttpRequest();//создали экземпляр объекта

    const urlParams = new URLSearchParams(params);
    const queryString = urlParams.toString();

    req.open(method, url + (queryString ? `?${queryString}` : ''));//зададим параметры запроса

    Object.keys(headers).forEach((key) => {
        req.setRequestHeader(key, headers[key]);
    });

    req.responseType = responseType;//задали тип отклика

    req.onload = function (event) {
        const target = event.target;

        if (target.status !== 200){
            onError(target.statusText);

            return;
        }

        
        if (checkStatusInResponse && target.response.status !== 'ok') {
            onError(target.statusText);

            return;
        }



        onSuccess(target.response);
    }

    req.onerror = function() {
        onError();
    }

    let dataBody = body;//тело запроса скопируем из переменной body

    if(requestType === 'urlencoded') {
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        const bodyParams = new  URLSearchParams({ //тело запроса
            key:API_KEY,
                lang: 'ru-ru',
                text: dictWord.value
        });


        dataBody = bodyParams.toString();
    }


    req.send(dataBody);
}