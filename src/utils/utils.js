import * as consts from './consts';

export function showMsg(msg) {
    alert(msg);
}
export function openUrl(url) {
    window.open(url);
}

export function getPTXData(url, para, querystring = "") {
    para = para ? "/" + para : "";
    let fullUrl = consts.BASEURL + url + para + "?$format=JSON&$top=10" + querystring;
    console.log(fullUrl);

    return axios({
        method: "get",
        url: fullUrl,
        headers: getAuthorizationHeader(),
    })
        .then((response) => response.data)
        .catch((error) => console.log(error));
}
export function getEnumObjectValue(enumObj, key) {
    if (enumObj[key]) return enumObj[key];
    return "";
}

// API 驗證用
function getAuthorizationHeader() {
    var GMTString = new Date().toGMTString();
    var ShaObj = new jsSHA("SHA-1", "TEXT");
    ShaObj.setHMACKey(consts.APPKEY, "TEXT");
    ShaObj.update("x-date: " + GMTString);
    var HMAC = ShaObj.getHMAC("B64");
    var Authorization =
        'hmac username="' +
        consts.APPID +
        '", algorithm="hmac-sha1", headers="x-date", signature="' +
        HMAC +
        '"';
    return {
        Authorization: Authorization,
        "X-Date": GMTString /*,'Accept-Encoding': 'gzip'*/,
    }; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}