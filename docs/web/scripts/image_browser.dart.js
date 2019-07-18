{}(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
var y=function(){function t(){};return typeof t.name=='string'}()
function setFunctionNamesIfNecessary(a){if(y)return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.builtin$cls=a.name
a.prototype.constructor=a
a.prototype["$is"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function mixin(a,b){copyProperties(b.prototype,a.prototype)}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.IQ(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.vC"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.vC"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.vC(this,a,b,true,[],d).prototype
return t}:tearOffGetter(a,b,d,e)}var w=0
function installTearOff(a,b,c,d,e,f,g,h,i){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q=q+w
var p=h[0]
r.$stubName=p
var o=tearOff(t,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function setOrUpdateInterceptorsByTag(a){var t=u.interceptorsByTag
if(!t){u.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=u.leafTags
if(!t){u.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=u.types
t.push.apply(t,a)}function updateHolder(a,b){copyProperties(b,a)
return a}function initializeDeferredHunk(a){w=u.types.length
a(inherit,mixin,lazy,makeConstList,convertToFastObject,installTearOff,setFunctionNamesIfNecessary,updateHolder,updateTypes,setOrUpdateInterceptorsByTag,setOrUpdateLeafTags,u,v,$)}function getGlobalFromName(a){for(var t=0;t<v.length;t++){if(v[t]==C)continue
if(v[t][a])return v[t][a]}}var C={},H={uB:function uB(a){this.a=a},
t1:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
xz:function(a,b,c,d){var t=new H.pg(a,b,c,[d])
t.f9(a,b,c,d)
return t},
dB:function(a,b,c,d){if(!!J.ap(a).$ist)return new H.h6(a,b,[c,d])
return new H.hF(a,b,[c,d])},
dp:function(){return new P.aN("No element")},
FM:function(){return new P.aN("Too many elements")},
x8:function(){return new P.aN("Too few elements")},
k5:function(a,b,c,d){if(c-b<=32)H.H8(a,b,c,d)
else H.H7(a,b,c,d)},
H8:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.aU(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cC(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
H7:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.am(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.am(a3+a4,2)
p=q-t
o=q+t
n=J.aU(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.cC(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cC(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cC(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cC(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cC(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cC(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cC(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cC(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cC(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.n(a2,a3))
n.i(a2,o,n.n(a2,a4))
g=a3+1
f=a4-1
if(J.aV(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.ap(c)
if(b.S(c,0))continue
if(b.a4(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dH(c)
if(b.aA(c,0)){--f
continue}else{a=f-1
if(b.a4(c,0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.ei(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cC(a5.$2(d,j),0))for(;!0;)if(J.cC(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ei(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.i(a2,a3,n.n(a2,b))
n.i(a2,b,l)
b=f+1
n.i(a2,a4,n.n(a2,b))
n.i(a2,b,j)
H.k5(a2,a3,g-2,a5)
H.k5(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.aV(a5.$2(n.n(a2,g),l),0);)++g
for(;J.aV(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.aV(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.aV(a5.$2(d,j),0))for(;!0;)if(J.aV(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ei(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.k5(a2,g,f,a5)}else H.k5(a2,g,f,a5)},
ld:function ld(a){this.a=a},
t:function t(){},
eC:function eC(){},
pg:function pg(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eD:function eD(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hF:function hF(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
h6:function h6(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jM:function jM(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eF:function eF(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eT:function eT(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
kg:function kg(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iQ:function iQ(){},
pG:function pG(){},
i2:function i2(){},
kB:function(a,b){var t=a.bv(b)
if(!u.globalState.d.cy)u.globalState.f.bH()
return t},
yH:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ap(s).$isp)throw H.h(P.dJ("Arguments to main must be a List: "+H.z(s)))
u.globalState=new H.r_(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$wu()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qw(P.uG(null,H.eX),0)
r=P.C
s.z=new H.w(0,null,null,null,null,null,0,[r,H.fF])
s.ch=new H.w(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qZ()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.AK,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.Hv)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a0(null,null,null,r)
p=new H.fw(0,null,!1)
o=new H.fF(s,new H.w(0,null,null,null,null,null,0,[r,H.fw]),q,u.createNewIsolate(),p,new H.dK(H.tk()),new H.dK(H.tk()),!1,!1,[],P.a0(null,null,null,null),null,null,!1,!0,P.a0(null,null,null,null))
q.h(0,0)
o.dq(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.f0(a,{func:1,args:[,]}))o.bv(new H.tl(t,a))
else if(H.f0(a,{func:1,args:[,,]}))o.bv(new H.tm(t,a))
else o.bv(a)
u.globalState.f.bH()},
Hv:function(a){var t=P.hA(["command","print","msg",a])
return new H.dG(!0,P.ie(null,P.C)).aB(t)},
AM:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.AN()
return},
AN:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.h(new P.V("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.h(new P.V('Cannot extract URI from "'+t+'"'))},
AK:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eW(!0,[]).b_(b.data)
s=J.aU(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eW(!0,[]).b_(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eW(!0,[]).b_(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.C
j=P.a0(null,null,null,k)
i=new H.fw(0,null,!1)
h=new H.fF(s,new H.w(0,null,null,null,null,null,0,[k,H.fw]),j,u.createNewIsolate(),i,new H.dK(H.tk()),new H.dK(H.tk()),!1,!1,[],P.a0(null,null,null,null),null,null,!1,!0,P.a0(null,null,null,null))
j.h(0,0)
h.dq(0,i)
u.globalState.f.a.aN(0,new H.eX(h,new H.mH(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bH()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fO(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bH()
break
case"close":u.globalState.ch.an(0,$.$get$wv().n(0,a))
a.terminate()
u.globalState.f.bH()
break
case"log":H.AJ(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hA(["command","print","msg",t])
k=new H.dG(!0,P.ie(null,P.C)).aB(k)
s.toString
self.postMessage(k)}else P.fM(s.n(t,"msg"))
break
case"error":throw H.h(s.n(t,"msg"))}},
AJ:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hA(["command","log","msg",a])
r=new H.dG(!0,P.ie(null,P.C)).aB(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.bS(q)
t=H.cB(q)
s=P.lL(t)
throw H.h(s)}},
AL:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.xn=$.xn+("_"+s)
$.xo=$.xo+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fO(f,["spawned",new H.fG(s,r),q,t.r])
r=new H.mI(a,b,c,d,t)
if(e===!0){t.e5(q,q)
u.globalState.f.a.aN(0,new H.eX(t,r,"start isolate"))}else r.$0()},
Hf:function(a,b){var t=new H.py(!0,!1,null)
t.fa(a,b)
return t},
HO:function(a){return new H.eW(!0,[]).b_(new H.dG(!1,P.ie(null,P.C)).aB(a))},
tl:function tl(a,b){this.a=a
this.b=b},
tm:function tm(a,b){this.a=a
this.b=b},
r_:function r_(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx},
fF:function fF(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx},
qV:function qV(a,b){this.a=a
this.b=b},
qw:function qw(a,b){this.a=a
this.b=b},
qx:function qx(a){this.a=a},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
qZ:function qZ(){},
mH:function mH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mI:function mI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qh:function qh(){},
fG:function fG(b,a){this.b=b
this.a=a},
r1:function r1(a,b){this.a=a
this.b=b},
ik:function ik(b,c,a){this.b=b
this.c=c
this.a=a},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
py:function py(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function pz(a,b){this.a=a
this.b=b},
pA:function pA(a,b){this.a=a
this.b=b},
dK:function dK(a){this.a=a},
dG:function dG(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
zN:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=a.gay(a)
s=P.db(t,!0,H.aw(t,"o",0))
t=s.length
q=0
while(!0){p=s.length
if(!(q<p)){r=!0
break}o=s[q]
if(typeof o!=="string"){r=!1
break}p===t||(0,H.bH)(s);++q}if(r){n={}
for(m=!1,l=null,k=0,q=0;q<s.length;s.length===p||(0,H.bH)(s),++q){o=s[q]
j=a.n(0,o)
if(!J.aV(o,"__proto__")){if(!n.hasOwnProperty(o))++k
n[o]=j}else{l=j
m=!0}}if(m)return new H.li(l,k+1,n,s,[b,c])
return new H.h1(k,n,s,[b,c])}return new H.lh(P.FO(a,null,null),[b,c])},
zO:function(){throw H.h(new P.V("Cannot modify unmodifiable Map"))},
Io:function(a){return u.types[a]},
yA:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ap(a).$isaF},
z:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cD(a)
if(typeof t!=="string")throw H.h(H.bv(a))
return t},
GE:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.om(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eH:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
v_:function(a,b){if(b==null)throw H.h(new P.bQ(a,null,null))
return b.$1(a)},
eI:function(a,b,c){var t,s,r,q,p,o
H.rP(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.v_(a,c)
if(3>=t.length)return H.u(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.v_(a,c)}if(b<2||b>36)throw H.h(P.bG(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a6(q,o)|32)>r)return H.v_(a,c)}return parseInt(a,b)},
xl:function(a,b){return b.$1(a)},
xp:function(a,b){var t,s
H.rP(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.xl(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.tr(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.xl(a,b)}return t},
k_:function(a){var t,s,r,q,p,o,n,m
t=J.ap(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.S||!!J.ap(a).$iseQ){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a6(q,0)===36)q=C.c.aa(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.tc(H.kF(a),0,null),u.mangledGlobalNames)},
od:function(a){return"Instance of '"+H.k_(a)+"'"},
Gb:function(){if(!!self.location)return self.location.href
return},
xk:function(a){var t,s,r,q,p
t=J.c3(a)
if(typeof t!=="number")return t.eM()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Gg:function(a){var t,s,r,q
t=H.a([],[P.C])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bH)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.h(H.bv(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aY(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.h(H.bv(q))}return H.xk(t)},
xr:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bH)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.h(H.bv(q))
if(q<0)throw H.h(H.bv(q))
if(q>65535)return H.Gg(a)}return H.xk(a)},
Gh:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.eM()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hR:function(a){var t
if(typeof a!=="number")return H.a8(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aY(t,10))>>>0,56320|t&1023)}}throw H.h(P.bG(a,0,1114111,null,null))},
d5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
xm:function(a){return a.b?H.d5(a).getUTCFullYear()+0:H.d5(a).getFullYear()+0},
v1:function(a){return a.b?H.d5(a).getUTCMonth()+1:H.d5(a).getMonth()+1},
v0:function(a){return a.b?H.d5(a).getUTCDate()+0:H.d5(a).getDate()+0},
Gc:function(a){return a.b?H.d5(a).getUTCHours()+0:H.d5(a).getHours()+0},
Ge:function(a){return a.b?H.d5(a).getUTCMinutes()+0:H.d5(a).getMinutes()+0},
Gf:function(a){return a.b?H.d5(a).getUTCSeconds()+0:H.d5(a).getSeconds()+0},
Gd:function(a){return a.b?H.d5(a).getUTCMilliseconds()+0:H.d5(a).getMilliseconds()+0},
v2:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.h(H.bv(a))
return a[b]},
xq:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.h(H.bv(a))
a[b]=c},
a8:function(a){throw H.h(H.bv(a))},
u:function(a,b){if(a==null)J.c3(a)
throw H.h(H.c9(a,b))},
c9:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.d0(!0,b,"index",null)
t=J.c3(a)
if(!(b<0)){if(typeof t!=="number")return H.a8(t)
s=b>=t}else s=!0
if(s)return P.bB(b,a,"index",null,t)
return P.k1(b,"index",null)},
Ic:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.d0(!0,a,"start",null)
if(a<0||a>c)return new P.eJ(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.d0(!0,b,"end",null)
if(b<a||b>c)return new P.eJ(a,c,!0,b,"end","Invalid value")}return new P.d0(!0,b,"end",null)},
bv:function(a){return new P.d0(!0,a,null,null)},
kD:function(a){if(typeof a!=="number")throw H.h(H.bv(a))
return a},
vB:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(H.bv(a))
return a},
rP:function(a){if(typeof a!=="string")throw H.h(H.bv(a))
return a},
h:function(a){var t
if(a==null)a=new P.fs()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.yJ})
t.name=""}else t.toString=H.yJ
return t},
yJ:function(){return J.cD(this.dartException)},
b1:function(a){throw H.h(a)},
bH:function(a){throw H.h(new P.bN(a))},
dW:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pD(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
xH:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
uD:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.n0(a,s,t?null:b.receiver)},
bS:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.tn(a)
if(a==null)return
if(a instanceof H.hf)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aY(r,16)&8191)===10)switch(q){case 438:return t.$1(H.uD(H.z(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.z(s)+" (Error "+q+")"
return t.$1(new H.jT(p,null))}}if(a instanceof TypeError){o=$.$get$xB()
n=$.$get$xC()
m=$.$get$xD()
l=$.$get$xE()
k=$.$get$xI()
j=$.$get$xJ()
i=$.$get$xG()
$.$get$xF()
h=$.$get$xL()
g=$.$get$xK()
f=o.aK(s)
if(f!=null)return t.$1(H.uD(s,f))
else{f=n.aK(s)
if(f!=null){f.method="call"
return t.$1(H.uD(s,f))}else{f=m.aK(s)
if(f==null){f=l.aK(s)
if(f==null){f=k.aK(s)
if(f==null){f=j.aK(s)
if(f==null){f=i.aK(s)
if(f==null){f=l.aK(s)
if(f==null){f=h.aK(s)
if(f==null){f=g.aK(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jT(s,f==null?null:f.method))}}return t.$1(new H.pF(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.k9()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.d0(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.k9()
return a},
cB:function(a){var t
if(a instanceof H.hf)return a.b
if(a==null)return new H.kw(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kw(a,null)},
ID:function(a){if(a==null||typeof a!='object')return J.dI(a)
else return H.eH(a)},
yu:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
Iy:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kB(b,new H.t7(a))
case 1:return H.kB(b,new H.t8(a,d))
case 2:return H.kB(b,new H.t9(a,d,e))
case 3:return H.kB(b,new H.ta(a,d,e,f))
case 4:return H.kB(b,new H.tb(a,d,e,f,g))}throw H.h(P.lL("Unsupported number of arguments for wrapped closure"))},
du:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.Iy)
a.$identity=t
return t},
zJ:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ap(c).$isp){t.$reflectionInfo=c
r=H.GE(t).r}else r=c
q=d?Object.create(new H.oO().constructor.prototype):Object.create(new H.fV(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dL
$.dL=J.eh(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.w0(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Io,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.vZ:H.tv
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.h("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.w0(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
zG:function(a,b,c,d){var t=H.tv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
w0:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.zI(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.zG(s,!q,t,b)
if(s===0){q=$.dL
$.dL=J.eh(q,1)
o="self"+H.z(q)
q="return function(){var "+o+" = this."
p=$.fW
if(p==null){p=H.l6("self")
$.fW=p}return new Function(q+H.z(p)+";return "+o+"."+H.z(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dL
$.dL=J.eh(q,1)
n+=H.z(q)
q="return function("+n+"){return this."
p=$.fW
if(p==null){p=H.l6("self")
$.fW=p}return new Function(q+H.z(p)+"."+H.z(t)+"("+n+");}")()},
zH:function(a,b,c,d){var t,s
t=H.tv
s=H.vZ
switch(b?-1:a){case 0:throw H.h(new H.or("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
zI:function(a,b){var t,s,r,q,p,o,n,m
t=H.zF()
s=$.vY
if(s==null){s=H.l6("receiver")
$.vY=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.zH(q,!o,r,b)
if(q===1){s="return function(){return this."+H.z(t)+"."+H.z(r)+"(this."+H.z(s)+");"
o=$.dL
$.dL=J.eh(o,1)
return new Function(s+H.z(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.z(t)+"."+H.z(r)+"(this."+H.z(s)+", "+m+");"
o=$.dL
$.dL=J.eh(o,1)
return new Function(s+H.z(o)+"}")()},
vC:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ap(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.zJ(a,b,t,!!d,e,f)},
tv:function(a){return a.a},
vZ:function(a){return a.c},
zF:function(){var t=$.fW
if(t==null){t=H.l6("self")
$.fW=t}return t},
l6:function(a){var t,s,r,q,p
t=new H.fV("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
IG:function(a,b){var t=J.aU(b)
throw H.h(H.ty(H.k_(a),t.I(b,3,t.gm(b))))},
kH:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.ap(a)[b]
else t=!0
if(t)return a
H.IG(a,b)},
vD:function(a){var t=J.ap(a)
return"$S" in t?t.$S():null},
f0:function(a,b){var t
if(a==null)return!1
t=H.vD(a)
return t==null?!1:H.vG(t,b)},
Im:function(a,b){var t,s
if(a==null)return a
if(H.f0(a,b))return a
t=H.dh(b,null)
s=H.vD(a)
throw H.h(H.ty(s!=null?H.dh(s,null):H.k_(a),t))},
ty:function(a,b){return new H.lb("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
IQ:function(a){throw H.h(new P.lu(a))},
tk:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
yw:function(a){return u.getIsolateTag(a)},
c2:function(a){return new H.dX(a,null)},
a:function(a,b){a.$ti=b
return a},
kF:function(a){if(a==null)return
return a.$ti},
yx:function(a,b){return H.vI(a["$as"+H.z(b)],H.kF(a))},
aw:function(a,b,c){var t=H.yx(a,b)
return t==null?null:t[c]},
Q:function(a,b){var t=H.kF(a)
return t==null?null:t[b]},
dh:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.tc(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.z(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dh(t,b)
return H.HT(a,b)}return"unknown-reified-type"},
HT:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dh(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dh(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dh(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.Il(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dh(l[j],b)+(" "+H.z(j))}q+="}"}return"("+q+") => "+t},
tc:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.cg("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.O=p+", "
o=a[s]
if(o!=null)q=!1
p=t.O+=H.dh(o,c)}return q?"":"<"+t.A(0)+">"},
kG:function(a){var t,s
if(a instanceof H.f7){t=H.vD(a)
if(t!=null)return H.dh(t,null)}s=J.ap(a).constructor.builtin$cls
if(a==null)return s
return s+H.tc(a.$ti,0,null)},
vI:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
e_:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kF(a)
s=J.ap(a)
if(s[b]==null)return!1
return H.yn(H.vI(s[d],t),c)},
IO:function(a,b,c,d){if(a==null)return a
if(H.e_(a,b,c,d))return a
throw H.h(H.ty(H.k_(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.tc(c,0,null),u.mangledGlobalNames)))},
yn:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d9(a[s],b[s]))return!1
return!0},
eZ:function(a,b,c){return a.apply(b,H.yx(b,c))},
I8:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ad"||b.builtin$cls==="cV"
if(b==null)return!0
t=H.kF(a)
a=J.ap(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.vG(r.apply(a,null),b)}return H.d9(s,b)},
d9:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="cV")return!0
if('func' in b)return H.vG(a,b)
if('func' in a)return b.builtin$cls==="tY"||b.builtin$cls==="ad"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dh(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.yn(H.vI(o,t),r)},
ym:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.d9(t,p)||H.d9(p,t)))return!1}return!0},
I_:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.d9(p,o)||H.d9(o,p)))return!1}return!0},
vG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.d9(t,s)||H.d9(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.ym(r,q,!1))return!1
if(!H.ym(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d9(i,h)||H.d9(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d9(i,h)||H.d9(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d9(i,h)||H.d9(h,i)))return!1}}return H.I_(a.named,b.named)},
J6:function(a){var t=$.vE
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
J5:function(a){return H.eH(a)},
J4:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Iz:function(a){var t,s,r,q,p,o
t=$.vE.$1(a)
s=$.rX[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.t6[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.yl.$2(a,t)
if(t!=null){s=$.rX[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.t6[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.vH(r)
$.rX[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.t6[t]=r
return r}if(p==="-"){o=H.vH(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.yD(a,r)
if(p==="*")throw H.h(new P.eP(t))
if(u.leafTags[t]===true){o=H.vH(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.yD(a,r)},
yD:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.tg(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
vH:function(a){return J.tg(a,!1,null,!!a.$isaF)},
IB:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.tg(t,!1,null,!!t.$isaF)
else return J.tg(t,c,null,null)},
Iw:function(){if(!0===$.vF)return
$.vF=!0
H.Ix()},
Ix:function(){var t,s,r,q,p,o,n,m
$.rX=Object.create(null)
$.t6=Object.create(null)
H.Iv()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.yE.$1(p)
if(o!=null){n=H.IB(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
Iv:function(){var t,s,r,q,p,o,n
t=C.T()
t=H.fK(C.U,H.fK(C.V,H.fK(C.x,H.fK(C.x,H.fK(C.X,H.fK(C.W,H.fK(C.Y(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.vE=new H.t3(p)
$.yl=new H.t4(o)
$.yE=new H.t5(n)},
fK:function(a,b){return a(b)||b},
uy:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.h(new P.bQ("Illegal RegExp pattern ("+String(q)+")",a,null))},
IM:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
yI:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hw){q=b.gdO()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.b1(H.bv(b))
throw H.h("String.replaceAll(Pattern) UNIMPLEMENTED")}},
HY:function(a){return a},
IN:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.aQ(0,a),t=new H.i6(t.a,t.b,t.c,null),s=0,r="";t.G();){q=t.d
p=q.b
o=p.index
r=r+H.z(H.yc().$1(C.c.I(a,s,o)))+H.z(c.$1(q))
s=o+p[0].length}t=r+H.z(H.yc().$1(C.c.aa(a,s)))
return t.charCodeAt(0)==0?t:t},
lh:function lh(a,$ti){this.a=a
this.$ti=$ti},
lg:function lg(){},
h1:function h1(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
li:function li(d,a,b,c,$ti){var _=this
_.d=d
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
om:function om(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pD:function pD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jT:function jT(a,b){this.a=a
this.b=b},
n0:function n0(a,b,c){this.a=a
this.b=b
this.c=c},
pF:function pF(a){this.a=a},
hf:function hf(a,b){this.a=a
this.b=b},
tn:function tn(a){this.a=a},
kw:function kw(a,b){this.a=a
this.b=b},
t7:function t7(a){this.a=a},
t8:function t8(a,b){this.a=a
this.b=b},
t9:function t9(a,b,c){this.a=a
this.b=b
this.c=c},
ta:function ta(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tb:function tb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f7:function f7(){},
pm:function pm(){},
oO:function oO(){},
fV:function fV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lb:function lb(a){this.a=a},
or:function or(a){this.a=a},
dX:function dX(a,b){this.a=a
this.b=b},
w:function w(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
n_:function n_(a){this.a=a},
mZ:function mZ(a){this.a=a},
na:function na(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
nb:function nb(a,$ti){this.a=a
this.$ti=$ti},
nc:function nc(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
t3:function t3(a){this.a=a},
t4:function t4(a){this.a=a},
t5:function t5(a){this.a=a},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ig:function ig(a,b){this.a=a
this.b=b},
qb:function qb(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
rk:function rk(a,b,c){this.a=a
this.b=b
this.c=c},
rl:function rl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cG:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.dJ("Invalid length "+H.z(a)))
return a},
y9:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dJ("Invalid view offsetInBytes "+H.z(b)))},
yb:function(a){return a},
G9:function(a){return new Int8Array(H.yb(a))},
cU:function(a,b,c){H.y9(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
HN:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aA()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.h(H.Ic(a,b,c))
return b},
fq:function fq(){},
eG:function eG(){},
nC:function nC(){},
jP:function jP(){},
hJ:function hJ(){},
hL:function hL(){},
hN:function hN(){},
hK:function hK(){},
hM:function hM(){},
hO:function hO(){},
nD:function nD(){},
nE:function nE(){},
nF:function nF(){},
nG:function nG(){},
nH:function nH(){},
nI:function nI(){},
nJ:function nJ(){},
jQ:function jQ(){},
fr:function fr(){},
Il:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
IF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ap:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jI.prototype
return J.jH.prototype}if(typeof a=="string")return J.eA.prototype
if(a==null)return J.mX.prototype
if(typeof a=="boolean")return J.mW.prototype
if(a.constructor==Array)return J.ez.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eB.prototype
return a}if(a instanceof P.ad)return a
return J.t_(a)},
tg:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
t_:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.vF==null){H.Iw()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.h(new P.eP("Return interceptor for "+H.z(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$uC()]
if(p!=null)return p
p=H.Iz(a)
if(p!=null)return p
if(typeof a=="function")return C.Z
s=Object.getPrototypeOf(a)
if(s==null)return C.J
if(s===Object.prototype)return C.J
if(typeof q=="function"){Object.defineProperty(q,$.$get$uC(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
x9:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
FN:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a6(a,b)
if(s!==32&&s!==13&&!J.x9(s))break;++b}return b},
ux:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.a_(a,t)
if(s!==32&&s!==13&&!J.x9(s))break}return b},
aU:function(a){if(typeof a=="string")return J.eA.prototype
if(a==null)return a
if(a.constructor==Array)return J.ez.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eB.prototype
return a}if(a instanceof P.ad)return a
return J.t_(a)},
cZ:function(a){if(a==null)return a
if(a.constructor==Array)return J.ez.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eB.prototype
return a}if(a instanceof P.ad)return a
return J.t_(a)},
dH:function(a){if(typeof a=="number")return J.fp.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eQ.prototype
return a},
kE:function(a){if(typeof a=="number")return J.fp.prototype
if(typeof a=="string")return J.eA.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eQ.prototype
return a},
cH:function(a){if(typeof a=="string")return J.eA.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eQ.prototype
return a},
aK:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.eB.prototype
return a}if(a instanceof P.ad)return a
return J.t_(a)},
eh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kE(a).X(a,b)},
aV:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ap(a).S(a,b)},
vJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dH(a).as(a,b)},
cC:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dH(a).aA(a,b)},
ei:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dH(a).a4(a,b)},
vK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kE(a).ar(a,b)},
iq:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.yA(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aU(a).n(a,b)},
kJ:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.yA(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cZ(a).i(a,b,c)},
yK:function(a,b){return J.cZ(a).h(a,b)},
yL:function(a,b,c,d){return J.aK(a).h8(a,b,c,d)},
yM:function(a,b){return J.cH(a).aQ(a,b)},
e0:function(a,b){return J.aK(a).hb(a,b)},
vL:function(a){return J.aK(a).hd(a)},
yN:function(a,b,c){return J.dH(a).af(a,b,c)},
yO:function(a,b){return J.kE(a).aD(a,b)},
yP:function(a,b){return J.aK(a).aE(a,b)},
yQ:function(a,b){return J.aU(a).Y(a,b)},
kK:function(a,b,c){return J.aU(a).eb(a,b,c)},
yR:function(a,b){return J.aK(a).V(a,b)},
yS:function(a,b){return J.aK(a).ho(a,b)},
vM:function(a,b){return J.cZ(a).T(a,b)},
yT:function(a,b,c,d){return J.cZ(a).by(a,b,c,d)},
kL:function(a){return J.dH(a).aj(a)},
yU:function(a,b){return J.cZ(a).a0(a,b)},
vN:function(a){return J.aK(a).ge7(a)},
vO:function(a){return J.aK(a).ge9(a)},
yV:function(a){return J.aK(a).ghn(a)},
yW:function(a){return J.aK(a).gbu(a)},
fN:function(a){return J.aK(a).gaq(a)},
yX:function(a){return J.aK(a).gcQ(a)},
yY:function(a){return J.cZ(a).gF(a)},
dI:function(a){return J.ap(a).ga7(a)},
to:function(a){return J.aU(a).gU(a)},
vP:function(a){return J.aK(a).gZ(a)},
d_:function(a){return J.cZ(a).gW(a)},
c3:function(a){return J.aU(a).gm(a)},
yZ:function(a){return J.aK(a).gH(a)},
z_:function(a){return J.aK(a).ghX(a)},
z0:function(a){return J.aK(a).gcZ(a)},
z1:function(a){return J.aK(a).gih(a)},
z2:function(a){return J.aK(a).gii(a)},
vQ:function(a){return J.ap(a).gae(a)},
tp:function(a){return J.aK(a).gaC(a)},
z3:function(a){return J.aK(a).gil(a)},
z4:function(a){return J.aK(a).gaH(a)},
z5:function(a,b){return J.aK(a).bL(a,b)},
z6:function(a,b){return J.aU(a).bj(a,b)},
vR:function(a,b,c,d,e){return J.aK(a).em(a,b,c,d,e)},
vS:function(a,b){return J.cZ(a).az(a,b)},
z7:function(a,b,c){return J.cH(a).eq(a,b,c)},
vT:function(a,b){return J.aK(a).i1(a,b)},
z8:function(a){return J.cZ(a).ia(a)},
z9:function(a,b,c,d){return J.aK(a).ic(a,b,c,d)},
kM:function(a,b,c){return J.cH(a).d2(a,b,c)},
za:function(a,b,c){return J.cH(a).ig(a,b,c)},
fO:function(a,b){return J.aK(a).b9(a,b)},
kN:function(a,b){return J.aK(a).sbu(a,b)},
zb:function(a,b){return J.aK(a).sa8(a,b)},
zc:function(a,b){return J.aK(a).sah(a,b)},
zd:function(a,b){return J.aK(a).da(a,b)},
ze:function(a,b){return J.cZ(a).de(a,b)},
ej:function(a,b){return J.cH(a).eX(a,b)},
zf:function(a,b){return J.cH(a).aa(a,b)},
vU:function(a){return J.dH(a).l(a)},
zg:function(a){return J.cZ(a).ao(a)},
tq:function(a){return J.cH(a).eC(a)},
zh:function(a,b){return J.dH(a).bI(a,b)},
cD:function(a){return J.ap(a).A(a)},
vV:function(a){return J.cH(a).io(a)},
tr:function(a){return J.cH(a).bk(a)},
zi:function(a){return J.cH(a).eE(a)},
f:function f(){},
mW:function mW(){},
mX:function mX(){},
hx:function hx(){},
o8:function o8(){},
eQ:function eQ(){},
eB:function eB(){},
ez:function ez($ti){this.$ti=$ti},
uA:function uA($ti){this.$ti=$ti},
ir:function ir(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fp:function fp(){},
jI:function jI(){},
jH:function jH(){},
eA:function eA(){}},P={
Hk:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.I0()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.du(new P.qd(t),1)).observe(s,{childList:true})
return new P.qc(t,s,r)}else if(self.setImmediate!=null)return P.I1()
return P.I2()},
Hl:function(a){++u.globalState.f.b
self.scheduleImmediate(H.du(new P.qe(a),0))},
Hm:function(a){++u.globalState.f.b
self.setImmediate(H.du(new P.qf(a),0))},
Hn:function(a){P.vj(C.p,a)},
bq:function(a,b){P.y7(null,a)
return b.ghC()},
ch:function(a,b){P.y7(a,b)},
bp:function(a,b){J.yP(b,a)},
bo:function(a,b){b.cL(H.bS(a),H.cB(a))},
y7:function(a,b){var t,s,r,q
t=new P.rD(b)
s=new P.rE(b)
r=J.ap(a)
if(!!r.$isbn)a.cE(t,s)
else if(!!r.$isct)a.c7(t,s)
else{q=new P.bn(0,$.an,null,[null])
q.a=4
q.c=a
q.cE(t,null)}},
br:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.an.toString
return new P.rO(t)},
yd:function(a,b){if(H.f0(a,{func:1,args:[P.cV,P.cV]})){b.toString
return a}else{b.toString
return a}},
Aq:function(a,b){var t=new P.bn(0,$.an,null,[b])
P.xA(C.p,new P.rS(a,t))
return t},
ws:function(a,b,c){var t
if(a==null)a=new P.fs()
t=$.an
if(t!==C.e)t.toString
t=new P.bn(0,t,null,[c])
t.ds(a,b)
return t},
Ar:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bn(0,$.an,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.mm(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bH)(a),++l){q=a[l]
p=t.b
q.c7(new P.ml(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bn(0,$.an,null,[null])
m.dr(C.C)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.bS(j)
n=H.cB(j)
if(t.b===0||!1)return P.ws(o,n,null)
else{t.c=o
t.d=n}}return s},
bj:function(a){return new P.ky(new P.bn(0,$.an,null,[a]),[a])},
ya:function(a,b,c){$.an.toString
a.al(b,c)},
Hq:function(a,b){var t=new P.bn(0,$.an,null,[b])
t.a=4
t.c=a
return t},
xX:function(a,b){var t,s,r
b.a=1
try{a.c7(new P.qG(b),new P.qH(b))}catch(r){t=H.bS(r)
s=H.cB(r)
P.yF(new P.qI(b,t,s))}},
qF:function(a,b){var t,s,r
for(;a.gfN();)a=a.c
t=a.gcu()
s=b.c
if(t){b.c=null
r=b.bV(s)
b.a=a.a
b.c=a.c
P.fE(b,r)}else{b.a=2
b.c=a
a.dS(s)}},
fE:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fN(p)
n=p.gaM()
s.toString
P.kC(null,null,s,o,n)}return}for(;b.gcz()!=null;b=m){m=b.a
b.a=null
P.fE(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.geg()||b.gef()){k=b.gh6()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fN(p)
n=p.gaM()
s.toString
P.kC(null,null,s,o,n)
return}j=$.an
if(j==null?k!=null:j!==k)$.an=k
else j=null
if(b.gef())new P.qN(t,r,q,b).$0()
else if(s){if(b.geg())new P.qM(r,b,l).$0()}else if(b.ghJ())new P.qL(t,r,b).$0()
if(j!=null)$.an=j
s=r.b
if(!!J.ap(s).$isct){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bV(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qF(s,i)
return}}i=b.b
b=i.bU()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
HV:function(){var t,s
for(;t=$.fI,t!=null;){$.im=null
s=t.b
$.fI=s
if(s==null)$.il=null
t.a.$0()}},
HX:function(){$.vx=!0
try{P.HV()}finally{$.im=null
$.vx=!1
if($.fI!=null)$.$get$vs().$1(P.yo())}},
yk:function(a){var t=new P.kl(a,null)
if($.fI==null){$.il=t
$.fI=t
if(!$.vx)$.$get$vs().$1(P.yo())}else{$.il.b=t
$.il=t}},
HW:function(a){var t,s,r
t=$.fI
if(t==null){P.yk(a)
$.im=$.il
return}s=new P.kl(a,null)
r=$.im
if(r==null){s.b=t
$.im=s
$.fI=s}else{s.b=r.b
r.b=s
$.im=s
if(s.b==null)$.il=s}},
yF:function(a){var t=$.an
if(C.e===t){P.fJ(null,null,C.e,a)
return}t.toString
P.fJ(null,null,t,t.cJ(a,!0))},
J0:function(a,b){return new P.rj(null,a,!1,[b])},
yh:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.bS(o)
s=H.cB(o)
$.an.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fN(r)
q=n
p=r.gaM()
c.$2(q,p)}}},
HM:function(a,b,c,d){var t=a.c_(0)
if(!!J.ap(t).$isct&&t!==$.$get$ho())t.ca(new P.rG(b,c,d))
else b.al(c,d)},
y8:function(a,b){return new P.rF(a,b)},
vw:function(a,b,c){var t=a.c_(0)
if(!!J.ap(t).$isct&&t!==$.$get$ho())t.ca(new P.rH(b,c))
else b.aJ(c)},
Hp:function(a,b,c,d,e,f,g){var t,s
t=$.an
s=e?1:0
s=new P.ib(a,null,null,null,null,t,s,null,null,[f,g])
s.fd(b,c,d,e,g)
s.fg(a,b,c,d,e,f,g)
return s},
HL:function(a,b,c){$.an.toString
a.bN(b,c)},
xA:function(a,b){var t=$.an
if(t===C.e){t.toString
return P.vj(a,b)}return P.vj(a,t.cJ(b,!0))},
vj:function(a,b){var t=C.a.am(a.a,1000)
return H.Hf(t<0?0:t,b)},
kC:function(a,b,c,d,e){var t={}
t.a=d
P.HW(new P.rN(t,e))},
ye:function(a,b,c,d){var t,s
s=$.an
if(s===c)return d.$0()
$.an=c
t=s
try{s=d.$0()
return s}finally{$.an=t}},
yg:function(a,b,c,d,e){var t,s
s=$.an
if(s===c)return d.$1(e)
$.an=c
t=s
try{s=d.$1(e)
return s}finally{$.an=t}},
yf:function(a,b,c,d,e,f){var t,s
s=$.an
if(s===c)return d.$2(e,f)
$.an=c
t=s
try{s=d.$2(e,f)
return s}finally{$.an=t}},
fJ:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cJ(d,!(!t||!1))
P.yk(d)},
qd:function qd(a){this.a=a},
qc:function qc(a,b,c){this.a=a
this.b=b
this.c=c},
qe:function qe(a){this.a=a},
qf:function qf(a){this.a=a},
rD:function rD(a){this.a=a},
rE:function rE(a){this.a=a},
rO:function rO(a){this.a=a},
ct:function ct(){},
rS:function rS(a,b){this.a=a
this.b=b},
mm:function mm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ml:function ml(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f8:function f8(){},
km:function km(){},
dZ:function dZ(a,$ti){this.a=a
this.$ti=$ti},
ky:function ky(a,$ti){this.a=a
this.$ti=$ti},
kr:function kr(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bn:function bn(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qC:function qC(a,b){this.a=a
this.b=b},
qK:function qK(a,b){this.a=a
this.b=b},
qG:function qG(a){this.a=a},
qH:function qH(a){this.a=a},
qI:function qI(a,b,c){this.a=a
this.b=b
this.c=c},
qE:function qE(a,b){this.a=a
this.b=b},
qJ:function qJ(a,b){this.a=a
this.b=b},
qD:function qD(a,b,c){this.a=a
this.b=b
this.c=c},
qN:function qN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qO:function qO(a){this.a=a},
qM:function qM(a,b,c){this.a=a
this.b=b
this.c=c},
qL:function qL(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(a,b){this.a=a
this.b=b},
dr:function dr(){},
oW:function oW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oU:function oU(a,b){this.a=a
this.b=b},
oV:function oV(a,b){this.a=a
this.b=b},
oX:function oX(a){this.a=a},
p1:function p1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p_:function p_(a,b){this.a=a
this.b=b},
p0:function p0(){},
p2:function p2(a){this.a=a},
p5:function p5(a){this.a=a},
p6:function p6(a,b){this.a=a
this.b=b},
p3:function p3(a,b){this.a=a
this.b=b},
p4:function p4(a){this.a=a},
p7:function p7(a,b){this.a=a
this.b=b},
p8:function p8(a,b){this.a=a
this.b=b},
oY:function oY(a,b,c){this.a=a
this.b=b
this.c=c},
oZ:function oZ(a){this.a=a},
oT:function oT(){},
ds:function ds(){},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
qi:function qi(a){this.a=a},
kp:function kp(){},
qq:function qq(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qs:function qs(b,c,a){this.b=b
this.c=c
this.a=a},
qr:function qr(){},
r2:function r2(){},
r3:function r3(a,b){this.a=a
this.b=b},
ri:function ri(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
rj:function rj(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
rG:function rG(a,b,c){this.a=a
this.b=b
this.c=c},
rF:function rF(a,b){this.a=a
this.b=b},
rH:function rH(a,b){this.a=a
this.b=b},
ia:function ia(){},
ib:function ib(x,y,a,b,c,d,e,f,r,$ti){var _=this
_.x=x
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
r0:function r0(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
f1:function f1(a,b){this.a=a
this.b=b},
rC:function rC(){},
rN:function rN(a,b){this.a=a
this.b=b},
r6:function r6(){},
r7:function r7(a,b){this.a=a
this.b=b},
r8:function r8(a,b){this.a=a
this.b=b},
r9:function r9(a,b){this.a=a
this.b=b},
Hr:function(a,b){var t=a[b]
return t===a?null:t},
vu:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vt:function(){var t=Object.create(null)
P.vu(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
xb:function(a,b,c){return H.yu(a,new H.w(0,null,null,null,null,null,0,[b,c]))},
cJ:function(a,b){return new H.w(0,null,null,null,null,null,0,[a,b])},
jJ:function(){return new H.w(0,null,null,null,null,null,0,[null,null])},
hA:function(a){return H.yu(a,new H.w(0,null,null,null,null,null,0,[null,null]))},
ie:function(a,b){return new P.ku(0,null,null,null,null,null,0,[a,b])},
Hu:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
E:function(a,b,c,d,e){return new P.qQ(0,null,null,null,null,[d,e])},
uu:function(a,b,c){var t,s
if(P.vy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$io()
s.push(a)
try{P.HU(a,t)}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=P.xy(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jF:function(a,b,c){var t,s,r
if(P.vy(a))return b+"..."+c
t=new P.cg(b)
s=$.$get$io()
s.push(a)
try{r=t
r.O=P.xy(r.gO(),a,", ")}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=t
s.O=s.gO()+c
s=t.gO()
return s.charCodeAt(0)==0?s:s},
vy:function(a){var t,s
for(t=0;s=$.$get$io(),t<s.length;++t)if(a===s[t])return!0
return!1},
HU:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.d_(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.G())return
q=H.z(t.gP())
b.push(q)
s+=q.length+2;++r}if(!t.G()){if(r<=5)return
if(0>=b.length)return H.u(b,-1)
p=b.pop()
if(0>=b.length)return H.u(b,-1)
o=b.pop()}else{n=t.gP();++r
if(!t.G()){if(r<=4){b.push(H.z(n))
return}p=H.z(n)
if(0>=b.length)return H.u(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gP();++r
for(;t.G();n=m,m=l){l=t.gP();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.u(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.z(n)
p=H.z(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.u(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
xa:function(a,b,c,d,e){return new H.w(0,null,null,null,null,null,0,[d,e])},
FO:function(a,b,c){var t=P.xa(null,null,null,b,c)
a.a0(0,new P.rU(t))
return t},
FP:function(a,b,c,d,e){var t=P.xa(null,null,null,d,e)
P.FU(t,a,b,c)
return t},
a0:function(a,b,c,d){return new P.kt(0,null,null,null,null,null,0,[d])},
jK:function(a,b){var t,s
t=P.a0(null,null,null,b)
for(s=J.d_(a);s.G();)t.h(0,s.gP())
return t},
xg:function(a){var t,s,r
t={}
if(P.vy(a))return"{...}"
s=new P.cg("")
try{$.$get$io().push(a)
r=s
r.O=r.gO()+"{"
t.a=!0
a.a0(0,new P.nq(t,s))
t=s
t.O=t.gO()+"}"}finally{t=$.$get$io()
if(0>=t.length)return H.u(t,-1)
t.pop()}t=s.gO()
return t.charCodeAt(0)==0?t:t},
FU:function(a,b,c,d){var t,s,r
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.bH)(b),++s){r=b[s]
a.i(0,c.$1(r),d.$1(r))}},
uG:function(a,b){var t=new P.nd(null,0,0,0,[b])
t.f8(a,b)
return t},
qQ:function qQ(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qT:function qT(a){this.a=a},
qR:function qR(a,$ti){this.a=a
this.$ti=$ti},
qS:function qS(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ku:function ku(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
kt:function kt(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qX:function qX(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qU:function qU(){},
fo:function fo(){},
hv:function hv(){},
rU:function rU(a){this.a=a},
hB:function hB(){},
fu:function fu(){},
aT:function aT(){},
rt:function rt(){},
jL:function jL(){},
eR:function eR(a,$ti){this.a=a
this.$ti=$ti},
nq:function nq(a,b){this.a=a
this.b=b},
nd:function nd(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qY:function qY(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
oC:function oC(){},
oB:function oB(){},
vX:function(a,b,c,d,e,f){if(C.d.bM(f,4)!==0)throw H.h(new P.bQ("Invalid base64 padding, padded length must be multiple of four, is "+H.z(f),a,c))
if(d+e!==f)throw H.h(new P.bQ("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.h(new P.bQ("Invalid base64 padding, more than two '=' characters",a,b))},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
h_:function h_(){},
h2:function h2(){},
lF:function lF(){},
pP:function pP(a){this.a=a},
pQ:function pQ(a){this.a=a},
rv:function rv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rx:function rx(a){this.a=a},
rw:function rw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Hd:function(a,b,c){var t,s,r,q
if(b<0)throw H.h(P.bG(b,0,J.c3(a),null,null))
t=c==null
if(!t&&c<b)throw H.h(P.bG(c,b,J.c3(a),null,null))
s=J.d_(a)
for(r=0;r<b;++r)if(!s.G())throw H.h(P.bG(b,0,r,null,null))
q=[]
if(t)for(;s.G();)q.push(s.gP())
else for(r=b;r<c;++r){if(!s.G())throw H.h(P.bG(c,b,r,null,null))
q.push(s.gP())}return H.xr(q)},
xy:function(a,b,c){var t=J.d_(b)
if(!t.G())return a
if(c.length===0){do a+=H.z(t.gP())
while(t.G())}else{a+=H.z(t.gP())
for(;t.G();)a=a+c+H.z(t.gP())}return a},
zM:function(a,b){return J.yO(a,b)},
zQ:function(a,b){var t=new P.e3(a,b)
t.dl(a,b)
return t},
zR:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.z(t)
if(t>=10)return s+"00"+H.z(t)
return s+"000"+H.z(t)},
zS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
iy:function(a){if(a>=10)return""+a
return"0"+a},
we:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cD(a)
if(typeof a==="string")return JSON.stringify(a)
return P.Aa(a)},
Aa:function(a){var t=J.ap(a)
if(!!t.$isf7)return t.A(a)
return H.od(a)},
dJ:function(a){return new P.d0(!1,null,null,a)},
e1:function(a,b,c){return new P.d0(!0,a,b,c)},
zk:function(a){return new P.d0(!1,null,a,"Must not be null")},
xt:function(a){return new P.eJ(null,null,!1,null,null,a)},
k1:function(a,b,c){return new P.eJ(null,null,!0,a,b,"Value not in range")},
bG:function(a,b,c,d,e){return new P.eJ(b,c,!0,a,d,"Invalid value")},
dq:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a8(a)
if(!(0>a)){if(typeof c!=="number")return H.a8(c)
t=a>c}else t=!0
if(t)throw H.h(P.bG(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a8(b)
if(!(a>b)){if(typeof c!=="number")return H.a8(c)
t=b>c}else t=!0
if(t)throw H.h(P.bG(b,a,c,"end",f))
return b}return c},
bB:function(a,b,c,d,e){var t=e!=null?e:J.c3(b)
return new P.mD(b,t,!0,a,c,"Index out of range")},
lL:function(a){return new P.qB(a)},
db:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.d_(a);s.G();)t.push(s.gP())
if(b)return t
t.fixed$length=Array
return t},
FQ:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
l:function(a,b){var t=P.db(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fM:function(a){H.IF(H.z(a))},
d6:function(a,b,c){return new H.hw(a,H.uy(a,!1,!0,!1),null,null)},
pd:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dq(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a4()
s=c<t}else s=!0
return H.xr(s?C.b.cf(a,b,c):a)}if(!!J.ap(a).$isfr)return H.Gh(a,b,P.dq(b,c,a.length,null,null,null))
return P.Hd(a,b,c)},
pJ:function(){var t=H.Gb()
if(t!=null)return P.xN(t,0,null)
throw H.h(new P.V("'Uri.base' is not supported"))},
xN:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a6(a,b+4)^58)*3|C.c.a6(a,b)^100|C.c.a6(a,b+1)^97|C.c.a6(a,b+2)^116|C.c.a6(a,b+3)^97)>>>0
if(s===0)return P.xM(b>0||c<c?C.c.I(a,b,c):a,5,null).geG()
else if(s===32)return P.xM(C.c.I(a,t,c),0,null).geG()}r=H.a(new Array(8),[P.C])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.yi(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.as()
if(p>=b)if(P.yi(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.X()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a4()
if(typeof l!=="number")return H.a8(l)
if(k<l)l=k
if(typeof m!=="number")return m.a4()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a4()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a4()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aI(a,"..",m)))h=l>m+2&&C.c.aI(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aI(a,"file",b)){if(o<=b){if(!C.c.aI(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.I(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aG(a,m,l,"/");++l;++k;++c}else{a=C.c.I(a,b,m)+"/"+C.c.I(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aI(a,"http",b)){if(q&&n+3===m&&C.c.aI(a,"80",n+1))if(b===0&&!0){a=C.c.aG(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.I(a,b,n)+C.c.I(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aI(a,"https",b)){if(q&&n+4===m&&C.c.aI(a,"443",n+1))if(b===0&&!0){a=C.c.aG(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.I(a,b,n)+C.c.I(a,m,c)
p-=b
o-=b
n-=b
t=4+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="https"}else i=null
j=!0}}}else i=null
if(j){if(b>0||c<a.length){a=C.c.I(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.rh(a,p,o,n,m,l,k,i,null)}return P.Hx(a,b,c,p,o,n,m,l,k,i)},
xP:function(a,b){return C.b.hz(a.split("&"),P.jJ(),new P.pM(b))},
Hg:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pI(a)
s=H.cG(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.a_(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.eI(C.c.I(a,p,q),null,null)
if(J.cC(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.u(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.eI(C.c.I(a,p,c),null,null)
if(J.cC(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.u(r,o)
r[o]=m
return r},
xO:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pK(a)
s=new P.pL(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.a_(a,q)
if(m===58){if(q===b){++q
if(C.c.a_(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.aV(C.b.gbb(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Hg(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.au()
h=j[1]
if(typeof h!=="number")return H.a8(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.au()
i=j[3]
if(typeof i!=="number")return H.a8(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.ap(e).S(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.u(g,f)
g[f]=0
i=f+1
if(i>=16)return H.u(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.dd()
i=C.d.aY(e,8)
if(f<0||f>=16)return H.u(g,f)
g[f]=i
i=f+1
if(i>=16)return H.u(g,i)
g[i]=e&255
f+=2}}return g},
Hx:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.HF(a,b,d)
else{if(d===b)P.ij(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.HG(a,t,e-1):""
r=P.HB(a,e,f,!1)
if(typeof f!=="number")return f.X()
q=f+1
if(typeof g!=="number")return H.a8(g)
p=q<g?P.HD(H.eI(C.c.I(a,q,g),null,new P.rR(a,f)),j):null}else{s=""
r=null
p=null}o=P.HC(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a4()
n=h<i?P.HE(a,h+1,i,null):null
return new P.kz(j,s,r,p,o,n,i<c?P.HA(a,i+1,c):null,null,null,null,null,null)},
y1:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ij:function(a,b,c){throw H.h(new P.bQ(c,a,b))},
HD:function(a,b){if(a!=null&&J.aV(a,P.y1(b)))return
return a},
HB:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.a_(a,b)===91){if(typeof c!=="number")return c.ak()
t=c-1
if(C.c.a_(a,t)!==93)P.ij(a,b,"Missing end `]` to match `[` in host")
P.xO(a,b+1,t)
return C.c.I(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a8(c)
s=b
for(;s<c;++s)if(C.c.a_(a,s)===58){P.xO(a,b,c)
return"["+a+"]"}return P.HI(a,b,c)},
HI:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a8(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.a_(a,t)
if(p===37){o=P.y6(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.cg("")
m=C.c.I(a,s,t)
l=r.O+=!q?m.toLowerCase():m
if(n){o=C.c.I(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.O=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.u(C.F,n)
n=(C.F[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.cg("")
if(s<t){r.O+=C.c.I(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.u(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.ij(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.a_(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.cg("")
m=C.c.I(a,s,t)
r.O+=!q?m.toLowerCase():m
r.O+=P.y2(p)
t+=k
s=t}}}}if(r==null)return C.c.I(a,b,c)
if(s<c){m=C.c.I(a,s,c)
r.O+=!q?m.toLowerCase():m}n=r.O
return n.charCodeAt(0)==0?n:n},
HF:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.y4(C.c.a6(a,b)))P.ij(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a6(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.u(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.ij(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.I(a,b,c)
return P.Hy(s?a.toLowerCase():a)},
Hy:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
HG:function(a,b,c){var t=P.fH(a,b,c,C.a4,!1)
return t==null?C.c.I(a,b,c):t},
HC:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fH(a,b,c,C.H,!1)
if(r==null)r=C.c.I(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.a9(r,"/"))r="/"+r
return P.HH(r,e,f)},
HH:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.a9(a,"/"))return P.HJ(a,!t||c)
return P.HK(a)},
HE:function(a,b,c,d){var t=P.fH(a,b,c,C.k,!1)
return t==null?C.c.I(a,b,c):t},
HA:function(a,b,c){var t=P.fH(a,b,c,C.k,!1)
return t==null?C.c.I(a,b,c):t},
y6:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.a_(a,b+1)
r=C.c.a_(a,t)
q=H.t1(s)
p=H.t1(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aY(o,4)
if(t>=8)return H.u(C.E,t)
t=(C.E[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hR(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.I(a,b,b+3).toUpperCase()
return},
y2:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a6("0123456789ABCDEF",a>>>4)
t[2]=C.c.a6("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.h1(a,6*r)&63|s
if(p>=q)return H.u(t,p)
t[p]=37
n=p+1
m=C.c.a6("0123456789ABCDEF",o>>>4)
if(n>=q)return H.u(t,n)
t[n]=m
m=p+2
n=C.c.a6("0123456789ABCDEF",o&15)
if(m>=q)return H.u(t,m)
t[m]=n
p+=3}}return P.pd(t,0,null)},
fH:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.cH(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a4()
if(typeof c!=="number")return H.a8(c)
if(!(r<c))break
c$0:{o=s.a_(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.u(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.y6(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.u(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ij(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.a_(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.y2(o)}}if(p==null)p=new P.cg("")
p.O+=C.c.I(a,q,r)
p.O+=H.z(m)
if(typeof l!=="number")return H.a8(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a4()
if(q<c)p.O+=s.I(a,q,c)
t=p.O
return t.charCodeAt(0)==0?t:t},
y5:function(a){if(C.c.a9(a,"."))return!0
return C.c.bj(a,"/.")!==-1},
HK:function(a){var t,s,r,q,p,o,n
if(!P.y5(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bH)(s),++p){o=s[p]
if(J.aV(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.u(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.aR(t,"/")},
HJ:function(a,b){var t,s,r,q,p,o
if(!P.y5(a))return!b?P.y3(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bH)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.aV(C.b.gbb(t),"..")){if(0>=t.length)return H.u(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.u(t,0)
s=J.to(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.aV(C.b.gbb(t),".."))t.push("")
if(!b){if(0>=t.length)return H.u(t,0)
s=P.y3(t[0])
if(0>=t.length)return H.u(t,0)
t[0]=s}return C.b.aR(t,"/")},
y3:function(a){var t,s,r,q
t=J.aU(a)
s=t.gm(a)
if(typeof s!=="number")return s.as()
if(s>=2&&P.y4(t.a_(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a8(s)
if(!(r<s))break
q=t.a_(a,r)
if(q===58)return C.c.I(a,0,r)+"%3A"+C.c.aa(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.u(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Hz:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.a_(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.h(P.dJ("Invalid URL encoding"))}}return t},
ru:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a8(c)
t=J.cH(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.a_(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.o!==d)p=!1
else p=!0
if(p)return t.I(a,b,c)
else o=new H.ld(t.I(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.a_(a,s)
if(q>127)throw H.h(P.dJ("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.h(P.dJ("Truncated URI"))
o.push(P.Hz(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pQ(!1).hk(o)},
y4:function(a){var t=a|32
return 97<=t&&t<=122},
xM:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.aU(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a8(o)
if(!(r<o))break
c$0:{p=s.a_(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.h(new P.bQ("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.h(new P.bQ("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a8(o)
if(!(r<o))break
p=s.a_(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbb(t)
if(p!==44||r!==m+7||!s.aI(a,"base64",m+1))throw H.h(new P.bQ("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.M.hY(0,a,o,s.gm(a))
else{l=P.fH(a,o,s.gm(a),C.k,!0)
if(l!=null)a=s.aG(a,o,s.gm(a),l)}return new P.pH(a,t,c)},
HR:function(){var t,s,r,q,p
t=P.FQ(22,new P.rK(),!0,P.dg)
s=new P.rJ(t)
r=new P.rL()
q=new P.rM()
p=s.$2(0,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,".",14)
r.$3(p,":",34)
r.$3(p,"/",3)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(14,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,".",15)
r.$3(p,":",34)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(15,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,"%",225)
r.$3(p,":",34)
r.$3(p,"/",9)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(1,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,":",34)
r.$3(p,"/",10)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(2,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
r.$3(p,"/",131)
r.$3(p,".",146)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(3,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",68)
r.$3(p,".",18)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(4,229)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
q.$3(p,"AZ",229)
r.$3(p,":",102)
r.$3(p,"@",68)
r.$3(p,"[",232)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(5,229)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
q.$3(p,"AZ",229)
r.$3(p,":",102)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(6,231)
q.$3(p,"19",7)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(7,231)
q.$3(p,"09",7)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
r.$3(s.$2(8,8),"]",5)
p=s.$2(9,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",16)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(16,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",17)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(17,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",9)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(10,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",18)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(18,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",19)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(19,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(11,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",10)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(12,236)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
r.$3(p,"?",12)
r.$3(p,"#",205)
p=s.$2(13,237)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
r.$3(p,"?",13)
q.$3(s.$2(20,245),"az",21)
p=s.$2(21,245)
q.$3(p,"az",21)
q.$3(p,"09",21)
r.$3(p,"+-.",21)
return t},
yi:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$yj()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.u(t,d)
r=t[d]
q=C.c.a6(a,s)^96
p=J.iq(r,q>95?31:q)
if(typeof p!=="number")return p.aL()
d=p&31
o=C.d.aY(p,5)
if(o>=8)return H.u(e,o)
e[o]=s}return d},
cY:function cY(){},
bJ:function bJ(){},
e3:function e3(a,b){this.a=a
this.b=b},
W:function W(){},
dM:function dM(a){this.a=a},
lC:function lC(){},
lD:function lD(){},
eo:function eo(){},
fs:function fs(){},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mD:function mD(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a){this.a=a},
eP:function eP(a){this.a=a},
aN:function aN(a){this.a=a},
bN:function bN(a){this.a=a},
nW:function nW(){},
k9:function k9(){},
lu:function lu(a){this.a=a},
qB:function qB(a){this.a=a},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.c=c},
lM:function lM(a,bR,$ti){this.a=a
this.bR=bR
this.$ti=$ti},
C:function C(){},
o:function o(){},
jG:function jG(){},
p:function p(){},
aZ:function aZ(){},
cV:function cV(){},
dv:function dv(){},
ad:function ad(){},
dC:function dC(){},
ed:function ed(){},
dV:function dV(){},
x:function x(){},
cg:function cg(O){this.O=O},
eS:function eS(){},
pM:function pM(a){this.a=a},
pI:function pI(a){this.a=a},
pK:function pK(a){this.a=a},
pL:function pL(a,b){this.a=a
this.b=b},
kz:function kz(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
rR:function rR(a,b){this.a=a
this.b=b},
pH:function pH(a,b,c){this.a=a
this.b=b
this.c=c},
rK:function rK(){},
rJ:function rJ(a){this.a=a},
rL:function rL(){},
rM:function rM(){},
rh:function rh(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qp:function qp(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
yp:function(a){var t,s,r,q,p
if(a==null)return
t=P.jJ()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bH)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
I9:function(a){var t,s
t=new P.bn(0,$.an,null,[null])
s=new P.dZ(t,[null])
a.then(H.du(new P.rV(s),1))["catch"](H.du(new P.rW(s),1))
return t},
tC:function(){var t=$.w9
if(t==null){t=J.kK(window.navigator.userAgent,"Opera",0)
$.w9=t}return t},
wb:function(){var t=$.wa
if(t==null){t=P.tC()!==!0&&J.kK(window.navigator.userAgent,"WebKit",0)
$.wa=t}return t},
zT:function(){var t,s
t=$.w6
if(t!=null)return t
s=$.w7
if(s==null){s=J.kK(window.navigator.userAgent,"Firefox",0)
$.w7=s}if(s)t="-moz-"
else{s=$.w8
if(s==null){s=P.tC()!==!0&&J.kK(window.navigator.userAgent,"Trident/",0)
$.w8=s}if(s)t="-ms-"
else t=P.tC()===!0?"-o-":"-webkit-"}$.w6=t
return t},
rm:function rm(){},
ro:function ro(a,b){this.a=a
this.b=b},
q9:function q9(){},
qa:function qa(a,b){this.a=a
this.b=b},
rn:function rn(a,b){this.a=a
this.b=b},
kk:function kk(a,b,c){this.a=a
this.b=b
this.c=c},
rV:function rV(a){this.a=a},
rW:function rW(a){this.a=a},
lk:function lk(){},
ll:function ll(a){this.a=a},
HP:function(a){var t,s,r
t=new P.bn(0,$.an,null,[null])
s=new P.ky(t,[null])
a.toString
r=W.U
W.fD(a,"success",new P.rI(a,s),!1,r)
W.fD(a,"error",s.gea(),!1,r)
return t},
lw:function lw(){},
rI:function rI(a,b){this.a=a
this.b=b},
mC:function mC(){},
nS:function nS(){},
hS:function hS(){},
pB:function pB(){},
Hw:function(a){var t=new P.r4(0,0)
t.fi(a)
return t},
qW:function qW(){},
r4:function r4(a,b){this.a=a
this.b=b},
r5:function r5(){},
bW:function bW(){},
kO:function kO(){},
el:function el(){},
lN:function lN(){},
lO:function lO(){},
lP:function lP(){},
lQ:function lQ(){},
lR:function lR(){},
lS:function lS(){},
lT:function lT(){},
lU:function lU(){},
lV:function lV(){},
lW:function lW(){},
lX:function lX(){},
lY:function lY(){},
lZ:function lZ(){},
m_:function m_(){},
m0:function m0(){},
m1:function m1(){},
mg:function mg(){},
cv:function cv(){},
mz:function mz(){},
da:function da(){},
n6:function n6(){},
j4:function j4(){},
jo:function jo(){},
nr:function nr(){},
ns:function ns(){},
dc:function dc(){},
nO:function nO(){},
j5:function j5(){},
jp:function jp(){},
o5:function o5(){},
oa:function oa(){},
hU:function hU(){},
pc:function pc(){},
j6:function j6(){},
jq:function jq(){},
pf:function pf(){},
kV:function kV(a){this.a=a},
c8:function c8(){},
ph:function ph(){},
pj:function pj(){},
eO:function eO(){},
pr:function pr(){},
df:function df(){},
pC:function pC(){},
j7:function j7(){},
jr:function jr(){},
pO:function pO(){},
pS:function pS(){},
pT:function pT(){},
ic:function ic(){},
ra:function ra(){},
rb:function rb(){},
rc:function rc(){},
bi:function bi(){},
dg:function dg(){},
fT:function fT(){},
f2:function f2(){},
fU:function fU(){},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
bI:function bI(){},
f4:function f4(){},
l4:function l4(){},
lj:function lj(){},
jW:function jW(){},
kQ:function kQ(){},
oo:function oo(){},
rz:function rz(){},
k8:function k8(){},
j8:function j8(){},
js:function js(){}},W={
zj:function(a){var t=document.createElement("a")
if(a!=null)t.href=a
return t},
zD:function(a){if(a!=null)return new Audio(a)
return new Audio()},
zE:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
zP:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Ho:function(a){var t=new W.ql(a,null)
t.fe(a)
return t},
zU:function(a,b,c){var t,s
t=document.body
s=(t&&C.v).ax(t,a,b,c)
s.toString
t=new H.eT(new W.d8(s),new W.rQ(),[W.af])
return t.gbe(t)},
h7:function(a){var t,s,r
t="element tag unavailable"
try{s=J.z3(a)
if(typeof s==="string")t=a.tagName}catch(r){H.bS(r)}return t},
u1:function(a,b,c){return W.wt(a,null,null,b,null,null,null,c).b4(new W.mv())},
wt:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e9
s=new P.bn(0,$.an,null,[t])
r=new P.dZ(s,[t])
q=new XMLHttpRequest()
C.R.i_(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.J_
W.fD(q,"load",new W.mw(r,q),!1,t)
W.fD(q,"error",r.gea(),!1,t)
q.send()
return s},
mA:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
As:function(a){var t,s,r
s=document.createElement("input")
t=s
try{J.zc(t,a)}catch(r){H.bS(r)}return t},
eY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
y_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fD:function(a,b,c,d,e){var t=W.HZ(new W.qA(c))
t=new W.qz(0,a,b,t,!1,[e])
t.ff(a,b,c,!1,e)
return t},
xY:function(a){var t,s
t=W.zj(null)
s=window.location
t=new W.id(new W.rd(t,s))
t.fh(a)
return t},
Hs:function(a,b,c,d){return!0},
Ht:function(a,b,c,d){var t,s,r,q,p
t=d.geH()
s=t.a
s.href=c
r=s.hostname
t=t.b
q=t.hostname
if(r==null?q==null:r===q){q=s.port
p=t.port
if(q==null?p==null:q===p){q=s.protocol
t=t.protocol
t=q==null?t==null:q===t}else t=!1}else t=!1
if(!t)if(r==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
y0:function(){var t=P.x
t=new W.rq(P.jK(C.q,t),P.a0(null,null,null,t),P.a0(null,null,null,t),P.a0(null,null,null,t),null)
t.fj(null,new H.eF(C.q,new W.rr(),[H.Q(C.q,0),null]),["TEMPLATE"],null)
return t},
HQ:function(a){var t
if(!!J.ap(a).$isen)return a
t=new P.kk([],[],!1)
t.c=!0
return t.b6(a)},
HZ:function(a){var t=$.an
if(t===C.e)return a
return t.hf(a,!0)},
IH:function(a){return document.querySelector(a)},
aL:function aL(){},
ek:function ek(){},
kR:function kR(){},
f3:function f3(){},
cO:function cO(){},
kZ:function kZ(){},
h9:function h9(){},
hc:function hc(){},
l2:function l2(){},
f5:function f5(){},
f6:function f6(){},
fZ:function fZ(){},
em:function em(){},
lf:function lf(){},
iu:function iu(){},
h3:function h3(){},
lm:function lm(){},
ln:function ln(){},
h4:function h4(){},
h5:function h5(){},
lo:function lo(){},
bP:function bP(){},
f9:function f9(){},
iX:function iX(){},
ql:function ql(a,b){this.a=a
this.b=b},
jU:function jU(){},
qm:function qm(){},
iw:function iw(){},
lp:function lp(){},
lq:function lq(){},
lv:function lv(){},
fa:function fa(){},
ix:function ix(){},
en:function en(){},
iz:function iz(){},
iA:function iA(){},
ly:function ly(){},
iB:function iB(){},
iC:function iC(){},
iY:function iY(){},
jh:function jh(){},
iD:function iD(){},
iE:function iE(){},
kq:function kq(a,$ti){this.a=a
this.$ti=$ti},
cb:function cb(){},
rQ:function rQ(){},
lE:function lE(){},
h8:function h8(){},
lK:function lK(){},
U:function U(){},
aG:function aG(){},
mc:function mc(){},
ck:function ck(){},
fi:function fi(){},
iZ:function iZ(){},
ji:function ji(){},
md:function md(){},
me:function me(){},
mf:function mf(){},
mh:function mh(){},
mi:function mi(){},
iT:function iT(){},
cu:function cu(){},
ms:function ms(){},
fj:function fj(){},
j_:function j_(){},
jj:function jj(){},
iV:function iV(){},
e9:function e9(){},
mv:function mv(){},
mw:function mw(a,b){this.a=a
this.b=b},
hp:function hp(){},
my:function my(){},
hq:function hq(){},
ew:function ew(){},
mF:function mF(){},
n2:function n2(){},
n4:function n4(){},
hy:function hy(){},
hz:function hz(){},
nk:function nk(){},
np:function np(){},
hH:function hH(){},
jN:function jN(){},
nt:function nt(){},
nu:function nu(){},
nv:function nv(){},
nw:function nw(){},
nx:function nx(){},
hI:function hI(){},
cw:function cw(){},
jO:function jO(){},
j9:function j9(){},
jt:function jt(){},
nK:function nK(){},
nL:function nL(){},
d8:function d8(a){this.a=a},
af:function af(){},
jR:function jR(){},
hP:function hP(){},
ja:function ja(){},
ju:function ju(){},
nQ:function nQ(){},
nR:function nR(){},
nV:function nV(){},
nX:function nX(){},
o0:function o0(){},
o2:function o2(){},
eb:function eb(){},
o7:function o7(){},
cm:function cm(){},
jZ:function jZ(){},
jb:function jb(){},
jv:function jv(){},
oc:function oc(){},
of:function of(){},
k2:function k2(){},
k3:function k3(){},
fx:function fx(){},
k4:function k4(){},
oA:function oA(){},
oD:function oD(){},
oE:function oE(){},
oF:function oF(){},
cx:function cx(){},
k6:function k6(){},
ha:function ha(){},
hd:function hd(){},
oI:function oI(){},
hW:function hW(){},
cy:function cy(){},
k7:function k7(){},
jc:function jc(){},
jw:function jw(){},
fy:function fy(){},
oK:function oK(){},
co:function co(){},
oL:function oL(){},
oM:function oM(){},
oS:function oS(){},
pe:function pe(){},
cq:function cq(){},
ef:function ef(){},
ka:function ka(){},
pk:function pk(){},
pl:function pl(){},
i0:function i0(){},
pp:function pp(){},
cW:function cW(){},
cM:function cM(){},
ps:function ps(){},
jd:function jd(){},
jx:function jx(){},
pt:function pt(){},
hb:function hb(){},
he:function he(){},
px:function px(){},
cA:function cA(){},
kb:function kb(){},
je:function je(){},
jy:function jy(){},
fA:function fA(){},
kc:function kc(){},
eg:function eg(){},
kd:function kd(){},
pN:function pN(){},
pR:function pR(){},
fB:function fB(){},
ke:function ke(){},
pW:function pW(){},
kh:function kh(){},
q2:function q2(){},
eU:function eU(){},
fC:function fC(){},
qk:function qk(){},
i7:function i7(){},
jf:function jf(){},
jz:function jz(){},
kn:function kn(){},
jg:function jg(){},
jA:function jA(){},
qt:function qt(){},
qu:function qu(){},
ks:function ks(){},
j0:function j0(){},
jk:function jk(){},
qP:function qP(){},
ih:function ih(){},
j1:function j1(){},
jl:function jl(){},
re:function re(){},
kv:function kv(){},
j2:function j2(){},
jm:function jm(){},
kx:function kx(){},
j3:function j3(){},
jn:function jn(){},
rA:function rA(){},
rB:function rB(){},
qg:function qg(){},
i8:function i8(a){this.a=a},
ko:function ko(a){this.a=a},
qn:function qn(a,b){this.a=a
this.b=b},
qo:function qo(a,b){this.a=a
this.b=b},
qv:function qv(a){this.a=a},
qy:function qy(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
i9:function i9(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qz:function qz(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qA:function qA(a){this.a=a},
id:function id(a){this.a=a},
bw:function bw(){},
jS:function jS(a){this.a=a},
nN:function nN(a){this.a=a},
nM:function nM(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(){},
rf:function rf(){},
rg:function rg(){},
rq:function rq(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
rr:function rr(){},
rp:function rp(){},
iR:function iR(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ea:function ea(){},
rs:function rs(){},
rd:function rd(a,b){this.a=a
this.b=b},
kA:function kA(a){this.a=a},
ry:function ry(a){this.a=a}},T={
u2:function(a,b,c,d){var t
H.IO(a,"$isp",[P.C],"$asp")
t=new T.hr(a,null,d,b,null)
t.f7(a,b,c,d)
return t},
xj:function(a,b){return new T.nY(0,a,new Uint8Array(H.cG(b==null?32768:b)))},
Hi:function(a){var t=new T.q5(-1,0,0,0,0,null,null,"",[])
t.fb(a)
return t},
Hj:function(a,b){var t=new T.q6(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.fc(a,b)
return t},
fk:function(a){var t=new T.mx(null,0,2147483647)
t.f6(a)
return t},
fP:function fP(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy},
di:function di(a){this.a=a},
hr:function hr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nY:function nY(a,b,c){this.a=a
this.b=b
this.c=c},
q5:function q5(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
q6:function q6(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db},
q7:function q7(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy},
q4:function q4(a){this.a=a},
mx:function mx(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
l5:function l5(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.ab=ab
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
l7:function l7(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.ab=ab
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
lx:function lx(){},
mq:function mq(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.ab=ab
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
GG:function(a,b,c,d){var t,s
t=[P.x]
s=H.a([],t)
t=new T.hT("Glitch",0.01,0.01,0.01,s,0.5,a,new H.w(0,null,null,null,null,null,0,[X.F,P.W]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.J(null,null,A.a5),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.N]),H.a([],[A.fX]),1)
t.ad(a,b,c,d)
return t},
hT:function hT(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},
c1:function c1(a,b){this.a=a
this.b=b},
zY:function(a,b,c,d){var t,s,r,q
t=new B.dx(new P.cg(""),0,0)
t.ag(a,8)
c.toString
s=H.cU(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ag(s[q],8)
return t.b5(b)},
zX:function(a,b,c,d){var t,s,r,q,p
t=H.cG(c)
s=new Uint8Array(t)
r=new B.dk(null,0)
r.a=J.e0(a,b)
for(q=0;q<c;++q){p=r.ac(8)
if(q>=t)return H.u(s,q)
s[q]=p}return s},
zW:function(a,b,c,d){var t,s,r,q,p
t=new B.dx(new P.cg(""),0,0)
t.ag(a,8)
s=d.gcV()
r=C.f.aj(Math.log(H.kD(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cU(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ag(q[p],r)
return t.b5(b)},
zV:function(a,b,c,d){var t,s,r,q,p,o
t=H.cG(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dk(null,0)
p.a=J.e0(a,b)
for(o=0;o<c;++o){r=p.ac(q)
if(o>=t)return H.u(s,o)
s[o]=r}return s}},S={kP:function kP(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},bC:function bC(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},it:function it(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mu:function mu(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},n3:function n3(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},nn:function nn(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},oz:function oz(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},ft:function ft(){},vk:function vk(){},vl:function vl(){},vm:function vm(){},tJ:function tJ(){},tM:function tM(){},tz:function tz(){},v4:function v4(){},vo:function vo(){},vp:function vp(){},la:function la(){},uX:function uX(){},uS:function uS(){},n9:function n9(){},tD:function tD(){},tt:function tt(){},ls:function ls(){},uF:function uF(){},lt:function lt(){},o1:function o1(){},vb:function vb(){},v8:function v8(){},vc:function vc(){},ts:function ts(){},mn:function mn(){},l8:function l8(){},tx:function tx(){},tw:function tw(){},uY:function uY(){},vd:function vd(){},uZ:function uZ(){},tL:function tL(){},tK:function tK(){},va:function va(){},v9:function v9(){},pu:function pu(){},vf:function vf(){},tA:function tA(){},tB:function tB(){},vn:function vn(){},hG:function hG(){},uK:function uK(){},uL:function uL(){},uM:function uM(){},uN:function uN(){},v5:function v5(){},v6:function v6(){},v7:function v7(){},uJ:function uJ(){},uP:function uP(){},uQ:function uQ(){},tZ:function tZ(){},u_:function u_(){},u0:function u0(){},uR:function uR(){},uO:function uO(){},tu:function tu(){},vh:function vh(){},vi:function vi(){},vg:function vg(){}},K={bT:function bT(a,b){this.a=a
this.b=b},n7:function n7(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},ou:function ou(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c}},L={
zl:function(a,b,c,d){var t,s,r
t=P.x
s=A.e2
r=P.C
r=new L.aW(P.E(null,null,null,t,s),P.E(null,null,null,r,s),P.E(null,null,null,t,r),P.E(null,null,null,r,t))
r.j(0,$.b4,L.e("#FF9B00"),!0)
r.j(0,$.b6,L.e("#FF9B00"),!0)
r.j(0,$.b5,L.e("#FF8700"),!0)
r.j(0,$.bf,L.e("#7F7F7F"),!0)
r.j(0,$.be,L.e("#727272"),!0)
r.j(0,$.b8,L.e("#A3A3A3"),!0)
r.j(0,$.b9,L.e("#999999"),!0)
r.j(0,$.b7,L.e("#898989"),!0)
r.j(0,$.bd,L.e("#EFEFEF"),!0)
r.j(0,$.bc,L.e("#DBDBDB"),!0)
r.j(0,$.bb,L.e("#C6C6C6"),!0)
r.j(0,$.ba,L.e("#ADADAD"),!0)
s=[t]
t=new L.fR(0.01,0.01,0.01,0.5,a,new H.w(0,null,null,null,null,null,0,[X.F,P.W]),null,"","",!1,b,null,c,d,!1,!1,!0,1,r,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.N]),H.a([],[A.fX]),Q.J(null,null,A.a5))
t.ai(a,b,c,d)
return t},
e:function(a){if(C.c.a9(a,"#"))return A.w2(C.c.aa(a,1))
else return A.w2(a)},
fR:function fR(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ow:function ow(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1}},M={kU:function kU(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},fY:function fY(a,b){this.a=a
this.b=b},lr:function lr(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},hg:function hg(){},bA:function bA(a,b){this.a=a
this.b=b},oN:function oN(a){this.a=a},pZ:function pZ(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1}},U={kY:function kY(){},nm:function nm(a){this.a=a},nU:function nU(a){this.a=a},p9:function p9(){},pa:function pa(a){this.a=a},pb:function pb(a){this.a=a},lA:function lA(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,ab,bw,bx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.ab=ab
_.bw=bw
_.bx=bx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},m2:function m2(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},no:function no(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},b:function b(a){this.a=a},R:function R(b,c,a){this.b=b
this.c=c
this.a=a},ag:function ag(z,a,b,c,d,e,f,r,x,y){var _=this
_.z=z
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},pv:function pv(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},
Hh:function(a){if(J.cH(a).a9(a," "))return C.c.aa(a,1)
return a},
q_:function q_(a){this.a=a},
q0:function q0(a,b){this.a=a
this.b=b},
q1:function q1(a,b){this.a=a
this.b=b}},O={l_:function l_(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},cd:function cd(){},dw:function dw(){},l3:function l3(a){this.a=a},eN:function eN(){},iF:function iF(){},
IE:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.uW()
a=J.za(a,P.d6("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.ti(t))
s=document
J.vR(s.querySelector("#navbar"),"beforeend",a,C.w,null)
if(J.aV(O.In("seerOfVoid",null),"true"))P.Aq(new O.tj(),P.cV)
r=new P.e3(Date.now(),!1)
if(H.v1(r)===4&&H.v0(r)===1)J.vO(s.querySelector("body")).h(0,"voidbody")
q=H.v1(r)
p=H.v0(r)
o=C.a.A(H.xm(r))
n=C.a.A(q)
m=C.a.A(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.k0(null,null)
k.dc(H.eI(l,null,null))
k.hW()
if($.H6||k.a.cU()>0.99)H.kH(s.querySelector("#today"),"$isek").href=C.c.ar("../",t)+"dead_index.html?seed="+l
else H.kH(s.querySelector("#today"),"$isek").href=C.c.ar("../",t)+"index2.html?seed="+l},
In:function(a,b){var t,s,r,q
t=P.pJ().gbE().n(0,a)
if(t!=null)t=P.ru(t,0,J.c3(t),C.o,!1)
if(t!=null)return t
s=$.yG
if(s.length!==0){r=J.zf(window.location.href,J.z6(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.xN(H.yI(s,q,"")+"?"+$.yG,0,null).gbE().n(0,a)}return},
IR:function(){var t,s,r,q
t=document
J.vO(t.querySelector("body")).h(0,"voidbody")
s=new W.kq(t.querySelectorAll(".void"),[null])
for(t=new H.eD(s,s.gm(s),0,null,[null]);t.G();){r=t.d
q=J.yW(J.tp(r))
if(q==="none"||q.length===0)O.IK(r)
else O.Ip(r)}},
IK:function(a){var t,s
if(a==null)return
t=J.aK(a)
s=t.gaC(a)
J.kN(s,!!t.$ishW?"inline":"block")},
Ip:function(a){if(a==null)return
J.kN(J.tp(a),"none")},
IL:function(a){var t,s,r,q
if($.Id)return
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fM("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.ej(s,",")
if(!J.yQ(r,a))window.localStorage.setItem(t,H.z(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.bS(q)
P.fM("Saving isn't possible....you don't have local storage")}},
ti:function ti(a){this.a=a},
tj:function tj(){},
th:function th(){},
d4:function d4(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={pq:function pq(a){this.a=a},ol:function ol(a){this.a=a},l9:function l9(a){this.a=a},mo:function mo(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},mp:function mp(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},nP:function nP(b,a){this.b=b
this.a=a},dU:function dU(a,b){this.a=a
this.b=b},a6:function a6(a,b){this.a=a
this.b=b},dj:function dj(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},bX:function bX(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},P:function P(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iv:function iv(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bE:function bE(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},d7:function d7(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},lc:function lc(c,a,b){this.c=c
this.a=a
this.b=b},bD:function bD(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},hQ:function hQ(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iS:function iS(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jY:function jY(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ov:function ov(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},oG:function oG(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},dT:function dT(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nB:function(){var t=0,s=P.bj(),r,q
var $async$nB=P.br(function(a,b){if(a===1)return P.bo(b,s)
while(true)switch(t){case 0:P.fM("loading big bads")
r=$
q=J
t=2
return P.ch(A.eE("BigBadLists/bigBads.txt",!1,!1,null),$async$nB)
case 2:r.xi=q.ej(b,P.d6("\n|\r",!0,!1))
return P.bp(null,s)}})
return P.bq($async$nB,s)},
I7:function(a){var t,s,r,q,p,o
t=J.ej(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bH)(t),++q){p=t[q]
o=J.aU(p)
r+=" "+(J.vV(o.n(p,0))+o.aa(p,1))}return r}},A={le:function le(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
j:function(a,b,c,d,e){var t=new A.a5(c,e,null,null,a,!1,P.a0(null,null,null,G.a1),0,3)
t.J(a,b,c,!1,e)
return t},
a5:function a5(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
mV:function mV(){},
mU:function mU(){},
fX:function fX(){},
h0:function(a,b,c,d){var t=new A.e2(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.f5(a,b,c,d)
return t},
w1:function(a,b,c,d){var t=A.h0(0,0,0,255)
t.b=C.a.af(C.d.aj(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.af(C.d.aj(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.af(C.d.aj(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.af(C.d.aj(d*255),0,255)
return t},
zK:function(a,b){if(b){if(typeof a!=="number")return a.aL()
return A.h0((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aL()
return A.h0((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
w2:function(a){return A.zK(H.eI(a,16,new A.rT()),a.length>=8)},
e2:function e2(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
rT:function rT(){},
xf:function(){if($.xd)return
$.xd=!0
Z.Ah()},
eE:function(a,b,c,d){var t=0,s=P.bj(),r,q,p,o,n
var $async$eE=P.br(function(e,f){if(e===1)return P.bo(f,s)
while(true)switch(t){case 0:A.xf()
t=$.$get$d3().V(0,a)?3:5
break
case 3:q=$.$get$d3().n(0,a)
p=J.ap(q)
if(!!p.$isdT){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cG(q)
t=1
break}}else throw H.h("Requested resource ("+a+") is an unexpected type: "+H.z(J.vQ(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.uI==null?8:9
break
case 8:t=10
return P.ch(A.nj(),$async$eE)
case 10:case 9:n=$.uI.eL(a)
t=n!=null?11:12
break
case 11:t=13
return P.ch(A.ne(n),$async$eE)
case 13:if(!$.$get$d3().V(0,a))$.$get$d3().i(0,a,new Y.dT(a,null,H.a([],[[P.f8,,]]),[null]))
r=$.$get$d3().n(0,a).b
t=1
break
case 12:case 7:r=A.FS(a,!1,d)
t=1
break
case 4:case 1:return P.bp(r,s)}})
return P.bq($async$eE,s)},
nj:function(){var t=0,s=P.bj(),r
var $async$nj=P.br(function(a,b){if(a===1)return P.bo(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.ch(A.eE("manifest/manifest.txt",!1,!0,$.wp),$async$nj)
case 2:r.uI=b
return P.bp(null,s)}})
return P.bq($async$nj,s)},
FR:function(a){if(!$.$get$d3().V(0,a))$.$get$d3().i(0,a,new Y.dT(a,null,H.a([],[[P.f8,,]]),[null]))
return $.$get$d3().n(0,a)},
FS:function(a,b,c){var t
if($.$get$d3().V(0,a))throw H.h("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.wo(C.b.gbb(a.split("."))).a
t=A.FR(a)
c.b3(A.xc(a,!1)).b4(new A.nh(t))
return t.cG(0)},
ne:function(a){var t=0,s=P.bj(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$ne=P.br(function(b,a0){if(b===1)return P.bo(a0,s)
while(true)switch(t){case 0:t=3
return P.ch(A.eE(a+".bundle",!1,!0,null),$async$ne)
case 3:q=a0
p=C.c.I(a,0,C.c.en(a,$.$get$xe()))
o=P.cV
n=new P.dZ(new P.bn(0,$.an,null,[o]),[o])
m=H.a([],[P.ct])
for(o=J.yX(q),l=o.length,k=[[P.f8,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bH)(o),++i){h=o[i]
g=J.aK(h)
f=Z.wo(C.b.gbb(J.ej(g.gH(h),"."))).a
e=p+"/"+H.z(g.gH(h))
if($.$get$d3().V(0,e)){m.push(A.eE(e,!1,!1,null))
continue}d=H.kH(g.gbi(h),"$isdg")
if(!$.$get$d3().V(0,e))$.$get$d3().i(0,e,new Y.dT(e,null,H.a([],k),j))
c=$.$get$d3().n(0,e)
m.push(c.cG(0))
f.ba(d.buffer).b4(new A.nf(f,c))}P.Ar(m,null,!1).b4(new A.ng(n))
r=n.a
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$ne,s)},
hC:function(a,b){var t=0,s=P.bj(),r,q,p,o,n
var $async$hC=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:if($.$get$uH().V(0,a)){r=$.$get$uH().n(0,a)
t=1
break}q=W.fx
p=new P.bn(0,$.an,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.fD(n,"load",new A.ni(new P.dZ(p,[q]),n),!1,W.U)
n.src=A.xc(a,!1)
r=p
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$hC,s)},
xc:function(a,b){if(C.c.a9(a,"/")){a=C.c.aa(a,1)
b=!0}else b=!1
if(b)return H.z(window.location.protocol)+"//"+H.z(window.location.host)+"/"+a
return C.c.ar("../",N.uW())+a},
nh:function nh(a){this.a=a},
nf:function nf(a,b){this.a=a
this.b=b},
ng:function ng(a){this.a=a},
ni:function ni(a,b){this.a=a
this.b=b},
o_:function o_(){},
jV:function jV(){},
k0:function k0(a,b){this.a=a
this.b=b},
t0:function(){var t=0,s=P.bj(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$t0=P.br(function(a0,a1){if(a0===1)return P.bo(a1,s)
while(true)switch(t){case 0:if($.yq){t=1
break}$.yq=!0
D.Hc()
q=P.x
p=[q]
o=H.a(["metal"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,0.3)
$.$get$c().h(0,o)
$.D=o
o=H.a(["dutton"],p)
n=$.aa
H.a([],p)
o=new G.bK(null,n,o,0.6)
$.$get$c().h(0,o)
$.wF=o
o=H.a(["ceramic"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,-0.3)
$.$get$c().h(0,o)
$.bU=o
o=H.a(["bone"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,0.2)
$.$get$c().h(0,o)
$.b2=o
o=H.a(["wood"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,-0.3)
$.$get$c().h(0,o)
$.X=o
o=H.a(["plastic"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,-0.3)
$.$get$c().h(0,o)
$.aD=o
o=H.a(["rubber"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,-0.3)
$.$get$c().h(0,o)
$.cf=o
o=H.a(["paper"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,-0.3)
$.$get$c().h(0,o)
$.K=o
o=H.a(["cloth","fabric"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,-0.3)
$.$get$c().h(0,o)
$.O=o
o=H.a(["glass"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,-0.3)
$.$get$c().h(0,o)
$.aQ=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,-0.3)
$.$get$c().h(0,o)
$.bY=o
o=H.a(["flesh","meat","muscle"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,-0.1)
$.$get$c().h(0,o)
$.bl=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.G
H.a([],p)
o=new G.bK(null,n,o,3.1)
$.$get$c().h(0,o)
$.bt=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,-0.1)
$.$get$c().h(0,o)
$.cl=o
o=H.a(["plant","leaf","vine"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,-0.1)
$.$get$c().h(0,o)
$.aS=o
o=H.a(["feathery"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,-0.1)
$.$get$c().h(0,o)
$.by=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.I
H.a([],p)
o=new G.bK(null,n,o,0.1)
$.$get$c().h(0,o)
$.c_=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.I
H.a([],p)
o=new G.bK(null,n,o,-13)
$.$get$c().h(0,o)
$.bV=o
o=H.a(["stone","rock","concrete"],p)
n=$.v
H.a([],p)
o=new G.bK(null,n,o,0.3)
$.$get$c().h(0,o)
$.au=o
o=H.a(["legendary"],p)
n=$.mT
H.a([],p)
o=new G.bK(null,n,o,13)
$.$get$c().h(0,o)
$.a_=o
o=H.a(["Unbeatable"],p)
n=$.mT
H.a([],p)
o=new G.bK(null,n,o,40.37)
$.$get$c().h(0,o)
$.Fv=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.as=o
o=$.ut
H.a([],p)
o=new G.aI(null,o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.aR=o
o=$.ut
H.a([],p)
o=new G.aI(null,o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.al=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bk=o
o=$.G
H.a([],p)
o=new G.aI(null,o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.c7=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.b0=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bZ=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aC=o
o=$.G
H.a([],p)
o=new G.aI(null,o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aM=o
o=$.q
H.a([],p)
o=new G.aI(null,o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bu=o
o=$.q
H.a([],p)
o=new G.aI(null,o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a7=o
o=$.q
H.a([],p)
o=new G.aI(null,o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.b_=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bh=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.ao=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.ai=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.am=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.Y=o
o=$.G
H.a([],p)
o=new G.aI(null,o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.at=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.az=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.aX=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bx=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a2=o
o=$.mT
H.a([],p)
o=new G.aI(null,o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.S=o
o=$.mT
H.a([],p)
o=new G.aI(null,o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.T=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.ax=o
o=$.q
H.a([],p)
o=new G.aI(null,o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.aH=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aE=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.b3=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bR=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bs=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.ce=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.aq=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.ah=o
o=$.q
H.a([],p)
o=new G.aI(null,o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$c().h(0,o)
$.aJ=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$c().h(0,o)
$.a9=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aY=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aP=o
o=$.I
H.a([],p)
o=new G.aI(null,o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.bm=o
o=H.a(["perfectly generic"],p)
n=$.I
H.a([],p)
o=new G.ae(null,n,o,0.1)
$.$get$c().h(0,o)
$.wI=o
o=H.a(["a sword"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ey=o
o=H.a(["a hammer"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mM=o
o=H.a(["a rifle"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uo=o
o=H.a(["a pistol"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ui=o
o=H.a(["a blade"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wy=o
o=H.a(["a dagger"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.u8=o
o=H.a(["a santa"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.hu=o
o=H.a(["a fist"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wG=o
o=H.a(["claws"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mK=o
o=H.a(["a grenade"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mL=o
o=H.a(["a freaking safe"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wY=o
o=H.a(["a ball"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.fl=o
o=H.a(["a trident"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x4=o
o=H.a(["a card"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mJ=o
o=H.a(["a frying pan"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ub=o
o=H.a(["a pillow"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ht=o
o=H.a(["a machinegun"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ue=o
o=H.a(["a shuriken"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x1=o
o=H.a(["a sling"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x3=o
o=H.a(["a yoyo"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x6=o
o=H.a(["a cane"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wA=o
o=H.a(["a shield"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.fn=o
o=H.a(["a lance"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wR=o
o=H.a(["a ax"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.u4=o
o=H.a(["a sign"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wW=o
o=H.a(["a book"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.aB=o
o=H.a(["a broom"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jB=o
o=H.a(["a club"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jD=o
o=H.a(["a bow"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.u5=o
o=H.a(["a whip"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x5=o
o=H.a(["a staff"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uq=o
o=H.a(["a needle"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ug=o
o=H.a(["dice"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.u9=o
o=H.a(["a fork"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wH=o
o=H.a(["a pigeon???"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,1.3)
$.$get$c().h(0,o)
$.uh=o
o=H.a(["a chainsaw"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wB=o
o=H.a(["a sickle"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x2=o
o=H.a(["a shotgun"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x_=o
o=H.a(["a stick"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.dQ=o
o=H.a(["a chain"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ex=o
o=H.a(["a wrench"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ur=o
o=H.a(["a shovel"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x0=o
o=H.a(["a rolling pin"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.up=o
o=H.a(["a puppet"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.um=o
o=H.a(["a razor"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.un=o
o=H.a(["a pen"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mP=o
o=H.a(["a bust"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jC=o
o=H.a(["a bowling ball"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.B7=o
o=H.a(["a golf club"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wK=o
o=H.a(["a knife"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wQ=o
o=H.a(["scissors"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wZ=o
o=H.a(["a pizza cutter"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uj=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.G
m=G.a1
l=[m]
k=H.a([$.D,$.as,$.aM],l)
H.a([],p)
o=new G.d("Forged",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a([],p)
n=$.v
k=H.a([$.ah,$.as],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["fossilized"],p)
n=$.G
k=H.a([$.b2,$.au],l)
H.a([],p)
o=new G.d("Fossilized",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["adamantium"],p)
n=$.G
k=H.a([$.b2,$.D],l)
H.a([],p)
o=new G.d("Adamantium",k,null,n,o,0)
$.$get$c().h(0,o)
$.ww=o
o=H.a([],p)
n=$.v
k=H.a([$.b3,$.aE],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.F4=o
o=H.a(["tatami"],p)
n=$.v
k=H.a([$.O,$.X],l)
H.a([],p)
o=new G.d("Tatami",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fj=o
o=H.a(["mesh","chain link"],p)
n=$.v
k=H.a([$.O,$.D],l)
H.a([],p)
o=new G.d("Mesh",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["foil"],p)
n=$.v
k=H.a([$.K,$.D],l)
H.a([],p)
o=new G.d("Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["beanbag"],p)
n=$.v
k=H.a([$.O,$.au],l)
H.a([],p)
o=new G.d("Beanbag",k,null,n,o,0)
$.$get$c().h(0,o)
$.B1=o
o=H.a(["pleather","faux fur"],p)
n=$.v
k=H.a([$.cl,$.aD],l)
H.a([],p)
o=new G.d("Faux Fur",k,null,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["plywood"],p)
n=$.v
k=H.a([$.X,$.K],l)
H.a([],p)
o=new G.d("Plywood",k,null,n,o,0)
$.$get$c().h(0,o)
$.uk=o
o=H.a(["colossus"],p)
n=$.v
k=H.a([$.D,$.bl],l)
H.a([],p)
o=new G.d("Colossus",k,null,n,o,0)
$.$get$c().h(0,o)
$.wC=o
o=H.a(["rotting","zombie"],p)
n=$.G
k=H.a([$.c_,$.bl],l)
H.a([],p)
o=new G.d("Rotting",k,null,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["draugr","white walker"],p)
n=$.G
k=H.a([$.c_,$.bl,$.bs],l)
H.a([],p)
o=new G.d("Draugr",k,null,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["Ultraviolet"],p)
n=$.us
k=H.a([$.aR,$.al],l)
H.a([],p)
o=new G.d("Ultraviolet",k,null,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.aR,$.al,$.as],l)
H.a([],p)
o=new G.d("Ultraviolence",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fu=o
o=H.a([],p)
n=$.q
k=H.a([$.aC,$.bZ],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["candy"],p)
n=$.v
k=H.a([$.ao,$.aQ],l)
H.a([],p)
o=new G.d("Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.u6=o
o=H.a(["cotton candy"],p)
n=$.v
k=H.a([$.ao,$.O],l)
H.a([],p)
o=new G.d("Cotton Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["gummy"],p)
n=$.v
k=H.a([$.ao,$.cf],l)
H.a([],p)
o=new G.d("Gum",k,null,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["marrow"],p)
n=$.v
k=H.a([$.ao,$.b2],l)
H.a([],p)
o=new G.d("Marrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["toothy"],p)
n=$.a3
k=H.a([$.b2,$.bU],l)
H.a([],p)
o=new G.d("Toothy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fr=o
o=H.a(["Frost"],p)
n=$.v
k=H.a([$.au,$.aQ,$.bl],l)
H.a([],p)
o=new G.d("Frost",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.ao,$.bR],l)
H.a([],p)
o=new G.d("Arsenic",k,null,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.v
k=H.a([$.au,$.aQ],l)
H.a([],p)
o=new G.d("Crystal",k,null,n,o,0)
$.$get$c().h(0,o)
$.u7=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.I
k=H.a([$.ax,$.az,$.aX,$.Y,$.ai,$.bZ,$.a2],l)
H.a([],p)
o=new G.d("Mary Sue",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.I
k=H.a([$.b0,$.al,$.as,$.a_,$.aC,$.Y,$.ai,$.am],l)
H.a([],p)
o=new G.d("Edge Lord",k,null,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["deadpool"],p)
n=$.a3
k=H.a([$.c_,$.aH,$.am,$.aX],l)
H.a([],p)
o=new G.d("Deadpool",k,null,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.I
k=H.a([$.b0,$.am],l)
H.a([],p)
o=new G.d("Spoopy",k,null,n,o,0)
$.$get$c().h(0,o)
$.F7=o
o=H.a(["wolverine"],p)
n=$.a3
k=H.a([$.b2,$.as,$.aM],l)
H.a([],p)
o=new G.d("Wolverine",k,null,n,o,0)
$.$get$c().h(0,o)
$.FG=o
o=H.a(["rabbit's foot"],p)
n=$.a3
k=H.a([$.bZ,$.cl],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,null,n,o,0)
$.$get$c().h(0,o)
$.wV=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.G
k=H.a([$.aM,$.X],l)
H.a([],p)
o=new G.d("Tipped",k,null,n,o,0)
$.$get$c().h(0,o)
$.AV=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a3
k=H.a([$.aM,$.aJ,$.X],l)
H.a([],p)
o=new G.d("Arrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.wx=o
o=H.a(["training sword","bokken"],p)
n=$.a3
k=H.a([$.X,$.as],l)
H.a([],p)
o=new G.d("Bokken",k,null,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aP,$.am],l)
H.a([],p)
o=new G.d("Irony Type1",k,null,n,o,0)
$.$get$c().h(0,o)
$.mN=o
o=H.a(["netted","webbed"],p)
n=$.a3
k=H.a([$.b_,$.O],l)
H.a([],p)
o=new G.d("Netted",k,null,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["barbed wire"],p)
n=$.a3
k=H.a([$.aM,$.b_,$.D,$.O],l)
H.a([],p)
o=new G.d("Barbed Wire",k,null,n,o,0)
$.$get$c().h(0,o)
$.AZ=o
o=H.a(["morning star"],p)
n=$.a3
k=H.a([$.aM,$.ah],l)
H.a([],p)
o=new G.d("Morning Star",k,null,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["decadent"],p)
n=$.I
k=H.a([$.b3,$.bh],l)
H.a([],p)
o=new G.d("Decadent",k,null,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bV,$.am],l)
H.a([],p)
o=new G.d("SBAHJ",k,null,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["bayonet"],p)
n=$.a3
k=H.a([$.aM,$.aJ],l)
H.a([],p)
o=new G.d("Bayonet",k,null,n,o,0)
$.$get$c().h(0,o)
$.B0=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.v
k=H.a([$.bs,$.am,$.as],l)
H.a([],p)
o=new G.d("Snoop",k,null,n,o,0)
$.$get$c().h(0,o)
$.F3=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.aR,$.aq,$.as],l)
H.a([],p)
o=new G.d("Light Saber",k,null,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.I
k=H.a([$.a2,$.aP],l)
H.a([],p)
o=new G.d("Fakey Fake",k,null,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.I
k=H.a([$.a2,$.bm],l)
H.a([],p)
o=new G.d("Real As Shit",k,null,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["skeletal"],p)
n=$.a3
k=H.a([$.b0,$.aC,$.b2],l)
H.a([],p)
o=new G.d("Skeletal",k,null,n,o,0)
$.$get$c().h(0,o)
$.EY=o
o=H.a(["green sun"],p)
n=$.ut
k=H.a([$.aq,$.c7,$.aR],l)
H.a([],p)
o=new G.d("Green Sun",k,null,n,o,0)
$.$get$c().h(0,o)
$.ud=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.us
k=H.a([$.al,$.ai],l)
H.a([],p)
o=new G.d("Midnight",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["radiant","dazzling"],p)
n=$.I
k=H.a([$.a2,$.aR],l)
H.a([],p)
o=new G.d("Radiant",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["edgy"],p)
n=$.I
k=H.a([$.as,$.al,$.am],l)
H.a([],p)
o=new G.d("Edgy",k,null,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c7,$.bu],l)
H.a([],p)
o=new G.d("Warhead",k,null,n,o,0)
$.$get$c().h(0,o)
$.AO=o
o=H.a(["living"],p)
n=$.G
k=H.a([$.b2,$.bl,$.at],l)
H.a([],p)
o=new G.d("Living",k,null,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["dead","corpse","deceased"],p)
n=$.G
k=H.a([$.b2,$.bl],l)
H.a([],p)
o=new G.d("Dead",k,null,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a7,$.b_,$.aJ],l)
H.a([],p)
o=new G.d("Taser",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fi=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.al,$.a9],l)
H.a([],p)
o=new G.d("Nocturn",k,null,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aC,$.a9],l)
H.a([],p)
o=new G.d("Dirge",k,null,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["Snobbish","Noble"],p)
n=$.I
k=H.a([$.ai,$.bh],l)
H.a([],p)
o=new G.d("Snobbish",k,null,n,o,0)
$.$get$c().h(0,o)
$.F2=o
o=H.a(["flat"],p)
n=$.I
k=H.a([$.ah,$.a9],l)
H.a([],p)
o=new G.d("Flat(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.as,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.EK=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.ai,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,null,n,o,0)
$.$get$c().h(0,o)
$.EJ=o
o=H.a(["Bach's"],p)
n=$.aa
k=H.a([$.Y,$.a9],l)
H.a([],p)
o=new G.d("Bach's",k,null,n,o,0)
$.$get$c().h(0,o)
$.AX=o
o=H.a(["Mozart's"],p)
n=$.aa
k=H.a([$.a2,$.a9],l)
H.a([],p)
o=new G.d("Mozart's",k,null,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.aa
k=H.a([$.Y,$.c7],l)
H.a([],p)
o=new G.d("Einstein's",k,null,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["Feynman's"],p)
n=$.aa
k=H.a([$.Y,$.aX],l)
H.a([],p)
o=new G.d("Feynman's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["Ziptie"],p)
n=$.aa
k=H.a([$.aD,$.b_],l)
H.a([],p)
o=new G.d("Ziptie",k,null,n,o,0)
$.$get$c().h(0,o)
$.FK=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.D,$.Y],l)
H.a([],p)
o=new G.d("Mobile",k,null,n,o,0)
$.$get$c().h(0,o)
$.mR=o
o=H.a(["Sassacre"],p)
n=$.aa
k=H.a([$.ce,$.aX],l)
H.a([],p)
o=new G.d("Sassacre",k,null,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ah,$.ce],l)
H.a([],p)
o=new G.d("Sledge",k,null,n,o,0)
$.$get$c().h(0,o)
$.F0=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.b_,$.K],l)
H.a([],p)
o=new G.d("Legal",k,null,n,o,0)
$.$get$c().h(0,o)
$.mO=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.aX,$.aY],l)
H.a([],p)
o=new G.d("Clown",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["passionate"],p)
n=$.I
k=H.a([$.aq,$.az],l)
H.a([],p)
o=new G.d("Passionate",k,null,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["pinata"],p)
n=$.a3
k=H.a([$.K,$.ao],l)
H.a([],p)
o=new G.d("Pinata",k,null,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ah,$.ce,$.D],l)
H.a([],p)
o=new G.d("Anvil",k,null,n,o,0)
$.$get$c().h(0,o)
$.AU=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.aR,$.bu],l)
H.a([],p)
o=new G.d("Flashbang",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.al,$.bu],l)
H.a([],p)
o=new G.d("Smokebomb",k,null,n,o,0)
$.$get$c().h(0,o)
$.F1=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.al,$.as],l)
H.a([],p)
o=new G.d("Ninja",k,null,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a7,$.a9],l)
H.a([],p)
o=new G.d("Techno",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fl=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.au,$.a9],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a3
k=H.a([$.at,$.bl,$.aJ],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,null,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.aX,$.a9,$.aY,$.b0],l)
H.a([],p)
o=new G.d("Juggalo",k,null,n,o,0)
$.$get$c().h(0,o)
$.wP=o
o=H.a(["shocksauce"],p)
n=$.I
k=H.a([$.am,$.a7],l)
H.a([],p)
o=new G.d("Shock Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.EN=o
o=H.a(["weaksauce"],p)
n=$.I
k=H.a([$.ah,$.am,$.bV],l)
H.a([],p)
o=new G.d("Weak Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.FA=o
o=H.a(["spicy","picante"],p)
n=$.I
k=H.a([$.aq,$.ao],l)
H.a([],p)
o=new G.d("Spicy",k,null,n,o,0)
$.$get$c().h(0,o)
$.F6=o
o=H.a(["ice cream","popsicle"],p)
n=$.v
k=H.a([$.bs,$.ao],l)
H.a([],p)
o=new G.d("Popsicle",k,null,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["popsickle"],p)
n=$.v
k=H.a([$.bs,$.ao,$.as],l)
H.a([],p)
o=new G.d("Popsickle",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["icepick"],p)
n=$.v
k=H.a([$.bs,$.aM],l)
H.a([],p)
o=new G.d("Icepick",k,null,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["schezwan"],p)
n=$.I
k=H.a([$.am,$.ao],l)
H.a([],p)
o=new G.d("Schezwan",k,null,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.al,$.a9,$.am,$.a7],l)
H.a([],p)
o=new G.d("Vaporwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fy=o
o=H.a(["mallet"],p)
n=$.a3
k=H.a([$.X,$.ah],l)
H.a([],p)
o=new G.d("Mallet",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aD,$.am],l)
H.a([],p)
o=new G.d("Fidget",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["gold foil"],p)
n=$.v
k=H.a([$.D,$.K,$.bh],l)
H.a([],p)
o=new G.d("Gold Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["caviar"],p)
n=$.v
k=H.a([$.ao,$.bh],l)
H.a([],p)
o=new G.d("Caviar",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["RADioactive"],p)
n=$.I
k=H.a([$.c7,$.am],l)
H.a([],p)
o=new G.d("RADioactive",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["glam"],p)
n=$.I
k=H.a([$.au,$.a9,$.ax],l)
H.a([],p)
o=new G.d("Glam",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["hair metal"],p)
n=$.I
k=H.a([$.D,$.a9,$.ax],l)
H.a([],p)
o=new G.d("Hair Metal",k,null,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["elven","fae","sylvan"],p)
n=$.I
k=H.a([$.a2,$.ax],l)
H.a([],p)
o=new G.d("Elven",k,null,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["shiny"],p)
n=$.I
k=H.a([$.D,$.ax],l)
H.a([],p)
o=new G.d("Shiny",k,null,n,o,0)
$.$get$c().h(0,o)
$.EM=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.I
k=H.a([$.bh,$.ax,$.ai],l)
H.a([],p)
o=new G.d("Bespoke",k,null,n,o,0)
$.$get$c().h(0,o)
$.fm=o
o=H.a(["operatic"],p)
n=$.I
k=H.a([$.bh,$.a9,$.ai],l)
H.a([],p)
o=new G.d("Operatic",k,null,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["ice","diamond"],p)
n=$.v
k=H.a([$.bh,$.bs],l)
H.a([],p)
o=new G.d("Diamond",k,null,n,o,0)
$.$get$c().h(0,o)
$.wN=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.I
k=H.a([$.aq,$.bs],l)
H.a([],p)
o=new G.d("Icy Hot",k,null,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.I
k=H.a([$.am,$.bs],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,null,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["winter's","season's"],p)
n=$.aa
k=H.a([$.bk,$.bs],l)
H.a([],p)
o=new G.d("Winter's",k,null,n,o,0)
$.$get$c().h(0,o)
$.FD=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.aa
k=H.a([$.a2,$.bs],l)
H.a([],p)
o=new G.d("Christmas",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["Santa Saws"],p)
n=$.aa
k=H.a([$.a2,$.bs,$.as],l)
H.a([],p)
o=new G.d("Santa Saws",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a(["Santa Sleighs"],p)
n=$.aa
k=H.a([$.hu,$.as],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a(["Santa Claws"],p)
n=$.aa
k=H.a([$.hu,$.mK],l)
H.a([],p)
o=new G.d("Santa Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["Sandy Claws"],p)
n=$.aa
k=H.a([$.hu,$.mK,$.au],l)
H.a([],p)
o=new G.d("Sandy Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["Silent Night"],p)
n=$.aa
k=H.a([$.hu,$.al],l)
H.a([],p)
o=new G.d("Silent Night",k,null,n,o,0)
$.$get$c().h(0,o)
$.EU=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.aa
k=H.a([$.b0,$.bY],l)
H.a([],p)
o=new G.d("Ghost's",k,null,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["ghoul","mutant"],p)
n=$.v
k=H.a([$.bl,$.c7,$.c_],l)
H.a([],p)
o=new G.d("Mutant",k,null,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.am,$.D],l)
H.a([],p)
o=new G.d("Skateboard",k,null,n,o,0)
$.$get$c().h(0,o)
$.EX=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c7,$.a7,$.ao],l)
H.a([],p)
o=new G.d("Microwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c7,$.a7,$.ao,$.aJ],l)
H.a([],p)
o=new G.d("Orbital",k,null,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a([],p)
n=$.q
k=H.a([$.ah,$.Y],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["uranium"],p)
n=$.v
k=H.a([$.c7,$.au],l)
H.a([],p)
o=new G.d("Uranium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fx=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.K,$.cf],l)
H.a([],p)
o=new G.d("Mousepad",k,null,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.as,$.au],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.aM,$.au],l)
H.a([],p)
o=new G.d("Pointed Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aD,$.aM],l)
H.a([],p)
o=new G.d("Picnic",k,null,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["xtreme xplosion"],p)
n=$.I
k=H.a([$.am,$.bu],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,null,n,o,0)
$.$get$c().h(0,o)
$.FJ=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aD,$.b3],l)
H.a([],p)
o=new G.d("Lawn",k,null,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["upholstered"],p)
n=$.v
k=H.a([$.O,$.b3],l)
H.a([],p)
o=new G.d("Upholstered",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fw=o
o=H.a(["leather"],p)
n=$.v
k=H.a([$.bl,$.b3],l)
H.a([],p)
o=new G.d("Leather",k,null,n,o,0)
$.$get$c().h(0,o)
$.wT=o
o=H.a(["shag"],p)
n=$.v
k=H.a([$.cl,$.b3],l)
H.a([],p)
o=new G.d("Shag",k,null,n,o,0)
$.$get$c().h(0,o)
$.EI=o
o=H.a(["loyal"],p)
n=$.I
k=H.a([$.ah,$.az],l)
H.a([],p)
o=new G.d("Loyal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["porcelain"],p)
n=$.v
k=H.a([$.ax,$.bU],l)
H.a([],p)
o=new G.d("Porcelain",k,null,n,o,0)
$.$get$c().h(0,o)
$.ul=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a3
k=H.a([$.bh,$.bU],l)
H.a([],p)
o=new G.d("Pork Hollow",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.am,$.as],l)
H.a([],p)
o=new G.d("Katana",k,null,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["chocolate"],p)
n=$.v
k=H.a([$.az,$.ao],l)
H.a([],p)
o=new G.d("Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["wrapped chocolate"],p)
n=$.v
k=H.a([$.az,$.ao,$.K,$.D],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["scratch-n-sniff"],p)
n=$.v
k=H.a([$.am,$.K],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,null,n,o,0)
$.$get$c().h(0,o)
$.EE=o
o=H.a(["mythril","orichalcum"],p)
n=$.v
k=H.a([$.a2,$.D],l)
H.a([],p)
o=new G.d("Mythril",k,null,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["titanium","steel"],p)
n=$.v
k=H.a([$.ah,$.D],l)
H.a([],p)
o=new G.d("Titanium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fq=o
o=H.a(["lead"],p)
n=$.v
k=H.a([$.ce,$.D],l)
H.a([],p)
o=new G.d("Lead",k,null,n,o,0)
$.$get$c().h(0,o)
$.wS=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aP,$.aX],l)
H.a([],p)
o=new G.d("Satire",k,null,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["comedy gold"],p)
n=$.I
k=H.a([$.bh,$.aX],l)
H.a([],p)
o=new G.d("Comedy Gold",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["dry","sensible chuckle"],p)
n=$.I
k=H.a([$.ai,$.aX],l)
H.a([],p)
o=new G.d("Dry",k,null,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["polite"],p)
n=$.I
k=H.a([$.b3,$.aP],l)
H.a([],p)
o=new G.d("Polite",k,null,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["stradivarius"],p)
n=$.aa
k=H.a([$.ai,$.bh,$.X,$.a9],l)
H.a([],p)
o=new G.d("Stradivarius",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fd=o
o=H.a(["scientistic"],p)
n=$.I
k=H.a([$.Y,$.aP],l)
H.a([],p)
o=new G.d("Scientistic",k,null,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a7,$.at],l)
H.a([],p)
o=new G.d("AI",k,null,n,o,0)
$.$get$c().h(0,o)
$.u3=o
o=H.a(["robotic"],p)
n=$.G
k=H.a([$.D,$.a7,$.at],l)
H.a([],p)
o=new G.d("Robotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.wX=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.X,$.bu],l)
H.a([],p)
o=new G.d("Shrapnel",k,null,n,o,0)
$.$get$c().h(0,o)
$.EP=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.at,$.a7,$.a9],l)
H.a([],p)
o=new G.d("Vocaloid",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fz=o
o=H.a(["*Hyun-ae"],p)
n=$.aa
k=H.a([$.at,$.a7,$.az],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,null,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.X,$.aJ],l)
H.a([],p)
o=new G.d("Buckshot",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.ce,$.aJ],l)
H.a([],p)
o=new G.d("Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.ai,$.K],l)
H.a([],p)
o=new G.d("Stationary",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fb=o
o=H.a([],p)
n=$.q
k=H.a([$.aB,$.K],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a([],p)
n=$.q
k=H.a([$.D,$.aJ],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.as,$.K],l)
H.a([],p)
o=new G.d("Papercut",k,null,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["squeaky"],p)
n=$.G
k=H.a([$.ah,$.cf],l)
H.a([],p)
o=new G.d("Squeaky",k,null,n,o,0)
$.$get$c().h(0,o)
$.F8=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aP,$.a9],l)
H.a([],p)
o=new G.d("Kazoo",k,null,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aH,$.K],l)
H.a([],p)
o=new G.d("Bandaid",k,null,n,o,0)
$.$get$c().h(0,o)
$.AY=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aH,$.ao],l)
H.a([],p)
o=new G.d("Gushers",k,null,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aH,$.aJ],l)
H.a([],p)
o=new G.d("Medic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["sick nasty","ill"],p)
n=$.G
k=H.a([$.am,$.bR],l)
H.a([],p)
o=new G.d("Sick Nasty",k,null,n,o,0)
$.$get$c().h(0,o)
$.ER=o
o=H.a(["gilded","gold leaf"],p)
n=$.v
k=H.a([$.D,$.X],l)
H.a([],p)
o=new G.d("Gilded",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aD,$.a7],l)
H.a([],p)
o=new G.d("Charging",k,null,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.cf,$.as],l)
H.a([],p)
o=new G.d("Rubber Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aD,$.as],l)
H.a([],p)
o=new G.d("Plastic Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a(["thunderous","thor's"],p)
n=$.I
k=H.a([$.aY,$.a7],l)
H.a([],p)
o=new G.d("Thunderous",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fo=o
o=H.a(["screeching","dial up"],p)
n=$.I
k=H.a([$.aY,$.a7,$.Y],l)
H.a([],p)
o=new G.d("Screeching",k,null,n,o,0)
$.$get$c().h(0,o)
$.EG=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.aQ,$.D],l)
H.a([],p)
o=new G.d("Mirrored",k,null,n,o,0)
$.$get$c().h(0,o)
$.uf=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.aQ,$.au,$.a2],l)
H.a([],p)
o=new G.d("Far Seeing",k,null,n,o,0)
$.$get$c().h(0,o)
$.wD=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.cf,$.aJ],l)
H.a([],p)
o=new G.d("Nonlethal",k,null,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.ax,$.ai],l)
H.a([],p)
o=new G.d("Fashionable",k,null,n,o,0)
$.$get$c().h(0,o)
$.ua=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aX,$.am],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,null,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.bV,$.aX],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,null,n,o,0)
$.$get$c().h(0,o)
$.wO=o
o=H.a(["post-ironic"],p)
n=$.I
k=H.a([$.aP,$.am,$.ai],l)
H.a([],p)
o=new G.d("Post Ironic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["monstrous"],p)
n=$.I
k=H.a([$.c_,$.aY,$.b0],l)
H.a([],p)
o=new G.d("Monstrous",k,null,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aJ,$.am,$.ai],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["golden"],p)
n=$.v
k=H.a([$.D,$.bh],l)
H.a([],p)
o=new G.d("Golden",k,null,n,o,0)
$.$get$c().h(0,o)
$.uc=o
o=H.a(["platinum"],p)
n=$.v
k=H.a([$.aR,$.D],l)
H.a([],p)
o=new G.d("Platinum",k,null,n,o,0)
$.$get$c().h(0,o)
$.mQ=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bZ,$.D],l)
H.a([],p)
o=new G.d("Horseshoe",k,null,n,o,0)
$.$get$c().h(0,o)
$.wM=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.O,$.cl],l)
H.a([],p)
o=new G.d("Felt",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.au,$.ai],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.wU=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.au,$.ce],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["glitched"],p)
n=$.G
k=H.a([$.bt,$.a7],l)
H.a([],p)
o=new G.d("Glitched",k,null,n,o,0)
$.$get$c().h(0,o)
$.wJ=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aH,$.a7],l)
H.a([],p)
o=new G.d("Debugging",k,null,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.D,$.aY,$.a9],l)
H.a([],p)
o=new G.d("Metalic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["Simulacrum"],p)
n=$.I
k=H.a([$.at,$.aP],l)
H.a([],p)
o=new G.d("Simulacrum",k,null,n,o,0)
$.$get$c().h(0,o)
$.EW=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.ao,$.aP],l)
H.a([],p)
o=new G.d("Imitation",k,null,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aH,$.aP],l)
H.a([],p)
o=new G.d("Placebo",k,null,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bh,$.aP],l)
H.a([],p)
o=new G.d("Counterfeit",k,null,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.am,$.aE,$.aX],l)
H.a([],p)
o=new G.d("Surreal1",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ff=o
o=H.a(["Brainy"],p)
n=$.I
k=H.a([$.Y,$.bl],l)
H.a([],p)
o=new G.d("Brainy",k,null,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.aq,$.bu],l)
H.a([],p)
o=new G.d("Incendiary",k,null,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["C-4"],p)
n=$.v
k=H.a([$.bu,$.aD],l)
H.a([],p)
o=new G.d("C-4",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a2,$.aR,$.bt],l)
H.a([],p)
o=new G.d("Fae",k,null,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["Plutonium"],p)
n=$.v
k=H.a([$.D,$.c7],l)
H.a([],p)
o=new G.d("Plutonium",k,null,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["Lithium"],p)
n=$.v
k=H.a([$.D,$.a7],l)
H.a([],p)
o=new G.d("Lithium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["Molten"],p)
n=$.v
k=H.a([$.D,$.aq],l)
H.a([],p)
o=new G.d("Molten",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.v
k=H.a([$.au,$.aq],l)
H.a([],p)
o=new G.d("Magma",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["Rusty"],p)
n=$.G
k=H.a([$.D,$.bV],l)
H.a([],p)
o=new G.d("Rusty",k,null,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.as,$.am,$.ai],l)
H.a([],p)
o=new G.d("Fonzie",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.az,$.aX],l)
H.a([],p)
o=new G.d("Romcom",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.ax,$.aR],l)
H.a([],p)
o=new G.d("Alluring",k,null,n,o,0)
$.$get$c().h(0,o)
$.AR=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.ax,$.al],l)
H.a([],p)
o=new G.d("Masquerade",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.au,$.bl],l)
H.a([],p)
o=new G.d("Stoneskin",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fc=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a2,$.Y],l)
H.a([],p)
o=new G.d("Psionic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a2,$.au],l)
H.a([],p)
o=new G.d("Dwarven",k,null,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["Elemental","Animated"],p)
n=$.v
k=H.a([$.a2,$.at],l)
H.a([],p)
o=new G.d("Elemental",k,null,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["Gourmet"],p)
n=$.I
k=H.a([$.ao,$.ai],l)
H.a([],p)
o=new G.d("Gourmet",k,null,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["Stained Glass"],p)
n=$.v
k=H.a([$.aQ,$.ax,$.bh],l)
H.a([],p)
o=new G.d("Stained Glass",k,null,n,o,0)
$.$get$c().h(0,o)
$.F9=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aH,$.O],l)
H.a([],p)
o=new G.d("Gauze",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["Locked"],p)
n=$.G
k=H.a([$.b_,$.bx],l)
H.a([],p)
o=new G.d("Locked",k,null,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.au,$.K],l)
H.a([],p)
o=new G.d("Etched",k,null,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["Papyrus"],p)
n=$.v
k=H.a([$.K,$.aS],l)
H.a([],p)
o=new G.d("Papyrus",k,null,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.K,$.aD],l)
H.a([],p)
o=new G.d("Film",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["Saucey"],p)
n=$.v
k=H.a([$.bt,$.bx,$.ao],l)
H.a([],p)
o=new G.d("Saucey",k,null,n,o,0)
$.$get$c().h(0,o)
$.jE=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.K,$.bZ],l)
H.a([],p)
o=new G.d("Lottery",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.al,$.O],l)
H.a([],p)
o=new G.d("Blindfolded",k,null,n,o,0)
$.$get$c().h(0,o)
$.wz=o
o=H.a(["Possessed"],p)
n=$.G
k=H.a([$.bY,$.bl],l)
H.a([],p)
o=new G.d("Possessed",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["Infernal"],p)
n=$.I
k=H.a([$.bY,$.aq],l)
H.a([],p)
o=new G.d("Infernal",k,null,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.X,$.bm,$.um,$.at],l)
H.a([],p)
o=new G.d("Geppetto",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["Abominable"],p)
n=$.I
k=H.a([$.bl,$.bt],l)
H.a([],p)
o=new G.d("Abominable",k,null,n,o,0)
$.$get$c().h(0,o)
$.AP=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.az,$.aC],l)
H.a([],p)
o=new G.d("Ashen",k,null,n,o,0)
$.$get$c().h(0,o)
$.AW=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.az,$.bk],l)
H.a([],p)
o=new G.d("Pale",k,null,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.az,$.bx],l)
H.a([],p)
o=new G.d("Pitch",k,null,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["Lit"],p)
n=$.I
k=H.a([$.am,$.aq],l)
H.a([],p)
o=new G.d("Lit",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a2,$.bk],l)
H.a([],p)
o=new G.d("Hypnotizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bk,$.b_],l)
H.a([],p)
o=new G.d("Tranquilizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ft=o
o=H.a([],p)
n=$.q
k=H.a([$.bk,$.bx],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["Ghost Rider's"],p)
n=$.aa
k=H.a([$.ex,$.aq,$.bY],l)
H.a([],p)
o=new G.d("Ghost Rider",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["Logical"],p)
n=$.I
k=H.a([$.Y,$.bs],l)
H.a([],p)
o=new G.d("Logical",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["Duelist's"],p)
n=$.aa
k=H.a([$.aJ,$.ai],l)
H.a([],p)
o=new G.d("Duelist's",k,null,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["Silenced"],p)
n=$.G
k=H.a([$.aJ,$.al],l)
H.a([],p)
o=new G.d("Silenced",k,null,n,o,0)
$.$get$c().h(0,o)
$.ET=o
o=H.a(["Deudly"],p)
n=$.G
k=H.a([$.aJ,$.bV],l)
H.a([],p)
o=new G.d("Deudly",k,null,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["Screaming"],p)
n=$.G
k=H.a([$.aY,$.b0],l)
H.a([],p)
o=new G.d("Screaming",k,null,n,o,0)
$.$get$c().h(0,o)
$.EF=o
o=H.a(["Cacophonous"],p)
n=$.I
k=H.a([$.c_,$.a9],l)
H.a([],p)
o=new G.d("Cacophonous",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["Sublime"],p)
n=$.I
k=H.a([$.c_,$.ax],l)
H.a([],p)
o=new G.d("Sublime",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fe=o
o=H.a(["Masterwork"],p)
n=$.v
k=H.a([$.bm,$.bh],l)
H.a([],p)
o=new G.d("Masterwork",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.at,$.b0,$.bt,$.a2],l)
H.a([],p)
o=new G.d("BroodFester",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bt,$.al],l)
H.a([],p)
o=new G.d("[REDACTED]",k,null,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.ao,$.bu],l)
H.a([],p)
o=new G.d("Pop Rocks",k,null,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["Disguised"],p)
n=$.G
k=H.a([$.al,$.aP],l)
H.a([],p)
o=new G.d("Disguised",k,null,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["Haunted"],p)
n=$.G
k=H.a([$.aE,$.bY],l)
H.a([],p)
o=new G.d("Haunted",k,null,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["Cognitohazardous"],p)
n=$.G
k=H.a([$.bt,$.Y],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,null,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["Staticy"],p)
n=$.G
k=H.a([$.aE,$.a7],l)
H.a([],p)
o=new G.d("Staticy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fa=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.aQ,$.c7],l)
H.a([],p)
o=new G.d("Jadite",k,null,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.aX,$.aE],l)
H.a([],p)
o=new G.d("Tickling",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fp=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.D,$.bU],l)
H.a([],p)
o=new G.d("Composite",k,null,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["High-Powered"],p)
n=$.G
k=H.a([$.bu,$.aJ],l)
H.a([],p)
o=new G.d("High-Powered",k,null,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bu,$.ah],l)
H.a([],p)
o=new G.d("Concussive",k,null,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["Down"],p)
n=$.v
k=H.a([$.b3,$.by],l)
H.a([],p)
o=new G.d("Down",k,null,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["Prickly"],p)
n=$.v
k=H.a([$.aE,$.aM],l)
H.a([],p)
o=new G.d("Prickly",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aE,$.al,$.a7],l)
H.a([],p)
o=new G.d("Deep-Web",k,null,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.v
k=H.a([$.aM,$.as],l)
H.a([],p)
o=new G.d("Jagged",k,null,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["Nanofiber"],p)
n=$.v
k=H.a([$.O,$.Y],l)
H.a([],p)
o=new G.d("Nanofiber",k,null,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.D,$.aY],l)
H.a([],p)
o=new G.d("Clanging",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["Silver"],p)
n=$.v
k=H.a([$.D,$.ai],l)
H.a([],p)
o=new G.d("Silver",k,null,n,o,0)
$.$get$c().h(0,o)
$.EV=o
o=H.a(["Withered"],p)
n=$.G
k=H.a([$.aC,$.aS],l)
H.a([],p)
o=new G.d("Withered",k,null,n,o,0)
$.$get$c().h(0,o)
$.FF=o
o=H.a(["Shattered"],p)
n=$.G
k=H.a([$.aQ,$.bV],l)
H.a([],p)
o=new G.d("Shattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.EL=o
o=H.a(["Miner's"],p)
n=$.aa
k=H.a([$.au,$.D],l)
H.a([],p)
o=new G.d("Miner's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a9,$.at],l)
H.a([],p)
o=new G.d("Singing",k,null,n,o,0)
$.$get$c().h(0,o)
$.ES=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bl,$.a7],l)
H.a([],p)
o=new G.d("Mitochondrial",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.al,$.a7],l)
H.a([],p)
o=new G.d("Blackout",k,null,n,o,0)
$.$get$c().h(0,o)
$.B3=o
o=H.a(["Asbestos"],p)
n=$.v
k=H.a([$.au,$.bR],l)
H.a([],p)
o=new G.d("Asbestos",k,null,n,o,0)
$.$get$c().h(0,o)
$.AQ=o
o=H.a(["Mercurial"],p)
n=$.v
k=H.a([$.bR,$.D],l)
H.a([],p)
o=new G.d("Mercurial",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Bulletproof"],p)
n=$.v
k=H.a([$.O,$.ah],l)
H.a([],p)
o=new G.d("Bulletproof",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["Cotton"],p)
n=$.v
k=H.a([$.aS,$.O],l)
H.a([],p)
o=new G.d("Cotton",k,null,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bx,$.aR],l)
H.a([],p)
o=new G.d("Blinding",k,null,n,o,0)
$.$get$c().h(0,o)
$.B4=o
o=H.a(["Brilliant"],p)
n=$.I
k=H.a([$.aR,$.Y],l)
H.a([],p)
o=new G.d("Brilliant",k,null,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["Offensive"],p)
n=$.I
k=H.a([$.bx,$.Y],l)
H.a([],p)
o=new G.d("Offensive",k,null,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["Poached"],p)
n=$.G
k=H.a([$.bl,$.bh],l)
H.a([],p)
o=new G.d("Poached",k,null,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["Tapestry"],p)
n=$.v
k=H.a([$.O,$.ax],l)
H.a([],p)
o=new G.d("Tapestry",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fh=o
o=H.a(["Itchy"],p)
n=$.I
k=H.a([$.O,$.aE],l)
H.a([],p)
o=new G.d("Itchy",k,null,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["Wishbone"],p)
n=$.v
k=H.a([$.bZ,$.b2],l)
H.a([],p)
o=new G.d("Wishbone",k,null,n,o,0)
$.$get$c().h(0,o)
$.FE=o
o=H.a(["Rattling"],p)
n=$.G
k=H.a([$.aY,$.b2],l)
H.a([],p)
o=new G.d("Rattling",k,null,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["Cranial"],p)
n=$.v
k=H.a([$.Y,$.b2],l)
H.a([],p)
o=new G.d("Cranial",k,null,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["Humerus"],p)
n=$.v
k=H.a([$.aX,$.b2],l)
H.a([],p)
o=new G.d("Humerus",k,null,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aH,$.b3],l)
H.a([],p)
o=new G.d("Massage",k,null,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["Pestersome","Irksome"],p)
n=$.I
k=H.a([$.aY,$.bx],l)
H.a([],p)
o=new G.d("Pestersome",k,null,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aY,$.bu],l)
H.a([],p)
o=new G.d("Shockwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.EO=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bR,$.aH],l)
H.a([],p)
o=new G.d("Antivenom",k,null,n,o,0)
$.$get$c().h(0,o)
$.AT=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.v
k=H.a([$.aq,$.a2],l)
H.a([],p)
o=new G.d("Will O Wisp",k,null,n,o,0)
$.$get$c().h(0,o)
$.FB=o
o=H.a(["Fiberglass"],p)
n=$.v
k=H.a([$.O,$.aQ],l)
H.a([],p)
o=new G.d("Fiberglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["Skull"],p)
n=$.v
k=H.a([$.b2,$.b0],l)
H.a([],p)
o=new G.d("Skull",k,null,n,o,0)
$.$get$c().h(0,o)
$.EZ=o
o=H.a(["Enchanted"],p)
n=$.G
k=H.a([$.a2,$.bZ],l)
H.a([],p)
o=new G.d("Enchanted",k,null,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["Berserker's"],p)
n=$.aa
k=H.a([$.a2,$.bx],l)
H.a([],p)
o=new G.d("Berserker's",k,null,n,o,0)
$.$get$c().h(0,o)
$.B2=o
o=H.a(["Clerical"],p)
n=$.aa
k=H.a([$.a2,$.aH],l)
H.a([],p)
o=new G.d("Clerical",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aH,$.aq],l)
H.a([],p)
o=new G.d("Cauterizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c7,$.aR],l)
H.a([],p)
o=new G.d("X-Ray",k,null,n,o,0)
$.$get$c().h(0,o)
$.FI=o
o=H.a(["Clever"],p)
n=$.I
k=H.a([$.Y,$.bZ],l)
H.a([],p)
o=new G.d("Clever",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.b3,$.aq],l)
H.a([],p)
o=new G.d("Fireplace",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["Crackling"],p)
n=$.G
k=H.a([$.aY,$.aq],l)
H.a([],p)
o=new G.d("Crackling",k,null,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["Thumping"],p)
n=$.G
k=H.a([$.aY,$.ce],l)
H.a([],p)
o=new G.d("Thumping",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fn=o
o=H.a(["Shrieking","Banshee"],p)
n=$.G
k=H.a([$.bY,$.aY],l)
H.a([],p)
o=new G.d("Banshee",k,null,n,o,0)
$.$get$c().h(0,o)
$.EQ=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.aX,$.bt],l)
H.a([],p)
o=new G.d("Surreal2",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fg=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aH,$.aS],l)
H.a([],p)
o=new G.d("Aloe",k,null,n,o,0)
$.$get$c().h(0,o)
$.AS=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.az,$.aS],l)
H.a([],p)
o=new G.d("Rose",k,null,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.aX,$.ah],l)
H.a([],p)
o=new G.d("Knock Knock",k,null,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a2,$.bR],l)
H.a([],p)
o=new G.d("Lifesteal",k,null,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.ax,$.aC],l)
H.a([],p)
o=new G.d("Tragic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fs=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.as,$.aX],l)
H.a([],p)
o=new G.d("Slapstick",k,null,n,o,0)
$.$get$c().h(0,o)
$.F_=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.c_,$.aX],l)
H.a([],p)
o=new G.d("Gross Out",k,null,n,o,0)
$.$get$c().h(0,o)
$.wL=o
o=H.a(["Flowery"],p)
n=$.v
k=H.a([$.ax,$.aS],l)
H.a([],p)
o=new G.d("Flowery",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["Poison Ivy"],p)
n=$.v
k=H.a([$.bR,$.aS],l)
H.a([],p)
o=new G.d("Poison Ivy",k,null,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.G
k=H.a([$.a2,$.by],l)
H.a([],p)
o=new G.d("Winged",k,null,n,o,0)
$.$get$c().h(0,o)
$.FC=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.aS,$.ao,$.aC],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["Lawful"],p)
n=$.I
k=H.a([$.b_,$.at],l)
H.a([],p)
o=new G.d("Lawful",k,null,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["Chaotic"],p)
n=$.I
k=H.a([$.bx,$.at],l)
H.a([],p)
o=new G.d("Chaotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["Hypothermic"],p)
n=$.G
k=H.a([$.aC,$.bs],l)
H.a([],p)
o=new G.d("Hypothermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["Hyperthermic"],p)
n=$.G
k=H.a([$.aC,$.aq],l)
H.a([],p)
o=new G.d("Hyperthermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["Shackled"],p)
n=$.G
k=H.a([$.b_,$.ce],l)
H.a([],p)
o=new G.d("Shackled",k,null,n,o,0)
$.$get$c().h(0,o)
$.EH=o
o=H.a(["Poetic"],p)
n=$.I
k=H.a([$.Y,$.az],l)
H.a([],p)
o=new G.d("Poetic",k,null,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["Holographic"],p)
n=$.v
k=H.a([$.aR,$.Y,$.aQ,$.a7],l)
H.a([],p)
o=new G.d("Holographic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["Casket","Coffin"],p)
n=$.v
k=H.a([$.X,$.aC],l)
H.a([],p)
o=new G.d("Casket",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["Spectral"],p)
n=$.v
k=H.a([$.bY,$.a2],l)
H.a([],p)
o=new G.d("Spectral",k,null,n,o,0)
$.$get$c().h(0,o)
$.F5=o
o=H.a(["Phoenix"],p)
n=$.v
k=H.a([$.aq,$.by],l)
H.a([],p)
o=new G.d("Phoenix",k,null,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["Tattered"],p)
n=$.G
k=H.a([$.O,$.aC],l)
H.a([],p)
o=new G.d("Tattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fk=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a9,$.X],l)
H.a([],p)
o=new G.d("Woodwind",k,null,n,o,0)
$.$get$c().h(0,o)
$.FH=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aE,$.b2],l)
H.a([],p)
o=new G.d("Bone Hurting",k,null,n,o,0)
$.$get$c().h(0,o)
$.B6=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aH,$.b2],l)
H.a([],p)
o=new G.d("Bone Healing:",k,null,n,o,0)
$.$get$c().h(0,o)
$.B5=o
o=H.a(["Calcium"],p)
n=$.v
k=H.a([$.b2,$.aH,$.ao],l)
H.a([],p)
o=new G.d("Calcium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["Fleece"],p)
n=$.v
k=H.a([$.O,$.aq],l)
H.a([],p)
o=new G.d("Fleece",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["Potted"],p)
n=$.v
k=H.a([$.bU,$.aS],l)
H.a([],p)
o=new G.d("Potted",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.v
k=H.a([$.D,$.ao],l)
H.a([],p)
o=new G.d("Canned",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["Diseased"],p)
n=$.G
k=H.a([$.aC,$.bl],l)
H.a([],p)
o=new G.d("Diseased",k,null,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["Porcupine"],p)
n=$.v
k=H.a([$.aM,$.cl],l)
H.a([],p)
o=new G.d("Porcupine",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["Fanged"],p)
n=$.G
k=H.a([$.b2,$.aM],l)
H.a([],p)
o=new G.d("Fanged",k,null,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["Basalt"],p)
n=$.v
k=H.a([$.au,$.al],l)
H.a([],p)
o=new G.d("Basalt",k,null,n,o,0)
$.$get$c().h(0,o)
$.B_=o
o=H.a(["Obsidian"],p)
n=$.v
k=H.a([$.aQ,$.al],l)
H.a([],p)
o=new G.d("Obsidian",k,null,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["Fenestrated"],p)
n=$.v
k=H.a([$.aQ,$.X],l)
H.a([],p)
o=new G.d("Fenestrated",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["Plexiglass"],p)
n=$.v
k=H.a([$.aQ,$.aD],l)
H.a([],p)
o=new G.d("Plexiglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bU,$.K],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["Fungal"],p)
n=$.v
k=H.a([$.aS,$.c_],l)
H.a([],p)
o=new G.d("Fungal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["Thorny"],p)
n=$.G
k=H.a([$.aS,$.aM],l)
H.a([],p)
o=new G.d("Thorny",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fm=o
o=H.a(["Bulbed"],p)
n=$.G
k=H.a([$.aS,$.ah],l)
H.a([],p)
o=new G.d("Bulbed",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.aQ,$.aJ],l)
H.a([],p)
o=new G.d("Glass Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.aS,$.cf],l)
H.a([],p)
o=new G.d("Caoutchouc",k,null,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["Cellulose"],p)
n=$.v
k=H.a([$.aS,$.aD],l)
H.a([],p)
o=new G.d("Cellulose",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a9,$.b0],l)
H.a([],p)
o=new G.d("Horrorcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bt,$.a9],l)
H.a([],p)
o=new G.d("Nightcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bt,$.a7,$.a9],l)
H.a([],p)
o=new G.d("Crazy Bus",k,null,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["Burdock"],p)
n=$.v
k=H.a([$.aS,$.cl],l)
H.a([],p)
o=new G.d("Burdock",k,null,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["Necrotic"],p)
n=$.G
k=H.a([$.b2,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Necrotic",k,null,n,o,0))
o=H.a(["Stem"],p)
n=$.v
k=H.a([$.b2,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stem",k,null,n,o,0))
o=H.a(["DryBone"],p)
n=$.G
k=H.a([$.b2,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.d("DryBone",k,null,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.b2,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("XyloBone",k,null,n,o,0))
o=H.a(["Ribcage"],p)
n=$.v
k=H.a([$.b2,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ribcage",k,null,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.b2,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("BoneZone",k,null,n,o,0))
o=H.a(["Creaky"],p)
n=$.I
k=H.a([$.X,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Creaky",k,null,n,o,0))
o=H.a(["Maple"],p)
n=$.v
k=H.a([$.X,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Maple",k,null,n,o,0))
o=H.a(["Mahagony"],p)
n=$.v
k=H.a([$.X,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mahagony",k,null,n,o,0))
o=H.a(["Fenced"],p)
n=$.G
k=H.a([$.X,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fenced",k,null,n,o,0))
o=H.a(["Bocote"],p)
n=$.v
k=H.a([$.X,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bocote",k,null,n,o,0))
o=H.a(["Incense"],p)
n=$.v
k=H.a([$.X,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incense",k,null,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.X,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebony",k,null,n,o,0))
o=H.a(["Birch"],p)
n=$.v
k=H.a([$.X,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Birch",k,null,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.q
k=H.a([$.X,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knock-on-Wood",k,null,n,o,0))
o=H.a(["Firewood"],p)
n=$.q
k=H.a([$.X,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firewood",k,null,n,o,0))
o=H.a(["BlackForest"],p)
n=$.aa
k=H.a([$.X,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackForest",k,null,n,o,0))
o=H.a(["Tree"],p)
n=$.v
k=H.a([$.X,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tree",k,null,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.v
k=H.a([$.X,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebonwood",k,null,n,o,0))
o=H.a(["Bark"],p)
n=$.v
k=H.a([$.X,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bark",k,null,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.X,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Caveman's",k,null,n,o,0))
o=H.a(["3D Printed"],p)
n=$.v
k=H.a([$.aD,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("3D Printed",k,null,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.K,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thesis",k,null,n,o,0))
o=H.a(["Graphene"],p)
n=$.v
k=H.a([$.K,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graphene",k,null,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.K,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prophecy",k,null,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.O,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedsheet",k,null,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.v
k=H.a([$.au,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gemstone",k,null,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.au,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pet Rock",k,null,n,o,0))
o=H.a(["Sand"],p)
n=$.v
k=H.a([$.au,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sand",k,null,n,o,0))
o=H.a(["Geode"],p)
n=$.v
k=H.a([$.au,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Geode",k,null,n,o,0))
o=H.a(["Silicon"],p)
n=$.v
k=H.a([$.au,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silicon",k,null,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.v
k=H.a([$.au,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryolite",k,null,n,o,0))
o=H.a(["Meteor"],p)
n=$.v
k=H.a([$.au,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meteor",k,null,n,o,0))
o=H.a(["Carbon"],p)
n=$.v
k=H.a([$.au,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon",k,null,n,o,0))
o=H.a(["Mossy"],p)
n=$.G
k=H.a([$.au,$.cl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mossy",k,null,n,o,0))
o=H.a(["Lensed"],p)
n=$.G
k=H.a([$.Y,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lensed",k,null,n,o,0))
o=H.a(["Hide"],p)
n=$.G
k=H.a([$.O,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hide",k,null,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.O,$.by],l)
H.a([],p)
$.$get$c().h(0,new G.d("FeatherBoa",k,null,n,o,0))
o=H.a(["Tacky"],p)
n=$.I
k=H.a([$.O,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tacky",k,null,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.O,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Whip",k,null,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.O,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Costumed",k,null,n,o,0))
o=H.a(["Punk"],p)
n=$.I
k=H.a([$.O,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Punk",k,null,n,o,0))
o=H.a(["Weighted"],p)
n=$.G
k=H.a([$.O,$.ce],l)
H.a([],p)
$.$get$c().h(0,new G.d("Weighted",k,null,n,o,0))
o=H.a(["Favorite"],p)
n=$.I
k=H.a([$.O,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Favorite",k,null,n,o,0))
o=H.a(["Novelty"],p)
n=$.I
k=H.a([$.O,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Novelty",k,null,n,o,0))
o=H.a(["Security"],p)
n=$.v
k=H.a([$.O,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Security",k,null,n,o,0))
o=H.a(["IcePack"],p)
n=$.v
k=H.a([$.O,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("IcePack",k,null,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.O,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("MotionCapture",k,null,n,o,0))
o=H.a(["Silica"],p)
n=$.v
k=H.a([$.O,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silica",k,null,n,o,0))
o=H.a(["Harp"],p)
n=$.v
k=H.a([$.O,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Harp",k,null,n,o,0))
o=H.a(["Silk"],p)
n=$.v
k=H.a([$.O,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silk",k,null,n,o,0))
o=H.a(["RedFlag"],p)
n=$.v
k=H.a([$.O,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("RedFlag",k,null,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.O,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet1",k,null,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.v
k=H.a([$.O,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Satin",k,null,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.O,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet2",k,null,n,o,0))
o=H.a(["Tweed"],p)
n=$.v
k=H.a([$.O,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tweed",k,null,n,o,0))
o=H.a(["Jean"],p)
n=$.v
k=H.a([$.O,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Jean",k,null,n,o,0))
o=H.a(["Tesla"],p)
n=$.aa
k=H.a([$.Y,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tesla",k,null,n,o,0))
o=H.a(["Ashwood"],p)
n=$.v
k=H.a([$.a2,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ashwood",k,null,n,o,0))
o=H.a(["Peashooter"],p)
n=$.v
k=H.a([$.aS,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peashooter",k,null,n,o,0))
o=H.a(["Lacquer"],p)
n=$.v
k=H.a([$.aD,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lacquer",k,null,n,o,0))
o=H.a(["Classpecty"],p)
n=$.v
k=H.a([$.T,$.S],l)
H.a([],p)
$.$get$c().h(0,new G.d("Classpecty",k,null,n,o,0))
o=H.a(["Smartass"],p)
n=$.I
k=H.a([$.Y,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smartass",k,null,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.I
k=H.a([$.bm,$.aP,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Miraculous",k,null,n,o,0))
o=H.a(["Pigeon"],p)
n=$.v
k=H.a([$.bt,$.by],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pigeon",k,null,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bt,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grimoire",k,null,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.aa
k=H.a([$.bt,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Oglogoth's",k,null,n,o,0))
o=H.a(["Echidna's"],p)
n=$.aa
k=H.a([$.a_,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Echidna's",k,null,n,o,0))
o=H.a(["Superior"],p)
n=$.aa
k=H.a([$.Y,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Superior",k,null,n,o,0))
o=H.a(["Lego"],p)
n=$.v
k=H.a([$.a_,$.aD,$.bk,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lego",k,null,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a_,$.dQ,$.X,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yardstick",k,null,n,o,0))
o=H.a(["Queenly"],p)
n=$.aa
k=H.a([$.al,$.a2,$.bm,$.aE,$.b0],l)
H.a([],p)
o=new G.d("Queenly",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["Kingly"],p)
n=$.aa
k=H.a([$.b0,$.ah,$.ce,$.a2,$.bm],l)
H.a([],p)
o=new G.d("Kingly",k,null,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["Jack"],p)
n=$.aa
k=H.a([$.aM,$.as,$.D,$.al],l)
H.a([],p)
o=new G.d("Jack",k,null,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a_,$.aP,$.X,$.T,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Codpiece",k,null,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a_,$.aB,$.K,$.D,$.Y,$.T],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graceful",k,null,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a_,$.aB,$.K,$.Y,$.T,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guide",k,null,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a_,$.aC,$.K,$.Y,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Testament",k,null,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.aa
k=H.a([$.a_,$.aR,$.D,$.aM,$.as,$.ey],l)
H.a([],p)
$.$get$c().h(0,new G.d("Excalibur",k,null,n,o,0))
o=H.a(["Influential"],p)
n=$.aa
k=H.a([$.a_,$.K,$.bx,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Influential",k,null,n,o,0))
o=H.a(["Alternative"],p)
n=$.aa
k=H.a([$.a_,$.a2,$.O,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Alternative",k,null,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.aa
k=H.a([$.a_,$.aE,$.b2,$.D,$.fn,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Valkyrie",k,null,n,o,0))
o=H.a(["Ongoing"],p)
n=$.aa
k=H.a([$.a_,$.au,$.ai,$.jC,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ongoing",k,null,n,o,0))
o=H.a(["Short"],p)
n=$.G
k=H.a([$.a_,$.O,$.bh,$.ax,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short",k,null,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a_,$.D,$.bh,$.ax,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crown",k,null,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a_,$.aD,$.a7,$.al,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gristtorrent",k,null,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a_,$.O,$.Y,$.a2,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Robe",k,null,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a_,$.O,$.Y,$.ax,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beret",k,null,n,o,0))
o=H.a(["Blank"],p)
n=$.G
k=$.a_
j=$.K
i=$.Y
i=H.a([k,j,i,$.aB,i,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blank",i,null,n,o,0))
o=H.a(["Cueball"],p)
n=$.v
i=H.a([$.a_,$.ax,$.bU,$.ah,$.fl,$.at],l)
H.a([],p)
o=new G.d("Cueball",i,null,n,o,0)
$.$get$c().h(0,o)
$.wE=o
o=H.a(["Meddler's"],p)
n=$.aa
i=H.a([$.a_,$.aB,$.K,$.bx,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meddler's",i,null,n,o,0))
o=H.a(["Scroll"],p)
n=$.aa
i=H.a([$.a2,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scroll",i,null,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.K,$.Y,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tome",i,null,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.a_,$.D,$.al,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lockpick",i,null,n,o,0))
o=H.a(["Warped"],p)
n=$.G
i=H.a([$.a_,$.D,$.aQ,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Warped",i,null,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a_,$.aP,$.X,$.am,$.bk,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stairs",i,null,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a_,$.aq,$.D,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rocket",i,null,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a_,$.a7,$.K,$.aB,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.d("~ATH",i,null,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a_,$.X,$.at,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Puppeted",i,null,n,o,0))
o=H.a(["Angelic"],p)
n=$.aa
i=H.a([$.a_,$.bm,$.by,$.aR,$.a9,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Angelic",i,null,n,o,0))
o=H.a(["Vitae"],p)
n=$.v
i=H.a([$.a_,$.aH,$.aQ,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vitae",i,null,n,o,0))
o=H.a(["Fluorite"],p)
n=$.v
i=H.a([$.a_,$.aR,$.bZ,$.au,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluorite",i,null,n,o,0))
o=H.a(["Janus"],p)
n=$.aa
i=H.a([$.a_,$.aE,$.au,$.ai,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Janus",i,null,n,o,0))
o=H.a(["Bacchus"],p)
n=$.aa
i=H.a([$.a_,$.ao,$.bx,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bacchus",i,null,n,o,0))
o=H.a(["TurnTable"],p)
n=$.aa
i=H.a([$.a_,$.D,$.a9,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("TurnTable",i,null,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.I
i=H.a([$.a_,$.aQ,$.c7,$.aR,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("???",i,null,n,o,0))
o=H.a(["Demonite"],p)
n=$.v
i=H.a([$.D,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("Demonite",i,null,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.aa
i=H.a([$.D,$.by],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stymphalian",i,null,n,o,0))
o=H.a(["Junky"],p)
n=$.v
i=H.a([$.D,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Junky",i,null,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.v
i=H.a([$.D,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cold Iron",i,null,n,o,0))
o=H.a(["Bolted"],p)
n=$.G
i=H.a([$.D,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bolted",i,null,n,o,0))
o=H.a(["Armored"],p)
n=$.G
i=H.a([$.D,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Armored",i,null,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.v
i=H.a([$.D,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heartsteel",i,null,n,o,0))
o=H.a(["Brick"],p)
n=$.v
i=H.a([$.bU,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Brick",i,null,n,o,0))
o=H.a(["Clay"],p)
n=$.v
i=H.a([$.bU,$.cf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Clay",i,null,n,o,0))
o=H.a(["Mugly"],p)
n=$.I
i=H.a([$.bU,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mugly",i,null,n,o,0))
o=H.a(["Plate"],p)
n=$.v
i=H.a([$.bU,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plate",i,null,n,o,0))
o=H.a(["Terracotta"],p)
n=$.v
i=H.a([$.bU,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Terracotta",i,null,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.v
i=H.a([$.bU,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Semiconductive",i,null,n,o,0))
o=H.a(["Vinyl"],p)
n=$.v
i=H.a([$.bU,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vinyl",i,null,n,o,0))
o=H.a(["Artisan"],p)
n=$.G
i=H.a([$.bU,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Artisan",i,null,n,o,0))
o=H.a(["Tiled"],p)
n=$.v
i=H.a([$.bU,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tiled",i,null,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.G
i=H.a([$.bU,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hand-Sculpted",i,null,n,o,0))
o=H.a(["Handicraft"],p)
n=$.I
i=H.a([$.bV,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Handicraft",i,null,n,o,0))
o=H.a(["Torn"],p)
n=$.G
i=H.a([$.bV,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Torn",i,null,n,o,0))
o=H.a(["Grotesque"],p)
n=$.I
i=H.a([$.bV,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grotesque",i,null,n,o,0))
o=H.a(["Flickering"],p)
n=$.G
i=H.a([$.bV,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Flickering",i,null,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.v
i=H.a([$.bV,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thinly Veiled",i,null,n,o,0))
o=H.a(["Fragile"],p)
n=$.G
i=H.a([$.bV,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fragile",i,null,n,o,0))
o=H.a(["Troll's"],p)
n=$.aa
i=H.a([$.bV,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Troll's",i,null,n,o,0))
o=H.a(["Sappy"],p)
n=$.v
i=H.a([$.bV,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sappy",i,null,n,o,0))
o=H.a(["Bootleg"],p)
n=$.v
i=H.a([$.bV,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bootleg",i,null,n,o,0))
o=H.a(["Distorted"],p)
n=$.v
i=H.a([$.bV,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Distorted",i,null,n,o,0))
o=H.a(["Ent's"],p)
n=$.aa
i=H.a([$.X,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ent's",i,null,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.v
i=H.a([$.X,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("WeepingWillow",i,null,n,o,0))
o=H.a(["Latex"],p)
n=$.v
i=H.a([$.X,$.cf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Latex",i,null,n,o,0))
o=H.a(["Turf"],p)
n=$.v
i=H.a([$.aD,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turf",i,null,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.cf,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stress Relieving",i,null,n,o,0))
o=H.a(["R-Rated"],p)
n=$.G
i=H.a([$.cf,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("R-Rated",i,null,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.cf,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Racing",i,null,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.K,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cross Stitch",i,null,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.K,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("LoveLetter",i,null,n,o,0))
o=H.a(["EbonStone"],p)
n=$.v
i=H.a([$.au,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("EbonStone",i,null,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.v
i=H.a([$.au,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rock Candy",i,null,n,o,0))
o=H.a(["Smashing"],p)
n=$.I
i=H.a([$.au,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smashing",i,null,n,o,0))
o=H.a(["Anomalous"],p)
n=$.I
i=H.a([$.bY,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anomalous",i,null,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.v
i=H.a([$.bY,$.by],l)
H.a([],p)
$.$get$c().h(0,new G.d("Onmoraki",i,null,n,o,0))
o=H.a(["Ghastly"],p)
n=$.I
i=H.a([$.bY,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ghastly",i,null,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.v
i=H.a([$.bY,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shade",i,null,n,o,0))
o=H.a(["Choral"],p)
n=$.v
i=H.a([$.bY,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Choral",i,null,n,o,0))
o=H.a(["Eerie"],p)
n=$.v
i=H.a([$.bY,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eerie",i,null,n,o,0))
o=H.a(["Spiritual"],p)
n=$.I
i=H.a([$.bY,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spiritual",i,null,n,o,0))
o=H.a(["Heart"],p)
n=$.v
i=H.a([$.bl,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heart",i,null,n,o,0))
o=H.a(["Primordial"],p)
n=$.v
i=H.a([$.bl,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Primordial",i,null,n,o,0))
o=H.a(["Eyeball"],p)
n=$.v
i=H.a([$.bl,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eyeball",i,null,n,o,0))
o=H.a(["Vulture"],p)
n=$.G
i=H.a([$.bl,$.by],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vulture",i,null,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bt,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackMagic",i,null,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.v
i=H.a([$.bt,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doppelganger",i,null,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.G
i=H.a([$.bt,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incomprehensible",i,null,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bt,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Destructive",i,null,n,o,0))
o=H.a(["Growling"],p)
n=$.G
i=H.a([$.cl,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Growling",i,null,n,o,0))
o=H.a(["Coconut"],p)
n=$.v
i=H.a([$.cl,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Coconut",i,null,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.aa
i=H.a([$.cl,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beastmaster's",i,null,n,o,0))
o=H.a(["Fluffy"],p)
n=$.v
i=H.a([$.cl,$.by],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluffy",i,null,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.v
i=H.a([$.aS,$.by],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fern",i,null,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.G
i=H.a([$.aS,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Four Leafed",i,null,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.v
i=H.a([$.aS,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shrubbery",i,null,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.v
i=H.a([$.aS,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ecballium",i,null,n,o,0))
o=H.a(["Truffle"],p)
n=$.v
i=H.a([$.aS,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Truffle",i,null,n,o,0))
o=H.a(["Vine"],p)
n=$.v
i=H.a([$.aS,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vine",i,null,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.v
i=H.a([$.aS,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("CorpseBlossom",i,null,n,o,0))
o=H.a(["Fruity"],p)
n=$.G
i=H.a([$.aS,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fruity",i,null,n,o,0))
o=H.a(["Squawking"],p)
n=$.G
i=H.a([$.by,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Squawking",i,null,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.v
i=H.a([$.by,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Poultry",i,null,n,o,0))
o=H.a(["Dove"],p)
n=$.v
i=H.a([$.by,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dove",i,null,n,o,0))
o=H.a(["Peacock"],p)
n=$.v
i=H.a([$.by,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peacock",i,null,n,o,0))
o=H.a(["Stork"],p)
n=$.v
i=H.a([$.by,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stork",i,null,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.v
i=H.a([$.by,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Zhenniao",i,null,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.v
i=H.a([$.by,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dodo",i,null,n,o,0))
o=H.a(["Raven"],p)
n=$.us
i=H.a([$.by,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Raven",i,null,n,o,0))
o=H.a(["Frilled"],p)
n=$.G
i=H.a([$.by,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Frilled",i,null,n,o,0))
o=H.a(["Horrifying"],p)
n=$.I
i=H.a([$.c_,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Horrifying",i,null,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.as,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Burning Edge",i,null,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.as,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scapel",i,null,n,o,0))
o=H.a(["Menacing"],p)
n=$.I
i=H.a([$.b0,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Menacing",i,null,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aH,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Syringe",i,null,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.I
i=H.a([$.ao,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bitter",i,null,n,o,0))
o=H.a(["Pineapple"],p)
n=$.v
i=H.a([$.ao,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pineapple",i,null,n,o,0))
o=H.a(["Crunchy"],p)
n=$.I
i=H.a([$.ao,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crunchy",i,null,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.ce,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bass",i,null,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.ce,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rigid",i,null,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aJ,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prop",i,null,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aJ,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Magic Missle",i,null,n,o,0))
o=H.a(["Gangster's"],p)
n=$.aa
i=H.a([$.aJ,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gangster's",i,null,n,o,0))
o=H.a(["Cupid's"],p)
n=$.aa
i=H.a([$.aJ,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cupid's",i,null,n,o,0))
o=H.a(["Turreted"],p)
n=$.G
i=H.a([$.aJ,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turreted",i,null,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.G
i=H.a([$.aJ,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("AutoTarget",i,null,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.aa
i=H.a([$.aJ,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guerilla's",i,null,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aJ,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rail",i,null,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aJ,$.c7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tau",i,null,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aJ,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pew",i,null,n,o,0))
o=H.a(["Thermal"],p)
n=$.G
i=H.a([$.aJ,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thermal",i,null,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.v
i=H.a([$.aR,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plasma",i,null,n,o,0))
o=H.a(["Shredding"],p)
n=$.v
i=H.a([$.a9,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shredding",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.v
i=H.a([$.bZ,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Charmed"],p)
n=$.v
i=H.a([$.bZ,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charmed",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.aa
i=H.a([$.bZ,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Prospitian"],p)
n=$.aa
i=H.a([$.aR,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prospitian",i,null,n,o,0))
o=H.a(["Vigilant"],p)
n=$.G
i=H.a([$.aR,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vigilant",i,null,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.I
i=H.a([$.aR,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stand-Up",i,null,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.G
i=H.a([$.aR,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedazzled",i,null,n,o,0))
o=H.a(["Thief's"],p)
n=$.aa
i=H.a([$.al,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thief's",i,null,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.al,$.a2,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("InvisibilityCloak",i,null,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.G
i=H.a([$.al,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comedy Night",i,null,n,o,0))
o=H.a(["Stealthy"],p)
n=$.I
i=H.a([$.al,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stealthy",i,null,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.al,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Subterfuge",i,null,n,o,0))
o=H.a(["Dersite"],p)
n=$.aa
i=H.a([$.al,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dersite",i,null,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.aa
i=H.a([$.bk,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ambient",i,null,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bk,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anesthesia",i,null,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bk,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Supportive",i,null,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aH,$.c7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nuka",i,null,n,o,0))
o=H.a(["Contaminated"],p)
n=$.G
i=H.a([$.bR,$.c7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Contaminated",i,null,n,o,0))
o=H.a(["Unstable"],p)
n=$.G
i=H.a([$.aC,$.c7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unstable",i,null,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aC,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.d("Timebomb",i,null,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.G
i=H.a([$.a7,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short Circuiting",i,null,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aC,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relic",i,null,n,o,0))
o=H.a(["Existentialist"],p)
n=$.G
i=H.a([$.aC,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Existentialist",i,null,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.I
i=H.a([$.aC,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Apocalyptic",i,null,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bu,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dud",i,null,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bu,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guided",i,null,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bu,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bobomb",i,null,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aC,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dread",i,null,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bu,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knockback",i,null,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a7,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Paralysis",i,null,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bu,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carnage",i,null,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bu,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blast Beat",i,null,n,o,0))
o=H.a(["Corrosive"],p)
n=$.G
i=H.a([$.bu,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Corrosive",i,null,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bu,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ice Bomb",i,null,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bs,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryogenic",i,null,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a2,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spellcasting",i,null,n,o,0))
o=H.a(["Tingling"],p)
n=$.G
i=H.a([$.a7,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tingling",i,null,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bx,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rage Plague",i,null,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bR,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nerve Gas",i,null,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bR,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon Monoxide",i,null,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bR,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Neurotoxin",i,null,n,o,0))
o=H.a(["Virulent"],p)
n=$.G
i=H.a([$.bR,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Virulent",i,null,n,o,0))
o=H.a(["Toxic"],p)
n=$.G
i=H.a([$.bR,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Toxic",i,null,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bR,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Laughing Gas",i,null,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.G
i=H.a([$.a9,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Amplified",i,null,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a9,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rap",i,null,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.a9,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Saxaphone",i,null,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.a9,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Offbeat",i,null,n,o,0))
o=H.a(["Piper's"],p)
n=$.aa
i=H.a([$.a9,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Piper's",i,null,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.a9,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Melodic",i,null,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a9,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smooth",i,null,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a9,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thrash",i,null,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a9,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chant",i,null,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bx,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chewy",i,null,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bx,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Phony",i,null,n,o,0))
o=H.a(["Doctor's"],p)
n=$.aa
i=H.a([$.Y,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doctor's",i,null,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.b_,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Straitjacketed",i,null,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.b_,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Strapped",i,null,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.b_,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bondage",i,null,n,o,0))
o=H.a(["Sealed"],p)
n=$.G
i=H.a([$.b_,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sealed",i,null,n,o,0))
o=H.a(["Attractive"],p)
n=$.I
i=H.a([$.ax,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Attractive",i,null,n,o,0))
o=H.a(["Relaxed"],p)
n=$.G
i=H.a([$.b3,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relaxed",i,null,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.b3,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Loveseat",i,null,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.I
i=H.a([$.ao,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comfort Food",i,null,n,o,0))
o=H.a(["Yandere"],p)
n=$.I
i=H.a([$.az,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yandere",i,null,n,o,0))
o=H.a(["Tsundere"],p)
n=$.I
i=H.a([$.az,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tsundere",i,null,n,o,0))
o=H.a(["Disturbed"],p)
n=$.G
i=H.a([$.at,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Disturbed",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.Y,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hydroponic",i,null,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.at,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Free Range",i,null,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.aa
i=H.a([$.az,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gentlemanly",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.G
i=H.a([$.az,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sentimental",i,null,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.G
i=H.a([$.az,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki",i,null,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.G
i=H.a([$.az,$.aY,$.aB,$.jD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki Literature Club",i,null,n,o,0))
o=H.a(["Banana"],p)
n=$.G
i=H.a([$.ao,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Banana",i,null,n,o,0))
o=H.a(["Mana"],p)
n=$.G
i=H.a([$.ao,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mana",i,null,n,o,0))
o=H.a(["Homemade"],p)
n=$.G
i=H.a([$.ao,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Homemade",i,null,n,o,0))
o=H.a(["Steampunk"],p)
n=$.G
i=H.a([$.a2,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Steampunk",i,null,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.G
i=H.a([$.ao,$.aX,$.a7,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("I Can't Stop Laughing",i,null,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.v
i=H.a([$.D,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Soulsteel",i,null,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.b2,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ritual",i,null,n,o,0))
o=H.a(["Inflamable"],p)
n=$.G
i=H.a([$.bV,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Inflamable",i,null,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.X,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crafting",i,null,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.aD,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Polluting",i,null,n,o,0))
o=H.a(["Insulated"],p)
n=$.G
i=H.a([$.cf,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Insulated",i,null,n,o,0))
o=H.a(["Ash"],p)
n=$.v
i=H.a([$.K,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ash",i,null,n,o,0))
o=H.a(["Delicate"],p)
n=$.G
i=H.a([$.K,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Delicate",i,null,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.aa
i=H.a([$.aQ,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Glass Blower's",i,null,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.G
i=H.a([$.bl,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sunburnt",i,null,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.G
i=H.a([$.aq,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pyrebitten",i,null,n,o,0))
o=H.a(["Mink"],p)
n=$.v
i=H.a([$.az,$.cl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mink",i,null,n,o,0))
o=H.a(["Wildfire"],p)
n=$.aa
i=H.a([$.aS,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Wildfire",i,null,n,o,0))
o=H.a(["Scarred"],p)
n=$.G
i=H.a([$.aH,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scarred",i,null,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.I
i=H.a([$.bm,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hyper Realistic",i,null,n,o,0))
o=H.a(["Hestia's"],p)
n=$.aa
i=H.a([$.bZ,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hestia's",i,null,n,o,0))
o=H.a(["Smoking"],p)
n=$.G
i=H.a([$.al,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smoking",i,null,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.G
i=H.a([$.aq,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Radiator",i,null,n,o,0))
o=H.a(["Fuming"],p)
n=$.G
i=H.a([$.aq,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fuming",i,null,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.G
i=H.a([$.aq,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firework",i,null,n,o,0))
o=H.a(["Panicky"],p)
n=$.G
i=H.a([$.aC,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Panicky",i,null,n,o,0))
o=H.a(["Ornamental"],p)
n=$.G
i=H.a([$.bh,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ornamental",i,null,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.G
i=H.a([$.bh,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dear",i,null,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.G
i=H.a([$.bh,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Swaggy",i,null,n,o,0))
o=H.a(["Uncanny"],p)
n=$.G
i=H.a([$.aE,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Uncanny",i,null,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.G
i=H.a([$.aY,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Talkative",i,null,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.G
i=H.a([$.az,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Waifu",i,null,n,o,0))
o=H.a(["Charming"],p)
n=$.G
i=H.a([$.a2,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charming",i,null,n,o,0))
o=H.a(["God Tier"],p)
n=$.G
i=H.a([$.T,$.S,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("God Tier",i,null,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.G
i=H.a([$.T,$.S,$.bm,$.aP,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cod Tier",i,null,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.G
i=H.a([$.T,$.S,$.bm,$.cl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dog Tier",i,null,n,o,0))
o=H.a(["JRPG"],p)
n=$.G
i=H.a([$.ey,$.uj,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("JRPG",i,null,n,o,0))
o=H.a(["Cracked"],p)
n=$.G
i=H.a([$.au,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cracked",i,null,n,o,0))
o=H.a(["Ruffled"],p)
n=$.G
i=H.a([$.by,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ruffled",i,null,n,o,0))
o=H.a(["Mandrake"],p)
n=$.G
i=H.a([$.aS,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mandrake",i,null,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.G
i=H.a([$.a2,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beanstalk",i,null,n,o,0))
o=H.a(["Unnerving"],p)
n=$.G
i=H.a([$.b0,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unnerving",i,null,n,o,0))
o=H.a(["Chipped"],p)
n=$.G
l=H.a([$.bU,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chipped",l,null,n,o,0))
if($.xu==null){o=$.mK
n=$.aM
l=$.as
k=$.b2
j=new U.ag(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,null,"Claws",!1,P.a0(null,null,null,m),0,3)
j.J("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.r.h(0,o)
$.xu=j}o=$.$get$aj();(o&&C.b).sm(o,0)
o=$.$get$aj()
n=$.O
l=$.wL
k=new U.ag(n,null,null,null,null,"Speedo",!1,P.a0(null,null,null,m),0,3)
k.J("Speedo",[l],null,!1,null)
k.r.h(0,n)
o.push(k)
k=$.$get$aj()
o=$.ey
n=$.as
l=$.D
j=$.aM
i=new U.ag(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,null,"Sword",!1,P.a0(null,null,null,m),0,3)
i.J("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.r.h(0,o)
k.push(i)
i=$.$get$aj()
k=$.mM
o=$.ah
j=$.D
l=new U.ag(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,null,"Hammer",!1,P.a0(null,null,null,m),0,3)
l.J("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.r.h(0,k)
i.push(l)
l=$.$get$aj()
i=$.uo
k=$.aJ
j=$.D
o=new U.ag(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,null,"Rifle",!1,P.a0(null,null,null,m),0,3)
o.J("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.r.h(0,i)
l.push(o)
o=$.$get$aj()
l=$.ui
i=$.aJ
j=$.D
k=new U.ag(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,null,"Pistol",!1,P.a0(null,null,null,m),0,3)
k.J("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.r.h(0,l)
o.push(k)
k=$.$get$aj()
o=$.x_
l=$.aJ
j=$.D
i=new U.ag(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,null,"Shotgun",!1,P.a0(null,null,null,m),0,3)
i.J("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.r.h(0,o)
k.push(i)
i=$.$get$aj()
k=$.wy
o=$.aM
j=$.as
l=$.D
n=new U.ag(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,null,"Blade",!1,P.a0(null,null,null,m),0,3)
n.J("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.r.h(0,k)
i.push(n)
n=$.$get$aj()
i=$.u8
k=$.aM
l=$.as
j=$.D
o=new U.ag(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,null,"Dagger",!1,P.a0(null,null,null,m),0,3)
o.J("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.r.h(0,i)
n.push(o)
o=$.$get$aj()
n=$.hu
i=$.ah
j=$.bU
l=new U.ag(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,null,"Fancysanta",!1,P.a0(null,null,null,m),0,3)
l.J("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.r.h(0,n)
o.push(l)
l=$.$get$aj()
o=$.x2
n=$.as
j=$.D
i=new U.ag(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,null,"Sickle",!1,P.a0(null,null,null,m),0,3)
i.J("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.r.h(0,o)
l.push(i)
i=$.$get$aj()
l=$.wB
o=$.as
j=$.D
n=new U.ag(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,null,"Chainsaw",!1,P.a0(null,null,null,m),0,3)
n.J("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.r.h(0,l)
i.push(n)
n=$.$get$aj()
i=$.wH
l=$.aM
j=$.D
o=new U.ag(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,null,"Fork",!1,P.a0(null,null,null,m),0,3)
o.J("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.r.h(0,i)
n.push(o)
o=$.$get$aj()
n=$.uh
i=$.by
j=$.bt
l=new U.ag(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,null,"Pigeon",!1,P.a0(null,null,null,m),0,3)
l.J("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.r.h(0,n)
o.push(l)
l=$.$get$aj()
o=$.fl
n=$.ce
j=$.au
i=$.ah
k=new U.ag(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,null,"Bowling Ball",!1,P.a0(null,null,null,m),0,3)
k.J("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.r.h(0,o)
l.push(k)
k=$.$get$aj()
l=$.u9
o=$.aD
i=$.bZ
j=new U.ag(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,null,"Dice",!1,P.a0(null,null,null,m),0,3)
j.J("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.r.h(0,l)
k.push(j)
j=$.$get$aj()
k=$.ug
l=$.D
i=$.aM
o=new U.ag(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,null,"Needle",!1,P.a0(null,null,null,m),0,3)
o.J("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.r.h(0,k)
j.push(o)
o=$.$get$aj()
j=$.uq
k=$.X
i=$.ah
l=new U.ag(j,"Very magey. 7/10.","ShittyWizardKind",null,null,"Staff",!1,P.a0(null,null,null,m),0,3)
l.J("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.r.h(0,j)
o.push(l)
l=$.$get$aj()
o=$.x5
j=$.b_
i=$.O
k=new U.ag(o,"Probably p hard to use.","ImKinkshamingKind",null,null,"Whip",!1,P.a0(null,null,null,m),0,3)
k.J("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.r.h(0,o)
l.push(k)
k=$.$get$aj()
l=$.u5
o=$.aJ
i=$.au
j=$.O
n=$.aM
h=new U.ag(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,null,"Bow",!1,P.a0(null,null,null,m),0,3)
h.J("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.r.h(0,l)
k.push(h)
h=$.$get$aj()
k=$.jD
l=$.X
n=$.ah
j=new U.ag(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,null,"Club",!1,P.a0(null,null,null,m),0,3)
j.J("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.r.h(0,k)
h.push(j)
j=$.$get$aj()
h=$.jB
k=$.X
n=new U.ag(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,null,"Battle Broom",!1,P.a0(null,null,null,m),0,3)
n.J("Battle Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.r.h(0,h)
j.push(n)
n=$.$get$aj()
j=$.aB
h=$.K
k=$.ah
l=new U.ag(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,null,"Book",!1,P.a0(null,null,null,m),0,3)
l.J("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.r.h(0,j)
n.push(l)
l=$.$get$aj()
n=$.wW
j=$.D
k=$.ah
h=new U.ag(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,null,"Road Sign",!1,P.a0(null,null,null,m),0,3)
h.J("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.r.h(0,n)
l.push(h)
h=$.$get$aj()
l=$.u4
n=$.as
k=$.D
j=$.ah
i=new U.ag(l,"Legit.","TreeMassacreKind",null,null,"Axe",!1,P.a0(null,null,null,m),0,3)
i.J("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.wR
l=$.X
j=$.aM
k=new U.ag(h,"Good for chest stabs.","UseOnHorsebackKind",null,null,"Lance",!1,P.a0(null,null,null,m),0,3)
k.J("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.fn
h=$.D
j=$.ah
l=new U.ag(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,null,"Shield",!1,P.a0(null,null,null,m),0,3)
l.J("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.wA
i=$.X
j=$.ah
h=new U.ag(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,null,"Cane",!1,P.a0(null,null,null,m),0,3)
h.J("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.r.h(0,k)
l.push(h)
h=$.$get$aj()
l=$.x6
k=$.aD
j=$.ah
i=new U.ag(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,null,"Yo-Yo",!1,P.a0(null,null,null,m),0,3)
i.J("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.x3
l=$.X
j=$.aJ
k=new U.ag(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,null,"Sling",!1,P.a0(null,null,null,m),0,3)
k.J("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.x1
h=$.D
j=$.as
l=new U.ag(i,"So edgey.","NarutoKind",null,null,"Shuriken",!1,P.a0(null,null,null,m),0,3)
l.J("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.ue
i=$.D
j=$.aJ
h=new U.ag(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,null,"Machine Gun",!1,P.a0(null,null,null,m),0,3)
h.J("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.r.h(0,k)
l.push(h)
h=$.$get$aj()
l=$.mL
k=$.D
j=$.bu
i=new U.ag(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,null,"Grenade",!1,P.a0(null,null,null,m),0,3)
i.J("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.fl
l=$.cf
j=$.ah
k=new U.ag(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,null,"Ball",!1,P.a0(null,null,null,m),0,3)
k.J("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.x4
h=$.D
j=$.aM
l=new U.ag(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,null,"3dent",!1,P.a0(null,null,null,m),0,3)
l.J("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.mJ
i=$.K
j=$.as
h=new U.ag(k,"An X-Men fan, I see.","YuGiOhKind",null,null,"Card",!1,P.a0(null,null,null,m),0,3)
h.J("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.r.h(0,k)
l.push(h)
h=$.$get$aj()
l=$.ub
k=$.D
j=$.ah
i=new U.ag(l,"Go with what you know, I guess.","UnstoppableKind",null,null,"Frying Pan",!1,P.a0(null,null,null,m),0,3)
i.J("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.ht
l=$.b3
j=$.O
k=new U.ag(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,null,"Pillow",!1,P.a0(null,null,null,m),0,3)
k.J("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.ex
h=$.D
j=$.b_
l=new U.ag(i,"This could be metal as fuck.","BikerGangKind",null,null,"Chain",!1,P.a0(null,null,null,m),0,3)
l.J("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.ur
i=$.D
j=$.ah
h=new U.ag(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,null,"Wrench",!1,P.a0(null,null,null,m),0,3)
h.J("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.r.h(0,k)
l.push(h)
h=$.$get$aj()
l=$.x0
k=$.D
j=$.ah
i=new U.ag(l,"Dual purpose.","HideTheBodiesKind",null,null,"Shovel",!1,P.a0(null,null,null,m),0,3)
i.J("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.up
l=$.X
j=$.ah
k=new U.ag(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,null,"Rolling Pin",!1,P.a0(null,null,null,m),0,3)
k.J("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.um
h=$.X
j=$.aC
l=new U.ag(i,"Fuck you for picking this.","KermitsGoneBadKind",null,null,"Puppet",!1,P.a0(null,null,null,m),0,3)
l.J("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.un
i=$.D
j=$.as
h=new U.ag(k,"So fucking edgey.","KermitsGoneBadKind",null,null,"Razor",!1,P.a0(null,null,null,m),0,3)
h.J("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.r.h(0,k)
l.push(h)
h=$.$get$aj()
l=$.mP
k=$.D
j=$.Y
i=new U.ag(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,null,"Pen",!1,P.a0(null,null,null,m),0,3)
i.J("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.jC
l=$.au
j=$.ce
k=new U.ag(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,null,"Bust",!1,P.a0(null,null,null,m),0,3)
k.J("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.wK
h=$.X
j=$.ah
l=new U.ag(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,null,"Golf Club",!1,P.a0(null,null,null,m),0,3)
l.J("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.wQ
i=$.D
j=$.as
h=new U.ag(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,null,"Knife",!1,P.a0(null,null,null,m),0,3)
h.J("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.r.h(0,k)
l.push(h)
h=$.$get$aj()
l=$.wZ
k=$.D
j=$.as
i=new U.ag(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,null,"Scissors",!1,P.a0(null,null,null,m),0,3)
i.J("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.wY
l=$.D
j=$.ce
k=new U.ag(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,null,"Safe",!1,P.a0(null,null,null,m),0,3)
k.J("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.dQ
h=$.X
j=$.ah
l=new U.ag(i,"Bitches love sticks","WeaponiseTheTreesKind",null,null,"Stick",!1,P.a0(null,null,null,m),0,3)
l.J("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.uj
i=$.D
j=$.as
m=new U.ag(k,"I lack the taste buds necessary to weigh in on the pineapple debate","HomeSliceKind",null,null,"Pizza Cutter",!1,P.a0(null,null,null,m),0,3)
m.J("Pizza Cutter",[i,j],"I lack the taste buds necessary to weigh in on the pineapple debate",!1,"HomeSliceKind")
m.r.h(0,k)
l.push(m)
m=new S.bC("Duttle","Dut",null,null)
m.b="Duttle"
$.$get$bO().push(m)
$.wh=m
m=new S.bC("Salamander","GLUB",null,null)
m.b="Salamander"
$.$get$bO().push(m)
$.tT=m
m=new S.bC("Crocodile","NAK",null,null)
m.b="Crocodile"
$.$get$bO().push(m)
$.e5=m
m=new S.bC("Iguana","thip",null,null)
m.b="Iguana"
$.$get$bO().push(m)
$.er=m
m=new S.bC("Turtle","click",null,null)
m.b="Turtle"
$.$get$bO().push(m)
$.fg=m
m=new S.bC("Skeleton","rattle",null,null)
m.b="Skeleton"
$.$get$bO().push(m)
$.dP=m
m=new S.bC("Robot","BEEP",null,null)
m.b="Robot"
$.$get$bO().push(m)
$.eu=m
m=new S.bC("Chameleon","BLEP",null,null)
m.b="Chameleon"
$.$get$bO().push(m)
$.hh=m
m=new S.bC("Axolotl","BARP",null,null)
m.b="Axolotl"
$.$get$bO().push(m)
$.tN=m
m=new S.bC("Lizard","bleb",null,null)
m.b="Lizard"
$.$get$bO().push(m)
$.m6=m
m=new S.bC("Snake","hiss",null,null)
m.b="Snake"
$.$get$bO().push(m)
$.tV=m
m=new S.bC("Alligator","nak",null,null)
m.b="Alligator"
$.$get$bO().push(m)
$.iI=m
m=new S.bC("Mole","snuff",null,null)
m.b="Mole"
$.$get$bO().push(m)
$.wj=m
m=new S.bC("Bird","tweet",null,null)
m.b="Bird"
$.$get$bO().push(m)
$.m4=m
m=new S.bC("Wolf","howl",null,null)
m.b="Wolf"
$.$get$bO().push(m)
$.mb=m
m=new S.bC("Newt","skitter",null,null)
m.b="Newt"
$.$get$bO().push(m)
$.wk=m
m=new S.bC("Spider","skitter",null,null)
m.b="Spider"
$.$get$bO().push(m)
$.iP=m
m=new S.bC("Cupid","flappa",null,null)
m.b="Cupid"
$.$get$bO().push(m)
$.iJ=m
m=new S.bC("Dragon","roar",null,null)
m.b="Dragon"
$.$get$bO().push(m)
$.fd=m
m=new S.it("Prospitian","murmur",null,null)
m.b="Prospitian"
$.$get$bO().push(m)
$.Ae=m
m=new S.it("Dersite","mutter",null,null)
m.b="Dersite"
$.$get$bO().push(m)
$.Ab=m
m=new S.mu("Horror Terror","a;lkjdf",null,null)
m.b="Horror Terror"
$.$get$bO().push(m)
$.Ad=m
m=new S.bC("Jellyfish","buzz",null,null)
m.b="Jellyfish"
$.$get$bO().push(m)
$.wi=m
$.Af=H.a([$.tV,$.iI,$.wk,$.tT,$.er,$.e5,$.fg,$.hh,$.tN,$.m6],[S.bC])
m=new T.c1(0,"spices")
$.$get$cn().push(m)
$.hm=m
m=new T.c1($.e7,"fresh baked bread")
$.$get$cn().push(m)
$.fb=m
m=new T.c1($.e7,"sweetness")
$.$get$cn().push(m)
$.cs=m
m=new T.c1($.e7,"nature")
$.$get$cn().push(m)
$.cc=m
m=new T.c1(0,"salt")
$.$get$cn().push(m)
$.ma=m
m=new T.c1($.cR,"rot")
$.$get$cn().push(m)
$.d2=m
m=new T.c1($.cR,"feet")
$.$get$cn().push(m)
$.Ac=m
m=new T.c1(0,"oil")
$.$get$cn().push(m)
$.et=m
m=new T.c1(0,"chlorine")
$.$get$cn().push(m)
$.tP=m
m=new T.c1(0,"nothing in particular")
$.$get$cn().push(m)
$.iO=m
m=new T.c1(0,"gunpowder")
$.$get$cn().push(m)
$.eq=m
m=new T.c1(0,"must")
$.$get$cn().push(m)
$.fe=m
m=new T.c1($.e7,"zoo animals")
$.$get$cn().push(m)
$.cQ=m
m=new T.c1($.cR,"sweat")
$.$get$cn().push(m)
$.e6=m
m=new T.c1(0,"ozone")
$.$get$cn().push(m)
$.hk=m
m=new T.c1(0,"deceit")
$.$get$cn().push(m)
$.c5=m
m=new T.c1($.cR,"blood")
$.$get$cn().push(m)
$.dl=m
m=new T.c1($.cR,"smoke")
$.$get$cn().push(m)
$.ff=m
m=new K.bT($.cR,"creepy")
$.$get$ca().push(m)
$.c4=m
m=new K.bT($.e7,"calm")
$.$get$ca().push(m)
$.aO=m
m=new K.bT($.cR,"frantic")
$.$get$ca().push(m)
$.cj=m
m=new K.bT(0,"like nothing")
$.$get$ca().push(m)
$.iN=m
m=new K.bT($.e7,"energizing")
$.$get$ca().push(m)
$.c6=m
m=new K.bT(0,"studious")
$.$get$ca().push(m)
$.cF=m
m=new K.bT(0,"dangerous")
$.$get$ca().push(m)
$.dm=m
m=new K.bT(0,"glamorous")
$.$get$ca().push(m)
$.dN=m
m=new K.bT(0,"romantic")
$.$get$ca().push(m)
$.hl=m
m=new K.bT($.e7,"creative")
$.$get$ca().push(m)
$.fc=m
m=new K.bT(0,"lucky")
$.$get$ca().push(m)
$.m7=m
m=new K.bT(0,"happy")
$.$get$ca().push(m)
$.dy=m
m=new K.bT(0,"heroic")
$.$get$ca().push(m)
$.dn=m
m=new K.bT($.cR,"stupid")
$.$get$ca().push(m)
$.dA=m
m=new K.bT(0,"lucky")
$.$get$ca().push(m)
$.m7=m
m=new K.bT(0,"claustrophobic")
$.$get$ca().push(m)
$.wg=m
m=new K.bT(0,"overheated")
$.$get$ca().push(m)
$.m8=m
m=new K.bT($.cR,"confusing")
$.$get$ca().push(m)
$.m5=m
m=new K.bT(0,"contemplatative")
$.$get$ca().push(m)
$.d1=m
m=new M.bA(0,"clanking")
$.$get$bL().push(m)
$.cP=m
m=new M.bA(0,"laughing")
$.$get$bL().push(m)
$.cE=m
m=new M.bA($.e7,"rustling")
$.$get$bL().push(m)
$.bg=m
m=new M.bA($.cR,"screaming")
$.$get$bL().push(m)
$.ev=m
m=new M.bA($.cR,"foot steps")
$.$get$bL().push(m)
$.iL=m
m=new M.bA($.cR,"beeping")
$.$get$bL().push(m)
$.ep=m
m=new M.bA($.cR,"whispering")
$.$get$bL().push(m)
$.wm=m
m=new M.bA(0,"clacking")
$.$get$bL().push(m)
$.hi=m
m=new M.bA(0,"applause")
$.$get$bL().push(m)
$.cI=m
m=new M.bA(0,"jazz")
$.$get$bL().push(m)
$.es=m
m=new M.bA(0,"disco")
$.$get$bL().push(m)
$.tR=m
m=new M.bA(0,"drums")
$.$get$bL().push(m)
$.hj=m
m=new M.bA(0,"echoing")
$.$get$bL().push(m)
$.iK=m
m=new M.bA($.cR,"roaring")
$.$get$bL().push(m)
$.m9=m
m=new M.bA($.cR,"gunfire")
$.$get$bL().push(m)
$.iM=m
m=new M.bA(0,"music")
$.$get$bL().push(m)
$.cr=m
m=new M.bA(0,"singing")
$.$get$bL().push(m)
$.tU=m
m=new M.bA(0,"chanting")
$.$get$bL().push(m)
$.tO=m
m=new M.bA(0,"whistling")
$.$get$bL().push(m)
$.fh=m
m=new M.bA($.e7,"nature")
$.$get$bL().push(m)
$.dz=m
m=new M.bA(0,"croaking")
$.$get$bL().push(m)
$.tQ=m
m=new M.bA(0,"silence")
$.$get$bL().push(m)
$.dO=m
m=new M.bA(0,"pulsing")
$.$get$bL().push(m)
$.tS=m
m=new M.bA(0,"ticking")
$.$get$bL().push(m)
$.wl=m
m=H.a([],p)
o=[X.F,P.W]
n=A.a5
l=E.N
k=[l]
j=[A.fX]
m=new S.n3(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.w(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Knight",3,!0,!1)
$.GL=m
m=P.l(H.a([new E.N($.cz,0.4,!1)],k),l)
i=H.a([],p)
m=new S.oz(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.w(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Seer",6,!0,!1)
$.GX=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.l_("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.w(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Bard",9,!0,!1)
$.GH=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.mr("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.w(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Heir",8,!0,!1)
$.GK=m
m=H.a([],p)
m=new U.no(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.w(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Maid",0,!0,!1)
$.GO=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.op(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.w(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Rogue",4,!0,!1)
$.GT=m
m=H.a([],p)
m=new V.nZ(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.w(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Page",1,!0,!1)
$.GR=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.pv(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.w(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Thief",7,!0,!1)
$.H_=m
m=P.l(H.a([new E.N($.cz,0.1,!1)],k),l)
i=H.a([],p)
m=new R.pi(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.w(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Sylph",5,!0,!1)
$.GZ=m
m=H.a([],p)
m=new N.oe("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.w(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Prince",10,!0,!1)
$.GS=m
m=P.l(H.a([new E.N($.cz,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pZ("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.w(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Witch",11,!0,!1)
$.H1=m
m=P.l(H.a([new E.N($.cz,0.4,!1)],k),l)
i=H.a([],p)
m=new S.nn("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.w(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Mage",2,!0,!1)
$.GN=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.l(H.a([new E.N($.cz,3,!1),new E.N($.xw,-2,!1)],k),l)
e=H.a([],p)
m=new E.pV("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.w(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Waste",12,!1,!1)
$.H0=m
m=H.a([],p)
m=new Y.ov("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.w(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Scout",13,!1,!1)
$.GV=m
m=P.l(H.a([new E.N($.cz,0.5,!1)],k),l)
i=H.a([],p)
m=new L.ow("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.w(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Scribe",15,!1,!1)
$.GW=m
m=P.l(H.a([new E.N($.cz,0.5,!1)],k),l)
i=H.a([],p)
m=new E.ot(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.w(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Sage",14,!1,!1)
$.GU=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.mp("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.w(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Guide",16,!1,!1)
$.GJ=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.l(H.a([new E.N($.cz,3,!1)],k),l)
g=H.a([],p)
m=new Y.mo(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.w(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Grace",17,!1,!1)
$.GI=m
m=P.l(H.a([new E.N($.cz,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nz("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.w(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Muse",18,!1,!1)
$.GP=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.J(null,null,n)
h=P.l(H.a([new E.N($.cz,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.nl("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.w(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Lord",19,!1,!1)
$.GM=m
m=P.l(H.a([new E.N($.cz,-0.1,!1),new E.N($.dE,1,!1)],k),l)
i=H.a([],p)
m=new Y.oG("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.w(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ad("Smith",20,!1,!1)
$.GY=m
$.GQ=T.GG("Null",255,!1,!0)
m=A.e2
i=P.C
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#00ff00"),!0)
h.j(0,$.b6,L.e("#EFEFEF"),!0)
h.j(0,$.b5,L.e("#DEDEDE"),!0)
h.j(0,$.bf,L.e("#FF2106"),!0)
h.j(0,$.be,L.e("#B01200"),!0)
h.j(0,$.b8,L.e("#2F2F30"),!0)
h.j(0,$.b9,L.e("#1D1D1D"),!0)
h.j(0,$.b7,L.e("#080808"),!0)
h.j(0,$.bd,L.e("#030303"),!0)
h.j(0,$.bc,L.e("#242424"),!0)
h.j(0,$.bb,L.e("#333333"),!0)
h.j(0,$.ba,L.e("#141414"),!0)
g=P.l(H.a(["Frogs"],p),q)
f=P.l(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.l(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.l(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.l(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.l(H.a([new E.N($.dE,2,!0),new E.N($.eL,1,!0),new E.N($.eM,-2,!0)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new N.oJ(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ai(0,"Space",!0,!1)
$.zA=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#ff0000"),!0)
a.j(0,$.b6,L.e("#FF2106"),!0)
a.j(0,$.b5,L.e("#AD1604"),!0)
a.j(0,$.bf,L.e("#030303"),!0)
a.j(0,$.be,L.e("#242424"),!0)
a.j(0,$.b8,L.e("#510606"),!0)
a.j(0,$.b9,L.e("#3C0404"),!0)
a.j(0,$.b7,L.e("#1F0000"),!0)
a.j(0,$.bd,L.e("#B70D0E"),!0)
a.j(0,$.bc,L.e("#970203"),!0)
a.j(0,$.bb,L.e("#8E1516"),!0)
a.j(0,$.ba,L.e("#640707"),!0)
b=P.l(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.l(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.l(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.l(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.l(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.l(H.a([new E.N($.hY,2,!0),new E.N($.eM,1,!0),new E.N($.eK,-2,!0)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new N.pw(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ai(1,"Time",!0,!1)
$.zB=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#3399ff"),!0)
h.j(0,$.b6,L.e("#10E0FF"),!0)
h.j(0,$.b5,L.e("#00A4BB"),!0)
h.j(0,$.bf,L.e("#FEFD49"),!0)
h.j(0,$.be,L.e("#D6D601"),!0)
h.j(0,$.b8,L.e("#0052F3"),!0)
h.j(0,$.b9,L.e("#0046D1"),!0)
h.j(0,$.b7,L.e("#003396"),!0)
h.j(0,$.bd,L.e("#0087EB"),!0)
h.j(0,$.bc,L.e("#0070ED"),!0)
h.j(0,$.bb,L.e("#006BE1"),!0)
h.j(0,$.ba,L.e("#0054B0"),!0)
g=P.l(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.l(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.l(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.l(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.l(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.l(H.a([new E.N($.eM,2,!0),new E.N($.de,1,!0),new E.N($.eL,-1,!0),new E.N($.ee,-1,!0),new E.N($.cz,0.05,!1)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new T.l7(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ai(2,"Breath",!0,!1)
$.zn=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#003300"),!0)
a.j(0,$.b6,L.e("#0F0F0F"),!0)
a.j(0,$.b5,L.e("#010101"),!0)
a.j(0,$.bf,L.e("#E8C15E"),!0)
a.j(0,$.be,L.e("#C7A140"),!0)
a.j(0,$.b8,L.e("#1E211E"),!0)
a.j(0,$.b9,L.e("#141614"),!0)
a.j(0,$.b7,L.e("#0B0D0B"),!0)
a.j(0,$.bd,L.e("#204020"),!0)
a.j(0,$.bc,L.e("#11200F"),!0)
a.j(0,$.bb,L.e("#192C16"),!0)
a.j(0,$.ba,L.e("#121F10"),!0)
b=P.l(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.l(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.l(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.l(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.l(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.l(H.a([new E.N($.dE,2,!0),new E.N($.eK,1,!0),new E.N($.hY,-1,!0),new E.N($.eL,-1,!0),new E.N($.cz,0.01,!1)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new U.lA(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ai(3,"Doom",!0,!1)
$.zo=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#993300"),!0)
h.j(0,$.b6,L.e("#BA1016"),!0)
h.j(0,$.b5,L.e("#820B0F"),!0)
h.j(0,$.bf,L.e("#381B76"),!0)
h.j(0,$.be,L.e("#1E0C47"),!0)
h.j(0,$.b8,L.e("#290704"),!0)
h.j(0,$.b9,L.e("#230200"),!0)
h.j(0,$.b7,L.e("#110000"),!0)
h.j(0,$.bd,L.e("#3D190A"),!0)
h.j(0,$.bc,L.e("#2C1207"),!0)
h.j(0,$.bb,L.e("#5C2913"),!0)
h.j(0,$.ba,L.e("#4C1F0D"),!0)
g=P.l(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.l(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.l(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.l(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.l(H.a([new E.N($.ee,2,!0),new E.N($.de,1,!0),new E.N($.dE,-2,!0)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new T.l5(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ai(4,"Blood",!0,!1)
$.zm=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#ff3399"),!0)
a.j(0,$.b6,L.e("#BD1864"),!0)
a.j(0,$.b5,L.e("#780F3F"),!0)
a.j(0,$.bf,L.e("#1D572E"),!0)
a.j(0,$.be,L.e("#11371D"),!0)
a.j(0,$.b8,L.e("#4C1026"),!0)
a.j(0,$.b9,L.e("#3C0D1F"),!0)
a.j(0,$.b7,L.e("#260914"),!0)
a.j(0,$.bd,L.e("#6B0829"),!0)
a.j(0,$.bc,L.e("#4A0818"),!0)
a.j(0,$.bb,L.e("#55142A"),!0)
a.j(0,$.ba,L.e("#3D0E1E"),!0)
b=P.l(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.l(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.l(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.l(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.l(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.l(H.a([new E.N($.ee,1,!0),new E.kT(null,1,!0)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new T.mq(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ai(5,"Heart",!0,!1)
$.zq=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#3da35a"),!0)
h.j(0,$.b6,L.e("#06FFC9"),!0)
h.j(0,$.b5,L.e("#04A885"),!0)
h.j(0,$.bf,L.e("#6E0E2E"),!0)
h.j(0,$.be,L.e("#4A0818"),!0)
h.j(0,$.b8,L.e("#1D572E"),!0)
h.j(0,$.b9,L.e("#164524"),!0)
h.j(0,$.b7,L.e("#11371D"),!0)
h.j(0,$.bd,L.e("#3DA35A"),!0)
h.j(0,$.bc,L.e("#2E7A43"),!0)
h.j(0,$.bb,L.e("#3B7E4F"),!0)
h.j(0,$.ba,L.e("#265133"),!0)
g=P.l(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.l(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.l(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.l(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.l(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.l(H.a([new E.N($.eK,2,!0),new E.N($.hY,1,!0),new E.N($.dE,-2,!0)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new V.ny(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ai(6,"Mind",!0,!1)
$.zw=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#ff9933"),!0)
a.j(0,$.b6,L.e("#FEFD49"),!0)
a.j(0,$.b5,L.e("#FEC910"),!0)
a.j(0,$.bf,L.e("#10E0FF"),!0)
a.j(0,$.be,L.e("#00A4BB"),!0)
a.j(0,$.b8,L.e("#FA4900"),!0)
a.j(0,$.b9,L.e("#E94200"),!0)
a.j(0,$.b7,L.e("#C33700"),!0)
a.j(0,$.bd,L.e("#FF8800"),!0)
a.j(0,$.bc,L.e("#D66E04"),!0)
a.j(0,$.bb,L.e("#E76700"),!0)
a.j(0,$.ba,L.e("#CA5B00"),!0)
b=P.l(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.l(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.l(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.l(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.l(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.l(H.a([new E.N($.hX,2,!0),new E.N($.eK,1,!0),new E.N($.de,-1,!0),new E.N($.eL,-1,!0),new E.N($.cz,0.2,!1)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new G.n8(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ai(7,"Light",!0,!1)
$.zv=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#000066"),!0)
h.j(0,$.b6,L.e("#0B1030"),!0)
h.j(0,$.b5,L.e("#04091A"),!0)
h.j(0,$.bf,L.e("#CCC4B5"),!0)
h.j(0,$.be,L.e("#A89F8D"),!0)
h.j(0,$.b8,L.e("#00164F"),!0)
h.j(0,$.b9,L.e("#00103C"),!0)
h.j(0,$.b7,L.e("#00071A"),!0)
h.j(0,$.bd,L.e("#033476"),!0)
h.j(0,$.bc,L.e("#02285B"),!0)
h.j(0,$.bb,L.e("#004CB2"),!0)
h.j(0,$.ba,L.e("#003E91"),!0)
g=P.l(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.l(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.l(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.l(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.l(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.l(H.a([new E.fS(D.ve(),null,3,!0),new E.fS(D.ve(),null,-1,!0),new E.N($.hY,-1,!0),new E.N($.cz,0.2,!1)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new Q.pU(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ai(8,"Void",!0,!1)
$.zC=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#9900cc"),!0)
a.j(0,$.b6,L.e("#974AA7"),!0)
a.j(0,$.b5,L.e("#6B347D"),!0)
a.j(0,$.bf,L.e("#3D190A"),!0)
a.j(0,$.be,L.e("#2C1207"),!0)
a.j(0,$.b8,L.e("#7C3FBA"),!0)
a.j(0,$.b9,L.e("#6D34A6"),!0)
a.j(0,$.b7,L.e("#592D86"),!0)
a.j(0,$.bd,L.e("#381B76"),!0)
a.j(0,$.bc,L.e("#1E0C47"),!0)
a.j(0,$.bb,L.e("#281D36"),!0)
a.j(0,$.ba,L.e("#1D1526"),!0)
b=P.l(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.l(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.l(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.l(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.l(H.a([new E.N($.hZ,2,!0),new E.N($.eM,1,!0),new E.N($.de,-1,!0),new E.N($.ee,-1,!0),new E.N($.cz,0.01,!1)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new E.ok(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ai(9,"Rage",!0,!1)
$.zy=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#ffcc66"),!0)
h.j(0,$.b6,L.e("#FDF9EC"),!0)
h.j(0,$.b5,L.e("#D6C794"),!0)
h.j(0,$.bf,L.e("#164524"),!0)
h.j(0,$.be,L.e("#06280C"),!0)
h.j(0,$.b8,L.e("#FFC331"),!0)
h.j(0,$.b9,L.e("#F7BB2C"),!0)
h.j(0,$.b7,L.e("#DBA523"),!0)
h.j(0,$.bd,L.e("#FFE094"),!0)
h.j(0,$.bc,L.e("#E8C15E"),!0)
h.j(0,$.bb,L.e("#F6C54A"),!0)
h.j(0,$.ba,L.e("#EDAF0C"),!0)
g=P.l(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.l(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.l(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.l(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.l(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.l(H.a([new E.N($.de,2,!0),new E.N($.hX,1,!0),new E.fS(D.ve(),null,-2,!0)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new X.mt(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ai(10,"Hope",!0,!1)
$.zr=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#494132"),!0)
a.j(0,$.b6,L.e("#76C34E"),!0)
a.j(0,$.b5,L.e("#4F8234"),!0)
a.j(0,$.bf,L.e("#00164F"),!0)
a.j(0,$.be,L.e("#00071A"),!0)
a.j(0,$.b8,L.e("#605542"),!0)
a.j(0,$.b9,L.e("#494132"),!0)
a.j(0,$.b7,L.e("#2D271E"),!0)
a.j(0,$.bd,L.e("#CCC4B5"),!0)
a.j(0,$.bc,L.e("#A89F8D"),!0)
a.j(0,$.bb,L.e("#A29989"),!0)
a.j(0,$.ba,L.e("#918673"),!0)
b=P.l(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.l(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.l(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.l(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.l(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.l(H.a([new E.N($.eL,2,!0),new E.N($.hZ,1,!0),new E.N($.dE,-2,!0)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new K.n7(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ai(11,"Life",!0,!1)
$.zu=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#9630BF"),!0)
h.j(0,$.b6,L.e("#cc87e8"),!0)
h.j(0,$.b5,L.e("#9545b7"),!0)
h.j(0,$.bf,L.e("#ae769b"),!0)
h.j(0,$.be,L.e("#8f577c"),!0)
h.j(0,$.b8,L.e("#9630bf"),!0)
h.j(0,$.b9,L.e("#693773"),!0)
h.j(0,$.b7,L.e("#4c2154"),!0)
h.j(0,$.bd,L.e("#fcf9bd"),!0)
h.j(0,$.bc,L.e("#e0d29e"),!0)
h.j(0,$.bb,L.e("#bdb968"),!0)
h.j(0,$.ba,L.e("#ab9b55"),!0)
g=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.l(H.a([new E.N($.dE,3,!0),new E.N($.de,-2,!0)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new Z.lB(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ai(12,"Dream",!1,!1)
$.zp=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#003300"),!0)
a.j(0,$.b6,L.e("#383838"),!0)
a.j(0,$.b5,L.e("#000000"),!0)
a.j(0,$.bf,L.e("#2b1130"),!0)
a.j(0,$.be,L.e("#130017"),!0)
a.j(0,$.b8,L.e("#eba900"),!0)
a.j(0,$.b9,L.e("#c28900"),!0)
a.j(0,$.b7,L.e("#855900"),!0)
a.j(0,$.bd,L.e("#ffd800"),!0)
a.j(0,$.bc,L.e("#d1a900"),!0)
a.j(0,$.bb,L.e("#44244d"),!0)
a.j(0,$.ba,L.e("#271128"),!0)
b=P.l(H.a(["Law","Courts","Trials","Rules","Edicts","Control","Cones","Order"],p),q)
c=P.l(H.a(["LEGAL LAD","SHERRIF SURESHOT","CONE KOHAI"],p),q)
d=P.l(H.a(["Lawyer","Litigator","Lands","Laborer","Lady","Lad","Lamb","Lawman","Luchador","Lover","Legislacerator"],p),q)
e=P.l(H.a(["Judge","Law Abiding","Legal","Courting","Trail","Edict","Jury","Baliff","Verdict","Sentence","Jail","Executioner"],p),q)
f=P.l(H.a(["Themis","Phoenix","Wright","Jupiter","Dike","Marduk","Fortuna"],p),q)
g=P.l(H.a([new E.N($.eK,2,!0),new E.N($.de,1,!0),new E.N($.eM,-2,!0),new E.N($.cz,-0.1,!1)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new Q.n5(0.01,0.9,0.1,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death's Lawyer plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["orders","rules","edicts","sentences"],["chains","gavel","caution tape","rule book","dictionary","wig","handbook","lock"],!0,!0,f,g,0.01,0.01,0.01,0.5,14,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ai(14,"Law",!1,!1)
$.zt=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#00ff00"),!0)
h.j(0,$.b6,L.e("#00ff00"),!0)
h.j(0,$.b5,L.e("#00ff00"),!0)
h.j(0,$.bf,L.e("#00ff00"),!0)
h.j(0,$.be,L.e("#00cf00"),!0)
h.j(0,$.b8,L.e("#171717"),!0)
h.j(0,$.b9,L.e("#080808"),!0)
h.j(0,$.b7,L.e("#080808"),!0)
h.j(0,$.bd,L.e("#616161"),!0)
h.j(0,$.bc,L.e("#3b3b3b"),!0)
h.j(0,$.bb,L.e("#4a4a4a"),!0)
h.j(0,$.ba,L.e("#292929"),!0)
g=P.l(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
f=P.l(H.a(["Shogun"],p),q)
e=P.l(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
d=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
c=P.l(H.a([new E.N($.hZ,13,!0)],k),l)
b=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
b.j(0,$.b4,L.e("#FF9B00"),!0)
b.j(0,$.b6,L.e("#FF9B00"),!0)
b.j(0,$.b5,L.e("#FF8700"),!0)
b.j(0,$.bf,L.e("#7F7F7F"),!0)
b.j(0,$.be,L.e("#727272"),!0)
b.j(0,$.b8,L.e("#A3A3A3"),!0)
b.j(0,$.b9,L.e("#999999"),!0)
b.j(0,$.b7,L.e("#898989"),!0)
b.j(0,$.bd,L.e("#EFEFEF"),!0)
b.j(0,$.bc,L.e("#DBDBDB"),!0)
b.j(0,$.bb,L.e("#C6C6C6"),!0)
b.j(0,$.ba,L.e("#ADADAD"),!0)
b=new K.ou(13,13,13,h,g,f,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",d,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],c,0.01,0.01,0.01,0.5,13,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!0,1,b,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
b.ai(13,"Sauce",!1,!0)
$.zz=b
b=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
b.j(0,$.b4,L.e("#080808"),!0)
b.j(0,$.b6,L.e("#BA1016"),!0)
b.j(0,$.b5,L.e("#820B0F"),!0)
b.j(0,$.bf,L.e("#381B76"),!0)
b.j(0,$.be,L.e("#1E0C47"),!0)
b.j(0,$.b8,L.e("#290704"),!0)
b.j(0,$.b9,L.e("#230200"),!0)
b.j(0,$.b7,L.e("#110000"),!0)
b.j(0,$.bd,L.e("#3D190A"),!0)
b.j(0,$.bc,L.e("#2C1207"),!0)
b.j(0,$.bb,L.e("#5C2913"),!0)
b.j(0,$.ba,L.e("#4C1F0D"),!0)
c=P.l(H.a(["Bonds","Unions","Ink","Color","Nostalgia"],p),q)
d=P.l(H.a(["FRIEND HOARDER YOUTH","INKSTERMINATOR","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Investor","Investigator","Idealist","Inhabitant","Innovator","Interpreter"],p),q)
f=P.l(H.a(["Ink","Flow","Charge","Awakening","Friendship","Trusting","Union","Team","Fresh","Vim","Chorus"],p),q)
g=P.l(H.a(["Ink","Hestia","Bastet","Bes","Vesta","Eleos","Frigg","Debella","Juno","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes","Cthulhu","The Kraken","Akkorokamui","Kanaloa"],p),q)
h=P.l(H.a([new E.N($.ee,2,!0),new E.N($.eM,1,!0),new E.N($.dE,-2,!0)],k),l)
m=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
m.j(0,$.b4,L.e("#FF9B00"),!0)
m.j(0,$.b6,L.e("#FF9B00"),!0)
m.j(0,$.b5,L.e("#FF8700"),!0)
m.j(0,$.bf,L.e("#7F7F7F"),!0)
m.j(0,$.be,L.e("#727272"),!0)
m.j(0,$.b8,L.e("#A3A3A3"),!0)
m.j(0,$.b9,L.e("#999999"),!0)
m.j(0,$.b7,L.e("#898989"),!0)
m.j(0,$.bd,L.e("#EFEFEF"),!0)
m.j(0,$.bc,L.e("#DBDBDB"),!0)
m.j(0,$.bb,L.e("#C6C6C6"),!0)
m.j(0,$.ba,L.e("#ADADAD"),!0)
j=new V.mE(0.5,0.5,1,0,b,c,d,e,f,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["ink","friendship","ties","pulse","chain","ocean","festival"],["ink","photo album","friendship bracelet"],g,h,0.01,0.01,0.01,0.5,15,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Ink",null,!1,!1,!1,!1,!0,1,m,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
j.ai(15,"Ink",!1,!1)
$.zs=j
$.zx=L.zl(255,"Null",!1,!0)
j=P.l(H.a([new E.N($.de,1,!0),new E.N($.hX,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Lyricist","Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass","Instrumentalist"],p)
h=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
g=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
f=H.a(["nobody"],p)
e=P.l(H.a([],k),l)
d=H.a(["Nobody"],p)
c=H.a(["Nobody"],p)
q=new F.nA(j,q,m,h,g,!1,f,e,d,c,1,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"loud","musical","Music")
q.D()
q.E()
B.cT(q)
$.AA=q
q=P.l(H.a([new E.N($.eK,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist","Ichthyologist","Instructor"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kP(q,m,j,i,h,!1,g,f,e,d,13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"nerdy","smart","Academic")
q.D()
q.E()
B.cT(q)
$.At=q
q=P.l(H.a([new E.N($.hZ,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler","Iceskater"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kU(q,m,j,i,h,!1,g,f,e,d,4,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dumb","athletic","Athletic")
q.D()
q.E()
B.cT(q)
$.Au=q
q=P.l(H.a([new E.N($.hY,-1,!0),new E.N($.hX,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["LaughMaster","Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor","Imp"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.le(q,m,j,i,h,!1,g,f,e,d,0,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dorky","funny","Comedy")
q.D()
q.E()
B.cT(q)
$.Av=q
q=P.l(H.a([new E.N($.de,-1,!0),new E.N($.eL,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business","Idealist"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.lr(q,m,j,i,h,!1,g,f,e,d,2,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"pretentious","cultured","Culture")
q.D()
q.E()
B.cT(q)
$.Aw=q
q=P.l(H.a([new E.N($.de,1,!0),new E.N($.ee,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer","Innkeeper"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lz(q,m,j,i,h,!1,g,f,e,d,8,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"boring","domestic","Domestic")
q.D()
q.E()
B.cT(q)
$.Ax=q
q=P.l(H.a([new E.N($.hX,1,!0),new E.N($.dE,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Lich","Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart","Illusionist"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.m2(q,m,j,i,h,!1,g,f,e,d,7,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"whimpy","imaginative","Fantasy")
q.D()
q.E()
B.cT(q)
$.Ay=q
q=P.l(H.a([new E.N($.hZ,1,!0),new E.N($.eL,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Legislator","Legalist","Legislacerator","Lawman","Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel","Investigator"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.n1(q,m,j,i,h,!1,g,f,e,d,6,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"harsh","fair-minded","Justice")
q.D()
q.E()
B.cT(q)
$.Az=q
q=P.l(H.a([new E.N($.eM,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent","Imposter"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.ob(q,m,j,i,h,!1,g,f,e,d,9,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"frivolous","geeky","PopCulture")
q.D()
q.E()
B.cT(q)
$.AC=q
q=P.l(H.a([new E.N($.ee,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team","Idealist"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.oq(q,m,j,i,h,!1,g,f,e,d,12,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"obsessive","romantic","Romantic")
q.D()
q.E()
B.cT(q)
$.AD=q
q=P.l(H.a([new E.N($.de,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally","Icebreaker"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.oH(q,m,j,i,h,!1,g,f,e,d,11,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"shallow","extroverted","Social")
q.D()
q.E()
B.cT(q)
$.AE=q
q=P.l(H.a([new E.N($.ee,-1,!0),new E.N($.de,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod","Iconoclast","Infidel"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.po(q,m,j,i,h,!1,g,f,e,d,5,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"terrible","honest","Terrible")
q.D()
q.E()
B.cT(q)
$.AG=q
q=P.l(H.a([new E.N($.eK,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis","Illustrator"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.q3(q,m,j,i,h,!1,g,f,e,d,3,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"wordy","lettered","Writing")
q.D()
q.E()
B.cT(q)
$.AH=q
q=P.l(H.a([new E.N($.dE,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data","Incinerator"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.pn(q,m,j,i,h,!1,g,f,e,d,10,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"awkward","techy","Technology")
q.D()
q.E()
B.cT(q)
$.AF=q
q=H.a(["nobody"],p)
l=P.l(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hs(!0,q,l,k,p,-13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"","","Null")
q.D()
q.E()
B.cT(q)
$.AB=q
A.xf()
t=3
return P.ch(Y.nB(),$async$t0)
case 3:case 1:return P.bp(r,s)}})
return P.bq($async$t0,s)}},V={lz:function lz(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},mj:function mj(a){this.a=a},mE:function mE(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.ab=ab
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},ny:function ny(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},nZ:function nZ(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},po:function po(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
A9:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dx(new P.cg(""),0,0)
t.ag(a,8)
s=Math.pow(256,e)
c.toString
r=H.cU(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.u(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.u(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ag(n-1,p)
t.ag(a,8)}return t.b5(b)},
A8:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cG(c)
s=new Uint8Array(t)
r=new B.dk(null,0)
r.a=J.e0(a,b)
for(q=e*8,p=0;p<c;){o=r.ac(q)+1
n=r.ac(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.u(s,l)
s[l]=n}p+=o}return s},
tI:function(a){return new V.lJ(a)},
tH:function(a){return new V.lI(a)},
A5:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dx(new P.cg(""),0,0)
t.ag(a,8)
s=d.gcV()
r=C.f.aj(Math.log(H.kD(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cU(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.u(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.u(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ag(m-1,o)
t.ag(a,r)}return t.b5(b)},
A4:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cG(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dk(null,0)
p.a=J.e0(a,b)
for(r=e*8,o=0;o<c;){n=p.ac(r)+1
m=p.ac(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.u(s,k)
s[k]=m}o+=n}return s},
tG:function(a){return new V.lH(a)},
tF:function(a){return new V.lG(a)},
A7:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dx(new P.cg(""),0,0)
t.ag(a,8)
s=d.gcV()
r=C.f.aj(Math.log(H.kD(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cU(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.u(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.u(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.aj(Math.log(n)/0.6931471805599453)+1
t.ag(k-1,5)
t.ag(n-1,k)
t.ag(a,r)}return t.b5(b)},
A6:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cG(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dk(null,0)
p.a=J.e0(a,b)
for(o=0;o<c;){n=p.ac(p.ac(5)+1)+1
m=p.ac(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
lJ:function lJ(a){this.a=a},
lI:function lI(a){this.a=a},
lH:function lH(a){this.a=a},
lG:function lG(a){this.a=a}},Z={lB:function lB(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.ab=ab
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
Ah:function(){var t,s
if(!$.wn)$.wn=!0
else return
t=[P.x]
s=new Y.pq(H.a([],t))
$.tX=s
Z.cS(s,"txt",null)
Z.cS($.tX,"vert","x-shader/x-vertex")
Z.cS($.tX,"frag","x-shader/x-fragment")
$.Ag=new Y.ol(H.a([],t))
$.wp=new Y.l9(H.a([],t))
s=new B.q8(H.a([],t))
$.wr=s
Z.cS(s,"zip",null)
Z.cS($.wr,"bundle",null)
s=new U.q_(H.a([],t))
$.Ap=s
Z.cS(s,"words",null)
s=new Q.o9(H.a([],t))
$.wq=s
Z.cS(s,"png",null)
Z.cS($.wq,"jpg","image/jpeg")
$.An=new Q.o6(H.a([],t))
s=new M.oN(H.a([],t))
$.Ao=s
Z.cS(s,"psprite",null)
s=new V.mj(H.a([],t))
$.tW=s
Z.cS(s,"ttf",null)
Z.cS($.tW,"otf",null)
Z.cS($.tW,"woff",null)
s=new Y.nP(null,H.a([],t))
$.Ak=s
Z.cS(s,"obj",null)
s=new U.nm(H.a([],t))
$.Ai=s
Z.cS(s,"mp3",null)
$.Aj=new U.pa(H.a([],t))
s=new U.nU(H.a([],t))
$.Al=s
Z.cS(s,"ogg",null)
$.Am=new U.pb(H.a([],t))},
cS:function(a,b,c){$.$get$mk().i(0,b,new Z.iG(a,c,[null,null]))
a.a.push(b)},
wo:function(a){var t
if($.$get$mk().V(0,a)){t=$.$get$mk().n(0,a)
if(t.a instanceof O.cd)return t
throw H.h("File format for extension ."+H.z(a)+" does not match expected types.")}throw H.h("No file format found for extension ."+H.z(a))},
iG:function iG(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
nl:function nl(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},
uz:function uz(){},
uv:function uv(){},
uw:function uw(){}},X={iH:function iH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},is:function is(){},mt:function mt(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},F:function F(a,b,c){this.a=a
this.b=b
this.c=c}},N={ac:function ac(){},n1:function n1(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},oe:function oe(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},op:function op(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},oH:function oH(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},oJ:function oJ(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},pw:function pw(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.ab=ab
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
IA:function(){var t,s,r,q,p,o,n,m
A.t0()
W.u1(C.c.ar("../",N.uW())+"navbar.txt",null,null).b4(O.IC())
t=H.a([],[P.x])
for(s=$.$get$fL(),r=0;r<15;++r){q=s[r]
p=q.c
if(P.pJ().gbE().V(0,p)===!0&&J.tq(P.pJ().gbE().n(0,p))==="true"){if(q.e!=null)q.e.$0()
else N.f_(q)
t.push(q.b)}}s=t.length===0?"Select a category:":C.b.aR(t," +<br/>")
p=document
J.zd(p.querySelector("#header"),s)
o=p.querySelector("#links")
for(s=$.$get$fL(),r=0;r<15;++r){q=s[r]
n="?"+q.c+"=true"
m=p.createElement("a")
m.href=n
m.textContent=null
m.appendChild(C.L.ax(m,q.a,null,null))
o.appendChild(m)}s=G.H3(new N.td(),new N.te(),"Filter...",new N.tf())
s.className="filter"
o.appendChild(s)},
vA:function(a){var t="http://farragofiction.com"+H.z(a)
return t},
vz:function(a,b,c,d,e){var t,s,r,q
a.className=d
t=document
s=t.createElement("div")
s.className=e
s.setAttribute("data-"+new W.ko(new W.i8(s)).bp("name"),b)
if(!!J.ap(a).$isew){r=a.src
q=t.createElement("a")
if(r!=null)q.href=r
q.target="_blank"
q.appendChild(a)
s.appendChild(q)}else s.appendChild(a)
if(c){t=t.createElement("div")
t.className="imagename_always"
t.textContent=b
s.appendChild(t)}else{t=t.createElement("div")
t.className="imagename"
t.textContent=b
s.appendChild(t)}$.$get$yy().appendChild(s)
$.$get$t2().push(s)},
ip:function(a){var t=0,s=P.bj(),r,q,p,o,n,m,l
var $async$ip=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)$async$outer:switch(t){case 0:a=N.vA(a)
q=H.a([],[P.x])
t=3
return P.ch(W.u1(a,null,null),$async$ip)
case 3:p=c
o=$.$get$yt().aQ(0,p)
for(n=new H.i6(o.a,o.b,o.c,null);n.G();){m=n.d.b
if(1>=m.length){r=H.u(m,1)
t=1
break $async$outer}l=m[1]
m=$.$get$yr().b
if(typeof l!=="string")H.b1(H.bv(l))
if(!m.test(l))continue
q.push(l)}r=q
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$ip,s)},
f_:function(a){var t=0,s=P.bj(),r,q,p,o
var $async$f_=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:r=a.d
o=J
t=2
return P.ch(N.ip(r),$async$f_)
case 2:q=o.d_(c)
case 3:if(!q.G()){t=4
break}p=q.gP()
N.vz(W.mA(null,H.z(N.vA(r))+H.z(p),null),p,!1,"image","imageTile")
t=3
break
case 4:return P.bp(null,s)}})
return P.bq($async$f_,s)},
Ie:function(){N.f_($.$get$fL()[4])
N.f_($.$get$fL()[5])
N.f_($.$get$fL()[7])
N.f_($.$get$fL()[6])},
yv:function(a,b){var t,s,r,q,p,o,n,m,l
t=H.a([],[P.C])
for(s=J.d_(a);s.G();){r=s.gP()
q=$.$get$yC().hx(r)
if(q==null)continue
p=q.b
if(1>=p.length)return H.u(p,1)
if(J.aV(p[1],b)){if(2>=p.length)return H.u(p,2)
t.push(H.eI(p[2],null,null))}}C.b.df(t)
for(s=t.length,o=0,n=1,m=0;m<t.length;t.length===s||(0,H.bH)(t),++m,o=l){l=t[m]
if(J.aV(l,n))++n
else break}return o},
rY:function(){var t=0,s=P.bj(),r,q,p,o,n
var $async$rY=P.br(function(a,b){if(a===1)return P.bo(b,s)
while(true)switch(t){case 0:n=N
t=3
return P.ch(N.ip("/SBURBSimE/images/Hair/"),$async$rY)
case 3:q=n.yv(b,"hair")
if(typeof q!=="number"){r=H.a8(q)
t=1
break}p=[P.x]
o=1
for(;o<=q;++o)N.vz(N.yB(H.a(["/SBURBSimE/images/Hair/hair_back"+o+".png","/SBURBSimE/images/Hair/head.png","/SBURBSimE/images/Hair/hair"+o+".png"],p)),C.a.A(o),!0,"head","headTile")
case 1:return P.bp(r,s)}})
return P.bq($async$rY,s)},
rZ:function(){var t=0,s=P.bj(),r,q,p,o,n
var $async$rZ=P.br(function(a,b){if(a===1)return P.bo(b,s)
while(true)switch(t){case 0:n=N
t=3
return P.ch(N.ip("/SBURBSimE/images/Horns/"),$async$rZ)
case 3:q=n.yv(b,"left")
if(typeof q!=="number"){r=H.a8(q)
t=1
break}p=[P.x]
o=1
for(;o<=q;++o)N.vz(N.yB(H.a(["/SBURBSimE/images/Horns/right"+o+".png","/SBURBSimE/images/Hair/head.png","/SBURBSimE/images/Horns/left"+o+".png"],p)),C.a.A(o),!0,"head","headTile")
case 1:return P.bp(r,s)}})
return P.bq($async$rZ,s)},
yB:function(a){var t,s
t=document.createElement("div")
t.className="spriteStack"
for(s=0;s<3;++s)t.appendChild(W.mA(null,N.vA(a[s]),null))
return t},
ci:function ci(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
td:function td(){},
te:function te(){},
tf:function tf(){},
Ga:function(a){var t,s,r,q,p,o,n,m,l
t=J.cD(a)
s=new W.kq(document.querySelectorAll("link"),[null])
for(r=new H.eD(s,s.gm(s),0,null,[null]);r.G();){q=r.d
p=J.ap(q)
if(!!p.$ishz&&q.rel==="stylesheet"){o=$.$get$o4()
H.z(p.ga8(q))
o.toString
o=t.length
n=Math.min(o,J.c3(p.ga8(q)))
for(m=0;m<n;++m){if(m>=o)return H.u(t,m)
if(t[m]!==J.iq(p.ga8(q),m)){l=C.c.aa(t,m)
$.$get$o4().toString
return l.split("/").length-1}continue}}}$.$get$o4().bc(C.m,"Didn't find a css link to derive relative path")
return 0},
uW:function(){var t=P.pJ()
if(!$.$get$o3().V(0,t))$.$get$o3().i(0,t,N.Ga(t))
return $.$get$o3().n(0,t)}},E={iU:function iU(){},nT:function nT(){},N:function N(a,b,c){this.a=a
this.b=b
this.c=c},fS:function fS(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},kT:function kT(a,b,c){this.a=a
this.b=b
this.c=c},nz:function nz(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},ok:function ok(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},ot:function ot(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},pV:function pV(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1}},B={mr:function mr(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,K,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},
cT:function(a){var t=a.f
if($.$get$mG().V(0,t))throw H.h("Duplicate aspect id for "+a.A(0)+": "+t+" is already registered for "+J.cD($.$get$mG().n(0,t))+".")
$.$get$mG().i(0,t,a)},
hs:function hs(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
q8:function q8(a){this.a=a},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a,b){this.a=a
this.b=b},
HS:function(a){return a.bd(0)},
dF:function dF(a){this.a=a},
ki:function ki(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
i5:function i5(a,b){this.a=a
this.b=b}},Q={mB:function mB(){},o9:function o9(a){this.a=a},o6:function o6(a){this.a=a},n5:function n5(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,ab,bw,bx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.ab=ab
_.bw=bw
_.bx=bx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},oq:function oq(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},pU:function pU(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},jX:function jX(){},
J:function(a,b,c){var t=new Q.dY(null,null,[c])
t.dm(a,b,c)
return t},
vq:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.J(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.e_(a,"$iso",[e],"$aso"))if(H.e_(a,"$iscX",[e],"$ascX"))for(s=J.d_(a.gc3()),r=0;s.G();){q=s.gP()
p=t.b
o=p.length
if(r>=o)return H.u(p,r)
p[r]=q;++r}else for(s=a.gW(a),p=[H.Q(t,0)],r=0;s.G();){n=s.gP()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.u(o,r)
o[r]=new Q.i(n,m,p);++r}else for(s=a.gW(a),p=[e],o=[H.Q(t,0)];s.G();){l=s.gP()
if(H.I8(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.u(m,0)
m[0]=new Q.i(l,k,o)}else if(H.e_(l,"$isi",p,null)){m=t.b
k=m.length
if(0>=k)return H.u(m,0)
m[0]=l}else throw H.h("Invalid entry type "+H.z(J.vQ(l))+" for WeightedList<"+H.z(H.c2(H.dh(e)))+">. Should be "+H.z(H.c2(H.dh(e)))+" or WeightPair<"+H.z(H.c2(H.dh(e)))+">.")}return t},
vr:function(a,b,c,d){return new Q.kf(J.vS(a.gc3(),new Q.pY(c,d,b)),null,[c,d])},
cX:function cX(){},
dY:function dY(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
i4:function i4(){},
i:function i(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eV:function eV(){},
i3:function i3(){},
pX:function pX(a,$ti){this.a=a
this.$ti=$ti},
kf:function kf(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pY:function pY(a,b,c){this.a=a
this.b=b
this.c=c},
ox:function(){var t=0,s=P.bj(),r
var $async$ox=P.br(function(a,b){if(a===1)return P.bo(b,s)
while(true)switch(t){case 0:t=3
return P.ch(A.hC("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$ox)
case 3:r=A.hC("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$ox,s)}},G={n8:function n8(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.K=K
_.M=M
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},ob:function ob(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
zL:function(a){var t,s,r,q,p,o,n,m,l
t=G.a1
s=P.jK(a,t)
r=P.a0(null,null,null,t)
q=H.a([],[G.d])
for(t=G.FL(),p=J.d_(t.a),t=new H.kg(p,t.b,[H.Q(t,0)]);t.G();){o=p.gP()
if(o.eD(s))q.push(o)}C.b.df(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bH)(q),++n){o=q[n]
if(o.eD(s)){r.h(0,o)
for(p=o.f,m=p.length,l=0;l<p.length;p.length===m||(0,H.bH)(p),++l)s.an(0,p[l])}}if(s.a!==0)r.aw(0,s)
return r},
FL:function(){var t=$.$get$c()
t.toString
return new H.eT(t,new G.mS(),[H.Q(t,0)])},
a1:function a1(){},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d:function d(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mS:function mS(){},
H2:function(a){return a},
H5:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
if(a!=null){t=J.aU(a)
if(t.gU(a)!==!0){t.gF(a)
t=!1}else t=!0}else t=!0
if(t)return
t=J.cZ(a)
s=t.gF(a)
if(typeof s==="string")c=H.Im(G.IP(),{func:1,ret:P.x,args:[,]})
r=G.H4(b)
q=P.a0(null,null,null,null)
for(t=t.gW(a);t.G();){p=t.gP()
o=c.$1(p)
s=r.length
m=J.aU(o)
l=0
while(!0){if(!(l<r.length)){n=!0
break}k=r[l]
if(k.c){if(m.Y(o,k.a)===k.b){n=!1
break}}else if(C.c.Y(m.eC(o),k.a.toLowerCase())===k.b){n=!1
break}r.length===s||(0,H.bH)(r);++l}if(n)q.h(0,p)}return q},
H4:function(a){var t,s,r,q,p,o,n,m,l
t=J.ej(a," ")
s=H.a([],[G.hV])
for(r=0;q=t.length,r<q;++r){if(r<0)return H.u(t,r)
p=t[r]
q=J.aU(p)
if(q.gU(p)===!0)continue
if(q.a9(p,"-")){p=C.c.aa(p,1)
o=!0}else o=!1
if(C.c.a9(p,'"')){n=C.c.aa(p,1)
if(!C.c.cO(n,'"'))for(m=r+1;m<t.length;++m){l=t[m];++r
if(J.cH(l).cO(l,'"')){n=n+" "+C.c.I(l,0,l.length-1)
break}else n=n+" "+l}else n=C.c.I(n,0,n.length-1)
if(n.length!==0)s.push(new G.hV(n,o,!0))}else if(p.length!==0)s.push(new G.hV(p,o,!1))}return s},
H3:function(a,b,c,d){var t,s,r
t=W.As("text")
s=J.aK(t)
s.sev(t,c)
r=new G.oy(a,b,d,t)
s.bO(t,"change",r,null)
s.bO(t,"keyup",r,null)
s.bO(t,"blur",r,null)
return t},
oy:function oy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c}},F={nA:function nA(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},q3:function q3(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
FT:function(a){if(a===C.h){window
return C.i.gaq(C.i)}if(a===C.m){window
return C.i.gip()}if(a===C.a5){window
return C.i.ghK()}return P.Ib()},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
uE:function uE(){},
A3:function(a,b,c,d){var t,s,r,q
t=new B.dx(new P.cg(""),0,0)
t.ag(a,8)
c.toString
s=H.cU(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bY(s[q])
return t.b5(b)},
A2:function(a,b,c,d){var t,s,r,q,p
t=H.cG(c)
s=new Uint8Array(t)
r=new B.dk(null,0)
r.a=J.e0(a,b)
for(q=0;q<c;++q){p=r.c5()
if(q>=t)return H.u(s,q)
s[q]=p}return s},
A1:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dx(new P.cg(""),0,0)
t.ag(a,8)
s=d.gcV()
r=C.f.aj(Math.log(H.kD(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cU(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.u(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.u(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bY(o-1)
t.ag(a,r)}return t.b5(b)},
A0:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cG(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dk(null,0)
p.a=J.e0(a,b)
for(o=0;o<c;){n=p.c5()+1
m=p.ac(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
A_:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dx(new P.cg(""),0,0)
t.ag(a,8)
c.toString
s=H.cU(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.u(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.u(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bY(p-1)
t.bY(a)}return t.b5(b)},
zZ:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cG(c)
s=new Uint8Array(t)
r=new B.dk(null,0)
r.a=J.e0(a,b)
for(q=0;q<c;){p=r.c5()+1
o=r.c5()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.u(s,m)
s[m]=o}q+=p}return s}},R={
xs:function(a){var t,s
if(a.gm(a).aA(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.giw(s).giH().el("checking for two players, ps is "+H.z(a)+", ret is "+t)
return t},
GC:function(a){return R.xs(a)&&R.Gq(a)},
Gn:function(a){a.gF(a).gbq()
return!1},
GB:function(a){a.gF(a).gbq()
return!1},
Gq:function(a){a.gF(a).gbq()
return!1},
GA:function(a){a.gF(a).gbq()
return!1},
Gz:function(a){return a.gF(a).gbr().giG()},
Gx:function(a){return a.gF(a).gbr().giE()},
Gv:function(a){return a.gF(a).gbr().giD()},
Gr:function(a){return a.gF(a).gbr().giB()},
Gt:function(a){return a.gF(a).gbr().giC()},
Gy:function(a){return a.gF(a).gbr().giF()},
Gs:function(a){var t=a.gF(a)
t.gbq()
t.gbq()
return!1},
Gu:function(a){return a.gF(a).ghP()},
Gw:function(a){a.gF(a).ghP()
return!1},
Go:function(a){return!0},
Gp:function(a){a.gF(a).giy()
return!1},
og:function og(){},
Z:function Z(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
M:function M(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
a4:function a4(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
bF:function bF(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
pi:function pi(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},
hn:function hn(){},
uV:function uV(){},
uU:function uU(){}},D={pn:function pn(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
Hc:function(){var t,s
if($.xx)return
$.xx=!0
t=new D.cp("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
t.y=0
$.xw=t
t=new D.cp("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
$.Ha=t
t=new D.kj(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
t.y=2.5
t.Q=1
$.hZ=t
t=new D.kj(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
t.y=2.5
$.eL=t
t=new D.cp("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
$.H9=t
t=new D.cp("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
$.eM=t
t=new D.on("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
$.ee=t
t=new D.cp("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
$.de=t
t=new D.cp("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
$.eK=t
t=new D.cp("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
$.hX=t
t=new D.cp("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
$.hY=t
t=new D.cp("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
$.dE=t
t=new D.cp("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cL().push(t)
$.cz=t
t=P.x
s=D.cp
$.Hb=H.zN(P.FP($.$get$cL(),new D.oP(),new D.oQ(),t,s),t,s)},
ve:function(){var t=$.$get$cL()
return new H.eT(t,new D.oR(),[H.Q(t,0)])},
oP:function oP(){},
oQ:function oQ(){},
oR:function oR(){},
cp:function cp(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
kj:function kj(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
on:function on(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}}
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,A,V,Z,X,N,E,B,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.uB.prototype={}
J.f.prototype={
S:function(a,b){return a===b},
ga7:function(a){return H.eH(a)},
A:function(a){return H.od(a)},
gae:function(a){return new H.dX(H.kG(a),null)},
$ishn:1,
$isad:1,
$isft:1,
$isad:1,
$ismY:1,
$isf:1,
$ismY:1,
$isf:1,
$ishG:1,
$isad:1}
J.mW.prototype={
A:function(a){return String(a)},
ga7:function(a){return a?519018:218159},
gae:function(a){return C.am},
$iscY:1}
J.mX.prototype={
S:function(a,b){return null==b},
A:function(a){return"null"},
ga7:function(a){return 0},
gae:function(a){return C.ag},
$iscV:1}
J.hx.prototype={
ga7:function(a){return 0},
gae:function(a){return C.af},
A:function(a){return String(a)},
$ismY:1,
h:function(a,b){return a.add(b)},
an:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gc2:function(a){return a.left},
gc8:function(a){return a.top},
ge7:function(a){return a.attributes},
sah:function(a,b){return a.type=b},
gb7:function(a){return a.width},
gb1:function(a){return a.height},
gaH:function(a){return a.value},
i1:function(a,b){return a.parse(b)},
eV:function(a,b){return a.setLogging(b)},
eW:function(a,b){return a.setMaterials(b)}}
J.o8.prototype={}
J.eQ.prototype={}
J.eB.prototype={
A:function(a){var t=a[$.$get$w4()]
return t==null?this.f0(a):J.cD(t)},
$istY:1,
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ez.prototype={
c0:function(a,b){if(!!a.immutable$list)throw H.h(new P.V(b))},
cK:function(a,b){if(!!a.fixed$length)throw H.h(new P.V(b))},
h:function(a,b){this.cK(a,"add")
a.push(b)},
a0:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.h(new P.bN(a))}},
az:function(a,b){return new H.eF(a,b,[H.Q(a,0),null])},
aR:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.z(a[r])
if(r>=t)return H.u(s,r)
s[r]=q}return s.join(b)},
de:function(a,b){return H.xz(a,b,null,H.Q(a,0))},
hz:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.h(new P.bN(a))}return s},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
cf:function(a,b,c){if(b<0||b>a.length)throw H.h(P.bG(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.h(H.bv(c))
if(c<b||c>a.length)throw H.h(P.bG(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.Q(a,0)])
return H.a(a.slice(b,c),[H.Q(a,0)])},
gF:function(a){if(a.length>0)return a[0]
throw H.h(H.dp())},
gbb:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.h(H.dp())},
a5:function(a,b,c,d,e){var t,s,r
this.c0(a,"setRange")
P.dq(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.b1(P.bG(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.h(H.x8())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)},
by:function(a,b,c,d){var t
this.c0(a,"fill range")
P.dq(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aG:function(a,b,c,d){var t,s,r,q,p,o
this.cK(a,"replaceRange")
P.dq(b,c,a.length,null,null,null)
d=C.c.ao(d)
if(typeof c!=="number")return c.ak()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.at(a,b,r,d)
if(p!==0){this.a5(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a5(a,r,o,a,c)
this.at(a,b,r,d)}},
e6:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.h(new P.bN(a))}return!1},
hw:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.h(new P.bN(a))}return!0},
dg:function(a,b){var t
this.c0(a,"sort")
t=b==null?P.Ia():b
H.k5(a,0,a.length-1,t)},
df:function(a){return this.dg(a,null)},
b2:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.aV(a[t],b))return t
return-1},
bj:function(a,b){return this.b2(a,b,0)},
Y:function(a,b){var t
for(t=0;t<a.length;++t)if(J.aV(a[t],b))return!0
return!1},
gU:function(a){return a.length===0},
A:function(a){return P.jF(a,"[","]")},
a3:function(a,b){var t=H.a(a.slice(0),[H.Q(a,0)])
return t},
ao:function(a){return this.a3(a,!0)},
gW:function(a){return new J.ir(a,a.length,0,null,[H.Q(a,0)])},
ga7:function(a){return H.eH(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cK(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.e1(b,"newLength",null))
if(b<0)throw H.h(P.bG(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.c9(a,b))
if(b>=a.length||b<0)throw H.h(H.c9(a,b))
return a[b]},
i:function(a,b,c){this.c0(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.c9(a,b))
if(b>=a.length||b<0)throw H.h(H.c9(a,b))
a[b]=c},
$isay:1,
$asay:function(){},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
J.uA.prototype={}
J.ir.prototype={
gP:function(){return this.d},
G:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.h(H.bH(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fp.prototype={
aD:function(a,b){var t
if(typeof b!=="number")throw H.h(H.bv(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcS(b)
if(this.gcS(a)===t)return 0
if(this.gcS(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcS:function(a){return a===0?1/a<0:a<0},
aj:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.h(new P.V(""+a+".floor()"))},
bG:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(new P.V(""+a+".round()"))},
af:function(a,b,c){if(C.a.aD(b,c)>0)throw H.h(H.bv(b))
if(this.aD(a,b)<0)return b
if(this.aD(a,c)>0)return c
return a},
l:function(a){return a},
bI:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.h(P.bG(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.a_(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.b1(new P.V("Unexpected toString result: "+t))
r=J.aU(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.ar("0",q)},
A:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga7:function(a){return a&0x1FFFFFFF},
d8:function(a){return-a},
X:function(a,b){if(typeof b!=="number")throw H.h(H.bv(b))
return a+b},
ar:function(a,b){if(typeof b!=="number")throw H.h(H.bv(b))
return a*b},
bM:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
dk:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e_(a,b)},
am:function(a,b){return(a|0)===a?a/b|0:this.e_(a,b)},
e_:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.h(new P.V("Result of truncating division is "+H.z(t)+": "+H.z(a)+" ~/ "+H.z(b)))},
au:function(a,b){if(typeof b!=="number")throw H.h(H.bv(b))
if(b<0)throw H.h(H.bv(b))
return b>31?0:a<<b>>>0},
ap:function(a,b){return b>31?0:a<<b>>>0},
aY:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
h1:function(a,b){if(b<0)throw H.h(H.bv(b))
return b>31?0:a>>>b},
dZ:function(a,b){return b>31?0:a>>>b},
a4:function(a,b){if(typeof b!=="number")throw H.h(H.bv(b))
return a<b},
aA:function(a,b){if(typeof b!=="number")throw H.h(H.bv(b))
return a>b},
as:function(a,b){if(typeof b!=="number")throw H.h(H.bv(b))
return a>=b},
gae:function(a){return C.ap},
$isdv:1}
J.jI.prototype={
gae:function(a){return C.ao},
$isW:1,
$isdv:1,
$isC:1}
J.jH.prototype={
gae:function(a){return C.an},
$isW:1,
$isdv:1}
J.eA.prototype={
a_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.c9(a,b))
if(b<0)throw H.h(H.c9(a,b))
if(b>=a.length)H.b1(H.c9(a,b))
return a.charCodeAt(b)},
a6:function(a,b){if(b>=a.length)throw H.h(H.c9(a,b))
return a.charCodeAt(b)},
cH:function(a,b,c){if(c>b.length)throw H.h(P.bG(c,0,b.length,null,null))
return new H.rk(b,a,c)},
aQ:function(a,b){return this.cH(a,b,0)},
eq:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.h(P.bG(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.a_(b,c+s)!==this.a6(a,s))return
return new H.i_(c,b,a)},
X:function(a,b){if(typeof b!=="string")throw H.h(P.e1(b,null,null))
return a+b},
cO:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.aa(a,s-t)},
d2:function(a,b,c){return H.yI(a,b,c)},
ig:function(a,b,c){return H.IN(a,b,c,null)},
eX:function(a,b){if(b==null)H.b1(H.bv(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hw&&b.gdN().exec("").length-2===0)return a.split(b.gfP())
else return this.fv(a,b)},
aG:function(a,b,c,d){var t,s
H.vB(b)
c=P.dq(b,c,a.length,null,null,null)
H.vB(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fv:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.x])
for(s=J.yM(b,a),s=s.gW(s),r=0,q=1;s.G();){p=s.gP()
o=p.gdh(p)
n=p.ged(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.I(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.aa(a,r))
return t},
aI:function(a,b,c){var t
H.vB(c)
if(typeof c!=="number")return c.a4()
if(c<0||c>a.length)throw H.h(P.bG(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.z7(b,a,c)!=null},
a9:function(a,b){return this.aI(a,b,0)},
I:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.b1(H.bv(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.b1(H.bv(c))
if(typeof b!=="number")return b.a4()
if(b<0)throw H.h(P.k1(b,null,null))
if(typeof c!=="number")return H.a8(c)
if(b>c)throw H.h(P.k1(b,null,null))
if(c>a.length)throw H.h(P.k1(c,null,null))
return a.substring(b,c)},
aa:function(a,b){return this.I(a,b,null)},
eC:function(a){return a.toLowerCase()},
io:function(a){return a.toUpperCase()},
bk:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a6(t,0)===133){r=J.FN(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.a_(t,q)===133?J.ux(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eE:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.a_(t,r)===133)s=J.ux(t,r)}else{s=J.ux(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
ar:function(a,b){var t,s
if(typeof b!=="number")return H.a8(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.O)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
b2:function(a,b,c){var t
if(c<0||c>a.length)throw H.h(P.bG(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bj:function(a,b){return this.b2(a,b,0)},
hS:function(a,b,c){var t
if(b==null)H.b1(H.bv(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.b1(P.bG(t,0,c,null,null))
if(b.cq(a,t)!=null)return t}return-1},
en:function(a,b){return this.hS(a,b,null)},
eb:function(a,b,c){if(c>a.length)throw H.h(P.bG(c,0,a.length,null,null))
return H.IM(a,b,c)},
Y:function(a,b){return this.eb(a,b,0)},
gU:function(a){return a.length===0},
aD:function(a,b){var t
if(typeof b!=="string")throw H.h(H.bv(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
A:function(a){return a},
ga7:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gae:function(a){return C.ah},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.c9(a,b))
if(b>=a.length||b<0)throw H.h(H.c9(a,b))
return a[b]},
$isay:1,
$asay:function(){},
$isx:1}
H.ld.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.a_(this.a,b)},
$asi2:function(){return[P.C]},
$ashB:function(){return[P.C]},
$asfu:function(){return[P.C]},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]}}
H.t.prototype={$ast:null}
H.eC.prototype={
gW:function(a){return new H.eD(this,this.gm(this),0,null,[H.aw(this,"eC",0)])},
a0:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.T(0,s))
if(t!==this.gm(this))throw H.h(new P.bN(this))}},
gU:function(a){return this.gm(this)===0},
gF:function(a){if(this.gm(this)===0)throw H.h(H.dp())
return this.T(0,0)},
Y:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.aV(this.T(0,s),b))return!0
if(t!==this.gm(this))throw H.h(new P.bN(this))}return!1},
cb:function(a,b){return this.f_(0,b)},
az:function(a,b){return new H.eF(this,b,[H.aw(this,"eC",0),null])},
a3:function(a,b){var t,s,r
t=H.a([],[H.aw(this,"eC",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.T(0,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
ao:function(a){return this.a3(a,!0)}}
H.pg.prototype={
gfw:function(){var t=J.c3(this.a)
return t},
gh2:function(){var t,s
t=J.c3(this.a)
s=this.b
if(J.cC(s,t))return t
return s},
gm:function(a){var t,s
t=J.c3(this.a)
s=this.b
if(J.vJ(s,t))return 0
if(typeof s!=="number")return H.a8(s)
return t-s},
T:function(a,b){var t=J.eh(this.gh2(),b)
if(J.ei(b,0)||J.vJ(t,this.gfw()))throw H.h(P.bB(b,this,"index",null,null))
return J.vM(this.a,t)},
a3:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.aU(s)
q=r.gm(s)
if(typeof t!=="number")return H.a8(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.T(s,t+m)
if(m>=n.length)return H.u(n,m)
n[m]=o
if(r.gm(s)<q)throw H.h(new P.bN(this))}return n},
ao:function(a){return this.a3(a,!0)},
f9:function(a,b,c,d){var t=this.b
if(J.ei(t,0))H.b1(P.bG(t,0,null,"start",null))}}
H.eD.prototype={
gP:function(){return this.d},
G:function(){var t,s,r,q
t=this.a
s=J.aU(t)
r=s.gm(t)
if(this.b!==r)throw H.h(new P.bN(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.T(t,q);++this.c
return!0}}
H.hF.prototype={
gW:function(a){return new H.jM(null,J.d_(this.a),this.b,this.$ti)},
gm:function(a){return J.c3(this.a)},
gU:function(a){return J.to(this.a)},
gF:function(a){return this.b.$1(J.yY(this.a))},
$aso:function(a,b){return[b]}}
H.h6.prototype={$ist:1,
$ast:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.jM.prototype={
G:function(){var t=this.b
if(t.G()){this.a=this.c.$1(t.gP())
return!0}this.a=null
return!1},
gP:function(){return this.a},
$asjG:function(a,b){return[b]}}
H.eF.prototype={
gm:function(a){return J.c3(this.a)},
T:function(a,b){return this.b.$1(J.vM(this.a,b))},
$aseC:function(a,b){return[b]},
$ast:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.eT.prototype={
gW:function(a){return new H.kg(J.d_(this.a),this.b,this.$ti)},
az:function(a,b){return new H.hF(this,b,[H.Q(this,0),null])}}
H.kg.prototype={
G:function(){var t,s
for(t=this.a,s=this.b;t.G();)if(s.$1(t.gP())===!0)return!0
return!1},
gP:function(){return this.a.gP()}}
H.iQ.prototype={
sm:function(a,b){throw H.h(new P.V("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.h(new P.V("Cannot add to a fixed-length list"))},
aG:function(a,b,c,d){throw H.h(new P.V("Cannot remove from a fixed-length list"))}}
H.pG.prototype={
i:function(a,b,c){throw H.h(new P.V("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.h(new P.V("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.h(new P.V("Cannot add to an unmodifiable list"))},
a5:function(a,b,c,d,e){throw H.h(new P.V("Cannot modify an unmodifiable list"))},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)},
aG:function(a,b,c,d){throw H.h(new P.V("Cannot remove from an unmodifiable list"))},
by:function(a,b,c,d){throw H.h(new P.V("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
H.i2.prototype={$asp:null,$ast:null,$aso:null,$isp:1,$ist:1,$iso:1}
H.tl.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.tm.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.r_.prototype={}
H.fF.prototype={
e5:function(a,b){if(!this.f.S(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cF()},
ie:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.an(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.u(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.u(p,q)
p[q]=r
if(q===s.c)s.dF();++s.d}this.y=!1}this.cF()},
h7:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ap(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.u(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
ib:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ap(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.b1(new P.V("removeRange"))
P.dq(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eU:function(a,b){if(!this.r.S(0,a))return
this.db=b},
hF:function(a,b,c){var t=J.ap(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){J.fO(a,c)
return}t=this.cx
if(t==null){t=P.uG(null,null)
this.cx=t}t.aN(0,new H.qV(a,c))},
hE:function(a,b){var t
if(!this.r.S(0,a))return
t=J.ap(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){this.c1()
return}t=this.cx
if(t==null){t=P.uG(null,null)
this.cx=t}t.aN(0,this.ghR())},
hG:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fM(a)
if(b!=null)P.fM(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cD(a)
s[1]=b==null?null:J.cD(b)
for(r=new P.dt(t,t.r,null,null,[null]),r.c=t.e;r.G();)J.fO(r.d,s)},
bv:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.bS(o)
p=H.cB(o)
this.hG(q,p)
if(this.db===!0){this.c1()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghQ()
if(this.cx!=null)for(;n=this.cx,!n.gU(n);)this.cx.ex().$0()}return s},
cT:function(a){return this.b.n(0,a)},
dq:function(a,b){var t=this.b
if(t.V(0,a))throw H.h(P.lL("Registry: ports must be registered only once."))
t.i(0,a,b)},
cF:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.c1()},
c1:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bh(0)
for(t=this.b,s=t.gc9(t),s=s.gW(s);s.G();)s.gP().fn()
t.bh(0)
this.c.bh(0)
u.globalState.z.an(0,this.a)
this.dx.bh(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.u(t,p)
J.fO(q,t[p])}this.ch=null}},
ghQ:function(){return this.d},
ghj:function(){return this.e}}
H.qV.prototype={
$0:function(){J.fO(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qw.prototype={
hq:function(){var t=this.a
if(t.b===t.c)return
return t.ex()},
eB:function(){var t,s,r
t=this.hq()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.V(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gU(s)}else s=!1
else s=!1
else s=!1
if(s)H.b1(P.lL("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gU(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hA(["command","close"])
r=new H.dG(!0,new P.ku(0,null,null,null,null,null,0,[null,P.C])).aB(r)
s.toString
self.postMessage(r)}return!1}t.i7()
return!0},
dU:function(){if(self.window!=null)new H.qx(this).$0()
else for(;this.eB(););},
bH:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dU()
else try{this.dU()}catch(r){t=H.bS(r)
s=H.cB(r)
q=u.globalState.Q
p=P.hA(["command","error","msg",H.z(t)+"\n"+H.z(s)])
p=new H.dG(!0,P.ie(null,P.C)).aB(p)
q.toString
self.postMessage(p)}}}
H.qx.prototype={
$0:function(){if(!this.a.eB())return
P.xA(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.eX.prototype={
i7:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bv(this.b)}}
H.qZ.prototype={}
H.mH.prototype={
$0:function(){H.AL(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mI.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.f0(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.f0(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cF()},
$S:function(){return{func:1,v:true}}}
H.qh.prototype={}
H.fG.prototype={
b9:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdL())return
r=H.HO(b)
if(t.ghj()===s){s=J.aU(r)
switch(s.n(r,0)){case"pause":t.e5(s.n(r,1),s.n(r,2))
break
case"resume":t.ie(s.n(r,1))
break
case"add-ondone":t.h7(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.ib(s.n(r,1))
break
case"set-errors-fatal":t.eU(s.n(r,1),s.n(r,2))
break
case"ping":t.hF(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hE(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.an(0,s)
break}return}u.globalState.f.a.aN(0,new H.eX(t,new H.r1(this,r),"receive"))},
S:function(a,b){if(b==null)return!1
return b instanceof H.fG&&J.aV(this.b,b.b)},
ga7:function(a){return this.b.gct()}}
H.r1.prototype={
$0:function(){var t=this.a.b
if(!t.gdL())t.fk(0,this.b)},
$S:function(){return{func:1}}}
H.ik.prototype={
b9:function(a,b){var t,s,r
t=P.hA(["command","message","port",this,"msg",b])
s=new H.dG(!0,P.ie(null,P.C)).aB(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
S:function(a,b){if(b==null)return!1
return b instanceof H.ik&&J.aV(this.b,b.b)&&J.aV(this.a,b.a)&&J.aV(this.c,b.c)},
ga7:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.au()
s=this.a
if(typeof s!=="number")return s.au()
r=this.c
if(typeof r!=="number")return H.a8(r)
return(t<<16^s<<8^r)>>>0}}
H.fw.prototype={
fn:function(){this.c=!0
this.b=null},
fk:function(a,b){if(this.c)return
this.b.$1(b)},
$isGD:1,
gct:function(){return this.a},
gdL:function(){return this.c}}
H.py.prototype={
fa:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aN(0,new H.eX(s,new H.pz(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.du(new H.pA(this,b),0),a)}else throw H.h(new P.V("Timer greater than 0."))}}
H.pz.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pA.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dK.prototype={
ga7:function(a){var t=this.a
if(typeof t!=="number")return t.dd()
t=C.d.aY(t,0)^C.d.am(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dK){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gct:function(){return this.a}}
H.dG.prototype={
aB:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.ap(a)
if(!!t.$isfq)return["buffer",a]
if(!!t.$iseG)return["typed",a]
if(!!t.$isay)return this.eQ(a)
if(!!t.$isAI){r=this.geN()
q=t.gay(a)
q=H.dB(q,r,H.aw(q,"o",0),null)
q=P.db(q,!0,H.aw(q,"o",0))
t=t.gc9(a)
t=H.dB(t,r,H.aw(t,"o",0),null)
return["map",q,P.db(t,!0,H.aw(t,"o",0))]}if(!!t.$ismY)return this.eR(a)
if(!!t.$isf)this.eF(a)
if(!!t.$isGD)this.bK(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfG)return this.eS(a)
if(!!t.$isik)return this.eT(a)
if(!!t.$isf7){p=a.$static_name
if(p==null)this.bK(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdK)return["capability",a.a]
if(!(a instanceof P.ad))this.eF(a)
return["dart",u.classIdExtractor(a),this.eP(u.classFieldsExtractor(a))]},
bK:function(a,b){throw H.h(new P.V((b==null?"Can't transmit:":b)+" "+H.z(a)))},
eF:function(a){return this.bK(a,null)},
eQ:function(a){var t=this.eO(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bK(a,"Can't serialize indexable: ")},
eO:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.aB(a[s])
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
eP:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aB(a[t]))
return a},
eR:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bK(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.aB(a[t[r]])
if(r>=s.length)return H.u(s,r)
s[r]=q}return["js-object",t,s]},
eT:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eS:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gct()]
return["raw sendport",a]}}
H.eW.prototype={
b_:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.h(P.dJ("Bad serialized message: "+H.z(a)))
switch(C.b.gF(a)){case"ref":if(1>=a.length)return H.u(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.u(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bt(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bt(r),[null])
case"mutable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return this.bt(r)
case"const":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bt(r),[null])
s.fixed$length=Array
return s
case"map":return this.hu(a)
case"sendport":return this.hv(a)
case"raw sendport":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.ht(a)
case"function":if(1>=a.length)return H.u(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.u(a,1)
return new H.dK(a[1])
case"dart":s=a.length
if(1>=s)return H.u(a,1)
q=a[1]
if(2>=s)return H.u(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bt(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.h("couldn't deserialize: "+H.z(a))}},
bt:function(a){var t,s,r
t=J.aU(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
if(!(s<r))break
t.i(a,s,this.b_(t.n(a,s)));++s}return a},
hu:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q=P.jJ()
this.b.push(q)
s=J.zg(J.vS(s,this.ghs()))
for(t=J.aU(s),p=J.aU(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.b_(p.n(r,o)))
return q},
hv:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
if(3>=t)return H.u(a,3)
q=a[3]
if(J.aV(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cT(q)
if(o==null)return
n=new H.fG(o,r)}else n=new H.ik(s,q,r)
this.b.push(n)
return n},
ht:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.aU(s)
p=J.aU(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a8(n)
if(!(o<n))break
q[t.n(s,o)]=this.b_(p.n(r,o));++o}return q}}
H.lh.prototype={
$aseR:function(){},
$asjL:function(){},
$asaZ:function(){},
$isaZ:1}
H.lg.prototype={
gU:function(a){return this.gm(this)===0},
A:function(a){return P.xg(this)},
i:function(a,b,c){return H.zO()},
$isaZ:1,
$asaZ:null}
H.h1.prototype={
gm:function(a){return this.a},
V:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.V(0,b))return
return this.cs(b)},
cs:function(a){return this.b[a]},
a0:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.cs(q))}}}
H.li.prototype={
V:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!0
return this.b.hasOwnProperty(b)},
cs:function(a){return"__proto__"===a?this.d:this.b[a]}}
H.om.prototype={}
H.pD.prototype={
aK:function(a){var t,s,r
t=new RegExp(this.a).exec(a)
if(t==null)return
s=Object.create(null)
r=this.b
if(r!==-1)s.arguments=t[r+1]
r=this.c
if(r!==-1)s.argumentsExpr=t[r+1]
r=this.d
if(r!==-1)s.expr=t[r+1]
r=this.e
if(r!==-1)s.method=t[r+1]
r=this.f
if(r!==-1)s.receiver=t[r+1]
return s}}
H.jT.prototype={
A:function(a){var t=this.b
if(t==null)return"NullError: "+H.z(this.a)
return"NullError: method not found: '"+H.z(t)+"' on null"}}
H.n0.prototype={
A:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.z(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.z(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.z(this.a)+")"}}
H.pF.prototype={
A:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hf.prototype={
gaM:function(){return this.b}}
H.tn.prototype={
$1:function(a){if(!!J.ap(a).$iseo)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kw.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.t7.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.t8.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.t9.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.ta.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.tb.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.f7.prototype={
A:function(a){return"Closure '"+H.k_(this).trim()+"'"},
$istY:1,
giu:function(){return this},
$D:null}
H.pm.prototype={}
H.oO.prototype={
A:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fV.prototype={
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fV))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga7:function(a){var t,s
t=this.c
if(t==null)s=H.eH(this.a)
else s=typeof t!=="object"?J.dI(t):H.eH(t)
t=H.eH(this.b)
if(typeof s!=="number")return s.ix()
return(s^t)>>>0},
A:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.z(this.d)+"' of "+H.od(t)}}
H.lb.prototype={
A:function(a){return this.a}}
H.or.prototype={
A:function(a){return"RuntimeError: "+H.z(this.a)}}
H.dX.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga7:function(a){return J.dI(this.a)},
S:function(a,b){if(b==null)return!1
return b instanceof H.dX&&J.aV(this.a,b.a)}}
H.w.prototype={
gm:function(a){return this.a},
gU:function(a){return this.a===0},
gay:function(a){return new H.nb(this,[H.Q(this,0)])},
gc9:function(a){return H.dB(this.gay(this),new H.n_(this),H.Q(this,0),H.Q(this,1))},
V:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dA(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dA(s,b)}else return this.hL(b)},
hL:function(a){var t=this.d
if(t==null)return!1
return this.bB(this.bQ(t,this.bA(a)),a)>=0},
aw:function(a,b){b.a0(0,new H.mZ(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bn(t,b)
return s==null?null:s.gb0()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bn(r,b)
return s==null?null:s.gb0()}else return this.hM(b)},
hM:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bQ(t,this.bA(a))
r=this.bB(s,a)
if(r<0)return
return s[r].gb0()},
i:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.cv()
this.b=t}this.dn(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cv()
this.c=s}this.dn(s,b,c)}else this.hO(b,c)},
hO:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.cv()
this.d=t}s=this.bA(a)
r=this.bQ(t,s)
if(r==null)this.cD(t,s,[this.cw(a,b)])
else{q=this.bB(r,a)
if(q>=0)r[q].sb0(b)
else r.push(this.cw(a,b))}},
an:function(a,b){if(typeof b==="string")return this.dT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dT(this.c,b)
else return this.hN(b)},
hN:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bQ(t,this.bA(a))
r=this.bB(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.e2(q)
return q.gb0()},
bh:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a0:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.h(new P.bN(this))
t=t.c}},
dn:function(a,b,c){var t=this.bn(a,b)
if(t==null)this.cD(a,b,this.cw(b,c))
else t.sb0(c)},
dT:function(a,b){var t
if(a==null)return
t=this.bn(a,b)
if(t==null)return
this.e2(t)
this.dD(a,b)
return t.gb0()},
cw:function(a,b){var t,s
t=new H.na(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
e2:function(a){var t,s
t=a.gfU()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bA:function(a){return J.dI(a)&0x3ffffff},
bB:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aV(a[s].gek(),b))return s
return-1},
A:function(a){return P.xg(this)},
bn:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
cD:function(a,b,c){a[b]=c},
dD:function(a,b){delete a[b]},
dA:function(a,b){return this.bn(a,b)!=null},
cv:function(){var t=Object.create(null)
this.cD(t,"<non-identifier-key>",t)
this.dD(t,"<non-identifier-key>")
return t},
$isAI:1,
$isaZ:1,
$asaZ:null}
H.n_.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mZ.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eZ(function(a,b){return{func:1,args:[a,b]}},this.a,"w")}}
H.na.prototype={
gek:function(){return this.a},
gb0:function(){return this.b},
gfU:function(){return this.d},
sb0:function(a){return this.b=a}}
H.nb.prototype={
gm:function(a){return this.a.a},
gU:function(a){return this.a.a===0},
gW:function(a){var t,s
t=this.a
s=new H.nc(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
Y:function(a,b){return this.a.V(0,b)},
a0:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.h(new P.bN(t))
s=s.c}}}
H.nc.prototype={
gP:function(){return this.d},
G:function(){var t=this.a
if(this.b!==t.r)throw H.h(new P.bN(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.t3.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.t4.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.x]}}}
H.t5.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.x]}}}
H.hw.prototype={
A:function(a){return"RegExp/"+this.a+"/"},
gdO:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.uy(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdN:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.uy(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
hx:function(a){var t=this.b.exec(H.rP(a))
if(t==null)return
return new H.ig(this,t)},
cH:function(a,b,c){var t
H.rP(b)
t=J.c3(b)
if(typeof t!=="number")return H.a8(t)
t=c>t
if(t)throw H.h(P.bG(c,0,J.c3(b),null,null))
return new H.qb(this,b,c)},
aQ:function(a,b){return this.cH(a,b,0)},
fz:function(a,b){var t,s
t=this.gdO()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.ig(this,s)},
cq:function(a,b){var t,s
t=this.gdN()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.u(s,-1)
if(s.pop()!=null)return
return new H.ig(this,s)},
eq:function(a,b,c){if(c<0||c>b.length)throw H.h(P.bG(c,0,b.length,null,null))
return this.cq(b,c)},
$isGF:1,
gfP:function(){return this.b}}
H.ig.prototype={
gdh:function(a){return this.b.index},
ged:function(a){var t=this.b
return t.index+t[0].length},
bd:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.u(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$isdC:1}
H.qb.prototype={
gW:function(a){return new H.i6(this.a,this.b,this.c,null)},
$ashv:function(){return[P.dC]},
$aso:function(){return[P.dC]}}
H.i6.prototype={
gP:function(){return this.d},
G:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
t=J.c3(t)
if(typeof t!=="number")return H.a8(t)
if(s<=t){r=this.a.fz(this.b,this.c)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.i_.prototype={
ged:function(a){return this.a+this.c.length},
n:function(a,b){return this.bd(b)},
bd:function(a){if(a!==0)throw H.h(P.k1(a,null,null))
return this.c},
$isdC:1,
gdh:function(a){return this.a}}
H.rk.prototype={
gW:function(a){return new H.rl(this.a,this.b,this.c,null)},
gF:function(a){var t,s,r
t=this.a
s=this.b
r=t.indexOf(s,this.c)
if(r>=0)return new H.i_(r,t,s)
throw H.h(H.dp())},
$aso:function(){return[P.dC]}}
H.rl.prototype={
G:function(){var t,s,r,q,p,o,n
t=this.c
s=this.b
r=s.length
q=this.a
p=q.length
if(t+r>p){this.d=null
return!1}o=q.indexOf(s,t)
if(o<0){this.c=p+1
this.d=null
return!1}n=o+r
this.d=new H.i_(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gP:function(){return this.d}}
H.fq.prototype={
gae:function(a){return C.a8},
he:function(a,b,c){return H.cU(a,b,c)},
hd:function(a){return this.he(a,0,null)},
hc:function(a,b,c){var t
H.y9(a,b,c)
t=new DataView(a,b)
return t},
hb:function(a,b){return this.hc(a,b,null)},
$isfq:1,
$isbi:1,
geo:function(a){return a.byteLength}}
H.eG.prototype={
fM:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.e1(b,d,"Invalid list position"))
else throw H.h(P.bG(b,0,c,d,null))},
dt:function(a,b,c,d){if(b>>>0!==b||b>c)this.fM(a,b,c,d)},
$iseG:1,
gbZ:function(a){return a.buffer},
geo:function(a){return a.byteLength}}
H.nC.prototype={
gae:function(a){return C.a9}}
H.jP.prototype={
gm:function(a){return a.length},
dY:function(a,b,c,d,e){var t,s,r
t=a.length
this.dt(a,b,t,"start")
this.dt(a,c,t,"end")
if(typeof b!=="number")return b.aA()
if(typeof c!=="number")return H.a8(c)
if(b>c)throw H.h(P.bG(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a4()
if(e<0)throw H.h(P.dJ(e))
r=d.length
if(r-e<s)throw H.h(new P.aN("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaF:1,
$asaF:function(){},
$isay:1,
$asay:function(){}}
H.hJ.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b1(H.c9(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.b1(H.c9(a,b))
a[b]=c},
a5:function(a,b,c,d,e){if(!!J.ap(d).$ishJ){this.dY(a,b,c,d,e)
return}this.dj(a,b,c,d,e)},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)}}
H.hL.prototype={
$asaF:function(){},
$asay:function(){},
$asp:function(){return[P.W]},
$ast:function(){return[P.W]},
$aso:function(){return[P.W]},
$isp:1,
$ist:1,
$iso:1}
H.hN.prototype={
$asaF:function(){},
$asay:function(){},
$asp:function(){return[P.W]},
$ast:function(){return[P.W]},
$aso:function(){return[P.W]}}
H.hK.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.b1(H.c9(a,b))
a[b]=c},
a5:function(a,b,c,d,e){if(!!J.ap(d).$ishK){this.dY(a,b,c,d,e)
return}this.dj(a,b,c,d,e)},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.hM.prototype={
$asaF:function(){},
$asay:function(){},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]},
$isp:1,
$ist:1,
$iso:1}
H.hO.prototype={
$asaF:function(){},
$asay:function(){},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]}}
H.nD.prototype={
gae:function(a){return C.aa},
$isp:1,
$asp:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$iso:1,
$aso:function(){return[P.W]}}
H.nE.prototype={
gae:function(a){return C.ab},
$isp:1,
$asp:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$iso:1,
$aso:function(){return[P.W]}}
H.nF.prototype={
gae:function(a){return C.ac},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b1(H.c9(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nG.prototype={
gae:function(a){return C.ad},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b1(H.c9(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nH.prototype={
gae:function(a){return C.ae},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b1(H.c9(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nI.prototype={
gae:function(a){return C.ai},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b1(H.c9(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nJ.prototype={
gae:function(a){return C.aj},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b1(H.c9(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.jQ.prototype={
gae:function(a){return C.ak},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b1(H.c9(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.fr.prototype={
gae:function(a){return C.al},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b1(H.c9(a,b))
return a[b]},
cf:function(a,b,c){return new Uint8Array(a.subarray(b,H.HN(b,c,a.length)))},
$isfr:1,
$isdg:1,
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
P.qd.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.qc.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.qe.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qf.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.rD.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rE.prototype={
$2:function(a,b){this.a.$2(1,new H.hf(a,b))},
$S:function(){return{func:1,args:[,P.dV]}}}
P.rO.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.C,,]}}}
P.ct.prototype={}
P.rS.prototype={
$0:function(){var t,s,r
try{this.b.aJ(this.a.$0())}catch(r){t=H.bS(r)
s=H.cB(r)
P.ya(this.b,t,s)}},
$S:function(){return{func:1}}}
P.mm.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.al(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.al(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.ml.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.u(r,t)
r[t]=a
if(s===0)this.d.dz(r)}else if(t.b===0&&!this.b)this.d.al(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.f8.prototype={}
P.km.prototype={
cL:function(a,b){if(a==null)a=new P.fs()
if(this.a.a!==0)throw H.h(new P.aN("Future already completed"))
$.an.toString
this.al(a,b)},
bs:function(a){return this.cL(a,null)},
$isf8:1,
ghC:function(){return this.a}}
P.dZ.prototype={
aE:function(a,b){var t=this.a
if(t.a!==0)throw H.h(new P.aN("Future already completed"))
t.dr(b)},
hh:function(a){return this.aE(a,null)},
al:function(a,b){this.a.ds(a,b)}}
P.ky.prototype={
aE:function(a,b){var t=this.a
if(t.a!==0)throw H.h(new P.aN("Future already completed"))
t.aJ(b)},
al:function(a,b){this.a.al(a,b)}}
P.kr.prototype={
gh6:function(){return this.b.b},
geg:function(){return(this.c&1)!==0},
ghJ:function(){return(this.c&2)!==0},
gef:function(){return this.c===8},
hH:function(a){return this.b.b.d3(this.d,a)},
hT:function(a){if(this.c!==6)return!0
return this.b.b.d3(this.d,J.fN(a))},
hD:function(a){var t,s,r
t=this.e
s=J.aK(a)
r=this.b.b
if(H.f0(t,{func:1,args:[,,]}))return r.ij(t,s.gaq(a),a.gaM())
else return r.d3(t,s.gaq(a))},
hI:function(){return this.b.b.ez(this.d)},
gcz:function(){return this.a}}
P.bn.prototype={
gfN:function(){return this.a===2},
gcu:function(){return this.a>=4},
c7:function(a,b){var t=$.an
if(t!==C.e){t.toString
if(b!=null)b=P.yd(b,t)}return this.cE(a,b)},
b4:function(a){return this.c7(a,null)},
cE:function(a,b){var t,s
t=new P.bn(0,$.an,null,[null])
s=b==null?1:3
this.ci(new P.kr(null,t,s,a,b,[H.Q(this,0),null]))
return t},
ca:function(a){var t,s
t=$.an
s=new P.bn(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.Q(this,0)
this.ci(new P.kr(null,s,8,a,null,[t,t]))
return s},
ci:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcu()){s.ci(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fJ(null,null,t,new P.qC(this,a))}},
dS:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcz()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcu()){p.dS(a)
return}this.a=p.a
this.c=p.c}t.a=this.bV(a)
s=this.b
s.toString
P.fJ(null,null,s,new P.qK(t,this))}},
bU:function(){var t=this.c
this.c=null
return this.bV(t)},
bV:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcz()
t.a=s}return s},
aJ:function(a){var t,s
t=this.$ti
if(H.e_(a,"$isct",t,"$asct"))if(H.e_(a,"$isbn",t,null))P.qF(a,this)
else P.xX(a,this)
else{s=this.bU()
this.a=4
this.c=a
P.fE(this,s)}},
dz:function(a){var t=this.bU()
this.a=4
this.c=a
P.fE(this,t)},
al:function(a,b){var t=this.bU()
this.a=8
this.c=new P.f1(a,b)
P.fE(this,t)},
fp:function(a){return this.al(a,null)},
dr:function(a){var t
if(H.e_(a,"$isct",this.$ti,"$asct")){this.fm(a)
return}this.a=1
t=this.b
t.toString
P.fJ(null,null,t,new P.qE(this,a))},
fm:function(a){var t
if(H.e_(a,"$isbn",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fJ(null,null,t,new P.qJ(this,a))}else P.qF(a,this)
return}P.xX(a,this)},
ds:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fJ(null,null,t,new P.qD(this,a,b))},
$isct:1,
gbW:function(){return this.a},
gfX:function(){return this.c}}
P.qC.prototype={
$0:function(){P.fE(this.a,this.b)},
$S:function(){return{func:1}}}
P.qK.prototype={
$0:function(){P.fE(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qG.prototype={
$1:function(a){var t=this.a
t.a=0
t.aJ(a)},
$S:function(){return{func:1,args:[,]}}}
P.qH.prototype={
$2:function(a,b){this.a.al(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qI.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.qE.prototype={
$0:function(){this.a.dz(this.b)},
$S:function(){return{func:1}}}
P.qJ.prototype={
$0:function(){P.qF(this.b,this.a)},
$S:function(){return{func:1}}}
P.qD.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.qN.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hI()}catch(q){s=H.bS(q)
r=H.cB(q)
if(this.c){p=J.fN(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.f1(s,r)
o.a=!0
return}if(!!J.ap(t).$isct){if(t instanceof P.bn&&t.gbW()>=4){if(t.gbW()===8){p=this.b
p.b=t.gfX()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b4(new P.qO(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qO.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qM.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hH(this.c)}catch(r){t=H.bS(r)
s=H.cB(r)
q=this.a
q.b=new P.f1(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qL.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hT(t)===!0&&q.e!=null){p=this.b
p.b=q.hD(t)
p.a=!1}}catch(o){s=H.bS(o)
r=H.cB(o)
q=this.a
p=J.fN(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.f1(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.kl.prototype={}
P.dr.prototype={
az:function(a,b){return new P.r0(b,this,[H.aw(this,"dr",0),null])},
Y:function(a,b){var t,s
t={}
s=new P.bn(0,$.an,null,[P.cY])
t.a=null
t.a=this.aS(new P.oW(t,this,b,s),!0,new P.oX(s),s.gbf())
return s},
a0:function(a,b){var t,s
t={}
s=new P.bn(0,$.an,null,[null])
t.a=null
t.a=this.aS(new P.p1(t,this,b,s),!0,new P.p2(s),s.gbf())
return s},
gm:function(a){var t,s
t={}
s=new P.bn(0,$.an,null,[P.C])
t.a=0
this.aS(new P.p5(t),!0,new P.p6(t,s),s.gbf())
return s},
gU:function(a){var t,s
t={}
s=new P.bn(0,$.an,null,[P.cY])
t.a=null
t.a=this.aS(new P.p3(t,s),!0,new P.p4(s),s.gbf())
return s},
ao:function(a){var t,s,r
t=H.aw(this,"dr",0)
s=H.a([],[t])
r=new P.bn(0,$.an,null,[[P.p,t]])
this.aS(new P.p7(this,s),!0,new P.p8(s,r),r.gbf())
return r},
gF:function(a){var t,s
t={}
s=new P.bn(0,$.an,null,[H.aw(this,"dr",0)])
t.a=null
t.a=this.aS(new P.oY(t,this,s),!0,new P.oZ(s),s.gbf())
return s}}
P.oW.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.yh(new P.oU(this.c,a),new P.oV(t,s),P.y8(t.a,s))},
$S:function(){return H.eZ(function(a){return{func:1,args:[a]}},this.b,"dr")}}
P.oU.prototype={
$0:function(){return J.aV(this.b,this.a)},
$S:function(){return{func:1}}}
P.oV.prototype={
$1:function(a){if(a===!0)P.vw(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.cY]}}}
P.oX.prototype={
$0:function(){this.a.aJ(!1)},
$S:function(){return{func:1}}}
P.p1.prototype={
$1:function(a){P.yh(new P.p_(this.c,a),new P.p0(),P.y8(this.a.a,this.d))},
$S:function(){return H.eZ(function(a){return{func:1,args:[a]}},this.b,"dr")}}
P.p_.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.p0.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.p2.prototype={
$0:function(){this.a.aJ(null)},
$S:function(){return{func:1}}}
P.p5.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.p6.prototype={
$0:function(){this.b.aJ(this.a.a)},
$S:function(){return{func:1}}}
P.p3.prototype={
$1:function(a){P.vw(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.p4.prototype={
$0:function(){this.a.aJ(!0)},
$S:function(){return{func:1}}}
P.p7.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eZ(function(a){return{func:1,args:[a]}},this.a,"dr")}}
P.p8.prototype={
$0:function(){this.b.aJ(this.a)},
$S:function(){return{func:1}}}
P.oY.prototype={
$1:function(a){P.vw(this.a.a,this.c,a)},
$S:function(){return H.eZ(function(a){return{func:1,args:[a]}},this.b,"dr")}}
P.oZ.prototype={
$0:function(){var t,s,r,q
try{r=H.dp()
throw H.h(r)}catch(q){t=H.bS(q)
s=H.cB(q)
P.ya(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oT.prototype={}
P.ds.prototype={
cW:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.e8()
if((t&4)===0&&(this.e&32)===0)this.dG(this.gdQ())},
eu:function(a){return this.cW(a,null)},
ey:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gU(t)}else t=!1
if(t)this.r.cd(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dG(this.gdR())}}}},
c_:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.ck()
t=this.f
return t==null?$.$get$ho():t},
ck:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.e8()
if((this.e&32)===0)this.r=null
this.f=this.dP()},
bP:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dV(b)
else this.cj(new P.qq(b,null,[H.aw(this,"ds",0)]))},
bN:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dX(a,b)
else this.cj(new P.qs(a,b,null))},
fl:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dW()
else this.cj(C.P)},
bS:function(){},
bT:function(){},
dP:function(){return},
cj:function(a){var t,s
t=this.r
if(t==null){t=new P.ri(null,null,0,[H.aw(this,"ds",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.cd(this)}},
dV:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.d4(this.a,a)
this.e=(this.e&4294967263)>>>0
this.cl((t&4)!==0)},
dX:function(a,b){var t,s
t=this.e
s=new P.qj(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.ck()
t=this.f
if(!!J.ap(t).$isct&&t!==$.$get$ho())t.ca(s)
else s.$0()}else{s.$0()
this.cl((t&4)!==0)}},
dW:function(){var t,s
t=new P.qi(this)
this.ck()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ap(s).$isct&&s!==$.$get$ho())s.ca(t)
else t.$0()},
dG:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.cl((t&4)!==0)},
cl:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gU(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gU(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bS()
else this.bT()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.cd(this)},
fd:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.yd(b,t)
this.c=c},
gbW:function(){return this.e}}
P.qj.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.f0(s,{func:1,args:[P.ad,P.dV]})
q=t.d
p=this.b
o=t.b
if(r)q.ik(o,p,this.c)
else q.d4(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.qi.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eA(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.kp.prototype={
gbC:function(a){return this.a},
sbC:function(a,b){return this.a=b}}
P.qq.prototype={
cX:function(a){a.dV(this.b)}}
P.qs.prototype={
cX:function(a){a.dX(this.b,this.c)},
$askp:function(){},
gaq:function(a){return this.b},
gaM:function(){return this.c}}
P.qr.prototype={
cX:function(a){a.dW()},
gbC:function(a){return},
sbC:function(a,b){throw H.h(new P.aN("No events after a done."))}}
P.r2.prototype={
cd:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.yF(new P.r3(this,a))
this.a=1},
e8:function(){if(this.a===1)this.a=3},
gbW:function(){return this.a}}
P.r3.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbC(r)
t.b=q
if(q==null)t.c=null
r.cX(this.b)},
$S:function(){return{func:1}}}
P.ri.prototype={
gU:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbC(0,b)
this.c=b}}}
P.rj.prototype={}
P.rG.prototype={
$0:function(){return this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.rF.prototype={
$2:function(a,b){P.HM(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dV]}}}
P.rH.prototype={
$0:function(){return this.a.aJ(this.b)},
$S:function(){return{func:1}}}
P.ia.prototype={
aS:function(a,b,c,d){return this.ft(a,d,c,!0===b)},
ep:function(a,b,c){return this.aS(a,null,b,c)},
ft:function(a,b,c,d){return P.Hp(this,a,b,c,d,H.aw(this,"ia",0),H.aw(this,"ia",1))},
dH:function(a,b){b.bP(0,a)},
fK:function(a,b,c){c.bN(a,b)},
$asdr:function(a,b){return[b]}}
P.ib.prototype={
bP:function(a,b){if((this.e&2)!==0)return
this.f2(0,b)},
bN:function(a,b){if((this.e&2)!==0)return
this.f3(a,b)},
bS:function(){var t=this.y
if(t==null)return
t.eu(0)},
bT:function(){var t=this.y
if(t==null)return
t.ey(0)},
dP:function(){var t=this.y
if(t!=null){this.y=null
return t.c_(0)}return},
fF:function(a){this.x.dH(a,this)},
fJ:function(a,b){this.x.fK(a,b,this)},
fH:function(){this.fl()},
fg:function(a,b,c,d,e,f,g){this.y=this.x.a.ep(this.gfE(),this.gfG(),this.gfI())},
$asds:function(a,b){return[b]}}
P.r0.prototype={
dH:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.bS(q)
r=H.cB(q)
P.HL(b,s,r)
return}b.bP(0,t)}}
P.f1.prototype={
A:function(a){return H.z(this.a)},
$iseo:1,
gaq:function(a){return this.a},
gaM:function(){return this.b}}
P.rC.prototype={}
P.rN.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fs()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.h(t)
r=H.h(t)
r.stack=J.cD(s)
throw r},
$S:function(){return{func:1}}}
P.r6.prototype={
eA:function(a){var t,s,r,q
try{if(C.e===$.an){r=a.$0()
return r}r=P.ye(null,null,this,a)
return r}catch(q){t=H.bS(q)
s=H.cB(q)
r=P.kC(null,null,this,t,s)
return r}},
d4:function(a,b){var t,s,r,q
try{if(C.e===$.an){r=a.$1(b)
return r}r=P.yg(null,null,this,a,b)
return r}catch(q){t=H.bS(q)
s=H.cB(q)
r=P.kC(null,null,this,t,s)
return r}},
ik:function(a,b,c){var t,s,r,q
try{if(C.e===$.an){r=a.$2(b,c)
return r}r=P.yf(null,null,this,a,b,c)
return r}catch(q){t=H.bS(q)
s=H.cB(q)
r=P.kC(null,null,this,t,s)
return r}},
cJ:function(a,b){if(b)return new P.r7(this,a)
else return new P.r8(this,a)},
hf:function(a,b){return new P.r9(this,a)},
n:function(a,b){return},
ez:function(a){if($.an===C.e)return a.$0()
return P.ye(null,null,this,a)},
d3:function(a,b){if($.an===C.e)return a.$1(b)
return P.yg(null,null,this,a,b)},
ij:function(a,b,c){if($.an===C.e)return a.$2(b,c)
return P.yf(null,null,this,a,b,c)}}
P.r7.prototype={
$0:function(){return this.a.eA(this.b)},
$S:function(){return{func:1}}}
P.r8.prototype={
$0:function(){return this.a.ez(this.b)},
$S:function(){return{func:1}}}
P.r9.prototype={
$1:function(a){return this.a.d4(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qQ.prototype={
gm:function(a){return this.a},
gU:function(a){return this.a===0},
gc9:function(a){var t=H.Q(this,0)
return H.dB(new P.qR(this,[t]),new P.qT(this),t,H.Q(this,1))},
V:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fs(b)},
fs:function(a){var t=this.d
if(t==null)return!1
return this.aP(t[this.aO(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fC(0,b)},
fC:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(b)]
r=this.aP(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.vt()
this.b=t}this.dv(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.vt()
this.c=s}this.dv(s,b,c)}else this.h_(b,c)},
h_:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.vt()
this.d=t}s=this.aO(a)
r=t[s]
if(r==null){P.vu(t,s,[a,b]);++this.a
this.e=null}else{q=this.aP(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.cC(0,b)},
cC:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(b)]
r=this.aP(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a0:function(a,b){var t,s,r,q
t=this.cn()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.h(new P.bN(this))}},
cn:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.e
if(t!=null)return t
s=new Array(this.a)
s.fixed$length=Array
r=this.b
if(r!=null){q=Object.getOwnPropertyNames(r)
p=q.length
for(o=0,n=0;n<p;++n){s[o]=q[n];++o}}else o=0
m=this.c
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(n=0;n<p;++n){s[o]=+q[n];++o}}l=this.d
if(l!=null){q=Object.getOwnPropertyNames(l)
p=q.length
for(n=0;n<p;++n){k=l[q[n]]
j=k.length
for(i=0;i<j;i+=2){s[o]=k[i];++o}}}this.e=s
return s},
dv:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.vu(a,b,c)},
bl:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Hr(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aO:function(a){return J.dI(a)&0x3ffffff},
aP:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.aV(a[s],b))return s
return-1},
$isaZ:1,
$asaZ:null}
P.qT.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qR.prototype={
gm:function(a){return this.a.a},
gU:function(a){return this.a.a===0},
gW:function(a){var t=this.a
return new P.qS(t,t.cn(),0,null,this.$ti)},
Y:function(a,b){return this.a.V(0,b)},
a0:function(a,b){var t,s,r,q
t=this.a
s=t.cn()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.h(new P.bN(t))}}}
P.qS.prototype={
gP:function(){return this.d},
G:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.h(new P.bN(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.ku.prototype={
bA:function(a){return H.ID(a)&0x3ffffff},
bB:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gek()
if(r==null?b==null:r===b)return s}return-1}}
P.kt.prototype={
gW:function(a){var t=new P.dt(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gU:function(a){return this.a===0},
Y:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.fq(b)},
fq:function(a){var t=this.d
if(t==null)return!1
return this.aP(t[this.aO(a)],a)>=0},
cT:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.Y(0,a)?a:null
else return this.fO(a)},
fO:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(a)]
r=this.aP(s,a)
if(r<0)return
return J.iq(s,r).gdE()},
a0:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.h(new P.bN(this))
t=t.b}},
gF:function(a){var t=this.e
if(t==null)throw H.h(new P.aN("No elements"))
return t.a},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.du(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.du(r,b)}else return this.aN(0,b)},
aN:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.Hu()
this.d=t}s=this.aO(b)
r=t[s]
if(r==null)t[s]=[this.cm(b)]
else{if(this.aP(r,b)>=0)return!1
r.push(this.cm(b))}return!0},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.cC(0,b)},
cC:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aO(b)]
r=this.aP(s,b)
if(r<0)return!1
this.dw(s.splice(r,1)[0])
return!0},
bh:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
du:function(a,b){if(a[b]!=null)return!1
a[b]=this.cm(b)
return!0},
bl:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dw(t)
delete a[b]
return!0},
cm:function(a){var t,s
t=new P.qX(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dw:function(a){var t,s
t=a.gfo()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aO:function(a){return J.dI(a)&0x3ffffff},
aP:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aV(a[s].gdE(),b))return s
return-1},
$ised:1,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.qX.prototype={
gdE:function(){return this.a},
gfo:function(){return this.c}}
P.dt.prototype={
gP:function(){return this.d},
G:function(){var t=this.a
if(this.b!==t.r)throw H.h(new P.bN(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qU.prototype={}
P.fo.prototype={
az:function(a,b){return H.dB(this,b,H.aw(this,"fo",0),null)},
Y:function(a,b){var t
for(t=this.gW(this);t.G();)if(J.aV(t.gP(),b))return!0
return!1},
a0:function(a,b){var t
for(t=this.gW(this);t.G();)b.$1(t.gP())},
a3:function(a,b){return P.db(this,!0,H.aw(this,"fo",0))},
ao:function(a){return this.a3(a,!0)},
gm:function(a){var t,s
t=this.gW(this)
for(s=0;t.G();)++s
return s},
gU:function(a){return!this.gW(this).G()},
gF:function(a){var t=this.gW(this)
if(!t.G())throw H.h(H.dp())
return t.gP()},
A:function(a){return P.uu(this,"(",")")},
$iso:1,
$aso:null}
P.hv.prototype={}
P.rU.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return{func:1,args:[,,]}}}
P.hB.prototype={}
P.fu.prototype={$asp:null,$ast:null,$aso:null,$isp:1,$ist:1,$iso:1}
P.aT.prototype={
gW:function(a){return new H.eD(a,this.gm(a),0,null,[H.aw(a,"aT",0)])},
T:function(a,b){return this.n(a,b)},
a0:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.h(new P.bN(a))}},
gU:function(a){return this.gm(a)===0},
gF:function(a){if(this.gm(a)===0)throw H.h(H.dp())
return this.n(a,0)},
Y:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.aV(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.h(new P.bN(a))}return!1},
az:function(a,b){return new H.eF(a,b,[H.aw(a,"aT",0),null])},
de:function(a,b){return H.xz(a,b,null,H.aw(a,"aT",0))},
a3:function(a,b){var t,s,r
t=H.a([],[H.aw(a,"aT",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
ao:function(a){return this.a3(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
by:function(a,b,c,d){var t
P.dq(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a5:function(a,b,c,d,e){var t,s,r,q,p,o
P.dq(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.ak()
if(typeof b!=="number")return H.a8(b)
t=c-b
if(t===0)return
if(J.ei(e,0))H.b1(P.bG(e,0,null,"skipCount",null))
if(H.e_(d,"$isp",[H.aw(a,"aT",0)],"$asp")){s=e
r=d}else{r=J.ze(d,e).a3(0,!1)
s=0}q=J.kE(s)
p=J.aU(r)
if(J.cC(q.X(s,t),p.gm(r)))throw H.h(H.x8())
if(q.a4(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.X(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.X(s,o)))},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)},
aG:function(a,b,c,d){var t,s,r,q,p
P.dq(b,c,this.gm(a),null,null,null)
d=C.c.ao(d)
if(typeof c!=="number")return c.ak()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.at(a,b,r,d)
if(q!==0){this.a5(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a5(a,r,p,a,c)
this.at(a,b,r,d)}},
b2:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.aV(this.n(a,t),b))return t
return-1},
bj:function(a,b){return this.b2(a,b,0)},
A:function(a){return P.jF(a,"[","]")},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.rt.prototype={
i:function(a,b,c){throw H.h(new P.V("Cannot modify unmodifiable map"))},
$isaZ:1,
$asaZ:null}
P.jL.prototype={
n:function(a,b){return J.iq(this.a,b)},
i:function(a,b,c){J.kJ(this.a,b,c)},
V:function(a,b){return J.yR(this.a,b)},
a0:function(a,b){J.yU(this.a,b)},
gU:function(a){return J.to(this.a)},
gm:function(a){return J.c3(this.a)},
A:function(a){return J.cD(this.a)},
$isaZ:1,
$asaZ:null}
P.eR.prototype={$asaZ:null,$isaZ:1}
P.nq.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.O+=", "
t.a=!1
t=this.b
s=t.O+=H.z(a)
t.O=s+": "
t.O+=H.z(b)},
$S:function(){return{func:1,args:[,,]}}}
P.nd.prototype={
gW:function(a){return new P.qY(this,this.c,this.d,this.b,null,this.$ti)},
a0:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.u(r,s)
b.$1(r[s])
if(t!==this.d)H.b1(new P.bN(this))}},
gU:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
gF:function(a){var t,s
t=this.b
if(t===this.c)throw H.h(H.dp())
s=this.a
if(t>=s.length)return H.u(s,t)
return s[t]},
T:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a8(b)
if(0>b||b>=t)H.b1(P.bB(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.u(s,q)
return s[q]},
a3:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.h5(t)
return t},
ao:function(a){return this.a3(a,!0)},
h:function(a,b){this.aN(0,b)},
bh:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.u(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
A:function(a){return P.jF(this,"{","}")},
ex:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.h(H.dp());++this.d
s=this.a
r=s.length
if(t>=r)return H.u(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aN:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.u(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dF();++this.d},
dF:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a5(s,0,q,t,r)
C.b.a5(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
h5:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a5(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a5(a,0,p,r,t)
C.b.a5(a,p,p+this.c,this.a,0)
return this.c+p}},
f8:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$ast:null,
$aso:null}
P.qY.prototype={
gP:function(){return this.e},
G:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.b1(new P.bN(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.u(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.oC.prototype={
gU:function(a){return this.a===0},
aw:function(a,b){var t
for(t=J.d_(b);t.G();)this.h(0,t.gP())},
a3:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dt(this,this.r,null,null,[null]),s.c=this.e,r=0;s.G();r=p){q=s.d
p=r+1
if(r>=t.length)return H.u(t,r)
t[r]=q}return t},
ao:function(a){return this.a3(a,!0)},
az:function(a,b){return new H.h6(this,b,[H.Q(this,0),null])},
A:function(a){return P.jF(this,"{","}")},
a0:function(a,b){var t
for(t=new P.dt(this,this.r,null,null,[null]),t.c=this.e;t.G();)b.$1(t.d)},
aR:function(a,b){var t,s
t=new P.dt(this,this.r,null,null,[null])
t.c=this.e
if(!t.G())return""
if(b===""){s=""
do s+=H.z(t.d)
while(t.G())}else{s=H.z(t.d)
for(;t.G();)s=s+b+H.z(t.d)}return s.charCodeAt(0)==0?s:s},
gF:function(a){var t=new P.dt(this,this.r,null,null,[null])
t.c=this.e
if(!t.G())throw H.h(H.dp())
return t.d},
$ised:1,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.oB.prototype={}
P.l0.prototype={
hY:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.aU(b)
a1=P.dq(a0,a1,t.gm(b),null,null,null)
s=$.$get$xW()
if(typeof a1!=="number")return H.a8(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.a_(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.t1(C.c.a6(b,l))
h=H.t1(C.c.a6(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.u(s,g)
f=s[g]
if(f>=0){g=C.c.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.O.length
if(e==null)e=0
if(typeof e!=="number")return e.X()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.cg("")
p.O+=C.c.I(b,q,r)
p.O+=H.hR(k)
q=l
continue}}throw H.h(new P.bQ("Invalid base64 data",b,r))}if(p!=null){t=p.O+=t.I(b,q,a1)
e=t.length
if(o>=0)P.vX(b,n,a1,o,m,e)
else{d=C.a.bM(e-1,4)+1
if(d===1)throw H.h(new P.bQ("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.O=t;++d}}t=p.O
return C.c.aG(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.vX(b,n,a1,o,m,c)
else{d=C.d.bM(c,4)
if(d===1)throw H.h(new P.bQ("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aG(b,a1,a1,d===2?"==":"=")}return b},
$ash_:function(){return[[P.p,P.C],P.x]}}
P.l1.prototype={
$ash2:function(){return[[P.p,P.C],P.x]}}
P.h_.prototype={}
P.h2.prototype={}
P.lF.prototype={
$ash_:function(){return[P.x,[P.p,P.C]]}}
P.pP.prototype={
gH:function(a){return"utf-8"}}
P.pQ.prototype={
cM:function(a,b,c){var t,s,r,q
t=J.c3(a)
P.dq(b,c,t,null,null,null)
s=new P.cg("")
r=new P.rv(!1,s,!0,0,0,0)
r.cM(a,b,t)
r.hy(0,a,t)
q=s.O
return q.charCodeAt(0)==0?q:q},
hk:function(a){return this.cM(a,0,null)},
$ash2:function(){return[[P.p,P.C],P.x]}}
P.rv.prototype={
hy:function(a,b,c){if(this.e>0)throw H.h(new P.bQ("Unfinished UTF-8 octet sequence",b,c))},
cM:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.rx(c)
p=new P.rw(this,a,b,c)
$loop$0:for(o=J.aU(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aL()
if((l&192)!==128){k=new P.bQ("Bad UTF-8 encoding 0x"+C.d.bI(l,16),a,m)
throw H.h(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.u(C.z,k)
if(t<=C.z[k]){k=new P.bQ("Overlong encoding of 0x"+C.a.bI(t,16),a,m-r-1)
throw H.h(k)}if(t>1114111){k=new P.bQ("Character outside valid Unicode range: 0x"+C.a.bI(t,16),a,m-r-1)
throw H.h(k)}if(!this.c||t!==65279)n.O+=H.hR(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cC(j,0)){this.c=!1
if(typeof j!=="number")return H.a8(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dH(l)
if(g.a4(l,0)){g=new P.bQ("Negative UTF-8 code unit: -0x"+J.zh(g.d8(l),16),a,h-1)
throw H.h(g)}else{if(typeof l!=="number")return l.aL()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bQ("Bad UTF-8 encoding 0x"+C.d.bI(l,16),a,h-1)
throw H.h(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.rx.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.aU(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aL()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.C,args:[,P.C]}}}
P.rw.prototype={
$2:function(a,b){this.a.b.O+=P.pd(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.C,P.C]}}}
P.cY.prototype={}
P.bJ.prototype={}
P.e3.prototype={
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.e3))return!1
return this.a===b.a&&this.b===b.b},
aD:function(a,b){return C.a.aD(this.a,b.gh4())},
ga7:function(a){var t=this.a
return(t^C.a.aY(t,30))&1073741823},
A:function(a){var t,s,r,q,p,o,n
t=P.zR(H.xm(this))
s=P.iy(H.v1(this))
r=P.iy(H.v0(this))
q=P.iy(H.Gc(this))
p=P.iy(H.Ge(this))
o=P.iy(H.Gf(this))
n=P.zS(H.Gd(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.zQ(C.a.X(this.a,b.giA()),this.b)},
ghU:function(){return this.a},
dl:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.h(P.dJ(this.ghU()))},
$isbJ:1,
$asbJ:function(){return[P.e3]},
gh4:function(){return this.a}}
P.W.prototype={$isbJ:1,
$asbJ:function(){return[P.dv]}}
P.dM.prototype={
X:function(a,b){return new P.dM(this.a+b.gbm())},
ar:function(a,b){return new P.dM(C.a.bG(this.a*b))},
a4:function(a,b){return C.a.a4(this.a,b.gbm())},
aA:function(a,b){return C.a.aA(this.a,b.gbm())},
as:function(a,b){return C.a.as(this.a,b.gbm())},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dM))return!1
return this.a===b.a},
ga7:function(a){return this.a&0x1FFFFFFF},
aD:function(a,b){return C.a.aD(this.a,b.gbm())},
A:function(a){var t,s,r,q,p
t=new P.lD()
s=this.a
if(s<0)return"-"+new P.dM(0-s).A(0)
r=t.$1(C.a.am(s,6e7)%60)
q=t.$1(C.a.am(s,1e6)%60)
p=new P.lC().$1(s%1e6)
return""+C.a.am(s,36e8)+":"+H.z(r)+":"+H.z(q)+"."+H.z(p)},
d8:function(a){return new P.dM(0-this.a)},
$isbJ:1,
$asbJ:function(){return[P.dM]},
gbm:function(){return this.a}}
P.lC.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.x,args:[P.C]}}}
P.lD.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.x,args:[P.C]}}}
P.eo.prototype={
gaM:function(){return H.cB(this.$thrownJsError)}}
P.fs.prototype={
A:function(a){return"Throw of null."}}
P.d0.prototype={
gcp:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gco:function(){return""},
A:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.z(t)
q=this.gcp()+s+r
if(!this.a)return q
p=this.gco()
o=P.we(this.b)
return q+p+": "+H.z(o)},
gH:function(a){return this.c}}
P.eJ.prototype={
gcp:function(){return"RangeError"},
gco:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.z(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.z(t)
else{if(typeof r!=="number")return r.aA()
if(r>t)s=": Not in range "+H.z(t)+".."+H.z(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.z(t)}}return s}}
P.mD.prototype={
gcp:function(){return"RangeError"},
gco:function(){if(J.ei(this.b,0))return": index must not be negative"
var t=this.f
if(J.aV(t,0))return": no indices are valid"
return": index should be less than "+H.z(t)},
gm:function(a){return this.f}}
P.V.prototype={
A:function(a){return"Unsupported operation: "+this.a}}
P.eP.prototype={
A:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.z(t):"UnimplementedError"}}
P.aN.prototype={
A:function(a){return"Bad state: "+this.a}}
P.bN.prototype={
A:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.z(P.we(t))+"."}}
P.nW.prototype={
A:function(a){return"Out of Memory"},
gaM:function(){return},
$iseo:1}
P.k9.prototype={
A:function(a){return"Stack Overflow"},
gaM:function(){return},
$iseo:1}
P.lu.prototype={
A:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.z(t)+"' during its initialization"}}
P.qB.prototype={
A:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.z(t)}}
P.bQ.prototype={
A:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.z(t):"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.z(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a4()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.I(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a8(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a6(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.z(r-o+1)+")\n"):s+(" (at character "+H.z(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.a_(q,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(r-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-r<75){i=k-75
j=k
g=""}else{i=r-36
j=r+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.c.I(q,i,j)
return s+h+f+g+"\n"+C.c.ar(" ",r-i+h.length)+"^\n"}}
P.lM.prototype={
A:function(a){return"Expando:"+H.z(this.a)},
n:function(a,b){var t,s
t=this.bR
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.b1(P.e1(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.v2(b,"expando$values")
return s==null?null:H.v2(s,t)},
i:function(a,b,c){var t,s
t=this.bR
if(typeof t!=="string")t.set(b,c)
else{s=H.v2(b,"expando$values")
if(s==null){s=new P.ad()
H.xq(b,"expando$values",s)}H.xq(s,t,c)}},
gH:function(a){return this.a}}
P.C.prototype={$isbJ:1,
$asbJ:function(){return[P.dv]}}
P.o.prototype={
az:function(a,b){return H.dB(this,b,H.aw(this,"o",0),null)},
cb:function(a,b){return new H.eT(this,b,[H.aw(this,"o",0)])},
Y:function(a,b){var t
for(t=this.gW(this);t.G();)if(J.aV(t.gP(),b))return!0
return!1},
a0:function(a,b){var t
for(t=this.gW(this);t.G();)b.$1(t.gP())},
a3:function(a,b){return P.db(this,!0,H.aw(this,"o",0))},
ao:function(a){return this.a3(a,!0)},
gm:function(a){var t,s
t=this.gW(this)
for(s=0;t.G();)++s
return s},
gU:function(a){return!this.gW(this).G()},
gF:function(a){var t=this.gW(this)
if(!t.G())throw H.h(H.dp())
return t.gP()},
gbe:function(a){var t,s
t=this.gW(this)
if(!t.G())throw H.h(H.dp())
s=t.gP()
if(t.G())throw H.h(H.FM())
return s},
T:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.zk("index"))
if(b<0)H.b1(P.bG(b,0,null,"index",null))
for(t=this.gW(this),s=0;t.G();){r=t.gP()
if(b===s)return r;++s}throw H.h(P.bB(b,this,"index",null,s))},
A:function(a){return P.uu(this,"(",")")},
$aso:null}
P.jG.prototype={}
P.p.prototype={$asp:null,$ist:1,$ast:null,$iso:1,$aso:null}
P.aZ.prototype={$asaZ:null}
P.cV.prototype={
ga7:function(a){return P.ad.prototype.ga7.call(this,this)},
A:function(a){return"null"}}
P.dv.prototype={$isbJ:1,
$asbJ:function(){return[P.dv]}}
P.ad.prototype={constructor:P.ad,$isad:1,
S:function(a,b){return this===b},
ga7:function(a){return H.eH(this)},
A:function(a){return H.od(this)},
gae:function(a){return new H.dX(H.kG(this),null)},
toString:function(){return this.A(this)}}
P.dC.prototype={}
P.ed.prototype={}
P.dV.prototype={}
P.x.prototype={$isbJ:1,
$asbJ:function(){return[P.x]}}
P.cg.prototype={
gm:function(a){return this.O.length},
gU:function(a){return this.O.length===0},
A:function(a){var t=this.O
return t.charCodeAt(0)==0?t:t},
gO:function(){return this.O}}
P.eS.prototype={}
P.pM.prototype={
$2:function(a,b){var t,s,r,q
t=J.aU(b)
s=t.bj(b,"=")
if(s===-1){if(!t.S(b,""))J.kJ(a,P.ru(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.I(b,0,s)
q=C.c.aa(b,s+1)
t=this.a
J.kJ(a,P.ru(r,0,r.length,t,!0),P.ru(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pI.prototype={
$2:function(a,b){throw H.h(new P.bQ("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.x,P.C]}}}
P.pK.prototype={
$2:function(a,b){throw H.h(new P.bQ("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.x],opt:[,]}}}
P.pL.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.eI(C.c.I(this.a,a,b),16,null)
s=J.dH(t)
if(s.a4(t,0)||s.aA(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.C,args:[P.C,P.C]}}}
P.kz.prototype={
geI:function(){return this.b},
gcR:function(a){var t=this.c
if(t==null)return""
if(C.c.a9(t,"["))return C.c.I(t,1,t.length-1)
return t},
gcY:function(a){var t=this.d
if(t==null)return P.y1(this.a)
return t},
gd0:function(a){var t=this.f
return t==null?"":t},
gee:function(){var t=this.r
return t==null?"":t},
gbE:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.x
s=new P.eR(P.xP(t==null?"":t,C.o),[s,s])
this.Q=s
t=s}return t},
geh:function(){return this.c!=null},
gej:function(){return this.f!=null},
gei:function(){return this.r!=null},
A:function(a){var t=this.y
if(t==null){t=this.dK()
this.y=t}return t},
dK:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.z(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.z(s)}else t=s
t+=H.z(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
S:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.ap(b)
if(!!t.$iseS){if(this.a===b.gd9())if(this.c!=null===b.geh()){s=this.b
r=b.geI()
if(s==null?r==null:s===r){s=this.gcR(this)
r=t.gcR(b)
if(s==null?r==null:s===r)if(J.aV(this.gcY(this),t.gcY(b)))if(J.aV(this.e,t.ges(b))){s=this.f
r=s==null
if(!r===b.gej()){if(r)s=""
if(s===t.gd0(b)){t=this.r
s=t==null
if(!s===b.gei()){if(s)t=""
t=t===b.gee()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga7:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dK()
this.y=t}t=C.c.ga7(t)
this.z=t}return t},
$iseS:1,
gd9:function(){return this.a},
ges:function(a){return this.e}}
P.rR.prototype={
$1:function(a){throw H.h(new P.bQ("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.pH.prototype={
geG:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
t=t[0]+1
r=J.aU(s)
q=r.b2(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fH(s,o,p,C.k,!1)
if(n==null)n=r.I(s,o,p)
p=q}else n=null
m=P.fH(s,t,p,C.H,!1)
t=new P.qp(this,"data",null,null,null,m==null?r.I(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
A:function(a){var t,s
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
return t[0]===-1?"data:"+H.z(s):s}}
P.rK.prototype={
$1:function(a){return new Uint8Array(H.cG(96))},
$S:function(){return{func:1,args:[,]}}}
P.rJ.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.u(t,a)
t=t[a]
J.yT(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.dg,args:[,,]}}}
P.rL.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.cZ(a),r=0;r<t;++r)s.i(a,C.c.a6(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.dg,P.x,P.C]}}}
P.rM.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a6(b,0),s=C.c.a6(b,1),r=J.cZ(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.dg,P.x,P.C]}}}
P.rh.prototype={
geh:function(){return this.c>0},
gej:function(){var t=this.f
if(typeof t!=="number")return t.a4()
return t<this.r},
gei:function(){return this.r<this.a.length},
gd9:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.a9(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.a9(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.a9(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.a9(this.a,"package")){this.x="package"
t="package"}else{t=C.c.I(this.a,0,t)
this.x=t}return t},
geI:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.I(this.a,s,t-1):""},
gcR:function(a){var t=this.c
return t>0?C.c.I(this.a,t,this.d):""},
gcY:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.X()
s=this.e
if(typeof s!=="number")return H.a8(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.X()
return H.eI(C.c.I(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.a9(this.a,"http"))return 80
if(t===5&&C.c.a9(this.a,"https"))return 443
return 0},
ges:function(a){return C.c.I(this.a,this.e,this.f)},
gd0:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a4()
return t<s?C.c.I(this.a,t+1,s):""},
gee:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.aa(s,t+1):""},
gbE:function(){var t=this.f
if(typeof t!=="number")return t.a4()
if(t>=this.r)return C.a6
t=P.x
return new P.eR(P.xP(this.gd0(this),C.o),[t,t])},
ga7:function(a){var t=this.y
if(t==null){t=C.c.ga7(this.a)
this.y=t}return t},
S:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.ap(b)
if(!!t.$iseS)return this.a===t.A(b)
return!1},
A:function(a){return this.a},
$iseS:1}
P.qp.prototype={}
W.aL.prototype={}
W.ek.prototype={
A:function(a){return String(a)},
$isek:1,
$isf:1,
ga8:function(a){return a.href},
sah:function(a,b){return a.type=b},
sa8:function(a,b){return a.href=b}}
W.kR.prototype={
A:function(a){return String(a)},
$isf:1,
ga8:function(a){return a.href},
sa8:function(a,b){return a.href=b}}
W.f3.prototype={$isf3:1,$iscb:1,$isaf:1,$isad:1}
W.cO.prototype={$isad:1}
W.kZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cO]},
$ist:1,
$ast:function(){return[W.cO]},
$iso:1,
$aso:function(){return[W.cO]},
$isaF:1,
$asaF:function(){return[W.cO]},
$isay:1,
$asay:function(){return[W.cO]}}
W.h9.prototype={
$asp:function(){return[W.cO]},
$ast:function(){return[W.cO]},
$aso:function(){return[W.cO]},
$isp:1,
$ist:1,
$iso:1}
W.hc.prototype={
$asp:function(){return[W.cO]},
$ast:function(){return[W.cO]},
$aso:function(){return[W.cO]},
$isp:1,
$ist:1,
$iso:1}
W.l2.prototype={
ga8:function(a){return a.href},
sa8:function(a,b){return a.href=b}}
W.f5.prototype={$isf5:1}
W.f6.prototype={$isf6:1,$isf:1}
W.fZ.prototype={$isfZ:1,
gH:function(a){return a.name},
gaH:function(a){return a.value},
sah:function(a,b){return a.type=b}}
W.em.prototype={$isf:1,
gm:function(a){return a.length}}
W.lf.prototype={$isf:1}
W.iu.prototype={
cP:function(a,b){return typeof console!="undefined"?console.error(b):null},
bd:function(a){return typeof console!="undefined"?console.group(a):null},
el:function(a){return typeof console!="undefined"?console.info(a):null},
iq:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.h3.prototype={
gH:function(a){return a.name}}
W.lm.prototype={
gaC:function(a){return a.style}}
W.ln.prototype={
ga8:function(a){return a.href}}
W.h4.prototype={
gaC:function(a){return a.style}}
W.h5.prototype={
gH:function(a){return a.name}}
W.lo.prototype={
gaC:function(a){return a.style}}
W.bP.prototype={$isbP:1,$isad:1}
W.f9.prototype={
bL:function(a,b){var t=this.fD(a,b)
return t!=null?t:""},
fD:function(a,b){if(W.zP(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.zT()+b)},
L:function(a,b){return a.item(b)},
gbi:function(a){return a.content},
gbu:function(a){return a.display},
sbu:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iX.prototype={}
W.ql.prototype={
bL:function(a,b){var t=this.b
return J.z5(t.gF(t),b)},
h0:function(a,b){var t
for(t=this.a,t=new H.eD(t,t.gm(t),0,null,[H.Q(t,0)]);t.G();)t.d.style[a]=b},
sbu:function(a,b){this.h0("display",b)},
fe:function(a){var t=P.db(this.a,!0,null)
this.b=new H.eF(t,new W.qm(),[H.Q(t,0),null])}}
W.jU.prototype={}
W.qm.prototype={
$1:function(a){return J.tp(a)},
$S:function(){return{func:1,args:[,]}}}
W.iw.prototype={
gbi:function(a){return this.bL(a,"content")},
gbu:function(a){return this.bL(a,"display")}}
W.lp.prototype={
gaC:function(a){return a.style}}
W.lq.prototype={
gaC:function(a){return a.style}}
W.lv.prototype={
gcQ:function(a){return a.files}}
W.fa.prototype={$isfa:1,$isad:1}
W.ix.prototype={
bX:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
L:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.en.prototype={$isen:1}
W.iz.prototype={$isf:1}
W.iA.prototype={
gH:function(a){return a.name}}
W.ly.prototype={
gH:function(a){var t=a.name
if(P.wb()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.wb()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
A:function(a){return String(a)}}
W.iB.prototype={
A:function(a){return"Rectangle ("+H.z(a.left)+", "+H.z(a.top)+") "+H.z(this.gb7(a))+" x "+H.z(this.gb1(a))},
S:function(a,b){var t
if(b==null)return!1
t=J.ap(b)
if(!t.$isbW)return!1
return a.left===t.gc2(b)&&a.top===t.gc8(b)&&this.gb7(a)===t.gb7(b)&&this.gb1(a)===t.gb1(b)},
ga7:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb7(a)
q=this.gb1(a)
return W.y_(W.eY(W.eY(W.eY(W.eY(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gb1:function(a){return a.height},
gc2:function(a){return a.left},
gc8:function(a){return a.top},
gb7:function(a){return a.width},
$isbW:1,
$asbW:function(){}}
W.iC.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.x]},
$ist:1,
$ast:function(){return[P.x]},
$iso:1,
$aso:function(){return[P.x]},
$isaF:1,
$asaF:function(){return[P.x]},
$isay:1,
$asay:function(){return[P.x]}}
W.iY.prototype={
$asp:function(){return[P.x]},
$ast:function(){return[P.x]},
$aso:function(){return[P.x]},
$isp:1,
$ist:1,
$iso:1}
W.jh.prototype={
$asp:function(){return[P.x]},
$ast:function(){return[P.x]},
$aso:function(){return[P.x]},
$isp:1,
$ist:1,
$iso:1}
W.iD.prototype={
L:function(a,b){return a.item(b)}}
W.iE.prototype={
h:function(a,b){return a.add(b)},
Y:function(a,b){return a.contains(b)},
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.kq.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot modify list"))},
sm:function(a,b){throw H.h(new P.V("Cannot modify list"))},
gF:function(a){return C.a7.gF(this.a)},
gaC:function(a){return W.Ho(this)},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
W.cb.prototype={
ge7:function(a){return new W.i8(a)},
ge9:function(a){return new W.qv(a)},
ghn:function(a){return new W.ko(new W.i8(a))},
A:function(a){return a.localName},
em:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
ax:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.wd
if(t==null){t=H.a([],[W.ea])
s=new W.jS(t)
t.push(W.xY(null))
t.push(W.y0())
$.wd=s
d=s}else d=t
t=$.wc
if(t==null){t=new W.kA(d)
$.wc=t
c=t}else{t.a=d
c=t}}if($.e4==null){t=document
s=t.implementation.createHTMLDocument("")
$.e4=s
$.tE=s.createRange()
s=$.e4
s.toString
r=s.createElement("base")
J.zb(r,t.baseURI)
$.e4.head.appendChild(r)}t=$.e4
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.e4
if(!!this.$isf6)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.e4.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.Y(C.a2,a.tagName)){$.tE.selectNodeContents(q)
p=$.tE.createContextualFragment(b)}else{q.innerHTML=b
p=$.e4.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.e4.body
if(q==null?t!=null:q!==t)J.z8(q)
c.cc(p)
document.adoptNode(p)
return p},
hm:function(a,b,c){return this.ax(a,b,c,null)},
ce:function(a,b,c,d){a.textContent=null
a.appendChild(this.ax(a,b,c,d))},
da:function(a,b){return this.ce(a,b,null,null)},
$iscb:1,
$isaf:1,
$isad:1,
$isf:1,
gaC:function(a){return a.style},
gdM:function(a){return a.namespaceURI},
gil:function(a){return a.tagName}}
W.rQ.prototype={
$1:function(a){return!!J.ap(a).$iscb},
$S:function(){return{func:1,args:[,]}}}
W.lE.prototype={
gH:function(a){return a.name},
sah:function(a,b){return a.type=b}}
W.h8.prototype={
gH:function(a){return a.name}}
W.lK.prototype={
gaq:function(a){return a.error}}
W.U.prototype={$isU:1,$isad:1}
W.aG.prototype={
h8:function(a,b,c,d){if(c!=null)this.bO(a,b,c,d)},
ic:function(a,b,c,d){if(c!=null)this.fW(a,b,c,!1)},
bO:function(a,b,c,d){return a.addEventListener(b,H.du(c,1),d)},
fW:function(a,b,c,d){return a.removeEventListener(b,H.du(c,1),!1)}}
W.mc.prototype={
gH:function(a){return a.name}}
W.ck.prototype={$isck:1,$isad:1,
gH:function(a){return a.name}}
W.fi.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isfi:1,
$isaF:1,
$asaF:function(){return[W.ck]},
$isay:1,
$asay:function(){return[W.ck]},
$isp:1,
$asp:function(){return[W.ck]},
$ist:1,
$ast:function(){return[W.ck]},
$iso:1,
$aso:function(){return[W.ck]}}
W.iZ.prototype={
$asp:function(){return[W.ck]},
$ast:function(){return[W.ck]},
$aso:function(){return[W.ck]},
$isp:1,
$ist:1,
$iso:1}
W.ji.prototype={
$asp:function(){return[W.ck]},
$ast:function(){return[W.ck]},
$aso:function(){return[W.ck]},
$isp:1,
$ist:1,
$iso:1}
W.md.prototype={
gaq:function(a){return a.error}}
W.me.prototype={
gH:function(a){return a.name}}
W.mf.prototype={
gaq:function(a){return a.error},
gm:function(a){return a.length}}
W.mh.prototype={
gaC:function(a){return a.style},
gd5:function(a){return a.weight}}
W.mi.prototype={
h:function(a,b){return a.add(b)},
iz:function(a,b,c){return a.forEach(H.du(b,3),c)},
a0:function(a,b){b=H.du(b,3)
return a.forEach(b)}}
W.iT.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gH:function(a){return a.name}}
W.cu.prototype={$iscu:1,$isad:1}
W.ms.prototype={
gm:function(a){return a.length}}
W.fj.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$iso:1,
$aso:function(){return[W.af]},
$isaF:1,
$asaF:function(){return[W.af]},
$isay:1,
$asay:function(){return[W.af]}}
W.j_.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]},
$isp:1,
$ist:1,
$iso:1}
W.jj.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]},
$isp:1,
$ist:1,
$iso:1}
W.iV.prototype={
L:function(a,b){return a.item(b)}}
W.e9.prototype={
iI:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
i_:function(a,b,c,d){return a.open(b,c,d)},
gih:function(a){return W.HQ(a.response)},
b9:function(a,b){return a.send(b)},
$ise9:1,
$isad:1,
gii:function(a){return a.responseText}}
W.mv.prototype={
$1:function(a){return J.z2(a)},
$S:function(){return{func:1,args:[W.e9]}}}
W.mw.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.as()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aE(0,t)
else p.bs(a)},
$S:function(){return{func:1,args:[,]}}}
W.hp.prototype={}
W.my.prototype={
gH:function(a){return a.name}}
W.hq.prototype={$ishq:1}
W.ew.prototype={$isew:1,$iscb:1,$isaf:1,$isad:1,
aE:function(a,b){return a.complete.$1(b)}}
W.mF.prototype={$iscb:1,$isf:1,$isaf:1,
gcQ:function(a){return a.files},
gH:function(a){return a.name},
gaH:function(a){return a.value},
sev:function(a,b){return a.placeholder=b},
sah:function(a,b){return a.type=b}}
W.n2.prototype={
gH:function(a){return a.name}}
W.n4.prototype={
gaH:function(a){return a.value}}
W.hy.prototype={
h:function(a,b){return a.add(b)}}
W.hz.prototype={$ishz:1,
ga8:function(a){return a.href},
sa8:function(a,b){return a.href=b},
sah:function(a,b){return a.type=b}}
W.nk.prototype={
A:function(a){return String(a)},
ga8:function(a){return a.href}}
W.np.prototype={
gH:function(a){return a.name}}
W.hH.prototype={
gaq:function(a){return a.error}}
W.jN.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nt.prototype={
sah:function(a,b){return a.type=b}}
W.nu.prototype={
sah:function(a,b){return a.type=b}}
W.nv.prototype={
gbi:function(a){return a.content},
gH:function(a){return a.name}}
W.nw.prototype={
gaH:function(a){return a.value}}
W.nx.prototype={
iv:function(a,b,c){return a.send(b,c)},
b9:function(a,b){return a.send(b)}}
W.hI.prototype={
gH:function(a){return a.name}}
W.cw.prototype={$iscw:1,$isad:1}
W.jO.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaF:1,
$asaF:function(){return[W.cw]},
$isay:1,
$asay:function(){return[W.cw]},
$isp:1,
$asp:function(){return[W.cw]},
$ist:1,
$ast:function(){return[W.cw]},
$iso:1,
$aso:function(){return[W.cw]}}
W.j9.prototype={
$asp:function(){return[W.cw]},
$ast:function(){return[W.cw]},
$aso:function(){return[W.cw]},
$isp:1,
$ist:1,
$iso:1}
W.jt.prototype={
$asp:function(){return[W.cw]},
$ast:function(){return[W.cw]},
$aso:function(){return[W.cw]},
$isp:1,
$ist:1,
$iso:1}
W.nK.prototype={$isf:1}
W.nL.prototype={
gH:function(a){return a.name}}
W.d8.prototype={
gF:function(a){var t=this.a.firstChild
if(t==null)throw H.h(new P.aN("No elements"))
return t},
gbe:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.h(new P.aN("No elements"))
if(s>1)throw H.h(new P.aN("More than one element"))
return t.firstChild},
h:function(a,b){this.a.appendChild(b)},
aw:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.u(s,b)
t.replaceChild(c,s[b])},
gW:function(a){var t=this.a.childNodes
return new W.iR(t,t.length,-1,null,[H.aw(t,"bw",0)])},
a5:function(a,b,c,d,e){throw H.h(new P.V("Cannot setRange on Node list"))},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)},
by:function(a,b,c,d){throw H.h(new P.V("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
sm:function(a,b){throw H.h(new P.V("Cannot set length on immutable List."))},
n:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$ashB:function(){return[W.af]},
$asfu:function(){return[W.af]},
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]}}
W.af.prototype={
ghX:function(a){return new W.d8(a)},
ia:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
A:function(a){var t=a.nodeValue
return t==null?this.eZ(a):t},
Y:function(a,b){return a.contains(b)},
$isaf:1,
$isad:1,
gc4:function(a){return a.parentNode},
gcZ:function(a){return a.previousSibling}}
W.jR.prototype={
d_:function(a){return a.previousNode()}}
W.hP.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$iso:1,
$aso:function(){return[W.af]},
$isaF:1,
$asaF:function(){return[W.af]},
$isay:1,
$asay:function(){return[W.af]}}
W.ja.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]},
$isp:1,
$ist:1,
$iso:1}
W.ju.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]},
$isp:1,
$ist:1,
$iso:1}
W.nQ.prototype={
sah:function(a,b){return a.type=b}}
W.nR.prototype={
gH:function(a){return a.name},
sah:function(a,b){return a.type=b}}
W.nV.prototype={
gaH:function(a){return a.value}}
W.nX.prototype={
gH:function(a){return a.name},
gaH:function(a){return a.value}}
W.o0.prototype={
gH:function(a){return a.name},
gaH:function(a){return a.value}}
W.o2.prototype={$isf:1}
W.eb.prototype={
gH:function(a){return a.name}}
W.o7.prototype={
gm:function(a){return a.length}}
W.cm.prototype={
L:function(a,b){return a.item(b)},
$iscm:1,
$isad:1,
gm:function(a){return a.length},
gH:function(a){return a.name}}
W.jZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cm]},
$ist:1,
$ast:function(){return[W.cm]},
$iso:1,
$aso:function(){return[W.cm]},
$isaF:1,
$asaF:function(){return[W.cm]},
$isay:1,
$asay:function(){return[W.cm]}}
W.jb.prototype={
$asp:function(){return[W.cm]},
$ast:function(){return[W.cm]},
$aso:function(){return[W.cm]},
$isp:1,
$ist:1,
$iso:1}
W.jv.prototype={
$asp:function(){return[W.cm]},
$ast:function(){return[W.cm]},
$aso:function(){return[W.cm]},
$isp:1,
$ist:1,
$iso:1}
W.oc.prototype={
b9:function(a,b){return a.send(b)}}
W.of.prototype={
gaH:function(a){return a.value}}
W.k2.prototype={
b9:function(a,b){return a.send(b)}}
W.k3.prototype={
sah:function(a,b){return a.type=b}}
W.fx.prototype={$isfx:1,$iscb:1,$isaf:1,$isad:1,
sah:function(a,b){return a.type=b}}
W.k4.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gH:function(a){return a.name},
gaH:function(a){return a.value}}
W.oA.prototype={
gH:function(a){return a.name}}
W.oD.prototype={$isf:1}
W.oE.prototype={
gH:function(a){return a.name}}
W.oF.prototype={
gH:function(a){return a.name}}
W.cx.prototype={$iscx:1,$isad:1}
W.k6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cx]},
$ist:1,
$ast:function(){return[W.cx]},
$iso:1,
$aso:function(){return[W.cx]},
$isaF:1,
$asaF:function(){return[W.cx]},
$isay:1,
$asay:function(){return[W.cx]}}
W.ha.prototype={
$asp:function(){return[W.cx]},
$ast:function(){return[W.cx]},
$aso:function(){return[W.cx]},
$isp:1,
$ist:1,
$iso:1}
W.hd.prototype={
$asp:function(){return[W.cx]},
$ast:function(){return[W.cx]},
$aso:function(){return[W.cx]},
$isp:1,
$ist:1,
$iso:1}
W.oI.prototype={
sah:function(a,b){return a.type=b}}
W.hW.prototype={$ishW:1}
W.cy.prototype={$iscy:1,$isad:1,
gd5:function(a){return a.weight}}
W.k7.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cy]},
$ist:1,
$ast:function(){return[W.cy]},
$iso:1,
$aso:function(){return[W.cy]},
$isaF:1,
$asaF:function(){return[W.cy]},
$isay:1,
$asay:function(){return[W.cy]}}
W.jc.prototype={
$asp:function(){return[W.cy]},
$ast:function(){return[W.cy]},
$aso:function(){return[W.cy]},
$isp:1,
$ist:1,
$iso:1}
W.jw.prototype={
$asp:function(){return[W.cy]},
$ast:function(){return[W.cy]},
$aso:function(){return[W.cy]},
$isp:1,
$ist:1,
$iso:1}
W.fy.prototype={$isfy:1,$isad:1}
W.oK.prototype={
gaq:function(a){return a.error}}
W.co.prototype={
L:function(a,b){return a.item(b)},
$isco:1,
$isad:1,
gm:function(a){return a.length}}
W.oL.prototype={
gH:function(a){return a.name}}
W.oM.prototype={
gH:function(a){return a.name}}
W.oS.prototype={
V:function(a,b){return a.getItem(b)!=null},
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a0:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gU:function(a){return a.key(0)==null},
$isaZ:1,
$asaZ:function(){return[P.x,P.x]}}
W.pe.prototype={
sah:function(a,b){return a.type=b}}
W.cq.prototype={$iscq:1,$isad:1,
ga8:function(a){return a.href}}
W.ef.prototype={}
W.ka.prototype={
ax:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.cg(a,b,c,d)
t=W.zU("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.d8(s).aw(0,J.z_(t))
return s}}
W.pk.prototype={
ax:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.cg(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.ax(t.createElement("table"),b,c,d)
t.toString
t=new W.d8(t)
r=t.gbe(t)
r.toString
t=new W.d8(r)
q=t.gbe(t)
s.toString
q.toString
new W.d8(s).aw(0,new W.d8(q))
return s}}
W.pl.prototype={
ax:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cg(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.ax(t.createElement("table"),b,c,d)
t.toString
t=new W.d8(t)
r=t.gbe(t)
s.toString
r.toString
new W.d8(s).aw(0,new W.d8(r))
return s}}
W.i0.prototype={
ce:function(a,b,c,d){var t
a.textContent=null
t=this.ax(a,b,c,d)
a.content.appendChild(t)},
da:function(a,b){return this.ce(a,b,null,null)},
$isi0:1,
gbi:function(a){return a.content}}
W.pp.prototype={
gH:function(a){return a.name},
gaH:function(a){return a.value},
sev:function(a,b){return a.placeholder=b}}
W.cW.prototype={$isad:1}
W.cM.prototype={$isad:1}
W.ps.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaF:1,
$asaF:function(){return[W.cM]},
$isay:1,
$asay:function(){return[W.cM]},
$isp:1,
$asp:function(){return[W.cM]},
$ist:1,
$ast:function(){return[W.cM]},
$iso:1,
$aso:function(){return[W.cM]}}
W.jd.prototype={
$asp:function(){return[W.cM]},
$ast:function(){return[W.cM]},
$aso:function(){return[W.cM]},
$isp:1,
$ist:1,
$iso:1}
W.jx.prototype={
$asp:function(){return[W.cM]},
$ast:function(){return[W.cM]},
$aso:function(){return[W.cM]},
$isp:1,
$ist:1,
$iso:1}
W.pt.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaF:1,
$asaF:function(){return[W.cW]},
$isay:1,
$asay:function(){return[W.cW]},
$isp:1,
$asp:function(){return[W.cW]},
$ist:1,
$ast:function(){return[W.cW]},
$iso:1,
$aso:function(){return[W.cW]}}
W.hb.prototype={
$asp:function(){return[W.cW]},
$ast:function(){return[W.cW]},
$aso:function(){return[W.cW]},
$isp:1,
$ist:1,
$iso:1}
W.he.prototype={
$asp:function(){return[W.cW]},
$ast:function(){return[W.cW]},
$aso:function(){return[W.cW]},
$isp:1,
$ist:1,
$iso:1}
W.px.prototype={
gm:function(a){return a.length}}
W.cA.prototype={$iscA:1,$isad:1}
W.kb.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cA]},
$ist:1,
$ast:function(){return[W.cA]},
$iso:1,
$aso:function(){return[W.cA]},
$isaF:1,
$asaF:function(){return[W.cA]},
$isay:1,
$asay:function(){return[W.cA]}}
W.je.prototype={
$asp:function(){return[W.cA]},
$ast:function(){return[W.cA]},
$aso:function(){return[W.cA]},
$isp:1,
$ist:1,
$iso:1}
W.jy.prototype={
$asp:function(){return[W.cA]},
$ast:function(){return[W.cA]},
$aso:function(){return[W.cA]},
$isp:1,
$ist:1,
$iso:1}
W.fA.prototype={$isfA:1,$isad:1}
W.kc.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.eg.prototype={}
W.kd.prototype={
i0:function(a){return a.parentNode()},
d_:function(a){return a.previousNode()}}
W.pN.prototype={
A:function(a){return String(a)},
$isf:1,
ga8:function(a){return a.href}}
W.pR.prototype={
gm:function(a){return a.length}}
W.fB.prototype={$isfB:1,$isad:1}
W.ke.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pW.prototype={
b9:function(a,b){return a.send(b)}}
W.kh.prototype={$isf:1,
gH:function(a){return a.name}}
W.q2.prototype={$isf:1}
W.eU.prototype={$isf:1}
W.fC.prototype={$isfC:1,$isaf:1,$isad:1,
gH:function(a){return a.name},
gdM:function(a){return a.namespaceURI}}
W.qk.prototype={
A:function(a){return"Rectangle ("+H.z(a.left)+", "+H.z(a.top)+") "+H.z(a.width)+" x "+H.z(a.height)},
S:function(a,b){var t,s,r
if(b==null)return!1
t=J.ap(b)
if(!t.$isbW)return!1
s=a.left
r=t.gc2(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc8(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb7(b)
if(s==null?r==null:s===r){s=a.height
t=t.gb1(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga7:function(a){var t,s,r,q
t=J.dI(a.left)
s=J.dI(a.top)
r=J.dI(a.width)
q=J.dI(a.height)
return W.y_(W.eY(W.eY(W.eY(W.eY(0,t),s),r),q))},
$isbW:1,
$asbW:function(){},
gb1:function(a){return a.height},
gc2:function(a){return a.left},
gc8:function(a){return a.top},
gb7:function(a){return a.width}}
W.i7.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaF:1,
$asaF:function(){return[P.bW]},
$isay:1,
$asay:function(){return[P.bW]},
$isp:1,
$asp:function(){return[P.bW]},
$ist:1,
$ast:function(){return[P.bW]},
$iso:1,
$aso:function(){return[P.bW]}}
W.jf.prototype={
$asp:function(){return[P.bW]},
$ast:function(){return[P.bW]},
$aso:function(){return[P.bW]},
$isp:1,
$ist:1,
$iso:1}
W.jz.prototype={
$asp:function(){return[P.bW]},
$ast:function(){return[P.bW]},
$aso:function(){return[P.bW]},
$isp:1,
$ist:1,
$iso:1}
W.kn.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bP]},
$ist:1,
$ast:function(){return[W.bP]},
$iso:1,
$aso:function(){return[W.bP]},
$isaF:1,
$asaF:function(){return[W.bP]},
$isay:1,
$asay:function(){return[W.bP]}}
W.jg.prototype={
$asp:function(){return[W.bP]},
$ast:function(){return[W.bP]},
$aso:function(){return[W.bP]},
$isp:1,
$ist:1,
$iso:1}
W.jA.prototype={
$asp:function(){return[W.bP]},
$ast:function(){return[W.bP]},
$aso:function(){return[W.bP]},
$isp:1,
$ist:1,
$iso:1}
W.qt.prototype={$isf:1}
W.qu.prototype={
gb1:function(a){return a.height},
gb7:function(a){return a.width}}
W.ks.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaF:1,
$asaF:function(){return[W.cu]},
$isay:1,
$asay:function(){return[W.cu]},
$isp:1,
$asp:function(){return[W.cu]},
$ist:1,
$ast:function(){return[W.cu]},
$iso:1,
$aso:function(){return[W.cu]}}
W.j0.prototype={
$asp:function(){return[W.cu]},
$ast:function(){return[W.cu]},
$aso:function(){return[W.cu]},
$isp:1,
$ist:1,
$iso:1}
W.jk.prototype={
$asp:function(){return[W.cu]},
$ast:function(){return[W.cu]},
$aso:function(){return[W.cu]},
$isp:1,
$ist:1,
$iso:1}
W.qP.prototype={$isf:1}
W.ih.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$iso:1,
$aso:function(){return[W.af]},
$isaF:1,
$asaF:function(){return[W.af]},
$isay:1,
$asay:function(){return[W.af]}}
W.j1.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]},
$isp:1,
$ist:1,
$iso:1}
W.jl.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]},
$isp:1,
$ist:1,
$iso:1}
W.re.prototype={$isf:1}
W.kv.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.co]},
$ist:1,
$ast:function(){return[W.co]},
$iso:1,
$aso:function(){return[W.co]},
$isaF:1,
$asaF:function(){return[W.co]},
$isay:1,
$asay:function(){return[W.co]}}
W.j2.prototype={
$asp:function(){return[W.co]},
$ast:function(){return[W.co]},
$aso:function(){return[W.co]},
$isp:1,
$ist:1,
$iso:1}
W.jm.prototype={
$asp:function(){return[W.co]},
$ast:function(){return[W.co]},
$aso:function(){return[W.co]},
$isp:1,
$ist:1,
$iso:1}
W.kx.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaF:1,
$asaF:function(){return[W.cq]},
$isay:1,
$asay:function(){return[W.cq]},
$isp:1,
$asp:function(){return[W.cq]},
$ist:1,
$ast:function(){return[W.cq]},
$iso:1,
$aso:function(){return[W.cq]}}
W.j3.prototype={
$asp:function(){return[W.cq]},
$ast:function(){return[W.cq]},
$aso:function(){return[W.cq]},
$isp:1,
$ist:1,
$iso:1}
W.jn.prototype={
$asp:function(){return[W.cq]},
$ast:function(){return[W.cq]},
$aso:function(){return[W.cq]},
$isp:1,
$ist:1,
$iso:1}
W.rA.prototype={$isf:1}
W.rB.prototype={$isf:1}
W.qg.prototype={
a0:function(a,b){var t,s,r,q,p
for(t=this.gay(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.bH)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gay:function(a){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.x])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.u(t,q)
p=t[q]
o=J.aK(p)
if(o.gdM(p)==null)s.push(o.gH(p))}return s},
gU:function(a){return this.gay(this).length===0},
$isaZ:1,
$asaZ:function(){return[P.x,P.x]},
gdI:function(){return this.a}}
W.i8.prototype={
V:function(a,b){return this.a.hasAttribute(b)},
n:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gay(this).length}}
W.ko.prototype={
V:function(a,b){return this.a.a.hasAttribute("data-"+this.bp(b))},
n:function(a,b){return this.a.a.getAttribute("data-"+this.bp(b))},
i:function(a,b,c){this.a.a.setAttribute("data-"+this.bp(b),c)},
a0:function(a,b){this.a.a0(0,new W.qn(this,b))},
gay:function(a){var t=H.a([],[P.x])
this.a.a0(0,new W.qo(this,t))
return t},
gm:function(a){return this.gay(this).length},
gU:function(a){return this.gay(this).length===0},
h3:function(a,b){var t,s,r,q,p
t=a.split("-")
for(s=1;s<t.length;++s){r=t[s]
q=J.aU(r)
p=q.gm(r)
if(typeof p!=="number")return p.aA()
if(p>0){q=J.vV(q.n(r,0))+q.aa(r,1)
if(s>=t.length)return H.u(t,s)
t[s]=q}}return C.b.aR(t,"")},
e0:function(a){return this.h3(a,!1)},
bp:function(a){var t,s,r,q,p
t=J.aU(a)
s=0
r=""
while(!0){q=t.gm(a)
if(typeof q!=="number")return H.a8(q)
if(!(s<q))break
p=J.tq(t.n(a,s))
r=(!J.aV(t.n(a,s),p)&&s>0?r+"-":r)+p;++s}return r.charCodeAt(0)==0?r:r},
$isaZ:1,
$asaZ:function(){return[P.x,P.x]}}
W.qn.prototype={
$2:function(a,b){if(J.cH(a).a9(a,"data-"))this.b.$2(this.a.e0(C.c.aa(a,5)),b)},
$S:function(){return{func:1,args:[P.x,P.x]}}}
W.qo.prototype={
$2:function(a,b){if(J.cH(a).a9(a,"data-"))this.b.push(this.a.e0(C.c.aa(a,5)))},
$S:function(){return{func:1,args:[P.x,P.x]}}}
W.qv.prototype={
aF:function(){var t,s,r,q,p
t=P.a0(null,null,null,P.x)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bH)(s),++q){p=J.tr(s[q])
if(p.length!==0)t.h(0,p)}return t},
eJ:function(a){this.a.className=a.aR(0," ")},
gm:function(a){return this.a.classList.length},
gU:function(a){return this.a.classList.length===0},
Y:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
gdI:function(){return this.a}}
W.qy.prototype={
aS:function(a,b,c,d){return W.fD(this.a,this.b,a,!1,H.Q(this,0))},
ep:function(a,b,c){return this.aS(a,null,b,c)}}
W.i9.prototype={}
W.qz.prototype={
c_:function(a){if(this.b==null)return
this.e3()
this.b=null
this.d=null
return},
cW:function(a,b){if(this.b==null)return;++this.a
this.e3()},
eu:function(a){return this.cW(a,null)},
ey:function(a){if(this.b==null||this.a<=0)return;--this.a
this.e1()},
e1:function(){var t=this.d
if(t!=null&&this.a<=0)J.yL(this.b,this.c,t,!1)},
e3:function(){var t=this.d
if(t!=null)J.z9(this.b,this.c,t,!1)},
ff:function(a,b,c,d,e){this.e1()}}
W.qA.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.id.prototype={
bg:function(a){return $.$get$xZ().Y(0,W.h7(a))},
aZ:function(a,b,c){var t,s,r
t=W.h7(a)
s=$.$get$vv()
r=s.n(0,H.z(t)+"::"+b)
if(r==null)r=s.n(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
fh:function(a){var t,s
t=$.$get$vv()
if(t.gU(t)){for(s=0;s<262;++s)t.i(0,C.a_[s],W.Iq())
for(s=0;s<12;++s)t.i(0,C.r[s],W.Ir())}},
$isea:1,
geH:function(){return this.a}}
W.bw.prototype={
gW:function(a){return new W.iR(a,this.gm(a),-1,null,[H.aw(a,"bw",0)])},
h:function(a,b){throw H.h(new P.V("Cannot add to immutable List."))},
a5:function(a,b,c,d,e){throw H.h(new P.V("Cannot setRange on immutable List."))},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)},
aG:function(a,b,c,d){throw H.h(new P.V("Cannot modify an immutable List."))},
by:function(a,b,c,d){throw H.h(new P.V("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
W.jS.prototype={
h:function(a,b){this.a.push(b)},
bg:function(a){return C.b.e6(this.a,new W.nN(a))},
aZ:function(a,b,c){return C.b.e6(this.a,new W.nM(a,b,c))},
$isea:1}
W.nN.prototype={
$1:function(a){return a.bg(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.nM.prototype={
$1:function(a){return a.aZ(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.ii.prototype={
bg:function(a){return this.a.Y(0,W.h7(a))},
aZ:function(a,b,c){var t,s
t=W.h7(a)
s=this.c
if(s.Y(0,H.z(t)+"::"+b))return this.d.h9(c)
else if(s.Y(0,"*::"+b))return this.d.h9(c)
else{s=this.b
if(s.Y(0,H.z(t)+"::"+b))return!0
else if(s.Y(0,"*::"+b))return!0
else if(s.Y(0,H.z(t)+"::*"))return!0
else if(s.Y(0,"*::*"))return!0}return!1},
fj:function(a,b,c,d){var t,s,r
this.a.aw(0,c)
t=b.cb(0,new W.rf())
s=b.cb(0,new W.rg())
this.b.aw(0,t)
r=this.c
r.aw(0,C.C)
r.aw(0,s)},
$isea:1,
geH:function(){return this.d}}
W.rf.prototype={
$1:function(a){return!C.b.Y(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.rg.prototype={
$1:function(a){return C.b.Y(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.rq.prototype={
aZ:function(a,b,c){if(this.f4(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.vN(a).a.getAttribute("template")==="")return this.e.Y(0,b)
return!1}}
W.rr.prototype={
$1:function(a){return"TEMPLATE::"+H.z(a)},
$S:function(){return{func:1,args:[,]}}}
W.rp.prototype={
bg:function(a){var t=J.ap(a)
if(!!t.$ishU)return!1
t=!!t.$isc8
if(t&&W.h7(a)==="foreignObject")return!1
if(t)return!0
return!1},
aZ:function(a,b,c){if(b==="is"||C.c.a9(b,"on"))return!1
return this.bg(a)},
$isea:1}
W.iR.prototype={
G:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.iq(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gP:function(){return this.d}}
W.ea.prototype={}
W.rs.prototype={
cc:function(a){}}
W.rd.prototype={}
W.kA.prototype={
cc:function(a){new W.ry(this).$2(a,null)},
bo:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
fZ:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.vN(a)
r=s.gdI().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.bS(n)}p="element unprintable"
try{p=J.cD(a)}catch(n){H.bS(n)}try{o=W.h7(a)
this.fY(a,b,t,p,o,s,r)}catch(n){if(H.bS(n) instanceof P.d0)throw n
else{this.bo(a,b)
window
m="Removing corrupted element "+H.z(p)
if(typeof console!="undefined")console.warn(m)}}},
fY:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.bo(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.bg(a)){this.bo(a,b)
window
t="Removing disallowed element <"+H.z(e)+"> from "+J.cD(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.aZ(a,"is",g)){this.bo(a,b)
window
t="Removing disallowed type extension <"+H.z(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gay(f)
s=H.a(t.slice(0),[H.Q(t,0)])
for(r=f.gay(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.u(s,r)
q=s[r]
if(!this.a.aZ(a,J.tq(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.z(e)+" "+q+'="'+H.z(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.ap(a).$isi0)this.cc(a.content)}}
W.ry.prototype={
$2:function(a,b){var t,s,r,q,p,o
r=this.a
switch(a.nodeType){case 1:r.fZ(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.bo(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.z0(t)}catch(q){H.bS(q)
p=t
if(r){o=J.aK(p)
if(o.gc4(p)!=null){o.gc4(p)
o.gc4(p).removeChild(p)}}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.af,W.af]}}}
P.rm.prototype={
bz:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b6:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.ap(a)
if(!!s.$ise3)return new Date(a.a)
if(!!s.$isGF)throw H.h(new P.eP("structured clone of RegExp"))
if(!!s.$isck)return a
if(!!s.$isf5)return a
if(!!s.$isfi)return a
if(!!s.$ishq)return a
if(!!s.$isfq||!!s.$iseG)return a
if(!!s.$isaZ){r=this.bz(a)
q=this.b
p=q.length
if(r>=p)return H.u(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.u(q,r)
q[r]=o
s.a0(a,new P.ro(t,this))
return t.a}if(!!s.$isp){r=this.bz(a)
t=this.b
if(r>=t.length)return H.u(t,r)
o=t[r]
if(o!=null)return o
return this.hl(a,r)}throw H.h(new P.eP("structured clone of other type"))},
hl:function(a,b){var t,s,r,q,p
t=J.aU(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.u(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b6(t.n(a,p))
if(p>=r.length)return H.u(r,p)
r[p]=q}return r}}
P.ro.prototype={
$2:function(a,b){this.a.a[a]=this.b.b6(b)},
$S:function(){return{func:1,args:[,,]}}}
P.q9.prototype={
bz:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b6:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.e3(s,!0)
r.dl(s,!0)
return r}if(a instanceof RegExp)throw H.h(new P.eP("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.I9(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bz(a)
r=this.b
o=r.length
if(p>=o)return H.u(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.jJ()
t.a=n
if(p>=o)return H.u(r,p)
r[p]=n
this.hA(a,new P.qa(t,this))
return t.a}if(a instanceof Array){p=this.bz(a)
r=this.b
if(p>=r.length)return H.u(r,p)
n=r[p]
if(n!=null)return n
o=J.aU(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.u(r,p)
r[p]=n
if(typeof m!=="number")return H.a8(m)
r=J.cZ(n)
l=0
for(;l<m;++l)r.i(n,l,this.b6(o.n(a,l)))
return n}return a}}
P.qa.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b6(b)
J.kJ(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.rn.prototype={}
P.kk.prototype={
hA:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bH)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.rV.prototype={
$1:function(a){return this.a.aE(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rW.prototype={
$1:function(a){return this.a.bs(a)},
$S:function(){return{func:1,args:[,]}}}
P.lk.prototype={
e4:function(a){if($.$get$w3().b.test(a))return a
throw H.h(P.e1(a,"value","Not a valid class token"))},
A:function(a){return this.aF().aR(0," ")},
gW:function(a){var t,s
t=this.aF()
s=new P.dt(t,t.r,null,null,[null])
s.c=t.e
return s},
a0:function(a,b){this.aF().a0(0,b)},
az:function(a,b){var t=this.aF()
return new H.h6(t,b,[H.Q(t,0),null])},
gU:function(a){return this.aF().a===0},
gm:function(a){return this.aF().a},
Y:function(a,b){if(typeof b!=="string")return!1
this.e4(b)
return this.aF().Y(0,b)},
cT:function(a){return this.Y(0,a)?a:null},
h:function(a,b){this.e4(b)
return this.hV(0,new P.ll(b))},
gF:function(a){var t=this.aF()
return t.gF(t)},
a3:function(a,b){return this.aF().a3(0,!0)},
ao:function(a){return this.a3(a,!0)},
hV:function(a,b){var t,s
t=this.aF()
s=b.$1(t)
this.eJ(t)
return s},
$ised:1,
$ased:function(){return[P.x]},
$ist:1,
$ast:function(){return[P.x]},
$iso:1,
$aso:function(){return[P.x]}}
P.ll.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.lw.prototype={
gH:function(a){return a.name}}
P.rI.prototype={
$1:function(a){this.b.aE(0,new P.kk([],[],!1).b6(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mC.prototype={
gH:function(a){return a.name}}
P.nS.prototype={
bX:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fL(a,b,c)
q=P.HP(t)
return q}catch(p){s=H.bS(p)
r=H.cB(p)
q=P.ws(s,r,null)
return q}},
h:function(a,b){return this.bX(a,b,null)},
fL:function(a,b,c){return a.add(new P.rn([],[]).b6(b))},
gH:function(a){return a.name}}
P.hS.prototype={
gaq:function(a){return a.error}}
P.pB.prototype={
gaq:function(a){return a.error}}
P.qW.prototype={
bD:function(a){if(a<=0||a>4294967296)throw H.h(P.xt("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
cU:function(){return Math.random()}}
P.r4.prototype={
aX:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.am(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bD:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.h(P.xt("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aX()
return(this.a&t)>>>0}do{this.aX()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
cU:function(){this.aX()
var t=this.a
this.aX()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
fi:function(a){var t,s,r,q,p,o,n,m
t=J.ei(a,0)?-1:0
do{if(typeof a!=="number")return a.aL()
s=(a&4294967295)>>>0
a=C.d.am(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.am(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.am(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.am(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.am(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.am(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.am(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aX()
this.aX()
this.aX()
this.aX()}}
P.r5.prototype={}
P.bW.prototype={$asbW:null}
P.kO.prototype={$isf:1,
ga8:function(a){return a.href}}
P.el.prototype={$isf:1}
P.lN.prototype={$isf:1}
P.lO.prototype={$isf:1}
P.lP.prototype={$isf:1}
P.lQ.prototype={$isf:1}
P.lR.prototype={$isf:1}
P.lS.prototype={$isf:1}
P.lT.prototype={$isf:1}
P.lU.prototype={$isf:1}
P.lV.prototype={$isf:1}
P.lW.prototype={$isf:1,
ga8:function(a){return a.href}}
P.lX.prototype={$isf:1}
P.lY.prototype={$isf:1}
P.lZ.prototype={$isf:1}
P.m_.prototype={$isf:1}
P.m0.prototype={$isf:1}
P.m1.prototype={$isf:1}
P.mg.prototype={$isf:1,
ga8:function(a){return a.href}}
P.cv.prototype={$isf:1}
P.mz.prototype={$isf:1,
ga8:function(a){return a.href}}
P.da.prototype={$isad:1}
P.n6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.da]},
$ist:1,
$ast:function(){return[P.da]},
$iso:1,
$aso:function(){return[P.da]}}
P.j4.prototype={
$asp:function(){return[P.da]},
$ast:function(){return[P.da]},
$aso:function(){return[P.da]},
$isp:1,
$ist:1,
$iso:1}
P.jo.prototype={
$asp:function(){return[P.da]},
$ast:function(){return[P.da]},
$aso:function(){return[P.da]},
$isp:1,
$ist:1,
$iso:1}
P.nr.prototype={$isf:1}
P.ns.prototype={$isf:1}
P.dc.prototype={$isad:1}
P.nO.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.dc]},
$ist:1,
$ast:function(){return[P.dc]},
$iso:1,
$aso:function(){return[P.dc]}}
P.j5.prototype={
$asp:function(){return[P.dc]},
$ast:function(){return[P.dc]},
$aso:function(){return[P.dc]},
$isp:1,
$ist:1,
$iso:1}
P.jp.prototype={
$asp:function(){return[P.dc]},
$ast:function(){return[P.dc]},
$aso:function(){return[P.dc]},
$isp:1,
$ist:1,
$iso:1}
P.o5.prototype={$isf:1,
ga8:function(a){return a.href}}
P.oa.prototype={
gm:function(a){return a.length}}
P.hU.prototype={$ishU:1,$isf:1,
ga8:function(a){return a.href},
sah:function(a,b){return a.type=b}}
P.pc.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.x]},
$ist:1,
$ast:function(){return[P.x]},
$iso:1,
$aso:function(){return[P.x]}}
P.j6.prototype={
$asp:function(){return[P.x]},
$ast:function(){return[P.x]},
$aso:function(){return[P.x]},
$isp:1,
$ist:1,
$iso:1}
P.jq.prototype={
$asp:function(){return[P.x]},
$ast:function(){return[P.x]},
$aso:function(){return[P.x]},
$isp:1,
$ist:1,
$iso:1}
P.pf.prototype={
sah:function(a,b){return a.type=b}}
P.kV.prototype={
aF:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a0(null,null,null,P.x)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bH)(r),++p){o=J.tr(r[p])
if(o.length!==0)s.h(0,o)}return s},
eJ:function(a){this.a.setAttribute("class",a.aR(0," "))}}
P.c8.prototype={
ge9:function(a){return new P.kV(a)},
ax:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.ea])
t.push(W.xY(null))
t.push(W.y0())
t.push(new W.rp())
c=new W.kA(new W.jS(t))}s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.v).hm(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.d8(q)
o=t.gbe(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
em:function(a,b,c,d,e){throw H.h(new P.V("Cannot invoke insertAdjacentHtml on SVG."))},
$isc8:1,
$isf:1}
P.ph.prototype={$isf:1}
P.pj.prototype={$isf:1}
P.eO.prototype={}
P.pr.prototype={$isf:1,
ga8:function(a){return a.href}}
P.df.prototype={$isad:1}
P.pC.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.df]},
$ist:1,
$ast:function(){return[P.df]},
$iso:1,
$aso:function(){return[P.df]}}
P.j7.prototype={
$asp:function(){return[P.df]},
$ast:function(){return[P.df]},
$aso:function(){return[P.df]},
$isp:1,
$ist:1,
$iso:1}
P.jr.prototype={
$asp:function(){return[P.df]},
$ast:function(){return[P.df]},
$aso:function(){return[P.df]},
$isp:1,
$ist:1,
$iso:1}
P.pO.prototype={$isf:1,
ga8:function(a){return a.href}}
P.pS.prototype={$isf:1}
P.pT.prototype={$isf:1}
P.ic.prototype={$isf:1,
ga8:function(a){return a.href}}
P.ra.prototype={$isf:1}
P.rb.prototype={$isf:1}
P.rc.prototype={$isf:1}
P.bi.prototype={}
P.dg.prototype={$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
P.fT.prototype={$isfT:1,$isad:1,
gm:function(a){return a.length}}
P.f2.prototype={$isf2:1,$isad:1,
gbZ:function(a){return a.buffer}}
P.fU.prototype={
fu:function(a,b,c,d){return a.decodeAudioData(b,H.du(c,1),H.du(d,1))},
ho:function(a,b){var t,s,r
t=P.fT
s=new P.bn(0,$.an,null,[t])
r=new P.dZ(s,[t])
this.fu(a,b,new P.kW(r),new P.kX(r))
return s}}
P.kW.prototype={
$1:function(a){this.a.aE(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kX.prototype={
$1:function(a){var t=this.a
if(a==null)t.bs("")
else t.bs(a)},
$S:function(){return{func:1,args:[,]}}}
P.bI.prototype={}
P.f4.prototype={}
P.l4.prototype={
sah:function(a,b){return a.type=b}}
P.lj.prototype={
gbZ:function(a){return a.buffer}}
P.jW.prototype={
sah:function(a,b){return a.type=b}}
P.kQ.prototype={
gH:function(a){return a.name}}
P.oo.prototype={$isf:1}
P.rz.prototype={$isf:1}
P.k8.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bB(b,a,null,null,null))
return P.yp(a.item(b))},
i:function(a,b,c){throw H.h(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.V("Cannot resize immutable List."))},
gF:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){return this.n(a,b)},
L:function(a,b){return P.yp(a.item(b))},
$isp:1,
$asp:function(){return[P.aZ]},
$ist:1,
$ast:function(){return[P.aZ]},
$iso:1,
$aso:function(){return[P.aZ]}}
P.j8.prototype={
$asp:function(){return[P.aZ]},
$ast:function(){return[P.aZ]},
$aso:function(){return[P.aZ]},
$isp:1,
$ist:1,
$iso:1}
P.js.prototype={
$asp:function(){return[P.aZ]},
$ast:function(){return[P.aZ]},
$aso:function(){return[P.aZ]},
$isp:1,
$ist:1,
$iso:1}
T.fP.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
gF:function(a){return C.b.gF(this.a)},
gU:function(a){return this.a.length===0},
gW:function(a){var t=this.a
return new J.ir(t,t.length,0,null,[H.Q(t,0)])},
$ashv:function(){return[T.fQ]},
$aso:function(){return[T.fQ]},
gcQ:function(a){return this.a}}
T.fQ.prototype={
gbi:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fk(C.A)
r=T.fk(C.B)
q=T.xj(0,this.b)
new T.iW(s,q,0,0,0,t,r).dJ()
r=q.c.buffer
q=q.a
r.toString
q=H.cU(r,0,q)
this.cy=q
t=q}else{t=s.bJ()
this.cy=t}this.ch=0}}return t},
A:function(a){return this.a},
gH:function(a){return this.a}}
T.di.prototype={
A:function(a){return"ArchiveException: "+this.a}}
T.hr.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ak()
if(typeof r!=="number")return H.a8(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.X()
if(typeof b!=="number")return H.a8(b)
s+=b
if(s<0||s>=t.length)return H.u(t,s)
return t[s]},
aW:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a8(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.ak()
if(typeof s!=="number")return H.a8(s)
b=t-(a-s)}return T.u2(this.a,this.d,b,a)},
b2:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.X()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a8(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.u(q,s)
q[s]}return-1},
bj:function(a,b){return this.b2(a,b,0)},
d1:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.ak()
if(typeof s!=="number")return H.a8(s)
r=this.aW(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.ak()
if(typeof p!=="number")return H.a8(p)
if(typeof s!=="number")return s.X()
this.b=s+(t-(q-p))
return r},
c6:function(a){return P.pd(this.d1(a).bJ(),0,null)},
a1:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.X()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.u(t,s)
p=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.u(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a2:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.X()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.u(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.u(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.u(t,s)
n=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.u(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aU:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.X()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.u(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.u(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.u(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.u(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.u(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.u(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.u(t,s)
j=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.u(t,r)
i=t[r]&255
if(this.d===1)return(C.a.ap(p,56)|C.a.ap(o,48)|C.a.ap(n,40)|C.a.ap(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.ap(i,56)|C.a.ap(j,48)|C.a.ap(k,40)|C.a.ap(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bJ:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ak()
if(typeof r!=="number")return H.a8(r)
q=t-(s-r)
t=this.a
r=J.ap(t)
if(!!r.$isdg){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cU(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.yb(r.cf(t,s,p>o?o:p)))},
f7:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbZ:function(a){return this.a},
ghZ:function(a){return this.b}}
T.nY.prototype={
ir:function(a,b){var t,s,r,q
if(b==null)b=J.c3(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cr(s-q)
C.t.at(r,t,s,a)
this.a+=b},
d6:function(a){return this.ir(a,null)},
it:function(a){var t,s,r,q
t=J.aU(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
this.cr(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
C.t.a5(q,s,s+r,t.gbZ(a),t.ghZ(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.ak()
if(typeof q!=="number")return H.a8(q)
this.a=t+(r-(s-q))},
aW:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cU(t,a,b-a)},
di:function(a){return this.aW(a,null)},
cr:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.b1(P.dJ("Invalid length "+H.z(s)))
r=new Uint8Array(s)
q=this.c
C.t.at(r,0,q.length,q)
this.c=r},
fA:function(){return this.cr(null)},
gm:function(a){return this.a}}
T.q5.prototype={
fV:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aW(this.a-20,20)
if(s.a2()!==117853008){a.b=t
return}s.a2()
r=s.aU()
s.a2()
a.b=r
if(a.a2()!==101075792){a.b=t
return}a.aU()
a.a1()
a.a1()
q=a.a2()
p=a.a2()
o=a.aU()
n=a.aU()
m=a.aU()
l=a.aU()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fB:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.ak()
if(typeof r!=="number")return H.a8(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a2()===101010256){a.b=t
return q}}throw H.h(new T.di("Could not find End of Central Directory Record"))},
fb:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fB(a)
this.a=t
a.b=t
a.a2()
this.b=a.a1()
this.c=a.a1()
this.d=a.a1()
this.e=a.a1()
this.f=a.a2()
this.r=a.a2()
s=a.a1()
if(s>0)this.x=a.c6(s)
this.fV(a)
r=a.aW(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.X()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.as()
if(!(p<t+o))break
if(r.a2()!==33639248)break
p=new T.q7(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a1()
p.b=r.a1()
p.c=r.a1()
p.d=r.a1()
p.e=r.a1()
p.f=r.a1()
p.r=r.a2()
p.x=r.a2()
p.y=r.a2()
n=r.a1()
m=r.a1()
l=r.a1()
p.z=r.a1()
p.Q=r.a1()
p.ch=r.a2()
o=r.a2()
p.cx=o
if(n>0)p.cy=r.c6(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.ak()
j=r.aW(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.ak()
if(typeof g!=="number")return H.a8(g)
if(typeof k!=="number")return k.X()
r.b=k+(i-(h-g))
p.db=j.bJ()
f=j.a1()
e=j.a1()
if(f===1){if(e>=8)p.y=j.aU()
if(e>=16)p.x=j.aU()
if(e>=24){o=j.aU()
p.cx=o}if(e>=28)p.z=j.a2()}}if(l>0)p.dx=r.c6(l)
a.b=o
p.dy=T.Hj(a,p)
q.push(p)}}}
T.q6.prototype={
gbi:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fk(C.A)
q=T.fk(C.B)
t=T.xj(0,t)
new T.iW(s,t,0,0,0,r,q).dJ()
q=t.c.buffer
t=t.a
q.toString
t=H.cU(q,0,t)
this.cy=t
this.d=0}else{t=s.bJ()
this.cy=t}}return t},
A:function(a){return this.z},
fc:function(a,b){var t,s,r,q
t=a.a2()
this.a=t
if(t!==67324752)throw H.h(new T.di("Invalid Zip Signature"))
this.b=a.a1()
this.c=a.a1()
this.d=a.a1()
this.e=a.a1()
this.f=a.a1()
this.r=a.a2()
this.x=a.a2()
this.y=a.a2()
s=a.a1()
r=a.a1()
this.z=a.c6(s)
this.Q=a.d1(r).bJ()
this.cx=a.d1(this.ch.x)
if((this.c&8)!==0){q=a.a2()
if(q===134695760)this.r=a.a2()
else this.r=q
this.x=a.a2()
this.y=a.a2()}}}
T.q7.prototype={
A:function(a){return this.cy}}
T.q4.prototype={
hp:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.Hi(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.C],p=0;p<t.length;t.length===r||(0,H.bH)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.dd()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fQ(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.e_(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.u2(k,0,null,0)}else if(k instanceof T.hr){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hr(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.cO(m,"/")
j.y=n.r
s.push(j)}return new T.fP(s,null)}}
T.mx.prototype={
f6:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ap(1,this.b)
r=H.cG(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.u(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.u(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iW.prototype={
dJ:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.X()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.as()
if(!(r<s+q))break
if(!this.fS())break}},
fS:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.X()
if(typeof s!=="number")return s.as()
if(s>=r+q)return!1
p=this.av(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.av(16)
s=this.av(16)
if(n!==0&&n!==(s^65535)>>>0)H.b1(new T.di("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.ak()
r=q-r
if(n>s-r)H.b1(new T.di("Input buffer is broken"))
m=t.aW(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.ak()
if(typeof l!=="number")return H.a8(l)
if(typeof s!=="number")return s.X()
t.b=s+(r-(q-l))
this.b.it(m)
break
case 1:this.dC(this.f,this.r)
break
case 2:this.fT()
break
default:throw H.h(new T.di("unknown BTYPE: "+o))}return(p&1)===0},
av:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.X()
if(typeof r!=="number")return r.as()
if(r>=q+p)throw H.h(new T.di("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.u(q,r)
o=q[r]
this.c=(this.c|C.a.au(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ap(1,a)
this.c=C.a.dZ(t,a)
this.d=s-a
return(t&r-1)>>>0},
cB:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.X()
if(typeof p!=="number")return p.as()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.u(o,p)
m=o[p]
this.c=(this.c|C.a.au(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ap(1,s)-1)>>>0
if(p>=t.length)return H.u(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dZ(r,k)
this.d=q-k
return l&65535},
fT:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.av(5)+257
s=this.av(5)+1
r=this.av(4)+4
q=H.cG(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.u(C.I,o)
n=C.I[o]
m=this.av(3)
if(n>=q)return H.u(p,n)
p[n]=m}l=T.fk(p)
k=new Uint8Array(H.cG(t))
j=new Uint8Array(H.cG(s))
i=this.dB(t,l,k)
h=this.dB(s,l,j)
this.dC(T.fk(i),T.fk(h))},
dC:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cB(a)
if(s>285)throw H.h(new T.di("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fA()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.u(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.u(C.G,p)
o=C.G[p]+this.av(C.a1[p])
n=this.cB(b)
if(n<=29){if(n>=30)return H.u(C.D,n)
m=C.D[n]+this.av(C.a0[n])
for(r=-m;o>m;){t.d6(t.di(r))
o-=m}if(o===m)t.d6(t.di(r))
else t.d6(t.aW(r,o-m))}else throw H.h(new T.di("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.ak();--r
t.b=r
if(r<0)t.b=0}},
dB:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cB(b)
switch(q){case 16:p=3+this.av(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=s}break
case 17:p=3+this.av(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
case 18:p=11+this.av(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.h(new T.di("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kP.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Math Book",H.a([$.K,$.Y,$.aB],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Giant Map",H.a([$.K,$.Y],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Microscope",H.a([$.D,$.Y,$.aQ],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Star Chart",H.a([$.K,$.Y],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("History Book",H.a([$.K,$.Y],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Radioactive Rock",H.a([$.c7,$.au],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Compass",H.a([$.D,$.Y],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fe,$.n)
q.i(0,$.bg,$.n)
q.i(0,$.fg,$.k)
q.i(0,$.aO,$.H)
q.i(0,$.cF,$.k)
p=$.m
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.r
o=o+n+" to stop "
m=$.L
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.G2
n=[U.b]
q.i(0,new R.Z("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.B(),!1,!1,new Y.d7("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.m
q.i(0,new R.Z("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.r+" to stop "+$.L+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.oh(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.m
p="The "+m+" finds a massive library, filled with books. The "
l=$.r
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.y
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.Z("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.dR(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ep,$.H)
s.i(0,$.cF,$.n)
p=$.m
o="The "+p+"  is approached by a "
l=$.r
s.i(0,new R.Z("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.L+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.r
s.i(0,new R.Z("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.L+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.dd(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
s.i(0,new R.Z("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.r+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.dR(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ep,$.H)
t.i(0,$.cF,$.n)
t.i(0,$.c4,$.H)
t.i(0,$.tP,$.H)
r=$.m
q="The "+r+"  is approached by a "
p=$.r
q=q+p+" who offers them a grant to study "
o=$.ab
t.i(0,new R.Z("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.L+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.dR(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.k)
o=$.r
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.L
r=r+p+".  It is up to the "
q=$.m
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ab
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.G8
t.i(0,new R.Z("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.ec(),!1,!1,new Y.d7("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
t.i(0,new R.Z("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.L+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.r+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aA)}}
K.bT.prototype={}
L.fR.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a5)
s=A.j("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),[H.Q(t,0)]))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.k)
q.i(0,$.bg,$.H)
q.i(0,$.dP,$.k)
q.i(0,$.c4,$.n)
q.i(0,$.e5,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.y
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.bz+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.M("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.R(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eu,$.k)
s.i(0,$.er,$.H)
s.i(0,$.et,$.n)
s.i(0,$.cP,$.k)
s.i(0,$.cj,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.y
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.bz+". The "+p+" has won! "
s.i(0,new R.M("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.R(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.bg,$.H)
t.i(0,$.cc,$.n)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.L
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.y
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.bz+". The "+r+" has won! "
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.R(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.v3(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
l=$.m
r="The "+l+" learns that all of the local "
m=$.r
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.y
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.bz+". The "+l+" has won! "
t.i(0,new R.M("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.R(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.F(s,t,null),$.ar)},
A:function(a){return this.Q},
ai:function(a,b,c,d){var t=this.Q
this.r=new X.iH("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.is]),H.a([],[M.hg]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.D()
this.E()
t=this.e
if($.$get$kS().V(0,t))H.b1("Duplicate aspect id for "+this.A(0)+": "+t+" is already registered for "+J.cD($.$get$kS().n(0,t))+".")
$.$get$kS().i(0,t,this)},
gH:function(a){return this.Q}}
L.aW.prototype={}
M.kU.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Barbells",H.a([$.ah,$.ce,$.D],s),null,!1,"Strength Building Metal")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Basketball",H.a([$.fl,$.cf],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Baseball Bat",H.a([$.jD,$.X],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Rubber Ball",H.a([$.fl,$.cf],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.aY,$.a7],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Hockey Stick",H.a([$.jD,$.X,$.dQ],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Trophy",H.a([$.D,$.bh],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Boxing Glove",H.a([$.wG,$.cf],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Yoga Mat",H.a([$.cf,$.b3],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.e6,$.H)
q.i(0,$.c6,$.n)
q.i(0,$.cP,$.H)
p=$.m
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.r
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.L+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.Z("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.m
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.r
q.i(0,new R.Z("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.L+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.ec(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.m
n="The "+m+"  wanders into a bunch of "
p=$.r
q.i(0,new R.Z("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.fv(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.e6,$.n)
t.i(0,$.fh,$.n)
t.i(0,$.c6,$.n)
s=$.m
r="The "+s+" finds a team of underdog "
p=$.r
t.i(0,new R.Z("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.oh(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.r
s="A group of "+p+"s approach the "
r=$.m
s=s+r+". Apparently their sports team lost their coach to the "+$.y+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.L
t.i(0,new R.Z("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.ec(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.k)
k=$.r
p="A group of "+k+"s approach the "
r=$.m
t.i(0,new R.Z("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.y+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ab+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,t,null),$.aA)}}
U.kY.prototype={
R:function(a,b){var t=0,s=P.bj(),r,q,p,o
var $async$R=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:q=$.$get$vW()
p=q.createBufferSource()
o=p
t=3
return P.ch(J.yS(q,b),$async$R)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$R,s)},
$asdw:function(){return[P.f2]},
$ascd:function(){return[P.f2,P.bi]}}
U.nm.prototype={
aT:function(a){return"audio/mpeg"}}
U.nU.prototype={
aT:function(a){return"audio/ogg"}}
U.p9.prototype={
R:function(a,b){var t=0,s=P.bj(),r,q,p
var $async$R=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:q=W.zD(b)
p=new W.i9(q,"canplaythrough",!1,[W.U])
t=3
return P.ch(p.gF(p),$async$R)
case 3:r=q
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$R,s)},
$asiF:function(){return[W.f3]},
$ascd:function(){return[W.f3,P.x]}}
U.pa.prototype={}
U.pb.prototype={}
O.l_.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Cod Piece",H.a([$.O,$.a_,$.aP,$.T,$.X],s),"God damn it, MI. ",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Poisoned Candy",H.a([$.u6,$.T,$.bR],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Lyre",H.a([$.aC,$.X,$.bk,$.T,$.a9],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Snare Trap",H.a([$.O,$.aC,$.T,$.b_],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cI,$.k)
t.i(0,$.hm,$.k)
t.i(0,$.cs,$.k)
t.i(0,$.dy,$.k)
t.i(0,$.cr,$.k)
t.i(0,$.fb,$.k)
r="After all the bullshit the "+$.y+" has put the native "
q=$.r
r=r+q+"s through, the "
p=$.m
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.av+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.L
m=[U.b]
t.i(0,new R.a4("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.B(),!1,!1,new Y.dU("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.r
n="A group of jubilant "+p+"s are following the "
q=$.m
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.L
t.i(0,new R.a4("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.y+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
q=$.m
t.i(0,new R.a4("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.y+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.B(),!1,!1,new Y.lc("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.y+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.m
q=q+r+" organizes a huge festival for all the "
p=$.r
t.i(0,new R.bF("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.F(s,t,null),$.bM)}}
Y.pq.prototype={
R:function(a,b){var t=0,s=P.bj(),r
var $async$R=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$R,s)},
$aseN:function(){return[P.x]},
$ascd:function(){return[P.x,P.x]}}
Y.ol.prototype={
aT:function(a){return"application/octet-stream"},
R:function(a,b){var t=0,s=P.bj(),r
var $async$R=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$R,s)},
$asdw:function(){return[P.bi]},
$ascd:function(){return[P.bi,P.bi]}}
T.l5.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Mystical Vial of Blood",H.a([$.aQ,$.bk,$.S,$.aH],s),null,!1,"Vial of Not-ABs Oil")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Bananaphone",H.a([$.ao,$.bk,$.S,$.aX],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Friendship Bracelet",H.a([$.O,$.bk,$.S,$.aH,$.ex],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Bonding Manacles",H.a([$.D,$.b_,$.S,$.aH,$.ex,$.aE],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Friendship Stairs",H.a([$.X,$.mN,$.bk,$.aH,$.S,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dl,$.k)
q.i(0,$.tS,$.k)
q.i(0,$.c4,$.n)
p=$.m
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.r
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ab+" and some boondollars in compensation."
n=this.x1
k=[U.b]
q.i(0,new R.Z("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.ec(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.r
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.L+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.y
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.m
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.bz+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.M("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.R(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.m
m="The "+n+" is playing against a "
l=$.r
m=m+l+" in a friendly game of "+$.ab+" Battle. With some smooth moves, they pull out a victory. The "+l+" comes over for a handshake. The "+n+" notices some ink dripping out of the "+l+"\u2019s arm. The "+l+" becomes confused. 'Ink? No this is blood from when I scraped my limb.' What the hell is blood?"
l="The "+n+" tries asking around what blood is, but every "+l+" asked just looks at them strangely and walks away. Finally, they run into a "
i=$.y
q.i(0,new R.Z("The True Meaning of Blood",!1,[new U.b(m),new U.b(l+i+" minion who mocks their lack of knowledge. 'If you don\u2019t even know what blood is maybe you should read a book sometime.'"),new U.b("The "+n+" takes the rude (and also dead) "+i+" minion\u2019s advice and gets their answer at a library. According to a biology textbook, people here have a liquid called blood running through tubes across their entire body. What a completely weird and alien concept.")],H.a([],k),R.Gk(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.ak)
i=this.f
i.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cP,$.k)
s.i(0,$.cr,$.H)
s.i(0,$.aO,$.H)
s.i(0,$.iP,$.k)
s.i(0,$.cs,$.H)
p=$.m
o="The "+p+"  and the "
n=$.dD
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
j=$.y
l=l+j+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+j+"."
h="Slaying the "+j+" proves the POWER OF TEAMWORK!"
s.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.R(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+j+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.dS(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
h=$.m
j="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
j=j+n+"s explains that before  "
p=$.y
j=j+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
n="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.bz+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.xh
s.i(0,new R.M("Chain the Towers",!1,[new U.b(j),new U.b(n),new U.b(l),new U.R(m,h,o)],H.a([],k),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
o="The "+p+" learns of the "
h=$.av
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.r
o=o+m+" explains that the "
l=$.y
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
j="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.bz+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.M("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.R(j,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
j=$.r
h=h+j+" on "+$.av+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
j="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+j+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+j+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.e8+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a4("One Degree of Separation",!1,[new U.b(h),new U.b(n),new U.b(j)],H.a([],k),R.dR(),!1,!1,new Y.bX("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.av
j=j+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.e8+" is now more popular with your friends than you are."
s.i(0,new R.a4("Steal The Friends",!1,[new U.b(j),new U.b(h),new U.b(n)],H.a([],k),R.oi(),!1,!1,new Y.bX("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
n="The "+p+"  and the "
h=$.dD
n=n+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
j="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.y
j=j+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.b(n),new U.R(j,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.z(C.n)+".",o)],H.a([],k),R.dS(),!1,!1,new Y.hQ(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ak)
i.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.bg,$.H)
t.i(0,$.cc,$.n)
r="In the wake of the defeat of the "+$.y+" it becomes really how isolated the individual "
q=$.r
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.m
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.e8+" to kick your ass, but luckily they have several."
t.i(0,new R.a4("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.ec(),!1,!1,new Y.bX("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.m
q="The "+o+" learns that two prominent "
p=$.r
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
n="In a dramatic reveal, the "+o+" discovers that "
m=$.y
n=n+m+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
l="The "+o+" confronts "+m+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+m+" lies slain by the "+o+"'s "+$.bz+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.L+"ing. "
t.i(0,new R.M("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(n),new U.R(l,"The deception of "+m+" continues with the defeat of the "+o+".",p)],H.a([],k),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.F(s,t,null),$.ar)}}
T.l7.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Pan's Pipe",H.a([$.a9,$.X,$.bk,$.S],s),null,!1,"Smonkin Weeds Pipe")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Skeleton Key",H.a([$.b2,$.S],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Inspector's Fan",H.a([$.a7,$.D,$.bk,$.S],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Jet Pack",H.a([$.aq,$.D,$.aY,$.S,$.a_],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cc,$.n)
q.i(0,$.fh,$.k)
q.i(0,$.aO,$.n)
p=$.m
o="The "+p+" tries posting a letter through the "
n=$.ab
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.y
o=o+m+" has screwed with the mail system, crippling the "
l=$.r
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.bz+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.G3
i=[U.b]
q.i(0,new R.M("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.R(j,p,l)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.f
m.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.bg,$.k)
s.i(0,$.fh,$.n)
s.i(0,$.aO,$.n)
s.i(0,$.c6,$.n)
s.i(0,$.cc,$.n)
p=$.m
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ab
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.r
k=l+k+" fields. The "+k+"s "+$.L+"ing is so joyful it's literally deafening. "
l=$.y
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.bz+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.M("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.R(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=$.m
p="\u201cThe "+h+" returns home from exploring their land, but a "
l=$.r
s.i(0,new R.Z("Slay the Windmills",!1,[new U.b(p+l+" is waiting at the door. Shaking heavily, she tells the "+h+" that her village is being terrorized by terrible monsters. The "+h+" agrees to help, and is lead to a plain just outside the village. The "+l+" points in one direction to indicate the monsters, but all the "+h+" can see are a bunch of windmills. Wait\u2026are the windmills the monsters?! The "+l+" nods her head. The "+h+" knows consorts can be pretty dumb, but this really takes the cake.\u201d "),new U.b("The "+h+" whacks the bases of a few windmills with their "+$.bz+" until they collapse. The "+l+"s from the village cheer and declare the "+h+" as a true hero and slayer of beasts. The "+h+" is happy to get praised, but is still a little frustrated by all of this nonsense. "),new U.b("Most of the windmills have been knocked over. The "+h+" starts to hit one of the last windmills, when suddenly it rears back and opens a toothy mouth in a roar. Holy Shit! It turns out windmill monsters aren\u2019t a delusion after all! The "+h+" slays the windmill monster in a tough strife and enjoys the "+l+" village\u2019s victory party.  ")],H.a([],i),R.dd(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.n)
m.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cj,$.k)
t.i(0,$.m9,$.k)
t.i(0,$.fh,$.H)
t.i(0,$.cc,$.H)
r=$.m
q="The "+r+" is chilling in a "+$.r+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.y
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ab
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.av+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.bz+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.M("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.R(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.ar)}}
M.fY.prototype={
eL:function(a){var t=this.a
if(!t.V(0,a))return
return t.n(0,a)}}
Y.l9.prototype={
R:function(a,b){var t=0,s=P.bj(),r,q,p,o,n,m,l,k,j,i
var $async$R=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:q=J.ej(b,"\n")
p=P.x
o=P.cJ(p,p)
n=P.cJ(p,[P.ed,P.x])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.cH(k).bk(k).length===0)m=null
else if(m==null)m=C.c.bk(k)
else{j=C.c.bk(k)
i=C.c.I(m,0,C.c.en(m,$.$get$w_())+1)+j
o.i(0,i,m)
if(!n.V(0,m))n.i(0,m,P.a0(null,null,null,p))
J.yK(n.n(0,m),i)}}r=new M.fY(o,n)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$R,s)},
$aseN:function(){return[M.fY]},
$ascd:function(){return[M.fY,P.x]}}
A.le.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Colonel Sassacre's Daunting Text ",H.a([$.K,$.ah,$.aX,$.ce],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Wise Guy Book",H.a([$.K,$.aX],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Beagle Puss",H.a([$.aQ,$.aX],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Novelty Microphone",H.a([$.aY,$.a7,$.aX],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Banana",H.a([$.ao,$.aX],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Fake Flower",H.a([$.O,$.aX],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Trick Handcuffs",H.a([$.D,$.aX],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cs,$.n)
q.i(0,$.cE,$.k)
q.i(0,$.c6,$.n)
p=$.m
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.r
o=o+n+"s are too scared to even "+$.L+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.y+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.Z("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.e6,$.H)
s.i(0,$.c6,$.k)
s.i(0,$.cE,$.k)
s.i(0,$.cI,$.k)
o=$.m
n="The "+o+" learns of an Open Mic Nite at the "
m=$.av
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.r
k=k+j+"s let out a braying "+$.L+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.G6
s.i(0,new R.Z("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.B(),!1,!1,new Y.d7("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cQ,$.H)
t.i(0,$.c5,$.n)
t.i(0,$.cE,$.k)
t.i(0,$.c6,$.n)
t.i(0,$.hh,$.n)
r=$.m
q="The "+r+"  is approached by a Crafty "
o=$.r
q=q+o+" who offers them a magical "
n=$.ab
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.L
t.i(0,new R.Z("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aA)}}
S.bC.prototype={
A:function(a){return H.z(new H.dX(H.kG(this),null))+": "+this.c},
gH:function(a){return this.c}}
S.it.prototype={}
S.mu.prototype={}
M.lr.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Can of Spray Paint",H.a([$.ax,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sensible Chuckles Magazine",H.a([$.K,$.ai,$.aX,$.aB],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Gentleman's Razor",H.a([$.un,$.D,$.as],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("How To Draw Manga",H.a([$.K,$.ai,$.aB],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Painting of a Horse Boxing a Football Player",H.a([$.ax,$.am,$.K],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Collection of Classical Works",H.a([$.ai,$.K],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Documentary on Horses",H.a([$.ai,$.aD,$.am],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Paint Set",H.a([$.ax,$.ai],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Shaving Cream",H.a([$.aq,$.ai,$.D],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Classy Suit",H.a([$.O,$.ai],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("The Fatherly Gent's Shaving Almanac ",H.a([$.K,$.ai,$.aB],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dO,$.n)
q.i(0,$.cF,$.k)
q.i(0,$.aO,$.n)
p=$.m
o="The "+p+" visits a beautiful "
n=$.ab
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.r
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.y+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.L+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.Z("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.e6,$.H)
s.i(0,$.c6,$.n)
s.i(0,$.cE,$.H)
s.i(0,$.bg,$.n)
s.i(0,$.cI,$.k)
o=$.m
n="The "+o+" finds a troupe of dejected looking "
l=$.r
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.av
l=l+n+" "
k=$.ab
s.i(0,new R.Z("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.L+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hm,$.H)
t.i(0,$.cs,$.H)
t.i(0,$.fb,$.H)
t.i(0,$.c5,$.H)
t.i(0,$.bg,$.n)
t.i(0,$.aO,$.n)
r=$.m
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.L
q=q+o+"ingworth, "
n=$.r
q=q+n+" heiress to the "+$.ab+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.FX
t.i(0,new R.Z("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.B(),!1,!1,new Y.d7("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aA)}}
T.lx.prototype={}
V.lz.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Trendy Fabric",H.a([$.ax,$.O],s),null,!1,"Weird Tasting Candy Paper")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Necklace",H.a([$.ax,$.uc,$.ex],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sewing Needle",H.a([$.D,$.ug,$.aM],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=$.jB
r=A.j("Broom",H.a([r,$.X,$.ah,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Rolling Pin",H.a([$.X,$.up,$.ah],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Velvet Pillow",H.a([$.O,$.b3,$.bk,$.ax,$.ht],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Yarn Ball",H.a([$.ax,$.O],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Refrigerator",H.a([$.aE,$.ce,$.D,$.bs],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Photo Album",H.a([$.ax,$.K],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice Cubes",H.a([$.bs],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Cast Iron Skillet",H.a([$.D,$.aq,$.ah,$.ce,$.ub],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Failed Dish",H.a([$.bR],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Dr Pepper BBQ Sauce",H.a([$.bR,$.jE],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Potted Plant",H.a([$.ax,$.bU,$.aS],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Chicken Leg",H.a([$.ao,$.bl,$.b2],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Juicy Steak",H.a([$.ao,$.bl],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Wedding Cake",H.a([$.ax,$.ao,$.aH],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cI,$.n)
q.i(0,$.cr,$.n)
q.i(0,$.cs,$.H)
p=$.m
o="The "+p+" is visited by a Beautiful "
n=$.r
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ab
l=[U.b]
q.i(0,new R.Z("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.L+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.B(),!1,!1,new Y.iv("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cs,$.k)
s.i(0,$.c6,$.n)
s.i(0,$.fb,$.k)
s.i(0,$.dy,$.n)
s.i(0,$.bg,$.k)
p=$.m
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ab
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.r
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.L+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.G4
s.i(0,new R.Z("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.B(),!1,!1,new Y.d7("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hi,$.k)
t.i(0,$.bg,$.n)
t.i(0,$.fc,$.k)
t.i(0,$.aO,$.n)
t.i(0,$.iP,$.k)
r=$.m
q="The "+r+" finds a loom, and a Wizened "
p=$.r
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ab
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.L+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.Z("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.aA)}}
U.lA.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aB,$.a7,$.K,$.aC,$.S,$.a_],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Egg Timer",H.a([$.aD,$.bk,$.S,$.aC],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Skull Timer",H.a([$.b2,$.bk,$.S,$.aC],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Poison Flask",H.a([$.aQ,$.S,$.bR],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice Gorgon Head",H.a([$.aQ,$.S,$.bs,$.aC,$.b_,$.c_,$.b0],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Obituary",H.a([$.aE,$.b0,$.aC,$.K,$.S],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dP,$.k)
q.i(0,$.d2,$.n)
q.i(0,$.fh,$.H)
q.i(0,$.bg,$.H)
q.i(0,$.c4,$.n)
p=$.m
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.r
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ab
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.y
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.bz+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.M("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.R(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dP,$.k)
s.i(0,$.d2,$.n)
s.i(0,$.ev,$.ak)
s.i(0,$.eq,$.n)
s.i(0,$.tP,$.n)
s.i(0,$.dl,$.n)
s.i(0,$.d2,$.n)
s.i(0,$.bg,$.H)
s.i(0,$.c4,$.n)
s.i(0,$.dm,$.n)
p=$.m
o="The "+p+" has found a group of Violent "
m=$.r
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.av
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.L+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.y
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.bz+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.M("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.R(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.dd(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.m
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ab
p=p+l+"s alike. "
l=$.r+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.y
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.bz+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.M("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.R(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.c4,$.k)
t.i(0,$.wm,$.ak)
t.i(0,$.fe,$.H)
r=$.m
q="The "+r+" finds a small dungeon bearing the image of "
p=$.y
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.r+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.M("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.R(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.dd(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
k=$.m
p="The "+k+" learns from one of their "
r=$.r
p=p+r+"s that there is an ancient prophecy of a "
l=$.av
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ab
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.y
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.bz+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.FW
t.i(0,new R.M("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.R(o,k,q)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.ar)}}
Z.lB.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Dream Diary",H.a([$.K,$.aB,$.S],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Interlocking Brick",H.a([$.aD,$.bk,$.ah,$.S,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Art Supplies",H.a([$.aD,$.bk,$.S],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hi,$.n)
q.i(0,$.fc,$.k)
q.i(0,$.aO,$.n)
q.i(0,$.iP,$.n)
p=$.r
o="A "+p+" child tugs on the "
n=$.m
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ab
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.y
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.L+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.G1
k=[U.b]
q.i(0,new R.M("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.R(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=this.f
l.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cj,$.n)
s.i(0,$.fc,$.k)
s.i(0,$.dA,$.n)
s.i(0,$.d1,$.n)
s.i(0,$.m5,$.n)
s.i(0,$.cE,$.k)
p=$.m
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.r
n=n+m+"s are even starting to snigger and "
j=$.L
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.y
s.i(0,new R.M("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.R("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dO,$.k)
t.i(0,$.iK,$.n)
t.i(0,$.aO,$.n)
t.i(0,$.d1,$.k)
t.i(0,$.m5,$.k)
t.i(0,$.fc,$.n)
r=$.m
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.y
t.i(0,new R.M("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.av+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.r+" is "+$.L+"ing in reverse. Another is in a "+$.ab+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.R("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.F(s,t,null),$.ar)}}
X.iH.prototype={}
X.is.prototype={$istY:1,
$S:function(){return{func:1,v:true,args:[[P.p,M.hg]]}}}
M.hg.prototype={}
U.m2.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Fluthulu Poster",H.a([$.O,$.b3,$.b0,$.bt],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Scalemate",H.a([$.O,$.b3,$.b0],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Replica Bone Shield",H.a([$.aE,$.aD,$.b2,$.fn,$.aP],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Replica Ice Sword",H.a([$.aD,$.wN,$.ey,$.aP],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Zombie Mask",H.a([$.aD,$.c_,$.bl,$.b0],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Vampire Romance Novel",H.a([$.aB,$.K,$.az,$.b0],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Wizardy Herbert",H.a([$.K,$.a2,$.ah],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Complacency of the Learned",H.a([$.K,$.a2,$.ah],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Grimoire for Summoning the Zoologically Dubious ",H.a([$.K,$.a2,$.c_,$.b0,$.bt],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Wizard Statue",H.a([$.aE,$.au,$.a2,$.ah,$.aP],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Mermaid Fountain",H.a([$.aE,$.u7,$.a2,$.ah,$.aP],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fd,$.ak)
q.i(0,$.cr,$.n)
q.i(0,$.cc,$.n)
q.i(0,$.cQ,$.H)
p=$.m
o="The "+p+" learns of a Beautiful "
n=$.r
o=o+n+" who has been kidnapped by the vial "
m=$.y
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ab
j=[U.b]
q.i(0,new R.Z("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.k)
s.i(0,$.dl,$.k)
s.i(0,$.iL,$.n)
s.i(0,$.c4,$.k)
s.i(0,$.ev,$.k)
s.i(0,$.hl,$.n)
o=$.m
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.r
s.i(0,new R.Z("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.k)
t.i(0,$.hk,$.n)
t.i(0,$.c4,$.k)
t.i(0,$.dN,$.n)
t.i(0,$.ep,$.n)
t.i(0,$.tS,$.n)
r=$.m
q="The "+r+" finds a group of three "
o=$.r
q=q+o+"s "
n=$.L
t.i(0,new R.Z("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aA)}}
N.ac.prototype={
A:function(a){return H.z(new H.dX(H.kG(this),null))+": "+H.z(this.b)}}
O.cd.prototype={
b3:function(a){var t=0,s=P.bj(),r,q=this,p
var $async$b3=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.ch(q.aV(a),$async$b3)
case 3:r=p.R(0,c)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$b3,s)}}
O.dw.prototype={
ba:function(a){var t=0,s=P.bj(),r
var $async$ba=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$ba,s)},
cN:function(a){var t=0,s=P.bj(),r,q=this
var $async$cN=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.zE([J.vL(a)],q.aT(0),null))
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$cN,s)},
aV:function(a){var t=0,s=P.bj(),r,q=this,p,o
var $async$aV=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:p=P.bi
o=new P.bn(0,$.an,null,[p])
W.wt(a,null,q.aT(0),null,null,"arraybuffer",null,null).b4(new O.l3(new P.dZ(o,[p])))
r=o
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$aV,s)},
$ascd:function(a){return[a,P.bi]}}
O.l3.prototype={
$1:function(a){this.a.aE(0,H.kH(J.z1(a),"$isbi"))},
$S:function(){return{func:1,args:[W.e9]}}}
O.eN.prototype={
ba:function(a){var t=0,s=P.bj(),r,q,p,o,n
var $async$ba=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:a.toString
q=H.cU(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hR(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$ba,s)},
aV:function(a){var t=0,s=P.bj(),r
var $async$aV=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:r=W.u1(a,null,null)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$aV,s)},
$ascd:function(a){return[a,P.x]}}
O.iF.prototype={
aV:function(a){var t=0,s=P.bj(),r
var $async$aV=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$aV,s)},
ba:function(a){return H.b1("Element format doesn't read from buffers")},
$ascd:function(a){return[a,P.x]}}
V.mj.prototype={
aT:function(a){return"font/opentype"},
R:function(a,b){var t=0,s=P.bj(),r
var $async$R=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:t=3
return P.ch(A.hC("scripts/Rendering/text/opentype.min.js",!1),$async$R)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$R,s)},
$asdw:function(){return[R.hn]},
$ascd:function(){return[R.hn,P.bi]}}
Z.iG.prototype={}
E.iU.prototype={}
E.nT.prototype={}
E.N.prototype={
A:function(a){var t="["+J.cD(this.a)+" x "+H.z(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fS.prototype={
A:function(a){var t="[(Random from "+P.uu(this.d,"(",")")+") x "+H.z(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kT.prototype={
A:function(a){return"[Stats assigned from player Interests x"+H.z(this.b)+"]"}}
Y.mo.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("How to Teach Your Friends to Hack SBURB",H.a([$.aB,$.T,$.K,$.a_,$.mR],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Unstable Domino",H.a([$.aD,$.T,$.aC],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Exposed Thread",H.a([$.O,$.T,$.aC],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Teetering Plate",H.a([$.ul,$.T,$.aC],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.mb,$.n)
t.i(0,$.cc,$.k)
t.i(0,$.dm,$.H)
t.i(0,$.dz,$.k)
r=$.r
q="An excited "+r+" runs up to the "
p=$.m
q=q+p+" and starts to "
o=$.L
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.av
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ab
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.y
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.M("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.R(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o=$.m
t.i(0,new R.a4("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.y+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.r+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.B(),!1,!1,new Y.dU("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.r
j="Now that the "+o+"s are free from the reign of "+$.y+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.m
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.L
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.av+" Quest Online: The "+$.ab+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.fy
t.i(0,new R.a4("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.y+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.m
p=p+o+" shows the "
r=$.r
t.i(0,new R.bF("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.L+"s in time to stop them.    ")],H.a([],i),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.F(s,t,null),$.bM)}}
Y.mp.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Sherpa Parka",H.a([$.bs,$.T,$.cl],s),"Clearly the best class uses this.",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Guide Book",H.a([$.a_,$.bs,$.aB,$.K,$.T,$.Y],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Whistle",H.a([$.D,$.T,$.aY],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Announcement System",H.a([$.D,$.T,$.a7,$.Y],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.mb,$.k)
t.i(0,$.cc,$.k)
t.i(0,$.dm,$.n)
t.i(0,$.dz,$.k)
r="Now that the "+$.y+" is out of the way, a group of "
q=$.r
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.m
o=[U.b]
t.i(0,new R.a4("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.L+", but they are happy.")],H.a([],o),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.y+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.m
t.i(0,new R.bF("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.r+" "+$.L+"s in time to stop them.    ")],H.a([],o),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.F(s,t,null),$.bM)}}
T.mq.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Doll",H.a([$.ul,$.ax,$.at,$.S],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Soul Puppet",H.a([$.X,$.at,$.S,$.a_,$.b0],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Mirror",H.a([$.uf,$.S],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.K,$.S,$.az],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Shades",H.a([$.am,$.aQ,$.S],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.eq,$.H)
q.i(0,$.es,$.k)
q.i(0,$.c6,$.n)
p=$.m
o="The "+p+", guided by a "+$.r+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.y
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.bz+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.M("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.R(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=$.m
p="The "+j+" finds a Violent "
l=$.r
p=p+l+". A Magical Talking "
k=$.ab
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.y
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.M("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.R(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.oi(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h=this.f
h.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cE,$.k)
s.i(0,$.iL,$.k)
s.i(0,$.fh,$.n)
s.i(0,$.c4,$.k)
s.i(0,$.cs,$.n)
s.i(0,$.dm,$.H)
p=$.m
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ab
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.y
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.bz+". The "+p+" is victorious. "
s.i(0,new R.M("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.R(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j="Now that the "+$.y+" has been defeated, a Copy "
p=$.m
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.r
j=j+k+"s "
l=$.L
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.e8+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a4("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.ec(),!1,!1,new Y.bX("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.y
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.M("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.R(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.dd(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iJ,$.k)
t.i(0,$.cs,$.k)
t.i(0,$.ma,$.k)
t.i(0,$.fb,$.n)
t.i(0,$.hl,$.k)
t.i(0,$.cr,$.n)
t.i(0,$.es,$.H)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.r
t.i(0,new R.M("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.av+" laws put in place by "+$.y+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.m
p="The "+r+" finds a weeping Broken Hearted "
q=$.r
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.av
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.L
t.i(0,new R.a4("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.fv(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.k)
q=$.m
m="The "+q+"  and the "
r=$.dD
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.y
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.M("Flushed Shipping Dungeon",!1,[new U.b(m),new U.R(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.z(C.n)+".",n)],H.a([],i),R.dS(),!1,!1,new Y.iS(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ak)
n=$.m
r="The "+n+"  and the "
q=$.dD
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.y
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.M("Pitched Shipping Dungeon",!1,[new U.b(r),new U.R(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.z(C.n)+".",m)],H.a([],i),R.dS(),!1,!1,new Y.jY(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ak)
h.i(0,new X.F(s,t,null),$.aA)}}
B.mr.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Family Ashes",H.a([$.aE,$.aq,$.T,$.aC,$.bY],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Last Will and Testament",H.a([$.a_,$.K,$.T,$.aC,$.mO],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Grooming Guide",H.a([$.aB,$.T,$.ai],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Powered Attorney",H.a([$.wC,$.T,$.u3,$.mO],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Executer's Ax",H.a([$.u4,$.T,$.as,$.mO],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cj,$.n)
r=$.y
q="With the death of the "+r+", it now falls to the "
p=$.m
o=[U.b]
t.i(0,new R.a4("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.r+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
r="The "+$.y+" has released the frogs into the "
p=$.m
t.i(0,new R.bF("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.F(s,t,null),$.bM)}}
X.mt.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Wand",H.a([$.X,$.S,$.a2,$.bm],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Angel Feather",H.a([$.bm,$.by,$.S,$.aR,$.a9,$.a_,$.a2],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Never Ending Story DVD",H.a([$.bV,$.mN,$.S,$.a2,$.aX,$.bm],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Candle",H.a([$.bm,$.aR,$.S,$.aq],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Figurine",H.a([$.aD,$.aR,$.S,$.bm],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.tO,$.k)
q.i(0,$.cr,$.n)
q.i(0,$.aO,$.k)
q.i(0,$.d1,$.k)
p=$.m
o="The "+p+" is just minding their own business when they see a wizened "
n=$.r
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.L+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.y
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ab
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.FZ
i=[U.b]
q.i(0,new R.M("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.R(k,p,j)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.m
j="The "+n+" has slain "+$.y+", but there\u2019s still one thing left to do. The land is infested with terrifying creatures called angels and it\u2019s been creeping the "+n+" out the whole time. Clearly their ultimate quest for this land must be to eliminate all the angels and free the land from their terror."
p="Angel killing is a lot harder than the "+n+" expected, and they were already expecting it to be pretty tough. The angels have huge amounts of health, and they\u2019re now completely pissed off over the whole exterminating them thing going on. The land is 100 times more terrifying now with swarming angels, but things are always darkest before the dawn! The "+n+" continues on their righteous quest."
k="All of the horrible angels have finally been slain. The land has been saved from their menace. The "+n+" excitedly waits for their quest reward, but nothing happens. They go to some of the "
l=$.r
q.i(0,new R.a4("Kill the Angels",!1,[new U.b(j),new U.b(p),new U.b(k+l+" villages to ask for a reward, but they are refused. Frankly, the "+l+"s would have preferred the angels remained instead of hiding in their homes while the "+n+" was waging their one person war. Maybe genocide wasn\u2019t the right answer after all?")],H.a([],i),R.dd(),!1,!1,new Y.dU("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.k)
s.i(0,$.hh,$.n)
s.i(0,$.dA,$.k)
p=$.m
o="The "+p+"  is approached by a Crafty "
m=$.r
o=o+m+" who offers them a magical "
l=$.ab
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.y
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.M("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.R(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.dy,$.H)
t.i(0,$.cF,$.k)
t.i(0,$.d1,$.k)
r=$.m
q="The "+r+" finds a grey town of despondant "
p=$.r
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.y
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ab
t.i(0,new R.M("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.R("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.m
o="The "+r+" discovers a group of "
p=$.r
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.y
t.i(0,new R.M("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.R("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.fv(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.F(s,t,null),$.ar)}}
Q.mB.prototype={
b3:function(a){var t=0,s=P.bj(),r,q,p
var $async$b3=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:q=W.mA(null,a,null)
p=new W.i9(q,"load",!1,[W.U])
t=3
return P.ch(p.gF(p),$async$b3)
case 3:r=q
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$b3,s)},
$asdw:function(){return[W.ew]},
$ascd:function(){return[W.ew,P.bi]}}
Q.o9.prototype={
aT:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bj(),r,q=this,p,o,n
var $async$R=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.ch(q.cN(b),$async$R)
case 3:p=n.mA(null,d,null)
o=new W.i9(p,"load",!1,[W.U])
t=4
return P.ch(o.gF(o),$async$R)
case 4:r=p
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$R,s)}}
Q.o6.prototype={
aT:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bj()
var $async$R=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:throw H.h("Read NYI")
return P.bp(null,s)}})
return P.bq($async$R,s)},
$asdw:function(){return[Q.jX]},
$ascd:function(){return[Q.jX,P.bi]}}
V.mE.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Inkwell",H.a([$.aQ,$.bk,$.S,$.by],s),null,!1,"Vial of Not-ABs Oil")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Splatfest T-shirt",H.a([$.O,$.b3,$.S,$.ua],s),null,!1,"Mechandising Party")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Friendship Bracelet",H.a([$.O,$.bk,$.S,$.aH,$.ex],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Bonding Manacles",H.a([$.D,$.b_,$.S,$.aH,$.ex,$.aE],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Friendship Stairs",H.a([$.X,$.mN,$.bk,$.aH,$.S,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cP,$.k)
q.i(0,$.cr,$.H)
q.i(0,$.aO,$.H)
q.i(0,$.iP,$.k)
q.i(0,$.cs,$.H)
q.i(0,$.wi,$.k)
p=$.m
o="The "+p+"  and the "
n=$.dD
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
k=$.y
l=l+k+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+k+"."
j="Slaying the "+k+" proves the POWER OF TEAMWORK!"
i=[U.b]
q.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.R(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+k+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",j)],H.a([],i),R.dS(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
j=$.m
k="The "+j+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
k=k+n+"s explains that before  "
p=$.y
k=k+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+j+" vows to help. "
n="The "+j+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+j+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+j+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+j+"'s "+$.bz+". The "+j+" is finally free to restore the chains, bringing peace and understanding to the land. "
j="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+j+"."
p=$.xh
q.i(0,new R.M("Chain the Towers",!1,[new U.b(k),new U.b(n),new U.b(l),new U.R(m,j,o)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
o="The "+p+" learns of the "
j=$.av
o=o+j+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.r
o=o+m+" explains that the "
l=$.y
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+j+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+j+" Tower . "
k="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.bz+". The "+p+" is finally able to see what lies at the top of the "+j+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
q.i(0,new R.M("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.R(k,"The "+j+" Tower is more at risk than ever before.",p)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
k=$.r
j=j+k+" on "+$.av+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
k="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+k+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+k+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.e8+" has so many friends, they have to assume everyone in this fight is already in their friend list."
q.i(0,new R.a4("One Degree of Separation",!1,[new U.b(j),new U.b(n),new U.b(k)],H.a([],i),R.dR(),!1,!1,new Y.bX("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
k="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.av
k=k+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
j="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.e8+" is now more popular with your friends than you are."
q.i(0,new R.a4("Steal The Friends",!1,[new U.b(k),new U.b(j),new U.b(n)],H.a([],i),R.oi(),!1,!1,new Y.bX("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
n="The "+p+"  and the "
j=$.dD
n=n+j+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
k="The "+p+"  and the "+j+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.y
k=k+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+j+" together."
q.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.b(n),new U.R(k,"The "+p+" and "+j+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.z(C.n)+".",o)],H.a([],i),R.dS(),!1,!1,new Y.hQ(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ak)
o=this.f
o.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Ink","Paper","Color","Quills"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.bg,$.H)
s.i(0,$.hh,$.H)
s.i(0,$.cF,$.H)
s.i(0,$.c6,$.k)
s.i(0,$.fe,$.H)
p=$.m
n="The "+p+" comes across an enormous wall. Strange symbols are spread across its face. An indent in the wall indicates a door will appear if the puzzle of the wall is solved."
m="The "+p+" is getting annoyed trying to solve the wall. They start inking graffiti on the wall out of spite. Suddenly, they realize that some of the symbols light up when the ink touches it."
l="The "+p+" spends a good hour painting the wall. A number of symbols light up but nothing else happens. The "+p+" realizes unhappily that they probably need to paint only the symbols. Shit."
k="The wall is finally clean except for the appropriate symbols and the door is open. The "+p+" is eager to fight "
j=$.y
k=k+j+" and give some payback for the terrible wall puzzle. "
h=j+" is defeated and the "+p+"\u2019s payback is complete. "
s.i(0,new R.M("Paint the Wall",!1,[new U.b(n),new U.b(m),new U.b(l),new U.R(k,"With the "+p+"\u2019s defeat, "+j+" closes the door repaints the outside wall, just to be a jerk.",h)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.H)
h=$.m
j="The "+h+" is visiting a "
p=$.r
j=j+p+" town, but before they could reach it, a crowd of angry "+p+"s starts charging towards them. \u201cThere\u2019s the one who messed up our town!\u201d The "+h+" decides to make a hasty retreat."
k="Coming back to the "+p+" town secretly, the "+h+" finds the mess the town is in. Ink is covering the town and most of its residents are hard at work cleaning the ink. Wanted posters with their face are plastered all over town. The "+h+" discreetly helps clean the town and vows to clear their name."
l="The "+h+" heads back to the town, but they hear loud screaming. They rush towards the center of town and find their culprit, themself. Or rather something in the shape of the "+h+" with an otherworldly transparent color. The "+h+" soundly defeats the doppelganger in a quick strife. "+p+"s witness the smackdown and cheer. The "+h+"\u2019s name has been cleared!"
m="The "+h+" realizes that the doppelganger was created by "
n=$.y
m=m+n+" and more could be created if unstopped. The"+h+" tracks "+n+"\u2019s lair down by following the path of vandalism created by their doppelganger. It\u2019s time to take "+n+" down for framing the "+h+"."
p=n+" is defeated and doppelganger production has been stopped. The "+p+"s apologize for mistaking the "+h+" for the real vandal."
s.i(0,new R.M("Framed for Vandalisim",!1,[new U.b(j),new U.b(k),new U.b(l),new U.R(m,n+" begins making more doppelgangers to tarnish the "+h+"\u2019s good name.",p)],H.a([],i),R.dd(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.m
h="The "+p+" is playing against a "
n=$.r
h=h+n+" in a friendly game of "+$.ab+" Battle. With some smooth moves, they pull out a victory. The "+n+" comes over for a handshake. The "+p+" reaches out what would be their hand, if it wasn\u2019t currently a melting stump. The "+p+" screams in horror, but their hand instantly reforms. What the hell was that about?"
m=$.y
l="The entrance to "+m+"\u2019s lair is blocked by huge metal bars, with no apparent mechanisms to open it. The "+p+" walks around the lair looking for another way in, but suddenly everything starts growing! No wait, it\u2019s actually just the "+p+" slowly dissolving into a puddle. Again?! The dissolving process is once again reversed after a bunch of screaming."
n="The "+p+" makes their way to a secluded hut. A wizened "+n+" hermit sits in a meditative pose. The "+p+" says they were told that he could explain what was happening to the "+p+". The "+n+" nods and tells the "+p+" that their aspect was meant for a race of squid-like creatures with the power to turn into ink. Having the aspect means they are partially a squid now and are saddled with the same ability. The "+p+" will have to learn to control their new power if they wish to succeed in the session."
m="After some time practicing the "+p+" has gotten the hang of their strange ability and returns to "+m+"\u2019s lair. They proceed to melt into a squid-like form make of ink and effortlessly slide through the bars. Jeez that feels weird. "+m+" has been very impatient waiting for the "+p+" and immediately starts the strife!"
k="The "+p+" raises a hand in victory, and then has to shake said hand to stop it from turning to ink again. It sure is annoying being a squid now."
s.i(0,new R.M("An Inky Situation",!1,[new U.b(h),new U.b(l),new U.b(n),new U.R(m,"With a great blow, the "+p+" is slammed into a wall hard and turns into a puddle with eyes, before reforming. This would be funny if the "+p+" hasn\u2019t possibly died from the impact.",k)],H.a([],i),R.Gl(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
o.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Nostalgia","Video Games","Ninety","Cartoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ep,$.k)
t.i(0,$.cr,$.H)
t.i(0,$.aO,$.H)
t.i(0,$.c6,$.k)
t.i(0,$.eu,$.H)
r=$.m
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
p=$.r
q=q+p+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+p+" kept rhyming "
n=$.L
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+p+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+p+" approaches the "+r+". And aura of "+$.av+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+p+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
p=this.x1
t.i(0,new R.Z("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],i),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
r="The "+p+" has finally tracked down the location of "
q=$.y
t.i(0,new R.M("Beat the Games",!1,[new U.b(r+q+"\u2019s lair. Surprisingly it\u2019s inside a gaudy arcade rather than a dungeon. The door to "+q+"\u2019s lair is locked, with the key inside a prize vendor. The "+p+" will need to win enough tickets to earn that key."),new U.b("The "+p+" is struggling to win any of the arcade games; they all seem impossibly hard. A "+q+" minion mocks them. They tell the "+p+" true gamers can easily beat any of these games."),new U.b("The "+p+" discovers the ultimate secret. Most of these games have cheat codes. Super difficult games are a lot easier when you can give yourself 30 lives."),new U.R("With enough tickets earned, the "+p+" takes the key and enters "+q+"\u2019s lair. "+q+" has been impatiently waiting. It\u2019s time to strife! ","A giant game over sign drops down from the ceiling.","The "+p+" beats "+q+", just like all the hard games they had to play. Who\u2019s a true gamer now?")],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o.i(0,new X.F(s,t,null),$.bM)}}
B.hs.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a5)
s=A.j("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),[H.Q(t,0)]))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.k)
q.i(0,$.bg,$.H)
q.i(0,$.dP,$.k)
q.i(0,$.c4,$.n)
q.i(0,$.e5,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.Z("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.B(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eu,$.k)
s.i(0,$.er,$.H)
s.i(0,$.et,$.n)
s.i(0,$.cP,$.k)
s.i(0,$.cj,$.H)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.Z("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.B(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.bg,$.H)
t.i(0,$.cc,$.n)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
t.i(0,new R.Z("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.B(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
r="The "+p+" learns that all of the local "
q=$.r
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.L
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.v3(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
n.i(0,new X.F(s,t,null),$.aA)},
A:function(a){return this.ch},
gH:function(a){return this.ch}}
A.a5.prototype={
ghr:function(){var t,s,r,q,p,o
t=H.a([],[P.x])
s=new A.k0(null,null)
s.dc(this.r.a)
if(this.x===0)return t
r=P.db(G.zL(this.r),!0,G.a1)
C.b.dg(r,new A.mV())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bH)(r),++p){o=r[p]
if(!(o instanceof G.ae||o.gec().length===0))t.push(" "+Y.I7(s.i2(o.gec())))}return t},
gbF:function(){var t,s,r
for(t=this.r,s=new P.dt(t,t.r,null,null,[null]),s.c=t.e,r=0;s.G();)r+=s.d.gbF()
return r},
ghg:function(){var t=this.r
return new H.eT(t,new A.mU(),[H.Q(t,0)])},
ghB:function(){var t,s,r,q,p
for(t=this.ghr(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bH)(t),++q)r+=t[q]+" "
return r+this.e},
A:function(a){return this.ghB()},
aD:function(a,b){var t=b.gbF()-this.gbF()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bG(t)},
J:function(a,b,c,d,e){var t,s,r
t=P.jK(b,null)
this.r=t
if(t.a===0)t.h(0,$.wI)
s=P.jK(this.ghg(),null)
for(t=new P.dt(s,s.r,null,null,[null]),t.c=s.e;t.G();){r=t.d
this.r.aw(0,r.geY())
this.r.an(0,r)}$.$get$x7().push(this)},
$isbJ:1,
$asbJ:function(){return[A.a5]}}
A.mV.prototype={
$2:function(a,b){return a.ger()-C.a.bG(b.ger())},
$S:function(){return{func:1,args:[G.a1,G.a1]}}}
A.mU.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a1]}}}
N.n1.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Gavel",H.a([$.X,$.mM],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Caution Tape",H.a([$.aD,$.b_],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Deerstalker Hat",H.a([$.O,$.ax],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Mystery Novel",H.a([$.K,$.aB],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Dish Served Cold",H.a([$.bU,$.ao,$.bs],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Pony Pals: Detective Pony ",H.a([$.K,$.aB,$.am],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Handcuffs",H.a([$.aE,$.D,$.b_],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fd,$.H)
q.i(0,$.c5,$.n)
q.i(0,$.cF,$.H)
p=$.m
o="The "+p+" finds an elaborate courtroom full of "+$.L+"ing "
n=$.r
m=[U.b]
q.i(0,new R.Z("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ab+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.k)
s.i(0,$.dm,$.n)
s.i(0,$.cP,$.n)
p=$.m
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.r
l=o+l+" yells 'Stop that thief' in betwen "+$.L+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ab+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.FV
s.i(0,new R.Z("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.B(),!1,!1,new Y.d7("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.k)
t.i(0,$.cj,$.n)
t.i(0,$.dl,$.H)
t.i(0,$.ev,$.n)
t.i(0,$.eq,$.n)
t.i(0,$.ff,$.n)
t.i(0,$.iM,$.n)
r=$.m
q="The "+r+" finds a crowd of "
p=$.L
q=q+p+"ing "
o=$.r
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.G7
t.i(0,new R.Z("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.B(),!1,!1,new Y.d7("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.aA)}}
S.n3.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Shining Armor",H.a([$.aE,$.mQ,$.T,$.fn],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Excalibur",H.a([$.a_,$.mQ,$.T,$.aM,$.as,$.ey],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Noble Steed",H.a([$.D,$.T,$.bl,$.at],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Hero's Shield",H.a([$.aE,$.fn,$.T,$.mQ],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.m8,$.k)
t.i(0,$.dn,$.k)
t.i(0,$.e6,$.k)
t.i(0,$.ff,$.k)
t.i(0,$.fd,$.n)
r="The "+$.y+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.y
r="Now that the "+q+" is defeated, the "
o=$.r
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.m
t.i(0,new R.a4("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.av
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.y
n=n+q+". A Learned "+$.r+" explains that it can only be defeated by the Legendary "
r=$.ab
n=n+r+" Blade. The "
m=$.m
t.i(0,new R.a4("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
r="The volcanos of the land are weirdly active after the defeat of the "+$.y+". One begins to erupt near a "
m=$.r
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.L+"s, but not really doing anything to evacuate or save anyone. The "
o=$.m
t.i(0,new R.a4("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
Q.n5.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("LAW Gavel",H.a([$.S,$.X,$.mM],s),"Organics seem to respect this. Use it to your advantage.",!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("LAW Caution Tape",H.a([$.S,$.aD,$.b_],s),"For when you want to tell inferior organics to keep out.",!1,"Impassible Barrier")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("STOP SIGN",H.a([$.S,$.uq,$.D,$.b_],s),"This isn't a weapon, dunkass.",!1,null)
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Scales","Disorder","Chaos","Injustice"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fd,$.k)
q.i(0,$.dm,$.n)
q.i(0,$.cj,$.n)
q.i(0,$.c5,$.H)
q.i(0,$.cE,$.H)
p=$.m
o="The "+p+" is told by a worried "
n=$.r
o=o+n+" that a group of underling rebels are causing havoc across the land, breaking laws left and right. They must be stopped! Eventually."
m="The "+p+" has located a rebel hideout. The underlings get ready for a battle to the death when the "+p+" suddenly breaks out a "+$.ab+" and starts getting all lawyerly on them. The underlings are all sentenced to 30 years in prison, without parole."
l="The "+p+" finds out through interrogating enough of the underling rebels that they have a big mean leader they call the "
k=$.y
l=l+k+". Sounds like a challenge. The "+p+" cracks their knuckles as they prepare for the biggest case on this side of Skaia."
j="Arriving at the final rebel hideout, "+p+" prepares for battle against the "+k+". For their crimes against the "+n+"s, they're getting the DEATH SENTENCE."
n="The "+k+" lies slain by the "+p+"'s "+$.bz+". The "+p+" has won! The "+n+"s are no longer plagued by the lawbreakers."
i=[U.b]
q.i(0,new R.M("Punish the Rebels",!1,[new U.b(o),new U.b(m),new U.b(l),new U.R(j,"The "+k+" continues to run their underling crime ring with the defeat of the "+p+".",n)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Heroics","Villains","Heroes","Powers","Justice","Metropolises","Comics"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dn,$.k)
s.i(0,$.c6,$.n)
s.i(0,$.cr,$.n)
s.i(0,$.dn,$.H)
s.i(0,$.et,$.H)
p=$.m
o="The "+p+" is taking a walk through one of the land's many cities when they witness a fight break out between an Underling Hero and "
m=$.r
o=o+m+" Villain. One of the Underling Hero's attacks hits the "+p+". They won't be having any of that! The "+p+" helps the "+m+" Villain defeat the Underling Hero, and in turn gets invited to join a league of shady criminals. Sweet."
l="The "+p+" teams up with some other villainous "+m+"s to take down a rival team of Underling Heroes. They won't be having any of this LAW business, certainly. Rules were made to be broken, and that's just what the "+p+" is going to do."
m="After defeating yet another league of Underling Heroes, the "+p+" and the other "+m+" Villains feel a cold chill run down their spine. In the distance, lightning strikes a mountain, revealing the headquarters of the  "
k=$.y
m=m+k+", leader of the Underling Heroes and the last hope to preserve law. They're going down!"
j="The "+p+" arrives at the "+k+"'s headquarters, fighting through waves of Underling Heroes before they can finally reach the "+k+". It\u2019s time to end the LAW, once and for all!"
h="The "+k+" lies slain by the "+p+"'s "+$.bz+". The last of the Heroes is no more.  Injustice takes over the land at last."
s.i(0,new R.M("Become the Villain",!1,[new U.b(o),new U.b(l),new U.b(m),new U.R(j,"The "+p+" is defeated. The "+k+" holds on to the last remnants of justice in the land.",h)],H.a([],i),R.dd(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=$.m
k="The "+h+" is taking a walk through one of the land's many cities when they witness a fight break out between some "
p=$.r
k=k+p+" Hero and an Underling Villain. Being naturally inclined toward the preservation of order, the "+h+" teams up with the "+p+" Hero and triumphs against the Underling Villain. As a reward, the "+p+" Hero invites the "+h+" to join an elite team of crime fighting good guys! Awesome!"
p="The "+h+" works together with some "+p+" Heroes to take down and arrest some Underling Villains. Slowly but surely, the balance of order and disorder begins to shift in order's favor. The number of villains is getting fewer and fewer."
j="With the last of the Villainous Underlings defeated, the "+h+" rejoices, thinking that justice has been served in this land. But what's this? Lightning strikes the ground far away and causes a dark mountain to shoot up into the sky! The lair of the final villain, the "
m=$.y
j=j+m+", has been revealed."
l="The "+h+" storms the lair of the "+m+", the final villain in all of this land. It's time to bring back KAW, once and for all!"
o="The "+m+" lies slain by the "+h+"'s "+$.bz+". The last of the Villains is no more. Justice is finally preserved in the land at last."
s.i(0,new R.M("Become the Hero",!1,[new U.b(k),new U.b(p),new U.b(j),new U.R(l,"The "+h+" is defeated. The "+m+" holds on to the last remnants of injustice in the land.",o)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Greed","Poverty","Discrepancy","Famine","Starvation"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hk,$.k)
t.i(0,$.d2,$.n)
t.i(0,$.iN,$.n)
t.i(0,$.iK,$.H)
t.i(0,$.dO,$.H)
r=$.m
q="The "+r+" looks upon the land and notices how some of the "
p=$.r
q=q+p+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
o="The "+r+" comes up with a plan to bring balance to the land. If there's not enough resources, they'll simply have to cut the "+p+" population in half. But through murder? No... They need something cleaner. Something more random."
m="The "+r+" wanders through a poverty striken "+p+" village and is told the legend of the "
l=$.y
m=m+l+". The "+l+" lives in a lair on the other side of the land, where they hoard all of the land's resources. Oh yeah, and they've got this golden "
k=$.ab
m=m+k+" that can half the number of "+p+"s on the land. The "+r+" finds this especially interesting. "
j="The "+r+" shows up at the "+l+"'s lair and asks them to hand over the golden "+k+". The "+l+" agrees... if the "+r+" can defeat them first!"
p="The "+l+" lies slain by the "+r+"'s "+$.bz+". The "+r+" uses the golden "+k+" to cut the "+p+" population in half. Problem solved. "
t.i(0,new R.M("Bring the Balance",!1,[new U.b(q),new U.b(o),new U.b(m),new U.R(j,"The "+r+" is defeated and left without the golden "+k+" they seek.",p)],H.a([],i),R.dd(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
k="The "+p+" looks upon the land and notices how some of the "
r=$.r
k=k+r+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
j="The "+p+" comes up with a plan to bring balance to the land. They can force the "+r+"s who have an abundance of resources to share them with the "+r+"s who are resource deprived. But when the "+p+" tells them this, they get understandably upset. They worked so hard for their resources, why should they share them with others? The "+p+" is left stumped."
m="The "+p+" wanders through a poverty striken "+r+" village and is told the legend of the "
o=$.y
m=m+o+". The "+o+" lives in a lair on the other side of the land, where they hoard all of the land's resources. The "+p+" is confused as to why nobody mentioned this before. The solution to the resource problem is obvious now."
r="The "+p+" shows up at the "+o+"'s lair and asks them to be kind and share their resources with the "+r+"s. The "+o+" agrees... if the "+p+" can defeat them first!"
q="The "+o+" lies slain by the "+p+"'s "+$.bz+". The "+p+" distributes all of the denizen's resources throughout the land, improving living conditions everywhere."
t.i(0,new R.M("Create the Balance",!1,[new U.b(k),new U.b(j),new U.b(m),new U.R(r,"The horrific inequality maintained by the "+o+" continues with the defeat of the "+p+".",q)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.ar)}}
K.n7.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Creeping Vine",H.a([$.X,$.S,$.aS,$.at],s),null,!1,"Sentient Plant Tentacles")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Lollipop",H.a([$.u6,$.S,$.aH],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Golem",H.a([$.aE,$.au,$.S,$.at],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Ectoplasm",H.a([$.bY,$.S,$.aH],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Aqua Vitae",H.a([$.aQ,$.S,$.aH,$.a_,$.a2],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Homunculus",H.a([$.bl,$.S,$.at],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cc,$.k)
q.i(0,$.bg,$.k)
q.i(0,$.hj,$.H)
q.i(0,$.aO,$.n)
q.i(0,$.mb,$.n)
q.i(0,$.cQ,$.H)
p=$.m
o="The "+p+" finds a village of compliant "
n=$.r
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.L+"ing in panic. Don't upset "
m=$.y
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.M("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.R(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.k)
s.i(0,$.cs,$.k)
s.i(0,$.cQ,$.H)
s.i(0,$.aO,$.n)
o=$.m
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.r
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.y
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.M("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.R(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o=$.m
j="The "+o+" finds themself in the middle of a large plain. They see a small pedestal with a seed packet and note.The note says the field has magical properties that grows any plant in only half an hour. If one of the seeds in the packet can be grown, the lair of "
i=$.y
j=j+i+" will be revealed.  Sounds easy enough. The "+o+" makes a small hole and drops a seed in. The plant immediately starts growing, but almost as immediately "+i+" minions zoom in from out of nowhere and stomp the plant dead."
l="The "+o+" attempts to stop the minions by force, but they are surprisingly agile and make it past the "+o+" to the planted seeds every time. The "+o+" reads the note again and decides to try growing some other plants to protect the seeds as they grow. The "+o+" eats a few fruits they had in their sylladex and grows a wall of trees from the leftover seeds. However the minions are still able to climb and slip through at rapid speed. A few trees isn\u2019t going to be enough to protect the seeds."
k="The "+o+" travels across their land gathering a bunch of seeds to strew them about the field and make a giant maze. Then they plant a few seeds deep inside the maze. The "+i+" minions are very quick, but they aren\u2019t that smart. Some of the seeds manage to grow before the minions can figure out how to get to them. On close inspection, leaves of the full-grown plants are actually maps of the "+o+"\u2019s land, with "+i+"\u2019s lair marked. "
m="The "+o+" tracks down "+i+"\u2019s lair using their leaf map. They toss the leaf aside and pull out their "+$.bz+", ready to throw down!"
h="With "+i+" gone, the "+$.r+"s take up residence in the plain. They were always too afraid to when "+i+" minions were around. They thank the "+o+" for their work."
s.i(0,new R.M("Protect the Seeds",!1,[new U.b(j),new U.b(l),new U.b(k),new U.R(m,"With their defeat, the "+o+"\u2019s efforts to find "+i+"\u2019s lair have been made pointless.",h)],H.a([],p),R.oh(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.d2,$.k)
t.i(0,$.bg,$.H)
t.i(0,$.dP,$.k)
t.i(0,$.c4,$.n)
t.i(0,$.e5,$.n)
t.i(0,$.iI,$.n)
r="Drawn by wailing and "+$.L+"ing, the "
q=$.m
r=r+q+" enters a rotting "
o=$.r
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.y
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.M("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.R(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.ar)}}
G.n8.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("FAQ",H.a([$.a7,$.S,$.Y,$.bZ],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Flashlight",H.a([$.aD,$.S,$.aR,$.a7,$.bZ],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Octet",H.a([$.S,$.aR,$.bZ,$.a_,$.u7],s),null,!1,"D13")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Horseshoe",H.a([$.wM,$.S,$.ah],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Rabbits Foot",H.a([$.wV,$.S],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("4 Leaf Clover",H.a([$.aS,$.S,$.aR,$.bZ],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("8-Ball",H.a([$.aQ,$.S,$.at],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.m7,$.k)
q.i(0,$.hi,$.n)
q.i(0,$.dN,$.k)
q.i(0,$.es,$.k)
p=$.m
o="The "+p+" is searching for the lair of "
n=$.y
o=o+n+" when some local "
m=$.r
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.i(0,new R.M("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.R(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.m
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.L+"ing "+$.r+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.y
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.M("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.R(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.m
l="The "+m+" finds the enormous casino that serves as "
k=$.y
l=l+k+"\u2019s lair. At the center of the casino is a lift to "+k+"\u2019s quarters that can only be activated with a key earned by winning enough "
j=$.av
l=l+j+" chips at all the casino games. The "+m+" starts with Blackjack, and wins easily by counting the cards being dealt and only betting high when the odds are good. It helps that the "+k+" minions and "
p=$.r
l=l+p+"s aren\u2019t smart enough to pick up on what the "+m+" is doing."
n="The next casino game to beat is the roulette table. The "+m+" watches the "+p+"s play for a couple of games. They quickly realize there\u2019s a defect on the wheel that causes the ball to slightly favor the right side of the wheel. They bet accordingly and eventually earn enough "+j+" chips to move to the next casino game."
o="The "+m+" is stuck at the the final casino game, the slot machines. The only way to win enough "+j+" chips is by winning the Mega Jackpot, but there aren\u2019t any noticeable patterns or defects in the machines to take advantage of. The "+m+" puzzles over this for a while, before paying attention to who wins the Mega Jackpot. The only winners are "+k+" minions; the slots have been rigged so the house never has to pay out! The "+m+" cuts in front of a "+k+" minion at a slot machine and wins the Mega Jackpot that was meant for the minion. The minions aren\u2019t happy about this, but they can\u2019t complain without revealing to the "+p+" customers that the game is rigged."
j="The "+m+" turns in their "+j+" chips at the front desk for the lift key to "+k+"\u2019s quarters. As soon the lift brings them to "+k+"\u2019s quarters, they are immediately attacked! It seems "+k+" is not very pleased that the "+m+" found ways to cheat at all the casino games. "
p=k+" has been slain, and ownership of the casino is up for grabs. The "+m+" puts the casino in the hands of slightly more competent than average "+p+"s so they can continue exploring their land."
q.i(0,new R.M("Beat the Odds",!1,[new U.b(l),new U.b(n),new U.b(o),new U.R(j,k+" is pleased they got "+m+" out of the way, so "+k+"\u2019s casino can become profitable again.",p)],H.a([],i),R.dR(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
p=this.f
p.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.n)
s.i(0,$.aO,$.n)
s.i(0,$.dy,$.k)
s.i(0,$.m6,$.k)
s.i(0,$.er,$.k)
s.i(0,$.hh,$.k)
o=$.m
n="The "+o+" walks into a "
m=$.r
n=n+m+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ab
n=n+l+", but "
k=$.y
n=n+k+" has hoarded all of the planets "
j=$.av
l=n+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+o+" vows to take back some "+j+" Candles for the poor "+m+"s. "
n="After a long search, the "+o+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+o+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+o+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+o+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+o+" triumphantly returns to the village among the joyful "+$.L+"ing of the "+m+"s."
k="The "+o+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
m="Never again shall the "+m+"s be without "+j+" Candles!"
s.i(0,new R.M("The Candlestick Taker",!1,[new U.b(l),new U.b(n),new U.b(h),new U.R(k,"The "+j+" candles are once again at risk.",m)],H.a([],i),R.oi(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.m
j="The "+m+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.r
j=j+k+" explains that the "
h=$.y
s.i(0,new R.M("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+m+" vows to help.   "),new U.b("The "+m+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.L+"s as they bask in the light. The "+m+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+m+" must prepare themself for a tough fight.  "),new U.R("The "+m+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fe,$.n)
q.i(0,$.bg,$.n)
q.i(0,$.fg,$.k)
q.i(0,$.aO,$.n)
q.i(0,$.cF,$.k)
o="Now that the "+$.y+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
o=o+n+" sets up a wiki and settles in to help the "
m=$.r
o=o+m+"s deal with it all."
m="Within barely any time at all, the "+m+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+n+" makes sure all of the information is from credible sources."
n="When the "+n+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.e8+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a4("Moderate the Wiki",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],i),R.ec(),!1,!1,new Y.bX("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
l="Now that the "+$.y+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
l=l+n+" shrugs and sets up a wiki and lets the "
m=$.r
l=l+m+"s deal with it all."
m="Within barely any time at all, unmoderated "+m+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+n+" alone, and each claims they are a different SPECIES entirely. The "+n+" finds this to be hilarious."
n="Luckily it turns out all that disinformation running around about the "+n+" thwarts some would be assasins. It turns out the "+n+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
o="The "+$.e8+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a4("Create the Wiki",!1,[new U.b(l),new U.b(m),new U.b(n)],H.a([],i),R.dd(),!1,!1,new Y.bX("Disinformation Network",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.r
n=o+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
m=$.m
n=n+m+" possibly stop it?"
o="The "+m+" pours over maps and charts. What do the sick "+o+"s have in common with each other?  Finally, there is a flash of inspiration. "+o+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+m+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+m+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+m+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+m+" traces the contaminated river back to it's source. The "
j=$.y
q.i(0,new R.M("Shed the Light",!1,[new U.b(n),new U.b(o),new U.b(l),new U.R(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+m+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dN,$.k)
t.i(0,$.m7,$.k)
t.i(0,$.es,$.n)
t.i(0,$.cr,$.n)
t.i(0,$.tR,$.n)
t.i(0,$.c4,$.H)
t.i(0,$.e6,$.H)
t.i(0,$.c6,$.n)
t.i(0,$.cE,$.H)
t.i(0,$.bg,$.n)
t.i(0,$.cI,$.k)
s=$.m
r="The "+s+" is approached by a Fast Talking "
o=$.r
r=r+o+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
n=$.ab
r=r+n+". The "+s+" agrees to perform the titular role."
m="The opening night performance of the Beautiful "+n+" is a huge success! The "+$.L+"ing of the fans is it's own reward!"
n="When it comes time for the next performance of the Beautiful "+n+", the "+s+" is turned away at the door. Apparently the "
l=$.y
o=n+l+" rampaged and terrorized "+o+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
n="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.M("Be the Star",!1,[new U.b(r),new U.b(m),new U.b(o),new U.R(l,"The acting career of the "+s+" is in shambles.",n)],H.a([],i),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n="After the "+$.y+", the "
s=$.m
n=n+s+" is disappointed to learn that barely any of the "
l=$.r
n=n+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
o="The "+$.e8+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a4("Be the Biggest Star in Paradox Space",!1,[new U.b(n),new U.b(l),new U.b(s)],H.a([],i),R.ec(),!1,!1,new Y.bX("What's my name?",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p.i(0,new X.F(q,t,null),$.ar)}}
Z.nl.prototype={
D:function(){var t,s,r,q
t=this.M
s=[G.a1]
r=A.j("Dream Bubbles Book",H.a([$.K,$.ai,$.aB,$.wF],s),null,!1,null)
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),[H.Q(t,0)]))
t=Q.J(null,null,A.a5)
r=A.j("Deck of Uno Cards",H.a([$.mJ,$.uk,$.ai],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Lord's Cape",H.a([$.O,$.T,$.ai],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Drawing Tablet",H.a([$.mR,$.T,$.ai],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("How to Make Friends And Influence People",H.a([$.a_,$.K,$.T,$.bx,$.aB],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dl,$.H)
q.i(0,$.ev,$.H)
q.i(0,$.c4,$.H)
q.i(0,$.cP,$.n)
p="The "+$.y+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.m
p=p+o+" comands that the "
n=$.r
m=[U.b]
q.i(0,new R.bF("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.L+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
o="As soon as the "+$.y+" is defeated, the "
n=$.r
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.m
q.i(0,new R.a4("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.dD
n="The "+p+" reaches the entrance to a massive dungeon. They heard rumors that important information could be found at the bottom. After some very confusing puzzles and a couple of strifes, they find themself at the dungeon\u2019s center. A lone, elderly "+$.r+" is there to greet the "+p+". He tells the "+p+" that "
o=$.y
n=n+o+" needs to be defeated by a powerful hero, and imparts some clues on how to defeat them. Wait a second, isn\u2019t that the "
l=$.m
n=n+l+"\u2019s Denizen? The "+p+" contacts them and passes on the information they found.  "
k="The "+p+" is exploring another dungeon. Deep inside, they enter a large open room, clearly meant for a boss fight. As expected, "+o+" emerges from a large hole in the ceiling and lets loose a roar. The "+p+" readies themself for a fight, but "+o+" takes one glance and immediately goes back into its hole. It looks like "+o+" is only interested in fighting the "+l+". The "+p+" gives them a call and sits around waiting for them to come. After a few hours, the "+l+" has arrived and the strife can finally start."
p="The "+l+" was victorious in his fight against "+o+". The "+p+" also helped."
q.i(0,new R.M("Be the Protagonist",!1,[new U.b(n),new U.R(k,"The "+l+" fought hard, but was ultimately defeated by "+o+".",p)],H.a([],m),R.Gm(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
q.i(0,new R.a4("Skip the Boring Details",!1,[new U.b("The "+p+" finds a giant pillar, inscribed with a long and arduous quest that the "+p+" is destined to complete. However the "+p+" isn\u2019t interested on spending so much time on one quest, so they uses their powers and fast forward right to the end. A parade is held in their honor for completing the grand quest that no one got to see happen. A bit unsatisfying, really.")],H.a([],m),R.oj(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.x
p.i(0,new X.F(s,q,null),$.bM)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.wh,$.k)
t.i(0,$.d1,$.k)
t.i(0,$.bg,$.k)
t.i(0,$.aO,$.n)
s="The "+$.y+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.m
s=s+r+" comands that the "
o=$.r
t.i(0,new R.bF("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.L+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
r="As soon as the "+$.y+" is defeated, the "
o=$.r
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.m
t.i(0,new R.a4("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",this.M,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,t,null),$.bM)}}
S.nn.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Alternate Costume",H.a([$.O,$.T,$.a2,$.a_,$.al],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Mage's Cape",H.a([$.O,$.T,$.a2],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Mage's Staff",H.a([$.X,$.T,$.ah,$.a2,$.dQ],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Walking Broom",H.a([$.jB,$.X,$.T,$.at,$.a2,$.dQ],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.ep,$.k)
t.i(0,$.ff,$.n)
t.i(0,$.cj,$.k)
t.i(0,$.et,$.n)
t.i(0,$.d2,$.H)
r="The "+$.y+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.m
t.i(0,new R.a4("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.B(),!1,!1,new Y.dj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q=$.m
r="The "+q+" is feeling quite pleased with their victory over the "+$.y+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.av
t.i(0,new R.a4("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.B(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="Now that the "+$.y+" has been defeated, the "
o=$.r
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.m
q=q+r+"'s help in planning the brand new city of "
n=$.av
t.i(0,new R.a4("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.L+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.B(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
U.no.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Maiden's Breath",H.a([$.aS,$.T,$.ax],s),null,!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Feather Duster",H.a([$.X,$.T,$.dQ,$.by],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Valkyrie Shield",H.a([$.ax,$.aE,$.D,$.T,$.a_,$.fn,$.ww],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Maiden's Songbook",H.a([$.K,$.T,$.a9,$.aB],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.dz,$.k)
t.i(0,$.cc,$.k)
t.i(0,$.aO,$.n)
t.i(0,$.bg,$.n)
t.i(0,$.dy,$.n)
t.i(0,$.cE,$.n)
r="The "+$.y+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.m
r=r+q+" asks local  "
p=$.r
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bF("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.m
o="The "+q+" has adopted a local "
p=$.r
t.i(0,new R.a4("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.L+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.y+". ")],H.a([],n),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
V.ny.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Puzzle Box",H.a([$.X,$.S,$.a2],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Tesla Coil",H.a([$.a7,$.S,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Coin",H.a([$.D,$.S],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Electronic Door",H.a([$.D,$.S,$.a7,$.Y],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Janus Bust",H.a([$.aE,$.jC,$.au,$.ai,$.S,$.a_,$.a7],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.n)
q.i(0,$.hi,$.H)
q.i(0,$.cF,$.H)
p=$.m
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.r
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.y
k=[U.b]
q.i(0,new R.M("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.R(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.dR(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.m
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.r+" explains that at the end of the Labrinth is the "
l=$.y
q.i(0,new R.M("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.R("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.fd,$.H)
s.i(0,$.c5,$.n)
s.i(0,$.cF,$.H)
s.i(0,$.d1,$.H)
p=$.y
o="The "+p+" has commited a staggering amount of crimes against the local "+$.r+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.m
s.i(0,new R.M("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.R("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hk,$.k)
t.i(0,$.bg,$.n)
t.i(0,$.fg,$.k)
t.i(0,$.aO,$.n)
t.i(0,$.cF,$.k)
r=$.m
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.y
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ab+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.M("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.R(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l=$.m
r="The "+l+" has finally found the lair of "
m=$.y
r=r+m+". Appropriately enough for a Mind Denizen, their dungeon is a giant replica of a brain. Doors in the dungeon simulate neurons by opening and closing at seemingly random intervals to mimic brain activity."
o="The "+l+" has spent far too many hours trying to navigate the dungeon. They raise their fist in frustration, and at the same time, a door opens. They drop their fist and attempt to enter, but the door immediately closes again. They raise their fist once more, and the door opens again, and closes again when the "+l+" drops their fist. They raise and lower their fist a bunch of times, and the door opens and closes in perfect synch. Is...is the dungeon based off of the "+l+"\u2019s brain!?  "
p="The "+l+" is starting to get a hang out of controlling their brain dungeon. Most of the doors can be opened by experimentally moving part of their body or using one of their senses. (The door that opened by licking one of the walls wasn\u2019t very fun) There is only one door the "+l+" is still unable to open, which is likely "+m+"\u2019s."
q="Through some convoluted thought processes focused on thinking about "+m+", the "+l+" manages to open the final door to "+m+". They are relieved it didn\u2019t take some cliche like having to unlock their subconscious or some junk like that. They begin the final fight inside their own mind."
j="With "+m+" defeated, the "+l+" decides to rig explosives around the dungeon and bring the whole place down. The thought that others could basically see the inside of the "+l+"\u2019s mind was a little too creepy."
t.i(0,new R.M("Explore the Brain",!1,[new U.b(r),new U.b(o),new U.b(p),new U.R(q,"Various doors open and close across the dungeon to simulate the "+l+"\u2019s despair in the face of "+m+".",j)],H.a([],k),R.fv(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.H)
n.i(0,new X.F(s,t,null),$.ar)}}
E.nz.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Feather Pen",H.a([$.D,$.T,$.ai,$.by],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Half Finished Bust of Snoop Dog",H.a([$.wU,$.T,$.jC,$.ah,$.a_],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Book of Poetry",H.a([$.K,$.T,$.ai,$.aB],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.dz,$.k)
t.i(0,$.cc,$.k)
t.i(0,$.aO,$.n)
t.i(0,$.bg,$.n)
t.i(0,$.dy,$.n)
t.i(0,$.cE,$.n)
r="The "+$.y+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bF("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
q="You'd think after the dramatic defeat of the "+$.y+" the "
o=$.r
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.m
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ab
t.i(0,new R.a4("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
F.nA.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Piano",H.a([$.ah,$.X,$.a9,$.ai],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Flute",H.a([$.D,$.a9],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Microphone",H.a([$.aY,$.a7],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Violin",H.a([$.X,$.a9],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sheet Music",H.a([$.K,$.a9],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Electric Guitar",H.a([$.aD,$.a9,$.a7,$.aY,$.am],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.aD,$.a9,$.a7,$.am],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Guitar",H.a([$.X,$.a9],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cr,$.ak)
q.i(0,$.tR,$.k)
q.i(0,$.es,$.k)
q.i(0,$.dy,$.n)
q.i(0,$.aO,$.n)
q.i(0,$.m4,$.n)
p=$.m
o="The "+p+" meets a wise old "+$.r+" who tells that the "+$.y+" can only be awoken by the Legendary Hero playing the "
n=$.av
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ab
k=[U.b]
q.i(0,new R.Z("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
n="The "+p+" finds an empty, trashed "
l=$.av
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ab+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.L+"ing "+$.r+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.G_
q.i(0,new R.Z("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.B(),!1,!1,new Y.d7("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.tU,$.ak)
s.i(0,$.dm,$.n)
s.i(0,$.cP,$.n)
s.i(0,$.dy,$.k)
s.i(0,$.m4,$.ak)
o=$.m
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.av
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.y
s.i(0,new R.Z("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ab+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hj,$.ak)
t.i(0,$.c6,$.n)
t.i(0,$.dP,$.n)
r=$.m
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.r
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.L
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.av+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.Z("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aA)}}
Y.nP.prototype={
R:function(a,b){var t=0,s=P.bj(),r,q=this,p,o
var $async$R=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:t=3
return P.ch(A.hC("scripts/Rendering/threed/three.min.js",!1),$async$R)
case 3:t=4
return P.ch(Q.ox(),$async$R)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.aK(p)
o.eW(p,P.xb(["",$.$get$w5()],P.x,S.hG))
o.eV(p,!1)
q.b=p}J.vT(p,b)
r=J.vT(q.b,b)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$R,s)},
$aseN:function(){return[S.ft]},
$ascd:function(){return[S.ft,P.x]}}
V.nZ.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Shorts",H.a([$.O,$.T,$.fm,$.a_],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sidekick Figurine",H.a([$.aD,$.T,$.am],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Steroids",H.a([$.ao,$.T,$.a2],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.m8,$.k)
t.i(0,$.cQ,$.n)
t.i(0,$.hm,$.n)
t.i(0,$.ma,$.n)
t.i(0,$.dz,$.n)
t.i(0,$.bg,$.n)
t.i(0,$.e5,$.n)
t.i(0,$.er,$.n)
t.i(0,$.tV,$.n)
t.i(0,$.iI,$.n)
t.i(0,$.m6,$.n)
r="The "+$.y+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bF("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.m
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.r+" named Professor "
p=$.L
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ab
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.y
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.M("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.R(k,"The "+q+" whited out...",m)],H.a([],n),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m="Now that the "+$.y+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.m
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.r
t.i(0,new R.a4("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.av+" buffs. With a deafening "+$.L+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.B(),!1,!1,new Y.iv("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
G.ob.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Superhero Action Figure",H.a([$.aD,$.am,$.aP],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Action DVD",H.a([$.aD,$.am],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Ghost Busters DVD",H.a([$.aD,$.bY],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Snow Dogs DVD",H.a([$.aD,$.aX,$.bs,$.cl],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Skateboarding Video Game",H.a([$.aD,$.am],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Movie Poster",H.a([$.K,$.am],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Audrey II Plush",H.a([$.aS,$.am,$.O,$.at],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Peashooter Toy",H.a([$.aS,$.aJ,$.am,$.O],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Shitty Sword",H.a([$.aP,$.D,$.am,$.ey,$.as,$.bV],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("GameBro Magazine",H.a([$.K,$.am],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("GameGrl Magazine",H.a([$.K,$.am],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cE,$.n)
q.i(0,$.cI,$.n)
q.i(0,$.c6,$.k)
q.i(0,$.cQ,$.ak)
q.i(0,$.dA,$.ak)
p=$.m
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.r
o=o+n+" manages to catch a video of it, and it goes viral on "+$.av+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.L+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.G0
l=[U.b]
q.i(0,new R.Z("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.B(),!1,!1,new Y.d7("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eq,$.n)
s.i(0,$.dm,$.n)
s.i(0,$.cI,$.n)
s.i(0,$.c6,$.n)
s.i(0,$.dn,$.k)
o=$.m
n="The "+o+" runs towards an explosion in a local "
m=$.r
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.av
s.i(0,new R.Z("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cI,$.n)
t.i(0,$.dN,$.k)
t.i(0,$.cs,$.k)
t.i(0,$.dn,$.n)
r=$.m
q="The "+r+" gets a job at the "+$.av+" Cinema. A new movie, The Lonely "
o=$.ab
q=q+o+" is coming out soon, and "
n=$.r
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.L+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.Z("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aA)}}
N.oe.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Feather'd Cap",H.a([$.O,$.T,$.fm],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Crown",H.a([$.a_,$.uc,$.T,$.fm],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Gunpowder",H.a([$.bu,$.T],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cI,$.n)
t.i(0,$.d1,$.n)
t.i(0,$.dP,$.H)
r="With the closing of the curtain, the "+$.y+" has released the frogs, and yet they are nowhere to be found. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.y
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.m
r=r+o+" to get it back to normal. They organize a team of "
n=$.r
t.i(0,new R.a4("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ab+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
U.b.prototype={}
U.R.prototype={}
R.og.prototype={
A:function(a){return H.z(new H.dX(H.kG(this),null))+": "+this.c},
gH:function(a){return this.c}}
R.Z.prototype={}
R.M.prototype={}
R.a4.prototype={}
R.bF.prototype={}
E.ok.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Curtain",H.a([$.O,$.S,$.aP],s),null,!1,"Show Ender")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Sword",H.a([$.D,$.ey,$.aM,$.S,$.as,$.b0,$.aP,$.bt,$.aC],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Omegaphone",H.a([$.D,$.aY,$.a7,$.S,$.aP],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Trike Horn",H.a([$.aE,$.D,$.aY,$.bx,$.cf,$.S,$.aP],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Bacchus Wine",H.a([$.ao,$.bx,$.ai,$.S,$.a_,$.aP],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Nightmare Fuel",H.a([$.X,$.S,$.b0,$.aq,$.bu,$.aP],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.m3,$.k)
q.i(0,$.dl,$.k)
q.i(0,$.dm,$.k)
q.i(0,$.d2,$.n)
q.i(0,$.c4,$.n)
q.i(0,$.cj,$.n)
q.i(0,$.c5,$.H)
q.i(0,$.dA,$.n)
q.i(0,$.eq,$.k)
q.i(0,$.iM,$.k)
q.i(0,$.ff,$.k)
q.i(0,$.m9,$.k)
q.i(0,$.hj,$.n)
q.i(0,$.ev,$.k)
p=$.m
o="The "+p+" is chilling in a "
n=$.r
o=o+n+" village when a bunch of sentient "
m=$.ab
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.y
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.M("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.R(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fv(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=$.r
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.m
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.y
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.M("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.R(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dy,$.k)
s.i(0,$.c4,$.n)
s.i(0,$.c5,$.k)
s.i(0,$.cr,$.k)
s.i(0,$.cE,$.k)
s.i(0,$.cI,$.n)
s.i(0,$.iL,$.H)
s.i(0,$.dl,$.n)
s.i(0,$.cQ,$.k)
s.i(0,$.c6,$.k)
s.i(0,$.dA,$.H)
p=$.L
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.m
o=o+m+" to do a stupid "
l=$.av
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.y
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.R(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.m3,$.k)
t.i(0,$.dA,$.k)
t.i(0,$.c5,$.k)
t.i(0,$.cQ,$.n)
t.i(0,$.cE,$.k)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.y+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.R(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.m
t.i(0,new R.a4("Stop the Narration",!1,[new U.b("The "+m+" is walking down a long road, wondering when they\u2019ll find the next town. They suddenly stop and look behind them, asking who said that. They look everywhere but can\u2019t find where the voice is coming from. They fruitlessly demand the narration to stop."),new U.b("The "+m+" is having a hard time doing any of their quests while hearing every action narrated. No one else can hear the voice and some are starting to think the "+m+" is losing their mind. The "+m+" vows to find who is doing the narrating and beat the stuffing out if them. However, the "+m+" is very unlikely to end the narration. The "+m+" raises their fist at a random location in the sky and shouts we\u2019ll see about that."),new U.b("The "+m+" finds themself in front of an ancient looking broadcasting tower. They wonder aloud whether the tower is broadcasting the narration. They demand the narration to be useful for a change and just tell them, but they get no answer. In a huff, they search the tower. A couple of hours later, the "+m+" find an ominous looking machine displaying pictures of the session, and text of this narration. Realizing the machine is broadcasting the narration, and getting confirmation from the narration that it is so, they immediately destroy it. They no longer hear the narration and are pleased to go back to adventuring. The "+m+" doesn\u2019t realize they only stopped the narration being broadcasted to their ears and not the narration itself.")],H.a([],g),R.dR(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.F(s,t,null),$.ar)}}
Y.dU.prototype={}
Y.a6.prototype={}
Y.dj.prototype={}
Y.bX.prototype={
gH:function(a){return this.c}}
Y.P.prototype={}
Y.iv.prototype={}
Y.bE.prototype={}
Y.d7.prototype={}
Y.lc.prototype={}
Y.bD.prototype={}
Y.hQ.prototype={}
Y.iS.prototype={}
Y.jY.prototype={}
N.op.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Domino Mask",H.a([$.O,$.T,$.fm],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Archery Set",H.a([$.u5,$.T,$.fm,$.wx],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Gristtorrent Server",H.a([$.a_,$.aD,$.a7,$.T,$.Y,$.al],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.c5,$.k)
t.i(0,$.cj,$.n)
t.i(0,$.dn,$.n)
r="The "+$.y+" cannot release the frogs since the corrupt Noble "
q=$.r
r=r+q+"s have hoarded them. The "
p=$.m
o=[U.b]
t.i(0,new R.bF("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
p=$.m
q="The "+p+" learns of the extreme injustices of the "
r=$.r
q=q+r+"s who rose to power during the tyranny of "
n=$.y
t.i(0,new R.a4("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
Q.oq.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Red Rose",H.a([$.az,$.ax],s),null,!1,"Seductive Plant")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Friend Fic",H.a([$.az,$.K],s),"Don't ship irl ppl, asshole.",!1,"Grid of Sin")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Chocolate Bar",H.a([$.az,$.ao],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Candelabra",H.a([$.az,$.aq],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Head Cannon",H.a([$.az,$.bu,$.D,$.aJ],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Her Pitch Passions Novel",H.a([$.aB,$.K,$.az],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cs,$.k)
q.i(0,$.hm,$.n)
q.i(0,$.fb,$.n)
q.i(0,$.hl,$.k)
q.i(0,$.cr,$.n)
q.i(0,$.iJ,$.H)
p=$.m
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.r
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ab+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.Z("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cr,$.n)
s.i(0,$.dN,$.k)
s.i(0,$.hl,$.k)
s.i(0,$.cs,$.n)
s.i(0,$.es,$.H)
s.i(0,$.iJ,$.H)
o=$.r
n="A Romantic "+o+" approaches the "
m=$.m
s.i(0,new R.Z("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iJ,$.k)
t.i(0,$.cs,$.k)
t.i(0,$.fb,$.n)
t.i(0,$.ma,$.k)
t.i(0,$.hl,$.k)
t.i(0,$.cr,$.n)
t.i(0,$.es,$.H)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.r
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.y+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.FY
t.i(0,new R.Z("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.B(),!1,!1,new Y.d7("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.m
r="The "+n+"  and the "
o=$.dD
t.i(0,new R.Z("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.dS(),!1,!1,new Y.iS(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ak)
o=$.m
n="The "+o+"  and the "
r=$.dD
t.i(0,new R.Z("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.dS(),!1,!1,new Y.hQ(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ak)
r=$.m
o="The "+r+"  and the "
n=$.dD
t.i(0,new R.Z("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.dS(),!1,!1,new Y.jY(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ak)
p.i(0,new X.F(s,t,null),$.aA)}}
T.hT.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a5)
s=A.j("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),[H.Q(t,0)]))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.k)
q.i(0,$.bg,$.H)
q.i(0,$.dP,$.k)
q.i(0,$.c4,$.n)
q.i(0,$.e5,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.a4("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.x
n.i(0,new X.F(s,q,null),$.bM)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eu,$.k)
s.i(0,$.er,$.H)
s.i(0,$.et,$.n)
s.i(0,$.cP,$.k)
s.i(0,$.cj,$.H)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.a4("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
l="The "+p+" learns that all of the local "
o=$.r
s.i(0,new R.a4("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.dD+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.L+"ing in amazement. The factory is saved! ")],H.a([],m),R.dS(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.ak)
n.i(0,new X.F(q,s,null),$.bM)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.bg,$.H)
t.i(0,$.cc,$.n)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.L
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.v3(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.H)
l=$.m
p="The "+l+" learns that all of the local "
r=$.r
t.i(0,new R.a4("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.bM)},
A:function(a){return this.r},
ad:function(a,b,c,d){var t=this.r
this.y=t
this.z=new X.iH("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.is]),H.a([],[M.hg]))
this.D()
this.E()
t=this.Q
if($.$get$os().V(0,t))H.b1("Duplicate class id for "+this.A(0)+": "+t+" is already registered for "+J.cD($.$get$os().n(0,t))+".")
$.$get$os().i(0,t,this)},
gH:function(a){return this.r}}
E.ot.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Sage's Robe",H.a([$.O,$.T,$.b3,$.Y,$.a2,$.a_],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Peer Reviewed Journal",H.a([$.K,$.T,$.aB,$.Y],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Guru Pillow",H.a([$.O,$.T,$.ht,$.Y],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.fe,$.n)
t.i(0,$.bg,$.n)
t.i(0,$.fg,$.k)
t.i(0,$.aO,$.H)
t.i(0,$.cF,$.k)
r="The "+$.y+" has blocked access to the books for the duration. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q="Now that the "+$.y+" is defeated, it is time to begin recovery efforts. The "
r=$.r
q=q+r+"s ask the "
o=$.m
t.i(0,new R.a4("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.L+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
K.ou.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Uno Reverse Card",H.a([$.mJ,$.S,$.aP,$.jE],s),null,!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("JR Body Pillow",H.a([$.ht,$.b3,$.S,$.jE],s),null,!1,null)
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.m3,$.k)
q.i(0,$.dl,$.k)
q.i(0,$.dm,$.k)
q.i(0,$.d2,$.n)
q.i(0,$.c4,$.n)
q.i(0,$.cj,$.n)
q.i(0,$.c5,$.H)
q.i(0,$.dA,$.n)
q.i(0,$.eq,$.k)
q.i(0,$.iM,$.k)
q.i(0,$.ff,$.k)
q.i(0,$.m9,$.k)
q.i(0,$.hj,$.n)
q.i(0,$.ev,$.k)
p=$.m
o="The "+p+" is chilling in a "
n=$.r
o=o+n+" village when a bunch of sentient "
m=$.ab
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.y
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.M("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.R(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fv(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=$.r
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.m
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.y
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.M("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.R(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dy,$.k)
s.i(0,$.c4,$.n)
s.i(0,$.c5,$.k)
s.i(0,$.cr,$.k)
s.i(0,$.cE,$.k)
s.i(0,$.cI,$.n)
s.i(0,$.iL,$.H)
s.i(0,$.dl,$.n)
s.i(0,$.cQ,$.k)
s.i(0,$.c6,$.k)
s.i(0,$.dA,$.H)
p=$.L
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.m
o=o+m+" to do a stupid "
l=$.av
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.y
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.R(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.m3,$.k)
t.i(0,$.dA,$.k)
t.i(0,$.c5,$.k)
t.i(0,$.cQ,$.n)
t.i(0,$.cE,$.k)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.y+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.R(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.F(s,t,null),$.ar)}}
Y.ov.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Walking Stick",H.a([$.X,$.T,$.dQ],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Adorable Girlscout Beret",H.a([$.O,$.T,$.ua,$.Y,$.a_],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Map",H.a([$.K,$.T,$.Y],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Magical Compass",H.a([$.D,$.T,$.Y,$.a2],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p
t=[P.x]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.dz,$.k)
t.i(0,$.cc,$.k)
t.i(0,$.bg,$.k)
t.i(0,$.c6,$.H)
t.i(0,$.aO,$.H)
r="Now that the "+$.y+" has been defeated, the planet has really opened up. The "
q=$.m
p=[U.b]
t.i(0,new R.a4("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.r+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.y+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.m
t.i(0,new R.bF("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.r+" "+$.L+"s in time to stop them.   ")],H.a([],p),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.F(s,t,null),$.bM)}}
L.ow.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Scroll",H.a([$.K,$.T,$.Y],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Ink Pot",H.a([$.aQ,$.T,$.al,$.Y],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Blank Book",H.a([$.K,$.T,$.aB,$.Y,$.al,$.a_],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.m4,$.k)
t.i(0,$.bg,$.k)
t.i(0,$.cF,$.k)
t.i(0,$.aO,$.n)
t.i(0,$.d1,$.n)
r="The "+$.y+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q="Now that the "+$.y+" has been taken care of, the "
r=$.m
q=q+r+" discovers a large library of "
o=$.r
t.i(0,new R.a4("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
S.oz.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Cueball",H.a([$.wE,$.T],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Crystal Ball",H.a([$.fl,$.wD,$.T,$.aR],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Binoculars",H.a([$.aQ,$.T,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Blindfold",H.a([$.wz,$.T,$.b3],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.wj,$.k)
t.i(0,$.iK,$.k)
t.i(0,$.wg,$.k)
t.i(0,$.cQ,$.n)
r="Now that the "+$.y+" has been defeated, the land is really starting to open up. The "
q=$.m
r=r+q+" finds a tunnel filled with Blind "
p=$.r
o=[U.b]
t.i(0,new R.a4("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.B(),!1,!1,new Y.dj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.y+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.m
t.i(0,new R.bF("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
p=$.m
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.r
t.i(0,new R.a4("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.B(),!1,!1,new Y.dj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
r="A group of underlings are still making trouble, even after the defeat of the "+$.y+". The "
p=$.m
r=r+p+" begins planting rumors of a huge "
q=$.ab
t.i(0,new R.a4("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.B(),!1,!1,new Y.dj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
T.c1.prototype={}
Y.oG.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Meddler's Guide",H.a([$.aB,$.T,$.K,$.bx,$.a_,$.aH],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("First Aid Kit",H.a([$.aQ,$.T,$.aH],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=$.T
r=A.j("Cloud in a Bottle",H.a([r,r,$.bk],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Wings",H.a([$.a2,$.T,$.aR,$.ax,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.bg,$.n)
t.i(0,$.dz,$.k)
t.i(0,$.cQ,$.n)
t.i(0,$.aO,$.n)
t.i(0,$.cc,$.k)
r="The defeat of the "+$.y+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q="Now that the "+$.y+" has been taken care of, the "
r=$.m
q=q+r+" finds a long line of "
o=$.r
t.i(0,new R.a4("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
N.oH.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Fiduspawn Plush",H.a([$.cl,$.O,$.b3],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Teddy Bear",H.a([$.cl,$.O,$.b3],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("D20",H.a([$.u9,$.aD],s),null,!1,"D113")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Pet Pigeon",H.a([$.by,$.at,$.bl,$.b2,$.bt,$.uh],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Cat Ears",H.a([$.O,$.b3,$.cl],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Religious Text",H.a([$.aB,$.K],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Psychology Book",H.a([$.aB,$.K],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Therapy Couch",H.a([$.b3,$.O],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("FLARP Manual",H.a([$.aB,$.K,$.Y],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dO,$.H)
q.i(0,$.aO,$.n)
q.i(0,$.d1,$.k)
q.i(0,$.cF,$.n)
p=$.m
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.r
m=[U.b]
q.i(0,new R.Z("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.av+" or "+$.ab+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.L+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dO,$.H)
s.i(0,$.aO,$.k)
s.i(0,$.d1,$.k)
s.i(0,$.tO,$.k)
s.i(0,$.cr,$.k)
s.i(0,$.tU,$.k)
s.i(0,$.cF,$.n)
o=$.m
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.L
n=n+l+"ing "
k=$.r
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.av
s.i(0,new R.Z("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cP,$.H)
t.i(0,$.dN,$.k)
t.i(0,$.cc,$.k)
t.i(0,$.dn,$.k)
t.i(0,$.fd,$.k)
r=$.m
q="The "+r+" wanders into an entire crowd of "
o=$.r
t.i(0,new R.Z("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.L+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aA)}}
M.bA.prototype={}
N.oJ.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Frog Statue",H.a([$.aE,$.au,$.S],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Frog Costume",H.a([$.O,$.S],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Reactor",H.a([$.c7,$.Y,$.a7,$.S],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Telescope",H.a([$.D,$.aQ,$.Y,$.S],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Green Sun Poster",H.a([$.K,$.S,$.ud,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m
t=$.m
s=[P.x]
r=H.a(["Wherever the "+t+" goes, they find a "+$.r+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.L+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.y+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.m
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.r+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.r+" tells the "
p=$.m
t=t+p+" that they must negotiate with "
o=$.y
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.m
p="The "+o+" meets with "
t=$.y
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cQ,$.H)
t.i(0,$.tQ,$.k)
s=[U.b]
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
p=$.m
t.i(0,new R.bF("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.B(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.F(o,t,null),$.He)}}
U.ag.prototype={
gH:function(a){return this.e+"kind"},
$isbJ:1,
$asbJ:function(){return[A.a5]}}
K.cK.prototype={
gH:function(a){return this.a}}
M.oN.prototype={
aT:function(a){return"application/octet-stream"},
R:function(a6,a7){var t=0,s=P.bj(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$R=P.br(function(a8,a9){if(a8===1)return P.bo(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dk(null,0)
q.a=J.e0(a7,0)
for(p=0,o="";p<6;++p)o+=H.hR(q.ac(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.h("Invalid header: "+n)
m=q.ac(8)
l=9+m*6
o=8*m
k=q.ac(o)
j=q.ac(o)
i=q.ac(o)
h=q.ac(o)
g=q.ac(o)
f=q.ac(o)
o=P.C
e=P.x
d=P.cJ(o,e)
c=new O.d4(k,j,null,null,null,null,null,null,d,P.cJ(e,o))
c.x=new Uint8Array(H.cG(k*j))
b=q.ac(8)
for(o=[o],p=0;p<b;++p){a=q.ac(8)
a0=q.ac(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.ac(8)
if(a2>=e){r=H.u(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.pd(a1,0,null))}a4=q.ac(8)
a5=$.$get$xv().n(0,a4)
if(a5==null)throw H.h("Sprite decoding error: Encoding id "+a4+" not supported.")
c.is(i,h,g,a5.c.$4(a7,l,g*f,c))
c.i9()
r=c
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$R,s)},
$asdw:function(){return[O.d4]},
$ascd:function(){return[O.d4,P.bi]}}
R.pi.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Meddler's Guide",H.a([$.aB,$.T,$.K,$.bx,$.a_,$.aH],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("First Aid Kit",H.a([$.aQ,$.T,$.aH],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=$.T
r=A.j("Cloud in a Bottle",H.a([r,r,$.bk],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Wings",H.a([$.a2,$.T,$.aR,$.ax,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.d1,$.k)
t.i(0,$.aO,$.k)
t.i(0,$.dz,$.n)
t.i(0,$.fg,$.n)
t.i(0,$.tN,$.n)
t.i(0,$.e5,$.n)
t.i(0,$.iI,$.n)
t.i(0,$.tT,$.n)
r=$.m
q="The "+r+" decides to take a break after defeating "+$.y+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.r
o=[U.b]
t.i(0,new R.a4("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.L+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.oj(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.k)
r=$.r
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.m
t.i(0,new R.a4("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.r
q="The "+r+"s are so stressed after all that shit with the "+$.y+". They are yelling and "+$.L+" at each other over the slightest of insults. The "
p=$.m
t.i(0,new R.a4("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.y+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.m
p=p+r+" purifies the pools "
q=$.r
t.i(0,new R.bF("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
r="The defeat of the "+$.y+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.r
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.m
t.i(0,new R.a4("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.av+". Huh. Okay then.")],H.a([],o),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
D.pn.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Robot",H.a([$.a7,$.D,$.at,$.Y],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Circuit Board",H.a([$.a7,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Datastructures for Assholes",H.a([$.a7,$.K],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("~ATH For Dummies ",H.a([$.a7,$.K,$.aC,$.aB],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("3-D Printer",H.a([$.aD,$.a7,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Virus on a USB Stick",H.a([$.wJ,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Wrench",H.a([$.ur,$.D,$.ah],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Computer",H.a([$.a7,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hk,$.n)
q.i(0,$.ep,$.k)
q.i(0,$.eu,$.k)
q.i(0,$.cj,$.H)
p=$.m
o="The "+p+" learns from their "
n=$.r
o=o+n+"s about the great "
m=$.av
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.y+" destroyed it. "
o="The "+p+" searches for the "
l=$.ab
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.G5
p=[U.b]
q.i(0,new R.Z("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.B(),!1,!1,new Y.d7("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=$.m
m="The "+l+" is approached by a "
o=$.r
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.L
q.i(0,new R.Z("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.y+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ab+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.dR(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eu,$.k)
s.i(0,$.er,$.H)
s.i(0,$.et,$.n)
s.i(0,$.cP,$.k)
s.i(0,$.cj,$.H)
o=$.m
n="The "+o+" learns that all of the local "
l=$.r
s.i(0,new R.Z("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.m
l="The "+o+" finds two groups of "
n=$.r
l=l+n+"s screaming and "
k=$.L
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ab
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.Z("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.ec(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hk,$.H)
t.i(0,$.ep,$.k)
t.i(0,$.eu,$.k)
t.i(0,$.cj,$.H)
r=$.m
q="The "+r+" learns from a mysterious "+$.r+" in a black trenchcoat about a great "
o=$.av
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.y
t.i(0,new R.Z("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aA)}}
V.po.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Lighter",H.a([$.D,$.aq],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Siberia Poster",H.a([$.K,$.bs],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Winter Poster",H.a([$.K,$.bs,$.c7],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Doomsday Device",H.a([$.D,$.aC,$.c7,$.bm,$.bt],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Juggalo Poster",H.a([$.K,$.wP],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Fancy Watch",H.a([$.D,$.bh,$.bm],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Magnificent Crown",H.a([$.D,$.bh,$.bm],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Bitching Clothes",H.a([$.O,$.fm,$.bm],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Ceramic Pork Hollow",H.a([$.bU,$.bh],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Shit Ton of Guns",H.a([$.D,$.ui,$.aJ,$.bm],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sniper Rifle",H.a([$.D,$.uo,$.aJ,$.bm],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("AK-47",H.a([$.D,$.ue,$.aJ,$.bm],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("IED",H.a([$.mL,$.as,$.D,$.bu,$.bm],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Idiots Guide To Being An Asshole",H.a([$.K,$.bx,$.aB],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.cf,$.D,$.aY,$.bx],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Matches",H.a([$.X,$.aq],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cI,$.n)
q.i(0,$.dN,$.k)
q.i(0,$.e6,$.k)
q.i(0,$.ff,$.k)
q.i(0,$.m8,$.k)
q.i(0,$.dn,$.n)
p=$.m
o=[U.b]
q.i(0,new R.Z("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.B(),!1,!1,new Y.dj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cI,$.n)
s.i(0,$.dN,$.k)
s.i(0,$.cs,$.k)
s.i(0,$.dn,$.n)
n=$.m
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.r
s.i(0,new R.Z("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ab+" underling. Tremble at the fearsome "+$.av+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.B(),!1,!1,new Y.dj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.k)
q.i(0,$.bg,$.H)
q.i(0,$.dP,$.k)
q.i(0,$.c4,$.n)
q.i(0,$.e5,$.H)
q.i(0,$.dl,$.H)
n=$.m
m="The "+n+" learns that all of the local "
l=$.r
q.i(0,new R.Z("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.k)
t.i(0,$.dl,$.H)
t.i(0,$.eq,$.k)
t.i(0,$.iM,$.k)
t.i(0,$.cj,$.n)
t.i(0,$.ev,$.n)
s=$.m
r="The "+s+" finds a crowd of "
n=$.L
r=r+n+"ing "
m=$.r
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.av+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.Z("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,t,null),$.aA)}}
X.F.prototype={
A:function(a){return"Theme: "+H.z(this.a)}}
U.pv.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Lockpick",H.a([$.D,$.T,$.al,$.aM,$.a_],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sneaking Suit",H.a([$.O,$.T,$.al],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Thief's Dagger",H.a([$.D,$.T,$.aM,$.as,$.u8],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.c5,$.k)
t.i(0,$.dm,$.n)
t.i(0,$.c6,$.n)
t.i(0,$.cP,$.n)
r="The "+$.y+" cannot release the frogs since the corrupt "
q=$.r
r=r+q+" Cops have confiscated them. The "
p=$.m
o=[U.b]
t.i(0,new R.bF("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
p=$.m
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.y+"'s layer and slated to be returned to the "
r=$.r
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.L+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.fy
t.i(0,new R.a4("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.r
p="A weeping "+r+" approaches the "
n=$.m
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.y
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.av+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.L+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.fy
t.i(0,new R.a4("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.y
n="Now that the "+r+" has been defeated, the "
p=$.r
n=n+p+"s have recovered their precious "
q=$.ab
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.m
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.L
l=n+l+"worth, the disaffected Heir to the "+$.av+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.fy
t.i(0,new R.a4("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
N.pw.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Grandfather Clock",H.a([$.X,$.ai,$.bh,$.S],s),null,!1,"Ticking Tower of Time")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Drum",H.a([$.wT,$.S,$.a9],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Dead Doppelganger",H.a([$.aE,$.bl,$.S,$.b2,$.b0,$.aC],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Music Box",H.a([$.D,$.S,$.a9,$.ai],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sick Turn Tables",H.a([$.D,$.S,$.a9,$.a_,$.am],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Metronome",H.a([$.D,$.S,$.a9],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.wl,$.ak)
q.i(0,$.cj,$.n)
q.i(0,$.cP,$.n)
q.i(0,$.et,$.k)
p=$.y
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.m
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x1
l=[U.b]
q.i(0,new R.a4("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.dd(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.m
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.r+"s, they set out to fix the "
m=$.ab
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.y
q.i(0,new R.M("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.R("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.F(s,q,null),$.ar)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.hj,$.k)
s.i(0,$.e6,$.H)
s.i(0,$.cj,$.k)
p=$.m
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.r+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.y
s.i(0,new R.M("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.R(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cc,$.k)
t.i(0,$.aO,$.n)
t.i(0,$.d1,$.k)
t.i(0,$.dz,$.k)
r=$.y
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ab
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.m
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.r+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.M("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.R(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.fv(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
k=$.y
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ab
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.m
t.i(0,new R.M("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.r+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.R("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.dd(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
r="With the defeat of the "+$.y+", "
k=$.m
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.r
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.av
t.i(0,new R.a4("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.dd(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
k="The "+p+" takes a break from adventuring and visits a little "
o=$.r
k=k+o+" town holding a "
r=$.av
k=k+r+" festival. They walk around town talking to the various villagers and visiting the little shops, before taking a nap in the local inn. The next morning, the villagers welcome the "+p+" to join in the "+r+" festival that\u2019s just starting. Wait, wasn\u2019t the festival yesterday? The "+o+"s assure the "+p+" that the festival is only being held today. "
m="The "+p+" tries to convince the "+o+"s that they were repeating the day before, but the "+o+"s refused to believe. They quickly realize that the villagers aren\u2019t just forgetful when the same thing hsppens the day after. The village appears to be stuck in a time loop They decide to fix things out of the goodness of their heart, but not before exploiting the time loop to mess with the "+o+" town for a little while."
n="After plenty of shenanigans, the "+p+" starts investigating the time loop. They discover that the "+r+" festival ends with an attempted ceremony to summon "
q=$.y
n=n+q+". The "+o+"s bungle the ceremony every time, causing time to reset. The "+p+" studies how the festival is supposed to work, and goes through several loops at once with time time travel to fix the ceremony. "
i="The "+p+" has gone through so many freaking loops that they have memorized the actions of every "+o+". They follow a perfected schedule to make sure every "+o+" prepares for and completes their part of the ceremony. Finally the ceremony is completed and "+q+" arrives. The "+p+" takes out their "+$.bz+" and begins the strife!"
p=q+" lies dead. The "+o+"s are happy to be rid of them and thank the player for helping to complete the ceremony. It was their first time performing the ceremony, after all. The "+p+" rolls their eyes."
t.i(0,new R.M("Stop the Time Loop",!1,[new U.b(k),new U.b(m),new U.b(n),new U.R(i,"The "+o+"s wake up and begin eagerly preparing for the "+r+" festival. It only comes once a year, after all.",p)],H.a([],l),R.oh(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.r
r="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.m
t.i(0,new R.M("Move Forwards, Never Stop",!1,[new U.b(r+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.L+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.R("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.y+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.F(s,t,null),$.ar)}}
G.a1.prototype={
A:function(a){var t=this.c
if(t.length!==0)return C.b.gF(t)
return"NULL TRAIT"},
ger:function(){return this.b},
gec:function(){return this.c},
gbF:function(){return this.d}}
G.aI.prototype={}
G.ae.prototype={}
G.bK.prototype={}
G.d.prototype={
gi6:function(){return this.f.length},
gbF:function(){var t,s,r,q,p
for(t=this.f,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bH)(t),++q)r+=t[q].d
return r},
aD:function(a,b){return C.a.bG(b.gi6()-this.f.length)},
eD:function(a){return C.b.hw(this.f,a.ghi(a))},
$isbJ:1,
$asbJ:function(){return[G.d]},
gH:function(a){return this.e},
geY:function(){return this.f}}
G.mS.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a1]}}}
Q.pU.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Cardboard Box",H.a([$.K,$.S,$.al],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Hole Punch",H.a([$.D,$.S,$.al],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Smoke Bombs",H.a([$.bu,$.S,$.al,$.mL],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Tribal Mask",H.a([$.b2,$.S,$.al,$.b0,$.c_],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Opera Mask",H.a([$.aD,$.S,$.al,$.ai],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Black Hole in a Bottle.",H.a([$.S,$.a_,$.ud,$.al,$.aQ],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dO,$.k)
q.i(0,$.iN,$.k)
q.i(0,$.iO,$.k)
q.i(0,$.iK,$.k)
p=$.y
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.m
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.r
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x1
l=[U.b]
q.i(0,new R.a4("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.m
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.y
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.M("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.R(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i=this.f
i.i(0,new X.F(s,q,null),$.ar)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dO,$.n)
s.i(0,$.iN,$.n)
s.i(0,$.iO,$.n)
s.i(0,$.c5,$.k)
p=$.m
o="Even with the victory of the "+p+" over the villainous "
n=$.y
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.r+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ab
s.i(0,new R.a4("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.dR(),!1,!1,new Y.bX("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m=$.m
s.i(0,new R.M("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.L+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.R("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.y+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.r+"s.")],H.a([],l),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.F(q,s,null),$.ar)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dO,$.k)
t.i(0,$.iN,$.k)
t.i(0,$.iO,$.k)
r=$.m
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.y+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.M("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.R(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.F(s,t,null),$.ar)}}
E.pV.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Yardstick",H.a([$.dQ,$.T,$.uk,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURBSim Hacking Guide",H.a([$.aB,$.T,$.mR,$.K],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Body Pillow of JR",H.a([$.O,$.T,$.ht,$.wO,$.b3,$.jE],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Nanobots",H.a([$.wX,$.T,$.u3],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cQ,$.k)
t.i(0,$.dA,$.k)
t.i(0,$.fc,$.k)
t.i(0,$.dz,$.k)
t.i(0,$.hi,$.k)
t.i(0,$.m5,$.k)
t.i(0,$.iO,$.n)
r=$.m
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.r
o=[U.b]
t.i(0,new R.Z("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.oj(),!1,!1,new Y.dU("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.y
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.m
n=q+" tries to manually separate the turtles by catching them with a net and "+$.bz+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.L
t.i(0,new R.M("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.R(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.Gi(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
q=$.m
t.i(0,new R.Z("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.B(),!1,!1,new Y.dU("Rewards/no_reward.png",null),1,null,null),$.A)
q="A wizened "+$.r+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.m
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.y
t.i(0,new R.M("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
m=$.m
t.i(0,new R.M("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.y+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.B(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
m="A wizened "+$.r+" tells the "
r=$.m
t.i(0,new R.a4("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.B(),!1,!1,new Y.dj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
r="A "+$.r+" that is also a SHOGUN minion tells the "
m=$.m
t.i(0,new R.a4("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.Gj(),!1,!1,new Y.bX("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
m=$.m
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.i(0,new R.a4("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.H)
n=$.m
m="The "+n+" finds an unusual rock formation. They examine it from every possible angle to find a secret meaning. In the end it turns out to be an interesting rock and nothing more."
q="The "+n+" is stopped by a young "
r=$.r
t.i(0,new R.a4("Wasting Time",!1,[new U.b(m),new U.b(q+r+" that asks them to watch clouds together. The "+n+" spends a few hours with the "+r+" interpreting the shapes in the clouds."),new U.b("The "+n+" uses the alchemiter to create a number of dream video game fusions. They spend many hours playing them all."),new U.b("After waking up from a nap, the "+n+" turns over and goes right back to sleep. They\u2019re just not feeling like doing anything right now."),new U.b("An elderly "+r+" calls out to the "+n+"; apparently there was a dangerous monster that the "+r+"s wanted the "+n+" to defeat, but the problem solved itself when the monster tripped off a cliffside. Was there actually a point to what the "+n+" was doing? Nope, they\u2019re just really bad at using their time wisely.")],H.a([],o),R.oj(),!1,!1,new Y.dU("Rewards/no_reward.png",null),1,null,null),$.A)
n=$.y
r="The "+n+" explains um. What? Where did the "
q=$.m
t.i(0,new R.bF("Waste the Frogs",!1,[new U.b(r+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.F(s,t,null),$.ar)}}
M.pZ.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Cauldron",H.a([$.wS,$.T,$.a2],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Flying Broom",H.a([$.jB,$.dQ,$.T,$.X,$.a2],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Warped Mirror",H.a([$.uf,$.T,$.a2,$.al,$.a_],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.c4,$.n)
t.i(0,$.hm,$.n)
t.i(0,$.d2,$.n)
t.i(0,$.cP,$.n)
t.i(0,$.cE,$.n)
t.i(0,$.tQ,$.n)
r=$.y
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.r
q=q+p+" consorts. It's up to the "
o=$.m
n=[U.b]
t.i(0,new R.bF("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.c0(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
o="Even with the defeat of the "+$.y+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.r
o=o+r+" settlement, and crops refuse to thrive at "
p=$.av
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.m
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.fy
t.i(0,new R.a4("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.A)
q="A Mysterious "+$.r+" approaches the "
p=$.m
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.av
q=q+r+" was discovered amongst the "+$.y+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.fy
t.i(0,new R.a4("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.r
p="A young "+r+" approaches the "
m=$.m
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.av
t.i(0,new R.a4("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ab+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.L+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.B(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bM)}}
U.q_.prototype={
R:function(a5,a6){var t=0,s=P.bj(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$R=P.br(function(a7,a8){if(a7===1)return P.bo(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.ej(a6,$.$get$xS())
if(0>=p.length){r=H.u(p,0)
t=1
break}if(J.zi(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.u(p,0)
t=1
break}throw H.h("Invalid WordList file header: '"+H.z(p[0])+"'")}o=P.x
n=H.a([],[o])
m=P.cJ(o,B.ki)
q.a=null
l=P.cJ(o,o)
for(k=P.W,j=B.dF,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cN()
""+i
H.z(g)
f.toString
f=J.ej(g,$.$get$xQ())
if(0>=f.length){r=H.u(f,0)
t=1
break $async$outer}g=f[0]
f=J.aU(g)
if(f.gU(g)===!0){$.$get$cN().toString
continue}if(f.a9(g,$.$get$xR())){$.$get$cN().toString
continue}if(C.c.a9(g,"@")){e=C.c.aa(g,1)
$.$get$cN().toString
n.push(e)}else if(C.c.a9(g,"?")){f=C.c.aa(g,1)
f=$.$get$i1().aQ(0,f)
f=H.dB(f,B.kI(),H.aw(f,"o",0),null)
d=P.db(f,!0,H.aw(f,"o",0))
if(d.length<2)$.$get$cN().bc(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cN()
H.z(c)
H.z(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$xT()
a=f.cq(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.u(f,1)
t=1
break $async$outer}a0=J.c3(f[1])
a1=C.c.aa(g,a0)
if(a1.length===0)continue
f=J.ap(a0)
if(f.S(a0,0)){a1=C.c.eE(a1)
$.$get$cN().toString
f=P.cJ(o,o)
a2=new B.ki(P.cJ(o,k),f,a1,!1,null,null)
a2.dm(null,null,j)
q.a=a2
f.aw(0,l)
m.i(0,a1,q.a)}else if(f.S(a0,$.xU))if(C.c.a9(a1,"?")){a1=C.c.aa(a1,1)
f=$.$get$i1().aQ(0,a1)
f=H.dB(f,B.kI(),H.aw(f,"o",0),null)
d=P.db(f,!0,H.aw(f,"o",0))
f=$.$get$cN()
f.toString
if(d.length<2)f.bc(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kM(d[0],$.$get$fz(),"")
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}b=J.kM(d[1],$.$get$fz(),"")
f=$.$get$cN()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.a9(a1,"@")){e=C.c.aa(a1,1)
$.$get$cN().toString
f=$.$get$i1().aQ(0,a1)
f=H.dB(f,B.kI(),H.aw(f,"o",0),null)
d=P.db(f,!0,H.aw(f,"o",0))
a4=d.length>1?H.xp(d[1],new U.q0(q,d)):1
q.a.c.i(0,C.c.d2(e,$.$get$fz(),""),a4)}else{$.$get$cN().toString
f=$.$get$i1().aQ(0,g)
f=H.dB(f,B.kI(),H.aw(f,"o",0),null)
d=P.db(f,!0,H.aw(f,"o",0))
a4=d.length>1?H.xp(d[1],new U.q1(q,d)):1
if(0>=d.length){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bk(J.kM(d[0],$.$get$fz(),""))
h=new B.dF(null)
a3=P.cJ(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.i(h,f.k(h,J.vU(a4)),[H.aw(f,"cX",0)]))}else if(f.S(a0,$.xU*2)){$.$get$cN().toString
f=$.$get$i1().aQ(0,g)
f=H.dB(f,B.kI(),H.aw(f,"o",0),null)
d=P.db(f,!0,H.aw(f,"o",0))
f=d.length
if(f!==2)$.$get$cN().bc(C.h,"Invalid variant for "+H.z(h.d7(0))+" in "+q.a.e)
else{if(0>=f){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bk(J.kM(d[0],$.$get$fz(),""))
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}a3=C.c.d2(U.Hh(d[1]),$.$get$fz(),"")
h.a.i(0,f,a3)}}}}}r=new B.i5(n,m)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$R,s)},
$aseN:function(){return[B.i5]},
$ascd:function(){return[B.i5,P.x]}}
U.q0.prototype={
$1:function(a){var t,s,r
t=$.$get$cN()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid include weight '"+H.z(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.bc(C.m,r+H.z(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.x]}}}
U.q1.prototype={
$1:function(a){var t,s,r
t=$.$get$cN()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid weight '"+H.z(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.bc(C.m,r+H.z(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.x]}}}
F.q3.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.j("Make a World Book",H.a([$.K,$.ai,$.aB],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Quill Pen",H.a([$.b3,$.O,$.mP],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Book On Writing",H.a([$.aB,$.K,$.Y],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("FLARP Manual",H.a([$.aB,$.K,$.Y],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Script",H.a([$.aB,$.K],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Fancy Pen",H.a([$.D,$.Y,$.mP,$.ai],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Spiral Bound Notebook",H.a([$.aB,$.K,$.D],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Half Written Novel",H.a([$.aB,$.K],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dO,$.k)
q.i(0,$.cF,$.k)
q.i(0,$.bg,$.n)
q.i(0,$.aO,$.n)
q.i(0,$.fe,$.n)
p=$.m
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.r+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.Z("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.B(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dn,$.n)
s.i(0,$.cI,$.n)
s.i(0,$.cs,$.n)
s.i(0,$.bg,$.n)
p=$.r
o="An Excited "+p+" rushes up to the "
n=$.m
s.i(0,new R.Z("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.L+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.B(),!1,!1,new Y.dj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cI,$.n)
t.i(0,$.dN,$.k)
t.i(0,$.cs,$.k)
t.i(0,$.dn,$.n)
t.i(0,$.fc,$.k)
r=$.m
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.r
t.i(0,new R.Z("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.B(),!1,!1,new Y.dj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aA)}}
B.q8.prototype={
aT:function(a){return"application/x-tar"},
R:function(a,b){var t=0,s=P.bj(),r,q,p
var $async$R=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:q=$.$get$xV()
p=J.vL(b)
q.toString
r=q.hp(T.u2(p,0,null,0),!1)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$R,s)},
$asdw:function(){return[T.fP]},
$ascd:function(){return[T.fP,P.bi]}}
A.fX.prototype={}
B.dx.prototype={
cI:function(a){if(a)this.b=(this.b|C.a.ap(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.O+=H.hR(this.b)
this.b=0}},
ag:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ap(1,t)
if(typeof a!=="number")return a.aL()
this.cI((a&s)>>>0>0)}},
ha:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.au(1,t-s)
if(typeof a!=="number")return a.aL()
this.cI((a&r)>>>0>0)}},
bY:function(a){var t,s
a=J.eh(a,1)
t=C.d.dk(Math.log(H.kD(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cI(!1)
this.ha(a,t+1)},
b5:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.O
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a8(r)
q+=r
p=r}else p=0
r=H.cG(q)
o=new Uint8Array(r)
if(t){n=H.cU(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.u(o,m)
o[m]=l}}t=s.O
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a6(k,m)
if(s<0||s>=r)return H.u(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.u(o,t)
o[t]=s}return o.buffer}}
B.dk.prototype={
cA:function(a){var t,s,r,q
t=C.f.aj(a/8)
s=C.a.bM(a,8)
r=this.a.getUint8(t)
q=C.a.au(1,s)
if(typeof r!=="number")return r.aL()
return(r&q)>>>0>0},
ac:function(a){var t,s,r
if(a>32)throw H.h(P.e1(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cA(this.b);++this.b
if(r)t=(t|C.a.ap(1,s))>>>0}return t},
i8:function(a){var t,s,r,q
if(a>32)throw H.h(P.e1(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cA(this.b);++this.b
if(q)s=(s|C.a.au(1,t-r))>>>0}return s},
c5:function(){var t,s,r
for(t=0;!0;){s=this.cA(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.i8(t+1)-1}}
A.e2.prototype={
A:function(a){return"rgb("+H.z(this.b)+", "+H.z(this.c)+", "+H.z(this.d)+", "+H.z(this.a)+")"},
im:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.au()
s=this.c
if(typeof s!=="number")return s.au()
r=this.d
if(typeof r!=="number")return r.au()
q=this.a
if(typeof q!=="number")return H.a8(q)
return(t<<24|s<<16|r<<8|q)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.e2){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.c
s=b.c
if(t==null?s==null:t===s){t=this.d
s=b.d
if(t==null?s==null:t===s){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t}return!1},
ga7:function(a){return this.im(!0)},
X:function(a,b){var t,s,r,q,p,o,n,m
t=J.ap(b)
if(!!t.$ise2){t=this.b
s=b.b
if(typeof t!=="number")return t.X()
if(typeof s!=="number")return H.a8(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.X()
if(typeof q!=="number")return H.a8(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.X()
if(typeof o!=="number")return H.a8(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.X()
if(typeof m!=="number")return H.a8(m)
return A.h0(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.b8()
s=this.c
if(typeof s!=="number")return s.b8()
r=this.d
if(typeof r!=="number")return r.b8()
q=this.a
if(typeof q!=="number")return q.b8()
return A.w1(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.X()
s=this.c
if(typeof s!=="number")return s.X()
r=this.d
if(typeof r!=="number")return r.X()
return A.h0(t+b,s+b,r+b,this.a)}throw H.h("Cannot add ["+H.z(t.gae(b))+" "+H.z(b)+"] to a Colour. Only Colour, double and int are valid.")},
ar:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.b8()
s=this.c
if(typeof s!=="number")return s.b8()
r=this.d
if(typeof r!=="number")return r.b8()
q=this.a
if(typeof q!=="number")return q.b8()
return A.w1(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.h("Colour index out of range: "+H.z(b))},
i:function(a,b,c){var t,s
t=J.dH(b)
if(t.a4(b,0)||t.aA(b,3))throw H.h("Colour index out of range: "+H.z(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.S(b,0)){this.b=C.a.af(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.af(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,2)){this.d=C.a.af(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.af(c,0,255)
else if(t.S(b,0)){this.b=C.a.af(J.kL(J.vK(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.af(J.kL(J.vK(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kE(c)
if(t.S(b,2)){this.d=C.a.af(J.kL(s.ar(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.af(J.kL(s.ar(c,255)),0,255)}},
f5:function(a,b,c,d){this.b=C.d.af(C.d.af(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.af(C.d.af(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.af(C.d.af(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.af(J.yN(d,0,255),0,255)}}
A.rT.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.x]}}}
N.ci.prototype={
gH:function(a){return this.a}}
N.td.prototype={
$0:function(){return $.$get$t2()},
$S:function(){return{func:1}}}
N.te.prototype={
$1:function(a){var t,s,r,q,p
for(t=$.$get$t2(),s=t.length,r=0;r<t.length;t.length===s||(0,H.bH)(t),++r){q=t[r]
p=J.aK(q)
if(a.Y(0,q))J.kN(p.gaC(q),"inline-block")
else J.kN(p.gaC(q),"none")}},
$S:function(){return{func:1,args:[[P.ed,W.cb]]}}}
N.tf.prototype={
$1:function(a){var t=J.yV(a)
return t.a.a.getAttribute("data-"+t.bp("name"))},
$S:function(){return{func:1,args:[W.cb]}}}
A.nh.prototype={
$1:function(a){return this.a.ew(a)},
$S:function(){return{func:1,args:[,]}}}
A.nf.prototype={
$1:function(a){this.a.R(0,a).b4(this.b.gi5())},
$S:function(){return{func:1,args:[,]}}}
A.ng.prototype={
$1:function(a){this.a.hh(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.ni.prototype={
$1:function(a){return this.a.aE(0,this.b)},
$S:function(){return{func:1,args:[W.U]}}}
F.hD.prototype={
A:function(a){return this.b}}
F.hE.prototype={
bc:function(a,b){F.FT(a).$1("("+this.c+")["+H.z(C.b.gbb(a.b.split(".")))+"]: "+H.z(b))},
cP:function(a,b){this.bc(C.h,b)},
gH:function(a){return this.c}}
F.uE.prototype={}
O.ti.prototype={
$1:function(a){return H.z(a.bd(1))+" = "+H.z(a.bd(2))+C.c.ar("../",this.a)},
$S:function(){return{func:1,args:[P.dC]}}}
O.tj.prototype={
$0:function(){var t=document
J.vR(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.w,null)
t=H.kH(t.querySelector("#voidButton"),"$isfZ")
t.toString
W.fD(t,"click",new O.th(),!1,W.IZ)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.IL("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.th.prototype={
$1:function(a){return O.IR()},
$S:function(){return{func:1,args:[W.U]}}}
R.hn.prototype={}
R.uV.prototype={}
R.uU.prototype={}
A.o_.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.V(0,b)?t.n(0,b):$.$get$uT()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.V(0,b)?t.n(0,b):$.$get$uT()}throw H.h(P.e1(b,"'name' should be a String name or int id only",null))},
gW:function(a){var t=this.a
t=t.gc9(t)
return new H.jM(null,J.d_(t.a),t.b,[H.Q(t,0),H.Q(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.V(0,b))this.an(0,b)
s=this.fQ()
if(typeof s!=="number")return s.as()
if(s>=256)throw H.h(P.e1(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
an:function(a,b){var t,s,r
t=this.a
if(!t.V(0,b))return
s=this.c
r=s.n(0,b)
t.an(0,b)
this.b.an(0,r)
s.an(0,b)
this.d.an(0,r)},
fQ:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.V(0,s))return s;++s}}}
A.jV.prototype={
$aso:function(){return[A.e2]},
$iso:1}
Q.jX.prototype={}
A.k0.prototype={
bD:function(a){if(a===0)return 0
return this.fR(a)},
hW:function(){return this.bD(4294967295)},
fR:function(a){var t,s
t=this.a
if(a>4294967295){s=t.cU()
this.b=C.d.bG(s*4294967295)
return C.d.aj(s*a)}else{s=t.bD(a)
this.b=s
return s}},
dc:function(a){var t=a==null
this.a=t?C.Q:P.Hw(a)
if(!t)this.b=J.eh(a,1)},
i3:function(a,b){var t=a.length
if(t===0)return
t=this.bD(t)
if(t<0||t>=a.length)return H.u(a,t)
return a[t]},
i2:function(a){return this.i3(a,!0)}}
Y.dT.prototype={
cG:function(a){var t,s
if(this.b!=null)throw H.h("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bn(0,$.an,null,t)
this.c.push(new P.dZ(s,t))
return s},
ew:function(a){var t,s,r
if(this.b!=null)throw H.h("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bH)(t),++r)t[r].aE(0,this.b)
C.b.sm(t,0)}}
V.lJ.prototype={
$4:function(a,b,c,d){return V.A9(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bi,P.bi,O.d4]}}}
V.lI.prototype={
$4:function(a,b,c,d){return V.A8(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.C,P.C,O.d4]}}}
V.lH.prototype={
$4:function(a,b,c,d){return V.A5(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bi,P.bi,O.d4]}}}
V.lG.prototype={
$4:function(a,b,c,d){return V.A4(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.C,P.C,O.d4]}}}
O.d4.prototype={
i9:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.a
s=this.b
for(r=this.x,q=r.length,p=s,o=t,n=-1,m=-1,l=null,k=0;k<t;++k)for(j=0;j<s;++j){l=j*t+k
if(l>=q)return H.u(r,l)
if(r[l]!==0){if(k<o)o=k
else if(k>n)n=k
if(j<p)p=j
else if(j>m)m=j}}i=Math.max(0,n-o+1)
h=Math.max(0,m-p+1)
this.c=o
this.d=p
this.e=i
this.f=h},
is:function(a,b,c,d){var t,s,r,q,p
t=J.aK(d)
s=0
while(!0){r=t.geo(d)
if(typeof r!=="number")return H.a8(r)
if(!(s<r))break
q=(C.a.dk(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.u(r,q)
r[q]=p;++s}}}
D.oP.prototype={
$1:function(a){return J.yZ(a)},
$S:function(){return{func:1,args:[D.cp]}}}
D.oQ.prototype={
$1:function(a){return a},
$S:function(){return{func:1,args:[D.cp]}}}
D.oR.prototype={
$1:function(a){return a.gi4()},
$S:function(){return{func:1,args:[D.cp]}}}
D.cp.prototype={
A:function(a){return this.a},
gH:function(a){return this.a},
gi4:function(){return this.d}}
D.kj.prototype={}
D.on.prototype={}
B.dF.prototype={
eK:function(a,b){if(this.a.V(0,"MAIN"))return this.a.n(0,"MAIN")
return},
d7:function(a){return this.eK(a,null)},
A:function(a){return"[Word: "+H.z(this.d7(0))+"]"}}
B.ki.prototype={
A:function(a){return"WordList '"+this.e+"': "+this.f1(0)},
$isp:1,
$asp:function(){return[B.dF]},
$asdY:function(){return[B.dF]},
$asi4:function(){return[B.dF]},
$ascX:function(){return[B.dF]},
$aso:function(){return[B.dF]},
$ast:function(){return[B.dF]},
gH:function(a){return this.e}}
B.i5.prototype={
A:function(a){return"[WordListFile: "+this.b.A(0)+" ]"}}
G.oy.prototype={
$1:function(a){this.b.$1(G.H5(this.a.$0(),J.z4(this.d),this.c))},
$S:function(){return{func:1,v:true,args:[W.U]}}}
G.hV.prototype={
A:function(a){var t=this.b?"[N]":""
return t+this.a}}
S.ft.prototype={}
S.vk.prototype={}
S.vl.prototype={}
S.vm.prototype={}
S.tJ.prototype={}
S.tM.prototype={}
S.tz.prototype={}
S.v4.prototype={}
S.vo.prototype={}
S.vp.prototype={}
S.la.prototype={}
S.uX.prototype={}
S.uS.prototype={}
S.n9.prototype={}
S.tD.prototype={}
S.tt.prototype={}
S.ls.prototype={}
S.uF.prototype={}
S.lt.prototype={}
S.o1.prototype={}
S.vb.prototype={}
S.v8.prototype={}
S.vc.prototype={}
S.ts.prototype={}
S.mn.prototype={}
S.l8.prototype={}
S.tx.prototype={}
S.tw.prototype={}
S.uY.prototype={}
S.vd.prototype={}
S.uZ.prototype={}
S.tL.prototype={}
S.tK.prototype={}
S.va.prototype={}
S.v9.prototype={}
S.pu.prototype={}
S.vf.prototype={}
S.tA.prototype={}
S.tB.prototype={}
S.vn.prototype={}
S.hG.prototype={}
S.uK.prototype={}
S.uL.prototype={}
S.uM.prototype={}
S.uN.prototype={}
S.v5.prototype={}
S.v6.prototype={}
S.v7.prototype={}
S.uJ.prototype={}
S.uP.prototype={}
S.uQ.prototype={}
S.tZ.prototype={}
S.u_.prototype={}
S.u0.prototype={}
S.uR.prototype={}
S.uO.prototype={}
S.tu.prototype={}
S.vh.prototype={}
S.vi.prototype={}
S.vg.prototype={}
Z.uz.prototype={}
Z.uv.prototype={}
Z.uw.prototype={}
Q.cX.prototype={
k:function(a,b){return b},
A:function(a){return J.cD(this.gc3())},
az:function(a,b){return Q.vr(this,b,H.aw(this,"cX",0),null)},
a3:function(a,b){return Q.vq(this,!1,!0,null,H.aw(this,"cX",0))},
ao:function(a){return this.a3(a,!0)},
$iso:1,
$aso:null}
Q.dY.prototype={
gc3:function(){return this.b},
bX:function(a,b,c){C.b.h(this.b,new Q.i(b,this.k(b,J.vU(c)),[H.aw(this,"cX",0)]))},
h:function(a,b){return this.bX(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return J.vP(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.u(t,b)
t[b]=new Q.i(c,s,[H.aw(this,"cX",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
A:function(a){return P.jF(this.b,"[","]")},
az:function(a,b){return Q.vr(this,b,H.aw(this,"dY",0),null)},
a3:function(a,b){return Q.vq(this,!1,!0,null,H.aw(this,"dY",0))},
ao:function(a){return this.a3(a,!0)},
dm:function(a,b,c){var t,s
this.a=a
t=[[Q.i,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.i4.prototype={$ascX:null,$aso:null,$asp:null,$ast:null,$isp:1,$ist:1,$iso:1}
Q.i.prototype={
A:function(a){return"("+H.z(this.a)+" @ "+H.z(this.b)+")"},
gZ:function(a){return this.a},
gd5:function(a){return this.b}}
Q.eV.prototype={
gc3:function(){return this.b},
gW:function(a){var t=new Q.pX(null,[H.aw(this,"eV",0)])
t.a=J.d_(this.b)
return t},
gm:function(a){return J.c3(this.b)},
A:function(a){return J.cD(this.b)},
az:function(a,b){return Q.vr(this,b,H.aw(this,"eV",0),null)},
a3:function(a,b){return Q.vq(this,!1,!0,null,H.aw(this,"eV",0))},
ao:function(a){return this.a3(a,!0)}}
Q.i3.prototype={$ascX:null,$aso:null,$iso:1}
Q.pX.prototype={
gP:function(){return J.vP(this.a.gP())},
G:function(){return this.a.G()}}
Q.kf.prototype={
$aseV:function(a,b){return[b]},
$asi3:function(a,b){return[b]},
$ascX:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
Q.pY.prototype={
$1:function(a){var t=J.aK(a)
return new Q.i(this.c.$1(t.gZ(a)),t.gd5(a),[this.b])},
$S:function(){return H.eZ(function(a,b){return{func:1,args:[[Q.i,a]]}},this,"kf")}}
J.f.prototype.eZ=J.f.prototype.A
J.hx.prototype.f0=J.hx.prototype.A
P.ds.prototype.f2=P.ds.prototype.bP
P.ds.prototype.f3=P.ds.prototype.bN
P.aT.prototype.dj=P.aT.prototype.a5
P.o.prototype.f_=P.o.prototype.cb
W.cb.prototype.cg=W.cb.prototype.ax
W.ii.prototype.f4=W.ii.prototype.aZ
Q.dY.prototype.f1=Q.dY.prototype.A;(function installTearOffs(){installTearOff(H.fF.prototype,"ghR",0,0,0,null,["$0"],["c1"],1)
installTearOff(H.dG.prototype,"geN",0,0,0,null,["$1"],["aB"],12)
installTearOff(H.eW.prototype,"ghs",0,0,0,null,["$1"],["b_"],12)
installTearOff(H,"yc",1,0,0,null,["$1"],["HY"],6)
installTearOff(P,"I0",1,0,0,null,["$1"],["Hl"],8)
installTearOff(P,"I1",1,0,0,null,["$1"],["Hm"],8)
installTearOff(P,"I2",1,0,0,null,["$1"],["Hn"],8)
installTearOff(P,"yo",1,0,0,null,["$0"],["HX"],1)
installTearOff(P.km.prototype,"gea",0,0,0,null,["$2","$1"],["cL","bs"],14)
installTearOff(P.bn.prototype,"gbf",0,0,0,null,["$2","$1"],["al","fp"],14)
var t
installTearOff(t=P.ds.prototype,"gdQ",0,0,0,null,["$0"],["bS"],1)
installTearOff(t,"gdR",0,0,0,null,["$0"],["bT"],1)
installTearOff(t=P.ib.prototype,"gdQ",0,0,0,null,["$0"],["bS"],1)
installTearOff(t,"gdR",0,0,0,null,["$0"],["bT"],1)
installTearOff(t,"gfE",0,0,0,null,["$1"],["fF"],function(){return H.eZ(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"ib")})
installTearOff(t,"gfI",0,0,0,null,["$2"],["fJ"],34)
installTearOff(t,"gfG",0,0,0,null,["$0"],["fH"],1)
installTearOff(P.kt.prototype,"ghi",0,1,0,null,["$1"],["Y"],16)
installTearOff(P,"Ia",1,0,0,null,["$2"],["zM"],30)
installTearOff(P,"Ib",1,0,0,null,["$1"],["fM"],4)
installTearOff(W,"Iq",1,0,0,null,["$4"],["Hs"],13)
installTearOff(W,"Ir",1,0,0,null,["$4"],["Ht"],13)
installTearOff(t=W.iu.prototype,"gaq",0,1,0,null,["$1"],["cP"],4)
installTearOff(t,"ghK",0,0,0,null,["$1"],["el"],4)
installTearOff(t,"gip",0,0,0,null,["$1"],["iq"],4)
installTearOff(W.f9.prototype,"gZ",0,1,0,null,["$1"],["L"],5)
installTearOff(W.ix.prototype,"gZ",0,1,0,null,["$1"],["L"],32)
installTearOff(W.iC.prototype,"gZ",0,1,0,null,["$1"],["L"],5)
installTearOff(W.iD.prototype,"gZ",0,1,0,null,["$1"],["L"],6)
installTearOff(W.iE.prototype,"gZ",0,1,0,null,["$1"],["L"],5)
installTearOff(W.fi.prototype,"gZ",0,1,0,null,["$1"],["L"],35)
installTearOff(W.iT.prototype,"gZ",0,1,0,null,["$1"],["L"],10)
installTearOff(W.fj.prototype,"gZ",0,1,0,null,["$1"],["L"],11)
installTearOff(W.iV.prototype,"gZ",0,1,0,null,["$1"],["L"],11)
installTearOff(W.jN.prototype,"gZ",0,1,0,null,["$1"],["L"],5)
installTearOff(W.jO.prototype,"gZ",0,1,0,null,["$1"],["L"],9)
installTearOff(W.jR.prototype,"gcZ",0,1,0,null,["$0"],["d_"],7)
installTearOff(W.cm.prototype,"gZ",0,1,0,null,["$1"],["L"],9)
installTearOff(W.jZ.prototype,"gZ",0,1,0,null,["$1"],["L"],17)
installTearOff(W.k4.prototype,"gZ",0,1,0,null,["$1"],["L"],10)
installTearOff(W.k6.prototype,"gZ",0,1,0,null,["$1"],["L"],18)
installTearOff(W.k7.prototype,"gZ",0,1,0,null,["$1"],["L"],19)
installTearOff(W.co.prototype,"gZ",0,1,0,null,["$1"],["L"],20)
installTearOff(W.kb.prototype,"gZ",0,1,0,null,["$1"],["L"],36)
installTearOff(W.kc.prototype,"gZ",0,1,0,null,["$1"],["L"],21)
installTearOff(t=W.kd.prototype,"gc4",0,1,0,null,["$0"],["i0"],7)
installTearOff(t,"gcZ",0,1,0,null,["$0"],["d_"],7)
installTearOff(W.ke.prototype,"gZ",0,1,0,null,["$1"],["L"],22)
installTearOff(W.i7.prototype,"gZ",0,1,0,null,["$1"],["L"],23)
installTearOff(W.kn.prototype,"gZ",0,1,0,null,["$1"],["L"],24)
installTearOff(W.ks.prototype,"gZ",0,1,0,null,["$1"],["L"],25)
installTearOff(W.ih.prototype,"gZ",0,1,0,null,["$1"],["L"],31)
installTearOff(W.kv.prototype,"gZ",0,1,0,null,["$1"],["L"],27)
installTearOff(W.kx.prototype,"gZ",0,1,0,null,["$1"],["L"],28)
installTearOff(P.k8.prototype,"gZ",0,1,0,null,["$1"],["L"],29)
installTearOff(R,"dS",1,0,0,null,["$1"],["xs"],0)
installTearOff(R,"Gm",1,0,0,null,["$1"],["GC"],0)
installTearOff(R,"Gi",1,0,0,null,["$1"],["Gn"],0)
installTearOff(R,"oj",1,0,0,null,["$1"],["GB"],0)
installTearOff(R,"c0",1,0,0,null,["$1"],["GA"],0)
installTearOff(R,"oi",1,0,0,null,["$1"],["Gz"],0)
installTearOff(R,"oh",1,0,0,null,["$1"],["Gx"],0)
installTearOff(R,"fv",1,0,0,null,["$1"],["Gv"],0)
installTearOff(R,"dd",1,0,0,null,["$1"],["Gr"],0)
installTearOff(R,"ec",1,0,0,null,["$1"],["Gt"],0)
installTearOff(R,"dR",1,0,0,null,["$1"],["Gy"],0)
installTearOff(R,"v3",1,0,0,null,["$1"],["Gs"],0)
installTearOff(R,"Gk",1,0,0,null,["$1"],["Gu"],0)
installTearOff(R,"Gl",1,0,0,null,["$1"],["Gw"],0)
installTearOff(R,"B",1,0,0,null,["$1"],["Go"],0)
installTearOff(R,"Gj",1,0,0,null,["$1"],["Gp"],0)
installTearOff(N,"yz",1,0,0,null,["$0"],["IA"],1)
installTearOff(N,"Is",1,0,0,null,["$0"],["Ie"],1)
installTearOff(N,"It",1,0,0,null,["$0"],["rY"],15)
installTearOff(N,"Iu",1,0,0,null,["$0"],["rZ"],15)
installTearOff(F.hE.prototype,"gaq",0,1,0,null,["$1"],["cP"],4)
installTearOff(O,"IC",1,0,0,null,["$1"],["IE"],33)
installTearOff(Y.dT.prototype,"gi5",0,0,0,null,["$1"],["ew"],function(){return H.eZ(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dT")})
installTearOff(V,"IJ",1,0,0,null,["$4"],["A7"],3)
installTearOff(V,"II",1,0,0,null,["$4"],["A6"],2)
installTearOff(B,"kI",1,0,0,null,["$1"],["HS"],26)
installTearOff(G,"IP",1,0,0,null,["$1"],["H2"],6)
installTearOff(T,"I6",1,0,0,null,["$4"],["zY"],3)
installTearOff(T,"I5",1,0,0,null,["$4"],["zX"],2)
installTearOff(T,"I4",1,0,0,null,["$4"],["zW"],3)
installTearOff(T,"I3",1,0,0,null,["$4"],["zV"],2)
installTearOff(F,"Ik",1,0,0,null,["$4"],["A3"],3)
installTearOff(F,"Ij",1,0,0,null,["$4"],["A2"],2)
installTearOff(F,"Ii",1,0,0,null,["$4"],["A1"],3)
installTearOff(F,"Ih",1,0,0,null,["$4"],["A0"],2)
installTearOff(F,"Ig",1,0,0,null,["$4"],["A_"],3)
installTearOff(F,"If",1,0,0,null,["$4"],["zZ"],2)})();(function inheritance(){inherit(P.ad,null)
var t=P.ad
inherit(H.uB,t)
inherit(J.f,t)
inherit(J.ir,t)
inherit(P.fu,t)
inherit(P.o,t)
inherit(H.eD,t)
inherit(P.jG,t)
inherit(H.iQ,t)
inherit(H.pG,t)
inherit(H.f7,t)
inherit(H.r_,t)
inherit(H.fF,t)
inherit(H.qw,t)
inherit(H.eX,t)
inherit(H.qZ,t)
inherit(H.qh,t)
inherit(H.fw,t)
inherit(H.py,t)
inherit(H.dK,t)
inherit(H.dG,t)
inherit(H.eW,t)
inherit(P.jL,t)
inherit(H.lg,t)
inherit(H.om,t)
inherit(H.pD,t)
inherit(P.eo,t)
inherit(H.hf,t)
inherit(H.kw,t)
inherit(H.dX,t)
inherit(H.w,t)
inherit(H.na,t)
inherit(H.nc,t)
inherit(H.hw,t)
inherit(H.ig,t)
inherit(H.i6,t)
inherit(H.i_,t)
inherit(H.rl,t)
inherit(P.ct,t)
inherit(P.f8,t)
inherit(P.km,t)
inherit(P.kr,t)
inherit(P.bn,t)
inherit(P.kl,t)
inherit(P.dr,t)
inherit(P.oT,t)
inherit(P.ds,t)
inherit(P.kp,t)
inherit(P.qr,t)
inherit(P.r2,t)
inherit(P.rj,t)
inherit(P.f1,t)
inherit(P.rC,t)
inherit(P.qQ,t)
inherit(P.qS,t)
inherit(P.oC,t)
inherit(P.qX,t)
inherit(P.dt,t)
inherit(P.fo,t)
inherit(P.aT,t)
inherit(P.rt,t)
inherit(P.qY,t)
inherit(P.h_,t)
inherit(P.h2,t)
inherit(P.rv,t)
inherit(P.cY,t)
inherit(P.bJ,t)
inherit(P.e3,t)
inherit(P.dv,t)
inherit(P.dM,t)
inherit(P.nW,t)
inherit(P.k9,t)
inherit(P.qB,t)
inherit(P.bQ,t)
inherit(P.lM,t)
inherit(P.p,t)
inherit(P.aZ,t)
inherit(P.cV,t)
inherit(P.dC,t)
inherit(P.dV,t)
inherit(P.x,t)
inherit(P.cg,t)
inherit(P.eS,t)
inherit(P.kz,t)
inherit(P.pH,t)
inherit(P.rh,t)
inherit(W.iu,t)
inherit(W.jU,t)
inherit(W.iw,t)
inherit(W.qg,t)
inherit(W.ko,t)
inherit(P.lk,t)
inherit(W.id,t)
inherit(W.bw,t)
inherit(W.jS,t)
inherit(W.ii,t)
inherit(W.rp,t)
inherit(W.iR,t)
inherit(W.ea,t)
inherit(W.rs,t)
inherit(W.rd,t)
inherit(W.kA,t)
inherit(P.rm,t)
inherit(P.q9,t)
inherit(P.qW,t)
inherit(P.r4,t)
inherit(P.r5,t)
inherit(P.bi,t)
inherit(P.dg,t)
inherit(T.fQ,t)
inherit(T.di,t)
inherit(T.hr,t)
inherit(T.nY,t)
inherit(T.q5,t)
inherit(T.q6,t)
inherit(T.q7,t)
inherit(T.q4,t)
inherit(T.mx,t)
inherit(T.iW,t)
inherit(B.hs,t)
inherit(N.ac,t)
inherit(L.fR,t)
inherit(A.jV,t)
inherit(O.cd,t)
inherit(T.hT,t)
inherit(M.fY,t)
inherit(X.iH,t)
inherit(X.is,t)
inherit(M.hg,t)
inherit(Z.iG,t)
inherit(E.nT,t)
inherit(E.N,t)
inherit(A.a5,t)
inherit(U.b,t)
inherit(Y.dU,t)
inherit(K.cK,t)
inherit(X.F,t)
inherit(G.a1,t)
inherit(A.fX,t)
inherit(B.dx,t)
inherit(B.dk,t)
inherit(A.e2,t)
inherit(N.ci,t)
inherit(F.hD,t)
inherit(F.hE,t)
inherit(Q.jX,t)
inherit(A.k0,t)
inherit(Y.dT,t)
inherit(O.d4,t)
inherit(D.cp,t)
inherit(B.dF,t)
inherit(Q.cX,t)
inherit(B.i5,t)
inherit(G.hV,t)
inherit(Q.i,t)
t=J.f
inherit(J.mW,t)
inherit(J.mX,t)
inherit(J.hx,t)
inherit(J.ez,t)
inherit(J.fp,t)
inherit(J.eA,t)
inherit(H.fq,t)
inherit(H.eG,t)
inherit(W.aG,t)
inherit(W.cO,t)
inherit(W.f5,t)
inherit(W.h3,t)
inherit(W.bP,t)
inherit(W.iX,t)
inherit(W.lv,t)
inherit(W.fa,t)
inherit(W.ix,t)
inherit(W.iA,t)
inherit(W.ly,t)
inherit(W.iB,t)
inherit(W.iY,t)
inherit(W.iD,t)
inherit(W.iE,t)
inherit(W.h8,t)
inherit(W.U,t)
inherit(W.iZ,t)
inherit(W.me,t)
inherit(W.mh,t)
inherit(W.cu,t)
inherit(W.ms,t)
inherit(W.j_,t)
inherit(W.hq,t)
inherit(W.ef,t)
inherit(W.nk,t)
inherit(W.jN,t)
inherit(W.cw,t)
inherit(W.j9,t)
inherit(W.nK,t)
inherit(W.nL,t)
inherit(W.jR,t)
inherit(W.ja,t)
inherit(W.o2,t)
inherit(W.eb,t)
inherit(W.eg,t)
inherit(W.cm,t)
inherit(W.jb,t)
inherit(W.k3,t)
inherit(W.oA,t)
inherit(W.cy,t)
inherit(W.jc,t)
inherit(W.fy,t)
inherit(W.co,t)
inherit(W.oM,t)
inherit(W.oS,t)
inherit(W.cq,t)
inherit(W.jd,t)
inherit(W.px,t)
inherit(W.cA,t)
inherit(W.je,t)
inherit(W.fA,t)
inherit(W.kc,t)
inherit(W.kd,t)
inherit(W.pN,t)
inherit(W.fB,t)
inherit(W.ke,t)
inherit(W.qk,t)
inherit(W.jf,t)
inherit(W.jg,t)
inherit(W.j0,t)
inherit(W.j1,t)
inherit(W.j2,t)
inherit(W.j3,t)
inherit(W.rA,t)
inherit(W.rB,t)
inherit(P.mC,t)
inherit(P.nS,t)
inherit(P.da,t)
inherit(P.j4,t)
inherit(P.dc,t)
inherit(P.j5,t)
inherit(P.oa,t)
inherit(P.j6,t)
inherit(P.df,t)
inherit(P.j7,t)
inherit(P.pT,t)
inherit(P.fT,t)
inherit(P.kQ,t)
inherit(P.oo,t)
inherit(P.rz,t)
inherit(P.j8,t)
t=J.hx
inherit(J.o8,t)
inherit(J.eQ,t)
inherit(J.eB,t)
inherit(F.uE,t)
inherit(R.hn,t)
inherit(R.uV,t)
inherit(R.uU,t)
inherit(S.ft,t)
inherit(S.vk,t)
inherit(S.vl,t)
inherit(S.vm,t)
inherit(S.tJ,t)
inherit(S.tM,t)
inherit(S.tz,t)
inherit(S.vo,t)
inherit(S.vp,t)
inherit(S.ls,t)
inherit(S.vb,t)
inherit(S.vc,t)
inherit(S.ts,t)
inherit(S.mn,t)
inherit(S.l8,t)
inherit(S.tx,t)
inherit(S.tw,t)
inherit(S.tL,t)
inherit(S.pu,t)
inherit(S.tB,t)
inherit(S.hG,t)
inherit(S.uL,t)
inherit(S.uN,t)
inherit(S.v6,t)
inherit(S.v7,t)
inherit(S.uP,t)
inherit(S.uQ,t)
inherit(S.u_,t)
inherit(S.u0,t)
inherit(S.uR,t)
inherit(S.uO,t)
inherit(S.tu,t)
inherit(S.vh,t)
inherit(S.vi,t)
inherit(S.vg,t)
inherit(Z.uz,t)
inherit(Z.uv,t)
inherit(Z.uw,t)
inherit(J.uA,J.ez)
t=J.fp
inherit(J.jI,t)
inherit(J.jH,t)
inherit(P.hB,P.fu)
t=P.hB
inherit(H.i2,t)
inherit(W.kq,t)
inherit(W.d8,t)
inherit(H.ld,H.i2)
t=P.o
inherit(H.t,t)
inherit(H.hF,t)
inherit(H.eT,t)
inherit(P.hv,t)
inherit(H.rk,t)
t=H.t
inherit(H.eC,t)
inherit(H.nb,t)
inherit(P.qR,t)
inherit(P.ed,t)
t=H.eC
inherit(H.pg,t)
inherit(H.eF,t)
inherit(P.nd,t)
inherit(H.h6,H.hF)
t=P.jG
inherit(H.jM,t)
inherit(H.kg,t)
inherit(Q.pX,t)
t=H.f7
inherit(H.tl,t)
inherit(H.tm,t)
inherit(H.qV,t)
inherit(H.qx,t)
inherit(H.mH,t)
inherit(H.mI,t)
inherit(H.r1,t)
inherit(H.pz,t)
inherit(H.pA,t)
inherit(H.tn,t)
inherit(H.t7,t)
inherit(H.t8,t)
inherit(H.t9,t)
inherit(H.ta,t)
inherit(H.tb,t)
inherit(H.pm,t)
inherit(H.n_,t)
inherit(H.mZ,t)
inherit(H.t3,t)
inherit(H.t4,t)
inherit(H.t5,t)
inherit(P.qd,t)
inherit(P.qc,t)
inherit(P.qe,t)
inherit(P.qf,t)
inherit(P.rD,t)
inherit(P.rE,t)
inherit(P.rO,t)
inherit(P.rS,t)
inherit(P.mm,t)
inherit(P.ml,t)
inherit(P.qC,t)
inherit(P.qK,t)
inherit(P.qG,t)
inherit(P.qH,t)
inherit(P.qI,t)
inherit(P.qE,t)
inherit(P.qJ,t)
inherit(P.qD,t)
inherit(P.qN,t)
inherit(P.qO,t)
inherit(P.qM,t)
inherit(P.qL,t)
inherit(P.oW,t)
inherit(P.oU,t)
inherit(P.oV,t)
inherit(P.oX,t)
inherit(P.p1,t)
inherit(P.p_,t)
inherit(P.p0,t)
inherit(P.p2,t)
inherit(P.p5,t)
inherit(P.p6,t)
inherit(P.p3,t)
inherit(P.p4,t)
inherit(P.p7,t)
inherit(P.p8,t)
inherit(P.oY,t)
inherit(P.oZ,t)
inherit(P.qj,t)
inherit(P.qi,t)
inherit(P.r3,t)
inherit(P.rG,t)
inherit(P.rF,t)
inherit(P.rH,t)
inherit(P.rN,t)
inherit(P.r7,t)
inherit(P.r8,t)
inherit(P.r9,t)
inherit(P.qT,t)
inherit(P.rU,t)
inherit(P.nq,t)
inherit(P.rx,t)
inherit(P.rw,t)
inherit(P.lC,t)
inherit(P.lD,t)
inherit(P.pM,t)
inherit(P.pI,t)
inherit(P.pK,t)
inherit(P.pL,t)
inherit(P.rR,t)
inherit(P.rK,t)
inherit(P.rJ,t)
inherit(P.rL,t)
inherit(P.rM,t)
inherit(W.qm,t)
inherit(W.rQ,t)
inherit(W.mv,t)
inherit(W.mw,t)
inherit(W.qn,t)
inherit(W.qo,t)
inherit(W.qA,t)
inherit(W.nN,t)
inherit(W.nM,t)
inherit(W.rf,t)
inherit(W.rg,t)
inherit(W.rr,t)
inherit(W.ry,t)
inherit(P.ro,t)
inherit(P.qa,t)
inherit(P.rV,t)
inherit(P.rW,t)
inherit(P.ll,t)
inherit(P.rI,t)
inherit(P.kW,t)
inherit(P.kX,t)
inherit(O.l3,t)
inherit(A.mV,t)
inherit(A.mU,t)
inherit(G.mS,t)
inherit(U.q0,t)
inherit(U.q1,t)
inherit(A.rT,t)
inherit(N.td,t)
inherit(N.te,t)
inherit(N.tf,t)
inherit(A.nh,t)
inherit(A.nf,t)
inherit(A.ng,t)
inherit(A.ni,t)
inherit(O.ti,t)
inherit(O.tj,t)
inherit(O.th,t)
inherit(V.lJ,t)
inherit(V.lI,t)
inherit(V.lH,t)
inherit(V.lG,t)
inherit(D.oP,t)
inherit(D.oQ,t)
inherit(D.oR,t)
inherit(G.oy,t)
inherit(Q.pY,t)
t=H.qh
inherit(H.fG,t)
inherit(H.ik,t)
inherit(P.eR,P.jL)
inherit(H.lh,P.eR)
inherit(H.h1,H.lg)
inherit(H.li,H.h1)
t=P.eo
inherit(H.jT,t)
inherit(H.n0,t)
inherit(H.pF,t)
inherit(H.lb,t)
inherit(H.or,t)
inherit(P.fs,t)
inherit(P.d0,t)
inherit(P.V,t)
inherit(P.eP,t)
inherit(P.aN,t)
inherit(P.bN,t)
inherit(P.lu,t)
t=H.pm
inherit(H.oO,t)
inherit(H.fV,t)
t=P.hv
inherit(H.qb,t)
inherit(T.fP,t)
t=H.eG
inherit(H.nC,t)
inherit(H.jP,t)
t=H.jP
inherit(H.hL,t)
inherit(H.hM,t)
inherit(H.hN,H.hL)
inherit(H.hJ,H.hN)
inherit(H.hO,H.hM)
inherit(H.hK,H.hO)
t=H.hJ
inherit(H.nD,t)
inherit(H.nE,t)
t=H.hK
inherit(H.nF,t)
inherit(H.nG,t)
inherit(H.nH,t)
inherit(H.nI,t)
inherit(H.nJ,t)
inherit(H.jQ,t)
inherit(H.fr,t)
t=P.km
inherit(P.dZ,t)
inherit(P.ky,t)
t=P.kp
inherit(P.qq,t)
inherit(P.qs,t)
inherit(P.ri,P.r2)
t=P.dr
inherit(P.ia,t)
inherit(W.qy,t)
inherit(P.ib,P.ds)
inherit(P.r0,P.ia)
inherit(P.r6,P.rC)
inherit(P.ku,H.w)
inherit(P.oB,P.oC)
inherit(P.qU,P.oB)
inherit(P.kt,P.qU)
t=P.h_
inherit(P.l0,t)
inherit(P.lF,t)
t=P.h2
inherit(P.l1,t)
inherit(P.pQ,t)
inherit(P.pP,P.lF)
t=P.dv
inherit(P.W,t)
inherit(P.C,t)
t=P.d0
inherit(P.eJ,t)
inherit(P.mD,t)
inherit(P.qp,P.kz)
t=W.aG
inherit(W.af,t)
inherit(W.h9,t)
inherit(W.lf,t)
inherit(W.md,t)
inherit(W.mf,t)
inherit(W.mi,t)
inherit(W.hp,t)
inherit(W.hI,t)
inherit(W.oc,t)
inherit(W.k2,t)
inherit(W.oD,t)
inherit(W.eU,t)
inherit(W.cx,t)
inherit(W.ha,t)
inherit(W.cW,t)
inherit(W.cM,t)
inherit(W.hb,t)
inherit(W.pR,t)
inherit(W.pW,t)
inherit(W.kh,t)
inherit(W.q2,t)
inherit(W.re,t)
inherit(P.lw,t)
inherit(P.hS,t)
inherit(P.pB,t)
inherit(P.bI,t)
inherit(P.fU,t)
t=W.af
inherit(W.cb,t)
inherit(W.em,t)
inherit(W.en,t)
inherit(W.iz,t)
inherit(W.fC,t)
inherit(W.qt,t)
t=W.cb
inherit(W.aL,t)
inherit(P.c8,t)
t=W.aL
inherit(W.ek,t)
inherit(W.kR,t)
inherit(W.hH,t)
inherit(W.l2,t)
inherit(W.f6,t)
inherit(W.fZ,t)
inherit(W.lE,t)
inherit(W.mc,t)
inherit(W.iT,t)
inherit(W.my,t)
inherit(W.ew,t)
inherit(W.mF,t)
inherit(W.n2,t)
inherit(W.n4,t)
inherit(W.hz,t)
inherit(W.np,t)
inherit(W.nt,t)
inherit(W.nu,t)
inherit(W.nv,t)
inherit(W.nw,t)
inherit(W.nQ,t)
inherit(W.nR,t)
inherit(W.nV,t)
inherit(W.nX,t)
inherit(W.o0,t)
inherit(W.of,t)
inherit(W.fx,t)
inherit(W.k4,t)
inherit(W.oF,t)
inherit(W.oI,t)
inherit(W.hW,t)
inherit(W.pe,t)
inherit(W.ka,t)
inherit(W.pk,t)
inherit(W.pl,t)
inherit(W.i0,t)
inherit(W.pp,t)
inherit(W.qP,t)
inherit(W.f3,W.hH)
inherit(W.hc,W.h9)
inherit(W.kZ,W.hc)
t=W.bP
inherit(W.lm,t)
inherit(W.ln,t)
inherit(W.h4,t)
inherit(W.h5,t)
inherit(W.lo,t)
inherit(W.lp,t)
inherit(W.lq,t)
inherit(W.f9,W.iX)
inherit(W.ql,W.jU)
inherit(W.jh,W.iY)
inherit(W.iC,W.jh)
t=W.U
inherit(W.lK,t)
inherit(W.oK,t)
inherit(W.oL,t)
inherit(W.ck,W.f5)
inherit(W.ji,W.iZ)
inherit(W.fi,W.ji)
inherit(W.jj,W.j_)
inherit(W.fj,W.jj)
inherit(W.iV,W.fj)
inherit(W.e9,W.hp)
inherit(W.hy,W.ef)
inherit(W.nx,W.hI)
inherit(W.jt,W.j9)
inherit(W.jO,W.jt)
inherit(W.ju,W.ja)
inherit(W.hP,W.ju)
inherit(W.o7,W.eg)
inherit(W.jv,W.jb)
inherit(W.jZ,W.jv)
inherit(W.oE,W.eU)
inherit(W.hd,W.ha)
inherit(W.k6,W.hd)
inherit(W.jw,W.jc)
inherit(W.k7,W.jw)
inherit(W.jx,W.jd)
inherit(W.ps,W.jx)
inherit(W.he,W.hb)
inherit(W.pt,W.he)
inherit(W.jy,W.je)
inherit(W.kb,W.jy)
inherit(W.jz,W.jf)
inherit(W.i7,W.jz)
inherit(W.jA,W.jg)
inherit(W.kn,W.jA)
inherit(W.qu,W.iB)
inherit(W.jk,W.j0)
inherit(W.ks,W.jk)
inherit(W.jl,W.j1)
inherit(W.ih,W.jl)
inherit(W.jm,W.j2)
inherit(W.kv,W.jm)
inherit(W.jn,W.j3)
inherit(W.kx,W.jn)
inherit(W.i8,W.qg)
t=P.lk
inherit(W.qv,t)
inherit(P.kV,t)
inherit(W.i9,W.qy)
inherit(W.qz,P.oT)
inherit(W.rq,W.ii)
inherit(P.rn,P.rm)
inherit(P.kk,P.q9)
inherit(P.bW,P.r5)
t=P.c8
inherit(P.cv,t)
inherit(P.el,t)
inherit(P.lN,t)
inherit(P.lO,t)
inherit(P.lP,t)
inherit(P.lQ,t)
inherit(P.lR,t)
inherit(P.lS,t)
inherit(P.lT,t)
inherit(P.lU,t)
inherit(P.lV,t)
inherit(P.lW,t)
inherit(P.lX,t)
inherit(P.lY,t)
inherit(P.lZ,t)
inherit(P.m_,t)
inherit(P.m0,t)
inherit(P.m1,t)
inherit(P.mg,t)
inherit(P.nr,t)
inherit(P.ns,t)
inherit(P.o5,t)
inherit(P.hU,t)
inherit(P.pf,t)
inherit(P.pj,t)
inherit(P.pS,t)
inherit(P.ic,t)
inherit(P.ra,t)
inherit(P.rb,t)
inherit(P.rc,t)
t=P.cv
inherit(P.kO,t)
inherit(P.mz,t)
inherit(P.ph,t)
inherit(P.eO,t)
inherit(P.pO,t)
inherit(P.jo,P.j4)
inherit(P.n6,P.jo)
inherit(P.jp,P.j5)
inherit(P.nO,P.jp)
inherit(P.jq,P.j6)
inherit(P.pc,P.jq)
inherit(P.pr,P.eO)
inherit(P.jr,P.j7)
inherit(P.pC,P.jr)
t=P.bI
inherit(P.f4,t)
inherit(P.l4,t)
inherit(P.lj,t)
t=P.f4
inherit(P.f2,t)
inherit(P.jW,t)
inherit(P.js,P.j8)
inherit(P.k8,P.js)
t=B.hs
inherit(S.kP,t)
inherit(M.kU,t)
inherit(A.le,t)
inherit(M.lr,t)
inherit(V.lz,t)
inherit(U.m2,t)
inherit(N.n1,t)
inherit(F.nA,t)
inherit(G.ob,t)
inherit(Q.oq,t)
inherit(N.oH,t)
inherit(D.pn,t)
inherit(V.po,t)
inherit(F.q3,t)
t=N.ac
inherit(T.lx,t)
inherit(R.og,t)
t=T.lx
inherit(K.bT,t)
inherit(S.bC,t)
inherit(T.c1,t)
inherit(M.bA,t)
inherit(A.o_,A.jV)
inherit(L.aW,A.o_)
t=O.cd
inherit(O.dw,t)
inherit(O.iF,t)
inherit(O.eN,t)
t=O.dw
inherit(U.kY,t)
inherit(Y.ol,t)
inherit(V.mj,t)
inherit(Q.mB,t)
inherit(Q.o6,t)
inherit(M.oN,t)
inherit(B.q8,t)
t=U.kY
inherit(U.nm,t)
inherit(U.nU,t)
inherit(U.p9,O.iF)
t=U.p9
inherit(U.pa,t)
inherit(U.pb,t)
t=T.hT
inherit(O.l_,t)
inherit(Y.mo,t)
inherit(Y.mp,t)
inherit(B.mr,t)
inherit(S.n3,t)
inherit(Z.nl,t)
inherit(S.nn,t)
inherit(U.no,t)
inherit(E.nz,t)
inherit(V.nZ,t)
inherit(N.oe,t)
inherit(N.op,t)
inherit(E.ot,t)
inherit(Y.ov,t)
inherit(L.ow,t)
inherit(S.oz,t)
inherit(Y.oG,t)
inherit(R.pi,t)
inherit(U.pv,t)
inherit(E.pV,t)
inherit(M.pZ,t)
t=O.eN
inherit(Y.pq,t)
inherit(Y.l9,t)
inherit(Y.nP,t)
inherit(U.q_,t)
t=L.fR
inherit(T.l5,t)
inherit(T.l7,t)
inherit(U.lA,t)
inherit(Z.lB,t)
inherit(T.mq,t)
inherit(X.mt,t)
inherit(V.mE,t)
inherit(Q.n5,t)
inherit(K.n7,t)
inherit(G.n8,t)
inherit(V.ny,t)
inherit(E.ok,t)
inherit(K.ou,t)
inherit(N.oJ,t)
inherit(N.pw,t)
inherit(Q.pU,t)
t=S.bC
inherit(S.it,t)
inherit(S.mu,t)
inherit(E.iU,E.nT)
t=E.N
inherit(E.fS,t)
inherit(E.kT,t)
inherit(Q.o9,Q.mB)
inherit(U.R,U.b)
t=R.og
inherit(R.Z,t)
inherit(R.M,t)
inherit(R.a4,t)
inherit(R.bF,R.a4)
t=Y.dU
inherit(Y.a6,t)
inherit(Y.bX,t)
inherit(Y.P,t)
inherit(Y.iv,t)
inherit(Y.bE,t)
inherit(Y.d7,t)
inherit(Y.lc,t)
inherit(Y.hQ,t)
inherit(Y.iS,t)
inherit(Y.jY,t)
t=Y.bX
inherit(Y.dj,t)
inherit(Y.bD,t)
inherit(U.ag,A.a5)
t=G.a1
inherit(G.aI,t)
inherit(G.bK,t)
inherit(G.d,t)
inherit(G.ae,G.bK)
t=D.cp
inherit(D.kj,t)
inherit(D.on,t)
t=Q.cX
inherit(Q.i4,t)
inherit(Q.i3,t)
inherit(Q.dY,Q.i4)
inherit(B.ki,Q.dY)
t=S.ft
inherit(S.v4,t)
inherit(S.la,t)
inherit(S.n9,t)
inherit(S.uJ,t)
inherit(S.tZ,t)
t=S.la
inherit(S.uX,t)
inherit(S.uS,t)
t=S.n9
inherit(S.tD,t)
inherit(S.tt,t)
t=S.ls
inherit(S.uF,t)
inherit(S.lt,t)
inherit(S.o1,S.lt)
inherit(S.v8,S.o1)
t=S.l8
inherit(S.uY,t)
inherit(S.v9,t)
t=S.mn
inherit(S.vd,t)
inherit(S.uZ,t)
inherit(S.tK,t)
inherit(S.va,t)
t=S.pu
inherit(S.vf,t)
inherit(S.tA,t)
inherit(S.vn,t)
t=S.hG
inherit(S.uK,t)
inherit(S.uM,t)
inherit(S.v5,t)
inherit(Q.eV,Q.i3)
inherit(Q.kf,Q.eV)
mixin(H.i2,H.pG)
mixin(H.hL,P.aT)
mixin(H.hN,H.iQ)
mixin(H.hM,P.aT)
mixin(H.hO,H.iQ)
mixin(P.fu,P.aT)
mixin(P.eR,P.rt)
mixin(W.h9,P.aT)
mixin(W.hc,W.bw)
mixin(W.iX,W.iw)
mixin(W.jU,W.iw)
mixin(W.iY,P.aT)
mixin(W.jh,W.bw)
mixin(W.iZ,P.aT)
mixin(W.ji,W.bw)
mixin(W.j_,P.aT)
mixin(W.jj,W.bw)
mixin(W.j9,P.aT)
mixin(W.jt,W.bw)
mixin(W.ja,P.aT)
mixin(W.ju,W.bw)
mixin(W.jb,P.aT)
mixin(W.jv,W.bw)
mixin(W.ha,P.aT)
mixin(W.hd,W.bw)
mixin(W.jc,P.aT)
mixin(W.jw,W.bw)
mixin(W.jd,P.aT)
mixin(W.jx,W.bw)
mixin(W.hb,P.aT)
mixin(W.he,W.bw)
mixin(W.je,P.aT)
mixin(W.jy,W.bw)
mixin(W.jf,P.aT)
mixin(W.jz,W.bw)
mixin(W.jg,P.aT)
mixin(W.jA,W.bw)
mixin(W.j0,P.aT)
mixin(W.jk,W.bw)
mixin(W.j1,P.aT)
mixin(W.jl,W.bw)
mixin(W.j2,P.aT)
mixin(W.jm,W.bw)
mixin(W.j3,P.aT)
mixin(W.jn,W.bw)
mixin(P.j4,P.aT)
mixin(P.jo,W.bw)
mixin(P.j5,P.aT)
mixin(P.jp,W.bw)
mixin(P.j6,P.aT)
mixin(P.jq,W.bw)
mixin(P.j7,P.aT)
mixin(P.jr,W.bw)
mixin(P.j8,P.aT)
mixin(P.js,W.bw)
mixin(A.jV,P.fo)
mixin(Q.i4,P.aT)
mixin(Q.i3,P.fo)})();(function constants(){C.L=W.ek.prototype
C.v=W.f6.prototype
C.R=W.e9.prototype
C.S=J.f.prototype
C.b=J.ez.prototype
C.f=J.jH.prototype
C.a=J.jI.prototype
C.d=J.fp.prototype
C.c=J.eA.prototype
C.Z=J.eB.prototype
C.t=H.fr.prototype
C.a7=W.hP.prototype
C.J=J.o8.prototype
C.K=W.ka.prototype
C.u=J.eQ.prototype
C.N=new P.l1(!1)
C.M=new P.l0(C.N)
C.i=new W.iu()
C.O=new P.nW()
C.P=new P.qr()
C.Q=new P.qW()
C.e=new P.r6()
C.w=new W.rs()
C.p=new P.dM(0)
C.T=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.x=function(hooks) { return hooks; }
C.U=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.V=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.W=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.y=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.X=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.Y=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.z=H.a(makeConstList([127,2047,65535,1114111]),[P.C])
C.A=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.j=makeConstList([0,0,32776,33792,1,10240,0,0])
C.a_=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.x])
C.k=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.l=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.a0=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.B=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.a1=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.a2=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.C=makeConstList([])
C.a4=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.D=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.E=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.F=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.G=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.H=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.I=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.q=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.x])
C.r=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.x])
C.h=new F.hD(0,"LogLevel.ERROR")
C.m=new F.hD(1,"LogLevel.WARN")
C.a5=new F.hD(3,"LogLevel.VERBOSE")
C.a3=H.a(makeConstList([]),[P.x])
C.a6=new H.h1(0,{},C.a3,[P.x,P.x])
C.a8=H.c2("bi")
C.a9=H.c2("IS")
C.n=H.c2("IT")
C.aa=H.c2("IU")
C.ab=H.c2("IV")
C.ac=H.c2("IW")
C.ad=H.c2("IX")
C.ae=H.c2("IY")
C.af=H.c2("mY")
C.ag=H.c2("cV")
C.ah=H.c2("x")
C.ai=H.c2("J1")
C.aj=H.c2("J2")
C.ak=H.c2("J3")
C.al=H.c2("dg")
C.am=H.c2("cY")
C.an=H.c2("W")
C.ao=H.c2("C")
C.ap=H.c2("dv")
C.o=new P.pP(!1)})();(function staticFields(){$.xn="$cachedFunction"
$.xo="$cachedInvocation"
$.dL=0
$.fW=null
$.vY=null
$.vE=null
$.yl=null
$.yE=null
$.rX=null
$.t6=null
$.vF=null
$.fI=null
$.il=null
$.im=null
$.vx=!1
$.an=C.e
$.wf=0
$.e4=null
$.tE=null
$.wd=null
$.wc=null
$.w9=null
$.w8=null
$.w7=null
$.wa=null
$.w6=null
$.zA=null
$.zB=null
$.zn=null
$.zo=null
$.zm=null
$.zq=null
$.zw=null
$.zv=null
$.zC=null
$.zy=null
$.zr=null
$.zu=null
$.zp=null
$.zt=null
$.zz=null
$.zs=null
$.zx=null
$.b4="accent"
$.b6="aspect1"
$.b5="aspect2"
$.bf="shoe1"
$.be="shoe2"
$.b8="cloak1"
$.b9="cloak2"
$.b7="cloak3"
$.bd="shirt1"
$.bc="shirt2"
$.bb="pants1"
$.ba="pants2"
$.ak=1300
$.k=3
$.n=2
$.H=1
$.A=0.1
$.e7=1
$.cR=-1
$.tT=null
$.e5=null
$.wh=null
$.er=null
$.fg=null
$.hh=null
$.tN=null
$.m6=null
$.tV=null
$.iJ=null
$.iI=null
$.wk=null
$.iP=null
$.fd=null
$.dP=null
$.wj=null
$.m4=null
$.mb=null
$.eu=null
$.Ae=null
$.Ab=null
$.Ad=null
$.wi=null
$.Af=null
$.hm=null
$.fb=null
$.cs=null
$.d2=null
$.et=null
$.ma=null
$.cc=null
$.c5=null
$.tP=null
$.iO=null
$.eq=null
$.Ac=null
$.fe=null
$.cQ=null
$.e6=null
$.hk=null
$.dl=null
$.ff=null
$.c4=null
$.m8=null
$.wg=null
$.aO=null
$.cF=null
$.d1=null
$.cj=null
$.iN=null
$.c6=null
$.dy=null
$.dm=null
$.fc=null
$.dN=null
$.dn=null
$.m5=null
$.dA=null
$.hl=null
$.m7=null
$.m3=null
$.cP=null
$.cE=null
$.bg=null
$.ep=null
$.es=null
$.m9=null
$.iK=null
$.hj=null
$.tR=null
$.cr=null
$.tU=null
$.tO=null
$.wm=null
$.hi=null
$.cI=null
$.dO=null
$.dz=null
$.fh=null
$.tQ=null
$.tS=null
$.wl=null
$.iL=null
$.iM=null
$.ev=null
$.wn=!1
$.tX=null
$.Ag=null
$.wp=null
$.wr=null
$.Ap=null
$.wq=null
$.An=null
$.Ao=null
$.tW=null
$.Ak=null
$.Ai=null
$.Aj=null
$.Al=null
$.Am=null
$.AA=null
$.At=null
$.Au=null
$.Av=null
$.Aw=null
$.Ax=null
$.Ay=null
$.Az=null
$.AC=null
$.AD=null
$.AE=null
$.AF=null
$.AG=null
$.AH=null
$.AB=null
$.xh="JACK"
$.G3="PM"
$.G_="JS"
$.FZ="HP"
$.G8="YD"
$.G5="SI"
$.G6="SU"
$.G0="ME"
$.G4="RB"
$.FX="GN"
$.G1="MP"
$.FV="AR"
$.G2="PE"
$.FW="DP"
$.G7="WV"
$.FY="HB"
$.m="PLAYER1TAG"
$.dD="PLAYER2TAG"
$.y="DENIZENTAG"
$.r="CONSORTTAG"
$.L="CONSORTSOUNDTAG"
$.av="MCGUFFINTAG"
$.ab="TAGPHYSICALMCGUFFIN"
$.bz="TAGWEAPON"
$.GL=null
$.GX=null
$.GH=null
$.GK=null
$.GO=null
$.GT=null
$.GR=null
$.H_=null
$.GZ=null
$.GS=null
$.H1=null
$.GN=null
$.H0=null
$.GV=null
$.GU=null
$.GW=null
$.GJ=null
$.GI=null
$.GQ=null
$.GP=null
$.GM=null
$.GY=null
$.yq=!1
$.Id=!1
$.H6=!1
$.xu=null
$.He=13
$.ar=3
$.bM=2
$.aA=1
$.mT=0
$.I=1
$.a3=3
$.G=4
$.us=6
$.ut=7
$.aa=8
$.v=9
$.q=10
$.wI=null
$.ey=null
$.mM=null
$.uo=null
$.ui=null
$.wy=null
$.u8=null
$.uh=null
$.hu=null
$.wG=null
$.x2=null
$.wB=null
$.wH=null
$.u9=null
$.ug=null
$.uq=null
$.x5=null
$.u5=null
$.jD=null
$.jB=null
$.aB=null
$.wW=null
$.u4=null
$.wR=null
$.fn=null
$.wA=null
$.x6=null
$.x3=null
$.x1=null
$.ue=null
$.mL=null
$.fl=null
$.x4=null
$.mJ=null
$.ub=null
$.ht=null
$.x_=null
$.dQ=null
$.ex=null
$.ur=null
$.x0=null
$.up=null
$.um=null
$.un=null
$.mP=null
$.jC=null
$.B7=null
$.wK=null
$.wQ=null
$.wZ=null
$.wY=null
$.uj=null
$.D=null
$.wF=null
$.mK=null
$.bU=null
$.b2=null
$.bV=null
$.X=null
$.aD=null
$.cf=null
$.K=null
$.O=null
$.au=null
$.aQ=null
$.bY=null
$.bl=null
$.bt=null
$.cl=null
$.aS=null
$.by=null
$.c_=null
$.a_=null
$.Fv=null
$.as=null
$.b0=null
$.aM=null
$.ah=null
$.ce=null
$.aJ=null
$.aq=null
$.bZ=null
$.aR=null
$.al=null
$.bk=null
$.c7=null
$.aC=null
$.bu=null
$.bs=null
$.a7=null
$.bR=null
$.a9=null
$.bh=null
$.bx=null
$.aH=null
$.b_=null
$.ax=null
$.b3=null
$.aE=null
$.Y=null
$.at=null
$.az=null
$.aX=null
$.ao=null
$.am=null
$.a2=null
$.S=null
$.T=null
$.ai=null
$.aP=null
$.bm=null
$.aY=null
$.Cr=null
$.F7=null
$.FG=null
$.BX=null
$.F4=null
$.Cs=null
$.ww=null
$.Fj=null
$.Ds=null
$.Cn=null
$.B1=null
$.E2=null
$.uk=null
$.wC=null
$.Es=null
$.BU=null
$.Db=null
$.BS=null
$.u6=null
$.BD=null
$.CE=null
$.C1=null
$.Dl=null
$.Fr=null
$.Ct=null
$.u7=null
$.Dm=null
$.C_=null
$.BJ=null
$.wV=null
$.AV=null
$.wx=null
$.D4=null
$.mN=null
$.DH=null
$.DB=null
$.AZ=null
$.BM=null
$.EB=null
$.B0=null
$.F3=null
$.Da=null
$.C8=null
$.Em=null
$.EY=null
$.ud=null
$.Dw=null
$.Ej=null
$.C0=null
$.AO=null
$.Fu=null
$.De=null
$.BI=null
$.Fi=null
$.DK=null
$.BP=null
$.F2=null
$.Ci=null
$.EJ=null
$.EK=null
$.AX=null
$.DD=null
$.C2=null
$.Cc=null
$.FK=null
$.mR=null
$.EA=null
$.F0=null
$.mO=null
$.Bx=null
$.DU=null
$.DY=null
$.AU=null
$.Ch=null
$.F1=null
$.DJ=null
$.Fl=null
$.Eo=null
$.DZ=null
$.wP=null
$.EN=null
$.FA=null
$.F6=null
$.CS=null
$.Ea=null
$.CT=null
$.EC=null
$.Fy=null
$.Dk=null
$.Ce=null
$.CB=null
$.Bn=null
$.Ek=null
$.Cz=null
$.CG=null
$.C4=null
$.EM=null
$.fm=null
$.DO=null
$.wN=null
$.CU=null
$.CR=null
$.FD=null
$.Bt=null
$.Ey=null
$.Ez=null
$.Ex=null
$.Ew=null
$.EU=null
$.CH=null
$.DE=null
$.EX=null
$.Dv=null
$.DP=null
$.BY=null
$.Fx=null
$.DC=null
$.Ck=null
$.Cl=null
$.DX=null
$.FJ=null
$.D8=null
$.Fw=null
$.wT=null
$.EI=null
$.Di=null
$.ul=null
$.D2=null
$.Ec=null
$.Bs=null
$.Co=null
$.EE=null
$.DF=null
$.Fq=null
$.wS=null
$.DN=null
$.Bz=null
$.BV=null
$.E8=null
$.Fd=null
$.ED=null
$.u3=null
$.wX=null
$.EP=null
$.Fz=null
$.CQ=null
$.Bb=null
$.Bk=null
$.Fb=null
$.DR=null
$.Dt=null
$.DS=null
$.F8=null
$.D3=null
$.AY=null
$.CF=null
$.Dr=null
$.ER=null
$.Cy=null
$.Br=null
$.Eu=null
$.Ev=null
$.Fo=null
$.EG=null
$.uf=null
$.wD=null
$.BQ=null
$.ua=null
$.CY=null
$.wO=null
$.Ee=null
$.DA=null
$.Eq=null
$.uc=null
$.mQ=null
$.wM=null
$.wE=null
$.Ca=null
$.CD=null
$.wU=null
$.wJ=null
$.BL=null
$.Ff=null
$.BE=null
$.E0=null
$.CV=null
$.EW=null
$.Du=null
$.B8=null
$.CW=null
$.C7=null
$.E4=null
$.Dd=null
$.Dz=null
$.Dj=null
$.Dn=null
$.Et=null
$.Ep=null
$.AR=null
$.Fc=null
$.Eh=null
$.BZ=null
$.C3=null
$.CC=null
$.F9=null
$.Cv=null
$.Df=null
$.Bf=null
$.Cp=null
$.C6=null
$.DT=null
$.Cf=null
$.jE=null
$.Dh=null
$.wz=null
$.Ed=null
$.CX=null
$.Cw=null
$.AP=null
$.AW=null
$.DQ=null
$.E_=null
$.Dc=null
$.CO=null
$.Ft=null
$.Bi=null
$.Cx=null
$.Dg=null
$.BW=null
$.ET=null
$.BK=null
$.EF=null
$.Bg=null
$.Fe=null
$.Dp=null
$.Ba=null
$.En=null
$.E9=null
$.BR=null
$.CI=null
$.By=null
$.Fa=null
$.D0=null
$.Fp=null
$.BA=null
$.CJ=null
$.BB=null
$.BT=null
$.Eg=null
$.BN=null
$.D1=null
$.DG=null
$.Bu=null
$.EV=null
$.FF=null
$.EL=null
$.Dx=null
$.ES=null
$.Dy=null
$.B3=null
$.AQ=null
$.Dq=null
$.Bd=null
$.BC=null
$.B4=null
$.B9=null
$.DM=null
$.E5=null
$.Fh=null
$.CZ=null
$.FE=null
$.El=null
$.Ei=null
$.D5=null
$.D_=null
$.BG=null
$.CM=null
$.Do=null
$.DV=null
$.EO=null
$.AT=null
$.FB=null
$.Cd=null
$.EZ=null
$.C5=null
$.B2=null
$.Bv=null
$.Bm=null
$.FI=null
$.Bw=null
$.Cg=null
$.BF=null
$.Fn=null
$.EQ=null
$.Fg=null
$.AS=null
$.Er=null
$.D6=null
$.D9=null
$.Fs=null
$.F_=null
$.wL=null
$.Cm=null
$.E7=null
$.FC=null
$.Cq=null
$.D7=null
$.Bq=null
$.CP=null
$.CN=null
$.EH=null
$.E6=null
$.CK=null
$.Bl=null
$.F5=null
$.DW=null
$.Fk=null
$.FH=null
$.B6=null
$.B5=null
$.Bh=null
$.Cj=null
$.Ef=null
$.BO=null
$.Eb=null
$.C9=null
$.B_=null
$.Bj=null
$.DL=null
$.Cb=null
$.E3=null
$.Bp=null
$.Cu=null
$.Fm=null
$.Bc=null
$.CA=null
$.E1=null
$.Bo=null
$.CL=null
$.DI=null
$.Be=null
$.BH=null
$.xU=4
$.e8="OWNER"
$.xd=!1
$.uI=null
$.yG=""
$.xw=null
$.Ha=null
$.hZ=null
$.eL=null
$.H9=null
$.eM=null
$.ee=null
$.de=null
$.eK=null
$.hX=null
$.hY=null
$.dE=null
$.cz=null
$.xx=!1
$.Hb=null})();(function lazyInitializers(){lazy($,"w4","$get$w4",function(){return H.yw("_$dart_dartClosure")})
lazy($,"uC","$get$uC",function(){return H.yw("_$dart_js")})
lazy($,"wu","$get$wu",function(){return H.AM()})
lazy($,"wv","$get$wv",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.wf
$.wf=t+1
t="expando$key$"+t}return new P.lM(null,t,[P.C])})
lazy($,"xB","$get$xB",function(){return H.dW(H.pE({
toString:function(){return"$receiver$"}}))})
lazy($,"xC","$get$xC",function(){return H.dW(H.pE({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"xD","$get$xD",function(){return H.dW(H.pE(null))})
lazy($,"xE","$get$xE",function(){return H.dW(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xI","$get$xI",function(){return H.dW(H.pE(void 0))})
lazy($,"xJ","$get$xJ",function(){return H.dW(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xG","$get$xG",function(){return H.dW(H.xH(null))})
lazy($,"xF","$get$xF",function(){return H.dW(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"xL","$get$xL",function(){return H.dW(H.xH(void 0))})
lazy($,"xK","$get$xK",function(){return H.dW(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"vs","$get$vs",function(){return P.Hk()})
lazy($,"ho","$get$ho",function(){return P.Hq(null,P.cV)})
lazy($,"io","$get$io",function(){return[]})
lazy($,"xW","$get$xW",function(){return H.G9([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"yj","$get$yj",function(){return P.HR()})
lazy($,"xZ","$get$xZ",function(){return P.jK(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"vv","$get$vv",function(){return P.jJ()})
lazy($,"w3","$get$w3",function(){return P.d6("^\\S+$",!0,!1)})
lazy($,"ca","$get$ca",function(){return H.a([],[K.bT])})
lazy($,"kS","$get$kS",function(){return P.cJ(P.C,L.fR)})
lazy($,"w_","$get$w_",function(){return P.d6("[\\/]",!0,!1)})
lazy($,"bO","$get$bO",function(){return H.a([],[S.bC])})
lazy($,"mk","$get$mk",function(){return P.cJ(P.x,Z.iG)})
lazy($,"mG","$get$mG",function(){return P.cJ(P.C,B.hs)})
lazy($,"x7","$get$x7",function(){return H.a([],[A.a5])})
lazy($,"xi","$get$xi",function(){return H.a([],[P.x])})
lazy($,"os","$get$os",function(){return P.cJ(P.C,T.hT)})
lazy($,"cn","$get$cn",function(){return H.a([],[T.c1])})
lazy($,"bL","$get$bL",function(){return H.a([],[M.bA])})
lazy($,"aj","$get$aj",function(){return H.a([],[U.ag])})
lazy($,"xv","$get$xv",function(){return P.xb([0,new K.cK("Pixels -> Bytes",T.I6(),T.I5()),1,new K.cK("Pixels -> Packed bits",T.I4(),T.I3()),2,new K.cK("RLE 1 byte",V.tI(1),V.tH(1)),3,new K.cK("RLE 2 bytes",V.tI(2),V.tH(2)),4,new K.cK("RLE 3 bytes",V.tI(3),V.tH(3)),5,new K.cK("RLE packed 1 byte",V.tG(1),V.tF(1)),6,new K.cK("RLE packed 2 bytes",V.tG(2),V.tF(2)),7,new K.cK("RLE packed 3 bytes",V.tG(3),V.tF(3)),8,new K.cK("RLE dynamic",V.IJ(),V.II()),9,new K.cK("Exponential-Golomb pixels",F.Ik(),F.Ij()),10,new K.cK("Exponential-Golomb run RLE",F.Ii(),F.Ih()),11,new K.cK("Exponential-Golomb run/data RLE",F.Ig(),F.If())],P.C,K.cK)})
lazy($,"c","$get$c",function(){return P.a0(null,null,null,G.a1)})
lazy($,"xS","$get$xS",function(){return P.d6("[\n\r]+",!0,!1)})
lazy($,"xT","$get$xT",function(){return P.d6("( *)(.*)",!0,!1)})
lazy($,"xR","$get$xR",function(){return P.d6("^s*//",!0,!1)})
lazy($,"xQ","$get$xQ",function(){return P.d6("//",!0,!1)})
lazy($,"cN","$get$cN",function(){return new F.hE(!1,!1,"WordListFileFormat")})
lazy($,"xV","$get$xV",function(){return new T.q4(null)})
lazy($,"vW","$get$vW",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"fL","$get$fL",function(){return H.a([new N.ci("Hair","Hair Gallery","hair",null,N.It()),new N.ci("Horns","Horn Gallery","horns",null,N.Iu()),new N.ci("All Fanart","All Fanart","fanArt",null,N.Is()),new N.ci("First Player","First Player Post Great Refactoring","firstPlayer","/FanArt/FirstPlayer/",null),new N.ci("GrimDark AB FanArt","GrimDark AB Gallery","grimAB","/FanArt/ABFanArt/",null),new N.ci("star.eyes' Memes FanArt","star.eyes' memes","stareyes","/FanArt/star.eyes/",null),new N.ci("Wranglers","Wranglers","Wranglers","/FanArt/Wranglers/",null),new N.ci("Misc FanArt","Miscellaneous Art","misc","/FanArt/miscFanArt/",null),new N.ci("LOHAE FanArt","LOHAE Art","LOHAE","/FanArt/LOHAE/",null),new N.ci("WigglerSim FanArt","WigglerSim Art","WigglerSim","/FanArt/WigglerSim/",null),new N.ci("Gif FanArt","Gif Gallery","gifs","/FanArt/gifs/",null),new N.ci("Octobermas FanArt","Octobermas!","octobermas","/FanArt/OctoberMas/",null),new N.ci("ShogunSim FanArt","ShogunSim Gallery","shogunsim","/FanArt/ShogunSim/",null),new N.ci("Shogun vs JR","Shogun vs JR: <a href = 'https://drive.google.com/drive/folders/1dUSRkaW4zZD6r21gywPvR_YHcL7gvzUn?usp=sharing'>https://drive.google.com/drive/folders/1dUSRkaW4zZD6r21gywPvR_YHcL7gvzUn?usp=sharing PUT YOUR NAME IN THE FILE NAME SO WE KNOW WHO MADE IT</a>","mascotCompetition","/FanArt/MascotCompetition/",null),new N.ci("oblivionSurfer's FanArt","oblivionSurfer's FanArt Gallery","oblivionSurfer","/FanArt/oblivionSurfer/",null)],[N.ci])})
lazy($,"ys","$get$ys",function(){return H.a(["png","gif","jpg","jpeg"],[P.x])})
lazy($,"yt","$get$yt",function(){return P.d6('<a href="([^?]*?)">',!0,!1)})
lazy($,"yr","$get$yr",function(){return P.d6("\\.("+C.b.aR($.$get$ys(),"|")+")$",!0,!1)})
lazy($,"yC","$get$yC",function(){return P.d6("([a-zA-Z_]+?)(\\d+?)\\.",!0,!1)})
lazy($,"yy","$get$yy",function(){return W.IH("#images")})
lazy($,"t2","$get$t2",function(){return H.a([],[W.cb])})
lazy($,"d3","$get$d3",function(){return P.cJ(P.x,Y.dT)})
lazy($,"xe","$get$xe",function(){return P.d6("[\\/]",!0,!1)})
lazy($,"uH","$get$uH",function(){return P.cJ(P.x,W.fx)})
lazy($,"uT","$get$uT",function(){return A.h0(255,0,255,255)})
lazy($,"o4","$get$o4",function(){return new F.hE(!1,!1,"Path Utils")})
lazy($,"o3","$get$o3",function(){return P.cJ(P.eS,P.C)})
lazy($,"cL","$get$cL",function(){return H.a([],[D.cp])})
lazy($,"i1","$get$i1",function(){return P.d6("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fz","$get$fz",function(){return P.d6("\\\\(?!\\\\)",!0,!1)})
lazy($,"w5","$get$w5",function(){var t={color:16711935}
return new THREE.MeshBasicMaterial(t)})})()
var u={
createNewIsolate:function(){return $},
staticFunctionNameToClosure:function(a){var t=getGlobalFromName(a)
var s=t.$tearOff
return s()},
classIdExtractor:function(a){return a.constructor.name},
classFieldsExtractor:function(a){var t=a.constructor
var s=t.$cachedFieldNames
if(!s){var r=new t()
s=t.$cachedFieldNames=Object.keys(r)}var q=new Array(s.length)
for(var p=0;p<s.length;p++)q[p]=a[s[p]]
return q},
instanceFromClassId:function(a){var t=getGlobalFromName(a)
return new t()},
initializeEmptyInstance:function(a,b,c){var t=b.constructor
var s=Object.keys(b)
if(s.length!=c.length)throw new Error("Mismatch during deserialization.")
for(var r=0;r<c.length;r++)b[s[r]]=c[r]
return b},
mangledGlobalNames:{C:"int",W:"double",dv:"num",x:"String",cY:"bool",cV:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cY,args:[[P.p,E.iU]]},{func:1,v:true},{func:1,ret:P.dg,args:[P.bi,P.C,P.C,O.d4]},{func:1,ret:P.bi,args:[P.C,P.bi,P.bi,O.d4]},{func:1,v:true,args:[P.ad]},{func:1,ret:P.x,args:[P.C]},{func:1,ret:P.x,args:[P.x]},{func:1,ret:W.af},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.cw,args:[P.C]},{func:1,ret:W.cb,args:[P.C]},{func:1,ret:W.af,args:[P.C]},{func:1,args:[,]},{func:1,ret:P.cY,args:[W.cb,P.x,P.x,W.id]},{func:1,v:true,args:[P.ad],opt:[P.dV]},{func:1,ret:[P.ct,P.cV]},{func:1,ret:P.cY,args:[P.ad]},{func:1,ret:W.cm,args:[P.C]},{func:1,ret:W.cx,args:[P.C]},{func:1,ret:W.cy,args:[P.C]},{func:1,ret:W.fy,args:[P.C]},{func:1,ret:W.fA,args:[P.C]},{func:1,ret:W.fB,args:[P.C]},{func:1,ret:P.bW,args:[P.C]},{func:1,ret:W.bP,args:[P.C]},{func:1,ret:W.cu,args:[P.C]},{func:1,ret:P.x,args:[P.dC]},{func:1,ret:W.co,args:[P.C]},{func:1,ret:W.cq,args:[P.C]},{func:1,ret:P.aZ,args:[P.C]},{func:1,ret:P.C,args:[P.bJ,P.bJ]},{func:1,ret:W.fC,args:[P.C]},{func:1,ret:W.fa,args:[P.C]},{func:1,v:true,args:[P.x]},{func:1,v:true,args:[,P.dV]},{func:1,ret:W.ck,args:[P.C]},{func:1,ret:W.cA,args:[P.C]}],
interceptorsByTag:null,
leafTags:null};(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(convertToFastObject(n))[0]}
u.getIsolateTag=function(a){return t("___dart_"+a+u.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
u.isolateTag=o
break}}u.dispatchPropertyName=u.getIsolateTag("dispatch_record")}()
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CacheStorage:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CanvasRenderingContext2D:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,Clients:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,CredentialsContainer:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceAcceleration:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,DOMPoint:J.f,DOMPointReadOnly:J.f,EffectModel:J.f,Stream:J.f,FormData:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,Range:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,StylePropertyMap:J.f,SyncManager:J.f,TextMetrics:J.f,UnderlyingSourceBase:J.f,URLSearchParams:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPoint:J.f,SVGPreserveAspectRatio:J.f,SVGRect:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLRenderingContext:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fq,ArrayBufferView:H.eG,DataView:H.nC,Float32Array:H.nD,Float64Array:H.nE,Int16Array:H.nF,Int32Array:H.nG,Int8Array:H.nH,Uint16Array:H.nI,Uint32Array:H.nJ,Uint8ClampedArray:H.jQ,CanvasPixelArray:H.jQ,Uint8Array:H.fr,HTMLBRElement:W.aL,HTMLCanvasElement:W.aL,HTMLContentElement:W.aL,HTMLDListElement:W.aL,HTMLDataListElement:W.aL,HTMLDetailsElement:W.aL,HTMLDialogElement:W.aL,HTMLDivElement:W.aL,HTMLHRElement:W.aL,HTMLHeadElement:W.aL,HTMLHeadingElement:W.aL,HTMLHtmlElement:W.aL,HTMLLabelElement:W.aL,HTMLLegendElement:W.aL,HTMLModElement:W.aL,HTMLOptGroupElement:W.aL,HTMLParagraphElement:W.aL,HTMLPictureElement:W.aL,HTMLPreElement:W.aL,HTMLQuoteElement:W.aL,HTMLShadowElement:W.aL,HTMLTableCaptionElement:W.aL,HTMLTableCellElement:W.aL,HTMLTableDataCellElement:W.aL,HTMLTableHeaderCellElement:W.aL,HTMLTableColElement:W.aL,HTMLTitleElement:W.aL,HTMLTrackElement:W.aL,HTMLUListElement:W.aL,HTMLUnknownElement:W.aL,HTMLDirectoryElement:W.aL,HTMLFontElement:W.aL,HTMLFrameElement:W.aL,HTMLMarqueeElement:W.aL,HTMLElement:W.aL,HTMLAnchorElement:W.ek,HTMLAreaElement:W.kR,HTMLAudioElement:W.f3,AudioTrack:W.cO,AudioTrackList:W.kZ,HTMLBaseElement:W.l2,Blob:W.f5,HTMLBodyElement:W.f6,HTMLButtonElement:W.fZ,CDATASection:W.em,CharacterData:W.em,Comment:W.em,ProcessingInstruction:W.em,Text:W.em,CompositorWorker:W.lf,Credential:W.h3,FederatedCredential:W.h3,PasswordCredential:W.h3,CSSFontFaceRule:W.lm,CSSImportRule:W.ln,CSSKeyframeRule:W.h4,MozCSSKeyframeRule:W.h4,WebKitCSSKeyframeRule:W.h4,CSSKeyframesRule:W.h5,MozCSSKeyframesRule:W.h5,WebKitCSSKeyframesRule:W.h5,CSSPageRule:W.lo,CSSCharsetRule:W.bP,CSSGroupingRule:W.bP,CSSMediaRule:W.bP,CSSNamespaceRule:W.bP,CSSSupportsRule:W.bP,CSSRule:W.bP,CSSStyleDeclaration:W.f9,MSStyleCSSProperties:W.f9,CSS2Properties:W.f9,CSSStyleRule:W.lp,CSSViewportRule:W.lq,DataTransfer:W.lv,DataTransferItem:W.fa,DataTransferItemList:W.ix,Document:W.en,HTMLDocument:W.en,XMLDocument:W.en,DocumentFragment:W.iz,ShadowRoot:W.iz,DOMError:W.iA,FileError:W.iA,DOMException:W.ly,DOMRectReadOnly:W.iB,DOMStringList:W.iC,DOMStringMap:W.iD,DOMTokenList:W.iE,Element:W.cb,HTMLEmbedElement:W.lE,DirectoryEntry:W.h8,Entry:W.h8,FileEntry:W.h8,ErrorEvent:W.lK,AnimationEvent:W.U,AnimationPlayerEvent:W.U,ApplicationCacheErrorEvent:W.U,AutocompleteErrorEvent:W.U,BeforeInstallPromptEvent:W.U,BeforeUnloadEvent:W.U,BlobEvent:W.U,ClipboardEvent:W.U,CloseEvent:W.U,CompositionEvent:W.U,CustomEvent:W.U,DeviceLightEvent:W.U,DeviceMotionEvent:W.U,DeviceOrientationEvent:W.U,ExtendableEvent:W.U,ExtendableMessageEvent:W.U,FetchEvent:W.U,FocusEvent:W.U,FontFaceSetLoadEvent:W.U,GamepadEvent:W.U,GeofencingEvent:W.U,HashChangeEvent:W.U,InstallEvent:W.U,KeyboardEvent:W.U,MediaEncryptedEvent:W.U,MediaKeyMessageEvent:W.U,MediaQueryListEvent:W.U,MediaStreamEvent:W.U,MediaStreamTrackEvent:W.U,MessageEvent:W.U,MIDIConnectionEvent:W.U,MIDIMessageEvent:W.U,MouseEvent:W.U,DragEvent:W.U,NotificationEvent:W.U,PageTransitionEvent:W.U,PointerEvent:W.U,PopStateEvent:W.U,PresentationConnectionAvailableEvent:W.U,PresentationConnectionCloseEvent:W.U,ProgressEvent:W.U,PromiseRejectionEvent:W.U,PushEvent:W.U,RelatedEvent:W.U,RTCDataChannelEvent:W.U,RTCDTMFToneChangeEvent:W.U,RTCIceCandidateEvent:W.U,RTCPeerConnectionIceEvent:W.U,SecurityPolicyViolationEvent:W.U,ServicePortConnectEvent:W.U,ServiceWorkerMessageEvent:W.U,SpeechRecognitionEvent:W.U,StorageEvent:W.U,SyncEvent:W.U,TextEvent:W.U,TouchEvent:W.U,TrackEvent:W.U,TransitionEvent:W.U,WebKitTransitionEvent:W.U,UIEvent:W.U,WheelEvent:W.U,ResourceProgressEvent:W.U,USBConnectionEvent:W.U,IDBVersionChangeEvent:W.U,SVGZoomEvent:W.U,AudioProcessingEvent:W.U,OfflineAudioCompletionEvent:W.U,WebGLContextEvent:W.U,Event:W.U,InputEvent:W.U,Animation:W.aG,ApplicationCache:W.aG,DOMApplicationCache:W.aG,OfflineResourceList:W.aG,BatteryManager:W.aG,CanvasCaptureMediaStreamTrack:W.aG,CrossOriginServiceWorkerClient:W.aG,EventSource:W.aG,MediaKeySession:W.aG,MediaQueryList:W.aG,MediaRecorder:W.aG,MediaSource:W.aG,MediaStream:W.aG,MediaStreamTrack:W.aG,MessagePort:W.aG,MIDIAccess:W.aG,NetworkInformation:W.aG,Notification:W.aG,Performance:W.aG,PermissionStatus:W.aG,PresentationAvailability:W.aG,PresentationReceiver:W.aG,PresentationRequest:W.aG,RTCDTMFSender:W.aG,RTCPeerConnection:W.aG,webkitRTCPeerConnection:W.aG,mozRTCPeerConnection:W.aG,ScreenOrientation:W.aG,ServicePortCollection:W.aG,ServiceWorkerContainer:W.aG,ServiceWorkerRegistration:W.aG,SpeechRecognition:W.aG,SpeechSynthesis:W.aG,SpeechSynthesisUtterance:W.aG,WorkerPerformance:W.aG,BluetoothDevice:W.aG,BluetoothRemoteGATTCharacteristic:W.aG,USB:W.aG,EventTarget:W.aG,HTMLFieldSetElement:W.mc,File:W.ck,FileList:W.fi,FileReader:W.md,DOMFileSystem:W.me,FileWriter:W.mf,FontFace:W.mh,FontFaceSet:W.mi,HTMLFormElement:W.iT,Gamepad:W.cu,History:W.ms,HTMLOptionsCollection:W.fj,HTMLCollection:W.fj,HTMLFormControlsCollection:W.iV,XMLHttpRequest:W.e9,XMLHttpRequestUpload:W.hp,XMLHttpRequestEventTarget:W.hp,HTMLIFrameElement:W.my,ImageData:W.hq,HTMLImageElement:W.ew,HTMLInputElement:W.mF,HTMLKeygenElement:W.n2,HTMLLIElement:W.n4,CalcLength:W.hy,LengthValue:W.hy,SimpleLength:W.hy,HTMLLinkElement:W.hz,Location:W.nk,HTMLMapElement:W.np,HTMLVideoElement:W.hH,HTMLMediaElement:W.hH,MediaList:W.jN,HTMLMenuElement:W.nt,HTMLMenuItemElement:W.nu,HTMLMetaElement:W.nv,HTMLMeterElement:W.nw,MIDIOutput:W.nx,MIDIInput:W.hI,MIDIPort:W.hI,MimeType:W.cw,MimeTypeArray:W.jO,Navigator:W.nK,NavigatorUserMediaError:W.nL,Node:W.af,NodeIterator:W.jR,NodeList:W.hP,RadioNodeList:W.hP,HTMLOListElement:W.nQ,HTMLObjectElement:W.nR,HTMLOptionElement:W.nV,HTMLOutputElement:W.nX,HTMLParamElement:W.o0,Path2D:W.o2,PerformanceCompositeTiming:W.eb,PerformanceEntry:W.eb,PerformanceMark:W.eb,PerformanceMeasure:W.eb,PerformanceRenderTiming:W.eb,PerformanceResourceTiming:W.eb,Perspective:W.o7,Plugin:W.cm,PluginArray:W.jZ,PresentationConnection:W.oc,HTMLProgressElement:W.of,RTCDataChannel:W.k2,DataChannel:W.k2,RTCSessionDescription:W.k3,mozRTCSessionDescription:W.k3,HTMLScriptElement:W.fx,HTMLSelectElement:W.k4,ServicePort:W.oA,SharedWorker:W.oD,SharedWorkerGlobalScope:W.oE,HTMLSlotElement:W.oF,SourceBuffer:W.cx,SourceBufferList:W.k6,HTMLSourceElement:W.oI,HTMLSpanElement:W.hW,SpeechGrammar:W.cy,SpeechGrammarList:W.k7,SpeechRecognitionAlternative:W.fy,SpeechRecognitionError:W.oK,SpeechRecognitionResult:W.co,SpeechSynthesisEvent:W.oL,SpeechSynthesisVoice:W.oM,Storage:W.oS,HTMLStyleElement:W.pe,CSSStyleSheet:W.cq,StyleSheet:W.cq,KeywordValue:W.ef,NumberValue:W.ef,PositionValue:W.ef,TransformValue:W.ef,StyleValue:W.ef,HTMLTableElement:W.ka,HTMLTableRowElement:W.pk,HTMLTableSectionElement:W.pl,HTMLTemplateElement:W.i0,HTMLTextAreaElement:W.pp,TextTrack:W.cW,TextTrackCue:W.cM,VTTCue:W.cM,TextTrackCueList:W.ps,TextTrackList:W.pt,TimeRanges:W.px,Touch:W.cA,TouchList:W.kb,TrackDefault:W.fA,TrackDefaultList:W.kc,Matrix:W.eg,Rotation:W.eg,Skew:W.eg,Translation:W.eg,TransformComponent:W.eg,TreeWalker:W.kd,URL:W.pN,VideoTrackList:W.pR,VTTRegion:W.fB,VTTRegionList:W.ke,WebSocket:W.pW,Window:W.kh,DOMWindow:W.kh,Worker:W.q2,CompositorWorkerGlobalScope:W.eU,DedicatedWorkerGlobalScope:W.eU,ServiceWorkerGlobalScope:W.eU,WorkerGlobalScope:W.eU,Attr:W.fC,ClientRect:W.qk,ClientRectList:W.i7,DOMRectList:W.i7,CSSRuleList:W.kn,DocumentType:W.qt,DOMRect:W.qu,GamepadList:W.ks,HTMLFrameSetElement:W.qP,NamedNodeMap:W.ih,MozNamedAttrMap:W.ih,ServiceWorker:W.re,SpeechRecognitionResultList:W.kv,StyleSheetList:W.kx,WorkerLocation:W.rA,WorkerNavigator:W.rB,IDBDatabase:P.lw,IDBIndex:P.mC,IDBObjectStore:P.nS,IDBOpenDBRequest:P.hS,IDBVersionChangeRequest:P.hS,IDBRequest:P.hS,IDBTransaction:P.pB,SVGAElement:P.kO,SVGAnimateElement:P.el,SVGAnimateMotionElement:P.el,SVGAnimateTransformElement:P.el,SVGAnimationElement:P.el,SVGSetElement:P.el,SVGFEBlendElement:P.lN,SVGFEColorMatrixElement:P.lO,SVGFEComponentTransferElement:P.lP,SVGFECompositeElement:P.lQ,SVGFEConvolveMatrixElement:P.lR,SVGFEDiffuseLightingElement:P.lS,SVGFEDisplacementMapElement:P.lT,SVGFEFloodElement:P.lU,SVGFEGaussianBlurElement:P.lV,SVGFEImageElement:P.lW,SVGFEMergeElement:P.lX,SVGFEMorphologyElement:P.lY,SVGFEOffsetElement:P.lZ,SVGFESpecularLightingElement:P.m_,SVGFETileElement:P.m0,SVGFETurbulenceElement:P.m1,SVGFilterElement:P.mg,SVGCircleElement:P.cv,SVGClipPathElement:P.cv,SVGDefsElement:P.cv,SVGEllipseElement:P.cv,SVGForeignObjectElement:P.cv,SVGGElement:P.cv,SVGGeometryElement:P.cv,SVGLineElement:P.cv,SVGPathElement:P.cv,SVGPolygonElement:P.cv,SVGPolylineElement:P.cv,SVGRectElement:P.cv,SVGSwitchElement:P.cv,SVGGraphicsElement:P.cv,SVGImageElement:P.mz,SVGLength:P.da,SVGLengthList:P.n6,SVGMarkerElement:P.nr,SVGMaskElement:P.ns,SVGNumber:P.dc,SVGNumberList:P.nO,SVGPatternElement:P.o5,SVGPointList:P.oa,SVGScriptElement:P.hU,SVGStringList:P.pc,SVGStyleElement:P.pf,SVGDescElement:P.c8,SVGDiscardElement:P.c8,SVGFEDistantLightElement:P.c8,SVGFEFuncAElement:P.c8,SVGFEFuncBElement:P.c8,SVGFEFuncGElement:P.c8,SVGFEFuncRElement:P.c8,SVGFEMergeNodeElement:P.c8,SVGFEPointLightElement:P.c8,SVGFESpotLightElement:P.c8,SVGMetadataElement:P.c8,SVGStopElement:P.c8,SVGTitleElement:P.c8,SVGComponentTransferFunctionElement:P.c8,SVGElement:P.c8,SVGSVGElement:P.ph,SVGSymbolElement:P.pj,SVGTSpanElement:P.eO,SVGTextElement:P.eO,SVGTextPositioningElement:P.eO,SVGTextContentElement:P.eO,SVGTextPathElement:P.pr,SVGTransform:P.df,SVGTransformList:P.pC,SVGUseElement:P.pO,SVGViewElement:P.pS,SVGViewSpec:P.pT,SVGLinearGradientElement:P.ic,SVGRadialGradientElement:P.ic,SVGGradientElement:P.ic,SVGCursorElement:P.ra,SVGFEDropShadowElement:P.rb,SVGMPathElement:P.rc,AudioBuffer:P.fT,AudioBufferSourceNode:P.f2,AudioContext:P.fU,webkitAudioContext:P.fU,OfflineAudioContext:P.fU,AnalyserNode:P.bI,RealtimeAnalyserNode:P.bI,AudioDestinationNode:P.bI,ChannelMergerNode:P.bI,AudioChannelMerger:P.bI,ChannelSplitterNode:P.bI,AudioChannelSplitter:P.bI,DelayNode:P.bI,DynamicsCompressorNode:P.bI,GainNode:P.bI,AudioGainNode:P.bI,IIRFilterNode:P.bI,MediaStreamAudioDestinationNode:P.bI,PannerNode:P.bI,AudioPannerNode:P.bI,webkitAudioPannerNode:P.bI,ScriptProcessorNode:P.bI,JavaScriptAudioNode:P.bI,StereoPannerNode:P.bI,WaveShaperNode:P.bI,AudioNode:P.bI,MediaElementAudioSourceNode:P.f4,MediaStreamAudioSourceNode:P.f4,AudioSourceNode:P.f4,BiquadFilterNode:P.l4,ConvolverNode:P.lj,OscillatorNode:P.jW,Oscillator:P.jW,WebGLActiveInfo:P.kQ,WebGL2RenderingContext:P.oo,WebGL2RenderingContextBase:P.rz,SQLResultSetRowList:P.k8})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,HTMLProgressElement:true,RTCDataChannel:true,DataChannel:true,RTCSessionDescription:true,mozRTCSessionDescription:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSourceElement:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,HTMLStyleElement:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,TreeWalker:true,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,AudioSourceNode:false,BiquadFilterNode:true,ConvolverNode:true,OscillatorNode:true,Oscillator:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jP.$nativeSuperclassTag="ArrayBufferView"
H.hL.$nativeSuperclassTag="ArrayBufferView"
H.hN.$nativeSuperclassTag="ArrayBufferView"
H.hJ.$nativeSuperclassTag="ArrayBufferView"
H.hM.$nativeSuperclassTag="ArrayBufferView"
H.hO.$nativeSuperclassTag="ArrayBufferView"
H.hK.$nativeSuperclassTag="ArrayBufferView"
W.h9.$nativeSuperclassTag="EventTarget"
W.hc.$nativeSuperclassTag="EventTarget"
W.ha.$nativeSuperclassTag="EventTarget"
W.hd.$nativeSuperclassTag="EventTarget"
W.hb.$nativeSuperclassTag="EventTarget"
W.he.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.yH(N.yz(),b)},[])
else (function(b){H.yH(N.yz(),b)})([])})})()
//# sourceMappingURL=image_browser.dart.js.map
