/*
快手极速版-周周十五万金币
抓包教程地址：http://cxgc.top/archives/ksjsb
欢迎填我邀请码：791642607
交流群：212796668、681030097
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#快手极速版-周周十五万金币
0 55 8-22 * * * https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js, tag=快手极速版-周周十五万金币, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 55 8-22 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js,tag=快手极速版-周周十五万金币
===================================Surge================================
快手极速版-周周十五万金币 = type=cron,cronexp="0 55 8-22 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js
====================================小火箭=============================
快手极速版-周周十五万金币 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js, cronexpr="0 55 8-22 * * *", timeout=3600, enable=true
 */
const $ = new Env('快手极速版-周周十五万金币');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./ksCookie.js') : '';
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxdd9d4=["","\x6E\x6F\x64\x65\x2D\x66\x65\x74\x63\x68","\x32\x36\x37\x32\x34\x36\x35\x31\x38\x39\x30\x32\x33\x30\x38\x34","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x64\x77\x78\x78\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x6A\x64\x5F\x6A\x6F\x62\x2F\x6B\x73\x6A\x73\x62\x2E\x6A\x73\x6F\x6E","\x70\x61\x72\x73\x65","\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x49\x64","\x6C\x6F\x67\x45\x72\x72","\x67\x65\x74","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u5FEB\u624B\u8D26\u53F7\x20\x6B\x73\x6A\x73\x62\x43\x6F\x6F\x6B\x69\x65\x20\x0A\u76F4\u63A5\u4F7F\u7528\u6293\u5305\u5DE5\u5177\u6293\u5305","\x68\x74\x74\x70\x3A\x2F\x2F\x63\x78\x67\x63\x2E\x74\x6F\x70\x2F\x61\x72\x63\x68\x69\x76\x65\x73\x2F\x6B\x73\x6A\x73\x62","\x6D\x73\x67","\x0A\u5F02\u5E38\u9519\u8BEF\x2C\u8BF7\u7A0D\u5019\u91CD\u8BD5\x0A","\u811A\u672C\u9ED8\u8BA4\u7B2C\u4E00\u4E2A\u8D26\u53F7\u52A9\u529B\u6211\uFF0C\u540E\u9762\u7684\u8D26\u53F7\u52A9\u529B\u7B2C\u4E00\u4E2A\u8D26\u53F7","\u6293\u5305\u6559\u7A0B\uFF1A\x68\x74\x74\x70\x3A\x2F\x2F\x63\x78\x67\x63\x2E\x74\x6F\x70\x2F\x61\x72\x63\x68\x69\x76\x65\x73\x2F\x6B\x73\x6A\x73\x62","\x7A\x6C\x6D","\x6C\x65\x6E\x67\x74\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u5FEB\u624B\u8D26\u53F7","\u3011\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A","\x6B\x70\x6E\x3D\x4E\x45\x42\x55\x4C\x41\x3B\x20\x6B\x70\x66\x3D\x41\x4E\x44\x52\x4F\x49\x44\x5F\x50\x48\x4F\x4E\x45\x3B\x20","\u53BB\u52A9\u529B\x20\x2D\x3E\x20","\u52A9\u529B\u7ED3\u679C\x3A","\x74\x68\x65\x6E","\x6A\x73\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x7A\x74\x2F\x65\x6E\x63\x6F\x75\x72\x61\x67\x65\x2F\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x2F\x66\x72\x69\x65\x6E\x64\x41\x73\x73\x69\x73\x74","\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x2A\x2F\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D","\x63\x6F\x6D\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x6E\x65\x62\x75\x6C\x61","\x73\x61\x6D\x65\x2D\x6F\x72\x69\x67\x69\x6E","\x63\x6F\x72\x73","\x65\x6D\x70\x74\x79","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65","\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37","\x7B\x22\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x49\x64\x22\x3A","\x7D","\x50\x4F\x53\x54","\u5FEB\u624B\u8D26\u53F7\x3A","\x63\x72\x65\x61\x74\x65\x4E\x69\x63\x6B\x4E\x61\x6D\x65","\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x49\x6E\x66\x6F","\u52A9\u529B\u7801\x3A","\u540E\u9762\u7684\u53F7\u90FD\u4F1A\u52A9\u529B\x3A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x7A\x74\x2F\x65\x6E\x63\x6F\x75\x72\x61\x67\x65\x2F\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x2F\x64\x65\x74\x61\x69\x6C\x3F\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x4D\x65\x74\x61\x49\x64\x3D\x32","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x6E\x65\x62\x75\x6C\x61\x2F\x64\x61\x69\x6C\x79\x2D\x63\x61\x73\x68\x2F\x68\x6F\x6D\x65\x3F\x6C\x61\x79\x6F\x75\x74\x54\x79\x70\x65\x3D\x34\x26\x73\x6F\x75\x72\x63\x65\x3D\x43\x41\x53\x48\x5F\x50\x41\x47\x45\x5F\x54\x41\x53\x4B","\x47\x45\x54","\u7B2C\u4E00\u4E2A\u8D26\u53F7\u672A\u83B7\u53D6\u5230\u52A9\u529B\u7801\x2C\u8BF7\u68C0\u67E5\x20\x6B\x73\x6A\x73\x62\x43\x6F\x6F\x6B\x69\x65\x20\x20\u53C2\u6570\u683C\u5F0F\uFF0C\u4E3A\u9632\u6B62\u540E\u9762\u8D26\u53F7\u52A9\u529B\u5230\u6211\uFF0C\u7ED3\u675F\u8FD0\u884C","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[],cookie=__Oxdd9d4[0x0],message;const fetch=require(__Oxdd9d4[0x1]);let assistanceId=__Oxdd9d4[0x2];if($[__Oxdd9d4[0x3]]()){Object[__Oxdd9d4[0x6]](jdCookieNode)[__Oxdd9d4[0x5]]((_0x3815x6)=>{cookiesArr[__Oxdd9d4[0x4]](jdCookieNode[_0x3815x6])});if(process[__Oxdd9d4[0x8]][__Oxdd9d4[0x7]]&& process[__Oxdd9d4[0x8]][__Oxdd9d4[0x7]]=== __Oxdd9d4[0x9]){console[__Oxdd9d4[0xa]]= ()=>{}}}else {cookiesArr= [$[__Oxdd9d4[0xd]](__Oxdd9d4[0xc]),$[__Oxdd9d4[0xd]](__Oxdd9d4[0xe]),...jsonParse($[__Oxdd9d4[0xd]](__Oxdd9d4[0x11])|| __Oxdd9d4[0x12])[__Oxdd9d4[0x10]]((_0x3815x6)=>{return _0x3815x6[__Oxdd9d4[0xf]]})][__Oxdd9d4[0xb]]((_0x3815x6)=>{return !!_0x3815x6})};let github=true;function gettext(){return {url:`${__Oxdd9d4[0x13]}`,timeout:10000}}async function getHub(){return  new Promise((_0x3815xa)=>{setTimeout(()=>{$[__Oxdd9d4[0x17]](gettext(),(_0x3815xb,_0x3815xc,_0x3815xd)=>{try{if(_0x3815xd){_0x3815xd= JSON[__Oxdd9d4[0x14]](_0x3815xd);assistanceId= _0x3815xd[__Oxdd9d4[0x15]]}}catch(e){github= false;$[__Oxdd9d4[0x16]](e,_0x3815xc)}finally{_0x3815xa(_0x3815xd)}})})})}!(async ()=>{if(!cookiesArr[0x0]){$[__Oxdd9d4[0x21]]($[__Oxdd9d4[0x1b]],__Oxdd9d4[0x1f],__Oxdd9d4[0x20],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxdd9d4[0x20]});return}; await getHub();if(!github){console[__Oxdd9d4[0xa]](__Oxdd9d4[0x22]);return};console[__Oxdd9d4[0xa]](__Oxdd9d4[0x23]);console[__Oxdd9d4[0xa]](__Oxdd9d4[0x24]);$[__Oxdd9d4[0x25]]= __Oxdd9d4[0x0];for(let _0x3815xf=0;_0x3815xf< cookiesArr[__Oxdd9d4[0x26]];_0x3815xf++){if(cookiesArr[_0x3815xf]){cookie= cookiesArr[_0x3815xf];$[__Oxdd9d4[0x27]]= _0x3815xf+ 1;$[__Oxdd9d4[0x28]]= true;$[__Oxdd9d4[0x29]]= __Oxdd9d4[0x0];message= __Oxdd9d4[0x0];console[__Oxdd9d4[0xa]](`${__Oxdd9d4[0x2a]}${$[__Oxdd9d4[0x27]]}${__Oxdd9d4[0x2b]}`);let _0x3815x10=cookie;let _0x3815x11=_0x3815x10+ __Oxdd9d4[0x2c];try{console[__Oxdd9d4[0xa]](__Oxdd9d4[0x2d]+ assistanceId); await fetch(__Oxdd9d4[0x31],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdd9d4[0x32],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdd9d4[0x33],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x4C\x65\x6E\x67\x74\x68":35,"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdd9d4[0x3]]()?(process[__Oxdd9d4[0x8]][__Oxdd9d4[0x34]]?process[__Oxdd9d4[0x8]][__Oxdd9d4[0x34]]:(require(__Oxdd9d4[0x36])[__Oxdd9d4[0x35]])):($[__Oxdd9d4[0xd]](__Oxdd9d4[0x37])?$[__Oxdd9d4[0xd]](__Oxdd9d4[0x37]):__Oxdd9d4[0x38]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdd9d4[0x39],"\x41\x63\x63\x65\x70\x74":__Oxdd9d4[0x3a],"\x4F\x72\x69\x67\x69\x6E":__Oxdd9d4[0x3b],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdd9d4[0x3c],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdd9d4[0x3d],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdd9d4[0x3e],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdd9d4[0x3f],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdd9d4[0x40],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdd9d4[0x41],"\x43\x6F\x6F\x6B\x69\x65":_0x3815x11},"\x62\x6F\x64\x79":__Oxdd9d4[0x42]+ assistanceId+ __Oxdd9d4[0x43],"\x6D\x65\x74\x68\x6F\x64":__Oxdd9d4[0x44]})[__Oxdd9d4[0x2f]]((_0x3815x13)=>{return _0x3815x13[__Oxdd9d4[0x30]]()})[__Oxdd9d4[0x2f]]((_0x3815x12)=>{console[__Oxdd9d4[0xa]](__Oxdd9d4[0x2e]+ _0x3815x12[__Oxdd9d4[0x21]]);console[__Oxdd9d4[0xa]]()}); await fetch(__Oxdd9d4[0x4a],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdd9d4[0x32],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdd9d4[0x33],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdd9d4[0x3]]()?(process[__Oxdd9d4[0x8]][__Oxdd9d4[0x34]]?process[__Oxdd9d4[0x8]][__Oxdd9d4[0x34]]:(require(__Oxdd9d4[0x36])[__Oxdd9d4[0x35]])):($[__Oxdd9d4[0xd]](__Oxdd9d4[0x37])?$[__Oxdd9d4[0xd]](__Oxdd9d4[0x37]):__Oxdd9d4[0x38]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdd9d4[0x39],"\x41\x63\x63\x65\x70\x74":__Oxdd9d4[0x3a],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdd9d4[0x3c],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdd9d4[0x3d],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdd9d4[0x3e],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdd9d4[0x3f],"\x52\x65\x66\x65\x72\x65\x72":__Oxdd9d4[0x4b],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdd9d4[0x40],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdd9d4[0x41],"\x43\x6F\x6F\x6B\x69\x65":_0x3815x11},"\x6D\x65\x74\x68\x6F\x64":__Oxdd9d4[0x4c]})[__Oxdd9d4[0x2f]]((_0x3815x13)=>{return _0x3815x13[__Oxdd9d4[0x30]]()})[__Oxdd9d4[0x2f]]((_0x3815x12)=>{console[__Oxdd9d4[0xa]](__Oxdd9d4[0x45]+ _0x3815x12[__Oxdd9d4[0x47]][__Oxdd9d4[0x46]]);console[__Oxdd9d4[0xa]](__Oxdd9d4[0x48]+ _0x3815x12[__Oxdd9d4[0x47]][__Oxdd9d4[0x15]]);if($[__Oxdd9d4[0x27]]== 1&& _0x3815x12[__Oxdd9d4[0x47]]|| _0x3815x12[__Oxdd9d4[0x47]][__Oxdd9d4[0x15]]){$[__Oxdd9d4[0x25]]= _0x3815x12[__Oxdd9d4[0x47]][__Oxdd9d4[0x15]];assistanceId= $[__Oxdd9d4[0x25]];console[__Oxdd9d4[0xa]](__Oxdd9d4[0x49]+ $[__Oxdd9d4[0x25]])}})}catch(e){};if($[__Oxdd9d4[0x25]]== __Oxdd9d4[0x0]){console[__Oxdd9d4[0xa]](__Oxdd9d4[0x4d]);break}}}})()[__Oxdd9d4[0x1e]]((_0x3815xe)=>{$[__Oxdd9d4[0xa]](__Oxdd9d4[0x0],`${__Oxdd9d4[0x1a]}${$[__Oxdd9d4[0x1b]]}${__Oxdd9d4[0x1c]}${_0x3815xe}${__Oxdd9d4[0x1d]}`,__Oxdd9d4[0x0])})[__Oxdd9d4[0x19]](()=>{$[__Oxdd9d4[0x18]]()});(function(_0x3815x14,_0x3815x15,_0x3815x16,_0x3815x17,_0x3815x18,_0x3815x19){_0x3815x19= __Oxdd9d4[0x4e];_0x3815x17= function(_0x3815x1a){if( typeof alert!== _0x3815x19){alert(_0x3815x1a)};if( typeof console!== _0x3815x19){console[__Oxdd9d4[0xa]](_0x3815x1a)}};_0x3815x16= function(_0x3815x1b,_0x3815x14){return _0x3815x1b+ _0x3815x14};_0x3815x18= _0x3815x16(__Oxdd9d4[0x4f],_0x3815x16(_0x3815x16(__Oxdd9d4[0x50],__Oxdd9d4[0x51]),__Oxdd9d4[0x52]));try{_0x3815x14= __encode;if(!( typeof _0x3815x14!== _0x3815x19&& _0x3815x14=== _0x3815x16(__Oxdd9d4[0x53],__Oxdd9d4[0x54]))){_0x3815x17(_0x3815x18)}}catch(e){_0x3815x17(_0x3815x18)}})({})
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
