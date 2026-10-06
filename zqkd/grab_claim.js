/*
抓"领取"接口专用（一次性小工具，QX 专用）
用法：
1. QX -> 重写 -> 引用 -> 添加：
   https://kandian.wkandian.com - script-request-header https://raw.githubusercontent.com/mary20050218/ql_all/refs/heads/master/zqkd/grab_claim.js
2. 去中青看点 APP 里，手动点一次你要自动化的那个"领取"按钮
3. QX 会弹通知，把里面的接口地址和参数发给 Muse
4. 抓完后把这条重写关掉或删掉
*/
if (typeof $request !== "undefined" && $request && $request.url) {
  var t = new Date();
  var ts = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
  $prefs.setValueForKey($request.url, "zq_claim_url");
  $prefs.setValueForKey($request.body || "", "zq_claim_body");
  $notify("抓到请求 " + ts, $request.url, ($request.body || "(无body)").slice(0, 300));
}
$done({});
