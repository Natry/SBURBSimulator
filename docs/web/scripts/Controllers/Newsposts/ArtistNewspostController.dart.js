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
a[c]=function(){a[c]=function(){H.Hh(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.uD"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.uD"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.uD(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={tE:function tE(a){this.a=a},
rb:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
wA:function(a,b,c,d){var t=new H.oG(a,b,c,[d])
t.eI(a,b,c,d)
return t},
dv:function(a,b,c,d){if(!!J.ay(a).$ist)return new H.fY(a,b,[c,d])
return new H.hu(a,b,[c,d])},
jl:function(){return new P.dT("No element")},
w8:function(){return new P.dT("Too few elements")},
jH:function(a,b,c,d){if(c-b<=32)H.FJ(a,b,c,d)
else H.FI(a,b,c,d)},
FJ:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bf(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cy(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
FI:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.al(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.al(a3+a4,2)
p=q-t
o=q+t
n=J.bf(a2)
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
if(J.b_(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.ay(c)
if(b.R(c,0))continue
if(b.a1(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dD(c)
if(b.aA(c,0)){--f
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
if(J.ee(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cy(a5.$2(d,j),0))for(;!0;)if(J.cy(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ee(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.jH(a2,a3,g-2,a5)
H.jH(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.b_(a5.$2(n.n(a2,g),l),0);)++g
for(;J.b_(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.b_(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.b_(a5.$2(d,j),0))for(;!0;)if(J.b_(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ee(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jH(a2,g,f,a5)}else H.jH(a2,g,f,a5)},
kN:function kN(a){this.a=a},
t:function t(){},
ev:function ev(){},
oG:function oG(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ew:function ew(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hu:function hu(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fY:function fY(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jr:function jr(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fh:function fh(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hR:function hR(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jR:function jR(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iw:function iw(){},
p4:function p4(){},
hO:function hO(){},
kb:function(a,b){var t=a.bm(b)
if(!u.globalState.d.cy)u.globalState.f.bv()
return t},
xz:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ay(s).$isp)throw H.k(P.dG("Arguments to main must be a List: "+H.A(s)))
u.globalState=new H.qk(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vu()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.pR(P.tK(null,H.eP),0)
r=P.C
s.z=new H.v(0,null,null,null,null,null,0,[r,H.fw])
s.ch=new H.v(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qj()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.zp,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.G3)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a5(null,null,null,r)
p=new H.fo(0,null,!1)
o=new H.fw(s,new H.v(0,null,null,null,null,null,0,[r,H.fo]),q,u.createNewIsolate(),p,new H.dH(H.rr()),new H.dH(H.rr()),!1,!1,[],P.a5(null,null,null,null),null,null,!1,!0,P.a5(null,null,null,null))
q.h(0,0)
o.d4(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fC(a,{func:1,args:[,]}))o.bm(new H.rs(t,a))
else if(H.fC(a,{func:1,args:[,,]}))o.bm(new H.rt(t,a))
else o.bm(a)
u.globalState.f.bv()},
G3:function(a){var t=P.hq(["command","print","msg",a])
return new H.dC(!0,P.hY(null,P.C)).av(t)},
zr:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.zs()
return},
zs:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.k(new P.V("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.k(new P.V('Cannot extract URI from "'+t+'"'))},
zp:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eN(!0,[]).aT(b.data)
s=J.bf(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eN(!0,[]).aT(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eN(!0,[]).aT(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.C
j=P.a5(null,null,null,k)
i=new H.fo(0,null,!1)
h=new H.fw(s,new H.v(0,null,null,null,null,null,0,[k,H.fo]),j,u.createNewIsolate(),i,new H.dH(H.rr()),new H.dH(H.rr()),!1,!1,[],P.a5(null,null,null,null),null,null,!1,!0,P.a5(null,null,null,null))
j.h(0,0)
h.d4(0,i)
u.globalState.f.a.aI(0,new H.eP(h,new H.mg(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bv()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fF(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bv()
break
case"close":u.globalState.ch.am(0,$.$get$vv().n(0,a))
a.terminate()
u.globalState.f.bv()
break
case"log":H.zo(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hq(["command","print","msg",t])
k=new H.dC(!0,P.hY(null,P.C)).av(k)
s.toString
self.postMessage(k)}else P.fD(s.n(t,"msg"))
break
case"error":throw H.k(s.n(t,"msg"))}},
zo:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hq(["command","log","msg",a])
r=new H.dC(!0,P.hY(null,P.C)).av(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.cx(q)
t=H.cw(q)
s=P.lk(t)
throw H.k(s)}},
zq:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wo=$.wo+("_"+s)
$.wp=$.wp+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fF(f,["spawned",new H.fx(s,r),q,t.r])
r=new H.mh(a,b,c,d,t)
if(e===!0){t.dK(q,q)
u.globalState.f.a.aI(0,new H.eP(t,r,"start isolate"))}else r.$0()},
FQ:function(a,b){var t=new H.oX(!0,!1,null)
t.eJ(a,b)
return t},
Gm:function(a){return new H.eN(!0,[]).aT(new H.dC(!1,P.hY(null,P.C)).av(a))},
rs:function rs(a,b){this.a=a
this.b=b},
rt:function rt(a,b){this.a=a
this.b=b},
qk:function qk(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
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
fw:function fw(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
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
qf:function qf(a,b){this.a=a
this.b=b},
pR:function pR(a,b){this.a=a
this.b=b},
pS:function pS(a){this.a=a},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
qj:function qj(){},
mg:function mg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mh:function mh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pE:function pE(){},
fx:function fx(b,a){this.b=b
this.a=a},
qm:function qm(a,b){this.a=a
this.b=b},
i0:function i0(b,c,a){this.b=b
this.c=c
this.a=a},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
oX:function oX(a,b,c){this.a=a
this.b=b
this.c=c},
oY:function oY(a,b){this.a=a
this.b=b},
oZ:function oZ(a,b){this.a=a
this.b=b},
dH:function dH(a){this.a=a},
dC:function dC(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
yu:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=a.gcC(a)
s=P.d2(t,!0,H.aB(t,"o",0))
t=s.length
q=0
while(!0){p=s.length
if(!(q<p)){r=!0
break}o=s[q]
if(typeof o!=="string"){r=!1
break}p===t||(0,H.c1)(s);++q}if(r){n={}
for(m=!1,l=null,k=0,q=0;q<s.length;s.length===p||(0,H.c1)(s),++q){o=s[q]
j=a.n(0,o)
if(!J.b_(o,"__proto__")){if(!n.hasOwnProperty(o))++k
n[o]=j}else{l=j
m=!0}}if(m)return new H.kS(l,k+1,n,s,[b,c])
return new H.fT(k,n,s,[b,c])}return new H.kR(P.Es(a,null,null),[b,c])},
yv:function(){throw H.k(new P.V("Cannot modify unmodifiable Map"))},
GW:function(a){return u.types[a]},
xu:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ay(a).$isaG},
A:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cK(a)
if(typeof t!=="string")throw H.k(H.bs(a))
return t},
Fi:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.nP(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
ez:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
u3:function(a,b){if(b==null)throw H.k(new P.bO(a,null,null))
return b.$1(a)},
fm:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.u3(a,c)
if(3>=t.length)return H.w(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.u3(a,c)}if(b<2||b>36)throw H.k(P.bF(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a2(q,o)|32)>r)return H.u3(a,c)}return parseInt(a,b)},
wm:function(a,b){return b.$1(a)},
wq:function(a,b){var t,s
H.GH(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wm(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.ry(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wm(a,b)}return t},
nH:function(a){var t,s,r,q,p,o,n,m
t=J.ay(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.ay(a).$iseI){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a2(q,0)===36)q=C.c.ae(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.rl(H.kf(a),0,null),u.mangledGlobalNames)},
nG:function(a){return"Instance of '"+H.nH(a)+"'"},
EQ:function(){if(!!self.location)return self.location.href
return},
wl:function(a){var t,s,r,q,p
t=J.cm(a)
if(typeof t!=="number")return t.ek()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
EV:function(a){var t,s,r,q
t=H.a([],[P.C])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.c1)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.bs(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aR(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.k(H.bs(q))}return H.wl(t)},
ws:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.c1)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.bs(q))
if(q<0)throw H.k(H.bs(q))
if(q>65535)return H.EV(a)}return H.wl(a)},
EW:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.ek()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hG:function(a){var t
if(typeof a!=="number")return H.af(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aR(t,10))>>>0,56320|t&1023)}}throw H.k(P.bF(a,0,1114111,null,null))},
cY:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
wn:function(a){return a.b?H.cY(a).getUTCFullYear()+0:H.cY(a).getFullYear()+0},
u5:function(a){return a.b?H.cY(a).getUTCMonth()+1:H.cY(a).getMonth()+1},
u4:function(a){return a.b?H.cY(a).getUTCDate()+0:H.cY(a).getDate()+0},
ER:function(a){return a.b?H.cY(a).getUTCHours()+0:H.cY(a).getHours()+0},
ET:function(a){return a.b?H.cY(a).getUTCMinutes()+0:H.cY(a).getMinutes()+0},
EU:function(a){return a.b?H.cY(a).getUTCSeconds()+0:H.cY(a).getSeconds()+0},
ES:function(a){return a.b?H.cY(a).getUTCMilliseconds()+0:H.cY(a).getMilliseconds()+0},
u6:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.bs(a))
return a[b]},
wr:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.bs(a))
a[b]=c},
af:function(a){throw H.k(H.bs(a))},
w:function(a,b){if(a==null)J.cm(a)
throw H.k(H.c6(a,b))},
c6:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.d0(!0,b,"index",null)
t=J.cm(a)
if(!(b<0)){if(typeof t!=="number")return H.af(t)
s=b>=t}else s=!0
if(s)return P.bv(b,a,"index",null,t)
return P.jE(b,"index",null)},
GM:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.d0(!0,a,"start",null)
if(a<0||a>c)return new P.eA(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.d0(!0,b,"end",null)
if(b<a||b>c)return new P.eA(a,c,!0,b,"end","Invalid value")}return new P.d0(!0,b,"end",null)},
bs:function(a){return new P.d0(!0,a,null,null)},
kd:function(a){if(typeof a!=="number")throw H.k(H.bs(a))
return a},
uC:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(H.bs(a))
return a},
GH:function(a){if(typeof a!=="string")throw H.k(H.bs(a))
return a},
k:function(a){var t
if(a==null)a=new P.fk()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.xB})
t.name=""}else t.toString=H.xB
return t},
xB:function(){return J.cK(this.dartException)},
aZ:function(a){throw H.k(a)},
c1:function(a){throw H.k(new P.bR(a))},
dU:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.p1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
p2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
wI:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
tG:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mA(a,s,t?null:b.receiver)},
cx:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ru(a)
if(a==null)return
if(a instanceof H.h5)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aR(r,16)&8191)===10)switch(q){case 438:return t.$1(H.tG(H.A(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.A(s)+" (Error "+q+")"
return t.$1(new H.jx(p,null))}}if(a instanceof TypeError){o=$.$get$wC()
n=$.$get$wD()
m=$.$get$wE()
l=$.$get$wF()
k=$.$get$wJ()
j=$.$get$wK()
i=$.$get$wH()
$.$get$wG()
h=$.$get$wM()
g=$.$get$wL()
f=o.aD(s)
if(f!=null)return t.$1(H.tG(s,f))
else{f=n.aD(s)
if(f!=null){f.method="call"
return t.$1(H.tG(s,f))}else{f=m.aD(s)
if(f==null){f=l.aD(s)
if(f==null){f=k.aD(s)
if(f==null){f=j.aD(s)
if(f==null){f=i.aD(s)
if(f==null){f=l.aD(s)
if(f==null){f=h.aD(s)
if(f==null){f=g.aD(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jx(s,f==null?null:f.method))}}return t.$1(new H.p3(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jL()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.d0(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jL()
return a},
cw:function(a){var t
if(a instanceof H.h5)return a.b
if(a==null)return new H.k7(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.k7(a,null)},
H5:function(a){if(a==null||typeof a!='object')return J.dF(a)
else return H.ez(a)},
xr:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
H0:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kb(b,new H.rg(a))
case 1:return H.kb(b,new H.rh(a,d))
case 2:return H.kb(b,new H.ri(a,d,e))
case 3:return H.kb(b,new H.rj(a,d,e,f))
case 4:return H.kb(b,new H.rk(a,d,e,f,g))}throw H.k(P.lk("Unsupported number of arguments for wrapped closure"))},
dl:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.H0)
a.$identity=t
return t},
yq:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ay(c).$isp){t.$reflectionInfo=c
r=H.Fi(t).r}else r=c
q=d?Object.create(new H.of().constructor.prototype):Object.create(new H.fM(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dI
$.dI=J.ed(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.v0(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.GW,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.uY:H.rC
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.k("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.v0(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
yn:function(a,b,c,d){var t=H.rC
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
v0:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.yp(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.yn(s,!q,t,b)
if(s===0){q=$.dI
$.dI=J.ed(q,1)
o="self"+H.A(q)
q="return function(){var "+o+" = this."
p=$.fN
if(p==null){p=H.kG("self")
$.fN=p}return new Function(q+H.A(p)+";return "+o+"."+H.A(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dI
$.dI=J.ed(q,1)
n+=H.A(q)
q="return function("+n+"){return this."
p=$.fN
if(p==null){p=H.kG("self")
$.fN=p}return new Function(q+H.A(p)+"."+H.A(t)+"("+n+");}")()},
yo:function(a,b,c,d){var t,s
t=H.rC
s=H.uY
switch(b?-1:a){case 0:throw H.k(new H.nU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
yp:function(a,b){var t,s,r,q,p,o,n,m
t=H.ym()
s=$.uX
if(s==null){s=H.kG("receiver")
$.uX=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.yo(q,!o,r,b)
if(q===1){s="return function(){return this."+H.A(t)+"."+H.A(r)+"(this."+H.A(s)+");"
o=$.dI
$.dI=J.ed(o,1)
return new Function(s+H.A(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.A(t)+"."+H.A(r)+"(this."+H.A(s)+", "+m+");"
o=$.dI
$.dI=J.ed(o,1)
return new Function(s+H.A(o)+"}")()},
uD:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ay(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.yq(a,b,t,!!d,e,f)},
rC:function(a){return a.a},
uY:function(a){return a.c},
ym:function(){var t=$.fN
if(t==null){t=H.kG("self")
$.fN=t}return t},
kG:function(a){var t,s,r,q,p
t=new H.fM("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
H8:function(a,b){var t=J.bf(b)
throw H.k(H.v_(H.nH(a),t.K(b,3,t.gm(b))))},
kh:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.ay(a)[b]
else t=!0
if(t)return a
H.H8(a,b)},
xq:function(a){var t=J.ay(a)
return"$S" in t?t.$S():null},
fC:function(a,b){var t
if(a==null)return!1
t=H.xq(a)
return t==null?!1:H.uG(t,b)},
v_:function(a,b){return new H.kL("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Hh:function(a){throw H.k(new P.l3(a))},
rr:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xs:function(a){return u.getIsolateTag(a)},
c0:function(a){return new H.dV(a,null)},
a:function(a,b){a.$ti=b
return a},
kf:function(a){if(a==null)return
return a.$ti},
xt:function(a,b){return H.uI(a["$as"+H.A(b)],H.kf(a))},
aB:function(a,b,c){var t=H.xt(a,b)
return t==null?null:t[c]},
U:function(a,b){var t=H.kf(a)
return t==null?null:t[b]},
dE:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.rl(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.A(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dE(t,b)
return H.Gr(a,b)}return"unknown-reified-type"},
Gr:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dE(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dE(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dE(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.GU(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dE(l[j],b)+(" "+H.A(j))}q+="}"}return"("+q+") => "+t},
rl:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.cc("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.N=p+", "
o=a[s]
if(o!=null)q=!1
p=t.N+=H.dE(o,c)}return q?"":"<"+t.A(0)+">"},
kg:function(a){var t,s
if(a instanceof H.eY){t=H.xq(a)
if(t!=null)return H.dE(t,null)}s=J.ay(a).constructor.builtin$cls
if(a==null)return s
return s+H.rl(a.$ti,0,null)},
uI:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dY:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kf(a)
s=J.ay(a)
if(s[b]==null)return!1
return H.xm(H.uI(s[d],t),c)},
Hg:function(a,b,c,d){if(a==null)return a
if(H.dY(a,b,c,d))return a
throw H.k(H.v_(H.nH(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.rl(c,0,null),u.mangledGlobalNames)))},
xm:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d_(a[s],b[s]))return!1
return!0},
eR:function(a,b,c){return a.apply(b,H.xt(b,c))},
GI:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ac"||b.builtin$cls==="d3"
if(b==null)return!0
t=H.kf(a)
a=J.ay(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.uG(r.apply(a,null),b)}return H.d_(s,b)},
d_:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d3")return!0
if('func' in b)return H.uG(a,b)
if('func' in a)return b.builtin$cls==="Hn"||b.builtin$cls==="ac"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dE(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.xm(H.uI(o,t),r)},
xl:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.d_(t,p)||H.d_(p,t)))return!1}return!0},
Gy:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.d_(p,o)||H.d_(o,p)))return!1}return!0},
uG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.d_(t,s)||H.d_(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.xl(r,q,!1))return!1
if(!H.xl(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d_(i,h)||H.d_(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d_(i,h)||H.d_(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d_(i,h)||H.d_(h,i)))return!1}}return H.Gy(a.named,b.named)},
Hz:function(a){var t=$.uE
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
Hy:function(a){return H.ez(a)},
Hx:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
H1:function(a){var t,s,r,q,p,o
t=$.uE.$1(a)
s=$.r8[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rf[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xk.$2(a,t)
if(t!=null){s=$.r8[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rf[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.uH(r)
$.r8[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rf[t]=r
return r}if(p==="-"){o=H.uH(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xv(a,r)
if(p==="*")throw H.k(new P.eH(t))
if(u.leafTags[t]===true){o=H.uH(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xv(a,r)},
xv:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rn(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
uH:function(a){return J.rn(a,!1,null,!!a.$isaG)},
H3:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rn(t,!1,null,!!t.$isaG)
else return J.rn(t,c,null,null)},
GZ:function(){if(!0===$.uF)return
$.uF=!0
H.H_()},
H_:function(){var t,s,r,q,p,o,n,m
$.r8=Object.create(null)
$.rf=Object.create(null)
H.GY()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xw.$1(p)
if(o!=null){n=H.H3(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
GY:function(){var t,s,r,q,p,o,n
t=C.N()
t=H.fB(C.O,H.fB(C.P,H.fB(C.u,H.fB(C.u,H.fB(C.R,H.fB(C.Q,H.fB(C.S(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.uE=new H.rc(p)
$.xk=new H.rd(o)
$.xw=new H.re(n)},
fB:function(a,b){return a(b)||b},
tB:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.k(new P.bO("Illegal RegExp pattern ("+String(q)+")",a,null))},
He:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
xA:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hm){q=b.gdr()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.aZ(H.bs(b))
throw H.k("String.replaceAll(Pattern) UNIMPLEMENTED")}},
Gw:function(a){return a},
Hf:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.aS(0,a),t=new H.jW(t.a,t.b,t.c,null),s=0,r="";t.F();){q=t.d
p=q.b
o=p.index
r=r+H.A(H.xb().$1(C.c.K(a,s,o)))+H.A(c.$1(q))
s=o+p[0].length}t=r+H.A(H.xb().$1(C.c.ae(a,s)))
return t.charCodeAt(0)==0?t:t},
kR:function kR(a,$ti){this.a=a
this.$ti=$ti},
kQ:function kQ(){},
fT:function fT(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
kS:function kS(d,a,b,c,$ti){var _=this
_.d=d
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nP:function nP(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
p1:function p1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jx:function jx(a,b){this.a=a
this.b=b},
mA:function mA(a,b,c){this.a=a
this.b=b
this.c=c},
p3:function p3(a){this.a=a},
h5:function h5(a,b){this.a=a
this.b=b},
ru:function ru(a){this.a=a},
k7:function k7(a,b){this.a=a
this.b=b},
rg:function rg(a){this.a=a},
rh:function rh(a,b){this.a=a
this.b=b},
ri:function ri(a,b,c){this.a=a
this.b=b
this.c=c},
rj:function rj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rk:function rk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eY:function eY(){},
oK:function oK(){},
of:function of(){},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kL:function kL(a){this.a=a},
nU:function nU(a){this.a=a},
dV:function dV(a,b){this.a=a
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
mz:function mz(a){this.a=a},
my:function my(a){this.a=a},
mJ:function mJ(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mK:function mK(a,$ti){this.a=a
this.$ti=$ti},
mL:function mL(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rc:function rc(a){this.a=a},
rd:function rd(a){this.a=a},
re:function re(a){this.a=a},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k5:function k5(a,b){this.a=a
this.b=b},
pz:function pz(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(a,b,c){this.a=a
this.b=b
this.c=c},
qD:function qD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.dG("Invalid length "+H.A(a)))
return a},
x8:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dG("Invalid view offsetInBytes "+H.A(b)))},
xa:function(a){return a},
EO:function(a){return new Int8Array(H.xa(a))},
cR:function(a,b,c){H.x8(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
Gl:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aA()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.k(H.GM(a,b,c))
return b},
fi:function fi(){},
ey:function ey(){},
n8:function n8(){},
ju:function ju(){},
hy:function hy(){},
hA:function hA(){},
hC:function hC(){},
hz:function hz(){},
hB:function hB(){},
hD:function hD(){},
n9:function n9(){},
na:function na(){},
nb:function nb(){},
nc:function nc(){},
nd:function nd(){},
ne:function ne(){},
nf:function nf(){},
jv:function jv(){},
fj:function fj(){},
GU:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
H7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ay:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jo.prototype
return J.jn.prototype}if(typeof a=="string")return J.et.prototype
if(a==null)return J.mw.prototype
if(typeof a=="boolean")return J.mv.prototype
if(a.constructor==Array)return J.es.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eu.prototype
return a}if(a instanceof P.ac)return a
return J.r9(a)},
rn:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
r9:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.uF==null){H.GZ()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.k(new P.eH("Return interceptor for "+H.A(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$tF()]
if(p!=null)return p
p=H.H1(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$tF(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
w9:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Er:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a2(a,b)
if(s!==32&&s!==13&&!J.w9(s))break;++b}return b},
tA:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.X(a,t)
if(s!==32&&s!==13&&!J.w9(s))break}return b},
bf:function(a){if(typeof a=="string")return J.et.prototype
if(a==null)return a
if(a.constructor==Array)return J.es.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eu.prototype
return a}if(a instanceof P.ac)return a
return J.r9(a)},
dm:function(a){if(a==null)return a
if(a.constructor==Array)return J.es.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eu.prototype
return a}if(a instanceof P.ac)return a
return J.r9(a)},
dD:function(a){if(typeof a=="number")return J.fg.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eI.prototype
return a},
ke:function(a){if(typeof a=="number")return J.fg.prototype
if(typeof a=="string")return J.et.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eI.prototype
return a},
da:function(a){if(typeof a=="string")return J.et.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eI.prototype
return a},
bG:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.eu.prototype
return a}if(a instanceof P.ac)return a
return J.r9(a)},
ed:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ke(a).T(a,b)},
b_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ay(a).R(a,b)},
uJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dD(a).ar(a,b)},
cy:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dD(a).aA(a,b)},
ee:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dD(a).a1(a,b)},
uK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ke(a).aq(a,b)},
i4:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.xu(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bf(a).n(a,b)},
kj:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.xu(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dm(a).i(a,b,c)},
xC:function(a,b){return J.dm(a).h(a,b)},
xD:function(a,b,c,d){return J.bG(a).fD(a,b,c,d)},
xE:function(a,b){return J.da(a).aS(a,b)},
dZ:function(a,b){return J.bG(a).fF(a,b)},
uL:function(a){return J.bG(a).fH(a)},
xF:function(a,b,c){return J.dD(a).ab(a,b,c)},
xG:function(a,b){return J.ke(a).ax(a,b)},
xH:function(a,b){return J.bG(a).ay(a,b)},
xI:function(a,b){return J.bf(a).ag(a,b)},
kk:function(a,b,c){return J.bf(a).dO(a,b,c)},
xJ:function(a,b){return J.bG(a).fQ(a,b)},
uM:function(a,b){return J.dm(a).S(a,b)},
xK:function(a,b,c,d){return J.dm(a).bQ(a,b,c,d)},
kl:function(a){return J.dD(a).ai(a)},
xL:function(a,b){return J.dm(a).a5(a,b)},
uN:function(a){return J.bG(a).gdM(a)},
xM:function(a){return J.bG(a).gbl(a)},
fE:function(a){return J.bG(a).gap(a)},
xN:function(a){return J.bG(a).gcz(a)},
dF:function(a){return J.ay(a).ga3(a)},
rv:function(a){return J.bf(a).gU(a)},
uO:function(a){return J.bG(a).gV(a)},
db:function(a){return J.dm(a).gW(a)},
cm:function(a){return J.bf(a).gm(a)},
xO:function(a){return J.bG(a).gG(a)},
xP:function(a){return J.bG(a).ghE(a)},
xQ:function(a){return J.bG(a).ghF(a)},
uP:function(a){return J.ay(a).gaa(a)},
rw:function(a){return J.bG(a).gaH(a)},
xR:function(a,b){return J.bG(a).bz(a,b)},
xS:function(a,b){return J.bf(a).bb(a,b)},
rx:function(a,b,c,d,e){return J.bG(a).dZ(a,b,c,d,e)},
uQ:function(a,b){return J.dm(a).au(a,b)},
xT:function(a,b,c){return J.da(a).e2(a,b,c)},
uR:function(a,b){return J.bG(a).hr(a,b)},
xU:function(a,b,c,d){return J.bG(a).hB(a,b,c,d)},
km:function(a,b,c){return J.da(a).cM(a,b,c)},
xV:function(a,b,c){return J.da(a).hD(a,b,c)},
fF:function(a,b){return J.bG(a).b2(a,b)},
uS:function(a,b){return J.bG(a).sbl(a,b)},
xW:function(a,b){return J.dm(a).cW(a,b)},
eS:function(a,b){return J.da(a).ex(a,b)},
xX:function(a,b){return J.da(a).ae(a,b)},
uT:function(a){return J.dD(a).l(a)},
xY:function(a){return J.dm(a).an(a)},
xZ:function(a,b){return J.dD(a).bw(a,b)},
cK:function(a){return J.ay(a).A(a)},
y_:function(a){return J.da(a).hJ(a)},
ry:function(a){return J.da(a).bd(a)},
y0:function(a){return J.da(a).ed(a)},
f:function f(){},
mv:function mv(){},
mw:function mw(){},
hn:function hn(){},
nB:function nB(){},
eI:function eI(){},
eu:function eu(){},
es:function es($ti){this.$ti=$ti},
tD:function tD($ti){this.$ti=$ti},
i5:function i5(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fg:function fg(){},
jo:function jo(){},
jn:function jn(){},
et:function et(){}},P={
FV:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.Gz()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dl(new P.pB(t),1)).observe(s,{childList:true})
return new P.pA(t,s,r)}else if(self.setImmediate!=null)return P.GA()
return P.GB()},
FW:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dl(new P.pC(a),0))},
FX:function(a){++u.globalState.f.b
self.setImmediate(H.dl(new P.pD(a),0))},
FY:function(a){P.un(C.q,a)},
by:function(a,b){P.x6(null,a)
return b.gh3()},
cJ:function(a,b){P.x6(a,b)},
bx:function(a,b){J.xH(b,a)},
bw:function(a,b){b.ct(H.cx(a),H.cw(a))},
x6:function(a,b){var t,s,r,q
t=new P.qR(b)
s=new P.qS(b)
r=J.ay(a)
if(!!r.$isbk)a.cm(t,s)
else if(!!r.$iscD)a.bW(t,s)
else{q=new P.bk(0,$.an,null,[null])
q.a=4
q.c=a
q.cm(t,null)}},
bz:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.an.toString
return new P.r1(t)},
xc:function(a,b){if(H.fC(a,{func:1,args:[P.d3,P.d3]})){b.toString
return a}else{b.toString
return a}},
z6:function(a,b){var t=new P.bk(0,$.an,null,[b])
P.wB(C.q,new P.r2(a,t))
return t},
vq:function(a,b,c){var t
if(a==null)a=new P.fk()
t=$.an
if(t!==C.e)t.toString
t=new P.bk(0,t,null,[c])
t.d6(a,b)
return t},
z7:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bk(0,$.an,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.lX(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.c1)(a),++l){q=a[l]
p=t.b
q.bW(new P.lW(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bk(0,$.an,null,[null])
m.d5(C.W)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.cx(j)
n=H.cw(j)
if(t.b===0||!1)return P.vq(o,n,null)
else{t.c=o
t.d=n}}return s},
bt:function(a){return new P.k9(new P.bk(0,$.an,null,[a]),[a])},
x9:function(a,b,c){$.an.toString
a.ak(b,c)},
G0:function(a,b){var t=new P.bk(0,$.an,null,[b])
t.a=4
t.c=a
return t},
wZ:function(a,b){var t,s,r
b.a=1
try{a.bW(new P.q0(b),new P.q1(b))}catch(r){t=H.cx(r)
s=H.cw(r)
P.xx(new P.q2(b,t,s))}},
q_:function(a,b){var t,s,r
for(;a.gfh();)a=a.c
t=a.gcd()
s=b.c
if(t){b.c=null
r=b.bI(s)
b.a=a.a
b.c=a.c
P.fv(b,r)}else{b.a=2
b.c=a
a.dv(s)}},
fv:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fE(p)
n=p.gaG()
s.toString
P.kc(null,null,s,o,n)}return}for(;b.gcg()!=null;b=m){m=b.a
b.a=null
P.fv(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gdT()||b.gdS()){k=b.gfB()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fE(p)
n=p.gaG()
s.toString
P.kc(null,null,s,o,n)
return}j=$.an
if(j==null?k!=null:j!==k)$.an=k
else j=null
if(b.gdS())new P.q7(t,r,q,b).$0()
else if(s){if(b.gdT())new P.q6(r,b,l).$0()}else if(b.gha())new P.q5(t,r,b).$0()
if(j!=null)$.an=j
s=r.b
if(!!J.ay(s).$iscD){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bI(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.q_(s,i)
return}}i=b.b
b=i.bH()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
Gt:function(){var t,s
for(;t=$.fz,t!=null;){$.i2=null
s=t.b
$.fz=s
if(s==null)$.i1=null
t.a.$0()}},
Gv:function(){$.uA=!0
try{P.Gt()}finally{$.i2=null
$.uA=!1
if($.fz!=null)$.$get$uw().$1(P.xn())}},
xj:function(a){var t=new P.jX(a,null)
if($.fz==null){$.i1=t
$.fz=t
if(!$.uA)$.$get$uw().$1(P.xn())}else{$.i1.b=t
$.i1=t}},
Gu:function(a){var t,s,r
t=$.fz
if(t==null){P.xj(a)
$.i2=$.i1
return}s=new P.jX(a,null)
r=$.i2
if(r==null){s.b=t
$.i2=s
$.fz=s}else{s.b=r.b
r.b=s
$.i2=s
if(s.b==null)$.i1=s}},
xx:function(a){var t=$.an
if(C.e===t){P.fA(null,null,C.e,a)
return}t.toString
P.fA(null,null,t,t.cr(a,!0))},
Ht:function(a,b){return new P.qB(null,a,!1,[b])},
xg:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.cx(o)
s=H.cw(o)
$.an.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fE(r)
q=n
p=r.gaG()
c.$2(q,p)}}},
Gk:function(a,b,c,d){var t=a.bO(0)
if(!!J.ay(t).$iscD&&t!==$.$get$he())t.bZ(new P.qU(b,c,d))
else b.ak(c,d)},
x7:function(a,b){return new P.qT(a,b)},
uz:function(a,b,c){var t=a.bO(0)
if(!!J.ay(t).$iscD&&t!==$.$get$he())t.bZ(new P.qV(b,c))
else b.aC(c)},
G_:function(a,b,c,d,e,f,g){var t,s
t=$.an
s=e?1:0
s=new P.hW(a,null,null,null,null,t,s,null,null,[f,g])
s.eM(b,c,d,e,g)
s.eP(a,b,c,d,e,f,g)
return s},
Gj:function(a,b,c){$.an.toString
a.bB(b,c)},
wB:function(a,b){var t=$.an
if(t===C.e){t.toString
return P.un(a,b)}return P.un(a,t.cr(b,!0))},
un:function(a,b){var t=C.a.al(a.a,1000)
return H.FQ(t<0?0:t,b)},
kc:function(a,b,c,d,e){var t={}
t.a=d
P.Gu(new P.r0(t,e))},
xd:function(a,b,c,d){var t,s
s=$.an
if(s===c)return d.$0()
$.an=c
t=s
try{s=d.$0()
return s}finally{$.an=t}},
xf:function(a,b,c,d,e){var t,s
s=$.an
if(s===c)return d.$1(e)
$.an=c
t=s
try{s=d.$1(e)
return s}finally{$.an=t}},
xe:function(a,b,c,d,e,f){var t,s
s=$.an
if(s===c)return d.$2(e,f)
$.an=c
t=s
try{s=d.$2(e,f)
return s}finally{$.an=t}},
fA:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cr(d,!(!t||!1))
P.xj(d)},
pB:function pB(a){this.a=a},
pA:function pA(a,b,c){this.a=a
this.b=b
this.c=c},
pC:function pC(a){this.a=a},
pD:function pD(a){this.a=a},
qR:function qR(a){this.a=a},
qS:function qS(a){this.a=a},
r1:function r1(a){this.a=a},
cD:function cD(){},
r2:function r2(a,b){this.a=a
this.b=b},
lX:function lX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lW:function lW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eZ:function eZ(){},
jY:function jY(){},
dX:function dX(a,$ti){this.a=a
this.$ti=$ti},
k9:function k9(a,$ti){this.a=a
this.$ti=$ti},
k1:function k1(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bk:function bk(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
pX:function pX(a,b){this.a=a
this.b=b},
q4:function q4(a,b){this.a=a
this.b=b},
q0:function q0(a){this.a=a},
q1:function q1(a){this.a=a},
q2:function q2(a,b,c){this.a=a
this.b=b
this.c=c},
pZ:function pZ(a,b){this.a=a
this.b=b},
q3:function q3(a,b){this.a=a
this.b=b},
pY:function pY(a,b,c){this.a=a
this.b=b
this.c=c},
q7:function q7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q8:function q8(a){this.a=a},
q6:function q6(a,b,c){this.a=a
this.b=b
this.c=c},
q5:function q5(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a,b){this.a=a
this.b=b},
dj:function dj(){},
on:function on(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ol:function ol(a,b){this.a=a
this.b=b},
om:function om(a,b){this.a=a
this.b=b},
oo:function oo(a){this.a=a},
ot:function ot(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
or:function or(a,b){this.a=a
this.b=b},
os:function os(){},
ou:function ou(a){this.a=a},
ox:function ox(a){this.a=a},
oy:function oy(a,b){this.a=a
this.b=b},
ov:function ov(a,b){this.a=a
this.b=b},
ow:function ow(a){this.a=a},
oz:function oz(a,b){this.a=a
this.b=b},
oA:function oA(a,b){this.a=a
this.b=b},
op:function op(a,b,c){this.a=a
this.b=b
this.c=c},
oq:function oq(a){this.a=a},
ok:function ok(){},
dk:function dk(){},
pG:function pG(a,b,c){this.a=a
this.b=b
this.c=c},
pF:function pF(a){this.a=a},
k_:function k_(){},
pL:function pL(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pN:function pN(b,c,a){this.b=b
this.c=c
this.a=a},
pM:function pM(){},
qn:function qn(){},
qo:function qo(a,b){this.a=a
this.b=b},
qA:function qA(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qB:function qB(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qU:function qU(a,b,c){this.a=a
this.b=b
this.c=c},
qT:function qT(a,b){this.a=a
this.b=b},
qV:function qV(a,b){this.a=a
this.b=b},
hV:function hV(){},
hW:function hW(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
ql:function ql(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eU:function eU(a,b){this.a=a
this.b=b},
qQ:function qQ(){},
r0:function r0(a,b){this.a=a
this.b=b},
qr:function qr(){},
qs:function qs(a,b){this.a=a
this.b=b},
qt:function qt(a,b){this.a=a
this.b=b},
qu:function qu(a,b){this.a=a
this.b=b},
G1:function(a,b){var t=a[b]
return t===a?null:t},
uy:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
ux:function(){var t=Object.create(null)
P.uy(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wb:function(a,b,c){return H.xr(a,new H.v(0,null,null,null,null,null,0,[b,c]))},
cE:function(a,b){return new H.v(0,null,null,null,null,null,0,[a,b])},
mM:function(){return new H.v(0,null,null,null,null,null,0,[null,null])},
hq:function(a){return H.xr(a,new H.v(0,null,null,null,null,null,0,[null,null]))},
hY:function(a,b){return new P.k4(0,null,null,null,null,null,0,[a,b])},
G2:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
E:function(a,b,c,d,e){return new P.qa(0,null,null,null,null,[d,e])},
tx:function(a,b,c){var t,s
if(P.uB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i3()
s.push(a)
try{P.Gs(a,t)}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=P.wz(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jk:function(a,b,c){var t,s,r
if(P.uB(a))return b+"..."+c
t=new P.cc(b)
s=$.$get$i3()
s.push(a)
try{r=t
r.N=P.wz(r.gN(),a,", ")}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=t
s.N=s.gN()+c
s=t.gN()
return s.charCodeAt(0)==0?s:s},
uB:function(a){var t,s
for(t=0;s=$.$get$i3(),t<s.length;++t)if(a===s[t])return!0
return!1},
Gs:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.db(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.F())return
q=H.A(t.gP())
b.push(q)
s+=q.length+2;++r}if(!t.F()){if(r<=5)return
if(0>=b.length)return H.w(b,-1)
p=b.pop()
if(0>=b.length)return H.w(b,-1)
o=b.pop()}else{n=t.gP();++r
if(!t.F()){if(r<=4){b.push(H.A(n))
return}p=H.A(n)
if(0>=b.length)return H.w(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gP();++r
for(;t.F();n=m,m=l){l=t.gP();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.A(n)
p=H.A(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
wa:function(a,b,c,d,e){return new H.v(0,null,null,null,null,null,0,[d,e])},
Es:function(a,b,c){var t=P.wa(null,null,null,b,c)
a.a5(0,new P.r5(t))
return t},
Et:function(a,b,c,d,e){var t=P.wa(null,null,null,d,e)
P.Ey(t,a,b,c)
return t},
a5:function(a,b,c,d){return new P.k3(0,null,null,null,null,null,0,[d])},
tJ:function(a,b){var t,s
t=P.a5(null,null,null,b)
for(s=J.db(a);s.F();)t.h(0,s.gP())
return t},
wg:function(a){var t,s,r
t={}
if(P.uB(a))return"{...}"
s=new P.cc("")
try{$.$get$i3().push(a)
r=s
r.N=r.gN()+"{"
t.a=!0
a.a5(0,new P.n_(t,s))
t=s
t.N=t.gN()+"}"}finally{t=$.$get$i3()
if(0>=t.length)return H.w(t,-1)
t.pop()}t=s.gN()
return t.charCodeAt(0)==0?t:t},
Ey:function(a,b,c,d){var t,s,r
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.c1)(b),++s){r=b[s]
a.i(0,c.$1(r),d.$1(r))}},
tK:function(a,b){var t=new P.mN(null,0,0,0,[b])
t.eH(a,b)
return t},
qa:function qa(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qd:function qd(a){this.a=a},
qb:function qb(a,$ti){this.a=a
this.$ti=$ti},
qc:function qc(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
k4:function k4(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
k3:function k3(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qe:function qe(){},
ff:function ff(){},
hl:function hl(){},
r5:function r5(a){this.a=a},
jp:function jp(){},
hE:function hE(){},
aR:function aR(){},
qI:function qI(){},
jq:function jq(){},
eJ:function eJ(a,$ti){this.a=a
this.$ti=$ti},
n_:function n_(a,b){this.a=a
this.b=b},
mN:function mN(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qi:function qi(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
o4:function o4(){},
o3:function o3(){},
uW:function(a,b,c,d,e,f){if(C.d.bA(f,4)!==0)throw H.k(new P.bO("Invalid base64 padding, padded length must be multiple of four, is "+H.A(f),a,c))
if(d+e!==f)throw H.k(new P.bO("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.k(new P.bO("Invalid base64 padding, more than two '=' characters",a,b))},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
fR:function fR(){},
fU:function fU(){},
le:function le(){},
pc:function pc(a){this.a=a},
pd:function pd(a){this.a=a},
qK:function qK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qM:function qM(a){this.a=a},
qL:function qL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FO:function(a,b,c){var t,s,r,q
if(b<0)throw H.k(P.bF(b,0,J.cm(a),null,null))
t=c==null
if(!t&&c<b)throw H.k(P.bF(c,b,J.cm(a),null,null))
s=J.db(a)
for(r=0;r<b;++r)if(!s.F())throw H.k(P.bF(b,0,r,null,null))
q=[]
if(t)for(;s.F();)q.push(s.gP())
else for(r=b;r<c;++r){if(!s.F())throw H.k(P.bF(c,b,r,null,null))
q.push(s.gP())}return H.ws(q)},
wz:function(a,b,c){var t=J.db(b)
if(!t.F())return a
if(c.length===0){do a+=H.A(t.gP())
while(t.F())}else{a+=H.A(t.gP())
for(;t.F();)a=a+c+H.A(t.gP())}return a},
yt:function(a,b){return J.xG(a,b)},
yx:function(a,b){var t=new P.e2(a,b)
t.d1(a,b)
return t},
yy:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.A(t)
if(t>=10)return s+"00"+H.A(t)
return s+"000"+H.A(t)},
yz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ic:function(a){if(a>=10)return""+a
return"0"+a},
vc:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.yR(a)},
yR:function(a){var t=J.ay(a)
if(!!t.$iseY)return t.A(a)
return H.nG(a)},
dG:function(a){return new P.d0(!1,null,null,a)},
e_:function(a,b,c){return new P.d0(!0,a,b,c)},
y1:function(a){return new P.d0(!1,null,a,"Must not be null")},
wu:function(a){return new P.eA(null,null,!1,null,null,a)},
jE:function(a,b,c){return new P.eA(null,null,!0,a,b,"Value not in range")},
bF:function(a,b,c,d,e){return new P.eA(b,c,!0,a,d,"Invalid value")},
di:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.af(a)
if(!(0>a)){if(typeof c!=="number")return H.af(c)
t=a>c}else t=!0
if(t)throw H.k(P.bF(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.af(b)
if(!(a>b)){if(typeof c!=="number")return H.af(c)
t=b>c}else t=!0
if(t)throw H.k(P.bF(b,a,c,"end",f))
return b}return c},
bv:function(a,b,c,d,e){var t=e!=null?e:J.cm(b)
return new P.mc(b,t,!0,a,c,"Index out of range")},
lk:function(a){return new P.pW(a)},
d2:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.db(a);s.F();)t.push(s.gP())
if(b)return t
t.fixed$length=Array
return t},
Eu:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
l:function(a,b){var t=P.d2(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fD:function(a){H.H7(H.A(a))},
dy:function(a,b,c){return new H.hm(a,H.tB(a,!1,!0,!1),null,null)},
oF:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.di(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a1()
s=c<t}else s=!0
return H.ws(s?C.b.c0(a,b,c):a)}if(!!J.ay(a).$isfj)return H.EW(a,b,P.di(b,c,a.length,null,null,null))
return P.FO(a,b,c)},
wO:function(){var t=H.EQ()
if(t!=null)return P.wP(t,0,null)
throw H.k(new P.V("'Uri.base' is not supported"))},
wP:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a2(a,b+4)^58)*3|C.c.a2(a,b)^100|C.c.a2(a,b+1)^97|C.c.a2(a,b+2)^116|C.c.a2(a,b+3)^97)>>>0
if(s===0)return P.wN(b>0||c<c?C.c.K(a,b,c):a,5,null).gef()
else if(s===32)return P.wN(C.c.K(a,t,c),0,null).gef()}r=H.a(new Array(8),[P.C])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xh(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.ar()
if(p>=b)if(P.xh(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.T()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a1()
if(typeof l!=="number")return H.af(l)
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
j=!1}else{if(!(l<c&&l===m+2&&C.c.aB(a,"..",m)))h=l>m+2&&C.c.aB(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aB(a,"file",b)){if(o<=b){if(!C.c.aB(a,"/",m)){g="file:///"
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
m=7}else if(m===l)if(b===0&&!0){a=C.c.az(a,m,l,"/");++l;++k;++c}else{a=C.c.K(a,b,m)+"/"+C.c.K(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aB(a,"http",b)){if(q&&n+3===m&&C.c.aB(a,"80",n+1))if(b===0&&!0){a=C.c.az(a,n,m,"")
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
else if(p===t&&C.c.aB(a,"https",b)){if(q&&n+4===m&&C.c.aB(a,"443",n+1))if(b===0&&!0){a=C.c.az(a,n,m,"")
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
k-=b}return new P.qz(a,p,o,n,m,l,k,i,null)}return P.G5(a,b,c,p,o,n,m,l,k,i)},
wR:function(a,b){return C.b.h0(a.split("&"),P.mM(),new P.p9(b))},
FR:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.p6(a)
s=H.cB(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.X(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fm(C.c.K(a,p,q),null,null)
if(J.cy(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.w(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fm(C.c.K(a,p,c),null,null)
if(J.cy(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.w(r,o)
r[o]=m
return r},
wQ:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.p7(a)
s=new P.p8(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.X(a,q)
if(m===58){if(q===b){++q
if(C.c.X(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.b_(C.b.gb4(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.FR(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.as()
h=j[1]
if(typeof h!=="number")return H.af(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.as()
i=j[3]
if(typeof i!=="number")return H.af(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.ay(e).R(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.w(g,f)
g[f]=0
i=f+1
if(i>=16)return H.w(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.cV()
i=C.d.aR(e,8)
if(f<0||f>=16)return H.w(g,f)
g[f]=i
i=f+1
if(i>=16)return H.w(g,i)
g[i]=e&255
f+=2}}return g},
G5:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.Gd(a,b,d)
else{if(d===b)P.i_(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.Ge(a,t,e-1):""
r=P.G9(a,e,f,!1)
if(typeof f!=="number")return f.T()
q=f+1
if(typeof g!=="number")return H.af(g)
p=q<g?P.Gb(H.fm(C.c.K(a,q,g),null,new P.r3(a,f)),j):null}else{s=""
r=null
p=null}o=P.Ga(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a1()
n=h<i?P.Gc(a,h+1,i,null):null
return new P.ka(j,s,r,p,o,n,i<c?P.G8(a,i+1,c):null,null,null,null,null,null)},
x0:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i_:function(a,b,c){throw H.k(new P.bO(c,a,b))},
Gb:function(a,b){if(a!=null&&J.b_(a,P.x0(b)))return
return a},
G9:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.X(a,b)===91){if(typeof c!=="number")return c.aj()
t=c-1
if(C.c.X(a,t)!==93)P.i_(a,b,"Missing end `]` to match `[` in host")
P.wQ(a,b+1,t)
return C.c.K(a,b,c).toLowerCase()}if(typeof c!=="number")return H.af(c)
s=b
for(;s<c;++s)if(C.c.X(a,s)===58){P.wQ(a,b,c)
return"["+a+"]"}return P.Gg(a,b,c)},
Gg:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.af(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.X(a,t)
if(p===37){o=P.x5(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.cc("")
m=C.c.K(a,s,t)
l=r.N+=!q?m.toLowerCase():m
if(n){o=C.c.K(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.N=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.w(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.cc("")
if(s<t){r.N+=C.c.K(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.w(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.i_(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.X(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.cc("")
m=C.c.K(a,s,t)
r.N+=!q?m.toLowerCase():m
r.N+=P.x1(p)
t+=k
s=t}}}}if(r==null)return C.c.K(a,b,c)
if(s<c){m=C.c.K(a,s,c)
r.N+=!q?m.toLowerCase():m}n=r.N
return n.charCodeAt(0)==0?n:n},
Gd:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.x3(C.c.a2(a,b)))P.i_(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a2(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.w(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.i_(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.K(a,b,c)
return P.G6(s?a.toLowerCase():a)},
G6:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Ge:function(a,b,c){var t=P.fy(a,b,c,C.Y,!1)
return t==null?C.c.K(a,b,c):t},
Ga:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fy(a,b,c,C.D,!1)
if(r==null)r=C.c.K(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.ad(r,"/"))r="/"+r
return P.Gf(r,e,f)},
Gf:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.ad(a,"/"))return P.Gh(a,!t||c)
return P.Gi(a)},
Gc:function(a,b,c,d){var t=P.fy(a,b,c,C.k,!1)
return t==null?C.c.K(a,b,c):t},
G8:function(a,b,c){var t=P.fy(a,b,c,C.k,!1)
return t==null?C.c.K(a,b,c):t},
x5:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.X(a,b+1)
r=C.c.X(a,t)
q=H.rb(s)
p=H.rb(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aR(o,4)
if(t>=8)return H.w(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hG(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.K(a,b,b+3).toUpperCase()
return},
x1:function(a){var t,s,r,q,p,o,n,m
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
for(p=0;--r,r>=0;s=128){o=C.a.fv(a,6*r)&63|s
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
p+=3}}return P.oF(t,0,null)},
fy:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.da(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a1()
if(typeof c!=="number")return H.af(c)
if(!(r<c))break
c$0:{o=s.X(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.w(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.x5(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.w(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.i_(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.X(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.x1(o)}}if(p==null)p=new P.cc("")
p.N+=C.c.K(a,q,r)
p.N+=H.A(m)
if(typeof l!=="number")return H.af(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a1()
if(q<c)p.N+=s.K(a,q,c)
t=p.N
return t.charCodeAt(0)==0?t:t},
x4:function(a){if(C.c.ad(a,"."))return!0
return C.c.bb(a,"/.")!==-1},
Gi:function(a){var t,s,r,q,p,o,n
if(!P.x4(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.c1)(s),++p){o=s[p]
if(J.b_(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.w(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bc(t,"/")},
Gh:function(a,b){var t,s,r,q,p,o
if(!P.x4(a))return!b?P.x2(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.c1)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.b_(C.b.gb4(t),"..")){if(0>=t.length)return H.w(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.w(t,0)
s=J.rv(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.b_(C.b.gb4(t),".."))t.push("")
if(!b){if(0>=t.length)return H.w(t,0)
s=P.x2(t[0])
if(0>=t.length)return H.w(t,0)
t[0]=s}return C.b.bc(t,"/")},
x2:function(a){var t,s,r,q
t=J.bf(a)
s=t.gm(a)
if(typeof s!=="number")return s.ar()
if(s>=2&&P.x3(t.X(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.af(s)
if(!(r<s))break
q=t.X(a,r)
if(q===58)return C.c.K(a,0,r)+"%3A"+C.c.ae(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.w(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
G7:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.X(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.k(P.dG("Invalid URL encoding"))}}return t},
qJ:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.af(c)
t=J.da(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.X(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.o!==d)p=!1
else p=!0
if(p)return t.K(a,b,c)
else o=new H.kN(t.K(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.X(a,s)
if(q>127)throw H.k(P.dG("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.k(P.dG("Truncated URI"))
o.push(P.G7(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pd(!1).fO(o)},
x3:function(a){var t=a|32
return 97<=t&&t<=122},
wN:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bf(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.af(o)
if(!(r<o))break
c$0:{p=s.X(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.k(new P.bO("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.k(new P.bO("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.af(o)
if(!(r<o))break
p=s.X(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gb4(t)
if(p!==44||r!==m+7||!s.aB(a,"base64",m+1))throw H.k(new P.bO("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.ho(0,a,o,s.gm(a))
else{l=P.fy(a,o,s.gm(a),C.k,!0)
if(l!=null)a=s.az(a,o,s.gm(a),l)}return new P.p5(a,t,c)},
Gp:function(){var t,s,r,q,p
t=P.Eu(22,new P.qY(),!0,P.d8)
s=new P.qX(t)
r=new P.qZ()
q=new P.r_()
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
xh:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xi()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.w(t,d)
r=t[d]
q=C.c.a2(a,s)^96
p=J.i4(r,q>95?31:q)
if(typeof p!=="number")return p.aF()
d=p&31
o=C.d.aR(p,5)
if(o>=8)return H.w(e,o)
e[o]=s}return d},
d9:function d9(){},
bH:function bH(){},
e2:function e2(a,b){this.a=a
this.b=b},
W:function W(){},
dJ:function dJ(a){this.a=a},
lb:function lb(){},
lc:function lc(){},
ei:function ei(){},
fk:function fk(){},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function eA(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mc:function mc(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a){this.a=a},
eH:function eH(a){this.a=a},
dT:function dT(a){this.a=a},
bR:function bR(a){this.a=a},
no:function no(){},
jL:function jL(){},
l3:function l3(a){this.a=a},
pW:function pW(a){this.a=a},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function ll(a,bE,$ti){this.a=a
this.bE=bE
this.$ti=$ti},
C:function C(){},
o:function o(){},
jm:function jm(){},
p:function p(){},
be:function be(){},
d3:function d3(){},
dn:function dn(){},
ac:function ac(){},
dw:function dw(){},
eB:function eB(){},
dS:function dS(){},
B:function B(){},
cc:function cc(N){this.N=N},
eK:function eK(){},
p9:function p9(a){this.a=a},
p6:function p6(a){this.a=a},
p7:function p7(a){this.a=a},
p8:function p8(a,b){this.a=a
this.b=b},
ka:function ka(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
r3:function r3(a,b){this.a=a
this.b=b},
p5:function p5(a,b,c){this.a=a
this.b=b
this.c=c},
qY:function qY(){},
qX:function qX(a){this.a=a},
qZ:function qZ(){},
r_:function r_(){},
qz:function qz(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pK:function pK(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
xo:function(a){var t,s,r,q,p
if(a==null)return
t=P.mM()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.c1)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
GJ:function(a){var t,s
t=new P.bk(0,$.an,null,[null])
s=new P.dX(t,[null])
a.then(H.dl(new P.r6(s),1))["catch"](H.dl(new P.r7(s),1))
return t},
rI:function(){var t=$.v9
if(t==null){t=J.kk(window.navigator.userAgent,"Opera",0)
$.v9=t}return t},
vb:function(){var t=$.va
if(t==null){t=P.rI()!==!0&&J.kk(window.navigator.userAgent,"WebKit",0)
$.va=t}return t},
yA:function(){var t,s
t=$.v6
if(t!=null)return t
s=$.v7
if(s==null){s=J.kk(window.navigator.userAgent,"Firefox",0)
$.v7=s}if(s)t="-moz-"
else{s=$.v8
if(s==null){s=P.rI()!==!0&&J.kk(window.navigator.userAgent,"Trident/",0)
$.v8=s}if(s)t="-ms-"
else t=P.rI()===!0?"-o-":"-webkit-"}$.v6=t
return t},
qE:function qE(){},
qG:function qG(a,b){this.a=a
this.b=b},
px:function px(){},
py:function py(a,b){this.a=a
this.b=b},
qF:function qF(a,b){this.a=a
this.b=b},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
r6:function r6(a){this.a=a},
r7:function r7(a){this.a=a},
kU:function kU(){},
kV:function kV(a){this.a=a},
Gn:function(a){var t,s,r
t=new P.bk(0,$.an,null,[null])
s=new P.k9(t,[null])
a.toString
r=W.R
W.eO(a,"success",new P.qW(a,s),!1,r)
W.eO(a,"error",s.gdN(),!1,r)
return t},
l5:function l5(){},
qW:function qW(a,b){this.a=a
this.b=b},
mb:function mb(){},
nl:function nl(){},
hH:function hH(){},
p_:function p_(){},
G4:function(a){var t=new P.qp(0,0)
t.eQ(a)
return t},
qg:function qg(){},
qp:function qp(a,b){this.a=a
this.b=b},
qq:function qq(){},
bU:function bU(){},
kn:function kn(){},
ef:function ef(){},
lm:function lm(){},
ln:function ln(){},
lo:function lo(){},
lp:function lp(){},
lq:function lq(){},
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
lQ:function lQ(){},
cq:function cq(){},
m9:function m9(){},
d1:function d1(){},
mF:function mF(){},
iK:function iK(){},
j3:function j3(){},
n0:function n0(){},
n1:function n1(){},
d4:function d4(){},
ni:function ni(){},
iL:function iL(){},
j4:function j4(){},
ny:function ny(){},
nD:function nD(){},
o_:function o_(){},
oE:function oE(){},
iM:function iM(){},
j5:function j5(){},
ku:function ku(a){this.a=a},
cd:function cd(){},
oH:function oH(){},
oJ:function oJ(){},
eG:function eG(){},
oQ:function oQ(){},
d7:function d7(){},
p0:function p0(){},
iN:function iN(){},
j6:function j6(){},
pb:function pb(){},
pf:function pf(){},
pg:function pg(){},
hX:function hX(){},
qv:function qv(){},
qw:function qw(){},
qx:function qx(){},
bg:function bg(){},
d8:function d8(){},
fK:function fK(){},
eV:function eV(){},
fL:function fL(){},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
bA:function bA(){},
e0:function e0(){},
kT:function kT(){},
kp:function kp(){},
nR:function nR(){},
qN:function qN(){},
jK:function jK(){},
iO:function iO(){},
j7:function j7(){}},W={
yk:function(a){if(a!=null)return new Audio(a)
return new Audio()},
yl:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
yw:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
FZ:function(a){var t=new W.pI(a,null)
t.eN(a)
return t},
vr:function(a,b,c){return W.vs(a,null,null,b,null,null,null,c).aY(new W.m5())},
vs:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e7
s=new P.bk(0,$.an,null,[t])
r=new P.dX(s,[t])
q=new XMLHttpRequest()
C.L.hq(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.Hs
W.eO(q,"load",new W.m6(r,q),!1,t)
W.eO(q,"error",r.gdN(),!1,t)
q.send()
return s},
vt:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
x_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eO:function(a,b,c,d,e){var t=W.Gx(new W.pV(c))
t=new W.pU(0,a,b,t,!1,[e])
t.eO(a,b,c,!1,e)
return t},
Go:function(a){var t
if(!!J.ay(a).$iseh)return a
t=new P.jV([],[],!1)
t.c=!0
return t.b_(a)},
Gx:function(a){var t=$.an
if(t===C.e)return a
return t.fJ(a,!0)},
al:function al(){},
eT:function eT(){},
kq:function kq(){},
eW:function eW(){},
cL:function cL(){},
ky:function ky(){},
h_:function h_(){},
h2:function h2(){},
kC:function kC(){},
eX:function eX(){},
kF:function kF(){},
fQ:function fQ(){},
eg:function eg(){},
kP:function kP(){},
i8:function i8(){},
fV:function fV(){},
kW:function kW(){},
kX:function kX(){},
fW:function fW(){},
fX:function fX(){},
kY:function kY(){},
bN:function bN(){},
f_:function f_(){},
iC:function iC(){},
pI:function pI(a,b){this.a=a
this.b=b},
jy:function jy(){},
pJ:function pJ(){},
ia:function ia(){},
kZ:function kZ(){},
l_:function l_(){},
l4:function l4(){},
f0:function f0(){},
ib:function ib(){},
eh:function eh(){},
id:function id(){},
ie:function ie(){},
l7:function l7(){},
ig:function ig(){},
ih:function ih(){},
iD:function iD(){},
iX:function iX(){},
ii:function ii(){},
ij:function ij(){},
k0:function k0(a,$ti){this.a=a
this.$ti=$ti},
dr:function dr(){},
ld:function ld(){},
fZ:function fZ(){},
lj:function lj(){},
R:function R(){},
aH:function aH(){},
lM:function lM(){},
cf:function cf(){},
f8:function f8(){},
iE:function iE(){},
iY:function iY(){},
lN:function lN(){},
lO:function lO(){},
lP:function lP(){},
lS:function lS(){},
lT:function lT(){},
iy:function iy(){},
cp:function cp(){},
m2:function m2(){},
f9:function f9(){},
iF:function iF(){},
iZ:function iZ(){},
iA:function iA(){},
e7:function e7(){},
m5:function m5(){},
m6:function m6(a,b){this.a=a
this.b=b},
hf:function hf(){},
m8:function m8(){},
hg:function hg(){},
fb:function fb(){},
me:function me(){},
mC:function mC(){},
ho:function ho(){},
hp:function hp(){},
mU:function mU(){},
mZ:function mZ(){},
hw:function hw(){},
js:function js(){},
n2:function n2(){},
n3:function n3(){},
hx:function hx(){},
cr:function cr(){},
jt:function jt(){},
iP:function iP(){},
j8:function j8(){},
ng:function ng(){},
nh:function nh(){},
ax:function ax(){},
jw:function jw(){},
iQ:function iQ(){},
j9:function j9(){},
nk:function nk(){},
np:function np(){},
nt:function nt(){},
nv:function nv(){},
e8:function e8(){},
nA:function nA(){},
ch:function ch(){},
jC:function jC(){},
iR:function iR(){},
ja:function ja(){},
nF:function nF(){},
jF:function jF(){},
fp:function fp(){},
jG:function jG(){},
o2:function o2(){},
o5:function o5(){},
o6:function o6(){},
o7:function o7(){},
cs:function cs(){},
jI:function jI(){},
h0:function h0(){},
h3:function h3(){},
hJ:function hJ(){},
ct:function ct(){},
jJ:function jJ(){},
iS:function iS(){},
jb:function jb(){},
fq:function fq(){},
ob:function ob(){},
cj:function cj(){},
oc:function oc(){},
od:function od(){},
oj:function oj(){},
cl:function cl(){},
eb:function eb(){},
oM:function oM(){},
oO:function oO(){},
cS:function cS(){},
cH:function cH(){},
oR:function oR(){},
iT:function iT(){},
jc:function jc(){},
oS:function oS(){},
h1:function h1(){},
h4:function h4(){},
oW:function oW(){},
cv:function cv(){},
jN:function jN(){},
iU:function iU(){},
jd:function jd(){},
fs:function fs(){},
jO:function jO(){},
ec:function ec(){},
pa:function pa(){},
pe:function pe(){},
ft:function ft(){},
jP:function jP(){},
pj:function pj(){},
jS:function jS(){},
pq:function pq(){},
eL:function eL(){},
fu:function fu(){},
pH:function pH(){},
hT:function hT(){},
iV:function iV(){},
je:function je(){},
jZ:function jZ(){},
iW:function iW(){},
jf:function jf(){},
pO:function pO(){},
pP:function pP(){},
k2:function k2(){},
iG:function iG(){},
j_:function j_(){},
q9:function q9(){},
hZ:function hZ(){},
iH:function iH(){},
j0:function j0(){},
qy:function qy(){},
k6:function k6(){},
iI:function iI(){},
j1:function j1(){},
k8:function k8(){},
iJ:function iJ(){},
j2:function j2(){},
qO:function qO(){},
qP:function qP(){},
pQ:function pQ(a){this.a=a},
pT:function pT(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
hU:function hU(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
pU:function pU(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
pV:function pV(a){this.a=a},
bu:function bu(){},
lR:function lR(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qH:function qH(){}},T={
t5:function(a,b,c,d){var t
H.Hg(a,"$isp",[P.C],"$asp")
t=new T.hh(a,null,d,b,null)
t.eG(a,b,c,d)
return t},
wk:function(a,b){return new T.nq(0,a,new Uint8Array(H.cB(b==null?32768:b)))},
FT:function(a){var t=new T.pt(-1,0,0,0,0,null,null,"",[])
t.eK(a)
return t},
FU:function(a,b){var t=new T.pu(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.eL(a,b)
return t},
fa:function(a){var t=new T.m7(null,0,2147483647)
t.eF(a)
return t},
fG:function fG(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
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
dc:function dc(a){this.a=a},
hh:function hh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nq:function nq(a,b,c){this.a=a
this.b=b
this.c=c},
pt:function pt(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pu:function pu(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
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
pv:function pv(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
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
ps:function ps(a){this.a=a},
m7:function m7(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kE:function kE(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
kH:function kH(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
l6:function l6(){},
m0:function m0(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
Fk:function(a,b,c,d){var t,s
t=[P.B]
s=H.a([],t)
t=new T.hI("Glitch",0.01,0.01,0.01,s,0.5,a,new H.v(0,null,null,null,null,null,0,[X.F,P.W]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.J(null,null,A.a4),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.N]),H.a([],[A.fO]),1)
t.a8(a,b,c,d)
return t},
hI:function hI(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.a=a
_.b=b
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
c_:function c_(a,b){this.a=a
this.b=b},
yE:function(a,b,c,d){var t,s,r,q
t=new B.dq(new P.cc(""),0,0)
t.af(a,8)
c.toString
s=H.cR(c,0,null)
for(r=s.length,q=0;q<r;++q)t.af(s[q],8)
return t.aZ(b)},
yD:function(a,b,c,d){var t,s,r,q,p
t=H.cB(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dZ(a,b)
for(q=0;q<c;++q){p=r.a6(8)
if(q>=t)return H.w(s,q)
s[q]=p}return s},
yC:function(a,b,c,d){var t,s,r,q,p
t=new B.dq(new P.cc(""),0,0)
t.af(a,8)
s=d.gcF()
r=C.f.ai(Math.log(H.kd(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cR(c,0,null)
for(s=q.length,p=0;p<s;++p)t.af(q[p],r)
return t.aZ(b)},
yB:function(a,b,c,d){var t,s,r,q,p,o
t=H.cB(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ai(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dZ(a,b)
for(o=0;o<c;++o){r=p.a6(q)
if(o>=t)return H.w(s,o)
s[o]=r}return s}},S={ko:function ko(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},bB:function bB(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},i7:function i7(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},m4:function m4(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mD:function mD(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},mX:function mX(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},o1:function o1(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},fl:function fl(){},uo:function uo(){},up:function up(){},uq:function uq(){},rO:function rO(){},rR:function rR(){},rF:function rF(){},u8:function u8(){},us:function us(){},ut:function ut(){},kK:function kK(){},u0:function u0(){},tW:function tW(){},mI:function mI(){},rJ:function rJ(){},rA:function rA(){},l1:function l1(){},tI:function tI(){},l2:function l2(){},nu:function nu(){},uf:function uf(){},uc:function uc(){},ug:function ug(){},rz:function rz(){},lY:function lY(){},kI:function kI(){},rE:function rE(){},rD:function rD(){},u1:function u1(){},uh:function uh(){},u2:function u2(){},rQ:function rQ(){},rP:function rP(){},ue:function ue(){},ud:function ud(){},oT:function oT(){},uj:function uj(){},rG:function rG(){},rH:function rH(){},ur:function ur(){},hv:function hv(){},tO:function tO(){},tP:function tP(){},tQ:function tQ(){},tR:function tR(){},u9:function u9(){},ua:function ua(){},ub:function ub(){},tN:function tN(){},tT:function tT(){},tU:function tU(){},t2:function t2(){},t3:function t3(){},t4:function t4(){},tV:function tV(){},tS:function tS(){},rB:function rB(){},ul:function ul(){},um:function um(){},uk:function uk(){}},K={bQ:function bQ(a,b){this.a=a
this.b=b},mG:function mG(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},nX:function nX(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},bJ:function bJ(a,b){this.a=a
this.b=b}},A={
H2:function(){A.ra()
W.vr(C.c.aq("../",N.u_())+"navbar.txt",null,null).aY(O.H4())
A.H9()
W.eO(window,"scroll",new A.rm(),!1,W.R)},
H9:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
$.wj=!1
t=new K.bJ("7/24/17","Hey, I keep forgetting to update this thing! Most of what I've been working on lately has gone towards adding fan classes. Head over to <a href='character_creator.html'>the character creator</a> if you want to check them out.")
s=$.wj
if(s)t.b="Who is Shogun??? <div class ='strikethroughStuff'>Hey, I keep forgetting to update this thing! Most of what I've been working on lately has gone towards adding fan classes. Head over to <a href='character_creator.html'>the character creator</a> if you want to check them out.</a>"
r=new K.bJ("6/28/17","A big shoutout and thanks to everyone who contributed art for the <a href='land_of_rods_and_screens.html'>Land of Rods and Screens</a> There's a lot of very weird, fun, and downright silly stuff in there. It's crazy-awesome that our little project here has such an amazing community already!<br><Br>Speaking of which, I have a favor to ask. I need photo reference for what people in High School are wearing. (That's students age 14-18 for the non-Americans.) I'd love to see all walks of life, dressed up, dressed down, you name it. Turns out it's surprisingly hard to find examples of actual people rather than fashion models and TV stars. Faces aren't necessary, just clothes. You can send photos to karmicRetribution001@gmail.com or thru private message on our Discord. Please don't leave me to source all my clothing from Seventeen and Teen Wolf!")
if(s)r.b="Who is Shogun??? <div class ='strikethroughStuff'>A big shoutout and thanks to everyone who contributed art for the <a href='land_of_rods_and_screens.html'>Land of Rods and Screens</a> There's a lot of very weird, fun, and downright silly stuff in there. It's crazy-awesome that our little project here has such an amazing community already!<br><Br>Speaking of which, I have a favor to ask. I need photo reference for what people in High School are wearing. (That's students age 14-18 for the non-Americans.) I'd love to see all walks of life, dressed up, dressed down, you name it. Turns out it's surprisingly hard to find examples of actual people rather than fashion models and TV stars. Faces aren't necessary, just clothes. You can send photos to karmicRetribution001@gmail.com or thru private message on our Discord. Please don't leave me to source all my clothing from Seventeen and Teen Wolf!</a>"
q=new K.bJ("6/13/17","In honor of the best troll's birthday, I drew a little chibi of him. If you want to get your hands on the full-size inks, I've posted them as a backers-only post over on our new <a href = 'https://www.patreon.com/FarragoFiction'>Patreon</a>.  You will always be able to see my work here on Farrago Fiction/SBURBSim, but bonus content may get posted there first, or in a higher quality, as a thank-you for those who choose to be our patrons.<br><br><img src = 'images/misc/Karkat_Color.png'>")
if(s)q.b="Who is Shogun??? <div class ='strikethroughStuff'>In honor of the best troll's birthday, I drew a little chibi of him. If you want to get your hands on the full-size inks, I've posted them as a backers-only post over on our new <a href = 'https://www.patreon.com/FarragoFiction'>Patreon</a>.  You will always be able to see my work here on Farrago Fiction/SBURBSim, but bonus content may get posted there first, or in a higher quality, as a thank-you for those who choose to be our patrons.<br><br><img src = 'images/misc/Karkat_Color.png'></a>"
p=new K.bJ("6/08/17","If the AuthorBot gets her own class, then ABjr, should as well, right?  But I'd consider ABjr a Scout rather than a Guide, since she just goes out to find shit then wanders off without explaining anything. And occasionally lurks ominously in the bushes giggling at other people's misfortune. Or something like that. <br><Br><img src='images/authorbot_jr_scout.png'>")
if(s)p.b="Who is Shogun??? <div class ='strikethroughStuff'>If the AuthorBot gets her own class, then ABjr, should as well, right?  But I'd consider ABjr a Scout rather than a Guide, since she just goes out to find shit then wanders off without explaining anything. And occasionally lurks ominously in the bushes giggling at other people's misfortune. Or something like that. <br><Br><img src='images/authorbot_jr_scout.png'></a>"
o=new K.bJ("6/02/17","Sometimes I just make stuff because jR wants it. The AuthorBot has earned a more independent identity, so now we have an official SBURBSim god-tier outfit for the Guide class. Go check out her page if you want to see it. <br><Br>There's also a couple of new secret images, if you can find them!")
if(s)o.b="Who is Shogun??? <div class ='strikethroughStuff'>Sometimes I just make stuff because jR wants it. The AuthorBot has earned a more independent identity, so now we have an official SBURBSim god-tier outfit for the Guide class. Go check out her page if you want to see it. <br><Br>There's also a couple of new secret images, if you can find them!</a>"
n=new K.bJ("5/20/17","I look at a LOT of sessions. Not as many as JR or AB, but still. And a good amount of the time, I'm actually skimming for specific scenes, or just tying to gauge the overall tone of a session. I thought it would be nice to have some graphical indicators of what each scene is about, and break up the text a bit more. So I made a bazillion tiny icons for different types of scenes. Some of them are only ever going to show up in the rarest of sessions, some are omnipresent.<br><Br>A couple are even animated. :wonk:")
if(s)n.b="Who is Shogun??? <div class ='strikethroughStuff'>I look at a LOT of sessions. Not as many as JR or AB, but still. And a good amount of the time, I'm actually skimming for specific scenes, or just tying to gauge the overall tone of a session. I thought it would be nice to have some graphical indicators of what each scene is about, and break up the text a bit more. So I made a bazillion tiny icons for different types of scenes. Some of them are only ever going to show up in the rarest of sessions, some are omnipresent.<br><Br>A couple are even animated. :wonk:</a>"
m=new K.bJ("5/12/17","Booyah - Check this shit out! jR has helped me implement a major visual overhaul for the site. Nifty backgrounds for most pages should be in place. Readability should be improved, and an overall more polished look might even convince people we know what we're doing!")
if(s)m.b="Who is Shogun??? <div class ='strikethroughStuff'>Booyah - Check this shit out! jR has helped me implement a major visual overhaul for the site. Nifty backgrounds for most pages should be in place. Readability should be improved, and an overall more polished look might even convince people we know what we're doing!</a>"
l=new K.bJ("5/5/17","It just so happens that I have a fresh masterpiece for you, hot off the canvas and on to your computer where it will sizzle your eyeballs. Screwing with ghosts now comes with sweet special effects! Also, I am told that the main branch will soon have its header in place.<br><Br>PS: Dreambubbles and the afterlife are now a little less 'pediatrician's waiting room' and a little more 'unfathomable space outside of time.''")
if(s)l.b="Who is Shogun??? <div class ='strikethroughStuff'>It just so happens that I have a fresh masterpiece for you, hot off the canvas and on to your computer where it will sizzle your eyeballs. Screwing with ghosts now comes with sweet special effects! Also, I am told that the main branch will soon have its header in place.<br><Br>PS: Dreambubbles and the afterlife are now a little less 'pediatrician's waiting room' and a little more 'unfathomable space outside of time.''</a>"
k=new K.bJ("4/21/17","Hey, look at that, an official site header! So fancy! That shit is a fucking symphony on my retinas.")
if(s)k.b="Who is Shogun??? <div class ='strikethroughStuff'>Hey, look at that, an official site header! So fancy! That shit is a fucking symphony on my retinas.</a>"
j=new K.bJ("4/17/17","We are up to 60(!!) hairstyles, including all of the canon characters, even if I had to redraw hair for the ones that sucked. That's going to be all the hair for now - I'm going to move on to other items!")
if(s)j.b="Who is Shogun??? <div class ='strikethroughStuff'>We are up to 60(!!) hairstyles, including all of the canon characters, even if I had to redraw hair for the ones that sucked. That's going to be all the hair for now - I'm going to move on to other items!</a>"
i=new K.bJ("4/14/17","<a href ='index2.html?lollipop=true'>TRICKSTER MODE ENGAGE!!!11!</a>")
if(s)i.b="Who is Shogun??? <div class ='strikethroughStuff'><a href ='index2.html?lollipop=true'>TRICKSTER MODE ENGAGE!!!11!</a></a>"
h=new K.bJ("4/13/17","Happy 413! I tried to finish out the hair for all the dancestors, but.... Kurloz. Seriously. His hair is too big to fit on the canvas. For NO REASON. He's not the Grand Highblood yet! I threw it out and made new hair that better reflects his talksprite. Anyway, I should be able to finish the rest soon. Did you know there are more than 50 hairstyles in the system already? Sheesh.")
if(s)h.b="Who is Shogun??? <div class ='strikethroughStuff'>Happy 413! I tried to finish out the hair for all the dancestors, but.... Kurloz. Seriously. His hair is too big to fit on the canvas. For NO REASON. He's not the Grand Highblood yet! I threw it out and made new hair that better reflects his talksprite. Anyway, I should be able to finish the rest soon. Did you know there are more than 50 hairstyles in the system already? Sheesh.</a>"
g=new K.bJ("4/5/17"," Ugh tvros your hair is so ugly<Br>ur head's not even round<Br>look at this bullshit:  <Br> <img src = 'images/tavroshead.png'>")
if(s)g.b="Who is Shogun??? <div class ='strikethroughStuff'> Ugh tvros your hair is so ugly<Br>ur head's not even round<Br>look at this bullshit:  <Br> <img src = 'images/tavroshead.png'></a>"
f=new K.bJ("4/4/17"," Muahahaha! Finally I have finished updating all of the existing sprites for hair and I can start adding new ones.")
if(s)f.b="Who is Shogun??? <div class ='strikethroughStuff'> Muahahaha! Finally I have finished updating all of the existing sprites for hair and I can start adding new ones.</a>"
e=new K.bJ("3/31/17","Spent today chasing down visual bugs and eating them like a hungry baby dragon. Also banging my face against a scaling issue on the babies that was probably my fault in the first place. I standardized the size of all the rest of the images, but not the babies. Because I'm an idiot.<Br><Br>PS: Hyperrealistic grimdark flames are the best idea I've ever had.")
if(s)e.b="Who is Shogun??? <div class ='strikethroughStuff'>Spent today chasing down visual bugs and eating them like a hungry baby dragon. Also banging my face against a scaling issue on the babies that was probably my fault in the first place. I standardized the size of all the rest of the images, but not the babies. Because I'm an idiot.<Br><Br>PS: Hyperrealistic grimdark flames are the best idea I've ever had.</a>"
d=new K.bJ("3/28/17","Here's some proper Dream jammies for all you ungrateful bastards on Reddit.")
if(s)d.b="Who is Shogun??? <div class ='strikethroughStuff'>Here's some proper Dream jammies for all you ungrateful bastards on Reddit.</a>"
c=new K.bJ("3/28/17","Finished fixing up another handful of the worst hairstyles! jR figured out how to get the corrections working in the main branch as well, so you should all be able to see them.")
if(s)c.b="Who is Shogun??? <div class ='strikethroughStuff'>Finished fixing up another handful of the worst hairstyles! jR figured out how to get the corrections working in the main branch as well, so you should all be able to see them.</a>"
b=new K.bJ("3/27/17","Death by stabs now includes a knife in the corpse, courtesy of the <a href='http://www.mspaintadventures.com/?s=6&p=002228'>Midnight Crew</a>.")
if(s)b.b="Who is Shogun??? <div class ='strikethroughStuff'>Death by stabs now includes a knife in the corpse, courtesy of the <a href='http://www.mspaintadventures.com/?s=6&p=002228'>Midnight Crew</a>.</a>"
a=new K.bJ("3/23/17",'There are currently 35 hairstyles. For stupid reasons related to my perfectionism, fixing up the hair sprites takes longer than any other sprite part, even the clothes. The few that are finished to my satisfaction are loaded into the <a href="http://purplefrog.com/~jenny/SburbStoryExperimental/newsposts.html">Experimental</a> branch. Making the images for this page has nothing to do with the delay on those, shut up."')
if(s)a.b='Who is Shogun??? <div class =\'strikethroughStuff\'>There are currently 35 hairstyles. For stupid reasons related to my perfectionism, fixing up the hair sprites takes longer than any other sprite part, even the clothes. The few that are finished to my satisfaction are loaded into the <a href="http://purplefrog.com/~jenny/SburbStoryExperimental/newsposts.html">Experimental</a> branch. Making the images for this page has nothing to do with the delay on those, shut up."</a>'
a0=new K.bJ("3/23/17","Why did I spend several hours drawing blank-faced babies in MS Paint?<p><img src='images/Bodies/baby.png'><p>BECAUSE BABY LEGS DON'T WORK THAT WAY, HUSSIE.<p>ahem.<p>Anyway, I want to show off my baby sprites at full size, so you can marvel at their little toes and stupid fingers.<p><img src='images/Bodies/baby1.png'><br><img src='images/Bodies/baby2.png'><br><img src='images/Bodies/baby3.png'>")
if(s)a0.b="Who is Shogun??? <div class ='strikethroughStuff'>Why did I spend several hours drawing blank-faced babies in MS Paint?<p><img src='images/Bodies/baby.png'><p>BECAUSE BABY LEGS DON'T WORK THAT WAY, HUSSIE.<p>ahem.<p>Anyway, I want to show off my baby sprites at full size, so you can marvel at their little toes and stupid fingers.<p><img src='images/Bodies/baby1.png'><br><img src='images/Bodies/baby2.png'><br><img src='images/Bodies/baby3.png'></a>"
a1=new K.bJ("3/23/17","Cool, I get my own page!")
if(s)a1.b="Who is Shogun??? <div class ='strikethroughStuff'>Cool, I get my own page!</a>"
a2=[new K.bJ("8/5/17","Our newest staff member gets an avatar as well. Arise, Witch of Void!<Br><Br><img src = 'images/paradoxLands.png'>"),t,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1]
for(a3=0;a3<22;++a3){a4=a2[a3]
t=a4.a
a5="<div id = '"+t+"human'><hr> "+("<b>"+t+":</b> ")
t=a4.b
if(t==null)return t.T()
a5+=t+"</div>"
J.rx(document.querySelector("#artist_newsposts"),"beforeend",a5,C.p,null)}},
rm:function rm(){},
kO:function kO(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
i:function(a,b,c,d,e){var t=new A.a4(c,e,null,null,a,!1,P.a5(null,null,null,G.a0),0,3)
t.H(a,b,c,!1,e)
return t},
a4:function a4(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
mu:function mu(){},
mt:function mt(){},
fO:function fO(){},
fS:function(a,b,c,d){var t=new A.e1(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eE(a,b,c,d)
return t},
v1:function(a,b,c,d){var t=A.fS(0,0,0,255)
t.b=C.a.ab(C.d.ai(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ab(C.d.ai(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ab(C.d.ai(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ab(C.d.ai(d*255),0,255)
return t},
yr:function(a,b){if(b){if(typeof a!=="number")return a.aF()
return A.fS((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aF()
return A.fS((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
v2:function(a){return A.yr(H.fm(a,16,new A.r4()),a.length>=8)},
e1:function e1(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
r4:function r4(){},
wf:function(){if($.wd)return
$.wd=!0
Z.yY()},
ex:function(a,b,c,d){var t=0,s=P.bt(),r,q,p,o,n
var $async$ex=P.bz(function(e,f){if(e===1)return P.bw(f,s)
while(true)switch(t){case 0:A.wf()
t=$.$get$cW().Y(0,a)?3:5
break
case 3:q=$.$get$cW().n(0,a)
p=J.ay(q)
if(!!p.$isdQ){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.co(q)
t=1
break}}else throw H.k("Requested resource ("+a+") is an unexpected type: "+H.A(J.uP(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.tM==null?8:9
break
case 8:t=10
return P.cJ(A.mT(),$async$ex)
case 10:case 9:n=$.tM.ej(a)
t=n!=null?11:12
break
case 11:t=13
return P.cJ(A.mO(n),$async$ex)
case 13:if(!$.$get$cW().Y(0,a))$.$get$cW().i(0,a,new Y.dQ(a,null,H.a([],[[P.eZ,,]]),[null]))
r=$.$get$cW().n(0,a).b
t=1
break
case 12:case 7:r=A.Ew(a,!1,d)
t=1
break
case 4:case 1:return P.bx(r,s)}})
return P.by($async$ex,s)},
mT:function(){var t=0,s=P.bt(),r
var $async$mT=P.bz(function(a,b){if(a===1)return P.bw(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cJ(A.ex("manifest/manifest.txt",!1,!0,$.vn),$async$mT)
case 2:r.tM=b
return P.bx(null,s)}})
return P.by($async$mT,s)},
Ev:function(a){if(!$.$get$cW().Y(0,a))$.$get$cW().i(0,a,new Y.dQ(a,null,H.a([],[[P.eZ,,]]),[null]))
return $.$get$cW().n(0,a)},
Ew:function(a,b,c){var t
if($.$get$cW().Y(0,a))throw H.k("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vm(C.b.gb4(a.split("."))).a
t=A.Ev(a)
c.aX(A.wc(a,!1)).aY(new A.mR(t))
return t.co(0)},
mO:function(a){var t=0,s=P.bt(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$mO=P.bz(function(b,a0){if(b===1)return P.bw(a0,s)
while(true)switch(t){case 0:t=3
return P.cJ(A.ex(a+".bundle",!1,!0,null),$async$mO)
case 3:q=a0
p=C.c.K(a,0,C.c.e_(a,$.$get$we()))
o=P.d3
n=new P.dX(new P.bk(0,$.an,null,[o]),[o])
m=H.a([],[P.cD])
for(o=J.xN(q),l=o.length,k=[[P.eZ,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.c1)(o),++i){h=o[i]
g=J.bG(h)
f=Z.vm(C.b.gb4(J.eS(g.gG(h),"."))).a
e=p+"/"+H.A(g.gG(h))
if($.$get$cW().Y(0,e)){m.push(A.ex(e,!1,!1,null))
continue}d=H.kh(g.gba(h),"$isd8")
if(!$.$get$cW().Y(0,e))$.$get$cW().i(0,e,new Y.dQ(e,null,H.a([],k),j))
c=$.$get$cW().n(0,e)
m.push(c.co(0))
f.b3(d.buffer).aY(new A.mP(f,c))}P.z7(m,null,!1).aY(new A.mQ(n))
r=n.a
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$mO,s)},
hr:function(a,b){var t=0,s=P.bt(),r,q,p,o,n
var $async$hr=P.bz(function(c,d){if(c===1)return P.bw(d,s)
while(true)switch(t){case 0:if($.$get$tL().Y(0,a)){r=$.$get$tL().n(0,a)
t=1
break}q=W.fp
p=new P.bk(0,$.an,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.eO(n,"load",new A.mS(new P.dX(p,[q]),n),!1,W.R)
n.src=A.wc(a,!1)
r=p
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$hr,s)},
wc:function(a,b){if(C.c.ad(a,"/")){a=C.c.ae(a,1)
b=!0}else b=!1
if(b)return H.A(window.location.protocol)+"//"+H.A(window.location.host)+"/"+a
return C.c.aq("../",N.u_())+a},
mR:function mR(a){this.a=a},
mP:function mP(a,b){this.a=a
this.b=b},
mQ:function mQ(a){this.a=a},
mS:function mS(a,b){this.a=a
this.b=b},
ns:function ns(){},
jz:function jz(){},
jD:function jD(a,b){this.a=a
this.b=b},
ra:function(){var t=0,s=P.bt(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ra=P.bz(function(a0,a1){if(a0===1)return P.bw(a1,s)
while(true)switch(t){case 0:if($.xp){t=1
break}$.xp=!0
D.FN()
q=P.B
p=[q]
o=H.a(["metal"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,0.3)
$.$get$c().h(0,o)
$.D=o
o=H.a(["dutton"],p)
n=$.a9
H.a([],p)
o=new G.bI(null,n,o,0.6)
$.$get$c().h(0,o)
$.vF=o
o=H.a(["ceramic"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.bS=o
o=H.a(["bone"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,0.2)
$.$get$c().h(0,o)
$.aX=o
o=H.a(["wood"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.X=o
o=H.a(["plastic"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.aE=o
o=H.a(["rubber"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.cb=o
o=H.a(["paper"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.K=o
o=H.a(["cloth","fabric"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.O=o
o=H.a(["glass"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.aO=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.bW=o
o=H.a(["flesh","meat","muscle"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.1)
$.$get$c().h(0,o)
$.bi=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.G
H.a([],p)
o=new G.bI(null,n,o,3.1)
$.$get$c().h(0,o)
$.bm=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.1)
$.$get$c().h(0,o)
$.cg=o
o=H.a(["plant","leaf","vine"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.1)
$.$get$c().h(0,o)
$.aQ=o
o=H.a(["feathery"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.1)
$.$get$c().h(0,o)
$.bp=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.I
H.a([],p)
o=new G.bI(null,n,o,0.1)
$.$get$c().h(0,o)
$.bY=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.I
H.a([],p)
o=new G.bI(null,n,o,-13)
$.$get$c().h(0,o)
$.bT=o
o=H.a(["stone","rock","concrete"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,0.3)
$.$get$c().h(0,o)
$.at=o
o=H.a(["legendary"],p)
n=$.ms
H.a([],p)
o=new G.bI(null,n,o,13)
$.$get$c().h(0,o)
$.a_=o
o=H.a(["Unbeatable"],p)
n=$.ms
H.a([],p)
o=new G.bI(null,n,o,40.37)
$.$get$c().h(0,o)
$.Ea=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.ar=o
o=$.tw
H.a([],p)
o=new G.aJ(null,o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.aP=o
o=$.tw
H.a([],p)
o=new G.aJ(null,o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.ak=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bh=o
o=$.G
H.a([],p)
o=new G.aJ(null,o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.c5=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.aW=o
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
$.bn=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a7=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.aV=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bd=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.ao=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.ah=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.am=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.Y=o
o=$.G
H.a([],p)
o=new G.aJ(null,o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.as=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.az=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.aT=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bo=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a1=o
o=$.ms
H.a([],p)
o=new G.aJ(null,o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.S=o
o=$.ms
H.a([],p)
o=new G.aJ(null,o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.T=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.av=o
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
$.aY=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bP=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bl=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.ca=o
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
$.a8=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aU=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aN=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.bj=o
o=H.a(["perfectly generic"],p)
n=$.I
H.a([],p)
o=new G.ad(null,n,o,0.1)
$.$get$c().h(0,o)
$.vI=o
o=H.a(["a sword"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.er=o
o=H.a(["a hammer"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.ml=o
o=H.a(["a rifle"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tr=o
o=H.a(["a pistol"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tl=o
o=H.a(["a blade"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vy=o
o=H.a(["a dagger"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tb=o
o=H.a(["a santa"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.hk=o
o=H.a(["a fist"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vG=o
o=H.a(["claws"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.mj=o
o=H.a(["a grenade"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.mk=o
o=H.a(["a freaking safe"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vY=o
o=H.a(["a ball"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.fc=o
o=H.a(["a trident"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w4=o
o=H.a(["a card"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.mi=o
o=H.a(["a frying pan"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.te=o
o=H.a(["a pillow"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.hj=o
o=H.a(["a machinegun"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.th=o
o=H.a(["a shuriken"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w1=o
o=H.a(["a sling"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w3=o
o=H.a(["a yoyo"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w6=o
o=H.a(["a cane"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vA=o
o=H.a(["a shield"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.fe=o
o=H.a(["a lance"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vR=o
o=H.a(["a ax"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.t7=o
o=H.a(["a sign"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vW=o
o=H.a(["a book"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.aC=o
o=H.a(["a broom"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.jg=o
o=H.a(["a club"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.ji=o
o=H.a(["a bow"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.t8=o
o=H.a(["a whip"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w5=o
o=H.a(["a staff"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tt=o
o=H.a(["a needle"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tj=o
o=H.a(["dice"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tc=o
o=H.a(["a fork"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vH=o
o=H.a(["a pigeon???"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,1.3)
$.$get$c().h(0,o)
$.tk=o
o=H.a(["a chainsaw"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vB=o
o=H.a(["a sickle"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w2=o
o=H.a(["a shotgun"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w_=o
o=H.a(["a stick"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.dN=o
o=H.a(["a chain"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.eq=o
o=H.a(["a wrench"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tu=o
o=H.a(["a shovel"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w0=o
o=H.a(["a rolling pin"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.ts=o
o=H.a(["a puppet"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tp=o
o=H.a(["a razor"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tq=o
o=H.a(["a pen"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.mo=o
o=H.a(["a bust"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.jh=o
o=H.a(["a bowling ball"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.zN=o
o=H.a(["a golf club"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vK=o
o=H.a(["a knife"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vQ=o
o=H.a(["scissors"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vZ=o
o=H.a(["a pizza cutter"],p)
n=$.a2
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tm=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.G
m=G.a0
l=[m]
k=H.a([$.D,$.ar,$.aL],l)
H.a([],p)
o=new G.d("Forged",k,null,n,o,0)
$.$get$c().h(0,o)
$.B6=o
o=H.a([],p)
n=$.u
k=H.a([$.ag,$.ar],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.AC=o
o=H.a(["fossilized"],p)
n=$.G
k=H.a([$.aX,$.at],l)
H.a([],p)
o=new G.d("Fossilized",k,null,n,o,0)
$.$get$c().h(0,o)
$.B7=o
o=H.a(["adamantium"],p)
n=$.G
k=H.a([$.aX,$.D],l)
H.a([],p)
o=new G.d("Adamantium",k,null,n,o,0)
$.$get$c().h(0,o)
$.vw=o
o=H.a([],p)
n=$.u
k=H.a([$.aY,$.aF],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["tatami"],p)
n=$.u
k=H.a([$.O,$.X],l)
H.a([],p)
o=new G.d("Tatami",k,null,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["mesh","chain link"],p)
n=$.u
k=H.a([$.O,$.D],l)
H.a([],p)
o=new G.d("Mesh",k,null,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["foil"],p)
n=$.u
k=H.a([$.K,$.D],l)
H.a([],p)
o=new G.d("Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.B2=o
o=H.a(["beanbag"],p)
n=$.u
k=H.a([$.O,$.at],l)
H.a([],p)
o=new G.d("Beanbag",k,null,n,o,0)
$.$get$c().h(0,o)
$.zH=o
o=H.a(["pleather","faux fur"],p)
n=$.u
k=H.a([$.cg,$.aE],l)
H.a([],p)
o=new G.d("Faux Fur",k,null,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["plywood"],p)
n=$.u
k=H.a([$.X,$.K],l)
H.a([],p)
o=new G.d("Plywood",k,null,n,o,0)
$.$get$c().h(0,o)
$.tn=o
o=H.a(["colossus"],p)
n=$.u
k=H.a([$.D,$.bi],l)
H.a([],p)
o=new G.d("Colossus",k,null,n,o,0)
$.$get$c().h(0,o)
$.vC=o
o=H.a(["rotting","zombie"],p)
n=$.G
k=H.a([$.bY,$.bi],l)
H.a([],p)
o=new G.d("Rotting",k,null,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["draugr","white walker"],p)
n=$.G
k=H.a([$.bY,$.bi,$.bl],l)
H.a([],p)
o=new G.d("Draugr",k,null,n,o,0)
$.$get$c().h(0,o)
$.Az=o
o=H.a(["Ultraviolet"],p)
n=$.tv
k=H.a([$.aP,$.ak],l)
H.a([],p)
o=new G.d("Ultraviolet",k,null,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.aP,$.ak,$.ar],l)
H.a([],p)
o=new G.d("Ultraviolence",k,null,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a([],p)
n=$.q
k=H.a([$.aD,$.bX],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ax=o
o=H.a(["candy"],p)
n=$.u
k=H.a([$.ao,$.aO],l)
H.a([],p)
o=new G.d("Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.t9=o
o=H.a(["cotton candy"],p)
n=$.u
k=H.a([$.ao,$.O],l)
H.a([],p)
o=new G.d("Cotton Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ai=o
o=H.a(["gummy"],p)
n=$.u
k=H.a([$.ao,$.cb],l)
H.a([],p)
o=new G.d("Gum",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["marrow"],p)
n=$.u
k=H.a([$.ao,$.aX],l)
H.a([],p)
o=new G.d("Marrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["toothy"],p)
n=$.a2
k=H.a([$.aX,$.bS],l)
H.a([],p)
o=new G.d("Toothy",k,null,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["Frost"],p)
n=$.u
k=H.a([$.at,$.aO,$.bi],l)
H.a([],p)
o=new G.d("Frost",k,null,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.ao,$.bP],l)
H.a([],p)
o=new G.d("Arsenic",k,null,n,o,0)
$.$get$c().h(0,o)
$.AH=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.u
k=H.a([$.at,$.aO],l)
H.a([],p)
o=new G.d("Crystal",k,null,n,o,0)
$.$get$c().h(0,o)
$.ta=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.I
k=H.a([$.av,$.az,$.aT,$.Y,$.ah,$.bX,$.a1],l)
H.a([],p)
o=new G.d("Mary Sue",k,null,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.I
k=H.a([$.aW,$.ak,$.ar,$.a_,$.aD,$.Y,$.ah,$.am],l)
H.a([],p)
o=new G.d("Edge Lord",k,null,n,o,0)
$.$get$c().h(0,o)
$.AF=o
o=H.a(["deadpool"],p)
n=$.a2
k=H.a([$.bY,$.aI,$.am,$.aT],l)
H.a([],p)
o=new G.d("Deadpool",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ao=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.I
k=H.a([$.aW,$.am],l)
H.a([],p)
o=new G.d("Spoopy",k,null,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["wolverine"],p)
n=$.a2
k=H.a([$.aX,$.ar,$.aL],l)
H.a([],p)
o=new G.d("Wolverine",k,null,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["rabbit's foot"],p)
n=$.a2
k=H.a([$.bX,$.cg],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,null,n,o,0)
$.$get$c().h(0,o)
$.vV=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.G
k=H.a([$.aL,$.X],l)
H.a([],p)
o=new G.d("Tipped",k,null,n,o,0)
$.$get$c().h(0,o)
$.zA=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a2
k=H.a([$.aL,$.aK,$.X],l)
H.a([],p)
o=new G.d("Arrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.vx=o
o=H.a(["training sword","bokken"],p)
n=$.a2
k=H.a([$.X,$.ar],l)
H.a([],p)
o=new G.d("Bokken",k,null,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aN,$.am],l)
H.a([],p)
o=new G.d("Irony Type1",k,null,n,o,0)
$.$get$c().h(0,o)
$.mm=o
o=H.a(["netted","webbed"],p)
n=$.a2
k=H.a([$.aV,$.O],l)
H.a([],p)
o=new G.d("Netted",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["barbed wire"],p)
n=$.a2
k=H.a([$.aL,$.aV,$.D,$.O],l)
H.a([],p)
o=new G.d("Barbed Wire",k,null,n,o,0)
$.$get$c().h(0,o)
$.zE=o
o=H.a(["morning star"],p)
n=$.a2
k=H.a([$.aL,$.ag],l)
H.a([],p)
o=new G.d("Morning Star",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["decadent"],p)
n=$.I
k=H.a([$.aY,$.bd],l)
H.a([],p)
o=new G.d("Decadent",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ar=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bT,$.am],l)
H.a([],p)
o=new G.d("SBAHJ",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["bayonet"],p)
n=$.a2
k=H.a([$.aL,$.aK],l)
H.a([],p)
o=new G.d("Bayonet",k,null,n,o,0)
$.$get$c().h(0,o)
$.zG=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.u
k=H.a([$.bl,$.am,$.ar],l)
H.a([],p)
o=new G.d("Snoop",k,null,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.aP,$.ap,$.ar],l)
H.a([],p)
o=new G.d("Light Saber",k,null,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.I
k=H.a([$.a1,$.aN],l)
H.a([],p)
o=new G.d("Fakey Fake",k,null,n,o,0)
$.$get$c().h(0,o)
$.AO=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.I
k=H.a([$.a1,$.bj],l)
H.a([],p)
o=new G.d("Real As Shit",k,null,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["skeletal"],p)
n=$.a2
k=H.a([$.aW,$.aD,$.aX],l)
H.a([],p)
o=new G.d("Skeletal",k,null,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["green sun"],p)
n=$.tw
k=H.a([$.ap,$.c5,$.aP],l)
H.a([],p)
o=new G.d("Green Sun",k,null,n,o,0)
$.$get$c().h(0,o)
$.tg=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tv
k=H.a([$.ak,$.ah],l)
H.a([],p)
o=new G.d("Midnight",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["radiant","dazzling"],p)
n=$.I
k=H.a([$.a1,$.aP],l)
H.a([],p)
o=new G.d("Radiant",k,null,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["edgy"],p)
n=$.I
k=H.a([$.ar,$.ak,$.am],l)
H.a([],p)
o=new G.d("Edgy",k,null,n,o,0)
$.$get$c().h(0,o)
$.AG=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c5,$.bn],l)
H.a([],p)
o=new G.d("Warhead",k,null,n,o,0)
$.$get$c().h(0,o)
$.zt=o
o=H.a(["living"],p)
n=$.G
k=H.a([$.aX,$.bi,$.as],l)
H.a([],p)
o=new G.d("Living",k,null,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["dead","corpse","deceased"],p)
n=$.G
k=H.a([$.aX,$.bi],l)
H.a([],p)
o=new G.d("Dead",k,null,n,o,0)
$.$get$c().h(0,o)
$.An=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a7,$.aV,$.aK],l)
H.a([],p)
o=new G.d("Taser",k,null,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.ak,$.a8],l)
H.a([],p)
o=new G.d("Nocturn",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aD,$.a8],l)
H.a([],p)
o=new G.d("Dirge",k,null,n,o,0)
$.$get$c().h(0,o)
$.Au=o
o=H.a(["Snobbish","Noble"],p)
n=$.I
k=H.a([$.ah,$.bd],l)
H.a([],p)
o=new G.d("Snobbish",k,null,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["flat"],p)
n=$.I
k=H.a([$.ag,$.a8],l)
H.a([],p)
o=new G.d("Flat(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.AY=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.ar,$.a8],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.ah,$.a8],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,null,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["Bach's"],p)
n=$.a9
k=H.a([$.Y,$.a8],l)
H.a([],p)
o=new G.d("Bach's",k,null,n,o,0)
$.$get$c().h(0,o)
$.zC=o
o=H.a(["Mozart's"],p)
n=$.a9
k=H.a([$.a1,$.a8],l)
H.a([],p)
o=new G.d("Mozart's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.a9
k=H.a([$.Y,$.c5],l)
H.a([],p)
o=new G.d("Einstein's",k,null,n,o,0)
$.$get$c().h(0,o)
$.AI=o
o=H.a(["Feynman's"],p)
n=$.a9
k=H.a([$.Y,$.aT],l)
H.a([],p)
o=new G.d("Feynman's",k,null,n,o,0)
$.$get$c().h(0,o)
$.AS=o
o=H.a(["Ziptie"],p)
n=$.a9
k=H.a([$.aE,$.aV],l)
H.a([],p)
o=new G.d("Ziptie",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.D,$.Y],l)
H.a([],p)
o=new G.d("Mobile",k,null,n,o,0)
$.$get$c().h(0,o)
$.mq=o
o=H.a(["Sassacre"],p)
n=$.a9
k=H.a([$.ca,$.aT],l)
H.a([],p)
o=new G.d("Sassacre",k,null,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ag,$.ca],l)
H.a([],p)
o=new G.d("Sledge",k,null,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.aV,$.K],l)
H.a([],p)
o=new G.d("Legal",k,null,n,o,0)
$.$get$c().h(0,o)
$.mn=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.aT,$.aU],l)
H.a([],p)
o=new G.d("Clown",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ac=o
o=H.a(["passionate"],p)
n=$.I
k=H.a([$.ap,$.az],l)
H.a([],p)
o=new G.d("Passionate",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["pinata"],p)
n=$.a2
k=H.a([$.K,$.ao],l)
H.a([],p)
o=new G.d("Pinata",k,null,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ag,$.ca,$.D],l)
H.a([],p)
o=new G.d("Anvil",k,null,n,o,0)
$.$get$c().h(0,o)
$.zz=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.aP,$.bn],l)
H.a([],p)
o=new G.d("Flashbang",k,null,n,o,0)
$.$get$c().h(0,o)
$.AX=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.ak,$.bn],l)
H.a([],p)
o=new G.d("Smokebomb",k,null,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.ak,$.ar],l)
H.a([],p)
o=new G.d("Ninja",k,null,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a7,$.a8],l)
H.a([],p)
o=new G.d("Techno",k,null,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.at,$.a8],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,null,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a2
k=H.a([$.as,$.bi,$.aK],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,null,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.aT,$.a8,$.aU,$.aW],l)
H.a([],p)
o=new G.d("Juggalo",k,null,n,o,0)
$.$get$c().h(0,o)
$.vP=o
o=H.a(["shocksauce"],p)
n=$.I
k=H.a([$.am,$.a7],l)
H.a([],p)
o=new G.d("Shock Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["weaksauce"],p)
n=$.I
k=H.a([$.ag,$.am,$.bT],l)
H.a([],p)
o=new G.d("Weak Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["spicy","picante"],p)
n=$.I
k=H.a([$.ap,$.ao],l)
H.a([],p)
o=new G.d("Spicy",k,null,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["ice cream","popsicle"],p)
n=$.u
k=H.a([$.bl,$.ao],l)
H.a([],p)
o=new G.d("Popsicle",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["popsickle"],p)
n=$.u
k=H.a([$.bl,$.ao,$.ar],l)
H.a([],p)
o=new G.d("Popsickle",k,null,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["icepick"],p)
n=$.u
k=H.a([$.bl,$.aL],l)
H.a([],p)
o=new G.d("Icepick",k,null,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["schezwan"],p)
n=$.I
k=H.a([$.am,$.ao],l)
H.a([],p)
o=new G.d("Schezwan",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.ak,$.a8,$.am,$.a7],l)
H.a([],p)
o=new G.d("Vaporwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["mallet"],p)
n=$.a2
k=H.a([$.X,$.ag],l)
H.a([],p)
o=new G.d("Mallet",k,null,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aE,$.am],l)
H.a([],p)
o=new G.d("Fidget",k,null,n,o,0)
$.$get$c().h(0,o)
$.AU=o
o=H.a(["gold foil"],p)
n=$.u
k=H.a([$.D,$.K,$.bd],l)
H.a([],p)
o=new G.d("Gold Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["caviar"],p)
n=$.u
k=H.a([$.ao,$.bd],l)
H.a([],p)
o=new G.d("Caviar",k,null,n,o,0)
$.$get$c().h(0,o)
$.A2=o
o=H.a(["RADioactive"],p)
n=$.I
k=H.a([$.c5,$.am],l)
H.a([],p)
o=new G.d("RADioactive",k,null,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["glam"],p)
n=$.I
k=H.a([$.at,$.a8,$.av],l)
H.a([],p)
o=new G.d("Glam",k,null,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["hair metal"],p)
n=$.I
k=H.a([$.D,$.a8,$.av],l)
H.a([],p)
o=new G.d("Hair Metal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["elven","fae","sylvan"],p)
n=$.I
k=H.a([$.a1,$.av],l)
H.a([],p)
o=new G.d("Elven",k,null,n,o,0)
$.$get$c().h(0,o)
$.AK=o
o=H.a(["shiny"],p)
n=$.I
k=H.a([$.D,$.av],l)
H.a([],p)
o=new G.d("Shiny",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.I
k=H.a([$.bd,$.av,$.ah],l)
H.a([],p)
o=new G.d("Bespoke",k,null,n,o,0)
$.$get$c().h(0,o)
$.fd=o
o=H.a(["operatic"],p)
n=$.I
k=H.a([$.bd,$.a8,$.ah],l)
H.a([],p)
o=new G.d("Operatic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["ice","diamond"],p)
n=$.u
k=H.a([$.bd,$.bl],l)
H.a([],p)
o=new G.d("Diamond",k,null,n,o,0)
$.$get$c().h(0,o)
$.vN=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.I
k=H.a([$.ap,$.bl],l)
H.a([],p)
o=new G.d("Icy Hot",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.I
k=H.a([$.am,$.bl],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["winter's","season's"],p)
n=$.a9
k=H.a([$.bh,$.bl],l)
H.a([],p)
o=new G.d("Winter's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.a9
k=H.a([$.a1,$.bl],l)
H.a([],p)
o=new G.d("Christmas",k,null,n,o,0)
$.$get$c().h(0,o)
$.A8=o
o=H.a(["Santa Saws"],p)
n=$.a9
k=H.a([$.a1,$.bl,$.ar],l)
H.a([],p)
o=new G.d("Santa Saws",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["Santa Sleighs"],p)
n=$.a9
k=H.a([$.hk,$.ar],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,null,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["Santa Claws"],p)
n=$.a9
k=H.a([$.hk,$.mj],l)
H.a([],p)
o=new G.d("Santa Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["Sandy Claws"],p)
n=$.a9
k=H.a([$.hk,$.mj,$.at],l)
H.a([],p)
o=new G.d("Sandy Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["Silent Night"],p)
n=$.a9
k=H.a([$.hk,$.ak],l)
H.a([],p)
o=new G.d("Silent Night",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.a9
k=H.a([$.aW,$.bW],l)
H.a([],p)
o=new G.d("Ghost's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["ghoul","mutant"],p)
n=$.u
k=H.a([$.bi,$.c5,$.bY],l)
H.a([],p)
o=new G.d("Mutant",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.am,$.D],l)
H.a([],p)
o=new G.d("Skateboard",k,null,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c5,$.a7,$.ao],l)
H.a([],p)
o=new G.d("Microwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c5,$.a7,$.ao,$.aK],l)
H.a([],p)
o=new G.d("Orbital",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a([],p)
n=$.q
k=H.a([$.ag,$.Y],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.AD=o
o=H.a(["uranium"],p)
n=$.u
k=H.a([$.c5,$.at],l)
H.a([],p)
o=new G.d("Uranium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.K,$.cb],l)
H.a([],p)
o=new G.d("Mousepad",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["flint"],p)
n=$.u
k=H.a([$.ar,$.at],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.B_=o
o=H.a(["flint"],p)
n=$.u
k=H.a([$.aL,$.at],l)
H.a([],p)
o=new G.d("Pointed Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.B0=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aE,$.aL],l)
H.a([],p)
o=new G.d("Picnic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["xtreme xplosion"],p)
n=$.I
k=H.a([$.am,$.bn],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aE,$.aY],l)
H.a([],p)
o=new G.d("Lawn",k,null,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["upholstered"],p)
n=$.u
k=H.a([$.O,$.aY],l)
H.a([],p)
o=new G.d("Upholstered",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["leather"],p)
n=$.u
k=H.a([$.bi,$.aY],l)
H.a([],p)
o=new G.d("Leather",k,null,n,o,0)
$.$get$c().h(0,o)
$.vT=o
o=H.a(["shag"],p)
n=$.u
k=H.a([$.cg,$.aY],l)
H.a([],p)
o=new G.d("Shag",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["loyal"],p)
n=$.I
k=H.a([$.ag,$.az],l)
H.a([],p)
o=new G.d("Loyal",k,null,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["porcelain"],p)
n=$.u
k=H.a([$.av,$.bS],l)
H.a([],p)
o=new G.d("Porcelain",k,null,n,o,0)
$.$get$c().h(0,o)
$.to=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a2
k=H.a([$.bd,$.bS],l)
H.a([],p)
o=new G.d("Pork Hollow",k,null,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.am,$.ar],l)
H.a([],p)
o=new G.d("Katana",k,null,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["chocolate"],p)
n=$.u
k=H.a([$.az,$.ao],l)
H.a([],p)
o=new G.d("Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.A7=o
o=H.a(["wrapped chocolate"],p)
n=$.u
k=H.a([$.az,$.ao,$.K,$.D],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.B3=o
o=H.a(["scratch-n-sniff"],p)
n=$.u
k=H.a([$.am,$.K],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["mythril","orichalcum"],p)
n=$.u
k=H.a([$.a1,$.D],l)
H.a([],p)
o=new G.d("Mythril",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["titanium","steel"],p)
n=$.u
k=H.a([$.ag,$.D],l)
H.a([],p)
o=new G.d("Titanium",k,null,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["lead"],p)
n=$.u
k=H.a([$.ca,$.D],l)
H.a([],p)
o=new G.d("Lead",k,null,n,o,0)
$.$get$c().h(0,o)
$.vS=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aN,$.aT],l)
H.a([],p)
o=new G.d("Satire",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["comedy gold"],p)
n=$.I
k=H.a([$.bd,$.aT],l)
H.a([],p)
o=new G.d("Comedy Gold",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ae=o
o=H.a(["dry","sensible chuckle"],p)
n=$.I
k=H.a([$.ah,$.aT],l)
H.a([],p)
o=new G.d("Dry",k,null,n,o,0)
$.$get$c().h(0,o)
$.AA=o
o=H.a(["polite"],p)
n=$.I
k=H.a([$.aY,$.aN],l)
H.a([],p)
o=new G.d("Polite",k,null,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["stradivarius"],p)
n=$.a9
k=H.a([$.ah,$.bd,$.X,$.a8],l)
H.a([],p)
o=new G.d("Stradivarius",k,null,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["scientistic"],p)
n=$.I
k=H.a([$.Y,$.aN],l)
H.a([],p)
o=new G.d("Scientistic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a7,$.as],l)
H.a([],p)
o=new G.d("AI",k,null,n,o,0)
$.$get$c().h(0,o)
$.t6=o
o=H.a(["robotic"],p)
n=$.G
k=H.a([$.D,$.a7,$.as],l)
H.a([],p)
o=new G.d("Robotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.vX=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.X,$.bn],l)
H.a([],p)
o=new G.d("Shrapnel",k,null,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.as,$.a7,$.a8],l)
H.a([],p)
o=new G.d("Vocaloid",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["*Hyun-ae"],p)
n=$.a9
k=H.a([$.as,$.a7,$.az],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.X,$.aK],l)
H.a([],p)
o=new G.d("Buckshot",k,null,n,o,0)
$.$get$c().h(0,o)
$.zR=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.ca,$.aK],l)
H.a([],p)
o=new G.d("Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.A_=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.ah,$.K],l)
H.a([],p)
o=new G.d("Stationary",k,null,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a([],p)
n=$.q
k=H.a([$.aC,$.K],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a([],p)
n=$.q
k=H.a([$.D,$.aK],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.ar,$.K],l)
H.a([],p)
o=new G.d("Papercut",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["squeaky"],p)
n=$.G
k=H.a([$.ag,$.cb],l)
H.a([],p)
o=new G.d("Squeaky",k,null,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aN,$.a8],l)
H.a([],p)
o=new G.d("Kazoo",k,null,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aI,$.K],l)
H.a([],p)
o=new G.d("Bandaid",k,null,n,o,0)
$.$get$c().h(0,o)
$.zD=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aI,$.ao],l)
H.a([],p)
o=new G.d("Gushers",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aI,$.aK],l)
H.a([],p)
o=new G.d("Medic",k,null,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["sick nasty","ill"],p)
n=$.G
k=H.a([$.am,$.bP],l)
H.a([],p)
o=new G.d("Sick Nasty",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["gilded","gold leaf"],p)
n=$.u
k=H.a([$.D,$.X],l)
H.a([],p)
o=new G.d("Gilded",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aE,$.a7],l)
H.a([],p)
o=new G.d("Charging",k,null,n,o,0)
$.$get$c().h(0,o)
$.A6=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.cb,$.ar],l)
H.a([],p)
o=new G.d("Rubber Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aE,$.ar],l)
H.a([],p)
o=new G.d("Plastic Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["thunderous","thor's"],p)
n=$.I
k=H.a([$.aU,$.a7],l)
H.a([],p)
o=new G.d("Thunderous",k,null,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["screeching","dial up"],p)
n=$.I
k=H.a([$.aU,$.a7,$.Y],l)
H.a([],p)
o=new G.d("Screeching",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.aO,$.D],l)
H.a([],p)
o=new G.d("Mirrored",k,null,n,o,0)
$.$get$c().h(0,o)
$.ti=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.aO,$.at,$.a1],l)
H.a([],p)
o=new G.d("Far Seeing",k,null,n,o,0)
$.$get$c().h(0,o)
$.vD=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.cb,$.aK],l)
H.a([],p)
o=new G.d("Nonlethal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Av=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.av,$.ah],l)
H.a([],p)
o=new G.d("Fashionable",k,null,n,o,0)
$.$get$c().h(0,o)
$.td=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aT,$.am],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,null,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.bT,$.aT],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,null,n,o,0)
$.$get$c().h(0,o)
$.vO=o
o=H.a(["post-ironic"],p)
n=$.I
k=H.a([$.aN,$.am,$.ah],l)
H.a([],p)
o=new G.d("Post Ironic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["monstrous"],p)
n=$.I
k=H.a([$.bY,$.aU,$.aW],l)
H.a([],p)
o=new G.d("Monstrous",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aK,$.am,$.ah],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,null,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["golden"],p)
n=$.u
k=H.a([$.D,$.bd],l)
H.a([],p)
o=new G.d("Golden",k,null,n,o,0)
$.$get$c().h(0,o)
$.tf=o
o=H.a(["platinum"],p)
n=$.u
k=H.a([$.aP,$.D],l)
H.a([],p)
o=new G.d("Platinum",k,null,n,o,0)
$.$get$c().h(0,o)
$.mp=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bX,$.D],l)
H.a([],p)
o=new G.d("Horseshoe",k,null,n,o,0)
$.$get$c().h(0,o)
$.vM=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.O,$.cg],l)
H.a([],p)
o=new G.d("Felt",k,null,n,o,0)
$.$get$c().h(0,o)
$.AQ=o
o=H.a(["marble"],p)
n=$.u
k=H.a([$.at,$.ah],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.vU=o
o=H.a(["marble"],p)
n=$.u
k=H.a([$.at,$.ca],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["glitched"],p)
n=$.G
k=H.a([$.bm,$.a7],l)
H.a([],p)
o=new G.d("Glitched",k,null,n,o,0)
$.$get$c().h(0,o)
$.vJ=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aI,$.a7],l)
H.a([],p)
o=new G.d("Debugging",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aq=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.D,$.aU,$.a8],l)
H.a([],p)
o=new G.d("Metalic",k,null,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["Simulacrum"],p)
n=$.I
k=H.a([$.as,$.aN],l)
H.a([],p)
o=new G.d("Simulacrum",k,null,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.ao,$.aN],l)
H.a([],p)
o=new G.d("Imitation",k,null,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aI,$.aN],l)
H.a([],p)
o=new G.d("Placebo",k,null,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bd,$.aN],l)
H.a([],p)
o=new G.d("Counterfeit",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aj=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.am,$.aF,$.aT],l)
H.a([],p)
o=new G.d("Surreal1",k,null,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["Brainy"],p)
n=$.I
k=H.a([$.Y,$.bi],l)
H.a([],p)
o=new G.d("Brainy",k,null,n,o,0)
$.$get$c().h(0,o)
$.zO=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.ap,$.bn],l)
H.a([],p)
o=new G.d("Incendiary",k,null,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["C-4"],p)
n=$.u
k=H.a([$.bn,$.aE],l)
H.a([],p)
o=new G.d("C-4",k,null,n,o,0)
$.$get$c().h(0,o)
$.zV=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a1,$.aP,$.bm],l)
H.a([],p)
o=new G.d("Fae",k,null,n,o,0)
$.$get$c().h(0,o)
$.AN=o
o=H.a(["Plutonium"],p)
n=$.u
k=H.a([$.D,$.c5],l)
H.a([],p)
o=new G.d("Plutonium",k,null,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["Lithium"],p)
n=$.u
k=H.a([$.D,$.a7],l)
H.a([],p)
o=new G.d("Lithium",k,null,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["Molten"],p)
n=$.u
k=H.a([$.D,$.ap],l)
H.a([],p)
o=new G.d("Molten",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.u
k=H.a([$.at,$.ap],l)
H.a([],p)
o=new G.d("Magma",k,null,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["Rusty"],p)
n=$.G
k=H.a([$.D,$.bT],l)
H.a([],p)
o=new G.d("Rusty",k,null,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.ar,$.am,$.ah],l)
H.a([],p)
o=new G.d("Fonzie",k,null,n,o,0)
$.$get$c().h(0,o)
$.B4=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.az,$.aT],l)
H.a([],p)
o=new G.d("Romcom",k,null,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.av,$.aP],l)
H.a([],p)
o=new G.d("Alluring",k,null,n,o,0)
$.$get$c().h(0,o)
$.zw=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.av,$.ak],l)
H.a([],p)
o=new G.d("Masquerade",k,null,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.at,$.bi],l)
H.a([],p)
o=new G.d("Stoneskin",k,null,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a1,$.Y],l)
H.a([],p)
o=new G.d("Psionic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a1,$.at],l)
H.a([],p)
o=new G.d("Dwarven",k,null,n,o,0)
$.$get$c().h(0,o)
$.AE=o
o=H.a(["Elemental","Animated"],p)
n=$.u
k=H.a([$.a1,$.as],l)
H.a([],p)
o=new G.d("Elemental",k,null,n,o,0)
$.$get$c().h(0,o)
$.AJ=o
o=H.a(["Gourmet"],p)
n=$.I
k=H.a([$.ao,$.ah],l)
H.a([],p)
o=new G.d("Gourmet",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["Stained Glass"],p)
n=$.u
k=H.a([$.aO,$.av,$.bd],l)
H.a([],p)
o=new G.d("Stained Glass",k,null,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aI,$.O],l)
H.a([],p)
o=new G.d("Gauze",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["Locked"],p)
n=$.G
k=H.a([$.aV,$.bo],l)
H.a([],p)
o=new G.d("Locked",k,null,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.at,$.K],l)
H.a([],p)
o=new G.d("Etched",k,null,n,o,0)
$.$get$c().h(0,o)
$.AM=o
o=H.a(["Papyrus"],p)
n=$.u
k=H.a([$.K,$.aQ],l)
H.a([],p)
o=new G.d("Papyrus",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.K,$.aE],l)
H.a([],p)
o=new G.d("Film",k,null,n,o,0)
$.$get$c().h(0,o)
$.AV=o
o=H.a(["Saucey"],p)
n=$.u
k=H.a([$.bm,$.bo,$.ao],l)
H.a([],p)
o=new G.d("Saucey",k,null,n,o,0)
$.$get$c().h(0,o)
$.jj=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.K,$.bX],l)
H.a([],p)
o=new G.d("Lottery",k,null,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.ak,$.O],l)
H.a([],p)
o=new G.d("Blindfolded",k,null,n,o,0)
$.$get$c().h(0,o)
$.vz=o
o=H.a(["Possessed"],p)
n=$.G
k=H.a([$.bW,$.bi],l)
H.a([],p)
o=new G.d("Possessed",k,null,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["Infernal"],p)
n=$.I
k=H.a([$.bW,$.ap],l)
H.a([],p)
o=new G.d("Infernal",k,null,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.X,$.bj,$.tp,$.as],l)
H.a([],p)
o=new G.d("Geppetto",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["Abominable"],p)
n=$.I
k=H.a([$.bi,$.bm],l)
H.a([],p)
o=new G.d("Abominable",k,null,n,o,0)
$.$get$c().h(0,o)
$.zu=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.az,$.aD],l)
H.a([],p)
o=new G.d("Ashen",k,null,n,o,0)
$.$get$c().h(0,o)
$.zB=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.az,$.bh],l)
H.a([],p)
o=new G.d("Pale",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.az,$.bo],l)
H.a([],p)
o=new G.d("Pitch",k,null,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["Lit"],p)
n=$.I
k=H.a([$.am,$.ap],l)
H.a([],p)
o=new G.d("Lit",k,null,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a1,$.bh],l)
H.a([],p)
o=new G.d("Hypnotizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bh,$.aV],l)
H.a([],p)
o=new G.d("Tranquilizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a([],p)
n=$.q
k=H.a([$.bh,$.bo],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.zY=o
o=H.a(["Ghost Rider's"],p)
n=$.a9
k=H.a([$.eq,$.ap,$.bW],l)
H.a([],p)
o=new G.d("Ghost Rider",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["Logical"],p)
n=$.I
k=H.a([$.Y,$.bl],l)
H.a([],p)
o=new G.d("Logical",k,null,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["Duelist's"],p)
n=$.a9
k=H.a([$.aK,$.ah],l)
H.a([],p)
o=new G.d("Duelist's",k,null,n,o,0)
$.$get$c().h(0,o)
$.AB=o
o=H.a(["Silenced"],p)
n=$.G
k=H.a([$.aK,$.ak],l)
H.a([],p)
o=new G.d("Silenced",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["Deudly"],p)
n=$.G
k=H.a([$.aK,$.bT],l)
H.a([],p)
o=new G.d("Deudly",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ap=o
o=H.a(["Screaming"],p)
n=$.G
k=H.a([$.aU,$.aW],l)
H.a([],p)
o=new G.d("Screaming",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["Cacophonous"],p)
n=$.I
k=H.a([$.bY,$.a8],l)
H.a([],p)
o=new G.d("Cacophonous",k,null,n,o,0)
$.$get$c().h(0,o)
$.zW=o
o=H.a(["Sublime"],p)
n=$.I
k=H.a([$.bY,$.av],l)
H.a([],p)
o=new G.d("Sublime",k,null,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["Masterwork"],p)
n=$.u
k=H.a([$.bj,$.bd],l)
H.a([],p)
o=new G.d("Masterwork",k,null,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.as,$.aW,$.bm,$.a1],l)
H.a([],p)
o=new G.d("BroodFester",k,null,n,o,0)
$.$get$c().h(0,o)
$.zQ=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bm,$.ak],l)
H.a([],p)
o=new G.d("[REDACTED]",k,null,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.ao,$.bn],l)
H.a([],p)
o=new G.d("Pop Rocks",k,null,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["Disguised"],p)
n=$.G
k=H.a([$.ak,$.aN],l)
H.a([],p)
o=new G.d("Disguised",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aw=o
o=H.a(["Haunted"],p)
n=$.G
k=H.a([$.aF,$.bW],l)
H.a([],p)
o=new G.d("Haunted",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["Cognitohazardous"],p)
n=$.G
k=H.a([$.bm,$.Y],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ad=o
o=H.a(["Staticy"],p)
n=$.G
k=H.a([$.aF,$.a7],l)
H.a([],p)
o=new G.d("Staticy",k,null,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.aO,$.c5],l)
H.a([],p)
o=new G.d("Jadite",k,null,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.aT,$.aF],l)
H.a([],p)
o=new G.d("Tickling",k,null,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.D,$.bS],l)
H.a([],p)
o=new G.d("Composite",k,null,n,o,0)
$.$get$c().h(0,o)
$.Af=o
o=H.a(["High-Powered"],p)
n=$.G
k=H.a([$.bn,$.aK],l)
H.a([],p)
o=new G.d("High-Powered",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bn,$.ag],l)
H.a([],p)
o=new G.d("Concussive",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ag=o
o=H.a(["Down"],p)
n=$.u
k=H.a([$.aY,$.bp],l)
H.a([],p)
o=new G.d("Down",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ay=o
o=H.a(["Prickly"],p)
n=$.u
k=H.a([$.aF,$.aL],l)
H.a([],p)
o=new G.d("Prickly",k,null,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aF,$.ak,$.a7],l)
H.a([],p)
o=new G.d("Deep-Web",k,null,n,o,0)
$.$get$c().h(0,o)
$.As=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.u
k=H.a([$.aL,$.ar],l)
H.a([],p)
o=new G.d("Jagged",k,null,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["Nanofiber"],p)
n=$.u
k=H.a([$.O,$.Y],l)
H.a([],p)
o=new G.d("Nanofiber",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.D,$.aU],l)
H.a([],p)
o=new G.d("Clanging",k,null,n,o,0)
$.$get$c().h(0,o)
$.A9=o
o=H.a(["Silver"],p)
n=$.u
k=H.a([$.D,$.ah],l)
H.a([],p)
o=new G.d("Silver",k,null,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["Withered"],p)
n=$.G
k=H.a([$.aD,$.aQ],l)
H.a([],p)
o=new G.d("Withered",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["Shattered"],p)
n=$.G
k=H.a([$.aO,$.bT],l)
H.a([],p)
o=new G.d("Shattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Miner's"],p)
n=$.a9
k=H.a([$.at,$.D],l)
H.a([],p)
o=new G.d("Miner's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a8,$.as],l)
H.a([],p)
o=new G.d("Singing",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bi,$.a7],l)
H.a([],p)
o=new G.d("Mitochondrial",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.ak,$.a7],l)
H.a([],p)
o=new G.d("Blackout",k,null,n,o,0)
$.$get$c().h(0,o)
$.zJ=o
o=H.a(["Asbestos"],p)
n=$.u
k=H.a([$.at,$.bP],l)
H.a([],p)
o=new G.d("Asbestos",k,null,n,o,0)
$.$get$c().h(0,o)
$.zv=o
o=H.a(["Mercurial"],p)
n=$.u
k=H.a([$.bP,$.D],l)
H.a([],p)
o=new G.d("Mercurial",k,null,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["Bulletproof"],p)
n=$.u
k=H.a([$.O,$.ag],l)
H.a([],p)
o=new G.d("Bulletproof",k,null,n,o,0)
$.$get$c().h(0,o)
$.zT=o
o=H.a(["Cotton"],p)
n=$.u
k=H.a([$.aQ,$.O],l)
H.a([],p)
o=new G.d("Cotton",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ah=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bo,$.aP],l)
H.a([],p)
o=new G.d("Blinding",k,null,n,o,0)
$.$get$c().h(0,o)
$.zK=o
o=H.a(["Brilliant"],p)
n=$.I
k=H.a([$.aP,$.Y],l)
H.a([],p)
o=new G.d("Brilliant",k,null,n,o,0)
$.$get$c().h(0,o)
$.zP=o
o=H.a(["Offensive"],p)
n=$.I
k=H.a([$.bo,$.Y],l)
H.a([],p)
o=new G.d("Offensive",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["Poached"],p)
n=$.G
k=H.a([$.bi,$.bd],l)
H.a([],p)
o=new G.d("Poached",k,null,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["Tapestry"],p)
n=$.u
k=H.a([$.O,$.av],l)
H.a([],p)
o=new G.d("Tapestry",k,null,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["Itchy"],p)
n=$.I
k=H.a([$.O,$.aF],l)
H.a([],p)
o=new G.d("Itchy",k,null,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["Wishbone"],p)
n=$.u
k=H.a([$.bX,$.aX],l)
H.a([],p)
o=new G.d("Wishbone",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["Rattling"],p)
n=$.G
k=H.a([$.aU,$.aX],l)
H.a([],p)
o=new G.d("Rattling",k,null,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["Cranial"],p)
n=$.u
k=H.a([$.Y,$.aX],l)
H.a([],p)
o=new G.d("Cranial",k,null,n,o,0)
$.$get$c().h(0,o)
$.Al=o
o=H.a(["Humerus"],p)
n=$.u
k=H.a([$.aT,$.aX],l)
H.a([],p)
o=new G.d("Humerus",k,null,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aI,$.aY],l)
H.a([],p)
o=new G.d("Massage",k,null,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["Pestersome","Irksome"],p)
n=$.I
k=H.a([$.aU,$.bo],l)
H.a([],p)
o=new G.d("Pestersome",k,null,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aU,$.bn],l)
H.a([],p)
o=new G.d("Shockwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bP,$.aI],l)
H.a([],p)
o=new G.d("Antivenom",k,null,n,o,0)
$.$get$c().h(0,o)
$.zy=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.u
k=H.a([$.ap,$.a1],l)
H.a([],p)
o=new G.d("Will O Wisp",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["Fiberglass"],p)
n=$.u
k=H.a([$.O,$.aO],l)
H.a([],p)
o=new G.d("Fiberglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.AT=o
o=H.a(["Skull"],p)
n=$.u
k=H.a([$.aX,$.aW],l)
H.a([],p)
o=new G.d("Skull",k,null,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["Enchanted"],p)
n=$.G
k=H.a([$.a1,$.bX],l)
H.a([],p)
o=new G.d("Enchanted",k,null,n,o,0)
$.$get$c().h(0,o)
$.AL=o
o=H.a(["Berserker's"],p)
n=$.a9
k=H.a([$.a1,$.bo],l)
H.a([],p)
o=new G.d("Berserker's",k,null,n,o,0)
$.$get$c().h(0,o)
$.zI=o
o=H.a(["Clerical"],p)
n=$.a9
k=H.a([$.a1,$.aI],l)
H.a([],p)
o=new G.d("Clerical",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aa=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aI,$.ap],l)
H.a([],p)
o=new G.d("Cauterizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.A1=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c5,$.aP],l)
H.a([],p)
o=new G.d("X-Ray",k,null,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["Clever"],p)
n=$.I
k=H.a([$.Y,$.bX],l)
H.a([],p)
o=new G.d("Clever",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ab=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.aY,$.ap],l)
H.a([],p)
o=new G.d("Fireplace",k,null,n,o,0)
$.$get$c().h(0,o)
$.AW=o
o=H.a(["Crackling"],p)
n=$.G
k=H.a([$.aU,$.ap],l)
H.a([],p)
o=new G.d("Crackling",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ak=o
o=H.a(["Thumping"],p)
n=$.G
k=H.a([$.aU,$.ca],l)
H.a([],p)
o=new G.d("Thumping",k,null,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["Shrieking","Banshee"],p)
n=$.G
k=H.a([$.bW,$.aU],l)
H.a([],p)
o=new G.d("Banshee",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.aT,$.bm],l)
H.a([],p)
o=new G.d("Surreal2",k,null,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aI,$.aQ],l)
H.a([],p)
o=new G.d("Aloe",k,null,n,o,0)
$.$get$c().h(0,o)
$.zx=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.az,$.aQ],l)
H.a([],p)
o=new G.d("Rose",k,null,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.aT,$.ag],l)
H.a([],p)
o=new G.d("Knock Knock",k,null,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a1,$.bP],l)
H.a([],p)
o=new G.d("Lifesteal",k,null,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.av,$.aD],l)
H.a([],p)
o=new G.d("Tragic",k,null,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.ar,$.aT],l)
H.a([],p)
o=new G.d("Slapstick",k,null,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bY,$.aT],l)
H.a([],p)
o=new G.d("Gross Out",k,null,n,o,0)
$.$get$c().h(0,o)
$.vL=o
o=H.a(["Flowery"],p)
n=$.u
k=H.a([$.av,$.aQ],l)
H.a([],p)
o=new G.d("Flowery",k,null,n,o,0)
$.$get$c().h(0,o)
$.B1=o
o=H.a(["Poison Ivy"],p)
n=$.u
k=H.a([$.bP,$.aQ],l)
H.a([],p)
o=new G.d("Poison Ivy",k,null,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.G
k=H.a([$.a1,$.bp],l)
H.a([],p)
o=new G.d("Winged",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.aQ,$.ao,$.aD],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,null,n,o,0)
$.$get$c().h(0,o)
$.B5=o
o=H.a(["Lawful"],p)
n=$.I
k=H.a([$.aV,$.as],l)
H.a([],p)
o=new G.d("Lawful",k,null,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["Chaotic"],p)
n=$.I
k=H.a([$.bo,$.as],l)
H.a([],p)
o=new G.d("Chaotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.A5=o
o=H.a(["Hypothermic"],p)
n=$.G
k=H.a([$.aD,$.bl],l)
H.a([],p)
o=new G.d("Hypothermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["Hyperthermic"],p)
n=$.G
k=H.a([$.aD,$.ap],l)
H.a([],p)
o=new G.d("Hyperthermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["Shackled"],p)
n=$.G
k=H.a([$.aV,$.ca],l)
H.a([],p)
o=new G.d("Shackled",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["Poetic"],p)
n=$.I
k=H.a([$.Y,$.az],l)
H.a([],p)
o=new G.d("Poetic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["Holographic"],p)
n=$.u
k=H.a([$.aP,$.Y,$.aO,$.a7],l)
H.a([],p)
o=new G.d("Holographic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["Casket","Coffin"],p)
n=$.u
k=H.a([$.X,$.aD],l)
H.a([],p)
o=new G.d("Casket",k,null,n,o,0)
$.$get$c().h(0,o)
$.A0=o
o=H.a(["Spectral"],p)
n=$.u
k=H.a([$.bW,$.a1],l)
H.a([],p)
o=new G.d("Spectral",k,null,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["Phoenix"],p)
n=$.u
k=H.a([$.ap,$.bp],l)
H.a([],p)
o=new G.d("Phoenix",k,null,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["Tattered"],p)
n=$.G
k=H.a([$.O,$.aD],l)
H.a([],p)
o=new G.d("Tattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a8,$.X],l)
H.a([],p)
o=new G.d("Woodwind",k,null,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aF,$.aX],l)
H.a([],p)
o=new G.d("Bone Hurting",k,null,n,o,0)
$.$get$c().h(0,o)
$.zM=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aI,$.aX],l)
H.a([],p)
o=new G.d("Bone Healing:",k,null,n,o,0)
$.$get$c().h(0,o)
$.zL=o
o=H.a(["Calcium"],p)
n=$.u
k=H.a([$.aX,$.aI,$.ao],l)
H.a([],p)
o=new G.d("Calcium",k,null,n,o,0)
$.$get$c().h(0,o)
$.zX=o
o=H.a(["Fleece"],p)
n=$.u
k=H.a([$.O,$.ap],l)
H.a([],p)
o=new G.d("Fleece",k,null,n,o,0)
$.$get$c().h(0,o)
$.AZ=o
o=H.a(["Potted"],p)
n=$.u
k=H.a([$.bS,$.aQ],l)
H.a([],p)
o=new G.d("Potted",k,null,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.u
k=H.a([$.D,$.ao],l)
H.a([],p)
o=new G.d("Canned",k,null,n,o,0)
$.$get$c().h(0,o)
$.zZ=o
o=H.a(["Diseased"],p)
n=$.G
k=H.a([$.aD,$.bi],l)
H.a([],p)
o=new G.d("Diseased",k,null,n,o,0)
$.$get$c().h(0,o)
$.At=o
o=H.a(["Porcupine"],p)
n=$.u
k=H.a([$.aL,$.cg],l)
H.a([],p)
o=new G.d("Porcupine",k,null,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["Fanged"],p)
n=$.G
k=H.a([$.aX,$.aL],l)
H.a([],p)
o=new G.d("Fanged",k,null,n,o,0)
$.$get$c().h(0,o)
$.AP=o
o=H.a(["Basalt"],p)
n=$.u
k=H.a([$.at,$.ak],l)
H.a([],p)
o=new G.d("Basalt",k,null,n,o,0)
$.$get$c().h(0,o)
$.zF=o
o=H.a(["Obsidian"],p)
n=$.u
k=H.a([$.aO,$.ak],l)
H.a([],p)
o=new G.d("Obsidian",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["Fenestrated"],p)
n=$.u
k=H.a([$.aO,$.X],l)
H.a([],p)
o=new G.d("Fenestrated",k,null,n,o,0)
$.$get$c().h(0,o)
$.AR=o
o=H.a(["Plexiglass"],p)
n=$.u
k=H.a([$.aO,$.aE],l)
H.a([],p)
o=new G.d("Plexiglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bS,$.K],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,null,n,o,0)
$.$get$c().h(0,o)
$.A4=o
o=H.a(["Fungal"],p)
n=$.u
k=H.a([$.aQ,$.bY],l)
H.a([],p)
o=new G.d("Fungal",k,null,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["Thorny"],p)
n=$.G
k=H.a([$.aQ,$.aL],l)
H.a([],p)
o=new G.d("Thorny",k,null,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["Bulbed"],p)
n=$.G
k=H.a([$.aQ,$.ag],l)
H.a([],p)
o=new G.d("Bulbed",k,null,n,o,0)
$.$get$c().h(0,o)
$.zS=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.aO,$.aK],l)
H.a([],p)
o=new G.d("Glass Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.aQ,$.cb],l)
H.a([],p)
o=new G.d("Caoutchouc",k,null,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["Cellulose"],p)
n=$.u
k=H.a([$.aQ,$.aE],l)
H.a([],p)
o=new G.d("Cellulose",k,null,n,o,0)
$.$get$c().h(0,o)
$.A3=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a8,$.aW],l)
H.a([],p)
o=new G.d("Horrorcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bm,$.a8],l)
H.a([],p)
o=new G.d("Nightcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bm,$.a7,$.a8],l)
H.a([],p)
o=new G.d("Crazy Bus",k,null,n,o,0)
$.$get$c().h(0,o)
$.Am=o
o=H.a(["Burdock"],p)
n=$.u
k=H.a([$.aQ,$.cg],l)
H.a([],p)
o=new G.d("Burdock",k,null,n,o,0)
$.$get$c().h(0,o)
$.zU=o
o=H.a(["Necrotic"],p)
n=$.G
k=H.a([$.aX,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Necrotic",k,null,n,o,0))
o=H.a(["Stem"],p)
n=$.u
k=H.a([$.aX,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stem",k,null,n,o,0))
o=H.a(["DryBone"],p)
n=$.G
k=H.a([$.aX,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("DryBone",k,null,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.aX,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("XyloBone",k,null,n,o,0))
o=H.a(["Ribcage"],p)
n=$.u
k=H.a([$.aX,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ribcage",k,null,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.aX,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("BoneZone",k,null,n,o,0))
o=H.a(["Creaky"],p)
n=$.I
k=H.a([$.X,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Creaky",k,null,n,o,0))
o=H.a(["Maple"],p)
n=$.u
k=H.a([$.X,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Maple",k,null,n,o,0))
o=H.a(["Mahagony"],p)
n=$.u
k=H.a([$.X,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mahagony",k,null,n,o,0))
o=H.a(["Fenced"],p)
n=$.G
k=H.a([$.X,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fenced",k,null,n,o,0))
o=H.a(["Bocote"],p)
n=$.u
k=H.a([$.X,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bocote",k,null,n,o,0))
o=H.a(["Incense"],p)
n=$.u
k=H.a([$.X,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incense",k,null,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.X,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebony",k,null,n,o,0))
o=H.a(["Birch"],p)
n=$.u
k=H.a([$.X,$.aP],l)
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
n=$.a9
k=H.a([$.X,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackForest",k,null,n,o,0))
o=H.a(["Tree"],p)
n=$.u
k=H.a([$.X,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tree",k,null,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.u
k=H.a([$.X,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebonwood",k,null,n,o,0))
o=H.a(["Bark"],p)
n=$.u
k=H.a([$.X,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bark",k,null,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.X,$.at],l)
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
k=H.a([$.at,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gemstone",k,null,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.at,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pet Rock",k,null,n,o,0))
o=H.a(["Sand"],p)
n=$.u
k=H.a([$.at,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sand",k,null,n,o,0))
o=H.a(["Geode"],p)
n=$.u
k=H.a([$.at,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Geode",k,null,n,o,0))
o=H.a(["Silicon"],p)
n=$.u
k=H.a([$.at,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silicon",k,null,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.u
k=H.a([$.at,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryolite",k,null,n,o,0))
o=H.a(["Meteor"],p)
n=$.u
k=H.a([$.at,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meteor",k,null,n,o,0))
o=H.a(["Carbon"],p)
n=$.u
k=H.a([$.at,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon",k,null,n,o,0))
o=H.a(["Mossy"],p)
n=$.G
k=H.a([$.at,$.cg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mossy",k,null,n,o,0))
o=H.a(["Lensed"],p)
n=$.G
k=H.a([$.Y,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lensed",k,null,n,o,0))
o=H.a(["Hide"],p)
n=$.G
k=H.a([$.O,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hide",k,null,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.O,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("FeatherBoa",k,null,n,o,0))
o=H.a(["Tacky"],p)
n=$.I
k=H.a([$.O,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tacky",k,null,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.O,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Whip",k,null,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.O,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Costumed",k,null,n,o,0))
o=H.a(["Punk"],p)
n=$.I
k=H.a([$.O,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Punk",k,null,n,o,0))
o=H.a(["Weighted"],p)
n=$.G
k=H.a([$.O,$.ca],l)
H.a([],p)
$.$get$c().h(0,new G.d("Weighted",k,null,n,o,0))
o=H.a(["Favorite"],p)
n=$.I
k=H.a([$.O,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Favorite",k,null,n,o,0))
o=H.a(["Novelty"],p)
n=$.I
k=H.a([$.O,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Novelty",k,null,n,o,0))
o=H.a(["Security"],p)
n=$.u
k=H.a([$.O,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Security",k,null,n,o,0))
o=H.a(["IcePack"],p)
n=$.u
k=H.a([$.O,$.bl],l)
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
k=H.a([$.O,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Harp",k,null,n,o,0))
o=H.a(["Silk"],p)
n=$.u
k=H.a([$.O,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silk",k,null,n,o,0))
o=H.a(["RedFlag"],p)
n=$.u
k=H.a([$.O,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("RedFlag",k,null,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.u
k=H.a([$.O,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet1",k,null,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.u
k=H.a([$.O,$.az],l)
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
k=H.a([$.O,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Jean",k,null,n,o,0))
o=H.a(["Tesla"],p)
n=$.a9
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
k=H.a([$.aQ,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peashooter",k,null,n,o,0))
o=H.a(["Lacquer"],p)
n=$.u
k=H.a([$.aE,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lacquer",k,null,n,o,0))
o=H.a(["Classpecty"],p)
n=$.u
k=H.a([$.T,$.S],l)
H.a([],p)
$.$get$c().h(0,new G.d("Classpecty",k,null,n,o,0))
o=H.a(["Smartass"],p)
n=$.I
k=H.a([$.Y,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smartass",k,null,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.I
k=H.a([$.bj,$.aN,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Miraculous",k,null,n,o,0))
o=H.a(["Pigeon"],p)
n=$.u
k=H.a([$.bm,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pigeon",k,null,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bm,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grimoire",k,null,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.a9
k=H.a([$.bm,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Oglogoth's",k,null,n,o,0))
o=H.a(["Echidna's"],p)
n=$.a9
k=H.a([$.a_,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Echidna's",k,null,n,o,0))
o=H.a(["Superior"],p)
n=$.a9
k=H.a([$.Y,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Superior",k,null,n,o,0))
o=H.a(["Lego"],p)
n=$.u
k=H.a([$.a_,$.aE,$.bh,$.ag],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lego",k,null,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a_,$.dN,$.X,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yardstick",k,null,n,o,0))
o=H.a(["Queenly"],p)
n=$.a9
k=H.a([$.ak,$.a1,$.bj,$.aF,$.aW],l)
H.a([],p)
o=new G.d("Queenly",k,null,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["Kingly"],p)
n=$.a9
k=H.a([$.aW,$.ag,$.ca,$.a1,$.bj],l)
H.a([],p)
o=new G.d("Kingly",k,null,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["Jack"],p)
n=$.a9
k=H.a([$.aL,$.ar,$.D,$.ak],l)
H.a([],p)
o=new G.d("Jack",k,null,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a_,$.aN,$.X,$.T,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Codpiece",k,null,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a_,$.aC,$.K,$.D,$.Y,$.T],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graceful",k,null,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a_,$.aC,$.K,$.Y,$.T,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guide",k,null,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a_,$.aD,$.K,$.Y,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Testament",k,null,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.a9
k=H.a([$.a_,$.aP,$.D,$.aL,$.ar,$.er],l)
H.a([],p)
$.$get$c().h(0,new G.d("Excalibur",k,null,n,o,0))
o=H.a(["Influential"],p)
n=$.a9
k=H.a([$.a_,$.K,$.bo,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.d("Influential",k,null,n,o,0))
o=H.a(["Alternative"],p)
n=$.a9
k=H.a([$.a_,$.a1,$.O,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Alternative",k,null,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.a9
k=H.a([$.a_,$.aF,$.aX,$.D,$.fe,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Valkyrie",k,null,n,o,0))
o=H.a(["Ongoing"],p)
n=$.a9
k=H.a([$.a_,$.at,$.ah,$.jh,$.ag],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ongoing",k,null,n,o,0))
o=H.a(["Short"],p)
n=$.G
k=H.a([$.a_,$.O,$.bd,$.av,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short",k,null,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a_,$.D,$.bd,$.av,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crown",k,null,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a_,$.aE,$.a7,$.ak,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gristtorrent",k,null,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a_,$.O,$.Y,$.a1,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Robe",k,null,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a_,$.O,$.Y,$.av,$.ah],l)
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
i=H.a([$.a_,$.av,$.bS,$.ag,$.fc,$.as],l)
H.a([],p)
o=new G.d("Cueball",i,null,n,o,0)
$.$get$c().h(0,o)
$.vE=o
o=H.a(["Meddler's"],p)
n=$.a9
i=H.a([$.a_,$.aC,$.K,$.bo,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meddler's",i,null,n,o,0))
o=H.a(["Scroll"],p)
n=$.a9
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
i=H.a([$.a_,$.D,$.aO,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Warped",i,null,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a_,$.aN,$.X,$.am,$.bh,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stairs",i,null,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a_,$.ap,$.D,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rocket",i,null,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a_,$.a7,$.K,$.aC,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("~ATH",i,null,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a_,$.X,$.as,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Puppeted",i,null,n,o,0))
o=H.a(["Angelic"],p)
n=$.a9
i=H.a([$.a_,$.bj,$.bp,$.aP,$.a8,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Angelic",i,null,n,o,0))
o=H.a(["Vitae"],p)
n=$.u
i=H.a([$.a_,$.aI,$.aO,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vitae",i,null,n,o,0))
o=H.a(["Fluorite"],p)
n=$.u
i=H.a([$.a_,$.aP,$.bX,$.at,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluorite",i,null,n,o,0))
o=H.a(["Janus"],p)
n=$.a9
i=H.a([$.a_,$.aF,$.at,$.ah,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Janus",i,null,n,o,0))
o=H.a(["Bacchus"],p)
n=$.a9
i=H.a([$.a_,$.ao,$.bo,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bacchus",i,null,n,o,0))
o=H.a(["TurnTable"],p)
n=$.a9
i=H.a([$.a_,$.D,$.a8,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("TurnTable",i,null,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.I
i=H.a([$.a_,$.aO,$.c5,$.aP,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("???",i,null,n,o,0))
o=H.a(["Demonite"],p)
n=$.u
i=H.a([$.D,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Demonite",i,null,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.a9
i=H.a([$.D,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stymphalian",i,null,n,o,0))
o=H.a(["Junky"],p)
n=$.u
i=H.a([$.D,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Junky",i,null,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.u
i=H.a([$.D,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cold Iron",i,null,n,o,0))
o=H.a(["Bolted"],p)
n=$.G
i=H.a([$.D,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bolted",i,null,n,o,0))
o=H.a(["Armored"],p)
n=$.G
i=H.a([$.D,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Armored",i,null,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.u
i=H.a([$.D,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heartsteel",i,null,n,o,0))
o=H.a(["Brick"],p)
n=$.u
i=H.a([$.bS,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Brick",i,null,n,o,0))
o=H.a(["Clay"],p)
n=$.u
i=H.a([$.bS,$.cb],l)
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
i=H.a([$.bS,$.a8],l)
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
i=H.a([$.bS,$.bj],l)
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
i=H.a([$.bT,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Flickering",i,null,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.u
i=H.a([$.bT,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thinly Veiled",i,null,n,o,0))
o=H.a(["Fragile"],p)
n=$.G
i=H.a([$.bT,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fragile",i,null,n,o,0))
o=H.a(["Troll's"],p)
n=$.a9
i=H.a([$.bT,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Troll's",i,null,n,o,0))
o=H.a(["Sappy"],p)
n=$.u
i=H.a([$.bT,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sappy",i,null,n,o,0))
o=H.a(["Bootleg"],p)
n=$.u
i=H.a([$.bT,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bootleg",i,null,n,o,0))
o=H.a(["Distorted"],p)
n=$.u
i=H.a([$.bT,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Distorted",i,null,n,o,0))
o=H.a(["Ent's"],p)
n=$.a9
i=H.a([$.X,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ent's",i,null,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.u
i=H.a([$.X,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("WeepingWillow",i,null,n,o,0))
o=H.a(["Latex"],p)
n=$.u
i=H.a([$.X,$.cb],l)
H.a([],p)
$.$get$c().h(0,new G.d("Latex",i,null,n,o,0))
o=H.a(["Turf"],p)
n=$.u
i=H.a([$.aE,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turf",i,null,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.cb,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stress Relieving",i,null,n,o,0))
o=H.a(["R-Rated"],p)
n=$.G
i=H.a([$.cb,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("R-Rated",i,null,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.cb,$.ap],l)
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
n=$.u
i=H.a([$.at,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("EbonStone",i,null,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.u
i=H.a([$.at,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rock Candy",i,null,n,o,0))
o=H.a(["Smashing"],p)
n=$.I
i=H.a([$.at,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smashing",i,null,n,o,0))
o=H.a(["Anomalous"],p)
n=$.I
i=H.a([$.bW,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anomalous",i,null,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.u
i=H.a([$.bW,$.bp],l)
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
i=H.a([$.bW,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Choral",i,null,n,o,0))
o=H.a(["Eerie"],p)
n=$.u
i=H.a([$.bW,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eerie",i,null,n,o,0))
o=H.a(["Spiritual"],p)
n=$.I
i=H.a([$.bW,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spiritual",i,null,n,o,0))
o=H.a(["Heart"],p)
n=$.u
i=H.a([$.bi,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heart",i,null,n,o,0))
o=H.a(["Primordial"],p)
n=$.u
i=H.a([$.bi,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Primordial",i,null,n,o,0))
o=H.a(["Eyeball"],p)
n=$.u
i=H.a([$.bi,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eyeball",i,null,n,o,0))
o=H.a(["Vulture"],p)
n=$.G
i=H.a([$.bi,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vulture",i,null,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bm,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackMagic",i,null,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.u
i=H.a([$.bm,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doppelganger",i,null,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.G
i=H.a([$.bm,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incomprehensible",i,null,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bm,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Destructive",i,null,n,o,0))
o=H.a(["Growling"],p)
n=$.G
i=H.a([$.cg,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Growling",i,null,n,o,0))
o=H.a(["Coconut"],p)
n=$.u
i=H.a([$.cg,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Coconut",i,null,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.a9
i=H.a([$.cg,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beastmaster's",i,null,n,o,0))
o=H.a(["Fluffy"],p)
n=$.u
i=H.a([$.cg,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluffy",i,null,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.u
i=H.a([$.aQ,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fern",i,null,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.G
i=H.a([$.aQ,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Four Leafed",i,null,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.u
i=H.a([$.aQ,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shrubbery",i,null,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.u
i=H.a([$.aQ,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ecballium",i,null,n,o,0))
o=H.a(["Truffle"],p)
n=$.u
i=H.a([$.aQ,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Truffle",i,null,n,o,0))
o=H.a(["Vine"],p)
n=$.u
i=H.a([$.aQ,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vine",i,null,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.u
i=H.a([$.aQ,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("CorpseBlossom",i,null,n,o,0))
o=H.a(["Fruity"],p)
n=$.G
i=H.a([$.aQ,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fruity",i,null,n,o,0))
o=H.a(["Squawking"],p)
n=$.G
i=H.a([$.bp,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Squawking",i,null,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.u
i=H.a([$.bp,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Poultry",i,null,n,o,0))
o=H.a(["Dove"],p)
n=$.u
i=H.a([$.bp,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dove",i,null,n,o,0))
o=H.a(["Peacock"],p)
n=$.u
i=H.a([$.bp,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peacock",i,null,n,o,0))
o=H.a(["Stork"],p)
n=$.u
i=H.a([$.bp,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stork",i,null,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.u
i=H.a([$.bp,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Zhenniao",i,null,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.u
i=H.a([$.bp,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dodo",i,null,n,o,0))
o=H.a(["Raven"],p)
n=$.tv
i=H.a([$.bp,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Raven",i,null,n,o,0))
o=H.a(["Frilled"],p)
n=$.G
i=H.a([$.bp,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Frilled",i,null,n,o,0))
o=H.a(["Horrifying"],p)
n=$.I
i=H.a([$.bY,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Horrifying",i,null,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.ar,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Burning Edge",i,null,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.ar,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scapel",i,null,n,o,0))
o=H.a(["Menacing"],p)
n=$.I
i=H.a([$.aW,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Menacing",i,null,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aI,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Syringe",i,null,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.I
i=H.a([$.ao,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bitter",i,null,n,o,0))
o=H.a(["Pineapple"],p)
n=$.u
i=H.a([$.ao,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pineapple",i,null,n,o,0))
o=H.a(["Crunchy"],p)
n=$.I
i=H.a([$.ao,$.ag],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crunchy",i,null,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.ca,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bass",i,null,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.ca,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rigid",i,null,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aK,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prop",i,null,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aK,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Magic Missle",i,null,n,o,0))
o=H.a(["Gangster's"],p)
n=$.a9
i=H.a([$.aK,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gangster's",i,null,n,o,0))
o=H.a(["Cupid's"],p)
n=$.a9
i=H.a([$.aK,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cupid's",i,null,n,o,0))
o=H.a(["Turreted"],p)
n=$.G
i=H.a([$.aK,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turreted",i,null,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.G
i=H.a([$.aK,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("AutoTarget",i,null,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.a9
i=H.a([$.aK,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guerilla's",i,null,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aK,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rail",i,null,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aK,$.c5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tau",i,null,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aK,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pew",i,null,n,o,0))
o=H.a(["Thermal"],p)
n=$.G
i=H.a([$.aK,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thermal",i,null,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.u
i=H.a([$.aP,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plasma",i,null,n,o,0))
o=H.a(["Shredding"],p)
n=$.u
i=H.a([$.a8,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shredding",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.u
i=H.a([$.bX,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Charmed"],p)
n=$.u
i=H.a([$.bX,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charmed",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.a9
i=H.a([$.bX,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Prospitian"],p)
n=$.a9
i=H.a([$.aP,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prospitian",i,null,n,o,0))
o=H.a(["Vigilant"],p)
n=$.G
i=H.a([$.aP,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vigilant",i,null,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.I
i=H.a([$.aP,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stand-Up",i,null,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.G
i=H.a([$.aP,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedazzled",i,null,n,o,0))
o=H.a(["Thief's"],p)
n=$.a9
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
i=H.a([$.ak,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comedy Night",i,null,n,o,0))
o=H.a(["Stealthy"],p)
n=$.I
i=H.a([$.ak,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stealthy",i,null,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.ak,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Subterfuge",i,null,n,o,0))
o=H.a(["Dersite"],p)
n=$.a9
i=H.a([$.ak,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dersite",i,null,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.a9
i=H.a([$.bh,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ambient",i,null,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bh,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anesthesia",i,null,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bh,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Supportive",i,null,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aI,$.c5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nuka",i,null,n,o,0))
o=H.a(["Contaminated"],p)
n=$.G
i=H.a([$.bP,$.c5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Contaminated",i,null,n,o,0))
o=H.a(["Unstable"],p)
n=$.G
i=H.a([$.aD,$.c5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unstable",i,null,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aD,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Timebomb",i,null,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.G
i=H.a([$.a7,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short Circuiting",i,null,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aD,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relic",i,null,n,o,0))
o=H.a(["Existentialist"],p)
n=$.G
i=H.a([$.aD,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Existentialist",i,null,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.I
i=H.a([$.aD,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Apocalyptic",i,null,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bn,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dud",i,null,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bn,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guided",i,null,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bn,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bobomb",i,null,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aD,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dread",i,null,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bn,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knockback",i,null,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a7,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Paralysis",i,null,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bn,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carnage",i,null,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bn,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blast Beat",i,null,n,o,0))
o=H.a(["Corrosive"],p)
n=$.G
i=H.a([$.bn,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Corrosive",i,null,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bn,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ice Bomb",i,null,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bl,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryogenic",i,null,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a1,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spellcasting",i,null,n,o,0))
o=H.a(["Tingling"],p)
n=$.G
i=H.a([$.a7,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tingling",i,null,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bo,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rage Plague",i,null,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bP,$.aV],l)
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
i=H.a([$.bP,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Virulent",i,null,n,o,0))
o=H.a(["Toxic"],p)
n=$.G
i=H.a([$.bP,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Toxic",i,null,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bP,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Laughing Gas",i,null,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.G
i=H.a([$.a8,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Amplified",i,null,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a8,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rap",i,null,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.a8,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Saxaphone",i,null,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.a8,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Offbeat",i,null,n,o,0))
o=H.a(["Piper's"],p)
n=$.a9
i=H.a([$.a8,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Piper's",i,null,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.a8,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Melodic",i,null,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a8,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smooth",i,null,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a8,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thrash",i,null,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a8,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chant",i,null,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bo,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chewy",i,null,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bo,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Phony",i,null,n,o,0))
o=H.a(["Doctor's"],p)
n=$.a9
i=H.a([$.Y,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doctor's",i,null,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.aV,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Straitjacketed",i,null,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.aV,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Strapped",i,null,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.aV,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bondage",i,null,n,o,0))
o=H.a(["Sealed"],p)
n=$.G
i=H.a([$.aV,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sealed",i,null,n,o,0))
o=H.a(["Attractive"],p)
n=$.I
i=H.a([$.av,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Attractive",i,null,n,o,0))
o=H.a(["Relaxed"],p)
n=$.G
i=H.a([$.aY,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relaxed",i,null,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.aY,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Loveseat",i,null,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.I
i=H.a([$.ao,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comfort Food",i,null,n,o,0))
o=H.a(["Yandere"],p)
n=$.I
i=H.a([$.az,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yandere",i,null,n,o,0))
o=H.a(["Tsundere"],p)
n=$.I
i=H.a([$.az,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tsundere",i,null,n,o,0))
o=H.a(["Disturbed"],p)
n=$.G
i=H.a([$.as,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Disturbed",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.Y,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hydroponic",i,null,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.as,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Free Range",i,null,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.a9
i=H.a([$.az,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gentlemanly",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.G
i=H.a([$.az,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sentimental",i,null,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.G
i=H.a([$.az,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki",i,null,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.G
i=H.a([$.az,$.aU,$.aC,$.ji],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki Literature Club",i,null,n,o,0))
o=H.a(["Banana"],p)
n=$.G
i=H.a([$.ao,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Banana",i,null,n,o,0))
o=H.a(["Mana"],p)
n=$.G
i=H.a([$.ao,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mana",i,null,n,o,0))
o=H.a(["Homemade"],p)
n=$.G
i=H.a([$.ao,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Homemade",i,null,n,o,0))
o=H.a(["Steampunk"],p)
n=$.G
i=H.a([$.a1,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Steampunk",i,null,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.G
i=H.a([$.ao,$.aT,$.a7,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("I Can't Stop Laughing",i,null,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.u
i=H.a([$.D,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Soulsteel",i,null,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.aX,$.ap],l)
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
i=H.a([$.cb,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Insulated",i,null,n,o,0))
o=H.a(["Ash"],p)
n=$.u
i=H.a([$.K,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ash",i,null,n,o,0))
o=H.a(["Delicate"],p)
n=$.G
i=H.a([$.K,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Delicate",i,null,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.a9
i=H.a([$.aO,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Glass Blower's",i,null,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.G
i=H.a([$.bi,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sunburnt",i,null,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.G
i=H.a([$.ap,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pyrebitten",i,null,n,o,0))
o=H.a(["Mink"],p)
n=$.u
i=H.a([$.az,$.cg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mink",i,null,n,o,0))
o=H.a(["Wildfire"],p)
n=$.a9
i=H.a([$.aQ,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Wildfire",i,null,n,o,0))
o=H.a(["Scarred"],p)
n=$.G
i=H.a([$.aI,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scarred",i,null,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.I
i=H.a([$.bj,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hyper Realistic",i,null,n,o,0))
o=H.a(["Hestia's"],p)
n=$.a9
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
i=H.a([$.ap,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firework",i,null,n,o,0))
o=H.a(["Panicky"],p)
n=$.G
i=H.a([$.aD,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Panicky",i,null,n,o,0))
o=H.a(["Ornamental"],p)
n=$.G
i=H.a([$.bd,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ornamental",i,null,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.G
i=H.a([$.bd,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dear",i,null,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.G
i=H.a([$.bd,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Swaggy",i,null,n,o,0))
o=H.a(["Uncanny"],p)
n=$.G
i=H.a([$.aF,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Uncanny",i,null,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.G
i=H.a([$.aU,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Talkative",i,null,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.G
i=H.a([$.az,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Waifu",i,null,n,o,0))
o=H.a(["Charming"],p)
n=$.G
i=H.a([$.a1,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charming",i,null,n,o,0))
o=H.a(["God Tier"],p)
n=$.G
i=H.a([$.T,$.S,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("God Tier",i,null,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.G
i=H.a([$.T,$.S,$.bj,$.aN,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cod Tier",i,null,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.G
i=H.a([$.T,$.S,$.bj,$.cg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dog Tier",i,null,n,o,0))
o=H.a(["JRPG"],p)
n=$.G
i=H.a([$.er,$.tm,$.a1],l)
H.a([],p)
$.$get$c().h(0,new G.d("JRPG",i,null,n,o,0))
o=H.a(["Cracked"],p)
n=$.G
i=H.a([$.at,$.bT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cracked",i,null,n,o,0))
o=H.a(["Ruffled"],p)
n=$.G
i=H.a([$.bp,$.bT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ruffled",i,null,n,o,0))
o=H.a(["Mandrake"],p)
n=$.G
i=H.a([$.aQ,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mandrake",i,null,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.G
i=H.a([$.a1,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beanstalk",i,null,n,o,0))
o=H.a(["Unnerving"],p)
n=$.G
i=H.a([$.aW,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unnerving",i,null,n,o,0))
o=H.a(["Chipped"],p)
n=$.G
l=H.a([$.bS,$.bT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chipped",l,null,n,o,0))
if($.wv==null){o=$.mj
n=$.aL
l=$.ar
k=$.aX
j=new U.ae(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,null,"Claws",!1,P.a5(null,null,null,m),0,3)
j.H("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.r.h(0,o)
$.wv=j}o=$.$get$ai();(o&&C.b).sm(o,0)
o=$.$get$ai()
n=$.O
l=$.vL
k=new U.ae(n,null,null,null,null,"Speedo",!1,P.a5(null,null,null,m),0,3)
k.H("Speedo",[l],null,!1,null)
k.r.h(0,n)
o.push(k)
k=$.$get$ai()
o=$.er
n=$.ar
l=$.D
j=$.aL
i=new U.ae(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,null,"Sword",!1,P.a5(null,null,null,m),0,3)
i.H("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.r.h(0,o)
k.push(i)
i=$.$get$ai()
k=$.ml
o=$.ag
j=$.D
l=new U.ae(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,null,"Hammer",!1,P.a5(null,null,null,m),0,3)
l.H("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.r.h(0,k)
i.push(l)
l=$.$get$ai()
i=$.tr
k=$.aK
j=$.D
o=new U.ae(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,null,"Rifle",!1,P.a5(null,null,null,m),0,3)
o.H("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.r.h(0,i)
l.push(o)
o=$.$get$ai()
l=$.tl
i=$.aK
j=$.D
k=new U.ae(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,null,"Pistol",!1,P.a5(null,null,null,m),0,3)
k.H("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.r.h(0,l)
o.push(k)
k=$.$get$ai()
o=$.w_
l=$.aK
j=$.D
i=new U.ae(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,null,"Shotgun",!1,P.a5(null,null,null,m),0,3)
i.H("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.r.h(0,o)
k.push(i)
i=$.$get$ai()
k=$.vy
o=$.aL
j=$.ar
l=$.D
n=new U.ae(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,null,"Blade",!1,P.a5(null,null,null,m),0,3)
n.H("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.r.h(0,k)
i.push(n)
n=$.$get$ai()
i=$.tb
k=$.aL
l=$.ar
j=$.D
o=new U.ae(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,null,"Dagger",!1,P.a5(null,null,null,m),0,3)
o.H("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.r.h(0,i)
n.push(o)
o=$.$get$ai()
n=$.hk
i=$.ag
j=$.bS
l=new U.ae(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,null,"Fancysanta",!1,P.a5(null,null,null,m),0,3)
l.H("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.r.h(0,n)
o.push(l)
l=$.$get$ai()
o=$.w2
n=$.ar
j=$.D
i=new U.ae(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,null,"Sickle",!1,P.a5(null,null,null,m),0,3)
i.H("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.r.h(0,o)
l.push(i)
i=$.$get$ai()
l=$.vB
o=$.ar
j=$.D
n=new U.ae(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,null,"Chainsaw",!1,P.a5(null,null,null,m),0,3)
n.H("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.r.h(0,l)
i.push(n)
n=$.$get$ai()
i=$.vH
l=$.aL
j=$.D
o=new U.ae(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,null,"Fork",!1,P.a5(null,null,null,m),0,3)
o.H("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.r.h(0,i)
n.push(o)
o=$.$get$ai()
n=$.tk
i=$.bp
j=$.bm
l=new U.ae(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,null,"Pigeon",!1,P.a5(null,null,null,m),0,3)
l.H("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.r.h(0,n)
o.push(l)
l=$.$get$ai()
o=$.fc
n=$.ca
j=$.at
i=$.ag
k=new U.ae(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,null,"Bowling Ball",!1,P.a5(null,null,null,m),0,3)
k.H("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.r.h(0,o)
l.push(k)
k=$.$get$ai()
l=$.tc
o=$.aE
i=$.bX
j=new U.ae(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,null,"Dice",!1,P.a5(null,null,null,m),0,3)
j.H("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.r.h(0,l)
k.push(j)
j=$.$get$ai()
k=$.tj
l=$.D
i=$.aL
o=new U.ae(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,null,"Needle",!1,P.a5(null,null,null,m),0,3)
o.H("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.r.h(0,k)
j.push(o)
o=$.$get$ai()
j=$.tt
k=$.X
i=$.ag
l=new U.ae(j,"Very magey. 7/10.","ShittyWizardKind",null,null,"Staff",!1,P.a5(null,null,null,m),0,3)
l.H("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.r.h(0,j)
o.push(l)
l=$.$get$ai()
o=$.w5
j=$.aV
i=$.O
k=new U.ae(o,"Probably p hard to use.","ImKinkshamingKind",null,null,"Whip",!1,P.a5(null,null,null,m),0,3)
k.H("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.r.h(0,o)
l.push(k)
k=$.$get$ai()
l=$.t8
o=$.aK
i=$.at
j=$.O
n=$.aL
h=new U.ae(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,null,"Bow",!1,P.a5(null,null,null,m),0,3)
h.H("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.r.h(0,l)
k.push(h)
h=$.$get$ai()
k=$.ji
l=$.X
n=$.ag
j=new U.ae(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,null,"Club",!1,P.a5(null,null,null,m),0,3)
j.H("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.r.h(0,k)
h.push(j)
j=$.$get$ai()
h=$.jg
k=$.X
n=new U.ae(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,null,"Battle Broom",!1,P.a5(null,null,null,m),0,3)
n.H("Battle Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.r.h(0,h)
j.push(n)
n=$.$get$ai()
j=$.aC
h=$.K
k=$.ag
l=new U.ae(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,null,"Book",!1,P.a5(null,null,null,m),0,3)
l.H("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.r.h(0,j)
n.push(l)
l=$.$get$ai()
n=$.vW
j=$.D
k=$.ag
h=new U.ae(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,null,"Road Sign",!1,P.a5(null,null,null,m),0,3)
h.H("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.r.h(0,n)
l.push(h)
h=$.$get$ai()
l=$.t7
n=$.ar
k=$.D
j=$.ag
i=new U.ae(l,"Legit.","TreeMassacreKind",null,null,"Axe",!1,P.a5(null,null,null,m),0,3)
i.H("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.vR
l=$.X
j=$.aL
k=new U.ae(h,"Good for chest stabs.","UseOnHorsebackKind",null,null,"Lance",!1,P.a5(null,null,null,m),0,3)
k.H("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.fe
h=$.D
j=$.ag
l=new U.ae(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,null,"Shield",!1,P.a5(null,null,null,m),0,3)
l.H("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.vA
i=$.X
j=$.ag
h=new U.ae(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,null,"Cane",!1,P.a5(null,null,null,m),0,3)
h.H("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.w6
k=$.aE
j=$.ag
i=new U.ae(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,null,"Yo-Yo",!1,P.a5(null,null,null,m),0,3)
i.H("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.w3
l=$.X
j=$.aK
k=new U.ae(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,null,"Sling",!1,P.a5(null,null,null,m),0,3)
k.H("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.w1
h=$.D
j=$.ar
l=new U.ae(i,"So edgey.","NarutoKind",null,null,"Shuriken",!1,P.a5(null,null,null,m),0,3)
l.H("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.th
i=$.D
j=$.aK
h=new U.ae(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,null,"Machine Gun",!1,P.a5(null,null,null,m),0,3)
h.H("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.mk
k=$.D
j=$.bn
i=new U.ae(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,null,"Grenade",!1,P.a5(null,null,null,m),0,3)
i.H("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.fc
l=$.cb
j=$.ag
k=new U.ae(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,null,"Ball",!1,P.a5(null,null,null,m),0,3)
k.H("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.w4
h=$.D
j=$.aL
l=new U.ae(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,null,"3dent",!1,P.a5(null,null,null,m),0,3)
l.H("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.mi
i=$.K
j=$.ar
h=new U.ae(k,"An X-Men fan, I see.","YuGiOhKind",null,null,"Card",!1,P.a5(null,null,null,m),0,3)
h.H("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.te
k=$.D
j=$.ag
i=new U.ae(l,"Go with what you know, I guess.","UnstoppableKind",null,null,"Frying Pan",!1,P.a5(null,null,null,m),0,3)
i.H("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.hj
l=$.aY
j=$.O
k=new U.ae(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,null,"Pillow",!1,P.a5(null,null,null,m),0,3)
k.H("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.eq
h=$.D
j=$.aV
l=new U.ae(i,"This could be metal as fuck.","BikerGangKind",null,null,"Chain",!1,P.a5(null,null,null,m),0,3)
l.H("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.tu
i=$.D
j=$.ag
h=new U.ae(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,null,"Wrench",!1,P.a5(null,null,null,m),0,3)
h.H("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.w0
k=$.D
j=$.ag
i=new U.ae(l,"Dual purpose.","HideTheBodiesKind",null,null,"Shovel",!1,P.a5(null,null,null,m),0,3)
i.H("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.ts
l=$.X
j=$.ag
k=new U.ae(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,null,"Rolling Pin",!1,P.a5(null,null,null,m),0,3)
k.H("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.tp
h=$.X
j=$.aD
l=new U.ae(i,"Fuck you for picking this.","KermitsGoneBadKind",null,null,"Puppet",!1,P.a5(null,null,null,m),0,3)
l.H("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.tq
i=$.D
j=$.ar
h=new U.ae(k,"So fucking edgey.","KermitsGoneBadKind",null,null,"Razor",!1,P.a5(null,null,null,m),0,3)
h.H("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.mo
k=$.D
j=$.Y
i=new U.ae(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,null,"Pen",!1,P.a5(null,null,null,m),0,3)
i.H("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.jh
l=$.at
j=$.ca
k=new U.ae(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,null,"Bust",!1,P.a5(null,null,null,m),0,3)
k.H("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.vK
h=$.X
j=$.ag
l=new U.ae(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,null,"Golf Club",!1,P.a5(null,null,null,m),0,3)
l.H("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.vQ
i=$.D
j=$.ar
h=new U.ae(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,null,"Knife",!1,P.a5(null,null,null,m),0,3)
h.H("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.vZ
k=$.D
j=$.ar
i=new U.ae(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,null,"Scissors",!1,P.a5(null,null,null,m),0,3)
i.H("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.vY
l=$.D
j=$.ca
k=new U.ae(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,null,"Safe",!1,P.a5(null,null,null,m),0,3)
k.H("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.dN
h=$.X
j=$.ag
l=new U.ae(i,"Bitches love sticks","WeaponiseTheTreesKind",null,null,"Stick",!1,P.a5(null,null,null,m),0,3)
l.H("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.tm
i=$.D
j=$.ar
m=new U.ae(k,"I lack the taste buds necessary to weigh in on the pineapple debate","HomeSliceKind",null,null,"Pizza Cutter",!1,P.a5(null,null,null,m),0,3)
m.H("Pizza Cutter",[i,j],"I lack the taste buds necessary to weigh in on the pineapple debate",!1,"HomeSliceKind")
m.r.h(0,k)
l.push(m)
m=new S.bB("Duttle","Dut",null,null)
m.b="Duttle"
$.$get$bM().push(m)
$.vf=m
m=new S.bB("Salamander","GLUB",null,null)
m.b="Salamander"
$.$get$bM().push(m)
$.rY=m
m=new S.bB("Crocodile","NAK",null,null)
m.b="Crocodile"
$.$get$bM().push(m)
$.e3=m
m=new S.bB("Iguana","thip",null,null)
m.b="Iguana"
$.$get$bM().push(m)
$.el=m
m=new S.bB("Turtle","click",null,null)
m.b="Turtle"
$.$get$bM().push(m)
$.f6=m
m=new S.bB("Skeleton","rattle",null,null)
m.b="Skeleton"
$.$get$bM().push(m)
$.dM=m
m=new S.bB("Robot","BEEP",null,null)
m.b="Robot"
$.$get$bM().push(m)
$.eo=m
m=new S.bB("Chameleon","BLEP",null,null)
m.b="Chameleon"
$.$get$bM().push(m)
$.h7=m
m=new S.bB("Axolotl","BARP",null,null)
m.b="Axolotl"
$.$get$bM().push(m)
$.rS=m
m=new S.bB("Lizard","bleb",null,null)
m.b="Lizard"
$.$get$bM().push(m)
$.lG=m
m=new S.bB("Snake","hiss",null,null)
m.b="Snake"
$.$get$bM().push(m)
$.t_=m
m=new S.bB("Alligator","nak",null,null)
m.b="Alligator"
$.$get$bM().push(m)
$.io=m
m=new S.bB("Mole","snuff",null,null)
m.b="Mole"
$.$get$bM().push(m)
$.vh=m
m=new S.bB("Bird","tweet",null,null)
m.b="Bird"
$.$get$bM().push(m)
$.lE=m
m=new S.bB("Wolf","howl",null,null)
m.b="Wolf"
$.$get$bM().push(m)
$.lL=m
m=new S.bB("Newt","skitter",null,null)
m.b="Newt"
$.$get$bM().push(m)
$.vi=m
m=new S.bB("Spider","skitter",null,null)
m.b="Spider"
$.$get$bM().push(m)
$.iv=m
m=new S.bB("Cupid","flappa",null,null)
m.b="Cupid"
$.$get$bM().push(m)
$.ip=m
m=new S.bB("Dragon","roar",null,null)
m.b="Dragon"
$.$get$bM().push(m)
$.f3=m
m=new S.i7("Prospitian","murmur",null,null)
m.b="Prospitian"
$.$get$bM().push(m)
$.yV=m
m=new S.i7("Dersite","mutter",null,null)
m.b="Dersite"
$.$get$bM().push(m)
$.yS=m
m=new S.m4("Horror Terror","a;lkjdf",null,null)
m.b="Horror Terror"
$.$get$bM().push(m)
$.yU=m
m=new S.bB("Jellyfish","buzz",null,null)
m.b="Jellyfish"
$.$get$bM().push(m)
$.vg=m
$.yW=H.a([$.t_,$.io,$.vi,$.rY,$.el,$.e3,$.f6,$.h7,$.rS,$.lG],[S.bB])
m=new T.c_(0,"spices")
$.$get$ci().push(m)
$.hc=m
m=new T.c_($.e5,"fresh baked bread")
$.$get$ci().push(m)
$.f1=m
m=new T.c_($.e5,"sweetness")
$.$get$ci().push(m)
$.co=m
m=new T.c_($.e5,"nature")
$.$get$ci().push(m)
$.c8=m
m=new T.c_(0,"salt")
$.$get$ci().push(m)
$.lK=m
m=new T.c_($.cO,"rot")
$.$get$ci().push(m)
$.cV=m
m=new T.c_($.cO,"feet")
$.$get$ci().push(m)
$.yT=m
m=new T.c_(0,"oil")
$.$get$ci().push(m)
$.en=m
m=new T.c_(0,"chlorine")
$.$get$ci().push(m)
$.rU=m
m=new T.c_(0,"nothing in particular")
$.$get$ci().push(m)
$.iu=m
m=new T.c_(0,"gunpowder")
$.$get$ci().push(m)
$.ek=m
m=new T.c_(0,"must")
$.$get$ci().push(m)
$.f4=m
m=new T.c_($.e5,"zoo animals")
$.$get$ci().push(m)
$.cN=m
m=new T.c_($.cO,"sweat")
$.$get$ci().push(m)
$.e4=m
m=new T.c_(0,"ozone")
$.$get$ci().push(m)
$.ha=m
m=new T.c_(0,"deceit")
$.$get$ci().push(m)
$.c3=m
m=new T.c_($.cO,"blood")
$.$get$ci().push(m)
$.df=m
m=new T.c_($.cO,"smoke")
$.$get$ci().push(m)
$.f5=m
m=new K.bQ($.cO,"creepy")
$.$get$c7().push(m)
$.c2=m
m=new K.bQ($.e5,"calm")
$.$get$c7().push(m)
$.aM=m
m=new K.bQ($.cO,"frantic")
$.$get$c7().push(m)
$.ce=m
m=new K.bQ(0,"like nothing")
$.$get$c7().push(m)
$.it=m
m=new K.bQ($.e5,"energizing")
$.$get$c7().push(m)
$.c4=m
m=new K.bQ(0,"studious")
$.$get$c7().push(m)
$.cA=m
m=new K.bQ(0,"dangerous")
$.$get$c7().push(m)
$.dg=m
m=new K.bQ(0,"glamorous")
$.$get$c7().push(m)
$.dK=m
m=new K.bQ(0,"romantic")
$.$get$c7().push(m)
$.hb=m
m=new K.bQ($.e5,"creative")
$.$get$c7().push(m)
$.f2=m
m=new K.bQ(0,"lucky")
$.$get$c7().push(m)
$.lH=m
m=new K.bQ(0,"happy")
$.$get$c7().push(m)
$.ds=m
m=new K.bQ(0,"heroic")
$.$get$c7().push(m)
$.dh=m
m=new K.bQ($.cO,"stupid")
$.$get$c7().push(m)
$.du=m
m=new K.bQ(0,"lucky")
$.$get$c7().push(m)
$.lH=m
m=new K.bQ(0,"claustrophobic")
$.$get$c7().push(m)
$.ve=m
m=new K.bQ(0,"overheated")
$.$get$c7().push(m)
$.lI=m
m=new K.bQ($.cO,"confusing")
$.$get$c7().push(m)
$.lF=m
m=new K.bQ(0,"contemplatative")
$.$get$c7().push(m)
$.cU=m
m=new M.br(0,"clanking")
$.$get$bK().push(m)
$.cM=m
m=new M.br(0,"laughing")
$.$get$bK().push(m)
$.cz=m
m=new M.br($.e5,"rustling")
$.$get$bK().push(m)
$.bc=m
m=new M.br($.cO,"screaming")
$.$get$bK().push(m)
$.ep=m
m=new M.br($.cO,"foot steps")
$.$get$bK().push(m)
$.ir=m
m=new M.br($.cO,"beeping")
$.$get$bK().push(m)
$.ej=m
m=new M.br($.cO,"whispering")
$.$get$bK().push(m)
$.vk=m
m=new M.br(0,"clacking")
$.$get$bK().push(m)
$.h8=m
m=new M.br(0,"applause")
$.$get$bK().push(m)
$.cC=m
m=new M.br(0,"jazz")
$.$get$bK().push(m)
$.em=m
m=new M.br(0,"disco")
$.$get$bK().push(m)
$.rW=m
m=new M.br(0,"drums")
$.$get$bK().push(m)
$.h9=m
m=new M.br(0,"echoing")
$.$get$bK().push(m)
$.iq=m
m=new M.br($.cO,"roaring")
$.$get$bK().push(m)
$.lJ=m
m=new M.br($.cO,"gunfire")
$.$get$bK().push(m)
$.is=m
m=new M.br(0,"music")
$.$get$bK().push(m)
$.cn=m
m=new M.br(0,"singing")
$.$get$bK().push(m)
$.rZ=m
m=new M.br(0,"chanting")
$.$get$bK().push(m)
$.rT=m
m=new M.br(0,"whistling")
$.$get$bK().push(m)
$.f7=m
m=new M.br($.e5,"nature")
$.$get$bK().push(m)
$.dt=m
m=new M.br(0,"croaking")
$.$get$bK().push(m)
$.rV=m
m=new M.br(0,"silence")
$.$get$bK().push(m)
$.dL=m
m=new M.br(0,"pulsing")
$.$get$bK().push(m)
$.rX=m
m=new M.br(0,"ticking")
$.$get$bK().push(m)
$.vj=m
m=H.a([],p)
o=[X.F,P.W]
n=A.a4
l=E.N
k=[l]
j=[A.fO]
m=new S.mD(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.v(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Knight",3,!0,!1)
$.Fp=m
m=P.l(H.a([new E.N($.cu,0.4,!1)],k),l)
i=H.a([],p)
m=new S.o1(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.v(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Seer",6,!0,!1)
$.FB=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kz("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.v(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Bard",9,!0,!1)
$.Fl=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.m1("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.v(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Heir",8,!0,!1)
$.Fo=m
m=H.a([],p)
m=new U.mY(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.v(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Maid",0,!0,!1)
$.Fs=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.nS(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.v(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Rogue",4,!0,!1)
$.Fx=m
m=H.a([],p)
m=new V.nr(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.v(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Page",1,!0,!1)
$.Fv=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.oU(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.v(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Thief",7,!0,!1)
$.FE=m
m=P.l(H.a([new E.N($.cu,0.1,!1)],k),l)
i=H.a([],p)
m=new R.oI(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.v(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Sylph",5,!0,!1)
$.FD=m
m=H.a([],p)
m=new N.nI("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.v(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Prince",10,!0,!1)
$.Fw=m
m=P.l(H.a([new E.N($.cu,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pm("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.v(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Witch",11,!0,!1)
$.FG=m
m=P.l(H.a([new E.N($.cu,0.4,!1)],k),l)
i=H.a([],p)
m=new S.mX("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.v(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Mage",2,!0,!1)
$.Fr=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.l(H.a([new E.N($.cu,3,!1),new E.N($.wx,-2,!1)],k),l)
e=H.a([],p)
m=new E.pi("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.v(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Waste",12,!1,!1)
$.FF=m
m=H.a([],p)
m=new Y.nY("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.v(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Scout",13,!1,!1)
$.Fz=m
m=P.l(H.a([new E.N($.cu,0.5,!1)],k),l)
i=H.a([],p)
m=new L.nZ("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.v(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Scribe",15,!1,!1)
$.FA=m
m=P.l(H.a([new E.N($.cu,0.5,!1)],k),l)
i=H.a([],p)
m=new E.nW(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.v(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Sage",14,!1,!1)
$.Fy=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.m_("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.v(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Guide",16,!1,!1)
$.Fn=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.l(H.a([new E.N($.cu,3,!1)],k),l)
g=H.a([],p)
m=new Y.lZ(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.v(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Grace",17,!1,!1)
$.Fm=m
m=P.l(H.a([new E.N($.cu,0.1,!1)],k),l)
i=H.a([],p)
m=new E.n5("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.v(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Muse",18,!1,!1)
$.Ft=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.J(null,null,n)
h=P.l(H.a([new E.N($.cu,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.mV("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.v(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Lord",19,!1,!1)
$.Fq=m
m=P.l(H.a([new E.N($.cu,-0.1,!1),new E.N($.dz,1,!1)],k),l)
i=H.a([],p)
m=new Y.o8("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.v(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Smith",20,!1,!1)
$.FC=m
$.Fu=T.Fk("Null",255,!1,!0)
m=A.e1
i=P.C
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#00ff00"),!0)
h.j(0,$.b2,L.e("#EFEFEF"),!0)
h.j(0,$.b1,L.e("#DEDEDE"),!0)
h.j(0,$.bb,L.e("#FF2106"),!0)
h.j(0,$.ba,L.e("#B01200"),!0)
h.j(0,$.b4,L.e("#2F2F30"),!0)
h.j(0,$.b5,L.e("#1D1D1D"),!0)
h.j(0,$.b3,L.e("#080808"),!0)
h.j(0,$.b9,L.e("#030303"),!0)
h.j(0,$.b8,L.e("#242424"),!0)
h.j(0,$.b7,L.e("#333333"),!0)
h.j(0,$.b6,L.e("#141414"),!0)
g=P.l(H.a(["Frogs"],p),q)
f=P.l(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.l(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.l(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.l(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.l(H.a([new E.N($.dz,2,!0),new E.N($.eD,1,!0),new E.N($.eE,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new N.oa(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(0,"Space",!0,!1)
$.yh=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#ff0000"),!0)
a.j(0,$.b2,L.e("#FF2106"),!0)
a.j(0,$.b1,L.e("#AD1604"),!0)
a.j(0,$.bb,L.e("#030303"),!0)
a.j(0,$.ba,L.e("#242424"),!0)
a.j(0,$.b4,L.e("#510606"),!0)
a.j(0,$.b5,L.e("#3C0404"),!0)
a.j(0,$.b3,L.e("#1F0000"),!0)
a.j(0,$.b9,L.e("#B70D0E"),!0)
a.j(0,$.b8,L.e("#970203"),!0)
a.j(0,$.b7,L.e("#8E1516"),!0)
a.j(0,$.b6,L.e("#640707"),!0)
b=P.l(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.l(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.l(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.l(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.l(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.l(H.a([new E.N($.hL,2,!0),new E.N($.eE,1,!0),new E.N($.eC,-2,!0)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new N.oV(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(1,"Time",!0,!1)
$.yi=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#3399ff"),!0)
h.j(0,$.b2,L.e("#10E0FF"),!0)
h.j(0,$.b1,L.e("#00A4BB"),!0)
h.j(0,$.bb,L.e("#FEFD49"),!0)
h.j(0,$.ba,L.e("#D6D601"),!0)
h.j(0,$.b4,L.e("#0052F3"),!0)
h.j(0,$.b5,L.e("#0046D1"),!0)
h.j(0,$.b3,L.e("#003396"),!0)
h.j(0,$.b9,L.e("#0087EB"),!0)
h.j(0,$.b8,L.e("#0070ED"),!0)
h.j(0,$.b7,L.e("#006BE1"),!0)
h.j(0,$.b6,L.e("#0054B0"),!0)
g=P.l(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.l(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.l(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.l(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.l(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.l(H.a([new E.N($.eE,2,!0),new E.N($.d6,1,!0),new E.N($.eD,-1,!0),new E.N($.ea,-1,!0),new E.N($.cu,0.05,!1)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new T.kH(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(2,"Breath",!0,!1)
$.y4=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#003300"),!0)
a.j(0,$.b2,L.e("#0F0F0F"),!0)
a.j(0,$.b1,L.e("#010101"),!0)
a.j(0,$.bb,L.e("#E8C15E"),!0)
a.j(0,$.ba,L.e("#C7A140"),!0)
a.j(0,$.b4,L.e("#1E211E"),!0)
a.j(0,$.b5,L.e("#141614"),!0)
a.j(0,$.b3,L.e("#0B0D0B"),!0)
a.j(0,$.b9,L.e("#204020"),!0)
a.j(0,$.b8,L.e("#11200F"),!0)
a.j(0,$.b7,L.e("#192C16"),!0)
a.j(0,$.b6,L.e("#121F10"),!0)
b=P.l(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.l(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.l(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.l(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.l(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.l(H.a([new E.N($.dz,2,!0),new E.N($.eC,1,!0),new E.N($.hL,-1,!0),new E.N($.eD,-1,!0),new E.N($.cu,0.01,!1)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new U.l9(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(3,"Doom",!0,!1)
$.y5=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#993300"),!0)
h.j(0,$.b2,L.e("#BA1016"),!0)
h.j(0,$.b1,L.e("#820B0F"),!0)
h.j(0,$.bb,L.e("#381B76"),!0)
h.j(0,$.ba,L.e("#1E0C47"),!0)
h.j(0,$.b4,L.e("#290704"),!0)
h.j(0,$.b5,L.e("#230200"),!0)
h.j(0,$.b3,L.e("#110000"),!0)
h.j(0,$.b9,L.e("#3D190A"),!0)
h.j(0,$.b8,L.e("#2C1207"),!0)
h.j(0,$.b7,L.e("#5C2913"),!0)
h.j(0,$.b6,L.e("#4C1F0D"),!0)
g=P.l(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.l(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.l(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.l(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.l(H.a([new E.N($.ea,2,!0),new E.N($.d6,1,!0),new E.N($.dz,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new T.kE(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(4,"Blood",!0,!1)
$.y3=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#ff3399"),!0)
a.j(0,$.b2,L.e("#BD1864"),!0)
a.j(0,$.b1,L.e("#780F3F"),!0)
a.j(0,$.bb,L.e("#1D572E"),!0)
a.j(0,$.ba,L.e("#11371D"),!0)
a.j(0,$.b4,L.e("#4C1026"),!0)
a.j(0,$.b5,L.e("#3C0D1F"),!0)
a.j(0,$.b3,L.e("#260914"),!0)
a.j(0,$.b9,L.e("#6B0829"),!0)
a.j(0,$.b8,L.e("#4A0818"),!0)
a.j(0,$.b7,L.e("#55142A"),!0)
a.j(0,$.b6,L.e("#3D0E1E"),!0)
b=P.l(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.l(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.l(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.l(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.l(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.l(H.a([new E.N($.ea,1,!0),new E.ks(null,1,!0)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new T.m0(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(5,"Heart",!0,!1)
$.y7=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#3da35a"),!0)
h.j(0,$.b2,L.e("#06FFC9"),!0)
h.j(0,$.b1,L.e("#04A885"),!0)
h.j(0,$.bb,L.e("#6E0E2E"),!0)
h.j(0,$.ba,L.e("#4A0818"),!0)
h.j(0,$.b4,L.e("#1D572E"),!0)
h.j(0,$.b5,L.e("#164524"),!0)
h.j(0,$.b3,L.e("#11371D"),!0)
h.j(0,$.b9,L.e("#3DA35A"),!0)
h.j(0,$.b8,L.e("#2E7A43"),!0)
h.j(0,$.b7,L.e("#3B7E4F"),!0)
h.j(0,$.b6,L.e("#265133"),!0)
g=P.l(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.l(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.l(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.l(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.l(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.l(H.a([new E.N($.eC,2,!0),new E.N($.hL,1,!0),new E.N($.dz,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new V.n4(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(6,"Mind",!0,!1)
$.yd=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#ff9933"),!0)
a.j(0,$.b2,L.e("#FEFD49"),!0)
a.j(0,$.b1,L.e("#FEC910"),!0)
a.j(0,$.bb,L.e("#10E0FF"),!0)
a.j(0,$.ba,L.e("#00A4BB"),!0)
a.j(0,$.b4,L.e("#FA4900"),!0)
a.j(0,$.b5,L.e("#E94200"),!0)
a.j(0,$.b3,L.e("#C33700"),!0)
a.j(0,$.b9,L.e("#FF8800"),!0)
a.j(0,$.b8,L.e("#D66E04"),!0)
a.j(0,$.b7,L.e("#E76700"),!0)
a.j(0,$.b6,L.e("#CA5B00"),!0)
b=P.l(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.l(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.l(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.l(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.l(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.l(H.a([new E.N($.hK,2,!0),new E.N($.eC,1,!0),new E.N($.d6,-1,!0),new E.N($.eD,-1,!0),new E.N($.cu,0.2,!1)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new G.mH(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(7,"Light",!0,!1)
$.yc=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#000066"),!0)
h.j(0,$.b2,L.e("#0B1030"),!0)
h.j(0,$.b1,L.e("#04091A"),!0)
h.j(0,$.bb,L.e("#CCC4B5"),!0)
h.j(0,$.ba,L.e("#A89F8D"),!0)
h.j(0,$.b4,L.e("#00164F"),!0)
h.j(0,$.b5,L.e("#00103C"),!0)
h.j(0,$.b3,L.e("#00071A"),!0)
h.j(0,$.b9,L.e("#033476"),!0)
h.j(0,$.b8,L.e("#02285B"),!0)
h.j(0,$.b7,L.e("#004CB2"),!0)
h.j(0,$.b6,L.e("#003E91"),!0)
g=P.l(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.l(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.l(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.l(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.l(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.l(H.a([new E.fJ(D.ui(),null,3,!0),new E.fJ(D.ui(),null,-1,!0),new E.N($.hL,-1,!0),new E.N($.cu,0.2,!1)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new Q.ph(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(8,"Void",!0,!1)
$.yj=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#9900cc"),!0)
a.j(0,$.b2,L.e("#974AA7"),!0)
a.j(0,$.b1,L.e("#6B347D"),!0)
a.j(0,$.bb,L.e("#3D190A"),!0)
a.j(0,$.ba,L.e("#2C1207"),!0)
a.j(0,$.b4,L.e("#7C3FBA"),!0)
a.j(0,$.b5,L.e("#6D34A6"),!0)
a.j(0,$.b3,L.e("#592D86"),!0)
a.j(0,$.b9,L.e("#381B76"),!0)
a.j(0,$.b8,L.e("#1E0C47"),!0)
a.j(0,$.b7,L.e("#281D36"),!0)
a.j(0,$.b6,L.e("#1D1526"),!0)
b=P.l(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.l(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.l(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.l(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.l(H.a([new E.N($.hM,2,!0),new E.N($.eE,1,!0),new E.N($.d6,-1,!0),new E.N($.ea,-1,!0),new E.N($.cu,0.01,!1)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new E.nN(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(9,"Rage",!0,!1)
$.yf=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#ffcc66"),!0)
h.j(0,$.b2,L.e("#FDF9EC"),!0)
h.j(0,$.b1,L.e("#D6C794"),!0)
h.j(0,$.bb,L.e("#164524"),!0)
h.j(0,$.ba,L.e("#06280C"),!0)
h.j(0,$.b4,L.e("#FFC331"),!0)
h.j(0,$.b5,L.e("#F7BB2C"),!0)
h.j(0,$.b3,L.e("#DBA523"),!0)
h.j(0,$.b9,L.e("#FFE094"),!0)
h.j(0,$.b8,L.e("#E8C15E"),!0)
h.j(0,$.b7,L.e("#F6C54A"),!0)
h.j(0,$.b6,L.e("#EDAF0C"),!0)
g=P.l(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.l(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.l(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.l(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.l(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.l(H.a([new E.N($.d6,2,!0),new E.N($.hK,1,!0),new E.fJ(D.ui(),null,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new X.m3(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(10,"Hope",!0,!1)
$.y8=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#494132"),!0)
a.j(0,$.b2,L.e("#76C34E"),!0)
a.j(0,$.b1,L.e("#4F8234"),!0)
a.j(0,$.bb,L.e("#00164F"),!0)
a.j(0,$.ba,L.e("#00071A"),!0)
a.j(0,$.b4,L.e("#605542"),!0)
a.j(0,$.b5,L.e("#494132"),!0)
a.j(0,$.b3,L.e("#2D271E"),!0)
a.j(0,$.b9,L.e("#CCC4B5"),!0)
a.j(0,$.b8,L.e("#A89F8D"),!0)
a.j(0,$.b7,L.e("#A29989"),!0)
a.j(0,$.b6,L.e("#918673"),!0)
b=P.l(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.l(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.l(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.l(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.l(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.l(H.a([new E.N($.eD,2,!0),new E.N($.hM,1,!0),new E.N($.dz,-2,!0)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new K.mG(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(11,"Life",!0,!1)
$.yb=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#9630BF"),!0)
h.j(0,$.b2,L.e("#cc87e8"),!0)
h.j(0,$.b1,L.e("#9545b7"),!0)
h.j(0,$.bb,L.e("#ae769b"),!0)
h.j(0,$.ba,L.e("#8f577c"),!0)
h.j(0,$.b4,L.e("#9630bf"),!0)
h.j(0,$.b5,L.e("#693773"),!0)
h.j(0,$.b3,L.e("#4c2154"),!0)
h.j(0,$.b9,L.e("#fcf9bd"),!0)
h.j(0,$.b8,L.e("#e0d29e"),!0)
h.j(0,$.b7,L.e("#bdb968"),!0)
h.j(0,$.b6,L.e("#ab9b55"),!0)
g=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.l(H.a([new E.N($.dz,3,!0),new E.N($.d6,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new Z.la(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(12,"Dream",!1,!1)
$.y6=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#003300"),!0)
a.j(0,$.b2,L.e("#383838"),!0)
a.j(0,$.b1,L.e("#000000"),!0)
a.j(0,$.bb,L.e("#2b1130"),!0)
a.j(0,$.ba,L.e("#130017"),!0)
a.j(0,$.b4,L.e("#eba900"),!0)
a.j(0,$.b5,L.e("#c28900"),!0)
a.j(0,$.b3,L.e("#855900"),!0)
a.j(0,$.b9,L.e("#ffd800"),!0)
a.j(0,$.b8,L.e("#d1a900"),!0)
a.j(0,$.b7,L.e("#44244d"),!0)
a.j(0,$.b6,L.e("#271128"),!0)
b=P.l(H.a(["Law","Courts","Trials","Rules","Edicts","Control","Cones","Order"],p),q)
c=P.l(H.a(["LEGAL LAD","SHERRIF SURESHOT","CONE KOHAI"],p),q)
d=P.l(H.a(["Lawyer","Litigator","Lands","Laborer","Lady","Lad","Lamb","Lawman","Luchador","Lover","Legislacerator"],p),q)
e=P.l(H.a(["Judge","Law Abiding","Legal","Courting","Trail","Edict","Jury","Baliff","Verdict","Sentence","Jail","Executioner"],p),q)
f=P.l(H.a(["Themis","Phoenix","Wright","Jupiter","Dike","Marduk","Fortuna"],p),q)
g=P.l(H.a([new E.N($.eC,2,!0),new E.N($.d6,1,!0),new E.N($.eE,-2,!0),new E.N($.cu,-0.1,!1)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new Q.mE(0.01,0.9,0.1,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death's Lawyer plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["orders","rules","edicts","sentences"],["chains","gavel","caution tape","rule book","dictionary","wig","handbook","lock"],!0,!0,f,g,0.01,0.01,0.01,0.5,14,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(14,"Law",!1,!1)
$.ya=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#00ff00"),!0)
h.j(0,$.b2,L.e("#00ff00"),!0)
h.j(0,$.b1,L.e("#00ff00"),!0)
h.j(0,$.bb,L.e("#00ff00"),!0)
h.j(0,$.ba,L.e("#00cf00"),!0)
h.j(0,$.b4,L.e("#171717"),!0)
h.j(0,$.b5,L.e("#080808"),!0)
h.j(0,$.b3,L.e("#080808"),!0)
h.j(0,$.b9,L.e("#616161"),!0)
h.j(0,$.b8,L.e("#3b3b3b"),!0)
h.j(0,$.b7,L.e("#4a4a4a"),!0)
h.j(0,$.b6,L.e("#292929"),!0)
g=P.l(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
f=P.l(H.a(["Shogun"],p),q)
e=P.l(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
d=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
c=P.l(H.a([new E.N($.hM,13,!0)],k),l)
b=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
b.j(0,$.b0,L.e("#FF9B00"),!0)
b.j(0,$.b2,L.e("#FF9B00"),!0)
b.j(0,$.b1,L.e("#FF8700"),!0)
b.j(0,$.bb,L.e("#7F7F7F"),!0)
b.j(0,$.ba,L.e("#727272"),!0)
b.j(0,$.b4,L.e("#A3A3A3"),!0)
b.j(0,$.b5,L.e("#999999"),!0)
b.j(0,$.b3,L.e("#898989"),!0)
b.j(0,$.b9,L.e("#EFEFEF"),!0)
b.j(0,$.b8,L.e("#DBDBDB"),!0)
b.j(0,$.b7,L.e("#C6C6C6"),!0)
b.j(0,$.b6,L.e("#ADADAD"),!0)
b=new K.nX(13,13,13,h,g,f,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",d,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],c,0.01,0.01,0.01,0.5,13,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!0,1,b,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
b.ah(13,"Sauce",!1,!0)
$.yg=b
b=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
b.j(0,$.b0,L.e("#080808"),!0)
b.j(0,$.b2,L.e("#BA1016"),!0)
b.j(0,$.b1,L.e("#820B0F"),!0)
b.j(0,$.bb,L.e("#381B76"),!0)
b.j(0,$.ba,L.e("#1E0C47"),!0)
b.j(0,$.b4,L.e("#290704"),!0)
b.j(0,$.b5,L.e("#230200"),!0)
b.j(0,$.b3,L.e("#110000"),!0)
b.j(0,$.b9,L.e("#3D190A"),!0)
b.j(0,$.b8,L.e("#2C1207"),!0)
b.j(0,$.b7,L.e("#5C2913"),!0)
b.j(0,$.b6,L.e("#4C1F0D"),!0)
c=P.l(H.a(["Bonds","Unions","Ink","Color","Nostalgia"],p),q)
d=P.l(H.a(["FRIEND HOARDER YOUTH","INKSTERMINATOR","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Investor","Investigator","Idealist","Inhabitant","Innovator","Interpreter"],p),q)
f=P.l(H.a(["Ink","Flow","Charge","Awakening","Friendship","Trusting","Union","Team","Fresh","Vim","Chorus"],p),q)
g=P.l(H.a(["Ink","Hestia","Bastet","Bes","Vesta","Eleos","Frigg","Debella","Juno","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes","Cthulhu","The Kraken","Akkorokamui","Kanaloa"],p),q)
h=P.l(H.a([new E.N($.ea,2,!0),new E.N($.eE,1,!0),new E.N($.dz,-2,!0)],k),l)
m=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
m.j(0,$.b0,L.e("#FF9B00"),!0)
m.j(0,$.b2,L.e("#FF9B00"),!0)
m.j(0,$.b1,L.e("#FF8700"),!0)
m.j(0,$.bb,L.e("#7F7F7F"),!0)
m.j(0,$.ba,L.e("#727272"),!0)
m.j(0,$.b4,L.e("#A3A3A3"),!0)
m.j(0,$.b5,L.e("#999999"),!0)
m.j(0,$.b3,L.e("#898989"),!0)
m.j(0,$.b9,L.e("#EFEFEF"),!0)
m.j(0,$.b8,L.e("#DBDBDB"),!0)
m.j(0,$.b7,L.e("#C6C6C6"),!0)
m.j(0,$.b6,L.e("#ADADAD"),!0)
j=new V.md(0.5,0.5,1,0,b,c,d,e,f,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["ink","friendship","ties","pulse","chain","ocean","festival"],["ink","photo album","friendship bracelet"],g,h,0.01,0.01,0.01,0.5,15,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Ink",null,!1,!1,!1,!1,!0,1,m,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
j.ah(15,"Ink",!1,!1)
$.y9=j
$.ye=L.y2(255,"Null",!1,!0)
j=P.l(H.a([new E.N($.d6,1,!0),new E.N($.hK,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Lyricist","Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass","Instrumentalist"],p)
h=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
g=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
f=H.a(["nobody"],p)
e=P.l(H.a([],k),l)
d=H.a(["Nobody"],p)
c=H.a(["Nobody"],p)
q=new F.n6(j,q,m,h,g,!1,f,e,d,c,1,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"loud","musical","Music")
q.D()
q.E()
B.cQ(q)
$.zf=q
q=P.l(H.a([new E.N($.eC,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist","Ichthyologist","Instructor"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.ko(q,m,j,i,h,!1,g,f,e,d,13,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"nerdy","smart","Academic")
q.D()
q.E()
B.cQ(q)
$.z8=q
q=P.l(H.a([new E.N($.hM,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler","Iceskater"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kt(q,m,j,i,h,!1,g,f,e,d,4,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dumb","athletic","Athletic")
q.D()
q.E()
B.cQ(q)
$.z9=q
q=P.l(H.a([new E.N($.hL,-1,!0),new E.N($.hK,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["LaughMaster","Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor","Imp"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kO(q,m,j,i,h,!1,g,f,e,d,0,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dorky","funny","Comedy")
q.D()
q.E()
B.cQ(q)
$.za=q
q=P.l(H.a([new E.N($.d6,-1,!0),new E.N($.eD,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business","Idealist"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.l0(q,m,j,i,h,!1,g,f,e,d,2,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"pretentious","cultured","Culture")
q.D()
q.E()
B.cQ(q)
$.zb=q
q=P.l(H.a([new E.N($.d6,1,!0),new E.N($.ea,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer","Innkeeper"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.l8(q,m,j,i,h,!1,g,f,e,d,8,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"boring","domestic","Domestic")
q.D()
q.E()
B.cQ(q)
$.zc=q
q=P.l(H.a([new E.N($.hK,1,!0),new E.N($.dz,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Lich","Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart","Illusionist"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lC(q,m,j,i,h,!1,g,f,e,d,7,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"whimpy","imaginative","Fantasy")
q.D()
q.E()
B.cQ(q)
$.zd=q
q=P.l(H.a([new E.N($.hM,1,!0),new E.N($.eD,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Legislator","Legalist","Legislacerator","Lawman","Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel","Investigator"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mB(q,m,j,i,h,!1,g,f,e,d,6,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"harsh","fair-minded","Justice")
q.D()
q.E()
B.cQ(q)
$.ze=q
q=P.l(H.a([new E.N($.eE,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent","Imposter"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nE(q,m,j,i,h,!1,g,f,e,d,9,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"frivolous","geeky","PopCulture")
q.D()
q.E()
B.cQ(q)
$.zh=q
q=P.l(H.a([new E.N($.ea,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team","Idealist"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.nT(q,m,j,i,h,!1,g,f,e,d,12,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"obsessive","romantic","Romantic")
q.D()
q.E()
B.cQ(q)
$.zi=q
q=P.l(H.a([new E.N($.d6,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally","Icebreaker"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.o9(q,m,j,i,h,!1,g,f,e,d,11,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"shallow","extroverted","Social")
q.D()
q.E()
B.cQ(q)
$.zj=q
q=P.l(H.a([new E.N($.ea,-1,!0),new E.N($.d6,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod","Iconoclast","Infidel"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.oN(q,m,j,i,h,!1,g,f,e,d,5,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"terrible","honest","Terrible")
q.D()
q.E()
B.cQ(q)
$.zl=q
q=P.l(H.a([new E.N($.eC,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis","Illustrator"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pr(q,m,j,i,h,!1,g,f,e,d,3,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"wordy","lettered","Writing")
q.D()
q.E()
B.cQ(q)
$.zm=q
q=P.l(H.a([new E.N($.dz,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data","Incinerator"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.oL(q,m,j,i,h,!1,g,f,e,d,10,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"awkward","techy","Technology")
q.D()
q.E()
B.cQ(q)
$.zk=q
q=H.a(["nobody"],p)
l=P.l(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hi(!0,q,l,k,p,-13,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"","","Null")
q.D()
q.E()
B.cQ(q)
$.zg=q
A.wf()
t=3
return P.cJ(Y.n7(),$async$ra)
case 3:case 1:return P.bx(r,s)}})
return P.by($async$ra,s)}},L={
y2:function(a,b,c,d){var t,s,r
t=P.B
s=A.e1
r=P.C
r=new L.aS(P.E(null,null,null,t,s),P.E(null,null,null,r,s),P.E(null,null,null,t,r),P.E(null,null,null,r,t))
r.j(0,$.b0,L.e("#FF9B00"),!0)
r.j(0,$.b2,L.e("#FF9B00"),!0)
r.j(0,$.b1,L.e("#FF8700"),!0)
r.j(0,$.bb,L.e("#7F7F7F"),!0)
r.j(0,$.ba,L.e("#727272"),!0)
r.j(0,$.b4,L.e("#A3A3A3"),!0)
r.j(0,$.b5,L.e("#999999"),!0)
r.j(0,$.b3,L.e("#898989"),!0)
r.j(0,$.b9,L.e("#EFEFEF"),!0)
r.j(0,$.b8,L.e("#DBDBDB"),!0)
r.j(0,$.b7,L.e("#C6C6C6"),!0)
r.j(0,$.b6,L.e("#ADADAD"),!0)
s=[t]
t=new L.fI(0.01,0.01,0.01,0.5,a,new H.v(0,null,null,null,null,null,0,[X.F,P.W]),null,"","",!1,b,null,c,d,!1,!1,!0,1,r,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.N]),H.a([],[A.fO]),Q.J(null,null,A.a4))
t.ah(a,b,c,d)
return t},
e:function(a){if(C.c.ad(a,"#"))return A.v2(C.c.ae(a,1))
else return A.v2(a)},
fI:function fI(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.a=a
_.b=b
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
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nZ:function nZ(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},M={kt:function kt(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fP:function fP(a,b){this.a=a
this.b=b},l0:function l0(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},h6:function h6(){},br:function br(a,b){this.a=a
this.b=b},oe:function oe(a){this.a=a},pm:function pm(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},U={kx:function kx(){},mW:function mW(a){this.a=a},nn:function nn(a){this.a=a},oB:function oB(){},oC:function oC(a){this.a=a},oD:function oD(a){this.a=a},l9:function l9(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,bn,bo,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.a4=a4
_.bn=bn
_.bo=bo
_.a=a
_.b=b
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
_.x1=x1},lC:function lC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},mY:function mY(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
this.a=a},ae:function ae(z,a,b,c,d,e,f,r,x,y){var _=this
_.z=z
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},oU:function oU(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
FS:function(a){if(J.da(a).ad(a," "))return C.c.ae(a,1)
return a},
pn:function pn(a){this.a=a},
po:function po(a,b){this.a=a
this.b=b},
pp:function pp(a,b){this.a=a
this.b=b}},O={kz:function kz(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},c9:function c9(){},dp:function dp(){},kD:function kD(a){this.a=a},eF:function eF(){},ik:function ik(){},
H6:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.u_()
a=J.xV(a,P.dy("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.rp(t))
s=document
J.rx(s.querySelector("#navbar"),"beforeend",a,C.p,null)
if(J.b_(O.GV("seerOfVoid",null),"true"))P.z6(new O.rq(),P.d3)
r=new P.e2(Date.now(),!1)
if(H.u5(r)===4&&H.u4(r)===1)J.uN(s.querySelector("body")).h(0,"voidbody")
q=H.u5(r)
p=H.u4(r)
o=C.a.A(H.wn(r))
n=C.a.A(q)
m=C.a.A(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.jD(null,null)
k.cU(H.fm(l,null,null))
k.hn()
if($.FH||k.a.cE()>0.99)H.kh(s.querySelector("#today"),"$iseT").href=C.c.aq("../",t)+"dead_index.html?seed="+l
else H.kh(s.querySelector("#today"),"$iseT").href=C.c.aq("../",t)+"index2.html?seed="+l},
GV:function(a,b){var t,s,r,q
t=P.wO().gcK().n(0,a)
if(t!=null)t=P.qJ(t,0,J.cm(t),C.o,!1)
if(t!=null)return t
s=$.xy
if(s.length!==0){r=J.xX(window.location.href,J.xS(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.wP(H.xA(s,q,"")+"?"+$.xy,0,null).gcK().n(0,a)}return},
Hi:function(){var t,s,r,q
t=document
J.uN(t.querySelector("body")).h(0,"voidbody")
s=new W.k0(t.querySelectorAll(".void"),[null])
for(t=new H.ew(s,s.gm(s),0,null,[null]);t.F();){r=t.d
q=J.xM(J.rw(r))
if(q==="none"||q.length===0)O.Hc(r)
else O.GX(r)}},
Hc:function(a){var t,s
if(a==null)return
t=J.bG(a)
s=t.gaH(a)
J.uS(s,!!t.$ishJ?"inline":"block")},
GX:function(a){if(a==null)return
J.uS(J.rw(a),"none")},
Hd:function(a){var t,s,r,q
if($.GN)return
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fD("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.eS(s,",")
if(!J.xI(r,a))window.localStorage.setItem(t,H.A(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.cx(q)
P.fD("Saving isn't possible....you don't have local storage")}},
rp:function rp(a){this.a=a},
rq:function rq(){},
ro:function ro(){},
cX:function cX(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={oP:function oP(a){this.a=a},nO:function nO(a){this.a=a},kJ:function kJ(a){this.a=a},lZ:function lZ(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},m_:function m_(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},nj:function nj(b,a){this.b=b
this.a=a},dR:function dR(a,b){this.a=a
this.b=b},a6:function a6(a,b){this.a=a
this.b=b},dd:function dd(r,c,d,e,f,a,b){var _=this
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
_.b=b},i9:function i9(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bD:function bD(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cZ:function cZ(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kM:function kM(c,a,b){this.c=c
this.a=a
this.b=b},bC:function bC(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},hF:function hF(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ix:function ix(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jB:function jB(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},nY:function nY(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},o8:function o8(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},dQ:function dQ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
n7:function(){var t=0,s=P.bt(),r,q
var $async$n7=P.bz(function(a,b){if(a===1)return P.bw(b,s)
while(true)switch(t){case 0:P.fD("loading big bads")
r=$
q=J
t=2
return P.cJ(A.ex("BigBadLists/bigBads.txt",!1,!1,null),$async$n7)
case 2:r.wi=q.eS(b,P.dy("\n|\r",!0,!1))
return P.bx(null,s)}})
return P.by($async$n7,s)},
GG:function(a){var t,s,r,q,p,o
t=J.eS(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.c1)(t),++q){p=t[q]
o=J.bf(p)
r+=" "+(J.y_(o.n(p,0))+o.ae(p,1))}return r}},V={l8:function l8(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lU:function lU(a){this.a=a},md:function md(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},n4:function n4(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},nr:function nr(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},oN:function oN(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yQ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dq(new P.cc(""),0,0)
t.af(a,8)
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
if(!l)break;++n}t.af(n-1,p)
t.af(a,8)}return t.aZ(b)},
yP:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cB(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dZ(a,b)
for(q=e*8,p=0;p<c;){o=r.a6(q)+1
n=r.a6(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.w(s,l)
s[l]=n}p+=o}return s},
rN:function(a){return new V.li(a)},
rM:function(a){return new V.lh(a)},
yM:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dq(new P.cc(""),0,0)
t.af(a,8)
s=d.gcF()
r=C.f.ai(Math.log(H.kd(s.gm(s)))/0.6931471805599453)+1
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
if(!k)break;++m}t.af(m-1,o)
t.af(a,r)}return t.aZ(b)},
yL:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cB(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ai(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dZ(a,b)
for(r=e*8,o=0;o<c;){n=p.a6(r)+1
m=p.a6(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.w(s,k)
s[k]=m}o+=n}return s},
rL:function(a){return new V.lg(a)},
rK:function(a){return new V.lf(a)},
yO:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dq(new P.cc(""),0,0)
t.af(a,8)
s=d.gcF()
r=C.f.ai(Math.log(H.kd(s.gm(s)))/0.6931471805599453)+1
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
if(!l)break;++n}k=C.f.ai(Math.log(n)/0.6931471805599453)+1
t.af(k-1,5)
t.af(n-1,k)
t.af(a,r)}return t.aZ(b)},
yN:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cB(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ai(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dZ(a,b)
for(o=0;o<c;){n=p.a6(p.a6(5)+1)+1
m=p.a6(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
li:function li(a){this.a=a},
lh:function lh(a){this.a=a},
lg:function lg(a){this.a=a},
lf:function lf(a){this.a=a}},Z={la:function la(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
yY:function(){var t,s
if(!$.vl)$.vl=!0
else return
t=[P.B]
s=new Y.oP(H.a([],t))
$.t1=s
Z.cP(s,"txt",null)
Z.cP($.t1,"vert","x-shader/x-vertex")
Z.cP($.t1,"frag","x-shader/x-fragment")
$.yX=new Y.nO(H.a([],t))
$.vn=new Y.kJ(H.a([],t))
s=new B.pw(H.a([],t))
$.vp=s
Z.cP(s,"zip",null)
Z.cP($.vp,"bundle",null)
s=new U.pn(H.a([],t))
$.z5=s
Z.cP(s,"words",null)
s=new Q.nC(H.a([],t))
$.vo=s
Z.cP(s,"png",null)
Z.cP($.vo,"jpg","image/jpeg")
$.z3=new Q.nz(H.a([],t))
s=new M.oe(H.a([],t))
$.z4=s
Z.cP(s,"psprite",null)
s=new V.lU(H.a([],t))
$.t0=s
Z.cP(s,"ttf",null)
Z.cP($.t0,"otf",null)
Z.cP($.t0,"woff",null)
s=new Y.nj(null,H.a([],t))
$.z0=s
Z.cP(s,"obj",null)
s=new U.mW(H.a([],t))
$.yZ=s
Z.cP(s,"mp3",null)
$.z_=new U.oC(H.a([],t))
s=new U.nn(H.a([],t))
$.z1=s
Z.cP(s,"ogg",null)
$.z2=new U.oD(H.a([],t))},
cP:function(a,b,c){$.$get$lV().i(0,b,new Z.il(a,c,[null,null]))
a.a.push(b)},
vm:function(a){var t
if($.$get$lV().Y(0,a)){t=$.$get$lV().n(0,a)
if(t.a instanceof O.c9)return t
throw H.k("File format for extension ."+H.A(a)+" does not match expected types.")}throw H.k("No file format found for extension ."+H.A(a))},
il:function il(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mV:function mV(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
tC:function tC(){},
ty:function ty(){},
tz:function tz(){}},X={im:function im(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},i6:function i6(){},m3:function m3(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
this.c=c}},N={ab:function ab(){},mB:function mB(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nI:function nI(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},nS:function nS(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},o9:function o9(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oa:function oa(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},oV:function oV(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
EP:function(a){var t,s,r,q,p,o,n,m,l
t=J.cK(a)
s=new W.k0(document.querySelectorAll("link"),[null])
for(r=new H.ew(s,s.gm(s),0,null,[null]);r.F();){q=r.d
p=J.ay(q)
if(!!p.$ishp&&q.rel==="stylesheet"){o=$.$get$nx()
H.A(p.gac(q))
o.toString
o=t.length
n=Math.min(o,J.cm(p.gac(q)))
for(m=0;m<n;++m){if(m>=o)return H.w(t,m)
if(t[m]!==J.i4(p.gac(q),m)){l=C.c.ae(t,m)
$.$get$nx().toString
return l.split("/").length-1}continue}}}$.$get$nx().b5(C.m,"Didn't find a css link to derive relative path")
return 0},
u_:function(){var t=P.wO()
if(!$.$get$nw().Y(0,t))$.$get$nw().i(0,t,N.EP(t))
return $.$get$nw().n(0,t)}},E={iz:function iz(){},nm:function nm(){},N:function N(a,b,c){this.a=a
this.b=b
this.c=c},fJ:function fJ(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},ks:function ks(a,b,c){this.a=a
this.b=b
this.c=c},n5:function n5(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},nN:function nN(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},nW:function nW(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},pi:function pi(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},B={m1:function m1(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
if($.$get$mf().Y(0,t))throw H.k("Duplicate aspect id for "+a.A(0)+": "+t+" is already registered for "+J.cK($.$get$mf().n(0,t))+".")
$.$get$mf().i(0,t,a)},
hi:function hi(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
pw:function pw(a){this.a=a},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b){this.a=a
this.b=b},
Gq:function(a){return a.b7(0)},
dA:function dA(a){this.a=a},
jT:function jT(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hS:function hS(a,b){this.a=a
this.b=b}},Q={ma:function ma(){},nC:function nC(a){this.a=a},nz:function nz(a){this.a=a},mE:function mE(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,bn,bo,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.a4=a4
_.bn=bn
_.bo=bo
_.a=a
_.b=b
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
_.x1=x1},nT:function nT(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ph:function ph(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},jA:function jA(){},
J:function(a,b,c){var t=new Q.dW(null,null,[c])
t.d2(a,b,c)
return t},
uu:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.J(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dY(a,"$iso",[e],"$aso"))if(H.dY(a,"$iscT",[e],"$ascT"))for(s=J.db(a.gbT()),r=0;s.F();){q=s.gP()
p=t.b
o=p.length
if(r>=o)return H.w(p,r)
p[r]=q;++r}else for(s=a.gW(a),p=[H.U(t,0)],r=0;s.F();){n=s.gP()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.w(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gW(a),p=[e],o=[H.U(t,0)];s.F();){l=s.gP()
if(H.GI(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.w(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dY(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.w(m,0)
m[0]=l}else throw H.k("Invalid entry type "+H.A(J.uP(l))+" for WeightedList<"+H.A(H.c0(H.dE(e)))+">. Should be "+H.A(H.c0(H.dE(e)))+" or WeightPair<"+H.A(H.c0(H.dE(e)))+">.")}return t},
uv:function(a,b,c,d){return new Q.jQ(J.uQ(a.gbT(),new Q.pl(c,d,b)),null,[c,d])},
cT:function cT(){},
dW:function dW(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hQ:function hQ(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eM:function eM(){},
hP:function hP(){},
pk:function pk(a,$ti){this.a=a
this.$ti=$ti},
jQ:function jQ(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pl:function pl(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function(){var t=0,s=P.bt(),r
var $async$o0=P.bz(function(a,b){if(a===1)return P.bw(b,s)
while(true)switch(t){case 0:t=3
return P.cJ(A.hr("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$o0)
case 3:r=A.hr("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$o0,s)}},G={mH:function mH(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},nE:function nE(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
ys:function(a){var t,s,r,q,p,o,n,m,l
t=G.a0
s=P.tJ(a,t)
r=P.a5(null,null,null,t)
q=H.a([],[G.d])
for(t=G.Eq(),p=J.db(t.a),t=new H.jR(p,t.b,[H.U(t,0)]);t.F();){o=p.gP()
if(o.ec(s))q.push(o)}C.b.ew(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.c1)(q),++n){o=q[n]
if(o.ec(s)){r.h(0,o)
for(p=o.f,m=p.length,l=0;l<p.length;p.length===m||(0,H.c1)(p),++l)s.am(0,p[l])}}if(s.a!==0)r.bL(0,s)
return r},
Eq:function(){var t=$.$get$c()
t.toString
return new H.hR(t,new G.mr(),[H.U(t,0)])},
a0:function a0(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b,c,d){var _=this
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
mr:function mr(){}},F={n6:function n6(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pr:function pr(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Ex:function(a){if(a===C.h){window
return C.i.gap(C.i)}if(a===C.m){window
return C.i.ghK()}if(a===C.Z){window
return C.i.ghb()}return P.GL()},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
tH:function tH(){},
yK:function(a,b,c,d){var t,s,r,q
t=new B.dq(new P.cc(""),0,0)
t.af(a,8)
c.toString
s=H.cR(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bM(s[q])
return t.aZ(b)},
yJ:function(a,b,c,d){var t,s,r,q,p
t=H.cB(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dZ(a,b)
for(q=0;q<c;++q){p=r.bU()
if(q>=t)return H.w(s,q)
s[q]=p}return s},
yI:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dq(new P.cc(""),0,0)
t.af(a,8)
s=d.gcF()
r=C.f.ai(Math.log(H.kd(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cR(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.w(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.w(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bM(o-1)
t.af(a,r)}return t.aZ(b)},
yH:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cB(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ai(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dZ(a,b)
for(o=0;o<c;){n=p.bU()+1
m=p.a6(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
yG:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dq(new P.cc(""),0,0)
t.af(a,8)
c.toString
s=H.cR(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.w(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.w(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bM(p-1)
t.bM(a)}return t.aZ(b)},
yF:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cB(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dZ(a,b)
for(q=0;q<c;){p=r.bU()+1
o=r.bU()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.w(s,m)
s[m]=o}q+=p}return s}},R={
wt:function(a){var t,s
if(a.gm(a).aA(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.ghR(s).gi1().dY("checking for two players, ps is "+H.A(a)+", ret is "+t)
return t},
Fg:function(a){return R.wt(a)&&R.F4(a)},
F1:function(a){a.ga9(a).gbh()
return!1},
Ff:function(a){a.ga9(a).gbh()
return!1},
F4:function(a){a.ga9(a).gbh()
return!1},
Fe:function(a){a.ga9(a).gbh()
return!1},
Fd:function(a){return a.ga9(a).gbi().gi0()},
Fb:function(a){return a.ga9(a).gbi().ghZ()},
F9:function(a){return a.ga9(a).gbi().ghY()},
F5:function(a){return a.ga9(a).gbi().ghW()},
F7:function(a){return a.ga9(a).gbi().ghX()},
Fc:function(a){return a.ga9(a).gbi().gi_()},
F6:function(a){var t=a.ga9(a)
t.gbh()
t.gbh()
return!1},
F8:function(a){return a.ga9(a).ghg()},
Fa:function(a){a.ga9(a).ghg()
return!1},
F2:function(a){return!0},
F3:function(a){a.ga9(a).ghT()
return!1},
nJ:function nJ(){},
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
a3:function a3(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
bE:function bE(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
oI:function oI(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
hd:function hd(){},
tZ:function tZ(){},
tY:function tY(){}},D={oL:function oL(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
FN:function(){var t,s
if($.wy)return
$.wy=!0
t=new D.ck("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
t.y=0
$.wx=t
t=new D.ck("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.FL=t
t=new D.jU(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
t.y=2.5
t.Q=1
$.hM=t
t=new D.jU(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
t.y=2.5
$.eD=t
t=new D.ck("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.FK=t
t=new D.ck("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.eE=t
t=new D.nQ("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.ea=t
t=new D.ck("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.d6=t
t=new D.ck("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.eC=t
t=new D.ck("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.hK=t
t=new D.ck("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.hL=t
t=new D.ck("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.dz=t
t=new D.ck("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.cu=t
t=P.B
s=D.ck
$.FM=H.yu(P.Et($.$get$cG(),new D.og(),new D.oh(),t,s),t,s)},
ui:function(){var t=$.$get$cG()
return new H.hR(t,new D.oi(),[H.U(t,0)])},
og:function og(){},
oh:function oh(){},
oi:function oi(){},
ck:function ck(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
jU:function jU(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
nQ:function nQ(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
var v=[C,H,J,P,W,T,S,K,A,L,M,U,O,Y,V,Z,X,N,E,B,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.tE.prototype={}
J.f.prototype={
R:function(a,b){return a===b},
ga3:function(a){return H.ez(a)},
A:function(a){return H.nG(a)},
gaa:function(a){return new H.dV(H.kg(a),null)},
$ishd:1,
$isac:1,
$isfl:1,
$isac:1,
$ismx:1,
$isf:1,
$ismx:1,
$isf:1,
$ishv:1,
$isac:1}
J.mv.prototype={
A:function(a){return String(a)},
ga3:function(a){return a?519018:218159},
gaa:function(a){return C.ae},
$isd9:1}
J.mw.prototype={
R:function(a,b){return null==b},
A:function(a){return"null"},
ga3:function(a){return 0},
gaa:function(a){return C.a8},
$isd3:1}
J.hn.prototype={
ga3:function(a){return 0},
gaa:function(a){return C.a7},
A:function(a){return String(a)},
$ismx:1,
h:function(a,b){return a.add(b)},
am:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gbS:function(a){return a.left},
gbX:function(a){return a.top},
gb0:function(a){return a.width},
gaV:function(a){return a.height},
hr:function(a,b){return a.parse(b)},
eu:function(a,b){return a.setLogging(b)},
ev:function(a,b){return a.setMaterials(b)}}
J.nB.prototype={}
J.eI.prototype={}
J.eu.prototype={
A:function(a){var t=a[$.$get$v4()]
return t==null?this.eA(a):J.cK(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.es.prototype={
bP:function(a,b){if(!!a.immutable$list)throw H.k(new P.V(b))},
cs:function(a,b){if(!!a.fixed$length)throw H.k(new P.V(b))},
h:function(a,b){this.cs(a,"add")
a.push(b)},
a5:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.k(new P.bR(a))}},
au:function(a,b){return new H.fh(a,b,[H.U(a,0),null])},
bc:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.A(a[r])
if(r>=t)return H.w(s,r)
s[r]=q}return s.join(b)},
cW:function(a,b){return H.wA(a,b,null,H.U(a,0))},
h0:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.k(new P.bR(a))}return s},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
c0:function(a,b,c){if(b<0||b>a.length)throw H.k(P.bF(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.k(H.bs(c))
if(c<b||c>a.length)throw H.k(P.bF(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.U(a,0)])
return H.a(a.slice(b,c),[H.U(a,0)])},
ga9:function(a){if(a.length>0)return a[0]
throw H.k(H.jl())},
gb4:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.k(H.jl())},
a7:function(a,b,c,d,e){var t,s,r
this.bP(a,"setRange")
P.di(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aZ(P.bF(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.k(H.w8())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}},
aw:function(a,b,c,d){return this.a7(a,b,c,d,0)},
bQ:function(a,b,c,d){var t
this.bP(a,"fill range")
P.di(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
az:function(a,b,c,d){var t,s,r,q,p,o
this.cs(a,"replaceRange")
P.di(b,c,a.length,null,null,null)
d=C.c.an(d)
if(typeof c!=="number")return c.aj()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.aw(a,b,r,d)
if(p!==0){this.a7(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a7(a,r,o,a,c)
this.aw(a,b,r,d)}},
fZ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.k(new P.bR(a))}return!0},
cX:function(a,b){var t
this.bP(a,"sort")
t=b==null?P.GK():b
H.jH(a,0,a.length-1,t)},
ew:function(a){return this.cX(a,null)},
aW:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.b_(a[t],b))return t
return-1},
bb:function(a,b){return this.aW(a,b,0)},
ag:function(a,b){var t
for(t=0;t<a.length;++t)if(J.b_(a[t],b))return!0
return!1},
gU:function(a){return a.length===0},
A:function(a){return P.jk(a,"[","]")},
a0:function(a,b){var t=H.a(a.slice(0),[H.U(a,0)])
return t},
an:function(a){return this.a0(a,!0)},
gW:function(a){return new J.i5(a,a.length,0,null,[H.U(a,0)])},
ga3:function(a){return H.ez(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cs(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.e_(b,"newLength",null))
if(b<0)throw H.k(P.bF(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c6(a,b))
if(b>=a.length||b<0)throw H.k(H.c6(a,b))
return a[b]},
i:function(a,b,c){this.bP(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c6(a,b))
if(b>=a.length||b<0)throw H.k(H.c6(a,b))
a[b]=c},
$isaw:1,
$asaw:function(){},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
J.tD.prototype={}
J.i5.prototype={
gP:function(){return this.d},
F:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.k(H.c1(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fg.prototype={
ax:function(a,b){var t
if(typeof b!=="number")throw H.k(H.bs(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcB(b)
if(this.gcB(a)===t)return 0
if(this.gcB(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcB:function(a){return a===0?1/a<0:a<0},
ai:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.k(new P.V(""+a+".floor()"))},
b6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(new P.V(""+a+".round()"))},
ab:function(a,b,c){if(C.a.ax(b,c)>0)throw H.k(H.bs(b))
if(this.ax(a,b)<0)return b
if(this.ax(a,c)>0)return c
return a},
l:function(a){return a},
bw:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.k(P.bF(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.X(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aZ(new P.V("Unexpected toString result: "+t))
r=J.bf(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.aq("0",q)},
A:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga3:function(a){return a&0x1FFFFFFF},
cS:function(a){return-a},
T:function(a,b){if(typeof b!=="number")throw H.k(H.bs(b))
return a+b},
aq:function(a,b){if(typeof b!=="number")throw H.k(H.bs(b))
return a*b},
bA:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
d0:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dF(a,b)},
al:function(a,b){return(a|0)===a?a/b|0:this.dF(a,b)},
dF:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.k(new P.V("Result of truncating division is "+H.A(t)+": "+H.A(a)+" ~/ "+H.A(b)))},
as:function(a,b){if(typeof b!=="number")throw H.k(H.bs(b))
if(b<0)throw H.k(H.bs(b))
return b>31?0:a<<b>>>0},
ao:function(a,b){return b>31?0:a<<b>>>0},
aR:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fv:function(a,b){if(b<0)throw H.k(H.bs(b))
return b>31?0:a>>>b},
dE:function(a,b){return b>31?0:a>>>b},
a1:function(a,b){if(typeof b!=="number")throw H.k(H.bs(b))
return a<b},
aA:function(a,b){if(typeof b!=="number")throw H.k(H.bs(b))
return a>b},
ar:function(a,b){if(typeof b!=="number")throw H.k(H.bs(b))
return a>=b},
gaa:function(a){return C.ah},
$isdn:1}
J.jo.prototype={
gaa:function(a){return C.ag},
$isW:1,
$isdn:1,
$isC:1}
J.jn.prototype={
gaa:function(a){return C.af},
$isW:1,
$isdn:1}
J.et.prototype={
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c6(a,b))
if(b<0)throw H.k(H.c6(a,b))
if(b>=a.length)H.aZ(H.c6(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(b>=a.length)throw H.k(H.c6(a,b))
return a.charCodeAt(b)},
cp:function(a,b,c){if(c>b.length)throw H.k(P.bF(c,0,b.length,null,null))
return new H.qC(b,a,c)},
aS:function(a,b){return this.cp(a,b,0)},
e2:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.k(P.bF(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.X(b,c+s)!==this.a2(a,s))return
return new H.jM(c,b,a)},
T:function(a,b){if(typeof b!=="string")throw H.k(P.e_(b,null,null))
return a+b},
fY:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ae(a,s-t)},
cM:function(a,b,c){return H.xA(a,b,c)},
hD:function(a,b,c){return H.Hf(a,b,c,null)},
ex:function(a,b){if(b==null)H.aZ(H.bs(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hm&&b.gdq().exec("").length-2===0)return a.split(b.gfj())
else return this.f1(a,b)},
az:function(a,b,c,d){var t,s
H.uC(b)
c=P.di(b,c,a.length,null,null,null)
H.uC(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
f1:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.B])
for(s=J.xE(b,a),s=s.gW(s),r=0,q=1;s.F();){p=s.gP()
o=p.gcY(p)
n=p.gdQ(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.K(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ae(a,r))
return t},
aB:function(a,b,c){var t
H.uC(c)
if(typeof c!=="number")return c.a1()
if(c<0||c>a.length)throw H.k(P.bF(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.xT(b,a,c)!=null},
ad:function(a,b){return this.aB(a,b,0)},
K:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.aZ(H.bs(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aZ(H.bs(c))
if(typeof b!=="number")return b.a1()
if(b<0)throw H.k(P.jE(b,null,null))
if(typeof c!=="number")return H.af(c)
if(b>c)throw H.k(P.jE(b,null,null))
if(c>a.length)throw H.k(P.jE(c,null,null))
return a.substring(b,c)},
ae:function(a,b){return this.K(a,b,null)},
hJ:function(a){return a.toUpperCase()},
bd:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a2(t,0)===133){r=J.Er(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.X(t,q)===133?J.tA(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
ed:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.X(t,r)===133)s=J.tA(t,r)}else{s=J.tA(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
aq:function(a,b){var t,s
if(typeof b!=="number")return H.af(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
aW:function(a,b,c){var t
if(c<0||c>a.length)throw H.k(P.bF(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bb:function(a,b){return this.aW(a,b,0)},
hj:function(a,b,c){var t
if(b==null)H.aZ(H.bs(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.aZ(P.bF(t,0,c,null,null))
if(b.c9(a,t)!=null)return t}return-1},
e_:function(a,b){return this.hj(a,b,null)},
dO:function(a,b,c){if(c>a.length)throw H.k(P.bF(c,0,a.length,null,null))
return H.He(a,b,c)},
ag:function(a,b){return this.dO(a,b,0)},
gU:function(a){return a.length===0},
ax:function(a,b){var t
if(typeof b!=="string")throw H.k(H.bs(b))
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
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c6(a,b))
if(b>=a.length||b<0)throw H.k(H.c6(a,b))
return a[b]},
$isaw:1,
$asaw:function(){},
$isB:1}
H.kN.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.X(this.a,b)},
$ashO:function(){return[P.C]},
$asjp:function(){return[P.C]},
$ashE:function(){return[P.C]},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]}}
H.t.prototype={$ast:null}
H.ev.prototype={
gW:function(a){return new H.ew(this,this.gm(this),0,null,[H.aB(this,"ev",0)])},
a5:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.S(0,s))
if(t!==this.gm(this))throw H.k(new P.bR(this))}},
gU:function(a){return this.gm(this)===0},
ga9:function(a){if(this.gm(this)===0)throw H.k(H.jl())
return this.S(0,0)},
ag:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.b_(this.S(0,s),b))return!0
if(t!==this.gm(this))throw H.k(new P.bR(this))}return!1},
au:function(a,b){return new H.fh(this,b,[H.aB(this,"ev",0),null])},
a0:function(a,b){var t,s,r
t=H.a([],[H.aB(this,"ev",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.S(0,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
an:function(a){return this.a0(a,!0)}}
H.oG.prototype={
gf2:function(){var t=J.cm(this.a)
return t},
gfw:function(){var t,s
t=J.cm(this.a)
s=this.b
if(J.cy(s,t))return t
return s},
gm:function(a){var t,s
t=J.cm(this.a)
s=this.b
if(J.uJ(s,t))return 0
if(typeof s!=="number")return H.af(s)
return t-s},
S:function(a,b){var t=J.ed(this.gfw(),b)
if(J.ee(b,0)||J.uJ(t,this.gf2()))throw H.k(P.bv(b,this,"index",null,null))
return J.uM(this.a,t)},
a0:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bf(s)
q=r.gm(s)
if(typeof t!=="number")return H.af(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.S(s,t+m)
if(m>=n.length)return H.w(n,m)
n[m]=o
if(r.gm(s)<q)throw H.k(new P.bR(this))}return n},
an:function(a){return this.a0(a,!0)},
eI:function(a,b,c,d){var t=this.b
if(J.ee(t,0))H.aZ(P.bF(t,0,null,"start",null))}}
H.ew.prototype={
gP:function(){return this.d},
F:function(){var t,s,r,q
t=this.a
s=J.bf(t)
r=s.gm(t)
if(this.b!==r)throw H.k(new P.bR(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.S(t,q);++this.c
return!0}}
H.hu.prototype={
gW:function(a){return new H.jr(null,J.db(this.a),this.b,this.$ti)},
gm:function(a){return J.cm(this.a)},
gU:function(a){return J.rv(this.a)},
$aso:function(a,b){return[b]}}
H.fY.prototype={$ist:1,
$ast:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.jr.prototype={
F:function(){var t=this.b
if(t.F()){this.a=this.c.$1(t.gP())
return!0}this.a=null
return!1},
gP:function(){return this.a},
$asjm:function(a,b){return[b]}}
H.fh.prototype={
gm:function(a){return J.cm(this.a)},
S:function(a,b){return this.b.$1(J.uM(this.a,b))},
$asev:function(a,b){return[b]},
$ast:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.hR.prototype={
gW:function(a){return new H.jR(J.db(this.a),this.b,this.$ti)},
au:function(a,b){return new H.hu(this,b,[H.U(this,0),null])}}
H.jR.prototype={
F:function(){var t,s
for(t=this.a,s=this.b;t.F();)if(s.$1(t.gP())===!0)return!0
return!1},
gP:function(){return this.a.gP()}}
H.iw.prototype={
sm:function(a,b){throw H.k(new P.V("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.k(new P.V("Cannot add to a fixed-length list"))},
az:function(a,b,c,d){throw H.k(new P.V("Cannot remove from a fixed-length list"))}}
H.p4.prototype={
i:function(a,b,c){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.k(new P.V("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.k(new P.V("Cannot add to an unmodifiable list"))},
a7:function(a,b,c,d,e){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
aw:function(a,b,c,d){return this.a7(a,b,c,d,0)},
az:function(a,b,c,d){throw H.k(new P.V("Cannot remove from an unmodifiable list"))},
bQ:function(a,b,c,d){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
H.hO.prototype={$asp:null,$ast:null,$aso:null,$isp:1,$ist:1,$iso:1}
H.rs.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rt.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qk.prototype={}
H.fw.prototype={
dK:function(a,b){if(!this.f.R(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cn()},
hC:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.am(0,a)
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
if(q===s.c)s.di();++s.d}this.y=!1}this.cn()},
fC:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ay(a),s=0;r=this.ch,s<r.length;s+=2)if(t.R(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.w(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hA:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ay(a),s=0;r=this.ch,s<r.length;s+=2)if(t.R(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aZ(new P.V("removeRange"))
P.di(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
es:function(a,b){if(!this.r.R(0,a))return
this.db=b},
h6:function(a,b,c){var t=J.ay(b)
if(!t.R(b,0))t=t.R(b,1)&&!this.cy
else t=!0
if(t){J.fF(a,c)
return}t=this.cx
if(t==null){t=P.tK(null,null)
this.cx=t}t.aI(0,new H.qf(a,c))},
h5:function(a,b){var t
if(!this.r.R(0,a))return
t=J.ay(b)
if(!t.R(b,0))t=t.R(b,1)&&!this.cy
else t=!0
if(t){this.bR()
return}t=this.cx
if(t==null){t=P.tK(null,null)
this.cx=t}t.aI(0,this.ghi())},
h7:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fD(a)
if(b!=null)P.fD(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cK(a)
s[1]=b==null?null:J.cK(b)
for(r=new P.dB(t,t.r,null,null,[null]),r.c=t.e;r.F();)J.fF(r.d,s)},
bm:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.cx(o)
p=H.cw(o)
this.h7(q,p)
if(this.db===!0){this.bR()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghh()
if(this.cx!=null)for(;n=this.cx,!n.gU(n);)this.cx.e7().$0()}return s},
cD:function(a){return this.b.n(0,a)},
d4:function(a,b){var t=this.b
if(t.Y(0,a))throw H.k(P.lk("Registry: ports must be registered only once."))
t.i(0,a,b)},
cn:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bR()},
bR:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.b9(0)
for(t=this.b,s=t.gbY(t),s=s.gW(s);s.F();)s.gP().eV()
t.b9(0)
this.c.b9(0)
u.globalState.z.am(0,this.a)
this.dx.b9(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.w(t,p)
J.fF(q,t[p])}this.ch=null}},
ghh:function(){return this.d},
gfN:function(){return this.e}}
H.qf.prototype={
$0:function(){J.fF(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.pR.prototype={
fS:function(){var t=this.a
if(t.b===t.c)return
return t.e7()},
eb:function(){var t,s,r
t=this.fS()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.Y(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gU(s)}else s=!1
else s=!1
else s=!1
if(s)H.aZ(P.lk("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gU(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hq(["command","close"])
r=new H.dC(!0,new P.k4(0,null,null,null,null,null,0,[null,P.C])).av(r)
s.toString
self.postMessage(r)}return!1}t.hx()
return!0},
dz:function(){if(self.window!=null)new H.pS(this).$0()
else for(;this.eb(););},
bv:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dz()
else try{this.dz()}catch(r){t=H.cx(r)
s=H.cw(r)
q=u.globalState.Q
p=P.hq(["command","error","msg",H.A(t)+"\n"+H.A(s)])
p=new H.dC(!0,P.hY(null,P.C)).av(p)
q.toString
self.postMessage(p)}}}
H.pS.prototype={
$0:function(){if(!this.a.eb())return
P.wB(C.q,this)},
$S:function(){return{func:1,v:true}}}
H.eP.prototype={
hx:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bm(this.b)}}
H.qj.prototype={}
H.mg.prototype={
$0:function(){H.zq(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mh.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fC(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fC(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cn()},
$S:function(){return{func:1,v:true}}}
H.pE.prototype={}
H.fx.prototype={
b2:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdn())return
r=H.Gm(b)
if(t.gfN()===s){s=J.bf(r)
switch(s.n(r,0)){case"pause":t.dK(s.n(r,1),s.n(r,2))
break
case"resume":t.hC(s.n(r,1))
break
case"add-ondone":t.fC(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.hA(s.n(r,1))
break
case"set-errors-fatal":t.es(s.n(r,1),s.n(r,2))
break
case"ping":t.h6(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.h5(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.am(0,s)
break}return}u.globalState.f.a.aI(0,new H.eP(t,new H.qm(this,r),"receive"))},
R:function(a,b){if(b==null)return!1
return b instanceof H.fx&&J.b_(this.b,b.b)},
ga3:function(a){return this.b.gcc()}}
H.qm.prototype={
$0:function(){var t=this.a.b
if(!t.gdn())t.eR(0,this.b)},
$S:function(){return{func:1}}}
H.i0.prototype={
b2:function(a,b){var t,s,r
t=P.hq(["command","message","port",this,"msg",b])
s=new H.dC(!0,P.hY(null,P.C)).av(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
R:function(a,b){if(b==null)return!1
return b instanceof H.i0&&J.b_(this.b,b.b)&&J.b_(this.a,b.a)&&J.b_(this.c,b.c)},
ga3:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.as()
s=this.a
if(typeof s!=="number")return s.as()
r=this.c
if(typeof r!=="number")return H.af(r)
return(t<<16^s<<8^r)>>>0}}
H.fo.prototype={
eV:function(){this.c=!0
this.b=null},
eR:function(a,b){if(this.c)return
this.b.$1(b)},
$isFh:1,
gcc:function(){return this.a},
gdn:function(){return this.c}}
H.oX.prototype={
eJ:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aI(0,new H.eP(s,new H.oY(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dl(new H.oZ(this,b),0),a)}else throw H.k(new P.V("Timer greater than 0."))}}
H.oY.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.oZ.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dH.prototype={
ga3:function(a){var t=this.a
if(typeof t!=="number")return t.cV()
t=C.d.aR(t,0)^C.d.al(t,4294967296)
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
gcc:function(){return this.a}}
H.dC.prototype={
av:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.ay(a)
if(!!t.$isfi)return["buffer",a]
if(!!t.$isey)return["typed",a]
if(!!t.$isaw)return this.eo(a)
if(!!t.$iszn){r=this.gel()
q=t.gcC(a)
q=H.dv(q,r,H.aB(q,"o",0),null)
q=P.d2(q,!0,H.aB(q,"o",0))
t=t.gbY(a)
t=H.dv(t,r,H.aB(t,"o",0),null)
return["map",q,P.d2(t,!0,H.aB(t,"o",0))]}if(!!t.$ismx)return this.ep(a)
if(!!t.$isf)this.ee(a)
if(!!t.$isFh)this.by(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfx)return this.eq(a)
if(!!t.$isi0)return this.er(a)
if(!!t.$iseY){p=a.$static_name
if(p==null)this.by(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdH)return["capability",a.a]
if(!(a instanceof P.ac))this.ee(a)
return["dart",u.classIdExtractor(a),this.en(u.classFieldsExtractor(a))]},
by:function(a,b){throw H.k(new P.V((b==null?"Can't transmit:":b)+" "+H.A(a)))},
ee:function(a){return this.by(a,null)},
eo:function(a){var t=this.em(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.by(a,"Can't serialize indexable: ")},
em:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.av(a[s])
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
en:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.av(a[t]))
return a},
ep:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.by(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.av(a[t[r]])
if(r>=s.length)return H.w(s,r)
s[r]=q}return["js-object",t,s]},
er:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eq:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcc()]
return["raw sendport",a]}}
H.eN.prototype={
aT:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.k(P.dG("Bad serialized message: "+H.A(a)))
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
s=H.a(this.bk(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bk(r),[null])
case"mutable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return this.bk(r)
case"const":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bk(r),[null])
s.fixed$length=Array
return s
case"map":return this.fW(a)
case"sendport":return this.fX(a)
case"raw sendport":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.fV(a)
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
this.bk(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.k("couldn't deserialize: "+H.A(a))}},
bk:function(a){var t,s,r
t=J.bf(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.af(r)
if(!(s<r))break
t.i(a,s,this.aT(t.n(a,s)));++s}return a},
fW:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q=P.mM()
this.b.push(q)
s=J.xY(J.uQ(s,this.gfU()))
for(t=J.bf(s),p=J.bf(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aT(p.n(r,o)))
return q},
fX:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
if(3>=t)return H.w(a,3)
q=a[3]
if(J.b_(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cD(q)
if(o==null)return
n=new H.fx(o,r)}else n=new H.i0(s,q,r)
this.b.push(n)
return n},
fV:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bf(s)
p=J.bf(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.af(n)
if(!(o<n))break
q[t.n(s,o)]=this.aT(p.n(r,o));++o}return q}}
H.kR.prototype={
$aseJ:function(){},
$asjq:function(){},
$asbe:function(){},
$isbe:1}
H.kQ.prototype={
gU:function(a){return this.gm(this)===0},
A:function(a){return P.wg(this)},
i:function(a,b,c){return H.yv()},
$isbe:1,
$asbe:null}
H.fT.prototype={
gm:function(a){return this.a},
Y:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.Y(0,b))return
return this.cb(b)},
cb:function(a){return this.b[a]},
a5:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.cb(q))}}}
H.kS.prototype={
Y:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!0
return this.b.hasOwnProperty(b)},
cb:function(a){return"__proto__"===a?this.d:this.b[a]}}
H.nP.prototype={}
H.p1.prototype={
aD:function(a){var t,s,r
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
H.jx.prototype={
A:function(a){var t=this.b
if(t==null)return"NullError: "+H.A(this.a)
return"NullError: method not found: '"+H.A(t)+"' on null"}}
H.mA.prototype={
A:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.A(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.A(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.A(this.a)+")"}}
H.p3.prototype={
A:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h5.prototype={
gaG:function(){return this.b}}
H.ru.prototype={
$1:function(a){if(!!J.ay(a).$isei)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.k7.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rg.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rh.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.ri.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rj.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.rk.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eY.prototype={
A:function(a){return"Closure '"+H.nH(this).trim()+"'"},
ghP:function(){return this},
$D:null}
H.oK.prototype={}
H.of.prototype={
A:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fM.prototype={
R:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fM))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga3:function(a){var t,s
t=this.c
if(t==null)s=H.ez(this.a)
else s=typeof t!=="object"?J.dF(t):H.ez(t)
t=H.ez(this.b)
if(typeof s!=="number")return s.hS()
return(s^t)>>>0},
A:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.A(this.d)+"' of "+H.nG(t)}}
H.kL.prototype={
A:function(a){return this.a}}
H.nU.prototype={
A:function(a){return"RuntimeError: "+H.A(this.a)}}
H.dV.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga3:function(a){return J.dF(this.a)},
R:function(a,b){if(b==null)return!1
return b instanceof H.dV&&J.b_(this.a,b.a)}}
H.v.prototype={
gm:function(a){return this.a},
gU:function(a){return this.a===0},
gcC:function(a){return new H.mK(this,[H.U(this,0)])},
gbY:function(a){return H.dv(this.gcC(this),new H.mz(this),H.U(this,0),H.U(this,1))},
Y:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dd(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dd(s,b)}else return this.hc(b)},
hc:function(a){var t=this.d
if(t==null)return!1
return this.br(this.bD(t,this.bq(a)),a)>=0},
bL:function(a,b){b.a5(0,new H.my(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bg(t,b)
return s==null?null:s.gaU()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bg(r,b)
return s==null?null:s.gaU()}else return this.hd(b)},
hd:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bD(t,this.bq(a))
r=this.br(s,a)
if(r<0)return
return s[r].gaU()},
i:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.ce()
this.b=t}this.d3(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.ce()
this.c=s}this.d3(s,b,c)}else this.hf(b,c)},
hf:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.ce()
this.d=t}s=this.bq(a)
r=this.bD(t,s)
if(r==null)this.cl(t,s,[this.cf(a,b)])
else{q=this.br(r,a)
if(q>=0)r[q].saU(b)
else r.push(this.cf(a,b))}},
am:function(a,b){if(typeof b==="string")return this.dw(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dw(this.c,b)
else return this.he(b)},
he:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bD(t,this.bq(a))
r=this.br(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dH(q)
return q.gaU()},
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
d3:function(a,b,c){var t=this.bg(a,b)
if(t==null)this.cl(a,b,this.cf(b,c))
else t.saU(c)},
dw:function(a,b){var t
if(a==null)return
t=this.bg(a,b)
if(t==null)return
this.dH(t)
this.dg(a,b)
return t.gaU()},
cf:function(a,b){var t,s
t=new H.mJ(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dH:function(a){var t,s
t=a.gfo()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bq:function(a){return J.dF(a)&0x3ffffff},
br:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].gdX(),b))return s
return-1},
A:function(a){return P.wg(this)},
bg:function(a,b){return a[b]},
bD:function(a,b){return a[b]},
cl:function(a,b,c){a[b]=c},
dg:function(a,b){delete a[b]},
dd:function(a,b){return this.bg(a,b)!=null},
ce:function(){var t=Object.create(null)
this.cl(t,"<non-identifier-key>",t)
this.dg(t,"<non-identifier-key>")
return t},
$iszn:1,
$isbe:1,
$asbe:null}
H.mz.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.my.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eR(function(a,b){return{func:1,args:[a,b]}},this.a,"v")}}
H.mJ.prototype={
gdX:function(){return this.a},
gaU:function(){return this.b},
gfo:function(){return this.d},
saU:function(a){return this.b=a}}
H.mK.prototype={
gm:function(a){return this.a.a},
gU:function(a){return this.a.a===0},
gW:function(a){var t,s
t=this.a
s=new H.mL(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
ag:function(a,b){return this.a.Y(0,b)},
a5:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.k(new P.bR(t))
s=s.c}}}
H.mL.prototype={
gP:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bR(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rc.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rd.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.B]}}}
H.re.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.B]}}}
H.hm.prototype={
A:function(a){return"RegExp/"+this.a+"/"},
gdr:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.tB(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdq:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.tB(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cp:function(a,b,c){if(c>b.length)throw H.k(P.bF(c,0,b.length,null,null))
return new H.pz(this,b,c)},
aS:function(a,b){return this.cp(a,b,0)},
f3:function(a,b){var t,s
t=this.gdr()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.k5(this,s)},
c9:function(a,b){var t,s
t=this.gdq()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.w(s,-1)
if(s.pop()!=null)return
return new H.k5(this,s)},
e2:function(a,b,c){if(c<0||c>b.length)throw H.k(P.bF(c,0,b.length,null,null))
return this.c9(b,c)},
$isFj:1,
gfj:function(){return this.b}}
H.k5.prototype={
gcY:function(a){return this.b.index},
gdQ:function(a){var t=this.b
return t.index+t[0].length},
b7:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.w(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
$isdw:1}
H.pz.prototype={
gW:function(a){return new H.jW(this.a,this.b,this.c,null)},
$ashl:function(){return[P.dw]},
$aso:function(){return[P.dw]}}
H.jW.prototype={
gP:function(){return this.d},
F:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.f3(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jM.prototype={
gdQ:function(a){return this.a+this.c.length},
n:function(a,b){return this.b7(b)},
b7:function(a){if(a!==0)throw H.k(P.jE(a,null,null))
return this.c},
$isdw:1,
gcY:function(a){return this.a}}
H.qC.prototype={
gW:function(a){return new H.qD(this.a,this.b,this.c,null)},
$aso:function(){return[P.dw]}}
H.qD.prototype={
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
this.d=new H.jM(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gP:function(){return this.d}}
H.fi.prototype={
gaa:function(a){return C.a0},
fI:function(a,b,c){return H.cR(a,b,c)},
fH:function(a){return this.fI(a,0,null)},
fG:function(a,b,c){var t
H.x8(a,b,c)
t=new DataView(a,b)
return t},
fF:function(a,b){return this.fG(a,b,null)},
$isfi:1,
$isbg:1,
ge0:function(a){return a.byteLength}}
H.ey.prototype={
fg:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.e_(b,d,"Invalid list position"))
else throw H.k(P.bF(b,0,c,d,null))},
d7:function(a,b,c,d){if(b>>>0!==b||b>c)this.fg(a,b,c,d)},
$isey:1,
gbN:function(a){return a.buffer},
ge0:function(a){return a.byteLength}}
H.n8.prototype={
gaa:function(a){return C.a1}}
H.ju.prototype={
gm:function(a){return a.length},
dD:function(a,b,c,d,e){var t,s,r
t=a.length
this.d7(a,b,t,"start")
this.d7(a,c,t,"end")
if(typeof b!=="number")return b.aA()
if(typeof c!=="number")return H.af(c)
if(b>c)throw H.k(P.bF(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a1()
if(e<0)throw H.k(P.dG(e))
r=d.length
if(r-e<s)throw H.k(new P.dT("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaG:1,
$asaG:function(){},
$isaw:1,
$asaw:function(){}}
H.hy.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c6(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aZ(H.c6(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.ay(d).$ishy){this.dD(a,b,c,d,e)
return}this.d_(a,b,c,d,e)},
aw:function(a,b,c,d){return this.a7(a,b,c,d,0)}}
H.hA.prototype={
$asaG:function(){},
$asaw:function(){},
$asp:function(){return[P.W]},
$ast:function(){return[P.W]},
$aso:function(){return[P.W]},
$isp:1,
$ist:1,
$iso:1}
H.hC.prototype={
$asaG:function(){},
$asaw:function(){},
$asp:function(){return[P.W]},
$ast:function(){return[P.W]},
$aso:function(){return[P.W]}}
H.hz.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aZ(H.c6(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.ay(d).$ishz){this.dD(a,b,c,d,e)
return}this.d_(a,b,c,d,e)},
aw:function(a,b,c,d){return this.a7(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.hB.prototype={
$asaG:function(){},
$asaw:function(){},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]},
$isp:1,
$ist:1,
$iso:1}
H.hD.prototype={
$asaG:function(){},
$asaw:function(){},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]}}
H.n9.prototype={
gaa:function(a){return C.a2},
$isp:1,
$asp:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$iso:1,
$aso:function(){return[P.W]}}
H.na.prototype={
gaa:function(a){return C.a3},
$isp:1,
$asp:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$iso:1,
$aso:function(){return[P.W]}}
H.nb.prototype={
gaa:function(a){return C.a4},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c6(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nc.prototype={
gaa:function(a){return C.a5},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c6(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nd.prototype={
gaa:function(a){return C.a6},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c6(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.ne.prototype={
gaa:function(a){return C.aa},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c6(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.nf.prototype={
gaa:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c6(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.jv.prototype={
gaa:function(a){return C.ac},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c6(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
H.fj.prototype={
gaa:function(a){return C.ad},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c6(a,b))
return a[b]},
c0:function(a,b,c){return new Uint8Array(a.subarray(b,H.Gl(b,c,a.length)))},
$isfj:1,
$isd8:1,
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
P.pB.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pA.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.pC.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.pD.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qR.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qS.prototype={
$2:function(a,b){this.a.$2(1,new H.h5(a,b))},
$S:function(){return{func:1,args:[,P.dS]}}}
P.r1.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.C,,]}}}
P.cD.prototype={}
P.r2.prototype={
$0:function(){var t,s,r
try{this.b.aC(this.a.$0())}catch(r){t=H.cx(r)
s=H.cw(r)
P.x9(this.b,t,s)}},
$S:function(){return{func:1}}}
P.lX.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.ak(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.ak(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.lW.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.w(r,t)
r[t]=a
if(s===0)this.d.dc(r)}else if(t.b===0&&!this.b)this.d.ak(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.eZ.prototype={}
P.jY.prototype={
ct:function(a,b){if(a==null)a=new P.fk()
if(this.a.a!==0)throw H.k(new P.dT("Future already completed"))
$.an.toString
this.ak(a,b)},
bj:function(a){return this.ct(a,null)},
$iseZ:1,
gh3:function(){return this.a}}
P.dX.prototype={
ay:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.dT("Future already completed"))
t.d5(b)},
fL:function(a){return this.ay(a,null)},
ak:function(a,b){this.a.d6(a,b)}}
P.k9.prototype={
ay:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.dT("Future already completed"))
t.aC(b)},
ak:function(a,b){this.a.ak(a,b)}}
P.k1.prototype={
gfB:function(){return this.b.b},
gdT:function(){return(this.c&1)!==0},
gha:function(){return(this.c&2)!==0},
gdS:function(){return this.c===8},
h8:function(a){return this.b.b.cN(this.d,a)},
hk:function(a){if(this.c!==6)return!0
return this.b.b.cN(this.d,J.fE(a))},
h4:function(a){var t,s,r
t=this.e
s=J.bG(a)
r=this.b.b
if(H.fC(t,{func:1,args:[,,]}))return r.hG(t,s.gap(a),a.gaG())
else return r.cN(t,s.gap(a))},
h9:function(){return this.b.b.e9(this.d)},
gcg:function(){return this.a}}
P.bk.prototype={
gfh:function(){return this.a===2},
gcd:function(){return this.a>=4},
bW:function(a,b){var t=$.an
if(t!==C.e){t.toString
if(b!=null)b=P.xc(b,t)}return this.cm(a,b)},
aY:function(a){return this.bW(a,null)},
cm:function(a,b){var t,s
t=new P.bk(0,$.an,null,[null])
s=b==null?1:3
this.c1(new P.k1(null,t,s,a,b,[H.U(this,0),null]))
return t},
bZ:function(a){var t,s
t=$.an
s=new P.bk(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.U(this,0)
this.c1(new P.k1(null,s,8,a,null,[t,t]))
return s},
c1:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcd()){s.c1(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fA(null,null,t,new P.pX(this,a))}},
dv:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcg()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcd()){p.dv(a)
return}this.a=p.a
this.c=p.c}t.a=this.bI(a)
s=this.b
s.toString
P.fA(null,null,s,new P.q4(t,this))}},
bH:function(){var t=this.c
this.c=null
return this.bI(t)},
bI:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcg()
t.a=s}return s},
aC:function(a){var t,s
t=this.$ti
if(H.dY(a,"$iscD",t,"$ascD"))if(H.dY(a,"$isbk",t,null))P.q_(a,this)
else P.wZ(a,this)
else{s=this.bH()
this.a=4
this.c=a
P.fv(this,s)}},
dc:function(a){var t=this.bH()
this.a=4
this.c=a
P.fv(this,t)},
ak:function(a,b){var t=this.bH()
this.a=8
this.c=new P.eU(a,b)
P.fv(this,t)},
eX:function(a){return this.ak(a,null)},
d5:function(a){var t
if(H.dY(a,"$iscD",this.$ti,"$ascD")){this.eU(a)
return}this.a=1
t=this.b
t.toString
P.fA(null,null,t,new P.pZ(this,a))},
eU:function(a){var t
if(H.dY(a,"$isbk",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fA(null,null,t,new P.q3(this,a))}else P.q_(a,this)
return}P.wZ(a,this)},
d6:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fA(null,null,t,new P.pY(this,a,b))},
$iscD:1,
gbJ:function(){return this.a},
gfs:function(){return this.c}}
P.pX.prototype={
$0:function(){P.fv(this.a,this.b)},
$S:function(){return{func:1}}}
P.q4.prototype={
$0:function(){P.fv(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.q0.prototype={
$1:function(a){var t=this.a
t.a=0
t.aC(a)},
$S:function(){return{func:1,args:[,]}}}
P.q1.prototype={
$2:function(a,b){this.a.ak(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.q2.prototype={
$0:function(){this.a.ak(this.b,this.c)},
$S:function(){return{func:1}}}
P.pZ.prototype={
$0:function(){this.a.dc(this.b)},
$S:function(){return{func:1}}}
P.q3.prototype={
$0:function(){P.q_(this.b,this.a)},
$S:function(){return{func:1}}}
P.pY.prototype={
$0:function(){this.a.ak(this.b,this.c)},
$S:function(){return{func:1}}}
P.q7.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.h9()}catch(q){s=H.cx(q)
r=H.cw(q)
if(this.c){p=J.fE(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eU(s,r)
o.a=!0
return}if(!!J.ay(t).$iscD){if(t instanceof P.bk&&t.gbJ()>=4){if(t.gbJ()===8){p=this.b
p.b=t.gfs()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.aY(new P.q8(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.q8.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.q6.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.h8(this.c)}catch(r){t=H.cx(r)
s=H.cw(r)
q=this.a
q.b=new P.eU(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.q5.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hk(t)===!0&&q.e!=null){p=this.b
p.b=q.h4(t)
p.a=!1}}catch(o){s=H.cx(o)
r=H.cw(o)
q=this.a
p=J.fE(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eU(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.jX.prototype={}
P.dj.prototype={
au:function(a,b){return new P.ql(b,this,[H.aB(this,"dj",0),null])},
ag:function(a,b){var t,s
t={}
s=new P.bk(0,$.an,null,[P.d9])
t.a=null
t.a=this.aL(new P.on(t,this,b,s),!0,new P.oo(s),s.gb8())
return s},
a5:function(a,b){var t,s
t={}
s=new P.bk(0,$.an,null,[null])
t.a=null
t.a=this.aL(new P.ot(t,this,b,s),!0,new P.ou(s),s.gb8())
return s},
gm:function(a){var t,s
t={}
s=new P.bk(0,$.an,null,[P.C])
t.a=0
this.aL(new P.ox(t),!0,new P.oy(t,s),s.gb8())
return s},
gU:function(a){var t,s
t={}
s=new P.bk(0,$.an,null,[P.d9])
t.a=null
t.a=this.aL(new P.ov(t,s),!0,new P.ow(s),s.gb8())
return s},
an:function(a){var t,s,r
t=H.aB(this,"dj",0)
s=H.a([],[t])
r=new P.bk(0,$.an,null,[[P.p,t]])
this.aL(new P.oz(this,s),!0,new P.oA(s,r),r.gb8())
return r},
ga9:function(a){var t,s
t={}
s=new P.bk(0,$.an,null,[H.aB(this,"dj",0)])
t.a=null
t.a=this.aL(new P.op(t,this,s),!0,new P.oq(s),s.gb8())
return s}}
P.on.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xg(new P.ol(this.c,a),new P.om(t,s),P.x7(t.a,s))},
$S:function(){return H.eR(function(a){return{func:1,args:[a]}},this.b,"dj")}}
P.ol.prototype={
$0:function(){return J.b_(this.b,this.a)},
$S:function(){return{func:1}}}
P.om.prototype={
$1:function(a){if(a===!0)P.uz(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.d9]}}}
P.oo.prototype={
$0:function(){this.a.aC(!1)},
$S:function(){return{func:1}}}
P.ot.prototype={
$1:function(a){P.xg(new P.or(this.c,a),new P.os(),P.x7(this.a.a,this.d))},
$S:function(){return H.eR(function(a){return{func:1,args:[a]}},this.b,"dj")}}
P.or.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.os.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.ou.prototype={
$0:function(){this.a.aC(null)},
$S:function(){return{func:1}}}
P.ox.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.oy.prototype={
$0:function(){this.b.aC(this.a.a)},
$S:function(){return{func:1}}}
P.ov.prototype={
$1:function(a){P.uz(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.ow.prototype={
$0:function(){this.a.aC(!0)},
$S:function(){return{func:1}}}
P.oz.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eR(function(a){return{func:1,args:[a]}},this.a,"dj")}}
P.oA.prototype={
$0:function(){this.b.aC(this.a)},
$S:function(){return{func:1}}}
P.op.prototype={
$1:function(a){P.uz(this.a.a,this.c,a)},
$S:function(){return H.eR(function(a){return{func:1,args:[a]}},this.b,"dj")}}
P.oq.prototype={
$0:function(){var t,s,r,q
try{r=H.jl()
throw H.k(r)}catch(q){t=H.cx(q)
s=H.cw(q)
P.x9(this.a,t,s)}},
$S:function(){return{func:1}}}
P.ok.prototype={}
P.dk.prototype={
cG:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dL()
if((t&4)===0&&(this.e&32)===0)this.dj(this.gdt())},
e5:function(a){return this.cG(a,null)},
e8:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gU(t)}else t=!1
if(t)this.r.c_(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dj(this.gdu())}}}},
bO:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.c3()
t=this.f
return t==null?$.$get$he():t},
c3:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dL()
if((this.e&32)===0)this.r=null
this.f=this.ds()},
bC:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dA(b)
else this.c2(new P.pL(b,null,[H.aB(this,"dk",0)]))},
bB:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dC(a,b)
else this.c2(new P.pN(a,b,null))},
eT:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dB()
else this.c2(C.J)},
bF:function(){},
bG:function(){},
ds:function(){return},
c2:function(a){var t,s
t=this.r
if(t==null){t=new P.qA(null,null,0,[H.aB(this,"dk",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.c_(this)}},
dA:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cO(this.a,a)
this.e=(this.e&4294967263)>>>0
this.c4((t&4)!==0)},
dC:function(a,b){var t,s
t=this.e
s=new P.pG(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.c3()
t=this.f
if(!!J.ay(t).$iscD&&t!==$.$get$he())t.bZ(s)
else s.$0()}else{s.$0()
this.c4((t&4)!==0)}},
dB:function(){var t,s
t=new P.pF(this)
this.c3()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ay(s).$iscD&&s!==$.$get$he())s.bZ(t)
else t.$0()},
dj:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.c4((t&4)!==0)},
c4:function(a){var t,s
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
if(s)this.bF()
else this.bG()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.c_(this)},
eM:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xc(b,t)
this.c=c},
gbJ:function(){return this.e}}
P.pG.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fC(s,{func:1,args:[P.ac,P.dS]})
q=t.d
p=this.b
o=t.b
if(r)q.hH(o,p,this.c)
else q.cO(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.pF.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.ea(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.k_.prototype={
gbs:function(a){return this.a},
sbs:function(a,b){return this.a=b}}
P.pL.prototype={
cH:function(a){a.dA(this.b)}}
P.pN.prototype={
cH:function(a){a.dC(this.b,this.c)},
$ask_:function(){},
gap:function(a){return this.b},
gaG:function(){return this.c}}
P.pM.prototype={
cH:function(a){a.dB()},
gbs:function(a){return},
sbs:function(a,b){throw H.k(new P.dT("No events after a done."))}}
P.qn.prototype={
c_:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xx(new P.qo(this,a))
this.a=1},
dL:function(){if(this.a===1)this.a=3},
gbJ:function(){return this.a}}
P.qo.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbs(r)
t.b=q
if(q==null)t.c=null
r.cH(this.b)},
$S:function(){return{func:1}}}
P.qA.prototype={
gU:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbs(0,b)
this.c=b}}}
P.qB.prototype={}
P.qU.prototype={
$0:function(){return this.a.ak(this.b,this.c)},
$S:function(){return{func:1}}}
P.qT.prototype={
$2:function(a,b){P.Gk(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dS]}}}
P.qV.prototype={
$0:function(){return this.a.aC(this.b)},
$S:function(){return{func:1}}}
P.hV.prototype={
aL:function(a,b,c,d){return this.f_(a,d,c,!0===b)},
e1:function(a,b,c){return this.aL(a,null,b,c)},
f_:function(a,b,c,d){return P.G_(this,a,b,c,d,H.aB(this,"hV",0),H.aB(this,"hV",1))},
dk:function(a,b){b.bC(0,a)},
fe:function(a,b,c){c.bB(a,b)},
$asdj:function(a,b){return[b]}}
P.hW.prototype={
bC:function(a,b){if((this.e&2)!==0)return
this.eC(0,b)},
bB:function(a,b){if((this.e&2)!==0)return
this.eD(a,b)},
bF:function(){var t=this.y
if(t==null)return
t.e5(0)},
bG:function(){var t=this.y
if(t==null)return
t.e8(0)},
ds:function(){var t=this.y
if(t!=null){this.y=null
return t.bO(0)}return},
f9:function(a){this.x.dk(a,this)},
fd:function(a,b){this.x.fe(a,b,this)},
fb:function(){this.eT()},
eP:function(a,b,c,d,e,f,g){this.y=this.x.a.e1(this.gf8(),this.gfa(),this.gfc())},
$asdk:function(a,b){return[b]}}
P.ql.prototype={
dk:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.cx(q)
r=H.cw(q)
P.Gj(b,s,r)
return}b.bC(0,t)}}
P.eU.prototype={
A:function(a){return H.A(this.a)},
$isei:1,
gap:function(a){return this.a},
gaG:function(){return this.b}}
P.qQ.prototype={}
P.r0.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fk()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.k(t)
r=H.k(t)
r.stack=J.cK(s)
throw r},
$S:function(){return{func:1}}}
P.qr.prototype={
ea:function(a){var t,s,r,q
try{if(C.e===$.an){r=a.$0()
return r}r=P.xd(null,null,this,a)
return r}catch(q){t=H.cx(q)
s=H.cw(q)
r=P.kc(null,null,this,t,s)
return r}},
cO:function(a,b){var t,s,r,q
try{if(C.e===$.an){r=a.$1(b)
return r}r=P.xf(null,null,this,a,b)
return r}catch(q){t=H.cx(q)
s=H.cw(q)
r=P.kc(null,null,this,t,s)
return r}},
hH:function(a,b,c){var t,s,r,q
try{if(C.e===$.an){r=a.$2(b,c)
return r}r=P.xe(null,null,this,a,b,c)
return r}catch(q){t=H.cx(q)
s=H.cw(q)
r=P.kc(null,null,this,t,s)
return r}},
cr:function(a,b){if(b)return new P.qs(this,a)
else return new P.qt(this,a)},
fJ:function(a,b){return new P.qu(this,a)},
n:function(a,b){return},
e9:function(a){if($.an===C.e)return a.$0()
return P.xd(null,null,this,a)},
cN:function(a,b){if($.an===C.e)return a.$1(b)
return P.xf(null,null,this,a,b)},
hG:function(a,b,c){if($.an===C.e)return a.$2(b,c)
return P.xe(null,null,this,a,b,c)}}
P.qs.prototype={
$0:function(){return this.a.ea(this.b)},
$S:function(){return{func:1}}}
P.qt.prototype={
$0:function(){return this.a.e9(this.b)},
$S:function(){return{func:1}}}
P.qu.prototype={
$1:function(a){return this.a.cO(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qa.prototype={
gm:function(a){return this.a},
gU:function(a){return this.a===0},
gbY:function(a){var t=H.U(this,0)
return H.dv(new P.qb(this,[t]),new P.qd(this),t,H.U(this,1))},
Y:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.eZ(b)},
eZ:function(a){var t=this.d
if(t==null)return!1
return this.aK(t[this.aJ(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.f6(0,b)},
f6:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aJ(b)]
r=this.aK(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.ux()
this.b=t}this.d9(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.ux()
this.c=s}this.d9(s,b,c)}else this.ft(b,c)},
ft:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ux()
this.d=t}s=this.aJ(a)
r=t[s]
if(r==null){P.uy(t,s,[a,b]);++this.a
this.e=null}else{q=this.aK(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.be(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.be(this.c,b)
else return this.ck(0,b)},
ck:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aJ(b)]
r=this.aK(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a5:function(a,b){var t,s,r,q
t=this.c6()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.k(new P.bR(this))}},
c6:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
d9:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.uy(a,b,c)},
be:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.G1(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aJ:function(a){return J.dF(a)&0x3ffffff},
aK:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.b_(a[s],b))return s
return-1},
$isbe:1,
$asbe:null}
P.qd.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qb.prototype={
gm:function(a){return this.a.a},
gU:function(a){return this.a.a===0},
gW:function(a){var t=this.a
return new P.qc(t,t.c6(),0,null,this.$ti)},
ag:function(a,b){return this.a.Y(0,b)},
a5:function(a,b){var t,s,r,q
t=this.a
s=t.c6()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.k(new P.bR(t))}}}
P.qc.prototype={
gP:function(){return this.d},
F:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.k(new P.bR(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.k4.prototype={
bq:function(a){return H.H5(a)&0x3ffffff},
br:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gdX()
if(r==null?b==null:r===b)return s}return-1}}
P.k3.prototype={
gW:function(a){var t=new P.dB(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gU:function(a){return this.a===0},
ag:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.eY(b)},
eY:function(a){var t=this.d
if(t==null)return!1
return this.aK(t[this.aJ(a)],a)>=0},
cD:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ag(0,a)?a:null
else return this.fi(a)},
fi:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aJ(a)]
r=this.aK(s,a)
if(r<0)return
return J.i4(s,r).gdh()},
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
t=s}return this.d8(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.d8(r,b)}else return this.aI(0,b)},
aI:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.G2()
this.d=t}s=this.aJ(b)
r=t[s]
if(r==null)t[s]=[this.c5(b)]
else{if(this.aK(r,b)>=0)return!1
r.push(this.c5(b))}return!0},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.be(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.be(this.c,b)
else return this.ck(0,b)},
ck:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aJ(b)]
r=this.aK(s,b)
if(r<0)return!1
this.da(s.splice(r,1)[0])
return!0},
b9:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
d8:function(a,b){if(a[b]!=null)return!1
a[b]=this.c5(b)
return!0},
be:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.da(t)
delete a[b]
return!0},
c5:function(a){var t,s
t=new P.qh(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
da:function(a){var t,s
t=a.geW()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aJ:function(a){return J.dF(a)&0x3ffffff},
aK:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].gdh(),b))return s
return-1},
$iseB:1,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.qh.prototype={
gdh:function(){return this.a},
geW:function(){return this.c}}
P.dB.prototype={
gP:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bR(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qe.prototype={}
P.ff.prototype={
au:function(a,b){return H.dv(this,b,H.aB(this,"ff",0),null)},
ag:function(a,b){var t
for(t=this.gW(this);t.F();)if(J.b_(t.gP(),b))return!0
return!1},
a5:function(a,b){var t
for(t=this.gW(this);t.F();)b.$1(t.gP())},
a0:function(a,b){return P.d2(this,!0,H.aB(this,"ff",0))},
an:function(a){return this.a0(a,!0)},
gm:function(a){var t,s
t=this.gW(this)
for(s=0;t.F();)++s
return s},
gU:function(a){return!this.gW(this).F()},
A:function(a){return P.tx(this,"(",")")},
$iso:1,
$aso:null}
P.hl.prototype={}
P.r5.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return{func:1,args:[,,]}}}
P.jp.prototype={}
P.hE.prototype={$asp:null,$ast:null,$aso:null,$isp:1,$ist:1,$iso:1}
P.aR.prototype={
gW:function(a){return new H.ew(a,this.gm(a),0,null,[H.aB(a,"aR",0)])},
S:function(a,b){return this.n(a,b)},
a5:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.k(new P.bR(a))}},
gU:function(a){return this.gm(a)===0},
ag:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.b_(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.k(new P.bR(a))}return!1},
au:function(a,b){return new H.fh(a,b,[H.aB(a,"aR",0),null])},
cW:function(a,b){return H.wA(a,b,null,H.aB(a,"aR",0))},
a0:function(a,b){var t,s,r
t=H.a([],[H.aB(a,"aR",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
an:function(a){return this.a0(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bQ:function(a,b,c,d){var t
P.di(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a7:function(a,b,c,d,e){var t,s,r,q,p,o
P.di(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.aj()
if(typeof b!=="number")return H.af(b)
t=c-b
if(t===0)return
if(J.ee(e,0))H.aZ(P.bF(e,0,null,"skipCount",null))
if(H.dY(d,"$isp",[H.aB(a,"aR",0)],"$asp")){s=e
r=d}else{r=J.xW(d,e).a0(0,!1)
s=0}q=J.ke(s)
p=J.bf(r)
if(J.cy(q.T(s,t),p.gm(r)))throw H.k(H.w8())
if(q.a1(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.T(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.T(s,o)))},
aw:function(a,b,c,d){return this.a7(a,b,c,d,0)},
az:function(a,b,c,d){var t,s,r,q,p
P.di(b,c,this.gm(a),null,null,null)
d=C.c.an(d)
if(typeof c!=="number")return c.aj()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.aw(a,b,r,d)
if(q!==0){this.a7(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a7(a,r,p,a,c)
this.aw(a,b,r,d)}},
aW:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.b_(this.n(a,t),b))return t
return-1},
bb:function(a,b){return this.aW(a,b,0)},
A:function(a){return P.jk(a,"[","]")},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.qI.prototype={
i:function(a,b,c){throw H.k(new P.V("Cannot modify unmodifiable map"))},
$isbe:1,
$asbe:null}
P.jq.prototype={
n:function(a,b){return J.i4(this.a,b)},
i:function(a,b,c){J.kj(this.a,b,c)},
a5:function(a,b){J.xL(this.a,b)},
gU:function(a){return J.rv(this.a)},
gm:function(a){return J.cm(this.a)},
A:function(a){return J.cK(this.a)},
$isbe:1,
$asbe:null}
P.eJ.prototype={$asbe:null,$isbe:1}
P.n_.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.N+=", "
t.a=!1
t=this.b
s=t.N+=H.A(a)
t.N=s+": "
t.N+=H.A(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mN.prototype={
gW:function(a){return new P.qi(this,this.c,this.d,this.b,null,this.$ti)},
a5:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.w(r,s)
b.$1(r[s])
if(t!==this.d)H.aZ(new P.bR(this))}},
gU:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
S:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.af(b)
if(0>b||b>=t)H.aZ(P.bv(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.w(s,q)
return s[q]},
a0:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fA(t)
return t},
an:function(a){return this.a0(a,!0)},
h:function(a,b){this.aI(0,b)},
b9:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.w(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
A:function(a){return P.jk(this,"{","}")},
e7:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.k(H.jl());++this.d
s=this.a
r=s.length
if(t>=r)return H.w(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aI:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.w(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.di();++this.d},
di:function(){var t,s,r,q
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
fA:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a7(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a7(a,0,p,r,t)
C.b.a7(a,p,p+this.c,this.a,0)
return this.c+p}},
eH:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$ast:null,
$aso:null}
P.qi.prototype={
gP:function(){return this.e},
F:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aZ(new P.bR(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.w(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.o4.prototype={
gU:function(a){return this.a===0},
bL:function(a,b){var t
for(t=J.db(b);t.F();)this.h(0,t.gP())},
a0:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dB(this,this.r,null,null,[null]),s.c=this.e,r=0;s.F();r=p){q=s.d
p=r+1
if(r>=t.length)return H.w(t,r)
t[r]=q}return t},
an:function(a){return this.a0(a,!0)},
au:function(a,b){return new H.fY(this,b,[H.U(this,0),null])},
A:function(a){return P.jk(this,"{","}")},
a5:function(a,b){var t
for(t=new P.dB(this,this.r,null,null,[null]),t.c=this.e;t.F();)b.$1(t.d)},
bc:function(a,b){var t,s
t=new P.dB(this,this.r,null,null,[null])
t.c=this.e
if(!t.F())return""
if(b===""){s=""
do s+=H.A(t.d)
while(t.F())}else{s=H.A(t.d)
for(;t.F();)s=s+b+H.A(t.d)}return s.charCodeAt(0)==0?s:s},
$iseB:1,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.o3.prototype={}
P.kA.prototype={
ho:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bf(b)
a1=P.di(a0,a1,t.gm(b),null,null,null)
s=$.$get$wY()
if(typeof a1!=="number")return H.af(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.X(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rb(C.c.a2(b,l))
h=H.rb(C.c.a2(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.w(s,g)
f=s[g]
if(f>=0){g=C.c.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.N.length
if(e==null)e=0
if(typeof e!=="number")return e.T()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.cc("")
p.N+=C.c.K(b,q,r)
p.N+=H.hG(k)
q=l
continue}}throw H.k(new P.bO("Invalid base64 data",b,r))}if(p!=null){t=p.N+=t.K(b,q,a1)
e=t.length
if(o>=0)P.uW(b,n,a1,o,m,e)
else{d=C.a.bA(e-1,4)+1
if(d===1)throw H.k(new P.bO("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.N=t;++d}}t=p.N
return C.c.az(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.uW(b,n,a1,o,m,c)
else{d=C.d.bA(c,4)
if(d===1)throw H.k(new P.bO("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.az(b,a1,a1,d===2?"==":"=")}return b},
$asfR:function(){return[[P.p,P.C],P.B]}}
P.kB.prototype={
$asfU:function(){return[[P.p,P.C],P.B]}}
P.fR.prototype={}
P.fU.prototype={}
P.le.prototype={
$asfR:function(){return[P.B,[P.p,P.C]]}}
P.pc.prototype={
gG:function(a){return"utf-8"}}
P.pd.prototype={
cu:function(a,b,c){var t,s,r,q
t=J.cm(a)
P.di(b,c,t,null,null,null)
s=new P.cc("")
r=new P.qK(!1,s,!0,0,0,0)
r.cu(a,b,t)
r.h_(0,a,t)
q=s.N
return q.charCodeAt(0)==0?q:q},
fO:function(a){return this.cu(a,0,null)},
$asfU:function(){return[[P.p,P.C],P.B]}}
P.qK.prototype={
h_:function(a,b,c){if(this.e>0)throw H.k(new P.bO("Unfinished UTF-8 octet sequence",b,c))},
cu:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.qM(c)
p=new P.qL(this,a,b,c)
$loop$0:for(o=J.bf(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aF()
if((l&192)!==128){k=new P.bO("Bad UTF-8 encoding 0x"+C.d.bw(l,16),a,m)
throw H.k(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.w(C.w,k)
if(t<=C.w[k]){k=new P.bO("Overlong encoding of 0x"+C.a.bw(t,16),a,m-r-1)
throw H.k(k)}if(t>1114111){k=new P.bO("Character outside valid Unicode range: 0x"+C.a.bw(t,16),a,m-r-1)
throw H.k(k)}if(!this.c||t!==65279)n.N+=H.hG(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cy(j,0)){this.c=!1
if(typeof j!=="number")return H.af(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dD(l)
if(g.a1(l,0)){g=new P.bO("Negative UTF-8 code unit: -0x"+J.xZ(g.cS(l),16),a,h-1)
throw H.k(g)}else{if(typeof l!=="number")return l.aF()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bO("Bad UTF-8 encoding 0x"+C.d.bw(l,16),a,h-1)
throw H.k(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.qM.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bf(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aF()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.C,args:[,P.C]}}}
P.qL.prototype={
$2:function(a,b){this.a.b.N+=P.oF(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.C,P.C]}}}
P.d9.prototype={}
P.bH.prototype={}
P.e2.prototype={
R:function(a,b){if(b==null)return!1
if(!(b instanceof P.e2))return!1
return this.a===b.a&&this.b===b.b},
ax:function(a,b){return C.a.ax(this.a,b.gfz())},
ga3:function(a){var t=this.a
return(t^C.a.aR(t,30))&1073741823},
A:function(a){var t,s,r,q,p,o,n
t=P.yy(H.wn(this))
s=P.ic(H.u5(this))
r=P.ic(H.u4(this))
q=P.ic(H.ER(this))
p=P.ic(H.ET(this))
o=P.ic(H.EU(this))
n=P.yz(H.ES(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.yx(C.a.T(this.a,b.ghV()),this.b)},
ghl:function(){return this.a},
d1:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.k(P.dG(this.ghl()))},
$isbH:1,
$asbH:function(){return[P.e2]},
gfz:function(){return this.a}}
P.W.prototype={$isbH:1,
$asbH:function(){return[P.dn]}}
P.dJ.prototype={
T:function(a,b){return new P.dJ(this.a+b.gbf())},
aq:function(a,b){return new P.dJ(C.a.b6(this.a*b))},
a1:function(a,b){return C.a.a1(this.a,b.gbf())},
aA:function(a,b){return C.a.aA(this.a,b.gbf())},
ar:function(a,b){return C.a.ar(this.a,b.gbf())},
R:function(a,b){if(b==null)return!1
if(!(b instanceof P.dJ))return!1
return this.a===b.a},
ga3:function(a){return this.a&0x1FFFFFFF},
ax:function(a,b){return C.a.ax(this.a,b.gbf())},
A:function(a){var t,s,r,q,p
t=new P.lc()
s=this.a
if(s<0)return"-"+new P.dJ(0-s).A(0)
r=t.$1(C.a.al(s,6e7)%60)
q=t.$1(C.a.al(s,1e6)%60)
p=new P.lb().$1(s%1e6)
return""+C.a.al(s,36e8)+":"+H.A(r)+":"+H.A(q)+"."+H.A(p)},
cS:function(a){return new P.dJ(0-this.a)},
$isbH:1,
$asbH:function(){return[P.dJ]},
gbf:function(){return this.a}}
P.lb.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.B,args:[P.C]}}}
P.lc.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.B,args:[P.C]}}}
P.ei.prototype={
gaG:function(){return H.cw(this.$thrownJsError)}}
P.fk.prototype={
A:function(a){return"Throw of null."}}
P.d0.prototype={
gc8:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc7:function(){return""},
A:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.A(t)
q=this.gc8()+s+r
if(!this.a)return q
p=this.gc7()
o=P.vc(this.b)
return q+p+": "+H.A(o)},
gG:function(a){return this.c}}
P.eA.prototype={
gc8:function(){return"RangeError"},
gc7:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.A(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.A(t)
else{if(typeof r!=="number")return r.aA()
if(r>t)s=": Not in range "+H.A(t)+".."+H.A(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.A(t)}}return s}}
P.mc.prototype={
gc8:function(){return"RangeError"},
gc7:function(){if(J.ee(this.b,0))return": index must not be negative"
var t=this.f
if(J.b_(t,0))return": no indices are valid"
return": index should be less than "+H.A(t)},
gm:function(a){return this.f}}
P.V.prototype={
A:function(a){return"Unsupported operation: "+this.a}}
P.eH.prototype={
A:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.A(t):"UnimplementedError"}}
P.dT.prototype={
A:function(a){return"Bad state: "+this.a}}
P.bR.prototype={
A:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.A(P.vc(t))+"."}}
P.no.prototype={
A:function(a){return"Out of Memory"},
gaG:function(){return},
$isei:1}
P.jL.prototype={
A:function(a){return"Stack Overflow"},
gaG:function(){return},
$isei:1}
P.l3.prototype={
A:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.A(t)+"' during its initialization"}}
P.pW.prototype={
A:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.A(t)}}
P.bO.prototype={
A:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.A(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a1()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.K(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.af(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a2(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.A(r-o+1)+")\n"):s+(" (at character "+H.A(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.X(q,m)
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
P.ll.prototype={
A:function(a){return"Expando:"+H.A(this.a)},
n:function(a,b){var t,s
t=this.bE
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aZ(P.e_(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.u6(b,"expando$values")
return s==null?null:H.u6(s,t)},
i:function(a,b,c){var t,s
t=this.bE
if(typeof t!=="string")t.set(b,c)
else{s=H.u6(b,"expando$values")
if(s==null){s=new P.ac()
H.wr(b,"expando$values",s)}H.wr(s,t,c)}},
gG:function(a){return this.a}}
P.C.prototype={$isbH:1,
$asbH:function(){return[P.dn]}}
P.o.prototype={
au:function(a,b){return H.dv(this,b,H.aB(this,"o",0),null)},
ag:function(a,b){var t
for(t=this.gW(this);t.F();)if(J.b_(t.gP(),b))return!0
return!1},
a5:function(a,b){var t
for(t=this.gW(this);t.F();)b.$1(t.gP())},
a0:function(a,b){return P.d2(this,!0,H.aB(this,"o",0))},
an:function(a){return this.a0(a,!0)},
gm:function(a){var t,s
t=this.gW(this)
for(s=0;t.F();)++s
return s},
gU:function(a){return!this.gW(this).F()},
S:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.y1("index"))
if(b<0)H.aZ(P.bF(b,0,null,"index",null))
for(t=this.gW(this),s=0;t.F();){r=t.gP()
if(b===s)return r;++s}throw H.k(P.bv(b,this,"index",null,s))},
A:function(a){return P.tx(this,"(",")")},
$aso:null}
P.jm.prototype={}
P.p.prototype={$asp:null,$ist:1,$ast:null,$iso:1,$aso:null}
P.be.prototype={$asbe:null}
P.d3.prototype={
ga3:function(a){return P.ac.prototype.ga3.call(this,this)},
A:function(a){return"null"}}
P.dn.prototype={$isbH:1,
$asbH:function(){return[P.dn]}}
P.ac.prototype={constructor:P.ac,$isac:1,
R:function(a,b){return this===b},
ga3:function(a){return H.ez(this)},
A:function(a){return H.nG(this)},
gaa:function(a){return new H.dV(H.kg(this),null)},
toString:function(){return this.A(this)}}
P.dw.prototype={}
P.eB.prototype={}
P.dS.prototype={}
P.B.prototype={$isbH:1,
$asbH:function(){return[P.B]}}
P.cc.prototype={
gm:function(a){return this.N.length},
gU:function(a){return this.N.length===0},
A:function(a){var t=this.N
return t.charCodeAt(0)==0?t:t},
gN:function(){return this.N}}
P.eK.prototype={}
P.p9.prototype={
$2:function(a,b){var t,s,r,q
t=J.bf(b)
s=t.bb(b,"=")
if(s===-1){if(!t.R(b,""))J.kj(a,P.qJ(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.K(b,0,s)
q=C.c.ae(b,s+1)
t=this.a
J.kj(a,P.qJ(r,0,r.length,t,!0),P.qJ(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.p6.prototype={
$2:function(a,b){throw H.k(new P.bO("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.B,P.C]}}}
P.p7.prototype={
$2:function(a,b){throw H.k(new P.bO("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.B],opt:[,]}}}
P.p8.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fm(C.c.K(this.a,a,b),16,null)
s=J.dD(t)
if(s.a1(t,0)||s.aA(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.C,args:[P.C,P.C]}}}
P.ka.prototype={
geg:function(){return this.b},
gcA:function(a){var t=this.c
if(t==null)return""
if(C.c.ad(t,"["))return C.c.K(t,1,t.length-1)
return t},
gcI:function(a){var t=this.d
if(t==null)return P.x0(this.a)
return t},
gcJ:function(a){var t=this.f
return t==null?"":t},
gdR:function(){var t=this.r
return t==null?"":t},
gcK:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.B
s=new P.eJ(P.wR(t==null?"":t,C.o),[s,s])
this.Q=s
t=s}return t},
gdU:function(){return this.c!=null},
gdW:function(){return this.f!=null},
gdV:function(){return this.r!=null},
A:function(a){var t=this.y
if(t==null){t=this.dm()
this.y=t}return t},
dm:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.A(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.A(s)}else t=s
t+=H.A(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
R:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.ay(b)
if(!!t.$iseK){if(this.a===b.gcT())if(this.c!=null===b.gdU()){s=this.b
r=b.geg()
if(s==null?r==null:s===r){s=this.gcA(this)
r=t.gcA(b)
if(s==null?r==null:s===r)if(J.b_(this.gcI(this),t.gcI(b)))if(J.b_(this.e,t.ge4(b))){s=this.f
r=s==null
if(!r===b.gdW()){if(r)s=""
if(s===t.gcJ(b)){t=this.r
s=t==null
if(!s===b.gdV()){if(s)t=""
t=t===b.gdR()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga3:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dm()
this.y=t}t=C.c.ga3(t)
this.z=t}return t},
$iseK:1,
gcT:function(){return this.a},
ge4:function(a){return this.e}}
P.r3.prototype={
$1:function(a){throw H.k(new P.bO("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.p5.prototype={
gef:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
t=t[0]+1
r=J.bf(s)
q=r.aW(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fy(s,o,p,C.k,!1)
if(n==null)n=r.K(s,o,p)
p=q}else n=null
m=P.fy(s,t,p,C.D,!1)
t=new P.pK(this,"data",null,null,null,m==null?r.K(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
A:function(a){var t,s
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
return t[0]===-1?"data:"+H.A(s):s}}
P.qY.prototype={
$1:function(a){return new Uint8Array(H.cB(96))},
$S:function(){return{func:1,args:[,]}}}
P.qX.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.w(t,a)
t=t[a]
J.xK(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.d8,args:[,,]}}}
P.qZ.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dm(a),r=0;r<t;++r)s.i(a,C.c.a2(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.d8,P.B,P.C]}}}
P.r_.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a2(b,0),s=C.c.a2(b,1),r=J.dm(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.d8,P.B,P.C]}}}
P.qz.prototype={
gdU:function(){return this.c>0},
gdW:function(){var t=this.f
if(typeof t!=="number")return t.a1()
return t<this.r},
gdV:function(){return this.r<this.a.length},
gcT:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.ad(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.ad(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.ad(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.ad(this.a,"package")){this.x="package"
t="package"}else{t=C.c.K(this.a,0,t)
this.x=t}return t},
geg:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.K(this.a,s,t-1):""},
gcA:function(a){var t=this.c
return t>0?C.c.K(this.a,t,this.d):""},
gcI:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.T()
s=this.e
if(typeof s!=="number")return H.af(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.T()
return H.fm(C.c.K(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.ad(this.a,"http"))return 80
if(t===5&&C.c.ad(this.a,"https"))return 443
return 0},
ge4:function(a){return C.c.K(this.a,this.e,this.f)},
gcJ:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a1()
return t<s?C.c.K(this.a,t+1,s):""},
gdR:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ae(s,t+1):""},
gcK:function(){var t=this.f
if(typeof t!=="number")return t.a1()
if(t>=this.r)return C.a_
t=P.B
return new P.eJ(P.wR(this.gcJ(this),C.o),[t,t])},
ga3:function(a){var t=this.y
if(t==null){t=C.c.ga3(this.a)
this.y=t}return t},
R:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.ay(b)
if(!!t.$iseK)return this.a===t.A(b)
return!1},
A:function(a){return this.a},
$iseK:1}
P.pK.prototype={}
W.al.prototype={}
W.eT.prototype={
A:function(a){return String(a)},
$iseT:1,
$isf:1,
gac:function(a){return a.href}}
W.kq.prototype={
A:function(a){return String(a)},
$isf:1,
gac:function(a){return a.href}}
W.eW.prototype={$iseW:1,$isdr:1,$isax:1,$isac:1}
W.cL.prototype={$isac:1}
W.ky.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cL]},
$ist:1,
$ast:function(){return[W.cL]},
$iso:1,
$aso:function(){return[W.cL]},
$isaG:1,
$asaG:function(){return[W.cL]},
$isaw:1,
$asaw:function(){return[W.cL]}}
W.h_.prototype={
$asp:function(){return[W.cL]},
$ast:function(){return[W.cL]},
$aso:function(){return[W.cL]},
$isp:1,
$ist:1,
$iso:1}
W.h2.prototype={
$asp:function(){return[W.cL]},
$ast:function(){return[W.cL]},
$aso:function(){return[W.cL]},
$isp:1,
$ist:1,
$iso:1}
W.kC.prototype={
gac:function(a){return a.href}}
W.eX.prototype={$iseX:1}
W.kF.prototype={$isf:1}
W.fQ.prototype={$isfQ:1,
gG:function(a){return a.name}}
W.eg.prototype={$isf:1,
gm:function(a){return a.length}}
W.kP.prototype={$isf:1}
W.i8.prototype={
cw:function(a,b){return typeof console!="undefined"?console.error(b):null},
b7:function(a){return typeof console!="undefined"?console.group(a):null},
dY:function(a){return typeof console!="undefined"?console.info(a):null},
hL:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fV.prototype={
gG:function(a){return a.name}}
W.kW.prototype={
gaH:function(a){return a.style}}
W.kX.prototype={
gac:function(a){return a.href}}
W.fW.prototype={
gaH:function(a){return a.style}}
W.fX.prototype={
gG:function(a){return a.name}}
W.kY.prototype={
gaH:function(a){return a.style}}
W.bN.prototype={$isbN:1,$isac:1}
W.f_.prototype={
bz:function(a,b){var t=this.f7(a,b)
return t!=null?t:""},
f7:function(a,b){if(W.yw(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.yA()+b)},
J:function(a,b){return a.item(b)},
gba:function(a){return a.content},
gbl:function(a){return a.display},
sbl:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iC.prototype={}
W.pI.prototype={
bz:function(a,b){var t=this.b
return J.xR(t.ga9(t),b)},
fu:function(a,b){var t
for(t=this.a,t=new H.ew(t,t.gm(t),0,null,[H.U(t,0)]);t.F();)t.d.style[a]=b},
sbl:function(a,b){this.fu("display",b)},
eN:function(a){var t=P.d2(this.a,!0,null)
this.b=new H.fh(t,new W.pJ(),[H.U(t,0),null])}}
W.jy.prototype={}
W.pJ.prototype={
$1:function(a){return J.rw(a)},
$S:function(){return{func:1,args:[,]}}}
W.ia.prototype={
gba:function(a){return this.bz(a,"content")},
gbl:function(a){return this.bz(a,"display")}}
W.kZ.prototype={
gaH:function(a){return a.style}}
W.l_.prototype={
gaH:function(a){return a.style}}
W.l4.prototype={
gcz:function(a){return a.files}}
W.f0.prototype={$isf0:1,$isac:1}
W.ib.prototype={
bK:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
J:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.eh.prototype={$iseh:1}
W.id.prototype={$isf:1}
W.ie.prototype={
gG:function(a){return a.name}}
W.l7.prototype={
gG:function(a){var t=a.name
if(P.vb()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vb()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
A:function(a){return String(a)}}
W.ig.prototype={
A:function(a){return"Rectangle ("+H.A(a.left)+", "+H.A(a.top)+") "+H.A(this.gb0(a))+" x "+H.A(this.gaV(a))},
R:function(a,b){var t
if(b==null)return!1
t=J.ay(b)
if(!t.$isbU)return!1
return a.left===t.gbS(b)&&a.top===t.gbX(b)&&this.gb0(a)===t.gb0(b)&&this.gaV(a)===t.gaV(b)},
ga3:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb0(a)
q=this.gaV(a)
return W.x_(W.eQ(W.eQ(W.eQ(W.eQ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaV:function(a){return a.height},
gbS:function(a){return a.left},
gbX:function(a){return a.top},
gb0:function(a){return a.width},
$isbU:1,
$asbU:function(){}}
W.ih.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
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
$isaw:1,
$asaw:function(){return[P.B]}}
W.iD.prototype={
$asp:function(){return[P.B]},
$ast:function(){return[P.B]},
$aso:function(){return[P.B]},
$isp:1,
$ist:1,
$iso:1}
W.iX.prototype={
$asp:function(){return[P.B]},
$ast:function(){return[P.B]},
$aso:function(){return[P.B]},
$isp:1,
$ist:1,
$iso:1}
W.ii.prototype={
J:function(a,b){return a.item(b)}}
W.ij.prototype={
h:function(a,b){return a.add(b)},
ag:function(a,b){return a.contains(b)},
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.k0.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot modify list"))},
sm:function(a,b){throw H.k(new P.V("Cannot modify list"))},
gaH:function(a){return W.FZ(this)},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
W.dr.prototype={
gdM:function(a){return new W.pQ(a)},
A:function(a){return a.localName},
dZ:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$isdr:1,
$isax:1,
$isac:1,
$isf:1,
gaH:function(a){return a.style}}
W.ld.prototype={
gG:function(a){return a.name}}
W.fZ.prototype={
gG:function(a){return a.name}}
W.lj.prototype={
gap:function(a){return a.error}}
W.R.prototype={$isR:1,$isac:1}
W.aH.prototype={
fD:function(a,b,c,d){if(c!=null)this.eS(a,b,c,!1)},
hB:function(a,b,c,d){if(c!=null)this.fq(a,b,c,!1)},
eS:function(a,b,c,d){return a.addEventListener(b,H.dl(c,1),!1)},
fq:function(a,b,c,d){return a.removeEventListener(b,H.dl(c,1),!1)}}
W.lM.prototype={
gG:function(a){return a.name}}
W.cf.prototype={$iscf:1,$isac:1,
gG:function(a){return a.name}}
W.f8.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isf8:1,
$isaG:1,
$asaG:function(){return[W.cf]},
$isaw:1,
$asaw:function(){return[W.cf]},
$isp:1,
$asp:function(){return[W.cf]},
$ist:1,
$ast:function(){return[W.cf]},
$iso:1,
$aso:function(){return[W.cf]}}
W.iE.prototype={
$asp:function(){return[W.cf]},
$ast:function(){return[W.cf]},
$aso:function(){return[W.cf]},
$isp:1,
$ist:1,
$iso:1}
W.iY.prototype={
$asp:function(){return[W.cf]},
$ast:function(){return[W.cf]},
$aso:function(){return[W.cf]},
$isp:1,
$ist:1,
$iso:1}
W.lN.prototype={
gap:function(a){return a.error}}
W.lO.prototype={
gG:function(a){return a.name}}
W.lP.prototype={
gap:function(a){return a.error},
gm:function(a){return a.length}}
W.lS.prototype={
gaH:function(a){return a.style},
gcP:function(a){return a.weight}}
W.lT.prototype={
h:function(a,b){return a.add(b)},
hU:function(a,b,c){return a.forEach(H.dl(b,3),c)},
a5:function(a,b){b=H.dl(b,3)
return a.forEach(b)}}
W.iy.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.cp.prototype={$iscp:1,$isac:1}
W.m2.prototype={
gm:function(a){return a.length}}
W.f9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ax]},
$ist:1,
$ast:function(){return[W.ax]},
$iso:1,
$aso:function(){return[W.ax]},
$isaG:1,
$asaG:function(){return[W.ax]},
$isaw:1,
$asaw:function(){return[W.ax]}}
W.iF.prototype={
$asp:function(){return[W.ax]},
$ast:function(){return[W.ax]},
$aso:function(){return[W.ax]},
$isp:1,
$ist:1,
$iso:1}
W.iZ.prototype={
$asp:function(){return[W.ax]},
$ast:function(){return[W.ax]},
$aso:function(){return[W.ax]},
$isp:1,
$ist:1,
$iso:1}
W.iA.prototype={
J:function(a,b){return a.item(b)}}
W.e7.prototype={
i2:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hq:function(a,b,c,d){return a.open(b,c,d)},
ghE:function(a){return W.Go(a.response)},
b2:function(a,b){return a.send(b)},
$ise7:1,
$isac:1,
ghF:function(a){return a.responseText}}
W.m5.prototype={
$1:function(a){return J.xQ(a)},
$S:function(){return{func:1,args:[W.e7]}}}
W.m6.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.ar()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.ay(0,t)
else p.bj(a)},
$S:function(){return{func:1,args:[,]}}}
W.hf.prototype={}
W.m8.prototype={
gG:function(a){return a.name}}
W.hg.prototype={$ishg:1}
W.fb.prototype={$isfb:1,$isdr:1,$isax:1,$isac:1,
ay:function(a,b){return a.complete.$1(b)}}
W.me.prototype={$isf:1,
gcz:function(a){return a.files},
gG:function(a){return a.name}}
W.mC.prototype={
gG:function(a){return a.name}}
W.ho.prototype={
h:function(a,b){return a.add(b)}}
W.hp.prototype={$ishp:1,
gac:function(a){return a.href}}
W.mU.prototype={
A:function(a){return String(a)},
gac:function(a){return a.href}}
W.mZ.prototype={
gG:function(a){return a.name}}
W.hw.prototype={
gap:function(a){return a.error}}
W.js.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.n2.prototype={
gba:function(a){return a.content},
gG:function(a){return a.name}}
W.n3.prototype={
hQ:function(a,b,c){return a.send(b,c)},
b2:function(a,b){return a.send(b)}}
W.hx.prototype={
gG:function(a){return a.name}}
W.cr.prototype={$iscr:1,$isac:1}
W.jt.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[W.cr]},
$isaw:1,
$asaw:function(){return[W.cr]},
$isp:1,
$asp:function(){return[W.cr]},
$ist:1,
$ast:function(){return[W.cr]},
$iso:1,
$aso:function(){return[W.cr]}}
W.iP.prototype={
$asp:function(){return[W.cr]},
$ast:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isp:1,
$ist:1,
$iso:1}
W.j8.prototype={
$asp:function(){return[W.cr]},
$ast:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isp:1,
$ist:1,
$iso:1}
W.ng.prototype={$isf:1}
W.nh.prototype={
gG:function(a){return a.name}}
W.ax.prototype={
A:function(a){var t=a.nodeValue
return t==null?this.ez(a):t},
ag:function(a,b){return a.contains(b)},
$isax:1,
$isac:1}
W.jw.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ax]},
$ist:1,
$ast:function(){return[W.ax]},
$iso:1,
$aso:function(){return[W.ax]},
$isaG:1,
$asaG:function(){return[W.ax]},
$isaw:1,
$asaw:function(){return[W.ax]}}
W.iQ.prototype={
$asp:function(){return[W.ax]},
$ast:function(){return[W.ax]},
$aso:function(){return[W.ax]},
$isp:1,
$ist:1,
$iso:1}
W.j9.prototype={
$asp:function(){return[W.ax]},
$ast:function(){return[W.ax]},
$aso:function(){return[W.ax]},
$isp:1,
$ist:1,
$iso:1}
W.nk.prototype={
gG:function(a){return a.name}}
W.np.prototype={
gG:function(a){return a.name}}
W.nt.prototype={
gG:function(a){return a.name}}
W.nv.prototype={$isf:1}
W.e8.prototype={
gG:function(a){return a.name}}
W.nA.prototype={
gm:function(a){return a.length}}
W.ch.prototype={
J:function(a,b){return a.item(b)},
$isch:1,
$isac:1,
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.jC.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ch]},
$ist:1,
$ast:function(){return[W.ch]},
$iso:1,
$aso:function(){return[W.ch]},
$isaG:1,
$asaG:function(){return[W.ch]},
$isaw:1,
$asaw:function(){return[W.ch]}}
W.iR.prototype={
$asp:function(){return[W.ch]},
$ast:function(){return[W.ch]},
$aso:function(){return[W.ch]},
$isp:1,
$ist:1,
$iso:1}
W.ja.prototype={
$asp:function(){return[W.ch]},
$ast:function(){return[W.ch]},
$aso:function(){return[W.ch]},
$isp:1,
$ist:1,
$iso:1}
W.nF.prototype={
b2:function(a,b){return a.send(b)}}
W.jF.prototype={
b2:function(a,b){return a.send(b)}}
W.fp.prototype={$isfp:1,$isdr:1,$isax:1,$isac:1}
W.jG.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.o2.prototype={
gG:function(a){return a.name}}
W.o5.prototype={$isf:1}
W.o6.prototype={
gG:function(a){return a.name}}
W.o7.prototype={
gG:function(a){return a.name}}
W.cs.prototype={$iscs:1,$isac:1}
W.jI.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cs]},
$ist:1,
$ast:function(){return[W.cs]},
$iso:1,
$aso:function(){return[W.cs]},
$isaG:1,
$asaG:function(){return[W.cs]},
$isaw:1,
$asaw:function(){return[W.cs]}}
W.h0.prototype={
$asp:function(){return[W.cs]},
$ast:function(){return[W.cs]},
$aso:function(){return[W.cs]},
$isp:1,
$ist:1,
$iso:1}
W.h3.prototype={
$asp:function(){return[W.cs]},
$ast:function(){return[W.cs]},
$aso:function(){return[W.cs]},
$isp:1,
$ist:1,
$iso:1}
W.hJ.prototype={$ishJ:1}
W.ct.prototype={$isct:1,$isac:1,
gcP:function(a){return a.weight}}
W.jJ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ct]},
$ist:1,
$ast:function(){return[W.ct]},
$iso:1,
$aso:function(){return[W.ct]},
$isaG:1,
$asaG:function(){return[W.ct]},
$isaw:1,
$asaw:function(){return[W.ct]}}
W.iS.prototype={
$asp:function(){return[W.ct]},
$ast:function(){return[W.ct]},
$aso:function(){return[W.ct]},
$isp:1,
$ist:1,
$iso:1}
W.jb.prototype={
$asp:function(){return[W.ct]},
$ast:function(){return[W.ct]},
$aso:function(){return[W.ct]},
$isp:1,
$ist:1,
$iso:1}
W.fq.prototype={$isfq:1,$isac:1}
W.ob.prototype={
gap:function(a){return a.error}}
W.cj.prototype={
J:function(a,b){return a.item(b)},
$iscj:1,
$isac:1,
gm:function(a){return a.length}}
W.oc.prototype={
gG:function(a){return a.name}}
W.od.prototype={
gG:function(a){return a.name}}
W.oj.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a5:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gU:function(a){return a.key(0)==null},
$isbe:1,
$asbe:function(){return[P.B,P.B]}}
W.cl.prototype={$iscl:1,$isac:1,
gac:function(a){return a.href}}
W.eb.prototype={}
W.oM.prototype={
gba:function(a){return a.content}}
W.oO.prototype={
gG:function(a){return a.name}}
W.cS.prototype={$isac:1}
W.cH.prototype={$isac:1}
W.oR.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.cH]},
$isaw:1,
$asaw:function(){return[W.cH]},
$isp:1,
$asp:function(){return[W.cH]},
$ist:1,
$ast:function(){return[W.cH]},
$iso:1,
$aso:function(){return[W.cH]}}
W.iT.prototype={
$asp:function(){return[W.cH]},
$ast:function(){return[W.cH]},
$aso:function(){return[W.cH]},
$isp:1,
$ist:1,
$iso:1}
W.jc.prototype={
$asp:function(){return[W.cH]},
$ast:function(){return[W.cH]},
$aso:function(){return[W.cH]},
$isp:1,
$ist:1,
$iso:1}
W.oS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.cS]},
$isaw:1,
$asaw:function(){return[W.cS]},
$isp:1,
$asp:function(){return[W.cS]},
$ist:1,
$ast:function(){return[W.cS]},
$iso:1,
$aso:function(){return[W.cS]}}
W.h1.prototype={
$asp:function(){return[W.cS]},
$ast:function(){return[W.cS]},
$aso:function(){return[W.cS]},
$isp:1,
$ist:1,
$iso:1}
W.h4.prototype={
$asp:function(){return[W.cS]},
$ast:function(){return[W.cS]},
$aso:function(){return[W.cS]},
$isp:1,
$ist:1,
$iso:1}
W.oW.prototype={
gm:function(a){return a.length}}
W.cv.prototype={$iscv:1,$isac:1}
W.jN.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
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
$isaw:1,
$asaw:function(){return[W.cv]}}
W.iU.prototype={
$asp:function(){return[W.cv]},
$ast:function(){return[W.cv]},
$aso:function(){return[W.cv]},
$isp:1,
$ist:1,
$iso:1}
W.jd.prototype={
$asp:function(){return[W.cv]},
$ast:function(){return[W.cv]},
$aso:function(){return[W.cv]},
$isp:1,
$ist:1,
$iso:1}
W.fs.prototype={$isfs:1,$isac:1}
W.jO.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.ec.prototype={}
W.pa.prototype={
A:function(a){return String(a)},
$isf:1,
gac:function(a){return a.href}}
W.pe.prototype={
gm:function(a){return a.length}}
W.ft.prototype={$isft:1,$isac:1}
W.jP.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pj.prototype={
b2:function(a,b){return a.send(b)}}
W.jS.prototype={$isf:1,
gG:function(a){return a.name}}
W.pq.prototype={$isf:1}
W.eL.prototype={$isf:1}
W.fu.prototype={$isfu:1,$isax:1,$isac:1,
gG:function(a){return a.name}}
W.pH.prototype={
A:function(a){return"Rectangle ("+H.A(a.left)+", "+H.A(a.top)+") "+H.A(a.width)+" x "+H.A(a.height)},
R:function(a,b){var t,s,r
if(b==null)return!1
t=J.ay(b)
if(!t.$isbU)return!1
s=a.left
r=t.gbS(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbX(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb0(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaV(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga3:function(a){var t,s,r,q
t=J.dF(a.left)
s=J.dF(a.top)
r=J.dF(a.width)
q=J.dF(a.height)
return W.x_(W.eQ(W.eQ(W.eQ(W.eQ(0,t),s),r),q))},
$isbU:1,
$asbU:function(){},
gaV:function(a){return a.height},
gbS:function(a){return a.left},
gbX:function(a){return a.top},
gb0:function(a){return a.width}}
W.hT.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[P.bU]},
$isaw:1,
$asaw:function(){return[P.bU]},
$isp:1,
$asp:function(){return[P.bU]},
$ist:1,
$ast:function(){return[P.bU]},
$iso:1,
$aso:function(){return[P.bU]}}
W.iV.prototype={
$asp:function(){return[P.bU]},
$ast:function(){return[P.bU]},
$aso:function(){return[P.bU]},
$isp:1,
$ist:1,
$iso:1}
W.je.prototype={
$asp:function(){return[P.bU]},
$ast:function(){return[P.bU]},
$aso:function(){return[P.bU]},
$isp:1,
$ist:1,
$iso:1}
W.jZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
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
$isaw:1,
$asaw:function(){return[W.bN]}}
W.iW.prototype={
$asp:function(){return[W.bN]},
$ast:function(){return[W.bN]},
$aso:function(){return[W.bN]},
$isp:1,
$ist:1,
$iso:1}
W.jf.prototype={
$asp:function(){return[W.bN]},
$ast:function(){return[W.bN]},
$aso:function(){return[W.bN]},
$isp:1,
$ist:1,
$iso:1}
W.pO.prototype={$isf:1}
W.pP.prototype={
gaV:function(a){return a.height},
gb0:function(a){return a.width}}
W.k2.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[W.cp]},
$isaw:1,
$asaw:function(){return[W.cp]},
$isp:1,
$asp:function(){return[W.cp]},
$ist:1,
$ast:function(){return[W.cp]},
$iso:1,
$aso:function(){return[W.cp]}}
W.iG.prototype={
$asp:function(){return[W.cp]},
$ast:function(){return[W.cp]},
$aso:function(){return[W.cp]},
$isp:1,
$ist:1,
$iso:1}
W.j_.prototype={
$asp:function(){return[W.cp]},
$ast:function(){return[W.cp]},
$aso:function(){return[W.cp]},
$isp:1,
$ist:1,
$iso:1}
W.q9.prototype={$isf:1}
W.hZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ax]},
$ist:1,
$ast:function(){return[W.ax]},
$iso:1,
$aso:function(){return[W.ax]},
$isaG:1,
$asaG:function(){return[W.ax]},
$isaw:1,
$asaw:function(){return[W.ax]}}
W.iH.prototype={
$asp:function(){return[W.ax]},
$ast:function(){return[W.ax]},
$aso:function(){return[W.ax]},
$isp:1,
$ist:1,
$iso:1}
W.j0.prototype={
$asp:function(){return[W.ax]},
$ast:function(){return[W.ax]},
$aso:function(){return[W.ax]},
$isp:1,
$ist:1,
$iso:1}
W.qy.prototype={$isf:1}
W.k6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cj]},
$ist:1,
$ast:function(){return[W.cj]},
$iso:1,
$aso:function(){return[W.cj]},
$isaG:1,
$asaG:function(){return[W.cj]},
$isaw:1,
$asaw:function(){return[W.cj]}}
W.iI.prototype={
$asp:function(){return[W.cj]},
$ast:function(){return[W.cj]},
$aso:function(){return[W.cj]},
$isp:1,
$ist:1,
$iso:1}
W.j1.prototype={
$asp:function(){return[W.cj]},
$ast:function(){return[W.cj]},
$aso:function(){return[W.cj]},
$isp:1,
$ist:1,
$iso:1}
W.k8.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[W.cl]},
$isaw:1,
$asaw:function(){return[W.cl]},
$isp:1,
$asp:function(){return[W.cl]},
$ist:1,
$ast:function(){return[W.cl]},
$iso:1,
$aso:function(){return[W.cl]}}
W.iJ.prototype={
$asp:function(){return[W.cl]},
$ast:function(){return[W.cl]},
$aso:function(){return[W.cl]},
$isp:1,
$ist:1,
$iso:1}
W.j2.prototype={
$asp:function(){return[W.cl]},
$ast:function(){return[W.cl]},
$aso:function(){return[W.cl]},
$isp:1,
$ist:1,
$iso:1}
W.qO.prototype={$isf:1}
W.qP.prototype={$isf:1}
W.pQ.prototype={
aE:function(){var t,s,r,q,p
t=P.a5(null,null,null,P.B)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.c1)(s),++q){p=J.ry(s[q])
if(p.length!==0)t.h(0,p)}return t},
eh:function(a){this.a.className=a.bc(0," ")},
gm:function(a){return this.a.classList.length},
gU:function(a){return this.a.classList.length===0},
ag:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s}}
W.pT.prototype={
aL:function(a,b,c,d){return W.eO(this.a,this.b,a,!1,H.U(this,0))},
e1:function(a,b,c){return this.aL(a,null,b,c)}}
W.hU.prototype={}
W.pU.prototype={
bO:function(a){if(this.b==null)return
this.dI()
this.b=null
this.d=null
return},
cG:function(a,b){if(this.b==null)return;++this.a
this.dI()},
e5:function(a){return this.cG(a,null)},
e8:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dG()},
dG:function(){var t=this.d
if(t!=null&&this.a<=0)J.xD(this.b,this.c,t,!1)},
dI:function(){var t=this.d
if(t!=null)J.xU(this.b,this.c,t,!1)},
eO:function(a,b,c,d,e){this.dG()}}
W.pV.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bu.prototype={
gW:function(a){return new W.lR(a,this.gm(a),-1,null,[H.aB(a,"bu",0)])},
h:function(a,b){throw H.k(new P.V("Cannot add to immutable List."))},
a7:function(a,b,c,d,e){throw H.k(new P.V("Cannot setRange on immutable List."))},
aw:function(a,b,c,d){return this.a7(a,b,c,d,0)},
az:function(a,b,c,d){throw H.k(new P.V("Cannot modify an immutable List."))},
bQ:function(a,b,c,d){throw H.k(new P.V("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
W.lR.prototype={
F:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.i4(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gP:function(){return this.d}}
W.qH.prototype={}
P.qE.prototype={
bp:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b_:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.ay(a)
if(!!s.$ise2)return new Date(a.a)
if(!!s.$isFj)throw H.k(new P.eH("structured clone of RegExp"))
if(!!s.$iscf)return a
if(!!s.$iseX)return a
if(!!s.$isf8)return a
if(!!s.$ishg)return a
if(!!s.$isfi||!!s.$isey)return a
if(!!s.$isbe){r=this.bp(a)
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
s.a5(a,new P.qG(t,this))
return t.a}if(!!s.$isp){r=this.bp(a)
t=this.b
if(r>=t.length)return H.w(t,r)
o=t[r]
if(o!=null)return o
return this.fP(a,r)}throw H.k(new P.eH("structured clone of other type"))},
fP:function(a,b){var t,s,r,q,p
t=J.bf(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.w(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b_(t.n(a,p))
if(p>=r.length)return H.w(r,p)
r[p]=q}return r}}
P.qG.prototype={
$2:function(a,b){this.a.a[a]=this.b.b_(b)},
$S:function(){return{func:1,args:[,,]}}}
P.px.prototype={
bp:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b_:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.e2(s,!0)
r.d1(s,!0)
return r}if(a instanceof RegExp)throw H.k(new P.eH("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.GJ(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bp(a)
r=this.b
o=r.length
if(p>=o)return H.w(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.mM()
t.a=n
if(p>=o)return H.w(r,p)
r[p]=n
this.h1(a,new P.py(t,this))
return t.a}if(a instanceof Array){p=this.bp(a)
r=this.b
if(p>=r.length)return H.w(r,p)
n=r[p]
if(n!=null)return n
o=J.bf(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.w(r,p)
r[p]=n
if(typeof m!=="number")return H.af(m)
r=J.dm(n)
l=0
for(;l<m;++l)r.i(n,l,this.b_(o.n(a,l)))
return n}return a}}
P.py.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b_(b)
J.kj(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.qF.prototype={}
P.jV.prototype={
h1:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.c1)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.r6.prototype={
$1:function(a){return this.a.ay(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.r7.prototype={
$1:function(a){return this.a.bj(a)},
$S:function(){return{func:1,args:[,]}}}
P.kU.prototype={
dJ:function(a){if($.$get$v3().b.test(a))return a
throw H.k(P.e_(a,"value","Not a valid class token"))},
A:function(a){return this.aE().bc(0," ")},
gW:function(a){var t,s
t=this.aE()
s=new P.dB(t,t.r,null,null,[null])
s.c=t.e
return s},
a5:function(a,b){this.aE().a5(0,b)},
au:function(a,b){var t=this.aE()
return new H.fY(t,b,[H.U(t,0),null])},
gU:function(a){return this.aE().a===0},
gm:function(a){return this.aE().a},
ag:function(a,b){if(typeof b!=="string")return!1
this.dJ(b)
return this.aE().ag(0,b)},
cD:function(a){return this.ag(0,a)?a:null},
h:function(a,b){this.dJ(b)
return this.hm(0,new P.kV(b))},
a0:function(a,b){return this.aE().a0(0,!0)},
an:function(a){return this.a0(a,!0)},
hm:function(a,b){var t,s
t=this.aE()
s=b.$1(t)
this.eh(t)
return s},
$iseB:1,
$aseB:function(){return[P.B]},
$ist:1,
$ast:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]}}
P.kV.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.l5.prototype={
gG:function(a){return a.name}}
P.qW.prototype={
$1:function(a){this.b.ay(0,new P.jV([],[],!1).b_(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mb.prototype={
gG:function(a){return a.name}}
P.nl.prototype={
bK:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.ff(a,b,c)
q=P.Gn(t)
return q}catch(p){s=H.cx(p)
r=H.cw(p)
q=P.vq(s,r,null)
return q}},
h:function(a,b){return this.bK(a,b,null)},
ff:function(a,b,c){return a.add(new P.qF([],[]).b_(b))},
gG:function(a){return a.name}}
P.hH.prototype={
gap:function(a){return a.error}}
P.p_.prototype={
gap:function(a){return a.error}}
P.qg.prototype={
bt:function(a){if(a<=0||a>4294967296)throw H.k(P.wu("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
cE:function(){return Math.random()}}
P.qp.prototype={
aQ:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.al(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bt:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.k(P.wu("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aQ()
return(this.a&t)>>>0}do{this.aQ()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
cE:function(){this.aQ()
var t=this.a
this.aQ()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
eQ:function(a){var t,s,r,q,p,o,n,m
t=J.ee(a,0)?-1:0
do{if(typeof a!=="number")return a.aF()
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
this.aQ()
this.aQ()
this.aQ()
this.aQ()}}
P.qq.prototype={}
P.bU.prototype={$asbU:null}
P.kn.prototype={$isf:1,
gac:function(a){return a.href}}
P.ef.prototype={$isf:1}
P.lm.prototype={$isf:1}
P.ln.prototype={$isf:1}
P.lo.prototype={$isf:1}
P.lp.prototype={$isf:1}
P.lq.prototype={$isf:1}
P.lr.prototype={$isf:1}
P.ls.prototype={$isf:1}
P.lt.prototype={$isf:1}
P.lu.prototype={$isf:1}
P.lv.prototype={$isf:1,
gac:function(a){return a.href}}
P.lw.prototype={$isf:1}
P.lx.prototype={$isf:1}
P.ly.prototype={$isf:1}
P.lz.prototype={$isf:1}
P.lA.prototype={$isf:1}
P.lB.prototype={$isf:1}
P.lQ.prototype={$isf:1,
gac:function(a){return a.href}}
P.cq.prototype={$isf:1}
P.m9.prototype={$isf:1,
gac:function(a){return a.href}}
P.d1.prototype={$isac:1}
P.mF.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d1]},
$ist:1,
$ast:function(){return[P.d1]},
$iso:1,
$aso:function(){return[P.d1]}}
P.iK.prototype={
$asp:function(){return[P.d1]},
$ast:function(){return[P.d1]},
$aso:function(){return[P.d1]},
$isp:1,
$ist:1,
$iso:1}
P.j3.prototype={
$asp:function(){return[P.d1]},
$ast:function(){return[P.d1]},
$aso:function(){return[P.d1]},
$isp:1,
$ist:1,
$iso:1}
P.n0.prototype={$isf:1}
P.n1.prototype={$isf:1}
P.d4.prototype={$isac:1}
P.ni.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d4]},
$ist:1,
$ast:function(){return[P.d4]},
$iso:1,
$aso:function(){return[P.d4]}}
P.iL.prototype={
$asp:function(){return[P.d4]},
$ast:function(){return[P.d4]},
$aso:function(){return[P.d4]},
$isp:1,
$ist:1,
$iso:1}
P.j4.prototype={
$asp:function(){return[P.d4]},
$ast:function(){return[P.d4]},
$aso:function(){return[P.d4]},
$isp:1,
$ist:1,
$iso:1}
P.ny.prototype={$isf:1,
gac:function(a){return a.href}}
P.nD.prototype={
gm:function(a){return a.length}}
P.o_.prototype={$isf:1,
gac:function(a){return a.href}}
P.oE.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.B]},
$ist:1,
$ast:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]}}
P.iM.prototype={
$asp:function(){return[P.B]},
$ast:function(){return[P.B]},
$aso:function(){return[P.B]},
$isp:1,
$ist:1,
$iso:1}
P.j5.prototype={
$asp:function(){return[P.B]},
$ast:function(){return[P.B]},
$aso:function(){return[P.B]},
$isp:1,
$ist:1,
$iso:1}
P.ku.prototype={
aE:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a5(null,null,null,P.B)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.c1)(r),++p){o=J.ry(r[p])
if(o.length!==0)s.h(0,o)}return s},
eh:function(a){this.a.setAttribute("class",a.bc(0," "))}}
P.cd.prototype={
gdM:function(a){return new P.ku(a)},
dZ:function(a,b,c,d,e){throw H.k(new P.V("Cannot invoke insertAdjacentHtml on SVG."))},
$isf:1}
P.oH.prototype={$isf:1}
P.oJ.prototype={$isf:1}
P.eG.prototype={}
P.oQ.prototype={$isf:1,
gac:function(a){return a.href}}
P.d7.prototype={$isac:1}
P.p0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d7]},
$ist:1,
$ast:function(){return[P.d7]},
$iso:1,
$aso:function(){return[P.d7]}}
P.iN.prototype={
$asp:function(){return[P.d7]},
$ast:function(){return[P.d7]},
$aso:function(){return[P.d7]},
$isp:1,
$ist:1,
$iso:1}
P.j6.prototype={
$asp:function(){return[P.d7]},
$ast:function(){return[P.d7]},
$aso:function(){return[P.d7]},
$isp:1,
$ist:1,
$iso:1}
P.pb.prototype={$isf:1,
gac:function(a){return a.href}}
P.pf.prototype={$isf:1}
P.pg.prototype={$isf:1}
P.hX.prototype={$isf:1,
gac:function(a){return a.href}}
P.qv.prototype={$isf:1}
P.qw.prototype={$isf:1}
P.qx.prototype={$isf:1}
P.bg.prototype={}
P.d8.prototype={$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
P.fK.prototype={$isfK:1,$isac:1,
gm:function(a){return a.length}}
P.eV.prototype={$iseV:1,$isac:1,
gbN:function(a){return a.buffer}}
P.fL.prototype={
f0:function(a,b,c,d){return a.decodeAudioData(b,H.dl(c,1),H.dl(d,1))},
fQ:function(a,b){var t,s,r
t=P.fK
s=new P.bk(0,$.an,null,[t])
r=new P.dX(s,[t])
this.f0(a,b,new P.kv(r),new P.kw(r))
return s}}
P.kv.prototype={
$1:function(a){this.a.ay(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kw.prototype={
$1:function(a){var t=this.a
if(a==null)t.bj("")
else t.bj(a)},
$S:function(){return{func:1,args:[,]}}}
P.bA.prototype={}
P.e0.prototype={}
P.kT.prototype={
gbN:function(a){return a.buffer}}
P.kp.prototype={
gG:function(a){return a.name}}
P.nR.prototype={$isf:1}
P.qN.prototype={$isf:1}
P.jK.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bv(b,a,null,null,null))
return P.xo(a.item(b))},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
J:function(a,b){return P.xo(a.item(b))},
$isp:1,
$asp:function(){return[P.be]},
$ist:1,
$ast:function(){return[P.be]},
$iso:1,
$aso:function(){return[P.be]}}
P.iO.prototype={
$asp:function(){return[P.be]},
$ast:function(){return[P.be]},
$aso:function(){return[P.be]},
$isp:1,
$ist:1,
$iso:1}
P.j7.prototype={
$asp:function(){return[P.be]},
$ast:function(){return[P.be]},
$aso:function(){return[P.be]},
$isp:1,
$ist:1,
$iso:1}
T.fG.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
gU:function(a){return this.a.length===0},
gW:function(a){var t=this.a
return new J.i5(t,t.length,0,null,[H.U(t,0)])},
$ashl:function(){return[T.fH]},
$aso:function(){return[T.fH]},
gcz:function(a){return this.a}}
T.fH.prototype={
gba:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fa(C.x)
r=T.fa(C.y)
q=T.wk(0,this.b)
new T.iB(s,q,0,0,0,t,r).dl()
r=q.c.buffer
q=q.a
r.toString
q=H.cR(r,0,q)
this.cy=q
t=q}else{t=s.bx()
this.cy=t}this.ch=0}}return t},
A:function(a){return this.a},
gG:function(a){return this.a}}
T.dc.prototype={
A:function(a){return"ArchiveException: "+this.a}}
T.hh.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.aj()
if(typeof r!=="number")return H.af(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.T()
if(typeof b!=="number")return H.af(b)
s+=b
if(s<0||s>=t.length)return H.w(t,s)
return t[s]},
aP:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.af(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.aj()
if(typeof s!=="number")return H.af(s)
b=t-(a-s)}return T.t5(this.a,this.d,b,a)},
aW:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.T()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.af(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.w(q,s)
q[s]}return-1},
bb:function(a,b){return this.aW(a,b,0)},
cL:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.aj()
if(typeof s!=="number")return H.af(s)
r=this.aP(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.aj()
if(typeof p!=="number")return H.af(p)
if(typeof s!=="number")return s.T()
this.b=s+(t-(q-p))
return r},
bV:function(a){return P.oF(this.cL(a).bx(),0,null)},
Z:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.T()
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
if(typeof s!=="number")return s.T()
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
aN:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.T()
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
if(this.d===1)return(C.a.ao(p,56)|C.a.ao(o,48)|C.a.ao(n,40)|C.a.ao(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.ao(i,56)|C.a.ao(j,48)|C.a.ao(k,40)|C.a.ao(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bx:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.aj()
if(typeof r!=="number")return H.af(r)
q=t-(s-r)
t=this.a
r=J.ay(t)
if(!!r.$isd8){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cR(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xa(r.c0(t,s,p>o?o:p)))},
eG:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbN:function(a){return this.a},
ghp:function(a){return this.b}}
T.nq.prototype={
hM:function(a,b){var t,s,r,q
if(b==null)b=J.cm(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.ca(s-q)
C.r.aw(r,t,s,a)
this.a+=b},
cQ:function(a){return this.hM(a,null)},
hO:function(a){var t,s,r,q
t=J.bf(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.af(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.af(r)
this.ca(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.af(r)
C.r.a7(q,s,s+r,t.gbN(a),t.ghp(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.aj()
if(typeof q!=="number")return H.af(q)
this.a=t+(r-(s-q))},
aP:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cR(t,a,b-a)},
cZ:function(a){return this.aP(a,null)},
ca:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.aZ(P.dG("Invalid length "+H.A(s)))
r=new Uint8Array(s)
q=this.c
C.r.aw(r,0,q.length,q)
this.c=r},
f4:function(){return this.ca(null)},
gm:function(a){return this.a}}
T.pt.prototype={
fp:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aP(this.a-20,20)
if(s.a_()!==117853008){a.b=t
return}s.a_()
r=s.aN()
s.a_()
a.b=r
if(a.a_()!==101075792){a.b=t
return}a.aN()
a.Z()
a.Z()
q=a.a_()
p=a.a_()
o=a.aN()
n=a.aN()
m=a.aN()
l=a.aN()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
f5:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.aj()
if(typeof r!=="number")return H.af(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a_()===101010256){a.b=t
return q}}throw H.k(new T.dc("Could not find End of Central Directory Record"))},
eK:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.f5(a)
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
if(s>0)this.x=a.bV(s)
this.fp(a)
r=a.aP(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.T()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.ar()
if(!(p<t+o))break
if(r.a_()!==33639248)break
p=new T.pv(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
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
if(n>0)p.cy=r.bV(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.aj()
j=r.aP(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.aj()
if(typeof g!=="number")return H.af(g)
if(typeof k!=="number")return k.T()
r.b=k+(i-(h-g))
p.db=j.bx()
f=j.Z()
e=j.Z()
if(f===1){if(e>=8)p.y=j.aN()
if(e>=16)p.x=j.aN()
if(e>=24){o=j.aN()
p.cx=o}if(e>=28)p.z=j.a_()}}if(l>0)p.dx=r.bV(l)
a.b=o
p.dy=T.FU(a,p)
q.push(p)}}}
T.pu.prototype={
gba:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fa(C.x)
q=T.fa(C.y)
t=T.wk(0,t)
new T.iB(s,t,0,0,0,r,q).dl()
q=t.c.buffer
t=t.a
q.toString
t=H.cR(q,0,t)
this.cy=t
this.d=0}else{t=s.bx()
this.cy=t}}return t},
A:function(a){return this.z},
eL:function(a,b){var t,s,r,q
t=a.a_()
this.a=t
if(t!==67324752)throw H.k(new T.dc("Invalid Zip Signature"))
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
this.z=a.bV(s)
this.Q=a.cL(r).bx()
this.cx=a.cL(this.ch.x)
if((this.c&8)!==0){q=a.a_()
if(q===134695760)this.r=a.a_()
else this.r=q
this.x=a.a_()
this.y=a.a_()}}}
T.pv.prototype={
A:function(a){return this.cy}}
T.ps.prototype={
fR:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.FT(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.C],p=0;p<t.length;t.length===r||(0,H.c1)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.cV()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fH(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dY(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.t5(k,0,null,0)}else if(k instanceof T.hh){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hh(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.fY(m,"/")
j.y=n.r
s.push(j)}return new T.fG(s,null)}}
T.m7.prototype={
eF:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ao(1,this.b)
r=H.cB(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.w(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.w(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iB.prototype={
dl:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.T()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.ar()
if(!(r<s+q))break
if(!this.fm())break}},
fm:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.T()
if(typeof s!=="number")return s.ar()
if(s>=r+q)return!1
p=this.at(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.at(16)
s=this.at(16)
if(n!==0&&n!==(s^65535)>>>0)H.aZ(new T.dc("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.aj()
r=q-r
if(n>s-r)H.aZ(new T.dc("Input buffer is broken"))
m=t.aP(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.aj()
if(typeof l!=="number")return H.af(l)
if(typeof s!=="number")return s.T()
t.b=s+(r-(q-l))
this.b.hO(m)
break
case 1:this.df(this.f,this.r)
break
case 2:this.fn()
break
default:throw H.k(new T.dc("unknown BTYPE: "+o))}return(p&1)===0},
at:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.T()
if(typeof r!=="number")return r.ar()
if(r>=q+p)throw H.k(new T.dc("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.w(q,r)
o=q[r]
this.c=(this.c|C.a.as(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ao(1,a)
this.c=C.a.dE(t,a)
this.d=s-a
return(t&r-1)>>>0},
cj:function(a){var t,s,r,q,p,o,n,m,l,k
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
if(p<0||p>=o.length)return H.w(o,p)
m=o[p]
this.c=(this.c|C.a.as(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ao(1,s)-1)>>>0
if(p>=t.length)return H.w(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dE(r,k)
this.d=q-k
return l&65535},
fn:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.at(5)+257
s=this.at(5)+1
r=this.at(4)+4
q=H.cB(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.w(C.E,o)
n=C.E[o]
m=this.at(3)
if(n>=q)return H.w(p,n)
p[n]=m}l=T.fa(p)
k=new Uint8Array(H.cB(t))
j=new Uint8Array(H.cB(s))
i=this.de(t,l,k)
h=this.de(s,l,j)
this.df(T.fa(i),T.fa(h))},
df:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cj(a)
if(s>285)throw H.k(new T.dc("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.f4()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.w(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.w(C.C,p)
o=C.C[p]+this.at(C.V[p])
n=this.cj(b)
if(n<=29){if(n>=30)return H.w(C.z,n)
m=C.z[n]+this.at(C.U[n])
for(r=-m;o>m;){t.cQ(t.cZ(r))
o-=m}if(o===m)t.cQ(t.cZ(r))
else t.cQ(t.aP(r,o-m))}else throw H.k(new T.dc("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.aj();--r
t.b=r
if(r<0)t.b=0}},
de:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cj(b)
switch(q){case 16:p=3+this.at(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=s}break
case 17:p=3+this.at(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
case 18:p=11+this.at(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.k(new T.dc("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.ko.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Math Book",H.a([$.K,$.Y,$.aC],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.K,$.Y],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.D,$.Y,$.aO],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.K,$.Y],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.K,$.Y],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c5,$.at],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.Y],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f4,$.n)
q.i(0,$.bc,$.n)
q.i(0,$.f6,$.j)
q.i(0,$.aM,$.H)
q.i(0,$.cA,$.j)
p=$.m
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.r
o=o+n+" to stop "
m=$.L
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.EH
n=[U.b]
q.i(0,new R.Z("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.z(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.y)
m=$.m
q.i(0,new R.Z("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.r+" to stop "+$.L+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.nK(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
p="The "+m+" finds a massive library, filled with books. The "
l=$.r
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.x
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.Z("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.dO(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.ej,$.H)
s.i(0,$.cA,$.n)
p=$.m
o="The "+p+"  is approached by a "
l=$.r
s.i(0,new R.Z("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.L+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p=$.m
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.r
s.i(0,new R.Z("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.L+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.d5(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
s.i(0,new R.Z("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.r+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.dO(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.ej,$.H)
t.i(0,$.cA,$.n)
t.i(0,$.c2,$.H)
t.i(0,$.rU,$.H)
r=$.m
q="The "+r+"  is approached by a "
p=$.r
q=q+p+" who offers them a grant to study "
o=$.aa
t.i(0,new R.Z("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.L+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.dO(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
o=$.r
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.L
r=r+p+".  It is up to the "
q=$.m
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.aa
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.EN
t.i(0,new R.Z("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.e9(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
t.i(0,new R.Z("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.L+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.r+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
m.i(0,new X.F(s,t,null),$.aA)}}
K.bQ.prototype={}
A.rm.prototype={
$1:function(a){var t,s,r,q,p
t=window
s="scrollY" in t?C.d.b6(t.scrollY):C.d.b6(t.document.documentElement.scrollTop)
r=window.screen.height
if(typeof r!=="number")return H.af(r)
q=1500-r
if(q>s){t=document.querySelector("body").style
p="center -"+C.a.A(s)+"px"
t.backgroundPosition=p}else{t=document.querySelector("body").style
p="center -"+C.a.A(q)+"px"
t.backgroundPosition=p}},
$S:function(){return{func:1,args:[W.R]}}}
L.fI.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a4)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.U(t,0)]))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.j)
q.i(0,$.bc,$.H)
q.i(0,$.dM,$.j)
q.i(0,$.c2,$.n)
q.i(0,$.e3,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.x
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.bq+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.M("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.Q(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
j=this.f
j.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.eo,$.j)
s.i(0,$.el,$.H)
s.i(0,$.en,$.n)
s.i(0,$.cM,$.j)
s.i(0,$.ce,$.H)
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
g="The "+h+" lies slain by the "+p+"'s "+$.bq+". The "+p+" has won! "
s.i(0,new R.M("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.Q(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
j.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aM,$.j)
t.i(0,$.bc,$.H)
t.i(0,$.c8,$.n)
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
l="The "+m+" lies slain by the "+r+"'s "+$.bq+". The "+r+" has won! "
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.Q(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.u7(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
l=$.m
r="The "+l+" learns that all of the local "
m=$.r
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.x
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.bq+". The "+l+" has won! "
t.i(0,new R.M("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.Q(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
j.i(0,new X.F(s,t,null),$.aq)},
A:function(a){return this.Q},
ah:function(a,b,c,d){var t=this.Q
this.r=new X.im("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.i6]),H.a([],[M.h6]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.D()
this.E()
t=this.e
if($.$get$kr().Y(0,t))H.aZ("Duplicate aspect id for "+this.A(0)+": "+t+" is already registered for "+J.cK($.$get$kr().n(0,t))+".")
$.$get$kr().i(0,t,this)},
gG:function(a){return this.Q}}
L.aS.prototype={}
M.kt.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Barbells",H.a([$.ag,$.ca,$.D],s),null,!1,"Strength Building Metal")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.fc,$.cb],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.ji,$.X],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.fc,$.cb],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aU,$.a7],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.ji,$.X,$.dN],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.D,$.bd],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.vG,$.cb],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.cb,$.aY],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.e4,$.H)
q.i(0,$.c4,$.n)
q.i(0,$.cM,$.H)
p=$.m
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.r
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.L+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.Z("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.y)
m=$.m
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.r
q.i(0,new R.Z("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.L+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e9(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
n="The "+m+"  wanders into a bunch of "
p=$.r
q.i(0,new R.Z("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.fn(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.e4,$.n)
t.i(0,$.f7,$.n)
t.i(0,$.c4,$.n)
s=$.m
r="The "+s+" finds a team of underdog "
p=$.r
t.i(0,new R.Z("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.nK(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.r
s="A group of "+p+"s approach the "
r=$.m
s=s+r+". Apparently their sports team lost their coach to the "+$.x+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.L
t.i(0,new R.Z("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e9(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
k=$.r
p="A group of "+k+"s approach the "
r=$.m
t.i(0,new R.Z("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.x+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.aa+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
m.i(0,new X.F(q,t,null),$.aA)}}
U.kx.prototype={
O:function(a,b){var t=0,s=P.bt(),r,q,p,o
var $async$O=P.bz(function(c,d){if(c===1)return P.bw(d,s)
while(true)switch(t){case 0:q=$.$get$uV()
p=q.createBufferSource()
o=p
t=3
return P.cJ(J.xJ(q,b),$async$O)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$O,s)},
$asdp:function(){return[P.eV]},
$asc9:function(){return[P.eV,P.bg]}}
U.mW.prototype={
aM:function(a){return"audio/mpeg"}}
U.nn.prototype={
aM:function(a){return"audio/ogg"}}
U.oB.prototype={
O:function(a,b){var t=0,s=P.bt(),r,q,p
var $async$O=P.bz(function(c,d){if(c===1)return P.bw(d,s)
while(true)switch(t){case 0:q=W.yk(b)
p=new W.hU(q,"canplaythrough",!1,[W.R])
t=3
return P.cJ(p.ga9(p),$async$O)
case 3:r=q
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$O,s)},
$asik:function(){return[W.eW]},
$asc9:function(){return[W.eW,P.B]}}
U.oC.prototype={}
U.oD.prototype={}
O.kz.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Cod Piece",H.a([$.O,$.a_,$.aN,$.T,$.X],s),"God damn it, MI. ",!1,null)
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.t9,$.T,$.bP],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aD,$.X,$.bh,$.T,$.a8],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.O,$.aD,$.T,$.aV],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.cC,$.j)
t.i(0,$.hc,$.j)
t.i(0,$.co,$.j)
t.i(0,$.ds,$.j)
t.i(0,$.cn,$.j)
t.i(0,$.f1,$.j)
r="After all the bullshit the "+$.x+" has put the native "
q=$.r
r=r+q+"s through, the "
p=$.m
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.au+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.L
m=[U.b]
t.i(0,new R.a3("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.z(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.y)
p=$.r
n="A group of jubilant "+p+"s are following the "
q=$.m
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.L
t.i(0,new R.a3("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.x+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
q=$.m
t.i(0,new R.a3("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.x+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.z(),!1,!1,new Y.kM("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.y)
q="The "+$.x+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.m
q=q+r+" organizes a huge festival for all the "
p=$.r
t.i(0,new R.bE("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.oP.prototype={
O:function(a,b){var t=0,s=P.bt(),r
var $async$O=P.bz(function(c,d){if(c===1)return P.bw(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$O,s)},
$aseF:function(){return[P.B]},
$asc9:function(){return[P.B,P.B]}}
Y.nO.prototype={
aM:function(a){return"application/octet-stream"},
O:function(a,b){var t=0,s=P.bt(),r
var $async$O=P.bz(function(c,d){if(c===1)return P.bw(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$O,s)},
$asdp:function(){return[P.bg]},
$asc9:function(){return[P.bg,P.bg]}}
T.kE.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Mystical Vial of Blood",H.a([$.aO,$.bh,$.S,$.aI],s),null,!1,"Vial of Not-ABs Oil")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.ao,$.bh,$.S,$.aT],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.O,$.bh,$.S,$.aI,$.eq],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.aV,$.S,$.aI,$.eq,$.aF],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.X,$.mm,$.bh,$.aI,$.S,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.df,$.j)
q.i(0,$.rX,$.j)
q.i(0,$.c2,$.n)
p=$.m
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.r
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.aa+" and some boondollars in compensation."
n=this.x1
k=[U.b]
q.i(0,new R.Z("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.e9(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.y)
n=$.r
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.L+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.x
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.m
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.bq+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.M("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.Q(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n=$.m
m="The "+n+" is playing against a "
l=$.r
m=m+l+" in a friendly game of "+$.aa+" Battle. With some smooth moves, they pull out a victory. The "+l+" comes over for a handshake. The "+n+" notices some ink dripping out of the "+l+"\u2019s arm. The "+l+" becomes confused. 'Ink? No this is blood from when I scraped my limb.' What the hell is blood?"
l="The "+n+" tries asking around what blood is, but every "+l+" asked just looks at them strangely and walks away. Finally, they run into a "
i=$.x
q.i(0,new R.Z("The True Meaning of Blood",!1,[new U.b(m),new U.b(l+i+" minion who mocks their lack of knowledge. 'If you don\u2019t even know what blood is maybe you should read a book sometime.'"),new U.b("The "+n+" takes the rude (and also dead) "+i+" minion\u2019s advice and gets their answer at a library. According to a biology textbook, people here have a liquid called blood running through tubes across their entire body. What a completely weird and alien concept.")],H.a([],k),R.EZ(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.aj)
i=this.f
i.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cM,$.j)
s.i(0,$.cn,$.H)
s.i(0,$.aM,$.H)
s.i(0,$.iv,$.j)
s.i(0,$.co,$.H)
p=$.m
o="The "+p+"  and the "
n=$.dx
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
j=$.x
l=l+j+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+j+"."
h="Slaying the "+j+" proves the POWER OF TEAMWORK!"
s.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.Q(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+j+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.dP(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
h=$.m
j="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
j=j+n+"s explains that before  "
p=$.x
j=j+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
n="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.bq+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.wh
s.i(0,new R.M("Chain the Towers",!1,[new U.b(j),new U.b(n),new U.b(l),new U.Q(m,h,o)],H.a([],k),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.y)
p=$.m
o="The "+p+" learns of the "
h=$.au
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.r
o=o+m+" explains that the "
l=$.x
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
j="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.bq+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.M("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.Q(j,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
p=$.m
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
j=$.r
h=h+j+" on "+$.au+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
j="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+j+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+j+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.e6+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a3("One Degree of Separation",!1,[new U.b(h),new U.b(n),new U.b(j)],H.a([],k),R.dO(),!1,!1,new Y.bV("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.au
j=j+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.e6+" is now more popular with your friends than you are."
s.i(0,new R.a3("Steal The Friends",!1,[new U.b(j),new U.b(h),new U.b(n)],H.a([],k),R.nL(),!1,!1,new Y.bV("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
n="The "+p+"  and the "
h=$.dx
n=n+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
j="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.x
j=j+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.b(n),new U.Q(j,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.A(C.n)+".",o)],H.a([],k),R.dP(),!1,!1,new Y.hF(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aj)
i.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aM,$.j)
t.i(0,$.bc,$.H)
t.i(0,$.c8,$.n)
r="In the wake of the defeat of the "+$.x+" it becomes really how isolated the individual "
q=$.r
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.m
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.e6+" to kick your ass, but luckily they have several."
t.i(0,new R.a3("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.e9(),!1,!1,new Y.bV("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.m
q="The "+o+" learns that two prominent "
p=$.r
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
n="In a dramatic reveal, the "+o+" discovers that "
m=$.x
n=n+m+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
l="The "+o+" confronts "+m+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+m+" lies slain by the "+o+"'s "+$.bq+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.L+"ing. "
t.i(0,new R.M("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(n),new U.Q(l,"The deception of "+m+" continues with the defeat of the "+o+".",p)],H.a([],k),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
i.i(0,new X.F(s,t,null),$.aq)}}
T.kH.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Pan's Pipe",H.a([$.a8,$.X,$.bh,$.S],s),null,!1,"Smonkin Weeds Pipe")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.aX,$.S],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a7,$.D,$.bh,$.S],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.ap,$.D,$.aU,$.S,$.a_],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.c8,$.n)
q.i(0,$.f7,$.j)
q.i(0,$.aM,$.n)
p=$.m
o="The "+p+" tries posting a letter through the "
n=$.aa
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.x
o=o+m+" has screwed with the mail system, crippling the "
l=$.r
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.bq+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.EI
i=[U.b]
q.i(0,new R.M("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.Q(j,p,l)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.y)
m=this.f
m.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.bc,$.j)
s.i(0,$.f7,$.n)
s.i(0,$.aM,$.n)
s.i(0,$.c4,$.n)
s.i(0,$.c8,$.n)
p=$.m
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.aa
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.r
k=l+k+" fields. The "+k+"s "+$.L+"ing is so joyful it's literally deafening. "
l=$.x
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.bq+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.M("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.Q(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
h=$.m
p="\u201cThe "+h+" returns home from exploring their land, but a "
l=$.r
s.i(0,new R.Z("Slay the Windmills",!1,[new U.b(p+l+" is waiting at the door. Shaking heavily, she tells the "+h+" that her village is being terrorized by terrible monsters. The "+h+" agrees to help, and is lead to a plain just outside the village. The "+l+" points in one direction to indicate the monsters, but all the "+h+" can see are a bunch of windmills. Wait\u2026are the windmills the monsters?! The "+l+" nods her head. The "+h+" knows consorts can be pretty dumb, but this really takes the cake.\u201d "),new U.b("The "+h+" whacks the bases of a few windmills with their "+$.bq+" until they collapse. The "+l+"s from the village cheer and declare the "+h+" as a true hero and slayer of beasts. The "+h+" is happy to get praised, but is still a little frustrated by all of this nonsense. "),new U.b("Most of the windmills have been knocked over. The "+h+" starts to hit one of the last windmills, when suddenly it rears back and opens a toothy mouth in a roar. Holy Shit! It turns out windmill monsters aren\u2019t a delusion after all! The "+h+" slays the windmill monster in a tough strife and enjoys the "+l+" village\u2019s victory party.  ")],H.a([],i),R.d5(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.n)
m.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.ce,$.j)
t.i(0,$.lJ,$.j)
t.i(0,$.f7,$.H)
t.i(0,$.c8,$.H)
r=$.m
q="The "+r+" is chilling in a "+$.r+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.x
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.aa
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.au+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.bq+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.M("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.Q(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
m.i(0,new X.F(s,t,null),$.aq)}}
M.fP.prototype={
ej:function(a){var t=this.a
if(!t.Y(0,a))return
return t.n(0,a)}}
Y.kJ.prototype={
O:function(a,b){var t=0,s=P.bt(),r,q,p,o,n,m,l,k,j,i
var $async$O=P.bz(function(c,d){if(c===1)return P.bw(d,s)
while(true)switch(t){case 0:q=J.eS(b,"\n")
p=P.B
o=P.cE(p,p)
n=P.cE(p,[P.eB,P.B])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.da(k).bd(k).length===0)m=null
else if(m==null)m=C.c.bd(k)
else{j=C.c.bd(k)
i=C.c.K(m,0,C.c.e_(m,$.$get$uZ())+1)+j
o.i(0,i,m)
if(!n.Y(0,m))n.i(0,m,P.a5(null,null,null,p))
J.xC(n.n(0,m),i)}}r=new M.fP(o,n)
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$O,s)},
$aseF:function(){return[M.fP]},
$asc9:function(){return[M.fP,P.B]}}
A.kO.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.K,$.ag,$.aT,$.ca],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.K,$.aT],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.aO,$.aT],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aU,$.a7,$.aT],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.ao,$.aT],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.O,$.aT],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.D,$.aT],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.co,$.n)
q.i(0,$.cz,$.j)
q.i(0,$.c4,$.n)
p=$.m
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.r
o=o+n+"s are too scared to even "+$.L+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.x+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.Z("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.y)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.e4,$.H)
s.i(0,$.c4,$.j)
s.i(0,$.cz,$.j)
s.i(0,$.cC,$.j)
o=$.m
n="The "+o+" learns of an Open Mic Nite at the "
m=$.au
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.r
k=k+j+"s let out a braying "+$.L+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.EL
s.i(0,new R.Z("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.z(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cN,$.H)
t.i(0,$.c3,$.n)
t.i(0,$.cz,$.j)
t.i(0,$.c4,$.n)
t.i(0,$.h7,$.n)
r=$.m
q="The "+r+"  is approached by a Crafty "
o=$.r
q=q+o+" who offers them a magical "
n=$.aa
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.L
t.i(0,new R.Z("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(s,t,null),$.aA)}}
S.bB.prototype={
A:function(a){return H.A(new H.dV(H.kg(this),null))+": "+this.c},
gG:function(a){return this.c}}
S.i7.prototype={}
S.m4.prototype={}
M.l0.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Can of Spray Paint",H.a([$.av,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.K,$.ah,$.aT,$.aC],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.tq,$.D,$.ar],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.K,$.ah,$.aC],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.av,$.am,$.K],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.ah,$.K],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.ah,$.aE,$.am],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.av,$.ah],s),null,!1,"Pain Drink Set")
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
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.n)
q.i(0,$.cA,$.j)
q.i(0,$.aM,$.n)
p=$.m
o="The "+p+" visits a beautiful "
n=$.aa
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.r
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.x+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.L+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.Z("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.y)
m=this.r
m.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.e4,$.H)
s.i(0,$.c4,$.n)
s.i(0,$.cz,$.H)
s.i(0,$.bc,$.n)
s.i(0,$.cC,$.j)
o=$.m
n="The "+o+" finds a troupe of dejected looking "
l=$.r
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.au
l=l+n+" "
k=$.aa
s.i(0,new R.Z("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.L+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
m.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.hc,$.H)
t.i(0,$.co,$.H)
t.i(0,$.f1,$.H)
t.i(0,$.c3,$.H)
t.i(0,$.bc,$.n)
t.i(0,$.aM,$.n)
r=$.m
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.L
q=q+o+"ingworth, "
n=$.r
q=q+n+" heiress to the "+$.aa+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.EB
t.i(0,new R.Z("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.z(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.y)
m.i(0,new X.F(s,t,null),$.aA)}}
T.l6.prototype={}
V.l8.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Trendy Fabric",H.a([$.av,$.O],s),null,!1,"Weird Tasting Candy Paper")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.av,$.tf,$.eq],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.D,$.tj,$.aL],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jg
r=A.i("Broom",H.a([r,$.X,$.ag,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.X,$.ts,$.ag],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.O,$.aY,$.bh,$.av,$.hj],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.av,$.O],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aF,$.ca,$.D,$.bl],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.av,$.K],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bl],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.D,$.ap,$.ag,$.ca,$.te],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bP],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bP,$.jj],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.av,$.bS,$.aQ],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.ao,$.bi,$.aX],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.ao,$.bi],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.av,$.ao,$.aI],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cC,$.n)
q.i(0,$.cn,$.n)
q.i(0,$.co,$.H)
p=$.m
o="The "+p+" is visited by a Beautiful "
n=$.r
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.aa
l=[U.b]
q.i(0,new R.Z("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.L+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.z(),!1,!1,new Y.i9("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n=this.r
n.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.co,$.j)
s.i(0,$.c4,$.n)
s.i(0,$.f1,$.j)
s.i(0,$.ds,$.n)
s.i(0,$.bc,$.j)
p=$.m
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.aa
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.r
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.L+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.EJ
s.i(0,new R.Z("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.z(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.h8,$.j)
t.i(0,$.bc,$.n)
t.i(0,$.f2,$.j)
t.i(0,$.aM,$.n)
t.i(0,$.iv,$.j)
r=$.m
q="The "+r+" finds a loom, and a Wizened "
p=$.r
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.aa
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.L+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.Z("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(s,t,null),$.aA)}}
U.l9.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aC,$.a7,$.K,$.aD,$.S,$.a_],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aE,$.bh,$.S,$.aD],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.aX,$.bh,$.S,$.aD],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.aO,$.S,$.bP],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.aO,$.S,$.bl,$.aD,$.aV,$.bY,$.aW],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aF,$.aW,$.aD,$.K,$.S],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dM,$.j)
q.i(0,$.cV,$.n)
q.i(0,$.f7,$.H)
q.i(0,$.bc,$.H)
q.i(0,$.c2,$.n)
p=$.m
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.r
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.aa
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.x
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.bq+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.M("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.Q(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dM,$.j)
s.i(0,$.cV,$.n)
s.i(0,$.ep,$.aj)
s.i(0,$.ek,$.n)
s.i(0,$.rU,$.n)
s.i(0,$.df,$.n)
s.i(0,$.cV,$.n)
s.i(0,$.bc,$.H)
s.i(0,$.c2,$.n)
s.i(0,$.dg,$.n)
p=$.m
o="The "+p+" has found a group of Violent "
m=$.r
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.au
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.L+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.x
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.bq+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.M("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.Q(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.aa
p=p+l+"s alike. "
l=$.r+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.x
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.bq+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.M("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.Q(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aM,$.j)
t.i(0,$.c2,$.j)
t.i(0,$.vk,$.aj)
t.i(0,$.f4,$.H)
r=$.m
q="The "+r+" finds a small dungeon bearing the image of "
p=$.x
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.r+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.M("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.Q(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
k=$.m
p="The "+k+" learns from one of their "
r=$.r
p=p+r+"s that there is an ancient prophecy of a "
l=$.au
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.aa
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.x
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.bq+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.EA
t.i(0,new R.M("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.Q(o,k,q)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(s,t,null),$.aq)}}
Z.la.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Dream Diary",H.a([$.K,$.aC,$.S],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aE,$.bh,$.ag,$.S,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aE,$.bh,$.S],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.h8,$.n)
q.i(0,$.f2,$.j)
q.i(0,$.aM,$.n)
q.i(0,$.iv,$.n)
p=$.r
o="A "+p+" child tugs on the "
n=$.m
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.aa
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.x
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.L+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.EG
k=[U.b]
q.i(0,new R.M("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.Q(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.y)
l=this.f
l.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.ce,$.n)
s.i(0,$.f2,$.j)
s.i(0,$.du,$.n)
s.i(0,$.cU,$.n)
s.i(0,$.lF,$.n)
s.i(0,$.cz,$.j)
p=$.m
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.r
n=n+m+"s are even starting to snigger and "
j=$.L
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.x
s.i(0,new R.M("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.Q("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
l.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dL,$.j)
t.i(0,$.iq,$.n)
t.i(0,$.aM,$.n)
t.i(0,$.cU,$.j)
t.i(0,$.lF,$.j)
t.i(0,$.f2,$.n)
r=$.m
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.x
t.i(0,new R.M("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.au+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.r+" is "+$.L+"ing in reverse. Another is in a "+$.aa+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.Q("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
l.i(0,new X.F(s,t,null),$.aq)}}
X.im.prototype={}
X.i6.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.h6]]}}}
M.h6.prototype={}
U.lC.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Fluthulu Poster",H.a([$.O,$.aY,$.aW,$.bm],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.O,$.aY,$.aW],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aF,$.aE,$.aX,$.fe,$.aN],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aE,$.vN,$.er,$.aN],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aE,$.bY,$.bi,$.aW],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aC,$.K,$.az,$.aW],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.K,$.a1,$.ag],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.K,$.a1,$.ag],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.K,$.a1,$.bY,$.aW,$.bm],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aF,$.at,$.a1,$.ag,$.aN],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aF,$.ta,$.a1,$.ag,$.aN],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f3,$.aj)
q.i(0,$.cn,$.n)
q.i(0,$.c8,$.n)
q.i(0,$.cN,$.H)
p=$.m
o="The "+p+" learns of a Beautiful "
n=$.r
o=o+n+" who has been kidnapped by the vial "
m=$.x
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.aa
j=[U.b]
q.i(0,new R.Z("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.j)
s.i(0,$.df,$.j)
s.i(0,$.ir,$.n)
s.i(0,$.c2,$.j)
s.i(0,$.ep,$.j)
s.i(0,$.hb,$.n)
o=$.m
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.r
s.i(0,new R.Z("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.j)
t.i(0,$.ha,$.n)
t.i(0,$.c2,$.j)
t.i(0,$.dK,$.n)
t.i(0,$.ej,$.n)
t.i(0,$.rX,$.n)
r=$.m
q="The "+r+" finds a group of three "
o=$.r
q=q+o+"s "
n=$.L
t.i(0,new R.Z("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(s,t,null),$.aA)}}
N.ab.prototype={
A:function(a){return H.A(new H.dV(H.kg(this),null))+": "+H.A(this.b)}}
O.c9.prototype={
aX:function(a){var t=0,s=P.bt(),r,q=this,p
var $async$aX=P.bz(function(b,c){if(b===1)return P.bw(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cJ(q.aO(a),$async$aX)
case 3:r=p.O(0,c)
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$aX,s)}}
O.dp.prototype={
b3:function(a){var t=0,s=P.bt(),r
var $async$b3=P.bz(function(b,c){if(b===1)return P.bw(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$b3,s)},
cv:function(a){var t=0,s=P.bt(),r,q=this
var $async$cv=P.bz(function(b,c){if(b===1)return P.bw(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.yl([J.uL(a)],q.aM(0),null))
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$cv,s)},
aO:function(a){var t=0,s=P.bt(),r,q=this,p,o
var $async$aO=P.bz(function(b,c){if(b===1)return P.bw(c,s)
while(true)switch(t){case 0:p=P.bg
o=new P.bk(0,$.an,null,[p])
W.vs(a,null,q.aM(0),null,null,"arraybuffer",null,null).aY(new O.kD(new P.dX(o,[p])))
r=o
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$aO,s)},
$asc9:function(a){return[a,P.bg]}}
O.kD.prototype={
$1:function(a){this.a.ay(0,H.kh(J.xP(a),"$isbg"))},
$S:function(){return{func:1,args:[W.e7]}}}
O.eF.prototype={
b3:function(a){var t=0,s=P.bt(),r,q,p,o,n
var $async$b3=P.bz(function(b,c){if(b===1)return P.bw(c,s)
while(true)switch(t){case 0:a.toString
q=H.cR(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hG(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$b3,s)},
aO:function(a){var t=0,s=P.bt(),r
var $async$aO=P.bz(function(b,c){if(b===1)return P.bw(c,s)
while(true)switch(t){case 0:r=W.vr(a,null,null)
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$aO,s)},
$asc9:function(a){return[a,P.B]}}
O.ik.prototype={
aO:function(a){var t=0,s=P.bt(),r
var $async$aO=P.bz(function(b,c){if(b===1)return P.bw(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$aO,s)},
b3:function(a){return H.aZ("Element format doesn't read from buffers")},
$asc9:function(a){return[a,P.B]}}
V.lU.prototype={
aM:function(a){return"font/opentype"},
O:function(a,b){var t=0,s=P.bt(),r
var $async$O=P.bz(function(c,d){if(c===1)return P.bw(d,s)
while(true)switch(t){case 0:t=3
return P.cJ(A.hr("scripts/Rendering/text/opentype.min.js",!1),$async$O)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$O,s)},
$asdp:function(){return[R.hd]},
$asc9:function(){return[R.hd,P.bg]}}
Z.il.prototype={}
E.iz.prototype={}
E.nm.prototype={}
E.N.prototype={
A:function(a){var t="["+J.cK(this.a)+" x "+H.A(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fJ.prototype={
A:function(a){var t="[(Random from "+P.tx(this.d,"(",")")+") x "+H.A(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.ks.prototype={
A:function(a){return"[Stats assigned from player Interests x"+H.A(this.b)+"]"}}
Y.lZ.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aC,$.T,$.K,$.a_,$.mq],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aE,$.T,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.O,$.T,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.to,$.T,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.lL,$.n)
t.i(0,$.c8,$.j)
t.i(0,$.dg,$.H)
t.i(0,$.dt,$.j)
r=$.r
q="An excited "+r+" runs up to the "
p=$.m
q=q+p+" and starts to "
o=$.L
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.au
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.aa
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.x
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.M("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.Q(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
o=$.m
t.i(0,new R.a3("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.x+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.r+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.z(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.y)
o=$.r
j="Now that the "+o+"s are free from the reign of "+$.x+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.m
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.L
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.au+" Quest Online: The "+$.aa+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.fy
t.i(0,new R.a3("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.y)
p="The "+$.x+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.m
p=p+o+" shows the "
r=$.r
t.i(0,new R.bE("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.L+"s in time to stop them.    ")],H.a([],i),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.m_.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Sherpa Parka",H.a([$.bl,$.T,$.cg],s),"Clearly the best class uses this.",!1,null)
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a_,$.bl,$.aC,$.K,$.T,$.Y],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.D,$.T,$.aU],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.D,$.T,$.a7,$.Y],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.lL,$.j)
t.i(0,$.c8,$.j)
t.i(0,$.dg,$.n)
t.i(0,$.dt,$.j)
r="Now that the "+$.x+" is out of the way, a group of "
q=$.r
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.m
o=[U.b]
t.i(0,new R.a3("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.L+", but they are happy.")],H.a([],o),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
q="The "+$.x+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.m
t.i(0,new R.bE("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.r+" "+$.L+"s in time to stop them.    ")],H.a([],o),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.m0.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Doll",H.a([$.to,$.av,$.as,$.S],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Soul Puppet",H.a([$.X,$.as,$.S,$.a_,$.aW],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.ti,$.S],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.K,$.S,$.az],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.am,$.aO,$.S],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.ek,$.H)
q.i(0,$.em,$.j)
q.i(0,$.c4,$.n)
p=$.m
o="The "+p+", guided by a "+$.r+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.x
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.bq+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.M("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.Q(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
j=$.m
p="The "+j+" finds a Violent "
l=$.r
p=p+l+". A Magical Talking "
k=$.aa
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.x
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.M("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.Q(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.nL(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h=this.f
h.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cz,$.j)
s.i(0,$.ir,$.j)
s.i(0,$.f7,$.n)
s.i(0,$.c2,$.j)
s.i(0,$.co,$.n)
s.i(0,$.dg,$.H)
p=$.m
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.aa
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.x
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.bq+". The "+p+" is victorious. "
s.i(0,new R.M("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.Q(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
j="Now that the "+$.x+" has been defeated, a Copy "
p=$.m
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.r
j=j+k+"s "
l=$.L
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.e6+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a3("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.e9(),!1,!1,new Y.bV("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.x
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.M("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.Q(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.ip,$.j)
t.i(0,$.co,$.j)
t.i(0,$.lK,$.j)
t.i(0,$.f1,$.n)
t.i(0,$.hb,$.j)
t.i(0,$.cn,$.n)
t.i(0,$.em,$.H)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.r
t.i(0,new R.M("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.au+" laws put in place by "+$.x+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
r=$.m
p="The "+r+" finds a weeping Broken Hearted "
q=$.r
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.au
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.L
t.i(0,new R.a3("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.fn(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
q=$.m
m="The "+q+"  and the "
r=$.dx
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.x
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.M("Flushed Shipping Dungeon",!1,[new U.b(m),new U.Q(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.A(C.n)+".",n)],H.a([],i),R.dP(),!1,!1,new Y.ix(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aj)
n=$.m
r="The "+n+"  and the "
q=$.dx
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.x
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.M("Pitched Shipping Dungeon",!1,[new U.b(r),new U.Q(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.A(C.n)+".",m)],H.a([],i),R.dP(),!1,!1,new Y.jB(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aj)
h.i(0,new X.F(s,t,null),$.aA)}}
B.m1.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Family Ashes",H.a([$.aF,$.ap,$.T,$.aD,$.bW],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a_,$.K,$.T,$.aD,$.mn],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aC,$.T,$.ah],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.vC,$.T,$.t6,$.mn],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.t7,$.T,$.ar,$.mn],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.ce,$.n)
r=$.x
q="With the death of the "+r+", it now falls to the "
p=$.m
o=[U.b]
t.i(0,new R.a3("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.r+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
r="The "+$.x+" has released the frogs into the "
p=$.m
t.i(0,new R.bE("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bL)}}
X.m3.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Wand",H.a([$.X,$.S,$.a1,$.bj],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.bj,$.bp,$.S,$.aP,$.a8,$.a_,$.a1],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bT,$.mm,$.S,$.a1,$.aT,$.bj],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.bj,$.aP,$.S,$.ap],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aE,$.aP,$.S,$.bj],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.rT,$.j)
q.i(0,$.cn,$.n)
q.i(0,$.aM,$.j)
q.i(0,$.cU,$.j)
p=$.m
o="The "+p+" is just minding their own business when they see a wizened "
n=$.r
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.L+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.x
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.aa
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.ED
i=[U.b]
q.i(0,new R.M("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.Q(k,p,j)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.y)
n=$.m
j="The "+n+" has slain "+$.x+", but there\u2019s still one thing left to do. The land is infested with terrifying creatures called angels and it\u2019s been creeping the "+n+" out the whole time. Clearly their ultimate quest for this land must be to eliminate all the angels and free the land from their terror."
p="Angel killing is a lot harder than the "+n+" expected, and they were already expecting it to be pretty tough. The angels have huge amounts of health, and they\u2019re now completely pissed off over the whole exterminating them thing going on. The land is 100 times more terrifying now with swarming angels, but things are always darkest before the dawn! The "+n+" continues on their righteous quest."
k="All of the horrible angels have finally been slain. The land has been saved from their menace. The "+n+" excitedly waits for their quest reward, but nothing happens. They go to some of the "
l=$.r
q.i(0,new R.a3("Kill the Angels",!1,[new U.b(j),new U.b(p),new U.b(k+l+" villages to ask for a reward, but they are refused. Frankly, the "+l+"s would have preferred the angels remained instead of hiding in their homes while the "+n+" was waging their one person war. Maybe genocide wasn\u2019t the right answer after all?")],H.a([],i),R.d5(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.y)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.j)
s.i(0,$.h7,$.n)
s.i(0,$.du,$.j)
p=$.m
o="The "+p+"  is approached by a Crafty "
m=$.r
o=o+m+" who offers them a magical "
l=$.aa
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.x
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.M("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.Q(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aM,$.j)
t.i(0,$.ds,$.H)
t.i(0,$.cA,$.j)
t.i(0,$.cU,$.j)
r=$.m
q="The "+r+" finds a grey town of despondant "
p=$.r
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.x
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.aa
t.i(0,new R.M("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.Q("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
r=$.m
o="The "+r+" discovers a group of "
p=$.r
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.x
t.i(0,new R.M("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.Q("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.fn(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.F(s,t,null),$.aq)}}
Q.ma.prototype={
aX:function(a){var t=0,s=P.bt(),r,q,p
var $async$aX=P.bz(function(b,c){if(b===1)return P.bw(c,s)
while(true)switch(t){case 0:q=W.vt(null,a,null)
p=new W.hU(q,"load",!1,[W.R])
t=3
return P.cJ(p.ga9(p),$async$aX)
case 3:r=q
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$aX,s)},
$asdp:function(){return[W.fb]},
$asc9:function(){return[W.fb,P.bg]}}
Q.nC.prototype={
aM:function(a){return"image/png"},
O:function(a,b){var t=0,s=P.bt(),r,q=this,p,o,n
var $async$O=P.bz(function(c,d){if(c===1)return P.bw(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cJ(q.cv(b),$async$O)
case 3:p=n.vt(null,d,null)
o=new W.hU(p,"load",!1,[W.R])
t=4
return P.cJ(o.ga9(o),$async$O)
case 4:r=p
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$O,s)}}
Q.nz.prototype={
aM:function(a){return"image/png"},
O:function(a,b){var t=0,s=P.bt()
var $async$O=P.bz(function(c,d){if(c===1)return P.bw(d,s)
while(true)switch(t){case 0:throw H.k("Read NYI")
return P.bx(null,s)}})
return P.by($async$O,s)},
$asdp:function(){return[Q.jA]},
$asc9:function(){return[Q.jA,P.bg]}}
V.md.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Inkwell",H.a([$.aO,$.bh,$.S,$.bp],s),null,!1,"Vial of Not-ABs Oil")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Splatfest T-shirt",H.a([$.O,$.aY,$.S,$.td],s),null,!1,"Mechandising Party")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.O,$.bh,$.S,$.aI,$.eq],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.aV,$.S,$.aI,$.eq,$.aF],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.X,$.mm,$.bh,$.aI,$.S,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cM,$.j)
q.i(0,$.cn,$.H)
q.i(0,$.aM,$.H)
q.i(0,$.iv,$.j)
q.i(0,$.co,$.H)
q.i(0,$.vg,$.j)
p=$.m
o="The "+p+"  and the "
n=$.dx
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
k=$.x
l=l+k+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+k+"."
j="Slaying the "+k+" proves the POWER OF TEAMWORK!"
i=[U.b]
q.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.Q(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+k+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",j)],H.a([],i),R.dP(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
j=$.m
k="The "+j+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
k=k+n+"s explains that before  "
p=$.x
k=k+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+j+" vows to help. "
n="The "+j+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+j+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+j+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+j+"'s "+$.bq+". The "+j+" is finally free to restore the chains, bringing peace and understanding to the land. "
j="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+j+"."
p=$.wh
q.i(0,new R.M("Chain the Towers",!1,[new U.b(k),new U.b(n),new U.b(l),new U.Q(m,j,o)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.y)
p=$.m
o="The "+p+" learns of the "
j=$.au
o=o+j+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.r
o=o+m+" explains that the "
l=$.x
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+j+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+j+" Tower . "
k="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.bq+". The "+p+" is finally able to see what lies at the top of the "+j+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
q.i(0,new R.M("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.Q(k,"The "+j+" Tower is more at risk than ever before.",p)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
k=$.r
j=j+k+" on "+$.au+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
k="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+k+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+k+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.e6+" has so many friends, they have to assume everyone in this fight is already in their friend list."
q.i(0,new R.a3("One Degree of Separation",!1,[new U.b(j),new U.b(n),new U.b(k)],H.a([],i),R.dO(),!1,!1,new Y.bV("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.au
k=k+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
j="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.e6+" is now more popular with your friends than you are."
q.i(0,new R.a3("Steal The Friends",!1,[new U.b(k),new U.b(j),new U.b(n)],H.a([],i),R.nL(),!1,!1,new Y.bV("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
n="The "+p+"  and the "
j=$.dx
n=n+j+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
k="The "+p+"  and the "+j+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.x
k=k+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+j+" together."
q.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.b(n),new U.Q(k,"The "+p+" and "+j+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.A(C.n)+".",o)],H.a([],i),R.dP(),!1,!1,new Y.hF(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o=this.f
o.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Ink","Paper","Color","Quills"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.bc,$.H)
s.i(0,$.h7,$.H)
s.i(0,$.cA,$.H)
s.i(0,$.c4,$.j)
s.i(0,$.f4,$.H)
p=$.m
n="The "+p+" comes across an enormous wall. Strange symbols are spread across its face. An indent in the wall indicates a door will appear if the puzzle of the wall is solved."
m="The "+p+" is getting annoyed trying to solve the wall. They start inking graffiti on the wall out of spite. Suddenly, they realize that some of the symbols light up when the ink touches it."
l="The "+p+" spends a good hour painting the wall. A number of symbols light up but nothing else happens. The "+p+" realizes unhappily that they probably need to paint only the symbols. Shit."
k="The wall is finally clean except for the appropriate symbols and the door is open. The "+p+" is eager to fight "
j=$.x
k=k+j+" and give some payback for the terrible wall puzzle. "
h=j+" is defeated and the "+p+"\u2019s payback is complete. "
s.i(0,new R.M("Paint the Wall",!1,[new U.b(n),new U.b(m),new U.b(l),new U.Q(k,"With the "+p+"\u2019s defeat, "+j+" closes the door repaints the outside wall, just to be a jerk.",h)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.H)
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
s.i(0,new R.M("Framed for Vandalisim",!1,[new U.b(j),new U.b(k),new U.b(l),new U.Q(m,n+" begins making more doppelgangers to tarnish the "+h+"\u2019s good name.",p)],H.a([],i),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.m
h="The "+p+" is playing against a "
n=$.r
h=h+n+" in a friendly game of "+$.aa+" Battle. With some smooth moves, they pull out a victory. The "+n+" comes over for a handshake. The "+p+" reaches out what would be their hand, if it wasn\u2019t currently a melting stump. The "+p+" screams in horror, but their hand instantly reforms. What the hell was that about?"
m=$.x
l="The entrance to "+m+"\u2019s lair is blocked by huge metal bars, with no apparent mechanisms to open it. The "+p+" walks around the lair looking for another way in, but suddenly everything starts growing! No wait, it\u2019s actually just the "+p+" slowly dissolving into a puddle. Again?! The dissolving process is once again reversed after a bunch of screaming."
n="The "+p+" makes their way to a secluded hut. A wizened "+n+" hermit sits in a meditative pose. The "+p+" says they were told that he could explain what was happening to the "+p+". The "+n+" nods and tells the "+p+" that their aspect was meant for a race of squid-like creatures with the power to turn into ink. Having the aspect means they are partially a squid now and are saddled with the same ability. The "+p+" will have to learn to control their new power if they wish to succeed in the session."
m="After some time practicing the "+p+" has gotten the hang of their strange ability and returns to "+m+"\u2019s lair. They proceed to melt into a squid-like form make of ink and effortlessly slide through the bars. Jeez that feels weird. "+m+" has been very impatient waiting for the "+p+" and immediately starts the strife!"
k="The "+p+" raises a hand in victory, and then has to shake said hand to stop it from turning to ink again. It sure is annoying being a squid now."
s.i(0,new R.M("An Inky Situation",!1,[new U.b(h),new U.b(l),new U.b(n),new U.Q(m,"With a great blow, the "+p+" is slammed into a wall hard and turns into a puddle with eyes, before reforming. This would be funny if the "+p+" hasn\u2019t possibly died from the impact.",k)],H.a([],i),R.F_(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
o.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Nostalgia","Video Games","Ninety","Cartoons"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.ej,$.j)
t.i(0,$.cn,$.H)
t.i(0,$.aM,$.H)
t.i(0,$.c4,$.j)
t.i(0,$.eo,$.H)
r=$.m
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
p=$.r
q=q+p+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+p+" kept rhyming "
n=$.L
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+p+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+p+" approaches the "+r+". And aura of "+$.au+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+p+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
p=this.x1
t.i(0,new R.Z("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],i),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.y)
p=$.m
r="The "+p+" has finally tracked down the location of "
q=$.x
t.i(0,new R.M("Beat the Games",!1,[new U.b(r+q+"\u2019s lair. Surprisingly it\u2019s inside a gaudy arcade rather than a dungeon. The door to "+q+"\u2019s lair is locked, with the key inside a prize vendor. The "+p+" will need to win enough tickets to earn that key."),new U.b("The "+p+" is struggling to win any of the arcade games; they all seem impossibly hard. A "+q+" minion mocks them. They tell the "+p+" true gamers can easily beat any of these games."),new U.b("The "+p+" discovers the ultimate secret. Most of these games have cheat codes. Super difficult games are a lot easier when you can give yourself 30 lives."),new U.Q("With enough tickets earned, the "+p+" takes the key and enters "+q+"\u2019s lair. "+q+" has been impatiently waiting. It\u2019s time to strife! ","A giant game over sign drops down from the ceiling.","The "+p+" beats "+q+", just like all the hard games they had to play. Who\u2019s a true gamer now?")],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
o.i(0,new X.F(s,t,null),$.bL)}}
B.hi.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a4)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.U(t,0)]))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.j)
q.i(0,$.bc,$.H)
q.i(0,$.dM,$.j)
q.i(0,$.c2,$.n)
q.i(0,$.e3,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.Z("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.z(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
n=this.r
n.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.eo,$.j)
s.i(0,$.el,$.H)
s.i(0,$.en,$.n)
s.i(0,$.cM,$.j)
s.i(0,$.ce,$.H)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.Z("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.z(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aM,$.j)
t.i(0,$.bc,$.H)
t.i(0,$.c8,$.n)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
t.i(0,new R.Z("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.z(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
p=$.m
r="The "+p+" learns that all of the local "
q=$.r
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.L
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.u7(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
n.i(0,new X.F(s,t,null),$.aA)},
A:function(a){return this.ch},
gG:function(a){return this.ch}}
A.a4.prototype={
gfT:function(){var t,s,r,q,p,o
t=H.a([],[P.B])
s=new A.jD(null,null)
s.cU(this.r.a)
if(this.x===0)return t
r=P.d2(G.ys(this.r),!0,G.a0)
C.b.cX(r,new A.mu())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.c1)(r),++p){o=r[p]
if(!(o instanceof G.ad||o.gdP().length===0))t.push(" "+Y.GG(s.hs(o.gdP())))}return t},
gbu:function(){var t,s,r
for(t=this.r,s=new P.dB(t,t.r,null,null,[null]),s.c=t.e,r=0;s.F();)r+=s.d.gbu()
return r},
gfK:function(){var t=this.r
return new H.hR(t,new A.mt(),[H.U(t,0)])},
gh2:function(){var t,s,r,q,p
for(t=this.gfT(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.c1)(t),++q)r+=t[q]+" "
return r+this.e},
A:function(a){return this.gh2()},
ax:function(a,b){var t=b.gbu()-this.gbu()
if(t>0)t=1
else if(t<0)t=-1
return C.d.b6(t)},
H:function(a,b,c,d,e){var t,s,r
t=P.tJ(b,null)
this.r=t
if(t.a===0)t.h(0,$.vI)
s=P.tJ(this.gfK(),null)
for(t=new P.dB(s,s.r,null,null,[null]),t.c=s.e;t.F();){r=t.d
this.r.bL(0,r.gey())
this.r.am(0,r)}$.$get$w7().push(this)},
$isbH:1,
$asbH:function(){return[A.a4]}}
A.mu.prototype={
$2:function(a,b){return a.ge3()-C.a.b6(b.ge3())},
$S:function(){return{func:1,args:[G.a0,G.a0]}}}
A.mt.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a0]}}}
N.mB.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Gavel",H.a([$.X,$.ml],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aE,$.aV],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.O,$.av],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.K,$.aC],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bS,$.ao,$.bl],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.K,$.aC,$.am],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aF,$.D,$.aV],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f3,$.H)
q.i(0,$.c3,$.n)
q.i(0,$.cA,$.H)
p=$.m
o="The "+p+" finds an elaborate courtroom full of "+$.L+"ing "
n=$.r
m=[U.b]
q.i(0,new R.Z("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.aa+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
n=this.r
n.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.j)
s.i(0,$.dg,$.n)
s.i(0,$.cM,$.n)
p=$.m
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.r
l=o+l+" yells 'Stop that thief' in betwen "+$.L+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.aa+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.Ez
s.i(0,new R.Z("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.z(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.j)
t.i(0,$.ce,$.n)
t.i(0,$.df,$.H)
t.i(0,$.ep,$.n)
t.i(0,$.ek,$.n)
t.i(0,$.f5,$.n)
t.i(0,$.is,$.n)
r=$.m
q="The "+r+" finds a crowd of "
p=$.L
q=q+p+"ing "
o=$.r
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.EM
t.i(0,new R.Z("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.z(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(s,t,null),$.aA)}}
S.mD.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Shining Armor",H.a([$.aF,$.mp,$.T,$.fe],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a_,$.mp,$.T,$.aL,$.ar,$.er],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.D,$.T,$.bi,$.as],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aF,$.fe,$.T,$.mp],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.lI,$.j)
t.i(0,$.dh,$.j)
t.i(0,$.e4,$.j)
t.i(0,$.f5,$.j)
t.i(0,$.f3,$.n)
r="The "+$.x+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.m
p=[U.b]
t.i(0,new R.bE("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.x
r="Now that the "+q+" is defeated, the "
o=$.r
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.m
t.i(0,new R.a3("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
o=$.au
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.x
n=n+q+". A Learned "+$.r+" explains that it can only be defeated by the Legendary "
r=$.aa
n=n+r+" Blade. The "
m=$.m
t.i(0,new R.a3("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
r="The volcanos of the land are weirdly active after the defeat of the "+$.x+". One begins to erupt near a "
m=$.r
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.L+"s, but not really doing anything to evacuate or save anyone. The "
o=$.m
t.i(0,new R.a3("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.mE.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("LAW Gavel",H.a([$.S,$.X,$.ml],s),"Organics seem to respect this. Use it to your advantage.",!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("LAW Caution Tape",H.a([$.S,$.aE,$.aV],s),"For when you want to tell inferior organics to keep out.",!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("STOP SIGN",H.a([$.S,$.tt,$.D,$.aV],s),"This isn't a weapon, dunkass.",!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Scales","Disorder","Chaos","Injustice"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f3,$.j)
q.i(0,$.dg,$.n)
q.i(0,$.ce,$.n)
q.i(0,$.c3,$.H)
q.i(0,$.cz,$.H)
p=$.m
o="The "+p+" is told by a worried "
n=$.r
o=o+n+" that a group of underling rebels are causing havoc across the land, breaking laws left and right. They must be stopped! Eventually."
m="The "+p+" has located a rebel hideout. The underlings get ready for a battle to the death when the "+p+" suddenly breaks out a "+$.aa+" and starts getting all lawyerly on them. The underlings are all sentenced to 30 years in prison, without parole."
l="The "+p+" finds out through interrogating enough of the underling rebels that they have a big mean leader they call the "
k=$.x
l=l+k+". Sounds like a challenge. The "+p+" cracks their knuckles as they prepare for the biggest case on this side of Skaia."
j="Arriving at the final rebel hideout, "+p+" prepares for battle against the "+k+". For their crimes against the "+n+"s, they're getting the DEATH SENTENCE."
n="The "+k+" lies slain by the "+p+"'s "+$.bq+". The "+p+" has won! The "+n+"s are no longer plagued by the lawbreakers."
i=[U.b]
q.i(0,new R.M("Punish the Rebels",!1,[new U.b(o),new U.b(m),new U.b(l),new U.Q(j,"The "+k+" continues to run their underling crime ring with the defeat of the "+p+".",n)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Heroics","Villains","Heroes","Powers","Justice","Metropolises","Comics"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dh,$.j)
s.i(0,$.c4,$.n)
s.i(0,$.cn,$.n)
s.i(0,$.dh,$.H)
s.i(0,$.en,$.H)
p=$.m
o="The "+p+" is taking a walk through one of the land's many cities when they witness a fight break out between an Underling Hero and "
m=$.r
o=o+m+" Villain. One of the Underling Hero's attacks hits the "+p+". They won't be having any of that! The "+p+" helps the "+m+" Villain defeat the Underling Hero, and in turn gets invited to join a league of shady criminals. Sweet."
l="The "+p+" teams up with some other villainous "+m+"s to take down a rival team of Underling Heroes. They won't be having any of this LAW business, certainly. Rules were made to be broken, and that's just what the "+p+" is going to do."
m="After defeating yet another league of Underling Heroes, the "+p+" and the other "+m+" Villains feel a cold chill run down their spine. In the distance, lightning strikes a mountain, revealing the headquarters of the  "
k=$.x
m=m+k+", leader of the Underling Heroes and the last hope to preserve law. They're going down!"
j="The "+p+" arrives at the "+k+"'s headquarters, fighting through waves of Underling Heroes before they can finally reach the "+k+". It\u2019s time to end the LAW, once and for all!"
h="The "+k+" lies slain by the "+p+"'s "+$.bq+". The last of the Heroes is no more.  Injustice takes over the land at last."
s.i(0,new R.M("Become the Villain",!1,[new U.b(o),new U.b(l),new U.b(m),new U.Q(j,"The "+p+" is defeated. The "+k+" holds on to the last remnants of justice in the land.",h)],H.a([],i),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
h=$.m
k="The "+h+" is taking a walk through one of the land's many cities when they witness a fight break out between some "
p=$.r
k=k+p+" Hero and an Underling Villain. Being naturally inclined toward the preservation of order, the "+h+" teams up with the "+p+" Hero and triumphs against the Underling Villain. As a reward, the "+p+" Hero invites the "+h+" to join an elite team of crime fighting good guys! Awesome!"
p="The "+h+" works together with some "+p+" Heroes to take down and arrest some Underling Villains. Slowly but surely, the balance of order and disorder begins to shift in order's favor. The number of villains is getting fewer and fewer."
j="With the last of the Villainous Underlings defeated, the "+h+" rejoices, thinking that justice has been served in this land. But what's this? Lightning strikes the ground far away and causes a dark mountain to shoot up into the sky! The lair of the final villain, the "
m=$.x
j=j+m+", has been revealed."
l="The "+h+" storms the lair of the "+m+", the final villain in all of this land. It's time to bring back KAW, once and for all!"
o="The "+m+" lies slain by the "+h+"'s "+$.bq+". The last of the Villains is no more. Justice is finally preserved in the land at last."
s.i(0,new R.M("Become the Hero",!1,[new U.b(k),new U.b(p),new U.b(j),new U.Q(l,"The "+h+" is defeated. The "+m+" holds on to the last remnants of injustice in the land.",o)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Greed","Poverty","Discrepancy","Famine","Starvation"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.ha,$.j)
t.i(0,$.cV,$.n)
t.i(0,$.it,$.n)
t.i(0,$.iq,$.H)
t.i(0,$.dL,$.H)
r=$.m
q="The "+r+" looks upon the land and notices how some of the "
p=$.r
q=q+p+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
o="The "+r+" comes up with a plan to bring balance to the land. If there's not enough resources, they'll simply have to cut the "+p+" population in half. But through murder? No... They need something cleaner. Something more random."
m="The "+r+" wanders through a poverty striken "+p+" village and is told the legend of the "
l=$.x
m=m+l+". The "+l+" lives in a lair on the other side of the land, where they hoard all of the land's resources. Oh yeah, and they've got this golden "
k=$.aa
m=m+k+" that can half the number of "+p+"s on the land. The "+r+" finds this especially interesting. "
j="The "+r+" shows up at the "+l+"'s lair and asks them to hand over the golden "+k+". The "+l+" agrees... if the "+r+" can defeat them first!"
p="The "+l+" lies slain by the "+r+"'s "+$.bq+". The "+r+" uses the golden "+k+" to cut the "+p+" population in half. Problem solved. "
t.i(0,new R.M("Bring the Balance",!1,[new U.b(q),new U.b(o),new U.b(m),new U.Q(j,"The "+r+" is defeated and left without the golden "+k+" they seek.",p)],H.a([],i),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" looks upon the land and notices how some of the "
r=$.r
k=k+r+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
j="The "+p+" comes up with a plan to bring balance to the land. They can force the "+r+"s who have an abundance of resources to share them with the "+r+"s who are resource deprived. But when the "+p+" tells them this, they get understandably upset. They worked so hard for their resources, why should they share them with others? The "+p+" is left stumped."
m="The "+p+" wanders through a poverty striken "+r+" village and is told the legend of the "
o=$.x
m=m+o+". The "+o+" lives in a lair on the other side of the land, where they hoard all of the land's resources. The "+p+" is confused as to why nobody mentioned this before. The solution to the resource problem is obvious now."
r="The "+p+" shows up at the "+o+"'s lair and asks them to be kind and share their resources with the "+r+"s. The "+o+" agrees... if the "+p+" can defeat them first!"
q="The "+o+" lies slain by the "+p+"'s "+$.bq+". The "+p+" distributes all of the denizen's resources throughout the land, improving living conditions everywhere."
t.i(0,new R.M("Create the Balance",!1,[new U.b(k),new U.b(j),new U.b(m),new U.Q(r,"The horrific inequality maintained by the "+o+" continues with the defeat of the "+p+".",q)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(s,t,null),$.aq)}}
K.mG.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Creeping Vine",H.a([$.X,$.S,$.aQ,$.as],s),null,!1,"Sentient Plant Tentacles")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.t9,$.S,$.aI],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aF,$.at,$.S,$.as],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bW,$.S,$.aI],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.aO,$.S,$.aI,$.a_,$.a1],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bi,$.S,$.as],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.c8,$.j)
q.i(0,$.bc,$.j)
q.i(0,$.h9,$.H)
q.i(0,$.aM,$.n)
q.i(0,$.lL,$.n)
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
q.i(0,new R.M("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.Q(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c8,$.j)
s.i(0,$.co,$.j)
s.i(0,$.cN,$.H)
s.i(0,$.aM,$.n)
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
s.i(0,new R.M("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.Q(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
o=$.m
j="The "+o+" finds themself in the middle of a large plain. They see a small pedestal with a seed packet and note.The note says the field has magical properties that grows any plant in only half an hour. If one of the seeds in the packet can be grown, the lair of "
i=$.x
j=j+i+" will be revealed.  Sounds easy enough. The "+o+" makes a small hole and drops a seed in. The plant immediately starts growing, but almost as immediately "+i+" minions zoom in from out of nowhere and stomp the plant dead."
l="The "+o+" attempts to stop the minions by force, but they are surprisingly agile and make it past the "+o+" to the planted seeds every time. The "+o+" reads the note again and decides to try growing some other plants to protect the seeds as they grow. The "+o+" eats a few fruits they had in their sylladex and grows a wall of trees from the leftover seeds. However the minions are still able to climb and slip through at rapid speed. A few trees isn\u2019t going to be enough to protect the seeds."
k="The "+o+" travels across their land gathering a bunch of seeds to strew them about the field and make a giant maze. Then they plant a few seeds deep inside the maze. The "+i+" minions are very quick, but they aren\u2019t that smart. Some of the seeds manage to grow before the minions can figure out how to get to them. On close inspection, leaves of the full-grown plants are actually maps of the "+o+"\u2019s land, with "+i+"\u2019s lair marked. "
m="The "+o+" tracks down "+i+"\u2019s lair using their leaf map. They toss the leaf aside and pull out their "+$.bq+", ready to throw down!"
h="With "+i+" gone, the "+$.r+"s take up residence in the plain. They were always too afraid to when "+i+" minions were around. They thank the "+o+" for their work."
s.i(0,new R.M("Protect the Seeds",!1,[new U.b(j),new U.b(l),new U.b(k),new U.Q(m,"With their defeat, the "+o+"\u2019s efforts to find "+i+"\u2019s lair have been made pointless.",h)],H.a([],p),R.nK(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cV,$.j)
t.i(0,$.bc,$.H)
t.i(0,$.dM,$.j)
t.i(0,$.c2,$.n)
t.i(0,$.e3,$.n)
t.i(0,$.io,$.n)
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
t.i(0,new R.M("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.Q(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(s,t,null),$.aq)}}
G.mH.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("FAQ",H.a([$.a7,$.S,$.Y,$.bX],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aE,$.S,$.aP,$.a7,$.bX],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.S,$.aP,$.bX,$.a_,$.ta],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.vM,$.S,$.ag],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.vV,$.S],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.aQ,$.S,$.aP,$.bX],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.aO,$.S,$.as],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.lH,$.j)
q.i(0,$.h8,$.n)
q.i(0,$.dK,$.j)
q.i(0,$.em,$.j)
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
q.i(0,new R.M("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.Q(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
m=$.m
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.L+"ing "+$.r+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.x
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.M("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.Q(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
m=$.m
l="The "+m+" finds the enormous casino that serves as "
k=$.x
l=l+k+"\u2019s lair. At the center of the casino is a lift to "+k+"\u2019s quarters that can only be activated with a key earned by winning enough "
j=$.au
l=l+j+" chips at all the casino games. The "+m+" starts with Blackjack, and wins easily by counting the cards being dealt and only betting high when the odds are good. It helps that the "+k+" minions and "
p=$.r
l=l+p+"s aren\u2019t smart enough to pick up on what the "+m+" is doing."
n="The next casino game to beat is the roulette table. The "+m+" watches the "+p+"s play for a couple of games. They quickly realize there\u2019s a defect on the wheel that causes the ball to slightly favor the right side of the wheel. They bet accordingly and eventually earn enough "+j+" chips to move to the next casino game."
o="The "+m+" is stuck at the the final casino game, the slot machines. The only way to win enough "+j+" chips is by winning the Mega Jackpot, but there aren\u2019t any noticeable patterns or defects in the machines to take advantage of. The "+m+" puzzles over this for a while, before paying attention to who wins the Mega Jackpot. The only winners are "+k+" minions; the slots have been rigged so the house never has to pay out! The "+m+" cuts in front of a "+k+" minion at a slot machine and wins the Mega Jackpot that was meant for the minion. The minions aren\u2019t happy about this, but they can\u2019t complain without revealing to the "+p+" customers that the game is rigged."
j="The "+m+" turns in their "+j+" chips at the front desk for the lift key to "+k+"\u2019s quarters. As soon the lift brings them to "+k+"\u2019s quarters, they are immediately attacked! It seems "+k+" is not very pleased that the "+m+" found ways to cheat at all the casino games. "
p=k+" has been slain, and ownership of the casino is up for grabs. The "+m+" puts the casino in the hands of slightly more competent than average "+p+"s so they can continue exploring their land."
q.i(0,new R.M("Beat the Odds",!1,[new U.b(l),new U.b(n),new U.b(o),new U.Q(j,k+" is pleased they got "+m+" out of the way, so "+k+"\u2019s casino can become profitable again.",p)],H.a([],i),R.dO(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=this.f
p.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c8,$.n)
s.i(0,$.aM,$.n)
s.i(0,$.ds,$.j)
s.i(0,$.lG,$.j)
s.i(0,$.el,$.j)
s.i(0,$.h7,$.j)
o=$.m
n="The "+o+" walks into a "
m=$.r
n=n+m+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.aa
n=n+l+", but "
k=$.x
n=n+k+" has hoarded all of the planets "
j=$.au
l=n+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+o+" vows to take back some "+j+" Candles for the poor "+m+"s. "
n="After a long search, the "+o+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+o+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+o+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+o+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+o+" triumphantly returns to the village among the joyful "+$.L+"ing of the "+m+"s."
k="The "+o+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
m="Never again shall the "+m+"s be without "+j+" Candles!"
s.i(0,new R.M("The Candlestick Taker",!1,[new U.b(l),new U.b(n),new U.b(h),new U.Q(k,"The "+j+" candles are once again at risk.",m)],H.a([],i),R.nL(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
j="The "+m+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.r
j=j+k+" explains that the "
h=$.x
s.i(0,new R.M("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+m+" vows to help.   "),new U.b("The "+m+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.L+"s as they bask in the light. The "+m+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+m+" must prepare themself for a tough fight.  "),new U.Q("The "+m+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f4,$.n)
q.i(0,$.bc,$.n)
q.i(0,$.f6,$.j)
q.i(0,$.aM,$.n)
q.i(0,$.cA,$.j)
o="Now that the "+$.x+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
o=o+n+" sets up a wiki and settles in to help the "
m=$.r
o=o+m+"s deal with it all."
m="Within barely any time at all, the "+m+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+n+" makes sure all of the information is from credible sources."
n="When the "+n+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.e6+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a3("Moderate the Wiki",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],i),R.e9(),!1,!1,new Y.bV("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l="Now that the "+$.x+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
l=l+n+" shrugs and sets up a wiki and lets the "
m=$.r
l=l+m+"s deal with it all."
m="Within barely any time at all, unmoderated "+m+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+n+" alone, and each claims they are a different SPECIES entirely. The "+n+" finds this to be hilarious."
n="Luckily it turns out all that disinformation running around about the "+n+" thwarts some would be assasins. It turns out the "+n+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
o="The "+$.e6+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a3("Create the Wiki",!1,[new U.b(l),new U.b(m),new U.b(n)],H.a([],i),R.d5(),!1,!1,new Y.bV("Disinformation Network",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.r
n=o+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
m=$.m
n=n+m+" possibly stop it?"
o="The "+m+" pours over maps and charts. What do the sick "+o+"s have in common with each other?  Finally, there is a flash of inspiration. "+o+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+m+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+m+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+m+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+m+" traces the contaminated river back to it's source. The "
j=$.x
q.i(0,new R.M("Shed the Light",!1,[new U.b(n),new U.b(o),new U.b(l),new U.Q(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+m+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dK,$.j)
t.i(0,$.lH,$.j)
t.i(0,$.em,$.n)
t.i(0,$.cn,$.n)
t.i(0,$.rW,$.n)
t.i(0,$.c2,$.H)
t.i(0,$.e4,$.H)
t.i(0,$.c4,$.n)
t.i(0,$.cz,$.H)
t.i(0,$.bc,$.n)
t.i(0,$.cC,$.j)
s=$.m
r="The "+s+" is approached by a Fast Talking "
o=$.r
r=r+o+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
n=$.aa
r=r+n+". The "+s+" agrees to perform the titular role."
m="The opening night performance of the Beautiful "+n+" is a huge success! The "+$.L+"ing of the fans is it's own reward!"
n="When it comes time for the next performance of the Beautiful "+n+", the "+s+" is turned away at the door. Apparently the "
l=$.x
o=n+l+" rampaged and terrorized "+o+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
n="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.M("Be the Star",!1,[new U.b(r),new U.b(m),new U.b(o),new U.Q(l,"The acting career of the "+s+" is in shambles.",n)],H.a([],i),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n="After the "+$.x+", the "
s=$.m
n=n+s+" is disappointed to learn that barely any of the "
l=$.r
n=n+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
o="The "+$.e6+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a3("Be the Biggest Star in Paradox Space",!1,[new U.b(n),new U.b(l),new U.b(s)],H.a([],i),R.e9(),!1,!1,new Y.bV("What's my name?",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p.i(0,new X.F(q,t,null),$.aq)}}
Z.mV.prototype={
D:function(){var t,s,r,q
t=this.L
s=[G.a0]
r=A.i("Dream Bubbles Book",H.a([$.K,$.ah,$.aC,$.vF],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.U(t,0)]))
t=Q.J(null,null,A.a4)
r=A.i("Deck of Uno Cards",H.a([$.mi,$.tn,$.ah],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.O,$.T,$.ah],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.mq,$.T,$.ah],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a_,$.K,$.T,$.bo,$.aC],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.df,$.H)
q.i(0,$.ep,$.H)
q.i(0,$.c2,$.H)
q.i(0,$.cM,$.n)
p="The "+$.x+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.m
p=p+o+" comands that the "
n=$.r
m=[U.b]
q.i(0,new R.bE("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.L+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o="As soon as the "+$.x+" is defeated, the "
n=$.r
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.m
q.i(0,new R.a3("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p=$.dx
n="The "+p+" reaches the entrance to a massive dungeon. They heard rumors that important information could be found at the bottom. After some very confusing puzzles and a couple of strifes, they find themself at the dungeon\u2019s center. A lone, elderly "+$.r+" is there to greet the "+p+". He tells the "+p+" that "
o=$.x
n=n+o+" needs to be defeated by a powerful hero, and imparts some clues on how to defeat them. Wait a second, isn\u2019t that the "
l=$.m
n=n+l+"\u2019s Denizen? The "+p+" contacts them and passes on the information they found.  "
k="The "+p+" is exploring another dungeon. Deep inside, they enter a large open room, clearly meant for a boss fight. As expected, "+o+" emerges from a large hole in the ceiling and lets loose a roar. The "+p+" readies themself for a fight, but "+o+" takes one glance and immediately goes back into its hole. It looks like "+o+" is only interested in fighting the "+l+". The "+p+" gives them a call and sits around waiting for them to come. After a few hours, the "+l+" has arrived and the strife can finally start."
p="The "+l+" was victorious in his fight against "+o+". The "+p+" also helped."
q.i(0,new R.M("Be the Protagonist",!1,[new U.b(n),new U.Q(k,"The "+l+" fought hard, but was ultimately defeated by "+o+".",p)],H.a([],m),R.F0(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
q.i(0,new R.a3("Skip the Boring Details",!1,[new U.b("The "+p+" finds a giant pillar, inscribed with a long and arduous quest that the "+p+" is destined to complete. However the "+p+" isn\u2019t interested on spending so much time on one quest, so they uses their powers and fast forward right to the end. A parade is held in their honor for completing the grand quest that no one got to see happen. A bit unsatisfying, really.")],H.a([],m),R.nM(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p=this.x
p.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.vf,$.j)
t.i(0,$.cU,$.j)
t.i(0,$.bc,$.j)
t.i(0,$.aM,$.n)
s="The "+$.x+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.m
s=s+r+" comands that the "
o=$.r
t.i(0,new R.bE("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.L+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
r="As soon as the "+$.x+" is defeated, the "
o=$.r
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.m
t.i(0,new R.a3("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",this.L,"Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(q,t,null),$.bL)}}
S.mX.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Alternate Costume",H.a([$.O,$.T,$.a1,$.a_,$.ak],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.O,$.T,$.a1],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.X,$.T,$.ag,$.a1,$.dN],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jg,$.X,$.T,$.as,$.a1,$.dN],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.ej,$.j)
t.i(0,$.f5,$.n)
t.i(0,$.ce,$.j)
t.i(0,$.en,$.n)
t.i(0,$.cV,$.H)
r="The "+$.x+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.m
p=[U.b]
t.i(0,new R.bE("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.m
t.i(0,new R.a3("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.z(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
q=$.m
r="The "+q+" is feeling quite pleased with their victory over the "+$.x+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.au
t.i(0,new R.a3("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.z(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
q="Now that the "+$.x+" has been defeated, the "
o=$.r
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.m
q=q+r+"'s help in planning the brand new city of "
n=$.au
t.i(0,new R.a3("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.L+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.z(),!1,!1,new Y.bV(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.mY.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Maiden's Breath",H.a([$.aQ,$.T,$.av],s),null,!1,null)
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.X,$.T,$.dN,$.bp],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.av,$.aF,$.D,$.T,$.a_,$.fe,$.vw],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.K,$.T,$.a8,$.aC],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.dt,$.j)
t.i(0,$.c8,$.j)
t.i(0,$.aM,$.n)
t.i(0,$.bc,$.n)
t.i(0,$.ds,$.n)
t.i(0,$.cz,$.n)
r="The "+$.x+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.m
r=r+q+" asks local  "
p=$.r
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bE("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.m
o="The "+q+" has adopted a local "
p=$.r
t.i(0,new R.a3("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.L+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.x+". ")],H.a([],n),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
V.n4.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Puzzle Box",H.a([$.X,$.S,$.a1],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a7,$.S,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.S],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.S,$.a7,$.Y],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aF,$.jh,$.at,$.ah,$.S,$.a_,$.a7],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cU,$.n)
q.i(0,$.h8,$.H)
q.i(0,$.cA,$.H)
p=$.m
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.r
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.x
k=[U.b]
q.i(0,new R.M("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.Q(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.dO(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.m
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.r+" explains that at the end of the Labrinth is the "
l=$.x
q.i(0,new R.M("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.Q("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.f3,$.H)
s.i(0,$.c3,$.n)
s.i(0,$.cA,$.H)
s.i(0,$.cU,$.H)
p=$.x
o="The "+p+" has commited a staggering amount of crimes against the local "+$.r+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.m
s.i(0,new R.M("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.Q("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.ha,$.j)
t.i(0,$.bc,$.n)
t.i(0,$.f6,$.j)
t.i(0,$.aM,$.n)
t.i(0,$.cA,$.j)
r=$.m
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.x
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.aa+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.M("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.Q(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
l=$.m
r="The "+l+" has finally found the lair of "
m=$.x
r=r+m+". Appropriately enough for a Mind Denizen, their dungeon is a giant replica of a brain. Doors in the dungeon simulate neurons by opening and closing at seemingly random intervals to mimic brain activity."
o="The "+l+" has spent far too many hours trying to navigate the dungeon. They raise their fist in frustration, and at the same time, a door opens. They drop their fist and attempt to enter, but the door immediately closes again. They raise their fist once more, and the door opens again, and closes again when the "+l+" drops their fist. They raise and lower their fist a bunch of times, and the door opens and closes in perfect synch. Is...is the dungeon based off of the "+l+"\u2019s brain!?  "
p="The "+l+" is starting to get a hang out of controlling their brain dungeon. Most of the doors can be opened by experimentally moving part of their body or using one of their senses. (The door that opened by licking one of the walls wasn\u2019t very fun) There is only one door the "+l+" is still unable to open, which is likely "+m+"\u2019s."
q="Through some convoluted thought processes focused on thinking about "+m+", the "+l+" manages to open the final door to "+m+". They are relieved it didn\u2019t take some cliche like having to unlock their subconscious or some junk like that. They begin the final fight inside their own mind."
j="With "+m+" defeated, the "+l+" decides to rig explosives around the dungeon and bring the whole place down. The thought that others could basically see the inside of the "+l+"\u2019s mind was a little too creepy."
t.i(0,new R.M("Explore the Brain",!1,[new U.b(r),new U.b(o),new U.b(p),new U.Q(q,"Various doors open and close across the dungeon to simulate the "+l+"\u2019s despair in the face of "+m+".",j)],H.a([],k),R.fn(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.H)
n.i(0,new X.F(s,t,null),$.aq)}}
E.n5.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Feather Pen",H.a([$.D,$.T,$.ah,$.bp],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.vU,$.T,$.jh,$.ag,$.a_],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.K,$.T,$.ah,$.aC],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.dt,$.j)
t.i(0,$.c8,$.j)
t.i(0,$.aM,$.n)
t.i(0,$.bc,$.n)
t.i(0,$.ds,$.n)
t.i(0,$.cz,$.n)
r="The "+$.x+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bE("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
q="You'd think after the dramatic defeat of the "+$.x+" the "
o=$.r
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.m
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.aa
t.i(0,new R.a3("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
F.n6.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Piano",H.a([$.ag,$.X,$.a8,$.ah],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.D,$.a8],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aU,$.a7],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.X,$.a8],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.K,$.a8],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aE,$.a8,$.a7,$.aU,$.am],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aE,$.a8,$.a7,$.am],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.X,$.a8],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cn,$.aj)
q.i(0,$.rW,$.j)
q.i(0,$.em,$.j)
q.i(0,$.ds,$.n)
q.i(0,$.aM,$.n)
q.i(0,$.lE,$.n)
p=$.m
o="The "+p+" meets a wise old "+$.r+" who tells that the "+$.x+" can only be awoken by the Legendary Hero playing the "
n=$.au
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.aa
k=[U.b]
q.i(0,new R.Z("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p=$.m
n="The "+p+" finds an empty, trashed "
l=$.au
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.aa+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.L+"ing "+$.r+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.EE
q.i(0,new R.Z("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.z(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.y)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.rZ,$.aj)
s.i(0,$.dg,$.n)
s.i(0,$.cM,$.n)
s.i(0,$.ds,$.j)
s.i(0,$.lE,$.aj)
o=$.m
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.au
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.x
s.i(0,new R.Z("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.aa+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.h9,$.aj)
t.i(0,$.c4,$.n)
t.i(0,$.dM,$.n)
r=$.m
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.r
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.L
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.au+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.Z("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(s,t,null),$.aA)}}
Y.nj.prototype={
O:function(a,b){var t=0,s=P.bt(),r,q=this,p,o
var $async$O=P.bz(function(c,d){if(c===1)return P.bw(d,s)
while(true)switch(t){case 0:t=3
return P.cJ(A.hr("scripts/Rendering/threed/three.min.js",!1),$async$O)
case 3:t=4
return P.cJ(Q.o0(),$async$O)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.bG(p)
o.ev(p,P.wb(["",$.$get$v5()],P.B,S.hv))
o.eu(p,!1)
q.b=p}J.uR(p,b)
r=J.uR(q.b,b)
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$O,s)},
$aseF:function(){return[S.fl]},
$asc9:function(){return[S.fl,P.B]}}
V.nr.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Shorts",H.a([$.O,$.T,$.fd,$.a_],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aE,$.T,$.am],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.ao,$.T,$.a1],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.lI,$.j)
t.i(0,$.cN,$.n)
t.i(0,$.hc,$.n)
t.i(0,$.lK,$.n)
t.i(0,$.dt,$.n)
t.i(0,$.bc,$.n)
t.i(0,$.e3,$.n)
t.i(0,$.el,$.n)
t.i(0,$.t_,$.n)
t.i(0,$.io,$.n)
t.i(0,$.lG,$.n)
r="The "+$.x+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bE("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.m
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.r+" named Professor "
p=$.L
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.aa
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.x
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.M("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.Q(k,"The "+q+" whited out...",m)],H.a([],n),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
m="Now that the "+$.x+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.m
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.r
t.i(0,new R.a3("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.au+" buffs. With a deafening "+$.L+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.z(),!1,!1,new Y.i9("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
G.nE.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Superhero Action Figure",H.a([$.aE,$.am,$.aN],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aE,$.am],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aE,$.bW],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aE,$.aT,$.bl,$.cg],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aE,$.am],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.K,$.am],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.aQ,$.am,$.O,$.as],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.aQ,$.aK,$.am,$.O],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aN,$.D,$.am,$.er,$.ar,$.bT],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.K,$.am],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.K,$.am],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.n)
q.i(0,$.cC,$.n)
q.i(0,$.c4,$.j)
q.i(0,$.cN,$.aj)
q.i(0,$.du,$.aj)
p=$.m
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.r
o=o+n+" manages to catch a video of it, and it goes viral on "+$.au+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.L+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.EF
l=[U.b]
q.i(0,new R.Z("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.z(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.y)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.ek,$.n)
s.i(0,$.dg,$.n)
s.i(0,$.cC,$.n)
s.i(0,$.c4,$.n)
s.i(0,$.dh,$.j)
o=$.m
n="The "+o+" runs towards an explosion in a local "
m=$.r
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.au
s.i(0,new R.Z("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cC,$.n)
t.i(0,$.dK,$.j)
t.i(0,$.co,$.j)
t.i(0,$.dh,$.n)
r=$.m
q="The "+r+" gets a job at the "+$.au+" Cinema. A new movie, The Lonely "
o=$.aa
q=q+o+" is coming out soon, and "
n=$.r
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.L+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.Z("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(s,t,null),$.aA)}}
N.nI.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Feather'd Cap",H.a([$.O,$.T,$.fd],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a_,$.tf,$.T,$.fd],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bn,$.T],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.cC,$.n)
t.i(0,$.cU,$.n)
t.i(0,$.dM,$.H)
r="With the closing of the curtain, the "+$.x+" has released the frogs, and yet they are nowhere to be found. The "
q=$.m
p=[U.b]
t.i(0,new R.bE("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.x
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.m
r=r+o+" to get it back to normal. They organize a team of "
n=$.r
t.i(0,new R.a3("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.aa+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.b.prototype={}
U.Q.prototype={}
R.nJ.prototype={
A:function(a){return H.A(new H.dV(H.kg(this),null))+": "+this.c},
gG:function(a){return this.c}}
R.Z.prototype={}
R.M.prototype={}
R.a3.prototype={}
R.bE.prototype={}
E.nN.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Curtain",H.a([$.O,$.S,$.aN],s),null,!1,"Show Ender")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.er,$.aL,$.S,$.ar,$.aW,$.aN,$.bm,$.aD],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Omegaphone",H.a([$.D,$.aU,$.a7,$.S,$.aN],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trike Horn",H.a([$.aF,$.D,$.aU,$.bo,$.cb,$.S,$.aN],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.ao,$.bo,$.ah,$.S,$.a_,$.aN],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.X,$.S,$.aW,$.ap,$.bn,$.aN],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.lD,$.j)
q.i(0,$.df,$.j)
q.i(0,$.dg,$.j)
q.i(0,$.cV,$.n)
q.i(0,$.c2,$.n)
q.i(0,$.ce,$.n)
q.i(0,$.c3,$.H)
q.i(0,$.du,$.n)
q.i(0,$.ek,$.j)
q.i(0,$.is,$.j)
q.i(0,$.f5,$.j)
q.i(0,$.lJ,$.j)
q.i(0,$.h9,$.n)
q.i(0,$.ep,$.j)
p=$.m
o="The "+p+" is chilling in a "
n=$.r
o=o+n+" village when a bunch of sentient "
m=$.aa
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.x
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.M("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.Q(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fn(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
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
q.i(0,new R.M("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.Q(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
h=this.f
h.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.ds,$.j)
s.i(0,$.c2,$.n)
s.i(0,$.c3,$.j)
s.i(0,$.cn,$.j)
s.i(0,$.cz,$.j)
s.i(0,$.cC,$.n)
s.i(0,$.ir,$.H)
s.i(0,$.df,$.n)
s.i(0,$.cN,$.j)
s.i(0,$.c4,$.j)
s.i(0,$.du,$.H)
p=$.L
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.m
o=o+m+" to do a stupid "
l=$.au
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.x
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.Q(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
h.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.lD,$.j)
t.i(0,$.du,$.j)
t.i(0,$.c3,$.j)
t.i(0,$.cN,$.n)
t.i(0,$.cz,$.j)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.x+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.Q(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
m=$.m
t.i(0,new R.a3("Stop the Narration",!1,[new U.b("The "+m+" is walking down a long road, wondering when they\u2019ll find the next town. They suddenly stop and look behind them, asking who said that. They look everywhere but can\u2019t find where the voice is coming from. They fruitlessly demand the narration to stop."),new U.b("The "+m+" is having a hard time doing any of their quests while hearing every action narrated. No one else can hear the voice and some are starting to think the "+m+" is losing their mind. The "+m+" vows to find who is doing the narrating and beat the stuffing out if them. However, the "+m+" is very unlikely to end the narration. The "+m+" raises their fist at a random location in the sky and shouts we\u2019ll see about that."),new U.b("The "+m+" finds themself in front of an ancient looking broadcasting tower. They wonder aloud whether the tower is broadcasting the narration. They demand the narration to be useful for a change and just tell them, but they get no answer. In a huff, they search the tower. A couple of hours later, the "+m+" find an ominous looking machine displaying pictures of the session, and text of this narration. Realizing the machine is broadcasting the narration, and getting confirmation from the narration that it is so, they immediately destroy it. They no longer hear the narration and are pleased to go back to adventuring. The "+m+" doesn\u2019t realize they only stopped the narration being broadcasted to their ears and not the narration itself.")],H.a([],g),R.dO(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
h.i(0,new X.F(s,t,null),$.aq)}}
Y.dR.prototype={}
Y.a6.prototype={}
Y.dd.prototype={}
Y.bV.prototype={
gG:function(a){return this.c}}
Y.P.prototype={}
Y.i9.prototype={}
Y.bD.prototype={}
Y.cZ.prototype={}
Y.kM.prototype={}
Y.bC.prototype={}
Y.hF.prototype={}
Y.ix.prototype={}
Y.jB.prototype={}
N.nS.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Domino Mask",H.a([$.O,$.T,$.fd],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.t8,$.T,$.fd,$.vx],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a_,$.aE,$.a7,$.T,$.Y,$.ak],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.c3,$.j)
t.i(0,$.ce,$.n)
t.i(0,$.dh,$.n)
r="The "+$.x+" cannot release the frogs since the corrupt Noble "
q=$.r
r=r+q+"s have hoarded them. The "
p=$.m
o=[U.b]
t.i(0,new R.bE("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.m
q="The "+p+" learns of the extreme injustices of the "
r=$.r
q=q+r+"s who rose to power during the tyranny of "
n=$.x
t.i(0,new R.a3("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.nT.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Red Rose",H.a([$.az,$.av],s),null,!1,"Seductive Plant")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friend Fic",H.a([$.az,$.K],s),"Don't ship irl ppl, asshole.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.az,$.ao],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.az,$.ap],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.az,$.bn,$.D,$.aK],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aC,$.K,$.az],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.co,$.j)
q.i(0,$.hc,$.n)
q.i(0,$.f1,$.n)
q.i(0,$.hb,$.j)
q.i(0,$.cn,$.n)
q.i(0,$.ip,$.H)
p=$.m
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.r
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.aa+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.Z("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.y)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cn,$.n)
s.i(0,$.dK,$.j)
s.i(0,$.hb,$.j)
s.i(0,$.co,$.n)
s.i(0,$.em,$.H)
s.i(0,$.ip,$.H)
o=$.r
n="A Romantic "+o+" approaches the "
m=$.m
s.i(0,new R.Z("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.ip,$.j)
t.i(0,$.co,$.j)
t.i(0,$.f1,$.n)
t.i(0,$.lK,$.j)
t.i(0,$.hb,$.j)
t.i(0,$.cn,$.n)
t.i(0,$.em,$.H)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.r
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.x+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.EC
t.i(0,new R.Z("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.z(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.y)
n=$.m
r="The "+n+"  and the "
o=$.dx
t.i(0,new R.Z("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.dP(),!1,!1,new Y.ix(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o=$.m
n="The "+o+"  and the "
r=$.dx
t.i(0,new R.Z("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.dP(),!1,!1,new Y.hF(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aj)
r=$.m
o="The "+r+"  and the "
n=$.dx
t.i(0,new R.Z("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.dP(),!1,!1,new Y.jB(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p.i(0,new X.F(s,t,null),$.aA)}}
T.hI.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a4)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.U(t,0)]))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.j)
q.i(0,$.bc,$.H)
q.i(0,$.dM,$.j)
q.i(0,$.c2,$.n)
q.i(0,$.e3,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.a3("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
n=this.x
n.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.eo,$.j)
s.i(0,$.el,$.H)
s.i(0,$.en,$.n)
s.i(0,$.cM,$.j)
s.i(0,$.ce,$.H)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.a3("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p=$.m
l="The "+p+" learns that all of the local "
o=$.r
s.i(0,new R.a3("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.dx+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.L+"ing in amazement. The factory is saved! ")],H.a([],m),R.dP(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.aj)
n.i(0,new X.F(q,s,null),$.bL)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aM,$.j)
t.i(0,$.bc,$.H)
t.i(0,$.c8,$.n)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.L
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.u7(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.H)
l=$.m
p="The "+l+" learns that all of the local "
r=$.r
t.i(0,new R.a3("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.F(s,t,null),$.bL)},
A:function(a){return this.r},
a8:function(a,b,c,d){var t=this.r
this.y=t
this.z=new X.im("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.i6]),H.a([],[M.h6]))
this.D()
this.E()
t=this.Q
if($.$get$nV().Y(0,t))H.aZ("Duplicate class id for "+this.A(0)+": "+t+" is already registered for "+J.cK($.$get$nV().n(0,t))+".")
$.$get$nV().i(0,t,this)},
gG:function(a){return this.r}}
E.nW.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Sage's Robe",H.a([$.O,$.T,$.aY,$.Y,$.a1,$.a_],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.K,$.T,$.aC,$.Y],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.O,$.T,$.hj,$.Y],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.f4,$.n)
t.i(0,$.bc,$.n)
t.i(0,$.f6,$.j)
t.i(0,$.aM,$.H)
t.i(0,$.cA,$.j)
r="The "+$.x+" has blocked access to the books for the duration. The "
q=$.m
p=[U.b]
t.i(0,new R.bE("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q="Now that the "+$.x+" is defeated, it is time to begin recovery efforts. The "
r=$.r
q=q+r+"s ask the "
o=$.m
t.i(0,new R.a3("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.L+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
K.nX.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Uno Reverse Card",H.a([$.mi,$.S,$.aN,$.jj],s),null,!1,null)
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.hj,$.aY,$.S,$.jj],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.lD,$.j)
q.i(0,$.df,$.j)
q.i(0,$.dg,$.j)
q.i(0,$.cV,$.n)
q.i(0,$.c2,$.n)
q.i(0,$.ce,$.n)
q.i(0,$.c3,$.H)
q.i(0,$.du,$.n)
q.i(0,$.ek,$.j)
q.i(0,$.is,$.j)
q.i(0,$.f5,$.j)
q.i(0,$.lJ,$.j)
q.i(0,$.h9,$.n)
q.i(0,$.ep,$.j)
p=$.m
o="The "+p+" is chilling in a "
n=$.r
o=o+n+" village when a bunch of sentient "
m=$.aa
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.x
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.M("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.Q(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fn(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
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
q.i(0,new R.M("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.Q(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
h=this.f
h.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.ds,$.j)
s.i(0,$.c2,$.n)
s.i(0,$.c3,$.j)
s.i(0,$.cn,$.j)
s.i(0,$.cz,$.j)
s.i(0,$.cC,$.n)
s.i(0,$.ir,$.H)
s.i(0,$.df,$.n)
s.i(0,$.cN,$.j)
s.i(0,$.c4,$.j)
s.i(0,$.du,$.H)
p=$.L
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.m
o=o+m+" to do a stupid "
l=$.au
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.x
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.Q(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
h.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.lD,$.j)
t.i(0,$.du,$.j)
t.i(0,$.c3,$.j)
t.i(0,$.cN,$.n)
t.i(0,$.cz,$.j)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.x+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.Q(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
h.i(0,new X.F(s,t,null),$.aq)}}
Y.nY.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Walking Stick",H.a([$.X,$.T,$.dN],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.O,$.T,$.td,$.Y,$.a_],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.K,$.T,$.Y],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Magical Compass",H.a([$.D,$.T,$.Y,$.a1],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p
t=[P.B]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.dt,$.j)
t.i(0,$.c8,$.j)
t.i(0,$.bc,$.j)
t.i(0,$.c4,$.H)
t.i(0,$.aM,$.H)
r="Now that the "+$.x+" has been defeated, the planet has really opened up. The "
q=$.m
p=[U.b]
t.i(0,new R.a3("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.r+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
q="The "+$.x+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.m
t.i(0,new R.bE("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.r+" "+$.L+"s in time to stop them.   ")],H.a([],p),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bL)}}
L.nZ.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Scroll",H.a([$.K,$.T,$.Y],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.aO,$.T,$.ak,$.Y],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.K,$.T,$.aC,$.Y,$.ak,$.a_],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.lE,$.j)
t.i(0,$.bc,$.j)
t.i(0,$.cA,$.j)
t.i(0,$.aM,$.n)
t.i(0,$.cU,$.n)
r="The "+$.x+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.m
p=[U.b]
t.i(0,new R.bE("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q="Now that the "+$.x+" has been taken care of, the "
r=$.m
q=q+r+" discovers a large library of "
o=$.r
t.i(0,new R.a3("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
S.o1.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Cueball",H.a([$.vE,$.T],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.fc,$.vD,$.T,$.aP],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.aO,$.T,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.vz,$.T,$.aY],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.vh,$.j)
t.i(0,$.iq,$.j)
t.i(0,$.ve,$.j)
t.i(0,$.cN,$.n)
r="Now that the "+$.x+" has been defeated, the land is really starting to open up. The "
q=$.m
r=r+q+" finds a tunnel filled with Blind "
p=$.r
o=[U.b]
t.i(0,new R.a3("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.z(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
q="The "+$.x+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.m
t.i(0,new R.bE("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.m
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.r
t.i(0,new R.a3("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.z(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
r="A group of underlings are still making trouble, even after the defeat of the "+$.x+". The "
p=$.m
r=r+p+" begins planting rumors of a huge "
q=$.aa
t.i(0,new R.a3("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.z(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.c_.prototype={}
Y.o8.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Meddler's Guide",H.a([$.aC,$.T,$.K,$.bo,$.a_,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aO,$.T,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.T
r=A.i("Cloud in a Bottle",H.a([r,r,$.bh],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a1,$.T,$.aP,$.av,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.bc,$.n)
t.i(0,$.dt,$.j)
t.i(0,$.cN,$.n)
t.i(0,$.aM,$.n)
t.i(0,$.c8,$.j)
r="The defeat of the "+$.x+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.m
p=[U.b]
t.i(0,new R.bE("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q="Now that the "+$.x+" has been taken care of, the "
r=$.m
q=q+r+" finds a long line of "
o=$.r
t.i(0,new R.a3("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.o9.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Fiduspawn Plush",H.a([$.cg,$.O,$.aY],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.cg,$.O,$.aY],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("D20",H.a([$.tc,$.aE],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pet Pigeon",H.a([$.bp,$.as,$.bi,$.aX,$.bm,$.tk],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.O,$.aY,$.cg],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.aC,$.K],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.aC,$.K],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.aY,$.O],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aC,$.K,$.Y],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.H)
q.i(0,$.aM,$.n)
q.i(0,$.cU,$.j)
q.i(0,$.cA,$.n)
p=$.m
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.r
m=[U.b]
q.i(0,new R.Z("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.au+" or "+$.aa+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.L+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.H)
s.i(0,$.aM,$.j)
s.i(0,$.cU,$.j)
s.i(0,$.rT,$.j)
s.i(0,$.cn,$.j)
s.i(0,$.rZ,$.j)
s.i(0,$.cA,$.n)
o=$.m
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.L
n=n+l+"ing "
k=$.r
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.au
s.i(0,new R.Z("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cM,$.H)
t.i(0,$.dK,$.j)
t.i(0,$.c8,$.j)
t.i(0,$.dh,$.j)
t.i(0,$.f3,$.j)
r=$.m
q="The "+r+" wanders into an entire crowd of "
o=$.r
t.i(0,new R.Z("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.L+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(s,t,null),$.aA)}}
M.br.prototype={}
N.oa.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Frog Statue",H.a([$.aF,$.at,$.S],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.O,$.S],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c5,$.Y,$.a7,$.S],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.aO,$.Y,$.S],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.K,$.S,$.tg,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
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
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.cN,$.H)
t.i(0,$.rV,$.j)
s=[U.b]
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.m
t.i(0,new R.bE("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.z(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
this.f.i(0,new X.F(o,t,null),$.FP)}}
U.ae.prototype={
gG:function(a){return this.e+"kind"},
$isbH:1,
$asbH:function(){return[A.a4]}}
K.cF.prototype={
gG:function(a){return this.a}}
M.oe.prototype={
aM:function(a){return"application/octet-stream"},
O:function(a6,a7){var t=0,s=P.bt(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$O=P.bz(function(a8,a9){if(a8===1)return P.bw(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.de(null,0)
q.a=J.dZ(a7,0)
for(p=0,o="";p<6;++p)o+=H.hG(q.a6(8))
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
d=P.cE(o,e)
c=new O.cX(k,j,null,null,null,null,null,null,d,P.cE(e,o))
c.x=new Uint8Array(H.cB(k*j))
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
break $async$outer}a1[a2]=a3}d.i(0,a,P.oF(a1,0,null))}a4=q.a6(8)
a5=$.$get$ww().n(0,a4)
if(a5==null)throw H.k("Sprite decoding error: Encoding id "+a4+" not supported.")
c.hN(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hz()
r=c
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$O,s)},
$asdp:function(){return[O.cX]},
$asc9:function(){return[O.cX,P.bg]}}
K.bJ.prototype={}
R.oI.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Meddler's Guide",H.a([$.aC,$.T,$.K,$.bo,$.a_,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aO,$.T,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.T
r=A.i("Cloud in a Bottle",H.a([r,r,$.bh],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a1,$.T,$.aP,$.av,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.cU,$.j)
t.i(0,$.aM,$.j)
t.i(0,$.dt,$.n)
t.i(0,$.f6,$.n)
t.i(0,$.rS,$.n)
t.i(0,$.e3,$.n)
t.i(0,$.io,$.n)
t.i(0,$.rY,$.n)
r=$.m
q="The "+r+" decides to take a break after defeating "+$.x+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.r
o=[U.b]
t.i(0,new R.a3("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.L+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.nM(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
r=$.r
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.m
t.i(0,new R.a3("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
r=$.r
q="The "+r+"s are so stressed after all that shit with the "+$.x+". They are yelling and "+$.L+" at each other over the slightest of insults. The "
p=$.m
t.i(0,new R.a3("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p="The "+$.x+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.m
p=p+r+" purifies the pools "
q=$.r
t.i(0,new R.bE("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
r="The defeat of the "+$.x+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.r
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.m
t.i(0,new R.a3("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.au+". Huh. Okay then.")],H.a([],o),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
D.oL.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Robot",H.a([$.a7,$.D,$.as,$.Y],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a7,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a7,$.K],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH For Dummies ",H.a([$.a7,$.K,$.aD,$.aC],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aE,$.a7,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.vJ,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.tu,$.D,$.ag],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a7,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.n)
q.i(0,$.ej,$.j)
q.i(0,$.eo,$.j)
q.i(0,$.ce,$.H)
p=$.m
o="The "+p+" learns from their "
n=$.r
o=o+n+"s about the great "
m=$.au
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.x+" destroyed it. "
o="The "+p+" searches for the "
l=$.aa
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.EK
p=[U.b]
q.i(0,new R.Z("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.z(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.y)
l=$.m
m="The "+l+" is approached by a "
o=$.r
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.L
q.i(0,new R.Z("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.x+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.aa+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.dO(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.eo,$.j)
s.i(0,$.el,$.H)
s.i(0,$.en,$.n)
s.i(0,$.cM,$.j)
s.i(0,$.ce,$.H)
o=$.m
n="The "+o+" learns that all of the local "
l=$.r
s.i(0,new R.Z("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
o=$.m
l="The "+o+" finds two groups of "
n=$.r
l=l+n+"s screaming and "
k=$.L
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.aa
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.Z("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.e9(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.y)
m.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.ha,$.H)
t.i(0,$.ej,$.j)
t.i(0,$.eo,$.j)
t.i(0,$.ce,$.H)
r=$.m
q="The "+r+" learns from a mysterious "+$.r+" in a black trenchcoat about a great "
o=$.au
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.x
t.i(0,new R.Z("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
m.i(0,new X.F(s,t,null),$.aA)}}
V.oN.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Lighter",H.a([$.D,$.ap],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.K,$.bl],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.K,$.bl,$.c5],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.D,$.aD,$.c5,$.bj,$.bm],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.K,$.vP],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.D,$.bd,$.bj],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.D,$.bd,$.bj],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.O,$.fd,$.bj],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bS,$.bd],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.D,$.tl,$.aK,$.bj],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.D,$.tr,$.aK,$.bj],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.D,$.th,$.aK,$.bj],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mk,$.ar,$.D,$.bn,$.bj],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.K,$.bo,$.aC],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.cb,$.D,$.aU,$.bo],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.X,$.ap],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cC,$.n)
q.i(0,$.dK,$.j)
q.i(0,$.e4,$.j)
q.i(0,$.f5,$.j)
q.i(0,$.lI,$.j)
q.i(0,$.dh,$.n)
p=$.m
o=[U.b]
q.i(0,new R.Z("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.z(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
p=this.r
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cC,$.n)
s.i(0,$.dK,$.j)
s.i(0,$.co,$.j)
s.i(0,$.dh,$.n)
n=$.m
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.r
s.i(0,new R.Z("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.aa+" underling. Tremble at the fearsome "+$.au+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.z(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.j)
q.i(0,$.bc,$.H)
q.i(0,$.dM,$.j)
q.i(0,$.c2,$.n)
q.i(0,$.e3,$.H)
q.i(0,$.df,$.H)
n=$.m
m="The "+n+" learns that all of the local "
l=$.r
q.i(0,new R.Z("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.j)
t.i(0,$.df,$.H)
t.i(0,$.ek,$.j)
t.i(0,$.is,$.j)
t.i(0,$.ce,$.n)
t.i(0,$.ep,$.n)
s=$.m
r="The "+s+" finds a crowd of "
n=$.L
r=r+n+"ing "
m=$.r
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.au+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.Z("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.y)
p.i(0,new X.F(q,t,null),$.aA)}}
X.F.prototype={
A:function(a){return"Theme: "+H.A(this.a)}}
U.oU.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Lockpick",H.a([$.D,$.T,$.ak,$.aL,$.a_],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.O,$.T,$.ak],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Thief's Dagger",H.a([$.D,$.T,$.aL,$.ar,$.tb],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.c3,$.j)
t.i(0,$.dg,$.n)
t.i(0,$.c4,$.n)
t.i(0,$.cM,$.n)
r="The "+$.x+" cannot release the frogs since the corrupt "
q=$.r
r=r+q+" Cops have confiscated them. The "
p=$.m
o=[U.b]
t.i(0,new R.bE("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.m
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.x+"'s layer and slated to be returned to the "
r=$.r
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.L+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.fy
t.i(0,new R.a3("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.y)
r=$.r
p="A weeping "+r+" approaches the "
n=$.m
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.x
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.au+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.L+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.fy
t.i(0,new R.a3("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.y)
r=$.x
n="Now that the "+r+" has been defeated, the "
p=$.r
n=n+p+"s have recovered their precious "
q=$.aa
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.m
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.L
l=n+l+"worth, the disaffected Heir to the "+$.au+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.fy
t.i(0,new R.a3("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.oV.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Grandfather Clock",H.a([$.X,$.ah,$.bd,$.S],s),null,!1,"Ticking Tower of Time")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.vT,$.S,$.a8],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aF,$.bi,$.S,$.aX,$.aW,$.aD],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.S,$.a8,$.ah],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sick Turn Tables",H.a([$.D,$.S,$.a8,$.a_,$.am],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.D,$.S,$.a8],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.vj,$.aj)
q.i(0,$.ce,$.n)
q.i(0,$.cM,$.n)
q.i(0,$.en,$.j)
p=$.x
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.m
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x1
l=[U.b]
q.i(0,new R.a3("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.d5(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.m
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.r+"s, they set out to fix the "
m=$.aa
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.x
q.i(0,new R.M("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.Q("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
j=this.f
j.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.h9,$.j)
s.i(0,$.e4,$.H)
s.i(0,$.ce,$.j)
p=$.m
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.r+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.x
s.i(0,new R.M("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.Q(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
j.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c8,$.j)
t.i(0,$.aM,$.n)
t.i(0,$.cU,$.j)
t.i(0,$.dt,$.j)
r=$.x
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.aa
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.m
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.r+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.M("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.Q(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.fn(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
k=$.x
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.aa
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.m
t.i(0,new R.M("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.r+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.Q("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
r="With the defeat of the "+$.x+", "
k=$.m
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.r
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.au
t.i(0,new R.a3("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.d5(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" takes a break from adventuring and visits a little "
o=$.r
k=k+o+" town holding a "
r=$.au
k=k+r+" festival. They walk around town talking to the various villagers and visiting the little shops, before taking a nap in the local inn. The next morning, the villagers welcome the "+p+" to join in the "+r+" festival that\u2019s just starting. Wait, wasn\u2019t the festival yesterday? The "+o+"s assure the "+p+" that the festival is only being held today. "
m="The "+p+" tries to convince the "+o+"s that they were repeating the day before, but the "+o+"s refused to believe. They quickly realize that the villagers aren\u2019t just forgetful when the same thing hsppens the day after. The village appears to be stuck in a time loop They decide to fix things out of the goodness of their heart, but not before exploiting the time loop to mess with the "+o+" town for a little while."
n="After plenty of shenanigans, the "+p+" starts investigating the time loop. They discover that the "+r+" festival ends with an attempted ceremony to summon "
q=$.x
n=n+q+". The "+o+"s bungle the ceremony every time, causing time to reset. The "+p+" studies how the festival is supposed to work, and goes through several loops at once with time time travel to fix the ceremony. "
i="The "+p+" has gone through so many freaking loops that they have memorized the actions of every "+o+". They follow a perfected schedule to make sure every "+o+" prepares for and completes their part of the ceremony. Finally the ceremony is completed and "+q+" arrives. The "+p+" takes out their "+$.bq+" and begins the strife!"
p=q+" lies dead. The "+o+"s are happy to be rid of them and thank the player for helping to complete the ceremony. It was their first time performing the ceremony, after all. The "+p+" rolls their eyes."
t.i(0,new R.M("Stop the Time Loop",!1,[new U.b(k),new U.b(m),new U.b(n),new U.Q(i,"The "+o+"s wake up and begin eagerly preparing for the "+r+" festival. It only comes once a year, after all.",p)],H.a([],l),R.nK(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.n)
p=$.r
r="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.m
t.i(0,new R.M("Move Forwards, Never Stop",!1,[new U.b(r+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.L+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.Q("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.x+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
j.i(0,new X.F(s,t,null),$.aq)}}
G.a0.prototype={
A:function(a){var t=this.c
if(t.length!==0)return C.b.ga9(t)
return"NULL TRAIT"},
ge3:function(){return this.b},
gdP:function(){return this.c},
gbu:function(){return this.d}}
G.aJ.prototype={}
G.ad.prototype={}
G.bI.prototype={}
G.d.prototype={
ghw:function(){return this.f.length},
gbu:function(){var t,s,r,q,p
for(t=this.f,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.c1)(t),++q)r+=t[q].d
return r},
ax:function(a,b){return C.a.b6(b.ghw()-this.f.length)},
ec:function(a){return C.b.fZ(this.f,a.gfM(a))},
$isbH:1,
$asbH:function(){return[G.d]},
gG:function(a){return this.e},
gey:function(){return this.f}}
G.mr.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a0]}}}
Q.ph.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Cardboard Box",H.a([$.K,$.S,$.ak],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.D,$.S,$.ak],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bn,$.S,$.ak,$.mk],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.aX,$.S,$.ak,$.aW,$.bY],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aE,$.S,$.ak,$.ah],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.S,$.a_,$.tg,$.ak,$.aO],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.j)
q.i(0,$.it,$.j)
q.i(0,$.iu,$.j)
q.i(0,$.iq,$.j)
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
q.i(0,new R.a3("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.y)
m=$.m
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.x
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.M("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.Q(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
i=this.f
i.i(0,new X.F(s,q,null),$.aq)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.n)
s.i(0,$.it,$.n)
s.i(0,$.iu,$.n)
s.i(0,$.c3,$.j)
p=$.m
o="Even with the victory of the "+p+" over the villainous "
n=$.x
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.r+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.aa
s.i(0,new R.a3("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.dO(),!1,!1,new Y.bV("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
s.i(0,new R.M("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.L+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.Q("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.x+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.r+"s.")],H.a([],l),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
i.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dL,$.j)
t.i(0,$.it,$.j)
t.i(0,$.iu,$.j)
r=$.m
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.x+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.M("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.Q(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
i.i(0,new X.F(s,t,null),$.aq)}}
E.pi.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Yardstick",H.a([$.dN,$.T,$.tn,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aC,$.T,$.mq,$.K],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.O,$.T,$.hj,$.vO,$.aY,$.jj],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.vX,$.T,$.t6],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.cN,$.j)
t.i(0,$.du,$.j)
t.i(0,$.f2,$.j)
t.i(0,$.dt,$.j)
t.i(0,$.h8,$.j)
t.i(0,$.lF,$.j)
t.i(0,$.iu,$.n)
r=$.m
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.r
o=[U.b]
t.i(0,new R.Z("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.nM(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.y)
r=$.x
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.m
n=q+" tries to manually separate the turtles by catching them with a net and "+$.bq+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.L
t.i(0,new R.M("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.Q(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.EX(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.y)
q=$.m
t.i(0,new R.Z("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.z(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.y)
q="A wizened "+$.r+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.m
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.x
t.i(0,new R.M("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
m=$.m
t.i(0,new R.M("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.x+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.z(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
m="A wizened "+$.r+" tells the "
r=$.m
t.i(0,new R.a3("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.z(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
r="A "+$.r+" that is also a SHOGUN minion tells the "
m=$.m
t.i(0,new R.a3("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.EY(),!1,!1,new Y.bV("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
m=$.m
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.i(0,new R.a3("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.H)
n=$.m
m="The "+n+" finds an unusual rock formation. They examine it from every possible angle to find a secret meaning. In the end it turns out to be an interesting rock and nothing more."
q="The "+n+" is stopped by a young "
r=$.r
t.i(0,new R.a3("Wasting Time",!1,[new U.b(m),new U.b(q+r+" that asks them to watch clouds together. The "+n+" spends a few hours with the "+r+" interpreting the shapes in the clouds."),new U.b("The "+n+" uses the alchemiter to create a number of dream video game fusions. They spend many hours playing them all."),new U.b("After waking up from a nap, the "+n+" turns over and goes right back to sleep. They\u2019re just not feeling like doing anything right now."),new U.b("An elderly "+r+" calls out to the "+n+"; apparently there was a dangerous monster that the "+r+"s wanted the "+n+" to defeat, but the problem solved itself when the monster tripped off a cliffside. Was there actually a point to what the "+n+" was doing? Nope, they\u2019re just really bad at using their time wisely.")],H.a([],o),R.nM(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.y)
n=$.x
r="The "+n+" explains um. What? Where did the "
q=$.m
t.i(0,new R.bE("Waste the Frogs",!1,[new U.b(r+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.aq)}}
M.pm.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Cauldron",H.a([$.vS,$.T,$.a1],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jg,$.dN,$.T,$.X,$.a1],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.ti,$.T,$.a1,$.ak,$.a_],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.c2,$.n)
t.i(0,$.hc,$.n)
t.i(0,$.cV,$.n)
t.i(0,$.cM,$.n)
t.i(0,$.cz,$.n)
t.i(0,$.rV,$.n)
r=$.x
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.r
q=q+p+" consorts. It's up to the "
o=$.m
n=[U.b]
t.i(0,new R.bE("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bZ(),!1,!1,new Y.bC("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o="Even with the defeat of the "+$.x+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.r
o=o+r+" settlement, and crops refuse to thrive at "
p=$.au
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.m
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.fy
t.i(0,new R.a3("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.y)
q="A Mysterious "+$.r+" approaches the "
p=$.m
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.au
q=q+r+" was discovered amongst the "+$.x+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.fy
t.i(0,new R.a3("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.y)
r=$.r
p="A young "+r+" approaches the "
m=$.m
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.au
t.i(0,new R.a3("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.aa+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.L+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.z(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.y)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.pn.prototype={
O:function(a5,a6){var t=0,s=P.bt(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$O=P.bz(function(a7,a8){if(a7===1)return P.bw(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.eS(a6,$.$get$wU())
if(0>=p.length){r=H.w(p,0)
t=1
break}if(J.y0(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.w(p,0)
t=1
break}throw H.k("Invalid WordList file header: '"+H.A(p[0])+"'")}o=P.B
n=H.a([],[o])
m=P.cE(o,B.jT)
q.a=null
l=P.cE(o,o)
for(k=P.W,j=B.dA,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cI()
""+i
H.A(g)
f.toString
f=J.eS(g,$.$get$wS())
if(0>=f.length){r=H.w(f,0)
t=1
break $async$outer}g=f[0]
f=J.bf(g)
if(f.gU(g)===!0){$.$get$cI().toString
continue}if(f.ad(g,$.$get$wT())){$.$get$cI().toString
continue}if(C.c.ad(g,"@")){e=C.c.ae(g,1)
$.$get$cI().toString
n.push(e)}else if(C.c.ad(g,"?")){f=C.c.ae(g,1)
f=$.$get$hN().aS(0,f)
f=H.dv(f,B.ki(),H.aB(f,"o",0),null)
d=P.d2(f,!0,H.aB(f,"o",0))
if(d.length<2)$.$get$cI().b5(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cI()
H.A(c)
H.A(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$wV()
a=f.c9(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.w(f,1)
t=1
break $async$outer}a0=J.cm(f[1])
a1=C.c.ae(g,a0)
if(a1.length===0)continue
f=J.ay(a0)
if(f.R(a0,0)){a1=C.c.ed(a1)
$.$get$cI().toString
f=P.cE(o,o)
a2=new B.jT(P.cE(o,k),f,a1,!1,null,null)
a2.d2(null,null,j)
q.a=a2
f.bL(0,l)
m.i(0,a1,q.a)}else if(f.R(a0,$.wW))if(C.c.ad(a1,"?")){a1=C.c.ae(a1,1)
f=$.$get$hN().aS(0,a1)
f=H.dv(f,B.ki(),H.aB(f,"o",0),null)
d=P.d2(f,!0,H.aB(f,"o",0))
f=$.$get$cI()
f.toString
if(d.length<2)f.b5(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.km(d[0],$.$get$fr(),"")
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}b=J.km(d[1],$.$get$fr(),"")
f=$.$get$cI()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.ad(a1,"@")){e=C.c.ae(a1,1)
$.$get$cI().toString
f=$.$get$hN().aS(0,a1)
f=H.dv(f,B.ki(),H.aB(f,"o",0),null)
d=P.d2(f,!0,H.aB(f,"o",0))
a4=d.length>1?H.wq(d[1],new U.po(q,d)):1
q.a.c.i(0,C.c.cM(e,$.$get$fr(),""),a4)}else{$.$get$cI().toString
f=$.$get$hN().aS(0,g)
f=H.dv(f,B.ki(),H.aB(f,"o",0),null)
d=P.d2(f,!0,H.aB(f,"o",0))
a4=d.length>1?H.wq(d[1],new U.pp(q,d)):1
if(0>=d.length){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bd(J.km(d[0],$.$get$fr(),""))
h=new B.dA(null)
a3=P.cE(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.uT(a4)),[H.aB(f,"cT",0)]))}else if(f.R(a0,$.wW*2)){$.$get$cI().toString
f=$.$get$hN().aS(0,g)
f=H.dv(f,B.ki(),H.aB(f,"o",0),null)
d=P.d2(f,!0,H.aB(f,"o",0))
f=d.length
if(f!==2)$.$get$cI().b5(C.h,"Invalid variant for "+H.A(h.cR(0))+" in "+q.a.e)
else{if(0>=f){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bd(J.km(d[0],$.$get$fr(),""))
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}a3=C.c.cM(U.FS(d[1]),$.$get$fr(),"")
h.a.i(0,f,a3)}}}}}r=new B.hS(n,m)
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$O,s)},
$aseF:function(){return[B.hS]},
$asc9:function(){return[B.hS,P.B]}}
U.po.prototype={
$1:function(a){var t,s,r
t=$.$get$cI()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid include weight '"+H.A(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.b5(C.m,r+H.A(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
U.pp.prototype={
$1:function(a){var t,s,r
t=$.$get$cI()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid weight '"+H.A(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.b5(C.m,r+H.A(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
F.pr.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a4)
s=[G.a0]
r=A.i("Make a World Book",H.a([$.K,$.ah,$.aC],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.U(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.aY,$.O,$.mo],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.aC,$.K,$.Y],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aC,$.K,$.Y],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.aC,$.K],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.D,$.Y,$.mo,$.ah],s),null,!1,"Ink Bleeding Plastic Finger")
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
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.j)
q.i(0,$.cA,$.j)
q.i(0,$.bc,$.n)
q.i(0,$.aM,$.n)
q.i(0,$.f4,$.n)
p=$.m
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.r+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.Z("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.y)
m=this.r
m.i(0,new X.F(s,q,null),$.aA)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dh,$.n)
s.i(0,$.cC,$.n)
s.i(0,$.co,$.n)
s.i(0,$.bc,$.n)
p=$.r
o="An Excited "+p+" rushes up to the "
n=$.m
s.i(0,new R.Z("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.L+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.z(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
m.i(0,new X.F(q,s,null),$.aA)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cC,$.n)
t.i(0,$.dK,$.j)
t.i(0,$.co,$.j)
t.i(0,$.dh,$.n)
t.i(0,$.f2,$.j)
r=$.m
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.r
t.i(0,new R.Z("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.z(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
m.i(0,new X.F(s,t,null),$.aA)}}
B.pw.prototype={
aM:function(a){return"application/x-tar"},
O:function(a,b){var t=0,s=P.bt(),r,q,p
var $async$O=P.bz(function(c,d){if(c===1)return P.bw(d,s)
while(true)switch(t){case 0:q=$.$get$wX()
p=J.uL(b)
q.toString
r=q.fR(T.t5(p,0,null,0),!1)
t=1
break
case 1:return P.bx(r,s)}})
return P.by($async$O,s)},
$asdp:function(){return[T.fG]},
$asc9:function(){return[T.fG,P.bg]}}
A.fO.prototype={}
B.dq.prototype={
cq:function(a){if(a)this.b=(this.b|C.a.ao(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.N+=H.hG(this.b)
this.b=0}},
af:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ao(1,t)
if(typeof a!=="number")return a.aF()
this.cq((a&s)>>>0>0)}},
fE:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.as(1,t-s)
if(typeof a!=="number")return a.aF()
this.cq((a&r)>>>0>0)}},
bM:function(a){var t,s
a=J.ed(a,1)
t=C.d.d0(Math.log(H.kd(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cq(!1)
this.fE(a,t+1)},
aZ:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.N
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.af(r)
q+=r
p=r}else p=0
r=H.cB(q)
o=new Uint8Array(r)
if(t){n=H.cR(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.w(o,m)
o[m]=l}}t=s.N
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a2(k,m)
if(s<0||s>=r)return H.w(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.w(o,t)
o[t]=s}return o.buffer}}
B.de.prototype={
ci:function(a){var t,s,r,q
t=C.f.ai(a/8)
s=C.a.bA(a,8)
r=this.a.getUint8(t)
q=C.a.as(1,s)
if(typeof r!=="number")return r.aF()
return(r&q)>>>0>0},
a6:function(a){var t,s,r
if(a>32)throw H.k(P.e_(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.ci(this.b);++this.b
if(r)t=(t|C.a.ao(1,s))>>>0}return t},
hy:function(a){var t,s,r,q
if(a>32)throw H.k(P.e_(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.ci(this.b);++this.b
if(q)s=(s|C.a.as(1,t-r))>>>0}return s},
bU:function(){var t,s,r
for(t=0;!0;){s=this.ci(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hy(t+1)-1}}
A.e1.prototype={
A:function(a){return"rgb("+H.A(this.b)+", "+H.A(this.c)+", "+H.A(this.d)+", "+H.A(this.a)+")"},
hI:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.as()
s=this.c
if(typeof s!=="number")return s.as()
r=this.d
if(typeof r!=="number")return r.as()
q=this.a
if(typeof q!=="number")return H.af(q)
return(t<<24|s<<16|r<<8|q)>>>0},
R:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.e1){t=this.b
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
ga3:function(a){return this.hI(!0)},
T:function(a,b){var t,s,r,q,p,o,n,m
t=J.ay(b)
if(!!t.$ise1){t=this.b
s=b.b
if(typeof t!=="number")return t.T()
if(typeof s!=="number")return H.af(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.T()
if(typeof q!=="number")return H.af(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.T()
if(typeof o!=="number")return H.af(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.T()
if(typeof m!=="number")return H.af(m)
return A.fS(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.b1()
s=this.c
if(typeof s!=="number")return s.b1()
r=this.d
if(typeof r!=="number")return r.b1()
q=this.a
if(typeof q!=="number")return q.b1()
return A.v1(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.T()
s=this.c
if(typeof s!=="number")return s.T()
r=this.d
if(typeof r!=="number")return r.T()
return A.fS(t+b,s+b,r+b,this.a)}throw H.k("Cannot add ["+H.A(t.gaa(b))+" "+H.A(b)+"] to a Colour. Only Colour, double and int are valid.")},
aq:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.b1()
s=this.c
if(typeof s!=="number")return s.b1()
r=this.d
if(typeof r!=="number")return r.b1()
q=this.a
if(typeof q!=="number")return q.b1()
return A.v1(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.k("Colour index out of range: "+H.A(b))},
i:function(a,b,c){var t,s
t=J.dD(b)
if(t.a1(b,0)||t.aA(b,3))throw H.k("Colour index out of range: "+H.A(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.R(b,0)){this.b=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else if(t.R(b,1)){this.c=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else if(t.R(b,2)){this.d=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ab(c,0,255)
else if(t.R(b,0)){this.b=C.a.ab(J.kl(J.uK(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.R(b,1)){this.c=C.a.ab(J.kl(J.uK(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.ke(c)
if(t.R(b,2)){this.d=C.a.ab(J.kl(s.aq(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ab(J.kl(s.aq(c,255)),0,255)}},
eE:function(a,b,c,d){this.b=C.d.ab(C.d.ab(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ab(C.d.ab(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ab(C.d.ab(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ab(J.xF(d,0,255),0,255)}}
A.r4.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.B]}}}
A.mR.prototype={
$1:function(a){return this.a.e6(a)},
$S:function(){return{func:1,args:[,]}}}
A.mP.prototype={
$1:function(a){this.a.O(0,a).aY(this.b.ghv())},
$S:function(){return{func:1,args:[,]}}}
A.mQ.prototype={
$1:function(a){this.a.fL(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.mS.prototype={
$1:function(a){return this.a.ay(0,this.b)},
$S:function(){return{func:1,args:[W.R]}}}
F.hs.prototype={
A:function(a){return this.b}}
F.ht.prototype={
b5:function(a,b){F.Ex(a).$1("("+this.c+")["+H.A(C.b.gb4(a.b.split(".")))+"]: "+H.A(b))},
cw:function(a,b){this.b5(C.h,b)},
gG:function(a){return this.c}}
F.tH.prototype={}
O.rp.prototype={
$1:function(a){return H.A(a.b7(1))+" = "+H.A(a.b7(2))+C.c.aq("../",this.a)},
$S:function(){return{func:1,args:[P.dw]}}}
O.rq.prototype={
$0:function(){var t=document
J.rx(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.p,null)
t=H.kh(t.querySelector("#voidButton"),"$isfQ")
t.toString
W.eO(t,"click",new O.ro(),!1,W.Hr)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.Hd("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.ro.prototype={
$1:function(a){return O.Hi()},
$S:function(){return{func:1,args:[W.R]}}}
R.hd.prototype={}
R.tZ.prototype={}
R.tY.prototype={}
A.ns.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.Y(0,b)?t.n(0,b):$.$get$tX()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.Y(0,b)?t.n(0,b):$.$get$tX()}throw H.k(P.e_(b,"'name' should be a String name or int id only",null))},
gW:function(a){var t=this.a
t=t.gbY(t)
return new H.jr(null,J.db(t.a),t.b,[H.U(t,0),H.U(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.Y(0,b))this.am(0,b)
s=this.fk()
if(typeof s!=="number")return s.ar()
if(s>=256)throw H.k(P.e_(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
am:function(a,b){var t,s,r
t=this.a
if(!t.Y(0,b))return
s=this.c
r=s.n(0,b)
t.am(0,b)
this.b.am(0,r)
s.am(0,b)
this.d.am(0,r)},
fk:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.Y(0,s))return s;++s}}}
A.jz.prototype={
$aso:function(){return[A.e1]},
$iso:1}
Q.jA.prototype={}
A.jD.prototype={
bt:function(a){if(a===0)return 0
return this.fl(a)},
hn:function(){return this.bt(4294967295)},
fl:function(a){var t,s
t=this.a
if(a>4294967295){s=t.cE()
this.b=C.d.b6(s*4294967295)
return C.d.ai(s*a)}else{s=t.bt(a)
this.b=s
return s}},
cU:function(a){var t=a==null
this.a=t?C.K:P.G4(a)
if(!t)this.b=J.ed(a,1)},
ht:function(a,b){var t=a.length
if(t===0)return
t=this.bt(t)
if(t<0||t>=a.length)return H.w(a,t)
return a[t]},
hs:function(a){return this.ht(a,!0)}}
Y.dQ.prototype={
co:function(a){var t,s
if(this.b!=null)throw H.k("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bk(0,$.an,null,t)
this.c.push(new P.dX(s,t))
return s},
e6:function(a){var t,s,r
if(this.b!=null)throw H.k("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.c1)(t),++r)t[r].ay(0,this.b)
C.b.sm(t,0)}}
V.li.prototype={
$4:function(a,b,c,d){return V.yQ(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bg,P.bg,O.cX]}}}
V.lh.prototype={
$4:function(a,b,c,d){return V.yP(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bg,P.C,P.C,O.cX]}}}
V.lg.prototype={
$4:function(a,b,c,d){return V.yM(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bg,P.bg,O.cX]}}}
V.lf.prototype={
$4:function(a,b,c,d){return V.yL(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bg,P.C,P.C,O.cX]}}}
O.cX.prototype={
hz:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
hN:function(a,b,c,d){var t,s,r,q,p
t=J.bG(d)
s=0
while(!0){r=t.ge0(d)
if(typeof r!=="number")return H.af(r)
if(!(s<r))break
q=(C.a.d0(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.w(r,q)
r[q]=p;++s}}}
D.og.prototype={
$1:function(a){return J.xO(a)},
$S:function(){return{func:1,args:[D.ck]}}}
D.oh.prototype={
$1:function(a){return a},
$S:function(){return{func:1,args:[D.ck]}}}
D.oi.prototype={
$1:function(a){return a.ghu()},
$S:function(){return{func:1,args:[D.ck]}}}
D.ck.prototype={
A:function(a){return this.a},
gG:function(a){return this.a},
ghu:function(){return this.d}}
D.jU.prototype={}
D.nQ.prototype={}
B.dA.prototype={
ei:function(a,b){if(this.a.Y(0,"MAIN"))return this.a.n(0,"MAIN")
return},
cR:function(a){return this.ei(a,null)},
A:function(a){return"[Word: "+H.A(this.cR(0))+"]"}}
B.jT.prototype={
A:function(a){return"WordList '"+this.e+"': "+this.eB(0)},
$isp:1,
$asp:function(){return[B.dA]},
$asdW:function(){return[B.dA]},
$ashQ:function(){return[B.dA]},
$ascT:function(){return[B.dA]},
$aso:function(){return[B.dA]},
$ast:function(){return[B.dA]},
gG:function(a){return this.e}}
B.hS.prototype={
A:function(a){return"[WordListFile: "+this.b.A(0)+" ]"}}
S.fl.prototype={}
S.uo.prototype={}
S.up.prototype={}
S.uq.prototype={}
S.rO.prototype={}
S.rR.prototype={}
S.rF.prototype={}
S.u8.prototype={}
S.us.prototype={}
S.ut.prototype={}
S.kK.prototype={}
S.u0.prototype={}
S.tW.prototype={}
S.mI.prototype={}
S.rJ.prototype={}
S.rA.prototype={}
S.l1.prototype={}
S.tI.prototype={}
S.l2.prototype={}
S.nu.prototype={}
S.uf.prototype={}
S.uc.prototype={}
S.ug.prototype={}
S.rz.prototype={}
S.lY.prototype={}
S.kI.prototype={}
S.rE.prototype={}
S.rD.prototype={}
S.u1.prototype={}
S.uh.prototype={}
S.u2.prototype={}
S.rQ.prototype={}
S.rP.prototype={}
S.ue.prototype={}
S.ud.prototype={}
S.oT.prototype={}
S.uj.prototype={}
S.rG.prototype={}
S.rH.prototype={}
S.ur.prototype={}
S.hv.prototype={}
S.tO.prototype={}
S.tP.prototype={}
S.tQ.prototype={}
S.tR.prototype={}
S.u9.prototype={}
S.ua.prototype={}
S.ub.prototype={}
S.tN.prototype={}
S.tT.prototype={}
S.tU.prototype={}
S.t2.prototype={}
S.t3.prototype={}
S.t4.prototype={}
S.tV.prototype={}
S.tS.prototype={}
S.rB.prototype={}
S.ul.prototype={}
S.um.prototype={}
S.uk.prototype={}
Z.tC.prototype={}
Z.ty.prototype={}
Z.tz.prototype={}
Q.cT.prototype={
k:function(a,b){return b},
A:function(a){return J.cK(this.gbT())},
au:function(a,b){return Q.uv(this,b,H.aB(this,"cT",0),null)},
a0:function(a,b){return Q.uu(this,!1,!0,null,H.aB(this,"cT",0))},
an:function(a){return this.a0(a,!0)},
$iso:1,
$aso:null}
Q.dW.prototype={
gbT:function(){return this.b},
bK:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.uT(c)),[H.aB(this,"cT",0)]))},
h:function(a,b){return this.bK(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return J.uO(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.w(t,b)
t[b]=new Q.h(c,s,[H.aB(this,"cT",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
A:function(a){return P.jk(this.b,"[","]")},
au:function(a,b){return Q.uv(this,b,H.aB(this,"dW",0),null)},
a0:function(a,b){return Q.uu(this,!1,!0,null,H.aB(this,"dW",0))},
an:function(a){return this.a0(a,!0)},
d2:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hQ.prototype={$ascT:null,$aso:null,$asp:null,$ast:null,$isp:1,$ist:1,$iso:1}
Q.h.prototype={
A:function(a){return"("+H.A(this.a)+" @ "+H.A(this.b)+")"},
gV:function(a){return this.a},
gcP:function(a){return this.b}}
Q.eM.prototype={
gbT:function(){return this.b},
gW:function(a){var t=new Q.pk(null,[H.aB(this,"eM",0)])
t.a=J.db(this.b)
return t},
gm:function(a){return J.cm(this.b)},
A:function(a){return J.cK(this.b)},
au:function(a,b){return Q.uv(this,b,H.aB(this,"eM",0),null)},
a0:function(a,b){return Q.uu(this,!1,!0,null,H.aB(this,"eM",0))},
an:function(a){return this.a0(a,!0)}}
Q.hP.prototype={$ascT:null,$aso:null,$iso:1}
Q.pk.prototype={
gP:function(){return J.uO(this.a.gP())},
F:function(){return this.a.F()}}
Q.jQ.prototype={
$aseM:function(a,b){return[b]},
$ashP:function(a,b){return[b]},
$ascT:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
Q.pl.prototype={
$1:function(a){var t=J.bG(a)
return new Q.h(this.c.$1(t.gV(a)),t.gcP(a),[this.b])},
$S:function(){return H.eR(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jQ")}}
J.f.prototype.ez=J.f.prototype.A
J.hn.prototype.eA=J.hn.prototype.A
P.dk.prototype.eC=P.dk.prototype.bC
P.dk.prototype.eD=P.dk.prototype.bB
P.aR.prototype.d_=P.aR.prototype.a7
Q.dW.prototype.eB=Q.dW.prototype.A;(function installTearOffs(){installTearOff(H.fw.prototype,"ghi",0,0,0,null,["$0"],["bR"],1)
installTearOff(H.dC.prototype,"gel",0,0,0,null,["$1"],["av"],11)
installTearOff(H.eN.prototype,"gfU",0,0,0,null,["$1"],["aT"],11)
installTearOff(H,"xb",1,0,0,null,["$1"],["Gw"],8)
installTearOff(P,"Gz",1,0,0,null,["$1"],["FW"],6)
installTearOff(P,"GA",1,0,0,null,["$1"],["FX"],6)
installTearOff(P,"GB",1,0,0,null,["$1"],["FY"],6)
installTearOff(P,"xn",1,0,0,null,["$0"],["Gv"],1)
installTearOff(P.jY.prototype,"gdN",0,0,0,null,["$2","$1"],["ct","bj"],12)
installTearOff(P.bk.prototype,"gb8",0,0,0,null,["$2","$1"],["ak","eX"],12)
var t
installTearOff(t=P.dk.prototype,"gdt",0,0,0,null,["$0"],["bF"],1)
installTearOff(t,"gdu",0,0,0,null,["$0"],["bG"],1)
installTearOff(t=P.hW.prototype,"gdt",0,0,0,null,["$0"],["bF"],1)
installTearOff(t,"gdu",0,0,0,null,["$0"],["bG"],1)
installTearOff(t,"gf8",0,0,0,null,["$1"],["f9"],function(){return H.eR(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hW")})
installTearOff(t,"gfc",0,0,0,null,["$2"],["fd"],14)
installTearOff(t,"gfa",0,0,0,null,["$0"],["fb"],1)
installTearOff(P.k3.prototype,"gfM",0,1,0,null,["$1"],["ag"],29)
installTearOff(P,"GK",1,0,0,null,["$2"],["yt"],30)
installTearOff(P,"GL",1,0,0,null,["$1"],["fD"],4)
installTearOff(t=W.i8.prototype,"gap",0,1,0,null,["$1"],["cw"],4)
installTearOff(t,"ghb",0,0,0,null,["$1"],["dY"],4)
installTearOff(t,"ghK",0,0,0,null,["$1"],["hL"],4)
installTearOff(W.f_.prototype,"gV",0,1,0,null,["$1"],["J"],5)
installTearOff(W.ib.prototype,"gV",0,1,0,null,["$1"],["J"],32)
installTearOff(W.ih.prototype,"gV",0,1,0,null,["$1"],["J"],5)
installTearOff(W.ii.prototype,"gV",0,1,0,null,["$1"],["J"],8)
installTearOff(W.ij.prototype,"gV",0,1,0,null,["$1"],["J"],5)
installTearOff(W.f8.prototype,"gV",0,1,0,null,["$1"],["J"],13)
installTearOff(W.iy.prototype,"gV",0,1,0,null,["$1"],["J"],9)
installTearOff(W.f9.prototype,"gV",0,1,0,null,["$1"],["J"],7)
installTearOff(W.iA.prototype,"gV",0,1,0,null,["$1"],["J"],7)
installTearOff(W.js.prototype,"gV",0,1,0,null,["$1"],["J"],5)
installTearOff(W.jt.prototype,"gV",0,1,0,null,["$1"],["J"],10)
installTearOff(W.ch.prototype,"gV",0,1,0,null,["$1"],["J"],10)
installTearOff(W.jC.prototype,"gV",0,1,0,null,["$1"],["J"],15)
installTearOff(W.jG.prototype,"gV",0,1,0,null,["$1"],["J"],9)
installTearOff(W.jI.prototype,"gV",0,1,0,null,["$1"],["J"],16)
installTearOff(W.jJ.prototype,"gV",0,1,0,null,["$1"],["J"],17)
installTearOff(W.cj.prototype,"gV",0,1,0,null,["$1"],["J"],18)
installTearOff(W.jN.prototype,"gV",0,1,0,null,["$1"],["J"],19)
installTearOff(W.jO.prototype,"gV",0,1,0,null,["$1"],["J"],20)
installTearOff(W.jP.prototype,"gV",0,1,0,null,["$1"],["J"],21)
installTearOff(W.hT.prototype,"gV",0,1,0,null,["$1"],["J"],22)
installTearOff(W.jZ.prototype,"gV",0,1,0,null,["$1"],["J"],33)
installTearOff(W.k2.prototype,"gV",0,1,0,null,["$1"],["J"],24)
installTearOff(W.hZ.prototype,"gV",0,1,0,null,["$1"],["J"],25)
installTearOff(W.k6.prototype,"gV",0,1,0,null,["$1"],["J"],26)
installTearOff(W.k8.prototype,"gV",0,1,0,null,["$1"],["J"],27)
installTearOff(P.jK.prototype,"gV",0,1,0,null,["$1"],["J"],28)
installTearOff(A,"uU",1,0,0,null,["$0"],["H2"],1)
installTearOff(R,"dP",1,0,0,null,["$1"],["wt"],0)
installTearOff(R,"F0",1,0,0,null,["$1"],["Fg"],0)
installTearOff(R,"EX",1,0,0,null,["$1"],["F1"],0)
installTearOff(R,"nM",1,0,0,null,["$1"],["Ff"],0)
installTearOff(R,"bZ",1,0,0,null,["$1"],["Fe"],0)
installTearOff(R,"nL",1,0,0,null,["$1"],["Fd"],0)
installTearOff(R,"nK",1,0,0,null,["$1"],["Fb"],0)
installTearOff(R,"fn",1,0,0,null,["$1"],["F9"],0)
installTearOff(R,"d5",1,0,0,null,["$1"],["F5"],0)
installTearOff(R,"e9",1,0,0,null,["$1"],["F7"],0)
installTearOff(R,"dO",1,0,0,null,["$1"],["Fc"],0)
installTearOff(R,"u7",1,0,0,null,["$1"],["F6"],0)
installTearOff(R,"EZ",1,0,0,null,["$1"],["F8"],0)
installTearOff(R,"F_",1,0,0,null,["$1"],["Fa"],0)
installTearOff(R,"z",1,0,0,null,["$1"],["F2"],0)
installTearOff(R,"EY",1,0,0,null,["$1"],["F3"],0)
installTearOff(F.ht.prototype,"gap",0,1,0,null,["$1"],["cw"],4)
installTearOff(O,"H4",1,0,0,null,["$1"],["H6"],31)
installTearOff(Y.dQ.prototype,"ghv",0,0,0,null,["$1"],["e6"],function(){return H.eR(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dQ")})
installTearOff(V,"Hb",1,0,0,null,["$4"],["yO"],3)
installTearOff(V,"Ha",1,0,0,null,["$4"],["yN"],2)
installTearOff(B,"ki",1,0,0,null,["$1"],["Gq"],23)
installTearOff(T,"GF",1,0,0,null,["$4"],["yE"],3)
installTearOff(T,"GE",1,0,0,null,["$4"],["yD"],2)
installTearOff(T,"GD",1,0,0,null,["$4"],["yC"],3)
installTearOff(T,"GC",1,0,0,null,["$4"],["yB"],2)
installTearOff(F,"GT",1,0,0,null,["$4"],["yK"],3)
installTearOff(F,"GS",1,0,0,null,["$4"],["yJ"],2)
installTearOff(F,"GR",1,0,0,null,["$4"],["yI"],3)
installTearOff(F,"GQ",1,0,0,null,["$4"],["yH"],2)
installTearOff(F,"GP",1,0,0,null,["$4"],["yG"],3)
installTearOff(F,"GO",1,0,0,null,["$4"],["yF"],2)})();(function inheritance(){inherit(P.ac,null)
var t=P.ac
inherit(H.tE,t)
inherit(J.f,t)
inherit(J.i5,t)
inherit(P.hE,t)
inherit(P.o,t)
inherit(H.ew,t)
inherit(P.jm,t)
inherit(H.iw,t)
inherit(H.p4,t)
inherit(H.eY,t)
inherit(H.qk,t)
inherit(H.fw,t)
inherit(H.pR,t)
inherit(H.eP,t)
inherit(H.qj,t)
inherit(H.pE,t)
inherit(H.fo,t)
inherit(H.oX,t)
inherit(H.dH,t)
inherit(H.dC,t)
inherit(H.eN,t)
inherit(P.jq,t)
inherit(H.kQ,t)
inherit(H.nP,t)
inherit(H.p1,t)
inherit(P.ei,t)
inherit(H.h5,t)
inherit(H.k7,t)
inherit(H.dV,t)
inherit(H.v,t)
inherit(H.mJ,t)
inherit(H.mL,t)
inherit(H.hm,t)
inherit(H.k5,t)
inherit(H.jW,t)
inherit(H.jM,t)
inherit(H.qD,t)
inherit(P.cD,t)
inherit(P.eZ,t)
inherit(P.jY,t)
inherit(P.k1,t)
inherit(P.bk,t)
inherit(P.jX,t)
inherit(P.dj,t)
inherit(P.ok,t)
inherit(P.dk,t)
inherit(P.k_,t)
inherit(P.pM,t)
inherit(P.qn,t)
inherit(P.qB,t)
inherit(P.eU,t)
inherit(P.qQ,t)
inherit(P.qa,t)
inherit(P.qc,t)
inherit(P.o4,t)
inherit(P.qh,t)
inherit(P.dB,t)
inherit(P.ff,t)
inherit(P.aR,t)
inherit(P.qI,t)
inherit(P.qi,t)
inherit(P.fR,t)
inherit(P.fU,t)
inherit(P.qK,t)
inherit(P.d9,t)
inherit(P.bH,t)
inherit(P.e2,t)
inherit(P.dn,t)
inherit(P.dJ,t)
inherit(P.no,t)
inherit(P.jL,t)
inherit(P.pW,t)
inherit(P.bO,t)
inherit(P.ll,t)
inherit(P.p,t)
inherit(P.be,t)
inherit(P.d3,t)
inherit(P.dw,t)
inherit(P.dS,t)
inherit(P.B,t)
inherit(P.cc,t)
inherit(P.eK,t)
inherit(P.ka,t)
inherit(P.p5,t)
inherit(P.qz,t)
inherit(W.i8,t)
inherit(W.jy,t)
inherit(W.ia,t)
inherit(P.kU,t)
inherit(W.bu,t)
inherit(W.lR,t)
inherit(W.qH,t)
inherit(P.qE,t)
inherit(P.px,t)
inherit(P.qg,t)
inherit(P.qp,t)
inherit(P.qq,t)
inherit(P.bg,t)
inherit(P.d8,t)
inherit(T.fH,t)
inherit(T.dc,t)
inherit(T.hh,t)
inherit(T.nq,t)
inherit(T.pt,t)
inherit(T.pu,t)
inherit(T.pv,t)
inherit(T.ps,t)
inherit(T.m7,t)
inherit(T.iB,t)
inherit(B.hi,t)
inherit(N.ab,t)
inherit(L.fI,t)
inherit(A.jz,t)
inherit(O.c9,t)
inherit(T.hI,t)
inherit(M.fP,t)
inherit(X.im,t)
inherit(X.i6,t)
inherit(M.h6,t)
inherit(Z.il,t)
inherit(E.nm,t)
inherit(E.N,t)
inherit(A.a4,t)
inherit(U.b,t)
inherit(Y.dR,t)
inherit(K.cF,t)
inherit(K.bJ,t)
inherit(X.F,t)
inherit(G.a0,t)
inherit(A.fO,t)
inherit(B.dq,t)
inherit(B.de,t)
inherit(A.e1,t)
inherit(F.hs,t)
inherit(F.ht,t)
inherit(Q.jA,t)
inherit(A.jD,t)
inherit(Y.dQ,t)
inherit(O.cX,t)
inherit(D.ck,t)
inherit(B.dA,t)
inherit(Q.cT,t)
inherit(B.hS,t)
inherit(Q.h,t)
t=J.f
inherit(J.mv,t)
inherit(J.mw,t)
inherit(J.hn,t)
inherit(J.es,t)
inherit(J.fg,t)
inherit(J.et,t)
inherit(H.fi,t)
inherit(H.ey,t)
inherit(W.aH,t)
inherit(W.cL,t)
inherit(W.eX,t)
inherit(W.fV,t)
inherit(W.bN,t)
inherit(W.iC,t)
inherit(W.l4,t)
inherit(W.f0,t)
inherit(W.ib,t)
inherit(W.ie,t)
inherit(W.l7,t)
inherit(W.ig,t)
inherit(W.iD,t)
inherit(W.ii,t)
inherit(W.ij,t)
inherit(W.fZ,t)
inherit(W.R,t)
inherit(W.iE,t)
inherit(W.lO,t)
inherit(W.lS,t)
inherit(W.cp,t)
inherit(W.m2,t)
inherit(W.iF,t)
inherit(W.hg,t)
inherit(W.eb,t)
inherit(W.mU,t)
inherit(W.js,t)
inherit(W.cr,t)
inherit(W.iP,t)
inherit(W.ng,t)
inherit(W.nh,t)
inherit(W.iQ,t)
inherit(W.nv,t)
inherit(W.e8,t)
inherit(W.ec,t)
inherit(W.ch,t)
inherit(W.iR,t)
inherit(W.o2,t)
inherit(W.ct,t)
inherit(W.iS,t)
inherit(W.fq,t)
inherit(W.cj,t)
inherit(W.od,t)
inherit(W.oj,t)
inherit(W.cl,t)
inherit(W.iT,t)
inherit(W.oW,t)
inherit(W.cv,t)
inherit(W.iU,t)
inherit(W.fs,t)
inherit(W.jO,t)
inherit(W.pa,t)
inherit(W.ft,t)
inherit(W.jP,t)
inherit(W.pH,t)
inherit(W.iV,t)
inherit(W.iW,t)
inherit(W.iG,t)
inherit(W.iH,t)
inherit(W.iI,t)
inherit(W.iJ,t)
inherit(W.qO,t)
inherit(W.qP,t)
inherit(P.mb,t)
inherit(P.nl,t)
inherit(P.d1,t)
inherit(P.iK,t)
inherit(P.d4,t)
inherit(P.iL,t)
inherit(P.nD,t)
inherit(P.iM,t)
inherit(P.d7,t)
inherit(P.iN,t)
inherit(P.pg,t)
inherit(P.fK,t)
inherit(P.kp,t)
inherit(P.nR,t)
inherit(P.qN,t)
inherit(P.iO,t)
t=J.hn
inherit(J.nB,t)
inherit(J.eI,t)
inherit(J.eu,t)
inherit(F.tH,t)
inherit(R.hd,t)
inherit(R.tZ,t)
inherit(R.tY,t)
inherit(S.fl,t)
inherit(S.uo,t)
inherit(S.up,t)
inherit(S.uq,t)
inherit(S.rO,t)
inherit(S.rR,t)
inherit(S.rF,t)
inherit(S.us,t)
inherit(S.ut,t)
inherit(S.l1,t)
inherit(S.uf,t)
inherit(S.ug,t)
inherit(S.rz,t)
inherit(S.lY,t)
inherit(S.kI,t)
inherit(S.rE,t)
inherit(S.rD,t)
inherit(S.rQ,t)
inherit(S.oT,t)
inherit(S.rH,t)
inherit(S.hv,t)
inherit(S.tP,t)
inherit(S.tR,t)
inherit(S.ua,t)
inherit(S.ub,t)
inherit(S.tT,t)
inherit(S.tU,t)
inherit(S.t3,t)
inherit(S.t4,t)
inherit(S.tV,t)
inherit(S.tS,t)
inherit(S.rB,t)
inherit(S.ul,t)
inherit(S.um,t)
inherit(S.uk,t)
inherit(Z.tC,t)
inherit(Z.ty,t)
inherit(Z.tz,t)
inherit(J.tD,J.es)
t=J.fg
inherit(J.jo,t)
inherit(J.jn,t)
inherit(P.jp,P.hE)
t=P.jp
inherit(H.hO,t)
inherit(W.k0,t)
inherit(H.kN,H.hO)
t=P.o
inherit(H.t,t)
inherit(H.hu,t)
inherit(H.hR,t)
inherit(P.hl,t)
inherit(H.qC,t)
t=H.t
inherit(H.ev,t)
inherit(H.mK,t)
inherit(P.qb,t)
inherit(P.eB,t)
t=H.ev
inherit(H.oG,t)
inherit(H.fh,t)
inherit(P.mN,t)
inherit(H.fY,H.hu)
t=P.jm
inherit(H.jr,t)
inherit(H.jR,t)
inherit(Q.pk,t)
t=H.eY
inherit(H.rs,t)
inherit(H.rt,t)
inherit(H.qf,t)
inherit(H.pS,t)
inherit(H.mg,t)
inherit(H.mh,t)
inherit(H.qm,t)
inherit(H.oY,t)
inherit(H.oZ,t)
inherit(H.ru,t)
inherit(H.rg,t)
inherit(H.rh,t)
inherit(H.ri,t)
inherit(H.rj,t)
inherit(H.rk,t)
inherit(H.oK,t)
inherit(H.mz,t)
inherit(H.my,t)
inherit(H.rc,t)
inherit(H.rd,t)
inherit(H.re,t)
inherit(P.pB,t)
inherit(P.pA,t)
inherit(P.pC,t)
inherit(P.pD,t)
inherit(P.qR,t)
inherit(P.qS,t)
inherit(P.r1,t)
inherit(P.r2,t)
inherit(P.lX,t)
inherit(P.lW,t)
inherit(P.pX,t)
inherit(P.q4,t)
inherit(P.q0,t)
inherit(P.q1,t)
inherit(P.q2,t)
inherit(P.pZ,t)
inherit(P.q3,t)
inherit(P.pY,t)
inherit(P.q7,t)
inherit(P.q8,t)
inherit(P.q6,t)
inherit(P.q5,t)
inherit(P.on,t)
inherit(P.ol,t)
inherit(P.om,t)
inherit(P.oo,t)
inherit(P.ot,t)
inherit(P.or,t)
inherit(P.os,t)
inherit(P.ou,t)
inherit(P.ox,t)
inherit(P.oy,t)
inherit(P.ov,t)
inherit(P.ow,t)
inherit(P.oz,t)
inherit(P.oA,t)
inherit(P.op,t)
inherit(P.oq,t)
inherit(P.pG,t)
inherit(P.pF,t)
inherit(P.qo,t)
inherit(P.qU,t)
inherit(P.qT,t)
inherit(P.qV,t)
inherit(P.r0,t)
inherit(P.qs,t)
inherit(P.qt,t)
inherit(P.qu,t)
inherit(P.qd,t)
inherit(P.r5,t)
inherit(P.n_,t)
inherit(P.qM,t)
inherit(P.qL,t)
inherit(P.lb,t)
inherit(P.lc,t)
inherit(P.p9,t)
inherit(P.p6,t)
inherit(P.p7,t)
inherit(P.p8,t)
inherit(P.r3,t)
inherit(P.qY,t)
inherit(P.qX,t)
inherit(P.qZ,t)
inherit(P.r_,t)
inherit(W.pJ,t)
inherit(W.m5,t)
inherit(W.m6,t)
inherit(W.pV,t)
inherit(P.qG,t)
inherit(P.py,t)
inherit(P.r6,t)
inherit(P.r7,t)
inherit(P.kV,t)
inherit(P.qW,t)
inherit(P.kv,t)
inherit(P.kw,t)
inherit(A.rm,t)
inherit(O.kD,t)
inherit(A.mu,t)
inherit(A.mt,t)
inherit(G.mr,t)
inherit(U.po,t)
inherit(U.pp,t)
inherit(A.r4,t)
inherit(A.mR,t)
inherit(A.mP,t)
inherit(A.mQ,t)
inherit(A.mS,t)
inherit(O.rp,t)
inherit(O.rq,t)
inherit(O.ro,t)
inherit(V.li,t)
inherit(V.lh,t)
inherit(V.lg,t)
inherit(V.lf,t)
inherit(D.og,t)
inherit(D.oh,t)
inherit(D.oi,t)
inherit(Q.pl,t)
t=H.pE
inherit(H.fx,t)
inherit(H.i0,t)
inherit(P.eJ,P.jq)
inherit(H.kR,P.eJ)
inherit(H.fT,H.kQ)
inherit(H.kS,H.fT)
t=P.ei
inherit(H.jx,t)
inherit(H.mA,t)
inherit(H.p3,t)
inherit(H.kL,t)
inherit(H.nU,t)
inherit(P.fk,t)
inherit(P.d0,t)
inherit(P.V,t)
inherit(P.eH,t)
inherit(P.dT,t)
inherit(P.bR,t)
inherit(P.l3,t)
t=H.oK
inherit(H.of,t)
inherit(H.fM,t)
t=P.hl
inherit(H.pz,t)
inherit(T.fG,t)
t=H.ey
inherit(H.n8,t)
inherit(H.ju,t)
t=H.ju
inherit(H.hA,t)
inherit(H.hB,t)
inherit(H.hC,H.hA)
inherit(H.hy,H.hC)
inherit(H.hD,H.hB)
inherit(H.hz,H.hD)
t=H.hy
inherit(H.n9,t)
inherit(H.na,t)
t=H.hz
inherit(H.nb,t)
inherit(H.nc,t)
inherit(H.nd,t)
inherit(H.ne,t)
inherit(H.nf,t)
inherit(H.jv,t)
inherit(H.fj,t)
t=P.jY
inherit(P.dX,t)
inherit(P.k9,t)
t=P.k_
inherit(P.pL,t)
inherit(P.pN,t)
inherit(P.qA,P.qn)
t=P.dj
inherit(P.hV,t)
inherit(W.pT,t)
inherit(P.hW,P.dk)
inherit(P.ql,P.hV)
inherit(P.qr,P.qQ)
inherit(P.k4,H.v)
inherit(P.o3,P.o4)
inherit(P.qe,P.o3)
inherit(P.k3,P.qe)
t=P.fR
inherit(P.kA,t)
inherit(P.le,t)
t=P.fU
inherit(P.kB,t)
inherit(P.pd,t)
inherit(P.pc,P.le)
t=P.dn
inherit(P.W,t)
inherit(P.C,t)
t=P.d0
inherit(P.eA,t)
inherit(P.mc,t)
inherit(P.pK,P.ka)
t=W.aH
inherit(W.ax,t)
inherit(W.h_,t)
inherit(W.kP,t)
inherit(W.lN,t)
inherit(W.lP,t)
inherit(W.lT,t)
inherit(W.hf,t)
inherit(W.hx,t)
inherit(W.nF,t)
inherit(W.jF,t)
inherit(W.o5,t)
inherit(W.eL,t)
inherit(W.cs,t)
inherit(W.h0,t)
inherit(W.cS,t)
inherit(W.cH,t)
inherit(W.h1,t)
inherit(W.pe,t)
inherit(W.pj,t)
inherit(W.jS,t)
inherit(W.pq,t)
inherit(W.qy,t)
inherit(P.l5,t)
inherit(P.hH,t)
inherit(P.p_,t)
inherit(P.bA,t)
inherit(P.fL,t)
t=W.ax
inherit(W.dr,t)
inherit(W.eg,t)
inherit(W.eh,t)
inherit(W.id,t)
inherit(W.fu,t)
inherit(W.pO,t)
t=W.dr
inherit(W.al,t)
inherit(P.cd,t)
t=W.al
inherit(W.eT,t)
inherit(W.kq,t)
inherit(W.hw,t)
inherit(W.kC,t)
inherit(W.kF,t)
inherit(W.fQ,t)
inherit(W.ld,t)
inherit(W.lM,t)
inherit(W.iy,t)
inherit(W.m8,t)
inherit(W.fb,t)
inherit(W.me,t)
inherit(W.mC,t)
inherit(W.hp,t)
inherit(W.mZ,t)
inherit(W.n2,t)
inherit(W.nk,t)
inherit(W.np,t)
inherit(W.nt,t)
inherit(W.fp,t)
inherit(W.jG,t)
inherit(W.o7,t)
inherit(W.hJ,t)
inherit(W.oM,t)
inherit(W.oO,t)
inherit(W.q9,t)
inherit(W.eW,W.hw)
inherit(W.h2,W.h_)
inherit(W.ky,W.h2)
t=W.bN
inherit(W.kW,t)
inherit(W.kX,t)
inherit(W.fW,t)
inherit(W.fX,t)
inherit(W.kY,t)
inherit(W.kZ,t)
inherit(W.l_,t)
inherit(W.f_,W.iC)
inherit(W.pI,W.jy)
inherit(W.iX,W.iD)
inherit(W.ih,W.iX)
t=W.R
inherit(W.lj,t)
inherit(W.ob,t)
inherit(W.oc,t)
inherit(W.cf,W.eX)
inherit(W.iY,W.iE)
inherit(W.f8,W.iY)
inherit(W.iZ,W.iF)
inherit(W.f9,W.iZ)
inherit(W.iA,W.f9)
inherit(W.e7,W.hf)
inherit(W.ho,W.eb)
inherit(W.n3,W.hx)
inherit(W.j8,W.iP)
inherit(W.jt,W.j8)
inherit(W.j9,W.iQ)
inherit(W.jw,W.j9)
inherit(W.nA,W.ec)
inherit(W.ja,W.iR)
inherit(W.jC,W.ja)
inherit(W.o6,W.eL)
inherit(W.h3,W.h0)
inherit(W.jI,W.h3)
inherit(W.jb,W.iS)
inherit(W.jJ,W.jb)
inherit(W.jc,W.iT)
inherit(W.oR,W.jc)
inherit(W.h4,W.h1)
inherit(W.oS,W.h4)
inherit(W.jd,W.iU)
inherit(W.jN,W.jd)
inherit(W.je,W.iV)
inherit(W.hT,W.je)
inherit(W.jf,W.iW)
inherit(W.jZ,W.jf)
inherit(W.pP,W.ig)
inherit(W.j_,W.iG)
inherit(W.k2,W.j_)
inherit(W.j0,W.iH)
inherit(W.hZ,W.j0)
inherit(W.j1,W.iI)
inherit(W.k6,W.j1)
inherit(W.j2,W.iJ)
inherit(W.k8,W.j2)
t=P.kU
inherit(W.pQ,t)
inherit(P.ku,t)
inherit(W.hU,W.pT)
inherit(W.pU,P.ok)
inherit(P.qF,P.qE)
inherit(P.jV,P.px)
inherit(P.bU,P.qq)
t=P.cd
inherit(P.cq,t)
inherit(P.ef,t)
inherit(P.lm,t)
inherit(P.ln,t)
inherit(P.lo,t)
inherit(P.lp,t)
inherit(P.lq,t)
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
inherit(P.lQ,t)
inherit(P.n0,t)
inherit(P.n1,t)
inherit(P.ny,t)
inherit(P.o_,t)
inherit(P.oJ,t)
inherit(P.pf,t)
inherit(P.hX,t)
inherit(P.qv,t)
inherit(P.qw,t)
inherit(P.qx,t)
t=P.cq
inherit(P.kn,t)
inherit(P.m9,t)
inherit(P.oH,t)
inherit(P.eG,t)
inherit(P.pb,t)
inherit(P.j3,P.iK)
inherit(P.mF,P.j3)
inherit(P.j4,P.iL)
inherit(P.ni,P.j4)
inherit(P.j5,P.iM)
inherit(P.oE,P.j5)
inherit(P.oQ,P.eG)
inherit(P.j6,P.iN)
inherit(P.p0,P.j6)
t=P.bA
inherit(P.e0,t)
inherit(P.kT,t)
inherit(P.eV,P.e0)
inherit(P.j7,P.iO)
inherit(P.jK,P.j7)
t=B.hi
inherit(S.ko,t)
inherit(M.kt,t)
inherit(A.kO,t)
inherit(M.l0,t)
inherit(V.l8,t)
inherit(U.lC,t)
inherit(N.mB,t)
inherit(F.n6,t)
inherit(G.nE,t)
inherit(Q.nT,t)
inherit(N.o9,t)
inherit(D.oL,t)
inherit(V.oN,t)
inherit(F.pr,t)
t=N.ab
inherit(T.l6,t)
inherit(R.nJ,t)
t=T.l6
inherit(K.bQ,t)
inherit(S.bB,t)
inherit(T.c_,t)
inherit(M.br,t)
inherit(A.ns,A.jz)
inherit(L.aS,A.ns)
t=O.c9
inherit(O.dp,t)
inherit(O.ik,t)
inherit(O.eF,t)
t=O.dp
inherit(U.kx,t)
inherit(Y.nO,t)
inherit(V.lU,t)
inherit(Q.ma,t)
inherit(Q.nz,t)
inherit(M.oe,t)
inherit(B.pw,t)
t=U.kx
inherit(U.mW,t)
inherit(U.nn,t)
inherit(U.oB,O.ik)
t=U.oB
inherit(U.oC,t)
inherit(U.oD,t)
t=T.hI
inherit(O.kz,t)
inherit(Y.lZ,t)
inherit(Y.m_,t)
inherit(B.m1,t)
inherit(S.mD,t)
inherit(Z.mV,t)
inherit(S.mX,t)
inherit(U.mY,t)
inherit(E.n5,t)
inherit(V.nr,t)
inherit(N.nI,t)
inherit(N.nS,t)
inherit(E.nW,t)
inherit(Y.nY,t)
inherit(L.nZ,t)
inherit(S.o1,t)
inherit(Y.o8,t)
inherit(R.oI,t)
inherit(U.oU,t)
inherit(E.pi,t)
inherit(M.pm,t)
t=O.eF
inherit(Y.oP,t)
inherit(Y.kJ,t)
inherit(Y.nj,t)
inherit(U.pn,t)
t=L.fI
inherit(T.kE,t)
inherit(T.kH,t)
inherit(U.l9,t)
inherit(Z.la,t)
inherit(T.m0,t)
inherit(X.m3,t)
inherit(V.md,t)
inherit(Q.mE,t)
inherit(K.mG,t)
inherit(G.mH,t)
inherit(V.n4,t)
inherit(E.nN,t)
inherit(K.nX,t)
inherit(N.oa,t)
inherit(N.oV,t)
inherit(Q.ph,t)
t=S.bB
inherit(S.i7,t)
inherit(S.m4,t)
inherit(E.iz,E.nm)
t=E.N
inherit(E.fJ,t)
inherit(E.ks,t)
inherit(Q.nC,Q.ma)
inherit(U.Q,U.b)
t=R.nJ
inherit(R.Z,t)
inherit(R.M,t)
inherit(R.a3,t)
inherit(R.bE,R.a3)
t=Y.dR
inherit(Y.a6,t)
inherit(Y.bV,t)
inherit(Y.P,t)
inherit(Y.i9,t)
inherit(Y.bD,t)
inherit(Y.cZ,t)
inherit(Y.kM,t)
inherit(Y.hF,t)
inherit(Y.ix,t)
inherit(Y.jB,t)
t=Y.bV
inherit(Y.dd,t)
inherit(Y.bC,t)
inherit(U.ae,A.a4)
t=G.a0
inherit(G.aJ,t)
inherit(G.bI,t)
inherit(G.d,t)
inherit(G.ad,G.bI)
t=D.ck
inherit(D.jU,t)
inherit(D.nQ,t)
t=Q.cT
inherit(Q.hQ,t)
inherit(Q.hP,t)
inherit(Q.dW,Q.hQ)
inherit(B.jT,Q.dW)
t=S.fl
inherit(S.u8,t)
inherit(S.kK,t)
inherit(S.mI,t)
inherit(S.tN,t)
inherit(S.t2,t)
t=S.kK
inherit(S.u0,t)
inherit(S.tW,t)
t=S.mI
inherit(S.rJ,t)
inherit(S.rA,t)
t=S.l1
inherit(S.tI,t)
inherit(S.l2,t)
inherit(S.nu,S.l2)
inherit(S.uc,S.nu)
t=S.kI
inherit(S.u1,t)
inherit(S.ud,t)
t=S.lY
inherit(S.uh,t)
inherit(S.u2,t)
inherit(S.rP,t)
inherit(S.ue,t)
t=S.oT
inherit(S.uj,t)
inherit(S.rG,t)
inherit(S.ur,t)
t=S.hv
inherit(S.tO,t)
inherit(S.tQ,t)
inherit(S.u9,t)
inherit(Q.eM,Q.hP)
inherit(Q.jQ,Q.eM)
mixin(H.hO,H.p4)
mixin(H.hA,P.aR)
mixin(H.hC,H.iw)
mixin(H.hB,P.aR)
mixin(H.hD,H.iw)
mixin(P.hE,P.aR)
mixin(P.eJ,P.qI)
mixin(W.h_,P.aR)
mixin(W.h2,W.bu)
mixin(W.iC,W.ia)
mixin(W.jy,W.ia)
mixin(W.iD,P.aR)
mixin(W.iX,W.bu)
mixin(W.iE,P.aR)
mixin(W.iY,W.bu)
mixin(W.iF,P.aR)
mixin(W.iZ,W.bu)
mixin(W.iP,P.aR)
mixin(W.j8,W.bu)
mixin(W.iQ,P.aR)
mixin(W.j9,W.bu)
mixin(W.iR,P.aR)
mixin(W.ja,W.bu)
mixin(W.h0,P.aR)
mixin(W.h3,W.bu)
mixin(W.iS,P.aR)
mixin(W.jb,W.bu)
mixin(W.iT,P.aR)
mixin(W.jc,W.bu)
mixin(W.h1,P.aR)
mixin(W.h4,W.bu)
mixin(W.iU,P.aR)
mixin(W.jd,W.bu)
mixin(W.iV,P.aR)
mixin(W.je,W.bu)
mixin(W.iW,P.aR)
mixin(W.jf,W.bu)
mixin(W.iG,P.aR)
mixin(W.j_,W.bu)
mixin(W.iH,P.aR)
mixin(W.j0,W.bu)
mixin(W.iI,P.aR)
mixin(W.j1,W.bu)
mixin(W.iJ,P.aR)
mixin(W.j2,W.bu)
mixin(P.iK,P.aR)
mixin(P.j3,W.bu)
mixin(P.iL,P.aR)
mixin(P.j4,W.bu)
mixin(P.iM,P.aR)
mixin(P.j5,W.bu)
mixin(P.iN,P.aR)
mixin(P.j6,W.bu)
mixin(P.iO,P.aR)
mixin(P.j7,W.bu)
mixin(A.jz,P.ff)
mixin(Q.hQ,P.aR)
mixin(Q.hP,P.ff)})();(function constants(){C.L=W.e7.prototype
C.M=J.f.prototype
C.b=J.es.prototype
C.f=J.jn.prototype
C.a=J.jo.prototype
C.d=J.fg.prototype
C.c=J.et.prototype
C.T=J.eu.prototype
C.r=H.fj.prototype
C.F=J.nB.prototype
C.t=J.eI.prototype
C.H=new P.kB(!1)
C.G=new P.kA(C.H)
C.i=new W.i8()
C.I=new P.no()
C.J=new P.pM()
C.K=new P.qg()
C.e=new P.qr()
C.p=new W.qH()
C.q=new P.dJ(0)
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
C.j=makeConstList([0,0,32776,33792,1,10240,0,0])
C.k=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.l=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
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
C.h=new F.hs(0,"LogLevel.ERROR")
C.m=new F.hs(1,"LogLevel.WARN")
C.Z=new F.hs(3,"LogLevel.VERBOSE")
C.X=H.a(makeConstList([]),[P.B])
C.a_=new H.fT(0,{},C.X,[P.B,P.B])
C.a0=H.c0("bg")
C.a1=H.c0("Hj")
C.n=H.c0("Hk")
C.a2=H.c0("Hl")
C.a3=H.c0("Hm")
C.a4=H.c0("Ho")
C.a5=H.c0("Hp")
C.a6=H.c0("Hq")
C.a7=H.c0("mx")
C.a8=H.c0("d3")
C.a9=H.c0("B")
C.aa=H.c0("Hu")
C.ab=H.c0("Hv")
C.ac=H.c0("Hw")
C.ad=H.c0("d8")
C.ae=H.c0("d9")
C.af=H.c0("W")
C.ag=H.c0("C")
C.ah=H.c0("dn")
C.o=new P.pc(!1)})();(function staticFields(){$.wo="$cachedFunction"
$.wp="$cachedInvocation"
$.dI=0
$.fN=null
$.uX=null
$.uE=null
$.xk=null
$.xw=null
$.r8=null
$.rf=null
$.uF=null
$.fz=null
$.i1=null
$.i2=null
$.uA=!1
$.an=C.e
$.vd=0
$.v9=null
$.v8=null
$.v7=null
$.va=null
$.v6=null
$.yh=null
$.yi=null
$.y4=null
$.y5=null
$.y3=null
$.y7=null
$.yd=null
$.yc=null
$.yj=null
$.yf=null
$.y8=null
$.yb=null
$.y6=null
$.ya=null
$.yg=null
$.y9=null
$.ye=null
$.b0="accent"
$.b2="aspect1"
$.b1="aspect2"
$.bb="shoe1"
$.ba="shoe2"
$.b4="cloak1"
$.b5="cloak2"
$.b3="cloak3"
$.b9="shirt1"
$.b8="shirt2"
$.b7="pants1"
$.b6="pants2"
$.aj=1300
$.j=3
$.n=2
$.H=1
$.y=0.1
$.e5=1
$.cO=-1
$.rY=null
$.e3=null
$.vf=null
$.el=null
$.f6=null
$.h7=null
$.rS=null
$.lG=null
$.t_=null
$.ip=null
$.io=null
$.vi=null
$.iv=null
$.f3=null
$.dM=null
$.vh=null
$.lE=null
$.lL=null
$.eo=null
$.yV=null
$.yS=null
$.yU=null
$.vg=null
$.yW=null
$.hc=null
$.f1=null
$.co=null
$.cV=null
$.en=null
$.lK=null
$.c8=null
$.c3=null
$.rU=null
$.iu=null
$.ek=null
$.yT=null
$.f4=null
$.cN=null
$.e4=null
$.ha=null
$.df=null
$.f5=null
$.c2=null
$.lI=null
$.ve=null
$.aM=null
$.cA=null
$.cU=null
$.ce=null
$.it=null
$.c4=null
$.ds=null
$.dg=null
$.f2=null
$.dK=null
$.dh=null
$.lF=null
$.du=null
$.hb=null
$.lH=null
$.lD=null
$.cM=null
$.cz=null
$.bc=null
$.ej=null
$.em=null
$.lJ=null
$.iq=null
$.h9=null
$.rW=null
$.cn=null
$.rZ=null
$.rT=null
$.vk=null
$.h8=null
$.cC=null
$.dL=null
$.dt=null
$.f7=null
$.rV=null
$.rX=null
$.vj=null
$.ir=null
$.is=null
$.ep=null
$.vl=!1
$.t1=null
$.yX=null
$.vn=null
$.vp=null
$.z5=null
$.vo=null
$.z3=null
$.z4=null
$.t0=null
$.z0=null
$.yZ=null
$.z_=null
$.z1=null
$.z2=null
$.zf=null
$.z8=null
$.z9=null
$.za=null
$.zb=null
$.zc=null
$.zd=null
$.ze=null
$.zh=null
$.zi=null
$.zj=null
$.zk=null
$.zl=null
$.zm=null
$.zg=null
$.wh="JACK"
$.EI="PM"
$.EE="JS"
$.ED="HP"
$.EN="YD"
$.EK="SI"
$.EL="SU"
$.EF="ME"
$.EJ="RB"
$.EB="GN"
$.EG="MP"
$.Ez="AR"
$.EH="PE"
$.EA="DP"
$.EM="WV"
$.EC="HB"
$.m="PLAYER1TAG"
$.dx="PLAYER2TAG"
$.x="DENIZENTAG"
$.r="CONSORTTAG"
$.L="CONSORTSOUNDTAG"
$.au="MCGUFFINTAG"
$.aa="TAGPHYSICALMCGUFFIN"
$.bq="TAGWEAPON"
$.Fp=null
$.FB=null
$.Fl=null
$.Fo=null
$.Fs=null
$.Fx=null
$.Fv=null
$.FE=null
$.FD=null
$.Fw=null
$.FG=null
$.Fr=null
$.FF=null
$.Fz=null
$.Fy=null
$.FA=null
$.Fn=null
$.Fm=null
$.Fu=null
$.Ft=null
$.Fq=null
$.FC=null
$.xp=!1
$.GN=!1
$.FH=!1
$.wv=null
$.wj=!1
$.FP=13
$.aq=3
$.bL=2
$.aA=1
$.ms=0
$.I=1
$.a2=3
$.G=4
$.tv=6
$.tw=7
$.a9=8
$.u=9
$.q=10
$.vI=null
$.er=null
$.ml=null
$.tr=null
$.tl=null
$.vy=null
$.tb=null
$.tk=null
$.hk=null
$.vG=null
$.w2=null
$.vB=null
$.vH=null
$.tc=null
$.tj=null
$.tt=null
$.w5=null
$.t8=null
$.ji=null
$.jg=null
$.aC=null
$.vW=null
$.t7=null
$.vR=null
$.fe=null
$.vA=null
$.w6=null
$.w3=null
$.w1=null
$.th=null
$.mk=null
$.fc=null
$.w4=null
$.mi=null
$.te=null
$.hj=null
$.w_=null
$.dN=null
$.eq=null
$.tu=null
$.w0=null
$.ts=null
$.tp=null
$.tq=null
$.mo=null
$.jh=null
$.zN=null
$.vK=null
$.vQ=null
$.vZ=null
$.vY=null
$.tm=null
$.D=null
$.vF=null
$.mj=null
$.bS=null
$.aX=null
$.bT=null
$.X=null
$.aE=null
$.cb=null
$.K=null
$.O=null
$.at=null
$.aO=null
$.bW=null
$.bi=null
$.bm=null
$.cg=null
$.aQ=null
$.bp=null
$.bY=null
$.a_=null
$.Ea=null
$.ar=null
$.aW=null
$.aL=null
$.ag=null
$.ca=null
$.aK=null
$.ap=null
$.bX=null
$.aP=null
$.ak=null
$.bh=null
$.c5=null
$.aD=null
$.bn=null
$.bl=null
$.a7=null
$.bP=null
$.a8=null
$.bd=null
$.bo=null
$.aI=null
$.aV=null
$.av=null
$.aY=null
$.aF=null
$.Y=null
$.as=null
$.az=null
$.aT=null
$.ao=null
$.am=null
$.a1=null
$.S=null
$.T=null
$.ah=null
$.aN=null
$.bj=null
$.aU=null
$.B6=null
$.DN=null
$.El=null
$.AC=null
$.DK=null
$.B7=null
$.vw=null
$.DZ=null
$.C7=null
$.B2=null
$.zH=null
$.CI=null
$.tn=null
$.vC=null
$.D7=null
$.Az=null
$.BR=null
$.Ax=null
$.t9=null
$.Ai=null
$.Bj=null
$.AH=null
$.C0=null
$.E6=null
$.B8=null
$.ta=null
$.C1=null
$.AF=null
$.Ao=null
$.vV=null
$.zA=null
$.vx=null
$.BK=null
$.mm=null
$.Cm=null
$.Cg=null
$.zE=null
$.Ar=null
$.Dg=null
$.zG=null
$.DJ=null
$.BQ=null
$.AO=null
$.D1=null
$.DD=null
$.tg=null
$.Cb=null
$.CZ=null
$.AG=null
$.zt=null
$.E9=null
$.BU=null
$.An=null
$.DY=null
$.Cp=null
$.Au=null
$.DI=null
$.AY=null
$.Do=null
$.Dp=null
$.zC=null
$.Ci=null
$.AI=null
$.AS=null
$.Ep=null
$.mq=null
$.Df=null
$.DG=null
$.mn=null
$.Ac=null
$.Cz=null
$.CD=null
$.zz=null
$.AX=null
$.DH=null
$.Co=null
$.E0=null
$.D3=null
$.CE=null
$.vP=null
$.Ds=null
$.Ef=null
$.DM=null
$.Bx=null
$.CQ=null
$.By=null
$.Dh=null
$.Ed=null
$.C_=null
$.AU=null
$.Bg=null
$.A2=null
$.D_=null
$.Be=null
$.Bl=null
$.AK=null
$.Dr=null
$.fd=null
$.Ct=null
$.vN=null
$.Bz=null
$.Bw=null
$.Ei=null
$.A8=null
$.Dd=null
$.De=null
$.Dc=null
$.Db=null
$.Dz=null
$.Bm=null
$.Cj=null
$.DC=null
$.Ca=null
$.Cu=null
$.AD=null
$.Ec=null
$.Ch=null
$.B_=null
$.B0=null
$.CC=null
$.Eo=null
$.BO=null
$.Eb=null
$.vT=null
$.Dn=null
$.BY=null
$.to=null
$.BI=null
$.CS=null
$.A7=null
$.B3=null
$.Dj=null
$.Ck=null
$.E5=null
$.vS=null
$.Cs=null
$.Ae=null
$.AA=null
$.CO=null
$.DT=null
$.Di=null
$.t6=null
$.vX=null
$.Du=null
$.Ee=null
$.Bv=null
$.zR=null
$.A_=null
$.DR=null
$.Cw=null
$.C8=null
$.Cx=null
$.DO=null
$.BJ=null
$.zD=null
$.Bk=null
$.C6=null
$.Dw=null
$.Bd=null
$.A6=null
$.D9=null
$.Da=null
$.E3=null
$.Dl=null
$.ti=null
$.vD=null
$.Av=null
$.td=null
$.BD=null
$.vO=null
$.CU=null
$.Cf=null
$.D5=null
$.tf=null
$.mp=null
$.vM=null
$.vE=null
$.AQ=null
$.Bi=null
$.vU=null
$.vJ=null
$.Aq=null
$.DV=null
$.Aj=null
$.CG=null
$.BA=null
$.DB=null
$.C9=null
$.zO=null
$.BB=null
$.AN=null
$.CK=null
$.BT=null
$.Ce=null
$.BZ=null
$.C2=null
$.D8=null
$.D4=null
$.zw=null
$.DS=null
$.CX=null
$.AE=null
$.AJ=null
$.Bh=null
$.DP=null
$.Ba=null
$.BV=null
$.zV=null
$.B4=null
$.AM=null
$.Cy=null
$.AV=null
$.jj=null
$.BX=null
$.vz=null
$.CT=null
$.BC=null
$.Bb=null
$.zu=null
$.zB=null
$.Cv=null
$.CF=null
$.BS=null
$.Bt=null
$.E8=null
$.zY=null
$.Bc=null
$.BW=null
$.AB=null
$.Dy=null
$.Ap=null
$.Dk=null
$.zW=null
$.DU=null
$.C4=null
$.zQ=null
$.D2=null
$.CP=null
$.Aw=null
$.Bn=null
$.Ad=null
$.DQ=null
$.BG=null
$.E4=null
$.Af=null
$.Bo=null
$.Ag=null
$.Ay=null
$.CW=null
$.As=null
$.BH=null
$.Cl=null
$.A9=null
$.DA=null
$.Ek=null
$.Dq=null
$.Cc=null
$.Dx=null
$.Cd=null
$.zJ=null
$.zv=null
$.C5=null
$.zT=null
$.Ah=null
$.zK=null
$.zP=null
$.Cr=null
$.CL=null
$.DX=null
$.BE=null
$.Ej=null
$.D0=null
$.CY=null
$.BL=null
$.BF=null
$.Al=null
$.Br=null
$.C3=null
$.CA=null
$.Dt=null
$.zy=null
$.Eg=null
$.AT=null
$.DE=null
$.AL=null
$.zI=null
$.Aa=null
$.A1=null
$.En=null
$.Ab=null
$.AW=null
$.Ak=null
$.E2=null
$.Dv=null
$.DW=null
$.zx=null
$.D6=null
$.BM=null
$.BP=null
$.E7=null
$.DF=null
$.vL=null
$.B1=null
$.CN=null
$.Eh=null
$.B5=null
$.BN=null
$.A5=null
$.Bu=null
$.Bs=null
$.Dm=null
$.CM=null
$.Bp=null
$.A0=null
$.DL=null
$.CB=null
$.E_=null
$.Em=null
$.zM=null
$.zL=null
$.zX=null
$.AZ=null
$.CV=null
$.At=null
$.CR=null
$.AP=null
$.zF=null
$.zZ=null
$.Cq=null
$.AR=null
$.CJ=null
$.A4=null
$.B9=null
$.E1=null
$.zS=null
$.Bf=null
$.CH=null
$.A3=null
$.Bq=null
$.Cn=null
$.zU=null
$.Am=null
$.wW=4
$.e6="OWNER"
$.wd=!1
$.tM=null
$.xy=""
$.wx=null
$.FL=null
$.hM=null
$.eD=null
$.FK=null
$.eE=null
$.ea=null
$.d6=null
$.eC=null
$.hK=null
$.hL=null
$.dz=null
$.cu=null
$.wy=!1
$.FM=null})();(function lazyInitializers(){lazy($,"v4","$get$v4",function(){return H.xs("_$dart_dartClosure")})
lazy($,"tF","$get$tF",function(){return H.xs("_$dart_js")})
lazy($,"vu","$get$vu",function(){return H.zr()})
lazy($,"vv","$get$vv",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vd
$.vd=t+1
t="expando$key$"+t}return new P.ll(null,t,[P.C])})
lazy($,"wC","$get$wC",function(){return H.dU(H.p2({
toString:function(){return"$receiver$"}}))})
lazy($,"wD","$get$wD",function(){return H.dU(H.p2({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"wE","$get$wE",function(){return H.dU(H.p2(null))})
lazy($,"wF","$get$wF",function(){return H.dU(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wJ","$get$wJ",function(){return H.dU(H.p2(void 0))})
lazy($,"wK","$get$wK",function(){return H.dU(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wH","$get$wH",function(){return H.dU(H.wI(null))})
lazy($,"wG","$get$wG",function(){return H.dU(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"wM","$get$wM",function(){return H.dU(H.wI(void 0))})
lazy($,"wL","$get$wL",function(){return H.dU(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uw","$get$uw",function(){return P.FV()})
lazy($,"he","$get$he",function(){return P.G0(null,P.d3)})
lazy($,"i3","$get$i3",function(){return[]})
lazy($,"wY","$get$wY",function(){return H.EO([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xi","$get$xi",function(){return P.Gp()})
lazy($,"v3","$get$v3",function(){return P.dy("^\\S+$",!0,!1)})
lazy($,"c7","$get$c7",function(){return H.a([],[K.bQ])})
lazy($,"kr","$get$kr",function(){return P.cE(P.C,L.fI)})
lazy($,"uZ","$get$uZ",function(){return P.dy("[\\/]",!0,!1)})
lazy($,"bM","$get$bM",function(){return H.a([],[S.bB])})
lazy($,"lV","$get$lV",function(){return P.cE(P.B,Z.il)})
lazy($,"mf","$get$mf",function(){return P.cE(P.C,B.hi)})
lazy($,"w7","$get$w7",function(){return H.a([],[A.a4])})
lazy($,"wi","$get$wi",function(){return H.a([],[P.B])})
lazy($,"nV","$get$nV",function(){return P.cE(P.C,T.hI)})
lazy($,"ci","$get$ci",function(){return H.a([],[T.c_])})
lazy($,"bK","$get$bK",function(){return H.a([],[M.br])})
lazy($,"ai","$get$ai",function(){return H.a([],[U.ae])})
lazy($,"ww","$get$ww",function(){return P.wb([0,new K.cF("Pixels -> Bytes",T.GF(),T.GE()),1,new K.cF("Pixels -> Packed bits",T.GD(),T.GC()),2,new K.cF("RLE 1 byte",V.rN(1),V.rM(1)),3,new K.cF("RLE 2 bytes",V.rN(2),V.rM(2)),4,new K.cF("RLE 3 bytes",V.rN(3),V.rM(3)),5,new K.cF("RLE packed 1 byte",V.rL(1),V.rK(1)),6,new K.cF("RLE packed 2 bytes",V.rL(2),V.rK(2)),7,new K.cF("RLE packed 3 bytes",V.rL(3),V.rK(3)),8,new K.cF("RLE dynamic",V.Hb(),V.Ha()),9,new K.cF("Exponential-Golomb pixels",F.GT(),F.GS()),10,new K.cF("Exponential-Golomb run RLE",F.GR(),F.GQ()),11,new K.cF("Exponential-Golomb run/data RLE",F.GP(),F.GO())],P.C,K.cF)})
lazy($,"c","$get$c",function(){return P.a5(null,null,null,G.a0)})
lazy($,"wU","$get$wU",function(){return P.dy("[\n\r]+",!0,!1)})
lazy($,"wV","$get$wV",function(){return P.dy("( *)(.*)",!0,!1)})
lazy($,"wT","$get$wT",function(){return P.dy("^s*//",!0,!1)})
lazy($,"wS","$get$wS",function(){return P.dy("//",!0,!1)})
lazy($,"cI","$get$cI",function(){return new F.ht(!1,!1,"WordListFileFormat")})
lazy($,"wX","$get$wX",function(){return new T.ps(null)})
lazy($,"uV","$get$uV",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cW","$get$cW",function(){return P.cE(P.B,Y.dQ)})
lazy($,"we","$get$we",function(){return P.dy("[\\/]",!0,!1)})
lazy($,"tL","$get$tL",function(){return P.cE(P.B,W.fp)})
lazy($,"tX","$get$tX",function(){return A.fS(255,0,255,255)})
lazy($,"nx","$get$nx",function(){return new F.ht(!1,!1,"Path Utils")})
lazy($,"nw","$get$nw",function(){return P.cE(P.eK,P.C)})
lazy($,"cG","$get$cG",function(){return H.a([],[D.ck])})
lazy($,"hN","$get$hN",function(){return P.dy("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fr","$get$fr",function(){return P.dy("\\\\(?!\\\\)",!0,!1)})
lazy($,"v5","$get$v5",function(){var t={color:16711935}
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
mangledGlobalNames:{C:"int",W:"double",dn:"num",B:"String",d9:"bool",d3:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.d9,args:[[P.p,E.iz]]},{func:1,v:true},{func:1,ret:P.d8,args:[P.bg,P.C,P.C,O.cX]},{func:1,ret:P.bg,args:[P.C,P.bg,P.bg,O.cX]},{func:1,v:true,args:[P.ac]},{func:1,ret:P.B,args:[P.C]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.ax,args:[P.C]},{func:1,ret:P.B,args:[P.B]},{func:1,ret:W.dr,args:[P.C]},{func:1,ret:W.cr,args:[P.C]},{func:1,args:[,]},{func:1,v:true,args:[P.ac],opt:[P.dS]},{func:1,ret:W.cf,args:[P.C]},{func:1,v:true,args:[,P.dS]},{func:1,ret:W.ch,args:[P.C]},{func:1,ret:W.cs,args:[P.C]},{func:1,ret:W.ct,args:[P.C]},{func:1,ret:W.fq,args:[P.C]},{func:1,ret:W.cv,args:[P.C]},{func:1,ret:W.fs,args:[P.C]},{func:1,ret:W.ft,args:[P.C]},{func:1,ret:P.bU,args:[P.C]},{func:1,ret:P.B,args:[P.dw]},{func:1,ret:W.cp,args:[P.C]},{func:1,ret:W.fu,args:[P.C]},{func:1,ret:W.cj,args:[P.C]},{func:1,ret:W.cl,args:[P.C]},{func:1,ret:P.be,args:[P.C]},{func:1,ret:P.d9,args:[P.ac]},{func:1,ret:P.C,args:[P.bH,P.bH]},{func:1,v:true,args:[P.B]},{func:1,ret:W.f0,args:[P.C]},{func:1,ret:W.bN,args:[P.C]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CacheStorage:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CanvasRenderingContext2D:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,Clients:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,CredentialsContainer:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceAcceleration:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,DOMPoint:J.f,DOMPointReadOnly:J.f,EffectModel:J.f,Stream:J.f,FormData:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NodeIterator:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,Range:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCSessionDescription:J.f,mozRTCSessionDescription:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,StylePropertyMap:J.f,SyncManager:J.f,TextMetrics:J.f,TreeWalker:J.f,UnderlyingSourceBase:J.f,URLSearchParams:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPoint:J.f,SVGPreserveAspectRatio:J.f,SVGRect:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLRenderingContext:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fi,ArrayBufferView:H.ey,DataView:H.n8,Float32Array:H.n9,Float64Array:H.na,Int16Array:H.nb,Int32Array:H.nc,Int8Array:H.nd,Uint16Array:H.ne,Uint32Array:H.nf,Uint8ClampedArray:H.jv,CanvasPixelArray:H.jv,Uint8Array:H.fj,HTMLBRElement:W.al,HTMLCanvasElement:W.al,HTMLContentElement:W.al,HTMLDListElement:W.al,HTMLDataListElement:W.al,HTMLDetailsElement:W.al,HTMLDialogElement:W.al,HTMLDivElement:W.al,HTMLHRElement:W.al,HTMLHeadElement:W.al,HTMLHeadingElement:W.al,HTMLHtmlElement:W.al,HTMLLIElement:W.al,HTMLLabelElement:W.al,HTMLLegendElement:W.al,HTMLMenuElement:W.al,HTMLMenuItemElement:W.al,HTMLMeterElement:W.al,HTMLModElement:W.al,HTMLOListElement:W.al,HTMLOptGroupElement:W.al,HTMLOptionElement:W.al,HTMLParagraphElement:W.al,HTMLPictureElement:W.al,HTMLPreElement:W.al,HTMLProgressElement:W.al,HTMLQuoteElement:W.al,HTMLShadowElement:W.al,HTMLSourceElement:W.al,HTMLStyleElement:W.al,HTMLTableCaptionElement:W.al,HTMLTableCellElement:W.al,HTMLTableDataCellElement:W.al,HTMLTableHeaderCellElement:W.al,HTMLTableColElement:W.al,HTMLTableElement:W.al,HTMLTableRowElement:W.al,HTMLTableSectionElement:W.al,HTMLTitleElement:W.al,HTMLTrackElement:W.al,HTMLUListElement:W.al,HTMLUnknownElement:W.al,HTMLDirectoryElement:W.al,HTMLFontElement:W.al,HTMLFrameElement:W.al,HTMLMarqueeElement:W.al,HTMLElement:W.al,HTMLAnchorElement:W.eT,HTMLAreaElement:W.kq,HTMLAudioElement:W.eW,AudioTrack:W.cL,AudioTrackList:W.ky,HTMLBaseElement:W.kC,Blob:W.eX,HTMLBodyElement:W.kF,HTMLButtonElement:W.fQ,CDATASection:W.eg,CharacterData:W.eg,Comment:W.eg,ProcessingInstruction:W.eg,Text:W.eg,CompositorWorker:W.kP,Credential:W.fV,FederatedCredential:W.fV,PasswordCredential:W.fV,CSSFontFaceRule:W.kW,CSSImportRule:W.kX,CSSKeyframeRule:W.fW,MozCSSKeyframeRule:W.fW,WebKitCSSKeyframeRule:W.fW,CSSKeyframesRule:W.fX,MozCSSKeyframesRule:W.fX,WebKitCSSKeyframesRule:W.fX,CSSPageRule:W.kY,CSSCharsetRule:W.bN,CSSGroupingRule:W.bN,CSSMediaRule:W.bN,CSSNamespaceRule:W.bN,CSSSupportsRule:W.bN,CSSRule:W.bN,CSSStyleDeclaration:W.f_,MSStyleCSSProperties:W.f_,CSS2Properties:W.f_,CSSStyleRule:W.kZ,CSSViewportRule:W.l_,DataTransfer:W.l4,DataTransferItem:W.f0,DataTransferItemList:W.ib,Document:W.eh,HTMLDocument:W.eh,XMLDocument:W.eh,DocumentFragment:W.id,ShadowRoot:W.id,DOMError:W.ie,FileError:W.ie,DOMException:W.l7,DOMRectReadOnly:W.ig,DOMStringList:W.ih,DOMStringMap:W.ii,DOMTokenList:W.ij,Element:W.dr,HTMLEmbedElement:W.ld,DirectoryEntry:W.fZ,Entry:W.fZ,FileEntry:W.fZ,ErrorEvent:W.lj,AnimationEvent:W.R,AnimationPlayerEvent:W.R,ApplicationCacheErrorEvent:W.R,AutocompleteErrorEvent:W.R,BeforeInstallPromptEvent:W.R,BeforeUnloadEvent:W.R,BlobEvent:W.R,ClipboardEvent:W.R,CloseEvent:W.R,CompositionEvent:W.R,CustomEvent:W.R,DeviceLightEvent:W.R,DeviceMotionEvent:W.R,DeviceOrientationEvent:W.R,ExtendableEvent:W.R,ExtendableMessageEvent:W.R,FetchEvent:W.R,FocusEvent:W.R,FontFaceSetLoadEvent:W.R,GamepadEvent:W.R,GeofencingEvent:W.R,HashChangeEvent:W.R,InstallEvent:W.R,KeyboardEvent:W.R,MediaEncryptedEvent:W.R,MediaKeyMessageEvent:W.R,MediaQueryListEvent:W.R,MediaStreamEvent:W.R,MediaStreamTrackEvent:W.R,MessageEvent:W.R,MIDIConnectionEvent:W.R,MIDIMessageEvent:W.R,MouseEvent:W.R,DragEvent:W.R,NotificationEvent:W.R,PageTransitionEvent:W.R,PointerEvent:W.R,PopStateEvent:W.R,PresentationConnectionAvailableEvent:W.R,PresentationConnectionCloseEvent:W.R,ProgressEvent:W.R,PromiseRejectionEvent:W.R,PushEvent:W.R,RelatedEvent:W.R,RTCDataChannelEvent:W.R,RTCDTMFToneChangeEvent:W.R,RTCIceCandidateEvent:W.R,RTCPeerConnectionIceEvent:W.R,SecurityPolicyViolationEvent:W.R,ServicePortConnectEvent:W.R,ServiceWorkerMessageEvent:W.R,SpeechRecognitionEvent:W.R,StorageEvent:W.R,SyncEvent:W.R,TextEvent:W.R,TouchEvent:W.R,TrackEvent:W.R,TransitionEvent:W.R,WebKitTransitionEvent:W.R,UIEvent:W.R,WheelEvent:W.R,ResourceProgressEvent:W.R,USBConnectionEvent:W.R,IDBVersionChangeEvent:W.R,SVGZoomEvent:W.R,AudioProcessingEvent:W.R,OfflineAudioCompletionEvent:W.R,WebGLContextEvent:W.R,Event:W.R,InputEvent:W.R,Animation:W.aH,ApplicationCache:W.aH,DOMApplicationCache:W.aH,OfflineResourceList:W.aH,BatteryManager:W.aH,CanvasCaptureMediaStreamTrack:W.aH,CrossOriginServiceWorkerClient:W.aH,EventSource:W.aH,MediaKeySession:W.aH,MediaQueryList:W.aH,MediaRecorder:W.aH,MediaSource:W.aH,MediaStream:W.aH,MediaStreamTrack:W.aH,MessagePort:W.aH,MIDIAccess:W.aH,NetworkInformation:W.aH,Notification:W.aH,Performance:W.aH,PermissionStatus:W.aH,PresentationAvailability:W.aH,PresentationReceiver:W.aH,PresentationRequest:W.aH,RTCDTMFSender:W.aH,RTCPeerConnection:W.aH,webkitRTCPeerConnection:W.aH,mozRTCPeerConnection:W.aH,ScreenOrientation:W.aH,ServicePortCollection:W.aH,ServiceWorkerContainer:W.aH,ServiceWorkerRegistration:W.aH,SpeechRecognition:W.aH,SpeechSynthesis:W.aH,SpeechSynthesisUtterance:W.aH,WorkerPerformance:W.aH,BluetoothDevice:W.aH,BluetoothRemoteGATTCharacteristic:W.aH,USB:W.aH,EventTarget:W.aH,HTMLFieldSetElement:W.lM,File:W.cf,FileList:W.f8,FileReader:W.lN,DOMFileSystem:W.lO,FileWriter:W.lP,FontFace:W.lS,FontFaceSet:W.lT,HTMLFormElement:W.iy,Gamepad:W.cp,History:W.m2,HTMLOptionsCollection:W.f9,HTMLCollection:W.f9,HTMLFormControlsCollection:W.iA,XMLHttpRequest:W.e7,XMLHttpRequestUpload:W.hf,XMLHttpRequestEventTarget:W.hf,HTMLIFrameElement:W.m8,ImageData:W.hg,HTMLImageElement:W.fb,HTMLInputElement:W.me,HTMLKeygenElement:W.mC,CalcLength:W.ho,LengthValue:W.ho,SimpleLength:W.ho,HTMLLinkElement:W.hp,Location:W.mU,HTMLMapElement:W.mZ,HTMLVideoElement:W.hw,HTMLMediaElement:W.hw,MediaList:W.js,HTMLMetaElement:W.n2,MIDIOutput:W.n3,MIDIInput:W.hx,MIDIPort:W.hx,MimeType:W.cr,MimeTypeArray:W.jt,Navigator:W.ng,NavigatorUserMediaError:W.nh,Node:W.ax,NodeList:W.jw,RadioNodeList:W.jw,HTMLObjectElement:W.nk,HTMLOutputElement:W.np,HTMLParamElement:W.nt,Path2D:W.nv,PerformanceCompositeTiming:W.e8,PerformanceEntry:W.e8,PerformanceMark:W.e8,PerformanceMeasure:W.e8,PerformanceRenderTiming:W.e8,PerformanceResourceTiming:W.e8,Perspective:W.nA,Plugin:W.ch,PluginArray:W.jC,PresentationConnection:W.nF,RTCDataChannel:W.jF,DataChannel:W.jF,HTMLScriptElement:W.fp,HTMLSelectElement:W.jG,ServicePort:W.o2,SharedWorker:W.o5,SharedWorkerGlobalScope:W.o6,HTMLSlotElement:W.o7,SourceBuffer:W.cs,SourceBufferList:W.jI,HTMLSpanElement:W.hJ,SpeechGrammar:W.ct,SpeechGrammarList:W.jJ,SpeechRecognitionAlternative:W.fq,SpeechRecognitionError:W.ob,SpeechRecognitionResult:W.cj,SpeechSynthesisEvent:W.oc,SpeechSynthesisVoice:W.od,Storage:W.oj,CSSStyleSheet:W.cl,StyleSheet:W.cl,KeywordValue:W.eb,NumberValue:W.eb,PositionValue:W.eb,TransformValue:W.eb,StyleValue:W.eb,HTMLTemplateElement:W.oM,HTMLTextAreaElement:W.oO,TextTrack:W.cS,TextTrackCue:W.cH,VTTCue:W.cH,TextTrackCueList:W.oR,TextTrackList:W.oS,TimeRanges:W.oW,Touch:W.cv,TouchList:W.jN,TrackDefault:W.fs,TrackDefaultList:W.jO,Matrix:W.ec,Rotation:W.ec,Skew:W.ec,Translation:W.ec,TransformComponent:W.ec,URL:W.pa,VideoTrackList:W.pe,VTTRegion:W.ft,VTTRegionList:W.jP,WebSocket:W.pj,Window:W.jS,DOMWindow:W.jS,Worker:W.pq,CompositorWorkerGlobalScope:W.eL,DedicatedWorkerGlobalScope:W.eL,ServiceWorkerGlobalScope:W.eL,WorkerGlobalScope:W.eL,Attr:W.fu,ClientRect:W.pH,ClientRectList:W.hT,DOMRectList:W.hT,CSSRuleList:W.jZ,DocumentType:W.pO,DOMRect:W.pP,GamepadList:W.k2,HTMLFrameSetElement:W.q9,NamedNodeMap:W.hZ,MozNamedAttrMap:W.hZ,ServiceWorker:W.qy,SpeechRecognitionResultList:W.k6,StyleSheetList:W.k8,WorkerLocation:W.qO,WorkerNavigator:W.qP,IDBDatabase:P.l5,IDBIndex:P.mb,IDBObjectStore:P.nl,IDBOpenDBRequest:P.hH,IDBVersionChangeRequest:P.hH,IDBRequest:P.hH,IDBTransaction:P.p_,SVGAElement:P.kn,SVGAnimateElement:P.ef,SVGAnimateMotionElement:P.ef,SVGAnimateTransformElement:P.ef,SVGAnimationElement:P.ef,SVGSetElement:P.ef,SVGFEBlendElement:P.lm,SVGFEColorMatrixElement:P.ln,SVGFEComponentTransferElement:P.lo,SVGFECompositeElement:P.lp,SVGFEConvolveMatrixElement:P.lq,SVGFEDiffuseLightingElement:P.lr,SVGFEDisplacementMapElement:P.ls,SVGFEFloodElement:P.lt,SVGFEGaussianBlurElement:P.lu,SVGFEImageElement:P.lv,SVGFEMergeElement:P.lw,SVGFEMorphologyElement:P.lx,SVGFEOffsetElement:P.ly,SVGFESpecularLightingElement:P.lz,SVGFETileElement:P.lA,SVGFETurbulenceElement:P.lB,SVGFilterElement:P.lQ,SVGCircleElement:P.cq,SVGClipPathElement:P.cq,SVGDefsElement:P.cq,SVGEllipseElement:P.cq,SVGForeignObjectElement:P.cq,SVGGElement:P.cq,SVGGeometryElement:P.cq,SVGLineElement:P.cq,SVGPathElement:P.cq,SVGPolygonElement:P.cq,SVGPolylineElement:P.cq,SVGRectElement:P.cq,SVGSwitchElement:P.cq,SVGGraphicsElement:P.cq,SVGImageElement:P.m9,SVGLength:P.d1,SVGLengthList:P.mF,SVGMarkerElement:P.n0,SVGMaskElement:P.n1,SVGNumber:P.d4,SVGNumberList:P.ni,SVGPatternElement:P.ny,SVGPointList:P.nD,SVGScriptElement:P.o_,SVGStringList:P.oE,SVGDescElement:P.cd,SVGDiscardElement:P.cd,SVGFEDistantLightElement:P.cd,SVGFEFuncAElement:P.cd,SVGFEFuncBElement:P.cd,SVGFEFuncGElement:P.cd,SVGFEFuncRElement:P.cd,SVGFEMergeNodeElement:P.cd,SVGFEPointLightElement:P.cd,SVGFESpotLightElement:P.cd,SVGMetadataElement:P.cd,SVGStopElement:P.cd,SVGStyleElement:P.cd,SVGTitleElement:P.cd,SVGComponentTransferFunctionElement:P.cd,SVGElement:P.cd,SVGSVGElement:P.oH,SVGSymbolElement:P.oJ,SVGTSpanElement:P.eG,SVGTextElement:P.eG,SVGTextPositioningElement:P.eG,SVGTextContentElement:P.eG,SVGTextPathElement:P.oQ,SVGTransform:P.d7,SVGTransformList:P.p0,SVGUseElement:P.pb,SVGViewElement:P.pf,SVGViewSpec:P.pg,SVGLinearGradientElement:P.hX,SVGRadialGradientElement:P.hX,SVGGradientElement:P.hX,SVGCursorElement:P.qv,SVGFEDropShadowElement:P.qw,SVGMPathElement:P.qx,AudioBuffer:P.fK,AudioBufferSourceNode:P.eV,AudioContext:P.fL,webkitAudioContext:P.fL,OfflineAudioContext:P.fL,AnalyserNode:P.bA,RealtimeAnalyserNode:P.bA,AudioDestinationNode:P.bA,BiquadFilterNode:P.bA,ChannelMergerNode:P.bA,AudioChannelMerger:P.bA,ChannelSplitterNode:P.bA,AudioChannelSplitter:P.bA,DelayNode:P.bA,DynamicsCompressorNode:P.bA,GainNode:P.bA,AudioGainNode:P.bA,IIRFilterNode:P.bA,MediaStreamAudioDestinationNode:P.bA,PannerNode:P.bA,AudioPannerNode:P.bA,webkitAudioPannerNode:P.bA,ScriptProcessorNode:P.bA,JavaScriptAudioNode:P.bA,StereoPannerNode:P.bA,WaveShaperNode:P.bA,AudioNode:P.bA,MediaElementAudioSourceNode:P.e0,MediaStreamAudioSourceNode:P.e0,OscillatorNode:P.e0,Oscillator:P.e0,AudioSourceNode:P.e0,ConvolverNode:P.kT,WebGLActiveInfo:P.kp,WebGL2RenderingContext:P.nR,WebGL2RenderingContextBase:P.qN,SQLResultSetRowList:P.jK})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.ju.$nativeSuperclassTag="ArrayBufferView"
H.hA.$nativeSuperclassTag="ArrayBufferView"
H.hC.$nativeSuperclassTag="ArrayBufferView"
H.hy.$nativeSuperclassTag="ArrayBufferView"
H.hB.$nativeSuperclassTag="ArrayBufferView"
H.hD.$nativeSuperclassTag="ArrayBufferView"
H.hz.$nativeSuperclassTag="ArrayBufferView"
W.h_.$nativeSuperclassTag="EventTarget"
W.h2.$nativeSuperclassTag="EventTarget"
W.h0.$nativeSuperclassTag="EventTarget"
W.h3.$nativeSuperclassTag="EventTarget"
W.h1.$nativeSuperclassTag="EventTarget"
W.h4.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xz(A.uU(),b)},[])
else (function(b){H.xz(A.uU(),b)})([])})})()
//# sourceMappingURL=ArtistNewspostController.dart.js.map
