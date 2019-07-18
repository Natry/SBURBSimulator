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
a[c]=function(){a[c]=function(){H.I2(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.v4"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.v4"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.v4(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={u5:function u5(a){this.a=a},
rE:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
x3:function(a,b,c,d){var t=new H.oX(a,b,c,[d])
t.f2(a,b,c,d)
return t},
dx:function(a,b,c,d){if(!!J.aq(a).$ist)return new H.h3(a,b,[c,d])
return new H.hD(a,b,[c,d])},
ht:function(){return new P.da("No element")},
F8:function(){return new P.da("Too many elements")},
wD:function(){return new P.da("Too few elements")},
jX:function(a,b,c,d){if(c-b<=32)H.Gr(a,b,c,d)
else H.Gq(a,b,c,d)},
Gr:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bh(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cy(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
Gq:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.al(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.al(a3+a4,2)
p=q-t
o=q+t
n=J.bh(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.cy(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cy(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cy(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cy(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cy(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cy(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cy(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cy(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cy(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.n(a2,a3))
n.i(a2,o,n.n(a2,a4))
g=a3+1
f=a4-1
if(J.b1(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.aq(c)
if(b.P(c,0))continue
if(b.a2(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dF(c)
if(b.aC(c,0)){--f
continue}else{a=f-1
if(b.a2(c,0)){n.i(a2,e,n.n(a2,g))
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
n.i(a2,g,d)}++g}else if(J.cy(a5.$2(d,j),0))for(;!0;)if(J.cy(a5.$2(n.n(a2,f),j),0)){--f
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
H.jX(a2,a3,g-2,a5)
H.jX(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.b1(a5.$2(n.n(a2,g),l),0);)++g
for(;J.b1(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.b1(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.b1(a5.$2(d,j),0))for(;!0;)if(J.b1(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eh(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jX(a2,g,f,a5)}else H.jX(a2,g,f,a5)},
l4:function l4(a){this.a=a},
t:function t(){},
ey:function ey(){},
oX:function oX(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ez:function ez(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hD:function hD(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
h3:function h3(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jF:function jF(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eB:function eB(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eP:function eP(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
k8:function k8(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iI:function iI(){},
pn:function pn(){},
hY:function hY(){},
ku:function(a,b){var t=a.bs(b)
if(!u.globalState.d.cy)u.globalState.f.bD()
return t},
y9:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aq(s).$isp)throw H.k(P.dI("Arguments to main must be a List: "+H.B(s)))
u.globalState=new H.qF(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vZ()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qb(P.ua(null,H.eT),0)
r=P.C
s.z=new H.w(0,null,null,null,null,null,0,[r,H.fC])
s.ch=new H.w(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qE()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.A6,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.GO)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a1(null,null,null,r)
p=new H.ft(0,null,!1)
o=new H.fC(s,new H.w(0,null,null,null,null,null,0,[r,H.ft]),q,u.createNewIsolate(),p,new H.dJ(H.rT()),new H.dJ(H.rT()),!1,!1,[],P.a1(null,null,null,null),null,null,!1,!0,P.a1(null,null,null,null))
q.h(0,0)
o.dg(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fI(a,{func:1,args:[,]}))o.bs(new H.rU(t,a))
else if(H.fI(a,{func:1,args:[,,]}))o.bs(new H.rV(t,a))
else o.bs(a)
u.globalState.f.bD()},
GO:function(a){var t=P.hy(["command","print","msg",a])
return new H.dE(!0,P.i7(null,P.C)).ax(t)},
A8:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.A9()
return},
A9:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.k(new P.V("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.k(new P.V('Cannot extract URI from "'+t+'"'))},
A6:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eS(!0,[]).aX(b.data)
s=J.bh(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eS(!0,[]).aX(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eS(!0,[]).aX(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.C
j=P.a1(null,null,null,k)
i=new H.ft(0,null,!1)
h=new H.fC(s,new H.w(0,null,null,null,null,null,0,[k,H.ft]),j,u.createNewIsolate(),i,new H.dJ(H.rT()),new H.dJ(H.rT()),!1,!1,[],P.a1(null,null,null,null),null,null,!1,!0,P.a1(null,null,null,null))
j.h(0,0)
h.dg(0,i)
u.globalState.f.a.aK(0,new H.eT(h,new H.mx(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bD()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fL(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bD()
break
case"close":u.globalState.ch.am(0,$.$get$w_().n(0,a))
a.terminate()
u.globalState.f.bD()
break
case"log":H.A5(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hy(["command","print","msg",t])
k=new H.dE(!0,P.i7(null,P.C)).ax(k)
s.toString
self.postMessage(k)}else P.fJ(s.n(t,"msg"))
break
case"error":throw H.k(s.n(t,"msg"))}},
A5:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hy(["command","log","msg",a])
r=new H.dE(!0,P.i7(null,P.C)).ax(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.bW(q)
t=H.cx(q)
s=P.lC(t)
throw H.k(s)}},
A7:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wS=$.wS+("_"+s)
$.wT=$.wT+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fL(f,["spawned",new H.fD(s,r),q,t.r])
r=new H.my(a,b,c,d,t)
if(e===!0){t.dX(q,q)
u.globalState.f.a.aK(0,new H.eT(t,r,"start isolate"))}else r.$0()},
Gy:function(a,b){var t=new H.pe(!0,!1,null)
t.f3(a,b)
return t},
H6:function(a){return new H.eS(!0,[]).aX(new H.dE(!1,P.i7(null,P.C)).ax(a))},
rU:function rU(a,b){this.a=a
this.b=b},
rV:function rV(a,b){this.a=a
this.b=b},
qF:function qF(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
qA:function qA(a,b){this.a=a
this.b=b},
qb:function qb(a,b){this.a=a
this.b=b},
qc:function qc(a){this.a=a},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
qE:function qE(){},
mx:function mx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
my:function my(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pY:function pY(){},
fD:function fD(b,a){this.b=b
this.a=a},
qH:function qH(a,b){this.a=a
this.b=b},
ib:function ib(b,c,a){this.b=b
this.c=c
this.a=a},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
pe:function pe(a,b,c){this.a=a
this.b=b
this.c=c},
pf:function pf(a,b){this.a=a
this.b=b},
pg:function pg(a,b){this.a=a
this.b=b},
dJ:function dJ(a){this.a=a},
dE:function dE(a,b){this.a=a
this.b=b},
eS:function eS(a,b){this.a=a
this.b=b},
za:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=a.gaN(a)
s=P.d6(t,!0,H.ax(t,"o",0))
t=s.length
q=0
while(!0){p=s.length
if(!(q<p)){r=!0
break}o=s[q]
if(typeof o!=="string"){r=!1
break}p===t||(0,H.bV)(s);++q}if(r){n={}
for(m=!1,l=null,k=0,q=0;q<s.length;s.length===p||(0,H.bV)(s),++q){o=s[q]
j=a.n(0,o)
if(!J.b1(o,"__proto__")){if(!n.hasOwnProperty(o))++k
n[o]=j}else{l=j
m=!0}}if(m)return new H.l9(l,k+1,n,s,[b,c])
return new H.fZ(k,n,s,[b,c])}return new H.l8(P.Fa(a,null,null),[b,c])},
zb:function(){throw H.k(new P.V("Cannot modify unmodifiable Map"))},
HG:function(a){return u.types[a]},
y4:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aq(a).$isaH},
B:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cz(a)
if(typeof t!=="string")throw H.k(H.bv(a))
return t},
G0:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.o6(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eD:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
uu:function(a,b){if(b==null)throw H.k(new P.bP(a,null,null))
return b.$1(a)},
fr:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.uu(a,c)
if(3>=t.length)return H.v(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.uu(a,c)}if(b<2||b>36)throw H.k(P.bH(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a4(q,o)|32)>r)return H.uu(a,c)}return parseInt(a,b)},
wQ:function(a,b){return b.$1(a)},
wU:function(a,b){var t,s
H.Hr(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wQ(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.rZ(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wQ(a,b)}return t},
nZ:function(a){var t,s,r,q,p,o,n,m
t=J.aq(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.S||!!J.aq(a).$iseM){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a4(q,0)===36)q=C.c.af(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.rO(H.ky(a),0,null),u.mangledGlobalNames)},
nY:function(a){return"Instance of '"+H.nZ(a)+"'"},
Fy:function(){if(!!self.location)return self.location.href
return},
wP:function(a){var t,s,r,q,p
t=J.cn(a)
if(typeof t!=="number")return t.eB()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
FD:function(a){var t,s,r,q
t=H.a([],[P.C])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bV)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.bv(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aU(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.k(H.bv(q))}return H.wP(t)},
wW:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bV)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.bv(q))
if(q<0)throw H.k(H.bv(q))
if(q>65535)return H.FD(a)}return H.wP(a)},
FE:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.eB()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hO:function(a){var t
if(typeof a!=="number")return H.ai(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aU(t,10))>>>0,56320|t&1023)}}throw H.k(P.bH(a,0,1114111,null,null))},
d0:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
wR:function(a){return a.b?H.d0(a).getUTCFullYear()+0:H.d0(a).getFullYear()+0},
uw:function(a){return a.b?H.d0(a).getUTCMonth()+1:H.d0(a).getMonth()+1},
uv:function(a){return a.b?H.d0(a).getUTCDate()+0:H.d0(a).getDate()+0},
Fz:function(a){return a.b?H.d0(a).getUTCHours()+0:H.d0(a).getHours()+0},
FB:function(a){return a.b?H.d0(a).getUTCMinutes()+0:H.d0(a).getMinutes()+0},
FC:function(a){return a.b?H.d0(a).getUTCSeconds()+0:H.d0(a).getSeconds()+0},
FA:function(a){return a.b?H.d0(a).getUTCMilliseconds()+0:H.d0(a).getMilliseconds()+0},
ux:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.bv(a))
return a[b]},
wV:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.bv(a))
a[b]=c},
ai:function(a){throw H.k(H.bv(a))},
v:function(a,b){if(a==null)J.cn(a)
throw H.k(H.c8(a,b))},
c8:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cW(!0,b,"index",null)
t=J.cn(a)
if(!(b<0)){if(typeof t!=="number")return H.ai(t)
s=b>=t}else s=!0
if(s)return P.bx(b,a,"index",null,t)
return P.jU(b,"index",null)},
Hw:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cW(!0,a,"start",null)
if(a<0||a>c)return new P.eE(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cW(!0,b,"end",null)
if(b<a||b>c)return new P.eE(a,c,!0,b,"end","Invalid value")}return new P.cW(!0,b,"end",null)},
bv:function(a){return new P.cW(!0,a,null,null)},
kw:function(a){if(typeof a!=="number")throw H.k(H.bv(a))
return a},
v3:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(H.bv(a))
return a},
Hr:function(a){if(typeof a!=="string")throw H.k(H.bv(a))
return a},
k:function(a){var t
if(a==null)a=new P.fo()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.yb})
t.name=""}else t.toString=H.yb
return t},
yb:function(){return J.cz(this.dartException)},
b0:function(a){throw H.k(a)},
bV:function(a){throw H.k(new P.bM(a))},
dV:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pk(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pl:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
xf:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
u7:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mR(a,s,t?null:b.receiver)},
bW:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.rW(a)
if(a==null)return
if(a instanceof H.hc)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aU(r,16)&8191)===10)switch(q){case 438:return t.$1(H.u7(H.B(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.B(s)+" (Error "+q+")"
return t.$1(new H.jN(p,null))}}if(a instanceof TypeError){o=$.$get$x9()
n=$.$get$xa()
m=$.$get$xb()
l=$.$get$xc()
k=$.$get$xg()
j=$.$get$xh()
i=$.$get$xe()
$.$get$xd()
h=$.$get$xj()
g=$.$get$xi()
f=o.aF(s)
if(f!=null)return t.$1(H.u7(s,f))
else{f=n.aF(s)
if(f!=null){f.method="call"
return t.$1(H.u7(s,f))}else{f=m.aF(s)
if(f==null){f=l.aF(s)
if(f==null){f=k.aF(s)
if(f==null){f=j.aF(s)
if(f==null){f=i.aF(s)
if(f==null){f=l.aF(s)
if(f==null){f=h.aF(s)
if(f==null){f=g.aF(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jN(s,f==null?null:f.method))}}return t.$1(new H.pm(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.k0()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cW(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.k0()
return a},
cx:function(a){var t
if(a instanceof H.hc)return a.b
if(a==null)return new H.kp(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kp(a,null)},
HS:function(a){if(a==null||typeof a!='object')return J.dH(a)
else return H.eD(a)},
y1:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
HN:function(a,b,c,d,e,f,g){switch(c){case 0:return H.ku(b,new H.rJ(a))
case 1:return H.ku(b,new H.rK(a,d))
case 2:return H.ku(b,new H.rL(a,d,e))
case 3:return H.ku(b,new H.rM(a,d,e,f))
case 4:return H.ku(b,new H.rN(a,d,e,f,g))}throw H.k(P.lC("Unsupported number of arguments for wrapped closure"))},
dq:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.HN)
a.$identity=t
return t},
z6:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aq(c).$isp){t.$reflectionInfo=c
r=H.G0(t).r}else r=c
q=d?Object.create(new H.ow().constructor.prototype):Object.create(new H.fS(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dK
$.dK=J.eg(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.vt(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.HG,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.vq:H.t2
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.k("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.vt(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
z3:function(a,b,c,d){var t=H.t2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
vt:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.z5(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.z3(s,!q,t,b)
if(s===0){q=$.dK
$.dK=J.eg(q,1)
o="self"+H.B(q)
q="return function(){var "+o+" = this."
p=$.fT
if(p==null){p=H.kY("self")
$.fT=p}return new Function(q+H.B(p)+";return "+o+"."+H.B(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dK
$.dK=J.eg(q,1)
n+=H.B(q)
q="return function("+n+"){return this."
p=$.fT
if(p==null){p=H.kY("self")
$.fT=p}return new Function(q+H.B(p)+"."+H.B(t)+"("+n+");}")()},
z4:function(a,b,c,d){var t,s
t=H.t2
s=H.vq
switch(b?-1:a){case 0:throw H.k(new H.ob("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
z5:function(a,b){var t,s,r,q,p,o,n,m
t=H.z2()
s=$.vp
if(s==null){s=H.kY("receiver")
$.vp=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.z4(q,!o,r,b)
if(q===1){s="return function(){return this."+H.B(t)+"."+H.B(r)+"(this."+H.B(s)+");"
o=$.dK
$.dK=J.eg(o,1)
return new Function(s+H.B(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.B(t)+"."+H.B(r)+"(this."+H.B(s)+", "+m+");"
o=$.dK
$.dK=J.eg(o,1)
return new Function(s+H.B(o)+"}")()},
v4:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aq(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.z6(a,b,t,!!d,e,f)},
t2:function(a){return a.a},
vq:function(a){return a.c},
z2:function(){var t=$.fT
if(t==null){t=H.kY("self")
$.fT=t}return t},
kY:function(a){var t,s,r,q,p
t=new H.fS("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
HV:function(a,b){var t=J.bh(b)
throw H.k(H.vs(H.nZ(a),t.K(b,3,t.gm(b))))},
kA:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aq(a)[b]
else t=!0
if(t)return a
H.HV(a,b)},
y0:function(a){var t=J.aq(a)
return"$S" in t?t.$S():null},
fI:function(a,b){var t
if(a==null)return!1
t=H.y0(a)
return t==null?!1:H.v7(t,b)},
vs:function(a,b){return new H.l2("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
I2:function(a){throw H.k(new P.ll(a))},
rT:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
y2:function(a){return u.getIsolateTag(a)},
c3:function(a){return new H.dW(a,null)},
a:function(a,b){a.$ti=b
return a},
ky:function(a){if(a==null)return
return a.$ti},
y3:function(a,b){return H.v9(a["$as"+H.B(b)],H.ky(a))},
ax:function(a,b,c){var t=H.y3(a,b)
return t==null?null:t[c]},
Q:function(a,b){var t=H.ky(a)
return t==null?null:t[b]},
dG:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.rO(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.B(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dG(t,b)
return H.Hb(a,b)}return"unknown-reified-type"},
Hb:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dG(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dG(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dG(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.HE(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dG(l[j],b)+(" "+H.B(j))}q+="}"}return"("+q+") => "+t},
rO:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.ce("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.N=p+", "
o=a[s]
if(o!=null)q=!1
p=t.N+=H.dG(o,c)}return q?"":"<"+t.A(0)+">"},
kz:function(a){var t,s
if(a instanceof H.f2){t=H.y0(a)
if(t!=null)return H.dG(t,null)}s=J.aq(a).constructor.builtin$cls
if(a==null)return s
return s+H.rO(a.$ti,0,null)},
v9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dZ:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ky(a)
s=J.aq(a)
if(s[b]==null)return!1
return H.xX(H.v9(s[d],t),c)},
I1:function(a,b,c,d){if(a==null)return a
if(H.dZ(a,b,c,d))return a
throw H.k(H.vs(H.nZ(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.rO(c,0,null),u.mangledGlobalNames)))},
xX:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d4(a[s],b[s]))return!1
return!0},
eV:function(a,b,c){return a.apply(b,H.y3(b,c))},
Hs:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ad"||b.builtin$cls==="d7"
if(b==null)return!0
t=H.ky(a)
a=J.aq(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.v7(r.apply(a,null),b)}return H.d4(s,b)},
d4:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d7")return!0
if('func' in b)return H.v7(a,b)
if('func' in a)return b.builtin$cls==="I8"||b.builtin$cls==="ad"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dG(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.xX(H.v9(o,t),r)},
xW:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.d4(t,p)||H.d4(p,t)))return!1}return!0},
Hi:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.d4(p,o)||H.d4(o,p)))return!1}return!0},
v7:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.d4(t,s)||H.d4(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.xW(r,q,!1))return!1
if(!H.xW(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d4(i,h)||H.d4(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d4(i,h)||H.d4(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d4(i,h)||H.d4(h,i)))return!1}}return H.Hi(a.named,b.named)},
Ik:function(a){var t=$.v5
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
Ij:function(a){return H.eD(a)},
Ii:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
HO:function(a){var t,s,r,q,p,o
t=$.v5.$1(a)
s=$.rB[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rI[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xV.$2(a,t)
if(t!=null){s=$.rB[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rI[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.v8(r)
$.rB[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rI[t]=r
return r}if(p==="-"){o=H.v8(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.y5(a,r)
if(p==="*")throw H.k(new P.eL(t))
if(u.leafTags[t]===true){o=H.v8(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.y5(a,r)},
y5:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rP(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
v8:function(a){return J.rP(a,!1,null,!!a.$isaH)},
HQ:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rP(t,!1,null,!!t.$isaH)
else return J.rP(t,c,null,null)},
HL:function(){if(!0===$.v6)return
$.v6=!0
H.HM()},
HM:function(){var t,s,r,q,p,o,n,m
$.rB=Object.create(null)
$.rI=Object.create(null)
H.HK()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.y6.$1(p)
if(o!=null){n=H.HQ(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
HK:function(){var t,s,r,q,p,o,n
t=C.T()
t=H.fH(C.U,H.fH(C.V,H.fH(C.x,H.fH(C.x,H.fH(C.X,H.fH(C.W,H.fH(C.Y(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.v5=new H.rF(p)
$.xV=new H.rG(o)
$.y6=new H.rH(n)},
fH:function(a,b){return a(b)||b},
u2:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.k(new P.bP("Illegal RegExp pattern ("+String(q)+")",a,null))},
I_:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
ya:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hu){q=b.gdG()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.b0(H.bv(b))
throw H.k("String.replaceAll(Pattern) UNIMPLEMENTED")}},
Hg:function(a){return a},
I0:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.aV(0,a),t=new H.kd(t.a,t.b,t.c,null),s=0,r="";t.F();){q=t.d
p=q.b
o=p.index
r=r+H.B(H.xM().$1(C.c.K(a,s,o)))+H.B(c.$1(q))
s=o+p[0].length}t=r+H.B(H.xM().$1(C.c.af(a,s)))
return t.charCodeAt(0)==0?t:t},
l8:function l8(a,$ti){this.a=a
this.$ti=$ti},
l7:function l7(){},
fZ:function fZ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
l9:function l9(d,a,b,c,$ti){var _=this
_.d=d
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
o6:function o6(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pk:function pk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jN:function jN(a,b){this.a=a
this.b=b},
mR:function mR(a,b,c){this.a=a
this.b=b
this.c=c},
pm:function pm(a){this.a=a},
hc:function hc(a,b){this.a=a
this.b=b},
rW:function rW(a){this.a=a},
kp:function kp(a,b){this.a=a
this.b=b},
rJ:function rJ(a){this.a=a},
rK:function rK(a,b){this.a=a
this.b=b},
rL:function rL(a,b,c){this.a=a
this.b=b
this.c=c},
rM:function rM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rN:function rN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f2:function f2(){},
p2:function p2(){},
ow:function ow(){},
fS:function fS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l2:function l2(a){this.a=a},
ob:function ob(a){this.a=a},
dW:function dW(a,b){this.a=a
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
mQ:function mQ(a){this.a=a},
mP:function mP(a){this.a=a},
n_:function n_(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
n0:function n0(a,$ti){this.a=a
this.$ti=$ti},
n1:function n1(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rF:function rF(a){this.a=a},
rG:function rG(a){this.a=a},
rH:function rH(a){this.a=a},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kn:function kn(a,b){this.a=a
this.b=b},
pS:function pS(a,b,c){this.a=a
this.b=b
this.c=c},
kd:function kd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function r_(a,b,c){this.a=a
this.b=b
this.c=c},
r0:function r0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cD:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.dI("Invalid length "+H.B(a)))
return a},
xJ:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dI("Invalid view offsetInBytes "+H.B(b)))},
xL:function(a){return a},
Fw:function(a){return new Int8Array(H.xL(a))},
cS:function(a,b,c){H.xJ(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
H5:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aC()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.k(H.Hw(a,b,c))
return b},
fm:function fm(){},
eC:function eC(){},
no:function no(){},
jI:function jI(){},
hH:function hH(){},
hJ:function hJ(){},
hL:function hL(){},
hI:function hI(){},
hK:function hK(){},
hM:function hM(){},
np:function np(){},
nq:function nq(){},
nr:function nr(){},
ns:function ns(){},
nt:function nt(){},
nu:function nu(){},
nv:function nv(){},
jJ:function jJ(){},
fn:function fn(){},
HE:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
HU:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aq:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jA.prototype
return J.jz.prototype}if(typeof a=="string")return J.ew.prototype
if(a==null)return J.mN.prototype
if(typeof a=="boolean")return J.mM.prototype
if(a.constructor==Array)return J.ev.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ex.prototype
return a}if(a instanceof P.ad)return a
return J.rC(a)},
rP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
rC:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.v6==null){H.HL()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.k(new P.eL("Return interceptor for "+H.B(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$u6()]
if(p!=null)return p
p=H.HO(a)
if(p!=null)return p
if(typeof a=="function")return C.Z
s=Object.getPrototypeOf(a)
if(s==null)return C.J
if(s===Object.prototype)return C.J
if(typeof q=="function"){Object.defineProperty(q,$.$get$u6(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
wE:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
F9:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a4(a,b)
if(s!==32&&s!==13&&!J.wE(s))break;++b}return b},
u1:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.Y(a,t)
if(s!==32&&s!==13&&!J.wE(s))break}return b},
bh:function(a){if(typeof a=="string")return J.ew.prototype
if(a==null)return a
if(a.constructor==Array)return J.ev.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ex.prototype
return a}if(a instanceof P.ad)return a
return J.rC(a)},
de:function(a){if(a==null)return a
if(a.constructor==Array)return J.ev.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ex.prototype
return a}if(a instanceof P.ad)return a
return J.rC(a)},
dF:function(a){if(typeof a=="number")return J.fl.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eM.prototype
return a},
kx:function(a){if(typeof a=="number")return J.fl.prototype
if(typeof a=="string")return J.ew.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eM.prototype
return a},
d3:function(a){if(typeof a=="string")return J.ew.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eM.prototype
return a},
bf:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ex.prototype
return a}if(a instanceof P.ad)return a
return J.rC(a)},
eg:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kx(a).T(a,b)},
b1:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aq(a).P(a,b)},
va:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dF(a).ar(a,b)},
cy:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dF(a).aC(a,b)},
eh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dF(a).a2(a,b)},
vb:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kx(a).aq(a,b)},
ig:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.y4(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bh(a).n(a,b)},
kC:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.y4(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.de(a).i(a,b,c)},
yc:function(a,b){return J.de(a).h(a,b)},
yd:function(a,b,c,d){return J.bf(a).h1(a,b,c,d)},
ye:function(a,b){return J.d3(a).aV(a,b)},
e_:function(a,b){return J.bf(a).h4(a,b)},
vc:function(a){return J.bf(a).h6(a)},
yf:function(a,b,c){return J.dF(a).ad(a,b,c)},
yg:function(a,b){return J.kx(a).ay(a,b)},
yh:function(a,b){return J.bf(a).az(a,b)},
yi:function(a,b){return J.bh(a).W(a,b)},
kD:function(a,b,c){return J.bh(a).e2(a,b,c)},
yj:function(a,b){return J.bf(a).hg(a,b)},
vd:function(a,b){return J.de(a).S(a,b)},
yk:function(a,b,c,d){return J.de(a).bv(a,b,c,d)},
kE:function(a){return J.dF(a).ai(a)},
yl:function(a,b){return J.de(a).a5(a,b)},
ve:function(a){return J.bf(a).gdZ(a)},
vf:function(a){return J.bf(a).ge0(a)},
ym:function(a){return J.bf(a).gbr(a)},
fK:function(a){return J.bf(a).gap(a)},
yn:function(a){return J.bf(a).gcJ(a)},
dH:function(a){return J.aq(a).ga6(a)},
rX:function(a){return J.bh(a).gU(a)},
vg:function(a){return J.bf(a).gX(a)},
df:function(a){return J.de(a).gV(a)},
cn:function(a){return J.bh(a).gm(a)},
yo:function(a){return J.bf(a).gG(a)},
yp:function(a){return J.bf(a).ghP(a)},
yq:function(a){return J.bf(a).gcS(a)},
yr:function(a){return J.bf(a).gi7(a)},
ys:function(a){return J.bf(a).gi8(a)},
vh:function(a){return J.aq(a).gac(a)},
rY:function(a){return J.bf(a).gaJ(a)},
yt:function(a){return J.bf(a).gib(a)},
yu:function(a,b){return J.bf(a).bH(a,b)},
yv:function(a,b){return J.bh(a).bg(a,b)},
vi:function(a,b,c,d,e){return J.bf(a).ed(a,b,c,d,e)},
vj:function(a,b){return J.de(a).aw(a,b)},
yw:function(a,b,c){return J.d3(a).eh(a,b,c)},
vk:function(a,b){return J.bf(a).hU(a,b)},
yx:function(a){return J.de(a).i2(a)},
yy:function(a,b,c,d){return J.bf(a).i4(a,b,c,d)},
kF:function(a,b,c){return J.d3(a).cX(a,b,c)},
yz:function(a,b,c){return J.d3(a).i6(a,b,c)},
fL:function(a,b){return J.bf(a).b6(a,b)},
vl:function(a,b){return J.bf(a).sbr(a,b)},
yA:function(a,b){return J.bf(a).sa7(a,b)},
yB:function(a,b){return J.de(a).d6(a,b)},
eW:function(a,b){return J.d3(a).eQ(a,b)},
yC:function(a,b){return J.d3(a).af(a,b)},
vm:function(a){return J.dF(a).l(a)},
yD:function(a){return J.de(a).an(a)},
yE:function(a){return J.d3(a).ie(a)},
yF:function(a,b){return J.dF(a).bE(a,b)},
cz:function(a){return J.aq(a).A(a)},
yG:function(a){return J.d3(a).ig(a)},
rZ:function(a){return J.d3(a).bi(a)},
yH:function(a){return J.d3(a).es(a)},
f:function f(){},
mM:function mM(){},
mN:function mN(){},
hv:function hv(){},
nT:function nT(){},
eM:function eM(){},
ex:function ex(){},
ev:function ev($ti){this.$ti=$ti},
u4:function u4($ti){this.$ti=$ti},
ih:function ih(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fl:function fl(){},
jA:function jA(){},
jz:function jz(){},
ew:function ew(){}},P={
GD:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.Hj()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dq(new P.pU(t),1)).observe(s,{childList:true})
return new P.pT(t,s,r)}else if(self.setImmediate!=null)return P.Hk()
return P.Hl()},
GE:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dq(new P.pV(a),0))},
GF:function(a){++u.globalState.f.b
self.setImmediate(H.dq(new P.pW(a),0))},
GG:function(a){P.uO(C.p,a)},
bA:function(a,b){P.xH(null,a)
return b.ghu()},
cL:function(a,b){P.xH(a,b)},
bz:function(a,b){J.yh(b,a)},
by:function(a,b){b.cF(H.bW(a),H.cx(a))},
xH:function(a,b){var t,s,r,q
t=new P.ri(b)
s=new P.rj(b)
r=J.aq(a)
if(!!r.$isbm)a.cw(t,s)
else if(!!r.$iscF)a.c2(t,s)
else{q=new P.bm(0,$.ao,null,[null])
q.a=4
q.c=a
q.cw(t,null)}},
bB:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.ao.toString
return new P.rt(t)},
xN:function(a,b){if(H.fI(a,{func:1,args:[P.d7,P.d7]})){b.toString
return a}else{b.toString
return a}},
zO:function(a,b){var t=new P.bm(0,$.ao,null,[b])
P.x5(C.p,new P.rv(a,t))
return t},
vV:function(a,b,c){var t
if(a==null)a=new P.fo()
t=$.ao
if(t!==C.e)t.toString
t=new P.bm(0,t,null,[c])
t.di(a,b)
return t},
zP:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bm(0,$.ao,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.md(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bV)(a),++l){q=a[l]
p=t.b
q.c2(new P.mc(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bm(0,$.ao,null,[null])
m.dh(C.C)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.bW(j)
n=H.cx(j)
if(t.b===0||!1)return P.vV(o,n,null)
else{t.c=o
t.d=n}}return s},
bw:function(a){return new P.kr(new P.bm(0,$.ao,null,[a]),[a])},
xK:function(a,b,c){$.ao.toString
a.ak(b,c)},
GJ:function(a,b){var t=new P.bm(0,$.ao,null,[b])
t.a=4
t.c=a
return t},
xw:function(a,b){var t,s,r
b.a=1
try{a.c2(new P.ql(b),new P.qm(b))}catch(r){t=H.bW(r)
s=H.cx(r)
P.y7(new P.qn(b,t,s))}},
qk:function(a,b){var t,s,r
for(;a.gfH();)a=a.c
t=a.gco()
s=b.c
if(t){b.c=null
r=b.bQ(s)
b.a=a.a
b.c=a.c
P.fB(b,r)}else{b.a=2
b.c=a
a.dK(s)}},
fB:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fK(p)
n=p.gaI()
s.toString
P.kv(null,null,s,o,n)}return}for(;b.gcr()!=null;b=m){m=b.a
b.a=null
P.fB(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.ge7()||b.ge6()){k=b.gh_()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fK(p)
n=p.gaI()
s.toString
P.kv(null,null,s,o,n)
return}j=$.ao
if(j==null?k!=null:j!==k)$.ao=k
else j=null
if(b.ge6())new P.qs(t,r,q,b).$0()
else if(s){if(b.ge7())new P.qr(r,b,l).$0()}else if(b.ghB())new P.qq(t,r,b).$0()
if(j!=null)$.ao=j
s=r.b
if(!!J.aq(s).$iscF){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bQ(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qk(s,i)
return}}i=b.b
b=i.bP()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
Hd:function(){var t,s
for(;t=$.fF,t!=null;){$.id=null
s=t.b
$.fF=s
if(s==null)$.ic=null
t.a.$0()}},
Hf:function(){$.v1=!0
try{P.Hd()}finally{$.id=null
$.v1=!1
if($.fF!=null)$.$get$uX().$1(P.xY())}},
xU:function(a){var t=new P.ke(a,null)
if($.fF==null){$.ic=t
$.fF=t
if(!$.v1)$.$get$uX().$1(P.xY())}else{$.ic.b=t
$.ic=t}},
He:function(a){var t,s,r
t=$.fF
if(t==null){P.xU(a)
$.id=$.ic
return}s=new P.ke(a,null)
r=$.id
if(r==null){s.b=t
$.id=s
$.fF=s}else{s.b=r.b
r.b=s
$.id=s
if(s.b==null)$.ic=s}},
y7:function(a){var t=$.ao
if(C.e===t){P.fG(null,null,C.e,a)
return}t.toString
P.fG(null,null,t,t.cD(a,!0))},
Ie:function(a,b){return new P.qZ(null,a,!1,[b])},
xR:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.bW(o)
s=H.cx(o)
$.ao.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fK(r)
q=n
p=r.gaI()
c.$2(q,p)}}},
H4:function(a,b,c,d){var t=a.bV(0)
if(!!J.aq(t).$iscF&&t!==$.$get$hl())t.c5(new P.rl(b,c,d))
else b.ak(c,d)},
xI:function(a,b){return new P.rk(a,b)},
v0:function(a,b,c){var t=a.bV(0)
if(!!J.aq(t).$iscF&&t!==$.$get$hl())t.c5(new P.rm(b,c))
else b.aE(c)},
GI:function(a,b,c,d,e,f,g){var t,s
t=$.ao
s=e?1:0
s=new P.i4(a,null,null,null,null,t,s,null,null,[f,g])
s.f6(b,c,d,e,g)
s.f9(a,b,c,d,e,f,g)
return s},
H3:function(a,b,c){$.ao.toString
a.bJ(b,c)},
x5:function(a,b){var t=$.ao
if(t===C.e){t.toString
return P.uO(a,b)}return P.uO(a,t.cD(b,!0))},
uO:function(a,b){var t=C.a.al(a.a,1000)
return H.Gy(t<0?0:t,b)},
kv:function(a,b,c,d,e){var t={}
t.a=d
P.He(new P.rs(t,e))},
xO:function(a,b,c,d){var t,s
s=$.ao
if(s===c)return d.$0()
$.ao=c
t=s
try{s=d.$0()
return s}finally{$.ao=t}},
xQ:function(a,b,c,d,e){var t,s
s=$.ao
if(s===c)return d.$1(e)
$.ao=c
t=s
try{s=d.$1(e)
return s}finally{$.ao=t}},
xP:function(a,b,c,d,e,f){var t,s
s=$.ao
if(s===c)return d.$2(e,f)
$.ao=c
t=s
try{s=d.$2(e,f)
return s}finally{$.ao=t}},
fG:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cD(d,!(!t||!1))
P.xU(d)},
pU:function pU(a){this.a=a},
pT:function pT(a,b,c){this.a=a
this.b=b
this.c=c},
pV:function pV(a){this.a=a},
pW:function pW(a){this.a=a},
ri:function ri(a){this.a=a},
rj:function rj(a){this.a=a},
rt:function rt(a){this.a=a},
cF:function cF(){},
rv:function rv(a,b){this.a=a
this.b=b},
md:function md(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mc:function mc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f3:function f3(){},
kf:function kf(){},
dY:function dY(a,$ti){this.a=a
this.$ti=$ti},
kr:function kr(a,$ti){this.a=a
this.$ti=$ti},
kj:function kj(a,b,c,d,e,$ti){var _=this
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
qh:function qh(a,b){this.a=a
this.b=b},
qp:function qp(a,b){this.a=a
this.b=b},
ql:function ql(a){this.a=a},
qm:function qm(a){this.a=a},
qn:function qn(a,b,c){this.a=a
this.b=b
this.c=c},
qj:function qj(a,b){this.a=a
this.b=b},
qo:function qo(a,b){this.a=a
this.b=b},
qi:function qi(a,b,c){this.a=a
this.b=b
this.c=c},
qs:function qs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qt:function qt(a){this.a=a},
qr:function qr(a,b,c){this.a=a
this.b=b
this.c=c},
qq:function qq(a,b,c){this.a=a
this.b=b
this.c=c},
ke:function ke(a,b){this.a=a
this.b=b},
dn:function dn(){},
oE:function oE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oC:function oC(a,b){this.a=a
this.b=b},
oD:function oD(a,b){this.a=a
this.b=b},
oF:function oF(a){this.a=a},
oK:function oK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oI:function oI(a,b){this.a=a
this.b=b},
oJ:function oJ(){},
oL:function oL(a){this.a=a},
oO:function oO(a){this.a=a},
oP:function oP(a,b){this.a=a
this.b=b},
oM:function oM(a,b){this.a=a
this.b=b},
oN:function oN(a){this.a=a},
oQ:function oQ(a,b){this.a=a
this.b=b},
oR:function oR(a,b){this.a=a
this.b=b},
oG:function oG(a,b,c){this.a=a
this.b=b
this.c=c},
oH:function oH(a){this.a=a},
oB:function oB(){},
dp:function dp(){},
q_:function q_(a,b,c){this.a=a
this.b=b
this.c=c},
pZ:function pZ(a){this.a=a},
kh:function kh(){},
q4:function q4(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
q6:function q6(b,c,a){this.b=b
this.c=c
this.a=a},
q5:function q5(){},
qI:function qI(){},
qJ:function qJ(a,b){this.a=a
this.b=b},
qY:function qY(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qZ:function qZ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
rl:function rl(a,b,c){this.a=a
this.b=b
this.c=c},
rk:function rk(a,b){this.a=a
this.b=b},
rm:function rm(a,b){this.a=a
this.b=b},
i3:function i3(){},
i4:function i4(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
qG:function qG(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eY:function eY(a,b){this.a=a
this.b=b},
rh:function rh(){},
rs:function rs(a,b){this.a=a
this.b=b},
qM:function qM(){},
qN:function qN(a,b){this.a=a
this.b=b},
qO:function qO(a,b){this.a=a
this.b=b},
qP:function qP(a,b){this.a=a
this.b=b},
GK:function(a,b){var t=a[b]
return t===a?null:t},
uZ:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
uY:function(){var t=Object.create(null)
P.uZ(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wG:function(a,b,c){return H.y1(a,new H.w(0,null,null,null,null,null,0,[b,c]))},
cG:function(a,b){return new H.w(0,null,null,null,null,null,0,[a,b])},
jC:function(){return new H.w(0,null,null,null,null,null,0,[null,null])},
hy:function(a){return H.y1(a,new H.w(0,null,null,null,null,null,0,[null,null]))},
i7:function(a,b){return new P.km(0,null,null,null,null,null,0,[a,b])},
GN:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
E:function(a,b,c,d,e){return new P.qv(0,null,null,null,null,[d,e])},
tZ:function(a,b,c){var t,s
if(P.v2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ie()
s.push(a)
try{P.Hc(a,t)}finally{if(0>=s.length)return H.v(s,-1)
s.pop()}s=P.x2(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jx:function(a,b,c){var t,s,r
if(P.v2(a))return b+"..."+c
t=new P.ce(b)
s=$.$get$ie()
s.push(a)
try{r=t
r.N=P.x2(r.gN(),a,", ")}finally{if(0>=s.length)return H.v(s,-1)
s.pop()}s=t
s.N=s.gN()+c
s=t.gN()
return s.charCodeAt(0)==0?s:s},
v2:function(a){var t,s
for(t=0;s=$.$get$ie(),t<s.length;++t)if(a===s[t])return!0
return!1},
Hc:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.df(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.F())return
q=H.B(t.gR())
b.push(q)
s+=q.length+2;++r}if(!t.F()){if(r<=5)return
if(0>=b.length)return H.v(b,-1)
p=b.pop()
if(0>=b.length)return H.v(b,-1)
o=b.pop()}else{n=t.gR();++r
if(!t.F()){if(r<=4){b.push(H.B(n))
return}p=H.B(n)
if(0>=b.length)return H.v(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gR();++r
for(;t.F();n=m,m=l){l=t.gR();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.v(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.B(n)
p=H.B(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.v(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
wF:function(a,b,c,d,e){return new H.w(0,null,null,null,null,null,0,[d,e])},
Fa:function(a,b,c){var t=P.wF(null,null,null,b,c)
a.a5(0,new P.ry(t))
return t},
Fb:function(a,b,c,d,e){var t=P.wF(null,null,null,d,e)
P.Fg(t,a,b,c)
return t},
a1:function(a,b,c,d){return new P.kl(0,null,null,null,null,null,0,[d])},
jD:function(a,b){var t,s
t=P.a1(null,null,null,b)
for(s=J.df(a);s.F();)t.h(0,s.gR())
return t},
wL:function(a){var t,s,r
t={}
if(P.v2(a))return"{...}"
s=new P.ce("")
try{$.$get$ie().push(a)
r=s
r.N=r.gN()+"{"
t.a=!0
a.a5(0,new P.nf(t,s))
t=s
t.N=t.gN()+"}"}finally{t=$.$get$ie()
if(0>=t.length)return H.v(t,-1)
t.pop()}t=s.gN()
return t.charCodeAt(0)==0?t:t},
Fg:function(a,b,c,d){var t,s,r
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.bV)(b),++s){r=b[s]
a.i(0,c.$1(r),d.$1(r))}},
ua:function(a,b){var t=new P.n2(null,0,0,0,[b])
t.f1(a,b)
return t},
qv:function qv(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qy:function qy(a){this.a=a},
qw:function qw(a,$ti){this.a=a
this.$ti=$ti},
qx:function qx(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
km:function km(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
kl:function kl(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qC:function qC(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qz:function qz(){},
fk:function fk(){},
hs:function hs(){},
ry:function ry(a){this.a=a},
hz:function hz(){},
fq:function fq(){},
aS:function aS(){},
r8:function r8(){},
jE:function jE(){},
eN:function eN(a,$ti){this.a=a
this.$ti=$ti},
nf:function nf(a,b){this.a=a
this.b=b},
n2:function n2(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qD:function qD(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
ol:function ol(){},
ok:function ok(){},
vo:function(a,b,c,d,e,f){if(C.d.bI(f,4)!==0)throw H.k(new P.bP("Invalid base64 padding, padded length must be multiple of four, is "+H.B(f),a,c))
if(d+e!==f)throw H.k(new P.bP("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.k(new P.bP("Invalid base64 padding, more than two '=' characters",a,b))},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
fX:function fX(){},
h_:function h_(){},
lw:function lw(){},
pv:function pv(a){this.a=a},
pw:function pw(a){this.a=a},
ra:function ra(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rc:function rc(a){this.a=a},
rb:function rb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Gw:function(a,b,c){var t,s,r,q
if(b<0)throw H.k(P.bH(b,0,J.cn(a),null,null))
t=c==null
if(!t&&c<b)throw H.k(P.bH(c,b,J.cn(a),null,null))
s=J.df(a)
for(r=0;r<b;++r)if(!s.F())throw H.k(P.bH(b,0,r,null,null))
q=[]
if(t)for(;s.F();)q.push(s.gR())
else for(r=b;r<c;++r){if(!s.F())throw H.k(P.bH(c,b,r,null,null))
q.push(s.gR())}return H.wW(q)},
x2:function(a,b,c){var t=J.df(b)
if(!t.F())return a
if(c.length===0){do a+=H.B(t.gR())
while(t.F())}else{a+=H.B(t.gR())
for(;t.F();)a=a+c+H.B(t.gR())}return a},
z9:function(a,b){return J.yg(a,b)},
zd:function(a,b){var t=new P.e3(a,b)
t.dd(a,b)
return t},
ze:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.B(t)
if(t>=10)return s+"00"+H.B(t)
return s+"000"+H.B(t)},
zf:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ip:function(a){if(a>=10)return""+a
return"0"+a},
vH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cz(a)
if(typeof a==="string")return JSON.stringify(a)
return P.zy(a)},
zy:function(a){var t=J.aq(a)
if(!!t.$isf2)return t.A(a)
return H.nY(a)},
dI:function(a){return new P.cW(!1,null,null,a)},
e0:function(a,b,c){return new P.cW(!0,a,b,c)},
yI:function(a){return new P.cW(!1,null,a,"Must not be null")},
wY:function(a){return new P.eE(null,null,!1,null,null,a)},
jU:function(a,b,c){return new P.eE(null,null,!0,a,b,"Value not in range")},
bH:function(a,b,c,d,e){return new P.eE(b,c,!0,a,d,"Invalid value")},
dm:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.ai(a)
if(!(0>a)){if(typeof c!=="number")return H.ai(c)
t=a>c}else t=!0
if(t)throw H.k(P.bH(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.ai(b)
if(!(a>b)){if(typeof c!=="number")return H.ai(c)
t=b>c}else t=!0
if(t)throw H.k(P.bH(b,a,c,"end",f))
return b}return c},
bx:function(a,b,c,d,e){var t=e!=null?e:J.cn(b)
return new P.mt(b,t,!0,a,c,"Index out of range")},
lC:function(a){return new P.qg(a)},
d6:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.df(a);s.F();)t.push(s.gR())
if(b)return t
t.fixed$length=Array
return t},
Fc:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
l:function(a,b){var t=P.d6(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fJ:function(a){H.HU(H.B(a))},
dA:function(a,b,c){return new H.hu(a,H.u2(a,!1,!0,!1),null,null)},
oW:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dm(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a2()
s=c<t}else s=!0
return H.wW(s?C.b.c9(a,b,c):a)}if(!!J.aq(a).$isfn)return H.FE(a,b,P.dm(b,c,a.length,null,null,null))
return P.Gw(a,b,c)},
xl:function(){var t=H.Fy()
if(t!=null)return P.xm(t,0,null)
throw H.k(new P.V("'Uri.base' is not supported"))},
xm:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a4(a,b+4)^58)*3|C.c.a4(a,b)^100|C.c.a4(a,b+1)^97|C.c.a4(a,b+2)^116|C.c.a4(a,b+3)^97)>>>0
if(s===0)return P.xk(b>0||c<c?C.c.K(a,b,c):a,5,null).gev()
else if(s===32)return P.xk(C.c.K(a,t,c),0,null).gev()}r=H.a(new Array(8),[P.C])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xS(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.ar()
if(p>=b)if(P.xS(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.T()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a2()
if(typeof l!=="number")return H.ai(l)
if(k<l)l=k
if(typeof m!=="number")return m.a2()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a2()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a2()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aD(a,"..",m)))h=l>m+2&&C.c.aD(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aD(a,"file",b)){if(o<=b){if(!C.c.aD(a,"/",m)){g="file:///"
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
m=7}else if(m===l)if(b===0&&!0){a=C.c.aB(a,m,l,"/");++l;++k;++c}else{a=C.c.K(a,b,m)+"/"+C.c.K(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aD(a,"http",b)){if(q&&n+3===m&&C.c.aD(a,"80",n+1))if(b===0&&!0){a=C.c.aB(a,n,m,"")
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
else if(p===t&&C.c.aD(a,"https",b)){if(q&&n+4===m&&C.c.aD(a,"443",n+1))if(b===0&&!0){a=C.c.aB(a,n,m,"")
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
k-=b}return new P.qX(a,p,o,n,m,l,k,i,null)}return P.GQ(a,b,c,p,o,n,m,l,k,i)},
xo:function(a,b){return C.b.hr(a.split("&"),P.jC(),new P.ps(b))},
Gz:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pp(a)
s=H.cD(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.Y(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fr(C.c.K(a,p,q),null,null)
if(J.cy(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.v(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fr(C.c.K(a,p,c),null,null)
if(J.cy(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.v(r,o)
r[o]=m
return r},
xn:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pq(a)
s=new P.pr(a,t)
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
k=J.b1(C.b.gb8(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Gz(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.at()
h=j[1]
if(typeof h!=="number")return H.ai(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.at()
i=j[3]
if(typeof i!=="number")return H.ai(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.aq(e).P(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.v(g,f)
g[f]=0
i=f+1
if(i>=16)return H.v(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.d5()
i=C.d.aU(e,8)
if(f<0||f>=16)return H.v(g,f)
g[f]=i
i=f+1
if(i>=16)return H.v(g,i)
g[i]=e&255
f+=2}}return g},
GQ:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.GY(a,b,d)
else{if(d===b)P.ia(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.GZ(a,t,e-1):""
r=P.GU(a,e,f,!1)
if(typeof f!=="number")return f.T()
q=f+1
if(typeof g!=="number")return H.ai(g)
p=q<g?P.GW(H.fr(C.c.K(a,q,g),null,new P.rw(a,f)),j):null}else{s=""
r=null
p=null}o=P.GV(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a2()
n=h<i?P.GX(a,h+1,i,null):null
return new P.ks(j,s,r,p,o,n,i<c?P.GT(a,i+1,c):null,null,null,null,null,null)},
xB:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ia:function(a,b,c){throw H.k(new P.bP(c,a,b))},
GW:function(a,b){if(a!=null&&J.b1(a,P.xB(b)))return
return a},
GU:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.Y(a,b)===91){if(typeof c!=="number")return c.aj()
t=c-1
if(C.c.Y(a,t)!==93)P.ia(a,b,"Missing end `]` to match `[` in host")
P.xn(a,b+1,t)
return C.c.K(a,b,c).toLowerCase()}if(typeof c!=="number")return H.ai(c)
s=b
for(;s<c;++s)if(C.c.Y(a,s)===58){P.xn(a,b,c)
return"["+a+"]"}return P.H0(a,b,c)},
H0:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.ai(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.Y(a,t)
if(p===37){o=P.xG(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.ce("")
m=C.c.K(a,s,t)
l=r.N+=!q?m.toLowerCase():m
if(n){o=C.c.K(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.N=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.v(C.F,n)
n=(C.F[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.ce("")
if(s<t){r.N+=C.c.K(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.v(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.ia(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.Y(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.ce("")
m=C.c.K(a,s,t)
r.N+=!q?m.toLowerCase():m
r.N+=P.xC(p)
t+=k
s=t}}}}if(r==null)return C.c.K(a,b,c)
if(s<c){m=C.c.K(a,s,c)
r.N+=!q?m.toLowerCase():m}n=r.N
return n.charCodeAt(0)==0?n:n},
GY:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xE(C.c.a4(a,b)))P.ia(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a4(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.v(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.ia(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.K(a,b,c)
return P.GR(s?a.toLowerCase():a)},
GR:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
GZ:function(a,b,c){var t=P.fE(a,b,c,C.a5,!1)
return t==null?C.c.K(a,b,c):t},
GV:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fE(a,b,c,C.H,!1)
if(r==null)r=C.c.K(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.ae(r,"/"))r="/"+r
return P.H_(r,e,f)},
H_:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.ae(a,"/"))return P.H1(a,!t||c)
return P.H2(a)},
GX:function(a,b,c,d){var t=P.fE(a,b,c,C.k,!1)
return t==null?C.c.K(a,b,c):t},
GT:function(a,b,c){var t=P.fE(a,b,c,C.k,!1)
return t==null?C.c.K(a,b,c):t},
xG:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.Y(a,b+1)
r=C.c.Y(a,t)
q=H.rE(s)
p=H.rE(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aU(o,4)
if(t>=8)return H.v(C.E,t)
t=(C.E[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hO(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.K(a,b,b+3).toUpperCase()
return},
xC:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a4("0123456789ABCDEF",a>>>4)
t[2]=C.c.a4("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.fW(a,6*r)&63|s
if(p>=q)return H.v(t,p)
t[p]=37
n=p+1
m=C.c.a4("0123456789ABCDEF",o>>>4)
if(n>=q)return H.v(t,n)
t[n]=m
m=p+2
n=C.c.a4("0123456789ABCDEF",o&15)
if(m>=q)return H.v(t,m)
t[m]=n
p+=3}}return P.oW(t,0,null)},
fE:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.d3(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a2()
if(typeof c!=="number")return H.ai(c)
if(!(r<c))break
c$0:{o=s.Y(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.v(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xG(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.v(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ia(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.Y(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.xC(o)}}if(p==null)p=new P.ce("")
p.N+=C.c.K(a,q,r)
p.N+=H.B(m)
if(typeof l!=="number")return H.ai(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a2()
if(q<c)p.N+=s.K(a,q,c)
t=p.N
return t.charCodeAt(0)==0?t:t},
xF:function(a){if(C.c.ae(a,"."))return!0
return C.c.bg(a,"/.")!==-1},
H2:function(a){var t,s,r,q,p,o,n
if(!P.xF(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bV)(s),++p){o=s[p]
if(J.b1(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.v(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bh(t,"/")},
H1:function(a,b){var t,s,r,q,p,o
if(!P.xF(a))return!b?P.xD(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bV)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.b1(C.b.gb8(t),"..")){if(0>=t.length)return H.v(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.v(t,0)
s=J.rX(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.b1(C.b.gb8(t),".."))t.push("")
if(!b){if(0>=t.length)return H.v(t,0)
s=P.xD(t[0])
if(0>=t.length)return H.v(t,0)
t[0]=s}return C.b.bh(t,"/")},
xD:function(a){var t,s,r,q
t=J.bh(a)
s=t.gm(a)
if(typeof s!=="number")return s.ar()
if(s>=2&&P.xE(t.Y(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.ai(s)
if(!(r<s))break
q=t.Y(a,r)
if(q===58)return C.c.K(a,0,r)+"%3A"+C.c.af(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.v(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
GS:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.Y(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.k(P.dI("Invalid URL encoding"))}}return t},
r9:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.ai(c)
t=J.d3(a)
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
else o=new H.l4(t.K(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.Y(a,s)
if(q>127)throw H.k(P.dI("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.k(P.dI("Truncated URI"))
o.push(P.GS(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pw(!1).hd(o)},
xE:function(a){var t=a|32
return 97<=t&&t<=122},
xk:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bh(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.ai(o)
if(!(r<o))break
c$0:{p=s.Y(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.k(new P.bP("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.k(new P.bP("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.ai(o)
if(!(r<o))break
p=s.Y(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gb8(t)
if(p!==44||r!==m+7||!s.aD(a,"base64",m+1))throw H.k(new P.bP("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.L.hQ(0,a,o,s.gm(a))
else{l=P.fE(a,o,s.gm(a),C.k,!0)
if(l!=null)a=s.aB(a,o,s.gm(a),l)}return new P.po(a,t,c)},
H9:function(){var t,s,r,q,p
t=P.Fc(22,new P.rp(),!0,P.dd)
s=new P.ro(t)
r=new P.rq()
q=new P.rr()
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
xS:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xT()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.v(t,d)
r=t[d]
q=C.c.a4(a,s)^96
p=J.ig(r,q>95?31:q)
if(typeof p!=="number")return p.aH()
d=p&31
o=C.d.aU(p,5)
if(o>=8)return H.v(e,o)
e[o]=s}return d},
cV:function cV(){},
bI:function bI(){},
e3:function e3(a,b){this.a=a
this.b=b},
X:function X(){},
dL:function dL(a){this.a=a},
lt:function lt(){},
lu:function lu(){},
el:function el(){},
fo:function fo(){},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eE:function eE(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mt:function mt(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a){this.a=a},
eL:function eL(a){this.a=a},
da:function da(a){this.a=a},
bM:function bM(a){this.a=a},
nG:function nG(){},
k0:function k0(){},
ll:function ll(a){this.a=a},
qg:function qg(a){this.a=a},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
lD:function lD(a,bM,$ti){this.a=a
this.bM=bM
this.$ti=$ti},
C:function C(){},
o:function o(){},
jy:function jy(){},
p:function p(){},
b_:function b_(){},
d7:function d7(){},
dr:function dr(){},
ad:function ad(){},
dy:function dy(){},
eF:function eF(){},
dU:function dU(){},
y:function y(){},
ce:function ce(N){this.N=N},
eO:function eO(){},
ps:function ps(a){this.a=a},
pp:function pp(a){this.a=a},
pq:function pq(a){this.a=a},
pr:function pr(a,b){this.a=a
this.b=b},
ks:function ks(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
rw:function rw(a,b){this.a=a
this.b=b},
po:function po(a,b,c){this.a=a
this.b=b
this.c=c},
rp:function rp(){},
ro:function ro(a){this.a=a},
rq:function rq(){},
rr:function rr(){},
qX:function qX(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
q3:function q3(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
xZ:function(a){var t,s,r,q,p
if(a==null)return
t=P.jC()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bV)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
Ht:function(a){var t,s
t=new P.bm(0,$.ao,null,[null])
s=new P.dY(t,[null])
a.then(H.dq(new P.rz(s),1))["catch"](H.dq(new P.rA(s),1))
return t},
t8:function(){var t=$.vC
if(t==null){t=J.kD(window.navigator.userAgent,"Opera",0)
$.vC=t}return t},
vE:function(){var t=$.vD
if(t==null){t=P.t8()!==!0&&J.kD(window.navigator.userAgent,"WebKit",0)
$.vD=t}return t},
zg:function(){var t,s
t=$.vz
if(t!=null)return t
s=$.vA
if(s==null){s=J.kD(window.navigator.userAgent,"Firefox",0)
$.vA=s}if(s)t="-moz-"
else{s=$.vB
if(s==null){s=P.t8()!==!0&&J.kD(window.navigator.userAgent,"Trident/",0)
$.vB=s}if(s)t="-ms-"
else t=P.t8()===!0?"-o-":"-webkit-"}$.vz=t
return t},
r1:function r1(){},
r3:function r3(a,b){this.a=a
this.b=b},
pQ:function pQ(){},
pR:function pR(a,b){this.a=a
this.b=b},
r2:function r2(a,b){this.a=a
this.b=b},
kc:function kc(a,b,c){this.a=a
this.b=b
this.c=c},
rz:function rz(a){this.a=a},
rA:function rA(a){this.a=a},
lb:function lb(){},
lc:function lc(a){this.a=a},
H7:function(a){var t,s,r
t=new P.bm(0,$.ao,null,[null])
s=new P.kr(t,[null])
a.toString
r=W.U
W.fA(a,"success",new P.rn(a,s),!1,r)
W.fA(a,"error",s.ge1(),!1,r)
return t},
ln:function ln(){},
rn:function rn(a,b){this.a=a
this.b=b},
ms:function ms(){},
nD:function nD(){},
hP:function hP(){},
pi:function pi(){},
GP:function(a){var t=new P.qK(0,0)
t.fb(a)
return t},
qB:function qB(){},
qK:function qK(a,b){this.a=a
this.b=b},
qL:function qL(){},
bU:function bU(){},
kG:function kG(){},
ei:function ei(){},
lE:function lE(){},
lF:function lF(){},
lG:function lG(){},
lH:function lH(){},
lI:function lI(){},
lJ:function lJ(){},
lK:function lK(){},
lL:function lL(){},
lM:function lM(){},
lN:function lN(){},
lO:function lO(){},
lP:function lP(){},
lQ:function lQ(){},
lR:function lR(){},
lS:function lS(){},
lT:function lT(){},
m7:function m7(){},
cr:function cr(){},
mq:function mq(){},
d5:function d5(){},
mW:function mW(){},
iX:function iX(){},
jg:function jg(){},
ng:function ng(){},
nh:function nh(){},
d8:function d8(){},
nA:function nA(){},
iY:function iY(){},
jh:function jh(){},
nQ:function nQ(){},
nV:function nV(){},
hR:function hR(){},
oV:function oV(){},
iZ:function iZ(){},
ji:function ji(){},
kN:function kN(a){this.a=a},
c2:function c2(){},
oY:function oY(){},
p_:function p_(){},
eK:function eK(){},
p7:function p7(){},
dc:function dc(){},
pj:function pj(){},
j_:function j_(){},
jj:function jj(){},
pu:function pu(){},
py:function py(){},
pz:function pz(){},
i5:function i5(){},
qQ:function qQ(){},
qR:function qR(){},
qS:function qS(){},
bi:function bi(){},
dd:function dd(){},
fQ:function fQ(){},
eZ:function eZ(){},
fR:function fR(){},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
bC:function bC(){},
e1:function e1(){},
la:function la(){},
kI:function kI(){},
o8:function o8(){},
re:function re(){},
k_:function k_(){},
j0:function j0(){},
jk:function jk(){}},W={
z0:function(a){if(a!=null)return new Audio(a)
return new Audio()},
z1:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
zc:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
GH:function(a){var t=new W.q1(a,null)
t.f7(a)
return t},
zh:function(a,b,c){var t,s
t=document.body
s=(t&&C.v).aA(t,a,b,c)
s.toString
t=new H.eP(new W.d2(s),new W.ru(),[W.af])
return t.gbb(t)},
h4:function(a){var t,s,r
t="element tag unavailable"
try{s=J.yt(a)
if(typeof s==="string")t=a.tagName}catch(r){H.bW(r)}return t},
vW:function(a,b,c){return W.vX(a,null,null,b,null,null,null,c).b1(new W.mm())},
vX:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e9
s=new P.bm(0,$.ao,null,[t])
r=new P.dY(s,[t])
q=new XMLHttpRequest()
C.R.hS(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.Id
W.fA(q,"load",new W.mn(r,q),!1,t)
W.fA(q,"error",r.ge1(),!1,t)
q.send()
return s},
vY:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
xz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fA:function(a,b,c,d,e){var t=W.Hh(new W.qf(c))
t=new W.qe(0,a,b,t,!1,[e])
t.f8(a,b,c,!1,e)
return t},
xx:function(a){var t,s
t=document.createElement("a")
s=new W.qT(t,window.location)
s=new W.i6(s)
s.fa(a)
return s},
GL:function(a,b,c,d){return!0},
GM:function(a,b,c,d){var t,s,r,q,p
t=d.gew()
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
xA:function(){var t=P.y
t=new W.r5(P.jD(C.q,t),P.a1(null,null,null,t),P.a1(null,null,null,t),P.a1(null,null,null,t),null)
t.fc(null,new H.eB(C.q,new W.r6(),[H.Q(C.q,0),null]),["TEMPLATE"],null)
return t},
H8:function(a){var t
if(!!J.aq(a).$isek)return a
t=new P.kc([],[],!1)
t.c=!0
return t.b3(a)},
Hh:function(a){var t=$.ao
if(t===C.e)return a
return t.h8(a,!0)},
ay:function ay(){},
eX:function eX(){},
kJ:function kJ(){},
f_:function f_(){},
cM:function cM(){},
kR:function kR(){},
h6:function h6(){},
h9:function h9(){},
kV:function kV(){},
f0:function f0(){},
f1:function f1(){},
fW:function fW(){},
ej:function ej(){},
l6:function l6(){},
ik:function ik(){},
h0:function h0(){},
ld:function ld(){},
le:function le(){},
h1:function h1(){},
h2:function h2(){},
lf:function lf(){},
bO:function bO(){},
f4:function f4(){},
iP:function iP(){},
q1:function q1(a,b){this.a=a
this.b=b},
jO:function jO(){},
q2:function q2(){},
im:function im(){},
lg:function lg(){},
lh:function lh(){},
lm:function lm(){},
f5:function f5(){},
io:function io(){},
iq:function iq(){},
ek:function ek(){},
ir:function ir(){},
is:function is(){},
lp:function lp(){},
it:function it(){},
iu:function iu(){},
iQ:function iQ(){},
j9:function j9(){},
iv:function iv(){},
iw:function iw(){},
ki:function ki(a,$ti){this.a=a
this.$ti=$ti},
cA:function cA(){},
ru:function ru(){},
lv:function lv(){},
h5:function h5(){},
lB:function lB(){},
U:function U(){},
aI:function aI(){},
m3:function m3(){},
cg:function cg(){},
fd:function fd(){},
iR:function iR(){},
ja:function ja(){},
m4:function m4(){},
m5:function m5(){},
m6:function m6(){},
m8:function m8(){},
m9:function m9(){},
iL:function iL(){},
cq:function cq(){},
mj:function mj(){},
fe:function fe(){},
iS:function iS(){},
jb:function jb(){},
iN:function iN(){},
e9:function e9(){},
mm:function mm(){},
mn:function mn(a,b){this.a=a
this.b=b},
hm:function hm(){},
mp:function mp(){},
hn:function hn(){},
fg:function fg(){},
mv:function mv(){},
mT:function mT(){},
jB:function jB(){},
hw:function hw(){},
hx:function hx(){},
n9:function n9(){},
ne:function ne(){},
hF:function hF(){},
jG:function jG(){},
ni:function ni(){},
nj:function nj(){},
hG:function hG(){},
cs:function cs(){},
jH:function jH(){},
j1:function j1(){},
jl:function jl(){},
nw:function nw(){},
nx:function nx(){},
d2:function d2(a){this.a=a},
af:function af(){},
jK:function jK(){},
jL:function jL(){},
j2:function j2(){},
jm:function jm(){},
nC:function nC(){},
nH:function nH(){},
nL:function nL(){},
nN:function nN(){},
eb:function eb(){},
nS:function nS(){},
ci:function ci(){},
jS:function jS(){},
j3:function j3(){},
jn:function jn(){},
nX:function nX(){},
jV:function jV(){},
fu:function fu(){},
jW:function jW(){},
oj:function oj(){},
om:function om(){},
on:function on(){},
oo:function oo(){},
ct:function ct(){},
jY:function jY(){},
h7:function h7(){},
ha:function ha(){},
hS:function hS(){},
cu:function cu(){},
jZ:function jZ(){},
j4:function j4(){},
jo:function jo(){},
fv:function fv(){},
os:function os(){},
ck:function ck(){},
ot:function ot(){},
ou:function ou(){},
oA:function oA(){},
cm:function cm(){},
ee:function ee(){},
k2:function k2(){},
p0:function p0(){},
p1:function p1(){},
hW:function hW(){},
p5:function p5(){},
cT:function cT(){},
cJ:function cJ(){},
p8:function p8(){},
j5:function j5(){},
jp:function jp(){},
p9:function p9(){},
h8:function h8(){},
hb:function hb(){},
pd:function pd(){},
cw:function cw(){},
k3:function k3(){},
j6:function j6(){},
jq:function jq(){},
fx:function fx(){},
k4:function k4(){},
ef:function ef(){},
k5:function k5(){},
pt:function pt(){},
px:function px(){},
fy:function fy(){},
k6:function k6(){},
pC:function pC(){},
k9:function k9(){},
pJ:function pJ(){},
eQ:function eQ(){},
fz:function fz(){},
q0:function q0(){},
i1:function i1(){},
j7:function j7(){},
jr:function jr(){},
kg:function kg(){},
j8:function j8(){},
js:function js(){},
q7:function q7(){},
q8:function q8(){},
kk:function kk(){},
iT:function iT(){},
jc:function jc(){},
qu:function qu(){},
i8:function i8(){},
iU:function iU(){},
jd:function jd(){},
qU:function qU(){},
ko:function ko(){},
iV:function iV(){},
je:function je(){},
kq:function kq(){},
iW:function iW(){},
jf:function jf(){},
rf:function rf(){},
rg:function rg(){},
pX:function pX(){},
q9:function q9(a){this.a=a},
qa:function qa(a){this.a=a},
qd:function qd(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
i2:function i2(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qe:function qe(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qf:function qf(a){this.a=a},
i6:function i6(a){this.a=a},
bq:function bq(){},
jM:function jM(a){this.a=a},
nz:function nz(a){this.a=a},
ny:function ny(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(){},
qV:function qV(){},
qW:function qW(){},
r5:function r5(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
r6:function r6(){},
r4:function r4(){},
iJ:function iJ(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ea:function ea(){},
r7:function r7(){},
qT:function qT(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a},
rd:function rd(a){this.a=a}},T={
tx:function(a,b,c,d){var t
H.I1(a,"$isp",[P.C],"$asp")
t=new T.ho(a,null,d,b,null)
t.f0(a,b,c,d)
return t},
wO:function(a,b){return new T.nI(0,a,new Uint8Array(H.cD(b==null?32768:b)))},
GB:function(a){var t=new T.pM(-1,0,0,0,0,null,null,"",[])
t.f4(a)
return t},
GC:function(a,b){var t=new T.pN(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.f5(a,b)
return t},
ff:function(a){var t=new T.mo(null,0,2147483647)
t.f_(a)
return t},
fM:function fM(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
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
dg:function dg(a){this.a=a},
ho:function ho(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nI:function nI(a,b,c){this.a=a
this.b=b
this.c=c},
pM:function pM(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pN:function pN(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
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
pO:function pO(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
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
pL:function pL(a){this.a=a},
mo:function mo(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kX:function kX(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a8,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.M=M
_.a8=a8
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
kZ:function kZ(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a8,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.M=M
_.a8=a8
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
lo:function lo(){},
mh:function mh(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a8,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.M=M
_.a8=a8
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
G2:function(a,b,c,d){var t,s
t=[P.y]
s=H.a([],t)
t=new T.hQ("Glitch",0.01,0.01,0.01,s,0.5,a,new H.w(0,null,null,null,null,null,0,[X.F,P.X]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.J(null,null,A.a6),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.N]),H.a([],[A.fU]),1)
t.aa(a,b,c,d)
return t},
hQ:function hQ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
zl:function(a,b,c,d){var t,s,r,q
t=new B.dt(new P.ce(""),0,0)
t.ag(a,8)
c.toString
s=H.cS(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ag(s[q],8)
return t.b2(b)},
zk:function(a,b,c,d){var t,s,r,q,p
t=H.cD(c)
s=new Uint8Array(t)
r=new B.di(null,0)
r.a=J.e_(a,b)
for(q=0;q<c;++q){p=r.a9(8)
if(q>=t)return H.v(s,q)
s[q]=p}return s},
zj:function(a,b,c,d){var t,s,r,q,p
t=new B.dt(new P.ce(""),0,0)
t.ag(a,8)
s=d.gcO()
r=C.f.ai(Math.log(H.kw(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cS(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ag(q[p],r)
return t.b2(b)},
zi:function(a,b,c,d){var t,s,r,q,p,o
t=H.cD(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ai(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.di(null,0)
p.a=J.e_(a,b)
for(o=0;o<c;++o){r=p.a9(q)
if(o>=t)return H.v(s,o)
s[o]=r}return s}},S={kH:function kH(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.b=b},ij:function ij(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ml:function ml(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mU:function mU(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},nc:function nc(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},oi:function oi(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},fp:function fp(){},uP:function uP(){},uQ:function uQ(){},uR:function uR(){},tf:function tf(){},ti:function ti(){},t5:function t5(){},uz:function uz(){},uT:function uT(){},uU:function uU(){},l1:function l1(){},ur:function ur(){},um:function um(){},mZ:function mZ(){},t9:function t9(){},t0:function t0(){},lj:function lj(){},u9:function u9(){},lk:function lk(){},nM:function nM(){},uG:function uG(){},uD:function uD(){},uH:function uH(){},t_:function t_(){},me:function me(){},l_:function l_(){},t4:function t4(){},t3:function t3(){},us:function us(){},uI:function uI(){},ut:function ut(){},th:function th(){},tg:function tg(){},uF:function uF(){},uE:function uE(){},pa:function pa(){},uK:function uK(){},t6:function t6(){},t7:function t7(){},uS:function uS(){},hE:function hE(){},ue:function ue(){},uf:function uf(){},ug:function ug(){},uh:function uh(){},uA:function uA(){},uB:function uB(){},uC:function uC(){},ud:function ud(){},uj:function uj(){},uk:function uk(){},tu:function tu(){},tv:function tv(){},tw:function tw(){},ul:function ul(){},ui:function ui(){},t1:function t1(){},uM:function uM(){},uN:function uN(){},uL:function uL(){}},K={bR:function bR(a,b){this.a=a
this.b=b},mX:function mX(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},oe:function oe(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c}},L={
yJ:function(a,b,c,d){var t,s,r
t=P.y
s=A.e2
r=P.C
r=new L.aT(P.E(null,null,null,t,s),P.E(null,null,null,r,s),P.E(null,null,null,t,r),P.E(null,null,null,r,t))
r.j(0,$.b2,L.e("#FF9B00"),!0)
r.j(0,$.b4,L.e("#FF9B00"),!0)
r.j(0,$.b3,L.e("#FF8700"),!0)
r.j(0,$.bd,L.e("#7F7F7F"),!0)
r.j(0,$.bc,L.e("#727272"),!0)
r.j(0,$.b6,L.e("#A3A3A3"),!0)
r.j(0,$.b7,L.e("#999999"),!0)
r.j(0,$.b5,L.e("#898989"),!0)
r.j(0,$.bb,L.e("#EFEFEF"),!0)
r.j(0,$.ba,L.e("#DBDBDB"),!0)
r.j(0,$.b9,L.e("#C6C6C6"),!0)
r.j(0,$.b8,L.e("#ADADAD"),!0)
s=[t]
t=new L.fO(0.01,0.01,0.01,0.5,a,new H.w(0,null,null,null,null,null,0,[X.F,P.X]),null,"","",!1,b,null,c,d,!1,!1,!0,1,r,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.N]),H.a([],[A.fU]),Q.J(null,null,A.a6))
t.ah(a,b,c,d)
return t},
e:function(a){if(C.c.ae(a,"#"))return A.vv(C.c.af(a,1))
else return A.vv(a)},
fO:function fO(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
og:function og(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},M={kM:function kM(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fV:function fV(a,b){this.a=a
this.b=b},li:function li(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hd:function hd(){},bu:function bu(a,b){this.a=a
this.b=b},ov:function ov(a){this.a=a},pF:function pF(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
HP:function(){var t,s,r,q,p,o,n,m
A.rD()
W.vW(C.c.aq("../",N.uq())+"navbar.txt",null,null).b1(O.HR())
t=document
s=t.querySelector("#story")
for(r=H.a([$.x6,$.x8,$.x7],[P.y]),q=0;q<3;++q){p=r[q]
o=new Z.ph(p,null,null,null,null)
n=t.createElement("div")
o.b=n
m="<h1>"+p+"</h1>"
n.textContent=null
n.appendChild(C.Q.aA(n,m,null,null))
s.appendChild(n)
o.eO()}}},U={kQ:function kQ(){},nb:function nb(a){this.a=a},nF:function nF(a){this.a=a},oS:function oS(){},oT:function oT(a){this.a=a},oU:function oU(a){this.a=a},lr:function lr(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a8,bt,bu,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.M=M
_.a8=a8
_.bt=bt
_.bu=bu
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
_.x1=x1},lU:function lU(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nd:function nd(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.y=y},pb:function pb(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
GA:function(a){if(J.d3(a).ae(a," "))return C.c.af(a,1)
return a},
pG:function pG(a){this.a=a},
pH:function pH(a,b){this.a=a
this.b=b},
pI:function pI(a,b){this.a=a
this.b=b}},O={kS:function kS(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},cb:function cb(){},ds:function ds(){},kW:function kW(a){this.a=a},eJ:function eJ(){},ix:function ix(){},
HT:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.uq()
a=J.yz(a,P.dA("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.rR(t))
s=document
J.vi(s.querySelector("#navbar"),"beforeend",a,C.w,null)
if(J.b1(O.HF("seerOfVoid",null),"true"))P.zO(new O.rS(),P.d7)
r=new P.e3(Date.now(),!1)
if(H.uw(r)===4&&H.uv(r)===1)J.vf(s.querySelector("body")).h(0,"voidbody")
q=H.uw(r)
p=H.uv(r)
o=C.a.A(H.wR(r))
n=C.a.A(q)
m=C.a.A(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.jT(null,null)
k.d4(H.fr(l,null,null))
k.hO()
if($.Gp||k.a.cN()>0.99)H.kA(s.querySelector("#today"),"$iseX").href=C.c.aq("../",t)+"dead_index.html?seed="+l
else H.kA(s.querySelector("#today"),"$iseX").href=C.c.aq("../",t)+"index2.html?seed="+l},
HF:function(a,b){var t,s,r,q
t=P.xl().gcV().n(0,a)
if(t!=null)t=P.r9(t,0,J.cn(t),C.o,!1)
if(t!=null)return t
s=$.y8
if(s.length!==0){r=J.yC(window.location.href,J.yv(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.xm(H.ya(s,q,"")+"?"+$.y8,0,null).gcV().n(0,a)}return},
I3:function(){var t,s,r,q
t=document
J.vf(t.querySelector("body")).h(0,"voidbody")
s=new W.ki(t.querySelectorAll(".void"),[null])
for(t=new H.ez(s,s.gm(s),0,null,[null]);t.F();){r=t.d
q=J.ym(J.rY(r))
if(q==="none"||q.length===0)O.HY(r)
else O.HH(r)}},
HY:function(a){var t,s
if(a==null)return
t=J.bf(a)
s=t.gaJ(a)
J.vl(s,!!t.$ishS?"inline":"block")},
HH:function(a){if(a==null)return
J.vl(J.rY(a),"none")},
HZ:function(a){var t,s,r,q
if($.Hx)return
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fJ("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.eW(s,",")
if(!J.yi(r,a))window.localStorage.setItem(t,H.B(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.bW(q)
P.fJ("Saving isn't possible....you don't have local storage")}},
rR:function rR(a){this.a=a},
rS:function rS(){},
rQ:function rQ(){},
d_:function d_(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={p6:function p6(a){this.a=a},o5:function o5(a){this.a=a},l0:function l0(a){this.a=a},mf:function mf(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},mg:function mg(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},nB:function nB(b,a){this.b=b
this.a=a},dT:function dT(a,b){this.a=a
this.b=b},a7:function a7(a,b){this.a=a
this.b=b},dh:function dh(r,c,d,e,f,a,b){var _=this
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
_.b=b},il:function il(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bF:function bF(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},d1:function d1(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},l3:function l3(c,a,b){this.c=c
this.a=a
this.b=b},bE:function bE(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},hN:function hN(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iK:function iK(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jR:function jR(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},of:function of(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},op:function op(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},dS:function dS(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nn:function(){var t=0,s=P.bw(),r,q
var $async$nn=P.bB(function(a,b){if(a===1)return P.by(b,s)
while(true)switch(t){case 0:P.fJ("loading big bads")
r=$
q=J
t=2
return P.cL(A.eA("BigBadLists/bigBads.txt",!1,!1,null),$async$nn)
case 2:r.wN=q.eW(b,P.dA("\n|\r",!0,!1))
return P.bz(null,s)}})
return P.bA($async$nn,s)},
Hq:function(a){var t,s,r,q,p,o
t=J.eW(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bV)(t),++q){p=t[q]
o=J.bh(p)
r+=" "+(J.yG(o.n(p,0))+o.af(p,1))}return r}},A={l5:function l5(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
t.H(a,b,c,!1,e)
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
mL:function mL(){},
mK:function mK(){},
fU:function fU(){},
fY:function(a,b,c,d){var t=new A.e2(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eZ(a,b,c,d)
return t},
vu:function(a,b,c,d){var t=A.fY(0,0,0,255)
t.b=C.a.ad(C.d.ai(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ad(C.d.ai(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ad(C.d.ai(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ad(C.d.ai(d*255),0,255)
return t},
z7:function(a,b){if(b){if(typeof a!=="number")return a.aH()
return A.fY((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aH()
return A.fY((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
vv:function(a){return A.z7(H.fr(a,16,new A.rx()),a.length>=8)},
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
rx:function rx(){},
wK:function(){if($.wI)return
$.wI=!0
Z.zF()},
eA:function(a,b,c,d){var t=0,s=P.bw(),r,q,p,o,n
var $async$eA=P.bB(function(e,f){if(e===1)return P.by(f,s)
while(true)switch(t){case 0:A.wK()
t=$.$get$cZ().Z(0,a)?3:5
break
case 3:q=$.$get$cZ().n(0,a)
p=J.aq(q)
if(!!p.$isdS){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cA(q)
t=1
break}}else throw H.k("Requested resource ("+a+") is an unexpected type: "+H.B(J.vh(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.uc==null?8:9
break
case 8:t=10
return P.cL(A.n8(),$async$eA)
case 10:case 9:n=$.uc.eA(a)
t=n!=null?11:12
break
case 11:t=13
return P.cL(A.n3(n),$async$eA)
case 13:if(!$.$get$cZ().Z(0,a))$.$get$cZ().i(0,a,new Y.dS(a,null,H.a([],[[P.f3,,]]),[null]))
r=$.$get$cZ().n(0,a).b
t=1
break
case 12:case 7:r=A.Fe(a,!1,d)
t=1
break
case 4:case 1:return P.bz(r,s)}})
return P.bA($async$eA,s)},
n8:function(){var t=0,s=P.bw(),r
var $async$n8=P.bB(function(a,b){if(a===1)return P.by(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cL(A.eA("manifest/manifest.txt",!1,!0,$.vS),$async$n8)
case 2:r.uc=b
return P.bz(null,s)}})
return P.bA($async$n8,s)},
Fd:function(a){if(!$.$get$cZ().Z(0,a))$.$get$cZ().i(0,a,new Y.dS(a,null,H.a([],[[P.f3,,]]),[null]))
return $.$get$cZ().n(0,a)},
Fe:function(a,b,c){var t
if($.$get$cZ().Z(0,a))throw H.k("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vR(C.b.gb8(a.split("."))).a
t=A.Fd(a)
c.b0(A.wH(a,!1)).b1(new A.n6(t))
return t.cA(0)},
n3:function(a){var t=0,s=P.bw(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$n3=P.bB(function(b,a0){if(b===1)return P.by(a0,s)
while(true)switch(t){case 0:t=3
return P.cL(A.eA(a+".bundle",!1,!0,null),$async$n3)
case 3:q=a0
p=C.c.K(a,0,C.c.ee(a,$.$get$wJ()))
o=P.d7
n=new P.dY(new P.bm(0,$.ao,null,[o]),[o])
m=H.a([],[P.cF])
for(o=J.yn(q),l=o.length,k=[[P.f3,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bV)(o),++i){h=o[i]
g=J.bf(h)
f=Z.vR(C.b.gb8(J.eW(g.gG(h),"."))).a
e=p+"/"+H.B(g.gG(h))
if($.$get$cZ().Z(0,e)){m.push(A.eA(e,!1,!1,null))
continue}d=H.kA(g.gbf(h),"$isdd")
if(!$.$get$cZ().Z(0,e))$.$get$cZ().i(0,e,new Y.dS(e,null,H.a([],k),j))
c=$.$get$cZ().n(0,e)
m.push(c.cA(0))
f.b7(d.buffer).b1(new A.n4(f,c))}P.zP(m,null,!1).b1(new A.n5(n))
r=n.a
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$n3,s)},
hA:function(a,b){var t=0,s=P.bw(),r,q,p,o,n
var $async$hA=P.bB(function(c,d){if(c===1)return P.by(d,s)
while(true)switch(t){case 0:if($.$get$ub().Z(0,a)){r=$.$get$ub().n(0,a)
t=1
break}q=W.fu
p=new P.bm(0,$.ao,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.fA(n,"load",new A.n7(new P.dY(p,[q]),n),!1,W.U)
n.src=A.wH(a,!1)
r=p
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$hA,s)},
wH:function(a,b){if(C.c.ae(a,"/")){a=C.c.af(a,1)
b=!0}else b=!1
if(b)return H.B(window.location.protocol)+"//"+H.B(window.location.host)+"/"+a
return C.c.aq("../",N.uq())+a},
n6:function n6(a){this.a=a},
n4:function n4(a,b){this.a=a
this.b=b},
n5:function n5(a){this.a=a},
n7:function n7(a,b){this.a=a
this.b=b},
nK:function nK(){},
jP:function jP(){},
jT:function jT(a,b){this.a=a
this.b=b},
rD:function(){var t=0,s=P.bw(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$rD=P.bB(function(a0,a1){if(a0===1)return P.by(a1,s)
while(true)switch(t){case 0:if($.y_){t=1
break}$.y_=!0
D.Gv()
q=P.y
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
$.w9=o
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
$.aY=o
o=H.a(["wood"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.3)
$.$get$c().h(0,o)
$.Y=o
o=H.a(["plastic"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.3)
$.$get$c().h(0,o)
$.aF=o
o=H.a(["rubber"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.3)
$.$get$c().h(0,o)
$.cd=o
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
$.bY=o
o=H.a(["flesh","meat","muscle"],p)
n=$.u
H.a([],p)
o=new G.bJ(null,n,o,-0.1)
$.$get$c().h(0,o)
$.bk=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.G
H.a([],p)
o=new G.bJ(null,n,o,3.1)
$.$get$c().h(0,o)
$.bo=o
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
$.bs=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.I
H.a([],p)
o=new G.bJ(null,n,o,0.1)
$.$get$c().h(0,o)
$.c_=o
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
n=$.mJ
H.a([],p)
o=new G.bJ(null,n,o,13)
$.$get$c().h(0,o)
$.a0=o
o=H.a(["Unbeatable"],p)
n=$.mJ
H.a([],p)
o=new G.bJ(null,n,o,40.37)
$.$get$c().h(0,o)
$.ES=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.at=o
o=$.tY
H.a([],p)
o=new G.aK(null,o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.aQ=o
o=$.tY
H.a([],p)
o=new G.aK(null,o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.am=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bj=o
o=$.G
H.a([],p)
o=new G.aK(null,o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.c7=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.aX=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bZ=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aE=o
o=$.G
H.a([],p)
o=new G.aK(null,o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aM=o
o=$.q
H.a([],p)
o=new G.aK(null,o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bp=o
o=$.q
H.a([],p)
o=new G.aK(null,o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a8=o
o=$.q
H.a([],p)
o=new G.aK(null,o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.aW=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bg=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.ap=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.aj=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.an=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.Z=o
o=$.G
H.a([],p)
o=new G.aK(null,o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.au=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aB=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.aU=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.br=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a3=o
o=$.mJ
H.a([],p)
o=new G.aK(null,o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.S=o
o=$.mJ
H.a([],p)
o=new G.aK(null,o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.T=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.az=o
o=$.q
H.a([],p)
o=new G.aK(null,o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.aJ=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aG=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.aZ=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bQ=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bn=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.cc=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.ar=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.ah=o
o=$.q
H.a([],p)
o=new G.aK(null,o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$c().h(0,o)
$.aL=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$c().h(0,o)
$.a9=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aV=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aO=o
o=$.I
H.a([],p)
o=new G.aK(null,o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.bl=o
o=H.a(["perfectly generic"],p)
n=$.I
H.a([],p)
o=new G.ae(null,n,o,0.1)
$.$get$c().h(0,o)
$.wc=o
o=H.a(["a sword"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.eu=o
o=H.a(["a hammer"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mC=o
o=H.a(["a rifle"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tT=o
o=H.a(["a pistol"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tN=o
o=H.a(["a blade"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.w2=o
o=H.a(["a dagger"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tD=o
o=H.a(["a santa"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.hr=o
o=H.a(["a fist"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wa=o
o=H.a(["claws"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mA=o
o=H.a(["a grenade"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mB=o
o=H.a(["a freaking safe"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ws=o
o=H.a(["a ball"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.fh=o
o=H.a(["a trident"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wz=o
o=H.a(["a card"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mz=o
o=H.a(["a frying pan"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tG=o
o=H.a(["a pillow"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.hq=o
o=H.a(["a machinegun"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tJ=o
o=H.a(["a shuriken"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ww=o
o=H.a(["a sling"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wy=o
o=H.a(["a yoyo"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wB=o
o=H.a(["a cane"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.w4=o
o=H.a(["a shield"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.fj=o
o=H.a(["a lance"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wl=o
o=H.a(["a ax"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tz=o
o=H.a(["a sign"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wq=o
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
$.jt=o
o=H.a(["a club"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jv=o
o=H.a(["a bow"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tA=o
o=H.a(["a whip"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wA=o
o=H.a(["a staff"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tV=o
o=H.a(["a needle"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tL=o
o=H.a(["dice"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tE=o
o=H.a(["a fork"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wb=o
o=H.a(["a pigeon???"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,1.3)
$.$get$c().h(0,o)
$.tM=o
o=H.a(["a chainsaw"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.w5=o
o=H.a(["a sickle"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wx=o
o=H.a(["a shotgun"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wu=o
o=H.a(["a stick"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.dP=o
o=H.a(["a chain"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.et=o
o=H.a(["a wrench"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tW=o
o=H.a(["a shovel"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wv=o
o=H.a(["a rolling pin"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tU=o
o=H.a(["a puppet"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tR=o
o=H.a(["a razor"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tS=o
o=H.a(["a pen"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mF=o
o=H.a(["a bust"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ju=o
o=H.a(["a bowling ball"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.Au=o
o=H.a(["a golf club"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.we=o
o=H.a(["a knife"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wk=o
o=H.a(["scissors"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wt=o
o=H.a(["a pizza cutter"],p)
n=$.a4
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.tO=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.G
m=G.a2
l=[m]
k=H.a([$.D,$.at,$.aM],l)
H.a([],p)
o=new G.d("Forged",k,null,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a([],p)
n=$.u
k=H.a([$.ah,$.at],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["fossilized"],p)
n=$.G
k=H.a([$.aY,$.av],l)
H.a([],p)
o=new G.d("Fossilized",k,null,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["adamantium"],p)
n=$.G
k=H.a([$.aY,$.D],l)
H.a([],p)
o=new G.d("Adamantium",k,null,n,o,0)
$.$get$c().h(0,o)
$.w0=o
o=H.a([],p)
n=$.u
k=H.a([$.aZ,$.aG],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["tatami"],p)
n=$.u
k=H.a([$.O,$.Y],l)
H.a([],p)
o=new G.d("Tatami",k,null,n,o,0)
$.$get$c().h(0,o)
$.EG=o
o=H.a(["mesh","chain link"],p)
n=$.u
k=H.a([$.O,$.D],l)
H.a([],p)
o=new G.d("Mesh",k,null,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["foil"],p)
n=$.u
k=H.a([$.K,$.D],l)
H.a([],p)
o=new G.d("Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["beanbag"],p)
n=$.u
k=H.a([$.O,$.av],l)
H.a([],p)
o=new G.d("Beanbag",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ao=o
o=H.a(["pleather","faux fur"],p)
n=$.u
k=H.a([$.ch,$.aF],l)
H.a([],p)
o=new G.d("Faux Fur",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["plywood"],p)
n=$.u
k=H.a([$.Y,$.K],l)
H.a([],p)
o=new G.d("Plywood",k,null,n,o,0)
$.$get$c().h(0,o)
$.tP=o
o=H.a(["colossus"],p)
n=$.u
k=H.a([$.D,$.bk],l)
H.a([],p)
o=new G.d("Colossus",k,null,n,o,0)
$.$get$c().h(0,o)
$.w6=o
o=H.a(["rotting","zombie"],p)
n=$.G
k=H.a([$.c_,$.bk],l)
H.a([],p)
o=new G.d("Rotting",k,null,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["draugr","white walker"],p)
n=$.G
k=H.a([$.c_,$.bk,$.bn],l)
H.a([],p)
o=new G.d("Draugr",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["Ultraviolet"],p)
n=$.tX
k=H.a([$.aQ,$.am],l)
H.a([],p)
o=new G.d("Ultraviolet",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.aQ,$.am,$.at],l)
H.a([],p)
o=new G.d("Ultraviolence",k,null,n,o,0)
$.$get$c().h(0,o)
$.ER=o
o=H.a([],p)
n=$.q
k=H.a([$.aE,$.bZ],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["candy"],p)
n=$.u
k=H.a([$.ap,$.aP],l)
H.a([],p)
o=new G.d("Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.tB=o
o=H.a(["cotton candy"],p)
n=$.u
k=H.a([$.ap,$.O],l)
H.a([],p)
o=new G.d("Cotton Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.B_=o
o=H.a(["gummy"],p)
n=$.u
k=H.a([$.ap,$.cd],l)
H.a([],p)
o=new G.d("Gum",k,null,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["marrow"],p)
n=$.u
k=H.a([$.ap,$.aY],l)
H.a([],p)
o=new G.d("Marrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["toothy"],p)
n=$.a4
k=H.a([$.aY,$.bS],l)
H.a([],p)
o=new G.d("Toothy",k,null,n,o,0)
$.$get$c().h(0,o)
$.EO=o
o=H.a(["Frost"],p)
n=$.u
k=H.a([$.av,$.aP,$.bk],l)
H.a([],p)
o=new G.d("Frost",k,null,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.ap,$.bQ],l)
H.a([],p)
o=new G.d("Arsenic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.u
k=H.a([$.av,$.aP],l)
H.a([],p)
o=new G.d("Crystal",k,null,n,o,0)
$.$get$c().h(0,o)
$.tC=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.I
k=H.a([$.az,$.aB,$.aU,$.Z,$.aj,$.bZ,$.a3],l)
H.a([],p)
o=new G.d("Mary Sue",k,null,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.I
k=H.a([$.aX,$.am,$.at,$.a0,$.aE,$.Z,$.aj,$.an],l)
H.a([],p)
o=new G.d("Edge Lord",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["deadpool"],p)
n=$.a4
k=H.a([$.c_,$.aJ,$.an,$.aU],l)
H.a([],p)
o=new G.d("Deadpool",k,null,n,o,0)
$.$get$c().h(0,o)
$.B5=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.I
k=H.a([$.aX,$.an],l)
H.a([],p)
o=new G.d("Spoopy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["wolverine"],p)
n=$.a4
k=H.a([$.aY,$.at,$.aM],l)
H.a([],p)
o=new G.d("Wolverine",k,null,n,o,0)
$.$get$c().h(0,o)
$.F2=o
o=H.a(["rabbit's foot"],p)
n=$.a4
k=H.a([$.bZ,$.ch],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,null,n,o,0)
$.$get$c().h(0,o)
$.wp=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.G
k=H.a([$.aM,$.Y],l)
H.a([],p)
o=new G.d("Tipped",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ah=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a4
k=H.a([$.aM,$.aL,$.Y],l)
H.a([],p)
o=new G.d("Arrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.w1=o
o=H.a(["training sword","bokken"],p)
n=$.a4
k=H.a([$.Y,$.at],l)
H.a([],p)
o=new G.d("Bokken",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aO,$.an],l)
H.a([],p)
o=new G.d("Irony Type1",k,null,n,o,0)
$.$get$c().h(0,o)
$.mD=o
o=H.a(["netted","webbed"],p)
n=$.a4
k=H.a([$.aW,$.O],l)
H.a([],p)
o=new G.d("Netted",k,null,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["barbed wire"],p)
n=$.a4
k=H.a([$.aM,$.aW,$.D,$.O],l)
H.a([],p)
o=new G.d("Barbed Wire",k,null,n,o,0)
$.$get$c().h(0,o)
$.Al=o
o=H.a(["morning star"],p)
n=$.a4
k=H.a([$.aM,$.ah],l)
H.a([],p)
o=new G.d("Morning Star",k,null,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["decadent"],p)
n=$.I
k=H.a([$.aZ,$.bg],l)
H.a([],p)
o=new G.d("Decadent",k,null,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bT,$.an],l)
H.a([],p)
o=new G.d("SBAHJ",k,null,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["bayonet"],p)
n=$.a4
k=H.a([$.aM,$.aL],l)
H.a([],p)
o=new G.d("Bayonet",k,null,n,o,0)
$.$get$c().h(0,o)
$.An=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.u
k=H.a([$.bn,$.an,$.at],l)
H.a([],p)
o=new G.d("Snoop",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.aQ,$.ar,$.at],l)
H.a([],p)
o=new G.d("Light Saber",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.I
k=H.a([$.a3,$.aO],l)
H.a([],p)
o=new G.d("Fakey Fake",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.I
k=H.a([$.a3,$.bl],l)
H.a([],p)
o=new G.d("Real As Shit",k,null,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["skeletal"],p)
n=$.a4
k=H.a([$.aX,$.aE,$.aY],l)
H.a([],p)
o=new G.d("Skeletal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["green sun"],p)
n=$.tY
k=H.a([$.ar,$.c7,$.aQ],l)
H.a([],p)
o=new G.d("Green Sun",k,null,n,o,0)
$.$get$c().h(0,o)
$.tI=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tX
k=H.a([$.am,$.aj],l)
H.a([],p)
o=new G.d("Midnight",k,null,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["radiant","dazzling"],p)
n=$.I
k=H.a([$.a3,$.aQ],l)
H.a([],p)
o=new G.d("Radiant",k,null,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["edgy"],p)
n=$.I
k=H.a([$.at,$.am,$.an],l)
H.a([],p)
o=new G.d("Edgy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c7,$.bp],l)
H.a([],p)
o=new G.d("Warhead",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aa=o
o=H.a(["living"],p)
n=$.G
k=H.a([$.aY,$.bk,$.au],l)
H.a([],p)
o=new G.d("Living",k,null,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["dead","corpse","deceased"],p)
n=$.G
k=H.a([$.aY,$.bk],l)
H.a([],p)
o=new G.d("Dead",k,null,n,o,0)
$.$get$c().h(0,o)
$.B4=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a8,$.aW,$.aL],l)
H.a([],p)
o=new G.d("Taser",k,null,n,o,0)
$.$get$c().h(0,o)
$.EF=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.am,$.a9],l)
H.a([],p)
o=new G.d("Nocturn",k,null,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aE,$.a9],l)
H.a([],p)
o=new G.d("Dirge",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["Snobbish","Noble"],p)
n=$.I
k=H.a([$.aj,$.bg],l)
H.a([],p)
o=new G.d("Snobbish",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["flat"],p)
n=$.I
k=H.a([$.ah,$.a9],l)
H.a([],p)
o=new G.d("Flat(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.at,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.aj,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,null,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["Bach's"],p)
n=$.aa
k=H.a([$.Z,$.a9],l)
H.a([],p)
o=new G.d("Bach's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aj=o
o=H.a(["Mozart's"],p)
n=$.aa
k=H.a([$.a3,$.a9],l)
H.a([],p)
o=new G.d("Mozart's",k,null,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.aa
k=H.a([$.Z,$.c7],l)
H.a([],p)
o=new G.d("Einstein's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["Feynman's"],p)
n=$.aa
k=H.a([$.Z,$.aU],l)
H.a([],p)
o=new G.d("Feynman's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["Ziptie"],p)
n=$.aa
k=H.a([$.aF,$.aW],l)
H.a([],p)
o=new G.d("Ziptie",k,null,n,o,0)
$.$get$c().h(0,o)
$.F6=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.D,$.Z],l)
H.a([],p)
o=new G.d("Mobile",k,null,n,o,0)
$.$get$c().h(0,o)
$.mH=o
o=H.a(["Sassacre"],p)
n=$.aa
k=H.a([$.cc,$.aU],l)
H.a([],p)
o=new G.d("Sassacre",k,null,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ah,$.cc],l)
H.a([],p)
o=new G.d("Sledge",k,null,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.aW,$.K],l)
H.a([],p)
o=new G.d("Legal",k,null,n,o,0)
$.$get$c().h(0,o)
$.mE=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.aU,$.aV],l)
H.a([],p)
o=new G.d("Clown",k,null,n,o,0)
$.$get$c().h(0,o)
$.AU=o
o=H.a(["passionate"],p)
n=$.I
k=H.a([$.ar,$.aB],l)
H.a([],p)
o=new G.d("Passionate",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["pinata"],p)
n=$.a4
k=H.a([$.K,$.ap],l)
H.a([],p)
o=new G.d("Pinata",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ah,$.cc,$.D],l)
H.a([],p)
o=new G.d("Anvil",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ag=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.aQ,$.bp],l)
H.a([],p)
o=new G.d("Flashbang",k,null,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.am,$.bp],l)
H.a([],p)
o=new G.d("Smokebomb",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.am,$.at],l)
H.a([],p)
o=new G.d("Ninja",k,null,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a8,$.a9],l)
H.a([],p)
o=new G.d("Techno",k,null,n,o,0)
$.$get$c().h(0,o)
$.EI=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.av,$.a9],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,null,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a4
k=H.a([$.au,$.bk,$.aL],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.aU,$.a9,$.aV,$.aX],l)
H.a([],p)
o=new G.d("Juggalo",k,null,n,o,0)
$.$get$c().h(0,o)
$.wj=o
o=H.a(["shocksauce"],p)
n=$.I
k=H.a([$.an,$.a8],l)
H.a([],p)
o=new G.d("Shock Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["weaksauce"],p)
n=$.I
k=H.a([$.ah,$.an,$.bT],l)
H.a([],p)
o=new G.d("Weak Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.EX=o
o=H.a(["spicy","picante"],p)
n=$.I
k=H.a([$.ar,$.ap],l)
H.a([],p)
o=new G.d("Spicy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["ice cream","popsicle"],p)
n=$.u
k=H.a([$.bn,$.ap],l)
H.a([],p)
o=new G.d("Popsicle",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["popsickle"],p)
n=$.u
k=H.a([$.bn,$.ap,$.at],l)
H.a([],p)
o=new G.d("Popsickle",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["icepick"],p)
n=$.u
k=H.a([$.bn,$.aM],l)
H.a([],p)
o=new G.d("Icepick",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["schezwan"],p)
n=$.I
k=H.a([$.an,$.ap],l)
H.a([],p)
o=new G.d("Schezwan",k,null,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.am,$.a9,$.an,$.a8],l)
H.a([],p)
o=new G.d("Vaporwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.EV=o
o=H.a(["mallet"],p)
n=$.a4
k=H.a([$.Y,$.ah],l)
H.a([],p)
o=new G.d("Mallet",k,null,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aF,$.an],l)
H.a([],p)
o=new G.d("Fidget",k,null,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["gold foil"],p)
n=$.u
k=H.a([$.D,$.K,$.bg],l)
H.a([],p)
o=new G.d("Gold Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["caviar"],p)
n=$.u
k=H.a([$.ap,$.bg],l)
H.a([],p)
o=new G.d("Caviar",k,null,n,o,0)
$.$get$c().h(0,o)
$.AK=o
o=H.a(["RADioactive"],p)
n=$.I
k=H.a([$.c7,$.an],l)
H.a([],p)
o=new G.d("RADioactive",k,null,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["glam"],p)
n=$.I
k=H.a([$.av,$.a9,$.az],l)
H.a([],p)
o=new G.d("Glam",k,null,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["hair metal"],p)
n=$.I
k=H.a([$.D,$.a9,$.az],l)
H.a([],p)
o=new G.d("Hair Metal",k,null,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["elven","fae","sylvan"],p)
n=$.I
k=H.a([$.a3,$.az],l)
H.a([],p)
o=new G.d("Elven",k,null,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["shiny"],p)
n=$.I
k=H.a([$.D,$.az],l)
H.a([],p)
o=new G.d("Shiny",k,null,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.I
k=H.a([$.bg,$.az,$.aj],l)
H.a([],p)
o=new G.d("Bespoke",k,null,n,o,0)
$.$get$c().h(0,o)
$.fi=o
o=H.a(["operatic"],p)
n=$.I
k=H.a([$.bg,$.a9,$.aj],l)
H.a([],p)
o=new G.d("Operatic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["ice","diamond"],p)
n=$.u
k=H.a([$.bg,$.bn],l)
H.a([],p)
o=new G.d("Diamond",k,null,n,o,0)
$.$get$c().h(0,o)
$.wh=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.I
k=H.a([$.ar,$.bn],l)
H.a([],p)
o=new G.d("Icy Hot",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.I
k=H.a([$.an,$.bn],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["winter's","season's"],p)
n=$.aa
k=H.a([$.bj,$.bn],l)
H.a([],p)
o=new G.d("Winter's",k,null,n,o,0)
$.$get$c().h(0,o)
$.F_=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.aa
k=H.a([$.a3,$.bn],l)
H.a([],p)
o=new G.d("Christmas",k,null,n,o,0)
$.$get$c().h(0,o)
$.AQ=o
o=H.a(["Santa Saws"],p)
n=$.aa
k=H.a([$.a3,$.bn,$.at],l)
H.a([],p)
o=new G.d("Santa Saws",k,null,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["Santa Sleighs"],p)
n=$.aa
k=H.a([$.hr,$.at],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,null,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["Santa Claws"],p)
n=$.aa
k=H.a([$.hr,$.mA],l)
H.a([],p)
o=new G.d("Santa Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["Sandy Claws"],p)
n=$.aa
k=H.a([$.hr,$.mA,$.av],l)
H.a([],p)
o=new G.d("Sandy Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["Silent Night"],p)
n=$.aa
k=H.a([$.hr,$.am],l)
H.a([],p)
o=new G.d("Silent Night",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.aa
k=H.a([$.aX,$.bY],l)
H.a([],p)
o=new G.d("Ghost's",k,null,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["ghoul","mutant"],p)
n=$.u
k=H.a([$.bk,$.c7,$.c_],l)
H.a([],p)
o=new G.d("Mutant",k,null,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.an,$.D],l)
H.a([],p)
o=new G.d("Skateboard",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c7,$.a8,$.ap],l)
H.a([],p)
o=new G.d("Microwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c7,$.a8,$.ap,$.aL],l)
H.a([],p)
o=new G.d("Orbital",k,null,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a([],p)
n=$.q
k=H.a([$.ah,$.Z],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["uranium"],p)
n=$.u
k=H.a([$.c7,$.av],l)
H.a([],p)
o=new G.d("Uranium",k,null,n,o,0)
$.$get$c().h(0,o)
$.EU=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.K,$.cd],l)
H.a([],p)
o=new G.d("Mousepad",k,null,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["flint"],p)
n=$.u
k=H.a([$.at,$.av],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["flint"],p)
n=$.u
k=H.a([$.aM,$.av],l)
H.a([],p)
o=new G.d("Pointed Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aF,$.aM],l)
H.a([],p)
o=new G.d("Picnic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["xtreme xplosion"],p)
n=$.I
k=H.a([$.an,$.bp],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,null,n,o,0)
$.$get$c().h(0,o)
$.F5=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aF,$.aZ],l)
H.a([],p)
o=new G.d("Lawn",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["upholstered"],p)
n=$.u
k=H.a([$.O,$.aZ],l)
H.a([],p)
o=new G.d("Upholstered",k,null,n,o,0)
$.$get$c().h(0,o)
$.ET=o
o=H.a(["leather"],p)
n=$.u
k=H.a([$.bk,$.aZ],l)
H.a([],p)
o=new G.d("Leather",k,null,n,o,0)
$.$get$c().h(0,o)
$.wn=o
o=H.a(["shag"],p)
n=$.u
k=H.a([$.ch,$.aZ],l)
H.a([],p)
o=new G.d("Shag",k,null,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["loyal"],p)
n=$.I
k=H.a([$.ah,$.aB],l)
H.a([],p)
o=new G.d("Loyal",k,null,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["porcelain"],p)
n=$.u
k=H.a([$.az,$.bS],l)
H.a([],p)
o=new G.d("Porcelain",k,null,n,o,0)
$.$get$c().h(0,o)
$.tQ=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a4
k=H.a([$.bg,$.bS],l)
H.a([],p)
o=new G.d("Pork Hollow",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.an,$.at],l)
H.a([],p)
o=new G.d("Katana",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["chocolate"],p)
n=$.u
k=H.a([$.aB,$.ap],l)
H.a([],p)
o=new G.d("Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.AP=o
o=H.a(["wrapped chocolate"],p)
n=$.u
k=H.a([$.aB,$.ap,$.K,$.D],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["scratch-n-sniff"],p)
n=$.u
k=H.a([$.an,$.K],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,null,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["mythril","orichalcum"],p)
n=$.u
k=H.a([$.a3,$.D],l)
H.a([],p)
o=new G.d("Mythril",k,null,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["titanium","steel"],p)
n=$.u
k=H.a([$.ah,$.D],l)
H.a([],p)
o=new G.d("Titanium",k,null,n,o,0)
$.$get$c().h(0,o)
$.EN=o
o=H.a(["lead"],p)
n=$.u
k=H.a([$.cc,$.D],l)
H.a([],p)
o=new G.d("Lead",k,null,n,o,0)
$.$get$c().h(0,o)
$.wm=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aO,$.aU],l)
H.a([],p)
o=new G.d("Satire",k,null,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["comedy gold"],p)
n=$.I
k=H.a([$.bg,$.aU],l)
H.a([],p)
o=new G.d("Comedy Gold",k,null,n,o,0)
$.$get$c().h(0,o)
$.AW=o
o=H.a(["dry","sensible chuckle"],p)
n=$.I
k=H.a([$.aj,$.aU],l)
H.a([],p)
o=new G.d("Dry",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["polite"],p)
n=$.I
k=H.a([$.aZ,$.aO],l)
H.a([],p)
o=new G.d("Polite",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["stradivarius"],p)
n=$.aa
k=H.a([$.aj,$.bg,$.Y,$.a9],l)
H.a([],p)
o=new G.d("Stradivarius",k,null,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a(["scientistic"],p)
n=$.I
k=H.a([$.Z,$.aO],l)
H.a([],p)
o=new G.d("Scientistic",k,null,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a8,$.au],l)
H.a([],p)
o=new G.d("AI",k,null,n,o,0)
$.$get$c().h(0,o)
$.ty=o
o=H.a(["robotic"],p)
n=$.G
k=H.a([$.D,$.a8,$.au],l)
H.a([],p)
o=new G.d("Robotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.wr=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.Y,$.bp],l)
H.a([],p)
o=new G.d("Shrapnel",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.au,$.a8,$.a9],l)
H.a([],p)
o=new G.d("Vocaloid",k,null,n,o,0)
$.$get$c().h(0,o)
$.EW=o
o=H.a(["*Hyun-ae"],p)
n=$.aa
k=H.a([$.au,$.a8,$.aB],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.Y,$.aL],l)
H.a([],p)
o=new G.d("Buckshot",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ay=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.cc,$.aL],l)
H.a([],p)
o=new G.d("Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.AH=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.aj,$.K],l)
H.a([],p)
o=new G.d("Stationary",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a([],p)
n=$.q
k=H.a([$.aD,$.K],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a([],p)
n=$.q
k=H.a([$.D,$.aL],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.at,$.K],l)
H.a([],p)
o=new G.d("Papercut",k,null,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["squeaky"],p)
n=$.G
k=H.a([$.ah,$.cd],l)
H.a([],p)
o=new G.d("Squeaky",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aO,$.a9],l)
H.a([],p)
o=new G.d("Kazoo",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aJ,$.K],l)
H.a([],p)
o=new G.d("Bandaid",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ak=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aJ,$.ap],l)
H.a([],p)
o=new G.d("Gushers",k,null,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aJ,$.aL],l)
H.a([],p)
o=new G.d("Medic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["sick nasty","ill"],p)
n=$.G
k=H.a([$.an,$.bQ],l)
H.a([],p)
o=new G.d("Sick Nasty",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["gilded","gold leaf"],p)
n=$.u
k=H.a([$.D,$.Y],l)
H.a([],p)
o=new G.d("Gilded",k,null,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aF,$.a8],l)
H.a([],p)
o=new G.d("Charging",k,null,n,o,0)
$.$get$c().h(0,o)
$.AO=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.cd,$.at],l)
H.a([],p)
o=new G.d("Rubber Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aF,$.at],l)
H.a([],p)
o=new G.d("Plastic Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["thunderous","thor's"],p)
n=$.I
k=H.a([$.aV,$.a8],l)
H.a([],p)
o=new G.d("Thunderous",k,null,n,o,0)
$.$get$c().h(0,o)
$.EL=o
o=H.a(["screeching","dial up"],p)
n=$.I
k=H.a([$.aV,$.a8,$.Z],l)
H.a([],p)
o=new G.d("Screeching",k,null,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.aP,$.D],l)
H.a([],p)
o=new G.d("Mirrored",k,null,n,o,0)
$.$get$c().h(0,o)
$.tK=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.aP,$.av,$.a3],l)
H.a([],p)
o=new G.d("Far Seeing",k,null,n,o,0)
$.$get$c().h(0,o)
$.w7=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.cd,$.aL],l)
H.a([],p)
o=new G.d("Nonlethal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.az,$.aj],l)
H.a([],p)
o=new G.d("Fashionable",k,null,n,o,0)
$.$get$c().h(0,o)
$.tF=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aU,$.an],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.bT,$.aU],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,null,n,o,0)
$.$get$c().h(0,o)
$.wi=o
o=H.a(["post-ironic"],p)
n=$.I
k=H.a([$.aO,$.an,$.aj],l)
H.a([],p)
o=new G.d("Post Ironic",k,null,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["monstrous"],p)
n=$.I
k=H.a([$.c_,$.aV,$.aX],l)
H.a([],p)
o=new G.d("Monstrous",k,null,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aL,$.an,$.aj],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,null,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["golden"],p)
n=$.u
k=H.a([$.D,$.bg],l)
H.a([],p)
o=new G.d("Golden",k,null,n,o,0)
$.$get$c().h(0,o)
$.tH=o
o=H.a(["platinum"],p)
n=$.u
k=H.a([$.aQ,$.D],l)
H.a([],p)
o=new G.d("Platinum",k,null,n,o,0)
$.$get$c().h(0,o)
$.mG=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bZ,$.D],l)
H.a([],p)
o=new G.d("Horseshoe",k,null,n,o,0)
$.$get$c().h(0,o)
$.wg=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.O,$.ch],l)
H.a([],p)
o=new G.d("Felt",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["marble"],p)
n=$.u
k=H.a([$.av,$.aj],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.wo=o
o=H.a(["marble"],p)
n=$.u
k=H.a([$.av,$.cc],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["glitched"],p)
n=$.G
k=H.a([$.bo,$.a8],l)
H.a([],p)
o=new G.d("Glitched",k,null,n,o,0)
$.$get$c().h(0,o)
$.wd=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aJ,$.a8],l)
H.a([],p)
o=new G.d("Debugging",k,null,n,o,0)
$.$get$c().h(0,o)
$.B7=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.D,$.aV,$.a9],l)
H.a([],p)
o=new G.d("Metalic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["Simulacrum"],p)
n=$.I
k=H.a([$.au,$.aO],l)
H.a([],p)
o=new G.d("Simulacrum",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.ap,$.aO],l)
H.a([],p)
o=new G.d("Imitation",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aJ,$.aO],l)
H.a([],p)
o=new G.d("Placebo",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bg,$.aO],l)
H.a([],p)
o=new G.d("Counterfeit",k,null,n,o,0)
$.$get$c().h(0,o)
$.B0=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.an,$.aG,$.aU],l)
H.a([],p)
o=new G.d("Surreal1",k,null,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["Brainy"],p)
n=$.I
k=H.a([$.Z,$.bk],l)
H.a([],p)
o=new G.d("Brainy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Av=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.ar,$.bp],l)
H.a([],p)
o=new G.d("Incendiary",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["C-4"],p)
n=$.u
k=H.a([$.bp,$.aF],l)
H.a([],p)
o=new G.d("C-4",k,null,n,o,0)
$.$get$c().h(0,o)
$.AC=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a3,$.aQ,$.bo],l)
H.a([],p)
o=new G.d("Fae",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["Plutonium"],p)
n=$.u
k=H.a([$.D,$.c7],l)
H.a([],p)
o=new G.d("Plutonium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["Lithium"],p)
n=$.u
k=H.a([$.D,$.a8],l)
H.a([],p)
o=new G.d("Lithium",k,null,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["Molten"],p)
n=$.u
k=H.a([$.D,$.ar],l)
H.a([],p)
o=new G.d("Molten",k,null,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.u
k=H.a([$.av,$.ar],l)
H.a([],p)
o=new G.d("Magma",k,null,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["Rusty"],p)
n=$.G
k=H.a([$.D,$.bT],l)
H.a([],p)
o=new G.d("Rusty",k,null,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.at,$.an,$.aj],l)
H.a([],p)
o=new G.d("Fonzie",k,null,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aB,$.aU],l)
H.a([],p)
o=new G.d("Romcom",k,null,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.az,$.aQ],l)
H.a([],p)
o=new G.d("Alluring",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ad=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.az,$.am],l)
H.a([],p)
o=new G.d("Masquerade",k,null,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.av,$.bk],l)
H.a([],p)
o=new G.d("Stoneskin",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a3,$.Z],l)
H.a([],p)
o=new G.d("Psionic",k,null,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a3,$.av],l)
H.a([],p)
o=new G.d("Dwarven",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["Elemental","Animated"],p)
n=$.u
k=H.a([$.a3,$.au],l)
H.a([],p)
o=new G.d("Elemental",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["Gourmet"],p)
n=$.I
k=H.a([$.ap,$.aj],l)
H.a([],p)
o=new G.d("Gourmet",k,null,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["Stained Glass"],p)
n=$.u
k=H.a([$.aP,$.az,$.bg],l)
H.a([],p)
o=new G.d("Stained Glass",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aJ,$.O],l)
H.a([],p)
o=new G.d("Gauze",k,null,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Locked"],p)
n=$.G
k=H.a([$.aW,$.br],l)
H.a([],p)
o=new G.d("Locked",k,null,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.av,$.K],l)
H.a([],p)
o=new G.d("Etched",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["Papyrus"],p)
n=$.u
k=H.a([$.K,$.aR],l)
H.a([],p)
o=new G.d("Papyrus",k,null,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.K,$.aF],l)
H.a([],p)
o=new G.d("Film",k,null,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Saucey"],p)
n=$.u
k=H.a([$.bo,$.br,$.ap],l)
H.a([],p)
o=new G.d("Saucey",k,null,n,o,0)
$.$get$c().h(0,o)
$.jw=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.K,$.bZ],l)
H.a([],p)
o=new G.d("Lottery",k,null,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.am,$.O],l)
H.a([],p)
o=new G.d("Blindfolded",k,null,n,o,0)
$.$get$c().h(0,o)
$.w3=o
o=H.a(["Possessed"],p)
n=$.G
k=H.a([$.bY,$.bk],l)
H.a([],p)
o=new G.d("Possessed",k,null,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["Infernal"],p)
n=$.I
k=H.a([$.bY,$.ar],l)
H.a([],p)
o=new G.d("Infernal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.Y,$.bl,$.tR,$.au],l)
H.a([],p)
o=new G.d("Geppetto",k,null,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["Abominable"],p)
n=$.I
k=H.a([$.bk,$.bo],l)
H.a([],p)
o=new G.d("Abominable",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ab=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aB,$.aE],l)
H.a([],p)
o=new G.d("Ashen",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ai=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aB,$.bj],l)
H.a([],p)
o=new G.d("Pale",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aB,$.br],l)
H.a([],p)
o=new G.d("Pitch",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["Lit"],p)
n=$.I
k=H.a([$.an,$.ar],l)
H.a([],p)
o=new G.d("Lit",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a3,$.bj],l)
H.a([],p)
o=new G.d("Hypnotizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bj,$.aW],l)
H.a([],p)
o=new G.d("Tranquilizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.EQ=o
o=H.a([],p)
n=$.q
k=H.a([$.bj,$.br],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.AF=o
o=H.a(["Ghost Rider's"],p)
n=$.aa
k=H.a([$.et,$.ar,$.bY],l)
H.a([],p)
o=new G.d("Ghost Rider",k,null,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["Logical"],p)
n=$.I
k=H.a([$.Z,$.bn],l)
H.a([],p)
o=new G.d("Logical",k,null,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["Duelist's"],p)
n=$.aa
k=H.a([$.aL,$.aj],l)
H.a([],p)
o=new G.d("Duelist's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["Silenced"],p)
n=$.G
k=H.a([$.aL,$.am],l)
H.a([],p)
o=new G.d("Silenced",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["Deudly"],p)
n=$.G
k=H.a([$.aL,$.bT],l)
H.a([],p)
o=new G.d("Deudly",k,null,n,o,0)
$.$get$c().h(0,o)
$.B6=o
o=H.a(["Screaming"],p)
n=$.G
k=H.a([$.aV,$.aX],l)
H.a([],p)
o=new G.d("Screaming",k,null,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["Cacophonous"],p)
n=$.I
k=H.a([$.c_,$.a9],l)
H.a([],p)
o=new G.d("Cacophonous",k,null,n,o,0)
$.$get$c().h(0,o)
$.AD=o
o=H.a(["Sublime"],p)
n=$.I
k=H.a([$.c_,$.az],l)
H.a([],p)
o=new G.d("Sublime",k,null,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["Masterwork"],p)
n=$.u
k=H.a([$.bl,$.bg],l)
H.a([],p)
o=new G.d("Masterwork",k,null,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.au,$.aX,$.bo,$.a3],l)
H.a([],p)
o=new G.d("BroodFester",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ax=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bo,$.am],l)
H.a([],p)
o=new G.d("[REDACTED]",k,null,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.ap,$.bp],l)
H.a([],p)
o=new G.d("Pop Rocks",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["Disguised"],p)
n=$.G
k=H.a([$.am,$.aO],l)
H.a([],p)
o=new G.d("Disguised",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["Haunted"],p)
n=$.G
k=H.a([$.aG,$.bY],l)
H.a([],p)
o=new G.d("Haunted",k,null,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["Cognitohazardous"],p)
n=$.G
k=H.a([$.bo,$.Z],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,null,n,o,0)
$.$get$c().h(0,o)
$.AV=o
o=H.a(["Staticy"],p)
n=$.G
k=H.a([$.aG,$.a8],l)
H.a([],p)
o=new G.d("Staticy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.aP,$.c7],l)
H.a([],p)
o=new G.d("Jadite",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.aU,$.aG],l)
H.a([],p)
o=new G.d("Tickling",k,null,n,o,0)
$.$get$c().h(0,o)
$.EM=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.D,$.bS],l)
H.a([],p)
o=new G.d("Composite",k,null,n,o,0)
$.$get$c().h(0,o)
$.AX=o
o=H.a(["High-Powered"],p)
n=$.G
k=H.a([$.bp,$.aL],l)
H.a([],p)
o=new G.d("High-Powered",k,null,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bp,$.ah],l)
H.a([],p)
o=new G.d("Concussive",k,null,n,o,0)
$.$get$c().h(0,o)
$.AY=o
o=H.a(["Down"],p)
n=$.u
k=H.a([$.aZ,$.bs],l)
H.a([],p)
o=new G.d("Down",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["Prickly"],p)
n=$.u
k=H.a([$.aG,$.aM],l)
H.a([],p)
o=new G.d("Prickly",k,null,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aG,$.am,$.a8],l)
H.a([],p)
o=new G.d("Deep-Web",k,null,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.u
k=H.a([$.aM,$.at],l)
H.a([],p)
o=new G.d("Jagged",k,null,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["Nanofiber"],p)
n=$.u
k=H.a([$.O,$.Z],l)
H.a([],p)
o=new G.d("Nanofiber",k,null,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.D,$.aV],l)
H.a([],p)
o=new G.d("Clanging",k,null,n,o,0)
$.$get$c().h(0,o)
$.AR=o
o=H.a(["Silver"],p)
n=$.u
k=H.a([$.D,$.aj],l)
H.a([],p)
o=new G.d("Silver",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["Withered"],p)
n=$.G
k=H.a([$.aE,$.aR],l)
H.a([],p)
o=new G.d("Withered",k,null,n,o,0)
$.$get$c().h(0,o)
$.F1=o
o=H.a(["Shattered"],p)
n=$.G
k=H.a([$.aP,$.bT],l)
H.a([],p)
o=new G.d("Shattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["Miner's"],p)
n=$.aa
k=H.a([$.av,$.D],l)
H.a([],p)
o=new G.d("Miner's",k,null,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a9,$.au],l)
H.a([],p)
o=new G.d("Singing",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bk,$.a8],l)
H.a([],p)
o=new G.d("Mitochondrial",k,null,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.am,$.a8],l)
H.a([],p)
o=new G.d("Blackout",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aq=o
o=H.a(["Asbestos"],p)
n=$.u
k=H.a([$.av,$.bQ],l)
H.a([],p)
o=new G.d("Asbestos",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ac=o
o=H.a(["Mercurial"],p)
n=$.u
k=H.a([$.bQ,$.D],l)
H.a([],p)
o=new G.d("Mercurial",k,null,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["Bulletproof"],p)
n=$.u
k=H.a([$.O,$.ah],l)
H.a([],p)
o=new G.d("Bulletproof",k,null,n,o,0)
$.$get$c().h(0,o)
$.AA=o
o=H.a(["Cotton"],p)
n=$.u
k=H.a([$.aR,$.O],l)
H.a([],p)
o=new G.d("Cotton",k,null,n,o,0)
$.$get$c().h(0,o)
$.AZ=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.br,$.aQ],l)
H.a([],p)
o=new G.d("Blinding",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ar=o
o=H.a(["Brilliant"],p)
n=$.I
k=H.a([$.aQ,$.Z],l)
H.a([],p)
o=new G.d("Brilliant",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aw=o
o=H.a(["Offensive"],p)
n=$.I
k=H.a([$.br,$.Z],l)
H.a([],p)
o=new G.d("Offensive",k,null,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["Poached"],p)
n=$.G
k=H.a([$.bk,$.bg],l)
H.a([],p)
o=new G.d("Poached",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["Tapestry"],p)
n=$.u
k=H.a([$.O,$.az],l)
H.a([],p)
o=new G.d("Tapestry",k,null,n,o,0)
$.$get$c().h(0,o)
$.EE=o
o=H.a(["Itchy"],p)
n=$.I
k=H.a([$.O,$.aG],l)
H.a([],p)
o=new G.d("Itchy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["Wishbone"],p)
n=$.u
k=H.a([$.bZ,$.aY],l)
H.a([],p)
o=new G.d("Wishbone",k,null,n,o,0)
$.$get$c().h(0,o)
$.F0=o
o=H.a(["Rattling"],p)
n=$.G
k=H.a([$.aV,$.aY],l)
H.a([],p)
o=new G.d("Rattling",k,null,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["Cranial"],p)
n=$.u
k=H.a([$.Z,$.aY],l)
H.a([],p)
o=new G.d("Cranial",k,null,n,o,0)
$.$get$c().h(0,o)
$.B2=o
o=H.a(["Humerus"],p)
n=$.u
k=H.a([$.aU,$.aY],l)
H.a([],p)
o=new G.d("Humerus",k,null,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aJ,$.aZ],l)
H.a([],p)
o=new G.d("Massage",k,null,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["Pestersome","Irksome"],p)
n=$.I
k=H.a([$.aV,$.br],l)
H.a([],p)
o=new G.d("Pestersome",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aV,$.bp],l)
H.a([],p)
o=new G.d("Shockwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bQ,$.aJ],l)
H.a([],p)
o=new G.d("Antivenom",k,null,n,o,0)
$.$get$c().h(0,o)
$.Af=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.u
k=H.a([$.ar,$.a3],l)
H.a([],p)
o=new G.d("Will O Wisp",k,null,n,o,0)
$.$get$c().h(0,o)
$.EY=o
o=H.a(["Fiberglass"],p)
n=$.u
k=H.a([$.O,$.aP],l)
H.a([],p)
o=new G.d("Fiberglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["Skull"],p)
n=$.u
k=H.a([$.aY,$.aX],l)
H.a([],p)
o=new G.d("Skull",k,null,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["Enchanted"],p)
n=$.G
k=H.a([$.a3,$.bZ],l)
H.a([],p)
o=new G.d("Enchanted",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["Berserker's"],p)
n=$.aa
k=H.a([$.a3,$.br],l)
H.a([],p)
o=new G.d("Berserker's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ap=o
o=H.a(["Clerical"],p)
n=$.aa
k=H.a([$.a3,$.aJ],l)
H.a([],p)
o=new G.d("Clerical",k,null,n,o,0)
$.$get$c().h(0,o)
$.AS=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aJ,$.ar],l)
H.a([],p)
o=new G.d("Cauterizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.AJ=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c7,$.aQ],l)
H.a([],p)
o=new G.d("X-Ray",k,null,n,o,0)
$.$get$c().h(0,o)
$.F4=o
o=H.a(["Clever"],p)
n=$.I
k=H.a([$.Z,$.bZ],l)
H.a([],p)
o=new G.d("Clever",k,null,n,o,0)
$.$get$c().h(0,o)
$.AT=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.aZ,$.ar],l)
H.a([],p)
o=new G.d("Fireplace",k,null,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["Crackling"],p)
n=$.G
k=H.a([$.aV,$.ar],l)
H.a([],p)
o=new G.d("Crackling",k,null,n,o,0)
$.$get$c().h(0,o)
$.B1=o
o=H.a(["Thumping"],p)
n=$.G
k=H.a([$.aV,$.cc],l)
H.a([],p)
o=new G.d("Thumping",k,null,n,o,0)
$.$get$c().h(0,o)
$.EK=o
o=H.a(["Shrieking","Banshee"],p)
n=$.G
k=H.a([$.bY,$.aV],l)
H.a([],p)
o=new G.d("Banshee",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.aU,$.bo],l)
H.a([],p)
o=new G.d("Surreal2",k,null,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aJ,$.aR],l)
H.a([],p)
o=new G.d("Aloe",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ae=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aB,$.aR],l)
H.a([],p)
o=new G.d("Rose",k,null,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.aU,$.ah],l)
H.a([],p)
o=new G.d("Knock Knock",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a3,$.bQ],l)
H.a([],p)
o=new G.d("Lifesteal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.az,$.aE],l)
H.a([],p)
o=new G.d("Tragic",k,null,n,o,0)
$.$get$c().h(0,o)
$.EP=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.at,$.aU],l)
H.a([],p)
o=new G.d("Slapstick",k,null,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.c_,$.aU],l)
H.a([],p)
o=new G.d("Gross Out",k,null,n,o,0)
$.$get$c().h(0,o)
$.wf=o
o=H.a(["Flowery"],p)
n=$.u
k=H.a([$.az,$.aR],l)
H.a([],p)
o=new G.d("Flowery",k,null,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["Poison Ivy"],p)
n=$.u
k=H.a([$.bQ,$.aR],l)
H.a([],p)
o=new G.d("Poison Ivy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.G
k=H.a([$.a3,$.bs],l)
H.a([],p)
o=new G.d("Winged",k,null,n,o,0)
$.$get$c().h(0,o)
$.EZ=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.aR,$.ap,$.aE],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,null,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["Lawful"],p)
n=$.I
k=H.a([$.aW,$.au],l)
H.a([],p)
o=new G.d("Lawful",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["Chaotic"],p)
n=$.I
k=H.a([$.br,$.au],l)
H.a([],p)
o=new G.d("Chaotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.AN=o
o=H.a(["Hypothermic"],p)
n=$.G
k=H.a([$.aE,$.bn],l)
H.a([],p)
o=new G.d("Hypothermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["Hyperthermic"],p)
n=$.G
k=H.a([$.aE,$.ar],l)
H.a([],p)
o=new G.d("Hyperthermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["Shackled"],p)
n=$.G
k=H.a([$.aW,$.cc],l)
H.a([],p)
o=new G.d("Shackled",k,null,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["Poetic"],p)
n=$.I
k=H.a([$.Z,$.aB],l)
H.a([],p)
o=new G.d("Poetic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["Holographic"],p)
n=$.u
k=H.a([$.aQ,$.Z,$.aP,$.a8],l)
H.a([],p)
o=new G.d("Holographic",k,null,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["Casket","Coffin"],p)
n=$.u
k=H.a([$.Y,$.aE],l)
H.a([],p)
o=new G.d("Casket",k,null,n,o,0)
$.$get$c().h(0,o)
$.AI=o
o=H.a(["Spectral"],p)
n=$.u
k=H.a([$.bY,$.a3],l)
H.a([],p)
o=new G.d("Spectral",k,null,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["Phoenix"],p)
n=$.u
k=H.a([$.ar,$.bs],l)
H.a([],p)
o=new G.d("Phoenix",k,null,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["Tattered"],p)
n=$.G
k=H.a([$.O,$.aE],l)
H.a([],p)
o=new G.d("Tattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.EH=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a9,$.Y],l)
H.a([],p)
o=new G.d("Woodwind",k,null,n,o,0)
$.$get$c().h(0,o)
$.F3=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aG,$.aY],l)
H.a([],p)
o=new G.d("Bone Hurting",k,null,n,o,0)
$.$get$c().h(0,o)
$.At=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aJ,$.aY],l)
H.a([],p)
o=new G.d("Bone Healing:",k,null,n,o,0)
$.$get$c().h(0,o)
$.As=o
o=H.a(["Calcium"],p)
n=$.u
k=H.a([$.aY,$.aJ,$.ap],l)
H.a([],p)
o=new G.d("Calcium",k,null,n,o,0)
$.$get$c().h(0,o)
$.AE=o
o=H.a(["Fleece"],p)
n=$.u
k=H.a([$.O,$.ar],l)
H.a([],p)
o=new G.d("Fleece",k,null,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["Potted"],p)
n=$.u
k=H.a([$.bS,$.aR],l)
H.a([],p)
o=new G.d("Potted",k,null,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.u
k=H.a([$.D,$.ap],l)
H.a([],p)
o=new G.d("Canned",k,null,n,o,0)
$.$get$c().h(0,o)
$.AG=o
o=H.a(["Diseased"],p)
n=$.G
k=H.a([$.aE,$.bk],l)
H.a([],p)
o=new G.d("Diseased",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["Porcupine"],p)
n=$.u
k=H.a([$.aM,$.ch],l)
H.a([],p)
o=new G.d("Porcupine",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["Fanged"],p)
n=$.G
k=H.a([$.aY,$.aM],l)
H.a([],p)
o=new G.d("Fanged",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["Basalt"],p)
n=$.u
k=H.a([$.av,$.am],l)
H.a([],p)
o=new G.d("Basalt",k,null,n,o,0)
$.$get$c().h(0,o)
$.Am=o
o=H.a(["Obsidian"],p)
n=$.u
k=H.a([$.aP,$.am],l)
H.a([],p)
o=new G.d("Obsidian",k,null,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["Fenestrated"],p)
n=$.u
k=H.a([$.aP,$.Y],l)
H.a([],p)
o=new G.d("Fenestrated",k,null,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["Plexiglass"],p)
n=$.u
k=H.a([$.aP,$.aF],l)
H.a([],p)
o=new G.d("Plexiglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bS,$.K],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,null,n,o,0)
$.$get$c().h(0,o)
$.AM=o
o=H.a(["Fungal"],p)
n=$.u
k=H.a([$.aR,$.c_],l)
H.a([],p)
o=new G.d("Fungal",k,null,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["Thorny"],p)
n=$.G
k=H.a([$.aR,$.aM],l)
H.a([],p)
o=new G.d("Thorny",k,null,n,o,0)
$.$get$c().h(0,o)
$.EJ=o
o=H.a(["Bulbed"],p)
n=$.G
k=H.a([$.aR,$.ah],l)
H.a([],p)
o=new G.d("Bulbed",k,null,n,o,0)
$.$get$c().h(0,o)
$.Az=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.aP,$.aL],l)
H.a([],p)
o=new G.d("Glass Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.aR,$.cd],l)
H.a([],p)
o=new G.d("Caoutchouc",k,null,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["Cellulose"],p)
n=$.u
k=H.a([$.aR,$.aF],l)
H.a([],p)
o=new G.d("Cellulose",k,null,n,o,0)
$.$get$c().h(0,o)
$.AL=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a9,$.aX],l)
H.a([],p)
o=new G.d("Horrorcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bo,$.a9],l)
H.a([],p)
o=new G.d("Nightcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bo,$.a8,$.a9],l)
H.a([],p)
o=new G.d("Crazy Bus",k,null,n,o,0)
$.$get$c().h(0,o)
$.B3=o
o=H.a(["Burdock"],p)
n=$.u
k=H.a([$.aR,$.ch],l)
H.a([],p)
o=new G.d("Burdock",k,null,n,o,0)
$.$get$c().h(0,o)
$.AB=o
o=H.a(["Necrotic"],p)
n=$.G
k=H.a([$.aY,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Necrotic",k,null,n,o,0))
o=H.a(["Stem"],p)
n=$.u
k=H.a([$.aY,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stem",k,null,n,o,0))
o=H.a(["DryBone"],p)
n=$.G
k=H.a([$.aY,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("DryBone",k,null,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.aY,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("XyloBone",k,null,n,o,0))
o=H.a(["Ribcage"],p)
n=$.u
k=H.a([$.aY,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ribcage",k,null,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.aY,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("BoneZone",k,null,n,o,0))
o=H.a(["Creaky"],p)
n=$.I
k=H.a([$.Y,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Creaky",k,null,n,o,0))
o=H.a(["Maple"],p)
n=$.u
k=H.a([$.Y,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Maple",k,null,n,o,0))
o=H.a(["Mahagony"],p)
n=$.u
k=H.a([$.Y,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mahagony",k,null,n,o,0))
o=H.a(["Fenced"],p)
n=$.G
k=H.a([$.Y,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fenced",k,null,n,o,0))
o=H.a(["Bocote"],p)
n=$.u
k=H.a([$.Y,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bocote",k,null,n,o,0))
o=H.a(["Incense"],p)
n=$.u
k=H.a([$.Y,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incense",k,null,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.Y,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebony",k,null,n,o,0))
o=H.a(["Birch"],p)
n=$.u
k=H.a([$.Y,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Birch",k,null,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.q
k=H.a([$.Y,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knock-on-Wood",k,null,n,o,0))
o=H.a(["Firewood"],p)
n=$.q
k=H.a([$.Y,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firewood",k,null,n,o,0))
o=H.a(["BlackForest"],p)
n=$.aa
k=H.a([$.Y,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackForest",k,null,n,o,0))
o=H.a(["Tree"],p)
n=$.u
k=H.a([$.Y,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tree",k,null,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.u
k=H.a([$.Y,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebonwood",k,null,n,o,0))
o=H.a(["Bark"],p)
n=$.u
k=H.a([$.Y,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bark",k,null,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.Y,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Caveman's",k,null,n,o,0))
o=H.a(["3D Printed"],p)
n=$.u
k=H.a([$.aF,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("3D Printed",k,null,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.K,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thesis",k,null,n,o,0))
o=H.a(["Graphene"],p)
n=$.u
k=H.a([$.K,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graphene",k,null,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.K,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prophecy",k,null,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.O,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedsheet",k,null,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.u
k=H.a([$.av,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gemstone",k,null,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.av,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pet Rock",k,null,n,o,0))
o=H.a(["Sand"],p)
n=$.u
k=H.a([$.av,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sand",k,null,n,o,0))
o=H.a(["Geode"],p)
n=$.u
k=H.a([$.av,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Geode",k,null,n,o,0))
o=H.a(["Silicon"],p)
n=$.u
k=H.a([$.av,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silicon",k,null,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.u
k=H.a([$.av,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryolite",k,null,n,o,0))
o=H.a(["Meteor"],p)
n=$.u
k=H.a([$.av,$.bp],l)
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
k=H.a([$.Z,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lensed",k,null,n,o,0))
o=H.a(["Hide"],p)
n=$.G
k=H.a([$.O,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hide",k,null,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.O,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("FeatherBoa",k,null,n,o,0))
o=H.a(["Tacky"],p)
n=$.I
k=H.a([$.O,$.c_],l)
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
k=H.a([$.O,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Punk",k,null,n,o,0))
o=H.a(["Weighted"],p)
n=$.G
k=H.a([$.O,$.cc],l)
H.a([],p)
$.$get$c().h(0,new G.d("Weighted",k,null,n,o,0))
o=H.a(["Favorite"],p)
n=$.I
k=H.a([$.O,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Favorite",k,null,n,o,0))
o=H.a(["Novelty"],p)
n=$.I
k=H.a([$.O,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Novelty",k,null,n,o,0))
o=H.a(["Security"],p)
n=$.u
k=H.a([$.O,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Security",k,null,n,o,0))
o=H.a(["IcePack"],p)
n=$.u
k=H.a([$.O,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("IcePack",k,null,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.O,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("MotionCapture",k,null,n,o,0))
o=H.a(["Silica"],p)
n=$.u
k=H.a([$.O,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silica",k,null,n,o,0))
o=H.a(["Harp"],p)
n=$.u
k=H.a([$.O,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Harp",k,null,n,o,0))
o=H.a(["Silk"],p)
n=$.u
k=H.a([$.O,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silk",k,null,n,o,0))
o=H.a(["RedFlag"],p)
n=$.u
k=H.a([$.O,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("RedFlag",k,null,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.u
k=H.a([$.O,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet1",k,null,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.u
k=H.a([$.O,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Satin",k,null,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.u
k=H.a([$.O,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet2",k,null,n,o,0))
o=H.a(["Tweed"],p)
n=$.u
k=H.a([$.O,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tweed",k,null,n,o,0))
o=H.a(["Jean"],p)
n=$.u
k=H.a([$.O,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Jean",k,null,n,o,0))
o=H.a(["Tesla"],p)
n=$.aa
k=H.a([$.Z,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tesla",k,null,n,o,0))
o=H.a(["Ashwood"],p)
n=$.u
k=H.a([$.a3,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ashwood",k,null,n,o,0))
o=H.a(["Peashooter"],p)
n=$.u
k=H.a([$.aR,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peashooter",k,null,n,o,0))
o=H.a(["Lacquer"],p)
n=$.u
k=H.a([$.aF,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lacquer",k,null,n,o,0))
o=H.a(["Classpecty"],p)
n=$.u
k=H.a([$.T,$.S],l)
H.a([],p)
$.$get$c().h(0,new G.d("Classpecty",k,null,n,o,0))
o=H.a(["Smartass"],p)
n=$.I
k=H.a([$.Z,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smartass",k,null,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.I
k=H.a([$.bl,$.aO,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Miraculous",k,null,n,o,0))
o=H.a(["Pigeon"],p)
n=$.u
k=H.a([$.bo,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pigeon",k,null,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bo,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grimoire",k,null,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.aa
k=H.a([$.bo,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Oglogoth's",k,null,n,o,0))
o=H.a(["Echidna's"],p)
n=$.aa
k=H.a([$.a0,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Echidna's",k,null,n,o,0))
o=H.a(["Superior"],p)
n=$.aa
k=H.a([$.Z,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Superior",k,null,n,o,0))
o=H.a(["Lego"],p)
n=$.u
k=H.a([$.a0,$.aF,$.bj,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lego",k,null,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a0,$.dP,$.Y,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yardstick",k,null,n,o,0))
o=H.a(["Queenly"],p)
n=$.aa
k=H.a([$.am,$.a3,$.bl,$.aG,$.aX],l)
H.a([],p)
o=new G.d("Queenly",k,null,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["Kingly"],p)
n=$.aa
k=H.a([$.aX,$.ah,$.cc,$.a3,$.bl],l)
H.a([],p)
o=new G.d("Kingly",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["Jack"],p)
n=$.aa
k=H.a([$.aM,$.at,$.D,$.am],l)
H.a([],p)
o=new G.d("Jack",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a0,$.aO,$.Y,$.T,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Codpiece",k,null,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a0,$.aD,$.K,$.D,$.Z,$.T],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graceful",k,null,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a0,$.aD,$.K,$.Z,$.T,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guide",k,null,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a0,$.aE,$.K,$.Z,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Testament",k,null,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.aa
k=H.a([$.a0,$.aQ,$.D,$.aM,$.at,$.eu],l)
H.a([],p)
$.$get$c().h(0,new G.d("Excalibur",k,null,n,o,0))
o=H.a(["Influential"],p)
n=$.aa
k=H.a([$.a0,$.K,$.br,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Influential",k,null,n,o,0))
o=H.a(["Alternative"],p)
n=$.aa
k=H.a([$.a0,$.a3,$.O,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Alternative",k,null,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.aa
k=H.a([$.a0,$.aG,$.aY,$.D,$.fj,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Valkyrie",k,null,n,o,0))
o=H.a(["Ongoing"],p)
n=$.aa
k=H.a([$.a0,$.av,$.aj,$.ju,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ongoing",k,null,n,o,0))
o=H.a(["Short"],p)
n=$.G
k=H.a([$.a0,$.O,$.bg,$.az,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short",k,null,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a0,$.D,$.bg,$.az,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crown",k,null,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a0,$.aF,$.a8,$.am,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gristtorrent",k,null,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a0,$.O,$.Z,$.a3,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Robe",k,null,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a0,$.O,$.Z,$.az,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beret",k,null,n,o,0))
o=H.a(["Blank"],p)
n=$.G
k=$.a0
j=$.K
i=$.Z
i=H.a([k,j,i,$.aD,i,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blank",i,null,n,o,0))
o=H.a(["Cueball"],p)
n=$.u
i=H.a([$.a0,$.az,$.bS,$.ah,$.fh,$.au],l)
H.a([],p)
o=new G.d("Cueball",i,null,n,o,0)
$.$get$c().h(0,o)
$.w8=o
o=H.a(["Meddler's"],p)
n=$.aa
i=H.a([$.a0,$.aD,$.K,$.br,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meddler's",i,null,n,o,0))
o=H.a(["Scroll"],p)
n=$.aa
i=H.a([$.a3,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scroll",i,null,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.K,$.Z,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tome",i,null,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.a0,$.D,$.am,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lockpick",i,null,n,o,0))
o=H.a(["Warped"],p)
n=$.G
i=H.a([$.a0,$.D,$.aP,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Warped",i,null,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a0,$.aO,$.Y,$.an,$.bj,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stairs",i,null,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a0,$.ar,$.D,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rocket",i,null,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a0,$.a8,$.K,$.aD,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("~ATH",i,null,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a0,$.Y,$.au,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Puppeted",i,null,n,o,0))
o=H.a(["Angelic"],p)
n=$.aa
i=H.a([$.a0,$.bl,$.bs,$.aQ,$.a9,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Angelic",i,null,n,o,0))
o=H.a(["Vitae"],p)
n=$.u
i=H.a([$.a0,$.aJ,$.aP,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vitae",i,null,n,o,0))
o=H.a(["Fluorite"],p)
n=$.u
i=H.a([$.a0,$.aQ,$.bZ,$.av,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluorite",i,null,n,o,0))
o=H.a(["Janus"],p)
n=$.aa
i=H.a([$.a0,$.aG,$.av,$.aj,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Janus",i,null,n,o,0))
o=H.a(["Bacchus"],p)
n=$.aa
i=H.a([$.a0,$.ap,$.br,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bacchus",i,null,n,o,0))
o=H.a(["TurnTable"],p)
n=$.aa
i=H.a([$.a0,$.D,$.a9,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("TurnTable",i,null,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.I
i=H.a([$.a0,$.aP,$.c7,$.aQ,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("???",i,null,n,o,0))
o=H.a(["Demonite"],p)
n=$.u
i=H.a([$.D,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Demonite",i,null,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.aa
i=H.a([$.D,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stymphalian",i,null,n,o,0))
o=H.a(["Junky"],p)
n=$.u
i=H.a([$.D,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Junky",i,null,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.u
i=H.a([$.D,$.bn],l)
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
i=H.a([$.D,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heartsteel",i,null,n,o,0))
o=H.a(["Brick"],p)
n=$.u
i=H.a([$.bS,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Brick",i,null,n,o,0))
o=H.a(["Clay"],p)
n=$.u
i=H.a([$.bS,$.cd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Clay",i,null,n,o,0))
o=H.a(["Mugly"],p)
n=$.I
i=H.a([$.bS,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mugly",i,null,n,o,0))
o=H.a(["Plate"],p)
n=$.u
i=H.a([$.bS,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plate",i,null,n,o,0))
o=H.a(["Terracotta"],p)
n=$.u
i=H.a([$.bS,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Terracotta",i,null,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.u
i=H.a([$.bS,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Semiconductive",i,null,n,o,0))
o=H.a(["Vinyl"],p)
n=$.u
i=H.a([$.bS,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vinyl",i,null,n,o,0))
o=H.a(["Artisan"],p)
n=$.G
i=H.a([$.bS,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Artisan",i,null,n,o,0))
o=H.a(["Tiled"],p)
n=$.u
i=H.a([$.bS,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tiled",i,null,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.G
i=H.a([$.bS,$.bl],l)
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
i=H.a([$.bT,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grotesque",i,null,n,o,0))
o=H.a(["Flickering"],p)
n=$.G
i=H.a([$.bT,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Flickering",i,null,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.u
i=H.a([$.bT,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thinly Veiled",i,null,n,o,0))
o=H.a(["Fragile"],p)
n=$.G
i=H.a([$.bT,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fragile",i,null,n,o,0))
o=H.a(["Troll's"],p)
n=$.aa
i=H.a([$.bT,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Troll's",i,null,n,o,0))
o=H.a(["Sappy"],p)
n=$.u
i=H.a([$.bT,$.aB],l)
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
i=H.a([$.Y,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ent's",i,null,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.u
i=H.a([$.Y,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("WeepingWillow",i,null,n,o,0))
o=H.a(["Latex"],p)
n=$.u
i=H.a([$.Y,$.cd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Latex",i,null,n,o,0))
o=H.a(["Turf"],p)
n=$.u
i=H.a([$.aF,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turf",i,null,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.cd,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stress Relieving",i,null,n,o,0))
o=H.a(["R-Rated"],p)
n=$.G
i=H.a([$.cd,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("R-Rated",i,null,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.cd,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Racing",i,null,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.K,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cross Stitch",i,null,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.K,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("LoveLetter",i,null,n,o,0))
o=H.a(["EbonStone"],p)
n=$.u
i=H.a([$.av,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("EbonStone",i,null,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.u
i=H.a([$.av,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rock Candy",i,null,n,o,0))
o=H.a(["Smashing"],p)
n=$.I
i=H.a([$.av,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smashing",i,null,n,o,0))
o=H.a(["Anomalous"],p)
n=$.I
i=H.a([$.bY,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anomalous",i,null,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.u
i=H.a([$.bY,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Onmoraki",i,null,n,o,0))
o=H.a(["Ghastly"],p)
n=$.I
i=H.a([$.bY,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ghastly",i,null,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.u
i=H.a([$.bY,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shade",i,null,n,o,0))
o=H.a(["Choral"],p)
n=$.u
i=H.a([$.bY,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Choral",i,null,n,o,0))
o=H.a(["Eerie"],p)
n=$.u
i=H.a([$.bY,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eerie",i,null,n,o,0))
o=H.a(["Spiritual"],p)
n=$.I
i=H.a([$.bY,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spiritual",i,null,n,o,0))
o=H.a(["Heart"],p)
n=$.u
i=H.a([$.bk,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heart",i,null,n,o,0))
o=H.a(["Primordial"],p)
n=$.u
i=H.a([$.bk,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Primordial",i,null,n,o,0))
o=H.a(["Eyeball"],p)
n=$.u
i=H.a([$.bk,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eyeball",i,null,n,o,0))
o=H.a(["Vulture"],p)
n=$.G
i=H.a([$.bk,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vulture",i,null,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bo,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackMagic",i,null,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.u
i=H.a([$.bo,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doppelganger",i,null,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.G
i=H.a([$.bo,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incomprehensible",i,null,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bo,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Destructive",i,null,n,o,0))
o=H.a(["Growling"],p)
n=$.G
i=H.a([$.ch,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Growling",i,null,n,o,0))
o=H.a(["Coconut"],p)
n=$.u
i=H.a([$.ch,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Coconut",i,null,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.aa
i=H.a([$.ch,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beastmaster's",i,null,n,o,0))
o=H.a(["Fluffy"],p)
n=$.u
i=H.a([$.ch,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluffy",i,null,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.u
i=H.a([$.aR,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fern",i,null,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.G
i=H.a([$.aR,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Four Leafed",i,null,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.u
i=H.a([$.aR,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shrubbery",i,null,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.u
i=H.a([$.aR,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ecballium",i,null,n,o,0))
o=H.a(["Truffle"],p)
n=$.u
i=H.a([$.aR,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Truffle",i,null,n,o,0))
o=H.a(["Vine"],p)
n=$.u
i=H.a([$.aR,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vine",i,null,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.u
i=H.a([$.aR,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("CorpseBlossom",i,null,n,o,0))
o=H.a(["Fruity"],p)
n=$.G
i=H.a([$.aR,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fruity",i,null,n,o,0))
o=H.a(["Squawking"],p)
n=$.G
i=H.a([$.bs,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Squawking",i,null,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.u
i=H.a([$.bs,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Poultry",i,null,n,o,0))
o=H.a(["Dove"],p)
n=$.u
i=H.a([$.bs,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dove",i,null,n,o,0))
o=H.a(["Peacock"],p)
n=$.u
i=H.a([$.bs,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peacock",i,null,n,o,0))
o=H.a(["Stork"],p)
n=$.u
i=H.a([$.bs,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stork",i,null,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.u
i=H.a([$.bs,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Zhenniao",i,null,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.u
i=H.a([$.bs,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dodo",i,null,n,o,0))
o=H.a(["Raven"],p)
n=$.tX
i=H.a([$.bs,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Raven",i,null,n,o,0))
o=H.a(["Frilled"],p)
n=$.G
i=H.a([$.bs,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Frilled",i,null,n,o,0))
o=H.a(["Horrifying"],p)
n=$.I
i=H.a([$.c_,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Horrifying",i,null,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.at,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Burning Edge",i,null,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.at,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scapel",i,null,n,o,0))
o=H.a(["Menacing"],p)
n=$.I
i=H.a([$.aX,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Menacing",i,null,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aJ,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Syringe",i,null,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.I
i=H.a([$.ap,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bitter",i,null,n,o,0))
o=H.a(["Pineapple"],p)
n=$.u
i=H.a([$.ap,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pineapple",i,null,n,o,0))
o=H.a(["Crunchy"],p)
n=$.I
i=H.a([$.ap,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crunchy",i,null,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.cc,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bass",i,null,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.cc,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rigid",i,null,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aL,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prop",i,null,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aL,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Magic Missle",i,null,n,o,0))
o=H.a(["Gangster's"],p)
n=$.aa
i=H.a([$.aL,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gangster's",i,null,n,o,0))
o=H.a(["Cupid's"],p)
n=$.aa
i=H.a([$.aL,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cupid's",i,null,n,o,0))
o=H.a(["Turreted"],p)
n=$.G
i=H.a([$.aL,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turreted",i,null,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.G
i=H.a([$.aL,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("AutoTarget",i,null,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.aa
i=H.a([$.aL,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guerilla's",i,null,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aL,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rail",i,null,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aL,$.c7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tau",i,null,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aL,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pew",i,null,n,o,0))
o=H.a(["Thermal"],p)
n=$.G
i=H.a([$.aL,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thermal",i,null,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.u
i=H.a([$.aQ,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plasma",i,null,n,o,0))
o=H.a(["Shredding"],p)
n=$.u
i=H.a([$.a9,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shredding",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.u
i=H.a([$.bZ,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Charmed"],p)
n=$.u
i=H.a([$.bZ,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charmed",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.aa
i=H.a([$.bZ,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Prospitian"],p)
n=$.aa
i=H.a([$.aQ,$.aZ],l)
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
i=H.a([$.aQ,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedazzled",i,null,n,o,0))
o=H.a(["Thief's"],p)
n=$.aa
i=H.a([$.am,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thief's",i,null,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.am,$.a3,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("InvisibilityCloak",i,null,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.G
i=H.a([$.am,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comedy Night",i,null,n,o,0))
o=H.a(["Stealthy"],p)
n=$.I
i=H.a([$.am,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stealthy",i,null,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.am,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Subterfuge",i,null,n,o,0))
o=H.a(["Dersite"],p)
n=$.aa
i=H.a([$.am,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dersite",i,null,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.aa
i=H.a([$.bj,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ambient",i,null,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bj,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anesthesia",i,null,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bj,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Supportive",i,null,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aJ,$.c7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nuka",i,null,n,o,0))
o=H.a(["Contaminated"],p)
n=$.G
i=H.a([$.bQ,$.c7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Contaminated",i,null,n,o,0))
o=H.a(["Unstable"],p)
n=$.G
i=H.a([$.aE,$.c7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unstable",i,null,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aE,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Timebomb",i,null,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.G
i=H.a([$.a8,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short Circuiting",i,null,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aE,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relic",i,null,n,o,0))
o=H.a(["Existentialist"],p)
n=$.G
i=H.a([$.aE,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Existentialist",i,null,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.I
i=H.a([$.aE,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Apocalyptic",i,null,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bp,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dud",i,null,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bp,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guided",i,null,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bp,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bobomb",i,null,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aE,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dread",i,null,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bp,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knockback",i,null,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a8,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Paralysis",i,null,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bp,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carnage",i,null,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bp,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blast Beat",i,null,n,o,0))
o=H.a(["Corrosive"],p)
n=$.G
i=H.a([$.bp,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Corrosive",i,null,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bp,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ice Bomb",i,null,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bn,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryogenic",i,null,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a3,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spellcasting",i,null,n,o,0))
o=H.a(["Tingling"],p)
n=$.G
i=H.a([$.a8,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tingling",i,null,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.br,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rage Plague",i,null,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bQ,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nerve Gas",i,null,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bQ,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon Monoxide",i,null,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bQ,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Neurotoxin",i,null,n,o,0))
o=H.a(["Virulent"],p)
n=$.G
i=H.a([$.bQ,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Virulent",i,null,n,o,0))
o=H.a(["Toxic"],p)
n=$.G
i=H.a([$.bQ,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Toxic",i,null,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bQ,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Laughing Gas",i,null,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.G
i=H.a([$.a9,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Amplified",i,null,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a9,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rap",i,null,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.a9,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Saxaphone",i,null,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.a9,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Offbeat",i,null,n,o,0))
o=H.a(["Piper's"],p)
n=$.aa
i=H.a([$.a9,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Piper's",i,null,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.a9,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Melodic",i,null,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a9,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smooth",i,null,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a9,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thrash",i,null,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a9,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chant",i,null,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.br,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chewy",i,null,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.br,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Phony",i,null,n,o,0))
o=H.a(["Doctor's"],p)
n=$.aa
i=H.a([$.Z,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doctor's",i,null,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.aW,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Straitjacketed",i,null,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.aW,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Strapped",i,null,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.aW,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bondage",i,null,n,o,0))
o=H.a(["Sealed"],p)
n=$.G
i=H.a([$.aW,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sealed",i,null,n,o,0))
o=H.a(["Attractive"],p)
n=$.I
i=H.a([$.az,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Attractive",i,null,n,o,0))
o=H.a(["Relaxed"],p)
n=$.G
i=H.a([$.aZ,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relaxed",i,null,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.aZ,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Loveseat",i,null,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.I
i=H.a([$.ap,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comfort Food",i,null,n,o,0))
o=H.a(["Yandere"],p)
n=$.I
i=H.a([$.aB,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yandere",i,null,n,o,0))
o=H.a(["Tsundere"],p)
n=$.I
i=H.a([$.aB,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tsundere",i,null,n,o,0))
o=H.a(["Disturbed"],p)
n=$.G
i=H.a([$.au,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Disturbed",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Z,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.Z,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hydroponic",i,null,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.au,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Free Range",i,null,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.aa
i=H.a([$.aB,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gentlemanly",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Z,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.G
i=H.a([$.aB,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sentimental",i,null,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.G
i=H.a([$.aB,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki",i,null,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.G
i=H.a([$.aB,$.aV,$.aD,$.jv],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki Literature Club",i,null,n,o,0))
o=H.a(["Banana"],p)
n=$.G
i=H.a([$.ap,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Banana",i,null,n,o,0))
o=H.a(["Mana"],p)
n=$.G
i=H.a([$.ap,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mana",i,null,n,o,0))
o=H.a(["Homemade"],p)
n=$.G
i=H.a([$.ap,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Homemade",i,null,n,o,0))
o=H.a(["Steampunk"],p)
n=$.G
i=H.a([$.a3,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Steampunk",i,null,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.G
i=H.a([$.ap,$.aU,$.a8,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("I Can't Stop Laughing",i,null,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.u
i=H.a([$.D,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Soulsteel",i,null,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.aY,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ritual",i,null,n,o,0))
o=H.a(["Inflamable"],p)
n=$.G
i=H.a([$.bT,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Inflamable",i,null,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.Y,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crafting",i,null,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.aF,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Polluting",i,null,n,o,0))
o=H.a(["Insulated"],p)
n=$.G
i=H.a([$.cd,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Insulated",i,null,n,o,0))
o=H.a(["Ash"],p)
n=$.u
i=H.a([$.K,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ash",i,null,n,o,0))
o=H.a(["Delicate"],p)
n=$.G
i=H.a([$.K,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Delicate",i,null,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.aa
i=H.a([$.aP,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Glass Blower's",i,null,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.G
i=H.a([$.bk,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sunburnt",i,null,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.G
i=H.a([$.ar,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pyrebitten",i,null,n,o,0))
o=H.a(["Mink"],p)
n=$.u
i=H.a([$.aB,$.ch],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mink",i,null,n,o,0))
o=H.a(["Wildfire"],p)
n=$.aa
i=H.a([$.aR,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Wildfire",i,null,n,o,0))
o=H.a(["Scarred"],p)
n=$.G
i=H.a([$.aJ,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scarred",i,null,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.I
i=H.a([$.bl,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hyper Realistic",i,null,n,o,0))
o=H.a(["Hestia's"],p)
n=$.aa
i=H.a([$.bZ,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hestia's",i,null,n,o,0))
o=H.a(["Smoking"],p)
n=$.G
i=H.a([$.am,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smoking",i,null,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.G
i=H.a([$.ar,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Radiator",i,null,n,o,0))
o=H.a(["Fuming"],p)
n=$.G
i=H.a([$.ar,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fuming",i,null,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.G
i=H.a([$.ar,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firework",i,null,n,o,0))
o=H.a(["Panicky"],p)
n=$.G
i=H.a([$.aE,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Panicky",i,null,n,o,0))
o=H.a(["Ornamental"],p)
n=$.G
i=H.a([$.bg,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ornamental",i,null,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.G
i=H.a([$.bg,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dear",i,null,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.G
i=H.a([$.bg,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Swaggy",i,null,n,o,0))
o=H.a(["Uncanny"],p)
n=$.G
i=H.a([$.aG,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Uncanny",i,null,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.G
i=H.a([$.aV,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Talkative",i,null,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.G
i=H.a([$.aB,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Waifu",i,null,n,o,0))
o=H.a(["Charming"],p)
n=$.G
i=H.a([$.a3,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charming",i,null,n,o,0))
o=H.a(["God Tier"],p)
n=$.G
i=H.a([$.T,$.S,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("God Tier",i,null,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.G
i=H.a([$.T,$.S,$.bl,$.aO,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cod Tier",i,null,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.G
i=H.a([$.T,$.S,$.bl,$.ch],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dog Tier",i,null,n,o,0))
o=H.a(["JRPG"],p)
n=$.G
i=H.a([$.eu,$.tO,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.d("JRPG",i,null,n,o,0))
o=H.a(["Cracked"],p)
n=$.G
i=H.a([$.av,$.bT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cracked",i,null,n,o,0))
o=H.a(["Ruffled"],p)
n=$.G
i=H.a([$.bs,$.bT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ruffled",i,null,n,o,0))
o=H.a(["Mandrake"],p)
n=$.G
i=H.a([$.aR,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mandrake",i,null,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.G
i=H.a([$.a3,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beanstalk",i,null,n,o,0))
o=H.a(["Unnerving"],p)
n=$.G
i=H.a([$.aX,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unnerving",i,null,n,o,0))
o=H.a(["Chipped"],p)
n=$.G
l=H.a([$.bS,$.bT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chipped",l,null,n,o,0))
if($.wZ==null){o=$.mA
n=$.aM
l=$.at
k=$.aY
j=new U.ag(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,null,"Claws",!1,P.a1(null,null,null,m),0,3)
j.H("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.r.h(0,o)
$.wZ=j}o=$.$get$ak();(o&&C.b).sm(o,0)
o=$.$get$ak()
n=$.O
l=$.wf
k=new U.ag(n,null,null,null,null,"Speedo",!1,P.a1(null,null,null,m),0,3)
k.H("Speedo",[l],null,!1,null)
k.r.h(0,n)
o.push(k)
k=$.$get$ak()
o=$.eu
n=$.at
l=$.D
j=$.aM
i=new U.ag(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,null,"Sword",!1,P.a1(null,null,null,m),0,3)
i.H("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.r.h(0,o)
k.push(i)
i=$.$get$ak()
k=$.mC
o=$.ah
j=$.D
l=new U.ag(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,null,"Hammer",!1,P.a1(null,null,null,m),0,3)
l.H("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.r.h(0,k)
i.push(l)
l=$.$get$ak()
i=$.tT
k=$.aL
j=$.D
o=new U.ag(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,null,"Rifle",!1,P.a1(null,null,null,m),0,3)
o.H("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.r.h(0,i)
l.push(o)
o=$.$get$ak()
l=$.tN
i=$.aL
j=$.D
k=new U.ag(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,null,"Pistol",!1,P.a1(null,null,null,m),0,3)
k.H("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.r.h(0,l)
o.push(k)
k=$.$get$ak()
o=$.wu
l=$.aL
j=$.D
i=new U.ag(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,null,"Shotgun",!1,P.a1(null,null,null,m),0,3)
i.H("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.r.h(0,o)
k.push(i)
i=$.$get$ak()
k=$.w2
o=$.aM
j=$.at
l=$.D
n=new U.ag(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,null,"Blade",!1,P.a1(null,null,null,m),0,3)
n.H("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.r.h(0,k)
i.push(n)
n=$.$get$ak()
i=$.tD
k=$.aM
l=$.at
j=$.D
o=new U.ag(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,null,"Dagger",!1,P.a1(null,null,null,m),0,3)
o.H("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.r.h(0,i)
n.push(o)
o=$.$get$ak()
n=$.hr
i=$.ah
j=$.bS
l=new U.ag(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,null,"Fancysanta",!1,P.a1(null,null,null,m),0,3)
l.H("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.r.h(0,n)
o.push(l)
l=$.$get$ak()
o=$.wx
n=$.at
j=$.D
i=new U.ag(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,null,"Sickle",!1,P.a1(null,null,null,m),0,3)
i.H("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.r.h(0,o)
l.push(i)
i=$.$get$ak()
l=$.w5
o=$.at
j=$.D
n=new U.ag(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,null,"Chainsaw",!1,P.a1(null,null,null,m),0,3)
n.H("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.r.h(0,l)
i.push(n)
n=$.$get$ak()
i=$.wb
l=$.aM
j=$.D
o=new U.ag(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,null,"Fork",!1,P.a1(null,null,null,m),0,3)
o.H("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.r.h(0,i)
n.push(o)
o=$.$get$ak()
n=$.tM
i=$.bs
j=$.bo
l=new U.ag(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,null,"Pigeon",!1,P.a1(null,null,null,m),0,3)
l.H("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.r.h(0,n)
o.push(l)
l=$.$get$ak()
o=$.fh
n=$.cc
j=$.av
i=$.ah
k=new U.ag(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,null,"Bowling Ball",!1,P.a1(null,null,null,m),0,3)
k.H("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.r.h(0,o)
l.push(k)
k=$.$get$ak()
l=$.tE
o=$.aF
i=$.bZ
j=new U.ag(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,null,"Dice",!1,P.a1(null,null,null,m),0,3)
j.H("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.r.h(0,l)
k.push(j)
j=$.$get$ak()
k=$.tL
l=$.D
i=$.aM
o=new U.ag(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,null,"Needle",!1,P.a1(null,null,null,m),0,3)
o.H("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.r.h(0,k)
j.push(o)
o=$.$get$ak()
j=$.tV
k=$.Y
i=$.ah
l=new U.ag(j,"Very magey. 7/10.","ShittyWizardKind",null,null,"Staff",!1,P.a1(null,null,null,m),0,3)
l.H("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.r.h(0,j)
o.push(l)
l=$.$get$ak()
o=$.wA
j=$.aW
i=$.O
k=new U.ag(o,"Probably p hard to use.","ImKinkshamingKind",null,null,"Whip",!1,P.a1(null,null,null,m),0,3)
k.H("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.r.h(0,o)
l.push(k)
k=$.$get$ak()
l=$.tA
o=$.aL
i=$.av
j=$.O
n=$.aM
h=new U.ag(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,null,"Bow",!1,P.a1(null,null,null,m),0,3)
h.H("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.r.h(0,l)
k.push(h)
h=$.$get$ak()
k=$.jv
l=$.Y
n=$.ah
j=new U.ag(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,null,"Club",!1,P.a1(null,null,null,m),0,3)
j.H("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.r.h(0,k)
h.push(j)
j=$.$get$ak()
h=$.jt
k=$.Y
n=new U.ag(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,null,"Battle Broom",!1,P.a1(null,null,null,m),0,3)
n.H("Battle Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.r.h(0,h)
j.push(n)
n=$.$get$ak()
j=$.aD
h=$.K
k=$.ah
l=new U.ag(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,null,"Book",!1,P.a1(null,null,null,m),0,3)
l.H("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.r.h(0,j)
n.push(l)
l=$.$get$ak()
n=$.wq
j=$.D
k=$.ah
h=new U.ag(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,null,"Road Sign",!1,P.a1(null,null,null,m),0,3)
h.H("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.r.h(0,n)
l.push(h)
h=$.$get$ak()
l=$.tz
n=$.at
k=$.D
j=$.ah
i=new U.ag(l,"Legit.","TreeMassacreKind",null,null,"Axe",!1,P.a1(null,null,null,m),0,3)
i.H("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.wl
l=$.Y
j=$.aM
k=new U.ag(h,"Good for chest stabs.","UseOnHorsebackKind",null,null,"Lance",!1,P.a1(null,null,null,m),0,3)
k.H("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.fj
h=$.D
j=$.ah
l=new U.ag(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,null,"Shield",!1,P.a1(null,null,null,m),0,3)
l.H("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.w4
i=$.Y
j=$.ah
h=new U.ag(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,null,"Cane",!1,P.a1(null,null,null,m),0,3)
h.H("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.wB
k=$.aF
j=$.ah
i=new U.ag(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,null,"Yo-Yo",!1,P.a1(null,null,null,m),0,3)
i.H("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.wy
l=$.Y
j=$.aL
k=new U.ag(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,null,"Sling",!1,P.a1(null,null,null,m),0,3)
k.H("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.ww
h=$.D
j=$.at
l=new U.ag(i,"So edgey.","NarutoKind",null,null,"Shuriken",!1,P.a1(null,null,null,m),0,3)
l.H("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.tJ
i=$.D
j=$.aL
h=new U.ag(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,null,"Machine Gun",!1,P.a1(null,null,null,m),0,3)
h.H("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.r.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.mB
k=$.D
j=$.bp
i=new U.ag(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,null,"Grenade",!1,P.a1(null,null,null,m),0,3)
i.H("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.fh
l=$.cd
j=$.ah
k=new U.ag(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,null,"Ball",!1,P.a1(null,null,null,m),0,3)
k.H("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.wz
h=$.D
j=$.aM
l=new U.ag(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,null,"3dent",!1,P.a1(null,null,null,m),0,3)
l.H("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.mz
i=$.K
j=$.at
h=new U.ag(k,"An X-Men fan, I see.","YuGiOhKind",null,null,"Card",!1,P.a1(null,null,null,m),0,3)
h.H("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.tG
k=$.D
j=$.ah
i=new U.ag(l,"Go with what you know, I guess.","UnstoppableKind",null,null,"Frying Pan",!1,P.a1(null,null,null,m),0,3)
i.H("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.hq
l=$.aZ
j=$.O
k=new U.ag(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,null,"Pillow",!1,P.a1(null,null,null,m),0,3)
k.H("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.et
h=$.D
j=$.aW
l=new U.ag(i,"This could be metal as fuck.","BikerGangKind",null,null,"Chain",!1,P.a1(null,null,null,m),0,3)
l.H("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.tW
i=$.D
j=$.ah
h=new U.ag(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,null,"Wrench",!1,P.a1(null,null,null,m),0,3)
h.H("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.wv
k=$.D
j=$.ah
i=new U.ag(l,"Dual purpose.","HideTheBodiesKind",null,null,"Shovel",!1,P.a1(null,null,null,m),0,3)
i.H("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.tU
l=$.Y
j=$.ah
k=new U.ag(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,null,"Rolling Pin",!1,P.a1(null,null,null,m),0,3)
k.H("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.tR
h=$.Y
j=$.aE
l=new U.ag(i,"Fuck you for picking this.","KermitsGoneBadKind",null,null,"Puppet",!1,P.a1(null,null,null,m),0,3)
l.H("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.tS
i=$.D
j=$.at
h=new U.ag(k,"So fucking edgey.","KermitsGoneBadKind",null,null,"Razor",!1,P.a1(null,null,null,m),0,3)
h.H("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.mF
k=$.D
j=$.Z
i=new U.ag(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,null,"Pen",!1,P.a1(null,null,null,m),0,3)
i.H("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.ju
l=$.av
j=$.cc
k=new U.ag(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,null,"Bust",!1,P.a1(null,null,null,m),0,3)
k.H("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.we
h=$.Y
j=$.ah
l=new U.ag(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,null,"Golf Club",!1,P.a1(null,null,null,m),0,3)
l.H("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.wk
i=$.D
j=$.at
h=new U.ag(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,null,"Knife",!1,P.a1(null,null,null,m),0,3)
h.H("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.wt
k=$.D
j=$.at
i=new U.ag(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,null,"Scissors",!1,P.a1(null,null,null,m),0,3)
i.H("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.ws
l=$.D
j=$.cc
k=new U.ag(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,null,"Safe",!1,P.a1(null,null,null,m),0,3)
k.H("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.dP
h=$.Y
j=$.ah
l=new U.ag(i,"Bitches love sticks","WeaponiseTheTreesKind",null,null,"Stick",!1,P.a1(null,null,null,m),0,3)
l.H("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.tO
i=$.D
j=$.at
m=new U.ag(k,"I lack the taste buds necessary to weigh in on the pineapple debate","HomeSliceKind",null,null,"Pizza Cutter",!1,P.a1(null,null,null,m),0,3)
m.H("Pizza Cutter",[i,j],"I lack the taste buds necessary to weigh in on the pineapple debate",!1,"HomeSliceKind")
m.r.h(0,k)
l.push(m)
m=new S.bD("Duttle","Dut",null,null)
m.b="Duttle"
$.$get$bN().push(m)
$.vK=m
m=new S.bD("Salamander","GLUB",null,null)
m.b="Salamander"
$.$get$bN().push(m)
$.tp=m
m=new S.bD("Crocodile","NAK",null,null)
m.b="Crocodile"
$.$get$bN().push(m)
$.e5=m
m=new S.bD("Iguana","thip",null,null)
m.b="Iguana"
$.$get$bN().push(m)
$.eo=m
m=new S.bD("Turtle","click",null,null)
m.b="Turtle"
$.$get$bN().push(m)
$.fb=m
m=new S.bD("Skeleton","rattle",null,null)
m.b="Skeleton"
$.$get$bN().push(m)
$.dO=m
m=new S.bD("Robot","BEEP",null,null)
m.b="Robot"
$.$get$bN().push(m)
$.er=m
m=new S.bD("Chameleon","BLEP",null,null)
m.b="Chameleon"
$.$get$bN().push(m)
$.he=m
m=new S.bD("Axolotl","BARP",null,null)
m.b="Axolotl"
$.$get$bN().push(m)
$.tj=m
m=new S.bD("Lizard","bleb",null,null)
m.b="Lizard"
$.$get$bN().push(m)
$.lY=m
m=new S.bD("Snake","hiss",null,null)
m.b="Snake"
$.$get$bN().push(m)
$.tr=m
m=new S.bD("Alligator","nak",null,null)
m.b="Alligator"
$.$get$bN().push(m)
$.iA=m
m=new S.bD("Mole","snuff",null,null)
m.b="Mole"
$.$get$bN().push(m)
$.vM=m
m=new S.bD("Bird","tweet",null,null)
m.b="Bird"
$.$get$bN().push(m)
$.lW=m
m=new S.bD("Wolf","howl",null,null)
m.b="Wolf"
$.$get$bN().push(m)
$.m2=m
m=new S.bD("Newt","skitter",null,null)
m.b="Newt"
$.$get$bN().push(m)
$.vN=m
m=new S.bD("Spider","skitter",null,null)
m.b="Spider"
$.$get$bN().push(m)
$.iH=m
m=new S.bD("Cupid","flappa",null,null)
m.b="Cupid"
$.$get$bN().push(m)
$.iB=m
m=new S.bD("Dragon","roar",null,null)
m.b="Dragon"
$.$get$bN().push(m)
$.f8=m
m=new S.ij("Prospitian","murmur",null,null)
m.b="Prospitian"
$.$get$bN().push(m)
$.zC=m
m=new S.ij("Dersite","mutter",null,null)
m.b="Dersite"
$.$get$bN().push(m)
$.zz=m
m=new S.ml("Horror Terror","a;lkjdf",null,null)
m.b="Horror Terror"
$.$get$bN().push(m)
$.zB=m
m=new S.bD("Jellyfish","buzz",null,null)
m.b="Jellyfish"
$.$get$bN().push(m)
$.vL=m
$.zD=H.a([$.tr,$.iA,$.vN,$.tp,$.eo,$.e5,$.fb,$.he,$.tj,$.lY],[S.bD])
m=new T.c1(0,"spices")
$.$get$cj().push(m)
$.hj=m
m=new T.c1($.e7,"fresh baked bread")
$.$get$cj().push(m)
$.f6=m
m=new T.c1($.e7,"sweetness")
$.$get$cj().push(m)
$.cp=m
m=new T.c1($.e7,"nature")
$.$get$cj().push(m)
$.ca=m
m=new T.c1(0,"salt")
$.$get$cj().push(m)
$.m1=m
m=new T.c1($.cP,"rot")
$.$get$cj().push(m)
$.cY=m
m=new T.c1($.cP,"feet")
$.$get$cj().push(m)
$.zA=m
m=new T.c1(0,"oil")
$.$get$cj().push(m)
$.eq=m
m=new T.c1(0,"chlorine")
$.$get$cj().push(m)
$.tl=m
m=new T.c1(0,"nothing in particular")
$.$get$cj().push(m)
$.iG=m
m=new T.c1(0,"gunpowder")
$.$get$cj().push(m)
$.en=m
m=new T.c1(0,"must")
$.$get$cj().push(m)
$.f9=m
m=new T.c1($.e7,"zoo animals")
$.$get$cj().push(m)
$.cO=m
m=new T.c1($.cP,"sweat")
$.$get$cj().push(m)
$.e6=m
m=new T.c1(0,"ozone")
$.$get$cj().push(m)
$.hh=m
m=new T.c1(0,"deceit")
$.$get$cj().push(m)
$.c5=m
m=new T.c1($.cP,"blood")
$.$get$cj().push(m)
$.dj=m
m=new T.c1($.cP,"smoke")
$.$get$cj().push(m)
$.fa=m
m=new K.bR($.cP,"creepy")
$.$get$c9().push(m)
$.c4=m
m=new K.bR($.e7,"calm")
$.$get$c9().push(m)
$.aN=m
m=new K.bR($.cP,"frantic")
$.$get$c9().push(m)
$.cf=m
m=new K.bR(0,"like nothing")
$.$get$c9().push(m)
$.iF=m
m=new K.bR($.e7,"energizing")
$.$get$c9().push(m)
$.c6=m
m=new K.bR(0,"studious")
$.$get$c9().push(m)
$.cC=m
m=new K.bR(0,"dangerous")
$.$get$c9().push(m)
$.dk=m
m=new K.bR(0,"glamorous")
$.$get$c9().push(m)
$.dM=m
m=new K.bR(0,"romantic")
$.$get$c9().push(m)
$.hi=m
m=new K.bR($.e7,"creative")
$.$get$c9().push(m)
$.f7=m
m=new K.bR(0,"lucky")
$.$get$c9().push(m)
$.lZ=m
m=new K.bR(0,"happy")
$.$get$c9().push(m)
$.du=m
m=new K.bR(0,"heroic")
$.$get$c9().push(m)
$.dl=m
m=new K.bR($.cP,"stupid")
$.$get$c9().push(m)
$.dw=m
m=new K.bR(0,"lucky")
$.$get$c9().push(m)
$.lZ=m
m=new K.bR(0,"claustrophobic")
$.$get$c9().push(m)
$.vJ=m
m=new K.bR(0,"overheated")
$.$get$c9().push(m)
$.m_=m
m=new K.bR($.cP,"confusing")
$.$get$c9().push(m)
$.lX=m
m=new K.bR(0,"contemplatative")
$.$get$c9().push(m)
$.cX=m
m=new M.bu(0,"clanking")
$.$get$bK().push(m)
$.cN=m
m=new M.bu(0,"laughing")
$.$get$bK().push(m)
$.cB=m
m=new M.bu($.e7,"rustling")
$.$get$bK().push(m)
$.be=m
m=new M.bu($.cP,"screaming")
$.$get$bK().push(m)
$.es=m
m=new M.bu($.cP,"foot steps")
$.$get$bK().push(m)
$.iD=m
m=new M.bu($.cP,"beeping")
$.$get$bK().push(m)
$.em=m
m=new M.bu($.cP,"whispering")
$.$get$bK().push(m)
$.vP=m
m=new M.bu(0,"clacking")
$.$get$bK().push(m)
$.hf=m
m=new M.bu(0,"applause")
$.$get$bK().push(m)
$.cE=m
m=new M.bu(0,"jazz")
$.$get$bK().push(m)
$.ep=m
m=new M.bu(0,"disco")
$.$get$bK().push(m)
$.tn=m
m=new M.bu(0,"drums")
$.$get$bK().push(m)
$.hg=m
m=new M.bu(0,"echoing")
$.$get$bK().push(m)
$.iC=m
m=new M.bu($.cP,"roaring")
$.$get$bK().push(m)
$.m0=m
m=new M.bu($.cP,"gunfire")
$.$get$bK().push(m)
$.iE=m
m=new M.bu(0,"music")
$.$get$bK().push(m)
$.co=m
m=new M.bu(0,"singing")
$.$get$bK().push(m)
$.tq=m
m=new M.bu(0,"chanting")
$.$get$bK().push(m)
$.tk=m
m=new M.bu(0,"whistling")
$.$get$bK().push(m)
$.fc=m
m=new M.bu($.e7,"nature")
$.$get$bK().push(m)
$.dv=m
m=new M.bu(0,"croaking")
$.$get$bK().push(m)
$.tm=m
m=new M.bu(0,"silence")
$.$get$bK().push(m)
$.dN=m
m=new M.bu(0,"pulsing")
$.$get$bK().push(m)
$.to=m
m=new M.bu(0,"ticking")
$.$get$bK().push(m)
$.vO=m
m=H.a([],p)
o=[X.F,P.X]
n=A.a6
l=E.N
k=[l]
j=[A.fU]
m=new S.mU(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.w(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Knight",3,!0,!1)
$.G7=m
m=P.l(H.a([new E.N($.cv,0.4,!1)],k),l)
i=H.a([],p)
m=new S.oi(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.w(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Seer",6,!0,!1)
$.Gj=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kS("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.w(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Bard",9,!0,!1)
$.G3=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.mi("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.w(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Heir",8,!0,!1)
$.G6=m
m=H.a([],p)
m=new U.nd(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.w(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Maid",0,!0,!1)
$.Ga=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.o9(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.w(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Rogue",4,!0,!1)
$.Gf=m
m=H.a([],p)
m=new V.nJ(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.w(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Page",1,!0,!1)
$.Gd=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.pb(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.w(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Thief",7,!0,!1)
$.Gm=m
m=P.l(H.a([new E.N($.cv,0.1,!1)],k),l)
i=H.a([],p)
m=new R.oZ(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.w(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Sylph",5,!0,!1)
$.Gl=m
m=H.a([],p)
m=new N.o_("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.w(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Prince",10,!0,!1)
$.Ge=m
m=P.l(H.a([new E.N($.cv,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pF("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.w(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Witch",11,!0,!1)
$.Go=m
m=P.l(H.a([new E.N($.cv,0.4,!1)],k),l)
i=H.a([],p)
m=new S.nc("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.w(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Mage",2,!0,!1)
$.G9=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.l(H.a([new E.N($.cv,3,!1),new E.N($.x0,-2,!1)],k),l)
e=H.a([],p)
m=new E.pB("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.w(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Waste",12,!1,!1)
$.Gn=m
m=H.a([],p)
m=new Y.of("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.w(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Scout",13,!1,!1)
$.Gh=m
m=P.l(H.a([new E.N($.cv,0.5,!1)],k),l)
i=H.a([],p)
m=new L.og("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.w(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Scribe",15,!1,!1)
$.Gi=m
m=P.l(H.a([new E.N($.cv,0.5,!1)],k),l)
i=H.a([],p)
m=new E.od(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.w(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Sage",14,!1,!1)
$.Gg=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.mg("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.w(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Guide",16,!1,!1)
$.G5=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.l(H.a([new E.N($.cv,3,!1)],k),l)
g=H.a([],p)
m=new Y.mf(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.w(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Grace",17,!1,!1)
$.G4=m
m=P.l(H.a([new E.N($.cv,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nl("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.w(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Muse",18,!1,!1)
$.Gb=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.J(null,null,n)
h=P.l(H.a([new E.N($.cv,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.na("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.w(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Lord",19,!1,!1)
$.G8=m
m=P.l(H.a([new E.N($.cv,-0.1,!1),new E.N($.dB,1,!1)],k),l)
i=H.a([],p)
m=new Y.op("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.w(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.aa("Smith",20,!1,!1)
$.Gk=m
$.Gc=T.G2("Null",255,!1,!0)
m=A.e2
i=P.C
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#00ff00"),!0)
h.j(0,$.b4,L.e("#EFEFEF"),!0)
h.j(0,$.b3,L.e("#DEDEDE"),!0)
h.j(0,$.bd,L.e("#FF2106"),!0)
h.j(0,$.bc,L.e("#B01200"),!0)
h.j(0,$.b6,L.e("#2F2F30"),!0)
h.j(0,$.b7,L.e("#1D1D1D"),!0)
h.j(0,$.b5,L.e("#080808"),!0)
h.j(0,$.bb,L.e("#030303"),!0)
h.j(0,$.ba,L.e("#242424"),!0)
h.j(0,$.b9,L.e("#333333"),!0)
h.j(0,$.b8,L.e("#141414"),!0)
g=P.l(H.a(["Frogs"],p),q)
f=P.l(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.l(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.l(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.l(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.l(H.a([new E.N($.dB,2,!0),new E.N($.eH,1,!0),new E.N($.eI,-2,!0)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new N.or(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(0,"Space",!0,!1)
$.yY=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#ff0000"),!0)
a.j(0,$.b4,L.e("#FF2106"),!0)
a.j(0,$.b3,L.e("#AD1604"),!0)
a.j(0,$.bd,L.e("#030303"),!0)
a.j(0,$.bc,L.e("#242424"),!0)
a.j(0,$.b6,L.e("#510606"),!0)
a.j(0,$.b7,L.e("#3C0404"),!0)
a.j(0,$.b5,L.e("#1F0000"),!0)
a.j(0,$.bb,L.e("#B70D0E"),!0)
a.j(0,$.ba,L.e("#970203"),!0)
a.j(0,$.b9,L.e("#8E1516"),!0)
a.j(0,$.b8,L.e("#640707"),!0)
b=P.l(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.l(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.l(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.l(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.l(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.l(H.a([new E.N($.hU,2,!0),new E.N($.eI,1,!0),new E.N($.eG,-2,!0)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new N.pc(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(1,"Time",!0,!1)
$.yZ=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#3399ff"),!0)
h.j(0,$.b4,L.e("#10E0FF"),!0)
h.j(0,$.b3,L.e("#00A4BB"),!0)
h.j(0,$.bd,L.e("#FEFD49"),!0)
h.j(0,$.bc,L.e("#D6D601"),!0)
h.j(0,$.b6,L.e("#0052F3"),!0)
h.j(0,$.b7,L.e("#0046D1"),!0)
h.j(0,$.b5,L.e("#003396"),!0)
h.j(0,$.bb,L.e("#0087EB"),!0)
h.j(0,$.ba,L.e("#0070ED"),!0)
h.j(0,$.b9,L.e("#006BE1"),!0)
h.j(0,$.b8,L.e("#0054B0"),!0)
g=P.l(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.l(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.l(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.l(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.l(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.l(H.a([new E.N($.eI,2,!0),new E.N($.db,1,!0),new E.N($.eH,-1,!0),new E.N($.ed,-1,!0),new E.N($.cv,0.05,!1)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new T.kZ(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(2,"Breath",!0,!1)
$.yL=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#003300"),!0)
a.j(0,$.b4,L.e("#0F0F0F"),!0)
a.j(0,$.b3,L.e("#010101"),!0)
a.j(0,$.bd,L.e("#E8C15E"),!0)
a.j(0,$.bc,L.e("#C7A140"),!0)
a.j(0,$.b6,L.e("#1E211E"),!0)
a.j(0,$.b7,L.e("#141614"),!0)
a.j(0,$.b5,L.e("#0B0D0B"),!0)
a.j(0,$.bb,L.e("#204020"),!0)
a.j(0,$.ba,L.e("#11200F"),!0)
a.j(0,$.b9,L.e("#192C16"),!0)
a.j(0,$.b8,L.e("#121F10"),!0)
b=P.l(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.l(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.l(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.l(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.l(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.l(H.a([new E.N($.dB,2,!0),new E.N($.eG,1,!0),new E.N($.hU,-1,!0),new E.N($.eH,-1,!0),new E.N($.cv,0.01,!1)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new U.lr(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(3,"Doom",!0,!1)
$.yM=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#993300"),!0)
h.j(0,$.b4,L.e("#BA1016"),!0)
h.j(0,$.b3,L.e("#820B0F"),!0)
h.j(0,$.bd,L.e("#381B76"),!0)
h.j(0,$.bc,L.e("#1E0C47"),!0)
h.j(0,$.b6,L.e("#290704"),!0)
h.j(0,$.b7,L.e("#230200"),!0)
h.j(0,$.b5,L.e("#110000"),!0)
h.j(0,$.bb,L.e("#3D190A"),!0)
h.j(0,$.ba,L.e("#2C1207"),!0)
h.j(0,$.b9,L.e("#5C2913"),!0)
h.j(0,$.b8,L.e("#4C1F0D"),!0)
g=P.l(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.l(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.l(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.l(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.l(H.a([new E.N($.ed,2,!0),new E.N($.db,1,!0),new E.N($.dB,-2,!0)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new T.kX(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(4,"Blood",!0,!1)
$.yK=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#ff3399"),!0)
a.j(0,$.b4,L.e("#BD1864"),!0)
a.j(0,$.b3,L.e("#780F3F"),!0)
a.j(0,$.bd,L.e("#1D572E"),!0)
a.j(0,$.bc,L.e("#11371D"),!0)
a.j(0,$.b6,L.e("#4C1026"),!0)
a.j(0,$.b7,L.e("#3C0D1F"),!0)
a.j(0,$.b5,L.e("#260914"),!0)
a.j(0,$.bb,L.e("#6B0829"),!0)
a.j(0,$.ba,L.e("#4A0818"),!0)
a.j(0,$.b9,L.e("#55142A"),!0)
a.j(0,$.b8,L.e("#3D0E1E"),!0)
b=P.l(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.l(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.l(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.l(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.l(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.l(H.a([new E.N($.ed,1,!0),new E.kL(null,1,!0)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new T.mh(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(5,"Heart",!0,!1)
$.yO=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#3da35a"),!0)
h.j(0,$.b4,L.e("#06FFC9"),!0)
h.j(0,$.b3,L.e("#04A885"),!0)
h.j(0,$.bd,L.e("#6E0E2E"),!0)
h.j(0,$.bc,L.e("#4A0818"),!0)
h.j(0,$.b6,L.e("#1D572E"),!0)
h.j(0,$.b7,L.e("#164524"),!0)
h.j(0,$.b5,L.e("#11371D"),!0)
h.j(0,$.bb,L.e("#3DA35A"),!0)
h.j(0,$.ba,L.e("#2E7A43"),!0)
h.j(0,$.b9,L.e("#3B7E4F"),!0)
h.j(0,$.b8,L.e("#265133"),!0)
g=P.l(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.l(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.l(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.l(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.l(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.l(H.a([new E.N($.eG,2,!0),new E.N($.hU,1,!0),new E.N($.dB,-2,!0)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new V.nk(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(6,"Mind",!0,!1)
$.yU=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#ff9933"),!0)
a.j(0,$.b4,L.e("#FEFD49"),!0)
a.j(0,$.b3,L.e("#FEC910"),!0)
a.j(0,$.bd,L.e("#10E0FF"),!0)
a.j(0,$.bc,L.e("#00A4BB"),!0)
a.j(0,$.b6,L.e("#FA4900"),!0)
a.j(0,$.b7,L.e("#E94200"),!0)
a.j(0,$.b5,L.e("#C33700"),!0)
a.j(0,$.bb,L.e("#FF8800"),!0)
a.j(0,$.ba,L.e("#D66E04"),!0)
a.j(0,$.b9,L.e("#E76700"),!0)
a.j(0,$.b8,L.e("#CA5B00"),!0)
b=P.l(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.l(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.l(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.l(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.l(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.l(H.a([new E.N($.hT,2,!0),new E.N($.eG,1,!0),new E.N($.db,-1,!0),new E.N($.eH,-1,!0),new E.N($.cv,0.2,!1)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new G.mY(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(7,"Light",!0,!1)
$.yT=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#000066"),!0)
h.j(0,$.b4,L.e("#0B1030"),!0)
h.j(0,$.b3,L.e("#04091A"),!0)
h.j(0,$.bd,L.e("#CCC4B5"),!0)
h.j(0,$.bc,L.e("#A89F8D"),!0)
h.j(0,$.b6,L.e("#00164F"),!0)
h.j(0,$.b7,L.e("#00103C"),!0)
h.j(0,$.b5,L.e("#00071A"),!0)
h.j(0,$.bb,L.e("#033476"),!0)
h.j(0,$.ba,L.e("#02285B"),!0)
h.j(0,$.b9,L.e("#004CB2"),!0)
h.j(0,$.b8,L.e("#003E91"),!0)
g=P.l(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.l(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.l(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.l(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.l(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.l(H.a([new E.fP(D.uJ(),null,3,!0),new E.fP(D.uJ(),null,-1,!0),new E.N($.hU,-1,!0),new E.N($.cv,0.2,!1)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new Q.pA(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(8,"Void",!0,!1)
$.z_=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#9900cc"),!0)
a.j(0,$.b4,L.e("#974AA7"),!0)
a.j(0,$.b3,L.e("#6B347D"),!0)
a.j(0,$.bd,L.e("#3D190A"),!0)
a.j(0,$.bc,L.e("#2C1207"),!0)
a.j(0,$.b6,L.e("#7C3FBA"),!0)
a.j(0,$.b7,L.e("#6D34A6"),!0)
a.j(0,$.b5,L.e("#592D86"),!0)
a.j(0,$.bb,L.e("#381B76"),!0)
a.j(0,$.ba,L.e("#1E0C47"),!0)
a.j(0,$.b9,L.e("#281D36"),!0)
a.j(0,$.b8,L.e("#1D1526"),!0)
b=P.l(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.l(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.l(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.l(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.l(H.a([new E.N($.hV,2,!0),new E.N($.eI,1,!0),new E.N($.db,-1,!0),new E.N($.ed,-1,!0),new E.N($.cv,0.01,!1)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new E.o4(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(9,"Rage",!0,!1)
$.yW=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#ffcc66"),!0)
h.j(0,$.b4,L.e("#FDF9EC"),!0)
h.j(0,$.b3,L.e("#D6C794"),!0)
h.j(0,$.bd,L.e("#164524"),!0)
h.j(0,$.bc,L.e("#06280C"),!0)
h.j(0,$.b6,L.e("#FFC331"),!0)
h.j(0,$.b7,L.e("#F7BB2C"),!0)
h.j(0,$.b5,L.e("#DBA523"),!0)
h.j(0,$.bb,L.e("#FFE094"),!0)
h.j(0,$.ba,L.e("#E8C15E"),!0)
h.j(0,$.b9,L.e("#F6C54A"),!0)
h.j(0,$.b8,L.e("#EDAF0C"),!0)
g=P.l(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.l(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.l(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.l(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.l(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.l(H.a([new E.N($.db,2,!0),new E.N($.hT,1,!0),new E.fP(D.uJ(),null,-2,!0)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new X.mk(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(10,"Hope",!0,!1)
$.yP=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#494132"),!0)
a.j(0,$.b4,L.e("#76C34E"),!0)
a.j(0,$.b3,L.e("#4F8234"),!0)
a.j(0,$.bd,L.e("#00164F"),!0)
a.j(0,$.bc,L.e("#00071A"),!0)
a.j(0,$.b6,L.e("#605542"),!0)
a.j(0,$.b7,L.e("#494132"),!0)
a.j(0,$.b5,L.e("#2D271E"),!0)
a.j(0,$.bb,L.e("#CCC4B5"),!0)
a.j(0,$.ba,L.e("#A89F8D"),!0)
a.j(0,$.b9,L.e("#A29989"),!0)
a.j(0,$.b8,L.e("#918673"),!0)
b=P.l(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.l(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.l(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.l(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.l(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.l(H.a([new E.N($.eH,2,!0),new E.N($.hV,1,!0),new E.N($.dB,-2,!0)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new K.mX(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(11,"Life",!0,!1)
$.yS=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#9630BF"),!0)
h.j(0,$.b4,L.e("#cc87e8"),!0)
h.j(0,$.b3,L.e("#9545b7"),!0)
h.j(0,$.bd,L.e("#ae769b"),!0)
h.j(0,$.bc,L.e("#8f577c"),!0)
h.j(0,$.b6,L.e("#9630bf"),!0)
h.j(0,$.b7,L.e("#693773"),!0)
h.j(0,$.b5,L.e("#4c2154"),!0)
h.j(0,$.bb,L.e("#fcf9bd"),!0)
h.j(0,$.ba,L.e("#e0d29e"),!0)
h.j(0,$.b9,L.e("#bdb968"),!0)
h.j(0,$.b8,L.e("#ab9b55"),!0)
g=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.l(H.a([new E.N($.dB,3,!0),new E.N($.db,-2,!0)],k),l)
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new Z.ls(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(12,"Dream",!1,!1)
$.yN=a
a=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b2,L.e("#003300"),!0)
a.j(0,$.b4,L.e("#383838"),!0)
a.j(0,$.b3,L.e("#000000"),!0)
a.j(0,$.bd,L.e("#2b1130"),!0)
a.j(0,$.bc,L.e("#130017"),!0)
a.j(0,$.b6,L.e("#eba900"),!0)
a.j(0,$.b7,L.e("#c28900"),!0)
a.j(0,$.b5,L.e("#855900"),!0)
a.j(0,$.bb,L.e("#ffd800"),!0)
a.j(0,$.ba,L.e("#d1a900"),!0)
a.j(0,$.b9,L.e("#44244d"),!0)
a.j(0,$.b8,L.e("#271128"),!0)
b=P.l(H.a(["Law","Courts","Trials","Rules","Edicts","Control","Cones","Order"],p),q)
c=P.l(H.a(["LEGAL LAD","SHERRIF SURESHOT","CONE KOHAI"],p),q)
d=P.l(H.a(["Lawyer","Litigator","Lands","Laborer","Lady","Lad","Lamb","Lawman","Luchador","Lover","Legislacerator"],p),q)
e=P.l(H.a(["Judge","Law Abiding","Legal","Courting","Trail","Edict","Jury","Baliff","Verdict","Sentence","Jail","Executioner"],p),q)
f=P.l(H.a(["Themis","Phoenix","Wright","Jupiter","Dike","Marduk","Fortuna"],p),q)
g=P.l(H.a([new E.N($.eG,2,!0),new E.N($.db,1,!0),new E.N($.eI,-2,!0),new E.N($.cv,-0.1,!1)],k),l)
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new Q.mV(0.01,0.9,0.1,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death's Lawyer plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["orders","rules","edicts","sentences"],["chains","gavel","caution tape","rule book","dictionary","wig","handbook","lock"],!0,!0,f,g,0.01,0.01,0.01,0.5,14,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(14,"Law",!1,!1)
$.yR=h
h=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b2,L.e("#00ff00"),!0)
h.j(0,$.b4,L.e("#00ff00"),!0)
h.j(0,$.b3,L.e("#00ff00"),!0)
h.j(0,$.bd,L.e("#00ff00"),!0)
h.j(0,$.bc,L.e("#00cf00"),!0)
h.j(0,$.b6,L.e("#171717"),!0)
h.j(0,$.b7,L.e("#080808"),!0)
h.j(0,$.b5,L.e("#080808"),!0)
h.j(0,$.bb,L.e("#616161"),!0)
h.j(0,$.ba,L.e("#3b3b3b"),!0)
h.j(0,$.b9,L.e("#4a4a4a"),!0)
h.j(0,$.b8,L.e("#292929"),!0)
g=P.l(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
f=P.l(H.a(["Shogun"],p),q)
e=P.l(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
d=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
c=P.l(H.a([new E.N($.hV,13,!0)],k),l)
b=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
b.j(0,$.b2,L.e("#FF9B00"),!0)
b.j(0,$.b4,L.e("#FF9B00"),!0)
b.j(0,$.b3,L.e("#FF8700"),!0)
b.j(0,$.bd,L.e("#7F7F7F"),!0)
b.j(0,$.bc,L.e("#727272"),!0)
b.j(0,$.b6,L.e("#A3A3A3"),!0)
b.j(0,$.b7,L.e("#999999"),!0)
b.j(0,$.b5,L.e("#898989"),!0)
b.j(0,$.bb,L.e("#EFEFEF"),!0)
b.j(0,$.ba,L.e("#DBDBDB"),!0)
b.j(0,$.b9,L.e("#C6C6C6"),!0)
b.j(0,$.b8,L.e("#ADADAD"),!0)
b=new K.oe(13,13,13,h,g,f,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",d,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],c,0.01,0.01,0.01,0.5,13,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!0,1,b,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
b.ah(13,"Sauce",!1,!0)
$.yX=b
b=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
b.j(0,$.b2,L.e("#080808"),!0)
b.j(0,$.b4,L.e("#BA1016"),!0)
b.j(0,$.b3,L.e("#820B0F"),!0)
b.j(0,$.bd,L.e("#381B76"),!0)
b.j(0,$.bc,L.e("#1E0C47"),!0)
b.j(0,$.b6,L.e("#290704"),!0)
b.j(0,$.b7,L.e("#230200"),!0)
b.j(0,$.b5,L.e("#110000"),!0)
b.j(0,$.bb,L.e("#3D190A"),!0)
b.j(0,$.ba,L.e("#2C1207"),!0)
b.j(0,$.b9,L.e("#5C2913"),!0)
b.j(0,$.b8,L.e("#4C1F0D"),!0)
c=P.l(H.a(["Bonds","Unions","Ink","Color","Nostalgia"],p),q)
d=P.l(H.a(["FRIEND HOARDER YOUTH","INKSTERMINATOR","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Investor","Investigator","Idealist","Inhabitant","Innovator","Interpreter"],p),q)
f=P.l(H.a(["Ink","Flow","Charge","Awakening","Friendship","Trusting","Union","Team","Fresh","Vim","Chorus"],p),q)
g=P.l(H.a(["Ink","Hestia","Bastet","Bes","Vesta","Eleos","Frigg","Debella","Juno","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes","Cthulhu","The Kraken","Akkorokamui","Kanaloa"],p),q)
h=P.l(H.a([new E.N($.ed,2,!0),new E.N($.eI,1,!0),new E.N($.dB,-2,!0)],k),l)
m=new L.aT(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
m.j(0,$.b2,L.e("#FF9B00"),!0)
m.j(0,$.b4,L.e("#FF9B00"),!0)
m.j(0,$.b3,L.e("#FF8700"),!0)
m.j(0,$.bd,L.e("#7F7F7F"),!0)
m.j(0,$.bc,L.e("#727272"),!0)
m.j(0,$.b6,L.e("#A3A3A3"),!0)
m.j(0,$.b7,L.e("#999999"),!0)
m.j(0,$.b5,L.e("#898989"),!0)
m.j(0,$.bb,L.e("#EFEFEF"),!0)
m.j(0,$.ba,L.e("#DBDBDB"),!0)
m.j(0,$.b9,L.e("#C6C6C6"),!0)
m.j(0,$.b8,L.e("#ADADAD"),!0)
j=new V.mu(0.5,0.5,1,0,b,c,d,e,f,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["ink","friendship","ties","pulse","chain","ocean","festival"],["ink","photo album","friendship bracelet"],g,h,0.01,0.01,0.01,0.5,15,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Ink",null,!1,!1,!1,!1,!0,1,m,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
j.ah(15,"Ink",!1,!1)
$.yQ=j
$.yV=L.yJ(255,"Null",!1,!0)
j=P.l(H.a([new E.N($.db,1,!0),new E.N($.hT,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Lyricist","Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass","Instrumentalist"],p)
h=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
g=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
f=H.a(["nobody"],p)
e=P.l(H.a([],k),l)
d=H.a(["Nobody"],p)
c=H.a(["Nobody"],p)
q=new F.nm(j,q,m,h,g,!1,f,e,d,c,1,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"loud","musical","Music")
q.D()
q.E()
B.cR(q)
$.zX=q
q=P.l(H.a([new E.N($.eG,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist","Ichthyologist","Instructor"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kH(q,m,j,i,h,!1,g,f,e,d,13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"nerdy","smart","Academic")
q.D()
q.E()
B.cR(q)
$.zQ=q
q=P.l(H.a([new E.N($.hV,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler","Iceskater"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kM(q,m,j,i,h,!1,g,f,e,d,4,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dumb","athletic","Athletic")
q.D()
q.E()
B.cR(q)
$.zR=q
q=P.l(H.a([new E.N($.hU,-1,!0),new E.N($.hT,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["LaughMaster","Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor","Imp"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.l5(q,m,j,i,h,!1,g,f,e,d,0,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dorky","funny","Comedy")
q.D()
q.E()
B.cR(q)
$.zS=q
q=P.l(H.a([new E.N($.db,-1,!0),new E.N($.eH,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business","Idealist"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.li(q,m,j,i,h,!1,g,f,e,d,2,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"pretentious","cultured","Culture")
q.D()
q.E()
B.cR(q)
$.zT=q
q=P.l(H.a([new E.N($.db,1,!0),new E.N($.ed,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer","Innkeeper"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lq(q,m,j,i,h,!1,g,f,e,d,8,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"boring","domestic","Domestic")
q.D()
q.E()
B.cR(q)
$.zU=q
q=P.l(H.a([new E.N($.hT,1,!0),new E.N($.dB,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Lich","Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart","Illusionist"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lU(q,m,j,i,h,!1,g,f,e,d,7,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"whimpy","imaginative","Fantasy")
q.D()
q.E()
B.cR(q)
$.zV=q
q=P.l(H.a([new E.N($.hV,1,!0),new E.N($.eH,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Legislator","Legalist","Legislacerator","Lawman","Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel","Investigator"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mS(q,m,j,i,h,!1,g,f,e,d,6,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"harsh","fair-minded","Justice")
q.D()
q.E()
B.cR(q)
$.zW=q
q=P.l(H.a([new E.N($.eI,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent","Imposter"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nW(q,m,j,i,h,!1,g,f,e,d,9,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"frivolous","geeky","PopCulture")
q.D()
q.E()
B.cR(q)
$.zZ=q
q=P.l(H.a([new E.N($.ed,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team","Idealist"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.oa(q,m,j,i,h,!1,g,f,e,d,12,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"obsessive","romantic","Romantic")
q.D()
q.E()
B.cR(q)
$.A_=q
q=P.l(H.a([new E.N($.db,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally","Icebreaker"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.oq(q,m,j,i,h,!1,g,f,e,d,11,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"shallow","extroverted","Social")
q.D()
q.E()
B.cR(q)
$.A0=q
q=P.l(H.a([new E.N($.ed,-1,!0),new E.N($.db,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod","Iconoclast","Infidel"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.p4(q,m,j,i,h,!1,g,f,e,d,5,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"terrible","honest","Terrible")
q.D()
q.E()
B.cR(q)
$.A2=q
q=P.l(H.a([new E.N($.eG,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis","Illustrator"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pK(q,m,j,i,h,!1,g,f,e,d,3,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"wordy","lettered","Writing")
q.D()
q.E()
B.cR(q)
$.A3=q
q=P.l(H.a([new E.N($.dB,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data","Incinerator"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.p3(q,m,j,i,h,!1,g,f,e,d,10,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"awkward","techy","Technology")
q.D()
q.E()
B.cR(q)
$.A1=q
q=H.a(["nobody"],p)
l=P.l(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hp(!0,q,l,k,p,-13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"","","Null")
q.D()
q.E()
B.cR(q)
$.zY=q
A.wK()
t=3
return P.cL(Y.nn(),$async$rD)
case 3:case 1:return P.bz(r,s)}})
return P.bA($async$rD,s)}},Z={
W:function(a,b){var t=document.createElement("li")
C.a_.eK(t,a)
b.appendChild(t)},
ph:function ph(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ls:function ls(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a8,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.M=M
_.a8=a8
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
zF:function(){var t,s
if(!$.vQ)$.vQ=!0
else return
t=[P.y]
s=new Y.p6(H.a([],t))
$.tt=s
Z.cQ(s,"txt",null)
Z.cQ($.tt,"vert","x-shader/x-vertex")
Z.cQ($.tt,"frag","x-shader/x-fragment")
$.zE=new Y.o5(H.a([],t))
$.vS=new Y.l0(H.a([],t))
s=new B.pP(H.a([],t))
$.vU=s
Z.cQ(s,"zip",null)
Z.cQ($.vU,"bundle",null)
s=new U.pG(H.a([],t))
$.zN=s
Z.cQ(s,"words",null)
s=new Q.nU(H.a([],t))
$.vT=s
Z.cQ(s,"png",null)
Z.cQ($.vT,"jpg","image/jpeg")
$.zL=new Q.nR(H.a([],t))
s=new M.ov(H.a([],t))
$.zM=s
Z.cQ(s,"psprite",null)
s=new V.ma(H.a([],t))
$.ts=s
Z.cQ(s,"ttf",null)
Z.cQ($.ts,"otf",null)
Z.cQ($.ts,"woff",null)
s=new Y.nB(null,H.a([],t))
$.zI=s
Z.cQ(s,"obj",null)
s=new U.nb(H.a([],t))
$.zG=s
Z.cQ(s,"mp3",null)
$.zH=new U.oT(H.a([],t))
s=new U.nF(H.a([],t))
$.zJ=s
Z.cQ(s,"ogg",null)
$.zK=new U.oU(H.a([],t))},
cQ:function(a,b,c){$.$get$mb().i(0,b,new Z.iy(a,c,[null,null]))
a.a.push(b)},
vR:function(a){var t
if($.$get$mb().Z(0,a)){t=$.$get$mb().n(0,a)
if(t.a instanceof O.cb)return t
throw H.k("File format for extension ."+H.B(a)+" does not match expected types.")}throw H.k("No file format found for extension ."+H.B(a))},
iy:function iy(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
na:function na(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},
u3:function u3(){},
u_:function u_(){},
u0:function u0(){}},V={lq:function lq(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ma:function ma(a){this.a=a},mu:function mu(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a8,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.M=M
_.a8=a8
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
_.x1=x1},nk:function nk(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},nJ:function nJ(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},p4:function p4(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
zx:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dt(new P.ce(""),0,0)
t.ag(a,8)
s=Math.pow(256,e)
c.toString
r=H.cS(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.v(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.v(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ag(n-1,p)
t.ag(a,8)}return t.b2(b)},
zw:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cD(c)
s=new Uint8Array(t)
r=new B.di(null,0)
r.a=J.e_(a,b)
for(q=e*8,p=0;p<c;){o=r.a9(q)+1
n=r.a9(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.v(s,l)
s[l]=n}p+=o}return s},
te:function(a){return new V.lA(a)},
td:function(a){return new V.lz(a)},
zt:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dt(new P.ce(""),0,0)
t.ag(a,8)
s=d.gcO()
r=C.f.ai(Math.log(H.kw(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cS(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.v(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.v(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ag(m-1,o)
t.ag(a,r)}return t.b2(b)},
zs:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cD(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ai(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.di(null,0)
p.a=J.e_(a,b)
for(r=e*8,o=0;o<c;){n=p.a9(r)+1
m=p.a9(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.v(s,k)
s[k]=m}o+=n}return s},
tc:function(a){return new V.ly(a)},
tb:function(a){return new V.lx(a)},
zv:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dt(new P.ce(""),0,0)
t.ag(a,8)
s=d.gcO()
r=C.f.ai(Math.log(H.kw(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cS(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.v(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.v(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.ai(Math.log(n)/0.6931471805599453)+1
t.ag(k-1,5)
t.ag(n-1,k)
t.ag(a,r)}return t.b2(b)},
zu:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cD(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ai(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.di(null,0)
p.a=J.e_(a,b)
for(o=0;o<c;){n=p.a9(p.a9(5)+1)+1
m=p.a9(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.v(s,r)
s[r]=m}o+=n}return s},
lA:function lA(a){this.a=a},
lz:function lz(a){this.a=a},
ly:function ly(a){this.a=a},
lx:function lx(a){this.a=a}},X={iz:function iz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},ii:function ii(){},mk:function mk(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},F:function F(a,b,c){this.a=a
this.b=b
this.c=c}},N={ac:function ac(){},mS:function mS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},o_:function o_(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},oq:function oq(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},or:function or(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},pc:function pc(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a8,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.M=M
_.a8=a8
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
Fx:function(a){var t,s,r,q,p,o,n,m,l
t=J.cz(a)
s=new W.ki(document.querySelectorAll("link"),[null])
for(r=new H.ez(s,s.gm(s),0,null,[null]);r.F();){q=r.d
p=J.aq(q)
if(!!p.$ishx&&q.rel==="stylesheet"){o=$.$get$nP()
H.B(p.ga7(q))
o.toString
o=t.length
n=Math.min(o,J.cn(p.ga7(q)))
for(m=0;m<n;++m){if(m>=o)return H.v(t,m)
if(t[m]!==J.ig(p.ga7(q),m)){l=C.c.af(t,m)
$.$get$nP().toString
return l.split("/").length-1}continue}}}$.$get$nP().b9(C.m,"Didn't find a css link to derive relative path")
return 0},
uq:function(){var t=P.xl()
if(!$.$get$nO().Z(0,t))$.$get$nO().i(0,t,N.Fx(t))
return $.$get$nO().n(0,t)}},E={iM:function iM(){},nE:function nE(){},N:function N(a,b,c){this.a=a
this.b=b
this.c=c},fP:function fP(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},kL:function kL(a,b,c){this.a=a
this.b=b
this.c=c},nl:function nl(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},o4:function o4(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},od:function od(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},pB:function pB(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},B={mi:function mi(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
cR:function(a){var t=a.f
if($.$get$mw().Z(0,t))throw H.k("Duplicate aspect id for "+a.A(0)+": "+t+" is already registered for "+J.cz($.$get$mw().n(0,t))+".")
$.$get$mw().i(0,t,a)},
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
pP:function pP(a){this.a=a},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a,b){this.a=a
this.b=b},
Ha:function(a){return a.ba(0)},
dC:function dC(a){this.a=a},
ka:function ka(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
i0:function i0(a,b){this.a=a
this.b=b}},Q={mr:function mr(){},nU:function nU(a){this.a=a},nR:function nR(a){this.a=a},mV:function mV(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a8,bt,bu,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.M=M
_.a8=a8
_.bt=bt
_.bu=bu
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
_.x1=x1},oa:function oa(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pA:function pA(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},jQ:function jQ(){},
J:function(a,b,c){var t=new Q.dX(null,null,[c])
t.de(a,b,c)
return t},
uV:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.J(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dZ(a,"$iso",[e],"$aso"))if(H.dZ(a,"$iscU",[e],"$ascU"))for(s=J.df(a.gbZ()),r=0;s.F();){q=s.gR()
p=t.b
o=p.length
if(r>=o)return H.v(p,r)
p[r]=q;++r}else for(s=a.gV(a),p=[H.Q(t,0)],r=0;s.F();){n=s.gR()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.v(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gV(a),p=[e],o=[H.Q(t,0)];s.F();){l=s.gR()
if(H.Hs(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.v(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dZ(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.v(m,0)
m[0]=l}else throw H.k("Invalid entry type "+H.B(J.vh(l))+" for WeightedList<"+H.B(H.c3(H.dG(e)))+">. Should be "+H.B(H.c3(H.dG(e)))+" or WeightPair<"+H.B(H.c3(H.dG(e)))+">.")}return t},
uW:function(a,b,c,d){return new Q.k7(J.vj(a.gbZ(),new Q.pE(c,d,b)),null,[c,d])},
cU:function cU(){},
dX:function dX(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
i_:function i_(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eR:function eR(){},
hZ:function hZ(){},
pD:function pD(a,$ti){this.a=a
this.$ti=$ti},
k7:function k7(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pE:function pE(a,b,c){this.a=a
this.b=b
this.c=c},
oh:function(){var t=0,s=P.bw(),r
var $async$oh=P.bB(function(a,b){if(a===1)return P.by(b,s)
while(true)switch(t){case 0:t=3
return P.cL(A.hA("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$oh)
case 3:r=A.hA("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$oh,s)}},G={mY:function mY(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},nW:function nW(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
z8:function(a){var t,s,r,q,p,o,n,m,l
t=G.a2
s=P.jD(a,t)
r=P.a1(null,null,null,t)
q=H.a([],[G.d])
for(t=G.F7(),p=J.df(t.a),t=new H.k8(p,t.b,[H.Q(t,0)]);t.F();){o=p.gR()
if(o.er(s))q.push(o)}C.b.eP(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bV)(q),++n){o=q[n]
if(o.er(s)){r.h(0,o)
for(p=o.f,m=p.length,l=0;l<p.length;p.length===m||(0,H.bV)(p),++l)s.am(0,p[l])}}if(s.a!==0)r.av(0,s)
return r},
F7:function(){var t=$.$get$c()
t.toString
return new H.eP(t,new G.mI(),[H.Q(t,0)])},
a2:function a2(){},
aK:function aK(a,b,c,d){var _=this
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
mI:function mI(){}},F={nm:function nm(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pK:function pK(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Ff:function(a){if(a===C.h){window
return C.i.gap(C.i)}if(a===C.m){window
return C.i.gih()}if(a===C.a6){window
return C.i.ghC()}return P.Hv()},
hB:function hB(a,b){this.a=a
this.b=b},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
u8:function u8(){},
zr:function(a,b,c,d){var t,s,r,q
t=new B.dt(new P.ce(""),0,0)
t.ag(a,8)
c.toString
s=H.cS(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bT(s[q])
return t.b2(b)},
zq:function(a,b,c,d){var t,s,r,q,p
t=H.cD(c)
s=new Uint8Array(t)
r=new B.di(null,0)
r.a=J.e_(a,b)
for(q=0;q<c;++q){p=r.c0()
if(q>=t)return H.v(s,q)
s[q]=p}return s},
zp:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dt(new P.ce(""),0,0)
t.ag(a,8)
s=d.gcO()
r=C.f.ai(Math.log(H.kw(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cS(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.v(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.v(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bT(o-1)
t.ag(a,r)}return t.b2(b)},
zo:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cD(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ai(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.di(null,0)
p.a=J.e_(a,b)
for(o=0;o<c;){n=p.c0()+1
m=p.a9(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.v(s,r)
s[r]=m}o+=n}return s},
zn:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dt(new P.ce(""),0,0)
t.ag(a,8)
c.toString
s=H.cS(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.v(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.v(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bT(p-1)
t.bT(a)}return t.b2(b)},
zm:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cD(c)
s=new Uint8Array(t)
r=new B.di(null,0)
r.a=J.e_(a,b)
for(q=0;q<c;){p=r.c0()+1
o=r.c0()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.v(s,m)
s[m]=o}q+=p}return s}},R={
wX:function(a){var t,s
if(a.gm(a).aC(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.gip(s).giA().ec("checking for two players, ps is "+H.B(a)+", ret is "+t)
return t},
FZ:function(a){return R.wX(a)&&R.FN(a)},
FK:function(a){a.gab(a).gbn()
return!1},
FY:function(a){a.gab(a).gbn()
return!1},
FN:function(a){a.gab(a).gbn()
return!1},
FX:function(a){a.gab(a).gbn()
return!1},
FW:function(a){return a.gab(a).gbo().giz()},
FU:function(a){return a.gab(a).gbo().gix()},
FS:function(a){return a.gab(a).gbo().giw()},
FO:function(a){return a.gab(a).gbo().giu()},
FQ:function(a){return a.gab(a).gbo().giv()},
FV:function(a){return a.gab(a).gbo().giy()},
FP:function(a){var t=a.gab(a)
t.gbn()
t.gbn()
return!1},
FR:function(a){return a.gab(a).ghH()},
FT:function(a){a.gab(a).ghH()
return!1},
FL:function(a){return!0},
FM:function(a){a.gab(a).gir()
return!1},
o0:function o0(){},
a_:function a_(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
oZ:function oZ(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
up:function up(){},
uo:function uo(){}},D={p3:function p3(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Gv:function(){var t,s
if($.x1)return
$.x1=!0
t=new D.cl("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
t.y=0
$.x0=t
t=new D.cl("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.Gt=t
t=new D.kb(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
t.y=2.5
t.Q=1
$.hV=t
t=new D.kb(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
t.y=2.5
$.eH=t
t=new D.cl("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.Gs=t
t=new D.cl("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.eI=t
t=new D.o7("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.ed=t
t=new D.cl("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.db=t
t=new D.cl("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.eG=t
t=new D.cl("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.hT=t
t=new D.cl("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.hU=t
t=new D.cl("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.dB=t
t=new D.cl("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cI().push(t)
$.cv=t
t=P.y
s=D.cl
$.Gu=H.za(P.Fb($.$get$cI(),new D.ox(),new D.oy(),t,s),t,s)},
uJ:function(){var t=$.$get$cI()
return new H.eP(t,new D.oz(),[H.Q(t,0)])},
ox:function ox(){},
oy:function oy(){},
oz:function oz(){},
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
kb:function kb(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
o7:function o7(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,A,Z,V,X,N,E,B,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.u5.prototype={}
J.f.prototype={
P:function(a,b){return a===b},
ga6:function(a){return H.eD(a)},
A:function(a){return H.nY(a)},
gac:function(a){return new H.dW(H.kz(a),null)},
$ishk:1,
$isad:1,
$isfp:1,
$isad:1,
$ismO:1,
$isf:1,
$ismO:1,
$isf:1,
$ishE:1,
$isad:1}
J.mM.prototype={
A:function(a){return String(a)},
ga6:function(a){return a?519018:218159},
gac:function(a){return C.am},
$iscV:1}
J.mN.prototype={
P:function(a,b){return null==b},
A:function(a){return"null"},
ga6:function(a){return 0},
gac:function(a){return C.ag},
$isd7:1}
J.hv.prototype={
ga6:function(a){return 0},
gac:function(a){return C.af},
A:function(a){return String(a)},
$ismO:1,
h:function(a,b){return a.add(b)},
am:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gbY:function(a){return a.left},
gc3:function(a){return a.top},
gdZ:function(a){return a.attributes},
gb4:function(a){return a.width},
gaZ:function(a){return a.height},
hU:function(a,b){return a.parse(b)},
eM:function(a,b){return a.setLogging(b)},
eN:function(a,b){return a.setMaterials(b)}}
J.nT.prototype={}
J.eM.prototype={}
J.ex.prototype={
A:function(a){var t=a[$.$get$vx()]
return t==null?this.eU(a):J.cz(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ev.prototype={
bW:function(a,b){if(!!a.immutable$list)throw H.k(new P.V(b))},
cE:function(a,b){if(!!a.fixed$length)throw H.k(new P.V(b))},
h:function(a,b){this.cE(a,"add")
a.push(b)},
a5:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.k(new P.bM(a))}},
aw:function(a,b){return new H.eB(a,b,[H.Q(a,0),null])},
bh:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.B(a[r])
if(r>=t)return H.v(s,r)
s[r]=q}return s.join(b)},
d6:function(a,b){return H.x3(a,b,null,H.Q(a,0))},
hr:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.k(new P.bM(a))}return s},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
c9:function(a,b,c){if(b<0||b>a.length)throw H.k(P.bH(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.k(H.bv(c))
if(c<b||c>a.length)throw H.k(P.bH(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.Q(a,0)])
return H.a(a.slice(b,c),[H.Q(a,0)])},
gab:function(a){if(a.length>0)return a[0]
throw H.k(H.ht())},
gb8:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.k(H.ht())},
a3:function(a,b,c,d,e){var t,s,r
this.bW(a,"setRange")
P.dm(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.b0(P.bH(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.k(H.wD())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.v(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.v(d,r)
a[b+s]=d[r]}},
as:function(a,b,c,d){return this.a3(a,b,c,d,0)},
bv:function(a,b,c,d){var t
this.bW(a,"fill range")
P.dm(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aB:function(a,b,c,d){var t,s,r,q,p,o
this.cE(a,"replaceRange")
P.dm(b,c,a.length,null,null,null)
d=C.c.an(d)
if(typeof c!=="number")return c.aj()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.as(a,b,r,d)
if(p!==0){this.a3(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a3(a,r,o,a,c)
this.as(a,b,r,d)}},
dY:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.k(new P.bM(a))}return!1},
hp:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.k(new P.bM(a))}return!0},
d7:function(a,b){var t
this.bW(a,"sort")
t=b==null?P.Hu():b
H.jX(a,0,a.length-1,t)},
eP:function(a){return this.d7(a,null)},
b_:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.b1(a[t],b))return t
return-1},
bg:function(a,b){return this.b_(a,b,0)},
W:function(a,b){var t
for(t=0;t<a.length;++t)if(J.b1(a[t],b))return!0
return!1},
gU:function(a){return a.length===0},
A:function(a){return P.jx(a,"[","]")},
a1:function(a,b){var t=H.a(a.slice(0),[H.Q(a,0)])
return t},
an:function(a){return this.a1(a,!0)},
gV:function(a){return new J.ih(a,a.length,0,null,[H.Q(a,0)])},
ga6:function(a){return H.eD(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cE(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.e0(b,"newLength",null))
if(b<0)throw H.k(P.bH(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c8(a,b))
if(b>=a.length||b<0)throw H.k(H.c8(a,b))
return a[b]},
i:function(a,b,c){this.bW(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c8(a,b))
if(b>=a.length||b<0)throw H.k(H.c8(a,b))
a[b]=c},
$isaA:1,
$asaA:function(){},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
J.u4.prototype={}
J.ih.prototype={
gR:function(){return this.d},
F:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.k(H.bV(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fl.prototype={
ay:function(a,b){var t
if(typeof b!=="number")throw H.k(H.bv(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcL(b)
if(this.gcL(a)===t)return 0
if(this.gcL(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcL:function(a){return a===0?1/a<0:a<0},
ai:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.k(new P.V(""+a+".floor()"))},
bC:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(new P.V(""+a+".round()"))},
ad:function(a,b,c){if(C.a.ay(b,c)>0)throw H.k(H.bv(b))
if(this.ay(a,b)<0)return b
if(this.ay(a,c)>0)return c
return a},
l:function(a){return a},
bE:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.k(P.bH(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.Y(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.b0(new P.V("Unexpected toString result: "+t))
r=J.bh(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.aq("0",q)},
A:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga6:function(a){return a&0x1FFFFFFF},
d2:function(a){return-a},
T:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a+b},
aq:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a*b},
bI:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
dc:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dS(a,b)},
al:function(a,b){return(a|0)===a?a/b|0:this.dS(a,b)},
dS:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.k(new P.V("Result of truncating division is "+H.B(t)+": "+H.B(a)+" ~/ "+H.B(b)))},
at:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
if(b<0)throw H.k(H.bv(b))
return b>31?0:a<<b>>>0},
ao:function(a,b){return b>31?0:a<<b>>>0},
aU:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fW:function(a,b){if(b<0)throw H.k(H.bv(b))
return b>31?0:a>>>b},
dR:function(a,b){return b>31?0:a>>>b},
a2:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a<b},
aC:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a>b},
ar:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a>=b},
gac:function(a){return C.ap},
$isdr:1}
J.jA.prototype={
gac:function(a){return C.ao},
$isX:1,
$isdr:1,
$isC:1}
J.jz.prototype={
gac:function(a){return C.an},
$isX:1,
$isdr:1}
J.ew.prototype={
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c8(a,b))
if(b<0)throw H.k(H.c8(a,b))
if(b>=a.length)H.b0(H.c8(a,b))
return a.charCodeAt(b)},
a4:function(a,b){if(b>=a.length)throw H.k(H.c8(a,b))
return a.charCodeAt(b)},
cB:function(a,b,c){if(c>b.length)throw H.k(P.bH(c,0,b.length,null,null))
return new H.r_(b,a,c)},
aV:function(a,b){return this.cB(a,b,0)},
eh:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.k(P.bH(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.Y(b,c+s)!==this.a4(a,s))return
return new H.k1(c,b,a)},
T:function(a,b){if(typeof b!=="string")throw H.k(P.e0(b,null,null))
return a+b},
ho:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.af(a,s-t)},
cX:function(a,b,c){return H.ya(a,b,c)},
i6:function(a,b,c){return H.I0(a,b,c,null)},
eQ:function(a,b){if(b==null)H.b0(H.bv(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hu&&b.gdF().exec("").length-2===0)return a.split(b.gfJ())
else return this.fo(a,b)},
aB:function(a,b,c,d){var t,s
H.v3(b)
c=P.dm(b,c,a.length,null,null,null)
H.v3(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fo:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.y])
for(s=J.ye(b,a),s=s.gV(s),r=0,q=1;s.F();){p=s.gR()
o=p.gd8(p)
n=p.ge4(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.K(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.af(a,r))
return t},
aD:function(a,b,c){var t
H.v3(c)
if(typeof c!=="number")return c.a2()
if(c<0||c>a.length)throw H.k(P.bH(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.yw(b,a,c)!=null},
ae:function(a,b){return this.aD(a,b,0)},
K:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.b0(H.bv(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.b0(H.bv(c))
if(typeof b!=="number")return b.a2()
if(b<0)throw H.k(P.jU(b,null,null))
if(typeof c!=="number")return H.ai(c)
if(b>c)throw H.k(P.jU(b,null,null))
if(c>a.length)throw H.k(P.jU(c,null,null))
return a.substring(b,c)},
af:function(a,b){return this.K(a,b,null)},
ie:function(a){return a.toLowerCase()},
ig:function(a){return a.toUpperCase()},
bi:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a4(t,0)===133){r=J.F9(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.Y(t,q)===133?J.u1(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
es:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.Y(t,r)===133)s=J.u1(t,r)}else{s=J.u1(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
aq:function(a,b){var t,s
if(typeof b!=="number")return H.ai(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.N)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
b_:function(a,b,c){var t
if(c<0||c>a.length)throw H.k(P.bH(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bg:function(a,b){return this.b_(a,b,0)},
hK:function(a,b,c){var t
if(b==null)H.b0(H.bv(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.b0(P.bH(t,0,c,null,null))
if(b.ck(a,t)!=null)return t}return-1},
ee:function(a,b){return this.hK(a,b,null)},
e2:function(a,b,c){if(c>a.length)throw H.k(P.bH(c,0,a.length,null,null))
return H.I_(a,b,c)},
W:function(a,b){return this.e2(a,b,0)},
gU:function(a){return a.length===0},
ay:function(a,b){var t
if(typeof b!=="string")throw H.k(H.bv(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
A:function(a){return a},
ga6:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gac:function(a){return C.ah},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c8(a,b))
if(b>=a.length||b<0)throw H.k(H.c8(a,b))
return a[b]},
$isaA:1,
$asaA:function(){},
$isy:1}
H.l4.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.Y(this.a,b)},
$ashY:function(){return[P.C]},
$ashz:function(){return[P.C]},
$asfq:function(){return[P.C]},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]}}
H.t.prototype={$ast:null}
H.ey.prototype={
gV:function(a){return new H.ez(this,this.gm(this),0,null,[H.ax(this,"ey",0)])},
a5:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.S(0,s))
if(t!==this.gm(this))throw H.k(new P.bM(this))}},
gU:function(a){return this.gm(this)===0},
gab:function(a){if(this.gm(this)===0)throw H.k(H.ht())
return this.S(0,0)},
W:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.b1(this.S(0,s),b))return!0
if(t!==this.gm(this))throw H.k(new P.bM(this))}return!1},
c6:function(a,b){return this.eT(0,b)},
aw:function(a,b){return new H.eB(this,b,[H.ax(this,"ey",0),null])},
a1:function(a,b){var t,s,r
t=H.a([],[H.ax(this,"ey",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.S(0,s)
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
an:function(a){return this.a1(a,!0)}}
H.oX.prototype={
gfp:function(){var t=J.cn(this.a)
return t},
gfX:function(){var t,s
t=J.cn(this.a)
s=this.b
if(J.cy(s,t))return t
return s},
gm:function(a){var t,s
t=J.cn(this.a)
s=this.b
if(J.va(s,t))return 0
if(typeof s!=="number")return H.ai(s)
return t-s},
S:function(a,b){var t=J.eg(this.gfX(),b)
if(J.eh(b,0)||J.va(t,this.gfp()))throw H.k(P.bx(b,this,"index",null,null))
return J.vd(this.a,t)},
a1:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bh(s)
q=r.gm(s)
if(typeof t!=="number")return H.ai(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.S(s,t+m)
if(m>=n.length)return H.v(n,m)
n[m]=o
if(r.gm(s)<q)throw H.k(new P.bM(this))}return n},
an:function(a){return this.a1(a,!0)},
f2:function(a,b,c,d){var t=this.b
if(J.eh(t,0))H.b0(P.bH(t,0,null,"start",null))}}
H.ez.prototype={
gR:function(){return this.d},
F:function(){var t,s,r,q
t=this.a
s=J.bh(t)
r=s.gm(t)
if(this.b!==r)throw H.k(new P.bM(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.S(t,q);++this.c
return!0}}
H.hD.prototype={
gV:function(a){return new H.jF(null,J.df(this.a),this.b,this.$ti)},
gm:function(a){return J.cn(this.a)},
gU:function(a){return J.rX(this.a)},
$aso:function(a,b){return[b]}}
H.h3.prototype={$ist:1,
$ast:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.jF.prototype={
F:function(){var t=this.b
if(t.F()){this.a=this.c.$1(t.gR())
return!0}this.a=null
return!1},
gR:function(){return this.a},
$asjy:function(a,b){return[b]}}
H.eB.prototype={
gm:function(a){return J.cn(this.a)},
S:function(a,b){return this.b.$1(J.vd(this.a,b))},
$asey:function(a,b){return[b]},
$ast:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.eP.prototype={
gV:function(a){return new H.k8(J.df(this.a),this.b,this.$ti)},
aw:function(a,b){return new H.hD(this,b,[H.Q(this,0),null])}}
H.k8.prototype={
F:function(){var t,s
for(t=this.a,s=this.b;t.F();)if(s.$1(t.gR())===!0)return!0
return!1},
gR:function(){return this.a.gR()}}
H.iI.prototype={
sm:function(a,b){throw H.k(new P.V("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.k(new P.V("Cannot add to a fixed-length list"))},
aB:function(a,b,c,d){throw H.k(new P.V("Cannot remove from a fixed-length list"))}}
H.pn.prototype={
i:function(a,b,c){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.k(new P.V("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.k(new P.V("Cannot add to an unmodifiable list"))},
a3:function(a,b,c,d,e){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
as:function(a,b,c,d){return this.a3(a,b,c,d,0)},
aB:function(a,b,c,d){throw H.k(new P.V("Cannot remove from an unmodifiable list"))},
bv:function(a,b,c,d){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
H.hY.prototype={$asp:null,$ast:null,$aso:null,$isp:1,$ist:1,$iso:1}
H.rU.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rV.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qF.prototype={}
H.fC.prototype={
dX:function(a,b){if(!this.f.P(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cz()},
i5:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.am(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.v(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.v(p,q)
p[q]=r
if(q===s.c)s.dv();++s.d}this.y=!1}this.cz()},
h0:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aq(a),s=0;r=this.ch,s<r.length;s+=2)if(t.P(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.v(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
i3:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aq(a),s=0;r=this.ch,s<r.length;s+=2)if(t.P(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.b0(new P.V("removeRange"))
P.dm(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eJ:function(a,b){if(!this.r.P(0,a))return
this.db=b},
hx:function(a,b,c){var t=J.aq(b)
if(!t.P(b,0))t=t.P(b,1)&&!this.cy
else t=!0
if(t){J.fL(a,c)
return}t=this.cx
if(t==null){t=P.ua(null,null)
this.cx=t}t.aK(0,new H.qA(a,c))},
hw:function(a,b){var t
if(!this.r.P(0,a))return
t=J.aq(b)
if(!t.P(b,0))t=t.P(b,1)&&!this.cy
else t=!0
if(t){this.bX()
return}t=this.cx
if(t==null){t=P.ua(null,null)
this.cx=t}t.aK(0,this.ghJ())},
hy:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fJ(a)
if(b!=null)P.fJ(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cz(a)
s[1]=b==null?null:J.cz(b)
for(r=new P.dD(t,t.r,null,null,[null]),r.c=t.e;r.F();)J.fL(r.d,s)},
bs:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.bW(o)
p=H.cx(o)
this.hy(q,p)
if(this.db===!0){this.bX()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghI()
if(this.cx!=null)for(;n=this.cx,!n.gU(n);)this.cx.em().$0()}return s},
cM:function(a){return this.b.n(0,a)},
dg:function(a,b){var t=this.b
if(t.Z(0,a))throw H.k(P.lC("Registry: ports must be registered only once."))
t.i(0,a,b)},
cz:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bX()},
bX:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.be(0)
for(t=this.b,s=t.gc4(t),s=s.gV(s);s.F();)s.gR().fh()
t.be(0)
this.c.be(0)
u.globalState.z.am(0,this.a)
this.dx.be(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.v(t,p)
J.fL(q,t[p])}this.ch=null}},
ghI:function(){return this.d},
ghc:function(){return this.e}}
H.qA.prototype={
$0:function(){J.fL(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qb.prototype={
hi:function(){var t=this.a
if(t.b===t.c)return
return t.em()},
eq:function(){var t,s,r
t=this.hi()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.Z(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gU(s)}else s=!1
else s=!1
else s=!1
if(s)H.b0(P.lC("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gU(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hy(["command","close"])
r=new H.dE(!0,new P.km(0,null,null,null,null,null,0,[null,P.C])).ax(r)
s.toString
self.postMessage(r)}return!1}t.i_()
return!0},
dM:function(){if(self.window!=null)new H.qc(this).$0()
else for(;this.eq(););},
bD:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dM()
else try{this.dM()}catch(r){t=H.bW(r)
s=H.cx(r)
q=u.globalState.Q
p=P.hy(["command","error","msg",H.B(t)+"\n"+H.B(s)])
p=new H.dE(!0,P.i7(null,P.C)).ax(p)
q.toString
self.postMessage(p)}}}
H.qc.prototype={
$0:function(){if(!this.a.eq())return
P.x5(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.eT.prototype={
i_:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bs(this.b)}}
H.qE.prototype={}
H.mx.prototype={
$0:function(){H.A7(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.my.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fI(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fI(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cz()},
$S:function(){return{func:1,v:true}}}
H.pY.prototype={}
H.fD.prototype={
b6:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdD())return
r=H.H6(b)
if(t.ghc()===s){s=J.bh(r)
switch(s.n(r,0)){case"pause":t.dX(s.n(r,1),s.n(r,2))
break
case"resume":t.i5(s.n(r,1))
break
case"add-ondone":t.h0(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.i3(s.n(r,1))
break
case"set-errors-fatal":t.eJ(s.n(r,1),s.n(r,2))
break
case"ping":t.hx(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hw(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.am(0,s)
break}return}u.globalState.f.a.aK(0,new H.eT(t,new H.qH(this,r),"receive"))},
P:function(a,b){if(b==null)return!1
return b instanceof H.fD&&J.b1(this.b,b.b)},
ga6:function(a){return this.b.gcn()}}
H.qH.prototype={
$0:function(){var t=this.a.b
if(!t.gdD())t.fd(0,this.b)},
$S:function(){return{func:1}}}
H.ib.prototype={
b6:function(a,b){var t,s,r
t=P.hy(["command","message","port",this,"msg",b])
s=new H.dE(!0,P.i7(null,P.C)).ax(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
P:function(a,b){if(b==null)return!1
return b instanceof H.ib&&J.b1(this.b,b.b)&&J.b1(this.a,b.a)&&J.b1(this.c,b.c)},
ga6:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.at()
s=this.a
if(typeof s!=="number")return s.at()
r=this.c
if(typeof r!=="number")return H.ai(r)
return(t<<16^s<<8^r)>>>0}}
H.ft.prototype={
fh:function(){this.c=!0
this.b=null},
fd:function(a,b){if(this.c)return
this.b.$1(b)},
$isG_:1,
gcn:function(){return this.a},
gdD:function(){return this.c}}
H.pe.prototype={
f3:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aK(0,new H.eT(s,new H.pf(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dq(new H.pg(this,b),0),a)}else throw H.k(new P.V("Timer greater than 0."))}}
H.pf.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pg.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dJ.prototype={
ga6:function(a){var t=this.a
if(typeof t!=="number")return t.d5()
t=C.d.aU(t,0)^C.d.al(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
P:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dJ){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcn:function(){return this.a}}
H.dE.prototype={
ax:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.aq(a)
if(!!t.$isfm)return["buffer",a]
if(!!t.$iseC)return["typed",a]
if(!!t.$isaA)return this.eF(a)
if(!!t.$isA4){r=this.geC()
q=t.gaN(a)
q=H.dx(q,r,H.ax(q,"o",0),null)
q=P.d6(q,!0,H.ax(q,"o",0))
t=t.gc4(a)
t=H.dx(t,r,H.ax(t,"o",0),null)
return["map",q,P.d6(t,!0,H.ax(t,"o",0))]}if(!!t.$ismO)return this.eG(a)
if(!!t.$isf)this.eu(a)
if(!!t.$isG_)this.bG(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfD)return this.eH(a)
if(!!t.$isib)return this.eI(a)
if(!!t.$isf2){p=a.$static_name
if(p==null)this.bG(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdJ)return["capability",a.a]
if(!(a instanceof P.ad))this.eu(a)
return["dart",u.classIdExtractor(a),this.eE(u.classFieldsExtractor(a))]},
bG:function(a,b){throw H.k(new P.V((b==null?"Can't transmit:":b)+" "+H.B(a)))},
eu:function(a){return this.bG(a,null)},
eF:function(a){var t=this.eD(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bG(a,"Can't serialize indexable: ")},
eD:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.ax(a[s])
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
eE:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.ax(a[t]))
return a},
eG:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bG(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.ax(a[t[r]])
if(r>=s.length)return H.v(s,r)
s[r]=q}return["js-object",t,s]},
eI:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eH:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcn()]
return["raw sendport",a]}}
H.eS.prototype={
aX:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.k(P.dI("Bad serialized message: "+H.B(a)))
switch(C.b.gab(a)){case"ref":if(1>=a.length)return H.v(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.v(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bq(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bq(r),[null])
case"mutable":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return this.bq(r)
case"const":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bq(r),[null])
s.fixed$length=Array
return s
case"map":return this.hm(a)
case"sendport":return this.hn(a)
case"raw sendport":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.hl(a)
case"function":if(1>=a.length)return H.v(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.v(a,1)
return new H.dJ(a[1])
case"dart":s=a.length
if(1>=s)return H.v(a,1)
q=a[1]
if(2>=s)return H.v(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bq(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.k("couldn't deserialize: "+H.B(a))}},
bq:function(a){var t,s,r
t=J.bh(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.ai(r)
if(!(s<r))break
t.i(a,s,this.aX(t.n(a,s)));++s}return a},
hm:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.v(a,1)
s=a[1]
if(2>=t)return H.v(a,2)
r=a[2]
q=P.jC()
this.b.push(q)
s=J.yD(J.vj(s,this.ghk()))
for(t=J.bh(s),p=J.bh(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aX(p.n(r,o)))
return q},
hn:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.v(a,1)
s=a[1]
if(2>=t)return H.v(a,2)
r=a[2]
if(3>=t)return H.v(a,3)
q=a[3]
if(J.b1(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cM(q)
if(o==null)return
n=new H.fD(o,r)}else n=new H.ib(s,q,r)
this.b.push(n)
return n},
hl:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.v(a,1)
s=a[1]
if(2>=t)return H.v(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bh(s)
p=J.bh(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.ai(n)
if(!(o<n))break
q[t.n(s,o)]=this.aX(p.n(r,o));++o}return q}}
H.l8.prototype={
$aseN:function(){},
$asjE:function(){},
$asb_:function(){},
$isb_:1}
H.l7.prototype={
gU:function(a){return this.gm(this)===0},
A:function(a){return P.wL(this)},
i:function(a,b,c){return H.zb()},
$isb_:1,
$asb_:null}
H.fZ.prototype={
gm:function(a){return this.a},
Z:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.Z(0,b))return
return this.cm(b)},
cm:function(a){return this.b[a]},
a5:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.cm(q))}}}
H.l9.prototype={
Z:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!0
return this.b.hasOwnProperty(b)},
cm:function(a){return"__proto__"===a?this.d:this.b[a]}}
H.o6.prototype={}
H.pk.prototype={
aF:function(a){var t,s,r
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
H.jN.prototype={
A:function(a){var t=this.b
if(t==null)return"NullError: "+H.B(this.a)
return"NullError: method not found: '"+H.B(t)+"' on null"}}
H.mR.prototype={
A:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.B(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.B(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.B(this.a)+")"}}
H.pm.prototype={
A:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hc.prototype={
gaI:function(){return this.b}}
H.rW.prototype={
$1:function(a){if(!!J.aq(a).$isel)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kp.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rJ.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rK.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rL.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rM.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.rN.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.f2.prototype={
A:function(a){return"Closure '"+H.nZ(this).trim()+"'"},
gim:function(){return this},
$D:null}
H.p2.prototype={}
H.ow.prototype={
A:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fS.prototype={
P:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fS))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga6:function(a){var t,s
t=this.c
if(t==null)s=H.eD(this.a)
else s=typeof t!=="object"?J.dH(t):H.eD(t)
t=H.eD(this.b)
if(typeof s!=="number")return s.iq()
return(s^t)>>>0},
A:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.B(this.d)+"' of "+H.nY(t)}}
H.l2.prototype={
A:function(a){return this.a}}
H.ob.prototype={
A:function(a){return"RuntimeError: "+H.B(this.a)}}
H.dW.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga6:function(a){return J.dH(this.a)},
P:function(a,b){if(b==null)return!1
return b instanceof H.dW&&J.b1(this.a,b.a)}}
H.w.prototype={
gm:function(a){return this.a},
gU:function(a){return this.a===0},
gaN:function(a){return new H.n0(this,[H.Q(this,0)])},
gc4:function(a){return H.dx(this.gaN(this),new H.mQ(this),H.Q(this,0),H.Q(this,1))},
Z:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dq(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dq(s,b)}else return this.hD(b)},
hD:function(a){var t=this.d
if(t==null)return!1
return this.by(this.bL(t,this.bx(a)),a)>=0},
av:function(a,b){b.a5(0,new H.mP(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bl(t,b)
return s==null?null:s.gaY()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bl(r,b)
return s==null?null:s.gaY()}else return this.hE(b)},
hE:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bL(t,this.bx(a))
r=this.by(s,a)
if(r<0)return
return s[r].gaY()},
i:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.cp()
this.b=t}this.df(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cp()
this.c=s}this.df(s,b,c)}else this.hG(b,c)},
hG:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.cp()
this.d=t}s=this.bx(a)
r=this.bL(t,s)
if(r==null)this.cv(t,s,[this.cq(a,b)])
else{q=this.by(r,a)
if(q>=0)r[q].saY(b)
else r.push(this.cq(a,b))}},
am:function(a,b){if(typeof b==="string")return this.dL(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dL(this.c,b)
else return this.hF(b)},
hF:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bL(t,this.bx(a))
r=this.by(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dU(q)
return q.gaY()},
be:function(a){if(this.a>0){this.f=null
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
if(s!==this.r)throw H.k(new P.bM(this))
t=t.c}},
df:function(a,b,c){var t=this.bl(a,b)
if(t==null)this.cv(a,b,this.cq(b,c))
else t.saY(c)},
dL:function(a,b){var t
if(a==null)return
t=this.bl(a,b)
if(t==null)return
this.dU(t)
this.dt(a,b)
return t.gaY()},
cq:function(a,b){var t,s
t=new H.n_(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dU:function(a){var t,s
t=a.gfO()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bx:function(a){return J.dH(a)&0x3ffffff},
by:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b1(a[s].geb(),b))return s
return-1},
A:function(a){return P.wL(this)},
bl:function(a,b){return a[b]},
bL:function(a,b){return a[b]},
cv:function(a,b,c){a[b]=c},
dt:function(a,b){delete a[b]},
dq:function(a,b){return this.bl(a,b)!=null},
cp:function(){var t=Object.create(null)
this.cv(t,"<non-identifier-key>",t)
this.dt(t,"<non-identifier-key>")
return t},
$isA4:1,
$isb_:1,
$asb_:null}
H.mQ.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mP.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eV(function(a,b){return{func:1,args:[a,b]}},this.a,"w")}}
H.n_.prototype={
geb:function(){return this.a},
gaY:function(){return this.b},
gfO:function(){return this.d},
saY:function(a){return this.b=a}}
H.n0.prototype={
gm:function(a){return this.a.a},
gU:function(a){return this.a.a===0},
gV:function(a){var t,s
t=this.a
s=new H.n1(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
W:function(a,b){return this.a.Z(0,b)},
a5:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.k(new P.bM(t))
s=s.c}}}
H.n1.prototype={
gR:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rF.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rG.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.y]}}}
H.rH.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.y]}}}
H.hu.prototype={
A:function(a){return"RegExp/"+this.a+"/"},
gdG:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.u2(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdF:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.u2(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cB:function(a,b,c){if(c>b.length)throw H.k(P.bH(c,0,b.length,null,null))
return new H.pS(this,b,c)},
aV:function(a,b){return this.cB(a,b,0)},
fq:function(a,b){var t,s
t=this.gdG()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.kn(this,s)},
ck:function(a,b){var t,s
t=this.gdF()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.v(s,-1)
if(s.pop()!=null)return
return new H.kn(this,s)},
eh:function(a,b,c){if(c<0||c>b.length)throw H.k(P.bH(c,0,b.length,null,null))
return this.ck(b,c)},
$isG1:1,
gfJ:function(){return this.b}}
H.kn.prototype={
gd8:function(a){return this.b.index},
ge4:function(a){var t=this.b
return t.index+t[0].length},
ba:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.v(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
$isdy:1}
H.pS.prototype={
gV:function(a){return new H.kd(this.a,this.b,this.c,null)},
$ashs:function(){return[P.dy]},
$aso:function(){return[P.dy]}}
H.kd.prototype={
gR:function(){return this.d},
F:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.fq(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.k1.prototype={
ge4:function(a){return this.a+this.c.length},
n:function(a,b){return this.ba(b)},
ba:function(a){if(a!==0)throw H.k(P.jU(a,null,null))
return this.c},
$isdy:1,
gd8:function(a){return this.a}}
H.r_.prototype={
gV:function(a){return new H.r0(this.a,this.b,this.c,null)},
$aso:function(){return[P.dy]}}
H.r0.prototype={
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
this.d=new H.k1(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gR:function(){return this.d}}
H.fm.prototype={
gac:function(a){return C.a8},
h7:function(a,b,c){return H.cS(a,b,c)},
h6:function(a){return this.h7(a,0,null)},
h5:function(a,b,c){var t
H.xJ(a,b,c)
t=new DataView(a,b)
return t},
h4:function(a,b){return this.h5(a,b,null)},
$isfm:1,
$isbi:1,
gef:function(a){return a.byteLength}}
H.eC.prototype={
fG:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.e0(b,d,"Invalid list position"))
else throw H.k(P.bH(b,0,c,d,null))},
dj:function(a,b,c,d){if(b>>>0!==b||b>c)this.fG(a,b,c,d)},
$iseC:1,
gbU:function(a){return a.buffer},
gef:function(a){return a.byteLength}}
H.no.prototype={
gac:function(a){return C.a9}}
H.jI.prototype={
gm:function(a){return a.length},
dQ:function(a,b,c,d,e){var t,s,r
t=a.length
this.dj(a,b,t,"start")
this.dj(a,c,t,"end")
if(typeof b!=="number")return b.aC()
if(typeof c!=="number")return H.ai(c)
if(b>c)throw H.k(P.bH(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a2()
if(e<0)throw H.k(P.dI(e))
r=d.length
if(r-e<s)throw H.k(new P.da("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaH:1,
$asaH:function(){},
$isaA:1,
$asaA:function(){}}
H.hH.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c8(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.b0(H.c8(a,b))
a[b]=c},
a3:function(a,b,c,d,e){if(!!J.aq(d).$ishH){this.dQ(a,b,c,d,e)
return}this.da(a,b,c,d,e)},
as:function(a,b,c,d){return this.a3(a,b,c,d,0)}}
H.hJ.prototype={
$asaH:function(){},
$asaA:function(){},
$asp:function(){return[P.X]},
$ast:function(){return[P.X]},
$aso:function(){return[P.X]},
$isp:1,
$ist:1,
$iso:1}
H.hL.prototype={
$asaH:function(){},
$asaA:function(){},
$asp:function(){return[P.X]},
$ast:function(){return[P.X]},
$aso:function(){return[P.X]}}
H.hI.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.b0(H.c8(a,b))
a[b]=c},
a3:function(a,b,c,d,e){if(!!J.aq(d).$ishI){this.dQ(a,b,c,d,e)
return}this.da(a,b,c,d,e)},
as:function(a,b,c,d){return this.a3(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.hK.prototype={
$asaH:function(){},
$asaA:function(){},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]},
$isp:1,
$ist:1,
$iso:1}
H.hM.prototype={
$asaH:function(){},
$asaA:function(){},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]}}
H.np.prototype={
gac:function(a){return C.aa},
$isp:1,
$asp:function(){return[P.X]},
$ist:1,
$ast:function(){return[P.X]},
$iso:1,
$aso:function(){return[P.X]}}
H.nq.prototype={
gac:function(a){return C.ab},
$isp:1,
$asp:function(){return[P.X]},
$ist:1,
$ast:function(){return[P.X]},
$iso:1,
$aso:function(){return[P.X]}}
H.nr.prototype={
gac:function(a){return C.ac},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c8(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.ns.prototype={
gac:function(a){return C.ad},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c8(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nt.prototype={
gac:function(a){return C.ae},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c8(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nu.prototype={
gac:function(a){return C.ai},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c8(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nv.prototype={
gac:function(a){return C.aj},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c8(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.jJ.prototype={
gac:function(a){return C.ak},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c8(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.fn.prototype={
gac:function(a){return C.al},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b0(H.c8(a,b))
return a[b]},
c9:function(a,b,c){return new Uint8Array(a.subarray(b,H.H5(b,c,a.length)))},
$isfn:1,
$isdd:1,
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
P.pU.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pT.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.pV.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.pW.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.ri.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rj.prototype={
$2:function(a,b){this.a.$2(1,new H.hc(a,b))},
$S:function(){return{func:1,args:[,P.dU]}}}
P.rt.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.C,,]}}}
P.cF.prototype={}
P.rv.prototype={
$0:function(){var t,s,r
try{this.b.aE(this.a.$0())}catch(r){t=H.bW(r)
s=H.cx(r)
P.xK(this.b,t,s)}},
$S:function(){return{func:1}}}
P.md.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.ak(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.ak(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.mc.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.v(r,t)
r[t]=a
if(s===0)this.d.dn(r)}else if(t.b===0&&!this.b)this.d.ak(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.f3.prototype={}
P.kf.prototype={
cF:function(a,b){if(a==null)a=new P.fo()
if(this.a.a!==0)throw H.k(new P.da("Future already completed"))
$.ao.toString
this.ak(a,b)},
bp:function(a){return this.cF(a,null)},
$isf3:1,
ghu:function(){return this.a}}
P.dY.prototype={
az:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.da("Future already completed"))
t.dh(b)},
ha:function(a){return this.az(a,null)},
ak:function(a,b){this.a.di(a,b)}}
P.kr.prototype={
az:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.da("Future already completed"))
t.aE(b)},
ak:function(a,b){this.a.ak(a,b)}}
P.kj.prototype={
gh_:function(){return this.b.b},
ge7:function(){return(this.c&1)!==0},
ghB:function(){return(this.c&2)!==0},
ge6:function(){return this.c===8},
hz:function(a){return this.b.b.cY(this.d,a)},
hL:function(a){if(this.c!==6)return!0
return this.b.b.cY(this.d,J.fK(a))},
hv:function(a){var t,s,r
t=this.e
s=J.bf(a)
r=this.b.b
if(H.fI(t,{func:1,args:[,,]}))return r.i9(t,s.gap(a),a.gaI())
else return r.cY(t,s.gap(a))},
hA:function(){return this.b.b.eo(this.d)},
gcr:function(){return this.a}}
P.bm.prototype={
gfH:function(){return this.a===2},
gco:function(){return this.a>=4},
c2:function(a,b){var t=$.ao
if(t!==C.e){t.toString
if(b!=null)b=P.xN(b,t)}return this.cw(a,b)},
b1:function(a){return this.c2(a,null)},
cw:function(a,b){var t,s
t=new P.bm(0,$.ao,null,[null])
s=b==null?1:3
this.cb(new P.kj(null,t,s,a,b,[H.Q(this,0),null]))
return t},
c5:function(a){var t,s
t=$.ao
s=new P.bm(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.Q(this,0)
this.cb(new P.kj(null,s,8,a,null,[t,t]))
return s},
cb:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gco()){s.cb(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fG(null,null,t,new P.qh(this,a))}},
dK:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcr()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gco()){p.dK(a)
return}this.a=p.a
this.c=p.c}t.a=this.bQ(a)
s=this.b
s.toString
P.fG(null,null,s,new P.qp(t,this))}},
bP:function(){var t=this.c
this.c=null
return this.bQ(t)},
bQ:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcr()
t.a=s}return s},
aE:function(a){var t,s
t=this.$ti
if(H.dZ(a,"$iscF",t,"$ascF"))if(H.dZ(a,"$isbm",t,null))P.qk(a,this)
else P.xw(a,this)
else{s=this.bP()
this.a=4
this.c=a
P.fB(this,s)}},
dn:function(a){var t=this.bP()
this.a=4
this.c=a
P.fB(this,t)},
ak:function(a,b){var t=this.bP()
this.a=8
this.c=new P.eY(a,b)
P.fB(this,t)},
fj:function(a){return this.ak(a,null)},
dh:function(a){var t
if(H.dZ(a,"$iscF",this.$ti,"$ascF")){this.fg(a)
return}this.a=1
t=this.b
t.toString
P.fG(null,null,t,new P.qj(this,a))},
fg:function(a){var t
if(H.dZ(a,"$isbm",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fG(null,null,t,new P.qo(this,a))}else P.qk(a,this)
return}P.xw(a,this)},
di:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fG(null,null,t,new P.qi(this,a,b))},
$iscF:1,
gbR:function(){return this.a},
gfR:function(){return this.c}}
P.qh.prototype={
$0:function(){P.fB(this.a,this.b)},
$S:function(){return{func:1}}}
P.qp.prototype={
$0:function(){P.fB(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.ql.prototype={
$1:function(a){var t=this.a
t.a=0
t.aE(a)},
$S:function(){return{func:1,args:[,]}}}
P.qm.prototype={
$2:function(a,b){this.a.ak(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qn.prototype={
$0:function(){this.a.ak(this.b,this.c)},
$S:function(){return{func:1}}}
P.qj.prototype={
$0:function(){this.a.dn(this.b)},
$S:function(){return{func:1}}}
P.qo.prototype={
$0:function(){P.qk(this.b,this.a)},
$S:function(){return{func:1}}}
P.qi.prototype={
$0:function(){this.a.ak(this.b,this.c)},
$S:function(){return{func:1}}}
P.qs.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hA()}catch(q){s=H.bW(q)
r=H.cx(q)
if(this.c){p=J.fK(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eY(s,r)
o.a=!0
return}if(!!J.aq(t).$iscF){if(t instanceof P.bm&&t.gbR()>=4){if(t.gbR()===8){p=this.b
p.b=t.gfR()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b1(new P.qt(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qt.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qr.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hz(this.c)}catch(r){t=H.bW(r)
s=H.cx(r)
q=this.a
q.b=new P.eY(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qq.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hL(t)===!0&&q.e!=null){p=this.b
p.b=q.hv(t)
p.a=!1}}catch(o){s=H.bW(o)
r=H.cx(o)
q=this.a
p=J.fK(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eY(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ke.prototype={}
P.dn.prototype={
aw:function(a,b){return new P.qG(b,this,[H.ax(this,"dn",0),null])},
W:function(a,b){var t,s
t={}
s=new P.bm(0,$.ao,null,[P.cV])
t.a=null
t.a=this.aO(new P.oE(t,this,b,s),!0,new P.oF(s),s.gbc())
return s},
a5:function(a,b){var t,s
t={}
s=new P.bm(0,$.ao,null,[null])
t.a=null
t.a=this.aO(new P.oK(t,this,b,s),!0,new P.oL(s),s.gbc())
return s},
gm:function(a){var t,s
t={}
s=new P.bm(0,$.ao,null,[P.C])
t.a=0
this.aO(new P.oO(t),!0,new P.oP(t,s),s.gbc())
return s},
gU:function(a){var t,s
t={}
s=new P.bm(0,$.ao,null,[P.cV])
t.a=null
t.a=this.aO(new P.oM(t,s),!0,new P.oN(s),s.gbc())
return s},
an:function(a){var t,s,r
t=H.ax(this,"dn",0)
s=H.a([],[t])
r=new P.bm(0,$.ao,null,[[P.p,t]])
this.aO(new P.oQ(this,s),!0,new P.oR(s,r),r.gbc())
return r},
gab:function(a){var t,s
t={}
s=new P.bm(0,$.ao,null,[H.ax(this,"dn",0)])
t.a=null
t.a=this.aO(new P.oG(t,this,s),!0,new P.oH(s),s.gbc())
return s}}
P.oE.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xR(new P.oC(this.c,a),new P.oD(t,s),P.xI(t.a,s))},
$S:function(){return H.eV(function(a){return{func:1,args:[a]}},this.b,"dn")}}
P.oC.prototype={
$0:function(){return J.b1(this.b,this.a)},
$S:function(){return{func:1}}}
P.oD.prototype={
$1:function(a){if(a===!0)P.v0(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.cV]}}}
P.oF.prototype={
$0:function(){this.a.aE(!1)},
$S:function(){return{func:1}}}
P.oK.prototype={
$1:function(a){P.xR(new P.oI(this.c,a),new P.oJ(),P.xI(this.a.a,this.d))},
$S:function(){return H.eV(function(a){return{func:1,args:[a]}},this.b,"dn")}}
P.oI.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.oJ.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.oL.prototype={
$0:function(){this.a.aE(null)},
$S:function(){return{func:1}}}
P.oO.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.oP.prototype={
$0:function(){this.b.aE(this.a.a)},
$S:function(){return{func:1}}}
P.oM.prototype={
$1:function(a){P.v0(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.oN.prototype={
$0:function(){this.a.aE(!0)},
$S:function(){return{func:1}}}
P.oQ.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eV(function(a){return{func:1,args:[a]}},this.a,"dn")}}
P.oR.prototype={
$0:function(){this.b.aE(this.a)},
$S:function(){return{func:1}}}
P.oG.prototype={
$1:function(a){P.v0(this.a.a,this.c,a)},
$S:function(){return H.eV(function(a){return{func:1,args:[a]}},this.b,"dn")}}
P.oH.prototype={
$0:function(){var t,s,r,q
try{r=H.ht()
throw H.k(r)}catch(q){t=H.bW(q)
s=H.cx(q)
P.xK(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oB.prototype={}
P.dp.prototype={
cP:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.e_()
if((t&4)===0&&(this.e&32)===0)this.dw(this.gdI())},
ek:function(a){return this.cP(a,null)},
en:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gU(t)}else t=!1
if(t)this.r.c8(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dw(this.gdJ())}}}},
bV:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cd()
t=this.f
return t==null?$.$get$hl():t},
cd:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.e_()
if((this.e&32)===0)this.r=null
this.f=this.dH()},
bK:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dN(b)
else this.cc(new P.q4(b,null,[H.ax(this,"dp",0)]))},
bJ:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dP(a,b)
else this.cc(new P.q6(a,b,null))},
ff:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dO()
else this.cc(C.O)},
bN:function(){},
bO:function(){},
dH:function(){return},
cc:function(a){var t,s
t=this.r
if(t==null){t=new P.qY(null,null,0,[H.ax(this,"dp",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.c8(this)}},
dN:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cZ(this.a,a)
this.e=(this.e&4294967263)>>>0
this.ce((t&4)!==0)},
dP:function(a,b){var t,s
t=this.e
s=new P.q_(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cd()
t=this.f
if(!!J.aq(t).$iscF&&t!==$.$get$hl())t.c5(s)
else s.$0()}else{s.$0()
this.ce((t&4)!==0)}},
dO:function(){var t,s
t=new P.pZ(this)
this.cd()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.aq(s).$iscF&&s!==$.$get$hl())s.c5(t)
else t.$0()},
dw:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.ce((t&4)!==0)},
ce:function(a){var t,s
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
if(s)this.bN()
else this.bO()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.c8(this)},
f6:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xN(b,t)
this.c=c},
gbR:function(){return this.e}}
P.q_.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fI(s,{func:1,args:[P.ad,P.dU]})
q=t.d
p=this.b
o=t.b
if(r)q.ia(o,p,this.c)
else q.cZ(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.pZ.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.ep(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.kh.prototype={
gbz:function(a){return this.a},
sbz:function(a,b){return this.a=b}}
P.q4.prototype={
cQ:function(a){a.dN(this.b)}}
P.q6.prototype={
cQ:function(a){a.dP(this.b,this.c)},
$askh:function(){},
gap:function(a){return this.b},
gaI:function(){return this.c}}
P.q5.prototype={
cQ:function(a){a.dO()},
gbz:function(a){return},
sbz:function(a,b){throw H.k(new P.da("No events after a done."))}}
P.qI.prototype={
c8:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.y7(new P.qJ(this,a))
this.a=1},
e_:function(){if(this.a===1)this.a=3},
gbR:function(){return this.a}}
P.qJ.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbz(r)
t.b=q
if(q==null)t.c=null
r.cQ(this.b)},
$S:function(){return{func:1}}}
P.qY.prototype={
gU:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbz(0,b)
this.c=b}}}
P.qZ.prototype={}
P.rl.prototype={
$0:function(){return this.a.ak(this.b,this.c)},
$S:function(){return{func:1}}}
P.rk.prototype={
$2:function(a,b){P.H4(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dU]}}}
P.rm.prototype={
$0:function(){return this.a.aE(this.b)},
$S:function(){return{func:1}}}
P.i3.prototype={
aO:function(a,b,c,d){return this.fm(a,d,c,!0===b)},
eg:function(a,b,c){return this.aO(a,null,b,c)},
fm:function(a,b,c,d){return P.GI(this,a,b,c,d,H.ax(this,"i3",0),H.ax(this,"i3",1))},
dz:function(a,b){b.bK(0,a)},
fE:function(a,b,c){c.bJ(a,b)},
$asdn:function(a,b){return[b]}}
P.i4.prototype={
bK:function(a,b){if((this.e&2)!==0)return
this.eW(0,b)},
bJ:function(a,b){if((this.e&2)!==0)return
this.eX(a,b)},
bN:function(){var t=this.y
if(t==null)return
t.ek(0)},
bO:function(){var t=this.y
if(t==null)return
t.en(0)},
dH:function(){var t=this.y
if(t!=null){this.y=null
return t.bV(0)}return},
fz:function(a){this.x.dz(a,this)},
fD:function(a,b){this.x.fE(a,b,this)},
fB:function(){this.ff()},
f9:function(a,b,c,d,e,f,g){this.y=this.x.a.eg(this.gfw(),this.gfA(),this.gfC())},
$asdp:function(a,b){return[b]}}
P.qG.prototype={
dz:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.bW(q)
r=H.cx(q)
P.H3(b,s,r)
return}b.bK(0,t)}}
P.eY.prototype={
A:function(a){return H.B(this.a)},
$isel:1,
gap:function(a){return this.a},
gaI:function(){return this.b}}
P.rh.prototype={}
P.rs.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fo()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.k(t)
r=H.k(t)
r.stack=J.cz(s)
throw r},
$S:function(){return{func:1}}}
P.qM.prototype={
ep:function(a){var t,s,r,q
try{if(C.e===$.ao){r=a.$0()
return r}r=P.xO(null,null,this,a)
return r}catch(q){t=H.bW(q)
s=H.cx(q)
r=P.kv(null,null,this,t,s)
return r}},
cZ:function(a,b){var t,s,r,q
try{if(C.e===$.ao){r=a.$1(b)
return r}r=P.xQ(null,null,this,a,b)
return r}catch(q){t=H.bW(q)
s=H.cx(q)
r=P.kv(null,null,this,t,s)
return r}},
ia:function(a,b,c){var t,s,r,q
try{if(C.e===$.ao){r=a.$2(b,c)
return r}r=P.xP(null,null,this,a,b,c)
return r}catch(q){t=H.bW(q)
s=H.cx(q)
r=P.kv(null,null,this,t,s)
return r}},
cD:function(a,b){if(b)return new P.qN(this,a)
else return new P.qO(this,a)},
h8:function(a,b){return new P.qP(this,a)},
n:function(a,b){return},
eo:function(a){if($.ao===C.e)return a.$0()
return P.xO(null,null,this,a)},
cY:function(a,b){if($.ao===C.e)return a.$1(b)
return P.xQ(null,null,this,a,b)},
i9:function(a,b,c){if($.ao===C.e)return a.$2(b,c)
return P.xP(null,null,this,a,b,c)}}
P.qN.prototype={
$0:function(){return this.a.ep(this.b)},
$S:function(){return{func:1}}}
P.qO.prototype={
$0:function(){return this.a.eo(this.b)},
$S:function(){return{func:1}}}
P.qP.prototype={
$1:function(a){return this.a.cZ(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qv.prototype={
gm:function(a){return this.a},
gU:function(a){return this.a===0},
gc4:function(a){var t=H.Q(this,0)
return H.dx(new P.qw(this,[t]),new P.qy(this),t,H.Q(this,1))},
Z:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fl(b)},
fl:function(a){var t=this.d
if(t==null)return!1
return this.aM(t[this.aL(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fu(0,b)},
fu:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aL(b)]
r=this.aM(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.uY()
this.b=t}this.dl(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.uY()
this.c=s}this.dl(s,b,c)}else this.fU(b,c)},
fU:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.uY()
this.d=t}s=this.aL(a)
r=t[s]
if(r==null){P.uZ(t,s,[a,b]);++this.a
this.e=null}else{q=this.aM(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bj(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bj(this.c,b)
else return this.cu(0,b)},
cu:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aL(b)]
r=this.aM(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a5:function(a,b){var t,s,r,q
t=this.cg()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.k(new P.bM(this))}},
cg:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dl:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.uZ(a,b,c)},
bj:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.GK(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aL:function(a){return J.dH(a)&0x3ffffff},
aM:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.b1(a[s],b))return s
return-1},
$isb_:1,
$asb_:null}
P.qy.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qw.prototype={
gm:function(a){return this.a.a},
gU:function(a){return this.a.a===0},
gV:function(a){var t=this.a
return new P.qx(t,t.cg(),0,null,this.$ti)},
W:function(a,b){return this.a.Z(0,b)},
a5:function(a,b){var t,s,r,q
t=this.a
s=t.cg()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.k(new P.bM(t))}}}
P.qx.prototype={
gR:function(){return this.d},
F:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.k(new P.bM(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.km.prototype={
bx:function(a){return H.HS(a)&0x3ffffff},
by:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].geb()
if(r==null?b==null:r===b)return s}return-1}}
P.kl.prototype={
gV:function(a){var t=new P.dD(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gU:function(a){return this.a===0},
W:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.fk(b)},
fk:function(a){var t=this.d
if(t==null)return!1
return this.aM(t[this.aL(a)],a)>=0},
cM:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.W(0,a)?a:null
else return this.fI(a)},
fI:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aL(a)]
r=this.aM(s,a)
if(r<0)return
return J.ig(s,r).gdu()},
a5:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.k(new P.bM(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dk(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dk(r,b)}else return this.aK(0,b)},
aK:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.GN()
this.d=t}s=this.aL(b)
r=t[s]
if(r==null)t[s]=[this.cf(b)]
else{if(this.aM(r,b)>=0)return!1
r.push(this.cf(b))}return!0},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bj(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bj(this.c,b)
else return this.cu(0,b)},
cu:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aL(b)]
r=this.aM(s,b)
if(r<0)return!1
this.dm(s.splice(r,1)[0])
return!0},
be:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dk:function(a,b){if(a[b]!=null)return!1
a[b]=this.cf(b)
return!0},
bj:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dm(t)
delete a[b]
return!0},
cf:function(a){var t,s
t=new P.qC(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dm:function(a){var t,s
t=a.gfi()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aL:function(a){return J.dH(a)&0x3ffffff},
aM:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b1(a[s].gdu(),b))return s
return-1},
$iseF:1,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.qC.prototype={
gdu:function(){return this.a},
gfi:function(){return this.c}}
P.dD.prototype={
gR:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qz.prototype={}
P.fk.prototype={
aw:function(a,b){return H.dx(this,b,H.ax(this,"fk",0),null)},
W:function(a,b){var t
for(t=this.gV(this);t.F();)if(J.b1(t.gR(),b))return!0
return!1},
a5:function(a,b){var t
for(t=this.gV(this);t.F();)b.$1(t.gR())},
a1:function(a,b){return P.d6(this,!0,H.ax(this,"fk",0))},
an:function(a){return this.a1(a,!0)},
gm:function(a){var t,s
t=this.gV(this)
for(s=0;t.F();)++s
return s},
gU:function(a){return!this.gV(this).F()},
A:function(a){return P.tZ(this,"(",")")},
$iso:1,
$aso:null}
P.hs.prototype={}
P.ry.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return{func:1,args:[,,]}}}
P.hz.prototype={}
P.fq.prototype={$asp:null,$ast:null,$aso:null,$isp:1,$ist:1,$iso:1}
P.aS.prototype={
gV:function(a){return new H.ez(a,this.gm(a),0,null,[H.ax(a,"aS",0)])},
S:function(a,b){return this.n(a,b)},
a5:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.k(new P.bM(a))}},
gU:function(a){return this.gm(a)===0},
W:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.b1(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.k(new P.bM(a))}return!1},
aw:function(a,b){return new H.eB(a,b,[H.ax(a,"aS",0),null])},
d6:function(a,b){return H.x3(a,b,null,H.ax(a,"aS",0))},
a1:function(a,b){var t,s,r
t=H.a([],[H.ax(a,"aS",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
an:function(a){return this.a1(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bv:function(a,b,c,d){var t
P.dm(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a3:function(a,b,c,d,e){var t,s,r,q,p,o
P.dm(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.aj()
if(typeof b!=="number")return H.ai(b)
t=c-b
if(t===0)return
if(J.eh(e,0))H.b0(P.bH(e,0,null,"skipCount",null))
if(H.dZ(d,"$isp",[H.ax(a,"aS",0)],"$asp")){s=e
r=d}else{r=J.yB(d,e).a1(0,!1)
s=0}q=J.kx(s)
p=J.bh(r)
if(J.cy(q.T(s,t),p.gm(r)))throw H.k(H.wD())
if(q.a2(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.T(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.T(s,o)))},
as:function(a,b,c,d){return this.a3(a,b,c,d,0)},
aB:function(a,b,c,d){var t,s,r,q,p
P.dm(b,c,this.gm(a),null,null,null)
d=C.c.an(d)
if(typeof c!=="number")return c.aj()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.as(a,b,r,d)
if(q!==0){this.a3(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a3(a,r,p,a,c)
this.as(a,b,r,d)}},
b_:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.b1(this.n(a,t),b))return t
return-1},
bg:function(a,b){return this.b_(a,b,0)},
A:function(a){return P.jx(a,"[","]")},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.r8.prototype={
i:function(a,b,c){throw H.k(new P.V("Cannot modify unmodifiable map"))},
$isb_:1,
$asb_:null}
P.jE.prototype={
n:function(a,b){return J.ig(this.a,b)},
i:function(a,b,c){J.kC(this.a,b,c)},
a5:function(a,b){J.yl(this.a,b)},
gU:function(a){return J.rX(this.a)},
gm:function(a){return J.cn(this.a)},
A:function(a){return J.cz(this.a)},
$isb_:1,
$asb_:null}
P.eN.prototype={$asb_:null,$isb_:1}
P.nf.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.N+=", "
t.a=!1
t=this.b
s=t.N+=H.B(a)
t.N=s+": "
t.N+=H.B(b)},
$S:function(){return{func:1,args:[,,]}}}
P.n2.prototype={
gV:function(a){return new P.qD(this,this.c,this.d,this.b,null,this.$ti)},
a5:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.v(r,s)
b.$1(r[s])
if(t!==this.d)H.b0(new P.bM(this))}},
gU:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
S:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.ai(b)
if(0>b||b>=t)H.b0(P.bx(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.v(s,q)
return s[q]},
a1:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fZ(t)
return t},
an:function(a){return this.a1(a,!0)},
h:function(a,b){this.aK(0,b)},
be:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.v(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
A:function(a){return P.jx(this,"{","}")},
em:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.k(H.ht());++this.d
s=this.a
r=s.length
if(t>=r)return H.v(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aK:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.v(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dv();++this.d},
dv:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a3(s,0,q,t,r)
C.b.a3(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fZ:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a3(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a3(a,0,p,r,t)
C.b.a3(a,p,p+this.c,this.a,0)
return this.c+p}},
f1:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$ast:null,
$aso:null}
P.qD.prototype={
gR:function(){return this.e},
F:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.b0(new P.bM(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.v(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.ol.prototype={
gU:function(a){return this.a===0},
av:function(a,b){var t
for(t=J.df(b);t.F();)this.h(0,t.gR())},
a1:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dD(this,this.r,null,null,[null]),s.c=this.e,r=0;s.F();r=p){q=s.d
p=r+1
if(r>=t.length)return H.v(t,r)
t[r]=q}return t},
an:function(a){return this.a1(a,!0)},
aw:function(a,b){return new H.h3(this,b,[H.Q(this,0),null])},
A:function(a){return P.jx(this,"{","}")},
a5:function(a,b){var t
for(t=new P.dD(this,this.r,null,null,[null]),t.c=this.e;t.F();)b.$1(t.d)},
bh:function(a,b){var t,s
t=new P.dD(this,this.r,null,null,[null])
t.c=this.e
if(!t.F())return""
if(b===""){s=""
do s+=H.B(t.d)
while(t.F())}else{s=H.B(t.d)
for(;t.F();)s=s+b+H.B(t.d)}return s.charCodeAt(0)==0?s:s},
$iseF:1,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.ok.prototype={}
P.kT.prototype={
hQ:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bh(b)
a1=P.dm(a0,a1,t.gm(b),null,null,null)
s=$.$get$xv()
if(typeof a1!=="number")return H.ai(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.Y(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rE(C.c.a4(b,l))
h=H.rE(C.c.a4(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.v(s,g)
f=s[g]
if(f>=0){g=C.c.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.N.length
if(e==null)e=0
if(typeof e!=="number")return e.T()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.ce("")
p.N+=C.c.K(b,q,r)
p.N+=H.hO(k)
q=l
continue}}throw H.k(new P.bP("Invalid base64 data",b,r))}if(p!=null){t=p.N+=t.K(b,q,a1)
e=t.length
if(o>=0)P.vo(b,n,a1,o,m,e)
else{d=C.a.bI(e-1,4)+1
if(d===1)throw H.k(new P.bP("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.N=t;++d}}t=p.N
return C.c.aB(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.vo(b,n,a1,o,m,c)
else{d=C.d.bI(c,4)
if(d===1)throw H.k(new P.bP("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aB(b,a1,a1,d===2?"==":"=")}return b},
$asfX:function(){return[[P.p,P.C],P.y]}}
P.kU.prototype={
$ash_:function(){return[[P.p,P.C],P.y]}}
P.fX.prototype={}
P.h_.prototype={}
P.lw.prototype={
$asfX:function(){return[P.y,[P.p,P.C]]}}
P.pv.prototype={
gG:function(a){return"utf-8"}}
P.pw.prototype={
cG:function(a,b,c){var t,s,r,q
t=J.cn(a)
P.dm(b,c,t,null,null,null)
s=new P.ce("")
r=new P.ra(!1,s,!0,0,0,0)
r.cG(a,b,t)
r.hq(0,a,t)
q=s.N
return q.charCodeAt(0)==0?q:q},
hd:function(a){return this.cG(a,0,null)},
$ash_:function(){return[[P.p,P.C],P.y]}}
P.ra.prototype={
hq:function(a,b,c){if(this.e>0)throw H.k(new P.bP("Unfinished UTF-8 octet sequence",b,c))},
cG:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.rc(c)
p=new P.rb(this,a,b,c)
$loop$0:for(o=J.bh(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aH()
if((l&192)!==128){k=new P.bP("Bad UTF-8 encoding 0x"+C.d.bE(l,16),a,m)
throw H.k(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.v(C.z,k)
if(t<=C.z[k]){k=new P.bP("Overlong encoding of 0x"+C.a.bE(t,16),a,m-r-1)
throw H.k(k)}if(t>1114111){k=new P.bP("Character outside valid Unicode range: 0x"+C.a.bE(t,16),a,m-r-1)
throw H.k(k)}if(!this.c||t!==65279)n.N+=H.hO(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cy(j,0)){this.c=!1
if(typeof j!=="number")return H.ai(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dF(l)
if(g.a2(l,0)){g=new P.bP("Negative UTF-8 code unit: -0x"+J.yF(g.d2(l),16),a,h-1)
throw H.k(g)}else{if(typeof l!=="number")return l.aH()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bP("Bad UTF-8 encoding 0x"+C.d.bE(l,16),a,h-1)
throw H.k(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.rc.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bh(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aH()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.C,args:[,P.C]}}}
P.rb.prototype={
$2:function(a,b){this.a.b.N+=P.oW(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.C,P.C]}}}
P.cV.prototype={}
P.bI.prototype={}
P.e3.prototype={
P:function(a,b){if(b==null)return!1
if(!(b instanceof P.e3))return!1
return this.a===b.a&&this.b===b.b},
ay:function(a,b){return C.a.ay(this.a,b.gfY())},
ga6:function(a){var t=this.a
return(t^C.a.aU(t,30))&1073741823},
A:function(a){var t,s,r,q,p,o,n
t=P.ze(H.wR(this))
s=P.ip(H.uw(this))
r=P.ip(H.uv(this))
q=P.ip(H.Fz(this))
p=P.ip(H.FB(this))
o=P.ip(H.FC(this))
n=P.zf(H.FA(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.zd(C.a.T(this.a,b.git()),this.b)},
ghM:function(){return this.a},
dd:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.k(P.dI(this.ghM()))},
$isbI:1,
$asbI:function(){return[P.e3]},
gfY:function(){return this.a}}
P.X.prototype={$isbI:1,
$asbI:function(){return[P.dr]}}
P.dL.prototype={
T:function(a,b){return new P.dL(this.a+b.gbk())},
aq:function(a,b){return new P.dL(C.a.bC(this.a*b))},
a2:function(a,b){return C.a.a2(this.a,b.gbk())},
aC:function(a,b){return C.a.aC(this.a,b.gbk())},
ar:function(a,b){return C.a.ar(this.a,b.gbk())},
P:function(a,b){if(b==null)return!1
if(!(b instanceof P.dL))return!1
return this.a===b.a},
ga6:function(a){return this.a&0x1FFFFFFF},
ay:function(a,b){return C.a.ay(this.a,b.gbk())},
A:function(a){var t,s,r,q,p
t=new P.lu()
s=this.a
if(s<0)return"-"+new P.dL(0-s).A(0)
r=t.$1(C.a.al(s,6e7)%60)
q=t.$1(C.a.al(s,1e6)%60)
p=new P.lt().$1(s%1e6)
return""+C.a.al(s,36e8)+":"+H.B(r)+":"+H.B(q)+"."+H.B(p)},
d2:function(a){return new P.dL(0-this.a)},
$isbI:1,
$asbI:function(){return[P.dL]},
gbk:function(){return this.a}}
P.lt.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.y,args:[P.C]}}}
P.lu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.y,args:[P.C]}}}
P.el.prototype={
gaI:function(){return H.cx(this.$thrownJsError)}}
P.fo.prototype={
A:function(a){return"Throw of null."}}
P.cW.prototype={
gcj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gci:function(){return""},
A:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.B(t)
q=this.gcj()+s+r
if(!this.a)return q
p=this.gci()
o=P.vH(this.b)
return q+p+": "+H.B(o)},
gG:function(a){return this.c}}
P.eE.prototype={
gcj:function(){return"RangeError"},
gci:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.B(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.B(t)
else{if(typeof r!=="number")return r.aC()
if(r>t)s=": Not in range "+H.B(t)+".."+H.B(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.B(t)}}return s}}
P.mt.prototype={
gcj:function(){return"RangeError"},
gci:function(){if(J.eh(this.b,0))return": index must not be negative"
var t=this.f
if(J.b1(t,0))return": no indices are valid"
return": index should be less than "+H.B(t)},
gm:function(a){return this.f}}
P.V.prototype={
A:function(a){return"Unsupported operation: "+this.a}}
P.eL.prototype={
A:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.B(t):"UnimplementedError"}}
P.da.prototype={
A:function(a){return"Bad state: "+this.a}}
P.bM.prototype={
A:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.B(P.vH(t))+"."}}
P.nG.prototype={
A:function(a){return"Out of Memory"},
gaI:function(){return},
$isel:1}
P.k0.prototype={
A:function(a){return"Stack Overflow"},
gaI:function(){return},
$isel:1}
P.ll.prototype={
A:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.B(t)+"' during its initialization"}}
P.qg.prototype={
A:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.B(t)}}
P.bP.prototype={
A:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.B(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a2()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.K(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.ai(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a4(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.B(r-o+1)+")\n"):s+(" (at character "+H.B(r+1)+")\n")
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
return s+h+f+g+"\n"+C.c.aq(" ",r-i+h.length)+"^\n"}}
P.lD.prototype={
A:function(a){return"Expando:"+H.B(this.a)},
n:function(a,b){var t,s
t=this.bM
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.b0(P.e0(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ux(b,"expando$values")
return s==null?null:H.ux(s,t)},
i:function(a,b,c){var t,s
t=this.bM
if(typeof t!=="string")t.set(b,c)
else{s=H.ux(b,"expando$values")
if(s==null){s=new P.ad()
H.wV(b,"expando$values",s)}H.wV(s,t,c)}},
gG:function(a){return this.a}}
P.C.prototype={$isbI:1,
$asbI:function(){return[P.dr]}}
P.o.prototype={
aw:function(a,b){return H.dx(this,b,H.ax(this,"o",0),null)},
c6:function(a,b){return new H.eP(this,b,[H.ax(this,"o",0)])},
W:function(a,b){var t
for(t=this.gV(this);t.F();)if(J.b1(t.gR(),b))return!0
return!1},
a5:function(a,b){var t
for(t=this.gV(this);t.F();)b.$1(t.gR())},
a1:function(a,b){return P.d6(this,!0,H.ax(this,"o",0))},
an:function(a){return this.a1(a,!0)},
gm:function(a){var t,s
t=this.gV(this)
for(s=0;t.F();)++s
return s},
gU:function(a){return!this.gV(this).F()},
gbb:function(a){var t,s
t=this.gV(this)
if(!t.F())throw H.k(H.ht())
s=t.gR()
if(t.F())throw H.k(H.F8())
return s},
S:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.yI("index"))
if(b<0)H.b0(P.bH(b,0,null,"index",null))
for(t=this.gV(this),s=0;t.F();){r=t.gR()
if(b===s)return r;++s}throw H.k(P.bx(b,this,"index",null,s))},
A:function(a){return P.tZ(this,"(",")")},
$aso:null}
P.jy.prototype={}
P.p.prototype={$asp:null,$ist:1,$ast:null,$iso:1,$aso:null}
P.b_.prototype={$asb_:null}
P.d7.prototype={
ga6:function(a){return P.ad.prototype.ga6.call(this,this)},
A:function(a){return"null"}}
P.dr.prototype={$isbI:1,
$asbI:function(){return[P.dr]}}
P.ad.prototype={constructor:P.ad,$isad:1,
P:function(a,b){return this===b},
ga6:function(a){return H.eD(this)},
A:function(a){return H.nY(this)},
gac:function(a){return new H.dW(H.kz(this),null)},
toString:function(){return this.A(this)}}
P.dy.prototype={}
P.eF.prototype={}
P.dU.prototype={}
P.y.prototype={$isbI:1,
$asbI:function(){return[P.y]}}
P.ce.prototype={
gm:function(a){return this.N.length},
gU:function(a){return this.N.length===0},
A:function(a){var t=this.N
return t.charCodeAt(0)==0?t:t},
gN:function(){return this.N}}
P.eO.prototype={}
P.ps.prototype={
$2:function(a,b){var t,s,r,q
t=J.bh(b)
s=t.bg(b,"=")
if(s===-1){if(!t.P(b,""))J.kC(a,P.r9(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.K(b,0,s)
q=C.c.af(b,s+1)
t=this.a
J.kC(a,P.r9(r,0,r.length,t,!0),P.r9(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pp.prototype={
$2:function(a,b){throw H.k(new P.bP("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.y,P.C]}}}
P.pq.prototype={
$2:function(a,b){throw H.k(new P.bP("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.y],opt:[,]}}}
P.pr.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fr(C.c.K(this.a,a,b),16,null)
s=J.dF(t)
if(s.a2(t,0)||s.aC(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.C,args:[P.C,P.C]}}}
P.ks.prototype={
gex:function(){return this.b},
gcK:function(a){var t=this.c
if(t==null)return""
if(C.c.ae(t,"["))return C.c.K(t,1,t.length-1)
return t},
gcR:function(a){var t=this.d
if(t==null)return P.xB(this.a)
return t},
gcU:function(a){var t=this.f
return t==null?"":t},
ge5:function(){var t=this.r
return t==null?"":t},
gcV:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.y
s=new P.eN(P.xo(t==null?"":t,C.o),[s,s])
this.Q=s
t=s}return t},
ge8:function(){return this.c!=null},
gea:function(){return this.f!=null},
ge9:function(){return this.r!=null},
A:function(a){var t=this.y
if(t==null){t=this.dC()
this.y=t}return t},
dC:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.B(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.B(s)}else t=s
t+=H.B(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
P:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.aq(b)
if(!!t.$iseO){if(this.a===b.gd3())if(this.c!=null===b.ge8()){s=this.b
r=b.gex()
if(s==null?r==null:s===r){s=this.gcK(this)
r=t.gcK(b)
if(s==null?r==null:s===r)if(J.b1(this.gcR(this),t.gcR(b)))if(J.b1(this.e,t.gej(b))){s=this.f
r=s==null
if(!r===b.gea()){if(r)s=""
if(s===t.gcU(b)){t=this.r
s=t==null
if(!s===b.ge9()){if(s)t=""
t=t===b.ge5()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga6:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dC()
this.y=t}t=C.c.ga6(t)
this.z=t}return t},
$iseO:1,
gd3:function(){return this.a},
gej:function(a){return this.e}}
P.rw.prototype={
$1:function(a){throw H.k(new P.bP("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.po.prototype={
gev:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.v(t,0)
s=this.a
t=t[0]+1
r=J.bh(s)
q=r.b_(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fE(s,o,p,C.k,!1)
if(n==null)n=r.K(s,o,p)
p=q}else n=null
m=P.fE(s,t,p,C.H,!1)
t=new P.q3(this,"data",null,null,null,m==null?r.K(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
A:function(a){var t,s
t=this.b
if(0>=t.length)return H.v(t,0)
s=this.a
return t[0]===-1?"data:"+H.B(s):s}}
P.rp.prototype={
$1:function(a){return new Uint8Array(H.cD(96))},
$S:function(){return{func:1,args:[,]}}}
P.ro.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.v(t,a)
t=t[a]
J.yk(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.dd,args:[,,]}}}
P.rq.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.de(a),r=0;r<t;++r)s.i(a,C.c.a4(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.dd,P.y,P.C]}}}
P.rr.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a4(b,0),s=C.c.a4(b,1),r=J.de(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.dd,P.y,P.C]}}}
P.qX.prototype={
ge8:function(){return this.c>0},
gea:function(){var t=this.f
if(typeof t!=="number")return t.a2()
return t<this.r},
ge9:function(){return this.r<this.a.length},
gd3:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.ae(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.ae(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.ae(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.ae(this.a,"package")){this.x="package"
t="package"}else{t=C.c.K(this.a,0,t)
this.x=t}return t},
gex:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.K(this.a,s,t-1):""},
gcK:function(a){var t=this.c
return t>0?C.c.K(this.a,t,this.d):""},
gcR:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.T()
s=this.e
if(typeof s!=="number")return H.ai(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.T()
return H.fr(C.c.K(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.ae(this.a,"http"))return 80
if(t===5&&C.c.ae(this.a,"https"))return 443
return 0},
gej:function(a){return C.c.K(this.a,this.e,this.f)},
gcU:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a2()
return t<s?C.c.K(this.a,t+1,s):""},
ge5:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.af(s,t+1):""},
gcV:function(){var t=this.f
if(typeof t!=="number")return t.a2()
if(t>=this.r)return C.a7
t=P.y
return new P.eN(P.xo(this.gcU(this),C.o),[t,t])},
ga6:function(a){var t=this.y
if(t==null){t=C.c.ga6(this.a)
this.y=t}return t},
P:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.aq(b)
if(!!t.$iseO)return this.a===t.A(b)
return!1},
A:function(a){return this.a},
$iseO:1}
P.q3.prototype={}
W.ay.prototype={}
W.eX.prototype={
A:function(a){return String(a)},
$iseX:1,
$isf:1,
ga7:function(a){return a.href},
sa7:function(a,b){return a.href=b}}
W.kJ.prototype={
A:function(a){return String(a)},
$isf:1,
ga7:function(a){return a.href},
sa7:function(a,b){return a.href=b}}
W.f_.prototype={$isf_:1,$iscA:1,$isaf:1,$isad:1}
W.cM.prototype={$isad:1}
W.kR.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cM]},
$ist:1,
$ast:function(){return[W.cM]},
$iso:1,
$aso:function(){return[W.cM]},
$isaH:1,
$asaH:function(){return[W.cM]},
$isaA:1,
$asaA:function(){return[W.cM]}}
W.h6.prototype={
$asp:function(){return[W.cM]},
$ast:function(){return[W.cM]},
$aso:function(){return[W.cM]},
$isp:1,
$ist:1,
$iso:1}
W.h9.prototype={
$asp:function(){return[W.cM]},
$ast:function(){return[W.cM]},
$aso:function(){return[W.cM]},
$isp:1,
$ist:1,
$iso:1}
W.kV.prototype={
ga7:function(a){return a.href},
sa7:function(a,b){return a.href=b}}
W.f0.prototype={$isf0:1}
W.f1.prototype={$isf1:1,$isf:1}
W.fW.prototype={$isfW:1,
gG:function(a){return a.name}}
W.ej.prototype={$isf:1,
gm:function(a){return a.length}}
W.l6.prototype={$isf:1}
W.ik.prototype={
cI:function(a,b){return typeof console!="undefined"?console.error(b):null},
ba:function(a){return typeof console!="undefined"?console.group(a):null},
ec:function(a){return typeof console!="undefined"?console.info(a):null},
ii:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.h0.prototype={
gG:function(a){return a.name}}
W.ld.prototype={
gaJ:function(a){return a.style}}
W.le.prototype={
ga7:function(a){return a.href}}
W.h1.prototype={
gaJ:function(a){return a.style}}
W.h2.prototype={
gG:function(a){return a.name}}
W.lf.prototype={
gaJ:function(a){return a.style}}
W.bO.prototype={$isbO:1,$isad:1}
W.f4.prototype={
bH:function(a,b){var t=this.fv(a,b)
return t!=null?t:""},
fv:function(a,b){if(W.zc(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.zg()+b)},
J:function(a,b){return a.item(b)},
gbf:function(a){return a.content},
gbr:function(a){return a.display},
sbr:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iP.prototype={}
W.q1.prototype={
bH:function(a,b){var t=this.b
return J.yu(t.gab(t),b)},
fV:function(a,b){var t
for(t=this.a,t=new H.ez(t,t.gm(t),0,null,[H.Q(t,0)]);t.F();)t.d.style[a]=b},
sbr:function(a,b){this.fV("display",b)},
f7:function(a){var t=P.d6(this.a,!0,null)
this.b=new H.eB(t,new W.q2(),[H.Q(t,0),null])}}
W.jO.prototype={}
W.q2.prototype={
$1:function(a){return J.rY(a)},
$S:function(){return{func:1,args:[,]}}}
W.im.prototype={
gbf:function(a){return this.bH(a,"content")},
gbr:function(a){return this.bH(a,"display")}}
W.lg.prototype={
gaJ:function(a){return a.style}}
W.lh.prototype={
gaJ:function(a){return a.style}}
W.lm.prototype={
gcJ:function(a){return a.files}}
W.f5.prototype={$isf5:1,$isad:1}
W.io.prototype={
bS:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
J:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.iq.prototype={}
W.ek.prototype={$isek:1}
W.ir.prototype={$isf:1}
W.is.prototype={
gG:function(a){return a.name}}
W.lp.prototype={
gG:function(a){var t=a.name
if(P.vE()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vE()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
A:function(a){return String(a)}}
W.it.prototype={
A:function(a){return"Rectangle ("+H.B(a.left)+", "+H.B(a.top)+") "+H.B(this.gb4(a))+" x "+H.B(this.gaZ(a))},
P:function(a,b){var t
if(b==null)return!1
t=J.aq(b)
if(!t.$isbU)return!1
return a.left===t.gbY(b)&&a.top===t.gc3(b)&&this.gb4(a)===t.gb4(b)&&this.gaZ(a)===t.gaZ(b)},
ga6:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb4(a)
q=this.gaZ(a)
return W.xz(W.eU(W.eU(W.eU(W.eU(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaZ:function(a){return a.height},
gbY:function(a){return a.left},
gc3:function(a){return a.top},
gb4:function(a){return a.width},
$isbU:1,
$asbU:function(){}}
W.iu.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.y]},
$ist:1,
$ast:function(){return[P.y]},
$iso:1,
$aso:function(){return[P.y]},
$isaH:1,
$asaH:function(){return[P.y]},
$isaA:1,
$asaA:function(){return[P.y]}}
W.iQ.prototype={
$asp:function(){return[P.y]},
$ast:function(){return[P.y]},
$aso:function(){return[P.y]},
$isp:1,
$ist:1,
$iso:1}
W.j9.prototype={
$asp:function(){return[P.y]},
$ast:function(){return[P.y]},
$aso:function(){return[P.y]},
$isp:1,
$ist:1,
$iso:1}
W.iv.prototype={
J:function(a,b){return a.item(b)}}
W.iw.prototype={
h:function(a,b){return a.add(b)},
W:function(a,b){return a.contains(b)},
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.ki.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot modify list"))},
sm:function(a,b){throw H.k(new P.V("Cannot modify list"))},
gaJ:function(a){return W.GH(this)},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
W.cA.prototype={
gdZ:function(a){return new W.q9(a)},
ge0:function(a){return new W.qa(a)},
A:function(a){return a.localName},
ed:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
aA:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.vG
if(t==null){t=H.a([],[W.ea])
s=new W.jM(t)
t.push(W.xx(null))
t.push(W.xA())
$.vG=s
d=s}else d=t
t=$.vF
if(t==null){t=new W.kt(d)
$.vF=t
c=t}else{t.a=d
c=t}}if($.e4==null){t=document
s=t.implementation.createHTMLDocument("")
$.e4=s
$.ta=s.createRange()
s=$.e4
s.toString
r=s.createElement("base")
J.yA(r,t.baseURI)
$.e4.head.appendChild(r)}t=$.e4
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.e4
if(!!this.$isf1)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.e4.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.W(C.a3,a.tagName)){$.ta.selectNodeContents(q)
p=$.ta.createContextualFragment(b)}else{q.innerHTML=b
p=$.e4.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.e4.body
if(q==null?t!=null:q!==t)J.yx(q)
c.c7(p)
document.adoptNode(p)
return p},
hf:function(a,b,c){return this.aA(a,b,c,null)},
eL:function(a,b,c,d){a.textContent=null
a.appendChild(this.aA(a,b,c,d))},
eK:function(a,b){return this.eL(a,b,null,null)},
$iscA:1,
$isaf:1,
$isad:1,
$isf:1,
gaJ:function(a){return a.style},
gdE:function(a){return a.namespaceURI},
gib:function(a){return a.tagName}}
W.ru.prototype={
$1:function(a){return!!J.aq(a).$iscA},
$S:function(){return{func:1,args:[,]}}}
W.lv.prototype={
gG:function(a){return a.name}}
W.h5.prototype={
gG:function(a){return a.name}}
W.lB.prototype={
gap:function(a){return a.error}}
W.U.prototype={$isU:1,$isad:1}
W.aI.prototype={
h1:function(a,b,c,d){if(c!=null)this.fe(a,b,c,!1)},
i4:function(a,b,c,d){if(c!=null)this.fQ(a,b,c,!1)},
fe:function(a,b,c,d){return a.addEventListener(b,H.dq(c,1),!1)},
fQ:function(a,b,c,d){return a.removeEventListener(b,H.dq(c,1),!1)}}
W.m3.prototype={
gG:function(a){return a.name}}
W.cg.prototype={$iscg:1,$isad:1,
gG:function(a){return a.name}}
W.fd.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isfd:1,
$isaH:1,
$asaH:function(){return[W.cg]},
$isaA:1,
$asaA:function(){return[W.cg]},
$isp:1,
$asp:function(){return[W.cg]},
$ist:1,
$ast:function(){return[W.cg]},
$iso:1,
$aso:function(){return[W.cg]}}
W.iR.prototype={
$asp:function(){return[W.cg]},
$ast:function(){return[W.cg]},
$aso:function(){return[W.cg]},
$isp:1,
$ist:1,
$iso:1}
W.ja.prototype={
$asp:function(){return[W.cg]},
$ast:function(){return[W.cg]},
$aso:function(){return[W.cg]},
$isp:1,
$ist:1,
$iso:1}
W.m4.prototype={
gap:function(a){return a.error}}
W.m5.prototype={
gG:function(a){return a.name}}
W.m6.prototype={
gap:function(a){return a.error},
gm:function(a){return a.length}}
W.m8.prototype={
gaJ:function(a){return a.style},
gd_:function(a){return a.weight}}
W.m9.prototype={
h:function(a,b){return a.add(b)},
is:function(a,b,c){return a.forEach(H.dq(b,3),c)},
a5:function(a,b){b=H.dq(b,3)
return a.forEach(b)}}
W.iL.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.cq.prototype={$iscq:1,$isad:1}
W.mj.prototype={
gm:function(a){return a.length}}
W.fe.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$iso:1,
$aso:function(){return[W.af]},
$isaH:1,
$asaH:function(){return[W.af]},
$isaA:1,
$asaA:function(){return[W.af]}}
W.iS.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]},
$isp:1,
$ist:1,
$iso:1}
W.jb.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]},
$isp:1,
$ist:1,
$iso:1}
W.iN.prototype={
J:function(a,b){return a.item(b)}}
W.e9.prototype={
iB:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hS:function(a,b,c,d){return a.open(b,c,d)},
gi7:function(a){return W.H8(a.response)},
b6:function(a,b){return a.send(b)},
$ise9:1,
$isad:1,
gi8:function(a){return a.responseText}}
W.mm.prototype={
$1:function(a){return J.ys(a)},
$S:function(){return{func:1,args:[W.e9]}}}
W.mn.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.ar()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.az(0,t)
else p.bp(a)},
$S:function(){return{func:1,args:[,]}}}
W.hm.prototype={}
W.mp.prototype={
gG:function(a){return a.name}}
W.hn.prototype={$ishn:1}
W.fg.prototype={$isfg:1,$iscA:1,$isaf:1,$isad:1,
az:function(a,b){return a.complete.$1(b)}}
W.mv.prototype={$iscA:1,$isf:1,$isaf:1,
gcJ:function(a){return a.files},
gG:function(a){return a.name}}
W.mT.prototype={
gG:function(a){return a.name}}
W.jB.prototype={}
W.hw.prototype={
h:function(a,b){return a.add(b)}}
W.hx.prototype={$ishx:1,
ga7:function(a){return a.href},
sa7:function(a,b){return a.href=b}}
W.n9.prototype={
A:function(a){return String(a)},
ga7:function(a){return a.href}}
W.ne.prototype={
gG:function(a){return a.name}}
W.hF.prototype={
gap:function(a){return a.error}}
W.jG.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.ni.prototype={
gbf:function(a){return a.content},
gG:function(a){return a.name}}
W.nj.prototype={
io:function(a,b,c){return a.send(b,c)},
b6:function(a,b){return a.send(b)}}
W.hG.prototype={
gG:function(a){return a.name}}
W.cs.prototype={$iscs:1,$isad:1}
W.jH.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaH:1,
$asaH:function(){return[W.cs]},
$isaA:1,
$asaA:function(){return[W.cs]},
$isp:1,
$asp:function(){return[W.cs]},
$ist:1,
$ast:function(){return[W.cs]},
$iso:1,
$aso:function(){return[W.cs]}}
W.j1.prototype={
$asp:function(){return[W.cs]},
$ast:function(){return[W.cs]},
$aso:function(){return[W.cs]},
$isp:1,
$ist:1,
$iso:1}
W.jl.prototype={
$asp:function(){return[W.cs]},
$ast:function(){return[W.cs]},
$aso:function(){return[W.cs]},
$isp:1,
$ist:1,
$iso:1}
W.nw.prototype={$isf:1}
W.nx.prototype={
gG:function(a){return a.name}}
W.d2.prototype={
gbb:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.k(new P.da("No elements"))
if(s>1)throw H.k(new P.da("More than one element"))
return t.firstChild},
h:function(a,b){this.a.appendChild(b)},
av:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.v(s,b)
t.replaceChild(c,s[b])},
gV:function(a){var t=this.a.childNodes
return new W.iJ(t,t.length,-1,null,[H.ax(t,"bq",0)])},
a3:function(a,b,c,d,e){throw H.k(new P.V("Cannot setRange on Node list"))},
as:function(a,b,c,d){return this.a3(a,b,c,d,0)},
bv:function(a,b,c,d){throw H.k(new P.V("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
sm:function(a,b){throw H.k(new P.V("Cannot set length on immutable List."))},
n:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
$ashz:function(){return[W.af]},
$asfq:function(){return[W.af]},
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]}}
W.af.prototype={
ghP:function(a){return new W.d2(a)},
i2:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
A:function(a){var t=a.nodeValue
return t==null?this.eS(a):t},
W:function(a,b){return a.contains(b)},
$isaf:1,
$isad:1,
gc_:function(a){return a.parentNode},
gcS:function(a){return a.previousSibling}}
W.jK.prototype={
cT:function(a){return a.previousNode()}}
W.jL.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$iso:1,
$aso:function(){return[W.af]},
$isaH:1,
$asaH:function(){return[W.af]},
$isaA:1,
$asaA:function(){return[W.af]}}
W.j2.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]},
$isp:1,
$ist:1,
$iso:1}
W.jm.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]},
$isp:1,
$ist:1,
$iso:1}
W.nC.prototype={
gG:function(a){return a.name}}
W.nH.prototype={
gG:function(a){return a.name}}
W.nL.prototype={
gG:function(a){return a.name}}
W.nN.prototype={$isf:1}
W.eb.prototype={
gG:function(a){return a.name}}
W.nS.prototype={
gm:function(a){return a.length}}
W.ci.prototype={
J:function(a,b){return a.item(b)},
$isci:1,
$isad:1,
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.jS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ci]},
$ist:1,
$ast:function(){return[W.ci]},
$iso:1,
$aso:function(){return[W.ci]},
$isaH:1,
$asaH:function(){return[W.ci]},
$isaA:1,
$asaA:function(){return[W.ci]}}
W.j3.prototype={
$asp:function(){return[W.ci]},
$ast:function(){return[W.ci]},
$aso:function(){return[W.ci]},
$isp:1,
$ist:1,
$iso:1}
W.jn.prototype={
$asp:function(){return[W.ci]},
$ast:function(){return[W.ci]},
$aso:function(){return[W.ci]},
$isp:1,
$ist:1,
$iso:1}
W.nX.prototype={
b6:function(a,b){return a.send(b)}}
W.jV.prototype={
b6:function(a,b){return a.send(b)}}
W.fu.prototype={$isfu:1,$iscA:1,$isaf:1,$isad:1}
W.jW.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.oj.prototype={
gG:function(a){return a.name}}
W.om.prototype={$isf:1}
W.on.prototype={
gG:function(a){return a.name}}
W.oo.prototype={
gG:function(a){return a.name}}
W.ct.prototype={$isct:1,$isad:1}
W.jY.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ct]},
$ist:1,
$ast:function(){return[W.ct]},
$iso:1,
$aso:function(){return[W.ct]},
$isaH:1,
$asaH:function(){return[W.ct]},
$isaA:1,
$asaA:function(){return[W.ct]}}
W.h7.prototype={
$asp:function(){return[W.ct]},
$ast:function(){return[W.ct]},
$aso:function(){return[W.ct]},
$isp:1,
$ist:1,
$iso:1}
W.ha.prototype={
$asp:function(){return[W.ct]},
$ast:function(){return[W.ct]},
$aso:function(){return[W.ct]},
$isp:1,
$ist:1,
$iso:1}
W.hS.prototype={$ishS:1}
W.cu.prototype={$iscu:1,$isad:1,
gd_:function(a){return a.weight}}
W.jZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cu]},
$ist:1,
$ast:function(){return[W.cu]},
$iso:1,
$aso:function(){return[W.cu]},
$isaH:1,
$asaH:function(){return[W.cu]},
$isaA:1,
$asaA:function(){return[W.cu]}}
W.j4.prototype={
$asp:function(){return[W.cu]},
$ast:function(){return[W.cu]},
$aso:function(){return[W.cu]},
$isp:1,
$ist:1,
$iso:1}
W.jo.prototype={
$asp:function(){return[W.cu]},
$ast:function(){return[W.cu]},
$aso:function(){return[W.cu]},
$isp:1,
$ist:1,
$iso:1}
W.fv.prototype={$isfv:1,$isad:1}
W.os.prototype={
gap:function(a){return a.error}}
W.ck.prototype={
J:function(a,b){return a.item(b)},
$isck:1,
$isad:1,
gm:function(a){return a.length}}
W.ot.prototype={
gG:function(a){return a.name}}
W.ou.prototype={
gG:function(a){return a.name}}
W.oA.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a5:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gU:function(a){return a.key(0)==null},
$isb_:1,
$asb_:function(){return[P.y,P.y]}}
W.cm.prototype={$iscm:1,$isad:1,
ga7:function(a){return a.href}}
W.ee.prototype={}
W.k2.prototype={
aA:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
t=W.zh("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.d2(s).av(0,J.yp(t))
return s}}
W.p0.prototype={
aA:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.aA(t.createElement("table"),b,c,d)
t.toString
t=new W.d2(t)
r=t.gbb(t)
r.toString
t=new W.d2(r)
q=t.gbb(t)
s.toString
q.toString
new W.d2(s).av(0,new W.d2(q))
return s}}
W.p1.prototype={
aA:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.aA(t.createElement("table"),b,c,d)
t.toString
t=new W.d2(t)
r=t.gbb(t)
s.toString
r.toString
new W.d2(s).av(0,new W.d2(r))
return s}}
W.hW.prototype={$ishW:1,
gbf:function(a){return a.content}}
W.p5.prototype={
gG:function(a){return a.name}}
W.cT.prototype={$isad:1}
W.cJ.prototype={$isad:1}
W.p8.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isaH:1,
$asaH:function(){return[W.cJ]},
$isaA:1,
$asaA:function(){return[W.cJ]},
$isp:1,
$asp:function(){return[W.cJ]},
$ist:1,
$ast:function(){return[W.cJ]},
$iso:1,
$aso:function(){return[W.cJ]}}
W.j5.prototype={
$asp:function(){return[W.cJ]},
$ast:function(){return[W.cJ]},
$aso:function(){return[W.cJ]},
$isp:1,
$ist:1,
$iso:1}
W.jp.prototype={
$asp:function(){return[W.cJ]},
$ast:function(){return[W.cJ]},
$aso:function(){return[W.cJ]},
$isp:1,
$ist:1,
$iso:1}
W.p9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isaH:1,
$asaH:function(){return[W.cT]},
$isaA:1,
$asaA:function(){return[W.cT]},
$isp:1,
$asp:function(){return[W.cT]},
$ist:1,
$ast:function(){return[W.cT]},
$iso:1,
$aso:function(){return[W.cT]}}
W.h8.prototype={
$asp:function(){return[W.cT]},
$ast:function(){return[W.cT]},
$aso:function(){return[W.cT]},
$isp:1,
$ist:1,
$iso:1}
W.hb.prototype={
$asp:function(){return[W.cT]},
$ast:function(){return[W.cT]},
$aso:function(){return[W.cT]},
$isp:1,
$ist:1,
$iso:1}
W.pd.prototype={
gm:function(a){return a.length}}
W.cw.prototype={$iscw:1,$isad:1}
W.k3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cw]},
$ist:1,
$ast:function(){return[W.cw]},
$iso:1,
$aso:function(){return[W.cw]},
$isaH:1,
$asaH:function(){return[W.cw]},
$isaA:1,
$asaA:function(){return[W.cw]}}
W.j6.prototype={
$asp:function(){return[W.cw]},
$ast:function(){return[W.cw]},
$aso:function(){return[W.cw]},
$isp:1,
$ist:1,
$iso:1}
W.jq.prototype={
$asp:function(){return[W.cw]},
$ast:function(){return[W.cw]},
$aso:function(){return[W.cw]},
$isp:1,
$ist:1,
$iso:1}
W.fx.prototype={$isfx:1,$isad:1}
W.k4.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.ef.prototype={}
W.k5.prototype={
hT:function(a){return a.parentNode()},
cT:function(a){return a.previousNode()}}
W.pt.prototype={
A:function(a){return String(a)},
$isf:1,
ga7:function(a){return a.href}}
W.px.prototype={
gm:function(a){return a.length}}
W.fy.prototype={$isfy:1,$isad:1}
W.k6.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pC.prototype={
b6:function(a,b){return a.send(b)}}
W.k9.prototype={$isf:1,
gG:function(a){return a.name}}
W.pJ.prototype={$isf:1}
W.eQ.prototype={$isf:1}
W.fz.prototype={$isfz:1,$isaf:1,$isad:1,
gG:function(a){return a.name},
gdE:function(a){return a.namespaceURI}}
W.q0.prototype={
A:function(a){return"Rectangle ("+H.B(a.left)+", "+H.B(a.top)+") "+H.B(a.width)+" x "+H.B(a.height)},
P:function(a,b){var t,s,r
if(b==null)return!1
t=J.aq(b)
if(!t.$isbU)return!1
s=a.left
r=t.gbY(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc3(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb4(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaZ(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga6:function(a){var t,s,r,q
t=J.dH(a.left)
s=J.dH(a.top)
r=J.dH(a.width)
q=J.dH(a.height)
return W.xz(W.eU(W.eU(W.eU(W.eU(0,t),s),r),q))},
$isbU:1,
$asbU:function(){},
gaZ:function(a){return a.height},
gbY:function(a){return a.left},
gc3:function(a){return a.top},
gb4:function(a){return a.width}}
W.i1.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaH:1,
$asaH:function(){return[P.bU]},
$isaA:1,
$asaA:function(){return[P.bU]},
$isp:1,
$asp:function(){return[P.bU]},
$ist:1,
$ast:function(){return[P.bU]},
$iso:1,
$aso:function(){return[P.bU]}}
W.j7.prototype={
$asp:function(){return[P.bU]},
$ast:function(){return[P.bU]},
$aso:function(){return[P.bU]},
$isp:1,
$ist:1,
$iso:1}
W.jr.prototype={
$asp:function(){return[P.bU]},
$ast:function(){return[P.bU]},
$aso:function(){return[P.bU]},
$isp:1,
$ist:1,
$iso:1}
W.kg.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bO]},
$ist:1,
$ast:function(){return[W.bO]},
$iso:1,
$aso:function(){return[W.bO]},
$isaH:1,
$asaH:function(){return[W.bO]},
$isaA:1,
$asaA:function(){return[W.bO]}}
W.j8.prototype={
$asp:function(){return[W.bO]},
$ast:function(){return[W.bO]},
$aso:function(){return[W.bO]},
$isp:1,
$ist:1,
$iso:1}
W.js.prototype={
$asp:function(){return[W.bO]},
$ast:function(){return[W.bO]},
$aso:function(){return[W.bO]},
$isp:1,
$ist:1,
$iso:1}
W.q7.prototype={$isf:1}
W.q8.prototype={
gaZ:function(a){return a.height},
gb4:function(a){return a.width}}
W.kk.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaH:1,
$asaH:function(){return[W.cq]},
$isaA:1,
$asaA:function(){return[W.cq]},
$isp:1,
$asp:function(){return[W.cq]},
$ist:1,
$ast:function(){return[W.cq]},
$iso:1,
$aso:function(){return[W.cq]}}
W.iT.prototype={
$asp:function(){return[W.cq]},
$ast:function(){return[W.cq]},
$aso:function(){return[W.cq]},
$isp:1,
$ist:1,
$iso:1}
W.jc.prototype={
$asp:function(){return[W.cq]},
$ast:function(){return[W.cq]},
$aso:function(){return[W.cq]},
$isp:1,
$ist:1,
$iso:1}
W.qu.prototype={$isf:1}
W.i8.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$iso:1,
$aso:function(){return[W.af]},
$isaH:1,
$asaH:function(){return[W.af]},
$isaA:1,
$asaA:function(){return[W.af]}}
W.iU.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]},
$isp:1,
$ist:1,
$iso:1}
W.jd.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$aso:function(){return[W.af]},
$isp:1,
$ist:1,
$iso:1}
W.qU.prototype={$isf:1}
W.ko.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ck]},
$ist:1,
$ast:function(){return[W.ck]},
$iso:1,
$aso:function(){return[W.ck]},
$isaH:1,
$asaH:function(){return[W.ck]},
$isaA:1,
$asaA:function(){return[W.ck]}}
W.iV.prototype={
$asp:function(){return[W.ck]},
$ast:function(){return[W.ck]},
$aso:function(){return[W.ck]},
$isp:1,
$ist:1,
$iso:1}
W.je.prototype={
$asp:function(){return[W.ck]},
$ast:function(){return[W.ck]},
$aso:function(){return[W.ck]},
$isp:1,
$ist:1,
$iso:1}
W.kq.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaH:1,
$asaH:function(){return[W.cm]},
$isaA:1,
$asaA:function(){return[W.cm]},
$isp:1,
$asp:function(){return[W.cm]},
$ist:1,
$ast:function(){return[W.cm]},
$iso:1,
$aso:function(){return[W.cm]}}
W.iW.prototype={
$asp:function(){return[W.cm]},
$ast:function(){return[W.cm]},
$aso:function(){return[W.cm]},
$isp:1,
$ist:1,
$iso:1}
W.jf.prototype={
$asp:function(){return[W.cm]},
$ast:function(){return[W.cm]},
$aso:function(){return[W.cm]},
$isp:1,
$ist:1,
$iso:1}
W.rf.prototype={$isf:1}
W.rg.prototype={$isf:1}
W.pX.prototype={
a5:function(a,b){var t,s,r,q,p
for(t=this.gaN(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.bV)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gaN:function(a){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.y])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.v(t,q)
p=t[q]
o=J.bf(p)
if(o.gdE(p)==null)s.push(o.gG(p))}return s},
gU:function(a){return this.gaN(this).length===0},
$isb_:1,
$asb_:function(){return[P.y,P.y]},
gdA:function(){return this.a}}
W.q9.prototype={
n:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gaN(this).length}}
W.qa.prototype={
aG:function(){var t,s,r,q,p
t=P.a1(null,null,null,P.y)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bV)(s),++q){p=J.rZ(s[q])
if(p.length!==0)t.h(0,p)}return t},
ey:function(a){this.a.className=a.bh(0," ")},
gm:function(a){return this.a.classList.length},
gU:function(a){return this.a.classList.length===0},
W:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
gdA:function(){return this.a}}
W.qd.prototype={
aO:function(a,b,c,d){return W.fA(this.a,this.b,a,!1,H.Q(this,0))},
eg:function(a,b,c){return this.aO(a,null,b,c)}}
W.i2.prototype={}
W.qe.prototype={
bV:function(a){if(this.b==null)return
this.dV()
this.b=null
this.d=null
return},
cP:function(a,b){if(this.b==null)return;++this.a
this.dV()},
ek:function(a){return this.cP(a,null)},
en:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dT()},
dT:function(){var t=this.d
if(t!=null&&this.a<=0)J.yd(this.b,this.c,t,!1)},
dV:function(){var t=this.d
if(t!=null)J.yy(this.b,this.c,t,!1)},
f8:function(a,b,c,d,e){this.dT()}}
W.qf.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.i6.prototype={
bd:function(a){return $.$get$xy().W(0,W.h4(a))},
aW:function(a,b,c){var t,s,r
t=W.h4(a)
s=$.$get$v_()
r=s.n(0,H.B(t)+"::"+b)
if(r==null)r=s.n(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
fa:function(a){var t,s
t=$.$get$v_()
if(t.gU(t)){for(s=0;s<262;++s)t.i(0,C.a0[s],W.HI())
for(s=0;s<12;++s)t.i(0,C.r[s],W.HJ())}},
$isea:1,
gew:function(){return this.a}}
W.bq.prototype={
gV:function(a){return new W.iJ(a,this.gm(a),-1,null,[H.ax(a,"bq",0)])},
h:function(a,b){throw H.k(new P.V("Cannot add to immutable List."))},
a3:function(a,b,c,d,e){throw H.k(new P.V("Cannot setRange on immutable List."))},
as:function(a,b,c,d){return this.a3(a,b,c,d,0)},
aB:function(a,b,c,d){throw H.k(new P.V("Cannot modify an immutable List."))},
bv:function(a,b,c,d){throw H.k(new P.V("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
W.jM.prototype={
h:function(a,b){this.a.push(b)},
bd:function(a){return C.b.dY(this.a,new W.nz(a))},
aW:function(a,b,c){return C.b.dY(this.a,new W.ny(a,b,c))},
$isea:1}
W.nz.prototype={
$1:function(a){return a.bd(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.ny.prototype={
$1:function(a){return a.aW(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.i9.prototype={
bd:function(a){return this.a.W(0,W.h4(a))},
aW:function(a,b,c){var t,s
t=W.h4(a)
s=this.c
if(s.W(0,H.B(t)+"::"+b))return this.d.h2(c)
else if(s.W(0,"*::"+b))return this.d.h2(c)
else{s=this.b
if(s.W(0,H.B(t)+"::"+b))return!0
else if(s.W(0,"*::"+b))return!0
else if(s.W(0,H.B(t)+"::*"))return!0
else if(s.W(0,"*::*"))return!0}return!1},
fc:function(a,b,c,d){var t,s,r
this.a.av(0,c)
t=b.c6(0,new W.qV())
s=b.c6(0,new W.qW())
this.b.av(0,t)
r=this.c
r.av(0,C.C)
r.av(0,s)},
$isea:1,
gew:function(){return this.d}}
W.qV.prototype={
$1:function(a){return!C.b.W(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.qW.prototype={
$1:function(a){return C.b.W(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.r5.prototype={
aW:function(a,b,c){if(this.eY(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ve(a).a.getAttribute("template")==="")return this.e.W(0,b)
return!1}}
W.r6.prototype={
$1:function(a){return"TEMPLATE::"+H.B(a)},
$S:function(){return{func:1,args:[,]}}}
W.r4.prototype={
bd:function(a){var t=J.aq(a)
if(!!t.$ishR)return!1
t=!!t.$isc2
if(t&&W.h4(a)==="foreignObject")return!1
if(t)return!0
return!1},
aW:function(a,b,c){if(b==="is"||C.c.ae(b,"on"))return!1
return this.bd(a)},
$isea:1}
W.iJ.prototype={
F:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.ig(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gR:function(){return this.d}}
W.ea.prototype={}
W.r7.prototype={
c7:function(a){}}
W.qT.prototype={}
W.kt.prototype={
c7:function(a){new W.rd(this).$2(a,null)},
bm:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
fT:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.ve(a)
r=s.gdA().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.bW(n)}p="element unprintable"
try{p=J.cz(a)}catch(n){H.bW(n)}try{o=W.h4(a)
this.fS(a,b,t,p,o,s,r)}catch(n){if(H.bW(n) instanceof P.cW)throw n
else{this.bm(a,b)
window
m="Removing corrupted element "+H.B(p)
if(typeof console!="undefined")console.warn(m)}}},
fS:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.bm(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.bd(a)){this.bm(a,b)
window
t="Removing disallowed element <"+H.B(e)+"> from "+J.cz(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.aW(a,"is",g)){this.bm(a,b)
window
t="Removing disallowed type extension <"+H.B(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gaN(f)
s=H.a(t.slice(0),[H.Q(t,0)])
for(r=f.gaN(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.v(s,r)
q=s[r]
if(!this.a.aW(a,J.yE(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.B(e)+" "+q+'="'+H.B(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.aq(a).$ishW)this.c7(a.content)}}
W.rd.prototype={
$2:function(a,b){var t,s,r,q,p,o
r=this.a
switch(a.nodeType){case 1:r.fT(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.bm(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.yq(t)}catch(q){H.bW(q)
p=t
if(r){o=J.bf(p)
if(o.gc_(p)!=null){o.gc_(p)
o.gc_(p).removeChild(p)}}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.af,W.af]}}}
P.r1.prototype={
bw:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b3:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.aq(a)
if(!!s.$ise3)return new Date(a.a)
if(!!s.$isG1)throw H.k(new P.eL("structured clone of RegExp"))
if(!!s.$iscg)return a
if(!!s.$isf0)return a
if(!!s.$isfd)return a
if(!!s.$ishn)return a
if(!!s.$isfm||!!s.$iseC)return a
if(!!s.$isb_){r=this.bw(a)
q=this.b
p=q.length
if(r>=p)return H.v(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.v(q,r)
q[r]=o
s.a5(a,new P.r3(t,this))
return t.a}if(!!s.$isp){r=this.bw(a)
t=this.b
if(r>=t.length)return H.v(t,r)
o=t[r]
if(o!=null)return o
return this.he(a,r)}throw H.k(new P.eL("structured clone of other type"))},
he:function(a,b){var t,s,r,q,p
t=J.bh(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.v(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b3(t.n(a,p))
if(p>=r.length)return H.v(r,p)
r[p]=q}return r}}
P.r3.prototype={
$2:function(a,b){this.a.a[a]=this.b.b3(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pQ.prototype={
bw:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b3:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.e3(s,!0)
r.dd(s,!0)
return r}if(a instanceof RegExp)throw H.k(new P.eL("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.Ht(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bw(a)
r=this.b
o=r.length
if(p>=o)return H.v(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.jC()
t.a=n
if(p>=o)return H.v(r,p)
r[p]=n
this.hs(a,new P.pR(t,this))
return t.a}if(a instanceof Array){p=this.bw(a)
r=this.b
if(p>=r.length)return H.v(r,p)
n=r[p]
if(n!=null)return n
o=J.bh(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.v(r,p)
r[p]=n
if(typeof m!=="number")return H.ai(m)
r=J.de(n)
l=0
for(;l<m;++l)r.i(n,l,this.b3(o.n(a,l)))
return n}return a}}
P.pR.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b3(b)
J.kC(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.r2.prototype={}
P.kc.prototype={
hs:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.rz.prototype={
$1:function(a){return this.a.az(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rA.prototype={
$1:function(a){return this.a.bp(a)},
$S:function(){return{func:1,args:[,]}}}
P.lb.prototype={
dW:function(a){if($.$get$vw().b.test(a))return a
throw H.k(P.e0(a,"value","Not a valid class token"))},
A:function(a){return this.aG().bh(0," ")},
gV:function(a){var t,s
t=this.aG()
s=new P.dD(t,t.r,null,null,[null])
s.c=t.e
return s},
a5:function(a,b){this.aG().a5(0,b)},
aw:function(a,b){var t=this.aG()
return new H.h3(t,b,[H.Q(t,0),null])},
gU:function(a){return this.aG().a===0},
gm:function(a){return this.aG().a},
W:function(a,b){if(typeof b!=="string")return!1
this.dW(b)
return this.aG().W(0,b)},
cM:function(a){return this.W(0,a)?a:null},
h:function(a,b){this.dW(b)
return this.hN(0,new P.lc(b))},
a1:function(a,b){return this.aG().a1(0,!0)},
an:function(a){return this.a1(a,!0)},
hN:function(a,b){var t,s
t=this.aG()
s=b.$1(t)
this.ey(t)
return s},
$iseF:1,
$aseF:function(){return[P.y]},
$ist:1,
$ast:function(){return[P.y]},
$iso:1,
$aso:function(){return[P.y]}}
P.lc.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.ln.prototype={
gG:function(a){return a.name}}
P.rn.prototype={
$1:function(a){this.b.az(0,new P.kc([],[],!1).b3(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.ms.prototype={
gG:function(a){return a.name}}
P.nD.prototype={
bS:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fF(a,b,c)
q=P.H7(t)
return q}catch(p){s=H.bW(p)
r=H.cx(p)
q=P.vV(s,r,null)
return q}},
h:function(a,b){return this.bS(a,b,null)},
fF:function(a,b,c){return a.add(new P.r2([],[]).b3(b))},
gG:function(a){return a.name}}
P.hP.prototype={
gap:function(a){return a.error}}
P.pi.prototype={
gap:function(a){return a.error}}
P.qB.prototype={
bA:function(a){if(a<=0||a>4294967296)throw H.k(P.wY("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
cN:function(){return Math.random()}}
P.qK.prototype={
aT:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.al(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bA:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.k(P.wY("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aT()
return(this.a&t)>>>0}do{this.aT()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
cN:function(){this.aT()
var t=this.a
this.aT()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
fb:function(a){var t,s,r,q,p,o,n,m
t=J.eh(a,0)?-1:0
do{if(typeof a!=="number")return a.aH()
s=(a&4294967295)>>>0
a=C.d.al(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.al(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.al(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.al(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.al(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.al(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.al(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aT()
this.aT()
this.aT()
this.aT()}}
P.qL.prototype={}
P.bU.prototype={$asbU:null}
P.kG.prototype={$isf:1,
ga7:function(a){return a.href}}
P.ei.prototype={$isf:1}
P.lE.prototype={$isf:1}
P.lF.prototype={$isf:1}
P.lG.prototype={$isf:1}
P.lH.prototype={$isf:1}
P.lI.prototype={$isf:1}
P.lJ.prototype={$isf:1}
P.lK.prototype={$isf:1}
P.lL.prototype={$isf:1}
P.lM.prototype={$isf:1}
P.lN.prototype={$isf:1,
ga7:function(a){return a.href}}
P.lO.prototype={$isf:1}
P.lP.prototype={$isf:1}
P.lQ.prototype={$isf:1}
P.lR.prototype={$isf:1}
P.lS.prototype={$isf:1}
P.lT.prototype={$isf:1}
P.m7.prototype={$isf:1,
ga7:function(a){return a.href}}
P.cr.prototype={$isf:1}
P.mq.prototype={$isf:1,
ga7:function(a){return a.href}}
P.d5.prototype={$isad:1}
P.mW.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d5]},
$ist:1,
$ast:function(){return[P.d5]},
$iso:1,
$aso:function(){return[P.d5]}}
P.iX.prototype={
$asp:function(){return[P.d5]},
$ast:function(){return[P.d5]},
$aso:function(){return[P.d5]},
$isp:1,
$ist:1,
$iso:1}
P.jg.prototype={
$asp:function(){return[P.d5]},
$ast:function(){return[P.d5]},
$aso:function(){return[P.d5]},
$isp:1,
$ist:1,
$iso:1}
P.ng.prototype={$isf:1}
P.nh.prototype={$isf:1}
P.d8.prototype={$isad:1}
P.nA.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d8]},
$ist:1,
$ast:function(){return[P.d8]},
$iso:1,
$aso:function(){return[P.d8]}}
P.iY.prototype={
$asp:function(){return[P.d8]},
$ast:function(){return[P.d8]},
$aso:function(){return[P.d8]},
$isp:1,
$ist:1,
$iso:1}
P.jh.prototype={
$asp:function(){return[P.d8]},
$ast:function(){return[P.d8]},
$aso:function(){return[P.d8]},
$isp:1,
$ist:1,
$iso:1}
P.nQ.prototype={$isf:1,
ga7:function(a){return a.href}}
P.nV.prototype={
gm:function(a){return a.length}}
P.hR.prototype={$ishR:1,$isf:1,
ga7:function(a){return a.href}}
P.oV.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.y]},
$ist:1,
$ast:function(){return[P.y]},
$iso:1,
$aso:function(){return[P.y]}}
P.iZ.prototype={
$asp:function(){return[P.y]},
$ast:function(){return[P.y]},
$aso:function(){return[P.y]},
$isp:1,
$ist:1,
$iso:1}
P.ji.prototype={
$asp:function(){return[P.y]},
$ast:function(){return[P.y]},
$aso:function(){return[P.y]},
$isp:1,
$ist:1,
$iso:1}
P.kN.prototype={
aG:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a1(null,null,null,P.y)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bV)(r),++p){o=J.rZ(r[p])
if(o.length!==0)s.h(0,o)}return s},
ey:function(a){this.a.setAttribute("class",a.bh(0," "))}}
P.c2.prototype={
ge0:function(a){return new P.kN(a)},
aA:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.ea])
t.push(W.xx(null))
t.push(W.xA())
t.push(new W.r4())
c=new W.kt(new W.jM(t))}s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.v).hf(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.d2(q)
o=t.gbb(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
ed:function(a,b,c,d,e){throw H.k(new P.V("Cannot invoke insertAdjacentHtml on SVG."))},
$isc2:1,
$isf:1}
P.oY.prototype={$isf:1}
P.p_.prototype={$isf:1}
P.eK.prototype={}
P.p7.prototype={$isf:1,
ga7:function(a){return a.href}}
P.dc.prototype={$isad:1}
P.pj.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.dc]},
$ist:1,
$ast:function(){return[P.dc]},
$iso:1,
$aso:function(){return[P.dc]}}
P.j_.prototype={
$asp:function(){return[P.dc]},
$ast:function(){return[P.dc]},
$aso:function(){return[P.dc]},
$isp:1,
$ist:1,
$iso:1}
P.jj.prototype={
$asp:function(){return[P.dc]},
$ast:function(){return[P.dc]},
$aso:function(){return[P.dc]},
$isp:1,
$ist:1,
$iso:1}
P.pu.prototype={$isf:1,
ga7:function(a){return a.href}}
P.py.prototype={$isf:1}
P.pz.prototype={$isf:1}
P.i5.prototype={$isf:1,
ga7:function(a){return a.href}}
P.qQ.prototype={$isf:1}
P.qR.prototype={$isf:1}
P.qS.prototype={$isf:1}
P.bi.prototype={}
P.dd.prototype={$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
P.fQ.prototype={$isfQ:1,$isad:1,
gm:function(a){return a.length}}
P.eZ.prototype={$iseZ:1,$isad:1,
gbU:function(a){return a.buffer}}
P.fR.prototype={
fn:function(a,b,c,d){return a.decodeAudioData(b,H.dq(c,1),H.dq(d,1))},
hg:function(a,b){var t,s,r
t=P.fQ
s=new P.bm(0,$.ao,null,[t])
r=new P.dY(s,[t])
this.fn(a,b,new P.kO(r),new P.kP(r))
return s}}
P.kO.prototype={
$1:function(a){this.a.az(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kP.prototype={
$1:function(a){var t=this.a
if(a==null)t.bp("")
else t.bp(a)},
$S:function(){return{func:1,args:[,]}}}
P.bC.prototype={}
P.e1.prototype={}
P.la.prototype={
gbU:function(a){return a.buffer}}
P.kI.prototype={
gG:function(a){return a.name}}
P.o8.prototype={$isf:1}
P.re.prototype={$isf:1}
P.k_.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bx(b,a,null,null,null))
return P.xZ(a.item(b))},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
J:function(a,b){return P.xZ(a.item(b))},
$isp:1,
$asp:function(){return[P.b_]},
$ist:1,
$ast:function(){return[P.b_]},
$iso:1,
$aso:function(){return[P.b_]}}
P.j0.prototype={
$asp:function(){return[P.b_]},
$ast:function(){return[P.b_]},
$aso:function(){return[P.b_]},
$isp:1,
$ist:1,
$iso:1}
P.jk.prototype={
$asp:function(){return[P.b_]},
$ast:function(){return[P.b_]},
$aso:function(){return[P.b_]},
$isp:1,
$ist:1,
$iso:1}
T.fM.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
gU:function(a){return this.a.length===0},
gV:function(a){var t=this.a
return new J.ih(t,t.length,0,null,[H.Q(t,0)])},
$ashs:function(){return[T.fN]},
$aso:function(){return[T.fN]},
gcJ:function(a){return this.a}}
T.fN.prototype={
gbf:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.ff(C.A)
r=T.ff(C.B)
q=T.wO(0,this.b)
new T.iO(s,q,0,0,0,t,r).dB()
r=q.c.buffer
q=q.a
r.toString
q=H.cS(r,0,q)
this.cy=q
t=q}else{t=s.bF()
this.cy=t}this.ch=0}}return t},
A:function(a){return this.a},
gG:function(a){return this.a}}
T.dg.prototype={
A:function(a){return"ArchiveException: "+this.a}}
T.ho.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.aj()
if(typeof r!=="number")return H.ai(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.T()
if(typeof b!=="number")return H.ai(b)
s+=b
if(s<0||s>=t.length)return H.v(t,s)
return t[s]},
aS:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.ai(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.aj()
if(typeof s!=="number")return H.ai(s)
b=t-(a-s)}return T.tx(this.a,this.d,b,a)},
b_:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.T()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.ai(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.v(q,s)
q[s]}return-1},
bg:function(a,b){return this.b_(a,b,0)},
cW:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.aj()
if(typeof s!=="number")return H.ai(s)
r=this.aS(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.aj()
if(typeof p!=="number")return H.ai(p)
if(typeof s!=="number")return s.T()
this.b=s+(t-(q-p))
return r},
c1:function(a){return P.oW(this.cW(a).bF(),0,null)},
a_:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.T()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.v(t,s)
p=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.v(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a0:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.T()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.v(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.v(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.v(t,s)
n=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.v(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aQ:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.T()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.v(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.v(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.v(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.v(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.v(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.v(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.v(t,s)
j=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.v(t,r)
i=t[r]&255
if(this.d===1)return(C.a.ao(p,56)|C.a.ao(o,48)|C.a.ao(n,40)|C.a.ao(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.ao(i,56)|C.a.ao(j,48)|C.a.ao(k,40)|C.a.ao(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bF:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.aj()
if(typeof r!=="number")return H.ai(r)
q=t-(s-r)
t=this.a
r=J.aq(t)
if(!!r.$isdd){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cS(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xL(r.c9(t,s,p>o?o:p)))},
f0:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbU:function(a){return this.a},
ghR:function(a){return this.b}}
T.nI.prototype={
ij:function(a,b){var t,s,r,q
if(b==null)b=J.cn(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cl(s-q)
C.t.as(r,t,s,a)
this.a+=b},
d0:function(a){return this.ij(a,null)},
il:function(a){var t,s,r,q
t=J.bh(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.ai(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.ai(r)
this.cl(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.ai(r)
C.t.a3(q,s,s+r,t.gbU(a),t.ghR(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.aj()
if(typeof q!=="number")return H.ai(q)
this.a=t+(r-(s-q))},
aS:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cS(t,a,b-a)},
d9:function(a){return this.aS(a,null)},
cl:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.b0(P.dI("Invalid length "+H.B(s)))
r=new Uint8Array(s)
q=this.c
C.t.as(r,0,q.length,q)
this.c=r},
fs:function(){return this.cl(null)},
gm:function(a){return this.a}}
T.pM.prototype={
fP:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aS(this.a-20,20)
if(s.a0()!==117853008){a.b=t
return}s.a0()
r=s.aQ()
s.a0()
a.b=r
if(a.a0()!==101075792){a.b=t
return}a.aQ()
a.a_()
a.a_()
q=a.a0()
p=a.a0()
o=a.aQ()
n=a.aQ()
m=a.aQ()
l=a.aQ()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
ft:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.aj()
if(typeof r!=="number")return H.ai(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a0()===101010256){a.b=t
return q}}throw H.k(new T.dg("Could not find End of Central Directory Record"))},
f4:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.ft(a)
this.a=t
a.b=t
a.a0()
this.b=a.a_()
this.c=a.a_()
this.d=a.a_()
this.e=a.a_()
this.f=a.a0()
this.r=a.a0()
s=a.a_()
if(s>0)this.x=a.c1(s)
this.fP(a)
r=a.aS(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.T()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.ar()
if(!(p<t+o))break
if(r.a0()!==33639248)break
p=new T.pO(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a_()
p.b=r.a_()
p.c=r.a_()
p.d=r.a_()
p.e=r.a_()
p.f=r.a_()
p.r=r.a0()
p.x=r.a0()
p.y=r.a0()
n=r.a_()
m=r.a_()
l=r.a_()
p.z=r.a_()
p.Q=r.a_()
p.ch=r.a0()
o=r.a0()
p.cx=o
if(n>0)p.cy=r.c1(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.aj()
j=r.aS(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.aj()
if(typeof g!=="number")return H.ai(g)
if(typeof k!=="number")return k.T()
r.b=k+(i-(h-g))
p.db=j.bF()
f=j.a_()
e=j.a_()
if(f===1){if(e>=8)p.y=j.aQ()
if(e>=16)p.x=j.aQ()
if(e>=24){o=j.aQ()
p.cx=o}if(e>=28)p.z=j.a0()}}if(l>0)p.dx=r.c1(l)
a.b=o
p.dy=T.GC(a,p)
q.push(p)}}}
T.pN.prototype={
gbf:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.ff(C.A)
q=T.ff(C.B)
t=T.wO(0,t)
new T.iO(s,t,0,0,0,r,q).dB()
q=t.c.buffer
t=t.a
q.toString
t=H.cS(q,0,t)
this.cy=t
this.d=0}else{t=s.bF()
this.cy=t}}return t},
A:function(a){return this.z},
f5:function(a,b){var t,s,r,q
t=a.a0()
this.a=t
if(t!==67324752)throw H.k(new T.dg("Invalid Zip Signature"))
this.b=a.a_()
this.c=a.a_()
this.d=a.a_()
this.e=a.a_()
this.f=a.a_()
this.r=a.a0()
this.x=a.a0()
this.y=a.a0()
s=a.a_()
r=a.a_()
this.z=a.c1(s)
this.Q=a.cW(r).bF()
this.cx=a.cW(this.ch.x)
if((this.c&8)!==0){q=a.a0()
if(q===134695760)this.r=a.a0()
else this.r=q
this.x=a.a0()
this.y=a.a0()}}}
T.pO.prototype={
A:function(a){return this.cy}}
T.pL.prototype={
hh:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.GB(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.C],p=0;p<t.length;t.length===r||(0,H.bV)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.d5()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fN(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dZ(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.tx(k,0,null,0)}else if(k instanceof T.ho){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.ho(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.ho(m,"/")
j.y=n.r
s.push(j)}return new T.fM(s,null)}}
T.mo.prototype={
f_:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ao(1,this.b)
r=H.cD(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.v(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.v(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iO.prototype={
dB:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.T()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.ar()
if(!(r<s+q))break
if(!this.fM())break}},
fM:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.T()
if(typeof s!=="number")return s.ar()
if(s>=r+q)return!1
p=this.au(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.au(16)
s=this.au(16)
if(n!==0&&n!==(s^65535)>>>0)H.b0(new T.dg("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.aj()
r=q-r
if(n>s-r)H.b0(new T.dg("Input buffer is broken"))
m=t.aS(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.aj()
if(typeof l!=="number")return H.ai(l)
if(typeof s!=="number")return s.T()
t.b=s+(r-(q-l))
this.b.il(m)
break
case 1:this.ds(this.f,this.r)
break
case 2:this.fN()
break
default:throw H.k(new T.dg("unknown BTYPE: "+o))}return(p&1)===0},
au:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.T()
if(typeof r!=="number")return r.ar()
if(r>=q+p)throw H.k(new T.dg("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.v(q,r)
o=q[r]
this.c=(this.c|C.a.at(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ao(1,a)
this.c=C.a.dR(t,a)
this.d=s-a
return(t&r-1)>>>0},
ct:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.T()
if(typeof p!=="number")return p.ar()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.v(o,p)
m=o[p]
this.c=(this.c|C.a.at(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ao(1,s)-1)>>>0
if(p>=t.length)return H.v(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dR(r,k)
this.d=q-k
return l&65535},
fN:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.au(5)+257
s=this.au(5)+1
r=this.au(4)+4
q=H.cD(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.v(C.I,o)
n=C.I[o]
m=this.au(3)
if(n>=q)return H.v(p,n)
p[n]=m}l=T.ff(p)
k=new Uint8Array(H.cD(t))
j=new Uint8Array(H.cD(s))
i=this.dr(t,l,k)
h=this.dr(s,l,j)
this.ds(T.ff(i),T.ff(h))},
ds:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.ct(a)
if(s>285)throw H.k(new T.dg("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fs()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.v(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.v(C.G,p)
o=C.G[p]+this.au(C.a2[p])
n=this.ct(b)
if(n<=29){if(n>=30)return H.v(C.D,n)
m=C.D[n]+this.au(C.a1[n])
for(r=-m;o>m;){t.d0(t.d9(r))
o-=m}if(o===m)t.d0(t.d9(r))
else t.d0(t.aS(r,o-m))}else throw H.k(new T.dg("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.aj();--r
t.b=r
if(r<0)t.b=0}},
dr:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.ct(b)
switch(q){case 16:p=3+this.au(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=s}break
case 17:p=3+this.au(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=0}s=0
break
case 18:p=11+this.au(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.k(new T.dg("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kH.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Math Book",H.a([$.K,$.Z,$.aD],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.K,$.Z],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.D,$.Z,$.aP],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.K,$.Z],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.K,$.Z],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c7,$.av],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.Z],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.f9,$.n)
q.i(0,$.be,$.n)
q.i(0,$.fb,$.j)
q.i(0,$.aN,$.H)
q.i(0,$.cC,$.j)
p=$.m
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.r
o=o+n+" to stop "
m=$.L
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.Fp
n=[U.b]
q.i(0,new R.a_("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
q.i(0,new R.a_("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.r+" to stop "+$.L+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.o1(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
p="The "+m+" finds a massive library, filled with books. The "
l=$.r
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.x
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.a_("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.dQ(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.em,$.H)
s.i(0,$.cC,$.n)
p=$.m
o="The "+p+"  is approached by a "
l=$.r
s.i(0,new R.a_("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.L+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.r
s.i(0,new R.a_("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.L+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.d9(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
s.i(0,new R.a_("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.r+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.dQ(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.em,$.H)
t.i(0,$.cC,$.n)
t.i(0,$.c4,$.H)
t.i(0,$.tl,$.H)
r=$.m
q="The "+r+"  is approached by a "
p=$.r
q=q+p+" who offers them a grant to study "
o=$.ab
t.i(0,new R.a_("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.L+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.dQ(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
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
p=$.Fv
t.i(0,new R.a_("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.ec(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
t.i(0,new R.a_("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.L+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.r+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aC)}}
K.bR.prototype={}
L.fO.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a6)
s=A.i("Perfectly Generic Object",H.a([],[G.a2]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.Q(t,0)]))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cY,$.j)
q.i(0,$.be,$.H)
q.i(0,$.dO,$.j)
q.i(0,$.c4,$.n)
q.i(0,$.e5,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.x
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.bt+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.M("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.R(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j=this.f
j.i(0,new X.F(s,q,null),$.as)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.er,$.j)
s.i(0,$.eo,$.H)
s.i(0,$.eq,$.n)
s.i(0,$.cN,$.j)
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
g="The "+h+" lies slain by the "+p+"'s "+$.bt+". The "+p+" has won! "
s.i(0,new R.M("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.R(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(q,s,null),$.as)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.be,$.H)
t.i(0,$.ca,$.n)
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
l="The "+m+" lies slain by the "+r+"'s "+$.bt+". The "+r+" has won! "
t.i(0,new R.a_("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.R(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.uy(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
l=$.m
r="The "+l+" learns that all of the local "
m=$.r
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.x
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.bt+". The "+l+" has won! "
t.i(0,new R.M("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.R(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(s,t,null),$.as)},
A:function(a){return this.Q},
ah:function(a,b,c,d){var t=this.Q
this.r=new X.iz("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.ii]),H.a([],[M.hd]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.D()
this.E()
t=this.e
if($.$get$kK().Z(0,t))H.b0("Duplicate aspect id for "+this.A(0)+": "+t+" is already registered for "+J.cz($.$get$kK().n(0,t))+".")
$.$get$kK().i(0,t,this)},
gG:function(a){return this.Q}}
L.aT.prototype={}
M.kM.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Barbells",H.a([$.ah,$.cc,$.D],s),null,!1,"Strength Building Metal")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.fh,$.cd],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jv,$.Y],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.fh,$.cd],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aV,$.a8],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jv,$.Y,$.dP],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.D,$.bg],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.wa,$.cd],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.cd,$.aZ],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.e6,$.H)
q.i(0,$.c6,$.n)
q.i(0,$.cN,$.H)
p=$.m
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.r
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.L+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.a_("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.r
q.i(0,new R.a_("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.L+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.ec(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
n="The "+m+"  wanders into a bunch of "
p=$.r
q.i(0,new R.a_("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.fs(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.e6,$.n)
t.i(0,$.fc,$.n)
t.i(0,$.c6,$.n)
s=$.m
r="The "+s+" finds a team of underdog "
p=$.r
t.i(0,new R.a_("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.o1(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.r
s="A group of "+p+"s approach the "
r=$.m
s=s+r+". Apparently their sports team lost their coach to the "+$.x+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.L
t.i(0,new R.a_("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.ec(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
k=$.r
p="A group of "+k+"s approach the "
r=$.m
t.i(0,new R.a_("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.x+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ab+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,t,null),$.aC)}}
U.kQ.prototype={
O:function(a,b){var t=0,s=P.bw(),r,q,p,o
var $async$O=P.bB(function(c,d){if(c===1)return P.by(d,s)
while(true)switch(t){case 0:q=$.$get$vn()
p=q.createBufferSource()
o=p
t=3
return P.cL(J.yj(q,b),$async$O)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$O,s)},
$asds:function(){return[P.eZ]},
$ascb:function(){return[P.eZ,P.bi]}}
U.nb.prototype={
aP:function(a){return"audio/mpeg"}}
U.nF.prototype={
aP:function(a){return"audio/ogg"}}
U.oS.prototype={
O:function(a,b){var t=0,s=P.bw(),r,q,p
var $async$O=P.bB(function(c,d){if(c===1)return P.by(d,s)
while(true)switch(t){case 0:q=W.z0(b)
p=new W.i2(q,"canplaythrough",!1,[W.U])
t=3
return P.cL(p.gab(p),$async$O)
case 3:r=q
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$O,s)},
$asix:function(){return[W.f_]},
$ascb:function(){return[W.f_,P.y]}}
U.oT.prototype={}
U.oU.prototype={}
O.kS.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Cod Piece",H.a([$.O,$.a0,$.aO,$.T,$.Y],s),"God damn it, MI. ",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.tB,$.T,$.bQ],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aE,$.Y,$.bj,$.T,$.a9],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.O,$.aE,$.T,$.aW],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.cE,$.j)
t.i(0,$.hj,$.j)
t.i(0,$.cp,$.j)
t.i(0,$.du,$.j)
t.i(0,$.co,$.j)
t.i(0,$.f6,$.j)
r="After all the bullshit the "+$.x+" has put the native "
q=$.r
r=r+q+"s through, the "
p=$.m
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aw+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.L
m=[U.b]
t.i(0,new R.a5("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.A(),!1,!1,new Y.dT("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.r
n="A group of jubilant "+p+"s are following the "
q=$.m
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.L
t.i(0,new R.a5("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.x+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
q=$.m
t.i(0,new R.a5("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.x+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.A(),!1,!1,new Y.l3("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.x+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.m
q=q+r+" organizes a huge festival for all the "
p=$.r
t.i(0,new R.bG("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.p6.prototype={
O:function(a,b){var t=0,s=P.bw(),r
var $async$O=P.bB(function(c,d){if(c===1)return P.by(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$O,s)},
$aseJ:function(){return[P.y]},
$ascb:function(){return[P.y,P.y]}}
Y.o5.prototype={
aP:function(a){return"application/octet-stream"},
O:function(a,b){var t=0,s=P.bw(),r
var $async$O=P.bB(function(c,d){if(c===1)return P.by(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$O,s)},
$asds:function(){return[P.bi]},
$ascb:function(){return[P.bi,P.bi]}}
T.kX.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Mystical Vial of Blood",H.a([$.aP,$.bj,$.S,$.aJ],s),null,!1,"Vial of Not-ABs Oil")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.ap,$.bj,$.S,$.aU],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.O,$.bj,$.S,$.aJ,$.et],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.aW,$.S,$.aJ,$.et,$.aG],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.Y,$.mD,$.bj,$.aJ,$.S,$.a0],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dj,$.j)
q.i(0,$.to,$.j)
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
q.i(0,new R.a_("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.ec(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.r
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.L+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.x
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.m
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.bt+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.M("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.R(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.m
m="The "+n+" is playing against a "
l=$.r
m=m+l+" in a friendly game of "+$.ab+" Battle. With some smooth moves, they pull out a victory. The "+l+" comes over for a handshake. The "+n+" notices some ink dripping out of the "+l+"\u2019s arm. The "+l+" becomes confused. 'Ink? No this is blood from when I scraped my limb.' What the hell is blood?"
l="The "+n+" tries asking around what blood is, but every "+l+" asked just looks at them strangely and walks away. Finally, they run into a "
i=$.x
q.i(0,new R.a_("The True Meaning of Blood",!1,[new U.b(m),new U.b(l+i+" minion who mocks their lack of knowledge. 'If you don\u2019t even know what blood is maybe you should read a book sometime.'"),new U.b("The "+n+" takes the rude (and also dead) "+i+" minion\u2019s advice and gets their answer at a library. According to a biology textbook, people here have a liquid called blood running through tubes across their entire body. What a completely weird and alien concept.")],H.a([],k),R.FH(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.al)
i=this.f
i.i(0,new X.F(s,q,null),$.as)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cN,$.j)
s.i(0,$.co,$.H)
s.i(0,$.aN,$.H)
s.i(0,$.iH,$.j)
s.i(0,$.cp,$.H)
p=$.m
o="The "+p+"  and the "
n=$.dz
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
j=$.x
l=l+j+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+j+"."
h="Slaying the "+j+" proves the POWER OF TEAMWORK!"
s.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.R(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+j+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.dR(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
h=$.m
j="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
j=j+n+"s explains that before  "
p=$.x
j=j+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
n="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.bt+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.wM
s.i(0,new R.M("Chain the Towers",!1,[new U.b(j),new U.b(n),new U.b(l),new U.R(m,h,o)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
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
p="The "+l+" lies slain by the "+p+"'s "+$.bt+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.M("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.R(j,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
j=$.r
h=h+j+" on "+$.aw+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
j="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+j+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+j+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.e8+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a5("One Degree of Separation",!1,[new U.b(h),new U.b(n),new U.b(j)],H.a([],k),R.dQ(),!1,!1,new Y.bX("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.aw
j=j+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.e8+" is now more popular with your friends than you are."
s.i(0,new R.a5("Steal The Friends",!1,[new U.b(j),new U.b(h),new U.b(n)],H.a([],k),R.o2(),!1,!1,new Y.bX("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
n="The "+p+"  and the "
h=$.dz
n=n+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
j="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.x
j=j+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.b(n),new U.R(j,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.B(C.n)+".",o)],H.a([],k),R.dR(),!1,!1,new Y.hN(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.al)
i.i(0,new X.F(q,s,null),$.as)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.be,$.H)
t.i(0,$.ca,$.n)
r="In the wake of the defeat of the "+$.x+" it becomes really how isolated the individual "
q=$.r
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.m
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.e8+" to kick your ass, but luckily they have several."
t.i(0,new R.a5("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.ec(),!1,!1,new Y.bX("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.m
q="The "+o+" learns that two prominent "
p=$.r
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
n="In a dramatic reveal, the "+o+" discovers that "
m=$.x
n=n+m+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
l="The "+o+" confronts "+m+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+m+" lies slain by the "+o+"'s "+$.bt+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.L+"ing. "
t.i(0,new R.M("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(n),new U.R(l,"The deception of "+m+" continues with the defeat of the "+o+".",p)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i.i(0,new X.F(s,t,null),$.as)}}
T.kZ.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Pan's Pipe",H.a([$.a9,$.Y,$.bj,$.S],s),null,!1,"Smonkin Weeds Pipe")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.aY,$.S],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a8,$.D,$.bj,$.S],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.ar,$.D,$.aV,$.S,$.a0],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ca,$.n)
q.i(0,$.fc,$.j)
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
l="The "+m+" lies slain by the "+p+"'s "+$.bt+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.Fq
i=[U.b]
q.i(0,new R.M("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.R(j,p,l)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.f
m.i(0,new X.F(s,q,null),$.as)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.be,$.j)
s.i(0,$.fc,$.n)
s.i(0,$.aN,$.n)
s.i(0,$.c6,$.n)
s.i(0,$.ca,$.n)
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
h="The "+l+" lies slain by the "+p+"'s "+$.bt+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.M("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.R(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=$.m
p="\u201cThe "+h+" returns home from exploring their land, but a "
l=$.r
s.i(0,new R.a_("Slay the Windmills",!1,[new U.b(p+l+" is waiting at the door. Shaking heavily, she tells the "+h+" that her village is being terrorized by terrible monsters. The "+h+" agrees to help, and is lead to a plain just outside the village. The "+l+" points in one direction to indicate the monsters, but all the "+h+" can see are a bunch of windmills. Wait\u2026are the windmills the monsters?! The "+l+" nods her head. The "+h+" knows consorts can be pretty dumb, but this really takes the cake.\u201d "),new U.b("The "+h+" whacks the bases of a few windmills with their "+$.bt+" until they collapse. The "+l+"s from the village cheer and declare the "+h+" as a true hero and slayer of beasts. The "+h+" is happy to get praised, but is still a little frustrated by all of this nonsense. "),new U.b("Most of the windmills have been knocked over. The "+h+" starts to hit one of the last windmills, when suddenly it rears back and opens a toothy mouth in a roar. Holy Shit! It turns out windmill monsters aren\u2019t a delusion after all! The "+h+" slays the windmill monster in a tough strife and enjoys the "+l+" village\u2019s victory party.  ")],H.a([],i),R.d9(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.n)
m.i(0,new X.F(q,s,null),$.as)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cf,$.j)
t.i(0,$.m0,$.j)
t.i(0,$.fc,$.H)
t.i(0,$.ca,$.H)
r=$.m
q="The "+r+" is chilling in a "+$.r+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.x
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ab
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aw+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.bt+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.M("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.R(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.as)}}
M.fV.prototype={
eA:function(a){var t=this.a
if(!t.Z(0,a))return
return t.n(0,a)}}
Y.l0.prototype={
O:function(a,b){var t=0,s=P.bw(),r,q,p,o,n,m,l,k,j,i
var $async$O=P.bB(function(c,d){if(c===1)return P.by(d,s)
while(true)switch(t){case 0:q=J.eW(b,"\n")
p=P.y
o=P.cG(p,p)
n=P.cG(p,[P.eF,P.y])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.d3(k).bi(k).length===0)m=null
else if(m==null)m=C.c.bi(k)
else{j=C.c.bi(k)
i=C.c.K(m,0,C.c.ee(m,$.$get$vr())+1)+j
o.i(0,i,m)
if(!n.Z(0,m))n.i(0,m,P.a1(null,null,null,p))
J.yc(n.n(0,m),i)}}r=new M.fV(o,n)
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$O,s)},
$aseJ:function(){return[M.fV]},
$ascb:function(){return[M.fV,P.y]}}
A.l5.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.K,$.ah,$.aU,$.cc],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.K,$.aU],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.aP,$.aU],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aV,$.a8,$.aU],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.ap,$.aU],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.O,$.aU],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.D,$.aU],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cp,$.n)
q.i(0,$.cB,$.j)
q.i(0,$.c6,$.n)
p=$.m
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.r
o=o+n+"s are too scared to even "+$.L+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.x+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.a_("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.e6,$.H)
s.i(0,$.c6,$.j)
s.i(0,$.cB,$.j)
s.i(0,$.cE,$.j)
o=$.m
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aw
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.r
k=k+j+"s let out a braying "+$.L+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.Ft
s.i(0,new R.a_("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.A(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cO,$.H)
t.i(0,$.c5,$.n)
t.i(0,$.cB,$.j)
t.i(0,$.c6,$.n)
t.i(0,$.he,$.n)
r=$.m
q="The "+r+"  is approached by a Crafty "
o=$.r
q=q+o+" who offers them a magical "
n=$.ab
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.L
t.i(0,new R.a_("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aC)}}
S.bD.prototype={
A:function(a){return H.B(new H.dW(H.kz(this),null))+": "+this.c},
gG:function(a){return this.c}}
S.ij.prototype={}
S.ml.prototype={}
M.li.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Can of Spray Paint",H.a([$.az,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.K,$.aj,$.aU,$.aD],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.tS,$.D,$.at],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.K,$.aj,$.aD],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.az,$.an,$.K],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.aj,$.K],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.aj,$.aF,$.an],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.az,$.aj],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.ar,$.aj,$.D],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.O,$.aj],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.K,$.aj,$.aD],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.n)
q.i(0,$.cC,$.j)
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
q.i(0,new R.a_("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.e6,$.H)
s.i(0,$.c6,$.n)
s.i(0,$.cB,$.H)
s.i(0,$.be,$.n)
s.i(0,$.cE,$.j)
o=$.m
n="The "+o+" finds a troupe of dejected looking "
l=$.r
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aw
l=l+n+" "
k=$.ab
s.i(0,new R.a_("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.L+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hj,$.H)
t.i(0,$.cp,$.H)
t.i(0,$.f6,$.H)
t.i(0,$.c5,$.H)
t.i(0,$.be,$.n)
t.i(0,$.aN,$.n)
r=$.m
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.L
q=q+o+"ingworth, "
n=$.r
q=q+n+" heiress to the "+$.ab+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.Fj
t.i(0,new R.a_("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.A(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aC)}}
Z.ph.prototype={
eO:function(){var t,s,r
t=document
s=t.createElement("ul")
this.c=s
r=s.style
r.border="3px solid red"
r=s.style
r.backgroundColor="#ffd6d6"
this.b.appendChild(s)
s=t.createElement("ul")
this.d=s
r=s.style
r.border="3px solid yellow"
r=s.style
r.backgroundColor="#fffac3"
this.b.appendChild(s)
t=t.createElement("ul")
this.e=t
s=t.style
s.border="3px solid green"
s=t.style
s.backgroundColor="#cdffce"
this.b.appendChild(t)
t=this.a
s=J.aq(t)
if(s.P(t,$.x6)){Z.W("active/passive player targeting",this.d)
Z.W("GHAO/DQON: target condition (land or entity) entity named X is dead.  Need so GHAO summons DQON on death.(not dead just checksk for active and alive).",this.c)
Z.W("target players with a Disaster/Illegal/Corrupt sprite (diaster for rage virus)",this.c)
Z.W("shogun:ability to target entities with particular serializable scenes (lets me give them a scene and then target them, basically mark them as my minion)",this.c)
Z.W("MyStatIsGreaterThanValue as a land filter, tg says",this.c)
Z.W("shogun: turn on codtier easter egg",this.c)
Z.W("shogun: ability to set class/aspect (only works on players)",this.c)
Z.W("optional life sim card for a big bad (given on summon)",this.d)
Z.W("target entity has name with word X (lets big bads target specific other big bads, like that clown and pistol shrimp, or shogun and big meat jr)",this.c)
Z.W("SEASONAL BIG BADS, (ultimate dad for fathers day in us/uk/etc) target condition for land/entity of MONTH IS, and DAY is. (could do day of week but that would just be a bitch to debug i think). DO NOT OVER USE THIS. easter, halloween, april fools, xmas, things like that. a big bad that only shows up on the 13th of each month oh god. fuck yes.",this.c)
Z.W("every 13th any time a big bad tries to spawn, shogun spawns instead",this.c)
Z.W("new years eve is grandpa with a knife, new years day is baby with a gun (actually two). spot the refrance",this.c)
Z.W("change player hair/blood color",this.e)
Z.W("list of birthday big bads, can't be overridden",this.c)
Z.W("allow you to add references to optional data, like land denizen, consorts, owner or player's land name (will not work if you aren't targeting a land/player but that's on you, yo)",this.d)
Z.W("have defeatScenes that the big bad gives to all players when they activate. defeat scenes have a locked specialTarget of the big bad. can't target anything else (but can have target conditions to turn on/off the scene, like isUnconditionallyImmortal or isStrifable). these scenes make them mortal, strifable, weaker, etc. ",this.c)
Z.W("fuck the world, make game entities serializable first before i modify big bads too much.",this.c)
Z.W("Combo players get special serialized scenes about helping the native players god tier, skip quests, etc.",this.c)
Z.W("big bads need low, medium, high values for all stats. what am i saying i mean 'Planetary, Galactic, Cosmic'. sorry about that, shogun",this.c)
Z.W("target condition: winning players (purple frog, shogun etc pick this) useful for big giant boss fights at the last minute, or big bads that change their behavior at the last minute",this.c)
Z.W("once a game entities specibus/sylladex is serializable, shove that into big bads too",this.c)
Z.W("fucking do SOMETHING with land hp, maybe it auto blows up on 0, or it's value effects associated entity stats? (especially need for black king/queen)",this.d)
Z.W("action effect, add land feature (smells like sweet, has consorts, etc, has strong denizen, etc)",this.d)
Z.W("action effect remove action with datastring of x",this.c)
Z.W("action effect, remove land feature (smells like sweet, has consorts, etc, has strong denizen, etc)",this.d)
Z.W("big bads need 0 or more custom fraymotif names",this.d)
Z.W("LAND EFFECT: set quests to done (pre, denizen or post) (doing this effectively skips them, no reward of any kind)",this.d)
Z.W("defeat system is list of scenes (like start or scenes) BUT the scenes are given to the player uppong summoning, not used by big bad",this.c)
Z.W("hasSpritePrototypedWith (if they aren't a player automatically false)",this.e)
Z.W("isPrototypedWith (for sprites or carapace with rings)",this.d)
Z.W("isFromDystopia (i.e. Troll Empress)",this.d)
Z.W("hasQuirk",this.d)
Z.W("put shogun in session 13, and as the effect of killing FU meta player",this.c)
Z.W("hasRelationshipWithMe (either 'any' or list of relatinships types",this.d)
Z.W("land condition: isMeteored (i.e. reckoning is going)",this.e)
Z.W("isDoomed",this.e)
Z.W("smokey the bear needs shovelkind",this.d)
Z.W("effect entity: create minion (from scratch, with set name, like Science experiment or Living Puppet or whatever)",this.d)
Z.W("effect: add fraymotif named x",this.d)
Z.W("land target based on planet health",this.d)
Z.W("effect: set god destiny to false (put this on lands means they destroyed quest bed)",this.d)
Z.W("isBrainGhost",this.e)
Z.W("target based on 'recently broke up' or 'recently got together' with someone",this.e)
Z.W("ability to access pesterchum as an action (i guess they'd message the first player in their list, and ignoring it otherwise?)",this.e)
Z.W("big bads have intro mod flavor text (like dystopic empire)",this.d)
Z.W("teach AB to write bigBadSummaries to cache",this.d)
Z.W("FORM BUG: big bad needs to be in default state before loading still, need to refresh page to clear shit out",this.c)
Z.W("big bads have outro mod flavor text (if they aren't defeated, how do they effect child universe, like dystopic empire)",this.d)
Z.W("hasStat over/under X/MyValue target",this.c)
Z.W("setUnavailable slash waste time (check to see when bigbads proc)",this.c)
Z.W("give fraymotif named X effect",this.c)
Z.W("give item (from list) effect",this.c)
Z.W("destroy all items in specibus",this.d)
Z.W("take all items in specibus",this.d)
Z.W("ressurrect",this.d)
Z.W("createRelationship of Type X with me",this.e)}if(s.P(t,$.x8)){Z.W("ability to serialize a land (for now just major parts, no traits).",this.c)
Z.W("ability to serialize a session (players, carapaces, big bads, etc)",this.c)
Z.W("press button, get datastring for land",this.c)
Z.W("create/destroy players",this.c)
Z.W("ability to save/load an entity (carapace, player, whatever)",this.c)
Z.W("load old session url maybe?",this.d)
Z.W("any loaded big bads should be part of serialized session",this.d)
Z.W("Sylladex Section lets you remove the selected item from the sylladex",this.c)
Z.W("can serialize a sylladex (just item numbers in allItems list, assume is stable)",this.c)
Z.W("can save a session to a .txt file",this.c)
Z.W("can load a session from a .txt file",this.c)
Z.W("if only one player, use dead session controller",this.d)
Z.W("make sure it works for special sessions like 13 or 413! (fix bugs in AB this caused)",this.c)
Z.W("Each Player has a QuirkSection that lets  you modify quirks.",this.d)
Z.W("players/carapaces get one custom fraymotif name (all custom fraymotifs just do everything at once)",this.d)
Z.W("PlayerSection lets you pick initial relationships. (drop down of types, drop down of targets)",this.c)
Z.W("Can give a session a Name.",this.e)
Z.W("Can choose 13 sessions to save to localStorage (if they aren't too big? Only have 2.2 mb)",this.e)
Z.W("can view list of your saved sessions, load them into this page, etc",this.e)
Z.W("pretty everything up??? ask PL for help???",this.e)}if(s.P(t,$.x7)){Z.W("make AB sane",this.c)
Z.W("make sure custom sessions work both in general and with session customiser",this.c)}}}
T.lo.prototype={}
V.lq.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Trendy Fabric",H.a([$.az,$.O],s),null,!1,"Weird Tasting Candy Paper")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.az,$.tH,$.et],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.D,$.tL,$.aM],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jt
r=A.i("Broom",H.a([r,$.Y,$.ah,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.Y,$.tU,$.ah],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.O,$.aZ,$.bj,$.az,$.hq],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.az,$.O],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aG,$.cc,$.D,$.bn],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.az,$.K],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bn],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.D,$.ar,$.ah,$.cc,$.tG],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bQ],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bQ,$.jw],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.az,$.bS,$.aR],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.ap,$.bk,$.aY],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.ap,$.bk],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.az,$.ap,$.aJ],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cE,$.n)
q.i(0,$.co,$.n)
q.i(0,$.cp,$.H)
p=$.m
o="The "+p+" is visited by a Beautiful "
n=$.r
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ab
l=[U.b]
q.i(0,new R.a_("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.L+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.A(),!1,!1,new Y.il("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cp,$.j)
s.i(0,$.c6,$.n)
s.i(0,$.f6,$.j)
s.i(0,$.du,$.n)
s.i(0,$.be,$.j)
p=$.m
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ab
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.r
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.L+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.Fr
s.i(0,new R.a_("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hf,$.j)
t.i(0,$.be,$.n)
t.i(0,$.f7,$.j)
t.i(0,$.aN,$.n)
t.i(0,$.iH,$.j)
r=$.m
q="The "+r+" finds a loom, and a Wizened "
p=$.r
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ab
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.L+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a_("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aC)}}
U.lr.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aD,$.a8,$.K,$.aE,$.S,$.a0],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aF,$.bj,$.S,$.aE],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.aY,$.bj,$.S,$.aE],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.aP,$.S,$.bQ],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.aP,$.S,$.bn,$.aE,$.aW,$.c_,$.aX],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aG,$.aX,$.aE,$.K,$.S],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dO,$.j)
q.i(0,$.cY,$.n)
q.i(0,$.fc,$.H)
q.i(0,$.be,$.H)
q.i(0,$.c4,$.n)
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
n="The "+k+" lies slain by the "+p+"'s "+$.bt+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.M("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.R(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.as)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dO,$.j)
s.i(0,$.cY,$.n)
s.i(0,$.es,$.al)
s.i(0,$.en,$.n)
s.i(0,$.tl,$.n)
s.i(0,$.dj,$.n)
s.i(0,$.cY,$.n)
s.i(0,$.be,$.H)
s.i(0,$.c4,$.n)
s.i(0,$.dk,$.n)
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
m="The "+h+" lies slain by the "+p+"'s "+$.bt+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.M("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.R(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.d9(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ab
p=p+l+"s alike. "
l=$.r+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.x
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.bt+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.M("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.R(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.as)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.c4,$.j)
t.i(0,$.vP,$.al)
t.i(0,$.f9,$.H)
r=$.m
q="The "+r+" finds a small dungeon bearing the image of "
p=$.x
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.r+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.M("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.R(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.d9(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
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
q="The "+l+" lies slain by the "+k+"'s "+$.bt+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.Fi
t.i(0,new R.M("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.R(o,k,q)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.as)}}
Z.ls.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Dream Diary",H.a([$.K,$.aD,$.S],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aF,$.bj,$.ah,$.S,$.a0],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aF,$.bj,$.S],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hf,$.n)
q.i(0,$.f7,$.j)
q.i(0,$.aN,$.n)
q.i(0,$.iH,$.n)
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
l=$.Fo
k=[U.b]
q.i(0,new R.M("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.R(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.z)
l=this.f
l.i(0,new X.F(s,q,null),$.as)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cf,$.n)
s.i(0,$.f7,$.j)
s.i(0,$.dw,$.n)
s.i(0,$.cX,$.n)
s.i(0,$.lX,$.n)
s.i(0,$.cB,$.j)
p=$.m
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.r
n=n+m+"s are even starting to snigger and "
j=$.L
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.x
s.i(0,new R.M("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.R("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l.i(0,new X.F(q,s,null),$.as)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dN,$.j)
t.i(0,$.iC,$.n)
t.i(0,$.aN,$.n)
t.i(0,$.cX,$.j)
t.i(0,$.lX,$.j)
t.i(0,$.f7,$.n)
r=$.m
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.x
t.i(0,new R.M("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aw+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.r+" is "+$.L+"ing in reverse. Another is in a "+$.ab+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.R("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l.i(0,new X.F(s,t,null),$.as)}}
X.iz.prototype={}
X.ii.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.hd]]}}}
M.hd.prototype={}
U.lU.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Fluthulu Poster",H.a([$.O,$.aZ,$.aX,$.bo],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.O,$.aZ,$.aX],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aG,$.aF,$.aY,$.fj,$.aO],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aF,$.wh,$.eu,$.aO],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aF,$.c_,$.bk,$.aX],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aD,$.K,$.aB,$.aX],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.K,$.a3,$.ah],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.K,$.a3,$.ah],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.K,$.a3,$.c_,$.aX,$.bo],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aG,$.av,$.a3,$.ah,$.aO],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aG,$.tC,$.a3,$.ah,$.aO],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.f8,$.al)
q.i(0,$.co,$.n)
q.i(0,$.ca,$.n)
q.i(0,$.cO,$.H)
p=$.m
o="The "+p+" learns of a Beautiful "
n=$.r
o=o+n+" who has been kidnapped by the vial "
m=$.x
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ab
j=[U.b]
q.i(0,new R.a_("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.j)
s.i(0,$.dj,$.j)
s.i(0,$.iD,$.n)
s.i(0,$.c4,$.j)
s.i(0,$.es,$.j)
s.i(0,$.hi,$.n)
o=$.m
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.r
s.i(0,new R.a_("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.j)
t.i(0,$.hh,$.n)
t.i(0,$.c4,$.j)
t.i(0,$.dM,$.n)
t.i(0,$.em,$.n)
t.i(0,$.to,$.n)
r=$.m
q="The "+r+" finds a group of three "
o=$.r
q=q+o+"s "
n=$.L
t.i(0,new R.a_("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aC)}}
N.ac.prototype={
A:function(a){return H.B(new H.dW(H.kz(this),null))+": "+H.B(this.b)}}
O.cb.prototype={
b0:function(a){var t=0,s=P.bw(),r,q=this,p
var $async$b0=P.bB(function(b,c){if(b===1)return P.by(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cL(q.aR(a),$async$b0)
case 3:r=p.O(0,c)
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$b0,s)}}
O.ds.prototype={
b7:function(a){var t=0,s=P.bw(),r
var $async$b7=P.bB(function(b,c){if(b===1)return P.by(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$b7,s)},
cH:function(a){var t=0,s=P.bw(),r,q=this
var $async$cH=P.bB(function(b,c){if(b===1)return P.by(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.z1([J.vc(a)],q.aP(0),null))
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$cH,s)},
aR:function(a){var t=0,s=P.bw(),r,q=this,p,o
var $async$aR=P.bB(function(b,c){if(b===1)return P.by(c,s)
while(true)switch(t){case 0:p=P.bi
o=new P.bm(0,$.ao,null,[p])
W.vX(a,null,q.aP(0),null,null,"arraybuffer",null,null).b1(new O.kW(new P.dY(o,[p])))
r=o
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$aR,s)},
$ascb:function(a){return[a,P.bi]}}
O.kW.prototype={
$1:function(a){this.a.az(0,H.kA(J.yr(a),"$isbi"))},
$S:function(){return{func:1,args:[W.e9]}}}
O.eJ.prototype={
b7:function(a){var t=0,s=P.bw(),r,q,p,o,n
var $async$b7=P.bB(function(b,c){if(b===1)return P.by(c,s)
while(true)switch(t){case 0:a.toString
q=H.cS(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hO(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$b7,s)},
aR:function(a){var t=0,s=P.bw(),r
var $async$aR=P.bB(function(b,c){if(b===1)return P.by(c,s)
while(true)switch(t){case 0:r=W.vW(a,null,null)
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$aR,s)},
$ascb:function(a){return[a,P.y]}}
O.ix.prototype={
aR:function(a){var t=0,s=P.bw(),r
var $async$aR=P.bB(function(b,c){if(b===1)return P.by(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$aR,s)},
b7:function(a){return H.b0("Element format doesn't read from buffers")},
$ascb:function(a){return[a,P.y]}}
V.ma.prototype={
aP:function(a){return"font/opentype"},
O:function(a,b){var t=0,s=P.bw(),r
var $async$O=P.bB(function(c,d){if(c===1)return P.by(d,s)
while(true)switch(t){case 0:t=3
return P.cL(A.hA("scripts/Rendering/text/opentype.min.js",!1),$async$O)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$O,s)},
$asds:function(){return[R.hk]},
$ascb:function(){return[R.hk,P.bi]}}
Z.iy.prototype={}
E.iM.prototype={}
E.nE.prototype={}
E.N.prototype={
A:function(a){var t="["+J.cz(this.a)+" x "+H.B(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fP.prototype={
A:function(a){var t="[(Random from "+P.tZ(this.d,"(",")")+") x "+H.B(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kL.prototype={
A:function(a){return"[Stats assigned from player Interests x"+H.B(this.b)+"]"}}
Y.mf.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aD,$.T,$.K,$.a0,$.mH],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aF,$.T,$.aE],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.O,$.T,$.aE],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.tQ,$.T,$.aE],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.m2,$.n)
t.i(0,$.ca,$.j)
t.i(0,$.dk,$.H)
t.i(0,$.dv,$.j)
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
t.i(0,new R.M("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.R(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
o=$.m
t.i(0,new R.a5("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.x+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.r+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.A(),!1,!1,new Y.dT("Rewards/no_reward.png",null),1,null,null),$.z)
o=$.r
j="Now that the "+o+"s are free from the reign of "+$.x+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.m
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.L
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aw+" Quest Online: The "+$.ab+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.fy
t.i(0,new R.a5("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p="The "+$.x+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.m
p=p+o+" shows the "
r=$.r
t.i(0,new R.bG("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.L+"s in time to stop them.    ")],H.a([],i),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.mg.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Sherpa Parka",H.a([$.bn,$.T,$.ch],s),"Clearly the best class uses this.",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a0,$.bn,$.aD,$.K,$.T,$.Z],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.D,$.T,$.aV],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.D,$.T,$.a8,$.Z],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.m2,$.j)
t.i(0,$.ca,$.j)
t.i(0,$.dk,$.n)
t.i(0,$.dv,$.j)
r="Now that the "+$.x+" is out of the way, a group of "
q=$.r
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.m
o=[U.b]
t.i(0,new R.a5("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.L+", but they are happy.")],H.a([],o),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.x+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.m
t.i(0,new R.bG("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.r+" "+$.L+"s in time to stop them.    ")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.mh.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Doll",H.a([$.tQ,$.az,$.au,$.S],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Soul Puppet",H.a([$.Y,$.au,$.S,$.a0,$.aX],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.tK,$.S],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.K,$.S,$.aB],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.an,$.aP,$.S],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.en,$.H)
q.i(0,$.ep,$.j)
q.i(0,$.c6,$.n)
p=$.m
o="The "+p+", guided by a "+$.r+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.x
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.bt+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.M("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.R(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
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
q.i(0,new R.M("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.R(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.o2(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h=this.f
h.i(0,new X.F(s,q,null),$.as)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cB,$.j)
s.i(0,$.iD,$.j)
s.i(0,$.fc,$.n)
s.i(0,$.c4,$.j)
s.i(0,$.cp,$.n)
s.i(0,$.dk,$.H)
p=$.m
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ab
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.x
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.bt+". The "+p+" is victorious. "
s.i(0,new R.M("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.R(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j="Now that the "+$.x+" has been defeated, a Copy "
p=$.m
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.r
j=j+k+"s "
l=$.L
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.e8+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a5("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.ec(),!1,!1,new Y.bX("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.x
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.M("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.R(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.d9(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h.i(0,new X.F(q,s,null),$.as)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iB,$.j)
t.i(0,$.cp,$.j)
t.i(0,$.m1,$.j)
t.i(0,$.f6,$.n)
t.i(0,$.hi,$.j)
t.i(0,$.co,$.n)
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
t.i(0,new R.a5("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.fs(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
q=$.m
m="The "+q+"  and the "
r=$.dz
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.x
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.M("Flushed Shipping Dungeon",!1,[new U.b(m),new U.R(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.B(C.n)+".",n)],H.a([],i),R.dR(),!1,!1,new Y.iK(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.al)
n=$.m
r="The "+n+"  and the "
q=$.dz
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.x
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.M("Pitched Shipping Dungeon",!1,[new U.b(r),new U.R(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.B(C.n)+".",m)],H.a([],i),R.dR(),!1,!1,new Y.jR(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.al)
h.i(0,new X.F(s,t,null),$.aC)}}
B.mi.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Family Ashes",H.a([$.aG,$.ar,$.T,$.aE,$.bY],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a0,$.K,$.T,$.aE,$.mE],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aD,$.T,$.aj],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.w6,$.T,$.ty,$.mE],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.tz,$.T,$.at,$.mE],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.cf,$.n)
r=$.x
q="With the death of the "+r+", it now falls to the "
p=$.m
o=[U.b]
t.i(0,new R.a5("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.r+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
r="The "+$.x+" has released the frogs into the "
p=$.m
t.i(0,new R.bG("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
this.x.i(0,new X.F(s,t,null),$.bL)}}
X.mk.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Wand",H.a([$.Y,$.S,$.a3,$.bl],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.bl,$.bs,$.S,$.aQ,$.a9,$.a0,$.a3],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bT,$.mD,$.S,$.a3,$.aU,$.bl],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.bl,$.aQ,$.S,$.ar],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aF,$.aQ,$.S,$.bl],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.tk,$.j)
q.i(0,$.co,$.n)
q.i(0,$.aN,$.j)
q.i(0,$.cX,$.j)
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
n=$.Fl
i=[U.b]
q.i(0,new R.M("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.R(k,p,j)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.m
j="The "+n+" has slain "+$.x+", but there\u2019s still one thing left to do. The land is infested with terrifying creatures called angels and it\u2019s been creeping the "+n+" out the whole time. Clearly their ultimate quest for this land must be to eliminate all the angels and free the land from their terror."
p="Angel killing is a lot harder than the "+n+" expected, and they were already expecting it to be pretty tough. The angels have huge amounts of health, and they\u2019re now completely pissed off over the whole exterminating them thing going on. The land is 100 times more terrifying now with swarming angels, but things are always darkest before the dawn! The "+n+" continues on their righteous quest."
k="All of the horrible angels have finally been slain. The land has been saved from their menace. The "+n+" excitedly waits for their quest reward, but nothing happens. They go to some of the "
l=$.r
q.i(0,new R.a5("Kill the Angels",!1,[new U.b(j),new U.b(p),new U.b(k+l+" villages to ask for a reward, but they are refused. Frankly, the "+l+"s would have preferred the angels remained instead of hiding in their homes while the "+n+" was waging their one person war. Maybe genocide wasn\u2019t the right answer after all?")],H.a([],i),R.d9(),!1,!1,new Y.dT("Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.as)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.j)
s.i(0,$.he,$.n)
s.i(0,$.dw,$.j)
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
s.i(0,new R.M("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.R(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.as)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.du,$.H)
t.i(0,$.cC,$.j)
t.i(0,$.cX,$.j)
r=$.m
q="The "+r+" finds a grey town of despondant "
p=$.r
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.x
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ab
t.i(0,new R.M("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.R("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.m
o="The "+r+" discovers a group of "
p=$.r
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.x
t.i(0,new R.M("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.R("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.fs(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.F(s,t,null),$.as)}}
Q.mr.prototype={
b0:function(a){var t=0,s=P.bw(),r,q,p
var $async$b0=P.bB(function(b,c){if(b===1)return P.by(c,s)
while(true)switch(t){case 0:q=W.vY(null,a,null)
p=new W.i2(q,"load",!1,[W.U])
t=3
return P.cL(p.gab(p),$async$b0)
case 3:r=q
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$b0,s)},
$asds:function(){return[W.fg]},
$ascb:function(){return[W.fg,P.bi]}}
Q.nU.prototype={
aP:function(a){return"image/png"},
O:function(a,b){var t=0,s=P.bw(),r,q=this,p,o,n
var $async$O=P.bB(function(c,d){if(c===1)return P.by(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cL(q.cH(b),$async$O)
case 3:p=n.vY(null,d,null)
o=new W.i2(p,"load",!1,[W.U])
t=4
return P.cL(o.gab(o),$async$O)
case 4:r=p
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$O,s)}}
Q.nR.prototype={
aP:function(a){return"image/png"},
O:function(a,b){var t=0,s=P.bw()
var $async$O=P.bB(function(c,d){if(c===1)return P.by(d,s)
while(true)switch(t){case 0:throw H.k("Read NYI")
return P.bz(null,s)}})
return P.bA($async$O,s)},
$asds:function(){return[Q.jQ]},
$ascb:function(){return[Q.jQ,P.bi]}}
V.mu.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Inkwell",H.a([$.aP,$.bj,$.S,$.bs],s),null,!1,"Vial of Not-ABs Oil")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Splatfest T-shirt",H.a([$.O,$.aZ,$.S,$.tF],s),null,!1,"Mechandising Party")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.O,$.bj,$.S,$.aJ,$.et],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.aW,$.S,$.aJ,$.et,$.aG],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.Y,$.mD,$.bj,$.aJ,$.S,$.a0],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cN,$.j)
q.i(0,$.co,$.H)
q.i(0,$.aN,$.H)
q.i(0,$.iH,$.j)
q.i(0,$.cp,$.H)
q.i(0,$.vL,$.j)
p=$.m
o="The "+p+"  and the "
n=$.dz
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
k=$.x
l=l+k+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+k+"."
j="Slaying the "+k+" proves the POWER OF TEAMWORK!"
i=[U.b]
q.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.R(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+k+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",j)],H.a([],i),R.dR(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
j=$.m
k="The "+j+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
k=k+n+"s explains that before  "
p=$.x
k=k+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+j+" vows to help. "
n="The "+j+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+j+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+j+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+j+"'s "+$.bt+". The "+j+" is finally free to restore the chains, bringing peace and understanding to the land. "
j="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+j+"."
p=$.wM
q.i(0,new R.M("Chain the Towers",!1,[new U.b(k),new U.b(n),new U.b(l),new U.R(m,j,o)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
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
p="The "+l+" lies slain by the "+p+"'s "+$.bt+". The "+p+" is finally able to see what lies at the top of the "+j+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
q.i(0,new R.M("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.R(k,"The "+j+" Tower is more at risk than ever before.",p)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
k=$.r
j=j+k+" on "+$.aw+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
k="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+k+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+k+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.e8+" has so many friends, they have to assume everyone in this fight is already in their friend list."
q.i(0,new R.a5("One Degree of Separation",!1,[new U.b(j),new U.b(n),new U.b(k)],H.a([],i),R.dQ(),!1,!1,new Y.bX("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.aw
k=k+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
j="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.e8+" is now more popular with your friends than you are."
q.i(0,new R.a5("Steal The Friends",!1,[new U.b(k),new U.b(j),new U.b(n)],H.a([],i),R.o2(),!1,!1,new Y.bX("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
n="The "+p+"  and the "
j=$.dz
n=n+j+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
k="The "+p+"  and the "+j+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.x
k=k+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+j+" together."
q.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.b(n),new U.R(k,"The "+p+" and "+j+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.B(C.n)+".",o)],H.a([],i),R.dR(),!1,!1,new Y.hN(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.al)
o=this.f
o.i(0,new X.F(s,q,null),$.as)
q=H.a(["Ink","Paper","Color","Quills"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.be,$.H)
s.i(0,$.he,$.H)
s.i(0,$.cC,$.H)
s.i(0,$.c6,$.j)
s.i(0,$.f9,$.H)
p=$.m
n="The "+p+" comes across an enormous wall. Strange symbols are spread across its face. An indent in the wall indicates a door will appear if the puzzle of the wall is solved."
m="The "+p+" is getting annoyed trying to solve the wall. They start inking graffiti on the wall out of spite. Suddenly, they realize that some of the symbols light up when the ink touches it."
l="The "+p+" spends a good hour painting the wall. A number of symbols light up but nothing else happens. The "+p+" realizes unhappily that they probably need to paint only the symbols. Shit."
k="The wall is finally clean except for the appropriate symbols and the door is open. The "+p+" is eager to fight "
j=$.x
k=k+j+" and give some payback for the terrible wall puzzle. "
h=j+" is defeated and the "+p+"\u2019s payback is complete. "
s.i(0,new R.M("Paint the Wall",!1,[new U.b(n),new U.b(m),new U.b(l),new U.R(k,"With the "+p+"\u2019s defeat, "+j+" closes the door repaints the outside wall, just to be a jerk.",h)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.H)
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
s.i(0,new R.M("Framed for Vandalisim",!1,[new U.b(j),new U.b(k),new U.b(l),new U.R(m,n+" begins making more doppelgangers to tarnish the "+h+"\u2019s good name.",p)],H.a([],i),R.d9(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.m
h="The "+p+" is playing against a "
n=$.r
h=h+n+" in a friendly game of "+$.ab+" Battle. With some smooth moves, they pull out a victory. The "+n+" comes over for a handshake. The "+p+" reaches out what would be their hand, if it wasn\u2019t currently a melting stump. The "+p+" screams in horror, but their hand instantly reforms. What the hell was that about?"
m=$.x
l="The entrance to "+m+"\u2019s lair is blocked by huge metal bars, with no apparent mechanisms to open it. The "+p+" walks around the lair looking for another way in, but suddenly everything starts growing! No wait, it\u2019s actually just the "+p+" slowly dissolving into a puddle. Again?! The dissolving process is once again reversed after a bunch of screaming."
n="The "+p+" makes their way to a secluded hut. A wizened "+n+" hermit sits in a meditative pose. The "+p+" says they were told that he could explain what was happening to the "+p+". The "+n+" nods and tells the "+p+" that their aspect was meant for a race of squid-like creatures with the power to turn into ink. Having the aspect means they are partially a squid now and are saddled with the same ability. The "+p+" will have to learn to control their new power if they wish to succeed in the session."
m="After some time practicing the "+p+" has gotten the hang of their strange ability and returns to "+m+"\u2019s lair. They proceed to melt into a squid-like form make of ink and effortlessly slide through the bars. Jeez that feels weird. "+m+" has been very impatient waiting for the "+p+" and immediately starts the strife!"
k="The "+p+" raises a hand in victory, and then has to shake said hand to stop it from turning to ink again. It sure is annoying being a squid now."
s.i(0,new R.M("An Inky Situation",!1,[new U.b(h),new U.b(l),new U.b(n),new U.R(m,"With a great blow, the "+p+" is slammed into a wall hard and turns into a puddle with eyes, before reforming. This would be funny if the "+p+" hasn\u2019t possibly died from the impact.",k)],H.a([],i),R.FI(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
o.i(0,new X.F(q,s,null),$.as)
s=H.a(["Nostalgia","Video Games","Ninety","Cartoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.em,$.j)
t.i(0,$.co,$.H)
t.i(0,$.aN,$.H)
t.i(0,$.c6,$.j)
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
t.i(0,new R.a_("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],i),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
r="The "+p+" has finally tracked down the location of "
q=$.x
t.i(0,new R.M("Beat the Games",!1,[new U.b(r+q+"\u2019s lair. Surprisingly it\u2019s inside a gaudy arcade rather than a dungeon. The door to "+q+"\u2019s lair is locked, with the key inside a prize vendor. The "+p+" will need to win enough tickets to earn that key."),new U.b("The "+p+" is struggling to win any of the arcade games; they all seem impossibly hard. A "+q+" minion mocks them. They tell the "+p+" true gamers can easily beat any of these games."),new U.b("The "+p+" discovers the ultimate secret. Most of these games have cheat codes. Super difficult games are a lot easier when you can give yourself 30 lives."),new U.R("With enough tickets earned, the "+p+" takes the key and enters "+q+"\u2019s lair. "+q+" has been impatiently waiting. It\u2019s time to strife! ","A giant game over sign drops down from the ceiling.","The "+p+" beats "+q+", just like all the hard games they had to play. Who\u2019s a true gamer now?")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
o.i(0,new X.F(s,t,null),$.bL)}}
B.hp.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a6)
s=A.i("Perfectly Generic Object",H.a([],[G.a2]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.Q(t,0)]))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cY,$.j)
q.i(0,$.be,$.H)
q.i(0,$.dO,$.j)
q.i(0,$.c4,$.n)
q.i(0,$.e5,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.a_("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.A(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.er,$.j)
s.i(0,$.eo,$.H)
s.i(0,$.eq,$.n)
s.i(0,$.cN,$.j)
s.i(0,$.cf,$.H)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.a_("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.A(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.be,$.H)
t.i(0,$.ca,$.n)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
t.i(0,new R.a_("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.A(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
r="The "+p+" learns that all of the local "
q=$.r
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.L
t.i(0,new R.a_("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uy(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
n.i(0,new X.F(s,t,null),$.aC)},
A:function(a){return this.ch},
gG:function(a){return this.ch}}
A.a6.prototype={
ghj:function(){var t,s,r,q,p,o
t=H.a([],[P.y])
s=new A.jT(null,null)
s.d4(this.r.a)
if(this.x===0)return t
r=P.d6(G.z8(this.r),!0,G.a2)
C.b.d7(r,new A.mL())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bV)(r),++p){o=r[p]
if(!(o instanceof G.ae||o.ge3().length===0))t.push(" "+Y.Hq(s.hV(o.ge3())))}return t},
gbB:function(){var t,s,r
for(t=this.r,s=new P.dD(t,t.r,null,null,[null]),s.c=t.e,r=0;s.F();)r+=s.d.gbB()
return r},
gh9:function(){var t=this.r
return new H.eP(t,new A.mK(),[H.Q(t,0)])},
ght:function(){var t,s,r,q,p
for(t=this.ghj(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bV)(t),++q)r+=t[q]+" "
return r+this.e},
A:function(a){return this.ght()},
ay:function(a,b){var t=b.gbB()-this.gbB()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bC(t)},
H:function(a,b,c,d,e){var t,s,r
t=P.jD(b,null)
this.r=t
if(t.a===0)t.h(0,$.wc)
s=P.jD(this.gh9(),null)
for(t=new P.dD(s,s.r,null,null,[null]),t.c=s.e;t.F();){r=t.d
this.r.av(0,r.geR())
this.r.am(0,r)}$.$get$wC().push(this)},
$isbI:1,
$asbI:function(){return[A.a6]}}
A.mL.prototype={
$2:function(a,b){return a.gei()-C.a.bC(b.gei())},
$S:function(){return{func:1,args:[G.a2,G.a2]}}}
A.mK.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a2]}}}
N.mS.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Gavel",H.a([$.Y,$.mC],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aF,$.aW],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.O,$.az],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.K,$.aD],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bS,$.ap,$.bn],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.K,$.aD,$.an],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aG,$.D,$.aW],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.f8,$.H)
q.i(0,$.c5,$.n)
q.i(0,$.cC,$.H)
p=$.m
o="The "+p+" finds an elaborate courtroom full of "+$.L+"ing "
n=$.r
m=[U.b]
q.i(0,new R.a_("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ab+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.j)
s.i(0,$.dk,$.n)
s.i(0,$.cN,$.n)
p=$.m
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.r
l=o+l+" yells 'Stop that thief' in betwen "+$.L+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ab+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.Fh
s.i(0,new R.a_("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.A(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.j)
t.i(0,$.cf,$.n)
t.i(0,$.dj,$.H)
t.i(0,$.es,$.n)
t.i(0,$.en,$.n)
t.i(0,$.fa,$.n)
t.i(0,$.iE,$.n)
r=$.m
q="The "+r+" finds a crowd of "
p=$.L
q=q+p+"ing "
o=$.r
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.Fu
t.i(0,new R.a_("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.A(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aC)}}
S.mU.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Shining Armor",H.a([$.aG,$.mG,$.T,$.fj],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a0,$.mG,$.T,$.aM,$.at,$.eu],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.D,$.T,$.bk,$.au],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aG,$.fj,$.T,$.mG],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.m_,$.j)
t.i(0,$.dl,$.j)
t.i(0,$.e6,$.j)
t.i(0,$.fa,$.j)
t.i(0,$.f8,$.n)
r="The "+$.x+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.m
p=[U.b]
t.i(0,new R.bG("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q=$.x
r="Now that the "+q+" is defeated, the "
o=$.r
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.m
t.i(0,new R.a5("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
o=$.aw
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.x
n=n+q+". A Learned "+$.r+" explains that it can only be defeated by the Legendary "
r=$.ab
n=n+r+" Blade. The "
m=$.m
t.i(0,new R.a5("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
r="The volcanos of the land are weirdly active after the defeat of the "+$.x+". One begins to erupt near a "
m=$.r
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.L+"s, but not really doing anything to evacuate or save anyone. The "
o=$.m
t.i(0,new R.a5("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.mV.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("LAW Gavel",H.a([$.S,$.Y,$.mC],s),"Organics seem to respect this. Use it to your advantage.",!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("LAW Caution Tape",H.a([$.S,$.aF,$.aW],s),"For when you want to tell inferior organics to keep out.",!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("STOP SIGN",H.a([$.S,$.tV,$.D,$.aW],s),"This isn't a weapon, dunkass.",!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Scales","Disorder","Chaos","Injustice"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.f8,$.j)
q.i(0,$.dk,$.n)
q.i(0,$.cf,$.n)
q.i(0,$.c5,$.H)
q.i(0,$.cB,$.H)
p=$.m
o="The "+p+" is told by a worried "
n=$.r
o=o+n+" that a group of underling rebels are causing havoc across the land, breaking laws left and right. They must be stopped! Eventually."
m="The "+p+" has located a rebel hideout. The underlings get ready for a battle to the death when the "+p+" suddenly breaks out a "+$.ab+" and starts getting all lawyerly on them. The underlings are all sentenced to 30 years in prison, without parole."
l="The "+p+" finds out through interrogating enough of the underling rebels that they have a big mean leader they call the "
k=$.x
l=l+k+". Sounds like a challenge. The "+p+" cracks their knuckles as they prepare for the biggest case on this side of Skaia."
j="Arriving at the final rebel hideout, "+p+" prepares for battle against the "+k+". For their crimes against the "+n+"s, they're getting the DEATH SENTENCE."
n="The "+k+" lies slain by the "+p+"'s "+$.bt+". The "+p+" has won! The "+n+"s are no longer plagued by the lawbreakers."
i=[U.b]
q.i(0,new R.M("Punish the Rebels",!1,[new U.b(o),new U.b(m),new U.b(l),new U.R(j,"The "+k+" continues to run their underling crime ring with the defeat of the "+p+".",n)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.as)
q=H.a(["Heroics","Villains","Heroes","Powers","Justice","Metropolises","Comics"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dl,$.j)
s.i(0,$.c6,$.n)
s.i(0,$.co,$.n)
s.i(0,$.dl,$.H)
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
h="The "+k+" lies slain by the "+p+"'s "+$.bt+". The last of the Heroes is no more.  Injustice takes over the land at last."
s.i(0,new R.M("Become the Villain",!1,[new U.b(o),new U.b(l),new U.b(m),new U.R(j,"The "+p+" is defeated. The "+k+" holds on to the last remnants of justice in the land.",h)],H.a([],i),R.d9(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=$.m
k="The "+h+" is taking a walk through one of the land's many cities when they witness a fight break out between some "
p=$.r
k=k+p+" Hero and an Underling Villain. Being naturally inclined toward the preservation of order, the "+h+" teams up with the "+p+" Hero and triumphs against the Underling Villain. As a reward, the "+p+" Hero invites the "+h+" to join an elite team of crime fighting good guys! Awesome!"
p="The "+h+" works together with some "+p+" Heroes to take down and arrest some Underling Villains. Slowly but surely, the balance of order and disorder begins to shift in order's favor. The number of villains is getting fewer and fewer."
j="With the last of the Villainous Underlings defeated, the "+h+" rejoices, thinking that justice has been served in this land. But what's this? Lightning strikes the ground far away and causes a dark mountain to shoot up into the sky! The lair of the final villain, the "
m=$.x
j=j+m+", has been revealed."
l="The "+h+" storms the lair of the "+m+", the final villain in all of this land. It's time to bring back KAW, once and for all!"
o="The "+m+" lies slain by the "+h+"'s "+$.bt+". The last of the Villains is no more. Justice is finally preserved in the land at last."
s.i(0,new R.M("Become the Hero",!1,[new U.b(k),new U.b(p),new U.b(j),new U.R(l,"The "+h+" is defeated. The "+m+" holds on to the last remnants of injustice in the land.",o)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.as)
s=H.a(["Greed","Poverty","Discrepancy","Famine","Starvation"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hh,$.j)
t.i(0,$.cY,$.n)
t.i(0,$.iF,$.n)
t.i(0,$.iC,$.H)
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
p="The "+l+" lies slain by the "+r+"'s "+$.bt+". The "+r+" uses the golden "+k+" to cut the "+p+" population in half. Problem solved. "
t.i(0,new R.M("Bring the Balance",!1,[new U.b(q),new U.b(o),new U.b(m),new U.R(j,"The "+r+" is defeated and left without the golden "+k+" they seek.",p)],H.a([],i),R.d9(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" looks upon the land and notices how some of the "
r=$.r
k=k+r+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
j="The "+p+" comes up with a plan to bring balance to the land. They can force the "+r+"s who have an abundance of resources to share them with the "+r+"s who are resource deprived. But when the "+p+" tells them this, they get understandably upset. They worked so hard for their resources, why should they share them with others? The "+p+" is left stumped."
m="The "+p+" wanders through a poverty striken "+r+" village and is told the legend of the "
o=$.x
m=m+o+". The "+o+" lives in a lair on the other side of the land, where they hoard all of the land's resources. The "+p+" is confused as to why nobody mentioned this before. The solution to the resource problem is obvious now."
r="The "+p+" shows up at the "+o+"'s lair and asks them to be kind and share their resources with the "+r+"s. The "+o+" agrees... if the "+p+" can defeat them first!"
q="The "+o+" lies slain by the "+p+"'s "+$.bt+". The "+p+" distributes all of the denizen's resources throughout the land, improving living conditions everywhere."
t.i(0,new R.M("Create the Balance",!1,[new U.b(k),new U.b(j),new U.b(m),new U.R(r,"The horrific inequality maintained by the "+o+" continues with the defeat of the "+p+".",q)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.as)}}
K.mX.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Creeping Vine",H.a([$.Y,$.S,$.aR,$.au],s),null,!1,"Sentient Plant Tentacles")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.tB,$.S,$.aJ],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aG,$.av,$.S,$.au],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bY,$.S,$.aJ],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.aP,$.S,$.aJ,$.a0,$.a3],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bk,$.S,$.au],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ca,$.j)
q.i(0,$.be,$.j)
q.i(0,$.hg,$.H)
q.i(0,$.aN,$.n)
q.i(0,$.m2,$.n)
q.i(0,$.cO,$.H)
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
q.i(0,new R.M("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.R(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.as)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ca,$.j)
s.i(0,$.cp,$.j)
s.i(0,$.cO,$.H)
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
s.i(0,new R.M("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.R(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
o=$.m
j="The "+o+" finds themself in the middle of a large plain. They see a small pedestal with a seed packet and note.The note says the field has magical properties that grows any plant in only half an hour. If one of the seeds in the packet can be grown, the lair of "
i=$.x
j=j+i+" will be revealed.  Sounds easy enough. The "+o+" makes a small hole and drops a seed in. The plant immediately starts growing, but almost as immediately "+i+" minions zoom in from out of nowhere and stomp the plant dead."
l="The "+o+" attempts to stop the minions by force, but they are surprisingly agile and make it past the "+o+" to the planted seeds every time. The "+o+" reads the note again and decides to try growing some other plants to protect the seeds as they grow. The "+o+" eats a few fruits they had in their sylladex and grows a wall of trees from the leftover seeds. However the minions are still able to climb and slip through at rapid speed. A few trees isn\u2019t going to be enough to protect the seeds."
k="The "+o+" travels across their land gathering a bunch of seeds to strew them about the field and make a giant maze. Then they plant a few seeds deep inside the maze. The "+i+" minions are very quick, but they aren\u2019t that smart. Some of the seeds manage to grow before the minions can figure out how to get to them. On close inspection, leaves of the full-grown plants are actually maps of the "+o+"\u2019s land, with "+i+"\u2019s lair marked. "
m="The "+o+" tracks down "+i+"\u2019s lair using their leaf map. They toss the leaf aside and pull out their "+$.bt+", ready to throw down!"
h="With "+i+" gone, the "+$.r+"s take up residence in the plain. They were always too afraid to when "+i+" minions were around. They thank the "+o+" for their work."
s.i(0,new R.M("Protect the Seeds",!1,[new U.b(j),new U.b(l),new U.b(k),new U.R(m,"With their defeat, the "+o+"\u2019s efforts to find "+i+"\u2019s lair have been made pointless.",h)],H.a([],p),R.o1(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.F(q,s,null),$.as)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cY,$.j)
t.i(0,$.be,$.H)
t.i(0,$.dO,$.j)
t.i(0,$.c4,$.n)
t.i(0,$.e5,$.n)
t.i(0,$.iA,$.n)
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
t.i(0,new R.M("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.R(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.as)}}
G.mY.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("FAQ",H.a([$.a8,$.S,$.Z,$.bZ],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aF,$.S,$.aQ,$.a8,$.bZ],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.S,$.aQ,$.bZ,$.a0,$.tC],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.wg,$.S,$.ah],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.wp,$.S],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.aR,$.S,$.aQ,$.bZ],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.aP,$.S,$.au],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lZ,$.j)
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
q.i(0,new R.M("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.R(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.L+"ing "+$.r+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.x
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.M("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.R(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
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
q.i(0,new R.M("Beat the Odds",!1,[new U.b(l),new U.b(n),new U.b(o),new U.R(j,k+" is pleased they got "+m+" out of the way, so "+k+"\u2019s casino can become profitable again.",p)],H.a([],i),R.dQ(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=this.f
p.i(0,new X.F(s,q,null),$.as)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ca,$.n)
s.i(0,$.aN,$.n)
s.i(0,$.du,$.j)
s.i(0,$.lY,$.j)
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
s.i(0,new R.M("The Candlestick Taker",!1,[new U.b(l),new U.b(n),new U.b(h),new U.R(k,"The "+j+" candles are once again at risk.",m)],H.a([],i),R.o2(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
j="The "+m+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.r
j=j+k+" explains that the "
h=$.x
s.i(0,new R.M("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+m+" vows to help.   "),new U.b("The "+m+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.L+"s as they bask in the light. The "+m+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+m+" must prepare themself for a tough fight.  "),new U.R("The "+m+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.as)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.f9,$.n)
q.i(0,$.be,$.n)
q.i(0,$.fb,$.j)
q.i(0,$.aN,$.n)
q.i(0,$.cC,$.j)
o="Now that the "+$.x+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
o=o+n+" sets up a wiki and settles in to help the "
m=$.r
o=o+m+"s deal with it all."
m="Within barely any time at all, the "+m+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+n+" makes sure all of the information is from credible sources."
n="When the "+n+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.e8+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a5("Moderate the Wiki",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],i),R.ec(),!1,!1,new Y.bX("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l="Now that the "+$.x+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
l=l+n+" shrugs and sets up a wiki and lets the "
m=$.r
l=l+m+"s deal with it all."
m="Within barely any time at all, unmoderated "+m+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+n+" alone, and each claims they are a different SPECIES entirely. The "+n+" finds this to be hilarious."
n="Luckily it turns out all that disinformation running around about the "+n+" thwarts some would be assasins. It turns out the "+n+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
o="The "+$.e8+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a5("Create the Wiki",!1,[new U.b(l),new U.b(m),new U.b(n)],H.a([],i),R.d9(),!1,!1,new Y.bX("Disinformation Network",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.r
n=o+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
m=$.m
n=n+m+" possibly stop it?"
o="The "+m+" pours over maps and charts. What do the sick "+o+"s have in common with each other?  Finally, there is a flash of inspiration. "+o+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+m+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+m+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+m+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+m+" traces the contaminated river back to it's source. The "
j=$.x
q.i(0,new R.M("Shed the Light",!1,[new U.b(n),new U.b(o),new U.b(l),new U.R(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+m+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,q,null),$.as)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dM,$.j)
t.i(0,$.lZ,$.j)
t.i(0,$.ep,$.n)
t.i(0,$.co,$.n)
t.i(0,$.tn,$.n)
t.i(0,$.c4,$.H)
t.i(0,$.e6,$.H)
t.i(0,$.c6,$.n)
t.i(0,$.cB,$.H)
t.i(0,$.be,$.n)
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
t.i(0,new R.M("Be the Star",!1,[new U.b(r),new U.b(m),new U.b(o),new U.R(l,"The acting career of the "+s+" is in shambles.",n)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n="After the "+$.x+", the "
s=$.m
n=n+s+" is disappointed to learn that barely any of the "
l=$.r
n=n+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
o="The "+$.e8+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a5("Be the Biggest Star in Paradox Space",!1,[new U.b(n),new U.b(l),new U.b(s)],H.a([],i),R.ec(),!1,!1,new Y.bX("What's my name?",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p.i(0,new X.F(q,t,null),$.as)}}
Z.na.prototype={
D:function(){var t,s,r,q
t=this.L
s=[G.a2]
r=A.i("Dream Bubbles Book",H.a([$.K,$.aj,$.aD,$.w9],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.Q(t,0)]))
t=Q.J(null,null,A.a6)
r=A.i("Deck of Uno Cards",H.a([$.mz,$.tP,$.aj],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.O,$.T,$.aj],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.mH,$.T,$.aj],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a0,$.K,$.T,$.br,$.aD],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dj,$.H)
q.i(0,$.es,$.H)
q.i(0,$.c4,$.H)
q.i(0,$.cN,$.n)
p="The "+$.x+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.m
p=p+o+" comands that the "
n=$.r
m=[U.b]
q.i(0,new R.bG("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.L+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
o="As soon as the "+$.x+" is defeated, the "
n=$.r
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.m
q.i(0,new R.a5("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.dz
n="The "+p+" reaches the entrance to a massive dungeon. They heard rumors that important information could be found at the bottom. After some very confusing puzzles and a couple of strifes, they find themself at the dungeon\u2019s center. A lone, elderly "+$.r+" is there to greet the "+p+". He tells the "+p+" that "
o=$.x
n=n+o+" needs to be defeated by a powerful hero, and imparts some clues on how to defeat them. Wait a second, isn\u2019t that the "
l=$.m
n=n+l+"\u2019s Denizen? The "+p+" contacts them and passes on the information they found.  "
k="The "+p+" is exploring another dungeon. Deep inside, they enter a large open room, clearly meant for a boss fight. As expected, "+o+" emerges from a large hole in the ceiling and lets loose a roar. The "+p+" readies themself for a fight, but "+o+" takes one glance and immediately goes back into its hole. It looks like "+o+" is only interested in fighting the "+l+". The "+p+" gives them a call and sits around waiting for them to come. After a few hours, the "+l+" has arrived and the strife can finally start."
p="The "+l+" was victorious in his fight against "+o+". The "+p+" also helped."
q.i(0,new R.M("Be the Protagonist",!1,[new U.b(n),new U.R(k,"The "+l+" fought hard, but was ultimately defeated by "+o+".",p)],H.a([],m),R.FJ(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
q.i(0,new R.a5("Skip the Boring Details",!1,[new U.b("The "+p+" finds a giant pillar, inscribed with a long and arduous quest that the "+p+" is destined to complete. However the "+p+" isn\u2019t interested on spending so much time on one quest, so they uses their powers and fast forward right to the end. A parade is held in their honor for completing the grand quest that no one got to see happen. A bit unsatisfying, really.")],H.a([],m),R.o3(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p=this.x
p.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.vK,$.j)
t.i(0,$.cX,$.j)
t.i(0,$.be,$.j)
t.i(0,$.aN,$.n)
s="The "+$.x+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.m
s=s+r+" comands that the "
o=$.r
t.i(0,new R.bG("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.L+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
r="As soon as the "+$.x+" is defeated, the "
o=$.r
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.m
t.i(0,new R.a5("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",this.L,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,t,null),$.bL)}}
S.nc.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Alternate Costume",H.a([$.O,$.T,$.a3,$.a0,$.am],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.O,$.T,$.a3],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.Y,$.T,$.ah,$.a3,$.dP],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jt,$.Y,$.T,$.au,$.a3,$.dP],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.em,$.j)
t.i(0,$.fa,$.n)
t.i(0,$.cf,$.j)
t.i(0,$.eq,$.n)
t.i(0,$.cY,$.H)
r="The "+$.x+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.m
p=[U.b]
t.i(0,new R.bG("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q=$.m
t.i(0,new R.a5("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.A(),!1,!1,new Y.dh("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
q=$.m
r="The "+q+" is feeling quite pleased with their victory over the "+$.x+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aw
t.i(0,new R.a5("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.A(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
q="Now that the "+$.x+" has been defeated, the "
o=$.r
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.m
q=q+r+"'s help in planning the brand new city of "
n=$.aw
t.i(0,new R.a5("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.L+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.A(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.nd.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Maiden's Breath",H.a([$.aR,$.T,$.az],s),null,!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.Y,$.T,$.dP,$.bs],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.az,$.aG,$.D,$.T,$.a0,$.fj,$.w0],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.K,$.T,$.a9,$.aD],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.dv,$.j)
t.i(0,$.ca,$.j)
t.i(0,$.aN,$.n)
t.i(0,$.be,$.n)
t.i(0,$.du,$.n)
t.i(0,$.cB,$.n)
r="The "+$.x+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.m
r=r+q+" asks local  "
p=$.r
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bG("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q=$.m
o="The "+q+" has adopted a local "
p=$.r
t.i(0,new R.a5("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.L+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.x+". ")],H.a([],n),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
V.nk.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Puzzle Box",H.a([$.Y,$.S,$.a3],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a8,$.S,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.S],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.S,$.a8,$.Z],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aG,$.ju,$.av,$.aj,$.S,$.a0,$.a8],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cX,$.n)
q.i(0,$.hf,$.H)
q.i(0,$.cC,$.H)
p=$.m
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.r
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.x
k=[U.b]
q.i(0,new R.M("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.R(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.dQ(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.m
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.r+" explains that at the end of the Labrinth is the "
l=$.x
q.i(0,new R.M("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.R("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.as)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f8,$.H)
s.i(0,$.c5,$.n)
s.i(0,$.cC,$.H)
s.i(0,$.cX,$.H)
p=$.x
o="The "+p+" has commited a staggering amount of crimes against the local "+$.r+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.m
s.i(0,new R.M("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.R("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.as)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hh,$.j)
t.i(0,$.be,$.n)
t.i(0,$.fb,$.j)
t.i(0,$.aN,$.n)
t.i(0,$.cC,$.j)
r=$.m
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.x
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ab+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.M("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.R(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l=$.m
r="The "+l+" has finally found the lair of "
m=$.x
r=r+m+". Appropriately enough for a Mind Denizen, their dungeon is a giant replica of a brain. Doors in the dungeon simulate neurons by opening and closing at seemingly random intervals to mimic brain activity."
o="The "+l+" has spent far too many hours trying to navigate the dungeon. They raise their fist in frustration, and at the same time, a door opens. They drop their fist and attempt to enter, but the door immediately closes again. They raise their fist once more, and the door opens again, and closes again when the "+l+" drops their fist. They raise and lower their fist a bunch of times, and the door opens and closes in perfect synch. Is...is the dungeon based off of the "+l+"\u2019s brain!?  "
p="The "+l+" is starting to get a hang out of controlling their brain dungeon. Most of the doors can be opened by experimentally moving part of their body or using one of their senses. (The door that opened by licking one of the walls wasn\u2019t very fun) There is only one door the "+l+" is still unable to open, which is likely "+m+"\u2019s."
q="Through some convoluted thought processes focused on thinking about "+m+", the "+l+" manages to open the final door to "+m+". They are relieved it didn\u2019t take some cliche like having to unlock their subconscious or some junk like that. They begin the final fight inside their own mind."
j="With "+m+" defeated, the "+l+" decides to rig explosives around the dungeon and bring the whole place down. The thought that others could basically see the inside of the "+l+"\u2019s mind was a little too creepy."
t.i(0,new R.M("Explore the Brain",!1,[new U.b(r),new U.b(o),new U.b(p),new U.R(q,"Various doors open and close across the dungeon to simulate the "+l+"\u2019s despair in the face of "+m+".",j)],H.a([],k),R.fs(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.H)
n.i(0,new X.F(s,t,null),$.as)}}
E.nl.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Feather Pen",H.a([$.D,$.T,$.aj,$.bs],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.wo,$.T,$.ju,$.ah,$.a0],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.K,$.T,$.aj,$.aD],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.dv,$.j)
t.i(0,$.ca,$.j)
t.i(0,$.aN,$.n)
t.i(0,$.be,$.n)
t.i(0,$.du,$.n)
t.i(0,$.cB,$.n)
r="The "+$.x+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bG("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
q="You'd think after the dramatic defeat of the "+$.x+" the "
o=$.r
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.m
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ab
t.i(0,new R.a5("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
F.nm.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Piano",H.a([$.ah,$.Y,$.a9,$.aj],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.D,$.a9],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aV,$.a8],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.Y,$.a9],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.K,$.a9],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aF,$.a9,$.a8,$.aV,$.an],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aF,$.a9,$.a8,$.an],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.Y,$.a9],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.co,$.al)
q.i(0,$.tn,$.j)
q.i(0,$.ep,$.j)
q.i(0,$.du,$.n)
q.i(0,$.aN,$.n)
q.i(0,$.lW,$.n)
p=$.m
o="The "+p+" meets a wise old "+$.r+" who tells that the "+$.x+" can only be awoken by the Legendary Hero playing the "
n=$.aw
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ab
k=[U.b]
q.i(0,new R.a_("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
n="The "+p+" finds an empty, trashed "
l=$.aw
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ab+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.L+"ing "+$.r+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.Fm
q.i(0,new R.a_("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.A(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.tq,$.al)
s.i(0,$.dk,$.n)
s.i(0,$.cN,$.n)
s.i(0,$.du,$.j)
s.i(0,$.lW,$.al)
o=$.m
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aw
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.x
s.i(0,new R.a_("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ab+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hg,$.al)
t.i(0,$.c6,$.n)
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
t.i(0,new R.a_("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aC)}}
Y.nB.prototype={
O:function(a,b){var t=0,s=P.bw(),r,q=this,p,o
var $async$O=P.bB(function(c,d){if(c===1)return P.by(d,s)
while(true)switch(t){case 0:t=3
return P.cL(A.hA("scripts/Rendering/threed/three.min.js",!1),$async$O)
case 3:t=4
return P.cL(Q.oh(),$async$O)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.bf(p)
o.eN(p,P.wG(["",$.$get$vy()],P.y,S.hE))
o.eM(p,!1)
q.b=p}J.vk(p,b)
r=J.vk(q.b,b)
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$O,s)},
$aseJ:function(){return[S.fp]},
$ascb:function(){return[S.fp,P.y]}}
V.nJ.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Shorts",H.a([$.O,$.T,$.fi,$.a0],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aF,$.T,$.an],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.ap,$.T,$.a3],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.m_,$.j)
t.i(0,$.cO,$.n)
t.i(0,$.hj,$.n)
t.i(0,$.m1,$.n)
t.i(0,$.dv,$.n)
t.i(0,$.be,$.n)
t.i(0,$.e5,$.n)
t.i(0,$.eo,$.n)
t.i(0,$.tr,$.n)
t.i(0,$.iA,$.n)
t.i(0,$.lY,$.n)
r="The "+$.x+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bG("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
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
t.i(0,new R.M("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.R(k,"The "+q+" whited out...",m)],H.a([],n),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m="Now that the "+$.x+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.m
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.r
t.i(0,new R.a5("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aw+" buffs. With a deafening "+$.L+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.A(),!1,!1,new Y.il("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
G.nW.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Superhero Action Figure",H.a([$.aF,$.an,$.aO],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aF,$.an],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aF,$.bY],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aF,$.aU,$.bn,$.ch],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aF,$.an],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.K,$.an],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.aR,$.an,$.O,$.au],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.aR,$.aL,$.an,$.O],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aO,$.D,$.an,$.eu,$.at,$.bT],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.K,$.an],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.K,$.an],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.n)
q.i(0,$.cE,$.n)
q.i(0,$.c6,$.j)
q.i(0,$.cO,$.al)
q.i(0,$.dw,$.al)
p=$.m
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.r
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aw+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.L+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.Fn
l=[U.b]
q.i(0,new R.a_("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.en,$.n)
s.i(0,$.dk,$.n)
s.i(0,$.cE,$.n)
s.i(0,$.c6,$.n)
s.i(0,$.dl,$.j)
o=$.m
n="The "+o+" runs towards an explosion in a local "
m=$.r
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aw
s.i(0,new R.a_("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cE,$.n)
t.i(0,$.dM,$.j)
t.i(0,$.cp,$.j)
t.i(0,$.dl,$.n)
r=$.m
q="The "+r+" gets a job at the "+$.aw+" Cinema. A new movie, The Lonely "
o=$.ab
q=q+o+" is coming out soon, and "
n=$.r
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.L+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.a_("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aC)}}
N.o_.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Feather'd Cap",H.a([$.O,$.T,$.fi],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a0,$.tH,$.T,$.fi],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bp,$.T],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.cE,$.n)
t.i(0,$.cX,$.n)
t.i(0,$.dO,$.H)
r="With the closing of the curtain, the "+$.x+" has released the frogs, and yet they are nowhere to be found. The "
q=$.m
p=[U.b]
t.i(0,new R.bG("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q=$.x
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.m
r=r+o+" to get it back to normal. They organize a team of "
n=$.r
t.i(0,new R.a5("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ab+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.b.prototype={}
U.R.prototype={}
R.o0.prototype={
A:function(a){return H.B(new H.dW(H.kz(this),null))+": "+this.c},
gG:function(a){return this.c}}
R.a_.prototype={}
R.M.prototype={}
R.a5.prototype={}
R.bG.prototype={}
E.o4.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Curtain",H.a([$.O,$.S,$.aO],s),null,!1,"Show Ender")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.eu,$.aM,$.S,$.at,$.aX,$.aO,$.bo,$.aE],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Omegaphone",H.a([$.D,$.aV,$.a8,$.S,$.aO],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trike Horn",H.a([$.aG,$.D,$.aV,$.br,$.cd,$.S,$.aO],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.ap,$.br,$.aj,$.S,$.a0,$.aO],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.Y,$.S,$.aX,$.ar,$.bp,$.aO],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lV,$.j)
q.i(0,$.dj,$.j)
q.i(0,$.dk,$.j)
q.i(0,$.cY,$.n)
q.i(0,$.c4,$.n)
q.i(0,$.cf,$.n)
q.i(0,$.c5,$.H)
q.i(0,$.dw,$.n)
q.i(0,$.en,$.j)
q.i(0,$.iE,$.j)
q.i(0,$.fa,$.j)
q.i(0,$.m0,$.j)
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
q.i(0,new R.M("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.R(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fs(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
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
q.i(0,new R.M("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.R(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=this.f
h.i(0,new X.F(s,q,null),$.as)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.du,$.j)
s.i(0,$.c4,$.n)
s.i(0,$.c5,$.j)
s.i(0,$.co,$.j)
s.i(0,$.cB,$.j)
s.i(0,$.cE,$.n)
s.i(0,$.iD,$.H)
s.i(0,$.dj,$.n)
s.i(0,$.cO,$.j)
s.i(0,$.c6,$.j)
s.i(0,$.dw,$.H)
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
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.R(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(q,s,null),$.as)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.lV,$.j)
t.i(0,$.dw,$.j)
t.i(0,$.c5,$.j)
t.i(0,$.cO,$.n)
t.i(0,$.cB,$.j)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.x+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.R(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
t.i(0,new R.a5("Stop the Narration",!1,[new U.b("The "+m+" is walking down a long road, wondering when they\u2019ll find the next town. They suddenly stop and look behind them, asking who said that. They look everywhere but can\u2019t find where the voice is coming from. They fruitlessly demand the narration to stop."),new U.b("The "+m+" is having a hard time doing any of their quests while hearing every action narrated. No one else can hear the voice and some are starting to think the "+m+" is losing their mind. The "+m+" vows to find who is doing the narrating and beat the stuffing out if them. However, the "+m+" is very unlikely to end the narration. The "+m+" raises their fist at a random location in the sky and shouts we\u2019ll see about that."),new U.b("The "+m+" finds themself in front of an ancient looking broadcasting tower. They wonder aloud whether the tower is broadcasting the narration. They demand the narration to be useful for a change and just tell them, but they get no answer. In a huff, they search the tower. A couple of hours later, the "+m+" find an ominous looking machine displaying pictures of the session, and text of this narration. Realizing the machine is broadcasting the narration, and getting confirmation from the narration that it is so, they immediately destroy it. They no longer hear the narration and are pleased to go back to adventuring. The "+m+" doesn\u2019t realize they only stopped the narration being broadcasted to their ears and not the narration itself.")],H.a([],g),R.dQ(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(s,t,null),$.as)}}
Y.dT.prototype={}
Y.a7.prototype={}
Y.dh.prototype={}
Y.bX.prototype={
gG:function(a){return this.c}}
Y.P.prototype={}
Y.il.prototype={}
Y.bF.prototype={}
Y.d1.prototype={}
Y.l3.prototype={}
Y.bE.prototype={}
Y.hN.prototype={}
Y.iK.prototype={}
Y.jR.prototype={}
N.o9.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Domino Mask",H.a([$.O,$.T,$.fi],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.tA,$.T,$.fi,$.w1],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a0,$.aF,$.a8,$.T,$.Z,$.am],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.c5,$.j)
t.i(0,$.cf,$.n)
t.i(0,$.dl,$.n)
r="The "+$.x+" cannot release the frogs since the corrupt Noble "
q=$.r
r=r+q+"s have hoarded them. The "
p=$.m
o=[U.b]
t.i(0,new R.bG("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
p=$.m
q="The "+p+" learns of the extreme injustices of the "
r=$.r
q=q+r+"s who rose to power during the tyranny of "
n=$.x
t.i(0,new R.a5("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.oa.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Red Rose",H.a([$.aB,$.az],s),null,!1,"Seductive Plant")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friend Fic",H.a([$.aB,$.K],s),"Don't ship irl ppl, asshole.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aB,$.ap],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aB,$.ar],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aB,$.bp,$.D,$.aL],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aD,$.K,$.aB],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cp,$.j)
q.i(0,$.hj,$.n)
q.i(0,$.f6,$.n)
q.i(0,$.hi,$.j)
q.i(0,$.co,$.n)
q.i(0,$.iB,$.H)
p=$.m
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.r
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ab+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.a_("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.co,$.n)
s.i(0,$.dM,$.j)
s.i(0,$.hi,$.j)
s.i(0,$.cp,$.n)
s.i(0,$.ep,$.H)
s.i(0,$.iB,$.H)
o=$.r
n="A Romantic "+o+" approaches the "
m=$.m
s.i(0,new R.a_("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iB,$.j)
t.i(0,$.cp,$.j)
t.i(0,$.f6,$.n)
t.i(0,$.m1,$.j)
t.i(0,$.hi,$.j)
t.i(0,$.co,$.n)
t.i(0,$.ep,$.H)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.r
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.x+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.Fk
t.i(0,new R.a_("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.m
r="The "+n+"  and the "
o=$.dz
t.i(0,new R.a_("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.dR(),!1,!1,new Y.iK(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.al)
o=$.m
n="The "+o+"  and the "
r=$.dz
t.i(0,new R.a_("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.dR(),!1,!1,new Y.hN(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.al)
r=$.m
o="The "+r+"  and the "
n=$.dz
t.i(0,new R.a_("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.dR(),!1,!1,new Y.jR(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.al)
p.i(0,new X.F(s,t,null),$.aC)}}
T.hQ.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a6)
s=A.i("Perfectly Generic Object",H.a([],[G.a2]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.Q(t,0)]))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cY,$.j)
q.i(0,$.be,$.H)
q.i(0,$.dO,$.j)
q.i(0,$.c4,$.n)
q.i(0,$.e5,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.a5("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
n=this.x
n.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.er,$.j)
s.i(0,$.eo,$.H)
s.i(0,$.eq,$.n)
s.i(0,$.cN,$.j)
s.i(0,$.cf,$.H)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.a5("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
l="The "+p+" learns that all of the local "
o=$.r
s.i(0,new R.a5("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.dz+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.L+"ing in amazement. The factory is saved! ")],H.a([],m),R.dR(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.al)
n.i(0,new X.F(q,s,null),$.bL)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.be,$.H)
t.i(0,$.ca,$.n)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.L
t.i(0,new R.a_("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uy(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.H)
l=$.m
p="The "+l+" learns that all of the local "
r=$.r
t.i(0,new R.a5("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.bL)},
A:function(a){return this.r},
aa:function(a,b,c,d){var t=this.r
this.y=t
this.z=new X.iz("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.ii]),H.a([],[M.hd]))
this.D()
this.E()
t=this.Q
if($.$get$oc().Z(0,t))H.b0("Duplicate class id for "+this.A(0)+": "+t+" is already registered for "+J.cz($.$get$oc().n(0,t))+".")
$.$get$oc().i(0,t,this)},
gG:function(a){return this.r}}
E.od.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Sage's Robe",H.a([$.O,$.T,$.aZ,$.Z,$.a3,$.a0],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.K,$.T,$.aD,$.Z],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.O,$.T,$.hq,$.Z],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.f9,$.n)
t.i(0,$.be,$.n)
t.i(0,$.fb,$.j)
t.i(0,$.aN,$.H)
t.i(0,$.cC,$.j)
r="The "+$.x+" has blocked access to the books for the duration. The "
q=$.m
p=[U.b]
t.i(0,new R.bG("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q="Now that the "+$.x+" is defeated, it is time to begin recovery efforts. The "
r=$.r
q=q+r+"s ask the "
o=$.m
t.i(0,new R.a5("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.L+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
K.oe.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Uno Reverse Card",H.a([$.mz,$.S,$.aO,$.jw],s),null,!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.hq,$.aZ,$.S,$.jw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lV,$.j)
q.i(0,$.dj,$.j)
q.i(0,$.dk,$.j)
q.i(0,$.cY,$.n)
q.i(0,$.c4,$.n)
q.i(0,$.cf,$.n)
q.i(0,$.c5,$.H)
q.i(0,$.dw,$.n)
q.i(0,$.en,$.j)
q.i(0,$.iE,$.j)
q.i(0,$.fa,$.j)
q.i(0,$.m0,$.j)
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
q.i(0,new R.M("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.R(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fs(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
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
q.i(0,new R.M("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.R(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=this.f
h.i(0,new X.F(s,q,null),$.as)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.du,$.j)
s.i(0,$.c4,$.n)
s.i(0,$.c5,$.j)
s.i(0,$.co,$.j)
s.i(0,$.cB,$.j)
s.i(0,$.cE,$.n)
s.i(0,$.iD,$.H)
s.i(0,$.dj,$.n)
s.i(0,$.cO,$.j)
s.i(0,$.c6,$.j)
s.i(0,$.dw,$.H)
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
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.R(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(q,s,null),$.as)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.lV,$.j)
t.i(0,$.dw,$.j)
t.i(0,$.c5,$.j)
t.i(0,$.cO,$.n)
t.i(0,$.cB,$.j)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.x+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.R(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(s,t,null),$.as)}}
Y.of.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Walking Stick",H.a([$.Y,$.T,$.dP],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.O,$.T,$.tF,$.Z,$.a0],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.K,$.T,$.Z],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Magical Compass",H.a([$.D,$.T,$.Z,$.a3],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p
t=[P.y]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.dv,$.j)
t.i(0,$.ca,$.j)
t.i(0,$.be,$.j)
t.i(0,$.c6,$.H)
t.i(0,$.aN,$.H)
r="Now that the "+$.x+" has been defeated, the planet has really opened up. The "
q=$.m
p=[U.b]
t.i(0,new R.a5("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.r+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.x+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.m
t.i(0,new R.bG("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.r+" "+$.L+"s in time to stop them.   ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
this.x.i(0,new X.F(s,t,null),$.bL)}}
L.og.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Scroll",H.a([$.K,$.T,$.Z],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.aP,$.T,$.am,$.Z],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.K,$.T,$.aD,$.Z,$.am,$.a0],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.lW,$.j)
t.i(0,$.be,$.j)
t.i(0,$.cC,$.j)
t.i(0,$.aN,$.n)
t.i(0,$.cX,$.n)
r="The "+$.x+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.m
p=[U.b]
t.i(0,new R.bG("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q="Now that the "+$.x+" has been taken care of, the "
r=$.m
q=q+r+" discovers a large library of "
o=$.r
t.i(0,new R.a5("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
S.oi.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Cueball",H.a([$.w8,$.T],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.fh,$.w7,$.T,$.aQ],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.aP,$.T,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.w3,$.T,$.aZ],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.vM,$.j)
t.i(0,$.iC,$.j)
t.i(0,$.vJ,$.j)
t.i(0,$.cO,$.n)
r="Now that the "+$.x+" has been defeated, the land is really starting to open up. The "
q=$.m
r=r+q+" finds a tunnel filled with Blind "
p=$.r
o=[U.b]
t.i(0,new R.a5("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.A(),!1,!1,new Y.dh("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.x+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.m
t.i(0,new R.bG("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
p=$.m
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.r
t.i(0,new R.a5("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.A(),!1,!1,new Y.dh("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
r="A group of underlings are still making trouble, even after the defeat of the "+$.x+". The "
p=$.m
r=r+p+" begins planting rumors of a huge "
q=$.ab
t.i(0,new R.a5("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.A(),!1,!1,new Y.dh("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.c1.prototype={}
Y.op.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Meddler's Guide",H.a([$.aD,$.T,$.K,$.br,$.a0,$.aJ],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aP,$.T,$.aJ],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.T
r=A.i("Cloud in a Bottle",H.a([r,r,$.bj],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a3,$.T,$.aQ,$.az,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.be,$.n)
t.i(0,$.dv,$.j)
t.i(0,$.cO,$.n)
t.i(0,$.aN,$.n)
t.i(0,$.ca,$.j)
r="The defeat of the "+$.x+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.m
p=[U.b]
t.i(0,new R.bG("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q="Now that the "+$.x+" has been taken care of, the "
r=$.m
q=q+r+" finds a long line of "
o=$.r
t.i(0,new R.a5("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.oq.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Fiduspawn Plush",H.a([$.ch,$.O,$.aZ],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.ch,$.O,$.aZ],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("D20",H.a([$.tE,$.aF],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pet Pigeon",H.a([$.bs,$.au,$.bk,$.aY,$.bo,$.tM],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.O,$.aZ,$.ch],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.aD,$.K],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.aD,$.K],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.aZ,$.O],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aD,$.K,$.Z],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.H)
q.i(0,$.aN,$.n)
q.i(0,$.cX,$.j)
q.i(0,$.cC,$.n)
p=$.m
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.r
m=[U.b]
q.i(0,new R.a_("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aw+" or "+$.ab+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.L+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dN,$.H)
s.i(0,$.aN,$.j)
s.i(0,$.cX,$.j)
s.i(0,$.tk,$.j)
s.i(0,$.co,$.j)
s.i(0,$.tq,$.j)
s.i(0,$.cC,$.n)
o=$.m
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.L
n=n+l+"ing "
k=$.r
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aw
s.i(0,new R.a_("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cN,$.H)
t.i(0,$.dM,$.j)
t.i(0,$.ca,$.j)
t.i(0,$.dl,$.j)
t.i(0,$.f8,$.j)
r=$.m
q="The "+r+" wanders into an entire crowd of "
o=$.r
t.i(0,new R.a_("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.L+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aC)}}
M.bu.prototype={}
N.or.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Frog Statue",H.a([$.aG,$.av,$.S],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.O,$.S],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c7,$.Z,$.a8,$.S],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.aP,$.Z,$.S],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.K,$.S,$.tI,$.a0],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m
t=$.m
s=[P.y]
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
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.cO,$.H)
t.i(0,$.tm,$.j)
s=[U.b]
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
p=$.m
t.i(0,new R.bG("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.A(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
this.f.i(0,new X.F(o,t,null),$.Gx)}}
U.ag.prototype={
gG:function(a){return this.e+"kind"},
$isbI:1,
$asbI:function(){return[A.a6]}}
K.cH.prototype={
gG:function(a){return this.a}}
M.ov.prototype={
aP:function(a){return"application/octet-stream"},
O:function(a6,a7){var t=0,s=P.bw(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$O=P.bB(function(a8,a9){if(a8===1)return P.by(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.di(null,0)
q.a=J.e_(a7,0)
for(p=0,o="";p<6;++p)o+=H.hO(q.a9(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.k("Invalid header: "+n)
m=q.a9(8)
l=9+m*6
o=8*m
k=q.a9(o)
j=q.a9(o)
i=q.a9(o)
h=q.a9(o)
g=q.a9(o)
f=q.a9(o)
o=P.C
e=P.y
d=P.cG(o,e)
c=new O.d_(k,j,null,null,null,null,null,null,d,P.cG(e,o))
c.x=new Uint8Array(H.cD(k*j))
b=q.a9(8)
for(o=[o],p=0;p<b;++p){a=q.a9(8)
a0=q.a9(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.a9(8)
if(a2>=e){r=H.v(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.oW(a1,0,null))}a4=q.a9(8)
a5=$.$get$x_().n(0,a4)
if(a5==null)throw H.k("Sprite decoding error: Encoding id "+a4+" not supported.")
c.ik(i,h,g,a5.c.$4(a7,l,g*f,c))
c.i1()
r=c
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$O,s)},
$asds:function(){return[O.d_]},
$ascb:function(){return[O.d_,P.bi]}}
R.oZ.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Meddler's Guide",H.a([$.aD,$.T,$.K,$.br,$.a0,$.aJ],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aP,$.T,$.aJ],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.T
r=A.i("Cloud in a Bottle",H.a([r,r,$.bj],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a3,$.T,$.aQ,$.az,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.cX,$.j)
t.i(0,$.aN,$.j)
t.i(0,$.dv,$.n)
t.i(0,$.fb,$.n)
t.i(0,$.tj,$.n)
t.i(0,$.e5,$.n)
t.i(0,$.iA,$.n)
t.i(0,$.tp,$.n)
r=$.m
q="The "+r+" decides to take a break after defeating "+$.x+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.r
o=[U.b]
t.i(0,new R.a5("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.L+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.o3(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
r=$.r
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.m
t.i(0,new R.a5("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
r=$.r
q="The "+r+"s are so stressed after all that shit with the "+$.x+". They are yelling and "+$.L+" at each other over the slightest of insults. The "
p=$.m
t.i(0,new R.a5("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p="The "+$.x+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.m
p=p+r+" purifies the pools "
q=$.r
t.i(0,new R.bG("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
r="The defeat of the "+$.x+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.r
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.m
t.i(0,new R.a5("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aw+". Huh. Okay then.")],H.a([],o),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
D.p3.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Robot",H.a([$.a8,$.D,$.au,$.Z],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a8,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a8,$.K],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH For Dummies ",H.a([$.a8,$.K,$.aE,$.aD],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aF,$.a8,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.wd,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.tW,$.D,$.ah],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a8,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
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
l=$.Fs
p=[U.b]
q.i(0,new R.a_("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.A(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.z)
l=$.m
m="The "+l+" is approached by a "
o=$.r
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.L
q.i(0,new R.a_("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.x+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ab+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.dQ(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.er,$.j)
s.i(0,$.eo,$.H)
s.i(0,$.eq,$.n)
s.i(0,$.cN,$.j)
s.i(0,$.cf,$.H)
o=$.m
n="The "+o+" learns that all of the local "
l=$.r
s.i(0,new R.a_("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
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
s.i(0,new R.a_("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.ec(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.as)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hh,$.H)
t.i(0,$.em,$.j)
t.i(0,$.er,$.j)
t.i(0,$.cf,$.H)
r=$.m
q="The "+r+" learns from a mysterious "+$.r+" in a black trenchcoat about a great "
o=$.aw
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.x
t.i(0,new R.a_("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aC)}}
V.p4.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Lighter",H.a([$.D,$.ar],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.K,$.bn],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.K,$.bn,$.c7],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.D,$.aE,$.c7,$.bl,$.bo],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.K,$.wj],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.D,$.bg,$.bl],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.D,$.bg,$.bl],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.O,$.fi,$.bl],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bS,$.bg],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.D,$.tN,$.aL,$.bl],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.D,$.tT,$.aL,$.bl],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.D,$.tJ,$.aL,$.bl],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mB,$.at,$.D,$.bp,$.bl],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.K,$.br,$.aD],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.cd,$.D,$.aV,$.br],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.Y,$.ar],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cE,$.n)
q.i(0,$.dM,$.j)
q.i(0,$.e6,$.j)
q.i(0,$.fa,$.j)
q.i(0,$.m_,$.j)
q.i(0,$.dl,$.n)
p=$.m
o=[U.b]
q.i(0,new R.a_("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.A(),!1,!1,new Y.dh("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cE,$.n)
s.i(0,$.dM,$.j)
s.i(0,$.cp,$.j)
s.i(0,$.dl,$.n)
n=$.m
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.r
s.i(0,new R.a_("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ab+" underling. Tremble at the fearsome "+$.aw+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.A(),!1,!1,new Y.dh("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cY,$.j)
q.i(0,$.be,$.H)
q.i(0,$.dO,$.j)
q.i(0,$.c4,$.n)
q.i(0,$.e5,$.H)
q.i(0,$.dj,$.H)
n=$.m
m="The "+n+" learns that all of the local "
l=$.r
q.i(0,new R.a_("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.j)
t.i(0,$.dj,$.H)
t.i(0,$.en,$.j)
t.i(0,$.iE,$.j)
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
t.i(0,new R.a_("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,t,null),$.aC)}}
X.F.prototype={
A:function(a){return"Theme: "+H.B(this.a)}}
U.pb.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Lockpick",H.a([$.D,$.T,$.am,$.aM,$.a0],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.O,$.T,$.am],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Thief's Dagger",H.a([$.D,$.T,$.aM,$.at,$.tD],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.c5,$.j)
t.i(0,$.dk,$.n)
t.i(0,$.c6,$.n)
t.i(0,$.cN,$.n)
r="The "+$.x+" cannot release the frogs since the corrupt "
q=$.r
r=r+q+" Cops have confiscated them. The "
p=$.m
o=[U.b]
t.i(0,new R.bG("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
p=$.m
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.x+"'s layer and slated to be returned to the "
r=$.r
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.L+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.fy
t.i(0,new R.a5("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.r
p="A weeping "+r+" approaches the "
n=$.m
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.x
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aw+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.L+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.fy
t.i(0,new R.a5("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.z)
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
t.i(0,new R.a5("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.pc.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Grandfather Clock",H.a([$.Y,$.aj,$.bg,$.S],s),null,!1,"Ticking Tower of Time")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.wn,$.S,$.a9],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aG,$.bk,$.S,$.aY,$.aX,$.aE],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.S,$.a9,$.aj],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sick Turn Tables",H.a([$.D,$.S,$.a9,$.a0,$.an],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.D,$.S,$.a9],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.vO,$.al)
q.i(0,$.cf,$.n)
q.i(0,$.cN,$.n)
q.i(0,$.eq,$.j)
p=$.x
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.m
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x1
l=[U.b]
q.i(0,new R.a5("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.d9(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.m
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.r+"s, they set out to fix the "
m=$.ab
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.x
q.i(0,new R.M("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.R("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j=this.f
j.i(0,new X.F(s,q,null),$.as)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.hg,$.j)
s.i(0,$.e6,$.H)
s.i(0,$.cf,$.j)
p=$.m
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.r+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.x
s.i(0,new R.M("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.R(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(q,s,null),$.as)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ca,$.j)
t.i(0,$.aN,$.n)
t.i(0,$.cX,$.j)
t.i(0,$.dv,$.j)
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
t.i(0,new R.M("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.R(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.fs(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
k=$.x
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ab
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.m
t.i(0,new R.M("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.r+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.R("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.d9(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
r="With the defeat of the "+$.x+", "
k=$.m
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.r
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aw
t.i(0,new R.a5("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.d9(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
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
i="The "+p+" has gone through so many freaking loops that they have memorized the actions of every "+o+". They follow a perfected schedule to make sure every "+o+" prepares for and completes their part of the ceremony. Finally the ceremony is completed and "+q+" arrives. The "+p+" takes out their "+$.bt+" and begins the strife!"
p=q+" lies dead. The "+o+"s are happy to be rid of them and thank the player for helping to complete the ceremony. It was their first time performing the ceremony, after all. The "+p+" rolls their eyes."
t.i(0,new R.M("Stop the Time Loop",!1,[new U.b(k),new U.b(m),new U.b(n),new U.R(i,"The "+o+"s wake up and begin eagerly preparing for the "+r+" festival. It only comes once a year, after all.",p)],H.a([],l),R.o1(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.r
r="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.m
t.i(0,new R.M("Move Forwards, Never Stop",!1,[new U.b(r+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.L+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.R("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.x+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(s,t,null),$.as)}}
G.a2.prototype={
A:function(a){var t=this.c
if(t.length!==0)return C.b.gab(t)
return"NULL TRAIT"},
gei:function(){return this.b},
ge3:function(){return this.c},
gbB:function(){return this.d}}
G.aK.prototype={}
G.ae.prototype={}
G.bJ.prototype={}
G.d.prototype={
ghZ:function(){return this.f.length},
gbB:function(){var t,s,r,q,p
for(t=this.f,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bV)(t),++q)r+=t[q].d
return r},
ay:function(a,b){return C.a.bC(b.ghZ()-this.f.length)},
er:function(a){return C.b.hp(this.f,a.ghb(a))},
$isbI:1,
$asbI:function(){return[G.d]},
gG:function(a){return this.e},
geR:function(){return this.f}}
G.mI.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a2]}}}
Q.pA.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Cardboard Box",H.a([$.K,$.S,$.am],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.D,$.S,$.am],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bp,$.S,$.am,$.mB],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.aY,$.S,$.am,$.aX,$.c_],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aF,$.S,$.am,$.aj],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.S,$.a0,$.tI,$.am,$.aP],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.j)
q.i(0,$.iF,$.j)
q.i(0,$.iG,$.j)
q.i(0,$.iC,$.j)
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
q.i(0,new R.a5("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.x
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.M("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.R(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i=this.f
i.i(0,new X.F(s,q,null),$.as)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dN,$.n)
s.i(0,$.iF,$.n)
s.i(0,$.iG,$.n)
s.i(0,$.c5,$.j)
p=$.m
o="Even with the victory of the "+p+" over the villainous "
n=$.x
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.r+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ab
s.i(0,new R.a5("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.dQ(),!1,!1,new Y.bX("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
s.i(0,new R.M("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.L+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.R("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.x+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.r+"s.")],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i.i(0,new X.F(q,s,null),$.as)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dN,$.j)
t.i(0,$.iF,$.j)
t.i(0,$.iG,$.j)
r=$.m
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.x+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.M("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.R(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i.i(0,new X.F(s,t,null),$.as)}}
E.pB.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Yardstick",H.a([$.dP,$.T,$.tP,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aD,$.T,$.mH,$.K],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.O,$.T,$.hq,$.wi,$.aZ,$.jw],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.wr,$.T,$.ty],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.cO,$.j)
t.i(0,$.dw,$.j)
t.i(0,$.f7,$.j)
t.i(0,$.dv,$.j)
t.i(0,$.hf,$.j)
t.i(0,$.lX,$.j)
t.i(0,$.iG,$.n)
r=$.m
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.r
o=[U.b]
t.i(0,new R.a_("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.o3(),!1,!1,new Y.dT("Rewards/no_reward.png",null),1,null,null),$.z)
r=$.x
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.m
n=q+" tries to manually separate the turtles by catching them with a net and "+$.bt+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.L
t.i(0,new R.M("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.R(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.FF(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
q=$.m
t.i(0,new R.a_("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.A(),!1,!1,new Y.dT("Rewards/no_reward.png",null),1,null,null),$.z)
q="A wizened "+$.r+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.m
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.x
t.i(0,new R.M("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
m=$.m
t.i(0,new R.M("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.x+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
m="A wizened "+$.r+" tells the "
r=$.m
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.A(),!1,!1,new Y.dh("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
r="A "+$.r+" that is also a SHOGUN minion tells the "
m=$.m
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.FG(),!1,!1,new Y.bX("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
m=$.m
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.i(0,new R.a5("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.H)
n=$.m
m="The "+n+" finds an unusual rock formation. They examine it from every possible angle to find a secret meaning. In the end it turns out to be an interesting rock and nothing more."
q="The "+n+" is stopped by a young "
r=$.r
t.i(0,new R.a5("Wasting Time",!1,[new U.b(m),new U.b(q+r+" that asks them to watch clouds together. The "+n+" spends a few hours with the "+r+" interpreting the shapes in the clouds."),new U.b("The "+n+" uses the alchemiter to create a number of dream video game fusions. They spend many hours playing them all."),new U.b("After waking up from a nap, the "+n+" turns over and goes right back to sleep. They\u2019re just not feeling like doing anything right now."),new U.b("An elderly "+r+" calls out to the "+n+"; apparently there was a dangerous monster that the "+r+"s wanted the "+n+" to defeat, but the problem solved itself when the monster tripped off a cliffside. Was there actually a point to what the "+n+" was doing? Nope, they\u2019re just really bad at using their time wisely.")],H.a([],o),R.o3(),!1,!1,new Y.dT("Rewards/no_reward.png",null),1,null,null),$.z)
n=$.x
r="The "+n+" explains um. What? Where did the "
q=$.m
t.i(0,new R.bG("Waste the Frogs",!1,[new U.b(r+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
this.x.i(0,new X.F(s,t,null),$.as)}}
M.pF.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Cauldron",H.a([$.wm,$.T,$.a3],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jt,$.dP,$.T,$.Y,$.a3],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.tK,$.T,$.a3,$.am,$.a0],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.X])
t.i(0,$.c4,$.n)
t.i(0,$.hj,$.n)
t.i(0,$.cY,$.n)
t.i(0,$.cN,$.n)
t.i(0,$.cB,$.n)
t.i(0,$.tm,$.n)
r=$.x
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.r
q=q+p+" consorts. It's up to the "
o=$.m
n=[U.b]
t.i(0,new R.bG("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
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
t.i(0,new R.a5("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.z)
q="A Mysterious "+$.r+" approaches the "
p=$.m
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aw
q=q+r+" was discovered amongst the "+$.x+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.fy
t.i(0,new R.a5("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.r
p="A young "+r+" approaches the "
m=$.m
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aw
t.i(0,new R.a5("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ab+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.L+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.A(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.pG.prototype={
O:function(a5,a6){var t=0,s=P.bw(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$O=P.bB(function(a7,a8){if(a7===1)return P.by(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.eW(a6,$.$get$xr())
if(0>=p.length){r=H.v(p,0)
t=1
break}if(J.yH(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.v(p,0)
t=1
break}throw H.k("Invalid WordList file header: '"+H.B(p[0])+"'")}o=P.y
n=H.a([],[o])
m=P.cG(o,B.ka)
q.a=null
l=P.cG(o,o)
for(k=P.X,j=B.dC,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cK()
""+i
H.B(g)
f.toString
f=J.eW(g,$.$get$xp())
if(0>=f.length){r=H.v(f,0)
t=1
break $async$outer}g=f[0]
f=J.bh(g)
if(f.gU(g)===!0){$.$get$cK().toString
continue}if(f.ae(g,$.$get$xq())){$.$get$cK().toString
continue}if(C.c.ae(g,"@")){e=C.c.af(g,1)
$.$get$cK().toString
n.push(e)}else if(C.c.ae(g,"?")){f=C.c.af(g,1)
f=$.$get$hX().aV(0,f)
f=H.dx(f,B.kB(),H.ax(f,"o",0),null)
d=P.d6(f,!0,H.ax(f,"o",0))
if(d.length<2)$.$get$cK().b9(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cK()
H.B(c)
H.B(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$xs()
a=f.ck(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.v(f,1)
t=1
break $async$outer}a0=J.cn(f[1])
a1=C.c.af(g,a0)
if(a1.length===0)continue
f=J.aq(a0)
if(f.P(a0,0)){a1=C.c.es(a1)
$.$get$cK().toString
f=P.cG(o,o)
a2=new B.ka(P.cG(o,k),f,a1,!1,null,null)
a2.de(null,null,j)
q.a=a2
f.av(0,l)
m.i(0,a1,q.a)}else if(f.P(a0,$.xt))if(C.c.ae(a1,"?")){a1=C.c.af(a1,1)
f=$.$get$hX().aV(0,a1)
f=H.dx(f,B.kB(),H.ax(f,"o",0),null)
d=P.d6(f,!0,H.ax(f,"o",0))
f=$.$get$cK()
f.toString
if(d.length<2)f.b9(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kF(d[0],$.$get$fw(),"")
if(1>=d.length){r=H.v(d,1)
t=1
break $async$outer}b=J.kF(d[1],$.$get$fw(),"")
f=$.$get$cK()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.ae(a1,"@")){e=C.c.af(a1,1)
$.$get$cK().toString
f=$.$get$hX().aV(0,a1)
f=H.dx(f,B.kB(),H.ax(f,"o",0),null)
d=P.d6(f,!0,H.ax(f,"o",0))
a4=d.length>1?H.wU(d[1],new U.pH(q,d)):1
q.a.c.i(0,C.c.cX(e,$.$get$fw(),""),a4)}else{$.$get$cK().toString
f=$.$get$hX().aV(0,g)
f=H.dx(f,B.kB(),H.ax(f,"o",0),null)
d=P.d6(f,!0,H.ax(f,"o",0))
a4=d.length>1?H.wU(d[1],new U.pI(q,d)):1
if(0>=d.length){r=H.v(d,0)
t=1
break $async$outer}f=C.c.bi(J.kF(d[0],$.$get$fw(),""))
h=new B.dC(null)
a3=P.cG(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.vm(a4)),[H.ax(f,"cU",0)]))}else if(f.P(a0,$.xt*2)){$.$get$cK().toString
f=$.$get$hX().aV(0,g)
f=H.dx(f,B.kB(),H.ax(f,"o",0),null)
d=P.d6(f,!0,H.ax(f,"o",0))
f=d.length
if(f!==2)$.$get$cK().b9(C.h,"Invalid variant for "+H.B(h.d1(0))+" in "+q.a.e)
else{if(0>=f){r=H.v(d,0)
t=1
break $async$outer}f=C.c.bi(J.kF(d[0],$.$get$fw(),""))
if(1>=d.length){r=H.v(d,1)
t=1
break $async$outer}a3=C.c.cX(U.GA(d[1]),$.$get$fw(),"")
h.a.i(0,f,a3)}}}}}r=new B.i0(n,m)
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$O,s)},
$aseJ:function(){return[B.i0]},
$ascb:function(){return[B.i0,P.y]}}
U.pH.prototype={
$1:function(a){var t,s,r
t=$.$get$cK()
s=this.b
if(1>=s.length)return H.v(s,1)
r="Invalid include weight '"+H.B(s[1])+"' for word '"
if(0>=s.length)return H.v(s,0)
t.b9(C.m,r+H.B(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.y]}}}
U.pI.prototype={
$1:function(a){var t,s,r
t=$.$get$cK()
s=this.b
if(1>=s.length)return H.v(s,1)
r="Invalid weight '"+H.B(s[1])+"' for word '"
if(0>=s.length)return H.v(s,0)
t.b9(C.m,r+H.B(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.y]}}}
F.pK.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a6)
s=[G.a2]
r=A.i("Make a World Book",H.a([$.K,$.aj,$.aD],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.aZ,$.O,$.mF],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.aD,$.K,$.Z],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aD,$.K,$.Z],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.aD,$.K],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.D,$.Z,$.mF,$.aj],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aD,$.K,$.D],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aD,$.K],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.ac,P.X]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.j)
q.i(0,$.cC,$.j)
q.i(0,$.be,$.n)
q.i(0,$.aN,$.n)
q.i(0,$.f9,$.n)
p=$.m
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.r+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.a_("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.bF("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dl,$.n)
s.i(0,$.cE,$.n)
s.i(0,$.cp,$.n)
s.i(0,$.be,$.n)
p=$.r
o="An Excited "+p+" rushes up to the "
n=$.m
s.i(0,new R.a_("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.L+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.A(),!1,!1,new Y.dh("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cE,$.n)
t.i(0,$.dM,$.j)
t.i(0,$.cp,$.j)
t.i(0,$.dl,$.n)
t.i(0,$.f7,$.j)
r=$.m
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.r
t.i(0,new R.a_("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.A(),!1,!1,new Y.dh("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aC)}}
B.pP.prototype={
aP:function(a){return"application/x-tar"},
O:function(a,b){var t=0,s=P.bw(),r,q,p
var $async$O=P.bB(function(c,d){if(c===1)return P.by(d,s)
while(true)switch(t){case 0:q=$.$get$xu()
p=J.vc(b)
q.toString
r=q.hh(T.tx(p,0,null,0),!1)
t=1
break
case 1:return P.bz(r,s)}})
return P.bA($async$O,s)},
$asds:function(){return[T.fM]},
$ascb:function(){return[T.fM,P.bi]}}
A.fU.prototype={}
B.dt.prototype={
cC:function(a){if(a)this.b=(this.b|C.a.ao(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.N+=H.hO(this.b)
this.b=0}},
ag:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ao(1,t)
if(typeof a!=="number")return a.aH()
this.cC((a&s)>>>0>0)}},
h3:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.at(1,t-s)
if(typeof a!=="number")return a.aH()
this.cC((a&r)>>>0>0)}},
bT:function(a){var t,s
a=J.eg(a,1)
t=C.d.dc(Math.log(H.kw(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cC(!1)
this.h3(a,t+1)},
b2:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.N
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.ai(r)
q+=r
p=r}else p=0
r=H.cD(q)
o=new Uint8Array(r)
if(t){n=H.cS(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.v(o,m)
o[m]=l}}t=s.N
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a4(k,m)
if(s<0||s>=r)return H.v(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.v(o,t)
o[t]=s}return o.buffer}}
B.di.prototype={
cs:function(a){var t,s,r,q
t=C.f.ai(a/8)
s=C.a.bI(a,8)
r=this.a.getUint8(t)
q=C.a.at(1,s)
if(typeof r!=="number")return r.aH()
return(r&q)>>>0>0},
a9:function(a){var t,s,r
if(a>32)throw H.k(P.e0(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cs(this.b);++this.b
if(r)t=(t|C.a.ao(1,s))>>>0}return t},
i0:function(a){var t,s,r,q
if(a>32)throw H.k(P.e0(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cs(this.b);++this.b
if(q)s=(s|C.a.at(1,t-r))>>>0}return s},
c0:function(){var t,s,r
for(t=0;!0;){s=this.cs(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.i0(t+1)-1}}
A.e2.prototype={
A:function(a){return"rgb("+H.B(this.b)+", "+H.B(this.c)+", "+H.B(this.d)+", "+H.B(this.a)+")"},
ic:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.at()
s=this.c
if(typeof s!=="number")return s.at()
r=this.d
if(typeof r!=="number")return r.at()
q=this.a
if(typeof q!=="number")return H.ai(q)
return(t<<24|s<<16|r<<8|q)>>>0},
P:function(a,b){var t,s
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
ga6:function(a){return this.ic(!0)},
T:function(a,b){var t,s,r,q,p,o,n,m
t=J.aq(b)
if(!!t.$ise2){t=this.b
s=b.b
if(typeof t!=="number")return t.T()
if(typeof s!=="number")return H.ai(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.T()
if(typeof q!=="number")return H.ai(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.T()
if(typeof o!=="number")return H.ai(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.T()
if(typeof m!=="number")return H.ai(m)
return A.fY(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.b5()
s=this.c
if(typeof s!=="number")return s.b5()
r=this.d
if(typeof r!=="number")return r.b5()
q=this.a
if(typeof q!=="number")return q.b5()
return A.vu(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.T()
s=this.c
if(typeof s!=="number")return s.T()
r=this.d
if(typeof r!=="number")return r.T()
return A.fY(t+b,s+b,r+b,this.a)}throw H.k("Cannot add ["+H.B(t.gac(b))+" "+H.B(b)+"] to a Colour. Only Colour, double and int are valid.")},
aq:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.b5()
s=this.c
if(typeof s!=="number")return s.b5()
r=this.d
if(typeof r!=="number")return r.b5()
q=this.a
if(typeof q!=="number")return q.b5()
return A.vu(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.k("Colour index out of range: "+H.B(b))},
i:function(a,b,c){var t,s
t=J.dF(b)
if(t.a2(b,0)||t.aC(b,3))throw H.k("Colour index out of range: "+H.B(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.P(b,0)){this.b=C.a.ad(c,0,255)
this.e=!0
this.y=!0}else if(t.P(b,1)){this.c=C.a.ad(c,0,255)
this.e=!0
this.y=!0}else if(t.P(b,2)){this.d=C.a.ad(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ad(c,0,255)
else if(t.P(b,0)){this.b=C.a.ad(J.kE(J.vb(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.P(b,1)){this.c=C.a.ad(J.kE(J.vb(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kx(c)
if(t.P(b,2)){this.d=C.a.ad(J.kE(s.aq(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ad(J.kE(s.aq(c,255)),0,255)}},
eZ:function(a,b,c,d){this.b=C.d.ad(C.d.ad(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ad(C.d.ad(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ad(C.d.ad(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ad(J.yf(d,0,255),0,255)}}
A.rx.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.y]}}}
A.n6.prototype={
$1:function(a){return this.a.el(a)},
$S:function(){return{func:1,args:[,]}}}
A.n4.prototype={
$1:function(a){this.a.O(0,a).b1(this.b.ghY())},
$S:function(){return{func:1,args:[,]}}}
A.n5.prototype={
$1:function(a){this.a.ha(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.n7.prototype={
$1:function(a){return this.a.az(0,this.b)},
$S:function(){return{func:1,args:[W.U]}}}
F.hB.prototype={
A:function(a){return this.b}}
F.hC.prototype={
b9:function(a,b){F.Ff(a).$1("("+this.c+")["+H.B(C.b.gb8(a.b.split(".")))+"]: "+H.B(b))},
cI:function(a,b){this.b9(C.h,b)},
gG:function(a){return this.c}}
F.u8.prototype={}
O.rR.prototype={
$1:function(a){return H.B(a.ba(1))+" = "+H.B(a.ba(2))+C.c.aq("../",this.a)},
$S:function(){return{func:1,args:[P.dy]}}}
O.rS.prototype={
$0:function(){var t=document
J.vi(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.w,null)
t=H.kA(t.querySelector("#voidButton"),"$isfW")
t.toString
W.fA(t,"click",new O.rQ(),!1,W.Ic)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.HZ("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rQ.prototype={
$1:function(a){return O.I3()},
$S:function(){return{func:1,args:[W.U]}}}
R.hk.prototype={}
R.up.prototype={}
R.uo.prototype={}
A.nK.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.Z(0,b)?t.n(0,b):$.$get$un()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.Z(0,b)?t.n(0,b):$.$get$un()}throw H.k(P.e0(b,"'name' should be a String name or int id only",null))},
gV:function(a){var t=this.a
t=t.gc4(t)
return new H.jF(null,J.df(t.a),t.b,[H.Q(t,0),H.Q(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.Z(0,b))this.am(0,b)
s=this.fK()
if(typeof s!=="number")return s.ar()
if(s>=256)throw H.k(P.e0(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
am:function(a,b){var t,s,r
t=this.a
if(!t.Z(0,b))return
s=this.c
r=s.n(0,b)
t.am(0,b)
this.b.am(0,r)
s.am(0,b)
this.d.am(0,r)},
fK:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.Z(0,s))return s;++s}}}
A.jP.prototype={
$aso:function(){return[A.e2]},
$iso:1}
Q.jQ.prototype={}
A.jT.prototype={
bA:function(a){if(a===0)return 0
return this.fL(a)},
hO:function(){return this.bA(4294967295)},
fL:function(a){var t,s
t=this.a
if(a>4294967295){s=t.cN()
this.b=C.d.bC(s*4294967295)
return C.d.ai(s*a)}else{s=t.bA(a)
this.b=s
return s}},
d4:function(a){var t=a==null
this.a=t?C.P:P.GP(a)
if(!t)this.b=J.eg(a,1)},
hW:function(a,b){var t=a.length
if(t===0)return
t=this.bA(t)
if(t<0||t>=a.length)return H.v(a,t)
return a[t]},
hV:function(a){return this.hW(a,!0)}}
Y.dS.prototype={
cA:function(a){var t,s
if(this.b!=null)throw H.k("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bm(0,$.ao,null,t)
this.c.push(new P.dY(s,t))
return s},
el:function(a){var t,s,r
if(this.b!=null)throw H.k("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r)t[r].az(0,this.b)
C.b.sm(t,0)}}
V.lA.prototype={
$4:function(a,b,c,d){return V.zx(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bi,P.bi,O.d_]}}}
V.lz.prototype={
$4:function(a,b,c,d){return V.zw(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.C,P.C,O.d_]}}}
V.ly.prototype={
$4:function(a,b,c,d){return V.zt(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bi,P.bi,O.d_]}}}
V.lx.prototype={
$4:function(a,b,c,d){return V.zs(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.C,P.C,O.d_]}}}
O.d_.prototype={
i1:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.a
s=this.b
for(r=this.x,q=r.length,p=s,o=t,n=-1,m=-1,l=null,k=0;k<t;++k)for(j=0;j<s;++j){l=j*t+k
if(l>=q)return H.v(r,l)
if(r[l]!==0){if(k<o)o=k
else if(k>n)n=k
if(j<p)p=j
else if(j>m)m=j}}i=Math.max(0,n-o+1)
h=Math.max(0,m-p+1)
this.c=o
this.d=p
this.e=i
this.f=h},
ik:function(a,b,c,d){var t,s,r,q,p
t=J.bf(d)
s=0
while(!0){r=t.gef(d)
if(typeof r!=="number")return H.ai(r)
if(!(s<r))break
q=(C.a.dc(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.v(r,q)
r[q]=p;++s}}}
D.ox.prototype={
$1:function(a){return J.yo(a)},
$S:function(){return{func:1,args:[D.cl]}}}
D.oy.prototype={
$1:function(a){return a},
$S:function(){return{func:1,args:[D.cl]}}}
D.oz.prototype={
$1:function(a){return a.ghX()},
$S:function(){return{func:1,args:[D.cl]}}}
D.cl.prototype={
A:function(a){return this.a},
gG:function(a){return this.a},
ghX:function(){return this.d}}
D.kb.prototype={}
D.o7.prototype={}
B.dC.prototype={
ez:function(a,b){if(this.a.Z(0,"MAIN"))return this.a.n(0,"MAIN")
return},
d1:function(a){return this.ez(a,null)},
A:function(a){return"[Word: "+H.B(this.d1(0))+"]"}}
B.ka.prototype={
A:function(a){return"WordList '"+this.e+"': "+this.eV(0)},
$isp:1,
$asp:function(){return[B.dC]},
$asdX:function(){return[B.dC]},
$asi_:function(){return[B.dC]},
$ascU:function(){return[B.dC]},
$aso:function(){return[B.dC]},
$ast:function(){return[B.dC]},
gG:function(a){return this.e}}
B.i0.prototype={
A:function(a){return"[WordListFile: "+this.b.A(0)+" ]"}}
S.fp.prototype={}
S.uP.prototype={}
S.uQ.prototype={}
S.uR.prototype={}
S.tf.prototype={}
S.ti.prototype={}
S.t5.prototype={}
S.uz.prototype={}
S.uT.prototype={}
S.uU.prototype={}
S.l1.prototype={}
S.ur.prototype={}
S.um.prototype={}
S.mZ.prototype={}
S.t9.prototype={}
S.t0.prototype={}
S.lj.prototype={}
S.u9.prototype={}
S.lk.prototype={}
S.nM.prototype={}
S.uG.prototype={}
S.uD.prototype={}
S.uH.prototype={}
S.t_.prototype={}
S.me.prototype={}
S.l_.prototype={}
S.t4.prototype={}
S.t3.prototype={}
S.us.prototype={}
S.uI.prototype={}
S.ut.prototype={}
S.th.prototype={}
S.tg.prototype={}
S.uF.prototype={}
S.uE.prototype={}
S.pa.prototype={}
S.uK.prototype={}
S.t6.prototype={}
S.t7.prototype={}
S.uS.prototype={}
S.hE.prototype={}
S.ue.prototype={}
S.uf.prototype={}
S.ug.prototype={}
S.uh.prototype={}
S.uA.prototype={}
S.uB.prototype={}
S.uC.prototype={}
S.ud.prototype={}
S.uj.prototype={}
S.uk.prototype={}
S.tu.prototype={}
S.tv.prototype={}
S.tw.prototype={}
S.ul.prototype={}
S.ui.prototype={}
S.t1.prototype={}
S.uM.prototype={}
S.uN.prototype={}
S.uL.prototype={}
Z.u3.prototype={}
Z.u_.prototype={}
Z.u0.prototype={}
Q.cU.prototype={
k:function(a,b){return b},
A:function(a){return J.cz(this.gbZ())},
aw:function(a,b){return Q.uW(this,b,H.ax(this,"cU",0),null)},
a1:function(a,b){return Q.uV(this,!1,!0,null,H.ax(this,"cU",0))},
an:function(a){return this.a1(a,!0)},
$iso:1,
$aso:null}
Q.dX.prototype={
gbZ:function(){return this.b},
bS:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.vm(c)),[H.ax(this,"cU",0)]))},
h:function(a,b){return this.bS(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return J.vg(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.v(t,b)
t[b]=new Q.h(c,s,[H.ax(this,"cU",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
A:function(a){return P.jx(this.b,"[","]")},
aw:function(a,b){return Q.uW(this,b,H.ax(this,"dX",0),null)},
a1:function(a,b){return Q.uV(this,!1,!0,null,H.ax(this,"dX",0))},
an:function(a){return this.a1(a,!0)},
de:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.i_.prototype={$ascU:null,$aso:null,$asp:null,$ast:null,$isp:1,$ist:1,$iso:1}
Q.h.prototype={
A:function(a){return"("+H.B(this.a)+" @ "+H.B(this.b)+")"},
gX:function(a){return this.a},
gd_:function(a){return this.b}}
Q.eR.prototype={
gbZ:function(){return this.b},
gV:function(a){var t=new Q.pD(null,[H.ax(this,"eR",0)])
t.a=J.df(this.b)
return t},
gm:function(a){return J.cn(this.b)},
A:function(a){return J.cz(this.b)},
aw:function(a,b){return Q.uW(this,b,H.ax(this,"eR",0),null)},
a1:function(a,b){return Q.uV(this,!1,!0,null,H.ax(this,"eR",0))},
an:function(a){return this.a1(a,!0)}}
Q.hZ.prototype={$ascU:null,$aso:null,$iso:1}
Q.pD.prototype={
gR:function(){return J.vg(this.a.gR())},
F:function(){return this.a.F()}}
Q.k7.prototype={
$aseR:function(a,b){return[b]},
$ashZ:function(a,b){return[b]},
$ascU:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
Q.pE.prototype={
$1:function(a){var t=J.bf(a)
return new Q.h(this.c.$1(t.gX(a)),t.gd_(a),[this.b])},
$S:function(){return H.eV(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"k7")}}
J.f.prototype.eS=J.f.prototype.A
J.hv.prototype.eU=J.hv.prototype.A
P.dp.prototype.eW=P.dp.prototype.bK
P.dp.prototype.eX=P.dp.prototype.bJ
P.aS.prototype.da=P.aS.prototype.a3
P.o.prototype.eT=P.o.prototype.c6
W.cA.prototype.ca=W.cA.prototype.aA
W.i9.prototype.eY=W.i9.prototype.aW
Q.dX.prototype.eV=Q.dX.prototype.A;(function installTearOffs(){installTearOff(H.fC.prototype,"ghJ",0,0,0,null,["$0"],["bX"],1)
installTearOff(H.dE.prototype,"geC",0,0,0,null,["$1"],["ax"],11)
installTearOff(H.eS.prototype,"ghk",0,0,0,null,["$1"],["aX"],11)
installTearOff(H,"xM",1,0,0,null,["$1"],["Hg"],14)
installTearOff(P,"Hj",1,0,0,null,["$1"],["GE"],7)
installTearOff(P,"Hk",1,0,0,null,["$1"],["GF"],7)
installTearOff(P,"Hl",1,0,0,null,["$1"],["GG"],7)
installTearOff(P,"xY",1,0,0,null,["$0"],["Hf"],1)
installTearOff(P.kf.prototype,"ge1",0,0,0,null,["$2","$1"],["cF","bp"],13)
installTearOff(P.bm.prototype,"gbc",0,0,0,null,["$2","$1"],["ak","fj"],13)
var t
installTearOff(t=P.dp.prototype,"gdI",0,0,0,null,["$0"],["bN"],1)
installTearOff(t,"gdJ",0,0,0,null,["$0"],["bO"],1)
installTearOff(t=P.i4.prototype,"gdI",0,0,0,null,["$0"],["bN"],1)
installTearOff(t,"gdJ",0,0,0,null,["$0"],["bO"],1)
installTearOff(t,"gfw",0,0,0,null,["$1"],["fz"],function(){return H.eV(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"i4")})
installTearOff(t,"gfC",0,0,0,null,["$2"],["fD"],16)
installTearOff(t,"gfA",0,0,0,null,["$0"],["fB"],1)
installTearOff(P.kl.prototype,"ghb",0,1,0,null,["$1"],["W"],17)
installTearOff(P,"Hu",1,0,0,null,["$2"],["z9"],32)
installTearOff(P,"Hv",1,0,0,null,["$1"],["fJ"],4)
installTearOff(W,"HI",1,0,0,null,["$4"],["GL"],12)
installTearOff(W,"HJ",1,0,0,null,["$4"],["GM"],12)
installTearOff(t=W.ik.prototype,"gap",0,1,0,null,["$1"],["cI"],4)
installTearOff(t,"ghC",0,0,0,null,["$1"],["ec"],4)
installTearOff(t,"gih",0,0,0,null,["$1"],["ii"],4)
installTearOff(W.f4.prototype,"gX",0,1,0,null,["$1"],["J"],5)
installTearOff(W.io.prototype,"gX",0,1,0,null,["$1"],["J"],34)
installTearOff(W.iu.prototype,"gX",0,1,0,null,["$1"],["J"],5)
installTearOff(W.iv.prototype,"gX",0,1,0,null,["$1"],["J"],14)
installTearOff(W.iw.prototype,"gX",0,1,0,null,["$1"],["J"],5)
installTearOff(W.fd.prototype,"gX",0,1,0,null,["$1"],["J"],15)
installTearOff(W.iL.prototype,"gX",0,1,0,null,["$1"],["J"],9)
installTearOff(W.fe.prototype,"gX",0,1,0,null,["$1"],["J"],8)
installTearOff(W.iN.prototype,"gX",0,1,0,null,["$1"],["J"],8)
installTearOff(W.jG.prototype,"gX",0,1,0,null,["$1"],["J"],5)
installTearOff(W.jH.prototype,"gX",0,1,0,null,["$1"],["J"],10)
installTearOff(W.jK.prototype,"gcS",0,1,0,null,["$0"],["cT"],6)
installTearOff(W.ci.prototype,"gX",0,1,0,null,["$1"],["J"],10)
installTearOff(W.jS.prototype,"gX",0,1,0,null,["$1"],["J"],18)
installTearOff(W.jW.prototype,"gX",0,1,0,null,["$1"],["J"],9)
installTearOff(W.jY.prototype,"gX",0,1,0,null,["$1"],["J"],19)
installTearOff(W.jZ.prototype,"gX",0,1,0,null,["$1"],["J"],20)
installTearOff(W.ck.prototype,"gX",0,1,0,null,["$1"],["J"],21)
installTearOff(W.k3.prototype,"gX",0,1,0,null,["$1"],["J"],22)
installTearOff(W.k4.prototype,"gX",0,1,0,null,["$1"],["J"],23)
installTearOff(t=W.k5.prototype,"gc_",0,1,0,null,["$0"],["hT"],6)
installTearOff(t,"gcS",0,1,0,null,["$0"],["cT"],6)
installTearOff(W.k6.prototype,"gX",0,1,0,null,["$1"],["J"],24)
installTearOff(W.i1.prototype,"gX",0,1,0,null,["$1"],["J"],25)
installTearOff(W.kg.prototype,"gX",0,1,0,null,["$1"],["J"],26)
installTearOff(W.kk.prototype,"gX",0,1,0,null,["$1"],["J"],35)
installTearOff(W.i8.prototype,"gX",0,1,0,null,["$1"],["J"],28)
installTearOff(W.ko.prototype,"gX",0,1,0,null,["$1"],["J"],29)
installTearOff(W.kq.prototype,"gX",0,1,0,null,["$1"],["J"],30)
installTearOff(P.k_.prototype,"gX",0,1,0,null,["$1"],["J"],31)
installTearOff(R,"dR",1,0,0,null,["$1"],["wX"],0)
installTearOff(R,"FJ",1,0,0,null,["$1"],["FZ"],0)
installTearOff(R,"FF",1,0,0,null,["$1"],["FK"],0)
installTearOff(R,"o3",1,0,0,null,["$1"],["FY"],0)
installTearOff(R,"c0",1,0,0,null,["$1"],["FX"],0)
installTearOff(R,"o2",1,0,0,null,["$1"],["FW"],0)
installTearOff(R,"o1",1,0,0,null,["$1"],["FU"],0)
installTearOff(R,"fs",1,0,0,null,["$1"],["FS"],0)
installTearOff(R,"d9",1,0,0,null,["$1"],["FO"],0)
installTearOff(R,"ec",1,0,0,null,["$1"],["FQ"],0)
installTearOff(R,"dQ",1,0,0,null,["$1"],["FV"],0)
installTearOff(R,"uy",1,0,0,null,["$1"],["FP"],0)
installTearOff(R,"FH",1,0,0,null,["$1"],["FR"],0)
installTearOff(R,"FI",1,0,0,null,["$1"],["FT"],0)
installTearOff(R,"A",1,0,0,null,["$1"],["FL"],0)
installTearOff(R,"FG",1,0,0,null,["$1"],["FM"],0)
installTearOff(F.hC.prototype,"gap",0,1,0,null,["$1"],["cI"],4)
installTearOff(O,"HR",1,0,0,null,["$1"],["HT"],33)
installTearOff(Y.dS.prototype,"ghY",0,0,0,null,["$1"],["el"],function(){return H.eV(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dS")})
installTearOff(V,"HX",1,0,0,null,["$4"],["zv"],3)
installTearOff(V,"HW",1,0,0,null,["$4"],["zu"],2)
installTearOff(B,"kB",1,0,0,null,["$1"],["Ha"],27)
installTearOff(M,"x4",1,0,0,null,["$0"],["HP"],1)
installTearOff(T,"Hp",1,0,0,null,["$4"],["zl"],3)
installTearOff(T,"Ho",1,0,0,null,["$4"],["zk"],2)
installTearOff(T,"Hn",1,0,0,null,["$4"],["zj"],3)
installTearOff(T,"Hm",1,0,0,null,["$4"],["zi"],2)
installTearOff(F,"HD",1,0,0,null,["$4"],["zr"],3)
installTearOff(F,"HC",1,0,0,null,["$4"],["zq"],2)
installTearOff(F,"HB",1,0,0,null,["$4"],["zp"],3)
installTearOff(F,"HA",1,0,0,null,["$4"],["zo"],2)
installTearOff(F,"Hz",1,0,0,null,["$4"],["zn"],3)
installTearOff(F,"Hy",1,0,0,null,["$4"],["zm"],2)})();(function inheritance(){inherit(P.ad,null)
var t=P.ad
inherit(H.u5,t)
inherit(J.f,t)
inherit(J.ih,t)
inherit(P.fq,t)
inherit(P.o,t)
inherit(H.ez,t)
inherit(P.jy,t)
inherit(H.iI,t)
inherit(H.pn,t)
inherit(H.f2,t)
inherit(H.qF,t)
inherit(H.fC,t)
inherit(H.qb,t)
inherit(H.eT,t)
inherit(H.qE,t)
inherit(H.pY,t)
inherit(H.ft,t)
inherit(H.pe,t)
inherit(H.dJ,t)
inherit(H.dE,t)
inherit(H.eS,t)
inherit(P.jE,t)
inherit(H.l7,t)
inherit(H.o6,t)
inherit(H.pk,t)
inherit(P.el,t)
inherit(H.hc,t)
inherit(H.kp,t)
inherit(H.dW,t)
inherit(H.w,t)
inherit(H.n_,t)
inherit(H.n1,t)
inherit(H.hu,t)
inherit(H.kn,t)
inherit(H.kd,t)
inherit(H.k1,t)
inherit(H.r0,t)
inherit(P.cF,t)
inherit(P.f3,t)
inherit(P.kf,t)
inherit(P.kj,t)
inherit(P.bm,t)
inherit(P.ke,t)
inherit(P.dn,t)
inherit(P.oB,t)
inherit(P.dp,t)
inherit(P.kh,t)
inherit(P.q5,t)
inherit(P.qI,t)
inherit(P.qZ,t)
inherit(P.eY,t)
inherit(P.rh,t)
inherit(P.qv,t)
inherit(P.qx,t)
inherit(P.ol,t)
inherit(P.qC,t)
inherit(P.dD,t)
inherit(P.fk,t)
inherit(P.aS,t)
inherit(P.r8,t)
inherit(P.qD,t)
inherit(P.fX,t)
inherit(P.h_,t)
inherit(P.ra,t)
inherit(P.cV,t)
inherit(P.bI,t)
inherit(P.e3,t)
inherit(P.dr,t)
inherit(P.dL,t)
inherit(P.nG,t)
inherit(P.k0,t)
inherit(P.qg,t)
inherit(P.bP,t)
inherit(P.lD,t)
inherit(P.p,t)
inherit(P.b_,t)
inherit(P.d7,t)
inherit(P.dy,t)
inherit(P.dU,t)
inherit(P.y,t)
inherit(P.ce,t)
inherit(P.eO,t)
inherit(P.ks,t)
inherit(P.po,t)
inherit(P.qX,t)
inherit(W.ik,t)
inherit(W.jO,t)
inherit(W.im,t)
inherit(W.pX,t)
inherit(P.lb,t)
inherit(W.i6,t)
inherit(W.bq,t)
inherit(W.jM,t)
inherit(W.i9,t)
inherit(W.r4,t)
inherit(W.iJ,t)
inherit(W.ea,t)
inherit(W.r7,t)
inherit(W.qT,t)
inherit(W.kt,t)
inherit(P.r1,t)
inherit(P.pQ,t)
inherit(P.qB,t)
inherit(P.qK,t)
inherit(P.qL,t)
inherit(P.bi,t)
inherit(P.dd,t)
inherit(T.fN,t)
inherit(T.dg,t)
inherit(T.ho,t)
inherit(T.nI,t)
inherit(T.pM,t)
inherit(T.pN,t)
inherit(T.pO,t)
inherit(T.pL,t)
inherit(T.mo,t)
inherit(T.iO,t)
inherit(B.hp,t)
inherit(N.ac,t)
inherit(L.fO,t)
inherit(A.jP,t)
inherit(O.cb,t)
inherit(T.hQ,t)
inherit(M.fV,t)
inherit(Z.ph,t)
inherit(X.iz,t)
inherit(X.ii,t)
inherit(M.hd,t)
inherit(Z.iy,t)
inherit(E.nE,t)
inherit(E.N,t)
inherit(A.a6,t)
inherit(U.b,t)
inherit(Y.dT,t)
inherit(K.cH,t)
inherit(X.F,t)
inherit(G.a2,t)
inherit(A.fU,t)
inherit(B.dt,t)
inherit(B.di,t)
inherit(A.e2,t)
inherit(F.hB,t)
inherit(F.hC,t)
inherit(Q.jQ,t)
inherit(A.jT,t)
inherit(Y.dS,t)
inherit(O.d_,t)
inherit(D.cl,t)
inherit(B.dC,t)
inherit(Q.cU,t)
inherit(B.i0,t)
inherit(Q.h,t)
t=J.f
inherit(J.mM,t)
inherit(J.mN,t)
inherit(J.hv,t)
inherit(J.ev,t)
inherit(J.fl,t)
inherit(J.ew,t)
inherit(H.fm,t)
inherit(H.eC,t)
inherit(W.aI,t)
inherit(W.cM,t)
inherit(W.f0,t)
inherit(W.h0,t)
inherit(W.bO,t)
inherit(W.iP,t)
inherit(W.lm,t)
inherit(W.f5,t)
inherit(W.io,t)
inherit(W.is,t)
inherit(W.lp,t)
inherit(W.it,t)
inherit(W.iQ,t)
inherit(W.iv,t)
inherit(W.iw,t)
inherit(W.h5,t)
inherit(W.U,t)
inherit(W.iR,t)
inherit(W.m5,t)
inherit(W.m8,t)
inherit(W.cq,t)
inherit(W.mj,t)
inherit(W.iS,t)
inherit(W.hn,t)
inherit(W.ee,t)
inherit(W.n9,t)
inherit(W.jG,t)
inherit(W.cs,t)
inherit(W.j1,t)
inherit(W.nw,t)
inherit(W.nx,t)
inherit(W.jK,t)
inherit(W.j2,t)
inherit(W.nN,t)
inherit(W.eb,t)
inherit(W.ef,t)
inherit(W.ci,t)
inherit(W.j3,t)
inherit(W.oj,t)
inherit(W.cu,t)
inherit(W.j4,t)
inherit(W.fv,t)
inherit(W.ck,t)
inherit(W.ou,t)
inherit(W.oA,t)
inherit(W.cm,t)
inherit(W.j5,t)
inherit(W.pd,t)
inherit(W.cw,t)
inherit(W.j6,t)
inherit(W.fx,t)
inherit(W.k4,t)
inherit(W.k5,t)
inherit(W.pt,t)
inherit(W.fy,t)
inherit(W.k6,t)
inherit(W.q0,t)
inherit(W.j7,t)
inherit(W.j8,t)
inherit(W.iT,t)
inherit(W.iU,t)
inherit(W.iV,t)
inherit(W.iW,t)
inherit(W.rf,t)
inherit(W.rg,t)
inherit(P.ms,t)
inherit(P.nD,t)
inherit(P.d5,t)
inherit(P.iX,t)
inherit(P.d8,t)
inherit(P.iY,t)
inherit(P.nV,t)
inherit(P.iZ,t)
inherit(P.dc,t)
inherit(P.j_,t)
inherit(P.pz,t)
inherit(P.fQ,t)
inherit(P.kI,t)
inherit(P.o8,t)
inherit(P.re,t)
inherit(P.j0,t)
t=J.hv
inherit(J.nT,t)
inherit(J.eM,t)
inherit(J.ex,t)
inherit(F.u8,t)
inherit(R.hk,t)
inherit(R.up,t)
inherit(R.uo,t)
inherit(S.fp,t)
inherit(S.uP,t)
inherit(S.uQ,t)
inherit(S.uR,t)
inherit(S.tf,t)
inherit(S.ti,t)
inherit(S.t5,t)
inherit(S.uT,t)
inherit(S.uU,t)
inherit(S.lj,t)
inherit(S.uG,t)
inherit(S.uH,t)
inherit(S.t_,t)
inherit(S.me,t)
inherit(S.l_,t)
inherit(S.t4,t)
inherit(S.t3,t)
inherit(S.th,t)
inherit(S.pa,t)
inherit(S.t7,t)
inherit(S.hE,t)
inherit(S.uf,t)
inherit(S.uh,t)
inherit(S.uB,t)
inherit(S.uC,t)
inherit(S.uj,t)
inherit(S.uk,t)
inherit(S.tv,t)
inherit(S.tw,t)
inherit(S.ul,t)
inherit(S.ui,t)
inherit(S.t1,t)
inherit(S.uM,t)
inherit(S.uN,t)
inherit(S.uL,t)
inherit(Z.u3,t)
inherit(Z.u_,t)
inherit(Z.u0,t)
inherit(J.u4,J.ev)
t=J.fl
inherit(J.jA,t)
inherit(J.jz,t)
inherit(P.hz,P.fq)
t=P.hz
inherit(H.hY,t)
inherit(W.ki,t)
inherit(W.d2,t)
inherit(H.l4,H.hY)
t=P.o
inherit(H.t,t)
inherit(H.hD,t)
inherit(H.eP,t)
inherit(P.hs,t)
inherit(H.r_,t)
t=H.t
inherit(H.ey,t)
inherit(H.n0,t)
inherit(P.qw,t)
inherit(P.eF,t)
t=H.ey
inherit(H.oX,t)
inherit(H.eB,t)
inherit(P.n2,t)
inherit(H.h3,H.hD)
t=P.jy
inherit(H.jF,t)
inherit(H.k8,t)
inherit(Q.pD,t)
t=H.f2
inherit(H.rU,t)
inherit(H.rV,t)
inherit(H.qA,t)
inherit(H.qc,t)
inherit(H.mx,t)
inherit(H.my,t)
inherit(H.qH,t)
inherit(H.pf,t)
inherit(H.pg,t)
inherit(H.rW,t)
inherit(H.rJ,t)
inherit(H.rK,t)
inherit(H.rL,t)
inherit(H.rM,t)
inherit(H.rN,t)
inherit(H.p2,t)
inherit(H.mQ,t)
inherit(H.mP,t)
inherit(H.rF,t)
inherit(H.rG,t)
inherit(H.rH,t)
inherit(P.pU,t)
inherit(P.pT,t)
inherit(P.pV,t)
inherit(P.pW,t)
inherit(P.ri,t)
inherit(P.rj,t)
inherit(P.rt,t)
inherit(P.rv,t)
inherit(P.md,t)
inherit(P.mc,t)
inherit(P.qh,t)
inherit(P.qp,t)
inherit(P.ql,t)
inherit(P.qm,t)
inherit(P.qn,t)
inherit(P.qj,t)
inherit(P.qo,t)
inherit(P.qi,t)
inherit(P.qs,t)
inherit(P.qt,t)
inherit(P.qr,t)
inherit(P.qq,t)
inherit(P.oE,t)
inherit(P.oC,t)
inherit(P.oD,t)
inherit(P.oF,t)
inherit(P.oK,t)
inherit(P.oI,t)
inherit(P.oJ,t)
inherit(P.oL,t)
inherit(P.oO,t)
inherit(P.oP,t)
inherit(P.oM,t)
inherit(P.oN,t)
inherit(P.oQ,t)
inherit(P.oR,t)
inherit(P.oG,t)
inherit(P.oH,t)
inherit(P.q_,t)
inherit(P.pZ,t)
inherit(P.qJ,t)
inherit(P.rl,t)
inherit(P.rk,t)
inherit(P.rm,t)
inherit(P.rs,t)
inherit(P.qN,t)
inherit(P.qO,t)
inherit(P.qP,t)
inherit(P.qy,t)
inherit(P.ry,t)
inherit(P.nf,t)
inherit(P.rc,t)
inherit(P.rb,t)
inherit(P.lt,t)
inherit(P.lu,t)
inherit(P.ps,t)
inherit(P.pp,t)
inherit(P.pq,t)
inherit(P.pr,t)
inherit(P.rw,t)
inherit(P.rp,t)
inherit(P.ro,t)
inherit(P.rq,t)
inherit(P.rr,t)
inherit(W.q2,t)
inherit(W.ru,t)
inherit(W.mm,t)
inherit(W.mn,t)
inherit(W.qf,t)
inherit(W.nz,t)
inherit(W.ny,t)
inherit(W.qV,t)
inherit(W.qW,t)
inherit(W.r6,t)
inherit(W.rd,t)
inherit(P.r3,t)
inherit(P.pR,t)
inherit(P.rz,t)
inherit(P.rA,t)
inherit(P.lc,t)
inherit(P.rn,t)
inherit(P.kO,t)
inherit(P.kP,t)
inherit(O.kW,t)
inherit(A.mL,t)
inherit(A.mK,t)
inherit(G.mI,t)
inherit(U.pH,t)
inherit(U.pI,t)
inherit(A.rx,t)
inherit(A.n6,t)
inherit(A.n4,t)
inherit(A.n5,t)
inherit(A.n7,t)
inherit(O.rR,t)
inherit(O.rS,t)
inherit(O.rQ,t)
inherit(V.lA,t)
inherit(V.lz,t)
inherit(V.ly,t)
inherit(V.lx,t)
inherit(D.ox,t)
inherit(D.oy,t)
inherit(D.oz,t)
inherit(Q.pE,t)
t=H.pY
inherit(H.fD,t)
inherit(H.ib,t)
inherit(P.eN,P.jE)
inherit(H.l8,P.eN)
inherit(H.fZ,H.l7)
inherit(H.l9,H.fZ)
t=P.el
inherit(H.jN,t)
inherit(H.mR,t)
inherit(H.pm,t)
inherit(H.l2,t)
inherit(H.ob,t)
inherit(P.fo,t)
inherit(P.cW,t)
inherit(P.V,t)
inherit(P.eL,t)
inherit(P.da,t)
inherit(P.bM,t)
inherit(P.ll,t)
t=H.p2
inherit(H.ow,t)
inherit(H.fS,t)
t=P.hs
inherit(H.pS,t)
inherit(T.fM,t)
t=H.eC
inherit(H.no,t)
inherit(H.jI,t)
t=H.jI
inherit(H.hJ,t)
inherit(H.hK,t)
inherit(H.hL,H.hJ)
inherit(H.hH,H.hL)
inherit(H.hM,H.hK)
inherit(H.hI,H.hM)
t=H.hH
inherit(H.np,t)
inherit(H.nq,t)
t=H.hI
inherit(H.nr,t)
inherit(H.ns,t)
inherit(H.nt,t)
inherit(H.nu,t)
inherit(H.nv,t)
inherit(H.jJ,t)
inherit(H.fn,t)
t=P.kf
inherit(P.dY,t)
inherit(P.kr,t)
t=P.kh
inherit(P.q4,t)
inherit(P.q6,t)
inherit(P.qY,P.qI)
t=P.dn
inherit(P.i3,t)
inherit(W.qd,t)
inherit(P.i4,P.dp)
inherit(P.qG,P.i3)
inherit(P.qM,P.rh)
inherit(P.km,H.w)
inherit(P.ok,P.ol)
inherit(P.qz,P.ok)
inherit(P.kl,P.qz)
t=P.fX
inherit(P.kT,t)
inherit(P.lw,t)
t=P.h_
inherit(P.kU,t)
inherit(P.pw,t)
inherit(P.pv,P.lw)
t=P.dr
inherit(P.X,t)
inherit(P.C,t)
t=P.cW
inherit(P.eE,t)
inherit(P.mt,t)
inherit(P.q3,P.ks)
t=W.aI
inherit(W.af,t)
inherit(W.h6,t)
inherit(W.l6,t)
inherit(W.m4,t)
inherit(W.m6,t)
inherit(W.m9,t)
inherit(W.hm,t)
inherit(W.hG,t)
inherit(W.nX,t)
inherit(W.jV,t)
inherit(W.om,t)
inherit(W.eQ,t)
inherit(W.ct,t)
inherit(W.h7,t)
inherit(W.cT,t)
inherit(W.cJ,t)
inherit(W.h8,t)
inherit(W.px,t)
inherit(W.pC,t)
inherit(W.k9,t)
inherit(W.pJ,t)
inherit(W.qU,t)
inherit(P.ln,t)
inherit(P.hP,t)
inherit(P.pi,t)
inherit(P.bC,t)
inherit(P.fR,t)
t=W.af
inherit(W.cA,t)
inherit(W.ej,t)
inherit(W.ek,t)
inherit(W.ir,t)
inherit(W.fz,t)
inherit(W.q7,t)
t=W.cA
inherit(W.ay,t)
inherit(P.c2,t)
t=W.ay
inherit(W.eX,t)
inherit(W.kJ,t)
inherit(W.hF,t)
inherit(W.kV,t)
inherit(W.f1,t)
inherit(W.fW,t)
inherit(W.iq,t)
inherit(W.lv,t)
inherit(W.m3,t)
inherit(W.iL,t)
inherit(W.mp,t)
inherit(W.fg,t)
inherit(W.mv,t)
inherit(W.mT,t)
inherit(W.jB,t)
inherit(W.hx,t)
inherit(W.ne,t)
inherit(W.ni,t)
inherit(W.nC,t)
inherit(W.nH,t)
inherit(W.nL,t)
inherit(W.fu,t)
inherit(W.jW,t)
inherit(W.oo,t)
inherit(W.hS,t)
inherit(W.k2,t)
inherit(W.p0,t)
inherit(W.p1,t)
inherit(W.hW,t)
inherit(W.p5,t)
inherit(W.qu,t)
inherit(W.f_,W.hF)
inherit(W.h9,W.h6)
inherit(W.kR,W.h9)
t=W.bO
inherit(W.ld,t)
inherit(W.le,t)
inherit(W.h1,t)
inherit(W.h2,t)
inherit(W.lf,t)
inherit(W.lg,t)
inherit(W.lh,t)
inherit(W.f4,W.iP)
inherit(W.q1,W.jO)
inherit(W.j9,W.iQ)
inherit(W.iu,W.j9)
t=W.U
inherit(W.lB,t)
inherit(W.os,t)
inherit(W.ot,t)
inherit(W.cg,W.f0)
inherit(W.ja,W.iR)
inherit(W.fd,W.ja)
inherit(W.jb,W.iS)
inherit(W.fe,W.jb)
inherit(W.iN,W.fe)
inherit(W.e9,W.hm)
inherit(W.hw,W.ee)
inherit(W.nj,W.hG)
inherit(W.jl,W.j1)
inherit(W.jH,W.jl)
inherit(W.jm,W.j2)
inherit(W.jL,W.jm)
inherit(W.nS,W.ef)
inherit(W.jn,W.j3)
inherit(W.jS,W.jn)
inherit(W.on,W.eQ)
inherit(W.ha,W.h7)
inherit(W.jY,W.ha)
inherit(W.jo,W.j4)
inherit(W.jZ,W.jo)
inherit(W.jp,W.j5)
inherit(W.p8,W.jp)
inherit(W.hb,W.h8)
inherit(W.p9,W.hb)
inherit(W.jq,W.j6)
inherit(W.k3,W.jq)
inherit(W.jr,W.j7)
inherit(W.i1,W.jr)
inherit(W.js,W.j8)
inherit(W.kg,W.js)
inherit(W.q8,W.it)
inherit(W.jc,W.iT)
inherit(W.kk,W.jc)
inherit(W.jd,W.iU)
inherit(W.i8,W.jd)
inherit(W.je,W.iV)
inherit(W.ko,W.je)
inherit(W.jf,W.iW)
inherit(W.kq,W.jf)
inherit(W.q9,W.pX)
t=P.lb
inherit(W.qa,t)
inherit(P.kN,t)
inherit(W.i2,W.qd)
inherit(W.qe,P.oB)
inherit(W.r5,W.i9)
inherit(P.r2,P.r1)
inherit(P.kc,P.pQ)
inherit(P.bU,P.qL)
t=P.c2
inherit(P.cr,t)
inherit(P.ei,t)
inherit(P.lE,t)
inherit(P.lF,t)
inherit(P.lG,t)
inherit(P.lH,t)
inherit(P.lI,t)
inherit(P.lJ,t)
inherit(P.lK,t)
inherit(P.lL,t)
inherit(P.lM,t)
inherit(P.lN,t)
inherit(P.lO,t)
inherit(P.lP,t)
inherit(P.lQ,t)
inherit(P.lR,t)
inherit(P.lS,t)
inherit(P.lT,t)
inherit(P.m7,t)
inherit(P.ng,t)
inherit(P.nh,t)
inherit(P.nQ,t)
inherit(P.hR,t)
inherit(P.p_,t)
inherit(P.py,t)
inherit(P.i5,t)
inherit(P.qQ,t)
inherit(P.qR,t)
inherit(P.qS,t)
t=P.cr
inherit(P.kG,t)
inherit(P.mq,t)
inherit(P.oY,t)
inherit(P.eK,t)
inherit(P.pu,t)
inherit(P.jg,P.iX)
inherit(P.mW,P.jg)
inherit(P.jh,P.iY)
inherit(P.nA,P.jh)
inherit(P.ji,P.iZ)
inherit(P.oV,P.ji)
inherit(P.p7,P.eK)
inherit(P.jj,P.j_)
inherit(P.pj,P.jj)
t=P.bC
inherit(P.e1,t)
inherit(P.la,t)
inherit(P.eZ,P.e1)
inherit(P.jk,P.j0)
inherit(P.k_,P.jk)
t=B.hp
inherit(S.kH,t)
inherit(M.kM,t)
inherit(A.l5,t)
inherit(M.li,t)
inherit(V.lq,t)
inherit(U.lU,t)
inherit(N.mS,t)
inherit(F.nm,t)
inherit(G.nW,t)
inherit(Q.oa,t)
inherit(N.oq,t)
inherit(D.p3,t)
inherit(V.p4,t)
inherit(F.pK,t)
t=N.ac
inherit(T.lo,t)
inherit(R.o0,t)
t=T.lo
inherit(K.bR,t)
inherit(S.bD,t)
inherit(T.c1,t)
inherit(M.bu,t)
inherit(A.nK,A.jP)
inherit(L.aT,A.nK)
t=O.cb
inherit(O.ds,t)
inherit(O.ix,t)
inherit(O.eJ,t)
t=O.ds
inherit(U.kQ,t)
inherit(Y.o5,t)
inherit(V.ma,t)
inherit(Q.mr,t)
inherit(Q.nR,t)
inherit(M.ov,t)
inherit(B.pP,t)
t=U.kQ
inherit(U.nb,t)
inherit(U.nF,t)
inherit(U.oS,O.ix)
t=U.oS
inherit(U.oT,t)
inherit(U.oU,t)
t=T.hQ
inherit(O.kS,t)
inherit(Y.mf,t)
inherit(Y.mg,t)
inherit(B.mi,t)
inherit(S.mU,t)
inherit(Z.na,t)
inherit(S.nc,t)
inherit(U.nd,t)
inherit(E.nl,t)
inherit(V.nJ,t)
inherit(N.o_,t)
inherit(N.o9,t)
inherit(E.od,t)
inherit(Y.of,t)
inherit(L.og,t)
inherit(S.oi,t)
inherit(Y.op,t)
inherit(R.oZ,t)
inherit(U.pb,t)
inherit(E.pB,t)
inherit(M.pF,t)
t=O.eJ
inherit(Y.p6,t)
inherit(Y.l0,t)
inherit(Y.nB,t)
inherit(U.pG,t)
t=L.fO
inherit(T.kX,t)
inherit(T.kZ,t)
inherit(U.lr,t)
inherit(Z.ls,t)
inherit(T.mh,t)
inherit(X.mk,t)
inherit(V.mu,t)
inherit(Q.mV,t)
inherit(K.mX,t)
inherit(G.mY,t)
inherit(V.nk,t)
inherit(E.o4,t)
inherit(K.oe,t)
inherit(N.or,t)
inherit(N.pc,t)
inherit(Q.pA,t)
t=S.bD
inherit(S.ij,t)
inherit(S.ml,t)
inherit(E.iM,E.nE)
t=E.N
inherit(E.fP,t)
inherit(E.kL,t)
inherit(Q.nU,Q.mr)
inherit(U.R,U.b)
t=R.o0
inherit(R.a_,t)
inherit(R.M,t)
inherit(R.a5,t)
inherit(R.bG,R.a5)
t=Y.dT
inherit(Y.a7,t)
inherit(Y.bX,t)
inherit(Y.P,t)
inherit(Y.il,t)
inherit(Y.bF,t)
inherit(Y.d1,t)
inherit(Y.l3,t)
inherit(Y.hN,t)
inherit(Y.iK,t)
inherit(Y.jR,t)
t=Y.bX
inherit(Y.dh,t)
inherit(Y.bE,t)
inherit(U.ag,A.a6)
t=G.a2
inherit(G.aK,t)
inherit(G.bJ,t)
inherit(G.d,t)
inherit(G.ae,G.bJ)
t=D.cl
inherit(D.kb,t)
inherit(D.o7,t)
t=Q.cU
inherit(Q.i_,t)
inherit(Q.hZ,t)
inherit(Q.dX,Q.i_)
inherit(B.ka,Q.dX)
t=S.fp
inherit(S.uz,t)
inherit(S.l1,t)
inherit(S.mZ,t)
inherit(S.ud,t)
inherit(S.tu,t)
t=S.l1
inherit(S.ur,t)
inherit(S.um,t)
t=S.mZ
inherit(S.t9,t)
inherit(S.t0,t)
t=S.lj
inherit(S.u9,t)
inherit(S.lk,t)
inherit(S.nM,S.lk)
inherit(S.uD,S.nM)
t=S.l_
inherit(S.us,t)
inherit(S.uE,t)
t=S.me
inherit(S.uI,t)
inherit(S.ut,t)
inherit(S.tg,t)
inherit(S.uF,t)
t=S.pa
inherit(S.uK,t)
inherit(S.t6,t)
inherit(S.uS,t)
t=S.hE
inherit(S.ue,t)
inherit(S.ug,t)
inherit(S.uA,t)
inherit(Q.eR,Q.hZ)
inherit(Q.k7,Q.eR)
mixin(H.hY,H.pn)
mixin(H.hJ,P.aS)
mixin(H.hL,H.iI)
mixin(H.hK,P.aS)
mixin(H.hM,H.iI)
mixin(P.fq,P.aS)
mixin(P.eN,P.r8)
mixin(W.h6,P.aS)
mixin(W.h9,W.bq)
mixin(W.iP,W.im)
mixin(W.jO,W.im)
mixin(W.iQ,P.aS)
mixin(W.j9,W.bq)
mixin(W.iR,P.aS)
mixin(W.ja,W.bq)
mixin(W.iS,P.aS)
mixin(W.jb,W.bq)
mixin(W.j1,P.aS)
mixin(W.jl,W.bq)
mixin(W.j2,P.aS)
mixin(W.jm,W.bq)
mixin(W.j3,P.aS)
mixin(W.jn,W.bq)
mixin(W.h7,P.aS)
mixin(W.ha,W.bq)
mixin(W.j4,P.aS)
mixin(W.jo,W.bq)
mixin(W.j5,P.aS)
mixin(W.jp,W.bq)
mixin(W.h8,P.aS)
mixin(W.hb,W.bq)
mixin(W.j6,P.aS)
mixin(W.jq,W.bq)
mixin(W.j7,P.aS)
mixin(W.jr,W.bq)
mixin(W.j8,P.aS)
mixin(W.js,W.bq)
mixin(W.iT,P.aS)
mixin(W.jc,W.bq)
mixin(W.iU,P.aS)
mixin(W.jd,W.bq)
mixin(W.iV,P.aS)
mixin(W.je,W.bq)
mixin(W.iW,P.aS)
mixin(W.jf,W.bq)
mixin(P.iX,P.aS)
mixin(P.jg,W.bq)
mixin(P.iY,P.aS)
mixin(P.jh,W.bq)
mixin(P.iZ,P.aS)
mixin(P.ji,W.bq)
mixin(P.j_,P.aS)
mixin(P.jj,W.bq)
mixin(P.j0,P.aS)
mixin(P.jk,W.bq)
mixin(A.jP,P.fk)
mixin(Q.i_,P.aS)
mixin(Q.hZ,P.fk)})();(function constants(){C.v=W.f1.prototype
C.Q=W.iq.prototype
C.R=W.e9.prototype
C.S=J.f.prototype
C.b=J.ev.prototype
C.f=J.jz.prototype
C.a=J.jA.prototype
C.d=J.fl.prototype
C.c=J.ew.prototype
C.Z=J.ex.prototype
C.a_=W.jB.prototype
C.t=H.fn.prototype
C.J=J.nT.prototype
C.K=W.k2.prototype
C.u=J.eM.prototype
C.M=new P.kU(!1)
C.L=new P.kT(C.M)
C.i=new W.ik()
C.N=new P.nG()
C.O=new P.q5()
C.P=new P.qB()
C.e=new P.qM()
C.w=new W.r7()
C.p=new P.dL(0)
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
C.a0=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.y])
C.k=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.l=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.a1=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.B=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.a2=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.a3=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.C=makeConstList([])
C.a5=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.D=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.E=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.F=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.G=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.H=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.I=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.q=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.y])
C.r=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.y])
C.h=new F.hB(0,"LogLevel.ERROR")
C.m=new F.hB(1,"LogLevel.WARN")
C.a6=new F.hB(3,"LogLevel.VERBOSE")
C.a4=H.a(makeConstList([]),[P.y])
C.a7=new H.fZ(0,{},C.a4,[P.y,P.y])
C.a8=H.c3("bi")
C.a9=H.c3("I4")
C.n=H.c3("I5")
C.aa=H.c3("I6")
C.ab=H.c3("I7")
C.ac=H.c3("I9")
C.ad=H.c3("Ia")
C.ae=H.c3("Ib")
C.af=H.c3("mO")
C.ag=H.c3("d7")
C.ah=H.c3("y")
C.ai=H.c3("If")
C.aj=H.c3("Ig")
C.ak=H.c3("Ih")
C.al=H.c3("dd")
C.am=H.c3("cV")
C.an=H.c3("X")
C.ao=H.c3("C")
C.ap=H.c3("dr")
C.o=new P.pv(!1)})();(function staticFields(){$.wS="$cachedFunction"
$.wT="$cachedInvocation"
$.dK=0
$.fT=null
$.vp=null
$.v5=null
$.xV=null
$.y6=null
$.rB=null
$.rI=null
$.v6=null
$.fF=null
$.ic=null
$.id=null
$.v1=!1
$.ao=C.e
$.vI=0
$.e4=null
$.ta=null
$.vG=null
$.vF=null
$.vC=null
$.vB=null
$.vA=null
$.vD=null
$.vz=null
$.yY=null
$.yZ=null
$.yL=null
$.yM=null
$.yK=null
$.yO=null
$.yU=null
$.yT=null
$.z_=null
$.yW=null
$.yP=null
$.yS=null
$.yN=null
$.yR=null
$.yX=null
$.yQ=null
$.yV=null
$.b2="accent"
$.b4="aspect1"
$.b3="aspect2"
$.bd="shoe1"
$.bc="shoe2"
$.b6="cloak1"
$.b7="cloak2"
$.b5="cloak3"
$.bb="shirt1"
$.ba="shirt2"
$.b9="pants1"
$.b8="pants2"
$.x6="Big Bad TODO"
$.x8="Session Customizer TODO"
$.x7="Bug Fix TODO"
$.al=1300
$.j=3
$.n=2
$.H=1
$.z=0.1
$.e7=1
$.cP=-1
$.tp=null
$.e5=null
$.vK=null
$.eo=null
$.fb=null
$.he=null
$.tj=null
$.lY=null
$.tr=null
$.iB=null
$.iA=null
$.vN=null
$.iH=null
$.f8=null
$.dO=null
$.vM=null
$.lW=null
$.m2=null
$.er=null
$.zC=null
$.zz=null
$.zB=null
$.vL=null
$.zD=null
$.hj=null
$.f6=null
$.cp=null
$.cY=null
$.eq=null
$.m1=null
$.ca=null
$.c5=null
$.tl=null
$.iG=null
$.en=null
$.zA=null
$.f9=null
$.cO=null
$.e6=null
$.hh=null
$.dj=null
$.fa=null
$.c4=null
$.m_=null
$.vJ=null
$.aN=null
$.cC=null
$.cX=null
$.cf=null
$.iF=null
$.c6=null
$.du=null
$.dk=null
$.f7=null
$.dM=null
$.dl=null
$.lX=null
$.dw=null
$.hi=null
$.lZ=null
$.lV=null
$.cN=null
$.cB=null
$.be=null
$.em=null
$.ep=null
$.m0=null
$.iC=null
$.hg=null
$.tn=null
$.co=null
$.tq=null
$.tk=null
$.vP=null
$.hf=null
$.cE=null
$.dN=null
$.dv=null
$.fc=null
$.tm=null
$.to=null
$.vO=null
$.iD=null
$.iE=null
$.es=null
$.vQ=!1
$.tt=null
$.zE=null
$.vS=null
$.vU=null
$.zN=null
$.vT=null
$.zL=null
$.zM=null
$.ts=null
$.zI=null
$.zG=null
$.zH=null
$.zJ=null
$.zK=null
$.zX=null
$.zQ=null
$.zR=null
$.zS=null
$.zT=null
$.zU=null
$.zV=null
$.zW=null
$.zZ=null
$.A_=null
$.A0=null
$.A1=null
$.A2=null
$.A3=null
$.zY=null
$.wM="JACK"
$.Fq="PM"
$.Fm="JS"
$.Fl="HP"
$.Fv="YD"
$.Fs="SI"
$.Ft="SU"
$.Fn="ME"
$.Fr="RB"
$.Fj="GN"
$.Fo="MP"
$.Fh="AR"
$.Fp="PE"
$.Fi="DP"
$.Fu="WV"
$.Fk="HB"
$.m="PLAYER1TAG"
$.dz="PLAYER2TAG"
$.x="DENIZENTAG"
$.r="CONSORTTAG"
$.L="CONSORTSOUNDTAG"
$.aw="MCGUFFINTAG"
$.ab="TAGPHYSICALMCGUFFIN"
$.bt="TAGWEAPON"
$.G7=null
$.Gj=null
$.G3=null
$.G6=null
$.Ga=null
$.Gf=null
$.Gd=null
$.Gm=null
$.Gl=null
$.Ge=null
$.Go=null
$.G9=null
$.Gn=null
$.Gh=null
$.Gg=null
$.Gi=null
$.G5=null
$.G4=null
$.Gc=null
$.Gb=null
$.G8=null
$.Gk=null
$.y_=!1
$.Hx=!1
$.Gp=!1
$.wZ=null
$.Gx=13
$.as=3
$.bL=2
$.aC=1
$.mJ=0
$.I=1
$.a4=3
$.G=4
$.tX=6
$.tY=7
$.aa=8
$.u=9
$.q=10
$.wc=null
$.eu=null
$.mC=null
$.tT=null
$.tN=null
$.w2=null
$.tD=null
$.tM=null
$.hr=null
$.wa=null
$.wx=null
$.w5=null
$.wb=null
$.tE=null
$.tL=null
$.tV=null
$.wA=null
$.tA=null
$.jv=null
$.jt=null
$.aD=null
$.wq=null
$.tz=null
$.wl=null
$.fj=null
$.w4=null
$.wB=null
$.wy=null
$.ww=null
$.tJ=null
$.mB=null
$.fh=null
$.wz=null
$.mz=null
$.tG=null
$.hq=null
$.wu=null
$.dP=null
$.et=null
$.tW=null
$.wv=null
$.tU=null
$.tR=null
$.tS=null
$.mF=null
$.ju=null
$.Au=null
$.we=null
$.wk=null
$.wt=null
$.ws=null
$.tO=null
$.D=null
$.w9=null
$.mA=null
$.bS=null
$.aY=null
$.bT=null
$.Y=null
$.aF=null
$.cd=null
$.K=null
$.O=null
$.av=null
$.aP=null
$.bY=null
$.bk=null
$.bo=null
$.ch=null
$.aR=null
$.bs=null
$.c_=null
$.a0=null
$.ES=null
$.at=null
$.aX=null
$.aM=null
$.ah=null
$.cc=null
$.aL=null
$.ar=null
$.bZ=null
$.aQ=null
$.am=null
$.bj=null
$.c7=null
$.aE=null
$.bp=null
$.bn=null
$.a8=null
$.bQ=null
$.a9=null
$.bg=null
$.br=null
$.aJ=null
$.aW=null
$.az=null
$.aZ=null
$.aG=null
$.Z=null
$.au=null
$.aB=null
$.aU=null
$.ap=null
$.an=null
$.a3=null
$.S=null
$.T=null
$.aj=null
$.aO=null
$.bl=null
$.aV=null
$.BO=null
$.Eu=null
$.F2=null
$.Bj=null
$.Er=null
$.BP=null
$.w0=null
$.EG=null
$.CP=null
$.BK=null
$.Ao=null
$.Dp=null
$.tP=null
$.w6=null
$.DP=null
$.Bg=null
$.Cy=null
$.Be=null
$.tB=null
$.B_=null
$.C0=null
$.Bo=null
$.CI=null
$.EO=null
$.BQ=null
$.tC=null
$.CJ=null
$.Bm=null
$.B5=null
$.wp=null
$.Ah=null
$.w1=null
$.Cr=null
$.mD=null
$.D3=null
$.CY=null
$.Al=null
$.B8=null
$.DY=null
$.An=null
$.Eq=null
$.Cx=null
$.Bv=null
$.DJ=null
$.Ek=null
$.tI=null
$.CT=null
$.DG=null
$.Bn=null
$.Aa=null
$.ER=null
$.CB=null
$.B4=null
$.EF=null
$.D6=null
$.Bb=null
$.Ep=null
$.BF=null
$.E5=null
$.E6=null
$.Aj=null
$.D_=null
$.Bp=null
$.Bz=null
$.F6=null
$.mH=null
$.DX=null
$.En=null
$.mE=null
$.AU=null
$.Dg=null
$.Dk=null
$.Ag=null
$.BE=null
$.Eo=null
$.D5=null
$.EI=null
$.DL=null
$.Dl=null
$.wj=null
$.E9=null
$.EX=null
$.Et=null
$.Ce=null
$.Dx=null
$.Cf=null
$.DZ=null
$.EV=null
$.CH=null
$.BB=null
$.BY=null
$.AK=null
$.DH=null
$.BW=null
$.C2=null
$.Br=null
$.E8=null
$.fi=null
$.Da=null
$.wh=null
$.Cg=null
$.Cd=null
$.F_=null
$.AQ=null
$.DV=null
$.DW=null
$.DU=null
$.DT=null
$.Eg=null
$.C3=null
$.D0=null
$.Ej=null
$.CS=null
$.Db=null
$.Bk=null
$.EU=null
$.CZ=null
$.BH=null
$.BI=null
$.Dj=null
$.F5=null
$.Cv=null
$.ET=null
$.wn=null
$.E4=null
$.CF=null
$.tQ=null
$.Cp=null
$.Dz=null
$.AP=null
$.BL=null
$.E0=null
$.D1=null
$.EN=null
$.wm=null
$.D9=null
$.AW=null
$.Bh=null
$.Dv=null
$.EA=null
$.E_=null
$.ty=null
$.wr=null
$.Eb=null
$.EW=null
$.Cc=null
$.Ay=null
$.AH=null
$.Ey=null
$.Dd=null
$.CQ=null
$.De=null
$.Ev=null
$.Cq=null
$.Ak=null
$.C1=null
$.CO=null
$.Ed=null
$.BV=null
$.AO=null
$.DR=null
$.DS=null
$.EL=null
$.E2=null
$.tK=null
$.w7=null
$.Bc=null
$.tF=null
$.Ck=null
$.wi=null
$.DB=null
$.CX=null
$.DN=null
$.tH=null
$.mG=null
$.wg=null
$.w8=null
$.Bx=null
$.C_=null
$.wo=null
$.wd=null
$.B7=null
$.EC=null
$.B0=null
$.Dn=null
$.Ch=null
$.Ei=null
$.CR=null
$.Av=null
$.Ci=null
$.Bu=null
$.Dr=null
$.CA=null
$.CW=null
$.CG=null
$.CK=null
$.DQ=null
$.DM=null
$.Ad=null
$.Ez=null
$.DE=null
$.Bl=null
$.Bq=null
$.BZ=null
$.Ew=null
$.BS=null
$.CC=null
$.AC=null
$.BM=null
$.Bt=null
$.Df=null
$.BC=null
$.jw=null
$.CE=null
$.w3=null
$.DA=null
$.Cj=null
$.BT=null
$.Ab=null
$.Ai=null
$.Dc=null
$.Dm=null
$.Cz=null
$.Ca=null
$.EQ=null
$.AF=null
$.BU=null
$.CD=null
$.Bi=null
$.Ef=null
$.B6=null
$.E1=null
$.AD=null
$.EB=null
$.CM=null
$.Ax=null
$.DK=null
$.Dw=null
$.Bd=null
$.C4=null
$.AV=null
$.Ex=null
$.Cn=null
$.EM=null
$.AX=null
$.C5=null
$.AY=null
$.Bf=null
$.DD=null
$.B9=null
$.Co=null
$.D2=null
$.AR=null
$.Eh=null
$.F1=null
$.E7=null
$.CU=null
$.Ee=null
$.CV=null
$.Aq=null
$.Ac=null
$.CN=null
$.AA=null
$.AZ=null
$.Ar=null
$.Aw=null
$.D8=null
$.Ds=null
$.EE=null
$.Cl=null
$.F0=null
$.DI=null
$.DF=null
$.Cs=null
$.Cm=null
$.B2=null
$.C8=null
$.CL=null
$.Dh=null
$.Ea=null
$.Af=null
$.EY=null
$.BA=null
$.El=null
$.Bs=null
$.Ap=null
$.AS=null
$.AJ=null
$.F4=null
$.AT=null
$.BD=null
$.B1=null
$.EK=null
$.Ec=null
$.ED=null
$.Ae=null
$.DO=null
$.Ct=null
$.Cw=null
$.EP=null
$.Em=null
$.wf=null
$.BJ=null
$.Du=null
$.EZ=null
$.BN=null
$.Cu=null
$.AN=null
$.Cb=null
$.C9=null
$.E3=null
$.Dt=null
$.C6=null
$.AI=null
$.Es=null
$.Di=null
$.EH=null
$.F3=null
$.At=null
$.As=null
$.AE=null
$.BG=null
$.DC=null
$.Ba=null
$.Dy=null
$.Bw=null
$.Am=null
$.AG=null
$.D7=null
$.By=null
$.Dq=null
$.AM=null
$.BR=null
$.EJ=null
$.Az=null
$.BX=null
$.Do=null
$.AL=null
$.C7=null
$.D4=null
$.AB=null
$.B3=null
$.xt=4
$.e8="OWNER"
$.wI=!1
$.uc=null
$.y8=""
$.x0=null
$.Gt=null
$.hV=null
$.eH=null
$.Gs=null
$.eI=null
$.ed=null
$.db=null
$.eG=null
$.hT=null
$.hU=null
$.dB=null
$.cv=null
$.x1=!1
$.Gu=null})();(function lazyInitializers(){lazy($,"vx","$get$vx",function(){return H.y2("_$dart_dartClosure")})
lazy($,"u6","$get$u6",function(){return H.y2("_$dart_js")})
lazy($,"vZ","$get$vZ",function(){return H.A8()})
lazy($,"w_","$get$w_",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vI
$.vI=t+1
t="expando$key$"+t}return new P.lD(null,t,[P.C])})
lazy($,"x9","$get$x9",function(){return H.dV(H.pl({
toString:function(){return"$receiver$"}}))})
lazy($,"xa","$get$xa",function(){return H.dV(H.pl({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"xb","$get$xb",function(){return H.dV(H.pl(null))})
lazy($,"xc","$get$xc",function(){return H.dV(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xg","$get$xg",function(){return H.dV(H.pl(void 0))})
lazy($,"xh","$get$xh",function(){return H.dV(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xe","$get$xe",function(){return H.dV(H.xf(null))})
lazy($,"xd","$get$xd",function(){return H.dV(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"xj","$get$xj",function(){return H.dV(H.xf(void 0))})
lazy($,"xi","$get$xi",function(){return H.dV(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uX","$get$uX",function(){return P.GD()})
lazy($,"hl","$get$hl",function(){return P.GJ(null,P.d7)})
lazy($,"ie","$get$ie",function(){return[]})
lazy($,"xv","$get$xv",function(){return H.Fw([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xT","$get$xT",function(){return P.H9()})
lazy($,"xy","$get$xy",function(){return P.jD(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"v_","$get$v_",function(){return P.jC()})
lazy($,"vw","$get$vw",function(){return P.dA("^\\S+$",!0,!1)})
lazy($,"c9","$get$c9",function(){return H.a([],[K.bR])})
lazy($,"kK","$get$kK",function(){return P.cG(P.C,L.fO)})
lazy($,"vr","$get$vr",function(){return P.dA("[\\/]",!0,!1)})
lazy($,"bN","$get$bN",function(){return H.a([],[S.bD])})
lazy($,"mb","$get$mb",function(){return P.cG(P.y,Z.iy)})
lazy($,"mw","$get$mw",function(){return P.cG(P.C,B.hp)})
lazy($,"wC","$get$wC",function(){return H.a([],[A.a6])})
lazy($,"wN","$get$wN",function(){return H.a([],[P.y])})
lazy($,"oc","$get$oc",function(){return P.cG(P.C,T.hQ)})
lazy($,"cj","$get$cj",function(){return H.a([],[T.c1])})
lazy($,"bK","$get$bK",function(){return H.a([],[M.bu])})
lazy($,"ak","$get$ak",function(){return H.a([],[U.ag])})
lazy($,"x_","$get$x_",function(){return P.wG([0,new K.cH("Pixels -> Bytes",T.Hp(),T.Ho()),1,new K.cH("Pixels -> Packed bits",T.Hn(),T.Hm()),2,new K.cH("RLE 1 byte",V.te(1),V.td(1)),3,new K.cH("RLE 2 bytes",V.te(2),V.td(2)),4,new K.cH("RLE 3 bytes",V.te(3),V.td(3)),5,new K.cH("RLE packed 1 byte",V.tc(1),V.tb(1)),6,new K.cH("RLE packed 2 bytes",V.tc(2),V.tb(2)),7,new K.cH("RLE packed 3 bytes",V.tc(3),V.tb(3)),8,new K.cH("RLE dynamic",V.HX(),V.HW()),9,new K.cH("Exponential-Golomb pixels",F.HD(),F.HC()),10,new K.cH("Exponential-Golomb run RLE",F.HB(),F.HA()),11,new K.cH("Exponential-Golomb run/data RLE",F.Hz(),F.Hy())],P.C,K.cH)})
lazy($,"c","$get$c",function(){return P.a1(null,null,null,G.a2)})
lazy($,"xr","$get$xr",function(){return P.dA("[\n\r]+",!0,!1)})
lazy($,"xs","$get$xs",function(){return P.dA("( *)(.*)",!0,!1)})
lazy($,"xq","$get$xq",function(){return P.dA("^s*//",!0,!1)})
lazy($,"xp","$get$xp",function(){return P.dA("//",!0,!1)})
lazy($,"cK","$get$cK",function(){return new F.hC(!1,!1,"WordListFileFormat")})
lazy($,"xu","$get$xu",function(){return new T.pL(null)})
lazy($,"vn","$get$vn",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cZ","$get$cZ",function(){return P.cG(P.y,Y.dS)})
lazy($,"wJ","$get$wJ",function(){return P.dA("[\\/]",!0,!1)})
lazy($,"ub","$get$ub",function(){return P.cG(P.y,W.fu)})
lazy($,"un","$get$un",function(){return A.fY(255,0,255,255)})
lazy($,"nP","$get$nP",function(){return new F.hC(!1,!1,"Path Utils")})
lazy($,"nO","$get$nO",function(){return P.cG(P.eO,P.C)})
lazy($,"cI","$get$cI",function(){return H.a([],[D.cl])})
lazy($,"hX","$get$hX",function(){return P.dA("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fw","$get$fw",function(){return P.dA("\\\\(?!\\\\)",!0,!1)})
lazy($,"vy","$get$vy",function(){var t={color:16711935}
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
mangledGlobalNames:{C:"int",X:"double",dr:"num",y:"String",cV:"bool",d7:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cV,args:[[P.p,E.iM]]},{func:1,v:true},{func:1,ret:P.dd,args:[P.bi,P.C,P.C,O.d_]},{func:1,ret:P.bi,args:[P.C,P.bi,P.bi,O.d_]},{func:1,v:true,args:[P.ad]},{func:1,ret:P.y,args:[P.C]},{func:1,ret:W.af},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.af,args:[P.C]},{func:1,ret:W.cA,args:[P.C]},{func:1,ret:W.cs,args:[P.C]},{func:1,args:[,]},{func:1,ret:P.cV,args:[W.cA,P.y,P.y,W.i6]},{func:1,v:true,args:[P.ad],opt:[P.dU]},{func:1,ret:P.y,args:[P.y]},{func:1,ret:W.cg,args:[P.C]},{func:1,v:true,args:[,P.dU]},{func:1,ret:P.cV,args:[P.ad]},{func:1,ret:W.ci,args:[P.C]},{func:1,ret:W.ct,args:[P.C]},{func:1,ret:W.cu,args:[P.C]},{func:1,ret:W.fv,args:[P.C]},{func:1,ret:W.cw,args:[P.C]},{func:1,ret:W.fx,args:[P.C]},{func:1,ret:W.fy,args:[P.C]},{func:1,ret:P.bU,args:[P.C]},{func:1,ret:W.bO,args:[P.C]},{func:1,ret:P.y,args:[P.dy]},{func:1,ret:W.fz,args:[P.C]},{func:1,ret:W.ck,args:[P.C]},{func:1,ret:W.cm,args:[P.C]},{func:1,ret:P.b_,args:[P.C]},{func:1,ret:P.C,args:[P.bI,P.bI]},{func:1,v:true,args:[P.y]},{func:1,ret:W.f5,args:[P.C]},{func:1,ret:W.cq,args:[P.C]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CacheStorage:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CanvasRenderingContext2D:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,Clients:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,CredentialsContainer:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceAcceleration:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,DOMPoint:J.f,DOMPointReadOnly:J.f,EffectModel:J.f,Stream:J.f,FormData:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,Range:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCSessionDescription:J.f,mozRTCSessionDescription:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,StylePropertyMap:J.f,SyncManager:J.f,TextMetrics:J.f,UnderlyingSourceBase:J.f,URLSearchParams:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPoint:J.f,SVGPreserveAspectRatio:J.f,SVGRect:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLRenderingContext:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fm,ArrayBufferView:H.eC,DataView:H.no,Float32Array:H.np,Float64Array:H.nq,Int16Array:H.nr,Int32Array:H.ns,Int8Array:H.nt,Uint16Array:H.nu,Uint32Array:H.nv,Uint8ClampedArray:H.jJ,CanvasPixelArray:H.jJ,Uint8Array:H.fn,HTMLBRElement:W.ay,HTMLCanvasElement:W.ay,HTMLContentElement:W.ay,HTMLDListElement:W.ay,HTMLDataListElement:W.ay,HTMLDetailsElement:W.ay,HTMLDialogElement:W.ay,HTMLHRElement:W.ay,HTMLHeadElement:W.ay,HTMLHeadingElement:W.ay,HTMLHtmlElement:W.ay,HTMLLabelElement:W.ay,HTMLLegendElement:W.ay,HTMLMenuElement:W.ay,HTMLMenuItemElement:W.ay,HTMLMeterElement:W.ay,HTMLModElement:W.ay,HTMLOListElement:W.ay,HTMLOptGroupElement:W.ay,HTMLOptionElement:W.ay,HTMLParagraphElement:W.ay,HTMLPictureElement:W.ay,HTMLPreElement:W.ay,HTMLProgressElement:W.ay,HTMLQuoteElement:W.ay,HTMLShadowElement:W.ay,HTMLSourceElement:W.ay,HTMLStyleElement:W.ay,HTMLTableCaptionElement:W.ay,HTMLTableCellElement:W.ay,HTMLTableDataCellElement:W.ay,HTMLTableHeaderCellElement:W.ay,HTMLTableColElement:W.ay,HTMLTitleElement:W.ay,HTMLTrackElement:W.ay,HTMLUListElement:W.ay,HTMLUnknownElement:W.ay,HTMLDirectoryElement:W.ay,HTMLFontElement:W.ay,HTMLFrameElement:W.ay,HTMLMarqueeElement:W.ay,HTMLElement:W.ay,HTMLAnchorElement:W.eX,HTMLAreaElement:W.kJ,HTMLAudioElement:W.f_,AudioTrack:W.cM,AudioTrackList:W.kR,HTMLBaseElement:W.kV,Blob:W.f0,HTMLBodyElement:W.f1,HTMLButtonElement:W.fW,CDATASection:W.ej,CharacterData:W.ej,Comment:W.ej,ProcessingInstruction:W.ej,Text:W.ej,CompositorWorker:W.l6,Credential:W.h0,FederatedCredential:W.h0,PasswordCredential:W.h0,CSSFontFaceRule:W.ld,CSSImportRule:W.le,CSSKeyframeRule:W.h1,MozCSSKeyframeRule:W.h1,WebKitCSSKeyframeRule:W.h1,CSSKeyframesRule:W.h2,MozCSSKeyframesRule:W.h2,WebKitCSSKeyframesRule:W.h2,CSSPageRule:W.lf,CSSCharsetRule:W.bO,CSSGroupingRule:W.bO,CSSMediaRule:W.bO,CSSNamespaceRule:W.bO,CSSSupportsRule:W.bO,CSSRule:W.bO,CSSStyleDeclaration:W.f4,MSStyleCSSProperties:W.f4,CSS2Properties:W.f4,CSSStyleRule:W.lg,CSSViewportRule:W.lh,DataTransfer:W.lm,DataTransferItem:W.f5,DataTransferItemList:W.io,HTMLDivElement:W.iq,Document:W.ek,HTMLDocument:W.ek,XMLDocument:W.ek,DocumentFragment:W.ir,ShadowRoot:W.ir,DOMError:W.is,FileError:W.is,DOMException:W.lp,DOMRectReadOnly:W.it,DOMStringList:W.iu,DOMStringMap:W.iv,DOMTokenList:W.iw,Element:W.cA,HTMLEmbedElement:W.lv,DirectoryEntry:W.h5,Entry:W.h5,FileEntry:W.h5,ErrorEvent:W.lB,AnimationEvent:W.U,AnimationPlayerEvent:W.U,ApplicationCacheErrorEvent:W.U,AutocompleteErrorEvent:W.U,BeforeInstallPromptEvent:W.U,BeforeUnloadEvent:W.U,BlobEvent:W.U,ClipboardEvent:W.U,CloseEvent:W.U,CompositionEvent:W.U,CustomEvent:W.U,DeviceLightEvent:W.U,DeviceMotionEvent:W.U,DeviceOrientationEvent:W.U,ExtendableEvent:W.U,ExtendableMessageEvent:W.U,FetchEvent:W.U,FocusEvent:W.U,FontFaceSetLoadEvent:W.U,GamepadEvent:W.U,GeofencingEvent:W.U,HashChangeEvent:W.U,InstallEvent:W.U,KeyboardEvent:W.U,MediaEncryptedEvent:W.U,MediaKeyMessageEvent:W.U,MediaQueryListEvent:W.U,MediaStreamEvent:W.U,MediaStreamTrackEvent:W.U,MessageEvent:W.U,MIDIConnectionEvent:W.U,MIDIMessageEvent:W.U,MouseEvent:W.U,DragEvent:W.U,NotificationEvent:W.U,PageTransitionEvent:W.U,PointerEvent:W.U,PopStateEvent:W.U,PresentationConnectionAvailableEvent:W.U,PresentationConnectionCloseEvent:W.U,ProgressEvent:W.U,PromiseRejectionEvent:W.U,PushEvent:W.U,RelatedEvent:W.U,RTCDataChannelEvent:W.U,RTCDTMFToneChangeEvent:W.U,RTCIceCandidateEvent:W.U,RTCPeerConnectionIceEvent:W.U,SecurityPolicyViolationEvent:W.U,ServicePortConnectEvent:W.U,ServiceWorkerMessageEvent:W.U,SpeechRecognitionEvent:W.U,StorageEvent:W.U,SyncEvent:W.U,TextEvent:W.U,TouchEvent:W.U,TrackEvent:W.U,TransitionEvent:W.U,WebKitTransitionEvent:W.U,UIEvent:W.U,WheelEvent:W.U,ResourceProgressEvent:W.U,USBConnectionEvent:W.U,IDBVersionChangeEvent:W.U,SVGZoomEvent:W.U,AudioProcessingEvent:W.U,OfflineAudioCompletionEvent:W.U,WebGLContextEvent:W.U,Event:W.U,InputEvent:W.U,Animation:W.aI,ApplicationCache:W.aI,DOMApplicationCache:W.aI,OfflineResourceList:W.aI,BatteryManager:W.aI,CanvasCaptureMediaStreamTrack:W.aI,CrossOriginServiceWorkerClient:W.aI,EventSource:W.aI,MediaKeySession:W.aI,MediaQueryList:W.aI,MediaRecorder:W.aI,MediaSource:W.aI,MediaStream:W.aI,MediaStreamTrack:W.aI,MessagePort:W.aI,MIDIAccess:W.aI,NetworkInformation:W.aI,Notification:W.aI,Performance:W.aI,PermissionStatus:W.aI,PresentationAvailability:W.aI,PresentationReceiver:W.aI,PresentationRequest:W.aI,RTCDTMFSender:W.aI,RTCPeerConnection:W.aI,webkitRTCPeerConnection:W.aI,mozRTCPeerConnection:W.aI,ScreenOrientation:W.aI,ServicePortCollection:W.aI,ServiceWorkerContainer:W.aI,ServiceWorkerRegistration:W.aI,SpeechRecognition:W.aI,SpeechSynthesis:W.aI,SpeechSynthesisUtterance:W.aI,WorkerPerformance:W.aI,BluetoothDevice:W.aI,BluetoothRemoteGATTCharacteristic:W.aI,USB:W.aI,EventTarget:W.aI,HTMLFieldSetElement:W.m3,File:W.cg,FileList:W.fd,FileReader:W.m4,DOMFileSystem:W.m5,FileWriter:W.m6,FontFace:W.m8,FontFaceSet:W.m9,HTMLFormElement:W.iL,Gamepad:W.cq,History:W.mj,HTMLOptionsCollection:W.fe,HTMLCollection:W.fe,HTMLFormControlsCollection:W.iN,XMLHttpRequest:W.e9,XMLHttpRequestUpload:W.hm,XMLHttpRequestEventTarget:W.hm,HTMLIFrameElement:W.mp,ImageData:W.hn,HTMLImageElement:W.fg,HTMLInputElement:W.mv,HTMLKeygenElement:W.mT,HTMLLIElement:W.jB,CalcLength:W.hw,LengthValue:W.hw,SimpleLength:W.hw,HTMLLinkElement:W.hx,Location:W.n9,HTMLMapElement:W.ne,HTMLVideoElement:W.hF,HTMLMediaElement:W.hF,MediaList:W.jG,HTMLMetaElement:W.ni,MIDIOutput:W.nj,MIDIInput:W.hG,MIDIPort:W.hG,MimeType:W.cs,MimeTypeArray:W.jH,Navigator:W.nw,NavigatorUserMediaError:W.nx,Node:W.af,NodeIterator:W.jK,NodeList:W.jL,RadioNodeList:W.jL,HTMLObjectElement:W.nC,HTMLOutputElement:W.nH,HTMLParamElement:W.nL,Path2D:W.nN,PerformanceCompositeTiming:W.eb,PerformanceEntry:W.eb,PerformanceMark:W.eb,PerformanceMeasure:W.eb,PerformanceRenderTiming:W.eb,PerformanceResourceTiming:W.eb,Perspective:W.nS,Plugin:W.ci,PluginArray:W.jS,PresentationConnection:W.nX,RTCDataChannel:W.jV,DataChannel:W.jV,HTMLScriptElement:W.fu,HTMLSelectElement:W.jW,ServicePort:W.oj,SharedWorker:W.om,SharedWorkerGlobalScope:W.on,HTMLSlotElement:W.oo,SourceBuffer:W.ct,SourceBufferList:W.jY,HTMLSpanElement:W.hS,SpeechGrammar:W.cu,SpeechGrammarList:W.jZ,SpeechRecognitionAlternative:W.fv,SpeechRecognitionError:W.os,SpeechRecognitionResult:W.ck,SpeechSynthesisEvent:W.ot,SpeechSynthesisVoice:W.ou,Storage:W.oA,CSSStyleSheet:W.cm,StyleSheet:W.cm,KeywordValue:W.ee,NumberValue:W.ee,PositionValue:W.ee,TransformValue:W.ee,StyleValue:W.ee,HTMLTableElement:W.k2,HTMLTableRowElement:W.p0,HTMLTableSectionElement:W.p1,HTMLTemplateElement:W.hW,HTMLTextAreaElement:W.p5,TextTrack:W.cT,TextTrackCue:W.cJ,VTTCue:W.cJ,TextTrackCueList:W.p8,TextTrackList:W.p9,TimeRanges:W.pd,Touch:W.cw,TouchList:W.k3,TrackDefault:W.fx,TrackDefaultList:W.k4,Matrix:W.ef,Rotation:W.ef,Skew:W.ef,Translation:W.ef,TransformComponent:W.ef,TreeWalker:W.k5,URL:W.pt,VideoTrackList:W.px,VTTRegion:W.fy,VTTRegionList:W.k6,WebSocket:W.pC,Window:W.k9,DOMWindow:W.k9,Worker:W.pJ,CompositorWorkerGlobalScope:W.eQ,DedicatedWorkerGlobalScope:W.eQ,ServiceWorkerGlobalScope:W.eQ,WorkerGlobalScope:W.eQ,Attr:W.fz,ClientRect:W.q0,ClientRectList:W.i1,DOMRectList:W.i1,CSSRuleList:W.kg,DocumentType:W.q7,DOMRect:W.q8,GamepadList:W.kk,HTMLFrameSetElement:W.qu,NamedNodeMap:W.i8,MozNamedAttrMap:W.i8,ServiceWorker:W.qU,SpeechRecognitionResultList:W.ko,StyleSheetList:W.kq,WorkerLocation:W.rf,WorkerNavigator:W.rg,IDBDatabase:P.ln,IDBIndex:P.ms,IDBObjectStore:P.nD,IDBOpenDBRequest:P.hP,IDBVersionChangeRequest:P.hP,IDBRequest:P.hP,IDBTransaction:P.pi,SVGAElement:P.kG,SVGAnimateElement:P.ei,SVGAnimateMotionElement:P.ei,SVGAnimateTransformElement:P.ei,SVGAnimationElement:P.ei,SVGSetElement:P.ei,SVGFEBlendElement:P.lE,SVGFEColorMatrixElement:P.lF,SVGFEComponentTransferElement:P.lG,SVGFECompositeElement:P.lH,SVGFEConvolveMatrixElement:P.lI,SVGFEDiffuseLightingElement:P.lJ,SVGFEDisplacementMapElement:P.lK,SVGFEFloodElement:P.lL,SVGFEGaussianBlurElement:P.lM,SVGFEImageElement:P.lN,SVGFEMergeElement:P.lO,SVGFEMorphologyElement:P.lP,SVGFEOffsetElement:P.lQ,SVGFESpecularLightingElement:P.lR,SVGFETileElement:P.lS,SVGFETurbulenceElement:P.lT,SVGFilterElement:P.m7,SVGCircleElement:P.cr,SVGClipPathElement:P.cr,SVGDefsElement:P.cr,SVGEllipseElement:P.cr,SVGForeignObjectElement:P.cr,SVGGElement:P.cr,SVGGeometryElement:P.cr,SVGLineElement:P.cr,SVGPathElement:P.cr,SVGPolygonElement:P.cr,SVGPolylineElement:P.cr,SVGRectElement:P.cr,SVGSwitchElement:P.cr,SVGGraphicsElement:P.cr,SVGImageElement:P.mq,SVGLength:P.d5,SVGLengthList:P.mW,SVGMarkerElement:P.ng,SVGMaskElement:P.nh,SVGNumber:P.d8,SVGNumberList:P.nA,SVGPatternElement:P.nQ,SVGPointList:P.nV,SVGScriptElement:P.hR,SVGStringList:P.oV,SVGDescElement:P.c2,SVGDiscardElement:P.c2,SVGFEDistantLightElement:P.c2,SVGFEFuncAElement:P.c2,SVGFEFuncBElement:P.c2,SVGFEFuncGElement:P.c2,SVGFEFuncRElement:P.c2,SVGFEMergeNodeElement:P.c2,SVGFEPointLightElement:P.c2,SVGFESpotLightElement:P.c2,SVGMetadataElement:P.c2,SVGStopElement:P.c2,SVGStyleElement:P.c2,SVGTitleElement:P.c2,SVGComponentTransferFunctionElement:P.c2,SVGElement:P.c2,SVGSVGElement:P.oY,SVGSymbolElement:P.p_,SVGTSpanElement:P.eK,SVGTextElement:P.eK,SVGTextPositioningElement:P.eK,SVGTextContentElement:P.eK,SVGTextPathElement:P.p7,SVGTransform:P.dc,SVGTransformList:P.pj,SVGUseElement:P.pu,SVGViewElement:P.py,SVGViewSpec:P.pz,SVGLinearGradientElement:P.i5,SVGRadialGradientElement:P.i5,SVGGradientElement:P.i5,SVGCursorElement:P.qQ,SVGFEDropShadowElement:P.qR,SVGMPathElement:P.qS,AudioBuffer:P.fQ,AudioBufferSourceNode:P.eZ,AudioContext:P.fR,webkitAudioContext:P.fR,OfflineAudioContext:P.fR,AnalyserNode:P.bC,RealtimeAnalyserNode:P.bC,AudioDestinationNode:P.bC,BiquadFilterNode:P.bC,ChannelMergerNode:P.bC,AudioChannelMerger:P.bC,ChannelSplitterNode:P.bC,AudioChannelSplitter:P.bC,DelayNode:P.bC,DynamicsCompressorNode:P.bC,GainNode:P.bC,AudioGainNode:P.bC,IIRFilterNode:P.bC,MediaStreamAudioDestinationNode:P.bC,PannerNode:P.bC,AudioPannerNode:P.bC,webkitAudioPannerNode:P.bC,ScriptProcessorNode:P.bC,JavaScriptAudioNode:P.bC,StereoPannerNode:P.bC,WaveShaperNode:P.bC,AudioNode:P.bC,MediaElementAudioSourceNode:P.e1,MediaStreamAudioSourceNode:P.e1,OscillatorNode:P.e1,Oscillator:P.e1,AudioSourceNode:P.e1,ConvolverNode:P.la,WebGLActiveInfo:P.kI,WebGL2RenderingContext:P.o8,WebGL2RenderingContextBase:P.re,SQLResultSetRowList:P.k_})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,TreeWalker:true,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jI.$nativeSuperclassTag="ArrayBufferView"
H.hJ.$nativeSuperclassTag="ArrayBufferView"
H.hL.$nativeSuperclassTag="ArrayBufferView"
H.hH.$nativeSuperclassTag="ArrayBufferView"
H.hK.$nativeSuperclassTag="ArrayBufferView"
H.hM.$nativeSuperclassTag="ArrayBufferView"
H.hI.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.y9(M.x4(),b)},[])
else (function(b){H.y9(M.x4(),b)})([])})})()
//# sourceMappingURL=TODOController.dart.js.map
