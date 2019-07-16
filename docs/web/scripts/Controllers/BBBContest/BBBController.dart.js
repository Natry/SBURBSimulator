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
a[c]=function(){a[c]=function(){H.Ja(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.w4"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.w4"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.w4(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={v5:function v5(a){this.a=a},
tA:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
pF:function(a,b,c,d){var t=new H.pE(a,b,c,[d])
t.fn(a,b,c,d)
return t},
dD:function(a,b,c,d){if(!!J.aj(a).$ist)return new H.hg(a,b,[c,d])
return new H.hQ(a,b,[c,d])},
p2:function(a,b,c){if(!!J.aj(a).$ist)return new H.iK(a,H.tg(b),[c])
return new H.i2(a,H.tg(b),[c])},
tg:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.dP(a,"count","is not an integer"))
if(a<0)H.aM(P.bz(a,0,null,"count",null))
return a},
hG:function(){return new P.dd("No element")},
Gd:function(){return new P.dd("Too many elements")},
xH:function(){return new P.dd("Too few elements")},
kb:function(a,b,c,d){if(c-b<=32)H.Hx(a,b,c,d)
else H.Hw(a,b,c,d)},
Hx:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.aY(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cz(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
Hw:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.ar(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.ar(a3+a4,2)
p=q-t
o=q+t
n=J.aY(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.cz(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cz(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cz(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cz(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cz(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cz(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cz(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cz(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cz(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.n(a2,a3))
n.i(a2,o,n.n(a2,a4))
g=a3+1
f=a4-1
if(J.b0(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.aj(c)
if(b.S(c,0))continue
if(b.a3(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.du(c)
if(b.aG(c,0)){--f
continue}else{a=f-1
if(b.a3(c,0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.dO(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cz(a5.$2(d,j),0))for(;!0;)if(J.cz(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.dO(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.kb(a2,a3,g-2,a5)
H.kb(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.b0(a5.$2(n.n(a2,g),l),0);)++g
for(;J.b0(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.b0(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.b0(a5.$2(d,j),0))for(;!0;)if(J.b0(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.dO(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.kb(a2,g,f,a5)}else H.kb(a2,g,f,a5)},
lo:function lo(a){this.a=a},
t:function t(){},
dW:function dW(){},
pE:function pE(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eG:function eG(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hQ:function hQ(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hg:function hg(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jS:function jS(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eI:function eI(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
dh:function dh(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
kp:function kp(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
i2:function i2(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iK:function iK(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
p3:function p3(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iW:function iW(){},
q5:function q5(){},
ia:function ia(){},
kM:function(a,b){var t=a.bE(b)
if(!u.globalState.d.cy)u.globalState.f.bP()
return t},
zb:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aj(s).$isp)throw H.j(P.dk("Arguments to main must be a List: "+H.x(s)))
u.globalState=new H.rv(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$x2()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qY(P.va(null,H.f0),0)
r=P.D
s.z=new H.w(0,null,null,null,null,null,0,[r,H.fO])
s.ch=new H.w(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.ru()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.Bb,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.HW)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a1(null,null,null,r)
p=new H.fE(0,null,!1)
o=new H.fO(s,new H.w(0,null,null,null,null,null,0,[r,H.fE]),q,u.createNewIsolate(),p,new H.dQ(H.tP()),new H.dQ(H.tP()),!1,!1,[],P.a1(null,null,null,null),null,null,!1,!0,P.a1(null,null,null,null))
q.h(0,0)
o.dC(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fU(a,{func:1,args:[,]}))o.bE(new H.tQ(t,a))
else if(H.fU(a,{func:1,args:[,,]}))o.bE(new H.tR(t,a))
else o.bE(a)
u.globalState.f.bP()},
HW:function(a){var t=P.hL(["command","print","msg",a])
return new H.dM(!0,P.ik(null,P.D)).aH(t)},
Bd:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.Be()
return},
Be:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.j(new P.S("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.j(new P.S('Cannot extract URI from "'+t+'"'))},
Bb:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eY(!0,[]).b8(b.data)
s=J.aY(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eY(!0,[]).b8(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eY(!0,[]).b8(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.D
j=P.a1(null,null,null,k)
i=new H.fE(0,null,!1)
h=new H.fO(s,new H.w(0,null,null,null,null,null,0,[k,H.fE]),j,u.createNewIsolate(),i,new H.dQ(H.tP()),new H.dQ(H.tP()),!1,!1,[],P.a1(null,null,null,null),null,null,!1,!0,P.a1(null,null,null,null))
j.h(0,0)
h.dC(0,i)
u.globalState.f.a.aS(0,new H.f0(h,new H.mY(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bP()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fY(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bP()
break
case"close":u.globalState.ch.as(0,$.$get$x3().n(0,a))
a.terminate()
u.globalState.f.bP()
break
case"log":H.Ba(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hL(["command","print","msg",t])
k=new H.dM(!0,P.ik(null,P.D)).aH(k)
s.toString
self.postMessage(k)}else P.f2(s.n(t,"msg"))
break
case"error":throw H.j(s.n(t,"msg"))}},
Ba:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hL(["command","log","msg",a])
r=new H.dM(!0,P.ik(null,P.D)).aH(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.bH(q)
t=H.co(q)
s=P.m_(t)
throw H.j(s)}},
Bc:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.xV=$.xV+("_"+s)
$.xW=$.xW+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fY(f,["spawned",new H.fP(s,r),q,t.r])
r=new H.mZ(a,b,c,d,t)
if(e===!0){t.ef(q,q)
u.globalState.f.a.aS(0,new H.f0(t,r,"start isolate"))}else r.$0()},
HE:function(a,b){var t=new H.pX(!0,!1,null)
t.fo(a,b)
return t},
Id:function(a){return new H.eY(!0,[]).b8(new H.dM(!1,P.ik(null,P.D)).aH(a))},
tQ:function tQ(a,b){this.a=a
this.b=b},
tR:function tR(a,b){this.a=a
this.b=b},
rv:function rv(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
fO:function fO(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
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
rl:function rl(a,b){this.a=a
this.b=b},
qY:function qY(a,b){this.a=a
this.b=b},
qZ:function qZ(a){this.a=a},
f0:function f0(a,b,c){this.a=a
this.b=b
this.c=c},
ru:function ru(){},
mY:function mY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mZ:function mZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qI:function qI(){},
fP:function fP(b,a){this.b=b
this.a=a},
rx:function rx(a,b){this.a=a
this.b=b},
ip:function ip(b,c,a){this.b=b
this.c=c
this.a=a},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
pX:function pX(a,b,c){this.a=a
this.b=b
this.c=c},
pY:function pY(a,b){this.a=a
this.b=b},
pZ:function pZ(a,b){this.a=a
this.b=b},
dQ:function dQ(a){this.a=a},
dM:function dM(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.a=a
this.b=b},
Ae:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=a.gae(a)
s=P.d0(t,!0,H.ag(t,"n",0))
t=s.length
q=0
while(!0){p=s.length
if(!(q<p)){r=!0
break}o=s[q]
if(typeof o!=="string"){r=!1
break}p===t||(0,H.bP)(s);++q}if(r){n={}
for(m=!1,l=null,k=0,q=0;q<s.length;s.length===p||(0,H.bP)(s),++q){o=s[q]
j=a.n(0,o)
if(!J.b0(o,"__proto__")){if(!n.hasOwnProperty(o))++k
n[o]=j}else{l=j
m=!0}}if(m)return new H.lt(l,k+1,n,s,[b,c])
return new H.ha(k,n,s,[b,c])}return new H.ls(P.Gf(a,null,null),[b,c])},
Af:function(){throw H.j(new P.S("Cannot modify unmodifiable Map"))},
IP:function(a){return u.types[a]},
z6:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aj(a).$isaH},
x:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cA(a)
if(typeof t!=="string")throw H.j(H.bh(a))
return t},
H6:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.oJ(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eL:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
vt:function(a,b){if(b==null)throw H.j(new P.bK(a,null,null))
return b.$1(a)},
fB:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.vt(a,c)
if(3>=t.length)return H.u(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.vt(a,c)}if(b<2||b>36)throw H.j(P.bz(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a8(q,o)|32)>r)return H.vt(a,c)}return parseInt(a,b)},
xT:function(a,b){return b.$1(a)},
xX:function(a,b){var t,s
H.IA(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.xT(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.tX(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.xT(a,b)}return t},
oy:function(a){var t,s,r,q,p,o,n,m
t=J.aj(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.T||!!J.aj(a).$iseU){p=C.z(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a8(q,0)===36)q=C.c.ah(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.tK(H.kQ(a),0,null),u.mangledGlobalNames)},
ox:function(a){return"Instance of '"+H.oy(a)+"'"},
GD:function(){if(!!self.location)return self.location.href
return},
xS:function(a){var t,s,r,q,p
t=J.c9(a)
if(typeof t!=="number")return t.eY()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
GI:function(a){var t,s,r,q
t=H.a([],[P.D])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bP)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.j(H.bh(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.b6(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.j(H.bh(q))}return H.xS(t)},
xZ:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bP)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.j(H.bh(q))
if(q<0)throw H.j(H.bh(q))
if(q>65535)return H.GI(a)}return H.xS(a)},
GJ:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.eY()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
fC:function(a){var t
if(typeof a!=="number")return H.a7(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.b6(t,10))>>>0,56320|t&1023)}}throw H.j(P.bz(a,0,1114111,null,null))},
d3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
xU:function(a){return a.b?H.d3(a).getUTCFullYear()+0:H.d3(a).getFullYear()+0},
vv:function(a){return a.b?H.d3(a).getUTCMonth()+1:H.d3(a).getMonth()+1},
vu:function(a){return a.b?H.d3(a).getUTCDate()+0:H.d3(a).getDate()+0},
GE:function(a){return a.b?H.d3(a).getUTCHours()+0:H.d3(a).getHours()+0},
GG:function(a){return a.b?H.d3(a).getUTCMinutes()+0:H.d3(a).getMinutes()+0},
GH:function(a){return a.b?H.d3(a).getUTCSeconds()+0:H.d3(a).getSeconds()+0},
GF:function(a){return a.b?H.d3(a).getUTCMilliseconds()+0:H.d3(a).getMilliseconds()+0},
vw:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.j(H.bh(a))
return a[b]},
xY:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.j(H.bh(a))
a[b]=c},
a7:function(a){throw H.j(H.bh(a))},
u:function(a,b){if(a==null)J.c9(a)
throw H.j(H.c8(a,b))},
c8:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cY(!0,b,"index",null)
t=J.c9(a)
if(!(b<0)){if(typeof t!=="number")return H.a7(t)
s=b>=t}else s=!0
if(s)return P.bB(b,a,"index",null,t)
return P.k8(b,"index",null)},
IG:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cY(!0,a,"start",null)
if(a<0||a>c)return new P.eM(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cY(!0,b,"end",null)
if(b<a||b>c)return new P.eM(a,c,!0,b,"end","Invalid value")}return new P.cY(!0,b,"end",null)},
bh:function(a){return new P.cY(!0,a,null,null)},
kO:function(a){if(typeof a!=="number")throw H.j(H.bh(a))
return a},
w3:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(H.bh(a))
return a},
IA:function(a){if(typeof a!=="string")throw H.j(H.bh(a))
return a},
j:function(a){var t
if(a==null)a=new P.fy()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.zd})
t.name=""}else t.toString=H.zd
return t},
zd:function(){return J.cA(this.dartException)},
aM:function(a){throw H.j(a)},
bP:function(a){throw H.j(new P.bJ(a))},
e1:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.q2(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
q3:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
yd:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
v7:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.nh(a,s,t?null:b.receiver)},
bH:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.tS(a)
if(a==null)return
if(a instanceof H.hp)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.b6(r,16)&8191)===10)switch(q){case 438:return t.$1(H.v7(H.x(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return t.$1(new H.k0(p,null))}}if(a instanceof TypeError){o=$.$get$y7()
n=$.$get$y8()
m=$.$get$y9()
l=$.$get$ya()
k=$.$get$ye()
j=$.$get$yf()
i=$.$get$yc()
$.$get$yb()
h=$.$get$yh()
g=$.$get$yg()
f=o.aO(s)
if(f!=null)return t.$1(H.v7(s,f))
else{f=n.aO(s)
if(f!=null){f.method="call"
return t.$1(H.v7(s,f))}else{f=m.aO(s)
if(f==null){f=l.aO(s)
if(f==null){f=k.aO(s)
if(f==null){f=j.aO(s)
if(f==null){f=i.aO(s)
if(f==null){f=l.aO(s)
if(f==null){f=h.aO(s)
if(f==null){f=g.aO(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.k0(s,f==null?null:f.method))}}return t.$1(new H.q4(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.kf()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cY(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.kf()
return a},
co:function(a){var t
if(a instanceof H.hp)return a.b
if(a==null)return new H.kH(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kH(a,null)},
J0:function(a){if(a==null||typeof a!='object')return J.cX(a)
else return H.eL(a)},
z2:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
IW:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kM(b,new H.tF(a))
case 1:return H.kM(b,new H.tG(a,d))
case 2:return H.kM(b,new H.tH(a,d,e))
case 3:return H.kM(b,new H.tI(a,d,e,f))
case 4:return H.kM(b,new H.tJ(a,d,e,f,g))}throw H.j(P.m_("Unsupported number of arguments for wrapped closure"))},
dt:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.IW)
a.$identity=t
return t},
Aa:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aj(c).$isp){t.$reflectionInfo=c
r=H.H6(t).r}else r=c
q=d?Object.create(new H.pc().constructor.prototype):Object.create(new H.h4(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dR
$.dR=J.e5(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.wy(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.IP,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.wv:H.u0
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.j("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.wy(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
A7:function(a,b,c,d){var t=H.u0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
wy:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.A9(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.A7(s,!q,t,b)
if(s===0){q=$.dR
$.dR=J.e5(q,1)
o="self"+H.x(q)
q="return function(){var "+o+" = this."
p=$.h5
if(p==null){p=H.lf("self")
$.h5=p}return new Function(q+H.x(p)+";return "+o+"."+H.x(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dR
$.dR=J.e5(q,1)
n+=H.x(q)
q="return function("+n+"){return this."
p=$.h5
if(p==null){p=H.lf("self")
$.h5=p}return new Function(q+H.x(p)+"."+H.x(t)+"("+n+");}")()},
A8:function(a,b,c,d){var t,s
t=H.u0
s=H.wv
switch(b?-1:a){case 0:throw H.j(new H.oQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
A9:function(a,b){var t,s,r,q,p,o,n,m
t=H.A6()
s=$.wu
if(s==null){s=H.lf("receiver")
$.wu=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.A8(q,!o,r,b)
if(q===1){s="return function(){return this."+H.x(t)+"."+H.x(r)+"(this."+H.x(s)+");"
o=$.dR
$.dR=J.e5(o,1)
return new Function(s+H.x(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.x(t)+"."+H.x(r)+"(this."+H.x(s)+", "+m+");"
o=$.dR
$.dR=J.e5(o,1)
return new Function(s+H.x(o)+"}")()},
w4:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aj(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.Aa(a,b,t,!!d,e,f)},
u0:function(a){return a.a},
wv:function(a){return a.c},
A6:function(){var t=$.h5
if(t==null){t=H.lf("self")
$.h5=t}return t},
lf:function(a){var t,s,r,q,p
t=new H.h4("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
J2:function(a,b){var t=J.aY(b)
throw H.j(H.wx(H.oy(a),t.H(b,3,t.gm(b))))},
kS:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aj(a)[b]
else t=!0
if(t)return a
H.J2(a,b)},
z1:function(a){var t=J.aj(a)
return"$S" in t?t.$S():null},
fU:function(a,b){var t
if(a==null)return!1
t=H.z1(a)
return t==null?!1:H.w8(t,b)},
wx:function(a,b){return new H.lm("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Ja:function(a){throw H.j(new P.lH(a))},
tP:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
z3:function(a){return u.getIsolateTag(a)},
c1:function(a){return new H.e2(a,null)},
a:function(a,b){a.$ti=b
return a},
kQ:function(a){if(a==null)return
return a.$ti},
z5:function(a,b){return H.wb(a["$as"+H.x(b)],H.kQ(a))},
ag:function(a,b,c){var t=H.z5(a,b)
return t==null?null:t[c]},
N:function(a,b){var t=H.kQ(a)
return t==null?null:t[b]},
dN:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.tK(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.x(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dN(t,b)
return H.Ij(a,b)}return"unknown-reified-type"},
Ij:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dN(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dN(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dN(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.IO(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dN(l[j],b)+(" "+H.x(j))}q+="}"}return"("+q+") => "+t},
tK:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.c6("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.L=p+", "
o=a[s]
if(o!=null)q=!1
p=t.L+=H.dN(o,c)}return q?"":"<"+t.w(0)+">"},
kR:function(a){var t,s
if(a instanceof H.fa){t=H.z1(a)
if(t!=null)return H.dN(t,null)}s=J.aj(a).constructor.builtin$cls
if(a==null)return s
return s+H.tK(a.$ti,0,null)},
wb:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
e4:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kQ(a)
s=J.aj(a)
if(s[b]==null)return!1
return H.yY(H.wb(s[d],t),c)},
J9:function(a,b,c,d){if(a==null)return a
if(H.e4(a,b,c,d))return a
throw H.j(H.wx(H.oy(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.tK(c,0,null),u.mangledGlobalNames)))},
yY:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d7(a[s],b[s]))return!1
return!0},
eo:function(a,b,c){return a.apply(b,H.z5(b,c))},
IB:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="A"||b.builtin$cls==="da"
if(b==null)return!0
t=H.kQ(a)
a=J.aj(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.w8(r.apply(a,null),b)}return H.d7(s,b)},
d7:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="da")return!0
if('func' in b)return H.w8(a,b)
if('func' in a)return b.builtin$cls==="Jg"||b.builtin$cls==="A"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dN(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.yY(H.wb(o,t),r)},
yX:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.d7(t,p)||H.d7(p,t)))return!1}return!0},
Ir:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.d7(p,o)||H.d7(o,p)))return!1}return!0},
w8:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.d7(t,s)||H.d7(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.yX(r,q,!1))return!1
if(!H.yX(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d7(i,h)||H.d7(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d7(i,h)||H.d7(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d7(i,h)||H.d7(h,i)))return!1}}return H.Ir(a.named,b.named)},
Jr:function(a){var t=$.w6
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
Jq:function(a){return H.eL(a)},
Jp:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
IX:function(a){var t,s,r,q,p,o
t=$.w6.$1(a)
s=$.tw[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.tE[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.yW.$2(a,t)
if(t!=null){s=$.tw[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.tE[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.w9(r)
$.tw[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.tE[t]=r
return r}if(p==="-"){o=H.w9(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.z7(a,r)
if(p==="*")throw H.j(new P.eT(t))
if(u.leafTags[t]===true){o=H.w9(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.z7(a,r)},
z7:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.tL(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
w9:function(a){return J.tL(a,!1,null,!!a.$isaH)},
IZ:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.tL(t,!1,null,!!t.$isaH)
else return J.tL(t,c,null,null)},
IU:function(){if(!0===$.w7)return
$.w7=!0
H.IV()},
IV:function(){var t,s,r,q,p,o,n,m
$.tw=Object.create(null)
$.tE=Object.create(null)
H.IT()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.z8.$1(p)
if(o!=null){n=H.IZ(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
IT:function(){var t,s,r,q,p,o,n
t=C.U()
t=H.fT(C.V,H.fT(C.W,H.fT(C.y,H.fT(C.y,H.fT(C.Y,H.fT(C.X,H.fT(C.Z(C.z),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.w6=new H.tB(p)
$.yW=new H.tC(o)
$.z8=new H.tD(n)},
fT:function(a,b){return a(b)||b},
v2:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.j(new P.bK("Illegal RegExp pattern ("+String(q)+")",a,null))},
J7:function(a,b,c){var t
if(typeof b==="string")return a.indexOf(b,c)>=0
else{t=J.aj(b)
if(!!t.$isfv){t=C.c.ah(a,c)
return b.b.test(t)}else{t=t.aV(b,C.c.ah(a,c))
return!t.gV(t)}}},
zc:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.fv){q=b.gdY()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.aM(H.bh(b))
throw H.j("String.replaceAll(Pattern) UNIMPLEMENTED")}},
Ip:function(a){return a},
J8:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.aV(0,a),t=new H.ku(t.a,t.b,t.c,null),s=0,r="";t.F();){q=t.d
p=q.b
o=p.index
r=r+H.x(H.yN().$1(C.c.H(a,s,o)))+H.x(c.$1(q))
s=o+p[0].length}t=r+H.x(H.yN().$1(C.c.ah(a,s)))
return t.charCodeAt(0)==0?t:t},
ls:function ls(a,$ti){this.a=a
this.$ti=$ti},
lr:function lr(){},
ha:function ha(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
lt:function lt(d,a,b,c,$ti){var _=this
_.d=d
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qM:function qM(a,$ti){this.a=a
this.$ti=$ti},
oJ:function oJ(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
q2:function q2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k0:function k0(a,b){this.a=a
this.b=b},
nh:function nh(a,b,c){this.a=a
this.b=b
this.c=c},
q4:function q4(a){this.a=a},
hp:function hp(a,b){this.a=a
this.b=b},
tS:function tS(a){this.a=a},
kH:function kH(a,b){this.a=a
this.b=b},
tF:function tF(a){this.a=a},
tG:function tG(a,b){this.a=a
this.b=b},
tH:function tH(a,b,c){this.a=a
this.b=b
this.c=c},
tI:function tI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tJ:function tJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fa:function fa(){},
pL:function pL(){},
pc:function pc(){},
h4:function h4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lm:function lm(a){this.a=a},
oQ:function oQ(a){this.a=a},
e2:function e2(a,b){this.a=a
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
ng:function ng(a){this.a=a},
nf:function nf(a){this.a=a},
nu:function nu(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
nv:function nv(a,$ti){this.a=a
this.$ti=$ti},
nw:function nw(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
tB:function tB(a){this.a=a},
tC:function tC(a){this.a=a},
tD:function tD(a){this.a=a},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kF:function kF(a,b){this.a=a
this.b=b},
qC:function qC(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
rS:function rS(a,b,c){this.a=a
this.b=b
this.c=c},
rT:function rT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cE:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.dk("Invalid length "+H.x(a)))
return a},
yJ:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dk("Invalid view offsetInBytes "+H.x(b)))
if(c!=null&&(typeof c!=="number"||Math.floor(c)!==c))throw H.j(P.dk("Invalid view length "+H.x(c)))},
yM:function(a){return a},
GB:function(a){return new Int8Array(H.yM(a))},
cT:function(a,b,c){H.yJ(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
Ic:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aG()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.j(H.IG(a,b,c))
return b},
fw:function fw(){},
eK:function eK(){},
nV:function nV(){},
jW:function jW(){},
hT:function hT(){},
hV:function hV(){},
hX:function hX(){},
hU:function hU(){},
hW:function hW(){},
hY:function hY(){},
nW:function nW(){},
nX:function nX(){},
nY:function nY(){},
nZ:function nZ(){},
o_:function o_(){},
o0:function o0(){},
o1:function o1(){},
jX:function jX(){},
fx:function fx(){},
IO:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
wa:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aj:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jO.prototype
return J.jN.prototype}if(typeof a=="string")return J.eE.prototype
if(a==null)return J.nd.prototype
if(typeof a=="boolean")return J.nc.prototype
if(a.constructor==Array)return J.eD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eF.prototype
return a}if(a instanceof P.A)return a
return J.ty(a)},
tL:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ty:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.w7==null){H.IU()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.j(new P.eT("Return interceptor for "+H.x(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$v6()]
if(p!=null)return p
p=H.IX(a)
if(p!=null)return p
if(typeof a=="function")return C.a_
s=Object.getPrototypeOf(a)
if(s==null)return C.L
if(s===Object.prototype)return C.L
if(typeof q=="function"){Object.defineProperty(q,$.$get$v6(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
xI:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Ge:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a8(a,b)
if(s!==32&&s!==13&&!J.xI(s))break;++b}return b},
v1:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.a_(a,t)
if(s!==32&&s!==13&&!J.xI(s))break}return b},
aY:function(a){if(typeof a=="string")return J.eE.prototype
if(a==null)return a
if(a.constructor==Array)return J.eD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eF.prototype
return a}if(a instanceof P.A)return a
return J.ty(a)},
d6:function(a){if(a==null)return a
if(a.constructor==Array)return J.eD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eF.prototype
return a}if(a instanceof P.A)return a
return J.ty(a)},
du:function(a){if(typeof a=="number")return J.fu.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.eU.prototype
return a},
kP:function(a){if(typeof a=="number")return J.fu.prototype
if(typeof a=="string")return J.eE.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.eU.prototype
return a},
cW:function(a){if(typeof a=="string")return J.eE.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.eU.prototype
return a},
aP:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.eF.prototype
return a}if(a instanceof P.A)return a
return J.ty(a)},
e5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kP(a).R(a,b)},
b0:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aj(a).S(a,b)},
wd:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.du(a).aA(a,b)},
cz:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.du(a).aG(a,b)},
dO:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.du(a).a3(a,b)},
we:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kP(a).al(a,b)},
d8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.z6(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aY(a).n(a,b)},
it:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.z6(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.d6(a).i(a,b,c)},
ze:function(a,b){return J.d6(a).h(a,b)},
zf:function(a,b,c,d){return J.aP(a).ee(a,b,c,d)},
zg:function(a,b){return J.cW(a).aV(a,b)},
e6:function(a,b){return J.aP(a).ho(a,b)},
wf:function(a){return J.aP(a).hq(a)},
zh:function(a,b,c){return J.du(a).ai(a,b,c)},
zi:function(a,b){return J.kP(a).aI(a,b)},
zj:function(a,b){return J.aP(a).aJ(a,b)},
tT:function(a,b){return J.aY(a).Z(a,b)},
kU:function(a,b,c){return J.aY(a).el(a,b,c)},
zk:function(a,b){return J.aP(a).hD(a,b)},
zl:function(a,b,c){return J.aP(a).hM(a,b,c)},
wg:function(a,b){return J.d6(a).W(a,b)},
zm:function(a,b,c,d){return J.d6(a).bH(a,b,c,d)},
kV:function(a){return J.du(a).ap(a)},
wh:function(a,b){return J.d6(a).a1(a,b)},
wi:function(a){return J.aP(a).geh(a)},
wj:function(a){return J.aP(a).gej(a)},
zn:function(a){return J.aP(a).gbD(a)},
fV:function(a){return J.aP(a).gav(a)},
zo:function(a){return J.aP(a).gcX(a)},
cX:function(a){return J.aj(a).ga4(a)},
kW:function(a){return J.aY(a).gV(a)},
tU:function(a){return J.aY(a).gak(a)},
tV:function(a){return J.aP(a).ga0(a)},
cF:function(a){return J.d6(a).gX(a)},
fW:function(a){return J.aP(a).gae(a)},
c9:function(a){return J.aY(a).gm(a)},
zp:function(a){return J.aP(a).gG(a)},
zq:function(a){return J.aP(a).gij(a)},
zr:function(a){return J.aP(a).gd5(a)},
zs:function(a){return J.aP(a).giB(a)},
zt:function(a){return J.aP(a).giC(a)},
wk:function(a){return J.aj(a).gaf(a)},
tW:function(a){return J.aP(a).gaR(a)},
zu:function(a){return J.aP(a).giF(a)},
zv:function(a){return J.aP(a).gde(a)},
zw:function(a){return J.aP(a).dj(a)},
zx:function(a,b){return J.aP(a).bT(a,b)},
zy:function(a,b){return J.aY(a).br(a,b)},
wl:function(a,b,c,d,e){return J.aP(a).ex(a,b,c,d,e)},
wm:function(a,b){return J.d6(a).aF(a,b)},
zz:function(a,b,c){return J.cW(a).eB(a,b,c)},
wn:function(a,b){return J.aP(a).io(a,b)},
zA:function(a){return J.d6(a).ix(a)},
zB:function(a,b,c,d){return J.aP(a).eG(a,b,c,d)},
fX:function(a,b,c){return J.cW(a).da(a,b,c)},
zC:function(a,b,c){return J.cW(a).iA(a,b,c)},
fY:function(a,b){return J.aP(a).bf(a,b)},
wo:function(a,b){return J.aP(a).sbD(a,b)},
zD:function(a,b){return J.aP(a).sa9(a,b)},
zE:function(a,b){return J.d6(a).aD(a,b)},
e7:function(a,b){return J.cW(a).fa(a,b)},
zF:function(a,b){return J.cW(a).ah(a,b)},
zG:function(a,b,c){return J.cW(a).H(a,b,c)},
wp:function(a){return J.du(a).l(a)},
zH:function(a){return J.d6(a).at(a)},
zI:function(a){return J.cW(a).iH(a)},
zJ:function(a,b){return J.du(a).bQ(a,b)},
cA:function(a){return J.aj(a).w(a)},
zK:function(a){return J.cW(a).iI(a)},
tX:function(a){return J.cW(a).bv(a)},
zL:function(a){return J.cW(a).eO(a)},
wq:function(a,b){return J.d6(a).aw(a,b)},
f:function f(){},
nc:function nc(){},
nd:function nd(){},
hH:function hH(){},
oq:function oq(){},
eU:function eU(){},
eF:function eF(){},
eD:function eD($ti){this.$ti=$ti},
v4:function v4($ti){this.$ti=$ti},
f4:function f4(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fu:function fu(){},
jO:function jO(){},
jN:function jN(){},
eE:function eE(){}},P={
HJ:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.Is()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dt(new P.qE(t),1)).observe(s,{childList:true})
return new P.qD(t,s,r)}else if(self.setImmediate!=null)return P.It()
return P.Iu()},
HK:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dt(new P.qF(a),0))},
HL:function(a){++u.globalState.f.b
self.setImmediate(H.dt(new P.qG(a),0))},
HM:function(a){P.vN(C.q,a)},
bq:function(a,b){P.yH(null,a)
return b.ghW()},
c7:function(a,b){P.yH(a,b)},
bp:function(a,b){J.zj(b,a)},
bo:function(a,b){b.cT(H.bH(a),H.co(a))},
yH:function(a,b){var t,s,r,q
t=new P.tb(b)
s=new P.tc(b)
r=J.aj(a)
if(!!r.$isbm)a.cN(t,s)
else if(!!r.$iscs)a.cg(t,s)
else{q=new P.bm(0,$.ap,null,[null])
q.a=4
q.c=a
q.cN(t,null)}},
br:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.ap.toString
return new P.to(t)},
yO:function(a,b){if(H.fU(a,{func:1,args:[P.da,P.da]})){b.toString
return a}else{b.toString
return a}},
AT:function(a,b){var t=new P.bm(0,$.ap,null,[b])
P.y6(C.q,new P.tr(a,t))
return t},
x_:function(a,b,c){var t
if(a==null)a=new P.fy()
t=$.ap
if(t!==C.e)t.toString
t=new P.bm(0,t,null,[c])
t.dE(a,b)
return t},
AU:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bm(0,$.ap,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.mE(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bP)(a),++l){q=a[l]
p=t.b
q.cg(new P.mD(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bm(0,$.ap,null,[null])
m.dD(C.E)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.bH(j)
n=H.co(j)
if(t.b===0||!1)return P.x_(o,n,null)
else{t.c=o
t.d=n}}return s},
bn:function(a){return new P.kJ(new P.bm(0,$.ap,null,[a]),[a])},
yK:function(a,b,c){$.ap.toString
a.aq(b,c)},
HQ:function(a,b){var t=new P.bm(0,$.ap,null,[b])
t.a=4
t.c=a
return t},
yu:function(a,b){var t,s,r
b.a=1
try{a.cg(new P.r7(b),new P.r8(b))}catch(r){t=H.bH(r)
s=H.co(r)
P.z9(new P.r9(b,t,s))}},
r6:function(a,b){var t,s,r
for(;a.gh_();)a=a.c
t=a.gcF()
s=b.c
if(t){b.c=null
r=b.c1(s)
b.a=a.a
b.c=a.c
P.fN(b,r)}else{b.a=2
b.c=a
a.e1(s)}},
fN:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fV(p)
n=p.gaQ()
s.toString
P.kN(null,null,s,o,n)}return}for(;b.gcI()!=null;b=m){m=b.a
b.a=null
P.fN(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.geq()||b.gep()){k=b.ghk()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fV(p)
n=p.gaQ()
s.toString
P.kN(null,null,s,o,n)
return}j=$.ap
if(j==null?k!=null:j!==k)$.ap=k
else j=null
if(b.gep())new P.re(t,r,q,b).$0()
else if(s){if(b.geq())new P.rd(r,b,l).$0()}else if(b.gi2())new P.rc(t,r,b).$0()
if(j!=null)$.ap=j
s=r.b
if(!!J.aj(s).$iscs){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.c1(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.r6(s,i)
return}}i=b.b
b=i.c0()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
Il:function(){var t,s
for(;t=$.fR,t!=null;){$.ir=null
s=t.b
$.fR=s
if(s==null)$.iq=null
t.a.$0()}},
Io:function(){$.w1=!0
try{P.Il()}finally{$.ir=null
$.w1=!1
if($.fR!=null)$.$get$vX().$1(P.yZ())}},
yV:function(a){var t=new P.kv(a,null)
if($.fR==null){$.iq=t
$.fR=t
if(!$.w1)$.$get$vX().$1(P.yZ())}else{$.iq.b=t
$.iq=t}},
In:function(a){var t,s,r
t=$.fR
if(t==null){P.yV(a)
$.ir=$.iq
return}s=new P.kv(a,null)
r=$.ir
if(r==null){s.b=t
$.ir=s
$.fR=s}else{s.b=r.b
r.b=s
$.ir=s
if(s.b==null)$.iq=s}},
z9:function(a){var t=$.ap
if(C.e===t){P.fS(null,null,C.e,a)
return}t.toString
P.fS(null,null,t,t.cS(a,!0))},
Jl:function(a,b){return new P.rR(null,a,!1,[b])},
yS:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.bH(o)
s=H.co(o)
$.ap.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fV(r)
q=n
p=r.gaQ()
c.$2(q,p)}}},
Ib:function(a,b,c,d){var t=a.c7(0)
if(!!J.aj(t).$iscs&&t!==$.$get$hy())t.cj(new P.te(b,c,d))
else b.aq(c,d)},
yI:function(a,b){return new P.td(a,b)},
w0:function(a,b,c){var t=a.c7(0)
if(!!J.aj(t).$iscs&&t!==$.$get$hy())t.cj(new P.tf(b,c))
else b.aM(c)},
HP:function(a,b,c,d,e,f,g){var t,s
t=$.ap
s=e?1:0
s=new P.f_(a,null,null,null,null,t,s,null,null,[f,g])
s.dz(b,c,d,e,g)
s.dA(a,b,c,d,e,f,g)
return s},
yG:function(a,b,c){$.ap.toString
a.bV(b,c)},
y6:function(a,b){var t=$.ap
if(t===C.e){t.toString
return P.vN(a,b)}return P.vN(a,t.cS(b,!0))},
vN:function(a,b){var t=C.a.ar(a.a,1000)
return H.HE(t<0?0:t,b)},
kN:function(a,b,c,d,e){var t={}
t.a=d
P.In(new P.tn(t,e))},
yP:function(a,b,c,d){var t,s
s=$.ap
if(s===c)return d.$0()
$.ap=c
t=s
try{s=d.$0()
return s}finally{$.ap=t}},
yR:function(a,b,c,d,e){var t,s
s=$.ap
if(s===c)return d.$1(e)
$.ap=c
t=s
try{s=d.$1(e)
return s}finally{$.ap=t}},
yQ:function(a,b,c,d,e,f){var t,s
s=$.ap
if(s===c)return d.$2(e,f)
$.ap=c
t=s
try{s=d.$2(e,f)
return s}finally{$.ap=t}},
fS:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cS(d,!(!t||!1))
P.yV(d)},
qE:function qE(a){this.a=a},
qD:function qD(a,b,c){this.a=a
this.b=b
this.c=c},
qF:function qF(a){this.a=a},
qG:function qG(a){this.a=a},
tb:function tb(a){this.a=a},
tc:function tc(a){this.a=a},
to:function to(a){this.a=a},
cs:function cs(){},
tr:function tr(a,b){this.a=a
this.b=b},
mE:function mE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mD:function mD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fc:function fc(){},
kw:function kw(){},
e3:function e3(a,$ti){this.a=a
this.$ti=$ti},
kJ:function kJ(a,$ti){this.a=a
this.$ti=$ti},
kA:function kA(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bm:function bm(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
r3:function r3(a,b){this.a=a
this.b=b},
rb:function rb(a,b){this.a=a
this.b=b},
r7:function r7(a){this.a=a},
r8:function r8(a){this.a=a},
r9:function r9(a,b,c){this.a=a
this.b=b
this.c=c},
r5:function r5(a,b){this.a=a
this.b=b},
ra:function ra(a,b){this.a=a
this.b=b},
r4:function r4(a,b,c){this.a=a
this.b=b
this.c=c},
re:function re(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rf:function rf(a){this.a=a},
rd:function rd(a,b,c){this.a=a
this.b=b
this.c=c},
rc:function rc(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
pl:function pl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pj:function pj(a,b){this.a=a
this.b=b},
pk:function pk(a,b){this.a=a
this.b=b},
pm:function pm(a){this.a=a},
pr:function pr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pp:function pp(a,b){this.a=a
this.b=b},
pq:function pq(){},
ps:function ps(a){this.a=a},
pv:function pv(a){this.a=a},
pw:function pw(a,b){this.a=a
this.b=b},
pt:function pt(a,b){this.a=a
this.b=b},
pu:function pu(a){this.a=a},
px:function px(a,b){this.a=a
this.b=b},
py:function py(a,b){this.a=a
this.b=b},
pn:function pn(a,b,c){this.a=a
this.b=b
this.c=c},
po:function po(a){this.a=a},
pi:function pi(){},
di:function di(){},
qK:function qK(a,b,c){this.a=a
this.b=b
this.c=c},
qJ:function qJ(a){this.a=a},
ky:function ky(){},
qR:function qR(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qT:function qT(b,c,a){this.b=b
this.c=c
this.a=a},
qS:function qS(){},
ry:function ry(){},
rz:function rz(a,b){this.a=a
this.b=b},
rQ:function rQ(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
rR:function rR(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
te:function te(a,b,c){this.a=a
this.b=b
this.c=c},
td:function td(a,b){this.a=a
this.b=b},
tf:function tf(a,b){this.a=a
this.b=b},
eZ:function eZ(){},
f_:function f_(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
t7:function t7(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
rw:function rw(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
rP:function rP(z,x,y,a,b,c,d,e,f,r,$ti){var _=this
_.z=z
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
rO:function rO(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
f5:function f5(a,b){this.a=a
this.b=b},
ta:function ta(){},
tn:function tn(a,b){this.a=a
this.b=b},
rC:function rC(){},
rD:function rD(a,b){this.a=a
this.b=b},
rE:function rE(a,b){this.a=a
this.b=b},
rF:function rF(a,b){this.a=a
this.b=b},
HR:function(a,b){var t=a[b]
return t===a?null:t},
vZ:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vY:function(){var t=Object.create(null)
P.vZ(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
xK:function(a,b,c){return H.z2(a,new H.w(0,null,null,null,null,null,0,[b,c]))},
cD:function(a,b){return new H.w(0,null,null,null,null,null,0,[a,b])},
jP:function(){return new H.w(0,null,null,null,null,null,0,[null,null])},
hL:function(a){return H.z2(a,new H.w(0,null,null,null,null,null,0,[null,null]))},
ik:function(a,b){return new P.kE(0,null,null,null,null,null,0,[a,b])},
HV:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
F:function(a,b,c,d,e){return new P.rh(0,null,null,null,null,[d,e])},
uY:function(a,b,c){var t,s
if(P.w2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$is()
s.push(a)
try{P.Ik(a,t)}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=P.y5(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jL:function(a,b,c){var t,s,r
if(P.w2(a))return b+"..."+c
t=new P.c6(b)
s=$.$get$is()
s.push(a)
try{r=t
r.L=P.y5(r.gL(),a,", ")}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=t
s.L=s.gL()+c
s=t.gL()
return s.charCodeAt(0)==0?s:s},
w2:function(a){var t,s
for(t=0;s=$.$get$is(),t<s.length;++t)if(a===s[t])return!0
return!1},
Ik:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cF(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.F())return
q=H.x(t.gO())
b.push(q)
s+=q.length+2;++r}if(!t.F()){if(r<=5)return
if(0>=b.length)return H.u(b,-1)
p=b.pop()
if(0>=b.length)return H.u(b,-1)
o=b.pop()}else{n=t.gO();++r
if(!t.F()){if(r<=4){b.push(H.x(n))
return}p=H.x(n)
if(0>=b.length)return H.u(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gO();++r
for(;t.F();n=m,m=l){l=t.gO();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.u(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.x(n)
p=H.x(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.u(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
xJ:function(a,b,c,d,e){return new H.w(0,null,null,null,null,null,0,[d,e])},
Gf:function(a,b,c){var t=P.xJ(null,null,null,b,c)
a.a1(0,new P.tt(t))
return t},
Gg:function(a,b,c,d,e){var t=P.xJ(null,null,null,d,e)
P.Gl(t,a,b,c)
return t},
a1:function(a,b,c,d){return new P.kD(0,null,null,null,null,null,0,[d])},
jQ:function(a,b){var t,s
t=P.a1(null,null,null,b)
for(s=J.cF(a);s.F();)t.h(0,s.gO())
return t},
nL:function(a){var t,s,r
t={}
if(P.w2(a))return"{...}"
s=new P.c6("")
try{$.$get$is().push(a)
r=s
r.L=r.gL()+"{"
t.a=!0
J.wh(a,new P.nM(t,s))
t=s
t.L=t.gL()+"}"}finally{t=$.$get$is()
if(0>=t.length)return H.u(t,-1)
t.pop()}t=s.gL()
return t.charCodeAt(0)==0?t:t},
Gl:function(a,b,c,d){var t,s,r
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.bP)(b),++s){r=b[s]
a.i(0,c.$1(r),d.$1(r))}},
va:function(a,b){var t=new P.nx(null,0,0,0,[b])
t.fm(a,b)
return t},
rh:function rh(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
rj:function rj(a){this.a=a},
kC:function kC(a,$ti){this.a=a
this.$ti=$ti},
ri:function ri(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kE:function kE(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
kD:function kD(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
rs:function rs(a,b,c){this.a=a
this.b=b
this.c=c},
dL:function dL(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rk:function rk(){},
ei:function ei(){},
hF:function hF(){},
tt:function tt(a){this.a=a},
hM:function hM(){},
fA:function fA(){},
aO:function aO(){},
nK:function nK(){},
t0:function t0(){},
jR:function jR(){},
eV:function eV(a,$ti){this.a=a
this.$ti=$ti},
nM:function nM(a,b){this.a=a
this.b=b},
nx:function nx(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rt:function rt(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
p_:function p_(){},
oZ:function oZ(){},
ti:function(a){var t
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.rn(a,Object.create(null),null)
for(t=0;t<a.length;++t)a[t]=P.ti(a[t])
return a},
wt:function(a,b,c,d,e,f){if(C.d.bU(f,4)!==0)throw H.j(new P.bK("Invalid base64 padding, padded length must be multiple of four, is "+H.x(f),a,c))
if(d+e!==f)throw H.j(new P.bK("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.j(new P.bK("Invalid base64 padding, more than two '=' characters",a,b))},
Im:function(a,b){var t,s,r,q
if(typeof a!=="string")throw H.j(H.bh(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.bH(r)
q=String(s)
throw H.j(new P.bK(q,null,null))}q=P.ti(t)
return q},
Ih:function(a){return a.j5()},
HU:function(a,b,c){var t,s,r
t=new P.c6("")
s=new P.rp(t,[],P.ID())
s.ck(a)
r=t.L
return r.charCodeAt(0)==0?r:r},
rn:function rn(a,b,c){this.a=a
this.b=b
this.c=c},
ro:function ro(a){this.a=a},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
fb:function fb(){},
er:function er(){},
lU:function lU(){},
hI:function hI(a,b){this.a=a
this.b=b},
nj:function nj(a,b){this.a=a
this.b=b},
ni:function ni(a,b){this.a=a
this.b=b},
nl:function nl(a,b){this.a=a
this.b=b},
nk:function nk(a){this.a=a},
rq:function rq(){},
rr:function rr(a,b){this.a=a
this.b=b},
rp:function rp(c,a,b){this.c=c
this.a=a
this.b=b},
qd:function qd(a){this.a=a},
qe:function qe(a){this.a=a},
t2:function t2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
t4:function t4(a){this.a=a},
t3:function t3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
HC:function(a,b,c){var t,s,r,q,p
if(b<0)throw H.j(P.bz(b,0,J.c9(a),null,null))
t=c==null
if(!t){if(typeof c!=="number")return c.a3()
s=c<b}else s=!1
if(s)throw H.j(P.bz(c,b,J.c9(a),null,null))
r=J.cF(a)
for(q=0;q<b;++q)if(!r.F())throw H.j(P.bz(b,0,q,null,null))
p=[]
if(t)for(;r.F();)p.push(r.gO())
else{if(typeof c!=="number")return H.a7(c)
q=b
for(;q<c;++q){if(!r.F())throw H.j(P.bz(c,b,q,null,null))
p.push(r.gO())}}return H.xZ(p)},
y5:function(a,b,c){var t=J.cF(b)
if(!t.F())return a
if(c.length===0){do a+=H.x(t.gO())
while(t.F())}else{a+=H.x(t.gO())
for(;t.F();)a=a+c+H.x(t.gO())}return a},
Ad:function(a,b){return J.zi(a,b)},
Ai:function(a,b){var t=new P.ea(a,b)
t.dv(a,b)
return t},
Aj:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.x(t)
if(t>=10)return s+"00"+H.x(t)
return s+"000"+H.x(t)},
Ak:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
iB:function(a){if(a>=10)return""+a
return"0"+a},
wM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cA(a)
if(typeof a==="string")return JSON.stringify(a)
return P.AD(a)},
AD:function(a){var t=J.aj(a)
if(!!t.$isfa)return t.w(a)
return H.ox(a)},
dk:function(a){return new P.cY(!1,null,null,a)},
dP:function(a,b,c){return new P.cY(!0,a,b,c)},
zM:function(a){return new P.cY(!1,null,a,"Must not be null")},
y0:function(a){return new P.eM(null,null,!1,null,null,a)},
k8:function(a,b,c){return new P.eM(null,null,!0,a,b,"Value not in range")},
bz:function(a,b,c,d,e){return new P.eM(b,c,!0,a,d,"Invalid value")},
dr:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a7(a)
if(!(0>a)){if(typeof c!=="number")return H.a7(c)
t=a>c}else t=!0
if(t)throw H.j(P.bz(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a7(b)
if(!(a>b)){if(typeof c!=="number")return H.a7(c)
t=b>c}else t=!0
if(t)throw H.j(P.bz(b,a,c,"end",f))
return b}return c},
bB:function(a,b,c,d,e){var t=e!=null?e:J.c9(b)
return new P.mU(b,t,!0,a,c,"Index out of range")},
m_:function(a){return new P.r2(a)},
d0:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cF(a);s.F();)t.push(s.gO())
if(b)return t
t.fixed$length=Array
return t},
Gh:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
l:function(a,b){var t=P.d0(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
f2:function(a){H.wa(H.x(a))},
ds:function(a,b,c){return new H.fv(a,H.v2(a,!1,!0,!1),null,null)},
pD:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dr(b,c,t,null,null,null)
if(!(b>0)){if(typeof c!=="number")return c.a3()
s=c<t}else s=!0
return H.xZ(s?C.b.co(a,b,c):a)}if(!!J.aj(a).$isfx)return H.GJ(a,b,P.dr(b,c,a.length,null,null,null))
return P.HC(a,b,c)},
yj:function(){var t=H.GD()
if(t!=null)return P.yk(t,0,null)
throw H.j(new P.S("'Uri.base' is not supported"))},
yk:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a8(a,b+4)^58)*3|C.c.a8(a,b)^100|C.c.a8(a,b+1)^97|C.c.a8(a,b+2)^116|C.c.a8(a,b+3)^97)>>>0
if(s===0)return P.yi(b>0||c<c?C.c.H(a,b,c):a,5,null).geQ()
else if(s===32)return P.yi(C.c.H(a,t,c),0,null).geQ()}r=H.a(new Array(8),[P.D])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.yT(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.aA()
if(p>=b)if(P.yT(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.R()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a3()
if(typeof l!=="number")return H.a7(l)
if(k<l)l=k
if(typeof m!=="number")return m.a3()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a3()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a3()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aL(a,"..",m)))h=l>m+2&&C.c.aL(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aL(a,"file",b)){if(o<=b){if(!C.c.aL(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.H(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aK(a,m,l,"/");++l;++k;++c}else{a=C.c.H(a,b,m)+"/"+C.c.H(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aL(a,"http",b)){if(q&&n+3===m&&C.c.aL(a,"80",n+1))if(b===0&&!0){a=C.c.aK(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.H(a,b,n)+C.c.H(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aL(a,"https",b)){if(q&&n+4===m&&C.c.aL(a,"443",n+1))if(b===0&&!0){a=C.c.aK(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.H(a,b,n)+C.c.H(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.c.H(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.rN(a,p,o,n,m,l,k,i,null)}return P.HY(a,b,c,p,o,n,m,l,k,i)},
ym:function(a,b){return C.b.hT(a.split("&"),P.jP(),new P.qa(b))},
HF:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.q7(a)
s=H.cE(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.a_(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fB(C.c.H(a,p,q),null,null)
if(J.cz(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.u(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fB(C.c.H(a,p,c),null,null)
if(J.cz(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.u(r,o)
r[o]=m
return r},
yl:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.q8(a)
s=new P.q9(a,t)
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
k=J.b0(C.b.gbh(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.HF(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.aC()
h=j[1]
if(typeof h!=="number")return H.a7(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.aC()
i=j[3]
if(typeof i!=="number")return H.a7(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.aj(e).S(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.u(g,f)
g[f]=0
i=f+1
if(i>=16)return H.u(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.dn()
i=C.d.b6(e,8)
if(f<0||f>=16)return H.u(g,f)
g[f]=i
i=f+1
if(i>=16)return H.u(g,i)
g[i]=e&255
f+=2}}return g},
HY:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.I5(a,b,d)
else{if(d===b)P.io(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.I6(a,t,e-1):""
r=P.I1(a,e,f,!1)
if(typeof f!=="number")return f.R()
q=f+1
if(typeof g!=="number")return H.a7(g)
p=q<g?P.I3(H.fB(C.c.H(a,q,g),null,new P.tq(a,f)),j):null}else{s=""
r=null
p=null}o=P.I2(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a3()
n=h<i?P.I4(a,h+1,i,null):null
return new P.kK(j,s,r,p,o,n,i<c?P.I0(a,i+1,c):null,null,null,null,null,null)},
yA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
io:function(a,b,c){throw H.j(new P.bK(c,a,b))},
I3:function(a,b){if(a!=null&&J.b0(a,P.yA(b)))return
return a},
I1:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.a_(a,b)===91){if(typeof c!=="number")return c.ag()
t=c-1
if(C.c.a_(a,t)!==93)P.io(a,b,"Missing end `]` to match `[` in host")
P.yl(a,b+1,t)
return C.c.H(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a7(c)
s=b
for(;s<c;++s)if(C.c.a_(a,s)===58){P.yl(a,b,c)
return"["+a+"]"}return P.I8(a,b,c)},
I8:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a7(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.a_(a,t)
if(p===37){o=P.yF(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.c6("")
m=C.c.H(a,s,t)
l=r.L+=!q?m.toLowerCase():m
if(n){o=C.c.H(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.L=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.u(C.H,n)
n=(C.H[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.c6("")
if(s<t){r.L+=C.c.H(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.u(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.io(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.a_(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.c6("")
m=C.c.H(a,s,t)
r.L+=!q?m.toLowerCase():m
r.L+=P.yB(p)
t+=k
s=t}}}}if(r==null)return C.c.H(a,b,c)
if(s<c){m=C.c.H(a,s,c)
r.L+=!q?m.toLowerCase():m}n=r.L
return n.charCodeAt(0)==0?n:n},
I5:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.yD(C.c.a8(a,b)))P.io(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a8(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.u(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.io(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.H(a,b,c)
return P.HZ(s?a.toLowerCase():a)},
HZ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
I6:function(a,b,c){var t=P.fQ(a,b,c,C.a7,!1)
return t==null?C.c.H(a,b,c):t},
I2:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fQ(a,b,c,C.J,!1)
if(r==null)r=C.c.H(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.aj(r,"/"))r="/"+r
return P.I7(r,e,f)},
I7:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.aj(a,"/"))return P.I9(a,!t||c)
return P.Ia(a)},
I4:function(a,b,c,d){var t=P.fQ(a,b,c,C.k,!1)
return t==null?C.c.H(a,b,c):t},
I0:function(a,b,c){var t=P.fQ(a,b,c,C.k,!1)
return t==null?C.c.H(a,b,c):t},
yF:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.a_(a,b+1)
r=C.c.a_(a,t)
q=H.tA(s)
p=H.tA(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.b6(o,4)
if(t>=8)return H.u(C.G,t)
t=(C.G[t]&1<<(o&15))!==0}else t=!1
if(t)return H.fC(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.H(a,b,b+3).toUpperCase()
return},
yB:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a8("0123456789ABCDEF",a>>>4)
t[2]=C.c.a8("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.hf(a,6*r)&63|s
if(p>=q)return H.u(t,p)
t[p]=37
n=p+1
m=C.c.a8("0123456789ABCDEF",o>>>4)
if(n>=q)return H.u(t,n)
t[n]=m
m=p+2
n=C.c.a8("0123456789ABCDEF",o&15)
if(m>=q)return H.u(t,m)
t[m]=n
p+=3}}return P.pD(t,0,null)},
fQ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.cW(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a3()
if(typeof c!=="number")return H.a7(c)
if(!(r<c))break
c$0:{o=s.a_(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.u(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.yF(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.u(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.io(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.a_(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.yB(o)}}if(p==null)p=new P.c6("")
p.L+=C.c.H(a,q,r)
p.L+=H.x(m)
if(typeof l!=="number")return H.a7(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a3()
if(q<c)p.L+=s.H(a,q,c)
t=p.L
return t.charCodeAt(0)==0?t:t},
yE:function(a){if(C.c.aj(a,"."))return!0
return C.c.br(a,"/.")!==-1},
Ia:function(a){var t,s,r,q,p,o,n
if(!P.yE(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bP)(s),++p){o=s[p]
if(J.b0(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.u(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bs(t,"/")},
I9:function(a,b){var t,s,r,q,p,o
if(!P.yE(a))return!b?P.yC(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bP)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.b0(C.b.gbh(t),"..")){if(0>=t.length)return H.u(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.u(t,0)
s=J.kW(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.b0(C.b.gbh(t),".."))t.push("")
if(!b){if(0>=t.length)return H.u(t,0)
s=P.yC(t[0])
if(0>=t.length)return H.u(t,0)
t[0]=s}return C.b.bs(t,"/")},
yC:function(a){var t,s,r,q
t=J.aY(a)
s=t.gm(a)
if(typeof s!=="number")return s.aA()
if(s>=2&&P.yD(t.a_(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a7(s)
if(!(r<s))break
q=t.a_(a,r)
if(q===58)return C.c.H(a,0,r)+"%3A"+C.c.ah(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.u(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
I_:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.a_(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.j(P.dk("Invalid URL encoding"))}}return t},
t1:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a7(c)
t=J.cW(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.a_(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.o!==d)p=!1
else p=!0
if(p)return t.H(a,b,c)
else o=new H.lo(t.H(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.a_(a,s)
if(q>127)throw H.j(P.dk("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.j(P.dk("Truncated URI"))
o.push(P.I_(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.qe(!1).hy(o)},
yD:function(a){var t=a|32
return 97<=t&&t<=122},
yi:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.aY(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a7(o)
if(!(r<o))break
c$0:{p=s.a_(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.j(new P.bK("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.j(new P.bK("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a7(o)
if(!(r<o))break
p=s.a_(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbh(t)
if(p!==44||r!==m+7||!s.aL(a,"base64",m+1))throw H.j(new P.bK("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.N.ik(0,a,o,s.gm(a))
else{l=P.fQ(a,o,s.gm(a),C.k,!0)
if(l!=null)a=s.aK(a,o,s.gm(a),l)}return new P.q6(a,t,c)},
Ig:function(){var t,s,r,q,p
t=P.Gh(22,new P.tk(),!0,P.dg)
s=new P.tj(t)
r=new P.tl()
q=new P.tm()
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
yT:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$yU()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.u(t,d)
r=t[d]
q=C.c.a8(a,s)^96
p=J.d8(r,q>95?31:q)
if(typeof p!=="number")return p.aP()
d=p&31
o=C.d.b6(p,5)
if(o>=8)return H.u(e,o)
e[o]=s}return d},
cV:function cV(){},
bI:function bI(){},
ea:function ea(a,b){this.a=a
this.b=b},
W:function W(){},
dy:function dy(a){this.a=a},
lR:function lR(){},
lS:function lS(){},
et:function et(){},
fy:function fy(){},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eM:function eM(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mU:function mU(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a){this.a=a},
eT:function eT(a){this.a=a},
dd:function dd(a){this.a=a},
bJ:function bJ(a){this.a=a},
oc:function oc(){},
kf:function kf(){},
lH:function lH(a){this.a=a},
r2:function r2(a){this.a=a},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
m0:function m0(a,bY,$ti){this.a=a
this.bY=bY
this.$ti=$ti},
D:function D(){},
n:function n(){},
jM:function jM(){},
p:function p(){},
aK:function aK(){},
da:function da(){},
dv:function dv(){},
A:function A(){},
dE:function dE(){},
eN:function eN(){},
e0:function e0(){},
y:function y(){},
c6:function c6(L){this.L=L},
eW:function eW(){},
qa:function qa(a){this.a=a},
q7:function q7(a){this.a=a},
q8:function q8(a){this.a=a},
q9:function q9(a,b){this.a=a
this.b=b},
kK:function kK(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
tq:function tq(a,b){this.a=a
this.b=b},
q6:function q6(a,b,c){this.a=a
this.b=b
this.c=c},
tk:function tk(){},
tj:function tj(a){this.a=a},
tl:function tl(){},
tm:function tm(){},
rN:function rN(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qQ:function qQ(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
z_:function(a){var t,s,r,q,p
if(a==null)return
t=P.jP()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bP)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
IC:function(a){var t,s
t=new P.bm(0,$.ap,null,[null])
s=new P.e3(t,[null])
a.then(H.dt(new P.tu(s),1))["catch"](H.dt(new P.tv(s),1))
return t},
u6:function(){var t=$.wH
if(t==null){t=J.kU(window.navigator.userAgent,"Opera",0)
$.wH=t}return t},
wJ:function(){var t=$.wI
if(t==null){t=P.u6()!==!0&&J.kU(window.navigator.userAgent,"WebKit",0)
$.wI=t}return t},
Al:function(){var t,s
t=$.wE
if(t!=null)return t
s=$.wF
if(s==null){s=J.kU(window.navigator.userAgent,"Firefox",0)
$.wF=s}if(s)t="-moz-"
else{s=$.wG
if(s==null){s=P.u6()!==!0&&J.kU(window.navigator.userAgent,"Trident/",0)
$.wG=s}if(s)t="-ms-"
else t=P.u6()===!0?"-o-":"-webkit-"}$.wE=t
return t},
rU:function rU(){},
rW:function rW(a,b){this.a=a
this.b=b},
qA:function qA(){},
qB:function qB(a,b){this.a=a
this.b=b},
rV:function rV(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c){this.a=a
this.b=b
this.c=c},
tu:function tu(a){this.a=a},
tv:function tv(a){this.a=a},
lx:function lx(){},
ly:function ly(a){this.a=a},
Ie:function(a){var t,s,r
t=new P.bm(0,$.ap,null,[null])
s=new P.kJ(t,[null])
a.toString
r=W.a_
W.fM(a,"success",new P.th(a,s),!1,r)
W.fM(a,"error",s.gek(),!1,r)
return t},
lJ:function lJ(){},
th:function th(a,b){this.a=a
this.b=b},
mT:function mT(){},
o9:function o9(){},
i_:function i_(){},
q_:function q_(){},
HX:function(a){var t=new P.rA(0,0)
t.fv(a)
return t},
ij:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
yy:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
H5:function(a,b,c,d,e){var t,s
if(typeof c!=="number")return c.a3()
if(c<0)t=-c*0
else t=c
if(typeof d!=="number")return d.a3()
if(d<0)s=-d*0
else s=d
return new P.bM(a,b,t,s,[e])},
rm:function rm(){},
rA:function rA(a,b){this.a=a
this.b=b},
dF:function dF(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
rB:function rB(){},
bM:function bM(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kX:function kX(){},
ep:function ep(){},
m1:function m1(){},
m2:function m2(){},
m3:function m3(){},
m4:function m4(){},
m5:function m5(){},
m6:function m6(){},
m7:function m7(){},
m8:function m8(){},
m9:function m9(){},
ma:function ma(){},
mb:function mb(){},
mc:function mc(){},
md:function md(){},
me:function me(){},
mf:function mf(){},
mg:function mg(){},
mh:function mh(){},
mi:function mi(){},
mx:function mx(){},
mB:function mB(){},
dC:function dC(){},
eg:function eg(){},
mR:function mR(){},
d9:function d9(){},
nq:function nq(){},
ja:function ja(){},
ju:function ju(){},
nN:function nN(){},
nO:function nO(){},
db:function db(){},
o6:function o6(){},
jb:function jb(){},
jv:function jv(){},
on:function on(){},
os:function os(){},
ot:function ot(){},
oH:function oH(){},
oI:function oI(){},
i1:function i1(){},
pC:function pC(){},
jc:function jc(){},
jw:function jw(){},
l4:function l4(a){this.a=a},
cf:function cf(){},
pG:function pG(){},
pI:function pI(){},
ki:function ki(){},
pQ:function pQ(){},
i9:function i9(){},
df:function df(){},
q0:function q0(){},
jd:function jd(){},
jx:function jx(){},
qc:function qc(){},
qh:function qh(){},
qi:function qi(){},
ih:function ih(){},
rG:function rG(){},
rH:function rH(){},
rI:function rI(){},
bi:function bi(){},
dg:function dg(){},
h2:function h2(){},
f6:function f6(){},
h3:function h3(){},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
bC:function bC(){},
e8:function e8(){},
lw:function lw(){},
kZ:function kZ(){},
oL:function oL(){},
oM:function oM(){},
t6:function t6(){},
ke:function ke(){},
je:function je(){},
jy:function jy(){}},W={
l_:function(a){var t=document.createElement("a")
if(a!=null)t.href=a
return t},
A4:function(a){if(a!=null)return new Audio(a)
return new Audio()},
A5:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
Ah:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
HN:function(a){var t=new W.qN(a,null)
t.fs(a)
return t},
Am:function(a,b,c){var t,s
t=document.body
s=(t&&C.w).aN(t,a,b,c)
s.toString
t=new H.dh(new W.d5(s),new W.tp(),[W.af])
return t.gbk(t)},
hh:function(a){var t,s,r
t="element tag unavailable"
try{s=J.zu(a)
if(typeof s==="string")t=a.tagName}catch(r){H.bH(r)}return t},
uv:function(a,b,c){return W.x0(a,null,null,b,null,null,null,c).b1(new W.mN())},
x0:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.eh
s=new P.bm(0,$.ap,null,[t])
r=new P.e3(s,[t])
q=new XMLHttpRequest()
C.S.il(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.Jk
W.fM(q,"load",new W.mO(r,q),!1,t)
W.fM(q,"error",r.gek(),!1,t)
q.send()
return s},
x1:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
f1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
yx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fM:function(a,b,c,d,e){var t=W.Iq(new W.r1(c))
t=new W.r0(0,a,b,t,!1,[e])
t.ft(a,b,c,!1,e)
return t},
yv:function(a){var t,s
t=W.l_(null)
s=window.location
t=new W.ii(new W.rJ(t,s))
t.fu(a)
return t},
HS:function(a,b,c,d){return!0},
HT:function(a,b,c,d){var t,s,r,q,p
t=d.geR()
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
yz:function(){var t=P.y
t=new W.rY(P.jQ(C.r,t),P.a1(null,null,null,t),P.a1(null,null,null,t),P.a1(null,null,null,t),null)
t.fw(null,new H.eI(C.r,new W.rZ(),[H.N(C.r,0),null]),["TEMPLATE"],null)
return t},
yL:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.HO(a)
if(!!J.aj(t).$isah)return t
return}else return a},
If:function(a){var t
if(!!J.aj(a).$ises)return a
t=new P.kt([],[],!1)
t.c=!0
return t.bd(a)},
HO:function(a){if(a===window)return a
else return new W.qP(a)},
Iq:function(a){var t=$.ap
if(t===C.e)return a
return t.ht(a,!0)},
ay:function ay(){},
f3:function f3(){},
l0:function l0(){},
f7:function f7(){},
cN:function cN(){},
l8:function l8(){},
hj:function hj(){},
hm:function hm(){},
lc:function lc(){},
f8:function f8(){},
f9:function f9(){},
h8:function h8(){},
iu:function iu(){},
lk:function lk(){},
ll:function ll(){},
eq:function eq(){},
lq:function lq(){},
ix:function ix(){},
hd:function hd(){},
lz:function lz(){},
lA:function lA(){},
he:function he(){},
hf:function hf(){},
lB:function lB(){},
bR:function bR(){},
fe:function fe(){},
j2:function j2(){},
qN:function qN(a,b){this.a=a
this.b=b},
k1:function k1(){},
qO:function qO(){},
iz:function iz(){},
lC:function lC(){},
lD:function lD(){},
lI:function lI(){},
ff:function ff(){},
iA:function iA(){},
lL:function lL(){},
iC:function iC(){},
es:function es(){},
iD:function iD(){},
iE:function iE(){},
lM:function lM(){},
lN:function lN(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
j3:function j3(){},
jn:function jn(){},
iI:function iI(){},
iJ:function iJ(){},
kz:function kz(a,$ti){this.a=a
this.$ti=$ti},
cp:function cp(){},
tp:function tp(){},
lT:function lT(){},
hi:function hi(){},
lZ:function lZ(){},
a_:function a_(){},
ah:function ah(){},
mt:function mt(){},
ch:function ch(){},
fn:function fn(){},
j4:function j4(){},
jo:function jo(){},
mu:function mu(){},
mv:function mv(){},
mw:function mw(){},
my:function my(){},
mz:function mz(){},
iZ:function iZ(){},
ct:function ct(){},
mK:function mK(){},
fo:function fo(){},
j5:function j5(){},
jp:function jp(){},
j0:function j0(){},
eh:function eh(){},
mN:function mN(){},
mO:function mO(a,b){this.a=a
this.b=b},
hz:function hz(){},
mQ:function mQ(){},
hA:function hA(){},
fq:function fq(){},
mW:function mW(){},
nn:function nn(){},
hJ:function hJ(){},
hK:function hK(){},
nE:function nE(){},
nJ:function nJ(){},
jT:function jT(){},
jU:function jU(){},
nP:function nP(){},
nQ:function nQ(){},
hS:function hS(){},
cu:function cu(){},
jV:function jV(){},
jf:function jf(){},
jz:function jz(){},
eJ:function eJ(){},
o2:function o2(){},
o3:function o3(){},
d5:function d5(a){this.a=a},
af:function af(){},
jY:function jY(){},
jZ:function jZ(){},
jg:function jg(){},
jA:function jA(){},
o8:function o8(){},
od:function od(){},
oh:function oh(){},
oj:function oj(){},
ek:function ek(){},
op:function op(){},
cj:function cj(){},
k6:function k6(){},
jh:function jh(){},
jB:function jB(){},
ov:function ov(){},
ow:function ow(){},
oF:function oF(){},
oP:function oP(){},
k9:function k9(){},
fF:function fF(){},
ka:function ka(){},
oY:function oY(){},
p0:function p0(){},
p1:function p1(){},
p4:function p4(){},
cv:function cv(){},
kc:function kc(){},
hk:function hk(){},
hn:function hn(){},
i3:function i3(){},
cw:function cw(){},
kd:function kd(){},
ji:function ji(){},
jC:function jC(){},
fG:function fG(){},
p8:function p8(){},
cl:function cl(){},
p9:function p9(){},
pa:function pa(){},
pg:function pg(){},
ph:function ph(a){this.a=a},
cn:function cn(){},
eS:function eS(){},
kh:function kh(){},
pJ:function pJ(){},
pK:function pK(){},
i7:function i7(){},
pO:function pO(){},
cU:function cU(){},
cK:function cK(){},
pR:function pR(){},
jj:function jj(){},
jD:function jD(){},
pS:function pS(){},
hl:function hl(){},
ho:function ho(){},
pW:function pW(){},
cy:function cy(){},
kj:function kj(){},
jk:function jk(){},
jE:function jE(){},
fI:function fI(){},
kk:function kk(){},
fJ:function fJ(){},
q1:function q1(){},
kl:function kl(){},
dI:function dI(){},
qb:function qb(){},
qf:function qf(){},
qg:function qg(){},
fK:function fK(){},
km:function km(){},
ql:function ql(){},
kq:function kq(){},
qt:function qt(){},
eX:function eX(){},
fL:function fL(){},
qL:function qL(){},
ie:function ie(){},
jl:function jl(){},
jF:function jF(){},
kx:function kx(){},
jm:function jm(){},
jG:function jG(){},
qU:function qU(){},
qV:function qV(){},
kB:function kB(){},
j6:function j6(){},
jq:function jq(){},
rg:function rg(){},
il:function il(){},
j7:function j7(){},
jr:function jr(){},
rK:function rK(){},
kG:function kG(){},
j8:function j8(){},
js:function js(){},
kI:function kI(){},
j9:function j9(){},
jt:function jt(){},
t8:function t8(){},
t9:function t9(){},
qH:function qH(){},
qW:function qW(a){this.a=a},
qX:function qX(a){this.a=a},
r_:function r_(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ig:function ig(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
r0:function r0(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
r1:function r1(a){this.a=a},
ii:function ii(a){this.a=a},
bv:function bv(){},
k_:function k_(a){this.a=a},
o5:function o5(a){this.a=a},
o4:function o4(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(){},
rL:function rL(){},
rM:function rM(){},
rY:function rY(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
rZ:function rZ(){},
rX:function rX(){},
iX:function iX(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qP:function qP(a){this.a=a},
ej:function ej(){},
t_:function t_(){},
rJ:function rJ(a,b){this.a=a
this.b=b},
kL:function kL(a){this.a=a},
t5:function t5(a){this.a=a}},T={
uw:function(a,b,c,d){var t
H.J9(a,"$isp",[P.D],"$asp")
t=new T.hB(a,null,d,b,null)
t.fl(a,b,c,d)
return t},
xR:function(a,b){return new T.oe(0,a,new Uint8Array(H.cE(b==null?32768:b)))},
HH:function(a){var t=new T.qw(-1,0,0,0,0,null,null,"",[])
t.fp(a)
return t},
HI:function(a,b){var t=new T.qx(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.fq(a,b)
return t},
fp:function(a){var t=new T.mP(null,0,2147483647)
t.fk(a)
return t},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
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
dj:function dj(a){this.a=a},
hB:function hB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oe:function oe(a,b,c){this.a=a
this.b=b
this.c=c},
qw:function qw(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qx:function qx(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
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
qy:function qy(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
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
qv:function qv(a){this.a=a},
mP:function mP(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
le:function le(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
_.M=M
_.N=N
_.aa=aa
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
lg:function lg(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
_.M=M
_.N=N
_.aa=aa
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
lK:function lK(){},
mI:function mI(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
_.M=M
_.N=N
_.aa=aa
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
H8:function(a,b,c,d){var t,s
t=[P.y]
s=H.a([],t)
t=new T.i0("Glitch",0.01,0.01,0.01,s,0.5,a,new H.w(0,null,null,null,null,null,0,[X.G,P.W]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.K(null,null,A.a6),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.P]),H.a([],[A.h6]),1)
t.ac(a,b,c,d)
return t},
i0:function i0(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
c0:function c0(a,b){this.a=a
this.b=b},
Aq:function(a,b,c,d){var t,s,r,q
t=new B.dx(new P.c6(""),0,0)
t.am(a,8)
c.toString
s=H.cT(c,0,null)
for(r=s.length,q=0;q<r;++q)t.am(s[q],8)
return t.bc(b)},
Ap:function(a,b,c,d){var t,s,r,q,p
t=H.cE(c)
s=new Uint8Array(t)
r=new B.dm(null,0)
r.a=J.e6(a,b)
for(q=0;q<c;++q){p=r.ab(8)
if(q>=t)return H.u(s,q)
s[q]=p}return s},
Ao:function(a,b,c,d){var t,s,r,q,p
t=new B.dx(new P.c6(""),0,0)
t.am(a,8)
s=d.gd1()
r=C.f.ap(Math.log(H.kO(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cT(c,0,null)
for(s=q.length,p=0;p<s;++p)t.am(q[p],r)
return t.bc(b)},
An:function(a,b,c,d){var t,s,r,q,p,o
t=H.cE(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ap(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dm(null,0)
p.a=J.e6(a,b)
for(o=0;o<c;++o){r=p.ab(q)
if(o>=t)return H.u(s,o)
s[o]=r}return s}},S={kY:function kY(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},bD:function bD(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},iw:function iw(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mM:function mM(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},v0:function v0(a){this.a=a},k3:function k3(){},no:function no(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},nH:function nH(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},oX:function oX(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},fz:function fz(){},vO:function vO(){},vP:function vP(){},vQ:function vQ(){},ud:function ud(){},ug:function ug(){},u3:function u3(){},vy:function vy(){},vS:function vS(){},vT:function vT(){},lj:function lj(){},vq:function vq(){},vm:function vm(){},nt:function nt(){},u7:function u7(){},tZ:function tZ(){},lF:function lF(){},v9:function v9(){},lG:function lG(){},oi:function oi(){},vF:function vF(){},vC:function vC(){},vG:function vG(){},tY:function tY(){},mF:function mF(){},lh:function lh(){},u2:function u2(){},u1:function u1(){},vr:function vr(){},vH:function vH(){},vs:function vs(){},uf:function uf(){},ue:function ue(){},vE:function vE(){},vD:function vD(){},pT:function pT(){},vJ:function vJ(){},u4:function u4(){},u5:function u5(){},vR:function vR(){},hR:function hR(){},ve:function ve(){},vf:function vf(){},vg:function vg(){},vh:function vh(){},vz:function vz(){},vA:function vA(){},vB:function vB(){},vd:function vd(){},vj:function vj(){},vk:function vk(){},us:function us(){},ut:function ut(){},uu:function uu(){},vl:function vl(){},vi:function vi(){},u_:function u_(){},vL:function vL(){},vM:function vM(){},vK:function vK(){}},K={bT:function bT(a,b){this.a=a
this.b=b},nr:function nr(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
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
_.x1=x1},oT:function oT(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
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
_.x1=x1},cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c}},L={
zN:function(a,b,c,d){var t,s,r
t=P.y
s=A.e9
r=P.D
r=new L.aV(P.F(null,null,null,t,s),P.F(null,null,null,r,s),P.F(null,null,null,t,r),P.F(null,null,null,r,t))
r.j(0,$.b3,L.e("#FF9B00"),!0)
r.j(0,$.b5,L.e("#FF9B00"),!0)
r.j(0,$.b4,L.e("#FF8700"),!0)
r.j(0,$.be,L.e("#7F7F7F"),!0)
r.j(0,$.bd,L.e("#727272"),!0)
r.j(0,$.b7,L.e("#A3A3A3"),!0)
r.j(0,$.b8,L.e("#999999"),!0)
r.j(0,$.b6,L.e("#898989"),!0)
r.j(0,$.bc,L.e("#EFEFEF"),!0)
r.j(0,$.bb,L.e("#DBDBDB"),!0)
r.j(0,$.ba,L.e("#C6C6C6"),!0)
r.j(0,$.b9,L.e("#ADADAD"),!0)
s=[t]
t=new L.h0(0.01,0.01,0.01,0.5,a,new H.w(0,null,null,null,null,null,0,[X.G,P.W]),null,"","",!1,b,null,c,d,!1,!1,!0,1,r,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.P]),H.a([],[A.h6]),Q.K(null,null,A.a6))
t.an(a,b,c,d)
return t},
e:function(a){if(C.c.aj(a,"#"))return A.wA(C.c.ah(a,1))
else return A.wA(a)},
h0:function h0(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oV:function oV(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1}},M={l3:function l3(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},h7:function h7(a,b){this.a=a
this.b=b},lE:function lE(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hq:function hq(){},bA:function bA(a,b){this.a=a
this.b=b},pb:function pb(a){this.a=a},qp:function qp(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1}},U={l7:function l7(){},nG:function nG(a){this.a=a},ob:function ob(a){this.a=a},pz:function pz(){},pA:function pA(a){this.a=a},pB:function pB(a){this.a=a},lP:function lP(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,aa,bF,bG,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
_.M=M
_.N=N
_.aa=aa
_.bF=bF
_.bG=bG
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
_.x1=x1},mj:function mj(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nI:function nI(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},b:function b(a){this.a=a},T:function T(b,c,a){this.b=b
this.c=c
this.a=a},ai:function ai(z,a,b,c,d,e,f,r,x,y){var _=this
_.z=z
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},pU:function pU(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
HG:function(a){if(J.cW(a).aj(a," "))return C.c.ah(a,1)
return a},
qq:function qq(a){this.a=a},
qr:function qr(a,b){this.a=a
this.b=b},
qs:function qs(a,b){this.a=a
this.b=b}},O={l9:function l9(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},cc:function cc(){},dw:function dw(){},ld:function ld(a){this.a=a},eR:function eR(){},iL:function iL(){},
J1:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.ol()
a=J.zC(a,P.ds("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.tN(t))
s=document
J.wl(s.querySelector("#navbar"),"beforeend",a,C.x,null)
if(J.b0(O.z4("seerOfVoid",null),"true"))P.AT(new O.tO(),P.da)
r=new P.ea(Date.now(),!1)
if(H.vv(r)===4&&H.vu(r)===1)J.wj(s.querySelector("body")).h(0,"voidbody")
q=H.vv(r)
p=H.vu(r)
o=C.a.w(H.xU(r))
n=C.a.w(q)
m=C.a.w(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.k7(null,null)
k.dm(H.fB(l,null,null))
k.ii()
if($.Hv||k.a.d0()>0.99)H.kS(s.querySelector("#today"),"$isf3").href=C.c.al("../",t)+"dead_index.html?seed="+l
else H.kS(s.querySelector("#today"),"$isf3").href=C.c.al("../",t)+"index2.html?seed="+l},
z4:function(a,b){var t,s,r,q
t=P.yj().gd8().n(0,a)
if(t!=null)t=P.t1(t,0,J.c9(t),C.o,!1)
if(t!=null)return t
s=$.za
if(s.length!==0){r=J.zF(window.location.href,J.zy(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.yk(H.zc(s,q,"")+"?"+$.za,0,null).gd8().n(0,a)}return},
Jb:function(){var t,s,r,q
t=document
J.wj(t.querySelector("body")).h(0,"voidbody")
s=new W.kz(t.querySelectorAll(".void"),[null])
for(t=new H.eG(s,s.gm(s),0,null,[null]);t.F();){r=t.d
q=J.zn(J.tW(r))
if(q==="none"||q.length===0)O.J5(r)
else O.IQ(r)}},
J5:function(a){var t,s
if(a==null)return
t=J.aP(a)
s=t.gaR(a)
J.wo(s,!!t.$isi3?"inline":"block")},
IQ:function(a){if(a==null)return
J.wo(J.tW(a),"none")},
J6:function(a){var t,s,r,q
if($.IH)return
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.f2("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.e7(s,",")
if(!J.tT(r,a))window.localStorage.setItem(t,H.x(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.bH(q)
P.f2("Saving isn't possible....you don't have local storage")}},
tN:function tN(a){this.a=a},
tO:function tO(){},
tM:function tM(){},
d2:function d2(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={pP:function pP(a){this.a=a},oG:function oG(a){this.a=a},li:function li(a){this.a=a},mG:function mG(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},mH:function mH(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},o7:function o7(b,a){this.b=b
this.a=a},e_:function e_(a,b){this.a=a
this.b=b},a8:function a8(a,b){this.a=a
this.b=b},dl:function dl(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},bW:function bW(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},R:function R(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iy:function iy(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bF:function bF(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},d4:function d4(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ln:function ln(c,a,b){this.c=c
this.a=a
this.b=b},bE:function bE(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},hZ:function hZ(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iY:function iY(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},k5:function k5(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},oU:function oU(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},p5:function p5(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},dZ:function dZ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nU:function(){var t=0,s=P.bn(),r,q
var $async$nU=P.br(function(a,b){if(a===1)return P.bo(b,s)
while(true)switch(t){case 0:P.f2("loading big bads")
r=$
q=J
t=2
return P.c7(A.eH("BigBadLists/bigBads.txt",!1,!1,null),$async$nU)
case 2:r.xQ=q.e7(b,P.ds("\n|\r",!0,!1))
return P.bp(null,s)}})
return P.bq($async$nU,s)},
Iz:function(a){var t,s,r,q,p,o
t=J.e7(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bP)(t),++q){p=t[q]
o=J.aY(p)
r+=" "+(J.zK(o.n(p,0))+o.ah(p,1))}return r}},A={lp:function lp(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
i:function(a,b,c,d,e){var t=new A.a6(c,e,null,null,a,!1,P.a1(null,null,null,G.a2),0,3)
t.I(a,b,c,!1,e)
return t},
a6:function a6(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
nb:function nb(){},
na:function na(){},
h6:function h6(){},
h9:function(a,b,c,d){var t=new A.e9(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.fj(a,b,c,d)
return t},
wz:function(a,b,c,d){var t=A.h9(0,0,0,255)
t.b=C.a.ai(C.d.ap(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ai(C.d.ap(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ai(C.d.ap(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ai(C.d.ap(d*255),0,255)
return t},
Ab:function(a,b){if(b){if(typeof a!=="number")return a.aP()
return A.h9((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aP()
return A.h9((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
wA:function(a){return A.Ab(H.fB(a,16,new A.ts()),a.length>=8)},
e9:function e9(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
ts:function ts(){},
xO:function(){if($.xM)return
$.xM=!0
Z.AK()},
eH:function(a,b,c,d){var t=0,s=P.bn(),r,q,p,o,n
var $async$eH=P.br(function(e,f){if(e===1)return P.bo(f,s)
while(true)switch(t){case 0:A.xO()
t=$.$get$d1().Y(0,a)?3:5
break
case 3:q=$.$get$d1().n(0,a)
p=J.aj(q)
if(!!p.$isdZ){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cP(q)
t=1
break}}else throw H.j("Requested resource ("+a+") is an unexpected type: "+H.x(J.wk(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.vc==null?8:9
break
case 8:t=10
return P.c7(A.nD(),$async$eH)
case 10:case 9:n=$.vc.eX(a)
t=n!=null?11:12
break
case 11:t=13
return P.c7(A.ny(n),$async$eH)
case 13:if(!$.$get$d1().Y(0,a))$.$get$d1().i(0,a,new Y.dZ(a,null,H.a([],[[P.fc,,]]),[null]))
r=$.$get$d1().n(0,a).b
t=1
break
case 12:case 7:r=A.Gj(a,!1,d)
t=1
break
case 4:case 1:return P.bp(r,s)}})
return P.bq($async$eH,s)},
nD:function(){var t=0,s=P.bn(),r
var $async$nD=P.br(function(a,b){if(a===1)return P.bo(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.c7(A.eH("manifest/manifest.txt",!1,!0,$.wX),$async$nD)
case 2:r.vc=b
return P.bp(null,s)}})
return P.bq($async$nD,s)},
Gi:function(a){if(!$.$get$d1().Y(0,a))$.$get$d1().i(0,a,new Y.dZ(a,null,H.a([],[[P.fc,,]]),[null]))
return $.$get$d1().n(0,a)},
Gj:function(a,b,c){var t
if($.$get$d1().Y(0,a))throw H.j("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.wW(C.b.gbh(a.split("."))).a
t=A.Gi(a)
c.bb(A.xL(a,!1)).b1(new A.nB(t))
return t.cP(0)},
ny:function(a){var t=0,s=P.bn(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$ny=P.br(function(b,a0){if(b===1)return P.bo(a0,s)
while(true)switch(t){case 0:t=3
return P.c7(A.eH(a+".bundle",!1,!0,null),$async$ny)
case 3:q=a0
p=C.c.H(a,0,C.c.ey(a,$.$get$xN()))
o=P.da
n=new P.e3(new P.bm(0,$.ap,null,[o]),[o])
m=H.a([],[P.cs])
for(o=J.zo(q),l=o.length,k=[[P.fc,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bP)(o),++i){h=o[i]
g=J.aP(h)
f=Z.wW(C.b.gbh(J.e7(g.gG(h),"."))).a
e=p+"/"+H.x(g.gG(h))
if($.$get$d1().Y(0,e)){m.push(A.eH(e,!1,!1,null))
continue}d=H.kS(g.gbq(h),"$isdg")
if(!$.$get$d1().Y(0,e))$.$get$d1().i(0,e,new Y.dZ(e,null,H.a([],k),j))
c=$.$get$d1().n(0,e)
m.push(c.cP(0))
f.bg(d.buffer).b1(new A.nz(f,c))}P.AU(m,null,!1).b1(new A.nA(n))
r=n.a
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$ny,s)},
hN:function(a,b){var t=0,s=P.bn(),r,q,p,o,n
var $async$hN=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:if($.$get$vb().Y(0,a)){r=$.$get$vb().n(0,a)
t=1
break}q=W.fF
p=new P.bm(0,$.ap,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.fM(n,"load",new A.nC(new P.e3(p,[q]),n),!1,W.a_)
n.src=A.xL(a,!1)
r=p
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$hN,s)},
xL:function(a,b){if(C.c.aj(a,"/")){a=C.c.ah(a,1)
b=!0}else b=!1
if(b)return H.x(window.location.protocol)+"//"+H.x(window.location.host)+"/"+a
return C.c.al("../",N.ol())+a},
nB:function nB(a){this.a=a},
nz:function nz(a,b){this.a=a
this.b=b},
nA:function nA(a){this.a=a},
nC:function nC(a,b){this.a=a
this.b=b},
og:function og(){},
k2:function k2(){},
k7:function k7(a,b){this.a=a
this.b=b},
tz:function(){var t=0,s=P.bn(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$tz=P.br(function(a0,a1){if(a0===1)return P.bo(a1,s)
while(true)switch(t){case 0:if($.z0){t=1
break}$.z0=!0
D.HB()
q=P.y
p=[q]
o=H.a(["metal"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,0.3)
$.$get$c().h(0,o)
$.E=o
o=H.a(["dutton"],p)
n=$.ab
H.a([],p)
o=new G.bL(null,n,o,0.6)
$.$get$c().h(0,o)
$.xd=o
o=H.a(["ceramic"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.3)
$.$get$c().h(0,o)
$.bU=o
o=H.a(["bone"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,0.2)
$.$get$c().h(0,o)
$.b1=o
o=H.a(["wood"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.3)
$.$get$c().h(0,o)
$.X=o
o=H.a(["plastic"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.3)
$.$get$c().h(0,o)
$.aF=o
o=H.a(["rubber"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.3)
$.$get$c().h(0,o)
$.ce=o
o=H.a(["paper"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.3)
$.$get$c().h(0,o)
$.L=o
o=H.a(["cloth","fabric"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.3)
$.$get$c().h(0,o)
$.Q=o
o=H.a(["glass"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.3)
$.$get$c().h(0,o)
$.aS=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.3)
$.$get$c().h(0,o)
$.bX=o
o=H.a(["flesh","meat","muscle"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.1)
$.$get$c().h(0,o)
$.bk=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.H
H.a([],p)
o=new G.bL(null,n,o,3.1)
$.$get$c().h(0,o)
$.bt=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.1)
$.$get$c().h(0,o)
$.ci=o
o=H.a(["plant","leaf","vine"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.1)
$.$get$c().h(0,o)
$.aU=o
o=H.a(["feathery"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.1)
$.$get$c().h(0,o)
$.bx=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.J
H.a([],p)
o=new G.bL(null,n,o,0.1)
$.$get$c().h(0,o)
$.bZ=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.J
H.a([],p)
o=new G.bL(null,n,o,-13)
$.$get$c().h(0,o)
$.bV=o
o=H.a(["stone","rock","concrete"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,0.3)
$.$get$c().h(0,o)
$.aw=o
o=H.a(["legendary"],p)
n=$.n9
H.a([],p)
o=new G.bL(null,n,o,13)
$.$get$c().h(0,o)
$.a0=o
o=H.a(["Unbeatable"],p)
n=$.n9
H.a([],p)
o=new G.bL(null,n,o,40.37)
$.$get$c().h(0,o)
$.FX=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.au=o
o=$.uX
H.a([],p)
o=new G.aJ(null,o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.aT=o
o=$.uX
H.a([],p)
o=new G.aJ(null,o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.ao=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bj=o
o=$.H
H.a([],p)
o=new G.aJ(null,o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.c5=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.b_=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bY=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aE=o
o=$.H
H.a([],p)
o=new G.aJ(null,o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aN=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bu=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a9=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.aZ=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bg=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.ar=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.al=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.aq=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.Y=o
o=$.H
H.a([],p)
o=new G.aJ(null,o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.av=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aB=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.aW=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bw=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a3=o
o=$.n9
H.a([],p)
o=new G.aJ(null,o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.U=o
o=$.n9
H.a([],p)
o=new G.aJ(null,o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.V=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.az=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.aI=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aG=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.b2=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bS=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bs=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.cd=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.as=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.ak=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$c().h(0,o)
$.aL=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$c().h(0,o)
$.aa=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aX=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aR=o
o=$.J
H.a([],p)
o=new G.aJ(null,o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.bl=o
o=H.a(["perfectly generic"],p)
n=$.J
H.a([],p)
o=new G.ae(null,n,o,0.1)
$.$get$c().h(0,o)
$.xg=o
o=H.a(["a sword"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.eC=o
o=H.a(["a hammer"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.n2=o
o=H.a(["a rifle"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uS=o
o=H.a(["a pistol"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uM=o
o=H.a(["a blade"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x6=o
o=H.a(["a dagger"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uC=o
o=H.a(["a santa"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.hE=o
o=H.a(["a fist"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xe=o
o=H.a(["claws"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.n0=o
o=H.a(["a grenade"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.n1=o
o=H.a(["a freaking safe"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xw=o
o=H.a(["a ball"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.fr=o
o=H.a(["a trident"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xD=o
o=H.a(["a card"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.n_=o
o=H.a(["a frying pan"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uF=o
o=H.a(["a pillow"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.hD=o
o=H.a(["a machinegun"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uI=o
o=H.a(["a shuriken"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xA=o
o=H.a(["a sling"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xC=o
o=H.a(["a yoyo"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xF=o
o=H.a(["a cane"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x8=o
o=H.a(["a shield"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ft=o
o=H.a(["a lance"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xp=o
o=H.a(["a ax"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uy=o
o=H.a(["a sign"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xu=o
o=H.a(["a book"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.aD=o
o=H.a(["a broom"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jH=o
o=H.a(["a club"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jJ=o
o=H.a(["a bow"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uz=o
o=H.a(["a whip"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xE=o
o=H.a(["a staff"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uU=o
o=H.a(["a needle"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uK=o
o=H.a(["dice"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uD=o
o=H.a(["a fork"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xf=o
o=H.a(["a pigeon???"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,1.3)
$.$get$c().h(0,o)
$.uL=o
o=H.a(["a chainsaw"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x9=o
o=H.a(["a sickle"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xB=o
o=H.a(["a shotgun"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xy=o
o=H.a(["a stick"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.dV=o
o=H.a(["a chain"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.eB=o
o=H.a(["a wrench"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uV=o
o=H.a(["a shovel"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xz=o
o=H.a(["a rolling pin"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uT=o
o=H.a(["a puppet"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uQ=o
o=H.a(["a razor"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uR=o
o=H.a(["a pen"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.n5=o
o=H.a(["a bust"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jI=o
o=H.a(["a bowling ball"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["a golf club"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xi=o
o=H.a(["a knife"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xo=o
o=H.a(["scissors"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xx=o
o=H.a(["a pizza cutter"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uN=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.H
m=G.a2
l=[m]
k=H.a([$.E,$.au,$.aN],l)
H.a([],p)
o=new G.d("Forged",k,null,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a([],p)
n=$.v
k=H.a([$.ak,$.au],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["fossilized"],p)
n=$.H
k=H.a([$.b1,$.aw],l)
H.a([],p)
o=new G.d("Fossilized",k,null,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["adamantium"],p)
n=$.H
k=H.a([$.b1,$.E],l)
H.a([],p)
o=new G.d("Adamantium",k,null,n,o,0)
$.$get$c().h(0,o)
$.x4=o
o=H.a([],p)
n=$.v
k=H.a([$.b2,$.aG],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fw=o
o=H.a(["tatami"],p)
n=$.v
k=H.a([$.Q,$.X],l)
H.a([],p)
o=new G.d("Tatami",k,null,n,o,0)
$.$get$c().h(0,o)
$.FL=o
o=H.a(["mesh","chain link"],p)
n=$.v
k=H.a([$.Q,$.E],l)
H.a([],p)
o=new G.d("Mesh",k,null,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["foil"],p)
n=$.v
k=H.a([$.L,$.E],l)
H.a([],p)
o=new G.d("Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["beanbag"],p)
n=$.v
k=H.a([$.Q,$.aw],l)
H.a([],p)
o=new G.d("Beanbag",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["pleather","faux fur"],p)
n=$.v
k=H.a([$.ci,$.aF],l)
H.a([],p)
o=new G.d("Faux Fur",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["plywood"],p)
n=$.v
k=H.a([$.X,$.L],l)
H.a([],p)
o=new G.d("Plywood",k,null,n,o,0)
$.$get$c().h(0,o)
$.uO=o
o=H.a(["colossus"],p)
n=$.v
k=H.a([$.E,$.bk],l)
H.a([],p)
o=new G.d("Colossus",k,null,n,o,0)
$.$get$c().h(0,o)
$.xa=o
o=H.a(["rotting","zombie"],p)
n=$.H
k=H.a([$.bZ,$.bk],l)
H.a([],p)
o=new G.d("Rotting",k,null,n,o,0)
$.$get$c().h(0,o)
$.EU=o
o=H.a(["draugr","white walker"],p)
n=$.H
k=H.a([$.bZ,$.bk,$.bs],l)
H.a([],p)
o=new G.d("Draugr",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["Ultraviolet"],p)
n=$.uW
k=H.a([$.aT,$.ao],l)
H.a([],p)
o=new G.d("Ultraviolet",k,null,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.aT,$.ao,$.au],l)
H.a([],p)
o=new G.d("Ultraviolence",k,null,n,o,0)
$.$get$c().h(0,o)
$.FW=o
o=H.a([],p)
n=$.q
k=H.a([$.aE,$.bY],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["candy"],p)
n=$.v
k=H.a([$.ar,$.aS],l)
H.a([],p)
o=new G.d("Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.uA=o
o=H.a(["cotton candy"],p)
n=$.v
k=H.a([$.ar,$.Q],l)
H.a([],p)
o=new G.d("Cotton Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["gummy"],p)
n=$.v
k=H.a([$.ar,$.ce],l)
H.a([],p)
o=new G.d("Gum",k,null,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["marrow"],p)
n=$.v
k=H.a([$.ar,$.b1],l)
H.a([],p)
o=new G.d("Marrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["toothy"],p)
n=$.a4
k=H.a([$.b1,$.bU],l)
H.a([],p)
o=new G.d("Toothy",k,null,n,o,0)
$.$get$c().h(0,o)
$.FT=o
o=H.a(["Frost"],p)
n=$.v
k=H.a([$.aw,$.aS,$.bk],l)
H.a([],p)
o=new G.d("Frost",k,null,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.ar,$.bS],l)
H.a([],p)
o=new G.d("Arsenic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.v
k=H.a([$.aw,$.aS],l)
H.a([],p)
o=new G.d("Crystal",k,null,n,o,0)
$.$get$c().h(0,o)
$.uB=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.J
k=H.a([$.az,$.aB,$.aW,$.Y,$.al,$.bY,$.a3],l)
H.a([],p)
o=new G.d("Mary Sue",k,null,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.J
k=H.a([$.b_,$.ao,$.au,$.a0,$.aE,$.Y,$.al,$.aq],l)
H.a([],p)
o=new G.d("Edge Lord",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["deadpool"],p)
n=$.a4
k=H.a([$.bZ,$.aI,$.aq,$.aW],l)
H.a([],p)
o=new G.d("Deadpool",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.J
k=H.a([$.b_,$.aq],l)
H.a([],p)
o=new G.d("Spoopy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fz=o
o=H.a(["wolverine"],p)
n=$.a4
k=H.a([$.b1,$.au,$.aN],l)
H.a([],p)
o=new G.d("Wolverine",k,null,n,o,0)
$.$get$c().h(0,o)
$.G7=o
o=H.a(["rabbit's foot"],p)
n=$.a4
k=H.a([$.bY,$.ci],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,null,n,o,0)
$.$get$c().h(0,o)
$.xt=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.H
k=H.a([$.aN,$.X],l)
H.a([],p)
o=new G.d("Tipped",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a4
k=H.a([$.aN,$.aL,$.X],l)
H.a([],p)
o=new G.d("Arrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.x5=o
o=H.a(["training sword","bokken"],p)
n=$.a4
k=H.a([$.X,$.au],l)
H.a([],p)
o=new G.d("Bokken",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["ironic"],p)
n=$.J
k=H.a([$.aR,$.aq],l)
H.a([],p)
o=new G.d("Irony Type1",k,null,n,o,0)
$.$get$c().h(0,o)
$.n3=o
o=H.a(["netted","webbed"],p)
n=$.a4
k=H.a([$.aZ,$.Q],l)
H.a([],p)
o=new G.d("Netted",k,null,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["barbed wire"],p)
n=$.a4
k=H.a([$.aN,$.aZ,$.E,$.Q],l)
H.a([],p)
o=new G.d("Barbed Wire",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["morning star"],p)
n=$.a4
k=H.a([$.aN,$.ak],l)
H.a([],p)
o=new G.d("Morning Star",k,null,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["decadent"],p)
n=$.J
k=H.a([$.b2,$.bg],l)
H.a([],p)
o=new G.d("Decadent",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bV,$.aq],l)
H.a([],p)
o=new G.d("SBAHJ",k,null,n,o,0)
$.$get$c().h(0,o)
$.F2=o
o=H.a(["bayonet"],p)
n=$.a4
k=H.a([$.aN,$.aL],l)
H.a([],p)
o=new G.d("Bayonet",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.v
k=H.a([$.bs,$.aq,$.au],l)
H.a([],p)
o=new G.d("Snoop",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fv=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.aT,$.as,$.au],l)
H.a([],p)
o=new G.d("Light Saber",k,null,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.J
k=H.a([$.a3,$.aR],l)
H.a([],p)
o=new G.d("Fakey Fake",k,null,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.J
k=H.a([$.a3,$.bl],l)
H.a([],p)
o=new G.d("Real As Shit",k,null,n,o,0)
$.$get$c().h(0,o)
$.EO=o
o=H.a(["skeletal"],p)
n=$.a4
k=H.a([$.b_,$.aE,$.b1],l)
H.a([],p)
o=new G.d("Skeletal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fp=o
o=H.a(["green sun"],p)
n=$.uX
k=H.a([$.as,$.c5,$.aT],l)
H.a([],p)
o=new G.d("Green Sun",k,null,n,o,0)
$.$get$c().h(0,o)
$.uH=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.uW
k=H.a([$.ao,$.al],l)
H.a([],p)
o=new G.d("Midnight",k,null,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["radiant","dazzling"],p)
n=$.J
k=H.a([$.a3,$.aT],l)
H.a([],p)
o=new G.d("Radiant",k,null,n,o,0)
$.$get$c().h(0,o)
$.EL=o
o=H.a(["edgy"],p)
n=$.J
k=H.a([$.au,$.ao,$.aq],l)
H.a([],p)
o=new G.d("Edgy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c5,$.bu],l)
H.a([],p)
o=new G.d("Warhead",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["living"],p)
n=$.H
k=H.a([$.b1,$.bk,$.av],l)
H.a([],p)
o=new G.d("Living",k,null,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["dead","corpse","deceased"],p)
n=$.H
k=H.a([$.b1,$.bk],l)
H.a([],p)
o=new G.d("Dead",k,null,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a9,$.aZ,$.aL],l)
H.a([],p)
o=new G.d("Taser",k,null,n,o,0)
$.$get$c().h(0,o)
$.FK=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.ao,$.aa],l)
H.a([],p)
o=new G.d("Nocturn",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aE,$.aa],l)
H.a([],p)
o=new G.d("Dirge",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["Snobbish","Noble"],p)
n=$.J
k=H.a([$.al,$.bg],l)
H.a([],p)
o=new G.d("Snobbish",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fu=o
o=H.a(["flat"],p)
n=$.J
k=H.a([$.ak,$.aa],l)
H.a([],p)
o=new G.d("Flat(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["sharp"],p)
n=$.J
k=H.a([$.au,$.aa],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fb=o
o=H.a(["sharp"],p)
n=$.J
k=H.a([$.al,$.aa],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fa=o
o=H.a(["Bach's"],p)
n=$.ab
k=H.a([$.Y,$.aa],l)
H.a([],p)
o=new G.d("Bach's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["Mozart's"],p)
n=$.ab
k=H.a([$.a3,$.aa],l)
H.a([],p)
o=new G.d("Mozart's",k,null,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.ab
k=H.a([$.Y,$.c5],l)
H.a([],p)
o=new G.d("Einstein's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["Feynman's"],p)
n=$.ab
k=H.a([$.Y,$.aW],l)
H.a([],p)
o=new G.d("Feynman's",k,null,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["Ziptie"],p)
n=$.ab
k=H.a([$.aF,$.aZ],l)
H.a([],p)
o=new G.d("Ziptie",k,null,n,o,0)
$.$get$c().h(0,o)
$.Gb=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.E,$.Y],l)
H.a([],p)
o=new G.d("Mobile",k,null,n,o,0)
$.$get$c().h(0,o)
$.n7=o
o=H.a(["Sassacre"],p)
n=$.ab
k=H.a([$.cd,$.aW],l)
H.a([],p)
o=new G.d("Sassacre",k,null,n,o,0)
$.$get$c().h(0,o)
$.F1=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ak,$.cd],l)
H.a([],p)
o=new G.d("Sledge",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fs=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.aZ,$.L],l)
H.a([],p)
o=new G.d("Legal",k,null,n,o,0)
$.$get$c().h(0,o)
$.n4=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.aW,$.aX],l)
H.a([],p)
o=new G.d("Clown",k,null,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["passionate"],p)
n=$.J
k=H.a([$.as,$.aB],l)
H.a([],p)
o=new G.d("Passionate",k,null,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["pinata"],p)
n=$.a4
k=H.a([$.L,$.ar],l)
H.a([],p)
o=new G.d("Pinata",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ak,$.cd,$.E],l)
H.a([],p)
o=new G.d("Anvil",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.aT,$.bu],l)
H.a([],p)
o=new G.d("Flashbang",k,null,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.ao,$.bu],l)
H.a([],p)
o=new G.d("Smokebomb",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ft=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.ao,$.au],l)
H.a([],p)
o=new G.d("Ninja",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a9,$.aa],l)
H.a([],p)
o=new G.d("Techno",k,null,n,o,0)
$.$get$c().h(0,o)
$.FN=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.aw,$.aa],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,null,n,o,0)
$.$get$c().h(0,o)
$.EQ=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a4
k=H.a([$.av,$.bk,$.aL],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.aW,$.aa,$.aX,$.b_],l)
H.a([],p)
o=new G.d("Juggalo",k,null,n,o,0)
$.$get$c().h(0,o)
$.xn=o
o=H.a(["shocksauce"],p)
n=$.J
k=H.a([$.aq,$.a9],l)
H.a([],p)
o=new G.d("Shock Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fe=o
o=H.a(["weaksauce"],p)
n=$.J
k=H.a([$.ak,$.aq,$.bV],l)
H.a([],p)
o=new G.d("Weak Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.G1=o
o=H.a(["spicy","picante"],p)
n=$.J
k=H.a([$.as,$.ar],l)
H.a([],p)
o=new G.d("Spicy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fy=o
o=H.a(["ice cream","popsicle"],p)
n=$.v
k=H.a([$.bs,$.ar],l)
H.a([],p)
o=new G.d("Popsicle",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["popsickle"],p)
n=$.v
k=H.a([$.bs,$.ar,$.au],l)
H.a([],p)
o=new G.d("Popsickle",k,null,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["icepick"],p)
n=$.v
k=H.a([$.bs,$.aN],l)
H.a([],p)
o=new G.d("Icepick",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["schezwan"],p)
n=$.J
k=H.a([$.aq,$.ar],l)
H.a([],p)
o=new G.d("Schezwan",k,null,n,o,0)
$.$get$c().h(0,o)
$.F3=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.ao,$.aa,$.aq,$.a9],l)
H.a([],p)
o=new G.d("Vaporwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.G_=o
o=H.a(["mallet"],p)
n=$.a4
k=H.a([$.X,$.ak],l)
H.a([],p)
o=new G.d("Mallet",k,null,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aF,$.aq],l)
H.a([],p)
o=new G.d("Fidget",k,null,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["gold foil"],p)
n=$.v
k=H.a([$.E,$.L,$.bg],l)
H.a([],p)
o=new G.d("Gold Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["caviar"],p)
n=$.v
k=H.a([$.ar,$.bg],l)
H.a([],p)
o=new G.d("Caviar",k,null,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["RADioactive"],p)
n=$.J
k=H.a([$.c5,$.aq],l)
H.a([],p)
o=new G.d("RADioactive",k,null,n,o,0)
$.$get$c().h(0,o)
$.EM=o
o=H.a(["glam"],p)
n=$.J
k=H.a([$.aw,$.aa,$.az],l)
H.a([],p)
o=new G.d("Glam",k,null,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["hair metal"],p)
n=$.J
k=H.a([$.E,$.aa,$.az],l)
H.a([],p)
o=new G.d("Hair Metal",k,null,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["elven","fae","sylvan"],p)
n=$.J
k=H.a([$.a3,$.az],l)
H.a([],p)
o=new G.d("Elven",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["shiny"],p)
n=$.J
k=H.a([$.E,$.az],l)
H.a([],p)
o=new G.d("Shiny",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fd=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.J
k=H.a([$.bg,$.az,$.al],l)
H.a([],p)
o=new G.d("Bespoke",k,null,n,o,0)
$.$get$c().h(0,o)
$.fs=o
o=H.a(["operatic"],p)
n=$.J
k=H.a([$.bg,$.aa,$.al],l)
H.a([],p)
o=new G.d("Operatic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["ice","diamond"],p)
n=$.v
k=H.a([$.bg,$.bs],l)
H.a([],p)
o=new G.d("Diamond",k,null,n,o,0)
$.$get$c().h(0,o)
$.xl=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.J
k=H.a([$.as,$.bs],l)
H.a([],p)
o=new G.d("Icy Hot",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.J
k=H.a([$.aq,$.bs],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,null,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["winter's","season's"],p)
n=$.ab
k=H.a([$.bj,$.bs],l)
H.a([],p)
o=new G.d("Winter's",k,null,n,o,0)
$.$get$c().h(0,o)
$.G4=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.ab
k=H.a([$.a3,$.bs],l)
H.a([],p)
o=new G.d("Christmas",k,null,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["Santa Saws"],p)
n=$.ab
k=H.a([$.a3,$.bs,$.au],l)
H.a([],p)
o=new G.d("Santa Saws",k,null,n,o,0)
$.$get$c().h(0,o)
$.F_=o
o=H.a(["Santa Sleighs"],p)
n=$.ab
k=H.a([$.hE,$.au],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,null,n,o,0)
$.$get$c().h(0,o)
$.F0=o
o=H.a(["Santa Claws"],p)
n=$.ab
k=H.a([$.hE,$.n0],l)
H.a([],p)
o=new G.d("Santa Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.EZ=o
o=H.a(["Sandy Claws"],p)
n=$.ab
k=H.a([$.hE,$.n0,$.aw],l)
H.a([],p)
o=new G.d("Sandy Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.EY=o
o=H.a(["Silent Night"],p)
n=$.ab
k=H.a([$.hE,$.ao],l)
H.a([],p)
o=new G.d("Silent Night",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fl=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.ab
k=H.a([$.b_,$.bX],l)
H.a([],p)
o=new G.d("Ghost's",k,null,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["ghoul","mutant"],p)
n=$.v
k=H.a([$.bk,$.c5,$.bZ],l)
H.a([],p)
o=new G.d("Mutant",k,null,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.aq,$.E],l)
H.a([],p)
o=new G.d("Skateboard",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fo=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c5,$.a9,$.ar],l)
H.a([],p)
o=new G.d("Microwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c5,$.a9,$.ar,$.aL],l)
H.a([],p)
o=new G.d("Orbital",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a([],p)
n=$.q
k=H.a([$.ak,$.Y],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["uranium"],p)
n=$.v
k=H.a([$.c5,$.aw],l)
H.a([],p)
o=new G.d("Uranium",k,null,n,o,0)
$.$get$c().h(0,o)
$.FZ=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.L,$.ce],l)
H.a([],p)
o=new G.d("Mousepad",k,null,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.au,$.aw],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.aN,$.aw],l)
H.a([],p)
o=new G.d("Pointed Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aF,$.aN],l)
H.a([],p)
o=new G.d("Picnic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["xtreme xplosion"],p)
n=$.J
k=H.a([$.aq,$.bu],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ga=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aF,$.b2],l)
H.a([],p)
o=new G.d("Lawn",k,null,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["upholstered"],p)
n=$.v
k=H.a([$.Q,$.b2],l)
H.a([],p)
o=new G.d("Upholstered",k,null,n,o,0)
$.$get$c().h(0,o)
$.FY=o
o=H.a(["leather"],p)
n=$.v
k=H.a([$.bk,$.b2],l)
H.a([],p)
o=new G.d("Leather",k,null,n,o,0)
$.$get$c().h(0,o)
$.xr=o
o=H.a(["shag"],p)
n=$.v
k=H.a([$.ci,$.b2],l)
H.a([],p)
o=new G.d("Shag",k,null,n,o,0)
$.$get$c().h(0,o)
$.F9=o
o=H.a(["loyal"],p)
n=$.J
k=H.a([$.ak,$.aB],l)
H.a([],p)
o=new G.d("Loyal",k,null,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["porcelain"],p)
n=$.v
k=H.a([$.az,$.bU],l)
H.a([],p)
o=new G.d("Porcelain",k,null,n,o,0)
$.$get$c().h(0,o)
$.uP=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a4
k=H.a([$.bg,$.bU],l)
H.a([],p)
o=new G.d("Pork Hollow",k,null,n,o,0)
$.$get$c().h(0,o)
$.EE=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.aq,$.au],l)
H.a([],p)
o=new G.d("Katana",k,null,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["chocolate"],p)
n=$.v
k=H.a([$.aB,$.ar],l)
H.a([],p)
o=new G.d("Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["wrapped chocolate"],p)
n=$.v
k=H.a([$.aB,$.ar,$.L,$.E],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["scratch-n-sniff"],p)
n=$.v
k=H.a([$.aq,$.L],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,null,n,o,0)
$.$get$c().h(0,o)
$.F5=o
o=H.a(["mythril","orichalcum"],p)
n=$.v
k=H.a([$.a3,$.E],l)
H.a([],p)
o=new G.d("Mythril",k,null,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["titanium","steel"],p)
n=$.v
k=H.a([$.ak,$.E],l)
H.a([],p)
o=new G.d("Titanium",k,null,n,o,0)
$.$get$c().h(0,o)
$.FS=o
o=H.a(["lead"],p)
n=$.v
k=H.a([$.cd,$.E],l)
H.a([],p)
o=new G.d("Lead",k,null,n,o,0)
$.$get$c().h(0,o)
$.xq=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aR,$.aW],l)
H.a([],p)
o=new G.d("Satire",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["comedy gold"],p)
n=$.J
k=H.a([$.bg,$.aW],l)
H.a([],p)
o=new G.d("Comedy Gold",k,null,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["dry","sensible chuckle"],p)
n=$.J
k=H.a([$.al,$.aW],l)
H.a([],p)
o=new G.d("Dry",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["polite"],p)
n=$.J
k=H.a([$.b2,$.aR],l)
H.a([],p)
o=new G.d("Polite",k,null,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a(["stradivarius"],p)
n=$.ab
k=H.a([$.al,$.bg,$.X,$.aa],l)
H.a([],p)
o=new G.d("Stradivarius",k,null,n,o,0)
$.$get$c().h(0,o)
$.FF=o
o=H.a(["scientistic"],p)
n=$.J
k=H.a([$.Y,$.aR],l)
H.a([],p)
o=new G.d("Scientistic",k,null,n,o,0)
$.$get$c().h(0,o)
$.F4=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a9,$.av],l)
H.a([],p)
o=new G.d("AI",k,null,n,o,0)
$.$get$c().h(0,o)
$.ux=o
o=H.a(["robotic"],p)
n=$.H
k=H.a([$.E,$.a9,$.av],l)
H.a([],p)
o=new G.d("Robotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.xv=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.X,$.bu],l)
H.a([],p)
o=new G.d("Shrapnel",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fg=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.av,$.a9,$.aa],l)
H.a([],p)
o=new G.d("Vocaloid",k,null,n,o,0)
$.$get$c().h(0,o)
$.G0=o
o=H.a(["*Hyun-ae"],p)
n=$.ab
k=H.a([$.av,$.a9,$.aB],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.X,$.aL],l)
H.a([],p)
o=new G.d("Buckshot",k,null,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.cd,$.aL],l)
H.a([],p)
o=new G.d("Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.al,$.L],l)
H.a([],p)
o=new G.d("Stationary",k,null,n,o,0)
$.$get$c().h(0,o)
$.FD=o
o=H.a([],p)
n=$.q
k=H.a([$.aD,$.L],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a([],p)
n=$.q
k=H.a([$.E,$.aL],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.au,$.L],l)
H.a([],p)
o=new G.d("Papercut",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["squeaky"],p)
n=$.H
k=H.a([$.ak,$.ce],l)
H.a([],p)
o=new G.d("Squeaky",k,null,n,o,0)
$.$get$c().h(0,o)
$.FA=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aR,$.aa],l)
H.a([],p)
o=new G.d("Kazoo",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aI,$.L],l)
H.a([],p)
o=new G.d("Bandaid",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aI,$.ar],l)
H.a([],p)
o=new G.d("Gushers",k,null,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aI,$.aL],l)
H.a([],p)
o=new G.d("Medic",k,null,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["sick nasty","ill"],p)
n=$.H
k=H.a([$.aq,$.bS],l)
H.a([],p)
o=new G.d("Sick Nasty",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fi=o
o=H.a(["gilded","gold leaf"],p)
n=$.v
k=H.a([$.E,$.X],l)
H.a([],p)
o=new G.d("Gilded",k,null,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aF,$.a9],l)
H.a([],p)
o=new G.d("Charging",k,null,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.ce,$.au],l)
H.a([],p)
o=new G.d("Rubber Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.EW=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aF,$.au],l)
H.a([],p)
o=new G.d("Plastic Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.EX=o
o=H.a(["thunderous","thor's"],p)
n=$.J
k=H.a([$.aX,$.a9],l)
H.a([],p)
o=new G.d("Thunderous",k,null,n,o,0)
$.$get$c().h(0,o)
$.FQ=o
o=H.a(["screeching","dial up"],p)
n=$.J
k=H.a([$.aX,$.a9,$.Y],l)
H.a([],p)
o=new G.d("Screeching",k,null,n,o,0)
$.$get$c().h(0,o)
$.F7=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.aS,$.E],l)
H.a([],p)
o=new G.d("Mirrored",k,null,n,o,0)
$.$get$c().h(0,o)
$.uJ=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.aS,$.aw,$.a3],l)
H.a([],p)
o=new G.d("Far Seeing",k,null,n,o,0)
$.$get$c().h(0,o)
$.xb=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.ce,$.aL],l)
H.a([],p)
o=new G.d("Nonlethal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.az,$.al],l)
H.a([],p)
o=new G.d("Fashionable",k,null,n,o,0)
$.$get$c().h(0,o)
$.uE=o
o=H.a(["ironic"],p)
n=$.J
k=H.a([$.aW,$.aq],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["ironic"],p)
n=$.J
k=H.a([$.bV,$.aW],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,null,n,o,0)
$.$get$c().h(0,o)
$.xm=o
o=H.a(["post-ironic"],p)
n=$.J
k=H.a([$.aR,$.aq,$.al],l)
H.a([],p)
o=new G.d("Post Ironic",k,null,n,o,0)
$.$get$c().h(0,o)
$.EG=o
o=H.a(["monstrous"],p)
n=$.J
k=H.a([$.bZ,$.aX,$.b_],l)
H.a([],p)
o=new G.d("Monstrous",k,null,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aL,$.aq,$.al],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,null,n,o,0)
$.$get$c().h(0,o)
$.ES=o
o=H.a(["golden"],p)
n=$.v
k=H.a([$.E,$.bg],l)
H.a([],p)
o=new G.d("Golden",k,null,n,o,0)
$.$get$c().h(0,o)
$.uG=o
o=H.a(["platinum"],p)
n=$.v
k=H.a([$.aT,$.E],l)
H.a([],p)
o=new G.d("Platinum",k,null,n,o,0)
$.$get$c().h(0,o)
$.n6=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bY,$.E],l)
H.a([],p)
o=new G.d("Horseshoe",k,null,n,o,0)
$.$get$c().h(0,o)
$.xk=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.Q,$.ci],l)
H.a([],p)
o=new G.d("Felt",k,null,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.aw,$.al],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.xs=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.aw,$.cd],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["glitched"],p)
n=$.H
k=H.a([$.bt,$.a9],l)
H.a([],p)
o=new G.d("Glitched",k,null,n,o,0)
$.$get$c().h(0,o)
$.xh=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aI,$.a9],l)
H.a([],p)
o=new G.d("Debugging",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.E,$.aX,$.aa],l)
H.a([],p)
o=new G.d("Metalic",k,null,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["Simulacrum"],p)
n=$.J
k=H.a([$.av,$.aR],l)
H.a([],p)
o=new G.d("Simulacrum",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fn=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.ar,$.aR],l)
H.a([],p)
o=new G.d("Imitation",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aI,$.aR],l)
H.a([],p)
o=new G.d("Placebo",k,null,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bg,$.aR],l)
H.a([],p)
o=new G.d("Counterfeit",k,null,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["Surreal"],p)
n=$.J
k=H.a([$.aq,$.aG,$.aW],l)
H.a([],p)
o=new G.d("Surreal1",k,null,n,o,0)
$.$get$c().h(0,o)
$.FH=o
o=H.a(["Brainy"],p)
n=$.J
k=H.a([$.Y,$.bk],l)
H.a([],p)
o=new G.d("Brainy",k,null,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.as,$.bu],l)
H.a([],p)
o=new G.d("Incendiary",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["C-4"],p)
n=$.v
k=H.a([$.bu,$.aF],l)
H.a([],p)
o=new G.d("C-4",k,null,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a3,$.aT,$.bt],l)
H.a([],p)
o=new G.d("Fae",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["Plutonium"],p)
n=$.v
k=H.a([$.E,$.c5],l)
H.a([],p)
o=new G.d("Plutonium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["Lithium"],p)
n=$.v
k=H.a([$.E,$.a9],l)
H.a([],p)
o=new G.d("Lithium",k,null,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["Molten"],p)
n=$.v
k=H.a([$.E,$.as],l)
H.a([],p)
o=new G.d("Molten",k,null,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.v
k=H.a([$.aw,$.as],l)
H.a([],p)
o=new G.d("Magma",k,null,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["Rusty"],p)
n=$.H
k=H.a([$.E,$.bV],l)
H.a([],p)
o=new G.d("Rusty",k,null,n,o,0)
$.$get$c().h(0,o)
$.EV=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.au,$.aq,$.al],l)
H.a([],p)
o=new G.d("Fonzie",k,null,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aB,$.aW],l)
H.a([],p)
o=new G.d("Romcom",k,null,n,o,0)
$.$get$c().h(0,o)
$.ER=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.az,$.aT],l)
H.a([],p)
o=new G.d("Alluring",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.az,$.ao],l)
H.a([],p)
o=new G.d("Masquerade",k,null,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.aw,$.bk],l)
H.a([],p)
o=new G.d("Stoneskin",k,null,n,o,0)
$.$get$c().h(0,o)
$.FE=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a3,$.Y],l)
H.a([],p)
o=new G.d("Psionic",k,null,n,o,0)
$.$get$c().h(0,o)
$.EJ=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a3,$.aw],l)
H.a([],p)
o=new G.d("Dwarven",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["Elemental","Animated"],p)
n=$.v
k=H.a([$.a3,$.av],l)
H.a([],p)
o=new G.d("Elemental",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["Gourmet"],p)
n=$.J
k=H.a([$.ar,$.al],l)
H.a([],p)
o=new G.d("Gourmet",k,null,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["Stained Glass"],p)
n=$.v
k=H.a([$.aS,$.az,$.bg],l)
H.a([],p)
o=new G.d("Stained Glass",k,null,n,o,0)
$.$get$c().h(0,o)
$.FB=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aI,$.Q],l)
H.a([],p)
o=new G.d("Gauze",k,null,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["Locked"],p)
n=$.H
k=H.a([$.aZ,$.bw],l)
H.a([],p)
o=new G.d("Locked",k,null,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.aw,$.L],l)
H.a([],p)
o=new G.d("Etched",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["Papyrus"],p)
n=$.v
k=H.a([$.L,$.aU],l)
H.a([],p)
o=new G.d("Papyrus",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.L,$.aF],l)
H.a([],p)
o=new G.d("Film",k,null,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["Saucey"],p)
n=$.v
k=H.a([$.bt,$.bw,$.ar],l)
H.a([],p)
o=new G.d("Saucey",k,null,n,o,0)
$.$get$c().h(0,o)
$.jK=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.L,$.bY],l)
H.a([],p)
o=new G.d("Lottery",k,null,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.ao,$.Q],l)
H.a([],p)
o=new G.d("Blindfolded",k,null,n,o,0)
$.$get$c().h(0,o)
$.x7=o
o=H.a(["Possessed"],p)
n=$.H
k=H.a([$.bX,$.bk],l)
H.a([],p)
o=new G.d("Possessed",k,null,n,o,0)
$.$get$c().h(0,o)
$.EF=o
o=H.a(["Infernal"],p)
n=$.J
k=H.a([$.bX,$.as],l)
H.a([],p)
o=new G.d("Infernal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.X,$.bl,$.uQ,$.av],l)
H.a([],p)
o=new G.d("Geppetto",k,null,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["Abominable"],p)
n=$.J
k=H.a([$.bk,$.bt],l)
H.a([],p)
o=new G.d("Abominable",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aB,$.aE],l)
H.a([],p)
o=new G.d("Ashen",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aB,$.bj],l)
H.a([],p)
o=new G.d("Pale",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aB,$.bw],l)
H.a([],p)
o=new G.d("Pitch",k,null,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["Lit"],p)
n=$.J
k=H.a([$.aq,$.as],l)
H.a([],p)
o=new G.d("Lit",k,null,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a3,$.bj],l)
H.a([],p)
o=new G.d("Hypnotizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bj,$.aZ],l)
H.a([],p)
o=new G.d("Tranquilizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.FV=o
o=H.a([],p)
n=$.q
k=H.a([$.bj,$.bw],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["Ghost Rider's"],p)
n=$.ab
k=H.a([$.eB,$.as,$.bX],l)
H.a([],p)
o=new G.d("Ghost Rider",k,null,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["Logical"],p)
n=$.J
k=H.a([$.Y,$.bs],l)
H.a([],p)
o=new G.d("Logical",k,null,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["Duelist's"],p)
n=$.ab
k=H.a([$.aL,$.al],l)
H.a([],p)
o=new G.d("Duelist's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["Silenced"],p)
n=$.H
k=H.a([$.aL,$.ao],l)
H.a([],p)
o=new G.d("Silenced",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fk=o
o=H.a(["Deudly"],p)
n=$.H
k=H.a([$.aL,$.bV],l)
H.a([],p)
o=new G.d("Deudly",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["Screaming"],p)
n=$.H
k=H.a([$.aX,$.b_],l)
H.a([],p)
o=new G.d("Screaming",k,null,n,o,0)
$.$get$c().h(0,o)
$.F6=o
o=H.a(["Cacophonous"],p)
n=$.J
k=H.a([$.bZ,$.aa],l)
H.a([],p)
o=new G.d("Cacophonous",k,null,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["Sublime"],p)
n=$.J
k=H.a([$.bZ,$.az],l)
H.a([],p)
o=new G.d("Sublime",k,null,n,o,0)
$.$get$c().h(0,o)
$.FG=o
o=H.a(["Masterwork"],p)
n=$.v
k=H.a([$.bl,$.bg],l)
H.a([],p)
o=new G.d("Masterwork",k,null,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.av,$.b_,$.bt,$.a3],l)
H.a([],p)
o=new G.d("BroodFester",k,null,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bt,$.ao],l)
H.a([],p)
o=new G.d("[REDACTED]",k,null,n,o,0)
$.$get$c().h(0,o)
$.EP=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.ar,$.bu],l)
H.a([],p)
o=new G.d("Pop Rocks",k,null,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["Disguised"],p)
n=$.H
k=H.a([$.ao,$.aR],l)
H.a([],p)
o=new G.d("Disguised",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["Haunted"],p)
n=$.H
k=H.a([$.aG,$.bX],l)
H.a([],p)
o=new G.d("Haunted",k,null,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["Cognitohazardous"],p)
n=$.H
k=H.a([$.bt,$.Y],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,null,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["Staticy"],p)
n=$.H
k=H.a([$.aG,$.a9],l)
H.a([],p)
o=new G.d("Staticy",k,null,n,o,0)
$.$get$c().h(0,o)
$.FC=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.aS,$.c5],l)
H.a([],p)
o=new G.d("Jadite",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.aW,$.aG],l)
H.a([],p)
o=new G.d("Tickling",k,null,n,o,0)
$.$get$c().h(0,o)
$.FR=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.E,$.bU],l)
H.a([],p)
o=new G.d("Composite",k,null,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["High-Powered"],p)
n=$.H
k=H.a([$.bu,$.aL],l)
H.a([],p)
o=new G.d("High-Powered",k,null,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bu,$.ak],l)
H.a([],p)
o=new G.d("Concussive",k,null,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["Down"],p)
n=$.v
k=H.a([$.b2,$.bx],l)
H.a([],p)
o=new G.d("Down",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["Prickly"],p)
n=$.v
k=H.a([$.aG,$.aN],l)
H.a([],p)
o=new G.d("Prickly",k,null,n,o,0)
$.$get$c().h(0,o)
$.EI=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aG,$.ao,$.a9],l)
H.a([],p)
o=new G.d("Deep-Web",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.v
k=H.a([$.aN,$.au],l)
H.a([],p)
o=new G.d("Jagged",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["Nanofiber"],p)
n=$.v
k=H.a([$.Q,$.Y],l)
H.a([],p)
o=new G.d("Nanofiber",k,null,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.E,$.aX],l)
H.a([],p)
o=new G.d("Clanging",k,null,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["Silver"],p)
n=$.v
k=H.a([$.E,$.al],l)
H.a([],p)
o=new G.d("Silver",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fm=o
o=H.a(["Withered"],p)
n=$.H
k=H.a([$.aE,$.aU],l)
H.a([],p)
o=new G.d("Withered",k,null,n,o,0)
$.$get$c().h(0,o)
$.G6=o
o=H.a(["Shattered"],p)
n=$.H
k=H.a([$.aS,$.bV],l)
H.a([],p)
o=new G.d("Shattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fc=o
o=H.a(["Miner's"],p)
n=$.ab
k=H.a([$.aw,$.E],l)
H.a([],p)
o=new G.d("Miner's",k,null,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.aa,$.av],l)
H.a([],p)
o=new G.d("Singing",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fj=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bk,$.a9],l)
H.a([],p)
o=new G.d("Mitochondrial",k,null,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.ao,$.a9],l)
H.a([],p)
o=new G.d("Blackout",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["Asbestos"],p)
n=$.v
k=H.a([$.aw,$.bS],l)
H.a([],p)
o=new G.d("Asbestos",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["Mercurial"],p)
n=$.v
k=H.a([$.bS,$.E],l)
H.a([],p)
o=new G.d("Mercurial",k,null,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["Bulletproof"],p)
n=$.v
k=H.a([$.Q,$.ak],l)
H.a([],p)
o=new G.d("Bulletproof",k,null,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["Cotton"],p)
n=$.v
k=H.a([$.aU,$.Q],l)
H.a([],p)
o=new G.d("Cotton",k,null,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bw,$.aT],l)
H.a([],p)
o=new G.d("Blinding",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["Brilliant"],p)
n=$.J
k=H.a([$.aT,$.Y],l)
H.a([],p)
o=new G.d("Brilliant",k,null,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["Offensive"],p)
n=$.J
k=H.a([$.bw,$.Y],l)
H.a([],p)
o=new G.d("Offensive",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["Poached"],p)
n=$.H
k=H.a([$.bk,$.bg],l)
H.a([],p)
o=new G.d("Poached",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["Tapestry"],p)
n=$.v
k=H.a([$.Q,$.az],l)
H.a([],p)
o=new G.d("Tapestry",k,null,n,o,0)
$.$get$c().h(0,o)
$.FJ=o
o=H.a(["Itchy"],p)
n=$.J
k=H.a([$.Q,$.aG],l)
H.a([],p)
o=new G.d("Itchy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Wishbone"],p)
n=$.v
k=H.a([$.bY,$.b1],l)
H.a([],p)
o=new G.d("Wishbone",k,null,n,o,0)
$.$get$c().h(0,o)
$.G5=o
o=H.a(["Rattling"],p)
n=$.H
k=H.a([$.aX,$.b1],l)
H.a([],p)
o=new G.d("Rattling",k,null,n,o,0)
$.$get$c().h(0,o)
$.EN=o
o=H.a(["Cranial"],p)
n=$.v
k=H.a([$.Y,$.b1],l)
H.a([],p)
o=new G.d("Cranial",k,null,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["Humerus"],p)
n=$.v
k=H.a([$.aW,$.b1],l)
H.a([],p)
o=new G.d("Humerus",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aI,$.b2],l)
H.a([],p)
o=new G.d("Massage",k,null,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["Pestersome","Irksome"],p)
n=$.J
k=H.a([$.aX,$.bw],l)
H.a([],p)
o=new G.d("Pestersome",k,null,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aX,$.bu],l)
H.a([],p)
o=new G.d("Shockwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ff=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bS,$.aI],l)
H.a([],p)
o=new G.d("Antivenom",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.v
k=H.a([$.as,$.a3],l)
H.a([],p)
o=new G.d("Will O Wisp",k,null,n,o,0)
$.$get$c().h(0,o)
$.G2=o
o=H.a(["Fiberglass"],p)
n=$.v
k=H.a([$.Q,$.aS],l)
H.a([],p)
o=new G.d("Fiberglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["Skull"],p)
n=$.v
k=H.a([$.b1,$.b_],l)
H.a([],p)
o=new G.d("Skull",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fq=o
o=H.a(["Enchanted"],p)
n=$.H
k=H.a([$.a3,$.bY],l)
H.a([],p)
o=new G.d("Enchanted",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["Berserker's"],p)
n=$.ab
k=H.a([$.a3,$.bw],l)
H.a([],p)
o=new G.d("Berserker's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["Clerical"],p)
n=$.ab
k=H.a([$.a3,$.aI],l)
H.a([],p)
o=new G.d("Clerical",k,null,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aI,$.as],l)
H.a([],p)
o=new G.d("Cauterizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c5,$.aT],l)
H.a([],p)
o=new G.d("X-Ray",k,null,n,o,0)
$.$get$c().h(0,o)
$.G9=o
o=H.a(["Clever"],p)
n=$.J
k=H.a([$.Y,$.bY],l)
H.a([],p)
o=new G.d("Clever",k,null,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.b2,$.as],l)
H.a([],p)
o=new G.d("Fireplace",k,null,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["Crackling"],p)
n=$.H
k=H.a([$.aX,$.as],l)
H.a([],p)
o=new G.d("Crackling",k,null,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["Thumping"],p)
n=$.H
k=H.a([$.aX,$.cd],l)
H.a([],p)
o=new G.d("Thumping",k,null,n,o,0)
$.$get$c().h(0,o)
$.FP=o
o=H.a(["Shrieking","Banshee"],p)
n=$.H
k=H.a([$.bX,$.aX],l)
H.a([],p)
o=new G.d("Banshee",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fh=o
o=H.a(["Surreal"],p)
n=$.J
k=H.a([$.aW,$.bt],l)
H.a([],p)
o=new G.d("Surreal2",k,null,n,o,0)
$.$get$c().h(0,o)
$.FI=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aI,$.aU],l)
H.a([],p)
o=new G.d("Aloe",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aB,$.aU],l)
H.a([],p)
o=new G.d("Rose",k,null,n,o,0)
$.$get$c().h(0,o)
$.ET=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.aW,$.ak],l)
H.a([],p)
o=new G.d("Knock Knock",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a3,$.bS],l)
H.a([],p)
o=new G.d("Lifesteal",k,null,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.az,$.aE],l)
H.a([],p)
o=new G.d("Tragic",k,null,n,o,0)
$.$get$c().h(0,o)
$.FU=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.au,$.aW],l)
H.a([],p)
o=new G.d("Slapstick",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fr=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bZ,$.aW],l)
H.a([],p)
o=new G.d("Gross Out",k,null,n,o,0)
$.$get$c().h(0,o)
$.xj=o
o=H.a(["Flowery"],p)
n=$.v
k=H.a([$.az,$.aU],l)
H.a([],p)
o=new G.d("Flowery",k,null,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["Poison Ivy"],p)
n=$.v
k=H.a([$.bS,$.aU],l)
H.a([],p)
o=new G.d("Poison Ivy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.H
k=H.a([$.a3,$.bx],l)
H.a([],p)
o=new G.d("Winged",k,null,n,o,0)
$.$get$c().h(0,o)
$.G3=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.aU,$.ar,$.aE],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,null,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["Lawful"],p)
n=$.J
k=H.a([$.aZ,$.av],l)
H.a([],p)
o=new G.d("Lawful",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["Chaotic"],p)
n=$.J
k=H.a([$.bw,$.av],l)
H.a([],p)
o=new G.d("Chaotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Hypothermic"],p)
n=$.H
k=H.a([$.aE,$.bs],l)
H.a([],p)
o=new G.d("Hypothermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["Hyperthermic"],p)
n=$.H
k=H.a([$.aE,$.as],l)
H.a([],p)
o=new G.d("Hyperthermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["Shackled"],p)
n=$.H
k=H.a([$.aZ,$.cd],l)
H.a([],p)
o=new G.d("Shackled",k,null,n,o,0)
$.$get$c().h(0,o)
$.F8=o
o=H.a(["Poetic"],p)
n=$.J
k=H.a([$.Y,$.aB],l)
H.a([],p)
o=new G.d("Poetic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a(["Holographic"],p)
n=$.v
k=H.a([$.aT,$.Y,$.aS,$.a9],l)
H.a([],p)
o=new G.d("Holographic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["Casket","Coffin"],p)
n=$.v
k=H.a([$.X,$.aE],l)
H.a([],p)
o=new G.d("Casket",k,null,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["Spectral"],p)
n=$.v
k=H.a([$.bX,$.a3],l)
H.a([],p)
o=new G.d("Spectral",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fx=o
o=H.a(["Phoenix"],p)
n=$.v
k=H.a([$.as,$.bx],l)
H.a([],p)
o=new G.d("Phoenix",k,null,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["Tattered"],p)
n=$.H
k=H.a([$.Q,$.aE],l)
H.a([],p)
o=new G.d("Tattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.FM=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.aa,$.X],l)
H.a([],p)
o=new G.d("Woodwind",k,null,n,o,0)
$.$get$c().h(0,o)
$.G8=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aG,$.b1],l)
H.a([],p)
o=new G.d("Bone Hurting",k,null,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aI,$.b1],l)
H.a([],p)
o=new G.d("Bone Healing:",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["Calcium"],p)
n=$.v
k=H.a([$.b1,$.aI,$.ar],l)
H.a([],p)
o=new G.d("Calcium",k,null,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["Fleece"],p)
n=$.v
k=H.a([$.Q,$.as],l)
H.a([],p)
o=new G.d("Fleece",k,null,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["Potted"],p)
n=$.v
k=H.a([$.bU,$.aU],l)
H.a([],p)
o=new G.d("Potted",k,null,n,o,0)
$.$get$c().h(0,o)
$.EH=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.v
k=H.a([$.E,$.ar],l)
H.a([],p)
o=new G.d("Canned",k,null,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["Diseased"],p)
n=$.H
k=H.a([$.aE,$.bk],l)
H.a([],p)
o=new G.d("Diseased",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["Porcupine"],p)
n=$.v
k=H.a([$.aN,$.ci],l)
H.a([],p)
o=new G.d("Porcupine",k,null,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["Fanged"],p)
n=$.H
k=H.a([$.b1,$.aN],l)
H.a([],p)
o=new G.d("Fanged",k,null,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["Basalt"],p)
n=$.v
k=H.a([$.aw,$.ao],l)
H.a([],p)
o=new G.d("Basalt",k,null,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["Obsidian"],p)
n=$.v
k=H.a([$.aS,$.ao],l)
H.a([],p)
o=new G.d("Obsidian",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["Fenestrated"],p)
n=$.v
k=H.a([$.aS,$.X],l)
H.a([],p)
o=new G.d("Fenestrated",k,null,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["Plexiglass"],p)
n=$.v
k=H.a([$.aS,$.aF],l)
H.a([],p)
o=new G.d("Plexiglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bU,$.L],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,null,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["Fungal"],p)
n=$.v
k=H.a([$.aU,$.bZ],l)
H.a([],p)
o=new G.d("Fungal",k,null,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["Thorny"],p)
n=$.H
k=H.a([$.aU,$.aN],l)
H.a([],p)
o=new G.d("Thorny",k,null,n,o,0)
$.$get$c().h(0,o)
$.FO=o
o=H.a(["Bulbed"],p)
n=$.H
k=H.a([$.aU,$.ak],l)
H.a([],p)
o=new G.d("Bulbed",k,null,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.aS,$.aL],l)
H.a([],p)
o=new G.d("Glass Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.aU,$.ce],l)
H.a([],p)
o=new G.d("Caoutchouc",k,null,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["Cellulose"],p)
n=$.v
k=H.a([$.aU,$.aF],l)
H.a([],p)
o=new G.d("Cellulose",k,null,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.aa,$.b_],l)
H.a([],p)
o=new G.d("Horrorcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bt,$.aa],l)
H.a([],p)
o=new G.d("Nightcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bt,$.a9,$.aa],l)
H.a([],p)
o=new G.d("Crazy Bus",k,null,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["Burdock"],p)
n=$.v
k=H.a([$.aU,$.ci],l)
H.a([],p)
o=new G.d("Burdock",k,null,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["Necrotic"],p)
n=$.H
k=H.a([$.b1,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Necrotic",k,null,n,o,0))
o=H.a(["Stem"],p)
n=$.v
k=H.a([$.b1,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stem",k,null,n,o,0))
o=H.a(["DryBone"],p)
n=$.H
k=H.a([$.b1,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("DryBone",k,null,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.b1,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("XyloBone",k,null,n,o,0))
o=H.a(["Ribcage"],p)
n=$.v
k=H.a([$.b1,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ribcage",k,null,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.b1,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("BoneZone",k,null,n,o,0))
o=H.a(["Creaky"],p)
n=$.J
k=H.a([$.X,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Creaky",k,null,n,o,0))
o=H.a(["Maple"],p)
n=$.v
k=H.a([$.X,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Maple",k,null,n,o,0))
o=H.a(["Mahagony"],p)
n=$.v
k=H.a([$.X,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mahagony",k,null,n,o,0))
o=H.a(["Fenced"],p)
n=$.H
k=H.a([$.X,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fenced",k,null,n,o,0))
o=H.a(["Bocote"],p)
n=$.v
k=H.a([$.X,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bocote",k,null,n,o,0))
o=H.a(["Incense"],p)
n=$.v
k=H.a([$.X,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incense",k,null,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.X,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebony",k,null,n,o,0))
o=H.a(["Birch"],p)
n=$.v
k=H.a([$.X,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Birch",k,null,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.q
k=H.a([$.X,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knock-on-Wood",k,null,n,o,0))
o=H.a(["Firewood"],p)
n=$.q
k=H.a([$.X,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firewood",k,null,n,o,0))
o=H.a(["BlackForest"],p)
n=$.ab
k=H.a([$.X,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackForest",k,null,n,o,0))
o=H.a(["Tree"],p)
n=$.v
k=H.a([$.X,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tree",k,null,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.v
k=H.a([$.X,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebonwood",k,null,n,o,0))
o=H.a(["Bark"],p)
n=$.v
k=H.a([$.X,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bark",k,null,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.X,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Caveman's",k,null,n,o,0))
o=H.a(["3D Printed"],p)
n=$.v
k=H.a([$.aF,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("3D Printed",k,null,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.L,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thesis",k,null,n,o,0))
o=H.a(["Graphene"],p)
n=$.v
k=H.a([$.L,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graphene",k,null,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.L,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prophecy",k,null,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.Q,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedsheet",k,null,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.v
k=H.a([$.aw,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gemstone",k,null,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.aw,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pet Rock",k,null,n,o,0))
o=H.a(["Sand"],p)
n=$.v
k=H.a([$.aw,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sand",k,null,n,o,0))
o=H.a(["Geode"],p)
n=$.v
k=H.a([$.aw,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Geode",k,null,n,o,0))
o=H.a(["Silicon"],p)
n=$.v
k=H.a([$.aw,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silicon",k,null,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.v
k=H.a([$.aw,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryolite",k,null,n,o,0))
o=H.a(["Meteor"],p)
n=$.v
k=H.a([$.aw,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meteor",k,null,n,o,0))
o=H.a(["Carbon"],p)
n=$.v
k=H.a([$.aw,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon",k,null,n,o,0))
o=H.a(["Mossy"],p)
n=$.H
k=H.a([$.aw,$.ci],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mossy",k,null,n,o,0))
o=H.a(["Lensed"],p)
n=$.H
k=H.a([$.Y,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lensed",k,null,n,o,0))
o=H.a(["Hide"],p)
n=$.H
k=H.a([$.Q,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hide",k,null,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.Q,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("FeatherBoa",k,null,n,o,0))
o=H.a(["Tacky"],p)
n=$.J
k=H.a([$.Q,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tacky",k,null,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.Q,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Whip",k,null,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.Q,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Costumed",k,null,n,o,0))
o=H.a(["Punk"],p)
n=$.J
k=H.a([$.Q,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Punk",k,null,n,o,0))
o=H.a(["Weighted"],p)
n=$.H
k=H.a([$.Q,$.cd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Weighted",k,null,n,o,0))
o=H.a(["Favorite"],p)
n=$.J
k=H.a([$.Q,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Favorite",k,null,n,o,0))
o=H.a(["Novelty"],p)
n=$.J
k=H.a([$.Q,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Novelty",k,null,n,o,0))
o=H.a(["Security"],p)
n=$.v
k=H.a([$.Q,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Security",k,null,n,o,0))
o=H.a(["IcePack"],p)
n=$.v
k=H.a([$.Q,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("IcePack",k,null,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.Q,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("MotionCapture",k,null,n,o,0))
o=H.a(["Silica"],p)
n=$.v
k=H.a([$.Q,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silica",k,null,n,o,0))
o=H.a(["Harp"],p)
n=$.v
k=H.a([$.Q,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Harp",k,null,n,o,0))
o=H.a(["Silk"],p)
n=$.v
k=H.a([$.Q,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silk",k,null,n,o,0))
o=H.a(["RedFlag"],p)
n=$.v
k=H.a([$.Q,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("RedFlag",k,null,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.Q,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet1",k,null,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.v
k=H.a([$.Q,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Satin",k,null,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.Q,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet2",k,null,n,o,0))
o=H.a(["Tweed"],p)
n=$.v
k=H.a([$.Q,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tweed",k,null,n,o,0))
o=H.a(["Jean"],p)
n=$.v
k=H.a([$.Q,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Jean",k,null,n,o,0))
o=H.a(["Tesla"],p)
n=$.ab
k=H.a([$.Y,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tesla",k,null,n,o,0))
o=H.a(["Ashwood"],p)
n=$.v
k=H.a([$.a3,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ashwood",k,null,n,o,0))
o=H.a(["Peashooter"],p)
n=$.v
k=H.a([$.aU,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peashooter",k,null,n,o,0))
o=H.a(["Lacquer"],p)
n=$.v
k=H.a([$.aF,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lacquer",k,null,n,o,0))
o=H.a(["Classpecty"],p)
n=$.v
k=H.a([$.V,$.U],l)
H.a([],p)
$.$get$c().h(0,new G.d("Classpecty",k,null,n,o,0))
o=H.a(["Smartass"],p)
n=$.J
k=H.a([$.Y,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smartass",k,null,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.J
k=H.a([$.bl,$.aR,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Miraculous",k,null,n,o,0))
o=H.a(["Pigeon"],p)
n=$.v
k=H.a([$.bt,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pigeon",k,null,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bt,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grimoire",k,null,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.ab
k=H.a([$.bt,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Oglogoth's",k,null,n,o,0))
o=H.a(["Echidna's"],p)
n=$.ab
k=H.a([$.a0,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Echidna's",k,null,n,o,0))
o=H.a(["Superior"],p)
n=$.ab
k=H.a([$.Y,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Superior",k,null,n,o,0))
o=H.a(["Lego"],p)
n=$.v
k=H.a([$.a0,$.aF,$.bj,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lego",k,null,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a0,$.dV,$.X,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yardstick",k,null,n,o,0))
o=H.a(["Queenly"],p)
n=$.ab
k=H.a([$.ao,$.a3,$.bl,$.aG,$.b_],l)
H.a([],p)
o=new G.d("Queenly",k,null,n,o,0)
$.$get$c().h(0,o)
$.EK=o
o=H.a(["Kingly"],p)
n=$.ab
k=H.a([$.b_,$.ak,$.cd,$.a3,$.bl],l)
H.a([],p)
o=new G.d("Kingly",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["Jack"],p)
n=$.ab
k=H.a([$.aN,$.au,$.E,$.ao],l)
H.a([],p)
o=new G.d("Jack",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a0,$.aR,$.X,$.V,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("Codpiece",k,null,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a0,$.aD,$.L,$.E,$.Y,$.V],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graceful",k,null,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a0,$.aD,$.L,$.Y,$.V,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guide",k,null,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a0,$.aE,$.L,$.Y,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Testament",k,null,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.ab
k=H.a([$.a0,$.aT,$.E,$.aN,$.au,$.eC],l)
H.a([],p)
$.$get$c().h(0,new G.d("Excalibur",k,null,n,o,0))
o=H.a(["Influential"],p)
n=$.ab
k=H.a([$.a0,$.L,$.bw,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Influential",k,null,n,o,0))
o=H.a(["Alternative"],p)
n=$.ab
k=H.a([$.a0,$.a3,$.Q,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Alternative",k,null,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.ab
k=H.a([$.a0,$.aG,$.b1,$.E,$.ft,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Valkyrie",k,null,n,o,0))
o=H.a(["Ongoing"],p)
n=$.ab
k=H.a([$.a0,$.aw,$.al,$.jI,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ongoing",k,null,n,o,0))
o=H.a(["Short"],p)
n=$.H
k=H.a([$.a0,$.Q,$.bg,$.az,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short",k,null,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a0,$.E,$.bg,$.az,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crown",k,null,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a0,$.aF,$.a9,$.ao,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gristtorrent",k,null,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a0,$.Q,$.Y,$.a3,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Robe",k,null,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a0,$.Q,$.Y,$.az,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beret",k,null,n,o,0))
o=H.a(["Blank"],p)
n=$.H
k=$.a0
j=$.L
i=$.Y
i=H.a([k,j,i,$.aD,i,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blank",i,null,n,o,0))
o=H.a(["Cueball"],p)
n=$.v
i=H.a([$.a0,$.az,$.bU,$.ak,$.fr,$.av],l)
H.a([],p)
o=new G.d("Cueball",i,null,n,o,0)
$.$get$c().h(0,o)
$.xc=o
o=H.a(["Meddler's"],p)
n=$.ab
i=H.a([$.a0,$.aD,$.L,$.bw,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meddler's",i,null,n,o,0))
o=H.a(["Scroll"],p)
n=$.ab
i=H.a([$.a3,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scroll",i,null,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.L,$.Y,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tome",i,null,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.a0,$.E,$.ao,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lockpick",i,null,n,o,0))
o=H.a(["Warped"],p)
n=$.H
i=H.a([$.a0,$.E,$.aS,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Warped",i,null,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a0,$.aR,$.X,$.aq,$.bj,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stairs",i,null,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a0,$.as,$.E,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rocket",i,null,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a0,$.a9,$.L,$.aD,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("~ATH",i,null,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a0,$.X,$.av,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Puppeted",i,null,n,o,0))
o=H.a(["Angelic"],p)
n=$.ab
i=H.a([$.a0,$.bl,$.bx,$.aT,$.aa,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Angelic",i,null,n,o,0))
o=H.a(["Vitae"],p)
n=$.v
i=H.a([$.a0,$.aI,$.aS,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vitae",i,null,n,o,0))
o=H.a(["Fluorite"],p)
n=$.v
i=H.a([$.a0,$.aT,$.bY,$.aw,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluorite",i,null,n,o,0))
o=H.a(["Janus"],p)
n=$.ab
i=H.a([$.a0,$.aG,$.aw,$.al,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Janus",i,null,n,o,0))
o=H.a(["Bacchus"],p)
n=$.ab
i=H.a([$.a0,$.ar,$.bw,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bacchus",i,null,n,o,0))
o=H.a(["TurnTable"],p)
n=$.ab
i=H.a([$.a0,$.E,$.aa,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("TurnTable",i,null,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.J
i=H.a([$.a0,$.aS,$.c5,$.aT,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("???",i,null,n,o,0))
o=H.a(["Demonite"],p)
n=$.v
i=H.a([$.E,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("Demonite",i,null,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.ab
i=H.a([$.E,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stymphalian",i,null,n,o,0))
o=H.a(["Junky"],p)
n=$.v
i=H.a([$.E,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Junky",i,null,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.v
i=H.a([$.E,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cold Iron",i,null,n,o,0))
o=H.a(["Bolted"],p)
n=$.H
i=H.a([$.E,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bolted",i,null,n,o,0))
o=H.a(["Armored"],p)
n=$.H
i=H.a([$.E,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Armored",i,null,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.v
i=H.a([$.E,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heartsteel",i,null,n,o,0))
o=H.a(["Brick"],p)
n=$.v
i=H.a([$.bU,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Brick",i,null,n,o,0))
o=H.a(["Clay"],p)
n=$.v
i=H.a([$.bU,$.ce],l)
H.a([],p)
$.$get$c().h(0,new G.d("Clay",i,null,n,o,0))
o=H.a(["Mugly"],p)
n=$.J
i=H.a([$.bU,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mugly",i,null,n,o,0))
o=H.a(["Plate"],p)
n=$.v
i=H.a([$.bU,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plate",i,null,n,o,0))
o=H.a(["Terracotta"],p)
n=$.v
i=H.a([$.bU,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Terracotta",i,null,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.v
i=H.a([$.bU,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Semiconductive",i,null,n,o,0))
o=H.a(["Vinyl"],p)
n=$.v
i=H.a([$.bU,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vinyl",i,null,n,o,0))
o=H.a(["Artisan"],p)
n=$.H
i=H.a([$.bU,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Artisan",i,null,n,o,0))
o=H.a(["Tiled"],p)
n=$.v
i=H.a([$.bU,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tiled",i,null,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.H
i=H.a([$.bU,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hand-Sculpted",i,null,n,o,0))
o=H.a(["Handicraft"],p)
n=$.J
i=H.a([$.bV,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.d("Handicraft",i,null,n,o,0))
o=H.a(["Torn"],p)
n=$.H
i=H.a([$.bV,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("Torn",i,null,n,o,0))
o=H.a(["Grotesque"],p)
n=$.J
i=H.a([$.bV,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grotesque",i,null,n,o,0))
o=H.a(["Flickering"],p)
n=$.H
i=H.a([$.bV,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Flickering",i,null,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.v
i=H.a([$.bV,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thinly Veiled",i,null,n,o,0))
o=H.a(["Fragile"],p)
n=$.H
i=H.a([$.bV,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fragile",i,null,n,o,0))
o=H.a(["Troll's"],p)
n=$.ab
i=H.a([$.bV,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Troll's",i,null,n,o,0))
o=H.a(["Sappy"],p)
n=$.v
i=H.a([$.bV,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sappy",i,null,n,o,0))
o=H.a(["Bootleg"],p)
n=$.v
i=H.a([$.bV,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bootleg",i,null,n,o,0))
o=H.a(["Distorted"],p)
n=$.v
i=H.a([$.bV,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Distorted",i,null,n,o,0))
o=H.a(["Ent's"],p)
n=$.ab
i=H.a([$.X,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ent's",i,null,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.v
i=H.a([$.X,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("WeepingWillow",i,null,n,o,0))
o=H.a(["Latex"],p)
n=$.v
i=H.a([$.X,$.ce],l)
H.a([],p)
$.$get$c().h(0,new G.d("Latex",i,null,n,o,0))
o=H.a(["Turf"],p)
n=$.v
i=H.a([$.aF,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turf",i,null,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.ce,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stress Relieving",i,null,n,o,0))
o=H.a(["R-Rated"],p)
n=$.H
i=H.a([$.ce,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("R-Rated",i,null,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.ce,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Racing",i,null,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.L,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cross Stitch",i,null,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.L,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("LoveLetter",i,null,n,o,0))
o=H.a(["EbonStone"],p)
n=$.v
i=H.a([$.aw,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("EbonStone",i,null,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.v
i=H.a([$.aw,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rock Candy",i,null,n,o,0))
o=H.a(["Smashing"],p)
n=$.J
i=H.a([$.aw,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smashing",i,null,n,o,0))
o=H.a(["Anomalous"],p)
n=$.J
i=H.a([$.bX,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anomalous",i,null,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.v
i=H.a([$.bX,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Onmoraki",i,null,n,o,0))
o=H.a(["Ghastly"],p)
n=$.J
i=H.a([$.bX,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ghastly",i,null,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.v
i=H.a([$.bX,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shade",i,null,n,o,0))
o=H.a(["Choral"],p)
n=$.v
i=H.a([$.bX,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Choral",i,null,n,o,0))
o=H.a(["Eerie"],p)
n=$.v
i=H.a([$.bX,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eerie",i,null,n,o,0))
o=H.a(["Spiritual"],p)
n=$.J
i=H.a([$.bX,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spiritual",i,null,n,o,0))
o=H.a(["Heart"],p)
n=$.v
i=H.a([$.bk,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heart",i,null,n,o,0))
o=H.a(["Primordial"],p)
n=$.v
i=H.a([$.bk,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Primordial",i,null,n,o,0))
o=H.a(["Eyeball"],p)
n=$.v
i=H.a([$.bk,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eyeball",i,null,n,o,0))
o=H.a(["Vulture"],p)
n=$.H
i=H.a([$.bk,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vulture",i,null,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bt,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackMagic",i,null,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.v
i=H.a([$.bt,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doppelganger",i,null,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.H
i=H.a([$.bt,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incomprehensible",i,null,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bt,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Destructive",i,null,n,o,0))
o=H.a(["Growling"],p)
n=$.H
i=H.a([$.ci,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Growling",i,null,n,o,0))
o=H.a(["Coconut"],p)
n=$.v
i=H.a([$.ci,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Coconut",i,null,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.ab
i=H.a([$.ci,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beastmaster's",i,null,n,o,0))
o=H.a(["Fluffy"],p)
n=$.v
i=H.a([$.ci,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluffy",i,null,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.v
i=H.a([$.aU,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fern",i,null,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.H
i=H.a([$.aU,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Four Leafed",i,null,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.v
i=H.a([$.aU,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shrubbery",i,null,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.v
i=H.a([$.aU,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ecballium",i,null,n,o,0))
o=H.a(["Truffle"],p)
n=$.v
i=H.a([$.aU,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Truffle",i,null,n,o,0))
o=H.a(["Vine"],p)
n=$.v
i=H.a([$.aU,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vine",i,null,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.v
i=H.a([$.aU,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("CorpseBlossom",i,null,n,o,0))
o=H.a(["Fruity"],p)
n=$.H
i=H.a([$.aU,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fruity",i,null,n,o,0))
o=H.a(["Squawking"],p)
n=$.H
i=H.a([$.bx,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Squawking",i,null,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.v
i=H.a([$.bx,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Poultry",i,null,n,o,0))
o=H.a(["Dove"],p)
n=$.v
i=H.a([$.bx,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dove",i,null,n,o,0))
o=H.a(["Peacock"],p)
n=$.v
i=H.a([$.bx,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peacock",i,null,n,o,0))
o=H.a(["Stork"],p)
n=$.v
i=H.a([$.bx,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stork",i,null,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.v
i=H.a([$.bx,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Zhenniao",i,null,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.v
i=H.a([$.bx,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dodo",i,null,n,o,0))
o=H.a(["Raven"],p)
n=$.uW
i=H.a([$.bx,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Raven",i,null,n,o,0))
o=H.a(["Frilled"],p)
n=$.H
i=H.a([$.bx,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Frilled",i,null,n,o,0))
o=H.a(["Horrifying"],p)
n=$.J
i=H.a([$.bZ,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Horrifying",i,null,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.au,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Burning Edge",i,null,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.au,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scapel",i,null,n,o,0))
o=H.a(["Menacing"],p)
n=$.J
i=H.a([$.b_,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Menacing",i,null,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aI,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Syringe",i,null,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.J
i=H.a([$.ar,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bitter",i,null,n,o,0))
o=H.a(["Pineapple"],p)
n=$.v
i=H.a([$.ar,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pineapple",i,null,n,o,0))
o=H.a(["Crunchy"],p)
n=$.J
i=H.a([$.ar,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crunchy",i,null,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.cd,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bass",i,null,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.cd,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rigid",i,null,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aL,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prop",i,null,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aL,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Magic Missle",i,null,n,o,0))
o=H.a(["Gangster's"],p)
n=$.ab
i=H.a([$.aL,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gangster's",i,null,n,o,0))
o=H.a(["Cupid's"],p)
n=$.ab
i=H.a([$.aL,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cupid's",i,null,n,o,0))
o=H.a(["Turreted"],p)
n=$.H
i=H.a([$.aL,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turreted",i,null,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.H
i=H.a([$.aL,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("AutoTarget",i,null,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.ab
i=H.a([$.aL,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guerilla's",i,null,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aL,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rail",i,null,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aL,$.c5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tau",i,null,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aL,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pew",i,null,n,o,0))
o=H.a(["Thermal"],p)
n=$.H
i=H.a([$.aL,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thermal",i,null,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.v
i=H.a([$.aT,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plasma",i,null,n,o,0))
o=H.a(["Shredding"],p)
n=$.v
i=H.a([$.aa,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shredding",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.v
i=H.a([$.bY,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Charmed"],p)
n=$.v
i=H.a([$.bY,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charmed",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.ab
i=H.a([$.bY,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Prospitian"],p)
n=$.ab
i=H.a([$.aT,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prospitian",i,null,n,o,0))
o=H.a(["Vigilant"],p)
n=$.H
i=H.a([$.aT,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vigilant",i,null,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.J
i=H.a([$.aT,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stand-Up",i,null,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.H
i=H.a([$.aT,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedazzled",i,null,n,o,0))
o=H.a(["Thief's"],p)
n=$.ab
i=H.a([$.ao,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thief's",i,null,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.ao,$.a3,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("InvisibilityCloak",i,null,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.H
i=H.a([$.ao,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comedy Night",i,null,n,o,0))
o=H.a(["Stealthy"],p)
n=$.J
i=H.a([$.ao,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stealthy",i,null,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.ao,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Subterfuge",i,null,n,o,0))
o=H.a(["Dersite"],p)
n=$.ab
i=H.a([$.ao,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dersite",i,null,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.ab
i=H.a([$.bj,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ambient",i,null,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bj,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anesthesia",i,null,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bj,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Supportive",i,null,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aI,$.c5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nuka",i,null,n,o,0))
o=H.a(["Contaminated"],p)
n=$.H
i=H.a([$.bS,$.c5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Contaminated",i,null,n,o,0))
o=H.a(["Unstable"],p)
n=$.H
i=H.a([$.aE,$.c5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unstable",i,null,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aE,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.d("Timebomb",i,null,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.H
i=H.a([$.a9,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short Circuiting",i,null,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aE,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relic",i,null,n,o,0))
o=H.a(["Existentialist"],p)
n=$.H
i=H.a([$.aE,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Existentialist",i,null,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.J
i=H.a([$.aE,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Apocalyptic",i,null,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bu,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dud",i,null,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bu,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guided",i,null,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bu,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bobomb",i,null,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aE,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dread",i,null,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bu,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knockback",i,null,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a9,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Paralysis",i,null,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bu,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carnage",i,null,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bu,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blast Beat",i,null,n,o,0))
o=H.a(["Corrosive"],p)
n=$.H
i=H.a([$.bu,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Corrosive",i,null,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bu,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ice Bomb",i,null,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bs,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryogenic",i,null,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a3,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spellcasting",i,null,n,o,0))
o=H.a(["Tingling"],p)
n=$.H
i=H.a([$.a9,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tingling",i,null,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bw,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rage Plague",i,null,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bS,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nerve Gas",i,null,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bS,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon Monoxide",i,null,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bS,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Neurotoxin",i,null,n,o,0))
o=H.a(["Virulent"],p)
n=$.H
i=H.a([$.bS,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Virulent",i,null,n,o,0))
o=H.a(["Toxic"],p)
n=$.H
i=H.a([$.bS,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Toxic",i,null,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bS,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Laughing Gas",i,null,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.H
i=H.a([$.aa,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Amplified",i,null,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.aa,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rap",i,null,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.aa,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Saxaphone",i,null,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.aa,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Offbeat",i,null,n,o,0))
o=H.a(["Piper's"],p)
n=$.ab
i=H.a([$.aa,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Piper's",i,null,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.aa,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Melodic",i,null,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.aa,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smooth",i,null,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.aa,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thrash",i,null,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.aa,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chant",i,null,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bw,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chewy",i,null,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bw,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Phony",i,null,n,o,0))
o=H.a(["Doctor's"],p)
n=$.ab
i=H.a([$.Y,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doctor's",i,null,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.aZ,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Straitjacketed",i,null,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.aZ,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Strapped",i,null,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.aZ,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bondage",i,null,n,o,0))
o=H.a(["Sealed"],p)
n=$.H
i=H.a([$.aZ,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sealed",i,null,n,o,0))
o=H.a(["Attractive"],p)
n=$.J
i=H.a([$.az,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Attractive",i,null,n,o,0))
o=H.a(["Relaxed"],p)
n=$.H
i=H.a([$.b2,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relaxed",i,null,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.b2,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Loveseat",i,null,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.J
i=H.a([$.ar,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comfort Food",i,null,n,o,0))
o=H.a(["Yandere"],p)
n=$.J
i=H.a([$.aB,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yandere",i,null,n,o,0))
o=H.a(["Tsundere"],p)
n=$.J
i=H.a([$.aB,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tsundere",i,null,n,o,0))
o=H.a(["Disturbed"],p)
n=$.H
i=H.a([$.av,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Disturbed",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.H
i=H.a([$.Y,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.Y,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hydroponic",i,null,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.av,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Free Range",i,null,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.ab
i=H.a([$.aB,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gentlemanly",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.H
i=H.a([$.Y,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.H
i=H.a([$.aB,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sentimental",i,null,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.H
i=H.a([$.aB,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki",i,null,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.H
i=H.a([$.aB,$.aX,$.aD,$.jJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki Literature Club",i,null,n,o,0))
o=H.a(["Banana"],p)
n=$.H
i=H.a([$.ar,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Banana",i,null,n,o,0))
o=H.a(["Mana"],p)
n=$.H
i=H.a([$.ar,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mana",i,null,n,o,0))
o=H.a(["Homemade"],p)
n=$.H
i=H.a([$.ar,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Homemade",i,null,n,o,0))
o=H.a(["Steampunk"],p)
n=$.H
i=H.a([$.a3,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Steampunk",i,null,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.H
i=H.a([$.ar,$.aW,$.a9,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("I Can't Stop Laughing",i,null,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.v
i=H.a([$.E,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Soulsteel",i,null,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.b1,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ritual",i,null,n,o,0))
o=H.a(["Inflamable"],p)
n=$.H
i=H.a([$.bV,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Inflamable",i,null,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.X,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crafting",i,null,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.aF,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Polluting",i,null,n,o,0))
o=H.a(["Insulated"],p)
n=$.H
i=H.a([$.ce,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Insulated",i,null,n,o,0))
o=H.a(["Ash"],p)
n=$.v
i=H.a([$.L,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ash",i,null,n,o,0))
o=H.a(["Delicate"],p)
n=$.H
i=H.a([$.L,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Delicate",i,null,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.ab
i=H.a([$.aS,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Glass Blower's",i,null,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.H
i=H.a([$.bk,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sunburnt",i,null,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.H
i=H.a([$.as,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pyrebitten",i,null,n,o,0))
o=H.a(["Mink"],p)
n=$.v
i=H.a([$.aB,$.ci],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mink",i,null,n,o,0))
o=H.a(["Wildfire"],p)
n=$.ab
i=H.a([$.aU,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Wildfire",i,null,n,o,0))
o=H.a(["Scarred"],p)
n=$.H
i=H.a([$.aI,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scarred",i,null,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.J
i=H.a([$.bl,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hyper Realistic",i,null,n,o,0))
o=H.a(["Hestia's"],p)
n=$.ab
i=H.a([$.bY,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hestia's",i,null,n,o,0))
o=H.a(["Smoking"],p)
n=$.H
i=H.a([$.ao,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smoking",i,null,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.H
i=H.a([$.as,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Radiator",i,null,n,o,0))
o=H.a(["Fuming"],p)
n=$.H
i=H.a([$.as,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fuming",i,null,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.H
i=H.a([$.as,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firework",i,null,n,o,0))
o=H.a(["Panicky"],p)
n=$.H
i=H.a([$.aE,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Panicky",i,null,n,o,0))
o=H.a(["Ornamental"],p)
n=$.H
i=H.a([$.bg,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ornamental",i,null,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.H
i=H.a([$.bg,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dear",i,null,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.H
i=H.a([$.bg,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Swaggy",i,null,n,o,0))
o=H.a(["Uncanny"],p)
n=$.H
i=H.a([$.aG,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Uncanny",i,null,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.H
i=H.a([$.aX,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Talkative",i,null,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.H
i=H.a([$.aB,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Waifu",i,null,n,o,0))
o=H.a(["Charming"],p)
n=$.H
i=H.a([$.a3,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charming",i,null,n,o,0))
o=H.a(["God Tier"],p)
n=$.H
i=H.a([$.V,$.U,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("God Tier",i,null,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.H
i=H.a([$.V,$.U,$.bl,$.aR,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cod Tier",i,null,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.H
i=H.a([$.V,$.U,$.bl,$.ci],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dog Tier",i,null,n,o,0))
o=H.a(["JRPG"],p)
n=$.H
i=H.a([$.eC,$.uN,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("JRPG",i,null,n,o,0))
o=H.a(["Cracked"],p)
n=$.H
i=H.a([$.aw,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cracked",i,null,n,o,0))
o=H.a(["Ruffled"],p)
n=$.H
i=H.a([$.bx,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ruffled",i,null,n,o,0))
o=H.a(["Mandrake"],p)
n=$.H
i=H.a([$.aU,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mandrake",i,null,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.H
i=H.a([$.a3,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beanstalk",i,null,n,o,0))
o=H.a(["Unnerving"],p)
n=$.H
i=H.a([$.b_,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unnerving",i,null,n,o,0))
o=H.a(["Chipped"],p)
n=$.H
l=H.a([$.bU,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chipped",l,null,n,o,0))
if($.y1==null){o=$.n0
n=$.aN
l=$.au
k=$.b1
j=new U.ai(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,null,"Claws",!1,P.a1(null,null,null,m),0,3)
j.I("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.r.h(0,o)
$.y1=j}o=$.$get$am();(o&&C.b).sm(o,0)
o=$.$get$am()
n=$.Q
l=$.xj
k=new U.ai(n,null,null,null,null,"Speedo",!1,P.a1(null,null,null,m),0,3)
k.I("Speedo",[l],null,!1,null)
k.r.h(0,n)
o.push(k)
k=$.$get$am()
o=$.eC
n=$.au
l=$.E
j=$.aN
i=new U.ai(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,null,"Sword",!1,P.a1(null,null,null,m),0,3)
i.I("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.r.h(0,o)
k.push(i)
i=$.$get$am()
k=$.n2
o=$.ak
j=$.E
l=new U.ai(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,null,"Hammer",!1,P.a1(null,null,null,m),0,3)
l.I("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.r.h(0,k)
i.push(l)
l=$.$get$am()
i=$.uS
k=$.aL
j=$.E
o=new U.ai(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,null,"Rifle",!1,P.a1(null,null,null,m),0,3)
o.I("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.r.h(0,i)
l.push(o)
o=$.$get$am()
l=$.uM
i=$.aL
j=$.E
k=new U.ai(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,null,"Pistol",!1,P.a1(null,null,null,m),0,3)
k.I("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.r.h(0,l)
o.push(k)
k=$.$get$am()
o=$.xy
l=$.aL
j=$.E
i=new U.ai(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,null,"Shotgun",!1,P.a1(null,null,null,m),0,3)
i.I("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.r.h(0,o)
k.push(i)
i=$.$get$am()
k=$.x6
o=$.aN
j=$.au
l=$.E
n=new U.ai(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,null,"Blade",!1,P.a1(null,null,null,m),0,3)
n.I("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.r.h(0,k)
i.push(n)
n=$.$get$am()
i=$.uC
k=$.aN
l=$.au
j=$.E
o=new U.ai(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,null,"Dagger",!1,P.a1(null,null,null,m),0,3)
o.I("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.r.h(0,i)
n.push(o)
o=$.$get$am()
n=$.hE
i=$.ak
j=$.bU
l=new U.ai(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,null,"Fancysanta",!1,P.a1(null,null,null,m),0,3)
l.I("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.r.h(0,n)
o.push(l)
l=$.$get$am()
o=$.xB
n=$.au
j=$.E
i=new U.ai(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,null,"Sickle",!1,P.a1(null,null,null,m),0,3)
i.I("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.r.h(0,o)
l.push(i)
i=$.$get$am()
l=$.x9
o=$.au
j=$.E
n=new U.ai(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,null,"Chainsaw",!1,P.a1(null,null,null,m),0,3)
n.I("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.r.h(0,l)
i.push(n)
n=$.$get$am()
i=$.xf
l=$.aN
j=$.E
o=new U.ai(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,null,"Fork",!1,P.a1(null,null,null,m),0,3)
o.I("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.r.h(0,i)
n.push(o)
o=$.$get$am()
n=$.uL
i=$.bx
j=$.bt
l=new U.ai(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,null,"Pigeon",!1,P.a1(null,null,null,m),0,3)
l.I("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.r.h(0,n)
o.push(l)
l=$.$get$am()
o=$.fr
n=$.cd
j=$.aw
i=$.ak
k=new U.ai(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,null,"Bowling Ball",!1,P.a1(null,null,null,m),0,3)
k.I("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.r.h(0,o)
l.push(k)
k=$.$get$am()
l=$.uD
o=$.aF
i=$.bY
j=new U.ai(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,null,"Dice",!1,P.a1(null,null,null,m),0,3)
j.I("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.r.h(0,l)
k.push(j)
j=$.$get$am()
k=$.uK
l=$.E
i=$.aN
o=new U.ai(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,null,"Needle",!1,P.a1(null,null,null,m),0,3)
o.I("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.r.h(0,k)
j.push(o)
o=$.$get$am()
j=$.uU
k=$.X
i=$.ak
l=new U.ai(j,"Very magey. 7/10.","ShittyWizardKind",null,null,"Staff",!1,P.a1(null,null,null,m),0,3)
l.I("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.r.h(0,j)
o.push(l)
l=$.$get$am()
o=$.xE
j=$.aZ
i=$.Q
k=new U.ai(o,"Probably p hard to use.","ImKinkshamingKind",null,null,"Whip",!1,P.a1(null,null,null,m),0,3)
k.I("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.r.h(0,o)
l.push(k)
k=$.$get$am()
l=$.uz
o=$.aL
i=$.aw
j=$.Q
n=$.aN
h=new U.ai(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,null,"Bow",!1,P.a1(null,null,null,m),0,3)
h.I("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.r.h(0,l)
k.push(h)
h=$.$get$am()
k=$.jJ
l=$.X
n=$.ak
j=new U.ai(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,null,"Club",!1,P.a1(null,null,null,m),0,3)
j.I("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.r.h(0,k)
h.push(j)
j=$.$get$am()
h=$.jH
k=$.X
n=new U.ai(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,null,"Battle Broom",!1,P.a1(null,null,null,m),0,3)
n.I("Battle Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.r.h(0,h)
j.push(n)
n=$.$get$am()
j=$.aD
h=$.L
k=$.ak
l=new U.ai(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,null,"Book",!1,P.a1(null,null,null,m),0,3)
l.I("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.r.h(0,j)
n.push(l)
l=$.$get$am()
n=$.xu
j=$.E
k=$.ak
h=new U.ai(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,null,"Road Sign",!1,P.a1(null,null,null,m),0,3)
h.I("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.r.h(0,n)
l.push(h)
h=$.$get$am()
l=$.uy
n=$.au
k=$.E
j=$.ak
i=new U.ai(l,"Legit.","TreeMassacreKind",null,null,"Axe",!1,P.a1(null,null,null,m),0,3)
i.I("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.r.h(0,l)
h.push(i)
i=$.$get$am()
h=$.xp
l=$.X
j=$.aN
k=new U.ai(h,"Good for chest stabs.","UseOnHorsebackKind",null,null,"Lance",!1,P.a1(null,null,null,m),0,3)
k.I("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.r.h(0,h)
i.push(k)
k=$.$get$am()
i=$.ft
h=$.E
j=$.ak
l=new U.ai(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,null,"Shield",!1,P.a1(null,null,null,m),0,3)
l.I("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.r.h(0,i)
k.push(l)
l=$.$get$am()
k=$.x8
i=$.X
j=$.ak
h=new U.ai(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,null,"Cane",!1,P.a1(null,null,null,m),0,3)
h.I("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.r.h(0,k)
l.push(h)
h=$.$get$am()
l=$.xF
k=$.aF
j=$.ak
i=new U.ai(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,null,"Yo-Yo",!1,P.a1(null,null,null,m),0,3)
i.I("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.r.h(0,l)
h.push(i)
i=$.$get$am()
h=$.xC
l=$.X
j=$.aL
k=new U.ai(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,null,"Sling",!1,P.a1(null,null,null,m),0,3)
k.I("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.r.h(0,h)
i.push(k)
k=$.$get$am()
i=$.xA
h=$.E
j=$.au
l=new U.ai(i,"So edgey.","NarutoKind",null,null,"Shuriken",!1,P.a1(null,null,null,m),0,3)
l.I("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.r.h(0,i)
k.push(l)
l=$.$get$am()
k=$.uI
i=$.E
j=$.aL
h=new U.ai(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,null,"Machine Gun",!1,P.a1(null,null,null,m),0,3)
h.I("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.r.h(0,k)
l.push(h)
h=$.$get$am()
l=$.n1
k=$.E
j=$.bu
i=new U.ai(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,null,"Grenade",!1,P.a1(null,null,null,m),0,3)
i.I("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.r.h(0,l)
h.push(i)
i=$.$get$am()
h=$.fr
l=$.ce
j=$.ak
k=new U.ai(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,null,"Ball",!1,P.a1(null,null,null,m),0,3)
k.I("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.r.h(0,h)
i.push(k)
k=$.$get$am()
i=$.xD
h=$.E
j=$.aN
l=new U.ai(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,null,"3dent",!1,P.a1(null,null,null,m),0,3)
l.I("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.r.h(0,i)
k.push(l)
l=$.$get$am()
k=$.n_
i=$.L
j=$.au
h=new U.ai(k,"An X-Men fan, I see.","YuGiOhKind",null,null,"Card",!1,P.a1(null,null,null,m),0,3)
h.I("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.r.h(0,k)
l.push(h)
h=$.$get$am()
l=$.uF
k=$.E
j=$.ak
i=new U.ai(l,"Go with what you know, I guess.","UnstoppableKind",null,null,"Frying Pan",!1,P.a1(null,null,null,m),0,3)
i.I("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.r.h(0,l)
h.push(i)
i=$.$get$am()
h=$.hD
l=$.b2
j=$.Q
k=new U.ai(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,null,"Pillow",!1,P.a1(null,null,null,m),0,3)
k.I("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.r.h(0,h)
i.push(k)
k=$.$get$am()
i=$.eB
h=$.E
j=$.aZ
l=new U.ai(i,"This could be metal as fuck.","BikerGangKind",null,null,"Chain",!1,P.a1(null,null,null,m),0,3)
l.I("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.r.h(0,i)
k.push(l)
l=$.$get$am()
k=$.uV
i=$.E
j=$.ak
h=new U.ai(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,null,"Wrench",!1,P.a1(null,null,null,m),0,3)
h.I("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.r.h(0,k)
l.push(h)
h=$.$get$am()
l=$.xz
k=$.E
j=$.ak
i=new U.ai(l,"Dual purpose.","HideTheBodiesKind",null,null,"Shovel",!1,P.a1(null,null,null,m),0,3)
i.I("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.r.h(0,l)
h.push(i)
i=$.$get$am()
h=$.uT
l=$.X
j=$.ak
k=new U.ai(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,null,"Rolling Pin",!1,P.a1(null,null,null,m),0,3)
k.I("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.r.h(0,h)
i.push(k)
k=$.$get$am()
i=$.uQ
h=$.X
j=$.aE
l=new U.ai(i,"Fuck you for picking this.","KermitsGoneBadKind",null,null,"Puppet",!1,P.a1(null,null,null,m),0,3)
l.I("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.r.h(0,i)
k.push(l)
l=$.$get$am()
k=$.uR
i=$.E
j=$.au
h=new U.ai(k,"So fucking edgey.","KermitsGoneBadKind",null,null,"Razor",!1,P.a1(null,null,null,m),0,3)
h.I("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.r.h(0,k)
l.push(h)
h=$.$get$am()
l=$.n5
k=$.E
j=$.Y
i=new U.ai(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,null,"Pen",!1,P.a1(null,null,null,m),0,3)
i.I("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.r.h(0,l)
h.push(i)
i=$.$get$am()
h=$.jI
l=$.aw
j=$.cd
k=new U.ai(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,null,"Bust",!1,P.a1(null,null,null,m),0,3)
k.I("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.r.h(0,h)
i.push(k)
k=$.$get$am()
i=$.xi
h=$.X
j=$.ak
l=new U.ai(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,null,"Golf Club",!1,P.a1(null,null,null,m),0,3)
l.I("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.r.h(0,i)
k.push(l)
l=$.$get$am()
k=$.xo
i=$.E
j=$.au
h=new U.ai(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,null,"Knife",!1,P.a1(null,null,null,m),0,3)
h.I("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.r.h(0,k)
l.push(h)
h=$.$get$am()
l=$.xx
k=$.E
j=$.au
i=new U.ai(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,null,"Scissors",!1,P.a1(null,null,null,m),0,3)
i.I("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.r.h(0,l)
h.push(i)
i=$.$get$am()
h=$.xw
l=$.E
j=$.cd
k=new U.ai(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,null,"Safe",!1,P.a1(null,null,null,m),0,3)
k.I("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.r.h(0,h)
i.push(k)
k=$.$get$am()
i=$.dV
h=$.X
j=$.ak
l=new U.ai(i,"Bitches love sticks","WeaponiseTheTreesKind",null,null,"Stick",!1,P.a1(null,null,null,m),0,3)
l.I("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
l.r.h(0,i)
k.push(l)
l=$.$get$am()
k=$.uN
i=$.E
j=$.au
m=new U.ai(k,"I lack the taste buds necessary to weigh in on the pineapple debate","HomeSliceKind",null,null,"Pizza Cutter",!1,P.a1(null,null,null,m),0,3)
m.I("Pizza Cutter",[i,j],"I lack the taste buds necessary to weigh in on the pineapple debate",!1,"HomeSliceKind")
m.r.h(0,k)
l.push(m)
m=new S.bD("Duttle","Dut",null,null)
m.b="Duttle"
$.$get$bQ().push(m)
$.wP=m
m=new S.bD("Salamander","GLUB",null,null)
m.b="Salamander"
$.$get$bQ().push(m)
$.un=m
m=new S.bD("Crocodile","NAK",null,null)
m.b="Crocodile"
$.$get$bQ().push(m)
$.ec=m
m=new S.bD("Iguana","thip",null,null)
m.b="Iguana"
$.$get$bQ().push(m)
$.ew=m
m=new S.bD("Turtle","click",null,null)
m.b="Turtle"
$.$get$bQ().push(m)
$.fl=m
m=new S.bD("Skeleton","rattle",null,null)
m.b="Skeleton"
$.$get$bQ().push(m)
$.dU=m
m=new S.bD("Robot","BEEP",null,null)
m.b="Robot"
$.$get$bQ().push(m)
$.ez=m
m=new S.bD("Chameleon","BLEP",null,null)
m.b="Chameleon"
$.$get$bQ().push(m)
$.hr=m
m=new S.bD("Axolotl","BARP",null,null)
m.b="Axolotl"
$.$get$bQ().push(m)
$.uh=m
m=new S.bD("Lizard","bleb",null,null)
m.b="Lizard"
$.$get$bQ().push(m)
$.mn=m
m=new S.bD("Snake","hiss",null,null)
m.b="Snake"
$.$get$bQ().push(m)
$.up=m
m=new S.bD("Alligator","nak",null,null)
m.b="Alligator"
$.$get$bQ().push(m)
$.iO=m
m=new S.bD("Mole","snuff",null,null)
m.b="Mole"
$.$get$bQ().push(m)
$.wR=m
m=new S.bD("Bird","tweet",null,null)
m.b="Bird"
$.$get$bQ().push(m)
$.ml=m
m=new S.bD("Wolf","howl",null,null)
m.b="Wolf"
$.$get$bQ().push(m)
$.ms=m
m=new S.bD("Newt","skitter",null,null)
m.b="Newt"
$.$get$bQ().push(m)
$.wS=m
m=new S.bD("Spider","skitter",null,null)
m.b="Spider"
$.$get$bQ().push(m)
$.iV=m
m=new S.bD("Cupid","flappa",null,null)
m.b="Cupid"
$.$get$bQ().push(m)
$.iP=m
m=new S.bD("Dragon","roar",null,null)
m.b="Dragon"
$.$get$bQ().push(m)
$.fi=m
m=new S.iw("Prospitian","murmur",null,null)
m.b="Prospitian"
$.$get$bQ().push(m)
$.AH=m
m=new S.iw("Dersite","mutter",null,null)
m.b="Dersite"
$.$get$bQ().push(m)
$.AE=m
m=new S.mM("Horror Terror","a;lkjdf",null,null)
m.b="Horror Terror"
$.$get$bQ().push(m)
$.AG=m
m=new S.bD("Jellyfish","buzz",null,null)
m.b="Jellyfish"
$.$get$bQ().push(m)
$.wQ=m
$.AI=H.a([$.up,$.iO,$.wS,$.un,$.ew,$.ec,$.fl,$.hr,$.uh,$.mn],[S.bD])
m=new T.c0(0,"spices")
$.$get$ck().push(m)
$.hw=m
m=new T.c0($.ee,"fresh baked bread")
$.$get$ck().push(m)
$.fg=m
m=new T.c0($.ee,"sweetness")
$.$get$ck().push(m)
$.cr=m
m=new T.c0($.ee,"nature")
$.$get$ck().push(m)
$.cb=m
m=new T.c0(0,"salt")
$.$get$ck().push(m)
$.mr=m
m=new T.c0($.cQ,"rot")
$.$get$ck().push(m)
$.d_=m
m=new T.c0($.cQ,"feet")
$.$get$ck().push(m)
$.AF=m
m=new T.c0(0,"oil")
$.$get$ck().push(m)
$.ey=m
m=new T.c0(0,"chlorine")
$.$get$ck().push(m)
$.uj=m
m=new T.c0(0,"nothing in particular")
$.$get$ck().push(m)
$.iU=m
m=new T.c0(0,"gunpowder")
$.$get$ck().push(m)
$.ev=m
m=new T.c0(0,"must")
$.$get$ck().push(m)
$.fj=m
m=new T.c0($.ee,"zoo animals")
$.$get$ck().push(m)
$.cP=m
m=new T.c0($.cQ,"sweat")
$.$get$ck().push(m)
$.ed=m
m=new T.c0(0,"ozone")
$.$get$ck().push(m)
$.hu=m
m=new T.c0(0,"deceit")
$.$get$ck().push(m)
$.c3=m
m=new T.c0($.cQ,"blood")
$.$get$ck().push(m)
$.dn=m
m=new T.c0($.cQ,"smoke")
$.$get$ck().push(m)
$.fk=m
m=new K.bT($.cQ,"creepy")
$.$get$ca().push(m)
$.c2=m
m=new K.bT($.ee,"calm")
$.$get$ca().push(m)
$.aQ=m
m=new K.bT($.cQ,"frantic")
$.$get$ca().push(m)
$.cg=m
m=new K.bT(0,"like nothing")
$.$get$ca().push(m)
$.iT=m
m=new K.bT($.ee,"energizing")
$.$get$ca().push(m)
$.c4=m
m=new K.bT(0,"studious")
$.$get$ca().push(m)
$.cC=m
m=new K.bT(0,"dangerous")
$.$get$ca().push(m)
$.dp=m
m=new K.bT(0,"glamorous")
$.$get$ca().push(m)
$.dS=m
m=new K.bT(0,"romantic")
$.$get$ca().push(m)
$.hv=m
m=new K.bT($.ee,"creative")
$.$get$ca().push(m)
$.fh=m
m=new K.bT(0,"lucky")
$.$get$ca().push(m)
$.mo=m
m=new K.bT(0,"happy")
$.$get$ca().push(m)
$.dz=m
m=new K.bT(0,"heroic")
$.$get$ca().push(m)
$.dq=m
m=new K.bT($.cQ,"stupid")
$.$get$ca().push(m)
$.dB=m
m=new K.bT(0,"lucky")
$.$get$ca().push(m)
$.mo=m
m=new K.bT(0,"claustrophobic")
$.$get$ca().push(m)
$.wO=m
m=new K.bT(0,"overheated")
$.$get$ca().push(m)
$.mp=m
m=new K.bT($.cQ,"confusing")
$.$get$ca().push(m)
$.mm=m
m=new K.bT(0,"contemplatative")
$.$get$ca().push(m)
$.cZ=m
m=new M.bA(0,"clanking")
$.$get$bN().push(m)
$.cO=m
m=new M.bA(0,"laughing")
$.$get$bN().push(m)
$.cB=m
m=new M.bA($.ee,"rustling")
$.$get$bN().push(m)
$.bf=m
m=new M.bA($.cQ,"screaming")
$.$get$bN().push(m)
$.eA=m
m=new M.bA($.cQ,"foot steps")
$.$get$bN().push(m)
$.iR=m
m=new M.bA($.cQ,"beeping")
$.$get$bN().push(m)
$.eu=m
m=new M.bA($.cQ,"whispering")
$.$get$bN().push(m)
$.wU=m
m=new M.bA(0,"clacking")
$.$get$bN().push(m)
$.hs=m
m=new M.bA(0,"applause")
$.$get$bN().push(m)
$.cG=m
m=new M.bA(0,"jazz")
$.$get$bN().push(m)
$.ex=m
m=new M.bA(0,"disco")
$.$get$bN().push(m)
$.ul=m
m=new M.bA(0,"drums")
$.$get$bN().push(m)
$.ht=m
m=new M.bA(0,"echoing")
$.$get$bN().push(m)
$.iQ=m
m=new M.bA($.cQ,"roaring")
$.$get$bN().push(m)
$.mq=m
m=new M.bA($.cQ,"gunfire")
$.$get$bN().push(m)
$.iS=m
m=new M.bA(0,"music")
$.$get$bN().push(m)
$.cq=m
m=new M.bA(0,"singing")
$.$get$bN().push(m)
$.uo=m
m=new M.bA(0,"chanting")
$.$get$bN().push(m)
$.ui=m
m=new M.bA(0,"whistling")
$.$get$bN().push(m)
$.fm=m
m=new M.bA($.ee,"nature")
$.$get$bN().push(m)
$.dA=m
m=new M.bA(0,"croaking")
$.$get$bN().push(m)
$.uk=m
m=new M.bA(0,"silence")
$.$get$bN().push(m)
$.dT=m
m=new M.bA(0,"pulsing")
$.$get$bN().push(m)
$.um=m
m=new M.bA(0,"ticking")
$.$get$bN().push(m)
$.wT=m
m=H.a([],p)
o=[X.G,P.W]
n=A.a6
l=E.P
k=[l]
j=[A.h6]
m=new S.no(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.w(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Knight",3,!0,!1)
$.Hd=m
m=P.l(H.a([new E.P($.cx,0.4,!1)],k),l)
i=H.a([],p)
m=new S.oX(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.w(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Seer",6,!0,!1)
$.Hp=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.l9("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.w(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Bard",9,!0,!1)
$.H9=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.mJ("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.w(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Heir",8,!0,!1)
$.Hc=m
m=H.a([],p)
m=new U.nI(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.w(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Maid",0,!0,!1)
$.Hg=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.oN(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.w(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Rogue",4,!0,!1)
$.Hl=m
m=H.a([],p)
m=new V.of(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.w(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Page",1,!0,!1)
$.Hj=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.pU(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.w(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Thief",7,!0,!1)
$.Hs=m
m=P.l(H.a([new E.P($.cx,0.1,!1)],k),l)
i=H.a([],p)
m=new R.pH(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.w(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Sylph",5,!0,!1)
$.Hr=m
m=H.a([],p)
m=new N.oz("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.w(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Prince",10,!0,!1)
$.Hk=m
m=P.l(H.a([new E.P($.cx,0.1,!1)],k),l)
i=H.a([],p)
m=new M.qp("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.w(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Witch",11,!0,!1)
$.Hu=m
m=P.l(H.a([new E.P($.cx,0.4,!1)],k),l)
i=H.a([],p)
m=new S.nH("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.w(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Mage",2,!0,!1)
$.Hf=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.l(H.a([new E.P($.cx,3,!1),new E.P($.y3,-2,!1)],k),l)
e=H.a([],p)
m=new E.qk("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.w(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Waste",12,!1,!1)
$.Ht=m
m=H.a([],p)
m=new Y.oU("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.w(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Scout",13,!1,!1)
$.Hn=m
m=P.l(H.a([new E.P($.cx,0.5,!1)],k),l)
i=H.a([],p)
m=new L.oV("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.w(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Scribe",15,!1,!1)
$.Ho=m
m=P.l(H.a([new E.P($.cx,0.5,!1)],k),l)
i=H.a([],p)
m=new E.oS(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.w(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Sage",14,!1,!1)
$.Hm=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.mH("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.w(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Guide",16,!1,!1)
$.Hb=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.l(H.a([new E.P($.cx,3,!1)],k),l)
g=H.a([],p)
m=new Y.mG(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.w(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Grace",17,!1,!1)
$.Ha=m
m=P.l(H.a([new E.P($.cx,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nS("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.w(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Muse",18,!1,!1)
$.Hh=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.K(null,null,n)
h=P.l(H.a([new E.P($.cx,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.nF("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.w(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Lord",19,!1,!1)
$.He=m
m=P.l(H.a([new E.P($.cx,-0.1,!1),new E.P($.dH,1,!1)],k),l)
i=H.a([],p)
m=new Y.p5("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.w(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.K(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ac("Smith",20,!1,!1)
$.Hq=m
$.Hi=T.H8("Null",255,!1,!0)
m=A.e9
i=P.D
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#00ff00"),!0)
h.j(0,$.b5,L.e("#EFEFEF"),!0)
h.j(0,$.b4,L.e("#DEDEDE"),!0)
h.j(0,$.be,L.e("#FF2106"),!0)
h.j(0,$.bd,L.e("#B01200"),!0)
h.j(0,$.b7,L.e("#2F2F30"),!0)
h.j(0,$.b8,L.e("#1D1D1D"),!0)
h.j(0,$.b6,L.e("#080808"),!0)
h.j(0,$.bc,L.e("#030303"),!0)
h.j(0,$.bb,L.e("#242424"),!0)
h.j(0,$.ba,L.e("#333333"),!0)
h.j(0,$.b9,L.e("#141414"),!0)
g=P.l(H.a(["Frogs"],p),q)
f=P.l(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.l(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.l(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.l(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.l(H.a([new E.P($.dH,2,!0),new E.P($.eP,1,!0),new E.P($.eQ,-2,!0)],k),l)
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF8700"),!0)
a.j(0,$.be,L.e("#7F7F7F"),!0)
a.j(0,$.bd,L.e("#727272"),!0)
a.j(0,$.b7,L.e("#A3A3A3"),!0)
a.j(0,$.b8,L.e("#999999"),!0)
a.j(0,$.b6,L.e("#898989"),!0)
a.j(0,$.bc,L.e("#EFEFEF"),!0)
a.j(0,$.bb,L.e("#DBDBDB"),!0)
a.j(0,$.ba,L.e("#C6C6C6"),!0)
a.j(0,$.b9,L.e("#ADADAD"),!0)
a=new N.p7(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
a.an(0,"Space",!0,!1)
$.A1=a
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#ff0000"),!0)
a.j(0,$.b5,L.e("#FF2106"),!0)
a.j(0,$.b4,L.e("#AD1604"),!0)
a.j(0,$.be,L.e("#030303"),!0)
a.j(0,$.bd,L.e("#242424"),!0)
a.j(0,$.b7,L.e("#510606"),!0)
a.j(0,$.b8,L.e("#3C0404"),!0)
a.j(0,$.b6,L.e("#1F0000"),!0)
a.j(0,$.bc,L.e("#B70D0E"),!0)
a.j(0,$.bb,L.e("#970203"),!0)
a.j(0,$.ba,L.e("#8E1516"),!0)
a.j(0,$.b9,L.e("#640707"),!0)
b=P.l(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.l(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.l(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.l(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.l(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.l(H.a([new E.P($.i5,2,!0),new E.P($.eQ,1,!0),new E.P($.eO,-2,!0)],k),l)
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF8700"),!0)
h.j(0,$.be,L.e("#7F7F7F"),!0)
h.j(0,$.bd,L.e("#727272"),!0)
h.j(0,$.b7,L.e("#A3A3A3"),!0)
h.j(0,$.b8,L.e("#999999"),!0)
h.j(0,$.b6,L.e("#898989"),!0)
h.j(0,$.bc,L.e("#EFEFEF"),!0)
h.j(0,$.bb,L.e("#DBDBDB"),!0)
h.j(0,$.ba,L.e("#C6C6C6"),!0)
h.j(0,$.b9,L.e("#ADADAD"),!0)
h=new N.pV(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
h.an(1,"Time",!0,!1)
$.A2=h
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#3399ff"),!0)
h.j(0,$.b5,L.e("#10E0FF"),!0)
h.j(0,$.b4,L.e("#00A4BB"),!0)
h.j(0,$.be,L.e("#FEFD49"),!0)
h.j(0,$.bd,L.e("#D6D601"),!0)
h.j(0,$.b7,L.e("#0052F3"),!0)
h.j(0,$.b8,L.e("#0046D1"),!0)
h.j(0,$.b6,L.e("#003396"),!0)
h.j(0,$.bc,L.e("#0087EB"),!0)
h.j(0,$.bb,L.e("#0070ED"),!0)
h.j(0,$.ba,L.e("#006BE1"),!0)
h.j(0,$.b9,L.e("#0054B0"),!0)
g=P.l(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.l(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.l(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.l(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.l(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.l(H.a([new E.P($.eQ,2,!0),new E.P($.de,1,!0),new E.P($.eP,-1,!0),new E.P($.em,-1,!0),new E.P($.cx,0.05,!1)],k),l)
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF8700"),!0)
a.j(0,$.be,L.e("#7F7F7F"),!0)
a.j(0,$.bd,L.e("#727272"),!0)
a.j(0,$.b7,L.e("#A3A3A3"),!0)
a.j(0,$.b8,L.e("#999999"),!0)
a.j(0,$.b6,L.e("#898989"),!0)
a.j(0,$.bc,L.e("#EFEFEF"),!0)
a.j(0,$.bb,L.e("#DBDBDB"),!0)
a.j(0,$.ba,L.e("#C6C6C6"),!0)
a.j(0,$.b9,L.e("#ADADAD"),!0)
a=new T.lg(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
a.an(2,"Breath",!0,!1)
$.zP=a
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#003300"),!0)
a.j(0,$.b5,L.e("#0F0F0F"),!0)
a.j(0,$.b4,L.e("#010101"),!0)
a.j(0,$.be,L.e("#E8C15E"),!0)
a.j(0,$.bd,L.e("#C7A140"),!0)
a.j(0,$.b7,L.e("#1E211E"),!0)
a.j(0,$.b8,L.e("#141614"),!0)
a.j(0,$.b6,L.e("#0B0D0B"),!0)
a.j(0,$.bc,L.e("#204020"),!0)
a.j(0,$.bb,L.e("#11200F"),!0)
a.j(0,$.ba,L.e("#192C16"),!0)
a.j(0,$.b9,L.e("#121F10"),!0)
b=P.l(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.l(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.l(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.l(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.l(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.l(H.a([new E.P($.dH,2,!0),new E.P($.eO,1,!0),new E.P($.i5,-1,!0),new E.P($.eP,-1,!0),new E.P($.cx,0.01,!1)],k),l)
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF8700"),!0)
h.j(0,$.be,L.e("#7F7F7F"),!0)
h.j(0,$.bd,L.e("#727272"),!0)
h.j(0,$.b7,L.e("#A3A3A3"),!0)
h.j(0,$.b8,L.e("#999999"),!0)
h.j(0,$.b6,L.e("#898989"),!0)
h.j(0,$.bc,L.e("#EFEFEF"),!0)
h.j(0,$.bb,L.e("#DBDBDB"),!0)
h.j(0,$.ba,L.e("#C6C6C6"),!0)
h.j(0,$.b9,L.e("#ADADAD"),!0)
h=new U.lP(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
h.an(3,"Doom",!0,!1)
$.zQ=h
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#993300"),!0)
h.j(0,$.b5,L.e("#BA1016"),!0)
h.j(0,$.b4,L.e("#820B0F"),!0)
h.j(0,$.be,L.e("#381B76"),!0)
h.j(0,$.bd,L.e("#1E0C47"),!0)
h.j(0,$.b7,L.e("#290704"),!0)
h.j(0,$.b8,L.e("#230200"),!0)
h.j(0,$.b6,L.e("#110000"),!0)
h.j(0,$.bc,L.e("#3D190A"),!0)
h.j(0,$.bb,L.e("#2C1207"),!0)
h.j(0,$.ba,L.e("#5C2913"),!0)
h.j(0,$.b9,L.e("#4C1F0D"),!0)
g=P.l(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.l(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.l(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.l(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.l(H.a([new E.P($.em,2,!0),new E.P($.de,1,!0),new E.P($.dH,-2,!0)],k),l)
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF8700"),!0)
a.j(0,$.be,L.e("#7F7F7F"),!0)
a.j(0,$.bd,L.e("#727272"),!0)
a.j(0,$.b7,L.e("#A3A3A3"),!0)
a.j(0,$.b8,L.e("#999999"),!0)
a.j(0,$.b6,L.e("#898989"),!0)
a.j(0,$.bc,L.e("#EFEFEF"),!0)
a.j(0,$.bb,L.e("#DBDBDB"),!0)
a.j(0,$.ba,L.e("#C6C6C6"),!0)
a.j(0,$.b9,L.e("#ADADAD"),!0)
a=new T.le(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
a.an(4,"Blood",!0,!1)
$.zO=a
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#ff3399"),!0)
a.j(0,$.b5,L.e("#BD1864"),!0)
a.j(0,$.b4,L.e("#780F3F"),!0)
a.j(0,$.be,L.e("#1D572E"),!0)
a.j(0,$.bd,L.e("#11371D"),!0)
a.j(0,$.b7,L.e("#4C1026"),!0)
a.j(0,$.b8,L.e("#3C0D1F"),!0)
a.j(0,$.b6,L.e("#260914"),!0)
a.j(0,$.bc,L.e("#6B0829"),!0)
a.j(0,$.bb,L.e("#4A0818"),!0)
a.j(0,$.ba,L.e("#55142A"),!0)
a.j(0,$.b9,L.e("#3D0E1E"),!0)
b=P.l(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.l(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.l(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.l(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.l(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.l(H.a([new E.P($.em,1,!0),new E.l2(null,1,!0)],k),l)
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF8700"),!0)
h.j(0,$.be,L.e("#7F7F7F"),!0)
h.j(0,$.bd,L.e("#727272"),!0)
h.j(0,$.b7,L.e("#A3A3A3"),!0)
h.j(0,$.b8,L.e("#999999"),!0)
h.j(0,$.b6,L.e("#898989"),!0)
h.j(0,$.bc,L.e("#EFEFEF"),!0)
h.j(0,$.bb,L.e("#DBDBDB"),!0)
h.j(0,$.ba,L.e("#C6C6C6"),!0)
h.j(0,$.b9,L.e("#ADADAD"),!0)
h=new T.mI(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
h.an(5,"Heart",!0,!1)
$.zS=h
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#3da35a"),!0)
h.j(0,$.b5,L.e("#06FFC9"),!0)
h.j(0,$.b4,L.e("#04A885"),!0)
h.j(0,$.be,L.e("#6E0E2E"),!0)
h.j(0,$.bd,L.e("#4A0818"),!0)
h.j(0,$.b7,L.e("#1D572E"),!0)
h.j(0,$.b8,L.e("#164524"),!0)
h.j(0,$.b6,L.e("#11371D"),!0)
h.j(0,$.bc,L.e("#3DA35A"),!0)
h.j(0,$.bb,L.e("#2E7A43"),!0)
h.j(0,$.ba,L.e("#3B7E4F"),!0)
h.j(0,$.b9,L.e("#265133"),!0)
g=P.l(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.l(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.l(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.l(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.l(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.l(H.a([new E.P($.eO,2,!0),new E.P($.i5,1,!0),new E.P($.dH,-2,!0)],k),l)
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF8700"),!0)
a.j(0,$.be,L.e("#7F7F7F"),!0)
a.j(0,$.bd,L.e("#727272"),!0)
a.j(0,$.b7,L.e("#A3A3A3"),!0)
a.j(0,$.b8,L.e("#999999"),!0)
a.j(0,$.b6,L.e("#898989"),!0)
a.j(0,$.bc,L.e("#EFEFEF"),!0)
a.j(0,$.bb,L.e("#DBDBDB"),!0)
a.j(0,$.ba,L.e("#C6C6C6"),!0)
a.j(0,$.b9,L.e("#ADADAD"),!0)
a=new V.nR(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
a.an(6,"Mind",!0,!1)
$.zY=a
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#ff9933"),!0)
a.j(0,$.b5,L.e("#FEFD49"),!0)
a.j(0,$.b4,L.e("#FEC910"),!0)
a.j(0,$.be,L.e("#10E0FF"),!0)
a.j(0,$.bd,L.e("#00A4BB"),!0)
a.j(0,$.b7,L.e("#FA4900"),!0)
a.j(0,$.b8,L.e("#E94200"),!0)
a.j(0,$.b6,L.e("#C33700"),!0)
a.j(0,$.bc,L.e("#FF8800"),!0)
a.j(0,$.bb,L.e("#D66E04"),!0)
a.j(0,$.ba,L.e("#E76700"),!0)
a.j(0,$.b9,L.e("#CA5B00"),!0)
b=P.l(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.l(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.l(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.l(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.l(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.l(H.a([new E.P($.i4,2,!0),new E.P($.eO,1,!0),new E.P($.de,-1,!0),new E.P($.eP,-1,!0),new E.P($.cx,0.2,!1)],k),l)
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF8700"),!0)
h.j(0,$.be,L.e("#7F7F7F"),!0)
h.j(0,$.bd,L.e("#727272"),!0)
h.j(0,$.b7,L.e("#A3A3A3"),!0)
h.j(0,$.b8,L.e("#999999"),!0)
h.j(0,$.b6,L.e("#898989"),!0)
h.j(0,$.bc,L.e("#EFEFEF"),!0)
h.j(0,$.bb,L.e("#DBDBDB"),!0)
h.j(0,$.ba,L.e("#C6C6C6"),!0)
h.j(0,$.b9,L.e("#ADADAD"),!0)
h=new G.ns(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
h.an(7,"Light",!0,!1)
$.zX=h
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#000066"),!0)
h.j(0,$.b5,L.e("#0B1030"),!0)
h.j(0,$.b4,L.e("#04091A"),!0)
h.j(0,$.be,L.e("#CCC4B5"),!0)
h.j(0,$.bd,L.e("#A89F8D"),!0)
h.j(0,$.b7,L.e("#00164F"),!0)
h.j(0,$.b8,L.e("#00103C"),!0)
h.j(0,$.b6,L.e("#00071A"),!0)
h.j(0,$.bc,L.e("#033476"),!0)
h.j(0,$.bb,L.e("#02285B"),!0)
h.j(0,$.ba,L.e("#004CB2"),!0)
h.j(0,$.b9,L.e("#003E91"),!0)
g=P.l(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.l(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.l(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.l(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.l(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.l(H.a([new E.h1(D.vI(),null,3,!0),new E.h1(D.vI(),null,-1,!0),new E.P($.i5,-1,!0),new E.P($.cx,0.2,!1)],k),l)
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF8700"),!0)
a.j(0,$.be,L.e("#7F7F7F"),!0)
a.j(0,$.bd,L.e("#727272"),!0)
a.j(0,$.b7,L.e("#A3A3A3"),!0)
a.j(0,$.b8,L.e("#999999"),!0)
a.j(0,$.b6,L.e("#898989"),!0)
a.j(0,$.bc,L.e("#EFEFEF"),!0)
a.j(0,$.bb,L.e("#DBDBDB"),!0)
a.j(0,$.ba,L.e("#C6C6C6"),!0)
a.j(0,$.b9,L.e("#ADADAD"),!0)
a=new Q.qj(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
a.an(8,"Void",!0,!1)
$.A3=a
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#9900cc"),!0)
a.j(0,$.b5,L.e("#974AA7"),!0)
a.j(0,$.b4,L.e("#6B347D"),!0)
a.j(0,$.be,L.e("#3D190A"),!0)
a.j(0,$.bd,L.e("#2C1207"),!0)
a.j(0,$.b7,L.e("#7C3FBA"),!0)
a.j(0,$.b8,L.e("#6D34A6"),!0)
a.j(0,$.b6,L.e("#592D86"),!0)
a.j(0,$.bc,L.e("#381B76"),!0)
a.j(0,$.bb,L.e("#1E0C47"),!0)
a.j(0,$.ba,L.e("#281D36"),!0)
a.j(0,$.b9,L.e("#1D1526"),!0)
b=P.l(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.l(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.l(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.l(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.l(H.a([new E.P($.i6,2,!0),new E.P($.eQ,1,!0),new E.P($.de,-1,!0),new E.P($.em,-1,!0),new E.P($.cx,0.01,!1)],k),l)
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF8700"),!0)
h.j(0,$.be,L.e("#7F7F7F"),!0)
h.j(0,$.bd,L.e("#727272"),!0)
h.j(0,$.b7,L.e("#A3A3A3"),!0)
h.j(0,$.b8,L.e("#999999"),!0)
h.j(0,$.b6,L.e("#898989"),!0)
h.j(0,$.bc,L.e("#EFEFEF"),!0)
h.j(0,$.bb,L.e("#DBDBDB"),!0)
h.j(0,$.ba,L.e("#C6C6C6"),!0)
h.j(0,$.b9,L.e("#ADADAD"),!0)
h=new E.oE(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
h.an(9,"Rage",!0,!1)
$.A_=h
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#ffcc66"),!0)
h.j(0,$.b5,L.e("#FDF9EC"),!0)
h.j(0,$.b4,L.e("#D6C794"),!0)
h.j(0,$.be,L.e("#164524"),!0)
h.j(0,$.bd,L.e("#06280C"),!0)
h.j(0,$.b7,L.e("#FFC331"),!0)
h.j(0,$.b8,L.e("#F7BB2C"),!0)
h.j(0,$.b6,L.e("#DBA523"),!0)
h.j(0,$.bc,L.e("#FFE094"),!0)
h.j(0,$.bb,L.e("#E8C15E"),!0)
h.j(0,$.ba,L.e("#F6C54A"),!0)
h.j(0,$.b9,L.e("#EDAF0C"),!0)
g=P.l(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.l(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.l(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.l(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.l(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.l(H.a([new E.P($.de,2,!0),new E.P($.i4,1,!0),new E.h1(D.vI(),null,-2,!0)],k),l)
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF8700"),!0)
a.j(0,$.be,L.e("#7F7F7F"),!0)
a.j(0,$.bd,L.e("#727272"),!0)
a.j(0,$.b7,L.e("#A3A3A3"),!0)
a.j(0,$.b8,L.e("#999999"),!0)
a.j(0,$.b6,L.e("#898989"),!0)
a.j(0,$.bc,L.e("#EFEFEF"),!0)
a.j(0,$.bb,L.e("#DBDBDB"),!0)
a.j(0,$.ba,L.e("#C6C6C6"),!0)
a.j(0,$.b9,L.e("#ADADAD"),!0)
a=new X.mL(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
a.an(10,"Hope",!0,!1)
$.zT=a
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#494132"),!0)
a.j(0,$.b5,L.e("#76C34E"),!0)
a.j(0,$.b4,L.e("#4F8234"),!0)
a.j(0,$.be,L.e("#00164F"),!0)
a.j(0,$.bd,L.e("#00071A"),!0)
a.j(0,$.b7,L.e("#605542"),!0)
a.j(0,$.b8,L.e("#494132"),!0)
a.j(0,$.b6,L.e("#2D271E"),!0)
a.j(0,$.bc,L.e("#CCC4B5"),!0)
a.j(0,$.bb,L.e("#A89F8D"),!0)
a.j(0,$.ba,L.e("#A29989"),!0)
a.j(0,$.b9,L.e("#918673"),!0)
b=P.l(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.l(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.l(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.l(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.l(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.l(H.a([new E.P($.eP,2,!0),new E.P($.i6,1,!0),new E.P($.dH,-2,!0)],k),l)
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF8700"),!0)
h.j(0,$.be,L.e("#7F7F7F"),!0)
h.j(0,$.bd,L.e("#727272"),!0)
h.j(0,$.b7,L.e("#A3A3A3"),!0)
h.j(0,$.b8,L.e("#999999"),!0)
h.j(0,$.b6,L.e("#898989"),!0)
h.j(0,$.bc,L.e("#EFEFEF"),!0)
h.j(0,$.bb,L.e("#DBDBDB"),!0)
h.j(0,$.ba,L.e("#C6C6C6"),!0)
h.j(0,$.b9,L.e("#ADADAD"),!0)
h=new K.nr(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
h.an(11,"Life",!0,!1)
$.zW=h
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#9630BF"),!0)
h.j(0,$.b5,L.e("#cc87e8"),!0)
h.j(0,$.b4,L.e("#9545b7"),!0)
h.j(0,$.be,L.e("#ae769b"),!0)
h.j(0,$.bd,L.e("#8f577c"),!0)
h.j(0,$.b7,L.e("#9630bf"),!0)
h.j(0,$.b8,L.e("#693773"),!0)
h.j(0,$.b6,L.e("#4c2154"),!0)
h.j(0,$.bc,L.e("#fcf9bd"),!0)
h.j(0,$.bb,L.e("#e0d29e"),!0)
h.j(0,$.ba,L.e("#bdb968"),!0)
h.j(0,$.b9,L.e("#ab9b55"),!0)
g=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.l(H.a([new E.P($.dH,3,!0),new E.P($.de,-2,!0)],k),l)
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF8700"),!0)
a.j(0,$.be,L.e("#7F7F7F"),!0)
a.j(0,$.bd,L.e("#727272"),!0)
a.j(0,$.b7,L.e("#A3A3A3"),!0)
a.j(0,$.b8,L.e("#999999"),!0)
a.j(0,$.b6,L.e("#898989"),!0)
a.j(0,$.bc,L.e("#EFEFEF"),!0)
a.j(0,$.bb,L.e("#DBDBDB"),!0)
a.j(0,$.ba,L.e("#C6C6C6"),!0)
a.j(0,$.b9,L.e("#ADADAD"),!0)
a=new Z.lQ(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
a.an(12,"Dream",!1,!1)
$.zR=a
a=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b3,L.e("#003300"),!0)
a.j(0,$.b5,L.e("#383838"),!0)
a.j(0,$.b4,L.e("#000000"),!0)
a.j(0,$.be,L.e("#2b1130"),!0)
a.j(0,$.bd,L.e("#130017"),!0)
a.j(0,$.b7,L.e("#eba900"),!0)
a.j(0,$.b8,L.e("#c28900"),!0)
a.j(0,$.b6,L.e("#855900"),!0)
a.j(0,$.bc,L.e("#ffd800"),!0)
a.j(0,$.bb,L.e("#d1a900"),!0)
a.j(0,$.ba,L.e("#44244d"),!0)
a.j(0,$.b9,L.e("#271128"),!0)
b=P.l(H.a(["Law","Courts","Trials","Rules","Edicts","Control","Cones","Order"],p),q)
c=P.l(H.a(["LEGAL LAD","SHERRIF SURESHOT","CONE KOHAI"],p),q)
d=P.l(H.a(["Lawyer","Litigator","Lands","Laborer","Lady","Lad","Lamb","Lawman","Luchador","Lover","Legislacerator"],p),q)
e=P.l(H.a(["Judge","Law Abiding","Legal","Courting","Trail","Edict","Jury","Baliff","Verdict","Sentence","Jail","Executioner"],p),q)
f=P.l(H.a(["Themis","Phoenix","Wright","Jupiter","Dike","Marduk","Fortuna"],p),q)
g=P.l(H.a([new E.P($.eO,2,!0),new E.P($.de,1,!0),new E.P($.eQ,-2,!0),new E.P($.cx,-0.1,!1)],k),l)
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF8700"),!0)
h.j(0,$.be,L.e("#7F7F7F"),!0)
h.j(0,$.bd,L.e("#727272"),!0)
h.j(0,$.b7,L.e("#A3A3A3"),!0)
h.j(0,$.b8,L.e("#999999"),!0)
h.j(0,$.b6,L.e("#898989"),!0)
h.j(0,$.bc,L.e("#EFEFEF"),!0)
h.j(0,$.bb,L.e("#DBDBDB"),!0)
h.j(0,$.ba,L.e("#C6C6C6"),!0)
h.j(0,$.b9,L.e("#ADADAD"),!0)
h=new Q.np(0.01,0.9,0.1,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death's Lawyer plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["orders","rules","edicts","sentences"],["chains","gavel","caution tape","rule book","dictionary","wig","handbook","lock"],!0,!0,f,g,0.01,0.01,0.01,0.5,14,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
h.an(14,"Law",!1,!1)
$.zV=h
h=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b3,L.e("#00ff00"),!0)
h.j(0,$.b5,L.e("#00ff00"),!0)
h.j(0,$.b4,L.e("#00ff00"),!0)
h.j(0,$.be,L.e("#00ff00"),!0)
h.j(0,$.bd,L.e("#00cf00"),!0)
h.j(0,$.b7,L.e("#171717"),!0)
h.j(0,$.b8,L.e("#080808"),!0)
h.j(0,$.b6,L.e("#080808"),!0)
h.j(0,$.bc,L.e("#616161"),!0)
h.j(0,$.bb,L.e("#3b3b3b"),!0)
h.j(0,$.ba,L.e("#4a4a4a"),!0)
h.j(0,$.b9,L.e("#292929"),!0)
g=P.l(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
f=P.l(H.a(["Shogun"],p),q)
e=P.l(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
d=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
c=P.l(H.a([new E.P($.i6,13,!0)],k),l)
b=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
b.j(0,$.b3,L.e("#FF9B00"),!0)
b.j(0,$.b5,L.e("#FF9B00"),!0)
b.j(0,$.b4,L.e("#FF8700"),!0)
b.j(0,$.be,L.e("#7F7F7F"),!0)
b.j(0,$.bd,L.e("#727272"),!0)
b.j(0,$.b7,L.e("#A3A3A3"),!0)
b.j(0,$.b8,L.e("#999999"),!0)
b.j(0,$.b6,L.e("#898989"),!0)
b.j(0,$.bc,L.e("#EFEFEF"),!0)
b.j(0,$.bb,L.e("#DBDBDB"),!0)
b.j(0,$.ba,L.e("#C6C6C6"),!0)
b.j(0,$.b9,L.e("#ADADAD"),!0)
b=new K.oT(13,13,13,h,g,f,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",d,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],c,0.01,0.01,0.01,0.5,13,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!0,1,b,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
b.an(13,"Sauce",!1,!0)
$.A0=b
b=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
b.j(0,$.b3,L.e("#080808"),!0)
b.j(0,$.b5,L.e("#BA1016"),!0)
b.j(0,$.b4,L.e("#820B0F"),!0)
b.j(0,$.be,L.e("#381B76"),!0)
b.j(0,$.bd,L.e("#1E0C47"),!0)
b.j(0,$.b7,L.e("#290704"),!0)
b.j(0,$.b8,L.e("#230200"),!0)
b.j(0,$.b6,L.e("#110000"),!0)
b.j(0,$.bc,L.e("#3D190A"),!0)
b.j(0,$.bb,L.e("#2C1207"),!0)
b.j(0,$.ba,L.e("#5C2913"),!0)
b.j(0,$.b9,L.e("#4C1F0D"),!0)
c=P.l(H.a(["Bonds","Unions","Ink","Color","Nostalgia"],p),q)
d=P.l(H.a(["FRIEND HOARDER YOUTH","INKSTERMINATOR","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Investor","Investigator","Idealist","Inhabitant","Innovator","Interpreter"],p),q)
f=P.l(H.a(["Ink","Flow","Charge","Awakening","Friendship","Trusting","Union","Team","Fresh","Vim","Chorus"],p),q)
g=P.l(H.a(["Ink","Hestia","Bastet","Bes","Vesta","Eleos","Frigg","Debella","Juno","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes","Cthulhu","The Kraken","Akkorokamui","Kanaloa"],p),q)
h=P.l(H.a([new E.P($.em,2,!0),new E.P($.eQ,1,!0),new E.P($.dH,-2,!0)],k),l)
m=new L.aV(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
m.j(0,$.b3,L.e("#FF9B00"),!0)
m.j(0,$.b5,L.e("#FF9B00"),!0)
m.j(0,$.b4,L.e("#FF8700"),!0)
m.j(0,$.be,L.e("#7F7F7F"),!0)
m.j(0,$.bd,L.e("#727272"),!0)
m.j(0,$.b7,L.e("#A3A3A3"),!0)
m.j(0,$.b8,L.e("#999999"),!0)
m.j(0,$.b6,L.e("#898989"),!0)
m.j(0,$.bc,L.e("#EFEFEF"),!0)
m.j(0,$.bb,L.e("#DBDBDB"),!0)
m.j(0,$.ba,L.e("#C6C6C6"),!0)
m.j(0,$.b9,L.e("#ADADAD"),!0)
j=new V.mV(0.5,0.5,1,0,b,c,d,e,f,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["ink","friendship","ties","pulse","chain","ocean","festival"],["ink","photo album","friendship bracelet"],g,h,0.01,0.01,0.01,0.5,15,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Ink",null,!1,!1,!1,!1,!0,1,m,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.K(null,null,n))
j.an(15,"Ink",!1,!1)
$.zU=j
$.zZ=L.zN(255,"Null",!1,!0)
j=P.l(H.a([new E.P($.de,1,!0),new E.P($.i4,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Lyricist","Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass","Instrumentalist"],p)
h=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
g=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
f=H.a(["nobody"],p)
e=P.l(H.a([],k),l)
d=H.a(["Nobody"],p)
c=H.a(["Nobody"],p)
q=new F.nT(j,q,m,h,g,!1,f,e,d,c,1,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"loud","musical","Music")
q.D()
q.E()
B.cS(q)
$.B1=q
q=P.l(H.a([new E.P($.eO,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist","Ichthyologist","Instructor"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kY(q,m,j,i,h,!1,g,f,e,d,13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"nerdy","smart","Academic")
q.D()
q.E()
B.cS(q)
$.AV=q
q=P.l(H.a([new E.P($.i6,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler","Iceskater"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.l3(q,m,j,i,h,!1,g,f,e,d,4,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"dumb","athletic","Athletic")
q.D()
q.E()
B.cS(q)
$.AW=q
q=P.l(H.a([new E.P($.i5,-1,!0),new E.P($.i4,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["LaughMaster","Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor","Imp"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.lp(q,m,j,i,h,!1,g,f,e,d,0,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"dorky","funny","Comedy")
q.D()
q.E()
B.cS(q)
$.AX=q
q=P.l(H.a([new E.P($.de,-1,!0),new E.P($.eP,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business","Idealist"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.lE(q,m,j,i,h,!1,g,f,e,d,2,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"pretentious","cultured","Culture")
q.D()
q.E()
B.cS(q)
$.AY=q
q=P.l(H.a([new E.P($.de,1,!0),new E.P($.em,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer","Innkeeper"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lO(q,m,j,i,h,!1,g,f,e,d,8,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"boring","domestic","Domestic")
q.D()
q.E()
B.cS(q)
$.AZ=q
q=P.l(H.a([new E.P($.i4,1,!0),new E.P($.dH,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Lich","Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart","Illusionist"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.mj(q,m,j,i,h,!1,g,f,e,d,7,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"whimpy","imaginative","Fantasy")
q.D()
q.E()
B.cS(q)
$.B_=q
q=P.l(H.a([new E.P($.i6,1,!0),new E.P($.eP,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Legislator","Legalist","Legislacerator","Lawman","Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel","Investigator"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.nm(q,m,j,i,h,!1,g,f,e,d,6,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"harsh","fair-minded","Justice")
q.D()
q.E()
B.cS(q)
$.B0=q
q=P.l(H.a([new E.P($.eQ,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent","Imposter"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.ou(q,m,j,i,h,!1,g,f,e,d,9,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"frivolous","geeky","PopCulture")
q.D()
q.E()
B.cS(q)
$.B3=q
q=P.l(H.a([new E.P($.em,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team","Idealist"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.oO(q,m,j,i,h,!1,g,f,e,d,12,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"obsessive","romantic","Romantic")
q.D()
q.E()
B.cS(q)
$.B4=q
q=P.l(H.a([new E.P($.de,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally","Icebreaker"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.p6(q,m,j,i,h,!1,g,f,e,d,11,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"shallow","extroverted","Social")
q.D()
q.E()
B.cS(q)
$.B5=q
q=P.l(H.a([new E.P($.em,-1,!0),new E.P($.de,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod","Iconoclast","Infidel"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.pN(q,m,j,i,h,!1,g,f,e,d,5,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"terrible","honest","Terrible")
q.D()
q.E()
B.cS(q)
$.B7=q
q=P.l(H.a([new E.P($.eO,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis","Illustrator"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.qu(q,m,j,i,h,!1,g,f,e,d,3,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"wordy","lettered","Writing")
q.D()
q.E()
B.cS(q)
$.B8=q
q=P.l(H.a([new E.P($.dH,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data","Incinerator"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.pM(q,m,j,i,h,!1,g,f,e,d,10,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"awkward","techy","Technology")
q.D()
q.E()
B.cS(q)
$.B6=q
q=H.a(["nobody"],p)
l=P.l(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hC(!0,q,l,k,p,-13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.K(null,null,n),"","","Null")
q.D()
q.E()
B.cS(q)
$.B2=q
A.xO()
t=3
return P.c7(Y.nU(),$async$tz)
case 3:case 1:return P.bp(r,s)}})
return P.bq($async$tz,s)}},B={
hb:function(){var t=0,s=P.bn(),r,q,p,o,n,m
var $async$hb=P.br(function(a,b){if(a===1)return P.bo(b,s)
while(true)switch(t){case 0:q=H.a([],[B.fd])
t=3
return P.c7(B.hc("entrant"),$async$hb)
case 3:p=b
t=4
return P.c7(B.hc("finalist"),$async$hb)
case 4:o=b
n=C.b
m=q
t=5
return P.c7(B.hc("winner"),$async$hb)
case 5:n.ao(m,b)
C.b.ao(q,o)
C.b.ao(q,p)
r=q
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$hb,s)},
hc:function(a){var t=0,s=P.bn(),r,q
var $async$hc=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:q="BigBadLists/"+a.toLowerCase()+".txt"
t=3
return P.c7(W.uv(C.c.al("../",N.ol())+q,null,null).b1(new B.lv(a)),$async$hc)
case 3:r=c
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$hc,s)},
Ag:function(a,b){var t,s,r
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.bP)(b),++s){r=b[s]
H.wa("s is "+H.x(r))
a=P.d0(J.wq(a,new B.lu(r)),!0,null)}return a},
fd:function fd(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
lv:function lv(a){this.a=a},
lu:function lu(a){this.a=a},
mJ:function mJ(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,C,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
_.B=B
_.C=C
_.J=J
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
cS:function(a){var t=a.f
if($.$get$mX().Y(0,t))throw H.j("Duplicate aspect id for "+a.w(0)+": "+t+" is already registered for "+J.cA($.$get$mX().n(0,t))+".")
$.$get$mX().i(0,t,a)},
hC:function hC(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
qz:function qz(a){this.a=a},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
dm:function dm(a,b){this.a=a
this.b=b},
Ii:function(a){return a.bj(0)},
dK:function dK(a){this.a=a},
kr:function kr(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
id:function id(a,b){this.a=a
this.b=b}},V={lO:function lO(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},mA:function mA(a){this.a=a},mV:function mV(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
_.M=M
_.N=N
_.aa=aa
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
_.x1=x1},nR:function nR(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
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
_.x1=x1},of:function of(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},pN:function pN(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
AC:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dx(new P.c6(""),0,0)
t.am(a,8)
s=Math.pow(256,e)
c.toString
r=H.cT(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.u(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.u(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.am(n-1,p)
t.am(a,8)}return t.bc(b)},
AB:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cE(c)
s=new Uint8Array(t)
r=new B.dm(null,0)
r.a=J.e6(a,b)
for(q=e*8,p=0;p<c;){o=r.ab(q)+1
n=r.ab(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.u(s,l)
s[l]=n}p+=o}return s},
uc:function(a){return new V.lY(a)},
ub:function(a){return new V.lX(a)},
Ay:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dx(new P.c6(""),0,0)
t.am(a,8)
s=d.gd1()
r=C.f.ap(Math.log(H.kO(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cT(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.u(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.u(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.am(m-1,o)
t.am(a,r)}return t.bc(b)},
Ax:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cE(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ap(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dm(null,0)
p.a=J.e6(a,b)
for(r=e*8,o=0;o<c;){n=p.ab(r)+1
m=p.ab(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.u(s,k)
s[k]=m}o+=n}return s},
ua:function(a){return new V.lW(a)},
u9:function(a){return new V.lV(a)},
AA:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dx(new P.c6(""),0,0)
t.am(a,8)
s=d.gd1()
r=C.f.ap(Math.log(H.kO(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cT(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.u(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.u(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.ap(Math.log(n)/0.6931471805599453)+1
t.am(k-1,5)
t.am(n-1,k)
t.am(a,r)}return t.bc(b)},
Az:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cE(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ap(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dm(null,0)
p.a=J.e6(a,b)
for(o=0;o<c;){n=p.ab(p.ab(5)+1)+1
m=p.ab(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
lY:function lY(a){this.a=a},
lX:function lX(a){this.a=a},
lW:function lW(a){this.a=a},
lV:function lV(a){this.a=a}},Z={lQ:function lQ(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
_.M=M
_.N=N
_.aa=aa
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
AK:function(){var t,s
if(!$.wV)$.wV=!0
else return
t=[P.y]
s=new Y.pP(H.a([],t))
$.ur=s
Z.cR(s,"txt",null)
Z.cR($.ur,"vert","x-shader/x-vertex")
Z.cR($.ur,"frag","x-shader/x-fragment")
$.AJ=new Y.oG(H.a([],t))
$.wX=new Y.li(H.a([],t))
s=new B.qz(H.a([],t))
$.wZ=s
Z.cR(s,"zip",null)
Z.cR($.wZ,"bundle",null)
s=new U.qq(H.a([],t))
$.AS=s
Z.cR(s,"words",null)
s=new Q.or(H.a([],t))
$.wY=s
Z.cR(s,"png",null)
Z.cR($.wY,"jpg","image/jpeg")
$.AQ=new Q.oo(H.a([],t))
s=new M.pb(H.a([],t))
$.AR=s
Z.cR(s,"psprite",null)
s=new V.mA(H.a([],t))
$.uq=s
Z.cR(s,"ttf",null)
Z.cR($.uq,"otf",null)
Z.cR($.uq,"woff",null)
s=new Y.o7(null,H.a([],t))
$.AN=s
Z.cR(s,"obj",null)
s=new U.nG(H.a([],t))
$.AL=s
Z.cR(s,"mp3",null)
$.AM=new U.pA(H.a([],t))
s=new U.ob(H.a([],t))
$.AO=s
Z.cR(s,"ogg",null)
$.AP=new U.pB(H.a([],t))},
cR:function(a,b,c){$.$get$mC().i(0,b,new Z.iM(a,c,[null,null]))
a.a.push(b)},
wW:function(a){var t
if($.$get$mC().Y(0,a)){t=$.$get$mC().n(0,a)
if(t.a instanceof O.cc)return t
throw H.j("File format for extension ."+H.x(a)+" does not match expected types.")}throw H.j("No file format found for extension ."+H.x(a))},
iM:function iM(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
nF:function nF(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
_.B=B
_.C=C
_.J=J
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
v3:function v3(){},
uZ:function uZ(){},
v_:function v_(){}},X={iN:function iN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},iv:function iv(){},mL:function mL(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
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
_.x1=x1},G:function G(a,b,c){this.a=a
this.b=b
this.c=c}},N={ad:function ad(){},nm:function nm(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oz:function oz(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},oN:function oN(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},p6:function p6(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},p7:function p7(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
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
_.x1=x1},pV:function pV(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
_.M=M
_.N=N
_.aa=aa
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
GC:function(a){var t,s,r,q,p,o,n,m,l
t=J.cA(a)
s=new W.kz(document.querySelectorAll("link"),[null])
for(r=new H.eG(s,s.gm(s),0,null,[null]);r.F();){q=r.d
p=J.aj(q)
if(!!p.$ishK&&q.rel==="stylesheet"){o=$.$get$om()
H.x(p.ga9(q))
o.toString
o=t.length
n=Math.min(o,J.c9(p.ga9(q)))
for(m=0;m<n;++m){if(m>=o)return H.u(t,m)
if(t[m]!==J.d8(p.ga9(q),m)){l=C.c.ah(t,m)
$.$get$om().toString
return l.split("/").length-1}continue}}}$.$get$om().bi(C.m,"Didn't find a css link to derive relative path")
return 0},
ol:function(){var t=P.yj()
if(!$.$get$ok().Y(0,t))$.$get$ok().i(0,t,N.GC(t))
return $.$get$ok().n(0,t)}},E={j_:function j_(){},oa:function oa(){},P:function P(a,b,c){this.a=a
this.b=b
this.c=c},h1:function h1(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},l2:function l2(a,b,c){this.a=a
this.b=b
this.c=c},nS:function nS(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},oE:function oE(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
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
_.x1=x1},oS:function oS(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},qk:function qk(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
_.r1=r1},
IY:function(){var t,s,r
A.tz()
W.uv(C.c.al("../",N.ol())+"navbar.txt",null,null).b1(O.J_())
t=document
$.w5=t.querySelector("#story")
s=t.createElement("div")
C.p.cn(s,"Credits for All Big Bads can be found ")
r=W.l_("http://farragofiction.com/CreditSim/viewBBB")
r.textContent="here."
t=s.style
t.fontSize="24px"
s.appendChild(r)
$.w5.appendChild(s)
E.tx()},
tx:function(){var t=0,s=P.bn(),r,q,p,o
var $async$tx=P.br(function(a,b){if(a===1)return P.bo(b,s)
while(true)switch(t){case 0:t=2
return P.c7(B.hb(),$async$tx)
case 2:r=b
P.f2("target words is "+H.x($.$get$wc()))
q=$.$get$wc()
for(q=J.cF(q!=null?B.Ag(r,J.e7(q,"_")):r),p=1;q.F();){o=q.gO()
H.wa("entry is "+H.x(o))
J.zl(o,$.w5,p);++p}return P.bp(null,s)}})
return P.bq($async$tx,s)}},Q={mS:function mS(){},or:function or(a){this.a=a},oo:function oo(a){this.a=a},np:function np(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,aa,bF,bG,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
_.M=M
_.N=N
_.aa=aa
_.bF=bF
_.bG=bG
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
_.x1=x1},oO:function oO(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},qj:function qj(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
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
_.x1=x1},k4:function k4(){},
K:function(a,b,c){var t=new Q.dJ(null,null,[c])
t.dw(a,b,c)
return t},
vU:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.K(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.e4(a,"$isn",[e],"$asn"))if(H.e4(a,"$iscL",[e],"$ascL"))for(s=J.cF(a.gbN()),r=0;s.F();){q=s.gO()
p=t.b
o=p.length
if(r>=o)return H.u(p,r)
p[r]=q;++r}else for(s=a.gX(a),p=[H.N(t,0)],r=0;s.F();){n=s.gO()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.u(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gX(a),p=[e],o=[H.N(t,0)];s.F();){l=s.gO()
if(H.IB(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.u(m,0)
m[0]=new Q.h(l,k,o)}else if(H.e4(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.u(m,0)
m[0]=l}else throw H.j("Invalid entry type "+H.x(J.wk(l))+" for WeightedList<"+H.x(H.c1(H.dN(e)))+">. Should be "+H.x(H.c1(H.dN(e)))+" or WeightPair<"+H.x(H.c1(H.dN(e)))+">.")}return t},
vW:function(a,b,c){return new Q.ko(J.wq(a.gbN(),new Q.qo(c,b)),null,[c])},
vV:function(a,b,c,d){return new Q.kn(J.wm(a.gbN(),new Q.qn(c,d,b)),null,[c,d])},
cL:function cL(){},
dJ:function dJ(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
ic:function ic(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
en:function en(){},
ib:function ib(){},
qm:function qm(a,$ti){this.a=a
this.$ti=$ti},
ko:function ko(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qo:function qo(a,b){this.a=a
this.b=b},
kn:function kn(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qn:function qn(a,b,c){this.a=a
this.b=b
this.c=c},
oW:function(){var t=0,s=P.bn(),r
var $async$oW=P.br(function(a,b){if(a===1)return P.bo(b,s)
while(true)switch(t){case 0:t=3
return P.c7(A.hN("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$oW)
case 3:r=A.hN("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$oW,s)}},G={ns:function ns(x2,y1,y2,p,q,t,u,v,A,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.B=B
_.C=C
_.J=J
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
_.x1=x1},ou:function ou(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Ac:function(a){var t,s,r,q,p,o,n,m,l
t=G.a2
s=P.jQ(a,t)
r=P.a1(null,null,null,t)
q=H.a([],[G.d])
for(t=G.Gc(),p=J.cF(t.a),t=new H.kp(p,t.b,[H.N(t,0)]);t.F();){o=p.gO()
if(o.eN(s))q.push(o)}C.b.f9(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bP)(q),++n){o=q[n]
if(o.eN(s)){r.h(0,o)
for(p=o.f,m=p.length,l=0;l<p.length;p.length===m||(0,H.bP)(p),++l)s.as(0,p[l])}}if(s.a!==0)r.ao(0,s)
return r},
Gc:function(){var t=$.$get$c()
t.toString
return new H.dh(t,new G.n8(),[H.N(t,0)])},
a2:function a2(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b,c,d){var _=this
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
n8:function n8(){}},F={nT:function nT(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},qu:function qu(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Gk:function(a){if(a===C.h){window
return C.i.gav(C.i)}if(a===C.m){window
return C.i.giJ()}if(a===C.a8){window
return C.i.gi3()}return P.IF()},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
v8:function v8(){},
Aw:function(a,b,c,d){var t,s,r,q
t=new B.dx(new P.c6(""),0,0)
t.am(a,8)
c.toString
s=H.cT(c,0,null)
for(r=s.length,q=0;q<r;++q)t.c4(s[q])
return t.bc(b)},
Av:function(a,b,c,d){var t,s,r,q,p
t=H.cE(c)
s=new Uint8Array(t)
r=new B.dm(null,0)
r.a=J.e6(a,b)
for(q=0;q<c;++q){p=r.cd()
if(q>=t)return H.u(s,q)
s[q]=p}return s},
Au:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dx(new P.c6(""),0,0)
t.am(a,8)
s=d.gd1()
r=C.f.ap(Math.log(H.kO(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cT(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.u(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.u(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.c4(o-1)
t.am(a,r)}return t.bc(b)},
At:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cE(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ap(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dm(null,0)
p.a=J.e6(a,b)
for(o=0;o<c;){n=p.cd()+1
m=p.ab(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
As:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dx(new P.c6(""),0,0)
t.am(a,8)
c.toString
s=H.cT(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.u(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.u(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.c4(p-1)
t.c4(a)}return t.bc(b)},
Ar:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cE(c)
s=new Uint8Array(t)
r=new B.dm(null,0)
r.a=J.e6(a,b)
for(q=0;q<c;){p=r.cd()+1
o=r.cd()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.u(s,m)
s[m]=o}q+=p}return s}},R={
y_:function(a){var t,s
if(a.gm(a).aG(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.giT(s).gj3().ew("checking for two players, ps is "+H.x(a)+", ret is "+t)
return t},
H3:function(a){return R.y_(a)&&R.GS(a)},
GP:function(a){a.gad(a).gbz()
return!1},
H2:function(a){a.gad(a).gbz()
return!1},
GS:function(a){a.gad(a).gbz()
return!1},
H1:function(a){a.gad(a).gbz()
return!1},
H0:function(a){return a.gad(a).gbA().gj2()},
GZ:function(a){return a.gad(a).gbA().gj0()},
GX:function(a){return a.gad(a).gbA().gj_()},
GT:function(a){return a.gad(a).gbA().giY()},
GV:function(a){return a.gad(a).gbA().giZ()},
H_:function(a){return a.gad(a).gbA().gj1()},
GU:function(a){var t=a.gad(a)
t.gbz()
t.gbz()
return!1},
GW:function(a){return a.gad(a).gi8()},
GY:function(a){a.gad(a).gi8()
return!1},
GQ:function(a){return!0},
GR:function(a){a.gad(a).giV()
return!1},
oA:function oA(){},
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
O:function O(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
a5:function a5(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
bG:function bG(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
pH:function pH(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.A=A
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
hx:function hx(){},
vp:function vp(){},
vo:function vo(){}},D={pM:function pM(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
HB:function(){var t,s
if($.y4)return
$.y4=!0
t=new D.cm("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
t.y=0
$.y3=t
t=new D.cm("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.Hz=t
t=new D.ks(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
t.y=2.5
t.Q=1
$.i6=t
t=new D.ks(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
t.y=2.5
$.eP=t
t=new D.cm("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.Hy=t
t=new D.cm("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.eQ=t
t=new D.oK("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.em=t
t=new D.cm("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.de=t
t=new D.cm("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.eO=t
t=new D.cm("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.i4=t
t=new D.cm("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.i5=t
t=new D.cm("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.dH=t
t=new D.cm("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.cx=t
t=P.y
s=D.cm
$.HA=H.Ae(P.Gg($.$get$cI(),new D.pd(),new D.pe(),t,s),t,s)},
vI:function(){var t=$.$get$cI()
return new H.dh(t,new D.pf(),[H.N(t,0)])},
pd:function pd(){},
pe:function pe(){},
pf:function pf(){},
cm:function cm(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
ks:function ks(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
oK:function oK(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,A,B,V,Z,X,N,E,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.v5.prototype={}
J.f.prototype={
S:function(a,b){return a===b},
ga4:function(a){return H.eL(a)},
w:function(a){return H.ox(a)},
gaf:function(a){return new H.e2(H.kR(a),null)},
$ishx:1,
$isA:1,
$isfz:1,
$isA:1,
$isne:1,
$isA:1,
$isf:1,
$isne:1,
$isA:1,
$isf:1,
$ishR:1,
$isA:1}
J.nc.prototype={
w:function(a){return String(a)},
ga4:function(a){return a?519018:218159},
gaf:function(a){return C.ao},
$iscV:1}
J.nd.prototype={
S:function(a,b){return null==b},
w:function(a){return"null"},
ga4:function(a){return 0},
gaf:function(a){return C.ai},
$isda:1}
J.hH.prototype={
ga4:function(a){return 0},
gaf:function(a){return C.ah},
w:function(a){return String(a)},
$isne:1,
gT:function(a){return a.x},
gU:function(a){return a.y},
h:function(a,b){return a.add(b)},
as:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gbt:function(a){return a.left},
gcf:function(a){return a.right},
gbu:function(a){return a.top},
gc5:function(a){return a.bottom},
geh:function(a){return a.attributes},
gb2:function(a){return a.width},
gaW:function(a){return a.height},
io:function(a,b){return a.parse(b)},
f7:function(a,b){return a.setLogging(b)},
f8:function(a,b){return a.setMaterials(b)}}
J.oq.prototype={}
J.eU.prototype={}
J.eF.prototype={
w:function(a){var t=a[$.$get$wC()]
return t==null?this.fe(a):J.cA(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.eD.prototype={
c9:function(a,b){if(!!a.immutable$list)throw H.j(new P.S(b))},
c8:function(a,b){if(!!a.fixed$length)throw H.j(new P.S(b))},
h:function(a,b){this.c8(a,"add")
a.push(b)},
aw:function(a,b){return new H.dh(a,b,[H.N(a,0)])},
ao:function(a,b){var t
this.c8(a,"addAll")
for(t=J.cF(b);t.F();)a.push(t.gO())},
a1:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.j(new P.bJ(a))}},
aF:function(a,b){return new H.eI(a,b,[H.N(a,0),null])},
bs:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.x(a[r])
if(r>=t)return H.u(s,r)
s[r]=q}return s.join(b)},
aD:function(a,b){return H.pF(a,b,null,H.N(a,0))},
hT:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.j(new P.bJ(a))}return s},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
co:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.bh(b))
if(b<0||b>a.length)throw H.j(P.bz(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.j(H.bh(c))
if(c<b||c>a.length)throw H.j(P.bz(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.N(a,0)])
return H.a(a.slice(b,c),[H.N(a,0)])},
gad:function(a){if(a.length>0)return a[0]
throw H.j(H.hG())},
gbh:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.j(H.hG())},
a7:function(a,b,c,d,e){var t,s,r
this.c9(a,"setRange")
P.dr(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aM(P.bz(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.j(H.xH())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}},
aB:function(a,b,c,d){return this.a7(a,b,c,d,0)},
bH:function(a,b,c,d){var t
this.c9(a,"fill range")
P.dr(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aK:function(a,b,c,d){var t,s,r,q,p,o
this.c8(a,"replaceRange")
P.dr(b,c,a.length,null,null,null)
d=C.c.at(d)
if(typeof c!=="number")return c.ag()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.aB(a,b,r,d)
if(p!==0){this.a7(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a7(a,r,o,a,c)
this.aB(a,b,r,d)}},
eg:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.j(new P.bJ(a))}return!1},
hR:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.j(new P.bJ(a))}return!0},
dq:function(a,b){var t
this.c9(a,"sort")
t=b==null?P.IE():b
H.kb(a,0,a.length-1,t)},
f9:function(a){return this.dq(a,null)},
ba:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.b0(a[t],b))return t
return-1},
br:function(a,b){return this.ba(a,b,0)},
Z:function(a,b){var t
for(t=0;t<a.length;++t)if(J.b0(a[t],b))return!0
return!1},
gV:function(a){return a.length===0},
gak:function(a){return a.length!==0},
w:function(a){return P.jL(a,"[","]")},
a6:function(a,b){var t=H.a(a.slice(0),[H.N(a,0)])
return t},
at:function(a){return this.a6(a,!0)},
gX:function(a){return new J.f4(a,a.length,0,null,[H.N(a,0)])},
ga4:function(a){return H.eL(a)},
gm:function(a){return a.length},
sm:function(a,b){this.c8(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dP(b,"newLength",null))
if(b<0)throw H.j(P.bz(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c8(a,b))
if(b>=a.length||b<0)throw H.j(H.c8(a,b))
return a[b]},
i:function(a,b,c){this.c9(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c8(a,b))
if(b>=a.length||b<0)throw H.j(H.c8(a,b))
a[b]=c},
$isaA:1,
$asaA:function(){},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
J.v4.prototype={}
J.f4.prototype={
gO:function(){return this.d},
F:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.j(H.bP(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fu.prototype={
aI:function(a,b){var t
if(typeof b!=="number")throw H.j(H.bh(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcZ(b)
if(this.gcZ(a)===t)return 0
if(this.gcZ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcZ:function(a){return a===0?1/a<0:a<0},
eM:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.j(new P.S(""+a+".toInt()"))},
ap:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.j(new P.S(""+a+".floor()"))},
b0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(new P.S(""+a+".round()"))},
ai:function(a,b,c){if(C.a.aI(b,c)>0)throw H.j(H.bh(b))
if(this.aI(a,b)<0)return b
if(this.aI(a,c)>0)return c
return a},
l:function(a){return a},
bQ:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.j(P.bz(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.a_(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aM(new P.S("Unexpected toString result: "+t))
r=J.aY(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.al("0",q)},
w:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga4:function(a){return a&0x1FFFFFFF},
dk:function(a){return-a},
R:function(a,b){if(typeof b!=="number")throw H.j(H.bh(b))
return a+b},
ag:function(a,b){if(typeof b!=="number")throw H.j(H.bh(b))
return a-b},
al:function(a,b){if(typeof b!=="number")throw H.j(H.bh(b))
return a*b},
bU:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
du:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e9(a,b)},
ar:function(a,b){return(a|0)===a?a/b|0:this.e9(a,b)},
e9:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.j(new P.S("Result of truncating division is "+H.x(t)+": "+H.x(a)+" ~/ "+H.x(b)))},
aC:function(a,b){if(typeof b!=="number")throw H.j(H.bh(b))
if(b<0)throw H.j(H.bh(b))
return b>31?0:a<<b>>>0},
au:function(a,b){return b>31?0:a<<b>>>0},
b6:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
hf:function(a,b){if(b<0)throw H.j(H.bh(b))
return b>31?0:a>>>b},
e8:function(a,b){return b>31?0:a>>>b},
a3:function(a,b){if(typeof b!=="number")throw H.j(H.bh(b))
return a<b},
aG:function(a,b){if(typeof b!=="number")throw H.j(H.bh(b))
return a>b},
aA:function(a,b){if(typeof b!=="number")throw H.j(H.bh(b))
return a>=b},
gaf:function(a){return C.ar},
$isdv:1}
J.jO.prototype={
gaf:function(a){return C.aq},
$isW:1,
$isdv:1,
$isD:1}
J.jN.prototype={
gaf:function(a){return C.ap},
$isW:1,
$isdv:1}
J.eE.prototype={
a_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c8(a,b))
if(b<0)throw H.j(H.c8(a,b))
if(b>=a.length)H.aM(H.c8(a,b))
return a.charCodeAt(b)},
a8:function(a,b){if(b>=a.length)throw H.j(H.c8(a,b))
return a.charCodeAt(b)},
cQ:function(a,b,c){if(c>b.length)throw H.j(P.bz(c,0,b.length,null,null))
return new H.rS(b,a,c)},
aV:function(a,b){return this.cQ(a,b,0)},
eB:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.j(P.bz(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.a_(b,c+s)!==this.a8(a,s))return
return new H.kg(c,b,a)},
R:function(a,b){if(typeof b!=="string")throw H.j(P.dP(b,null,null))
return a+b},
hQ:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ah(a,s-t)},
da:function(a,b,c){return H.zc(a,b,c)},
iA:function(a,b,c){return H.J8(a,b,c,null)},
fa:function(a,b){if(b==null)H.aM(H.bh(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.fv&&b.gdX().exec("").length-2===0)return a.split(b.gh1())
else return this.fK(a,b)},
aK:function(a,b,c,d){var t,s
H.w3(b)
c=P.dr(b,c,a.length,null,null,null)
H.w3(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fK:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.y])
for(s=J.zg(b,a),s=s.gX(s),r=0,q=1;s.F();){p=s.gO()
o=p.gdr(p)
n=p.gen(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.H(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ah(a,r))
return t},
aL:function(a,b,c){var t
H.w3(c)
if(typeof c!=="number")return c.a3()
if(c<0||c>a.length)throw H.j(P.bz(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.zz(b,a,c)!=null},
aj:function(a,b){return this.aL(a,b,0)},
H:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.aM(H.bh(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aM(H.bh(c))
if(typeof b!=="number")return b.a3()
if(b<0)throw H.j(P.k8(b,null,null))
if(typeof c!=="number")return H.a7(c)
if(b>c)throw H.j(P.k8(b,null,null))
if(c>a.length)throw H.j(P.k8(c,null,null))
return a.substring(b,c)},
ah:function(a,b){return this.H(a,b,null)},
iH:function(a){return a.toLowerCase()},
iI:function(a){return a.toUpperCase()},
bv:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a8(t,0)===133){r=J.Ge(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.a_(t,q)===133?J.v1(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eO:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.a_(t,r)===133)s=J.v1(t,r)}else{s=J.v1(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
al:function(a,b){var t,s
if(typeof b!=="number")return H.a7(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.P)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
ba:function(a,b,c){var t
if(c<0||c>a.length)throw H.j(P.bz(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
br:function(a,b){return this.ba(a,b,0)},
ic:function(a,b,c){var t
if(b==null)H.aM(H.bh(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.aM(P.bz(t,0,c,null,null))
if(b.cB(a,t)!=null)return t}return-1},
ey:function(a,b){return this.ic(a,b,null)},
el:function(a,b,c){if(b==null)H.aM(H.bh(b))
if(c>a.length)throw H.j(P.bz(c,0,a.length,null,null))
return H.J7(a,b,c)},
Z:function(a,b){return this.el(a,b,0)},
gV:function(a){return a.length===0},
gak:function(a){return a.length!==0},
aI:function(a,b){var t
if(typeof b!=="string")throw H.j(H.bh(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
w:function(a){return a},
ga4:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gaf:function(a){return C.aj},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c8(a,b))
if(b>=a.length||b<0)throw H.j(H.c8(a,b))
return a[b]},
$isaA:1,
$asaA:function(){},
$isy:1}
H.lo.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.a_(this.a,b)},
$asia:function(){return[P.D]},
$ashM:function(){return[P.D]},
$asfA:function(){return[P.D]},
$asp:function(){return[P.D]},
$ast:function(){return[P.D]},
$asn:function(){return[P.D]}}
H.t.prototype={$ast:null}
H.dW.prototype={
gX:function(a){return new H.eG(this,this.gm(this),0,null,[H.ag(this,"dW",0)])},
a1:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.W(0,s))
if(t!==this.gm(this))throw H.j(new P.bJ(this))}},
gV:function(a){return this.gm(this)===0},
gad:function(a){if(this.gm(this)===0)throw H.j(H.hG())
return this.W(0,0)},
Z:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.b0(this.W(0,s),b))return!0
if(t!==this.gm(this))throw H.j(new P.bJ(this))}return!1},
aw:function(a,b){return this.fd(0,b)},
aF:function(a,b){return new H.eI(this,b,[H.ag(this,"dW",0),null])},
aD:function(a,b){return H.pF(this,b,null,H.ag(this,"dW",0))},
a6:function(a,b){var t,s,r
t=H.a([],[H.ag(this,"dW",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.W(0,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
at:function(a){return this.a6(a,!0)}}
H.pE.prototype={
gfL:function(){var t=J.c9(this.a)
return t},
ghg:function(){var t,s
t=J.c9(this.a)
s=this.b
if(J.cz(s,t))return t
return s},
gm:function(a){var t,s
t=J.c9(this.a)
s=this.b
if(J.wd(s,t))return 0
if(typeof s!=="number")return H.a7(s)
return t-s},
W:function(a,b){var t=J.e5(this.ghg(),b)
if(J.dO(b,0)||J.wd(t,this.gfL()))throw H.j(P.bB(b,this,"index",null,null))
return J.wg(this.a,t)},
aD:function(a,b){var t
if(J.dO(b,0))H.aM(P.bz(b,0,null,"count",null))
t=J.e5(this.b,b)
return H.pF(this.a,t,this.c,H.N(this,0))},
a6:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.aY(s)
q=r.gm(s)
if(typeof t!=="number")return H.a7(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.W(s,t+m)
if(m>=n.length)return H.u(n,m)
n[m]=o
if(r.gm(s)<q)throw H.j(new P.bJ(this))}return n},
at:function(a){return this.a6(a,!0)},
fn:function(a,b,c,d){var t=this.b
if(J.dO(t,0))H.aM(P.bz(t,0,null,"start",null))}}
H.eG.prototype={
gO:function(){return this.d},
F:function(){var t,s,r,q
t=this.a
s=J.aY(t)
r=s.gm(t)
if(this.b!==r)throw H.j(new P.bJ(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.W(t,q);++this.c
return!0}}
H.hQ.prototype={
gX:function(a){return new H.jS(null,J.cF(this.a),this.b,this.$ti)},
gm:function(a){return J.c9(this.a)},
gV:function(a){return J.kW(this.a)},
$asn:function(a,b){return[b]}}
H.hg.prototype={$ist:1,
$ast:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.jS.prototype={
F:function(){var t=this.b
if(t.F()){this.a=this.c.$1(t.gO())
return!0}this.a=null
return!1},
gO:function(){return this.a},
$asjM:function(a,b){return[b]}}
H.eI.prototype={
gm:function(a){return J.c9(this.a)},
W:function(a,b){return this.b.$1(J.wg(this.a,b))},
$asdW:function(a,b){return[b]},
$ast:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.dh.prototype={
gX:function(a){return new H.kp(J.cF(this.a),this.b,this.$ti)},
aF:function(a,b){return new H.hQ(this,b,[H.N(this,0),null])}}
H.kp.prototype={
F:function(){var t,s
for(t=this.a,s=this.b;t.F();)if(s.$1(t.gO())===!0)return!0
return!1},
gO:function(){return this.a.gO()}}
H.i2.prototype={
aD:function(a,b){return new H.i2(this.a,this.b+H.tg(b),this.$ti)},
gX:function(a){return new H.p3(J.cF(this.a),this.b,this.$ti)}}
H.iK.prototype={
gm:function(a){var t=J.c9(this.a)-this.b
if(t>=0)return t
return 0},
aD:function(a,b){return new H.iK(this.a,this.b+H.tg(b),this.$ti)},
$ist:1,
$ast:null,
$asn:null}
H.p3.prototype={
F:function(){var t,s
for(t=this.a,s=0;s<this.b;++s)t.F()
this.b=0
return t.F()},
gO:function(){return this.a.gO()}}
H.iW.prototype={
sm:function(a,b){throw H.j(new P.S("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.j(new P.S("Cannot add to a fixed-length list"))},
aK:function(a,b,c,d){throw H.j(new P.S("Cannot remove from a fixed-length list"))}}
H.q5.prototype={
i:function(a,b,c){throw H.j(new P.S("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.j(new P.S("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.j(new P.S("Cannot add to an unmodifiable list"))},
a7:function(a,b,c,d,e){throw H.j(new P.S("Cannot modify an unmodifiable list"))},
aB:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aK:function(a,b,c,d){throw H.j(new P.S("Cannot remove from an unmodifiable list"))},
bH:function(a,b,c,d){throw H.j(new P.S("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
H.ia.prototype={$asp:null,$ast:null,$asn:null,$isp:1,$ist:1,$isn:1}
H.tQ.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.tR.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.rv.prototype={}
H.fO.prototype={
ef:function(a,b){if(!this.f.S(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cO()},
iz:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.as(0,a)
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
if(q===s.c)s.dQ();++s.d}this.y=!1}this.cO()},
hl:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aj(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.u(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
iy:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aj(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aM(new P.S("removeRange"))
P.dr(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
f5:function(a,b){if(!this.r.S(0,a))return
this.db=b},
hZ:function(a,b,c){var t=J.aj(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){J.fY(a,c)
return}t=this.cx
if(t==null){t=P.va(null,null)
this.cx=t}t.aS(0,new H.rl(a,c))},
hY:function(a,b){var t
if(!this.r.S(0,a))return
t=J.aj(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){this.ca()
return}t=this.cx
if(t==null){t=P.va(null,null)
this.cx=t}t.aS(0,this.gib())},
i_:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.f2(a)
if(b!=null)P.f2(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cA(a)
s[1]=b==null?null:J.cA(b)
for(r=new P.dL(t,t.r,null,null,[null]),r.c=t.e;r.F();)J.fY(r.d,s)},
bE:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.bH(o)
p=H.co(o)
this.i_(q,p)
if(this.db===!0){this.ca()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gi9()
if(this.cx!=null)for(;n=this.cx,!n.gV(n);)this.cx.eH().$0()}return s},
d_:function(a){return this.b.n(0,a)},
dC:function(a,b){var t=this.b
if(t.Y(0,a))throw H.j(P.m_("Registry: ports must be registered only once."))
t.i(0,a,b)},
cO:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ca()},
ca:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bp(0)
for(t=this.b,s=t.gci(t),s=s.gX(s);s.F();)s.gO().fD()
t.bp(0)
this.c.bp(0)
u.globalState.z.as(0,this.a)
this.dx.bp(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.u(t,p)
J.fY(q,t[p])}this.ch=null}},
gi9:function(){return this.d},
ghx:function(){return this.e}}
H.rl.prototype={
$0:function(){J.fY(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qY.prototype={
hG:function(){var t=this.a
if(t.b===t.c)return
return t.eH()},
eL:function(){var t,s,r
t=this.hG()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.Y(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gV(s)}else s=!1
else s=!1
else s=!1
if(s)H.aM(P.m_("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gV(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hL(["command","close"])
r=new H.dM(!0,new P.kE(0,null,null,null,null,null,0,[null,P.D])).aH(r)
s.toString
self.postMessage(r)}return!1}t.iu()
return!0},
e3:function(){if(self.window!=null)new H.qZ(this).$0()
else for(;this.eL(););},
bP:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.e3()
else try{this.e3()}catch(r){t=H.bH(r)
s=H.co(r)
q=u.globalState.Q
p=P.hL(["command","error","msg",H.x(t)+"\n"+H.x(s)])
p=new H.dM(!0,P.ik(null,P.D)).aH(p)
q.toString
self.postMessage(p)}}}
H.qZ.prototype={
$0:function(){if(!this.a.eL())return
P.y6(C.q,this)},
$S:function(){return{func:1,v:true}}}
H.f0.prototype={
iu:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bE(this.b)}}
H.ru.prototype={}
H.mY.prototype={
$0:function(){H.Bc(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mZ.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fU(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fU(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cO()},
$S:function(){return{func:1,v:true}}}
H.qI.prototype={}
H.fP.prototype={
bf:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdV())return
r=H.Id(b)
if(t.ghx()===s){s=J.aY(r)
switch(s.n(r,0)){case"pause":t.ef(s.n(r,1),s.n(r,2))
break
case"resume":t.iz(s.n(r,1))
break
case"add-ondone":t.hl(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.iy(s.n(r,1))
break
case"set-errors-fatal":t.f5(s.n(r,1),s.n(r,2))
break
case"ping":t.hZ(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hY(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.as(0,s)
break}return}u.globalState.f.a.aS(0,new H.f0(t,new H.rx(this,r),"receive"))},
S:function(a,b){if(b==null)return!1
return b instanceof H.fP&&J.b0(this.b,b.b)},
ga4:function(a){return this.b.gcE()}}
H.rx.prototype={
$0:function(){var t=this.a.b
if(!t.gdV())t.fz(0,this.b)},
$S:function(){return{func:1}}}
H.ip.prototype={
bf:function(a,b){var t,s,r
t=P.hL(["command","message","port",this,"msg",b])
s=new H.dM(!0,P.ik(null,P.D)).aH(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
S:function(a,b){if(b==null)return!1
return b instanceof H.ip&&J.b0(this.b,b.b)&&J.b0(this.a,b.a)&&J.b0(this.c,b.c)},
ga4:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aC()
s=this.a
if(typeof s!=="number")return s.aC()
r=this.c
if(typeof r!=="number")return H.a7(r)
return(t<<16^s<<8^r)>>>0}}
H.fE.prototype={
fD:function(){this.c=!0
this.b=null},
fz:function(a,b){if(this.c)return
this.b.$1(b)},
$isH4:1,
gcE:function(){return this.a},
gdV:function(){return this.c}}
H.pX.prototype={
fo:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aS(0,new H.f0(s,new H.pY(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dt(new H.pZ(this,b),0),a)}else throw H.j(new P.S("Timer greater than 0."))}}
H.pY.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pZ.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dQ.prototype={
ga4:function(a){var t=this.a
if(typeof t!=="number")return t.dn()
t=C.d.b6(t,0)^C.d.ar(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dQ){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcE:function(){return this.a}}
H.dM.prototype={
aH:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.aj(a)
if(!!t.$isfw)return["buffer",a]
if(!!t.$iseK)return["typed",a]
if(!!t.$isaA)return this.f1(a)
if(!!t.$isB9){r=this.geZ()
q=t.gae(a)
q=H.dD(q,r,H.ag(q,"n",0),null)
q=P.d0(q,!0,H.ag(q,"n",0))
t=t.gci(a)
t=H.dD(t,r,H.ag(t,"n",0),null)
return["map",q,P.d0(t,!0,H.ag(t,"n",0))]}if(!!t.$isne)return this.f2(a)
if(!!t.$isf)this.eP(a)
if(!!t.$isH4)this.bS(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfP)return this.f3(a)
if(!!t.$isip)return this.f4(a)
if(!!t.$isfa){p=a.$static_name
if(p==null)this.bS(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdQ)return["capability",a.a]
if(!(a instanceof P.A))this.eP(a)
return["dart",u.classIdExtractor(a),this.f0(u.classFieldsExtractor(a))]},
bS:function(a,b){throw H.j(new P.S((b==null?"Can't transmit:":b)+" "+H.x(a)))},
eP:function(a){return this.bS(a,null)},
f1:function(a){var t=this.f_(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bS(a,"Can't serialize indexable: ")},
f_:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.aH(a[s])
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
f0:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aH(a[t]))
return a},
f2:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bS(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.aH(a[t[r]])
if(r>=s.length)return H.u(s,r)
s[r]=q}return["js-object",t,s]},
f4:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
f3:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcE()]
return["raw sendport",a]}}
H.eY.prototype={
b8:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.j(P.dk("Bad serialized message: "+H.x(a)))
switch(C.b.gad(a)){case"ref":if(1>=a.length)return H.u(a,1)
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
s=H.a(this.bC(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bC(r),[null])
case"mutable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return this.bC(r)
case"const":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bC(r),[null])
s.fixed$length=Array
return s
case"map":return this.hK(a)
case"sendport":return this.hL(a)
case"raw sendport":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.hJ(a)
case"function":if(1>=a.length)return H.u(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.u(a,1)
return new H.dQ(a[1])
case"dart":s=a.length
if(1>=s)return H.u(a,1)
q=a[1]
if(2>=s)return H.u(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bC(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.j("couldn't deserialize: "+H.x(a))}},
bC:function(a){var t,s,r
t=J.aY(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
if(!(s<r))break
t.i(a,s,this.b8(t.n(a,s)));++s}return a},
hK:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q=P.jP()
this.b.push(q)
s=J.zH(J.wm(s,this.ghI()))
for(t=J.aY(s),p=J.aY(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.b8(p.n(r,o)))
return q},
hL:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
if(3>=t)return H.u(a,3)
q=a[3]
if(J.b0(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.d_(q)
if(o==null)return
n=new H.fP(o,r)}else n=new H.ip(s,q,r)
this.b.push(n)
return n},
hJ:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.aY(s)
p=J.aY(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a7(n)
if(!(o<n))break
q[t.n(s,o)]=this.b8(p.n(r,o));++o}return q}}
H.ls.prototype={
$aseV:function(){},
$asjR:function(){},
$asaK:function(){},
$isaK:1}
H.lr.prototype={
gV:function(a){return this.gm(this)===0},
gak:function(a){return this.gm(this)!==0},
w:function(a){return P.nL(this)},
i:function(a,b,c){return H.Af()},
$isaK:1,
$asaK:null}
H.ha.prototype={
gm:function(a){return this.a},
Y:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.Y(0,b))return
return this.cD(b)},
cD:function(a){return this.b[a]},
a1:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.cD(q))}},
gae:function(a){return new H.qM(this,[H.N(this,0)])}}
H.lt.prototype={
Y:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!0
return this.b.hasOwnProperty(b)},
cD:function(a){return"__proto__"===a?this.d:this.b[a]}}
H.qM.prototype={
gX:function(a){var t=this.a.c
return new J.f4(t,t.length,0,null,[H.N(t,0)])},
gm:function(a){return this.a.c.length}}
H.oJ.prototype={}
H.q2.prototype={
aO:function(a){var t,s,r
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
H.k0.prototype={
w:function(a){var t=this.b
if(t==null)return"NullError: "+H.x(this.a)
return"NullError: method not found: '"+H.x(t)+"' on null"}}
H.nh.prototype={
w:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.x(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.x(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.x(this.a)+")"}}
H.q4.prototype={
w:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hp.prototype={
gaQ:function(){return this.b}}
H.tS.prototype={
$1:function(a){if(!!J.aj(a).$iset)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kH.prototype={
w:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.tF.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.tG.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.tH.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.tI.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.tJ.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.fa.prototype={
w:function(a){return"Closure '"+H.oy(this).trim()+"'"},
giR:function(){return this},
$D:null}
H.pL.prototype={}
H.pc.prototype={
w:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.h4.prototype={
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.h4))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga4:function(a){var t,s
t=this.c
if(t==null)s=H.eL(this.a)
else s=typeof t!=="object"?J.cX(t):H.eL(t)
t=H.eL(this.b)
if(typeof s!=="number")return s.iU()
return(s^t)>>>0},
w:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.x(this.d)+"' of "+H.ox(t)}}
H.lm.prototype={
w:function(a){return this.a}}
H.oQ.prototype={
w:function(a){return"RuntimeError: "+H.x(this.a)}}
H.e2.prototype={
w:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga4:function(a){return J.cX(this.a)},
S:function(a,b){if(b==null)return!1
return b instanceof H.e2&&J.b0(this.a,b.a)}}
H.w.prototype={
gm:function(a){return this.a},
gV:function(a){return this.a===0},
gak:function(a){return!this.gV(this)},
gae:function(a){return new H.nv(this,[H.N(this,0)])},
gci:function(a){return H.dD(this.gae(this),new H.ng(this),H.N(this,0),H.N(this,1))},
Y:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dK(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dK(s,b)}else return this.i4(b)},
i4:function(a){var t=this.d
if(t==null)return!1
return this.bK(this.bW(t,this.bJ(a)),a)>=0},
ao:function(a,b){b.a1(0,new H.nf(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bx(t,b)
return s==null?null:s.gb9()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bx(r,b)
return s==null?null:s.gb9()}else return this.i5(b)},
i5:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bW(t,this.bJ(a))
r=this.bK(s,a)
if(r<0)return
return s[r].gb9()},
i:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.cG()
this.b=t}this.dB(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cG()
this.c=s}this.dB(s,b,c)}else this.i7(b,c)},
i7:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.cG()
this.d=t}s=this.bJ(a)
r=this.bW(t,s)
if(r==null)this.cM(t,s,[this.cH(a,b)])
else{q=this.bK(r,a)
if(q>=0)r[q].sb9(b)
else r.push(this.cH(a,b))}},
as:function(a,b){if(typeof b==="string")return this.e2(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.e2(this.c,b)
else return this.i6(b)},
i6:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bW(t,this.bJ(a))
r=this.bK(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.eb(q)
return q.gb9()},
bp:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a1:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.j(new P.bJ(this))
t=t.c}},
dB:function(a,b,c){var t=this.bx(a,b)
if(t==null)this.cM(a,b,this.cH(b,c))
else t.sb9(c)},
e2:function(a,b){var t
if(a==null)return
t=this.bx(a,b)
if(t==null)return
this.eb(t)
this.dO(a,b)
return t.gb9()},
cH:function(a,b){var t,s
t=new H.nu(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
eb:function(a){var t,s
t=a.gh6()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bJ:function(a){return J.cX(a)&0x3ffffff},
bK:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b0(a[s].gev(),b))return s
return-1},
w:function(a){return P.nL(this)},
bx:function(a,b){return a[b]},
bW:function(a,b){return a[b]},
cM:function(a,b,c){a[b]=c},
dO:function(a,b){delete a[b]},
dK:function(a,b){return this.bx(a,b)!=null},
cG:function(){var t=Object.create(null)
this.cM(t,"<non-identifier-key>",t)
this.dO(t,"<non-identifier-key>")
return t},
$isB9:1,
$isaK:1,
$asaK:null}
H.ng.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.nf.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eo(function(a,b){return{func:1,args:[a,b]}},this.a,"w")}}
H.nu.prototype={
gev:function(){return this.a},
gb9:function(){return this.b},
gh6:function(){return this.d},
sb9:function(a){return this.b=a}}
H.nv.prototype={
gm:function(a){return this.a.a},
gV:function(a){return this.a.a===0},
gX:function(a){var t,s
t=this.a
s=new H.nw(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
Z:function(a,b){return this.a.Y(0,b)},
a1:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.j(new P.bJ(t))
s=s.c}}}
H.nw.prototype={
gO:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.j(new P.bJ(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.tB.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.tC.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.y]}}}
H.tD.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.y]}}}
H.fv.prototype={
w:function(a){return"RegExp/"+this.a+"/"},
gdY:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.v2(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdX:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.v2(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cQ:function(a,b,c){if(c>b.length)throw H.j(P.bz(c,0,b.length,null,null))
return new H.qC(this,b,c)},
aV:function(a,b){return this.cQ(a,b,0)},
fM:function(a,b){var t,s
t=this.gdY()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.kF(this,s)},
cB:function(a,b){var t,s
t=this.gdX()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.u(s,-1)
if(s.pop()!=null)return
return new H.kF(this,s)},
eB:function(a,b,c){if(c<0||c>b.length)throw H.j(P.bz(c,0,b.length,null,null))
return this.cB(b,c)},
$isH7:1,
gh1:function(){return this.b}}
H.kF.prototype={
gdr:function(a){return this.b.index},
gen:function(a){var t=this.b
return t.index+t[0].length},
bj:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.u(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$isdE:1}
H.qC.prototype={
gX:function(a){return new H.ku(this.a,this.b,this.c,null)},
$ashF:function(){return[P.dE]},
$asn:function(){return[P.dE]}}
H.ku.prototype={
gO:function(){return this.d},
F:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.fM(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.kg.prototype={
gen:function(a){return this.a+this.c.length},
n:function(a,b){return this.bj(b)},
bj:function(a){if(!J.b0(a,0))throw H.j(P.k8(a,null,null))
return this.c},
$isdE:1,
gdr:function(a){return this.a}}
H.rS.prototype={
gX:function(a){return new H.rT(this.a,this.b,this.c,null)},
$asn:function(){return[P.dE]}}
H.rT.prototype={
F:function(){var t,s,r,q,p,o,n
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
this.d=new H.kg(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gO:function(){return this.d}}
H.fw.prototype={
gaf:function(a){return C.aa},
hr:function(a,b,c){return H.cT(a,b,c)},
hq:function(a){return this.hr(a,0,null)},
hp:function(a,b,c){var t
H.yJ(a,b,c)
t=new DataView(a,b)
return t},
ho:function(a,b){return this.hp(a,b,null)},
$isfw:1,
$isbi:1,
$isA:1,
gez:function(a){return a.byteLength}}
H.eK.prototype={
fZ:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dP(b,d,"Invalid list position"))
else throw H.j(P.bz(b,0,c,d,null))},
dF:function(a,b,c,d){if(b>>>0!==b||b>c)this.fZ(a,b,c,d)},
$iseK:1,
$isA:1,
gc6:function(a){return a.buffer},
gez:function(a){return a.byteLength}}
H.nV.prototype={
gaf:function(a){return C.ab},
$isA:1}
H.jW.prototype={
gm:function(a){return a.length},
e7:function(a,b,c,d,e){var t,s,r
t=a.length
this.dF(a,b,t,"start")
this.dF(a,c,t,"end")
if(typeof b!=="number")return b.aG()
if(typeof c!=="number")return H.a7(c)
if(b>c)throw H.j(P.bz(b,0,c,null,null))
s=c-b
if(J.dO(e,0))throw H.j(P.dk(e))
r=d.length
if(typeof e!=="number")return H.a7(e)
if(r-e<s)throw H.j(new P.dd("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaH:1,
$asaH:function(){},
$isaA:1,
$asaA:function(){}}
H.hT.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aM(H.c8(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aM(H.c8(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.aj(d).$ishT){this.e7(a,b,c,d,e)
return}this.dt(a,b,c,d,e)},
aB:function(a,b,c,d){return this.a7(a,b,c,d,0)}}
H.hV.prototype={
$asaH:function(){},
$asaA:function(){},
$asp:function(){return[P.W]},
$ast:function(){return[P.W]},
$asn:function(){return[P.W]},
$isp:1,
$ist:1,
$isn:1}
H.hX.prototype={
$asaH:function(){},
$asaA:function(){},
$asp:function(){return[P.W]},
$ast:function(){return[P.W]},
$asn:function(){return[P.W]}}
H.hU.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aM(H.c8(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.aj(d).$ishU){this.e7(a,b,c,d,e)
return}this.dt(a,b,c,d,e)},
aB:function(a,b,c,d){return this.a7(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.hW.prototype={
$asaH:function(){},
$asaA:function(){},
$asp:function(){return[P.D]},
$ast:function(){return[P.D]},
$asn:function(){return[P.D]},
$isp:1,
$ist:1,
$isn:1}
H.hY.prototype={
$asaH:function(){},
$asaA:function(){},
$asp:function(){return[P.D]},
$ast:function(){return[P.D]},
$asn:function(){return[P.D]}}
H.nW.prototype={
gaf:function(a){return C.ac},
$isA:1,
$isp:1,
$asp:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$isn:1,
$asn:function(){return[P.W]}}
H.nX.prototype={
gaf:function(a){return C.ad},
$isA:1,
$isp:1,
$asp:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$isn:1,
$asn:function(){return[P.W]}}
H.nY.prototype={
gaf:function(a){return C.ae},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aM(H.c8(a,b))
return a[b]},
$isA:1,
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.nZ.prototype={
gaf:function(a){return C.af},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aM(H.c8(a,b))
return a[b]},
$isA:1,
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.o_.prototype={
gaf:function(a){return C.ag},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aM(H.c8(a,b))
return a[b]},
$isA:1,
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.o0.prototype={
gaf:function(a){return C.ak},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aM(H.c8(a,b))
return a[b]},
$isA:1,
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.o1.prototype={
gaf:function(a){return C.al},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aM(H.c8(a,b))
return a[b]},
$isA:1,
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.jX.prototype={
gaf:function(a){return C.am},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aM(H.c8(a,b))
return a[b]},
$isA:1,
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.fx.prototype={
gaf:function(a){return C.an},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aM(H.c8(a,b))
return a[b]},
co:function(a,b,c){return new Uint8Array(a.subarray(b,H.Ic(b,c,a.length)))},
$isfx:1,
$isdg:1,
$isA:1,
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
P.qE.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.qD.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.qF.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qG.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.tb.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.tc.prototype={
$2:function(a,b){this.a.$2(1,new H.hp(a,b))},
$S:function(){return{func:1,args:[,P.e0]}}}
P.to.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.D,,]}}}
P.cs.prototype={}
P.tr.prototype={
$0:function(){var t,s,r
try{this.b.aM(this.a.$0())}catch(r){t=H.bH(r)
s=H.co(r)
P.yK(this.b,t,s)}},
$S:function(){return{func:1}}}
P.mE.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.aq(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.aq(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.mD.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.u(r,t)
r[t]=a
if(s===0)this.d.dJ(r)}else if(t.b===0&&!this.b)this.d.aq(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.fc.prototype={}
P.kw.prototype={
cT:function(a,b){if(a==null)a=new P.fy()
if(this.a.a!==0)throw H.j(new P.dd("Future already completed"))
$.ap.toString
this.aq(a,b)},
bB:function(a){return this.cT(a,null)},
$isfc:1,
ghW:function(){return this.a}}
P.e3.prototype={
aJ:function(a,b){var t=this.a
if(t.a!==0)throw H.j(new P.dd("Future already completed"))
t.dD(b)},
hv:function(a){return this.aJ(a,null)},
aq:function(a,b){this.a.dE(a,b)}}
P.kJ.prototype={
aJ:function(a,b){var t=this.a
if(t.a!==0)throw H.j(new P.dd("Future already completed"))
t.aM(b)},
aq:function(a,b){this.a.aq(a,b)}}
P.kA.prototype={
ghk:function(){return this.b.b},
geq:function(){return(this.c&1)!==0},
gi2:function(){return(this.c&2)!==0},
gep:function(){return this.c===8},
i0:function(a){return this.b.b.dc(this.d,a)},
ie:function(a){if(this.c!==6)return!0
return this.b.b.dc(this.d,J.fV(a))},
hX:function(a){var t,s,r
t=this.e
s=J.aP(a)
r=this.b.b
if(H.fU(t,{func:1,args:[,,]}))return r.iD(t,s.gav(a),a.gaQ())
else return r.dc(t,s.gav(a))},
i1:function(){return this.b.b.eJ(this.d)},
gcI:function(){return this.a}}
P.bm.prototype={
gh_:function(){return this.a===2},
gcF:function(){return this.a>=4},
cg:function(a,b){var t=$.ap
if(t!==C.e){t.toString
if(b!=null)b=P.yO(b,t)}return this.cN(a,b)},
b1:function(a){return this.cg(a,null)},
cN:function(a,b){var t,s
t=new P.bm(0,$.ap,null,[null])
s=b==null?1:3
this.cq(new P.kA(null,t,s,a,b,[H.N(this,0),null]))
return t},
cj:function(a){var t,s
t=$.ap
s=new P.bm(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.N(this,0)
this.cq(new P.kA(null,s,8,a,null,[t,t]))
return s},
cq:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcF()){s.cq(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fS(null,null,t,new P.r3(this,a))}},
e1:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcI()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcF()){p.e1(a)
return}this.a=p.a
this.c=p.c}t.a=this.c1(a)
s=this.b
s.toString
P.fS(null,null,s,new P.rb(t,this))}},
c0:function(){var t=this.c
this.c=null
return this.c1(t)},
c1:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcI()
t.a=s}return s},
aM:function(a){var t,s
t=this.$ti
if(H.e4(a,"$iscs",t,"$ascs"))if(H.e4(a,"$isbm",t,null))P.r6(a,this)
else P.yu(a,this)
else{s=this.c0()
this.a=4
this.c=a
P.fN(this,s)}},
dJ:function(a){var t=this.c0()
this.a=4
this.c=a
P.fN(this,t)},
aq:function(a,b){var t=this.c0()
this.a=8
this.c=new P.f5(a,b)
P.fN(this,t)},
fF:function(a){return this.aq(a,null)},
dD:function(a){var t
if(H.e4(a,"$iscs",this.$ti,"$ascs")){this.fC(a)
return}this.a=1
t=this.b
t.toString
P.fS(null,null,t,new P.r5(this,a))},
fC:function(a){var t
if(H.e4(a,"$isbm",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fS(null,null,t,new P.ra(this,a))}else P.r6(a,this)
return}P.yu(a,this)},
dE:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fS(null,null,t,new P.r4(this,a,b))},
$iscs:1,
gc2:function(){return this.a},
gha:function(){return this.c}}
P.r3.prototype={
$0:function(){P.fN(this.a,this.b)},
$S:function(){return{func:1}}}
P.rb.prototype={
$0:function(){P.fN(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.r7.prototype={
$1:function(a){var t=this.a
t.a=0
t.aM(a)},
$S:function(){return{func:1,args:[,]}}}
P.r8.prototype={
$2:function(a,b){this.a.aq(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.r9.prototype={
$0:function(){this.a.aq(this.b,this.c)},
$S:function(){return{func:1}}}
P.r5.prototype={
$0:function(){this.a.dJ(this.b)},
$S:function(){return{func:1}}}
P.ra.prototype={
$0:function(){P.r6(this.b,this.a)},
$S:function(){return{func:1}}}
P.r4.prototype={
$0:function(){this.a.aq(this.b,this.c)},
$S:function(){return{func:1}}}
P.re.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.i1()}catch(q){s=H.bH(q)
r=H.co(q)
if(this.c){p=J.fV(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.f5(s,r)
o.a=!0
return}if(!!J.aj(t).$iscs){if(t instanceof P.bm&&t.gc2()>=4){if(t.gc2()===8){p=this.b
p.b=t.gha()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b1(new P.rf(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.rf.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.rd.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.i0(this.c)}catch(r){t=H.bH(r)
s=H.co(r)
q=this.a
q.b=new P.f5(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.rc.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.ie(t)===!0&&q.e!=null){p=this.b
p.b=q.hX(t)
p.a=!1}}catch(o){s=H.bH(o)
r=H.co(o)
q=this.a
p=J.fV(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.f5(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.kv.prototype={}
P.cJ.prototype={
aw:function(a,b){return new P.t7(b,this,[H.ag(this,"cJ",0)])},
aF:function(a,b){return new P.rw(b,this,[H.ag(this,"cJ",0),null])},
Z:function(a,b){var t,s
t={}
s=new P.bm(0,$.ap,null,[P.cV])
t.a=null
t.a=this.aX(new P.pl(t,this,b,s),!0,new P.pm(s),s.gbm())
return s},
a1:function(a,b){var t,s
t={}
s=new P.bm(0,$.ap,null,[null])
t.a=null
t.a=this.aX(new P.pr(t,this,b,s),!0,new P.ps(s),s.gbm())
return s},
gm:function(a){var t,s
t={}
s=new P.bm(0,$.ap,null,[P.D])
t.a=0
this.aX(new P.pv(t),!0,new P.pw(t,s),s.gbm())
return s},
gV:function(a){var t,s
t={}
s=new P.bm(0,$.ap,null,[P.cV])
t.a=null
t.a=this.aX(new P.pt(t,s),!0,new P.pu(s),s.gbm())
return s},
at:function(a){var t,s,r
t=H.ag(this,"cJ",0)
s=H.a([],[t])
r=new P.bm(0,$.ap,null,[[P.p,t]])
this.aX(new P.px(this,s),!0,new P.py(s,r),r.gbm())
return r},
aD:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b||b<0)H.aM(P.dk(b))
return new P.rO(b,this,[H.ag(this,"cJ",0)])},
gad:function(a){var t,s
t={}
s=new P.bm(0,$.ap,null,[H.ag(this,"cJ",0)])
t.a=null
t.a=this.aX(new P.pn(t,this,s),!0,new P.po(s),s.gbm())
return s}}
P.pl.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.yS(new P.pj(this.c,a),new P.pk(t,s),P.yI(t.a,s))},
$S:function(){return H.eo(function(a){return{func:1,args:[a]}},this.b,"cJ")}}
P.pj.prototype={
$0:function(){return J.b0(this.b,this.a)},
$S:function(){return{func:1}}}
P.pk.prototype={
$1:function(a){if(a===!0)P.w0(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.cV]}}}
P.pm.prototype={
$0:function(){this.a.aM(!1)},
$S:function(){return{func:1}}}
P.pr.prototype={
$1:function(a){P.yS(new P.pp(this.c,a),new P.pq(),P.yI(this.a.a,this.d))},
$S:function(){return H.eo(function(a){return{func:1,args:[a]}},this.b,"cJ")}}
P.pp.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.pq.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.ps.prototype={
$0:function(){this.a.aM(null)},
$S:function(){return{func:1}}}
P.pv.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.pw.prototype={
$0:function(){this.b.aM(this.a.a)},
$S:function(){return{func:1}}}
P.pt.prototype={
$1:function(a){P.w0(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.pu.prototype={
$0:function(){this.a.aM(!0)},
$S:function(){return{func:1}}}
P.px.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eo(function(a){return{func:1,args:[a]}},this.a,"cJ")}}
P.py.prototype={
$0:function(){this.b.aM(this.a)},
$S:function(){return{func:1}}}
P.pn.prototype={
$1:function(a){P.w0(this.a.a,this.c,a)},
$S:function(){return H.eo(function(a){return{func:1,args:[a]}},this.b,"cJ")}}
P.po.prototype={
$0:function(){var t,s,r,q
try{r=H.hG()
throw H.j(r)}catch(q){t=H.bH(q)
s=H.co(q)
P.yK(this.a,t,s)}},
$S:function(){return{func:1}}}
P.pi.prototype={}
P.di.prototype={
d2:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.ei()
if((t&4)===0&&(this.e&32)===0)this.dR(this.ge_())},
eE:function(a){return this.d2(a,null)},
eI:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gV(t)}else t=!1
if(t)this.r.cm(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dR(this.ge0())}}}},
c7:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cs()
t=this.f
return t==null?$.$get$hy():t},
cs:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.ei()
if((this.e&32)===0)this.r=null
this.f=this.dZ()},
bl:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.e4(b)
else this.cr(new P.qR(b,null,[H.ag(this,"di",0)]))},
bV:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.e6(a,b)
else this.cr(new P.qT(a,b,null))},
fB:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.e5()
else this.cr(C.Q)},
bZ:function(){},
c_:function(){},
dZ:function(){return},
cr:function(a){var t,s
t=this.r
if(t==null){t=new P.rQ(null,null,0,[H.ag(this,"di",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.cm(this)}},
e4:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.dd(this.a,a)
this.e=(this.e&4294967263)>>>0
this.cu((t&4)!==0)},
e6:function(a,b){var t,s
t=this.e
s=new P.qK(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cs()
t=this.f
if(!!J.aj(t).$iscs&&t!==$.$get$hy())t.cj(s)
else s.$0()}else{s.$0()
this.cu((t&4)!==0)}},
e5:function(){var t,s
t=new P.qJ(this)
this.cs()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.aj(s).$iscs&&s!==$.$get$hy())s.cj(t)
else t.$0()},
dR:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.cu((t&4)!==0)},
cu:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gV(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gV(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bZ()
else this.c_()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.cm(this)},
dz:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.yO(b,t)
this.c=c},
gc2:function(){return this.e}}
P.qK.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fU(s,{func:1,args:[P.A,P.e0]})
q=t.d
p=this.b
o=t.b
if(r)q.iE(o,p,this.c)
else q.dd(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.qJ.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eK(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.ky.prototype={
gbL:function(a){return this.a},
sbL:function(a,b){return this.a=b}}
P.qR.prototype={
d3:function(a){a.e4(this.b)}}
P.qT.prototype={
d3:function(a){a.e6(this.b,this.c)},
$asky:function(){},
gav:function(a){return this.b},
gaQ:function(){return this.c}}
P.qS.prototype={
d3:function(a){a.e5()},
gbL:function(a){return},
sbL:function(a,b){throw H.j(new P.dd("No events after a done."))}}
P.ry.prototype={
cm:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.z9(new P.rz(this,a))
this.a=1},
ei:function(){if(this.a===1)this.a=3},
gc2:function(){return this.a}}
P.rz.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbL(r)
t.b=q
if(q==null)t.c=null
r.d3(this.b)},
$S:function(){return{func:1}}}
P.rQ.prototype={
gV:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbL(0,b)
this.c=b}}}
P.rR.prototype={}
P.te.prototype={
$0:function(){return this.a.aq(this.b,this.c)},
$S:function(){return{func:1}}}
P.td.prototype={
$2:function(a,b){P.Ib(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.e0]}}}
P.tf.prototype={
$0:function(){return this.a.aM(this.b)},
$S:function(){return{func:1}}}
P.eZ.prototype={
aX:function(a,b,c,d){return this.dL(a,d,c,!0===b)},
eA:function(a,b,c){return this.aX(a,null,b,c)},
dL:function(a,b,c,d){return P.HP(this,a,b,c,d,H.ag(this,"eZ",0),H.ag(this,"eZ",1))},
bX:function(a,b){b.bl(0,a)},
fX:function(a,b,c){c.bV(a,b)},
$ascJ:function(a,b){return[b]}}
P.f_.prototype={
bl:function(a,b){if((this.e&2)!==0)return
this.fg(0,b)},
bV:function(a,b){if((this.e&2)!==0)return
this.fh(a,b)},
bZ:function(){var t=this.y
if(t==null)return
t.eE(0)},
c_:function(){var t=this.y
if(t==null)return
t.eI(0)},
dZ:function(){var t=this.y
if(t!=null){this.y=null
return t.c7(0)}return},
fS:function(a){this.x.bX(a,this)},
fW:function(a,b){this.x.fX(a,b,this)},
fU:function(){this.fB()},
dA:function(a,b,c,d,e,f,g){this.y=this.x.a.eA(this.gfR(),this.gfT(),this.gfV())},
$asdi:function(a,b){return[b]}}
P.t7.prototype={
bX:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.bH(q)
r=H.co(q)
P.yG(b,s,r)
return}if(t===!0)b.bl(0,a)},
$aseZ:function(a){return[a,a]},
$ascJ:null}
P.rw.prototype={
bX:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.bH(q)
r=H.co(q)
P.yG(b,s,r)
return}b.bl(0,t)}}
P.rP.prototype={
gfI:function(a){return this.z},
$asf_:function(a){return[a,a]},
$asdi:null}
P.rO.prototype={
dL:function(a,b,c,d){var t,s,r
t=H.N(this,0)
s=$.ap
r=d?1:0
r=new P.rP(this.b,this,null,null,null,null,s,r,null,null,this.$ti)
r.dz(a,b,c,d,t)
r.dA(this,a,b,c,d,t,t)
return r},
bX:function(a,b){var t,s
t=b.gfI(b)
s=J.du(t)
if(s.aG(t,0)){b.z=s.ag(t,1)
return}b.bl(0,a)},
$aseZ:function(a){return[a,a]},
$ascJ:null}
P.f5.prototype={
w:function(a){return H.x(this.a)},
$iset:1,
gav:function(a){return this.a},
gaQ:function(){return this.b}}
P.ta.prototype={}
P.tn.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fy()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.j(t)
r=H.j(t)
r.stack=J.cA(s)
throw r},
$S:function(){return{func:1}}}
P.rC.prototype={
eK:function(a){var t,s,r,q
try{if(C.e===$.ap){r=a.$0()
return r}r=P.yP(null,null,this,a)
return r}catch(q){t=H.bH(q)
s=H.co(q)
r=P.kN(null,null,this,t,s)
return r}},
dd:function(a,b){var t,s,r,q
try{if(C.e===$.ap){r=a.$1(b)
return r}r=P.yR(null,null,this,a,b)
return r}catch(q){t=H.bH(q)
s=H.co(q)
r=P.kN(null,null,this,t,s)
return r}},
iE:function(a,b,c){var t,s,r,q
try{if(C.e===$.ap){r=a.$2(b,c)
return r}r=P.yQ(null,null,this,a,b,c)
return r}catch(q){t=H.bH(q)
s=H.co(q)
r=P.kN(null,null,this,t,s)
return r}},
cS:function(a,b){if(b)return new P.rD(this,a)
else return new P.rE(this,a)},
ht:function(a,b){return new P.rF(this,a)},
n:function(a,b){return},
eJ:function(a){if($.ap===C.e)return a.$0()
return P.yP(null,null,this,a)},
dc:function(a,b){if($.ap===C.e)return a.$1(b)
return P.yR(null,null,this,a,b)},
iD:function(a,b,c){if($.ap===C.e)return a.$2(b,c)
return P.yQ(null,null,this,a,b,c)}}
P.rD.prototype={
$0:function(){return this.a.eK(this.b)},
$S:function(){return{func:1}}}
P.rE.prototype={
$0:function(){return this.a.eJ(this.b)},
$S:function(){return{func:1}}}
P.rF.prototype={
$1:function(a){return this.a.dd(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.rh.prototype={
gm:function(a){return this.a},
gV:function(a){return this.a===0},
gak:function(a){return this.a!==0},
gae:function(a){return new P.kC(this,[H.N(this,0)])},
gci:function(a){var t=H.N(this,0)
return H.dD(new P.kC(this,[t]),new P.rj(this),t,H.N(this,1))},
Y:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fH(b)},
fH:function(a){var t=this.d
if(t==null)return!1
return this.aU(t[this.aT(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fP(0,b)},
fP:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aT(b)]
r=this.aU(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.vY()
this.b=t}this.dH(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.vY()
this.c=s}this.dH(s,b,c)}else this.hd(b,c)},
hd:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.vY()
this.d=t}s=this.aT(a)
r=t[s]
if(r==null){P.vZ(t,s,[a,b]);++this.a
this.e=null}else{q=this.aU(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
as:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bw(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bw(this.c,b)
else return this.cL(0,b)},
cL:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aT(b)]
r=this.aU(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a1:function(a,b){var t,s,r,q
t=this.cv()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.j(new P.bJ(this))}},
cv:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dH:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.vZ(a,b,c)},
bw:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.HR(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aT:function(a){return J.cX(a)&0x3ffffff},
aU:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.b0(a[s],b))return s
return-1},
$isaK:1,
$asaK:null}
P.rj.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kC.prototype={
gm:function(a){return this.a.a},
gV:function(a){return this.a.a===0},
gX:function(a){var t=this.a
return new P.ri(t,t.cv(),0,null,this.$ti)},
Z:function(a,b){return this.a.Y(0,b)},
a1:function(a,b){var t,s,r,q
t=this.a
s=t.cv()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.j(new P.bJ(t))}}}
P.ri.prototype={
gO:function(){return this.d},
F:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.j(new P.bJ(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.kE.prototype={
bJ:function(a){return H.J0(a)&0x3ffffff},
bK:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gev()
if(r==null?b==null:r===b)return s}return-1}}
P.kD.prototype={
gX:function(a){var t=new P.dL(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gV:function(a){return this.a===0},
gak:function(a){return this.a!==0},
Z:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.fG(b)},
fG:function(a){var t=this.d
if(t==null)return!1
return this.aU(t[this.aT(a)],a)>=0},
d_:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.Z(0,a)?a:null
else return this.h0(a)},
h0:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aT(a)]
r=this.aU(s,a)
if(r<0)return
return J.d8(s,r).gdP()},
a1:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.j(new P.bJ(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dG(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dG(r,b)}else return this.aS(0,b)},
aS:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.HV()
this.d=t}s=this.aT(b)
r=t[s]
if(r==null)t[s]=[this.cw(b)]
else{if(this.aU(r,b)>=0)return!1
r.push(this.cw(b))}return!0},
as:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bw(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bw(this.c,b)
else return this.cL(0,b)},
cL:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aT(b)]
r=this.aU(s,b)
if(r<0)return!1
this.dI(s.splice(r,1)[0])
return!0},
bp:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dG:function(a,b){if(a[b]!=null)return!1
a[b]=this.cw(b)
return!0},
bw:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dI(t)
delete a[b]
return!0},
cw:function(a){var t,s
t=new P.rs(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dI:function(a){var t,s
t=a.gfE()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aT:function(a){return J.cX(a)&0x3ffffff},
aU:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b0(a[s].gdP(),b))return s
return-1},
$iseN:1,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
P.rs.prototype={
gdP:function(){return this.a},
gfE:function(){return this.c}}
P.dL.prototype={
gO:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.j(new P.bJ(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.rk.prototype={}
P.ei.prototype={
aF:function(a,b){return H.dD(this,b,H.ag(this,"ei",0),null)},
aw:function(a,b){return new H.dh(this,b,[H.ag(this,"ei",0)])},
Z:function(a,b){var t
for(t=this.gX(this);t.F();)if(J.b0(t.gO(),b))return!0
return!1},
a1:function(a,b){var t
for(t=this.gX(this);t.F();)b.$1(t.gO())},
a6:function(a,b){return P.d0(this,!0,H.ag(this,"ei",0))},
at:function(a){return this.a6(a,!0)},
gm:function(a){var t,s
t=this.gX(this)
for(s=0;t.F();)++s
return s},
gV:function(a){return!this.gX(this).F()},
gak:function(a){return this.gX(this).F()},
aD:function(a,b){return H.p2(this,b,H.ag(this,"ei",0))},
w:function(a){return P.uY(this,"(",")")},
$isn:1,
$asn:null}
P.hF.prototype={}
P.tt.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return{func:1,args:[,,]}}}
P.hM.prototype={}
P.fA.prototype={$asp:null,$ast:null,$asn:null,$isp:1,$ist:1,$isn:1}
P.aO.prototype={
gX:function(a){return new H.eG(a,this.gm(a),0,null,[H.ag(a,"aO",0)])},
W:function(a,b){return this.n(a,b)},
a1:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.j(new P.bJ(a))}},
gV:function(a){return this.gm(a)===0},
gak:function(a){return this.gm(a)!==0},
Z:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.b0(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.j(new P.bJ(a))}return!1},
aw:function(a,b){return new H.dh(a,b,[H.ag(a,"aO",0)])},
aF:function(a,b){return new H.eI(a,b,[H.ag(a,"aO",0),null])},
aD:function(a,b){return H.pF(a,b,null,H.ag(a,"aO",0))},
a6:function(a,b){var t,s,r
t=H.a([],[H.ag(a,"aO",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
at:function(a){return this.a6(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bH:function(a,b,c,d){var t
P.dr(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a7:function(a,b,c,d,e){var t,s,r,q,p,o
P.dr(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.ag()
if(typeof b!=="number")return H.a7(b)
t=c-b
if(t===0)return
if(J.dO(e,0))H.aM(P.bz(e,0,null,"skipCount",null))
if(H.e4(d,"$isp",[H.ag(a,"aO",0)],"$asp")){s=e
r=d}else{r=J.zE(d,e).a6(0,!1)
s=0}q=J.kP(s)
p=J.aY(r)
if(J.cz(q.R(s,t),p.gm(r)))throw H.j(H.xH())
if(q.a3(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.R(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.R(s,o)))},
aB:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aK:function(a,b,c,d){var t,s,r,q,p
P.dr(b,c,this.gm(a),null,null,null)
d=C.c.at(d)
if(typeof c!=="number")return c.ag()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.aB(a,b,r,d)
if(q!==0){this.a7(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a7(a,r,p,a,c)
this.aB(a,b,r,d)}},
ba:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.b0(this.n(a,t),b))return t
return-1},
br:function(a,b){return this.ba(a,b,0)},
w:function(a){return P.jL(a,"[","]")},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
P.nK.prototype={
a1:function(a,b){var t,s
for(t=J.cF(J.fW(this.a));t.F();){s=t.gO()
b.$2(s,J.d8(this.a,s))}},
gm:function(a){return J.c9(J.fW(this.a))},
gV:function(a){return J.kW(J.fW(this.a))},
gak:function(a){return J.tU(J.fW(this.a))},
w:function(a){return P.nL(this)},
$isaK:1,
$asaK:null}
P.t0.prototype={
i:function(a,b,c){throw H.j(new P.S("Cannot modify unmodifiable map"))},
$isaK:1,
$asaK:null}
P.jR.prototype={
n:function(a,b){return J.d8(this.a,b)},
i:function(a,b,c){J.it(this.a,b,c)},
a1:function(a,b){J.wh(this.a,b)},
gV:function(a){return J.kW(this.a)},
gak:function(a){return J.tU(this.a)},
gm:function(a){return J.c9(this.a)},
gae:function(a){return J.fW(this.a)},
w:function(a){return J.cA(this.a)},
$isaK:1,
$asaK:null}
P.eV.prototype={$asaK:null,$isaK:1}
P.nM.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.L+=", "
t.a=!1
t=this.b
s=t.L+=H.x(a)
t.L=s+": "
t.L+=H.x(b)},
$S:function(){return{func:1,args:[,,]}}}
P.nx.prototype={
gX:function(a){return new P.rt(this,this.c,this.d,this.b,null,this.$ti)},
a1:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.u(r,s)
b.$1(r[s])
if(t!==this.d)H.aM(new P.bJ(this))}},
gV:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
W:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a7(b)
if(0>b||b>=t)H.aM(P.bB(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.u(s,q)
return s[q]},
a6:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.hj(t)
return t},
at:function(a){return this.a6(a,!0)},
h:function(a,b){this.aS(0,b)},
bp:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.u(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
w:function(a){return P.jL(this,"{","}")},
eH:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.j(H.hG());++this.d
s=this.a
r=s.length
if(t>=r)return H.u(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aS:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.u(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dQ();++this.d},
dQ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a7(s,0,q,t,r)
C.b.a7(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
hj:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a7(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a7(a,0,p,r,t)
C.b.a7(a,p,p+this.c,this.a,0)
return this.c+p}},
fm:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$ast:null,
$asn:null}
P.rt.prototype={
gO:function(){return this.e},
F:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aM(new P.bJ(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.u(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.p_.prototype={
gV:function(a){return this.a===0},
gak:function(a){return this.a!==0},
ao:function(a,b){var t
for(t=J.cF(b);t.F();)this.h(0,t.gO())},
a6:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dL(this,this.r,null,null,[null]),s.c=this.e,r=0;s.F();r=p){q=s.d
p=r+1
if(r>=t.length)return H.u(t,r)
t[r]=q}return t},
at:function(a){return this.a6(a,!0)},
aF:function(a,b){return new H.hg(this,b,[H.N(this,0),null])},
w:function(a){return P.jL(this,"{","}")},
aw:function(a,b){return new H.dh(this,b,this.$ti)},
a1:function(a,b){var t
for(t=new P.dL(this,this.r,null,null,[null]),t.c=this.e;t.F();)b.$1(t.d)},
bs:function(a,b){var t,s
t=new P.dL(this,this.r,null,null,[null])
t.c=this.e
if(!t.F())return""
if(b===""){s=""
do s+=H.x(t.d)
while(t.F())}else{s=H.x(t.d)
for(;t.F();)s=s+b+H.x(t.d)}return s.charCodeAt(0)==0?s:s},
aD:function(a,b){return H.p2(this,b,H.N(this,0))},
$iseN:1,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
P.oZ.prototype={}
P.rn.prototype={
n:function(a,b){var t,s
t=this.b
if(t==null)return this.c.n(0,b)
else if(typeof b!=="string")return
else{s=t[b]
return typeof s=="undefined"?this.h7(b):s}},
gm:function(a){var t
if(this.b==null){t=this.c
t=t.gm(t)}else t=this.b4().length
return t},
gV:function(a){var t
if(this.b==null){t=this.c
t=t.gm(t)}else t=this.b4().length
return t===0},
gak:function(a){var t
if(this.b==null){t=this.c
t=t.gm(t)}else t=this.b4().length
return t>0},
gae:function(a){var t
if(this.b==null){t=this.c
return t.gae(t)}return new P.ro(this)},
i:function(a,b,c){var t,s
if(this.b==null)this.c.i(0,b,c)
else if(this.Y(0,b)){t=this.b
t[b]=c
s=this.a
if(s==null?t!=null:s!==t)s[b]=null}else this.hh().i(0,b,c)},
Y:function(a,b){if(this.b==null)return this.c.Y(0,b)
if(typeof b!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
a1:function(a,b){var t,s,r,q
if(this.b==null)return this.c.a1(0,b)
t=this.b4()
for(s=0;s<t.length;++s){r=t[s]
q=this.b[r]
if(typeof q=="undefined"){q=P.ti(this.a[r])
this.b[r]=q}b.$2(r,q)
if(t!==this.c)throw H.j(new P.bJ(this))}},
w:function(a){return P.nL(this)},
b4:function(){var t=this.c
if(t==null){t=Object.keys(this.a)
this.c=t}return t},
hh:function(){var t,s,r,q,p
if(this.b==null)return this.c
t=P.cD(P.y,null)
s=this.b4()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.i(0,p,this.n(0,p))}if(q===0)s.push(null)
else C.b.sm(s,0)
this.b=null
this.a=null
this.c=t
return t},
h7:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
t=P.ti(this.a[a])
return this.b[a]=t},
$isaK:1,
$asaK:function(){return[P.y,null]}}
P.ro.prototype={
gm:function(a){var t=this.a
if(t.b==null){t=t.c
t=t.gm(t)}else t=t.b4().length
return t},
W:function(a,b){var t=this.a
if(t.b==null)t=t.gae(t).W(0,b)
else{t=t.b4()
if(b>>>0!==b||b>=t.length)return H.u(t,b)
t=t[b]}return t},
gX:function(a){var t=this.a
if(t.b==null){t=t.gae(t)
t=t.gX(t)}else{t=t.b4()
t=new J.f4(t,t.length,0,null,[H.N(t,0)])}return t},
Z:function(a,b){return this.a.Y(0,b)},
$asdW:function(){return[P.y]},
$ast:function(){return[P.y]},
$asn:function(){return[P.y]}}
P.la.prototype={
ik:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.aY(b)
a1=P.dr(a0,a1,t.gm(b),null,null,null)
s=$.$get$yt()
if(typeof a1!=="number")return H.a7(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.a_(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.tA(C.c.a8(b,l))
h=H.tA(C.c.a8(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.u(s,g)
f=s[g]
if(f>=0){g=C.c.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.L.length
if(e==null)e=0
if(typeof e!=="number")return e.R()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.c6("")
p.L+=C.c.H(b,q,r)
p.L+=H.fC(k)
q=l
continue}}throw H.j(new P.bK("Invalid base64 data",b,r))}if(p!=null){t=p.L+=t.H(b,q,a1)
e=t.length
if(o>=0)P.wt(b,n,a1,o,m,e)
else{d=C.a.bU(e-1,4)+1
if(d===1)throw H.j(new P.bK("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.L=t;++d}}t=p.L
return C.c.aK(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.wt(b,n,a1,o,m,c)
else{d=C.d.bU(c,4)
if(d===1)throw H.j(new P.bK("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aK(b,a1,a1,d===2?"==":"=")}return b},
$asfb:function(){return[[P.p,P.D],P.y]}}
P.lb.prototype={
$aser:function(){return[[P.p,P.D],P.y]}}
P.fb.prototype={}
P.er.prototype={}
P.lU.prototype={
$asfb:function(){return[P.y,[P.p,P.D]]}}
P.hI.prototype={
w:function(a){if(this.b!=null)return"Converting object to an encodable object failed."
else return"Converting object did not return an encodable object."}}
P.nj.prototype={
w:function(a){return"Cyclic error in JSON stringify"}}
P.ni.prototype={
hC:function(a,b){var t=P.Im(a,this.ghF().a)
return t},
hB:function(a){return this.hC(a,null)},
hO:function(a,b){var t=this.ghP()
t=P.HU(a,t.b,t.a)
return t},
hN:function(a){return this.hO(a,null)},
ghP:function(){return C.a1},
ghF:function(){return C.a0},
$asfb:function(){return[P.A,P.y]}}
P.nl.prototype={
$aser:function(){return[P.A,P.y]}}
P.nk.prototype={
$aser:function(){return[P.y,P.A]}}
P.rq.prototype={
eV:function(a){var t,s,r,q,p,o
t=J.aY(a)
s=t.gm(a)
if(typeof s!=="number")return H.a7(s)
r=0
q=0
for(;q<s;++q){p=t.a_(a,q)
if(p>92)continue
if(p<32){if(q>r)this.dh(a,r,q)
r=q+1
this.az(92)
switch(p){case 8:this.az(98)
break
case 9:this.az(116)
break
case 10:this.az(110)
break
case 12:this.az(102)
break
case 13:this.az(114)
break
default:this.az(117)
this.az(48)
this.az(48)
o=p>>>4&15
this.az(o<10?48+o:87+o)
o=p&15
this.az(o<10?48+o:87+o)
break}}else if(p===34||p===92){if(q>r)this.dh(a,r,q)
r=q+1
this.az(92)
this.az(p)}}if(r===0)this.ax(a)
else if(r<s)this.dh(a,r,s)},
ct:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw H.j(new P.nj(a,null))}t.push(a)},
ck:function(a){var t,s,r,q
if(this.eU(a))return
this.ct(a)
try{t=this.b.$1(a)
if(!this.eU(t))throw H.j(new P.hI(a,null))
r=this.a
if(0>=r.length)return H.u(r,-1)
r.pop()}catch(q){s=H.bH(q)
throw H.j(new P.hI(a,s))}},
eU:function(a){var t,s
if(typeof a==="number"){if(!isFinite(a))return!1
this.iQ(a)
return!0}else if(a===!0){this.ax("true")
return!0}else if(a===!1){this.ax("false")
return!0}else if(a==null){this.ax("null")
return!0}else if(typeof a==="string"){this.ax('"')
this.eV(a)
this.ax('"')
return!0}else{t=J.aj(a)
if(!!t.$isp){this.ct(a)
this.iO(a)
t=this.a
if(0>=t.length)return H.u(t,-1)
t.pop()
return!0}else if(!!t.$isaK){this.ct(a)
s=this.iP(a)
t=this.a
if(0>=t.length)return H.u(t,-1)
t.pop()
return s}else return!1}},
iO:function(a){var t,s
this.ax("[")
t=J.aY(a)
if(t.gm(a)>0){this.ck(t.n(a,0))
for(s=1;s<t.gm(a);++s){this.ax(",")
this.ck(t.n(a,s))}}this.ax("]")},
iP:function(a){var t,s,r,q,p,o
t={}
s=J.aY(a)
if(s.gV(a)===!0){this.ax("{}")
return!0}r=s.gm(a)
if(typeof r!=="number")return r.al()
q=new Array(r*2)
t.a=0
t.b=!0
s.a1(a,new P.rr(t,q))
if(!t.b)return!1
this.ax("{")
for(s=q.length,p='"',o=0;o<s;o+=2,p=',"'){this.ax(p)
this.eV(q[o])
this.ax('":')
r=o+1
if(r>=s)return H.u(q,r)
this.ck(q[r])}this.ax("}")
return!0}}
P.rr.prototype={
$2:function(a,b){var t,s,r,q,p
if(typeof a!=="string")this.a.b=!1
t=this.b
s=this.a
r=s.a
q=r+1
s.a=q
p=t.length
if(r>=p)return H.u(t,r)
t[r]=a
s.a=q+1
if(q>=p)return H.u(t,q)
t[q]=b},
$S:function(){return{func:1,args:[,,]}}}
P.rp.prototype={
iQ:function(a){this.c.L+=C.d.w(a)},
ax:function(a){this.c.L+=H.x(a)},
dh:function(a,b,c){this.c.L+=J.zG(a,b,c)},
az:function(a){this.c.L+=H.fC(a)}}
P.qd.prototype={
gG:function(a){return"utf-8"}}
P.qe.prototype={
cU:function(a,b,c){var t,s,r,q
t=J.c9(a)
P.dr(b,c,t,null,null,null)
s=new P.c6("")
r=new P.t2(!1,s,!0,0,0,0)
r.cU(a,b,t)
r.hS(0,a,t)
q=s.L
return q.charCodeAt(0)==0?q:q},
hy:function(a){return this.cU(a,0,null)},
$aser:function(){return[[P.p,P.D],P.y]}}
P.t2.prototype={
hS:function(a,b,c){if(this.e>0)throw H.j(new P.bK("Unfinished UTF-8 octet sequence",b,c))},
cU:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.t4(c)
p=new P.t3(this,a,b,c)
$loop$0:for(o=J.aY(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aP()
if((l&192)!==128){k=new P.bK("Bad UTF-8 encoding 0x"+C.d.bQ(l,16),a,m)
throw H.j(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.u(C.B,k)
if(t<=C.B[k]){k=new P.bK("Overlong encoding of 0x"+C.a.bQ(t,16),a,m-r-1)
throw H.j(k)}if(t>1114111){k=new P.bK("Character outside valid Unicode range: 0x"+C.a.bQ(t,16),a,m-r-1)
throw H.j(k)}if(!this.c||t!==65279)n.L+=H.fC(t)
this.c=!1}if(typeof c!=="number")return H.a7(c)
k=m<c
for(;k;){j=q.$2(a,m)
if(J.cz(j,0)){this.c=!1
if(typeof j!=="number")return H.a7(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.du(l)
if(g.a3(l,0)){g=new P.bK("Negative UTF-8 code unit: -0x"+J.zJ(g.dk(l),16),a,h-1)
throw H.j(g)}else{if(typeof l!=="number")return l.aP()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bK("Bad UTF-8 encoding 0x"+C.d.bQ(l,16),a,h-1)
throw H.j(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.t4.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
if(typeof t!=="number")return H.a7(t)
s=J.aY(a)
r=b
for(;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aP()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.D,args:[,P.D]}}}
P.t3.prototype={
$2:function(a,b){this.a.b.L+=P.pD(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.D,P.D]}}}
P.cV.prototype={}
P.bI.prototype={}
P.ea.prototype={
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.ea))return!1
return this.a===b.a&&this.b===b.b},
aI:function(a,b){return C.a.aI(this.a,b.ghi())},
ga4:function(a){var t=this.a
return(t^C.a.b6(t,30))&1073741823},
w:function(a){var t,s,r,q,p,o,n
t=P.Aj(H.xU(this))
s=P.iB(H.vv(this))
r=P.iB(H.vu(this))
q=P.iB(H.GE(this))
p=P.iB(H.GG(this))
o=P.iB(H.GH(this))
n=P.Ak(H.GF(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.Ai(C.a.R(this.a,b.giX()),this.b)},
gig:function(){return this.a},
dv:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.j(P.dk(this.gig()))},
$isbI:1,
$asbI:function(){return[P.ea]},
ghi:function(){return this.a}}
P.W.prototype={$isbI:1,
$asbI:function(){return[P.dv]}}
P.dy.prototype={
R:function(a,b){return new P.dy(this.a+b.gbn())},
ag:function(a,b){return new P.dy(C.a.ag(this.a,b.gbn()))},
al:function(a,b){return new P.dy(C.a.b0(this.a*b))},
a3:function(a,b){return C.a.a3(this.a,b.gbn())},
aG:function(a,b){return C.a.aG(this.a,b.gbn())},
aA:function(a,b){return C.a.aA(this.a,b.gbn())},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dy))return!1
return this.a===b.a},
ga4:function(a){return this.a&0x1FFFFFFF},
aI:function(a,b){return C.a.aI(this.a,b.gbn())},
w:function(a){var t,s,r,q,p
t=new P.lS()
s=this.a
if(s<0)return"-"+new P.dy(0-s).w(0)
r=t.$1(C.a.ar(s,6e7)%60)
q=t.$1(C.a.ar(s,1e6)%60)
p=new P.lR().$1(s%1e6)
return""+C.a.ar(s,36e8)+":"+H.x(r)+":"+H.x(q)+"."+H.x(p)},
dk:function(a){return new P.dy(0-this.a)},
$isbI:1,
$asbI:function(){return[P.dy]},
gbn:function(){return this.a}}
P.lR.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.y,args:[P.D]}}}
P.lS.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.y,args:[P.D]}}}
P.et.prototype={
gaQ:function(){return H.co(this.$thrownJsError)}}
P.fy.prototype={
w:function(a){return"Throw of null."}}
P.cY.prototype={
gcA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcz:function(){return""},
w:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.x(t)
q=this.gcA()+s+r
if(!this.a)return q
p=this.gcz()
o=P.wM(this.b)
return q+p+": "+H.x(o)},
gG:function(a){return this.c}}
P.eM.prototype={
gcA:function(){return"RangeError"},
gcz:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.x(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.x(t)
else{if(typeof r!=="number")return r.aG()
if(r>t)s=": Not in range "+H.x(t)+".."+H.x(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.x(t)}}return s}}
P.mU.prototype={
gcA:function(){return"RangeError"},
gcz:function(){if(J.dO(this.b,0))return": index must not be negative"
var t=this.f
if(J.b0(t,0))return": no indices are valid"
return": index should be less than "+H.x(t)},
gm:function(a){return this.f}}
P.S.prototype={
w:function(a){return"Unsupported operation: "+this.a}}
P.eT.prototype={
w:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.x(t):"UnimplementedError"}}
P.dd.prototype={
w:function(a){return"Bad state: "+this.a}}
P.bJ.prototype={
w:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.x(P.wM(t))+"."}}
P.oc.prototype={
w:function(a){return"Out of Memory"},
gaQ:function(){return},
$iset:1}
P.kf.prototype={
w:function(a){return"Stack Overflow"},
gaQ:function(){return},
$iset:1}
P.lH.prototype={
w:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.x(t)+"' during its initialization"}}
P.r2.prototype={
w:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.x(t)}}
P.bK.prototype={
w:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.x(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a3()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.H(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a7(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a8(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.x(r-o+1)+")\n"):s+(" (at character "+H.x(r+1)+")\n")
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
g=""}f=C.c.H(q,i,j)
return s+h+f+g+"\n"+C.c.al(" ",r-i+h.length)+"^\n"},
gcb:function(a){return this.c}}
P.m0.prototype={
w:function(a){return"Expando:"+H.x(this.a)},
n:function(a,b){var t,s
t=this.bY
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aM(P.dP(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.vw(b,"expando$values")
return s==null?null:H.vw(s,t)},
i:function(a,b,c){var t,s
t=this.bY
if(typeof t!=="string")t.set(b,c)
else{s=H.vw(b,"expando$values")
if(s==null){s=new P.A()
H.xY(b,"expando$values",s)}H.xY(s,t,c)}},
gG:function(a){return this.a}}
P.D.prototype={$isbI:1,
$asbI:function(){return[P.dv]}}
P.n.prototype={
aF:function(a,b){return H.dD(this,b,H.ag(this,"n",0),null)},
aw:function(a,b){return new H.dh(this,b,[H.ag(this,"n",0)])},
Z:function(a,b){var t
for(t=this.gX(this);t.F();)if(J.b0(t.gO(),b))return!0
return!1},
a1:function(a,b){var t
for(t=this.gX(this);t.F();)b.$1(t.gO())},
a6:function(a,b){return P.d0(this,b,H.ag(this,"n",0))},
at:function(a){return this.a6(a,!0)},
gm:function(a){var t,s
t=this.gX(this)
for(s=0;t.F();)++s
return s},
gV:function(a){return!this.gX(this).F()},
gak:function(a){return!this.gV(this)},
aD:function(a,b){return H.p2(this,b,H.ag(this,"n",0))},
gbk:function(a){var t,s
t=this.gX(this)
if(!t.F())throw H.j(H.hG())
s=t.gO()
if(t.F())throw H.j(H.Gd())
return s},
W:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.zM("index"))
if(b<0)H.aM(P.bz(b,0,null,"index",null))
for(t=this.gX(this),s=0;t.F();){r=t.gO()
if(b===s)return r;++s}throw H.j(P.bB(b,this,"index",null,s))},
w:function(a){return P.uY(this,"(",")")},
$asn:null}
P.jM.prototype={}
P.p.prototype={$asp:null,$ist:1,$ast:null,$isn:1,$asn:null}
P.aK.prototype={$asaK:null}
P.da.prototype={
ga4:function(a){return P.A.prototype.ga4.call(this,this)},
w:function(a){return"null"}}
P.dv.prototype={$isbI:1,
$asbI:function(){return[P.dv]}}
P.A.prototype={constructor:P.A,$isA:1,
S:function(a,b){return this===b},
ga4:function(a){return H.eL(this)},
w:function(a){return H.ox(this)},
gaf:function(a){return new H.e2(H.kR(this),null)},
toString:function(){return this.w(this)}}
P.dE.prototype={}
P.eN.prototype={}
P.e0.prototype={}
P.y.prototype={$isbI:1,
$asbI:function(){return[P.y]}}
P.c6.prototype={
gm:function(a){return this.L.length},
gV:function(a){return this.L.length===0},
gak:function(a){return this.L.length!==0},
w:function(a){var t=this.L
return t.charCodeAt(0)==0?t:t},
gL:function(){return this.L}}
P.eW.prototype={}
P.qa.prototype={
$2:function(a,b){var t,s,r,q
t=J.aY(b)
s=t.br(b,"=")
if(s===-1){if(!t.S(b,""))J.it(a,P.t1(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.H(b,0,s)
q=C.c.ah(b,s+1)
t=this.a
J.it(a,P.t1(r,0,r.length,t,!0),P.t1(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.q7.prototype={
$2:function(a,b){throw H.j(new P.bK("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.y,P.D]}}}
P.q8.prototype={
$2:function(a,b){throw H.j(new P.bK("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.y],opt:[,]}}}
P.q9.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fB(C.c.H(this.a,a,b),16,null)
s=J.du(t)
if(s.a3(t,0)||s.aG(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.D,args:[P.D,P.D]}}}
P.kK.prototype={
geS:function(){return this.b},
gcY:function(a){var t=this.c
if(t==null)return""
if(C.c.aj(t,"["))return C.c.H(t,1,t.length-1)
return t},
gd4:function(a){var t=this.d
if(t==null)return P.yA(this.a)
return t},
gd7:function(a){var t=this.f
return t==null?"":t},
geo:function(){var t=this.r
return t==null?"":t},
gd8:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.y
s=new P.eV(P.ym(t==null?"":t,C.o),[s,s])
this.Q=s
t=s}return t},
ger:function(){return this.c!=null},
geu:function(){return this.f!=null},
ges:function(){return this.r!=null},
w:function(a){var t=this.y
if(t==null){t=this.dU()
this.y=t}return t},
dU:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.x(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.x(s)}else t=s
t+=H.x(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
S:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.aj(b)
if(!!t.$iseW){if(this.a===b.gdl())if(this.c!=null===b.ger()){s=this.b
r=b.geS()
if(s==null?r==null:s===r){s=this.gcY(this)
r=t.gcY(b)
if(s==null?r==null:s===r)if(J.b0(this.gd4(this),t.gd4(b)))if(J.b0(this.e,t.geD(b))){s=this.f
r=s==null
if(!r===b.geu()){if(r)s=""
if(s===t.gd7(b)){t=this.r
s=t==null
if(!s===b.ges()){if(s)t=""
t=t===b.geo()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga4:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dU()
this.y=t}t=C.c.ga4(t)
this.z=t}return t},
$iseW:1,
gdl:function(){return this.a},
geD:function(a){return this.e}}
P.tq.prototype={
$1:function(a){throw H.j(new P.bK("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.q6.prototype={
geQ:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
t=t[0]+1
r=J.aY(s)
q=r.ba(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fQ(s,o,p,C.k,!1)
if(n==null)n=r.H(s,o,p)
p=q}else n=null
m=P.fQ(s,t,p,C.J,!1)
t=new P.qQ(this,"data",null,null,null,m==null?r.H(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
w:function(a){var t,s
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
return t[0]===-1?"data:"+H.x(s):s}}
P.tk.prototype={
$1:function(a){return new Uint8Array(H.cE(96))},
$S:function(){return{func:1,args:[,]}}}
P.tj.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.u(t,a)
t=t[a]
J.zm(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.dg,args:[,,]}}}
P.tl.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.d6(a),r=0;r<t;++r)s.i(a,C.c.a8(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.dg,P.y,P.D]}}}
P.tm.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a8(b,0),s=C.c.a8(b,1),r=J.d6(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.dg,P.y,P.D]}}}
P.rN.prototype={
ger:function(){return this.c>0},
geu:function(){var t=this.f
if(typeof t!=="number")return t.a3()
return t<this.r},
ges:function(){return this.r<this.a.length},
gdl:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.aj(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.aj(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.aj(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.aj(this.a,"package")){this.x="package"
t="package"}else{t=C.c.H(this.a,0,t)
this.x=t}return t},
geS:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.H(this.a,s,t-1):""},
gcY:function(a){var t=this.c
return t>0?C.c.H(this.a,t,this.d):""},
gd4:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.R()
s=this.e
if(typeof s!=="number")return H.a7(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.R()
return H.fB(C.c.H(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.aj(this.a,"http"))return 80
if(t===5&&C.c.aj(this.a,"https"))return 443
return 0},
geD:function(a){return C.c.H(this.a,this.e,this.f)},
gd7:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a3()
return t<s?C.c.H(this.a,t+1,s):""},
geo:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ah(s,t+1):""},
gd8:function(){var t=this.f
if(typeof t!=="number")return t.a3()
if(t>=this.r)return C.a9
t=P.y
return new P.eV(P.ym(this.gd7(this),C.o),[t,t])},
ga4:function(a){var t=this.y
if(t==null){t=C.c.ga4(this.a)
this.y=t}return t},
S:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.aj(b)
if(!!t.$iseW)return this.a===t.w(b)
return!1},
w:function(a){return this.a},
$iseW:1}
P.qQ.prototype={}
W.ay.prototype={}
W.f3.prototype={
w:function(a){return String(a)},
$isf3:1,
$isf:1,
$isA:1,
ga9:function(a){return a.href},
sa9:function(a,b){return a.href=b}}
W.l0.prototype={
w:function(a){return String(a)},
$isf:1,
$isA:1,
ga9:function(a){return a.href},
sa9:function(a,b){return a.href=b}}
W.f7.prototype={$isf7:1,$iscp:1,$isaf:1,$isA:1}
W.cN.prototype={$isA:1}
W.l8.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cN]},
$ist:1,
$ast:function(){return[W.cN]},
$isn:1,
$asn:function(){return[W.cN]},
$isA:1,
$isaH:1,
$asaH:function(){return[W.cN]},
$isaA:1,
$asaA:function(){return[W.cN]}}
W.hj.prototype={
$asp:function(){return[W.cN]},
$ast:function(){return[W.cN]},
$asn:function(){return[W.cN]},
$isp:1,
$ist:1,
$isn:1}
W.hm.prototype={
$asp:function(){return[W.cN]},
$ast:function(){return[W.cN]},
$asn:function(){return[W.cN]},
$isp:1,
$ist:1,
$isn:1}
W.lc.prototype={
ga9:function(a){return a.href},
sa9:function(a,b){return a.href=b}}
W.f8.prototype={$isf8:1}
W.f9.prototype={$isf9:1,$isah:1,$isf:1,$isA:1}
W.h8.prototype={$ish8:1,
gG:function(a){return a.name}}
W.iu.prototype={
ia:function(a){return a.keys()}}
W.lk.prototype={$isA:1}
W.ll.prototype={$isA:1}
W.eq.prototype={$isf:1,$isA:1,
gm:function(a){return a.length}}
W.lq.prototype={$isah:1,$isf:1,$isA:1}
W.ix.prototype={
cW:function(a,b){return typeof console!="undefined"?console.error(b):null},
bj:function(a){return typeof console!="undefined"?console.group(a):null},
ew:function(a){return typeof console!="undefined"?console.info(a):null},
iK:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.hd.prototype={
gG:function(a){return a.name}}
W.lz.prototype={
gaR:function(a){return a.style}}
W.lA.prototype={
ga9:function(a){return a.href}}
W.he.prototype={
gaR:function(a){return a.style}}
W.hf.prototype={
gG:function(a){return a.name}}
W.lB.prototype={
gaR:function(a){return a.style}}
W.bR.prototype={$isbR:1,$isA:1}
W.fe.prototype={
bT:function(a,b){var t=this.fQ(a,b)
return t!=null?t:""},
fQ:function(a,b){if(W.Ah(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.Al()+b)},
K:function(a,b){return a.item(b)},
gbq:function(a){return a.content},
gbD:function(a){return a.display},
sbD:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.j2.prototype={}
W.qN.prototype={
bT:function(a,b){var t=this.b
return J.zx(t.gad(t),b)},
he:function(a,b){var t
for(t=this.a,t=new H.eG(t,t.gm(t),0,null,[H.N(t,0)]);t.F();)t.d.style[a]=b},
sbD:function(a,b){this.he("display",b)},
fs:function(a){var t=P.d0(this.a,!0,null)
this.b=new H.eI(t,new W.qO(),[H.N(t,0),null])}}
W.k1.prototype={}
W.qO.prototype={
$1:function(a){return J.tW(a)},
$S:function(){return{func:1,args:[,]}}}
W.iz.prototype={
gbq:function(a){return this.bT(a,"content")},
gbD:function(a){return this.bT(a,"display")}}
W.lC.prototype={
gaR:function(a){return a.style}}
W.lD.prototype={
gaR:function(a){return a.style}}
W.lI.prototype={
gcX:function(a){return a.files}}
W.ff.prototype={$isff:1,$isA:1}
W.iA.prototype={
c3:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
K:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.lL.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
W.iC.prototype={}
W.es.prototype={$ises:1}
W.iD.prototype={$isf:1,$isA:1}
W.iE.prototype={
gG:function(a){return a.name}}
W.lM.prototype={
gG:function(a){var t=a.name
if(P.wJ()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.wJ()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
w:function(a){return String(a)}}
W.lN.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
W.iF.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
W.iG.prototype={
w:function(a){return"Rectangle ("+H.x(a.left)+", "+H.x(a.top)+") "+H.x(this.gb2(a))+" x "+H.x(this.gaW(a))},
S:function(a,b){var t
if(b==null)return!1
t=J.aj(b)
if(!t.$isbM)return!1
return a.left===t.gbt(b)&&a.top===t.gbu(b)&&this.gb2(a)===t.gb2(b)&&this.gaW(a)===t.gaW(b)},
ga4:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb2(a)
q=this.gaW(a)
return W.yx(W.f1(W.f1(W.f1(W.f1(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gde:function(a){return new P.dF(a.left,a.top,[null])},
gc5:function(a){return a.bottom},
gaW:function(a){return a.height},
gbt:function(a){return a.left},
gcf:function(a){return a.right},
gbu:function(a){return a.top},
gb2:function(a){return a.width},
gT:function(a){return a.x},
gU:function(a){return a.y},
$isbM:1,
$asbM:function(){},
$isA:1}
W.iH.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.y]},
$ist:1,
$ast:function(){return[P.y]},
$isn:1,
$asn:function(){return[P.y]},
$isA:1,
$isaH:1,
$asaH:function(){return[P.y]},
$isaA:1,
$asaA:function(){return[P.y]}}
W.j3.prototype={
$asp:function(){return[P.y]},
$ast:function(){return[P.y]},
$asn:function(){return[P.y]},
$isp:1,
$ist:1,
$isn:1}
W.jn.prototype={
$asp:function(){return[P.y]},
$ast:function(){return[P.y]},
$asn:function(){return[P.y]},
$isp:1,
$ist:1,
$isn:1}
W.iI.prototype={
K:function(a,b){return a.item(b)}}
W.iJ.prototype={
h:function(a,b){return a.add(b)},
Z:function(a,b){return a.contains(b)},
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.kz.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot modify list"))},
sm:function(a,b){throw H.j(new P.S("Cannot modify list"))},
gaR:function(a){return W.HN(this)},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
W.cp.prototype={
geh:function(a){return new W.qW(a)},
gej:function(a){return new W.qX(a)},
gcb:function(a){return P.H5(C.d.b0(a.offsetLeft),C.d.b0(a.offsetTop),C.d.b0(a.offsetWidth),C.d.b0(a.offsetHeight),null)},
w:function(a){return a.localName},
ex:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
aN:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.wL
if(t==null){t=H.a([],[W.ej])
s=new W.k_(t)
t.push(W.yv(null))
t.push(W.yz())
$.wL=s
d=s}else d=t
t=$.wK
if(t==null){t=new W.kL(d)
$.wK=t
c=t}else{t.a=d
c=t}}if($.eb==null){t=document
s=t.implementation.createHTMLDocument("")
$.eb=s
$.u8=s.createRange()
s=$.eb
s.toString
r=s.createElement("base")
J.zD(r,t.baseURI)
$.eb.head.appendChild(r)}t=$.eb
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.eb
if(!!this.$isf9)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.eb.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.Z(C.a5,a.tagName)){$.u8.selectNodeContents(q)
p=$.u8.createContextualFragment(b)}else{q.innerHTML=b
p=$.eb.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.eb.body
if(q==null?t!=null:q!==t)J.zA(q)
c.cl(p)
document.adoptNode(p)
return p},
hA:function(a,b,c){return this.aN(a,b,c,null)},
f6:function(a,b,c,d){a.textContent=null
a.appendChild(this.aN(a,b,c,d))},
cn:function(a,b){return this.f6(a,b,null,null)},
dj:function(a){return a.getBoundingClientRect()},
$iscp:1,
$isaf:1,
$isA:1,
$isf:1,
$isah:1,
gaR:function(a){return a.style},
gdW:function(a){return a.namespaceURI},
giF:function(a){return a.tagName}}
W.tp.prototype={
$1:function(a){return!!J.aj(a).$iscp},
$S:function(){return{func:1,args:[,]}}}
W.lT.prototype={
gG:function(a){return a.name}}
W.hi.prototype={
gG:function(a){return a.name}}
W.lZ.prototype={
gav:function(a){return a.error}}
W.a_.prototype={$isa_:1,$isA:1}
W.ah.prototype={
ee:function(a,b,c,d){if(c!=null)this.fA(a,b,c,!1)},
eG:function(a,b,c,d){if(c!=null)this.h9(a,b,c,!1)},
fA:function(a,b,c,d){return a.addEventListener(b,H.dt(c,1),!1)},
h9:function(a,b,c,d){return a.removeEventListener(b,H.dt(c,1),!1)},
$isah:1}
W.mt.prototype={
gG:function(a){return a.name}}
W.ch.prototype={$isch:1,$isA:1,
gG:function(a){return a.name}}
W.fn.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isfn:1,
$isaH:1,
$asaH:function(){return[W.ch]},
$isaA:1,
$asaA:function(){return[W.ch]},
$isA:1,
$isp:1,
$asp:function(){return[W.ch]},
$ist:1,
$ast:function(){return[W.ch]},
$isn:1,
$asn:function(){return[W.ch]}}
W.j4.prototype={
$asp:function(){return[W.ch]},
$ast:function(){return[W.ch]},
$asn:function(){return[W.ch]},
$isp:1,
$ist:1,
$isn:1}
W.jo.prototype={
$asp:function(){return[W.ch]},
$ast:function(){return[W.ch]},
$asn:function(){return[W.ch]},
$isp:1,
$ist:1,
$isn:1}
W.mu.prototype={
gav:function(a){return a.error}}
W.mv.prototype={
gG:function(a){return a.name}}
W.mw.prototype={
gav:function(a){return a.error},
gm:function(a){return a.length}}
W.my.prototype={
gaR:function(a){return a.style},
gdf:function(a){return a.weight}}
W.mz.prototype={
h:function(a,b){return a.add(b)},
iW:function(a,b,c){return a.forEach(H.dt(b,3),c)},
a1:function(a,b){b=H.dt(b,3)
return a.forEach(b)}}
W.iZ.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.ct.prototype={$isct:1,$isA:1}
W.mK.prototype={$isA:1,
gm:function(a){return a.length}}
W.fo.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isA:1,
$isaH:1,
$asaH:function(){return[W.af]},
$isaA:1,
$asaA:function(){return[W.af]}}
W.j5.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$ist:1,
$isn:1}
W.jp.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$ist:1,
$isn:1}
W.j0.prototype={
K:function(a,b){return a.item(b)}}
W.eh.prototype={
j4:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
il:function(a,b,c,d){return a.open(b,c,d)},
giB:function(a){return W.If(a.response)},
bf:function(a,b){return a.send(b)},
$iseh:1,
$isA:1,
giC:function(a){return a.responseText}}
W.mN.prototype={
$1:function(a){return J.zt(a)},
$S:function(){return{func:1,args:[W.eh]}}}
W.mO.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.aA()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aJ(0,t)
else p.bB(a)},
$S:function(){return{func:1,args:[,]}}}
W.hz.prototype={}
W.mQ.prototype={
gG:function(a){return a.name}}
W.hA.prototype={$ishA:1}
W.fq.prototype={$isfq:1,$iscp:1,$isaf:1,$isA:1,
aJ:function(a,b){return a.complete.$1(b)}}
W.mW.prototype={$iscp:1,$isf:1,$isA:1,$isah:1,$isaf:1,
gcX:function(a){return a.files},
gG:function(a){return a.name}}
W.nn.prototype={
gG:function(a){return a.name}}
W.hJ.prototype={
h:function(a,b){return a.add(b)}}
W.hK.prototype={$ishK:1,
ga9:function(a){return a.href},
sa9:function(a,b){return a.href=b}}
W.nE.prototype={
w:function(a){return String(a)},
$isA:1,
ga9:function(a){return a.href}}
W.nJ.prototype={
gG:function(a){return a.name}}
W.jT.prototype={
gav:function(a){return a.error}}
W.jU.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nP.prototype={
gbq:function(a){return a.content},
gG:function(a){return a.name}}
W.nQ.prototype={
iS:function(a,b,c){return a.send(b,c)},
bf:function(a,b){return a.send(b)}}
W.hS.prototype={
gG:function(a){return a.name}}
W.cu.prototype={$iscu:1,$isA:1}
W.jV.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaH:1,
$asaH:function(){return[W.cu]},
$isaA:1,
$asaA:function(){return[W.cu]},
$isA:1,
$isp:1,
$asp:function(){return[W.cu]},
$ist:1,
$ast:function(){return[W.cu]},
$isn:1,
$asn:function(){return[W.cu]}}
W.jf.prototype={
$asp:function(){return[W.cu]},
$ast:function(){return[W.cu]},
$asn:function(){return[W.cu]},
$isp:1,
$ist:1,
$isn:1}
W.jz.prototype={
$asp:function(){return[W.cu]},
$ast:function(){return[W.cu]},
$asn:function(){return[W.cu]},
$isp:1,
$ist:1,
$isn:1}
W.eJ.prototype={
gcb:function(a){var t,s,r,q,p
if(!!a.offsetX)return new P.dF(a.offsetX,a.offsetY,[null])
else{if(!J.aj(W.yL(a.target)).$iscp)throw H.j(new P.S("offsetX is only supported on elements"))
t=W.yL(a.target)
s=a.clientX
r=a.clientY
q=J.zv(J.zw(t))
p=q.a
if(typeof s!=="number")return s.ag()
if(typeof p!=="number")return H.a7(p)
q=q.b
if(typeof r!=="number")return r.ag()
if(typeof q!=="number")return H.a7(q)
return new P.dF(C.d.eM(s-p),C.d.eM(r-q),[null])}}}
W.o2.prototype={$isf:1,$isA:1}
W.o3.prototype={
gG:function(a){return a.name}}
W.d5.prototype={
gbk:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.j(new P.dd("No elements"))
if(s>1)throw H.j(new P.dd("More than one element"))
return t.firstChild},
h:function(a,b){this.a.appendChild(b)},
ao:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.u(s,b)
t.replaceChild(c,s[b])},
gX:function(a){var t=this.a.childNodes
return new W.iX(t,t.length,-1,null,[H.ag(t,"bv",0)])},
a7:function(a,b,c,d,e){throw H.j(new P.S("Cannot setRange on Node list"))},
aB:function(a,b,c,d){return this.a7(a,b,c,d,0)},
bH:function(a,b,c,d){throw H.j(new P.S("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
sm:function(a,b){throw H.j(new P.S("Cannot set length on immutable List."))},
n:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$ashM:function(){return[W.af]},
$asfA:function(){return[W.af]},
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$asn:function(){return[W.af]}}
W.af.prototype={
gij:function(a){return new W.d5(a)},
ix:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
w:function(a){var t=a.nodeValue
return t==null?this.fc(a):t},
Z:function(a,b){return a.contains(b)},
$isaf:1,
$isA:1,
gcc:function(a){return a.parentNode},
gd5:function(a){return a.previousSibling}}
W.jY.prototype={
d6:function(a){return a.previousNode()}}
W.jZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isA:1,
$isaH:1,
$asaH:function(){return[W.af]},
$isaA:1,
$asaA:function(){return[W.af]}}
W.jg.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$ist:1,
$isn:1}
W.jA.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$ist:1,
$isn:1}
W.o8.prototype={
gG:function(a){return a.name}}
W.od.prototype={
gG:function(a){return a.name}}
W.oh.prototype={
gG:function(a){return a.name}}
W.oj.prototype={$isf:1,$isA:1}
W.ek.prototype={
gG:function(a){return a.name}}
W.op.prototype={
gm:function(a){return a.length}}
W.cj.prototype={
K:function(a,b){return a.item(b)},
$iscj:1,
$isA:1,
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.k6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cj]},
$ist:1,
$ast:function(){return[W.cj]},
$isn:1,
$asn:function(){return[W.cj]},
$isA:1,
$isaH:1,
$asaH:function(){return[W.cj]},
$isaA:1,
$asaA:function(){return[W.cj]}}
W.jh.prototype={
$asp:function(){return[W.cj]},
$ast:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isp:1,
$ist:1,
$isn:1}
W.jB.prototype={
$asp:function(){return[W.cj]},
$ast:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isp:1,
$ist:1,
$isn:1}
W.ov.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
W.ow.prototype={
bf:function(a,b){return a.send(b)}}
W.oF.prototype={
dj:function(a){return a.getBoundingClientRect()}}
W.oP.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
W.k9.prototype={
bf:function(a,b){return a.send(b)}}
W.fF.prototype={$isfF:1,$iscp:1,$isaf:1,$isA:1}
W.ka.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.oY.prototype={
gG:function(a){return a.name}}
W.p0.prototype={$isah:1,$isf:1,$isA:1}
W.p1.prototype={
gG:function(a){return a.name}}
W.p4.prototype={
gG:function(a){return a.name}}
W.cv.prototype={$iscv:1,$isA:1}
W.kc.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cv]},
$ist:1,
$ast:function(){return[W.cv]},
$isn:1,
$asn:function(){return[W.cv]},
$isA:1,
$isaH:1,
$asaH:function(){return[W.cv]},
$isaA:1,
$asaA:function(){return[W.cv]}}
W.hk.prototype={
$asp:function(){return[W.cv]},
$ast:function(){return[W.cv]},
$asn:function(){return[W.cv]},
$isp:1,
$ist:1,
$isn:1}
W.hn.prototype={
$asp:function(){return[W.cv]},
$ast:function(){return[W.cv]},
$asn:function(){return[W.cv]},
$isp:1,
$ist:1,
$isn:1}
W.i3.prototype={$isi3:1}
W.cw.prototype={$iscw:1,$isA:1,
gdf:function(a){return a.weight}}
W.kd.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cw]},
$ist:1,
$ast:function(){return[W.cw]},
$isn:1,
$asn:function(){return[W.cw]},
$isA:1,
$isaH:1,
$asaH:function(){return[W.cw]},
$isaA:1,
$asaA:function(){return[W.cw]}}
W.ji.prototype={
$asp:function(){return[W.cw]},
$ast:function(){return[W.cw]},
$asn:function(){return[W.cw]},
$isp:1,
$ist:1,
$isn:1}
W.jC.prototype={
$asp:function(){return[W.cw]},
$ast:function(){return[W.cw]},
$asn:function(){return[W.cw]},
$isp:1,
$ist:1,
$isn:1}
W.fG.prototype={$isfG:1,$isA:1}
W.p8.prototype={
gav:function(a){return a.error}}
W.cl.prototype={
K:function(a,b){return a.item(b)},
$iscl:1,
$isA:1,
gm:function(a){return a.length}}
W.p9.prototype={
gG:function(a){return a.name}}
W.pa.prototype={
gG:function(a){return a.name}}
W.pg.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a1:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gae:function(a){var t=H.a([],[P.y])
this.a1(a,new W.ph(t))
return t},
gm:function(a){return a.length},
gV:function(a){return a.key(0)==null},
gak:function(a){return a.key(0)!=null},
$isaK:1,
$asaK:function(){return[P.y,P.y]},
$isA:1}
W.ph.prototype={
$2:function(a,b){return this.a.push(a)},
$S:function(){return{func:1,args:[,,]}}}
W.cn.prototype={$iscn:1,$isA:1,
ga9:function(a){return a.href}}
W.eS.prototype={}
W.kh.prototype={
aN:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.cp(a,b,c,d)
t=W.Am("<table>"+H.x(b)+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.d5(s).ao(0,J.zq(t))
return s}}
W.pJ.prototype={
aN:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.cp(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.M.aN(t.createElement("table"),b,c,d)
t.toString
t=new W.d5(t)
r=t.gbk(t)
r.toString
t=new W.d5(r)
q=t.gbk(t)
s.toString
q.toString
new W.d5(s).ao(0,new W.d5(q))
return s}}
W.pK.prototype={
aN:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cp(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.M.aN(t.createElement("table"),b,c,d)
t.toString
t=new W.d5(t)
r=t.gbk(t)
s.toString
r.toString
new W.d5(s).ao(0,new W.d5(r))
return s}}
W.i7.prototype={$isi7:1,
gbq:function(a){return a.content}}
W.pO.prototype={
gG:function(a){return a.name}}
W.cU.prototype={$isA:1}
W.cK.prototype={$isA:1}
W.pR.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaH:1,
$asaH:function(){return[W.cK]},
$isaA:1,
$asaA:function(){return[W.cK]},
$isA:1,
$isp:1,
$asp:function(){return[W.cK]},
$ist:1,
$ast:function(){return[W.cK]},
$isn:1,
$asn:function(){return[W.cK]}}
W.jj.prototype={
$asp:function(){return[W.cK]},
$ast:function(){return[W.cK]},
$asn:function(){return[W.cK]},
$isp:1,
$ist:1,
$isn:1}
W.jD.prototype={
$asp:function(){return[W.cK]},
$ast:function(){return[W.cK]},
$asn:function(){return[W.cK]},
$isp:1,
$ist:1,
$isn:1}
W.pS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaH:1,
$asaH:function(){return[W.cU]},
$isaA:1,
$asaA:function(){return[W.cU]},
$isA:1,
$isp:1,
$asp:function(){return[W.cU]},
$ist:1,
$ast:function(){return[W.cU]},
$isn:1,
$asn:function(){return[W.cU]}}
W.hl.prototype={
$asp:function(){return[W.cU]},
$ast:function(){return[W.cU]},
$asn:function(){return[W.cU]},
$isp:1,
$ist:1,
$isn:1}
W.ho.prototype={
$asp:function(){return[W.cU]},
$ast:function(){return[W.cU]},
$asn:function(){return[W.cU]},
$isp:1,
$ist:1,
$isn:1}
W.pW.prototype={
gm:function(a){return a.length}}
W.cy.prototype={$iscy:1,$isA:1}
W.kj.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cy]},
$ist:1,
$ast:function(){return[W.cy]},
$isn:1,
$asn:function(){return[W.cy]},
$isA:1,
$isaH:1,
$asaH:function(){return[W.cy]},
$isaA:1,
$asaA:function(){return[W.cy]}}
W.jk.prototype={
$asp:function(){return[W.cy]},
$ast:function(){return[W.cy]},
$asn:function(){return[W.cy]},
$isp:1,
$ist:1,
$isn:1}
W.jE.prototype={
$asp:function(){return[W.cy]},
$ast:function(){return[W.cy]},
$asn:function(){return[W.cy]},
$isp:1,
$ist:1,
$isn:1}
W.fI.prototype={$isfI:1,$isA:1}
W.kk.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.fJ.prototype={}
W.q1.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
W.kl.prototype={
im:function(a){return a.parentNode()},
d6:function(a){return a.previousNode()}}
W.dI.prototype={}
W.qb.prototype={
w:function(a){return String(a)},
$isf:1,
$isA:1,
ga9:function(a){return a.href}}
W.qf.prototype={$isA:1}
W.qg.prototype={
gm:function(a){return a.length}}
W.fK.prototype={$isfK:1,$isA:1}
W.km.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.ql.prototype={
bf:function(a,b){return a.send(b)}}
W.kq.prototype={$isf:1,$isA:1,$isah:1,
gG:function(a){return a.name}}
W.qt.prototype={$isah:1,$isf:1,$isA:1}
W.eX.prototype={$isf:1,$isA:1}
W.fL.prototype={$isfL:1,$isaf:1,$isA:1,
gG:function(a){return a.name},
gdW:function(a){return a.namespaceURI}}
W.qL.prototype={
w:function(a){return"Rectangle ("+H.x(a.left)+", "+H.x(a.top)+") "+H.x(a.width)+" x "+H.x(a.height)},
S:function(a,b){var t,s,r
if(b==null)return!1
t=J.aj(b)
if(!t.$isbM)return!1
s=a.left
r=t.gbt(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbu(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb2(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaW(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga4:function(a){var t,s,r,q
t=J.cX(a.left)
s=J.cX(a.top)
r=J.cX(a.width)
q=J.cX(a.height)
return W.yx(W.f1(W.f1(W.f1(W.f1(0,t),s),r),q))},
gde:function(a){return new P.dF(a.left,a.top,[null])},
$isbM:1,
$asbM:function(){},
$isA:1,
gc5:function(a){return a.bottom},
gaW:function(a){return a.height},
gbt:function(a){return a.left},
gcf:function(a){return a.right},
gbu:function(a){return a.top},
gb2:function(a){return a.width}}
W.ie.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaH:1,
$asaH:function(){return[P.bM]},
$isaA:1,
$asaA:function(){return[P.bM]},
$isA:1,
$isp:1,
$asp:function(){return[P.bM]},
$ist:1,
$ast:function(){return[P.bM]},
$isn:1,
$asn:function(){return[P.bM]}}
W.jl.prototype={
$asp:function(){return[P.bM]},
$ast:function(){return[P.bM]},
$asn:function(){return[P.bM]},
$isp:1,
$ist:1,
$isn:1}
W.jF.prototype={
$asp:function(){return[P.bM]},
$ast:function(){return[P.bM]},
$asn:function(){return[P.bM]},
$isp:1,
$ist:1,
$isn:1}
W.kx.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bR]},
$ist:1,
$ast:function(){return[W.bR]},
$isn:1,
$asn:function(){return[W.bR]},
$isA:1,
$isaH:1,
$asaH:function(){return[W.bR]},
$isaA:1,
$asaA:function(){return[W.bR]}}
W.jm.prototype={
$asp:function(){return[W.bR]},
$ast:function(){return[W.bR]},
$asn:function(){return[W.bR]},
$isp:1,
$ist:1,
$isn:1}
W.jG.prototype={
$asp:function(){return[W.bR]},
$ast:function(){return[W.bR]},
$asn:function(){return[W.bR]},
$isp:1,
$ist:1,
$isn:1}
W.qU.prototype={$isf:1,$isA:1}
W.qV.prototype={
gaW:function(a){return a.height},
gb2:function(a){return a.width},
gT:function(a){return a.x},
gU:function(a){return a.y}}
W.kB.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaH:1,
$asaH:function(){return[W.ct]},
$isaA:1,
$asaA:function(){return[W.ct]},
$isA:1,
$isp:1,
$asp:function(){return[W.ct]},
$ist:1,
$ast:function(){return[W.ct]},
$isn:1,
$asn:function(){return[W.ct]}}
W.j6.prototype={
$asp:function(){return[W.ct]},
$ast:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isp:1,
$ist:1,
$isn:1}
W.jq.prototype={
$asp:function(){return[W.ct]},
$ast:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isp:1,
$ist:1,
$isn:1}
W.rg.prototype={$isah:1,$isf:1,$isA:1}
W.il.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isA:1,
$isaH:1,
$asaH:function(){return[W.af]},
$isaA:1,
$asaA:function(){return[W.af]}}
W.j7.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$ist:1,
$isn:1}
W.jr.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$ist:1,
$isn:1}
W.rK.prototype={$isah:1,$isf:1,$isA:1}
W.kG.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cl]},
$ist:1,
$ast:function(){return[W.cl]},
$isn:1,
$asn:function(){return[W.cl]},
$isA:1,
$isaH:1,
$asaH:function(){return[W.cl]},
$isaA:1,
$asaA:function(){return[W.cl]}}
W.j8.prototype={
$asp:function(){return[W.cl]},
$ast:function(){return[W.cl]},
$asn:function(){return[W.cl]},
$isp:1,
$ist:1,
$isn:1}
W.js.prototype={
$asp:function(){return[W.cl]},
$ast:function(){return[W.cl]},
$asn:function(){return[W.cl]},
$isp:1,
$ist:1,
$isn:1}
W.kI.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaH:1,
$asaH:function(){return[W.cn]},
$isaA:1,
$asaA:function(){return[W.cn]},
$isA:1,
$isp:1,
$asp:function(){return[W.cn]},
$ist:1,
$ast:function(){return[W.cn]},
$isn:1,
$asn:function(){return[W.cn]}}
W.j9.prototype={
$asp:function(){return[W.cn]},
$ast:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$ist:1,
$isn:1}
W.jt.prototype={
$asp:function(){return[W.cn]},
$ast:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$ist:1,
$isn:1}
W.t8.prototype={$isf:1,$isA:1}
W.t9.prototype={$isf:1,$isA:1}
W.qH.prototype={
a1:function(a,b){var t,s,r,q,p
for(t=this.gae(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.bP)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gae:function(a){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.y])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.u(t,q)
p=t[q]
o=J.aP(p)
if(o.gdW(p)==null)s.push(o.gG(p))}return s},
gV:function(a){return this.gae(this).length===0},
gak:function(a){return this.gae(this).length!==0},
$isaK:1,
$asaK:function(){return[P.y,P.y]},
gdS:function(){return this.a}}
W.qW.prototype={
n:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gae(this).length}}
W.qX.prototype={
ay:function(){var t,s,r,q,p
t=P.a1(null,null,null,P.y)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bP)(s),++q){p=J.tX(s[q])
if(p.length!==0)t.h(0,p)}return t},
eT:function(a){this.a.className=a.bs(0," ")},
gm:function(a){return this.a.classList.length},
gV:function(a){return this.a.classList.length===0},
gak:function(a){return this.a.classList.length!==0},
Z:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
gdS:function(){return this.a}}
W.r_.prototype={
aX:function(a,b,c,d){return W.fM(this.a,this.b,a,!1,H.N(this,0))},
eA:function(a,b,c){return this.aX(a,null,b,c)}}
W.ig.prototype={}
W.r0.prototype={
c7:function(a){if(this.b==null)return
this.ec()
this.b=null
this.d=null
return},
d2:function(a,b){if(this.b==null)return;++this.a
this.ec()},
eE:function(a){return this.d2(a,null)},
eI:function(a){if(this.b==null||this.a<=0)return;--this.a
this.ea()},
ea:function(){var t=this.d
if(t!=null&&this.a<=0)J.zf(this.b,this.c,t,!1)},
ec:function(){var t=this.d
if(t!=null)J.zB(this.b,this.c,t,!1)},
ft:function(a,b,c,d,e){this.ea()}}
W.r1.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.ii.prototype={
bo:function(a){return $.$get$yw().Z(0,W.hh(a))},
b7:function(a,b,c){var t,s,r
t=W.hh(a)
s=$.$get$w_()
r=s.n(0,H.x(t)+"::"+b)
if(r==null)r=s.n(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
fu:function(a){var t,s
t=$.$get$w_()
if(t.gV(t)){for(s=0;s<262;++s)t.i(0,C.a2[s],W.IR())
for(s=0;s<12;++s)t.i(0,C.t[s],W.IS())}},
$isej:1,
geR:function(){return this.a}}
W.bv.prototype={
gX:function(a){return new W.iX(a,this.gm(a),-1,null,[H.ag(a,"bv",0)])},
h:function(a,b){throw H.j(new P.S("Cannot add to immutable List."))},
a7:function(a,b,c,d,e){throw H.j(new P.S("Cannot setRange on immutable List."))},
aB:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aK:function(a,b,c,d){throw H.j(new P.S("Cannot modify an immutable List."))},
bH:function(a,b,c,d){throw H.j(new P.S("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
W.k_.prototype={
h:function(a,b){this.a.push(b)},
bo:function(a){return C.b.eg(this.a,new W.o5(a))},
b7:function(a,b,c){return C.b.eg(this.a,new W.o4(a,b,c))},
$isej:1}
W.o5.prototype={
$1:function(a){return a.bo(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.o4.prototype={
$1:function(a){return a.b7(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.im.prototype={
bo:function(a){return this.a.Z(0,W.hh(a))},
b7:function(a,b,c){var t,s
t=W.hh(a)
s=this.c
if(s.Z(0,H.x(t)+"::"+b))return this.d.hm(c)
else if(s.Z(0,"*::"+b))return this.d.hm(c)
else{s=this.b
if(s.Z(0,H.x(t)+"::"+b))return!0
else if(s.Z(0,"*::"+b))return!0
else if(s.Z(0,H.x(t)+"::*"))return!0
else if(s.Z(0,"*::*"))return!0}return!1},
fw:function(a,b,c,d){var t,s,r
this.a.ao(0,c)
t=b.aw(0,new W.rL())
s=b.aw(0,new W.rM())
this.b.ao(0,t)
r=this.c
r.ao(0,C.E)
r.ao(0,s)},
$isej:1,
geR:function(){return this.d}}
W.rL.prototype={
$1:function(a){return!C.b.Z(C.t,a)},
$S:function(){return{func:1,args:[,]}}}
W.rM.prototype={
$1:function(a){return C.b.Z(C.t,a)},
$S:function(){return{func:1,args:[,]}}}
W.rY.prototype={
b7:function(a,b,c){if(this.fi(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.wi(a).a.getAttribute("template")==="")return this.e.Z(0,b)
return!1}}
W.rZ.prototype={
$1:function(a){return"TEMPLATE::"+H.x(a)},
$S:function(){return{func:1,args:[,]}}}
W.rX.prototype={
bo:function(a){var t=J.aj(a)
if(!!t.$isi1)return!1
t=!!t.$iscf
if(t&&W.hh(a)==="foreignObject")return!1
if(t)return!0
return!1},
b7:function(a,b,c){if(b==="is"||C.c.aj(b,"on"))return!1
return this.bo(a)},
$isej:1}
W.iX.prototype={
F:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.d8(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gO:function(){return this.d}}
W.qP.prototype={
ee:function(a,b,c,d){return H.aM(new P.S("You can only attach EventListeners to your own window."))},
eG:function(a,b,c,d){return H.aM(new P.S("You can only attach EventListeners to your own window."))},
$isah:1,
$isf:1}
W.ej.prototype={}
W.t_.prototype={
cl:function(a){}}
W.rJ.prototype={}
W.kL.prototype={
cl:function(a){new W.t5(this).$2(a,null)},
by:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
hc:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.wi(a)
r=s.gdS().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.bH(n)}p="element unprintable"
try{p=J.cA(a)}catch(n){H.bH(n)}try{o=W.hh(a)
this.hb(a,b,t,p,o,s,r)}catch(n){if(H.bH(n) instanceof P.cY)throw n
else{this.by(a,b)
window
m="Removing corrupted element "+H.x(p)
if(typeof console!="undefined")console.warn(m)}}},
hb:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.by(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.bo(a)){this.by(a,b)
window
t="Removing disallowed element <"+H.x(e)+"> from "+J.cA(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.b7(a,"is",g)){this.by(a,b)
window
t="Removing disallowed type extension <"+H.x(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gae(f)
s=H.a(t.slice(0),[H.N(t,0)])
for(r=f.gae(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.u(s,r)
q=s[r]
if(!this.a.b7(a,J.zI(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.x(e)+" "+q+'="'+H.x(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.aj(a).$isi7)this.cl(a.content)}}
W.t5.prototype={
$2:function(a,b){var t,s,r,q,p,o
r=this.a
switch(a.nodeType){case 1:r.hc(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.by(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.zr(t)}catch(q){H.bH(q)
p=t
if(r){o=J.aP(p)
if(o.gcc(p)!=null){o.gcc(p)
o.gcc(p).removeChild(p)}}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.af,W.af]}}}
P.rU.prototype={
bI:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
bd:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.aj(a)
if(!!s.$isea)return new Date(a.a)
if(!!s.$isH7)throw H.j(new P.eT("structured clone of RegExp"))
if(!!s.$isch)return a
if(!!s.$isf8)return a
if(!!s.$isfn)return a
if(!!s.$ishA)return a
if(!!s.$isfw||!!s.$iseK)return a
if(!!s.$isaK){r=this.bI(a)
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
s.a1(a,new P.rW(t,this))
return t.a}if(!!s.$isp){r=this.bI(a)
t=this.b
if(r>=t.length)return H.u(t,r)
o=t[r]
if(o!=null)return o
return this.hz(a,r)}throw H.j(new P.eT("structured clone of other type"))},
hz:function(a,b){var t,s,r,q,p
t=J.aY(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.u(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.bd(t.n(a,p))
if(p>=r.length)return H.u(r,p)
r[p]=q}return r}}
P.rW.prototype={
$2:function(a,b){this.a.a[a]=this.b.bd(b)},
$S:function(){return{func:1,args:[,,]}}}
P.qA.prototype={
bI:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
bd:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.ea(s,!0)
r.dv(s,!0)
return r}if(a instanceof RegExp)throw H.j(new P.eT("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.IC(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bI(a)
r=this.b
o=r.length
if(p>=o)return H.u(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.jP()
t.a=n
if(p>=o)return H.u(r,p)
r[p]=n
this.hU(a,new P.qB(t,this))
return t.a}if(a instanceof Array){p=this.bI(a)
r=this.b
if(p>=r.length)return H.u(r,p)
n=r[p]
if(n!=null)return n
o=J.aY(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.u(r,p)
r[p]=n
if(typeof m!=="number")return H.a7(m)
r=J.d6(n)
l=0
for(;l<m;++l)r.i(n,l,this.bd(o.n(a,l)))
return n}return a}}
P.qB.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bd(b)
J.it(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.rV.prototype={}
P.kt.prototype={
hU:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bP)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.tu.prototype={
$1:function(a){return this.a.aJ(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.tv.prototype={
$1:function(a){return this.a.bB(a)},
$S:function(){return{func:1,args:[,]}}}
P.lx.prototype={
ed:function(a){if($.$get$wB().b.test(a))return a
throw H.j(P.dP(a,"value","Not a valid class token"))},
w:function(a){return this.ay().bs(0," ")},
gX:function(a){var t,s
t=this.ay()
s=new P.dL(t,t.r,null,null,[null])
s.c=t.e
return s},
a1:function(a,b){this.ay().a1(0,b)},
aF:function(a,b){var t=this.ay()
return new H.hg(t,b,[H.N(t,0),null])},
aw:function(a,b){var t=this.ay()
return new H.dh(t,b,[H.N(t,0)])},
gV:function(a){return this.ay().a===0},
gak:function(a){return this.ay().a!==0},
gm:function(a){return this.ay().a},
Z:function(a,b){if(typeof b!=="string")return!1
this.ed(b)
return this.ay().Z(0,b)},
d_:function(a){return this.Z(0,a)?a:null},
h:function(a,b){this.ed(b)
return this.ih(0,new P.ly(b))},
a6:function(a,b){return this.ay().a6(0,!0)},
at:function(a){return this.a6(a,!0)},
aD:function(a,b){var t=this.ay()
return H.p2(t,b,H.N(t,0))},
ih:function(a,b){var t,s
t=this.ay()
s=b.$1(t)
this.eT(t)
return s},
$iseN:1,
$aseN:function(){return[P.y]},
$ist:1,
$ast:function(){return[P.y]},
$isn:1,
$asn:function(){return[P.y]}}
P.ly.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.lJ.prototype={
gG:function(a){return a.name}}
P.th.prototype={
$1:function(a){this.b.aJ(0,new P.kt([],[],!1).bd(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mT.prototype={
gG:function(a){return a.name}}
P.o9.prototype={
c3:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fY(a,b,c)
q=P.Ie(t)
return q}catch(p){s=H.bH(p)
r=H.co(p)
q=P.x_(s,r,null)
return q}},
h:function(a,b){return this.c3(a,b,null)},
fY:function(a,b,c){return a.add(new P.rV([],[]).bd(b))},
gG:function(a){return a.name}}
P.i_.prototype={
gav:function(a){return a.error}}
P.q_.prototype={
gav:function(a){return a.error}}
P.rm.prototype={
bM:function(a){if(a<=0||a>4294967296)throw H.j(P.y0("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
d0:function(){return Math.random()}}
P.rA.prototype={
b5:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.ar(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bM:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.j(P.y0("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.b5()
return(this.a&t)>>>0}do{this.b5()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
d0:function(){this.b5()
var t=this.a
this.b5()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
fv:function(a){var t,s,r,q,p,o,n,m
t=J.dO(a,0)?-1:0
do{if(typeof a!=="number")return a.aP()
s=(a&4294967295)>>>0
a=C.d.ar(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.ar(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.ar(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.ar(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.ar(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.ar(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.ar(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.b5()
this.b5()
this.b5()
this.b5()}}
P.dF.prototype={
w:function(a){return"Point("+H.x(this.a)+", "+H.x(this.b)+")"},
S:function(a,b){var t,s
if(b==null)return!1
if(!(b instanceof P.dF))return!1
t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
ga4:function(a){var t,s
t=J.cX(this.a)
s=J.cX(this.b)
return P.yy(P.ij(P.ij(0,t),s))},
R:function(a,b){var t,s,r,q
t=this.a
s=J.aP(b)
r=s.gT(b)
if(typeof t!=="number")return t.R()
if(typeof r!=="number")return H.a7(r)
q=this.b
s=s.gU(b)
if(typeof q!=="number")return q.R()
if(typeof s!=="number")return H.a7(s)
return new P.dF(t+r,q+s,this.$ti)},
al:function(a,b){var t,s
t=this.a
if(typeof t!=="number")return t.al()
s=this.b
if(typeof s!=="number")return s.al()
return new P.dF(t*b,s*b,this.$ti)},
gT:function(a){return this.a},
gU:function(a){return this.b}}
P.rB.prototype={
gcf:function(a){var t=this.a
if(typeof t!=="number")return t.R()
return t+this.c},
gc5:function(a){var t=this.b
if(typeof t!=="number")return t.R()
return t+this.d},
w:function(a){return"Rectangle ("+H.x(this.a)+", "+H.x(this.b)+") "+this.c+" x "+this.d},
S:function(a,b){var t,s,r,q
if(b==null)return!1
t=J.aj(b)
if(!t.$isbM)return!1
s=this.a
r=t.gbt(b)
if(s==null?r==null:s===r){r=this.b
q=t.gbu(b)
if(r==null?q==null:r===q){if(typeof s!=="number")return s.R()
if(s+this.c===t.gcf(b)){if(typeof r!=="number")return r.R()
t=r+this.d===t.gc5(b)}else t=!1}else t=!1}else t=!1
return t},
ga4:function(a){var t,s,r,q
t=this.a
s=J.cX(t)
r=this.b
q=J.cX(r)
if(typeof t!=="number")return t.R()
if(typeof r!=="number")return r.R()
return P.yy(P.ij(P.ij(P.ij(P.ij(0,s),q),t+this.c&0x1FFFFFFF),r+this.d&0x1FFFFFFF))},
gde:function(a){return new P.dF(this.a,this.b,this.$ti)}}
P.bM.prototype={$asbM:null,
gbt:function(a){return this.a},
gbu:function(a){return this.b},
gb2:function(a){return this.c},
gaW:function(a){return this.d}}
P.kX.prototype={$isf:1,$isA:1,
ga9:function(a){return a.href}}
P.ep.prototype={$isf:1,$isA:1}
P.m1.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.m2.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.m3.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.m4.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.m5.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.m6.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.m7.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.m8.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.m9.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.ma.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y},
ga9:function(a){return a.href}}
P.mb.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.mc.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.md.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.me.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.mf.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.mg.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.mh.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.mi.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.mx.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y},
ga9:function(a){return a.href}}
P.mB.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.dC.prototype={}
P.eg.prototype={$isf:1,$isA:1}
P.mR.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y},
ga9:function(a){return a.href}}
P.d9.prototype={$isA:1}
P.nq.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d9]},
$ist:1,
$ast:function(){return[P.d9]},
$isn:1,
$asn:function(){return[P.d9]},
$isA:1}
P.ja.prototype={
$asp:function(){return[P.d9]},
$ast:function(){return[P.d9]},
$asn:function(){return[P.d9]},
$isp:1,
$ist:1,
$isn:1}
P.ju.prototype={
$asp:function(){return[P.d9]},
$ast:function(){return[P.d9]},
$asn:function(){return[P.d9]},
$isp:1,
$ist:1,
$isn:1}
P.nN.prototype={$isf:1,$isA:1}
P.nO.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.db.prototype={$isA:1}
P.o6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.db]},
$ist:1,
$ast:function(){return[P.db]},
$isn:1,
$asn:function(){return[P.db]},
$isA:1}
P.jb.prototype={
$asp:function(){return[P.db]},
$ast:function(){return[P.db]},
$asn:function(){return[P.db]},
$isp:1,
$ist:1,
$isn:1}
P.jv.prototype={
$asp:function(){return[P.db]},
$ast:function(){return[P.db]},
$asn:function(){return[P.db]},
$isp:1,
$ist:1,
$isn:1}
P.on.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y},
ga9:function(a){return a.href}}
P.os.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.ot.prototype={
gm:function(a){return a.length}}
P.oH.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.oI.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.i1.prototype={$isi1:1,$isf:1,$isA:1,
ga9:function(a){return a.href}}
P.pC.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.y]},
$ist:1,
$ast:function(){return[P.y]},
$isn:1,
$asn:function(){return[P.y]},
$isA:1}
P.jc.prototype={
$asp:function(){return[P.y]},
$ast:function(){return[P.y]},
$asn:function(){return[P.y]},
$isp:1,
$ist:1,
$isn:1}
P.jw.prototype={
$asp:function(){return[P.y]},
$ast:function(){return[P.y]},
$asn:function(){return[P.y]},
$isp:1,
$ist:1,
$isn:1}
P.l4.prototype={
ay:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a1(null,null,null,P.y)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bP)(r),++p){o=J.tX(r[p])
if(o.length!==0)s.h(0,o)}return s},
eT:function(a){this.a.setAttribute("class",a.bs(0," "))}}
P.cf.prototype={
gej:function(a){return new P.l4(a)},
aN:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.ej])
t.push(W.yv(null))
t.push(W.yz())
t.push(new W.rX())
c=new W.kL(new W.k_(t))}s='<svg version="1.1">'+H.x(b)+"</svg>"
t=document
r=t.body
q=(r&&C.w).hA(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.d5(q)
o=t.gbk(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
ex:function(a,b,c,d,e){throw H.j(new P.S("Cannot invoke insertAdjacentHtml on SVG."))},
$iscf:1,
$isah:1,
$isf:1,
$isA:1}
P.pG.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.pI.prototype={$isf:1,$isA:1}
P.ki.prototype={}
P.pQ.prototype={$isf:1,$isA:1,
ga9:function(a){return a.href}}
P.i9.prototype={
gT:function(a){return a.x},
gU:function(a){return a.y}}
P.df.prototype={$isA:1}
P.q0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.df]},
$ist:1,
$ast:function(){return[P.df]},
$isn:1,
$asn:function(){return[P.df]},
$isA:1}
P.jd.prototype={
$asp:function(){return[P.df]},
$ast:function(){return[P.df]},
$asn:function(){return[P.df]},
$isp:1,
$ist:1,
$isn:1}
P.jx.prototype={
$asp:function(){return[P.df]},
$ast:function(){return[P.df]},
$asn:function(){return[P.df]},
$isp:1,
$ist:1,
$isn:1}
P.qc.prototype={$isf:1,$isA:1,
gT:function(a){return a.x},
gU:function(a){return a.y},
ga9:function(a){return a.href}}
P.qh.prototype={$isf:1,$isA:1}
P.qi.prototype={$isf:1,$isA:1}
P.ih.prototype={$isf:1,$isA:1,
ga9:function(a){return a.href}}
P.rG.prototype={$isf:1,$isA:1}
P.rH.prototype={$isf:1,$isA:1}
P.rI.prototype={$isf:1,$isA:1}
P.bi.prototype={}
P.dg.prototype={$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
P.h2.prototype={$ish2:1,$isA:1,
gm:function(a){return a.length}}
P.f6.prototype={$isf6:1,$isA:1,
gc6:function(a){return a.buffer}}
P.h3.prototype={
fJ:function(a,b,c,d){return a.decodeAudioData(b,H.dt(c,1),H.dt(d,1))},
hD:function(a,b){var t,s,r
t=P.h2
s=new P.bm(0,$.ap,null,[t])
r=new P.e3(s,[t])
this.fJ(a,b,new P.l5(r),new P.l6(r))
return s}}
P.l5.prototype={
$1:function(a){this.a.aJ(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.l6.prototype={
$1:function(a){var t=this.a
if(a==null)t.bB("")
else t.bB(a)},
$S:function(){return{func:1,args:[,]}}}
P.bC.prototype={}
P.e8.prototype={}
P.lw.prototype={
gc6:function(a){return a.buffer}}
P.kZ.prototype={
gG:function(a){return a.name}}
P.oL.prototype={$isA:1}
P.oM.prototype={$isf:1,$isA:1}
P.t6.prototype={$isf:1,$isA:1}
P.ke.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bB(b,a,null,null,null))
return P.z_(a.item(b))},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
K:function(a,b){return P.z_(a.item(b))},
$isp:1,
$asp:function(){return[P.aK]},
$ist:1,
$ast:function(){return[P.aK]},
$isn:1,
$asn:function(){return[P.aK]},
$isA:1}
P.je.prototype={
$asp:function(){return[P.aK]},
$ast:function(){return[P.aK]},
$asn:function(){return[P.aK]},
$isp:1,
$ist:1,
$isn:1}
P.jy.prototype={
$asp:function(){return[P.aK]},
$ast:function(){return[P.aK]},
$asn:function(){return[P.aK]},
$isp:1,
$ist:1,
$isn:1}
T.fZ.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
gV:function(a){return this.a.length===0},
gak:function(a){return this.a.length!==0},
gX:function(a){var t=this.a
return new J.f4(t,t.length,0,null,[H.N(t,0)])},
$ashF:function(){return[T.h_]},
$asn:function(){return[T.h_]},
gcX:function(a){return this.a}}
T.h_.prototype={
gbq:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fp(C.C)
r=T.fp(C.D)
q=T.xR(0,this.b)
new T.j1(s,q,0,0,0,t,r).dT()
r=q.c.buffer
q=q.a
r.toString
q=H.cT(r,0,q)
this.cy=q
t=q}else{t=s.bR()
this.cy=t}this.ch=0}}return t},
w:function(a){return this.a},
gG:function(a){return this.a}}
T.dj.prototype={
w:function(a){return"ArchiveException: "+this.a}}
T.hB.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ag()
if(typeof r!=="number")return H.a7(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.R()
if(typeof b!=="number")return H.a7(b)
s+=b
if(s>>>0!==s||s>=t.length)return H.u(t,s)
return t[s]},
b3:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a7(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.ag()
if(typeof s!=="number")return H.a7(s)
b=t-(a-s)}return T.uw(this.a,this.d,b,a)},
ba:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.R()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a7(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s>>>0!==s||s>=q.length)return H.u(q,s)
q[s]}return-1},
br:function(a,b){return this.ba(a,b,0)},
aD:function(a,b){var t=this.b
if(typeof t!=="number")return t.R()
if(typeof b!=="number")return H.a7(b)
this.b=t+b},
d9:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.ag()
if(typeof s!=="number")return H.a7(s)
r=this.b3(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.ag()
if(typeof p!=="number")return H.a7(p)
if(typeof s!=="number")return s.R()
this.b=s+(t-(q-p))
return r},
ce:function(a){return P.pD(this.d9(a).bR(),0,null)},
a2:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.R()
r=s+1
this.b=r
q=t.length
if(s>>>0!==s||s>=q)return H.u(t,s)
p=t[s]&255
this.b=r+1
if(r>>>0!==r||r>=q)return H.u(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a5:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.R()
r=s+1
this.b=r
q=t.length
if(s>>>0!==s||s>=q)return H.u(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r>>>0!==r||r>=q)return H.u(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s>>>0!==s||s>=q)return H.u(t,s)
n=t[s]&255
this.b=r+1
if(r>>>0!==r||r>=q)return H.u(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aZ:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.R()
r=s+1
this.b=r
q=t.length
if(s>>>0!==s||s>=q)return H.u(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r>>>0!==r||r>=q)return H.u(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s>>>0!==s||s>=q)return H.u(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r>>>0!==r||r>=q)return H.u(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s>>>0!==s||s>=q)return H.u(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r>>>0!==r||r>=q)return H.u(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s>>>0!==s||s>=q)return H.u(t,s)
j=t[s]&255
this.b=r+1
if(r>>>0!==r||r>=q)return H.u(t,r)
i=t[r]&255
if(this.d===1)return(C.a.au(p,56)|C.a.au(o,48)|C.a.au(n,40)|C.a.au(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.au(i,56)|C.a.au(j,48)|C.a.au(k,40)|C.a.au(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bR:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ag()
if(typeof r!=="number")return H.a7(r)
q=t-(s-r)
t=this.a
r=J.aj(t)
if(!!r.$isdg){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cT(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.yM(r.co(t,s,p>o?o:p)))},
fl:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gc6:function(a){return this.a},
gcb:function(a){return this.b}}
T.oe.prototype={
iL:function(a,b){var t,s,r,q
if(b==null)b=J.c9(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cC(s-q)
C.u.aB(r,t,s,a)
this.a+=b},
dg:function(a){return this.iL(a,null)},
iN:function(a){var t,s,r,q
t=J.aY(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
this.cC(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
C.u.a7(q,s,s+r,t.gc6(a),t.gcb(a))
r=this.a
t=t.gm(a)
if(typeof t!=="number")return H.a7(t)
this.a=r+t},
b3:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cT(t,a,b-a)},
ds:function(a){return this.b3(a,null)},
cC:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.aM(P.dk("Invalid length "+H.x(s)))
r=new Uint8Array(s)
q=this.c
C.u.aB(r,0,q.length,q)
this.c=r},
fN:function(){return this.cC(null)},
gm:function(a){return this.a}}
T.qw.prototype={
h8:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.b3(this.a-20,20)
if(s.a5()!==117853008){a.b=t
return}s.a5()
r=s.aZ()
s.a5()
a.b=r
if(a.a5()!==101075792){a.b=t
return}a.aZ()
a.a2()
a.a2()
q=a.a5()
p=a.a5()
o=a.aZ()
n=a.aZ()
m=a.aZ()
l=a.aZ()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fO:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.ag()
if(typeof r!=="number")return H.a7(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a5()===101010256){a.b=t
return q}}throw H.j(new T.dj("Could not find End of Central Directory Record"))},
fp:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fO(a)
this.a=t
a.b=t
a.a5()
this.b=a.a2()
this.c=a.a2()
this.d=a.a2()
this.e=a.a2()
this.f=a.a5()
this.r=a.a5()
s=a.a2()
if(s>0)this.x=a.ce(s)
this.h8(a)
r=a.b3(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.R()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.aA()
if(!!(p>=t+o))break
if(r.a5()!==33639248)break
p=new T.qy(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a2()
p.b=r.a2()
p.c=r.a2()
p.d=r.a2()
p.e=r.a2()
p.f=r.a2()
p.r=r.a5()
p.x=r.a5()
p.y=r.a5()
n=r.a2()
m=r.a2()
l=r.a2()
p.z=r.a2()
p.Q=r.a2()
p.ch=r.a5()
o=r.a5()
p.cx=o
if(n>0)p.cy=r.ce(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.ag()
j=r.b3(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.ag()
if(typeof g!=="number")return H.a7(g)
if(typeof k!=="number")return k.R()
r.b=k+(i-(h-g))
p.db=j.bR()
f=j.a2()
e=j.a2()
if(f===1){if(e>=8)p.y=j.aZ()
if(e>=16)p.x=j.aZ()
if(e>=24){o=j.aZ()
p.cx=o}if(e>=28)p.z=j.a5()}}if(l>0)p.dx=r.ce(l)
a.b=o
p.dy=T.HI(a,p)
q.push(p)}}}
T.qx.prototype={
gbq:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fp(C.C)
q=T.fp(C.D)
t=T.xR(0,t)
new T.j1(s,t,0,0,0,r,q).dT()
q=t.c.buffer
t=t.a
q.toString
t=H.cT(q,0,t)
this.cy=t
this.d=0}else{t=s.bR()
this.cy=t}}return t},
w:function(a){return this.z},
fq:function(a,b){var t,s,r,q
t=a.a5()
this.a=t
if(t!==67324752)throw H.j(new T.dj("Invalid Zip Signature"))
this.b=a.a2()
this.c=a.a2()
this.d=a.a2()
this.e=a.a2()
this.f=a.a2()
this.r=a.a5()
this.x=a.a5()
this.y=a.a5()
s=a.a2()
r=a.a2()
this.z=a.ce(s)
this.Q=a.d9(r).bR()
this.cx=a.d9(this.ch.x)
if((this.c&8)!==0){q=a.a5()
if(q===134695760)this.r=a.a5()
else this.r=q
this.x=a.a5()
this.y=a.a5()}}}
T.qy.prototype={
w:function(a){return this.cy}}
T.qv.prototype={
hE:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.HH(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.D],p=0;p<t.length;t.length===r||(0,H.bP)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.dn()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.h_(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.e4(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.uw(k,0,null,0)}else if(k instanceof T.hB){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hB(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.hQ(m,"/")
j.y=n.r
s.push(j)}return new T.fZ(s,null)}}
T.mP.prototype={
fk:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.au(1,this.b)
r=H.cE(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.u(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.u(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.j1.prototype={
dT:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.R()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.aA()
if(!!(r>=s+q))break
if(!this.h4())break}},
h4:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.R()
if(typeof s!=="number")return s.aA()
if(s>=r+q)return!1
p=this.aE(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.aE(16)
s=this.aE(16)
if(n!==0&&n!==(s^65535)>>>0)H.aM(new T.dj("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.ag()
r=q-r
if(n>s-r)H.aM(new T.dj("Input buffer is broken"))
m=t.b3(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.ag()
if(typeof l!=="number")return H.a7(l)
if(typeof s!=="number")return s.R()
t.b=s+(r-(q-l))
this.b.iN(m)
break
case 1:this.dN(this.f,this.r)
break
case 2:this.h5()
break
default:throw H.j(new T.dj("unknown BTYPE: "+o))}return(p&1)===0},
aE:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.R()
if(typeof r!=="number")return r.aA()
if(r>=q+p)throw H.j(new T.dj("input buffer is broken"))
q=t.a
t.b=r+1
if(r>>>0!==r||r>=q.length)return H.u(q,r)
o=q[r]
this.c=(this.c|C.a.aC(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.au(1,a)
this.c=C.a.e8(t,a)
this.d=s-a
return(t&r-1)>>>0},
cK:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.R()
if(typeof p!=="number")return p.aA()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p>>>0!==p||p>=o.length)return H.u(o,p)
m=o[p]
this.c=(this.c|C.a.aC(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.au(1,s)-1)>>>0
if(p>=t.length)return H.u(t,p)
l=t[p]
k=l>>>16
this.c=C.a.e8(r,k)
this.d=q-k
return l&65535},
h5:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.aE(5)+257
s=this.aE(5)+1
r=this.aE(4)+4
q=H.cE(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.u(C.K,o)
n=C.K[o]
m=this.aE(3)
if(n>=q)return H.u(p,n)
p[n]=m}l=T.fp(p)
k=new Uint8Array(H.cE(t))
j=new Uint8Array(H.cE(s))
i=this.dM(t,l,k)
h=this.dM(s,l,j)
this.dN(T.fp(i),T.fp(h))},
dN:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cK(a)
if(s>285)throw H.j(new T.dj("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fN()
r=t.c
q=t.a++
if(q>>>0!==q||q>=r.length)return H.u(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.u(C.I,p)
o=C.I[p]+this.aE(C.a4[p])
n=this.cK(b)
if(n<=29){if(n>=30)return H.u(C.F,n)
m=C.F[n]+this.aE(C.a3[n])
for(r=-m;o>m;){t.dg(t.ds(r))
o-=m}if(o===m)t.dg(t.ds(r))
else t.dg(t.b3(r,o-m))}else throw H.j(new T.dj("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.ag();--r
t.b=r
if(r<0)t.b=0}},
dM:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cK(b)
switch(q){case 16:p=3+this.aE(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=s}break
case 17:p=3+this.aE(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
case 18:p=11+this.aE(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.j(new T.dj("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kY.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Math Book",H.a([$.L,$.Y,$.aD],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.L,$.Y],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.E,$.Y,$.aS],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.L,$.Y],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.L,$.Y],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c5,$.aw],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.E,$.Y],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fj,$.o)
q.i(0,$.bf,$.o)
q.i(0,$.fl,$.k)
q.i(0,$.aQ,$.I)
q.i(0,$.cC,$.k)
p=$.m
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.r
o=o+n+" to stop "
m=$.M
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.Gu
n=[U.b]
q.i(0,new R.Z("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.C(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.m
q.i(0,new R.Z("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.r+" to stop "+$.M+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.oB(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.m
p="The "+m+" finds a massive library, filled with books. The "
l=$.r
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.z
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.Z("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.dX(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eu,$.I)
s.i(0,$.cC,$.o)
p=$.m
o="The "+p+"  is approached by a "
l=$.r
s.i(0,new R.Z("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.M+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.m
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.r
s.i(0,new R.Z("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.M+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.dc(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
s.i(0,new R.Z("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.r+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.dX(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.eu,$.I)
t.i(0,$.cC,$.o)
t.i(0,$.c2,$.I)
t.i(0,$.uj,$.I)
r=$.m
q="The "+r+"  is approached by a "
p=$.r
q=q+p+" who offers them a grant to study "
o=$.ac
t.i(0,new R.Z("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.M+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.dX(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.k)
o=$.r
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.M
r=r+p+".  It is up to the "
q=$.m
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ac
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.GA
t.i(0,new R.Z("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.el(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
t.i(0,new R.Z("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.M+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.r+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aC)}}
K.bT.prototype={}
L.h0.prototype={
D:function(){var t,s
t=Q.K(null,null,A.a6)
s=A.i("Perfectly Generic Object",H.a([],[G.a2]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.k)
q.i(0,$.bf,$.I)
q.i(0,$.dU,$.k)
q.i(0,$.c2,$.o)
q.i(0,$.ec,$.I)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.z
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.by+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.O("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.T(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.G(s,q,null),$.at)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ez,$.k)
s.i(0,$.ew,$.I)
s.i(0,$.ey,$.o)
s.i(0,$.cO,$.k)
s.i(0,$.cg,$.I)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.z
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.by+". The "+p+" has won! "
s.i(0,new R.O("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.T(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(q,s,null),$.at)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aQ,$.k)
t.i(0,$.bf,$.I)
t.i(0,$.cb,$.o)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.M
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.z
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.by+". The "+r+" has won! "
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.T(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.vx(),!1,!1,new Y.bW(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.I)
l=$.m
r="The "+l+" learns that all of the local "
m=$.r
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.z
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.by+". The "+l+" has won! "
t.i(0,new R.O("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.T(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(s,t,null),$.at)},
w:function(a){return this.Q},
an:function(a,b,c,d){var t=this.Q
this.r=new X.iN("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.iv]),H.a([],[M.hq]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.D()
this.E()
t=this.e
if($.$get$l1().Y(0,t))H.aM("Duplicate aspect id for "+this.w(0)+": "+t+" is already registered for "+J.cA($.$get$l1().n(0,t))+".")
$.$get$l1().i(0,t,this)},
gG:function(a){return this.Q}}
L.aV.prototype={}
M.l3.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Barbells",H.a([$.ak,$.cd,$.E],s),null,!1,"Strength Building Metal")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.fr,$.ce],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jJ,$.X],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.fr,$.ce],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aX,$.a9],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jJ,$.X,$.dV],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.E,$.bg],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.xe,$.ce],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.ce,$.b2],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ed,$.I)
q.i(0,$.c4,$.o)
q.i(0,$.cO,$.I)
p=$.m
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.r
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.M+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.Z("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.m
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.r
q.i(0,new R.Z("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.M+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.el(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.m
n="The "+m+"  wanders into a bunch of "
p=$.r
q.i(0,new R.Z("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.fD(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ed,$.o)
t.i(0,$.fm,$.o)
t.i(0,$.c4,$.o)
s=$.m
r="The "+s+" finds a team of underdog "
p=$.r
t.i(0,new R.Z("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.oB(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.r
s="A group of "+p+"s approach the "
r=$.m
s=s+r+". Apparently their sports team lost their coach to the "+$.z+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.M
t.i(0,new R.Z("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.el(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.k)
k=$.r
p="A group of "+k+"s approach the "
r=$.m
t.i(0,new R.Z("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.z+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ac+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,t,null),$.aC)}}
U.l7.prototype={
P:function(a,b){var t=0,s=P.bn(),r,q,p,o
var $async$P=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:q=$.$get$wr()
p=q.createBufferSource()
o=p
t=3
return P.c7(J.zk(q,b),$async$P)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$P,s)},
$asdw:function(){return[P.f6]},
$ascc:function(){return[P.f6,P.bi]}}
U.nG.prototype={
aY:function(a){return"audio/mpeg"}}
U.ob.prototype={
aY:function(a){return"audio/ogg"}}
U.pz.prototype={
P:function(a,b){var t=0,s=P.bn(),r,q,p
var $async$P=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:q=W.A4(b)
p=new W.ig(q,"canplaythrough",!1,[W.a_])
t=3
return P.c7(p.gad(p),$async$P)
case 3:r=q
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$P,s)},
$asiL:function(){return[W.f7]},
$ascc:function(){return[W.f7,P.y]}}
U.pA.prototype={}
U.pB.prototype={}
O.l9.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Cod Piece",H.a([$.Q,$.a0,$.aR,$.V,$.X],s),"God damn it, MI. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.uA,$.V,$.bS],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aE,$.X,$.bj,$.V,$.aa],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.Q,$.aE,$.V,$.aZ],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.cG,$.k)
t.i(0,$.hw,$.k)
t.i(0,$.cr,$.k)
t.i(0,$.dz,$.k)
t.i(0,$.cq,$.k)
t.i(0,$.fg,$.k)
r="After all the bullshit the "+$.z+" has put the native "
q=$.r
r=r+q+"s through, the "
p=$.m
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.ax+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.M
m=[U.b]
t.i(0,new R.a5("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.C(),!1,!1,new Y.e_("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.r
n="A group of jubilant "+p+"s are following the "
q=$.m
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.M
t.i(0,new R.a5("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.z+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
q=$.m
t.i(0,new R.a5("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.z+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.C(),!1,!1,new Y.ln("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.m
q=q+r+" organizes a huge festival for all the "
p=$.r
t.i(0,new R.bG("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Y.pP.prototype={
P:function(a,b){var t=0,s=P.bn(),r
var $async$P=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$P,s)},
$aseR:function(){return[P.y]},
$ascc:function(){return[P.y,P.y]}}
Y.oG.prototype={
aY:function(a){return"application/octet-stream"},
P:function(a,b){var t=0,s=P.bn(),r
var $async$P=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$P,s)},
$asdw:function(){return[P.bi]},
$ascc:function(){return[P.bi,P.bi]}}
T.le.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Mystical Vial of Blood",H.a([$.aS,$.bj,$.U,$.aI],s),null,!1,"Vial of Not-ABs Oil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.ar,$.bj,$.U,$.aW],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.Q,$.bj,$.U,$.aI,$.eB],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.E,$.aZ,$.U,$.aI,$.eB,$.aG],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.X,$.n3,$.bj,$.aI,$.U,$.a0],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dn,$.k)
q.i(0,$.um,$.k)
q.i(0,$.c2,$.o)
p=$.m
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.r
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ac+" and some boondollars in compensation."
n=this.x1
k=[U.b]
q.i(0,new R.Z("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.el(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.r
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.M+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.z
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.m
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.by+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.O("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.T(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.m
m="The "+n+" is playing against a "
l=$.r
m=m+l+" in a friendly game of "+$.ac+" Battle. With some smooth moves, they pull out a victory. The "+l+" comes over for a handshake. The "+n+" notices some ink dripping out of the "+l+"\u2019s arm. The "+l+" becomes confused. 'Ink? No this is blood from when I scraped my limb.' What the hell is blood?"
l="The "+n+" tries asking around what blood is, but every "+l+" asked just looks at them strangely and walks away. Finally, they run into a "
i=$.z
q.i(0,new R.Z("The True Meaning of Blood",!1,[new U.b(m),new U.b(l+i+" minion who mocks their lack of knowledge. 'If you don\u2019t even know what blood is maybe you should read a book sometime.'"),new U.b("The "+n+" takes the rude (and also dead) "+i+" minion\u2019s advice and gets their answer at a library. According to a biology textbook, people here have a liquid called blood running through tubes across their entire body. What a completely weird and alien concept.")],H.a([],k),R.GM(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.an)
i=this.f
i.i(0,new X.G(s,q,null),$.at)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cO,$.k)
s.i(0,$.cq,$.I)
s.i(0,$.aQ,$.I)
s.i(0,$.iV,$.k)
s.i(0,$.cr,$.I)
p=$.m
o="The "+p+"  and the "
n=$.dG
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
j=$.z
l=l+j+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+j+"."
h="Slaying the "+j+" proves the POWER OF TEAMWORK!"
s.i(0,new R.O("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.T(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+j+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.dY(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.an)
h=$.m
j="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
j=j+n+"s explains that before  "
p=$.z
j=j+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
n="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.by+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.xP
s.i(0,new R.O("Chain the Towers",!1,[new U.b(j),new U.b(n),new U.b(l),new U.T(m,h,o)],H.a([],k),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.m
o="The "+p+" learns of the "
h=$.ax
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.r
o=o+m+" explains that the "
l=$.z
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
j="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.by+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.O("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.T(j,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.m
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
j=$.r
h=h+j+" on "+$.ax+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
j="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+j+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+j+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.ef+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a5("One Degree of Separation",!1,[new U.b(h),new U.b(n),new U.b(j)],H.a([],k),R.dX(),!1,!1,new Y.bW("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.ax
j=j+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.ef+" is now more popular with your friends than you are."
s.i(0,new R.a5("Steal The Friends",!1,[new U.b(j),new U.b(h),new U.b(n)],H.a([],k),R.oC(),!1,!1,new Y.bW("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
n="The "+p+"  and the "
h=$.dG
n=n+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
j="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.z
j=j+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.O("Pale Shipping Dungeon",!1,[new U.b(n),new U.T(j,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.n)+".",o)],H.a([],k),R.dY(),!1,!1,new Y.hZ(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.an)
i.i(0,new X.G(q,s,null),$.at)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aQ,$.k)
t.i(0,$.bf,$.I)
t.i(0,$.cb,$.o)
r="In the wake of the defeat of the "+$.z+" it becomes really how isolated the individual "
q=$.r
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.m
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.ef+" to kick your ass, but luckily they have several."
t.i(0,new R.a5("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.el(),!1,!1,new Y.bW("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.m
q="The "+o+" learns that two prominent "
p=$.r
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
n="In a dramatic reveal, the "+o+" discovers that "
m=$.z
n=n+m+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
l="The "+o+" confronts "+m+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+m+" lies slain by the "+o+"'s "+$.by+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.M+"ing. "
t.i(0,new R.O("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(n),new U.T(l,"The deception of "+m+" continues with the defeat of the "+o+".",p)],H.a([],k),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.G(s,t,null),$.at)}}
T.lg.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Pan's Pipe",H.a([$.aa,$.X,$.bj,$.U],s),null,!1,"Smonkin Weeds Pipe")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.b1,$.U],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a9,$.E,$.bj,$.U],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.as,$.E,$.aX,$.U,$.a0],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cb,$.o)
q.i(0,$.fm,$.k)
q.i(0,$.aQ,$.o)
p=$.m
o="The "+p+" tries posting a letter through the "
n=$.ac
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.z
o=o+m+" has screwed with the mail system, crippling the "
l=$.r
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.by+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.Gv
i=[U.b]
q.i(0,new R.O("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.T(j,p,l)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.G(s,q,null),$.at)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.bf,$.k)
s.i(0,$.fm,$.o)
s.i(0,$.aQ,$.o)
s.i(0,$.c4,$.o)
s.i(0,$.cb,$.o)
p=$.m
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ac
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.r
k=l+k+" fields. The "+k+"s "+$.M+"ing is so joyful it's literally deafening. "
l=$.z
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.by+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.O("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.T(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.m
p="\u201cThe "+h+" returns home from exploring their land, but a "
l=$.r
s.i(0,new R.Z("Slay the Windmills",!1,[new U.b(p+l+" is waiting at the door. Shaking heavily, she tells the "+h+" that her village is being terrorized by terrible monsters. The "+h+" agrees to help, and is lead to a plain just outside the village. The "+l+" points in one direction to indicate the monsters, but all the "+h+" can see are a bunch of windmills. Wait\u2026are the windmills the monsters?! The "+l+" nods her head. The "+h+" knows consorts can be pretty dumb, but this really takes the cake.\u201d "),new U.b("The "+h+" whacks the bases of a few windmills with their "+$.by+" until they collapse. The "+l+"s from the village cheer and declare the "+h+" as a true hero and slayer of beasts. The "+h+" is happy to get praised, but is still a little frustrated by all of this nonsense. "),new U.b("Most of the windmills have been knocked over. The "+h+" starts to hit one of the last windmills, when suddenly it rears back and opens a toothy mouth in a roar. Holy Shit! It turns out windmill monsters aren\u2019t a delusion after all! The "+h+" slays the windmill monster in a tough strife and enjoys the "+l+" village\u2019s victory party.  ")],H.a([],i),R.dc(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.o)
m.i(0,new X.G(q,s,null),$.at)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cg,$.k)
t.i(0,$.mq,$.k)
t.i(0,$.fm,$.I)
t.i(0,$.cb,$.I)
r=$.m
q="The "+r+" is chilling in a "+$.r+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.z
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ac
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.ax+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.by+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.O("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.T(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.at)}}
M.h7.prototype={
eX:function(a){var t=this.a
if(!t.Y(0,a))return
return t.n(0,a)}}
Y.li.prototype={
P:function(a,b){var t=0,s=P.bn(),r,q,p,o,n,m,l,k,j,i
var $async$P=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:q=J.e7(b,"\n")
p=P.y
o=P.cD(p,p)
n=P.cD(p,[P.eN,P.y])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.cW(k).bv(k).length===0)m=null
else if(m==null)m=C.c.bv(k)
else{j=C.c.bv(k)
i=C.c.H(m,0,C.c.ey(m,$.$get$ww())+1)+j
o.i(0,i,m)
if(!n.Y(0,m))n.i(0,m,P.a1(null,null,null,p))
J.ze(n.n(0,m),i)}}r=new M.h7(o,n)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$P,s)},
$aseR:function(){return[M.h7]},
$ascc:function(){return[M.h7,P.y]}}
A.lp.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.L,$.ak,$.aW,$.cd],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.L,$.aW],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.aS,$.aW],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aX,$.a9,$.aW],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.ar,$.aW],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.Q,$.aW],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.E,$.aW],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cr,$.o)
q.i(0,$.cB,$.k)
q.i(0,$.c4,$.o)
p=$.m
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.r
o=o+n+"s are too scared to even "+$.M+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.z+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.Z("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ed,$.I)
s.i(0,$.c4,$.k)
s.i(0,$.cB,$.k)
s.i(0,$.cG,$.k)
o=$.m
n="The "+o+" learns of an Open Mic Nite at the "
m=$.ax
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.r
k=k+j+"s let out a braying "+$.M+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.Gy
s.i(0,new R.Z("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.C(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cP,$.I)
t.i(0,$.c3,$.o)
t.i(0,$.cB,$.k)
t.i(0,$.c4,$.o)
t.i(0,$.hr,$.o)
r=$.m
q="The "+r+"  is approached by a Crafty "
o=$.r
q=q+o+" who offers them a magical "
n=$.ac
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.M
t.i(0,new R.Z("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aC)}}
S.bD.prototype={
w:function(a){return H.x(new H.e2(H.kR(this),null))+": "+this.c},
gG:function(a){return this.c}}
S.iw.prototype={}
S.mM.prototype={}
B.fd.prototype={
hM:function(a,b,c){var t,s,r,q,p,o,n
t=document
s=t.createElement("div")
s.classList.add("contestEntry")
r=H.x(this.r)
s.classList.add(r)
q=W.l_("BigBadBattle.html?target="+J.fX(this.a," ","_"))
q.textContent=""+c+" "+H.x(this.a)+" ("+H.x(this.r)+")"
r=q.style
r.color="#00ff00"
q.classList.add("nameHeader")
p=W.l_("BigBadBattle.html?target="+J.fX(this.b," ","_"))
p.textContent="(by "+H.x(this.b)+")"
r=p.style
r.color="#00ff00"
p.classList.add("nameHeader")
s.appendChild(q)
s.appendChild(p)
o=t.createElement("div")
C.p.cn(o,this.e)
o.classList.add("bodyElement")
s.appendChild(o)
n=t.createElement("div")
C.p.cn(n,"JR: "+H.x(this.d))
n.classList.add("jrNotes")
s.appendChild(n)
b.appendChild(s)},
ghs:function(){return this.a}}
B.lv.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l
t=H.a([],[B.fd])
s=J.e7(a,P.ds("\n|\r",!0,!1))
for(r=s.length,q=this.a,p=P.y,p=[p,p],o=0;o<s.length;s.length===r||(0,H.bP)(s),++o){n=s[o]
if(J.tU(n)){m=new B.fd(null,null,null,null,null,null,null)
l=new H.w(0,null,null,null,null,null,0,p)
l.i(0,"HELLO","WORLD ")
l.i(0,"GOODBYE","WORLD BUT A SECOND TIME ")
l=C.A.hB(n)
m.a=J.d8(l,"bbName")
m.b=J.d8(l,"entrantName")
m.c=J.d8(l,"imagesCSV")
m.d=J.d8(l,"jrComment")
m.e=J.d8(l,"text")
m.f=J.d8(l,"shogunComment")
m.r=q
t.push(m)}}return t},
$S:function(){return{func:1,args:[P.y]}}}
B.lu.prototype={
$1:function(a){var t=this.a
return J.tT(a.ghs(),t)===!0||J.tT(a.b,t)===!0},
$S:function(){return{func:1,args:[B.fd]}}}
M.lE.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Can of Spray Paint",H.a([$.az,$.E],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.L,$.al,$.aW,$.aD],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.uR,$.E,$.au],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.L,$.al,$.aD],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.az,$.aq,$.L],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.al,$.L],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.al,$.aF,$.aq],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.az,$.al],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.as,$.al,$.E],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.Q,$.al],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.L,$.al,$.aD],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dT,$.o)
q.i(0,$.cC,$.k)
q.i(0,$.aQ,$.o)
p=$.m
o="The "+p+" visits a beautiful "
n=$.ac
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.r
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.z+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.M+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.Z("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ed,$.I)
s.i(0,$.c4,$.o)
s.i(0,$.cB,$.I)
s.i(0,$.bf,$.o)
s.i(0,$.cG,$.k)
o=$.m
n="The "+o+" finds a troupe of dejected looking "
l=$.r
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.ax
l=l+n+" "
k=$.ac
s.i(0,new R.Z("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.M+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hw,$.I)
t.i(0,$.cr,$.I)
t.i(0,$.fg,$.I)
t.i(0,$.c3,$.I)
t.i(0,$.bf,$.o)
t.i(0,$.aQ,$.o)
r=$.m
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.M
q=q+o+"ingworth, "
n=$.r
q=q+n+" heiress to the "+$.ac+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.Go
t.i(0,new R.Z("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.C(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aC)}}
T.lK.prototype={}
V.lO.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Trendy Fabric",H.a([$.az,$.Q],s),null,!1,"Weird Tasting Candy Paper")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.az,$.uG,$.eB],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.E,$.uK,$.aN],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jH
r=A.i("Broom",H.a([r,$.X,$.ak,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.X,$.uT,$.ak],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.Q,$.b2,$.bj,$.az,$.hD],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.az,$.Q],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aG,$.cd,$.E,$.bs],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.az,$.L],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bs],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.E,$.as,$.ak,$.cd,$.uF],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bS],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bS,$.jK],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.az,$.bU,$.aU],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.ar,$.bk,$.b1],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.ar,$.bk],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.az,$.ar,$.aI],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cG,$.o)
q.i(0,$.cq,$.o)
q.i(0,$.cr,$.I)
p=$.m
o="The "+p+" is visited by a Beautiful "
n=$.r
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ac
l=[U.b]
q.i(0,new R.Z("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.M+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.C(),!1,!1,new Y.iy("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cr,$.k)
s.i(0,$.c4,$.o)
s.i(0,$.fg,$.k)
s.i(0,$.dz,$.o)
s.i(0,$.bf,$.k)
p=$.m
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ac
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.r
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.M+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.Gw
s.i(0,new R.Z("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.C(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hs,$.k)
t.i(0,$.bf,$.o)
t.i(0,$.fh,$.k)
t.i(0,$.aQ,$.o)
t.i(0,$.iV,$.k)
r=$.m
q="The "+r+" finds a loom, and a Wizened "
p=$.r
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ac
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.M+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.Z("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.aC)}}
U.lP.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aD,$.a9,$.L,$.aE,$.U,$.a0],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aF,$.bj,$.U,$.aE],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.b1,$.bj,$.U,$.aE],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.aS,$.U,$.bS],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.aS,$.U,$.bs,$.aE,$.aZ,$.bZ,$.b_],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aG,$.b_,$.aE,$.L,$.U],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dU,$.k)
q.i(0,$.d_,$.o)
q.i(0,$.fm,$.I)
q.i(0,$.bf,$.I)
q.i(0,$.c2,$.o)
p=$.m
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.r
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ac
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.z
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.by+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.O("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.T(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dU,$.k)
s.i(0,$.d_,$.o)
s.i(0,$.eA,$.an)
s.i(0,$.ev,$.o)
s.i(0,$.uj,$.o)
s.i(0,$.dn,$.o)
s.i(0,$.d_,$.o)
s.i(0,$.bf,$.I)
s.i(0,$.c2,$.o)
s.i(0,$.dp,$.o)
p=$.m
o="The "+p+" has found a group of Violent "
m=$.r
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.ax
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.M+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.z
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.by+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.O("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.T(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.dc(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.m
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ac
p=p+l+"s alike. "
l=$.r+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.z
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.by+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.O("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.T(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aQ,$.k)
t.i(0,$.c2,$.k)
t.i(0,$.wU,$.an)
t.i(0,$.fj,$.I)
r=$.m
q="The "+r+" finds a small dungeon bearing the image of "
p=$.z
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.r+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.O("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.T(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.dc(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
k=$.m
p="The "+k+" learns from one of their "
r=$.r
p=p+r+"s that there is an ancient prophecy of a "
l=$.ax
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ac
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.z
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.by+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.Gn
t.i(0,new R.O("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.T(o,k,q)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.at)}}
Z.lQ.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Dream Diary",H.a([$.L,$.aD,$.U],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aF,$.bj,$.ak,$.U,$.a0],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aF,$.bj,$.U],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hs,$.o)
q.i(0,$.fh,$.k)
q.i(0,$.aQ,$.o)
q.i(0,$.iV,$.o)
p=$.r
o="A "+p+" child tugs on the "
n=$.m
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ac
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.M+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.Gt
k=[U.b]
q.i(0,new R.O("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.T(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.G(s,q,null),$.at)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cg,$.o)
s.i(0,$.fh,$.k)
s.i(0,$.dB,$.o)
s.i(0,$.cZ,$.o)
s.i(0,$.mm,$.o)
s.i(0,$.cB,$.k)
p=$.m
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.r
n=n+m+"s are even starting to snigger and "
j=$.M
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.O("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.T("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(q,s,null),$.at)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dT,$.k)
t.i(0,$.iQ,$.o)
t.i(0,$.aQ,$.o)
t.i(0,$.cZ,$.k)
t.i(0,$.mm,$.k)
t.i(0,$.fh,$.o)
r=$.m
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.O("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.ax+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.r+" is "+$.M+"ing in reverse. Another is in a "+$.ac+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.T("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(s,t,null),$.at)}}
X.iN.prototype={}
X.iv.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.hq]]}}}
M.hq.prototype={}
U.mj.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Fluthulu Poster",H.a([$.Q,$.b2,$.b_,$.bt],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.Q,$.b2,$.b_],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aG,$.aF,$.b1,$.ft,$.aR],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aF,$.xl,$.eC,$.aR],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aF,$.bZ,$.bk,$.b_],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aD,$.L,$.aB,$.b_],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.L,$.a3,$.ak],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.L,$.a3,$.ak],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.L,$.a3,$.bZ,$.b_,$.bt],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aG,$.aw,$.a3,$.ak,$.aR],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aG,$.uB,$.a3,$.ak,$.aR],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fi,$.an)
q.i(0,$.cq,$.o)
q.i(0,$.cb,$.o)
q.i(0,$.cP,$.I)
p=$.m
o="The "+p+" learns of a Beautiful "
n=$.r
o=o+n+" who has been kidnapped by the vial "
m=$.z
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ac
j=[U.b]
q.i(0,new R.Z("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.k)
s.i(0,$.dn,$.k)
s.i(0,$.iR,$.o)
s.i(0,$.c2,$.k)
s.i(0,$.eA,$.k)
s.i(0,$.hv,$.o)
o=$.m
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.r
s.i(0,new R.Z("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.k)
t.i(0,$.hu,$.o)
t.i(0,$.c2,$.k)
t.i(0,$.dS,$.o)
t.i(0,$.eu,$.o)
t.i(0,$.um,$.o)
r=$.m
q="The "+r+" finds a group of three "
o=$.r
q=q+o+"s "
n=$.M
t.i(0,new R.Z("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aC)}}
N.ad.prototype={
w:function(a){return H.x(new H.e2(H.kR(this),null))+": "+H.x(this.b)}}
O.cc.prototype={
bb:function(a){var t=0,s=P.bn(),r,q=this,p
var $async$bb=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.c7(q.b_(a),$async$bb)
case 3:r=p.P(0,c)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$bb,s)}}
O.dw.prototype={
bg:function(a){var t=0,s=P.bn(),r
var $async$bg=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$bg,s)},
cV:function(a){var t=0,s=P.bn(),r,q=this
var $async$cV=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.A5([J.wf(a)],q.aY(0),null))
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$cV,s)},
b_:function(a){var t=0,s=P.bn(),r,q=this,p,o
var $async$b_=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:p=P.bi
o=new P.bm(0,$.ap,null,[p])
W.x0(a,null,q.aY(0),null,null,"arraybuffer",null,null).b1(new O.ld(new P.e3(o,[p])))
r=o
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$b_,s)},
$ascc:function(a){return[a,P.bi]}}
O.ld.prototype={
$1:function(a){this.a.aJ(0,H.kS(J.zs(a),"$isbi"))},
$S:function(){return{func:1,args:[W.eh]}}}
O.eR.prototype={
bg:function(a){var t=0,s=P.bn(),r,q,p,o,n
var $async$bg=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:a.toString
q=H.cT(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.fC(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$bg,s)},
b_:function(a){var t=0,s=P.bn(),r
var $async$b_=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:r=W.uv(a,null,null)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$b_,s)},
$ascc:function(a){return[a,P.y]}}
O.iL.prototype={
b_:function(a){var t=0,s=P.bn(),r
var $async$b_=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$b_,s)},
bg:function(a){return H.aM("Element format doesn't read from buffers")},
$ascc:function(a){return[a,P.y]}}
V.mA.prototype={
aY:function(a){return"font/opentype"},
P:function(a,b){var t=0,s=P.bn(),r
var $async$P=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:t=3
return P.c7(A.hN("scripts/Rendering/text/opentype.min.js",!1),$async$P)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$P,s)},
$asdw:function(){return[R.hx]},
$ascc:function(){return[R.hx,P.bi]}}
Z.iM.prototype={}
E.j_.prototype={}
E.oa.prototype={}
E.P.prototype={
w:function(a){var t="["+J.cA(this.a)+" x "+H.x(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.h1.prototype={
w:function(a){var t="[(Random from "+P.uY(this.d,"(",")")+") x "+H.x(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.l2.prototype={
w:function(a){return"[Stats assigned from player Interests x"+H.x(this.b)+"]"}}
Y.mG.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aD,$.V,$.L,$.a0,$.n7],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aF,$.V,$.aE],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.Q,$.V,$.aE],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.uP,$.V,$.aE],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.ms,$.o)
t.i(0,$.cb,$.k)
t.i(0,$.dp,$.I)
t.i(0,$.dA,$.k)
r=$.r
q="An excited "+r+" runs up to the "
p=$.m
q=q+p+" and starts to "
o=$.M
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.ax
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ac
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.z
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.O("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.T(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o=$.m
t.i(0,new R.a5("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.z+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.r+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.C(),!1,!1,new Y.e_("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.r
j="Now that the "+o+"s are free from the reign of "+$.z+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.m
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.M
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.ax+" Quest Online: The "+$.ac+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.fy
t.i(0,new R.a5("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.m
p=p+o+" shows the "
r=$.r
t.i(0,new R.bG("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.M+"s in time to stop them.    ")],H.a([],i),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Y.mH.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Sherpa Parka",H.a([$.bs,$.V,$.ci],s),"Clearly the best class uses this.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a0,$.bs,$.aD,$.L,$.V,$.Y],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.E,$.V,$.aX],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.E,$.V,$.a9,$.Y],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.ms,$.k)
t.i(0,$.cb,$.k)
t.i(0,$.dp,$.o)
t.i(0,$.dA,$.k)
r="Now that the "+$.z+" is out of the way, a group of "
q=$.r
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.m
o=[U.b]
t.i(0,new R.a5("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.M+", but they are happy.")],H.a([],o),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.m
t.i(0,new R.bG("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.r+" "+$.M+"s in time to stop them.    ")],H.a([],o),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
this.x.i(0,new X.G(s,t,null),$.bO)}}
T.mI.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Doll",H.a([$.uP,$.az,$.av,$.U],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Soul Puppet",H.a([$.X,$.av,$.U,$.a0,$.b_],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.uJ,$.U],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.L,$.U,$.aB],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.aq,$.aS,$.U],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ev,$.I)
q.i(0,$.ex,$.k)
q.i(0,$.c4,$.o)
p=$.m
o="The "+p+", guided by a "+$.r+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.z
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.by+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.O("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.T(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.m
p="The "+j+" finds a Violent "
l=$.r
p=p+l+". A Magical Talking "
k=$.ac
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.z
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.O("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.T(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.oC(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h=this.f
h.i(0,new X.G(s,q,null),$.at)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cB,$.k)
s.i(0,$.iR,$.k)
s.i(0,$.fm,$.o)
s.i(0,$.c2,$.k)
s.i(0,$.cr,$.o)
s.i(0,$.dp,$.I)
p=$.m
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ac
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.z
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.by+". The "+p+" is victorious. "
s.i(0,new R.O("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.T(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j="Now that the "+$.z+" has been defeated, a Copy "
p=$.m
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.r
j=j+k+"s "
l=$.M
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.ef+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a5("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.el(),!1,!1,new Y.bW("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.z
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.O("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.T(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.dc(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h.i(0,new X.G(q,s,null),$.at)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iP,$.k)
t.i(0,$.cr,$.k)
t.i(0,$.mr,$.k)
t.i(0,$.fg,$.o)
t.i(0,$.hv,$.k)
t.i(0,$.cq,$.o)
t.i(0,$.ex,$.I)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.r
t.i(0,new R.O("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.M+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.ax+" laws put in place by "+$.z+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.m
p="The "+r+" finds a weeping Broken Hearted "
q=$.r
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.ax
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.M
t.i(0,new R.a5("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.fD(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.k)
q=$.m
m="The "+q+"  and the "
r=$.dG
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.z
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.O("Flushed Shipping Dungeon",!1,[new U.b(m),new U.T(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.n)+".",n)],H.a([],i),R.dY(),!1,!1,new Y.iY(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.an)
n=$.m
r="The "+n+"  and the "
q=$.dG
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.z
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.O("Pitched Shipping Dungeon",!1,[new U.b(r),new U.T(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.n)+".",m)],H.a([],i),R.dY(),!1,!1,new Y.k5(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.an)
h.i(0,new X.G(s,t,null),$.aC)}}
B.mJ.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Family Ashes",H.a([$.aG,$.as,$.V,$.aE,$.bX],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a0,$.L,$.V,$.aE,$.n4],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aD,$.V,$.al],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.xa,$.V,$.ux,$.n4],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.uy,$.V,$.au,$.n4],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.cg,$.o)
r=$.z
q="With the death of the "+r+", it now falls to the "
p=$.m
o=[U.b]
t.i(0,new R.a5("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.r+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
r="The "+$.z+" has released the frogs into the "
p=$.m
t.i(0,new R.bG("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
this.x.i(0,new X.G(s,t,null),$.bO)}}
X.mL.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Wand",H.a([$.X,$.U,$.a3,$.bl],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.bl,$.bx,$.U,$.aT,$.aa,$.a0,$.a3],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bV,$.n3,$.U,$.a3,$.aW,$.bl],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.bl,$.aT,$.U,$.as],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aF,$.aT,$.U,$.bl],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ui,$.k)
q.i(0,$.cq,$.o)
q.i(0,$.aQ,$.k)
q.i(0,$.cZ,$.k)
p=$.m
o="The "+p+" is just minding their own business when they see a wizened "
n=$.r
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.M+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.z
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ac
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.Gq
i=[U.b]
q.i(0,new R.O("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.T(k,p,j)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.m
j="The "+n+" has slain "+$.z+", but there\u2019s still one thing left to do. The land is infested with terrifying creatures called angels and it\u2019s been creeping the "+n+" out the whole time. Clearly their ultimate quest for this land must be to eliminate all the angels and free the land from their terror."
p="Angel killing is a lot harder than the "+n+" expected, and they were already expecting it to be pretty tough. The angels have huge amounts of health, and they\u2019re now completely pissed off over the whole exterminating them thing going on. The land is 100 times more terrifying now with swarming angels, but things are always darkest before the dawn! The "+n+" continues on their righteous quest."
k="All of the horrible angels have finally been slain. The land has been saved from their menace. The "+n+" excitedly waits for their quest reward, but nothing happens. They go to some of the "
l=$.r
q.i(0,new R.a5("Kill the Angels",!1,[new U.b(j),new U.b(p),new U.b(k+l+" villages to ask for a reward, but they are refused. Frankly, the "+l+"s would have preferred the angels remained instead of hiding in their homes while the "+n+" was waging their one person war. Maybe genocide wasn\u2019t the right answer after all?")],H.a([],i),R.dc(),!1,!1,new Y.e_("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.k)
s.i(0,$.hr,$.o)
s.i(0,$.dB,$.k)
p=$.m
o="The "+p+"  is approached by a Crafty "
m=$.r
o=o+m+" who offers them a magical "
l=$.ac
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.z
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.O("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.T(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aQ,$.k)
t.i(0,$.dz,$.I)
t.i(0,$.cC,$.k)
t.i(0,$.cZ,$.k)
r=$.m
q="The "+r+" finds a grey town of despondant "
p=$.r
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.z
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ac
t.i(0,new R.O("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.T("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.m
o="The "+r+" discovers a group of "
p=$.r
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.z
t.i(0,new R.O("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.T("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.fD(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.G(s,t,null),$.at)}}
Q.mS.prototype={
bb:function(a){var t=0,s=P.bn(),r,q,p
var $async$bb=P.br(function(b,c){if(b===1)return P.bo(c,s)
while(true)switch(t){case 0:q=W.x1(null,a,null)
p=new W.ig(q,"load",!1,[W.a_])
t=3
return P.c7(p.gad(p),$async$bb)
case 3:r=q
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$bb,s)},
$asdw:function(){return[W.fq]},
$ascc:function(){return[W.fq,P.bi]}}
Q.or.prototype={
aY:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bn(),r,q=this,p,o,n
var $async$P=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.c7(q.cV(b),$async$P)
case 3:p=n.x1(null,d,null)
o=new W.ig(p,"load",!1,[W.a_])
t=4
return P.c7(o.gad(o),$async$P)
case 4:r=p
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$P,s)}}
Q.oo.prototype={
aY:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bn()
var $async$P=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:throw H.j("Read NYI")
return P.bp(null,s)}})
return P.bq($async$P,s)},
$asdw:function(){return[Q.k4]},
$ascc:function(){return[Q.k4,P.bi]}}
V.mV.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Inkwell",H.a([$.aS,$.bj,$.U,$.bx],s),null,!1,"Vial of Not-ABs Oil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Splatfest T-shirt",H.a([$.Q,$.b2,$.U,$.uE],s),null,!1,"Mechandising Party")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.Q,$.bj,$.U,$.aI,$.eB],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.E,$.aZ,$.U,$.aI,$.eB,$.aG],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.X,$.n3,$.bj,$.aI,$.U,$.a0],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cO,$.k)
q.i(0,$.cq,$.I)
q.i(0,$.aQ,$.I)
q.i(0,$.iV,$.k)
q.i(0,$.cr,$.I)
q.i(0,$.wQ,$.k)
p=$.m
o="The "+p+"  and the "
n=$.dG
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
k=$.z
l=l+k+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+k+"."
j="Slaying the "+k+" proves the POWER OF TEAMWORK!"
i=[U.b]
q.i(0,new R.O("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.T(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+k+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",j)],H.a([],i),R.dY(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.an)
j=$.m
k="The "+j+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
k=k+n+"s explains that before  "
p=$.z
k=k+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+j+" vows to help. "
n="The "+j+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+j+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+j+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+j+"'s "+$.by+". The "+j+" is finally free to restore the chains, bringing peace and understanding to the land. "
j="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+j+"."
p=$.xP
q.i(0,new R.O("Chain the Towers",!1,[new U.b(k),new U.b(n),new U.b(l),new U.T(m,j,o)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.m
o="The "+p+" learns of the "
j=$.ax
o=o+j+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.r
o=o+m+" explains that the "
l=$.z
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+j+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+j+" Tower . "
k="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.by+". The "+p+" is finally able to see what lies at the top of the "+j+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
q.i(0,new R.O("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.T(k,"The "+j+" Tower is more at risk than ever before.",p)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
k=$.r
j=j+k+" on "+$.ax+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
k="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+k+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+k+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.ef+" has so many friends, they have to assume everyone in this fight is already in their friend list."
q.i(0,new R.a5("One Degree of Separation",!1,[new U.b(j),new U.b(n),new U.b(k)],H.a([],i),R.dX(),!1,!1,new Y.bW("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
k="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.ax
k=k+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
j="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.ef+" is now more popular with your friends than you are."
q.i(0,new R.a5("Steal The Friends",!1,[new U.b(k),new U.b(j),new U.b(n)],H.a([],i),R.oC(),!1,!1,new Y.bW("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
n="The "+p+"  and the "
j=$.dG
n=n+j+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
k="The "+p+"  and the "+j+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.z
k=k+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+j+" together."
q.i(0,new R.O("Pale Shipping Dungeon",!1,[new U.b(n),new U.T(k,"The "+p+" and "+j+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.n)+".",o)],H.a([],i),R.dY(),!1,!1,new Y.hZ(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.an)
o=this.f
o.i(0,new X.G(s,q,null),$.at)
q=H.a(["Ink","Paper","Color","Quills"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.bf,$.I)
s.i(0,$.hr,$.I)
s.i(0,$.cC,$.I)
s.i(0,$.c4,$.k)
s.i(0,$.fj,$.I)
p=$.m
n="The "+p+" comes across an enormous wall. Strange symbols are spread across its face. An indent in the wall indicates a door will appear if the puzzle of the wall is solved."
m="The "+p+" is getting annoyed trying to solve the wall. They start inking graffiti on the wall out of spite. Suddenly, they realize that some of the symbols light up when the ink touches it."
l="The "+p+" spends a good hour painting the wall. A number of symbols light up but nothing else happens. The "+p+" realizes unhappily that they probably need to paint only the symbols. Shit."
k="The wall is finally clean except for the appropriate symbols and the door is open. The "+p+" is eager to fight "
j=$.z
k=k+j+" and give some payback for the terrible wall puzzle. "
h=j+" is defeated and the "+p+"\u2019s payback is complete. "
s.i(0,new R.O("Paint the Wall",!1,[new U.b(n),new U.b(m),new U.b(l),new U.T(k,"With the "+p+"\u2019s defeat, "+j+" closes the door repaints the outside wall, just to be a jerk.",h)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.I)
h=$.m
j="The "+h+" is visiting a "
p=$.r
j=j+p+" town, but before they could reach it, a crowd of angry "+p+"s starts charging towards them. \u201cThere\u2019s the one who messed up our town!\u201d The "+h+" decides to make a hasty retreat."
k="Coming back to the "+p+" town secretly, the "+h+" finds the mess the town is in. Ink is covering the town and most of its residents are hard at work cleaning the ink. Wanted posters with their face are plastered all over town. The "+h+" discreetly helps clean the town and vows to clear their name."
l="The "+h+" heads back to the town, but they hear loud screaming. They rush towards the center of town and find their culprit, themself. Or rather something in the shape of the "+h+" with an otherworldly transparent color. The "+h+" soundly defeats the doppelganger in a quick strife. "+p+"s witness the smackdown and cheer. The "+h+"\u2019s name has been cleared!"
m="The "+h+" realizes that the doppelganger was created by "
n=$.z
m=m+n+" and more could be created if unstopped. The"+h+" tracks "+n+"\u2019s lair down by following the path of vandalism created by their doppelganger. It\u2019s time to take "+n+" down for framing the "+h+"."
p=n+" is defeated and doppelganger production has been stopped. The "+p+"s apologize for mistaking the "+h+" for the real vandal."
s.i(0,new R.O("Framed for Vandalisim",!1,[new U.b(j),new U.b(k),new U.b(l),new U.T(m,n+" begins making more doppelgangers to tarnish the "+h+"\u2019s good name.",p)],H.a([],i),R.dc(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
p=$.m
h="The "+p+" is playing against a "
n=$.r
h=h+n+" in a friendly game of "+$.ac+" Battle. With some smooth moves, they pull out a victory. The "+n+" comes over for a handshake. The "+p+" reaches out what would be their hand, if it wasn\u2019t currently a melting stump. The "+p+" screams in horror, but their hand instantly reforms. What the hell was that about?"
m=$.z
l="The entrance to "+m+"\u2019s lair is blocked by huge metal bars, with no apparent mechanisms to open it. The "+p+" walks around the lair looking for another way in, but suddenly everything starts growing! No wait, it\u2019s actually just the "+p+" slowly dissolving into a puddle. Again?! The dissolving process is once again reversed after a bunch of screaming."
n="The "+p+" makes their way to a secluded hut. A wizened "+n+" hermit sits in a meditative pose. The "+p+" says they were told that he could explain what was happening to the "+p+". The "+n+" nods and tells the "+p+" that their aspect was meant for a race of squid-like creatures with the power to turn into ink. Having the aspect means they are partially a squid now and are saddled with the same ability. The "+p+" will have to learn to control their new power if they wish to succeed in the session."
m="After some time practicing the "+p+" has gotten the hang of their strange ability and returns to "+m+"\u2019s lair. They proceed to melt into a squid-like form make of ink and effortlessly slide through the bars. Jeez that feels weird. "+m+" has been very impatient waiting for the "+p+" and immediately starts the strife!"
k="The "+p+" raises a hand in victory, and then has to shake said hand to stop it from turning to ink again. It sure is annoying being a squid now."
s.i(0,new R.O("An Inky Situation",!1,[new U.b(h),new U.b(l),new U.b(n),new U.T(m,"With a great blow, the "+p+" is slammed into a wall hard and turns into a puddle with eyes, before reforming. This would be funny if the "+p+" hasn\u2019t possibly died from the impact.",k)],H.a([],i),R.GN(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.an)
o.i(0,new X.G(q,s,null),$.at)
s=H.a(["Nostalgia","Video Games","Ninety","Cartoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.eu,$.k)
t.i(0,$.cq,$.I)
t.i(0,$.aQ,$.I)
t.i(0,$.c4,$.k)
t.i(0,$.ez,$.I)
r=$.m
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
p=$.r
q=q+p+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+p+" kept rhyming "
n=$.M
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+p+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+p+" approaches the "+r+". And aura of "+$.ax+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+p+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
p=this.x1
t.i(0,new R.Z("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],i),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.m
r="The "+p+" has finally tracked down the location of "
q=$.z
t.i(0,new R.O("Beat the Games",!1,[new U.b(r+q+"\u2019s lair. Surprisingly it\u2019s inside a gaudy arcade rather than a dungeon. The door to "+q+"\u2019s lair is locked, with the key inside a prize vendor. The "+p+" will need to win enough tickets to earn that key."),new U.b("The "+p+" is struggling to win any of the arcade games; they all seem impossibly hard. A "+q+" minion mocks them. They tell the "+p+" true gamers can easily beat any of these games."),new U.b("The "+p+" discovers the ultimate secret. Most of these games have cheat codes. Super difficult games are a lot easier when you can give yourself 30 lives."),new U.T("With enough tickets earned, the "+p+" takes the key and enters "+q+"\u2019s lair. "+q+" has been impatiently waiting. It\u2019s time to strife! ","A giant game over sign drops down from the ceiling.","The "+p+" beats "+q+", just like all the hard games they had to play. Who\u2019s a true gamer now?")],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o.i(0,new X.G(s,t,null),$.bO)}}
B.hC.prototype={
D:function(){var t,s
t=Q.K(null,null,A.a6)
s=A.i("Perfectly Generic Object",H.a([],[G.a2]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.k)
q.i(0,$.bf,$.I)
q.i(0,$.dU,$.k)
q.i(0,$.c2,$.o)
q.i(0,$.ec,$.I)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.Z("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.C(),!1,!1,new Y.bW(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ez,$.k)
s.i(0,$.ew,$.I)
s.i(0,$.ey,$.o)
s.i(0,$.cO,$.k)
s.i(0,$.cg,$.I)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.Z("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.C(),!1,!1,new Y.bW(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aQ,$.k)
t.i(0,$.bf,$.I)
t.i(0,$.cb,$.o)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
t.i(0,new R.Z("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.C(),!1,!1,new Y.bW(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=$.m
r="The "+p+" learns that all of the local "
q=$.r
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.M
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.vx(),!1,!1,new Y.bW(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.I)
n.i(0,new X.G(s,t,null),$.aC)},
w:function(a){return this.ch},
gG:function(a){return this.ch}}
A.a6.prototype={
ghH:function(){var t,s,r,q,p,o
t=H.a([],[P.y])
s=new A.k7(null,null)
s.dm(this.r.a)
if(this.x===0)return t
r=P.d0(G.Ac(this.r),!0,G.a2)
C.b.dq(r,new A.nb())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bP)(r),++p){o=r[p]
if(!(o instanceof G.ae||o.gem().length===0))t.push(" "+Y.Iz(s.ip(o.gem())))}return t},
gbO:function(){var t,s,r
for(t=this.r,s=new P.dL(t,t.r,null,null,[null]),s.c=t.e,r=0;s.F();)r+=s.d.gbO()
return r},
ghu:function(){var t=this.r
return new H.dh(t,new A.na(),[H.N(t,0)])},
ghV:function(){var t,s,r,q,p
for(t=this.ghH(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bP)(t),++q)r+=t[q]+" "
return r+this.e},
w:function(a){return this.ghV()},
aI:function(a,b){var t=b.gbO()-this.gbO()
if(t>0)t=1
else if(t<0)t=-1
return C.d.b0(t)},
I:function(a,b,c,d,e){var t,s,r
t=P.jQ(b,null)
this.r=t
if(t.a===0)t.h(0,$.xg)
s=P.jQ(this.ghu(),null)
for(t=new P.dL(s,s.r,null,null,[null]),t.c=s.e;t.F();){r=t.d
this.r.ao(0,r.gfb())
this.r.as(0,r)}$.$get$xG().push(this)},
$isbI:1,
$asbI:function(){return[A.a6]}}
A.nb.prototype={
$2:function(a,b){return a.geC()-C.a.b0(b.geC())},
$S:function(){return{func:1,args:[G.a2,G.a2]}}}
A.na.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a2]}}}
S.v0.prototype={
w:function(a){return C.A.hN(this.a)},
n:function(a,b){return J.d8(this.a,b)},
i:function(a,b,c){J.it(this.a,b,c)},
gae:function(a){return J.fW(this.a)}}
S.k3.prototype={
$asaK:function(){return[P.y,P.y]},
$isaK:1}
N.nm.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Gavel",H.a([$.X,$.n2],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aF,$.aZ],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.Q,$.az],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.L,$.aD],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bU,$.ar,$.bs],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.L,$.aD,$.aq],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aG,$.E,$.aZ],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fi,$.I)
q.i(0,$.c3,$.o)
q.i(0,$.cC,$.I)
p=$.m
o="The "+p+" finds an elaborate courtroom full of "+$.M+"ing "
n=$.r
m=[U.b]
q.i(0,new R.Z("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ac+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.k)
s.i(0,$.dp,$.o)
s.i(0,$.cO,$.o)
p=$.m
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.r
l=o+l+" yells 'Stop that thief' in betwen "+$.M+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ac+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.Gm
s.i(0,new R.Z("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.C(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.k)
t.i(0,$.cg,$.o)
t.i(0,$.dn,$.I)
t.i(0,$.eA,$.o)
t.i(0,$.ev,$.o)
t.i(0,$.fk,$.o)
t.i(0,$.iS,$.o)
r=$.m
q="The "+r+" finds a crowd of "
p=$.M
q=q+p+"ing "
o=$.r
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.Gz
t.i(0,new R.Z("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.C(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.aC)}}
S.no.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Shining Armor",H.a([$.aG,$.n6,$.V,$.ft],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a0,$.n6,$.V,$.aN,$.au,$.eC],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.E,$.V,$.bk,$.av],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aG,$.ft,$.V,$.n6],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.mp,$.k)
t.i(0,$.dq,$.k)
t.i(0,$.ed,$.k)
t.i(0,$.fk,$.k)
t.i(0,$.fi,$.o)
r="The "+$.z+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.m
p=[U.b]
t.i(0,new R.bG("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
q=$.z
r="Now that the "+q+" is defeated, the "
o=$.r
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.m
t.i(0,new R.a5("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.ax
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.z
n=n+q+". A Learned "+$.r+" explains that it can only be defeated by the Legendary "
r=$.ac
n=n+r+" Blade. The "
m=$.m
t.i(0,new R.a5("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
r="The volcanos of the land are weirdly active after the defeat of the "+$.z+". One begins to erupt near a "
m=$.r
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.M+"s, but not really doing anything to evacuate or save anyone. The "
o=$.m
t.i(0,new R.a5("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Q.np.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("LAW Gavel",H.a([$.U,$.X,$.n2],s),"Organics seem to respect this. Use it to your advantage.",!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("LAW Caution Tape",H.a([$.U,$.aF,$.aZ],s),"For when you want to tell inferior organics to keep out.",!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("STOP SIGN",H.a([$.U,$.uU,$.E,$.aZ],s),"This isn't a weapon, dunkass.",!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Scales","Disorder","Chaos","Injustice"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fi,$.k)
q.i(0,$.dp,$.o)
q.i(0,$.cg,$.o)
q.i(0,$.c3,$.I)
q.i(0,$.cB,$.I)
p=$.m
o="The "+p+" is told by a worried "
n=$.r
o=o+n+" that a group of underling rebels are causing havoc across the land, breaking laws left and right. They must be stopped! Eventually."
m="The "+p+" has located a rebel hideout. The underlings get ready for a battle to the death when the "+p+" suddenly breaks out a "+$.ac+" and starts getting all lawyerly on them. The underlings are all sentenced to 30 years in prison, without parole."
l="The "+p+" finds out through interrogating enough of the underling rebels that they have a big mean leader they call the "
k=$.z
l=l+k+". Sounds like a challenge. The "+p+" cracks their knuckles as they prepare for the biggest case on this side of Skaia."
j="Arriving at the final rebel hideout, "+p+" prepares for battle against the "+k+". For their crimes against the "+n+"s, they're getting the DEATH SENTENCE."
n="The "+k+" lies slain by the "+p+"'s "+$.by+". The "+p+" has won! The "+n+"s are no longer plagued by the lawbreakers."
i=[U.b]
q.i(0,new R.O("Punish the Rebels",!1,[new U.b(o),new U.b(m),new U.b(l),new U.T(j,"The "+k+" continues to run their underling crime ring with the defeat of the "+p+".",n)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Heroics","Villains","Heroes","Powers","Justice","Metropolises","Comics"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dq,$.k)
s.i(0,$.c4,$.o)
s.i(0,$.cq,$.o)
s.i(0,$.dq,$.I)
s.i(0,$.ey,$.I)
p=$.m
o="The "+p+" is taking a walk through one of the land's many cities when they witness a fight break out between an Underling Hero and "
m=$.r
o=o+m+" Villain. One of the Underling Hero's attacks hits the "+p+". They won't be having any of that! The "+p+" helps the "+m+" Villain defeat the Underling Hero, and in turn gets invited to join a league of shady criminals. Sweet."
l="The "+p+" teams up with some other villainous "+m+"s to take down a rival team of Underling Heroes. They won't be having any of this LAW business, certainly. Rules were made to be broken, and that's just what the "+p+" is going to do."
m="After defeating yet another league of Underling Heroes, the "+p+" and the other "+m+" Villains feel a cold chill run down their spine. In the distance, lightning strikes a mountain, revealing the headquarters of the  "
k=$.z
m=m+k+", leader of the Underling Heroes and the last hope to preserve law. They're going down!"
j="The "+p+" arrives at the "+k+"'s headquarters, fighting through waves of Underling Heroes before they can finally reach the "+k+". It\u2019s time to end the LAW, once and for all!"
h="The "+k+" lies slain by the "+p+"'s "+$.by+". The last of the Heroes is no more.  Injustice takes over the land at last."
s.i(0,new R.O("Become the Villain",!1,[new U.b(o),new U.b(l),new U.b(m),new U.T(j,"The "+p+" is defeated. The "+k+" holds on to the last remnants of justice in the land.",h)],H.a([],i),R.dc(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.m
k="The "+h+" is taking a walk through one of the land's many cities when they witness a fight break out between some "
p=$.r
k=k+p+" Hero and an Underling Villain. Being naturally inclined toward the preservation of order, the "+h+" teams up with the "+p+" Hero and triumphs against the Underling Villain. As a reward, the "+p+" Hero invites the "+h+" to join an elite team of crime fighting good guys! Awesome!"
p="The "+h+" works together with some "+p+" Heroes to take down and arrest some Underling Villains. Slowly but surely, the balance of order and disorder begins to shift in order's favor. The number of villains is getting fewer and fewer."
j="With the last of the Villainous Underlings defeated, the "+h+" rejoices, thinking that justice has been served in this land. But what's this? Lightning strikes the ground far away and causes a dark mountain to shoot up into the sky! The lair of the final villain, the "
m=$.z
j=j+m+", has been revealed."
l="The "+h+" storms the lair of the "+m+", the final villain in all of this land. It's time to bring back KAW, once and for all!"
o="The "+m+" lies slain by the "+h+"'s "+$.by+". The last of the Villains is no more. Justice is finally preserved in the land at last."
s.i(0,new R.O("Become the Hero",!1,[new U.b(k),new U.b(p),new U.b(j),new U.T(l,"The "+h+" is defeated. The "+m+" holds on to the last remnants of injustice in the land.",o)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Greed","Poverty","Discrepancy","Famine","Starvation"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hu,$.k)
t.i(0,$.d_,$.o)
t.i(0,$.iT,$.o)
t.i(0,$.iQ,$.I)
t.i(0,$.dT,$.I)
r=$.m
q="The "+r+" looks upon the land and notices how some of the "
p=$.r
q=q+p+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
o="The "+r+" comes up with a plan to bring balance to the land. If there's not enough resources, they'll simply have to cut the "+p+" population in half. But through murder? No... They need something cleaner. Something more random."
m="The "+r+" wanders through a poverty striken "+p+" village and is told the legend of the "
l=$.z
m=m+l+". The "+l+" lives in a lair on the other side of the land, where they hoard all of the land's resources. Oh yeah, and they've got this golden "
k=$.ac
m=m+k+" that can half the number of "+p+"s on the land. The "+r+" finds this especially interesting. "
j="The "+r+" shows up at the "+l+"'s lair and asks them to hand over the golden "+k+". The "+l+" agrees... if the "+r+" can defeat them first!"
p="The "+l+" lies slain by the "+r+"'s "+$.by+". The "+r+" uses the golden "+k+" to cut the "+p+" population in half. Problem solved. "
t.i(0,new R.O("Bring the Balance",!1,[new U.b(q),new U.b(o),new U.b(m),new U.T(j,"The "+r+" is defeated and left without the golden "+k+" they seek.",p)],H.a([],i),R.dc(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
k="The "+p+" looks upon the land and notices how some of the "
r=$.r
k=k+r+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
j="The "+p+" comes up with a plan to bring balance to the land. They can force the "+r+"s who have an abundance of resources to share them with the "+r+"s who are resource deprived. But when the "+p+" tells them this, they get understandably upset. They worked so hard for their resources, why should they share them with others? The "+p+" is left stumped."
m="The "+p+" wanders through a poverty striken "+r+" village and is told the legend of the "
o=$.z
m=m+o+". The "+o+" lives in a lair on the other side of the land, where they hoard all of the land's resources. The "+p+" is confused as to why nobody mentioned this before. The solution to the resource problem is obvious now."
r="The "+p+" shows up at the "+o+"'s lair and asks them to be kind and share their resources with the "+r+"s. The "+o+" agrees... if the "+p+" can defeat them first!"
q="The "+o+" lies slain by the "+p+"'s "+$.by+". The "+p+" distributes all of the denizen's resources throughout the land, improving living conditions everywhere."
t.i(0,new R.O("Create the Balance",!1,[new U.b(k),new U.b(j),new U.b(m),new U.T(r,"The horrific inequality maintained by the "+o+" continues with the defeat of the "+p+".",q)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.at)}}
K.nr.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Creeping Vine",H.a([$.X,$.U,$.aU,$.av],s),null,!1,"Sentient Plant Tentacles")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.uA,$.U,$.aI],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aG,$.aw,$.U,$.av],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bX,$.U,$.aI],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.aS,$.U,$.aI,$.a0,$.a3],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bk,$.U,$.av],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cb,$.k)
q.i(0,$.bf,$.k)
q.i(0,$.ht,$.I)
q.i(0,$.aQ,$.o)
q.i(0,$.ms,$.o)
q.i(0,$.cP,$.I)
p=$.m
o="The "+p+" finds a village of compliant "
n=$.r
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.M+"ing in panic. Don't upset "
m=$.z
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.O("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.T(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cb,$.k)
s.i(0,$.cr,$.k)
s.i(0,$.cP,$.I)
s.i(0,$.aQ,$.o)
o=$.m
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.r
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.z
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.O("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.T(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o=$.m
j="The "+o+" finds themself in the middle of a large plain. They see a small pedestal with a seed packet and note.The note says the field has magical properties that grows any plant in only half an hour. If one of the seeds in the packet can be grown, the lair of "
i=$.z
j=j+i+" will be revealed.  Sounds easy enough. The "+o+" makes a small hole and drops a seed in. The plant immediately starts growing, but almost as immediately "+i+" minions zoom in from out of nowhere and stomp the plant dead."
l="The "+o+" attempts to stop the minions by force, but they are surprisingly agile and make it past the "+o+" to the planted seeds every time. The "+o+" reads the note again and decides to try growing some other plants to protect the seeds as they grow. The "+o+" eats a few fruits they had in their sylladex and grows a wall of trees from the leftover seeds. However the minions are still able to climb and slip through at rapid speed. A few trees isn\u2019t going to be enough to protect the seeds."
k="The "+o+" travels across their land gathering a bunch of seeds to strew them about the field and make a giant maze. Then they plant a few seeds deep inside the maze. The "+i+" minions are very quick, but they aren\u2019t that smart. Some of the seeds manage to grow before the minions can figure out how to get to them. On close inspection, leaves of the full-grown plants are actually maps of the "+o+"\u2019s land, with "+i+"\u2019s lair marked. "
m="The "+o+" tracks down "+i+"\u2019s lair using their leaf map. They toss the leaf aside and pull out their "+$.by+", ready to throw down!"
h="With "+i+" gone, the "+$.r+"s take up residence in the plain. They were always too afraid to when "+i+" minions were around. They thank the "+o+" for their work."
s.i(0,new R.O("Protect the Seeds",!1,[new U.b(j),new U.b(l),new U.b(k),new U.T(m,"With their defeat, the "+o+"\u2019s efforts to find "+i+"\u2019s lair have been made pointless.",h)],H.a([],p),R.oB(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.d_,$.k)
t.i(0,$.bf,$.I)
t.i(0,$.dU,$.k)
t.i(0,$.c2,$.o)
t.i(0,$.ec,$.o)
t.i(0,$.iO,$.o)
r="Drawn by wailing and "+$.M+"ing, the "
q=$.m
r=r+q+" enters a rotting "
o=$.r
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.z
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.O("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.T(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.at)}}
G.ns.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("FAQ",H.a([$.a9,$.U,$.Y,$.bY],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aF,$.U,$.aT,$.a9,$.bY],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.U,$.aT,$.bY,$.a0,$.uB],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.xk,$.U,$.ak],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.xt,$.U],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.aU,$.U,$.aT,$.bY],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.aS,$.U,$.av],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.mo,$.k)
q.i(0,$.hs,$.o)
q.i(0,$.dS,$.k)
q.i(0,$.ex,$.k)
p=$.m
o="The "+p+" is searching for the lair of "
n=$.z
o=o+n+" when some local "
m=$.r
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.i(0,new R.O("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.T(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.m
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.M+"ing "+$.r+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.z
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.O("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.T(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.m
l="The "+m+" finds the enormous casino that serves as "
k=$.z
l=l+k+"\u2019s lair. At the center of the casino is a lift to "+k+"\u2019s quarters that can only be activated with a key earned by winning enough "
j=$.ax
l=l+j+" chips at all the casino games. The "+m+" starts with Blackjack, and wins easily by counting the cards being dealt and only betting high when the odds are good. It helps that the "+k+" minions and "
p=$.r
l=l+p+"s aren\u2019t smart enough to pick up on what the "+m+" is doing."
n="The next casino game to beat is the roulette table. The "+m+" watches the "+p+"s play for a couple of games. They quickly realize there\u2019s a defect on the wheel that causes the ball to slightly favor the right side of the wheel. They bet accordingly and eventually earn enough "+j+" chips to move to the next casino game."
o="The "+m+" is stuck at the the final casino game, the slot machines. The only way to win enough "+j+" chips is by winning the Mega Jackpot, but there aren\u2019t any noticeable patterns or defects in the machines to take advantage of. The "+m+" puzzles over this for a while, before paying attention to who wins the Mega Jackpot. The only winners are "+k+" minions; the slots have been rigged so the house never has to pay out! The "+m+" cuts in front of a "+k+" minion at a slot machine and wins the Mega Jackpot that was meant for the minion. The minions aren\u2019t happy about this, but they can\u2019t complain without revealing to the "+p+" customers that the game is rigged."
j="The "+m+" turns in their "+j+" chips at the front desk for the lift key to "+k+"\u2019s quarters. As soon the lift brings them to "+k+"\u2019s quarters, they are immediately attacked! It seems "+k+" is not very pleased that the "+m+" found ways to cheat at all the casino games. "
p=k+" has been slain, and ownership of the casino is up for grabs. The "+m+" puts the casino in the hands of slightly more competent than average "+p+"s so they can continue exploring their land."
q.i(0,new R.O("Beat the Odds",!1,[new U.b(l),new U.b(n),new U.b(o),new U.T(j,k+" is pleased they got "+m+" out of the way, so "+k+"\u2019s casino can become profitable again.",p)],H.a([],i),R.dX(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
p=this.f
p.i(0,new X.G(s,q,null),$.at)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cb,$.o)
s.i(0,$.aQ,$.o)
s.i(0,$.dz,$.k)
s.i(0,$.mn,$.k)
s.i(0,$.ew,$.k)
s.i(0,$.hr,$.k)
o=$.m
n="The "+o+" walks into a "
m=$.r
n=n+m+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ac
n=n+l+", but "
k=$.z
n=n+k+" has hoarded all of the planets "
j=$.ax
l=n+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+o+" vows to take back some "+j+" Candles for the poor "+m+"s. "
n="After a long search, the "+o+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+o+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+o+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+o+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+o+" triumphantly returns to the village among the joyful "+$.M+"ing of the "+m+"s."
k="The "+o+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
m="Never again shall the "+m+"s be without "+j+" Candles!"
s.i(0,new R.O("The Candlestick Taker",!1,[new U.b(l),new U.b(n),new U.b(h),new U.T(k,"The "+j+" candles are once again at risk.",m)],H.a([],i),R.oC(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.m
j="The "+m+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.r
j=j+k+" explains that the "
h=$.z
s.i(0,new R.O("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+m+" vows to help.   "),new U.b("The "+m+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.M+"s as they bask in the light. The "+m+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+m+" must prepare themself for a tough fight.  "),new U.T("The "+m+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.at)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fj,$.o)
q.i(0,$.bf,$.o)
q.i(0,$.fl,$.k)
q.i(0,$.aQ,$.o)
q.i(0,$.cC,$.k)
o="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
o=o+n+" sets up a wiki and settles in to help the "
m=$.r
o=o+m+"s deal with it all."
m="Within barely any time at all, the "+m+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+n+" makes sure all of the information is from credible sources."
n="When the "+n+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.ef+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a5("Moderate the Wiki",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],i),R.el(),!1,!1,new Y.bW("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
l="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
l=l+n+" shrugs and sets up a wiki and lets the "
m=$.r
l=l+m+"s deal with it all."
m="Within barely any time at all, unmoderated "+m+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+n+" alone, and each claims they are a different SPECIES entirely. The "+n+" finds this to be hilarious."
n="Luckily it turns out all that disinformation running around about the "+n+" thwarts some would be assasins. It turns out the "+n+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
o="The "+$.ef+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a5("Create the Wiki",!1,[new U.b(l),new U.b(m),new U.b(n)],H.a([],i),R.dc(),!1,!1,new Y.bW("Disinformation Network",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.r
n=o+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
m=$.m
n=n+m+" possibly stop it?"
o="The "+m+" pours over maps and charts. What do the sick "+o+"s have in common with each other?  Finally, there is a flash of inspiration. "+o+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+m+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+m+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+m+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+m+" traces the contaminated river back to it's source. The "
j=$.z
q.i(0,new R.O("Shed the Light",!1,[new U.b(n),new U.b(o),new U.b(l),new U.T(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+m+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,q,null),$.at)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dS,$.k)
t.i(0,$.mo,$.k)
t.i(0,$.ex,$.o)
t.i(0,$.cq,$.o)
t.i(0,$.ul,$.o)
t.i(0,$.c2,$.I)
t.i(0,$.ed,$.I)
t.i(0,$.c4,$.o)
t.i(0,$.cB,$.I)
t.i(0,$.bf,$.o)
t.i(0,$.cG,$.k)
s=$.m
r="The "+s+" is approached by a Fast Talking "
o=$.r
r=r+o+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
n=$.ac
r=r+n+". The "+s+" agrees to perform the titular role."
m="The opening night performance of the Beautiful "+n+" is a huge success! The "+$.M+"ing of the fans is it's own reward!"
n="When it comes time for the next performance of the Beautiful "+n+", the "+s+" is turned away at the door. Apparently the "
l=$.z
o=n+l+" rampaged and terrorized "+o+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
n="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.O("Be the Star",!1,[new U.b(r),new U.b(m),new U.b(o),new U.T(l,"The acting career of the "+s+" is in shambles.",n)],H.a([],i),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n="After the "+$.z+", the "
s=$.m
n=n+s+" is disappointed to learn that barely any of the "
l=$.r
n=n+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
o="The "+$.ef+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a5("Be the Biggest Star in Paradox Space",!1,[new U.b(n),new U.b(l),new U.b(s)],H.a([],i),R.el(),!1,!1,new Y.bW("What's my name?",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p.i(0,new X.G(q,t,null),$.at)}}
Z.nF.prototype={
D:function(){var t,s,r,q
t=this.M
s=[G.a2]
r=A.i("Dream Bubbles Book",H.a([$.L,$.al,$.aD,$.xd],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.N(t,0)]))
t=Q.K(null,null,A.a6)
r=A.i("Deck of Uno Cards",H.a([$.n_,$.uO,$.al],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.Q,$.V,$.al],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.n7,$.V,$.al],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a0,$.L,$.V,$.bw,$.aD],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dn,$.I)
q.i(0,$.eA,$.I)
q.i(0,$.c2,$.I)
q.i(0,$.cO,$.o)
p="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.m
p=p+o+" comands that the "
n=$.r
m=[U.b]
q.i(0,new R.bG("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.M+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
o="As soon as the "+$.z+" is defeated, the "
n=$.r
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.m
q.i(0,new R.a5("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.dG
n="The "+p+" reaches the entrance to a massive dungeon. They heard rumors that important information could be found at the bottom. After some very confusing puzzles and a couple of strifes, they find themself at the dungeon\u2019s center. A lone, elderly "+$.r+" is there to greet the "+p+". He tells the "+p+" that "
o=$.z
n=n+o+" needs to be defeated by a powerful hero, and imparts some clues on how to defeat them. Wait a second, isn\u2019t that the "
l=$.m
n=n+l+"\u2019s Denizen? The "+p+" contacts them and passes on the information they found.  "
k="The "+p+" is exploring another dungeon. Deep inside, they enter a large open room, clearly meant for a boss fight. As expected, "+o+" emerges from a large hole in the ceiling and lets loose a roar. The "+p+" readies themself for a fight, but "+o+" takes one glance and immediately goes back into its hole. It looks like "+o+" is only interested in fighting the "+l+". The "+p+" gives them a call and sits around waiting for them to come. After a few hours, the "+l+" has arrived and the strife can finally start."
p="The "+l+" was victorious in his fight against "+o+". The "+p+" also helped."
q.i(0,new R.O("Be the Protagonist",!1,[new U.b(n),new U.T(k,"The "+l+" fought hard, but was ultimately defeated by "+o+".",p)],H.a([],m),R.GO(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
q.i(0,new R.a5("Skip the Boring Details",!1,[new U.b("The "+p+" finds a giant pillar, inscribed with a long and arduous quest that the "+p+" is destined to complete. However the "+p+" isn\u2019t interested on spending so much time on one quest, so they uses their powers and fast forward right to the end. A parade is held in their honor for completing the grand quest that no one got to see happen. A bit unsatisfying, really.")],H.a([],m),R.oD(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.x
p.i(0,new X.G(s,q,null),$.bO)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.wP,$.k)
t.i(0,$.cZ,$.k)
t.i(0,$.bf,$.k)
t.i(0,$.aQ,$.o)
s="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.m
s=s+r+" comands that the "
o=$.r
t.i(0,new R.bG("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.M+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
r="As soon as the "+$.z+" is defeated, the "
o=$.r
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.m
t.i(0,new R.a5("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",this.M,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,t,null),$.bO)}}
S.nH.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Alternate Costume",H.a([$.Q,$.V,$.a3,$.a0,$.ao],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.Q,$.V,$.a3],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.X,$.V,$.ak,$.a3,$.dV],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jH,$.X,$.V,$.av,$.a3,$.dV],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.eu,$.k)
t.i(0,$.fk,$.o)
t.i(0,$.cg,$.k)
t.i(0,$.ey,$.o)
t.i(0,$.d_,$.I)
r="The "+$.z+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.m
p=[U.b]
t.i(0,new R.bG("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
q=$.m
t.i(0,new R.a5("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.C(),!1,!1,new Y.dl("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q=$.m
r="The "+q+" is feeling quite pleased with their victory over the "+$.z+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.ax
t.i(0,new R.a5("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.C(),!1,!1,new Y.bW(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="Now that the "+$.z+" has been defeated, the "
o=$.r
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.m
q=q+r+"'s help in planning the brand new city of "
n=$.ax
t.i(0,new R.a5("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.M+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.C(),!1,!1,new Y.bW(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
U.nI.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Maiden's Breath",H.a([$.aU,$.V,$.az],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.X,$.V,$.dV,$.bx],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.az,$.aG,$.E,$.V,$.a0,$.ft,$.x4],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.L,$.V,$.aa,$.aD],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.dA,$.k)
t.i(0,$.cb,$.k)
t.i(0,$.aQ,$.o)
t.i(0,$.bf,$.o)
t.i(0,$.dz,$.o)
t.i(0,$.cB,$.o)
r="The "+$.z+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.m
r=r+q+" asks local  "
p=$.r
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bG("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
q=$.m
o="The "+q+" has adopted a local "
p=$.r
t.i(0,new R.a5("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.M+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.z+". ")],H.a([],n),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
V.nR.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Puzzle Box",H.a([$.X,$.U,$.a3],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a9,$.U,$.E],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.E,$.U],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.E,$.U,$.a9,$.Y],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aG,$.jI,$.aw,$.al,$.U,$.a0,$.a9],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cZ,$.o)
q.i(0,$.hs,$.I)
q.i(0,$.cC,$.I)
p=$.m
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.r
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.z
k=[U.b]
q.i(0,new R.O("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.T(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.dX(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.m
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.r+" explains that at the end of the Labrinth is the "
l=$.z
q.i(0,new R.O("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.T("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.fi,$.I)
s.i(0,$.c3,$.o)
s.i(0,$.cC,$.I)
s.i(0,$.cZ,$.I)
p=$.z
o="The "+p+" has commited a staggering amount of crimes against the local "+$.r+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.m
s.i(0,new R.O("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.T("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hu,$.k)
t.i(0,$.bf,$.o)
t.i(0,$.fl,$.k)
t.i(0,$.aQ,$.o)
t.i(0,$.cC,$.k)
r=$.m
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.z
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ac+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.O("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.T(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l=$.m
r="The "+l+" has finally found the lair of "
m=$.z
r=r+m+". Appropriately enough for a Mind Denizen, their dungeon is a giant replica of a brain. Doors in the dungeon simulate neurons by opening and closing at seemingly random intervals to mimic brain activity."
o="The "+l+" has spent far too many hours trying to navigate the dungeon. They raise their fist in frustration, and at the same time, a door opens. They drop their fist and attempt to enter, but the door immediately closes again. They raise their fist once more, and the door opens again, and closes again when the "+l+" drops their fist. They raise and lower their fist a bunch of times, and the door opens and closes in perfect synch. Is...is the dungeon based off of the "+l+"\u2019s brain!?  "
p="The "+l+" is starting to get a hang out of controlling their brain dungeon. Most of the doors can be opened by experimentally moving part of their body or using one of their senses. (The door that opened by licking one of the walls wasn\u2019t very fun) There is only one door the "+l+" is still unable to open, which is likely "+m+"\u2019s."
q="Through some convoluted thought processes focused on thinking about "+m+", the "+l+" manages to open the final door to "+m+". They are relieved it didn\u2019t take some cliche like having to unlock their subconscious or some junk like that. They begin the final fight inside their own mind."
j="With "+m+" defeated, the "+l+" decides to rig explosives around the dungeon and bring the whole place down. The thought that others could basically see the inside of the "+l+"\u2019s mind was a little too creepy."
t.i(0,new R.O("Explore the Brain",!1,[new U.b(r),new U.b(o),new U.b(p),new U.T(q,"Various doors open and close across the dungeon to simulate the "+l+"\u2019s despair in the face of "+m+".",j)],H.a([],k),R.fD(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.I)
n.i(0,new X.G(s,t,null),$.at)}}
E.nS.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Feather Pen",H.a([$.E,$.V,$.al,$.bx],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.xs,$.V,$.jI,$.ak,$.a0],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.L,$.V,$.al,$.aD],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.dA,$.k)
t.i(0,$.cb,$.k)
t.i(0,$.aQ,$.o)
t.i(0,$.bf,$.o)
t.i(0,$.dz,$.o)
t.i(0,$.cB,$.o)
r="The "+$.z+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bG("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
q="You'd think after the dramatic defeat of the "+$.z+" the "
o=$.r
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.m
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ac
t.i(0,new R.a5("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
F.nT.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Piano",H.a([$.ak,$.X,$.aa,$.al],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.E,$.aa],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aX,$.a9],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.X,$.aa],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.L,$.aa],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aF,$.aa,$.a9,$.aX,$.aq],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aF,$.aa,$.a9,$.aq],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.X,$.aa],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cq,$.an)
q.i(0,$.ul,$.k)
q.i(0,$.ex,$.k)
q.i(0,$.dz,$.o)
q.i(0,$.aQ,$.o)
q.i(0,$.ml,$.o)
p=$.m
o="The "+p+" meets a wise old "+$.r+" who tells that the "+$.z+" can only be awoken by the Legendary Hero playing the "
n=$.ax
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ac
k=[U.b]
q.i(0,new R.Z("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.m
n="The "+p+" finds an empty, trashed "
l=$.ax
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ac+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.M+"ing "+$.r+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.Gr
q.i(0,new R.Z("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.C(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.uo,$.an)
s.i(0,$.dp,$.o)
s.i(0,$.cO,$.o)
s.i(0,$.dz,$.k)
s.i(0,$.ml,$.an)
o=$.m
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.ax
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.z
s.i(0,new R.Z("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ac+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ht,$.an)
t.i(0,$.c4,$.o)
t.i(0,$.dU,$.o)
r=$.m
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.r
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.M
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.ax+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.Z("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aC)}}
Y.o7.prototype={
P:function(a,b){var t=0,s=P.bn(),r,q=this,p,o
var $async$P=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:t=3
return P.c7(A.hN("scripts/Rendering/threed/three.min.js",!1),$async$P)
case 3:t=4
return P.c7(Q.oW(),$async$P)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.aP(p)
o.f8(p,P.xK(["",$.$get$wD()],P.y,S.hR))
o.f7(p,!1)
q.b=p}J.wn(p,b)
r=J.wn(q.b,b)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$P,s)},
$aseR:function(){return[S.fz]},
$ascc:function(){return[S.fz,P.y]}}
V.of.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Shorts",H.a([$.Q,$.V,$.fs,$.a0],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aF,$.V,$.aq],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.ar,$.V,$.a3],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.mp,$.k)
t.i(0,$.cP,$.o)
t.i(0,$.hw,$.o)
t.i(0,$.mr,$.o)
t.i(0,$.dA,$.o)
t.i(0,$.bf,$.o)
t.i(0,$.ec,$.o)
t.i(0,$.ew,$.o)
t.i(0,$.up,$.o)
t.i(0,$.iO,$.o)
t.i(0,$.mn,$.o)
r="The "+$.z+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bG("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
q=$.m
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.r+" named Professor "
p=$.M
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ac
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.z
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.O("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.T(k,"The "+q+" whited out...",m)],H.a([],n),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m="Now that the "+$.z+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.m
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.r
t.i(0,new R.a5("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.ax+" buffs. With a deafening "+$.M+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.C(),!1,!1,new Y.iy("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
G.ou.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Superhero Action Figure",H.a([$.aF,$.aq,$.aR],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aF,$.aq],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aF,$.bX],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aF,$.aW,$.bs,$.ci],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aF,$.aq],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.L,$.aq],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.aU,$.aq,$.Q,$.av],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.aU,$.aL,$.aq,$.Q],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aR,$.E,$.aq,$.eC,$.au,$.bV],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.L,$.aq],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.L,$.aq],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.o)
q.i(0,$.cG,$.o)
q.i(0,$.c4,$.k)
q.i(0,$.cP,$.an)
q.i(0,$.dB,$.an)
p=$.m
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.r
o=o+n+" manages to catch a video of it, and it goes viral on "+$.ax+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.M+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.Gs
l=[U.b]
q.i(0,new R.Z("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.C(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ev,$.o)
s.i(0,$.dp,$.o)
s.i(0,$.cG,$.o)
s.i(0,$.c4,$.o)
s.i(0,$.dq,$.k)
o=$.m
n="The "+o+" runs towards an explosion in a local "
m=$.r
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.ax
s.i(0,new R.Z("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cG,$.o)
t.i(0,$.dS,$.k)
t.i(0,$.cr,$.k)
t.i(0,$.dq,$.o)
r=$.m
q="The "+r+" gets a job at the "+$.ax+" Cinema. A new movie, The Lonely "
o=$.ac
q=q+o+" is coming out soon, and "
n=$.r
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.M+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.Z("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aC)}}
N.oz.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Feather'd Cap",H.a([$.Q,$.V,$.fs],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a0,$.uG,$.V,$.fs],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bu,$.V],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.cG,$.o)
t.i(0,$.cZ,$.o)
t.i(0,$.dU,$.I)
r="With the closing of the curtain, the "+$.z+" has released the frogs, and yet they are nowhere to be found. The "
q=$.m
p=[U.b]
t.i(0,new R.bG("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
q=$.z
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.m
r=r+o+" to get it back to normal. They organize a team of "
n=$.r
t.i(0,new R.a5("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ac+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
U.b.prototype={}
U.T.prototype={}
R.oA.prototype={
w:function(a){return H.x(new H.e2(H.kR(this),null))+": "+this.c},
gG:function(a){return this.c}}
R.Z.prototype={}
R.O.prototype={}
R.a5.prototype={}
R.bG.prototype={}
E.oE.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Curtain",H.a([$.Q,$.U,$.aR],s),null,!1,"Show Ender")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.E,$.eC,$.aN,$.U,$.au,$.b_,$.aR,$.bt,$.aE],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Omegaphone",H.a([$.E,$.aX,$.a9,$.U,$.aR],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trike Horn",H.a([$.aG,$.E,$.aX,$.bw,$.ce,$.U,$.aR],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.ar,$.bw,$.al,$.U,$.a0,$.aR],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.X,$.U,$.b_,$.as,$.bu,$.aR],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.mk,$.k)
q.i(0,$.dn,$.k)
q.i(0,$.dp,$.k)
q.i(0,$.d_,$.o)
q.i(0,$.c2,$.o)
q.i(0,$.cg,$.o)
q.i(0,$.c3,$.I)
q.i(0,$.dB,$.o)
q.i(0,$.ev,$.k)
q.i(0,$.iS,$.k)
q.i(0,$.fk,$.k)
q.i(0,$.mq,$.k)
q.i(0,$.ht,$.o)
q.i(0,$.eA,$.k)
p=$.m
o="The "+p+" is chilling in a "
n=$.r
o=o+n+" village when a bunch of sentient "
m=$.ac
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.O("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.T(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fD(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.r
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.m
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.O("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.T(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.G(s,q,null),$.at)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dz,$.k)
s.i(0,$.c2,$.o)
s.i(0,$.c3,$.k)
s.i(0,$.cq,$.k)
s.i(0,$.cB,$.k)
s.i(0,$.cG,$.o)
s.i(0,$.iR,$.I)
s.i(0,$.dn,$.o)
s.i(0,$.cP,$.k)
s.i(0,$.c4,$.k)
s.i(0,$.dB,$.I)
p=$.M
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.m
o=o+m+" to do a stupid "
l=$.ax
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.O("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.T(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(q,s,null),$.at)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.mk,$.k)
t.i(0,$.dB,$.k)
t.i(0,$.c3,$.k)
t.i(0,$.cP,$.o)
t.i(0,$.cB,$.k)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.O("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.T(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.m
t.i(0,new R.a5("Stop the Narration",!1,[new U.b("The "+m+" is walking down a long road, wondering when they\u2019ll find the next town. They suddenly stop and look behind them, asking who said that. They look everywhere but can\u2019t find where the voice is coming from. They fruitlessly demand the narration to stop."),new U.b("The "+m+" is having a hard time doing any of their quests while hearing every action narrated. No one else can hear the voice and some are starting to think the "+m+" is losing their mind. The "+m+" vows to find who is doing the narrating and beat the stuffing out if them. However, the "+m+" is very unlikely to end the narration. The "+m+" raises their fist at a random location in the sky and shouts we\u2019ll see about that."),new U.b("The "+m+" finds themself in front of an ancient looking broadcasting tower. They wonder aloud whether the tower is broadcasting the narration. They demand the narration to be useful for a change and just tell them, but they get no answer. In a huff, they search the tower. A couple of hours later, the "+m+" find an ominous looking machine displaying pictures of the session, and text of this narration. Realizing the machine is broadcasting the narration, and getting confirmation from the narration that it is so, they immediately destroy it. They no longer hear the narration and are pleased to go back to adventuring. The "+m+" doesn\u2019t realize they only stopped the narration being broadcasted to their ears and not the narration itself.")],H.a([],g),R.dX(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(s,t,null),$.at)}}
Y.e_.prototype={}
Y.a8.prototype={}
Y.dl.prototype={}
Y.bW.prototype={
gG:function(a){return this.c}}
Y.R.prototype={}
Y.iy.prototype={}
Y.bF.prototype={}
Y.d4.prototype={}
Y.ln.prototype={}
Y.bE.prototype={}
Y.hZ.prototype={}
Y.iY.prototype={}
Y.k5.prototype={}
N.oN.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Domino Mask",H.a([$.Q,$.V,$.fs],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.uz,$.V,$.fs,$.x5],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a0,$.aF,$.a9,$.V,$.Y,$.ao],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.c3,$.k)
t.i(0,$.cg,$.o)
t.i(0,$.dq,$.o)
r="The "+$.z+" cannot release the frogs since the corrupt Noble "
q=$.r
r=r+q+"s have hoarded them. The "
p=$.m
o=[U.b]
t.i(0,new R.bG("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
p=$.m
q="The "+p+" learns of the extreme injustices of the "
r=$.r
q=q+r+"s who rose to power during the tyranny of "
n=$.z
t.i(0,new R.a5("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Q.oO.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Red Rose",H.a([$.aB,$.az],s),null,!1,"Seductive Plant")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friend Fic",H.a([$.aB,$.L],s),"Don't ship irl ppl, asshole.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aB,$.ar],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aB,$.as],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aB,$.bu,$.E,$.aL],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aD,$.L,$.aB],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cr,$.k)
q.i(0,$.hw,$.o)
q.i(0,$.fg,$.o)
q.i(0,$.hv,$.k)
q.i(0,$.cq,$.o)
q.i(0,$.iP,$.I)
p=$.m
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.r
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ac+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.Z("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cq,$.o)
s.i(0,$.dS,$.k)
s.i(0,$.hv,$.k)
s.i(0,$.cr,$.o)
s.i(0,$.ex,$.I)
s.i(0,$.iP,$.I)
o=$.r
n="A Romantic "+o+" approaches the "
m=$.m
s.i(0,new R.Z("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iP,$.k)
t.i(0,$.cr,$.k)
t.i(0,$.fg,$.o)
t.i(0,$.mr,$.k)
t.i(0,$.hv,$.k)
t.i(0,$.cq,$.o)
t.i(0,$.ex,$.I)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.r
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.M+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.z+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.Gp
t.i(0,new R.Z("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.C(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.m
r="The "+n+"  and the "
o=$.dG
t.i(0,new R.Z("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.dY(),!1,!1,new Y.iY(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.an)
o=$.m
n="The "+o+"  and the "
r=$.dG
t.i(0,new R.Z("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.dY(),!1,!1,new Y.hZ(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.an)
r=$.m
o="The "+r+"  and the "
n=$.dG
t.i(0,new R.Z("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.dY(),!1,!1,new Y.k5(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.an)
p.i(0,new X.G(s,t,null),$.aC)}}
T.i0.prototype={
D:function(){var t,s
t=Q.K(null,null,A.a6)
s=A.i("Perfectly Generic Object",H.a([],[G.a2]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.k)
q.i(0,$.bf,$.I)
q.i(0,$.dU,$.k)
q.i(0,$.c2,$.o)
q.i(0,$.ec,$.I)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.a5("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.x
n.i(0,new X.G(s,q,null),$.bO)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ez,$.k)
s.i(0,$.ew,$.I)
s.i(0,$.ey,$.o)
s.i(0,$.cO,$.k)
s.i(0,$.cg,$.I)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.a5("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.m
l="The "+p+" learns that all of the local "
o=$.r
s.i(0,new R.a5("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.dG+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.M+"ing in amazement. The factory is saved! ")],H.a([],m),R.dY(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.an)
n.i(0,new X.G(q,s,null),$.bO)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aQ,$.k)
t.i(0,$.bf,$.I)
t.i(0,$.cb,$.o)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.M
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.vx(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.I)
l=$.m
p="The "+l+" learns that all of the local "
r=$.r
t.i(0,new R.a5("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.bO)},
w:function(a){return this.r},
ac:function(a,b,c,d){var t=this.r
this.y=t
this.z=new X.iN("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.iv]),H.a([],[M.hq]))
this.D()
this.E()
t=this.Q
if($.$get$oR().Y(0,t))H.aM("Duplicate class id for "+this.w(0)+": "+t+" is already registered for "+J.cA($.$get$oR().n(0,t))+".")
$.$get$oR().i(0,t,this)},
gG:function(a){return this.r}}
E.oS.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Sage's Robe",H.a([$.Q,$.V,$.b2,$.Y,$.a3,$.a0],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.L,$.V,$.aD,$.Y],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.Q,$.V,$.hD,$.Y],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.fj,$.o)
t.i(0,$.bf,$.o)
t.i(0,$.fl,$.k)
t.i(0,$.aQ,$.I)
t.i(0,$.cC,$.k)
r="The "+$.z+" has blocked access to the books for the duration. The "
q=$.m
p=[U.b]
t.i(0,new R.bG("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
q="Now that the "+$.z+" is defeated, it is time to begin recovery efforts. The "
r=$.r
q=q+r+"s ask the "
o=$.m
t.i(0,new R.a5("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.M+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
K.oT.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Uno Reverse Card",H.a([$.n_,$.U,$.aR,$.jK],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.hD,$.b2,$.U,$.jK],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.mk,$.k)
q.i(0,$.dn,$.k)
q.i(0,$.dp,$.k)
q.i(0,$.d_,$.o)
q.i(0,$.c2,$.o)
q.i(0,$.cg,$.o)
q.i(0,$.c3,$.I)
q.i(0,$.dB,$.o)
q.i(0,$.ev,$.k)
q.i(0,$.iS,$.k)
q.i(0,$.fk,$.k)
q.i(0,$.mq,$.k)
q.i(0,$.ht,$.o)
q.i(0,$.eA,$.k)
p=$.m
o="The "+p+" is chilling in a "
n=$.r
o=o+n+" village when a bunch of sentient "
m=$.ac
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.O("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.T(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fD(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.r
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.m
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.O("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.T(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.G(s,q,null),$.at)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dz,$.k)
s.i(0,$.c2,$.o)
s.i(0,$.c3,$.k)
s.i(0,$.cq,$.k)
s.i(0,$.cB,$.k)
s.i(0,$.cG,$.o)
s.i(0,$.iR,$.I)
s.i(0,$.dn,$.o)
s.i(0,$.cP,$.k)
s.i(0,$.c4,$.k)
s.i(0,$.dB,$.I)
p=$.M
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.m
o=o+m+" to do a stupid "
l=$.ax
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.O("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.T(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(q,s,null),$.at)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.mk,$.k)
t.i(0,$.dB,$.k)
t.i(0,$.c3,$.k)
t.i(0,$.cP,$.o)
t.i(0,$.cB,$.k)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.O("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.T(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(s,t,null),$.at)}}
Y.oU.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Walking Stick",H.a([$.X,$.V,$.dV],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.Q,$.V,$.uE,$.Y,$.a0],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.L,$.V,$.Y],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Magical Compass",H.a([$.E,$.V,$.Y,$.a3],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p
t=[P.y]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.dA,$.k)
t.i(0,$.cb,$.k)
t.i(0,$.bf,$.k)
t.i(0,$.c4,$.I)
t.i(0,$.aQ,$.I)
r="Now that the "+$.z+" has been defeated, the planet has really opened up. The "
q=$.m
p=[U.b]
t.i(0,new R.a5("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.r+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.m
t.i(0,new R.bG("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.r+" "+$.M+"s in time to stop them.   ")],H.a([],p),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
this.x.i(0,new X.G(s,t,null),$.bO)}}
L.oV.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Scroll",H.a([$.L,$.V,$.Y],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.aS,$.V,$.ao,$.Y],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.L,$.V,$.aD,$.Y,$.ao,$.a0],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.ml,$.k)
t.i(0,$.bf,$.k)
t.i(0,$.cC,$.k)
t.i(0,$.aQ,$.o)
t.i(0,$.cZ,$.o)
r="The "+$.z+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.m
p=[U.b]
t.i(0,new R.bG("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
q="Now that the "+$.z+" has been taken care of, the "
r=$.m
q=q+r+" discovers a large library of "
o=$.r
t.i(0,new R.a5("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
S.oX.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Cueball",H.a([$.xc,$.V],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.fr,$.xb,$.V,$.aT],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.aS,$.V,$.E],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.x7,$.V,$.b2],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.wR,$.k)
t.i(0,$.iQ,$.k)
t.i(0,$.wO,$.k)
t.i(0,$.cP,$.o)
r="Now that the "+$.z+" has been defeated, the land is really starting to open up. The "
q=$.m
r=r+q+" finds a tunnel filled with Blind "
p=$.r
o=[U.b]
t.i(0,new R.a5("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.C(),!1,!1,new Y.dl("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.m
t.i(0,new R.bG("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
p=$.m
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.r
t.i(0,new R.a5("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.C(),!1,!1,new Y.dl("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
r="A group of underlings are still making trouble, even after the defeat of the "+$.z+". The "
p=$.m
r=r+p+" begins planting rumors of a huge "
q=$.ac
t.i(0,new R.a5("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.C(),!1,!1,new Y.dl("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
T.c0.prototype={}
Y.p5.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Meddler's Guide",H.a([$.aD,$.V,$.L,$.bw,$.a0,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aS,$.V,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.V
r=A.i("Cloud in a Bottle",H.a([r,r,$.bj],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a3,$.V,$.aT,$.az,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.bf,$.o)
t.i(0,$.dA,$.k)
t.i(0,$.cP,$.o)
t.i(0,$.aQ,$.o)
t.i(0,$.cb,$.k)
r="The defeat of the "+$.z+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.m
p=[U.b]
t.i(0,new R.bG("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
q="Now that the "+$.z+" has been taken care of, the "
r=$.m
q=q+r+" finds a long line of "
o=$.r
t.i(0,new R.a5("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
N.p6.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Fiduspawn Plush",H.a([$.ci,$.Q,$.b2],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.ci,$.Q,$.b2],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("D20",H.a([$.uD,$.aF],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pet Pigeon",H.a([$.bx,$.av,$.bk,$.b1,$.bt,$.uL],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.Q,$.b2,$.ci],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.aD,$.L],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.aD,$.L],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.b2,$.Q],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aD,$.L,$.Y],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dT,$.I)
q.i(0,$.aQ,$.o)
q.i(0,$.cZ,$.k)
q.i(0,$.cC,$.o)
p=$.m
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.r
m=[U.b]
q.i(0,new R.Z("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.ax+" or "+$.ac+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.M+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dT,$.I)
s.i(0,$.aQ,$.k)
s.i(0,$.cZ,$.k)
s.i(0,$.ui,$.k)
s.i(0,$.cq,$.k)
s.i(0,$.uo,$.k)
s.i(0,$.cC,$.o)
o=$.m
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.M
n=n+l+"ing "
k=$.r
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.ax
s.i(0,new R.Z("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cO,$.I)
t.i(0,$.dS,$.k)
t.i(0,$.cb,$.k)
t.i(0,$.dq,$.k)
t.i(0,$.fi,$.k)
r=$.m
q="The "+r+" wanders into an entire crowd of "
o=$.r
t.i(0,new R.Z("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.M+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aC)}}
M.bA.prototype={}
N.p7.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Frog Statue",H.a([$.aG,$.aw,$.U],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.U],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c5,$.Y,$.a9,$.U],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.E,$.aS,$.Y,$.U],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.L,$.U,$.uH,$.a0],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m
t=$.m
s=[P.y]
r=H.a(["Wherever the "+t+" goes, they find a "+$.r+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.M+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.z+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.m
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.r+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.r+" tells the "
p=$.m
t=t+p+" that they must negotiate with "
o=$.z
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.m
p="The "+o+" meets with "
t=$.z
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.cP,$.I)
t.i(0,$.uk,$.k)
s=[U.b]
t.i(0,new R.O("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.an)
t.i(0,new R.O("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.an)
t.i(0,new R.O("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.an)
t.i(0,new R.O("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.an)
t.i(0,new R.O("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.an)
t.i(0,new R.O("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.an)
p=$.m
t.i(0,new R.bG("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.C(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.G(o,t,null),$.HD)}}
U.ai.prototype={
gG:function(a){return this.e+"kind"},
$isbI:1,
$asbI:function(){return[A.a6]}}
K.cH.prototype={
gG:function(a){return this.a}}
M.pb.prototype={
aY:function(a){return"application/octet-stream"},
P:function(a6,a7){var t=0,s=P.bn(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$P=P.br(function(a8,a9){if(a8===1)return P.bo(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dm(null,0)
q.a=J.e6(a7,0)
for(p=0,o="";p<6;++p)o+=H.fC(q.ab(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.j("Invalid header: "+n)
m=q.ab(8)
l=9+m*6
o=8*m
k=q.ab(o)
j=q.ab(o)
i=q.ab(o)
h=q.ab(o)
g=q.ab(o)
f=q.ab(o)
o=P.D
e=P.y
d=P.cD(o,e)
c=new O.d2(k,j,null,null,null,null,null,null,d,P.cD(e,o))
c.x=new Uint8Array(H.cE(k*j))
b=q.ab(8)
for(o=[o],p=0;p<b;++p){a=q.ab(8)
a0=q.ab(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.ab(8)
if(a2>=e){r=H.u(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.pD(a1,0,null))}a4=q.ab(8)
a5=$.$get$y2().n(0,a4)
if(a5==null)throw H.j("Sprite decoding error: Encoding id "+a4+" not supported.")
c.iM(i,h,g,a5.c.$4(a7,l,g*f,c))
c.iw()
r=c
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$P,s)},
$asdw:function(){return[O.d2]},
$ascc:function(){return[O.d2,P.bi]}}
R.pH.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Meddler's Guide",H.a([$.aD,$.V,$.L,$.bw,$.a0,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aS,$.V,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.V
r=A.i("Cloud in a Bottle",H.a([r,r,$.bj],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a3,$.V,$.aT,$.az,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.cZ,$.k)
t.i(0,$.aQ,$.k)
t.i(0,$.dA,$.o)
t.i(0,$.fl,$.o)
t.i(0,$.uh,$.o)
t.i(0,$.ec,$.o)
t.i(0,$.iO,$.o)
t.i(0,$.un,$.o)
r=$.m
q="The "+r+" decides to take a break after defeating "+$.z+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.r
o=[U.b]
t.i(0,new R.a5("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.M+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.oD(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.k)
r=$.r
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.m
t.i(0,new R.a5("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.r
q="The "+r+"s are so stressed after all that shit with the "+$.z+". They are yelling and "+$.M+" at each other over the slightest of insults. The "
p=$.m
t.i(0,new R.a5("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.z+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.m
p=p+r+" purifies the pools "
q=$.r
t.i(0,new R.bG("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
r="The defeat of the "+$.z+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.r
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.m
t.i(0,new R.a5("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.ax+". Huh. Okay then.")],H.a([],o),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
D.pM.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Robot",H.a([$.a9,$.E,$.av,$.Y],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a9,$.E],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a9,$.L],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH For Dummies ",H.a([$.a9,$.L,$.aE,$.aD],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aF,$.a9,$.E],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.xh,$.E],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.uV,$.E,$.ak],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a9,$.E],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hu,$.o)
q.i(0,$.eu,$.k)
q.i(0,$.ez,$.k)
q.i(0,$.cg,$.I)
p=$.m
o="The "+p+" learns from their "
n=$.r
o=o+n+"s about the great "
m=$.ax
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.z+" destroyed it. "
o="The "+p+" searches for the "
l=$.ac
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.Gx
p=[U.b]
q.i(0,new R.Z("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.C(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=$.m
m="The "+l+" is approached by a "
o=$.r
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.M
q.i(0,new R.Z("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.z+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ac+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.dX(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ez,$.k)
s.i(0,$.ew,$.I)
s.i(0,$.ey,$.o)
s.i(0,$.cO,$.k)
s.i(0,$.cg,$.I)
o=$.m
n="The "+o+" learns that all of the local "
l=$.r
s.i(0,new R.Z("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.m
l="The "+o+" finds two groups of "
n=$.r
l=l+n+"s screaming and "
k=$.M
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ac
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.Z("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.el(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.at)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hu,$.I)
t.i(0,$.eu,$.k)
t.i(0,$.ez,$.k)
t.i(0,$.cg,$.I)
r=$.m
q="The "+r+" learns from a mysterious "+$.r+" in a black trenchcoat about a great "
o=$.ax
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.z
t.i(0,new R.Z("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aC)}}
V.pN.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Lighter",H.a([$.E,$.as],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.L,$.bs],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.L,$.bs,$.c5],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.E,$.aE,$.c5,$.bl,$.bt],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.L,$.xn],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.E,$.bg,$.bl],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.E,$.bg,$.bl],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.Q,$.fs,$.bl],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bU,$.bg],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.E,$.uM,$.aL,$.bl],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.E,$.uS,$.aL,$.bl],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.E,$.uI,$.aL,$.bl],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.n1,$.au,$.E,$.bu,$.bl],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.L,$.bw,$.aD],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.ce,$.E,$.aX,$.bw],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.X,$.as],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cG,$.o)
q.i(0,$.dS,$.k)
q.i(0,$.ed,$.k)
q.i(0,$.fk,$.k)
q.i(0,$.mp,$.k)
q.i(0,$.dq,$.o)
p=$.m
o=[U.b]
q.i(0,new R.Z("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.C(),!1,!1,new Y.dl("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cG,$.o)
s.i(0,$.dS,$.k)
s.i(0,$.cr,$.k)
s.i(0,$.dq,$.o)
n=$.m
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.r
s.i(0,new R.Z("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ac+" underling. Tremble at the fearsome "+$.ax+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.C(),!1,!1,new Y.dl("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.k)
q.i(0,$.bf,$.I)
q.i(0,$.dU,$.k)
q.i(0,$.c2,$.o)
q.i(0,$.ec,$.I)
q.i(0,$.dn,$.I)
n=$.m
m="The "+n+" learns that all of the local "
l=$.r
q.i(0,new R.Z("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.k)
t.i(0,$.dn,$.I)
t.i(0,$.ev,$.k)
t.i(0,$.iS,$.k)
t.i(0,$.cg,$.o)
t.i(0,$.eA,$.o)
s=$.m
r="The "+s+" finds a crowd of "
n=$.M
r=r+n+"ing "
m=$.r
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.ax+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.Z("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,t,null),$.aC)}}
X.G.prototype={
w:function(a){return"Theme: "+H.x(this.a)}}
U.pU.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Lockpick",H.a([$.E,$.V,$.ao,$.aN,$.a0],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.Q,$.V,$.ao],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Thief's Dagger",H.a([$.E,$.V,$.aN,$.au,$.uC],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.c3,$.k)
t.i(0,$.dp,$.o)
t.i(0,$.c4,$.o)
t.i(0,$.cO,$.o)
r="The "+$.z+" cannot release the frogs since the corrupt "
q=$.r
r=r+q+" Cops have confiscated them. The "
p=$.m
o=[U.b]
t.i(0,new R.bG("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
p=$.m
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.z+"'s layer and slated to be returned to the "
r=$.r
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.M+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.fy
t.i(0,new R.a5("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.r
p="A weeping "+r+" approaches the "
n=$.m
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.z
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.ax+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.M+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.fy
t.i(0,new R.a5("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.z
n="Now that the "+r+" has been defeated, the "
p=$.r
n=n+p+"s have recovered their precious "
q=$.ac
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.m
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.M
l=n+l+"worth, the disaffected Heir to the "+$.ax+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.fy
t.i(0,new R.a5("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
N.pV.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Grandfather Clock",H.a([$.X,$.al,$.bg,$.U],s),null,!1,"Ticking Tower of Time")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.xr,$.U,$.aa],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aG,$.bk,$.U,$.b1,$.b_,$.aE],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.E,$.U,$.aa,$.al],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sick Turn Tables",H.a([$.E,$.U,$.aa,$.a0,$.aq],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.E,$.U,$.aa],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.wT,$.an)
q.i(0,$.cg,$.o)
q.i(0,$.cO,$.o)
q.i(0,$.ey,$.k)
p=$.z
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.m
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x1
l=[U.b]
q.i(0,new R.a5("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.dc(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.m
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.r+"s, they set out to fix the "
m=$.ac
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.z
q.i(0,new R.O("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.T("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.G(s,q,null),$.at)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ht,$.k)
s.i(0,$.ed,$.I)
s.i(0,$.cg,$.k)
p=$.m
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.r+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.z
s.i(0,new R.O("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.T(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(q,s,null),$.at)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cb,$.k)
t.i(0,$.aQ,$.o)
t.i(0,$.cZ,$.k)
t.i(0,$.dA,$.k)
r=$.z
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ac
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.m
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.r+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.O("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.T(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.fD(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
k=$.z
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ac
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.m
t.i(0,new R.O("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.r+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.T("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.dc(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
r="With the defeat of the "+$.z+", "
k=$.m
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.r
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.ax
t.i(0,new R.a5("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.dc(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.m
k="The "+p+" takes a break from adventuring and visits a little "
o=$.r
k=k+o+" town holding a "
r=$.ax
k=k+r+" festival. They walk around town talking to the various villagers and visiting the little shops, before taking a nap in the local inn. The next morning, the villagers welcome the "+p+" to join in the "+r+" festival that\u2019s just starting. Wait, wasn\u2019t the festival yesterday? The "+o+"s assure the "+p+" that the festival is only being held today. "
m="The "+p+" tries to convince the "+o+"s that they were repeating the day before, but the "+o+"s refused to believe. They quickly realize that the villagers aren\u2019t just forgetful when the same thing hsppens the day after. The village appears to be stuck in a time loop They decide to fix things out of the goodness of their heart, but not before exploiting the time loop to mess with the "+o+" town for a little while."
n="After plenty of shenanigans, the "+p+" starts investigating the time loop. They discover that the "+r+" festival ends with an attempted ceremony to summon "
q=$.z
n=n+q+". The "+o+"s bungle the ceremony every time, causing time to reset. The "+p+" studies how the festival is supposed to work, and goes through several loops at once with time time travel to fix the ceremony. "
i="The "+p+" has gone through so many freaking loops that they have memorized the actions of every "+o+". They follow a perfected schedule to make sure every "+o+" prepares for and completes their part of the ceremony. Finally the ceremony is completed and "+q+" arrives. The "+p+" takes out their "+$.by+" and begins the strife!"
p=q+" lies dead. The "+o+"s are happy to be rid of them and thank the player for helping to complete the ceremony. It was their first time performing the ceremony, after all. The "+p+" rolls their eyes."
t.i(0,new R.O("Stop the Time Loop",!1,[new U.b(k),new U.b(m),new U.b(n),new U.T(i,"The "+o+"s wake up and begin eagerly preparing for the "+r+" festival. It only comes once a year, after all.",p)],H.a([],l),R.oB(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
p=$.r
r="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.m
t.i(0,new R.O("Move Forwards, Never Stop",!1,[new U.b(r+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.M+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.T("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.z+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(s,t,null),$.at)}}
G.a2.prototype={
w:function(a){var t=this.c
if(t.length!==0)return C.b.gad(t)
return"NULL TRAIT"},
geC:function(){return this.b},
gem:function(){return this.c},
gbO:function(){return this.d}}
G.aJ.prototype={}
G.ae.prototype={}
G.bL.prototype={}
G.d.prototype={
git:function(){return this.f.length},
gbO:function(){var t,s,r,q,p
for(t=this.f,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bP)(t),++q)r+=t[q].d
return r},
aI:function(a,b){return C.a.b0(b.git()-this.f.length)},
eN:function(a){return C.b.hR(this.f,a.ghw(a))},
$isbI:1,
$asbI:function(){return[G.d]},
gG:function(a){return this.e},
gfb:function(){return this.f}}
G.n8.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a2]}}}
Q.qj.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Cardboard Box",H.a([$.L,$.U,$.ao],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.E,$.U,$.ao],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bu,$.U,$.ao,$.n1],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.b1,$.U,$.ao,$.b_,$.bZ],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aF,$.U,$.ao,$.al],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.U,$.a0,$.uH,$.ao,$.aS],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dT,$.k)
q.i(0,$.iT,$.k)
q.i(0,$.iU,$.k)
q.i(0,$.iQ,$.k)
p=$.z
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.m
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.r
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x1
l=[U.b]
q.i(0,new R.a5("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.m
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.z
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.O("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.T(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i=this.f
i.i(0,new X.G(s,q,null),$.at)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dT,$.o)
s.i(0,$.iT,$.o)
s.i(0,$.iU,$.o)
s.i(0,$.c3,$.k)
p=$.m
o="Even with the victory of the "+p+" over the villainous "
n=$.z
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.r+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ac
s.i(0,new R.a5("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.dX(),!1,!1,new Y.bW("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m=$.m
s.i(0,new R.O("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.M+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.T("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.z+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.r+"s.")],H.a([],l),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.G(q,s,null),$.at)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dT,$.k)
t.i(0,$.iT,$.k)
t.i(0,$.iU,$.k)
r=$.m
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.z+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.O("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.T(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.G(s,t,null),$.at)}}
E.qk.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Yardstick",H.a([$.dV,$.V,$.uO,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aD,$.V,$.n7,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.Q,$.V,$.hD,$.xm,$.b2,$.jK],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.xv,$.V,$.ux],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.cP,$.k)
t.i(0,$.dB,$.k)
t.i(0,$.fh,$.k)
t.i(0,$.dA,$.k)
t.i(0,$.hs,$.k)
t.i(0,$.mm,$.k)
t.i(0,$.iU,$.o)
r=$.m
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.r
o=[U.b]
t.i(0,new R.Z("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.oD(),!1,!1,new Y.e_("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.m
n=q+" tries to manually separate the turtles by catching them with a net and "+$.by+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.M
t.i(0,new R.O("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.T(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.GK(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.m
t.i(0,new R.Z("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.C(),!1,!1,new Y.e_("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.r+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.m
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.O("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.an)
m=$.m
t.i(0,new R.O("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.C(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.an)
m="A wizened "+$.r+" tells the "
r=$.m
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.C(),!1,!1,new Y.dl("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.I)
r="A "+$.r+" that is also a SHOGUN minion tells the "
m=$.m
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.GL(),!1,!1,new Y.bW("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
m=$.m
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.i(0,new R.a5("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.I)
n=$.m
m="The "+n+" finds an unusual rock formation. They examine it from every possible angle to find a secret meaning. In the end it turns out to be an interesting rock and nothing more."
q="The "+n+" is stopped by a young "
r=$.r
t.i(0,new R.a5("Wasting Time",!1,[new U.b(m),new U.b(q+r+" that asks them to watch clouds together. The "+n+" spends a few hours with the "+r+" interpreting the shapes in the clouds."),new U.b("The "+n+" uses the alchemiter to create a number of dream video game fusions. They spend many hours playing them all."),new U.b("After waking up from a nap, the "+n+" turns over and goes right back to sleep. They\u2019re just not feeling like doing anything right now."),new U.b("An elderly "+r+" calls out to the "+n+"; apparently there was a dangerous monster that the "+r+"s wanted the "+n+" to defeat, but the problem solved itself when the monster tripped off a cliffside. Was there actually a point to what the "+n+" was doing? Nope, they\u2019re just really bad at using their time wisely.")],H.a([],o),R.oD(),!1,!1,new Y.e_("Rewards/no_reward.png",null),1,null,null),$.B)
n=$.z
r="The "+n+" explains um. What? Where did the "
q=$.m
t.i(0,new R.bG("Waste the Frogs",!1,[new U.b(r+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
this.x.i(0,new X.G(s,t,null),$.at)}}
M.qp.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Cauldron",H.a([$.xq,$.V,$.a3],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jH,$.dV,$.V,$.X,$.a3],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.uJ,$.V,$.a3,$.ao,$.a0],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ad,P.W])
t.i(0,$.c2,$.o)
t.i(0,$.hw,$.o)
t.i(0,$.d_,$.o)
t.i(0,$.cO,$.o)
t.i(0,$.cB,$.o)
t.i(0,$.uk,$.o)
r=$.z
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.r
q=q+p+" consorts. It's up to the "
o=$.m
n=[U.b]
t.i(0,new R.bG("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.c_(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.an)
o="Even with the defeat of the "+$.z+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.r
o=o+r+" settlement, and crops refuse to thrive at "
p=$.ax
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.m
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.fy
t.i(0,new R.a5("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.B)
q="A Mysterious "+$.r+" approaches the "
p=$.m
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.ax
q=q+r+" was discovered amongst the "+$.z+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.fy
t.i(0,new R.a5("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.r
p="A young "+r+" approaches the "
m=$.m
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.ax
t.i(0,new R.a5("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ac+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.M+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.C(),!1,!1,new Y.a8("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bO)}}
U.qq.prototype={
P:function(a5,a6){var t=0,s=P.bn(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$P=P.br(function(a7,a8){if(a7===1)return P.bo(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.e7(a6,$.$get$yp())
if(0>=p.length){r=H.u(p,0)
t=1
break}if(J.zL(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.u(p,0)
t=1
break}throw H.j("Invalid WordList file header: '"+H.x(p[0])+"'")}o=P.y
n=H.a([],[o])
m=P.cD(o,B.kr)
q.a=null
l=P.cD(o,o)
for(k=P.W,j=B.dK,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cM()
""+i
H.x(g)
f.toString
f=J.e7(g,$.$get$yn())
if(0>=f.length){r=H.u(f,0)
t=1
break $async$outer}g=f[0]
f=J.aY(g)
if(f.gV(g)===!0){$.$get$cM().toString
continue}if(f.aj(g,$.$get$yo())){$.$get$cM().toString
continue}if(C.c.aj(g,"@")){e=C.c.ah(g,1)
$.$get$cM().toString
n.push(e)}else if(C.c.aj(g,"?")){f=C.c.ah(g,1)
f=$.$get$i8().aV(0,f)
f=H.dD(f,B.kT(),H.ag(f,"n",0),null)
d=P.d0(f,!0,H.ag(f,"n",0))
if(d.length<2)$.$get$cM().bi(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cM()
H.x(c)
H.x(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$yq()
a=f.cB(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.u(f,1)
t=1
break $async$outer}a0=J.c9(f[1])
a1=C.c.ah(g,a0)
if(a1.length===0)continue
f=J.aj(a0)
if(f.S(a0,0)){a1=C.c.eO(a1)
$.$get$cM().toString
f=P.cD(o,o)
a2=new B.kr(P.cD(o,k),f,a1,!1,null,null)
a2.dw(null,null,j)
q.a=a2
f.ao(0,l)
m.i(0,a1,q.a)}else if(f.S(a0,$.yr))if(C.c.aj(a1,"?")){a1=C.c.ah(a1,1)
f=$.$get$i8().aV(0,a1)
f=H.dD(f,B.kT(),H.ag(f,"n",0),null)
d=P.d0(f,!0,H.ag(f,"n",0))
f=$.$get$cM()
f.toString
if(d.length<2)f.bi(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.fX(d[0],$.$get$fH(),"")
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}b=J.fX(d[1],$.$get$fH(),"")
f=$.$get$cM()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.aj(a1,"@")){e=C.c.ah(a1,1)
$.$get$cM().toString
f=$.$get$i8().aV(0,a1)
f=H.dD(f,B.kT(),H.ag(f,"n",0),null)
d=P.d0(f,!0,H.ag(f,"n",0))
a4=d.length>1?H.xX(d[1],new U.qr(q,d)):1
q.a.c.i(0,C.c.da(e,$.$get$fH(),""),a4)}else{$.$get$cM().toString
f=$.$get$i8().aV(0,g)
f=H.dD(f,B.kT(),H.ag(f,"n",0),null)
d=P.d0(f,!0,H.ag(f,"n",0))
a4=d.length>1?H.xX(d[1],new U.qs(q,d)):1
if(0>=d.length){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bv(J.fX(d[0],$.$get$fH(),""))
h=new B.dK(null)
a3=P.cD(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.wp(a4)),[H.ag(f,"cL",0)]))}else if(f.S(a0,$.yr*2)){$.$get$cM().toString
f=$.$get$i8().aV(0,g)
f=H.dD(f,B.kT(),H.ag(f,"n",0),null)
d=P.d0(f,!0,H.ag(f,"n",0))
f=d.length
if(f!==2)$.$get$cM().bi(C.h,"Invalid variant for "+H.x(h.di(0))+" in "+q.a.e)
else{if(0>=f){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bv(J.fX(d[0],$.$get$fH(),""))
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}a3=C.c.da(U.HG(d[1]),$.$get$fH(),"")
h.a.i(0,f,a3)}}}}}r=new B.id(n,m)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$P,s)},
$aseR:function(){return[B.id]},
$ascc:function(){return[B.id,P.y]}}
U.qr.prototype={
$1:function(a){var t,s,r
t=$.$get$cM()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid include weight '"+H.x(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.bi(C.m,r+H.x(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.y]}}}
U.qs.prototype={
$1:function(a){var t,s,r
t=$.$get$cM()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid weight '"+H.x(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.bi(C.m,r+H.x(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.y]}}}
F.qu.prototype={
D:function(){var t,s,r,q
t=Q.K(null,null,A.a6)
s=[G.a2]
r=A.i("Make a World Book",H.a([$.L,$.al,$.aD],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.b2,$.Q,$.n5],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.aD,$.L,$.Y],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aD,$.L,$.Y],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.aD,$.L],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.E,$.Y,$.n5,$.al],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aD,$.L,$.E],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aD,$.L],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.ad,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dT,$.k)
q.i(0,$.cC,$.k)
q.i(0,$.bf,$.o)
q.i(0,$.aQ,$.o)
q.i(0,$.fj,$.o)
p=$.m
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.r+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.Z("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.C(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dq,$.o)
s.i(0,$.cG,$.o)
s.i(0,$.cr,$.o)
s.i(0,$.bf,$.o)
p=$.r
o="An Excited "+p+" rushes up to the "
n=$.m
s.i(0,new R.Z("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.M+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.C(),!1,!1,new Y.dl("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cG,$.o)
t.i(0,$.dS,$.k)
t.i(0,$.cr,$.k)
t.i(0,$.dq,$.o)
t.i(0,$.fh,$.k)
r=$.m
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.r
t.i(0,new R.Z("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.C(),!1,!1,new Y.dl("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aC)}}
B.qz.prototype={
aY:function(a){return"application/x-tar"},
P:function(a,b){var t=0,s=P.bn(),r,q,p
var $async$P=P.br(function(c,d){if(c===1)return P.bo(d,s)
while(true)switch(t){case 0:q=$.$get$ys()
p=J.wf(b)
q.toString
r=q.hE(T.uw(p,0,null,0),!1)
t=1
break
case 1:return P.bp(r,s)}})
return P.bq($async$P,s)},
$asdw:function(){return[T.fZ]},
$ascc:function(){return[T.fZ,P.bi]}}
A.h6.prototype={}
B.dx.prototype={
cR:function(a){if(a)this.b=(this.b|C.a.au(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.L+=H.fC(this.b)
this.b=0}},
am:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.au(1,t)
if(typeof a!=="number")return a.aP()
this.cR((a&s)>>>0>0)}},
hn:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.aC(1,t-s)
if(typeof a!=="number")return a.aP()
this.cR((a&r)>>>0>0)}},
c4:function(a){var t,s
a=J.e5(a,1)
t=C.d.du(Math.log(H.kO(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cR(!1)
this.hn(a,t+1)},
bc:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.L
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a7(r)
q+=r
p=r}else p=0
r=H.cE(q)
o=new Uint8Array(r)
if(t){n=H.cT(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.u(o,m)
o[m]=l}}t=s.L
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a8(k,m)
if(s<0||s>=r)return H.u(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.u(o,t)
o[t]=s}return o.buffer}}
B.dm.prototype={
cJ:function(a){var t,s,r,q
t=C.f.ap(a/8)
s=C.a.bU(a,8)
r=this.a.getUint8(t)
q=C.a.aC(1,s)
if(typeof r!=="number")return r.aP()
return(r&q)>>>0>0},
ab:function(a){var t,s,r
if(a>32)throw H.j(P.dP(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cJ(this.b);++this.b
if(r)t=(t|C.a.au(1,s))>>>0}return t},
iv:function(a){var t,s,r,q
if(a>32)throw H.j(P.dP(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cJ(this.b);++this.b
if(q)s=(s|C.a.aC(1,t-r))>>>0}return s},
cd:function(){var t,s,r
for(t=0;!0;){s=this.cJ(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.iv(t+1)-1}}
A.e9.prototype={
w:function(a){return"rgb("+H.x(this.b)+", "+H.x(this.c)+", "+H.x(this.d)+", "+H.x(this.a)+")"},
iG:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.aC()
s=this.c
if(typeof s!=="number")return s.aC()
r=this.d
if(typeof r!=="number")return r.aC()
q=this.a
if(typeof q!=="number")return H.a7(q)
return(t<<24|s<<16|r<<8|q)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.e9){t=this.b
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
ga4:function(a){return this.iG(!0)},
R:function(a,b){var t,s,r,q,p,o,n,m
t=J.aj(b)
if(!!t.$ise9){t=this.b
s=b.b
if(typeof t!=="number")return t.R()
if(typeof s!=="number")return H.a7(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.R()
if(typeof q!=="number")return H.a7(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.R()
if(typeof o!=="number")return H.a7(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.R()
if(typeof m!=="number")return H.a7(m)
return A.h9(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.be()
s=this.c
if(typeof s!=="number")return s.be()
r=this.d
if(typeof r!=="number")return r.be()
q=this.a
if(typeof q!=="number")return q.be()
return A.wz(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.R()
s=this.c
if(typeof s!=="number")return s.R()
r=this.d
if(typeof r!=="number")return r.R()
return A.h9(t+b,s+b,r+b,this.a)}throw H.j("Cannot add ["+H.x(t.gaf(b))+" "+H.x(b)+"] to a Colour. Only Colour, double and int are valid.")},
al:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.be()
s=this.c
if(typeof s!=="number")return s.be()
r=this.d
if(typeof r!=="number")return r.be()
q=this.a
if(typeof q!=="number")return q.be()
return A.wz(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){var t=J.aj(b)
if(t.S(b,0))return this.b
if(t.S(b,1))return this.c
if(t.S(b,2))return this.d
if(t.S(b,3))return this.a
throw H.j("Colour index out of range: "+H.x(b))},
i:function(a,b,c){var t,s
t=J.du(b)
if(t.a3(b,0)||t.aG(b,3))throw H.j("Colour index out of range: "+H.x(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.S(b,0)){this.b=C.a.ai(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ai(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,2)){this.d=C.a.ai(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ai(c,0,255)
else if(t.S(b,0)){this.b=C.a.ai(J.kV(J.we(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ai(J.kV(J.we(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kP(c)
if(t.S(b,2)){this.d=C.a.ai(J.kV(s.al(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ai(J.kV(s.al(c,255)),0,255)}},
fj:function(a,b,c,d){this.b=C.d.ai(C.d.ai(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ai(C.d.ai(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ai(C.d.ai(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ai(J.zh(d,0,255),0,255)}}
A.ts.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.y]}}}
A.nB.prototype={
$1:function(a){return this.a.eF(a)},
$S:function(){return{func:1,args:[,]}}}
A.nz.prototype={
$1:function(a){this.a.P(0,a).b1(this.b.gis())},
$S:function(){return{func:1,args:[,]}}}
A.nA.prototype={
$1:function(a){this.a.hv(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.nC.prototype={
$1:function(a){return this.a.aJ(0,this.b)},
$S:function(){return{func:1,args:[W.a_]}}}
F.hO.prototype={
w:function(a){return this.b}}
F.hP.prototype={
bi:function(a,b){F.Gk(a).$1("("+this.c+")["+H.x(C.b.gbh(a.b.split(".")))+"]: "+H.x(b))},
cW:function(a,b){this.bi(C.h,b)},
gG:function(a){return this.c}}
F.v8.prototype={}
O.tN.prototype={
$1:function(a){return H.x(a.bj(1))+" = "+H.x(a.bj(2))+C.c.al("../",this.a)},
$S:function(){return{func:1,args:[P.dE]}}}
O.tO.prototype={
$0:function(){var t=document
J.wl(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.x,null)
t=H.kS(t.querySelector("#voidButton"),"$ish8")
t.toString
W.fM(t,"click",new O.tM(),!1,W.eJ)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.J6("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.tM.prototype={
$1:function(a){return O.Jb()},
$S:function(){return{func:1,args:[W.a_]}}}
R.hx.prototype={}
R.vp.prototype={}
R.vo.prototype={}
A.og.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.Y(0,b)?t.n(0,b):$.$get$vn()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.Y(0,b)?t.n(0,b):$.$get$vn()}throw H.j(P.dP(b,"'name' should be a String name or int id only",null))},
gX:function(a){var t=this.a
t=t.gci(t)
return new H.jS(null,J.cF(t.a),t.b,[H.N(t,0),H.N(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.Y(0,b))this.as(0,b)
s=this.h2()
if(typeof s!=="number")return s.aA()
if(s>=256)throw H.j(P.dP(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
as:function(a,b){var t,s,r
t=this.a
if(!t.Y(0,b))return
s=this.c
r=s.n(0,b)
t.as(0,b)
this.b.as(0,r)
s.as(0,b)
this.d.as(0,r)},
h2:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.Y(0,s))return s;++s}}}
A.k2.prototype={
$asn:function(){return[A.e9]},
$isn:1}
Q.k4.prototype={}
A.k7.prototype={
bM:function(a){if(a===0)return 0
return this.h3(a)},
ii:function(){return this.bM(4294967295)},
h3:function(a){var t,s
t=this.a
if(a>4294967295){s=t.d0()
this.b=C.d.b0(s*4294967295)
return C.d.ap(s*a)}else{s=t.bM(a)
this.b=s
return s}},
dm:function(a){var t=a==null
this.a=t?C.R:P.HX(a)
if(!t)this.b=J.e5(a,1)},
iq:function(a,b){var t=a.length
if(t===0)return
t=this.bM(t)
if(t<0||t>=a.length)return H.u(a,t)
return a[t]},
ip:function(a){return this.iq(a,!0)}}
Y.dZ.prototype={
cP:function(a){var t,s
if(this.b!=null)throw H.j("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bm(0,$.ap,null,t)
this.c.push(new P.e3(s,t))
return s},
eF:function(a){var t,s,r
if(this.b!=null)throw H.j("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bP)(t),++r)t[r].aJ(0,this.b)
C.b.sm(t,0)}}
V.lY.prototype={
$4:function(a,b,c,d){return V.AC(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bi,P.bi,O.d2]}}}
V.lX.prototype={
$4:function(a,b,c,d){return V.AB(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.D,P.D,O.d2]}}}
V.lW.prototype={
$4:function(a,b,c,d){return V.Ay(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bi,P.bi,O.d2]}}}
V.lV.prototype={
$4:function(a,b,c,d){return V.Ax(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.D,P.D,O.d2]}}}
O.d2.prototype={
iw:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
iM:function(a,b,c,d){var t,s,r,q,p
t=J.aP(d)
s=0
while(!0){r=t.gez(d)
if(typeof r!=="number")return H.a7(r)
if(!(s<r))break
q=(C.a.du(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.u(r,q)
r[q]=p;++s}}}
D.pd.prototype={
$1:function(a){return J.zp(a)},
$S:function(){return{func:1,args:[D.cm]}}}
D.pe.prototype={
$1:function(a){return a},
$S:function(){return{func:1,args:[D.cm]}}}
D.pf.prototype={
$1:function(a){return a.gir()},
$S:function(){return{func:1,args:[D.cm]}}}
D.cm.prototype={
w:function(a){return this.a},
gG:function(a){return this.a},
gir:function(){return this.d}}
D.ks.prototype={}
D.oK.prototype={}
B.dK.prototype={
eW:function(a,b){if(this.a.Y(0,"MAIN"))return this.a.n(0,"MAIN")
return},
di:function(a){return this.eW(a,null)},
w:function(a){return"[Word: "+H.x(this.di(0))+"]"}}
B.kr.prototype={
w:function(a){return"WordList '"+this.e+"': "+this.ff(0)},
$isp:1,
$asp:function(){return[B.dK]},
$asdJ:function(){return[B.dK]},
$asic:function(){return[B.dK]},
$ascL:function(){return[B.dK]},
$asn:function(){return[B.dK]},
$ast:function(){return[B.dK]},
gG:function(a){return this.e}}
B.id.prototype={
w:function(a){return"[WordListFile: "+this.b.w(0)+" ]"}}
S.fz.prototype={}
S.vO.prototype={}
S.vP.prototype={}
S.vQ.prototype={}
S.ud.prototype={}
S.ug.prototype={}
S.u3.prototype={}
S.vy.prototype={}
S.vS.prototype={}
S.vT.prototype={}
S.lj.prototype={}
S.vq.prototype={}
S.vm.prototype={}
S.nt.prototype={}
S.u7.prototype={}
S.tZ.prototype={}
S.lF.prototype={}
S.v9.prototype={}
S.lG.prototype={}
S.oi.prototype={}
S.vF.prototype={}
S.vC.prototype={}
S.vG.prototype={}
S.tY.prototype={}
S.mF.prototype={}
S.lh.prototype={}
S.u2.prototype={}
S.u1.prototype={}
S.vr.prototype={}
S.vH.prototype={}
S.vs.prototype={}
S.uf.prototype={}
S.ue.prototype={}
S.vE.prototype={}
S.vD.prototype={}
S.pT.prototype={}
S.vJ.prototype={}
S.u4.prototype={}
S.u5.prototype={}
S.vR.prototype={}
S.hR.prototype={}
S.ve.prototype={}
S.vf.prototype={}
S.vg.prototype={}
S.vh.prototype={}
S.vz.prototype={}
S.vA.prototype={}
S.vB.prototype={}
S.vd.prototype={}
S.vj.prototype={}
S.vk.prototype={}
S.us.prototype={}
S.ut.prototype={}
S.uu.prototype={}
S.vl.prototype={}
S.vi.prototype={}
S.u_.prototype={}
S.vL.prototype={}
S.vM.prototype={}
S.vK.prototype={}
Z.v3.prototype={}
Z.uZ.prototype={}
Z.v_.prototype={}
Q.cL.prototype={
k:function(a,b){return b},
w:function(a){return J.cA(this.gbN())},
aw:function(a,b){return Q.vW(this,b,H.ag(this,"cL",0))},
aF:function(a,b){return Q.vV(this,b,H.ag(this,"cL",0),null)},
a6:function(a,b){return Q.vU(this,!1,!0,null,H.ag(this,"cL",0))},
at:function(a){return this.a6(a,!0)},
$isn:1,
$asn:null}
Q.dJ.prototype={
gbN:function(){return this.b},
c3:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.wp(c)),[H.ag(this,"cL",0)]))},
h:function(a,b){return this.c3(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return J.tV(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.u(t,b)
t[b]=new Q.h(c,s,[H.ag(this,"cL",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
w:function(a){return P.jL(this.b,"[","]")},
aw:function(a,b){return Q.vW(this,b,H.ag(this,"dJ",0))},
aF:function(a,b){return Q.vV(this,b,H.ag(this,"dJ",0),null)},
a6:function(a,b){return Q.vU(this,!1,!0,null,H.ag(this,"dJ",0))},
at:function(a){return this.a6(a,!0)},
dw:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.ic.prototype={$ascL:null,$asn:null,$asp:null,$ast:null,$isp:1,$ist:1,$isn:1}
Q.h.prototype={
w:function(a){return"("+H.x(this.a)+" @ "+H.x(this.b)+")"},
ga0:function(a){return this.a},
gdf:function(a){return this.b}}
Q.en.prototype={
gbN:function(){return this.b},
gX:function(a){var t=new Q.qm(null,[H.ag(this,"en",0)])
t.a=J.cF(this.b)
return t},
gm:function(a){return J.c9(this.b)},
w:function(a){return J.cA(this.b)},
aw:function(a,b){return Q.vW(this,b,H.ag(this,"en",0))},
aF:function(a,b){return Q.vV(this,b,H.ag(this,"en",0),null)},
a6:function(a,b){return Q.vU(this,!1,!0,null,H.ag(this,"en",0))},
at:function(a){return this.a6(a,!0)}}
Q.ib.prototype={$ascL:null,$asn:null,$isn:1}
Q.qm.prototype={
gO:function(){return J.tV(this.a.gO())},
F:function(){return this.a.F()}}
Q.ko.prototype={}
Q.qo.prototype={
$1:function(a){return this.b.$1(J.tV(a))},
$S:function(){return H.eo(function(a){return{func:1,args:[[Q.h,a]]}},this,"ko")}}
Q.kn.prototype={
$asen:function(a,b){return[b]},
$asib:function(a,b){return[b]},
$ascL:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
Q.qn.prototype={
$1:function(a){var t=J.aP(a)
return new Q.h(this.c.$1(t.ga0(a)),t.gdf(a),[this.b])},
$S:function(){return H.eo(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"kn")}}
J.f.prototype.fc=J.f.prototype.w
J.hH.prototype.fe=J.hH.prototype.w
P.di.prototype.fg=P.di.prototype.bl
P.di.prototype.fh=P.di.prototype.bV
P.aO.prototype.dt=P.aO.prototype.a7
P.n.prototype.fd=P.n.prototype.aw
W.cp.prototype.cp=W.cp.prototype.aN
W.im.prototype.fi=W.im.prototype.b7
Q.dJ.prototype.ff=Q.dJ.prototype.w;(function installTearOffs(){installTearOff(H.fO.prototype,"gib",0,0,0,null,["$0"],["ca"],1)
installTearOff(H.dM.prototype,"geZ",0,0,0,null,["$1"],["aH"],6)
installTearOff(H.eY.prototype,"ghI",0,0,0,null,["$1"],["b8"],6)
installTearOff(H,"yN",1,0,0,null,["$1"],["Ip"],14)
installTearOff(P,"Is",1,0,0,null,["$1"],["HK"],8)
installTearOff(P,"It",1,0,0,null,["$1"],["HL"],8)
installTearOff(P,"Iu",1,0,0,null,["$1"],["HM"],8)
installTearOff(P,"yZ",1,0,0,null,["$0"],["Io"],1)
installTearOff(P.kw.prototype,"gek",0,0,0,null,["$2","$1"],["cT","bB"],12)
installTearOff(P.bm.prototype,"gbm",0,0,0,null,["$2","$1"],["aq","fF"],12)
var t
installTearOff(t=P.di.prototype,"ge_",0,0,0,null,["$0"],["bZ"],1)
installTearOff(t,"ge0",0,0,0,null,["$0"],["c_"],1)
installTearOff(t=P.f_.prototype,"ge_",0,0,0,null,["$0"],["bZ"],1)
installTearOff(t,"ge0",0,0,0,null,["$0"],["c_"],1)
installTearOff(t,"gfR",0,0,0,null,["$1"],["fS"],function(){return H.eo(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"f_")})
installTearOff(t,"gfV",0,0,0,null,["$2"],["fW"],33)
installTearOff(t,"gfT",0,0,0,null,["$0"],["fU"],1)
installTearOff(P.kD.prototype,"ghw",0,1,0,null,["$1"],["Z"],16)
installTearOff(P,"ID",1,0,0,null,["$1"],["Ih"],6)
installTearOff(P,"IE",1,0,0,null,["$2"],["Ad"],32)
installTearOff(P,"IF",1,0,0,null,["$1"],["f2"],4)
installTearOff(W,"IR",1,0,0,null,["$4"],["HS"],13)
installTearOff(W,"IS",1,0,0,null,["$4"],["HT"],13)
installTearOff(W.iu.prototype,"gae",0,1,0,null,["$0"],["ia"],17)
installTearOff(t=W.ix.prototype,"gav",0,1,0,null,["$1"],["cW"],4)
installTearOff(t,"gi3",0,0,0,null,["$1"],["ew"],4)
installTearOff(t,"giJ",0,0,0,null,["$1"],["iK"],4)
installTearOff(W.fe.prototype,"ga0",0,1,0,null,["$1"],["K"],5)
installTearOff(W.iA.prototype,"ga0",0,1,0,null,["$1"],["K"],35)
installTearOff(W.iH.prototype,"ga0",0,1,0,null,["$1"],["K"],5)
installTearOff(W.iI.prototype,"ga0",0,1,0,null,["$1"],["K"],14)
installTearOff(W.iJ.prototype,"ga0",0,1,0,null,["$1"],["K"],5)
installTearOff(W.fn.prototype,"ga0",0,1,0,null,["$1"],["K"],15)
installTearOff(W.iZ.prototype,"ga0",0,1,0,null,["$1"],["K"],10)
installTearOff(W.fo.prototype,"ga0",0,1,0,null,["$1"],["K"],9)
installTearOff(W.j0.prototype,"ga0",0,1,0,null,["$1"],["K"],9)
installTearOff(W.jU.prototype,"ga0",0,1,0,null,["$1"],["K"],5)
installTearOff(W.jV.prototype,"ga0",0,1,0,null,["$1"],["K"],11)
installTearOff(W.jY.prototype,"gd5",0,1,0,null,["$0"],["d6"],7)
installTearOff(W.cj.prototype,"ga0",0,1,0,null,["$1"],["K"],11)
installTearOff(W.k6.prototype,"ga0",0,1,0,null,["$1"],["K"],18)
installTearOff(W.ka.prototype,"ga0",0,1,0,null,["$1"],["K"],10)
installTearOff(W.kc.prototype,"ga0",0,1,0,null,["$1"],["K"],19)
installTearOff(W.kd.prototype,"ga0",0,1,0,null,["$1"],["K"],20)
installTearOff(W.cl.prototype,"ga0",0,1,0,null,["$1"],["K"],21)
installTearOff(W.kj.prototype,"ga0",0,1,0,null,["$1"],["K"],22)
installTearOff(W.kk.prototype,"ga0",0,1,0,null,["$1"],["K"],23)
installTearOff(t=W.kl.prototype,"gcc",0,1,0,null,["$0"],["im"],7)
installTearOff(t,"gd5",0,1,0,null,["$0"],["d6"],7)
installTearOff(W.km.prototype,"ga0",0,1,0,null,["$1"],["K"],24)
installTearOff(W.ie.prototype,"ga0",0,1,0,null,["$1"],["K"],25)
installTearOff(W.kx.prototype,"ga0",0,1,0,null,["$1"],["K"],26)
installTearOff(W.kB.prototype,"ga0",0,1,0,null,["$1"],["K"],36)
installTearOff(W.il.prototype,"ga0",0,1,0,null,["$1"],["K"],28)
installTearOff(W.kG.prototype,"ga0",0,1,0,null,["$1"],["K"],29)
installTearOff(W.kI.prototype,"ga0",0,1,0,null,["$1"],["K"],30)
installTearOff(P.ke.prototype,"ga0",0,1,0,null,["$1"],["K"],31)
installTearOff(R,"dY",1,0,0,null,["$1"],["y_"],0)
installTearOff(R,"GO",1,0,0,null,["$1"],["H3"],0)
installTearOff(R,"GK",1,0,0,null,["$1"],["GP"],0)
installTearOff(R,"oD",1,0,0,null,["$1"],["H2"],0)
installTearOff(R,"c_",1,0,0,null,["$1"],["H1"],0)
installTearOff(R,"oC",1,0,0,null,["$1"],["H0"],0)
installTearOff(R,"oB",1,0,0,null,["$1"],["GZ"],0)
installTearOff(R,"fD",1,0,0,null,["$1"],["GX"],0)
installTearOff(R,"dc",1,0,0,null,["$1"],["GT"],0)
installTearOff(R,"el",1,0,0,null,["$1"],["GV"],0)
installTearOff(R,"dX",1,0,0,null,["$1"],["H_"],0)
installTearOff(R,"vx",1,0,0,null,["$1"],["GU"],0)
installTearOff(R,"GM",1,0,0,null,["$1"],["GW"],0)
installTearOff(R,"GN",1,0,0,null,["$1"],["GY"],0)
installTearOff(R,"C",1,0,0,null,["$1"],["GQ"],0)
installTearOff(R,"GL",1,0,0,null,["$1"],["GR"],0)
installTearOff(F.hP.prototype,"gav",0,1,0,null,["$1"],["cW"],4)
installTearOff(O,"J_",1,0,0,null,["$1"],["J1"],34)
installTearOff(Y.dZ.prototype,"gis",0,0,0,null,["$1"],["eF"],function(){return H.eo(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dZ")})
installTearOff(V,"J4",1,0,0,null,["$4"],["AA"],3)
installTearOff(V,"J3",1,0,0,null,["$4"],["Az"],2)
installTearOff(B,"kT",1,0,0,null,["$1"],["Ii"],27)
installTearOff(E,"ws",1,0,0,null,["$0"],["IY"],1)
installTearOff(T,"Iy",1,0,0,null,["$4"],["Aq"],3)
installTearOff(T,"Ix",1,0,0,null,["$4"],["Ap"],2)
installTearOff(T,"Iw",1,0,0,null,["$4"],["Ao"],3)
installTearOff(T,"Iv",1,0,0,null,["$4"],["An"],2)
installTearOff(F,"IN",1,0,0,null,["$4"],["Aw"],3)
installTearOff(F,"IM",1,0,0,null,["$4"],["Av"],2)
installTearOff(F,"IL",1,0,0,null,["$4"],["Au"],3)
installTearOff(F,"IK",1,0,0,null,["$4"],["At"],2)
installTearOff(F,"IJ",1,0,0,null,["$4"],["As"],3)
installTearOff(F,"II",1,0,0,null,["$4"],["Ar"],2)})();(function inheritance(){inherit(P.A,null)
var t=P.A
inherit(H.v5,t)
inherit(J.f,t)
inherit(J.f4,t)
inherit(P.fA,t)
inherit(P.n,t)
inherit(H.eG,t)
inherit(P.jM,t)
inherit(H.iW,t)
inherit(H.q5,t)
inherit(H.fa,t)
inherit(H.rv,t)
inherit(H.fO,t)
inherit(H.qY,t)
inherit(H.f0,t)
inherit(H.ru,t)
inherit(H.qI,t)
inherit(H.fE,t)
inherit(H.pX,t)
inherit(H.dQ,t)
inherit(H.dM,t)
inherit(H.eY,t)
inherit(P.jR,t)
inherit(H.lr,t)
inherit(H.oJ,t)
inherit(H.q2,t)
inherit(P.et,t)
inherit(H.hp,t)
inherit(H.kH,t)
inherit(H.e2,t)
inherit(H.w,t)
inherit(H.nu,t)
inherit(H.nw,t)
inherit(H.fv,t)
inherit(H.kF,t)
inherit(H.ku,t)
inherit(H.kg,t)
inherit(H.rT,t)
inherit(P.cs,t)
inherit(P.fc,t)
inherit(P.kw,t)
inherit(P.kA,t)
inherit(P.bm,t)
inherit(P.kv,t)
inherit(P.cJ,t)
inherit(P.pi,t)
inherit(P.di,t)
inherit(P.ky,t)
inherit(P.qS,t)
inherit(P.ry,t)
inherit(P.rR,t)
inherit(P.f5,t)
inherit(P.ta,t)
inherit(P.rh,t)
inherit(P.ri,t)
inherit(P.p_,t)
inherit(P.rs,t)
inherit(P.dL,t)
inherit(P.ei,t)
inherit(P.aO,t)
inherit(P.nK,t)
inherit(P.t0,t)
inherit(P.rt,t)
inherit(P.rn,t)
inherit(P.fb,t)
inherit(P.er,t)
inherit(P.rq,t)
inherit(P.t2,t)
inherit(P.cV,t)
inherit(P.bI,t)
inherit(P.ea,t)
inherit(P.dv,t)
inherit(P.dy,t)
inherit(P.oc,t)
inherit(P.kf,t)
inherit(P.r2,t)
inherit(P.bK,t)
inherit(P.m0,t)
inherit(P.p,t)
inherit(P.aK,t)
inherit(P.da,t)
inherit(P.dE,t)
inherit(P.e0,t)
inherit(P.y,t)
inherit(P.c6,t)
inherit(P.eW,t)
inherit(P.kK,t)
inherit(P.q6,t)
inherit(P.rN,t)
inherit(W.ix,t)
inherit(W.k1,t)
inherit(W.iz,t)
inherit(W.qH,t)
inherit(P.lx,t)
inherit(W.ii,t)
inherit(W.bv,t)
inherit(W.k_,t)
inherit(W.im,t)
inherit(W.rX,t)
inherit(W.iX,t)
inherit(W.qP,t)
inherit(W.ej,t)
inherit(W.t_,t)
inherit(W.rJ,t)
inherit(W.kL,t)
inherit(P.rU,t)
inherit(P.qA,t)
inherit(P.rm,t)
inherit(P.rA,t)
inherit(P.dF,t)
inherit(P.rB,t)
inherit(P.bi,t)
inherit(P.dg,t)
inherit(T.h_,t)
inherit(T.dj,t)
inherit(T.hB,t)
inherit(T.oe,t)
inherit(T.qw,t)
inherit(T.qx,t)
inherit(T.qy,t)
inherit(T.qv,t)
inherit(T.mP,t)
inherit(T.j1,t)
inherit(B.hC,t)
inherit(N.ad,t)
inherit(L.h0,t)
inherit(A.k2,t)
inherit(O.cc,t)
inherit(T.i0,t)
inherit(M.h7,t)
inherit(B.fd,t)
inherit(X.iN,t)
inherit(X.iv,t)
inherit(M.hq,t)
inherit(Z.iM,t)
inherit(E.oa,t)
inherit(E.P,t)
inherit(A.a6,t)
inherit(S.k3,t)
inherit(U.b,t)
inherit(Y.e_,t)
inherit(K.cH,t)
inherit(X.G,t)
inherit(G.a2,t)
inherit(A.h6,t)
inherit(B.dx,t)
inherit(B.dm,t)
inherit(A.e9,t)
inherit(F.hO,t)
inherit(F.hP,t)
inherit(Q.k4,t)
inherit(A.k7,t)
inherit(Y.dZ,t)
inherit(O.d2,t)
inherit(D.cm,t)
inherit(B.dK,t)
inherit(Q.cL,t)
inherit(B.id,t)
inherit(Q.h,t)
t=J.f
inherit(J.nc,t)
inherit(J.nd,t)
inherit(J.hH,t)
inherit(J.eD,t)
inherit(J.fu,t)
inherit(J.eE,t)
inherit(H.fw,t)
inherit(H.eK,t)
inherit(W.ah,t)
inherit(W.cN,t)
inherit(W.f8,t)
inherit(W.iu,t)
inherit(W.ll,t)
inherit(W.hd,t)
inherit(W.bR,t)
inherit(W.j2,t)
inherit(W.lI,t)
inherit(W.ff,t)
inherit(W.iA,t)
inherit(W.lL,t)
inherit(W.iE,t)
inherit(W.lM,t)
inherit(W.iF,t)
inherit(W.iG,t)
inherit(W.j3,t)
inherit(W.iI,t)
inherit(W.iJ,t)
inherit(W.hi,t)
inherit(W.a_,t)
inherit(W.j4,t)
inherit(W.mv,t)
inherit(W.my,t)
inherit(W.ct,t)
inherit(W.mK,t)
inherit(W.j5,t)
inherit(W.hA,t)
inherit(W.eS,t)
inherit(W.nE,t)
inherit(W.jU,t)
inherit(W.cu,t)
inherit(W.jf,t)
inherit(W.o2,t)
inherit(W.o3,t)
inherit(W.jY,t)
inherit(W.jg,t)
inherit(W.oj,t)
inherit(W.ek,t)
inherit(W.fJ,t)
inherit(W.cj,t)
inherit(W.jh,t)
inherit(W.oF,t)
inherit(W.oY,t)
inherit(W.cw,t)
inherit(W.ji,t)
inherit(W.fG,t)
inherit(W.cl,t)
inherit(W.pa,t)
inherit(W.pg,t)
inherit(W.cn,t)
inherit(W.jj,t)
inherit(W.pW,t)
inherit(W.cy,t)
inherit(W.jk,t)
inherit(W.fI,t)
inherit(W.kk,t)
inherit(W.kl,t)
inherit(W.qb,t)
inherit(W.fK,t)
inherit(W.km,t)
inherit(W.qL,t)
inherit(W.jl,t)
inherit(W.jm,t)
inherit(W.j6,t)
inherit(W.j7,t)
inherit(W.j8,t)
inherit(W.j9,t)
inherit(W.t8,t)
inherit(W.t9,t)
inherit(P.mT,t)
inherit(P.o9,t)
inherit(P.d9,t)
inherit(P.ja,t)
inherit(P.db,t)
inherit(P.jb,t)
inherit(P.os,t)
inherit(P.ot,t)
inherit(P.oH,t)
inherit(P.jc,t)
inherit(P.df,t)
inherit(P.jd,t)
inherit(P.qi,t)
inherit(P.h2,t)
inherit(P.kZ,t)
inherit(P.oL,t)
inherit(P.oM,t)
inherit(P.t6,t)
inherit(P.je,t)
t=J.hH
inherit(J.oq,t)
inherit(J.eU,t)
inherit(J.eF,t)
inherit(F.v8,t)
inherit(R.hx,t)
inherit(R.vp,t)
inherit(R.vo,t)
inherit(S.fz,t)
inherit(S.vO,t)
inherit(S.vP,t)
inherit(S.vQ,t)
inherit(S.ud,t)
inherit(S.ug,t)
inherit(S.u3,t)
inherit(S.vS,t)
inherit(S.vT,t)
inherit(S.lF,t)
inherit(S.vF,t)
inherit(S.vG,t)
inherit(S.tY,t)
inherit(S.mF,t)
inherit(S.lh,t)
inherit(S.u2,t)
inherit(S.u1,t)
inherit(S.uf,t)
inherit(S.pT,t)
inherit(S.u5,t)
inherit(S.hR,t)
inherit(S.vf,t)
inherit(S.vh,t)
inherit(S.vA,t)
inherit(S.vB,t)
inherit(S.vj,t)
inherit(S.vk,t)
inherit(S.ut,t)
inherit(S.uu,t)
inherit(S.vl,t)
inherit(S.vi,t)
inherit(S.u_,t)
inherit(S.vL,t)
inherit(S.vM,t)
inherit(S.vK,t)
inherit(Z.v3,t)
inherit(Z.uZ,t)
inherit(Z.v_,t)
inherit(J.v4,J.eD)
t=J.fu
inherit(J.jO,t)
inherit(J.jN,t)
inherit(P.hM,P.fA)
t=P.hM
inherit(H.ia,t)
inherit(W.kz,t)
inherit(W.d5,t)
inherit(H.lo,H.ia)
t=P.n
inherit(H.t,t)
inherit(H.hQ,t)
inherit(H.dh,t)
inherit(H.i2,t)
inherit(H.qM,t)
inherit(P.hF,t)
inherit(H.rS,t)
t=H.t
inherit(H.dW,t)
inherit(H.nv,t)
inherit(P.kC,t)
inherit(P.eN,t)
t=H.dW
inherit(H.pE,t)
inherit(H.eI,t)
inherit(P.nx,t)
inherit(P.ro,t)
inherit(H.hg,H.hQ)
t=P.jM
inherit(H.jS,t)
inherit(H.kp,t)
inherit(H.p3,t)
inherit(Q.qm,t)
inherit(H.iK,H.i2)
t=H.fa
inherit(H.tQ,t)
inherit(H.tR,t)
inherit(H.rl,t)
inherit(H.qZ,t)
inherit(H.mY,t)
inherit(H.mZ,t)
inherit(H.rx,t)
inherit(H.pY,t)
inherit(H.pZ,t)
inherit(H.tS,t)
inherit(H.tF,t)
inherit(H.tG,t)
inherit(H.tH,t)
inherit(H.tI,t)
inherit(H.tJ,t)
inherit(H.pL,t)
inherit(H.ng,t)
inherit(H.nf,t)
inherit(H.tB,t)
inherit(H.tC,t)
inherit(H.tD,t)
inherit(P.qE,t)
inherit(P.qD,t)
inherit(P.qF,t)
inherit(P.qG,t)
inherit(P.tb,t)
inherit(P.tc,t)
inherit(P.to,t)
inherit(P.tr,t)
inherit(P.mE,t)
inherit(P.mD,t)
inherit(P.r3,t)
inherit(P.rb,t)
inherit(P.r7,t)
inherit(P.r8,t)
inherit(P.r9,t)
inherit(P.r5,t)
inherit(P.ra,t)
inherit(P.r4,t)
inherit(P.re,t)
inherit(P.rf,t)
inherit(P.rd,t)
inherit(P.rc,t)
inherit(P.pl,t)
inherit(P.pj,t)
inherit(P.pk,t)
inherit(P.pm,t)
inherit(P.pr,t)
inherit(P.pp,t)
inherit(P.pq,t)
inherit(P.ps,t)
inherit(P.pv,t)
inherit(P.pw,t)
inherit(P.pt,t)
inherit(P.pu,t)
inherit(P.px,t)
inherit(P.py,t)
inherit(P.pn,t)
inherit(P.po,t)
inherit(P.qK,t)
inherit(P.qJ,t)
inherit(P.rz,t)
inherit(P.te,t)
inherit(P.td,t)
inherit(P.tf,t)
inherit(P.tn,t)
inherit(P.rD,t)
inherit(P.rE,t)
inherit(P.rF,t)
inherit(P.rj,t)
inherit(P.tt,t)
inherit(P.nM,t)
inherit(P.rr,t)
inherit(P.t4,t)
inherit(P.t3,t)
inherit(P.lR,t)
inherit(P.lS,t)
inherit(P.qa,t)
inherit(P.q7,t)
inherit(P.q8,t)
inherit(P.q9,t)
inherit(P.tq,t)
inherit(P.tk,t)
inherit(P.tj,t)
inherit(P.tl,t)
inherit(P.tm,t)
inherit(W.qO,t)
inherit(W.tp,t)
inherit(W.mN,t)
inherit(W.mO,t)
inherit(W.ph,t)
inherit(W.r1,t)
inherit(W.o5,t)
inherit(W.o4,t)
inherit(W.rL,t)
inherit(W.rM,t)
inherit(W.rZ,t)
inherit(W.t5,t)
inherit(P.rW,t)
inherit(P.qB,t)
inherit(P.tu,t)
inherit(P.tv,t)
inherit(P.ly,t)
inherit(P.th,t)
inherit(P.l5,t)
inherit(P.l6,t)
inherit(B.lv,t)
inherit(B.lu,t)
inherit(O.ld,t)
inherit(A.nb,t)
inherit(A.na,t)
inherit(G.n8,t)
inherit(U.qr,t)
inherit(U.qs,t)
inherit(A.ts,t)
inherit(A.nB,t)
inherit(A.nz,t)
inherit(A.nA,t)
inherit(A.nC,t)
inherit(O.tN,t)
inherit(O.tO,t)
inherit(O.tM,t)
inherit(V.lY,t)
inherit(V.lX,t)
inherit(V.lW,t)
inherit(V.lV,t)
inherit(D.pd,t)
inherit(D.pe,t)
inherit(D.pf,t)
inherit(Q.qo,t)
inherit(Q.qn,t)
t=H.qI
inherit(H.fP,t)
inherit(H.ip,t)
inherit(P.eV,P.jR)
inherit(H.ls,P.eV)
inherit(H.ha,H.lr)
inherit(H.lt,H.ha)
t=P.et
inherit(H.k0,t)
inherit(H.nh,t)
inherit(H.q4,t)
inherit(H.lm,t)
inherit(H.oQ,t)
inherit(P.hI,t)
inherit(P.fy,t)
inherit(P.cY,t)
inherit(P.S,t)
inherit(P.eT,t)
inherit(P.dd,t)
inherit(P.bJ,t)
inherit(P.lH,t)
t=H.pL
inherit(H.pc,t)
inherit(H.h4,t)
t=P.hF
inherit(H.qC,t)
inherit(T.fZ,t)
t=H.eK
inherit(H.nV,t)
inherit(H.jW,t)
t=H.jW
inherit(H.hV,t)
inherit(H.hW,t)
inherit(H.hX,H.hV)
inherit(H.hT,H.hX)
inherit(H.hY,H.hW)
inherit(H.hU,H.hY)
t=H.hT
inherit(H.nW,t)
inherit(H.nX,t)
t=H.hU
inherit(H.nY,t)
inherit(H.nZ,t)
inherit(H.o_,t)
inherit(H.o0,t)
inherit(H.o1,t)
inherit(H.jX,t)
inherit(H.fx,t)
t=P.kw
inherit(P.e3,t)
inherit(P.kJ,t)
t=P.ky
inherit(P.qR,t)
inherit(P.qT,t)
inherit(P.rQ,P.ry)
t=P.cJ
inherit(P.eZ,t)
inherit(W.r_,t)
inherit(P.f_,P.di)
t=P.eZ
inherit(P.t7,t)
inherit(P.rw,t)
inherit(P.rO,t)
inherit(P.rP,P.f_)
inherit(P.rC,P.ta)
inherit(P.kE,H.w)
inherit(P.oZ,P.p_)
inherit(P.rk,P.oZ)
inherit(P.kD,P.rk)
t=P.fb
inherit(P.la,t)
inherit(P.lU,t)
inherit(P.ni,t)
t=P.er
inherit(P.lb,t)
inherit(P.nl,t)
inherit(P.nk,t)
inherit(P.qe,t)
inherit(P.nj,P.hI)
inherit(P.rp,P.rq)
inherit(P.qd,P.lU)
t=P.dv
inherit(P.W,t)
inherit(P.D,t)
t=P.cY
inherit(P.eM,t)
inherit(P.mU,t)
inherit(P.qQ,P.kK)
t=W.ah
inherit(W.af,t)
inherit(W.hj,t)
inherit(W.lq,t)
inherit(W.mu,t)
inherit(W.mw,t)
inherit(W.mz,t)
inherit(W.hz,t)
inherit(W.hS,t)
inherit(W.ow,t)
inherit(W.k9,t)
inherit(W.p0,t)
inherit(W.eX,t)
inherit(W.cv,t)
inherit(W.hk,t)
inherit(W.cU,t)
inherit(W.cK,t)
inherit(W.hl,t)
inherit(W.qg,t)
inherit(W.ql,t)
inherit(W.kq,t)
inherit(W.qt,t)
inherit(W.rK,t)
inherit(P.lJ,t)
inherit(P.i_,t)
inherit(P.q_,t)
inherit(P.bC,t)
inherit(P.h3,t)
t=W.af
inherit(W.cp,t)
inherit(W.eq,t)
inherit(W.es,t)
inherit(W.iD,t)
inherit(W.fL,t)
inherit(W.qU,t)
t=W.cp
inherit(W.ay,t)
inherit(P.cf,t)
t=W.ay
inherit(W.f3,t)
inherit(W.l0,t)
inherit(W.jT,t)
inherit(W.lc,t)
inherit(W.f9,t)
inherit(W.h8,t)
inherit(W.lk,t)
inherit(W.iC,t)
inherit(W.lT,t)
inherit(W.mt,t)
inherit(W.iZ,t)
inherit(W.mQ,t)
inherit(W.fq,t)
inherit(W.mW,t)
inherit(W.nn,t)
inherit(W.hK,t)
inherit(W.nJ,t)
inherit(W.nP,t)
inherit(W.o8,t)
inherit(W.od,t)
inherit(W.oh,t)
inherit(W.fF,t)
inherit(W.ka,t)
inherit(W.p4,t)
inherit(W.i3,t)
inherit(W.kh,t)
inherit(W.pJ,t)
inherit(W.pK,t)
inherit(W.i7,t)
inherit(W.pO,t)
inherit(W.rg,t)
t=W.jT
inherit(W.f7,t)
inherit(W.qf,t)
inherit(W.hm,W.hj)
inherit(W.l8,W.hm)
t=W.bR
inherit(W.lz,t)
inherit(W.lA,t)
inherit(W.he,t)
inherit(W.hf,t)
inherit(W.lB,t)
inherit(W.lC,t)
inherit(W.lD,t)
inherit(W.fe,W.j2)
inherit(W.qN,W.k1)
inherit(W.lN,W.iF)
inherit(W.jn,W.j3)
inherit(W.iH,W.jn)
t=W.a_
inherit(W.lZ,t)
inherit(W.dI,t)
inherit(W.p8,t)
inherit(W.p9,t)
inherit(W.ch,W.f8)
inherit(W.jo,W.j4)
inherit(W.fn,W.jo)
inherit(W.jp,W.j5)
inherit(W.fo,W.jp)
inherit(W.j0,W.fo)
inherit(W.eh,W.hz)
t=W.eS
inherit(W.hJ,t)
inherit(W.ov,t)
inherit(W.nQ,W.hS)
inherit(W.jz,W.jf)
inherit(W.jV,W.jz)
inherit(W.eJ,W.dI)
inherit(W.jA,W.jg)
inherit(W.jZ,W.jA)
t=W.fJ
inherit(W.op,t)
inherit(W.oP,t)
inherit(W.q1,t)
inherit(W.jB,W.jh)
inherit(W.k6,W.jB)
inherit(W.p1,W.eX)
inherit(W.hn,W.hk)
inherit(W.kc,W.hn)
inherit(W.jC,W.ji)
inherit(W.kd,W.jC)
inherit(W.jD,W.jj)
inherit(W.pR,W.jD)
inherit(W.ho,W.hl)
inherit(W.pS,W.ho)
inherit(W.jE,W.jk)
inherit(W.kj,W.jE)
inherit(W.jF,W.jl)
inherit(W.ie,W.jF)
inherit(W.jG,W.jm)
inherit(W.kx,W.jG)
inherit(W.qV,W.iG)
inherit(W.jq,W.j6)
inherit(W.kB,W.jq)
inherit(W.jr,W.j7)
inherit(W.il,W.jr)
inherit(W.js,W.j8)
inherit(W.kG,W.js)
inherit(W.jt,W.j9)
inherit(W.kI,W.jt)
inherit(W.qW,W.qH)
t=P.lx
inherit(W.qX,t)
inherit(P.l4,t)
inherit(W.ig,W.r_)
inherit(W.r0,P.pi)
inherit(W.rY,W.im)
inherit(P.rV,P.rU)
inherit(P.kt,P.qA)
inherit(P.bM,P.rB)
t=P.cf
inherit(P.eg,t)
inherit(P.ep,t)
inherit(P.m1,t)
inherit(P.m2,t)
inherit(P.m3,t)
inherit(P.m4,t)
inherit(P.m5,t)
inherit(P.m6,t)
inherit(P.m7,t)
inherit(P.m8,t)
inherit(P.m9,t)
inherit(P.ma,t)
inherit(P.mb,t)
inherit(P.mc,t)
inherit(P.md,t)
inherit(P.me,t)
inherit(P.mf,t)
inherit(P.mg,t)
inherit(P.mh,t)
inherit(P.mi,t)
inherit(P.mx,t)
inherit(P.nN,t)
inherit(P.nO,t)
inherit(P.on,t)
inherit(P.i1,t)
inherit(P.pI,t)
inherit(P.qh,t)
inherit(P.ih,t)
inherit(P.rG,t)
inherit(P.rH,t)
inherit(P.rI,t)
t=P.eg
inherit(P.kX,t)
inherit(P.mB,t)
inherit(P.dC,t)
inherit(P.mR,t)
inherit(P.pG,t)
inherit(P.ki,t)
inherit(P.qc,t)
inherit(P.ju,P.ja)
inherit(P.nq,P.ju)
inherit(P.jv,P.jb)
inherit(P.o6,P.jv)
inherit(P.oI,P.dC)
inherit(P.jw,P.jc)
inherit(P.pC,P.jw)
t=P.ki
inherit(P.pQ,t)
inherit(P.i9,t)
inherit(P.jx,P.jd)
inherit(P.q0,P.jx)
t=P.bC
inherit(P.e8,t)
inherit(P.lw,t)
inherit(P.f6,P.e8)
inherit(P.jy,P.je)
inherit(P.ke,P.jy)
t=B.hC
inherit(S.kY,t)
inherit(M.l3,t)
inherit(A.lp,t)
inherit(M.lE,t)
inherit(V.lO,t)
inherit(U.mj,t)
inherit(N.nm,t)
inherit(F.nT,t)
inherit(G.ou,t)
inherit(Q.oO,t)
inherit(N.p6,t)
inherit(D.pM,t)
inherit(V.pN,t)
inherit(F.qu,t)
t=N.ad
inherit(T.lK,t)
inherit(R.oA,t)
t=T.lK
inherit(K.bT,t)
inherit(S.bD,t)
inherit(T.c0,t)
inherit(M.bA,t)
inherit(A.og,A.k2)
inherit(L.aV,A.og)
t=O.cc
inherit(O.dw,t)
inherit(O.iL,t)
inherit(O.eR,t)
t=O.dw
inherit(U.l7,t)
inherit(Y.oG,t)
inherit(V.mA,t)
inherit(Q.mS,t)
inherit(Q.oo,t)
inherit(M.pb,t)
inherit(B.qz,t)
t=U.l7
inherit(U.nG,t)
inherit(U.ob,t)
inherit(U.pz,O.iL)
t=U.pz
inherit(U.pA,t)
inherit(U.pB,t)
t=T.i0
inherit(O.l9,t)
inherit(Y.mG,t)
inherit(Y.mH,t)
inherit(B.mJ,t)
inherit(S.no,t)
inherit(Z.nF,t)
inherit(S.nH,t)
inherit(U.nI,t)
inherit(E.nS,t)
inherit(V.of,t)
inherit(N.oz,t)
inherit(N.oN,t)
inherit(E.oS,t)
inherit(Y.oU,t)
inherit(L.oV,t)
inherit(S.oX,t)
inherit(Y.p5,t)
inherit(R.pH,t)
inherit(U.pU,t)
inherit(E.qk,t)
inherit(M.qp,t)
t=O.eR
inherit(Y.pP,t)
inherit(Y.li,t)
inherit(Y.o7,t)
inherit(U.qq,t)
t=L.h0
inherit(T.le,t)
inherit(T.lg,t)
inherit(U.lP,t)
inherit(Z.lQ,t)
inherit(T.mI,t)
inherit(X.mL,t)
inherit(V.mV,t)
inherit(Q.np,t)
inherit(K.nr,t)
inherit(G.ns,t)
inherit(V.nR,t)
inherit(E.oE,t)
inherit(K.oT,t)
inherit(N.p7,t)
inherit(N.pV,t)
inherit(Q.qj,t)
t=S.bD
inherit(S.iw,t)
inherit(S.mM,t)
inherit(E.j_,E.oa)
t=E.P
inherit(E.h1,t)
inherit(E.l2,t)
inherit(Q.or,Q.mS)
inherit(S.v0,S.k3)
inherit(U.T,U.b)
t=R.oA
inherit(R.Z,t)
inherit(R.O,t)
inherit(R.a5,t)
inherit(R.bG,R.a5)
t=Y.e_
inherit(Y.a8,t)
inherit(Y.bW,t)
inherit(Y.R,t)
inherit(Y.iy,t)
inherit(Y.bF,t)
inherit(Y.d4,t)
inherit(Y.ln,t)
inherit(Y.hZ,t)
inherit(Y.iY,t)
inherit(Y.k5,t)
t=Y.bW
inherit(Y.dl,t)
inherit(Y.bE,t)
inherit(U.ai,A.a6)
t=G.a2
inherit(G.aJ,t)
inherit(G.bL,t)
inherit(G.d,t)
inherit(G.ae,G.bL)
t=D.cm
inherit(D.ks,t)
inherit(D.oK,t)
t=Q.cL
inherit(Q.ic,t)
inherit(Q.ib,t)
inherit(Q.dJ,Q.ic)
inherit(B.kr,Q.dJ)
t=S.fz
inherit(S.vy,t)
inherit(S.lj,t)
inherit(S.nt,t)
inherit(S.vd,t)
inherit(S.us,t)
t=S.lj
inherit(S.vq,t)
inherit(S.vm,t)
t=S.nt
inherit(S.u7,t)
inherit(S.tZ,t)
t=S.lF
inherit(S.v9,t)
inherit(S.lG,t)
inherit(S.oi,S.lG)
inherit(S.vC,S.oi)
t=S.lh
inherit(S.vr,t)
inherit(S.vD,t)
t=S.mF
inherit(S.vH,t)
inherit(S.vs,t)
inherit(S.ue,t)
inherit(S.vE,t)
t=S.pT
inherit(S.vJ,t)
inherit(S.u4,t)
inherit(S.vR,t)
t=S.hR
inherit(S.ve,t)
inherit(S.vg,t)
inherit(S.vz,t)
inherit(Q.en,Q.ib)
t=Q.en
inherit(Q.ko,t)
inherit(Q.kn,t)
mixin(H.ia,H.q5)
mixin(H.hV,P.aO)
mixin(H.hX,H.iW)
mixin(H.hW,P.aO)
mixin(H.hY,H.iW)
mixin(P.fA,P.aO)
mixin(P.eV,P.t0)
mixin(W.hj,P.aO)
mixin(W.hm,W.bv)
mixin(W.j2,W.iz)
mixin(W.k1,W.iz)
mixin(W.j3,P.aO)
mixin(W.jn,W.bv)
mixin(W.j4,P.aO)
mixin(W.jo,W.bv)
mixin(W.j5,P.aO)
mixin(W.jp,W.bv)
mixin(W.jf,P.aO)
mixin(W.jz,W.bv)
mixin(W.jg,P.aO)
mixin(W.jA,W.bv)
mixin(W.jh,P.aO)
mixin(W.jB,W.bv)
mixin(W.hk,P.aO)
mixin(W.hn,W.bv)
mixin(W.ji,P.aO)
mixin(W.jC,W.bv)
mixin(W.jj,P.aO)
mixin(W.jD,W.bv)
mixin(W.hl,P.aO)
mixin(W.ho,W.bv)
mixin(W.jk,P.aO)
mixin(W.jE,W.bv)
mixin(W.jl,P.aO)
mixin(W.jF,W.bv)
mixin(W.jm,P.aO)
mixin(W.jG,W.bv)
mixin(W.j6,P.aO)
mixin(W.jq,W.bv)
mixin(W.j7,P.aO)
mixin(W.jr,W.bv)
mixin(W.j8,P.aO)
mixin(W.js,W.bv)
mixin(W.j9,P.aO)
mixin(W.jt,W.bv)
mixin(P.ja,P.aO)
mixin(P.ju,W.bv)
mixin(P.jb,P.aO)
mixin(P.jv,W.bv)
mixin(P.jc,P.aO)
mixin(P.jw,W.bv)
mixin(P.jd,P.aO)
mixin(P.jx,W.bv)
mixin(P.je,P.aO)
mixin(P.jy,W.bv)
mixin(S.k3,P.nK)
mixin(A.k2,P.ei)
mixin(Q.ic,P.aO)
mixin(Q.ib,P.ei)})();(function constants(){C.w=W.f9.prototype
C.p=W.iC.prototype
C.S=W.eh.prototype
C.T=J.f.prototype
C.b=J.eD.prototype
C.f=J.jN.prototype
C.a=J.jO.prototype
C.d=J.fu.prototype
C.c=J.eE.prototype
C.a_=J.eF.prototype
C.u=H.fx.prototype
C.L=J.oq.prototype
C.M=W.kh.prototype
C.v=J.eU.prototype
C.O=new P.lb(!1)
C.N=new P.la(C.O)
C.i=new W.ix()
C.P=new P.oc()
C.Q=new P.qS()
C.R=new P.rm()
C.e=new P.rC()
C.x=new W.t_()
C.q=new P.dy(0)
C.U=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.y=function(hooks) { return hooks; }
C.V=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.W=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.X=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.z=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.Y=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.Z=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.A=new P.ni(null,null)
C.a0=new P.nk(null)
C.a1=new P.nl(null,null)
C.B=H.a(makeConstList([127,2047,65535,1114111]),[P.D])
C.C=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.j=makeConstList([0,0,32776,33792,1,10240,0,0])
C.a2=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.y])
C.k=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.l=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.a3=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.D=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.a4=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.a5=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.E=makeConstList([])
C.a7=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.F=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.G=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.H=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.I=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.J=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.K=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.r=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.y])
C.t=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.y])
C.h=new F.hO(0,"LogLevel.ERROR")
C.m=new F.hO(1,"LogLevel.WARN")
C.a8=new F.hO(3,"LogLevel.VERBOSE")
C.a6=H.a(makeConstList([]),[P.y])
C.a9=new H.ha(0,{},C.a6,[P.y,P.y])
C.aa=H.c1("bi")
C.ab=H.c1("Jc")
C.n=H.c1("Jd")
C.ac=H.c1("Je")
C.ad=H.c1("Jf")
C.ae=H.c1("Jh")
C.af=H.c1("Ji")
C.ag=H.c1("Jj")
C.ah=H.c1("ne")
C.ai=H.c1("da")
C.aj=H.c1("y")
C.ak=H.c1("Jm")
C.al=H.c1("Jn")
C.am=H.c1("Jo")
C.an=H.c1("dg")
C.ao=H.c1("cV")
C.ap=H.c1("W")
C.aq=H.c1("D")
C.ar=H.c1("dv")
C.o=new P.qd(!1)})();(function staticFields(){$.xV="$cachedFunction"
$.xW="$cachedInvocation"
$.dR=0
$.h5=null
$.wu=null
$.w6=null
$.yW=null
$.z8=null
$.tw=null
$.tE=null
$.w7=null
$.fR=null
$.iq=null
$.ir=null
$.w1=!1
$.ap=C.e
$.wN=0
$.eb=null
$.u8=null
$.wL=null
$.wK=null
$.wH=null
$.wG=null
$.wF=null
$.wI=null
$.wE=null
$.A1=null
$.A2=null
$.zP=null
$.zQ=null
$.zO=null
$.zS=null
$.zY=null
$.zX=null
$.A3=null
$.A_=null
$.zT=null
$.zW=null
$.zR=null
$.zV=null
$.A0=null
$.zU=null
$.zZ=null
$.b3="accent"
$.b5="aspect1"
$.b4="aspect2"
$.be="shoe1"
$.bd="shoe2"
$.b7="cloak1"
$.b8="cloak2"
$.b6="cloak3"
$.bc="shirt1"
$.bb="shirt2"
$.ba="pants1"
$.b9="pants2"
$.w5=null
$.an=1300
$.k=3
$.o=2
$.I=1
$.B=0.1
$.ee=1
$.cQ=-1
$.un=null
$.ec=null
$.wP=null
$.ew=null
$.fl=null
$.hr=null
$.uh=null
$.mn=null
$.up=null
$.iP=null
$.iO=null
$.wS=null
$.iV=null
$.fi=null
$.dU=null
$.wR=null
$.ml=null
$.ms=null
$.ez=null
$.AH=null
$.AE=null
$.AG=null
$.wQ=null
$.AI=null
$.hw=null
$.fg=null
$.cr=null
$.d_=null
$.ey=null
$.mr=null
$.cb=null
$.c3=null
$.uj=null
$.iU=null
$.ev=null
$.AF=null
$.fj=null
$.cP=null
$.ed=null
$.hu=null
$.dn=null
$.fk=null
$.c2=null
$.mp=null
$.wO=null
$.aQ=null
$.cC=null
$.cZ=null
$.cg=null
$.iT=null
$.c4=null
$.dz=null
$.dp=null
$.fh=null
$.dS=null
$.dq=null
$.mm=null
$.dB=null
$.hv=null
$.mo=null
$.mk=null
$.cO=null
$.cB=null
$.bf=null
$.eu=null
$.ex=null
$.mq=null
$.iQ=null
$.ht=null
$.ul=null
$.cq=null
$.uo=null
$.ui=null
$.wU=null
$.hs=null
$.cG=null
$.dT=null
$.dA=null
$.fm=null
$.uk=null
$.um=null
$.wT=null
$.iR=null
$.iS=null
$.eA=null
$.wV=!1
$.ur=null
$.AJ=null
$.wX=null
$.wZ=null
$.AS=null
$.wY=null
$.AQ=null
$.AR=null
$.uq=null
$.AN=null
$.AL=null
$.AM=null
$.AO=null
$.AP=null
$.B1=null
$.AV=null
$.AW=null
$.AX=null
$.AY=null
$.AZ=null
$.B_=null
$.B0=null
$.B3=null
$.B4=null
$.B5=null
$.B6=null
$.B7=null
$.B8=null
$.B2=null
$.xP="JACK"
$.Gv="PM"
$.Gr="JS"
$.Gq="HP"
$.GA="YD"
$.Gx="SI"
$.Gy="SU"
$.Gs="ME"
$.Gw="RB"
$.Go="GN"
$.Gt="MP"
$.Gm="AR"
$.Gu="PE"
$.Gn="DP"
$.Gz="WV"
$.Gp="HB"
$.m="PLAYER1TAG"
$.dG="PLAYER2TAG"
$.z="DENIZENTAG"
$.r="CONSORTTAG"
$.M="CONSORTSOUNDTAG"
$.ax="MCGUFFINTAG"
$.ac="TAGPHYSICALMCGUFFIN"
$.by="TAGWEAPON"
$.Hd=null
$.Hp=null
$.H9=null
$.Hc=null
$.Hg=null
$.Hl=null
$.Hj=null
$.Hs=null
$.Hr=null
$.Hk=null
$.Hu=null
$.Hf=null
$.Ht=null
$.Hn=null
$.Hm=null
$.Ho=null
$.Hb=null
$.Ha=null
$.Hi=null
$.Hh=null
$.He=null
$.Hq=null
$.z0=!1
$.IH=!1
$.Hv=!1
$.y1=null
$.HD=13
$.at=3
$.bO=2
$.aC=1
$.n9=0
$.J=1
$.a4=3
$.H=4
$.uW=6
$.uX=7
$.ab=8
$.v=9
$.q=10
$.xg=null
$.eC=null
$.n2=null
$.uS=null
$.uM=null
$.x6=null
$.uC=null
$.uL=null
$.hE=null
$.xe=null
$.xB=null
$.x9=null
$.xf=null
$.uD=null
$.uK=null
$.uU=null
$.xE=null
$.uz=null
$.jJ=null
$.jH=null
$.aD=null
$.xu=null
$.uy=null
$.xp=null
$.ft=null
$.x8=null
$.xF=null
$.xC=null
$.xA=null
$.uI=null
$.n1=null
$.fr=null
$.xD=null
$.n_=null
$.uF=null
$.hD=null
$.xy=null
$.dV=null
$.eB=null
$.uV=null
$.xz=null
$.uT=null
$.uQ=null
$.uR=null
$.n5=null
$.jI=null
$.Bz=null
$.xi=null
$.xo=null
$.xx=null
$.xw=null
$.uN=null
$.E=null
$.xd=null
$.n0=null
$.bU=null
$.b1=null
$.bV=null
$.X=null
$.aF=null
$.ce=null
$.L=null
$.Q=null
$.aw=null
$.aS=null
$.bX=null
$.bk=null
$.bt=null
$.ci=null
$.aU=null
$.bx=null
$.bZ=null
$.a0=null
$.FX=null
$.au=null
$.b_=null
$.aN=null
$.ak=null
$.cd=null
$.aL=null
$.as=null
$.bY=null
$.aT=null
$.ao=null
$.bj=null
$.c5=null
$.aE=null
$.bu=null
$.bs=null
$.a9=null
$.bS=null
$.aa=null
$.bg=null
$.bw=null
$.aI=null
$.aZ=null
$.az=null
$.b2=null
$.aG=null
$.Y=null
$.av=null
$.aB=null
$.aW=null
$.ar=null
$.aq=null
$.a3=null
$.U=null
$.V=null
$.al=null
$.aR=null
$.bl=null
$.aX=null
$.CT=null
$.Fz=null
$.G7=null
$.Co=null
$.Fw=null
$.CU=null
$.x4=null
$.FL=null
$.DU=null
$.CP=null
$.Bt=null
$.Eu=null
$.uO=null
$.xa=null
$.EU=null
$.Cl=null
$.DD=null
$.Cj=null
$.uA=null
$.C4=null
$.D5=null
$.Ct=null
$.DN=null
$.FT=null
$.CV=null
$.uB=null
$.DO=null
$.Cr=null
$.Ca=null
$.xt=null
$.Bm=null
$.x5=null
$.Dw=null
$.n3=null
$.E8=null
$.E2=null
$.Bq=null
$.Cd=null
$.F2=null
$.Bs=null
$.Fv=null
$.DC=null
$.CA=null
$.EO=null
$.Fp=null
$.uH=null
$.DY=null
$.EL=null
$.Cs=null
$.Bf=null
$.FW=null
$.DG=null
$.C9=null
$.FK=null
$.Eb=null
$.Cg=null
$.Fu=null
$.CK=null
$.Fa=null
$.Fb=null
$.Bo=null
$.E4=null
$.Cu=null
$.CE=null
$.Gb=null
$.n7=null
$.F1=null
$.Fs=null
$.n4=null
$.BZ=null
$.El=null
$.Ep=null
$.Bl=null
$.CJ=null
$.Ft=null
$.Ea=null
$.FN=null
$.EQ=null
$.Eq=null
$.xn=null
$.Fe=null
$.G1=null
$.Fy=null
$.Dj=null
$.EC=null
$.Dk=null
$.F3=null
$.G_=null
$.DM=null
$.CG=null
$.D2=null
$.BP=null
$.EM=null
$.D0=null
$.D7=null
$.Cw=null
$.Fd=null
$.fs=null
$.Ef=null
$.xl=null
$.Dl=null
$.Di=null
$.G4=null
$.BV=null
$.F_=null
$.F0=null
$.EZ=null
$.EY=null
$.Fl=null
$.D8=null
$.E5=null
$.Fo=null
$.DX=null
$.Eg=null
$.Cp=null
$.FZ=null
$.E3=null
$.CM=null
$.CN=null
$.Eo=null
$.Ga=null
$.DA=null
$.FY=null
$.xr=null
$.F9=null
$.DK=null
$.uP=null
$.Du=null
$.EE=null
$.BU=null
$.CQ=null
$.F5=null
$.E6=null
$.FS=null
$.xq=null
$.Ee=null
$.C0=null
$.Cm=null
$.EA=null
$.FF=null
$.F4=null
$.ux=null
$.xv=null
$.Fg=null
$.G0=null
$.Dh=null
$.BD=null
$.BM=null
$.FD=null
$.Ei=null
$.DV=null
$.Ej=null
$.FA=null
$.Dv=null
$.Bp=null
$.D6=null
$.DT=null
$.Fi=null
$.D_=null
$.BT=null
$.EW=null
$.EX=null
$.FQ=null
$.F7=null
$.uJ=null
$.xb=null
$.Ch=null
$.uE=null
$.Dp=null
$.xm=null
$.EG=null
$.E1=null
$.ES=null
$.uG=null
$.n6=null
$.xk=null
$.xc=null
$.CC=null
$.D4=null
$.xs=null
$.xh=null
$.Cc=null
$.FH=null
$.C5=null
$.Es=null
$.Dm=null
$.Fn=null
$.DW=null
$.BA=null
$.Dn=null
$.Cz=null
$.Ew=null
$.DF=null
$.E0=null
$.DL=null
$.DP=null
$.EV=null
$.ER=null
$.Bi=null
$.FE=null
$.EJ=null
$.Cq=null
$.Cv=null
$.D3=null
$.FB=null
$.CX=null
$.DH=null
$.BH=null
$.CR=null
$.Cy=null
$.Ek=null
$.CH=null
$.jK=null
$.DJ=null
$.x7=null
$.EF=null
$.Do=null
$.CY=null
$.Bg=null
$.Bn=null
$.Eh=null
$.Er=null
$.DE=null
$.Df=null
$.FV=null
$.BK=null
$.CZ=null
$.DI=null
$.Cn=null
$.Fk=null
$.Cb=null
$.F6=null
$.BI=null
$.FG=null
$.DR=null
$.BC=null
$.EP=null
$.EB=null
$.Ci=null
$.D9=null
$.C_=null
$.FC=null
$.Ds=null
$.FR=null
$.C1=null
$.Da=null
$.C2=null
$.Ck=null
$.EI=null
$.Ce=null
$.Dt=null
$.E7=null
$.BW=null
$.Fm=null
$.G6=null
$.Fc=null
$.DZ=null
$.Fj=null
$.E_=null
$.Bv=null
$.Bh=null
$.DS=null
$.BF=null
$.C3=null
$.Bw=null
$.BB=null
$.Ed=null
$.Ex=null
$.FJ=null
$.Dq=null
$.G5=null
$.EN=null
$.EK=null
$.Dx=null
$.Dr=null
$.C7=null
$.Dd=null
$.DQ=null
$.Em=null
$.Ff=null
$.Bk=null
$.G2=null
$.CF=null
$.Fq=null
$.Cx=null
$.Bu=null
$.BX=null
$.BO=null
$.G9=null
$.BY=null
$.CI=null
$.C6=null
$.FP=null
$.Fh=null
$.FI=null
$.Bj=null
$.ET=null
$.Dy=null
$.DB=null
$.FU=null
$.Fr=null
$.xj=null
$.CO=null
$.Ez=null
$.G3=null
$.CS=null
$.Dz=null
$.BS=null
$.Dg=null
$.De=null
$.F8=null
$.Ey=null
$.Db=null
$.BN=null
$.Fx=null
$.En=null
$.FM=null
$.G8=null
$.By=null
$.Bx=null
$.BJ=null
$.CL=null
$.EH=null
$.Cf=null
$.ED=null
$.CB=null
$.Br=null
$.BL=null
$.Ec=null
$.CD=null
$.Ev=null
$.BR=null
$.CW=null
$.FO=null
$.BE=null
$.D1=null
$.Et=null
$.BQ=null
$.Dc=null
$.E9=null
$.BG=null
$.C8=null
$.yr=4
$.ef="OWNER"
$.xM=!1
$.vc=null
$.za=""
$.y3=null
$.Hz=null
$.i6=null
$.eP=null
$.Hy=null
$.eQ=null
$.em=null
$.de=null
$.eO=null
$.i4=null
$.i5=null
$.dH=null
$.cx=null
$.y4=!1
$.HA=null})();(function lazyInitializers(){lazy($,"wC","$get$wC",function(){return H.z3("_$dart_dartClosure")})
lazy($,"v6","$get$v6",function(){return H.z3("_$dart_js")})
lazy($,"x2","$get$x2",function(){return H.Bd()})
lazy($,"x3","$get$x3",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.wN
$.wN=t+1
t="expando$key$"+t}return new P.m0(null,t,[P.D])})
lazy($,"y7","$get$y7",function(){return H.e1(H.q3({
toString:function(){return"$receiver$"}}))})
lazy($,"y8","$get$y8",function(){return H.e1(H.q3({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"y9","$get$y9",function(){return H.e1(H.q3(null))})
lazy($,"ya","$get$ya",function(){return H.e1(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ye","$get$ye",function(){return H.e1(H.q3(void 0))})
lazy($,"yf","$get$yf",function(){return H.e1(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"yc","$get$yc",function(){return H.e1(H.yd(null))})
lazy($,"yb","$get$yb",function(){return H.e1(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"yh","$get$yh",function(){return H.e1(H.yd(void 0))})
lazy($,"yg","$get$yg",function(){return H.e1(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"vX","$get$vX",function(){return P.HJ()})
lazy($,"hy","$get$hy",function(){return P.HQ(null,P.da)})
lazy($,"is","$get$is",function(){return[]})
lazy($,"yt","$get$yt",function(){return H.GB([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"yU","$get$yU",function(){return P.Ig()})
lazy($,"yw","$get$yw",function(){return P.jQ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"w_","$get$w_",function(){return P.jP()})
lazy($,"wB","$get$wB",function(){return P.ds("^\\S+$",!0,!1)})
lazy($,"ca","$get$ca",function(){return H.a([],[K.bT])})
lazy($,"l1","$get$l1",function(){return P.cD(P.D,L.h0)})
lazy($,"wc","$get$wc",function(){return O.z4("target",null)})
lazy($,"ww","$get$ww",function(){return P.ds("[\\/]",!0,!1)})
lazy($,"bQ","$get$bQ",function(){return H.a([],[S.bD])})
lazy($,"mC","$get$mC",function(){return P.cD(P.y,Z.iM)})
lazy($,"mX","$get$mX",function(){return P.cD(P.D,B.hC)})
lazy($,"xG","$get$xG",function(){return H.a([],[A.a6])})
lazy($,"xQ","$get$xQ",function(){return H.a([],[P.y])})
lazy($,"oR","$get$oR",function(){return P.cD(P.D,T.i0)})
lazy($,"ck","$get$ck",function(){return H.a([],[T.c0])})
lazy($,"bN","$get$bN",function(){return H.a([],[M.bA])})
lazy($,"am","$get$am",function(){return H.a([],[U.ai])})
lazy($,"y2","$get$y2",function(){return P.xK([0,new K.cH("Pixels -> Bytes",T.Iy(),T.Ix()),1,new K.cH("Pixels -> Packed bits",T.Iw(),T.Iv()),2,new K.cH("RLE 1 byte",V.uc(1),V.ub(1)),3,new K.cH("RLE 2 bytes",V.uc(2),V.ub(2)),4,new K.cH("RLE 3 bytes",V.uc(3),V.ub(3)),5,new K.cH("RLE packed 1 byte",V.ua(1),V.u9(1)),6,new K.cH("RLE packed 2 bytes",V.ua(2),V.u9(2)),7,new K.cH("RLE packed 3 bytes",V.ua(3),V.u9(3)),8,new K.cH("RLE dynamic",V.J4(),V.J3()),9,new K.cH("Exponential-Golomb pixels",F.IN(),F.IM()),10,new K.cH("Exponential-Golomb run RLE",F.IL(),F.IK()),11,new K.cH("Exponential-Golomb run/data RLE",F.IJ(),F.II())],P.D,K.cH)})
lazy($,"c","$get$c",function(){return P.a1(null,null,null,G.a2)})
lazy($,"yp","$get$yp",function(){return P.ds("[\n\r]+",!0,!1)})
lazy($,"yq","$get$yq",function(){return P.ds("( *)(.*)",!0,!1)})
lazy($,"yo","$get$yo",function(){return P.ds("^s*//",!0,!1)})
lazy($,"yn","$get$yn",function(){return P.ds("//",!0,!1)})
lazy($,"cM","$get$cM",function(){return new F.hP(!1,!1,"WordListFileFormat")})
lazy($,"ys","$get$ys",function(){return new T.qv(null)})
lazy($,"wr","$get$wr",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"d1","$get$d1",function(){return P.cD(P.y,Y.dZ)})
lazy($,"xN","$get$xN",function(){return P.ds("[\\/]",!0,!1)})
lazy($,"vb","$get$vb",function(){return P.cD(P.y,W.fF)})
lazy($,"vn","$get$vn",function(){return A.h9(255,0,255,255)})
lazy($,"om","$get$om",function(){return new F.hP(!1,!1,"Path Utils")})
lazy($,"ok","$get$ok",function(){return P.cD(P.eW,P.D)})
lazy($,"cI","$get$cI",function(){return H.a([],[D.cm])})
lazy($,"i8","$get$i8",function(){return P.ds("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fH","$get$fH",function(){return P.ds("\\\\(?!\\\\)",!0,!1)})
lazy($,"wD","$get$wD",function(){var t={color:16711935}
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
mangledGlobalNames:{D:"int",W:"double",dv:"num",y:"String",cV:"bool",da:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cV,args:[[P.p,E.j_]]},{func:1,v:true},{func:1,ret:P.dg,args:[P.bi,P.D,P.D,O.d2]},{func:1,ret:P.bi,args:[P.D,P.bi,P.bi,O.d2]},{func:1,v:true,args:[P.A]},{func:1,ret:P.y,args:[P.D]},{func:1,args:[,]},{func:1,ret:W.af},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.af,args:[P.D]},{func:1,ret:W.cp,args:[P.D]},{func:1,ret:W.cu,args:[P.D]},{func:1,v:true,args:[P.A],opt:[P.e0]},{func:1,ret:P.cV,args:[W.cp,P.y,P.y,W.ii]},{func:1,ret:P.y,args:[P.y]},{func:1,ret:W.ch,args:[P.D]},{func:1,ret:P.cV,args:[P.A]},{func:1,ret:P.cs},{func:1,ret:W.cj,args:[P.D]},{func:1,ret:W.cv,args:[P.D]},{func:1,ret:W.cw,args:[P.D]},{func:1,ret:W.fG,args:[P.D]},{func:1,ret:W.cy,args:[P.D]},{func:1,ret:W.fI,args:[P.D]},{func:1,ret:W.fK,args:[P.D]},{func:1,ret:P.bM,args:[P.D]},{func:1,ret:W.bR,args:[P.D]},{func:1,ret:P.y,args:[P.dE]},{func:1,ret:W.fL,args:[P.D]},{func:1,ret:W.cl,args:[P.D]},{func:1,ret:W.cn,args:[P.D]},{func:1,ret:P.aK,args:[P.D]},{func:1,ret:P.D,args:[P.bI,P.bI]},{func:1,v:true,args:[,P.e0]},{func:1,v:true,args:[P.y]},{func:1,ret:W.ff,args:[P.D]},{func:1,ret:W.ct,args:[P.D]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,Clients:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,CredentialsContainer:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,EffectModel:J.f,Stream:J.f,FormData:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCSessionDescription:J.f,mozRTCSessionDescription:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,StylePropertyMap:J.f,SyncManager:J.f,TextMetrics:J.f,UnderlyingSourceBase:J.f,URLSearchParams:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPreserveAspectRatio:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fw,ArrayBufferView:H.eK,DataView:H.nV,Float32Array:H.nW,Float64Array:H.nX,Int16Array:H.nY,Int32Array:H.nZ,Int8Array:H.o_,Uint16Array:H.o0,Uint32Array:H.o1,Uint8ClampedArray:H.jX,CanvasPixelArray:H.jX,Uint8Array:H.fx,HTMLBRElement:W.ay,HTMLContentElement:W.ay,HTMLDListElement:W.ay,HTMLDataListElement:W.ay,HTMLDetailsElement:W.ay,HTMLDialogElement:W.ay,HTMLHRElement:W.ay,HTMLHeadElement:W.ay,HTMLHeadingElement:W.ay,HTMLHtmlElement:W.ay,HTMLLIElement:W.ay,HTMLLabelElement:W.ay,HTMLLegendElement:W.ay,HTMLMenuElement:W.ay,HTMLMenuItemElement:W.ay,HTMLMeterElement:W.ay,HTMLModElement:W.ay,HTMLOListElement:W.ay,HTMLOptGroupElement:W.ay,HTMLOptionElement:W.ay,HTMLParagraphElement:W.ay,HTMLPictureElement:W.ay,HTMLPreElement:W.ay,HTMLProgressElement:W.ay,HTMLQuoteElement:W.ay,HTMLShadowElement:W.ay,HTMLSourceElement:W.ay,HTMLStyleElement:W.ay,HTMLTableCaptionElement:W.ay,HTMLTableCellElement:W.ay,HTMLTableDataCellElement:W.ay,HTMLTableHeaderCellElement:W.ay,HTMLTableColElement:W.ay,HTMLTitleElement:W.ay,HTMLTrackElement:W.ay,HTMLUListElement:W.ay,HTMLUnknownElement:W.ay,HTMLDirectoryElement:W.ay,HTMLFontElement:W.ay,HTMLFrameElement:W.ay,HTMLMarqueeElement:W.ay,HTMLElement:W.ay,HTMLAnchorElement:W.f3,HTMLAreaElement:W.l0,HTMLAudioElement:W.f7,AudioTrack:W.cN,AudioTrackList:W.l8,HTMLBaseElement:W.lc,Blob:W.f8,HTMLBodyElement:W.f9,HTMLButtonElement:W.h8,CacheStorage:W.iu,HTMLCanvasElement:W.lk,CanvasRenderingContext2D:W.ll,CDATASection:W.eq,CharacterData:W.eq,Comment:W.eq,ProcessingInstruction:W.eq,Text:W.eq,CompositorWorker:W.lq,Credential:W.hd,FederatedCredential:W.hd,PasswordCredential:W.hd,CSSFontFaceRule:W.lz,CSSImportRule:W.lA,CSSKeyframeRule:W.he,MozCSSKeyframeRule:W.he,WebKitCSSKeyframeRule:W.he,CSSKeyframesRule:W.hf,MozCSSKeyframesRule:W.hf,WebKitCSSKeyframesRule:W.hf,CSSPageRule:W.lB,CSSCharsetRule:W.bR,CSSGroupingRule:W.bR,CSSMediaRule:W.bR,CSSNamespaceRule:W.bR,CSSSupportsRule:W.bR,CSSRule:W.bR,CSSStyleDeclaration:W.fe,MSStyleCSSProperties:W.fe,CSS2Properties:W.fe,CSSStyleRule:W.lC,CSSViewportRule:W.lD,DataTransfer:W.lI,DataTransferItem:W.ff,DataTransferItemList:W.iA,DeviceAcceleration:W.lL,HTMLDivElement:W.iC,Document:W.es,HTMLDocument:W.es,XMLDocument:W.es,DocumentFragment:W.iD,ShadowRoot:W.iD,DOMError:W.iE,FileError:W.iE,DOMException:W.lM,DOMPoint:W.lN,DOMPointReadOnly:W.iF,DOMRectReadOnly:W.iG,DOMStringList:W.iH,DOMStringMap:W.iI,DOMTokenList:W.iJ,Element:W.cp,HTMLEmbedElement:W.lT,DirectoryEntry:W.hi,Entry:W.hi,FileEntry:W.hi,ErrorEvent:W.lZ,AnimationEvent:W.a_,AnimationPlayerEvent:W.a_,ApplicationCacheErrorEvent:W.a_,AutocompleteErrorEvent:W.a_,BeforeInstallPromptEvent:W.a_,BeforeUnloadEvent:W.a_,BlobEvent:W.a_,ClipboardEvent:W.a_,CloseEvent:W.a_,CustomEvent:W.a_,DeviceLightEvent:W.a_,DeviceMotionEvent:W.a_,DeviceOrientationEvent:W.a_,ExtendableEvent:W.a_,ExtendableMessageEvent:W.a_,FetchEvent:W.a_,FontFaceSetLoadEvent:W.a_,GamepadEvent:W.a_,GeofencingEvent:W.a_,HashChangeEvent:W.a_,InstallEvent:W.a_,MediaEncryptedEvent:W.a_,MediaKeyMessageEvent:W.a_,MediaQueryListEvent:W.a_,MediaStreamEvent:W.a_,MediaStreamTrackEvent:W.a_,MessageEvent:W.a_,MIDIConnectionEvent:W.a_,MIDIMessageEvent:W.a_,NotificationEvent:W.a_,PageTransitionEvent:W.a_,PopStateEvent:W.a_,PresentationConnectionAvailableEvent:W.a_,PresentationConnectionCloseEvent:W.a_,ProgressEvent:W.a_,PromiseRejectionEvent:W.a_,PushEvent:W.a_,RelatedEvent:W.a_,RTCDataChannelEvent:W.a_,RTCDTMFToneChangeEvent:W.a_,RTCIceCandidateEvent:W.a_,RTCPeerConnectionIceEvent:W.a_,SecurityPolicyViolationEvent:W.a_,ServicePortConnectEvent:W.a_,ServiceWorkerMessageEvent:W.a_,SpeechRecognitionEvent:W.a_,StorageEvent:W.a_,SyncEvent:W.a_,TrackEvent:W.a_,TransitionEvent:W.a_,WebKitTransitionEvent:W.a_,ResourceProgressEvent:W.a_,USBConnectionEvent:W.a_,IDBVersionChangeEvent:W.a_,AudioProcessingEvent:W.a_,OfflineAudioCompletionEvent:W.a_,WebGLContextEvent:W.a_,Event:W.a_,InputEvent:W.a_,Animation:W.ah,ApplicationCache:W.ah,DOMApplicationCache:W.ah,OfflineResourceList:W.ah,BatteryManager:W.ah,CanvasCaptureMediaStreamTrack:W.ah,CrossOriginServiceWorkerClient:W.ah,EventSource:W.ah,MediaKeySession:W.ah,MediaQueryList:W.ah,MediaRecorder:W.ah,MediaSource:W.ah,MediaStream:W.ah,MediaStreamTrack:W.ah,MessagePort:W.ah,MIDIAccess:W.ah,NetworkInformation:W.ah,Notification:W.ah,Performance:W.ah,PermissionStatus:W.ah,PresentationAvailability:W.ah,PresentationReceiver:W.ah,PresentationRequest:W.ah,RTCDTMFSender:W.ah,RTCPeerConnection:W.ah,webkitRTCPeerConnection:W.ah,mozRTCPeerConnection:W.ah,ScreenOrientation:W.ah,ServicePortCollection:W.ah,ServiceWorkerContainer:W.ah,ServiceWorkerRegistration:W.ah,SpeechRecognition:W.ah,SpeechSynthesis:W.ah,SpeechSynthesisUtterance:W.ah,WorkerPerformance:W.ah,BluetoothDevice:W.ah,BluetoothRemoteGATTCharacteristic:W.ah,USB:W.ah,EventTarget:W.ah,HTMLFieldSetElement:W.mt,File:W.ch,FileList:W.fn,FileReader:W.mu,DOMFileSystem:W.mv,FileWriter:W.mw,FontFace:W.my,FontFaceSet:W.mz,HTMLFormElement:W.iZ,Gamepad:W.ct,History:W.mK,HTMLOptionsCollection:W.fo,HTMLCollection:W.fo,HTMLFormControlsCollection:W.j0,XMLHttpRequest:W.eh,XMLHttpRequestUpload:W.hz,XMLHttpRequestEventTarget:W.hz,HTMLIFrameElement:W.mQ,ImageData:W.hA,HTMLImageElement:W.fq,HTMLInputElement:W.mW,HTMLKeygenElement:W.nn,CalcLength:W.hJ,LengthValue:W.hJ,SimpleLength:W.hJ,HTMLLinkElement:W.hK,Location:W.nE,HTMLMapElement:W.nJ,HTMLMediaElement:W.jT,MediaList:W.jU,HTMLMetaElement:W.nP,MIDIOutput:W.nQ,MIDIInput:W.hS,MIDIPort:W.hS,MimeType:W.cu,MimeTypeArray:W.jV,MouseEvent:W.eJ,DragEvent:W.eJ,PointerEvent:W.eJ,WheelEvent:W.eJ,Navigator:W.o2,NavigatorUserMediaError:W.o3,Node:W.af,NodeIterator:W.jY,NodeList:W.jZ,RadioNodeList:W.jZ,HTMLObjectElement:W.o8,HTMLOutputElement:W.od,HTMLParamElement:W.oh,Path2D:W.oj,PerformanceCompositeTiming:W.ek,PerformanceEntry:W.ek,PerformanceMark:W.ek,PerformanceMeasure:W.ek,PerformanceRenderTiming:W.ek,PerformanceResourceTiming:W.ek,Perspective:W.op,Plugin:W.cj,PluginArray:W.k6,PositionValue:W.ov,PresentationConnection:W.ow,Range:W.oF,Rotation:W.oP,RTCDataChannel:W.k9,DataChannel:W.k9,HTMLScriptElement:W.fF,HTMLSelectElement:W.ka,ServicePort:W.oY,SharedWorker:W.p0,SharedWorkerGlobalScope:W.p1,HTMLSlotElement:W.p4,SourceBuffer:W.cv,SourceBufferList:W.kc,HTMLSpanElement:W.i3,SpeechGrammar:W.cw,SpeechGrammarList:W.kd,SpeechRecognitionAlternative:W.fG,SpeechRecognitionError:W.p8,SpeechRecognitionResult:W.cl,SpeechSynthesisEvent:W.p9,SpeechSynthesisVoice:W.pa,Storage:W.pg,CSSStyleSheet:W.cn,StyleSheet:W.cn,KeywordValue:W.eS,NumberValue:W.eS,TransformValue:W.eS,StyleValue:W.eS,HTMLTableElement:W.kh,HTMLTableRowElement:W.pJ,HTMLTableSectionElement:W.pK,HTMLTemplateElement:W.i7,HTMLTextAreaElement:W.pO,TextTrack:W.cU,TextTrackCue:W.cK,VTTCue:W.cK,TextTrackCueList:W.pR,TextTrackList:W.pS,TimeRanges:W.pW,Touch:W.cy,TouchList:W.kj,TrackDefault:W.fI,TrackDefaultList:W.kk,Matrix:W.fJ,Skew:W.fJ,TransformComponent:W.fJ,Translation:W.q1,TreeWalker:W.kl,CompositionEvent:W.dI,FocusEvent:W.dI,KeyboardEvent:W.dI,TextEvent:W.dI,TouchEvent:W.dI,SVGZoomEvent:W.dI,UIEvent:W.dI,URL:W.qb,HTMLVideoElement:W.qf,VideoTrackList:W.qg,VTTRegion:W.fK,VTTRegionList:W.km,WebSocket:W.ql,Window:W.kq,DOMWindow:W.kq,Worker:W.qt,CompositorWorkerGlobalScope:W.eX,DedicatedWorkerGlobalScope:W.eX,ServiceWorkerGlobalScope:W.eX,WorkerGlobalScope:W.eX,Attr:W.fL,ClientRect:W.qL,ClientRectList:W.ie,DOMRectList:W.ie,CSSRuleList:W.kx,DocumentType:W.qU,DOMRect:W.qV,GamepadList:W.kB,HTMLFrameSetElement:W.rg,NamedNodeMap:W.il,MozNamedAttrMap:W.il,ServiceWorker:W.rK,SpeechRecognitionResultList:W.kG,StyleSheetList:W.kI,WorkerLocation:W.t8,WorkerNavigator:W.t9,IDBDatabase:P.lJ,IDBIndex:P.mT,IDBObjectStore:P.o9,IDBOpenDBRequest:P.i_,IDBVersionChangeRequest:P.i_,IDBRequest:P.i_,IDBTransaction:P.q_,SVGAElement:P.kX,SVGAnimateElement:P.ep,SVGAnimateMotionElement:P.ep,SVGAnimateTransformElement:P.ep,SVGAnimationElement:P.ep,SVGSetElement:P.ep,SVGFEBlendElement:P.m1,SVGFEColorMatrixElement:P.m2,SVGFEComponentTransferElement:P.m3,SVGFECompositeElement:P.m4,SVGFEConvolveMatrixElement:P.m5,SVGFEDiffuseLightingElement:P.m6,SVGFEDisplacementMapElement:P.m7,SVGFEFloodElement:P.m8,SVGFEGaussianBlurElement:P.m9,SVGFEImageElement:P.ma,SVGFEMergeElement:P.mb,SVGFEMorphologyElement:P.mc,SVGFEOffsetElement:P.md,SVGFEPointLightElement:P.me,SVGFESpecularLightingElement:P.mf,SVGFESpotLightElement:P.mg,SVGFETileElement:P.mh,SVGFETurbulenceElement:P.mi,SVGFilterElement:P.mx,SVGForeignObjectElement:P.mB,SVGCircleElement:P.dC,SVGEllipseElement:P.dC,SVGLineElement:P.dC,SVGPathElement:P.dC,SVGPolygonElement:P.dC,SVGPolylineElement:P.dC,SVGGeometryElement:P.dC,SVGClipPathElement:P.eg,SVGDefsElement:P.eg,SVGGElement:P.eg,SVGSwitchElement:P.eg,SVGGraphicsElement:P.eg,SVGImageElement:P.mR,SVGLength:P.d9,SVGLengthList:P.nq,SVGMarkerElement:P.nN,SVGMaskElement:P.nO,SVGNumber:P.db,SVGNumberList:P.o6,SVGPatternElement:P.on,SVGPoint:P.os,SVGPointList:P.ot,SVGRect:P.oH,SVGRectElement:P.oI,SVGScriptElement:P.i1,SVGStringList:P.pC,SVGDescElement:P.cf,SVGDiscardElement:P.cf,SVGFEDistantLightElement:P.cf,SVGFEFuncAElement:P.cf,SVGFEFuncBElement:P.cf,SVGFEFuncGElement:P.cf,SVGFEFuncRElement:P.cf,SVGFEMergeNodeElement:P.cf,SVGMetadataElement:P.cf,SVGStopElement:P.cf,SVGStyleElement:P.cf,SVGTitleElement:P.cf,SVGComponentTransferFunctionElement:P.cf,SVGElement:P.cf,SVGSVGElement:P.pG,SVGSymbolElement:P.pI,SVGTextContentElement:P.ki,SVGTextPathElement:P.pQ,SVGTSpanElement:P.i9,SVGTextElement:P.i9,SVGTextPositioningElement:P.i9,SVGTransform:P.df,SVGTransformList:P.q0,SVGUseElement:P.qc,SVGViewElement:P.qh,SVGViewSpec:P.qi,SVGLinearGradientElement:P.ih,SVGRadialGradientElement:P.ih,SVGGradientElement:P.ih,SVGCursorElement:P.rG,SVGFEDropShadowElement:P.rH,SVGMPathElement:P.rI,AudioBuffer:P.h2,AudioBufferSourceNode:P.f6,AudioContext:P.h3,webkitAudioContext:P.h3,OfflineAudioContext:P.h3,AnalyserNode:P.bC,RealtimeAnalyserNode:P.bC,AudioDestinationNode:P.bC,BiquadFilterNode:P.bC,ChannelMergerNode:P.bC,AudioChannelMerger:P.bC,ChannelSplitterNode:P.bC,AudioChannelSplitter:P.bC,DelayNode:P.bC,DynamicsCompressorNode:P.bC,GainNode:P.bC,AudioGainNode:P.bC,IIRFilterNode:P.bC,MediaStreamAudioDestinationNode:P.bC,PannerNode:P.bC,AudioPannerNode:P.bC,webkitAudioPannerNode:P.bC,ScriptProcessorNode:P.bC,JavaScriptAudioNode:P.bC,StereoPannerNode:P.bC,WaveShaperNode:P.bC,AudioNode:P.bC,MediaElementAudioSourceNode:P.e8,MediaStreamAudioSourceNode:P.e8,OscillatorNode:P.e8,Oscillator:P.e8,AudioSourceNode:P.e8,ConvolverNode:P.lw,WebGLActiveInfo:P.kZ,WebGLRenderingContext:P.oL,WebGL2RenderingContext:P.oM,WebGL2RenderingContextBase:P.t6,SQLResultSetRowList:P.ke})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CacheStorage:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jW.$nativeSuperclassTag="ArrayBufferView"
H.hV.$nativeSuperclassTag="ArrayBufferView"
H.hX.$nativeSuperclassTag="ArrayBufferView"
H.hT.$nativeSuperclassTag="ArrayBufferView"
H.hW.$nativeSuperclassTag="ArrayBufferView"
H.hY.$nativeSuperclassTag="ArrayBufferView"
H.hU.$nativeSuperclassTag="ArrayBufferView"
W.hj.$nativeSuperclassTag="EventTarget"
W.hm.$nativeSuperclassTag="EventTarget"
W.hk.$nativeSuperclassTag="EventTarget"
W.hn.$nativeSuperclassTag="EventTarget"
W.hl.$nativeSuperclassTag="EventTarget"
W.ho.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.zb(E.ws(),b)},[])
else (function(b){H.zb(E.ws(),b)})([])})})()
//# sourceMappingURL=BBBController.dart.js.map
