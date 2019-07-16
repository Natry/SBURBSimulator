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
a[c]=function(){a[c]=function(){H.HF(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.uZ"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.uZ"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.uZ(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={u_:function u_(a){this.a=a},
rs:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
wU:function(a,b,c,d){var t=new H.oQ(a,b,c,[d])
t.eT(a,b,c,d)
return t},
dk:function(a,b,c,d){if(!!J.ar(a).$ist)return new H.h4(a,b,[c,d])
return new H.hA(a,b,[c,d])},
js:function(){return new P.dW("No element")},
wt:function(){return new P.dW("Too few elements")},
jN:function(a,b,c,d){if(c-b<=32)H.G8(a,b,c,d)
else H.G7(a,b,c,d)},
G8:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.be(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cz(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
G7:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.ao(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.ao(a3+a4,2)
p=q-t
o=q+t
n=J.be(a2)
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
if(J.aY(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.ar(c)
if(b.R(c,0))continue
if(b.a1(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dC(c)
if(b.aF(c,0)){--f
continue}else{a=f-1
if(b.a1(c,0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.eh(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cz(a5.$2(d,j),0))for(;!0;)if(J.cz(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eh(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.jN(a2,a3,g-2,a5)
H.jN(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.aY(a5.$2(n.n(a2,g),l),0);)++g
for(;J.aY(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.aY(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.aY(a5.$2(d,j),0))for(;!0;)if(J.aY(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eh(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jN(a2,g,f,a5)}else H.jN(a2,g,f,a5)},
kR:function kR(a){this.a=a},
t:function t(){},
ey:function ey(){},
oQ:function oQ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
dQ:function dQ(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hA:function hA(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
h4:function h4(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jy:function jy(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fm:function fm(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hZ:function hZ(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jX:function jX(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iD:function iD(){},
ph:function ph(){},
hW:function hW(){},
kg:function(a,b){var t=a.bt(b)
if(!u.globalState.d.cy)u.globalState.f.bD()
return t},
xZ:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ar(s).$isp)throw H.k(P.dF("Arguments to main must be a List: "+H.y(s)))
u.globalState=new H.qy(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vP()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.q4(P.u5(null,H.eR),0)
r=P.C
s.z=new H.v(0,null,null,null,null,null,0,[r,H.fC])
s.ch=new H.v(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qx()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.zP,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.Gu)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a3(null,null,null,r)
p=new H.ft(0,null,!1)
o=new H.fC(s,new H.v(0,null,null,null,null,null,0,[r,H.ft]),q,u.createNewIsolate(),p,new H.dH(H.rH()),new H.dH(H.rH()),!1,!1,[],P.a3(null,null,null,null),null,null,!1,!0,P.a3(null,null,null,null))
q.h(0,0)
o.de(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fI(a,{func:1,args:[,]}))o.bt(new H.rI(t,a))
else if(H.fI(a,{func:1,args:[,,]}))o.bt(new H.rJ(t,a))
else o.bt(a)
u.globalState.f.bD()},
Gu:function(a){var t=P.hx(["command","print","msg",a])
return new H.dB(!0,P.i4(null,P.C)).az(t)},
zR:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.zS()
return},
zS:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.k(new P.V("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.k(new P.V('Cannot extract URI from "'+t+'"'))},
zP:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eP(!0,[]).aY(b.data)
s=J.be(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eP(!0,[]).aY(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eP(!0,[]).aY(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.C
j=P.a3(null,null,null,k)
i=new H.ft(0,null,!1)
h=new H.fC(s,new H.v(0,null,null,null,null,null,0,[k,H.ft]),j,u.createNewIsolate(),i,new H.dH(H.rH()),new H.dH(H.rH()),!1,!1,[],P.a3(null,null,null,null),null,null,!1,!0,P.a3(null,null,null,null))
j.h(0,0)
h.de(0,i)
u.globalState.f.a.aM(0,new H.eR(h,new H.mm(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bD()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fM(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bD()
break
case"close":u.globalState.ch.ae(0,$.$get$vQ().n(0,a))
a.terminate()
u.globalState.f.bD()
break
case"log":H.zO(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hx(["command","print","msg",t])
k=new H.dB(!0,P.i4(null,P.C)).az(k)
s.toString
self.postMessage(k)}else P.fJ(s.n(t,"msg"))
break
case"error":throw H.k(s.n(t,"msg"))}},
zO:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hx(["command","log","msg",a])
r=new H.dB(!0,P.i4(null,P.C)).az(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.co(q)
t=H.cn(q)
s=P.lp(t)
throw H.k(s)}},
zQ:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wI=$.wI+("_"+s)
$.wJ=$.wJ+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fM(f,["spawned",new H.fD(s,r),q,t.r])
r=new H.mn(a,b,c,d,t)
if(e===!0){t.dU(q,q)
u.globalState.f.a.aM(0,new H.eR(t,r,"start isolate"))}else r.$0()},
Gf:function(a,b){var t=new H.p8(!0,!1,null)
t.eU(a,b)
return t},
GN:function(a){return new H.eP(!0,[]).aY(new H.dB(!1,P.i4(null,P.C)).az(a))},
rI:function rI(a,b){this.a=a
this.b=b},
rJ:function rJ(a,b){this.a=a
this.b=b},
qy:function qy(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
fC:function fC(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
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
qt:function qt(a,b){this.a=a
this.b=b},
q4:function q4(a,b){this.a=a
this.b=b},
q5:function q5(a){this.a=a},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
qx:function qx(){},
mm:function mm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mn:function mn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pS:function pS(){},
fD:function fD(b,a){this.b=b
this.a=a},
qA:function qA(a,b){this.a=a
this.b=b},
i7:function i7(b,c,a){this.b=b
this.c=c
this.a=a},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
p8:function p8(a,b,c){this.a=a
this.b=b
this.c=c},
p9:function p9(a,b){this.a=a
this.b=b},
pa:function pa(a,b){this.a=a
this.b=b},
dH:function dH(a){this.a=a},
dB:function dB(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
yU:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=a.gax(a)
s=P.cW(t,!0,H.ao(t,"o",0))
t=s.length
q=0
while(!0){p=s.length
if(!(q<p)){r=!0
break}o=s[q]
if(typeof o!=="string"){r=!1
break}p===t||(0,H.bH)(s);++q}if(r){n={}
for(m=!1,l=null,k=0,q=0;q<s.length;s.length===p||(0,H.bH)(s),++q){o=s[q]
j=a.n(0,o)
if(!J.aY(o,"__proto__")){if(!n.hasOwnProperty(o))++k
n[o]=j}else{l=j
m=!0}}if(m)return new H.kW(l,k+1,n,s,[b,c])
return new H.fZ(k,n,s,[b,c])}return new H.kV(P.ES(a,null,null),[b,c])},
yV:function(){throw H.k(new P.V("Cannot modify unmodifiable Map"))},
Hl:function(a){return u.types[a]},
xU:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ar(a).$isaG},
y:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cK(a)
if(typeof t!=="string")throw H.k(H.by(a))
return t},
FI:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.nX(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eA:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ur:function(a,b){if(b==null)throw H.k(new P.bO(a,null,null))
return b.$1(a)},
fr:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.ur(a,c)
if(3>=t.length)return H.w(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.ur(a,c)}if(b<2||b>36)throw H.k(P.bG(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a2(q,o)|32)>r)return H.ur(a,c)}return parseInt(a,b)},
wG:function(a,b){return b.$1(a)},
wK:function(a,b){var t,s
H.xM(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wG(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.rS(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wG(a,b)}return t},
nP:function(a){var t,s,r,q,p,o,n,m
t=J.ar(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.ar(a).$iseJ){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a2(q,0)===36)q=C.c.ag(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.rC(H.kk(a),0,null),u.mangledGlobalNames)},
nO:function(a){return"Instance of '"+H.nP(a)+"'"},
Ff:function(){if(!!self.location)return self.location.href
return},
wF:function(a){var t,s,r,q,p
t=J.c2(a)
if(typeof t!=="number")return t.ew()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Fk:function(a){var t,s,r,q
t=H.a([],[P.C])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bH)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.by(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aX(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.k(H.by(q))}return H.wF(t)},
wM:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bH)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.by(q))
if(q<0)throw H.k(H.by(q))
if(q>65535)return H.Fk(a)}return H.wF(a)},
Fl:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.ew()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hM:function(a){var t
if(typeof a!=="number")return H.a8(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aX(t,10))>>>0,56320|t&1023)}}throw H.k(P.bG(a,0,1114111,null,null))},
cZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
wH:function(a){return a.b?H.cZ(a).getUTCFullYear()+0:H.cZ(a).getFullYear()+0},
nN:function(a){return a.b?H.cZ(a).getUTCMonth()+1:H.cZ(a).getMonth()+1},
nM:function(a){return a.b?H.cZ(a).getUTCDate()+0:H.cZ(a).getDate()+0},
Fg:function(a){return a.b?H.cZ(a).getUTCHours()+0:H.cZ(a).getHours()+0},
Fi:function(a){return a.b?H.cZ(a).getUTCMinutes()+0:H.cZ(a).getMinutes()+0},
Fj:function(a){return a.b?H.cZ(a).getUTCSeconds()+0:H.cZ(a).getSeconds()+0},
Fh:function(a){return a.b?H.cZ(a).getUTCMilliseconds()+0:H.cZ(a).getMilliseconds()+0},
us:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.by(a))
return a[b]},
wL:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.by(a))
a[b]=c},
a8:function(a){throw H.k(H.by(a))},
w:function(a,b){if(a==null)J.c2(a)
throw H.k(H.c7(a,b))},
c7:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.d3(!0,b,"index",null)
t=J.c2(a)
if(!(b<0)){if(typeof t!=="number")return H.a8(t)
s=b>=t}else s=!0
if(s)return P.bA(b,a,"index",null,t)
return P.jK(b,"index",null)},
Hb:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.d3(!0,a,"start",null)
if(a<0||a>c)return new P.eB(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.d3(!0,b,"end",null)
if(b<a||b>c)return new P.eB(a,c,!0,b,"end","Invalid value")}return new P.d3(!0,b,"end",null)},
by:function(a){return new P.d3(!0,a,null,null)},
ki:function(a){if(typeof a!=="number")throw H.k(H.by(a))
return a},
uY:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(H.by(a))
return a},
xM:function(a){if(typeof a!=="string")throw H.k(H.by(a))
return a},
k:function(a){var t
if(a==null)a=new P.fp()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.y_})
t.name=""}else t.toString=H.y_
return t},
y_:function(){return J.cK(this.dartException)},
b0:function(a){throw H.k(a)},
bH:function(a){throw H.k(new P.bR(a))},
dX:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pe(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pf:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
x4:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
u1:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mG(a,s,t?null:b.receiver)},
co:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.rK(a)
if(a==null)return
if(a instanceof H.hc)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aX(r,16)&8191)===10)switch(q){case 438:return t.$1(H.u1(H.y(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.y(s)+" (Error "+q+")"
return t.$1(new H.jE(p,null))}}if(a instanceof TypeError){o=$.$get$wZ()
n=$.$get$x_()
m=$.$get$x0()
l=$.$get$x1()
k=$.$get$x5()
j=$.$get$x6()
i=$.$get$x3()
$.$get$x2()
h=$.$get$x8()
g=$.$get$x7()
f=o.aI(s)
if(f!=null)return t.$1(H.u1(s,f))
else{f=n.aI(s)
if(f!=null){f.method="call"
return t.$1(H.u1(s,f))}else{f=m.aI(s)
if(f==null){f=l.aI(s)
if(f==null){f=k.aI(s)
if(f==null){f=j.aI(s)
if(f==null){f=i.aI(s)
if(f==null){f=l.aI(s)
if(f==null){f=h.aI(s)
if(f==null){f=g.aI(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jE(s,f==null?null:f.method))}}return t.$1(new H.pg(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jR()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.d3(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jR()
return a},
cn:function(a){var t
if(a instanceof H.hc)return a.b
if(a==null)return new H.kc(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kc(a,null)},
Hv:function(a){if(a==null||typeof a!='object')return J.dE(a)
else return H.eA(a)},
xQ:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
Hq:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kg(b,new H.rx(a))
case 1:return H.kg(b,new H.ry(a,d))
case 2:return H.kg(b,new H.rz(a,d,e))
case 3:return H.kg(b,new H.rA(a,d,e,f))
case 4:return H.kg(b,new H.rB(a,d,e,f,g))}throw H.k(P.lp("Unsupported number of arguments for wrapped closure"))},
dp:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.Hq)
a.$identity=t
return t},
yQ:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ar(c).$isp){t.$reflectionInfo=c
r=H.FI(t).r}else r=c
q=d?Object.create(new H.oo().constructor.prototype):Object.create(new H.fT(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dI
$.dI=J.eg(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.vn(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Hl,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.vk:H.rW
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.k("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.vn(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
yN:function(a,b,c,d){var t=H.rW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
vn:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.yP(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.yN(s,!q,t,b)
if(s===0){q=$.dI
$.dI=J.eg(q,1)
o="self"+H.y(q)
q="return function(){var "+o+" = this."
p=$.fU
if(p==null){p=H.kJ("self")
$.fU=p}return new Function(q+H.y(p)+";return "+o+"."+H.y(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dI
$.dI=J.eg(q,1)
n+=H.y(q)
q="return function("+n+"){return this."
p=$.fU
if(p==null){p=H.kJ("self")
$.fU=p}return new Function(q+H.y(p)+"."+H.y(t)+"("+n+");}")()},
yO:function(a,b,c,d){var t,s
t=H.rW
s=H.vk
switch(b?-1:a){case 0:throw H.k(new H.o1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
yP:function(a,b){var t,s,r,q,p,o,n,m
t=H.yM()
s=$.vj
if(s==null){s=H.kJ("receiver")
$.vj=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.yO(q,!o,r,b)
if(q===1){s="return function(){return this."+H.y(t)+"."+H.y(r)+"(this."+H.y(s)+");"
o=$.dI
$.dI=J.eg(o,1)
return new Function(s+H.y(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.y(t)+"."+H.y(r)+"(this."+H.y(s)+", "+m+");"
o=$.dI
$.dI=J.eg(o,1)
return new Function(s+H.y(o)+"}")()},
uZ:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ar(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.yQ(a,b,t,!!d,e,f)},
rW:function(a){return a.a},
vk:function(a){return a.c},
yM:function(){var t=$.fU
if(t==null){t=H.kJ("self")
$.fU=t}return t},
kJ:function(a){var t,s,r,q,p
t=new H.fT("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Hy:function(a,b){var t=J.be(b)
throw H.k(H.vm(H.nP(a),t.K(b,3,t.gm(b))))},
eU:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.ar(a)[b]
else t=!0
if(t)return a
H.Hy(a,b)},
xP:function(a){var t=J.ar(a)
return"$S" in t?t.$S():null},
fI:function(a,b){var t
if(a==null)return!1
t=H.xP(a)
return t==null?!1:H.v1(t,b)},
vm:function(a,b){return new H.kO("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
HF:function(a){throw H.k(new P.l8(a))},
rH:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xR:function(a){return u.getIsolateTag(a)},
c1:function(a){return new H.dY(a,null)},
a:function(a,b){a.$ti=b
return a},
kk:function(a){if(a==null)return
return a.$ti},
xT:function(a,b){return H.v4(a["$as"+H.y(b)],H.kk(a))},
ao:function(a,b,c){var t=H.xT(a,b)
return t==null?null:t[c]},
T:function(a,b){var t=H.kk(a)
return t==null?null:t[b]},
dD:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.rC(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.y(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dD(t,b)
return H.GR(a,b)}return"unknown-reified-type"},
GR:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dD(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dD(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dD(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.Hk(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dD(l[j],b)+(" "+H.y(j))}q+="}"}return"("+q+") => "+t},
rC:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.cd("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.O=p+", "
o=a[s]
if(o!=null)q=!1
p=t.O+=H.dD(o,c)}return q?"":"<"+t.A(0)+">"},
kl:function(a){var t,s
if(a instanceof H.f1){t=H.xP(a)
if(t!=null)return H.dD(t,null)}s=J.ar(a).constructor.builtin$cls
if(a==null)return s
return s+H.rC(a.$ti,0,null)},
v4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
e0:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kk(a)
s=J.ar(a)
if(s[b]==null)return!1
return H.xK(H.v4(s[d],t),c)},
HE:function(a,b,c,d){if(a==null)return a
if(H.e0(a,b,c,d))return a
throw H.k(H.vm(H.nP(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.rC(c,0,null),u.mangledGlobalNames)))},
xK:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d2(a[s],b[s]))return!1
return!0},
eT:function(a,b,c){return a.apply(b,H.xT(b,c))},
H6:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ad"||b.builtin$cls==="d6"
if(b==null)return!0
t=H.kk(a)
a=J.ar(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.v1(r.apply(a,null),b)}return H.d2(s,b)},
d2:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d6")return!0
if('func' in b)return H.v1(a,b)
if('func' in a)return b.builtin$cls==="HL"||b.builtin$cls==="ad"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dD(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.xK(H.v4(o,t),r)},
xJ:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.d2(t,p)||H.d2(p,t)))return!1}return!0},
GY:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.d2(p,o)||H.d2(o,p)))return!1}return!0},
v1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.d2(t,s)||H.d2(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.xJ(r,q,!1))return!1
if(!H.xJ(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d2(i,h)||H.d2(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d2(i,h)||H.d2(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d2(i,h)||H.d2(h,i)))return!1}}return H.GY(a.named,b.named)},
HW:function(a){var t=$.v_
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
HV:function(a){return H.eA(a)},
HU:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Hr:function(a){var t,s,r,q,p,o
t=$.v_.$1(a)
s=$.rn[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rw[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xI.$2(a,t)
if(t!=null){s=$.rn[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rw[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.v2(r)
$.rn[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rw[t]=r
return r}if(p==="-"){o=H.v2(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xV(a,r)
if(p==="*")throw H.k(new P.eI(t))
if(u.leafTags[t]===true){o=H.v2(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xV(a,r)},
xV:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rD(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
v2:function(a){return J.rD(a,!1,null,!!a.$isaG)},
Ht:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rD(t,!1,null,!!t.$isaG)
else return J.rD(t,c,null,null)},
Ho:function(){if(!0===$.v0)return
$.v0=!0
H.Hp()},
Hp:function(){var t,s,r,q,p,o,n,m
$.rn=Object.create(null)
$.rw=Object.create(null)
H.Hn()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xW.$1(p)
if(o!=null){n=H.Ht(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
Hn:function(){var t,s,r,q,p,o,n
t=C.N()
t=H.fH(C.O,H.fH(C.P,H.fH(C.u,H.fH(C.u,H.fH(C.R,H.fH(C.Q,H.fH(C.S(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.v_=new H.rt(p)
$.xI=new H.ru(o)
$.xW=new H.rv(n)},
fH:function(a,b){return a(b)||b},
tX:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.k(new P.bO("Illegal RegExp pattern ("+String(q)+")",a,null))},
HC:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
v3:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.ht){q=b.gdD()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.b0(H.by(b))
throw H.k("String.replaceAll(Pattern) UNIMPLEMENTED")}},
GW:function(a){return a},
HD:function(a,b,c,d){var t,s,r,q,p,o
t=J.ar(b)
if(!t.$isun)throw H.k(P.dG(b,"pattern","is not a Pattern"))
for(t=t.aP(b,a),t=new H.k0(t.a,t.b,t.c,null),s=0,r="";t.F();){q=t.d
p=q.b
o=p.index
r=r+H.y(H.xz().$1(C.c.K(a,s,o)))+H.y(c.$1(q))
s=o+p[0].length}t=r+H.y(H.xz().$1(C.c.ag(a,s)))
return t.charCodeAt(0)==0?t:t},
kV:function kV(a,$ti){this.a=a
this.$ti=$ti},
kU:function kU(){},
fZ:function fZ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
kW:function kW(d,a,b,c,$ti){var _=this
_.d=d
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nX:function nX(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pe:function pe(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jE:function jE(a,b){this.a=a
this.b=b},
mG:function mG(a,b,c){this.a=a
this.b=b
this.c=c},
pg:function pg(a){this.a=a},
hc:function hc(a,b){this.a=a
this.b=b},
rK:function rK(a){this.a=a},
kc:function kc(a,b){this.a=a
this.b=b},
rx:function rx(a){this.a=a},
ry:function ry(a,b){this.a=a
this.b=b},
rz:function rz(a,b,c){this.a=a
this.b=b
this.c=c},
rA:function rA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rB:function rB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f1:function f1(){},
oU:function oU(){},
oo:function oo(){},
fT:function fT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kO:function kO(a){this.a=a},
o1:function o1(a){this.a=a},
dY:function dY(a,b){this.a=a
this.b=b},
v:function v(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mF:function mF(a){this.a=a},
mE:function mE(a){this.a=a},
mP:function mP(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mQ:function mQ(a,$ti){this.a=a
this.$ti=$ti},
mR:function mR(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rt:function rt(a){this.a=a},
ru:function ru(a){this.a=a},
rv:function rv(a){this.a=a},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ka:function ka(a,b){this.a=a
this.b=b},
pN:function pN(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
qQ:function qQ(a,b,c){this.a=a
this.b=b
this.c=c},
qR:function qR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cD:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.dF("Invalid length "+H.y(a)))
return a},
xv:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dF("Invalid view offsetInBytes "+H.y(b)))},
xy:function(a){return a},
Fd:function(a){return new Int8Array(H.xy(a))},
cR:function(a,b,c){H.xv(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
GM:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aF()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.k(H.Hb(a,b,c))
return b},
fn:function fn(){},
ez:function ez(){},
ne:function ne(){},
jB:function jB(){},
hE:function hE(){},
hG:function hG(){},
hI:function hI(){},
hF:function hF(){},
hH:function hH(){},
hJ:function hJ(){},
nf:function nf(){},
ng:function ng(){},
nh:function nh(){},
ni:function ni(){},
nj:function nj(){},
nk:function nk(){},
nl:function nl(){},
jC:function jC(){},
fo:function fo(){},
Hk:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
Hx:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ar:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jv.prototype
return J.ju.prototype}if(typeof a=="string")return J.ew.prototype
if(a==null)return J.mC.prototype
if(typeof a=="boolean")return J.mB.prototype
if(a.constructor==Array)return J.ev.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ex.prototype
return a}if(a instanceof P.ad)return a
return J.rq(a)},
rD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
rq:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.v0==null){H.Ho()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.k(new P.eI("Return interceptor for "+H.y(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$u0()]
if(p!=null)return p
p=H.Hr(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$u0(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
wu:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ER:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a2(a,b)
if(s!==32&&s!==13&&!J.wu(s))break;++b}return b},
tW:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.Y(a,t)
if(s!==32&&s!==13&&!J.wu(s))break}return b},
be:function(a){if(typeof a=="string")return J.ew.prototype
if(a==null)return a
if(a.constructor==Array)return J.ev.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ex.prototype
return a}if(a instanceof P.ad)return a
return J.rq(a)},
dq:function(a){if(a==null)return a
if(a.constructor==Array)return J.ev.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ex.prototype
return a}if(a instanceof P.ad)return a
return J.rq(a)},
dC:function(a){if(typeof a=="number")return J.fk.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eJ.prototype
return a},
kj:function(a){if(typeof a=="number")return J.fk.prototype
if(typeof a=="string")return J.ew.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eJ.prototype
return a},
dd:function(a){if(typeof a=="string")return J.ew.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eJ.prototype
return a},
aS:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ex.prototype
return a}if(a instanceof P.ad)return a
return J.rq(a)},
eg:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kj(a).V(a,b)},
aY:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ar(a).R(a,b)},
v5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dC(a).au(a,b)},
cz:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dC(a).aF(a,b)},
eh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dC(a).a1(a,b)},
rL:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kj(a).at(a,b)},
fK:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.xU(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.be(a).n(a,b)},
km:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.xU(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dq(a).i(a,b,c)},
y0:function(a,b){return J.dq(a).h(a,b)},
y1:function(a,b,c,d){return J.aS(a).fO(a,b,c,d)},
y2:function(a,b){return J.dd(a).aP(a,b)},
e1:function(a,b){return J.aS(a).fQ(a,b)},
v6:function(a){return J.aS(a).fS(a)},
rM:function(a,b,c){return J.dC(a).ab(a,b,c)},
y3:function(a,b){return J.kj(a).aB(a,b)},
y4:function(a,b){return J.aS(a).aC(a,b)},
y5:function(a,b){return J.be(a).ac(a,b)},
kn:function(a,b,c){return J.be(a).dY(a,b,c)},
y6:function(a,b){return J.aS(a).h0(a,b)},
v7:function(a,b){return J.dq(a).T(a,b)},
y7:function(a,b,c,d){return J.dq(a).bZ(a,b,c,d)},
ko:function(a){return J.dC(a).ak(a)},
v8:function(a,b){return J.dq(a).a5(a,b)},
rN:function(a){return J.aS(a).gdW(a)},
y8:function(a){return J.aS(a).gbs(a)},
fL:function(a){return J.aS(a).gar(a)},
y9:function(a){return J.aS(a).gcL(a)},
dE:function(a){return J.ar(a).ga3(a)},
rO:function(a){return J.be(a).gX(a)},
v9:function(a){return J.aS(a).gW(a)},
cT:function(a){return J.dq(a).gS(a)},
ya:function(a){return J.aS(a).gax(a)},
c2:function(a){return J.be(a).gm(a)},
va:function(a){return J.aS(a).gG(a)},
yb:function(a){return J.aS(a).ged(a)},
yc:function(a){return J.aS(a).ghU(a)},
yd:function(a){return J.aS(a).ghV(a)},
vb:function(a){return J.ar(a).gaa(a)},
rP:function(a){return J.aS(a).gaL(a)},
ye:function(a){return J.aS(a).gb6(a)},
yf:function(a){return J.aS(a).bj(a)},
yg:function(a,b){return J.aS(a).as(a,b)},
yh:function(a,b){return J.aS(a).bH(a,b)},
yi:function(a,b){return J.be(a).be(a,b)},
vc:function(a,b,c,d,e){return J.aS(a).e8(a,b,c,d,e)},
vd:function(a,b){return J.dq(a).ay(a,b)},
yj:function(a,b,c){return J.dd(a).ec(a,b,c)},
ve:function(a,b){return J.aS(a).hE(a,b)},
yk:function(a,b,c,d){return J.aS(a).hR(a,b,c,d)},
kp:function(a,b,c){return J.dd(a).cX(a,b,c)},
rQ:function(a,b,c){return J.dd(a).hT(a,b,c)},
fM:function(a,b){return J.aS(a).b8(a,b)},
vf:function(a,b){return J.aS(a).sbs(a,b)},
yl:function(a,b){return J.dq(a).d5(a,b)},
e2:function(a,b){return J.dd(a).eI(a,b)},
ym:function(a,b){return J.dd(a).ag(a,b)},
rR:function(a){return J.dC(a).l(a)},
yn:function(a){return J.dq(a).ap(a)},
yo:function(a,b){return J.dC(a).bE(a,b)},
cK:function(a){return J.ar(a).A(a)},
yp:function(a){return J.dd(a).hZ(a)},
rS:function(a){return J.dd(a).bi(a)},
yq:function(a){return J.dd(a).eq(a)},
f:function f(){},
mB:function mB(){},
mC:function mC(){},
hu:function hu(){},
nH:function nH(){},
eJ:function eJ(){},
ex:function ex(){},
ev:function ev($ti){this.$ti=$ti},
tZ:function tZ($ti){this.$ti=$ti},
ic:function ic(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fk:function fk(){},
jv:function jv(){},
ju:function ju(){},
ew:function ew(){}},P={
Gl:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.GZ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dp(new P.pP(t),1)).observe(s,{childList:true})
return new P.pO(t,s,r)}else if(self.setImmediate!=null)return P.H_()
return P.H0()},
Gm:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dp(new P.pQ(a),0))},
Gn:function(a){++u.globalState.f.b
self.setImmediate(H.dp(new P.pR(a),0))},
Go:function(a){P.uJ(C.p,a)},
bw:function(a,b){P.xt(null,a)
return b.ghf()},
cy:function(a,b){P.xt(a,b)},
bv:function(a,b){J.y4(b,a)},
bu:function(a,b){b.cH(H.co(a),H.cn(a))},
xt:function(a,b){var t,s,r,q
t=new P.r4(b)
s=new P.r5(b)
r=J.ar(a)
if(!!r.$isbl)a.cz(t,s)
else if(!!r.$iscF)a.c4(t,s)
else{q=new P.bl(0,$.am,null,[null])
q.a=4
q.c=a
q.cz(t,null)}},
bx:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.am.toString
return new P.rf(t)},
xA:function(a,b){if(H.fI(a,{func:1,args:[P.d6,P.d6]})){b.toString
return a}else{b.toString
return a}},
zw:function(a,b){var t=new P.bl(0,$.am,null,[b])
P.wY(C.p,new P.rh(a,t))
return t},
tn:function(a,b,c){var t
if(a==null)a=new P.fp()
t=$.am
if(t!==C.e)t.toString
t=new P.bl(0,t,null,[c])
t.dg(a,b)
return t},
zx:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bl(0,$.am,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.m2(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bH)(a),++l){q=a[l]
p=t.b
q.c4(new P.m1(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bl(0,$.am,null,[null])
m.df(C.W)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.co(j)
n=H.cn(j)
if(t.b===0||!1)return P.tn(o,n,null)
else{t.c=o
t.d=n}}return s},
bp:function(a){return new P.ke(new P.bl(0,$.am,null,[a]),[a])},
xx:function(a,b,c){$.am.toString
a.an(b,c)},
Gr:function(a,b){var t=new P.bl(0,$.am,null,[b])
t.a=4
t.c=a
return t},
xl:function(a,b){var t,s,r
b.a=1
try{a.c4(new P.qe(b),new P.qf(b))}catch(r){t=H.co(r)
s=H.cn(r)
P.xX(new P.qg(b,t,s))}},
qd:function(a,b){var t,s,r
for(;a.gft();)a=a.c
t=a.gcp()
s=b.c
if(t){b.c=null
r=b.bQ(s)
b.a=a.a
b.c=a.c
P.fB(b,r)}else{b.a=2
b.c=a
a.dH(s)}},
fB:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fL(p)
n=p.gaK()
s.toString
P.kh(null,null,s,o,n)}return}for(;b.gcs()!=null;b=m){m=b.a
b.a=null
P.fB(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.ge2()||b.ge1()){k=b.gfM()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fL(p)
n=p.gaK()
s.toString
P.kh(null,null,s,o,n)
return}j=$.am
if(j==null?k!=null:j!==k)$.am=k
else j=null
if(b.ge1())new P.ql(t,r,q,b).$0()
else if(s){if(b.ge2())new P.qk(r,b,l).$0()}else if(b.ghm())new P.qj(t,r,b).$0()
if(j!=null)$.am=j
s=r.b
if(!!J.ar(s).$iscF){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bQ(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qd(s,i)
return}}i=b.b
b=i.bP()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
GT:function(){var t,s
for(;t=$.fF,t!=null;){$.i9=null
s=t.b
$.fF=s
if(s==null)$.i8=null
t.a.$0()}},
GV:function(){$.uW=!0
try{P.GT()}finally{$.i9=null
$.uW=!1
if($.fF!=null)$.$get$uS().$1(P.xL())}},
xH:function(a){var t=new P.k1(a,null)
if($.fF==null){$.i8=t
$.fF=t
if(!$.uW)$.$get$uS().$1(P.xL())}else{$.i8.b=t
$.i8=t}},
GU:function(a){var t,s,r
t=$.fF
if(t==null){P.xH(a)
$.i9=$.i8
return}s=new P.k1(a,null)
r=$.i9
if(r==null){s.b=t
$.i9=s
$.fF=s}else{s.b=r.b
r.b=s
$.i9=s
if(s.b==null)$.i8=s}},
xX:function(a){var t=$.am
if(C.e===t){P.fG(null,null,C.e,a)
return}t.toString
P.fG(null,null,t,t.cF(a,!0))},
HQ:function(a,b){return new P.qP(null,a,!1,[b])},
xE:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.co(o)
s=H.cn(o)
$.am.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fL(r)
q=n
p=r.gaK()
c.$2(q,p)}}},
GL:function(a,b,c,d){var t=a.bW(0)
if(!!J.ar(t).$iscF&&t!==$.$get$hl())t.c7(new P.r7(b,c,d))
else b.an(c,d)},
xu:function(a,b){return new P.r6(a,b)},
uV:function(a,b,c){var t=a.bW(0)
if(!!J.ar(t).$iscF&&t!==$.$get$hl())t.c7(new P.r8(b,c))
else b.aH(c)},
Gq:function(a,b,c,d,e,f,g){var t,s
t=$.am
s=e?1:0
s=new P.i2(a,null,null,null,null,t,s,null,null,[f,g])
s.eX(b,c,d,e,g)
s.f_(a,b,c,d,e,f,g)
return s},
GK:function(a,b,c){$.am.toString
a.bJ(b,c)},
wY:function(a,b){var t=$.am
if(t===C.e){t.toString
return P.uJ(a,b)}return P.uJ(a,t.cF(b,!0))},
uJ:function(a,b){var t=C.a.ao(a.a,1000)
return H.Gf(t<0?0:t,b)},
kh:function(a,b,c,d,e){var t={}
t.a=d
P.GU(new P.re(t,e))},
xB:function(a,b,c,d){var t,s
s=$.am
if(s===c)return d.$0()
$.am=c
t=s
try{s=d.$0()
return s}finally{$.am=t}},
xD:function(a,b,c,d,e){var t,s
s=$.am
if(s===c)return d.$1(e)
$.am=c
t=s
try{s=d.$1(e)
return s}finally{$.am=t}},
xC:function(a,b,c,d,e,f){var t,s
s=$.am
if(s===c)return d.$2(e,f)
$.am=c
t=s
try{s=d.$2(e,f)
return s}finally{$.am=t}},
fG:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cF(d,!(!t||!1))
P.xH(d)},
pP:function pP(a){this.a=a},
pO:function pO(a,b,c){this.a=a
this.b=b
this.c=c},
pQ:function pQ(a){this.a=a},
pR:function pR(a){this.a=a},
r4:function r4(a){this.a=a},
r5:function r5(a){this.a=a},
rf:function rf(a){this.a=a},
cF:function cF(){},
rh:function rh(a,b){this.a=a
this.b=b},
m2:function m2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m1:function m1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f2:function f2(){},
k2:function k2(){},
e_:function e_(a,$ti){this.a=a
this.$ti=$ti},
ke:function ke(a,$ti){this.a=a
this.$ti=$ti},
k6:function k6(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bl:function bl(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qa:function qa(a,b){this.a=a
this.b=b},
qi:function qi(a,b){this.a=a
this.b=b},
qe:function qe(a){this.a=a},
qf:function qf(a){this.a=a},
qg:function qg(a,b,c){this.a=a
this.b=b
this.c=c},
qc:function qc(a,b){this.a=a
this.b=b},
qh:function qh(a,b){this.a=a
this.b=b},
qb:function qb(a,b,c){this.a=a
this.b=b
this.c=c},
ql:function ql(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qm:function qm(a){this.a=a},
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a,b){this.a=a
this.b=b},
dm:function dm(){},
ow:function ow(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ou:function ou(a,b){this.a=a
this.b=b},
ov:function ov(a,b){this.a=a
this.b=b},
ox:function ox(a){this.a=a},
oC:function oC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oA:function oA(a,b){this.a=a
this.b=b},
oB:function oB(){},
oD:function oD(a){this.a=a},
oG:function oG(a){this.a=a},
oH:function oH(a,b){this.a=a
this.b=b},
oE:function oE(a,b){this.a=a
this.b=b},
oF:function oF(a){this.a=a},
oI:function oI(a,b){this.a=a
this.b=b},
oJ:function oJ(a,b){this.a=a
this.b=b},
oy:function oy(a,b,c){this.a=a
this.b=b
this.c=c},
oz:function oz(a){this.a=a},
ot:function ot(){},
dn:function dn(){},
pU:function pU(a,b,c){this.a=a
this.b=b
this.c=c},
pT:function pT(a){this.a=a},
k4:function k4(){},
pZ:function pZ(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
q0:function q0(b,c,a){this.b=b
this.c=c
this.a=a},
q_:function q_(){},
qB:function qB(){},
qC:function qC(a,b){this.a=a
this.b=b},
qO:function qO(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qP:function qP(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
r7:function r7(a,b,c){this.a=a
this.b=b
this.c=c},
r6:function r6(a,b){this.a=a
this.b=b},
r8:function r8(a,b){this.a=a
this.b=b},
i1:function i1(){},
i2:function i2(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
qz:function qz(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eX:function eX(a,b){this.a=a
this.b=b},
r3:function r3(){},
re:function re(a,b){this.a=a
this.b=b},
qF:function qF(){},
qG:function qG(a,b){this.a=a
this.b=b},
qH:function qH(a,b){this.a=a
this.b=b},
qI:function qI(a,b){this.a=a
this.b=b},
Gs:function(a,b){var t=a[b]
return t===a?null:t},
uU:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
uT:function(){var t=Object.create(null)
P.uU(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
ww:function(a,b,c){return H.xQ(a,new H.v(0,null,null,null,null,null,0,[b,c]))},
bZ:function(a,b){return new H.v(0,null,null,null,null,null,0,[a,b])},
mS:function(){return new H.v(0,null,null,null,null,null,0,[null,null])},
hx:function(a){return H.xQ(a,new H.v(0,null,null,null,null,null,0,[null,null]))},
i4:function(a,b){return new P.k9(0,null,null,null,null,null,0,[a,b])},
Gt:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
E:function(a,b,c,d,e){return new P.qo(0,null,null,null,null,[d,e])},
tT:function(a,b,c){var t,s
if(P.uX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ia()
s.push(a)
try{P.GS(a,t)}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=P.wT(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jr:function(a,b,c){var t,s,r
if(P.uX(a))return b+"..."+c
t=new P.cd(b)
s=$.$get$ia()
s.push(a)
try{r=t
r.O=P.wT(r.gO(),a,", ")}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=t
s.O=s.gO()+c
s=t.gO()
return s.charCodeAt(0)==0?s:s},
uX:function(a){var t,s
for(t=0;s=$.$get$ia(),t<s.length;++t)if(a===s[t])return!0
return!1},
GS:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cT(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.F())return
q=H.y(t.gM())
b.push(q)
s+=q.length+2;++r}if(!t.F()){if(r<=5)return
if(0>=b.length)return H.w(b,-1)
p=b.pop()
if(0>=b.length)return H.w(b,-1)
o=b.pop()}else{n=t.gM();++r
if(!t.F()){if(r<=4){b.push(H.y(n))
return}p=H.y(n)
if(0>=b.length)return H.w(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gM();++r
for(;t.F();n=m,m=l){l=t.gM();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.y(n)
p=H.y(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
wv:function(a,b,c,d,e){return new H.v(0,null,null,null,null,null,0,[d,e])},
ES:function(a,b,c){var t=P.wv(null,null,null,b,c)
a.a5(0,new P.rj(t))
return t},
ET:function(a,b,c,d,e){var t=P.wv(null,null,null,d,e)
P.EY(t,a,b,c)
return t},
a3:function(a,b,c,d){return new P.k8(0,null,null,null,null,null,0,[d])},
u4:function(a,b){var t,s
t=P.a3(null,null,null,b)
for(s=J.cT(a);s.F();)t.h(0,s.gM())
return t},
wB:function(a){var t,s,r
t={}
if(P.uX(a))return"{...}"
s=new P.cd("")
try{$.$get$ia().push(a)
r=s
r.O=r.gO()+"{"
t.a=!0
a.a5(0,new P.n5(t,s))
t=s
t.O=t.gO()+"}"}finally{t=$.$get$ia()
if(0>=t.length)return H.w(t,-1)
t.pop()}t=s.gO()
return t.charCodeAt(0)==0?t:t},
EY:function(a,b,c,d){var t,s,r
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.bH)(b),++s){r=b[s]
a.i(0,c.$1(r),d.$1(r))}},
u5:function(a,b){var t=new P.mT(null,0,0,0,[b])
t.eS(a,b)
return t},
qo:function qo(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qr:function qr(a){this.a=a},
qp:function qp(a,$ti){this.a=a
this.$ti=$ti},
qq:function qq(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
k9:function k9(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
k8:function k8(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qv:function qv(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qs:function qs(){},
fj:function fj(){},
hs:function hs(){},
rj:function rj(a){this.a=a},
jw:function jw(){},
hK:function hK(){},
aM:function aM(){},
qW:function qW(){},
jx:function jx(){},
eK:function eK(a,$ti){this.a=a
this.$ti=$ti},
n5:function n5(a,b){this.a=a
this.b=b},
mT:function mT(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qw:function qw(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
oc:function oc(){},
ob:function ob(){},
vh:function(a,b,c,d,e,f){if(C.d.bI(f,4)!==0)throw H.k(new P.bO("Invalid base64 padding, padded length must be multiple of four, is "+H.y(f),a,c))
if(d+e!==f)throw H.k(new P.bO("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.k(new P.bO("Invalid base64 padding, more than two '=' characters",a,b))},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
fX:function fX(){},
h_:function h_(){},
lj:function lj(){},
pq:function pq(a){this.a=a},
pr:function pr(a){this.a=a},
qY:function qY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
r_:function r_(a){this.a=a},
qZ:function qZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Gd:function(a,b,c){var t,s,r,q
if(b<0)throw H.k(P.bG(b,0,J.c2(a),null,null))
t=c==null
if(!t&&c<b)throw H.k(P.bG(c,b,J.c2(a),null,null))
s=J.cT(a)
for(r=0;r<b;++r)if(!s.F())throw H.k(P.bG(b,0,r,null,null))
q=[]
if(t)for(;s.F();)q.push(s.gM())
else for(r=b;r<c;++r){if(!s.F())throw H.k(P.bG(c,b,r,null,null))
q.push(s.gM())}return H.wM(q)},
wT:function(a,b,c){var t=J.cT(b)
if(!t.F())return a
if(c.length===0){do a+=H.y(t.gM())
while(t.F())}else{a+=H.y(t.gM())
for(;t.F();)a=a+c+H.y(t.gM())}return a},
yT:function(a,b){return J.y3(a,b)},
yX:function(a,b){var t=new P.dK(a,b)
t.dc(a,b)
return t},
yY:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.y(t)
if(t>=10)return s+"00"+H.y(t)
return s+"000"+H.y(t)},
yZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ik:function(a){if(a>=10)return""+a
return"0"+a},
vy:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.zg(a)},
zg:function(a){var t=J.ar(a)
if(!!t.$isf1)return t.A(a)
return H.nO(a)},
dF:function(a){return new P.d3(!1,null,null,a)},
dG:function(a,b,c){return new P.d3(!0,a,b,c)},
yr:function(a){return new P.d3(!1,null,a,"Must not be null")},
wO:function(a){return new P.eB(null,null,!1,null,null,a)},
jK:function(a,b,c){return new P.eB(null,null,!0,a,b,"Value not in range")},
bG:function(a,b,c,d,e){return new P.eB(b,c,!0,a,d,"Invalid value")},
dl:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a8(a)
if(!(0>a)){if(typeof c!=="number")return H.a8(c)
t=a>c}else t=!0
if(t)throw H.k(P.bG(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a8(b)
if(!(a>b)){if(typeof c!=="number")return H.a8(c)
t=b>c}else t=!0
if(t)throw H.k(P.bG(b,a,c,"end",f))
return b}return c},
bA:function(a,b,c,d,e){var t=e!=null?e:J.c2(b)
return new P.mi(b,t,!0,a,c,"Index out of range")},
lp:function(a){return new P.q9(a)},
cW:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cT(a);s.F();)t.push(s.gM())
if(b)return t
t.fixed$length=Array
return t},
EU:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
l:function(a,b){var t=P.cW(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fJ:function(a){H.Hx(H.y(a))},
d_:function(a,b,c){return new H.ht(a,H.tX(a,!1,!0,!1),null,null)},
oO:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dl(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a1()
s=c<t}else s=!0
return H.wM(s?C.b.ca(a,b,c):a)}if(!!J.ar(a).$isfo)return H.Fl(a,b,P.dl(b,c,a.length,null,null,null))
return P.Gd(a,b,c)},
xa:function(){var t=H.Ff()
if(t!=null)return P.xb(t,0,null)
throw H.k(new P.V("'Uri.base' is not supported"))},
xb:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a2(a,b+4)^58)*3|C.c.a2(a,b)^100|C.c.a2(a,b+1)^97|C.c.a2(a,b+2)^116|C.c.a2(a,b+3)^97)>>>0
if(s===0)return P.x9(b>0||c<c?C.c.K(a,b,c):a,5,null).ges()
else if(s===32)return P.x9(C.c.K(a,t,c),0,null).ges()}r=H.a(new Array(8),[P.C])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xF(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.au()
if(p>=b)if(P.xF(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.V()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a1()
if(typeof l!=="number")return H.a8(l)
if(k<l)l=k
if(typeof m!=="number")return m.a1()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a1()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a1()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aG(a,"..",m)))h=l>m+2&&C.c.aG(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aG(a,"file",b)){if(o<=b){if(!C.c.aG(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.K(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aE(a,m,l,"/");++l;++k;++c}else{a=C.c.K(a,b,m)+"/"+C.c.K(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aG(a,"http",b)){if(q&&n+3===m&&C.c.aG(a,"80",n+1))if(b===0&&!0){a=C.c.aE(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.K(a,b,n)+C.c.K(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aG(a,"https",b)){if(q&&n+4===m&&C.c.aG(a,"443",n+1))if(b===0&&!0){a=C.c.aE(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.K(a,b,n)+C.c.K(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.c.K(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.qN(a,p,o,n,m,l,k,i,null)}return P.Gw(a,b,c,p,o,n,m,l,k,i)},
xd:function(a,b){return C.b.hc(a.split("&"),P.mS(),new P.pm(b))},
Gg:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pj(a)
s=H.cD(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.Y(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fr(C.c.K(a,p,q),null,null)
if(J.cz(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.w(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fr(C.c.K(a,p,c),null,null)
if(J.cz(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.w(r,o)
r[o]=m
return r},
xc:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pk(a)
s=new P.pl(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.Y(a,q)
if(m===58){if(q===b){++q
if(C.c.Y(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.aY(C.b.gbb(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Gg(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.av()
h=j[1]
if(typeof h!=="number")return H.a8(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.av()
i=j[3]
if(typeof i!=="number")return H.a8(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.ar(e).R(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.w(g,f)
g[f]=0
i=f+1
if(i>=16)return H.w(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.d4()
i=C.d.aX(e,8)
if(f<0||f>=16)return H.w(g,f)
g[f]=i
i=f+1
if(i>=16)return H.w(g,i)
g[i]=e&255
f+=2}}return g},
Gw:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.GE(a,b,d)
else{if(d===b)P.i6(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.GF(a,t,e-1):""
r=P.GA(a,e,f,!1)
if(typeof f!=="number")return f.V()
q=f+1
if(typeof g!=="number")return H.a8(g)
p=q<g?P.GC(H.fr(C.c.K(a,q,g),null,new P.rg(a,f)),j):null}else{s=""
r=null
p=null}o=P.GB(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a1()
n=h<i?P.GD(a,h+1,i,null):null
return new P.kf(j,s,r,p,o,n,i<c?P.Gz(a,i+1,c):null,null,null,null,null,null)},
xn:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i6:function(a,b,c){throw H.k(new P.bO(c,a,b))},
GC:function(a,b){if(a!=null&&J.aY(a,P.xn(b)))return
return a},
GA:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.Y(a,b)===91){if(typeof c!=="number")return c.am()
t=c-1
if(C.c.Y(a,t)!==93)P.i6(a,b,"Missing end `]` to match `[` in host")
P.xc(a,b+1,t)
return C.c.K(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a8(c)
s=b
for(;s<c;++s)if(C.c.Y(a,s)===58){P.xc(a,b,c)
return"["+a+"]"}return P.GH(a,b,c)},
GH:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a8(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.Y(a,t)
if(p===37){o=P.xs(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.cd("")
m=C.c.K(a,s,t)
l=r.O+=!q?m.toLowerCase():m
if(n){o=C.c.K(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.O=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.w(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.cd("")
if(s<t){r.O+=C.c.K(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.w(C.k,n)
n=(C.k[n]&1<<(p&15))!==0}else n=!1
if(n)P.i6(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.Y(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.cd("")
m=C.c.K(a,s,t)
r.O+=!q?m.toLowerCase():m
r.O+=P.xo(p)
t+=k
s=t}}}}if(r==null)return C.c.K(a,b,c)
if(s<c){m=C.c.K(a,s,c)
r.O+=!q?m.toLowerCase():m}n=r.O
return n.charCodeAt(0)==0?n:n},
GE:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xq(C.c.a2(a,b)))P.i6(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a2(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.w(C.m,q)
q=(C.m[q]&1<<(r&15))!==0}else q=!1
if(!q)P.i6(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.K(a,b,c)
return P.Gx(s?a.toLowerCase():a)},
Gx:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
GF:function(a,b,c){var t=P.fE(a,b,c,C.Y,!1)
return t==null?C.c.K(a,b,c):t},
GB:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fE(a,b,c,C.D,!1)
if(r==null)r=C.c.K(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.af(r,"/"))r="/"+r
return P.GG(r,e,f)},
GG:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.af(a,"/"))return P.GI(a,!t||c)
return P.GJ(a)},
GD:function(a,b,c,d){var t=P.fE(a,b,c,C.l,!1)
return t==null?C.c.K(a,b,c):t},
Gz:function(a,b,c){var t=P.fE(a,b,c,C.l,!1)
return t==null?C.c.K(a,b,c):t},
xs:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.Y(a,b+1)
r=C.c.Y(a,t)
q=H.rs(s)
p=H.rs(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aX(o,4)
if(t>=8)return H.w(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hM(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.K(a,b,b+3).toUpperCase()
return},
xo:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a2("0123456789ABCDEF",a>>>4)
t[2]=C.c.a2("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.fI(a,6*r)&63|s
if(p>=q)return H.w(t,p)
t[p]=37
n=p+1
m=C.c.a2("0123456789ABCDEF",o>>>4)
if(n>=q)return H.w(t,n)
t[n]=m
m=p+2
n=C.c.a2("0123456789ABCDEF",o&15)
if(m>=q)return H.w(t,m)
t[m]=n
p+=3}}return P.oO(t,0,null)},
fE:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.dd(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a1()
if(typeof c!=="number")return H.a8(c)
if(!(r<c))break
c$0:{o=s.Y(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.w(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xs(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.w(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.i6(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.Y(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.xo(o)}}if(p==null)p=new P.cd("")
p.O+=C.c.K(a,q,r)
p.O+=H.y(m)
if(typeof l!=="number")return H.a8(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a1()
if(q<c)p.O+=s.K(a,q,c)
t=p.O
return t.charCodeAt(0)==0?t:t},
xr:function(a){if(C.c.af(a,"."))return!0
return C.c.be(a,"/.")!==-1},
GJ:function(a){var t,s,r,q,p,o,n
if(!P.xr(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bH)(s),++p){o=s[p]
if(J.aY(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.w(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bf(t,"/")},
GI:function(a,b){var t,s,r,q,p,o
if(!P.xr(a))return!b?P.xp(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bH)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.aY(C.b.gbb(t),"..")){if(0>=t.length)return H.w(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.w(t,0)
s=J.rO(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.aY(C.b.gbb(t),".."))t.push("")
if(!b){if(0>=t.length)return H.w(t,0)
s=P.xp(t[0])
if(0>=t.length)return H.w(t,0)
t[0]=s}return C.b.bf(t,"/")},
xp:function(a){var t,s,r,q
t=J.be(a)
s=t.gm(a)
if(typeof s!=="number")return s.au()
if(s>=2&&P.xq(t.Y(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a8(s)
if(!(r<s))break
q=t.Y(a,r)
if(q===58)return C.c.K(a,0,r)+"%3A"+C.c.ag(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.w(C.m,s)
s=(C.m[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Gy:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.Y(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.k(P.dF("Invalid URL encoding"))}}return t},
qX:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a8(c)
t=J.dd(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.Y(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.o!==d)p=!1
else p=!0
if(p)return t.K(a,b,c)
else o=new H.kR(t.K(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.Y(a,s)
if(q>127)throw H.k(P.dF("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.k(P.dF("Truncated URI"))
o.push(P.Gy(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pr(!1).fZ(o)},
xq:function(a){var t=a|32
return 97<=t&&t<=122},
x9:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.be(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a8(o)
if(!(r<o))break
c$0:{p=s.Y(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.k(new P.bO("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.k(new P.bO("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a8(o)
if(!(r<o))break
p=s.Y(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbb(t)
if(p!==44||r!==m+7||!s.aG(a,"base64",m+1))throw H.k(new P.bO("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.hB(0,a,o,s.gm(a))
else{l=P.fE(a,o,s.gm(a),C.l,!0)
if(l!=null)a=s.aE(a,o,s.gm(a),l)}return new P.pi(a,t,c)},
GP:function(){var t,s,r,q,p
t=P.EU(22,new P.rb(),!0,P.db)
s=new P.ra(t)
r=new P.rc()
q=new P.rd()
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
xF:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xG()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.w(t,d)
r=t[d]
q=C.c.a2(a,s)^96
p=J.fK(r,q>95?31:q)
if(typeof p!=="number")return p.aJ()
d=p&31
o=C.d.aX(p,5)
if(o>=8)return H.w(e,o)
e[o]=s}return d},
dc:function dc(){},
bI:function bI(){},
dK:function dK(a,b){this.a=a
this.b=b},
W:function W(){},
dL:function dL(a){this.a=a},
lg:function lg(){},
lh:function lh(){},
el:function el(){},
fp:function fp(){},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mi:function mi(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a){this.a=a},
eI:function eI(a){this.a=a},
dW:function dW(a){this.a=a},
bR:function bR(a){this.a=a},
nu:function nu(){},
jR:function jR(){},
l8:function l8(a){this.a=a},
q9:function q9(a){this.a=a},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
lq:function lq(a,bM,$ti){this.a=a
this.bM=bM
this.$ti=$ti},
C:function C(){},
o:function o(){},
jt:function jt(){},
p:function p(){},
bg:function bg(){},
d6:function d6(){},
dr:function dr(){},
ad:function ad(){},
d5:function d5(){},
eC:function eC(){},
dV:function dV(){},
B:function B(){},
cd:function cd(O){this.O=O},
eL:function eL(){},
pm:function pm(a){this.a=a},
pj:function pj(a){this.a=a},
pk:function pk(a){this.a=a},
pl:function pl(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
rg:function rg(a,b){this.a=a
this.b=b},
pi:function pi(a,b,c){this.a=a
this.b=b
this.c=c},
rb:function rb(){},
ra:function ra(a){this.a=a},
rc:function rc(){},
rd:function rd(){},
qN:function qN(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pY:function pY(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
xN:function(a){var t,s,r,q,p
if(a==null)return
t=P.mS()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bH)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
H7:function(a,b){var t
if(a==null)return
t={}
J.v8(a,new P.rk(t))
return t},
H8:function(a){var t,s
t=new P.bl(0,$.am,null,[null])
s=new P.e_(t,[null])
a.then(H.dp(new P.rl(s),1))["catch"](H.dp(new P.rm(s),1))
return t},
t2:function(){var t=$.vv
if(t==null){t=J.kn(window.navigator.userAgent,"Opera",0)
$.vv=t}return t},
vx:function(){var t=$.vw
if(t==null){t=P.t2()!==!0&&J.kn(window.navigator.userAgent,"WebKit",0)
$.vw=t}return t},
z_:function(){var t,s
t=$.vs
if(t!=null)return t
s=$.vt
if(s==null){s=J.kn(window.navigator.userAgent,"Firefox",0)
$.vt=s}if(s)t="-moz-"
else{s=$.vu
if(s==null){s=P.t2()!==!0&&J.kn(window.navigator.userAgent,"Trident/",0)
$.vu=s}if(s)t="-ms-"
else t=P.t2()===!0?"-o-":"-webkit-"}$.vs=t
return t},
qS:function qS(){},
qU:function qU(a,b){this.a=a
this.b=b},
pL:function pL(){},
pM:function pM(a,b){this.a=a
this.b=b},
rk:function rk(a){this.a=a},
qT:function qT(a,b){this.a=a
this.b=b},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
rl:function rl(a){this.a=a},
rm:function rm(a){this.a=a},
kZ:function kZ(){},
l_:function l_(a){this.a=a},
xw:function(a){var t,s,r
t=new P.bl(0,$.am,null,[null])
s=new P.ke(t,[null])
a.toString
r=W.U
W.ef(a,"success",new P.r9(a,s),!1,r)
W.ef(a,"error",s.gdX(),!1,r)
return t},
la:function la(){},
r9:function r9(a,b){this.a=a
this.b=b},
mh:function mh(){},
nr:function nr(){},
hO:function hO(){},
pc:function pc(){},
Gv:function(a){var t=new P.qD(0,0)
t.f0(a)
return t},
qu:function qu(){},
qD:function qD(a,b){this.a=a
this.b=b},
qE:function qE(){},
bU:function bU(){},
kq:function kq(){},
ei:function ei(){},
lr:function lr(){},
ls:function ls(){},
lt:function lt(){},
lu:function lu(){},
lv:function lv(){},
lw:function lw(){},
lx:function lx(){},
ly:function ly(){},
lz:function lz(){},
lA:function lA(){},
lB:function lB(){},
lC:function lC(){},
lD:function lD(){},
lE:function lE(){},
lF:function lF(){},
lG:function lG(){},
lV:function lV(){},
cs:function cs(){},
mf:function mf(){},
d4:function d4(){},
mL:function mL(){},
iR:function iR(){},
ja:function ja(){},
n6:function n6(){},
n7:function n7(){},
d7:function d7(){},
no:function no(){},
iS:function iS(){},
jb:function jb(){},
nE:function nE(){},
nJ:function nJ(){},
o7:function o7(){},
oN:function oN(){},
iT:function iT(){},
jc:function jc(){},
kx:function kx(a){this.a=a},
ce:function ce(){},
oR:function oR(){},
oT:function oT(){},
eH:function eH(){},
p1:function p1(){},
da:function da(){},
pd:function pd(){},
iU:function iU(){},
jd:function jd(){},
pp:function pp(){},
pt:function pt(){},
pu:function pu(){},
i3:function i3(){},
qJ:function qJ(){},
qK:function qK(){},
qL:function qL(){},
bh:function bh(){},
db:function db(){},
fR:function fR(){},
eY:function eY(){},
fS:function fS(){},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
bB:function bB(){},
e3:function e3(){},
kX:function kX(){},
ks:function ks(){},
nZ:function nZ(){},
r0:function r0(){},
jQ:function jQ(){},
iV:function iV(){},
je:function je(){}},W={
yK:function(a){if(a!=null)return new Audio(a)
return new Audio()},
yL:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
yW:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Gp:function(a){var t=new W.pW(a,null)
t.eY(a)
return t},
vM:function(a,b,c){return W.vN(a,null,null,b,null,null,null,c).b3(new W.mb())},
vN:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e8
s=new P.bl(0,$.am,null,[t])
r=new P.e_(s,[t])
q=new XMLHttpRequest()
C.L.hD(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.HP
W.ef(q,"load",new W.mc(r,q),!1,t)
W.ef(q,"error",r.gdX(),!1,t)
q.send()
return s},
vO:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
xm:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ef:function(a,b,c,d,e){var t=W.GX(new W.q8(c))
t=new W.q7(0,a,b,t,!1,[e])
t.eZ(a,b,c,!1,e)
return t},
GO:function(a){var t
if(!!J.ar(a).$isek)return a
t=new P.k_([],[],!1)
t.c=!0
return t.b5(a)},
GX:function(a){var t=$.am
if(t===C.e)return a
return t.fU(a,!0)},
as:function as(){},
eW:function eW(){},
kt:function kt(){},
eZ:function eZ(){},
cL:function cL(){},
kB:function kB(){},
h6:function h6(){},
h9:function h9(){},
kF:function kF(){},
f_:function f_(){},
kI:function kI(){},
f0:function f0(){},
ej:function ej(){},
kP:function kP(){},
kT:function kT(){},
ig:function ig(){},
h0:function h0(){},
kY:function kY(){},
l0:function l0(){},
l1:function l1(){},
h1:function h1(){},
h2:function h2(){},
l2:function l2(){},
bN:function bN(){},
f3:function f3(){},
iJ:function iJ(){},
pW:function pW(a,b){this.a=a
this.b=b},
jF:function jF(){},
pX:function pX(){},
ii:function ii(){},
l3:function l3(){},
l4:function l4(){},
l9:function l9(){},
f4:function f4(){},
ij:function ij(){},
h3:function h3(){},
ek:function ek(){},
il:function il(){},
im:function im(){},
lc:function lc(){},
io:function io(){},
ip:function ip(){},
iK:function iK(){},
j3:function j3(){},
iq:function iq(){},
ir:function ir(){},
k5:function k5(a,$ti){this.a=a
this.$ti=$ti},
du:function du(){},
li:function li(){},
h5:function h5(){},
lo:function lo(){},
U:function U(){},
aH:function aH(){},
lR:function lR(){},
cg:function cg(){},
fc:function fc(){},
iL:function iL(){},
j4:function j4(){},
lS:function lS(){},
lT:function lT(){},
lU:function lU(){},
lX:function lX(){},
lY:function lY(){},
m_:function m_(){},
iF:function iF(){},
cr:function cr(){},
m8:function m8(){},
fd:function fd(){},
iM:function iM(){},
j5:function j5(){},
iH:function iH(){},
e8:function e8(){},
mb:function mb(){},
mc:function mc(a,b){this.a=a
this.b=b},
hm:function hm(){},
me:function me(){},
hn:function hn(){},
ff:function ff(){},
mk:function mk(){},
mI:function mI(){},
hv:function hv(){},
hw:function hw(){},
n_:function n_(){},
n4:function n4(){},
hC:function hC(){},
jz:function jz(){},
n8:function n8(){},
n9:function n9(){},
hD:function hD(){},
ct:function ct(){},
jA:function jA(){},
iW:function iW(){},
jf:function jf(){},
nm:function nm(){},
nn:function nn(){},
az:function az(){},
jD:function jD(){},
iX:function iX(){},
jg:function jg(){},
nq:function nq(){},
nv:function nv(){},
nz:function nz(){},
nB:function nB(){},
ea:function ea(){},
nG:function nG(){},
ci:function ci(){},
jJ:function jJ(){},
iY:function iY(){},
jh:function jh(){},
nL:function nL(){},
jL:function jL(){},
fu:function fu(){},
jM:function jM(){},
oa:function oa(){},
od:function od(){},
oe:function oe(){},
of:function of(){},
cu:function cu(){},
jO:function jO(){},
h7:function h7(){},
ha:function ha(){},
oi:function oi(){},
hQ:function hQ(){},
cv:function cv(){},
jP:function jP(){},
iZ:function iZ(){},
ji:function ji(){},
fv:function fv(){},
ok:function ok(){},
ck:function ck(){},
ol:function ol(){},
om:function om(){},
os:function os(){},
oP:function oP(){},
cm:function cm(){},
ed:function ed(){},
oW:function oW(){},
hU:function hU(){},
cS:function cS(){},
cI:function cI(){},
p2:function p2(){},
j_:function j_(){},
jj:function jj(){},
p3:function p3(){},
h8:function h8(){},
hb:function hb(){},
p7:function p7(){},
cx:function cx(){},
jT:function jT(){},
j0:function j0(){},
jk:function jk(){},
fy:function fy(){},
jU:function jU(){},
pb:function pb(){},
ee:function ee(){},
pn:function pn(){},
po:function po(){},
ps:function ps(){},
fz:function fz(){},
jV:function jV(){},
px:function px(){},
jY:function jY(){},
pE:function pE(){},
eN:function eN(){},
fA:function fA(){},
pV:function pV(){},
i0:function i0(){},
j1:function j1(){},
jl:function jl(){},
k3:function k3(){},
j2:function j2(){},
jm:function jm(){},
q1:function q1(){},
q2:function q2(){},
k7:function k7(){},
iN:function iN(){},
j6:function j6(){},
qn:function qn(){},
i5:function i5(){},
iO:function iO(){},
j7:function j7(){},
qM:function qM(){},
kb:function kb(){},
iP:function iP(){},
j8:function j8(){},
kd:function kd(){},
iQ:function iQ(){},
j9:function j9(){},
r1:function r1(){},
r2:function r2(){},
q3:function q3(a){this.a=a},
q6:function q6(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eQ:function eQ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
q7:function q7(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
q8:function q8(a){this.a=a},
bz:function bz(){},
lW:function lW(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qV:function qV(){}},T={
tr:function(a,b,c,d){var t
H.HE(a,"$isp",[P.C],"$asp")
t=new T.ho(a,null,d,b,null)
t.eR(a,b,c,d)
return t},
wE:function(a,b){return new T.nw(0,a,new Uint8Array(H.cD(b==null?32768:b)))},
Gj:function(a){var t=new T.pH(-1,0,0,0,0,null,null,"",[])
t.eV(a)
return t},
Gk:function(a,b){var t=new T.pI(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.eW(a,b)
return t},
fe:function(a){var t=new T.md(null,0,2147483647)
t.eQ(a)
return t},
fN:function fN(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
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
de:function de(a){this.a=a},
ho:function ho(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nw:function nw(a,b,c){this.a=a
this.b=b
this.c=c},
pH:function pH(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pI:function pI(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
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
pJ:function pJ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
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
pG:function pG(a){this.a=a},
md:function md(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kH:function kH(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
_.N=N
_.a4=a4
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
kK:function kK(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
_.N=N
_.a4=a4
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
lb:function lb(){},
m6:function m6(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
_.N=N
_.a4=a4
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
FK:function(a,b,c,d){var t,s
t=[P.B]
s=H.a([],t)
t=new T.hP("Glitch",0.01,0.01,0.01,s,0.5,a,new H.v(0,null,null,null,null,null,0,[X.F,P.W]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.J(null,null,A.a5),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.N]),H.a([],[A.fV]),1)
t.a8(a,b,c,d)
return t},
hP:function hP(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
z3:function(a,b,c,d){var t,s,r,q
t=new B.dt(new P.cd(""),0,0)
t.ah(a,8)
c.toString
s=H.cR(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ah(s[q],8)
return t.b4(b)},
z2:function(a,b,c,d){var t,s,r,q,p
t=H.cD(c)
s=new Uint8Array(t)
r=new B.dg(null,0)
r.a=J.e1(a,b)
for(q=0;q<c;++q){p=r.a6(8)
if(q>=t)return H.w(s,q)
s[q]=p}return s},
z1:function(a,b,c,d){var t,s,r,q,p
t=new B.dt(new P.cd(""),0,0)
t.ah(a,8)
s=d.gcQ()
r=C.f.ak(Math.log(H.ki(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cR(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ah(q[p],r)
return t.b4(b)},
z0:function(a,b,c,d){var t,s,r,q,p,o
t=H.cD(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ak(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dg(null,0)
p.a=J.e1(a,b)
for(o=0;o<c;++o){r=p.a6(q)
if(o>=t)return H.w(s,o)
s[o]=r}return s}},S={kr:function kr(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.b=b},ie:function ie(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ma:function ma(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mJ:function mJ(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},n2:function n2(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},o9:function o9(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},fq:function fq(){},uK:function uK(){},uL:function uL(){},uM:function uM(){},t8:function t8(){},tb:function tb(){},rZ:function rZ(){},uu:function uu(){},uO:function uO(){},uP:function uP(){},kN:function kN(){},uo:function uo(){},ui:function ui(){},mO:function mO(){},t3:function t3(){},rU:function rU(){},l6:function l6(){},u3:function u3(){},l7:function l7(){},nA:function nA(){},uB:function uB(){},uy:function uy(){},uC:function uC(){},rT:function rT(){},m3:function m3(){},kL:function kL(){},rY:function rY(){},rX:function rX(){},up:function up(){},uD:function uD(){},uq:function uq(){},ta:function ta(){},t9:function t9(){},uA:function uA(){},uz:function uz(){},p4:function p4(){},uF:function uF(){},t0:function t0(){},t1:function t1(){},uN:function uN(){},hB:function hB(){},u9:function u9(){},ua:function ua(){},ub:function ub(){},uc:function uc(){},uv:function uv(){},uw:function uw(){},ux:function ux(){},u8:function u8(){},uf:function uf(){},ug:function ug(){},to:function to(){},tp:function tp(){},tq:function tq(){},uh:function uh(){},ud:function ud(){},rV:function rV(){},uH:function uH(){},uI:function uI(){},uG:function uG(){}},K={bQ:function bQ(a,b){this.a=a
this.b=b},mM:function mM(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
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
_.x1=x1},o4:function o4(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
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
_.x1=x1},cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c}},L={
ys:function(a,b,c,d){var t,s,r
t=P.B
s=A.dJ
r=P.C
r=new L.aT(P.E(null,null,null,t,s),P.E(null,null,null,r,s),P.E(null,null,null,t,r),P.E(null,null,null,r,t))
r.j(0,$.b1,L.e("#FF9B00"),!0)
r.j(0,$.b3,L.e("#FF9B00"),!0)
r.j(0,$.b2,L.e("#FF8700"),!0)
r.j(0,$.bc,L.e("#7F7F7F"),!0)
r.j(0,$.bb,L.e("#727272"),!0)
r.j(0,$.b5,L.e("#A3A3A3"),!0)
r.j(0,$.b6,L.e("#999999"),!0)
r.j(0,$.b4,L.e("#898989"),!0)
r.j(0,$.ba,L.e("#EFEFEF"),!0)
r.j(0,$.b9,L.e("#DBDBDB"),!0)
r.j(0,$.b8,L.e("#C6C6C6"),!0)
r.j(0,$.b7,L.e("#ADADAD"),!0)
s=[t]
t=new L.fP(0.01,0.01,0.01,0.5,a,new H.v(0,null,null,null,null,null,0,[X.F,P.W]),null,"","",!1,b,null,c,d,!1,!1,!0,1,r,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.N]),H.a([],[A.fV]),Q.J(null,null,A.a5))
t.aj(a,b,c,d)
return t},
e:function(a){if(C.c.af(a,"#"))return A.vo(C.c.ag(a,1))
else return A.vo(a)},
fP:function fP(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o6:function o6(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},M={kw:function kw(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fW:function fW(a,b){this.a=a
this.b=b},l5:function l5(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hd:function hd(){},bt:function bt(a,b){this.a=a
this.b=b},on:function on(a){this.a=a},pA:function pA(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},U={kA:function kA(){},n1:function n1(a){this.a=a},nt:function nt(a){this.a=a},oK:function oK(){},oL:function oL(a){this.a=a},oM:function oM(a){this.a=a},le:function le(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a4,bu,bv,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
_.N=N
_.a4=a4
_.bu=bu
_.bv=bv
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
_.x1=x1},lH:function lH(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},n3:function n3(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},b:function b(a){this.a=a},Q:function Q(b,c,a){this.b=b
this.c=c
this.a=a},af:function af(z,a,b,c,d,e,f,r,x,y){var _=this
_.z=z
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},p5:function p5(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
Gh:function(a){if(J.dd(a).af(a," "))return C.c.ag(a,1)
return a},
pB:function pB(a){this.a=a},
pC:function pC(a,b){this.a=a
this.b=b},
pD:function pD(a,b){this.a=a
this.b=b}},O={kC:function kC(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},ca:function ca(){},ds:function ds(){},kG:function kG(a){this.a=a},eG:function eG(){},is:function is(){},
Hw:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.um()
a=J.rQ(a,P.d_("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.rF(t))
s=document
J.vc(s.querySelector("#navbar"),"beforeend",a,C.t,null)
if(J.aY(O.xS("seerOfVoid",null),"true"))P.zw(new O.rG(),P.d6)
r=new P.dK(Date.now(),!1)
if(H.nN(r)===4&&H.nM(r)===1)J.rN(s.querySelector("body")).h(0,"voidbody")
q=H.nN(r)
p=H.nM(r)
o=C.a.A(H.wH(r))
n=C.a.A(q)
m=C.a.A(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.hN(null,null)
k.c9(H.fr(l,null,null))
k.hA()
if($.G6||k.a.c1()>0.99)H.eU(s.querySelector("#today"),"$iseW").href=C.c.at("../",t)+"dead_index.html?seed="+l
else H.eU(s.querySelector("#today"),"$iseW").href=C.c.at("../",t)+"index2.html?seed="+l},
xS:function(a,b){var t,s,r,q
t=P.xa().gcV().n(0,a)
if(t!=null)t=P.qX(t,0,J.c2(t),C.o,!1)
if(t!=null)return t
s=$.xY
if(s.length!==0){r=J.ym(window.location.href,J.yi(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.xb(H.v3(s,q,"")+"?"+$.xY,0,null).gcV().n(0,a)}return},
HG:function(){var t,s,r,q
t=document
J.rN(t.querySelector("body")).h(0,"voidbody")
s=new W.k5(t.querySelectorAll(".void"),[null])
for(t=new H.dQ(s,s.gm(s),0,null,[null]);t.F();){r=t.d
q=J.y8(J.rP(r))
if(q==="none"||q.length===0)O.HB(r)
else O.Hm(r)}},
HB:function(a){var t,s
if(a==null)return
t=J.aS(a)
s=t.gaL(a)
J.vf(s,!!t.$ishQ?"inline":"block")},
Hm:function(a){if(a==null)return
J.vf(J.rP(a),"none")},
eV:function(a){var t,s,r,q
if($.Hd)return
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fJ("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.e2(s,",")
if(!J.y5(r,a))window.localStorage.setItem(t,H.y(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.co(q)
P.fJ("Saving isn't possible....you don't have local storage")}},
rF:function rF(a){this.a=a},
rG:function rG(){},
rE:function rE(){},
cY:function cY(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={p0:function p0(a){this.a=a},nW:function nW(a){this.a=a},kM:function kM(a){this.a=a},m4:function m4(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},m5:function m5(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},np:function np(b,a){this.b=b
this.a=a},dU:function dU(a,b){this.a=a
this.b=b},a6:function a6(a,b){this.a=a
this.b=b},df:function df(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},bV:function bV(c,d,e,f,a,b){var _=this
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
_.b=b},ih:function ih(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bE:function bE(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},d0:function d0(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kQ:function kQ(c,a,b){this.c=c
this.a=a
this.b=b},bD:function bD(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},hL:function hL(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iE:function iE(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jI:function jI(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},o5:function o5(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},og:function og(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
nd:function(){var t=0,s=P.bp(),r,q
var $async$nd=P.bx(function(a,b){if(a===1)return P.bu(b,s)
while(true)switch(t){case 0:P.fJ("loading big bads")
r=$
q=J
t=2
return P.cy(A.e9("BigBadLists/bigBads.txt",!1,!1,null),$async$nd)
case 2:r.wD=q.e2(b,P.d_("\n|\r",!0,!1))
return P.bv(null,s)}})
return P.bw($async$nd,s)},
H5:function(a){var t,s,r,q,p,o
t=J.e2(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bH)(t),++q){p=t[q]
o=J.be(p)
r+=" "+(J.yp(o.n(p,0))+o.ag(p,1))}return r}},V={
Hs:function(){A.rr()
W.vM(C.c.at("../",N.um())+"navbar.txt",null,null).b3(O.Hu())
V.Hc()},
Hc:function(){var t,s,r,q,p,o,n,m,l
t=O.xS("staff",null)
s=new P.dK(Date.now(),!1)
if(H.nN(s)===4&&H.nM(s)===1){r="#"+H.y(t)+"Avatar"
q=document.querySelector(r)
r=J.aS(q)
p=r.gai(q)
p.toString
r.sai(q,H.v3(p,".png","_sauce.png"))}r=J.ar(t)
if(r.R(t,"authorBot"))O.eV("N4Igzg9grgTgxgUxALhAJQQQwCYEsB2A5gAQCCAQgORjHm4QgA0I+mAtkquQnBB8ZmIBhAJ4AjCDEJMQAFwQAPWShDEIAd3wIYCVhxjEdmADa4AXghqyAFghHE4mfMTE8+CYggBuulwlnyBrgAZsQ2dsQAVlBgssTWOALEwQjqDuLaWrK4cMQADpgwsmAAdMQyYphwANaEMND42ABy7JwgAOL+AJL4ACq25BAKAPJiYNo+MCV5RDKyMLiEhNpCCfiIKgAMJQCsMmCIWmC9EACq+MYQNSoA2sAAOuDQ8AiPyI8ln4+Mj3qvKI9TuNiAB1LDGGxhCC0Nz8QRoCASWTfR7yJRvR5qTTaXStIJWXA6bBqUIQC72VwEEgAWWGAGVegAZACaxDAUDy2noBlk0J0hCgxkK8SgbCcpWI-QiYE5jQExmMJLCtkJxC8mFixHU4MhvKiMTiwSFcWgcVcvDhhkREFkZSlOmIuBoggAnAAWEqbADMAHYAKQONaIZWYOI2J2O51isxUkookCVGp1BrNVoYjrdPoDIajcYwSbTIjx+aLZYwVZORDp7Y+gBs8YOuksJ3Olxq6ZuAF14zp2RCwHTZKGwB2HvdfmnxwCpwA1LrU8coqfq4xQV5T95TgCMm0XIAAvoxiGOJxw95vHoyugAxACidNIpyEt73P2XJjX573O73h+Pe7+L8p1IdoXynN9HhXT8Nz3ABaLcdl-I8TxYScMSnIRhmpalbzQZ9Xz3KD13Qx54N3Kd927JhUQWJZtEHYdGUsPMOyon45FossGOKdojECUcALQ6dHgAESwromlIJp8PAwiP2I4SQB9JD-ynQCYIwrCcLwsCl0g+SgMeZSKLYmjS3oodilvABHKATFYx5KJkXtBWKbiwFuB5ULPAEQDnBdqJAIj0y3RzkNPf53hAMTqQkqT8MC4LfIADkczs5k4izGOY7RbnS5gSzomB3N4rBAjyjLzOKyywBsuzjAq-cgA")
if(r.R(t,"karmicRetribution"))O.eV("N4Igzg9grgTgxgUxALhAaQEoAIBGBLCLABwEMBzJAGhADsSBbJVAWQUawGUAXKAEwRpcQ1LggAeQ1BADuNBDAEN5WPGCxcSAGwDWeGmXWEAZjDwDeaiDXUALBCsHy5XAHRYAKjYhh7m7-LUfNkMsACsoMC5cewUiBBIuPQNGRjUuGwSsOGhNXiwMgDd7HAQBYm9RPJwATywSLABWAAYAWmr4mBaIXKxoLi6jFq5oOBssegh6Nxk5BTpGGCxIkhguQPkCpKwoIixxLhgSFpMEMDGU06wTSdt7fiJ0yyMsDAReXjxXYRAcEjhtMgwaA0XgAOSUKBAAHUrGRNAgYTBtC4iPpvgc8GQKDAAMIZGiISFNFwAdga3zAiDkYHcEAAqjQ-P9IQBtYAAHXA0HgCE5yE5mFwBGI5F5wk58zF-JArHYrx8K1G8k5lE5ogkfM5M3kigWSw0q0CcRBW0S7AYJDAYC29RsUAo+QgMH4vWeCj+iSsKnoorUJBBWHZQZACk0CRIOHhQc54zYpzcADEnXsijBataeAkCNZ0ghaoV7P66kQiEDS3gEvYyHgjJQlnAFAI4CRdsnskRqqRli4gzRe548-kSEUaAByKIeqBaTS1Lidt51K5QTSaJYCUQE+x6LDSUraMA98U-P4AoFQEHgxia6Gw+GI5GosgqtWmLHyPH+xDX4lk5-gKmnLSDJMto14sgAun+ChgMuazcAkYBgRywaStGKBoRwACCGA4phHDuAAku4dIACIAKJoaqwYFFoUC8sG-LBgAjGhAC+kFHhib4wPBawADKnD4MBgRxqogFx2K8WAADi7qiMJ6EgBBf4SfIUlkQAjlOmhIWhqEMRh2G4fhRGkRRwZUZyNGaHRaGMZyLHBuxnKsXWHJcrAX6KYK+CEKQFB-qhimyqc9CfDYKn7Ne2pzEoiwlNWNBqAoYViDaAYpZa8mmnYsapLc+bDvYXgrPwvBuCFyUIEYOqbr0uaLBcajbvUPiaIMCg1XMiRaL0sAQDgTreG4A7pgaUTDFgfg+IYUCjDu4UpvI1TpFsfTWi6uYOPJzh1Gkdi1IciAhNopS7DsC3pLcU2VpEhhEHgcAHn+vz-ICwJgko14wvod5Og++gqa+2Ifpu36kg0f6UgIgH0oyED-CJUGnLBYBSbpKFfQZwZYTheGEcR5GUWh1m2djDlsaJL6YpJGj8YJyqKcpnHA2pdMyXJjPSszYmqTx7OadpGMSljmo40Z+OmUTFkk7R9Fi5yABMlMuW5nKQJ5UoCtgvkigFR5BdKIV+M6kUaopHCwO6miqPQdQBjQeA2HgNtgHbDZndthAxbqyijmoTUOHsWm9YwlqwAgI0HVgNCEH4+jKJ1tXHXAVvrktghgHWOBQFEeiRPEeSQOwkSHAndSaDtlY7k6PQQM8Ealx6C5GJiEd+gG9zQdaVhuJh4xZco9d5ZcGRqLH0h2AoeyaDNk1kBA0yyLVcVDusZRbQcuc2FHOoqJYjK1FY9hb-YCBV6uFx1v6eS5rUzbWHIqZ7JSLZbq4L0nu956fVeik-XCBAfFvAHkfEDGm758ReWlD+SGR5obUiAvDRGTMqYhhRpXNG7Nha0FFuhcWeMTKE3Ms+aics7JoUci5NBfMpICStFzTkPNqbcSkrJeI8kkYswgfzBCgstA4P0grEAuNjIEzMsTMhNl5b4M5AAZhViAdi3xoKoykqydyhtOSiMlsQv8pMtYgBYko8C6JWa8PpgwmAGiRZ-2lDoohEijwGOvMY5RIhzFsM5tY1AEEzE8PUiHTQrJTGsSAA")
if(r.R(t,"authorBotJunior"))O.eV("N4Igzg9grgTgxgUxALhAJQQQwCYAICCAQgFIDkYuARgJYQB0IANCAHaYC2SqAmgmA8wAuCAB6CUIXBADuLBDARtOMXGEGYFFbAgQAHADYBPXJkGqInXADNqCurgA6IXvye5BACwTGwmQ41xvPlwFK30EOEFqFgBzdy9cbEwWOGi4sI4+ARBKTDgAaxiYaBZsADlMiQAVAAkASQBlRoAxOrKAUTpdWKYQQRhqGJj5AGEPZMQJAAY6AFYATl6wRDkwKogAVRZ9CAKJAG1gJ0hYRCdkJzorp0YnJQRzpxqYdleruhunYTFHyRk5BT3FTUCjSUxwDxpEy4ODQAwIXDsTD5BHQMxWYrsXDRMDUbTmSyUKBgLz8XBVLzGdhQQTCFQOBkgDwvN7XRkmCieby4KC6JLCeIIWyqSG6XRQop4+yfHJ5QrFKClCqcX4UkF1MAAGQgADcEHUAOJQPj8boxGX9QbDGBjCYPFBOGazGXLRR8dZbHYFX77AC6Ms0UH0gjADXUIZ9R0Z9wZj0ZhE1+AaAAUau0ALIAeQAGtxY0x8zrMPpjfmLoyAIz5gC+ASjd0yZfzaEz6ZGrfT7TQecZt0ZRZLD0Z5acVcZ1f9Bb6AyG8jDpi1JvkPsnt2nVrn4bABoUpmXDpAfotM+t85D7QAjlBiyunLXcEdwNB4PaLiB3jKYwe6iw6XworEACEwEWqIgi-FIsjyIomTAqC4KQrE0JWIq8jFrgujFIgYC4hALC4NI1CeCYYoaIoZgxOECDSoyP5-moaTAYB+YBFyxhwDA-jYjELAQAMSFcoktiCMYOwQPkFAYhYgqIs+AKuFOuQFEUJTlI2B4NBYCB4QgzRQAU0QACLUAg2BdLEx4bja4wpK+jpzC6Kzups2y7Pkt5ToGwahlukb5jGw75gmSaphmOY9p8-bFqWgWVjWdb+Y2sVOEmDQ1JmmpdhFBZRYOTZxeOq5fCem4LpqS4wB5a6WrOMBntuu50lVxVWfVl7XvoHkTr0XkhvVByPl+b7BSmaZZrmMoDqWB5ViA96Depb5oIaNRVO0mYbA0uDNBs3aTdFdkgLN3VCCVdVbuVOHyAcvq9DVp5bjuWB0jdd1nW1V7Fq91ZAA")
if(r.R(t,"jadedResearcher"))O.eV("N4Igzg9grgTgxgUxALhAJQQQwCYAIBSaA5GLgEICSA8iADQgB2mAtkqgIpQJgAuAlhAa4MmADZ8eATzogeCAB48UIXBADuDBDARNWMXAAtMpAEYIA5lCE8IuAI5deAodrETJAOly4AggDM5fUxcUUFzXAAraBhNSVpcHgMESVxWBB5cNQkDBKTcTAAHAsxtBgyfKESIfQg-XIQ+fR1+bWEscSkvCh4STIaYbC8AFSSUgGsEBALccz5zc1FuBmr+BnDMDPVNUpYtfJNoDLVMSVJE5Nw4TCErULgx1OqEDxePIgBxADkqAGUKH6IAH5gbgAOpGOQANz2iQ2uD4YFeMhMmHu5hg0AY2E+u2UABEAKI-AAKVCGHgKaxkPBgc3MWgAwkYGIhlAAGDwAVhkYEQmjAQwgAFUGHcxsoANrAAA64GiiFlyFlr1ltFlugQitlIuwWl41zwIg6klVsrkii1Ki2Wh0u30RlIkFE0LwwT8CDUuGJQoAWj6ADJE-JY3AMgASPn9gc+7yDsIy518lQM1UMxhCmD4eEOuD8qfOzGGo1wYEmzBLtgKED4ZUWYERuBGNYemAOlUyEMuEF1l2uuGwEC8-ogEAeVl1MSwiXq+SKJWaufzeTg3YQXbKGNE4jWuRr5lI460mg2Ble3jDUFPuAAsiczPVtL1gsUeIEhEltIDTSAUWiMeOcVYS1CRJMkKTWb8aTpRlmQVFBZQ5ABmAB2b9eR0bhBRFMVLQlABdb9tDAKBRB4MAfh4DYwFwmVpXVXY6K1OiQC+X5-kYugOMhMQuA4pVmIARg4gBfAjONkWl5i0CiqP9bhSxgXCxLVCToJgGSyPeVxAhojiNT4jjWL+H4OLVZjuNEXjmP42UhOY0TIMk+l1MosiCQcMQlNlYT4hlOVYDgpUQBVcT9PgkAmWuek2jcKRIIUHhLVUDQbQ1fRiOwXVRRSQ8YH1LFSAQaEYEkRI9yLfpcFcY14VIYIwD4ZgSI2Zx4kENcwAMCQpHiSB4QyK4hHvGs-BrCQEFEFI4GZelXRDZhuz4UaEDwEwUkTNQuuYUhahCcaYDESbgxSYxOogRZMmyCtWASRq10EepGjTAqvFBCbRC8ZLtltPQ00dCAbv4G6HvOJ7mWwBtfBDCQElgBgdvbDjTpTRYSo42q9sCQ6TpLVz4WsLrHS6191q6tYKpSEwoHWEM-CgetgzwVhMoug003uGcGvLKx+FEeoUiMaFUkweQVtUdtuNpaBHVcs5O0gcdcDGGtsGCcwR0GRtCcurd+wQUaGHGo7BbXZYSy0AR6aqqYtDgemGsEBtv1-MZ0UxbEGPCkDSXJSlzEctTIpZTVwqQ1DxPQ-ksNFCB7i88SiJIsiNOo8KpT0hjrI4ihrx8d4KE+HwhmoT5TK4njNSzwS2RE3yM6AqvZR+dghQoPE8UDH4CU+Luy-MiuDOr2vcFo+iG6Y2U8Soa8C58T4GQJPvZQsqyJ5AASa-suvmP0xuQGJOefHDRfmLM5eB73jfh9HxhM7Xn5PgJHwAGkfAPhkKCGABNJeQBXyu15Xy3iPeuAD4LMR+D4NADIfA-GLkMIUhJf7-0HrZTe3lt5jzATZEARIhgEgJNeZBF816IWvqA1BIAyBoB8AXT+iCT6mn7pZbBHEgEYJATvO+4DZT4CoGQAAYv6F+RJiEsMoZychXDx48IitPa8BJoGMM4sw1esj2EgB8pwrBlD-QUAEUSHwQoF5iLUTgjRWib67zXnnZRZ8-4kNkQAWgEpI4BVjuE4LDFQNAvdT7l3EXvAAHFInRe985oCGGGUxrCh7uIoXvGBAiBGz2LlQUu-jVGxLQaE2+MicGwJ+N4wMaAf6ZPPoEwB6DNHKTNE5aSss5L1i0PHFSUEpIuSolpKcLS04ePyYZb4xkYmUIAEwiVqapDpKd3JQE8mnMSljZQK3gCHIKIUVJhSCj4OAiACgZCNO4eKFpwpfVSnaa2bgABe3Bchwmqu4DGm04QwwRBTPWcAsxrhsLjKY+QGo9jzEER4rAygJFsIsBMeQKhVHSgULAYwvAcUIMgXAQorxhmSF0fsggiAZDGMsT0m0dC4EkNAIgrRXDYD3LuBst5JDDR6KQbAsAaWJh8AUWkfMBEjlEKQTl1xEU3jvGuCQvQWW0h3ImAALAAegEohXAYZDqqDqAI3YuAqZ8FEHgKABRsUDgYHi-IcAeBzK3FNecdyMhNWmq9TszANiBFIAiUl5LKVYGpTuCQ9q+DTVSFgeGbqoCXKZpTAQ8RNp+pyKwa4pAyVQApWuAoogTg0vEO6EsjVI1dX9bGoNCak24AUCm6obK8idRhvGXAFB4hsz6o6hgKQIDnDyvEE2uACjtgbVAf1u1oilmdLcmsNgiyCuDUOCwPrcBf2gIzTtCAIAprXOICYwbhZrphiqtQKwcjTvBOkD8-UwBEHyP2KAzATDFvkPC2koLKJ8xXMHfZe013+iWggH42bVBBCEDgalpq+BC3THTDm6IoBXoOgiGl5gNWrrXKCOkqMv3llTJAVgZUdwRHphkPqfhU2bHbAIueU9rz-NwD8MgQo0BkBQ71SYNL4VLouvBjscIKA4oxth3grwPA9v9WrDWu5yY1sMEutcHHBpK0mNMAc5aETxA4x2ht1wUgprjb1WwjbSZ7lIBx44YKfkDjHQwB4Cb23tV4JNeIQKSx6qrDAVY4RAYGH-OYHIZVETo28NaHYv0ERGoyNVI6xFWjPIyKp1V1qA3XB4PEKmEWMiLGMFCi4HbEw3KEKx1EezKLByiw8qQMxqw7lswWXAhKPDO1RK7f8WJAJrMnkSH24F-biXac5IOgUEJcjQnyTCwoY5xwWYRbgSdyKy10tI7J+8i4UG7iY8pDjKnqOqQ5dr9TOlkSaQpVpdS1Ip26RsXpQV07TcoUZdiS2UF73GfZSZHWGlUVmfM07-SZuFOKYospTCKlmI4mtxZeEZCJ1IhNqiko-JbNlJdky4kUHhSEjU6km2U47a0JKYH9BHtbbAEdwImOUcHdli90QhPhJAA")
if(r.R(t,"someBody"))O.eV("N4Igzg9grgTgxgUxALhAGQQQxgOwASYBG0ALnoTBAA5IA0IOmAtkqgMoQvEAmAngQEscAcjIALTFSq8Q9EggAeJFCAgB3HAhgJGLGHgBmQ7mDwkxCJmAQAbA3iEE8YiGCoCSmG7TxhPMIQBzAjJIFjxuKG4EB3xMZ0wyAxtEmyEggDo8NijonBteHwkySOjfD1M-GEwBQLEyKCoCHG48OBsIOABrU3NLWLMLQ0xELIAJdTwYKIQM2RBCEa7AyigWgDlmVhAJtw8vQgRuDKocQPmSAMDArQBhCRxEFQAGDIBWebBETTAAFQgAKr5TpdFQAbQAuvNtGAoDYSGA2J4EeDgAAdBhbDHIDEAJQAkgBxMa-ACiAHkAWw8AAxAG4gCaGNoGIAbl4oAhsRiAOwYgC+PnRmJY3JA5IAsut8WhyQBBX5jfHrQnMtkcrkoDEAZgFQoxuk1OJAbFJypp+NJaAAItlbnK0HLCaS1SB2TZOWKALQANgFULkVxuMCRiTAGDA1hg4IDIEutWDoYRhO0iS0MYuQa0SbApIAjlAvBn+UA")
if(r.R(t,"dilletantMathematician"))O.eV("N4Igzg9grgTgxgUxALhAGQQQxgOwJY4DmABJgEbQAuxAIgLIgA0IOmAtkqgMpsQDWCWgkoI4lCDGIAhTJREwAnsTQQA7kxAiAHpRQg1OBDASsOMAORhiYADYIEAB2J4rBeTCgORAE2JklmMQAFniEQQC0DniUcEEIvrF4MA4AdMTSCABmEoIGRibsRsRwmDjE3i4lML4hYAD0cZJwEDhgcHjQYIZgrtSJyVaYhJgEadJQ1HnGpkWYNsaY3kqxpYTxxJRxfrLyeAhWmy7EClgwYwCSB42CgWCixtRgvALlwqLiklMFZuUQ+zjmah8HBqUgUCYAfgAhBoyJg4HxCDBoDhvAA5Qp6Wz2Lx4Dj0FIOIgaSgwUJrGAAYSCpUQegADCkAEwaNomfYAFQgAFUcDYIAi9ABtAC6GmMYCgNkoYC4lFkYGFYuYpPJRjlCowPSMwuAAB0WIUDcgDVIAEoAQXOaPOHO5NAAogbGAaAG5zKAIY0GgAsBoAvsrNGTCBSNTKAOILeRKkkhsPymUOgCOUDmsf9QA")
if(r.R(t,"tableGuardian"))O.eV("N4Igzg9grgTgxgUxALhAdQJYDsAEAVAcQHIwcARBAQwBMcBlBMMDCLEAGhC0oFslU6aAHI4AggCUAwjgCMHEABcEADwUoQZSlgDmAOn04AkqQUALSgvq8oCADY4AYqwWVsCdjgAOGWxEsQAMxwzBHoXGDBTDE8cSUoYBBcAawQYD2wA3mhSB2xKewAhCCYAfhwATWgcACNE3RwIAHcsVIRuPhgcaghGGosFW1DGjDMcKJ4G3BCuhDgkhqDpuITk1PTcCBhqkYaAN1Tg01DPWy1EnAAtNoUYKB4AWhkcSlIdjFJqiB5a2mqAT0OoWqsCw2G0OEaCTmC0BYXikWisReKQU9SaLQS7QOngSnnivQCm2euBUcBGYL6CgGCH09WBlh2ChBpGg-haELs9hOlEQtE8UCwcFMwQgsLASSgtns7xwbWg2mFClF1RgFOmuW4hWKpG6zV08mqPKS2hg0Cw1CEvH4IACGAVChkuk8OnkNzt2lSknMgutAAZdABWeRgRAtMB4CAAVSwvjm6gA2sAADrgaDwBAp5Ap+45lPsFNYzMpwQiCTSABMeZTSlURY0bT0BmMhwsVh4NnsTiwLjcHmmRRaRxo60yPGyjjyWtKFSqtVRDWaqUxVs63V6hqpgwhI2F4xmCBitRaFkVRxwYFgmUQMIAaqlfJjHh5hmZsLC4JR9i3LKZsr1pnQ0D2JIMB-GALj2IEsIAArMKwGBwDgAAymy0JaABe8RJPiWD1ChEBJKQtgYCkbYds81SQFsCC0EcnSQJKz5REKODaJ+oR7pQrG+MMOg1LYNiyn8NILhibQrl4uL4qQhKdFosrKGSCgUhu1K0jUUAMpYTIwFgLKad+ODCZYlBsW+jKUCkLIxgCrBDJyXinLyXgCixSpihKUoijUqp8eqk44EUTBdOiuhViAhpzCaZoWlada2va5ZOjo4VutoHowF6WiIHW-oACzhSGbSMBG0axkkdaJkm1WprAOU1VmNU5vc1VVjVhYNa1IAlmIUg4AAzF1+Y1TWChdY1KYUDoUCmOpzZmK2dDWHYjjOK4LQeGAswrDggw0AcUHTLBLCgoh4iMLAHo+iOWRQDkAVBWAZSVFANR1KJrRYquPQfP0W4vruGATNgzDUKE0xwM4pr2KaXwwtMtqajgBB+C4pgxghwoALKzOYHhwLAmIDACb6bNs-hBAAovEZh4RABFESRoRLe2dgkA01Q9i0tDTAxtgsosZ5+HR54YMoyOo5Q6PESxH6eFzpBaLQrC2ACLQ0dZoRjgkb2yRxoQfrgPLKbsFjg2eKNUlLGNCuzNyCZ4TSpGii7Lh0kkHtJOCycSClKSpf00gY9I4IyzINAZYNgN4ShvRSCAAI5QNEng0duoyO40BzxNr6TaZZvQq7Z7JZ153LOfygqKqKvOefY7kqmqZ4avkgXaiFepDV1kXGqaAqxXw41dQlpgKP1yXaF3I2qulnrevVRY1f6g01cNKZFWGpUxhAcxDzVVWtV1DHpofe+nyAzWn6vV8FnFV8oDf3XCL10gFffa+H4oKhjffE2f1N2gbBzRMOYSwLNyJdhcKCdwXhTBgQQq3BA3wIDUCBtceGZ4KDgVNMJGA7NAKMVDlgUc44W5TiejOV6c4XZiS+iFdcgd06AwmBYCAMQlgvGpDCMgd0FAeFVMwPirJvamgmNMaK-dJiXGuLcB4MgmKtEODKfI9hahsVwshemhFdpMzImzUgZluY4Eht2aGexs7nkaDnGE3AsAQHuNQXhXgaYIUGGAJimMcA8ALjgKA7Czz7FAqxPu5oxihHAkrayNDPoSRxJ7BIMkiTyVJOSPiqlBjqRDngAAEoYOg+BDBY0ph4LipcuROTTpXNyNczziklPYYYXkhAAHk8BvVlHYqACpvKNz8s3B67ddQaPRDE926tqAmBqdgeY5gYBgzkqEm4AJTLrVpI-D+3cjQSPNJaQev9H4jwUHlCe6zH5pQyllH0j8-5dX9JWd+j8N4lSjNvXe+z74HxvvfY+C8vmfxuX87MuZAWfw2YCrgd8QWdShTVHqZYcB5WQDgcQlMyDNJhdfDFX9axYoBX8kAhgFB2zQdEt2BxzCJMkcIxooDARqwQGndyiMVEAn5CZEkiyamhDIW3YKUE6BA1IJgMwwihB3FqDAeo4CVqQPWqEGUF4cTvDTv8D6ZK8GkCsTACYSCVQ8hgTSzxCQeDYAmWMIGMIaWijPAkFlocwDqS4gEAU9xfC7DBM+ZVcAYBGgpAEVUbRqBSuWjDJBurUikCiKQJBfgTruJwAkAAVrMZSfSDZQwgPXTBjAbgQFwfgoCYwXjmM6CEHgJTQkymZVKAE-qGU9NCEkHwgxaAA2EdMIG2sIIjABCaLQShfgAlqBSPEMAKawiwbm-NpACG2HqIS4IBdSB2K8Zsc28k7IcjLhUlyVdGVcvPHXby3RzwQDClisF+Ke7bIHhmXFGKUyHOOc6SeF6H2KBnhc+ed6YUPyxTId9l6vngFDM8sqO8Kr3qxfGAAuoB99CTJQKDAHQFwyH314uA58h9v6Oo4d-Zh-D99xDNKxpIUjRTxDlCI7+oDNHP6mwEj++jwHCMsZTG-djj8AC+cG31YvOakVDFgwBIUYFtGAGH32wfgwJz9Qm0NgAILapQkmoO-uw1xz+eGtP-N08R0j5GsaUeo-p0FZmGP5BsBZs+FmQABhszVXjsnf2CZgMJ5DlMk75Ck9Bvjv7nMPPvoh2wyGPNgGuY-TT4KdMgr-b+kjZGKOUyoy5qFIBGPWfU+lgDWLAvn0vR+90CmRNiaYKkSLHz-Pmfvm58LymqCqcq+fGTQXz51cU15qAPn3kteTFi2L4K2Pn0S0ZkzaW4uZeY3F4bn8V4Beq11fLHAuohbC4ps+IBou3z2efPFIBRvJdS21yzTHmuf1y+fZba8iuz3c4psrEnNutbatWeT92RMNbNmpxeKYXsrensVj7nnvO2Ge-18+g3fuf0O8ZlLpmCuPym+drq9yrv+ZAM5lbIA1soY2w-LbEOIW7fiwdwzR2EcA5TMj6FKZLuY7g9jjrpXxMVYJzJpn736sqbZ1mLbjP8y3YyuFrrPn2dE7w6T2H43MXU6sz+0n9Ose8fkLj8LCZkzE4zAT6X8PwrI4JwBhnroucPdZzABMMGTdA+5411Ilvrd3ZF6DjXO3td8916l7HBu+e+hTCr7jQA")
r="#"+H.y(t)
p=document
o=p.querySelector(r)
if(o!=null)J.rN(o).ae(0,"void")
n=H.eU(p.querySelector("#layWaste"),"$isf0")
n.toString
W.ef(n,"click",new V.ro(),!1,W.ue)
r=P.B
m=B.eM
l=new B.oY(P.a3(null,null,null,r),P.bZ(r,m),P.bZ(r,m),!1,null)
m=new A.hN(null,null)
m.c9(null)
l.e=m
l.bg("headcanon")
p=J.yb(p.querySelector("#askAB"))
W.ef(p.a,p.b,new V.rp(l),!1,H.T(p,0))},
ro:function ro(){},
rp:function rp(a){this.a=a},
ld:function ld(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
lZ:function lZ(a){this.a=a},
mj:function mj(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
_.N=N
_.a4=a4
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
na:function na(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
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
_.x1=x1},
nx:function nx(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},
oX:function oX(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
zf:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dt(new P.cd(""),0,0)
t.ah(a,8)
s=Math.pow(256,e)
c.toString
r=H.cR(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.w(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.w(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ah(n-1,p)
t.ah(a,8)}return t.b4(b)},
ze:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cD(c)
s=new Uint8Array(t)
r=new B.dg(null,0)
r.a=J.e1(a,b)
for(q=e*8,p=0;p<c;){o=r.a6(q)+1
n=r.a6(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.w(s,l)
s[l]=n}p+=o}return s},
t7:function(a){return new V.ln(a)},
t6:function(a){return new V.lm(a)},
zb:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dt(new P.cd(""),0,0)
t.ah(a,8)
s=d.gcQ()
r=C.f.ak(Math.log(H.ki(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cR(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.w(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.w(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ah(m-1,o)
t.ah(a,r)}return t.b4(b)},
za:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cD(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ak(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dg(null,0)
p.a=J.e1(a,b)
for(r=e*8,o=0;o<c;){n=p.a6(r)+1
m=p.a6(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.w(s,k)
s[k]=m}o+=n}return s},
t5:function(a){return new V.ll(a)},
t4:function(a){return new V.lk(a)},
zd:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dt(new P.cd(""),0,0)
t.ah(a,8)
s=d.gcQ()
r=C.f.ak(Math.log(H.ki(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cR(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.w(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.w(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.ak(Math.log(n)/0.6931471805599453)+1
t.ah(k-1,5)
t.ah(n-1,k)
t.ah(a,r)}return t.b4(b)},
zc:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cD(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ak(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dg(null,0)
p.a=J.e1(a,b)
for(o=0;o<c;){n=p.a6(p.a6(5)+1)+1
m=p.a6(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
ln:function ln(a){this.a=a},
lm:function lm(a){this.a=a},
ll:function ll(a){this.a=a},
lk:function lk(a){this.a=a}},A={kS:function kS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
i:function(a,b,c,d,e){var t=new A.a5(c,e,null,null,a,!1,P.a3(null,null,null,G.a0),0,3)
t.H(a,b,c,!1,e)
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
mA:function mA(){},
mz:function mz(){},
fV:function fV(){},
fY:function(a,b,c,d){var t=new A.dJ(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eP(a,b,c,d)
return t},
t_:function(a,b,c,d){var t=A.fY(0,0,0,255)
t.b=C.a.ab(C.d.ak(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ab(C.d.ak(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ab(C.d.ak(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ab(C.d.ak(d*255),0,255)
return t},
yR:function(a,b){if(b){if(typeof a!=="number")return a.aJ()
return A.fY((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aJ()
return A.fY((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
vo:function(a){return A.yR(H.fr(a,16,new A.ri()),a.length>=8)},
dJ:function dJ(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
ri:function ri(){},
wA:function(){if($.wy)return
$.wy=!0
Z.zn()},
e9:function(a,b,c,d){var t=0,s=P.bp(),r,q,p,o,n
var $async$e9=P.bx(function(e,f){if(e===1)return P.bu(f,s)
while(true)switch(t){case 0:A.wA()
t=$.$get$cX().U(0,a)?3:5
break
case 3:q=$.$get$cX().n(0,a)
p=J.ar(q)
if(!!p.$isdT){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cC(q)
t=1
break}}else throw H.k("Requested resource ("+a+") is an unexpected type: "+H.y(J.vb(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.u7==null?8:9
break
case 8:t=10
return P.cy(A.mZ(),$async$e9)
case 10:case 9:n=$.u7.ev(a)
t=n!=null?11:12
break
case 11:t=13
return P.cy(A.mU(n),$async$e9)
case 13:if(!$.$get$cX().U(0,a))$.$get$cX().i(0,a,new Y.dT(a,null,H.a([],[[P.f2,,]]),[null]))
r=$.$get$cX().n(0,a).b
t=1
break
case 12:case 7:r=A.EW(a,!1,d)
t=1
break
case 4:case 1:return P.bv(r,s)}})
return P.bw($async$e9,s)},
mZ:function(){var t=0,s=P.bp(),r
var $async$mZ=P.bx(function(a,b){if(a===1)return P.bu(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cy(A.e9("manifest/manifest.txt",!1,!0,$.vJ),$async$mZ)
case 2:r.u7=b
return P.bv(null,s)}})
return P.bw($async$mZ,s)},
EV:function(a){if(!$.$get$cX().U(0,a))$.$get$cX().i(0,a,new Y.dT(a,null,H.a([],[[P.f2,,]]),[null]))
return $.$get$cX().n(0,a)},
EW:function(a,b,c){var t
if($.$get$cX().U(0,a))throw H.k("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vI(C.b.gbb(a.split("."))).a
t=A.EV(a)
c.b2(A.wx(a,!1)).b3(new A.mX(t))
return t.cC(0)},
mU:function(a){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$mU=P.bx(function(b,a0){if(b===1)return P.bu(a0,s)
while(true)switch(t){case 0:t=3
return P.cy(A.e9(a+".bundle",!1,!0,null),$async$mU)
case 3:q=a0
p=C.c.K(a,0,C.c.e9(a,$.$get$wz()))
o=P.d6
n=new P.e_(new P.bl(0,$.am,null,[o]),[o])
m=H.a([],[P.cF])
for(o=J.y9(q),l=o.length,k=[[P.f2,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bH)(o),++i){h=o[i]
g=J.aS(h)
f=Z.vI(C.b.gbb(J.e2(g.gG(h),"."))).a
e=p+"/"+H.y(g.gG(h))
if($.$get$cX().U(0,e)){m.push(A.e9(e,!1,!1,null))
continue}d=H.eU(g.gbd(h),"$isdb")
if(!$.$get$cX().U(0,e))$.$get$cX().i(0,e,new Y.dT(e,null,H.a([],k),j))
c=$.$get$cX().n(0,e)
m.push(c.cC(0))
f.ba(d.buffer).b3(new A.mV(f,c))}P.zx(m,null,!1).b3(new A.mW(n))
r=n.a
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$mU,s)},
hy:function(a,b){var t=0,s=P.bp(),r,q,p,o,n
var $async$hy=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:if($.$get$u6().U(0,a)){r=$.$get$u6().n(0,a)
t=1
break}q=W.fu
p=new P.bl(0,$.am,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.ef(n,"load",new A.mY(new P.e_(p,[q]),n),!1,W.U)
n.src=A.wx(a,!1)
r=p
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$hy,s)},
wx:function(a,b){if(C.c.af(a,"/")){a=C.c.ag(a,1)
b=!0}else b=!1
if(b)return H.y(window.location.protocol)+"//"+H.y(window.location.host)+"/"+a
return C.c.at("../",N.um())+a},
mX:function mX(a){this.a=a},
mV:function mV(a,b){this.a=a
this.b=b},
mW:function mW(a){this.a=a},
mY:function mY(a,b){this.a=a
this.b=b},
ny:function ny(){},
jG:function jG(){},
hN:function hN(a,b){this.a=a
this.b=b},
rr:function(){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$rr=P.bx(function(a0,a1){if(a0===1)return P.bu(a1,s)
while(true)switch(t){case 0:if($.xO){t=1
break}$.xO=!0
D.Gc()
q=P.B
p=[q]
o=H.a(["metal"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,0.3)
$.$get$c().h(0,o)
$.D=o
o=H.a(["dutton"],p)
n=$.aa
H.a([],p)
o=new G.bJ(null,n,o,0.6)
$.$get$c().h(0,o)
$.w_=o
o=H.a(["ceramic"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.3)
$.$get$c().h(0,o)
$.bS=o
o=H.a(["bone"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,0.2)
$.$get$c().h(0,o)
$.aZ=o
o=H.a(["wood"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.3)
$.$get$c().h(0,o)
$.X=o
o=H.a(["plastic"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.3)
$.$get$c().h(0,o)
$.aE=o
o=H.a(["rubber"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.3)
$.$get$c().h(0,o)
$.cc=o
o=H.a(["paper"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.3)
$.$get$c().h(0,o)
$.K=o
o=H.a(["cloth","fabric"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.3)
$.$get$c().h(0,o)
$.O=o
o=H.a(["glass"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.3)
$.$get$c().h(0,o)
$.aP=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.3)
$.$get$c().h(0,o)
$.bW=o
o=H.a(["flesh","meat","muscle"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.1)
$.$get$c().h(0,o)
$.bj=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.G
H.a([],p)
o=new G.bJ(null,n,o,3.1)
$.$get$c().h(0,o)
$.bn=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.1)
$.$get$c().h(0,o)
$.ch=o
o=H.a(["plant","leaf","vine"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.1)
$.$get$c().h(0,o)
$.aR=o
o=H.a(["feathery"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.1)
$.$get$c().h(0,o)
$.br=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.I
H.a([],p)
o=new G.bJ(null,n,o,0.1)
$.$get$c().h(0,o)
$.bY=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.I
H.a([],p)
o=new G.bJ(null,n,o,-13)
$.$get$c().h(0,o)
$.bT=o
o=H.a(["stone","rock","concrete"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,0.3)
$.$get$c().h(0,o)
$.av=o
o=H.a(["legendary"],p)
n=$.my
H.a([],p)
o=new G.bJ(null,n,o,13)
$.$get$c().h(0,o)
$.a_=o
o=H.a(["Unbeatable"],p)
n=$.my
H.a([],p)
o=new G.bJ(null,n,o,40.37)
$.$get$c().h(0,o)
$.EA=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.at=o
o=$.tS
H.a([],p)
o=new G.aJ(null,o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.aQ=o
o=$.tS
H.a([],p)
o=new G.aJ(null,o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.ak=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bi=o
o=$.G
H.a([],p)
o=new G.aJ(null,o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.c6=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.aX=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bX=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aD=o
o=$.G
H.a([],p)
o=new G.aJ(null,o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aL=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bo=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a7=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.aW=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bf=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.an=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.ah=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.al=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.Y=o
o=$.G
H.a([],p)
o=new G.aJ(null,o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.au=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aA=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.aU=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bq=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a1=o
o=$.my
H.a([],p)
o=new G.aJ(null,o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.R=o
o=$.my
H.a([],p)
o=new G.aJ(null,o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.S=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.ax=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.aI=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aF=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.b_=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bP=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bm=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.cb=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.ap=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.ag=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$c().h(0,o)
$.aK=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$c().h(0,o)
$.a9=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aV=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aO=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.bk=o
o=H.a(["perfectly generic"],p)
n=$.I
H.a([],p)
o=new G.ae(null,n,o,0.1)
$.$get$c().h(0,o)
$.w2=o
o=H.a(["a sword"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.eu=o
o=H.a(["a hammer"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mr=o
o=H.a(["a rifle"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tN=o
o=H.a(["a pistol"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tH=o
o=H.a(["a blade"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.vT=o
o=H.a(["a dagger"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tx=o
o=H.a(["a santa"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.hr=o
o=H.a(["a fist"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.w0=o
o=H.a(["claws"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mp=o
o=H.a(["a grenade"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mq=o
o=H.a(["a freaking safe"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wi=o
o=H.a(["a ball"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.fg=o
o=H.a(["a trident"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wp=o
o=H.a(["a card"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mo=o
o=H.a(["a frying pan"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tA=o
o=H.a(["a pillow"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.hq=o
o=H.a(["a machinegun"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tD=o
o=H.a(["a shuriken"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wm=o
o=H.a(["a sling"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wo=o
o=H.a(["a yoyo"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wr=o
o=H.a(["a cane"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.vV=o
o=H.a(["a shield"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.fi=o
o=H.a(["a lance"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wb=o
o=H.a(["a ax"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tt=o
o=H.a(["a sign"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wg=o
o=H.a(["a book"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.aC=o
o=H.a(["a broom"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jn=o
o=H.a(["a club"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jp=o
o=H.a(["a bow"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tu=o
o=H.a(["a whip"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wq=o
o=H.a(["a staff"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tP=o
o=H.a(["a needle"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tF=o
o=H.a(["dice"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ty=o
o=H.a(["a fork"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.w1=o
o=H.a(["a pigeon???"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,1.3)
$.$get$c().h(0,o)
$.tG=o
o=H.a(["a chainsaw"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.vW=o
o=H.a(["a sickle"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wn=o
o=H.a(["a shotgun"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wk=o
o=H.a(["a stick"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.dP=o
o=H.a(["a chain"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.et=o
o=H.a(["a wrench"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tQ=o
o=H.a(["a shovel"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wl=o
o=H.a(["a rolling pin"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tO=o
o=H.a(["a puppet"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tL=o
o=H.a(["a razor"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tM=o
o=H.a(["a pen"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mu=o
o=H.a(["a bust"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jo=o
o=H.a(["a bowling ball"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.Ac=o
o=H.a(["a golf club"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.w4=o
o=H.a(["a knife"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wa=o
o=H.a(["scissors"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wj=o
o=H.a(["a pizza cutter"],p)
n=$.a2
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tI=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.G
m=G.a0
l=[m]
k=H.a([$.D,$.at,$.aL],l)
H.a([],p)
o=new G.d("Forged",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a([],p)
n=$.u
k=H.a([$.ag,$.at],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.B1=o
o=H.a(["fossilized"],p)
n=$.G
k=H.a([$.aZ,$.av],l)
H.a([],p)
o=new G.d("Fossilized",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["adamantium"],p)
n=$.G
k=H.a([$.aZ,$.D],l)
H.a([],p)
o=new G.d("Adamantium",k,null,n,o,0)
$.$get$c().h(0,o)
$.vR=o
o=H.a([],p)
n=$.u
k=H.a([$.b_,$.aF],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["tatami"],p)
n=$.u
k=H.a([$.O,$.X],l)
H.a([],p)
o=new G.d("Tatami",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["mesh","chain link"],p)
n=$.u
k=H.a([$.O,$.D],l)
H.a([],p)
o=new G.d("Mesh",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["foil"],p)
n=$.u
k=H.a([$.K,$.D],l)
H.a([],p)
o=new G.d("Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["beanbag"],p)
n=$.u
k=H.a([$.O,$.av],l)
H.a([],p)
o=new G.d("Beanbag",k,null,n,o,0)
$.$get$c().h(0,o)
$.A6=o
o=H.a(["pleather","faux fur"],p)
n=$.u
k=H.a([$.ch,$.aE],l)
H.a([],p)
o=new G.d("Faux Fur",k,null,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["plywood"],p)
n=$.u
k=H.a([$.X,$.K],l)
H.a([],p)
o=new G.d("Plywood",k,null,n,o,0)
$.$get$c().h(0,o)
$.tJ=o
o=H.a(["colossus"],p)
n=$.u
k=H.a([$.D,$.bj],l)
H.a([],p)
o=new G.d("Colossus",k,null,n,o,0)
$.$get$c().h(0,o)
$.vX=o
o=H.a(["rotting","zombie"],p)
n=$.G
k=H.a([$.bY,$.bj],l)
H.a([],p)
o=new G.d("Rotting",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["draugr","white walker"],p)
n=$.G
k=H.a([$.bY,$.bj,$.bm],l)
H.a([],p)
o=new G.d("Draugr",k,null,n,o,0)
$.$get$c().h(0,o)
$.AZ=o
o=H.a(["Ultraviolet"],p)
n=$.tR
k=H.a([$.aQ,$.ak],l)
H.a([],p)
o=new G.d("Ultraviolet",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.aQ,$.ak,$.at],l)
H.a([],p)
o=new G.d("Ultraviolence",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a([],p)
n=$.q
k=H.a([$.aD,$.bX],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.AX=o
o=H.a(["candy"],p)
n=$.u
k=H.a([$.an,$.aP],l)
H.a([],p)
o=new G.d("Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.tv=o
o=H.a(["cotton candy"],p)
n=$.u
k=H.a([$.an,$.O],l)
H.a([],p)
o=new G.d("Cotton Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.AI=o
o=H.a(["gummy"],p)
n=$.u
k=H.a([$.an,$.cc],l)
H.a([],p)
o=new G.d("Gum",k,null,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["marrow"],p)
n=$.u
k=H.a([$.an,$.aZ],l)
H.a([],p)
o=new G.d("Marrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["toothy"],p)
n=$.a2
k=H.a([$.aZ,$.bS],l)
H.a([],p)
o=new G.d("Toothy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["Frost"],p)
n=$.u
k=H.a([$.av,$.aP,$.bj],l)
H.a([],p)
o=new G.d("Frost",k,null,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.an,$.bP],l)
H.a([],p)
o=new G.d("Arsenic",k,null,n,o,0)
$.$get$c().h(0,o)
$.B6=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.u
k=H.a([$.av,$.aP],l)
H.a([],p)
o=new G.d("Crystal",k,null,n,o,0)
$.$get$c().h(0,o)
$.tw=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.I
k=H.a([$.ax,$.aA,$.aU,$.Y,$.ah,$.bX,$.a1],l)
H.a([],p)
o=new G.d("Mary Sue",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.I
k=H.a([$.aX,$.ak,$.at,$.a_,$.aD,$.Y,$.ah,$.al],l)
H.a([],p)
o=new G.d("Edge Lord",k,null,n,o,0)
$.$get$c().h(0,o)
$.B4=o
o=H.a(["deadpool"],p)
n=$.a2
k=H.a([$.bY,$.aI,$.al,$.aU],l)
H.a([],p)
o=new G.d("Deadpool",k,null,n,o,0)
$.$get$c().h(0,o)
$.AO=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.I
k=H.a([$.aX,$.al],l)
H.a([],p)
o=new G.d("Spoopy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["wolverine"],p)
n=$.a2
k=H.a([$.aZ,$.at,$.aL],l)
H.a([],p)
o=new G.d("Wolverine",k,null,n,o,0)
$.$get$c().h(0,o)
$.EL=o
o=H.a(["rabbit's foot"],p)
n=$.a2
k=H.a([$.bX,$.ch],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,null,n,o,0)
$.$get$c().h(0,o)
$.wf=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.G
k=H.a([$.aL,$.X],l)
H.a([],p)
o=new G.d("Tipped",k,null,n,o,0)
$.$get$c().h(0,o)
$.A_=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a2
k=H.a([$.aL,$.aK,$.X],l)
H.a([],p)
o=new G.d("Arrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.vS=o
o=H.a(["training sword","bokken"],p)
n=$.a2
k=H.a([$.X,$.at],l)
H.a([],p)
o=new G.d("Bokken",k,null,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aO,$.al],l)
H.a([],p)
o=new G.d("Irony Type1",k,null,n,o,0)
$.$get$c().h(0,o)
$.ms=o
o=H.a(["netted","webbed"],p)
n=$.a2
k=H.a([$.aW,$.O],l)
H.a([],p)
o=new G.d("Netted",k,null,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["barbed wire"],p)
n=$.a2
k=H.a([$.aL,$.aW,$.D,$.O],l)
H.a([],p)
o=new G.d("Barbed Wire",k,null,n,o,0)
$.$get$c().h(0,o)
$.A3=o
o=H.a(["morning star"],p)
n=$.a2
k=H.a([$.aL,$.ag],l)
H.a([],p)
o=new G.d("Morning Star",k,null,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["decadent"],p)
n=$.I
k=H.a([$.b_,$.bf],l)
H.a([],p)
o=new G.d("Decadent",k,null,n,o,0)
$.$get$c().h(0,o)
$.AR=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bT,$.al],l)
H.a([],p)
o=new G.d("SBAHJ",k,null,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["bayonet"],p)
n=$.a2
k=H.a([$.aL,$.aK],l)
H.a([],p)
o=new G.d("Bayonet",k,null,n,o,0)
$.$get$c().h(0,o)
$.A5=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.u
k=H.a([$.bm,$.al,$.at],l)
H.a([],p)
o=new G.d("Snoop",k,null,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.aQ,$.ap,$.at],l)
H.a([],p)
o=new G.d("Light Saber",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.I
k=H.a([$.a1,$.aO],l)
H.a([],p)
o=new G.d("Fakey Fake",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.I
k=H.a([$.a1,$.bk],l)
H.a([],p)
o=new G.d("Real As Shit",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["skeletal"],p)
n=$.a2
k=H.a([$.aX,$.aD,$.aZ],l)
H.a([],p)
o=new G.d("Skeletal",k,null,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["green sun"],p)
n=$.tS
k=H.a([$.ap,$.c6,$.aQ],l)
H.a([],p)
o=new G.d("Green Sun",k,null,n,o,0)
$.$get$c().h(0,o)
$.tC=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tR
k=H.a([$.ak,$.ah],l)
H.a([],p)
o=new G.d("Midnight",k,null,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["radiant","dazzling"],p)
n=$.I
k=H.a([$.a1,$.aQ],l)
H.a([],p)
o=new G.d("Radiant",k,null,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["edgy"],p)
n=$.I
k=H.a([$.at,$.ak,$.al],l)
H.a([],p)
o=new G.d("Edgy",k,null,n,o,0)
$.$get$c().h(0,o)
$.B5=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c6,$.bo],l)
H.a([],p)
o=new G.d("Warhead",k,null,n,o,0)
$.$get$c().h(0,o)
$.zT=o
o=H.a(["living"],p)
n=$.G
k=H.a([$.aZ,$.bj,$.au],l)
H.a([],p)
o=new G.d("Living",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["dead","corpse","deceased"],p)
n=$.G
k=H.a([$.aZ,$.bj],l)
H.a([],p)
o=new G.d("Dead",k,null,n,o,0)
$.$get$c().h(0,o)
$.AN=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a7,$.aW,$.aK],l)
H.a([],p)
o=new G.d("Taser",k,null,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.ak,$.a9],l)
H.a([],p)
o=new G.d("Nocturn",k,null,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aD,$.a9],l)
H.a([],p)
o=new G.d("Dirge",k,null,n,o,0)
$.$get$c().h(0,o)
$.AU=o
o=H.a(["Snobbish","Noble"],p)
n=$.I
k=H.a([$.ah,$.bf],l)
H.a([],p)
o=new G.d("Snobbish",k,null,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["flat"],p)
n=$.I
k=H.a([$.ag,$.a9],l)
H.a([],p)
o=new G.d("Flat(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.at,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.ah,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,null,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["Bach's"],p)
n=$.aa
k=H.a([$.Y,$.a9],l)
H.a([],p)
o=new G.d("Bach's",k,null,n,o,0)
$.$get$c().h(0,o)
$.A1=o
o=H.a(["Mozart's"],p)
n=$.aa
k=H.a([$.a1,$.a9],l)
H.a([],p)
o=new G.d("Mozart's",k,null,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.aa
k=H.a([$.Y,$.c6],l)
H.a([],p)
o=new G.d("Einstein's",k,null,n,o,0)
$.$get$c().h(0,o)
$.B7=o
o=H.a(["Feynman's"],p)
n=$.aa
k=H.a([$.Y,$.aU],l)
H.a([],p)
o=new G.d("Feynman's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["Ziptie"],p)
n=$.aa
k=H.a([$.aE,$.aW],l)
H.a([],p)
o=new G.d("Ziptie",k,null,n,o,0)
$.$get$c().h(0,o)
$.EP=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.D,$.Y],l)
H.a([],p)
o=new G.d("Mobile",k,null,n,o,0)
$.$get$c().h(0,o)
$.mw=o
o=H.a(["Sassacre"],p)
n=$.aa
k=H.a([$.cb,$.aU],l)
H.a([],p)
o=new G.d("Sassacre",k,null,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ag,$.cb],l)
H.a([],p)
o=new G.d("Sledge",k,null,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.aW,$.K],l)
H.a([],p)
o=new G.d("Legal",k,null,n,o,0)
$.$get$c().h(0,o)
$.mt=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.aU,$.aV],l)
H.a([],p)
o=new G.d("Clown",k,null,n,o,0)
$.$get$c().h(0,o)
$.AC=o
o=H.a(["passionate"],p)
n=$.I
k=H.a([$.ap,$.aA],l)
H.a([],p)
o=new G.d("Passionate",k,null,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["pinata"],p)
n=$.a2
k=H.a([$.K,$.an],l)
H.a([],p)
o=new G.d("Pinata",k,null,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ag,$.cb,$.D],l)
H.a([],p)
o=new G.d("Anvil",k,null,n,o,0)
$.$get$c().h(0,o)
$.zZ=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.aQ,$.bo],l)
H.a([],p)
o=new G.d("Flashbang",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.ak,$.bo],l)
H.a([],p)
o=new G.d("Smokebomb",k,null,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.ak,$.at],l)
H.a([],p)
o=new G.d("Ninja",k,null,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a7,$.a9],l)
H.a([],p)
o=new G.d("Techno",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.av,$.a9],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a2
k=H.a([$.au,$.bj,$.aK],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,null,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.aU,$.a9,$.aV,$.aX],l)
H.a([],p)
o=new G.d("Juggalo",k,null,n,o,0)
$.$get$c().h(0,o)
$.w9=o
o=H.a(["shocksauce"],p)
n=$.I
k=H.a([$.al,$.a7],l)
H.a([],p)
o=new G.d("Shock Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["weaksauce"],p)
n=$.I
k=H.a([$.ag,$.al,$.bT],l)
H.a([],p)
o=new G.d("Weak Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.EF=o
o=H.a(["spicy","picante"],p)
n=$.I
k=H.a([$.ap,$.an],l)
H.a([],p)
o=new G.d("Spicy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["ice cream","popsicle"],p)
n=$.u
k=H.a([$.bm,$.an],l)
H.a([],p)
o=new G.d("Popsicle",k,null,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["popsickle"],p)
n=$.u
k=H.a([$.bm,$.an,$.at],l)
H.a([],p)
o=new G.d("Popsickle",k,null,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["icepick"],p)
n=$.u
k=H.a([$.bm,$.aL],l)
H.a([],p)
o=new G.d("Icepick",k,null,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["schezwan"],p)
n=$.I
k=H.a([$.al,$.an],l)
H.a([],p)
o=new G.d("Schezwan",k,null,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.ak,$.a9,$.al,$.a7],l)
H.a([],p)
o=new G.d("Vaporwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["mallet"],p)
n=$.a2
k=H.a([$.X,$.ag],l)
H.a([],p)
o=new G.d("Mallet",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aE,$.al],l)
H.a([],p)
o=new G.d("Fidget",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["gold foil"],p)
n=$.u
k=H.a([$.D,$.K,$.bf],l)
H.a([],p)
o=new G.d("Gold Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["caviar"],p)
n=$.u
k=H.a([$.an,$.bf],l)
H.a([],p)
o=new G.d("Caviar",k,null,n,o,0)
$.$get$c().h(0,o)
$.As=o
o=H.a(["RADioactive"],p)
n=$.I
k=H.a([$.c6,$.al],l)
H.a([],p)
o=new G.d("RADioactive",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["glam"],p)
n=$.I
k=H.a([$.av,$.a9,$.ax],l)
H.a([],p)
o=new G.d("Glam",k,null,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["hair metal"],p)
n=$.I
k=H.a([$.D,$.a9,$.ax],l)
H.a([],p)
o=new G.d("Hair Metal",k,null,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["elven","fae","sylvan"],p)
n=$.I
k=H.a([$.a1,$.ax],l)
H.a([],p)
o=new G.d("Elven",k,null,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["shiny"],p)
n=$.I
k=H.a([$.D,$.ax],l)
H.a([],p)
o=new G.d("Shiny",k,null,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.I
k=H.a([$.bf,$.ax,$.ah],l)
H.a([],p)
o=new G.d("Bespoke",k,null,n,o,0)
$.$get$c().h(0,o)
$.fh=o
o=H.a(["operatic"],p)
n=$.I
k=H.a([$.bf,$.a9,$.ah],l)
H.a([],p)
o=new G.d("Operatic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["ice","diamond"],p)
n=$.u
k=H.a([$.bf,$.bm],l)
H.a([],p)
o=new G.d("Diamond",k,null,n,o,0)
$.$get$c().h(0,o)
$.w7=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.I
k=H.a([$.ap,$.bm],l)
H.a([],p)
o=new G.d("Icy Hot",k,null,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.I
k=H.a([$.al,$.bm],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,null,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["winter's","season's"],p)
n=$.aa
k=H.a([$.bi,$.bm],l)
H.a([],p)
o=new G.d("Winter's",k,null,n,o,0)
$.$get$c().h(0,o)
$.EI=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.aa
k=H.a([$.a1,$.bm],l)
H.a([],p)
o=new G.d("Christmas",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ay=o
o=H.a(["Santa Saws"],p)
n=$.aa
k=H.a([$.a1,$.bm,$.at],l)
H.a([],p)
o=new G.d("Santa Saws",k,null,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["Santa Sleighs"],p)
n=$.aa
k=H.a([$.hr,$.at],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,null,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["Santa Claws"],p)
n=$.aa
k=H.a([$.hr,$.mp],l)
H.a([],p)
o=new G.d("Santa Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["Sandy Claws"],p)
n=$.aa
k=H.a([$.hr,$.mp,$.av],l)
H.a([],p)
o=new G.d("Sandy Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Silent Night"],p)
n=$.aa
k=H.a([$.hr,$.ak],l)
H.a([],p)
o=new G.d("Silent Night",k,null,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.aa
k=H.a([$.aX,$.bW],l)
H.a([],p)
o=new G.d("Ghost's",k,null,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["ghoul","mutant"],p)
n=$.u
k=H.a([$.bj,$.c6,$.bY],l)
H.a([],p)
o=new G.d("Mutant",k,null,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.al,$.D],l)
H.a([],p)
o=new G.d("Skateboard",k,null,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c6,$.a7,$.an],l)
H.a([],p)
o=new G.d("Microwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c6,$.a7,$.an,$.aK],l)
H.a([],p)
o=new G.d("Orbital",k,null,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a([],p)
n=$.q
k=H.a([$.ag,$.Y],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.B2=o
o=H.a(["uranium"],p)
n=$.u
k=H.a([$.c6,$.av],l)
H.a([],p)
o=new G.d("Uranium",k,null,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.K,$.cc],l)
H.a([],p)
o=new G.d("Mousepad",k,null,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["flint"],p)
n=$.u
k=H.a([$.at,$.av],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["flint"],p)
n=$.u
k=H.a([$.aL,$.av],l)
H.a([],p)
o=new G.d("Pointed Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aE,$.aL],l)
H.a([],p)
o=new G.d("Picnic",k,null,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["xtreme xplosion"],p)
n=$.I
k=H.a([$.al,$.bo],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,null,n,o,0)
$.$get$c().h(0,o)
$.EO=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aE,$.b_],l)
H.a([],p)
o=new G.d("Lawn",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["upholstered"],p)
n=$.u
k=H.a([$.O,$.b_],l)
H.a([],p)
o=new G.d("Upholstered",k,null,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["leather"],p)
n=$.u
k=H.a([$.bj,$.b_],l)
H.a([],p)
o=new G.d("Leather",k,null,n,o,0)
$.$get$c().h(0,o)
$.wd=o
o=H.a(["shag"],p)
n=$.u
k=H.a([$.ch,$.b_],l)
H.a([],p)
o=new G.d("Shag",k,null,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["loyal"],p)
n=$.I
k=H.a([$.ag,$.aA],l)
H.a([],p)
o=new G.d("Loyal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["porcelain"],p)
n=$.u
k=H.a([$.ax,$.bS],l)
H.a([],p)
o=new G.d("Porcelain",k,null,n,o,0)
$.$get$c().h(0,o)
$.tK=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a2
k=H.a([$.bf,$.bS],l)
H.a([],p)
o=new G.d("Pork Hollow",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.al,$.at],l)
H.a([],p)
o=new G.d("Katana",k,null,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["chocolate"],p)
n=$.u
k=H.a([$.aA,$.an],l)
H.a([],p)
o=new G.d("Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ax=o
o=H.a(["wrapped chocolate"],p)
n=$.u
k=H.a([$.aA,$.an,$.K,$.D],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["scratch-n-sniff"],p)
n=$.u
k=H.a([$.al,$.K],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,null,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["mythril","orichalcum"],p)
n=$.u
k=H.a([$.a1,$.D],l)
H.a([],p)
o=new G.d("Mythril",k,null,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["titanium","steel"],p)
n=$.u
k=H.a([$.ag,$.D],l)
H.a([],p)
o=new G.d("Titanium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a(["lead"],p)
n=$.u
k=H.a([$.cb,$.D],l)
H.a([],p)
o=new G.d("Lead",k,null,n,o,0)
$.$get$c().h(0,o)
$.wc=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aO,$.aU],l)
H.a([],p)
o=new G.d("Satire",k,null,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["comedy gold"],p)
n=$.I
k=H.a([$.bf,$.aU],l)
H.a([],p)
o=new G.d("Comedy Gold",k,null,n,o,0)
$.$get$c().h(0,o)
$.AE=o
o=H.a(["dry","sensible chuckle"],p)
n=$.I
k=H.a([$.ah,$.aU],l)
H.a([],p)
o=new G.d("Dry",k,null,n,o,0)
$.$get$c().h(0,o)
$.B_=o
o=H.a(["polite"],p)
n=$.I
k=H.a([$.b_,$.aO],l)
H.a([],p)
o=new G.d("Polite",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["stradivarius"],p)
n=$.aa
k=H.a([$.ah,$.bf,$.X,$.a9],l)
H.a([],p)
o=new G.d("Stradivarius",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["scientistic"],p)
n=$.I
k=H.a([$.Y,$.aO],l)
H.a([],p)
o=new G.d("Scientistic",k,null,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a7,$.au],l)
H.a([],p)
o=new G.d("AI",k,null,n,o,0)
$.$get$c().h(0,o)
$.ts=o
o=H.a(["robotic"],p)
n=$.G
k=H.a([$.D,$.a7,$.au],l)
H.a([],p)
o=new G.d("Robotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.wh=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.X,$.bo],l)
H.a([],p)
o=new G.d("Shrapnel",k,null,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.au,$.a7,$.a9],l)
H.a([],p)
o=new G.d("Vocaloid",k,null,n,o,0)
$.$get$c().h(0,o)
$.EE=o
o=H.a(["*Hyun-ae"],p)
n=$.aa
k=H.a([$.au,$.a7,$.aA],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,null,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.X,$.aK],l)
H.a([],p)
o=new G.d("Buckshot",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ag=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.cb,$.aK],l)
H.a([],p)
o=new G.d("Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ap=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.ah,$.K],l)
H.a([],p)
o=new G.d("Stationary",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a([],p)
n=$.q
k=H.a([$.aC,$.K],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a([],p)
n=$.q
k=H.a([$.D,$.aK],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.at,$.K],l)
H.a([],p)
o=new G.d("Papercut",k,null,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["squeaky"],p)
n=$.G
k=H.a([$.ag,$.cc],l)
H.a([],p)
o=new G.d("Squeaky",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aO,$.a9],l)
H.a([],p)
o=new G.d("Kazoo",k,null,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aI,$.K],l)
H.a([],p)
o=new G.d("Bandaid",k,null,n,o,0)
$.$get$c().h(0,o)
$.A2=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aI,$.an],l)
H.a([],p)
o=new G.d("Gushers",k,null,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aI,$.aK],l)
H.a([],p)
o=new G.d("Medic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["sick nasty","ill"],p)
n=$.G
k=H.a([$.al,$.bP],l)
H.a([],p)
o=new G.d("Sick Nasty",k,null,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["gilded","gold leaf"],p)
n=$.u
k=H.a([$.D,$.X],l)
H.a([],p)
o=new G.d("Gilded",k,null,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aE,$.a7],l)
H.a([],p)
o=new G.d("Charging",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aw=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.cc,$.at],l)
H.a([],p)
o=new G.d("Rubber Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aE,$.at],l)
H.a([],p)
o=new G.d("Plastic Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["thunderous","thor's"],p)
n=$.I
k=H.a([$.aV,$.a7],l)
H.a([],p)
o=new G.d("Thunderous",k,null,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["screeching","dial up"],p)
n=$.I
k=H.a([$.aV,$.a7,$.Y],l)
H.a([],p)
o=new G.d("Screeching",k,null,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.aP,$.D],l)
H.a([],p)
o=new G.d("Mirrored",k,null,n,o,0)
$.$get$c().h(0,o)
$.tE=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.aP,$.av,$.a1],l)
H.a([],p)
o=new G.d("Far Seeing",k,null,n,o,0)
$.$get$c().h(0,o)
$.vY=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.cc,$.aK],l)
H.a([],p)
o=new G.d("Nonlethal",k,null,n,o,0)
$.$get$c().h(0,o)
$.AV=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.ax,$.ah],l)
H.a([],p)
o=new G.d("Fashionable",k,null,n,o,0)
$.$get$c().h(0,o)
$.tz=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aU,$.al],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,null,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.bT,$.aU],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,null,n,o,0)
$.$get$c().h(0,o)
$.w8=o
o=H.a(["post-ironic"],p)
n=$.I
k=H.a([$.aO,$.al,$.ah],l)
H.a([],p)
o=new G.d("Post Ironic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["monstrous"],p)
n=$.I
k=H.a([$.bY,$.aV,$.aX],l)
H.a([],p)
o=new G.d("Monstrous",k,null,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aK,$.al,$.ah],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["golden"],p)
n=$.u
k=H.a([$.D,$.bf],l)
H.a([],p)
o=new G.d("Golden",k,null,n,o,0)
$.$get$c().h(0,o)
$.tB=o
o=H.a(["platinum"],p)
n=$.u
k=H.a([$.aQ,$.D],l)
H.a([],p)
o=new G.d("Platinum",k,null,n,o,0)
$.$get$c().h(0,o)
$.mv=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bX,$.D],l)
H.a([],p)
o=new G.d("Horseshoe",k,null,n,o,0)
$.$get$c().h(0,o)
$.w6=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.O,$.ch],l)
H.a([],p)
o=new G.d("Felt",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["marble"],p)
n=$.u
k=H.a([$.av,$.ah],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.we=o
o=H.a(["marble"],p)
n=$.u
k=H.a([$.av,$.cb],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["glitched"],p)
n=$.G
k=H.a([$.bn,$.a7],l)
H.a([],p)
o=new G.d("Glitched",k,null,n,o,0)
$.$get$c().h(0,o)
$.w3=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aI,$.a7],l)
H.a([],p)
o=new G.d("Debugging",k,null,n,o,0)
$.$get$c().h(0,o)
$.AQ=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.D,$.aV,$.a9],l)
H.a([],p)
o=new G.d("Metalic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["Simulacrum"],p)
n=$.I
k=H.a([$.au,$.aO],l)
H.a([],p)
o=new G.d("Simulacrum",k,null,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.an,$.aO],l)
H.a([],p)
o=new G.d("Imitation",k,null,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aI,$.aO],l)
H.a([],p)
o=new G.d("Placebo",k,null,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bf,$.aO],l)
H.a([],p)
o=new G.d("Counterfeit",k,null,n,o,0)
$.$get$c().h(0,o)
$.AJ=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.al,$.aF,$.aU],l)
H.a([],p)
o=new G.d("Surreal1",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["Brainy"],p)
n=$.I
k=H.a([$.Y,$.bj],l)
H.a([],p)
o=new G.d("Brainy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ad=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.ap,$.bo],l)
H.a([],p)
o=new G.d("Incendiary",k,null,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["C-4"],p)
n=$.u
k=H.a([$.bo,$.aE],l)
H.a([],p)
o=new G.d("C-4",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ak=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a1,$.aQ,$.bn],l)
H.a([],p)
o=new G.d("Fae",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["Plutonium"],p)
n=$.u
k=H.a([$.D,$.c6],l)
H.a([],p)
o=new G.d("Plutonium",k,null,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["Lithium"],p)
n=$.u
k=H.a([$.D,$.a7],l)
H.a([],p)
o=new G.d("Lithium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["Molten"],p)
n=$.u
k=H.a([$.D,$.ap],l)
H.a([],p)
o=new G.d("Molten",k,null,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.u
k=H.a([$.av,$.ap],l)
H.a([],p)
o=new G.d("Magma",k,null,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["Rusty"],p)
n=$.G
k=H.a([$.D,$.bT],l)
H.a([],p)
o=new G.d("Rusty",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.at,$.al,$.ah],l)
H.a([],p)
o=new G.d("Fonzie",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aA,$.aU],l)
H.a([],p)
o=new G.d("Romcom",k,null,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.ax,$.aQ],l)
H.a([],p)
o=new G.d("Alluring",k,null,n,o,0)
$.$get$c().h(0,o)
$.zW=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.ax,$.ak],l)
H.a([],p)
o=new G.d("Masquerade",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.av,$.bj],l)
H.a([],p)
o=new G.d("Stoneskin",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a1,$.Y],l)
H.a([],p)
o=new G.d("Psionic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a1,$.av],l)
H.a([],p)
o=new G.d("Dwarven",k,null,n,o,0)
$.$get$c().h(0,o)
$.B3=o
o=H.a(["Elemental","Animated"],p)
n=$.u
k=H.a([$.a1,$.au],l)
H.a([],p)
o=new G.d("Elemental",k,null,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["Gourmet"],p)
n=$.I
k=H.a([$.an,$.ah],l)
H.a([],p)
o=new G.d("Gourmet",k,null,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["Stained Glass"],p)
n=$.u
k=H.a([$.aP,$.ax,$.bf],l)
H.a([],p)
o=new G.d("Stained Glass",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aI,$.O],l)
H.a([],p)
o=new G.d("Gauze",k,null,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["Locked"],p)
n=$.G
k=H.a([$.aW,$.bq],l)
H.a([],p)
o=new G.d("Locked",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.av,$.K],l)
H.a([],p)
o=new G.d("Etched",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["Papyrus"],p)
n=$.u
k=H.a([$.K,$.aR],l)
H.a([],p)
o=new G.d("Papyrus",k,null,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.K,$.aE],l)
H.a([],p)
o=new G.d("Film",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["Saucey"],p)
n=$.u
k=H.a([$.bn,$.bq,$.an],l)
H.a([],p)
o=new G.d("Saucey",k,null,n,o,0)
$.$get$c().h(0,o)
$.jq=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.K,$.bX],l)
H.a([],p)
o=new G.d("Lottery",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.ak,$.O],l)
H.a([],p)
o=new G.d("Blindfolded",k,null,n,o,0)
$.$get$c().h(0,o)
$.vU=o
o=H.a(["Possessed"],p)
n=$.G
k=H.a([$.bW,$.bj],l)
H.a([],p)
o=new G.d("Possessed",k,null,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["Infernal"],p)
n=$.I
k=H.a([$.bW,$.ap],l)
H.a([],p)
o=new G.d("Infernal",k,null,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.X,$.bk,$.tL,$.au],l)
H.a([],p)
o=new G.d("Geppetto",k,null,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["Abominable"],p)
n=$.I
k=H.a([$.bj,$.bn],l)
H.a([],p)
o=new G.d("Abominable",k,null,n,o,0)
$.$get$c().h(0,o)
$.zU=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aA,$.aD],l)
H.a([],p)
o=new G.d("Ashen",k,null,n,o,0)
$.$get$c().h(0,o)
$.A0=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aA,$.bi],l)
H.a([],p)
o=new G.d("Pale",k,null,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aA,$.bq],l)
H.a([],p)
o=new G.d("Pitch",k,null,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["Lit"],p)
n=$.I
k=H.a([$.al,$.ap],l)
H.a([],p)
o=new G.d("Lit",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a1,$.bi],l)
H.a([],p)
o=new G.d("Hypnotizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bi,$.aW],l)
H.a([],p)
o=new G.d("Tranquilizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a([],p)
n=$.q
k=H.a([$.bi,$.bq],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.An=o
o=H.a(["Ghost Rider's"],p)
n=$.aa
k=H.a([$.et,$.ap,$.bW],l)
H.a([],p)
o=new G.d("Ghost Rider",k,null,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Logical"],p)
n=$.I
k=H.a([$.Y,$.bm],l)
H.a([],p)
o=new G.d("Logical",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["Duelist's"],p)
n=$.aa
k=H.a([$.aK,$.ah],l)
H.a([],p)
o=new G.d("Duelist's",k,null,n,o,0)
$.$get$c().h(0,o)
$.B0=o
o=H.a(["Silenced"],p)
n=$.G
k=H.a([$.aK,$.ak],l)
H.a([],p)
o=new G.d("Silenced",k,null,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["Deudly"],p)
n=$.G
k=H.a([$.aK,$.bT],l)
H.a([],p)
o=new G.d("Deudly",k,null,n,o,0)
$.$get$c().h(0,o)
$.AP=o
o=H.a(["Screaming"],p)
n=$.G
k=H.a([$.aV,$.aX],l)
H.a([],p)
o=new G.d("Screaming",k,null,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["Cacophonous"],p)
n=$.I
k=H.a([$.bY,$.a9],l)
H.a([],p)
o=new G.d("Cacophonous",k,null,n,o,0)
$.$get$c().h(0,o)
$.Al=o
o=H.a(["Sublime"],p)
n=$.I
k=H.a([$.bY,$.ax],l)
H.a([],p)
o=new G.d("Sublime",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["Masterwork"],p)
n=$.u
k=H.a([$.bk,$.bf],l)
H.a([],p)
o=new G.d("Masterwork",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.au,$.aX,$.bn,$.a1],l)
H.a([],p)
o=new G.d("BroodFester",k,null,n,o,0)
$.$get$c().h(0,o)
$.Af=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bn,$.ak],l)
H.a([],p)
o=new G.d("[REDACTED]",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.an,$.bo],l)
H.a([],p)
o=new G.d("Pop Rocks",k,null,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["Disguised"],p)
n=$.G
k=H.a([$.ak,$.aO],l)
H.a([],p)
o=new G.d("Disguised",k,null,n,o,0)
$.$get$c().h(0,o)
$.AW=o
o=H.a(["Haunted"],p)
n=$.G
k=H.a([$.aF,$.bW],l)
H.a([],p)
o=new G.d("Haunted",k,null,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["Cognitohazardous"],p)
n=$.G
k=H.a([$.bn,$.Y],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,null,n,o,0)
$.$get$c().h(0,o)
$.AD=o
o=H.a(["Staticy"],p)
n=$.G
k=H.a([$.aF,$.a7],l)
H.a([],p)
o=new G.d("Staticy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.aP,$.c6],l)
H.a([],p)
o=new G.d("Jadite",k,null,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.aU,$.aF],l)
H.a([],p)
o=new G.d("Tickling",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.D,$.bS],l)
H.a([],p)
o=new G.d("Composite",k,null,n,o,0)
$.$get$c().h(0,o)
$.AF=o
o=H.a(["High-Powered"],p)
n=$.G
k=H.a([$.bo,$.aK],l)
H.a([],p)
o=new G.d("High-Powered",k,null,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bo,$.ag],l)
H.a([],p)
o=new G.d("Concussive",k,null,n,o,0)
$.$get$c().h(0,o)
$.AG=o
o=H.a(["Down"],p)
n=$.u
k=H.a([$.b_,$.br],l)
H.a([],p)
o=new G.d("Down",k,null,n,o,0)
$.$get$c().h(0,o)
$.AY=o
o=H.a(["Prickly"],p)
n=$.u
k=H.a([$.aF,$.aL],l)
H.a([],p)
o=new G.d("Prickly",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aF,$.ak,$.a7],l)
H.a([],p)
o=new G.d("Deep-Web",k,null,n,o,0)
$.$get$c().h(0,o)
$.AS=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.u
k=H.a([$.aL,$.at],l)
H.a([],p)
o=new G.d("Jagged",k,null,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["Nanofiber"],p)
n=$.u
k=H.a([$.O,$.Y],l)
H.a([],p)
o=new G.d("Nanofiber",k,null,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.D,$.aV],l)
H.a([],p)
o=new G.d("Clanging",k,null,n,o,0)
$.$get$c().h(0,o)
$.Az=o
o=H.a(["Silver"],p)
n=$.u
k=H.a([$.D,$.ah],l)
H.a([],p)
o=new G.d("Silver",k,null,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["Withered"],p)
n=$.G
k=H.a([$.aD,$.aR],l)
H.a([],p)
o=new G.d("Withered",k,null,n,o,0)
$.$get$c().h(0,o)
$.EK=o
o=H.a(["Shattered"],p)
n=$.G
k=H.a([$.aP,$.bT],l)
H.a([],p)
o=new G.d("Shattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["Miner's"],p)
n=$.aa
k=H.a([$.av,$.D],l)
H.a([],p)
o=new G.d("Miner's",k,null,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a9,$.au],l)
H.a([],p)
o=new G.d("Singing",k,null,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bj,$.a7],l)
H.a([],p)
o=new G.d("Mitochondrial",k,null,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.ak,$.a7],l)
H.a([],p)
o=new G.d("Blackout",k,null,n,o,0)
$.$get$c().h(0,o)
$.A8=o
o=H.a(["Asbestos"],p)
n=$.u
k=H.a([$.av,$.bP],l)
H.a([],p)
o=new G.d("Asbestos",k,null,n,o,0)
$.$get$c().h(0,o)
$.zV=o
o=H.a(["Mercurial"],p)
n=$.u
k=H.a([$.bP,$.D],l)
H.a([],p)
o=new G.d("Mercurial",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["Bulletproof"],p)
n=$.u
k=H.a([$.O,$.ag],l)
H.a([],p)
o=new G.d("Bulletproof",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ai=o
o=H.a(["Cotton"],p)
n=$.u
k=H.a([$.aR,$.O],l)
H.a([],p)
o=new G.d("Cotton",k,null,n,o,0)
$.$get$c().h(0,o)
$.AH=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bq,$.aQ],l)
H.a([],p)
o=new G.d("Blinding",k,null,n,o,0)
$.$get$c().h(0,o)
$.A9=o
o=H.a(["Brilliant"],p)
n=$.I
k=H.a([$.aQ,$.Y],l)
H.a([],p)
o=new G.d("Brilliant",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ae=o
o=H.a(["Offensive"],p)
n=$.I
k=H.a([$.bq,$.Y],l)
H.a([],p)
o=new G.d("Offensive",k,null,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["Poached"],p)
n=$.G
k=H.a([$.bj,$.bf],l)
H.a([],p)
o=new G.d("Poached",k,null,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["Tapestry"],p)
n=$.u
k=H.a([$.O,$.ax],l)
H.a([],p)
o=new G.d("Tapestry",k,null,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["Itchy"],p)
n=$.I
k=H.a([$.O,$.aF],l)
H.a([],p)
o=new G.d("Itchy",k,null,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["Wishbone"],p)
n=$.u
k=H.a([$.bX,$.aZ],l)
H.a([],p)
o=new G.d("Wishbone",k,null,n,o,0)
$.$get$c().h(0,o)
$.EJ=o
o=H.a(["Rattling"],p)
n=$.G
k=H.a([$.aV,$.aZ],l)
H.a([],p)
o=new G.d("Rattling",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Cranial"],p)
n=$.u
k=H.a([$.Y,$.aZ],l)
H.a([],p)
o=new G.d("Cranial",k,null,n,o,0)
$.$get$c().h(0,o)
$.AL=o
o=H.a(["Humerus"],p)
n=$.u
k=H.a([$.aU,$.aZ],l)
H.a([],p)
o=new G.d("Humerus",k,null,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aI,$.b_],l)
H.a([],p)
o=new G.d("Massage",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["Pestersome","Irksome"],p)
n=$.I
k=H.a([$.aV,$.bq],l)
H.a([],p)
o=new G.d("Pestersome",k,null,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aV,$.bo],l)
H.a([],p)
o=new G.d("Shockwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bP,$.aI],l)
H.a([],p)
o=new G.d("Antivenom",k,null,n,o,0)
$.$get$c().h(0,o)
$.zY=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.u
k=H.a([$.ap,$.a1],l)
H.a([],p)
o=new G.d("Will O Wisp",k,null,n,o,0)
$.$get$c().h(0,o)
$.EG=o
o=H.a(["Fiberglass"],p)
n=$.u
k=H.a([$.O,$.aP],l)
H.a([],p)
o=new G.d("Fiberglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["Skull"],p)
n=$.u
k=H.a([$.aZ,$.aX],l)
H.a([],p)
o=new G.d("Skull",k,null,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["Enchanted"],p)
n=$.G
k=H.a([$.a1,$.bX],l)
H.a([],p)
o=new G.d("Enchanted",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["Berserker's"],p)
n=$.aa
k=H.a([$.a1,$.bq],l)
H.a([],p)
o=new G.d("Berserker's",k,null,n,o,0)
$.$get$c().h(0,o)
$.A7=o
o=H.a(["Clerical"],p)
n=$.aa
k=H.a([$.a1,$.aI],l)
H.a([],p)
o=new G.d("Clerical",k,null,n,o,0)
$.$get$c().h(0,o)
$.AA=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aI,$.ap],l)
H.a([],p)
o=new G.d("Cauterizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ar=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c6,$.aQ],l)
H.a([],p)
o=new G.d("X-Ray",k,null,n,o,0)
$.$get$c().h(0,o)
$.EN=o
o=H.a(["Clever"],p)
n=$.I
k=H.a([$.Y,$.bX],l)
H.a([],p)
o=new G.d("Clever",k,null,n,o,0)
$.$get$c().h(0,o)
$.AB=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.b_,$.ap],l)
H.a([],p)
o=new G.d("Fireplace",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["Crackling"],p)
n=$.G
k=H.a([$.aV,$.ap],l)
H.a([],p)
o=new G.d("Crackling",k,null,n,o,0)
$.$get$c().h(0,o)
$.AK=o
o=H.a(["Thumping"],p)
n=$.G
k=H.a([$.aV,$.cb],l)
H.a([],p)
o=new G.d("Thumping",k,null,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["Shrieking","Banshee"],p)
n=$.G
k=H.a([$.bW,$.aV],l)
H.a([],p)
o=new G.d("Banshee",k,null,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.aU,$.bn],l)
H.a([],p)
o=new G.d("Surreal2",k,null,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aI,$.aR],l)
H.a([],p)
o=new G.d("Aloe",k,null,n,o,0)
$.$get$c().h(0,o)
$.zX=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aA,$.aR],l)
H.a([],p)
o=new G.d("Rose",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.aU,$.ag],l)
H.a([],p)
o=new G.d("Knock Knock",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a1,$.bP],l)
H.a([],p)
o=new G.d("Lifesteal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.ax,$.aD],l)
H.a([],p)
o=new G.d("Tragic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.at,$.aU],l)
H.a([],p)
o=new G.d("Slapstick",k,null,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bY,$.aU],l)
H.a([],p)
o=new G.d("Gross Out",k,null,n,o,0)
$.$get$c().h(0,o)
$.w5=o
o=H.a(["Flowery"],p)
n=$.u
k=H.a([$.ax,$.aR],l)
H.a([],p)
o=new G.d("Flowery",k,null,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["Poison Ivy"],p)
n=$.u
k=H.a([$.bP,$.aR],l)
H.a([],p)
o=new G.d("Poison Ivy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.G
k=H.a([$.a1,$.br],l)
H.a([],p)
o=new G.d("Winged",k,null,n,o,0)
$.$get$c().h(0,o)
$.EH=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.aR,$.an,$.aD],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["Lawful"],p)
n=$.I
k=H.a([$.aW,$.au],l)
H.a([],p)
o=new G.d("Lawful",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["Chaotic"],p)
n=$.I
k=H.a([$.bq,$.au],l)
H.a([],p)
o=new G.d("Chaotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Av=o
o=H.a(["Hypothermic"],p)
n=$.G
k=H.a([$.aD,$.bm],l)
H.a([],p)
o=new G.d("Hypothermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["Hyperthermic"],p)
n=$.G
k=H.a([$.aD,$.ap],l)
H.a([],p)
o=new G.d("Hyperthermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Shackled"],p)
n=$.G
k=H.a([$.aW,$.cb],l)
H.a([],p)
o=new G.d("Shackled",k,null,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["Poetic"],p)
n=$.I
k=H.a([$.Y,$.aA],l)
H.a([],p)
o=new G.d("Poetic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["Holographic"],p)
n=$.u
k=H.a([$.aQ,$.Y,$.aP,$.a7],l)
H.a([],p)
o=new G.d("Holographic",k,null,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["Casket","Coffin"],p)
n=$.u
k=H.a([$.X,$.aD],l)
H.a([],p)
o=new G.d("Casket",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aq=o
o=H.a(["Spectral"],p)
n=$.u
k=H.a([$.bW,$.a1],l)
H.a([],p)
o=new G.d("Spectral",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["Phoenix"],p)
n=$.u
k=H.a([$.ap,$.br],l)
H.a([],p)
o=new G.d("Phoenix",k,null,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["Tattered"],p)
n=$.G
k=H.a([$.O,$.aD],l)
H.a([],p)
o=new G.d("Tattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a9,$.X],l)
H.a([],p)
o=new G.d("Woodwind",k,null,n,o,0)
$.$get$c().h(0,o)
$.EM=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aF,$.aZ],l)
H.a([],p)
o=new G.d("Bone Hurting",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ab=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aI,$.aZ],l)
H.a([],p)
o=new G.d("Bone Healing:",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aa=o
o=H.a(["Calcium"],p)
n=$.u
k=H.a([$.aZ,$.aI,$.an],l)
H.a([],p)
o=new G.d("Calcium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Am=o
o=H.a(["Fleece"],p)
n=$.u
k=H.a([$.O,$.ap],l)
H.a([],p)
o=new G.d("Fleece",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["Potted"],p)
n=$.u
k=H.a([$.bS,$.aR],l)
H.a([],p)
o=new G.d("Potted",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.u
k=H.a([$.D,$.an],l)
H.a([],p)
o=new G.d("Canned",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ao=o
o=H.a(["Diseased"],p)
n=$.G
k=H.a([$.aD,$.bj],l)
H.a([],p)
o=new G.d("Diseased",k,null,n,o,0)
$.$get$c().h(0,o)
$.AT=o
o=H.a(["Porcupine"],p)
n=$.u
k=H.a([$.aL,$.ch],l)
H.a([],p)
o=new G.d("Porcupine",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["Fanged"],p)
n=$.G
k=H.a([$.aZ,$.aL],l)
H.a([],p)
o=new G.d("Fanged",k,null,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["Basalt"],p)
n=$.u
k=H.a([$.av,$.ak],l)
H.a([],p)
o=new G.d("Basalt",k,null,n,o,0)
$.$get$c().h(0,o)
$.A4=o
o=H.a(["Obsidian"],p)
n=$.u
k=H.a([$.aP,$.ak],l)
H.a([],p)
o=new G.d("Obsidian",k,null,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["Fenestrated"],p)
n=$.u
k=H.a([$.aP,$.X],l)
H.a([],p)
o=new G.d("Fenestrated",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["Plexiglass"],p)
n=$.u
k=H.a([$.aP,$.aE],l)
H.a([],p)
o=new G.d("Plexiglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bS,$.K],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,null,n,o,0)
$.$get$c().h(0,o)
$.Au=o
o=H.a(["Fungal"],p)
n=$.u
k=H.a([$.aR,$.bY],l)
H.a([],p)
o=new G.d("Fungal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["Thorny"],p)
n=$.G
k=H.a([$.aR,$.aL],l)
H.a([],p)
o=new G.d("Thorny",k,null,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["Bulbed"],p)
n=$.G
k=H.a([$.aR,$.ag],l)
H.a([],p)
o=new G.d("Bulbed",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ah=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.aP,$.aK],l)
H.a([],p)
o=new G.d("Glass Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.aR,$.cc],l)
H.a([],p)
o=new G.d("Caoutchouc",k,null,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["Cellulose"],p)
n=$.u
k=H.a([$.aR,$.aE],l)
H.a([],p)
o=new G.d("Cellulose",k,null,n,o,0)
$.$get$c().h(0,o)
$.At=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a9,$.aX],l)
H.a([],p)
o=new G.d("Horrorcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bn,$.a9],l)
H.a([],p)
o=new G.d("Nightcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bn,$.a7,$.a9],l)
H.a([],p)
o=new G.d("Crazy Bus",k,null,n,o,0)
$.$get$c().h(0,o)
$.AM=o
o=H.a(["Burdock"],p)
n=$.u
k=H.a([$.aR,$.ch],l)
H.a([],p)
o=new G.d("Burdock",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aj=o
o=H.a(["Necrotic"],p)
n=$.G
k=H.a([$.aZ,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Necrotic",k,null,n,o,0))
o=H.a(["Stem"],p)
n=$.u
k=H.a([$.aZ,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stem",k,null,n,o,0))
o=H.a(["DryBone"],p)
n=$.G
k=H.a([$.aZ,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("DryBone",k,null,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.aZ,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("XyloBone",k,null,n,o,0))
o=H.a(["Ribcage"],p)
n=$.u
k=H.a([$.aZ,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ribcage",k,null,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.aZ,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("BoneZone",k,null,n,o,0))
o=H.a(["Creaky"],p)
n=$.I
k=H.a([$.X,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Creaky",k,null,n,o,0))
o=H.a(["Maple"],p)
n=$.u
k=H.a([$.X,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Maple",k,null,n,o,0))
o=H.a(["Mahagony"],p)
n=$.u
k=H.a([$.X,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mahagony",k,null,n,o,0))
o=H.a(["Fenced"],p)
n=$.G
k=H.a([$.X,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fenced",k,null,n,o,0))
o=H.a(["Bocote"],p)
n=$.u
k=H.a([$.X,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bocote",k,null,n,o,0))
o=H.a(["Incense"],p)
n=$.u
k=H.a([$.X,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incense",k,null,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.X,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebony",k,null,n,o,0))
o=H.a(["Birch"],p)
n=$.u
k=H.a([$.X,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Birch",k,null,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.q
k=H.a([$.X,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knock-on-Wood",k,null,n,o,0))
o=H.a(["Firewood"],p)
n=$.q
k=H.a([$.X,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firewood",k,null,n,o,0))
o=H.a(["BlackForest"],p)
n=$.aa
k=H.a([$.X,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackForest",k,null,n,o,0))
o=H.a(["Tree"],p)
n=$.u
k=H.a([$.X,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tree",k,null,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.u
k=H.a([$.X,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebonwood",k,null,n,o,0))
o=H.a(["Bark"],p)
n=$.u
k=H.a([$.X,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bark",k,null,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.X,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Caveman's",k,null,n,o,0))
o=H.a(["3D Printed"],p)
n=$.u
k=H.a([$.aE,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("3D Printed",k,null,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.K,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thesis",k,null,n,o,0))
o=H.a(["Graphene"],p)
n=$.u
k=H.a([$.K,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graphene",k,null,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.K,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prophecy",k,null,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.O,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedsheet",k,null,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.u
k=H.a([$.av,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gemstone",k,null,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.av,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pet Rock",k,null,n,o,0))
o=H.a(["Sand"],p)
n=$.u
k=H.a([$.av,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sand",k,null,n,o,0))
o=H.a(["Geode"],p)
n=$.u
k=H.a([$.av,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Geode",k,null,n,o,0))
o=H.a(["Silicon"],p)
n=$.u
k=H.a([$.av,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silicon",k,null,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.u
k=H.a([$.av,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryolite",k,null,n,o,0))
o=H.a(["Meteor"],p)
n=$.u
k=H.a([$.av,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meteor",k,null,n,o,0))
o=H.a(["Carbon"],p)
n=$.u
k=H.a([$.av,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon",k,null,n,o,0))
o=H.a(["Mossy"],p)
n=$.G
k=H.a([$.av,$.ch],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mossy",k,null,n,o,0))
o=H.a(["Lensed"],p)
n=$.G
k=H.a([$.Y,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lensed",k,null,n,o,0))
o=H.a(["Hide"],p)
n=$.G
k=H.a([$.O,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hide",k,null,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.O,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("FeatherBoa",k,null,n,o,0))
o=H.a(["Tacky"],p)
n=$.I
k=H.a([$.O,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tacky",k,null,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.O,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Whip",k,null,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.O,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Costumed",k,null,n,o,0))
o=H.a(["Punk"],p)
n=$.I
k=H.a([$.O,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Punk",k,null,n,o,0))
o=H.a(["Weighted"],p)
n=$.G
k=H.a([$.O,$.cb],l)
H.a([],p)
$.$get$c().h(0,new G.d("Weighted",k,null,n,o,0))
o=H.a(["Favorite"],p)
n=$.I
k=H.a([$.O,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Favorite",k,null,n,o,0))
o=H.a(["Novelty"],p)
n=$.I
k=H.a([$.O,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Novelty",k,null,n,o,0))
o=H.a(["Security"],p)
n=$.u
k=H.a([$.O,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.d("Security",k,null,n,o,0))
o=H.a(["IcePack"],p)
n=$.u
k=H.a([$.O,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("IcePack",k,null,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.O,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("MotionCapture",k,null,n,o,0))
o=H.a(["Silica"],p)
n=$.u
k=H.a([$.O,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silica",k,null,n,o,0))
o=H.a(["Harp"],p)
n=$.u
k=H.a([$.O,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Harp",k,null,n,o,0))
o=H.a(["Silk"],p)
n=$.u
k=H.a([$.O,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silk",k,null,n,o,0))
o=H.a(["RedFlag"],p)
n=$.u
k=H.a([$.O,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("RedFlag",k,null,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.u
k=H.a([$.O,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet1",k,null,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.u
k=H.a([$.O,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Satin",k,null,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.u
k=H.a([$.O,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet2",k,null,n,o,0))
o=H.a(["Tweed"],p)
n=$.u
k=H.a([$.O,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tweed",k,null,n,o,0))
o=H.a(["Jean"],p)
n=$.u
k=H.a([$.O,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Jean",k,null,n,o,0))
o=H.a(["Tesla"],p)
n=$.aa
k=H.a([$.Y,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tesla",k,null,n,o,0))
o=H.a(["Ashwood"],p)
n=$.u
k=H.a([$.a1,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ashwood",k,null,n,o,0))
o=H.a(["Peashooter"],p)
n=$.u
k=H.a([$.aR,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peashooter",k,null,n,o,0))
o=H.a(["Lacquer"],p)
n=$.u
k=H.a([$.aE,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lacquer",k,null,n,o,0))
o=H.a(["Classpecty"],p)
n=$.u
k=H.a([$.S,$.R],l)
H.a([],p)
$.$get$c().h(0,new G.d("Classpecty",k,null,n,o,0))
o=H.a(["Smartass"],p)
n=$.I
k=H.a([$.Y,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smartass",k,null,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.I
k=H.a([$.bk,$.aO,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Miraculous",k,null,n,o,0))
o=H.a(["Pigeon"],p)
n=$.u
k=H.a([$.bn,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pigeon",k,null,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bn,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grimoire",k,null,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.aa
k=H.a([$.bn,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Oglogoth's",k,null,n,o,0))
o=H.a(["Echidna's"],p)
n=$.aa
k=H.a([$.a_,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Echidna's",k,null,n,o,0))
o=H.a(["Superior"],p)
n=$.aa
k=H.a([$.Y,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Superior",k,null,n,o,0))
o=H.a(["Lego"],p)
n=$.u
k=H.a([$.a_,$.aE,$.bi,$.ag],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lego",k,null,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a_,$.dP,$.X,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yardstick",k,null,n,o,0))
o=H.a(["Queenly"],p)
n=$.aa
k=H.a([$.ak,$.a1,$.bk,$.aF,$.aX],l)
H.a([],p)
o=new G.d("Queenly",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["Kingly"],p)
n=$.aa
k=H.a([$.aX,$.ag,$.cb,$.a1,$.bk],l)
H.a([],p)
o=new G.d("Kingly",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["Jack"],p)
n=$.aa
k=H.a([$.aL,$.at,$.D,$.ak],l)
H.a([],p)
o=new G.d("Jack",k,null,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a_,$.aO,$.X,$.S,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Codpiece",k,null,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a_,$.aC,$.K,$.D,$.Y,$.S],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graceful",k,null,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a_,$.aC,$.K,$.Y,$.S,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guide",k,null,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a_,$.aD,$.K,$.Y,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Testament",k,null,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.aa
k=H.a([$.a_,$.aQ,$.D,$.aL,$.at,$.eu],l)
H.a([],p)
$.$get$c().h(0,new G.d("Excalibur",k,null,n,o,0))
o=H.a(["Influential"],p)
n=$.aa
k=H.a([$.a_,$.K,$.bq,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.d("Influential",k,null,n,o,0))
o=H.a(["Alternative"],p)
n=$.aa
k=H.a([$.a_,$.a1,$.O,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Alternative",k,null,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.aa
k=H.a([$.a_,$.aF,$.aZ,$.D,$.fi,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Valkyrie",k,null,n,o,0))
o=H.a(["Ongoing"],p)
n=$.aa
k=H.a([$.a_,$.av,$.ah,$.jo,$.ag],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ongoing",k,null,n,o,0))
o=H.a(["Short"],p)
n=$.G
k=H.a([$.a_,$.O,$.bf,$.ax,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short",k,null,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a_,$.D,$.bf,$.ax,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crown",k,null,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a_,$.aE,$.a7,$.ak,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gristtorrent",k,null,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a_,$.O,$.Y,$.a1,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Robe",k,null,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a_,$.O,$.Y,$.ax,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beret",k,null,n,o,0))
o=H.a(["Blank"],p)
n=$.G
k=$.a_
j=$.K
i=$.Y
i=H.a([k,j,i,$.aC,i,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blank",i,null,n,o,0))
o=H.a(["Cueball"],p)
n=$.u
i=H.a([$.a_,$.ax,$.bS,$.ag,$.fg,$.au],l)
H.a([],p)
o=new G.d("Cueball",i,null,n,o,0)
$.$get$c().h(0,o)
$.vZ=o
o=H.a(["Meddler's"],p)
n=$.aa
i=H.a([$.a_,$.aC,$.K,$.bq,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meddler's",i,null,n,o,0))
o=H.a(["Scroll"],p)
n=$.aa
i=H.a([$.a1,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scroll",i,null,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.K,$.Y,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tome",i,null,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.a_,$.D,$.ak,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lockpick",i,null,n,o,0))
o=H.a(["Warped"],p)
n=$.G
i=H.a([$.a_,$.D,$.aP,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Warped",i,null,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a_,$.aO,$.X,$.al,$.bi,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stairs",i,null,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a_,$.ap,$.D,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rocket",i,null,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a_,$.a7,$.K,$.aC,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("~ATH",i,null,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a_,$.X,$.au,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Puppeted",i,null,n,o,0))
o=H.a(["Angelic"],p)
n=$.aa
i=H.a([$.a_,$.bk,$.br,$.aQ,$.a9,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Angelic",i,null,n,o,0))
o=H.a(["Vitae"],p)
n=$.u
i=H.a([$.a_,$.aI,$.aP,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vitae",i,null,n,o,0))
o=H.a(["Fluorite"],p)
n=$.u
i=H.a([$.a_,$.aQ,$.bX,$.av,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluorite",i,null,n,o,0))
o=H.a(["Janus"],p)
n=$.aa
i=H.a([$.a_,$.aF,$.av,$.ah,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Janus",i,null,n,o,0))
o=H.a(["Bacchus"],p)
n=$.aa
i=H.a([$.a_,$.an,$.bq,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bacchus",i,null,n,o,0))
o=H.a(["TurnTable"],p)
n=$.aa
i=H.a([$.a_,$.D,$.a9,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("TurnTable",i,null,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.I
i=H.a([$.a_,$.aP,$.c6,$.aQ,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("???",i,null,n,o,0))
o=H.a(["Demonite"],p)
n=$.u
i=H.a([$.D,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Demonite",i,null,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.aa
i=H.a([$.D,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stymphalian",i,null,n,o,0))
o=H.a(["Junky"],p)
n=$.u
i=H.a([$.D,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Junky",i,null,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.u
i=H.a([$.D,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cold Iron",i,null,n,o,0))
o=H.a(["Bolted"],p)
n=$.G
i=H.a([$.D,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bolted",i,null,n,o,0))
o=H.a(["Armored"],p)
n=$.G
i=H.a([$.D,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Armored",i,null,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.u
i=H.a([$.D,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heartsteel",i,null,n,o,0))
o=H.a(["Brick"],p)
n=$.u
i=H.a([$.bS,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Brick",i,null,n,o,0))
o=H.a(["Clay"],p)
n=$.u
i=H.a([$.bS,$.cc],l)
H.a([],p)
$.$get$c().h(0,new G.d("Clay",i,null,n,o,0))
o=H.a(["Mugly"],p)
n=$.I
i=H.a([$.bS,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mugly",i,null,n,o,0))
o=H.a(["Plate"],p)
n=$.u
i=H.a([$.bS,$.ag],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plate",i,null,n,o,0))
o=H.a(["Terracotta"],p)
n=$.u
i=H.a([$.bS,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Terracotta",i,null,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.u
i=H.a([$.bS,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Semiconductive",i,null,n,o,0))
o=H.a(["Vinyl"],p)
n=$.u
i=H.a([$.bS,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vinyl",i,null,n,o,0))
o=H.a(["Artisan"],p)
n=$.G
i=H.a([$.bS,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Artisan",i,null,n,o,0))
o=H.a(["Tiled"],p)
n=$.u
i=H.a([$.bS,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tiled",i,null,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.G
i=H.a([$.bS,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hand-Sculpted",i,null,n,o,0))
o=H.a(["Handicraft"],p)
n=$.I
i=H.a([$.bT,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Handicraft",i,null,n,o,0))
o=H.a(["Torn"],p)
n=$.G
i=H.a([$.bT,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Torn",i,null,n,o,0))
o=H.a(["Grotesque"],p)
n=$.I
i=H.a([$.bT,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grotesque",i,null,n,o,0))
o=H.a(["Flickering"],p)
n=$.G
i=H.a([$.bT,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Flickering",i,null,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.u
i=H.a([$.bT,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thinly Veiled",i,null,n,o,0))
o=H.a(["Fragile"],p)
n=$.G
i=H.a([$.bT,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fragile",i,null,n,o,0))
o=H.a(["Troll's"],p)
n=$.aa
i=H.a([$.bT,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Troll's",i,null,n,o,0))
o=H.a(["Sappy"],p)
n=$.u
i=H.a([$.bT,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sappy",i,null,n,o,0))
o=H.a(["Bootleg"],p)
n=$.u
i=H.a([$.bT,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bootleg",i,null,n,o,0))
o=H.a(["Distorted"],p)
n=$.u
i=H.a([$.bT,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Distorted",i,null,n,o,0))
o=H.a(["Ent's"],p)
n=$.aa
i=H.a([$.X,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ent's",i,null,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.u
i=H.a([$.X,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("WeepingWillow",i,null,n,o,0))
o=H.a(["Latex"],p)
n=$.u
i=H.a([$.X,$.cc],l)
H.a([],p)
$.$get$c().h(0,new G.d("Latex",i,null,n,o,0))
o=H.a(["Turf"],p)
n=$.u
i=H.a([$.aE,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turf",i,null,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.cc,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stress Relieving",i,null,n,o,0))
o=H.a(["R-Rated"],p)
n=$.G
i=H.a([$.cc,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("R-Rated",i,null,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.cc,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Racing",i,null,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.K,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cross Stitch",i,null,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.K,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("LoveLetter",i,null,n,o,0))
o=H.a(["EbonStone"],p)
n=$.u
i=H.a([$.av,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("EbonStone",i,null,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.u
i=H.a([$.av,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rock Candy",i,null,n,o,0))
o=H.a(["Smashing"],p)
n=$.I
i=H.a([$.av,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smashing",i,null,n,o,0))
o=H.a(["Anomalous"],p)
n=$.I
i=H.a([$.bW,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anomalous",i,null,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.u
i=H.a([$.bW,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Onmoraki",i,null,n,o,0))
o=H.a(["Ghastly"],p)
n=$.I
i=H.a([$.bW,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ghastly",i,null,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.u
i=H.a([$.bW,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shade",i,null,n,o,0))
o=H.a(["Choral"],p)
n=$.u
i=H.a([$.bW,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Choral",i,null,n,o,0))
o=H.a(["Eerie"],p)
n=$.u
i=H.a([$.bW,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eerie",i,null,n,o,0))
o=H.a(["Spiritual"],p)
n=$.I
i=H.a([$.bW,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spiritual",i,null,n,o,0))
o=H.a(["Heart"],p)
n=$.u
i=H.a([$.bj,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heart",i,null,n,o,0))
o=H.a(["Primordial"],p)
n=$.u
i=H.a([$.bj,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Primordial",i,null,n,o,0))
o=H.a(["Eyeball"],p)
n=$.u
i=H.a([$.bj,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eyeball",i,null,n,o,0))
o=H.a(["Vulture"],p)
n=$.G
i=H.a([$.bj,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vulture",i,null,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bn,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackMagic",i,null,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.u
i=H.a([$.bn,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doppelganger",i,null,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.G
i=H.a([$.bn,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incomprehensible",i,null,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bn,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Destructive",i,null,n,o,0))
o=H.a(["Growling"],p)
n=$.G
i=H.a([$.ch,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Growling",i,null,n,o,0))
o=H.a(["Coconut"],p)
n=$.u
i=H.a([$.ch,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Coconut",i,null,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.aa
i=H.a([$.ch,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beastmaster's",i,null,n,o,0))
o=H.a(["Fluffy"],p)
n=$.u
i=H.a([$.ch,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluffy",i,null,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.u
i=H.a([$.aR,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fern",i,null,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.G
i=H.a([$.aR,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Four Leafed",i,null,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.u
i=H.a([$.aR,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shrubbery",i,null,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.u
i=H.a([$.aR,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ecballium",i,null,n,o,0))
o=H.a(["Truffle"],p)
n=$.u
i=H.a([$.aR,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Truffle",i,null,n,o,0))
o=H.a(["Vine"],p)
n=$.u
i=H.a([$.aR,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vine",i,null,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.u
i=H.a([$.aR,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("CorpseBlossom",i,null,n,o,0))
o=H.a(["Fruity"],p)
n=$.G
i=H.a([$.aR,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fruity",i,null,n,o,0))
o=H.a(["Squawking"],p)
n=$.G
i=H.a([$.br,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Squawking",i,null,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.u
i=H.a([$.br,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Poultry",i,null,n,o,0))
o=H.a(["Dove"],p)
n=$.u
i=H.a([$.br,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dove",i,null,n,o,0))
o=H.a(["Peacock"],p)
n=$.u
i=H.a([$.br,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peacock",i,null,n,o,0))
o=H.a(["Stork"],p)
n=$.u
i=H.a([$.br,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stork",i,null,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.u
i=H.a([$.br,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Zhenniao",i,null,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.u
i=H.a([$.br,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dodo",i,null,n,o,0))
o=H.a(["Raven"],p)
n=$.tR
i=H.a([$.br,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Raven",i,null,n,o,0))
o=H.a(["Frilled"],p)
n=$.G
i=H.a([$.br,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Frilled",i,null,n,o,0))
o=H.a(["Horrifying"],p)
n=$.I
i=H.a([$.bY,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Horrifying",i,null,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.at,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Burning Edge",i,null,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.at,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scapel",i,null,n,o,0))
o=H.a(["Menacing"],p)
n=$.I
i=H.a([$.aX,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Menacing",i,null,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aI,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Syringe",i,null,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.I
i=H.a([$.an,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bitter",i,null,n,o,0))
o=H.a(["Pineapple"],p)
n=$.u
i=H.a([$.an,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pineapple",i,null,n,o,0))
o=H.a(["Crunchy"],p)
n=$.I
i=H.a([$.an,$.ag],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crunchy",i,null,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.cb,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bass",i,null,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.cb,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rigid",i,null,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aK,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prop",i,null,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aK,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Magic Missle",i,null,n,o,0))
o=H.a(["Gangster's"],p)
n=$.aa
i=H.a([$.aK,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gangster's",i,null,n,o,0))
o=H.a(["Cupid's"],p)
n=$.aa
i=H.a([$.aK,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cupid's",i,null,n,o,0))
o=H.a(["Turreted"],p)
n=$.G
i=H.a([$.aK,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turreted",i,null,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.G
i=H.a([$.aK,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("AutoTarget",i,null,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.aa
i=H.a([$.aK,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guerilla's",i,null,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aK,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rail",i,null,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aK,$.c6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tau",i,null,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aK,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pew",i,null,n,o,0))
o=H.a(["Thermal"],p)
n=$.G
i=H.a([$.aK,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thermal",i,null,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.u
i=H.a([$.aQ,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plasma",i,null,n,o,0))
o=H.a(["Shredding"],p)
n=$.u
i=H.a([$.a9,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shredding",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.u
i=H.a([$.bX,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Charmed"],p)
n=$.u
i=H.a([$.bX,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charmed",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.aa
i=H.a([$.bX,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Prospitian"],p)
n=$.aa
i=H.a([$.aQ,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prospitian",i,null,n,o,0))
o=H.a(["Vigilant"],p)
n=$.G
i=H.a([$.aQ,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vigilant",i,null,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.I
i=H.a([$.aQ,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stand-Up",i,null,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.G
i=H.a([$.aQ,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedazzled",i,null,n,o,0))
o=H.a(["Thief's"],p)
n=$.aa
i=H.a([$.ak,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thief's",i,null,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.ak,$.a1,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("InvisibilityCloak",i,null,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.G
i=H.a([$.ak,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comedy Night",i,null,n,o,0))
o=H.a(["Stealthy"],p)
n=$.I
i=H.a([$.ak,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stealthy",i,null,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.ak,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Subterfuge",i,null,n,o,0))
o=H.a(["Dersite"],p)
n=$.aa
i=H.a([$.ak,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dersite",i,null,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.aa
i=H.a([$.bi,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ambient",i,null,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bi,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anesthesia",i,null,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bi,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Supportive",i,null,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aI,$.c6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nuka",i,null,n,o,0))
o=H.a(["Contaminated"],p)
n=$.G
i=H.a([$.bP,$.c6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Contaminated",i,null,n,o,0))
o=H.a(["Unstable"],p)
n=$.G
i=H.a([$.aD,$.c6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unstable",i,null,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aD,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Timebomb",i,null,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.G
i=H.a([$.a7,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short Circuiting",i,null,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aD,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relic",i,null,n,o,0))
o=H.a(["Existentialist"],p)
n=$.G
i=H.a([$.aD,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Existentialist",i,null,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.I
i=H.a([$.aD,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Apocalyptic",i,null,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bo,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dud",i,null,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bo,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guided",i,null,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bo,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bobomb",i,null,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aD,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dread",i,null,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bo,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knockback",i,null,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a7,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Paralysis",i,null,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bo,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carnage",i,null,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bo,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blast Beat",i,null,n,o,0))
o=H.a(["Corrosive"],p)
n=$.G
i=H.a([$.bo,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Corrosive",i,null,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bo,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ice Bomb",i,null,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bm,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryogenic",i,null,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a1,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spellcasting",i,null,n,o,0))
o=H.a(["Tingling"],p)
n=$.G
i=H.a([$.a7,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tingling",i,null,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bq,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rage Plague",i,null,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bP,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nerve Gas",i,null,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bP,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon Monoxide",i,null,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bP,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Neurotoxin",i,null,n,o,0))
o=H.a(["Virulent"],p)
n=$.G
i=H.a([$.bP,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Virulent",i,null,n,o,0))
o=H.a(["Toxic"],p)
n=$.G
i=H.a([$.bP,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Toxic",i,null,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bP,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Laughing Gas",i,null,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.G
i=H.a([$.a9,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Amplified",i,null,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a9,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rap",i,null,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.a9,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Saxaphone",i,null,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.a9,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Offbeat",i,null,n,o,0))
o=H.a(["Piper's"],p)
n=$.aa
i=H.a([$.a9,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Piper's",i,null,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.a9,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Melodic",i,null,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a9,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smooth",i,null,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a9,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thrash",i,null,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a9,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chant",i,null,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bq,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chewy",i,null,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bq,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Phony",i,null,n,o,0))
o=H.a(["Doctor's"],p)
n=$.aa
i=H.a([$.Y,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doctor's",i,null,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.aW,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Straitjacketed",i,null,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.aW,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Strapped",i,null,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.aW,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bondage",i,null,n,o,0))
o=H.a(["Sealed"],p)
n=$.G
i=H.a([$.aW,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sealed",i,null,n,o,0))
o=H.a(["Attractive"],p)
n=$.I
i=H.a([$.ax,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Attractive",i,null,n,o,0))
o=H.a(["Relaxed"],p)
n=$.G
i=H.a([$.b_,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relaxed",i,null,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.b_,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Loveseat",i,null,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.I
i=H.a([$.an,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comfort Food",i,null,n,o,0))
o=H.a(["Yandere"],p)
n=$.I
i=H.a([$.aA,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yandere",i,null,n,o,0))
o=H.a(["Tsundere"],p)
n=$.I
i=H.a([$.aA,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tsundere",i,null,n,o,0))
o=H.a(["Disturbed"],p)
n=$.G
i=H.a([$.au,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Disturbed",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.Y,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hydroponic",i,null,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.au,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Free Range",i,null,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.aa
i=H.a([$.aA,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gentlemanly",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.G
i=H.a([$.aA,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sentimental",i,null,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.G
i=H.a([$.aA,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki",i,null,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.G
i=H.a([$.aA,$.aV,$.aC,$.jp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki Literature Club",i,null,n,o,0))
o=H.a(["Banana"],p)
n=$.G
i=H.a([$.an,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Banana",i,null,n,o,0))
o=H.a(["Mana"],p)
n=$.G
i=H.a([$.an,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mana",i,null,n,o,0))
o=H.a(["Homemade"],p)
n=$.G
i=H.a([$.an,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Homemade",i,null,n,o,0))
o=H.a(["Steampunk"],p)
n=$.G
i=H.a([$.a1,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Steampunk",i,null,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.G
i=H.a([$.an,$.aU,$.a7,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("I Can't Stop Laughing",i,null,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.u
i=H.a([$.D,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Soulsteel",i,null,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.aZ,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ritual",i,null,n,o,0))
o=H.a(["Inflamable"],p)
n=$.G
i=H.a([$.bT,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Inflamable",i,null,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.X,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crafting",i,null,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.aE,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Polluting",i,null,n,o,0))
o=H.a(["Insulated"],p)
n=$.G
i=H.a([$.cc,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Insulated",i,null,n,o,0))
o=H.a(["Ash"],p)
n=$.u
i=H.a([$.K,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ash",i,null,n,o,0))
o=H.a(["Delicate"],p)
n=$.G
i=H.a([$.K,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Delicate",i,null,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.aa
i=H.a([$.aP,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Glass Blower's",i,null,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.G
i=H.a([$.bj,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sunburnt",i,null,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.G
i=H.a([$.ap,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pyrebitten",i,null,n,o,0))
o=H.a(["Mink"],p)
n=$.u
i=H.a([$.aA,$.ch],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mink",i,null,n,o,0))
o=H.a(["Wildfire"],p)
n=$.aa
i=H.a([$.aR,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Wildfire",i,null,n,o,0))
o=H.a(["Scarred"],p)
n=$.G
i=H.a([$.aI,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scarred",i,null,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.I
i=H.a([$.bk,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hyper Realistic",i,null,n,o,0))
o=H.a(["Hestia's"],p)
n=$.aa
i=H.a([$.bX,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hestia's",i,null,n,o,0))
o=H.a(["Smoking"],p)
n=$.G
i=H.a([$.ak,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smoking",i,null,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.G
i=H.a([$.ap,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Radiator",i,null,n,o,0))
o=H.a(["Fuming"],p)
n=$.G
i=H.a([$.ap,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fuming",i,null,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.G
i=H.a([$.ap,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firework",i,null,n,o,0))
o=H.a(["Panicky"],p)
n=$.G
i=H.a([$.aD,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Panicky",i,null,n,o,0))
o=H.a(["Ornamental"],p)
n=$.G
i=H.a([$.bf,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ornamental",i,null,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.G
i=H.a([$.bf,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dear",i,null,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.G
i=H.a([$.bf,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Swaggy",i,null,n,o,0))
o=H.a(["Uncanny"],p)
n=$.G
i=H.a([$.aF,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Uncanny",i,null,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.G
i=H.a([$.aV,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Talkative",i,null,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.G
i=H.a([$.aA,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Waifu",i,null,n,o,0))
o=H.a(["Charming"],p)
n=$.G
i=H.a([$.a1,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charming",i,null,n,o,0))
o=H.a(["God Tier"],p)
n=$.G
i=H.a([$.S,$.R,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("God Tier",i,null,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.G
i=H.a([$.S,$.R,$.bk,$.aO,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cod Tier",i,null,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.G
i=H.a([$.S,$.R,$.bk,$.ch],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dog Tier",i,null,n,o,0))
o=H.a(["JRPG"],p)
n=$.G
i=H.a([$.eu,$.tI,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("JRPG",i,null,n,o,0))
o=H.a(["Cracked"],p)
n=$.G
i=H.a([$.av,$.bT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cracked",i,null,n,o,0))
o=H.a(["Ruffled"],p)
n=$.G
i=H.a([$.br,$.bT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ruffled",i,null,n,o,0))
o=H.a(["Mandrake"],p)
n=$.G
i=H.a([$.aR,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mandrake",i,null,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.G
i=H.a([$.a1,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beanstalk",i,null,n,o,0))
o=H.a(["Unnerving"],p)
n=$.G
i=H.a([$.aX,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unnerving",i,null,n,o,0))
o=H.a(["Chipped"],p)
n=$.G
l=H.a([$.bS,$.bT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chipped",l,null,n,o,0))
if($.wP==null){o=$.mp
n=$.aL
l=$.at
k=$.aZ
j=new U.af(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,null,"Claws",!1,P.a3(null,null,null,m),0,3)
j.H("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.r.h(0,o)
$.wP=j}o=$.$get$ai();(o&&C.b).sm(o,0)
o=$.$get$ai()
n=$.O
l=$.w5
k=new U.af(n,null,null,null,null,"Speedo",!1,P.a3(null,null,null,m),0,3)
k.H("Speedo",[l],null,!1,null)
k.r.h(0,n)
o.push(k)
k=$.$get$ai()
o=$.eu
n=$.at
l=$.D
j=$.aL
i=new U.af(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,null,"Sword",!1,P.a3(null,null,null,m),0,3)
i.H("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.r.h(0,o)
k.push(i)
i=$.$get$ai()
k=$.mr
o=$.ag
j=$.D
l=new U.af(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,null,"Hammer",!1,P.a3(null,null,null,m),0,3)
l.H("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.r.h(0,k)
i.push(l)
l=$.$get$ai()
i=$.tN
k=$.aK
j=$.D
o=new U.af(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,null,"Rifle",!1,P.a3(null,null,null,m),0,3)
o.H("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.r.h(0,i)
l.push(o)
o=$.$get$ai()
l=$.tH
i=$.aK
j=$.D
k=new U.af(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,null,"Pistol",!1,P.a3(null,null,null,m),0,3)
k.H("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.r.h(0,l)
o.push(k)
k=$.$get$ai()
o=$.wk
l=$.aK
j=$.D
i=new U.af(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,null,"Shotgun",!1,P.a3(null,null,null,m),0,3)
i.H("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.r.h(0,o)
k.push(i)
i=$.$get$ai()
k=$.vT
o=$.aL
j=$.at
l=$.D
n=new U.af(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,null,"Blade",!1,P.a3(null,null,null,m),0,3)
n.H("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.r.h(0,k)
i.push(n)
n=$.$get$ai()
i=$.tx
k=$.aL
l=$.at
j=$.D
o=new U.af(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,null,"Dagger",!1,P.a3(null,null,null,m),0,3)
o.H("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.r.h(0,i)
n.push(o)
o=$.$get$ai()
n=$.hr
i=$.ag
j=$.bS
l=new U.af(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,null,"Fancysanta",!1,P.a3(null,null,null,m),0,3)
l.H("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.r.h(0,n)
o.push(l)
l=$.$get$ai()
o=$.wn
n=$.at
j=$.D
i=new U.af(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,null,"Sickle",!1,P.a3(null,null,null,m),0,3)
i.H("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.r.h(0,o)
l.push(i)
i=$.$get$ai()
l=$.vW
o=$.at
j=$.D
n=new U.af(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,null,"Chainsaw",!1,P.a3(null,null,null,m),0,3)
n.H("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.r.h(0,l)
i.push(n)
n=$.$get$ai()
i=$.w1
l=$.aL
j=$.D
o=new U.af(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,null,"Fork",!1,P.a3(null,null,null,m),0,3)
o.H("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.r.h(0,i)
n.push(o)
o=$.$get$ai()
n=$.tG
i=$.br
j=$.bn
l=new U.af(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,null,"Pigeon",!1,P.a3(null,null,null,m),0,3)
l.H("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.r.h(0,n)
o.push(l)
l=$.$get$ai()
o=$.fg
n=$.cb
j=$.av
i=$.ag
k=new U.af(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,null,"Bowling Ball",!1,P.a3(null,null,null,m),0,3)
k.H("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.r.h(0,o)
l.push(k)
k=$.$get$ai()
l=$.ty
o=$.aE
i=$.bX
j=new U.af(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,null,"Dice",!1,P.a3(null,null,null,m),0,3)
j.H("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.r.h(0,l)
k.push(j)
j=$.$get$ai()
k=$.tF
l=$.D
i=$.aL
o=new U.af(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,null,"Needle",!1,P.a3(null,null,null,m),0,3)
o.H("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.r.h(0,k)
j.push(o)
o=$.$get$ai()
j=$.tP
k=$.X
i=$.ag
l=new U.af(j,"Very magey. 7/10.","ShittyWizardKind",null,null,"Staff",!1,P.a3(null,null,null,m),0,3)
l.H("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.r.h(0,j)
o.push(l)
l=$.$get$ai()
o=$.wq
j=$.aW
i=$.O
k=new U.af(o,"Probably p hard to use.","ImKinkshamingKind",null,null,"Whip",!1,P.a3(null,null,null,m),0,3)
k.H("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.r.h(0,o)
l.push(k)
k=$.$get$ai()
l=$.tu
o=$.aK
i=$.av
j=$.O
n=$.aL
h=new U.af(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,null,"Bow",!1,P.a3(null,null,null,m),0,3)
h.H("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.r.h(0,l)
k.push(h)
h=$.$get$ai()
k=$.jp
l=$.X
n=$.ag
j=new U.af(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,null,"Club",!1,P.a3(null,null,null,m),0,3)
j.H("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.r.h(0,k)
h.push(j)
j=$.$get$ai()
h=$.jn
k=$.X
n=new U.af(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,null,"Battle Broom",!1,P.a3(null,null,null,m),0,3)
n.H("Battle Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.r.h(0,h)
j.push(n)
n=$.$get$ai()
j=$.aC
h=$.K
k=$.ag
l=new U.af(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,null,"Book",!1,P.a3(null,null,null,m),0,3)
l.H("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.r.h(0,j)
n.push(l)
l=$.$get$ai()
n=$.wg
j=$.D
k=$.ag
h=new U.af(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,null,"Road Sign",!1,P.a3(null,null,null,m),0,3)
h.H("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.r.h(0,n)
l.push(h)
h=$.$get$ai()
l=$.tt
n=$.at
k=$.D
j=$.ag
i=new U.af(l,"Legit.","TreeMassacreKind",null,null,"Axe",!1,P.a3(null,null,null,m),0,3)
i.H("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.wb
l=$.X
j=$.aL
k=new U.af(h,"Good for chest stabs.","UseOnHorsebackKind",null,null,"Lance",!1,P.a3(null,null,null,m),0,3)
k.H("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.fi
h=$.D
j=$.ag
l=new U.af(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,null,"Shield",!1,P.a3(null,null,null,m),0,3)
l.H("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.vV
i=$.X
j=$.ag
h=new U.af(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,null,"Cane",!1,P.a3(null,null,null,m),0,3)
h.H("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.wr
k=$.aE
j=$.ag
i=new U.af(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,null,"Yo-Yo",!1,P.a3(null,null,null,m),0,3)
i.H("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.wo
l=$.X
j=$.aK
k=new U.af(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,null,"Sling",!1,P.a3(null,null,null,m),0,3)
k.H("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.wm
h=$.D
j=$.at
l=new U.af(i,"So edgey.","NarutoKind",null,null,"Shuriken",!1,P.a3(null,null,null,m),0,3)
l.H("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.tD
i=$.D
j=$.aK
h=new U.af(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,null,"Machine Gun",!1,P.a3(null,null,null,m),0,3)
h.H("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.mq
k=$.D
j=$.bo
i=new U.af(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,null,"Grenade",!1,P.a3(null,null,null,m),0,3)
i.H("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.fg
l=$.cc
j=$.ag
k=new U.af(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,null,"Ball",!1,P.a3(null,null,null,m),0,3)
k.H("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.wp
h=$.D
j=$.aL
l=new U.af(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,null,"3dent",!1,P.a3(null,null,null,m),0,3)
l.H("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.mo
i=$.K
j=$.at
h=new U.af(k,"An X-Men fan, I see.","YuGiOhKind",null,null,"Card",!1,P.a3(null,null,null,m),0,3)
h.H("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.tA
k=$.D
j=$.ag
i=new U.af(l,"Go with what you know, I guess.","UnstoppableKind",null,null,"Frying Pan",!1,P.a3(null,null,null,m),0,3)
i.H("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.hq
l=$.b_
j=$.O
k=new U.af(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,null,"Pillow",!1,P.a3(null,null,null,m),0,3)
k.H("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.et
h=$.D
j=$.aW
l=new U.af(i,"This could be metal as fuck.","BikerGangKind",null,null,"Chain",!1,P.a3(null,null,null,m),0,3)
l.H("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.tQ
i=$.D
j=$.ag
h=new U.af(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,null,"Wrench",!1,P.a3(null,null,null,m),0,3)
h.H("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.wl
k=$.D
j=$.ag
i=new U.af(l,"Dual purpose.","HideTheBodiesKind",null,null,"Shovel",!1,P.a3(null,null,null,m),0,3)
i.H("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.tO
l=$.X
j=$.ag
k=new U.af(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,null,"Rolling Pin",!1,P.a3(null,null,null,m),0,3)
k.H("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.tL
h=$.X
j=$.aD
l=new U.af(i,"Fuck you for picking this.","KermitsGoneBadKind",null,null,"Puppet",!1,P.a3(null,null,null,m),0,3)
l.H("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.tM
i=$.D
j=$.at
h=new U.af(k,"So fucking edgey.","KermitsGoneBadKind",null,null,"Razor",!1,P.a3(null,null,null,m),0,3)
h.H("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.mu
k=$.D
j=$.Y
i=new U.af(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,null,"Pen",!1,P.a3(null,null,null,m),0,3)
i.H("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.jo
l=$.av
j=$.cb
k=new U.af(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,null,"Bust",!1,P.a3(null,null,null,m),0,3)
k.H("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.w4
h=$.X
j=$.ag
l=new U.af(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,null,"Golf Club",!1,P.a3(null,null,null,m),0,3)
l.H("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.wa
i=$.D
j=$.at
h=new U.af(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,null,"Knife",!1,P.a3(null,null,null,m),0,3)
h.H("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.wj
k=$.D
j=$.at
i=new U.af(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,null,"Scissors",!1,P.a3(null,null,null,m),0,3)
i.H("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.wi
l=$.D
j=$.cb
k=new U.af(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,null,"Safe",!1,P.a3(null,null,null,m),0,3)
k.H("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.dP
h=$.X
j=$.ag
l=new U.af(i,"Bitches love sticks","WeaponiseTheTreesKind",null,null,"Stick",!1,P.a3(null,null,null,m),0,3)
l.H("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.tI
i=$.D
j=$.at
m=new U.af(k,"I lack the taste buds necessary to weigh in on the pineapple debate","HomeSliceKind",null,null,"Pizza Cutter",!1,P.a3(null,null,null,m),0,3)
m.H("Pizza Cutter",[i,j],"I lack the taste buds necessary to weigh in on the pineapple debate",!1,"HomeSliceKind")
m.r.h(0,k)
l.push(m)
m=new S.bC("Duttle","Dut",null,null)
m.b="Duttle"
$.$get$bM().push(m)
$.vB=m
m=new S.bC("Salamander","GLUB",null,null)
m.b="Salamander"
$.$get$bM().push(m)
$.ti=m
m=new S.bC("Crocodile","NAK",null,null)
m.b="Crocodile"
$.$get$bM().push(m)
$.e4=m
m=new S.bC("Iguana","thip",null,null)
m.b="Iguana"
$.$get$bM().push(m)
$.eo=m
m=new S.bC("Turtle","click",null,null)
m.b="Turtle"
$.$get$bM().push(m)
$.fa=m
m=new S.bC("Skeleton","rattle",null,null)
m.b="Skeleton"
$.$get$bM().push(m)
$.dO=m
m=new S.bC("Robot","BEEP",null,null)
m.b="Robot"
$.$get$bM().push(m)
$.er=m
m=new S.bC("Chameleon","BLEP",null,null)
m.b="Chameleon"
$.$get$bM().push(m)
$.he=m
m=new S.bC("Axolotl","BARP",null,null)
m.b="Axolotl"
$.$get$bM().push(m)
$.tc=m
m=new S.bC("Lizard","bleb",null,null)
m.b="Lizard"
$.$get$bM().push(m)
$.lL=m
m=new S.bC("Snake","hiss",null,null)
m.b="Snake"
$.$get$bM().push(m)
$.tk=m
m=new S.bC("Alligator","nak",null,null)
m.b="Alligator"
$.$get$bM().push(m)
$.iv=m
m=new S.bC("Mole","snuff",null,null)
m.b="Mole"
$.$get$bM().push(m)
$.vD=m
m=new S.bC("Bird","tweet",null,null)
m.b="Bird"
$.$get$bM().push(m)
$.lJ=m
m=new S.bC("Wolf","howl",null,null)
m.b="Wolf"
$.$get$bM().push(m)
$.lQ=m
m=new S.bC("Newt","skitter",null,null)
m.b="Newt"
$.$get$bM().push(m)
$.vE=m
m=new S.bC("Spider","skitter",null,null)
m.b="Spider"
$.$get$bM().push(m)
$.iC=m
m=new S.bC("Cupid","flappa",null,null)
m.b="Cupid"
$.$get$bM().push(m)
$.iw=m
m=new S.bC("Dragon","roar",null,null)
m.b="Dragon"
$.$get$bM().push(m)
$.f7=m
m=new S.ie("Prospitian","murmur",null,null)
m.b="Prospitian"
$.$get$bM().push(m)
$.zk=m
m=new S.ie("Dersite","mutter",null,null)
m.b="Dersite"
$.$get$bM().push(m)
$.zh=m
m=new S.ma("Horror Terror","a;lkjdf",null,null)
m.b="Horror Terror"
$.$get$bM().push(m)
$.zj=m
m=new S.bC("Jellyfish","buzz",null,null)
m.b="Jellyfish"
$.$get$bM().push(m)
$.vC=m
$.zl=H.a([$.tk,$.iv,$.vE,$.ti,$.eo,$.e4,$.fa,$.he,$.tc,$.lL],[S.bC])
m=new T.c0(0,"spices")
$.$get$cj().push(m)
$.hj=m
m=new T.c0($.e6,"fresh baked bread")
$.$get$cj().push(m)
$.f5=m
m=new T.c0($.e6,"sweetness")
$.$get$cj().push(m)
$.cq=m
m=new T.c0($.e6,"nature")
$.$get$cj().push(m)
$.c9=m
m=new T.c0(0,"salt")
$.$get$cj().push(m)
$.lP=m
m=new T.c0($.cO,"rot")
$.$get$cj().push(m)
$.cV=m
m=new T.c0($.cO,"feet")
$.$get$cj().push(m)
$.zi=m
m=new T.c0(0,"oil")
$.$get$cj().push(m)
$.eq=m
m=new T.c0(0,"chlorine")
$.$get$cj().push(m)
$.te=m
m=new T.c0(0,"nothing in particular")
$.$get$cj().push(m)
$.iB=m
m=new T.c0(0,"gunpowder")
$.$get$cj().push(m)
$.en=m
m=new T.c0(0,"must")
$.$get$cj().push(m)
$.f8=m
m=new T.c0($.e6,"zoo animals")
$.$get$cj().push(m)
$.cN=m
m=new T.c0($.cO,"sweat")
$.$get$cj().push(m)
$.e5=m
m=new T.c0(0,"ozone")
$.$get$cj().push(m)
$.hh=m
m=new T.c0(0,"deceit")
$.$get$cj().push(m)
$.c4=m
m=new T.c0($.cO,"blood")
$.$get$cj().push(m)
$.dh=m
m=new T.c0($.cO,"smoke")
$.$get$cj().push(m)
$.f9=m
m=new K.bQ($.cO,"creepy")
$.$get$c8().push(m)
$.c3=m
m=new K.bQ($.e6,"calm")
$.$get$c8().push(m)
$.aN=m
m=new K.bQ($.cO,"frantic")
$.$get$c8().push(m)
$.cf=m
m=new K.bQ(0,"like nothing")
$.$get$c8().push(m)
$.iA=m
m=new K.bQ($.e6,"energizing")
$.$get$c8().push(m)
$.c5=m
m=new K.bQ(0,"studious")
$.$get$c8().push(m)
$.cB=m
m=new K.bQ(0,"dangerous")
$.$get$c8().push(m)
$.di=m
m=new K.bQ(0,"glamorous")
$.$get$c8().push(m)
$.dM=m
m=new K.bQ(0,"romantic")
$.$get$c8().push(m)
$.hi=m
m=new K.bQ($.e6,"creative")
$.$get$c8().push(m)
$.f6=m
m=new K.bQ(0,"lucky")
$.$get$c8().push(m)
$.lM=m
m=new K.bQ(0,"happy")
$.$get$c8().push(m)
$.dv=m
m=new K.bQ(0,"heroic")
$.$get$c8().push(m)
$.dj=m
m=new K.bQ($.cO,"stupid")
$.$get$c8().push(m)
$.dx=m
m=new K.bQ(0,"lucky")
$.$get$c8().push(m)
$.lM=m
m=new K.bQ(0,"claustrophobic")
$.$get$c8().push(m)
$.vA=m
m=new K.bQ(0,"overheated")
$.$get$c8().push(m)
$.lN=m
m=new K.bQ($.cO,"confusing")
$.$get$c8().push(m)
$.lK=m
m=new K.bQ(0,"contemplatative")
$.$get$c8().push(m)
$.cU=m
m=new M.bt(0,"clanking")
$.$get$bK().push(m)
$.cM=m
m=new M.bt(0,"laughing")
$.$get$bK().push(m)
$.cA=m
m=new M.bt($.e6,"rustling")
$.$get$bK().push(m)
$.bd=m
m=new M.bt($.cO,"screaming")
$.$get$bK().push(m)
$.es=m
m=new M.bt($.cO,"foot steps")
$.$get$bK().push(m)
$.iy=m
m=new M.bt($.cO,"beeping")
$.$get$bK().push(m)
$.em=m
m=new M.bt($.cO,"whispering")
$.$get$bK().push(m)
$.vG=m
m=new M.bt(0,"clacking")
$.$get$bK().push(m)
$.hf=m
m=new M.bt(0,"applause")
$.$get$bK().push(m)
$.cE=m
m=new M.bt(0,"jazz")
$.$get$bK().push(m)
$.ep=m
m=new M.bt(0,"disco")
$.$get$bK().push(m)
$.tg=m
m=new M.bt(0,"drums")
$.$get$bK().push(m)
$.hg=m
m=new M.bt(0,"echoing")
$.$get$bK().push(m)
$.ix=m
m=new M.bt($.cO,"roaring")
$.$get$bK().push(m)
$.lO=m
m=new M.bt($.cO,"gunfire")
$.$get$bK().push(m)
$.iz=m
m=new M.bt(0,"music")
$.$get$bK().push(m)
$.cp=m
m=new M.bt(0,"singing")
$.$get$bK().push(m)
$.tj=m
m=new M.bt(0,"chanting")
$.$get$bK().push(m)
$.td=m
m=new M.bt(0,"whistling")
$.$get$bK().push(m)
$.fb=m
m=new M.bt($.e6,"nature")
$.$get$bK().push(m)
$.dw=m
m=new M.bt(0,"croaking")
$.$get$bK().push(m)
$.tf=m
m=new M.bt(0,"silence")
$.$get$bK().push(m)
$.dN=m
m=new M.bt(0,"pulsing")
$.$get$bK().push(m)
$.th=m
m=new M.bt(0,"ticking")
$.$get$bK().push(m)
$.vF=m
m=H.a([],p)
o=[X.F,P.W]
n=A.a5
l=E.N
k=[l]
j=[A.fV]
m=new S.mJ(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.v(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Knight",3,!0,!1)
$.FP=m
m=P.l(H.a([new E.N($.cw,0.4,!1)],k),l)
i=H.a([],p)
m=new S.o9(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.v(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Seer",6,!0,!1)
$.G0=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kC("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.v(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Bard",9,!0,!1)
$.FL=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.m7("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.v(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Heir",8,!0,!1)
$.FO=m
m=H.a([],p)
m=new U.n3(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.v(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Maid",0,!0,!1)
$.FS=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.o_(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.v(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Rogue",4,!0,!1)
$.FX=m
m=H.a([],p)
m=new V.nx(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.v(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Page",1,!0,!1)
$.FV=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.p5(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.v(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Thief",7,!0,!1)
$.G3=m
m=P.l(H.a([new E.N($.cw,0.1,!1)],k),l)
i=H.a([],p)
m=new R.oS(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.v(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Sylph",5,!0,!1)
$.G2=m
m=H.a([],p)
m=new N.nQ("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.v(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Prince",10,!0,!1)
$.FW=m
m=P.l(H.a([new E.N($.cw,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pA("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.v(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Witch",11,!0,!1)
$.G5=m
m=P.l(H.a([new E.N($.cw,0.4,!1)],k),l)
i=H.a([],p)
m=new S.n2("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.v(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Mage",2,!0,!1)
$.FR=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.l(H.a([new E.N($.cw,3,!1),new E.N($.wR,-2,!1)],k),l)
e=H.a([],p)
m=new E.pw("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.v(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Waste",12,!1,!1)
$.G4=m
m=H.a([],p)
m=new Y.o5("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.v(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Scout",13,!1,!1)
$.FZ=m
m=P.l(H.a([new E.N($.cw,0.5,!1)],k),l)
i=H.a([],p)
m=new L.o6("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.v(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Scribe",15,!1,!1)
$.G_=m
m=P.l(H.a([new E.N($.cw,0.5,!1)],k),l)
i=H.a([],p)
m=new E.o3(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.v(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Sage",14,!1,!1)
$.FY=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.m5("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.v(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Guide",16,!1,!1)
$.FN=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.l(H.a([new E.N($.cw,3,!1)],k),l)
g=H.a([],p)
m=new Y.m4(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.v(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Grace",17,!1,!1)
$.FM=m
m=P.l(H.a([new E.N($.cw,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nb("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.v(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Muse",18,!1,!1)
$.FT=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.J(null,null,n)
h=P.l(H.a([new E.N($.cw,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.n0("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.v(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Lord",19,!1,!1)
$.FQ=m
m=P.l(H.a([new E.N($.cw,-0.1,!1),new E.N($.dz,1,!1)],k),l)
i=H.a([],p)
m=new Y.og("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.v(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Smith",20,!1,!1)
$.G1=m
$.FU=T.FK("Null",255,!1,!0)
m=A.dJ
i=P.C
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#00ff00"),!0)
h.j(0,$.b3,L.e("#EFEFEF"),!0)
h.j(0,$.b2,L.e("#DEDEDE"),!0)
h.j(0,$.bc,L.e("#FF2106"),!0)
h.j(0,$.bb,L.e("#B01200"),!0)
h.j(0,$.b5,L.e("#2F2F30"),!0)
h.j(0,$.b6,L.e("#1D1D1D"),!0)
h.j(0,$.b4,L.e("#080808"),!0)
h.j(0,$.ba,L.e("#030303"),!0)
h.j(0,$.b9,L.e("#242424"),!0)
h.j(0,$.b8,L.e("#333333"),!0)
h.j(0,$.b7,L.e("#141414"),!0)
g=P.l(H.a(["Frogs"],p),q)
f=P.l(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.l(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.l(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.l(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.l(H.a([new E.N($.dz,2,!0),new E.N($.eE,1,!0),new E.N($.eF,-2,!0)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF8700"),!0)
a.j(0,$.bc,L.e("#7F7F7F"),!0)
a.j(0,$.bb,L.e("#727272"),!0)
a.j(0,$.b5,L.e("#A3A3A3"),!0)
a.j(0,$.b6,L.e("#999999"),!0)
a.j(0,$.b4,L.e("#898989"),!0)
a.j(0,$.ba,L.e("#EFEFEF"),!0)
a.j(0,$.b9,L.e("#DBDBDB"),!0)
a.j(0,$.b8,L.e("#C6C6C6"),!0)
a.j(0,$.b7,L.e("#ADADAD"),!0)
a=new N.oj(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.aj(0,"Space",!0,!1)
$.yH=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#ff0000"),!0)
a.j(0,$.b3,L.e("#FF2106"),!0)
a.j(0,$.b2,L.e("#AD1604"),!0)
a.j(0,$.bc,L.e("#030303"),!0)
a.j(0,$.bb,L.e("#242424"),!0)
a.j(0,$.b5,L.e("#510606"),!0)
a.j(0,$.b6,L.e("#3C0404"),!0)
a.j(0,$.b4,L.e("#1F0000"),!0)
a.j(0,$.ba,L.e("#B70D0E"),!0)
a.j(0,$.b9,L.e("#970203"),!0)
a.j(0,$.b8,L.e("#8E1516"),!0)
a.j(0,$.b7,L.e("#640707"),!0)
b=P.l(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.l(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.l(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.l(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.l(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.l(H.a([new E.N($.hS,2,!0),new E.N($.eF,1,!0),new E.N($.eD,-2,!0)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF8700"),!0)
h.j(0,$.bc,L.e("#7F7F7F"),!0)
h.j(0,$.bb,L.e("#727272"),!0)
h.j(0,$.b5,L.e("#A3A3A3"),!0)
h.j(0,$.b6,L.e("#999999"),!0)
h.j(0,$.b4,L.e("#898989"),!0)
h.j(0,$.ba,L.e("#EFEFEF"),!0)
h.j(0,$.b9,L.e("#DBDBDB"),!0)
h.j(0,$.b8,L.e("#C6C6C6"),!0)
h.j(0,$.b7,L.e("#ADADAD"),!0)
h=new N.p6(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.aj(1,"Time",!0,!1)
$.yI=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#3399ff"),!0)
h.j(0,$.b3,L.e("#10E0FF"),!0)
h.j(0,$.b2,L.e("#00A4BB"),!0)
h.j(0,$.bc,L.e("#FEFD49"),!0)
h.j(0,$.bb,L.e("#D6D601"),!0)
h.j(0,$.b5,L.e("#0052F3"),!0)
h.j(0,$.b6,L.e("#0046D1"),!0)
h.j(0,$.b4,L.e("#003396"),!0)
h.j(0,$.ba,L.e("#0087EB"),!0)
h.j(0,$.b9,L.e("#0070ED"),!0)
h.j(0,$.b8,L.e("#006BE1"),!0)
h.j(0,$.b7,L.e("#0054B0"),!0)
g=P.l(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.l(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.l(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.l(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.l(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.l(H.a([new E.N($.eF,2,!0),new E.N($.d9,1,!0),new E.N($.eE,-1,!0),new E.N($.ec,-1,!0),new E.N($.cw,0.05,!1)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF8700"),!0)
a.j(0,$.bc,L.e("#7F7F7F"),!0)
a.j(0,$.bb,L.e("#727272"),!0)
a.j(0,$.b5,L.e("#A3A3A3"),!0)
a.j(0,$.b6,L.e("#999999"),!0)
a.j(0,$.b4,L.e("#898989"),!0)
a.j(0,$.ba,L.e("#EFEFEF"),!0)
a.j(0,$.b9,L.e("#DBDBDB"),!0)
a.j(0,$.b8,L.e("#C6C6C6"),!0)
a.j(0,$.b7,L.e("#ADADAD"),!0)
a=new T.kK(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.aj(2,"Breath",!0,!1)
$.yu=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#003300"),!0)
a.j(0,$.b3,L.e("#0F0F0F"),!0)
a.j(0,$.b2,L.e("#010101"),!0)
a.j(0,$.bc,L.e("#E8C15E"),!0)
a.j(0,$.bb,L.e("#C7A140"),!0)
a.j(0,$.b5,L.e("#1E211E"),!0)
a.j(0,$.b6,L.e("#141614"),!0)
a.j(0,$.b4,L.e("#0B0D0B"),!0)
a.j(0,$.ba,L.e("#204020"),!0)
a.j(0,$.b9,L.e("#11200F"),!0)
a.j(0,$.b8,L.e("#192C16"),!0)
a.j(0,$.b7,L.e("#121F10"),!0)
b=P.l(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.l(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.l(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.l(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.l(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.l(H.a([new E.N($.dz,2,!0),new E.N($.eD,1,!0),new E.N($.hS,-1,!0),new E.N($.eE,-1,!0),new E.N($.cw,0.01,!1)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF8700"),!0)
h.j(0,$.bc,L.e("#7F7F7F"),!0)
h.j(0,$.bb,L.e("#727272"),!0)
h.j(0,$.b5,L.e("#A3A3A3"),!0)
h.j(0,$.b6,L.e("#999999"),!0)
h.j(0,$.b4,L.e("#898989"),!0)
h.j(0,$.ba,L.e("#EFEFEF"),!0)
h.j(0,$.b9,L.e("#DBDBDB"),!0)
h.j(0,$.b8,L.e("#C6C6C6"),!0)
h.j(0,$.b7,L.e("#ADADAD"),!0)
h=new U.le(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.aj(3,"Doom",!0,!1)
$.yv=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#993300"),!0)
h.j(0,$.b3,L.e("#BA1016"),!0)
h.j(0,$.b2,L.e("#820B0F"),!0)
h.j(0,$.bc,L.e("#381B76"),!0)
h.j(0,$.bb,L.e("#1E0C47"),!0)
h.j(0,$.b5,L.e("#290704"),!0)
h.j(0,$.b6,L.e("#230200"),!0)
h.j(0,$.b4,L.e("#110000"),!0)
h.j(0,$.ba,L.e("#3D190A"),!0)
h.j(0,$.b9,L.e("#2C1207"),!0)
h.j(0,$.b8,L.e("#5C2913"),!0)
h.j(0,$.b7,L.e("#4C1F0D"),!0)
g=P.l(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.l(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.l(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.l(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.l(H.a([new E.N($.ec,2,!0),new E.N($.d9,1,!0),new E.N($.dz,-2,!0)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF8700"),!0)
a.j(0,$.bc,L.e("#7F7F7F"),!0)
a.j(0,$.bb,L.e("#727272"),!0)
a.j(0,$.b5,L.e("#A3A3A3"),!0)
a.j(0,$.b6,L.e("#999999"),!0)
a.j(0,$.b4,L.e("#898989"),!0)
a.j(0,$.ba,L.e("#EFEFEF"),!0)
a.j(0,$.b9,L.e("#DBDBDB"),!0)
a.j(0,$.b8,L.e("#C6C6C6"),!0)
a.j(0,$.b7,L.e("#ADADAD"),!0)
a=new T.kH(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.aj(4,"Blood",!0,!1)
$.yt=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#ff3399"),!0)
a.j(0,$.b3,L.e("#BD1864"),!0)
a.j(0,$.b2,L.e("#780F3F"),!0)
a.j(0,$.bc,L.e("#1D572E"),!0)
a.j(0,$.bb,L.e("#11371D"),!0)
a.j(0,$.b5,L.e("#4C1026"),!0)
a.j(0,$.b6,L.e("#3C0D1F"),!0)
a.j(0,$.b4,L.e("#260914"),!0)
a.j(0,$.ba,L.e("#6B0829"),!0)
a.j(0,$.b9,L.e("#4A0818"),!0)
a.j(0,$.b8,L.e("#55142A"),!0)
a.j(0,$.b7,L.e("#3D0E1E"),!0)
b=P.l(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.l(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.l(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.l(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.l(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.l(H.a([new E.N($.ec,1,!0),new E.kv(null,1,!0)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF8700"),!0)
h.j(0,$.bc,L.e("#7F7F7F"),!0)
h.j(0,$.bb,L.e("#727272"),!0)
h.j(0,$.b5,L.e("#A3A3A3"),!0)
h.j(0,$.b6,L.e("#999999"),!0)
h.j(0,$.b4,L.e("#898989"),!0)
h.j(0,$.ba,L.e("#EFEFEF"),!0)
h.j(0,$.b9,L.e("#DBDBDB"),!0)
h.j(0,$.b8,L.e("#C6C6C6"),!0)
h.j(0,$.b7,L.e("#ADADAD"),!0)
h=new T.m6(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.aj(5,"Heart",!0,!1)
$.yx=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#3da35a"),!0)
h.j(0,$.b3,L.e("#06FFC9"),!0)
h.j(0,$.b2,L.e("#04A885"),!0)
h.j(0,$.bc,L.e("#6E0E2E"),!0)
h.j(0,$.bb,L.e("#4A0818"),!0)
h.j(0,$.b5,L.e("#1D572E"),!0)
h.j(0,$.b6,L.e("#164524"),!0)
h.j(0,$.b4,L.e("#11371D"),!0)
h.j(0,$.ba,L.e("#3DA35A"),!0)
h.j(0,$.b9,L.e("#2E7A43"),!0)
h.j(0,$.b8,L.e("#3B7E4F"),!0)
h.j(0,$.b7,L.e("#265133"),!0)
g=P.l(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.l(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.l(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.l(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.l(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.l(H.a([new E.N($.eD,2,!0),new E.N($.hS,1,!0),new E.N($.dz,-2,!0)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF8700"),!0)
a.j(0,$.bc,L.e("#7F7F7F"),!0)
a.j(0,$.bb,L.e("#727272"),!0)
a.j(0,$.b5,L.e("#A3A3A3"),!0)
a.j(0,$.b6,L.e("#999999"),!0)
a.j(0,$.b4,L.e("#898989"),!0)
a.j(0,$.ba,L.e("#EFEFEF"),!0)
a.j(0,$.b9,L.e("#DBDBDB"),!0)
a.j(0,$.b8,L.e("#C6C6C6"),!0)
a.j(0,$.b7,L.e("#ADADAD"),!0)
a=new V.na(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.aj(6,"Mind",!0,!1)
$.yD=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#ff9933"),!0)
a.j(0,$.b3,L.e("#FEFD49"),!0)
a.j(0,$.b2,L.e("#FEC910"),!0)
a.j(0,$.bc,L.e("#10E0FF"),!0)
a.j(0,$.bb,L.e("#00A4BB"),!0)
a.j(0,$.b5,L.e("#FA4900"),!0)
a.j(0,$.b6,L.e("#E94200"),!0)
a.j(0,$.b4,L.e("#C33700"),!0)
a.j(0,$.ba,L.e("#FF8800"),!0)
a.j(0,$.b9,L.e("#D66E04"),!0)
a.j(0,$.b8,L.e("#E76700"),!0)
a.j(0,$.b7,L.e("#CA5B00"),!0)
b=P.l(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.l(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.l(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.l(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.l(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.l(H.a([new E.N($.hR,2,!0),new E.N($.eD,1,!0),new E.N($.d9,-1,!0),new E.N($.eE,-1,!0),new E.N($.cw,0.2,!1)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF8700"),!0)
h.j(0,$.bc,L.e("#7F7F7F"),!0)
h.j(0,$.bb,L.e("#727272"),!0)
h.j(0,$.b5,L.e("#A3A3A3"),!0)
h.j(0,$.b6,L.e("#999999"),!0)
h.j(0,$.b4,L.e("#898989"),!0)
h.j(0,$.ba,L.e("#EFEFEF"),!0)
h.j(0,$.b9,L.e("#DBDBDB"),!0)
h.j(0,$.b8,L.e("#C6C6C6"),!0)
h.j(0,$.b7,L.e("#ADADAD"),!0)
h=new G.mN(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.aj(7,"Light",!0,!1)
$.yC=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#000066"),!0)
h.j(0,$.b3,L.e("#0B1030"),!0)
h.j(0,$.b2,L.e("#04091A"),!0)
h.j(0,$.bc,L.e("#CCC4B5"),!0)
h.j(0,$.bb,L.e("#A89F8D"),!0)
h.j(0,$.b5,L.e("#00164F"),!0)
h.j(0,$.b6,L.e("#00103C"),!0)
h.j(0,$.b4,L.e("#00071A"),!0)
h.j(0,$.ba,L.e("#033476"),!0)
h.j(0,$.b9,L.e("#02285B"),!0)
h.j(0,$.b8,L.e("#004CB2"),!0)
h.j(0,$.b7,L.e("#003E91"),!0)
g=P.l(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.l(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.l(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.l(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.l(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.l(H.a([new E.fQ(D.uE(),null,3,!0),new E.fQ(D.uE(),null,-1,!0),new E.N($.hS,-1,!0),new E.N($.cw,0.2,!1)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF8700"),!0)
a.j(0,$.bc,L.e("#7F7F7F"),!0)
a.j(0,$.bb,L.e("#727272"),!0)
a.j(0,$.b5,L.e("#A3A3A3"),!0)
a.j(0,$.b6,L.e("#999999"),!0)
a.j(0,$.b4,L.e("#898989"),!0)
a.j(0,$.ba,L.e("#EFEFEF"),!0)
a.j(0,$.b9,L.e("#DBDBDB"),!0)
a.j(0,$.b8,L.e("#C6C6C6"),!0)
a.j(0,$.b7,L.e("#ADADAD"),!0)
a=new Q.pv(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.aj(8,"Void",!0,!1)
$.yJ=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#9900cc"),!0)
a.j(0,$.b3,L.e("#974AA7"),!0)
a.j(0,$.b2,L.e("#6B347D"),!0)
a.j(0,$.bc,L.e("#3D190A"),!0)
a.j(0,$.bb,L.e("#2C1207"),!0)
a.j(0,$.b5,L.e("#7C3FBA"),!0)
a.j(0,$.b6,L.e("#6D34A6"),!0)
a.j(0,$.b4,L.e("#592D86"),!0)
a.j(0,$.ba,L.e("#381B76"),!0)
a.j(0,$.b9,L.e("#1E0C47"),!0)
a.j(0,$.b8,L.e("#281D36"),!0)
a.j(0,$.b7,L.e("#1D1526"),!0)
b=P.l(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.l(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.l(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.l(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.l(H.a([new E.N($.hT,2,!0),new E.N($.eF,1,!0),new E.N($.d9,-1,!0),new E.N($.ec,-1,!0),new E.N($.cw,0.01,!1)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF8700"),!0)
h.j(0,$.bc,L.e("#7F7F7F"),!0)
h.j(0,$.bb,L.e("#727272"),!0)
h.j(0,$.b5,L.e("#A3A3A3"),!0)
h.j(0,$.b6,L.e("#999999"),!0)
h.j(0,$.b4,L.e("#898989"),!0)
h.j(0,$.ba,L.e("#EFEFEF"),!0)
h.j(0,$.b9,L.e("#DBDBDB"),!0)
h.j(0,$.b8,L.e("#C6C6C6"),!0)
h.j(0,$.b7,L.e("#ADADAD"),!0)
h=new E.nV(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.aj(9,"Rage",!0,!1)
$.yF=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#ffcc66"),!0)
h.j(0,$.b3,L.e("#FDF9EC"),!0)
h.j(0,$.b2,L.e("#D6C794"),!0)
h.j(0,$.bc,L.e("#164524"),!0)
h.j(0,$.bb,L.e("#06280C"),!0)
h.j(0,$.b5,L.e("#FFC331"),!0)
h.j(0,$.b6,L.e("#F7BB2C"),!0)
h.j(0,$.b4,L.e("#DBA523"),!0)
h.j(0,$.ba,L.e("#FFE094"),!0)
h.j(0,$.b9,L.e("#E8C15E"),!0)
h.j(0,$.b8,L.e("#F6C54A"),!0)
h.j(0,$.b7,L.e("#EDAF0C"),!0)
g=P.l(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.l(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.l(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.l(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.l(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.l(H.a([new E.N($.d9,2,!0),new E.N($.hR,1,!0),new E.fQ(D.uE(),null,-2,!0)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF8700"),!0)
a.j(0,$.bc,L.e("#7F7F7F"),!0)
a.j(0,$.bb,L.e("#727272"),!0)
a.j(0,$.b5,L.e("#A3A3A3"),!0)
a.j(0,$.b6,L.e("#999999"),!0)
a.j(0,$.b4,L.e("#898989"),!0)
a.j(0,$.ba,L.e("#EFEFEF"),!0)
a.j(0,$.b9,L.e("#DBDBDB"),!0)
a.j(0,$.b8,L.e("#C6C6C6"),!0)
a.j(0,$.b7,L.e("#ADADAD"),!0)
a=new X.m9(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.aj(10,"Hope",!0,!1)
$.yy=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#494132"),!0)
a.j(0,$.b3,L.e("#76C34E"),!0)
a.j(0,$.b2,L.e("#4F8234"),!0)
a.j(0,$.bc,L.e("#00164F"),!0)
a.j(0,$.bb,L.e("#00071A"),!0)
a.j(0,$.b5,L.e("#605542"),!0)
a.j(0,$.b6,L.e("#494132"),!0)
a.j(0,$.b4,L.e("#2D271E"),!0)
a.j(0,$.ba,L.e("#CCC4B5"),!0)
a.j(0,$.b9,L.e("#A89F8D"),!0)
a.j(0,$.b8,L.e("#A29989"),!0)
a.j(0,$.b7,L.e("#918673"),!0)
b=P.l(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.l(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.l(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.l(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.l(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.l(H.a([new E.N($.eE,2,!0),new E.N($.hT,1,!0),new E.N($.dz,-2,!0)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF8700"),!0)
h.j(0,$.bc,L.e("#7F7F7F"),!0)
h.j(0,$.bb,L.e("#727272"),!0)
h.j(0,$.b5,L.e("#A3A3A3"),!0)
h.j(0,$.b6,L.e("#999999"),!0)
h.j(0,$.b4,L.e("#898989"),!0)
h.j(0,$.ba,L.e("#EFEFEF"),!0)
h.j(0,$.b9,L.e("#DBDBDB"),!0)
h.j(0,$.b8,L.e("#C6C6C6"),!0)
h.j(0,$.b7,L.e("#ADADAD"),!0)
h=new K.mM(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.aj(11,"Life",!0,!1)
$.yB=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#9630BF"),!0)
h.j(0,$.b3,L.e("#cc87e8"),!0)
h.j(0,$.b2,L.e("#9545b7"),!0)
h.j(0,$.bc,L.e("#ae769b"),!0)
h.j(0,$.bb,L.e("#8f577c"),!0)
h.j(0,$.b5,L.e("#9630bf"),!0)
h.j(0,$.b6,L.e("#693773"),!0)
h.j(0,$.b4,L.e("#4c2154"),!0)
h.j(0,$.ba,L.e("#fcf9bd"),!0)
h.j(0,$.b9,L.e("#e0d29e"),!0)
h.j(0,$.b8,L.e("#bdb968"),!0)
h.j(0,$.b7,L.e("#ab9b55"),!0)
g=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.l(H.a([new E.N($.dz,3,!0),new E.N($.d9,-2,!0)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF8700"),!0)
a.j(0,$.bc,L.e("#7F7F7F"),!0)
a.j(0,$.bb,L.e("#727272"),!0)
a.j(0,$.b5,L.e("#A3A3A3"),!0)
a.j(0,$.b6,L.e("#999999"),!0)
a.j(0,$.b4,L.e("#898989"),!0)
a.j(0,$.ba,L.e("#EFEFEF"),!0)
a.j(0,$.b9,L.e("#DBDBDB"),!0)
a.j(0,$.b8,L.e("#C6C6C6"),!0)
a.j(0,$.b7,L.e("#ADADAD"),!0)
a=new Z.lf(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.aj(12,"Dream",!1,!1)
$.yw=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b1,L.e("#003300"),!0)
a.j(0,$.b3,L.e("#383838"),!0)
a.j(0,$.b2,L.e("#000000"),!0)
a.j(0,$.bc,L.e("#2b1130"),!0)
a.j(0,$.bb,L.e("#130017"),!0)
a.j(0,$.b5,L.e("#eba900"),!0)
a.j(0,$.b6,L.e("#c28900"),!0)
a.j(0,$.b4,L.e("#855900"),!0)
a.j(0,$.ba,L.e("#ffd800"),!0)
a.j(0,$.b9,L.e("#d1a900"),!0)
a.j(0,$.b8,L.e("#44244d"),!0)
a.j(0,$.b7,L.e("#271128"),!0)
b=P.l(H.a(["Law","Courts","Trials","Rules","Edicts","Control","Cones","Order"],p),q)
c=P.l(H.a(["LEGAL LAD","SHERRIF SURESHOT","CONE KOHAI"],p),q)
d=P.l(H.a(["Lawyer","Litigator","Lands","Laborer","Lady","Lad","Lamb","Lawman","Luchador","Lover","Legislacerator"],p),q)
e=P.l(H.a(["Judge","Law Abiding","Legal","Courting","Trail","Edict","Jury","Baliff","Verdict","Sentence","Jail","Executioner"],p),q)
f=P.l(H.a(["Themis","Phoenix","Wright","Jupiter","Dike","Marduk","Fortuna"],p),q)
g=P.l(H.a([new E.N($.eD,2,!0),new E.N($.d9,1,!0),new E.N($.eF,-2,!0),new E.N($.cw,-0.1,!1)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF8700"),!0)
h.j(0,$.bc,L.e("#7F7F7F"),!0)
h.j(0,$.bb,L.e("#727272"),!0)
h.j(0,$.b5,L.e("#A3A3A3"),!0)
h.j(0,$.b6,L.e("#999999"),!0)
h.j(0,$.b4,L.e("#898989"),!0)
h.j(0,$.ba,L.e("#EFEFEF"),!0)
h.j(0,$.b9,L.e("#DBDBDB"),!0)
h.j(0,$.b8,L.e("#C6C6C6"),!0)
h.j(0,$.b7,L.e("#ADADAD"),!0)
h=new Q.mK(0.01,0.9,0.1,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death's Lawyer plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["orders","rules","edicts","sentences"],["chains","gavel","caution tape","rule book","dictionary","wig","handbook","lock"],!0,!0,f,g,0.01,0.01,0.01,0.5,14,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.aj(14,"Law",!1,!1)
$.yA=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b1,L.e("#00ff00"),!0)
h.j(0,$.b3,L.e("#00ff00"),!0)
h.j(0,$.b2,L.e("#00ff00"),!0)
h.j(0,$.bc,L.e("#00ff00"),!0)
h.j(0,$.bb,L.e("#00cf00"),!0)
h.j(0,$.b5,L.e("#171717"),!0)
h.j(0,$.b6,L.e("#080808"),!0)
h.j(0,$.b4,L.e("#080808"),!0)
h.j(0,$.ba,L.e("#616161"),!0)
h.j(0,$.b9,L.e("#3b3b3b"),!0)
h.j(0,$.b8,L.e("#4a4a4a"),!0)
h.j(0,$.b7,L.e("#292929"),!0)
g=P.l(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
f=P.l(H.a(["Shogun"],p),q)
e=P.l(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
d=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
c=P.l(H.a([new E.N($.hT,13,!0)],k),l)
b=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
b.j(0,$.b1,L.e("#FF9B00"),!0)
b.j(0,$.b3,L.e("#FF9B00"),!0)
b.j(0,$.b2,L.e("#FF8700"),!0)
b.j(0,$.bc,L.e("#7F7F7F"),!0)
b.j(0,$.bb,L.e("#727272"),!0)
b.j(0,$.b5,L.e("#A3A3A3"),!0)
b.j(0,$.b6,L.e("#999999"),!0)
b.j(0,$.b4,L.e("#898989"),!0)
b.j(0,$.ba,L.e("#EFEFEF"),!0)
b.j(0,$.b9,L.e("#DBDBDB"),!0)
b.j(0,$.b8,L.e("#C6C6C6"),!0)
b.j(0,$.b7,L.e("#ADADAD"),!0)
b=new K.o4(13,13,13,h,g,f,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",d,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],c,0.01,0.01,0.01,0.5,13,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!0,1,b,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
b.aj(13,"Sauce",!1,!0)
$.yG=b
b=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
b.j(0,$.b1,L.e("#080808"),!0)
b.j(0,$.b3,L.e("#BA1016"),!0)
b.j(0,$.b2,L.e("#820B0F"),!0)
b.j(0,$.bc,L.e("#381B76"),!0)
b.j(0,$.bb,L.e("#1E0C47"),!0)
b.j(0,$.b5,L.e("#290704"),!0)
b.j(0,$.b6,L.e("#230200"),!0)
b.j(0,$.b4,L.e("#110000"),!0)
b.j(0,$.ba,L.e("#3D190A"),!0)
b.j(0,$.b9,L.e("#2C1207"),!0)
b.j(0,$.b8,L.e("#5C2913"),!0)
b.j(0,$.b7,L.e("#4C1F0D"),!0)
c=P.l(H.a(["Bonds","Unions","Ink","Color","Nostalgia"],p),q)
d=P.l(H.a(["FRIEND HOARDER YOUTH","INKSTERMINATOR","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Investor","Investigator","Idealist","Inhabitant","Innovator","Interpreter"],p),q)
f=P.l(H.a(["Ink","Flow","Charge","Awakening","Friendship","Trusting","Union","Team","Fresh","Vim","Chorus"],p),q)
g=P.l(H.a(["Ink","Hestia","Bastet","Bes","Vesta","Eleos","Frigg","Debella","Juno","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes","Cthulhu","The Kraken","Akkorokamui","Kanaloa"],p),q)
h=P.l(H.a([new E.N($.ec,2,!0),new E.N($.eF,1,!0),new E.N($.dz,-2,!0)],k),l)
m=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
m.j(0,$.b1,L.e("#FF9B00"),!0)
m.j(0,$.b3,L.e("#FF9B00"),!0)
m.j(0,$.b2,L.e("#FF8700"),!0)
m.j(0,$.bc,L.e("#7F7F7F"),!0)
m.j(0,$.bb,L.e("#727272"),!0)
m.j(0,$.b5,L.e("#A3A3A3"),!0)
m.j(0,$.b6,L.e("#999999"),!0)
m.j(0,$.b4,L.e("#898989"),!0)
m.j(0,$.ba,L.e("#EFEFEF"),!0)
m.j(0,$.b9,L.e("#DBDBDB"),!0)
m.j(0,$.b8,L.e("#C6C6C6"),!0)
m.j(0,$.b7,L.e("#ADADAD"),!0)
j=new V.mj(0.5,0.5,1,0,b,c,d,e,f,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["ink","friendship","ties","pulse","chain","ocean","festival"],["ink","photo album","friendship bracelet"],g,h,0.01,0.01,0.01,0.5,15,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Ink",null,!1,!1,!1,!1,!0,1,m,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
j.aj(15,"Ink",!1,!1)
$.yz=j
$.yE=L.ys(255,"Null",!1,!0)
j=P.l(H.a([new E.N($.d9,1,!0),new E.N($.hR,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Lyricist","Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass","Instrumentalist"],p)
h=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
g=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
f=H.a(["nobody"],p)
e=P.l(H.a([],k),l)
d=H.a(["Nobody"],p)
c=H.a(["Nobody"],p)
q=new F.nc(j,q,m,h,g,!1,f,e,d,c,1,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"loud","musical","Music")
q.D()
q.E()
B.cQ(q)
$.zF=q
q=P.l(H.a([new E.N($.eD,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist","Ichthyologist","Instructor"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kr(q,m,j,i,h,!1,g,f,e,d,13,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"nerdy","smart","Academic")
q.D()
q.E()
B.cQ(q)
$.zy=q
q=P.l(H.a([new E.N($.hT,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler","Iceskater"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kw(q,m,j,i,h,!1,g,f,e,d,4,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dumb","athletic","Athletic")
q.D()
q.E()
B.cQ(q)
$.zz=q
q=P.l(H.a([new E.N($.hS,-1,!0),new E.N($.hR,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["LaughMaster","Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor","Imp"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kS(q,m,j,i,h,!1,g,f,e,d,0,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dorky","funny","Comedy")
q.D()
q.E()
B.cQ(q)
$.zA=q
q=P.l(H.a([new E.N($.d9,-1,!0),new E.N($.eE,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business","Idealist"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.l5(q,m,j,i,h,!1,g,f,e,d,2,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"pretentious","cultured","Culture")
q.D()
q.E()
B.cQ(q)
$.zB=q
q=P.l(H.a([new E.N($.d9,1,!0),new E.N($.ec,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer","Innkeeper"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.ld(q,m,j,i,h,!1,g,f,e,d,8,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"boring","domestic","Domestic")
q.D()
q.E()
B.cQ(q)
$.zC=q
q=P.l(H.a([new E.N($.hR,1,!0),new E.N($.dz,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Lich","Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart","Illusionist"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lH(q,m,j,i,h,!1,g,f,e,d,7,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"whimpy","imaginative","Fantasy")
q.D()
q.E()
B.cQ(q)
$.zD=q
q=P.l(H.a([new E.N($.hT,1,!0),new E.N($.eE,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Legislator","Legalist","Legislacerator","Lawman","Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel","Investigator"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mH(q,m,j,i,h,!1,g,f,e,d,6,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"harsh","fair-minded","Justice")
q.D()
q.E()
B.cQ(q)
$.zE=q
q=P.l(H.a([new E.N($.eF,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent","Imposter"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nK(q,m,j,i,h,!1,g,f,e,d,9,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"frivolous","geeky","PopCulture")
q.D()
q.E()
B.cQ(q)
$.zH=q
q=P.l(H.a([new E.N($.ec,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team","Idealist"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.o0(q,m,j,i,h,!1,g,f,e,d,12,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"obsessive","romantic","Romantic")
q.D()
q.E()
B.cQ(q)
$.zI=q
q=P.l(H.a([new E.N($.d9,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally","Icebreaker"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.oh(q,m,j,i,h,!1,g,f,e,d,11,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"shallow","extroverted","Social")
q.D()
q.E()
B.cQ(q)
$.zJ=q
q=P.l(H.a([new E.N($.ec,-1,!0),new E.N($.d9,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod","Iconoclast","Infidel"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.oX(q,m,j,i,h,!1,g,f,e,d,5,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"terrible","honest","Terrible")
q.D()
q.E()
B.cQ(q)
$.zL=q
q=P.l(H.a([new E.N($.eD,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis","Illustrator"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pF(q,m,j,i,h,!1,g,f,e,d,3,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"wordy","lettered","Writing")
q.D()
q.E()
B.cQ(q)
$.zM=q
q=P.l(H.a([new E.N($.dz,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data","Incinerator"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.oV(q,m,j,i,h,!1,g,f,e,d,10,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"awkward","techy","Technology")
q.D()
q.E()
B.cQ(q)
$.zK=q
q=H.a(["nobody"],p)
l=P.l(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hp(!0,q,l,k,p,-13,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"","","Null")
q.D()
q.E()
B.cQ(q)
$.zG=q
A.wA()
t=3
return P.cy(Y.nd(),$async$rr)
case 3:case 1:return P.bv(r,s)}})
return P.bw($async$rr,s)}},Z={lf:function lf(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
_.N=N
_.a4=a4
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
zn:function(){var t,s
if(!$.vH)$.vH=!0
else return
t=[P.B]
s=new Y.p0(H.a([],t))
$.tm=s
Z.cP(s,"txt",null)
Z.cP($.tm,"vert","x-shader/x-vertex")
Z.cP($.tm,"frag","x-shader/x-fragment")
$.zm=new Y.nW(H.a([],t))
$.vJ=new Y.kM(H.a([],t))
s=new B.pK(H.a([],t))
$.vL=s
Z.cP(s,"zip",null)
Z.cP($.vL,"bundle",null)
s=new U.pB(H.a([],t))
$.zv=s
Z.cP(s,"words",null)
s=new Q.nI(H.a([],t))
$.vK=s
Z.cP(s,"png",null)
Z.cP($.vK,"jpg","image/jpeg")
$.zt=new Q.nF(H.a([],t))
s=new M.on(H.a([],t))
$.zu=s
Z.cP(s,"psprite",null)
s=new V.lZ(H.a([],t))
$.tl=s
Z.cP(s,"ttf",null)
Z.cP($.tl,"otf",null)
Z.cP($.tl,"woff",null)
s=new Y.np(null,H.a([],t))
$.zq=s
Z.cP(s,"obj",null)
s=new U.n1(H.a([],t))
$.zo=s
Z.cP(s,"mp3",null)
$.zp=new U.oL(H.a([],t))
s=new U.nt(H.a([],t))
$.zr=s
Z.cP(s,"ogg",null)
$.zs=new U.oM(H.a([],t))},
cP:function(a,b,c){$.$get$m0().i(0,b,new Z.it(a,c,[null,null]))
a.a.push(b)},
vI:function(a){var t
if($.$get$m0().U(0,a)){t=$.$get$m0().n(0,a)
if(t.a instanceof O.ca)return t
throw H.k("File format for extension ."+H.y(a)+" does not match expected types.")}throw H.k("No file format found for extension ."+H.y(a))},
it:function it(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
n0:function n0(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.I=I
_.L=L
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
tY:function tY(){},
tU:function tU(){},
tV:function tV(){}},X={iu:function iu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},id:function id(){},m9:function m9(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
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
this.c=c}},N={ac:function ac(){},mH:function mH(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nQ:function nQ(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},o_:function o_(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},oh:function oh(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oj:function oj(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
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
_.x1=x1},p6:function p6(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
_.N=N
_.a4=a4
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
Fe:function(a){var t,s,r,q,p,o,n,m,l
t=J.cK(a)
s=new W.k5(document.querySelectorAll("link"),[null])
for(r=new H.dQ(s,s.gm(s),0,null,[null]);r.F();){q=r.d
p=J.ar(q)
if(!!p.$ishw&&q.rel==="stylesheet"){o=$.$get$nD()
H.y(p.gad(q))
o.toString
o=t.length
n=Math.min(o,J.c2(p.gad(q)))
for(m=0;m<n;++m){if(m>=o)return H.w(t,m)
if(t[m]!==J.fK(p.gad(q),m)){l=C.c.ag(t,m)
$.$get$nD().toString
return l.split("/").length-1}continue}}}$.$get$nD().b1(C.i,"Didn't find a css link to derive relative path")
return 0},
um:function(){var t=P.xa()
if(!$.$get$nC().U(0,t))$.$get$nC().i(0,t,N.Fe(t))
return $.$get$nC().n(0,t)}},E={iG:function iG(){},ns:function ns(){},N:function N(a,b,c){this.a=a
this.b=b
this.c=c},fQ:function fQ(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},kv:function kv(a,b,c){this.a=a
this.b=b
this.c=c},nb:function nb(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},nV:function nV(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
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
_.x1=x1},o3:function o3(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},pw:function pw(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},B={m7:function m7(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.I=I
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
cQ:function(a){var t=a.f
if($.$get$ml().U(0,t))throw H.k("Duplicate aspect id for "+a.A(0)+": "+t+" is already registered for "+J.cK($.$get$ml().n(0,t))+".")
$.$get$ml().i(0,t,a)},
hp:function hp(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
pK:function pK(a){this.a=a},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a,b){this.a=a
this.b=b},
GQ:function(a){return a.aU(0)},
Gi:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=P.B
s=P.bZ(t,P.W)
r=B.d1
q=new B.eM(s,P.bZ(t,t),J.va(a),!1,null,null)
q.cb(null,null,r)
for(p=J.ya(a.gcN()),p=p.gS(p);p.F();){o=p.gM()
s.i(0,o,J.fK(a.gcN(),o))}for(s=a.gh2(),s=s.gax(s),s=s.gS(s),p=q.d,n=a.d;s.F();){o=s.gM()
p.i(0,o,n.n(0,o))}for(s=a.b,p=s.length,r=[r],m=0;m<s.length;s.length===p||(0,H.bH)(s),++m){l=s[m]
n=J.aS(l)
k=n.gW(l)
j=J.yf(k)
k=k.gbS()
i=new B.d1(k)
if(k==null){k=P.bZ(t,t)
i.a=k}k.i(0,"MAIN",j)
n=n.gb6(l)
C.b.h(q.b,new Q.h(i,n,r))}return q},
oY:function oY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
p_:function p_(a){this.a=a},
oZ:function oZ(a,b){this.a=a
this.b=b},
d1:function d1(a){this.a=a},
eM:function eM(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
i_:function i_(a,b){this.a=a
this.b=b}},Q={mg:function mg(){},nI:function nI(a){this.a=a},nF:function nF(a){this.a=a},mK:function mK(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a4,bu,bv,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
_.N=N
_.a4=a4
_.bu=bu
_.bv=bv
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
_.x1=x1},o0:function o0(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pv:function pv(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
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
_.x1=x1},jH:function jH(){},
J:function(a,b,c){var t=new Q.dZ(null,null,[c])
t.cb(a,b,c)
return t},
uQ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.J(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.e0(a,"$iso",[e],"$aso"))if(H.e0(a,"$iscC",[e],"$ascC"))for(s=J.cT(a.gbh()),r=0;s.F();){q=s.gM()
p=t.b
o=p.length
if(r>=o)return H.w(p,r)
p[r]=q;++r}else for(s=a.gS(a),p=[H.T(t,0)],r=0;s.F();){n=s.gM()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.w(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gS(a),p=[e],o=[H.T(t,0)];s.F();){l=s.gM()
if(H.H6(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.w(m,0)
m[0]=new Q.h(l,k,o)}else if(H.e0(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.w(m,0)
m[0]=l}else throw H.k("Invalid entry type "+H.y(J.vb(l))+" for WeightedList<"+H.y(H.c1(H.dD(e)))+">. Should be "+H.y(H.c1(H.dD(e)))+" or WeightPair<"+H.y(H.c1(H.dD(e)))+">.")}return t},
uR:function(a,b,c,d){return new Q.jW(J.vd(a.gbh(),new Q.pz(c,d,b)),null,[c,d])},
cC:function cC(){},
dZ:function dZ(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hY:function hY(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eO:function eO(){},
hX:function hX(){},
py:function py(a,$ti){this.a=a
this.$ti=$ti},
jW:function jW(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pz:function pz(a,b,c){this.a=a
this.b=b
this.c=c},
o8:function(){var t=0,s=P.bp(),r
var $async$o8=P.bx(function(a,b){if(a===1)return P.bu(b,s)
while(true)switch(t){case 0:t=3
return P.cy(A.hy("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$o8)
case 3:r=A.hy("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$o8,s)}},G={mN:function mN(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.I=I
_.L=L
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
_.x1=x1},nK:function nK(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yS:function(a){var t,s,r,q,p,o,n,m,l
t=G.a0
s=P.u4(a,t)
r=P.a3(null,null,null,t)
q=H.a([],[G.d])
for(t=G.EQ(),p=J.cT(t.a),t=new H.jX(p,t.b,[H.T(t,0)]);t.F();){o=p.gM()
if(o.ep(s))q.push(o)}C.b.eH(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bH)(q),++n){o=q[n]
if(o.ep(s)){r.h(0,o)
for(p=o.f,m=p.length,l=0;l<p.length;p.length===m||(0,H.bH)(p),++l)s.ae(0,p[l])}}if(s.a!==0)r.bn(0,s)
return r},
EQ:function(){var t=$.$get$c()
t.toString
return new H.hZ(t,new G.mx(),[H.T(t,0)])},
a0:function a0(){},
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
bJ:function bJ(a,b,c,d){var _=this
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
mx:function mx(){}},F={nc:function nc(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pF:function pF(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
EX:function(a){if(a===C.h){window
return C.j.gar(C.j)}if(a===C.i){window
return C.j.gi_()}if(a===C.Z){window
return C.j.ghn()}return P.Ha()},
hz:function hz(a,b){this.a=a
this.b=b},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
u2:function u2(){},
z9:function(a,b,c,d){var t,s,r,q
t=new B.dt(new P.cd(""),0,0)
t.ah(a,8)
c.toString
s=H.cR(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bU(s[q])
return t.b4(b)},
z8:function(a,b,c,d){var t,s,r,q,p
t=H.cD(c)
s=new Uint8Array(t)
r=new B.dg(null,0)
r.a=J.e1(a,b)
for(q=0;q<c;++q){p=r.c2()
if(q>=t)return H.w(s,q)
s[q]=p}return s},
z7:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dt(new P.cd(""),0,0)
t.ah(a,8)
s=d.gcQ()
r=C.f.ak(Math.log(H.ki(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cR(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.w(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.w(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bU(o-1)
t.ah(a,r)}return t.b4(b)},
z6:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cD(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ak(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dg(null,0)
p.a=J.e1(a,b)
for(o=0;o<c;){n=p.c2()+1
m=p.a6(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
z5:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dt(new P.cd(""),0,0)
t.ah(a,8)
c.toString
s=H.cR(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.w(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.w(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bU(p-1)
t.bU(a)}return t.b4(b)},
z4:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cD(c)
s=new Uint8Array(t)
r=new B.dg(null,0)
r.a=J.e1(a,b)
for(q=0;q<c;){p=r.c2()+1
o=r.c2()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.w(s,m)
s[m]=o}q+=p}return s}},R={
wN:function(a){var t,s
if(a.gm(a).aF(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.gi6(s).gij().e7("checking for two players, ps is "+H.y(a)+", ret is "+t)
return t},
FG:function(a){return R.wN(a)&&R.Fu(a)},
Fr:function(a){a.ga9(a).gbo()
return!1},
FF:function(a){a.ga9(a).gbo()
return!1},
Fu:function(a){a.ga9(a).gbo()
return!1},
FE:function(a){a.ga9(a).gbo()
return!1},
FD:function(a){return a.ga9(a).gbp().gii()},
FB:function(a){return a.ga9(a).gbp().gig()},
Fz:function(a){return a.ga9(a).gbp().gie()},
Fv:function(a){return a.ga9(a).gbp().gib()},
Fx:function(a){return a.ga9(a).gbp().gic()},
FC:function(a){return a.ga9(a).gbp().gih()},
Fw:function(a){var t=a.ga9(a)
t.gbo()
t.gbo()
return!1},
Fy:function(a){return a.ga9(a).ghs()},
FA:function(a){a.ga9(a).ghs()
return!1},
Fs:function(a){return!0},
Ft:function(a){a.ga9(a).gi8()
return!1},
nR:function nR(){},
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
oS:function oS(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
hk:function hk(){},
ul:function ul(){},
uk:function uk(){}},D={oV:function oV(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Gc:function(){var t,s
if($.wS)return
$.wS=!0
t=new D.cl("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
t.y=0
$.wR=t
t=new D.cl("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
$.Ga=t
t=new D.jZ(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
t.y=2.5
t.Q=1
$.hT=t
t=new D.jZ(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
t.y=2.5
$.eE=t
t=new D.cl("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
$.G9=t
t=new D.cl("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
$.eF=t
t=new D.nY("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
$.ec=t
t=new D.cl("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
$.d9=t
t=new D.cl("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
$.eD=t
t=new D.cl("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
$.hR=t
t=new D.cl("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
$.hS=t
t=new D.cl("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
$.dz=t
t=new D.cl("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cH().push(t)
$.cw=t
t=P.B
s=D.cl
$.Gb=H.yU(P.ET($.$get$cH(),new D.op(),new D.oq(),t,s),t,s)},
uE:function(){var t=$.$get$cH()
return new H.hZ(t,new D.or(),[H.T(t,0)])},
op:function op(){},
oq:function oq(){},
or:function or(){},
cl:function cl(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
jZ:function jZ(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
nY:function nY(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,V,A,Z,X,N,E,B,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.u_.prototype={}
J.f.prototype={
R:function(a,b){return a===b},
ga3:function(a){return H.eA(a)},
A:function(a){return H.nO(a)},
gaa:function(a){return new H.dY(H.kl(a),null)},
$ishk:1,
$isad:1,
$isfq:1,
$isad:1,
$ismD:1,
$isf:1,
$ismD:1,
$isf:1,
$ishB:1,
$isad:1}
J.mB.prototype={
A:function(a){return String(a)},
ga3:function(a){return a?519018:218159},
gaa:function(a){return C.ae},
$isdc:1}
J.mC.prototype={
R:function(a,b){return null==b},
A:function(a){return"null"},
ga3:function(a){return 0},
gaa:function(a){return C.a8},
$isd6:1}
J.hu.prototype={
ga3:function(a){return 0},
gaa:function(a){return C.a7},
A:function(a){return String(a)},
$ismD:1,
h:function(a,b){return a.add(b)},
ae:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gc0:function(a){return a.left},
gc5:function(a){return a.top},
gb7:function(a){return a.width},
gb_:function(a){return a.height},
hE:function(a,b){return a.parse(b)},
eF:function(a,b){return a.setLogging(b)},
eG:function(a,b){return a.setMaterials(b)}}
J.nH.prototype={}
J.eJ.prototype={}
J.ex.prototype={
A:function(a){var t=a[$.$get$vq()]
return t==null?this.eL(a):J.cK(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ev.prototype={
bX:function(a,b){if(!!a.immutable$list)throw H.k(new P.V(b))},
cG:function(a,b){if(!!a.fixed$length)throw H.k(new P.V(b))},
h:function(a,b){this.cG(a,"add")
a.push(b)},
a5:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.k(new P.bR(a))}},
ay:function(a,b){return new H.fm(a,b,[H.T(a,0),null])},
bf:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.y(a[r])
if(r>=t)return H.w(s,r)
s[r]=q}return s.join(b)},
d5:function(a,b){return H.wU(a,b,null,H.T(a,0))},
hc:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.k(new P.bR(a))}return s},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
ca:function(a,b,c){if(b<0||b>a.length)throw H.k(P.bG(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.k(H.by(c))
if(c<b||c>a.length)throw H.k(P.bG(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.T(a,0)])
return H.a(a.slice(b,c),[H.T(a,0)])},
ga9:function(a){if(a.length>0)return a[0]
throw H.k(H.js())},
gbb:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.k(H.js())},
a7:function(a,b,c,d,e){var t,s,r
this.bX(a,"setRange")
P.dl(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.b0(P.bG(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.k(H.wt())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
bZ:function(a,b,c,d){var t
this.bX(a,"fill range")
P.dl(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aE:function(a,b,c,d){var t,s,r,q,p,o
this.cG(a,"replaceRange")
P.dl(b,c,a.length,null,null,null)
d=C.c.ap(d)
if(typeof c!=="number")return c.am()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.aA(a,b,r,d)
if(p!==0){this.a7(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a7(a,r,o,a,c)
this.aA(a,b,r,d)}},
ha:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.k(new P.bR(a))}return!0},
d6:function(a,b){var t
this.bX(a,"sort")
t=b==null?P.H9():b
H.jN(a,0,a.length-1,t)},
eH:function(a){return this.d6(a,null)},
b0:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.aY(a[t],b))return t
return-1},
be:function(a,b){return this.b0(a,b,0)},
ac:function(a,b){var t
for(t=0;t<a.length;++t)if(J.aY(a[t],b))return!0
return!1},
gX:function(a){return a.length===0},
A:function(a){return P.jr(a,"[","]")},
a0:function(a,b){var t=H.a(a.slice(0),[H.T(a,0)])
return t},
ap:function(a){return this.a0(a,!0)},
gS:function(a){return new J.ic(a,a.length,0,null,[H.T(a,0)])},
ga3:function(a){return H.eA(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cG(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dG(b,"newLength",null))
if(b<0)throw H.k(P.bG(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c7(a,b))
if(b>=a.length||b<0)throw H.k(H.c7(a,b))
return a[b]},
i:function(a,b,c){this.bX(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c7(a,b))
if(b>=a.length||b<0)throw H.k(H.c7(a,b))
a[b]=c},
$isay:1,
$asay:function(){},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
J.tZ.prototype={}
J.ic.prototype={
gM:function(){return this.d},
F:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.k(H.bH(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fk.prototype={
aB:function(a,b){var t
if(typeof b!=="number")throw H.k(H.by(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcO(b)
if(this.gcO(a)===t)return 0
if(this.gcO(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcO:function(a){return a===0?1/a<0:a<0},
ak:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.k(new P.V(""+a+".floor()"))},
bC:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(new P.V(""+a+".round()"))},
ab:function(a,b,c){if(C.a.aB(b,c)>0)throw H.k(H.by(b))
if(this.aB(a,b)<0)return b
if(this.aB(a,c)>0)return c
return a},
l:function(a){return a},
bE:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.k(P.bG(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.Y(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.b0(new P.V("Unexpected toString result: "+t))
r=J.be(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.at("0",q)},
A:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga3:function(a){return a&0x1FFFFFFF},
d2:function(a){return-a},
V:function(a,b){if(typeof b!=="number")throw H.k(H.by(b))
return a+b},
at:function(a,b){if(typeof b!=="number")throw H.k(H.by(b))
return a*b},
bI:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
da:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dQ(a,b)},
ao:function(a,b){return(a|0)===a?a/b|0:this.dQ(a,b)},
dQ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.k(new P.V("Result of truncating division is "+H.y(t)+": "+H.y(a)+" ~/ "+H.y(b)))},
av:function(a,b){if(typeof b!=="number")throw H.k(H.by(b))
if(b<0)throw H.k(H.by(b))
return b>31?0:a<<b>>>0},
aq:function(a,b){return b>31?0:a<<b>>>0},
aX:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fI:function(a,b){if(b<0)throw H.k(H.by(b))
return b>31?0:a>>>b},
dP:function(a,b){return b>31?0:a>>>b},
a1:function(a,b){if(typeof b!=="number")throw H.k(H.by(b))
return a<b},
aF:function(a,b){if(typeof b!=="number")throw H.k(H.by(b))
return a>b},
au:function(a,b){if(typeof b!=="number")throw H.k(H.by(b))
return a>=b},
gaa:function(a){return C.ah},
$isdr:1}
J.jv.prototype={
gaa:function(a){return C.ag},
$isW:1,
$isdr:1,
$isC:1}
J.ju.prototype={
gaa:function(a){return C.af},
$isW:1,
$isdr:1}
J.ew.prototype={
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c7(a,b))
if(b<0)throw H.k(H.c7(a,b))
if(b>=a.length)H.b0(H.c7(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(b>=a.length)throw H.k(H.c7(a,b))
return a.charCodeAt(b)},
cD:function(a,b,c){if(c>b.length)throw H.k(P.bG(c,0,b.length,null,null))
return new H.qQ(b,a,c)},
aP:function(a,b){return this.cD(a,b,0)},
ec:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.k(P.bG(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.Y(b,c+s)!==this.a2(a,s))return
return new H.jS(c,b,a)},
V:function(a,b){if(typeof b!=="string")throw H.k(P.dG(b,null,null))
return a+b},
h9:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ag(a,s-t)},
cX:function(a,b,c){return H.v3(a,b,c)},
hT:function(a,b,c){return H.HD(a,b,c,null)},
eI:function(a,b){if(b==null)H.b0(H.by(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.ht&&b.gdC().exec("").length-2===0)return a.split(b.gfv())
else return this.fc(a,b)},
aE:function(a,b,c,d){var t,s
H.uY(b)
c=P.dl(b,c,a.length,null,null,null)
H.uY(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fc:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.B])
for(s=J.y2(b,a),s=s.gS(s),r=0,q=1;s.F();){p=s.gM()
o=p.gd7(p)
n=p.ge_(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.K(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ag(a,r))
return t},
aG:function(a,b,c){var t
H.uY(c)
if(typeof c!=="number")return c.a1()
if(c<0||c>a.length)throw H.k(P.bG(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.yj(b,a,c)!=null},
af:function(a,b){return this.aG(a,b,0)},
K:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.b0(H.by(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.b0(H.by(c))
if(typeof b!=="number")return b.a1()
if(b<0)throw H.k(P.jK(b,null,null))
if(typeof c!=="number")return H.a8(c)
if(b>c)throw H.k(P.jK(b,null,null))
if(c>a.length)throw H.k(P.jK(c,null,null))
return a.substring(b,c)},
ag:function(a,b){return this.K(a,b,null)},
hZ:function(a){return a.toUpperCase()},
bi:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a2(t,0)===133){r=J.ER(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.Y(t,q)===133?J.tW(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eq:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.Y(t,r)===133)s=J.tW(t,r)}else{s=J.tW(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
at:function(a,b){var t,s
if(typeof b!=="number")return H.a8(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
b0:function(a,b,c){var t
if(c<0||c>a.length)throw H.k(P.bG(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
be:function(a,b){return this.b0(a,b,0)},
hv:function(a,b,c){var t
if(b==null)H.b0(H.by(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.b0(P.bG(t,0,c,null,null))
if(b.cl(a,t)!=null)return t}return-1},
e9:function(a,b){return this.hv(a,b,null)},
dY:function(a,b,c){if(c>a.length)throw H.k(P.bG(c,0,a.length,null,null))
return H.HC(a,b,c)},
ac:function(a,b){return this.dY(a,b,0)},
gX:function(a){return a.length===0},
aB:function(a,b){var t
if(typeof b!=="string")throw H.k(H.by(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
A:function(a){return a},
ga3:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gaa:function(a){return C.a9},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c7(a,b))
if(b>=a.length||b<0)throw H.k(H.c7(a,b))
return a[b]},
$isay:1,
$asay:function(){},
$isB:1,
$isun:1}
H.kR.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.Y(this.a,b)},
$ashW:function(){return[P.C]},
$asjw:function(){return[P.C]},
$ashK:function(){return[P.C]},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]}}
H.t.prototype={$ast:null}
H.ey.prototype={
gS:function(a){return new H.dQ(this,this.gm(this),0,null,[H.ao(this,"ey",0)])},
a5:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.T(0,s))
if(t!==this.gm(this))throw H.k(new P.bR(this))}},
gX:function(a){return this.gm(this)===0},
ga9:function(a){if(this.gm(this)===0)throw H.k(H.js())
return this.T(0,0)},
ac:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.aY(this.T(0,s),b))return!0
if(t!==this.gm(this))throw H.k(new P.bR(this))}return!1},
ay:function(a,b){return new H.fm(this,b,[H.ao(this,"ey",0),null])},
a0:function(a,b){var t,s,r
t=H.a([],[H.ao(this,"ey",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.T(0,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
ap:function(a){return this.a0(a,!0)}}
H.oQ.prototype={
gfd:function(){var t=J.c2(this.a)
return t},
gfJ:function(){var t,s
t=J.c2(this.a)
s=this.b
if(J.cz(s,t))return t
return s},
gm:function(a){var t,s
t=J.c2(this.a)
s=this.b
if(J.v5(s,t))return 0
if(typeof s!=="number")return H.a8(s)
return t-s},
T:function(a,b){var t=J.eg(this.gfJ(),b)
if(J.eh(b,0)||J.v5(t,this.gfd()))throw H.k(P.bA(b,this,"index",null,null))
return J.v7(this.a,t)},
a0:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.be(s)
q=r.gm(s)
if(typeof t!=="number")return H.a8(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.T(s,t+m)
if(m>=n.length)return H.w(n,m)
n[m]=o
if(r.gm(s)<q)throw H.k(new P.bR(this))}return n},
ap:function(a){return this.a0(a,!0)},
eT:function(a,b,c,d){var t=this.b
if(J.eh(t,0))H.b0(P.bG(t,0,null,"start",null))}}
H.dQ.prototype={
gM:function(){return this.d},
F:function(){var t,s,r,q
t=this.a
s=J.be(t)
r=s.gm(t)
if(this.b!==r)throw H.k(new P.bR(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.T(t,q);++this.c
return!0}}
H.hA.prototype={
gS:function(a){return new H.jy(null,J.cT(this.a),this.b,this.$ti)},
gm:function(a){return J.c2(this.a)},
gX:function(a){return J.rO(this.a)},
$aso:function(a,b){return[b]}}
H.h4.prototype={$ist:1,
$ast:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.jy.prototype={
F:function(){var t=this.b
if(t.F()){this.a=this.c.$1(t.gM())
return!0}this.a=null
return!1},
gM:function(){return this.a},
$asjt:function(a,b){return[b]}}
H.fm.prototype={
gm:function(a){return J.c2(this.a)},
T:function(a,b){return this.b.$1(J.v7(this.a,b))},
$asey:function(a,b){return[b]},
$ast:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.hZ.prototype={
gS:function(a){return new H.jX(J.cT(this.a),this.b,this.$ti)},
ay:function(a,b){return new H.hA(this,b,[H.T(this,0),null])}}
H.jX.prototype={
F:function(){var t,s
for(t=this.a,s=this.b;t.F();)if(s.$1(t.gM())===!0)return!0
return!1},
gM:function(){return this.a.gM()}}
H.iD.prototype={
sm:function(a,b){throw H.k(new P.V("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.k(new P.V("Cannot add to a fixed-length list"))},
aE:function(a,b,c,d){throw H.k(new P.V("Cannot remove from a fixed-length list"))}}
H.ph.prototype={
i:function(a,b,c){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.k(new P.V("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.k(new P.V("Cannot add to an unmodifiable list"))},
a7:function(a,b,c,d,e){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aE:function(a,b,c,d){throw H.k(new P.V("Cannot remove from an unmodifiable list"))},
bZ:function(a,b,c,d){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
H.hW.prototype={$asp:null,$ast:null,$aso:null,$isp:1,$ist:1,$iso:1}
H.rI.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rJ.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qy.prototype={}
H.fC.prototype={
dU:function(a,b){if(!this.f.R(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cA()},
hS:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.ae(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.w(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.w(p,q)
p[q]=r
if(q===s.c)s.du();++s.d}this.y=!1}this.cA()},
fN:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ar(a),s=0;r=this.ch,s<r.length;s+=2)if(t.R(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.w(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hQ:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ar(a),s=0;r=this.ch,s<r.length;s+=2)if(t.R(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.b0(new P.V("removeRange"))
P.dl(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eE:function(a,b){if(!this.r.R(0,a))return
this.db=b},
hi:function(a,b,c){var t=J.ar(b)
if(!t.R(b,0))t=t.R(b,1)&&!this.cy
else t=!0
if(t){J.fM(a,c)
return}t=this.cx
if(t==null){t=P.u5(null,null)
this.cx=t}t.aM(0,new H.qt(a,c))},
hh:function(a,b){var t
if(!this.r.R(0,a))return
t=J.ar(b)
if(!t.R(b,0))t=t.R(b,1)&&!this.cy
else t=!0
if(t){this.c_()
return}t=this.cx
if(t==null){t=P.u5(null,null)
this.cx=t}t.aM(0,this.ghu())},
hj:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fJ(a)
if(b!=null)P.fJ(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cK(a)
s[1]=b==null?null:J.cK(b)
for(r=new P.dA(t,t.r,null,null,[null]),r.c=t.e;r.F();)J.fM(r.d,s)},
bt:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.co(o)
p=H.cn(o)
this.hj(q,p)
if(this.db===!0){this.c_()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ght()
if(this.cx!=null)for(;n=this.cx,!n.gX(n);)this.cx.ek().$0()}return s},
cP:function(a){return this.b.n(0,a)},
de:function(a,b){var t=this.b
if(t.U(0,a))throw H.k(P.lp("Registry: ports must be registered only once."))
t.i(0,a,b)},
cA:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.c_()},
c_:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.b9(0)
for(t=this.b,s=t.gc6(t),s=s.gS(s);s.F();)s.gM().f5()
t.b9(0)
this.c.b9(0)
u.globalState.z.ae(0,this.a)
this.dx.b9(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.w(t,p)
J.fM(q,t[p])}this.ch=null}},
ght:function(){return this.d},
gfY:function(){return this.e}}
H.qt.prototype={
$0:function(){J.fM(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.q4.prototype={
h3:function(){var t=this.a
if(t.b===t.c)return
return t.ek()},
eo:function(){var t,s,r
t=this.h3()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.U(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gX(s)}else s=!1
else s=!1
else s=!1
if(s)H.b0(P.lp("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gX(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hx(["command","close"])
r=new H.dB(!0,new P.k9(0,null,null,null,null,null,0,[null,P.C])).az(r)
s.toString
self.postMessage(r)}return!1}t.hL()
return!0},
dK:function(){if(self.window!=null)new H.q5(this).$0()
else for(;this.eo(););},
bD:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dK()
else try{this.dK()}catch(r){t=H.co(r)
s=H.cn(r)
q=u.globalState.Q
p=P.hx(["command","error","msg",H.y(t)+"\n"+H.y(s)])
p=new H.dB(!0,P.i4(null,P.C)).az(p)
q.toString
self.postMessage(p)}}}
H.q5.prototype={
$0:function(){if(!this.a.eo())return
P.wY(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.eR.prototype={
hL:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bt(this.b)}}
H.qx.prototype={}
H.mm.prototype={
$0:function(){H.zQ(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mn.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fI(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fI(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cA()},
$S:function(){return{func:1,v:true}}}
H.pS.prototype={}
H.fD.prototype={
b8:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdB())return
r=H.GN(b)
if(t.gfY()===s){s=J.be(r)
switch(s.n(r,0)){case"pause":t.dU(s.n(r,1),s.n(r,2))
break
case"resume":t.hS(s.n(r,1))
break
case"add-ondone":t.fN(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.hQ(s.n(r,1))
break
case"set-errors-fatal":t.eE(s.n(r,1),s.n(r,2))
break
case"ping":t.hi(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hh(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.ae(0,s)
break}return}u.globalState.f.a.aM(0,new H.eR(t,new H.qA(this,r),"receive"))},
R:function(a,b){if(b==null)return!1
return b instanceof H.fD&&J.aY(this.b,b.b)},
ga3:function(a){return this.b.gco()}}
H.qA.prototype={
$0:function(){var t=this.a.b
if(!t.gdB())t.f1(0,this.b)},
$S:function(){return{func:1}}}
H.i7.prototype={
b8:function(a,b){var t,s,r
t=P.hx(["command","message","port",this,"msg",b])
s=new H.dB(!0,P.i4(null,P.C)).az(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
R:function(a,b){if(b==null)return!1
return b instanceof H.i7&&J.aY(this.b,b.b)&&J.aY(this.a,b.a)&&J.aY(this.c,b.c)},
ga3:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.av()
s=this.a
if(typeof s!=="number")return s.av()
r=this.c
if(typeof r!=="number")return H.a8(r)
return(t<<16^s<<8^r)>>>0}}
H.ft.prototype={
f5:function(){this.c=!0
this.b=null},
f1:function(a,b){if(this.c)return
this.b.$1(b)},
$isFH:1,
gco:function(){return this.a},
gdB:function(){return this.c}}
H.p8.prototype={
eU:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aM(0,new H.eR(s,new H.p9(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dp(new H.pa(this,b),0),a)}else throw H.k(new P.V("Timer greater than 0."))}}
H.p9.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pa.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dH.prototype={
ga3:function(a){var t=this.a
if(typeof t!=="number")return t.d4()
t=C.d.aX(t,0)^C.d.ao(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
R:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dH){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gco:function(){return this.a}}
H.dB.prototype={
az:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.ar(a)
if(!!t.$isfn)return["buffer",a]
if(!!t.$isez)return["typed",a]
if(!!t.$isay)return this.eA(a)
if(!!t.$iszN){r=this.gex()
q=t.gax(a)
q=H.dk(q,r,H.ao(q,"o",0),null)
q=P.cW(q,!0,H.ao(q,"o",0))
t=t.gc6(a)
t=H.dk(t,r,H.ao(t,"o",0),null)
return["map",q,P.cW(t,!0,H.ao(t,"o",0))]}if(!!t.$ismD)return this.eB(a)
if(!!t.$isf)this.er(a)
if(!!t.$isFH)this.bG(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfD)return this.eC(a)
if(!!t.$isi7)return this.eD(a)
if(!!t.$isf1){p=a.$static_name
if(p==null)this.bG(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdH)return["capability",a.a]
if(!(a instanceof P.ad))this.er(a)
return["dart",u.classIdExtractor(a),this.ez(u.classFieldsExtractor(a))]},
bG:function(a,b){throw H.k(new P.V((b==null?"Can't transmit:":b)+" "+H.y(a)))},
er:function(a){return this.bG(a,null)},
eA:function(a){var t=this.ey(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bG(a,"Can't serialize indexable: ")},
ey:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.az(a[s])
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
ez:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.az(a[t]))
return a},
eB:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bG(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.az(a[t[r]])
if(r>=s.length)return H.w(s,r)
s[r]=q}return["js-object",t,s]},
eD:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eC:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gco()]
return["raw sendport",a]}}
H.eP.prototype={
aY:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.k(P.dF("Bad serialized message: "+H.y(a)))
switch(C.b.ga9(a)){case"ref":if(1>=a.length)return H.w(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.w(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.br(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return H.a(this.br(r),[null])
case"mutable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return this.br(r)
case"const":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.br(r),[null])
s.fixed$length=Array
return s
case"map":return this.h7(a)
case"sendport":return this.h8(a)
case"raw sendport":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.h6(a)
case"function":if(1>=a.length)return H.w(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.w(a,1)
return new H.dH(a[1])
case"dart":s=a.length
if(1>=s)return H.w(a,1)
q=a[1]
if(2>=s)return H.w(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.br(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.k("couldn't deserialize: "+H.y(a))}},
br:function(a){var t,s,r
t=J.be(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
if(!(s<r))break
t.i(a,s,this.aY(t.n(a,s)));++s}return a},
h7:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q=P.mS()
this.b.push(q)
s=J.yn(J.vd(s,this.gh5()))
for(t=J.be(s),p=J.be(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aY(p.n(r,o)))
return q},
h8:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
if(3>=t)return H.w(a,3)
q=a[3]
if(J.aY(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cP(q)
if(o==null)return
n=new H.fD(o,r)}else n=new H.i7(s,q,r)
this.b.push(n)
return n},
h6:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.be(s)
p=J.be(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a8(n)
if(!(o<n))break
q[t.n(s,o)]=this.aY(p.n(r,o));++o}return q}}
H.kV.prototype={
$aseK:function(){},
$asjx:function(){},
$asbg:function(){},
$isbg:1}
H.kU.prototype={
gX:function(a){return this.gm(this)===0},
A:function(a){return P.wB(this)},
i:function(a,b,c){return H.yV()},
$isbg:1,
$asbg:null}
H.fZ.prototype={
gm:function(a){return this.a},
U:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.U(0,b))return
return this.cn(b)},
cn:function(a){return this.b[a]},
a5:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.cn(q))}}}
H.kW.prototype={
U:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!0
return this.b.hasOwnProperty(b)},
cn:function(a){return"__proto__"===a?this.d:this.b[a]}}
H.nX.prototype={}
H.pe.prototype={
aI:function(a){var t,s,r
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
H.jE.prototype={
A:function(a){var t=this.b
if(t==null)return"NullError: "+H.y(this.a)
return"NullError: method not found: '"+H.y(t)+"' on null"}}
H.mG.prototype={
A:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.y(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.y(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.y(this.a)+")"}}
H.pg.prototype={
A:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hc.prototype={
gaK:function(){return this.b}}
H.rK.prototype={
$1:function(a){if(!!J.ar(a).$isel)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kc.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rx.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.ry.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rz.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rA.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.rB.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.f1.prototype={
A:function(a){return"Closure '"+H.nP(this).trim()+"'"},
gi4:function(){return this},
$D:null}
H.oU.prototype={}
H.oo.prototype={
A:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fT.prototype={
R:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fT))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga3:function(a){var t,s
t=this.c
if(t==null)s=H.eA(this.a)
else s=typeof t!=="object"?J.dE(t):H.eA(t)
t=H.eA(this.b)
if(typeof s!=="number")return s.i7()
return(s^t)>>>0},
A:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.y(this.d)+"' of "+H.nO(t)}}
H.kO.prototype={
A:function(a){return this.a}}
H.o1.prototype={
A:function(a){return"RuntimeError: "+H.y(this.a)}}
H.dY.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga3:function(a){return J.dE(this.a)},
R:function(a,b){if(b==null)return!1
return b instanceof H.dY&&J.aY(this.a,b.a)}}
H.v.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gax:function(a){return new H.mQ(this,[H.T(this,0)])},
gc6:function(a){return H.dk(this.gax(this),new H.mF(this),H.T(this,0),H.T(this,1))},
U:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dm(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dm(s,b)}else return this.ho(b)},
ho:function(a){var t=this.d
if(t==null)return!1
return this.by(this.bL(t,this.bx(a)),a)>=0},
bn:function(a,b){b.a5(0,new H.mE(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bm(t,b)
return s==null?null:s.gaZ()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bm(r,b)
return s==null?null:s.gaZ()}else return this.hp(b)},
hp:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bL(t,this.bx(a))
r=this.by(s,a)
if(r<0)return
return s[r].gaZ()},
i:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.cq()
this.b=t}this.dd(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cq()
this.c=s}this.dd(s,b,c)}else this.hr(b,c)},
hr:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.cq()
this.d=t}s=this.bx(a)
r=this.bL(t,s)
if(r==null)this.cw(t,s,[this.cr(a,b)])
else{q=this.by(r,a)
if(q>=0)r[q].saZ(b)
else r.push(this.cr(a,b))}},
ae:function(a,b){if(typeof b==="string")return this.dJ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dJ(this.c,b)
else return this.hq(b)},
hq:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bL(t,this.bx(a))
r=this.by(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dS(q)
return q.gaZ()},
b9:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a5:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.k(new P.bR(this))
t=t.c}},
dd:function(a,b,c){var t=this.bm(a,b)
if(t==null)this.cw(a,b,this.cr(b,c))
else t.saZ(c)},
dJ:function(a,b){var t
if(a==null)return
t=this.bm(a,b)
if(t==null)return
this.dS(t)
this.dr(a,b)
return t.gaZ()},
cr:function(a,b){var t,s
t=new H.mP(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dS:function(a){var t,s
t=a.gfC()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bx:function(a){return J.dE(a)&0x3ffffff},
by:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aY(a[s].ge6(),b))return s
return-1},
A:function(a){return P.wB(this)},
bm:function(a,b){return a[b]},
bL:function(a,b){return a[b]},
cw:function(a,b,c){a[b]=c},
dr:function(a,b){delete a[b]},
dm:function(a,b){return this.bm(a,b)!=null},
cq:function(){var t=Object.create(null)
this.cw(t,"<non-identifier-key>",t)
this.dr(t,"<non-identifier-key>")
return t},
$iszN:1,
$isbg:1,
$asbg:null}
H.mF.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mE.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eT(function(a,b){return{func:1,args:[a,b]}},this.a,"v")}}
H.mP.prototype={
ge6:function(){return this.a},
gaZ:function(){return this.b},
gfC:function(){return this.d},
saZ:function(a){return this.b=a}}
H.mQ.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gS:function(a){var t,s
t=this.a
s=new H.mR(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
ac:function(a,b){return this.a.U(0,b)},
a5:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.k(new P.bR(t))
s=s.c}}}
H.mR.prototype={
gM:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bR(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rt.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.ru.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.B]}}}
H.rv.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.B]}}}
H.ht.prototype={
A:function(a){return"RegExp/"+this.a+"/"},
gdD:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.tX(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdC:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.tX(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cD:function(a,b,c){var t
H.xM(b)
t=J.c2(b)
if(typeof t!=="number")return H.a8(t)
t=c>t
if(t)throw H.k(P.bG(c,0,J.c2(b),null,null))
return new H.pN(this,b,c)},
aP:function(a,b){return this.cD(a,b,0)},
fe:function(a,b){var t,s
t=this.gdD()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.ka(this,s)},
cl:function(a,b){var t,s
t=this.gdC()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.w(s,-1)
if(s.pop()!=null)return
return new H.ka(this,s)},
ec:function(a,b,c){if(c<0||c>b.length)throw H.k(P.bG(c,0,b.length,null,null))
return this.cl(b,c)},
$isFJ:1,
$isun:1,
gfv:function(){return this.b}}
H.ka.prototype={
gd7:function(a){return this.b.index},
ge_:function(a){var t=this.b
return t.index+t[0].length},
aU:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.w(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
$isd5:1}
H.pN.prototype={
gS:function(a){return new H.k0(this.a,this.b,this.c,null)},
$ashs:function(){return[P.d5]},
$aso:function(){return[P.d5]}}
H.k0.prototype={
gM:function(){return this.d},
F:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
t=J.c2(t)
if(typeof t!=="number")return H.a8(t)
if(s<=t){r=this.a.fe(this.b,this.c)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jS.prototype={
ge_:function(a){return this.a+this.c.length},
n:function(a,b){return this.aU(b)},
aU:function(a){if(a!==0)throw H.k(P.jK(a,null,null))
return this.c},
$isd5:1,
gd7:function(a){return this.a}}
H.qQ.prototype={
gS:function(a){return new H.qR(this.a,this.b,this.c,null)},
$aso:function(){return[P.d5]}}
H.qR.prototype={
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
this.d=new H.jS(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gM:function(){return this.d}}
H.fn.prototype={
gaa:function(a){return C.a0},
fT:function(a,b,c){return H.cR(a,b,c)},
fS:function(a){return this.fT(a,0,null)},
fR:function(a,b,c){var t
H.xv(a,b,c)
t=new DataView(a,b)
return t},
fQ:function(a,b){return this.fR(a,b,null)},
$isfn:1,
$isbh:1,
gea:function(a){return a.byteLength}}
H.ez.prototype={
fs:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dG(b,d,"Invalid list position"))
else throw H.k(P.bG(b,0,c,d,null))},
dh:function(a,b,c,d){if(b>>>0!==b||b>c)this.fs(a,b,c,d)},
$isez:1,
gbV:function(a){return a.buffer},
gea:function(a){return a.byteLength}}
H.ne.prototype={
gaa:function(a){return C.a1}}
H.jB.prototype={
gm:function(a){return a.length},
dO:function(a,b,c,d,e){var t,s,r
t=a.length
this.dh(a,b,t,"start")
this.dh(a,c,t,"end")
if(typeof b!=="number")return b.aF()
if(typeof c!=="number")return H.a8(c)
if(b>c)throw H.k(P.bG(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a1()
if(e<0)throw H.k(P.dF(e))
r=d.length
if(r-e<s)throw H.k(new P.dW("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaG:1,
$asaG:function(){},
$isay:1,
$asay:function(){}}
H.hE.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c7(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.b0(H.c7(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.ar(d).$ishE){this.dO(a,b,c,d,e)
return}this.d9(a,b,c,d,e)},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)}}
H.hG.prototype={
$asaG:function(){},
$asay:function(){},
$asp:function(){return[P.W]},
$ast:function(){return[P.W]},
$aso:function(){return[P.W]},
$isp:1,
$ist:1,
$iso:1}
H.hI.prototype={
$asaG:function(){},
$asay:function(){},
$asp:function(){return[P.W]},
$ast:function(){return[P.W]},
$aso:function(){return[P.W]}}
H.hF.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.b0(H.c7(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.ar(d).$ishF){this.dO(a,b,c,d,e)
return}this.d9(a,b,c,d,e)},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.hH.prototype={
$asaG:function(){},
$asay:function(){},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]},
$isp:1,
$ist:1,
$iso:1}
H.hJ.prototype={
$asaG:function(){},
$asay:function(){},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]}}
H.nf.prototype={
gaa:function(a){return C.a2},
$isp:1,
$asp:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$iso:1,
$aso:function(){return[P.W]}}
H.ng.prototype={
gaa:function(a){return C.a3},
$isp:1,
$asp:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$iso:1,
$aso:function(){return[P.W]}}
H.nh.prototype={
gaa:function(a){return C.a4},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c7(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.ni.prototype={
gaa:function(a){return C.a5},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c7(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nj.prototype={
gaa:function(a){return C.a6},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c7(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nk.prototype={
gaa:function(a){return C.aa},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c7(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nl.prototype={
gaa:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c7(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.jC.prototype={
gaa:function(a){return C.ac},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c7(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.fo.prototype={
gaa:function(a){return C.ad},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c7(a,b))
return a[b]},
ca:function(a,b,c){return new Uint8Array(a.subarray(b,H.GM(b,c,a.length)))},
$isfo:1,
$isdb:1,
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
P.pP.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pO.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.pQ.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.pR.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.r4.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.r5.prototype={
$2:function(a,b){this.a.$2(1,new H.hc(a,b))},
$S:function(){return{func:1,args:[,P.dV]}}}
P.rf.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.C,,]}}}
P.cF.prototype={}
P.rh.prototype={
$0:function(){var t,s,r
try{this.b.aH(this.a.$0())}catch(r){t=H.co(r)
s=H.cn(r)
P.xx(this.b,t,s)}},
$S:function(){return{func:1}}}
P.m2.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.an(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.an(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.m1.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.w(r,t)
r[t]=a
if(s===0)this.d.dl(r)}else if(t.b===0&&!this.b)this.d.an(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.f2.prototype={}
P.k2.prototype={
cH:function(a,b){if(a==null)a=new P.fp()
if(this.a.a!==0)throw H.k(new P.dW("Future already completed"))
$.am.toString
this.an(a,b)},
bq:function(a){return this.cH(a,null)},
$isf2:1,
ghf:function(){return this.a}}
P.e_.prototype={
aC:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.dW("Future already completed"))
t.df(b)},
fW:function(a){return this.aC(a,null)},
an:function(a,b){this.a.dg(a,b)}}
P.ke.prototype={
aC:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.dW("Future already completed"))
t.aH(b)},
an:function(a,b){this.a.an(a,b)}}
P.k6.prototype={
gfM:function(){return this.b.b},
ge2:function(){return(this.c&1)!==0},
ghm:function(){return(this.c&2)!==0},
ge1:function(){return this.c===8},
hk:function(a){return this.b.b.cY(this.d,a)},
hx:function(a){if(this.c!==6)return!0
return this.b.b.cY(this.d,J.fL(a))},
hg:function(a){var t,s,r
t=this.e
s=J.aS(a)
r=this.b.b
if(H.fI(t,{func:1,args:[,,]}))return r.hW(t,s.gar(a),a.gaK())
else return r.cY(t,s.gar(a))},
hl:function(){return this.b.b.em(this.d)},
gcs:function(){return this.a}}
P.bl.prototype={
gft:function(){return this.a===2},
gcp:function(){return this.a>=4},
c4:function(a,b){var t=$.am
if(t!==C.e){t.toString
if(b!=null)b=P.xA(b,t)}return this.cz(a,b)},
b3:function(a){return this.c4(a,null)},
cz:function(a,b){var t,s
t=new P.bl(0,$.am,null,[null])
s=b==null?1:3
this.cc(new P.k6(null,t,s,a,b,[H.T(this,0),null]))
return t},
c7:function(a){var t,s
t=$.am
s=new P.bl(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.T(this,0)
this.cc(new P.k6(null,s,8,a,null,[t,t]))
return s},
cc:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcp()){s.cc(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fG(null,null,t,new P.qa(this,a))}},
dH:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcs()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcp()){p.dH(a)
return}this.a=p.a
this.c=p.c}t.a=this.bQ(a)
s=this.b
s.toString
P.fG(null,null,s,new P.qi(t,this))}},
bP:function(){var t=this.c
this.c=null
return this.bQ(t)},
bQ:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcs()
t.a=s}return s},
aH:function(a){var t,s
t=this.$ti
if(H.e0(a,"$iscF",t,"$ascF"))if(H.e0(a,"$isbl",t,null))P.qd(a,this)
else P.xl(a,this)
else{s=this.bP()
this.a=4
this.c=a
P.fB(this,s)}},
dl:function(a){var t=this.bP()
this.a=4
this.c=a
P.fB(this,t)},
an:function(a,b){var t=this.bP()
this.a=8
this.c=new P.eX(a,b)
P.fB(this,t)},
f7:function(a){return this.an(a,null)},
df:function(a){var t
if(H.e0(a,"$iscF",this.$ti,"$ascF")){this.f4(a)
return}this.a=1
t=this.b
t.toString
P.fG(null,null,t,new P.qc(this,a))},
f4:function(a){var t
if(H.e0(a,"$isbl",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fG(null,null,t,new P.qh(this,a))}else P.qd(a,this)
return}P.xl(a,this)},
dg:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fG(null,null,t,new P.qb(this,a,b))},
$iscF:1,
gbR:function(){return this.a},
gfF:function(){return this.c}}
P.qa.prototype={
$0:function(){P.fB(this.a,this.b)},
$S:function(){return{func:1}}}
P.qi.prototype={
$0:function(){P.fB(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qe.prototype={
$1:function(a){var t=this.a
t.a=0
t.aH(a)},
$S:function(){return{func:1,args:[,]}}}
P.qf.prototype={
$2:function(a,b){this.a.an(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qg.prototype={
$0:function(){this.a.an(this.b,this.c)},
$S:function(){return{func:1}}}
P.qc.prototype={
$0:function(){this.a.dl(this.b)},
$S:function(){return{func:1}}}
P.qh.prototype={
$0:function(){P.qd(this.b,this.a)},
$S:function(){return{func:1}}}
P.qb.prototype={
$0:function(){this.a.an(this.b,this.c)},
$S:function(){return{func:1}}}
P.ql.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hl()}catch(q){s=H.co(q)
r=H.cn(q)
if(this.c){p=J.fL(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eX(s,r)
o.a=!0
return}if(!!J.ar(t).$iscF){if(t instanceof P.bl&&t.gbR()>=4){if(t.gbR()===8){p=this.b
p.b=t.gfF()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b3(new P.qm(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qm.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qk.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hk(this.c)}catch(r){t=H.co(r)
s=H.cn(r)
q=this.a
q.b=new P.eX(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qj.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hx(t)===!0&&q.e!=null){p=this.b
p.b=q.hg(t)
p.a=!1}}catch(o){s=H.co(o)
r=H.cn(o)
q=this.a
p=J.fL(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eX(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.k1.prototype={}
P.dm.prototype={
ay:function(a,b){return new P.qz(b,this,[H.ao(this,"dm",0),null])},
ac:function(a,b){var t,s
t={}
s=new P.bl(0,$.am,null,[P.dc])
t.a=null
t.a=this.aQ(new P.ow(t,this,b,s),!0,new P.ox(s),s.gbc())
return s},
a5:function(a,b){var t,s
t={}
s=new P.bl(0,$.am,null,[null])
t.a=null
t.a=this.aQ(new P.oC(t,this,b,s),!0,new P.oD(s),s.gbc())
return s},
gm:function(a){var t,s
t={}
s=new P.bl(0,$.am,null,[P.C])
t.a=0
this.aQ(new P.oG(t),!0,new P.oH(t,s),s.gbc())
return s},
gX:function(a){var t,s
t={}
s=new P.bl(0,$.am,null,[P.dc])
t.a=null
t.a=this.aQ(new P.oE(t,s),!0,new P.oF(s),s.gbc())
return s},
ap:function(a){var t,s,r
t=H.ao(this,"dm",0)
s=H.a([],[t])
r=new P.bl(0,$.am,null,[[P.p,t]])
this.aQ(new P.oI(this,s),!0,new P.oJ(s,r),r.gbc())
return r},
ga9:function(a){var t,s
t={}
s=new P.bl(0,$.am,null,[H.ao(this,"dm",0)])
t.a=null
t.a=this.aQ(new P.oy(t,this,s),!0,new P.oz(s),s.gbc())
return s}}
P.ow.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xE(new P.ou(this.c,a),new P.ov(t,s),P.xu(t.a,s))},
$S:function(){return H.eT(function(a){return{func:1,args:[a]}},this.b,"dm")}}
P.ou.prototype={
$0:function(){return J.aY(this.b,this.a)},
$S:function(){return{func:1}}}
P.ov.prototype={
$1:function(a){if(a===!0)P.uV(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.dc]}}}
P.ox.prototype={
$0:function(){this.a.aH(!1)},
$S:function(){return{func:1}}}
P.oC.prototype={
$1:function(a){P.xE(new P.oA(this.c,a),new P.oB(),P.xu(this.a.a,this.d))},
$S:function(){return H.eT(function(a){return{func:1,args:[a]}},this.b,"dm")}}
P.oA.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.oB.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.oD.prototype={
$0:function(){this.a.aH(null)},
$S:function(){return{func:1}}}
P.oG.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.oH.prototype={
$0:function(){this.b.aH(this.a.a)},
$S:function(){return{func:1}}}
P.oE.prototype={
$1:function(a){P.uV(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.oF.prototype={
$0:function(){this.a.aH(!0)},
$S:function(){return{func:1}}}
P.oI.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eT(function(a){return{func:1,args:[a]}},this.a,"dm")}}
P.oJ.prototype={
$0:function(){this.b.aH(this.a)},
$S:function(){return{func:1}}}
P.oy.prototype={
$1:function(a){P.uV(this.a.a,this.c,a)},
$S:function(){return H.eT(function(a){return{func:1,args:[a]}},this.b,"dm")}}
P.oz.prototype={
$0:function(){var t,s,r,q
try{r=H.js()
throw H.k(r)}catch(q){t=H.co(q)
s=H.cn(q)
P.xx(this.a,t,s)}},
$S:function(){return{func:1}}}
P.ot.prototype={}
P.dn.prototype={
cR:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dV()
if((t&4)===0&&(this.e&32)===0)this.dv(this.gdF())},
eg:function(a){return this.cR(a,null)},
el:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gX(t)}else t=!1
if(t)this.r.c8(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dv(this.gdG())}}}},
bW:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.ce()
t=this.f
return t==null?$.$get$hl():t},
ce:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dV()
if((this.e&32)===0)this.r=null
this.f=this.dE()},
bK:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dL(b)
else this.cd(new P.pZ(b,null,[H.ao(this,"dn",0)]))},
bJ:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dN(a,b)
else this.cd(new P.q0(a,b,null))},
f3:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dM()
else this.cd(C.J)},
bN:function(){},
bO:function(){},
dE:function(){return},
cd:function(a){var t,s
t=this.r
if(t==null){t=new P.qO(null,null,0,[H.ao(this,"dn",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.c8(this)}},
dL:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cZ(this.a,a)
this.e=(this.e&4294967263)>>>0
this.cf((t&4)!==0)},
dN:function(a,b){var t,s
t=this.e
s=new P.pU(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.ce()
t=this.f
if(!!J.ar(t).$iscF&&t!==$.$get$hl())t.c7(s)
else s.$0()}else{s.$0()
this.cf((t&4)!==0)}},
dM:function(){var t,s
t=new P.pT(this)
this.ce()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ar(s).$iscF&&s!==$.$get$hl())s.c7(t)
else t.$0()},
dv:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.cf((t&4)!==0)},
cf:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gX(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gX(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bN()
else this.bO()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.c8(this)},
eX:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xA(b,t)
this.c=c},
gbR:function(){return this.e}}
P.pU.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fI(s,{func:1,args:[P.ad,P.dV]})
q=t.d
p=this.b
o=t.b
if(r)q.hX(o,p,this.c)
else q.cZ(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.pT.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.en(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.k4.prototype={
gbz:function(a){return this.a},
sbz:function(a,b){return this.a=b}}
P.pZ.prototype={
cS:function(a){a.dL(this.b)}}
P.q0.prototype={
cS:function(a){a.dN(this.b,this.c)},
$ask4:function(){},
gar:function(a){return this.b},
gaK:function(){return this.c}}
P.q_.prototype={
cS:function(a){a.dM()},
gbz:function(a){return},
sbz:function(a,b){throw H.k(new P.dW("No events after a done."))}}
P.qB.prototype={
c8:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xX(new P.qC(this,a))
this.a=1},
dV:function(){if(this.a===1)this.a=3},
gbR:function(){return this.a}}
P.qC.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbz(r)
t.b=q
if(q==null)t.c=null
r.cS(this.b)},
$S:function(){return{func:1}}}
P.qO.prototype={
gX:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbz(0,b)
this.c=b}}}
P.qP.prototype={}
P.r7.prototype={
$0:function(){return this.a.an(this.b,this.c)},
$S:function(){return{func:1}}}
P.r6.prototype={
$2:function(a,b){P.GL(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dV]}}}
P.r8.prototype={
$0:function(){return this.a.aH(this.b)},
$S:function(){return{func:1}}}
P.i1.prototype={
aQ:function(a,b,c,d){return this.fa(a,d,c,!0===b)},
eb:function(a,b,c){return this.aQ(a,null,b,c)},
fa:function(a,b,c,d){return P.Gq(this,a,b,c,d,H.ao(this,"i1",0),H.ao(this,"i1",1))},
dw:function(a,b){b.bK(0,a)},
fp:function(a,b,c){c.bJ(a,b)},
$asdm:function(a,b){return[b]}}
P.i2.prototype={
bK:function(a,b){if((this.e&2)!==0)return
this.eN(0,b)},
bJ:function(a,b){if((this.e&2)!==0)return
this.eO(a,b)},
bN:function(){var t=this.y
if(t==null)return
t.eg(0)},
bO:function(){var t=this.y
if(t==null)return
t.el(0)},
dE:function(){var t=this.y
if(t!=null){this.y=null
return t.bW(0)}return},
fk:function(a){this.x.dw(a,this)},
fo:function(a,b){this.x.fp(a,b,this)},
fm:function(){this.f3()},
f_:function(a,b,c,d,e,f,g){this.y=this.x.a.eb(this.gfj(),this.gfl(),this.gfn())},
$asdn:function(a,b){return[b]}}
P.qz.prototype={
dw:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.co(q)
r=H.cn(q)
P.GK(b,s,r)
return}b.bK(0,t)}}
P.eX.prototype={
A:function(a){return H.y(this.a)},
$isel:1,
gar:function(a){return this.a},
gaK:function(){return this.b}}
P.r3.prototype={}
P.re.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fp()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.k(t)
r=H.k(t)
r.stack=J.cK(s)
throw r},
$S:function(){return{func:1}}}
P.qF.prototype={
en:function(a){var t,s,r,q
try{if(C.e===$.am){r=a.$0()
return r}r=P.xB(null,null,this,a)
return r}catch(q){t=H.co(q)
s=H.cn(q)
r=P.kh(null,null,this,t,s)
return r}},
cZ:function(a,b){var t,s,r,q
try{if(C.e===$.am){r=a.$1(b)
return r}r=P.xD(null,null,this,a,b)
return r}catch(q){t=H.co(q)
s=H.cn(q)
r=P.kh(null,null,this,t,s)
return r}},
hX:function(a,b,c){var t,s,r,q
try{if(C.e===$.am){r=a.$2(b,c)
return r}r=P.xC(null,null,this,a,b,c)
return r}catch(q){t=H.co(q)
s=H.cn(q)
r=P.kh(null,null,this,t,s)
return r}},
cF:function(a,b){if(b)return new P.qG(this,a)
else return new P.qH(this,a)},
fU:function(a,b){return new P.qI(this,a)},
n:function(a,b){return},
em:function(a){if($.am===C.e)return a.$0()
return P.xB(null,null,this,a)},
cY:function(a,b){if($.am===C.e)return a.$1(b)
return P.xD(null,null,this,a,b)},
hW:function(a,b,c){if($.am===C.e)return a.$2(b,c)
return P.xC(null,null,this,a,b,c)}}
P.qG.prototype={
$0:function(){return this.a.en(this.b)},
$S:function(){return{func:1}}}
P.qH.prototype={
$0:function(){return this.a.em(this.b)},
$S:function(){return{func:1}}}
P.qI.prototype={
$1:function(a){return this.a.cZ(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qo.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gc6:function(a){var t=H.T(this,0)
return H.dk(new P.qp(this,[t]),new P.qr(this),t,H.T(this,1))},
U:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.f9(b)},
f9:function(a){var t=this.d
if(t==null)return!1
return this.aO(t[this.aN(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fh(0,b)},
fh:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aN(b)]
r=this.aO(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.uT()
this.b=t}this.dj(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.uT()
this.c=s}this.dj(s,b,c)}else this.fG(b,c)},
fG:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.uT()
this.d=t}s=this.aN(a)
r=t[s]
if(r==null){P.uU(t,s,[a,b]);++this.a
this.e=null}else{q=this.aO(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
ae:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bk(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bk(this.c,b)
else return this.cv(0,b)},
cv:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aN(b)]
r=this.aO(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a5:function(a,b){var t,s,r,q
t=this.ci()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.k(new P.bR(this))}},
ci:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dj:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.uU(a,b,c)},
bk:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Gs(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aN:function(a){return J.dE(a)&0x3ffffff},
aO:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.aY(a[s],b))return s
return-1},
$isbg:1,
$asbg:null}
P.qr.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qp.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gS:function(a){var t=this.a
return new P.qq(t,t.ci(),0,null,this.$ti)},
ac:function(a,b){return this.a.U(0,b)},
a5:function(a,b){var t,s,r,q
t=this.a
s=t.ci()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.k(new P.bR(t))}}}
P.qq.prototype={
gM:function(){return this.d},
F:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.k(new P.bR(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.k9.prototype={
bx:function(a){return H.Hv(a)&0x3ffffff},
by:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ge6()
if(r==null?b==null:r===b)return s}return-1}}
P.k8.prototype={
gS:function(a){var t=new P.dA(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gX:function(a){return this.a===0},
ac:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.f8(b)},
f8:function(a){var t=this.d
if(t==null)return!1
return this.aO(t[this.aN(a)],a)>=0},
cP:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ac(0,a)?a:null
else return this.fu(a)},
fu:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aN(a)]
r=this.aO(s,a)
if(r<0)return
return J.fK(s,r).gds()},
a5:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.k(new P.bR(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.di(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.di(r,b)}else return this.aM(0,b)},
aM:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.Gt()
this.d=t}s=this.aN(b)
r=t[s]
if(r==null)t[s]=[this.cg(b)]
else{if(this.aO(r,b)>=0)return!1
r.push(this.cg(b))}return!0},
ae:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bk(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bk(this.c,b)
else return this.cv(0,b)},
cv:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aN(b)]
r=this.aO(s,b)
if(r<0)return!1
this.dk(s.splice(r,1)[0])
return!0},
b9:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
di:function(a,b){if(a[b]!=null)return!1
a[b]=this.cg(b)
return!0},
bk:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dk(t)
delete a[b]
return!0},
cg:function(a){var t,s
t=new P.qv(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dk:function(a){var t,s
t=a.gf6()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aN:function(a){return J.dE(a)&0x3ffffff},
aO:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aY(a[s].gds(),b))return s
return-1},
$iseC:1,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.qv.prototype={
gds:function(){return this.a},
gf6:function(){return this.c}}
P.dA.prototype={
gM:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bR(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qs.prototype={}
P.fj.prototype={
ay:function(a,b){return H.dk(this,b,H.ao(this,"fj",0),null)},
ac:function(a,b){var t
for(t=this.gS(this);t.F();)if(J.aY(t.gM(),b))return!0
return!1},
a5:function(a,b){var t
for(t=this.gS(this);t.F();)b.$1(t.gM())},
a0:function(a,b){return P.cW(this,!0,H.ao(this,"fj",0))},
ap:function(a){return this.a0(a,!0)},
gm:function(a){var t,s
t=this.gS(this)
for(s=0;t.F();)++s
return s},
gX:function(a){return!this.gS(this).F()},
A:function(a){return P.tT(this,"(",")")},
$iso:1,
$aso:null}
P.hs.prototype={}
P.rj.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return{func:1,args:[,,]}}}
P.jw.prototype={}
P.hK.prototype={$asp:null,$ast:null,$aso:null,$isp:1,$ist:1,$iso:1}
P.aM.prototype={
gS:function(a){return new H.dQ(a,this.gm(a),0,null,[H.ao(a,"aM",0)])},
T:function(a,b){return this.n(a,b)},
a5:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.k(new P.bR(a))}},
gX:function(a){return this.gm(a)===0},
ac:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.aY(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.k(new P.bR(a))}return!1},
ay:function(a,b){return new H.fm(a,b,[H.ao(a,"aM",0),null])},
d5:function(a,b){return H.wU(a,b,null,H.ao(a,"aM",0))},
a0:function(a,b){var t,s,r
t=H.a([],[H.ao(a,"aM",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
ap:function(a){return this.a0(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bZ:function(a,b,c,d){var t
P.dl(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a7:function(a,b,c,d,e){var t,s,r,q,p,o
P.dl(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.am()
if(typeof b!=="number")return H.a8(b)
t=c-b
if(t===0)return
if(J.eh(e,0))H.b0(P.bG(e,0,null,"skipCount",null))
if(H.e0(d,"$isp",[H.ao(a,"aM",0)],"$asp")){s=e
r=d}else{r=J.yl(d,e).a0(0,!1)
s=0}q=J.kj(s)
p=J.be(r)
if(J.cz(q.V(s,t),p.gm(r)))throw H.k(H.wt())
if(q.a1(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.V(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.V(s,o)))},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aE:function(a,b,c,d){var t,s,r,q,p
P.dl(b,c,this.gm(a),null,null,null)
d=C.c.ap(d)
if(typeof c!=="number")return c.am()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.aA(a,b,r,d)
if(q!==0){this.a7(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a7(a,r,p,a,c)
this.aA(a,b,r,d)}},
b0:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.aY(this.n(a,t),b))return t
return-1},
be:function(a,b){return this.b0(a,b,0)},
A:function(a){return P.jr(a,"[","]")},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.qW.prototype={
i:function(a,b,c){throw H.k(new P.V("Cannot modify unmodifiable map"))},
$isbg:1,
$asbg:null}
P.jx.prototype={
n:function(a,b){return J.fK(this.a,b)},
i:function(a,b,c){J.km(this.a,b,c)},
a5:function(a,b){J.v8(this.a,b)},
gX:function(a){return J.rO(this.a)},
gm:function(a){return J.c2(this.a)},
A:function(a){return J.cK(this.a)},
$isbg:1,
$asbg:null}
P.eK.prototype={$asbg:null,$isbg:1}
P.n5.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.O+=", "
t.a=!1
t=this.b
s=t.O+=H.y(a)
t.O=s+": "
t.O+=H.y(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mT.prototype={
gS:function(a){return new P.qw(this,this.c,this.d,this.b,null,this.$ti)},
a5:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.w(r,s)
b.$1(r[s])
if(t!==this.d)H.b0(new P.bR(this))}},
gX:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
T:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a8(b)
if(0>b||b>=t)H.b0(P.bA(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.w(s,q)
return s[q]},
a0:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fL(t)
return t},
ap:function(a){return this.a0(a,!0)},
h:function(a,b){this.aM(0,b)},
b9:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.w(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
A:function(a){return P.jr(this,"{","}")},
ek:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.k(H.js());++this.d
s=this.a
r=s.length
if(t>=r)return H.w(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aM:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.w(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.du();++this.d},
du:function(){var t,s,r,q
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
fL:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a7(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a7(a,0,p,r,t)
C.b.a7(a,p,p+this.c,this.a,0)
return this.c+p}},
eS:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$ast:null,
$aso:null}
P.qw.prototype={
gM:function(){return this.e},
F:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.b0(new P.bR(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.w(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.oc.prototype={
gX:function(a){return this.a===0},
bn:function(a,b){var t
for(t=J.cT(b);t.F();)this.h(0,t.gM())},
a0:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dA(this,this.r,null,null,[null]),s.c=this.e,r=0;s.F();r=p){q=s.d
p=r+1
if(r>=t.length)return H.w(t,r)
t[r]=q}return t},
ap:function(a){return this.a0(a,!0)},
ay:function(a,b){return new H.h4(this,b,[H.T(this,0),null])},
A:function(a){return P.jr(this,"{","}")},
a5:function(a,b){var t
for(t=new P.dA(this,this.r,null,null,[null]),t.c=this.e;t.F();)b.$1(t.d)},
bf:function(a,b){var t,s
t=new P.dA(this,this.r,null,null,[null])
t.c=this.e
if(!t.F())return""
if(b===""){s=""
do s+=H.y(t.d)
while(t.F())}else{s=H.y(t.d)
for(;t.F();)s=s+b+H.y(t.d)}return s.charCodeAt(0)==0?s:s},
$iseC:1,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.ob.prototype={}
P.kD.prototype={
hB:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.be(b)
a1=P.dl(a0,a1,t.gm(b),null,null,null)
s=$.$get$xk()
if(typeof a1!=="number")return H.a8(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.Y(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rs(C.c.a2(b,l))
h=H.rs(C.c.a2(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.w(s,g)
f=s[g]
if(f>=0){g=C.c.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.O.length
if(e==null)e=0
if(typeof e!=="number")return e.V()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.cd("")
p.O+=C.c.K(b,q,r)
p.O+=H.hM(k)
q=l
continue}}throw H.k(new P.bO("Invalid base64 data",b,r))}if(p!=null){t=p.O+=t.K(b,q,a1)
e=t.length
if(o>=0)P.vh(b,n,a1,o,m,e)
else{d=C.a.bI(e-1,4)+1
if(d===1)throw H.k(new P.bO("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.O=t;++d}}t=p.O
return C.c.aE(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.vh(b,n,a1,o,m,c)
else{d=C.d.bI(c,4)
if(d===1)throw H.k(new P.bO("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aE(b,a1,a1,d===2?"==":"=")}return b},
$asfX:function(){return[[P.p,P.C],P.B]}}
P.kE.prototype={
$ash_:function(){return[[P.p,P.C],P.B]}}
P.fX.prototype={}
P.h_.prototype={}
P.lj.prototype={
$asfX:function(){return[P.B,[P.p,P.C]]}}
P.pq.prototype={
gG:function(a){return"utf-8"}}
P.pr.prototype={
cI:function(a,b,c){var t,s,r,q
t=J.c2(a)
P.dl(b,c,t,null,null,null)
s=new P.cd("")
r=new P.qY(!1,s,!0,0,0,0)
r.cI(a,b,t)
r.hb(0,a,t)
q=s.O
return q.charCodeAt(0)==0?q:q},
fZ:function(a){return this.cI(a,0,null)},
$ash_:function(){return[[P.p,P.C],P.B]}}
P.qY.prototype={
hb:function(a,b,c){if(this.e>0)throw H.k(new P.bO("Unfinished UTF-8 octet sequence",b,c))},
cI:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.r_(c)
p=new P.qZ(this,a,b,c)
$loop$0:for(o=J.be(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aJ()
if((l&192)!==128){k=new P.bO("Bad UTF-8 encoding 0x"+C.d.bE(l,16),a,m)
throw H.k(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.w(C.w,k)
if(t<=C.w[k]){k=new P.bO("Overlong encoding of 0x"+C.a.bE(t,16),a,m-r-1)
throw H.k(k)}if(t>1114111){k=new P.bO("Character outside valid Unicode range: 0x"+C.a.bE(t,16),a,m-r-1)
throw H.k(k)}if(!this.c||t!==65279)n.O+=H.hM(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cz(j,0)){this.c=!1
if(typeof j!=="number")return H.a8(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dC(l)
if(g.a1(l,0)){g=new P.bO("Negative UTF-8 code unit: -0x"+J.yo(g.d2(l),16),a,h-1)
throw H.k(g)}else{if(typeof l!=="number")return l.aJ()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bO("Bad UTF-8 encoding 0x"+C.d.bE(l,16),a,h-1)
throw H.k(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.r_.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.be(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aJ()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.C,args:[,P.C]}}}
P.qZ.prototype={
$2:function(a,b){this.a.b.O+=P.oO(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.C,P.C]}}}
P.dc.prototype={}
P.bI.prototype={}
P.dK.prototype={
R:function(a,b){if(b==null)return!1
if(!(b instanceof P.dK))return!1
return this.a===b.a&&this.b===b.b},
aB:function(a,b){return C.a.aB(this.a,b.gfK())},
ga3:function(a){var t=this.a
return(t^C.a.aX(t,30))&1073741823},
A:function(a){var t,s,r,q,p,o,n
t=P.yY(H.wH(this))
s=P.ik(H.nN(this))
r=P.ik(H.nM(this))
q=P.ik(H.Fg(this))
p=P.ik(H.Fi(this))
o=P.ik(H.Fj(this))
n=P.yZ(H.Fh(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.yX(C.a.V(this.a,b.gia()),this.b)},
ghy:function(){return this.a},
dc:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.k(P.dF(this.ghy()))},
$isbI:1,
$asbI:function(){return[P.dK]},
gfK:function(){return this.a}}
P.W.prototype={$isbI:1,
$asbI:function(){return[P.dr]}}
P.dL.prototype={
V:function(a,b){return new P.dL(this.a+b.gbl())},
at:function(a,b){if(typeof b!=="number")return H.a8(b)
return new P.dL(C.d.bC(this.a*b))},
a1:function(a,b){return C.a.a1(this.a,b.gbl())},
aF:function(a,b){return C.a.aF(this.a,b.gbl())},
au:function(a,b){return C.a.au(this.a,b.gbl())},
R:function(a,b){if(b==null)return!1
if(!(b instanceof P.dL))return!1
return this.a===b.a},
ga3:function(a){return this.a&0x1FFFFFFF},
aB:function(a,b){return C.a.aB(this.a,b.gbl())},
A:function(a){var t,s,r,q,p
t=new P.lh()
s=this.a
if(s<0)return"-"+new P.dL(0-s).A(0)
r=t.$1(C.a.ao(s,6e7)%60)
q=t.$1(C.a.ao(s,1e6)%60)
p=new P.lg().$1(s%1e6)
return""+C.a.ao(s,36e8)+":"+H.y(r)+":"+H.y(q)+"."+H.y(p)},
d2:function(a){return new P.dL(0-this.a)},
$isbI:1,
$asbI:function(){return[P.dL]},
gbl:function(){return this.a}}
P.lg.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.B,args:[P.C]}}}
P.lh.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.B,args:[P.C]}}}
P.el.prototype={
gaK:function(){return H.cn(this.$thrownJsError)}}
P.fp.prototype={
A:function(a){return"Throw of null."}}
P.d3.prototype={
gck:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcj:function(){return""},
A:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.y(t)
q=this.gck()+s+r
if(!this.a)return q
p=this.gcj()
o=P.vy(this.b)
return q+p+": "+H.y(o)},
gG:function(a){return this.c}}
P.eB.prototype={
gck:function(){return"RangeError"},
gcj:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.y(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.y(t)
else{if(typeof r!=="number")return r.aF()
if(r>t)s=": Not in range "+H.y(t)+".."+H.y(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.y(t)}}return s}}
P.mi.prototype={
gck:function(){return"RangeError"},
gcj:function(){if(J.eh(this.b,0))return": index must not be negative"
var t=this.f
if(J.aY(t,0))return": no indices are valid"
return": index should be less than "+H.y(t)},
gm:function(a){return this.f}}
P.V.prototype={
A:function(a){return"Unsupported operation: "+this.a}}
P.eI.prototype={
A:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.y(t):"UnimplementedError"}}
P.dW.prototype={
A:function(a){return"Bad state: "+this.a}}
P.bR.prototype={
A:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.y(P.vy(t))+"."}}
P.nu.prototype={
A:function(a){return"Out of Memory"},
gaK:function(){return},
$isel:1}
P.jR.prototype={
A:function(a){return"Stack Overflow"},
gaK:function(){return},
$isel:1}
P.l8.prototype={
A:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.y(t)+"' during its initialization"}}
P.q9.prototype={
A:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.y(t)}}
P.bO.prototype={
A:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.y(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a1()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.K(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a8(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a2(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.y(r-o+1)+")\n"):s+(" (at character "+H.y(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.Y(q,m)
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
g=""}f=C.c.K(q,i,j)
return s+h+f+g+"\n"+C.c.at(" ",r-i+h.length)+"^\n"}}
P.lq.prototype={
A:function(a){return"Expando:"+H.y(this.a)},
n:function(a,b){var t,s
t=this.bM
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.b0(P.dG(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.us(b,"expando$values")
return s==null?null:H.us(s,t)},
i:function(a,b,c){var t,s
t=this.bM
if(typeof t!=="string")t.set(b,c)
else{s=H.us(b,"expando$values")
if(s==null){s=new P.ad()
H.wL(b,"expando$values",s)}H.wL(s,t,c)}},
gG:function(a){return this.a}}
P.C.prototype={$isbI:1,
$asbI:function(){return[P.dr]}}
P.o.prototype={
ay:function(a,b){return H.dk(this,b,H.ao(this,"o",0),null)},
ac:function(a,b){var t
for(t=this.gS(this);t.F();)if(J.aY(t.gM(),b))return!0
return!1},
a5:function(a,b){var t
for(t=this.gS(this);t.F();)b.$1(t.gM())},
a0:function(a,b){return P.cW(this,!0,H.ao(this,"o",0))},
ap:function(a){return this.a0(a,!0)},
gm:function(a){var t,s
t=this.gS(this)
for(s=0;t.F();)++s
return s},
gX:function(a){return!this.gS(this).F()},
T:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.yr("index"))
if(b<0)H.b0(P.bG(b,0,null,"index",null))
for(t=this.gS(this),s=0;t.F();){r=t.gM()
if(b===s)return r;++s}throw H.k(P.bA(b,this,"index",null,s))},
A:function(a){return P.tT(this,"(",")")},
$aso:null}
P.jt.prototype={}
P.p.prototype={$asp:null,$ist:1,$ast:null,$iso:1,$aso:null}
P.bg.prototype={$asbg:null}
P.d6.prototype={
ga3:function(a){return P.ad.prototype.ga3.call(this,this)},
A:function(a){return"null"}}
P.dr.prototype={$isbI:1,
$asbI:function(){return[P.dr]}}
P.ad.prototype={constructor:P.ad,$isad:1,
R:function(a,b){return this===b},
ga3:function(a){return H.eA(this)},
A:function(a){return H.nO(this)},
gaa:function(a){return new H.dY(H.kl(this),null)},
toString:function(){return this.A(this)}}
P.d5.prototype={}
P.eC.prototype={}
P.dV.prototype={}
P.B.prototype={$isbI:1,
$asbI:function(){return[P.B]},
$isun:1}
P.cd.prototype={
gm:function(a){return this.O.length},
gX:function(a){return this.O.length===0},
A:function(a){var t=this.O
return t.charCodeAt(0)==0?t:t},
gO:function(){return this.O}}
P.eL.prototype={}
P.pm.prototype={
$2:function(a,b){var t,s,r,q
t=J.be(b)
s=t.be(b,"=")
if(s===-1){if(!t.R(b,""))J.km(a,P.qX(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.K(b,0,s)
q=C.c.ag(b,s+1)
t=this.a
J.km(a,P.qX(r,0,r.length,t,!0),P.qX(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pj.prototype={
$2:function(a,b){throw H.k(new P.bO("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.B,P.C]}}}
P.pk.prototype={
$2:function(a,b){throw H.k(new P.bO("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.B],opt:[,]}}}
P.pl.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fr(C.c.K(this.a,a,b),16,null)
s=J.dC(t)
if(s.a1(t,0)||s.aF(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.C,args:[P.C,P.C]}}}
P.kf.prototype={
geu:function(){return this.b},
gcM:function(a){var t=this.c
if(t==null)return""
if(C.c.af(t,"["))return C.c.K(t,1,t.length-1)
return t},
gcT:function(a){var t=this.d
if(t==null)return P.xn(this.a)
return t},
gcU:function(a){var t=this.f
return t==null?"":t},
ge0:function(){var t=this.r
return t==null?"":t},
gcV:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.B
s=new P.eK(P.xd(t==null?"":t,C.o),[s,s])
this.Q=s
t=s}return t},
ge3:function(){return this.c!=null},
ge5:function(){return this.f!=null},
ge4:function(){return this.r!=null},
A:function(a){var t=this.y
if(t==null){t=this.dA()
this.y=t}return t},
dA:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.y(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.y(s)}else t=s
t+=H.y(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
R:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.ar(b)
if(!!t.$iseL){if(this.a===b.gd3())if(this.c!=null===b.ge3()){s=this.b
r=b.geu()
if(s==null?r==null:s===r){s=this.gcM(this)
r=t.gcM(b)
if(s==null?r==null:s===r)if(J.aY(this.gcT(this),t.gcT(b)))if(J.aY(this.e,t.gef(b))){s=this.f
r=s==null
if(!r===b.ge5()){if(r)s=""
if(s===t.gcU(b)){t=this.r
s=t==null
if(!s===b.ge4()){if(s)t=""
t=t===b.ge0()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga3:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dA()
this.y=t}t=C.c.ga3(t)
this.z=t}return t},
$iseL:1,
gd3:function(){return this.a},
gef:function(a){return this.e}}
P.rg.prototype={
$1:function(a){throw H.k(new P.bO("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.pi.prototype={
ges:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
t=t[0]+1
r=J.be(s)
q=r.b0(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fE(s,o,p,C.l,!1)
if(n==null)n=r.K(s,o,p)
p=q}else n=null
m=P.fE(s,t,p,C.D,!1)
t=new P.pY(this,"data",null,null,null,m==null?r.K(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
A:function(a){var t,s
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
return t[0]===-1?"data:"+H.y(s):s}}
P.rb.prototype={
$1:function(a){return new Uint8Array(H.cD(96))},
$S:function(){return{func:1,args:[,]}}}
P.ra.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.w(t,a)
t=t[a]
J.y7(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.db,args:[,,]}}}
P.rc.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dq(a),r=0;r<t;++r)s.i(a,C.c.a2(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.db,P.B,P.C]}}}
P.rd.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a2(b,0),s=C.c.a2(b,1),r=J.dq(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.db,P.B,P.C]}}}
P.qN.prototype={
ge3:function(){return this.c>0},
ge5:function(){var t=this.f
if(typeof t!=="number")return t.a1()
return t<this.r},
ge4:function(){return this.r<this.a.length},
gd3:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.af(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.af(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.af(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.af(this.a,"package")){this.x="package"
t="package"}else{t=C.c.K(this.a,0,t)
this.x=t}return t},
geu:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.K(this.a,s,t-1):""},
gcM:function(a){var t=this.c
return t>0?C.c.K(this.a,t,this.d):""},
gcT:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.V()
s=this.e
if(typeof s!=="number")return H.a8(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.V()
return H.fr(C.c.K(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.af(this.a,"http"))return 80
if(t===5&&C.c.af(this.a,"https"))return 443
return 0},
gef:function(a){return C.c.K(this.a,this.e,this.f)},
gcU:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a1()
return t<s?C.c.K(this.a,t+1,s):""},
ge0:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ag(s,t+1):""},
gcV:function(){var t=this.f
if(typeof t!=="number")return t.a1()
if(t>=this.r)return C.a_
t=P.B
return new P.eK(P.xd(this.gcU(this),C.o),[t,t])},
ga3:function(a){var t=this.y
if(t==null){t=C.c.ga3(this.a)
this.y=t}return t},
R:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.ar(b)
if(!!t.$iseL)return this.a===t.A(b)
return!1},
A:function(a){return this.a},
$iseL:1}
P.pY.prototype={}
W.as.prototype={}
W.eW.prototype={
A:function(a){return String(a)},
$iseW:1,
$isf:1,
gad:function(a){return a.href}}
W.kt.prototype={
A:function(a){return String(a)},
$isf:1,
gad:function(a){return a.href}}
W.eZ.prototype={$iseZ:1,$isdu:1,$isaz:1,$isad:1}
W.cL.prototype={$isad:1}
W.kB.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cL]},
$ist:1,
$ast:function(){return[W.cL]},
$iso:1,
$aso:function(){return[W.cL]},
$isaG:1,
$asaG:function(){return[W.cL]},
$isay:1,
$asay:function(){return[W.cL]}}
W.h6.prototype={
$asp:function(){return[W.cL]},
$ast:function(){return[W.cL]},
$aso:function(){return[W.cL]},
$isp:1,
$ist:1,
$iso:1}
W.h9.prototype={
$asp:function(){return[W.cL]},
$ast:function(){return[W.cL]},
$aso:function(){return[W.cL]},
$isp:1,
$ist:1,
$iso:1}
W.kF.prototype={
gad:function(a){return a.href}}
W.f_.prototype={$isf_:1}
W.kI.prototype={$isf:1}
W.f0.prototype={$isf0:1,
gG:function(a){return a.name}}
W.ej.prototype={$isf:1,
gm:function(a){return a.length}}
W.kP.prototype={
as:function(a,b){return a.get(b)}}
W.kT.prototype={$isf:1}
W.ig.prototype={
cK:function(a,b){return typeof console!="undefined"?console.error(b):null},
aU:function(a){return typeof console!="undefined"?console.group(a):null},
e7:function(a){return typeof console!="undefined"?console.info(a):null},
i0:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.h0.prototype={
gG:function(a){return a.name}}
W.kY.prototype={
as:function(a,b){if(b!=null)return a.get(P.H7(b,null))
return a.get()},
bj:function(a){return this.as(a,null)}}
W.l0.prototype={
gaL:function(a){return a.style}}
W.l1.prototype={
gad:function(a){return a.href}}
W.h1.prototype={
gaL:function(a){return a.style}}
W.h2.prototype={
gG:function(a){return a.name}}
W.l2.prototype={
gaL:function(a){return a.style}}
W.bN.prototype={$isbN:1,$isad:1}
W.f3.prototype={
bH:function(a,b){var t=this.fi(a,b)
return t!=null?t:""},
fi:function(a,b){if(W.yW(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.z_()+b)},
J:function(a,b){return a.item(b)},
gbd:function(a){return a.content},
gbs:function(a){return a.display},
sbs:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iJ.prototype={}
W.pW.prototype={
bH:function(a,b){var t=this.b
return J.yh(t.ga9(t),b)},
fH:function(a,b){var t
for(t=this.a,t=new H.dQ(t,t.gm(t),0,null,[H.T(t,0)]);t.F();)t.d.style[a]=b},
sbs:function(a,b){this.fH("display",b)},
eY:function(a){var t=P.cW(this.a,!0,null)
this.b=new H.fm(t,new W.pX(),[H.T(t,0),null])}}
W.jF.prototype={}
W.pX.prototype={
$1:function(a){return J.rP(a)},
$S:function(){return{func:1,args:[,]}}}
W.ii.prototype={
gbd:function(a){return this.bH(a,"content")},
gbs:function(a){return this.bH(a,"display")}}
W.l3.prototype={
gaL:function(a){return a.style}}
W.l4.prototype={
gaL:function(a){return a.style}}
W.l9.prototype={
gcL:function(a){return a.files}}
W.f4.prototype={$isf4:1,$isad:1}
W.ij.prototype={
bT:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
J:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.h3.prototype={$ish3:1}
W.ek.prototype={$isek:1}
W.il.prototype={$isf:1}
W.im.prototype={
gG:function(a){return a.name}}
W.lc.prototype={
gG:function(a){var t=a.name
if(P.vx()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vx()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
A:function(a){return String(a)}}
W.io.prototype={
A:function(a){return"Rectangle ("+H.y(a.left)+", "+H.y(a.top)+") "+H.y(this.gb7(a))+" x "+H.y(this.gb_(a))},
R:function(a,b){var t
if(b==null)return!1
t=J.ar(b)
if(!t.$isbU)return!1
return a.left===t.gc0(b)&&a.top===t.gc5(b)&&this.gb7(a)===t.gb7(b)&&this.gb_(a)===t.gb_(b)},
ga3:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb7(a)
q=this.gb_(a)
return W.xm(W.eS(W.eS(W.eS(W.eS(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gb_:function(a){return a.height},
gc0:function(a){return a.left},
gc5:function(a){return a.top},
gb7:function(a){return a.width},
$isbU:1,
$asbU:function(){}}
W.ip.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.B]},
$ist:1,
$ast:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]},
$isaG:1,
$asaG:function(){return[P.B]},
$isay:1,
$asay:function(){return[P.B]}}
W.iK.prototype={
$asp:function(){return[P.B]},
$ast:function(){return[P.B]},
$aso:function(){return[P.B]},
$isp:1,
$ist:1,
$iso:1}
W.j3.prototype={
$asp:function(){return[P.B]},
$ast:function(){return[P.B]},
$aso:function(){return[P.B]},
$isp:1,
$ist:1,
$iso:1}
W.iq.prototype={
J:function(a,b){return a.item(b)}}
W.ir.prototype={
h:function(a,b){return a.add(b)},
ac:function(a,b){return a.contains(b)},
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.k5.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot modify list"))},
sm:function(a,b){throw H.k(new P.V("Cannot modify list"))},
gaL:function(a){return W.Gp(this)},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
W.du.prototype={
gdW:function(a){return new W.q3(a)},
A:function(a){return a.localName},
e8:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
ged:function(a){return new W.eQ(a,"click",!1,[W.ue])},
$isdu:1,
$isaz:1,
$isad:1,
$isf:1,
gaL:function(a){return a.style}}
W.li.prototype={
gG:function(a){return a.name},
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.h5.prototype={
gG:function(a){return a.name}}
W.lo.prototype={
gar:function(a){return a.error}}
W.U.prototype={$isU:1,$isad:1}
W.aH.prototype={
fO:function(a,b,c,d){if(c!=null)this.f2(a,b,c,!1)},
hR:function(a,b,c,d){if(c!=null)this.fE(a,b,c,!1)},
f2:function(a,b,c,d){return a.addEventListener(b,H.dp(c,1),!1)},
fE:function(a,b,c,d){return a.removeEventListener(b,H.dp(c,1),!1)}}
W.lR.prototype={
gG:function(a){return a.name}}
W.cg.prototype={$iscg:1,$isad:1,
gG:function(a){return a.name}}
W.fc.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isfc:1,
$isaG:1,
$asaG:function(){return[W.cg]},
$isay:1,
$asay:function(){return[W.cg]},
$isp:1,
$asp:function(){return[W.cg]},
$ist:1,
$ast:function(){return[W.cg]},
$iso:1,
$aso:function(){return[W.cg]}}
W.iL.prototype={
$asp:function(){return[W.cg]},
$ast:function(){return[W.cg]},
$aso:function(){return[W.cg]},
$isp:1,
$ist:1,
$iso:1}
W.j4.prototype={
$asp:function(){return[W.cg]},
$ast:function(){return[W.cg]},
$aso:function(){return[W.cg]},
$isp:1,
$ist:1,
$iso:1}
W.lS.prototype={
gar:function(a){return a.error}}
W.lT.prototype={
gG:function(a){return a.name}}
W.lU.prototype={
gar:function(a){return a.error},
gm:function(a){return a.length}}
W.lX.prototype={
gaL:function(a){return a.style},
gb6:function(a){return a.weight}}
W.lY.prototype={
h:function(a,b){return a.add(b)},
i9:function(a,b,c){return a.forEach(H.dp(b,3),c)},
a5:function(a,b){b=H.dp(b,3)
return a.forEach(b)}}
W.m_.prototype={
as:function(a,b){return a.get(b)}}
W.iF.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.cr.prototype={$iscr:1,$isad:1}
W.m8.prototype={
gm:function(a){return a.length}}
W.fd.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.az]},
$ist:1,
$ast:function(){return[W.az]},
$iso:1,
$aso:function(){return[W.az]},
$isaG:1,
$asaG:function(){return[W.az]},
$isay:1,
$asay:function(){return[W.az]}}
W.iM.prototype={
$asp:function(){return[W.az]},
$ast:function(){return[W.az]},
$aso:function(){return[W.az]},
$isp:1,
$ist:1,
$iso:1}
W.j5.prototype={
$asp:function(){return[W.az]},
$ast:function(){return[W.az]},
$aso:function(){return[W.az]},
$isp:1,
$ist:1,
$iso:1}
W.iH.prototype={
J:function(a,b){return a.item(b)}}
W.e8.prototype={
ik:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hD:function(a,b,c,d){return a.open(b,c,d)},
ghU:function(a){return W.GO(a.response)},
b8:function(a,b){return a.send(b)},
$ise8:1,
$isad:1,
ghV:function(a){return a.responseText}}
W.mb.prototype={
$1:function(a){return J.yd(a)},
$S:function(){return{func:1,args:[W.e8]}}}
W.mc.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.au()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aC(0,t)
else p.bq(a)},
$S:function(){return{func:1,args:[,]}}}
W.hm.prototype={}
W.me.prototype={
gG:function(a){return a.name},
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.hn.prototype={$ishn:1}
W.ff.prototype={$isff:1,$isdu:1,$isaz:1,$isad:1,
aC:function(a,b){return a.complete.$1(b)},
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.mk.prototype={$isf:1,
gcL:function(a){return a.files},
gG:function(a){return a.name},
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.mI.prototype={
gG:function(a){return a.name}}
W.hv.prototype={
h:function(a,b){return a.add(b)}}
W.hw.prototype={$ishw:1,
gad:function(a){return a.href}}
W.n_.prototype={
A:function(a){return String(a)},
gad:function(a){return a.href}}
W.n4.prototype={
gG:function(a){return a.name}}
W.hC.prototype={
gar:function(a){return a.error},
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.jz.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.n8.prototype={
gbd:function(a){return a.content},
gG:function(a){return a.name}}
W.n9.prototype={
i5:function(a,b,c){return a.send(b,c)},
b8:function(a,b){return a.send(b)}}
W.hD.prototype={
gG:function(a){return a.name}}
W.ct.prototype={$isct:1,$isad:1}
W.jA.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[W.ct]},
$isay:1,
$asay:function(){return[W.ct]},
$isp:1,
$asp:function(){return[W.ct]},
$ist:1,
$ast:function(){return[W.ct]},
$iso:1,
$aso:function(){return[W.ct]}}
W.iW.prototype={
$asp:function(){return[W.ct]},
$ast:function(){return[W.ct]},
$aso:function(){return[W.ct]},
$isp:1,
$ist:1,
$iso:1}
W.jf.prototype={
$asp:function(){return[W.ct]},
$ast:function(){return[W.ct]},
$aso:function(){return[W.ct]},
$isp:1,
$ist:1,
$iso:1}
W.nm.prototype={$isf:1}
W.nn.prototype={
gG:function(a){return a.name}}
W.az.prototype={
A:function(a){var t=a.nodeValue
return t==null?this.eK(a):t},
ac:function(a,b){return a.contains(b)},
$isaz:1,
$isad:1}
W.jD.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.az]},
$ist:1,
$ast:function(){return[W.az]},
$iso:1,
$aso:function(){return[W.az]},
$isaG:1,
$asaG:function(){return[W.az]},
$isay:1,
$asay:function(){return[W.az]}}
W.iX.prototype={
$asp:function(){return[W.az]},
$ast:function(){return[W.az]},
$aso:function(){return[W.az]},
$isp:1,
$ist:1,
$iso:1}
W.jg.prototype={
$asp:function(){return[W.az]},
$ast:function(){return[W.az]},
$aso:function(){return[W.az]},
$isp:1,
$ist:1,
$iso:1}
W.nq.prototype={
gG:function(a){return a.name}}
W.nv.prototype={
gG:function(a){return a.name}}
W.nz.prototype={
gG:function(a){return a.name}}
W.nB.prototype={$isf:1}
W.ea.prototype={
gG:function(a){return a.name}}
W.nG.prototype={
gm:function(a){return a.length}}
W.ci.prototype={
J:function(a,b){return a.item(b)},
$isci:1,
$isad:1,
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.jJ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ci]},
$ist:1,
$ast:function(){return[W.ci]},
$iso:1,
$aso:function(){return[W.ci]},
$isaG:1,
$asaG:function(){return[W.ci]},
$isay:1,
$asay:function(){return[W.ci]}}
W.iY.prototype={
$asp:function(){return[W.ci]},
$ast:function(){return[W.ci]},
$aso:function(){return[W.ci]},
$isp:1,
$ist:1,
$iso:1}
W.jh.prototype={
$asp:function(){return[W.ci]},
$ast:function(){return[W.ci]},
$aso:function(){return[W.ci]},
$isp:1,
$ist:1,
$iso:1}
W.nL.prototype={
b8:function(a,b){return a.send(b)}}
W.jL.prototype={
b8:function(a,b){return a.send(b)}}
W.fu.prototype={$isfu:1,$isdu:1,$isaz:1,$isad:1,
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.jM.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.oa.prototype={
gG:function(a){return a.name}}
W.od.prototype={$isf:1}
W.oe.prototype={
gG:function(a){return a.name}}
W.of.prototype={
gG:function(a){return a.name}}
W.cu.prototype={$iscu:1,$isad:1}
W.jO.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cu]},
$ist:1,
$ast:function(){return[W.cu]},
$iso:1,
$aso:function(){return[W.cu]},
$isaG:1,
$asaG:function(){return[W.cu]},
$isay:1,
$asay:function(){return[W.cu]}}
W.h7.prototype={
$asp:function(){return[W.cu]},
$ast:function(){return[W.cu]},
$aso:function(){return[W.cu]},
$isp:1,
$ist:1,
$iso:1}
W.ha.prototype={
$asp:function(){return[W.cu]},
$ast:function(){return[W.cu]},
$aso:function(){return[W.cu]},
$isp:1,
$ist:1,
$iso:1}
W.oi.prototype={
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.hQ.prototype={$ishQ:1}
W.cv.prototype={$iscv:1,$isad:1,
gb6:function(a){return a.weight}}
W.jP.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cv]},
$ist:1,
$ast:function(){return[W.cv]},
$iso:1,
$aso:function(){return[W.cv]},
$isaG:1,
$asaG:function(){return[W.cv]},
$isay:1,
$asay:function(){return[W.cv]}}
W.iZ.prototype={
$asp:function(){return[W.cv]},
$ast:function(){return[W.cv]},
$aso:function(){return[W.cv]},
$isp:1,
$ist:1,
$iso:1}
W.ji.prototype={
$asp:function(){return[W.cv]},
$ast:function(){return[W.cv]},
$aso:function(){return[W.cv]},
$isp:1,
$ist:1,
$iso:1}
W.fv.prototype={$isfv:1,$isad:1}
W.ok.prototype={
gar:function(a){return a.error}}
W.ck.prototype={
J:function(a,b){return a.item(b)},
$isck:1,
$isad:1,
gm:function(a){return a.length}}
W.ol.prototype={
gG:function(a){return a.name}}
W.om.prototype={
gG:function(a){return a.name}}
W.os.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a5:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gX:function(a){return a.key(0)==null},
$isbg:1,
$asbg:function(){return[P.B,P.B]}}
W.oP.prototype={
as:function(a,b){return a.get(b)}}
W.cm.prototype={$iscm:1,$isad:1,
gad:function(a){return a.href}}
W.ed.prototype={}
W.oW.prototype={
gbd:function(a){return a.content}}
W.hU.prototype={$ishU:1,
gG:function(a){return a.name}}
W.cS.prototype={$isad:1}
W.cI.prototype={$isad:1}
W.p2.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.cI]},
$isay:1,
$asay:function(){return[W.cI]},
$isp:1,
$asp:function(){return[W.cI]},
$ist:1,
$ast:function(){return[W.cI]},
$iso:1,
$aso:function(){return[W.cI]}}
W.j_.prototype={
$asp:function(){return[W.cI]},
$ast:function(){return[W.cI]},
$aso:function(){return[W.cI]},
$isp:1,
$ist:1,
$iso:1}
W.jj.prototype={
$asp:function(){return[W.cI]},
$ast:function(){return[W.cI]},
$aso:function(){return[W.cI]},
$isp:1,
$ist:1,
$iso:1}
W.p3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.cS]},
$isay:1,
$asay:function(){return[W.cS]},
$isp:1,
$asp:function(){return[W.cS]},
$ist:1,
$ast:function(){return[W.cS]},
$iso:1,
$aso:function(){return[W.cS]}}
W.h8.prototype={
$asp:function(){return[W.cS]},
$ast:function(){return[W.cS]},
$aso:function(){return[W.cS]},
$isp:1,
$ist:1,
$iso:1}
W.hb.prototype={
$asp:function(){return[W.cS]},
$ast:function(){return[W.cS]},
$aso:function(){return[W.cS]},
$isp:1,
$ist:1,
$iso:1}
W.p7.prototype={
gm:function(a){return a.length}}
W.cx.prototype={$iscx:1,$isad:1}
W.jT.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cx]},
$ist:1,
$ast:function(){return[W.cx]},
$iso:1,
$aso:function(){return[W.cx]},
$isaG:1,
$asaG:function(){return[W.cx]},
$isay:1,
$asay:function(){return[W.cx]}}
W.j0.prototype={
$asp:function(){return[W.cx]},
$ast:function(){return[W.cx]},
$aso:function(){return[W.cx]},
$isp:1,
$ist:1,
$iso:1}
W.jk.prototype={
$asp:function(){return[W.cx]},
$ast:function(){return[W.cx]},
$aso:function(){return[W.cx]},
$isp:1,
$ist:1,
$iso:1}
W.fy.prototype={$isfy:1,$isad:1}
W.jU.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pb.prototype={
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.ee.prototype={}
W.pn.prototype={
A:function(a){return String(a)},
$isf:1,
gad:function(a){return a.href}}
W.po.prototype={
as:function(a,b){return a.get(b)}}
W.ps.prototype={
gm:function(a){return a.length}}
W.fz.prototype={$isfz:1,$isad:1}
W.jV.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.px.prototype={
b8:function(a,b){return a.send(b)}}
W.jY.prototype={$isf:1,
gG:function(a){return a.name}}
W.pE.prototype={$isf:1}
W.eN.prototype={$isf:1}
W.fA.prototype={$isfA:1,$isaz:1,$isad:1,
gG:function(a){return a.name}}
W.pV.prototype={
A:function(a){return"Rectangle ("+H.y(a.left)+", "+H.y(a.top)+") "+H.y(a.width)+" x "+H.y(a.height)},
R:function(a,b){var t,s,r
if(b==null)return!1
t=J.ar(b)
if(!t.$isbU)return!1
s=a.left
r=t.gc0(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc5(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb7(b)
if(s==null?r==null:s===r){s=a.height
t=t.gb_(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga3:function(a){var t,s,r,q
t=J.dE(a.left)
s=J.dE(a.top)
r=J.dE(a.width)
q=J.dE(a.height)
return W.xm(W.eS(W.eS(W.eS(W.eS(0,t),s),r),q))},
$isbU:1,
$asbU:function(){},
gb_:function(a){return a.height},
gc0:function(a){return a.left},
gc5:function(a){return a.top},
gb7:function(a){return a.width}}
W.i0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[P.bU]},
$isay:1,
$asay:function(){return[P.bU]},
$isp:1,
$asp:function(){return[P.bU]},
$ist:1,
$ast:function(){return[P.bU]},
$iso:1,
$aso:function(){return[P.bU]}}
W.j1.prototype={
$asp:function(){return[P.bU]},
$ast:function(){return[P.bU]},
$aso:function(){return[P.bU]},
$isp:1,
$ist:1,
$iso:1}
W.jl.prototype={
$asp:function(){return[P.bU]},
$ast:function(){return[P.bU]},
$aso:function(){return[P.bU]},
$isp:1,
$ist:1,
$iso:1}
W.k3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bN]},
$ist:1,
$ast:function(){return[W.bN]},
$iso:1,
$aso:function(){return[W.bN]},
$isaG:1,
$asaG:function(){return[W.bN]},
$isay:1,
$asay:function(){return[W.bN]}}
W.j2.prototype={
$asp:function(){return[W.bN]},
$ast:function(){return[W.bN]},
$aso:function(){return[W.bN]},
$isp:1,
$ist:1,
$iso:1}
W.jm.prototype={
$asp:function(){return[W.bN]},
$ast:function(){return[W.bN]},
$aso:function(){return[W.bN]},
$isp:1,
$ist:1,
$iso:1}
W.q1.prototype={$isf:1}
W.q2.prototype={
gb_:function(a){return a.height},
gb7:function(a){return a.width}}
W.k7.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[W.cr]},
$isay:1,
$asay:function(){return[W.cr]},
$isp:1,
$asp:function(){return[W.cr]},
$ist:1,
$ast:function(){return[W.cr]},
$iso:1,
$aso:function(){return[W.cr]}}
W.iN.prototype={
$asp:function(){return[W.cr]},
$ast:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isp:1,
$ist:1,
$iso:1}
W.j6.prototype={
$asp:function(){return[W.cr]},
$ast:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isp:1,
$ist:1,
$iso:1}
W.qn.prototype={$isf:1}
W.i5.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.az]},
$ist:1,
$ast:function(){return[W.az]},
$iso:1,
$aso:function(){return[W.az]},
$isaG:1,
$asaG:function(){return[W.az]},
$isay:1,
$asay:function(){return[W.az]}}
W.iO.prototype={
$asp:function(){return[W.az]},
$ast:function(){return[W.az]},
$aso:function(){return[W.az]},
$isp:1,
$ist:1,
$iso:1}
W.j7.prototype={
$asp:function(){return[W.az]},
$ast:function(){return[W.az]},
$aso:function(){return[W.az]},
$isp:1,
$ist:1,
$iso:1}
W.qM.prototype={$isf:1}
W.kb.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ck]},
$ist:1,
$ast:function(){return[W.ck]},
$iso:1,
$aso:function(){return[W.ck]},
$isaG:1,
$asaG:function(){return[W.ck]},
$isay:1,
$asay:function(){return[W.ck]}}
W.iP.prototype={
$asp:function(){return[W.ck]},
$ast:function(){return[W.ck]},
$aso:function(){return[W.ck]},
$isp:1,
$ist:1,
$iso:1}
W.j8.prototype={
$asp:function(){return[W.ck]},
$ast:function(){return[W.ck]},
$aso:function(){return[W.ck]},
$isp:1,
$ist:1,
$iso:1}
W.kd.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[W.cm]},
$isay:1,
$asay:function(){return[W.cm]},
$isp:1,
$asp:function(){return[W.cm]},
$ist:1,
$ast:function(){return[W.cm]},
$iso:1,
$aso:function(){return[W.cm]}}
W.iQ.prototype={
$asp:function(){return[W.cm]},
$ast:function(){return[W.cm]},
$aso:function(){return[W.cm]},
$isp:1,
$ist:1,
$iso:1}
W.j9.prototype={
$asp:function(){return[W.cm]},
$ast:function(){return[W.cm]},
$aso:function(){return[W.cm]},
$isp:1,
$ist:1,
$iso:1}
W.r1.prototype={$isf:1}
W.r2.prototype={$isf:1}
W.q3.prototype={
aD:function(){var t,s,r,q,p
t=P.a3(null,null,null,P.B)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bH)(s),++q){p=J.rS(s[q])
if(p.length!==0)t.h(0,p)}return t},
d0:function(a){this.a.className=a.bf(0," ")},
gm:function(a){return this.a.classList.length},
gX:function(a){return this.a.classList.length===0},
ac:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
ae:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.remove(b)
return s}}
W.q6.prototype={
aQ:function(a,b,c,d){return W.ef(this.a,this.b,a,!1,H.T(this,0))},
eb:function(a,b,c){return this.aQ(a,null,b,c)}}
W.eQ.prototype={}
W.q7.prototype={
bW:function(a){if(this.b==null)return
this.dT()
this.b=null
this.d=null
return},
cR:function(a,b){if(this.b==null)return;++this.a
this.dT()},
eg:function(a){return this.cR(a,null)},
el:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dR()},
dR:function(){var t=this.d
if(t!=null&&this.a<=0)J.y1(this.b,this.c,t,!1)},
dT:function(){var t=this.d
if(t!=null)J.yk(this.b,this.c,t,!1)},
eZ:function(a,b,c,d,e){this.dR()}}
W.q8.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bz.prototype={
gS:function(a){return new W.lW(a,this.gm(a),-1,null,[H.ao(a,"bz",0)])},
h:function(a,b){throw H.k(new P.V("Cannot add to immutable List."))},
a7:function(a,b,c,d,e){throw H.k(new P.V("Cannot setRange on immutable List."))},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aE:function(a,b,c,d){throw H.k(new P.V("Cannot modify an immutable List."))},
bZ:function(a,b,c,d){throw H.k(new P.V("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
W.lW.prototype={
F:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.fK(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gM:function(){return this.d}}
W.qV.prototype={}
P.qS.prototype={
bw:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b5:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.ar(a)
if(!!s.$isdK)return new Date(a.a)
if(!!s.$isFJ)throw H.k(new P.eI("structured clone of RegExp"))
if(!!s.$iscg)return a
if(!!s.$isf_)return a
if(!!s.$isfc)return a
if(!!s.$ishn)return a
if(!!s.$isfn||!!s.$isez)return a
if(!!s.$isbg){r=this.bw(a)
q=this.b
p=q.length
if(r>=p)return H.w(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.w(q,r)
q[r]=o
s.a5(a,new P.qU(t,this))
return t.a}if(!!s.$isp){r=this.bw(a)
t=this.b
if(r>=t.length)return H.w(t,r)
o=t[r]
if(o!=null)return o
return this.h_(a,r)}throw H.k(new P.eI("structured clone of other type"))},
h_:function(a,b){var t,s,r,q,p
t=J.be(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.w(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b5(t.n(a,p))
if(p>=r.length)return H.w(r,p)
r[p]=q}return r}}
P.qU.prototype={
$2:function(a,b){this.a.a[a]=this.b.b5(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pL.prototype={
bw:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b5:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.dK(s,!0)
r.dc(s,!0)
return r}if(a instanceof RegExp)throw H.k(new P.eI("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.H8(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bw(a)
r=this.b
o=r.length
if(p>=o)return H.w(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.mS()
t.a=n
if(p>=o)return H.w(r,p)
r[p]=n
this.hd(a,new P.pM(t,this))
return t.a}if(a instanceof Array){p=this.bw(a)
r=this.b
if(p>=r.length)return H.w(r,p)
n=r[p]
if(n!=null)return n
o=J.be(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.w(r,p)
r[p]=n
if(typeof m!=="number")return H.a8(m)
r=J.dq(n)
l=0
for(;l<m;++l)r.i(n,l,this.b5(o.n(a,l)))
return n}return a}}
P.pM.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b5(b)
J.km(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.rk.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.B,,]}}}
P.qT.prototype={}
P.k_.prototype={
hd:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bH)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.rl.prototype={
$1:function(a){return this.a.aC(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rm.prototype={
$1:function(a){return this.a.bq(a)},
$S:function(){return{func:1,args:[,]}}}
P.kZ.prototype={
cB:function(a){if($.$get$vp().b.test(a))return a
throw H.k(P.dG(a,"value","Not a valid class token"))},
A:function(a){return this.aD().bf(0," ")},
gS:function(a){var t,s
t=this.aD()
s=new P.dA(t,t.r,null,null,[null])
s.c=t.e
return s},
a5:function(a,b){this.aD().a5(0,b)},
ay:function(a,b){var t=this.aD()
return new H.h4(t,b,[H.T(t,0),null])},
gX:function(a){return this.aD().a===0},
gm:function(a){return this.aD().a},
ac:function(a,b){if(typeof b!=="string")return!1
this.cB(b)
return this.aD().ac(0,b)},
cP:function(a){return this.ac(0,a)?a:null},
h:function(a,b){this.cB(b)
return this.hz(0,new P.l_(b))},
ae:function(a,b){var t,s
this.cB(b)
t=this.aD()
s=t.ae(0,b)
this.d0(t)
return s},
a0:function(a,b){return this.aD().a0(0,!0)},
ap:function(a){return this.a0(a,!0)},
hz:function(a,b){var t,s
t=this.aD()
s=b.$1(t)
this.d0(t)
return s},
$iseC:1,
$aseC:function(){return[P.B]},
$ist:1,
$ast:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]}}
P.l_.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.la.prototype={
gG:function(a){return a.name}}
P.r9.prototype={
$1:function(a){this.b.aC(0,new P.k_([],[],!1).b5(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mh.prototype={
as:function(a,b){var t,s,r,q,p
try{t=a.get(b)
q=P.xw(t)
return q}catch(p){s=H.co(p)
r=H.cn(p)
q=P.tn(s,r,null)
return q}},
gG:function(a){return a.name}}
P.nr.prototype={
bT:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fq(a,b,c)
q=P.xw(t)
return q}catch(p){s=H.co(p)
r=H.cn(p)
q=P.tn(s,r,null)
return q}},
h:function(a,b){return this.bT(a,b,null)},
fq:function(a,b,c){return a.add(new P.qT([],[]).b5(b))},
gG:function(a){return a.name}}
P.hO.prototype={
gar:function(a){return a.error}}
P.pc.prototype={
gar:function(a){return a.error}}
P.qu.prototype={
bA:function(a){if(a<=0||a>4294967296)throw H.k(P.wO("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
c1:function(){return Math.random()}}
P.qD.prototype={
aW:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.ao(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bA:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.k(P.wO("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aW()
return(this.a&t)>>>0}do{this.aW()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
c1:function(){this.aW()
var t=this.a
this.aW()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
f0:function(a){var t,s,r,q,p,o,n,m
t=J.eh(a,0)?-1:0
do{if(typeof a!=="number")return a.aJ()
s=(a&4294967295)>>>0
a=C.d.ao(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.ao(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.ao(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.ao(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.ao(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.ao(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.ao(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aW()
this.aW()
this.aW()
this.aW()}}
P.qE.prototype={}
P.bU.prototype={$asbU:null}
P.kq.prototype={$isf:1,
gad:function(a){return a.href}}
P.ei.prototype={$isf:1}
P.lr.prototype={$isf:1}
P.ls.prototype={$isf:1}
P.lt.prototype={$isf:1}
P.lu.prototype={$isf:1}
P.lv.prototype={$isf:1}
P.lw.prototype={$isf:1}
P.lx.prototype={$isf:1}
P.ly.prototype={$isf:1}
P.lz.prototype={$isf:1}
P.lA.prototype={$isf:1,
gad:function(a){return a.href}}
P.lB.prototype={$isf:1}
P.lC.prototype={$isf:1}
P.lD.prototype={$isf:1}
P.lE.prototype={$isf:1}
P.lF.prototype={$isf:1}
P.lG.prototype={$isf:1}
P.lV.prototype={$isf:1,
gad:function(a){return a.href}}
P.cs.prototype={$isf:1}
P.mf.prototype={$isf:1,
gad:function(a){return a.href}}
P.d4.prototype={$isad:1}
P.mL.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d4]},
$ist:1,
$ast:function(){return[P.d4]},
$iso:1,
$aso:function(){return[P.d4]}}
P.iR.prototype={
$asp:function(){return[P.d4]},
$ast:function(){return[P.d4]},
$aso:function(){return[P.d4]},
$isp:1,
$ist:1,
$iso:1}
P.ja.prototype={
$asp:function(){return[P.d4]},
$ast:function(){return[P.d4]},
$aso:function(){return[P.d4]},
$isp:1,
$ist:1,
$iso:1}
P.n6.prototype={$isf:1}
P.n7.prototype={$isf:1}
P.d7.prototype={$isad:1}
P.no.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d7]},
$ist:1,
$ast:function(){return[P.d7]},
$iso:1,
$aso:function(){return[P.d7]}}
P.iS.prototype={
$asp:function(){return[P.d7]},
$ast:function(){return[P.d7]},
$aso:function(){return[P.d7]},
$isp:1,
$ist:1,
$iso:1}
P.jb.prototype={
$asp:function(){return[P.d7]},
$ast:function(){return[P.d7]},
$aso:function(){return[P.d7]},
$isp:1,
$ist:1,
$iso:1}
P.nE.prototype={$isf:1,
gad:function(a){return a.href}}
P.nJ.prototype={
gm:function(a){return a.length}}
P.o7.prototype={$isf:1,
gad:function(a){return a.href}}
P.oN.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.B]},
$ist:1,
$ast:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]}}
P.iT.prototype={
$asp:function(){return[P.B]},
$ast:function(){return[P.B]},
$aso:function(){return[P.B]},
$isp:1,
$ist:1,
$iso:1}
P.jc.prototype={
$asp:function(){return[P.B]},
$ast:function(){return[P.B]},
$aso:function(){return[P.B]},
$isp:1,
$ist:1,
$iso:1}
P.kx.prototype={
aD:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a3(null,null,null,P.B)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bH)(r),++p){o=J.rS(r[p])
if(o.length!==0)s.h(0,o)}return s},
d0:function(a){this.a.setAttribute("class",a.bf(0," "))}}
P.ce.prototype={
gdW:function(a){return new P.kx(a)},
e8:function(a,b,c,d,e){throw H.k(new P.V("Cannot invoke insertAdjacentHtml on SVG."))},
ged:function(a){return new W.eQ(a,"click",!1,[W.ue])},
$isf:1}
P.oR.prototype={$isf:1}
P.oT.prototype={$isf:1}
P.eH.prototype={}
P.p1.prototype={$isf:1,
gad:function(a){return a.href}}
P.da.prototype={$isad:1}
P.pd.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.da]},
$ist:1,
$ast:function(){return[P.da]},
$iso:1,
$aso:function(){return[P.da]}}
P.iU.prototype={
$asp:function(){return[P.da]},
$ast:function(){return[P.da]},
$aso:function(){return[P.da]},
$isp:1,
$ist:1,
$iso:1}
P.jd.prototype={
$asp:function(){return[P.da]},
$ast:function(){return[P.da]},
$aso:function(){return[P.da]},
$isp:1,
$ist:1,
$iso:1}
P.pp.prototype={$isf:1,
gad:function(a){return a.href}}
P.pt.prototype={$isf:1}
P.pu.prototype={$isf:1}
P.i3.prototype={$isf:1,
gad:function(a){return a.href}}
P.qJ.prototype={$isf:1}
P.qK.prototype={$isf:1}
P.qL.prototype={$isf:1}
P.bh.prototype={}
P.db.prototype={$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
P.fR.prototype={$isfR:1,$isad:1,
gm:function(a){return a.length}}
P.eY.prototype={$iseY:1,$isad:1,
gbV:function(a){return a.buffer}}
P.fS.prototype={
fb:function(a,b,c,d){return a.decodeAudioData(b,H.dp(c,1),H.dp(d,1))},
h0:function(a,b){var t,s,r
t=P.fR
s=new P.bl(0,$.am,null,[t])
r=new P.e_(s,[t])
this.fb(a,b,new P.ky(r),new P.kz(r))
return s}}
P.ky.prototype={
$1:function(a){this.a.aC(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kz.prototype={
$1:function(a){var t=this.a
if(a==null)t.bq("")
else t.bq(a)},
$S:function(){return{func:1,args:[,]}}}
P.bB.prototype={}
P.e3.prototype={}
P.kX.prototype={
gbV:function(a){return a.buffer}}
P.ks.prototype={
gG:function(a){return a.name}}
P.nZ.prototype={$isf:1}
P.r0.prototype={$isf:1}
P.jQ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return P.xN(a.item(b))},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
J:function(a,b){return P.xN(a.item(b))},
$isp:1,
$asp:function(){return[P.bg]},
$ist:1,
$ast:function(){return[P.bg]},
$iso:1,
$aso:function(){return[P.bg]}}
P.iV.prototype={
$asp:function(){return[P.bg]},
$ast:function(){return[P.bg]},
$aso:function(){return[P.bg]},
$isp:1,
$ist:1,
$iso:1}
P.je.prototype={
$asp:function(){return[P.bg]},
$ast:function(){return[P.bg]},
$aso:function(){return[P.bg]},
$isp:1,
$ist:1,
$iso:1}
T.fN.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
gX:function(a){return this.a.length===0},
gS:function(a){var t=this.a
return new J.ic(t,t.length,0,null,[H.T(t,0)])},
$ashs:function(){return[T.fO]},
$aso:function(){return[T.fO]},
gcL:function(a){return this.a}}
T.fO.prototype={
gbd:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fe(C.x)
r=T.fe(C.y)
q=T.wE(0,this.b)
new T.iI(s,q,0,0,0,t,r).dz()
r=q.c.buffer
q=q.a
r.toString
q=H.cR(r,0,q)
this.cy=q
t=q}else{t=s.bF()
this.cy=t}this.ch=0}}return t},
A:function(a){return this.a},
gG:function(a){return this.a}}
T.de.prototype={
A:function(a){return"ArchiveException: "+this.a}}
T.ho.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.am()
if(typeof r!=="number")return H.a8(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.V()
if(typeof b!=="number")return H.a8(b)
s+=b
if(s<0||s>=t.length)return H.w(t,s)
return t[s]},
aV:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a8(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.am()
if(typeof s!=="number")return H.a8(s)
b=t-(a-s)}return T.tr(this.a,this.d,b,a)},
b0:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.V()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a8(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.w(q,s)
q[s]}return-1},
be:function(a,b){return this.b0(a,b,0)},
cW:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.am()
if(typeof s!=="number")return H.a8(s)
r=this.aV(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.am()
if(typeof p!=="number")return H.a8(p)
if(typeof s!=="number")return s.V()
this.b=s+(t-(q-p))
return r},
c3:function(a){return P.oO(this.cW(a).bF(),0,null)},
Z:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.V()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.w(t,s)
p=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.w(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a_:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.V()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.w(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
n=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.w(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aS:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.V()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.w(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
j=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.w(t,r)
i=t[r]&255
if(this.d===1)return(C.a.aq(p,56)|C.a.aq(o,48)|C.a.aq(n,40)|C.a.aq(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.aq(i,56)|C.a.aq(j,48)|C.a.aq(k,40)|C.a.aq(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bF:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.am()
if(typeof r!=="number")return H.a8(r)
q=t-(s-r)
t=this.a
r=J.ar(t)
if(!!r.$isdb){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cR(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xy(r.ca(t,s,p>o?o:p)))},
eR:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbV:function(a){return this.a},
ghC:function(a){return this.b}}
T.nw.prototype={
i1:function(a,b){var t,s,r,q
if(b==null)b=J.c2(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cm(s-q)
C.q.aA(r,t,s,a)
this.a+=b},
d_:function(a){return this.i1(a,null)},
i3:function(a){var t,s,r,q
t=J.be(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
this.cm(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
C.q.a7(q,s,s+r,t.gbV(a),t.ghC(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.am()
if(typeof q!=="number")return H.a8(q)
this.a=t+(r-(s-q))},
aV:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cR(t,a,b-a)},
d8:function(a){return this.aV(a,null)},
cm:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.b0(P.dF("Invalid length "+H.y(s)))
r=new Uint8Array(s)
q=this.c
C.q.aA(r,0,q.length,q)
this.c=r},
ff:function(){return this.cm(null)},
gm:function(a){return this.a}}
T.pH.prototype={
fD:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aV(this.a-20,20)
if(s.a_()!==117853008){a.b=t
return}s.a_()
r=s.aS()
s.a_()
a.b=r
if(a.a_()!==101075792){a.b=t
return}a.aS()
a.Z()
a.Z()
q=a.a_()
p=a.a_()
o=a.aS()
n=a.aS()
m=a.aS()
l=a.aS()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fg:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.am()
if(typeof r!=="number")return H.a8(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a_()===101010256){a.b=t
return q}}throw H.k(new T.de("Could not find End of Central Directory Record"))},
eV:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fg(a)
this.a=t
a.b=t
a.a_()
this.b=a.Z()
this.c=a.Z()
this.d=a.Z()
this.e=a.Z()
this.f=a.a_()
this.r=a.a_()
s=a.Z()
if(s>0)this.x=a.c3(s)
this.fD(a)
r=a.aV(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.V()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.au()
if(!(p<t+o))break
if(r.a_()!==33639248)break
p=new T.pJ(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.Z()
p.b=r.Z()
p.c=r.Z()
p.d=r.Z()
p.e=r.Z()
p.f=r.Z()
p.r=r.a_()
p.x=r.a_()
p.y=r.a_()
n=r.Z()
m=r.Z()
l=r.Z()
p.z=r.Z()
p.Q=r.Z()
p.ch=r.a_()
o=r.a_()
p.cx=o
if(n>0)p.cy=r.c3(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.am()
j=r.aV(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.am()
if(typeof g!=="number")return H.a8(g)
if(typeof k!=="number")return k.V()
r.b=k+(i-(h-g))
p.db=j.bF()
f=j.Z()
e=j.Z()
if(f===1){if(e>=8)p.y=j.aS()
if(e>=16)p.x=j.aS()
if(e>=24){o=j.aS()
p.cx=o}if(e>=28)p.z=j.a_()}}if(l>0)p.dx=r.c3(l)
a.b=o
p.dy=T.Gk(a,p)
q.push(p)}}}
T.pI.prototype={
gbd:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fe(C.x)
q=T.fe(C.y)
t=T.wE(0,t)
new T.iI(s,t,0,0,0,r,q).dz()
q=t.c.buffer
t=t.a
q.toString
t=H.cR(q,0,t)
this.cy=t
this.d=0}else{t=s.bF()
this.cy=t}}return t},
A:function(a){return this.z},
eW:function(a,b){var t,s,r,q
t=a.a_()
this.a=t
if(t!==67324752)throw H.k(new T.de("Invalid Zip Signature"))
this.b=a.Z()
this.c=a.Z()
this.d=a.Z()
this.e=a.Z()
this.f=a.Z()
this.r=a.a_()
this.x=a.a_()
this.y=a.a_()
s=a.Z()
r=a.Z()
this.z=a.c3(s)
this.Q=a.cW(r).bF()
this.cx=a.cW(this.ch.x)
if((this.c&8)!==0){q=a.a_()
if(q===134695760)this.r=a.a_()
else this.r=q
this.x=a.a_()
this.y=a.a_()}}}
T.pJ.prototype={
A:function(a){return this.cy}}
T.pG.prototype={
h1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.Gj(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.C],p=0;p<t.length;t.length===r||(0,H.bH)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.d4()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fO(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.e0(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.tr(k,0,null,0)}else if(k instanceof T.ho){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.ho(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.h9(m,"/")
j.y=n.r
s.push(j)}return new T.fN(s,null)}}
T.md.prototype={
eQ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.aq(1,this.b)
r=H.cD(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.w(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.w(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iI.prototype={
dz:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.V()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.au()
if(!(r<s+q))break
if(!this.fA())break}},
fA:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.V()
if(typeof s!=="number")return s.au()
if(s>=r+q)return!1
p=this.aw(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.aw(16)
s=this.aw(16)
if(n!==0&&n!==(s^65535)>>>0)H.b0(new T.de("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.am()
r=q-r
if(n>s-r)H.b0(new T.de("Input buffer is broken"))
m=t.aV(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.am()
if(typeof l!=="number")return H.a8(l)
if(typeof s!=="number")return s.V()
t.b=s+(r-(q-l))
this.b.i3(m)
break
case 1:this.dq(this.f,this.r)
break
case 2:this.fB()
break
default:throw H.k(new T.de("unknown BTYPE: "+o))}return(p&1)===0},
aw:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.V()
if(typeof r!=="number")return r.au()
if(r>=q+p)throw H.k(new T.de("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.w(q,r)
o=q[r]
this.c=(this.c|C.a.av(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.aq(1,a)
this.c=C.a.dP(t,a)
this.d=s-a
return(t&r-1)>>>0},
cu:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.V()
if(typeof p!=="number")return p.au()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.w(o,p)
m=o[p]
this.c=(this.c|C.a.av(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.aq(1,s)-1)>>>0
if(p>=t.length)return H.w(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dP(r,k)
this.d=q-k
return l&65535},
fB:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.aw(5)+257
s=this.aw(5)+1
r=this.aw(4)+4
q=H.cD(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.w(C.E,o)
n=C.E[o]
m=this.aw(3)
if(n>=q)return H.w(p,n)
p[n]=m}l=T.fe(p)
k=new Uint8Array(H.cD(t))
j=new Uint8Array(H.cD(s))
i=this.dn(t,l,k)
h=this.dn(s,l,j)
this.dq(T.fe(i),T.fe(h))},
dq:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cu(a)
if(s>285)throw H.k(new T.de("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.ff()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.w(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.w(C.C,p)
o=C.C[p]+this.aw(C.V[p])
n=this.cu(b)
if(n<=29){if(n>=30)return H.w(C.z,n)
m=C.z[n]+this.aw(C.U[n])
for(r=-m;o>m;){t.d_(t.d8(r))
o-=m}if(o===m)t.d_(t.d8(r))
else t.d_(t.aV(r,o-m))}else throw H.k(new T.de("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.am();--r
t.b=r
if(r<0)t.b=0}},
dn:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cu(b)
switch(q){case 16:p=3+this.aw(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=s}break
case 17:p=3+this.aw(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
case 18:p=11+this.aw(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.k(new T.de("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kr.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Math Book",H.a([$.K,$.Y,$.aC],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.K,$.Y],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.D,$.Y,$.aP],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.K,$.Y],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.K,$.Y],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c6,$.av],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.Y],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f8,$.n)
q.i(0,$.bd,$.n)
q.i(0,$.fa,$.j)
q.i(0,$.aN,$.H)
q.i(0,$.cB,$.j)
p=$.m
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.r
o=o+n+" to stop "
m=$.L
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.F6
n=[U.b]
q.i(0,new R.Z("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.d0("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
q.i(0,new R.Z("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.r+" to stop "+$.L+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.nS(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
p="The "+m+" finds a massive library, filled with books. The "
l=$.r
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.x
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.Z("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.dR(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.em,$.H)
s.i(0,$.cB,$.n)
p=$.m
o="The "+p+"  is approached by a "
l=$.r
s.i(0,new R.Z("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.L+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.r
s.i(0,new R.Z("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.L+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.d8(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
s.i(0,new R.Z("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.r+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.dR(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.em,$.H)
t.i(0,$.cB,$.n)
t.i(0,$.c3,$.H)
t.i(0,$.te,$.H)
r=$.m
q="The "+r+"  is approached by a "
p=$.r
q=q+p+" who offers them a grant to study "
o=$.ab
t.i(0,new R.Z("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.L+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.dR(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
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
p=$.Fc
t.i(0,new R.Z("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.eb(),!1,!1,new Y.d0("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
t.i(0,new R.Z("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.L+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.r+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aB)}}
K.bQ.prototype={}
L.fP.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a5)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.T(t,0)]))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.j)
q.i(0,$.bd,$.H)
q.i(0,$.dO,$.j)
q.i(0,$.c3,$.n)
q.i(0,$.e4,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.x
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.bs+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.M("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.Q(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j=this.f
j.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.er,$.j)
s.i(0,$.eo,$.H)
s.i(0,$.eq,$.n)
s.i(0,$.cM,$.j)
s.i(0,$.cf,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.x
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.bs+". The "+p+" has won! "
s.i(0,new R.M("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.Q(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.bd,$.H)
t.i(0,$.c9,$.n)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.L
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.x
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.bs+". The "+r+" has won! "
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.Q(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.ut(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
l=$.m
r="The "+l+" learns that all of the local "
m=$.r
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.x
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.bs+". The "+l+" has won! "
t.i(0,new R.M("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.Q(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(s,t,null),$.aq)},
A:function(a){return this.Q},
aj:function(a,b,c,d){var t=this.Q
this.r=new X.iu("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.id]),H.a([],[M.hd]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.D()
this.E()
t=this.e
if($.$get$ku().U(0,t))H.b0("Duplicate aspect id for "+this.A(0)+": "+t+" is already registered for "+J.cK($.$get$ku().n(0,t))+".")
$.$get$ku().i(0,t,this)},
gG:function(a){return this.Q}}
L.aT.prototype={}
M.kw.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Barbells",H.a([$.ag,$.cb,$.D],s),null,!1,"Strength Building Metal")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.fg,$.cc],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jp,$.X],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.fg,$.cc],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aV,$.a7],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jp,$.X,$.dP],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.D,$.bf],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.w0,$.cc],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.cc,$.b_],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.e5,$.H)
q.i(0,$.c5,$.n)
q.i(0,$.cM,$.H)
p=$.m
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.r
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.L+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.Z("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.r
q.i(0,new R.Z("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.L+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.eb(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
n="The "+m+"  wanders into a bunch of "
p=$.r
q.i(0,new R.Z("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.fs(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.e5,$.n)
t.i(0,$.fb,$.n)
t.i(0,$.c5,$.n)
s=$.m
r="The "+s+" finds a team of underdog "
p=$.r
t.i(0,new R.Z("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.nS(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.r
s="A group of "+p+"s approach the "
r=$.m
s=s+r+". Apparently their sports team lost their coach to the "+$.x+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.L
t.i(0,new R.Z("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.eb(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
k=$.r
p="A group of "+k+"s approach the "
r=$.m
t.i(0,new R.Z("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.x+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ab+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,t,null),$.aB)}}
U.kA.prototype={
P:function(a,b){var t=0,s=P.bp(),r,q,p,o
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:q=$.$get$vg()
p=q.createBufferSource()
o=p
t=3
return P.cy(J.y6(q,b),$async$P)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$asds:function(){return[P.eY]},
$asca:function(){return[P.eY,P.bh]}}
U.n1.prototype={
aR:function(a){return"audio/mpeg"}}
U.nt.prototype={
aR:function(a){return"audio/ogg"}}
U.oK.prototype={
P:function(a,b){var t=0,s=P.bp(),r,q,p
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:q=W.yK(b)
p=new W.eQ(q,"canplaythrough",!1,[W.U])
t=3
return P.cy(p.ga9(p),$async$P)
case 3:r=q
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$asis:function(){return[W.eZ]},
$asca:function(){return[W.eZ,P.B]}}
U.oL.prototype={}
U.oM.prototype={}
O.kC.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Cod Piece",H.a([$.O,$.a_,$.aO,$.S,$.X],s),"God damn it, MI. ",!1,null)
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.tv,$.S,$.bP],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aD,$.X,$.bi,$.S,$.a9],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.O,$.aD,$.S,$.aW],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cE,$.j)
t.i(0,$.hj,$.j)
t.i(0,$.cq,$.j)
t.i(0,$.dv,$.j)
t.i(0,$.cp,$.j)
t.i(0,$.f5,$.j)
r="After all the bullshit the "+$.x+" has put the native "
q=$.r
r=r+q+"s through, the "
p=$.m
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aw+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.L
m=[U.b]
t.i(0,new R.a4("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.A(),!1,!1,new Y.dU("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.r
n="A group of jubilant "+p+"s are following the "
q=$.m
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.L
t.i(0,new R.a4("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.x+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
q=$.m
t.i(0,new R.a4("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.x+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.A(),!1,!1,new Y.kQ("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.x+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.m
q=q+r+" organizes a huge festival for all the "
p=$.r
t.i(0,new R.bF("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.p0.prototype={
P:function(a,b){var t=0,s=P.bp(),r
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$aseG:function(){return[P.B]},
$asca:function(){return[P.B,P.B]}}
Y.nW.prototype={
aR:function(a){return"application/octet-stream"},
P:function(a,b){var t=0,s=P.bp(),r
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$asds:function(){return[P.bh]},
$asca:function(){return[P.bh,P.bh]}}
V.ro.prototype={
$1:function(a){var t,s,r,q
t=document
s=H.eU(t.querySelector("#myHeadCanon"),"$ishU")
r=H.eU(t.querySelector("#canon"),"$ish3")
q=t.createElement("div")
q.textContent=s.value
r.appendChild(q)},
$S:function(){return{func:1,args:[,]}}}
V.rp.prototype={
$1:function(a){var t,s
t=document
s=t.querySelector("#canon")
t=t.createElement("div")
t.textContent="AB: "+this.a.hF("JRheadcanon")
s.appendChild(t)
t=s.style
t.color="#ff0000"
t=s.style
t.backgroundColor="#888888"},
$S:function(){return{func:1,args:[W.U]}}}
T.kH.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Mystical Vial of Blood",H.a([$.aP,$.bi,$.R,$.aI],s),null,!1,"Vial of Not-ABs Oil")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.an,$.bi,$.R,$.aU],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.O,$.bi,$.R,$.aI,$.et],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.aW,$.R,$.aI,$.et,$.aF],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.X,$.ms,$.bi,$.aI,$.R,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dh,$.j)
q.i(0,$.th,$.j)
q.i(0,$.c3,$.n)
p=$.m
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.r
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ab+" and some boondollars in compensation."
n=this.x1
k=[U.b]
q.i(0,new R.Z("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.eb(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.r
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.L+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.x
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.m
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.bs+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.M("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.Q(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.m
m="The "+n+" is playing against a "
l=$.r
m=m+l+" in a friendly game of "+$.ab+" Battle. With some smooth moves, they pull out a victory. The "+l+" comes over for a handshake. The "+n+" notices some ink dripping out of the "+l+"\u2019s arm. The "+l+" becomes confused. 'Ink? No this is blood from when I scraped my limb.' What the hell is blood?"
l="The "+n+" tries asking around what blood is, but every "+l+" asked just looks at them strangely and walks away. Finally, they run into a "
i=$.x
q.i(0,new R.Z("The True Meaning of Blood",!1,[new U.b(m),new U.b(l+i+" minion who mocks their lack of knowledge. 'If you don\u2019t even know what blood is maybe you should read a book sometime.'"),new U.b("The "+n+" takes the rude (and also dead) "+i+" minion\u2019s advice and gets their answer at a library. According to a biology textbook, people here have a liquid called blood running through tubes across their entire body. What a completely weird and alien concept.")],H.a([],k),R.Fo(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.aj)
i=this.f
i.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cM,$.j)
s.i(0,$.cp,$.H)
s.i(0,$.aN,$.H)
s.i(0,$.iC,$.j)
s.i(0,$.cq,$.H)
p=$.m
o="The "+p+"  and the "
n=$.dy
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
j=$.x
l=l+j+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+j+"."
h="Slaying the "+j+" proves the POWER OF TEAMWORK!"
s.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.Q(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+j+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.dS(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
h=$.m
j="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
j=j+n+"s explains that before  "
p=$.x
j=j+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
n="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.bs+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.wC
s.i(0,new R.M("Chain the Towers",!1,[new U.b(j),new U.b(n),new U.b(l),new U.Q(m,h,o)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
o="The "+p+" learns of the "
h=$.aw
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.r
o=o+m+" explains that the "
l=$.x
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
j="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.bs+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.M("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.Q(j,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
j=$.r
h=h+j+" on "+$.aw+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
j="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+j+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+j+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.e7+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a4("One Degree of Separation",!1,[new U.b(h),new U.b(n),new U.b(j)],H.a([],k),R.dR(),!1,!1,new Y.bV("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.aw
j=j+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.e7+" is now more popular with your friends than you are."
s.i(0,new R.a4("Steal The Friends",!1,[new U.b(j),new U.b(h),new U.b(n)],H.a([],k),R.nT(),!1,!1,new Y.bV("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
n="The "+p+"  and the "
h=$.dy
n=n+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
j="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.x
j=j+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.b(n),new U.Q(j,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.n)+".",o)],H.a([],k),R.dS(),!1,!1,new Y.hL(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aj)
i.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.bd,$.H)
t.i(0,$.c9,$.n)
r="In the wake of the defeat of the "+$.x+" it becomes really how isolated the individual "
q=$.r
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.m
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.e7+" to kick your ass, but luckily they have several."
t.i(0,new R.a4("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.eb(),!1,!1,new Y.bV("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.m
q="The "+o+" learns that two prominent "
p=$.r
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
n="In a dramatic reveal, the "+o+" discovers that "
m=$.x
n=n+m+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
l="The "+o+" confronts "+m+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+m+" lies slain by the "+o+"'s "+$.bs+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.L+"ing. "
t.i(0,new R.M("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(n),new U.Q(l,"The deception of "+m+" continues with the defeat of the "+o+".",p)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i.i(0,new X.F(s,t,null),$.aq)}}
T.kK.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Pan's Pipe",H.a([$.a9,$.X,$.bi,$.R],s),null,!1,"Smonkin Weeds Pipe")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.aZ,$.R],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a7,$.D,$.bi,$.R],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.ap,$.D,$.aV,$.R,$.a_],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.c9,$.n)
q.i(0,$.fb,$.j)
q.i(0,$.aN,$.n)
p=$.m
o="The "+p+" tries posting a letter through the "
n=$.ab
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.x
o=o+m+" has screwed with the mail system, crippling the "
l=$.r
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.bs+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.F7
i=[U.b]
q.i(0,new R.M("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.Q(j,p,l)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.f
m.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.bd,$.j)
s.i(0,$.fb,$.n)
s.i(0,$.aN,$.n)
s.i(0,$.c5,$.n)
s.i(0,$.c9,$.n)
p=$.m
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ab
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.r
k=l+k+" fields. The "+k+"s "+$.L+"ing is so joyful it's literally deafening. "
l=$.x
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.bs+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.M("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.Q(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=$.m
p="\u201cThe "+h+" returns home from exploring their land, but a "
l=$.r
s.i(0,new R.Z("Slay the Windmills",!1,[new U.b(p+l+" is waiting at the door. Shaking heavily, she tells the "+h+" that her village is being terrorized by terrible monsters. The "+h+" agrees to help, and is lead to a plain just outside the village. The "+l+" points in one direction to indicate the monsters, but all the "+h+" can see are a bunch of windmills. Wait\u2026are the windmills the monsters?! The "+l+" nods her head. The "+h+" knows consorts can be pretty dumb, but this really takes the cake.\u201d "),new U.b("The "+h+" whacks the bases of a few windmills with their "+$.bs+" until they collapse. The "+l+"s from the village cheer and declare the "+h+" as a true hero and slayer of beasts. The "+h+" is happy to get praised, but is still a little frustrated by all of this nonsense. "),new U.b("Most of the windmills have been knocked over. The "+h+" starts to hit one of the last windmills, when suddenly it rears back and opens a toothy mouth in a roar. Holy Shit! It turns out windmill monsters aren\u2019t a delusion after all! The "+h+" slays the windmill monster in a tough strife and enjoys the "+l+" village\u2019s victory party.  ")],H.a([],i),R.d8(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.n)
m.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cf,$.j)
t.i(0,$.lO,$.j)
t.i(0,$.fb,$.H)
t.i(0,$.c9,$.H)
r=$.m
q="The "+r+" is chilling in a "+$.r+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.x
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ab
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aw+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.bs+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.M("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.Q(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aq)}}
M.fW.prototype={
ev:function(a){var t=this.a
if(!t.U(0,a))return
return t.n(0,a)}}
Y.kM.prototype={
P:function(a,b){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:q=J.e2(b,"\n")
p=P.B
o=P.bZ(p,p)
n=P.bZ(p,[P.eC,P.B])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.dd(k).bi(k).length===0)m=null
else if(m==null)m=C.c.bi(k)
else{j=C.c.bi(k)
i=C.c.K(m,0,C.c.e9(m,$.$get$vl())+1)+j
o.i(0,i,m)
if(!n.U(0,m))n.i(0,m,P.a3(null,null,null,p))
J.y0(n.n(0,m),i)}}r=new M.fW(o,n)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$aseG:function(){return[M.fW]},
$asca:function(){return[M.fW,P.B]}}
A.kS.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.K,$.ag,$.aU,$.cb],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.K,$.aU],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.aP,$.aU],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aV,$.a7,$.aU],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.an,$.aU],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.O,$.aU],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.D,$.aU],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cq,$.n)
q.i(0,$.cA,$.j)
q.i(0,$.c5,$.n)
p=$.m
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.r
o=o+n+"s are too scared to even "+$.L+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.x+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.Z("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.e5,$.H)
s.i(0,$.c5,$.j)
s.i(0,$.cA,$.j)
s.i(0,$.cE,$.j)
o=$.m
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aw
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.r
k=k+j+"s let out a braying "+$.L+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.Fa
s.i(0,new R.Z("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.A(),!1,!1,new Y.d0("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cN,$.H)
t.i(0,$.c4,$.n)
t.i(0,$.cA,$.j)
t.i(0,$.c5,$.n)
t.i(0,$.he,$.n)
r=$.m
q="The "+r+"  is approached by a Crafty "
o=$.r
q=q+o+" who offers them a magical "
n=$.ab
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.L
t.i(0,new R.Z("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
S.bC.prototype={
A:function(a){return H.y(new H.dY(H.kl(this),null))+": "+this.c},
gG:function(a){return this.c}}
S.ie.prototype={}
S.ma.prototype={}
M.l5.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Can of Spray Paint",H.a([$.ax,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.K,$.ah,$.aU,$.aC],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.tM,$.D,$.at],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.K,$.ah,$.aC],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.ax,$.al,$.K],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.ah,$.K],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.ah,$.aE,$.al],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.ax,$.ah],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.ap,$.ah,$.D],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.O,$.ah],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.K,$.ah,$.aC],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.n)
q.i(0,$.cB,$.j)
q.i(0,$.aN,$.n)
p=$.m
o="The "+p+" visits a beautiful "
n=$.ab
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.r
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.x+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.L+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.Z("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.e5,$.H)
s.i(0,$.c5,$.n)
s.i(0,$.cA,$.H)
s.i(0,$.bd,$.n)
s.i(0,$.cE,$.j)
o=$.m
n="The "+o+" finds a troupe of dejected looking "
l=$.r
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aw
l=l+n+" "
k=$.ab
s.i(0,new R.Z("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.L+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.hj,$.H)
t.i(0,$.cq,$.H)
t.i(0,$.f5,$.H)
t.i(0,$.c4,$.H)
t.i(0,$.bd,$.n)
t.i(0,$.aN,$.n)
r=$.m
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.L
q=q+o+"ingworth, "
n=$.r
q=q+n+" heiress to the "+$.ab+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.F0
t.i(0,new R.Z("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.A(),!1,!1,new Y.d0("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aB)}}
T.lb.prototype={}
V.ld.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Trendy Fabric",H.a([$.ax,$.O],s),null,!1,"Weird Tasting Candy Paper")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.ax,$.tB,$.et],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.D,$.tF,$.aL],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jn
r=A.i("Broom",H.a([r,$.X,$.ag,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.X,$.tO,$.ag],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.O,$.b_,$.bi,$.ax,$.hq],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.ax,$.O],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aF,$.cb,$.D,$.bm],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.ax,$.K],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bm],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.D,$.ap,$.ag,$.cb,$.tA],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bP],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bP,$.jq],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.ax,$.bS,$.aR],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.an,$.bj,$.aZ],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.an,$.bj],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.ax,$.an,$.aI],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cE,$.n)
q.i(0,$.cp,$.n)
q.i(0,$.cq,$.H)
p=$.m
o="The "+p+" is visited by a Beautiful "
n=$.r
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ab
l=[U.b]
q.i(0,new R.Z("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.L+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.A(),!1,!1,new Y.ih("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.r
n.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cq,$.j)
s.i(0,$.c5,$.n)
s.i(0,$.f5,$.j)
s.i(0,$.dv,$.n)
s.i(0,$.bd,$.j)
p=$.m
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ab
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.r
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.L+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.F8
s.i(0,new R.Z("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.d0("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.hf,$.j)
t.i(0,$.bd,$.n)
t.i(0,$.f6,$.j)
t.i(0,$.aN,$.n)
t.i(0,$.iC,$.j)
r=$.m
q="The "+r+" finds a loom, and a Wizened "
p=$.r
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ab
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.L+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.Z("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aB)}}
U.le.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aC,$.a7,$.K,$.aD,$.R,$.a_],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aE,$.bi,$.R,$.aD],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.aZ,$.bi,$.R,$.aD],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.aP,$.R,$.bP],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.aP,$.R,$.bm,$.aD,$.aW,$.bY,$.aX],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aF,$.aX,$.aD,$.K,$.R],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dO,$.j)
q.i(0,$.cV,$.n)
q.i(0,$.fb,$.H)
q.i(0,$.bd,$.H)
q.i(0,$.c3,$.n)
p=$.m
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.r
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ab
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.x
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.bs+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.M("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.Q(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dO,$.j)
s.i(0,$.cV,$.n)
s.i(0,$.es,$.aj)
s.i(0,$.en,$.n)
s.i(0,$.te,$.n)
s.i(0,$.dh,$.n)
s.i(0,$.cV,$.n)
s.i(0,$.bd,$.H)
s.i(0,$.c3,$.n)
s.i(0,$.di,$.n)
p=$.m
o="The "+p+" has found a group of Violent "
m=$.r
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aw
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.L+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.x
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.bs+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.M("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.Q(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.d8(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ab
p=p+l+"s alike. "
l=$.r+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.x
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.bs+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.M("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.Q(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.c3,$.j)
t.i(0,$.vG,$.aj)
t.i(0,$.f8,$.H)
r=$.m
q="The "+r+" finds a small dungeon bearing the image of "
p=$.x
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.r+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.M("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.Q(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.d8(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
k=$.m
p="The "+k+" learns from one of their "
r=$.r
p=p+r+"s that there is an ancient prophecy of a "
l=$.aw
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ab
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.x
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.bs+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.F_
t.i(0,new R.M("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.Q(o,k,q)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aq)}}
Z.lf.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Dream Diary",H.a([$.K,$.aC,$.R],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aE,$.bi,$.ag,$.R,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aE,$.bi,$.R],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.hf,$.n)
q.i(0,$.f6,$.j)
q.i(0,$.aN,$.n)
q.i(0,$.iC,$.n)
p=$.r
o="A "+p+" child tugs on the "
n=$.m
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ab
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.x
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.L+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.F5
k=[U.b]
q.i(0,new R.M("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.Q(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.z)
l=this.f
l.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cf,$.n)
s.i(0,$.f6,$.j)
s.i(0,$.dx,$.n)
s.i(0,$.cU,$.n)
s.i(0,$.lK,$.n)
s.i(0,$.cA,$.j)
p=$.m
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.r
n=n+m+"s are even starting to snigger and "
j=$.L
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.x
s.i(0,new R.M("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.Q("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dN,$.j)
t.i(0,$.ix,$.n)
t.i(0,$.aN,$.n)
t.i(0,$.cU,$.j)
t.i(0,$.lK,$.j)
t.i(0,$.f6,$.n)
r=$.m
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.x
t.i(0,new R.M("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aw+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.r+" is "+$.L+"ing in reverse. Another is in a "+$.ab+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.Q("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l.i(0,new X.F(s,t,null),$.aq)}}
X.iu.prototype={}
X.id.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.hd]]}}}
M.hd.prototype={}
U.lH.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Fluthulu Poster",H.a([$.O,$.b_,$.aX,$.bn],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.O,$.b_,$.aX],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aF,$.aE,$.aZ,$.fi,$.aO],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aE,$.w7,$.eu,$.aO],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aE,$.bY,$.bj,$.aX],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aC,$.K,$.aA,$.aX],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.K,$.a1,$.ag],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.K,$.a1,$.ag],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.K,$.a1,$.bY,$.aX,$.bn],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aF,$.av,$.a1,$.ag,$.aO],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aF,$.tw,$.a1,$.ag,$.aO],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f7,$.aj)
q.i(0,$.cp,$.n)
q.i(0,$.c9,$.n)
q.i(0,$.cN,$.H)
p=$.m
o="The "+p+" learns of a Beautiful "
n=$.r
o=o+n+" who has been kidnapped by the vial "
m=$.x
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ab
j=[U.b]
q.i(0,new R.Z("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c4,$.j)
s.i(0,$.dh,$.j)
s.i(0,$.iy,$.n)
s.i(0,$.c3,$.j)
s.i(0,$.es,$.j)
s.i(0,$.hi,$.n)
o=$.m
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.r
s.i(0,new R.Z("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c4,$.j)
t.i(0,$.hh,$.n)
t.i(0,$.c3,$.j)
t.i(0,$.dM,$.n)
t.i(0,$.em,$.n)
t.i(0,$.th,$.n)
r=$.m
q="The "+r+" finds a group of three "
o=$.r
q=q+o+"s "
n=$.L
t.i(0,new R.Z("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
N.ac.prototype={
A:function(a){return H.y(new H.dY(H.kl(this),null))+": "+H.y(this.b)}}
O.ca.prototype={
b2:function(a){var t=0,s=P.bp(),r,q=this,p
var $async$b2=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cy(q.aT(a),$async$b2)
case 3:r=p.P(0,c)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$b2,s)}}
O.ds.prototype={
ba:function(a){var t=0,s=P.bp(),r
var $async$ba=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$ba,s)},
cJ:function(a){var t=0,s=P.bp(),r,q=this
var $async$cJ=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.yL([J.v6(a)],q.aR(0),null))
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$cJ,s)},
aT:function(a){var t=0,s=P.bp(),r,q=this,p,o
var $async$aT=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:p=P.bh
o=new P.bl(0,$.am,null,[p])
W.vN(a,null,q.aR(0),null,null,"arraybuffer",null,null).b3(new O.kG(new P.e_(o,[p])))
r=o
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$aT,s)},
$asca:function(a){return[a,P.bh]}}
O.kG.prototype={
$1:function(a){this.a.aC(0,H.eU(J.yc(a),"$isbh"))},
$S:function(){return{func:1,args:[W.e8]}}}
O.eG.prototype={
ba:function(a){var t=0,s=P.bp(),r,q,p,o,n
var $async$ba=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:a.toString
q=H.cR(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hM(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$ba,s)},
aT:function(a){var t=0,s=P.bp(),r
var $async$aT=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:r=W.vM(a,null,null)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$aT,s)},
$asca:function(a){return[a,P.B]}}
O.is.prototype={
aT:function(a){var t=0,s=P.bp(),r
var $async$aT=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$aT,s)},
ba:function(a){return H.b0("Element format doesn't read from buffers")},
$asca:function(a){return[a,P.B]}}
V.lZ.prototype={
aR:function(a){return"font/opentype"},
P:function(a,b){var t=0,s=P.bp(),r
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:t=3
return P.cy(A.hy("scripts/Rendering/text/opentype.min.js",!1),$async$P)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$asds:function(){return[R.hk]},
$asca:function(){return[R.hk,P.bh]}}
Z.it.prototype={}
E.iG.prototype={}
E.ns.prototype={}
E.N.prototype={
A:function(a){var t="["+J.cK(this.a)+" x "+H.y(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fQ.prototype={
A:function(a){var t="[(Random from "+P.tT(this.d,"(",")")+") x "+H.y(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kv.prototype={
A:function(a){return"[Stats assigned from player Interests x"+H.y(this.b)+"]"}}
Y.m4.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aC,$.S,$.K,$.a_,$.mw],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aE,$.S,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.O,$.S,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.tK,$.S,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.lQ,$.n)
t.i(0,$.c9,$.j)
t.i(0,$.di,$.H)
t.i(0,$.dw,$.j)
r=$.r
q="An excited "+r+" runs up to the "
p=$.m
q=q+p+" and starts to "
o=$.L
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aw
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ab
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.x
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.M("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.Q(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
o=$.m
t.i(0,new R.a4("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.x+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.r+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.A(),!1,!1,new Y.dU("Rewards/no_reward.png",null),1,null,null),$.z)
o=$.r
j="Now that the "+o+"s are free from the reign of "+$.x+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.m
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.L
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aw+" Quest Online: The "+$.ab+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.fy
t.i(0,new R.a4("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p="The "+$.x+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.m
p=p+o+" shows the "
r=$.r
t.i(0,new R.bF("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.L+"s in time to stop them.    ")],H.a([],i),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.m5.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Sherpa Parka",H.a([$.bm,$.S,$.ch],s),"Clearly the best class uses this.",!1,null)
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a_,$.bm,$.aC,$.K,$.S,$.Y],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.D,$.S,$.aV],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.D,$.S,$.a7,$.Y],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.lQ,$.j)
t.i(0,$.c9,$.j)
t.i(0,$.di,$.n)
t.i(0,$.dw,$.j)
r="Now that the "+$.x+" is out of the way, a group of "
q=$.r
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.m
o=[U.b]
t.i(0,new R.a4("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.L+", but they are happy.")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.x+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.m
t.i(0,new R.bF("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.r+" "+$.L+"s in time to stop them.    ")],H.a([],o),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.m6.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Doll",H.a([$.tK,$.ax,$.au,$.R],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Soul Puppet",H.a([$.X,$.au,$.R,$.a_,$.aX],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.tE,$.R],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.K,$.R,$.aA],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.al,$.aP,$.R],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.en,$.H)
q.i(0,$.ep,$.j)
q.i(0,$.c5,$.n)
p=$.m
o="The "+p+", guided by a "+$.r+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.x
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.bs+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.M("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.Q(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j=$.m
p="The "+j+" finds a Violent "
l=$.r
p=p+l+". A Magical Talking "
k=$.ab
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.x
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.M("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.Q(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.nT(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h=this.f
h.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cA,$.j)
s.i(0,$.iy,$.j)
s.i(0,$.fb,$.n)
s.i(0,$.c3,$.j)
s.i(0,$.cq,$.n)
s.i(0,$.di,$.H)
p=$.m
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ab
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.x
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.bs+". The "+p+" is victorious. "
s.i(0,new R.M("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.Q(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j="Now that the "+$.x+" has been defeated, a Copy "
p=$.m
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.r
j=j+k+"s "
l=$.L
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.e7+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a4("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.eb(),!1,!1,new Y.bV("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.x
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.M("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.Q(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.d8(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.iw,$.j)
t.i(0,$.cq,$.j)
t.i(0,$.lP,$.j)
t.i(0,$.f5,$.n)
t.i(0,$.hi,$.j)
t.i(0,$.cp,$.n)
t.i(0,$.ep,$.H)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.r
t.i(0,new R.M("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aw+" laws put in place by "+$.x+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.m
p="The "+r+" finds a weeping Broken Hearted "
q=$.r
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aw
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.L
t.i(0,new R.a4("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.fs(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
q=$.m
m="The "+q+"  and the "
r=$.dy
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.x
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.M("Flushed Shipping Dungeon",!1,[new U.b(m),new U.Q(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.n)+".",n)],H.a([],i),R.dS(),!1,!1,new Y.iE(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aj)
n=$.m
r="The "+n+"  and the "
q=$.dy
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.x
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.M("Pitched Shipping Dungeon",!1,[new U.b(r),new U.Q(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.n)+".",m)],H.a([],i),R.dS(),!1,!1,new Y.jI(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aj)
h.i(0,new X.F(s,t,null),$.aB)}}
B.m7.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Family Ashes",H.a([$.aF,$.ap,$.S,$.aD,$.bW],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a_,$.K,$.S,$.aD,$.mt],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aC,$.S,$.ah],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.vX,$.S,$.ts,$.mt],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.tt,$.S,$.at,$.mt],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cf,$.n)
r=$.x
q="With the death of the "+r+", it now falls to the "
p=$.m
o=[U.b]
t.i(0,new R.a4("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.r+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
r="The "+$.x+" has released the frogs into the "
p=$.m
t.i(0,new R.bF("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bL)}}
X.m9.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Wand",H.a([$.X,$.R,$.a1,$.bk],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.bk,$.br,$.R,$.aQ,$.a9,$.a_,$.a1],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bT,$.ms,$.R,$.a1,$.aU,$.bk],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.bk,$.aQ,$.R,$.ap],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aE,$.aQ,$.R,$.bk],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.td,$.j)
q.i(0,$.cp,$.n)
q.i(0,$.aN,$.j)
q.i(0,$.cU,$.j)
p=$.m
o="The "+p+" is just minding their own business when they see a wizened "
n=$.r
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.L+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.x
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ab
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.F2
i=[U.b]
q.i(0,new R.M("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.Q(k,p,j)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.m
j="The "+n+" has slain "+$.x+", but there\u2019s still one thing left to do. The land is infested with terrifying creatures called angels and it\u2019s been creeping the "+n+" out the whole time. Clearly their ultimate quest for this land must be to eliminate all the angels and free the land from their terror."
p="Angel killing is a lot harder than the "+n+" expected, and they were already expecting it to be pretty tough. The angels have huge amounts of health, and they\u2019re now completely pissed off over the whole exterminating them thing going on. The land is 100 times more terrifying now with swarming angels, but things are always darkest before the dawn! The "+n+" continues on their righteous quest."
k="All of the horrible angels have finally been slain. The land has been saved from their menace. The "+n+" excitedly waits for their quest reward, but nothing happens. They go to some of the "
l=$.r
q.i(0,new R.a4("Kill the Angels",!1,[new U.b(j),new U.b(p),new U.b(k+l+" villages to ask for a reward, but they are refused. Frankly, the "+l+"s would have preferred the angels remained instead of hiding in their homes while the "+n+" was waging their one person war. Maybe genocide wasn\u2019t the right answer after all?")],H.a([],i),R.d8(),!1,!1,new Y.dU("Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c4,$.j)
s.i(0,$.he,$.n)
s.i(0,$.dx,$.j)
p=$.m
o="The "+p+"  is approached by a Crafty "
m=$.r
o=o+m+" who offers them a magical "
l=$.ab
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.x
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.M("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.Q(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.dv,$.H)
t.i(0,$.cB,$.j)
t.i(0,$.cU,$.j)
r=$.m
q="The "+r+" finds a grey town of despondant "
p=$.r
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.x
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ab
t.i(0,new R.M("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.Q("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.m
o="The "+r+" discovers a group of "
p=$.r
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.x
t.i(0,new R.M("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.Q("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.fs(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.F(s,t,null),$.aq)}}
Q.mg.prototype={
b2:function(a){var t=0,s=P.bp(),r,q,p
var $async$b2=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:q=W.vO(null,a,null)
p=new W.eQ(q,"load",!1,[W.U])
t=3
return P.cy(p.ga9(p),$async$b2)
case 3:r=q
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$b2,s)},
$asds:function(){return[W.ff]},
$asca:function(){return[W.ff,P.bh]}}
Q.nI.prototype={
aR:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bp(),r,q=this,p,o,n
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cy(q.cJ(b),$async$P)
case 3:p=n.vO(null,d,null)
o=new W.eQ(p,"load",!1,[W.U])
t=4
return P.cy(o.ga9(o),$async$P)
case 4:r=p
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)}}
Q.nF.prototype={
aR:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bp()
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:throw H.k("Read NYI")
return P.bv(null,s)}})
return P.bw($async$P,s)},
$asds:function(){return[Q.jH]},
$asca:function(){return[Q.jH,P.bh]}}
V.mj.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Inkwell",H.a([$.aP,$.bi,$.R,$.br],s),null,!1,"Vial of Not-ABs Oil")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Splatfest T-shirt",H.a([$.O,$.b_,$.R,$.tz],s),null,!1,"Mechandising Party")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.O,$.bi,$.R,$.aI,$.et],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.aW,$.R,$.aI,$.et,$.aF],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.X,$.ms,$.bi,$.aI,$.R,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cM,$.j)
q.i(0,$.cp,$.H)
q.i(0,$.aN,$.H)
q.i(0,$.iC,$.j)
q.i(0,$.cq,$.H)
q.i(0,$.vC,$.j)
p=$.m
o="The "+p+"  and the "
n=$.dy
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
k=$.x
l=l+k+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+k+"."
j="Slaying the "+k+" proves the POWER OF TEAMWORK!"
i=[U.b]
q.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.Q(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+k+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",j)],H.a([],i),R.dS(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
j=$.m
k="The "+j+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
k=k+n+"s explains that before  "
p=$.x
k=k+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+j+" vows to help. "
n="The "+j+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+j+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+j+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+j+"'s "+$.bs+". The "+j+" is finally free to restore the chains, bringing peace and understanding to the land. "
j="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+j+"."
p=$.wC
q.i(0,new R.M("Chain the Towers",!1,[new U.b(k),new U.b(n),new U.b(l),new U.Q(m,j,o)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
o="The "+p+" learns of the "
j=$.aw
o=o+j+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.r
o=o+m+" explains that the "
l=$.x
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+j+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+j+" Tower . "
k="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.bs+". The "+p+" is finally able to see what lies at the top of the "+j+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
q.i(0,new R.M("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.Q(k,"The "+j+" Tower is more at risk than ever before.",p)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
k=$.r
j=j+k+" on "+$.aw+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
k="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+k+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+k+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.e7+" has so many friends, they have to assume everyone in this fight is already in their friend list."
q.i(0,new R.a4("One Degree of Separation",!1,[new U.b(j),new U.b(n),new U.b(k)],H.a([],i),R.dR(),!1,!1,new Y.bV("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.aw
k=k+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
j="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.e7+" is now more popular with your friends than you are."
q.i(0,new R.a4("Steal The Friends",!1,[new U.b(k),new U.b(j),new U.b(n)],H.a([],i),R.nT(),!1,!1,new Y.bV("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
n="The "+p+"  and the "
j=$.dy
n=n+j+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
k="The "+p+"  and the "+j+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.x
k=k+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+j+" together."
q.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.b(n),new U.Q(k,"The "+p+" and "+j+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.n)+".",o)],H.a([],i),R.dS(),!1,!1,new Y.hL(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o=this.f
o.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Ink","Paper","Color","Quills"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.bd,$.H)
s.i(0,$.he,$.H)
s.i(0,$.cB,$.H)
s.i(0,$.c5,$.j)
s.i(0,$.f8,$.H)
p=$.m
n="The "+p+" comes across an enormous wall. Strange symbols are spread across its face. An indent in the wall indicates a door will appear if the puzzle of the wall is solved."
m="The "+p+" is getting annoyed trying to solve the wall. They start inking graffiti on the wall out of spite. Suddenly, they realize that some of the symbols light up when the ink touches it."
l="The "+p+" spends a good hour painting the wall. A number of symbols light up but nothing else happens. The "+p+" realizes unhappily that they probably need to paint only the symbols. Shit."
k="The wall is finally clean except for the appropriate symbols and the door is open. The "+p+" is eager to fight "
j=$.x
k=k+j+" and give some payback for the terrible wall puzzle. "
h=j+" is defeated and the "+p+"\u2019s payback is complete. "
s.i(0,new R.M("Paint the Wall",!1,[new U.b(n),new U.b(m),new U.b(l),new U.Q(k,"With the "+p+"\u2019s defeat, "+j+" closes the door repaints the outside wall, just to be a jerk.",h)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.H)
h=$.m
j="The "+h+" is visiting a "
p=$.r
j=j+p+" town, but before they could reach it, a crowd of angry "+p+"s starts charging towards them. \u201cThere\u2019s the one who messed up our town!\u201d The "+h+" decides to make a hasty retreat."
k="Coming back to the "+p+" town secretly, the "+h+" finds the mess the town is in. Ink is covering the town and most of its residents are hard at work cleaning the ink. Wanted posters with their face are plastered all over town. The "+h+" discreetly helps clean the town and vows to clear their name."
l="The "+h+" heads back to the town, but they hear loud screaming. They rush towards the center of town and find their culprit, themself. Or rather something in the shape of the "+h+" with an otherworldly transparent color. The "+h+" soundly defeats the doppelganger in a quick strife. "+p+"s witness the smackdown and cheer. The "+h+"\u2019s name has been cleared!"
m="The "+h+" realizes that the doppelganger was created by "
n=$.x
m=m+n+" and more could be created if unstopped. The"+h+" tracks "+n+"\u2019s lair down by following the path of vandalism created by their doppelganger. It\u2019s time to take "+n+" down for framing the "+h+"."
p=n+" is defeated and doppelganger production has been stopped. The "+p+"s apologize for mistaking the "+h+" for the real vandal."
s.i(0,new R.M("Framed for Vandalisim",!1,[new U.b(j),new U.b(k),new U.b(l),new U.Q(m,n+" begins making more doppelgangers to tarnish the "+h+"\u2019s good name.",p)],H.a([],i),R.d8(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.m
h="The "+p+" is playing against a "
n=$.r
h=h+n+" in a friendly game of "+$.ab+" Battle. With some smooth moves, they pull out a victory. The "+n+" comes over for a handshake. The "+p+" reaches out what would be their hand, if it wasn\u2019t currently a melting stump. The "+p+" screams in horror, but their hand instantly reforms. What the hell was that about?"
m=$.x
l="The entrance to "+m+"\u2019s lair is blocked by huge metal bars, with no apparent mechanisms to open it. The "+p+" walks around the lair looking for another way in, but suddenly everything starts growing! No wait, it\u2019s actually just the "+p+" slowly dissolving into a puddle. Again?! The dissolving process is once again reversed after a bunch of screaming."
n="The "+p+" makes their way to a secluded hut. A wizened "+n+" hermit sits in a meditative pose. The "+p+" says they were told that he could explain what was happening to the "+p+". The "+n+" nods and tells the "+p+" that their aspect was meant for a race of squid-like creatures with the power to turn into ink. Having the aspect means they are partially a squid now and are saddled with the same ability. The "+p+" will have to learn to control their new power if they wish to succeed in the session."
m="After some time practicing the "+p+" has gotten the hang of their strange ability and returns to "+m+"\u2019s lair. They proceed to melt into a squid-like form make of ink and effortlessly slide through the bars. Jeez that feels weird. "+m+" has been very impatient waiting for the "+p+" and immediately starts the strife!"
k="The "+p+" raises a hand in victory, and then has to shake said hand to stop it from turning to ink again. It sure is annoying being a squid now."
s.i(0,new R.M("An Inky Situation",!1,[new U.b(h),new U.b(l),new U.b(n),new U.Q(m,"With a great blow, the "+p+" is slammed into a wall hard and turns into a puddle with eyes, before reforming. This would be funny if the "+p+" hasn\u2019t possibly died from the impact.",k)],H.a([],i),R.Fp(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
o.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Nostalgia","Video Games","Ninety","Cartoons"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.em,$.j)
t.i(0,$.cp,$.H)
t.i(0,$.aN,$.H)
t.i(0,$.c5,$.j)
t.i(0,$.er,$.H)
r=$.m
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
p=$.r
q=q+p+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+p+" kept rhyming "
n=$.L
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+p+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+p+" approaches the "+r+". And aura of "+$.aw+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+p+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
p=this.x1
t.i(0,new R.Z("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],i),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
r="The "+p+" has finally tracked down the location of "
q=$.x
t.i(0,new R.M("Beat the Games",!1,[new U.b(r+q+"\u2019s lair. Surprisingly it\u2019s inside a gaudy arcade rather than a dungeon. The door to "+q+"\u2019s lair is locked, with the key inside a prize vendor. The "+p+" will need to win enough tickets to earn that key."),new U.b("The "+p+" is struggling to win any of the arcade games; they all seem impossibly hard. A "+q+" minion mocks them. They tell the "+p+" true gamers can easily beat any of these games."),new U.b("The "+p+" discovers the ultimate secret. Most of these games have cheat codes. Super difficult games are a lot easier when you can give yourself 30 lives."),new U.Q("With enough tickets earned, the "+p+" takes the key and enters "+q+"\u2019s lair. "+q+" has been impatiently waiting. It\u2019s time to strife! ","A giant game over sign drops down from the ceiling.","The "+p+" beats "+q+", just like all the hard games they had to play. Who\u2019s a true gamer now?")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
o.i(0,new X.F(s,t,null),$.bL)}}
B.hp.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a5)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.T(t,0)]))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.j)
q.i(0,$.bd,$.H)
q.i(0,$.dO,$.j)
q.i(0,$.c3,$.n)
q.i(0,$.e4,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.Z("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.A(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
n=this.r
n.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.er,$.j)
s.i(0,$.eo,$.H)
s.i(0,$.eq,$.n)
s.i(0,$.cM,$.j)
s.i(0,$.cf,$.H)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.Z("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.A(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.bd,$.H)
t.i(0,$.c9,$.n)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
t.i(0,new R.Z("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.A(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
r="The "+p+" learns that all of the local "
q=$.r
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.L
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ut(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
n.i(0,new X.F(s,t,null),$.aB)},
A:function(a){return this.ch},
gG:function(a){return this.ch}}
A.a5.prototype={
gh4:function(){var t,s,r,q,p,o
t=H.a([],[P.B])
s=new A.hN(null,null)
s.c9(this.r.a)
if(this.x===0)return t
r=P.cW(G.yS(this.r),!0,G.a0)
C.b.d6(r,new A.mA())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bH)(r),++p){o=r[p]
if(!(o instanceof G.ae||o.gdZ().length===0))t.push(" "+Y.H5(s.eh(o.gdZ())))}return t},
gbB:function(){var t,s,r
for(t=this.r,s=new P.dA(t,t.r,null,null,[null]),s.c=t.e,r=0;s.F();)r+=s.d.gbB()
return r},
gfV:function(){var t=this.r
return new H.hZ(t,new A.mz(),[H.T(t,0)])},
ghe:function(){var t,s,r,q,p
for(t=this.gh4(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bH)(t),++q)r+=t[q]+" "
return r+this.e},
A:function(a){return this.ghe()},
aB:function(a,b){var t=b.gbB()-this.gbB()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bC(t)},
H:function(a,b,c,d,e){var t,s,r
t=P.u4(b,null)
this.r=t
if(t.a===0)t.h(0,$.w2)
s=P.u4(this.gfV(),null)
for(t=new P.dA(s,s.r,null,null,[null]),t.c=s.e;t.F();){r=t.d
this.r.bn(0,r.geJ())
this.r.ae(0,r)}$.$get$ws().push(this)},
$isbI:1,
$asbI:function(){return[A.a5]}}
A.mA.prototype={
$2:function(a,b){return a.gee()-C.a.bC(b.gee())},
$S:function(){return{func:1,args:[G.a0,G.a0]}}}
A.mz.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a0]}}}
N.mH.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Gavel",H.a([$.X,$.mr],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aE,$.aW],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.O,$.ax],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.K,$.aC],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bS,$.an,$.bm],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.K,$.aC,$.al],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aF,$.D,$.aW],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f7,$.H)
q.i(0,$.c4,$.n)
q.i(0,$.cB,$.H)
p=$.m
o="The "+p+" finds an elaborate courtroom full of "+$.L+"ing "
n=$.r
m=[U.b]
q.i(0,new R.Z("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ab+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
n=this.r
n.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c4,$.j)
s.i(0,$.di,$.n)
s.i(0,$.cM,$.n)
p=$.m
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.r
l=o+l+" yells 'Stop that thief' in betwen "+$.L+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ab+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.EZ
s.i(0,new R.Z("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.A(),!1,!1,new Y.d0("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c4,$.j)
t.i(0,$.cf,$.n)
t.i(0,$.dh,$.H)
t.i(0,$.es,$.n)
t.i(0,$.en,$.n)
t.i(0,$.f9,$.n)
t.i(0,$.iz,$.n)
r=$.m
q="The "+r+" finds a crowd of "
p=$.L
q=q+p+"ing "
o=$.r
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.Fb
t.i(0,new R.Z("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.A(),!1,!1,new Y.d0("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aB)}}
S.mJ.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Shining Armor",H.a([$.aF,$.mv,$.S,$.fi],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a_,$.mv,$.S,$.aL,$.at,$.eu],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.D,$.S,$.bj,$.au],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aF,$.fi,$.S,$.mv],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.lN,$.j)
t.i(0,$.dj,$.j)
t.i(0,$.e5,$.j)
t.i(0,$.f9,$.j)
t.i(0,$.f7,$.n)
r="The "+$.x+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.x
r="Now that the "+q+" is defeated, the "
o=$.r
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.m
t.i(0,new R.a4("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
o=$.aw
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.x
n=n+q+". A Learned "+$.r+" explains that it can only be defeated by the Legendary "
r=$.ab
n=n+r+" Blade. The "
m=$.m
t.i(0,new R.a4("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
r="The volcanos of the land are weirdly active after the defeat of the "+$.x+". One begins to erupt near a "
m=$.r
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.L+"s, but not really doing anything to evacuate or save anyone. The "
o=$.m
t.i(0,new R.a4("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.mK.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("LAW Gavel",H.a([$.R,$.X,$.mr],s),"Organics seem to respect this. Use it to your advantage.",!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("LAW Caution Tape",H.a([$.R,$.aE,$.aW],s),"For when you want to tell inferior organics to keep out.",!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("STOP SIGN",H.a([$.R,$.tP,$.D,$.aW],s),"This isn't a weapon, dunkass.",!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Scales","Disorder","Chaos","Injustice"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f7,$.j)
q.i(0,$.di,$.n)
q.i(0,$.cf,$.n)
q.i(0,$.c4,$.H)
q.i(0,$.cA,$.H)
p=$.m
o="The "+p+" is told by a worried "
n=$.r
o=o+n+" that a group of underling rebels are causing havoc across the land, breaking laws left and right. They must be stopped! Eventually."
m="The "+p+" has located a rebel hideout. The underlings get ready for a battle to the death when the "+p+" suddenly breaks out a "+$.ab+" and starts getting all lawyerly on them. The underlings are all sentenced to 30 years in prison, without parole."
l="The "+p+" finds out through interrogating enough of the underling rebels that they have a big mean leader they call the "
k=$.x
l=l+k+". Sounds like a challenge. The "+p+" cracks their knuckles as they prepare for the biggest case on this side of Skaia."
j="Arriving at the final rebel hideout, "+p+" prepares for battle against the "+k+". For their crimes against the "+n+"s, they're getting the DEATH SENTENCE."
n="The "+k+" lies slain by the "+p+"'s "+$.bs+". The "+p+" has won! The "+n+"s are no longer plagued by the lawbreakers."
i=[U.b]
q.i(0,new R.M("Punish the Rebels",!1,[new U.b(o),new U.b(m),new U.b(l),new U.Q(j,"The "+k+" continues to run their underling crime ring with the defeat of the "+p+".",n)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Heroics","Villains","Heroes","Powers","Justice","Metropolises","Comics"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dj,$.j)
s.i(0,$.c5,$.n)
s.i(0,$.cp,$.n)
s.i(0,$.dj,$.H)
s.i(0,$.eq,$.H)
p=$.m
o="The "+p+" is taking a walk through one of the land's many cities when they witness a fight break out between an Underling Hero and "
m=$.r
o=o+m+" Villain. One of the Underling Hero's attacks hits the "+p+". They won't be having any of that! The "+p+" helps the "+m+" Villain defeat the Underling Hero, and in turn gets invited to join a league of shady criminals. Sweet."
l="The "+p+" teams up with some other villainous "+m+"s to take down a rival team of Underling Heroes. They won't be having any of this LAW business, certainly. Rules were made to be broken, and that's just what the "+p+" is going to do."
m="After defeating yet another league of Underling Heroes, the "+p+" and the other "+m+" Villains feel a cold chill run down their spine. In the distance, lightning strikes a mountain, revealing the headquarters of the  "
k=$.x
m=m+k+", leader of the Underling Heroes and the last hope to preserve law. They're going down!"
j="The "+p+" arrives at the "+k+"'s headquarters, fighting through waves of Underling Heroes before they can finally reach the "+k+". It\u2019s time to end the LAW, once and for all!"
h="The "+k+" lies slain by the "+p+"'s "+$.bs+". The last of the Heroes is no more.  Injustice takes over the land at last."
s.i(0,new R.M("Become the Villain",!1,[new U.b(o),new U.b(l),new U.b(m),new U.Q(j,"The "+p+" is defeated. The "+k+" holds on to the last remnants of justice in the land.",h)],H.a([],i),R.d8(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=$.m
k="The "+h+" is taking a walk through one of the land's many cities when they witness a fight break out between some "
p=$.r
k=k+p+" Hero and an Underling Villain. Being naturally inclined toward the preservation of order, the "+h+" teams up with the "+p+" Hero and triumphs against the Underling Villain. As a reward, the "+p+" Hero invites the "+h+" to join an elite team of crime fighting good guys! Awesome!"
p="The "+h+" works together with some "+p+" Heroes to take down and arrest some Underling Villains. Slowly but surely, the balance of order and disorder begins to shift in order's favor. The number of villains is getting fewer and fewer."
j="With the last of the Villainous Underlings defeated, the "+h+" rejoices, thinking that justice has been served in this land. But what's this? Lightning strikes the ground far away and causes a dark mountain to shoot up into the sky! The lair of the final villain, the "
m=$.x
j=j+m+", has been revealed."
l="The "+h+" storms the lair of the "+m+", the final villain in all of this land. It's time to bring back KAW, once and for all!"
o="The "+m+" lies slain by the "+h+"'s "+$.bs+". The last of the Villains is no more. Justice is finally preserved in the land at last."
s.i(0,new R.M("Become the Hero",!1,[new U.b(k),new U.b(p),new U.b(j),new U.Q(l,"The "+h+" is defeated. The "+m+" holds on to the last remnants of injustice in the land.",o)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Greed","Poverty","Discrepancy","Famine","Starvation"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.hh,$.j)
t.i(0,$.cV,$.n)
t.i(0,$.iA,$.n)
t.i(0,$.ix,$.H)
t.i(0,$.dN,$.H)
r=$.m
q="The "+r+" looks upon the land and notices how some of the "
p=$.r
q=q+p+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
o="The "+r+" comes up with a plan to bring balance to the land. If there's not enough resources, they'll simply have to cut the "+p+" population in half. But through murder? No... They need something cleaner. Something more random."
m="The "+r+" wanders through a poverty striken "+p+" village and is told the legend of the "
l=$.x
m=m+l+". The "+l+" lives in a lair on the other side of the land, where they hoard all of the land's resources. Oh yeah, and they've got this golden "
k=$.ab
m=m+k+" that can half the number of "+p+"s on the land. The "+r+" finds this especially interesting. "
j="The "+r+" shows up at the "+l+"'s lair and asks them to hand over the golden "+k+". The "+l+" agrees... if the "+r+" can defeat them first!"
p="The "+l+" lies slain by the "+r+"'s "+$.bs+". The "+r+" uses the golden "+k+" to cut the "+p+" population in half. Problem solved. "
t.i(0,new R.M("Bring the Balance",!1,[new U.b(q),new U.b(o),new U.b(m),new U.Q(j,"The "+r+" is defeated and left without the golden "+k+" they seek.",p)],H.a([],i),R.d8(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" looks upon the land and notices how some of the "
r=$.r
k=k+r+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
j="The "+p+" comes up with a plan to bring balance to the land. They can force the "+r+"s who have an abundance of resources to share them with the "+r+"s who are resource deprived. But when the "+p+" tells them this, they get understandably upset. They worked so hard for their resources, why should they share them with others? The "+p+" is left stumped."
m="The "+p+" wanders through a poverty striken "+r+" village and is told the legend of the "
o=$.x
m=m+o+". The "+o+" lives in a lair on the other side of the land, where they hoard all of the land's resources. The "+p+" is confused as to why nobody mentioned this before. The solution to the resource problem is obvious now."
r="The "+p+" shows up at the "+o+"'s lair and asks them to be kind and share their resources with the "+r+"s. The "+o+" agrees... if the "+p+" can defeat them first!"
q="The "+o+" lies slain by the "+p+"'s "+$.bs+". The "+p+" distributes all of the denizen's resources throughout the land, improving living conditions everywhere."
t.i(0,new R.M("Create the Balance",!1,[new U.b(k),new U.b(j),new U.b(m),new U.Q(r,"The horrific inequality maintained by the "+o+" continues with the defeat of the "+p+".",q)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aq)}}
K.mM.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Creeping Vine",H.a([$.X,$.R,$.aR,$.au],s),null,!1,"Sentient Plant Tentacles")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.tv,$.R,$.aI],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aF,$.av,$.R,$.au],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bW,$.R,$.aI],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.aP,$.R,$.aI,$.a_,$.a1],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bj,$.R,$.au],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.c9,$.j)
q.i(0,$.bd,$.j)
q.i(0,$.hg,$.H)
q.i(0,$.aN,$.n)
q.i(0,$.lQ,$.n)
q.i(0,$.cN,$.H)
p=$.m
o="The "+p+" finds a village of compliant "
n=$.r
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.L+"ing in panic. Don't upset "
m=$.x
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.M("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.Q(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c9,$.j)
s.i(0,$.cq,$.j)
s.i(0,$.cN,$.H)
s.i(0,$.aN,$.n)
o=$.m
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.r
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.x
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.M("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.Q(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
o=$.m
j="The "+o+" finds themself in the middle of a large plain. They see a small pedestal with a seed packet and note.The note says the field has magical properties that grows any plant in only half an hour. If one of the seeds in the packet can be grown, the lair of "
i=$.x
j=j+i+" will be revealed.  Sounds easy enough. The "+o+" makes a small hole and drops a seed in. The plant immediately starts growing, but almost as immediately "+i+" minions zoom in from out of nowhere and stomp the plant dead."
l="The "+o+" attempts to stop the minions by force, but they are surprisingly agile and make it past the "+o+" to the planted seeds every time. The "+o+" reads the note again and decides to try growing some other plants to protect the seeds as they grow. The "+o+" eats a few fruits they had in their sylladex and grows a wall of trees from the leftover seeds. However the minions are still able to climb and slip through at rapid speed. A few trees isn\u2019t going to be enough to protect the seeds."
k="The "+o+" travels across their land gathering a bunch of seeds to strew them about the field and make a giant maze. Then they plant a few seeds deep inside the maze. The "+i+" minions are very quick, but they aren\u2019t that smart. Some of the seeds manage to grow before the minions can figure out how to get to them. On close inspection, leaves of the full-grown plants are actually maps of the "+o+"\u2019s land, with "+i+"\u2019s lair marked. "
m="The "+o+" tracks down "+i+"\u2019s lair using their leaf map. They toss the leaf aside and pull out their "+$.bs+", ready to throw down!"
h="With "+i+" gone, the "+$.r+"s take up residence in the plain. They were always too afraid to when "+i+" minions were around. They thank the "+o+" for their work."
s.i(0,new R.M("Protect the Seeds",!1,[new U.b(j),new U.b(l),new U.b(k),new U.Q(m,"With their defeat, the "+o+"\u2019s efforts to find "+i+"\u2019s lair have been made pointless.",h)],H.a([],p),R.nS(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cV,$.j)
t.i(0,$.bd,$.H)
t.i(0,$.dO,$.j)
t.i(0,$.c3,$.n)
t.i(0,$.e4,$.n)
t.i(0,$.iv,$.n)
r="Drawn by wailing and "+$.L+"ing, the "
q=$.m
r=r+q+" enters a rotting "
o=$.r
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.x
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.M("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.Q(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aq)}}
G.mN.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("FAQ",H.a([$.a7,$.R,$.Y,$.bX],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aE,$.R,$.aQ,$.a7,$.bX],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.R,$.aQ,$.bX,$.a_,$.tw],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.w6,$.R,$.ag],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.wf,$.R],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.aR,$.R,$.aQ,$.bX],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.aP,$.R,$.au],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.lM,$.j)
q.i(0,$.hf,$.n)
q.i(0,$.dM,$.j)
q.i(0,$.ep,$.j)
p=$.m
o="The "+p+" is searching for the lair of "
n=$.x
o=o+n+" when some local "
m=$.r
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.i(0,new R.M("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.Q(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.L+"ing "+$.r+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.x
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.M("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.Q(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
l="The "+m+" finds the enormous casino that serves as "
k=$.x
l=l+k+"\u2019s lair. At the center of the casino is a lift to "+k+"\u2019s quarters that can only be activated with a key earned by winning enough "
j=$.aw
l=l+j+" chips at all the casino games. The "+m+" starts with Blackjack, and wins easily by counting the cards being dealt and only betting high when the odds are good. It helps that the "+k+" minions and "
p=$.r
l=l+p+"s aren\u2019t smart enough to pick up on what the "+m+" is doing."
n="The next casino game to beat is the roulette table. The "+m+" watches the "+p+"s play for a couple of games. They quickly realize there\u2019s a defect on the wheel that causes the ball to slightly favor the right side of the wheel. They bet accordingly and eventually earn enough "+j+" chips to move to the next casino game."
o="The "+m+" is stuck at the the final casino game, the slot machines. The only way to win enough "+j+" chips is by winning the Mega Jackpot, but there aren\u2019t any noticeable patterns or defects in the machines to take advantage of. The "+m+" puzzles over this for a while, before paying attention to who wins the Mega Jackpot. The only winners are "+k+" minions; the slots have been rigged so the house never has to pay out! The "+m+" cuts in front of a "+k+" minion at a slot machine and wins the Mega Jackpot that was meant for the minion. The minions aren\u2019t happy about this, but they can\u2019t complain without revealing to the "+p+" customers that the game is rigged."
j="The "+m+" turns in their "+j+" chips at the front desk for the lift key to "+k+"\u2019s quarters. As soon the lift brings them to "+k+"\u2019s quarters, they are immediately attacked! It seems "+k+" is not very pleased that the "+m+" found ways to cheat at all the casino games. "
p=k+" has been slain, and ownership of the casino is up for grabs. The "+m+" puts the casino in the hands of slightly more competent than average "+p+"s so they can continue exploring their land."
q.i(0,new R.M("Beat the Odds",!1,[new U.b(l),new U.b(n),new U.b(o),new U.Q(j,k+" is pleased they got "+m+" out of the way, so "+k+"\u2019s casino can become profitable again.",p)],H.a([],i),R.dR(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=this.f
p.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c9,$.n)
s.i(0,$.aN,$.n)
s.i(0,$.dv,$.j)
s.i(0,$.lL,$.j)
s.i(0,$.eo,$.j)
s.i(0,$.he,$.j)
o=$.m
n="The "+o+" walks into a "
m=$.r
n=n+m+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ab
n=n+l+", but "
k=$.x
n=n+k+" has hoarded all of the planets "
j=$.aw
l=n+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+o+" vows to take back some "+j+" Candles for the poor "+m+"s. "
n="After a long search, the "+o+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+o+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+o+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+o+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+o+" triumphantly returns to the village among the joyful "+$.L+"ing of the "+m+"s."
k="The "+o+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
m="Never again shall the "+m+"s be without "+j+" Candles!"
s.i(0,new R.M("The Candlestick Taker",!1,[new U.b(l),new U.b(n),new U.b(h),new U.Q(k,"The "+j+" candles are once again at risk.",m)],H.a([],i),R.nT(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
j="The "+m+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.r
j=j+k+" explains that the "
h=$.x
s.i(0,new R.M("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+m+" vows to help.   "),new U.b("The "+m+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.L+"s as they bask in the light. The "+m+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+m+" must prepare themself for a tough fight.  "),new U.Q("The "+m+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f8,$.n)
q.i(0,$.bd,$.n)
q.i(0,$.fa,$.j)
q.i(0,$.aN,$.n)
q.i(0,$.cB,$.j)
o="Now that the "+$.x+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
o=o+n+" sets up a wiki and settles in to help the "
m=$.r
o=o+m+"s deal with it all."
m="Within barely any time at all, the "+m+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+n+" makes sure all of the information is from credible sources."
n="When the "+n+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.e7+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a4("Moderate the Wiki",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],i),R.eb(),!1,!1,new Y.bV("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l="Now that the "+$.x+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
l=l+n+" shrugs and sets up a wiki and lets the "
m=$.r
l=l+m+"s deal with it all."
m="Within barely any time at all, unmoderated "+m+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+n+" alone, and each claims they are a different SPECIES entirely. The "+n+" finds this to be hilarious."
n="Luckily it turns out all that disinformation running around about the "+n+" thwarts some would be assasins. It turns out the "+n+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
o="The "+$.e7+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a4("Create the Wiki",!1,[new U.b(l),new U.b(m),new U.b(n)],H.a([],i),R.d8(),!1,!1,new Y.bV("Disinformation Network",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.r
n=o+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
m=$.m
n=n+m+" possibly stop it?"
o="The "+m+" pours over maps and charts. What do the sick "+o+"s have in common with each other?  Finally, there is a flash of inspiration. "+o+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+m+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+m+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+m+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+m+" traces the contaminated river back to it's source. The "
j=$.x
q.i(0,new R.M("Shed the Light",!1,[new U.b(n),new U.b(o),new U.b(l),new U.Q(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+m+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dM,$.j)
t.i(0,$.lM,$.j)
t.i(0,$.ep,$.n)
t.i(0,$.cp,$.n)
t.i(0,$.tg,$.n)
t.i(0,$.c3,$.H)
t.i(0,$.e5,$.H)
t.i(0,$.c5,$.n)
t.i(0,$.cA,$.H)
t.i(0,$.bd,$.n)
t.i(0,$.cE,$.j)
s=$.m
r="The "+s+" is approached by a Fast Talking "
o=$.r
r=r+o+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
n=$.ab
r=r+n+". The "+s+" agrees to perform the titular role."
m="The opening night performance of the Beautiful "+n+" is a huge success! The "+$.L+"ing of the fans is it's own reward!"
n="When it comes time for the next performance of the Beautiful "+n+", the "+s+" is turned away at the door. Apparently the "
l=$.x
o=n+l+" rampaged and terrorized "+o+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
n="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.M("Be the Star",!1,[new U.b(r),new U.b(m),new U.b(o),new U.Q(l,"The acting career of the "+s+" is in shambles.",n)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n="After the "+$.x+", the "
s=$.m
n=n+s+" is disappointed to learn that barely any of the "
l=$.r
n=n+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
o="The "+$.e7+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a4("Be the Biggest Star in Paradox Space",!1,[new U.b(n),new U.b(l),new U.b(s)],H.a([],i),R.eb(),!1,!1,new Y.bV("What's my name?",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p.i(0,new X.F(q,t,null),$.aq)}}
Z.n0.prototype={
D:function(){var t,s,r,q
t=this.L
s=[G.a0]
r=A.i("Dream Bubbles Book",H.a([$.K,$.ah,$.aC,$.w_],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.T(t,0)]))
t=Q.J(null,null,A.a5)
r=A.i("Deck of Uno Cards",H.a([$.mo,$.tJ,$.ah],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.O,$.S,$.ah],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.mw,$.S,$.ah],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a_,$.K,$.S,$.bq,$.aC],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dh,$.H)
q.i(0,$.es,$.H)
q.i(0,$.c3,$.H)
q.i(0,$.cM,$.n)
p="The "+$.x+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.m
p=p+o+" comands that the "
n=$.r
m=[U.b]
q.i(0,new R.bF("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.L+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o="As soon as the "+$.x+" is defeated, the "
n=$.r
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.m
q.i(0,new R.a4("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.dy
n="The "+p+" reaches the entrance to a massive dungeon. They heard rumors that important information could be found at the bottom. After some very confusing puzzles and a couple of strifes, they find themself at the dungeon\u2019s center. A lone, elderly "+$.r+" is there to greet the "+p+". He tells the "+p+" that "
o=$.x
n=n+o+" needs to be defeated by a powerful hero, and imparts some clues on how to defeat them. Wait a second, isn\u2019t that the "
l=$.m
n=n+l+"\u2019s Denizen? The "+p+" contacts them and passes on the information they found.  "
k="The "+p+" is exploring another dungeon. Deep inside, they enter a large open room, clearly meant for a boss fight. As expected, "+o+" emerges from a large hole in the ceiling and lets loose a roar. The "+p+" readies themself for a fight, but "+o+" takes one glance and immediately goes back into its hole. It looks like "+o+" is only interested in fighting the "+l+". The "+p+" gives them a call and sits around waiting for them to come. After a few hours, the "+l+" has arrived and the strife can finally start."
p="The "+l+" was victorious in his fight against "+o+". The "+p+" also helped."
q.i(0,new R.M("Be the Protagonist",!1,[new U.b(n),new U.Q(k,"The "+l+" fought hard, but was ultimately defeated by "+o+".",p)],H.a([],m),R.Fq(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
q.i(0,new R.a4("Skip the Boring Details",!1,[new U.b("The "+p+" finds a giant pillar, inscribed with a long and arduous quest that the "+p+" is destined to complete. However the "+p+" isn\u2019t interested on spending so much time on one quest, so they uses their powers and fast forward right to the end. A parade is held in their honor for completing the grand quest that no one got to see happen. A bit unsatisfying, really.")],H.a([],m),R.nU(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=this.x
p.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.vB,$.j)
t.i(0,$.cU,$.j)
t.i(0,$.bd,$.j)
t.i(0,$.aN,$.n)
s="The "+$.x+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.m
s=s+r+" comands that the "
o=$.r
t.i(0,new R.bF("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.L+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
r="As soon as the "+$.x+" is defeated, the "
o=$.r
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.m
t.i(0,new R.a4("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",this.L,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,t,null),$.bL)}}
S.n2.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Alternate Costume",H.a([$.O,$.S,$.a1,$.a_,$.ak],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.O,$.S,$.a1],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.X,$.S,$.ag,$.a1,$.dP],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jn,$.X,$.S,$.au,$.a1,$.dP],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.em,$.j)
t.i(0,$.f9,$.n)
t.i(0,$.cf,$.j)
t.i(0,$.eq,$.n)
t.i(0,$.cV,$.H)
r="The "+$.x+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.m
t.i(0,new R.a4("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.A(),!1,!1,new Y.df("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
q=$.m
r="The "+q+" is feeling quite pleased with their victory over the "+$.x+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aw
t.i(0,new R.a4("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.A(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
q="Now that the "+$.x+" has been defeated, the "
o=$.r
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.m
q=q+r+"'s help in planning the brand new city of "
n=$.aw
t.i(0,new R.a4("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.L+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.A(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.n3.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Maiden's Breath",H.a([$.aR,$.S,$.ax],s),null,!1,null)
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.X,$.S,$.dP,$.br],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.ax,$.aF,$.D,$.S,$.a_,$.fi,$.vR],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.K,$.S,$.a9,$.aC],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.dw,$.j)
t.i(0,$.c9,$.j)
t.i(0,$.aN,$.n)
t.i(0,$.bd,$.n)
t.i(0,$.dv,$.n)
t.i(0,$.cA,$.n)
r="The "+$.x+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.m
r=r+q+" asks local  "
p=$.r
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bF("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.m
o="The "+q+" has adopted a local "
p=$.r
t.i(0,new R.a4("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.L+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.x+". ")],H.a([],n),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
V.na.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Puzzle Box",H.a([$.X,$.R,$.a1],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a7,$.R,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.R],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.R,$.a7,$.Y],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aF,$.jo,$.av,$.ah,$.R,$.a_,$.a7],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cU,$.n)
q.i(0,$.hf,$.H)
q.i(0,$.cB,$.H)
p=$.m
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.r
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.x
k=[U.b]
q.i(0,new R.M("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.Q(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.dR(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.m
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.r+" explains that at the end of the Labrinth is the "
l=$.x
q.i(0,new R.M("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.Q("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.f7,$.H)
s.i(0,$.c4,$.n)
s.i(0,$.cB,$.H)
s.i(0,$.cU,$.H)
p=$.x
o="The "+p+" has commited a staggering amount of crimes against the local "+$.r+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.m
s.i(0,new R.M("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.Q("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.hh,$.j)
t.i(0,$.bd,$.n)
t.i(0,$.fa,$.j)
t.i(0,$.aN,$.n)
t.i(0,$.cB,$.j)
r=$.m
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.x
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ab+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.M("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.Q(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l=$.m
r="The "+l+" has finally found the lair of "
m=$.x
r=r+m+". Appropriately enough for a Mind Denizen, their dungeon is a giant replica of a brain. Doors in the dungeon simulate neurons by opening and closing at seemingly random intervals to mimic brain activity."
o="The "+l+" has spent far too many hours trying to navigate the dungeon. They raise their fist in frustration, and at the same time, a door opens. They drop their fist and attempt to enter, but the door immediately closes again. They raise their fist once more, and the door opens again, and closes again when the "+l+" drops their fist. They raise and lower their fist a bunch of times, and the door opens and closes in perfect synch. Is...is the dungeon based off of the "+l+"\u2019s brain!?  "
p="The "+l+" is starting to get a hang out of controlling their brain dungeon. Most of the doors can be opened by experimentally moving part of their body or using one of their senses. (The door that opened by licking one of the walls wasn\u2019t very fun) There is only one door the "+l+" is still unable to open, which is likely "+m+"\u2019s."
q="Through some convoluted thought processes focused on thinking about "+m+", the "+l+" manages to open the final door to "+m+". They are relieved it didn\u2019t take some cliche like having to unlock their subconscious or some junk like that. They begin the final fight inside their own mind."
j="With "+m+" defeated, the "+l+" decides to rig explosives around the dungeon and bring the whole place down. The thought that others could basically see the inside of the "+l+"\u2019s mind was a little too creepy."
t.i(0,new R.M("Explore the Brain",!1,[new U.b(r),new U.b(o),new U.b(p),new U.Q(q,"Various doors open and close across the dungeon to simulate the "+l+"\u2019s despair in the face of "+m+".",j)],H.a([],k),R.fs(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.H)
n.i(0,new X.F(s,t,null),$.aq)}}
E.nb.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Feather Pen",H.a([$.D,$.S,$.ah,$.br],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.we,$.S,$.jo,$.ag,$.a_],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.K,$.S,$.ah,$.aC],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.dw,$.j)
t.i(0,$.c9,$.j)
t.i(0,$.aN,$.n)
t.i(0,$.bd,$.n)
t.i(0,$.dv,$.n)
t.i(0,$.cA,$.n)
r="The "+$.x+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bF("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
q="You'd think after the dramatic defeat of the "+$.x+" the "
o=$.r
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.m
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ab
t.i(0,new R.a4("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
F.nc.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Piano",H.a([$.ag,$.X,$.a9,$.ah],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.D,$.a9],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aV,$.a7],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.X,$.a9],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.K,$.a9],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aE,$.a9,$.a7,$.aV,$.al],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aE,$.a9,$.a7,$.al],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.X,$.a9],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cp,$.aj)
q.i(0,$.tg,$.j)
q.i(0,$.ep,$.j)
q.i(0,$.dv,$.n)
q.i(0,$.aN,$.n)
q.i(0,$.lJ,$.n)
p=$.m
o="The "+p+" meets a wise old "+$.r+" who tells that the "+$.x+" can only be awoken by the Legendary Hero playing the "
n=$.aw
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ab
k=[U.b]
q.i(0,new R.Z("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
n="The "+p+" finds an empty, trashed "
l=$.aw
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ab+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.L+"ing "+$.r+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.F3
q.i(0,new R.Z("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.A(),!1,!1,new Y.d0("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.tj,$.aj)
s.i(0,$.di,$.n)
s.i(0,$.cM,$.n)
s.i(0,$.dv,$.j)
s.i(0,$.lJ,$.aj)
o=$.m
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aw
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.x
s.i(0,new R.Z("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ab+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.hg,$.aj)
t.i(0,$.c5,$.n)
t.i(0,$.dO,$.n)
r=$.m
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.r
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.L
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aw+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.Z("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
Y.np.prototype={
P:function(a,b){var t=0,s=P.bp(),r,q=this,p,o
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:t=3
return P.cy(A.hy("scripts/Rendering/threed/three.min.js",!1),$async$P)
case 3:t=4
return P.cy(Q.o8(),$async$P)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.aS(p)
o.eG(p,P.ww(["",$.$get$vr()],P.B,S.hB))
o.eF(p,!1)
q.b=p}J.ve(p,b)
r=J.ve(q.b,b)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$aseG:function(){return[S.fq]},
$asca:function(){return[S.fq,P.B]}}
V.nx.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Shorts",H.a([$.O,$.S,$.fh,$.a_],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aE,$.S,$.al],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.an,$.S,$.a1],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.lN,$.j)
t.i(0,$.cN,$.n)
t.i(0,$.hj,$.n)
t.i(0,$.lP,$.n)
t.i(0,$.dw,$.n)
t.i(0,$.bd,$.n)
t.i(0,$.e4,$.n)
t.i(0,$.eo,$.n)
t.i(0,$.tk,$.n)
t.i(0,$.iv,$.n)
t.i(0,$.lL,$.n)
r="The "+$.x+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bF("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.m
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.r+" named Professor "
p=$.L
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ab
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.x
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.M("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.Q(k,"The "+q+" whited out...",m)],H.a([],n),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m="Now that the "+$.x+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.m
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.r
t.i(0,new R.a4("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aw+" buffs. With a deafening "+$.L+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.A(),!1,!1,new Y.ih("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
G.nK.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Superhero Action Figure",H.a([$.aE,$.al,$.aO],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aE,$.al],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aE,$.bW],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aE,$.aU,$.bm,$.ch],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aE,$.al],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.K,$.al],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.aR,$.al,$.O,$.au],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.aR,$.aK,$.al,$.O],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aO,$.D,$.al,$.eu,$.at,$.bT],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.K,$.al],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.K,$.al],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.n)
q.i(0,$.cE,$.n)
q.i(0,$.c5,$.j)
q.i(0,$.cN,$.aj)
q.i(0,$.dx,$.aj)
p=$.m
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.r
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aw+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.L+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.F4
l=[U.b]
q.i(0,new R.Z("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.d0("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.en,$.n)
s.i(0,$.di,$.n)
s.i(0,$.cE,$.n)
s.i(0,$.c5,$.n)
s.i(0,$.dj,$.j)
o=$.m
n="The "+o+" runs towards an explosion in a local "
m=$.r
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aw
s.i(0,new R.Z("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cE,$.n)
t.i(0,$.dM,$.j)
t.i(0,$.cq,$.j)
t.i(0,$.dj,$.n)
r=$.m
q="The "+r+" gets a job at the "+$.aw+" Cinema. A new movie, The Lonely "
o=$.ab
q=q+o+" is coming out soon, and "
n=$.r
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.L+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.Z("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
N.nQ.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Feather'd Cap",H.a([$.O,$.S,$.fh],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a_,$.tB,$.S,$.fh],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bo,$.S],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cE,$.n)
t.i(0,$.cU,$.n)
t.i(0,$.dO,$.H)
r="With the closing of the curtain, the "+$.x+" has released the frogs, and yet they are nowhere to be found. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.x
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.m
r=r+o+" to get it back to normal. They organize a team of "
n=$.r
t.i(0,new R.a4("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ab+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.b.prototype={}
U.Q.prototype={}
R.nR.prototype={
A:function(a){return H.y(new H.dY(H.kl(this),null))+": "+this.c},
gG:function(a){return this.c}}
R.Z.prototype={}
R.M.prototype={}
R.a4.prototype={}
R.bF.prototype={}
E.nV.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Curtain",H.a([$.O,$.R,$.aO],s),null,!1,"Show Ender")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.eu,$.aL,$.R,$.at,$.aX,$.aO,$.bn,$.aD],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Omegaphone",H.a([$.D,$.aV,$.a7,$.R,$.aO],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trike Horn",H.a([$.aF,$.D,$.aV,$.bq,$.cc,$.R,$.aO],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.an,$.bq,$.ah,$.R,$.a_,$.aO],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.X,$.R,$.aX,$.ap,$.bo,$.aO],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.lI,$.j)
q.i(0,$.dh,$.j)
q.i(0,$.di,$.j)
q.i(0,$.cV,$.n)
q.i(0,$.c3,$.n)
q.i(0,$.cf,$.n)
q.i(0,$.c4,$.H)
q.i(0,$.dx,$.n)
q.i(0,$.en,$.j)
q.i(0,$.iz,$.j)
q.i(0,$.f9,$.j)
q.i(0,$.lO,$.j)
q.i(0,$.hg,$.n)
q.i(0,$.es,$.j)
p=$.m
o="The "+p+" is chilling in a "
n=$.r
o=o+n+" village when a bunch of sentient "
m=$.ab
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.x
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.M("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.Q(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fs(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=$.r
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.m
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.x
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.M("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.Q(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=this.f
h.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dv,$.j)
s.i(0,$.c3,$.n)
s.i(0,$.c4,$.j)
s.i(0,$.cp,$.j)
s.i(0,$.cA,$.j)
s.i(0,$.cE,$.n)
s.i(0,$.iy,$.H)
s.i(0,$.dh,$.n)
s.i(0,$.cN,$.j)
s.i(0,$.c5,$.j)
s.i(0,$.dx,$.H)
p=$.L
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.m
o=o+m+" to do a stupid "
l=$.aw
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.x
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.Q(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.lI,$.j)
t.i(0,$.dx,$.j)
t.i(0,$.c4,$.j)
t.i(0,$.cN,$.n)
t.i(0,$.cA,$.j)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.x+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.Q(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
t.i(0,new R.a4("Stop the Narration",!1,[new U.b("The "+m+" is walking down a long road, wondering when they\u2019ll find the next town. They suddenly stop and look behind them, asking who said that. They look everywhere but can\u2019t find where the voice is coming from. They fruitlessly demand the narration to stop."),new U.b("The "+m+" is having a hard time doing any of their quests while hearing every action narrated. No one else can hear the voice and some are starting to think the "+m+" is losing their mind. The "+m+" vows to find who is doing the narrating and beat the stuffing out if them. However, the "+m+" is very unlikely to end the narration. The "+m+" raises their fist at a random location in the sky and shouts we\u2019ll see about that."),new U.b("The "+m+" finds themself in front of an ancient looking broadcasting tower. They wonder aloud whether the tower is broadcasting the narration. They demand the narration to be useful for a change and just tell them, but they get no answer. In a huff, they search the tower. A couple of hours later, the "+m+" find an ominous looking machine displaying pictures of the session, and text of this narration. Realizing the machine is broadcasting the narration, and getting confirmation from the narration that it is so, they immediately destroy it. They no longer hear the narration and are pleased to go back to adventuring. The "+m+" doesn\u2019t realize they only stopped the narration being broadcasted to their ears and not the narration itself.")],H.a([],g),R.dR(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(s,t,null),$.aq)}}
Y.dU.prototype={}
Y.a6.prototype={}
Y.df.prototype={}
Y.bV.prototype={
gG:function(a){return this.c}}
Y.P.prototype={}
Y.ih.prototype={}
Y.bE.prototype={}
Y.d0.prototype={}
Y.kQ.prototype={}
Y.bD.prototype={}
Y.hL.prototype={}
Y.iE.prototype={}
Y.jI.prototype={}
N.o_.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Domino Mask",H.a([$.O,$.S,$.fh],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.tu,$.S,$.fh,$.vS],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a_,$.aE,$.a7,$.S,$.Y,$.ak],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.c4,$.j)
t.i(0,$.cf,$.n)
t.i(0,$.dj,$.n)
r="The "+$.x+" cannot release the frogs since the corrupt Noble "
q=$.r
r=r+q+"s have hoarded them. The "
p=$.m
o=[U.b]
t.i(0,new R.bF("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.m
q="The "+p+" learns of the extreme injustices of the "
r=$.r
q=q+r+"s who rose to power during the tyranny of "
n=$.x
t.i(0,new R.a4("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.o0.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Red Rose",H.a([$.aA,$.ax],s),null,!1,"Seductive Plant")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friend Fic",H.a([$.aA,$.K],s),"Don't ship irl ppl, asshole.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aA,$.an],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aA,$.ap],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aA,$.bo,$.D,$.aK],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aC,$.K,$.aA],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cq,$.j)
q.i(0,$.hj,$.n)
q.i(0,$.f5,$.n)
q.i(0,$.hi,$.j)
q.i(0,$.cp,$.n)
q.i(0,$.iw,$.H)
p=$.m
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.r
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ab+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.Z("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cp,$.n)
s.i(0,$.dM,$.j)
s.i(0,$.hi,$.j)
s.i(0,$.cq,$.n)
s.i(0,$.ep,$.H)
s.i(0,$.iw,$.H)
o=$.r
n="A Romantic "+o+" approaches the "
m=$.m
s.i(0,new R.Z("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.iw,$.j)
t.i(0,$.cq,$.j)
t.i(0,$.f5,$.n)
t.i(0,$.lP,$.j)
t.i(0,$.hi,$.j)
t.i(0,$.cp,$.n)
t.i(0,$.ep,$.H)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.r
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.x+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.F1
t.i(0,new R.Z("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.d0("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.m
r="The "+n+"  and the "
o=$.dy
t.i(0,new R.Z("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.dS(),!1,!1,new Y.iE(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o=$.m
n="The "+o+"  and the "
r=$.dy
t.i(0,new R.Z("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.dS(),!1,!1,new Y.hL(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aj)
r=$.m
o="The "+r+"  and the "
n=$.dy
t.i(0,new R.Z("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.dS(),!1,!1,new Y.jI(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p.i(0,new X.F(s,t,null),$.aB)}}
T.hP.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a5)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.T(t,0)]))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.j)
q.i(0,$.bd,$.H)
q.i(0,$.dO,$.j)
q.i(0,$.c3,$.n)
q.i(0,$.e4,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.a4("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
n=this.x
n.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.er,$.j)
s.i(0,$.eo,$.H)
s.i(0,$.eq,$.n)
s.i(0,$.cM,$.j)
s.i(0,$.cf,$.H)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.a4("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
l="The "+p+" learns that all of the local "
o=$.r
s.i(0,new R.a4("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.dy+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.L+"ing in amazement. The factory is saved! ")],H.a([],m),R.dS(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.aj)
n.i(0,new X.F(q,s,null),$.bL)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.bd,$.H)
t.i(0,$.c9,$.n)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.L
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ut(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.H)
l=$.m
p="The "+l+" learns that all of the local "
r=$.r
t.i(0,new R.a4("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.bL)},
A:function(a){return this.r},
a8:function(a,b,c,d){var t=this.r
this.y=t
this.z=new X.iu("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.id]),H.a([],[M.hd]))
this.D()
this.E()
t=this.Q
if($.$get$o2().U(0,t))H.b0("Duplicate class id for "+this.A(0)+": "+t+" is already registered for "+J.cK($.$get$o2().n(0,t))+".")
$.$get$o2().i(0,t,this)},
gG:function(a){return this.r}}
E.o3.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Sage's Robe",H.a([$.O,$.S,$.b_,$.Y,$.a1,$.a_],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.K,$.S,$.aC,$.Y],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.O,$.S,$.hq,$.Y],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.f8,$.n)
t.i(0,$.bd,$.n)
t.i(0,$.fa,$.j)
t.i(0,$.aN,$.H)
t.i(0,$.cB,$.j)
r="The "+$.x+" has blocked access to the books for the duration. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q="Now that the "+$.x+" is defeated, it is time to begin recovery efforts. The "
r=$.r
q=q+r+"s ask the "
o=$.m
t.i(0,new R.a4("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.L+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
K.o4.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Uno Reverse Card",H.a([$.mo,$.R,$.aO,$.jq],s),null,!1,null)
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.hq,$.b_,$.R,$.jq],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.lI,$.j)
q.i(0,$.dh,$.j)
q.i(0,$.di,$.j)
q.i(0,$.cV,$.n)
q.i(0,$.c3,$.n)
q.i(0,$.cf,$.n)
q.i(0,$.c4,$.H)
q.i(0,$.dx,$.n)
q.i(0,$.en,$.j)
q.i(0,$.iz,$.j)
q.i(0,$.f9,$.j)
q.i(0,$.lO,$.j)
q.i(0,$.hg,$.n)
q.i(0,$.es,$.j)
p=$.m
o="The "+p+" is chilling in a "
n=$.r
o=o+n+" village when a bunch of sentient "
m=$.ab
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.x
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.M("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.Q(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fs(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=$.r
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.m
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.x
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.M("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.Q(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=this.f
h.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dv,$.j)
s.i(0,$.c3,$.n)
s.i(0,$.c4,$.j)
s.i(0,$.cp,$.j)
s.i(0,$.cA,$.j)
s.i(0,$.cE,$.n)
s.i(0,$.iy,$.H)
s.i(0,$.dh,$.n)
s.i(0,$.cN,$.j)
s.i(0,$.c5,$.j)
s.i(0,$.dx,$.H)
p=$.L
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.m
o=o+m+" to do a stupid "
l=$.aw
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.x
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.Q(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.lI,$.j)
t.i(0,$.dx,$.j)
t.i(0,$.c4,$.j)
t.i(0,$.cN,$.n)
t.i(0,$.cA,$.j)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.x+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.Q(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(s,t,null),$.aq)}}
Y.o5.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Walking Stick",H.a([$.X,$.S,$.dP],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.O,$.S,$.tz,$.Y,$.a_],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.K,$.S,$.Y],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Magical Compass",H.a([$.D,$.S,$.Y,$.a1],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p
t=[P.B]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.dw,$.j)
t.i(0,$.c9,$.j)
t.i(0,$.bd,$.j)
t.i(0,$.c5,$.H)
t.i(0,$.aN,$.H)
r="Now that the "+$.x+" has been defeated, the planet has really opened up. The "
q=$.m
p=[U.b]
t.i(0,new R.a4("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.r+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.x+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.m
t.i(0,new R.bF("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.r+" "+$.L+"s in time to stop them.   ")],H.a([],p),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bL)}}
L.o6.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Scroll",H.a([$.K,$.S,$.Y],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.aP,$.S,$.ak,$.Y],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.K,$.S,$.aC,$.Y,$.ak,$.a_],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.lJ,$.j)
t.i(0,$.bd,$.j)
t.i(0,$.cB,$.j)
t.i(0,$.aN,$.n)
t.i(0,$.cU,$.n)
r="The "+$.x+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q="Now that the "+$.x+" has been taken care of, the "
r=$.m
q=q+r+" discovers a large library of "
o=$.r
t.i(0,new R.a4("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
S.o9.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Cueball",H.a([$.vZ,$.S],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.fg,$.vY,$.S,$.aQ],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.aP,$.S,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.vU,$.S,$.b_],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.vD,$.j)
t.i(0,$.ix,$.j)
t.i(0,$.vA,$.j)
t.i(0,$.cN,$.n)
r="Now that the "+$.x+" has been defeated, the land is really starting to open up. The "
q=$.m
r=r+q+" finds a tunnel filled with Blind "
p=$.r
o=[U.b]
t.i(0,new R.a4("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.A(),!1,!1,new Y.df("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.x+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.m
t.i(0,new R.bF("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.m
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.r
t.i(0,new R.a4("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.A(),!1,!1,new Y.df("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
r="A group of underlings are still making trouble, even after the defeat of the "+$.x+". The "
p=$.m
r=r+p+" begins planting rumors of a huge "
q=$.ab
t.i(0,new R.a4("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.A(),!1,!1,new Y.df("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.c0.prototype={}
Y.og.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Meddler's Guide",H.a([$.aC,$.S,$.K,$.bq,$.a_,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aP,$.S,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.S
r=A.i("Cloud in a Bottle",H.a([r,r,$.bi],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a1,$.S,$.aQ,$.ax,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.bd,$.n)
t.i(0,$.dw,$.j)
t.i(0,$.cN,$.n)
t.i(0,$.aN,$.n)
t.i(0,$.c9,$.j)
r="The defeat of the "+$.x+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q="Now that the "+$.x+" has been taken care of, the "
r=$.m
q=q+r+" finds a long line of "
o=$.r
t.i(0,new R.a4("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.oh.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Fiduspawn Plush",H.a([$.ch,$.O,$.b_],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.ch,$.O,$.b_],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("D20",H.a([$.ty,$.aE],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pet Pigeon",H.a([$.br,$.au,$.bj,$.aZ,$.bn,$.tG],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.O,$.b_,$.ch],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.aC,$.K],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.aC,$.K],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.b_,$.O],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aC,$.K,$.Y],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.H)
q.i(0,$.aN,$.n)
q.i(0,$.cU,$.j)
q.i(0,$.cB,$.n)
p=$.m
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.r
m=[U.b]
q.i(0,new R.Z("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aw+" or "+$.ab+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.L+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dN,$.H)
s.i(0,$.aN,$.j)
s.i(0,$.cU,$.j)
s.i(0,$.td,$.j)
s.i(0,$.cp,$.j)
s.i(0,$.tj,$.j)
s.i(0,$.cB,$.n)
o=$.m
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.L
n=n+l+"ing "
k=$.r
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aw
s.i(0,new R.Z("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cM,$.H)
t.i(0,$.dM,$.j)
t.i(0,$.c9,$.j)
t.i(0,$.dj,$.j)
t.i(0,$.f7,$.j)
r=$.m
q="The "+r+" wanders into an entire crowd of "
o=$.r
t.i(0,new R.Z("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.L+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
M.bt.prototype={}
N.oj.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Frog Statue",H.a([$.aF,$.av,$.R],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.O,$.R],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c6,$.Y,$.a7,$.R],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.aP,$.Y,$.R],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.K,$.R,$.tC,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m
t=$.m
s=[P.B]
r=H.a(["Wherever the "+t+" goes, they find a "+$.r+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.L+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.x+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.m
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.r+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.r+" tells the "
p=$.m
t=t+p+" that they must negotiate with "
o=$.x
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.m
p="The "+o+" meets with "
t=$.x
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cN,$.H)
t.i(0,$.tf,$.j)
s=[U.b]
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.m
t.i(0,new R.bF("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.A(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
this.f.i(0,new X.F(o,t,null),$.Ge)}}
U.af.prototype={
gG:function(a){return this.e+"kind"},
$isbI:1,
$asbI:function(){return[A.a5]}}
K.cG.prototype={
gG:function(a){return this.a}}
M.on.prototype={
aR:function(a){return"application/octet-stream"},
P:function(a6,a7){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$P=P.bx(function(a8,a9){if(a8===1)return P.bu(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dg(null,0)
q.a=J.e1(a7,0)
for(p=0,o="";p<6;++p)o+=H.hM(q.a6(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.k("Invalid header: "+n)
m=q.a6(8)
l=9+m*6
o=8*m
k=q.a6(o)
j=q.a6(o)
i=q.a6(o)
h=q.a6(o)
g=q.a6(o)
f=q.a6(o)
o=P.C
e=P.B
d=P.bZ(o,e)
c=new O.cY(k,j,null,null,null,null,null,null,d,P.bZ(e,o))
c.x=new Uint8Array(H.cD(k*j))
b=q.a6(8)
for(o=[o],p=0;p<b;++p){a=q.a6(8)
a0=q.a6(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.a6(8)
if(a2>=e){r=H.w(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.oO(a1,0,null))}a4=q.a6(8)
a5=$.$get$wQ().n(0,a4)
if(a5==null)throw H.k("Sprite decoding error: Encoding id "+a4+" not supported.")
c.i2(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hP()
r=c
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$asds:function(){return[O.cY]},
$asca:function(){return[O.cY,P.bh]}}
R.oS.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Meddler's Guide",H.a([$.aC,$.S,$.K,$.bq,$.a_,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aP,$.S,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.S
r=A.i("Cloud in a Bottle",H.a([r,r,$.bi],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a1,$.S,$.aQ,$.ax,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cU,$.j)
t.i(0,$.aN,$.j)
t.i(0,$.dw,$.n)
t.i(0,$.fa,$.n)
t.i(0,$.tc,$.n)
t.i(0,$.e4,$.n)
t.i(0,$.iv,$.n)
t.i(0,$.ti,$.n)
r=$.m
q="The "+r+" decides to take a break after defeating "+$.x+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.r
o=[U.b]
t.i(0,new R.a4("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.L+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.nU(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
r=$.r
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.m
t.i(0,new R.a4("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
r=$.r
q="The "+r+"s are so stressed after all that shit with the "+$.x+". They are yelling and "+$.L+" at each other over the slightest of insults. The "
p=$.m
t.i(0,new R.a4("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p="The "+$.x+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.m
p=p+r+" purifies the pools "
q=$.r
t.i(0,new R.bF("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
r="The defeat of the "+$.x+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.r
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.m
t.i(0,new R.a4("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aw+". Huh. Okay then.")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
D.oV.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Robot",H.a([$.a7,$.D,$.au,$.Y],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a7,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a7,$.K],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH For Dummies ",H.a([$.a7,$.K,$.aD,$.aC],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aE,$.a7,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.w3,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.tQ,$.D,$.ag],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a7,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.hh,$.n)
q.i(0,$.em,$.j)
q.i(0,$.er,$.j)
q.i(0,$.cf,$.H)
p=$.m
o="The "+p+" learns from their "
n=$.r
o=o+n+"s about the great "
m=$.aw
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.x+" destroyed it. "
o="The "+p+" searches for the "
l=$.ab
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.F9
p=[U.b]
q.i(0,new R.Z("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.A(),!1,!1,new Y.d0("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.z)
l=$.m
m="The "+l+" is approached by a "
o=$.r
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.L
q.i(0,new R.Z("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.x+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ab+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.dR(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.er,$.j)
s.i(0,$.eo,$.H)
s.i(0,$.eq,$.n)
s.i(0,$.cM,$.j)
s.i(0,$.cf,$.H)
o=$.m
n="The "+o+" learns that all of the local "
l=$.r
s.i(0,new R.Z("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
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
s.i(0,new R.Z("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.eb(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.hh,$.H)
t.i(0,$.em,$.j)
t.i(0,$.er,$.j)
t.i(0,$.cf,$.H)
r=$.m
q="The "+r+" learns from a mysterious "+$.r+" in a black trenchcoat about a great "
o=$.aw
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.x
t.i(0,new R.Z("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aB)}}
V.oX.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Lighter",H.a([$.D,$.ap],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.K,$.bm],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.K,$.bm,$.c6],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.D,$.aD,$.c6,$.bk,$.bn],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.K,$.w9],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.D,$.bf,$.bk],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.D,$.bf,$.bk],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.O,$.fh,$.bk],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bS,$.bf],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.D,$.tH,$.aK,$.bk],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.D,$.tN,$.aK,$.bk],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.D,$.tD,$.aK,$.bk],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mq,$.at,$.D,$.bo,$.bk],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.K,$.bq,$.aC],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.cc,$.D,$.aV,$.bq],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.X,$.ap],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cE,$.n)
q.i(0,$.dM,$.j)
q.i(0,$.e5,$.j)
q.i(0,$.f9,$.j)
q.i(0,$.lN,$.j)
q.i(0,$.dj,$.n)
p=$.m
o=[U.b]
q.i(0,new R.Z("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.A(),!1,!1,new Y.df("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cE,$.n)
s.i(0,$.dM,$.j)
s.i(0,$.cq,$.j)
s.i(0,$.dj,$.n)
n=$.m
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.r
s.i(0,new R.Z("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ab+" underling. Tremble at the fearsome "+$.aw+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.A(),!1,!1,new Y.df("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.j)
q.i(0,$.bd,$.H)
q.i(0,$.dO,$.j)
q.i(0,$.c3,$.n)
q.i(0,$.e4,$.H)
q.i(0,$.dh,$.H)
n=$.m
m="The "+n+" learns that all of the local "
l=$.r
q.i(0,new R.Z("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c4,$.j)
t.i(0,$.dh,$.H)
t.i(0,$.en,$.j)
t.i(0,$.iz,$.j)
t.i(0,$.cf,$.n)
t.i(0,$.es,$.n)
s=$.m
r="The "+s+" finds a crowd of "
n=$.L
r=r+n+"ing "
m=$.r
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aw+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.Z("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,t,null),$.aB)}}
X.F.prototype={
A:function(a){return"Theme: "+H.y(this.a)}}
U.p5.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Lockpick",H.a([$.D,$.S,$.ak,$.aL,$.a_],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.O,$.S,$.ak],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Thief's Dagger",H.a([$.D,$.S,$.aL,$.at,$.tx],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.c4,$.j)
t.i(0,$.di,$.n)
t.i(0,$.c5,$.n)
t.i(0,$.cM,$.n)
r="The "+$.x+" cannot release the frogs since the corrupt "
q=$.r
r=r+q+" Cops have confiscated them. The "
p=$.m
o=[U.b]
t.i(0,new R.bF("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.m
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.x+"'s layer and slated to be returned to the "
r=$.r
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.L+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.fy
t.i(0,new R.a4("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.r
p="A weeping "+r+" approaches the "
n=$.m
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.x
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aw+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.L+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.fy
t.i(0,new R.a4("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.x
n="Now that the "+r+" has been defeated, the "
p=$.r
n=n+p+"s have recovered their precious "
q=$.ab
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.m
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.L
l=n+l+"worth, the disaffected Heir to the "+$.aw+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.fy
t.i(0,new R.a4("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.p6.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Grandfather Clock",H.a([$.X,$.ah,$.bf,$.R],s),null,!1,"Ticking Tower of Time")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.wd,$.R,$.a9],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aF,$.bj,$.R,$.aZ,$.aX,$.aD],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.R,$.a9,$.ah],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sick Turn Tables",H.a([$.D,$.R,$.a9,$.a_,$.al],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.D,$.R,$.a9],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.vF,$.aj)
q.i(0,$.cf,$.n)
q.i(0,$.cM,$.n)
q.i(0,$.eq,$.j)
p=$.x
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.m
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x1
l=[U.b]
q.i(0,new R.a4("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.d8(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.m
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.r+"s, they set out to fix the "
m=$.ab
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.x
q.i(0,new R.M("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.Q("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j=this.f
j.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.hg,$.j)
s.i(0,$.e5,$.H)
s.i(0,$.cf,$.j)
p=$.m
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.r+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.x
s.i(0,new R.M("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.Q(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c9,$.j)
t.i(0,$.aN,$.n)
t.i(0,$.cU,$.j)
t.i(0,$.dw,$.j)
r=$.x
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ab
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.m
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.r+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.M("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.Q(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.fs(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
k=$.x
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ab
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.m
t.i(0,new R.M("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.r+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.Q("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.d8(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
r="With the defeat of the "+$.x+", "
k=$.m
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.r
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aw
t.i(0,new R.a4("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.d8(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" takes a break from adventuring and visits a little "
o=$.r
k=k+o+" town holding a "
r=$.aw
k=k+r+" festival. They walk around town talking to the various villagers and visiting the little shops, before taking a nap in the local inn. The next morning, the villagers welcome the "+p+" to join in the "+r+" festival that\u2019s just starting. Wait, wasn\u2019t the festival yesterday? The "+o+"s assure the "+p+" that the festival is only being held today. "
m="The "+p+" tries to convince the "+o+"s that they were repeating the day before, but the "+o+"s refused to believe. They quickly realize that the villagers aren\u2019t just forgetful when the same thing hsppens the day after. The village appears to be stuck in a time loop They decide to fix things out of the goodness of their heart, but not before exploiting the time loop to mess with the "+o+" town for a little while."
n="After plenty of shenanigans, the "+p+" starts investigating the time loop. They discover that the "+r+" festival ends with an attempted ceremony to summon "
q=$.x
n=n+q+". The "+o+"s bungle the ceremony every time, causing time to reset. The "+p+" studies how the festival is supposed to work, and goes through several loops at once with time time travel to fix the ceremony. "
i="The "+p+" has gone through so many freaking loops that they have memorized the actions of every "+o+". They follow a perfected schedule to make sure every "+o+" prepares for and completes their part of the ceremony. Finally the ceremony is completed and "+q+" arrives. The "+p+" takes out their "+$.bs+" and begins the strife!"
p=q+" lies dead. The "+o+"s are happy to be rid of them and thank the player for helping to complete the ceremony. It was their first time performing the ceremony, after all. The "+p+" rolls their eyes."
t.i(0,new R.M("Stop the Time Loop",!1,[new U.b(k),new U.b(m),new U.b(n),new U.Q(i,"The "+o+"s wake up and begin eagerly preparing for the "+r+" festival. It only comes once a year, after all.",p)],H.a([],l),R.nS(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.r
r="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.m
t.i(0,new R.M("Move Forwards, Never Stop",!1,[new U.b(r+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.L+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.Q("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.x+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(s,t,null),$.aq)}}
G.a0.prototype={
A:function(a){var t=this.c
if(t.length!==0)return C.b.ga9(t)
return"NULL TRAIT"},
gee:function(){return this.b},
gdZ:function(){return this.c},
gbB:function(){return this.d}}
G.aJ.prototype={}
G.ae.prototype={}
G.bJ.prototype={}
G.d.prototype={
ghK:function(){return this.f.length},
gbB:function(){var t,s,r,q,p
for(t=this.f,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bH)(t),++q)r+=t[q].d
return r},
aB:function(a,b){return C.a.bC(b.ghK()-this.f.length)},
ep:function(a){return C.b.ha(this.f,a.gfX(a))},
$isbI:1,
$asbI:function(){return[G.d]},
gG:function(a){return this.e},
geJ:function(){return this.f}}
G.mx.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a0]}}}
Q.pv.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Cardboard Box",H.a([$.K,$.R,$.ak],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.D,$.R,$.ak],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bo,$.R,$.ak,$.mq],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.aZ,$.R,$.ak,$.aX,$.bY],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aE,$.R,$.ak,$.ah],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.R,$.a_,$.tC,$.ak,$.aP],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.j)
q.i(0,$.iA,$.j)
q.i(0,$.iB,$.j)
q.i(0,$.ix,$.j)
p=$.x
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.m
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.r
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x1
l=[U.b]
q.i(0,new R.a4("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.x
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.M("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.Q(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i=this.f
i.i(0,new X.F(s,q,null),$.aq)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dN,$.n)
s.i(0,$.iA,$.n)
s.i(0,$.iB,$.n)
s.i(0,$.c4,$.j)
p=$.m
o="Even with the victory of the "+p+" over the villainous "
n=$.x
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.r+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ab
s.i(0,new R.a4("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.dR(),!1,!1,new Y.bV("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
s.i(0,new R.M("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.L+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.Q("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.x+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.r+"s.")],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dN,$.j)
t.i(0,$.iA,$.j)
t.i(0,$.iB,$.j)
r=$.m
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.x+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.M("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.Q(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i.i(0,new X.F(s,t,null),$.aq)}}
E.pw.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Yardstick",H.a([$.dP,$.S,$.tJ,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aC,$.S,$.mw,$.K],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.O,$.S,$.hq,$.w8,$.b_,$.jq],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.wh,$.S,$.ts],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cN,$.j)
t.i(0,$.dx,$.j)
t.i(0,$.f6,$.j)
t.i(0,$.dw,$.j)
t.i(0,$.hf,$.j)
t.i(0,$.lK,$.j)
t.i(0,$.iB,$.n)
r=$.m
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.r
o=[U.b]
t.i(0,new R.Z("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.nU(),!1,!1,new Y.dU("Rewards/no_reward.png",null),1,null,null),$.z)
r=$.x
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.m
n=q+" tries to manually separate the turtles by catching them with a net and "+$.bs+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.L
t.i(0,new R.M("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.Q(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.Fm(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
q=$.m
t.i(0,new R.Z("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.A(),!1,!1,new Y.dU("Rewards/no_reward.png",null),1,null,null),$.z)
q="A wizened "+$.r+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.m
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.x
t.i(0,new R.M("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
m=$.m
t.i(0,new R.M("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.x+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
m="A wizened "+$.r+" tells the "
r=$.m
t.i(0,new R.a4("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.A(),!1,!1,new Y.df("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
r="A "+$.r+" that is also a SHOGUN minion tells the "
m=$.m
t.i(0,new R.a4("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.Fn(),!1,!1,new Y.bV("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
m=$.m
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.i(0,new R.a4("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.H)
n=$.m
m="The "+n+" finds an unusual rock formation. They examine it from every possible angle to find a secret meaning. In the end it turns out to be an interesting rock and nothing more."
q="The "+n+" is stopped by a young "
r=$.r
t.i(0,new R.a4("Wasting Time",!1,[new U.b(m),new U.b(q+r+" that asks them to watch clouds together. The "+n+" spends a few hours with the "+r+" interpreting the shapes in the clouds."),new U.b("The "+n+" uses the alchemiter to create a number of dream video game fusions. They spend many hours playing them all."),new U.b("After waking up from a nap, the "+n+" turns over and goes right back to sleep. They\u2019re just not feeling like doing anything right now."),new U.b("An elderly "+r+" calls out to the "+n+"; apparently there was a dangerous monster that the "+r+"s wanted the "+n+" to defeat, but the problem solved itself when the monster tripped off a cliffside. Was there actually a point to what the "+n+" was doing? Nope, they\u2019re just really bad at using their time wisely.")],H.a([],o),R.nU(),!1,!1,new Y.dU("Rewards/no_reward.png",null),1,null,null),$.z)
n=$.x
r="The "+n+" explains um. What? Where did the "
q=$.m
t.i(0,new R.bF("Waste the Frogs",!1,[new U.b(r+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.aq)}}
M.pA.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Cauldron",H.a([$.wc,$.S,$.a1],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jn,$.dP,$.S,$.X,$.a1],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.tE,$.S,$.a1,$.ak,$.a_],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.c3,$.n)
t.i(0,$.hj,$.n)
t.i(0,$.cV,$.n)
t.i(0,$.cM,$.n)
t.i(0,$.cA,$.n)
t.i(0,$.tf,$.n)
r=$.x
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.r
q=q+p+" consorts. It's up to the "
o=$.m
n=[U.b]
t.i(0,new R.bF("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.c_(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o="Even with the defeat of the "+$.x+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.r
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aw
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.m
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.fy
t.i(0,new R.a4("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.z)
q="A Mysterious "+$.r+" approaches the "
p=$.m
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aw
q=q+r+" was discovered amongst the "+$.x+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.fy
t.i(0,new R.a4("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.r
p="A young "+r+" approaches the "
m=$.m
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aw
t.i(0,new R.a4("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ab+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.L+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.pB.prototype={
P:function(a5,a6){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$P=P.bx(function(a7,a8){if(a7===1)return P.bu(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.e2(a6,$.$get$xg())
if(0>=p.length){r=H.w(p,0)
t=1
break}if(J.yq(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.w(p,0)
t=1
break}throw H.k("Invalid WordList file header: '"+H.y(p[0])+"'")}o=P.B
n=H.a([],[o])
m=P.bZ(o,B.eM)
q.a=null
l=P.bZ(o,o)
for(k=P.W,j=B.d1,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cJ()
""+i
H.y(g)
f.toString
f=J.e2(g,$.$get$xe())
if(0>=f.length){r=H.w(f,0)
t=1
break $async$outer}g=f[0]
f=J.be(g)
if(f.gX(g)===!0){$.$get$cJ().toString
continue}if(f.af(g,$.$get$xf())){$.$get$cJ().toString
continue}if(C.c.af(g,"@")){e=C.c.ag(g,1)
$.$get$cJ().toString
n.push(e)}else if(C.c.af(g,"?")){f=C.c.ag(g,1)
f=$.$get$hV().aP(0,f)
f=H.dk(f,B.ib(),H.ao(f,"o",0),null)
d=P.cW(f,!0,H.ao(f,"o",0))
if(d.length<2)$.$get$cJ().b1(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cJ()
H.y(c)
H.y(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$xh()
a=f.cl(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.w(f,1)
t=1
break $async$outer}a0=J.c2(f[1])
a1=C.c.ag(g,a0)
if(a1.length===0)continue
f=J.ar(a0)
if(f.R(a0,0)){a1=C.c.eq(a1)
$.$get$cJ().toString
f=P.bZ(o,o)
a2=new B.eM(P.bZ(o,k),f,a1,!1,null,null)
a2.cb(null,null,j)
q.a=a2
f.bn(0,l)
m.i(0,a1,q.a)}else if(f.R(a0,$.xi))if(C.c.af(a1,"?")){a1=C.c.ag(a1,1)
f=$.$get$hV().aP(0,a1)
f=H.dk(f,B.ib(),H.ao(f,"o",0),null)
d=P.cW(f,!0,H.ao(f,"o",0))
f=$.$get$cJ()
f.toString
if(d.length<2)f.b1(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kp(d[0],$.$get$fw(),"")
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}b=J.kp(d[1],$.$get$fw(),"")
f=$.$get$cJ()
H.y(q.a.e)
f.toString
q.a.d.i(0,c,b)}}else if(C.c.af(a1,"@")){e=C.c.ag(a1,1)
$.$get$cJ().toString
f=$.$get$hV().aP(0,a1)
f=H.dk(f,B.ib(),H.ao(f,"o",0),null)
d=P.cW(f,!0,H.ao(f,"o",0))
a3=d.length>1?H.wK(d[1],new U.pC(q,d)):1
q.a.c.i(0,C.c.cX(e,$.$get$fw(),""),a3)}else{$.$get$cJ().toString
f=$.$get$hV().aP(0,g)
f=H.dk(f,B.ib(),H.ao(f,"o",0),null)
d=P.cW(f,!0,H.ao(f,"o",0))
a3=d.length>1?H.wK(d[1],new U.pD(q,d)):1
if(0>=d.length){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bi(J.kp(d[0],$.$get$fw(),""))
h=new B.d1(null)
a4=P.bZ(o,o)
h.a=a4
a4.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.rR(a3)),[H.ao(f,"cC",0)]))}else if(f.R(a0,$.xi*2)){$.$get$cJ().toString
f=$.$get$hV().aP(0,g)
f=H.dk(f,B.ib(),H.ao(f,"o",0),null)
d=P.cW(f,!0,H.ao(f,"o",0))
f=d.length
if(f!==2)$.$get$cJ().b1(C.h,"Invalid variant for "+H.y(h.bj(0))+" in "+H.y(q.a.e))
else{if(0>=f){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bi(J.kp(d[0],$.$get$fw(),""))
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}a4=C.c.cX(U.Gh(d[1]),$.$get$fw(),"")
h.a.i(0,f,a4)}}}}}r=new B.i_(n,m)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$aseG:function(){return[B.i_]},
$asca:function(){return[B.i_,P.B]}}
U.pC.prototype={
$1:function(a){var t,s,r
t=$.$get$cJ()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid include weight '"+H.y(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.b1(C.i,r+H.y(s[0])+"' in list '"+H.y(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
U.pD.prototype={
$1:function(a){var t,s,r
t=$.$get$cJ()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid weight '"+H.y(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.b1(C.i,r+H.y(s[0])+"' in list '"+H.y(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
F.pF.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a0]
r=A.i("Make a World Book",H.a([$.K,$.ah,$.aC],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.T(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.b_,$.O,$.mu],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.aC,$.K,$.Y],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aC,$.K,$.Y],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.aC,$.K],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.D,$.Y,$.mu,$.ah],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aC,$.K,$.D],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aC,$.K],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.j)
q.i(0,$.cB,$.j)
q.i(0,$.bd,$.n)
q.i(0,$.aN,$.n)
q.i(0,$.f8,$.n)
p=$.m
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.r+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.Z("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dj,$.n)
s.i(0,$.cE,$.n)
s.i(0,$.cq,$.n)
s.i(0,$.bd,$.n)
p=$.r
o="An Excited "+p+" rushes up to the "
n=$.m
s.i(0,new R.Z("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.L+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.A(),!1,!1,new Y.df("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cE,$.n)
t.i(0,$.dM,$.j)
t.i(0,$.cq,$.j)
t.i(0,$.dj,$.n)
t.i(0,$.f6,$.j)
r=$.m
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.r
t.i(0,new R.Z("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.A(),!1,!1,new Y.df("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aB)}}
B.pK.prototype={
aR:function(a){return"application/x-tar"},
P:function(a,b){var t=0,s=P.bp(),r,q,p
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:q=$.$get$xj()
p=J.v6(b)
q.toString
r=q.h1(T.tr(p,0,null,0),!1)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$asds:function(){return[T.fN]},
$asca:function(){return[T.fN,P.bh]}}
A.fV.prototype={}
B.dt.prototype={
cE:function(a){if(a)this.b=(this.b|C.a.aq(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.O+=H.hM(this.b)
this.b=0}},
ah:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.aq(1,t)
if(typeof a!=="number")return a.aJ()
this.cE((a&s)>>>0>0)}},
fP:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.av(1,t-s)
if(typeof a!=="number")return a.aJ()
this.cE((a&r)>>>0>0)}},
bU:function(a){var t,s
a=J.eg(a,1)
t=C.d.da(Math.log(H.ki(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cE(!1)
this.fP(a,t+1)},
b4:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.O
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a8(r)
q+=r
p=r}else p=0
r=H.cD(q)
o=new Uint8Array(r)
if(t){n=H.cR(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.w(o,m)
o[m]=l}}t=s.O
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a2(k,m)
if(s<0||s>=r)return H.w(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.w(o,t)
o[t]=s}return o.buffer}}
B.dg.prototype={
ct:function(a){var t,s,r,q
t=C.f.ak(a/8)
s=C.a.bI(a,8)
r=this.a.getUint8(t)
q=C.a.av(1,s)
if(typeof r!=="number")return r.aJ()
return(r&q)>>>0>0},
a6:function(a){var t,s,r
if(a>32)throw H.k(P.dG(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.ct(this.b);++this.b
if(r)t=(t|C.a.aq(1,s))>>>0}return t},
hO:function(a){var t,s,r,q
if(a>32)throw H.k(P.dG(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.ct(this.b);++this.b
if(q)s=(s|C.a.av(1,t-r))>>>0}return s},
c2:function(){var t,s,r
for(t=0;!0;){s=this.ct(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hO(t+1)-1}}
A.dJ.prototype={
A:function(a){return"rgb("+H.y(this.b)+", "+H.y(this.c)+", "+H.y(this.d)+", "+H.y(this.a)+")"},
hY:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.av()
s=this.c
if(typeof s!=="number")return s.av()
r=this.d
if(typeof r!=="number")return r.av()
q=this.a
if(typeof q!=="number")return H.a8(q)
return(t<<24|s<<16|r<<8|q)>>>0},
R:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dJ){t=this.b
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
ga3:function(a){return this.hY(!0)},
V:function(a,b){var t,s,r,q,p,o,n,m
t=J.ar(b)
if(!!t.$isdJ){t=this.b
s=b.b
if(typeof t!=="number")return t.V()
if(typeof s!=="number")return H.a8(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.V()
if(typeof q!=="number")return H.a8(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.V()
if(typeof o!=="number")return H.a8(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.V()
if(typeof m!=="number")return H.a8(m)
return A.fY(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.al()
s=this.c
if(typeof s!=="number")return s.al()
r=this.d
if(typeof r!=="number")return r.al()
q=this.a
if(typeof q!=="number")return q.al()
return A.t_(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.V()
s=this.c
if(typeof s!=="number")return s.V()
r=this.d
if(typeof r!=="number")return r.V()
return A.fY(t+b,s+b,r+b,this.a)}throw H.k("Cannot add ["+H.y(t.gaa(b))+" "+H.y(b)+"] to a Colour. Only Colour, double and int are valid.")},
at:function(a,b){var t,s,r,q,p,o,n,m
t=J.ar(b)
if(!!t.$isdJ){t=this.b
if(typeof t!=="number")return t.al()
s=b.b
if(typeof s!=="number")return s.al()
r=this.c
if(typeof r!=="number")return r.al()
q=b.c
if(typeof q!=="number")return q.al()
p=this.d
if(typeof p!=="number")return p.al()
o=b.d
if(typeof o!=="number")return o.al()
n=this.a
if(typeof n!=="number")return n.al()
m=b.a
if(typeof m!=="number")return m.al()
return A.t_(t/255*(s/255),r/255*(q/255),p/255*(o/255),n/255*(m/255))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.al()
s=this.c
if(typeof s!=="number")return s.al()
r=this.d
if(typeof r!=="number")return r.al()
q=this.a
if(typeof q!=="number")return q.al()
return A.t_(t/255*b,s/255*b,r/255*b,q/255)}throw H.k("Cannot multiply a Colour by ["+H.y(t.gaa(b))+" "+H.y(b)+"]. Only Colour, double and int are valid.")},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.k("Colour index out of range: "+H.y(b))},
i:function(a,b,c){var t,s
t=J.dC(b)
if(t.a1(b,0)||t.aF(b,3))throw H.k("Colour index out of range: "+H.y(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.R(b,0)){this.b=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else if(t.R(b,1)){this.c=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else if(t.R(b,2)){this.d=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ab(c,0,255)
else if(t.R(b,0)){this.b=C.a.ab(J.ko(J.rL(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.R(b,1)){this.c=C.a.ab(J.ko(J.rL(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kj(c)
if(t.R(b,2)){this.d=C.a.ab(J.ko(s.at(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ab(J.ko(s.at(c,255)),0,255)}},
eP:function(a,b,c,d){this.b=C.d.ab(C.d.ab(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ab(C.d.ab(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ab(C.d.ab(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ab(J.rM(d,0,255),0,255)}}
A.ri.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.B]}}}
A.mX.prototype={
$1:function(a){return this.a.ei(a)},
$S:function(){return{func:1,args:[,]}}}
A.mV.prototype={
$1:function(a){this.a.P(0,a).b3(this.b.ghJ())},
$S:function(){return{func:1,args:[,]}}}
A.mW.prototype={
$1:function(a){this.a.fW(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.mY.prototype={
$1:function(a){return this.a.aC(0,this.b)},
$S:function(){return{func:1,args:[W.U]}}}
F.hz.prototype={
A:function(a){return this.b}}
F.fl.prototype={
b1:function(a,b){F.EX(a).$1("("+this.c+")["+H.y(C.b.gbb(a.b.split(".")))+"]: "+H.y(b))},
cK:function(a,b){this.b1(C.h,b)},
bY:function(a){},
gG:function(a){return this.c}}
F.u2.prototype={}
O.rF.prototype={
$1:function(a){return H.y(a.aU(1))+" = "+H.y(a.aU(2))+C.c.at("../",this.a)},
$S:function(){return{func:1,args:[P.d5]}}}
O.rG.prototype={
$0:function(){var t=document
J.vc(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.t,null)
t=H.eU(t.querySelector("#voidButton"),"$isf0")
t.toString
W.ef(t,"click",new O.rE(),!1,W.ue)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.eV("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rE.prototype={
$1:function(a){return O.HG()},
$S:function(){return{func:1,args:[W.U]}}}
R.hk.prototype={}
R.ul.prototype={}
R.uk.prototype={}
A.ny.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.U(0,b)?t.n(0,b):$.$get$uj()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.U(0,b)?t.n(0,b):$.$get$uj()}throw H.k(P.dG(b,"'name' should be a String name or int id only",null))},
gS:function(a){var t=this.a
t=t.gc6(t)
return new H.jy(null,J.cT(t.a),t.b,[H.T(t,0),H.T(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.U(0,b))this.ae(0,b)
s=this.fw()
if(typeof s!=="number")return s.au()
if(s>=256)throw H.k(P.dG(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
ae:function(a,b){var t,s,r
t=this.a
if(!t.U(0,b))return
s=this.c
r=s.n(0,b)
t.ae(0,b)
this.b.ae(0,r)
s.ae(0,b)
this.d.ae(0,r)},
fw:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.U(0,s))return s;++s}}}
A.jG.prototype={
$aso:function(){return[A.dJ]},
$iso:1}
Q.jH.prototype={}
A.hN.prototype={
bA:function(a){if(a===0)return 0
return this.fz(a)},
hA:function(){return this.bA(4294967295)},
fz:function(a){var t,s
t=this.a
if(a>4294967295){s=t.c1()
this.b=C.d.bC(s*4294967295)
return C.d.ak(s*a)}else{s=t.bA(a)
this.b=s
return s}},
c9:function(a){var t=a==null
this.a=t?C.K:P.Gv(a)
if(!t)this.b=J.eg(a,1)},
hH:function(a,b){var t=J.be(a)
if(t.gX(a))return
if(!!t.$iscC)return t.as(a,this.a.c1())
return t.T(a,this.bA(t.gm(a)))},
eh:function(a){return this.hH(a,!0)}}
Y.dT.prototype={
cC:function(a){var t,s
if(this.b!=null)throw H.k("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bl(0,$.am,null,t)
this.c.push(new P.e_(s,t))
return s},
ei:function(a){var t,s,r
if(this.b!=null)throw H.k("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bH)(t),++r)t[r].aC(0,this.b)
C.b.sm(t,0)}}
V.ln.prototype={
$4:function(a,b,c,d){return V.zf(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bh,P.bh,O.cY]}}}
V.lm.prototype={
$4:function(a,b,c,d){return V.ze(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.C,P.C,O.cY]}}}
V.ll.prototype={
$4:function(a,b,c,d){return V.zb(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bh,P.bh,O.cY]}}}
V.lk.prototype={
$4:function(a,b,c,d){return V.za(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.C,P.C,O.cY]}}}
O.cY.prototype={
hP:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.a
s=this.b
for(r=this.x,q=r.length,p=s,o=t,n=-1,m=-1,l=null,k=0;k<t;++k)for(j=0;j<s;++j){l=j*t+k
if(l>=q)return H.w(r,l)
if(r[l]!==0){if(k<o)o=k
else if(k>n)n=k
if(j<p)p=j
else if(j>m)m=j}}i=Math.max(0,n-o+1)
h=Math.max(0,m-p+1)
this.c=o
this.d=p
this.e=i
this.f=h},
i2:function(a,b,c,d){var t,s,r,q,p
t=J.aS(d)
s=0
while(!0){r=t.gea(d)
if(typeof r!=="number")return H.a8(r)
if(!(s<r))break
q=(C.a.da(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.w(r,q)
r[q]=p;++s}}}
D.op.prototype={
$1:function(a){return J.va(a)},
$S:function(){return{func:1,args:[D.cl]}}}
D.oq.prototype={
$1:function(a){return a},
$S:function(){return{func:1,args:[D.cl]}}}
D.or.prototype={
$1:function(a){return a.ghI()},
$S:function(){return{func:1,args:[D.cl]}}}
D.cl.prototype={
A:function(a){return this.a},
gG:function(a){return this.a},
ghI:function(){return this.d}}
D.jZ.prototype={}
D.nY.prototype={}
B.oY.prototype={
hG:function(a,b){var t
if(!this.d)this.hN()
t=this.dt(a)
if(t==null){$.$get$fx().bY("Root list '"+a+"' not found")
return"["+a+"]"}return this.dI(J.yg(t,b),P.bZ(P.B,B.d1))},
hF:function(a){return this.hG(a,null)},
bg:function(a){var t=0,s=P.bp(),r,q=this,p,o,n,m
var $async$bg=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:p=q.a
if(p.ac(0,a)){p=$.$get$fx()
H.y(a)
p.toString
t=1
break}p.h(0,a)
t=3
return P.cy(A.e9("wordlists/"+H.y(a)+".words",!1,!1,null),$async$bg)
case 3:o=c
q.b.bn(0,o.ghw())
p=o.a,n=p.length,m=0
case 4:if(!(m<p.length)){t=6
break}t=7
return P.cy(q.bg(p[m]),$async$bg)
case 7:case 5:p.length===n||(0,H.bH)(p),++m
t=4
break
case 6:q.d=!1
case 1:return P.bv(r,s)}})
return P.bw($async$bg,s)},
hN:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
$.$get$fx().bY("Processing word lists")
this.d=!0
t=this.c
t.b9(0)
for(s=this.b,r=s.gax(s),r=r.gS(r);r.F();){q=r.gM()
p=B.Gi(s.n(0,q))
t.i(0,q,p)
for(o=p.d,n=o.gax(o),n=n.gS(n),m=[H.ao(p,"aM",0)];n.F();){l=n.gM()
for(k=new H.dQ(p,p.gm(p),0,null,m);k.F();){j=k.d
if(!j.gbS().U(0,l)){i=o.n(0,l)
j.a.i(0,l,i)}}}}for(s=t.gax(t),s=s.gS(s);s.F();){p=t.n(0,s.gM())
p.hM(t)
for(r=new H.dQ(p,p.gm(p),0,null,[H.ao(p,"aM",0)]),o=p.d;r.F();){h=r.d
for(n=o.gax(o),n=n.gS(n);n.F();){l=n.gM()
if(!h.gbS().U(0,l))h.a.i(0,l,o.n(0,l))}for(n=h.gbS(),n=n.gax(n),n=n.gS(n);n.F();){g=n.gM()
m=h.a
m.i(0,g,J.rQ(m.n(0,g),$.$get$wW(),new B.p_(h)))}}}},
dt:function(a){var t,s
t=this.c
if(!t.U(0,a)){$.$get$fx().bY("List '"+H.y(a)+"' not found")
return}s=t.n(0,a)
return this.e.eh(s)},
dI:function(a,b){return J.rQ(a,$.$get$wV(),new B.oZ(this,b))}}
B.p_.prototype={
$1:function(a){var t,s
t=a.aU(1)
s=this.a
if(!s.a.U(0,t))return"["+H.y(t)+"]"
return s.a.n(0,t)},
$S:function(){return{func:1,args:[P.d5]}}}
B.oZ.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=a.aU(1)
s=$.$get$wX().aP(0,t)
s=H.dk(s,B.ib(),H.ao(s,"o",0),null)
r=P.cW(s,!0,H.ao(s,"o",0))
if(0>=r.length)return H.w(r,0)
q=J.e2(r[0],"@")
s=q.length
p=s>1?q[1]:null
o=this.a
if(0>=s)return H.w(q,0)
n=o.dt(q[0])
s=r.length
if(s>1){for(s=this.b,m=n,l=1;k=r.length,l<k;++l){q=J.e2(r[l],"@")
if(0>=q.length)return H.w(q,0)
if(J.aY(q[0],"var")){if(q.length<2)continue
j=q[1]
if(s.U(0,j))m=s.n(0,j)
else s.i(0,j,m)}}s=k}else m=n
if(m==null){if(0>=s)return H.w(r,0)
return"["+H.y(r[0])+"]"}s=J.aS(m)
i=s.as(m,p)
if(i==null){$.$get$fx().bY("Missing variant '"+H.y(p)+"' for word '"+H.y(m)+"', falling back to base")
i=s.bj(m)}return o.dI(i,this.b)},
$S:function(){return{func:1,args:[P.d5]}}}
B.d1.prototype={
as:function(a,b){if(b==null)b="MAIN"
if(this.a.U(0,b))return this.a.n(0,b)
return},
bj:function(a){return this.as(a,null)},
A:function(a){return"[Word: "+H.y(this.bj(0))+"]"},
gbS:function(){return this.a}}
B.eM.prototype={
A:function(a){return"WordList '"+H.y(this.e)+"': "+this.eM(0)},
ej:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
if(this.f)return
this.f=!0
b=P.a3(null,null,null,B.eM)
b.h(0,this)
for(t=this.c,s=t.gax(t),s=s.gS(s),r=this.e;s.F();){q=s.gM()
if(a.U(0,q)){p=a.n(0,q)
if(b.ac(0,p)){$.$get$fx().b1(C.i,"Include loop detected in list '"+H.y(r)+"', already visited '"+H.y(p.e)+"', ignoring")
continue}p.ej(a,b)}}for(s=t.gax(t),s=s.gS(s),r=[H.ao(this,"cC",0)];s.F();){q=s.gM()
if(!a.U(0,q))continue
for(o=a.n(0,q).b,n=o.length,m=0;m<o.length;o.length===n||(0,H.bH)(o),++m){l=o[m]
k=J.aS(l)
j=k.gW(l)
k=J.rL(k.gb6(l),t.n(0,q))
C.b.h(this.b,new Q.h(j,this.k(j,J.rR(k)),r))}}},
hM:function(a){return this.ej(a,null)},
$isp:1,
$asp:function(){return[B.d1]},
$asdZ:function(){return[B.d1]},
$ashY:function(){return[B.d1]},
$ascC:function(){return[B.d1]},
$aso:function(){return[B.d1]},
$ast:function(){return[B.d1]},
gcN:function(){return this.c},
gh2:function(){return this.d},
gG:function(a){return this.e}}
B.i_.prototype={
A:function(a){return"[WordListFile: "+this.b.A(0)+" ]"},
gcN:function(){return this.a},
ghw:function(){return this.b}}
S.fq.prototype={}
S.uK.prototype={}
S.uL.prototype={}
S.uM.prototype={}
S.t8.prototype={}
S.tb.prototype={}
S.rZ.prototype={}
S.uu.prototype={}
S.uO.prototype={}
S.uP.prototype={}
S.kN.prototype={}
S.uo.prototype={}
S.ui.prototype={}
S.mO.prototype={}
S.t3.prototype={}
S.rU.prototype={}
S.l6.prototype={}
S.u3.prototype={}
S.l7.prototype={}
S.nA.prototype={}
S.uB.prototype={}
S.uy.prototype={}
S.uC.prototype={}
S.rT.prototype={}
S.m3.prototype={}
S.kL.prototype={}
S.rY.prototype={}
S.rX.prototype={}
S.up.prototype={}
S.uD.prototype={}
S.uq.prototype={}
S.ta.prototype={}
S.t9.prototype={}
S.uA.prototype={}
S.uz.prototype={}
S.p4.prototype={}
S.uF.prototype={}
S.t0.prototype={}
S.t1.prototype={}
S.uN.prototype={}
S.hB.prototype={}
S.u9.prototype={}
S.ua.prototype={}
S.ub.prototype={}
S.uc.prototype={}
S.uv.prototype={}
S.uw.prototype={}
S.ux.prototype={}
S.u8.prototype={}
S.uf.prototype={}
S.ug.prototype={}
S.to.prototype={}
S.tp.prototype={}
S.tq.prototype={}
S.uh.prototype={}
S.ud.prototype={}
S.rV.prototype={}
S.uH.prototype={}
S.uI.prototype={}
S.uG.prototype={}
Z.tY.prototype={}
Z.tU.prototype={}
Z.tV.prototype={}
Q.cC.prototype={
as:function(a,b){var t,s,r,q,p,o,n
t=this.d1()
s=J.rM(b,0,1)*t
for(r=J.cT(this.gbh()),q=0;r.F();){p=r.gM()
o=J.aS(p)
n=o.gb6(p)
if(typeof n!=="number")return H.a8(n)
q+=n
if(s<=q)return o.gW(p)}return},
d1:function(){var t,s,r
for(t=J.cT(this.gbh()),s=0;t.F();){r=J.ye(t.gM())
if(typeof r!=="number")return H.a8(r)
s+=r}return s},
k:function(a,b){return b},
A:function(a){return J.cK(this.gbh())},
ay:function(a,b){return Q.uR(this,b,H.ao(this,"cC",0),null)},
a0:function(a,b){return Q.uQ(this,!1,!0,null,H.ao(this,"cC",0))},
ap:function(a){return this.a0(a,!0)},
$iso:1,
$aso:null}
Q.dZ.prototype={
as:function(a,b){var t,s,r,q,p,o,n,m,l
t=this.d1()
s=J.rM(b,0,1)*t
for(r=this.b,q=r.length,p=0,o=0;o<r.length;r.length===q||(0,H.bH)(r),++o){n=r[o]
m=J.aS(n)
l=m.gb6(n)
if(typeof l!=="number")return H.a8(l)
p+=l
if(s<=p)return m.gW(n)}return},
gbh:function(){return this.b},
bT:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.rR(c)),[H.ao(this,"cC",0)]))},
h:function(a,b){return this.bT(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return J.v9(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.w(t,b)
t[b]=new Q.h(c,s,[H.ao(this,"cC",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
A:function(a){return P.jr(this.b,"[","]")},
ay:function(a,b){return Q.uR(this,b,H.ao(this,"dZ",0),null)},
a0:function(a,b){return Q.uQ(this,!1,!0,null,H.ao(this,"dZ",0))},
ap:function(a){return this.a0(a,!0)},
cb:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hY.prototype={$ascC:null,$aso:null,$asp:null,$ast:null,$isp:1,$ist:1,$iso:1}
Q.h.prototype={
A:function(a){return"("+H.y(this.a)+" @ "+H.y(this.b)+")"},
gW:function(a){return this.a},
gb6:function(a){return this.b}}
Q.eO.prototype={
gbh:function(){return this.b},
gS:function(a){var t=new Q.py(null,[H.ao(this,"eO",0)])
t.a=J.cT(this.b)
return t},
gm:function(a){return J.c2(this.b)},
A:function(a){return J.cK(this.b)},
ay:function(a,b){return Q.uR(this,b,H.ao(this,"eO",0),null)},
a0:function(a,b){return Q.uQ(this,!1,!0,null,H.ao(this,"eO",0))},
ap:function(a){return this.a0(a,!0)}}
Q.hX.prototype={$ascC:null,$aso:null,$iso:1}
Q.py.prototype={
gM:function(){return J.v9(this.a.gM())},
F:function(){return this.a.F()}}
Q.jW.prototype={
$aseO:function(a,b){return[b]},
$ashX:function(a,b){return[b]},
$ascC:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
Q.pz.prototype={
$1:function(a){var t=J.aS(a)
return new Q.h(this.c.$1(t.gW(a)),t.gb6(a),[this.b])},
$S:function(){return H.eT(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jW")}}
J.f.prototype.eK=J.f.prototype.A
J.hu.prototype.eL=J.hu.prototype.A
P.dn.prototype.eN=P.dn.prototype.bK
P.dn.prototype.eO=P.dn.prototype.bJ
P.aM.prototype.d9=P.aM.prototype.a7
Q.dZ.prototype.eM=Q.dZ.prototype.A;(function installTearOffs(){installTearOff(H.fC.prototype,"ghu",0,0,0,null,["$0"],["c_"],1)
installTearOff(H.dB.prototype,"gex",0,0,0,null,["$1"],["az"],11)
installTearOff(H.eP.prototype,"gh5",0,0,0,null,["$1"],["aY"],11)
installTearOff(H,"xz",1,0,0,null,["$1"],["GW"],8)
installTearOff(P,"GZ",1,0,0,null,["$1"],["Gm"],6)
installTearOff(P,"H_",1,0,0,null,["$1"],["Gn"],6)
installTearOff(P,"H0",1,0,0,null,["$1"],["Go"],6)
installTearOff(P,"xL",1,0,0,null,["$0"],["GV"],1)
installTearOff(P.k2.prototype,"gdX",0,0,0,null,["$2","$1"],["cH","bq"],12)
installTearOff(P.bl.prototype,"gbc",0,0,0,null,["$2","$1"],["an","f7"],12)
var t
installTearOff(t=P.dn.prototype,"gdF",0,0,0,null,["$0"],["bN"],1)
installTearOff(t,"gdG",0,0,0,null,["$0"],["bO"],1)
installTearOff(t=P.i2.prototype,"gdF",0,0,0,null,["$0"],["bN"],1)
installTearOff(t,"gdG",0,0,0,null,["$0"],["bO"],1)
installTearOff(t,"gfj",0,0,0,null,["$1"],["fk"],function(){return H.eT(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"i2")})
installTearOff(t,"gfn",0,0,0,null,["$2"],["fo"],14)
installTearOff(t,"gfl",0,0,0,null,["$0"],["fm"],1)
installTearOff(P.k8.prototype,"gfX",0,1,0,null,["$1"],["ac"],29)
installTearOff(P,"H9",1,0,0,null,["$2"],["yT"],30)
installTearOff(P,"Ha",1,0,0,null,["$1"],["fJ"],4)
installTearOff(t=W.ig.prototype,"gar",0,1,0,null,["$1"],["cK"],4)
installTearOff(t,"ghn",0,0,0,null,["$1"],["e7"],4)
installTearOff(t,"gi_",0,0,0,null,["$1"],["i0"],4)
installTearOff(W.f3.prototype,"gW",0,1,0,null,["$1"],["J"],5)
installTearOff(W.ij.prototype,"gW",0,1,0,null,["$1"],["J"],32)
installTearOff(W.ip.prototype,"gW",0,1,0,null,["$1"],["J"],5)
installTearOff(W.iq.prototype,"gW",0,1,0,null,["$1"],["J"],8)
installTearOff(W.ir.prototype,"gW",0,1,0,null,["$1"],["J"],5)
installTearOff(W.fc.prototype,"gW",0,1,0,null,["$1"],["J"],13)
installTearOff(W.iF.prototype,"gW",0,1,0,null,["$1"],["J"],9)
installTearOff(W.fd.prototype,"gW",0,1,0,null,["$1"],["J"],7)
installTearOff(W.iH.prototype,"gW",0,1,0,null,["$1"],["J"],7)
installTearOff(W.jz.prototype,"gW",0,1,0,null,["$1"],["J"],5)
installTearOff(W.jA.prototype,"gW",0,1,0,null,["$1"],["J"],10)
installTearOff(W.ci.prototype,"gW",0,1,0,null,["$1"],["J"],10)
installTearOff(W.jJ.prototype,"gW",0,1,0,null,["$1"],["J"],15)
installTearOff(W.jM.prototype,"gW",0,1,0,null,["$1"],["J"],9)
installTearOff(W.jO.prototype,"gW",0,1,0,null,["$1"],["J"],16)
installTearOff(W.jP.prototype,"gW",0,1,0,null,["$1"],["J"],17)
installTearOff(W.ck.prototype,"gW",0,1,0,null,["$1"],["J"],18)
installTearOff(W.jT.prototype,"gW",0,1,0,null,["$1"],["J"],19)
installTearOff(W.jU.prototype,"gW",0,1,0,null,["$1"],["J"],20)
installTearOff(W.jV.prototype,"gW",0,1,0,null,["$1"],["J"],21)
installTearOff(W.i0.prototype,"gW",0,1,0,null,["$1"],["J"],22)
installTearOff(W.k3.prototype,"gW",0,1,0,null,["$1"],["J"],33)
installTearOff(W.k7.prototype,"gW",0,1,0,null,["$1"],["J"],24)
installTearOff(W.i5.prototype,"gW",0,1,0,null,["$1"],["J"],25)
installTearOff(W.kb.prototype,"gW",0,1,0,null,["$1"],["J"],26)
installTearOff(W.kd.prototype,"gW",0,1,0,null,["$1"],["J"],27)
installTearOff(P.jQ.prototype,"gW",0,1,0,null,["$1"],["J"],28)
installTearOff(V,"vi",1,0,0,null,["$0"],["Hs"],1)
installTearOff(R,"dS",1,0,0,null,["$1"],["wN"],0)
installTearOff(R,"Fq",1,0,0,null,["$1"],["FG"],0)
installTearOff(R,"Fm",1,0,0,null,["$1"],["Fr"],0)
installTearOff(R,"nU",1,0,0,null,["$1"],["FF"],0)
installTearOff(R,"c_",1,0,0,null,["$1"],["FE"],0)
installTearOff(R,"nT",1,0,0,null,["$1"],["FD"],0)
installTearOff(R,"nS",1,0,0,null,["$1"],["FB"],0)
installTearOff(R,"fs",1,0,0,null,["$1"],["Fz"],0)
installTearOff(R,"d8",1,0,0,null,["$1"],["Fv"],0)
installTearOff(R,"eb",1,0,0,null,["$1"],["Fx"],0)
installTearOff(R,"dR",1,0,0,null,["$1"],["FC"],0)
installTearOff(R,"ut",1,0,0,null,["$1"],["Fw"],0)
installTearOff(R,"Fo",1,0,0,null,["$1"],["Fy"],0)
installTearOff(R,"Fp",1,0,0,null,["$1"],["FA"],0)
installTearOff(R,"A",1,0,0,null,["$1"],["Fs"],0)
installTearOff(R,"Fn",1,0,0,null,["$1"],["Ft"],0)
installTearOff(F.fl.prototype,"gar",0,1,0,null,["$1"],["cK"],4)
installTearOff(O,"Hu",1,0,0,null,["$1"],["Hw"],31)
installTearOff(Y.dT.prototype,"ghJ",0,0,0,null,["$1"],["ei"],function(){return H.eT(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dT")})
installTearOff(V,"HA",1,0,0,null,["$4"],["zd"],3)
installTearOff(V,"Hz",1,0,0,null,["$4"],["zc"],2)
installTearOff(B,"ib",1,0,0,null,["$1"],["GQ"],23)
installTearOff(T,"H4",1,0,0,null,["$4"],["z3"],3)
installTearOff(T,"H3",1,0,0,null,["$4"],["z2"],2)
installTearOff(T,"H2",1,0,0,null,["$4"],["z1"],3)
installTearOff(T,"H1",1,0,0,null,["$4"],["z0"],2)
installTearOff(F,"Hj",1,0,0,null,["$4"],["z9"],3)
installTearOff(F,"Hi",1,0,0,null,["$4"],["z8"],2)
installTearOff(F,"Hh",1,0,0,null,["$4"],["z7"],3)
installTearOff(F,"Hg",1,0,0,null,["$4"],["z6"],2)
installTearOff(F,"Hf",1,0,0,null,["$4"],["z5"],3)
installTearOff(F,"He",1,0,0,null,["$4"],["z4"],2)})();(function inheritance(){inherit(P.ad,null)
var t=P.ad
inherit(H.u_,t)
inherit(J.f,t)
inherit(J.ic,t)
inherit(P.hK,t)
inherit(P.o,t)
inherit(H.dQ,t)
inherit(P.jt,t)
inherit(H.iD,t)
inherit(H.ph,t)
inherit(H.f1,t)
inherit(H.qy,t)
inherit(H.fC,t)
inherit(H.q4,t)
inherit(H.eR,t)
inherit(H.qx,t)
inherit(H.pS,t)
inherit(H.ft,t)
inherit(H.p8,t)
inherit(H.dH,t)
inherit(H.dB,t)
inherit(H.eP,t)
inherit(P.jx,t)
inherit(H.kU,t)
inherit(H.nX,t)
inherit(H.pe,t)
inherit(P.el,t)
inherit(H.hc,t)
inherit(H.kc,t)
inherit(H.dY,t)
inherit(H.v,t)
inherit(H.mP,t)
inherit(H.mR,t)
inherit(H.ht,t)
inherit(H.ka,t)
inherit(H.k0,t)
inherit(H.jS,t)
inherit(H.qR,t)
inherit(P.cF,t)
inherit(P.f2,t)
inherit(P.k2,t)
inherit(P.k6,t)
inherit(P.bl,t)
inherit(P.k1,t)
inherit(P.dm,t)
inherit(P.ot,t)
inherit(P.dn,t)
inherit(P.k4,t)
inherit(P.q_,t)
inherit(P.qB,t)
inherit(P.qP,t)
inherit(P.eX,t)
inherit(P.r3,t)
inherit(P.qo,t)
inherit(P.qq,t)
inherit(P.oc,t)
inherit(P.qv,t)
inherit(P.dA,t)
inherit(P.fj,t)
inherit(P.aM,t)
inherit(P.qW,t)
inherit(P.qw,t)
inherit(P.fX,t)
inherit(P.h_,t)
inherit(P.qY,t)
inherit(P.dc,t)
inherit(P.bI,t)
inherit(P.dK,t)
inherit(P.dr,t)
inherit(P.dL,t)
inherit(P.nu,t)
inherit(P.jR,t)
inherit(P.q9,t)
inherit(P.bO,t)
inherit(P.lq,t)
inherit(P.p,t)
inherit(P.bg,t)
inherit(P.d6,t)
inherit(P.d5,t)
inherit(P.dV,t)
inherit(P.B,t)
inherit(P.cd,t)
inherit(P.eL,t)
inherit(P.kf,t)
inherit(P.pi,t)
inherit(P.qN,t)
inherit(W.ig,t)
inherit(W.jF,t)
inherit(W.ii,t)
inherit(P.kZ,t)
inherit(W.bz,t)
inherit(W.lW,t)
inherit(W.qV,t)
inherit(P.qS,t)
inherit(P.pL,t)
inherit(P.qu,t)
inherit(P.qD,t)
inherit(P.qE,t)
inherit(P.bh,t)
inherit(P.db,t)
inherit(T.fO,t)
inherit(T.de,t)
inherit(T.ho,t)
inherit(T.nw,t)
inherit(T.pH,t)
inherit(T.pI,t)
inherit(T.pJ,t)
inherit(T.pG,t)
inherit(T.md,t)
inherit(T.iI,t)
inherit(B.hp,t)
inherit(N.ac,t)
inherit(L.fP,t)
inherit(A.jG,t)
inherit(O.ca,t)
inherit(T.hP,t)
inherit(M.fW,t)
inherit(X.iu,t)
inherit(X.id,t)
inherit(M.hd,t)
inherit(Z.it,t)
inherit(E.ns,t)
inherit(E.N,t)
inherit(A.a5,t)
inherit(U.b,t)
inherit(Y.dU,t)
inherit(K.cG,t)
inherit(X.F,t)
inherit(G.a0,t)
inherit(A.fV,t)
inherit(B.dt,t)
inherit(B.dg,t)
inherit(A.dJ,t)
inherit(F.hz,t)
inherit(F.fl,t)
inherit(Q.jH,t)
inherit(A.hN,t)
inherit(Y.dT,t)
inherit(O.cY,t)
inherit(D.cl,t)
inherit(B.oY,t)
inherit(B.d1,t)
inherit(Q.cC,t)
inherit(B.i_,t)
inherit(Q.h,t)
t=J.f
inherit(J.mB,t)
inherit(J.mC,t)
inherit(J.hu,t)
inherit(J.ev,t)
inherit(J.fk,t)
inherit(J.ew,t)
inherit(H.fn,t)
inherit(H.ez,t)
inherit(W.aH,t)
inherit(W.cL,t)
inherit(W.f_,t)
inherit(W.kP,t)
inherit(W.h0,t)
inherit(W.kY,t)
inherit(W.bN,t)
inherit(W.iJ,t)
inherit(W.l9,t)
inherit(W.f4,t)
inherit(W.ij,t)
inherit(W.im,t)
inherit(W.lc,t)
inherit(W.io,t)
inherit(W.iK,t)
inherit(W.iq,t)
inherit(W.ir,t)
inherit(W.h5,t)
inherit(W.U,t)
inherit(W.iL,t)
inherit(W.lT,t)
inherit(W.lX,t)
inherit(W.m_,t)
inherit(W.cr,t)
inherit(W.m8,t)
inherit(W.iM,t)
inherit(W.hn,t)
inherit(W.ed,t)
inherit(W.n_,t)
inherit(W.jz,t)
inherit(W.ct,t)
inherit(W.iW,t)
inherit(W.nm,t)
inherit(W.nn,t)
inherit(W.iX,t)
inherit(W.nB,t)
inherit(W.ea,t)
inherit(W.ee,t)
inherit(W.ci,t)
inherit(W.iY,t)
inherit(W.oa,t)
inherit(W.cv,t)
inherit(W.iZ,t)
inherit(W.fv,t)
inherit(W.ck,t)
inherit(W.om,t)
inherit(W.os,t)
inherit(W.oP,t)
inherit(W.cm,t)
inherit(W.j_,t)
inherit(W.p7,t)
inherit(W.cx,t)
inherit(W.j0,t)
inherit(W.fy,t)
inherit(W.jU,t)
inherit(W.pn,t)
inherit(W.po,t)
inherit(W.fz,t)
inherit(W.jV,t)
inherit(W.pV,t)
inherit(W.j1,t)
inherit(W.j2,t)
inherit(W.iN,t)
inherit(W.iO,t)
inherit(W.iP,t)
inherit(W.iQ,t)
inherit(W.r1,t)
inherit(W.r2,t)
inherit(P.mh,t)
inherit(P.nr,t)
inherit(P.d4,t)
inherit(P.iR,t)
inherit(P.d7,t)
inherit(P.iS,t)
inherit(P.nJ,t)
inherit(P.iT,t)
inherit(P.da,t)
inherit(P.iU,t)
inherit(P.pu,t)
inherit(P.fR,t)
inherit(P.ks,t)
inherit(P.nZ,t)
inherit(P.r0,t)
inherit(P.iV,t)
t=J.hu
inherit(J.nH,t)
inherit(J.eJ,t)
inherit(J.ex,t)
inherit(F.u2,t)
inherit(R.hk,t)
inherit(R.ul,t)
inherit(R.uk,t)
inherit(S.fq,t)
inherit(S.uK,t)
inherit(S.uL,t)
inherit(S.uM,t)
inherit(S.t8,t)
inherit(S.tb,t)
inherit(S.rZ,t)
inherit(S.uO,t)
inherit(S.uP,t)
inherit(S.l6,t)
inherit(S.uB,t)
inherit(S.uC,t)
inherit(S.rT,t)
inherit(S.m3,t)
inherit(S.kL,t)
inherit(S.rY,t)
inherit(S.rX,t)
inherit(S.ta,t)
inherit(S.p4,t)
inherit(S.t1,t)
inherit(S.hB,t)
inherit(S.ua,t)
inherit(S.uc,t)
inherit(S.uw,t)
inherit(S.ux,t)
inherit(S.uf,t)
inherit(S.ug,t)
inherit(S.tp,t)
inherit(S.tq,t)
inherit(S.uh,t)
inherit(S.ud,t)
inherit(S.rV,t)
inherit(S.uH,t)
inherit(S.uI,t)
inherit(S.uG,t)
inherit(Z.tY,t)
inherit(Z.tU,t)
inherit(Z.tV,t)
inherit(J.tZ,J.ev)
t=J.fk
inherit(J.jv,t)
inherit(J.ju,t)
inherit(P.jw,P.hK)
t=P.jw
inherit(H.hW,t)
inherit(W.k5,t)
inherit(H.kR,H.hW)
t=P.o
inherit(H.t,t)
inherit(H.hA,t)
inherit(H.hZ,t)
inherit(P.hs,t)
inherit(H.qQ,t)
t=H.t
inherit(H.ey,t)
inherit(H.mQ,t)
inherit(P.qp,t)
inherit(P.eC,t)
t=H.ey
inherit(H.oQ,t)
inherit(H.fm,t)
inherit(P.mT,t)
inherit(H.h4,H.hA)
t=P.jt
inherit(H.jy,t)
inherit(H.jX,t)
inherit(Q.py,t)
t=H.f1
inherit(H.rI,t)
inherit(H.rJ,t)
inherit(H.qt,t)
inherit(H.q5,t)
inherit(H.mm,t)
inherit(H.mn,t)
inherit(H.qA,t)
inherit(H.p9,t)
inherit(H.pa,t)
inherit(H.rK,t)
inherit(H.rx,t)
inherit(H.ry,t)
inherit(H.rz,t)
inherit(H.rA,t)
inherit(H.rB,t)
inherit(H.oU,t)
inherit(H.mF,t)
inherit(H.mE,t)
inherit(H.rt,t)
inherit(H.ru,t)
inherit(H.rv,t)
inherit(P.pP,t)
inherit(P.pO,t)
inherit(P.pQ,t)
inherit(P.pR,t)
inherit(P.r4,t)
inherit(P.r5,t)
inherit(P.rf,t)
inherit(P.rh,t)
inherit(P.m2,t)
inherit(P.m1,t)
inherit(P.qa,t)
inherit(P.qi,t)
inherit(P.qe,t)
inherit(P.qf,t)
inherit(P.qg,t)
inherit(P.qc,t)
inherit(P.qh,t)
inherit(P.qb,t)
inherit(P.ql,t)
inherit(P.qm,t)
inherit(P.qk,t)
inherit(P.qj,t)
inherit(P.ow,t)
inherit(P.ou,t)
inherit(P.ov,t)
inherit(P.ox,t)
inherit(P.oC,t)
inherit(P.oA,t)
inherit(P.oB,t)
inherit(P.oD,t)
inherit(P.oG,t)
inherit(P.oH,t)
inherit(P.oE,t)
inherit(P.oF,t)
inherit(P.oI,t)
inherit(P.oJ,t)
inherit(P.oy,t)
inherit(P.oz,t)
inherit(P.pU,t)
inherit(P.pT,t)
inherit(P.qC,t)
inherit(P.r7,t)
inherit(P.r6,t)
inherit(P.r8,t)
inherit(P.re,t)
inherit(P.qG,t)
inherit(P.qH,t)
inherit(P.qI,t)
inherit(P.qr,t)
inherit(P.rj,t)
inherit(P.n5,t)
inherit(P.r_,t)
inherit(P.qZ,t)
inherit(P.lg,t)
inherit(P.lh,t)
inherit(P.pm,t)
inherit(P.pj,t)
inherit(P.pk,t)
inherit(P.pl,t)
inherit(P.rg,t)
inherit(P.rb,t)
inherit(P.ra,t)
inherit(P.rc,t)
inherit(P.rd,t)
inherit(W.pX,t)
inherit(W.mb,t)
inherit(W.mc,t)
inherit(W.q8,t)
inherit(P.qU,t)
inherit(P.pM,t)
inherit(P.rk,t)
inherit(P.rl,t)
inherit(P.rm,t)
inherit(P.l_,t)
inherit(P.r9,t)
inherit(P.ky,t)
inherit(P.kz,t)
inherit(V.ro,t)
inherit(V.rp,t)
inherit(O.kG,t)
inherit(A.mA,t)
inherit(A.mz,t)
inherit(G.mx,t)
inherit(U.pC,t)
inherit(U.pD,t)
inherit(A.ri,t)
inherit(A.mX,t)
inherit(A.mV,t)
inherit(A.mW,t)
inherit(A.mY,t)
inherit(O.rF,t)
inherit(O.rG,t)
inherit(O.rE,t)
inherit(V.ln,t)
inherit(V.lm,t)
inherit(V.ll,t)
inherit(V.lk,t)
inherit(D.op,t)
inherit(D.oq,t)
inherit(D.or,t)
inherit(B.p_,t)
inherit(B.oZ,t)
inherit(Q.pz,t)
t=H.pS
inherit(H.fD,t)
inherit(H.i7,t)
inherit(P.eK,P.jx)
inherit(H.kV,P.eK)
inherit(H.fZ,H.kU)
inherit(H.kW,H.fZ)
t=P.el
inherit(H.jE,t)
inherit(H.mG,t)
inherit(H.pg,t)
inherit(H.kO,t)
inherit(H.o1,t)
inherit(P.fp,t)
inherit(P.d3,t)
inherit(P.V,t)
inherit(P.eI,t)
inherit(P.dW,t)
inherit(P.bR,t)
inherit(P.l8,t)
t=H.oU
inherit(H.oo,t)
inherit(H.fT,t)
t=P.hs
inherit(H.pN,t)
inherit(T.fN,t)
t=H.ez
inherit(H.ne,t)
inherit(H.jB,t)
t=H.jB
inherit(H.hG,t)
inherit(H.hH,t)
inherit(H.hI,H.hG)
inherit(H.hE,H.hI)
inherit(H.hJ,H.hH)
inherit(H.hF,H.hJ)
t=H.hE
inherit(H.nf,t)
inherit(H.ng,t)
t=H.hF
inherit(H.nh,t)
inherit(H.ni,t)
inherit(H.nj,t)
inherit(H.nk,t)
inherit(H.nl,t)
inherit(H.jC,t)
inherit(H.fo,t)
t=P.k2
inherit(P.e_,t)
inherit(P.ke,t)
t=P.k4
inherit(P.pZ,t)
inherit(P.q0,t)
inherit(P.qO,P.qB)
t=P.dm
inherit(P.i1,t)
inherit(W.q6,t)
inherit(P.i2,P.dn)
inherit(P.qz,P.i1)
inherit(P.qF,P.r3)
inherit(P.k9,H.v)
inherit(P.ob,P.oc)
inherit(P.qs,P.ob)
inherit(P.k8,P.qs)
t=P.fX
inherit(P.kD,t)
inherit(P.lj,t)
t=P.h_
inherit(P.kE,t)
inherit(P.pr,t)
inherit(P.pq,P.lj)
t=P.dr
inherit(P.W,t)
inherit(P.C,t)
t=P.d3
inherit(P.eB,t)
inherit(P.mi,t)
inherit(P.pY,P.kf)
t=W.aH
inherit(W.az,t)
inherit(W.h6,t)
inherit(W.kT,t)
inherit(W.lS,t)
inherit(W.lU,t)
inherit(W.lY,t)
inherit(W.hm,t)
inherit(W.hD,t)
inherit(W.nL,t)
inherit(W.jL,t)
inherit(W.od,t)
inherit(W.eN,t)
inherit(W.cu,t)
inherit(W.h7,t)
inherit(W.cS,t)
inherit(W.cI,t)
inherit(W.h8,t)
inherit(W.ps,t)
inherit(W.px,t)
inherit(W.jY,t)
inherit(W.pE,t)
inherit(W.qM,t)
inherit(P.la,t)
inherit(P.hO,t)
inherit(P.pc,t)
inherit(P.bB,t)
inherit(P.fS,t)
t=W.az
inherit(W.du,t)
inherit(W.ej,t)
inherit(W.ek,t)
inherit(W.il,t)
inherit(W.fA,t)
inherit(W.q1,t)
t=W.du
inherit(W.as,t)
inherit(P.ce,t)
t=W.as
inherit(W.eW,t)
inherit(W.kt,t)
inherit(W.hC,t)
inherit(W.kF,t)
inherit(W.kI,t)
inherit(W.f0,t)
inherit(W.h3,t)
inherit(W.li,t)
inherit(W.lR,t)
inherit(W.iF,t)
inherit(W.me,t)
inherit(W.ff,t)
inherit(W.mk,t)
inherit(W.mI,t)
inherit(W.hw,t)
inherit(W.n4,t)
inherit(W.n8,t)
inherit(W.nq,t)
inherit(W.nv,t)
inherit(W.nz,t)
inherit(W.fu,t)
inherit(W.jM,t)
inherit(W.of,t)
inherit(W.oi,t)
inherit(W.hQ,t)
inherit(W.oW,t)
inherit(W.hU,t)
inherit(W.pb,t)
inherit(W.qn,t)
inherit(W.eZ,W.hC)
inherit(W.h9,W.h6)
inherit(W.kB,W.h9)
t=W.bN
inherit(W.l0,t)
inherit(W.l1,t)
inherit(W.h1,t)
inherit(W.h2,t)
inherit(W.l2,t)
inherit(W.l3,t)
inherit(W.l4,t)
inherit(W.f3,W.iJ)
inherit(W.pW,W.jF)
inherit(W.j3,W.iK)
inherit(W.ip,W.j3)
t=W.U
inherit(W.lo,t)
inherit(W.ok,t)
inherit(W.ol,t)
inherit(W.cg,W.f_)
inherit(W.j4,W.iL)
inherit(W.fc,W.j4)
inherit(W.j5,W.iM)
inherit(W.fd,W.j5)
inherit(W.iH,W.fd)
inherit(W.e8,W.hm)
inherit(W.hv,W.ed)
inherit(W.n9,W.hD)
inherit(W.jf,W.iW)
inherit(W.jA,W.jf)
inherit(W.jg,W.iX)
inherit(W.jD,W.jg)
inherit(W.nG,W.ee)
inherit(W.jh,W.iY)
inherit(W.jJ,W.jh)
inherit(W.oe,W.eN)
inherit(W.ha,W.h7)
inherit(W.jO,W.ha)
inherit(W.ji,W.iZ)
inherit(W.jP,W.ji)
inherit(W.jj,W.j_)
inherit(W.p2,W.jj)
inherit(W.hb,W.h8)
inherit(W.p3,W.hb)
inherit(W.jk,W.j0)
inherit(W.jT,W.jk)
inherit(W.jl,W.j1)
inherit(W.i0,W.jl)
inherit(W.jm,W.j2)
inherit(W.k3,W.jm)
inherit(W.q2,W.io)
inherit(W.j6,W.iN)
inherit(W.k7,W.j6)
inherit(W.j7,W.iO)
inherit(W.i5,W.j7)
inherit(W.j8,W.iP)
inherit(W.kb,W.j8)
inherit(W.j9,W.iQ)
inherit(W.kd,W.j9)
t=P.kZ
inherit(W.q3,t)
inherit(P.kx,t)
inherit(W.eQ,W.q6)
inherit(W.q7,P.ot)
inherit(P.qT,P.qS)
inherit(P.k_,P.pL)
inherit(P.bU,P.qE)
t=P.ce
inherit(P.cs,t)
inherit(P.ei,t)
inherit(P.lr,t)
inherit(P.ls,t)
inherit(P.lt,t)
inherit(P.lu,t)
inherit(P.lv,t)
inherit(P.lw,t)
inherit(P.lx,t)
inherit(P.ly,t)
inherit(P.lz,t)
inherit(P.lA,t)
inherit(P.lB,t)
inherit(P.lC,t)
inherit(P.lD,t)
inherit(P.lE,t)
inherit(P.lF,t)
inherit(P.lG,t)
inherit(P.lV,t)
inherit(P.n6,t)
inherit(P.n7,t)
inherit(P.nE,t)
inherit(P.o7,t)
inherit(P.oT,t)
inherit(P.pt,t)
inherit(P.i3,t)
inherit(P.qJ,t)
inherit(P.qK,t)
inherit(P.qL,t)
t=P.cs
inherit(P.kq,t)
inherit(P.mf,t)
inherit(P.oR,t)
inherit(P.eH,t)
inherit(P.pp,t)
inherit(P.ja,P.iR)
inherit(P.mL,P.ja)
inherit(P.jb,P.iS)
inherit(P.no,P.jb)
inherit(P.jc,P.iT)
inherit(P.oN,P.jc)
inherit(P.p1,P.eH)
inherit(P.jd,P.iU)
inherit(P.pd,P.jd)
t=P.bB
inherit(P.e3,t)
inherit(P.kX,t)
inherit(P.eY,P.e3)
inherit(P.je,P.iV)
inherit(P.jQ,P.je)
t=B.hp
inherit(S.kr,t)
inherit(M.kw,t)
inherit(A.kS,t)
inherit(M.l5,t)
inherit(V.ld,t)
inherit(U.lH,t)
inherit(N.mH,t)
inherit(F.nc,t)
inherit(G.nK,t)
inherit(Q.o0,t)
inherit(N.oh,t)
inherit(D.oV,t)
inherit(V.oX,t)
inherit(F.pF,t)
t=N.ac
inherit(T.lb,t)
inherit(R.nR,t)
t=T.lb
inherit(K.bQ,t)
inherit(S.bC,t)
inherit(T.c0,t)
inherit(M.bt,t)
inherit(A.ny,A.jG)
inherit(L.aT,A.ny)
t=O.ca
inherit(O.ds,t)
inherit(O.is,t)
inherit(O.eG,t)
t=O.ds
inherit(U.kA,t)
inherit(Y.nW,t)
inherit(V.lZ,t)
inherit(Q.mg,t)
inherit(Q.nF,t)
inherit(M.on,t)
inherit(B.pK,t)
t=U.kA
inherit(U.n1,t)
inherit(U.nt,t)
inherit(U.oK,O.is)
t=U.oK
inherit(U.oL,t)
inherit(U.oM,t)
t=T.hP
inherit(O.kC,t)
inherit(Y.m4,t)
inherit(Y.m5,t)
inherit(B.m7,t)
inherit(S.mJ,t)
inherit(Z.n0,t)
inherit(S.n2,t)
inherit(U.n3,t)
inherit(E.nb,t)
inherit(V.nx,t)
inherit(N.nQ,t)
inherit(N.o_,t)
inherit(E.o3,t)
inherit(Y.o5,t)
inherit(L.o6,t)
inherit(S.o9,t)
inherit(Y.og,t)
inherit(R.oS,t)
inherit(U.p5,t)
inherit(E.pw,t)
inherit(M.pA,t)
t=O.eG
inherit(Y.p0,t)
inherit(Y.kM,t)
inherit(Y.np,t)
inherit(U.pB,t)
t=L.fP
inherit(T.kH,t)
inherit(T.kK,t)
inherit(U.le,t)
inherit(Z.lf,t)
inherit(T.m6,t)
inherit(X.m9,t)
inherit(V.mj,t)
inherit(Q.mK,t)
inherit(K.mM,t)
inherit(G.mN,t)
inherit(V.na,t)
inherit(E.nV,t)
inherit(K.o4,t)
inherit(N.oj,t)
inherit(N.p6,t)
inherit(Q.pv,t)
t=S.bC
inherit(S.ie,t)
inherit(S.ma,t)
inherit(E.iG,E.ns)
t=E.N
inherit(E.fQ,t)
inherit(E.kv,t)
inherit(Q.nI,Q.mg)
inherit(U.Q,U.b)
t=R.nR
inherit(R.Z,t)
inherit(R.M,t)
inherit(R.a4,t)
inherit(R.bF,R.a4)
t=Y.dU
inherit(Y.a6,t)
inherit(Y.bV,t)
inherit(Y.P,t)
inherit(Y.ih,t)
inherit(Y.bE,t)
inherit(Y.d0,t)
inherit(Y.kQ,t)
inherit(Y.hL,t)
inherit(Y.iE,t)
inherit(Y.jI,t)
t=Y.bV
inherit(Y.df,t)
inherit(Y.bD,t)
inherit(U.af,A.a5)
t=G.a0
inherit(G.aJ,t)
inherit(G.bJ,t)
inherit(G.d,t)
inherit(G.ae,G.bJ)
t=D.cl
inherit(D.jZ,t)
inherit(D.nY,t)
t=Q.cC
inherit(Q.hY,t)
inherit(Q.hX,t)
inherit(Q.dZ,Q.hY)
inherit(B.eM,Q.dZ)
t=S.fq
inherit(S.uu,t)
inherit(S.kN,t)
inherit(S.mO,t)
inherit(S.u8,t)
inherit(S.to,t)
t=S.kN
inherit(S.uo,t)
inherit(S.ui,t)
t=S.mO
inherit(S.t3,t)
inherit(S.rU,t)
t=S.l6
inherit(S.u3,t)
inherit(S.l7,t)
inherit(S.nA,S.l7)
inherit(S.uy,S.nA)
t=S.kL
inherit(S.up,t)
inherit(S.uz,t)
t=S.m3
inherit(S.uD,t)
inherit(S.uq,t)
inherit(S.t9,t)
inherit(S.uA,t)
t=S.p4
inherit(S.uF,t)
inherit(S.t0,t)
inherit(S.uN,t)
t=S.hB
inherit(S.u9,t)
inherit(S.ub,t)
inherit(S.uv,t)
inherit(Q.eO,Q.hX)
inherit(Q.jW,Q.eO)
mixin(H.hW,H.ph)
mixin(H.hG,P.aM)
mixin(H.hI,H.iD)
mixin(H.hH,P.aM)
mixin(H.hJ,H.iD)
mixin(P.hK,P.aM)
mixin(P.eK,P.qW)
mixin(W.h6,P.aM)
mixin(W.h9,W.bz)
mixin(W.iJ,W.ii)
mixin(W.jF,W.ii)
mixin(W.iK,P.aM)
mixin(W.j3,W.bz)
mixin(W.iL,P.aM)
mixin(W.j4,W.bz)
mixin(W.iM,P.aM)
mixin(W.j5,W.bz)
mixin(W.iW,P.aM)
mixin(W.jf,W.bz)
mixin(W.iX,P.aM)
mixin(W.jg,W.bz)
mixin(W.iY,P.aM)
mixin(W.jh,W.bz)
mixin(W.h7,P.aM)
mixin(W.ha,W.bz)
mixin(W.iZ,P.aM)
mixin(W.ji,W.bz)
mixin(W.j_,P.aM)
mixin(W.jj,W.bz)
mixin(W.h8,P.aM)
mixin(W.hb,W.bz)
mixin(W.j0,P.aM)
mixin(W.jk,W.bz)
mixin(W.j1,P.aM)
mixin(W.jl,W.bz)
mixin(W.j2,P.aM)
mixin(W.jm,W.bz)
mixin(W.iN,P.aM)
mixin(W.j6,W.bz)
mixin(W.iO,P.aM)
mixin(W.j7,W.bz)
mixin(W.iP,P.aM)
mixin(W.j8,W.bz)
mixin(W.iQ,P.aM)
mixin(W.j9,W.bz)
mixin(P.iR,P.aM)
mixin(P.ja,W.bz)
mixin(P.iS,P.aM)
mixin(P.jb,W.bz)
mixin(P.iT,P.aM)
mixin(P.jc,W.bz)
mixin(P.iU,P.aM)
mixin(P.jd,W.bz)
mixin(P.iV,P.aM)
mixin(P.je,W.bz)
mixin(A.jG,P.fj)
mixin(Q.hY,P.aM)
mixin(Q.hX,P.fj)})();(function constants(){C.L=W.e8.prototype
C.M=J.f.prototype
C.b=J.ev.prototype
C.f=J.ju.prototype
C.a=J.jv.prototype
C.d=J.fk.prototype
C.c=J.ew.prototype
C.T=J.ex.prototype
C.q=H.fo.prototype
C.F=J.nH.prototype
C.r=J.eJ.prototype
C.H=new P.kE(!1)
C.G=new P.kD(C.H)
C.j=new W.ig()
C.I=new P.nu()
C.J=new P.q_()
C.K=new P.qu()
C.e=new P.qF()
C.t=new W.qV()
C.p=new P.dL(0)
C.N=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.u=function(hooks) { return hooks; }
C.O=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.P=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.Q=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.v=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.R=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.S=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.w=H.a(makeConstList([127,2047,65535,1114111]),[P.C])
C.x=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.k=makeConstList([0,0,32776,33792,1,10240,0,0])
C.l=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.m=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.U=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.y=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.V=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.W=makeConstList([])
C.Y=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.z=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.A=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.B=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.C=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.D=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.E=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.h=new F.hz(0,"LogLevel.ERROR")
C.i=new F.hz(1,"LogLevel.WARN")
C.Z=new F.hz(3,"LogLevel.VERBOSE")
C.X=H.a(makeConstList([]),[P.B])
C.a_=new H.fZ(0,{},C.X,[P.B,P.B])
C.a0=H.c1("bh")
C.a1=H.c1("HH")
C.n=H.c1("HI")
C.a2=H.c1("HJ")
C.a3=H.c1("HK")
C.a4=H.c1("HM")
C.a5=H.c1("HN")
C.a6=H.c1("HO")
C.a7=H.c1("mD")
C.a8=H.c1("d6")
C.a9=H.c1("B")
C.aa=H.c1("HR")
C.ab=H.c1("HS")
C.ac=H.c1("HT")
C.ad=H.c1("db")
C.ae=H.c1("dc")
C.af=H.c1("W")
C.ag=H.c1("C")
C.ah=H.c1("dr")
C.o=new P.pq(!1)})();(function staticFields(){$.wI="$cachedFunction"
$.wJ="$cachedInvocation"
$.dI=0
$.fU=null
$.vj=null
$.v_=null
$.xI=null
$.xW=null
$.rn=null
$.rw=null
$.v0=null
$.fF=null
$.i8=null
$.i9=null
$.uW=!1
$.am=C.e
$.vz=0
$.vv=null
$.vu=null
$.vt=null
$.vw=null
$.vs=null
$.yH=null
$.yI=null
$.yu=null
$.yv=null
$.yt=null
$.yx=null
$.yD=null
$.yC=null
$.yJ=null
$.yF=null
$.yy=null
$.yB=null
$.yw=null
$.yA=null
$.yG=null
$.yz=null
$.yE=null
$.b1="accent"
$.b3="aspect1"
$.b2="aspect2"
$.bc="shoe1"
$.bb="shoe2"
$.b5="cloak1"
$.b6="cloak2"
$.b4="cloak3"
$.ba="shirt1"
$.b9="shirt2"
$.b8="pants1"
$.b7="pants2"
$.aj=1300
$.j=3
$.n=2
$.H=1
$.z=0.1
$.e6=1
$.cO=-1
$.ti=null
$.e4=null
$.vB=null
$.eo=null
$.fa=null
$.he=null
$.tc=null
$.lL=null
$.tk=null
$.iw=null
$.iv=null
$.vE=null
$.iC=null
$.f7=null
$.dO=null
$.vD=null
$.lJ=null
$.lQ=null
$.er=null
$.zk=null
$.zh=null
$.zj=null
$.vC=null
$.zl=null
$.hj=null
$.f5=null
$.cq=null
$.cV=null
$.eq=null
$.lP=null
$.c9=null
$.c4=null
$.te=null
$.iB=null
$.en=null
$.zi=null
$.f8=null
$.cN=null
$.e5=null
$.hh=null
$.dh=null
$.f9=null
$.c3=null
$.lN=null
$.vA=null
$.aN=null
$.cB=null
$.cU=null
$.cf=null
$.iA=null
$.c5=null
$.dv=null
$.di=null
$.f6=null
$.dM=null
$.dj=null
$.lK=null
$.dx=null
$.hi=null
$.lM=null
$.lI=null
$.cM=null
$.cA=null
$.bd=null
$.em=null
$.ep=null
$.lO=null
$.ix=null
$.hg=null
$.tg=null
$.cp=null
$.tj=null
$.td=null
$.vG=null
$.hf=null
$.cE=null
$.dN=null
$.dw=null
$.fb=null
$.tf=null
$.th=null
$.vF=null
$.iy=null
$.iz=null
$.es=null
$.vH=!1
$.tm=null
$.zm=null
$.vJ=null
$.vL=null
$.zv=null
$.vK=null
$.zt=null
$.zu=null
$.tl=null
$.zq=null
$.zo=null
$.zp=null
$.zr=null
$.zs=null
$.zF=null
$.zy=null
$.zz=null
$.zA=null
$.zB=null
$.zC=null
$.zD=null
$.zE=null
$.zH=null
$.zI=null
$.zJ=null
$.zK=null
$.zL=null
$.zM=null
$.zG=null
$.wC="JACK"
$.F7="PM"
$.F3="JS"
$.F2="HP"
$.Fc="YD"
$.F9="SI"
$.Fa="SU"
$.F4="ME"
$.F8="RB"
$.F0="GN"
$.F5="MP"
$.EZ="AR"
$.F6="PE"
$.F_="DP"
$.Fb="WV"
$.F1="HB"
$.m="PLAYER1TAG"
$.dy="PLAYER2TAG"
$.x="DENIZENTAG"
$.r="CONSORTTAG"
$.L="CONSORTSOUNDTAG"
$.aw="MCGUFFINTAG"
$.ab="TAGPHYSICALMCGUFFIN"
$.bs="TAGWEAPON"
$.FP=null
$.G0=null
$.FL=null
$.FO=null
$.FS=null
$.FX=null
$.FV=null
$.G3=null
$.G2=null
$.FW=null
$.G5=null
$.FR=null
$.G4=null
$.FZ=null
$.FY=null
$.G_=null
$.FN=null
$.FM=null
$.FU=null
$.FT=null
$.FQ=null
$.G1=null
$.xO=!1
$.Hd=!1
$.G6=!1
$.wP=null
$.Ge=13
$.aq=3
$.bL=2
$.aB=1
$.my=0
$.I=1
$.a2=3
$.G=4
$.tR=6
$.tS=7
$.aa=8
$.u=9
$.q=10
$.w2=null
$.eu=null
$.mr=null
$.tN=null
$.tH=null
$.vT=null
$.tx=null
$.tG=null
$.hr=null
$.w0=null
$.wn=null
$.vW=null
$.w1=null
$.ty=null
$.tF=null
$.tP=null
$.wq=null
$.tu=null
$.jp=null
$.jn=null
$.aC=null
$.wg=null
$.tt=null
$.wb=null
$.fi=null
$.vV=null
$.wr=null
$.wo=null
$.wm=null
$.tD=null
$.mq=null
$.fg=null
$.wp=null
$.mo=null
$.tA=null
$.hq=null
$.wk=null
$.dP=null
$.et=null
$.tQ=null
$.wl=null
$.tO=null
$.tL=null
$.tM=null
$.mu=null
$.jo=null
$.Ac=null
$.w4=null
$.wa=null
$.wj=null
$.wi=null
$.tI=null
$.D=null
$.w_=null
$.mp=null
$.bS=null
$.aZ=null
$.bT=null
$.X=null
$.aE=null
$.cc=null
$.K=null
$.O=null
$.av=null
$.aP=null
$.bW=null
$.bj=null
$.bn=null
$.ch=null
$.aR=null
$.br=null
$.bY=null
$.a_=null
$.EA=null
$.at=null
$.aX=null
$.aL=null
$.ag=null
$.cb=null
$.aK=null
$.ap=null
$.bX=null
$.aQ=null
$.ak=null
$.bi=null
$.c6=null
$.aD=null
$.bo=null
$.bm=null
$.a7=null
$.bP=null
$.a9=null
$.bf=null
$.bq=null
$.aI=null
$.aW=null
$.ax=null
$.b_=null
$.aF=null
$.Y=null
$.au=null
$.aA=null
$.aU=null
$.an=null
$.al=null
$.a1=null
$.R=null
$.S=null
$.ah=null
$.aO=null
$.bk=null
$.aV=null
$.Bw=null
$.Ec=null
$.EL=null
$.B1=null
$.E9=null
$.Bx=null
$.vR=null
$.Eo=null
$.Cx=null
$.Bs=null
$.A6=null
$.D7=null
$.tJ=null
$.vX=null
$.Dx=null
$.AZ=null
$.Cg=null
$.AX=null
$.tv=null
$.AI=null
$.BJ=null
$.B6=null
$.Cq=null
$.Ew=null
$.By=null
$.tw=null
$.Cr=null
$.B4=null
$.AO=null
$.wf=null
$.A_=null
$.vS=null
$.C9=null
$.ms=null
$.CM=null
$.CG=null
$.A3=null
$.AR=null
$.DG=null
$.A5=null
$.E8=null
$.Cf=null
$.Bd=null
$.Dr=null
$.E2=null
$.tC=null
$.CB=null
$.Do=null
$.B5=null
$.zT=null
$.Ez=null
$.Cj=null
$.AN=null
$.En=null
$.CP=null
$.AU=null
$.E7=null
$.Bn=null
$.DO=null
$.DP=null
$.A1=null
$.CI=null
$.B7=null
$.Bh=null
$.EP=null
$.mw=null
$.DF=null
$.E5=null
$.mt=null
$.AC=null
$.CZ=null
$.D2=null
$.zZ=null
$.Bm=null
$.E6=null
$.CO=null
$.Eq=null
$.Dt=null
$.D3=null
$.w9=null
$.DS=null
$.EF=null
$.Eb=null
$.BX=null
$.Df=null
$.BY=null
$.DH=null
$.ED=null
$.Cp=null
$.Bj=null
$.BG=null
$.As=null
$.Dp=null
$.BE=null
$.BL=null
$.B9=null
$.DR=null
$.fh=null
$.CT=null
$.w7=null
$.BZ=null
$.BW=null
$.EI=null
$.Ay=null
$.DD=null
$.DE=null
$.DC=null
$.DB=null
$.DZ=null
$.BM=null
$.CJ=null
$.E1=null
$.CA=null
$.CU=null
$.B2=null
$.EC=null
$.CH=null
$.Bp=null
$.Bq=null
$.D1=null
$.EO=null
$.Cd=null
$.EB=null
$.wd=null
$.DN=null
$.Cn=null
$.tK=null
$.C7=null
$.Dh=null
$.Ax=null
$.Bt=null
$.DJ=null
$.CK=null
$.Ev=null
$.wc=null
$.CS=null
$.AE=null
$.B_=null
$.Dd=null
$.Ei=null
$.DI=null
$.ts=null
$.wh=null
$.DU=null
$.EE=null
$.BV=null
$.Ag=null
$.Ap=null
$.Eg=null
$.CW=null
$.Cy=null
$.CX=null
$.Ed=null
$.C8=null
$.A2=null
$.BK=null
$.Cw=null
$.DW=null
$.BD=null
$.Aw=null
$.Dz=null
$.DA=null
$.Et=null
$.DL=null
$.tE=null
$.vY=null
$.AV=null
$.tz=null
$.C2=null
$.w8=null
$.Dj=null
$.CF=null
$.Dv=null
$.tB=null
$.mv=null
$.w6=null
$.vZ=null
$.Bf=null
$.BI=null
$.we=null
$.w3=null
$.AQ=null
$.Ek=null
$.AJ=null
$.D5=null
$.C_=null
$.E0=null
$.Cz=null
$.Ad=null
$.C0=null
$.Bc=null
$.D9=null
$.Ci=null
$.CE=null
$.Co=null
$.Cs=null
$.Dy=null
$.Du=null
$.zW=null
$.Eh=null
$.Dm=null
$.B3=null
$.B8=null
$.BH=null
$.Ee=null
$.BA=null
$.Ck=null
$.Ak=null
$.Bu=null
$.Bb=null
$.CY=null
$.Bk=null
$.jq=null
$.Cm=null
$.vU=null
$.Di=null
$.C1=null
$.BB=null
$.zU=null
$.A0=null
$.CV=null
$.D4=null
$.Ch=null
$.BT=null
$.Ey=null
$.An=null
$.BC=null
$.Cl=null
$.B0=null
$.DY=null
$.AP=null
$.DK=null
$.Al=null
$.Ej=null
$.Cu=null
$.Af=null
$.Ds=null
$.De=null
$.AW=null
$.BN=null
$.AD=null
$.Ef=null
$.C5=null
$.Eu=null
$.AF=null
$.BO=null
$.AG=null
$.AY=null
$.Dl=null
$.AS=null
$.C6=null
$.CL=null
$.Az=null
$.E_=null
$.EK=null
$.DQ=null
$.CC=null
$.DX=null
$.CD=null
$.A8=null
$.zV=null
$.Cv=null
$.Ai=null
$.AH=null
$.A9=null
$.Ae=null
$.CR=null
$.Da=null
$.Em=null
$.C3=null
$.EJ=null
$.Dq=null
$.Dn=null
$.Ca=null
$.C4=null
$.AL=null
$.BR=null
$.Ct=null
$.D_=null
$.DT=null
$.zY=null
$.EG=null
$.Bi=null
$.E3=null
$.Ba=null
$.A7=null
$.AA=null
$.Ar=null
$.EN=null
$.AB=null
$.Bl=null
$.AK=null
$.Es=null
$.DV=null
$.El=null
$.zX=null
$.Dw=null
$.Cb=null
$.Ce=null
$.Ex=null
$.E4=null
$.w5=null
$.Br=null
$.Dc=null
$.EH=null
$.Bv=null
$.Cc=null
$.Av=null
$.BU=null
$.BS=null
$.DM=null
$.Db=null
$.BP=null
$.Aq=null
$.Ea=null
$.D0=null
$.Ep=null
$.EM=null
$.Ab=null
$.Aa=null
$.Am=null
$.Bo=null
$.Dk=null
$.AT=null
$.Dg=null
$.Be=null
$.A4=null
$.Ao=null
$.CQ=null
$.Bg=null
$.D8=null
$.Au=null
$.Bz=null
$.Er=null
$.Ah=null
$.BF=null
$.D6=null
$.At=null
$.BQ=null
$.CN=null
$.Aj=null
$.AM=null
$.xi=4
$.e7="OWNER"
$.wy=!1
$.u7=null
$.xY=""
$.wR=null
$.Ga=null
$.hT=null
$.eE=null
$.G9=null
$.eF=null
$.ec=null
$.d9=null
$.eD=null
$.hR=null
$.hS=null
$.dz=null
$.cw=null
$.wS=!1
$.Gb=null})();(function lazyInitializers(){lazy($,"vq","$get$vq",function(){return H.xR("_$dart_dartClosure")})
lazy($,"u0","$get$u0",function(){return H.xR("_$dart_js")})
lazy($,"vP","$get$vP",function(){return H.zR()})
lazy($,"vQ","$get$vQ",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vz
$.vz=t+1
t="expando$key$"+t}return new P.lq(null,t,[P.C])})
lazy($,"wZ","$get$wZ",function(){return H.dX(H.pf({
toString:function(){return"$receiver$"}}))})
lazy($,"x_","$get$x_",function(){return H.dX(H.pf({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"x0","$get$x0",function(){return H.dX(H.pf(null))})
lazy($,"x1","$get$x1",function(){return H.dX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"x5","$get$x5",function(){return H.dX(H.pf(void 0))})
lazy($,"x6","$get$x6",function(){return H.dX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"x3","$get$x3",function(){return H.dX(H.x4(null))})
lazy($,"x2","$get$x2",function(){return H.dX(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"x8","$get$x8",function(){return H.dX(H.x4(void 0))})
lazy($,"x7","$get$x7",function(){return H.dX(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uS","$get$uS",function(){return P.Gl()})
lazy($,"hl","$get$hl",function(){return P.Gr(null,P.d6)})
lazy($,"ia","$get$ia",function(){return[]})
lazy($,"xk","$get$xk",function(){return H.Fd([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xG","$get$xG",function(){return P.GP()})
lazy($,"vp","$get$vp",function(){return P.d_("^\\S+$",!0,!1)})
lazy($,"c8","$get$c8",function(){return H.a([],[K.bQ])})
lazy($,"ku","$get$ku",function(){return P.bZ(P.C,L.fP)})
lazy($,"vl","$get$vl",function(){return P.d_("[\\/]",!0,!1)})
lazy($,"bM","$get$bM",function(){return H.a([],[S.bC])})
lazy($,"m0","$get$m0",function(){return P.bZ(P.B,Z.it)})
lazy($,"ml","$get$ml",function(){return P.bZ(P.C,B.hp)})
lazy($,"ws","$get$ws",function(){return H.a([],[A.a5])})
lazy($,"wD","$get$wD",function(){return H.a([],[P.B])})
lazy($,"o2","$get$o2",function(){return P.bZ(P.C,T.hP)})
lazy($,"cj","$get$cj",function(){return H.a([],[T.c0])})
lazy($,"bK","$get$bK",function(){return H.a([],[M.bt])})
lazy($,"ai","$get$ai",function(){return H.a([],[U.af])})
lazy($,"wQ","$get$wQ",function(){return P.ww([0,new K.cG("Pixels -> Bytes",T.H4(),T.H3()),1,new K.cG("Pixels -> Packed bits",T.H2(),T.H1()),2,new K.cG("RLE 1 byte",V.t7(1),V.t6(1)),3,new K.cG("RLE 2 bytes",V.t7(2),V.t6(2)),4,new K.cG("RLE 3 bytes",V.t7(3),V.t6(3)),5,new K.cG("RLE packed 1 byte",V.t5(1),V.t4(1)),6,new K.cG("RLE packed 2 bytes",V.t5(2),V.t4(2)),7,new K.cG("RLE packed 3 bytes",V.t5(3),V.t4(3)),8,new K.cG("RLE dynamic",V.HA(),V.Hz()),9,new K.cG("Exponential-Golomb pixels",F.Hj(),F.Hi()),10,new K.cG("Exponential-Golomb run RLE",F.Hh(),F.Hg()),11,new K.cG("Exponential-Golomb run/data RLE",F.Hf(),F.He())],P.C,K.cG)})
lazy($,"c","$get$c",function(){return P.a3(null,null,null,G.a0)})
lazy($,"xg","$get$xg",function(){return P.d_("[\n\r]+",!0,!1)})
lazy($,"xh","$get$xh",function(){return P.d_("( *)(.*)",!0,!1)})
lazy($,"xf","$get$xf",function(){return P.d_("^s*//",!0,!1)})
lazy($,"xe","$get$xe",function(){return P.d_("//",!0,!1)})
lazy($,"cJ","$get$cJ",function(){return new F.fl(!1,!1,"WordListFileFormat")})
lazy($,"xj","$get$xj",function(){return new T.pG(null)})
lazy($,"vg","$get$vg",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cX","$get$cX",function(){return P.bZ(P.B,Y.dT)})
lazy($,"wz","$get$wz",function(){return P.d_("[\\/]",!0,!1)})
lazy($,"u6","$get$u6",function(){return P.bZ(P.B,W.fu)})
lazy($,"uj","$get$uj",function(){return A.fY(255,0,255,255)})
lazy($,"nD","$get$nD",function(){return new F.fl(!1,!1,"Path Utils")})
lazy($,"nC","$get$nC",function(){return P.bZ(P.eL,P.C)})
lazy($,"cH","$get$cH",function(){return H.a([],[D.cl])})
lazy($,"wX","$get$wX",function(){return P.d_("([^\\\\|]|\\\\|)+",!0,!1)})
lazy($,"hV","$get$hV",function(){return P.d_("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fx","$get$fx",function(){return new F.fl(!1,!1,"TextEngine")})
lazy($,"wV","$get$wV",function(){return P.d_("#(.*?)#",!0,!1)})
lazy($,"wW","$get$wW",function(){return P.d_("\\?(.*?)\\?",!0,!1)})
lazy($,"fw","$get$fw",function(){return P.d_("\\\\(?!\\\\)",!0,!1)})
lazy($,"vr","$get$vr",function(){var t={color:16711935}
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
mangledGlobalNames:{C:"int",W:"double",dr:"num",B:"String",dc:"bool",d6:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.dc,args:[[P.p,E.iG]]},{func:1,v:true},{func:1,ret:P.db,args:[P.bh,P.C,P.C,O.cY]},{func:1,ret:P.bh,args:[P.C,P.bh,P.bh,O.cY]},{func:1,v:true,args:[P.ad]},{func:1,ret:P.B,args:[P.C]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.az,args:[P.C]},{func:1,ret:P.B,args:[P.B]},{func:1,ret:W.du,args:[P.C]},{func:1,ret:W.ct,args:[P.C]},{func:1,args:[,]},{func:1,v:true,args:[P.ad],opt:[P.dV]},{func:1,ret:W.cg,args:[P.C]},{func:1,v:true,args:[,P.dV]},{func:1,ret:W.ci,args:[P.C]},{func:1,ret:W.cu,args:[P.C]},{func:1,ret:W.cv,args:[P.C]},{func:1,ret:W.fv,args:[P.C]},{func:1,ret:W.cx,args:[P.C]},{func:1,ret:W.fy,args:[P.C]},{func:1,ret:W.fz,args:[P.C]},{func:1,ret:P.bU,args:[P.C]},{func:1,ret:P.B,args:[P.d5]},{func:1,ret:W.cr,args:[P.C]},{func:1,ret:W.fA,args:[P.C]},{func:1,ret:W.ck,args:[P.C]},{func:1,ret:W.cm,args:[P.C]},{func:1,ret:P.bg,args:[P.C]},{func:1,ret:P.dc,args:[P.ad]},{func:1,ret:P.C,args:[P.bI,P.bI]},{func:1,v:true,args:[P.B]},{func:1,ret:W.f4,args:[P.C]},{func:1,ret:W.bN,args:[P.C]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CacheStorage:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CanvasRenderingContext2D:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceAcceleration:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,DOMPoint:J.f,DOMPointReadOnly:J.f,EffectModel:J.f,Stream:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NodeIterator:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,Range:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCSessionDescription:J.f,mozRTCSessionDescription:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,SyncManager:J.f,TextMetrics:J.f,TreeWalker:J.f,UnderlyingSourceBase:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPoint:J.f,SVGPreserveAspectRatio:J.f,SVGRect:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLRenderingContext:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fn,ArrayBufferView:H.ez,DataView:H.ne,Float32Array:H.nf,Float64Array:H.ng,Int16Array:H.nh,Int32Array:H.ni,Int8Array:H.nj,Uint16Array:H.nk,Uint32Array:H.nl,Uint8ClampedArray:H.jC,CanvasPixelArray:H.jC,Uint8Array:H.fo,HTMLBRElement:W.as,HTMLCanvasElement:W.as,HTMLContentElement:W.as,HTMLDListElement:W.as,HTMLDataListElement:W.as,HTMLDetailsElement:W.as,HTMLDialogElement:W.as,HTMLHRElement:W.as,HTMLHeadElement:W.as,HTMLHeadingElement:W.as,HTMLHtmlElement:W.as,HTMLLIElement:W.as,HTMLLabelElement:W.as,HTMLLegendElement:W.as,HTMLMenuElement:W.as,HTMLMenuItemElement:W.as,HTMLMeterElement:W.as,HTMLModElement:W.as,HTMLOListElement:W.as,HTMLOptGroupElement:W.as,HTMLOptionElement:W.as,HTMLParagraphElement:W.as,HTMLPictureElement:W.as,HTMLPreElement:W.as,HTMLProgressElement:W.as,HTMLQuoteElement:W.as,HTMLShadowElement:W.as,HTMLStyleElement:W.as,HTMLTableCaptionElement:W.as,HTMLTableCellElement:W.as,HTMLTableDataCellElement:W.as,HTMLTableHeaderCellElement:W.as,HTMLTableColElement:W.as,HTMLTableElement:W.as,HTMLTableRowElement:W.as,HTMLTableSectionElement:W.as,HTMLTitleElement:W.as,HTMLUListElement:W.as,HTMLUnknownElement:W.as,HTMLDirectoryElement:W.as,HTMLFontElement:W.as,HTMLFrameElement:W.as,HTMLMarqueeElement:W.as,HTMLElement:W.as,HTMLAnchorElement:W.eW,HTMLAreaElement:W.kt,HTMLAudioElement:W.eZ,AudioTrack:W.cL,AudioTrackList:W.kB,HTMLBaseElement:W.kF,Blob:W.f_,HTMLBodyElement:W.kI,HTMLButtonElement:W.f0,CDATASection:W.ej,CharacterData:W.ej,Comment:W.ej,ProcessingInstruction:W.ej,Text:W.ej,Clients:W.kP,CompositorWorker:W.kT,Credential:W.h0,FederatedCredential:W.h0,PasswordCredential:W.h0,CredentialsContainer:W.kY,CSSFontFaceRule:W.l0,CSSImportRule:W.l1,CSSKeyframeRule:W.h1,MozCSSKeyframeRule:W.h1,WebKitCSSKeyframeRule:W.h1,CSSKeyframesRule:W.h2,MozCSSKeyframesRule:W.h2,WebKitCSSKeyframesRule:W.h2,CSSPageRule:W.l2,CSSCharsetRule:W.bN,CSSGroupingRule:W.bN,CSSMediaRule:W.bN,CSSNamespaceRule:W.bN,CSSSupportsRule:W.bN,CSSRule:W.bN,CSSStyleDeclaration:W.f3,MSStyleCSSProperties:W.f3,CSS2Properties:W.f3,CSSStyleRule:W.l3,CSSViewportRule:W.l4,DataTransfer:W.l9,DataTransferItem:W.f4,DataTransferItemList:W.ij,HTMLDivElement:W.h3,Document:W.ek,HTMLDocument:W.ek,XMLDocument:W.ek,DocumentFragment:W.il,ShadowRoot:W.il,DOMError:W.im,FileError:W.im,DOMException:W.lc,DOMRectReadOnly:W.io,DOMStringList:W.ip,DOMStringMap:W.iq,DOMTokenList:W.ir,Element:W.du,HTMLEmbedElement:W.li,DirectoryEntry:W.h5,Entry:W.h5,FileEntry:W.h5,ErrorEvent:W.lo,AnimationEvent:W.U,AnimationPlayerEvent:W.U,ApplicationCacheErrorEvent:W.U,AutocompleteErrorEvent:W.U,BeforeInstallPromptEvent:W.U,BeforeUnloadEvent:W.U,BlobEvent:W.U,ClipboardEvent:W.U,CloseEvent:W.U,CompositionEvent:W.U,CustomEvent:W.U,DeviceLightEvent:W.U,DeviceMotionEvent:W.U,DeviceOrientationEvent:W.U,ExtendableEvent:W.U,ExtendableMessageEvent:W.U,FetchEvent:W.U,FocusEvent:W.U,FontFaceSetLoadEvent:W.U,GamepadEvent:W.U,GeofencingEvent:W.U,HashChangeEvent:W.U,InstallEvent:W.U,KeyboardEvent:W.U,MediaEncryptedEvent:W.U,MediaKeyMessageEvent:W.U,MediaQueryListEvent:W.U,MediaStreamEvent:W.U,MediaStreamTrackEvent:W.U,MessageEvent:W.U,MIDIConnectionEvent:W.U,MIDIMessageEvent:W.U,MouseEvent:W.U,DragEvent:W.U,NotificationEvent:W.U,PageTransitionEvent:W.U,PointerEvent:W.U,PopStateEvent:W.U,PresentationConnectionAvailableEvent:W.U,PresentationConnectionCloseEvent:W.U,ProgressEvent:W.U,PromiseRejectionEvent:W.U,PushEvent:W.U,RelatedEvent:W.U,RTCDataChannelEvent:W.U,RTCDTMFToneChangeEvent:W.U,RTCIceCandidateEvent:W.U,RTCPeerConnectionIceEvent:W.U,SecurityPolicyViolationEvent:W.U,ServicePortConnectEvent:W.U,ServiceWorkerMessageEvent:W.U,SpeechRecognitionEvent:W.U,StorageEvent:W.U,SyncEvent:W.U,TextEvent:W.U,TouchEvent:W.U,TrackEvent:W.U,TransitionEvent:W.U,WebKitTransitionEvent:W.U,UIEvent:W.U,WheelEvent:W.U,ResourceProgressEvent:W.U,USBConnectionEvent:W.U,IDBVersionChangeEvent:W.U,SVGZoomEvent:W.U,AudioProcessingEvent:W.U,OfflineAudioCompletionEvent:W.U,WebGLContextEvent:W.U,Event:W.U,InputEvent:W.U,Animation:W.aH,ApplicationCache:W.aH,DOMApplicationCache:W.aH,OfflineResourceList:W.aH,BatteryManager:W.aH,CanvasCaptureMediaStreamTrack:W.aH,CrossOriginServiceWorkerClient:W.aH,EventSource:W.aH,MediaKeySession:W.aH,MediaQueryList:W.aH,MediaRecorder:W.aH,MediaSource:W.aH,MediaStream:W.aH,MediaStreamTrack:W.aH,MessagePort:W.aH,MIDIAccess:W.aH,NetworkInformation:W.aH,Notification:W.aH,Performance:W.aH,PermissionStatus:W.aH,PresentationAvailability:W.aH,PresentationReceiver:W.aH,PresentationRequest:W.aH,RTCDTMFSender:W.aH,RTCPeerConnection:W.aH,webkitRTCPeerConnection:W.aH,mozRTCPeerConnection:W.aH,ScreenOrientation:W.aH,ServicePortCollection:W.aH,ServiceWorkerContainer:W.aH,ServiceWorkerRegistration:W.aH,SpeechRecognition:W.aH,SpeechSynthesis:W.aH,SpeechSynthesisUtterance:W.aH,WorkerPerformance:W.aH,BluetoothDevice:W.aH,BluetoothRemoteGATTCharacteristic:W.aH,USB:W.aH,EventTarget:W.aH,HTMLFieldSetElement:W.lR,File:W.cg,FileList:W.fc,FileReader:W.lS,DOMFileSystem:W.lT,FileWriter:W.lU,FontFace:W.lX,FontFaceSet:W.lY,FormData:W.m_,HTMLFormElement:W.iF,Gamepad:W.cr,History:W.m8,HTMLOptionsCollection:W.fd,HTMLCollection:W.fd,HTMLFormControlsCollection:W.iH,XMLHttpRequest:W.e8,XMLHttpRequestUpload:W.hm,XMLHttpRequestEventTarget:W.hm,HTMLIFrameElement:W.me,ImageData:W.hn,HTMLImageElement:W.ff,HTMLInputElement:W.mk,HTMLKeygenElement:W.mI,CalcLength:W.hv,LengthValue:W.hv,SimpleLength:W.hv,HTMLLinkElement:W.hw,Location:W.n_,HTMLMapElement:W.n4,HTMLVideoElement:W.hC,HTMLMediaElement:W.hC,MediaList:W.jz,HTMLMetaElement:W.n8,MIDIOutput:W.n9,MIDIInput:W.hD,MIDIPort:W.hD,MimeType:W.ct,MimeTypeArray:W.jA,Navigator:W.nm,NavigatorUserMediaError:W.nn,Node:W.az,NodeList:W.jD,RadioNodeList:W.jD,HTMLObjectElement:W.nq,HTMLOutputElement:W.nv,HTMLParamElement:W.nz,Path2D:W.nB,PerformanceCompositeTiming:W.ea,PerformanceEntry:W.ea,PerformanceMark:W.ea,PerformanceMeasure:W.ea,PerformanceRenderTiming:W.ea,PerformanceResourceTiming:W.ea,Perspective:W.nG,Plugin:W.ci,PluginArray:W.jJ,PresentationConnection:W.nL,RTCDataChannel:W.jL,DataChannel:W.jL,HTMLScriptElement:W.fu,HTMLSelectElement:W.jM,ServicePort:W.oa,SharedWorker:W.od,SharedWorkerGlobalScope:W.oe,HTMLSlotElement:W.of,SourceBuffer:W.cu,SourceBufferList:W.jO,HTMLSourceElement:W.oi,HTMLSpanElement:W.hQ,SpeechGrammar:W.cv,SpeechGrammarList:W.jP,SpeechRecognitionAlternative:W.fv,SpeechRecognitionError:W.ok,SpeechRecognitionResult:W.ck,SpeechSynthesisEvent:W.ol,SpeechSynthesisVoice:W.om,Storage:W.os,StylePropertyMap:W.oP,CSSStyleSheet:W.cm,StyleSheet:W.cm,KeywordValue:W.ed,NumberValue:W.ed,PositionValue:W.ed,TransformValue:W.ed,StyleValue:W.ed,HTMLTemplateElement:W.oW,HTMLTextAreaElement:W.hU,TextTrack:W.cS,TextTrackCue:W.cI,VTTCue:W.cI,TextTrackCueList:W.p2,TextTrackList:W.p3,TimeRanges:W.p7,Touch:W.cx,TouchList:W.jT,TrackDefault:W.fy,TrackDefaultList:W.jU,HTMLTrackElement:W.pb,Matrix:W.ee,Rotation:W.ee,Skew:W.ee,Translation:W.ee,TransformComponent:W.ee,URL:W.pn,URLSearchParams:W.po,VideoTrackList:W.ps,VTTRegion:W.fz,VTTRegionList:W.jV,WebSocket:W.px,Window:W.jY,DOMWindow:W.jY,Worker:W.pE,CompositorWorkerGlobalScope:W.eN,DedicatedWorkerGlobalScope:W.eN,ServiceWorkerGlobalScope:W.eN,WorkerGlobalScope:W.eN,Attr:W.fA,ClientRect:W.pV,ClientRectList:W.i0,DOMRectList:W.i0,CSSRuleList:W.k3,DocumentType:W.q1,DOMRect:W.q2,GamepadList:W.k7,HTMLFrameSetElement:W.qn,NamedNodeMap:W.i5,MozNamedAttrMap:W.i5,ServiceWorker:W.qM,SpeechRecognitionResultList:W.kb,StyleSheetList:W.kd,WorkerLocation:W.r1,WorkerNavigator:W.r2,IDBDatabase:P.la,IDBIndex:P.mh,IDBObjectStore:P.nr,IDBOpenDBRequest:P.hO,IDBVersionChangeRequest:P.hO,IDBRequest:P.hO,IDBTransaction:P.pc,SVGAElement:P.kq,SVGAnimateElement:P.ei,SVGAnimateMotionElement:P.ei,SVGAnimateTransformElement:P.ei,SVGAnimationElement:P.ei,SVGSetElement:P.ei,SVGFEBlendElement:P.lr,SVGFEColorMatrixElement:P.ls,SVGFEComponentTransferElement:P.lt,SVGFECompositeElement:P.lu,SVGFEConvolveMatrixElement:P.lv,SVGFEDiffuseLightingElement:P.lw,SVGFEDisplacementMapElement:P.lx,SVGFEFloodElement:P.ly,SVGFEGaussianBlurElement:P.lz,SVGFEImageElement:P.lA,SVGFEMergeElement:P.lB,SVGFEMorphologyElement:P.lC,SVGFEOffsetElement:P.lD,SVGFESpecularLightingElement:P.lE,SVGFETileElement:P.lF,SVGFETurbulenceElement:P.lG,SVGFilterElement:P.lV,SVGCircleElement:P.cs,SVGClipPathElement:P.cs,SVGDefsElement:P.cs,SVGEllipseElement:P.cs,SVGForeignObjectElement:P.cs,SVGGElement:P.cs,SVGGeometryElement:P.cs,SVGLineElement:P.cs,SVGPathElement:P.cs,SVGPolygonElement:P.cs,SVGPolylineElement:P.cs,SVGRectElement:P.cs,SVGSwitchElement:P.cs,SVGGraphicsElement:P.cs,SVGImageElement:P.mf,SVGLength:P.d4,SVGLengthList:P.mL,SVGMarkerElement:P.n6,SVGMaskElement:P.n7,SVGNumber:P.d7,SVGNumberList:P.no,SVGPatternElement:P.nE,SVGPointList:P.nJ,SVGScriptElement:P.o7,SVGStringList:P.oN,SVGDescElement:P.ce,SVGDiscardElement:P.ce,SVGFEDistantLightElement:P.ce,SVGFEFuncAElement:P.ce,SVGFEFuncBElement:P.ce,SVGFEFuncGElement:P.ce,SVGFEFuncRElement:P.ce,SVGFEMergeNodeElement:P.ce,SVGFEPointLightElement:P.ce,SVGFESpotLightElement:P.ce,SVGMetadataElement:P.ce,SVGStopElement:P.ce,SVGStyleElement:P.ce,SVGTitleElement:P.ce,SVGComponentTransferFunctionElement:P.ce,SVGElement:P.ce,SVGSVGElement:P.oR,SVGSymbolElement:P.oT,SVGTSpanElement:P.eH,SVGTextElement:P.eH,SVGTextPositioningElement:P.eH,SVGTextContentElement:P.eH,SVGTextPathElement:P.p1,SVGTransform:P.da,SVGTransformList:P.pd,SVGUseElement:P.pp,SVGViewElement:P.pt,SVGViewSpec:P.pu,SVGLinearGradientElement:P.i3,SVGRadialGradientElement:P.i3,SVGGradientElement:P.i3,SVGCursorElement:P.qJ,SVGFEDropShadowElement:P.qK,SVGMPathElement:P.qL,AudioBuffer:P.fR,AudioBufferSourceNode:P.eY,AudioContext:P.fS,webkitAudioContext:P.fS,OfflineAudioContext:P.fS,AnalyserNode:P.bB,RealtimeAnalyserNode:P.bB,AudioDestinationNode:P.bB,BiquadFilterNode:P.bB,ChannelMergerNode:P.bB,AudioChannelMerger:P.bB,ChannelSplitterNode:P.bB,AudioChannelSplitter:P.bB,DelayNode:P.bB,DynamicsCompressorNode:P.bB,GainNode:P.bB,AudioGainNode:P.bB,IIRFilterNode:P.bB,MediaStreamAudioDestinationNode:P.bB,PannerNode:P.bB,AudioPannerNode:P.bB,webkitAudioPannerNode:P.bB,ScriptProcessorNode:P.bB,JavaScriptAudioNode:P.bB,StereoPannerNode:P.bB,WaveShaperNode:P.bB,AudioNode:P.bB,MediaElementAudioSourceNode:P.e3,MediaStreamAudioSourceNode:P.e3,OscillatorNode:P.e3,Oscillator:P.e3,AudioSourceNode:P.e3,ConvolverNode:P.kX,WebGLActiveInfo:P.ks,WebGL2RenderingContext:P.nZ,WebGL2RenderingContextBase:P.r0,SQLResultSetRowList:P.jQ})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,Clients:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CredentialsContainer:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,FormData:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSourceElement:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,StylePropertyMap:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,HTMLTrackElement:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,URLSearchParams:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jB.$nativeSuperclassTag="ArrayBufferView"
H.hG.$nativeSuperclassTag="ArrayBufferView"
H.hI.$nativeSuperclassTag="ArrayBufferView"
H.hE.$nativeSuperclassTag="ArrayBufferView"
H.hH.$nativeSuperclassTag="ArrayBufferView"
H.hJ.$nativeSuperclassTag="ArrayBufferView"
H.hF.$nativeSuperclassTag="ArrayBufferView"
W.h6.$nativeSuperclassTag="EventTarget"
W.h9.$nativeSuperclassTag="EventTarget"
W.h7.$nativeSuperclassTag="EventTarget"
W.ha.$nativeSuperclassTag="EventTarget"
W.h8.$nativeSuperclassTag="EventTarget"
W.hb.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xZ(V.vi(),b)},[])
else (function(b){H.xZ(V.vi(),b)})([])})})()
//# sourceMappingURL=BioController.dart.js.map
