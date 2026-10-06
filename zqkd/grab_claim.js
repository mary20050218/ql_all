/*
抓中青"分享领奖"真实请求（一次性，QX 专用）
用法：
1. QX -> 重写 -> 添加：
   https://kandian.wkandian.com/WebApi/ShareNew/ - script-request-header https://raw.githubusercontent.com/mary20050218/ql_all/refs/heads/master/zqkd/grab_claim.js
2. 去中青看点 APP，手动完成一次"分享领奖"（分享文章后点领取）
3. QX 弹通知"抓到分享请求"即成功
4. 然后去 QX 运行"中青自动分享"，它会自动用抓到的请求做回放测试
5. 抓完后删掉这条重写
*/
if (typeof $request !== "undefined" && $request && $request.url) {
  var url = $request.url || "";
  if (url.indexOf("/WebApi/ShareNew/") !== -1) {
    var t = new Date();
    var ts = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
    try {
      $prefs.setValueForKey(url, "zq_share_url");
      $prefs.setValueForKey($request.body || "", "zq_share_body");
      $prefs.setValueForKey(JSON.stringify($request.headers || {}), "zq_share_headers");
      $prefs.setValueForKey(ts, "zq_share_ts");
    } catch (e) {}
    $notify("抓到分享请求 " + ts,
      String(url.split("/").pop()).split("?")[0],
      "body长度:" + String($request.body || "").length + "，已保存");
  }
}
$done({});
