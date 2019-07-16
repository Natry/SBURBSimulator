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
a[c]=function(){a[c]=function(){H.rq(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.lY"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.lY"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.lY(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={lF:function lF(a){this.a=a},
dE:function(a,b,c,d){if(!!J.ai(a).$isL)return new H.em(a,b,[c,d])
return new H.dD(a,b,[c,d])},
lD:function(){return new P.cj("No element")},
pv:function(){return new P.cj("Too many elements")},
pu:function(){return new P.cj("Too few elements")},
fb:function(a,b,c,d){if(c-b<=32)H.qA(a,b,c,d)
else H.qz(a,b,c,d)},
qA:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bf(a);t<=c;++t){r=s.p(a,t)
q=t
while(!0){if(!(q>b&&J.bp(d.$2(s.p(a,q-1),r),0)))break
p=q-1
s.h(a,q,s.p(a,p))
q=p}s.h(a,q,r)}},
qz:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.b.ab(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.b.ab(a3+a4,2)
p=q-t
o=q+t
n=J.bf(a2)
m=n.p(a2,s)
l=n.p(a2,p)
k=n.p(a2,q)
j=n.p(a2,o)
i=n.p(a2,r)
if(J.bp(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.bp(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.bp(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.bp(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bp(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.bp(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.bp(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.bp(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bp(a5.$2(j,i),0)){h=i
i=j
j=h}n.h(a2,s,m)
n.h(a2,q,k)
n.h(a2,r,i)
n.h(a2,p,n.p(a2,a3))
n.h(a2,o,n.p(a2,a4))
g=a3+1
f=a4-1
if(J.aO(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.p(a2,e)
c=a5.$2(d,l)
b=J.ai(c)
if(b.P(c,0))continue
if(b.aN(c,0)){if(e!==g){n.h(a2,e,n.p(a2,g))
n.h(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.p(a2,f),l)
b=J.e8(c)
if(b.aM(c,0)){--f
continue}else{a=f-1
if(b.aN(c,0)){n.h(a2,e,n.p(a2,g))
a0=g+1
n.h(a2,g,n.p(a2,f))
n.h(a2,f,d)
f=a
g=a0
break}else{n.h(a2,e,n.p(a2,f))
n.h(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.p(a2,e)
if(J.fx(a5.$2(d,l),0)){if(e!==g){n.h(a2,e,n.p(a2,g))
n.h(a2,g,d)}++g}else if(J.bp(a5.$2(d,j),0))for(;!0;)if(J.bp(a5.$2(n.p(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.fx(a5.$2(n.p(a2,f),l),0)){n.h(a2,e,n.p(a2,g))
a0=g+1
n.h(a2,g,n.p(a2,f))
n.h(a2,f,d)
g=a0}else{n.h(a2,e,n.p(a2,f))
n.h(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.h(a2,a3,n.p(a2,b))
n.h(a2,b,l)
b=f+1
n.h(a2,a4,n.p(a2,b))
n.h(a2,b,j)
H.fb(a2,a3,g-2,a5)
H.fb(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.aO(a5.$2(n.p(a2,g),l),0);)++g
for(;J.aO(a5.$2(n.p(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.p(a2,e)
if(J.aO(a5.$2(d,l),0)){if(e!==g){n.h(a2,e,n.p(a2,g))
n.h(a2,g,d)}++g}else if(J.aO(a5.$2(d,j),0))for(;!0;)if(J.aO(a5.$2(n.p(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.fx(a5.$2(n.p(a2,f),l),0)){n.h(a2,e,n.p(a2,g))
a0=g+1
n.h(a2,g,n.p(a2,f))
n.h(a2,f,d)
g=a0}else{n.h(a2,e,n.p(a2,f))
n.h(a2,f,d)}f=a
break}}H.fb(a2,g,f,a5)}else H.fb(a2,g,f,a5)},
L:function L(){},
cx:function cx(){},
eV:function eV(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dD:function dD(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
em:function em(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eX:function eX(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
d5:function d5(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
bJ:function bJ(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fi:function fi(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eu:function eu(){},
fs:function(a,b){var t=a.b1(b)
if(!u.globalState.d.cy)u.globalState.f.b9()
return t},
nH:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ai(s).$isR)throw H.A(P.mc("Arguments to main must be a List: "+H.t(s)))
u.globalState=new H.kw(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$mD()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.k7(P.lJ(null,H.cI),0)
r=P.P
s.z=new H.l(0,null,null,null,null,null,0,[r,H.da])
s.ch=new H.l(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.kv()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.oT,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.qT)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.bl(null,null,null,r)
p=new H.d8(0,null,!1)
o=new H.da(s,new H.l(0,null,null,null,null,null,0,[r,H.d8]),q,u.createNewIsolate(),p,new H.bR(H.lf()),new H.bR(H.lf()),!1,!1,[],P.bl(null,null,null,null),null,null,!1,!0,P.bl(null,null,null,null))
q.j(0,0)
o.c4(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.de(a,{func:1,args:[,]}))o.b1(new H.lg(t,a))
else if(H.de(a,{func:1,args:[,,]}))o.b1(new H.lh(t,a))
else o.b1(a)
u.globalState.f.b9()},
qT:function(a){var t=P.dC(["command","print","msg",a])
return new H.bL(!0,P.e0(null,P.P)).aj(t)},
oV:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.oW()
return},
oW:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.A(new P.aN("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.A(new P.aN('Cannot extract URI from "'+t+'"'))},
oT:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.cH(!0,[]).aA(b.data)
s=J.bf(t)
switch(s.p(t,"command")){case"start":u.globalState.b=s.p(t,"id")
r=s.p(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.p(t,"args")
o=new H.cH(!0,[]).aA(s.p(t,"msg"))
n=s.p(t,"isSpawnUri")
m=s.p(t,"startPaused")
l=new H.cH(!0,[]).aA(s.p(t,"replyTo"))
s=u.globalState.a++
k=P.P
j=P.bl(null,null,null,k)
i=new H.d8(0,null,!1)
h=new H.da(s,new H.l(0,null,null,null,null,null,0,[k,H.d8]),j,u.createNewIsolate(),i,new H.bR(H.lf()),new H.bR(H.lf()),!1,!1,[],P.bl(null,null,null,null),null,null,!1,!0,P.bl(null,null,null,null))
j.j(0,0)
h.c4(0,i)
u.globalState.f.a.ax(new H.cI(h,new H.hM(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.b9()
break
case"spawn-worker":break
case"message":if(s.p(t,"port")!=null)J.di(s.p(t,"port"),s.p(t,"msg"))
u.globalState.f.b9()
break
case"close":u.globalState.ch.ai(0,$.$get$mE().p(0,a))
a.terminate()
u.globalState.f.b9()
break
case"log":H.oS(s.p(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.dC(["command","print","msg",t])
k=new H.bL(!0,P.e0(null,P.P)).aj(k)
s.toString
self.postMessage(k)}else P.m5(s.p(t,"msg"))
break
case"error":throw H.A(s.p(t,"msg"))}},
oS:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.dC(["command","log","msg",a])
r=new H.bL(!0,P.e0(null,P.P)).aj(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.b0(q)
t=H.bx(q)
s=P.h4(t)
throw H.A(s)}},
oU:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.n2=$.n2+("_"+s)
$.n3=$.n3+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.di(f,["spawned",new H.db(s,r),q,t.r])
r=new H.hN(a,b,c,d,t)
if(e===!0){t.cw(q,q)
u.globalState.f.a.ax(new H.cI(t,r,"start isolate"))}else r.$0()},
qG:function(a,b){var t=new H.jE(!0,!1,null)
t.dj(a,b)
return t},
qW:function(a){return new H.cH(!0,[]).aA(new H.bL(!1,P.e0(null,P.P)).aj(a))},
lg:function lg(a,b){this.a=a
this.b=b},
lh:function lh(a,b){this.a=a
this.b=b},
kw:function kw(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
da:function da(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
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
kr:function kr(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
k8:function k8(a){this.a=a},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(){},
hM:function hM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hN:function hN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jY:function jY(){},
db:function db(b,a){this.b=b
this.a=a},
ky:function ky(a,b){this.a=a
this.b=b},
e3:function e3(b,c,a){this.b=b
this.c=c
this.a=a},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b},
bR:function bR(a){this.a=a},
bL:function bL(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
om:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=a.gaJ()
s=P.bW(t,!0,H.ak(t,"z",0))
t=s.length
q=0
while(!0){p=s.length
if(!(q<p)){r=!0
break}o=s[q]
if(typeof o!=="string"){r=!1
break}p===t||(0,H.bO)(s);++q}if(r){n={}
for(m=!1,l=null,k=0,q=0;q<s.length;s.length===p||(0,H.bO)(s),++q){o=s[q]
j=a.p(0,o)
if(!J.aO(o,"__proto__")){if(!n.hasOwnProperty(o))++k
n[o]=j}else{l=j
m=!0}}if(m)return new H.fT(l,k+1,n,s,[b,c])
return new H.ei(k,n,s,[b,c])}return new H.fS(P.pw(a,null,null),[b,c])},
on:function(){throw H.A(new P.aN("Cannot modify unmodifiable Map"))},
rc:function(a){return u.types[a]},
rj:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ai(a).$isbu},
t:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aP(a)
if(typeof t!=="string")throw H.A(H.bM(a))
return t},
qa:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.j0(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
cy:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
n1:function(a,b){return b.$1(a)},
pO:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.n1(a,c)
if(3>=t.length)return H.U(t,3)
s=t[3]
if(b<2||b>36)throw H.A(P.ch(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.e.c6(q,o)|32)>r)return H.n1(a,c)}return parseInt(a,b)},
n4:function(a){var t,s,r,q,p,o,n,m
t=J.ai(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.v||!!J.ai(a).$iscF){p=C.p(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.c6(q,0)===36)q=C.e.bu(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.m3(H.fw(a),0,null),u.mangledGlobalNames)},
iS:function(a){return"Instance of '"+H.n4(a)+"'"},
lL:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.A(H.bM(a))
return a[b]},
n5:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.A(H.bM(a))
a[b]=c},
df:function(a){throw H.A(H.bM(a))},
U:function(a,b){if(a==null)J.dh(a)
throw H.A(H.aH(a,b))},
aH:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.bQ(!0,b,"index",null)
t=J.dh(a)
if(!(b<0)){if(typeof t!=="number")return H.df(t)
s=b>=t}else s=!0
if(s)return P.ez(b,a,"index",null,t)
return P.j_(b,"index",null)},
bM:function(a){return new P.bQ(!0,a,null,null)},
A:function(a){var t
if(a==null)a=new P.f4()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.nJ})
t.name=""}else t.toString=H.nJ
return t},
nJ:function(){return J.aP(this.dartException)},
aC:function(a){throw H.A(a)},
bO:function(a){throw H.A(new P.bs(a))},
c0:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.jH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
jI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
nh:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
lH:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.i3(a,s,t?null:b.receiver)},
b0:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.lj(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.cs(r,16)&8191)===10)switch(q){case 438:return t.$1(H.lH(H.t(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return t.$1(new H.f3(p,null))}}if(a instanceof TypeError){o=$.$get$nb()
n=$.$get$nc()
m=$.$get$nd()
l=$.$get$ne()
k=$.$get$ni()
j=$.$get$nj()
i=$.$get$ng()
$.$get$nf()
h=$.$get$nl()
g=$.$get$nk()
f=o.ar(s)
if(f!=null)return t.$1(H.lH(s,f))
else{f=n.ar(s)
if(f!=null){f.method="call"
return t.$1(H.lH(s,f))}else{f=m.ar(s)
if(f==null){f=l.ar(s)
if(f==null){f=k.ar(s)
if(f==null){f=j.ar(s)
if(f==null){f=i.ar(s)
if(f==null){f=l.ar(s)
if(f==null){f=h.ar(s)
if(f==null){f=g.ar(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.f3(s,f==null?null:f.method))}}return t.$1(new H.jJ(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.fd()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.bQ(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.fd()
return a},
bx:function(a){var t
if(a==null)return new H.fq(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.fq(a,null)},
rn:function(a){if(a==null||typeof a!='object')return J.bP(a)
else return H.cy(a)},
ra:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
ri:function(a,b,c,d,e,f,g){switch(c){case 0:return H.fs(b,new H.l6(a))
case 1:return H.fs(b,new H.l7(a,d))
case 2:return H.fs(b,new H.l8(a,d,e))
case 3:return H.fs(b,new H.l9(a,d,e,f))
case 4:return H.fs(b,new H.la(a,d,e,f,g))}throw H.A(P.h4("Unsupported number of arguments for wrapped closure"))},
e7:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.ri)
a.$identity=t
return t},
oi:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ai(c).$isR){t.$reflectionInfo=c
r=H.qa(t).r}else r=c
q=d?Object.create(new H.jj().constructor.prototype):Object.create(new H.dj(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.bS
$.bS=J.dg(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.mf(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.rc,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.me:H.ll
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.A("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.mf(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
of:function(a,b,c,d){var t=H.ll
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
mf:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.oh(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.of(s,!q,t,b)
if(s===0){q=$.bS
$.bS=J.dg(q,1)
o="self"+H.t(q)
q="return function(){var "+o+" = this."
p=$.dk
if(p==null){p=H.fM("self")
$.dk=p}return new Function(q+H.t(p)+";return "+o+"."+H.t(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.bS
$.bS=J.dg(q,1)
n+=H.t(q)
q="return function("+n+"){return this."
p=$.dk
if(p==null){p=H.fM("self")
$.dk=p}return new Function(q+H.t(p)+"."+H.t(t)+"("+n+");}")()},
og:function(a,b,c,d){var t,s
t=H.ll
s=H.me
switch(b?-1:a){case 0:throw H.A(new H.j4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
oh:function(a,b){var t,s,r,q,p,o,n,m
t=H.oe()
s=$.md
if(s==null){s=H.fM("receiver")
$.md=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.og(q,!o,r,b)
if(q===1){s="return function(){return this."+H.t(t)+"."+H.t(r)+"(this."+H.t(s)+");"
o=$.bS
$.bS=J.dg(o,1)
return new Function(s+H.t(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.t(t)+"."+H.t(r)+"(this."+H.t(s)+", "+m+");"
o=$.bS
$.bS=J.dg(o,1)
return new Function(s+H.t(o)+"}")()},
lY:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ai(c).$isR){c.fixed$length=Array
t=c}else t=c
return H.oi(a,b,t,!!d,e,f)},
ll:function(a){return a.a},
me:function(a){return a.c},
oe:function(){var t=$.dk
if(t==null){t=H.fM("self")
$.dk=t}return t},
fM:function(a){var t,s,r,q,p
t=new H.dj("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nB:function(a){var t=J.ai(a)
return"$S" in t?t.$S():null},
de:function(a,b){var t
if(a==null)return!1
t=H.nB(a)
return t==null?!1:H.m2(t,b)},
rq:function(a){throw H.A(new P.fW(a))},
lf:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
nC:function(a){return u.getIsolateTag(a)},
aB:function(a){return new H.cl(a,null)},
a:function(a,b){a.$ti=b
return a},
fw:function(a){if(a==null)return
return a.$ti},
nD:function(a,b){return H.m6(a["$as"+H.t(b)],H.fw(a))},
ak:function(a,b,c){var t=H.nD(a,b)
return t==null?null:t[c]},
C:function(a,b){var t=H.fw(a)
return t==null?null:t[b]},
bN:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.m3(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.t(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bN(t,b)
return H.qX(a,b)}return"unknown-reified-type"},
qX:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bN(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bN(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bN(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.r9(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bN(l[j],b)+(" "+H.t(j))}q+="}"}return"("+q+") => "+t},
m3:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.dS("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.S=p+", "
o=a[s]
if(o!=null)q=!1
p=t.S+=H.bN(o,c)}return q?"":"<"+t.A(0)+">"},
l1:function(a){var t,s
if(a instanceof H.cQ){t=H.nB(a)
if(t!=null)return H.bN(t,null)}s=J.ai(a).constructor.builtin$cls
if(a==null)return s
return s+H.m3(a.$ti,0,null)},
m6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
fu:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.fw(a)
s=J.ai(a)
if(s[b]==null)return!1
return H.nz(H.m6(s[d],t),c)},
nz:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.bg(a[s],b[s]))return!1
return!0},
lZ:function(a,b,c){return a.apply(b,H.nD(b,c))},
r7:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="as"||b.builtin$cls==="bE"
if(b==null)return!0
t=H.fw(a)
a=J.ai(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.m2(r.apply(a,null),b)}return H.bg(s,b)},
bg:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="bE")return!0
if('func' in b)return H.m2(a,b)
if('func' in a)return b.builtin$cls==="rw"||b.builtin$cls==="as"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.bN(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.nz(H.m6(o,t),r)},
ny:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.bg(t,p)||H.bg(p,t)))return!1}return!0},
r2:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.bg(p,o)||H.bg(o,p)))return!1}return!0},
m2:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.bg(t,s)||H.bg(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.ny(r,q,!1))return!1
if(!H.ny(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.bg(i,h)||H.bg(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.bg(i,h)||H.bg(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.bg(i,h)||H.bg(h,i)))return!1}}return H.r2(a.named,b.named)},
rG:function(a){var t=$.m0
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
rF:function(a){return H.cy(a)},
rE:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
rk:function(a){var t,s,r,q,p,o
t=$.m0.$1(a)
s=$.kZ[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.l5[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.nx.$2(a,t)
if(t!=null){s=$.kZ[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.l5[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.m4(r)
$.kZ[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.l5[t]=r
return r}if(p==="-"){o=H.m4(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nE(a,r)
if(p==="*")throw H.A(new P.ff(t))
if(u.leafTags[t]===true){o=H.m4(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nE(a,r)},
nE:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.le(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
m4:function(a){return J.le(a,!1,null,!!a.$isbu)},
rm:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.le(t,!1,null,!!t.$isbu)
else return J.le(t,c,null,null)},
rg:function(){if(!0===$.m1)return
$.m1=!0
H.rh()},
rh:function(){var t,s,r,q,p,o,n,m
$.kZ=Object.create(null)
$.l5=Object.create(null)
H.rf()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.nF.$1(p)
if(o!=null){n=H.rm(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
rf:function(){var t,s,r,q,p,o,n
t=C.x()
t=H.dd(C.y,H.dd(C.z,H.dd(C.o,H.dd(C.o,H.dd(C.B,H.dd(C.A,H.dd(C.C(C.p),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.m0=new H.l2(p)
$.nx=new H.l3(o)
$.nF=new H.l4(n)},
dd:function(a,b){return a(b)||b},
rp:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fS:function fS(a,$ti){this.a=a
this.$ti=$ti},
fR:function fR(){},
ei:function ei(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fT:function fT(d,a,b,c,$ti){var _=this
_.d=d
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
j0:function j0(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
jH:function jH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f3:function f3(a,b){this.a=a
this.b=b},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a){this.a=a},
lj:function lj(a){this.a=a},
fq:function fq(a,b){this.a=a
this.b=b},
l6:function l6(a){this.a=a},
l7:function l7(a,b){this.a=a
this.b=b},
l8:function l8(a,b,c){this.a=a
this.b=b
this.c=c},
l9:function l9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
la:function la(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cQ:function cQ(){},
jx:function jx(){},
jj:function jj(){},
dj:function dj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a){this.a=a},
cl:function cl(a,b){this.a=a
this.b=b},
l:function l(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
i2:function i2(a){this.a=a},
ib:function ib(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ic:function ic(a,$ti){this.a=a
this.$ti=$ti},
id:function id(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
dH:function dH(){},
d6:function d6(){},
iv:function iv(){},
eY:function eY(){},
eZ:function eZ(){},
dI:function dI(){},
dK:function dK(){},
f_:function f_(){},
dJ:function dJ(){},
dL:function dL(){},
iw:function iw(){},
ix:function ix(){},
iy:function iy(){},
iz:function iz(){},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
f0:function f0(){},
iD:function iD(){},
r9:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
ro:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ai:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eR.prototype
return J.i1.prototype}if(typeof a=="string")return J.cv.prototype
if(a==null)return J.eS.prototype
if(typeof a=="boolean")return J.i0.prototype
if(a.constructor==Array)return J.cu.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cw.prototype
return a}if(a instanceof P.as)return a
return J.l0(a)},
le:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
l0:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.m1==null){H.rg()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.A(new P.ff("Return interceptor for "+H.t(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$lG()]
if(p!=null)return p
p=H.rk(a)
if(p!=null)return p
if(typeof a=="function")return C.D
s=Object.getPrototypeOf(a)
if(s==null)return C.q
if(s===Object.prototype)return C.q
if(typeof q=="function"){Object.defineProperty(q,$.$get$lG(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
bf:function(a){if(typeof a=="string")return J.cv.prototype
if(a==null)return a
if(a.constructor==Array)return J.cu.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cw.prototype
return a}if(a instanceof P.as)return a
return J.l0(a)},
fv:function(a){if(a==null)return a
if(a.constructor==Array)return J.cu.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cw.prototype
return a}if(a instanceof P.as)return a
return J.l0(a)},
e8:function(a){if(typeof a=="number")return J.d4.prototype
if(a==null)return a
if(!(a instanceof P.as))return J.cF.prototype
return a},
l_:function(a){if(typeof a=="number")return J.d4.prototype
if(typeof a=="string")return J.cv.prototype
if(a==null)return a
if(!(a instanceof P.as))return J.cF.prototype
return a},
rb:function(a){if(typeof a=="string")return J.cv.prototype
if(a==null)return a
if(!(a instanceof P.as))return J.cF.prototype
return a},
b_:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cw.prototype
return a}if(a instanceof P.as)return a
return J.l0(a)},
dg:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.l_(a).av(a,b)},
aO:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ai(a).P(a,b)},
bp:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.e8(a).aM(a,b)},
fx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.e8(a).aN(a,b)},
m7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.l_(a).aw(a,b)},
m8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.rj(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bf(a).p(a,b)},
nK:function(a,b,c,d){return J.b_(a).dv(a,b,c,d)},
nL:function(a,b,c,d){return J.b_(a).dT(a,b,c,d)},
nM:function(a,b,c){return J.e8(a).U(a,b,c)},
fy:function(a,b){return J.l_(a).az(a,b)},
fz:function(a,b,c){return J.bf(a).e6(a,b,c)},
nN:function(a,b){return J.fv(a).au(a,b)},
fA:function(a){return J.e8(a).b2(a)},
m9:function(a){return J.b_(a).ge2(a)},
e9:function(a){return J.b_(a).gaE(a)},
bP:function(a){return J.ai(a).gW(a)},
lk:function(a){return J.b_(a).gb6(a)},
bq:function(a){return J.fv(a).gT(a)},
dh:function(a){return J.bf(a).gG(a)},
cM:function(a){return J.b_(a).gM(a)},
nO:function(a){return J.b_(a).geA(a)},
nP:function(a){return J.b_(a).geD(a)},
nQ:function(a){return J.b_(a).geH(a)},
ma:function(a){return J.ai(a).gV(a)},
nR:function(a){return J.b_(a).geO(a)},
mb:function(a,b){return J.fv(a).am(a,b)},
nS:function(a){return J.fv(a).eJ(a)},
di:function(a,b){return J.b_(a).bs(a,b)},
nT:function(a,b){return J.b_(a).sbm(a,b)},
nU:function(a){return J.fv(a).an(a)},
nV:function(a){return J.rb(a).eQ(a)},
aP:function(a){return J.ai(a).A(a)},
I:function I(){},
i0:function i0(){},
eS:function eS(){},
dB:function dB(){},
iQ:function iQ(){},
cF:function cF(){},
cw:function cw(){},
cu:function cu($ti){this.$ti=$ti},
lE:function lE($ti){this.$ti=$ti},
fG:function fG(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
d4:function d4(){},
eR:function eR(){},
i1:function i1(){},
cv:function cv(){}},P={
qJ:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.r3()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.e7(new P.jU(t),1)).observe(s,{childList:true})
return new P.jT(t,s,r)}else if(self.setImmediate!=null)return P.r4()
return P.r5()},
qK:function(a){++u.globalState.f.b
self.scheduleImmediate(H.e7(new P.jV(a),0))},
qL:function(a){++u.globalState.f.b
self.setImmediate(H.e7(new P.jW(a),0))},
qM:function(a){P.lO(C.n,a)},
ns:function(a,b){if(H.de(a,{func:1,args:[P.bE,P.bE]})){b.toString
return a}else{b.toString
return a}},
qO:function(a,b){var t,s,r
b.a=1
try{a.cP(new P.ke(b),new P.kf(b))}catch(r){t=H.b0(r)
s=H.bx(r)
P.nG(new P.kg(b,t,s))}},
nn:function(a,b){var t,s,r
for(;a.gdP();)a=a.c
t=a.gbH()
s=b.c
if(t){b.c=null
r=b.bj(s)
b.a=a.a
b.c=a.c
P.dY(b,r)}else{b.a=2
b.c=a
a.cm(s)}},
dY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.e9(p)
n=p.gaD()
s.toString
P.ft(null,null,s,o,n)}return}for(;b.gbK()!=null;b=m){m=b.a
b.a=null
P.dY(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gcE()||b.gcD()){k=b.ge_()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.e9(p)
n=p.gaD()
s.toString
P.ft(null,null,s,o,n)
return}j=$.am
if(j==null?k!=null:j!==k)$.am=k
else j=null
if(b.gcD())new P.kk(t,r,q,b).$0()
else if(s){if(b.gcE())new P.kj(r,b,l).$0()}else if(b.geo())new P.ki(t,r,b).$0()
if(j!=null)$.am=j
s=r.b
if(!!J.ai(s).$isdx){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bj(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.nn(s,i)
return}}i=b.b
b=i.bM()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
qZ:function(){var t,s
for(;t=$.dc,t!=null;){$.e5=null
s=t.b
$.dc=s
if(s==null)$.e4=null
t.a.$0()}},
r0:function(){$.lW=!0
try{P.qZ()}finally{$.e5=null
$.lW=!1
if($.dc!=null)$.$get$lR().$1(P.nA())}},
nw:function(a){var t=new P.fl(a,null)
if($.dc==null){$.e4=t
$.dc=t
if(!$.lW)$.$get$lR().$1(P.nA())}else{$.e4.b=t
$.e4=t}},
r_:function(a){var t,s,r
t=$.dc
if(t==null){P.nw(a)
$.e5=$.e4
return}s=new P.fl(a,null)
r=$.e5
if(r==null){s.b=t
$.e5=s
$.dc=s}else{s.b=r.b
r.b=s
$.e5=s
if(s.b==null)$.e4=s}},
nG:function(a){var t=$.am
if(C.c===t){P.kV(null,null,C.c,a)
return}t.toString
P.kV(null,null,t,t.bP(a,!0))},
qN:function(a,b,c,d,e,f,g){var t,s
t=$.am
s=e?1:0
s=new P.dX(a,null,null,null,null,t,s,null,null,[f,g])
s.dl(b,c,d,e,g)
s.dn(a,b,c,d,e,f,g)
return s},
qV:function(a,b,c){$.am.toString
a.bb(b,c)},
qH:function(a,b){var t=$.am
if(t===C.c){t.toString
return P.lO(a,b)}return P.lO(a,t.bP(b,!0))},
lO:function(a,b){var t=C.b.ab(a.a,1000)
return H.qG(t<0?0:t,b)},
qI:function(){return $.am},
ft:function(a,b,c,d,e){var t={}
t.a=d
P.r_(new P.kU(t,e))},
nt:function(a,b,c,d){var t,s
s=$.am
if(s===c)return d.$0()
$.am=c
t=s
try{s=d.$0()
return s}finally{$.am=t}},
nv:function(a,b,c,d,e){var t,s
s=$.am
if(s===c)return d.$1(e)
$.am=c
t=s
try{s=d.$1(e)
return s}finally{$.am=t}},
nu:function(a,b,c,d,e,f){var t,s
s=$.am
if(s===c)return d.$2(e,f)
$.am=c
t=s
try{s=d.$2(e,f)
return s}finally{$.am=t}},
kV:function(a,b,c,d){var t=C.c!==c
if(t)d=c.bP(d,!(!t||!1))
P.nw(d)},
jU:function jU(a){this.a=a},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
fn:function fn(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bK:function bK(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
kd:function kd(a,b){this.a=a
this.b=b},
kh:function kh(a,b){this.a=a
this.b=b},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kl:function kl(a){this.a=a},
kj:function kj(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(a,b){this.a=a
this.b=b},
cD:function cD(){},
jo:function jo(a){this.a=a},
jp:function jp(a,b){this.a=a
this.b=b},
jq:function jq(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
jn:function jn(){},
bw:function bw(){},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
jZ:function jZ(a){this.a=a},
fm:function fm(){},
k1:function k1(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
k3:function k3(b,c,a){this.b=b
this.c=c
this.a=a},
k2:function k2(){},
kz:function kz(){},
kA:function kA(a,b){this.a=a
this.b=b},
kN:function kN(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
dW:function dW(){},
dX:function dX(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
kx:function kx(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
cO:function cO(a,b){this.a=a
this.b=b},
kT:function kT(){},
kU:function kU(a,b){this.a=a
this.b=b},
kC:function kC(){},
kD:function kD(a,b){this.a=a
this.b=b},
kE:function kE(a,b){this.a=a
this.b=b},
kF:function kF(a,b){this.a=a
this.b=b},
qP:function(a,b){var t=a[b]
return t===a?null:t},
lU:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
lT:function(){var t=Object.create(null)
P.lU(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
lI:function(a,b){return new H.l(0,null,null,null,null,null,0,[a,b])},
mZ:function(){return new H.l(0,null,null,null,null,null,0,[null,null])},
dC:function(a){return H.ra(a,new H.l(0,null,null,null,null,null,0,[null,null]))},
e0:function(a,b){return new P.fp(0,null,null,null,null,null,0,[a,b])},
qS:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
p:function(a,b,c,d,e){return new P.kn(0,null,null,null,null,[d,e])},
i_:function(a,b,c){var t,s
if(P.lX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$e6()
s.push(a)
try{P.qY(a,t)}finally{if(0>=s.length)return H.U(s,-1)
s.pop()}s=P.na(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eP:function(a,b,c){var t,s,r
if(P.lX(a))return b+"..."+c
t=new P.dS(b)
s=$.$get$e6()
s.push(a)
try{r=t
r.S=P.na(r.gS(),a,", ")}finally{if(0>=s.length)return H.U(s,-1)
s.pop()}s=t
s.S=s.gS()+c
s=t.gS()
return s.charCodeAt(0)==0?s:s},
lX:function(a){var t,s
for(t=0;s=$.$get$e6(),t<s.length;++t)if(a===s[t])return!0
return!1},
qY:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.bq(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.K())return
q=H.t(t.gN())
b.push(q)
s+=q.length+2;++r}if(!t.K()){if(r<=5)return
if(0>=b.length)return H.U(b,-1)
p=b.pop()
if(0>=b.length)return H.U(b,-1)
o=b.pop()}else{n=t.gN();++r
if(!t.K()){if(r<=4){b.push(H.t(n))
return}p=H.t(n)
if(0>=b.length)return H.U(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gN();++r
for(;t.K();n=m,m=l){l=t.gN();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.U(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.t(n)
p=H.t(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.U(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
mY:function(a,b,c,d,e){return new H.l(0,null,null,null,null,null,0,[d,e])},
pw:function(a,b,c){var t=P.mY(null,null,null,b,c)
a.bl(0,new P.kY(t))
return t},
px:function(a,b,c,d,e){var t=P.mY(null,null,null,d,e)
P.py(t,a,b,c)
return t},
bl:function(a,b,c,d){return new P.ks(0,null,null,null,null,null,0,[d])},
eT:function(a,b){var t,s
t=P.bl(null,null,null,b)
for(s=J.bq(a);s.K();)t.j(0,s.gN())
return t},
n_:function(a){var t,s,r
t={}
if(P.lX(a))return"{...}"
s=new P.dS("")
try{$.$get$e6().push(a)
r=s
r.S=r.gS()+"{"
t.a=!0
a.bl(0,new P.il(t,s))
t=s
t.S=t.gS()+"}"}finally{t=$.$get$e6()
if(0>=t.length)return H.U(t,-1)
t.pop()}t=s.gS()
return t.charCodeAt(0)==0?t:t},
py:function(a,b,c,d){var t,s,r
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.bO)(b),++s){r=b[s]
a.h(0,c.$1(r),d.$1(r))}},
lJ:function(a,b){var t=new P.ie(null,0,0,0,[b])
t.di(a,b)
return t},
kn:function kn(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
kp:function kp(a){this.a=a},
ko:function ko(a,$ti){this.a=a
this.$ti=$ti},
fo:function fo(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fp:function fp(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
ks:function ks(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
kt:function kt(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kq:function kq(){},
d3:function d3(){},
kY:function kY(a){this.a=a},
eU:function eU(){},
dM:function dM(){},
bv:function bv(){},
kR:function kR(){},
eW:function eW(){},
dU:function dU(){},
il:function il(a,b){this.a=a
this.b=b},
ie:function ie(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ku:function ku(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
jc:function jc(){},
jb:function jb(){},
na:function(a,b,c){var t=J.bq(b)
if(!t.K())return a
if(c.length===0){do a+=H.t(t.gN())
while(t.K())}else{a+=H.t(t.gN())
for(;t.K();)a=a+c+H.t(t.gN())}return a},
ol:function(a,b){return J.fy(a,b)},
ms:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aP(a)
if(typeof a==="string")return JSON.stringify(a)
return P.or(a)},
or:function(a){var t=J.ai(a)
if(!!t.$iscQ)return t.A(a)
return H.iS(a)},
mc:function(a){return new P.bQ(!1,null,null,a)},
fF:function(a,b,c){return new P.bQ(!0,a,b,c)},
j_:function(a,b,c){return new P.f7(null,null,!0,a,b,"Value not in range")},
ch:function(a,b,c,d,e){return new P.f7(b,c,!0,a,d,"Invalid value")},
n7:function(a,b,c,d,e,f){if(0>a||a>c)throw H.A(P.ch(a,0,c,"start",f))
if(a>b||b>c)throw H.A(P.ch(b,a,c,"end",f))
return b},
ez:function(a,b,c,d,e){var t=e!=null?e:J.dh(b)
return new P.hI(b,t,!0,a,c,"Index out of range")},
h4:function(a){return new P.kc(a)},
bW:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.bq(a);s.K();)t.push(s.gN())
if(b)return t
t.fixed$length=Array
return t},
h:function(a,b){var t=P.bW(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
m5:function(a){H.ro(H.t(a))},
c1:function c1(){},
aD:function aD(){},
G:function G(){},
c3:function c3(a){this.a=a},
h0:function h0(){},
h1:function h1(){},
cq:function cq(){},
f4:function f4(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f7:function f7(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
hI:function hI(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
aN:function aN(a){this.a=a},
ff:function ff(a){this.a=a},
cj:function cj(a){this.a=a},
bs:function bs(a){this.a=a},
iK:function iK(){},
fd:function fd(){},
fW:function fW(a){this.a=a},
kc:function kc(a){this.a=a},
h5:function h5(a,bg,$ti){this.a=a
this.bg=bg
this.$ti=$ti},
P:function P(){},
z:function z(){},
eQ:function eQ(){},
R:function R(){},
bE:function bE(){},
by:function by(){},
as:function as(){},
cz:function cz(){},
D:function D(){},
dS:function dS(S){this.S=S},
qU:function(a){var t=new P.kB(0,0)
t.ds(a)
return t},
kB:function kB(a,b){this.a=a
this.b=b},
fB:function fB(){},
cm:function cm(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hy:function hy(){},
aL:function aL(){},
hH:function hH(){},
im:function im(){},
io:function io(){},
iP:function iP(){},
dO:function dO(){},
aA:function aA(){},
js:function js(){},
ju:function ju(){},
cE:function cE(){},
jB:function jB(){},
jK:function jK(){},
jL:function jL(){},
dZ:function dZ(){},
kG:function kG(){},
kH:function kH(){},
kI:function kI(){},
lm:function(){var t=$.mn
if(t==null){t=J.fz(window.navigator.userAgent,"Opera",0)
$.mn=t}return t},
mp:function(){var t=$.mo
if(t==null){t=P.lm()!==!0&&J.fz(window.navigator.userAgent,"WebKit",0)
$.mo=t}return t},
op:function(){var t,s
t=$.mk
if(t!=null)return t
s=$.ml
if(s==null){s=J.fz(window.navigator.userAgent,"Firefox",0)
$.ml=s}if(s)t="-moz-"
else{s=$.mm
if(s==null){s=P.lm()!==!0&&J.fz(window.navigator.userAgent,"Trident/",0)
$.mm=s}if(s)t="-ms-"
else t=P.lm()===!0?"-o-":"-webkit-"}$.mk=t
return t}},W={
oo:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
oq:function(a,b,c){var t,s
t=document.body
s=(t&&C.l).ap(t,a,b,c)
s.toString
t=new H.bJ(new W.be(s),new W.kW(),[W.a0])
return t.gaP(t)},
dm:function(a){var t,s,r
t="element tag unavailable"
try{s=J.nR(a)
if(typeof s==="string")t=a.tagName}catch(r){H.b0(r)}return t},
mC:function(a,b,c){var t=document.createElement("img")
return t},
cJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nq:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
nm:function(a,b,c,d,e){var t=W.r1(new W.kb(c))
t=new W.ka(0,a,b,t,!1,[e])
t.dm(a,b,c,!1,e)
return t},
no:function(a){var t,s
t=document.createElement("a")
s=new W.kJ(t,window.location)
s=new W.e_(s)
s.dr(a)
return s},
qQ:function(a,b,c,d){return!0},
qR:function(a,b,c,d){var t,s,r,q,p
t=d.gcS()
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
nr:function(){var t=P.D
t=new W.kP(P.eT(C.h,t),P.bl(null,null,null,t),P.bl(null,null,null,t),P.bl(null,null,null,t),null)
t.dt(null,new H.d5(C.h,new W.kQ(),[H.C(C.h,0),null]),["TEMPLATE"],null)
return t},
r1:function(a){var t=$.am
if(t===C.c)return a
return t.e3(a,!0)},
X:function X(){},
fD:function fD(){},
fE:function fE(){},
fK:function fK(){},
ec:function ec(){},
cP:function cP(){},
fO:function fO(){},
cn:function cn(){},
ee:function ee(){},
cp:function cp(){},
eA:function eA(){},
fU:function fU(){},
ej:function ej(){},
ek:function ek(){},
fX:function fX(){},
el:function el(){},
b7:function b7(){},
kW:function kW(){},
h2:function h2(){},
h3:function h3(){},
N:function N(){},
dn:function dn(){},
hw:function hw(){},
hx:function hx(){},
ex:function ex(){},
hA:function hA(){},
hG:function hG(){},
hK:function hK(){},
i5:function i5(){},
ia:function ia(){},
ig:function ig(){},
ik:function ik(){},
dF:function dF(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
dG:function dG(){},
bX:function bX(){},
iE:function iE(){},
iF:function iF(){},
be:function be(a){this.a=a},
a0:function a0(){},
f1:function f1(){},
eB:function eB(){},
eD:function eD(){},
iI:function iI(){},
iL:function iL(){},
iO:function iO(){},
fa:function fa(){},
jd:function jd(){},
fc:function fc(){},
jh:function jh(){},
ji:function ji(){},
fe:function fe(){},
jv:function jv(){},
jw:function jw(){},
dT:function dT(){},
jA:function jA(){},
bH:function bH(){},
fj:function fj(){},
d9:function d9(){},
k0:function k0(){},
k4:function k4(){},
k5:function k5(){},
km:function km(){},
e1:function e1(){},
eC:function eC(){},
eE:function eE(){},
kK:function kK(){},
jX:function jX(){},
k6:function k6(a){this.a=a},
k9:function k9(){},
lS:function lS(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ka:function ka(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
kb:function kb(a){this.a=a},
e_:function e_(a){this.a=a},
cY:function cY(){},
f2:function f2(a){this.a=a},
iH:function iH(a){this.a=a},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(){},
kL:function kL(){},
kM:function kM(){},
kP:function kP(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
kQ:function kQ(){},
kO:function kO(){},
ev:function ev(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
cf:function cf(){},
kJ:function kJ(a,b){this.a=a
this.b=b},
fr:function fr(a){this.a=a},
kS:function kS(a){this.a=a}},S={fC:function fC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},i6:function i6(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1},ii:function ii(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1},ja:function ja(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1}},L={
od:function(){var t=$.$get$ea()
t=t.gaK(t)
return new H.bJ(t,new L.fH(),[H.ak(t,"z",0)])},
nW:function(a,b,c,d){var t,s,r
t=P.D
s=A.co
r=P.P
r=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
r.i(0,$.a7,L.c("#FF9B00"),!0)
r.i(0,$.a4,L.c("#FF9B00"),!0)
r.i(0,$.a8,L.c("#FF8700"),!0)
r.i(0,$.ag,L.c("#7F7F7F"),!0)
r.i(0,$.af,L.c("#727272"),!0)
r.i(0,$.aa,L.c("#A3A3A3"),!0)
r.i(0,$.ab,L.c("#999999"),!0)
r.i(0,$.a9,L.c("#898989"),!0)
r.i(0,$.a5,L.c("#EFEFEF"),!0)
r.i(0,$.ae,L.c("#DBDBDB"),!0)
r.i(0,$.ad,L.c("#C6C6C6"),!0)
r.i(0,$.ac,L.c("#ADADAD"),!0)
s=[t]
t=new L.c2(0.01,0.01,0.01,0.5,a,new H.l(0,null,null,null,null,null,0,[X.q,P.G]),null,"","",!1,b,null,c,d,!1,!1,!0,1,r,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.h(H.a(["Blank","Null","Boring","Error"],s),t),P.h(H.a(["Blank","Null","Boring","Error"],s),t),P.h(H.a(["Nothing","Errors","Glitches"],s),t),P.h(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.x]),H.a([],[A.dl]),Q.u(null,null,A.M))
t.a2(a,b,c,d)
return t},
c:function(a){if(C.e.c2(a,"#"))return A.mh(C.e.bu(a,1))
else return A.mh(a)},
fH:function fH(){},
c2:function c2(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1}},M={fI:function fI(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fV:function fV(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},dp:function dp(){},jR:function jR(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1}},O={fJ:function fJ(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1}},T={fL:function fL(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
_.O=O
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
_.x1=x1},fN:function fN(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
_.O=O
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
_.x1=x1},hD:function hD(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
_.O=O
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
qy:function(){var t=$.$get$f9()
t=t.gaK(t)
return new H.bJ(t,new T.j5(),[H.ak(t,"z",0)])},
qb:function(a,b,c,d){var t,s
t=[P.D]
s=H.a([],t)
t=new T.ci("Glitch",0.01,0.01,0.01,s,0.5,a,new H.l(0,null,null,null,null,null,0,[X.q,P.G]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.u(null,null,A.M),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.x]),H.a([],[A.dl]),1)
t.R(a,b,c,d)
return t},
j5:function j5(){},
ci:function ci(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},A={fQ:function fQ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
e:function(a,b,c,d,e){var t=new A.M(c,e,null,null,a,!1,P.bl(null,null,null,G.J),0,3)
t.dh(a,b,c,!1,e)
return t},
M:function M(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
hZ:function hZ(){},
hY:function hY(){},
dl:function dl(){},
ef:function(a,b,c,d){var t=new A.co(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.dg(a,b,c,d)
return t},
mg:function(a,b,c,d){var t=A.ef(0,0,0,255)
t.b=C.b.U(C.d.b2(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.U(C.d.b2(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.b.U(C.d.b2(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.b.U(C.d.b2(d*255),0,255)
return t},
oj:function(a,b){if(b){if(typeof a!=="number")return a.cU()
return A.ef((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.cU()
return A.ef((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
mh:function(a){return A.oj(H.pO(a,16,new A.kX()),a.length>=8)},
co:function co(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
kX:function kX(){},
iN:function iN(){},
f5:function f5(){},
iZ:function iZ(a,b){this.a=a
this.b=b}},V={fY:function fY(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hJ:function hJ(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
_.O=O
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
_.x1=x1},is:function is(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
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
_.x1=x1},iM:function iM(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1},jz:function jz(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},U={fZ:function fZ(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,O,aF,aG,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
_.O=O
_.aF=aF
_.aG=aG
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
_.x1=x1},hm:function hm(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ij:function ij(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1},b:function b(a){this.a=a},B:function B(b,c,a){this.b=b
this.c=c
this.a=a},jC:function jC(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1}},Z={h_:function h_(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
_.O=O
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
_.x1=x1},ih:function ih(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
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
_.r1=r1}},X={en:function en(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},ed:function ed(){},hF:function hF(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
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
_.x1=x1},q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
rl:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
D.qE()
t=P.D
s=A.co
r=P.P
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#00ff00"),!0)
q.i(0,$.a4,L.c("#EFEFEF"),!0)
q.i(0,$.a8,L.c("#DEDEDE"),!0)
q.i(0,$.ag,L.c("#FF2106"),!0)
q.i(0,$.af,L.c("#B01200"),!0)
q.i(0,$.aa,L.c("#2F2F30"),!0)
q.i(0,$.ab,L.c("#1D1D1D"),!0)
q.i(0,$.a9,L.c("#080808"),!0)
q.i(0,$.a5,L.c("#030303"),!0)
q.i(0,$.ae,L.c("#242424"),!0)
q.i(0,$.ad,L.c("#333333"),!0)
q.i(0,$.ac,L.c("#141414"),!0)
p=[t]
o=P.h(H.a(["Frogs"],p),t)
n=P.h(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),t)
m=P.h(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),t)
l=P.h(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),t)
k=P.h(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),t)
j=E.x
i=[j]
h=P.h(H.a([new E.x($.bG,2,!0),new E.x($.cB,1,!0),new E.x($.cC,-2,!0)],i),j)
g=[X.q,P.G]
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#FF9B00"),!0)
f.i(0,$.a4,L.c("#FF9B00"),!0)
f.i(0,$.a8,L.c("#FF8700"),!0)
f.i(0,$.ag,L.c("#7F7F7F"),!0)
f.i(0,$.af,L.c("#727272"),!0)
f.i(0,$.aa,L.c("#A3A3A3"),!0)
f.i(0,$.ab,L.c("#999999"),!0)
f.i(0,$.a9,L.c("#898989"),!0)
f.i(0,$.a5,L.c("#EFEFEF"),!0)
f.i(0,$.ae,L.c("#DBDBDB"),!0)
f.i(0,$.ad,L.c("#C6C6C6"),!0)
f.i(0,$.ac,L.c("#ADADAD"),!0)
e=[A.dl]
d=A.M
f=new N.jg(0.5,1,0.5,q,o,n,m,l,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],h,0.01,0.01,0.01,0.5,0,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a2(0,"Space",!0,!1)
$.oa=f
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#ff0000"),!0)
f.i(0,$.a4,L.c("#FF2106"),!0)
f.i(0,$.a8,L.c("#AD1604"),!0)
f.i(0,$.ag,L.c("#030303"),!0)
f.i(0,$.af,L.c("#242424"),!0)
f.i(0,$.aa,L.c("#510606"),!0)
f.i(0,$.ab,L.c("#3C0404"),!0)
f.i(0,$.a9,L.c("#1F0000"),!0)
f.i(0,$.a5,L.c("#B70D0E"),!0)
f.i(0,$.ae,L.c("#970203"),!0)
f.i(0,$.ad,L.c("#8E1516"),!0)
f.i(0,$.ac,L.c("#640707"),!0)
h=P.h(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),t)
k=P.h(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),t)
l=P.h(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),t)
m=P.h(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),t)
n=P.h(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),t)
o=P.h(H.a([new E.x($.dQ,2,!0),new E.x($.cC,1,!0),new E.x($.cA,-2,!0)],i),j)
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#FF9B00"),!0)
q.i(0,$.a4,L.c("#FF9B00"),!0)
q.i(0,$.a8,L.c("#FF8700"),!0)
q.i(0,$.ag,L.c("#7F7F7F"),!0)
q.i(0,$.af,L.c("#727272"),!0)
q.i(0,$.aa,L.c("#A3A3A3"),!0)
q.i(0,$.ab,L.c("#999999"),!0)
q.i(0,$.a9,L.c("#898989"),!0)
q.i(0,$.a5,L.c("#EFEFEF"),!0)
q.i(0,$.ae,L.c("#DBDBDB"),!0)
q.i(0,$.ad,L.c("#C6C6C6"),!0)
q.i(0,$.ac,L.c("#ADADAD"),!0)
q=new N.jD(0.51,1,0.01,0.7,f,h,k,l,m,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",n,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],o,0.01,0.01,0.01,0.5,1,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a2(1,"Time",!0,!1)
$.ob=q
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#3399ff"),!0)
q.i(0,$.a4,L.c("#10E0FF"),!0)
q.i(0,$.a8,L.c("#00A4BB"),!0)
q.i(0,$.ag,L.c("#FEFD49"),!0)
q.i(0,$.af,L.c("#D6D601"),!0)
q.i(0,$.aa,L.c("#0052F3"),!0)
q.i(0,$.ab,L.c("#0046D1"),!0)
q.i(0,$.a9,L.c("#003396"),!0)
q.i(0,$.a5,L.c("#0087EB"),!0)
q.i(0,$.ae,L.c("#0070ED"),!0)
q.i(0,$.ad,L.c("#006BE1"),!0)
q.i(0,$.ac,L.c("#0054B0"),!0)
o=P.h(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),t)
n=P.h(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),t)
m=P.h(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),t)
l=P.h(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),t)
k=P.h(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],t)
h=P.h(H.a([new E.x($.cC,2,!0),new E.x($.bn,1,!0),new E.x($.cB,-1,!0),new E.x($.ck,-1,!0),new E.x($.aM,0.05,!1)],i),j)
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#FF9B00"),!0)
f.i(0,$.a4,L.c("#FF9B00"),!0)
f.i(0,$.a8,L.c("#FF8700"),!0)
f.i(0,$.ag,L.c("#7F7F7F"),!0)
f.i(0,$.af,L.c("#727272"),!0)
f.i(0,$.aa,L.c("#A3A3A3"),!0)
f.i(0,$.ab,L.c("#999999"),!0)
f.i(0,$.a9,L.c("#898989"),!0)
f.i(0,$.a5,L.c("#EFEFEF"),!0)
f.i(0,$.ae,L.c("#DBDBDB"),!0)
f.i(0,$.ad,L.c("#C6C6C6"),!0)
f.i(0,$.ac,L.c("#ADADAD"),!0)
f=new T.fN(0.5,1,0.01,0.3,q,o,n,m,l,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],k,h,0.01,0.01,0.01,0.5,2,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a2(2,"Breath",!0,!1)
$.nY=f
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#003300"),!0)
f.i(0,$.a4,L.c("#0F0F0F"),!0)
f.i(0,$.a8,L.c("#010101"),!0)
f.i(0,$.ag,L.c("#E8C15E"),!0)
f.i(0,$.af,L.c("#C7A140"),!0)
f.i(0,$.aa,L.c("#1E211E"),!0)
f.i(0,$.ab,L.c("#141614"),!0)
f.i(0,$.a9,L.c("#0B0D0B"),!0)
f.i(0,$.a5,L.c("#204020"),!0)
f.i(0,$.ae,L.c("#11200F"),!0)
f.i(0,$.ad,L.c("#192C16"),!0)
f.i(0,$.ac,L.c("#121F10"),!0)
h=P.h(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),t)
k=P.h(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),t)
l=P.h(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),t)
m=P.h(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),t)
n=P.h(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),t)
o=P.h(H.a([new E.x($.bG,2,!0),new E.x($.cA,1,!0),new E.x($.dQ,-1,!0),new E.x($.cB,-1,!0),new E.x($.aM,0.01,!1)],i),j)
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#FF9B00"),!0)
q.i(0,$.a4,L.c("#FF9B00"),!0)
q.i(0,$.a8,L.c("#FF8700"),!0)
q.i(0,$.ag,L.c("#7F7F7F"),!0)
q.i(0,$.af,L.c("#727272"),!0)
q.i(0,$.aa,L.c("#A3A3A3"),!0)
q.i(0,$.ab,L.c("#999999"),!0)
q.i(0,$.a9,L.c("#898989"),!0)
q.i(0,$.a5,L.c("#EFEFEF"),!0)
q.i(0,$.ae,L.c("#DBDBDB"),!0)
q.i(0,$.ad,L.c("#C6C6C6"),!0)
q.i(0,$.ac,L.c("#ADADAD"),!0)
q=new U.fZ(1,0.5,0.5,1,f,h,k,l,m,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,n,o,0.01,0.01,0.01,0.5,3,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a2(3,"Doom",!0,!1)
$.nZ=q
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#993300"),!0)
q.i(0,$.a4,L.c("#BA1016"),!0)
q.i(0,$.a8,L.c("#820B0F"),!0)
q.i(0,$.ag,L.c("#381B76"),!0)
q.i(0,$.af,L.c("#1E0C47"),!0)
q.i(0,$.aa,L.c("#290704"),!0)
q.i(0,$.ab,L.c("#230200"),!0)
q.i(0,$.a9,L.c("#110000"),!0)
q.i(0,$.a5,L.c("#3D190A"),!0)
q.i(0,$.ae,L.c("#2C1207"),!0)
q.i(0,$.ad,L.c("#5C2913"),!0)
q.i(0,$.ac,L.c("#4C1F0D"),!0)
o=P.h(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),t)
n=P.h(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),t)
m=P.h(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),t)
l=P.h(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),t)
k=P.h(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),t)
h=P.h(H.a([new E.x($.ck,2,!0),new E.x($.bn,1,!0),new E.x($.bG,-2,!0)],i),j)
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#FF9B00"),!0)
f.i(0,$.a4,L.c("#FF9B00"),!0)
f.i(0,$.a8,L.c("#FF8700"),!0)
f.i(0,$.ag,L.c("#7F7F7F"),!0)
f.i(0,$.af,L.c("#727272"),!0)
f.i(0,$.aa,L.c("#A3A3A3"),!0)
f.i(0,$.ab,L.c("#999999"),!0)
f.i(0,$.a9,L.c("#898989"),!0)
f.i(0,$.a5,L.c("#EFEFEF"),!0)
f.i(0,$.ae,L.c("#DBDBDB"),!0)
f.i(0,$.ad,L.c("#C6C6C6"),!0)
f.i(0,$.ac,L.c("#ADADAD"),!0)
f=new T.fL(0.01,0.5,1,0,q,o,n,m,l,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],k,h,0.01,0.01,0.01,0.5,4,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a2(4,"Blood",!0,!1)
$.nX=f
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#ff3399"),!0)
f.i(0,$.a4,L.c("#BD1864"),!0)
f.i(0,$.a8,L.c("#780F3F"),!0)
f.i(0,$.ag,L.c("#1D572E"),!0)
f.i(0,$.af,L.c("#11371D"),!0)
f.i(0,$.aa,L.c("#4C1026"),!0)
f.i(0,$.ab,L.c("#3C0D1F"),!0)
f.i(0,$.a9,L.c("#260914"),!0)
f.i(0,$.a5,L.c("#6B0829"),!0)
f.i(0,$.ae,L.c("#4A0818"),!0)
f.i(0,$.ad,L.c("#55142A"),!0)
f.i(0,$.ac,L.c("#3D0E1E"),!0)
h=P.h(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),t)
k=P.h(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),t)
l=P.h(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),t)
m=P.h(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),t)
n=P.h(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),t)
o=P.h(H.a([new E.x($.ck,1,!0),new E.eb(null,1,!0)],i),j)
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#FF9B00"),!0)
q.i(0,$.a4,L.c("#FF9B00"),!0)
q.i(0,$.a8,L.c("#FF8700"),!0)
q.i(0,$.ag,L.c("#7F7F7F"),!0)
q.i(0,$.af,L.c("#727272"),!0)
q.i(0,$.aa,L.c("#A3A3A3"),!0)
q.i(0,$.ab,L.c("#999999"),!0)
q.i(0,$.a9,L.c("#898989"),!0)
q.i(0,$.a5,L.c("#EFEFEF"),!0)
q.i(0,$.ae,L.c("#DBDBDB"),!0)
q.i(0,$.ad,L.c("#C6C6C6"),!0)
q.i(0,$.ac,L.c("#ADADAD"),!0)
q=new T.hD(0.3,0.6,0.01,f,h,k,l,m,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,n,o,0.01,0.01,0.01,0.5,5,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a2(5,"Heart",!0,!1)
$.o0=q
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#3da35a"),!0)
q.i(0,$.a4,L.c("#06FFC9"),!0)
q.i(0,$.a8,L.c("#04A885"),!0)
q.i(0,$.ag,L.c("#6E0E2E"),!0)
q.i(0,$.af,L.c("#4A0818"),!0)
q.i(0,$.aa,L.c("#1D572E"),!0)
q.i(0,$.ab,L.c("#164524"),!0)
q.i(0,$.a9,L.c("#11371D"),!0)
q.i(0,$.a5,L.c("#3DA35A"),!0)
q.i(0,$.ae,L.c("#2E7A43"),!0)
q.i(0,$.ad,L.c("#3B7E4F"),!0)
q.i(0,$.ac,L.c("#265133"),!0)
o=P.h(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),t)
n=P.h(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),t)
m=P.h(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),t)
l=P.h(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),t)
k=P.h(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),t)
h=P.h(H.a([new E.x($.cA,2,!0),new E.x($.dQ,1,!0),new E.x($.bG,-2,!0)],i),j)
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#FF9B00"),!0)
f.i(0,$.a4,L.c("#FF9B00"),!0)
f.i(0,$.a8,L.c("#FF8700"),!0)
f.i(0,$.ag,L.c("#7F7F7F"),!0)
f.i(0,$.af,L.c("#727272"),!0)
f.i(0,$.aa,L.c("#A3A3A3"),!0)
f.i(0,$.ab,L.c("#999999"),!0)
f.i(0,$.a9,L.c("#898989"),!0)
f.i(0,$.a5,L.c("#EFEFEF"),!0)
f.i(0,$.ae,L.c("#DBDBDB"),!0)
f.i(0,$.ad,L.c("#C6C6C6"),!0)
f.i(0,$.ac,L.c("#ADADAD"),!0)
f=new V.is(0.3,0.3,1,q,o,n,m,l,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],h,0.01,0.01,0.01,0.5,6,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a2(6,"Mind",!0,!1)
$.o6=f
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#ff9933"),!0)
f.i(0,$.a4,L.c("#FEFD49"),!0)
f.i(0,$.a8,L.c("#FEC910"),!0)
f.i(0,$.ag,L.c("#10E0FF"),!0)
f.i(0,$.af,L.c("#00A4BB"),!0)
f.i(0,$.aa,L.c("#FA4900"),!0)
f.i(0,$.ab,L.c("#E94200"),!0)
f.i(0,$.a9,L.c("#C33700"),!0)
f.i(0,$.a5,L.c("#FF8800"),!0)
f.i(0,$.ae,L.c("#D66E04"),!0)
f.i(0,$.ad,L.c("#E76700"),!0)
f.i(0,$.ac,L.c("#CA5B00"),!0)
h=P.h(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),t)
k=P.h(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),t)
l=P.h(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),t)
m=P.h(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),t)
n=P.h(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),t)
o=P.h(H.a([new E.x($.dP,2,!0),new E.x($.cA,1,!0),new E.x($.bn,-1,!0),new E.x($.cB,-1,!0),new E.x($.aM,0.2,!1)],i),j)
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#FF9B00"),!0)
q.i(0,$.a4,L.c("#FF9B00"),!0)
q.i(0,$.a8,L.c("#FF8700"),!0)
q.i(0,$.ag,L.c("#7F7F7F"),!0)
q.i(0,$.af,L.c("#727272"),!0)
q.i(0,$.aa,L.c("#A3A3A3"),!0)
q.i(0,$.ab,L.c("#999999"),!0)
q.i(0,$.a9,L.c("#898989"),!0)
q.i(0,$.a5,L.c("#EFEFEF"),!0)
q.i(0,$.ae,L.c("#DBDBDB"),!0)
q.i(0,$.ad,L.c("#C6C6C6"),!0)
q.i(0,$.ac,L.c("#ADADAD"),!0)
q=new G.i9(1.01,0.5,0.01,f,h,k,l,m,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],o,0.01,0.01,0.01,0.5,7,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a2(7,"Light",!0,!1)
$.o5=q
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#000066"),!0)
q.i(0,$.a4,L.c("#0B1030"),!0)
q.i(0,$.a8,L.c("#04091A"),!0)
q.i(0,$.ag,L.c("#CCC4B5"),!0)
q.i(0,$.af,L.c("#A89F8D"),!0)
q.i(0,$.aa,L.c("#00164F"),!0)
q.i(0,$.ab,L.c("#00103C"),!0)
q.i(0,$.a9,L.c("#00071A"),!0)
q.i(0,$.a5,L.c("#033476"),!0)
q.i(0,$.ae,L.c("#02285B"),!0)
q.i(0,$.ad,L.c("#004CB2"),!0)
q.i(0,$.ac,L.c("#003E91"),!0)
o=P.h(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),t)
n=P.h(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),t)
m=P.h(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),t)
l=P.h(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),t)
k=P.h(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),t)
h=P.h(H.a([new E.cN(D.lN(),null,3,!0),new E.cN(D.lN(),null,-1,!0),new E.x($.dQ,-1,!0),new E.x($.aM,0.2,!1)],i),j)
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#FF9B00"),!0)
f.i(0,$.a4,L.c("#FF9B00"),!0)
f.i(0,$.a8,L.c("#FF8700"),!0)
f.i(0,$.ag,L.c("#7F7F7F"),!0)
f.i(0,$.af,L.c("#727272"),!0)
f.i(0,$.aa,L.c("#A3A3A3"),!0)
f.i(0,$.ab,L.c("#999999"),!0)
f.i(0,$.a9,L.c("#898989"),!0)
f.i(0,$.a5,L.c("#EFEFEF"),!0)
f.i(0,$.ae,L.c("#DBDBDB"),!0)
f.i(0,$.ad,L.c("#C6C6C6"),!0)
f.i(0,$.ac,L.c("#ADADAD"),!0)
f=new Q.jM(1,1,1,q,o,n,m,l,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],h,0.01,0.01,0.01,0.5,8,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a2(8,"Void",!0,!1)
$.oc=f
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#9900cc"),!0)
f.i(0,$.a4,L.c("#974AA7"),!0)
f.i(0,$.a8,L.c("#6B347D"),!0)
f.i(0,$.ag,L.c("#3D190A"),!0)
f.i(0,$.af,L.c("#2C1207"),!0)
f.i(0,$.aa,L.c("#7C3FBA"),!0)
f.i(0,$.ab,L.c("#6D34A6"),!0)
f.i(0,$.a9,L.c("#592D86"),!0)
f.i(0,$.a5,L.c("#381B76"),!0)
f.i(0,$.ae,L.c("#1E0C47"),!0)
f.i(0,$.ad,L.c("#281D36"),!0)
f.i(0,$.ac,L.c("#1D1526"),!0)
h=P.h(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),t)
k=P.h(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),t)
l=P.h(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),t)
m=P.h(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),t)
n=P.h(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
o=P.h(H.a([new E.x($.dR,2,!0),new E.x($.cC,1,!0),new E.x($.bn,-1,!0),new E.x($.ck,-1,!0),new E.x($.aM,0.01,!1)],i),j)
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#FF9B00"),!0)
q.i(0,$.a4,L.c("#FF9B00"),!0)
q.i(0,$.a8,L.c("#FF8700"),!0)
q.i(0,$.ag,L.c("#7F7F7F"),!0)
q.i(0,$.af,L.c("#727272"),!0)
q.i(0,$.aa,L.c("#A3A3A3"),!0)
q.i(0,$.ab,L.c("#999999"),!0)
q.i(0,$.a9,L.c("#898989"),!0)
q.i(0,$.a5,L.c("#EFEFEF"),!0)
q.i(0,$.ae,L.c("#DBDBDB"),!0)
q.i(0,$.ad,L.c("#C6C6C6"),!0)
q.i(0,$.ac,L.c("#ADADAD"),!0)
q=new E.iY(1,1,0.01,f,h,k,l,m," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",n,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],o,0.01,0.01,0.01,0.5,9,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a2(9,"Rage",!0,!1)
$.o8=q
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#ffcc66"),!0)
q.i(0,$.a4,L.c("#FDF9EC"),!0)
q.i(0,$.a8,L.c("#D6C794"),!0)
q.i(0,$.ag,L.c("#164524"),!0)
q.i(0,$.af,L.c("#06280C"),!0)
q.i(0,$.aa,L.c("#FFC331"),!0)
q.i(0,$.ab,L.c("#F7BB2C"),!0)
q.i(0,$.a9,L.c("#DBA523"),!0)
q.i(0,$.a5,L.c("#FFE094"),!0)
q.i(0,$.ae,L.c("#E8C15E"),!0)
q.i(0,$.ad,L.c("#F6C54A"),!0)
q.i(0,$.ac,L.c("#EDAF0C"),!0)
o=P.h(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),t)
n=P.h(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),t)
m=P.h(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),t)
l=P.h(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),t)
k=P.h(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),t)
h=P.h(H.a([new E.x($.bn,2,!0),new E.x($.dP,1,!0),new E.cN(D.lN(),null,-2,!0)],i),j)
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#FF9B00"),!0)
f.i(0,$.a4,L.c("#FF9B00"),!0)
f.i(0,$.a8,L.c("#FF8700"),!0)
f.i(0,$.ag,L.c("#7F7F7F"),!0)
f.i(0,$.af,L.c("#727272"),!0)
f.i(0,$.aa,L.c("#A3A3A3"),!0)
f.i(0,$.ab,L.c("#999999"),!0)
f.i(0,$.a9,L.c("#898989"),!0)
f.i(0,$.a5,L.c("#EFEFEF"),!0)
f.i(0,$.ae,L.c("#DBDBDB"),!0)
f.i(0,$.ad,L.c("#C6C6C6"),!0)
f.i(0,$.ac,L.c("#ADADAD"),!0)
f=new X.hF(1,1,1,q,o,n,m,l,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],k,h,0.01,0.01,0.01,0.5,10,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a2(10,"Hope",!0,!1)
$.o1=f
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#494132"),!0)
f.i(0,$.a4,L.c("#76C34E"),!0)
f.i(0,$.a8,L.c("#4F8234"),!0)
f.i(0,$.ag,L.c("#00164F"),!0)
f.i(0,$.af,L.c("#00071A"),!0)
f.i(0,$.aa,L.c("#605542"),!0)
f.i(0,$.ab,L.c("#494132"),!0)
f.i(0,$.a9,L.c("#2D271E"),!0)
f.i(0,$.a5,L.c("#CCC4B5"),!0)
f.i(0,$.ae,L.c("#A89F8D"),!0)
f.i(0,$.ad,L.c("#A29989"),!0)
f.i(0,$.ac,L.c("#918673"),!0)
h=P.h(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),t)
k=P.h(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),t)
l=P.h(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),t)
m=P.h(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),t)
n=P.h(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),t)
o=P.h(H.a([new E.x($.cB,2,!0),new E.x($.dR,1,!0),new E.x($.bG,-2,!0)],i),j)
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#FF9B00"),!0)
q.i(0,$.a4,L.c("#FF9B00"),!0)
q.i(0,$.a8,L.c("#FF8700"),!0)
q.i(0,$.ag,L.c("#7F7F7F"),!0)
q.i(0,$.af,L.c("#727272"),!0)
q.i(0,$.aa,L.c("#A3A3A3"),!0)
q.i(0,$.ab,L.c("#999999"),!0)
q.i(0,$.a9,L.c("#898989"),!0)
q.i(0,$.a5,L.c("#EFEFEF"),!0)
q.i(0,$.ae,L.c("#DBDBDB"),!0)
q.i(0,$.ad,L.c("#C6C6C6"),!0)
q.i(0,$.ac,L.c("#ADADAD"),!0)
q=new K.i8(0.01,1,0.03,f,h,k,l,m,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],n,o,0.01,0.01,0.01,0.5,11,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a2(11,"Life",!0,!1)
$.o4=q
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#9630BF"),!0)
q.i(0,$.a4,L.c("#cc87e8"),!0)
q.i(0,$.a8,L.c("#9545b7"),!0)
q.i(0,$.ag,L.c("#ae769b"),!0)
q.i(0,$.af,L.c("#8f577c"),!0)
q.i(0,$.aa,L.c("#9630bf"),!0)
q.i(0,$.ab,L.c("#693773"),!0)
q.i(0,$.a9,L.c("#4c2154"),!0)
q.i(0,$.a5,L.c("#fcf9bd"),!0)
q.i(0,$.ae,L.c("#e0d29e"),!0)
q.i(0,$.ad,L.c("#bdb968"),!0)
q.i(0,$.ac,L.c("#ab9b55"),!0)
o=P.h(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),t)
n=P.h(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),t)
m=P.h(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),t)
l=P.h(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),t)
k=P.h(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),t)
h=P.h(H.a([new E.x($.bG,3,!0),new E.x($.bn,-2,!0)],i),j)
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#FF9B00"),!0)
f.i(0,$.a4,L.c("#FF9B00"),!0)
f.i(0,$.a8,L.c("#FF8700"),!0)
f.i(0,$.ag,L.c("#7F7F7F"),!0)
f.i(0,$.af,L.c("#727272"),!0)
f.i(0,$.aa,L.c("#A3A3A3"),!0)
f.i(0,$.ab,L.c("#999999"),!0)
f.i(0,$.a9,L.c("#898989"),!0)
f.i(0,$.a5,L.c("#EFEFEF"),!0)
f.i(0,$.ae,L.c("#DBDBDB"),!0)
f.i(0,$.ad,L.c("#C6C6C6"),!0)
f.i(0,$.ac,L.c("#ADADAD"),!0)
f=new Z.h_(1.01,0.3,0.01,q,o,n,m,l,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,k,h,0.01,0.01,0.01,0.5,12,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a2(12,"Dream",!1,!1)
$.o_=f
f=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
f.i(0,$.a7,L.c("#003300"),!0)
f.i(0,$.a4,L.c("#383838"),!0)
f.i(0,$.a8,L.c("#000000"),!0)
f.i(0,$.ag,L.c("#2b1130"),!0)
f.i(0,$.af,L.c("#130017"),!0)
f.i(0,$.aa,L.c("#eba900"),!0)
f.i(0,$.ab,L.c("#c28900"),!0)
f.i(0,$.a9,L.c("#855900"),!0)
f.i(0,$.a5,L.c("#ffd800"),!0)
f.i(0,$.ae,L.c("#d1a900"),!0)
f.i(0,$.ad,L.c("#44244d"),!0)
f.i(0,$.ac,L.c("#271128"),!0)
h=P.h(H.a(["Law","Courts","Trials","Rules","Edicts","Control","Cones","Order"],p),t)
k=P.h(H.a(["LEGAL LAD","SHERRIF SURESHOT","CONE KOHAI"],p),t)
l=P.h(H.a(["Lawyer","Litigator","Lands","Laborer","Lady","Lad","Lamb","Lawman","Luchador","Lover","Legislacerator"],p),t)
m=P.h(H.a(["Judge","Law Abiding","Legal","Courting","Trail","Edict","Jury","Baliff","Verdict","Sentence","Jail","Executioner"],p),t)
n=P.h(H.a(["Themis","Phoenix","Wright","Jupiter","Dike","Marduk","Fortuna"],p),t)
o=P.h(H.a([new E.x($.cA,2,!0),new E.x($.bn,1,!0),new E.x($.cC,-2,!0),new E.x($.aM,-0.1,!1)],i),j)
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#FF9B00"),!0)
q.i(0,$.a4,L.c("#FF9B00"),!0)
q.i(0,$.a8,L.c("#FF8700"),!0)
q.i(0,$.ag,L.c("#7F7F7F"),!0)
q.i(0,$.af,L.c("#727272"),!0)
q.i(0,$.aa,L.c("#A3A3A3"),!0)
q.i(0,$.ab,L.c("#999999"),!0)
q.i(0,$.a9,L.c("#898989"),!0)
q.i(0,$.a5,L.c("#EFEFEF"),!0)
q.i(0,$.ae,L.c("#DBDBDB"),!0)
q.i(0,$.ad,L.c("#C6C6C6"),!0)
q.i(0,$.ac,L.c("#ADADAD"),!0)
q=new Q.i7(0.01,0.9,0.1,1,f,h,k,l,m,"Dirge"," A slow dirge begins to play. It is the one Death's Lawyer plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["orders","rules","edicts","sentences"],["chains","gavel","caution tape","rule book","dictionary","wig","handbook","lock"],!0,!0,n,o,0.01,0.01,0.01,0.5,14,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a2(14,"Law",!1,!1)
$.o3=q
q=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
q.i(0,$.a7,L.c("#00ff00"),!0)
q.i(0,$.a4,L.c("#00ff00"),!0)
q.i(0,$.a8,L.c("#00ff00"),!0)
q.i(0,$.ag,L.c("#00ff00"),!0)
q.i(0,$.af,L.c("#00cf00"),!0)
q.i(0,$.aa,L.c("#171717"),!0)
q.i(0,$.ab,L.c("#080808"),!0)
q.i(0,$.a9,L.c("#080808"),!0)
q.i(0,$.a5,L.c("#616161"),!0)
q.i(0,$.ae,L.c("#3b3b3b"),!0)
q.i(0,$.ad,L.c("#4a4a4a"),!0)
q.i(0,$.ac,L.c("#292929"),!0)
o=P.h(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),t)
n=P.h(H.a(["Shogun"],p),t)
m=P.h(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),t)
l=P.h(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
k=P.h(H.a([new E.x($.dR,13,!0)],i),j)
h=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
h.i(0,$.a7,L.c("#FF9B00"),!0)
h.i(0,$.a4,L.c("#FF9B00"),!0)
h.i(0,$.a8,L.c("#FF8700"),!0)
h.i(0,$.ag,L.c("#7F7F7F"),!0)
h.i(0,$.af,L.c("#727272"),!0)
h.i(0,$.aa,L.c("#A3A3A3"),!0)
h.i(0,$.ab,L.c("#999999"),!0)
h.i(0,$.a9,L.c("#898989"),!0)
h.i(0,$.a5,L.c("#EFEFEF"),!0)
h.i(0,$.ae,L.c("#DBDBDB"),!0)
h.i(0,$.ad,L.c("#C6C6C6"),!0)
h.i(0,$.ac,L.c("#ADADAD"),!0)
h=new K.j7(13,13,13,q,o,n,m," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",l,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],k,0.01,0.01,0.01,0.5,13,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!0,1,h,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
h.a2(13,"Sauce",!1,!0)
$.o9=h
h=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
h.i(0,$.a7,L.c("#080808"),!0)
h.i(0,$.a4,L.c("#BA1016"),!0)
h.i(0,$.a8,L.c("#820B0F"),!0)
h.i(0,$.ag,L.c("#381B76"),!0)
h.i(0,$.af,L.c("#1E0C47"),!0)
h.i(0,$.aa,L.c("#290704"),!0)
h.i(0,$.ab,L.c("#230200"),!0)
h.i(0,$.a9,L.c("#110000"),!0)
h.i(0,$.a5,L.c("#3D190A"),!0)
h.i(0,$.ae,L.c("#2C1207"),!0)
h.i(0,$.ad,L.c("#5C2913"),!0)
h.i(0,$.ac,L.c("#4C1F0D"),!0)
k=P.h(H.a(["Bonds","Unions","Ink","Color","Nostalgia"],p),t)
l=P.h(H.a(["FRIEND HOARDER YOUTH","INKSTERMINATOR","SOCIALIST BUTTERFLY"],p),t)
m=P.h(H.a(["Investor","Investigator","Idealist","Inhabitant","Innovator","Interpreter"],p),t)
n=P.h(H.a(["Ink","Flow","Charge","Awakening","Friendship","Trusting","Union","Team","Fresh","Vim","Chorus"],p),t)
o=P.h(H.a(["Ink","Hestia","Bastet","Bes","Vesta","Eleos","Frigg","Debella","Juno","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes","Cthulhu","The Kraken","Akkorokamui","Kanaloa"],p),t)
q=P.h(H.a([new E.x($.ck,2,!0),new E.x($.cC,1,!0),new E.x($.bG,-2,!0)],i),j)
s=new L.a1(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
s.i(0,$.a7,L.c("#FF9B00"),!0)
s.i(0,$.a4,L.c("#FF9B00"),!0)
s.i(0,$.a8,L.c("#FF8700"),!0)
s.i(0,$.ag,L.c("#7F7F7F"),!0)
s.i(0,$.af,L.c("#727272"),!0)
s.i(0,$.aa,L.c("#A3A3A3"),!0)
s.i(0,$.ab,L.c("#999999"),!0)
s.i(0,$.a9,L.c("#898989"),!0)
s.i(0,$.a5,L.c("#EFEFEF"),!0)
s.i(0,$.ae,L.c("#DBDBDB"),!0)
s.i(0,$.ad,L.c("#C6C6C6"),!0)
s.i(0,$.ac,L.c("#ADADAD"),!0)
t=new V.hJ(0.5,0.5,1,0,h,k,l,m,n,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["ink","friendship","ties","pulse","chain","ocean","festival"],["ink","photo album","friendship bracelet"],o,q,0.01,0.01,0.01,0.5,15,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Ink",null,!1,!1,!1,!1,!0,1,s,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
t.a2(15,"Ink",!1,!1)
$.o2=t
$.o7=L.nW(255,"Null",!1,!0)
t=H.a([],p)
t=new S.i6(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,t,0.5,"Knight",new H.l(0,null,null,null,null,null,0,g),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Knight",3,!0,!1)
$.qg=t
t=P.h(H.a([new E.x($.aM,0.4,!1)],i),j)
s=H.a([],p)
t=new S.ja(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Seer",new H.l(0,null,null,null,null,null,0,g),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Seer",6,!0,!1)
$.qs=t
t=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
s=H.a([],p)
t=new O.fJ("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],t,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Bard",new H.l(0,null,null,null,null,null,0,g),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Bard",9,!0,!1)
$.qc=t
t=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
s=H.a([],p)
t=new B.hE("Stalker",0.01,0.01,1.01,t,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,s,0.5,"Heir",new H.l(0,null,null,null,null,null,0,g),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Heir",8,!0,!1)
$.qf=t
t=H.a([],p)
t=new U.ij(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,t,0.5,"Maid",new H.l(0,null,null,null,null,null,0,g),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Maid",0,!0,!1)
$.qj=t
t=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
s=H.a([],p)
t=new N.j2(1.01,0.51,0.01,t,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Rogue",new H.l(0,null,null,null,null,null,0,g),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Rogue",4,!0,!1)
$.qo=t
t=H.a([],p)
t=new V.iM(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,t,0.5,"Page",new H.l(0,null,null,null,null,null,0,g),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Page",1,!0,!1)
$.qm=t
t=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
s=H.a([],p)
t=new U.jC(1.01,0.01,1.01,t,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Thief",new H.l(0,null,null,null,null,null,0,g),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Thief",7,!0,!1)
$.qv=t
t=P.h(H.a([new E.x($.aM,0.1,!1)],i),j)
s=H.a([],p)
t=new R.jt(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Sylph",new H.l(0,null,null,null,null,null,0,g),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Sylph",5,!0,!1)
$.qu=t
t=H.a([],p)
t=new N.iT("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,t,0.5,"Prince",new H.l(0,null,null,null,null,null,0,g),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Prince",10,!0,!1)
$.qn=t
t=P.h(H.a([new E.x($.aM,0.1,!1)],i),j)
s=H.a([],p)
t=new M.jR("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Witch",new H.l(0,null,null,null,null,null,0,g),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Witch",11,!0,!1)
$.qx=t
t=P.h(H.a([new E.x($.aM,0.4,!1)],i),j)
s=H.a([],p)
t=new S.ii("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Mage",new H.l(0,null,null,null,null,null,0,g),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Mage",2,!0,!1)
$.qi=t
t=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
s=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
r=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
q=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
o=P.h(H.a([new E.x($.aM,3,!1),new E.x($.n8,-2,!1)],i),j)
n=H.a([],p)
t=new E.jN("Scourge",0.01,0.01,1.01,t,s,r,q,!1,!0,!1,!1,!0,!1,o,"Glitch",0.01,0.01,0.01,n,0.5,"Waste",new H.l(0,null,null,null,null,null,0,g),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Waste",12,!1,!1)
$.qw=t
t=H.a([],p)
t=new Y.j8("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,t,0.5,"Scout",new H.l(0,null,null,null,null,null,0,g),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Scout",13,!1,!1)
$.qq=t
t=P.h(H.a([new E.x($.aM,0.5,!1)],i),j)
s=H.a([],p)
t=new L.j9("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,t,"Glitch",0.01,0.01,0.01,s,0.5,"Scribe",new H.l(0,null,null,null,null,null,0,g),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Scribe",15,!1,!1)
$.qr=t
t=P.h(H.a([new E.x($.aM,0.5,!1)],i),j)
s=H.a([],p)
t=new E.j6(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Sage",new H.l(0,null,null,null,null,null,0,g),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Sage",14,!1,!1)
$.qp=t
t=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
s=H.a([],p)
t=new Y.hC("Highlord",0.51,0.01,1.01,t,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,s,0.5,"Guide",new H.l(0,null,null,null,null,null,0,g),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Guide",16,!1,!1)
$.qe=t
t=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
s=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
r=P.h(H.a([new E.x($.aM,3,!1)],i),j)
q=H.a([],p)
t=new Y.hB(0.01,0.01,0.01,t,s,!1,!0,!1,!1,!0,!1,r,"Glitch",0.01,0.01,0.01,q,0.5,"Grace",new H.l(0,null,null,null,null,null,0,g),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Grace",17,!1,!1)
$.qd=t
t=P.h(H.a([new E.x($.aM,0.1,!1)],i),j)
s=H.a([],p)
t=new E.it("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,t,"Glitch",0.01,0.01,0.01,s,0.5,"Muse",new H.l(0,null,null,null,null,null,0,g),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Muse",18,!1,!1)
$.qk=t
t=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
s=Q.u(null,null,d)
r=P.h(H.a([new E.x($.aM,0.1,!1)],i),j)
q=H.a([],p)
t=new Z.ih("Shogun",0.01,0.5,2.01,t,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,s,r,"Glitch",0.01,0.01,0.01,q,0.5,"Lord",new H.l(0,null,null,null,null,null,0,g),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Lord",19,!1,!1)
$.qh=t
t=P.h(H.a([new E.x($.aM,-0.1,!1),new E.x($.bG,1,!1)],i),j)
s=H.a([],p)
t=new Y.je("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,t,"Glitch",0.01,0.01,0.01,s,0.5,"Smith",new H.l(0,null,null,null,null,null,0,g),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.R("Smith",20,!1,!1)
$.qt=t
$.ql=T.qb("Null",255,!1,!0)
t=P.h(H.a([new E.x($.bn,1,!0),new E.x($.dP,1,!0)],i),j)
s=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
r=H.a(["Lyricist","Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass","Instrumentalist"],p)
q=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
o=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new F.iu(t,s,r,q,o,!1,n,m,l,k,1,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"loud","musical","Music")
t.B()
t.C()
B.b2(t)
$.oI=t
t=P.h(H.a([new E.x($.cA,-2,!0)],i),j)
s=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
r=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist","Ichthyologist","Instructor"],p)
q=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
o=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new S.fC(t,s,r,q,o,!1,n,m,l,k,13,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"nerdy","smart","Academic")
t.B()
t.C()
B.b2(t)
$.oB=t
t=P.h(H.a([new E.x($.dR,2,!0)],i),j)
s=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
r=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler","Iceskater"],p)
q=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
o=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new M.fI(t,s,r,q,o,!1,n,m,l,k,4,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"dumb","athletic","Athletic")
t.B()
t.C()
B.b2(t)
$.oC=t
t=P.h(H.a([new E.x($.dQ,-1,!0),new E.x($.dP,1,!0)],i),j)
s=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
r=H.a(["LaughMaster","Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor","Imp"],p)
q=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
o=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new A.fQ(t,s,r,q,o,!1,n,m,l,k,0,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"dorky","funny","Comedy")
t.B()
t.C()
B.b2(t)
$.oD=t
t=P.h(H.a([new E.x($.bn,-1,!0),new E.x($.cB,-1,!0)],i),j)
s=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
r=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business","Idealist"],p)
q=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
o=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new M.fV(t,s,r,q,o,!1,n,m,l,k,2,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"pretentious","cultured","Culture")
t.B()
t.C()
B.b2(t)
$.oE=t
t=P.h(H.a([new E.x($.bn,1,!0),new E.x($.ck,1,!0)],i),j)
s=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
r=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer","Innkeeper"],p)
q=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
o=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new V.fY(t,s,r,q,o,!1,n,m,l,k,8,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"boring","domestic","Domestic")
t.B()
t.C()
B.b2(t)
$.oF=t
t=P.h(H.a([new E.x($.dP,1,!0),new E.x($.bG,1,!0)],i),j)
s=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
r=H.a(["Lich","Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart","Illusionist"],p)
q=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
o=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new U.hm(t,s,r,q,o,!1,n,m,l,k,7,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"whimpy","imaginative","Fantasy")
t.B()
t.C()
B.b2(t)
$.oG=t
t=P.h(H.a([new E.x($.dR,1,!0),new E.x($.cB,1,!0)],i),j)
s=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
r=H.a(["Legislator","Legalist","Legislacerator","Lawman","Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel","Investigator"],p)
q=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
o=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new N.i4(t,s,r,q,o,!1,n,m,l,k,6,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"harsh","fair-minded","Justice")
t.B()
t.C()
B.b2(t)
$.oH=t
t=P.h(H.a([new E.x($.cC,2,!0)],i),j)
s=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
r=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent","Imposter"],p)
q=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
o=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new G.iR(t,s,r,q,o,!1,n,m,l,k,9,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"frivolous","geeky","PopCulture")
t.B()
t.C()
B.b2(t)
$.oK=t
t=P.h(H.a([new E.x($.ck,2,!0)],i),j)
s=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
r=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team","Idealist"],p)
q=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
o=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new Q.j3(t,s,r,q,o,!1,n,m,l,k,12,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"obsessive","romantic","Romantic")
t.B()
t.C()
B.b2(t)
$.oL=t
t=P.h(H.a([new E.x($.bn,2,!0)],i),j)
s=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
r=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally","Icebreaker"],p)
q=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
o=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new N.jf(t,s,r,q,o,!1,n,m,l,k,11,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"shallow","extroverted","Social")
t.B()
t.C()
B.b2(t)
$.oM=t
t=P.h(H.a([new E.x($.ck,-1,!0),new E.x($.bn,-1,!0)],i),j)
s=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
r=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod","Iconoclast","Infidel"],p)
q=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
o=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new V.jz(t,s,r,q,o,!1,n,m,l,k,5,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"terrible","honest","Terrible")
t.B()
t.C()
B.b2(t)
$.oO=t
t=P.h(H.a([new E.x($.cA,2,!0)],i),j)
s=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
r=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis","Illustrator"],p)
q=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
o=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new F.jS(t,s,r,q,o,!1,n,m,l,k,3,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"wordy","lettered","Writing")
t.B()
t.C()
B.b2(t)
$.oP=t
t=P.h(H.a([new E.x($.bG,2,!0)],i),j)
s=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
r=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data","Incinerator"],p)
q=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
o=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
n=H.a(["nobody"],p)
m=P.h(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new D.jy(t,s,r,q,o,!1,n,m,l,k,10,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"awkward","techy","Technology")
t.B()
t.C()
B.b2(t)
$.oN=t
t=H.a(["nobody"],p)
j=P.h(H.a([],i),j)
i=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
t=new B.c9(!0,t,j,i,p,-13,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.u(null,null,d),"","","Null")
t.B()
t.C()
B.b2(t)
$.oJ=t
t=document
c=t.querySelector("#aspects")
s=L.od()
b=P.bW(s,!0,H.C(s,0))
C.a.aU(b,new X.lb())
for(s=b.length,a=0;a<b.length;b.length===s||(0,H.bO)(b),++a){a0=b[a]
a1=t.createElement("div")
a1.className="box"
r=t.createElement("div")
r.className="title"
q=r.style
p=a0.gZ().p(0,$.a5).bp()
q.backgroundColor=p
q=t.createElement("div")
q.className="aspectIcon"
p=W.mC(null,null,null)
o=a0.Q
p.src="../../images/"+o+".png"
q.appendChild(p)
r.appendChild(q)
q=t.createElement("h1")
q.className="title"
p=q.style
n=a0.gZ().p(0,$.a4).bp()
p.color=n
q.textContent=o
r.appendChild(q)
a1.appendChild(r)
r=t.createElement("h3")
q=t.createElement("span")
p=a0.cx
q.className=p?"canon":"fanon"
q.textContent=p?"Canon":"Fanon"
r.appendChild(q)
r.appendChild(t.createTextNode(", id: "+a0.e))
a1.appendChild(r)
a2=t.createElement("div")
a2.className="section"
r=t.createElement("h4")
r.textContent="Properties"
a2.appendChild(r)
if(a0.gb_()){r=t.createElement("p")
r.textContent="Deadpan"
r.title="Mentally unaffected by trickster mode"
a2.appendChild(r)}if(a0.gc0()){r=t.createElement("p")
r.textContent="Ultimate Deadpan"
r.title="Physically unaffected by trickster mode"
a2.appendChild(r)}r=t.createElement("p")
r.textContent="Power boost mult: "+a0.fr
a2.appendChild(r)
a1.appendChild(a2)
a1.appendChild(X.m_(a0.gI()))
a1.appendChild(X.bo("Levels",a0.gH()))
r=t.createElement("div")
r.className="section"
r.appendChild(X.bo("Names",a0.ga3()))
q=t.createElement("div")
q.className="section"
p=t.createElement("p")
p.className="toggleTitle"
p.textContent=a0.ga5()
q.appendChild(p)
p=t.createElement("p")
p.textContent=a0.ga4()
q.appendChild(p)
r.appendChild(X.cL("Song",q))
a1.appendChild(X.cL("Denizen",r))
r=t.createElement("div")
r.className="section"
a1.appendChild(X.cL("Quests",r))
a1.appendChild(X.bo("ChumHandles",a0.gJ()))
a1.appendChild(X.bo("Land Names",a0.ga7()))
a1.appendChild(X.bo("Fraymotif Names",a0.ga6()))
a1.appendChild(X.cL("Palette",a0.gZ().e9(o)))
c.appendChild(a1)}a3=t.querySelector("#classes")
s=T.qy()
a4=P.bW(s,!0,H.C(s,0))
C.a.aU(a4,new X.lc())
for(s=a4.length,a=0;a<a4.length;a4.length===s||(0,H.bO)(a4),++a){a5=a4[a]
a1=t.createElement("div")
a1.className="box"
r=t.createElement("div")
r.className="title"
q=r.style
q.backgroundColor="#CCCCCC"
q=t.createElement("div")
q.className="classIcon"
p=W.mC(null,null,null)
o=J.b_(a5)
p.src="../../images/Bodies/god"+H.t(J.dg(o.gak(a5),1))+".png"
q.appendChild(p)
r.appendChild(q)
q=t.createElement("h1")
q.className="title"
p=q.style
p.color="#FFFFFF"
p=q.style
p.marginLeft="48px"
p=q.style
p.marginTop="19px"
p=q.style
n=(p&&C.m).c5(p,"text-shadow")
p.setProperty(n,"-1px -1px 0px black, -1px 1px 0px black, 1px 1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, 0px 1px 0px black, 0px -1px 0px black","")
q.textContent=o.gM(a5)
r.appendChild(q)
a1.appendChild(r)
r=t.createElement("h3")
q=t.createElement("span")
q.className=a5.gbR()?"canon":"fanon"
q.textContent=a5.gbR()?"Canon":"Fanon"
r.appendChild(q)
r.appendChild(t.createTextNode(", id: "+o.gak(a5)))
a1.appendChild(r)
a2=t.createElement("div")
a2.className="section"
r=t.createElement("h4")
r.textContent="Properties"
a2.appendChild(r)
if(a5.Y()){r=t.createElement("p")
r.textContent="Active"
a2.appendChild(r)}else{r=t.createElement("p")
r.textContent="Passive"
a2.appendChild(r)}if(a5.aq()){r=t.createElement("p")
r.textContent="Has interaction effect"
r.title="Affects the stats of friends or enemies."
a2.appendChild(r)}if(a5.X()){r=t.createElement("p")
r.textContent="High initial stats"
a2.appendChild(r)}r=t.createElement("p")
r.textContent="Power boost mult: "+a5.gcJ()
a2.appendChild(r)
a1.appendChild(a2)
a1.appendChild(X.m_(a5.gI()))
a1.appendChild(X.bo("Levels",a5.gH()))
r=t.createElement("div")
r.className="section"
r.appendChild(X.bo("Pre-Denizen",a5.ga0()))
r.appendChild(X.bo("Post-Denizen",a5.ga_()))
a1.appendChild(X.cL("Quests",r))
a1.appendChild(X.bo("ChumHandles",a5.gJ()))
r=t.createElement("div")
r.className="section"
q=t.createElement("p")
q.textContent="Attacker multiplier: "+H.t(a5.a8())
r.appendChild(q)
q=t.createElement("p")
q.textContent="Defender multiplier: "+H.t(a5.a9())
r.appendChild(q)
q=t.createElement("p")
q.textContent="Murderous mlultiplier: "+H.t(a5.aa())
r.appendChild(q)
a1.appendChild(X.cL("PvP Stats",r))
a3.appendChild(a1)}a6=t.querySelector("#interests")
s=B.oQ()
a7=P.bW(s,!0,H.C(s,0))
C.a.aU(a7,new X.ld())
for(s=a7.length,a=0;a<a7.length;a7.length===s||(0,H.bO)(a7),++a){a8=a7[a]
a1=t.createElement("div")
a1.className="box"
r=t.createElement("div")
r.className="title"
q=r.style
q.backgroundColor="#CCCCCC"
q=t.createElement("h1")
q.className="title"
p=q.style
p.color="#FFFFFF"
p=q.style
p.marginLeft="10px"
p=q.style
p.marginTop="19px"
p=q.style
o=(p&&C.m).c5(p,"text-shadow")
p.setProperty(o,"-1px -1px 0px black, -1px 1px 0px black, 1px 1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, 0px 1px 0px black, 0px -1px 0px black","")
p=J.b_(a8)
q.textContent=p.gM(a8)
r.appendChild(q)
a1.appendChild(r)
r=t.createElement("h3")
r.appendChild(t.createTextNode("id: "+H.t(p.gak(a8))))
a1.appendChild(r)
a1.appendChild(X.m_(a8.gI()))
a1.appendChild(X.bo("Sub-types",a8.gaf()))
a1.appendChild(X.bo("Levels",a8.gH()))
r=t.createElement("div")
r.className="section"
r.appendChild(X.bo("First",a8.gad()))
r.appendChild(X.bo("Second",a8.gae()))
a1.appendChild(X.cL("ChumHandles",r))
a6.appendChild(a1)}},
m_:function(a){var t,s,r,q,p,o,n
t=document
s=t.createElement("div")
s.className="section"
r=t.createElement("h4")
r.textContent="Stats"
s.appendChild(r)
s.appendChild(t.createElement("table"))
for(r=J.bq(a);r.K();){q=r.gN()
p=t.createElement("tr")
o=t.createElement("td")
n=J.ai(q)
if(!!n.$iseb)o.textContent="Stats from Interests"
else if(!!n.$iscN){o.textContent="[Random Stat]"
o.title=P.i_(q.d,"(",")")}else o.textContent=J.aP(q.gd6())
p.appendChild(o)
n=t.createElement("td")
n.className="number"
n.textContent="x "+H.t(q.gey())
p.appendChild(n)
s.appendChild(p)}return s},
cL:function(a,b){var t,s,r,q,p,o
t=document
s=t.createElement("div")
s.className="toggleOuter"
r=t.createElement("div")
r.className="toggleBox"
q=r.style
q.display="none"
p=t.createElement("span")
p.className="toggleClickable"
q=t.createElement("span")
q.className="toggleTitle"
q.textContent=a
p.appendChild(q)
o=t.createElement("span")
o.className="toggleButton"
C.j.bt(o,"[+]")
W.nm(p,"click",new X.li(r,o),!1,W.bX)
p.appendChild(o)
s.appendChild(p)
r.appendChild(b)
s.appendChild(r)
return s},
bo:function(a,b){var t,s,r,q,p,o
t=document
s=t.createElement("div")
s.className="section"
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.bO)(b),++q){p=b[q]
o=t.createElement("p")
o.className="listItem"
o.textContent=J.aP(p)
s.appendChild(o)}return X.cL(a,s)},
lb:function lb(){},
lc:function lc(){},
ld:function ld(){},
li:function li(a,b){this.a=a
this.b=b}},N={T:function T(){},i4:function i4(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},iT:function iT(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1},j2:function j2(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1},jf:function jf(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jg:function jg(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
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
_.x1=x1},jD:function jD(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
_.O=O
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
_.x1=x1}},E={ey:function ey(){},iJ:function iJ(){},x:function x(a,b,c){this.a=a
this.b=b
this.c=c},cN:function cN(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},it:function it(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1},iY:function iY(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
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
_.x1=x1},j6:function j6(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1},jN:function jN(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1}},Y={hB:function hB(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
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
_.r1=r1},hC:function hC(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
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
_.r1=r1},c_:function c_(a,b){this.a=a
this.b=b},O:function O(a,b){this.a=a
this.b=b},br:function br(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},aw:function aw(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},y:function y(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},eh:function eh(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ap:function ap(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bd:function bd(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},fP:function fP(c,a,b){this.c=c
this.a=a
this.b=b},ao:function ao(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},dN:function dN(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ew:function ew(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},f6:function f6(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},j8:function j8(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1},je:function je(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1},
r6:function(a){var t,s,r,q
t=C.w.f0(a," ")
for(s=t.gT(t),r="";s.K();){q=s.gN()
r+=" "+(H.t(q.p(0,0).fc(0))+H.t(q.bu(0,1)))}return r}},B={hE:function hE(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,w,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
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
b2:function(a){var t=a.f
if($.$get$eF().ah(t))throw H.A("Duplicate aspect id for "+a.A(0)+": "+t+" is already registered for "+J.aP($.$get$eF().p(0,t))+".")
$.$get$eF().h(0,t,a)},
oQ:function(){var t=$.$get$eF()
t=t.gaK(t)
return new H.bJ(t,new B.hL(),[H.ak(t,"z",0)])},
hL:function hL(){},
c9:function c9(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},Q={i7:function i7(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,O,aF,aG,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
_.O=O
_.aF=aF
_.aG=aG
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
_.x1=x1},j3:function j3(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jM:function jM(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
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
u:function(a,b,c){var t=new Q.jP(null,null,[c])
t.dk(a,b,c)
return t},
lP:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.u(d,null,e)
s=a.gG(a)
C.a.sG(t.b,s)
if(H.fu(a,"$isz",[e],"$asz"))if(H.fu(a,"$isbI",[e],"$asbI"))for(s=J.bq(a.gbo()),r=0;s.K();){q=s.gN()
p=t.b
o=p.length
if(r>=o)return H.U(p,r)
p[r]=q;++r}else for(s=a.gT(a),p=[H.C(t,0)],r=0;s.K();){n=s.gN()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.U(o,r)
o[r]=new Q.d(n,m,p);++r}else for(s=a.gT(a),p=[e],o=[H.C(t,0)];s.K();){l=s.gN()
if(H.r7(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.U(m,0)
m[0]=new Q.d(l,k,o)}else if(H.fu(l,"$isd",p,null)){m=t.b
k=m.length
if(0>=k)return H.U(m,0)
m[0]=l}else throw H.A("Invalid entry type "+H.t(J.ma(l))+" for WeightedList<"+H.t(H.aB(H.bN(e)))+">. Should be "+H.t(H.aB(H.bN(e)))+" or WeightPair<"+H.t(H.aB(H.bN(e)))+">.")}return t},
lQ:function(a,b,c,d){return new Q.fh(J.mb(a.gbo(),new Q.jQ(c,d,b)),null,[c,d])},
bI:function bI(){},
jP:function jP(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
fg:function fg(){},
d:function d(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
cG:function cG(){},
dV:function dV(){},
jO:function jO(a,$ti){this.a=a
this.$ti=$ti},
fh:function fh(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c}},K={i8:function i8(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
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
_.x1=x1},j7:function j7(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
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
_.x1=x1}},G={i9:function i9(x2,y1,y2,l,m,n,q,t,u,v,w,F,E,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.F=F
_.E=E
_.D=D
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
_.x1=x1},iR:function iR(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
ok:function(a){var t,s,r,q,p,o,n
t=G.J
s=P.eT(a,t)
r=P.bl(null,null,null,t)
q=H.a([],[G.eg])
for(t=G.pt(),p=J.bq(t.a),t=new H.fi(p,t.b,[H.C(t,0)]);t.K();){o=p.gN()
if(o.eT(s))q.push(o)}C.a.d4(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bO)(q),++n){o=q[n]
if(o.eT(s)){r.j(0,o)
for(p=o.gd7(),p=p.gT(p);p.K();)s.ai(0,p.gN())}}if(s.a!==0)r.ao(0,s)
return r},
pt:function(){var t=$.$get$mV()
t.toString
return new H.bJ(t,new G.hX(),[H.C(t,0)])},
J:function J(){},
eg:function eg(){},
hX:function hX(){}},F={iu:function iu(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jS:function jS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},R={
n6:function(a){var t,s
if(a.gG(a).aM(0,1)){a.p(0,1)
a.p(0,1)
t=!0}else t=!1
s=a.p(0,0)
s.geZ(s).gfb().f4("checking for two players, ps is "+H.t(a)+", ret is "+t)
return t},
q8:function(a){return R.n6(a)&&R.pX(a)},
pU:function(a){a.gac(a).gaY()
return!1},
q7:function(a){a.gac(a).gaY()
return!1},
pX:function(a){a.gac(a).gaY()
return!1},
q6:function(a){a.gac(a).gaY()
return!1},
q5:function(a){return a.gac(a).gaZ().gfa()},
q3:function(a){return a.gac(a).gaZ().gf8()},
q1:function(a){return a.gac(a).gaZ().gf7()},
pY:function(a){return a.gac(a).gaZ().gf5()},
q_:function(a){return a.gac(a).gaZ().gf6()},
q4:function(a){return a.gac(a).gaZ().gf9()},
pZ:function(a){var t=a.gac(a)
t.gaY()
t.gaY()
return!1},
q0:function(a){return a.gac(a).geu()},
q2:function(a){a.gac(a).geu()
return!1},
pV:function(a){return!0},
pW:function(a){a.gac(a).gf3()
return!1},
iU:function iU(){},
H:function H(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
w:function w(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
K:function K(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
ar:function ar(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
jt:function jt(r2,rx,ry,x1,x2,y1,y2,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.l=l
_.m=m
_.n=n
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
_.r1=r1}},D={jy:function jy(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
qE:function(){var t,s
if($.n9)return
$.n9=!0
t=new D.aJ("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
t.y=0
$.n8=t
t=new D.aJ("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
$.qC=t
t=new D.fk(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
t.y=2.5
t.Q=1
$.dR=t
t=new D.fk(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
t.y=2.5
$.cB=t
t=new D.aJ("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
$.qB=t
t=new D.aJ("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
$.cC=t
t=new D.j1("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
$.ck=t
t=new D.aJ("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
$.bn=t
t=new D.aJ("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
$.cA=t
t=new D.aJ("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
$.dP=t
t=new D.aJ("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
$.dQ=t
t=new D.aJ("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
$.bG=t
t=new D.aJ("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$aZ().push(t)
$.aM=t
t=P.D
s=D.aJ
$.qD=H.om(P.px($.$get$aZ(),new D.jk(),new D.jl(),t,s),t,s)},
lN:function(){var t=$.$get$aZ()
return new H.bJ(t,new D.jm(),[H.C(t,0)])},
jk:function jk(){},
jl:function jl(){},
jm:function jm(){},
aJ:function aJ(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
fk:function fk(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
j1:function j1(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
var v=[C,H,J,P,W,S,L,M,O,T,A,V,U,Z,X,N,E,Y,B,Q,K,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.lF.prototype={}
J.I.prototype={
P:function(a,b){return a===b},
gW:function(a){return H.cy(a)},
A:function(a){return H.iS(a)},
gV:function(a){return new H.cl(H.l1(a),null)}}
J.i0.prototype={
A:function(a){return String(a)},
gW:function(a){return a?519018:218159},
gV:function(a){return C.V},
$isc1:1}
J.eS.prototype={
P:function(a,b){return null==b},
A:function(a){return"null"},
gW:function(a){return 0},
gV:function(a){return C.P},
$isbE:1}
J.dB.prototype={
gW:function(a){return 0},
gV:function(a){return C.O},
A:function(a){return String(a)},
$ismX:1}
J.iQ.prototype={}
J.cF.prototype={}
J.cw.prototype={
A:function(a){var t=a[$.$get$mj()]
return t==null?this.dc(a):J.aP(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.cu.prototype={
bQ:function(a,b){if(!!a.immutable$list)throw H.A(new P.aN(b))},
cC:function(a,b){if(!!a.fixed$length)throw H.A(new P.aN(b))},
j:function(a,b){this.cC(a,"add")
a.push(b)},
am:function(a,b){return new H.d5(a,b,[H.C(a,0),null])},
au:function(a,b){if(b<0||b>=a.length)return H.U(a,b)
return a[b]},
gac:function(a){if(a.length>0)return a[0]
throw H.A(H.lD())},
aT:function(a,b,c,d,e){var t,s,r
this.bQ(a,"setRange")
P.n7(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aC(P.ch(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.A(H.pu())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r<0||r>=d.length)return H.U(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r<0||r>=d.length)return H.U(d,r)
a[b+s]=d[r]}},
cz:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.A(new P.bs(a))}return!1},
aU:function(a,b){var t
this.bQ(a,"sort")
t=b==null?P.r8():b
H.fb(a,0,a.length-1,t)},
d4:function(a){return this.aU(a,null)},
ag:function(a,b){var t
for(t=0;t<a.length;++t)if(J.aO(a[t],b))return!0
return!1},
A:function(a){return P.eP(a,"[","]")},
a1:function(a,b){var t=H.a(a.slice(0),[H.C(a,0)])
return t},
an:function(a){return this.a1(a,!0)},
gT:function(a){return new J.fG(a,a.length,0,null,[H.C(a,0)])},
gW:function(a){return H.cy(a)},
gG:function(a){return a.length},
sG:function(a,b){this.cC(a,"set length")
if(b<0)throw H.A(P.ch(b,0,null,"newLength",null))
a.length=b},
p:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.A(H.aH(a,b))
if(b>=a.length||b<0)throw H.A(H.aH(a,b))
return a[b]},
h:function(a,b,c){this.bQ(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.A(H.aH(a,b))
if(b>=a.length||b<0)throw H.A(H.aH(a,b))
a[b]=c},
$isbc:1,
$asbc:function(){},
$isR:1,
$asR:null,
$isL:1,
$asL:null,
$isz:1,
$asz:null}
J.lE.prototype={}
J.fG.prototype={
gN:function(){return this.d},
K:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.A(H.bO(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.d4.prototype={
az:function(a,b){var t
if(typeof b!=="number")throw H.A(H.bM(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbS(b)
if(this.gbS(a)===t)return 0
if(this.gbS(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbS:function(a){return a===0?1/a<0:a<0},
b2:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.A(new P.aN(""+a+".floor()"))},
bX:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.A(new P.aN(""+a+".round()"))},
U:function(a,b,c){if(C.b.az(b,c)>0)throw H.A(H.bM(b))
if(this.az(a,b)<0)return b
if(this.az(a,c)>0)return c
return a},
eR:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.A(P.ch(b,2,36,"radix",null))
t=a.toString(b)
if(C.e.e4(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aC(new P.aN("Unexpected toString result: "+t))
r=J.bf(s)
t=r.p(s,1)
q=+r.p(s,3)
if(r.p(s,2)!=null){t+=r.p(s,2)
q-=r.p(s,2).length}return t+C.e.aw("0",q)},
A:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
av:function(a,b){if(typeof b!=="number")throw H.A(H.bM(b))
return a+b},
aw:function(a,b){return a*b},
ab:function(a,b){return(a|0)===a?a/b|0:this.dY(a,b)},
dY:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.A(new P.aN("Result of truncating division is "+H.t(t)+": "+H.t(a)+" ~/ "+b))},
cs:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
aN:function(a,b){if(typeof b!=="number")throw H.A(H.bM(b))
return a<b},
aM:function(a,b){if(typeof b!=="number")throw H.A(H.bM(b))
return a>b},
gV:function(a){return C.Y},
$isby:1}
J.eR.prototype={
gV:function(a){return C.X},
$isG:1,
$isby:1,
$isP:1}
J.i1.prototype={
gV:function(a){return C.W},
$isG:1,
$isby:1}
J.cv.prototype={
e4:function(a,b){if(b<0)throw H.A(H.aH(a,b))
if(b>=a.length)H.aC(H.aH(a,b))
return a.charCodeAt(b)},
c6:function(a,b){if(b>=a.length)throw H.A(H.aH(a,b))
return a.charCodeAt(b)},
av:function(a,b){if(typeof b!=="string")throw H.A(P.fF(b,null,null))
return a+b},
d5:function(a,b,c){var t
if(c>a.length)throw H.A(P.ch(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
c2:function(a,b){return this.d5(a,b,0)},
d8:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aC(H.bM(c))
if(b<0)throw H.A(P.j_(b,null,null))
if(typeof c!=="number")return H.df(c)
if(b>c)throw H.A(P.j_(b,null,null))
if(c>a.length)throw H.A(P.j_(c,null,null))
return a.substring(b,c)},
bu:function(a,b){return this.d8(a,b,null)},
eQ:function(a){return a.toLowerCase()},
aw:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.A(C.t)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
eC:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.aw(c,t)+a},
e6:function(a,b,c){if(c>a.length)throw H.A(P.ch(c,0,a.length,null,null))
return H.rp(a,b,c)},
az:function(a,b){var t
if(typeof b!=="string")throw H.A(H.bM(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
A:function(a){return a},
gW:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gV:function(a){return C.Q},
gG:function(a){return a.length},
p:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.A(H.aH(a,b))
if(b>=a.length||b<0)throw H.A(H.aH(a,b))
return a[b]},
$isbc:1,
$asbc:function(){},
$isD:1}
H.L.prototype={$asL:null}
H.cx.prototype={
gT:function(a){return new H.eV(this,this.gG(this),0,null,[H.ak(this,"cx",0)])},
bq:function(a,b){return this.da(0,b)},
am:function(a,b){return new H.d5(this,b,[H.ak(this,"cx",0),null])},
a1:function(a,b){var t,s,r
t=H.a([],[H.ak(this,"cx",0)])
C.a.sG(t,this.gG(this))
for(s=0;s<this.gG(this);++s){r=this.au(0,s)
if(s>=t.length)return H.U(t,s)
t[s]=r}return t},
an:function(a){return this.a1(a,!0)}}
H.eV.prototype={
gN:function(){return this.d},
K:function(){var t,s,r,q
t=this.a
s=J.bf(t)
r=s.gG(t)
if(this.b!==r)throw H.A(new P.bs(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.au(t,q);++this.c
return!0}}
H.dD.prototype={
gT:function(a){return new H.eX(null,J.bq(this.a),this.b,this.$ti)},
gG:function(a){return J.dh(this.a)},
$asz:function(a,b){return[b]}}
H.em.prototype={$isL:1,
$asL:function(a,b){return[b]},
$asz:function(a,b){return[b]}}
H.eX.prototype={
K:function(){var t=this.b
if(t.K()){this.a=this.c.$1(t.gN())
return!0}this.a=null
return!1},
gN:function(){return this.a},
$aseQ:function(a,b){return[b]}}
H.d5.prototype={
gG:function(a){return J.dh(this.a)},
au:function(a,b){return this.b.$1(J.nN(this.a,b))},
$ascx:function(a,b){return[b]},
$asL:function(a,b){return[b]},
$asz:function(a,b){return[b]}}
H.bJ.prototype={
gT:function(a){return new H.fi(J.bq(this.a),this.b,this.$ti)},
am:function(a,b){return new H.dD(this,b,[H.C(this,0),null])}}
H.fi.prototype={
K:function(){var t,s
for(t=this.a,s=this.b;t.K();)if(s.$1(t.gN())===!0)return!0
return!1},
gN:function(){return this.a.gN()}}
H.eu.prototype={}
H.lg.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.lh.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.kw.prototype={}
H.da.prototype={
cw:function(a,b){if(!this.f.P(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.bO()},
eL:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.ai(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.U(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.U(p,q)
p[q]=r
if(q===s.c)s.cd();++s.d}this.y=!1}this.bO()},
e0:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ai(a),s=0;r=this.ch,s<r.length;s+=2)if(t.P(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.U(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
eK:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ai(a),s=0;r=this.ch,s<r.length;s+=2)if(t.P(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aC(new P.aN("removeRange"))
P.n7(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d1:function(a,b){if(!this.r.P(0,a))return
this.db=b},
ek:function(a,b,c){var t=J.ai(b)
if(!t.P(b,0))t=t.P(b,1)&&!this.cy
else t=!0
if(t){J.di(a,c)
return}t=this.cx
if(t==null){t=P.lJ(null,null)
this.cx=t}t.ax(new H.kr(a,c))},
ej:function(a,b){var t
if(!this.r.P(0,a))return
t=J.ai(b)
if(!t.P(b,0))t=t.P(b,1)&&!this.cy
else t=!0
if(t){this.bn()
return}t=this.cx
if(t==null){t=P.lJ(null,null)
this.cx=t}t.ax(this.gew())},
el:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.m5(a)
if(b!=null)P.m5(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aP(a)
s[1]=b==null?null:J.aP(b)
for(r=new P.cK(t,t.r,null,null,[null]),r.c=t.e;r.K();)J.di(r.d,s)},
b1:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.b0(o)
p=H.bx(o)
this.el(q,p)
if(this.db===!0){this.bn()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gev()
if(this.cx!=null)for(;n=this.cx,!n.gal(n);)this.cx.cK().$0()}return s},
cH:function(a){return this.b.p(0,a)},
c4:function(a,b){var t=this.b
if(t.ah(a))throw H.A(P.h4("Registry: ports must be registered only once."))
t.h(0,a,b)},
bO:function(){var t=this.b
if(t.gG(t)-this.c.a>0||this.y||!this.x)u.globalState.z.h(0,this.a,this)
else this.bn()},
bn:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.aS(0)
for(t=this.b,s=t.gaK(t),s=s.gT(s);s.K();)s.gN().dz()
t.aS(0)
this.c.aS(0)
u.globalState.z.ai(0,this.a)
this.dx.aS(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.U(t,p)
J.di(q,t[p])}this.ch=null}},
gak:function(a){return this.a},
gev:function(){return this.d},
ge7:function(){return this.e}}
H.kr.prototype={
$0:function(){J.di(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.k7.prototype={
ea:function(){var t=this.a
if(t.b===t.c)return
return t.cK()},
cO:function(){var t,s,r
t=this.ea()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.ah(u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gal(s)}else s=!1
else s=!1
else s=!1
if(s)H.aC(P.h4("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gal(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.dC(["command","close"])
r=new H.bL(!0,new P.fp(0,null,null,null,null,null,0,[null,P.P])).aj(r)
s.toString
self.postMessage(r)}return!1}t.eI()
return!0},
co:function(){if(self.window!=null)new H.k8(this).$0()
else for(;this.cO(););},
b9:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.co()
else try{this.co()}catch(r){t=H.b0(r)
s=H.bx(r)
q=u.globalState.Q
p=P.dC(["command","error","msg",H.t(t)+"\n"+H.t(s)])
p=new H.bL(!0,P.e0(null,P.P)).aj(p)
q.toString
self.postMessage(p)}}}
H.k8.prototype={
$0:function(){if(!this.a.cO())return
P.qH(C.n,this)},
$S:function(){return{func:1,v:true}}}
H.cI.prototype={
eI:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.b1(this.b)}}
H.kv.prototype={}
H.hM.prototype={
$0:function(){H.oU(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.hN.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.de(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.de(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.bO()},
$S:function(){return{func:1,v:true}}}
H.jY.prototype={}
H.db.prototype={
bs:function(a,b){var t,s,r
t=u.globalState.z.p(0,this.a)
if(t==null)return
s=this.b
if(s.gcg())return
r=H.qW(b)
if(t.ge7()===s){s=J.bf(r)
switch(s.p(r,0)){case"pause":t.cw(s.p(r,1),s.p(r,2))
break
case"resume":t.eL(s.p(r,1))
break
case"add-ondone":t.e0(s.p(r,1),s.p(r,2))
break
case"remove-ondone":t.eK(s.p(r,1))
break
case"set-errors-fatal":t.d1(s.p(r,1),s.p(r,2))
break
case"ping":t.ek(s.p(r,1),s.p(r,2),s.p(r,3))
break
case"kill":t.ej(s.p(r,1),s.p(r,2))
break
case"getErrors":s=s.p(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.p(r,1)
t.dx.ai(0,s)
break}return}u.globalState.f.a.ax(new H.cI(t,new H.ky(this,r),"receive"))},
P:function(a,b){if(b==null)return!1
return b instanceof H.db&&J.aO(this.b,b.b)},
gW:function(a){return this.b.gbG()}}
H.ky.prototype={
$0:function(){var t=this.a.b
if(!t.gcg())t.du(this.b)},
$S:function(){return{func:1}}}
H.e3.prototype={
bs:function(a,b){var t,s,r
t=P.dC(["command","message","port",this,"msg",b])
s=new H.bL(!0,P.e0(null,P.P)).aj(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.p(0,this.b)
if(r!=null)r.postMessage(s)}},
P:function(a,b){if(b==null)return!1
return b instanceof H.e3&&J.aO(this.b,b.b)&&J.aO(this.a,b.a)&&J.aO(this.c,b.c)},
gW:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aO()
s=this.a
if(typeof s!=="number")return s.aO()
r=this.c
if(typeof r!=="number")return H.df(r)
return(t<<16^s<<8^r)>>>0}}
H.d8.prototype={
dz:function(){this.c=!0
this.b=null},
du:function(a){if(this.c)return
this.b.$1(a)},
$isq9:1,
gbG:function(){return this.a},
gcg:function(){return this.c}}
H.jE.prototype={
dj:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.ax(new H.cI(s,new H.jF(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.e7(new H.jG(this,b),0),a)}else throw H.A(new P.aN("Timer greater than 0."))}}
H.jF.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.jG.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.bR.prototype={
gW:function(a){var t=this.a
if(typeof t!=="number")return t.f_()
t=C.d.cs(t,0)^C.d.ab(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
P:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.bR){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gbG:function(){return this.a}}
H.bL.prototype={
aj:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.p(0,a)
if(s!=null)return["ref",s]
t.h(0,a,t.gG(t))
t=J.ai(a)
if(!!t.$isdH)return["buffer",a]
if(!!t.$isd6)return["typed",a]
if(!!t.$isbc)return this.cY(a)
if(!!t.$isoR){r=this.gcV()
q=a.gaJ()
q=H.dE(q,r,H.ak(q,"z",0),null)
q=P.bW(q,!0,H.ak(q,"z",0))
t=t.gaK(a)
t=H.dE(t,r,H.ak(t,"z",0),null)
return["map",q,P.bW(t,!0,H.ak(t,"z",0))]}if(!!t.$ismX)return this.cZ(a)
if(!!t.$isI)this.cR(a)
if(!!t.$isq9)this.ba(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isdb)return this.d_(a)
if(!!t.$ise3)return this.d0(a)
if(!!t.$iscQ){p=a.$static_name
if(p==null)this.ba(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isbR)return["capability",a.a]
if(!(a instanceof P.as))this.cR(a)
return["dart",u.classIdExtractor(a),this.cX(u.classFieldsExtractor(a))]},
ba:function(a,b){throw H.A(new P.aN((b==null?"Can't transmit:":b)+" "+H.t(a)))},
cR:function(a){return this.ba(a,null)},
cY:function(a){var t=this.cW(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ba(a,"Can't serialize indexable: ")},
cW:function(a){var t,s,r
t=[]
C.a.sG(t,a.length)
for(s=0;s<a.length;++s){r=this.aj(a[s])
if(s>=t.length)return H.U(t,s)
t[s]=r}return t},
cX:function(a){var t
for(t=0;t<a.length;++t)C.a.h(a,t,this.aj(a[t]))
return a},
cZ:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.ba(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sG(s,t.length)
for(r=0;r<t.length;++r){q=this.aj(a[t[r]])
if(r>=s.length)return H.U(s,r)
s[r]=q}return["js-object",t,s]},
d0:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d_:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gbG()]
return["raw sendport",a]}}
H.cH.prototype={
aA:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.A(P.mc("Bad serialized message: "+H.t(a)))
switch(C.a.gac(a)){case"ref":if(1>=a.length)return H.U(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.U(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.U(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.U(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.U(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.b0(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.U(a,1)
r=a[1]
this.b.push(r)
return H.a(this.b0(r),[null])
case"mutable":if(1>=a.length)return H.U(a,1)
r=a[1]
this.b.push(r)
return this.b0(r)
case"const":if(1>=a.length)return H.U(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.b0(r),[null])
s.fixed$length=Array
return s
case"map":return this.ef(a)
case"sendport":return this.eg(a)
case"raw sendport":if(1>=a.length)return H.U(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.ee(a)
case"function":if(1>=a.length)return H.U(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.U(a,1)
return new H.bR(a[1])
case"dart":s=a.length
if(1>=s)return H.U(a,1)
q=a[1]
if(2>=s)return H.U(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.b0(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.A("couldn't deserialize: "+H.t(a))}},
b0:function(a){var t,s,r
t=J.bf(a)
s=0
while(!0){r=t.gG(a)
if(typeof r!=="number")return H.df(r)
if(!(s<r))break
t.h(a,s,this.aA(t.p(a,s)));++s}return a},
ef:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.U(a,1)
s=a[1]
if(2>=t)return H.U(a,2)
r=a[2]
q=P.mZ()
this.b.push(q)
s=J.nU(J.mb(s,this.ged()))
for(t=J.bf(s),p=J.bf(r),o=0;o<t.gG(s);++o)q.h(0,t.p(s,o),this.aA(p.p(r,o)))
return q},
eg:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.U(a,1)
s=a[1]
if(2>=t)return H.U(a,2)
r=a[2]
if(3>=t)return H.U(a,3)
q=a[3]
if(J.aO(s,u.globalState.b)){p=u.globalState.z.p(0,r)
if(p==null)return
o=p.cH(q)
if(o==null)return
n=new H.db(o,r)}else n=new H.e3(s,q,r)
this.b.push(n)
return n},
ee:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.U(a,1)
s=a[1]
if(2>=t)return H.U(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bf(s)
p=J.bf(r)
o=0
while(!0){n=t.gG(s)
if(typeof n!=="number")return H.df(n)
if(!(o<n))break
q[t.p(s,o)]=this.aA(p.p(r,o));++o}return q}}
H.fS.prototype={
$asdU:function(){},
$aseW:function(){}}
H.fR.prototype={
A:function(a){return P.n_(this)},
h:function(a,b,c){return H.on()}}
H.ei.prototype={
gG:function(a){return this.a},
ah:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
p:function(a,b){if(!this.ah(b))return
return this.bF(b)},
bF:function(a){return this.b[a]},
bl:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.bF(q))}}}
H.fT.prototype={
ah:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!0
return this.b.hasOwnProperty(a)},
bF:function(a){return"__proto__"===a?this.d:this.b[a]}}
H.j0.prototype={}
H.jH.prototype={
ar:function(a){var t,s,r
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
H.f3.prototype={
A:function(a){var t=this.b
if(t==null)return"NullError: "+H.t(this.a)
return"NullError: method not found: '"+H.t(t)+"' on null"}}
H.i3.prototype={
A:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.t(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.t(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.t(this.a)+")"}}
H.jJ.prototype={
A:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.lj.prototype={
$1:function(a){if(!!J.ai(a).$iscq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.fq.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.l6.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.l7.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.l8.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.l9.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.la.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.cQ.prototype={
A:function(a){return"Closure '"+H.n4(this).trim()+"'"},
geV:function(){return this},
$D:null}
H.jx.prototype={}
H.jj.prototype={
A:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.dj.prototype={
P:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.dj))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var t,s
t=this.c
if(t==null)s=H.cy(this.a)
else s=typeof t!=="object"?J.bP(t):H.cy(t)
t=H.cy(this.b)
if(typeof s!=="number")return s.f2()
return(s^t)>>>0},
A:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.t(this.d)+"' of "+H.iS(t)}}
H.j4.prototype={
A:function(a){return"RuntimeError: "+H.t(this.a)}}
H.cl.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gW:function(a){return J.bP(this.a)},
P:function(a,b){if(b==null)return!1
return b instanceof H.cl&&J.aO(this.a,b.a)}}
H.l.prototype={
gG:function(a){return this.a},
gal:function(a){return this.a===0},
gaJ:function(){return new H.ic(this,[H.C(this,0)])},
gaK:function(a){return H.dE(this.gaJ(),new H.i2(this),H.C(this,0),H.C(this,1))},
ah:function(a){var t
if((a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dE(t,a)}else return this.ep(a)},
ep:function(a){var t=this.d
if(t==null)return!1
return this.b4(this.bf(t,this.b3(a)),a)>=0},
p:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aW(t,b)
return s==null?null:s.gaB()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aW(r,b)
return s==null?null:s.gaB()}else return this.eq(b)},
eq:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bf(t,this.b3(a))
r=this.b4(s,a)
if(r<0)return
return s[r].gaB()},
h:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.bI()
this.b=t}this.c3(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.bI()
this.c=s}this.c3(s,b,c)}else this.es(b,c)},
es:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.bI()
this.d=t}s=this.b3(a)
r=this.bf(t,s)
if(r==null)this.bN(t,s,[this.bJ(a,b)])
else{q=this.b4(r,a)
if(q>=0)r[q].saB(b)
else r.push(this.bJ(a,b))}},
ai:function(a,b){if(typeof b==="string")return this.cn(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cn(this.c,b)
else return this.er(b)},
er:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bf(t,this.b3(a))
r=this.b4(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.cu(q)
return q.gaB()},
aS:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bl:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.A(new P.bs(this))
t=t.c}},
c3:function(a,b,c){var t=this.aW(a,b)
if(t==null)this.bN(a,b,this.bJ(b,c))
else t.saB(c)},
cn:function(a,b){var t
if(a==null)return
t=this.aW(a,b)
if(t==null)return
this.cu(t)
this.cb(a,b)
return t.gaB()},
bJ:function(a,b){var t,s
t=new H.ib(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
cu:function(a){var t,s
t=a.gdS()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
b3:function(a){return J.bP(a)&0x3ffffff},
b4:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aO(a[s].gcF(),b))return s
return-1},
A:function(a){return P.n_(this)},
aW:function(a,b){return a[b]},
bf:function(a,b){return a[b]},
bN:function(a,b,c){a[b]=c},
cb:function(a,b){delete a[b]},
dE:function(a,b){return this.aW(a,b)!=null},
bI:function(){var t=Object.create(null)
this.bN(t,"<non-identifier-key>",t)
this.cb(t,"<non-identifier-key>")
return t},
$isoR:1}
H.i2.prototype={
$1:function(a){return this.a.p(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.ib.prototype={
gcF:function(){return this.a},
gaB:function(){return this.b},
gdS:function(){return this.d},
saB:function(a){return this.b=a}}
H.ic.prototype={
gG:function(a){return this.a.a},
gT:function(a){var t,s
t=this.a
s=new H.id(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.id.prototype={
gN:function(){return this.d},
K:function(){var t=this.a
if(this.b!==t.r)throw H.A(new P.bs(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.l2.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.l3.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.D]}}}
H.l4.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.D]}}}
H.dH.prototype={
gV:function(a){return C.H},
$isdH:1}
H.d6.prototype={$isd6:1}
H.iv.prototype={
gV:function(a){return C.I}}
H.eY.prototype={
gG:function(a){return a.length},
$isbu:1,
$asbu:function(){},
$isbc:1,
$asbc:function(){}}
H.eZ.prototype={
p:function(a,b){if(b>>>0!==b||b>=a.length)H.aC(H.aH(a,b))
return a[b]},
h:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aC(H.aH(a,b))
a[b]=c}}
H.dI.prototype={
$asbu:function(){},
$asbc:function(){},
$asR:function(){return[P.G]},
$asL:function(){return[P.G]},
$asz:function(){return[P.G]},
$isR:1,
$isL:1,
$isz:1}
H.dK.prototype={
$asbu:function(){},
$asbc:function(){},
$asR:function(){return[P.G]},
$asL:function(){return[P.G]},
$asz:function(){return[P.G]}}
H.f_.prototype={
h:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aC(H.aH(a,b))
a[b]=c},
$isR:1,
$asR:function(){return[P.P]},
$isL:1,
$asL:function(){return[P.P]},
$isz:1,
$asz:function(){return[P.P]}}
H.dJ.prototype={
$asbu:function(){},
$asbc:function(){},
$asR:function(){return[P.P]},
$asL:function(){return[P.P]},
$asz:function(){return[P.P]},
$isR:1,
$isL:1,
$isz:1}
H.dL.prototype={
$asbu:function(){},
$asbc:function(){},
$asR:function(){return[P.P]},
$asL:function(){return[P.P]},
$asz:function(){return[P.P]}}
H.iw.prototype={
gV:function(a){return C.J},
$isR:1,
$asR:function(){return[P.G]},
$isL:1,
$asL:function(){return[P.G]},
$isz:1,
$asz:function(){return[P.G]}}
H.ix.prototype={
gV:function(a){return C.K},
$isR:1,
$asR:function(){return[P.G]},
$isL:1,
$asL:function(){return[P.G]},
$isz:1,
$asz:function(){return[P.G]}}
H.iy.prototype={
gV:function(a){return C.L},
p:function(a,b){if(b>>>0!==b||b>=a.length)H.aC(H.aH(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.P]},
$isL:1,
$asL:function(){return[P.P]},
$isz:1,
$asz:function(){return[P.P]}}
H.iz.prototype={
gV:function(a){return C.M},
p:function(a,b){if(b>>>0!==b||b>=a.length)H.aC(H.aH(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.P]},
$isL:1,
$asL:function(){return[P.P]},
$isz:1,
$asz:function(){return[P.P]}}
H.iA.prototype={
gV:function(a){return C.N},
p:function(a,b){if(b>>>0!==b||b>=a.length)H.aC(H.aH(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.P]},
$isL:1,
$asL:function(){return[P.P]},
$isz:1,
$asz:function(){return[P.P]}}
H.iB.prototype={
gV:function(a){return C.R},
p:function(a,b){if(b>>>0!==b||b>=a.length)H.aC(H.aH(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.P]},
$isL:1,
$asL:function(){return[P.P]},
$isz:1,
$asz:function(){return[P.P]}}
H.iC.prototype={
gV:function(a){return C.S},
p:function(a,b){if(b>>>0!==b||b>=a.length)H.aC(H.aH(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.P]},
$isL:1,
$asL:function(){return[P.P]},
$isz:1,
$asz:function(){return[P.P]}}
H.f0.prototype={
gV:function(a){return C.T},
gG:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)H.aC(H.aH(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.P]},
$isL:1,
$asL:function(){return[P.P]},
$isz:1,
$asz:function(){return[P.P]}}
H.iD.prototype={
gV:function(a){return C.U},
gG:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)H.aC(H.aH(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.P]},
$isL:1,
$asL:function(){return[P.P]},
$isz:1,
$asz:function(){return[P.P]}}
P.jU.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.jT.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.jV.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.jW.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.fn.prototype={
ge_:function(){return this.b.b},
gcE:function(){return(this.c&1)!==0},
geo:function(){return(this.c&2)!==0},
gcD:function(){return this.c===8},
em:function(a){return this.b.b.bY(this.d,a)},
ex:function(a){if(this.c!==6)return!0
return this.b.b.bY(this.d,J.e9(a))},
ei:function(a){var t,s,r
t=this.e
s=J.b_(a)
r=this.b.b
if(H.de(t,{func:1,args:[,,]}))return r.eM(t,s.gaE(a),a.gaD())
else return r.bY(t,s.gaE(a))},
en:function(){return this.b.b.cM(this.d)},
gbK:function(){return this.a}}
P.bK.prototype={
gdP:function(){return this.a===2},
gbH:function(){return this.a>=4},
cP:function(a,b){var t,s,r
t=$.am
if(t!==C.c){t.toString
if(b!=null)b=P.ns(b,t)}s=new P.bK(0,t,null,[null])
r=b==null?1:3
this.bw(new P.fn(null,s,r,a,b,[H.C(this,0),null]))
return s},
eP:function(a){return this.cP(a,null)},
cT:function(a){var t,s
t=$.am
s=new P.bK(0,t,null,this.$ti)
if(t!==C.c)t.toString
t=H.C(this,0)
this.bw(new P.fn(null,s,8,a,null,[t,t]))
return s},
bw:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gbH()){s.bw(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.kV(null,null,t,new P.kd(this,a))}},
cm:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gbK()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gbH()){p.cm(a)
return}this.a=p.a
this.c=p.c}t.a=this.bj(a)
s=this.b
s.toString
P.kV(null,null,s,new P.kh(t,this))}},
bM:function(){var t=this.c
this.c=null
return this.bj(t)},
bj:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gbK()
t.a=s}return s},
bB:function(a){var t,s
t=this.$ti
if(H.fu(a,"$isdx",t,"$asdx"))if(H.fu(a,"$isbK",t,null))P.nn(a,this)
else P.qO(a,this)
else{s=this.bM()
this.a=4
this.c=a
P.dY(this,s)}},
bd:function(a,b){var t=this.bM()
this.a=8
this.c=new P.cO(a,b)
P.dY(this,t)},
dB:function(a){return this.bd(a,null)},
dq:function(a,b){this.a=4
this.c=a},
$isdx:1,
gbk:function(){return this.a},
gdU:function(){return this.c}}
P.kd.prototype={
$0:function(){P.dY(this.a,this.b)},
$S:function(){return{func:1}}}
P.kh.prototype={
$0:function(){P.dY(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.ke.prototype={
$1:function(a){var t=this.a
t.a=0
t.bB(a)},
$S:function(){return{func:1,args:[,]}}}
P.kf.prototype={
$2:function(a,b){this.a.bd(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.kg.prototype={
$0:function(){this.a.bd(this.b,this.c)},
$S:function(){return{func:1}}}
P.kk.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.en()}catch(q){s=H.b0(q)
r=H.bx(q)
if(this.c){p=J.e9(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.cO(s,r)
o.a=!0
return}if(!!J.ai(t).$isdx){if(t instanceof P.bK&&t.gbk()>=4){if(t.gbk()===8){p=this.b
p.b=t.gdU()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.eP(new P.kl(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.kl.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.kj.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.em(this.c)}catch(r){t=H.b0(r)
s=H.bx(r)
q=this.a
q.b=new P.cO(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ki.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.ex(t)===!0&&q.e!=null){p=this.b
p.b=q.ei(t)
p.a=!1}}catch(o){s=H.b0(o)
r=H.bx(o)
q=this.a
p=J.e9(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.cO(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fl.prototype={}
P.cD.prototype={
am:function(a,b){return new P.kx(b,this,[H.ak(this,"cD",0),null])},
gG:function(a){var t,s
t={}
s=new P.bK(0,$.am,null,[P.P])
t.a=0
this.b7(new P.jo(t),!0,new P.jp(t,s),s.gca())
return s},
an:function(a){var t,s,r
t=H.ak(this,"cD",0)
s=H.a([],[t])
r=new P.bK(0,$.am,null,[[P.R,t]])
this.b7(new P.jq(this,s),!0,new P.jr(s,r),r.gca())
return r}}
P.jo.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.jp.prototype={
$0:function(){this.b.bB(this.a.a)},
$S:function(){return{func:1}}}
P.jq.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.lZ(function(a){return{func:1,args:[a]}},this.a,"cD")}}
P.jr.prototype={
$0:function(){this.b.bB(this.a)},
$S:function(){return{func:1}}}
P.jn.prototype={}
P.bw.prototype={
bU:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.cB()
if((t&4)===0&&(this.e&32)===0)this.ce(this.gck())},
cI:function(a){return this.bU(a,null)},
cL:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gal(t)}else t=!1
if(t)this.r.br(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.ce(this.gcl())}}}},
cA:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.by()
t=this.f
return t==null?$.$get$hz():t},
by:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.cB()
if((this.e&32)===0)this.r=null
this.f=this.cj()},
bc:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.cp(a)
else this.bx(new P.k1(a,null,[H.ak(this,"bw",0)]))},
bb:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.cr(a,b)
else this.bx(new P.k3(a,b,null))},
dw:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.cq()
else this.bx(C.u)},
bh:function(){},
bi:function(){},
cj:function(){return},
bx:function(a){var t,s
t=this.r
if(t==null){t=new P.kN(null,null,0,[H.ak(this,"bw",0)])
this.r=t}t.j(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.br(this)}},
cp:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.bZ(this.a,a)
this.e=(this.e&4294967263)>>>0
this.bz((t&4)!==0)},
cr:function(a,b){var t,s
t=this.e
s=new P.k_(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.by()
t=this.f
if(!!J.ai(t).$isdx&&t!==$.$get$hz())t.cT(s)
else s.$0()}else{s.$0()
this.bz((t&4)!==0)}},
cq:function(){var t,s
t=new P.jZ(this)
this.by()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ai(s).$isdx&&s!==$.$get$hz())s.cT(t)
else t.$0()},
ce:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.bz((t&4)!==0)},
bz:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gal(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gal(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bh()
else this.bi()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.br(this)},
dl:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.ns(b,t)
this.c=c},
gbk:function(){return this.e}}
P.k_.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.de(s,{func:1,args:[P.as,P.cz]})
q=t.d
p=this.b
o=t.b
if(r)q.eN(o,p,this.c)
else q.bZ(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.jZ.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.cN(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.fm.prototype={
gb8:function(){return this.a},
sb8:function(a){return this.a=a}}
P.k1.prototype={
bV:function(a){a.cp(this.b)}}
P.k3.prototype={
bV:function(a){a.cr(this.b,this.c)},
$asfm:function(){},
gaE:function(a){return this.b},
gaD:function(){return this.c}}
P.k2.prototype={
bV:function(a){a.cq()},
gb8:function(){return},
sb8:function(a){throw H.A(new P.cj("No events after a done."))}}
P.kz.prototype={
br:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.nG(new P.kA(this,a))
this.a=1},
cB:function(){if(this.a===1)this.a=3},
gbk:function(){return this.a}}
P.kA.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gb8()
t.b=q
if(q==null)t.c=null
r.bV(this.b)},
$S:function(){return{func:1}}}
P.kN.prototype={
gal:function(a){return this.c==null},
j:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sb8(b)
this.c=b}}}
P.dW.prototype={
b7:function(a,b,c,d){return this.dF(a,d,c,!0===b)},
cG:function(a,b,c){return this.b7(a,null,b,c)},
dF:function(a,b,c,d){return P.qN(this,a,b,c,d,H.ak(this,"dW",0),H.ak(this,"dW",1))},
cf:function(a,b){b.bc(a)},
dN:function(a,b,c){c.bb(a,b)},
$ascD:function(a,b){return[b]}}
P.dX.prototype={
bc:function(a){if((this.e&2)!==0)return
this.dd(a)},
bb:function(a,b){if((this.e&2)!==0)return
this.de(a,b)},
bh:function(){var t=this.y
if(t==null)return
t.cI(0)},
bi:function(){var t=this.y
if(t==null)return
t.cL()},
cj:function(){var t=this.y
if(t!=null){this.y=null
return t.cA()}return},
dI:function(a){this.x.cf(a,this)},
dM:function(a,b){this.x.dN(a,b,this)},
dK:function(){this.dw()},
dn:function(a,b,c,d,e,f,g){this.y=this.x.a.cG(this.gdH(),this.gdJ(),this.gdL())},
$asbw:function(a,b){return[b]}}
P.kx.prototype={
cf:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.b0(q)
r=H.bx(q)
P.qV(b,s,r)
return}b.bc(t)}}
P.cO.prototype={
A:function(a){return H.t(this.a)},
$iscq:1,
gaE:function(a){return this.a},
gaD:function(){return this.b}}
P.kT.prototype={}
P.kU.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.f4()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.A(t)
r=H.A(t)
r.stack=J.aP(s)
throw r},
$S:function(){return{func:1}}}
P.kC.prototype={
cN:function(a){var t,s,r,q
try{if(C.c===$.am){r=a.$0()
return r}r=P.nt(null,null,this,a)
return r}catch(q){t=H.b0(q)
s=H.bx(q)
r=P.ft(null,null,this,t,s)
return r}},
bZ:function(a,b){var t,s,r,q
try{if(C.c===$.am){r=a.$1(b)
return r}r=P.nv(null,null,this,a,b)
return r}catch(q){t=H.b0(q)
s=H.bx(q)
r=P.ft(null,null,this,t,s)
return r}},
eN:function(a,b,c){var t,s,r,q
try{if(C.c===$.am){r=a.$2(b,c)
return r}r=P.nu(null,null,this,a,b,c)
return r}catch(q){t=H.b0(q)
s=H.bx(q)
r=P.ft(null,null,this,t,s)
return r}},
bP:function(a,b){if(b)return new P.kD(this,a)
else return new P.kE(this,a)},
e3:function(a,b){return new P.kF(this,a)},
p:function(a,b){return},
cM:function(a){if($.am===C.c)return a.$0()
return P.nt(null,null,this,a)},
bY:function(a,b){if($.am===C.c)return a.$1(b)
return P.nv(null,null,this,a,b)},
eM:function(a,b,c){if($.am===C.c)return a.$2(b,c)
return P.nu(null,null,this,a,b,c)}}
P.kD.prototype={
$0:function(){return this.a.cN(this.b)},
$S:function(){return{func:1}}}
P.kE.prototype={
$0:function(){return this.a.cM(this.b)},
$S:function(){return{func:1}}}
P.kF.prototype={
$1:function(a){return this.a.bZ(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.kn.prototype={
gG:function(a){return this.a},
gaK:function(a){var t=H.C(this,0)
return H.dE(new P.ko(this,[t]),new P.kp(this),t,H.C(this,1))},
ah:function(a){var t,s
if(typeof a==="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.dD(a)},
dD:function(a){var t=this.d
if(t==null)return!1
return this.at(t[this.as(a)],a)>=0},
p:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.dG(b)},
dG:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.as(a)]
r=this.at(s,a)
return r<0?null:s[r+1]},
h:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.lT()
this.b=t}this.c8(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.lT()
this.c=s}this.c8(s,b,c)}else this.dX(b,c)},
dX:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.lT()
this.d=t}s=this.as(a)
r=t[s]
if(r==null){P.lU(t,s,[a,b]);++this.a
this.e=null}else{q=this.at(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
ai:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aV(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aV(this.c,b)
else return this.bL(b)},
bL:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.as(a)]
r=this.at(s,a)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
bl:function(a,b){var t,s,r,q
t=this.bC()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.p(0,q))
if(t!==this.e)throw H.A(new P.bs(this))}},
bC:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
c8:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.lU(a,b,c)},
aV:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.qP(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
as:function(a){return J.bP(a)&0x3ffffff},
at:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.aO(a[s],b))return s
return-1}}
P.kp.prototype={
$1:function(a){return this.a.p(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.ko.prototype={
gG:function(a){return this.a.a},
gT:function(a){var t=this.a
return new P.fo(t,t.bC(),0,null,this.$ti)}}
P.fo.prototype={
gN:function(){return this.d},
K:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.A(new P.bs(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.fp.prototype={
b3:function(a){return H.rn(a)&0x3ffffff},
b4:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gcF()
if(r==null?b==null:r===b)return s}return-1}}
P.ks.prototype={
gT:function(a){var t=new P.cK(this,this.r,null,null,[null])
t.c=this.e
return t},
gG:function(a){return this.a},
ag:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dC(b)},
dC:function(a){var t=this.d
if(t==null)return!1
return this.at(t[this.as(a)],a)>=0},
cH:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ag(0,a)?a:null
else return this.dQ(a)},
dQ:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.as(a)]
r=this.at(s,a)
if(r<0)return
return J.m8(s,r).gcc()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.c7(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.c7(r,b)}else return this.ax(b)},
ax:function(a){var t,s,r
t=this.d
if(t==null){t=P.qS()
this.d=t}s=this.as(a)
r=t[s]
if(r==null)t[s]=[this.bA(a)]
else{if(this.at(r,a)>=0)return!1
r.push(this.bA(a))}return!0},
ai:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aV(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aV(this.c,b)
else return this.bL(b)},
bL:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.as(a)]
r=this.at(s,a)
if(r<0)return!1
this.c9(s.splice(r,1)[0])
return!0},
aS:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
c7:function(a,b){if(a[b]!=null)return!1
a[b]=this.bA(b)
return!0},
aV:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.c9(t)
delete a[b]
return!0},
bA:function(a){var t,s
t=new P.kt(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
c9:function(a){var t,s
t=a.gdA()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
as:function(a){return J.bP(a)&0x3ffffff},
at:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aO(a[s].gcc(),b))return s
return-1},
$isL:1,
$asL:null,
$isz:1,
$asz:null}
P.kt.prototype={
gcc:function(){return this.a},
gdA:function(){return this.c}}
P.cK.prototype={
gN:function(){return this.d},
K:function(){var t=this.a
if(this.b!==t.r)throw H.A(new P.bs(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.kq.prototype={}
P.d3.prototype={
am:function(a,b){return H.dE(this,b,H.ak(this,"d3",0),null)},
a1:function(a,b){return P.bW(this,!0,H.ak(this,"d3",0))},
an:function(a){return this.a1(a,!0)},
gG:function(a){var t,s
t=this.gT(this)
for(s=0;t.K();)++s
return s},
A:function(a){return P.i_(this,"(",")")},
$isz:1,
$asz:null}
P.kY.prototype={
$2:function(a,b){this.a.h(0,a,b)},
$S:function(){return{func:1,args:[,,]}}}
P.eU.prototype={}
P.dM.prototype={$asR:null,$asL:null,$asz:null,$isR:1,$isL:1,$isz:1}
P.bv.prototype={
gT:function(a){return new H.eV(a,this.gG(a),0,null,[H.ak(a,"bv",0)])},
au:function(a,b){return this.p(a,b)},
am:function(a,b){return new H.d5(a,b,[H.ak(a,"bv",0),null])},
a1:function(a,b){var t,s,r
t=H.a([],[H.ak(a,"bv",0)])
C.a.sG(t,this.gG(a))
for(s=0;s<this.gG(a);++s){r=this.p(a,s)
if(s>=t.length)return H.U(t,s)
t[s]=r}return t},
an:function(a){return this.a1(a,!0)},
A:function(a){return P.eP(a,"[","]")},
$isR:1,
$asR:null,
$isL:1,
$asL:null,
$isz:1,
$asz:null}
P.kR.prototype={
h:function(a,b,c){throw H.A(new P.aN("Cannot modify unmodifiable map"))}}
P.eW.prototype={
p:function(a,b){return this.a.p(0,b)},
h:function(a,b,c){this.a.h(0,b,c)},
gG:function(a){var t=this.a
return t.gG(t)},
A:function(a){return this.a.A(0)}}
P.dU.prototype={}
P.il.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.S+=", "
t.a=!1
t=this.b
s=t.S+=H.t(a)
t.S=s+": "
t.S+=H.t(b)},
$S:function(){return{func:1,args:[,,]}}}
P.ie.prototype={
gT:function(a){return new P.ku(this,this.c,this.d,this.b,null,this.$ti)},
gal:function(a){return this.b===this.c},
gG:function(a){return(this.c-this.b&this.a.length-1)>>>0},
au:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.aC(P.ez(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.U(s,q)
return s[q]},
a1:function(a,b){var t=H.a([],this.$ti)
C.a.sG(t,this.gG(this))
this.dZ(t)
return t},
an:function(a){return this.a1(a,!0)},
aS:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.U(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
A:function(a){return P.eP(this,"{","}")},
cK:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.A(H.lD());++this.d
s=this.a
r=s.length
if(t>=r)return H.U(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
ax:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.U(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.cd();++this.d},
cd:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.aT(s,0,q,t,r)
C.a.aT(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
dZ:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.a.aT(a,0,q,r,t)
return q}else{p=r.length-t
C.a.aT(a,0,p,r,t)
C.a.aT(a,p,p+this.c,this.a,0)
return this.c+p}},
di:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asL:null,
$asz:null}
P.ku.prototype={
gN:function(){return this.e},
K:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aC(new P.bs(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.U(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.jc.prototype={
ao:function(a,b){var t
for(t=J.bq(b);t.K();)this.j(0,t.gN())},
a1:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.a.sG(t,this.a)
for(s=new P.cK(this,this.r,null,null,[null]),s.c=this.e,r=0;s.K();r=p){q=s.d
p=r+1
if(r>=t.length)return H.U(t,r)
t[r]=q}return t},
an:function(a){return this.a1(a,!0)},
am:function(a,b){return new H.em(this,b,[H.C(this,0),null])},
A:function(a){return P.eP(this,"{","}")},
$isL:1,
$asL:null,
$isz:1,
$asz:null}
P.jb.prototype={}
P.c1.prototype={}
P.aD.prototype={}
P.G.prototype={$isaD:1,
$asaD:function(){return[P.by]}}
P.c3.prototype={
av:function(a,b){return new P.c3(C.b.av(this.a,b.gbe()))},
aw:function(a,b){return new P.c3(C.b.bX(this.a*b))},
aN:function(a,b){return C.b.aN(this.a,b.gbe())},
aM:function(a,b){return C.b.aM(this.a,b.gbe())},
P:function(a,b){if(b==null)return!1
if(!(b instanceof P.c3))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
az:function(a,b){return C.b.az(this.a,b.gbe())},
A:function(a){var t,s,r,q,p
t=new P.h1()
s=this.a
if(s<0)return"-"+new P.c3(0-s).A(0)
r=t.$1(C.b.ab(s,6e7)%60)
q=t.$1(C.b.ab(s,1e6)%60)
p=new P.h0().$1(s%1e6)
return""+C.b.ab(s,36e8)+":"+H.t(r)+":"+H.t(q)+"."+H.t(p)},
$isaD:1,
$asaD:function(){return[P.c3]},
gbe:function(){return this.a}}
P.h0.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.D,args:[P.P]}}}
P.h1.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.D,args:[P.P]}}}
P.cq.prototype={
gaD:function(){return H.bx(this.$thrownJsError)}}
P.f4.prototype={
A:function(a){return"Throw of null."}}
P.bQ.prototype={
gbE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbD:function(){return""},
A:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.t(t)
q=this.gbE()+s+r
if(!this.a)return q
p=this.gbD()
o=P.ms(this.b)
return q+p+": "+H.t(o)},
gM:function(a){return this.c}}
P.f7.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.t(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.t(t)
else if(r>t)s=": Not in range "+H.t(t)+".."+H.t(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.t(t)}return s}}
P.hI.prototype={
gbE:function(){return"RangeError"},
gbD:function(){if(J.fx(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.t(t)},
gG:function(a){return this.f}}
P.aN.prototype={
A:function(a){return"Unsupported operation: "+this.a}}
P.ff.prototype={
A:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.t(t):"UnimplementedError"}}
P.cj.prototype={
A:function(a){return"Bad state: "+this.a}}
P.bs.prototype={
A:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.t(P.ms(t))+"."}}
P.iK.prototype={
A:function(a){return"Out of Memory"},
gaD:function(){return},
$iscq:1}
P.fd.prototype={
A:function(a){return"Stack Overflow"},
gaD:function(){return},
$iscq:1}
P.fW.prototype={
A:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.t(t)+"' during its initialization"}}
P.kc.prototype={
A:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.t(t)}}
P.h5.prototype={
A:function(a){return"Expando:"+H.t(this.a)},
p:function(a,b){var t,s
t=this.bg
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aC(P.fF(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.lL(b,"expando$values")
return s==null?null:H.lL(s,t)},
h:function(a,b,c){var t,s
t=this.bg
if(typeof t!=="string")t.set(b,c)
else{s=H.lL(b,"expando$values")
if(s==null){s=new P.as()
H.n5(b,"expando$values",s)}H.n5(s,t,c)}},
gM:function(a){return this.a}}
P.P.prototype={$isaD:1,
$asaD:function(){return[P.by]}}
P.z.prototype={
am:function(a,b){return H.dE(this,b,H.ak(this,"z",0),null)},
bq:function(a,b){return new H.bJ(this,b,[H.ak(this,"z",0)])},
a1:function(a,b){return P.bW(this,!0,H.ak(this,"z",0))},
an:function(a){return this.a1(a,!0)},
gG:function(a){var t,s
t=this.gT(this)
for(s=0;t.K();)++s
return s},
gaP:function(a){var t,s
t=this.gT(this)
if(!t.K())throw H.A(H.lD())
s=t.gN()
if(t.K())throw H.A(H.pv())
return s},
au:function(a,b){var t,s,r
if(b<0)H.aC(P.ch(b,0,null,"index",null))
for(t=this.gT(this),s=0;t.K();){r=t.gN()
if(b===s)return r;++s}throw H.A(P.ez(b,this,"index",null,s))},
A:function(a){return P.i_(this,"(",")")},
$asz:null}
P.eQ.prototype={}
P.R.prototype={$asR:null,$isL:1,$asL:null,$isz:1,$asz:null}
P.bE.prototype={
gW:function(a){return P.as.prototype.gW.call(this,this)},
A:function(a){return"null"}}
P.by.prototype={$isaD:1,
$asaD:function(){return[P.by]}}
P.as.prototype={constructor:P.as,$isas:1,
P:function(a,b){return this===b},
gW:function(a){return H.cy(this)},
A:function(a){return H.iS(this)},
gV:function(a){return new H.cl(H.l1(this),null)},
toString:function(){return this.A(this)}}
P.cz.prototype={}
P.D.prototype={$isaD:1,
$asaD:function(){return[P.D]}}
P.dS.prototype={
gG:function(a){return this.S.length},
A:function(a){var t=this.S
return t.charCodeAt(0)==0?t:t},
gS:function(){return this.S}}
W.X.prototype={}
W.fD.prototype={
A:function(a){return String(a)},
$isI:1,
sbm:function(a,b){return a.href=b}}
W.fE.prototype={
A:function(a){return String(a)},
$isI:1,
sbm:function(a,b){return a.href=b}}
W.fK.prototype={
sbm:function(a,b){return a.href=b}}
W.ec.prototype={}
W.cP.prototype={$iscP:1,$isI:1}
W.fO.prototype={
gM:function(a){return a.name}}
W.cn.prototype={$isI:1,
gG:function(a){return a.length}}
W.ee.prototype={
gak:function(a){return a.id}}
W.cp.prototype={
c5:function(a,b){var t,s
t=$.$get$mi()
s=t[b]
if(typeof s==="string")return s
s=W.oo(b) in a?b:P.op()+b
t[b]=s
return s},
aI:function(a,b){return a.item(b)},
gG:function(a){return a.length}}
W.eA.prototype={}
W.fU.prototype={}
W.ej.prototype={$isI:1}
W.ek.prototype={
gM:function(a){return a.name}}
W.fX.prototype={
gM:function(a){var t=a.name
if(P.mp()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.mp()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
A:function(a){return String(a)}}
W.el.prototype={
A:function(a){return"Rectangle ("+H.t(a.left)+", "+H.t(a.top)+") "+H.t(this.gaL(a))+" x "+H.t(this.gaH(a))},
P:function(a,b){var t
if(b==null)return!1
t=J.ai(b)
if(!t.$isf8)return!1
return a.left===t.gbT(b)&&a.top===t.gc_(b)&&this.gaL(a)===t.gaL(b)&&this.gaH(a)===t.gaH(b)},
gW:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gaL(a)
q=this.gaH(a)
return W.nq(W.cJ(W.cJ(W.cJ(W.cJ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaH:function(a){return a.height},
gbT:function(a){return a.left},
gc_:function(a){return a.top},
gaL:function(a){return a.width},
$isf8:1,
$asf8:function(){}}
W.b7.prototype={
ge2:function(a){return new W.k6(a)},
A:function(a){return a.localName},
ap:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.mr
if(t==null){t=H.a([],[W.cf])
s=new W.f2(t)
t.push(W.no(null))
t.push(W.nr())
$.mr=s
d=s}else d=t
t=$.mq
if(t==null){t=new W.fr(d)
$.mq=t
c=t}else{t.a=d
c=t}}if($.c4==null){t=document
s=t.implementation.createHTMLDocument("")
$.c4=s
$.ln=s.createRange()
s=$.c4
s.toString
r=s.createElement("base")
J.nT(r,t.baseURI)
$.c4.head.appendChild(r)}t=$.c4
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.c4
if(!!this.$iscP)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.c4.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.ag(C.F,a.tagName)){$.ln.selectNodeContents(q)
p=$.ln.createContextualFragment(b)}else{q.innerHTML=b
p=$.c4.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.c4.body
if(q==null?t!=null:q!==t)J.nS(q)
c.c1(p)
document.adoptNode(p)
return p},
e8:function(a,b,c){return this.ap(a,b,c,null)},
d2:function(a,b,c,d){a.textContent=null
a.appendChild(this.ap(a,b,c,d))},
bt:function(a,b){return this.d2(a,b,null,null)},
$isb7:1,
$isa0:1,
$isas:1,
$isI:1,
gak:function(a){return a.id},
gci:function(a){return a.namespaceURI},
geO:function(a){return a.tagName}}
W.kW.prototype={
$1:function(a){return!!J.ai(a).$isb7},
$S:function(){return{func:1,args:[,]}}}
W.h2.prototype={
gM:function(a){return a.name}}
W.h3.prototype={
gaE:function(a){return a.error}}
W.N.prototype={}
W.dn.prototype={
dv:function(a,b,c,d){return a.addEventListener(b,H.e7(c,1),!1)},
dT:function(a,b,c,d){return a.removeEventListener(b,H.e7(c,1),!1)}}
W.hw.prototype={
gM:function(a){return a.name}}
W.hx.prototype={
gM:function(a){return a.name}}
W.ex.prototype={
aI:function(a,b){return a.item(b)},
gG:function(a){return a.length},
gM:function(a){return a.name}}
W.hA.prototype={
gak:function(a){return a.id}}
W.hG.prototype={
gM:function(a){return a.name}}
W.hK.prototype={$isb7:1,$isI:1,$isa0:1,
gM:function(a){return a.name}}
W.i5.prototype={
gM:function(a){return a.name}}
W.ia.prototype={
sbm:function(a,b){return a.href=b}}
W.ig.prototype={
A:function(a){return String(a)}}
W.ik.prototype={
gM:function(a){return a.name}}
W.dF.prototype={
gaE:function(a){return a.error}}
W.ip.prototype={
gak:function(a){return a.id}}
W.iq.prototype={
gM:function(a){return a.name}}
W.ir.prototype={
eY:function(a,b,c){return a.send(b,c)},
bs:function(a,b){return a.send(b)}}
W.dG.prototype={
gak:function(a){return a.id},
gM:function(a){return a.name}}
W.bX.prototype={$isbX:1,$isas:1}
W.iE.prototype={$isI:1}
W.iF.prototype={
gM:function(a){return a.name}}
W.be.prototype={
gaP:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.A(new P.cj("No elements"))
if(s>1)throw H.A(new P.cj("More than one element"))
return t.firstChild},
ao:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
h:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.U(s,b)
t.replaceChild(c,s[b])},
gT:function(a){var t=this.a.childNodes
return new W.ev(t,t.length,-1,null,[H.ak(t,"cY",0)])},
gG:function(a){return this.a.childNodes.length},
p:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.U(t,b)
return t[b]},
$aseU:function(){return[W.a0]},
$asdM:function(){return[W.a0]},
$asR:function(){return[W.a0]},
$asL:function(){return[W.a0]},
$asz:function(){return[W.a0]}}
W.a0.prototype={
geA:function(a){return new W.be(a)},
eJ:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
A:function(a){var t=a.nodeValue
return t==null?this.d9(a):t},
$isa0:1,
$isas:1,
geD:function(a){return a.parentNode},
geH:function(a){return a.previousSibling}}
W.f1.prototype={
gG:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.A(P.ez(b,a,null,null,null))
return a[b]},
h:function(a,b,c){throw H.A(new P.aN("Cannot assign element of immutable List."))},
au:function(a,b){if(b<0||b>=a.length)return H.U(a,b)
return a[b]},
$isR:1,
$asR:function(){return[W.a0]},
$isL:1,
$asL:function(){return[W.a0]},
$isz:1,
$asz:function(){return[W.a0]},
$isbu:1,
$asbu:function(){return[W.a0]},
$isbc:1,
$asbc:function(){return[W.a0]}}
W.eB.prototype={
$asR:function(){return[W.a0]},
$asL:function(){return[W.a0]},
$asz:function(){return[W.a0]},
$isR:1,
$isL:1,
$isz:1}
W.eD.prototype={
$asR:function(){return[W.a0]},
$asL:function(){return[W.a0]},
$asz:function(){return[W.a0]},
$isR:1,
$isL:1,
$isz:1}
W.iI.prototype={
gM:function(a){return a.name}}
W.iL.prototype={
gM:function(a){return a.name}}
W.iO.prototype={
gM:function(a){return a.name}}
W.fa.prototype={
aI:function(a,b){return a.item(b)},
gG:function(a){return a.length},
gM:function(a){return a.name}}
W.jd.prototype={
gM:function(a){return a.name}}
W.fc.prototype={}
W.jh.prototype={
gaE:function(a){return a.error}}
W.ji.prototype={
gM:function(a){return a.name}}
W.fe.prototype={
ap:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.bv(a,b,c,d)
t=W.oq("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.be(s).ao(0,J.nO(t))
return s}}
W.jv.prototype={
ap:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bv(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.r.ap(t.createElement("table"),b,c,d)
t.toString
t=new W.be(t)
r=t.gaP(t)
r.toString
t=new W.be(r)
q=t.gaP(t)
s.toString
q.toString
new W.be(s).ao(0,new W.be(q))
return s}}
W.jw.prototype={
ap:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bv(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.r.ap(t.createElement("table"),b,c,d)
t.toString
t=new W.be(t)
r=t.gaP(t)
s.toString
r.toString
new W.be(s).ao(0,new W.be(r))
return s}}
W.dT.prototype={$isdT:1}
W.jA.prototype={
gM:function(a){return a.name}}
W.bH.prototype={}
W.fj.prototype={$isI:1,
gM:function(a){return a.name}}
W.d9.prototype={$isd9:1,$isa0:1,$isas:1,
gM:function(a){return a.name},
gci:function(a){return a.namespaceURI}}
W.k0.prototype={
A:function(a){return"Rectangle ("+H.t(a.left)+", "+H.t(a.top)+") "+H.t(a.width)+" x "+H.t(a.height)},
P:function(a,b){var t,s,r
if(b==null)return!1
t=J.ai(b)
if(!t.$isf8)return!1
s=a.left
r=t.gbT(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc_(b)
if(s==null?r==null:s===r){s=a.width
r=t.gaL(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaH(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gW:function(a){var t,s,r,q
t=J.bP(a.left)
s=J.bP(a.top)
r=J.bP(a.width)
q=J.bP(a.height)
return W.nq(W.cJ(W.cJ(W.cJ(W.cJ(0,t),s),r),q))},
$isf8:1,
$asf8:function(){},
gaH:function(a){return a.height},
gbT:function(a){return a.left},
gc_:function(a){return a.top},
gaL:function(a){return a.width}}
W.k4.prototype={$isI:1}
W.k5.prototype={
gaH:function(a){return a.height},
gaL:function(a){return a.width}}
W.km.prototype={$isI:1}
W.e1.prototype={
gG:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.A(P.ez(b,a,null,null,null))
return a[b]},
h:function(a,b,c){throw H.A(new P.aN("Cannot assign element of immutable List."))},
au:function(a,b){if(b<0||b>=a.length)return H.U(a,b)
return a[b]},
aI:function(a,b){return a.item(b)},
$isR:1,
$asR:function(){return[W.a0]},
$isL:1,
$asL:function(){return[W.a0]},
$isz:1,
$asz:function(){return[W.a0]},
$isbu:1,
$asbu:function(){return[W.a0]},
$isbc:1,
$asbc:function(){return[W.a0]}}
W.eC.prototype={
$asR:function(){return[W.a0]},
$asL:function(){return[W.a0]},
$asz:function(){return[W.a0]},
$isR:1,
$isL:1,
$isz:1}
W.eE.prototype={
$asR:function(){return[W.a0]},
$asL:function(){return[W.a0]},
$asz:function(){return[W.a0]},
$isR:1,
$isL:1,
$isz:1}
W.kK.prototype={$isI:1}
W.jX.prototype={
gaJ:function(){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.D])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.U(t,q)
p=t[q]
o=J.b_(p)
if(o.gci(p)==null)s.push(o.gM(p))}return s},
gdO:function(){return this.a}}
W.k6.prototype={
p:function(a,b){return this.a.getAttribute(b)},
h:function(a,b,c){this.a.setAttribute(b,c)},
gG:function(a){return this.gaJ().length}}
W.k9.prototype={
b7:function(a,b,c,d){return W.nm(this.a,this.b,a,!1,H.C(this,0))},
cG:function(a,b,c){return this.b7(a,null,b,c)}}
W.lS.prototype={}
W.ka.prototype={
cA:function(){if(this.b==null)return
this.cv()
this.b=null
this.d=null
return},
bU:function(a,b){if(this.b==null)return;++this.a
this.cv()},
cI:function(a){return this.bU(a,null)},
cL:function(){if(this.b==null||this.a<=0)return;--this.a
this.ct()},
ct:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.nK(r,this.c,t,!1)}},
cv:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.nL(r,this.c,t,!1)}},
dm:function(a,b,c,d,e){this.ct()}}
W.kb.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.e_.prototype={
aR:function(a){return $.$get$np().ag(0,W.dm(a))},
ay:function(a,b,c){var t,s,r
t=W.dm(a)
s=$.$get$lV()
r=s.p(0,H.t(t)+"::"+b)
if(r==null)r=s.p(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dr:function(a){var t,s
t=$.$get$lV()
if(t.gal(t)){for(s=0;s<262;++s)t.h(0,C.E[s],W.rd())
for(s=0;s<12;++s)t.h(0,C.i[s],W.re())}},
$iscf:1,
gcS:function(){return this.a}}
W.cY.prototype={
gT:function(a){return new W.ev(a,this.gG(a),-1,null,[H.ak(a,"cY",0)])},
$isR:1,
$asR:null,
$isL:1,
$asL:null,
$isz:1,
$asz:null}
W.f2.prototype={
aR:function(a){return C.a.cz(this.a,new W.iH(a))},
ay:function(a,b,c){return C.a.cz(this.a,new W.iG(a,b,c))},
$iscf:1}
W.iH.prototype={
$1:function(a){return a.aR(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.iG.prototype={
$1:function(a){return a.ay(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.e2.prototype={
aR:function(a){return this.a.ag(0,W.dm(a))},
ay:function(a,b,c){var t,s
t=W.dm(a)
s=this.c
if(s.ag(0,H.t(t)+"::"+b))return this.d.e1(c)
else if(s.ag(0,"*::"+b))return this.d.e1(c)
else{s=this.b
if(s.ag(0,H.t(t)+"::"+b))return!0
else if(s.ag(0,"*::"+b))return!0
else if(s.ag(0,H.t(t)+"::*"))return!0
else if(s.ag(0,"*::*"))return!0}return!1},
dt:function(a,b,c,d){var t,s,r
this.a.ao(0,c)
t=b.bq(0,new W.kL())
s=b.bq(0,new W.kM())
this.b.ao(0,t)
r=this.c
r.ao(0,C.G)
r.ao(0,s)},
$iscf:1,
gcS:function(){return this.d}}
W.kL.prototype={
$1:function(a){return!C.a.ag(C.i,a)},
$S:function(){return{func:1,args:[,]}}}
W.kM.prototype={
$1:function(a){return C.a.ag(C.i,a)},
$S:function(){return{func:1,args:[,]}}}
W.kP.prototype={
ay:function(a,b,c){if(this.df(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.m9(a).a.getAttribute("template")==="")return this.e.ag(0,b)
return!1}}
W.kQ.prototype={
$1:function(a){return"TEMPLATE::"+H.t(a)},
$S:function(){return{func:1,args:[,]}}}
W.kO.prototype={
aR:function(a){var t=J.ai(a)
if(!!t.$isdO)return!1
t=!!t.$isaA
if(t&&W.dm(a)==="foreignObject")return!1
if(t)return!0
return!1},
ay:function(a,b,c){if(b==="is"||C.e.c2(b,"on"))return!1
return this.aR(a)},
$iscf:1}
W.ev.prototype={
K:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.m8(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gN:function(){return this.d}}
W.cf.prototype={}
W.kJ.prototype={}
W.fr.prototype={
c1:function(a){new W.kS(this).$2(a,null)},
aX:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
dW:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.m9(a)
r=s.gdO().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.b0(n)}p="element unprintable"
try{p=J.aP(a)}catch(n){H.b0(n)}try{o=W.dm(a)
this.dV(a,b,t,p,o,s,r)}catch(n){if(H.b0(n) instanceof P.bQ)throw n
else{this.aX(a,b)
window
m="Removing corrupted element "+H.t(p)
if(typeof console!="undefined")console.warn(m)}}},
dV:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.aX(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.aR(a)){this.aX(a,b)
window
t="Removing disallowed element <"+H.t(e)+"> from "+J.aP(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.ay(a,"is",g)){this.aX(a,b)
window
t="Removing disallowed type extension <"+H.t(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gaJ()
s=H.a(t.slice(0),[H.C(t,0)])
for(r=f.gaJ().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.U(s,r)
q=s[r]
if(!this.a.ay(a,J.nV(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.t(e)+" "+q+'="'+H.t(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.ai(a).$isdT)this.c1(a.content)}}
W.kS.prototype={
$2:function(a,b){var t,s,r,q,p
r=this.a
switch(a.nodeType){case 1:r.dW(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.aX(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.nQ(t)}catch(q){H.b0(q)
p=t
if(r){if(J.nP(p)!=null)p.parentNode.removeChild(p)}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.a0,W.a0]}}}
P.kB.prototype={
aQ:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.ab(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
ez:function(){this.aQ()
var t=this.a
this.aQ()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
ds:function(a){var t,s,r,q,p,o,n,m
t=a<0?-1:0
do{s=(a&4294967295)>>>0
a=C.b.ab(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.b.ab(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.b.ab(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.b.ab(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.b.ab(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.b.ab(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.b.ab(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aQ()
this.aQ()
this.aQ()
this.aQ()}}
P.fB.prototype={$isI:1}
P.cm.prototype={$isI:1}
P.h6.prototype={$isI:1}
P.h7.prototype={$isI:1}
P.h8.prototype={$isI:1}
P.h9.prototype={$isI:1}
P.ha.prototype={$isI:1}
P.hb.prototype={$isI:1}
P.hc.prototype={$isI:1}
P.hd.prototype={$isI:1}
P.he.prototype={$isI:1}
P.hf.prototype={$isI:1}
P.hg.prototype={$isI:1}
P.hh.prototype={$isI:1}
P.hi.prototype={$isI:1}
P.hj.prototype={$isI:1}
P.hk.prototype={$isI:1}
P.hl.prototype={$isI:1}
P.hy.prototype={$isI:1}
P.aL.prototype={$isI:1}
P.hH.prototype={$isI:1}
P.im.prototype={$isI:1}
P.io.prototype={$isI:1}
P.iP.prototype={$isI:1}
P.dO.prototype={$isdO:1,$isI:1}
P.aA.prototype={
ap:function(a,b,c,d){var t,s,r,q,p,o
t=H.a([],[W.cf])
t.push(W.no(null))
t.push(W.nr())
t.push(new W.kO())
c=new W.fr(new W.f2(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.l).e8(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.be(q)
o=t.gaP(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
$isaA:1,
$isI:1}
P.js.prototype={$isI:1}
P.ju.prototype={$isI:1}
P.cE.prototype={}
P.jB.prototype={$isI:1}
P.jK.prototype={$isI:1}
P.jL.prototype={$isI:1}
P.dZ.prototype={$isI:1}
P.kG.prototype={$isI:1}
P.kH.prototype={$isI:1}
P.kI.prototype={$isI:1}
S.fC.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Math Book",H.a([$.Q,$.an,$.ah],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Giant Map",H.a([$.Q,$.an],s),null,!1,"Map to Staffs HQ")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Microscope",H.a([$.V,$.an,$.b4],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Star Chart",H.a([$.Q,$.an],s),null,!1,"Cosmic Dot-to-Dot")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("History Book",H.a([$.Q,$.an],s),null,!1,"Homestuck Anthology")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Radioactive Rock",H.a([$.hQ,$.eN],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Compass",H.a([$.V,$.an],s),null,!1,"Navigation Box")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.du,$.j)
q.h(0,$.aj,$.j)
q.h(0,$.et,$.f)
q.h(0,$.a2,$.r)
q.h(0,$.aX,$.f)
p=$.i
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.k
o=o+n+" to stop "
m=$.v
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.pH
n=[U.b]
q.h(0,new R.H("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.o(),!1,!1,new Y.bd("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.n)
m=$.i
q.h(0,new R.H("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.k+" to stop "+$.v+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.iV(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.f)
m=$.i
p="The "+m+" finds a massive library, filled with books. The "
l=$.k
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.m
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.h(0,new R.H("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.bY(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.f)
m=this.r
m.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cR,$.r)
s.h(0,$.aX,$.j)
p=$.i
o="The "+p+"  is approached by a "
l=$.k
s.h(0,new R.H("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.v+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p=$.i
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.k
s.h(0,new R.H("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.v+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.bm(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.f)
p=$.i
s.h(0,new R.H("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.k+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.bY(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.f)
m.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cR,$.r)
t.h(0,$.aX,$.j)
t.h(0,$.aE,$.r)
t.h(0,$.mv,$.r)
r=$.i
q="The "+r+"  is approached by a "
p=$.k
q=q+p+" who offers them a grant to study "
o=$.S
t.h(0,new R.H("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.v+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.bY(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.f)
o=$.k
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.v
r=r+p+".  It is up to the "
q=$.i
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.S
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.pN
t.h(0,new R.H("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.cg(),!1,!1,new Y.bd("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.f)
p=$.i
t.h(0,new R.H("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.v+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.k+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
m.h(0,new X.q(s,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
L.fH.prototype={
$1:function(a){return!a.gb5()},
$S:function(){return{func:1,args:[L.c2]}}}
L.c2.prototype={
B:function(){var t,s
t=Q.u(null,null,A.M)
s=A.e("Perfectly Generic Object",H.a([],[G.J]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.a.j(t.b,new Q.d(s,t.k(s,1),[H.C(t,0)]))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.D]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bi,$.f)
q.h(0,$.aj,$.r)
q.h(0,$.c7,$.f)
q.h(0,$.aE,$.j)
q.h(0,$.cS,$.r)
p=$.i
o="The "+p+" learns that all of the local "
n=$.k
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.v+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.m
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.al+". The "+p+" has won! "
i=[U.b]
q.h(0,new R.w("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.B(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
j=this.f
j.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cW,$.f)
s.h(0,$.dt,$.r)
s.h(0,$.cV,$.j)
s.h(0,$.b8,$.f)
s.h(0,$.aK,$.r)
p=$.i
o="The "+p+" learns that all of the local "
n=$.k
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.v+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.m
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.al+". The "+p+" has won! "
s.h(0,new R.w("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.B(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
j.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.a2,$.f)
t.h(0,$.aj,$.r)
t.h(0,$.aI,$.j)
r=$.i
q="The "+r+" learns that all of the local "
p=$.k
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.v
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.m
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.al+". The "+r+" has won! "
t.h(0,new R.H("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.B(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.lM(),!1,!1,new Y.aw(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.r)
l=$.i
r="The "+l+" learns that all of the local "
m=$.k
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.m
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.al+". The "+l+" has won! "
t.h(0,new R.w("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.B(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
j.h(0,new X.q(s,t,null),$.Y)},
A:function(a){return this.Q},
a2:function(a,b,c,d){var t=this.Q
this.r=new X.en("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.ed]),H.a([],[M.dp]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.B()
this.C()
t=this.e
if($.$get$ea().ah(t))H.aC("Duplicate aspect id for "+this.A(0)+": "+t+" is already registered for "+J.aP($.$get$ea().p(0,t))+".")
$.$get$ea().h(0,t,this)},
gak:function(a){return this.e},
gM:function(a){return this.Q},
gbR:function(){return this.cx},
gb5:function(){return this.cy},
gb_:function(){return this.db},
gc0:function(){return this.dx},
gZ:function(){return this.fx},
gH:function(){return this.fy},
ga3:function(){return this.go},
ga6:function(){return this.id},
ga7:function(){return this.k1},
ga5:function(){return this.k4},
ga4:function(){return this.r1},
gJ:function(){return this.r2},
gI:function(){return this.rx}}
L.a1.prototype={}
M.fI.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Barbells",H.a([$.b3,$.hO,$.V],s),null,!1,"Strength Building Metal")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Basketball",H.a([$.lv,$.dA],s),null,!1,"Dunksphere")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Baseball Bat",H.a([$.mJ,$.aq],s),null,!1,"Wooden Pole of Bone Hurting")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Rubber Ball",H.a([$.lv,$.dA],s),null,!1,"Dead Animal Corpse Ball")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Megaphone",H.a([$.cd,$.ay],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Hockey Stick",H.a([$.mJ,$.aq,$.d2],s),null,!1,"L Shaped Bone Hurter")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Trophy",H.a([$.V,$.eO],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Boxing Glove",H.a([$.p7,$.dA],s),null,!1,"Fist Reinforcing Pain Cubes")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Yoga Mat",H.a([$.dA,$.ba],s),null,!1,"Flesh Rubberising Practice Mat")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cr,$.r)
q.h(0,$.aG,$.j)
q.h(0,$.b8,$.r)
p=$.i
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.k
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.v+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.h(0,new R.H("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.n)
m=$.i
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.k
q.h(0,new R.H("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.v+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.cg(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.f)
m=$.i
n="The "+m+"  wanders into a bunch of "
p=$.k
q.h(0,new R.H("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.d7(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.f)
m=this.r
m.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cr,$.j)
t.h(0,$.dw,$.j)
t.h(0,$.aG,$.j)
s=$.i
r="The "+s+" finds a team of underdog "
p=$.k
t.h(0,new R.H("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.iV(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.f)
p=$.k
s="A group of "+p+"s approach the "
r=$.i
s=s+r+". Apparently their sports team lost their coach to the "+$.m+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.v
t.h(0,new R.H("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.cg(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.f)
k=$.k
p="A group of "+k+"s approach the "
r=$.i
t.h(0,new R.H("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.m+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.S+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
m.h(0,new X.q(q,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
O.fJ.prototype={
aq:function(){return!0},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Cod Piece",H.a([$.a3,$.a6,$.bb,$.F,$.aq],s),"God damn it, MI. ",!1,null)
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Poisoned Candy",H.a([$.mH,$.F,$.hS],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Cursed Lyre",H.a([$.aY,$.aq,$.aS,$.F,$.b6],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Snare Trap",H.a([$.a3,$.aY,$.F,$.cs],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
a8:function(){return 2},
a9:function(){return 0.5},
aa:function(){return 3},
C:function(){var t,s,r,q,p,o,n,m
t=[P.D]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.b1,$.f)
t.h(0,$.es,$.f)
t.h(0,$.aR,$.f)
t.h(0,$.bT,$.f)
t.h(0,$.aQ,$.f)
t.h(0,$.dq,$.f)
r="After all the bullshit the "+$.m+" has put the native "
q=$.k
r=r+q+"s through, the "
p=$.i
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.Z+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.v
m=[U.b]
t.h(0,new R.K("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.o(),!1,!1,new Y.c_("Rewards/no_reward.png",null),1,null,null),$.n)
p=$.k
n="A group of jubilant "+p+"s are following the "
q=$.i
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.v
t.h(0,new R.K("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.m+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
q=$.i
t.h(0,new R.K("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.m+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.o(),!1,!1,new Y.fP("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.n)
q="The "+$.m+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.i
q=q+r+" organizes a huge festival for all the "
p=$.k
t.h(0,new R.ar("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x2},
ga0:function(){return this.y1},
ga_:function(){return this.y2},
gJ:function(){return this.l}}
T.fL.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Mystical Vial of Blood",H.a([$.b4,$.aS,$.E,$.b5],s),null,!1,"Vial of Not-ABs Oil")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Bananaphone",H.a([$.cb,$.aS,$.E,$.bC],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Friendship Bracelet",H.a([$.a3,$.aS,$.E,$.b5,$.eG],s),null,!1,"Soul Binding Wrist Shackle")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Bonding Manacles",H.a([$.V,$.cs,$.E,$.b5,$.eG,$.aV],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Friendship Stairs",H.a([$.aq,$.lz,$.aS,$.b5,$.E,$.a6],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.D]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bz,$.f)
q.h(0,$.mA,$.f)
q.h(0,$.aE,$.j)
p=$.i
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.k
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.S+" and some boondollars in compensation."
n=this.x1
k=[U.b]
q.h(0,new R.H("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.cg(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.n)
n=$.k
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.v+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.m
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.i
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.al+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.h(0,new R.w("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.B(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n=$.i
m="The "+n+" is playing against a "
l=$.k
m=m+l+" in a friendly game of "+$.S+" Battle. With some smooth moves, they pull out a victory. The "+l+" comes over for a handshake. The "+n+" notices some ink dripping out of the "+l+"\u2019s arm. The "+l+" becomes confused. 'Ink? No this is blood from when I scraped my limb.' What the hell is blood?"
l="The "+n+" tries asking around what blood is, but every "+l+" asked just looks at them strangely and walks away. Finally, they run into a "
i=$.m
q.h(0,new R.H("The True Meaning of Blood",!1,[new U.b(m),new U.b(l+i+" minion who mocks their lack of knowledge. 'If you don\u2019t even know what blood is maybe you should read a book sometime.'"),new U.b("The "+n+" takes the rude (and also dead) "+i+" minion\u2019s advice and gets their answer at a library. According to a biology textbook, people here have a liquid called blood running through tubes across their entire body. What a completely weird and alien concept.")],H.a([],k),R.pR(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.W)
i=this.f
i.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.b8,$.f)
s.h(0,$.aQ,$.r)
s.h(0,$.a2,$.r)
s.h(0,$.hv,$.f)
s.h(0,$.aR,$.r)
p=$.i
o="The "+p+"  and the "
n=$.bF
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
j=$.m
l=l+j+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+j+"."
h="Slaying the "+j+" proves the POWER OF TEAMWORK!"
s.h(0,new R.w("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.B(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+j+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.bZ(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.W)
h=$.i
j="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.k
j=j+n+"s explains that before  "
p=$.m
j=j+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
n="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.al+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.n0
s.h(0,new R.w("Chain the Towers",!1,[new U.b(j),new U.b(n),new U.b(l),new U.B(m,h,o)],H.a([],k),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.i
o="The "+p+" learns of the "
h=$.Z
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.k
o=o+m+" explains that the "
l=$.m
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
j="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.al+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.h(0,new R.w("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.B(j,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.i
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
j=$.k
h=h+j+" on "+$.Z+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
j="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+j+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+j+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.c8+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.h(0,new R.K("One Degree of Separation",!1,[new U.b(h),new U.b(n),new U.b(j)],H.a([],k),R.bY(),!1,!1,new Y.aw("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
p=$.i
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.k+" on "
n=$.Z
j=j+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.c8+" is now more popular with your friends than you are."
s.h(0,new R.K("Steal The Friends",!1,[new U.b(j),new U.b(h),new U.b(n)],H.a([],k),R.iW(),!1,!1,new Y.aw("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
p=$.i
n="The "+p+"  and the "
h=$.bF
n=n+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
j="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.m
j=j+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.h(0,new R.w("Pale Shipping Dungeon",!1,[new U.b(n),new U.B(j,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.f)+".",o)],H.a([],k),R.bZ(),!1,!1,new Y.dN(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.W)
i.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.a2,$.f)
t.h(0,$.aj,$.r)
t.h(0,$.aI,$.j)
r="In the wake of the defeat of the "+$.m+" it becomes really how isolated the individual "
q=$.k
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.i
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.c8+" to kick your ass, but luckily they have several."
t.h(0,new R.K("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.cg(),!1,!1,new Y.aw("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
o=$.i
q="The "+o+" learns that two prominent "
p=$.k
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
n="In a dramatic reveal, the "+o+" discovers that "
m=$.m
n=n+m+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
l="The "+o+" confronts "+m+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+m+" lies slain by the "+o+"'s "+$.al+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.v+"ing. "
t.h(0,new R.w("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(n),new U.B(l,"The deception of "+m+" continues with the defeat of the "+o+".",p)],H.a([],k),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
i.h(0,new X.q(s,t,null),$.Y)},
gZ:function(){return this.m},
ga7:function(){return this.n},
gH:function(){return this.q},
gJ:function(){return this.t},
ga6:function(){return this.u},
ga5:function(){return this.v},
ga4:function(){return this.w},
ga3:function(){return this.D},
gI:function(){return this.O}}
T.fN.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Pan's Pipe",H.a([$.b6,$.aq,$.aS,$.E],s),null,!1,"Smonkin Weeds Pipe")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Skeleton Key",H.a([$.cZ,$.E],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Inspector's Fan",H.a([$.ay,$.V,$.aS,$.E],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Jet Pack",H.a([$.ce,$.V,$.cd,$.E,$.a6],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.D]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aI,$.j)
q.h(0,$.dw,$.f)
q.h(0,$.a2,$.j)
p=$.i
o="The "+p+" tries posting a letter through the "
n=$.S
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.m
o=o+m+" has screwed with the mail system, crippling the "
l=$.k
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.al+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.pI
i=[U.b]
q.h(0,new R.w("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.B(j,p,l)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.n)
m=this.f
m.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aj,$.f)
s.h(0,$.dw,$.j)
s.h(0,$.a2,$.j)
s.h(0,$.aG,$.j)
s.h(0,$.aI,$.j)
p=$.i
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.S
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.k
k=l+k+" fields. The "+k+"s "+$.v+"ing is so joyful it's literally deafening. "
l=$.m
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.al+". The "+p+" is finally free to continue improving the land with wind. "
s.h(0,new R.w("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.B(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
h=$.i
p="\u201cThe "+h+" returns home from exploring their land, but a "
l=$.k
s.h(0,new R.H("Slay the Windmills",!1,[new U.b(p+l+" is waiting at the door. Shaking heavily, she tells the "+h+" that her village is being terrorized by terrible monsters. The "+h+" agrees to help, and is lead to a plain just outside the village. The "+l+" points in one direction to indicate the monsters, but all the "+h+" can see are a bunch of windmills. Wait\u2026are the windmills the monsters?! The "+l+" nods her head. The "+h+" knows consorts can be pretty dumb, but this really takes the cake.\u201d "),new U.b("The "+h+" whacks the bases of a few windmills with their "+$.al+" until they collapse. The "+l+"s from the village cheer and declare the "+h+" as a true hero and slayer of beasts. The "+h+" is happy to get praised, but is still a little frustrated by all of this nonsense. "),new U.b("Most of the windmills have been knocked over. The "+h+" starts to hit one of the last windmills, when suddenly it rears back and opens a toothy mouth in a roar. Holy Shit! It turns out windmill monsters aren\u2019t a delusion after all! The "+h+" slays the windmill monster in a tough strife and enjoys the "+l+" village\u2019s victory party.  ")],H.a([],i),R.bm(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.j)
m.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aK,$.f)
t.h(0,$.ls,$.f)
t.h(0,$.dw,$.r)
t.h(0,$.aI,$.r)
r=$.i
q="The "+r+" is chilling in a "+$.k+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.m
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.S
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.Z+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.al+". The "+r+" has become the storm master. It is them. "
t.h(0,new R.w("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.B(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
m.h(0,new X.q(s,t,null),$.Y)},
gZ:function(){return this.m},
ga7:function(){return this.n},
gH:function(){return this.q},
gJ:function(){return this.t},
ga6:function(){return this.u},
ga5:function(){return this.v},
ga4:function(){return this.w},
ga3:function(){return this.D},
gI:function(){return this.O}}
A.fQ.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Colonel Sassacre's Daunting Text ",H.a([$.Q,$.b3,$.bC,$.hO],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Wise Guy Book",H.a([$.Q,$.bC],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Beagle Puss",H.a([$.b4,$.bC],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Novelty Microphone",H.a([$.cd,$.ay,$.bC],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Banana",H.a([$.cb,$.bC],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Fake Flower",H.a([$.a3,$.bC],s),null,!1,"Flower that smells like Plastic")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Trick Handcuffs",H.a([$.V,$.bC],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aR,$.j)
q.h(0,$.aW,$.f)
q.h(0,$.aG,$.j)
p=$.i
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.k
o=o+n+"s are too scared to even "+$.v+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.m+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.h(0,new R.H("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.n)
p=this.r
p.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cr,$.r)
s.h(0,$.aG,$.f)
s.h(0,$.aW,$.f)
s.h(0,$.b1,$.f)
o=$.i
n="The "+o+" learns of an Open Mic Nite at the "
m=$.Z
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.k
k=k+j+"s let out a braying "+$.v+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.pL
s.h(0,new R.H("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.o(),!1,!1,new Y.bd("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.b9,$.r)
t.h(0,$.aF,$.j)
t.h(0,$.aW,$.f)
t.h(0,$.aG,$.j)
t.h(0,$.ho,$.j)
r=$.i
q="The "+r+"  is approached by a Crafty "
o=$.k
q=q+o+" who offers them a magical "
n=$.S
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.v
t.h(0,new R.H("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(s,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
M.fV.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Can of Spray Paint",H.a([$.aU,$.V],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sensible Chuckles Magazine",H.a([$.Q,$.av,$.bC,$.ah],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Gentleman's Razor",H.a([$.pn,$.V,$.d_],s),null,!1,"Face Cutting Hair Remover")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("How To Draw Manga",H.a([$.Q,$.av,$.ah],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Painting of a Horse Boxing a Football Player",H.a([$.aU,$.aT,$.Q],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Collection of Classical Works",H.a([$.av,$.Q],s),null,!1,"Book of Naked Renaissance People")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Documentary on Horses",H.a([$.av,$.au,$.aT],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Paint Set",H.a([$.aU,$.av],s),null,!1,"Pain Drink Set")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Shaving Cream",H.a([$.ce,$.av,$.V],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Classy Suit",H.a([$.a3,$.av],s),null,!1,"Georgio Armani Suit")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("The Fatherly Gent's Shaving Almanac ",H.a([$.Q,$.av,$.ah],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.c6,$.j)
q.h(0,$.aX,$.f)
q.h(0,$.a2,$.j)
p=$.i
o="The "+p+" visits a beautiful "
n=$.S
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.k
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.m+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.v+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.h(0,new R.H("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.n)
m=this.r
m.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cr,$.r)
s.h(0,$.aG,$.j)
s.h(0,$.aW,$.r)
s.h(0,$.aj,$.j)
s.h(0,$.b1,$.f)
o=$.i
n="The "+o+" finds a troupe of dejected looking "
l=$.k
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.Z
l=l+n+" "
k=$.S
s.h(0,new R.H("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.v+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
m.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.es,$.r)
t.h(0,$.aR,$.r)
t.h(0,$.dq,$.r)
t.h(0,$.aF,$.r)
t.h(0,$.aj,$.j)
t.h(0,$.a2,$.j)
r=$.i
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.v
q=q+o+"ingworth, "
n=$.k
q=q+n+" heiress to the "+$.S+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.pB
t.h(0,new R.H("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.o(),!1,!1,new Y.bd("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.n)
m.h(0,new X.q(s,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
V.fY.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Trendy Fabric",H.a([$.aU,$.a3],s),null,!1,"Weird Tasting Candy Paper")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Necklace",H.a([$.aU,$.mM,$.eG],s),null,!1,"Nasty Candy Necklace")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sewing Needle",H.a([$.V,$.pj,$.eL],s),null,!1,"Cloth Stabbing Knife")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=$.lw
r=A.e("Broom",H.a([r,$.aq,$.b3,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Rolling Pin",H.a([$.aq,$.pq,$.b3],s),null,!1,"Babushkas Punishment Pole")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Velvet Pillow",H.a([$.a3,$.ba,$.aS,$.aU,$.hR],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Yarn Ball",H.a([$.aU,$.a3],s),null,!1,"Cats Plaything")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Refrigerator",H.a([$.aV,$.hO,$.V,$.ca],s),null,!1,"Food Hardening Box")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Photo Album",H.a([$.aU,$.Q],s),null,!1,"Memory Book")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Ice Cubes",H.a([$.ca],s),null,!1,"Hard Water")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Cast Iron Skillet",H.a([$.V,$.ce,$.b3,$.hO,$.p8],s),null,!1,"Fancy Unstoppable Weapon")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Failed Dish",H.a([$.hS],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Dr Pepper BBQ Sauce",H.a([$.hS,$.hT],s),"Gross.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Potted Plant",H.a([$.aU,$.lx,$.dz],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Chicken Leg",H.a([$.cb,$.d1,$.cZ],s),null,!1,"Thicc Chicken")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Juicy Steak",H.a([$.cb,$.d1],s),null,!1,"Juicy Cow Flesh")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Wedding Cake",H.a([$.aU,$.cb,$.b5],s),null,!1,"The Only Benefit of a Wedding")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.b1,$.j)
q.h(0,$.aQ,$.j)
q.h(0,$.aR,$.r)
p=$.i
o="The "+p+" is visited by a Beautiful "
n=$.k
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.S
l=[U.b]
q.h(0,new R.H("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.v+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.o(),!1,!1,new Y.eh("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n=this.r
n.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aR,$.f)
s.h(0,$.aG,$.j)
s.h(0,$.dq,$.f)
s.h(0,$.bT,$.j)
s.h(0,$.aj,$.f)
p=$.i
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.S
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.k
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.v+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.pJ
s.h(0,new R.H("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.o(),!1,!1,new Y.bd("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.eo,$.f)
t.h(0,$.aj,$.j)
t.h(0,$.dr,$.f)
t.h(0,$.a2,$.j)
t.h(0,$.hv,$.f)
r=$.i
q="The "+r+" finds a loom, and a Wizened "
p=$.k
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.S
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.v+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.h(0,new R.H("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(s,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
U.fZ.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ah,$.ay,$.Q,$.aY,$.E,$.a6],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Egg Timer",H.a([$.au,$.aS,$.E,$.aY],s),null,!1,"Egg That Counts Down to Your Death")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Skull Timer",H.a([$.cZ,$.aS,$.E,$.aY],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Poison Flask",H.a([$.b4,$.E,$.hS],s),null,!1,"Glass of Bone Hurting Juice")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Ice Gorgon Head",H.a([$.b4,$.E,$.ca,$.aY,$.cs,$.hW,$.bt],s),null,!1,"Oddly Attractive Decapitated Head")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Obituary",H.a([$.aV,$.bt,$.aY,$.Q,$.E],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.D]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.c7,$.f)
q.h(0,$.bi,$.j)
q.h(0,$.dw,$.r)
q.h(0,$.aj,$.r)
q.h(0,$.aE,$.j)
p=$.i
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.k
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.S
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.m
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.al+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.h(0,new R.w("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.B(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n=this.f
n.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.c7,$.f)
s.h(0,$.bi,$.j)
s.h(0,$.cX,$.W)
s.h(0,$.cT,$.j)
s.h(0,$.mv,$.j)
s.h(0,$.bz,$.j)
s.h(0,$.bi,$.j)
s.h(0,$.aj,$.r)
s.h(0,$.aE,$.j)
s.h(0,$.bA,$.j)
p=$.i
o="The "+p+" has found a group of Violent "
m=$.k
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.Z
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.v+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.m
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.al+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.h(0,new R.w("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.B(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.bm(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
m=$.i
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.S
p=p+l+"s alike. "
l=$.k+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.m
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.al+". The "+m+" is finally free to continue improving the land. "
s.h(0,new R.w("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.B(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.a2,$.f)
t.h(0,$.aE,$.f)
t.h(0,$.oA,$.W)
t.h(0,$.du,$.r)
r=$.i
q="The "+r+" finds a small dungeon bearing the image of "
p=$.m
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.k+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.h(0,new R.w("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.B(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.bm(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
k=$.i
p="The "+k+" learns from one of their "
r=$.k
p=p+r+"s that there is an ancient prophecy of a "
l=$.Z
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.S
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.m
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.al+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.pA
t.h(0,new R.w("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.B(o,k,q)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(s,t,null),$.Y)},
gZ:function(){return this.m},
ga7:function(){return this.n},
gH:function(){return this.q},
gJ:function(){return this.t},
ga6:function(){return this.u},
ga5:function(){return this.v},
ga4:function(){return this.w},
gb_:function(){return this.D},
gc0:function(){return this.O},
ga3:function(){return this.aF},
gI:function(){return this.aG}}
Z.h_.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Dream Diary",H.a([$.Q,$.ah,$.E],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Interlocking Brick",H.a([$.au,$.aS,$.b3,$.E,$.a6],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Art Supplies",H.a([$.au,$.aS,$.E],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.eo,$.j)
q.h(0,$.dr,$.f)
q.h(0,$.a2,$.j)
q.h(0,$.hv,$.j)
p=$.k
o="A "+p+" child tugs on the "
n=$.i
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.S
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.m
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.v+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.pG
k=[U.b]
q.h(0,new R.w("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.B(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.n)
l=this.f
l.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aK,$.j)
s.h(0,$.dr,$.f)
s.h(0,$.bV,$.j)
s.h(0,$.bh,$.j)
s.h(0,$.lq,$.j)
s.h(0,$.aW,$.f)
p=$.i
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.k
n=n+m+"s are even starting to snigger and "
j=$.v
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.m
s.h(0,new R.w("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.B("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
l.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.c6,$.f)
t.h(0,$.hq,$.j)
t.h(0,$.a2,$.j)
t.h(0,$.bh,$.f)
t.h(0,$.lq,$.f)
t.h(0,$.dr,$.j)
r=$.i
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.m
t.h(0,new R.w("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.Z+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.k+" is "+$.v+"ing in reverse. Another is in a "+$.S+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.B("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
l.h(0,new X.q(s,t,null),$.Y)},
gZ:function(){return this.l},
ga7:function(){return this.m},
gH:function(){return this.n},
gJ:function(){return this.q},
ga6:function(){return this.t},
ga5:function(){return this.w},
ga4:function(){return this.F},
gb_:function(){return this.E},
ga3:function(){return this.D},
gI:function(){return this.O}}
X.en.prototype={}
X.ed.prototype={
$S:function(){return{func:1,v:true,args:[[P.R,M.dp]]}}}
M.dp.prototype={}
U.hm.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Fluthulu Poster",H.a([$.a3,$.ba,$.bt,$.eH],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Scalemate",H.a([$.a3,$.ba,$.bt],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Replica Bone Shield",H.a([$.aV,$.au,$.cZ,$.hU,$.bb],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Replica Ice Sword",H.a([$.au,$.pc,$.hV,$.bb],s),null,!1,"Fake Hard Water Long Stabber")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Zombie Mask",H.a([$.au,$.hW,$.d1,$.bt],s),null,!1,"Dead Face")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Vampire Romance Novel",H.a([$.ah,$.Q,$.ct,$.bt],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Wizardy Herbert",H.a([$.Q,$.ax,$.b3],s),null,!1,"Shitty Wizard Object")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Complacency of the Learned",H.a([$.Q,$.ax,$.b3],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Grimoire for Summoning the Zoologically Dubious ",H.a([$.Q,$.ax,$.hW,$.bt,$.eH],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Wizard Statue",H.a([$.aV,$.eN,$.ax,$.b3,$.bb],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Mermaid Fountain",H.a([$.aV,$.mK,$.ax,$.b3,$.bb],s),null,!1,"Water Spitting Fish Woman Statue")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ds,$.W)
q.h(0,$.aQ,$.j)
q.h(0,$.aI,$.j)
q.h(0,$.b9,$.r)
p=$.i
o="The "+p+" learns of a Beautiful "
n=$.k
o=o+n+" who has been kidnapped by the vial "
m=$.m
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.S
j=[U.b]
q.h(0,new R.H("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p=this.r
p.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aF,$.f)
s.h(0,$.bz,$.f)
s.h(0,$.hr,$.j)
s.h(0,$.aE,$.f)
s.h(0,$.cX,$.f)
s.h(0,$.er,$.j)
o=$.i
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.k
s.h(0,new R.H("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aF,$.f)
t.h(0,$.eq,$.j)
t.h(0,$.aE,$.f)
t.h(0,$.c5,$.j)
t.h(0,$.cR,$.j)
t.h(0,$.mA,$.j)
r=$.i
q="The "+r+" finds a group of three "
o=$.k
q=q+o+"s "
n=$.v
t.h(0,new R.H("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(s,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
N.T.prototype={
A:function(a){return H.t(new H.cl(H.l1(this),null))+": "+H.t(this.b)}}
E.ey.prototype={}
E.iJ.prototype={}
E.x.prototype={
A:function(a){var t="["+J.aP(this.a)+" x "+H.t(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gd6:function(){return this.a},
gey:function(){return this.b}}
E.cN.prototype={
A:function(a){var t="[(Random from "+P.i_(this.d,"(",")")+") x "+H.t(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gI:function(){return this.d}}
E.eb.prototype={
A:function(a){return"[Stats assigned from player Interests x"+H.t(this.b)+"]"}}
Y.hB.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("How to Teach Your Friends to Hack SBURB",H.a([$.ah,$.F,$.Q,$.a6,$.lC],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Unstable Domino",H.a([$.au,$.F,$.aY],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Exposed Thread",H.a([$.a3,$.F,$.aY],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Teetering Plate",H.a([$.mT,$.F,$.aY],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.D]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.lu,$.j)
t.h(0,$.aI,$.f)
t.h(0,$.bA,$.r)
t.h(0,$.bU,$.f)
r=$.k
q="An excited "+r+" runs up to the "
p=$.i
q=q+p+" and starts to "
o=$.v
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.Z
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.S
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.m
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.h(0,new R.w("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.B(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
o=$.i
t.h(0,new R.K("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.m+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.k+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.o(),!1,!1,new Y.c_("Rewards/no_reward.png",null),1,null,null),$.n)
o=$.k
j="Now that the "+o+"s are free from the reign of "+$.m+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.i
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.v
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.Z+" Quest Online: The "+$.S+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.fy
t.h(0,new R.K("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.n)
p="The "+$.m+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.i
p=p+o+" shows the "
r=$.k
t.h(0,new R.ar("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.v+"s in time to stop them.    ")],H.a([],i),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x1},
gJ:function(){return this.x2},
gI:function(){return this.t}}
Y.hC.prototype={
X:function(){return!0},
L:function(a){return!1},
Y:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Sherpa Parka",H.a([$.ca,$.F,$.eK],s),"Clearly the best class uses this.",!1,null)
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Guide Book",H.a([$.a6,$.ca,$.ah,$.Q,$.F,$.an],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Whistle",H.a([$.V,$.F,$.cd],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Announcement System",H.a([$.V,$.F,$.ay,$.an],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.lu,$.f)
t.h(0,$.aI,$.f)
t.h(0,$.bA,$.j)
t.h(0,$.bU,$.f)
r="Now that the "+$.m+" is out of the way, a group of "
q=$.k
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.i
o=[U.b]
t.h(0,new R.K("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.v+", but they are happy.")],H.a([],o),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
q="The "+$.m+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.i
t.h(0,new R.ar("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.k+" "+$.v+"s in time to stop them.    ")],H.a([],o),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
this.x.h(0,new X.q(s,t,null),$.at)},
gJ:function(){return this.x2}}
T.hD.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Doll",H.a([$.mT,$.aU,$.bD,$.E],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Soul Puppet",H.a([$.aq,$.bD,$.E,$.a6,$.bt],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Mirror",H.a([$.mQ,$.E],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Shipping Grid",H.a([$.Q,$.E,$.ct],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Shades",H.a([$.aT,$.b4,$.E],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.D]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cT,$.r)
q.h(0,$.cU,$.f)
q.h(0,$.aG,$.j)
p=$.i
o="The "+p+", guided by a "+$.k+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.m
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.al+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.h(0,new R.w("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.B(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
j=$.i
p="The "+j+" finds a Violent "
l=$.k
p=p+l+". A Magical Talking "
k=$.S
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.m
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.h(0,new R.w("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.B(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.iW(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
h=this.f
h.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aW,$.f)
s.h(0,$.hr,$.f)
s.h(0,$.dw,$.j)
s.h(0,$.aE,$.f)
s.h(0,$.aR,$.j)
s.h(0,$.bA,$.r)
p=$.i
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.S
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.m
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.al+". The "+p+" is victorious. "
s.h(0,new R.w("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.B(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
j="Now that the "+$.m+" has been defeated, a Copy "
p=$.i
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.k
j=j+k+"s "
l=$.v
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.c8+" knows who they are, and their confidence is turned into a pink lightning attack."
s.h(0,new R.K("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.cg(),!1,!1,new Y.aw("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
p=$.i
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.m
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.h(0,new R.w("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.B(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.bm(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
h.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.hp,$.f)
t.h(0,$.aR,$.f)
t.h(0,$.lt,$.f)
t.h(0,$.dq,$.j)
t.h(0,$.er,$.f)
t.h(0,$.aQ,$.j)
t.h(0,$.cU,$.r)
r=$.i
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.k
t.h(0,new R.w("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.v+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.Z+" laws put in place by "+$.m+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
r=$.i
p="The "+r+" finds a weeping Broken Hearted "
q=$.k
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.Z
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.v
t.h(0,new R.K("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.d7(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.f)
q=$.i
m="The "+q+"  and the "
r=$.bF
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.m
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.h(0,new R.w("Flushed Shipping Dungeon",!1,[new U.b(m),new U.B(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.f)+".",n)],H.a([],i),R.bZ(),!1,!1,new Y.ew(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.W)
n=$.i
r="The "+n+"  and the "
q=$.bF
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.m
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.h(0,new R.w("Pitched Shipping Dungeon",!1,[new U.b(r),new U.B(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.f)+".",m)],H.a([],i),R.bZ(),!1,!1,new Y.f6(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.W)
h.h(0,new X.q(s,t,null),$.a_)},
gZ:function(){return this.l},
ga7:function(){return this.m},
gH:function(){return this.n},
gJ:function(){return this.q},
ga6:function(){return this.t},
ga5:function(){return this.u},
ga4:function(){return this.v},
gb_:function(){return this.E},
ga3:function(){return this.D},
gI:function(){return this.O}}
B.hE.prototype={
X:function(){return!1},
L:function(a){return!0},
Y:function(){return this.L(0)},
a8:function(){return 0.5},
a9:function(){return 2},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Family Ashes",H.a([$.aV,$.ce,$.F,$.aY,$.ly],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Last Will and Testament",H.a([$.a6,$.Q,$.F,$.aY,$.lA],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Grooming Guide",H.a([$.ah,$.F,$.av],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Powered Attorney",H.a([$.p1,$.F,$.mF,$.lA],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Executer's Ax",H.a([$.oZ,$.F,$.d_,$.lA],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
aa:function(){return 1.5},
C:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.aK,$.j)
r=$.m
q="With the death of the "+r+", it now falls to the "
p=$.i
o=[U.b]
t.h(0,new R.K("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.k+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
r="The "+$.m+" has released the frogs into the "
p=$.i
t.h(0,new R.ar("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.k+"s 'help' by "+$.v+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.y2},
ga0:function(){return this.l},
ga_:function(){return this.m},
gJ:function(){return this.n}}
X.hF.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Wand",H.a([$.aq,$.E,$.ax,$.bk],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Angel Feather",H.a([$.bk,$.eJ,$.E,$.cc,$.b6,$.a6,$.ax],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Never Ending Story DVD",H.a([$.mU,$.lz,$.E,$.ax,$.bC,$.bk],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Candle",H.a([$.bk,$.cc,$.E,$.ce],s),null,!1,"Dying Light Stick")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Fairy Figurine",H.a([$.au,$.cc,$.E,$.bk],s),null,!1,"Tiny Petrified Tinkerbell")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.D]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.mu,$.f)
q.h(0,$.aQ,$.j)
q.h(0,$.a2,$.f)
q.h(0,$.bh,$.f)
p=$.i
o="The "+p+" is just minding their own business when they see a wizened "
n=$.k
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.v+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.m
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.S
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.pD
i=[U.b]
q.h(0,new R.w("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.B(k,p,j)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.n)
n=$.i
j="The "+n+" has slain "+$.m+", but there\u2019s still one thing left to do. The land is infested with terrifying creatures called angels and it\u2019s been creeping the "+n+" out the whole time. Clearly their ultimate quest for this land must be to eliminate all the angels and free the land from their terror."
p="Angel killing is a lot harder than the "+n+" expected, and they were already expecting it to be pretty tough. The angels have huge amounts of health, and they\u2019re now completely pissed off over the whole exterminating them thing going on. The land is 100 times more terrifying now with swarming angels, but things are always darkest before the dawn! The "+n+" continues on their righteous quest."
k="All of the horrible angels have finally been slain. The land has been saved from their menace. The "+n+" excitedly waits for their quest reward, but nothing happens. They go to some of the "
l=$.k
q.h(0,new R.K("Kill the Angels",!1,[new U.b(j),new U.b(p),new U.b(k+l+" villages to ask for a reward, but they are refused. Frankly, the "+l+"s would have preferred the angels remained instead of hiding in their homes while the "+n+" was waging their one person war. Maybe genocide wasn\u2019t the right answer after all?")],H.a([],i),R.bm(),!1,!1,new Y.c_("Rewards/no_reward.png",null),1,null,null),$.n)
n=this.f
n.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aF,$.f)
s.h(0,$.ho,$.j)
s.h(0,$.bV,$.f)
p=$.i
o="The "+p+"  is approached by a Crafty "
m=$.k
o=o+m+" who offers them a magical "
l=$.S
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.m
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.h(0,new R.w("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.B(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.a2,$.f)
t.h(0,$.bT,$.r)
t.h(0,$.aX,$.f)
t.h(0,$.bh,$.f)
r=$.i
q="The "+r+" finds a grey town of despondant "
p=$.k
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.m
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.S
t.h(0,new R.w("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.B("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
r=$.i
o="The "+r+" discovers a group of "
p=$.k
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.m
t.h(0,new R.w("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.B("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.d7(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
n.h(0,new X.q(s,t,null),$.Y)},
gZ:function(){return this.l},
ga7:function(){return this.m},
gH:function(){return this.n},
gJ:function(){return this.q},
ga6:function(){return this.t},
ga5:function(){return this.u},
ga4:function(){return this.v},
ga3:function(){return this.E},
gI:function(){return this.D}}
V.hJ.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Inkwell",H.a([$.b4,$.aS,$.E,$.eJ],s),null,!1,"Vial of Not-ABs Oil")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Splatfest T-shirt",H.a([$.a3,$.ba,$.E,$.mL],s),null,!1,"Mechandising Party")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Friendship Bracelet",H.a([$.a3,$.aS,$.E,$.b5,$.eG],s),null,!1,"Soul Binding Wrist Shackle")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Bonding Manacles",H.a([$.V,$.cs,$.E,$.b5,$.eG,$.aV],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Friendship Stairs",H.a([$.aq,$.lz,$.aS,$.b5,$.E,$.a6],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.D]
s=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.b8,$.f)
q.h(0,$.aQ,$.r)
q.h(0,$.a2,$.r)
q.h(0,$.hv,$.f)
q.h(0,$.aR,$.r)
q.h(0,$.ov,$.f)
p=$.i
o="The "+p+"  and the "
n=$.bF
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
k=$.m
l=l+k+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+k+"."
j="Slaying the "+k+" proves the POWER OF TEAMWORK!"
i=[U.b]
q.h(0,new R.w("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.B(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+k+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",j)],H.a([],i),R.bZ(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.W)
j=$.i
k="The "+j+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.k
k=k+n+"s explains that before  "
p=$.m
k=k+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+j+" vows to help. "
n="The "+j+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+j+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+j+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+j+"'s "+$.al+". The "+j+" is finally free to restore the chains, bringing peace and understanding to the land. "
j="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+j+"."
p=$.n0
q.h(0,new R.w("Chain the Towers",!1,[new U.b(k),new U.b(n),new U.b(l),new U.B(m,j,o)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.i
o="The "+p+" learns of the "
j=$.Z
o=o+j+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.k
o=o+m+" explains that the "
l=$.m
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+j+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+j+" Tower . "
k="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.al+". The "+p+" is finally able to see what lies at the top of the "+j+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
q.h(0,new R.w("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.B(k,"The "+j+" Tower is more at risk than ever before.",p)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.i
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
k=$.k
j=j+k+" on "+$.Z+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
k="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+k+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+k+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.c8+" has so many friends, they have to assume everyone in this fight is already in their friend list."
q.h(0,new R.K("One Degree of Separation",!1,[new U.b(j),new U.b(n),new U.b(k)],H.a([],i),R.bY(),!1,!1,new Y.aw("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
p=$.i
k="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.k+" on "
n=$.Z
k=k+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
j="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.c8+" is now more popular with your friends than you are."
q.h(0,new R.K("Steal The Friends",!1,[new U.b(k),new U.b(j),new U.b(n)],H.a([],i),R.iW(),!1,!1,new Y.aw("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
p=$.i
n="The "+p+"  and the "
j=$.bF
n=n+j+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
k="The "+p+"  and the "+j+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.m
k=k+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+j+" together."
q.h(0,new R.w("Pale Shipping Dungeon",!1,[new U.b(n),new U.B(k,"The "+p+" and "+j+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.f)+".",o)],H.a([],i),R.bZ(),!1,!1,new Y.dN(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.W)
o=this.f
o.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Ink","Paper","Color","Quills"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aj,$.r)
s.h(0,$.ho,$.r)
s.h(0,$.aX,$.r)
s.h(0,$.aG,$.f)
s.h(0,$.du,$.r)
p=$.i
n="The "+p+" comes across an enormous wall. Strange symbols are spread across its face. An indent in the wall indicates a door will appear if the puzzle of the wall is solved."
m="The "+p+" is getting annoyed trying to solve the wall. They start inking graffiti on the wall out of spite. Suddenly, they realize that some of the symbols light up when the ink touches it."
l="The "+p+" spends a good hour painting the wall. A number of symbols light up but nothing else happens. The "+p+" realizes unhappily that they probably need to paint only the symbols. Shit."
k="The wall is finally clean except for the appropriate symbols and the door is open. The "+p+" is eager to fight "
j=$.m
k=k+j+" and give some payback for the terrible wall puzzle. "
h=j+" is defeated and the "+p+"\u2019s payback is complete. "
s.h(0,new R.w("Paint the Wall",!1,[new U.b(n),new U.b(m),new U.b(l),new U.B(k,"With the "+p+"\u2019s defeat, "+j+" closes the door repaints the outside wall, just to be a jerk.",h)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.r)
h=$.i
j="The "+h+" is visiting a "
p=$.k
j=j+p+" town, but before they could reach it, a crowd of angry "+p+"s starts charging towards them. \u201cThere\u2019s the one who messed up our town!\u201d The "+h+" decides to make a hasty retreat."
k="Coming back to the "+p+" town secretly, the "+h+" finds the mess the town is in. Ink is covering the town and most of its residents are hard at work cleaning the ink. Wanted posters with their face are plastered all over town. The "+h+" discreetly helps clean the town and vows to clear their name."
l="The "+h+" heads back to the town, but they hear loud screaming. They rush towards the center of town and find their culprit, themself. Or rather something in the shape of the "+h+" with an otherworldly transparent color. The "+h+" soundly defeats the doppelganger in a quick strife. "+p+"s witness the smackdown and cheer. The "+h+"\u2019s name has been cleared!"
m="The "+h+" realizes that the doppelganger was created by "
n=$.m
m=m+n+" and more could be created if unstopped. The"+h+" tracks "+n+"\u2019s lair down by following the path of vandalism created by their doppelganger. It\u2019s time to take "+n+" down for framing the "+h+"."
p=n+" is defeated and doppelganger production has been stopped. The "+p+"s apologize for mistaking the "+h+" for the real vandal."
s.h(0,new R.w("Framed for Vandalisim",!1,[new U.b(j),new U.b(k),new U.b(l),new U.B(m,n+" begins making more doppelgangers to tarnish the "+h+"\u2019s good name.",p)],H.a([],i),R.bm(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.i
h="The "+p+" is playing against a "
n=$.k
h=h+n+" in a friendly game of "+$.S+" Battle. With some smooth moves, they pull out a victory. The "+n+" comes over for a handshake. The "+p+" reaches out what would be their hand, if it wasn\u2019t currently a melting stump. The "+p+" screams in horror, but their hand instantly reforms. What the hell was that about?"
m=$.m
l="The entrance to "+m+"\u2019s lair is blocked by huge metal bars, with no apparent mechanisms to open it. The "+p+" walks around the lair looking for another way in, but suddenly everything starts growing! No wait, it\u2019s actually just the "+p+" slowly dissolving into a puddle. Again?! The dissolving process is once again reversed after a bunch of screaming."
n="The "+p+" makes their way to a secluded hut. A wizened "+n+" hermit sits in a meditative pose. The "+p+" says they were told that he could explain what was happening to the "+p+". The "+n+" nods and tells the "+p+" that their aspect was meant for a race of squid-like creatures with the power to turn into ink. Having the aspect means they are partially a squid now and are saddled with the same ability. The "+p+" will have to learn to control their new power if they wish to succeed in the session."
m="After some time practicing the "+p+" has gotten the hang of their strange ability and returns to "+m+"\u2019s lair. They proceed to melt into a squid-like form make of ink and effortlessly slide through the bars. Jeez that feels weird. "+m+" has been very impatient waiting for the "+p+" and immediately starts the strife!"
k="The "+p+" raises a hand in victory, and then has to shake said hand to stop it from turning to ink again. It sure is annoying being a squid now."
s.h(0,new R.w("An Inky Situation",!1,[new U.b(h),new U.b(l),new U.b(n),new U.B(m,"With a great blow, the "+p+" is slammed into a wall hard and turns into a puddle with eyes, before reforming. This would be funny if the "+p+" hasn\u2019t possibly died from the impact.",k)],H.a([],i),R.pS(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.W)
o.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Nostalgia","Video Games","Ninety","Cartoons"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cR,$.f)
t.h(0,$.aQ,$.r)
t.h(0,$.a2,$.r)
t.h(0,$.aG,$.f)
t.h(0,$.cW,$.r)
r=$.i
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
p=$.k
q=q+p+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+p+" kept rhyming "
n=$.v
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+p+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+p+" approaches the "+r+". And aura of "+$.Z+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+p+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
p=this.x1
t.h(0,new R.H("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],i),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.i
r="The "+p+" has finally tracked down the location of "
q=$.m
t.h(0,new R.w("Beat the Games",!1,[new U.b(r+q+"\u2019s lair. Surprisingly it\u2019s inside a gaudy arcade rather than a dungeon. The door to "+q+"\u2019s lair is locked, with the key inside a prize vendor. The "+p+" will need to win enough tickets to earn that key."),new U.b("The "+p+" is struggling to win any of the arcade games; they all seem impossibly hard. A "+q+" minion mocks them. They tell the "+p+" true gamers can easily beat any of these games."),new U.b("The "+p+" discovers the ultimate secret. Most of these games have cheat codes. Super difficult games are a lot easier when you can give yourself 30 lives."),new U.B("With enough tickets earned, the "+p+" takes the key and enters "+q+"\u2019s lair. "+q+" has been impatiently waiting. It\u2019s time to strife! ","A giant game over sign drops down from the ceiling.","The "+p+" beats "+q+", just like all the hard games they had to play. Who\u2019s a true gamer now?")],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
o.h(0,new X.q(s,t,null),$.at)},
gZ:function(){return this.m},
ga7:function(){return this.n},
gH:function(){return this.q},
gJ:function(){return this.t},
ga6:function(){return this.u},
ga5:function(){return this.v},
ga4:function(){return this.w},
ga3:function(){return this.D},
gI:function(){return this.O}}
B.hL.prototype={
$1:function(a){return!a.gb5()},
$S:function(){return{func:1,args:[B.c9]}}}
B.c9.prototype={
B:function(){var t,s
t=Q.u(null,null,A.M)
s=A.e("Perfectly Generic Object",H.a([],[G.J]),null,!1,"The Third Entry for This Fucking Block")
C.a.j(t.b,new Q.d(s,t.k(s,1),[H.C(t,0)]))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bi,$.f)
q.h(0,$.aj,$.r)
q.h(0,$.c7,$.f)
q.h(0,$.aE,$.j)
q.h(0,$.cS,$.r)
p=$.i
o="The "+p+" learns that all of the local "
n=$.k
m=[U.b]
q.h(0,new R.H("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.v+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.o(),!1,!1,new Y.aw(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
n=this.r
n.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cW,$.f)
s.h(0,$.dt,$.r)
s.h(0,$.cV,$.j)
s.h(0,$.b8,$.f)
s.h(0,$.aK,$.r)
p=$.i
o="The "+p+" learns that all of the local "
l=$.k
s.h(0,new R.H("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.v+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.o(),!1,!1,new Y.aw(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.a2,$.f)
t.h(0,$.aj,$.r)
t.h(0,$.aI,$.j)
r=$.i
q="The "+r+" learns that all of the local "
p=$.k
t.h(0,new R.H("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.o(),!1,!1,new Y.aw(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
p=$.i
r="The "+p+" learns that all of the local "
q=$.k
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.v
t.h(0,new R.H("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.lM(),!1,!1,new Y.aw(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.r)
n.h(0,new X.q(s,t,null),$.a_)},
A:function(a){return this.ch},
gb5:function(){return this.a},
gad:function(){return this.b},
gI:function(){return this.c},
gae:function(){return this.d},
gH:function(){return this.e},
gak:function(a){return this.f},
gaf:function(){return this.x},
gM:function(a){return this.ch}}
A.M.prototype={
gec:function(){var t,s,r,q,p,o,n
t=H.a([],[P.D])
s=new A.iZ(null,null)
s.d3(this.r.a)
if(this.x===0)return t
r=P.bW(G.ok(this.r),!0,G.J)
C.a.aU(r,new A.hZ())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bO)(r),++p){o=r[p]
n=o.geb()
n=n.gal(n)
if(!n)t.push(" "+Y.r6(s.eE(o.geb())))}return t},
gbW:function(){var t,s,r
for(t=this.r,s=new P.cK(t,t.r,null,null,[null]),s.c=t.e,r=0;s.K();)r+=s.d.gbW()
return r},
ge5:function(){var t=this.r
return new H.bJ(t,new A.hY(),[H.C(t,0)])},
geh:function(){var t,s,r,q,p
for(t=this.gec(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bO)(t),++q)r+=t[q]+" "
return r+this.e},
A:function(a){return this.geh()},
az:function(a,b){var t=b.gbW()-this.gbW()
if(t>0)t=1
else if(t<0)t=-1
return C.b.bX(t)},
dh:function(a,b,c,d,e){var t,s,r
t=P.eT(b,null)
this.r=t
if(t.a===0)t.j(0,$.p9)
s=P.eT(this.ge5(),null)
for(t=new P.cK(s,s.r,null,null,[null]),t.c=s.e;t.K();){r=t.d
this.r.ao(0,r.gd7())
this.r.ai(0,r)}$.$get$mW().push(this)},
$isaD:1,
$asaD:function(){return[A.M]}}
A.hZ.prototype={
$2:function(a,b){return a.geB().f1(0,b.geB().bX(0))},
$S:function(){return{func:1,args:[G.J,G.J]}}}
A.hY.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.J]}}}
N.i4.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Gavel",H.a([$.aq,$.mP],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Caution Tape",H.a([$.au,$.cs],s),null,!1,"Impassible Barrier")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Deerstalker Hat",H.a([$.a3,$.aU],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Mystery Novel",H.a([$.Q,$.ah],s),null,!1,"Book where the Criminal was the Janitor")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Dish Served Cold",H.a([$.lx,$.cb,$.ca],s),null,!1,"REVENGE")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Pony Pals: Detective Pony ",H.a([$.Q,$.ah,$.aT],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Handcuffs",H.a([$.aV,$.V,$.cs],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ds,$.r)
q.h(0,$.aF,$.j)
q.h(0,$.aX,$.r)
p=$.i
o="The "+p+" finds an elaborate courtroom full of "+$.v+"ing "
n=$.k
m=[U.b]
q.h(0,new R.H("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.S+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
n=this.r
n.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aF,$.f)
s.h(0,$.bA,$.j)
s.h(0,$.b8,$.j)
p=$.i
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.k
l=o+l+" yells 'Stop that thief' in betwen "+$.v+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.S+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.pz
s.h(0,new R.H("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.o(),!1,!1,new Y.bd("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aF,$.f)
t.h(0,$.aK,$.j)
t.h(0,$.bz,$.r)
t.h(0,$.cX,$.j)
t.h(0,$.cT,$.j)
t.h(0,$.dv,$.j)
t.h(0,$.hs,$.j)
r=$.i
q="The "+r+" finds a crowd of "
p=$.v
q=q+p+"ing "
o=$.k
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.pM
t.h(0,new R.H("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.o(),!1,!1,new Y.bd("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(s,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
S.i6.prototype={
X:function(){return!0},
L:function(a){return!0},
Y:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Shining Armor",H.a([$.aV,$.lB,$.F,$.hU],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Excalibur",H.a([$.a6,$.lB,$.F,$.eL,$.d_,$.hV],s),"Knight Shit",!1,"Masamune")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Noble Steed",H.a([$.V,$.F,$.d1,$.bD],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Hero's Shield",H.a([$.aV,$.hU,$.F,$.lB],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
a8:function(){return 1},
a9:function(){return 2.5},
aa:function(){return 0.75},
C:function(){var t,s,r,q,p,o,n,m
t=[P.D]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.lr,$.f)
t.h(0,$.bB,$.f)
t.h(0,$.cr,$.f)
t.h(0,$.dv,$.f)
t.h(0,$.ds,$.j)
r="The "+$.m+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.i
p=[U.b]
t.h(0,new R.ar("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.k+"s 'help' by "+$.v+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
q=$.m
r="Now that the "+q+" is defeated, the "
o=$.k
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.i
t.h(0,new R.K("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
o=$.Z
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.m
n=n+q+". A Learned "+$.k+" explains that it can only be defeated by the Legendary "
r=$.S
n=n+r+" Blade. The "
m=$.i
t.h(0,new R.K("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
r="The volcanos of the land are weirdly active after the defeat of the "+$.m+". One begins to erupt near a "
m=$.k
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.v+"s, but not really doing anything to evacuate or save anyone. The "
o=$.i
t.h(0,new R.K("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x2},
ga0:function(){return this.y1},
ga_:function(){return this.y2},
gJ:function(){return this.l}}
Q.i7.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("LAW Gavel",H.a([$.E,$.aq,$.mP],s),"Organics seem to respect this. Use it to your advantage.",!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("LAW Caution Tape",H.a([$.E,$.au,$.cs],s),"For when you want to tell inferior organics to keep out.",!1,"Impassible Barrier")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("STOP SIGN",H.a([$.E,$.pr,$.V,$.cs],s),"This isn't a weapon, dunkass.",!1,null)
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.D]
s=H.a(["Scales","Disorder","Chaos","Injustice"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ds,$.f)
q.h(0,$.bA,$.j)
q.h(0,$.aK,$.j)
q.h(0,$.aF,$.r)
q.h(0,$.aW,$.r)
p=$.i
o="The "+p+" is told by a worried "
n=$.k
o=o+n+" that a group of underling rebels are causing havoc across the land, breaking laws left and right. They must be stopped! Eventually."
m="The "+p+" has located a rebel hideout. The underlings get ready for a battle to the death when the "+p+" suddenly breaks out a "+$.S+" and starts getting all lawyerly on them. The underlings are all sentenced to 30 years in prison, without parole."
l="The "+p+" finds out through interrogating enough of the underling rebels that they have a big mean leader they call the "
k=$.m
l=l+k+". Sounds like a challenge. The "+p+" cracks their knuckles as they prepare for the biggest case on this side of Skaia."
j="Arriving at the final rebel hideout, "+p+" prepares for battle against the "+k+". For their crimes against the "+n+"s, they're getting the DEATH SENTENCE."
n="The "+k+" lies slain by the "+p+"'s "+$.al+". The "+p+" has won! The "+n+"s are no longer plagued by the lawbreakers."
i=[U.b]
q.h(0,new R.w("Punish the Rebels",!1,[new U.b(o),new U.b(m),new U.b(l),new U.B(j,"The "+k+" continues to run their underling crime ring with the defeat of the "+p+".",n)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n=this.f
n.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Heroics","Villains","Heroes","Powers","Justice","Metropolises","Comics"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bB,$.f)
s.h(0,$.aG,$.j)
s.h(0,$.aQ,$.j)
s.h(0,$.bB,$.r)
s.h(0,$.cV,$.r)
p=$.i
o="The "+p+" is taking a walk through one of the land's many cities when they witness a fight break out between an Underling Hero and "
m=$.k
o=o+m+" Villain. One of the Underling Hero's attacks hits the "+p+". They won't be having any of that! The "+p+" helps the "+m+" Villain defeat the Underling Hero, and in turn gets invited to join a league of shady criminals. Sweet."
l="The "+p+" teams up with some other villainous "+m+"s to take down a rival team of Underling Heroes. They won't be having any of this LAW business, certainly. Rules were made to be broken, and that's just what the "+p+" is going to do."
m="After defeating yet another league of Underling Heroes, the "+p+" and the other "+m+" Villains feel a cold chill run down their spine. In the distance, lightning strikes a mountain, revealing the headquarters of the  "
k=$.m
m=m+k+", leader of the Underling Heroes and the last hope to preserve law. They're going down!"
j="The "+p+" arrives at the "+k+"'s headquarters, fighting through waves of Underling Heroes before they can finally reach the "+k+". It\u2019s time to end the LAW, once and for all!"
h="The "+k+" lies slain by the "+p+"'s "+$.al+". The last of the Heroes is no more.  Injustice takes over the land at last."
s.h(0,new R.w("Become the Villain",!1,[new U.b(o),new U.b(l),new U.b(m),new U.B(j,"The "+p+" is defeated. The "+k+" holds on to the last remnants of justice in the land.",h)],H.a([],i),R.bm(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
h=$.i
k="The "+h+" is taking a walk through one of the land's many cities when they witness a fight break out between some "
p=$.k
k=k+p+" Hero and an Underling Villain. Being naturally inclined toward the preservation of order, the "+h+" teams up with the "+p+" Hero and triumphs against the Underling Villain. As a reward, the "+p+" Hero invites the "+h+" to join an elite team of crime fighting good guys! Awesome!"
p="The "+h+" works together with some "+p+" Heroes to take down and arrest some Underling Villains. Slowly but surely, the balance of order and disorder begins to shift in order's favor. The number of villains is getting fewer and fewer."
j="With the last of the Villainous Underlings defeated, the "+h+" rejoices, thinking that justice has been served in this land. But what's this? Lightning strikes the ground far away and causes a dark mountain to shoot up into the sky! The lair of the final villain, the "
m=$.m
j=j+m+", has been revealed."
l="The "+h+" storms the lair of the "+m+", the final villain in all of this land. It's time to bring back KAW, once and for all!"
o="The "+m+" lies slain by the "+h+"'s "+$.al+". The last of the Villains is no more. Justice is finally preserved in the land at last."
s.h(0,new R.w("Become the Hero",!1,[new U.b(k),new U.b(p),new U.b(j),new U.B(l,"The "+h+" is defeated. The "+m+" holds on to the last remnants of injustice in the land.",o)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Greed","Poverty","Discrepancy","Famine","Starvation"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.eq,$.f)
t.h(0,$.bi,$.j)
t.h(0,$.ht,$.j)
t.h(0,$.hq,$.r)
t.h(0,$.c6,$.r)
r=$.i
q="The "+r+" looks upon the land and notices how some of the "
p=$.k
q=q+p+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
o="The "+r+" comes up with a plan to bring balance to the land. If there's not enough resources, they'll simply have to cut the "+p+" population in half. But through murder? No... They need something cleaner. Something more random."
m="The "+r+" wanders through a poverty striken "+p+" village and is told the legend of the "
l=$.m
m=m+l+". The "+l+" lives in a lair on the other side of the land, where they hoard all of the land's resources. Oh yeah, and they've got this golden "
k=$.S
m=m+k+" that can half the number of "+p+"s on the land. The "+r+" finds this especially interesting. "
j="The "+r+" shows up at the "+l+"'s lair and asks them to hand over the golden "+k+". The "+l+" agrees... if the "+r+" can defeat them first!"
p="The "+l+" lies slain by the "+r+"'s "+$.al+". The "+r+" uses the golden "+k+" to cut the "+p+" population in half. Problem solved. "
t.h(0,new R.w("Bring the Balance",!1,[new U.b(q),new U.b(o),new U.b(m),new U.B(j,"The "+r+" is defeated and left without the golden "+k+" they seek.",p)],H.a([],i),R.bm(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
p=$.i
k="The "+p+" looks upon the land and notices how some of the "
r=$.k
k=k+r+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
j="The "+p+" comes up with a plan to bring balance to the land. They can force the "+r+"s who have an abundance of resources to share them with the "+r+"s who are resource deprived. But when the "+p+" tells them this, they get understandably upset. They worked so hard for their resources, why should they share them with others? The "+p+" is left stumped."
m="The "+p+" wanders through a poverty striken "+r+" village and is told the legend of the "
o=$.m
m=m+o+". The "+o+" lives in a lair on the other side of the land, where they hoard all of the land's resources. The "+p+" is confused as to why nobody mentioned this before. The solution to the resource problem is obvious now."
r="The "+p+" shows up at the "+o+"'s lair and asks them to be kind and share their resources with the "+r+"s. The "+o+" agrees... if the "+p+" can defeat them first!"
q="The "+o+" lies slain by the "+p+"'s "+$.al+". The "+p+" distributes all of the denizen's resources throughout the land, improving living conditions everywhere."
t.h(0,new R.w("Create the Balance",!1,[new U.b(k),new U.b(j),new U.b(m),new U.B(r,"The horrific inequality maintained by the "+o+" continues with the defeat of the "+p+".",q)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(s,t,null),$.Y)},
gZ:function(){return this.m},
ga7:function(){return this.n},
gH:function(){return this.q},
gJ:function(){return this.t},
ga6:function(){return this.u},
ga5:function(){return this.v},
ga4:function(){return this.w},
gb_:function(){return this.D},
gc0:function(){return this.O},
ga3:function(){return this.aF},
gI:function(){return this.aG}}
K.i8.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Creeping Vine",H.a([$.aq,$.E,$.dz,$.bD],s),null,!1,"Sentient Plant Tentacles")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Lollipop",H.a([$.mH,$.E,$.b5],s),null,!1,"Sentient Plant Tentacles")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Golem",H.a([$.aV,$.eN,$.E,$.bD],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Ectoplasm",H.a([$.ly,$.E,$.b5],s),null,!1,"Ghost [Censored]")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Aqua Vitae",H.a([$.b4,$.E,$.b5,$.a6,$.ax],s),null,!1,"Tears of JR")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Homunculus",H.a([$.d1,$.E,$.bD],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.D]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aI,$.f)
q.h(0,$.aj,$.f)
q.h(0,$.ep,$.r)
q.h(0,$.a2,$.j)
q.h(0,$.lu,$.j)
q.h(0,$.b9,$.r)
p=$.i
o="The "+p+" finds a village of compliant "
n=$.k
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.v+"ing in panic. Don't upset "
m=$.m
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.h(0,new R.w("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.B(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n=this.f
n.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aI,$.f)
s.h(0,$.aR,$.f)
s.h(0,$.b9,$.r)
s.h(0,$.a2,$.j)
o=$.i
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.k
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.m
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.h(0,new R.w("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.B(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
o=$.i
j="The "+o+" finds themself in the middle of a large plain. They see a small pedestal with a seed packet and note.The note says the field has magical properties that grows any plant in only half an hour. If one of the seeds in the packet can be grown, the lair of "
i=$.m
j=j+i+" will be revealed.  Sounds easy enough. The "+o+" makes a small hole and drops a seed in. The plant immediately starts growing, but almost as immediately "+i+" minions zoom in from out of nowhere and stomp the plant dead."
l="The "+o+" attempts to stop the minions by force, but they are surprisingly agile and make it past the "+o+" to the planted seeds every time. The "+o+" reads the note again and decides to try growing some other plants to protect the seeds as they grow. The "+o+" eats a few fruits they had in their sylladex and grows a wall of trees from the leftover seeds. However the minions are still able to climb and slip through at rapid speed. A few trees isn\u2019t going to be enough to protect the seeds."
k="The "+o+" travels across their land gathering a bunch of seeds to strew them about the field and make a giant maze. Then they plant a few seeds deep inside the maze. The "+i+" minions are very quick, but they aren\u2019t that smart. Some of the seeds manage to grow before the minions can figure out how to get to them. On close inspection, leaves of the full-grown plants are actually maps of the "+o+"\u2019s land, with "+i+"\u2019s lair marked. "
m="The "+o+" tracks down "+i+"\u2019s lair using their leaf map. They toss the leaf aside and pull out their "+$.al+", ready to throw down!"
h="With "+i+" gone, the "+$.k+"s take up residence in the plain. They were always too afraid to when "+i+" minions were around. They thank the "+o+" for their work."
s.h(0,new R.w("Protect the Seeds",!1,[new U.b(j),new U.b(l),new U.b(k),new U.B(m,"With their defeat, the "+o+"\u2019s efforts to find "+i+"\u2019s lair have been made pointless.",h)],H.a([],p),R.iV(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
n.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bi,$.f)
t.h(0,$.aj,$.r)
t.h(0,$.c7,$.f)
t.h(0,$.aE,$.j)
t.h(0,$.cS,$.j)
t.h(0,$.lo,$.j)
r="Drawn by wailing and "+$.v+"ing, the "
q=$.i
r=r+q+" enters a rotting "
o=$.k
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.m
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.h(0,new R.w("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.B(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(s,t,null),$.Y)},
gZ:function(){return this.l},
ga7:function(){return this.m},
gH:function(){return this.n},
gJ:function(){return this.q},
ga6:function(){return this.t},
ga5:function(){return this.u},
ga4:function(){return this.v},
ga3:function(){return this.E},
gI:function(){return this.D}}
G.i9.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("FAQ",H.a([$.ay,$.E,$.an,$.hP],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Flashlight",H.a([$.au,$.E,$.cc,$.ay,$.hP],s),null,!1,"Tube of Localised Sun")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Octet",H.a([$.E,$.cc,$.hP,$.a6,$.mK],s),null,!1,"D13")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Horseshoe",H.a([$.pb,$.E,$.b3],s),null,!1,"Horse Sneaker")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Rabbits Foot",H.a([$.pm,$.E],s),null,!1,"Rabbit Remains")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("4 Leaf Clover",H.a([$.dz,$.E,$.cc,$.hP],s),null,!1,"Plant of Luck +4")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("8-Ball",H.a([$.b4,$.E,$.bD],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.D]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.mz,$.f)
q.h(0,$.eo,$.j)
q.h(0,$.c5,$.f)
q.h(0,$.cU,$.f)
p=$.i
o="The "+p+" is searching for the lair of "
n=$.m
o=o+n+" when some local "
m=$.k
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.h(0,new R.w("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.B(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
m=$.i
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.v+"ing "+$.k+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.m
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.h(0,new R.w("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.B(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
m=$.i
l="The "+m+" finds the enormous casino that serves as "
k=$.m
l=l+k+"\u2019s lair. At the center of the casino is a lift to "+k+"\u2019s quarters that can only be activated with a key earned by winning enough "
j=$.Z
l=l+j+" chips at all the casino games. The "+m+" starts with Blackjack, and wins easily by counting the cards being dealt and only betting high when the odds are good. It helps that the "+k+" minions and "
p=$.k
l=l+p+"s aren\u2019t smart enough to pick up on what the "+m+" is doing."
n="The next casino game to beat is the roulette table. The "+m+" watches the "+p+"s play for a couple of games. They quickly realize there\u2019s a defect on the wheel that causes the ball to slightly favor the right side of the wheel. They bet accordingly and eventually earn enough "+j+" chips to move to the next casino game."
o="The "+m+" is stuck at the the final casino game, the slot machines. The only way to win enough "+j+" chips is by winning the Mega Jackpot, but there aren\u2019t any noticeable patterns or defects in the machines to take advantage of. The "+m+" puzzles over this for a while, before paying attention to who wins the Mega Jackpot. The only winners are "+k+" minions; the slots have been rigged so the house never has to pay out! The "+m+" cuts in front of a "+k+" minion at a slot machine and wins the Mega Jackpot that was meant for the minion. The minions aren\u2019t happy about this, but they can\u2019t complain without revealing to the "+p+" customers that the game is rigged."
j="The "+m+" turns in their "+j+" chips at the front desk for the lift key to "+k+"\u2019s quarters. As soon the lift brings them to "+k+"\u2019s quarters, they are immediately attacked! It seems "+k+" is not very pleased that the "+m+" found ways to cheat at all the casino games. "
p=k+" has been slain, and ownership of the casino is up for grabs. The "+m+" puts the casino in the hands of slightly more competent than average "+p+"s so they can continue exploring their land."
q.h(0,new R.w("Beat the Odds",!1,[new U.b(l),new U.b(n),new U.b(o),new U.B(j,k+" is pleased they got "+m+" out of the way, so "+k+"\u2019s casino can become profitable again.",p)],H.a([],i),R.bY(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
p=this.f
p.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aI,$.j)
s.h(0,$.a2,$.j)
s.h(0,$.bT,$.f)
s.h(0,$.my,$.f)
s.h(0,$.dt,$.f)
s.h(0,$.ho,$.f)
o=$.i
n="The "+o+" walks into a "
m=$.k
n=n+m+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.S
n=n+l+", but "
k=$.m
n=n+k+" has hoarded all of the planets "
j=$.Z
l=n+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+o+" vows to take back some "+j+" Candles for the poor "+m+"s. "
n="After a long search, the "+o+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+o+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+o+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+o+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+o+" triumphantly returns to the village among the joyful "+$.v+"ing of the "+m+"s."
k="The "+o+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
m="Never again shall the "+m+"s be without "+j+" Candles!"
s.h(0,new R.w("The Candlestick Taker",!1,[new U.b(l),new U.b(n),new U.b(h),new U.B(k,"The "+j+" candles are once again at risk.",m)],H.a([],i),R.iW(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
m=$.i
j="The "+m+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.k
j=j+k+" explains that the "
h=$.m
s.h(0,new R.w("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+m+" vows to help.   "),new U.b("The "+m+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.v+"s as they bask in the light. The "+m+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+m+" must prepare themself for a tough fight.  "),new U.B("The "+m+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.du,$.j)
q.h(0,$.aj,$.j)
q.h(0,$.et,$.f)
q.h(0,$.a2,$.j)
q.h(0,$.aX,$.f)
o="Now that the "+$.m+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.i
o=o+n+" sets up a wiki and settles in to help the "
m=$.k
o=o+m+"s deal with it all."
m="Within barely any time at all, the "+m+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+n+" makes sure all of the information is from credible sources."
n="When the "+n+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.c8+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.h(0,new R.K("Moderate the Wiki",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],i),R.cg(),!1,!1,new Y.aw("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
l="Now that the "+$.m+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.i
l=l+n+" shrugs and sets up a wiki and lets the "
m=$.k
l=l+m+"s deal with it all."
m="Within barely any time at all, unmoderated "+m+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+n+" alone, and each claims they are a different SPECIES entirely. The "+n+" finds this to be hilarious."
n="Luckily it turns out all that disinformation running around about the "+n+" thwarts some would be assasins. It turns out the "+n+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
o="The "+$.c8+" allows you to make you own assumptions about things, and be destroyed by them."
q.h(0,new R.K("Create the Wiki",!1,[new U.b(l),new U.b(m),new U.b(n)],H.a([],i),R.bm(),!1,!1,new Y.aw("Disinformation Network",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
o=$.k
n=o+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
m=$.i
n=n+m+" possibly stop it?"
o="The "+m+" pours over maps and charts. What do the sick "+o+"s have in common with each other?  Finally, there is a flash of inspiration. "+o+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+m+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+m+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+m+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+m+" traces the contaminated river back to it's source. The "
j=$.m
q.h(0,new R.w("Shed the Light",!1,[new U.b(n),new U.b(o),new U.b(l),new U.B(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+m+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.c5,$.f)
t.h(0,$.mz,$.f)
t.h(0,$.cU,$.j)
t.h(0,$.aQ,$.j)
t.h(0,$.mx,$.j)
t.h(0,$.aE,$.r)
t.h(0,$.cr,$.r)
t.h(0,$.aG,$.j)
t.h(0,$.aW,$.r)
t.h(0,$.aj,$.j)
t.h(0,$.b1,$.f)
s=$.i
r="The "+s+" is approached by a Fast Talking "
o=$.k
r=r+o+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
n=$.S
r=r+n+". The "+s+" agrees to perform the titular role."
m="The opening night performance of the Beautiful "+n+" is a huge success! The "+$.v+"ing of the fans is it's own reward!"
n="When it comes time for the next performance of the Beautiful "+n+", the "+s+" is turned away at the door. Apparently the "
l=$.m
o=n+l+" rampaged and terrorized "+o+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
n="The "+s+" can finally get back to their promising acting career in peace."
t.h(0,new R.w("Be the Star",!1,[new U.b(r),new U.b(m),new U.b(o),new U.B(l,"The acting career of the "+s+" is in shambles.",n)],H.a([],i),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n="After the "+$.m+", the "
s=$.i
n=n+s+" is disappointed to learn that barely any of the "
l=$.k
n=n+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
o="The "+$.c8+" is famous, and everyone in this fight is lucky to have met them."
t.h(0,new R.K("Be the Biggest Star in Paradox Space",!1,[new U.b(n),new U.b(l),new U.b(s)],H.a([],i),R.cg(),!1,!1,new Y.aw("What's my name?",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
p.h(0,new X.q(q,t,null),$.Y)},
gZ:function(){return this.l},
ga7:function(){return this.m},
gH:function(){return this.n},
gJ:function(){return this.q},
ga6:function(){return this.t},
ga5:function(){return this.u},
ga4:function(){return this.v},
ga3:function(){return this.w},
gI:function(){return this.D}}
Z.ih.prototype={
X:function(){return!0},
B:function(){var t,s,r,q
t=this.E
s=[G.J]
r=A.e("Dream Bubbles Book",H.a([$.Q,$.av,$.ah,$.p6],s),null,!1,null)
C.a.j(t.b,new Q.d(r,t.k(r,1),[H.C(t,0)]))
t=Q.u(null,null,A.M)
r=A.e("Deck of Uno Cards",H.a([$.mI,$.mS,$.av],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Lord's Cape",H.a([$.a3,$.F,$.av],s),"Lord Shit",!1,"Shoguns Cape")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Drawing Tablet",H.a([$.lC,$.F,$.av],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("How to Make Friends And Influence People",H.a([$.a6,$.Q,$.F,$.d0,$.ah],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
L:function(a){return!0},
Y:function(){return this.L(0)},
a8:function(){return 3.1},
a9:function(){return 0.1},
aa:function(){return 3.1},
aq:function(){return!0},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bz,$.r)
q.h(0,$.cX,$.r)
q.h(0,$.aE,$.r)
q.h(0,$.b8,$.j)
p="The "+$.m+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.i
p=p+o+" comands that the "
n=$.k
m=[U.b]
q.h(0,new R.ar("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.v+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
o="As soon as the "+$.m+" is defeated, the "
n=$.k
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.i
q.h(0,new R.K("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p=$.bF
n="The "+p+" reaches the entrance to a massive dungeon. They heard rumors that important information could be found at the bottom. After some very confusing puzzles and a couple of strifes, they find themself at the dungeon\u2019s center. A lone, elderly "+$.k+" is there to greet the "+p+". He tells the "+p+" that "
o=$.m
n=n+o+" needs to be defeated by a powerful hero, and imparts some clues on how to defeat them. Wait a second, isn\u2019t that the "
l=$.i
n=n+l+"\u2019s Denizen? The "+p+" contacts them and passes on the information they found.  "
k="The "+p+" is exploring another dungeon. Deep inside, they enter a large open room, clearly meant for a boss fight. As expected, "+o+" emerges from a large hole in the ceiling and lets loose a roar. The "+p+" readies themself for a fight, but "+o+" takes one glance and immediately goes back into its hole. It looks like "+o+" is only interested in fighting the "+l+". The "+p+" gives them a call and sits around waiting for them to come. After a few hours, the "+l+" has arrived and the strife can finally start."
p="The "+l+" was victorious in his fight against "+o+". The "+p+" also helped."
q.h(0,new R.w("Be the Protagonist",!1,[new U.b(n),new U.B(k,"The "+l+" fought hard, but was ultimately defeated by "+o+".",p)],H.a([],m),R.pT(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
p=$.i
q.h(0,new R.K("Skip the Boring Details",!1,[new U.b("The "+p+" finds a giant pillar, inscribed with a long and arduous quest that the "+p+" is destined to complete. However the "+p+" isn\u2019t interested on spending so much time on one quest, so they uses their powers and fast forward right to the end. A parade is held in their honor for completing the grand quest that no one got to see happen. A bit unsatisfying, really.")],H.a([],m),R.iX(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p=this.x
p.h(0,new X.q(s,q,null),$.at)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ou,$.f)
t.h(0,$.bh,$.f)
t.h(0,$.aj,$.f)
t.h(0,$.a2,$.j)
s="The "+$.m+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.i
s=s+r+" comands that the "
o=$.k
t.h(0,new R.ar("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.v+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
r="As soon as the "+$.m+" is defeated, the "
o=$.k
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.i
t.h(0,new R.K("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",this.E,"Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(q,t,null),$.at)},
gH:function(){return this.y2},
ga0:function(){return this.l},
ga_:function(){return this.m},
gJ:function(){return this.n},
gI:function(){return this.D}}
S.ii.prototype={
X:function(){return!0},
L:function(a){return!0},
Y:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Alternate Costume",H.a([$.a3,$.F,$.ax,$.a6,$.bj],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Mage's Cape",H.a([$.a3,$.F,$.ax],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Mage's Staff",H.a([$.aq,$.F,$.b3,$.ax,$.d2],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Walking Broom",H.a([$.lw,$.aq,$.F,$.bD,$.ax,$.d2],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
a8:function(){return 0.67},
a9:function(){return 0.67},
aa:function(){return 1.5},
C:function(){var t,s,r,q,p,o,n
t=[P.D]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.cR,$.f)
t.h(0,$.dv,$.j)
t.h(0,$.aK,$.f)
t.h(0,$.cV,$.j)
t.h(0,$.bi,$.r)
r="The "+$.m+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.i
p=[U.b]
t.h(0,new R.ar("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
q=$.i
t.h(0,new R.K("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.o(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
q=$.i
r="The "+q+" is feeling quite pleased with their victory over the "+$.m+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.Z
t.h(0,new R.K("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.o(),!1,!1,new Y.aw(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
q="Now that the "+$.m+" has been defeated, the "
o=$.k
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.i
q=q+r+"'s help in planning the brand new city of "
n=$.Z
t.h(0,new R.K("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.v+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.o(),!1,!1,new Y.aw(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x2},
ga0:function(){return this.y1},
ga_:function(){return this.y2},
gJ:function(){return this.l},
gI:function(){return this.w}}
U.ij.prototype={
X:function(){return!0},
L:function(a){return!1},
Y:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Maiden's Breath",H.a([$.dz,$.F,$.aU],s),null,!1,null)
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Feather Duster",H.a([$.aq,$.F,$.d2,$.eJ],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Valkyrie Shield",H.a([$.aU,$.aV,$.V,$.F,$.a6,$.hU,$.oX],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Maiden's Songbook",H.a([$.Q,$.F,$.b6,$.ah],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
a8:function(){return 0.33},
a9:function(){return 3},
aa:function(){return 1.5},
C:function(){var t,s,r,q,p,o,n
t=[P.D]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.bU,$.f)
t.h(0,$.aI,$.f)
t.h(0,$.a2,$.j)
t.h(0,$.aj,$.j)
t.h(0,$.bT,$.j)
t.h(0,$.aW,$.j)
r="The "+$.m+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.i
r=r+q+" asks local  "
p=$.k
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.v
n=[U.b]
t.h(0,new R.ar("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
q=$.i
o="The "+q+" has adopted a local "
p=$.k
t.h(0,new R.K("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.v+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.m+". ")],H.a([],n),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x1},
ga0:function(){return this.x2},
ga_:function(){return this.y1},
gJ:function(){return this.y2}}
V.is.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Puzzle Box",H.a([$.aq,$.E,$.ax],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Tesla Coil",H.a([$.ay,$.E,$.V],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Coin",H.a([$.V,$.E],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Electronic Door",H.a([$.V,$.E,$.ay,$.an],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Janus Bust",H.a([$.aV,$.mG,$.eN,$.av,$.E,$.a6,$.ay],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bh,$.j)
q.h(0,$.eo,$.r)
q.h(0,$.aX,$.r)
p=$.i
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.k
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.m
k=[U.b]
q.h(0,new R.w("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.B(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.bY(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
n=$.i
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.k+" explains that at the end of the Labrinth is the "
l=$.m
q.h(0,new R.w("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.B("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n=this.f
n.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.ds,$.r)
s.h(0,$.aF,$.j)
s.h(0,$.aX,$.r)
s.h(0,$.bh,$.r)
p=$.m
o="The "+p+" has commited a staggering amount of crimes against the local "+$.k+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.i
s.h(0,new R.w("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.B("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.eq,$.f)
t.h(0,$.aj,$.j)
t.h(0,$.et,$.f)
t.h(0,$.a2,$.j)
t.h(0,$.aX,$.f)
r=$.i
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.m
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.S+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.h(0,new R.w("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.B(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
l=$.i
r="The "+l+" has finally found the lair of "
m=$.m
r=r+m+". Appropriately enough for a Mind Denizen, their dungeon is a giant replica of a brain. Doors in the dungeon simulate neurons by opening and closing at seemingly random intervals to mimic brain activity."
o="The "+l+" has spent far too many hours trying to navigate the dungeon. They raise their fist in frustration, and at the same time, a door opens. They drop their fist and attempt to enter, but the door immediately closes again. They raise their fist once more, and the door opens again, and closes again when the "+l+" drops their fist. They raise and lower their fist a bunch of times, and the door opens and closes in perfect synch. Is...is the dungeon based off of the "+l+"\u2019s brain!?  "
p="The "+l+" is starting to get a hang out of controlling their brain dungeon. Most of the doors can be opened by experimentally moving part of their body or using one of their senses. (The door that opened by licking one of the walls wasn\u2019t very fun) There is only one door the "+l+" is still unable to open, which is likely "+m+"\u2019s."
q="Through some convoluted thought processes focused on thinking about "+m+", the "+l+" manages to open the final door to "+m+". They are relieved it didn\u2019t take some cliche like having to unlock their subconscious or some junk like that. They begin the final fight inside their own mind."
j="With "+m+" defeated, the "+l+" decides to rig explosives around the dungeon and bring the whole place down. The thought that others could basically see the inside of the "+l+"\u2019s mind was a little too creepy."
t.h(0,new R.w("Explore the Brain",!1,[new U.b(r),new U.b(o),new U.b(p),new U.B(q,"Various doors open and close across the dungeon to simulate the "+l+"\u2019s despair in the face of "+m+".",j)],H.a([],k),R.d7(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.r)
n.h(0,new X.q(s,t,null),$.Y)},
gZ:function(){return this.l},
ga7:function(){return this.m},
gH:function(){return this.n},
gJ:function(){return this.q},
ga6:function(){return this.t},
ga5:function(){return this.u},
ga4:function(){return this.v},
ga3:function(){return this.w},
gI:function(){return this.D}}
E.it.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Feather Pen",H.a([$.V,$.F,$.av,$.eJ],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Half Finished Bust of Snoop Dog",H.a([$.pi,$.F,$.mG,$.b3,$.a6],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Book of Poetry",H.a([$.Q,$.F,$.av,$.ah],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
X:function(){return!1},
L:function(a){return!1},
Y:function(){return this.L(0)},
a8:function(){return 0.1},
a9:function(){return 3},
aa:function(){return 0.1},
aq:function(){return!0},
C:function(){var t,s,r,q,p,o,n,m
t=[P.D]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.bU,$.f)
t.h(0,$.aI,$.f)
t.h(0,$.a2,$.j)
t.h(0,$.aj,$.j)
t.h(0,$.bT,$.j)
t.h(0,$.aW,$.j)
r="The "+$.m+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.i
r=r+q+" asks the "
p=$.k
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.v
n=[U.b]
t.h(0,new R.ar("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q="You'd think after the dramatic defeat of the "+$.m+" the "
o=$.k
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.i
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.S
t.h(0,new R.K("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x2},
ga0:function(){return this.y1},
ga_:function(){return this.y2},
gJ:function(){return this.l},
gI:function(){return this.w}}
F.iu.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Piano",H.a([$.b3,$.aq,$.b6,$.av],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Flute",H.a([$.V,$.b6],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Microphone",H.a([$.cd,$.ay],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Violin",H.a([$.aq,$.b6],s),null,!1,"Tiny Cello")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sheet Music",H.a([$.Q,$.b6],s),null,!1,"Cheat Codes for Instruments")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Electric Guitar",H.a([$.au,$.b6,$.ay,$.cd,$.aT],s),null,!1,"Electrical Stringed Music Maker")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Turn Tables",H.a([$.au,$.b6,$.ay,$.aT],s),null,!1,"Spinning Disc Sound Maker")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Guitar",H.a([$.aq,$.b6],s),null,!1,"String Music Maker")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aQ,$.W)
q.h(0,$.mx,$.f)
q.h(0,$.cU,$.f)
q.h(0,$.bT,$.j)
q.h(0,$.a2,$.j)
q.h(0,$.lp,$.j)
p=$.i
o="The "+p+" meets a wise old "+$.k+" who tells that the "+$.m+" can only be awoken by the Legendary Hero playing the "
n=$.Z
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.S
k=[U.b]
q.h(0,new R.H("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p=$.i
n="The "+p+" finds an empty, trashed "
l=$.Z
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.S+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.v+"ing "+$.k+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.pE
q.h(0,new R.H("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.o(),!1,!1,new Y.bd("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.n)
p=this.r
p.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.mB,$.W)
s.h(0,$.bA,$.j)
s.h(0,$.b8,$.j)
s.h(0,$.bT,$.f)
s.h(0,$.lp,$.W)
o=$.i
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.Z
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.m
s.h(0,new R.H("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.S+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ep,$.W)
t.h(0,$.aG,$.j)
t.h(0,$.c7,$.j)
r=$.i
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.k
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.v
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.Z+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.h(0,new R.H("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(s,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
V.iM.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Shorts",H.a([$.a3,$.F,$.dy,$.a6],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sidekick Figurine",H.a([$.au,$.F,$.aT],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Steroids",H.a([$.cb,$.F,$.ax],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.lr,$.f)
t.h(0,$.b9,$.j)
t.h(0,$.es,$.j)
t.h(0,$.lt,$.j)
t.h(0,$.bU,$.j)
t.h(0,$.aj,$.j)
t.h(0,$.cS,$.j)
t.h(0,$.dt,$.j)
t.h(0,$.oy,$.j)
t.h(0,$.lo,$.j)
t.h(0,$.my,$.j)
r="The "+$.m+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.i
r=r+q+" asks the "
p=$.k
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.v
n=[U.b]
t.h(0,new R.ar("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
q=$.i
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.k+" named Professor "
p=$.v
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.S
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.m
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.h(0,new R.w("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.B(k,"The "+q+" whited out...",m)],H.a([],n),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
m="Now that the "+$.m+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.i
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.k
t.h(0,new R.K("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.Z+" buffs. With a deafening "+$.v+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.o(),!1,!1,new Y.eh("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x2},
ga0:function(){return this.y1},
ga_:function(){return this.y2},
gJ:function(){return this.l},
gcJ:function(){return this.w}}
G.iR.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Superhero Action Figure",H.a([$.au,$.aT,$.bb],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Action DVD",H.a([$.au,$.aT],s),null,!1,"Shogun The Movie")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Ghost Busters DVD",H.a([$.au,$.ly],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Snow Dogs DVD",H.a([$.au,$.bC,$.ca,$.eK],s),null,!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Skateboarding Video Game",H.a([$.au,$.aT],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Movie Poster",H.a([$.Q,$.aT],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Audrey II Plush",H.a([$.dz,$.aT,$.a3,$.bD],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Peashooter Toy",H.a([$.dz,$.eM,$.aT,$.a3],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Shitty Sword",H.a([$.bb,$.V,$.aT,$.hV,$.d_,$.mU],s),"So. Shitty.",!1,"Perfect Weapon")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("GameBro Magazine",H.a([$.Q,$.aT],s),"5/5 hats.",!1,"Nerd Magazine")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("GameGrl Magazine",H.a([$.Q,$.aT],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aW,$.j)
q.h(0,$.b1,$.j)
q.h(0,$.aG,$.f)
q.h(0,$.b9,$.W)
q.h(0,$.bV,$.W)
p=$.i
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.k
o=o+n+" manages to catch a video of it, and it goes viral on "+$.Z+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.v+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.pF
l=[U.b]
q.h(0,new R.H("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.o(),!1,!1,new Y.bd("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.n)
p=this.r
p.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cT,$.j)
s.h(0,$.bA,$.j)
s.h(0,$.b1,$.j)
s.h(0,$.aG,$.j)
s.h(0,$.bB,$.f)
o=$.i
n="The "+o+" runs towards an explosion in a local "
m=$.k
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.Z
s.h(0,new R.H("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.b1,$.j)
t.h(0,$.c5,$.f)
t.h(0,$.aR,$.f)
t.h(0,$.bB,$.j)
r=$.i
q="The "+r+" gets a job at the "+$.Z+" Cinema. A new movie, The Lonely "
o=$.S
q=q+o+" is coming out soon, and "
n=$.k
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.v+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.h(0,new R.H("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(s,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
N.iT.prototype={
X:function(){return!0},
L:function(a){return!0},
Y:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Feather'd Cap",H.a([$.a3,$.F,$.dy],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Crown",H.a([$.a6,$.mM,$.F,$.dy],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Gunpowder",H.a([$.eI,$.F],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
aq:function(){return!0},
C:function(){var t,s,r,q,p,o,n
t=[P.D]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.b1,$.j)
t.h(0,$.bh,$.j)
t.h(0,$.c7,$.r)
r="With the closing of the curtain, the "+$.m+" has released the frogs, and yet they are nowhere to be found. The "
q=$.i
p=[U.b]
t.h(0,new R.ar("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
q=$.m
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.i
r=r+o+" to get it back to normal. They organize a team of "
n=$.k
t.h(0,new R.K("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.S+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.y1},
ga0:function(){return this.y2},
ga_:function(){return this.l},
gJ:function(){return this.m}}
U.b.prototype={}
U.B.prototype={}
R.iU.prototype={
A:function(a){return H.t(new H.cl(H.l1(this),null))+": "+this.c},
gM:function(a){return this.c}}
R.H.prototype={}
R.w.prototype={}
R.K.prototype={}
R.ar.prototype={}
E.iY.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Curtain",H.a([$.a3,$.E,$.bb],s),null,!1,"Show Ender")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Cursed Sword",H.a([$.V,$.hV,$.eL,$.E,$.d_,$.bt,$.bb,$.eH,$.aY],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Omegaphone",H.a([$.V,$.cd,$.ay,$.E,$.bb],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Trike Horn",H.a([$.aV,$.V,$.cd,$.d0,$.dA,$.E,$.bb],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Bacchus Wine",H.a([$.cb,$.d0,$.av,$.E,$.a6,$.bb],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Nightmare Fuel",H.a([$.aq,$.E,$.bt,$.ce,$.eI,$.bb],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.D]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.hn,$.f)
q.h(0,$.bz,$.f)
q.h(0,$.bA,$.f)
q.h(0,$.bi,$.j)
q.h(0,$.aE,$.j)
q.h(0,$.aK,$.j)
q.h(0,$.aF,$.r)
q.h(0,$.bV,$.j)
q.h(0,$.cT,$.f)
q.h(0,$.hs,$.f)
q.h(0,$.dv,$.f)
q.h(0,$.ls,$.f)
q.h(0,$.ep,$.j)
q.h(0,$.cX,$.f)
p=$.i
o="The "+p+" is chilling in a "
n=$.k
o=o+n+" village when a bunch of sentient "
m=$.S
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.m
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.h(0,new R.w("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.B(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.d7(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
h=$.k
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.i
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.m
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.h(0,new R.w("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.B(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
h=this.f
h.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bT,$.f)
s.h(0,$.aE,$.j)
s.h(0,$.aF,$.f)
s.h(0,$.aQ,$.f)
s.h(0,$.aW,$.f)
s.h(0,$.b1,$.j)
s.h(0,$.hr,$.r)
s.h(0,$.bz,$.j)
s.h(0,$.b9,$.f)
s.h(0,$.aG,$.f)
s.h(0,$.bV,$.r)
p=$.v
o="The "+p+"ing and capering "
n=$.k
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.i
o=o+m+" to do a stupid "
l=$.Z
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.m
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.h(0,new R.w("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.B(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
h.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.hn,$.f)
t.h(0,$.bV,$.f)
t.h(0,$.aF,$.f)
t.h(0,$.b9,$.j)
t.h(0,$.aW,$.f)
r=$.i
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.k+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.m+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.h(0,new R.w("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.B(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
m=$.i
t.h(0,new R.K("Stop the Narration",!1,[new U.b("The "+m+" is walking down a long road, wondering when they\u2019ll find the next town. They suddenly stop and look behind them, asking who said that. They look everywhere but can\u2019t find where the voice is coming from. They fruitlessly demand the narration to stop."),new U.b("The "+m+" is having a hard time doing any of their quests while hearing every action narrated. No one else can hear the voice and some are starting to think the "+m+" is losing their mind. The "+m+" vows to find who is doing the narrating and beat the stuffing out if them. However, the "+m+" is very unlikely to end the narration. The "+m+" raises their fist at a random location in the sky and shouts we\u2019ll see about that."),new U.b("The "+m+" finds themself in front of an ancient looking broadcasting tower. They wonder aloud whether the tower is broadcasting the narration. They demand the narration to be useful for a change and just tell them, but they get no answer. In a huff, they search the tower. A couple of hours later, the "+m+" find an ominous looking machine displaying pictures of the session, and text of this narration. Realizing the machine is broadcasting the narration, and getting confirmation from the narration that it is so, they immediately destroy it. They no longer hear the narration and are pleased to go back to adventuring. The "+m+" doesn\u2019t realize they only stopped the narration being broadcasted to their ears and not the narration itself.")],H.a([],g),R.bY(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
h.h(0,new X.q(s,t,null),$.Y)},
gZ:function(){return this.l},
ga7:function(){return this.m},
gH:function(){return this.n},
gJ:function(){return this.q},
ga6:function(){return this.t},
ga5:function(){return this.u},
ga4:function(){return this.v},
ga3:function(){return this.w},
gI:function(){return this.D}}
Y.c_.prototype={}
Y.O.prototype={}
Y.br.prototype={}
Y.aw.prototype={
gM:function(a){return this.c}}
Y.y.prototype={}
Y.eh.prototype={}
Y.ap.prototype={}
Y.bd.prototype={}
Y.fP.prototype={}
Y.ao.prototype={}
Y.dN.prototype={}
Y.ew.prototype={}
Y.f6.prototype={}
N.j2.prototype={
X:function(){return!0},
L:function(a){return!1},
Y:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Domino Mask",H.a([$.a3,$.F,$.dy],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Archery Set",H.a([$.p0,$.F,$.dy,$.oY],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Gristtorrent Server",H.a([$.a6,$.au,$.ay,$.F,$.an,$.bj],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
a8:function(){return 1.25},
a9:function(){return 1.25},
aa:function(){return 1},
aq:function(){return!0},
C:function(){var t,s,r,q,p,o,n
t=[P.D]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.aF,$.f)
t.h(0,$.aK,$.j)
t.h(0,$.bB,$.j)
r="The "+$.m+" cannot release the frogs since the corrupt Noble "
q=$.k
r=r+q+"s have hoarded them. The "
p=$.i
o=[U.b]
t.h(0,new R.ar("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
p=$.i
q="The "+p+" learns of the extreme injustices of the "
r=$.k
q=q+r+"s who rose to power during the tyranny of "
n=$.m
t.h(0,new R.K("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x2},
ga0:function(){return this.y1},
ga_:function(){return this.y2},
gJ:function(){return this.l}}
Q.j3.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Red Rose",H.a([$.ct,$.aU],s),null,!1,"Seductive Plant")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Friend Fic",H.a([$.ct,$.Q],s),"Don't ship irl ppl, asshole.",!1,"Grid of Sin")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Chocolate Bar",H.a([$.ct,$.cb],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Candelabra",H.a([$.ct,$.ce],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Head Cannon",H.a([$.ct,$.eI,$.V,$.eM],s),"Fuck you for that pun, JR.",!1,null)
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Her Pitch Passions Novel",H.a([$.ah,$.Q,$.ct],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aR,$.f)
q.h(0,$.es,$.j)
q.h(0,$.dq,$.j)
q.h(0,$.er,$.f)
q.h(0,$.aQ,$.j)
q.h(0,$.hp,$.r)
p=$.i
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.k
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.S+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.h(0,new R.H("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.n)
p=this.r
p.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aQ,$.j)
s.h(0,$.c5,$.f)
s.h(0,$.er,$.f)
s.h(0,$.aR,$.j)
s.h(0,$.cU,$.r)
s.h(0,$.hp,$.r)
o=$.k
n="A Romantic "+o+" approaches the "
m=$.i
s.h(0,new R.H("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.hp,$.f)
t.h(0,$.aR,$.f)
t.h(0,$.dq,$.j)
t.h(0,$.lt,$.f)
t.h(0,$.er,$.f)
t.h(0,$.aQ,$.j)
t.h(0,$.cU,$.r)
r=$.i
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.k
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.v+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.m+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.pC
t.h(0,new R.H("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.o(),!1,!1,new Y.bd("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.n)
n=$.i
r="The "+n+"  and the "
o=$.bF
t.h(0,new R.H("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.bZ(),!1,!1,new Y.ew(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.W)
o=$.i
n="The "+o+"  and the "
r=$.bF
t.h(0,new R.H("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.bZ(),!1,!1,new Y.dN(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.W)
r=$.i
o="The "+r+"  and the "
n=$.bF
t.h(0,new R.H("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.bZ(),!1,!1,new Y.f6(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.W)
p.h(0,new X.q(s,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
T.j5.prototype={
$1:function(a){return!a.gb5()},
$S:function(){return{func:1,args:[T.ci]}}}
T.ci.prototype={
B:function(){var t,s
t=Q.u(null,null,A.M)
s=A.e("Perfectly Generic Object",H.a([],[G.J]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.a.j(t.b,new Q.d(s,t.k(s,1),[H.C(t,0)]))
this.fy=t},
L:function(a){return!1},
Y:function(){return this.L(0)},
aq:function(){return!1},
a8:function(){return 1},
aa:function(){return 1},
a9:function(){return 1},
X:function(){return!1},
C:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bi,$.f)
q.h(0,$.aj,$.r)
q.h(0,$.c7,$.f)
q.h(0,$.aE,$.j)
q.h(0,$.cS,$.r)
p=$.i
o="The "+p+" learns that all of the local "
n=$.k
m=[U.b]
q.h(0,new R.K("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.v+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
n=this.x
n.h(0,new X.q(s,q,null),$.at)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cW,$.f)
s.h(0,$.dt,$.r)
s.h(0,$.cV,$.j)
s.h(0,$.b8,$.f)
s.h(0,$.aK,$.r)
p=$.i
o="The "+p+" learns that all of the local "
l=$.k
s.h(0,new R.K("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.v+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p=$.i
l="The "+p+" learns that all of the local "
o=$.k
s.h(0,new R.K("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.bF+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.v+"ing in amazement. The factory is saved! ")],H.a([],m),R.bZ(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.W)
n.h(0,new X.q(q,s,null),$.at)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.a2,$.f)
t.h(0,$.aj,$.r)
t.h(0,$.aI,$.j)
r=$.i
q="The "+r+" learns that all of the local "
p=$.k
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.v
t.h(0,new R.H("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.lM(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.r)
l=$.i
p="The "+l+" learns that all of the local "
r=$.k
t.h(0,new R.K("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
n.h(0,new X.q(s,t,null),$.at)},
A:function(a){return this.r},
R:function(a,b,c,d){var t=this.r
this.y=t
this.z=new X.en("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.ed]),H.a([],[M.dp]))
this.B()
this.C()
t=this.Q
if($.$get$f9().ah(t))H.aC("Duplicate class id for "+this.A(0)+": "+t+" is already registered for "+J.aP($.$get$f9().p(0,t))+".")
$.$get$f9().h(0,t,this)},
gM:function(a){return this.r},
gak:function(a){return this.Q},
gbR:function(){return this.ch},
gb5:function(){return this.cx},
gH:function(){return this.go},
ga0:function(){return this.id},
ga_:function(){return this.k1},
gJ:function(){return this.k2},
gI:function(){return this.k3},
gcJ:function(){return this.r1}}
E.j6.prototype={
X:function(){return!0},
L:function(a){return!1},
Y:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Sage's Robe",H.a([$.a3,$.F,$.ba,$.an,$.ax,$.a6],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Peer Reviewed Journal",H.a([$.Q,$.F,$.ah,$.an],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Guru Pillow",H.a([$.a3,$.F,$.hR,$.an],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.du,$.j)
t.h(0,$.aj,$.j)
t.h(0,$.et,$.f)
t.h(0,$.a2,$.r)
t.h(0,$.aX,$.f)
r="The "+$.m+" has blocked access to the books for the duration. The "
q=$.i
p=[U.b]
t.h(0,new R.ar("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.k+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
q="Now that the "+$.m+" is defeated, it is time to begin recovery efforts. The "
r=$.k
q=q+r+"s ask the "
o=$.i
t.h(0,new R.K("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.v+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x1},
ga0:function(){return this.x2},
ga_:function(){return this.y1},
gJ:function(){return this.y2},
gI:function(){return this.v}}
K.j7.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Uno Reverse Card",H.a([$.mI,$.E,$.bb,$.hT],s),null,!1,null)
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("JR Body Pillow",H.a([$.hR,$.ba,$.E,$.hT],s),null,!1,null)
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.D]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.hn,$.f)
q.h(0,$.bz,$.f)
q.h(0,$.bA,$.f)
q.h(0,$.bi,$.j)
q.h(0,$.aE,$.j)
q.h(0,$.aK,$.j)
q.h(0,$.aF,$.r)
q.h(0,$.bV,$.j)
q.h(0,$.cT,$.f)
q.h(0,$.hs,$.f)
q.h(0,$.dv,$.f)
q.h(0,$.ls,$.f)
q.h(0,$.ep,$.j)
q.h(0,$.cX,$.f)
p=$.i
o="The "+p+" is chilling in a "
n=$.k
o=o+n+" village when a bunch of sentient "
m=$.S
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.m
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.h(0,new R.w("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.B(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.d7(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
h=$.k
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.i
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.m
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.h(0,new R.w("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.B(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
h=this.f
h.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bT,$.f)
s.h(0,$.aE,$.j)
s.h(0,$.aF,$.f)
s.h(0,$.aQ,$.f)
s.h(0,$.aW,$.f)
s.h(0,$.b1,$.j)
s.h(0,$.hr,$.r)
s.h(0,$.bz,$.j)
s.h(0,$.b9,$.f)
s.h(0,$.aG,$.f)
s.h(0,$.bV,$.r)
p=$.v
o="The "+p+"ing and capering "
n=$.k
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.i
o=o+m+" to do a stupid "
l=$.Z
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.m
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.h(0,new R.w("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.B(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
h.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.hn,$.f)
t.h(0,$.bV,$.f)
t.h(0,$.aF,$.f)
t.h(0,$.b9,$.j)
t.h(0,$.aW,$.f)
r=$.i
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.k+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.m+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.h(0,new R.w("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.B(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
h.h(0,new X.q(s,t,null),$.Y)},
gZ:function(){return this.l},
gH:function(){return this.m},
gJ:function(){return this.n},
ga6:function(){return this.q},
ga5:function(){return this.t},
ga4:function(){return this.u},
ga3:function(){return this.v},
gI:function(){return this.E}}
Y.j8.prototype={
X:function(){return!1},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Walking Stick",H.a([$.aq,$.F,$.d2],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Adorable Girlscout Beret",H.a([$.a3,$.F,$.mL,$.an,$.a6],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Map",H.a([$.Q,$.F,$.an],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Magical Compass",H.a([$.V,$.F,$.an,$.ax],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
L:function(a){return!0},
Y:function(){return this.L(0)},
C:function(){var t,s,r,q,p
t=[P.D]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.bU,$.f)
t.h(0,$.aI,$.f)
t.h(0,$.aj,$.f)
t.h(0,$.aG,$.r)
t.h(0,$.a2,$.r)
r="Now that the "+$.m+" has been defeated, the planet has really opened up. The "
q=$.i
p=[U.b]
t.h(0,new R.K("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.k+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
q="The "+$.m+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.i
t.h(0,new R.ar("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.k+" "+$.v+"s in time to stop them.   ")],H.a([],p),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x2},
ga0:function(){return this.y1},
ga_:function(){return this.y2},
gJ:function(){return this.l}}
L.j9.prototype={
X:function(){return!1},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Scroll",H.a([$.Q,$.F,$.an],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Ink Pot",H.a([$.b4,$.F,$.bj,$.an],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Blank Book",H.a([$.Q,$.F,$.ah,$.an,$.bj,$.a6],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
L:function(a){return!0},
Y:function(){return this.L(0)},
C:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.lp,$.f)
t.h(0,$.aj,$.f)
t.h(0,$.aX,$.f)
t.h(0,$.a2,$.j)
t.h(0,$.bh,$.j)
r="The "+$.m+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.i
p=[U.b]
t.h(0,new R.ar("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
q="Now that the "+$.m+" has been taken care of, the "
r=$.i
q=q+r+" discovers a large library of "
o=$.k
t.h(0,new R.K("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x2},
ga0:function(){return this.y1},
ga_:function(){return this.y2},
gJ:function(){return this.l},
gI:function(){return this.w}}
S.ja.prototype={
X:function(){return!1},
L:function(a){return!1},
Y:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Cueball",H.a([$.p3,$.F],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Crystal Ball",H.a([$.lv,$.p2,$.F,$.cc],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Binoculars",H.a([$.b4,$.F,$.V],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Blindfold",H.a([$.p_,$.F,$.ba],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
a8:function(){return 0.67},
a9:function(){return 0.67},
aa:function(){return 1},
C:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.ow,$.f)
t.h(0,$.hq,$.f)
t.h(0,$.ot,$.f)
t.h(0,$.b9,$.j)
r="Now that the "+$.m+" has been defeated, the land is really starting to open up. The "
q=$.i
r=r+q+" finds a tunnel filled with Blind "
p=$.k
o=[U.b]
t.h(0,new R.K("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.o(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
q="The "+$.m+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.i
t.h(0,new R.ar("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.k+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
p=$.i
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.k
t.h(0,new R.K("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.o(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
r="A group of underlings are still making trouble, even after the defeat of the "+$.m+". The "
p=$.i
r=r+p+" begins planting rumors of a huge "
q=$.S
t.h(0,new R.K("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.o(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x1},
ga0:function(){return this.x2},
ga_:function(){return this.y1},
gJ:function(){return this.y2},
gI:function(){return this.v}}
Y.je.prototype={
X:function(){return!1},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Meddler's Guide",H.a([$.ah,$.F,$.Q,$.d0,$.a6,$.b5],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("First Aid Kit",H.a([$.b4,$.F,$.b5],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=$.F
r=A.e("Cloud in a Bottle",H.a([r,r,$.aS],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Fairy Wings",H.a([$.ax,$.F,$.cc,$.aU,$.Q],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
L:function(a){return!0},
Y:function(){return this.L(0)},
a8:function(){return 0.5},
a9:function(){return 1.5},
aa:function(){return 1},
aq:function(){return!1},
C:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.aj,$.j)
t.h(0,$.bU,$.f)
t.h(0,$.b9,$.j)
t.h(0,$.a2,$.j)
t.h(0,$.aI,$.f)
r="The defeat of the "+$.m+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.i
p=[U.b]
t.h(0,new R.ar("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
q="Now that the "+$.m+" has been taken care of, the "
r=$.i
q=q+r+" finds a long line of "
o=$.k
t.h(0,new R.K("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x2},
gJ:function(){return this.y1},
gI:function(){return this.u}}
N.jf.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Fiduspawn Plush",H.a([$.eK,$.a3,$.ba],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Teddy Bear",H.a([$.eK,$.a3,$.ba],s),null,!1,"Cuddle Bear")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("D20",H.a([$.p5,$.au],s),null,!1,"D113")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Pet Pigeon",H.a([$.eJ,$.bD,$.d1,$.cZ,$.eH,$.pk],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Cat Ears",H.a([$.a3,$.ba,$.eK],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Religious Text",H.a([$.ah,$.Q],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Psychology Book",H.a([$.ah,$.Q],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Therapy Couch",H.a([$.ba,$.a3],s),null,!1,"Giant Problem Absorbing Couch")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("FLARP Manual",H.a([$.ah,$.Q,$.an],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.D]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.c6,$.r)
q.h(0,$.a2,$.j)
q.h(0,$.bh,$.f)
q.h(0,$.aX,$.j)
p=$.i
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.k
m=[U.b]
q.h(0,new R.H("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.Z+" or "+$.S+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.v+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p=this.r
p.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.c6,$.r)
s.h(0,$.a2,$.f)
s.h(0,$.bh,$.f)
s.h(0,$.mu,$.f)
s.h(0,$.aQ,$.f)
s.h(0,$.mB,$.f)
s.h(0,$.aX,$.j)
o=$.i
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.v
n=n+l+"ing "
k=$.k
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.Z
s.h(0,new R.H("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.b8,$.r)
t.h(0,$.c5,$.f)
t.h(0,$.aI,$.f)
t.h(0,$.bB,$.f)
t.h(0,$.ds,$.f)
r=$.i
q="The "+r+" wanders into an entire crowd of "
o=$.k
t.h(0,new R.H("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.v+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(s,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
N.jg.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Frog Statue",H.a([$.aV,$.eN,$.E],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Frog Costume",H.a([$.a3,$.E],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Nuclear Reactor",H.a([$.hQ,$.an,$.ay,$.E],s),null,!1,"A Representation of My Hatred for Everything")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Telescope",H.a([$.V,$.b4,$.an,$.E],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Green Sun Poster",H.a([$.Q,$.E,$.mN,$.a6],s),"Huh.",!1,"Sauce Sun Poster")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m
t=$.i
s=[P.D]
r=H.a(["Wherever the "+t+" goes, they find a "+$.k+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.v+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.m+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.i
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.k+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.k+" tells the "
p=$.i
t=t+p+" that they must negotiate with "
o=$.m
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.i
p="The "+o+" meets with "
t=$.m
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.b9,$.r)
t.h(0,$.mw,$.f)
s=[U.b]
t.h(0,new R.w("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.W)
t.h(0,new R.w("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.W)
t.h(0,new R.w("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.W)
t.h(0,new R.w("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.W)
t.h(0,new R.w("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.W)
t.h(0,new R.w("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.W)
p=$.i
t.h(0,new R.ar("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.k+"s 'help' by "+$.v+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.o(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
this.f.h(0,new X.q(o,t,null),$.qF)},
gZ:function(){return this.l},
ga7:function(){return this.m},
gH:function(){return this.n},
gJ:function(){return this.q},
ga6:function(){return this.t},
ga5:function(){return this.u},
ga4:function(){return this.v},
ga3:function(){return this.w},
gI:function(){return this.D}}
R.jt.prototype={
X:function(){return!0},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Meddler's Guide",H.a([$.ah,$.F,$.Q,$.d0,$.a6,$.b5],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("First Aid Kit",H.a([$.b4,$.F,$.b5],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=$.F
r=A.e("Cloud in a Bottle",H.a([r,r,$.aS],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Fairy Wings",H.a([$.ax,$.F,$.cc,$.aU,$.Q],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
L:function(a){return!1},
Y:function(){return this.L(0)},
a8:function(){return 1},
a9:function(){return 1},
aa:function(){return 1.5},
aq:function(){return!0},
C:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.bh,$.f)
t.h(0,$.a2,$.f)
t.h(0,$.bU,$.j)
t.h(0,$.et,$.j)
t.h(0,$.os,$.j)
t.h(0,$.cS,$.j)
t.h(0,$.lo,$.j)
t.h(0,$.ox,$.j)
r=$.i
q="The "+r+" decides to take a break after defeating "+$.m+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.k
o=[U.b]
t.h(0,new R.K("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.v+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.iX(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.f)
r=$.k
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.i
t.h(0,new R.K("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
r=$.k
q="The "+r+"s are so stressed after all that shit with the "+$.m+". They are yelling and "+$.v+" at each other over the slightest of insults. The "
p=$.i
t.h(0,new R.K("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p="The "+$.m+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.i
p=p+r+" purifies the pools "
q=$.k
t.h(0,new R.ar("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
r="The defeat of the "+$.m+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.k
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.i
t.h(0,new R.K("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.Z+". Huh. Okay then.")],H.a([],o),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x1},
ga0:function(){return this.x2},
ga_:function(){return this.y1},
gJ:function(){return this.y2},
gI:function(){return this.v}}
D.jy.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Robot",H.a([$.ay,$.V,$.bD,$.an],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Circuit Board",H.a([$.ay,$.V],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Datastructures for Assholes",H.a([$.ay,$.Q],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("~ATH For Dummies ",H.a([$.ay,$.Q,$.aY,$.ah],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("3-D Printer",H.a([$.au,$.ay,$.V],s),null,!1,"3-D Shitpost Maker")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Virus on a USB Stick",H.a([$.pa,$.V],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Wrench",H.a([$.ps,$.V,$.b3],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Computer",H.a([$.ay,$.V],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.eq,$.j)
q.h(0,$.cR,$.f)
q.h(0,$.cW,$.f)
q.h(0,$.aK,$.r)
p=$.i
o="The "+p+" learns from their "
n=$.k
o=o+n+"s about the great "
m=$.Z
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.m+" destroyed it. "
o="The "+p+" searches for the "
l=$.S
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.pK
p=[U.b]
q.h(0,new R.H("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.o(),!1,!1,new Y.bd("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.n)
l=$.i
m="The "+l+" is approached by a "
o=$.k
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.v
q.h(0,new R.H("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.m+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.S+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.bY(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.f)
m=this.r
m.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cW,$.f)
s.h(0,$.dt,$.r)
s.h(0,$.cV,$.j)
s.h(0,$.b8,$.f)
s.h(0,$.aK,$.r)
o=$.i
n="The "+o+" learns that all of the local "
l=$.k
s.h(0,new R.H("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.v+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
o=$.i
l="The "+o+" finds two groups of "
n=$.k
l=l+n+"s screaming and "
k=$.v
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.S
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.h(0,new R.H("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.cg(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.n)
m.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.eq,$.r)
t.h(0,$.cR,$.f)
t.h(0,$.cW,$.f)
t.h(0,$.aK,$.r)
r=$.i
q="The "+r+" learns from a mysterious "+$.k+" in a black trenchcoat about a great "
o=$.Z
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.m
t.h(0,new R.H("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
m.h(0,new X.q(s,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
V.jz.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Lighter",H.a([$.V,$.ce],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Siberia Poster",H.a([$.Q,$.ca],s),null,!1,"Poster of the Shoguns Birthplace")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Nuclear Winter Poster",H.a([$.Q,$.ca,$.hQ],s),null,!1,"Shoguns Dream as a Poster")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Doomsday Device",H.a([$.V,$.aY,$.hQ,$.bk,$.eH],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Juggalo Poster",H.a([$.Q,$.pe],s),null,!1,"False God Poster")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Fancy Watch",H.a([$.V,$.eO,$.bk],s),null,!1,"Shoguns Watch")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Magnificent Crown",H.a([$.V,$.eO,$.bk],s),null,!1,"The Shoguns Crown")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Bitching Clothes",H.a([$.a3,$.dy,$.bk],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Ceramic Pork Hollow",H.a([$.lx,$.eO],s),"...",!1,"Shoguns Old Porkhollow")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Shit Ton of Guns",H.a([$.V,$.pl,$.eM,$.bk],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sniper Rifle",H.a([$.V,$.po,$.eM,$.bk],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("AK-47",H.a([$.V,$.ph,$.eM,$.bk],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("IED",H.a([$.mO,$.d_,$.V,$.eI,$.bk],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Idiots Guide To Being An Asshole",H.a([$.Q,$.d0,$.ah],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Bike Horn",H.a([$.dA,$.V,$.cd,$.d0],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Matches",H.a([$.aq,$.ce],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.b1,$.j)
q.h(0,$.c5,$.f)
q.h(0,$.cr,$.f)
q.h(0,$.dv,$.f)
q.h(0,$.lr,$.f)
q.h(0,$.bB,$.j)
p=$.i
o=[U.b]
q.h(0,new R.H("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.o(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
p=this.r
p.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.b1,$.j)
s.h(0,$.c5,$.f)
s.h(0,$.aR,$.f)
s.h(0,$.bB,$.j)
n=$.i
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.k
s.h(0,new R.H("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.S+" underling. Tremble at the fearsome "+$.Z+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.o(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bi,$.f)
q.h(0,$.aj,$.r)
q.h(0,$.c7,$.f)
q.h(0,$.aE,$.j)
q.h(0,$.cS,$.r)
q.h(0,$.bz,$.r)
n=$.i
m="The "+n+" learns that all of the local "
l=$.k
q.h(0,new R.H("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.v+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aF,$.f)
t.h(0,$.bz,$.r)
t.h(0,$.cT,$.f)
t.h(0,$.hs,$.f)
t.h(0,$.aK,$.j)
t.h(0,$.cX,$.j)
s=$.i
r="The "+s+" finds a crowd of "
n=$.v
r=r+n+"ing "
m=$.k
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.Z+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.h(0,new R.H("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.n)
p.h(0,new X.q(q,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
X.q.prototype={
A:function(a){return"Theme: "+H.t(this.a)}}
U.jC.prototype={
X:function(){return!1},
L:function(a){return!0},
Y:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Lockpick",H.a([$.V,$.F,$.bj,$.eL,$.a6],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sneaking Suit",H.a([$.a3,$.F,$.bj],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Thief's Dagger",H.a([$.V,$.F,$.eL,$.d_,$.p4],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
a8:function(){return 1.5},
a9:function(){return 0.8},
aa:function(){return 1},
aq:function(){return!0},
C:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.aF,$.f)
t.h(0,$.bA,$.j)
t.h(0,$.aG,$.j)
t.h(0,$.b8,$.j)
r="The "+$.m+" cannot release the frogs since the corrupt "
q=$.k
r=r+q+" Cops have confiscated them. The "
p=$.i
o=[U.b]
t.h(0,new R.ar("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
p=$.i
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.m+"'s layer and slated to be returned to the "
r=$.k
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.v+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.fy
t.h(0,new R.K("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.n)
r=$.k
p="A weeping "+r+" approaches the "
n=$.i
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.m
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.Z+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.v+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.fy
t.h(0,new R.K("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.n)
r=$.m
n="Now that the "+r+" has been defeated, the "
p=$.k
n=n+p+"s have recovered their precious "
q=$.S
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.i
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.v
l=n+l+"worth, the disaffected Heir to the "+$.Z+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.fy
t.h(0,new R.K("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x2},
ga0:function(){return this.y1},
ga_:function(){return this.y2},
gJ:function(){return this.l}}
N.jD.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Grandfather Clock",H.a([$.aq,$.av,$.eO,$.E],s),null,!1,"Ticking Tower of Time")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Drum",H.a([$.pg,$.E,$.b6],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Dead Doppelganger",H.a([$.aV,$.d1,$.E,$.cZ,$.bt,$.aY],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Music Box",H.a([$.V,$.E,$.b6,$.av],s),null,!1,"Cube of Noise")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sick Turn Tables",H.a([$.V,$.E,$.b6,$.a6,$.aT],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Metronome",H.a([$.V,$.E,$.b6],s),null,!1,"Never Ending Ticking Device")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.D]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.oz,$.W)
q.h(0,$.aK,$.j)
q.h(0,$.b8,$.j)
q.h(0,$.cV,$.f)
p=$.m
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.i
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x1
l=[U.b]
q.h(0,new R.K("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.bm(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.f)
n=$.i
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.k+"s, they set out to fix the "
m=$.S
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.m
q.h(0,new R.w("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.B("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
j=this.f
j.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.ep,$.f)
s.h(0,$.cr,$.r)
s.h(0,$.aK,$.f)
p=$.i
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.k+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.m
s.h(0,new R.w("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.B(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
j.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aI,$.f)
t.h(0,$.a2,$.j)
t.h(0,$.bh,$.f)
t.h(0,$.bU,$.f)
r=$.m
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.S
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.i
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.k+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.h(0,new R.w("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.B(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.d7(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
k=$.m
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.S
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.i
t.h(0,new R.w("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.k+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.B("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.bm(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
r="With the defeat of the "+$.m+", "
k=$.i
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.k
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.Z
t.h(0,new R.K("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.bm(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.f)
p=$.i
k="The "+p+" takes a break from adventuring and visits a little "
o=$.k
k=k+o+" town holding a "
r=$.Z
k=k+r+" festival. They walk around town talking to the various villagers and visiting the little shops, before taking a nap in the local inn. The next morning, the villagers welcome the "+p+" to join in the "+r+" festival that\u2019s just starting. Wait, wasn\u2019t the festival yesterday? The "+o+"s assure the "+p+" that the festival is only being held today. "
m="The "+p+" tries to convince the "+o+"s that they were repeating the day before, but the "+o+"s refused to believe. They quickly realize that the villagers aren\u2019t just forgetful when the same thing hsppens the day after. The village appears to be stuck in a time loop They decide to fix things out of the goodness of their heart, but not before exploiting the time loop to mess with the "+o+" town for a little while."
n="After plenty of shenanigans, the "+p+" starts investigating the time loop. They discover that the "+r+" festival ends with an attempted ceremony to summon "
q=$.m
n=n+q+". The "+o+"s bungle the ceremony every time, causing time to reset. The "+p+" studies how the festival is supposed to work, and goes through several loops at once with time time travel to fix the ceremony. "
i="The "+p+" has gone through so many freaking loops that they have memorized the actions of every "+o+". They follow a perfected schedule to make sure every "+o+" prepares for and completes their part of the ceremony. Finally the ceremony is completed and "+q+" arrives. The "+p+" takes out their "+$.al+" and begins the strife!"
p=q+" lies dead. The "+o+"s are happy to be rid of them and thank the player for helping to complete the ceremony. It was their first time performing the ceremony, after all. The "+p+" rolls their eyes."
t.h(0,new R.w("Stop the Time Loop",!1,[new U.b(k),new U.b(m),new U.b(n),new U.B(i,"The "+o+"s wake up and begin eagerly preparing for the "+r+" festival. It only comes once a year, after all.",p)],H.a([],l),R.iV(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
r="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.i
t.h(0,new R.w("Move Forwards, Never Stop",!1,[new U.b(r+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.v+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.B("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.m+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
j.h(0,new X.q(s,t,null),$.Y)},
gZ:function(){return this.m},
ga7:function(){return this.n},
gH:function(){return this.q},
gJ:function(){return this.t},
ga6:function(){return this.u},
ga5:function(){return this.v},
ga4:function(){return this.w},
ga3:function(){return this.F},
gI:function(){return this.O}}
G.J.prototype={}
G.eg.prototype={$isaD:1,
$asaD:function(){return[G.eg]}}
G.hX.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.J]}}}
Q.jM.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Cardboard Box",H.a([$.Q,$.E,$.bj],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Hole Punch",H.a([$.V,$.E,$.bj],s),null,!1,"Paper Impaler")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Smoke Bombs",H.a([$.eI,$.E,$.bj,$.mO],s),null,!1,"Vape Grenades")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Tribal Mask",H.a([$.cZ,$.E,$.bj,$.bt,$.hW],s),null,!1,"Ancient Face")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Opera Mask",H.a([$.au,$.E,$.bj,$.av],s),null,!1,"Phantom of the Opera Mask")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Black Hole in a Bottle.",H.a([$.E,$.a6,$.mN,$.bj,$.b4],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.D]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.c6,$.f)
q.h(0,$.ht,$.f)
q.h(0,$.hu,$.f)
q.h(0,$.hq,$.f)
p=$.m
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.i
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.k
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x1
l=[U.b]
q.h(0,new R.K("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.n)
m=$.i
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.m
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.h(0,new R.w("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.B(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
i=this.f
i.h(0,new X.q(s,q,null),$.Y)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.c6,$.j)
s.h(0,$.ht,$.j)
s.h(0,$.hu,$.j)
s.h(0,$.aF,$.f)
p=$.i
o="Even with the victory of the "+p+" over the villainous "
n=$.m
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.k+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.S
s.h(0,new R.K("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.bY(),!1,!1,new Y.aw("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
m=$.i
s.h(0,new R.w("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.v+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.B("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.m+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.k+"s.")],H.a([],l),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
i.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.c6,$.f)
t.h(0,$.ht,$.f)
t.h(0,$.hu,$.f)
r=$.i
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.m+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.h(0,new R.w("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.B(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
i.h(0,new X.q(s,t,null),$.Y)},
gZ:function(){return this.l},
ga7:function(){return this.m},
gH:function(){return this.n},
gJ:function(){return this.q},
ga6:function(){return this.t},
ga5:function(){return this.u},
ga4:function(){return this.v},
ga3:function(){return this.w},
gI:function(){return this.D}}
E.jN.prototype={
X:function(){return!0},
L:function(a){return!0},
Y:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Yardstick",H.a([$.d2,$.F,$.mS,$.a6],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("SBURBSim Hacking Guide",H.a([$.ah,$.F,$.lC,$.Q],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Body Pillow of JR",H.a([$.a3,$.F,$.hR,$.pd,$.ba,$.hT],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Nanobots",H.a([$.pp,$.F,$.mF],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
a8:function(){return 0.5},
a9:function(){return 0.5},
aa:function(){return 0.5},
C:function(){var t,s,r,q,p,o,n,m
t=[P.D]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.b9,$.f)
t.h(0,$.bV,$.f)
t.h(0,$.dr,$.f)
t.h(0,$.bU,$.f)
t.h(0,$.eo,$.f)
t.h(0,$.lq,$.f)
t.h(0,$.hu,$.j)
r=$.i
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.k
o=[U.b]
t.h(0,new R.H("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.iX(),!1,!1,new Y.c_("Rewards/no_reward.png",null),1,null,null),$.n)
r=$.m
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.i
n=q+" tries to manually separate the turtles by catching them with a net and "+$.al+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.v
t.h(0,new R.w("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.B(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.pP(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
q=$.i
t.h(0,new R.H("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.o(),!1,!1,new Y.c_("Rewards/no_reward.png",null),1,null,null),$.n)
q="A wizened "+$.k+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.i
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.m
t.h(0,new R.w("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.W)
m=$.i
t.h(0,new R.w("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.k+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.m+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.o(),!1,!1,new Y.y("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.W)
m="A wizened "+$.k+" tells the "
r=$.i
t.h(0,new R.K("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.o(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.r)
r="A "+$.k+" that is also a SHOGUN minion tells the "
m=$.i
t.h(0,new R.K("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.pQ(),!1,!1,new Y.aw("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
m=$.i
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.h(0,new R.K("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.r)
n=$.i
m="The "+n+" finds an unusual rock formation. They examine it from every possible angle to find a secret meaning. In the end it turns out to be an interesting rock and nothing more."
q="The "+n+" is stopped by a young "
r=$.k
t.h(0,new R.K("Wasting Time",!1,[new U.b(m),new U.b(q+r+" that asks them to watch clouds together. The "+n+" spends a few hours with the "+r+" interpreting the shapes in the clouds."),new U.b("The "+n+" uses the alchemiter to create a number of dream video game fusions. They spend many hours playing them all."),new U.b("After waking up from a nap, the "+n+" turns over and goes right back to sleep. They\u2019re just not feeling like doing anything right now."),new U.b("An elderly "+r+" calls out to the "+n+"; apparently there was a dangerous monster that the "+r+"s wanted the "+n+" to defeat, but the problem solved itself when the monster tripped off a cliffside. Was there actually a point to what the "+n+" was doing? Nope, they\u2019re just really bad at using their time wisely.")],H.a([],o),R.iX(),!1,!1,new Y.c_("Rewards/no_reward.png",null),1,null,null),$.n)
n=$.m
r="The "+n+" explains um. What? Where did the "
q=$.i
t.h(0,new R.ar("Waste the Frogs",!1,[new U.b(r+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.k+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
this.x.h(0,new X.q(s,t,null),$.Y)},
gH:function(){return this.x2},
ga0:function(){return this.y1},
ga_:function(){return this.y2},
gJ:function(){return this.l},
gI:function(){return this.w}}
M.jR.prototype={
X:function(){return!1},
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Cauldron",H.a([$.pf,$.F,$.ax],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Flying Broom",H.a([$.lw,$.d2,$.F,$.aq,$.ax],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Warped Mirror",H.a([$.mQ,$.F,$.ax,$.bj,$.a6],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
L:function(a){return!0},
Y:function(){return this.L(0)},
aq:function(){return!0},
a8:function(){return 2},
aa:function(){return 1.5},
a9:function(){return 1},
C:function(){var t,s,r,q,p,o,n,m
t=[P.D]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.G])
t.h(0,$.aE,$.j)
t.h(0,$.es,$.j)
t.h(0,$.bi,$.j)
t.h(0,$.b8,$.j)
t.h(0,$.aW,$.j)
t.h(0,$.mw,$.j)
r=$.m
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.k
q=q+p+" consorts. It's up to the "
o=$.i
n=[U.b]
t.h(0,new R.ar("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.az(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.W)
o="Even with the defeat of the "+$.m+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.k
o=o+r+" settlement, and crops refuse to thrive at "
p=$.Z
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.i
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.fy
t.h(0,new R.K("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.n)
q="A Mysterious "+$.k+" approaches the "
p=$.i
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.Z
q=q+r+" was discovered amongst the "+$.m+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.fy
t.h(0,new R.K("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.n)
r=$.k
p="A young "+r+" approaches the "
m=$.i
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.Z
t.h(0,new R.K("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.S+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.v+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.o(),!1,!1,new Y.O("Rewards/no_reward.png",null),1,null,null),$.n)
this.x.h(0,new X.q(s,t,null),$.at)},
gH:function(){return this.x2},
ga0:function(){return this.y1},
ga_:function(){return this.y2},
gJ:function(){return this.l},
gI:function(){return this.w}}
F.jS.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.J]
r=A.e("Make a World Book",H.a([$.Q,$.av,$.ah],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.C(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Quill Pen",H.a([$.ba,$.a3,$.mR],s),null,!1,"Dead Bird Scribing Tool")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Book On Writing",H.a([$.ah,$.Q,$.an],s),null,!1,"How to do words for unsmarts")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("FLARP Manual",H.a([$.ah,$.Q,$.an],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Script",H.a([$.ah,$.Q],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Fancy Pen",H.a([$.V,$.an,$.mR,$.av],s),null,!1,"Ink Bleeding Plastic Finger")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Spiral Bound Notebook",H.a([$.ah,$.Q,$.V],s),null,!1,"Spinney Spine Scribing Station")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Half Written Novel",H.a([$.ah,$.Q],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.T,P.G]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.c6,$.f)
q.h(0,$.aX,$.f)
q.h(0,$.aj,$.j)
q.h(0,$.a2,$.j)
q.h(0,$.du,$.j)
p=$.i
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.k+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.h(0,new R.H("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.o(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.n)
m=this.r
m.h(0,new X.q(s,q,null),$.a_)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bB,$.j)
s.h(0,$.b1,$.j)
s.h(0,$.aR,$.j)
s.h(0,$.aj,$.j)
p=$.k
o="An Excited "+p+" rushes up to the "
n=$.i
s.h(0,new R.H("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.v+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.o(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
m.h(0,new X.q(q,s,null),$.a_)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.b1,$.j)
t.h(0,$.c5,$.f)
t.h(0,$.aR,$.f)
t.h(0,$.bB,$.j)
t.h(0,$.dr,$.f)
r=$.i
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.k
t.h(0,new R.H("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.o(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
m.h(0,new X.q(s,t,null),$.a_)},
gI:function(){return this.cx},
gad:function(){return this.cy},
gae:function(){return this.db},
gH:function(){return this.dx},
gaf:function(){return this.dy}}
A.dl.prototype={}
A.co.prototype={
A:function(a){return"rgb("+H.t(this.b)+", "+H.t(this.c)+", "+H.t(this.d)+", "+H.t(this.a)+")"},
cQ:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.aO()
s=this.c
if(typeof s!=="number")return s.aO()
r=this.d
if(typeof r!=="number")return r.aO()
q=this.a
if(typeof q!=="number")return H.df(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.aO()
s=this.c
if(typeof s!=="number")return s.aO()
r=this.d
if(typeof r!=="number")return H.df(r)
return(t<<16|s<<8|r)>>>0},
eS:function(a,b){var t=C.b.eR(this.cQ(!1),16)
return"#"+C.e.eC(t,6,"0").toUpperCase()},
bp:function(){return this.eS(!1,!1)},
P:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.co){t=this.b
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
gW:function(a){return this.cQ(!0)},
av:function(a,b){var t,s,r,q
if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.aC()
s=this.c
if(typeof s!=="number")return s.aC()
r=this.d
if(typeof r!=="number")return r.aC()
q=this.a
if(typeof q!=="number")return q.aC()
return A.mg(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.av()
s=this.c
if(typeof s!=="number")return s.av()
r=this.d
if(typeof r!=="number")return r.av()
return A.ef(t+b,s+b,r+b,this.a)}throw H.A("Cannot add ["+H.t(J.ma(b))+" "+H.t(b)+"] to a Colour. Only Colour, double and int are valid.")},
aw:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.aC()
s=this.c
if(typeof s!=="number")return s.aC()
r=this.d
if(typeof r!=="number")return r.aC()
q=this.a
if(typeof q!=="number")return q.aC()
return A.mg(t/255*b,s/255*b,r/255*b,q/255)},
p:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.A("Colour index out of range: "+H.t(b))},
h:function(a,b,c){var t,s
t=J.e8(b)
if(t.aN(b,0)||t.aM(b,3))throw H.A("Colour index out of range: "+H.t(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.P(b,0)){this.b=C.b.U(c,0,255)
this.e=!0
this.y=!0}else if(t.P(b,1)){this.c=C.b.U(c,0,255)
this.e=!0
this.y=!0}else if(t.P(b,2)){this.d=C.b.U(c,0,255)
this.e=!0
this.y=!0}else this.a=C.b.U(c,0,255)
else if(t.P(b,0)){this.b=C.b.U(J.fA(J.m7(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.P(b,1)){this.c=C.b.U(J.fA(J.m7(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.l_(c)
if(t.P(b,2)){this.d=C.b.U(J.fA(s.aw(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.b.U(J.fA(s.aw(c,255)),0,255)}},
dg:function(a,b,c,d){this.b=C.d.U(C.d.U(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.U(C.d.U(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.U(C.d.U(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.U(J.nM(d,0,255),0,255)}}
A.kX.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.D]}}}
A.iN.prototype={
p:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.ah(b)?t.p(0,b):$.$get$lK()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.ah(b)?t.p(0,b):$.$get$lK()}throw H.A(P.fF(b,"'name' should be a String name or int id only",null))},
gT:function(a){var t=this.a
t=t.gaK(t)
return new H.eX(null,J.bq(t.a),t.b,[H.C(t,0),H.C(t,1)])},
i:function(a,b,c,d){var t,s
t=this.a
if(t.ah(b))this.ai(0,b)
s=this.dR()
if(typeof s!=="number")return s.eW()
if(s>=256)throw H.A(P.fF(s,"Palette colour ids must be in the range 0-255",null))
t.h(0,b,c)
this.b.h(0,s,c)
this.c.h(0,b,s)
this.d.h(0,s,b)},
ai:function(a,b){var t,s,r
t=this.a
if(!t.ah(b))return
s=this.c
r=s.p(0,b)
t.ai(0,b)
this.b.ai(0,r)
s.ai(0,b)
this.d.ai(0,r)},
dR:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.ah(s))return s;++s}},
e9:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=document
s=t.createElement("div")
r=s.style
r.padding="3px"
r.margin="3px"
r.outline="1px solid black"
r.display="inline-block"
r.textAlign="left"
r=t.createElement("span")
q=r.style
q.fontWeight="bold"
r.textContent=a
s.appendChild(r)
for(r=this.b,q=new P.fo(r,r.bC(),0,null,[H.C(r,0)]),p=this.d;q.K();){o=q.d
n=p.p(0,o)
m=r.p(0,o)
l=t.createElement("div")
k=t.createElement("div")
k.title=m.bp().toUpperCase()
j=k.style
j.position="relative"
j.display="inline-block"
j.marginRight="3px"
j.width="10px"
j.height="10px"
i=m.bp()
j.backgroundColor=i
h=t.createElement("span")
h.textContent=H.t(o)+": "+H.t(n)
l.appendChild(k)
l.appendChild(h)
s.appendChild(l)}return s}}
A.f5.prototype={
$asz:function(){return[A.co]},
$isz:1}
A.iZ.prototype={
d3:function(a){var t=P.qU(a)
this.a=t
this.b=a+1},
eF:function(a,b){var t
if(a.gal(a))return
t=a.eX(this.a.ez())
return t},
eE:function(a){return this.eF(a,!0)}}
D.jk.prototype={
$1:function(a){return J.cM(a)},
$S:function(){return{func:1,args:[D.aJ]}}}
D.jl.prototype={
$1:function(a){return a},
$S:function(){return{func:1,args:[D.aJ]}}}
D.jm.prototype={
$1:function(a){return a.geG()},
$S:function(){return{func:1,args:[D.aJ]}}}
D.aJ.prototype={
A:function(a){return this.a},
gM:function(a){return this.a},
geG:function(){return this.d}}
D.fk.prototype={}
D.j1.prototype={}
X.lb.prototype={
$2:function(a,b){return J.fy(J.cM(a),J.cM(b))},
$S:function(){return{func:1,args:[L.c2,L.c2]}}}
X.lc.prototype={
$2:function(a,b){return J.fy(J.cM(a),J.cM(b))},
$S:function(){return{func:1,args:[T.ci,T.ci]}}}
X.ld.prototype={
$2:function(a,b){return J.fy(J.cM(a),J.cM(b))},
$S:function(){return{func:1,args:[B.c9,B.c9]}}}
X.li.prototype={
$1:function(a){var t=this.a.style
if(t.display==="none"){t.display="block"
C.j.bt(this.b,"[-]")}else{t.display="none"
C.j.bt(this.b,"[+]")}},
$S:function(){return{func:1,args:[W.bX]}}}
Q.bI.prototype={
k:function(a,b){return b},
A:function(a){return J.aP(this.gbo())},
am:function(a,b){return Q.lQ(this,b,H.ak(this,"bI",0),null)},
a1:function(a,b){return Q.lP(this,!1,!0,null,H.ak(this,"bI",0))},
an:function(a){return this.a1(a,!0)},
$isz:1,
$asz:null}
Q.jP.prototype={
gbo:function(){return this.b},
p:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.U(t,b)
return J.lk(t[b])},
h:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.U(t,b)
t[b]=new Q.d(c,s,this.$ti)},
gG:function(a){return this.b.length},
A:function(a){return P.eP(this.b,"[","]")},
am:function(a,b){return Q.lQ(this,b,H.C(this,0),null)},
a1:function(a,b){return Q.lP(this,!1,!0,null,H.C(this,0))},
an:function(a){return this.a1(a,!0)},
dk:function(a,b,c){var t,s
this.a=a
t=[[Q.d,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.fg.prototype={$asbI:null,$asz:null,$asR:null,$asL:null,$isR:1,$isL:1,$isz:1}
Q.d.prototype={
A:function(a){return"("+H.t(this.a)+" @ "+H.t(this.b)+")"},
gb6:function(a){return this.a},
geU:function(){return this.b}}
Q.cG.prototype={
gbo:function(){return this.b},
gT:function(a){var t=new Q.jO(null,[H.ak(this,"cG",0)])
t.a=J.bq(this.b)
return t},
gG:function(a){return J.dh(this.b)},
A:function(a){return J.aP(this.b)},
am:function(a,b){return Q.lQ(this,b,H.ak(this,"cG",0),null)},
a1:function(a,b){return Q.lP(this,!1,!0,null,H.ak(this,"cG",0))},
an:function(a){return this.a1(a,!0)}}
Q.dV.prototype={$asbI:null,$asz:null,$isz:1}
Q.jO.prototype={
gN:function(){return J.lk(this.a.gN())},
K:function(){return this.a.K()}}
Q.fh.prototype={
$ascG:function(a,b){return[b]},
$asdV:function(a,b){return[b]},
$asbI:function(a,b){return[b]},
$asz:function(a,b){return[b]}}
Q.jQ.prototype={
$1:function(a){return new Q.d(this.c.$1(J.lk(a)),a.geU(),[this.b])},
$S:function(){return H.lZ(function(a,b){return{func:1,args:[[Q.d,a]]}},this,"fh")}}
J.I.prototype.d9=J.I.prototype.A
J.dB.prototype.dc=J.dB.prototype.A
P.bw.prototype.dd=P.bw.prototype.bc
P.bw.prototype.de=P.bw.prototype.bb
P.z.prototype.da=P.z.prototype.bq
W.b7.prototype.bv=W.b7.prototype.ap
W.e2.prototype.df=W.e2.prototype.ay;(function installTearOffs(){installTearOff(H.da.prototype,"gew",0,0,0,null,["$0"],["bn"],1)
installTearOff(H.bL.prototype,"gcV",0,0,0,null,["$1"],["aj"],3)
installTearOff(H.cH.prototype,"ged",0,0,0,null,["$1"],["aA"],3)
installTearOff(P,"r3",1,0,0,null,["$1"],["qK"],2)
installTearOff(P,"r4",1,0,0,null,["$1"],["qL"],2)
installTearOff(P,"r5",1,0,0,null,["$1"],["qM"],2)
installTearOff(P,"nA",1,0,0,null,["$0"],["r0"],1)
installTearOff(P.bK.prototype,"gca",0,0,0,null,["$2","$1"],["bd","dB"],6)
var t
installTearOff(t=P.bw.prototype,"gck",0,0,0,null,["$0"],["bh"],1)
installTearOff(t,"gcl",0,0,0,null,["$0"],["bi"],1)
installTearOff(t=P.dX.prototype,"gck",0,0,0,null,["$0"],["bh"],1)
installTearOff(t,"gcl",0,0,0,null,["$0"],["bi"],1)
installTearOff(t,"gdH",0,0,0,null,["$1"],["dI"],function(){return H.lZ(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"dX")})
installTearOff(t,"gdL",0,0,0,null,["$2"],["dM"],7)
installTearOff(t,"gdJ",0,0,0,null,["$0"],["dK"],1)
installTearOff(P,"r8",1,0,0,null,["$2"],["ol"],10)
installTearOff(W,"rd",1,0,0,null,["$4"],["qQ"],5)
installTearOff(W,"re",1,0,0,null,["$4"],["qR"],5)
installTearOff(W.cp.prototype,"gb6",0,1,0,null,["$1"],["aI"],8)
installTearOff(W.ex.prototype,"gb6",0,1,0,null,["$1"],["aI"],4)
installTearOff(W.fa.prototype,"gb6",0,1,0,null,["$1"],["aI"],4)
installTearOff(W.e1.prototype,"gb6",0,1,0,null,["$1"],["aI"],9)
installTearOff(R,"bZ",1,0,0,null,["$1"],["n6"],0)
installTearOff(R,"pT",1,0,0,null,["$1"],["q8"],0)
installTearOff(R,"pP",1,0,0,null,["$1"],["pU"],0)
installTearOff(R,"iX",1,0,0,null,["$1"],["q7"],0)
installTearOff(R,"az",1,0,0,null,["$1"],["q6"],0)
installTearOff(R,"iW",1,0,0,null,["$1"],["q5"],0)
installTearOff(R,"iV",1,0,0,null,["$1"],["q3"],0)
installTearOff(R,"d7",1,0,0,null,["$1"],["q1"],0)
installTearOff(R,"bm",1,0,0,null,["$1"],["pY"],0)
installTearOff(R,"cg",1,0,0,null,["$1"],["q_"],0)
installTearOff(R,"bY",1,0,0,null,["$1"],["q4"],0)
installTearOff(R,"lM",1,0,0,null,["$1"],["pZ"],0)
installTearOff(R,"pR",1,0,0,null,["$1"],["q0"],0)
installTearOff(R,"pS",1,0,0,null,["$1"],["q2"],0)
installTearOff(R,"o",1,0,0,null,["$1"],["pV"],0)
installTearOff(R,"pQ",1,0,0,null,["$1"],["pW"],0)
installTearOff(X,"nI",1,0,0,null,["$0"],["rl"],1)})();(function inheritance(){inherit(P.as,null)
var t=P.as
inherit(H.lF,t)
inherit(J.I,t)
inherit(J.fG,t)
inherit(P.z,t)
inherit(H.eV,t)
inherit(P.eQ,t)
inherit(H.eu,t)
inherit(H.cQ,t)
inherit(H.kw,t)
inherit(H.da,t)
inherit(H.k7,t)
inherit(H.cI,t)
inherit(H.kv,t)
inherit(H.jY,t)
inherit(H.d8,t)
inherit(H.jE,t)
inherit(H.bR,t)
inherit(H.bL,t)
inherit(H.cH,t)
inherit(P.eW,t)
inherit(H.fR,t)
inherit(H.j0,t)
inherit(H.jH,t)
inherit(P.cq,t)
inherit(H.fq,t)
inherit(H.cl,t)
inherit(H.l,t)
inherit(H.ib,t)
inherit(H.id,t)
inherit(P.fn,t)
inherit(P.bK,t)
inherit(P.fl,t)
inherit(P.cD,t)
inherit(P.jn,t)
inherit(P.bw,t)
inherit(P.fm,t)
inherit(P.k2,t)
inherit(P.kz,t)
inherit(P.cO,t)
inherit(P.kT,t)
inherit(P.kn,t)
inherit(P.fo,t)
inherit(P.jc,t)
inherit(P.kt,t)
inherit(P.cK,t)
inherit(P.d3,t)
inherit(P.dM,t)
inherit(P.bv,t)
inherit(P.kR,t)
inherit(P.ku,t)
inherit(P.c1,t)
inherit(P.aD,t)
inherit(P.by,t)
inherit(P.c3,t)
inherit(P.iK,t)
inherit(P.fd,t)
inherit(P.kc,t)
inherit(P.h5,t)
inherit(P.R,t)
inherit(P.bE,t)
inherit(P.cz,t)
inherit(P.D,t)
inherit(P.dS,t)
inherit(W.fU,t)
inherit(W.jX,t)
inherit(W.e_,t)
inherit(W.cY,t)
inherit(W.f2,t)
inherit(W.e2,t)
inherit(W.kO,t)
inherit(W.ev,t)
inherit(W.cf,t)
inherit(W.kJ,t)
inherit(W.fr,t)
inherit(P.kB,t)
inherit(B.c9,t)
inherit(L.c2,t)
inherit(A.f5,t)
inherit(T.ci,t)
inherit(X.en,t)
inherit(X.ed,t)
inherit(M.dp,t)
inherit(N.T,t)
inherit(E.iJ,t)
inherit(E.x,t)
inherit(A.M,t)
inherit(U.b,t)
inherit(Y.c_,t)
inherit(X.q,t)
inherit(G.J,t)
inherit(A.dl,t)
inherit(A.co,t)
inherit(A.iZ,t)
inherit(D.aJ,t)
inherit(Q.bI,t)
inherit(Q.d,t)
t=J.I
inherit(J.i0,t)
inherit(J.eS,t)
inherit(J.dB,t)
inherit(J.cu,t)
inherit(J.d4,t)
inherit(J.cv,t)
inherit(H.dH,t)
inherit(H.d6,t)
inherit(W.dn,t)
inherit(W.ec,t)
inherit(W.ee,t)
inherit(W.eA,t)
inherit(W.ek,t)
inherit(W.fX,t)
inherit(W.el,t)
inherit(W.N,t)
inherit(W.ig,t)
inherit(W.iE,t)
inherit(W.iF,t)
inherit(W.eB,t)
inherit(W.k0,t)
inherit(W.eC,t)
t=J.dB
inherit(J.iQ,t)
inherit(J.cF,t)
inherit(J.cw,t)
inherit(J.lE,J.cu)
t=J.d4
inherit(J.eR,t)
inherit(J.i1,t)
t=P.z
inherit(H.L,t)
inherit(H.dD,t)
inherit(H.bJ,t)
t=H.L
inherit(H.cx,t)
inherit(H.ic,t)
inherit(P.ko,t)
inherit(H.em,H.dD)
t=P.eQ
inherit(H.eX,t)
inherit(H.fi,t)
inherit(Q.jO,t)
t=H.cx
inherit(H.d5,t)
inherit(P.ie,t)
t=H.cQ
inherit(H.lg,t)
inherit(H.lh,t)
inherit(H.kr,t)
inherit(H.k8,t)
inherit(H.hM,t)
inherit(H.hN,t)
inherit(H.ky,t)
inherit(H.jF,t)
inherit(H.jG,t)
inherit(H.lj,t)
inherit(H.l6,t)
inherit(H.l7,t)
inherit(H.l8,t)
inherit(H.l9,t)
inherit(H.la,t)
inherit(H.jx,t)
inherit(H.i2,t)
inherit(H.l2,t)
inherit(H.l3,t)
inherit(H.l4,t)
inherit(P.jU,t)
inherit(P.jT,t)
inherit(P.jV,t)
inherit(P.jW,t)
inherit(P.kd,t)
inherit(P.kh,t)
inherit(P.ke,t)
inherit(P.kf,t)
inherit(P.kg,t)
inherit(P.kk,t)
inherit(P.kl,t)
inherit(P.kj,t)
inherit(P.ki,t)
inherit(P.jo,t)
inherit(P.jp,t)
inherit(P.jq,t)
inherit(P.jr,t)
inherit(P.k_,t)
inherit(P.jZ,t)
inherit(P.kA,t)
inherit(P.kU,t)
inherit(P.kD,t)
inherit(P.kE,t)
inherit(P.kF,t)
inherit(P.kp,t)
inherit(P.kY,t)
inherit(P.il,t)
inherit(P.h0,t)
inherit(P.h1,t)
inherit(W.kW,t)
inherit(W.kb,t)
inherit(W.iH,t)
inherit(W.iG,t)
inherit(W.kL,t)
inherit(W.kM,t)
inherit(W.kQ,t)
inherit(W.kS,t)
inherit(L.fH,t)
inherit(B.hL,t)
inherit(A.hZ,t)
inherit(A.hY,t)
inherit(T.j5,t)
inherit(G.hX,t)
inherit(A.kX,t)
inherit(D.jk,t)
inherit(D.jl,t)
inherit(D.jm,t)
inherit(X.lb,t)
inherit(X.lc,t)
inherit(X.ld,t)
inherit(X.li,t)
inherit(Q.jQ,t)
t=H.jY
inherit(H.db,t)
inherit(H.e3,t)
inherit(P.dU,P.eW)
inherit(H.fS,P.dU)
inherit(H.ei,H.fR)
inherit(H.fT,H.ei)
t=P.cq
inherit(H.f3,t)
inherit(H.i3,t)
inherit(H.jJ,t)
inherit(H.j4,t)
inherit(P.f4,t)
inherit(P.bQ,t)
inherit(P.aN,t)
inherit(P.ff,t)
inherit(P.cj,t)
inherit(P.bs,t)
inherit(P.fW,t)
t=H.jx
inherit(H.jj,t)
inherit(H.dj,t)
t=H.d6
inherit(H.iv,t)
inherit(H.eY,t)
t=H.eY
inherit(H.dI,t)
inherit(H.dJ,t)
inherit(H.dK,H.dI)
inherit(H.eZ,H.dK)
inherit(H.dL,H.dJ)
inherit(H.f_,H.dL)
t=H.eZ
inherit(H.iw,t)
inherit(H.ix,t)
t=H.f_
inherit(H.iy,t)
inherit(H.iz,t)
inherit(H.iA,t)
inherit(H.iB,t)
inherit(H.iC,t)
inherit(H.f0,t)
inherit(H.iD,t)
t=P.fm
inherit(P.k1,t)
inherit(P.k3,t)
inherit(P.kN,P.kz)
t=P.cD
inherit(P.dW,t)
inherit(W.k9,t)
inherit(P.dX,P.bw)
inherit(P.kx,P.dW)
inherit(P.kC,P.kT)
inherit(P.fp,H.l)
inherit(P.jb,P.jc)
inherit(P.kq,P.jb)
inherit(P.ks,P.kq)
inherit(P.eU,P.dM)
t=P.by
inherit(P.G,t)
inherit(P.P,t)
t=P.bQ
inherit(P.f7,t)
inherit(P.hI,t)
t=W.dn
inherit(W.a0,t)
inherit(W.ip,t)
inherit(W.dG,t)
inherit(W.fj,t)
inherit(W.kK,t)
t=W.a0
inherit(W.b7,t)
inherit(W.cn,t)
inherit(W.ej,t)
inherit(W.d9,t)
inherit(W.k4,t)
t=W.b7
inherit(W.X,t)
inherit(P.aA,t)
t=W.X
inherit(W.fD,t)
inherit(W.fE,t)
inherit(W.fK,t)
inherit(W.cP,t)
inherit(W.fO,t)
inherit(W.h2,t)
inherit(W.hw,t)
inherit(W.ex,t)
inherit(W.hG,t)
inherit(W.hK,t)
inherit(W.i5,t)
inherit(W.ia,t)
inherit(W.ik,t)
inherit(W.dF,t)
inherit(W.iq,t)
inherit(W.iI,t)
inherit(W.iL,t)
inherit(W.iO,t)
inherit(W.fa,t)
inherit(W.jd,t)
inherit(W.fc,t)
inherit(W.fe,t)
inherit(W.jv,t)
inherit(W.jw,t)
inherit(W.dT,t)
inherit(W.jA,t)
inherit(W.km,t)
inherit(W.cp,W.eA)
t=W.N
inherit(W.h3,t)
inherit(W.hA,t)
inherit(W.bH,t)
inherit(W.jh,t)
inherit(W.ji,t)
inherit(W.hx,W.ec)
inherit(W.ir,W.dG)
inherit(W.bX,W.bH)
inherit(W.be,P.eU)
inherit(W.eD,W.eB)
inherit(W.f1,W.eD)
inherit(W.k5,W.el)
inherit(W.eE,W.eC)
inherit(W.e1,W.eE)
inherit(W.k6,W.jX)
inherit(W.lS,W.k9)
inherit(W.ka,P.jn)
inherit(W.kP,W.e2)
t=P.aA
inherit(P.aL,t)
inherit(P.cm,t)
inherit(P.h6,t)
inherit(P.h7,t)
inherit(P.h8,t)
inherit(P.h9,t)
inherit(P.ha,t)
inherit(P.hb,t)
inherit(P.hc,t)
inherit(P.hd,t)
inherit(P.he,t)
inherit(P.hf,t)
inherit(P.hg,t)
inherit(P.hh,t)
inherit(P.hi,t)
inherit(P.hj,t)
inherit(P.hk,t)
inherit(P.hl,t)
inherit(P.hy,t)
inherit(P.im,t)
inherit(P.io,t)
inherit(P.iP,t)
inherit(P.dO,t)
inherit(P.ju,t)
inherit(P.jL,t)
inherit(P.dZ,t)
inherit(P.kG,t)
inherit(P.kH,t)
inherit(P.kI,t)
t=P.aL
inherit(P.fB,t)
inherit(P.hH,t)
inherit(P.js,t)
inherit(P.cE,t)
inherit(P.jK,t)
inherit(P.jB,P.cE)
t=B.c9
inherit(S.fC,t)
inherit(M.fI,t)
inherit(A.fQ,t)
inherit(M.fV,t)
inherit(V.fY,t)
inherit(U.hm,t)
inherit(N.i4,t)
inherit(F.iu,t)
inherit(G.iR,t)
inherit(Q.j3,t)
inherit(N.jf,t)
inherit(D.jy,t)
inherit(V.jz,t)
inherit(F.jS,t)
inherit(A.iN,A.f5)
inherit(L.a1,A.iN)
t=T.ci
inherit(O.fJ,t)
inherit(Y.hB,t)
inherit(Y.hC,t)
inherit(B.hE,t)
inherit(S.i6,t)
inherit(Z.ih,t)
inherit(S.ii,t)
inherit(U.ij,t)
inherit(E.it,t)
inherit(V.iM,t)
inherit(N.iT,t)
inherit(N.j2,t)
inherit(E.j6,t)
inherit(Y.j8,t)
inherit(L.j9,t)
inherit(S.ja,t)
inherit(Y.je,t)
inherit(R.jt,t)
inherit(U.jC,t)
inherit(E.jN,t)
inherit(M.jR,t)
t=L.c2
inherit(T.fL,t)
inherit(T.fN,t)
inherit(U.fZ,t)
inherit(Z.h_,t)
inherit(T.hD,t)
inherit(X.hF,t)
inherit(V.hJ,t)
inherit(Q.i7,t)
inherit(K.i8,t)
inherit(G.i9,t)
inherit(V.is,t)
inherit(E.iY,t)
inherit(K.j7,t)
inherit(N.jg,t)
inherit(N.jD,t)
inherit(Q.jM,t)
inherit(E.ey,E.iJ)
t=E.x
inherit(E.cN,t)
inherit(E.eb,t)
inherit(U.B,U.b)
inherit(R.iU,N.T)
t=R.iU
inherit(R.H,t)
inherit(R.w,t)
inherit(R.K,t)
inherit(R.ar,R.K)
t=Y.c_
inherit(Y.O,t)
inherit(Y.aw,t)
inherit(Y.y,t)
inherit(Y.eh,t)
inherit(Y.ap,t)
inherit(Y.bd,t)
inherit(Y.fP,t)
inherit(Y.dN,t)
inherit(Y.ew,t)
inherit(Y.f6,t)
t=Y.aw
inherit(Y.br,t)
inherit(Y.ao,t)
inherit(G.eg,G.J)
t=D.aJ
inherit(D.fk,t)
inherit(D.j1,t)
t=Q.bI
inherit(Q.fg,t)
inherit(Q.dV,t)
inherit(Q.jP,Q.fg)
inherit(Q.cG,Q.dV)
inherit(Q.fh,Q.cG)
mixin(H.dI,P.bv)
mixin(H.dK,H.eu)
mixin(H.dJ,P.bv)
mixin(H.dL,H.eu)
mixin(P.dM,P.bv)
mixin(P.dU,P.kR)
mixin(W.eA,W.fU)
mixin(W.eB,P.bv)
mixin(W.eD,W.cY)
mixin(W.eC,P.bv)
mixin(W.eE,W.cY)
mixin(A.f5,P.d3)
mixin(Q.fg,P.bv)
mixin(Q.dV,P.d3)})();(function constants(){C.l=W.cP.prototype
C.m=W.cp.prototype
C.v=J.I.prototype
C.a=J.cu.prototype
C.b=J.eR.prototype
C.w=J.eS.prototype
C.d=J.d4.prototype
C.e=J.cv.prototype
C.D=J.cw.prototype
C.q=J.iQ.prototype
C.j=W.fc.prototype
C.r=W.fe.prototype
C.k=J.cF.prototype
C.t=new P.iK()
C.u=new P.k2()
C.c=new P.kC()
C.n=new P.c3(0)
C.x=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.o=function(hooks) { return hooks; }
C.y=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.z=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.A=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.p=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.B=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.C=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.E=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.D])
C.F=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.G=makeConstList([])
C.h=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.D])
C.i=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.D])
C.H=H.aB("rr")
C.I=H.aB("rs")
C.f=H.aB("rt")
C.J=H.aB("ru")
C.K=H.aB("rv")
C.L=H.aB("rx")
C.M=H.aB("ry")
C.N=H.aB("rz")
C.O=H.aB("mX")
C.P=H.aB("bE")
C.Q=H.aB("D")
C.R=H.aB("rA")
C.S=H.aB("rB")
C.T=H.aB("rC")
C.U=H.aB("rD")
C.V=H.aB("c1")
C.W=H.aB("G")
C.X=H.aB("P")
C.Y=H.aB("by")})();(function staticFields(){$.n2="$cachedFunction"
$.n3="$cachedInvocation"
$.bS=0
$.dk=null
$.md=null
$.m0=null
$.nx=null
$.nF=null
$.kZ=null
$.l5=null
$.m1=null
$.dc=null
$.e4=null
$.e5=null
$.lW=!1
$.am=C.c
$.mt=0
$.c4=null
$.ln=null
$.mr=null
$.mq=null
$.mn=null
$.mm=null
$.ml=null
$.mo=null
$.mk=null
$.oa=null
$.ob=null
$.nY=null
$.nZ=null
$.nX=null
$.o0=null
$.o6=null
$.o5=null
$.oc=null
$.o8=null
$.o1=null
$.o4=null
$.o_=null
$.o3=null
$.o9=null
$.o2=null
$.o7=null
$.a7="accent"
$.a4="aspect1"
$.a8="aspect2"
$.ag="shoe1"
$.af="shoe2"
$.aa="cloak1"
$.ab="cloak2"
$.a9="cloak3"
$.a5="shirt1"
$.ae="shirt2"
$.ad="pants1"
$.ac="pants2"
$.W=1300
$.f=3
$.j=2
$.r=1
$.n=0.1
$.ox=null
$.cS=null
$.ou=null
$.dt=null
$.et=null
$.ho=null
$.os=null
$.my=null
$.oy=null
$.hp=null
$.lo=null
$.hv=null
$.ds=null
$.c7=null
$.ow=null
$.lp=null
$.lu=null
$.cW=null
$.ov=null
$.es=null
$.dq=null
$.aR=null
$.bi=null
$.cV=null
$.lt=null
$.aI=null
$.aF=null
$.mv=null
$.hu=null
$.cT=null
$.du=null
$.b9=null
$.cr=null
$.eq=null
$.bz=null
$.dv=null
$.aE=null
$.lr=null
$.ot=null
$.a2=null
$.aX=null
$.bh=null
$.aK=null
$.ht=null
$.aG=null
$.bT=null
$.bA=null
$.dr=null
$.c5=null
$.bB=null
$.lq=null
$.bV=null
$.er=null
$.mz=null
$.hn=null
$.b8=null
$.aW=null
$.aj=null
$.cR=null
$.cU=null
$.ls=null
$.hq=null
$.ep=null
$.mx=null
$.aQ=null
$.mB=null
$.mu=null
$.oA=null
$.eo=null
$.b1=null
$.c6=null
$.bU=null
$.dw=null
$.mw=null
$.mA=null
$.oz=null
$.hr=null
$.hs=null
$.cX=null
$.oI=null
$.oB=null
$.oC=null
$.oD=null
$.oE=null
$.oF=null
$.oG=null
$.oH=null
$.oK=null
$.oL=null
$.oM=null
$.oN=null
$.oO=null
$.oP=null
$.oJ=null
$.n0="JACK"
$.pI="PM"
$.pE="JS"
$.pD="HP"
$.pN="YD"
$.pK="SI"
$.pL="SU"
$.pF="ME"
$.pJ="RB"
$.pB="GN"
$.pG="MP"
$.pz="AR"
$.pH="PE"
$.pA="DP"
$.pM="WV"
$.pC="HB"
$.i="PLAYER1TAG"
$.bF="PLAYER2TAG"
$.m="DENIZENTAG"
$.k="CONSORTTAG"
$.v="CONSORTSOUNDTAG"
$.Z="MCGUFFINTAG"
$.S="TAGPHYSICALMCGUFFIN"
$.al="TAGWEAPON"
$.qg=null
$.qs=null
$.qc=null
$.qf=null
$.qj=null
$.qo=null
$.qm=null
$.qv=null
$.qu=null
$.qn=null
$.qx=null
$.qi=null
$.qw=null
$.qq=null
$.qp=null
$.qr=null
$.qe=null
$.qd=null
$.ql=null
$.qk=null
$.qh=null
$.qt=null
$.qF=13
$.Y=3
$.at=2
$.a_=1
$.p9=null
$.hV=null
$.mP=null
$.po=null
$.pl=null
$.p4=null
$.pk=null
$.p7=null
$.p5=null
$.pj=null
$.pr=null
$.p0=null
$.mJ=null
$.lw=null
$.ah=null
$.oZ=null
$.hU=null
$.ph=null
$.mO=null
$.lv=null
$.mI=null
$.p8=null
$.hR=null
$.d2=null
$.eG=null
$.ps=null
$.pq=null
$.pn=null
$.mR=null
$.mG=null
$.V=null
$.p6=null
$.lx=null
$.cZ=null
$.mU=null
$.aq=null
$.au=null
$.dA=null
$.Q=null
$.a3=null
$.eN=null
$.b4=null
$.ly=null
$.d1=null
$.eH=null
$.eK=null
$.dz=null
$.eJ=null
$.hW=null
$.a6=null
$.d_=null
$.bt=null
$.eL=null
$.b3=null
$.hO=null
$.eM=null
$.ce=null
$.hP=null
$.cc=null
$.bj=null
$.aS=null
$.hQ=null
$.aY=null
$.eI=null
$.ca=null
$.ay=null
$.hS=null
$.b6=null
$.eO=null
$.d0=null
$.b5=null
$.cs=null
$.aU=null
$.ba=null
$.aV=null
$.an=null
$.bD=null
$.ct=null
$.bC=null
$.cb=null
$.aT=null
$.ax=null
$.E=null
$.F=null
$.av=null
$.bb=null
$.bk=null
$.cd=null
$.oX=null
$.mS=null
$.p1=null
$.mH=null
$.mK=null
$.pm=null
$.oY=null
$.lz=null
$.mN=null
$.lC=null
$.lA=null
$.pe=null
$.dy=null
$.pc=null
$.pg=null
$.mT=null
$.pf=null
$.mF=null
$.pp=null
$.mQ=null
$.p2=null
$.mL=null
$.pd=null
$.mM=null
$.lB=null
$.pb=null
$.p3=null
$.pi=null
$.pa=null
$.hT=null
$.p_=null
$.c8="OWNER"
$.n8=null
$.qC=null
$.dR=null
$.cB=null
$.qB=null
$.cC=null
$.ck=null
$.bn=null
$.cA=null
$.dP=null
$.dQ=null
$.bG=null
$.aM=null
$.n9=!1
$.qD=null})();(function lazyInitializers(){lazy($,"mj","$get$mj",function(){return H.nC("_$dart_dartClosure")})
lazy($,"lG","$get$lG",function(){return H.nC("_$dart_js")})
lazy($,"mD","$get$mD",function(){return H.oV()})
lazy($,"mE","$get$mE",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.mt
$.mt=t+1
t="expando$key$"+t}return new P.h5(null,t,[P.P])})
lazy($,"nb","$get$nb",function(){return H.c0(H.jI({
toString:function(){return"$receiver$"}}))})
lazy($,"nc","$get$nc",function(){return H.c0(H.jI({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"nd","$get$nd",function(){return H.c0(H.jI(null))})
lazy($,"ne","$get$ne",function(){return H.c0(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ni","$get$ni",function(){return H.c0(H.jI(void 0))})
lazy($,"nj","$get$nj",function(){return H.c0(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ng","$get$ng",function(){return H.c0(H.nh(null))})
lazy($,"nf","$get$nf",function(){return H.c0(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"nl","$get$nl",function(){return H.c0(H.nh(void 0))})
lazy($,"nk","$get$nk",function(){return H.c0(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"lR","$get$lR",function(){return P.qJ()})
lazy($,"hz","$get$hz",function(){var t,s
t=P.bE
s=new P.bK(0,P.qI(),null,[t])
s.dq(null,t)
return s})
lazy($,"e6","$get$e6",function(){return[]})
lazy($,"mi","$get$mi",function(){return{}})
lazy($,"np","$get$np",function(){return P.eT(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"lV","$get$lV",function(){return P.mZ()})
lazy($,"ea","$get$ea",function(){return P.lI(P.P,L.c2)})
lazy($,"eF","$get$eF",function(){return P.lI(P.P,B.c9)})
lazy($,"mW","$get$mW",function(){return H.a([],[A.M])})
lazy($,"f9","$get$f9",function(){return P.lI(P.P,T.ci)})
lazy($,"mV","$get$mV",function(){return P.bl(null,null,null,G.J)})
lazy($,"lK","$get$lK",function(){return A.ef(255,0,255,255)})
lazy($,"aZ","$get$aZ",function(){return H.a([],[D.aJ])})})()
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
mangledGlobalNames:{P:"int",G:"double",by:"num",D:"String",c1:"bool",bE:"Null",R:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.c1,args:[[P.R,E.ey]]},{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.b7,args:[P.P]},{func:1,ret:P.c1,args:[W.b7,P.D,P.D,W.e_]},{func:1,v:true,args:[P.as],opt:[P.cz]},{func:1,v:true,args:[,P.cz]},{func:1,ret:P.D,args:[P.P]},{func:1,ret:W.d9,args:[P.P]},{func:1,ret:P.P,args:[P.aD,P.aD]}],
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
setOrUpdateInterceptorsByTag({DOMImplementation:J.I,MediaError:J.I,MediaSession:J.I,PositionError:J.I,Range:J.I,SVGAnimatedLength:J.I,SVGAnimatedLengthList:J.I,SVGAnimatedNumber:J.I,SVGAnimatedNumberList:J.I,SVGAnimatedString:J.I,SQLError:J.I,ArrayBuffer:H.dH,ArrayBufferView:H.d6,DataView:H.iv,Float32Array:H.iw,Float64Array:H.ix,Int16Array:H.iy,Int32Array:H.iz,Int8Array:H.iA,Uint16Array:H.iB,Uint32Array:H.iC,Uint8ClampedArray:H.f0,CanvasPixelArray:H.f0,Uint8Array:H.iD,HTMLBRElement:W.X,HTMLCanvasElement:W.X,HTMLContentElement:W.X,HTMLDListElement:W.X,HTMLDataListElement:W.X,HTMLDetailsElement:W.X,HTMLDialogElement:W.X,HTMLDivElement:W.X,HTMLHRElement:W.X,HTMLHeadElement:W.X,HTMLHeadingElement:W.X,HTMLHtmlElement:W.X,HTMLImageElement:W.X,HTMLLIElement:W.X,HTMLLabelElement:W.X,HTMLLegendElement:W.X,HTMLMenuElement:W.X,HTMLMenuItemElement:W.X,HTMLMeterElement:W.X,HTMLModElement:W.X,HTMLOListElement:W.X,HTMLOptGroupElement:W.X,HTMLOptionElement:W.X,HTMLParagraphElement:W.X,HTMLPictureElement:W.X,HTMLPreElement:W.X,HTMLProgressElement:W.X,HTMLQuoteElement:W.X,HTMLScriptElement:W.X,HTMLShadowElement:W.X,HTMLSourceElement:W.X,HTMLStyleElement:W.X,HTMLTableCaptionElement:W.X,HTMLTableCellElement:W.X,HTMLTableDataCellElement:W.X,HTMLTableHeaderCellElement:W.X,HTMLTableColElement:W.X,HTMLTitleElement:W.X,HTMLTrackElement:W.X,HTMLUListElement:W.X,HTMLUnknownElement:W.X,HTMLDirectoryElement:W.X,HTMLFontElement:W.X,HTMLFrameElement:W.X,HTMLMarqueeElement:W.X,HTMLElement:W.X,HTMLAnchorElement:W.fD,HTMLAreaElement:W.fE,HTMLBaseElement:W.fK,Blob:W.ec,HTMLBodyElement:W.cP,HTMLButtonElement:W.fO,CDATASection:W.cn,CharacterData:W.cn,Comment:W.cn,ProcessingInstruction:W.cn,Text:W.cn,Client:W.ee,WindowClient:W.ee,CSSStyleDeclaration:W.cp,MSStyleCSSProperties:W.cp,CSS2Properties:W.cp,DocumentFragment:W.ej,ShadowRoot:W.ej,DOMError:W.ek,FileError:W.ek,DOMException:W.fX,DOMRectReadOnly:W.el,Element:W.b7,HTMLEmbedElement:W.h2,ErrorEvent:W.h3,AnimationEvent:W.N,AnimationPlayerEvent:W.N,ApplicationCacheErrorEvent:W.N,AutocompleteErrorEvent:W.N,BeforeInstallPromptEvent:W.N,BeforeUnloadEvent:W.N,BlobEvent:W.N,ClipboardEvent:W.N,CloseEvent:W.N,CustomEvent:W.N,DeviceLightEvent:W.N,DeviceMotionEvent:W.N,DeviceOrientationEvent:W.N,ExtendableEvent:W.N,ExtendableMessageEvent:W.N,FetchEvent:W.N,FontFaceSetLoadEvent:W.N,GamepadEvent:W.N,HashChangeEvent:W.N,InstallEvent:W.N,MediaEncryptedEvent:W.N,MediaKeyMessageEvent:W.N,MediaQueryListEvent:W.N,MediaStreamEvent:W.N,MediaStreamTrackEvent:W.N,MessageEvent:W.N,MIDIConnectionEvent:W.N,MIDIMessageEvent:W.N,NotificationEvent:W.N,PageTransitionEvent:W.N,PopStateEvent:W.N,PresentationConnectionAvailableEvent:W.N,PresentationConnectionCloseEvent:W.N,ProgressEvent:W.N,PromiseRejectionEvent:W.N,PushEvent:W.N,RelatedEvent:W.N,RTCDataChannelEvent:W.N,RTCDTMFToneChangeEvent:W.N,RTCIceCandidateEvent:W.N,RTCPeerConnectionIceEvent:W.N,SecurityPolicyViolationEvent:W.N,ServicePortConnectEvent:W.N,ServiceWorkerMessageEvent:W.N,SpeechRecognitionEvent:W.N,StorageEvent:W.N,SyncEvent:W.N,TrackEvent:W.N,TransitionEvent:W.N,WebKitTransitionEvent:W.N,ResourceProgressEvent:W.N,USBConnectionEvent:W.N,IDBVersionChangeEvent:W.N,AudioProcessingEvent:W.N,OfflineAudioCompletionEvent:W.N,WebGLContextEvent:W.N,Event:W.N,InputEvent:W.N,MessagePort:W.dn,EventTarget:W.dn,HTMLFieldSetElement:W.hw,File:W.hx,HTMLFormElement:W.ex,GeofencingEvent:W.hA,HTMLIFrameElement:W.hG,HTMLInputElement:W.hK,HTMLKeygenElement:W.i5,HTMLLinkElement:W.ia,Location:W.ig,HTMLMapElement:W.ik,HTMLAudioElement:W.dF,HTMLMediaElement:W.dF,HTMLVideoElement:W.dF,MediaStream:W.ip,HTMLMetaElement:W.iq,MIDIOutput:W.ir,MIDIInput:W.dG,MIDIPort:W.dG,MouseEvent:W.bX,DragEvent:W.bX,PointerEvent:W.bX,WheelEvent:W.bX,Navigator:W.iE,NavigatorUserMediaError:W.iF,Document:W.a0,HTMLDocument:W.a0,XMLDocument:W.a0,Node:W.a0,NodeList:W.f1,RadioNodeList:W.f1,HTMLObjectElement:W.iI,HTMLOutputElement:W.iL,HTMLParamElement:W.iO,HTMLSelectElement:W.fa,HTMLSlotElement:W.jd,HTMLSpanElement:W.fc,SpeechRecognitionError:W.jh,SpeechSynthesisEvent:W.ji,HTMLTableElement:W.fe,HTMLTableRowElement:W.jv,HTMLTableSectionElement:W.jw,HTMLTemplateElement:W.dT,HTMLTextAreaElement:W.jA,CompositionEvent:W.bH,FocusEvent:W.bH,KeyboardEvent:W.bH,TextEvent:W.bH,TouchEvent:W.bH,SVGZoomEvent:W.bH,UIEvent:W.bH,Window:W.fj,DOMWindow:W.fj,Attr:W.d9,ClientRect:W.k0,DocumentType:W.k4,DOMRect:W.k5,HTMLFrameSetElement:W.km,NamedNodeMap:W.e1,MozNamedAttrMap:W.e1,ServiceWorker:W.kK,SVGAElement:P.fB,SVGAnimateElement:P.cm,SVGAnimateMotionElement:P.cm,SVGAnimateTransformElement:P.cm,SVGAnimationElement:P.cm,SVGSetElement:P.cm,SVGFEBlendElement:P.h6,SVGFEColorMatrixElement:P.h7,SVGFEComponentTransferElement:P.h8,SVGFECompositeElement:P.h9,SVGFEConvolveMatrixElement:P.ha,SVGFEDiffuseLightingElement:P.hb,SVGFEDisplacementMapElement:P.hc,SVGFEFloodElement:P.hd,SVGFEGaussianBlurElement:P.he,SVGFEImageElement:P.hf,SVGFEMergeElement:P.hg,SVGFEMorphologyElement:P.hh,SVGFEOffsetElement:P.hi,SVGFESpecularLightingElement:P.hj,SVGFETileElement:P.hk,SVGFETurbulenceElement:P.hl,SVGFilterElement:P.hy,SVGCircleElement:P.aL,SVGClipPathElement:P.aL,SVGDefsElement:P.aL,SVGEllipseElement:P.aL,SVGForeignObjectElement:P.aL,SVGGElement:P.aL,SVGGeometryElement:P.aL,SVGLineElement:P.aL,SVGPathElement:P.aL,SVGPolygonElement:P.aL,SVGPolylineElement:P.aL,SVGRectElement:P.aL,SVGSwitchElement:P.aL,SVGGraphicsElement:P.aL,SVGImageElement:P.hH,SVGMarkerElement:P.im,SVGMaskElement:P.io,SVGPatternElement:P.iP,SVGScriptElement:P.dO,SVGDescElement:P.aA,SVGDiscardElement:P.aA,SVGFEDistantLightElement:P.aA,SVGFEFuncAElement:P.aA,SVGFEFuncBElement:P.aA,SVGFEFuncGElement:P.aA,SVGFEFuncRElement:P.aA,SVGFEMergeNodeElement:P.aA,SVGFEPointLightElement:P.aA,SVGFESpotLightElement:P.aA,SVGMetadataElement:P.aA,SVGStopElement:P.aA,SVGStyleElement:P.aA,SVGTitleElement:P.aA,SVGComponentTransferFunctionElement:P.aA,SVGElement:P.aA,SVGSVGElement:P.js,SVGSymbolElement:P.ju,SVGTSpanElement:P.cE,SVGTextElement:P.cE,SVGTextPositioningElement:P.cE,SVGTextContentElement:P.cE,SVGTextPathElement:P.jB,SVGUseElement:P.jK,SVGViewElement:P.jL,SVGLinearGradientElement:P.dZ,SVGRadialGradientElement:P.dZ,SVGGradientElement:P.dZ,SVGCursorElement:P.kG,SVGFEDropShadowElement:P.kH,SVGMPathElement:P.kI})
setOrUpdateLeafTags({DOMImplementation:true,MediaError:true,MediaSession:true,PositionError:true,Range:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,Client:true,WindowClient:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,Element:false,HTMLEmbedElement:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MessagePort:true,EventTarget:false,HTMLFieldSetElement:true,File:true,HTMLFormElement:true,GeofencingEvent:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLAudioElement:true,HTMLMediaElement:true,HTMLVideoElement:true,MediaStream:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Navigator:true,NavigatorUserMediaError:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,HTMLSelectElement:true,HTMLSlotElement:true,HTMLSpanElement:true,SpeechRecognitionError:true,SpeechSynthesisEvent:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,SVGZoomEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DocumentType:true,DOMRect:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGPatternElement:true,SVGScriptElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
H.eY.$nativeSuperclassTag="ArrayBufferView"
H.dI.$nativeSuperclassTag="ArrayBufferView"
H.dK.$nativeSuperclassTag="ArrayBufferView"
H.eZ.$nativeSuperclassTag="ArrayBufferView"
H.dJ.$nativeSuperclassTag="ArrayBufferView"
H.dL.$nativeSuperclassTag="ArrayBufferView"
H.f_.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.nH(X.nI(),b)},[])
else (function(b){H.nH(X.nI(),b)})([])})})()
//# sourceMappingURL=stat_summary.dart.js.map
